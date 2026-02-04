// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyActiveOperationMaintainConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The interval between two O\\&M tasks.
   * 
   * *   If the CycleType parameter is set to Month, the CycleTime parameter returns a string of numbers ranging from 1 to 28, which indicates the specific days of the month. The numbers are separated with commas (,). The CycleTime parameter returns 0 when the configurations do not take effect.
   * *   If the CycleType parameter is set to Week, the CycleTime parameter returns a string of numbers ranging from 1 to 7, which indicates the specific days of the week. The numbers are separated with commas (,). The CycleTime parameter returns 0 when the configurations do not take effect.
   * 
   * @example
   * 1,2,3,4,5
   */
  cycleTime?: string;
  /**
   * @remarks
   * The unit of the billing cycle. Valid values:
   * 
   * *   Month
   * *   Week
   * 
   * @example
   * Week
   */
  cycleType?: string;
  /**
   * @remarks
   * The end time of the O\\&M window. The time follows the ISO 8601 standard in the HH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 20:00:00Z
   */
  maintainEndTime?: string;
  /**
   * @remarks
   * The start time of the O\\&M window. The time follows the ISO 8601 standard in the *HH:mm:ss* Z format. The time is displayed in UTC.
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
   * Specifies whether the configurations take effect. Valid values:
   * 
   * *   1: The configurations take effect.
   * *   2: The configurations do not take effect.
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

