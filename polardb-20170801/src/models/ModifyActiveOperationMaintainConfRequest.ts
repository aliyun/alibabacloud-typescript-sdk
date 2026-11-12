// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyActiveOperationMaintainConfRequest extends $dara.Model {
  /**
   * @remarks
   * The remark for the operation.
   * 
   * @example
   * test
   */
  comment?: string;
  /**
   * @remarks
   * The cycle time.
   * - If CycleType is set to Month, the value is a number from 1 to 28, which indicates the day of the month. Multiple values are separated by commas (,).
   * - If CycleType is set to Week, the value is a number from 1 to 7, which indicates the day of the week. Multiple values are separated by commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  cycleTime?: string;
  /**
   * @remarks
   * The cycle type. Valid values:
   * - Month: Monthly.
   * - Week: Weekly.
   * 
   * This parameter is required.
   * 
   * @example
   * Week
   */
  cycleType?: string;
  /**
   * @remarks
   * The end time of the maintenance window. Specify the time in the HH:mmZ-HH:mmZ format. The time must be in UTC. Note: The format is explicitly declared as HH:mm:ssZ, and example values are updated to actual available formats such as 02:00:00Z and 06:00:00Z.
   * 
   * This parameter is required.
   * 
   * @example
   * 12:00Z
   */
  maintainEndTime?: string;
  /**
   * @remarks
   * The start time of the task. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC. Note: The format is explicitly declared as HH:mm:ssZ, and example values are updated to actual available formats such as 02:00:00Z and 06:00:00Z.
   * 
   * This parameter is required.
   * 
   * @example
   * 8:00Z
   */
  maintainStartTime?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-chengdu
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
   * Specifies whether the configuration takes effect. Valid values:
   * - 1: Yes.
   * - 2: No.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      cycleTime: 'CycleTime',
      cycleType: 'CycleType',
      maintainEndTime: 'MaintainEndTime',
      maintainStartTime: 'MaintainStartTime',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      cycleTime: 'string',
      cycleType: 'string',
      maintainEndTime: 'string',
      maintainStartTime: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

