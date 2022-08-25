type BaseUser = {
  name: string;
  age: number;
};

type SuperUser = {
  superHelperFn: () => void;
  standardHelperFn?: undefined;
};

type StandardUser = {
  standardHelperFn: () => void;
  superHelperFn?: undefined;
};

type User = BaseUser & (SuperUser | StandardUser);

function getUser(user: User) {
  if (user.superHelperFn) {
    user.superHelperFn();
  } else if (user.standardHelperFn) {
    user.standardHelperFn();
  }
}

getUser({
  name: "John",
  age: 30,
  superHelperFn: () => {
    console.log("Super user");
  },
});
getUser({
  name: "John",
  age: 30,
  standardHelperFn: () => {
    console.log("Standard user");
  },
});
