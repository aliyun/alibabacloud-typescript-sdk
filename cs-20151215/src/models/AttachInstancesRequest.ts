// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Runtime } from "./Runtime";
import { Tag } from "./Tag";


export class AttachInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The CPU management policy for the node. The following two policies are supported when the cluster version is 1.12.6 or later:
   * 
   * - `static`: allows you to enhance CPU affinity and exclusivity for pods with specific resource characteristics on the node.
   * - `none`: uses the existing default CPU affinity policy.
   * 
   * Default value: `none`.
   * 
   * > This parameter is not supported if nodepool_id is specified.
   * 
   * @example
   * none
   */
  cpuPolicy?: string;
  /**
   * @remarks
   * Specifies whether to store container data and images on a data cloud disk. Valid values:
   * 
   * - `true`: stores container data and images on a data cloud disk.
   * - `false`: does not store container data and images on a data cloud disk.
   * 
   * Default value: `false`.
   * 
   * Data cloud disk mounting rules:
   * 
   * - If the ECS instance has data cloud disks attached and the file system of the last data cloud disk is not initialized, the system automatically formats the data cloud disk to EXT4 to store the /var/lib/docker and /var/lib/kubelet directories, which are the default data directories for the Docker container runtime and kubelet component.
   * - If the ECS instance does not have data cloud disks attached, no new data cloud disk is attached.
   * > If you choose to store data on a data cloud disk and the ECS instance already has data cloud disks attached, the existing data on the data cloud disks will be lost. Back up your data first.
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
   * - If you do not specify this parameter, the default system image is used.
   * 
   * > This parameter is not supported if nodepool_id is specified.
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
   * Specifies whether the node to be added is an edge node, namely an ENS node. Valid values:
   * 
   * - `true`: The node to be added is an edge node.
   * - `false`: The node to be added is not an edge node.
   * 
   * Default value: `false`.
   * 
   * > If the node is an edge node, you must set this parameter to `true` to identify the node type as an ENS node.
   * 
   * @example
   * false
   */
  isEdgeWorker?: boolean;
  /**
   * @remarks
   * Specifies whether to retain the original instance name. Valid values:
   * 
   * - `true`: retains the instance name.
   * - `false`: does not retain the instance name.
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  keepInstanceName?: boolean;
  /**
   * @remarks
   * The name of the key pair for the instances to be added. You can specify either the key_pair or password parameter, or leave both empty.
   * > This parameter is not supported if nodepool_id is specified.
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
   * The SSH logon password for the instances to be added. You can specify either the key_pair or password parameter, or leave both empty.
   * 
   * The password must meet the following requirements:
   * - The password must be 8 to 30 characters in length.
   * - The password must contain uppercase letters, lowercase letters, digits, and special characters.
   * - The password cannot contain backslashes (\\) or double quotation marks (").
   * 
   * For security purposes, the password is encrypted during transmission.
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
   * > This parameter is not supported if nodepool_id is specified.
   * 
   * name: the name of the container runtime. ACK supports the following three container runtimes:
   * 
   * - containerd: recommended. Supported by all cluster versions.
   * - Sandboxed-Container.runv: sandboxed container. Provides higher isolation. Supported by clusters runtime version 1.24 and earlier.
   * - docker: supported by clusters runtime version 1.22 and earlier.
   * 
   * Default value: containerd.
   * 
   * containerd: the version of the container runtime. The default value is the latest version.
   * 
   * For more information about the changes to the sandboxed container runtime, see [Sandboxed container runtime release notes](https://help.aliyun.com/document_detail/160312.html).
   */
  runtime?: Runtime;
  /**
   * @remarks
   * The node labels. Label definition rules:
   * 
   * - A label is a case-sensitive key-value pair. You can configure up to 20 labels.
   * - Label keys must be unique and can be up to 64 characters in length.
   * - Label values can be empty and can be up to 128 characters in length.
   * - Label keys and values cannot start with `aliyun`, `acs:`, `https://`, or `http://`.
   * 
   * For more information, see [Labels and Selectors](https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#syntax-and-character-set).
   * > This parameter is not supported if nodepool_id is specified.
   */
  tags?: Tag[];
  /**
   * @remarks
   * The custom data for the node. For more information, see [Generate instance user data](https://help.aliyun.com/document_detail/49121.html).
   * 
   * > This parameter is not supported if nodepool_id is specified.
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

