// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClusterAttachScriptsRequest extends $dara.Model {
  /**
   * @remarks
   * The CPU architecture of the node. Supported CPU architectures include `amd64`, `arm`, and `arm64`.
   * 
   * Default value: `amd64`.
   * 
   * > This parameter is required when the cluster type is managed edge cluster.
   * 
   * @example
   * amd64
   */
  arch?: string;
  /**
   * @remarks
   * The expiration time of the generated token. The value is a UNIX timestamp. For example, 1739980800 indicates 2025-02-20 00:00:00.
   * 
   * @example
   * 1740037333
   */
  expired?: number;
  /**
   * @remarks
   * Specifies whether to mount data disks to the instance when you manually add the existing instance to the cluster. Container and image data is stored on the data disks. Valid values:
   * 
   * - `true`: Mounts data disks to the instance. Existing data on the data disks will be lost. Back up your data before you proceed.
   * - `false`: Does not mount data disks to the instance.
   * 
   * Default value: `false`.
   * 
   * Data disk mounting rules:
   * 
   * - If data disks are already mounted to the ECS instance and the file system of the last data disk is not initialized, the system automatically formats the data disk as ext4 to store /var/lib/docker and /var/lib/kubelet.
   * - If no data disks are mounted to the ECS instance, no new data disks are mounted.
   * 
   * @example
   * false
   */
  formatDisk?: boolean;
  /**
   * @remarks
   * Specifies whether to retain the instance name when adding an existing instance to the cluster. If the instance name is not retained, the instance name is in the format of `worker-k8s-for-cs-<clusterid>`. Valid values:
   * 
   * - `true`: Retains the instance name.
   * - `false`: Does not retain the instance name. The instance name is replaced based on system rules.
   * 
   * Default value: `true`.
   * 
   * @example
   * true
   */
  keepInstanceName?: boolean;
  /**
   * @remarks
   * The node pool ID. You can add the node to a specified node pool.
   * 
   * > If you do not specify a node pool ID, the node is added to the default node pool.
   * 
   * @example
   * np1c9229d9be2d432c93f77a88fca0****
   */
  nodepoolId?: string;
  oneTimeToken?: boolean;
  /**
   * @remarks
   * The configuration parameters for node registration.
   * 
   * > This parameter is required when the cluster type is managed edge cluster.
   * 
   * @example
   * {"enableIptables": true,"manageRuntime": true,"quiet": true,"allowedClusterAddons": ["kube-proxy","flannel","coredns"]}
   */
  options?: string;
  /**
   * @remarks
   * If you specify a list of ApsaraDB RDS instances, the ECS instances in the cluster are automatically added to the whitelists of the specified ApsaraDB RDS instances.
   */
  rdsInstances?: string[];
  static names(): { [key: string]: string } {
    return {
      arch: 'arch',
      expired: 'expired',
      formatDisk: 'format_disk',
      keepInstanceName: 'keep_instance_name',
      nodepoolId: 'nodepool_id',
      oneTimeToken: 'one_time_token',
      options: 'options',
      rdsInstances: 'rds_instances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arch: 'string',
      expired: 'number',
      formatDisk: 'boolean',
      keepInstanceName: 'boolean',
      nodepoolId: 'string',
      oneTimeToken: 'boolean',
      options: 'string',
      rdsInstances: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.rdsInstances)) {
      $dara.Model.validateArray(this.rdsInstances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

