// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EntityMediaBasicInfo extends $dara.Model {
  appId?: string;
  biz?: string;
  createTime?: string;
  entityId?: string;
  entityMediaId?: string;
  modifiedTime?: string;
  status?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      biz: 'Biz',
      createTime: 'CreateTime',
      entityId: 'EntityId',
      entityMediaId: 'EntityMediaId',
      modifiedTime: 'ModifiedTime',
      status: 'Status',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      biz: 'string',
      createTime: 'string',
      entityId: 'string',
      entityMediaId: 'string',
      modifiedTime: 'string',
      status: 'string',
      userData: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

