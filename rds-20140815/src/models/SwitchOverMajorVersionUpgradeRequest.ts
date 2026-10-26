// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SwitchOverMajorVersionUpgradeRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request and prevent duplicate submissions. You can use the client to generate the token, but you must ensure that it is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * ETnLKlblzczshOTUbOCzxxxxxxxxxx
   */
  clientToken?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * pgm-m5e4gegx63fh92bn
   */
  DBInstanceName?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/610399.html) operation to query the region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: Buffer;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmy****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Specifies the maximum tolerance time for the switchover. If the switchover exceeds this time, it is canceled. Unit: seconds. Valid values: 10 to 3600.
   * 
   * @example
   * 10
   */
  switchoverTimeout?: number;
  /**
   * @remarks
   * Specifies the operation type for the switchover. Valid values:
   * * switch: Switchover.
   * * cancel: Cancel.
   * * interrupt: Interrupt.
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

