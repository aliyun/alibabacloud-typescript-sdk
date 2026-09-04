// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradePxfsVersionRequest extends $dara.Model {
  /**
   * @remarks
   * The PolarDB-X instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pxc-xxxxxxxx
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The target minor version.
   * 
   * @example
   * 1.1.0
   */
  minorVersion?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      minorVersion: 'MinorVersion',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      minorVersion: 'string',
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

