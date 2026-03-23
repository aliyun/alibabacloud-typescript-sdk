// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ActivateMigrationTargetInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  DBInstanceName?: string;
  forceSwitch?: string;
  resourceOwnerId?: number;
  switchTime?: string;
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

