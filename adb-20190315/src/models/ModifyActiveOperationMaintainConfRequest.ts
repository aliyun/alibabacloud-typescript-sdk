// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyActiveOperationMaintainConfRequest extends $dara.Model {
  /**
   * @remarks
   * The days on which you want to execute O\\&M events. Valid values: 1 to 7.
   * 
   * @example
   * 1,2,3,4,5,6,7
   */
  cycleTime?: string;
  /**
   * @remarks
   * The unit of the O\\&M cycle. Set the value to Week.
   * 
   * @example
   * Week
   */
  cycleType?: string;
  /**
   * @remarks
   * The end time of the maintenance window.
   * 
   * @example
   * 02:00:00Z
   */
  maintainEndTime?: string;
  /**
   * @remarks
   * The start time of the maintenance window.
   * 
   * @example
   * 02:00:00Z
   */
  maintainStartTime?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  /**
   * @remarks
   * Specifies whether to enable O\\&M events.
   * 
   * *   1: yes.
   * *   0: no.
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
      regionId: 'RegionId',
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
      regionId: 'string',
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

