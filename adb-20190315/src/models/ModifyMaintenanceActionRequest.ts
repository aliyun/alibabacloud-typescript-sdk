// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyMaintenanceActionRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the pending O\\&M event. You can specify multiple IDs to batch change the switchover time. Separate multiple IDs with commas (,).
   * > - You can call the [DescribeMaintenanceAction](https://help.aliyun.com/document_detail/271738.html) operation to query the information about pending O\\&M events, including the event ID.
   * > - You can change the switchover time only for pending O\\&M events. The switchover time of historical O\\&M events cannot be changed. For more information about the status of pending and historical O\\&M events, see [DescribeMaintenanceAction](https://help.aliyun.com/document_detail/271738.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 11111
   */
  ids?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the pending O\\&M event occurs.
   * 
   * > - You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-4690g37929XXXX
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The point in time when you want the system to perform operations on the pending O\\&M event. Specify the time in the ISO 8601 standard in the `yyyy-MM-ddTHH:mm:ssZ` format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-07-09T22:00:00Z
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

