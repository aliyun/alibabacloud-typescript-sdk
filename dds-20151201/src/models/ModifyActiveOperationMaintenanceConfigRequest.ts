// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyActiveOperationMaintenanceConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The day of the cycle.
   * 
   * - If CycleType is set to Month, enter a number from 1 to 28 to specify the day of the month. Use a comma (,) to separate multiple days.
   * 
   * - If CycleType is set to Week, enter a number from 1 to 7 to specify the day of the week. Use a comma (,) to separate multiple days.
   * 
   * @example
   * 1,2,3
   */
  cycleTime?: string;
  /**
   * @remarks
   * The cycle type.
   * 
   * - Month: monthly
   * 
   * - Week: weekly
   * 
   * @example
   * Week
   */
  cycleType?: string;
  /**
   * @remarks
   * The end time of the O\\&M window for the instance. The time is in the HH:mmZ format and is in UTC.
   * 
   * @example
   * 22:00Z
   */
  maintainEndTime?: string;
  /**
   * @remarks
   * The start time of the O\\&M window for the instance. The time is in the HH:mmZ format and is in UTC.
   * 
   * @example
   * 21:00Z
   */
  maintainStartTime?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Specifies whether the configuration is enabled.
   * 
   * - 1: enabled
   * 
   * - 2: disabled
   * 
   * @example
   * 1
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

