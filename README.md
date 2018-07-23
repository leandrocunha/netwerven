# The Vacancy apply page

First we need install the dependencies

```
$ npm install
```

Now let's compile all application.

```
$ npm run build
```

And finally, we can test on browser, but we first need a static server

```
$ npm install -g serve
$ server -s build
```

## The application form

The form have a simple validation and upload simulation. To test validation you can try submit form pressing the "Apply for this job" button.

To pass in validation, just type more them three characters and a valid email.

To the upload simulation press the "Desktop" button of resume and select one file. Here have validation for file types and file type according requirements.
