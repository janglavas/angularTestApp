//browser console

//email


//// DEBUG:
export interface ILogger{
  Log();
}

export class BaseLogger implements ILogger{
  Log(){

  }
}

export class ConsoleLogger extends BaseLogger{
  Log(){
    console.log("using console logger");
  }
}

export class DbLogger extends BaseLogger{
  Log(){
    console.log("using database logger");
  }
}

export class FileLogger extends BaseLogger{
  Log(){
    console.log("using file logger");
  }
}
