// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceSpecRequest extends $dara.Model {
  /**
   * @remarks
   * The size of the storage space, in GB. The required storage space varies based on the cluster specifications:
   * - 8C32G: 100 GB to 10 TB.
   * - 14C70G: 200 GB to 10 TB.
   * - 30C180G: 400 GB to 10 TB.
   * - 62C400G: 800 GB to 10 TB. The preceding minimum storage space sizes are the default storage space sizes of the corresponding cluster specification plans.
   * 
   * @example
   * 200
   */
  diskSize?: number;
  /**
   * @remarks
   * Disk type.
   * 
   * @example
   * cloud_essd_pl1
   */
  diskType?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run for the request. Default value: false. Valid values:
   * - true: Only a dry-run request is sent and the instance settings are not modified. If the dry run succeeds, DryRunResult=true is returned. If the dry run fails, an error code is returned.
   * - false: If the DryRun parameter is set to false, no dry run is performed and the DryRunResult parameter returns false.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The specifications of the cluster. You can specify one of the following four plans:
   * - 8C32GB: indicates 8 CPU cores and 32 GB of memory.
   * - 14C70GB: indicates 14 CPU cores and 70 GB of memory. This is the default value.
   * - 30C180GB: indicates 30 CPU cores and 180 GB of memory.
   * - 62C400GB: indicates 62 CPU cores and 400 GB of memory.
   * 
   * @example
   * 14C70GB
   */
  instanceClass?: string;
  /**
   * @remarks
   * The ID of the OceanBase cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * ob3h8ytroxxxxx
   */
  instanceId?: string;
  upgradeSpecNative?: boolean;
  static names(): { [key: string]: string } {
    return {
      diskSize: 'DiskSize',
      diskType: 'DiskType',
      dryRun: 'DryRun',
      instanceClass: 'InstanceClass',
      instanceId: 'InstanceId',
      upgradeSpecNative: 'UpgradeSpecNative',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskSize: 'number',
      diskType: 'string',
      dryRun: 'boolean',
      instanceClass: 'string',
      instanceId: 'string',
      upgradeSpecNative: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

