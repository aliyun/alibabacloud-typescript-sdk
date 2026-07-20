// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class User extends $dara.Model {
  createdAt?: number;
  createdBy?: string;
  displayName?: string;
  type?: string;
  updatedAt?: number;
  updatedBy?: string;
  userId?: string;
  userName?: string;
  userPrincipal?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'createdAt',
      createdBy: 'createdBy',
      displayName: 'displayName',
      type: 'type',
      updatedAt: 'updatedAt',
      updatedBy: 'updatedBy',
      userId: 'userId',
      userName: 'userName',
      userPrincipal: 'userPrincipal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'number',
      createdBy: 'string',
      displayName: 'string',
      type: 'string',
      updatedAt: 'number',
      updatedBy: 'string',
      userId: 'string',
      userName: 'string',
      userPrincipal: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

