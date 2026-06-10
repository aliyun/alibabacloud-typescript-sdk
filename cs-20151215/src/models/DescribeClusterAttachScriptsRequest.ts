// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClusterAttachScriptsRequest extends $dara.Model {
  /**
   * @remarks
   * The CPU architecture of the node. Supported CPU architectures include `amd64`, `arm`, and `arm64`.
   * 
   * Default value: `amd64`.
   * 
   * > This parameter is required if the cluster is a managed edge cluster.
   * 
   * @example
   * amd64
   */
  arch?: string;
  /**
   * @remarks
   * The Unix timestamp that indicates when the generated token expires. For example, the timestamp 1739980800 corresponds to 00:00:00 on February 20, 2025 (UTC).
   * 
   * @example
   * 1740037333
   */
  expired?: number;
  /**
   * @remarks
   * Specifies whether to mount a data disk to the instance and store containers and images on the data disk when you manually add an existing instance to the cluster. Valid values:
   * 
   * - `true`: Mounts the data disk to the instance. The original data on the data disk will be erased. Back up your data before you proceed.
   * 
   * - `false`: Does not mount the data disk to the instance.
   * 
   * Default value: `false`.
   * 
   * Data disk mounting rules:
   * 
   * - If an ECS instance has data disks attached and the last data disk is uninitialized, the system automatically formats that disk to ext4 and uses it to store content for `/var/lib/docker` and `/var/lib/kubelet`.
   * 
   * - If no data disk is attached to the ECS instance, the system does not mount a new data disk.
   * 
   * @example
   * false
   */
  formatDisk?: boolean;
  /**
   * @remarks
   * Specifies whether to retain the instance name when the instance is added to the cluster. If you do not retain the instance name, the system renames the instance to use the `worker-k8s-for-cs-<clusterid>` format. Valid values:
   * 
   * - `true`: Retains the instance name.
   * 
   * - `false`: Does not retain the instance name. The system renames the instance based on a system rule.
   * 
   * Default value: `true`.
   * 
   * @example
   * true
   */
  keepInstanceName?: boolean;
  /**
   * @remarks
   * The node pool ID. You can add the node to a specific node pool.
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
   * The configuration parameters for node attachment.
   * 
   * > This parameter is required if the cluster is a managed edge cluster.
   * 
   * @example
   * {"enableIptables": true,"manageRuntime": true,"quiet": true,"allowedClusterAddons": ["kube-proxy","flannel","coredns"]}
   */
  options?: string;
  /**
   * @remarks
   * If you specify a list of RDS instances, the system automatically adds the ECS instances of the cluster nodes to the access whitelists of the specified RDS instances.
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

