// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Runtime } from "./Runtime";
import { Tag } from "./Tag";
import { Taint } from "./Taint";


export class ScaleOutClusterRequestWorkerDataDisks extends $dara.Model {
  /**
   * @remarks
   * The ID of the automatic snapshot policy. The system performs automatic backup for a cloud disk based on the specified automatic snapshot policy.
   * 
   * By default, this parameter is left empty, which indicates that automatic backup is disabled.
   * 
   * @example
   * sp-bp14yziiuvu3s6jn****
   */
  autoSnapshotPolicyId?: string;
  /**
   * @remarks
   * The type of the data disk.
   * 
   * @example
   * cloud_essd
   */
  category?: string;
  /**
   * @remarks
   * Specifies whether to encrypt the data disks. Valid values:
   * 
   * *   `true`: encrypts the data disk.
   * *   `false`: does not encrypt the data disk.
   * 
   * Default value: `false`.
   * 
   * @example
   * true
   */
  encrypted?: string;
  /**
   * @remarks
   * The size of the data disk. Valid values: 40 to 32767.
   * 
   * @example
   * 120
   */
  size?: string;
  static names(): { [key: string]: string } {
    return {
      autoSnapshotPolicyId: 'auto_snapshot_policy_id',
      category: 'category',
      encrypted: 'encrypted',
      size: 'size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoSnapshotPolicyId: 'string',
      category: 'string',
      encrypted: 'string',
      size: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScaleOutClusterRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to install the CloudMonitor agent. Valid values:
   * 
   * *   `true`: installs the CloudMonitor agent.
   * *   `false`: does not install the CloudMonitor agent.
   * 
   * Default value: `false`.
   * 
   * @example
   * true
   */
  cloudMonitorFlags?: boolean;
  /**
   * @remarks
   * The number of worker nodes that you want to add.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  count?: number;
  /**
   * @remarks
   * The CPU management policy of nodes in the node pool. The following policies are supported if the Kubernetes version of the cluster is 1.12.6 or later:
   * 
   * *   `static`: allows pods with specific resource characteristics on the node to be granted with enhanced CPU affinity and exclusivity.
   * *   `none`: specifies that the default CPU affinity is used.
   * 
   * Default value: `none`.
   * 
   * @example
   * none
   */
  cpuPolicy?: string;
  /**
   * @remarks
   * Specifies a custom image for nodes. By default, the image provided by ACK is used. You can select a custom image to replace the default image. For more information, see [Custom images](https://help.aliyun.com/document_detail/146647.html).
   * 
   * @example
   * m-bp16z7xko3vvv8gt****
   */
  imageId?: string;
  /**
   * @remarks
   * The name of the key pair. You must configure this parameter or the `login_password` parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * secrity-key
   */
  keyPair?: string;
  /**
   * @remarks
   * The password for SSH logon. You must configure this parameter or the `key_pair` parameter. The password must be 8 to 30 characters in length, and must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.
   * 
   * This parameter is required.
   * 
   * @example
   * Hello@1234
   */
  loginPassword?: string;
  /**
   * @remarks
   * The ApsaraDB RDS instances. If you specify a list of ApsaraDB RDS instances, ECS instances in the cluster are automatically added to the whitelist of the ApsaraDB RDS instances.
   */
  rdsInstances?: string[];
  /**
   * @remarks
   * The container runtime.
   */
  runtime?: Runtime;
  /**
   * @remarks
   * The labels that you want to add to the node. When you add labels to a node, the following rules apply:
   * 
   * *   A label is a case-sensitive key-value pair. You can add up to 20 labels.
   * *   The key must be unique and cannot exceed 64 characters in length. The value can be empty and cannot exceed 128 characters in length. Keys and values cannot start with aliyun, acs:, https://, or http://. For more information, see [Labels and Selectors](https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#syntax-and-character-set).
   */
  tags?: Tag[];
  /**
   * @remarks
   * The taints that you want to add to nodes. Taints can be used together with tolerations to avoid scheduling pods to specified nodes. For more information, see [taint-and-toleration](https://kubernetes.io/zh/docs/concepts/scheduling-eviction/taint-and-toleration/).
   */
  taints?: Taint[];
  /**
   * @remarks
   * The user-defined data of the node pool. For more information, see [Generate user-defined data](https://help.aliyun.com/document_detail/49121.html).
   * 
   * @example
   * IyEvdXNyL2Jpbi9iYXNoCmVjaG8gIkhlbGxvIEFD****
   */
  userData?: string;
  /**
   * @remarks
   * The vSwitch IDs. You can select one to three vSwitches when you create a cluster. To ensure the high availability of the cluster, we recommend that you select vSwitches in different zones.
   * 
   * This parameter is required.
   */
  vswitchIds?: string[];
  /**
   * @remarks
   * Specifies whether to enable auto-renewal for worker nodes. This parameter takes effect and is required only if `worker_instance_charge_type` is set to `PrePaid`. Valid values:
   * 
   * *   `true`: enables auto-renewal.
   * *   `false`: does not enable auto-renewal.
   * 
   * Default value: `true`
   * 
   * @example
   * true
   */
  workerAutoRenew?: boolean;
  /**
   * @remarks
   * The auto-renewal duration of worker nodes. This parameter takes effect and is required only if the subscription billing method is selected for worker nodes.
   * 
   * Valid values: 1, 2, 3, 6, and 12.
   * 
   * Default value: `1`.
   * 
   * @example
   * 6
   */
  workerAutoRenewPeriod?: number;
  /**
   * @remarks
   * The configurations of the data disks that you want to mount to worker nodes. The configurations include the disk type and disk size.
   */
  workerDataDisks?: ScaleOutClusterRequestWorkerDataDisks[];
  /**
   * @remarks
   * The billing method of worker nodes. Valid values:
   * 
   * *   `PrePaid`: subscription.
   * *   `PostPaid`: pay-as-you-go.
   * 
   * Default value: `PostPaid`.
   * 
   * @example
   * PrePaid
   */
  workerInstanceChargeType?: string;
  /**
   * @remarks
   * The instance configurations of worker nodes.
   * 
   * This parameter is required.
   */
  workerInstanceTypes?: string[];
  /**
   * @remarks
   * The subscription duration of worker nodes. This parameter takes effect and is required only if `worker_instance_charge_type` is set to `PrePaid`.
   * 
   * Valid values: 1, 2, 3, 6, 12, 24, 36, 48, and 60.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  workerPeriod?: number;
  /**
   * @remarks
   * The billing cycle of worker nodes. This parameter is required only if worker_instance_charge_type is set to `PrePaid`.
   * 
   * Set the value to `Month`.
   * 
   * @example
   * Month
   */
  workerPeriodUnit?: string;
  /**
   * @remarks
   * The system disk category of worker nodes. Valid values:
   * 
   * *   `cloud_efficiency`: ultra disk.
   * *   `cloud_ssd`: standard SSD.
   * *   `cloud_essd`: Enterprise SSD (ESSD).
   * 
   * Default value: `cloud_ssd`.
   * 
   * This parameter is required.
   * 
   * @example
   * cloud_efficiency
   */
  workerSystemDiskCategory?: string;
  /**
   * @remarks
   * The system disk size of worker nodes. Unit: GiB.
   * 
   * Valid values: 40 to 500.
   * 
   * Default value: `120`.
   * 
   * This parameter is required.
   * 
   * @example
   * 120
   */
  workerSystemDiskSize?: number;
  static names(): { [key: string]: string } {
    return {
      cloudMonitorFlags: 'cloud_monitor_flags',
      count: 'count',
      cpuPolicy: 'cpu_policy',
      imageId: 'image_id',
      keyPair: 'key_pair',
      loginPassword: 'login_password',
      rdsInstances: 'rds_instances',
      runtime: 'runtime',
      tags: 'tags',
      taints: 'taints',
      userData: 'user_data',
      vswitchIds: 'vswitch_ids',
      workerAutoRenew: 'worker_auto_renew',
      workerAutoRenewPeriod: 'worker_auto_renew_period',
      workerDataDisks: 'worker_data_disks',
      workerInstanceChargeType: 'worker_instance_charge_type',
      workerInstanceTypes: 'worker_instance_types',
      workerPeriod: 'worker_period',
      workerPeriodUnit: 'worker_period_unit',
      workerSystemDiskCategory: 'worker_system_disk_category',
      workerSystemDiskSize: 'worker_system_disk_size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudMonitorFlags: 'boolean',
      count: 'number',
      cpuPolicy: 'string',
      imageId: 'string',
      keyPair: 'string',
      loginPassword: 'string',
      rdsInstances: { 'type': 'array', 'itemType': 'string' },
      runtime: Runtime,
      tags: { 'type': 'array', 'itemType': Tag },
      taints: { 'type': 'array', 'itemType': Taint },
      userData: 'string',
      vswitchIds: { 'type': 'array', 'itemType': 'string' },
      workerAutoRenew: 'boolean',
      workerAutoRenewPeriod: 'number',
      workerDataDisks: { 'type': 'array', 'itemType': ScaleOutClusterRequestWorkerDataDisks },
      workerInstanceChargeType: 'string',
      workerInstanceTypes: { 'type': 'array', 'itemType': 'string' },
      workerPeriod: 'number',
      workerPeriodUnit: 'string',
      workerSystemDiskCategory: 'string',
      workerSystemDiskSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.rdsInstances)) {
      $dara.Model.validateArray(this.rdsInstances);
    }
    if(this.runtime && typeof (this.runtime as any).validate === 'function') {
      (this.runtime as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    if(Array.isArray(this.taints)) {
      $dara.Model.validateArray(this.taints);
    }
    if(Array.isArray(this.vswitchIds)) {
      $dara.Model.validateArray(this.vswitchIds);
    }
    if(Array.isArray(this.workerDataDisks)) {
      $dara.Model.validateArray(this.workerDataDisks);
    }
    if(Array.isArray(this.workerInstanceTypes)) {
      $dara.Model.validateArray(this.workerInstanceTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

