// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SwitchOverMajorVersionUpgradeRequest extends $dara.Model {
  /**
   * @example
   * pgm-m5e4gegx63fh92bn
   */
  DBInstanceName?: string;
  ownerId?: number;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: Buffer;
  /**
   * @example
   * 10
   */
  switchoverTimeout?: number;
  /**
   * @example
   * switch
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      switchoverTimeout: 'SwitchoverTimeout',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      ownerId: 'number',
      regionId: 'Buffer',
      switchoverTimeout: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

