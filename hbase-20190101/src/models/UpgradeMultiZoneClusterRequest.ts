// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeMultiZoneClusterRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the multi-zone instance.
   * 
   * This parameter is required.
   * 
   * @example
   * ld-***************
   */
  clusterId?: string;
  /**
   * @remarks
   * The component names. You can specify multiple component names separated by commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * LINDORM
   */
  components?: string;
  /**
   * @remarks
   * The names of the components that need to be restarted after the upgrade. You can specify multiple component names separated by commas (,).
   * 
   * @example
   * LPROXY
   */
  restartComponents?: string;
  /**
   * @remarks
   * The execution mode. If UpgradeInsName is not empty, the mode is forcibly set to single. If UpgradeInsName is empty and RunMode is not specified, the default value is serial. Valid values:
   * 
   * - serial: all sub-instances are upgraded.
   * - single: only the specified sub-instance is upgraded.
   * 
   * @example
   * serial
   */
  runMode?: string;
  /**
   * @remarks
   * The name of the sub-instance to upgrade. You can obtain this value from the MultiZoneInstanceModels field in the response of the [DescribeMultiZoneCluster](~~DescribeMultiZoneCluster~~) operation. This parameter is optional. If you do not specify this parameter, all sub-instances are upgraded.
   * 
   * @example
   * ld-t4n40m3171t4******-az-b
   */
  upgradeInsName?: string;
  /**
   * @remarks
   * The RPM version to upgrade to. If you do not specify this parameter, the components are upgraded to the latest version. If you specify multiple values for Components, you must also specify the same number of values for Versions, separated by commas (,).
   * 
   * @example
   * t-apsara-lindorm-2.1.20-20200518175539.alios7.x86_64
   */
  versions?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      components: 'Components',
      restartComponents: 'RestartComponents',
      runMode: 'RunMode',
      upgradeInsName: 'UpgradeInsName',
      versions: 'Versions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      components: 'string',
      restartComponents: 'string',
      runMode: 'string',
      upgradeInsName: 'string',
      versions: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

