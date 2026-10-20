// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClusterAttachScriptsRequest extends $dara.Model {
  /**
   * @remarks
   * The CPU architecture of the node. Valid values: `amd64`, `arm`, and `arm64`.
   * 
   * Default value: `amd64`.
   * 
   * > This parameter is required when the cluster type is managed edge.
   * 
   * @example
   * amd64
   */
  arch?: string;
  /**
   * @remarks
   * The expiration time of the generated token, in UNIX timestamp format. For example, 1739980800 indicates 2025-02-20 00:00:00.
   * 
   * @example
   * 1740037333
   */
  expired?: number;
  /**
   * @remarks
   * Specifies whether to mount data cloud disks to the instance when manually adding existing instances to the cluster, storing containers and images on the data cloud disks. Valid values:
   * 
   * - `true`: Mounts data cloud disks to the instance. Existing data on the data cloud disks will be lost. Back up your data in advance.
   * - `false`: Does not mount data cloud disks to the instance.
   * 
   * Default value: `false`.
   * 
   * Data mounting rules:
   * 
   * - If the ECS instance already has data cloud disks mounted and the file system of the last data cloud disk is not initialized, the system automatically formats the data cloud disk as ext4 to store the content of /var/lib/docker and /var/lib/kubelet.
   * - If the ECS instance does not have data cloud disks mounted, no new data cloud disks are mounted.
   * 
   * @example
   * false
   */
  formatDisk?: boolean;
  /**
   * @remarks
   * Specifies whether to retain the instance name when adding existing instances to the cluster. If the instance name is not retained, the instance name format is `worker-k8s-for-cs-<clusterid>`. Valid values:
   * 
   * - `true`: Retains the instance name.
   * - `false`: Does not retain the instance name. The name is replaced based on system rules.
   * 
   * Default value: `true`.
   * 
   * @example
   * true
   */
  keepInstanceName?: boolean;
  /**
   * @remarks
   * The node pool ID. When adding a node, you can add the node to the specified node pool.
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
   * The access configuration parameters of the node.
   * 
   * > This parameter is required when the cluster type is managed edge.
   * 
   * @example
   * {"enableIptables": true,"manageRuntime": true,"quiet": true,"allowedClusterAddons": ["kube-proxy","flannel","coredns"]}
   */
  options?: string;
  /**
   * @remarks
   * If you specify a list of RDS instances, the ECS nodes in the cluster are automatically added to the RDS whitelist.
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

