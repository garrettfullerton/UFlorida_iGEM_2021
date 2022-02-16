import igem_wikisync as sync
import os

os.environ['IGEM_USERNAME'] = 'gfullerton'
os.environ['IGEM_PASSWORD'] = 'NutM3g245!'

sync.run(
    team='UFlorida',
    src_dir='C:/Users/Garrett/Documents/Documents/wiki/src',
    build_dir='C:/Users/Garrett/Documents/Documents/wiki/build'
)
