import igem_wikisync as sync
import os

os.environ['IGEM_USERNAME'] = ''
os.environ['IGEM_PASSWORD'] = ''

sync.run(
    team='UFlorida',
    src_dir='C:/Users/Garrett/Documents/Documents/wiki/src',
    build_dir='C:/Users/Garrett/Documents/Documents/wiki/build'
)
