// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetMessageCloudMonitorConfigRequest extends $dara.Model {
  appId?: string;
  eventTypeList?: string;
  groupId?: number;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      eventTypeList: 'EventTypeList',
      groupId: 'GroupId',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      eventTypeList: 'string',
      groupId: 'number',
      ownerAccount: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

