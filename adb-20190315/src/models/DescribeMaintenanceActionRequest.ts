// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMaintenanceActionRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to return the information about pending or historical O\\&M events. Valid values:
   * 
   * *   **0**: returns the information about pending O\\&M event.
   * *   **1**: returns the information about historical O\\&M event.
   * 
   * If you do not specify this parameter, the information about pending O\\&M event are returned.
   * 
   * @example
   * 1
   */
  isHistory?: number;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: **30**, **50**, and **100**. Default value: 30.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID. Valid values:
   * 
   * *   The ID of the region where the O\\&M event occurs. Example: `cn-hangzhou`. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the most recent region list.
   * *   You can also set Region to `all` to query the O\\&M events in all regions. If you set `Region` to `all`, you must set `TaskType` to `all`.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The ID of the region where the O\\&M event occurs.
   * 
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The type of the O\\&M event. Valid values:
   * 
   * *   **rds_apsaradb_upgrade**: database software upgrades.
   * *   **all**: all the O\\&M events in all regions within the current account. If you set `Region` to `all`, you must set `TaskType` to `all`.
   * 
   * This parameter is required.
   * 
   * @example
   * rds_apsaradb_upgrade
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      isHistory: 'IsHistory',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      region: 'Region',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isHistory: 'number',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      region: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      taskType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

