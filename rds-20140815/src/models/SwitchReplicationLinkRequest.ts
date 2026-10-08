// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SwitchReplicationLinkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the source instance, which is the primary instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-2zecuz9tolf******
   */
  DBInstanceId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The name of the target disaster recovery instance to which you want to switch.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-t4neh0q12v1******
   */
  targetInstanceName?: string;
  /**
   * @remarks
   * The region of the target disaster recovery instance to which you want to switch.
   * 
   * This parameter is required.
   * 
   * @example
   * ap-southeast-1
   */
  targetInstanceRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      ownerId: 'OwnerId',
      targetInstanceName: 'TargetInstanceName',
      targetInstanceRegionId: 'TargetInstanceRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      ownerId: 'number',
      targetInstanceName: 'string',
      targetInstanceRegionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

