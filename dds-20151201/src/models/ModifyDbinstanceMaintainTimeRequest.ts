// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBInstanceMaintainTimeRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bpac2345****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The end time of the maintenance window. Specify the time in the ISO 8601 standard in the *HH:mm*Z format. The time must be in UTC.
   * 
   * >  The end time must be later than the start time of the maintenance window.
   * 
   * This parameter is required.
   * 
   * @example
   * 02:00Z
   */
  maintainEndTime?: string;
  /**
   * @remarks
   * The start time of the maintenance window. Specify the time in the ISO 8601 standard in the *HH:mm*Z format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 01:00Z
   */
  maintainStartTime?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      maintainEndTime: 'MaintainEndTime',
      maintainStartTime: 'MaintainStartTime',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      maintainEndTime: 'string',
      maintainStartTime: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

