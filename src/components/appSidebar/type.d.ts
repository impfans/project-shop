declare interface IAppSidebarContextValue {
  isLogin?: boolean;
  user?: IUser | null;
}

declare interface IUser {
  id?: string;
  name?: string;
  email?: string;
  avatar?: string;
}
