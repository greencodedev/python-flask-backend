# Google App Engine Samples

[![Open in Cloud Shell][shell_img]][shell_link]

[shell_img]: http://gstatic.com/cloudssh/images/open-btn.png
[shell_link]: https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/greencodedev/python-flask-backend&page=editor&open_in_editor=appengine/standard/README.md

[![Run on Google Cloud](https://deploy.cloud.run/button.svg)](https://deploy.cloud.run)

# flask-firestore
Building a Flask(Python) CRUD API with Firestore(Firebase) and Deploying on Cloud Run.



## Endpoints
- `/add` - save text into server | POST
- `/list` - List all saved texts | GET
- `/update?id=ID_GOES_HERE` - Update a text | POST
- `/delete?id=ID_GOES_HERE` - Delete a text | DELETE

> Pass `?document_id=mydoc` to use a custom text
> Pass `?collection=appointment` to use a custom collection.
> Pass `?sub_collection=property` to use a custom sub_collection.

## Running Application
```
FLASK_APP=main.py FLASK_ENV=development flask run --port 8080
or
python3 main.py
```
