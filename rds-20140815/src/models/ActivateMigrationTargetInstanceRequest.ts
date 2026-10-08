// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ActivateMigrationTargetInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the target instance. You can invoke the DescribeDBInstances operation to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pgm-bp102g323jd4****
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * Set this parameter to 1, which specifies a forced switchover.
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
   * The switchover time mode for cloud migration.
   * 
   * Set this parameter to 0, which specifies an immediate switchover.
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

