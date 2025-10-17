// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBNodeClassRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must ensure that it is unique among different requests. The token can only contain ASCII characters and cannot exceed 64 characters in length. The token is case-sensitive.
   * 
   * @example
   * 6000170000591aed949d0f54a343f1a4233c1e7d1c5c******
   */
  clientToken?: string;
  /**
   * @example
   * ENS
   */
  cloudProvider?: string;
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-*************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The specifications of all nodes. For more information, see [Specifications of computing nodes](https://help.aliyun.com/document_detail/102542.html).
   * 
   * This parameter is required.
   * 
   * @example
   * polar.mysql.x4.large
   */
  DBNodeTargetClass?: string;
  /**
   * @remarks
   * The type of the node. Valid values:
   * 
   * *   RO
   * *   STANDBY
   * *   DLNode
   * 
   * @example
   * DLNode
   */
  DBNodeType?: string;
  /**
   * @remarks
   * The type of the configuration change. Valid values:
   * 
   * *   **Upgrade**
   * *   **Downgrade**
   * 
   * This parameter is required.
   * 
   * @example
   * Upgrade
   */
  modifyType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The latest start time to upgrade the specifications within the scheduled time period. Specify the time in the ISO 8601 standard in the `YYYY-MM-DDThh:mm:ssZ` format. The time must be in UTC.
   * 
   * > *   The value of this parameter must be at least 30 minutes later than the value of PlannedStartTime.
   * >*   By default, if you specify `PlannedStartTime` but do not specify PlannedEndTime, the latest start time of the task is set to `Value of PlannedEndTime + 30 minutes`. For example, if you set `PlannedStartTime` to `2021-01-14T09:00:00Z` and you do not specify PlannedEndTime, the latest start time of the task is `2021-01-14T09:30:00Z`.
   * 
   * @example
   * 2021-01-14T09:30:00Z
   */
  plannedEndTime?: string;
  plannedFlashingOffTime?: string;
  /**
   * @remarks
   * The earliest start time to upgrade the specifications within the scheduled time period. Specify the time in the ISO 8601 standard in the `YYYY-MM-DDThh:mm:ssZ` format. The time must be in UTC.
   * 
   * >*   This parameter takes effect only when `ModifyType` is set to `Upgrade`.
   * >*   The earliest start time of the task can be a point in time within the next 24 hours. For example, if the current time is `2021-01-14T09:00:00Z`, you can specify a point in the time that ranges from `2021-01-14T09:00:00Z` to `2021-01-15T09:00:00Z`.
   * >*   If this parameter is left empty, the upgrade task is immediately performed.
   * 
   * @example
   * 2021-01-14T09:00:00Z
   */
  plannedStartTime?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The category of the cluster. Valid values:
   * 
   * *   **normal_exclusive**: dedicated.
   * *   **normal_general**: genera-purpose.
   * 
   * @example
   * normal_general
   */
  subCategory?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      cloudProvider: 'CloudProvider',
      DBClusterId: 'DBClusterId',
      DBNodeTargetClass: 'DBNodeTargetClass',
      DBNodeType: 'DBNodeType',
      modifyType: 'ModifyType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      plannedEndTime: 'PlannedEndTime',
      plannedFlashingOffTime: 'PlannedFlashingOffTime',
      plannedStartTime: 'PlannedStartTime',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      subCategory: 'SubCategory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      cloudProvider: 'string',
      DBClusterId: 'string',
      DBNodeTargetClass: 'string',
      DBNodeType: 'string',
      modifyType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      plannedEndTime: 'string',
      plannedFlashingOffTime: 'string',
      plannedStartTime: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      subCategory: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

