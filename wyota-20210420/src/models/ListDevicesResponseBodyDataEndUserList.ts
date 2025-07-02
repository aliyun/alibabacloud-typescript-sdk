// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDevicesResponseBodyDataEndUserList extends $dara.Model {
  adDomain?: string;
  bindTime?: string;
  directoryId?: string;
  endUserId?: string;
  id?: number;
  serialNo?: string;
  tenantId?: string;
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      adDomain: 'AdDomain',
      bindTime: 'BindTime',
      directoryId: 'DirectoryId',
      endUserId: 'EndUserId',
      id: 'Id',
      serialNo: 'SerialNo',
      tenantId: 'TenantId',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adDomain: 'string',
      bindTime: 'string',
      directoryId: 'string',
      endUserId: 'string',
      id: 'number',
      serialNo: 'string',
      tenantId: 'string',
      userType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

