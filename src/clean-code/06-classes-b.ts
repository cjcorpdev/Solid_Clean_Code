(() => {
  //Tupe
  type Gender = "M" | "F";
  //Interface Props
  interface PersonProps {
    name: string;
    gender: Gender;
    birthdate: Date;
  }
  //Class Person
  class Person {
    public birthdate: Date;
    public gender: Gender;
    public name: string;
    constructor({ name, gender, birthdate }: PersonProps) {
      this.birthdate = birthdate;
      this.gender = gender;
      this.name = name;
    }
  }
  //Interfaces Props
  interface UserProps {
    birthdate: Date;
    email: string;
    gender: Gender;
    name: string;
    role: string;
  }
  //Class User
  class User extends Person {
    public email: string;
    public lastAccess: Date;
    public role: string;
    constructor({
      email,
      role,
      name,
      gender,
      birthdate
    }: UserProps) {
      super({ name, gender, birthdate });
      this.email = email;
      this.lastAccess = new Date();
      this.role = role;
    }
    checkCredentials() {
      return true;
    }
  }
  //Interface Props
  interface UserSettingProps {
    birthdate: Date;
    email: string;
    gender: Gender;
    lastOpenFolder: string;
    name: string;
    role: string;
    workingDirectory: string;
  }
  //Class User Settings
  class UserSettings extends User {
    public workingDirectory: string;
    public lastOpenFolder: string;
    constructor({
      birthdate,
      email,
      gender,
      lastOpenFolder,
      name,
      role,
      workingDirectory,
    }: user) {
      super({ email, role, name, gender, birthdate });
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder = lastOpenFolder;
    }
  }
  //code
  const userSettings = new UserSettings({
    birthdate:new Date('1982-04-14'),
    email:'Dc_Dev@dc_dev.com',
    gender:'M',
    lastOpenFolder:'/home',
    name:'Dc_Dev',
    role:'Admin',
    workingDirectory:'/usr/home',
  });
  //print for console
  console.log({ userSettings });
})();
