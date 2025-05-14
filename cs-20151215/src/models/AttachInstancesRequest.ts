// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Runtime } from "./Runtime";
import { Tag } from "./Tag";


export class AttachInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The CPU management policy of the node. The following policies are supported if the Kubernetes version of the cluster is 1.12.6 or later:
   * 
   * *   `static`: allows pods with specific resource characteristics on the node to be granted enhanced CPU affinity and exclusivity.
   * *   `none`: uses default CPU affinity.
   * 
   * Default value: `none`
   * 
   * >  This parameter is not supported if you specify `nodepool_id`.
   * 
   * @example
   * none
   */
  cpuPolicy?: string;
  /**
   * @remarks
   * Specifies whether to store container data and images on data disks. Valid value:
   * 
   * *   `true`: stores container data and images on data disks.
   * *   `false`: does not store container data or images on data disks.
   * 
   * Default value: `false`.
   * 
   * How data disks are attached:
   * 
   * *   If the ECS instance is already attached with data disks and the file system of the last data disk is not initialized, the system automatically formats this data disk to ext4. Then, the system uses the disk to store the data in the /var/lib/docker and /var/lib/kubelet directories.
   * *   If no data disk is attached to the ECS instance, the system does not purchase a new data disk.
   * 
   * >  If you choose to store container data and images on data disks and a data disk is already attached to the ECS instance, the original data on this data disk is cleared. You can back up the disk to prevent data loss.
   * 
   * @example
   * false
   */
  formatDisk?: boolean;
  /**
   * @remarks
   * The custom image ID. If you do not specify this parameter, the default system image is used.
   * 
   * > 
   * 
   * *   If you specify a custom image, the custom image is used to deploy the operating system on the system disk of the node.
   * 
   * *   This parameter is not supported if you specify `nodepool_id`.
   * 
   * @example
   * aliyun_2_1903_x64_20G_alibase_20200529.vhd
   */
  imageId?: string;
  /**
   * @remarks
   * The ECS instances that you want to add.
   * 
   * This parameter is required.
   */
  instances?: string[];
  /**
   * @remarks
   * Specifies whether the node that you want to add is an Edge Node Service (ENS) node. Valid value:
   * 
   * *   `true`: the node that you want to add is an ENS node.
   * *   `false`: the node that you want to add is not an ENS node.
   * 
   * Default value: `false`.
   * 
   * >  If the node that you want to add is an ENS node, you must set the value to `true`. This allows you to identify the node.
   * 
   * @example
   * false
   */
  isEdgeWorker?: boolean;
  /**
   * @remarks
   * Specifies whether to retain the instance name. Valid value:
   * 
   * *   `true`: retains the instance name.
   * *   `false`: does not retain the instance name.
   * 
   * Default value: `false`.
   * 
   * @example
   * true
   */
  keepInstanceName?: boolean;
  /**
   * @remarks
   * The name of the key pair used to log on to the ECS instances. You must specify this parameter or `login_password`.
   * 
   * >  This parameter is not supported if you specify `nodepool_id`.
   * 
   * @example
   * secrity-key
   */
  keyPair?: string;
  /**
   * @remarks
   * The ID of the node pool to which the node is added. If you do not specify this parameter, the node is added to the default node pool.
   * 
   * @example
   * np615c0e0966124216a0412e10afe0****
   */
  nodepoolId?: string;
  /**
   * @remarks
   * The SSH logon password used to log on to the ECS instances. You must specify this parameter or `key_pair`. The password must be 8 to 30 characters in length, and must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters. The password cannot contain backslashes (\\\\) or double quotation marks (").
   * 
   * The password is encrypted during data transfer to ensure security.
   * 
   * @example
   * Hello1234
   */
  password?: string;
  /**
   * @remarks
   * A list of ApsaraDB RDS instances.
   */
  rdsInstances?: string[];
  /**
   * @remarks
   * The container runtime.
   * 
   * >  This parameter is not supported if you specify `nodepool_id`.
   */
  runtime?: Runtime;
  /**
   * @remarks
   * The labels that you want to add to the node. When you add labels to a node, the following rules apply:
   * 
   * *   A label is a case-sensitive key-value pair. You can add up to 20 labels.
   * *   The key must be unique and cannot exceed 64 characters in length. The value can be empty and cannot exceed 128 characters in length. Keys and values cannot start with `aliyun`, `acs:`, `https://`, or `http://`. For more information, see [Labels and Selectors](https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#syntax-and-character-set).
   * 
   * >  This parameter is not supported if you specify `nodepool_id`.
   */
  tags?: Tag[];
  /**
   * @remarks
   * The user-defined data on the node. For more information, see [Use instance user data to automatically run commands or scripts on instance startup](https://help.aliyun.com/document_detail/49121.html).
   * 
   * >  This parameter is not supported if you specify `nodepool_id`.
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

