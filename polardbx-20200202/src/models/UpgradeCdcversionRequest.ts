// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeCDCVersionRequest extends $dara.Model {
  /**
   * @example
   * 2.343
   */
  cdcDbVersion?: string;
  /**
   * @example
   * polarx-cdc-kernel-5.4.19-20240928_17274884
   */
  cdcMinorVersion?: string;
  /**
   * @example
   * pxc-hzrp****3p72fi
   */
  DBInstanceName?: string;
  /**
   * @example
   * pxc-shrvdc****wtf5uk-cdc
   */
  instanceName?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * 0
   */
  switchMode?: string;
  static names(): { [key: string]: string } {
    return {
      cdcDbVersion: 'CdcDbVersion',
      cdcMinorVersion: 'CdcMinorVersion',
      DBInstanceName: 'DBInstanceName',
      instanceName: 'InstanceName',
      regionId: 'RegionId',
      switchMode: 'SwitchMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdcDbVersion: 'string',
      cdcMinorVersion: 'string',
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

