// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Runtime } from "./Runtime";
import { Tag } from "./Tag";


export class AttachInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The CPU management policy of the node. The following policies are supported for clusters of version 1.12.6 or later:
   * 
   * - `static`: Allows pods with certain resource characteristics on the node to be granted enhanced CPU affinity and exclusivity.
   * - `none`: Uses the existing default CPU affinity scheme.
   * 
   * Default value: `none`.
   * 
   * > After you specify `nodepool_id`, this parameter is not supported.
   * 
   * @example
   * none
   */
  cpuPolicy?: string;
  /**
   * @remarks
   * Specifies whether to store container data and images on a data cloud disk. Valid values:
   * 
   * - `true`: Stores container data and images on a data cloud disk.
   * 
   * - `false`: Does not store container data and images on a data cloud disk.
   * 
   * Default value: `false`.
   * 
   * 
   * Data cloud disk mounting rules:
   * 
   * - If the ECS instance has data cloud disks mounted and the file system of the last data cloud disk is not initialized, the system automatically formats the data cloud disk to EXT4 to store the content of /var/lib/docker and /var/lib/kubelet (the default data directories for the Docker container runtime and the kubelet component, respectively).
   * - If the ECS instance has no data cloud disks mounted, no new data cloud disk is mounted.
   * > If you choose to store data on a data cloud disk and the ECS instance already has data cloud disks mounted, existing data on the data cloud disk is lost. Back up your data in advance.
   * 
   * @example
   * false
   */
  formatDisk?: boolean;
  /**
   * @remarks
   * The custom image ID.
   * 
   * - If you specify a custom image ID, the system cloud disk image of the instance is replaced with the custom image.
   * 
   * - If you do not specify this parameter, the default system image is used.
   * 
   * > After you specify `nodepool_id`, this parameter is not supported.
   * 
   * @example
   * aliyun_2_1903_x64_20G_alibase_20200529.vhd
   */
  imageId?: string;
  /**
   * @remarks
   * The list of ECS instances to be added.
   * 
   * This parameter is required.
   */
  instances?: string[];
  /**
   * @remarks
   * Specifies whether the node to be added is an edge node, that is, an Edge Node Service (ENS) node. Valid values:
   * 
   * - `true`: The node to be added is an edge node.
   * 
   * - `false`: The node to be added is not an edge node.
   * 
   * Default value: `false`.
   * 
   * > If the node is an edge node, set this parameter to `true` to identify the node type as an ENS node.
   * 
   * @example
   * false
   */
  isEdgeWorker?: boolean;
  /**
   * @remarks
   * Specifies whether to retain the original instance name. Valid values:
   * 
   * - `true`: Retains the instance name.
   * 
   * - `false`: Does not retain the instance name.
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  keepInstanceName?: boolean;
  /**
   * @remarks
   * The name of the key pair for the instances to be added. Specify either key_pair or password. You can also leave both parameters empty.
   * > After you specify `nodepool_id`, this parameter is not supported.
   * 
   * @example
   * security-key
   */
  keyPair?: string;
  /**
   * @remarks
   * The node pool ID. If you do not specify this parameter, the node is added to the default node pool.
   * 
   * @example
   * np615c0e0966124216a0412e10afe0****
   */
  nodepoolId?: string;
  /**
   * @remarks
   * The SSH logon password for the instances to be added. Specify either key_pair or password. You can also leave both parameters empty.
   * 
   * The password must meet the following requirements:
   * - The password must be 8 to 30 characters in length.
   * - The password must contain uppercase letters, lowercase letters, digits, and special characters at the same time.
   * - The password cannot contain backslashes (\\) or double quotation marks (").
   * 
   * The password is encrypted during transmission for security purposes.
   * 
   * @example
   * Hello1234
   */
  password?: string;
  /**
   * @remarks
   * The list of ApsaraDB RDS instances.
   */
  rdsInstances?: string[];
  /**
   * @remarks
   * The container runtime.
   * > After you specify `nodepool_id`, this parameter is not supported.
   * 
   * name: The name of the container runtime. ACK supports the following three container runtimes:
   * 
   * - containerd: Recommended. Supported by all cluster versions.
   * - Sandboxed-Container.runv: Sandboxed container that provides higher isolation. Supported by clusters of version 1.24 or earlier.
   * - docker: Supported by clusters of version 1.22 or earlier.
   * 
   * Default value: containerd.
   * 
   * containerd: The container runtime version. Default value: the latest version.
   * 
   * For more information about changes to the sandboxed container runtime, see [Release notes for the sandboxed container runtime](https://help.aliyun.com/document_detail/160312.html).
   */
  runtime?: Runtime;
  /**
   * @remarks
   * The node labels. Label definition rules:
   * 
   * - Labels are case-sensitive key-value pairs. You can set up to 20 labels.
   * - Label keys cannot be duplicate and can be up to 64 characters in length.
   * - Label values can be empty and can be up to 128 characters in length.
   * - Label keys and values cannot start with `aliyun`, `acs:`, `https://`, or `http://`.
   * 
   * For more information, see [Labels and Selectors](https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#syntax-and-character-set).
   * > After you specify `nodepool_id`, this parameter is not supported.
   */
  tags?: Tag[];
  /**
   * @remarks
   * The instance user data of the node. For more information, see [Generate instance user data](https://help.aliyun.com/document_detail/49121.html).
   * 
   * > After you specify `nodepool_id`, this parameter is not supported.
   * 
   * @example
   * IyEvdXNyL2Jpbi9iYXNoCmVjaG8gIkhlbGxvIEFDSyEi
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      cpuPolicy: 'cpu_policy',
      formatDisk: 'format_disk',
      imageId: 'image_id',
      instances: 'instances',
      isEdgeWorker: 'is_edge_worker',
      keepInstanceName: 'keep_instance_name',
      keyPair: 'key_pair',
      nodepoolId: 'nodepool_id',
      password: 'password',
      rdsInstances: 'rds_instances',
      runtime: 'runtime',
      tags: 'tags',
      userData: 'user_data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuPolicy: 'string',
      formatDisk: 'boolean',
      imageId: 'string',
      instances: { 'type': 'array', 'itemType': 'string' },
      isEdgeWorker: 'boolean',
      keepInstanceName: 'boolean',
      keyPair: 'string',
      nodepoolId: 'string',
      password: 'string',
      rdsInstances: { 'type': 'array', 'itemType': 'string' },
      runtime: Runtime,
      tags: { 'type': 'array', 'itemType': Tag },
      userData: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instances)) {
      $dara.Model.validateArray(this.instances);
    }
    if(Array.isArray(this.rdsInstances)) {
      $dara.Model.validateArray(this.rdsInstances);
    }
    if(this.runtime && typeof (this.runtime as any).validate === 'function') {
      (this.runtime as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

