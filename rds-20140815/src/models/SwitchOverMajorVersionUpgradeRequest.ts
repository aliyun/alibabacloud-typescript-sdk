// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SwitchOverMajorVersionUpgradeRequest extends $dara.Model {
  clientToken?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * pgm-m5e4gegx63fh92bn
   */
  DBInstanceName?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/610399.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: Buffer;
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The timeout period for the switchover operation. The operation is canceled after it has been performed for a time period that exceeds the value. Unit: seconds. Valid value: 10 to 3600.
   * 
   * @example
   * 10
   */
  switchoverTimeout?: number;
  /**
   * @remarks
   * The type of the switchover operation. Valid values:
   * 
   * *   switch
   * *   cancel
   * *   interrupt
   * 
   * @example
   * switch
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      DBInstanceName: 'DBInstanceName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      switchoverTimeout: 'SwitchoverTimeout',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      DBInstanceName: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'Buffer',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      switchoverTimeout: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

