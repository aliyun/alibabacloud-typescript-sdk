// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyActiveOperationMaintenanceConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The list of days in the O&M cycle, separated by commas (,).
   * 
   * - If CycleType is set to Month, each item is an integer from 1 to 28, which represents a day of the month.
   * - If CycleType is set to Week, each item is an integer from 1 to 7, which represents a day of the week.
   * 
   * @example
   * 1,2,3
   */
  cycleTime?: string;
  /**
   * @remarks
   * The cycle type. Valid values:
   * - Month: Monthly.
   * - Week: Weekly.
   * 
   * @example
   * Week
   */
  cycleType?: string;
  /**
   * @remarks
   * The end time of the instance O&M window. The time is in the HH:mmZ format and in UTC.
   * 
   * @example
   * 22:00Z
   */
  maintainEndTime?: string;
  /**
   * @remarks
   * The start time of the instance O&M window. The time is in the HH:mmZ format and in UTC.
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
   * Specifies whether the configuration takes effect. Valid values: 
   * - 1: Effective. 
   * - 2: Invalid.
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

