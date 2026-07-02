// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyActiveOperationMaintainConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The days of the cycle.
   * 
   * - If `CycleType` is `Month`, specify the days of the month (1 to 28). Separate multiple days with a comma (,).
   * 
   * - If `CycleType` is `Week`, specify the days of the week (1 to 7). Separate multiple days with a comma (,).
   * 
   * @example
   * 1,2,3,4,5
   */
  cycleTime?: string;
  /**
   * @remarks
   * The cycle type of the maintenance window. Valid values:
   * 
   * - `Month`
   * 
   * - `Week`
   * 
   * @example
   * Week
   */
  cycleType?: string;
  /**
   * @remarks
   * The end time of the maintenance window, specified in *HH:mm:ss*Z format (UTC time).
   * 
   * @example
   * 20:00:00Z
   */
  maintainEndTime?: string;
  /**
   * @remarks
   * The start time of the maintenance window, specified in *HH:mm:ss*Z format (UTC time).
   * 
   * @example
   * 16:00:00Z
   */
  maintainStartTime?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  /**
   * @remarks
   * Specifies whether the configuration is enabled. Valid values:
   * 
   * - 1: enabled
   * 
   * - 2: disabled
   * 
   * @example
   * 2
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      cycleTime: 'CycleTime',
      cycleType: 'CycleType',
      maintainEndTime: 'MaintainEndTime',
      maintainStartTime: 'MaintainStartTime',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cycleTime: 'string',
      cycleType: 'string',
      maintainEndTime: 'string',
      maintainStartTime: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
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

