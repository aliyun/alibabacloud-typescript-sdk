// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClusterAttachScriptsRequest extends $dara.Model {
  /**
   * @remarks
   * The CPU architecture of the node. Valid values: `amd64`, `arm`, and `arm64`.
   * 
   * Default value: `amd64`.
   * 
   * > This parameter is required when the cluster type is ACK Edge.
   * 
   * @example
   * amd64
   */
  arch?: string;
  /**
   * @remarks
   * The expiration time of the generated token. The time is in the UNIX timestamp format. For example, 1739980800 indicates 2025-02-20 00:00:00.
   * 
   * @example
   * 1740037333
   */
  expired?: number;
  /**
   * @remarks
   * **[Deprecated]** Use `format_disk_option` instead.
   * - `true`: equivalent to setting `format_disk_option` to `DataDisk`.
   * - `false`: equivalent to setting `format_disk_option` to `SystemDisk`.
   * 
   * @example
   * false
   */
  formatDisk?: boolean;
  /**
   * @remarks
   * Specifies whether to retain the instance name when adding an existing instance to the cluster. If the instance name is not retained, the instance name format is `worker-k8s-for-cs-<clusterid>`. Valid values:
   * 
   * - `true`: retains the instance name.
   * - `false`: does not retain the instance name. The instance name is replaced based on system rules.
   * 
   * Default value: `true`.
   * 
   * @example
   * true
   */
  keepInstanceName?: boolean;
  /**
   * @remarks
   * The node pool ID. When you add a node, you can add the node to a specified node pool.
   * 
   * > If you do not specify a node pool ID, the node is added to the default node pool by default.
   * 
   * @example
   * np1c9229d9be2d432c93f77a88fca0****
   */
  nodepoolId?: string;
  oneTimeToken?: boolean;
  /**
   * @remarks
   * The onboarding configuration parameters for the node.
   * 
   * > This parameter is required when the cluster type is ACK Edge.
   * 
   * @example
   * {"enableIptables": true,"manageRuntime": true,"quiet": true,"allowedClusterAddons": ["kube-proxy","flannel","coredns"]}
   */
  options?: string;
  /**
   * @remarks
   * If an ApsaraDB RDS instance list is specified, the ECS instances of the cluster nodes are automatically added to the RDS access whitelist.
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

