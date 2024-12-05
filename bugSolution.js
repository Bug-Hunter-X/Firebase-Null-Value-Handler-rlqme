The solution involves adding a check for null values before accessing properties:

```javascript
firebase.database().ref('/users/' + userId).once('value', function(snapshot) {
  var user = snapshot.val();
  if (user) {
    // Access user data safely
    console.log(user.name ? user.name : 'Name not available'); 
  } else {
    console.log('User not found');
  }
});
```

This improved code first checks if `user` is null before accessing `user.name`.  If `user` is null, a default value ('Name not available') is used.  This prevents the error caused by trying to access a property of a null object.