// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyPendingMaintenanceActionRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the task. You can specify multiple task IDs at a time to modify the switching time of the tasks in a unified manner. The task IDs must be separated with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * 111111
   */
  ids?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/98041.html) operation to query the region ID details.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-************
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  /**
   * @remarks
   * The time that you specify for the background to perform the action that corresponds to the pending event. Specify the time in the `yyyy-MM-ddTHH:mm:ssZ` format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2020-06-09T22:00:00Z
   */
  switchTime?: string;
  static names(): { [key: string]: string } {
    return {
      ids: 'Ids',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
      switchTime: 'SwitchTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ids: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
      switchTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

