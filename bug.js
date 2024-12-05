The following code snippet demonstrates a common error when using Firebase's Realtime Database:

```javascript
firebase.database().ref('/users/' + userId).once('value', function(snapshot) {
  var user = snapshot.val();
  if (user) {
    // Access user data
    console.log(user.name);
  } else {
    console.log('User not found');
  }
});
```

This code works fine if the user exists, but if the user does not exist in the database, it will result in an error because `snapshot.val()` will return `null`, and attempting to access `user.name` on `null` will throw an error.