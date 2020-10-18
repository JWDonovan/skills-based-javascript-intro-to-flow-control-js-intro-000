function basicTeenager(age) {
  if (age >= 13 && age <= 19) {
    return 'You are a teenager!';
  } else {
    return undefined;
  }
}

function teenager(age) {
  if (age >= 13 && age <= 19) {
    return 'You are a teenager!';
  } else {
    return 'You are not a teenager';
  }
}

function ageChecker(age) {
  if (age < 13) {
    return 'You are a kid';
  } else if (age >= 20) {
    return 'You are a grownup';
  } else {
    return 'You are a teenager!';
  }
}

function ternaryTeenager(age) {
   return age >= 13 && age <= 19 ? 'You are a teenager' : 'You are not a teenager';
}

function switchAge(age) {
  console.log('age is ' + age);

  switch (age) {
    case (age >= 13 && age <= 19):
      return 'You are a teenager';
      break;
    default:
      return 'You have an age';
  }
}
