// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ActivateMigrationTargetInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID. You can call the DescribeDBInstances operation to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pgm-bp102g323jd4****
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * Specifies whether to forcefully perform a switchover. Set the value to 1. The value 1 specifies a forceful switchover.
   * 
   * @example
   * 1
   */
  forceSwitch?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * A reserved parameter. This parameter does not take effect.
   * 
   * @example
   * 2022-02-25T06:57:41Z
   */
  switchTime?: string;
  /**
   * @remarks
   * The time when you want to perform the switchover.
   * 
   * Set the value to 0. The value 0 specifies an immediate switchover.
   * 
   * @example
   * 0
   */
  switchTimeMode?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      forceSwitch: 'ForceSwitch',
      resourceOwnerId: 'ResourceOwnerId',
      switchTime: 'SwitchTime',
      switchTimeMode: 'SwitchTimeMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      forceSwitch: 'string',
      resourceOwnerId: 'number',
      switchTime: 'string',
      switchTimeMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

