// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloseEngineMigrationRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to keep binlog enabled. Valid values:
   * 
   * * **true**: Keeps binlog enabled.
   * * **false**: Disables binlog.
   * 
   * Default value: **true**.
   * 
   * > Disabling binlog restarts your PolarDB cluster.
   * 
   * @example
   * true
   */
  continueEnableBinlog?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * pxc-htri0****r4k9p
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The region ID.
   * 
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

