// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyActiveOperationMaintainConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The cycle time.
   * - If CycleType is set to Month, the value is a number from 1 to 28 that indicates the day of the month. Multiple values are separated by commas (,). The value is 0 when the configuration does not take effect.
   * - If CycleType is set to Week, the value is a number from 1 to 7 that indicates the day of the week. Multiple values are separated by commas (,). The value is 0 when the configuration does not take effect.
   * 
   * @example
   * 1,2,3,4,5
   */
  cycleTime?: string;
  /**
   * @remarks
   * The cycle type. Valid values:
   * - Month: monthly
   * - Week: weekly
   * 
   * @example
   * Week
   */
  cycleType?: string;
  /**
   * @remarks
   * The end time of the O&M time window. The time is in the HH:mm:ssZ format (UTC).
   * 
   * @example
   * 20:00:00Z
   */
  maintainEndTime?: string;
  /**
   * @remarks
   * The start time of the O&M time window. The time is in the <i>HH:mm:ss</i>Z format (UTC).
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
   * Specifies whether the configuration takes effect. Valid values:
   * - 1: The configuration takes effect.
   * - 2: The configuration does not take effect.
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

