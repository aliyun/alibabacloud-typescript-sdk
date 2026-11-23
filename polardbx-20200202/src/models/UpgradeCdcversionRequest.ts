// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeCDCVersionRequest extends $dara.Model {
  /**
   * @remarks
   * The target database version for the upgrade. You can call the [DescribeDBClusterVersion](https://help.aliyun.com/document_detail/196830.html) operation to view the upgrade instructions for all database versions in the target region.
   * 
   * @example
   * 2.343
   */
  cdcDbVersion?: string;
  /**
   * @remarks
   * The target minor version for the upgrade.
   * 
   * @example
   * polarx-cdc-kernel-5.4.19-20240928_17274884
   */
  cdcMinorVersion?: string;
  /**
   * @remarks
   * The instance ID. You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/196830.html) operation to query the details of all instances in a specific region, including instance IDs.
   * 
   * @example
   * pxc-hzrp****3p72fi
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * pxc-shrvdc****wtf5uk-cdc
   */
  instanceName?: string;
  /**
   * @remarks
   * The region where the instance resides. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/196841.html) operation to query the details of regions supported by PolarDB-X, including region IDs.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The switchover mode. Valid values:
   * 
   * - 0: Switches immediately.
   * - 1: Switches within the O&M window.
   * 
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

