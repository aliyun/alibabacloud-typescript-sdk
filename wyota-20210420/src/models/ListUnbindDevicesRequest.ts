// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUnbindDevicesRequest extends $dara.Model {
  adDomain?: string;
  alias?: string;
  clientType?: number;
  directoryId?: string;
  endUserId?: string;
  inManage?: boolean;
  lastLoginUser?: string;
  pageNumber?: number;
  pageSize?: number;
  serialNo?: string;
  userType?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      adDomain: 'AdDomain',
      alias: 'Alias',
      clientType: 'ClientType',
      directoryId: 'DirectoryId',
      endUserId: 'EndUserId',
      inManage: 'InManage',
      lastLoginUser: 'LastLoginUser',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      serialNo: 'SerialNo',
      userType: 'UserType',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adDomain: 'string',
      alias: 'string',
      clientType: 'number',
      directoryId: 'string',
      endUserId: 'string',
      inManage: 'boolean',
      lastLoginUser: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      serialNo: 'string',
      userType: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

