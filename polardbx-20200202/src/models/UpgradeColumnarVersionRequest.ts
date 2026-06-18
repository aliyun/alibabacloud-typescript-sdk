// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeColumnarVersionRequest extends $dara.Model {
  /**
   * @remarks
   * The column store version.
   * 
   * @example
   * polarx-col-kernel-5.4.20-20250819_17555906
   */
  columnarVersion?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * pxc-xxx
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * pxc-hzrh51fze****pon-cdc
   */
  instanceName?: string;
  /**
   * @remarks
   * The region in which the instance resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The switch mode.
   * 
   * @example
   * 0
   */
  switchMode?: string;
  static names(): { [key: string]: string } {
    return {
      columnarVersion: 'ColumnarVersion',
      DBInstanceName: 'DBInstanceName',
      instanceName: 'InstanceName',
      regionId: 'RegionId',
      switchMode: 'SwitchMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnarVersion: 'string',
      DBInstanceName: 'string',
      instanceName: 'string',
      regionId: 'string',
      switchMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

