// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySmsAppIcpRecordShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * A list of icp record entity IDs.
   * 
   * This parameter is required.
   */
  appIcpRecordIdListShrink?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      appIcpRecordIdListShrink: 'AppIcpRecordIdList',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appIcpRecordIdListShrink: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

