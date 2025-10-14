// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloseEngineMigrationRequest extends $dara.Model {
  /**
   * @example
   * true
   */
  continueEnableBinlog?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pxc-htri0****r4k9p
   */
  DBInstanceName?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      continueEnableBinlog: 'ContinueEnableBinlog',
      DBInstanceName: 'DBInstanceName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      continueEnableBinlog: 'string',
      DBInstanceName: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

