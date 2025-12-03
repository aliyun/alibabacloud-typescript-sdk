// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeMultiZoneClusterRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ld-***************
   */
  clusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * LINDORM
   */
  components?: string;
  /**
   * @example
   * LPROXY
   */
  restartComponents?: string;
  /**
   * @example
   * serial
   */
  runMode?: string;
  /**
   * @example
   * ld-t4n40m3171t4******-az-b
   */
  upgradeInsName?: string;
  /**
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

