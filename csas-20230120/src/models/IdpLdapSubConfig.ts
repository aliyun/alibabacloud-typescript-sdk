// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IdpLdapSubConfig extends $dara.Model {
  baseDn?: string;
  groupBaseDn?: string;
  groupFilter?: string;
  groupMembershipAttr?: string;
  groupNameAttr?: string;
  loginNameAttr?: string;
  serverAddr?: string;
  serverPort?: string;
  serverType?: string;
  useSsl?: boolean;
  userDn?: string;
  userFilter?: string;
  userPassword?: string;
  static names(): { [key: string]: string } {
    return {
      baseDn: 'BaseDn',
      groupBaseDn: 'GroupBaseDn',
      groupFilter: 'GroupFilter',
      groupMembershipAttr: 'GroupMembershipAttr',
      groupNameAttr: 'GroupNameAttr',
      loginNameAttr: 'LoginNameAttr',
      serverAddr: 'ServerAddr',
      serverPort: 'ServerPort',
      serverType: 'ServerType',
      useSsl: 'UseSsl',
      userDn: 'UserDn',
      userFilter: 'UserFilter',
      userPassword: 'UserPassword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseDn: 'string',
      groupBaseDn: 'string',
      groupFilter: 'string',
      groupMembershipAttr: 'string',
      groupNameAttr: 'string',
      loginNameAttr: 'string',
      serverAddr: 'string',
      serverPort: 'string',
      serverType: 'string',
      useSsl: 'boolean',
      userDn: 'string',
      userFilter: 'string',
      userPassword: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

