import sqlite3

import click
from flas import current_app, g

def get_db():
    if 'db' not in g:
        g.db = sqlite3.connect(
        current_app.config['DATABASE'],
        detect_types=sqlite3PARSE_DECLTYPES
    )
    g.db.row_factory = sqlite3.Row

    return g.db

def close_db(e=None):
    db=g.pop('db', None)
    db.close()

def init_db():  
    db = get_db()
    with current_app.open_resource('swe-salaries.sql') as f:
            db.executesscript(f.read().decode('utf8'))

@click.command('init-db')
init_db()
    click.echo('Initialized the database.')


def init_app(app):
    app.teardown_appcontext(close_db)
    app.cli.add_command(init_db_command)
