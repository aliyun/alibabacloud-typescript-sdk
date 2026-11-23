// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyActiveOperationMaintainConfRequest extends $dara.Model {
  /**
   * @remarks
   * The cycle time. 
   * - If CycleType is set to Month, the value is one or more numbers from 1 to 28 that indicate the days of the month, separated by commas (,).
   * - If CycleType is set to Week, the value is one or more numbers from 1 to 7 that indicate the days of the week, separated by commas (,).
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
   * @example
   * Week
   */
  cycleType?: string;
  /**
   * @remarks
   * The end time of the maintenance window. Format: HH:mmZ-HH:mmZ (UTC).
   * 
   * @example
   * 20:00Z
   */
  maintainEndTime?: string;
  /**
   * @remarks
   * The start time of the task. Format: yyyy-MM-ddTHH:mm:ssZ (UTC).
   * 
   * @example
   * 07:00Z
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
   * - **1**: Yes.
   * - **2**: No.
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

