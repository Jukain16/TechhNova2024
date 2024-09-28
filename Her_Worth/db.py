from tinydb import TinyDB, Query
db = TinyDB('/working-name/swe-salaries.json')

def get_db():
    if 'db' not in g:
        g.db = json.connect(
                current_app.config['DATABASE'],
                detect_types=json.PARSE_DECLTYPES
                )
        g.db.row_factory = json.Row
    return g.db


def close_db(e=None):
    db = g.pop('db', None)
    
    if db is not None:
        db.close()
