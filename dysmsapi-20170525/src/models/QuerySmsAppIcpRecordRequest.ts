// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySmsAppIcpRecordRequest extends $dara.Model {
  /**
   * @remarks
   * app-icp备案实体id列表
   * 
   * This parameter is required.
   */
  appIcpRecordIdList?: number[];
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      appIcpRecordIdList: 'AppIcpRecordIdList',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appIcpRecordIdList: { 'type': 'array', 'itemType': 'number' },
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.appIcpRecordIdList)) {
      $dara.Model.validateArray(this.appIcpRecordIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

