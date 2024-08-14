// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class Addon extends $tea.Model {
  /**
   * @example
   * {\"IngressSlbNetworkType\":\"internet\"}
   */
  config?: string;
  /**
   * @example
   * false
   */
  disabled?: boolean;
  /**
   * @example
   * nginx-ingress-controller
   */
  name?: string;
  /**
   * @example
   * v1.9.3-aliyun.1
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'config',
      disabled: 'disabled',
      name: 'name',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      disabled: 'boolean',
      name: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataDisk extends $tea.Model {
  /**
   * @example
   * true
   */
  autoFormat?: boolean;
  /**
   * @example
   * sp-2zej1nogjvovnz4z****
   */
  autoSnapshotPolicyId?: string;
  /**
   * @example
   * true
   */
  burstingEnabled?: boolean;
  /**
   * @example
   * cloud_ssd
   */
  category?: string;
  /**
   * @example
   * /dev/xvdb
   */
  device?: string;
  /**
   * @example
   * DataDiskName
   */
  diskName?: string;
  /**
   * @example
   * true
   */
  encrypted?: string;
  /**
   * @example
   * ext4
   */
  fileSystem?: string;
  /**
   * @example
   * 0e478b7a-4262-4802-b8cb-00d3fb40****
   */
  kmsKeyId?: string;
  /**
   * @example
   * /mnt/path1
   */
  mountTarget?: string;
  /**
   * @example
   * PL1
   */
  performanceLevel?: string;
  /**
   * @example
   * 1000
   */
  provisionedIops?: number;
  /**
   * @example
   * 40
   */
  size?: number;
  /**
   * @example
   * s-280s7****
   */
  snapshotId?: string;
  static names(): { [key: string]: string } {
    return {
      autoFormat: 'auto_format',
      autoSnapshotPolicyId: 'auto_snapshot_policy_id',
      burstingEnabled: 'bursting_enabled',
      category: 'category',
      device: 'device',
      diskName: 'disk_name',
      encrypted: 'encrypted',
      fileSystem: 'file_system',
      kmsKeyId: 'kms_key_id',
      mountTarget: 'mount_target',
      performanceLevel: 'performance_level',
      provisionedIops: 'provisioned_iops',
      size: 'size',
      snapshotId: 'snapshot_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoFormat: 'boolean',
      autoSnapshotPolicyId: 'string',
      burstingEnabled: 'boolean',
      category: 'string',
      device: 'string',
      diskName: 'string',
      encrypted: 'string',
      fileSystem: 'string',
      kmsKeyId: 'string',
      mountTarget: 'string',
      performanceLevel: 'string',
      provisionedIops: 'number',
      size: 'number',
      snapshotId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstancePatterns extends $tea.Model {
  architectures?: string[];
  /**
   * @example
   * Exclude
   */
  burstPerformanceOption?: string;
  /**
   * @example
   * 4
   */
  core?: number;
  excludedInstanceTypes?: string[];
  /**
   * @example
   * EnterpriseLevel
   */
  instanceFamilyLevel?: string;
  /**
   * @example
   * 2
   */
  maxPrice?: number;
  /**
   * @example
   * 8
   */
  memory?: number;
  static names(): { [key: string]: string } {
    return {
      architectures: 'architectures',
      burstPerformanceOption: 'burst_performance_option',
      core: 'core',
      excludedInstanceTypes: 'excluded_instance_types',
      instanceFamilyLevel: 'instance_family_level',
      maxPrice: 'max_price',
      memory: 'memory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architectures: { 'type': 'array', 'itemType': 'string' },
      burstPerformanceOption: 'string',
      core: 'number',
      excludedInstanceTypes: { 'type': 'array', 'itemType': 'string' },
      instanceFamilyLevel: 'string',
      maxPrice: 'number',
      memory: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KubeletConfig extends $tea.Model {
  allowedUnsafeSysctls?: string[];
  /**
   * @example
   * 5
   */
  containerLogMaxFiles?: number;
  /**
   * @example
   * 10Mi
   */
  containerLogMaxSize?: string;
  /**
   * @example
   * none
   */
  cpuManagerPolicy?: string;
  /**
   * @example
   * 10
   */
  eventBurst?: number;
  /**
   * @example
   * 5
   */
  eventRecordQPS?: number;
  evictionHard?: { [key: string]: any };
  evictionSoft?: { [key: string]: any };
  evictionSoftGracePeriod?: { [key: string]: any };
  featureGates?: { [key: string]: any };
  /**
   * @example
   * 10
   */
  kubeAPIBurst?: number;
  /**
   * @example
   * 5
   */
  kubeAPIQPS?: number;
  kubeReserved?: { [key: string]: any };
  /**
   * @example
   * 110
   */
  maxPods?: number;
  /**
   * @example
   * 0
   */
  readOnlyPort?: number;
  /**
   * @example
   * 10
   */
  registryBurst?: number;
  /**
   * @example
   * 5
   */
  registryPullQPS?: number;
  /**
   * @example
   * true
   */
  serializeImagePulls?: boolean;
  systemReserved?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      allowedUnsafeSysctls: 'allowedUnsafeSysctls',
      containerLogMaxFiles: 'containerLogMaxFiles',
      containerLogMaxSize: 'containerLogMaxSize',
      cpuManagerPolicy: 'cpuManagerPolicy',
      eventBurst: 'eventBurst',
      eventRecordQPS: 'eventRecordQPS',
      evictionHard: 'evictionHard',
      evictionSoft: 'evictionSoft',
      evictionSoftGracePeriod: 'evictionSoftGracePeriod',
      featureGates: 'featureGates',
      kubeAPIBurst: 'kubeAPIBurst',
      kubeAPIQPS: 'kubeAPIQPS',
      kubeReserved: 'kubeReserved',
      maxPods: 'maxPods',
      readOnlyPort: 'readOnlyPort',
      registryBurst: 'registryBurst',
      registryPullQPS: 'registryPullQPS',
      serializeImagePulls: 'serializeImagePulls',
      systemReserved: 'systemReserved',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowedUnsafeSysctls: { 'type': 'array', 'itemType': 'string' },
      containerLogMaxFiles: 'number',
      containerLogMaxSize: 'string',
      cpuManagerPolicy: 'string',
      eventBurst: 'number',
      eventRecordQPS: 'number',
      evictionHard: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      evictionSoft: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      evictionSoftGracePeriod: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      featureGates: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      kubeAPIBurst: 'number',
      kubeAPIQPS: 'number',
      kubeReserved: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      maxPods: 'number',
      readOnlyPort: 'number',
      registryBurst: 'number',
      registryPullQPS: 'number',
      serializeImagePulls: 'boolean',
      systemReserved: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MaintenanceWindow extends $tea.Model {
  /**
   * @example
   * 3h
   */
  duration?: string;
  /**
   * @example
   * false
   */
  enable?: boolean;
  /**
   * @example
   * 03:00:00Z
   */
  maintenanceTime?: string;
  /**
   * @example
   * FREQ=WEEKLY;INTERVAL=4;BYDAY=MO,TU
   */
  recurrence?: string;
  /**
   * @example
   * Monday,Thursday
   */
  weeklyPeriod?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'duration',
      enable: 'enable',
      maintenanceTime: 'maintenance_time',
      recurrence: 'recurrence',
      weeklyPeriod: 'weekly_period',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'string',
      enable: 'boolean',
      maintenanceTime: 'string',
      recurrence: 'string',
      weeklyPeriod: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Nodepool extends $tea.Model {
  autoScaling?: NodepoolAutoScaling;
  /**
   * @example
   * 1
   * 
   * @deprecated
   */
  count?: number;
  /**
   * @deprecated
   */
  interconnectConfig?: NodepoolInterconnectConfig;
  /**
   * @example
   * basic
   */
  interconnectMode?: string;
  kubernetesConfig?: NodepoolKubernetesConfig;
  management?: NodepoolManagement;
  /**
   * @example
   * 10
   */
  maxNodes?: number;
  nodeConfig?: NodepoolNodeConfig;
  nodepoolInfo?: NodepoolNodepoolInfo;
  scalingGroup?: NodepoolScalingGroup;
  teeConfig?: NodepoolTeeConfig;
  static names(): { [key: string]: string } {
    return {
      autoScaling: 'auto_scaling',
      count: 'count',
      interconnectConfig: 'interconnect_config',
      interconnectMode: 'interconnect_mode',
      kubernetesConfig: 'kubernetes_config',
      management: 'management',
      maxNodes: 'max_nodes',
      nodeConfig: 'node_config',
      nodepoolInfo: 'nodepool_info',
      scalingGroup: 'scaling_group',
      teeConfig: 'tee_config',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoScaling: NodepoolAutoScaling,
      count: 'number',
      interconnectConfig: NodepoolInterconnectConfig,
      interconnectMode: 'string',
      kubernetesConfig: NodepoolKubernetesConfig,
      management: NodepoolManagement,
      maxNodes: 'number',
      nodeConfig: NodepoolNodeConfig,
      nodepoolInfo: NodepoolNodepoolInfo,
      scalingGroup: NodepoolScalingGroup,
      teeConfig: NodepoolTeeConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Runtime extends $tea.Model {
  /**
   * @example
   * docker
   */
  name?: string;
  /**
   * @example
   * 19.03.5
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Tag extends $tea.Model {
  /**
   * @example
   * env
   */
  key?: string;
  /**
   * @example
   * prod
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Taint extends $tea.Model {
  /**
   * @example
   * NoSchedule
   */
  effect?: string;
  /**
   * @example
   * key
   */
  key?: string;
  /**
   * @example
   * value
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      effect: 'effect',
      key: 'key',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effect: 'string',
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StandardComponentsValue extends $tea.Model {
  /**
   * @remarks
   * The name of the component.
   * 
   * @example
   * ack-arena
   */
  name?: string;
  /**
   * @remarks
   * The version of the component.
   * 
   * @example
   * 0.5.0
   */
  version?: string;
  /**
   * @remarks
   * The description of the component.
   * 
   * @example
   * ***
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the component is a required component. Valid values:
   * 
   * *   `true`: The component is required and must be installed when a cluster is created.
   * *   `false`: The component is optional. After a cluster is created, you can go to the `Add-ons` page to install the component.
   * 
   * @example
   * false
   */
  required?: string;
  /**
   * @remarks
   * Indicates whether the automatic installation of the component is disabled. By default, some optional components, such as components for logging and Ingresses, are installed when a cluster is created. You can set this parameter to disable automatic component installation. Valid values:
   * 
   * *   `true`: disables automatic component installation.
   * *   `false`: enables automatic component installation.
   * 
   * @example
   * false
   */
  disabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      version: 'version',
      description: 'description',
      required: 'required',
      disabled: 'disabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      version: 'string',
      description: 'string',
      required: 'string',
      disabled: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuotasValue extends $tea.Model {
  /**
   * @remarks
   * The value of the quota. If the quota limit is reached, submit an application in the [Quota Center console](https://quotas.console.aliyun.com/products/csk/quotas) to increase the quota.
   * 
   * @example
   * 1
   */
  quota?: string;
  /**
   * @remarks
   * The quota code.
   * 
   * @example
   * q_Kubernetes_Cluster
   */
  operationCode?: string;
  /**
   * @remarks
   * Indicates whether the quota is adjustable.
   * 
   * @example
   * true
   */
  adjustable?: boolean;
  /**
   * @remarks
   * The unit.
   * 
   * @example
   * Cluster
   */
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      quota: 'quota',
      operationCode: 'operation_code',
      adjustable: 'adjustable',
      unit: 'unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quota: 'string',
      operationCode: 'string',
      adjustable: 'boolean',
      unit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachInstancesRequest extends $tea.Model {
  /**
   * @remarks
   * The CPU management policy. The following policies are supported if the Kubernetes version of the cluster is 1.12.6 or later.
   * 
   * *   `static`: This policy allows pods with specific resource characteristics on the node to be configured with enhanced CPU affinity and exclusivity.
   * *   `none`: The default CPU affinity is used.
   * 
   * Default value: `none`.
   * 
   * >  This parameter is not supported if you specify the `nodepool_id` parameter.
   * 
   * @example
   * none
   */
  cpuPolicy?: string;
  /**
   * @remarks
   * Specifies whether to store container data and images on data disks. Valid values:
   * 
   * *   `true`: stores container data and images on data disks.
   * *   `false`: does not store container data or images on data disks.
   * 
   * Default value: `false`.
   * 
   * How a data disk is mounted:
   * 
   * *   If the ECS instances are already mounted with data disks and the file system of the last data disk is not initialized, the system automatically formats this data disk to ext4 and mounts it to /var/lib/docker and /var/lib/kubelet.
   * *   If no data disk is attached to the ECS instances, the system does not purchase a new data disk.
   * 
   * >  If you choose to store container data and images on data disks and a data disk is already mounted to the ECS instance, the original data on this data disk will be cleared. You can back up the disk to avoid data loss.
   * 
   * @example
   * false
   */
  formatDisk?: boolean;
  /**
   * @remarks
   * The ID of the custom image. If you do not set this parameter, the default system image is used.
   * 
   * > 
   * 
   * *   If you specify a custom image, the custom image is used to deploy the operating systems on the system disks of the nodes.
   * 
   * *   This parameter is not supported after you specify `nodepool_id`.
   * 
   * @example
   * aliyun_2_1903_x64_20G_alibase_20200529.vhd
   */
  imageId?: string;
  /**
   * @remarks
   * The ECS instances to be added.
   * 
   * This parameter is required.
   */
  instances?: string[];
  /**
   * @remarks
   * Specifies whether the nodes that you want to add are Edge Node Service (ENS) nodes. Valid values:
   * 
   * *   `true`: The nodes that you want to add are ENS nodes.
   * *   `false`: The nodes that you want to add are not ENS nodes.
   * 
   * Default value: `false`.
   * 
   * >  If the nodes that you want to add are ENS nodes, you must set this parameter to `true`. This allows you to identify these nodes.
   * 
   * @example
   * false
   */
  isEdgeWorker?: boolean;
  /**
   * @remarks
   * Specifies whether to retain the instance name. Valid values:
   * 
   * *   `true`: retains the instance name.
   * *   `false`: does not retain the instance name.
   * 
   * Default value: `true`
   * 
   * @example
   * true
   */
  keepInstanceName?: boolean;
  /**
   * @remarks
   * The name of the key pair that is used to log on to the ECS instances. You must set key_pair or `login_password`.
   * 
   * >  This parameter is not supported if you specify the `nodepool_id` parameter.
   * 
   * @example
   * secrity-key
   */
  keyPair?: string;
  /**
   * @remarks
   * The node pool ID. If you do not set this parameter, the nodes are added to the default node pool.
   * 
   * @example
   * np615c0e0966124216a0412e10afe0****
   */
  nodepoolId?: string;
  /**
   * @remarks
   * The SSH logon password that is used to log on to the ECS instances. You must set login_password or `key_pair`. The password must be 8 to 30 characters in length, and must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters. It cannot contain backslashes (\\\\) or double quotation marks (").
   * 
   * For security considerations, the password is encrypted during data transfer.
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
   * >  This parameter is not supported if you specify the `nodepool_id` parameter.
   */
  runtime?: Runtime;
  /**
   * @remarks
   * The labels that you want to add to nodes. You must add labels based on the following rules:
   * 
   * *   Each label is a case-sensitive key-value pair. You can add up to 20 labels.
   * *   A key must be unique and cannot exceed 64 characters in length. A value can be empty and cannot exceed 128 characters in length. Keys and values cannot start with `aliyun`, `acs:`, `https://`, or `http://`. For more information, see [Labels and Selectors](https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#syntax-and-character-set).
   * 
   * >  This parameter is not supported if you specify the `nodepool_id` parameter.
   */
  tags?: Tag[];
  /**
   * @remarks
   * User-defined data. For more information, see [Generate user data](https://help.aliyun.com/document_detail/49121.html).
   * 
   * >  This parameter is not supported if you specify the `nodepool_id` parameter.
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachInstancesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The details of the added nodes.
   */
  list?: AttachInstancesResponseBodyList[];
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * T-5a544aff80282e39ea000039
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      list: 'list',
      taskId: 'task_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': AttachInstancesResponseBodyList },
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachInstancesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AttachInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AttachInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachInstancesToNodePoolRequest extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to store container data and images on data disks. Valid values:
   * 
   * *   `true`: stores container data and images on data disks.
   * *   `false`: does not store container data or images on data disks.
   * 
   * Default value: `false`.
   * 
   * How to mount a data disk:
   * 
   * *   If the ECS instances are already mounted with data disks and the file system of the last data disk is not initialized, the system automatically formats this data disk to ext4 and mounts it to /var/lib/docker and /var/lib/kubelet.
   * *   If no data disk is attached to the ECS instances, the system does not purchase a new data disk.
   * 
   * > If you choose to store container data and images on a data disk and the data disk is already mounted to the ECS instance, the existing data on the data disk will be cleared. You can back up the disk to avoid data loss.
   * 
   * @example
   * false
   */
  formatDisk?: boolean;
  /**
   * @remarks
   * The IDs of the instances to be added.
   */
  instances?: string[];
  /**
   * @remarks
   * Specifies whether to retain the instance name. Valid values:
   * 
   * *   `true`: retains the instance name.
   * *   `false`: does not retain the instance name.
   * 
   * Default value: `true`.
   * 
   * @example
   * true
   */
  keepInstanceName?: boolean;
  /**
   * @remarks
   * The SSH password that is used to log on to the instance.
   * 
   * @example
   * Hello1234
   */
  password?: string;
  static names(): { [key: string]: string } {
    return {
      formatDisk: 'format_disk',
      instances: 'instances',
      keepInstanceName: 'keep_instance_name',
      password: 'password',
    };
  }

  static types(): { [key: string]: any } {
    return {
      formatDisk: 'boolean',
      instances: { 'type': 'array', 'itemType': 'string' },
      keepInstanceName: 'boolean',
      password: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachInstancesToNodePoolResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D7631D83-6E98-1949-B665-766A62xxxxxx
   */
  requestId?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * T-5a54309c80282e39ea00002f
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'request_id',
      taskId: 'task_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachInstancesToNodePoolResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AttachInstancesToNodePoolResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AttachInstancesToNodePoolResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelClusterUpgradeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelComponentUpgradeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelOperationPlanResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 873DC52C-28AA-5A5C-938C-684D3D4B****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelOperationPlanResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CancelOperationPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CancelOperationPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelWorkflowRequest extends $tea.Model {
  /**
   * @remarks
   * The operation that you want to perform. Set the value to cancel.
   * 
   * This parameter is required.
   * 
   * @example
   * cancel
   */
  action?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'action',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelWorkflowResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckControlPlaneLogEnableResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the resource belongs.
   * 
   * @example
   * 162981*****
   */
  aliuid?: string;
  /**
   * @remarks
   * The control plane components for which log collection is enabled.
   * 
   * This parameter is required.
   */
  components?: string[];
  /**
   * @remarks
   * The name of the Simple Log Service project that you want to use to store the logs of control plane components.
   * 
   * Default value: k8s-log-$Cluster ID.
   * 
   * @example
   * k8s-log-c5b5e80b0b64a4bf6939d2d8fbbc5****
   */
  logProject?: string;
  /**
   * @remarks
   * The retention period of the log data stored in the Logstore. Valid values: 1 to 3000. Unit: days.
   * 
   * Default value: 30.
   * 
   * @example
   * 30
   */
  logTtl?: string;
  static names(): { [key: string]: string } {
    return {
      aliuid: 'aliuid',
      components: 'components',
      logProject: 'log_project',
      logTtl: 'log_ttl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliuid: 'string',
      components: { 'type': 'array', 'itemType': 'string' },
      logProject: 'string',
      logTtl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckControlPlaneLogEnableResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CheckControlPlaneLogEnableResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CheckControlPlaneLogEnableResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckServiceRoleRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  roles?: CheckServiceRoleRequestRoles[];
  static names(): { [key: string]: string } {
    return {
      roles: 'roles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roles: { 'type': 'array', 'itemType': CheckServiceRoleRequestRoles },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckServiceRoleResponseBody extends $tea.Model {
  roles?: CheckServiceRoleResponseBodyRoles[];
  static names(): { [key: string]: string } {
    return {
      roles: 'roles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roles: { 'type': 'array', 'itemType': CheckServiceRoleResponseBodyRoles },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckServiceRoleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CheckServiceRoleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CheckServiceRoleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CleanClusterUserPermissionsRequest extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to forcefully delete the specified kubeconfig files. Valid values:
   * 
   * *   **false** (default): checks the cluster access records within the previous seven days before deleting the kubeconfig files. The kubeconfig files are not deleted if cluster access records are found or fail to be retrieved.
   * *   **true**: forcefully deletes the kubeconfig files without checking cluster access records.
   * 
   * @example
   * false
   */
  force?: boolean;
  static names(): { [key: string]: string } {
    return {
      force: 'Force',
    };
  }

  static types(): { [key: string]: any } {
    return {
      force: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CleanClusterUserPermissionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CleanUserPermissionsRequest extends $tea.Model {
  /**
   * @remarks
   * The cluster IDs.
   * 
   * *   If cluster IDs are specified, only the kubeconfig files of the specified clusters and the relevant RBAC permissions are deleted and revoked.
   */
  clusterIds?: string[];
  /**
   * @remarks
   * Specifies whether to forcefully delete the specified kubeconfig files. Valid values:
   * 
   * *   **false** (default): checks the cluster access records within the previous seven days before deleting the kubeconfig files. The kubeconfig files are not deleted if cluster access records are found or fail to be retrieved.
   * *   **true**: forcefully deletes the kubeconfig files without checking cluster access records.
   * 
   * @example
   * false
   */
  force?: boolean;
  static names(): { [key: string]: string } {
    return {
      clusterIds: 'ClusterIds',
      force: 'Force',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterIds: { 'type': 'array', 'itemType': 'string' },
      force: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CleanUserPermissionsShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * The cluster IDs.
   * 
   * *   If cluster IDs are specified, only the kubeconfig files of the specified clusters and the relevant RBAC permissions are deleted and revoked.
   */
  clusterIdsShrink?: string;
  /**
   * @remarks
   * Specifies whether to forcefully delete the specified kubeconfig files. Valid values:
   * 
   * *   **false** (default): checks the cluster access records within the previous seven days before deleting the kubeconfig files. The kubeconfig files are not deleted if cluster access records are found or fail to be retrieved.
   * *   **true**: forcefully deletes the kubeconfig files without checking cluster access records.
   * 
   * @example
   * false
   */
  force?: boolean;
  static names(): { [key: string]: string } {
    return {
      clusterIdsShrink: 'ClusterIds',
      force: 'Force',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterIdsShrink: 'string',
      force: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CleanUserPermissionsResponseBody extends $tea.Model {
  /**
   * @remarks
   * 请求ID。
   * 
   * @example
   * 687C5BAA-D103-4993-884B-C35E4314****
   */
  requestId?: string;
  /**
   * @remarks
   * 任务ID
   * 
   * @example
   * clean-user-permissions-2085266204********-6694c16e6ae07***********
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'request_id',
      taskId: 'task_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CleanUserPermissionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CleanUserPermissionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CleanUserPermissionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAutoscalingConfigRequest extends $tea.Model {
  /**
   * @remarks
   * The waiting time before the auto scaling feature performs a scale-in activity. Only if the resource usage on a node remains below the scale-in threshold within the waiting time, the node is removed after the waiting time ends. Unit: minutes.
   * 
   * @example
   * 10 m
   */
  coolDownDuration?: string;
  /**
   * @remarks
   * Specifies whether to evict DaemonSet pods during scale-in activities. Valid values:
   * 
   * *   `true`: evicts DaemonSet pods.
   * *   `false`: does not evict DaemonSet pods.
   * 
   * @example
   * false
   */
  daemonsetEvictionForNodes?: boolean;
  /**
   * @remarks
   * The node pool scale-out policy. Valid values:
   * 
   * *   `least-waste`: the default policy. If multiple node pools meet the requirement, this policy selects the node pool that will have the least idle resources after the scale-out activity is completed.
   * *   `random`: the random policy. If multiple node pools meet the requirement, this policy selects a random node pool for the scale-out activity.
   * *   `priority`: the priority-based policy If multiple node pools meet the requirement, this policy selects the node pool with the highest priority for the scale-out activity. The priority setting is stored in the ConfigMap named `cluster-autoscaler-priority-expander` in the kube-system namespace. When a scale-out activity is triggered, the policy obtains the node pool priorities from the ConfigMap based on the node pool IDs and then selects the node pool with the highest priority for the scale-out activity.
   * 
   * @example
   * least-waste
   */
  expander?: string;
  /**
   * @remarks
   * The scale-in threshold of GPU utilization. This threshold specifies the ratio of the GPU resources that are requested by pods to the total GPU resources on the node.
   * 
   * @example
   * 0.5
   */
  gpuUtilizationThreshold?: string;
  /**
   * @remarks
   * The maximum amount of time that the cluster autoscaler waits for pods on the nodes to terminate during scale-in activities. Unit: seconds.
   * 
   * @example
   * 14400s
   */
  maxGracefulTerminationSec?: number;
  /**
   * @remarks
   * The minimum number of pods that must be guaranteed during scale-in activities.
   * 
   * @example
   * 0
   */
  minReplicaCount?: number;
  /**
   * @remarks
   * Specifies whether to delete the corresponding Kubernetes node objects after nodes are removed in swift mode.
   * 
   * @example
   * false
   */
  recycleNodeDeletionEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to allow node scale-in activities. Valid values:
   * 
   * *   `true`: allows node scale-in activities.
   * *   `false`: does not allow node scale-in activities.
   * 
   * @example
   * true
   */
  scaleDownEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether the cluster autoscaler performs scale-out activities when the number of ready nodes in the cluster is zero.
   * 
   * @example
   * true
   */
  scaleUpFromZero?: boolean;
  /**
   * @remarks
   * The interval at which the cluster is scanned and evaluated for scaling. Unit: seconds.
   * 
   * @example
   * 30s
   */
  scanInterval?: string;
  /**
   * @remarks
   * Specifies whether to allow the cluster autoscaler to scale in nodes that host pods mounted with local storage, such as EmptyDir volumes or HostPath volumes. Valid values:
   * 
   * *   `true`: does not allow the cluster autoscaler to scale in these nodes.
   * *   `false`: allows the cluster autoscaler to scale in these nodes.
   * 
   * @example
   * false
   */
  skipNodesWithLocalStorage?: boolean;
  /**
   * @remarks
   * Specifies whether to allow the cluster autoscaler to scale in nodes that host pods in the kube-system namespace, excluding DaemonSet pods and mirror pods. Valid values:
   * 
   * *   `true`: does not allow the cluster autoscaler to scale in these nodes.
   * *   `false`: allows the cluster autoscaler to scale in these nodes.
   * 
   * @example
   * true
   */
  skipNodesWithSystemPods?: boolean;
  /**
   * @remarks
   * The cooldown period. Newly added nodes can be removed in scale-in activities only after the cooldown period ends. Unit: minutes.
   * 
   * @example
   * 10 m
   */
  unneededDuration?: string;
  /**
   * @remarks
   * The scale-in threshold. This threshold specifies the ratio of the resources that are requested by pods to the total resources on the node.
   * 
   * @example
   * 0.5
   */
  utilizationThreshold?: string;
  static names(): { [key: string]: string } {
    return {
      coolDownDuration: 'cool_down_duration',
      daemonsetEvictionForNodes: 'daemonset_eviction_for_nodes',
      expander: 'expander',
      gpuUtilizationThreshold: 'gpu_utilization_threshold',
      maxGracefulTerminationSec: 'max_graceful_termination_sec',
      minReplicaCount: 'min_replica_count',
      recycleNodeDeletionEnabled: 'recycle_node_deletion_enabled',
      scaleDownEnabled: 'scale_down_enabled',
      scaleUpFromZero: 'scale_up_from_zero',
      scanInterval: 'scan_interval',
      skipNodesWithLocalStorage: 'skip_nodes_with_local_storage',
      skipNodesWithSystemPods: 'skip_nodes_with_system_pods',
      unneededDuration: 'unneeded_duration',
      utilizationThreshold: 'utilization_threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coolDownDuration: 'string',
      daemonsetEvictionForNodes: 'boolean',
      expander: 'string',
      gpuUtilizationThreshold: 'string',
      maxGracefulTerminationSec: 'number',
      minReplicaCount: 'number',
      recycleNodeDeletionEnabled: 'boolean',
      scaleDownEnabled: 'boolean',
      scaleUpFromZero: 'boolean',
      scanInterval: 'string',
      skipNodesWithLocalStorage: 'boolean',
      skipNodesWithSystemPods: 'boolean',
      unneededDuration: 'string',
      utilizationThreshold: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAutoscalingConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterRequest extends $tea.Model {
  /**
   * @remarks
   * The access control list (ACL) rule of the SLB instance associated with the API server if the cluster is a registered cluster.
   */
  accessControlList?: string[];
  /**
   * @remarks
   * The components that you want to install in the cluster. When you create a cluster, you can configure the `addons` parameter to install specific components.
   * 
   * **Network plug-in**: required. The Flannel and Terway plug-ins are supported. Select one of the plug-ins for the cluster.
   * 
   * *   Specify the Flannel plug-in in the following format: [{"name":"flannel","config":""}].
   * *   Specify the Flannel plug-in in the following format: [{"name": "terway-eniip","config": ""}].
   * 
   * **Volume plug-in**: optional. Only the `CSI` plug-in is supported.
   * 
   * Specify the `CSI` plug-in in the following format: [{"name":"csi-plugin","config": ""},{"name": "csi-provisioner","config": ""}].
   * 
   * **Simple Log Service component**: optional. We recommend that you enable Simple Log Service. If Simple Log Service is disabled, you cannot use the cluster auditing feature.
   * 
   * *   To use an existing `Simple Log Service project`, specify the value in the following format: [{"name": "logtail-ds","config": "{"IngressDashboardEnabled":"true","sls_project_name":"your_sls_project_name"}"}].
   * *   To create a `Simple Log Service project`, specify the value in the following format: [{"name": "logtail-ds","config": "{"IngressDashboardEnabled":"true"}"}].
   * 
   * **Ingress controller**: optional. By default, the `nginx-ingress-controller` component is installed in ACK dedicated clusters.
   * 
   * *   To install nginx-ingress-controller and enable Internet access, specify the value in the following format: [{"name":"nginx-ingress-controller","config":"{"IngressSlbNetworkType":"internet"}"}].
   * *   To disable the system to automatically install nginx-ingress-controller, specify the value in the following format: [{"name": "nginx-ingress-controller","config": "","disabled": true}].
   * 
   * **Event center**: optional. By default, the event center feature is enabled.
   * 
   * You can use Kubernetes event centers to store and query events and configure alerts. You can use the Logstores that are associated with Kubernetes event centers free of charge within 90 days. For more information, see [Create and use a Kubernetes event center](https://help.aliyun.com/document_detail/150476.html).
   * 
   * To enable the ack-node-problem-detector component, specify the value in the following format: [{"name":"ack-node-problem-detector","config":"{"sls_project_name":"your_sls_project_name"}"}].
   */
  addons?: Addon[];
  /**
   * @remarks
   * Service accounts provide identities for pods when pods communicate with the `API server` of the cluster. `api-audiences` are used by the `API server` to check whether the `tokens` of requests are legitimate.`` Separate multiple `audiences` with commas (,).
   * 
   * For more information about `ServiceAccount`, see [Enable service account token volume projection](https://help.aliyun.com/document_detail/160384.html).
   * 
   * @example
   * kubernetes.default.svc
   */
  apiAudiences?: string;
  /**
   * @remarks
   * The billing method of the cluster. The following resources are billed on a subscription basis:
   * 
   * ECS instances in node pools.
   * 
   * The internal-facing SLB instance used by the API server.
   * 
   * Valid values:
   * 
   * PrePaid: subscription.
   * 
   * PostPaid: pay-as-you-go.
   * 
   * Default value: PostPaid.
   * 
   * @example
   * 1
   */
  chargeType?: string;
  /**
   * @remarks
   * [This parameter is deprecated]
   * 
   * Please replace this parameter with security_hardening_os.
   * 
   * @example
   * false
   * 
   * @deprecated
   */
  cisEnabled?: boolean;
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
   * The domain name of the cluster.
   * 
   * The domain name can contain one or more parts that are separated by periods (.). Each part cannot exceed 63 characters in length, and can contain lowercase letters, digits, and hyphens (-). Each part must start and end with a lowercase letter or digit.
   * 
   * @example
   * cluster.local
   */
  clusterDomain?: string;
  /**
   * @remarks
   * After you set `cluster_type` to `ManagedKubernetes` and configure the `profile` parameter, you can further specify the edition of the cluster. Valid values:
   * 
   * *   `ack.pro.small`: Pro.
   * *   `ack.standard`: Basic. If you leave the parameter empty, the Basic edition is selected.
   * 
   * @example
   * ack.pro.small
   */
  clusterSpec?: string;
  /**
   * @remarks
   * *   `Kubernetes`: ACK dedicated cluster.
   * *   `ManagedKubernetes`: ACK managed cluster. ACK managed clusters include ACK Basic clusters, ACK Pro clusters, ACK Serverless clusters (Basic and Pro), ACK Edge clusters (Basic and Pro), and ACK Lingjun clusters (Pro).
   * *   `ExternalKubernetes`: registered cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * Kubernetes
   */
  clusterType?: string;
  /**
   * @remarks
   * The CIDR block of pods. You can specify 10.0.0.0/8, 172.16-31.0.0/12-16, 192.168.0.0/16, or their subnets as the CIDR block of pods. The pod CIDR block cannot overlap with the CIDR block of the VPC in which the cluster is deployed and the CIDR blocks of existing clusters in the VPC. You cannot modify the pod CIDR block after you create the cluster.
   * 
   * For more information about subnetting for ACK clusters, see [Plan CIDR blocks for an ACK cluster that is deployed in a VPC](https://help.aliyun.com/document_detail/86500.html).
   * 
   * >  This parameter is required if the cluster uses Flannel as the network plug-in.
   * 
   * @example
   * 172.20.0.0/16
   */
  containerCidr?: string;
  /**
   * @remarks
   * The list of control plane components for which you want to enable log collection.
   * 
   * By default, the log of kube-apiserver, kube-controller-manager, and kube-scheduler is collected.
   */
  controlplaneLogComponents?: string[];
  /**
   * @remarks
   * The Simple Log Service project that is used to store the logs of control plane components. You can use an existing project or create one. If you choose to create a Simple Log Service project, the created project is named in the `k8s-log-{ClusterID}` format.
   * 
   * @example
   * k8s-log-xxx
   */
  controlplaneLogProject?: string;
  /**
   * @remarks
   * The retention period of control plane logs in days.
   * 
   * @example
   * 30
   */
  controlplaneLogTtl?: string;
  /**
   * @remarks
   * The CPU management policy of the nodes in the node pool. The following policies are supported if the Kubernetes version of the cluster is 1.12.6 or later:
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
   * Specifies custom subject alternative names (SANs) for the API server certificate to accept requests from specified IP addresses or domain names. Separate multiple IP addresses or domain names with commas (,).
   * 
   * @example
   * cs.aliyun.com
   */
  customSan?: string;
  /**
   * @remarks
   * Specifies whether to enable cluster deletion protection. If this option is enabled, the cluster cannot be deleted in the console or by calling API operations. Valid values:
   * 
   * *   `true`: enables deletion protection for the cluster. This way, the cluster cannot be deleted in the Container Service console or by calling API operations.
   * *   `false`: disables deletion protection for the cluster. This way, the cluster can be deleted in the Container Service console or by calling API operations.
   * 
   * Default value: `false`.
   * 
   * @example
   * true
   */
  deletionProtection?: boolean;
  /**
   * @remarks
   * Specifies whether to perform a rollback if the cluster fails to be created. Valid values:
   * 
   * *   `true`: performs a rollback if the system fails to create the cluster.
   * *   `false`: does not perform a rollback if the system fails to create the cluster.
   * 
   * Default value: `true`.
   * 
   * @example
   * true
   * 
   * @deprecated
   */
  disableRollback?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the RAM Roles for Service Accounts (RRSA) feature.
   * 
   * @example
   * true
   */
  enableRrsa?: boolean;
  /**
   * @remarks
   * The ID of a key that is managed by Key Management Service (KMS). The key is used to encrypt data disks. For more information, see [KMS](https://help.aliyun.com/document_detail/28935.html).
   * 
   * >  The key can be used only in ACK Pro clusters.
   * 
   * @example
   * 0fe64791-55eb-4fc7-84c5-c6c7cdca****
   */
  encryptionProviderKey?: string;
  /**
   * @remarks
   * Specifies whether to enable Internet access for the cluster. You can use an elastic IP address (EIP) to expose the API server. This way, you can access the cluster over the Internet. Valid values:
   * 
   * *   `true`: enables Internet access.
   * *   `false`: disables Internet access. If you set this parameter to false, the API server cannot be accessed over the Internet.
   * 
   * Default value: `false`.
   * 
   * @example
   * true
   */
  endpointPublicAccess?: boolean;
  /**
   * @remarks
   * Specifies whether to mount a data disk to a node that is created based on an existing ECS instance. Valid values:
   * 
   * *   `true`: stores the data of containers and images on a data disk. Back up the existing data on the data disk first.
   * *   `false`: does not store the data of containers and images on a data disk.
   * 
   * Default value: `false`.
   * 
   * How data disks are mounted:
   * 
   * *   If an ECS instance has data disks mounted and the file system of the last data disk is not initialized, the system automatically formats the data disk to ext4. Then, the system mounts the data disk to /var/lib/docker and /var/lib/kubelet.
   * *   If no data disk is mounted to the ECS instance, the system does not purchase a new data disk.
   * 
   * @example
   * false
   */
  formatDisk?: boolean;
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
   * The type of OS distribution that you want to use. To specify the node OS, we recommend that you use this parameter. Valid values:
   * 
   * *   CentOS
   * *   AliyunLinux
   * *   AliyunLinux Qboot
   * *   AliyunLinuxUEFI
   * *   AliyunLinux3
   * *   Windows
   * *   WindowsCore
   * *   AliyunLinux3Arm64
   * *   ContainerOS
   * 
   * Default value: `CentOS`.
   * 
   * @example
   * AliyunLinux
   */
  imageType?: string;
  /**
   * @remarks
   * The list of existing Elastic Compute Service (ECS) instances that are specified as worker nodes for the cluster.
   * 
   * >  This parameter is required when you create worker nodes based on existing ECS instances.
   */
  instances?: string[];
  /**
   * @remarks
   * The IP stack of the cluster.
   * 
   * @example
   * Optional value: ipv4 (Single stack) or ipv6 (Dual Stack)
   * Default value: IPV4
   */
  ipStack?: string;
  /**
   * @remarks
   * Specifies whether to create an advanced security group. This parameter takes effect only if `security_group_id` is left empty.
   * 
   * >  To use a basic security group, make sure that the sum of the number of nodes in the cluster and the number of pods that use Terway does not exceed 2,000. Therefore, we recommend that you specify an advanced security group for a cluster that has Terway installed.
   * 
   * *   `true`: creates an advanced security group.
   * *   `false`: does not create an advanced security group.
   * 
   * Default value: `true`.
   * 
   * @example
   * true
   */
  isEnterpriseSecurityGroup?: boolean;
  /**
   * @remarks
   * Specifies whether to retain the names of existing ECS instances that are used in the cluster. Valid values:
   * 
   * *   `true`: retains the names.
   * *   `false`: does not retain the names. The system assigns new names.
   * 
   * Default value: `true`.
   * 
   * @example
   * true
   */
  keepInstanceName?: boolean;
  /**
   * @remarks
   * The name of the key pair. You must configure this parameter or the `login_password` parameter.
   * 
   * @example
   * secrity-key
   */
  keyPair?: string;
  /**
   * @remarks
   * The Kubernetes version of the cluster. The Kubernetes versions supported by ACK are the same as the Kubernetes versions supported by open source Kubernetes. We recommend that you specify the latest Kubernetes version. If you do not configure this parameter, the latest Kubernetes version is used.
   * 
   * You can create clusters of the latest two Kubernetes versions in the ACK console. If you want to create clusters that run earlier Kubernetes versions, use the API. For more information about the Kubernetes versions supported by ACK, see [Release notes on Kubernetes versions](https://help.aliyun.com/document_detail/185269.html).
   * 
   * @example
   * 1.16.9-aliyun.1
   */
  kubernetesVersion?: string;
  /**
   * @remarks
   * The specification of the Server Load Balancer (SLB) instance. Valid values:
   * 
   * *   slb.s1.small
   * *   slb.s2.small
   * *   slb.s2.medium
   * *   slb.s3.small
   * *   slb.s3.medium
   * *   slb.s3.large
   * 
   * Default value: `slb.s2.small`.
   * 
   * @example
   * slb.s2.small
   */
  loadBalancerSpec?: string;
  /**
   * @remarks
   * Enables Simple Log Service for the cluster. This parameter takes effect only on ACK Serverless clusters. Set the value to `SLS`.
   * 
   * @example
   * SLS
   */
  loggingType?: string;
  /**
   * @remarks
   * The password for SSH logon. You must configure this parameter or the `key_pair` parameter. The password must be 8 to 30 characters in length, and must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.
   * 
   * @example
   * Hello@1234
   */
  loginPassword?: string;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal for master nodes. This parameter takes effect only if `master_instance_charge_type` is set to `PrePaid`. Valid values:
   * 
   * *   `true`: enables auto-renewal.
   * *   `false`: disables auto-renewal.
   * 
   * Default value: `true`.
   * 
   * @example
   * true
   */
  masterAutoRenew?: boolean;
  /**
   * @remarks
   * The cycle of auto-renewal. This parameter takes effect and is required only if the subscription billing method is selected for master nodes.
   * 
   * Valid values: 1, 2, 3, 6, and 12.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  masterAutoRenewPeriod?: number;
  /**
   * @remarks
   * The number of master nodes. Valid values: `3` and `5`.
   * 
   * Default value: `3`.
   * 
   * @example
   * 3
   */
  masterCount?: number;
  /**
   * @remarks
   * The billing method of master nodes. Valid values:
   * 
   * *   `PrePaid`: subscription.
   * *   `PostPaid`: pay-as-you-go.
   * 
   * Default value: `PostPaid`.
   * 
   * @example
   * PrePaid
   */
  masterInstanceChargeType?: string;
  /**
   * @remarks
   * The instance types of master nodes. For more information, see [Overview of instance families](https://help.aliyun.com/document_detail/25378.html).
   */
  masterInstanceTypes?: string[];
  /**
   * @remarks
   * The subscription duration of master nodes. This parameter takes effect and is required only if `master_instance_charge_type` is set to `PrePaid`.
   * 
   * Valid values: 1, 2, 3, 6, 12, 24, 36, 48, and 60.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  masterPeriod?: number;
  /**
   * @remarks
   * The billing cycle of master nodes. This parameter is required if master_instance_charge_type is set to `PrePaid`.
   * 
   * Set the value to `Month`. Master nodes are billed only on a monthly basis.
   * 
   * @example
   * Month
   */
  masterPeriodUnit?: string;
  /**
   * @remarks
   * The type of system disk that you want to use for the master nodes. Valid values:
   * 
   * *   `cloud_efficiency`: ultra disk.
   * *   `cloud_ssd`: standard SSD.
   * *   `cloud_essd`: enhanced SSD (ESSD).
   * 
   * Default value: `cloud_ssd`. The default value may vary in different zones.
   * 
   * @example
   * cloud_ssd
   */
  masterSystemDiskCategory?: string;
  /**
   * @remarks
   * The performance level (PL) of the system disk that you want to use for master nodes. This parameter takes effect only for ESSDs. For more information about the relationship between disk PLs and disk sizes, see [ESSDs](https://help.aliyun.com/document_detail/122389.html).
   * 
   * @example
   * PL1
   */
  masterSystemDiskPerformanceLevel?: string;
  /**
   * @remarks
   * The size of the system disk that is specified for master nodes. Valid values: 40 to 500. Unit: GiB.
   * 
   * Default value: `120`.
   * 
   * @example
   * 120
   */
  masterSystemDiskSize?: number;
  /**
   * @remarks
   * The ID of the automatic snapshot policy that is used by the system disk specified for master nodes.
   * 
   * @example
   * sp-2zej1nogjvovnz4z****
   */
  masterSystemDiskSnapshotPolicyId?: string;
  /**
   * @remarks
   * The IDs of the vSwitches that are specified for master nodes. You can specify up to three vSwitches. We recommend that you specify three vSwitches in different zones to ensure high availability.
   * 
   * The number of vSwitches must be the same as that specified in `master_count` and the same as those specified in `master_vswitch_ids`.
   */
  masterVswitchIds?: string[];
  /**
   * @remarks
   * The name of the cluster.
   * 
   * The name must be 1 to 63 characters in length, and can contain digits, letters, and hyphens (-). The name cannot start with a hyphen (-).
   * 
   * This parameter is required.
   * 
   * @example
   * cluster-demo
   */
  name?: string;
  /**
   * @remarks
   * Specifies whether to create a NAT gateway and configure SNAT rules when the system creates the ACK Serverless cluster. Valid values:
   * 
   * *   `true`: automatically creates a NAT gateway and configures SNAT rules. This enables Internet access for the VPC in which the cluster is deployed.
   * *   `false`: does not create a NAT gateway or configure SNAT rules. In this case, the cluster in the VPC cannot access the Internet.
   * 
   * Default value: `false`.
   * 
   * @example
   * true
   */
  natGateway?: boolean;
  /**
   * @remarks
   * The maximum number of IP addresses that can be assigned to nodes. This number is determined by the node CIDR block. This parameter takes effect only if the cluster uses Flannel as the network plug-in.
   * 
   * Default value: `26`.
   * 
   * @example
   * 25
   */
  nodeCidrMask?: string;
  /**
   * @remarks
   * The name of the custom node.
   * 
   * A node name consists of a prefix, an IP substring, and a suffix.
   * 
   * *   The prefix and suffix can contain multiple parts that are separated by periods (.). Each part can contain lowercase letters, digits, and hyphens (-), and must start and end with a lowercase letter or digit.
   * *   The IP substring length specifies the number of digits to be truncated from the end of the node IP address. The IP substring length ranges from 5 to 12.
   * 
   * For example, if the node IP address is 192.168.0.55, the prefix is aliyun.com, the IP substring length is 5, and the suffix is test, the node name will be aliyun.com00055test.
   * 
   * @example
   * aliyun.com00055test
   */
  nodeNameMode?: string;
  /**
   * @remarks
   * The node port range. Valid values: 30000 to 65535.
   * 
   * Default value: `30000-32767`.
   * 
   * @example
   * 30000~32767
   */
  nodePortRange?: string;
  /**
   * @remarks
   * The list of node pools.
   */
  nodepools?: Nodepool[];
  /**
   * @remarks
   * The number of worker nodes. Valid values: 0 to 100.
   * 
   * @example
   * 3
   * 
   * @deprecated
   */
  numOfNodes?: number;
  /**
   * @remarks
   * The type of OS. Valid values:
   * 
   * *   Windows
   * *   Linux
   * 
   * Default value: `Linux`.
   * 
   * @example
   * Linux
   */
  osType?: string;
  /**
   * @remarks
   * The subscription duration. This parameter takes effect and is required only if you set charge_type to PrePaid.
   * 
   * Valid values: 1, 2, 3, 6, 12, 24, 36, 48, and 60.
   * 
   * Default value: 1.
   * 
   * @example
   * FY2023
   */
  period?: number;
  /**
   * @remarks
   * The billing cycle. This parameter is required if charge_type is set to PrePaid.
   * 
   * Set the value to Month. Master nodes are billed only on a monthly basis.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * The OS distribution. Valid values:
   * 
   * *   CentOS
   * *   AliyunLinux
   * *   QbootAliyunLinux
   * *   Qboot
   * *   Windows
   * *   WindowsCore
   * 
   * Default value: `CentOS`.
   * 
   * @example
   * CentOS
   */
  platform?: string;
  /**
   * @remarks
   * The list of pod vSwitches. You need to specify at least one pod vSwitch for each node vSwitch, and the pod vSwitches must be different from the node vSwitches (`vswitch`). We recommend that you specify pod vSwitches whose mask lengths are no longer than 19.
   * 
   * >  The `pod_vswitch_ids` parameter is required if the cluster uses Terway as the network plug-in.
   */
  podVswitchIds?: string[];
  /**
   * @remarks
   * If you set `cluster_type` to `ManagedKubernetes`, an ACK managed cluster is created. In this case, you can further specify the cluster edition. Valid values:
   * 
   * *   `Default`: ACK managed cluster. ACK managed clusters include ACK Basic clusters and ACK Pro clusters.
   * *   `Edge`: ACK Edge cluster. ACK Edge clusters include ACK Edge Basic clusters and ACK Edge Pro clusters.
   * *   `Serverless`: ACK Serverless cluster. ACK Serverless clusters include ACK Serverless Basic clusters and ACK Serverless Pro clusters.
   * *   `Lingjun`: ACK Lingjun Pro cluster.
   * 
   * @example
   * Default
   */
  profile?: string;
  /**
   * @remarks
   * The kube-proxy mode. Valid values:
   * 
   * *   `iptables`: iptables is a kube-proxy mode. It uses iptables rules to conduct Service discovery and load balancing. The performance of this mode is limited by the size of the cluster. This mode is suitable for clusters that run a small number of Services.
   * *   `ipvs`: provides high performance and uses IP Virtual Server (IPVS). This allows you to configure service discovery and load balancing. This mode is suitable for clusters that are required to run a large number of services. We recommend that you use this mode in scenarios when high load balancing performance is required.
   * 
   * Default value: `ipvs`.
   * 
   * @example
   * ipvs
   */
  proxyMode?: string;
  /**
   * @remarks
   * The list of ApsaraDB RDS instances. Select the ApsaraDB RDS instances that you want to add to the whitelist. We recommend that you add the CIDR block of pods and CIDR block of nodes to the ApsaraDB RDS instances in the ApsaraDB RDS console. When you set the ApsaraDB RDS instances, you cannot scale out the number of nodes because the instances are not in the Running state.
   */
  rdsInstances?: string[];
  /**
   * @remarks
   * The ID of the region in which you want to deploy the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the cluster belongs. You can use resource groups to isolate clusters.
   * 
   * @example
   * rg-acfm3mkrure****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The container runtime. The default container runtime is Docker. containerd and Sandboxed-Container are also supported.
   * 
   * For more information about how to select a proper container runtime, see [How to select between Docker and Sandboxed-Container](https://help.aliyun.com/document_detail/160313.html).
   */
  runtime?: Runtime;
  /**
   * @remarks
   * The ID of an existing security group. You need to choose between this parameter and the `is_enterprise_security_group` parameter. Cluster nodes are automatically added to the security group.
   * 
   * @example
   * sg-bp1bdue0qc1g7k****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * Specifies whether to enable Alibaba Cloud Linux Security Hardening. 
   * 
   * Valid values:
   * 
   * - true: enables Alibaba Cloud Linux Security Hardening.
   * - false: disables Alibaba Cloud Linux Security Hardening.
   * 
   * Default value: false
   * 
   * @example
   * false
   */
  securityHardeningOs?: boolean;
  /**
   * @remarks
   * Service accounts provide identities for pods when pods communicate with the `API server` of the cluster. `service-account-issuer` is the issuer of the `serviceaccount token`, which corresponds to the `iss` field in the `token payload`.
   * 
   * For more information about `ServiceAccount`, see [Enable service account token volume projection](https://help.aliyun.com/document_detail/160384.html).
   * 
   * @example
   * kubernetes.default.svc
   */
  serviceAccountIssuer?: string;
  /**
   * @remarks
   * The CIDR block of Services. Valid values: 10.0.0.0/16-24, 172.16-31.0.0/16-24, and 192.168.0.0/16-24. The CIDR block of Services cannot overlap with the CIDR block of the VPC (10.1.0.0/21) or the CIDR blocks of existing clusters in the VPC. You cannot modify the CIDR block of Services after the cluster is created.
   * 
   * By default, the CIDR block of Services is set to 172.19.0.0/20.
   * 
   * This parameter is required.
   * 
   * @example
   * 172.21.0.0/20
   */
  serviceCidr?: string;
  /**
   * @remarks
   * The type of service discovery that is implemented in the `ACK Serverless` cluster.
   * 
   * *   `CoreDNS`: CoreDNS is a standard service discovery plug-in that is provided by open source Kubernetes. To use DNS resolution, you must provision pods. By default, two elastic container instances are used. The specification of each instance is 0.25 vCores and 512 MiB of memory.
   * *   `PrivateZone`: a DNS resolution service provided by Alibaba Cloud. You must activate Alibaba Cloud DNS PrivateZone before you can use it for service discovery.
   * 
   * By default, this parameter is not specified.
   */
  serviceDiscoveryTypes?: string[];
  /**
   * @remarks
   * Specifies whether to configure Source Network Address Translation (SNAT) rules for the VPC in which the cluster is deployed. Valid values:
   * 
   * *   `true`: automatically creates a NAT gateway and configures SNAT rules. Set this parameter to `true` if nodes and applications in the cluster need to access the Internet.
   * *   `false`: does not create a NAT gateway or configure SNAT rules. In this case, nodes and applications in the cluster cannot access the Internet.
   * 
   * >  If this feature is disabled when you create the cluster, you can manually enable this feature after you create the cluster. For more information, see [Manually create a NAT gateway and configure SNAT rules](https://help.aliyun.com/document_detail/178480.html).
   * 
   * Default value: `true`.
   * 
   * @example
   * true
   */
  snatEntry?: boolean;
  /**
   * @remarks
   * Specifies whether to enable reinforcement based on Multi-Level Protection Scheme (MLPS). For more information, see [ACK reinforcement based on classified protection](https://help.aliyun.com/document_detail/196148.html).
   * 
   * Valid values:
   * 
   * *   `true`: enables reinforcement based on MLPS.
   * *   `false`: disables reinforcement based on MLPS.
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  socEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to enable SSH logon. If this parameter is set to true, you can log on to master nodes in an ACK dedicated cluster over the Internet. This parameter does not take effect for ACK managed clusters. Valid values:
   * 
   * *   `true`: enables SSH logon.
   * *   `false`: disables SSH logon.
   * 
   * Default value: `false`.
   * 
   * @example
   * true
   */
  sshFlags?: boolean;
  /**
   * @remarks
   * The labels that you want to add to nodes. You must add labels based on the following rules:
   * 
   * *   A label is a case-sensitive key-value pair. You can add up to 20 labels.
   * *   When you add a label, you must specify a unique key but you can leave the value empty. A key cannot exceed 64 characters in length and a value cannot exceed 128 characters in length. Keys and values cannot start with aliyun, acs:, https://, or http://. For more information, see [Labels and Selectors](https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#syntax-and-character-set).
   */
  tags?: Tag[];
  /**
   * @remarks
   * The taints of the nodes in the node pool. Taints can be used together with tolerations to avoid scheduling pods to specified nodes. For more information, see [taint-and-toleration](https://kubernetes.io/zh/docs/concepts/scheduling-eviction/taint-and-toleration/).
   */
  taints?: Taint[];
  /**
   * @remarks
   * Specifies the timeout period of cluster creation. Unit: minutes.
   * 
   * Default value: `60`.
   * 
   * @example
   * 60
   */
  timeoutMins?: number;
  /**
   * @remarks
   * The time zone of the cluster.
   * 
   * @example
   * Asia/Shanghai
   */
  timezone?: string;
  /**
   * @remarks
   * The custom Certificate Authority (CA) certificate used by the cluster.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----****
   */
  userCa?: string;
  /**
   * @remarks
   * The user data of nodes.
   * 
   * @example
   * IyEvdXNyL2Jpbi9iYXNoCmVjaG8gIkhlbGxvIEFD****
   */
  userData?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) in which you want to deploy the cluster. This parameter is required.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-2zeik9h3ahvv2zz95****
   */
  vpcid?: string;
  /**
   * @remarks
   * The vSwitches that are specified for nodes in the cluster. This parameter is required when you create an ACK managed cluster that does not contain nodes.
   * 
   * This parameter is required.
   */
  vswitchIds?: string[];
  /**
   * @remarks
   * Specifies whether to enable auto-renewal for worker nodes. This parameter takes effect and is required only if `worker_instance_charge_type` is set to `PrePaid`. Valid values:
   * 
   * *   `true`: enables auto-renewal.
   * *   `false`: disables auto-renewal.
   * 
   * Default value: `true`.
   * 
   * @example
   * true
   * 
   * @deprecated
   */
  workerAutoRenew?: boolean;
  /**
   * @remarks
   * The cycle of auto-renewal. This parameter takes effect and is required only if the subscription billing method is selected for worker nodes.
   * 
   * Valid values: 1, 2, 3, 6, and 12.
   * 
   * @example
   * 1
   * 
   * @deprecated
   */
  workerAutoRenewPeriod?: number;
  /**
   * @remarks
   * The configurations of the data disks that you want to mount to worker nodes. The configurations include the disk type and disk size.
   * 
   * @deprecated
   */
  workerDataDisks?: CreateClusterRequestWorkerDataDisks[];
  /**
   * @remarks
   * The billing method of worker nodes. Valid values:
   * 
   * *   `PrePaid`: subscription.
   * *   `PostPaid`: pay-as-you-go.
   * 
   * Default value: PostPaid.
   * 
   * @example
   * PrePaid
   * 
   * @deprecated
   */
  workerInstanceChargeType?: string;
  /**
   * @remarks
   * The instance configurations of worker nodes.
   * 
   * @deprecated
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
   * 
   * @deprecated
   */
  workerPeriod?: number;
  /**
   * @remarks
   * The billing cycle of worker nodes. This parameter is required if worker_instance_charge_type is set to `PrePaid`.
   * 
   * Set the value to `Month`. Worker nodes are billed only on a monthly basis.
   * 
   * @example
   * Month
   * 
   * @deprecated
   */
  workerPeriodUnit?: string;
  /**
   * @remarks
   * The category of the system disks for worker nodes. For more information, see [Elastic Block Storage devices](https://help.aliyun.com/document_detail/63136.html).
   * 
   * Valid values:
   * 
   * *   `cloud_efficiency`: ultra disk.
   * *   `cloud_ssd`: standard SSD.
   * 
   * Default value: `cloud_ssd`.
   * 
   * @example
   * cloud_efficiency
   * 
   * @deprecated
   */
  workerSystemDiskCategory?: string;
  /**
   * @remarks
   * If the system disk is an ESSD, you can set the PL of the ESSD. For more information, see [ESSDs](https://help.aliyun.com/document_detail/122389.html).
   * 
   * Valid values:
   * 
   * *   PL0
   * *   PL1
   * *   PL2
   * *   PL3
   * 
   * @example
   * PL1
   * 
   * @deprecated
   */
  workerSystemDiskPerformanceLevel?: string;
  /**
   * @remarks
   * The system disk size of worker nodes. Unit: GiB.
   * 
   * Valid values: 40 to 500.
   * 
   * The value of this parameter must be at least 40 and no less than the image size.
   * 
   * Default value: `120`.
   * 
   * @example
   * 120
   * 
   * @deprecated
   */
  workerSystemDiskSize?: number;
  /**
   * @remarks
   * The ID of the automatic snapshot policy that is used by the system disk specified for worker nodes.
   * 
   * @example
   * sp-2zej1nogjvovnz4z****
   * 
   * @deprecated
   */
  workerSystemDiskSnapshotPolicyId?: string;
  /**
   * @remarks
   * The list of vSwitches that are specified for nodes. Each node is allocated a vSwitch.
   * 
   * The `worker_vswitch_ids` parameter is optional but the `vswitch_ids` parameter is required when you create an ACK managed cluster that does not contain nodes.
   * 
   * @deprecated
   */
  workerVswitchIds?: string[];
  /**
   * @remarks
   * The ID of the zone to which the cluster belongs. This parameter takes effect for only ACK Serverless clusters.
   * 
   * When you create an ACK Serverless cluster, you must configure `zone_id` if `vpc_id` and `vswitch_ids` are not configured. This way, the system automatically creates a VPC in the specified zone.
   * 
   * @example
   * cn-beiji****
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      accessControlList: 'access_control_list',
      addons: 'addons',
      apiAudiences: 'api_audiences',
      chargeType: 'charge_type',
      cisEnabled: 'cis_enabled',
      cloudMonitorFlags: 'cloud_monitor_flags',
      clusterDomain: 'cluster_domain',
      clusterSpec: 'cluster_spec',
      clusterType: 'cluster_type',
      containerCidr: 'container_cidr',
      controlplaneLogComponents: 'controlplane_log_components',
      controlplaneLogProject: 'controlplane_log_project',
      controlplaneLogTtl: 'controlplane_log_ttl',
      cpuPolicy: 'cpu_policy',
      customSan: 'custom_san',
      deletionProtection: 'deletion_protection',
      disableRollback: 'disable_rollback',
      enableRrsa: 'enable_rrsa',
      encryptionProviderKey: 'encryption_provider_key',
      endpointPublicAccess: 'endpoint_public_access',
      formatDisk: 'format_disk',
      imageId: 'image_id',
      imageType: 'image_type',
      instances: 'instances',
      ipStack: 'ip_stack',
      isEnterpriseSecurityGroup: 'is_enterprise_security_group',
      keepInstanceName: 'keep_instance_name',
      keyPair: 'key_pair',
      kubernetesVersion: 'kubernetes_version',
      loadBalancerSpec: 'load_balancer_spec',
      loggingType: 'logging_type',
      loginPassword: 'login_password',
      masterAutoRenew: 'master_auto_renew',
      masterAutoRenewPeriod: 'master_auto_renew_period',
      masterCount: 'master_count',
      masterInstanceChargeType: 'master_instance_charge_type',
      masterInstanceTypes: 'master_instance_types',
      masterPeriod: 'master_period',
      masterPeriodUnit: 'master_period_unit',
      masterSystemDiskCategory: 'master_system_disk_category',
      masterSystemDiskPerformanceLevel: 'master_system_disk_performance_level',
      masterSystemDiskSize: 'master_system_disk_size',
      masterSystemDiskSnapshotPolicyId: 'master_system_disk_snapshot_policy_id',
      masterVswitchIds: 'master_vswitch_ids',
      name: 'name',
      natGateway: 'nat_gateway',
      nodeCidrMask: 'node_cidr_mask',
      nodeNameMode: 'node_name_mode',
      nodePortRange: 'node_port_range',
      nodepools: 'nodepools',
      numOfNodes: 'num_of_nodes',
      osType: 'os_type',
      period: 'period',
      periodUnit: 'period_unit',
      platform: 'platform',
      podVswitchIds: 'pod_vswitch_ids',
      profile: 'profile',
      proxyMode: 'proxy_mode',
      rdsInstances: 'rds_instances',
      regionId: 'region_id',
      resourceGroupId: 'resource_group_id',
      runtime: 'runtime',
      securityGroupId: 'security_group_id',
      securityHardeningOs: 'security_hardening_os',
      serviceAccountIssuer: 'service_account_issuer',
      serviceCidr: 'service_cidr',
      serviceDiscoveryTypes: 'service_discovery_types',
      snatEntry: 'snat_entry',
      socEnabled: 'soc_enabled',
      sshFlags: 'ssh_flags',
      tags: 'tags',
      taints: 'taints',
      timeoutMins: 'timeout_mins',
      timezone: 'timezone',
      userCa: 'user_ca',
      userData: 'user_data',
      vpcid: 'vpcid',
      vswitchIds: 'vswitch_ids',
      workerAutoRenew: 'worker_auto_renew',
      workerAutoRenewPeriod: 'worker_auto_renew_period',
      workerDataDisks: 'worker_data_disks',
      workerInstanceChargeType: 'worker_instance_charge_type',
      workerInstanceTypes: 'worker_instance_types',
      workerPeriod: 'worker_period',
      workerPeriodUnit: 'worker_period_unit',
      workerSystemDiskCategory: 'worker_system_disk_category',
      workerSystemDiskPerformanceLevel: 'worker_system_disk_performance_level',
      workerSystemDiskSize: 'worker_system_disk_size',
      workerSystemDiskSnapshotPolicyId: 'worker_system_disk_snapshot_policy_id',
      workerVswitchIds: 'worker_vswitch_ids',
      zoneId: 'zone_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessControlList: { 'type': 'array', 'itemType': 'string' },
      addons: { 'type': 'array', 'itemType': Addon },
      apiAudiences: 'string',
      chargeType: 'string',
      cisEnabled: 'boolean',
      cloudMonitorFlags: 'boolean',
      clusterDomain: 'string',
      clusterSpec: 'string',
      clusterType: 'string',
      containerCidr: 'string',
      controlplaneLogComponents: { 'type': 'array', 'itemType': 'string' },
      controlplaneLogProject: 'string',
      controlplaneLogTtl: 'string',
      cpuPolicy: 'string',
      customSan: 'string',
      deletionProtection: 'boolean',
      disableRollback: 'boolean',
      enableRrsa: 'boolean',
      encryptionProviderKey: 'string',
      endpointPublicAccess: 'boolean',
      formatDisk: 'boolean',
      imageId: 'string',
      imageType: 'string',
      instances: { 'type': 'array', 'itemType': 'string' },
      ipStack: 'string',
      isEnterpriseSecurityGroup: 'boolean',
      keepInstanceName: 'boolean',
      keyPair: 'string',
      kubernetesVersion: 'string',
      loadBalancerSpec: 'string',
      loggingType: 'string',
      loginPassword: 'string',
      masterAutoRenew: 'boolean',
      masterAutoRenewPeriod: 'number',
      masterCount: 'number',
      masterInstanceChargeType: 'string',
      masterInstanceTypes: { 'type': 'array', 'itemType': 'string' },
      masterPeriod: 'number',
      masterPeriodUnit: 'string',
      masterSystemDiskCategory: 'string',
      masterSystemDiskPerformanceLevel: 'string',
      masterSystemDiskSize: 'number',
      masterSystemDiskSnapshotPolicyId: 'string',
      masterVswitchIds: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      natGateway: 'boolean',
      nodeCidrMask: 'string',
      nodeNameMode: 'string',
      nodePortRange: 'string',
      nodepools: { 'type': 'array', 'itemType': Nodepool },
      numOfNodes: 'number',
      osType: 'string',
      period: 'number',
      periodUnit: 'string',
      platform: 'string',
      podVswitchIds: { 'type': 'array', 'itemType': 'string' },
      profile: 'string',
      proxyMode: 'string',
      rdsInstances: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      resourceGroupId: 'string',
      runtime: Runtime,
      securityGroupId: 'string',
      securityHardeningOs: 'boolean',
      serviceAccountIssuer: 'string',
      serviceCidr: 'string',
      serviceDiscoveryTypes: { 'type': 'array', 'itemType': 'string' },
      snatEntry: 'boolean',
      socEnabled: 'boolean',
      sshFlags: 'boolean',
      tags: { 'type': 'array', 'itemType': Tag },
      taints: { 'type': 'array', 'itemType': Taint },
      timeoutMins: 'number',
      timezone: 'string',
      userCa: 'string',
      userData: 'string',
      vpcid: 'string',
      vswitchIds: { 'type': 'array', 'itemType': 'string' },
      workerAutoRenew: 'boolean',
      workerAutoRenewPeriod: 'number',
      workerDataDisks: { 'type': 'array', 'itemType': CreateClusterRequestWorkerDataDisks },
      workerInstanceChargeType: 'string',
      workerInstanceTypes: { 'type': 'array', 'itemType': 'string' },
      workerPeriod: 'number',
      workerPeriodUnit: 'string',
      workerSystemDiskCategory: 'string',
      workerSystemDiskPerformanceLevel: 'string',
      workerSystemDiskSize: 'number',
      workerSystemDiskSnapshotPolicyId: 'string',
      workerVswitchIds: { 'type': 'array', 'itemType': 'string' },
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * @example
   * cb95aa626a47740afbf6aa099b650****
   */
  clusterId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 687C5BAA-D103-4993-884B-C35E4314A1E1
   */
  requestId?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * T-5a54309c80282e39ea00002f
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'cluster_id',
      requestId: 'request_id',
      taskId: 'task_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      requestId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterDiagnosisRequest extends $tea.Model {
  /**
   * @example
   * {"namespace": "kube-system", "name": "csi-plugin-2cg9f"}
   */
  target?: { [key: string]: any };
  /**
   * @example
   * node
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      target: 'target',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      target: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterDiagnosisResponseBody extends $tea.Model {
  /**
   * @example
   * c5cdf7e3938bc4f8eb0e44b21a80f****
   */
  clusterId?: string;
  /**
   * @example
   * 6f719f23098240818eb26fe3a37d****
   */
  diagnosisId?: string;
  /**
   * @example
   * 687C5BAA-D103-4993-884B-C35E4314****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'cluster_id',
      diagnosisId: 'diagnosis_id',
      requestId: 'request_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      diagnosisId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterDiagnosisResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateClusterDiagnosisResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateClusterDiagnosisResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterNodePoolRequest extends $tea.Model {
  /**
   * @remarks
   * The configurations of auto scaling.
   */
  autoScaling?: CreateClusterNodePoolRequestAutoScaling;
  /**
   * @remarks
   * This parameter is discontinued. Use desired_size.
   * 
   * The number of nodes in the node pool.
   * 
   * @example
   * 1
   * 
   * @deprecated
   */
  count?: number;
  /**
   * @remarks
   * This parameter is discontinued.
   * 
   * The configurations of the edge node pool.
   * 
   * @deprecated
   */
  interconnectConfig?: CreateClusterNodePoolRequestInterconnectConfig;
  /**
   * @remarks
   * The network type of the edge node pool. This parameter takes effect only if you set the `type` parameter of the node pool to `edge`. Valid values:
   * 
   * *   `basic`: basic.
   * *   `private`: dedicated. Only Kubernetes 1.22 and later support this value.
   * 
   * @example
   * basic
   */
  interconnectMode?: string;
  /**
   * @remarks
   * The cluster configurations.
   */
  kubernetesConfig?: CreateClusterNodePoolRequestKubernetesConfig;
  /**
   * @remarks
   * The configurations of the managed node pool feature.
   */
  management?: CreateClusterNodePoolRequestManagement;
  /**
   * @remarks
   * The maximum number of nodes that can be created in the edge node pool. The value of this parameter must be greater than or equal to 0. A value of 0 indicates that the number of nodes in the node pool is limited only by the quota of nodes in the cluster. In most cases, this parameter is set to a value greater than 0 for edge node pools. This parameter is set to 0 for node pools whose types are ess or default edge node pools.
   * 
   * @example
   * 10
   * 
   * @deprecated
   */
  maxNodes?: number;
  /**
   * @remarks
   * The node configurations.
   */
  nodeConfig?: CreateClusterNodePoolRequestNodeConfig;
  /**
   * @remarks
   * The configurations of the node pool.
   */
  nodepoolInfo?: CreateClusterNodePoolRequestNodepoolInfo;
  /**
   * @remarks
   * The configurations of the scaling group that is used by the node pool.
   */
  scalingGroup?: CreateClusterNodePoolRequestScalingGroup;
  /**
   * @remarks
   * The configurations of confidential computing for the cluster.
   */
  teeConfig?: CreateClusterNodePoolRequestTeeConfig;
  static names(): { [key: string]: string } {
    return {
      autoScaling: 'auto_scaling',
      count: 'count',
      interconnectConfig: 'interconnect_config',
      interconnectMode: 'interconnect_mode',
      kubernetesConfig: 'kubernetes_config',
      management: 'management',
      maxNodes: 'max_nodes',
      nodeConfig: 'node_config',
      nodepoolInfo: 'nodepool_info',
      scalingGroup: 'scaling_group',
      teeConfig: 'tee_config',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoScaling: CreateClusterNodePoolRequestAutoScaling,
      count: 'number',
      interconnectConfig: CreateClusterNodePoolRequestInterconnectConfig,
      interconnectMode: 'string',
      kubernetesConfig: CreateClusterNodePoolRequestKubernetesConfig,
      management: CreateClusterNodePoolRequestManagement,
      maxNodes: 'number',
      nodeConfig: CreateClusterNodePoolRequestNodeConfig,
      nodepoolInfo: CreateClusterNodePoolRequestNodepoolInfo,
      scalingGroup: CreateClusterNodePoolRequestScalingGroup,
      teeConfig: CreateClusterNodePoolRequestTeeConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterNodePoolResponseBody extends $tea.Model {
  /**
   * @remarks
   * The node pool ID.
   * 
   * @example
   * np31da1b38983f4511b490fc62108a****
   */
  nodepoolId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0527ac9a-c899-4341-a21a-****
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * T-613b19bbd160ad492800****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      nodepoolId: 'nodepool_id',
      requestId: 'request_id',
      taskId: 'task_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodepoolId: 'string',
      requestId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterNodePoolResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateClusterNodePoolResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateClusterNodePoolResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEdgeMachineRequest extends $tea.Model {
  /**
   * @remarks
   * The `hostname` of the cloud-native box.
   * 
   * >  After the cloud-native box is activated, the `hostname` is automatically modified. The `hostname` is prefixed with the model and the prefix is followed by a random string.
   * 
   * This parameter is required.
   * 
   * @example
   * ACK-B-B010-****
   */
  hostname?: string;
  /**
   * @remarks
   * The model of the cloud-native box.
   * 
   * This parameter is required.
   * 
   * @example
   * ACK-V-B010
   */
  model?: string;
  /**
   * @remarks
   * The serial number of the cloud-native box.
   * 
   * This parameter is required.
   * 
   * @example
   * Q2CB5XZAFBFG****
   */
  sn?: string;
  static names(): { [key: string]: string } {
    return {
      hostname: 'hostname',
      model: 'model',
      sn: 'sn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostname: 'string',
      model: 'string',
      sn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEdgeMachineResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the cloud-native box.
   * 
   * @example
   * cc0725ddf688744979cd98445f67e****
   */
  edgeMachineId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * "request_id": "6e7b377a-c5ed-4388-8026-689e1b34****",
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      edgeMachineId: 'edge_machine_id',
      requestId: 'request_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      edgeMachineId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEdgeMachineResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateEdgeMachineResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateEdgeMachineResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateKubernetesTriggerRequest extends $tea.Model {
  /**
   * @remarks
   * The action that the trigger performs. Set the value to redeploy.
   * 
   * `redeploy`: redeploys the resources specified by `project_id`.
   * 
   * This parameter is required.
   * 
   * @example
   * redeploy
   */
  action?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * c5cdf7e3938bc4f8eb0e44b21a80f****
   */
  clusterId?: string;
  /**
   * @remarks
   * The name of the trigger project.
   * 
   * The name consists of the namespace where the application is deployed and the name of the application. The format is `${namespace}/${name}`.
   * 
   * Example: `default/test-app`.
   * 
   * This parameter is required.
   * 
   * @example
   * default/test-app
   */
  projectId?: string;
  /**
   * @remarks
   * The type of trigger. Valid values:
   * 
   * *   `deployment`: performs actions on Deployments.
   * *   `application`: performs actions on applications that are deployed in Application Center.
   * 
   * Default value: `deployment`.
   * 
   * @example
   * deployment
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'action',
      clusterId: 'cluster_id',
      projectId: 'project_id',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      clusterId: 'string',
      projectId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateKubernetesTriggerResponseBody extends $tea.Model {
  /**
   * @remarks
   * The action that the trigger performs. For example, a value of `redeploy` indicates that the trigger redeploys the application.
   * 
   * @example
   * redeploy
   */
  action?: string;
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * @example
   * c5cdf7e3938bc4f8eb0e44b21a80f****
   */
  clusterId?: string;
  /**
   * @remarks
   * The ID of the trigger.
   * 
   * @example
   * 111
   */
  id?: string;
  /**
   * @remarks
   * The name of the trigger project.
   * 
   * @example
   * default/test-app
   */
  projectId?: string;
  /**
   * @remarks
   * The type of trigger.
   * 
   * Valid values:
   * 
   * *   `deployment`: performs actions on Deployments.
   * *   `application`: performs actions on applications that are deployed in Application Center.
   * 
   * @example
   * deployment
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'action',
      clusterId: 'cluster_id',
      id: 'id',
      projectId: 'project_id',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      clusterId: 'string',
      id: 'string',
      projectId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateKubernetesTriggerResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateKubernetesTriggerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateKubernetesTriggerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTemplateRequest extends $tea.Model {
  /**
   * @remarks
   * The description of the template.
   * 
   * @example
   * this is test
   */
  description?: string;
  /**
   * @remarks
   * The name of the orchestration template.
   * 
   * The name must be 1 to 63 characters in length, and can contain digits, letters, and hyphens (-). It cannot start with a hyphen (-).
   * 
   * This parameter is required.
   * 
   * @example
   * service-account-template
   */
  name?: string;
  /**
   * @remarks
   * The label of the template.
   * 
   * @example
   * test
   */
  tags?: string;
  /**
   * @remarks
   * The template content in the YAML format.
   * 
   * This parameter is required.
   * 
   * @example
   * apiVersion: v1\\nkind: ServiceAccount\\nmetadata:\\n  name: test-sa
   */
  template?: string;
  /**
   * @remarks
   * The type of template. You can set the parameter to a custom value.
   * 
   * *   If the parameter is set to `kubernetes`, the template is displayed on the Templates page in the console.
   * *   If you set the parameter to `compose`, the template is not displayed in the console.
   * 
   * We recommend that you set the parameter to `kubernetes`.
   * 
   * Default value: `compose`.
   * 
   * @example
   * kubernetes
   */
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      name: 'name',
      tags: 'tags',
      template: 'template',
      templateType: 'template_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      tags: 'string',
      template: 'string',
      templateType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTemplateResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the orchestration template.
   * 
   * @example
   * ba1fe77b-b01e-4640-b77e-8f1b80e3e3cf
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      templateId: 'template_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTemplateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTriggerRequest extends $tea.Model {
  /**
   * @remarks
   * The action that the trigger performs. Set the value to redeploy.
   * 
   * `redeploy`: redeploys the resources specified by `project_id`.
   * 
   * This parameter is required.
   * 
   * @example
   * redeploy
   */
  action?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * c5cdf7e3938bc4f8eb0e44b21a80f****
   */
  clusterId?: string;
  /**
   * @remarks
   * The name of the trigger project.
   * 
   * The name consists of the namespace where the application is deployed and the name of the application. The format is `${namespace}/${name}`.
   * 
   * Example: `default/test-app`.
   * 
   * This parameter is required.
   * 
   * @example
   * default/test-app
   */
  projectId?: string;
  /**
   * @remarks
   * The type of trigger. Valid values:
   * 
   * *   `deployment`: performs actions on Deployments.
   * *   `application`: performs actions on applications that are deployed in Application Center.
   * 
   * Default value: `deployment`.
   * 
   * @example
   * deployment
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'action',
      clusterId: 'cluster_id',
      projectId: 'project_id',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      clusterId: 'string',
      projectId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTriggerResponseBody extends $tea.Model {
  /**
   * @remarks
   * The action that the trigger performs. For example, a value of `redeploy` indicates that the trigger redeploys the application.
   * 
   * @example
   * redeploy
   */
  action?: string;
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * @example
   * c93095129fc41463aa455d89444fd****
   */
  clusterId?: string;
  /**
   * @remarks
   * The ID of the trigger.
   * 
   * @example
   * 102536
   */
  id?: string;
  /**
   * @remarks
   * The name of the trigger project.
   * 
   * @example
   * default/test-app
   */
  projectId?: string;
  /**
   * @remarks
   * The type of trigger. Default value: deployment.
   * 
   * @example
   * deployment
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'action',
      clusterId: 'cluster_id',
      id: 'id',
      projectId: 'project_id',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      clusterId: 'string',
      id: 'string',
      projectId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTriggerResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateTriggerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateTriggerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAlertContactRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  contactIds?: number[];
  static names(): { [key: string]: string } {
    return {
      contactIds: 'contact_ids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactIds: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAlertContactShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  contactIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      contactIdsShrink: 'contact_ids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactIdsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAlertContactResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteAlertContactResponseBody[];
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: { 'type': 'array', 'itemType': DeleteAlertContactResponseBody },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAlertContactGroupRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  contactGroupIds?: number[];
  static names(): { [key: string]: string } {
    return {
      contactGroupIds: 'contact_group_ids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroupIds: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAlertContactGroupShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  contactGroupIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      contactGroupIdsShrink: 'contact_group_ids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroupIdsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAlertContactGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteAlertContactGroupResponseBody[];
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: { 'type': 'array', 'itemType': DeleteAlertContactGroupResponseBody },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteClusterRequest extends $tea.Model {
  /**
   * @remarks
   * The type of cluster resource that you want to delete or retain.
   */
  deleteOptions?: DeleteClusterRequestDeleteOptions[];
  /**
   * @remarks
   * Specifies whether to retain the Server Load Balancer (SLB) instances that are created by the cluster.
   * 
   * *   `true`: retains the SLB instances that are created by the cluster.
   * *   `false`: does not retain the SLB instances that are created by the cluster.
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   * 
   * @deprecated
   */
  keepSlb?: boolean;
  /**
   * @remarks
   * Specifies whether to retain all resources. If you set the parameter to `true`, the `retain_resources` parameter is ignored.
   * 
   * *   `true`: retains all resources.
   * *   `false`: does not retain all resources.
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  retainAllResources?: boolean;
  /**
   * @remarks
   * The list of resources. To retain resources when you delete a cluster, you need to specify the IDs of the resources to be retained.
   */
  retainResources?: string[];
  static names(): { [key: string]: string } {
    return {
      deleteOptions: 'delete_options',
      keepSlb: 'keep_slb',
      retainAllResources: 'retain_all_resources',
      retainResources: 'retain_resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteOptions: { 'type': 'array', 'itemType': DeleteClusterRequestDeleteOptions },
      keepSlb: 'boolean',
      retainAllResources: 'boolean',
      retainResources: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteClusterShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * The type of cluster resource that you want to delete or retain.
   */
  deleteOptionsShrink?: string;
  /**
   * @remarks
   * Specifies whether to retain the Server Load Balancer (SLB) instances that are created by the cluster.
   * 
   * *   `true`: retains the SLB instances that are created by the cluster.
   * *   `false`: does not retain the SLB instances that are created by the cluster.
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   * 
   * @deprecated
   */
  keepSlb?: boolean;
  /**
   * @remarks
   * Specifies whether to retain all resources. If you set the parameter to `true`, the `retain_resources` parameter is ignored.
   * 
   * *   `true`: retains all resources.
   * *   `false`: does not retain all resources.
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  retainAllResources?: boolean;
  /**
   * @remarks
   * The list of resources. To retain resources when you delete a cluster, you need to specify the IDs of the resources to be retained.
   */
  retainResourcesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      deleteOptionsShrink: 'delete_options',
      keepSlb: 'keep_slb',
      retainAllResources: 'retain_all_resources',
      retainResourcesShrink: 'retain_resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteOptionsShrink: 'string',
      keepSlb: 'boolean',
      retainAllResources: 'boolean',
      retainResourcesShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteClusterResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * @example
   * cb95aa626a47740afbf6aa099b650****
   */
  clusterId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 687C5BAA-D103-4993-884B-C35E4314****
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * T-5a54309c80282e39ea****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'cluster_id',
      requestId: 'request_id',
      taskId: 'task_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      requestId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteClusterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteClusterNodepoolRequest extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to forcefully delete the node pool.
   * 
   * @example
   * false
   */
  force?: boolean;
  static names(): { [key: string]: string } {
    return {
      force: 'force',
    };
  }

  static types(): { [key: string]: any } {
    return {
      force: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteClusterNodepoolResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7263C978-3DBD-4E06-B319-793B38A2F388
   */
  requestId?: string;
  /**
   * @example
   * T-655ace947e0e6603af000004
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'request_id',
      taskId: 'task_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteClusterNodepoolResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteClusterNodepoolResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteClusterNodepoolResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteClusterNodesRequest extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to remove all pods from the nodes that you want to remove. Valid values:
   * 
   * *   `true`: removes all pods from the nodes that you want to remove.
   * *   `false`: does not remove pods from the nodes that you want to remove.
   * 
   * Default value: `false`.
   * 
   * @example
   * true
   */
  drainNode?: boolean;
  /**
   * @remarks
   * The list of nodes to be removed. You need to specify the name of the nodes used in the cluster, for example, `cn-hangzhou.192.168.0.70`.
   * 
   * This parameter is required.
   */
  nodes?: string[];
  /**
   * @remarks
   * Specifies whether to release the Elastic Compute Service (ECS) instances. Valid values:
   * 
   * *   `true`: releases the ECS instances.
   * *   `false`: does not release the ECS instances.
   * 
   * Default value: `false`.
   * 
   * >  You cannot release subscription ECS instances.
   * 
   * @example
   * true
   */
  releaseNode?: boolean;
  static names(): { [key: string]: string } {
    return {
      drainNode: 'drain_node',
      nodes: 'nodes',
      releaseNode: 'release_node',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drainNode: 'boolean',
      nodes: { 'type': 'array', 'itemType': 'string' },
      releaseNode: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteClusterNodesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * c104d5d5f301c4e2a8ee578c37bc****
   */
  clusterId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A9891419-D125-4D89-AFCA-68846675E2F7
   */
  requestId?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * T-60fea8ad2e277f0879000ae9
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'cluster_id',
      requestId: 'request_id',
      taskId: 'task_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      requestId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteClusterNodesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteClusterNodesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteClusterNodesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEdgeMachineRequest extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to forcefully delete the cloud-native box. Valid values:
   * 
   * *   `true`: forcefully deletes the cloud-native box.
   * *   `false`: does not forcefully delete the cloud-native box.
   * 
   * Default value: `false`.
   * 
   * @example
   * true/false
   */
  force?: string;
  static names(): { [key: string]: string } {
    return {
      force: 'force',
    };
  }

  static types(): { [key: string]: any } {
    return {
      force: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEdgeMachineResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteKubernetesTriggerResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePolicyInstanceRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the policy instance.
   * 
   * @example
   * allowed-repos-mqdsf
   */
  instanceName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceName: 'instance_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePolicyInstanceResponseBody extends $tea.Model {
  /**
   * @remarks
   * A list of policy instances.
   */
  instances?: string[];
  static names(): { [key: string]: string } {
    return {
      instances: 'instances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePolicyInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeletePolicyInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeletePolicyInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTemplateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTriggerResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployPolicyInstanceRequest extends $tea.Model {
  /**
   * @remarks
   * The action of the policy. Valid values:
   * 
   * *   `deny`: Deployments that match the policy are denied.
   * *   `warn`: Alerts are generated for Deployments that match the policy.
   * 
   * @example
   * deny
   */
  action?: string;
  /**
   * @remarks
   * The namespaces to which the policy applies. If you leave this parameter empty, the policy is applicable to all namespaces of the cluster.
   */
  namespaces?: string[];
  /**
   * @remarks
   * The parameter settings of the policy. For more information about the parameters supported by each policy, see [Predefined security policies of ACK](https://www.alibabacloud.com/help/doc-detail/359819.html).
   * 
   * @example
   * {"restrictedNamespaces": [ "test" ]}
   */
  parameters?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      action: 'action',
      namespaces: 'namespaces',
      parameters: 'parameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      namespaces: { 'type': 'array', 'itemType': 'string' },
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployPolicyInstanceResponseBody extends $tea.Model {
  /**
   * @remarks
   * A list of policy instances.
   */
  instances?: string[];
  static names(): { [key: string]: string } {
    return {
      instances: 'instances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployPolicyInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeployPolicyInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeployPolicyInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescirbeWorkflowResponseBody extends $tea.Model {
  /**
   * @remarks
   * The time when the workflow was created.
   * 
   * @example
   * 2020-01-15 16:30:25 +0800 CST
   */
  createTime?: string;
  /**
   * @remarks
   * The duration of the workflow.
   * 
   * @example
   * 1h15m33.529968361s
   */
  duration?: string;
  /**
   * @remarks
   * The end time of the task.
   * 
   * @example
   * 0001-01-01 00:00:00 +0000 UTC
   */
  finishTime?: string;
  /**
   * @remarks
   * The size of the input data.
   * 
   * @example
   * 0
   */
  inputDataSize?: string;
  /**
   * @remarks
   * The name of the workflow.
   * 
   * @example
   * wgs-gpu-97xfn
   */
  jobName?: string;
  /**
   * @remarks
   * The namespace to which the workflow belongs.
   * 
   * @example
   * 1171330362041663
   */
  jobNamespace?: string;
  /**
   * @remarks
   * The size of the output data.
   * 
   * @example
   * 0
   */
  outputDataSize?: string;
  /**
   * @remarks
   * The current state of the workflow.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The number of base pairs.
   * 
   * @example
   * 0
   */
  totalBases?: string;
  /**
   * @remarks
   * The number of reads.
   * 
   * @example
   * 0
   */
  totalReads?: string;
  /**
   * @remarks
   * The user input parameters.
   * 
   * @example
   * {\\"wgs_oss_region\\":\\"cn-shenzhen\\",\\"wgs_fastq_first_name\\":\\"fastq/huada/MGISEQ-200019SZ0002402\\",\\"wgs_fastq_second_name\\":\\"fastq/huada/MGISEQ-200019SZ0002402\\",\\"wgs_bucket_name\\":\\"gene-shenzhen\\",\\"wgs_vcf_file_name\\":\\"output/vcf/huada.vcf\\",\\"wgs_bam_file_name\\":\\"output/bam/huada.bam\\",\\"wgs_reference_file\\":\\"hg19\\",\\"wgs_service\\":\\"g\\"}
   */
  userInputData?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'create_time',
      duration: 'duration',
      finishTime: 'finish_time',
      inputDataSize: 'input_data_size',
      jobName: 'job_name',
      jobNamespace: 'job_namespace',
      outputDataSize: 'output_data_size',
      status: 'status',
      totalBases: 'total_bases',
      totalReads: 'total_reads',
      userInputData: 'user_input_data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      duration: 'string',
      finishTime: 'string',
      inputDataSize: 'string',
      jobName: 'string',
      jobNamespace: 'string',
      outputDataSize: 'string',
      status: 'string',
      totalBases: 'string',
      totalReads: 'string',
      userInputData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescirbeWorkflowResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescirbeWorkflowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescirbeWorkflowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAddonRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the cluster. If you specify a cluster ID, only components used in the cluster are queried. Other parameters are ignored.
   * 
   * @example
   * c02b3e03be10643e8a644a843ffcb****
   */
  clusterId?: string;
  /**
   * @remarks
   * The specifications of the cluster. If cluster_id is specified, this parameter is ignored. You must specify the region_id, cluster_type, profile, cluster_spec, and cluster_version parameters at the same time.
   * 
   * @example
   * ack.pro.small
   */
  clusterSpec?: string;
  /**
   * @remarks
   * The type of the cluster. If cluster_id is specified, this parameter is ignored. You must specify the region_id, cluster_type, profile, cluster_spec, and cluster_version parameters at the same time.
   * 
   * @example
   * ManagedKubernetes
   */
  clusterType?: string;
  /**
   * @remarks
   * The version of the cluster. If cluster_id is specified, this parameter is ignored. You must specify the region_id, cluster_type, profile, cluster_spec, and cluster_version parameters at the same time.
   * 
   * @example
   * 1.26.3-aliyun.1
   */
  clusterVersion?: string;
  /**
   * @remarks
   * The subtype of the cluster. If cluster_id is specified, this parameter is ignored. You must specify the region_id, cluster_type, profile, cluster_spec, and cluster_version parameters at the same time.
   * 
   * @example
   * Default
   */
  profile?: string;
  /**
   * @remarks
   * The region ID. If cluster_id is specified, this parameter is ignored. You must specify the region_id, cluster_type, profile, cluster_spec, and cluster_version parameters at the same time.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The version of the component. If you do not specify this parameter, the latest version of the component is queried.
   * 
   * @example
   * v1.9.3.10-7dfca203-aliyun
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'cluster_id',
      clusterSpec: 'cluster_spec',
      clusterType: 'cluster_type',
      clusterVersion: 'cluster_version',
      profile: 'profile',
      regionId: 'region_id',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterSpec: 'string',
      clusterType: 'string',
      clusterVersion: 'string',
      profile: 'string',
      regionId: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAddonResponseBody extends $tea.Model {
  /**
   * @remarks
   * Architectures supported by the component. Valid values:
   * 
   * *   amd64
   * *   arm64
   */
  architecture?: string[];
  /**
   * @remarks
   * The category of the component.
   * 
   * @example
   * network
   */
  category?: string;
  /**
   * @remarks
   * The custom parameter schema of the component.
   * 
   * @example
   * {}
   */
  configSchema?: string;
  /**
   * @remarks
   * Indicates whether the component is automatically installed by default.
   * 
   * @example
   * true
   */
  installByDefault?: boolean;
  /**
   * @remarks
   * Indicates whether the component is fully managed.
   * 
   * @example
   * false
   */
  managed?: boolean;
  /**
   * @remarks
   * The name of the component.
   * 
   * @example
   * coredns
   */
  name?: string;
  /**
   * @remarks
   * The latest version of the component.
   */
  newerVersions?: DescribeAddonResponseBodyNewerVersions[];
  /**
   * @remarks
   * Operations supported by the component. Valid values:
   * 
   * *   Install
   * *   Upgrade
   * *   Modify
   * *   Uninstall
   */
  supportedActions?: string[];
  /**
   * @remarks
   * The version of the component.
   * 
   * @example
   * v1.9.3.6-32932850-aliyun
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      architecture: 'architecture',
      category: 'category',
      configSchema: 'config_schema',
      installByDefault: 'install_by_default',
      managed: 'managed',
      name: 'name',
      newerVersions: 'newer_versions',
      supportedActions: 'supported_actions',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architecture: { 'type': 'array', 'itemType': 'string' },
      category: 'string',
      configSchema: 'string',
      installByDefault: 'boolean',
      managed: 'boolean',
      name: 'string',
      newerVersions: { 'type': 'array', 'itemType': DescribeAddonResponseBodyNewerVersions },
      supportedActions: { 'type': 'array', 'itemType': 'string' },
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAddonResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAddonResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeAddonResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAddonsRequest extends $tea.Model {
  /**
   * @remarks
   * The cluster type. Valid values:
   * 
   * *   `Default`: ACK managed cluster
   * *   `Serverless`: ACK Serverless cluster
   * *   `Edge`: ACK Edge cluster
   * 
   * @example
   * Default
   */
  clusterProfile?: string;
  /**
   * @remarks
   * The edition of the cluster. If you set the cluster type to `ManagedKubernetes`, the following editions are supported:
   * 
   * *   `ack.pro.small`: ACK Pro cluster
   * *   `ack.standard`: ACK Basic cluster
   * 
   * By default, this parameter is left empty. If you leave this parameter empty, clusters are not filtered by edition.
   * 
   * @example
   * ack.pro.small
   */
  clusterSpec?: string;
  /**
   * @remarks
   * The type of cluster. Valid values:
   * 
   * *   `Kubernetes`: ACK dedicated cluster.
   * *   `ManagedKubernetes`: ACK managed cluster. ACK managed clusters include ACK Pro clusters, ACK Basic clusters, ACK Serverless Pro clusters, ACK Serverless Basic clusters, ACK Edge Pro clusters, and ACK Edge Basic clusters.
   * *   `ExternalKubernetes`: registered cluster.
   * 
   * @example
   * kubernetes
   */
  clusterType?: string;
  /**
   * @remarks
   * The cluster version.
   * 
   * @example
   * 1.24.6-aliyun.1
   */
  clusterVersion?: string;
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  region?: string;
  static names(): { [key: string]: string } {
    return {
      clusterProfile: 'cluster_profile',
      clusterSpec: 'cluster_spec',
      clusterType: 'cluster_type',
      clusterVersion: 'cluster_version',
      region: 'region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterProfile: 'string',
      clusterSpec: 'string',
      clusterType: 'string',
      clusterVersion: 'string',
      region: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAddonsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The list of the returned components.
   */
  componentGroups?: DescribeAddonsResponseBodyComponentGroups[];
  /**
   * @remarks
   * Standard components.
   */
  standardComponents?: { [key: string]: StandardComponentsValue };
  static names(): { [key: string]: string } {
    return {
      componentGroups: 'ComponentGroups',
      standardComponents: 'StandardComponents',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentGroups: { 'type': 'array', 'itemType': DescribeAddonsResponseBodyComponentGroups },
      standardComponents: { 'type': 'map', 'keyType': 'string', 'valueType': StandardComponentsValue },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAddonsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAddonsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeAddonsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterAddonInstanceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The configuration of the component.
   * 
   * @example
   * {"NetworkPolicy":"true"}
   */
  config?: string;
  /**
   * @remarks
   * The name of the component.
   * 
   * @example
   * terway-eniip
   */
  name?: string;
  /**
   * @remarks
   * The status of the component. Valid values:
   * 
   * *   initial: The component is being installed.
   * *   active: The component is installed.
   * *   unhealthy: The component is in an abnormal state.
   * *   upgrading: The component is being updated.
   * *   updating: The component is being modified.
   * *   deleting: The component is being uninstalled.
   * *   deleted: The component is deleted.
   * 
   * @example
   * active
   */
  state?: string;
  /**
   * @remarks
   * The version of the component.
   * 
   * @example
   * v1.4.3
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'config',
      name: 'name',
      state: 'state',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      name: 'string',
      state: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterAddonInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeClusterAddonInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeClusterAddonInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterAddonMetadataRequest extends $tea.Model {
  version?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterAddonMetadataResponseBody extends $tea.Model {
  /**
   * @remarks
   * The component schema parameters.
   * 
   * @example
   * {\\n  \\"$schema\\": \\"https://json-schema.org/draft-07/schema#\\",\\n  \\"properties\\": {\\n    \\"controller\\": {\\n      \\"description\\": \\"\\",\\n      \\"properties\\": {\\n        \\"resources\\": {\\n          \\"properties\\": {\\n            \\"armsPrometheusOperator\\": {\\n              \\"properties\\": {\\n                \\"resources\\": {\\n                  \\"properties\\": {\\n                    \\"limits\\": {\\n                      \\"properties\\": {\\n                        \\"memory\\": {\\n                          \\"description\\": \\"memory limit of arms prometheus operator\\",\\n                          \\"type\\": \\"string\\",\\n                          \\"pattern\\": \\"^[1-9][0-9]*(\\\\\\\\.\\\\\\\\d+)?(K|Ki|M|Mi|G|Gi|T|Ti)?$\\",\\n                          \\"default\\": \\"500m\\",\\n                          \\"x-ui-description\\": \\"<mds-key>\\",\\n                          \\"x-ui-prompt-message\\": \\"<mds-key>\\",\\n                          \\"x-ui-validation-message\\": \\"<mds-key>\\",\\n                          \\"x-ui-additional-tips\\": \\"<mds-key>\\"\\n                        },\\n                        \\"cpu\\": {\\n                          \\"description\\": \\"cpu limit of arms prometheus operator\\",\\n                          \\"type\\": \\"string\\",\\n                          \\"pattern\\": \\"^[1-9][0-9]*(m|\\\\\\\\.\\\\\\\\d+)?$\\",\\n                          \\"default\\": \\"1.0\\",\\n                          \\"x-ui-description\\": \\"<mds-key>\\",\\n                          \\"x-ui-validation-message\\": \\"<mds-key>\\"\\n                        }\\n                      },\\n                      \\"type\\": \\"object\\",\\n                      \\"additionalProperties\\": false\\n                    },\\n                    \\"requests\\": {\\n                      \\"properties\\": {\\n                        \\"memory\\": {\\n                          \\"description\\": \\"memory request of arms prometheus operator\\",\\n                          \\"type\\": \\"string\\",\\n                          \\"pattern\\": \\"^[1-9][0-9]*(\\\\\\\\.\\\\\\\\d+)?(K|Ki|M|Mi|G|Gi|T|Ti)?$\\",\\n                          \\"default\\": \\"500m\\",\\n                          \\"x-ui-description\\": \\"<mds-key>\\",\\n                          \\"x-ui-validation-message\\": \\"<mds-key>\\"\\n                        },\\n                        \\"cpu\\": {\\n                          \\"description\\": \\"cpu request of arms prometheus operator\\",\\n                          \\"type\\": \\"string\\",\\n                          \\"pattern\\": \\"^[1-9][0-9]*(m|\\\\\\\\.\\\\\\\\d+)?$\\",\\n                          \\"default\\": \\"1.0\\",\\n                          \\"x-ui-description\\": \\"<mds-key>\\",\\n                          \\"x-ui-validation-message\\": \\"<mds-key>\\"\\n                        }\\n                      },\\n                      \\"type\\": \\"object\\",\\n                      \\"additionalProperties\\": false\\n                    }\\n                  },\\n                  \\"type\\": \\"object\\",\\n                  \\"additionalProperties\\": false\\n                }\\n              },\\n              \\"type\\": \\"object\\",\\n              \\"additionalProperties\\": false\\n            }\\n          },\\n          \\"type\\": \\"object\\",\\n          \\"additionalProperties\\": false\\n        }\\n      },\\n      \\"type\\": \\"object\\",\\n      \\"additionalProperties\\": false\\n    }\\n  },\\n  \\"title\\": \\"Values\\",\\n  \\"type\\": \\"object\\",\\n  \\"additionalProperties\\": false\\n}
   */
  configSchema?: string;
  /**
   * @remarks
   * The component name.
   * 
   * @example
   * coredns
   */
  name?: string;
  /**
   * @remarks
   * The component version.
   * 
   * @example
   * 1.8.4.1
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      configSchema: 'config_schema',
      name: 'name',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configSchema: 'string',
      name: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterAddonMetadataResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeClusterAddonMetadataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeClusterAddonMetadataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterAddonUpgradeStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: {[key: string]: any};
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterAddonsUpgradeStatusRequest extends $tea.Model {
  /**
   * @remarks
   * The list of component names.
   * 
   * This parameter is required.
   */
  componentIds?: string[];
  static names(): { [key: string]: string } {
    return {
      componentIds: 'componentIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterAddonsUpgradeStatusShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * The list of component names.
   * 
   * This parameter is required.
   */
  componentIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      componentIdsShrink: 'componentIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentIdsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterAddonsUpgradeStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: {[key: string]: any};
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterAddonsVersionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: {[key: string]: any};
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterAttachScriptsRequest extends $tea.Model {
  /**
   * @remarks
   * The CPU architecture of the node. Valid values: `amd64`, `arm`, and `arm64`.
   * 
   * Default value: `amd64`.
   * 
   * >  This parameter is required if you want to add the existing node to a Container Service for Kubernetes (ACK) Edge cluster.
   * 
   * @example
   * amd64
   */
  arch?: string;
  /**
   * @remarks
   * Specifies whether to mount data disks to an existing instance when you add the instance to the cluster. You can add data disks to store container data and images. Valid values:
   * 
   * *   `true`: mounts data disks to the existing instance that you want to add. After a data disk is mounted, the original data on the disk is erased. Back up data before you mount a data disk.
   * *   `false`: does not mount data disks to the existing instance.
   * 
   * Default value: `false`.
   * 
   * How a data disk is mounted:
   * 
   * *   If the Elastic Compute Service (ECS) instances are already mounted with data disks and the file system of the last data disk is not initialized, the system automatically formats this data disk to ext4 and mounts it to /var/lib/docker and /var/lib/kubelet.
   * *   If no data disk is mounted to the ECS instance, the system does not purchase a new data disk.
   * 
   * @example
   * false
   */
  formatDisk?: boolean;
  /**
   * @remarks
   * Specifies whether to retain the name of the existing instance when it is added to the cluster. If you do not retain the instance name, the instance is named in the `worker-k8s-for-cs-<clusterid>` format. Valid values:
   * 
   * *   `true`: retains the instance name.
   * *   `false`: does not retain the instance name.
   * 
   * Default value: `true`
   * 
   * @example
   * true
   */
  keepInstanceName?: boolean;
  /**
   * @remarks
   * The ID of the node pool to which you want to add an existing node. This parameter allows you to add an existing node to a specified node pool.
   * 
   * >  If you do not specify a node pool ID, the node is added to the default node pool.
   * 
   * @example
   * np1c9229d9be2d432c93f77a88fca0****
   */
  nodepoolId?: string;
  /**
   * @remarks
   * The node configurations for the existing instance that you want to add as a node.
   * 
   * >  This parameter is required if you want to add the existing node to an ACK Edge cluster.
   * 
   * @example
   * {\\"enableIptables\\": true,\\"manageRuntime\\": true,\\"quiet\\": true,\\"allowedClusterAddons\\": [\\"kube-proxy\\",\\"flannel\\",\\"coredns\\"]}
   */
  options?: string;
  /**
   * @remarks
   * After you specify the list of RDS instances, the ECS instances in the cluster are automatically added to the whitelist of the RDS instances.
   */
  rdsInstances?: string[];
  static names(): { [key: string]: string } {
    return {
      arch: 'arch',
      formatDisk: 'format_disk',
      keepInstanceName: 'keep_instance_name',
      nodepoolId: 'nodepool_id',
      options: 'options',
      rdsInstances: 'rds_instances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arch: 'string',
      formatDisk: 'boolean',
      keepInstanceName: 'boolean',
      nodepoolId: 'string',
      options: 'string',
      rdsInstances: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterAttachScriptsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: string;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterDetailResponseBody extends $tea.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * c82e6987e2961451182edacd74faf****
   */
  clusterId?: string;
  /**
   * @remarks
   * The edition of the cluster if the cluster is an ACK managed cluster. Valid values:
   * 
   * *   `ack.pro.small`: ACK Pro
   * *   `ack.standard`: ACK Basic
   * 
   * @example
   * ack.pro.small
   */
  clusterSpec?: string;
  /**
   * @remarks
   * The type of cluster. Valid values:
   * 
   * *   `Kubernetes`: ACK dedicated cluster.
   * *   `ManagedKubernetes`: ACK managed cluster. ACK managed clusters include ACK Pro clusters, ACK Basic clusters, ACK Serverless Pro clusters, ACK Serverless Basic clusters, ACK Edge Pro clusters, and ACK Edge Basic clusters.
   * *   `ExternalKubernetes`: registered cluster.
   * 
   * @example
   * Kubernetes
   */
  clusterType?: string;
  /**
   * @remarks
   * The time when the cluster was created.
   * 
   * @example
   * 2019-11-25T15:50:20+08:00
   */
  created?: string;
  /**
   * @remarks
   * The current Kubernetes version of the cluster. For more information about the Kubernetes versions supported by ACK, see [Release notes for Kubernetes versions](https://help.aliyun.com/document_detail/185269.html).
   * 
   * @example
   * 1.16.6-aliyun.1
   */
  currentVersion?: string;
  /**
   * @remarks
   * Indicates whether deletion protection is enabled for the cluster. If deletion protection is enabled, the cluster cannot be deleted in the Container Service console or by calling API operations. Valid values:
   * 
   * *   `true`: deletion protection is enabled for the cluster. This way, the cluster cannot be deleted in the Container Service console or by calling API operations.
   * *   `false`: deletion protection is disabled for the cluster. This way, the cluster can be deleted in the Container Service console or by calling API operations.
   * 
   * @example
   * true
   */
  deletionProtection?: boolean;
  /**
   * @remarks
   * The Docker version that is used by the cluster.
   * 
   * @example
   * 19.03.5
   */
  dockerVersion?: string;
  /**
   * @example
   * lb-2zehc05z3b8dwiifh****
   */
  externalLoadbalancerId?: string;
  /**
   * @remarks
   * The initial Kubernetes version of the cluster.
   * 
   * @example
   * 1.16.6-aliyun.1
   */
  initVersion?: string;
  /**
   * @remarks
   * The maintenance window of the cluster. This feature is available only in ACK Pro clusters.
   */
  maintenanceWindow?: MaintenanceWindow;
  /**
   * @remarks
   * The endpoints of the cluster, including an internal endpoint and a public endpoint.
   * 
   * @example
   * {\\"intranet_api_server_endpoint\\":\\"https://192.168.0.251:6443\\"***}
   */
  masterUrl?: string;
  /**
   * @remarks
   * The metadata of the cluster.
   * 
   * @example
   * \\"Addons\\":***
   */
  metaData?: string;
  /**
   * @remarks
   * The name of the cluster.
   * 
   * The name must be 1 to 63 characters in length, and can contain digits, letters, and hyphens (-). The name cannot start with a hyphen (-).
   * 
   * @example
   * cluster-demo
   */
  name?: string;
  /**
   * @example
   * vpc
   */
  networkMode?: string;
  /**
   * @example
   * 1.18.8-aliyun.1
   */
  nextVersion?: string;
  /**
   * @remarks
   * The ROS parameters of the cluster.
   */
  parameters?: { [key: string]: string };
  /**
   * @example
   * false
   */
  privateZone?: boolean;
  /**
   * @remarks
   * Indicates the scenario in which the cluster is used. Valid values:
   * 
   * *   `Default`: non-edge computing scenarios
   * *   `Edge`: edge computing scenarios
   * 
   * @example
   * Default
   */
  profile?: string;
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the cluster belongs.
   * 
   * @example
   * rg-acfmyvw3wjm****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the security group to which the cluster belongs.
   * 
   * @example
   * sg-25yq****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The number of nodes in the cluster. Master nodes and worker nodes are included.
   * 
   * @example
   * 5
   */
  size?: number;
  /**
   * @remarks
   * The status of the cluster. Valid values:
   * 
   * *   `initial`: The cluster is being created.
   * *   `failed`: The cluster failed to be created.
   * *   `running`: The cluster is running.
   * *   `updating`: The cluster is being updated.
   * *   `updating_failed`: The cluster failed to be updated.
   * *   `scaling`: The cluster is being scaled.
   * *   `waiting`: The cluster is waiting for connection requests.
   * *   `disconnected`: The cluster is disconnected.
   * *   `stopped`: The cluster is stopped.
   * *   `deleting`: The cluster is being deleted.
   * *   `deleted`: The cluster is deleted.
   * *   `delete_failed`: The cluster failed to be deleted.
   * 
   * @example
   * running
   */
  state?: string;
  /**
   * @remarks
   * The pod CIDR block. It must be a valid and private CIDR block, and must be one of the following CIDR blocks or their subnets:
   * 
   * *   10.0.0.0/8
   * *   172.16-31.0.0/12-16
   * *   192.168.0.0/16
   * 
   * The pod CIDR block cannot overlap with the CIDR block of the VPC or the CIDR blocks of the clusters in the VPC.
   * 
   * For more information, see [Plan CIDR blocks for an ACK cluster](https://help.aliyun.com/document_detail/186964.html).
   * 
   * @example
   * 172.20.0.0/16
   */
  subnetCidr?: string;
  /**
   * @remarks
   * The resource tags of the cluster.
   */
  tags?: Tag[];
  /**
   * @remarks
   * The time when the cluster was updated.
   * 
   * @example
   * 2020-01-13T23:01:03+08:00
   */
  updated?: string;
  /**
   * @remarks
   * The ID of the VPC where the cluster is deployed. This parameter is required when you create a cluster.
   * 
   * @example
   * vpc-2zecuu62b9zw7a7qn****
   */
  vpcId?: string;
  /**
   * @remarks
   * The IDs of the vSwitches. You can select one to three vSwitches when you create a cluster. We recommend that you select vSwitches in different zones to ensure high availability.
   * 
   * @example
   * vsw-2zete8s4qocqg0mf6****,vsw-2zete8s4qocqg0mf6****
   */
  vswitchId?: string;
  /**
   * @remarks
   * The name of the worker Resource Access Management (RAM) role. The RAM role is assigned to the worker nodes of the cluster to allow the worker nodes to manage Elastic Compute Service (ECS) instances.
   * 
   * @example
   * KubernetesWorkerRole-ec87d15b-edca-4302-933f-c8a16bf0****
   */
  workerRamRoleName?: string;
  /**
   * @example
   * cn-beijing-a
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'cluster_id',
      clusterSpec: 'cluster_spec',
      clusterType: 'cluster_type',
      created: 'created',
      currentVersion: 'current_version',
      deletionProtection: 'deletion_protection',
      dockerVersion: 'docker_version',
      externalLoadbalancerId: 'external_loadbalancer_id',
      initVersion: 'init_version',
      maintenanceWindow: 'maintenance_window',
      masterUrl: 'master_url',
      metaData: 'meta_data',
      name: 'name',
      networkMode: 'network_mode',
      nextVersion: 'next_version',
      parameters: 'parameters',
      privateZone: 'private_zone',
      profile: 'profile',
      regionId: 'region_id',
      resourceGroupId: 'resource_group_id',
      securityGroupId: 'security_group_id',
      size: 'size',
      state: 'state',
      subnetCidr: 'subnet_cidr',
      tags: 'tags',
      updated: 'updated',
      vpcId: 'vpc_id',
      vswitchId: 'vswitch_id',
      workerRamRoleName: 'worker_ram_role_name',
      zoneId: 'zone_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterSpec: 'string',
      clusterType: 'string',
      created: 'string',
      currentVersion: 'string',
      deletionProtection: 'boolean',
      dockerVersion: 'string',
      externalLoadbalancerId: 'string',
      initVersion: 'string',
      maintenanceWindow: MaintenanceWindow,
      masterUrl: 'string',
      metaData: 'string',
      name: 'string',
      networkMode: 'string',
      nextVersion: 'string',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      privateZone: 'boolean',
      profile: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      securityGroupId: 'string',
      size: 'number',
      state: 'string',
      subnetCidr: 'string',
      tags: { 'type': 'array', 'itemType': Tag },
      updated: 'string',
      vpcId: 'string',
      vswitchId: 'string',
      workerRamRoleName: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterDetailResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeClusterDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeClusterDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterEventsRequest extends $tea.Model {
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 50. Default value: 50.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the query task.
   * 
   * @example
   * T-xascadasd*****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'page_number',
      pageSize: 'page_size',
      taskId: 'task_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterEventsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The list of events.
   */
  events?: DescribeClusterEventsResponseBodyEvents[];
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: DescribeClusterEventsResponseBodyPageInfo;
  static names(): { [key: string]: string } {
    return {
      events: 'events',
      pageInfo: 'page_info',
    };
  }

  static types(): { [key: string]: any } {
    return {
      events: { 'type': 'array', 'itemType': DescribeClusterEventsResponseBodyEvents },
      pageInfo: DescribeClusterEventsResponseBodyPageInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterEventsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeClusterEventsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeClusterEventsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterLogsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeClusterLogsResponseBody[];
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: { 'type': 'array', 'itemType': DescribeClusterLogsResponseBody },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterNodePoolDetailResponseBody extends $tea.Model {
  /**
   * @remarks
   * The auto scaling configuration of the node pool.
   */
  autoScaling?: DescribeClusterNodePoolDetailResponseBodyAutoScaling;
  /**
   * @remarks
   * The network configuration of the edge node pool. This parameter takes effect only for edge node pools.
   */
  interconnectConfig?: DescribeClusterNodePoolDetailResponseBodyInterconnectConfig;
  /**
   * @remarks
   * The network type of the edge node pool. Valid values: basic and enhanced. This parameter takes effect only for edge node pools.
   * 
   * @example
   * improved
   */
  interconnectMode?: string;
  /**
   * @remarks
   * The configuration of the cluster where the node pool is deployed.
   */
  kubernetesConfig?: DescribeClusterNodePoolDetailResponseBodyKubernetesConfig;
  /**
   * @remarks
   * The configuration of the managed node pool feature.
   */
  management?: DescribeClusterNodePoolDetailResponseBodyManagement;
  /**
   * @remarks
   * The maximum number of nodes that are supported by the edge node pool. The value of this parameter must be equal to or greater than 0. A value of 0 indicates that the number of nodes in the node pool is limited only by the quota of nodes in the cluster. In most cases, this parameter is set to a value larger than 0 for edge node pools. This parameter is set to 0 for node pools whose types are ess or default edge node pools.
   * 
   * @example
   * 10
   */
  maxNodes?: number;
  nodeConfig?: DescribeClusterNodePoolDetailResponseBodyNodeConfig;
  /**
   * @remarks
   * The configuration of the node pool.
   */
  nodepoolInfo?: DescribeClusterNodePoolDetailResponseBodyNodepoolInfo;
  /**
   * @remarks
   * The configurations of the scaling group.
   */
  scalingGroup?: DescribeClusterNodePoolDetailResponseBodyScalingGroup;
  /**
   * @remarks
   * The status details about the node pool.
   */
  status?: DescribeClusterNodePoolDetailResponseBodyStatus;
  /**
   * @remarks
   * The configuration of confidential computing.
   */
  teeConfig?: DescribeClusterNodePoolDetailResponseBodyTeeConfig;
  static names(): { [key: string]: string } {
    return {
      autoScaling: 'auto_scaling',
      interconnectConfig: 'interconnect_config',
      interconnectMode: 'interconnect_mode',
      kubernetesConfig: 'kubernetes_config',
      management: 'management',
      maxNodes: 'max_nodes',
      nodeConfig: 'node_config',
      nodepoolInfo: 'nodepool_info',
      scalingGroup: 'scaling_group',
      status: 'status',
      teeConfig: 'tee_config',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoScaling: DescribeClusterNodePoolDetailResponseBodyAutoScaling,
      interconnectConfig: DescribeClusterNodePoolDetailResponseBodyInterconnectConfig,
      interconnectMode: 'string',
      kubernetesConfig: DescribeClusterNodePoolDetailResponseBodyKubernetesConfig,
      management: DescribeClusterNodePoolDetailResponseBodyManagement,
      maxNodes: 'number',
      nodeConfig: DescribeClusterNodePoolDetailResponseBodyNodeConfig,
      nodepoolInfo: DescribeClusterNodePoolDetailResponseBodyNodepoolInfo,
      scalingGroup: DescribeClusterNodePoolDetailResponseBodyScalingGroup,
      status: DescribeClusterNodePoolDetailResponseBodyStatus,
      teeConfig: DescribeClusterNodePoolDetailResponseBodyTeeConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterNodePoolDetailResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeClusterNodePoolDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeClusterNodePoolDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterNodePoolsRequest extends $tea.Model {
  /**
   * @remarks
   * 节点池名称。
   * 
   * @example
   * nodepool-test
   */
  nodepoolName?: string;
  static names(): { [key: string]: string } {
    return {
      nodepoolName: 'NodepoolName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodepoolName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterNodePoolsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The node pools.
   */
  nodepools?: DescribeClusterNodePoolsResponseBodyNodepools[];
  static names(): { [key: string]: string } {
    return {
      nodepools: 'nodepools',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodepools: { 'type': 'array', 'itemType': DescribeClusterNodePoolsResponseBodyNodepools },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterNodePoolsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeClusterNodePoolsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeClusterNodePoolsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterNodesRequest extends $tea.Model {
  /**
   * @remarks
   * The IDs of the nodes that you want to query. Separate multiple node IDs with commas (,).
   * 
   * @example
   * "i-bp11xjhwkj8k966u****,i-bp1dmhc2bu5igkyq****"
   */
  instanceIds?: string;
  /**
   * @remarks
   * The node pool ID.
   * 
   * @example
   * np****
   */
  nodepoolId?: string;
  /**
   * @remarks
   * The page number.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The node state that you want to use to filter nodes. Valid values:
   * 
   * *   `all`: query nodes in the following four states.
   * *   `running`: query nodes in the running state.
   * *   `removing`: query nodes that are being removed.
   * *   `initial`: query nodes that are being initialized.
   * *   `failed`: query nodes that fail to be created.
   * 
   * Default value: `all`.
   * 
   * @example
   * running
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'instanceIds',
      nodepoolId: 'nodepool_id',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      state: 'state',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: 'string',
      nodepoolId: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterNodesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The details of the nodes in the cluster.
   */
  nodes?: DescribeClusterNodesResponseBodyNodes[];
  /**
   * @remarks
   * The pagination information.
   */
  page?: DescribeClusterNodesResponseBodyPage;
  static names(): { [key: string]: string } {
    return {
      nodes: 'nodes',
      page: 'page',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: { 'type': 'array', 'itemType': DescribeClusterNodesResponseBodyNodes },
      page: DescribeClusterNodesResponseBodyPage,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterNodesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeClusterNodesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeClusterNodesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterResourcesRequest extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to query the resources created by cluster components at the same time.
   */
  withAddonResources?: boolean;
  static names(): { [key: string]: string } {
    return {
      withAddonResources: 'with_addon_resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      withAddonResources: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeClusterResourcesResponseBody[];
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: { 'type': 'array', 'itemType': DescribeClusterResourcesResponseBody },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterTasksRequest extends $tea.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'page_number',
      pageSize: 'page_size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterTasksResponseBody extends $tea.Model {
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: DescribeClusterTasksResponseBodyPageInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0527ac9a-c899-4341-a21a-xxxxxxxxx
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the tasks.
   */
  tasks?: DescribeClusterTasksResponseBodyTasks[];
  static names(): { [key: string]: string } {
    return {
      pageInfo: 'page_info',
      requestId: 'requestId',
      tasks: 'tasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageInfo: DescribeClusterTasksResponseBodyPageInfo,
      requestId: 'string',
      tasks: { 'type': 'array', 'itemType': DescribeClusterTasksResponseBodyTasks },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterTasksResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeClusterTasksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeClusterTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterUserKubeconfigRequest extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to obtain the kubeconfig file that is used to connect to the cluster over the internal network. Valid values:
   * 
   * *   `true`: obtains the kubeconfig file that is used to connect to the master instance over the internal network.
   * *   `false`: obtains the kubeconfig file that is used to connect to the master instance over the Internet.
   * 
   * Default value: `false`.
   * 
   * @example
   * true
   */
  privateIpAddress?: boolean;
  /**
   * @remarks
   * The validity period of a temporary kubeconfig file. Unit: minutes. Valid values: 15 to 4320 (3 days).
   * 
   * >  If you do not specify this parameter, the system specifies a longer validity period. The validity period is returned in the `expiration` parameter.
   * 
   * @example
   * 15
   */
  temporaryDurationMinutes?: number;
  static names(): { [key: string]: string } {
    return {
      privateIpAddress: 'PrivateIpAddress',
      temporaryDurationMinutes: 'TemporaryDurationMinutes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      privateIpAddress: 'boolean',
      temporaryDurationMinutes: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterUserKubeconfigResponseBody extends $tea.Model {
  /**
   * @remarks
   * The kubeconfig file of the cluster. For more information about the content of the kubeconfig file, see [Configure cluster credentials](https://help.aliyun.com/document_detail/86494.html).
   * 
   * @example
   * apiVersion: v1****
   */
  config?: string;
  /**
   * @remarks
   * The validity period of the kubeconfig file. The value is the UTC time displayed in RFC3339 format.
   * 
   * @example
   * 2024-03-10T09:56:17Z
   */
  expiration?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'config',
      expiration: 'expiration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      expiration: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterUserKubeconfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeClusterUserKubeconfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeClusterUserKubeconfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterV2UserKubeconfigRequest extends $tea.Model {
  privateIpAddress?: boolean;
  static names(): { [key: string]: string } {
    return {
      privateIpAddress: 'PrivateIpAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      privateIpAddress: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterV2UserKubeconfigResponseBody extends $tea.Model {
  config?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'config',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterV2UserKubeconfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeClusterV2UserKubeconfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeClusterV2UserKubeconfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterVulsResponseBody extends $tea.Model {
  /**
   * @remarks
   * An array of vulnerabilities.
   */
  vulRecords?: DescribeClusterVulsResponseBodyVulRecords[];
  static names(): { [key: string]: string } {
    return {
      vulRecords: 'vul_records',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vulRecords: { 'type': 'array', 'itemType': DescribeClusterVulsResponseBodyVulRecords },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterVulsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeClusterVulsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeClusterVulsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClustersRequest extends $tea.Model {
  /**
   * @remarks
   * The cluster type.
   * 
   * @example
   * ManagedKubernetes
   */
  clusterType?: string;
  /**
   * @remarks
   * The cluster name based on which the system performs fuzzy searches among the clusters that belong to the current Alibaba Cloud account.
   * 
   * @example
   * test
   */
  name?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterType: 'clusterType',
      name: 'name',
      resourceGroupId: 'resource_group_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterType: 'string',
      name: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClustersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeClustersResponseBody[];
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: { 'type': 'array', 'itemType': DescribeClustersResponseBody },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClustersV1Request extends $tea.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * ca418e5e6fa2849d78301341700axxxxx
   */
  clusterId?: string;
  /**
   * @remarks
   * The cluster type, which is available only when the cluster type is set to `ManagedKubernetes`. Valid values:
   * 
   * *   `ack.pro.small`: ACK Pro cluster
   * *   `ack.standard`: ACK Basic cluster
   * 
   * By default, this parameter is left empty, which means that ACK clusters are not filtered by this parameter.
   * 
   * @example
   * ack.pro.small
   */
  clusterSpec?: string;
  /**
   * @remarks
   * The cluster type. Valid values:
   * 
   * *   `Kubernetes`: ACK dedicated cluster.
   * *   `ManagedKubernetes`: ACK managed cluster. ACK managed clusters include ACK Pro clusters, ACK Basic clusters, ACK Serverless Pro clusters, ACK Serverless Basic clusters, ACK Edge Pro clusters, and ACK Edge Basic clusters.
   * *   `ExternalKubernetes`: registered cluster.
   * 
   * @example
   * Kubernetes
   */
  clusterType?: string;
  /**
   * @remarks
   * The cluster name.
   * 
   * The name must be 1 to 63 characters in length, and can contain digits, letters, and hyphens (-). The name cannot start with a hyphen (-).
   * 
   * @example
   * cluster-demo
   */
  name?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 3
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The identifier of the cluster. Valid values when the cluster_type parameter is set to `ManagedKubernetes`:
   * 
   * *   `Default`: ACK managed cluster
   * *   `Serverless`: ACK Serverless cluster
   * *   `Edge`: ACK Edge cluster
   * 
   * Valid values when the cluster_type parameter is set to `Ask`:
   * 
   * `ask.v2`: ACK Serverless cluster
   * 
   * By default, this parameter is left empty. If you leave this parameter empty, ACK clusters are not filtered by identifier.
   * 
   * @example
   * Default
   */
  profile?: string;
  /**
   * @remarks
   * The region ID of the clusters. You can use this parameter to query all clusters in the specified region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'cluster_id',
      clusterSpec: 'cluster_spec',
      clusterType: 'cluster_type',
      name: 'name',
      pageNumber: 'page_number',
      pageSize: 'page_size',
      profile: 'profile',
      regionId: 'region_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterSpec: 'string',
      clusterType: 'string',
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      profile: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClustersV1ResponseBody extends $tea.Model {
  /**
   * @remarks
   * The details of the clusters.
   */
  clusters?: DescribeClustersV1ResponseBodyClusters[];
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: DescribeClustersV1ResponseBodyPageInfo;
  static names(): { [key: string]: string } {
    return {
      clusters: 'clusters',
      pageInfo: 'page_info',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusters: { 'type': 'array', 'itemType': DescribeClustersV1ResponseBodyClusters },
      pageInfo: DescribeClustersV1ResponseBodyPageInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClustersV1Response extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeClustersV1ResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeClustersV1ResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEdgeMachineActiveProcessResponseBody extends $tea.Model {
  /**
   * @remarks
   * The activation progress list.
   * 
   * @example
   * [{\"content\":\"步骤 \"颁发激活凭证\" 执行开始\",\"id\":0,\"level\":3,\"timestamp\":1625994913000},{\"content\":\"步骤 \"颁发激活凭证\" 执行成功\",\"id\":1,\"level\":3,\"timestamp\":1625994914000},{\"content\":\"步骤 \"初始化主机配置\" 执行开始\",\"id\":2,\"level\":3,\"timestamp\":1625994975000},{\"content\":\"步骤 \"初始化主机配置\" 执行成功\",\"id\":3,\"level\":3,\"timestamp\":1625994975000}]
   */
  logs?: string;
  /**
   * @remarks
   * The activation progress.
   * 
   * @example
   * 100
   */
  progress?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * b62796a8-c5a6-4d3f-beb2-7650e4309cb1
   */
  requestId?: string;
  /**
   * @remarks
   * The activation status.
   * 
   * @example
   * ACTIVATED
   */
  state?: string;
  /**
   * @remarks
   * The activation step.
   * 
   * @example
   * 步骤 \"初始化主机配置\" 执行成功
   */
  step?: string;
  static names(): { [key: string]: string } {
    return {
      logs: 'logs',
      progress: 'progress',
      requestId: 'request_id',
      state: 'state',
      step: 'step',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logs: 'string',
      progress: 'number',
      requestId: 'string',
      state: 'string',
      step: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEdgeMachineActiveProcessResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeEdgeMachineActiveProcessResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeEdgeMachineActiveProcessResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEdgeMachineModelsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The cloud-native box models.
   */
  models?: DescribeEdgeMachineModelsResponseBodyModels[];
  static names(): { [key: string]: string } {
    return {
      models: 'models',
    };
  }

  static types(): { [key: string]: any } {
    return {
      models: { 'type': 'array', 'itemType': DescribeEdgeMachineModelsResponseBodyModels },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEdgeMachineModelsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeEdgeMachineModelsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeEdgeMachineModelsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEdgeMachineTunnelConfigDetailResponseBody extends $tea.Model {
  /**
   * @remarks
   * The device name.
   * 
   * @example
   * TEST0621N0FF****
   */
  deviceName?: string;
  /**
   * @remarks
   * The model of the cloud-native box.
   * 
   * @example
   * ACK-A-S001
   */
  model?: string;
  /**
   * @remarks
   * Product Key
   * 
   * @example
   * a11rXul****
   */
  productKey?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * bfd12953-31cb-42f1-8a36-7b80ec345094
   */
  requestId?: string;
  /**
   * @remarks
   * The serial number of the cloud-native box.
   * 
   * @example
   * Q2CB5XZAFBFG****
   */
  sn?: string;
  /**
   * @remarks
   * Token
   * 
   * @example
   * abcd****
   */
  token?: string;
  /**
   * @remarks
   * The tunnel endpoint.
   * 
   * @example
   * wss://frontend-iotx-r-debug.aliyun-inc.test
   */
  tunnelEndpoint?: string;
  static names(): { [key: string]: string } {
    return {
      deviceName: 'device_name',
      model: 'model',
      productKey: 'product_key',
      requestId: 'request_id',
      sn: 'sn',
      token: 'token',
      tunnelEndpoint: 'tunnel_endpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceName: 'string',
      model: 'string',
      productKey: 'string',
      requestId: 'string',
      sn: 'string',
      token: 'string',
      tunnelEndpoint: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEdgeMachineTunnelConfigDetailResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeEdgeMachineTunnelConfigDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeEdgeMachineTunnelConfigDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEdgeMachinesRequest extends $tea.Model {
  /**
   * @remarks
   * The `hostname` of the cloud-native box.
   * 
   * @example
   * ack-v-b010-ssdfw****
   */
  hostname?: string;
  /**
   * @remarks
   * The lifecycle status.
   * 
   * @example
   * activated/waitOnline/deleting
   */
  lifeState?: string;
  /**
   * @remarks
   * The type of cloud-native box.
   * 
   * @example
   * ACK-V-B010
   */
  model?: string;
  /**
   * @remarks
   * The status of the cloud-native box. Valid values:
   * 
   * *   `offline`
   * *   `online`
   * 
   * @example
   * offline/online
   */
  onlineState?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      hostname: 'hostname',
      lifeState: 'life_state',
      model: 'model',
      onlineState: 'online_state',
      pageNumber: 'page_number',
      pageSize: 'page_size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostname: 'string',
      lifeState: 'string',
      model: 'string',
      onlineState: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEdgeMachinesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The list of cloud-native boxes.
   */
  edgeMachines?: DescribeEdgeMachinesResponseBodyEdgeMachines[];
  /**
   * @remarks
   * The paging information.
   */
  pageInfo?: DescribeEdgeMachinesResponseBodyPageInfo;
  static names(): { [key: string]: string } {
    return {
      edgeMachines: 'edge_machines',
      pageInfo: 'page_info',
    };
  }

  static types(): { [key: string]: any } {
    return {
      edgeMachines: { 'type': 'array', 'itemType': DescribeEdgeMachinesResponseBodyEdgeMachines },
      pageInfo: DescribeEdgeMachinesResponseBodyPageInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEdgeMachinesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeEdgeMachinesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeEdgeMachinesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventsRequest extends $tea.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * cf62854ac2130470897be7a27ed1f****
   */
  clusterId?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The event type. Valid values:
   * 
   * *   `cluster_create`: cluster creation.
   * *   `cluster_scaleout`: cluster scale-out.
   * *   `cluster_attach`: node addition.
   * *   `cluster_delete`: cluster deletion.
   * *   `cluster_upgrade`: cluster upgrades.
   * *   `cluster_migrate`: cluster migration.
   * *   `cluster_node_delete`: node removal.
   * *   `cluster_node_drain`: node draining.
   * *   `cluster_modify`: cluster modifications.
   * *   `cluster_configuration_modify`: modifications of control plane configurations.
   * *   `cluster_addon_install`: component installation.
   * *   `cluster_addon_upgrade`: component updates.
   * *   `cluster_addon_uninstall`: component uninstallation.
   * *   `runtime_upgrade`: runtime updates.
   * *   `nodepool_upgrade`: node pool upgrades.
   * *   `nodepool_update`: node pool updates.
   * 
   * @example
   * nodepool_upgrade
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'cluster_id',
      pageNumber: 'page_number',
      pageSize: 'page_size',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The details of the event.
   */
  events?: DescribeEventsResponseBodyEvents[];
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: DescribeEventsResponseBodyPageInfo;
  static names(): { [key: string]: string } {
    return {
      events: 'events',
      pageInfo: 'page_info',
    };
  }

  static types(): { [key: string]: any } {
    return {
      events: { 'type': 'array', 'itemType': DescribeEventsResponseBodyEvents },
      pageInfo: DescribeEventsResponseBodyPageInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeEventsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeEventsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExternalAgentRequest extends $tea.Model {
  /**
   * @remarks
   * The permission mode of the agent. Valid values:
   * 
   * admin: the admin mode, which provides full permissions. restricted: the restricted mode, which provides partial permissions. Default value: admin.
   * 
   * @example
   * admin
   */
  agentMode?: string;
  /**
   * @remarks
   * Specifies whether to obtain the credentials that are used to access the cluster over the internal network.
   * 
   * *   `true`: obtains the credentials that are used to access the cluster over the internal network.
   * *   `false`: obtains the credentials that are used to access the cluster over the Internet.
   * 
   * Default value: `false`.
   * 
   * @example
   * true
   */
  privateIpAddress?: string;
  static names(): { [key: string]: string } {
    return {
      agentMode: 'AgentMode',
      privateIpAddress: 'PrivateIpAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentMode: 'string',
      privateIpAddress: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExternalAgentResponseBody extends $tea.Model {
  /**
   * @remarks
   * The agent configurations in the YAML format.
   * 
   * @example
   * apiVersion: v1****
   */
  config?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'config',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExternalAgentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeExternalAgentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeExternalAgentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeKubernetesVersionMetadataRequest extends $tea.Model {
  /**
   * @remarks
   * The cluster type that you want to use. Valid values:
   * 
   * *   `Kubernetes`: ACK dedicated cluster.
   * *   `ManagedKubernetes`: ACK managed cluster. ACK managed clusters include ACK Pro clusters, ACK Basic clusters, ACK Serverless Pro clusters, ACK Serverless Basic clusters, ACK Edge Pro clusters, and ACK Edge Basic clusters.
   * *   `ExternalKubernetes`: registered cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * Kubernetes
   */
  clusterType?: string;
  /**
   * @remarks
   * The Kubernetes version of the cluster. The Kubernetes versions supported by ACK are the same as the Kubernetes versions supported by open source Kubernetes. We recommend that you specify the latest Kubernetes version. If you do not set this parameter, the latest Kubernetes version is used.
   * 
   * You can create ACK clusters of the latest two Kubernetes versions in the ACK console. You can call the specific ACK API operation to create clusters of other Kubernetes versions. For more information about the Kubernetes versions supported by ACK, see [Release notes for Kubernetes versions](https://help.aliyun.com/document_detail/185269.html).
   * 
   * @example
   * 1.16.9-aliyun.1
   */
  kubernetesVersion?: string;
  /**
   * @remarks
   * The query mode. Valid values:
   * 
   * *   `supported`: queries all supported versions.
   * *   `creatable`: queries only versions that allow you to create clusters.
   * 
   * If you specify `KubernetesVersion`, this parameter does not take effect.
   * 
   * Default value: creatable.
   * 
   * @example
   * supported
   */
  mode?: string;
  /**
   * @remarks
   * The scenario where clusters are used. Valid values:
   * 
   * *   `Default`: non-edge computing scenarios
   * *   `Edge`: edge computing scenarios
   * *   `Serverless`: serverless scenarios.
   * 
   * Default value: `Default`.
   * 
   * @example
   * Default
   */
  profile?: string;
  queryUpgradableVersion?: boolean;
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  region?: string;
  /**
   * @remarks
   * The container runtime type that you want to use. You can specify a runtime type to query only OS images that support the runtime type. Valid values:
   * 
   * *   `docker`: Docker
   * *   `containerd`: containerd
   * *   `Sandboxed-Container.runv`: Sandboxed-Container
   * 
   * If you specify a runtime type, only the OS images that support the specified runtime type are returned.
   * 
   * Otherwise, all OS images are returned.
   * 
   * @example
   * docker
   */
  runtime?: string;
  static names(): { [key: string]: string } {
    return {
      clusterType: 'ClusterType',
      kubernetesVersion: 'KubernetesVersion',
      mode: 'Mode',
      profile: 'Profile',
      queryUpgradableVersion: 'QueryUpgradableVersion',
      region: 'Region',
      runtime: 'runtime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterType: 'string',
      kubernetesVersion: 'string',
      mode: 'string',
      profile: 'string',
      queryUpgradableVersion: 'boolean',
      region: 'string',
      runtime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeKubernetesVersionMetadataResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeKubernetesVersionMetadataResponseBody[];
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: { 'type': 'array', 'itemType': DescribeKubernetesVersionMetadataResponseBody },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNodePoolVulsRequest extends $tea.Model {
  /**
   * @remarks
   * The priority to fix the vulnerability. Separate multiple priorities with commas (,). Valid values:
   * 
   * *   `asap`: high
   * *   `later`: medium
   * *   `nntf`: low
   * 
   * @example
   * asap
   */
  necessity?: string;
  static names(): { [key: string]: string } {
    return {
      necessity: 'necessity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      necessity: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNodePoolVulsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The node pool vulnerabilities.
   */
  vulRecords?: DescribeNodePoolVulsResponseBodyVulRecords[];
  /**
   * @example
   * false
   */
  vulsFixServicePurchased?: boolean;
  static names(): { [key: string]: string } {
    return {
      vulRecords: 'vul_records',
      vulsFixServicePurchased: 'vuls_fix_service_purchased',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vulRecords: { 'type': 'array', 'itemType': DescribeNodePoolVulsResponseBodyVulRecords },
      vulsFixServicePurchased: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNodePoolVulsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeNodePoolVulsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeNodePoolVulsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePoliciesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: {[key: string]: any};
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyDetailsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The action of the policy. Valid values:
   * 
   * *   `enforce`: blocks deployments that match the policy.
   * *   `inform`: generates alerts for deployments that match the policy.
   * 
   * @example
   * enforce
   */
  action?: string;
  /**
   * @remarks
   * The type of the policy.
   * 
   * @example
   * k8s-general
   */
  category?: string;
  /**
   * @remarks
   * The description of the policy.
   * 
   * @example
   * Requires container images to begin with a repo string from a specified list
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the policy is deleted. Valid values:
   * 
   * *   0: The policy is not deleted.
   * *   1: The policy is deleted.
   * 
   * @example
   * 0
   */
  isDeleted?: number;
  /**
   * @remarks
   * The name of the policy.
   * 
   * @example
   * ACKAllowedRepos
   */
  name?: string;
  /**
   * @remarks
   * Indicates whether parameters are required. Valid values:
   * 
   * *   0: Parameters are required.
   * *   1: Parameters are optional.
   * 
   * @example
   * 0
   */
  noConfig?: number;
  /**
   * @remarks
   * The severity level of the policy. Valid values:
   * 
   * *   `high`
   * *   `medium`
   * *   `low`
   * 
   * @example
   * high
   */
  severity?: string;
  /**
   * @remarks
   * The content of the policy.
   * 
   * @example
   * For more information, see sample requests.
   */
  template?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'action',
      category: 'category',
      description: 'description',
      isDeleted: 'is_deleted',
      name: 'name',
      noConfig: 'no_config',
      severity: 'severity',
      template: 'template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      category: 'string',
      description: 'string',
      isDeleted: 'number',
      name: 'string',
      noConfig: 'number',
      severity: 'string',
      template: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyDetailsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribePolicyDetailsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribePolicyDetailsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyGovernanceInClusterResponseBody extends $tea.Model {
  /**
   * @remarks
   * The audit logs of the policies in the cluster.
   */
  admitLog?: DescribePolicyGovernanceInClusterResponseBodyAdmitLog;
  /**
   * @remarks
   * Details about the policies of different severity levels that are enabled for the cluster.
   */
  onState?: DescribePolicyGovernanceInClusterResponseBodyOnState[];
  /**
   * @remarks
   * Details about the blocking and alerting events that are triggered by policies of different severity levels.
   */
  totalViolations?: DescribePolicyGovernanceInClusterResponseBodyTotalViolations;
  /**
   * @remarks
   * Details about the blocking and alerting events that are triggered by different policies.
   */
  violations?: DescribePolicyGovernanceInClusterResponseBodyViolations;
  static names(): { [key: string]: string } {
    return {
      admitLog: 'admit_log',
      onState: 'on_state',
      totalViolations: 'totalViolations',
      violations: 'violations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      admitLog: DescribePolicyGovernanceInClusterResponseBodyAdmitLog,
      onState: { 'type': 'array', 'itemType': DescribePolicyGovernanceInClusterResponseBodyOnState },
      totalViolations: DescribePolicyGovernanceInClusterResponseBodyTotalViolations,
      violations: DescribePolicyGovernanceInClusterResponseBodyViolations,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyGovernanceInClusterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribePolicyGovernanceInClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribePolicyGovernanceInClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyInstancesRequest extends $tea.Model {
  /**
   * @remarks
   * The name of the policy instance that you want to query.
   * 
   * @example
   * allowed-repos-cz4s2
   */
  instanceName?: string;
  /**
   * @remarks
   * The name of the policy that you want to query.
   * 
   * @example
   * ACKPSPCapabilities
   */
  policyName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceName: 'instance_name',
      policyName: 'policy_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceName: 'string',
      policyName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyInstancesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribePolicyInstancesResponseBody[];
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: { 'type': 'array', 'itemType': DescribePolicyInstancesResponseBody },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyInstancesStatusResponseBody extends $tea.Model {
  /**
   * @remarks
   * Information about the number of policy instances of each severity level.
   * 
   * @example
   * { "high": 11,     "medium": 1  }
   */
  instancesSeverityCount?: { [key: string]: any };
  /**
   * @remarks
   * Details about policy instances of different types.
   */
  policyInstances?: DescribePolicyInstancesStatusResponseBodyPolicyInstances[];
  static names(): { [key: string]: string } {
    return {
      instancesSeverityCount: 'instances_severity_count',
      policyInstances: 'policy_instances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instancesSeverityCount: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      policyInstances: { 'type': 'array', 'itemType': DescribePolicyInstancesStatusResponseBodyPolicyInstances },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyInstancesStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribePolicyInstancesStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribePolicyInstancesStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourcesDeleteProtectionRequest extends $tea.Model {
  /**
   * @remarks
   * The namespace to which the resource belongs.
   * 
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * The name of the resource that you want to query. Separate multiple resource names with commas (,).
   * 
   * @example
   * test1,test2
   */
  resources?: string;
  static names(): { [key: string]: string } {
    return {
      namespace: 'namespace',
      resources: 'resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespace: 'string',
      resources: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourcesDeleteProtectionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeResourcesDeleteProtectionResponseBody[];
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: { 'type': 'array', 'itemType': DescribeResourcesDeleteProtectionResponseBody },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSubaccountK8sClusterUserConfigRequest extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to obtain the kubeconfig file used to connect to the cluster over the internal network. Valid values:
   * 
   * *   `true`: Obtain the kubeconfig file used to connect to the cluster over the internal network.
   * *   `false`: Obtain the kubeconfig file used to connect to the cluster over the Internet.
   * 
   * Default value: `false`.
   * 
   * @example
   * true
   */
  privateIpAddress?: boolean;
  /**
   * @remarks
   * The validity period of the temporary kubeconfig file. Unit: minutes.
   * 
   * Valid values: 15 to 4320 (three days).
   * 
   * > If you leave this parameter empty, the system sets a longer validity period and returns the value in the expiration parameter of the response.
   * 
   * @example
   * 15
   */
  temporaryDurationMinutes?: number;
  static names(): { [key: string]: string } {
    return {
      privateIpAddress: 'PrivateIpAddress',
      temporaryDurationMinutes: 'TemporaryDurationMinutes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      privateIpAddress: 'boolean',
      temporaryDurationMinutes: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSubaccountK8sClusterUserConfigResponseBody extends $tea.Model {
  /**
   * @remarks
   * The cluster kubeconfig file. For more information about the content of the kubeconfig file, see [Configure cluster credentials](https://help.aliyun.com/document_detail/86494.html).
   * 
   * This parameter is required.
   * 
   * @example
   * apiVersion: v1****
   */
  config?: string;
  /**
   * @remarks
   * The expiration date of the kubeconfig file. The value is the UTC time displayed in RFC3339 format.
   * 
   * @example
   * 2024-03-10T09:56:17Z
   */
  expiration?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'config',
      expiration: 'expiration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      expiration: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSubaccountK8sClusterUserConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSubaccountK8sClusterUserConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeSubaccountK8sClusterUserConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTaskInfoResponseBody extends $tea.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * c78592bfe92244365b3c3ad47f1de****
   */
  clusterId?: string;
  /**
   * @remarks
   * The time when the task was created.
   * 
   * @example
   * 2020-11-10T16:02:04+08:00
   */
  created?: string;
  /**
   * @remarks
   * The current stage of the task.
   * 
   * @example
   * DrainNodes
   */
  currentStage?: string;
  /**
   * @remarks
   * The error returned for the task.
   */
  error?: DescribeTaskInfoResponseBodyError;
  /**
   * @remarks
   * The event generated by the task.
   */
  events?: DescribeTaskInfoResponseBodyEvents[];
  /**
   * @remarks
   * The task parameters.
   */
  parameters?: { [key: string]: any };
  /**
   * @remarks
   * Detailed information about the stage of the task.
   */
  stages?: DescribeTaskInfoResponseBodyStages[];
  /**
   * @remarks
   * The status of the task. Valid values:
   * 
   * *   `running`: The task is running.
   * *   `failed`: The task failed.
   * *   `success`: The task is complete.
   * 
   * @example
   * running
   */
  state?: string;
  /**
   * @remarks
   * The object of the task.
   */
  target?: DescribeTaskInfoResponseBodyTarget;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * T-5faa48fb31b6b8078d000006
   */
  taskId?: string;
  /**
   * @remarks
   * The execution details of the task.
   */
  taskResult?: DescribeTaskInfoResponseBodyTaskResult[];
  /**
   * @remarks
   * The task type. A value of `cluster_scaleout` indicates a scale-out task.
   * 
   * @example
   * cluster_scaleout
   */
  taskType?: string;
  /**
   * @remarks
   * The time when the task was updated.
   * 
   * @example
   * 2020-11-10T16:03:06+08:00
   */
  updated?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'cluster_id',
      created: 'created',
      currentStage: 'current_stage',
      error: 'error',
      events: 'events',
      parameters: 'parameters',
      stages: 'stages',
      state: 'state',
      target: 'target',
      taskId: 'task_id',
      taskResult: 'task_result',
      taskType: 'task_type',
      updated: 'updated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      created: 'string',
      currentStage: 'string',
      error: DescribeTaskInfoResponseBodyError,
      events: { 'type': 'array', 'itemType': DescribeTaskInfoResponseBodyEvents },
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      stages: { 'type': 'array', 'itemType': DescribeTaskInfoResponseBodyStages },
      state: 'string',
      target: DescribeTaskInfoResponseBodyTarget,
      taskId: 'string',
      taskResult: { 'type': 'array', 'itemType': DescribeTaskInfoResponseBodyTaskResult },
      taskType: 'string',
      updated: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTaskInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeTaskInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeTaskInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTemplateAttributeRequest extends $tea.Model {
  /**
   * @remarks
   * The type of template. The value can be a custom value.
   * 
   * *   If the parameter is set to `kubernetes`, the template is displayed on the Templates page in the console.
   * *   If the parameter is set to `compose`, the template is displayed on the Container Service - Swarm page in the console. Container Service for Swarm is deprecated.
   * *   If the value of the parameter is not `kubernetes`, the template is not displayed on the Templates page in the console. We recommend that you set the parameter to `kubernetes`.
   * 
   * Default value: `kubernetes`.
   * 
   * @example
   * kubernetes
   */
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      templateType: 'template_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTemplateAttributeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeTemplateAttributeResponseBody[];
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: { 'type': 'array', 'itemType': DescribeTemplateAttributeResponseBody },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTemplatesRequest extends $tea.Model {
  /**
   * @remarks
   * The page number.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The type of template. This parameter can be set to a custom value.
   * 
   * *   If the parameter is set to `kubernetes`, the template is displayed on the Templates page in the console.
   * *   If you set the parameter to `compose`, the template is not displayed on the Templates page in the console.
   * 
   * Default value: `kubernetes`.
   * 
   * @example
   * kubernetes
   */
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'page_num',
      pageSize: 'page_size',
      templateType: 'template_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      templateType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTemplatesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: DescribeTemplatesResponseBodyPageInfo;
  /**
   * @remarks
   * The list of returned templates.
   */
  templates?: DescribeTemplatesResponseBodyTemplates[];
  static names(): { [key: string]: string } {
    return {
      pageInfo: 'page_info',
      templates: 'templates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageInfo: DescribeTemplatesResponseBodyPageInfo,
      templates: { 'type': 'array', 'itemType': DescribeTemplatesResponseBodyTemplates },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTemplatesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeTemplatesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeTemplatesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTriggerRequest extends $tea.Model {
  /**
   * @remarks
   * The application name.
   * 
   * This parameter is required.
   * 
   * @example
   * web-server
   */
  name?: string;
  /**
   * @remarks
   * The namespace to which the application belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * The type of trigger. Valid values:
   * 
   * *   `deployment`: performs actions on Deployments.
   * *   `application`: performs actions on applications that are deployed in Application Center.
   * 
   * Default value: `deployment`.
   * 
   * If you do not set this parameter, triggers are not filtered by type.
   * 
   * @example
   * deployment
   */
  type?: string;
  /**
   * @remarks
   * The action that the trigger performs. Set the value to redeploy.
   * 
   * `redeploy`: redeploys the resources specified by `project_id`.
   * 
   * If you do not specify this parameter, triggers are not filtered by action.
   * 
   * @example
   * redeploy
   */
  action?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      namespace: 'Namespace',
      type: 'Type',
      action: 'action',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      namespace: 'string',
      type: 'string',
      action: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTriggerResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeTriggerResponseBody[];
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: { 'type': 'array', 'itemType': DescribeTriggerResponseBody },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserClusterNamespacesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: string[];
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserPermissionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeUserPermissionResponseBody[];
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: { 'type': 'array', 'itemType': DescribeUserPermissionResponseBody },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserQuotaResponseBody extends $tea.Model {
  /**
   * @remarks
   * The quota of Container Service for Kubernetes (ACK) managed clusters. Default value: 20. If the default quota limit is reached, submit an application in the [Quota Center console](https://quotas.console.aliyun.com/products/csk/quotas) to increase the quota.
   * 
   * @example
   * 20
   */
  amkClusterQuota?: number;
  /**
   * @remarks
   * The quota of ACK Serverless clusters. Default value: 20. If the default quota limit is reached, submit an application in the [Quota Center console](https://quotas.console.aliyun.com/products/csk/quotas) to increase the quota.
   * 
   * @example
   * 3
   */
  askClusterQuota?: number;
  /**
   * @remarks
   * The quota of node pools in an ACK cluster. Default value: 20. If the default quota limit is reached, submit an application in the [Quota Center console](https://quotas.console.aliyun.com/products/csk/quotas) to increase the quota.
   * 
   * @example
   * 10
   */
  clusterNodepoolQuota?: number;
  /**
   * @remarks
   * The quota of clusters that belong to an Alibaba Cloud account. Default value: 50. If the default quota limit is reached, submit an application in the [Quota Center console](https://quotas.console.aliyun.com/products/csk/quotas) to increase the quota.
   * 
   * @example
   * 50
   */
  clusterQuota?: number;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * The quota of enhanced edge node pools.
   */
  edgeImprovedNodepoolQuota?: DescribeUserQuotaResponseBodyEdgeImprovedNodepoolQuota;
  /**
   * @remarks
   * The quota of nodes in an ACK cluster. Default value: 100. If the default quota limit is reached, submit an application in the [Quota Center console](https://quotas.console.aliyun.com/products/csk/quotas) to increase the quota.
   * 
   * @example
   * 100
   */
  nodeQuota?: number;
  /**
   * @remarks
   * Information about the new quota.
   */
  quotas?: { [key: string]: QuotasValue };
  static names(): { [key: string]: string } {
    return {
      amkClusterQuota: 'amk_cluster_quota',
      askClusterQuota: 'ask_cluster_quota',
      clusterNodepoolQuota: 'cluster_nodepool_quota',
      clusterQuota: 'cluster_quota',
      edgeImprovedNodepoolQuota: 'edge_improved_nodepool_quota',
      nodeQuota: 'node_quota',
      quotas: 'quotas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amkClusterQuota: 'number',
      askClusterQuota: 'number',
      clusterNodepoolQuota: 'number',
      clusterQuota: 'number',
      edgeImprovedNodepoolQuota: DescribeUserQuotaResponseBodyEdgeImprovedNodepoolQuota,
      nodeQuota: 'number',
      quotas: { 'type': 'map', 'keyType': 'string', 'valueType': QuotasValue },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserQuotaResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeUserQuotaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeUserQuotaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWorkflowsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The list of jobs.
   */
  jobs?: DescribeWorkflowsResponseBodyJobs[];
  static names(): { [key: string]: string } {
    return {
      jobs: 'jobs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobs: { 'type': 'array', 'itemType': DescribeWorkflowsResponseBodyJobs },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWorkflowsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeWorkflowsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeWorkflowsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EdgeClusterAddEdgeMachineRequest extends $tea.Model {
  /**
   * @remarks
   * The timeout period of sessions. Unit: seconds.
   * 
   * @example
   * 1024
   */
  expired?: number;
  /**
   * @remarks
   * The node pool ID.
   * 
   * This parameter is required.
   * 
   * @example
   * c26607f52179f4472a0d9723e7595****
   */
  nodepoolId?: string;
  /**
   * @remarks
   * The options that you want to configure.
   * 
   * @example
   * "{\\"enableIptables\\":true,\\"quiet\\":true,\\"manageRuntime\\":true,\\"allowedClusterAddons\\":[\\"kube-proxy\\",\\"flannel\\",\\"coredns\\"]}"
   */
  options?: string;
  static names(): { [key: string]: string } {
    return {
      expired: 'expired',
      nodepoolId: 'nodepool_id',
      options: 'options',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expired: 'number',
      nodepoolId: 'string',
      options: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EdgeClusterAddEdgeMachineResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the cloud-native box.
   * 
   * @example
   * 0f4bf70a-caff-4b26-a679-fb0188a1****
   */
  edgeMachineId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0adf3a23-6841-41e8-9f55-7b290216c980
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      edgeMachineId: 'edge_machine_id',
      requestId: 'request_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      edgeMachineId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EdgeClusterAddEdgeMachineResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EdgeClusterAddEdgeMachineResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: EdgeClusterAddEdgeMachineResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FixNodePoolVulsRequest extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to allow the nodes to restart.
   * 
   * @example
   * true
   */
  autoRestart?: boolean;
  /**
   * @remarks
   * The names of the nodes to be patched.
   */
  nodes?: string[];
  /**
   * @remarks
   * The batch patching policy.
   */
  rolloutPolicy?: FixNodePoolVulsRequestRolloutPolicy;
  /**
   * @remarks
   * The list of vulnerabilities.
   */
  vuls?: string[];
  static names(): { [key: string]: string } {
    return {
      autoRestart: 'auto_restart',
      nodes: 'nodes',
      rolloutPolicy: 'rollout_policy',
      vuls: 'vuls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRestart: 'boolean',
      nodes: { 'type': 'array', 'itemType': 'string' },
      rolloutPolicy: FixNodePoolVulsRequestRolloutPolicy,
      vuls: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FixNodePoolVulsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the CVE patching task.
   * 
   * @example
   * T-60fea8ad2e277f087900****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'task_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FixNodePoolVulsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: FixNodePoolVulsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: FixNodePoolVulsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterAddonInstanceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The custom configurations of the component.
   * 
   * @example
   * {"sls_project_name":""}
   */
  config?: string;
  /**
   * @remarks
   * The status of Simple Log Service.
   */
  logging?: GetClusterAddonInstanceResponseBodyLogging;
  /**
   * @remarks
   * The name of the component instance.
   * 
   * @example
   * ack-node-problem-detector
   */
  name?: string;
  /**
   * @remarks
   * The status of the component. Valid values:
   * 
   * *   active: The component is installed.
   * *   updating: The component is being modified.
   * *   upgrading: The component is being updated.
   * *   deleting: The component is being uninstalled.
   * 
   * @example
   * active
   */
  state?: string;
  /**
   * @remarks
   * The version of the component instance.
   * 
   * @example
   * 1.2.16
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'config',
      logging: 'logging',
      name: 'name',
      state: 'state',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      logging: GetClusterAddonInstanceResponseBodyLogging,
      name: 'string',
      state: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterAddonInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetClusterAddonInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetClusterAddonInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterAuditProjectResponseBody extends $tea.Model {
  auditEnabled?: boolean;
  /**
   * @example
   * k8s-log-cad1230511cbb4db4a488e58518******
   */
  slsProjectName?: string;
  static names(): { [key: string]: string } {
    return {
      auditEnabled: 'audit_enabled',
      slsProjectName: 'sls_project_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditEnabled: 'boolean',
      slsProjectName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterAuditProjectResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetClusterAuditProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetClusterAuditProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterCheckResponseBody extends $tea.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 1697100584236600453-ce0da5a1d627e4e9e9f96cae8ad07****-clustercheck-lboto
   */
  checkId?: string;
  /**
   * @remarks
   * The list of check items.
   */
  checkItems?: { [key: string]: {[key: string ]: any}[] };
  /**
   * @remarks
   * The time when the cluster check task was created.
   * 
   * @example
   * 2023-10-16T08:31:20.292030178Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The time when the cluster check task was completed.
   * 
   * @example
   * 2023-10-16T08:35:20.292030178Z
   */
  finishedAt?: string;
  /**
   * @remarks
   * The message that indicates the status of the cluster check task.
   * 
   * @example
   * task succeed
   */
  message?: string;
  /**
   * @remarks
   * The status of the cluster check.
   * 
   * @example
   * Succeeded
   */
  status?: string;
  /**
   * @remarks
   * The check method.
   * 
   * @example
   * ClusterUpgrade
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      checkId: 'check_id',
      checkItems: 'check_items',
      createdAt: 'created_at',
      finishedAt: 'finished_at',
      message: 'message',
      status: 'status',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkId: 'string',
      checkItems: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } } },
      createdAt: 'string',
      finishedAt: 'string',
      message: 'string',
      status: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterCheckResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetClusterCheckResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetClusterCheckResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterDiagnosisCheckItemsResponseBody extends $tea.Model {
  checkItems?: GetClusterDiagnosisCheckItemsResponseBodyCheckItems[];
  /**
   * @example
   * success
   */
  code?: string;
  /**
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @example
   * 1DFFD8C6-259E-582B-8B40-002C17DC****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      checkItems: 'check_items',
      code: 'code',
      isSuccess: 'is_success',
      requestId: 'request_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkItems: { 'type': 'array', 'itemType': GetClusterDiagnosisCheckItemsResponseBodyCheckItems },
      code: 'string',
      isSuccess: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterDiagnosisCheckItemsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetClusterDiagnosisCheckItemsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetClusterDiagnosisCheckItemsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterDiagnosisResultResponseBody extends $tea.Model {
  /**
   * @example
   * 0
   */
  code?: number;
  /**
   * @example
   * 2024-05-28T11:29Z
   */
  created?: string;
  /**
   * @example
   * 6cf6b62e334e4583bdfd26707516****
   */
  diagnosisId?: string;
  /**
   * @example
   * 2024-05-28T11:29Z
   */
  finished?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * {"phase":5,"version":"20240101"}
   */
  result?: string;
  /**
   * @example
   * 2
   */
  status?: number;
  /**
   * @example
   * {"name":"cn-hongkong.10.0.0.246"}
   */
  target?: string;
  /**
   * @example
   * Node
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      created: 'created',
      diagnosisId: 'diagnosis_id',
      finished: 'finished',
      message: 'message',
      result: 'result',
      status: 'status',
      target: 'target',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      created: 'string',
      diagnosisId: 'string',
      finished: 'string',
      message: 'string',
      result: 'string',
      status: 'number',
      target: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterDiagnosisResultResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetClusterDiagnosisResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetClusterDiagnosisResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetKubernetesTriggerRequest extends $tea.Model {
  /**
   * @remarks
   * The application name.
   * 
   * This parameter is required.
   * 
   * @example
   * web-server
   */
  name?: string;
  /**
   * @remarks
   * The namespace name.
   * 
   * This parameter is required.
   * 
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * The type of trigger. Valid values:
   * 
   * *   `deployment`: performs actions on Deployments.
   * *   `application`: performs actions on applications that are deployed in Application Center.
   * 
   * Default value: `deployment`.
   * 
   * If you do not set this parameter, triggers are not filtered by type.
   * 
   * @example
   * deployment
   */
  type?: string;
  /**
   * @remarks
   * The action that the trigger performs. Set the value to redeploy.
   * 
   * `redeploy`: redeploys the resources specified by `project_id`.
   * 
   * If you do not specify this parameter, triggers are not filtered by action.
   * 
   * @example
   * redeploy
   */
  action?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      namespace: 'Namespace',
      type: 'Type',
      action: 'action',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      namespace: 'string',
      type: 'string',
      action: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetKubernetesTriggerResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetKubernetesTriggerResponseBody[];
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: { 'type': 'array', 'itemType': GetKubernetesTriggerResponseBody },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUpgradeStatusResponseBody extends $tea.Model {
  /**
   * @remarks
   * The error message returned during the update.
   * 
   * @example
   * subject to actual return
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the precheck report.
   * 
   * @example
   * be4c8eb72de94d459ea7ace7c811d119
   */
  precheckReportId?: string;
  /**
   * @remarks
   * The status of the update. Valid values:
   * 
   * *   `success`: The update is successful.
   * *   `fail`: The update failed.
   * *   `pause`: The update is paused.
   * *   `running`: The update is in progress.
   * 
   * @example
   * running
   */
  status?: string;
  /**
   * @remarks
   * The current phase of the update. Valid values:
   * 
   * *   `not_start`: The update is not started.
   * *   `prechecking`: The precheck is in progress.
   * *   `upgrading`: The cluster is being updated.
   * *   `pause`: The update is paused.
   * *   `success`: The update is successful.
   * 
   * @example
   * prechecking
   */
  upgradeStep?: string;
  /**
   * @remarks
   * The details of the update task.
   */
  upgradeTask?: GetUpgradeStatusResponseBodyUpgradeTask;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'error_message',
      precheckReportId: 'precheck_report_id',
      status: 'status',
      upgradeStep: 'upgrade_step',
      upgradeTask: 'upgrade_task',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      precheckReportId: 'string',
      status: 'string',
      upgradeStep: 'string',
      upgradeTask: GetUpgradeStatusResponseBodyUpgradeTask,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUpgradeStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetUpgradeStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetUpgradeStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GrantPermissionsRequest extends $tea.Model {
  /**
   * @remarks
   * The request parameters.
   */
  body?: GrantPermissionsRequestBody[];
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: { 'type': 'array', 'itemType': GrantPermissionsRequestBody },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GrantPermissionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallClusterAddonsRequest extends $tea.Model {
  /**
   * @remarks
   * The request body.
   * 
   * @example
   * ags-metrics-collector
   */
  body?: InstallClusterAddonsRequestBody[];
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: { 'type': 'array', 'itemType': InstallClusterAddonsRequestBody },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallClusterAddonsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAddonsRequest extends $tea.Model {
  /**
   * @remarks
   * The cluster ID. If you specify a cluster ID, only components used in the specified cluster are queried. Other parameters are ignored.
   * 
   * @example
   * c02b3e03be10643e8a644a843ffcb****
   */
  clusterId?: string;
  /**
   * @remarks
   * The specifications of the cluster. If cluster_id is specified, this parameter is ignored. You must specify the region_id, cluster_type, profile, cluster_spec, and cluster_version parameters at the same time.
   * 
   * @example
   * ack.pro.small
   */
  clusterSpec?: string;
  /**
   * @remarks
   * The type of the cluster. If cluster_id is specified, this parameter is ignored. You must specify the region_id, cluster_type, profile, cluster_spec, and cluster_version parameters at the same time.
   * 
   * @example
   * ManagedKubernetes
   */
  clusterType?: string;
  /**
   * @remarks
   * The version of the cluster. If cluster_id is specified, this parameter is ignored. You must specify the region_id, cluster_type, profile, cluster_spec, and cluster_version parameters at the same time.
   * 
   * @example
   * 1.26.3-aliyun.1
   */
  clusterVersion?: string;
  /**
   * @remarks
   * The subtype of the cluster. If cluster_id is specified, this parameter is ignored. You must specify the region_id, cluster_type, profile, cluster_spec, and cluster_version parameters at the same time.
   * 
   * @example
   * Default
   */
  profile?: string;
  /**
   * @remarks
   * The region of the cluster. If cluster_id is specified, this parameter is ignored. You must specify the region_id, cluster_type, profile, cluster_spec, and cluster_version parameters at the same time.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'cluster_id',
      clusterSpec: 'cluster_spec',
      clusterType: 'cluster_type',
      clusterVersion: 'cluster_version',
      profile: 'profile',
      regionId: 'region_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterSpec: 'string',
      clusterType: 'string',
      clusterVersion: 'string',
      profile: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAddonsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The list of available components.
   */
  addons?: ListAddonsResponseBodyAddons[];
  static names(): { [key: string]: string } {
    return {
      addons: 'addons',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addons: { 'type': 'array', 'itemType': ListAddonsResponseBodyAddons },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAddonsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAddonsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListAddonsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterAddonInstancesResponseBody extends $tea.Model {
  /**
   * @remarks
   * A list of components that are installed in the cluster.
   */
  addons?: ListClusterAddonInstancesResponseBodyAddons[];
  static names(): { [key: string]: string } {
    return {
      addons: 'addons',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addons: { 'type': 'array', 'itemType': ListClusterAddonInstancesResponseBodyAddons },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterAddonInstancesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListClusterAddonInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListClusterAddonInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterChecksRequest extends $tea.Model {
  /**
   * @remarks
   * The targets to check.
   */
  target?: string;
  /**
   * @remarks
   * The check method.
   * 
   * @example
   * ClusterUpgrade
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      target: 'target',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      target: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterChecksResponseBody extends $tea.Model {
  /**
   * @remarks
   * The list of check items.
   */
  checks?: ListClusterChecksResponseBodyChecks[];
  static names(): { [key: string]: string } {
    return {
      checks: 'checks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checks: { 'type': 'array', 'itemType': ListClusterChecksResponseBodyChecks },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterChecksResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListClusterChecksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListClusterChecksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterKubeconfigStatesRequest extends $tea.Model {
  /**
   * @remarks
   * The page number.
   * 
   * *   Valid values: ≥ 1.
   * *   Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * *   Valid values: 10 to 50.
   * *   Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterKubeconfigStatesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The pagination information.
   */
  page?: ListClusterKubeconfigStatesResponseBodyPage;
  /**
   * @remarks
   * The status of the kubeconfig files associated with the cluster.
   */
  states?: ListClusterKubeconfigStatesResponseBodyStates[];
  static names(): { [key: string]: string } {
    return {
      page: 'page',
      states: 'states',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: ListClusterKubeconfigStatesResponseBodyPage,
      states: { 'type': 'array', 'itemType': ListClusterKubeconfigStatesResponseBodyStates },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterKubeconfigStatesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListClusterKubeconfigStatesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListClusterKubeconfigStatesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOperationPlansRequest extends $tea.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * c29ced64b3dfe4f33b57ca0aa9f68****
   */
  clusterId?: string;
  /**
   * @remarks
   * The operation plan type.
   * 
   * @example
   * cluster_upgrade
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'cluster_id',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOperationPlansResponseBody extends $tea.Model {
  /**
   * @remarks
   * The operation plans.
   */
  plans?: ListOperationPlansResponseBodyPlans[];
  static names(): { [key: string]: string } {
    return {
      plans: 'plans',
    };
  }

  static types(): { [key: string]: any } {
    return {
      plans: { 'type': 'array', 'itemType': ListOperationPlansResponseBodyPlans },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOperationPlansResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListOperationPlansResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListOperationPlansResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequest extends $tea.Model {
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * @example
   * ***
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The list of cluster IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * ["xxxxx","xxxxxx"]
   */
  resourceIds?: string[];
  /**
   * @remarks
   * The resource type. Set the value to `CLUSTER`.
   * 
   * This parameter is required.
   * 
   * @example
   * CLUSTER
   */
  resourceType?: string;
  /**
   * @remarks
   * The list of labels that you want to query. You can specify at most 20 labels.
   * 
   * @example
   * [{\\"key\\":\\"env\\",\\"value\\",\\"dev\\"},{\\"key\\":\\"dev\\", \\"value\\":\\"IT\\"}]
   */
  tags?: Tag[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'next_token',
      regionId: 'region_id',
      resourceIds: 'resource_ids',
      resourceType: 'resource_type',
      tags: 'tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      regionId: 'string',
      resourceIds: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tags: { 'type': 'array', 'itemType': Tag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * @example
   * ***
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The list of cluster IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * ["xxxxx","xxxxxx"]
   */
  resourceIdsShrink?: string;
  /**
   * @remarks
   * The resource type. Set the value to `CLUSTER`.
   * 
   * This parameter is required.
   * 
   * @example
   * CLUSTER
   */
  resourceType?: string;
  /**
   * @remarks
   * The list of labels that you want to query. You can specify at most 20 labels.
   * 
   * @example
   * [{\\"key\\":\\"env\\",\\"value\\",\\"dev\\"},{\\"key\\":\\"dev\\", \\"value\\":\\"IT\\"}]
   */
  tagsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'next_token',
      regionId: 'region_id',
      resourceIdsShrink: 'resource_ids',
      resourceType: 'resource_type',
      tagsShrink: 'tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      regionId: 'string',
      resourceIdsShrink: 'string',
      resourceType: 'string',
      tagsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * @example
   * c374bf4864448****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E368C761-F8F6-4A36-9B58-BD53D5CD0CEB
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the queried labels and resources.
   */
  tagResources?: ListTagResourcesResponseBodyTagResources;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'next_token',
      requestId: 'request_id',
      tagResources: 'tag_resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      tagResources: ListTagResourcesResponseBodyTagResources,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListTagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserKubeConfigStatesRequest extends $tea.Model {
  /**
   * @remarks
   * The page number.
   * 
   * *   Valid values: ≥ 1.
   * *   Default value: 1.
   * 
   * @example
   * 2
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * *   Value values: 1 to 100.
   * *   Default value: 50.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'page_number',
      pageSize: 'page_size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserKubeConfigStatesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The pagination information.
   */
  page?: ListUserKubeConfigStatesResponseBodyPage;
  /**
   * @remarks
   * The status of the kubeconfig files.
   */
  states?: ListUserKubeConfigStatesResponseBodyStates[];
  static names(): { [key: string]: string } {
    return {
      page: 'page',
      states: 'states',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: ListUserKubeConfigStatesResponseBodyPage,
      states: { 'type': 'array', 'itemType': ListUserKubeConfigStatesResponseBodyStates },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserKubeConfigStatesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListUserKubeConfigStatesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListUserKubeConfigStatesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MigrateClusterRequest extends $tea.Model {
  /**
   * @remarks
   * The endpoint of the OSS bucket.
   * 
   * @example
   * *******.oss-cn-hangzhou.aliyuncs.com
   */
  ossBucketEndpoint?: string;
  /**
   * @remarks
   * The name of the Object Storage Service (OSS) bucket.
   * 
   * @example
   * bucket-****
   */
  ossBucketName?: string;
  static names(): { [key: string]: string } {
    return {
      ossBucketEndpoint: 'oss_bucket_endpoint',
      ossBucketName: 'oss_bucket_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ossBucketEndpoint: 'string',
      ossBucketName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MigrateClusterResponseBody extends $tea.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * c8155823d057948c69a****
   */
  clusterId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 20758A-585D-4A41-A9B2-28DA8F4F534F
   */
  requestId?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * T-62ccd14aacb8db06ca00****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'cluster_id',
      requestId: 'request_id',
      taskId: 'task_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      requestId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MigrateClusterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: MigrateClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: MigrateClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterRequest extends $tea.Model {
  /**
   * @remarks
   * The network access control list (ACL) of the SLB instance associated with the API server if the cluster is a registered cluster.
   */
  accessControlList?: string[];
  apiServerCustomCertSans?: ModifyClusterRequestApiServerCustomCertSans;
  /**
   * @remarks
   * Specifies whether to associate an elastic IP address (EIP) with the cluster. This EIP is used for accessing the API server over the Internet. Valid values:
   * 
   * *   `true`: associates an EIP with the cluster.
   * *   `false`: does not associate an EIP with the cluster.
   * 
   * @example
   * true
   */
  apiServerEip?: boolean;
  /**
   * @remarks
   * The ID of the EIP that you want to associate with the API server of the cluster. This parameter takes effect when `api_server_eip` is set to `true`.
   * 
   * @example
   * eip-wz9fnasl6dsfhmvci****
   */
  apiServerEipId?: string;
  /**
   * @remarks
   * The cluster name.
   * 
   * The cluster name must be 1 to 63 characters in length, and can contain digits, letters, and hyphens (_). The cluster name cannot start with a hyphen (-).
   * 
   * @example
   * cluster-new-name
   */
  clusterName?: string;
  /**
   * @remarks
   * Specifies whether to enable cluster deletion protection. If this option is enabled, the cluster cannot be deleted in the console or by calling API operations. Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * Default value: `false`
   * 
   * @example
   * true
   */
  deletionProtection?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the RRSA feature. Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * @example
   * true
   */
  enableRrsa?: boolean;
  /**
   * @remarks
   * Specifies whether to remap the test domain name of the cluster. Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * Default value: `false`
   * 
   * @example
   * true
   */
  ingressDomainRebinding?: boolean;
  /**
   * @remarks
   * The ID of the Server Load Balancer (SLB) instance of the cluster to be modified.
   * 
   * @example
   * lb-wz97kes8tnndkpodw****
   */
  ingressLoadbalancerId?: string;
  /**
   * @remarks
   * Specifies whether to enable instance deletion protection. If this option is enabled, the instance cannot be deleted in the console or by calling API operations. Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * Default value: `false`
   * 
   * @example
   * true
   */
  instanceDeletionProtection?: boolean;
  /**
   * @remarks
   * The cluster maintenance window. This feature takes effect only for managed Pro clusters.
   */
  maintenanceWindow?: MaintenanceWindow;
  operationPolicy?: ModifyClusterRequestOperationPolicy;
  /**
   * @remarks
   * The ID of the cluster resource group.
   * 
   * @example
   * rg-acfmyvw3wjm****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The storage configurations of system events.
   */
  systemEventsLogging?: ModifyClusterRequestSystemEventsLogging;
  static names(): { [key: string]: string } {
    return {
      accessControlList: 'access_control_list',
      apiServerCustomCertSans: 'api_server_custom_cert_sans',
      apiServerEip: 'api_server_eip',
      apiServerEipId: 'api_server_eip_id',
      clusterName: 'cluster_name',
      deletionProtection: 'deletion_protection',
      enableRrsa: 'enable_rrsa',
      ingressDomainRebinding: 'ingress_domain_rebinding',
      ingressLoadbalancerId: 'ingress_loadbalancer_id',
      instanceDeletionProtection: 'instance_deletion_protection',
      maintenanceWindow: 'maintenance_window',
      operationPolicy: 'operation_policy',
      resourceGroupId: 'resource_group_id',
      systemEventsLogging: 'system_events_logging',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessControlList: { 'type': 'array', 'itemType': 'string' },
      apiServerCustomCertSans: ModifyClusterRequestApiServerCustomCertSans,
      apiServerEip: 'boolean',
      apiServerEipId: 'string',
      clusterName: 'string',
      deletionProtection: 'boolean',
      enableRrsa: 'boolean',
      ingressDomainRebinding: 'boolean',
      ingressLoadbalancerId: 'string',
      instanceDeletionProtection: 'boolean',
      maintenanceWindow: MaintenanceWindow,
      operationPolicy: ModifyClusterRequestOperationPolicy,
      resourceGroupId: 'string',
      systemEventsLogging: ModifyClusterRequestSystemEventsLogging,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterResponseBody extends $tea.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * cb95aa626a47740afbf6aa09****
   */
  clusterId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 687C5BAA-D103-4993-884B-C35E4314****
   */
  requestId?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * T-5a54309c80282e39ea00****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'cluster_id',
      requestId: 'request_id',
      taskId: 'task_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      requestId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterAddonRequest extends $tea.Model {
  /**
   * @remarks
   * The custom parameter settings that you want to use.
   * 
   * @example
   * {"CpuRequest":"800m"}
   */
  config?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'config',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterAddonResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterConfigurationRequest extends $tea.Model {
  /**
   * @remarks
   * The custom configuration.
   */
  customizeConfig?: ModifyClusterConfigurationRequestCustomizeConfig[];
  static names(): { [key: string]: string } {
    return {
      customizeConfig: 'customize_config',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customizeConfig: { 'type': 'array', 'itemType': ModifyClusterConfigurationRequestCustomizeConfig },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterConfigurationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterNodePoolRequest extends $tea.Model {
  /**
   * @remarks
   * The configuration of auto scaling.
   */
  autoScaling?: ModifyClusterNodePoolRequestAutoScaling;
  /**
   * @remarks
   * Specifies whether concurrency is supported.
   * 
   * @example
   * true
   */
  concurrency?: boolean;
  /**
   * @remarks
   * The configuration of the cluster where the node pool is deployed.
   */
  kubernetesConfig?: ModifyClusterNodePoolRequestKubernetesConfig;
  /**
   * @remarks
   * The configuration of the managed node pool feature.
   */
  management?: ModifyClusterNodePoolRequestManagement;
  /**
   * @remarks
   * The configurations of the node pool.
   */
  nodepoolInfo?: ModifyClusterNodePoolRequestNodepoolInfo;
  /**
   * @remarks
   * The configurations of the scaling group.
   */
  scalingGroup?: ModifyClusterNodePoolRequestScalingGroup;
  /**
   * @remarks
   * The configurations about confidential computing for the cluster.
   */
  teeConfig?: ModifyClusterNodePoolRequestTeeConfig;
  /**
   * @remarks
   * Specifies whether to update node information, such as labels and taints.
   * 
   * @example
   * true
   */
  updateNodes?: boolean;
  static names(): { [key: string]: string } {
    return {
      autoScaling: 'auto_scaling',
      concurrency: 'concurrency',
      kubernetesConfig: 'kubernetes_config',
      management: 'management',
      nodepoolInfo: 'nodepool_info',
      scalingGroup: 'scaling_group',
      teeConfig: 'tee_config',
      updateNodes: 'update_nodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoScaling: ModifyClusterNodePoolRequestAutoScaling,
      concurrency: 'boolean',
      kubernetesConfig: ModifyClusterNodePoolRequestKubernetesConfig,
      management: ModifyClusterNodePoolRequestManagement,
      nodepoolInfo: ModifyClusterNodePoolRequestNodepoolInfo,
      scalingGroup: ModifyClusterNodePoolRequestScalingGroup,
      teeConfig: ModifyClusterNodePoolRequestTeeConfig,
      updateNodes: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterNodePoolResponseBody extends $tea.Model {
  /**
   * @remarks
   * The node pool ID.
   * 
   * @example
   * np737c3ac1ac684703b9e10673aa2c****
   */
  nodepoolId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 687C5BAA-D103-4993-884B-C35E4314****
   */
  requestId?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * T-5fd211e924e1d00787000293
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      nodepoolId: 'nodepool_id',
      requestId: 'request_id',
      taskId: 'task_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodepoolId: 'string',
      requestId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterNodePoolResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyClusterNodePoolResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyClusterNodePoolResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterTagsRequest extends $tea.Model {
  /**
   * @remarks
   * The data of the labels that you want to modify.
   */
  body?: Tag[];
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: { 'type': 'array', 'itemType': Tag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterTagsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyNodePoolNodeConfigRequest extends $tea.Model {
  /**
   * @remarks
   * The parameter settings of the kubelet.
   */
  kubeletConfig?: KubeletConfig;
  osConfig?: ModifyNodePoolNodeConfigRequestOsConfig;
  /**
   * @remarks
   * The rotation configurations.
   */
  rollingPolicy?: ModifyNodePoolNodeConfigRequestRollingPolicy;
  static names(): { [key: string]: string } {
    return {
      kubeletConfig: 'kubelet_config',
      osConfig: 'os_config',
      rollingPolicy: 'rolling_policy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      kubeletConfig: KubeletConfig,
      osConfig: ModifyNodePoolNodeConfigRequestOsConfig,
      rollingPolicy: ModifyNodePoolNodeConfigRequestRollingPolicy,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyNodePoolNodeConfigResponseBody extends $tea.Model {
  /**
   * @remarks
   * The node pool ID.
   * 
   * @example
   * np737c3ac1ac684703b9e10673aa2c****
   */
  nodepoolId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D7631D83-6E98-1949-B665-766A62xxxxxx
   */
  requestId?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * T-5fd211e924e1d00787xxxxxx
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      nodepoolId: 'nodepool_id',
      requestId: 'request_id',
      taskId: 'task_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodepoolId: 'string',
      requestId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyNodePoolNodeConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyNodePoolNodeConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyNodePoolNodeConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPolicyInstanceRequest extends $tea.Model {
  /**
   * @remarks
   * The action of the policy. Valid values:
   * 
   * *   `deny`: Deployments that match the policy are denied.
   * *   `warn`: Alerts are generated for deployments that match the policy.
   * 
   * @example
   * deny
   */
  action?: string;
  /**
   * @remarks
   * The ID of the policy instance.
   * 
   * @example
   * allowed-repos-cbhhb
   */
  instanceName?: string;
  /**
   * @remarks
   * The namespaces to which the policy is applied. The policy is applied to all namespaces if this parameter is left empty.
   */
  namespaces?: string[];
  /**
   * @remarks
   * The parameters of the policy instance. For more information, see [Predefined security policies of ACK](https://help.aliyun.com/document_detail/359819.html).
   * 
   * @example
   * "restrictedNamespaces": [ "test" ]
   */
  parameters?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      action: 'action',
      instanceName: 'instance_name',
      namespaces: 'namespaces',
      parameters: 'parameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      instanceName: 'string',
      namespaces: { 'type': 'array', 'itemType': 'string' },
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPolicyInstanceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The list of policy instances that are updated.
   */
  instances?: string[];
  static names(): { [key: string]: string } {
    return {
      instances: 'instances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPolicyInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyPolicyInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyPolicyInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenAckServiceRequest extends $tea.Model {
  /**
   * @remarks
   * The type of service that you want to activate. Valid values:
   * 
   * *   `propayasgo`: professional managed Kubernetes service.
   * *   `edgepayasgo`: ACK Edge.
   * 
   * @example
   * propayasgo
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenAckServiceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the order.
   * 
   * @example
   * 2067*******0374
   */
  orderId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 20758A-585D-4A41-A9B2-28DA8F4F534F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'order_id',
      requestId: 'request_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenAckServiceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: OpenAckServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: OpenAckServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PauseClusterUpgradeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PauseComponentUpgradeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PauseTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveClusterNodesRequest extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to evict all pods from the nodes that you want to remove.
   */
  drainNode?: boolean;
  /**
   * @remarks
   * The list of nodes to be removed.
   * 
   * This parameter is required.
   */
  nodes?: string[];
  /**
   * @remarks
   * Specifies whether to release the Elastic Compute Service (ECS) instances when they are removed from the cluster.
   */
  releaseNode?: boolean;
  static names(): { [key: string]: string } {
    return {
      drainNode: 'drain_node',
      nodes: 'nodes',
      releaseNode: 'release_node',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drainNode: 'boolean',
      nodes: { 'type': 'array', 'itemType': 'string' },
      releaseNode: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveClusterNodesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveNodePoolNodesRequest extends $tea.Model {
  /**
   * @remarks
   * 是否并发移除。
   * 
   * @example
   * false
   */
  concurrency?: boolean;
  /**
   * @remarks
   * Specifies whether to drain the nodes that you want to remove. Valid values:
   * 
   * *   true: drain the nodes that you want to remove.
   * *   false: do not drain the nodes that you want to remove.
   * 
   * @example
   * true
   */
  drainNode?: boolean;
  /**
   * @remarks
   * A list of instances that you want to remove.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * A list of nodes that you want to remove.
   * 
   * @deprecated
   */
  nodes?: string[];
  /**
   * @remarks
   * Specifies whether to release the nodes after they are removed. Valid values:
   * 
   * *   true: release the nodes after they are removed.
   * *   false: do not release the nodes after they are removed.
   * 
   * @example
   * true
   */
  releaseNode?: boolean;
  static names(): { [key: string]: string } {
    return {
      concurrency: 'concurrency',
      drainNode: 'drain_node',
      instanceIds: 'instance_ids',
      nodes: 'nodes',
      releaseNode: 'release_node',
    };
  }

  static types(): { [key: string]: any } {
    return {
      concurrency: 'boolean',
      drainNode: 'boolean',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      nodes: { 'type': 'array', 'itemType': 'string' },
      releaseNode: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveNodePoolNodesShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * 是否并发移除。
   * 
   * @example
   * false
   */
  concurrency?: boolean;
  /**
   * @remarks
   * Specifies whether to drain the nodes that you want to remove. Valid values:
   * 
   * *   true: drain the nodes that you want to remove.
   * *   false: do not drain the nodes that you want to remove.
   * 
   * @example
   * true
   */
  drainNode?: boolean;
  /**
   * @remarks
   * A list of instances that you want to remove.
   */
  instanceIdsShrink?: string;
  /**
   * @remarks
   * A list of nodes that you want to remove.
   * 
   * @deprecated
   */
  nodesShrink?: string;
  /**
   * @remarks
   * Specifies whether to release the nodes after they are removed. Valid values:
   * 
   * *   true: release the nodes after they are removed.
   * *   false: do not release the nodes after they are removed.
   * 
   * @example
   * true
   */
  releaseNode?: boolean;
  static names(): { [key: string]: string } {
    return {
      concurrency: 'concurrency',
      drainNode: 'drain_node',
      instanceIdsShrink: 'instance_ids',
      nodesShrink: 'nodes',
      releaseNode: 'release_node',
    };
  }

  static types(): { [key: string]: any } {
    return {
      concurrency: 'boolean',
      drainNode: 'boolean',
      instanceIdsShrink: 'string',
      nodesShrink: 'string',
      releaseNode: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveNodePoolNodesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A9891419-D125-4D89-AFCA-68846675E2F7
   */
  requestId?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * T-62a944794ee141074400****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'request_id',
      taskId: 'task_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveNodePoolNodesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RemoveNodePoolNodesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RemoveNodePoolNodesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveWorkflowResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RepairClusterNodePoolRequest extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to allow node restart.
   * 
   * @example
   * true
   */
  autoRestart?: boolean;
  /**
   * @remarks
   * The nodes that you want to repair. If you do not specify nodes, all nodes in the node pool are repaired.
   */
  nodes?: string[];
  operations?: RepairClusterNodePoolRequestOperations[];
  static names(): { [key: string]: string } {
    return {
      autoRestart: 'auto_restart',
      nodes: 'nodes',
      operations: 'operations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRestart: 'boolean',
      nodes: { 'type': 'array', 'itemType': 'string' },
      operations: { 'type': 'array', 'itemType': RepairClusterNodePoolRequestOperations },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RepairClusterNodePoolResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * db82195b-75a8-40e5-9be4-16f1829dc624
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * T-613b19bbd160ad4928000001
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'request_id',
      taskId: 'task_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RepairClusterNodePoolResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RepairClusterNodePoolResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RepairClusterNodePoolResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumeComponentUpgradeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumeTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumeUpgradeClusterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeK8sClusterKubeConfigResponseBody extends $tea.Model {
  static names(): { [key: string]: string } {
    return {
    };
  }

  static types(): { [key: string]: any } {
    return {
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeK8sClusterKubeConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RevokeK8sClusterKubeConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RevokeK8sClusterKubeConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunClusterCheckRequest extends $tea.Model {
  /**
   * @remarks
   * The cluster check items.
   */
  options?: { [key: string]: string };
  /**
   * @remarks
   * 检查目标。
   * 
   * @example
   * np1f6779297c4444a3a1cdd29be8e5****
   */
  target?: string;
  /**
   * @remarks
   * The check method.
   * 
   * This parameter is required.
   * 
   * @example
   * ClusterUpgrade
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      options: 'options',
      target: 'target',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      options: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      target: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunClusterCheckResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the cluster check task.
   * 
   * @example
   * 1697100584236600453-ce0da5a1d627e4e9e9f96cae8ad07****-clustercheck-lboto
   */
  checkId?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * F04DF81D-5C12-1524-B36A-86E02526****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      checkId: 'check_id',
      requestId: 'request_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunClusterCheckResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RunClusterCheckResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RunClusterCheckResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScaleClusterRequest extends $tea.Model {
  cloudMonitorFlags?: boolean;
  count?: number;
  cpuPolicy?: string;
  disableRollback?: boolean;
  keyPair?: string;
  loginPassword?: string;
  tags?: ScaleClusterRequestTags[];
  taints?: ScaleClusterRequestTaints[];
  vswitchIds?: string[];
  workerAutoRenew?: boolean;
  workerAutoRenewPeriod?: number;
  workerDataDisk?: boolean;
  workerDataDisks?: ScaleClusterRequestWorkerDataDisks[];
  workerInstanceChargeType?: string;
  workerInstanceTypes?: string[];
  workerPeriod?: number;
  workerPeriodUnit?: string;
  workerSystemDiskCategory?: string;
  workerSystemDiskSize?: number;
  static names(): { [key: string]: string } {
    return {
      cloudMonitorFlags: 'cloud_monitor_flags',
      count: 'count',
      cpuPolicy: 'cpu_policy',
      disableRollback: 'disable_rollback',
      keyPair: 'key_pair',
      loginPassword: 'login_password',
      tags: 'tags',
      taints: 'taints',
      vswitchIds: 'vswitch_ids',
      workerAutoRenew: 'worker_auto_renew',
      workerAutoRenewPeriod: 'worker_auto_renew_period',
      workerDataDisk: 'worker_data_disk',
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
      disableRollback: 'boolean',
      keyPair: 'string',
      loginPassword: 'string',
      tags: { 'type': 'array', 'itemType': ScaleClusterRequestTags },
      taints: { 'type': 'array', 'itemType': ScaleClusterRequestTaints },
      vswitchIds: { 'type': 'array', 'itemType': 'string' },
      workerAutoRenew: 'boolean',
      workerAutoRenewPeriod: 'number',
      workerDataDisk: 'boolean',
      workerDataDisks: { 'type': 'array', 'itemType': ScaleClusterRequestWorkerDataDisks },
      workerInstanceChargeType: 'string',
      workerInstanceTypes: { 'type': 'array', 'itemType': 'string' },
      workerPeriod: 'number',
      workerPeriodUnit: 'string',
      workerSystemDiskCategory: 'string',
      workerSystemDiskSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScaleClusterResponseBody extends $tea.Model {
  clusterId?: string;
  requestId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'cluster_id',
      requestId: 'request_id',
      taskId: 'task_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      requestId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScaleClusterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ScaleClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ScaleClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScaleClusterNodePoolRequest extends $tea.Model {
  /**
   * @remarks
   * The number of worker nodes that you want to add. You can add at most 500 nodes in one API call. The maximum number of nodes that can be added is limited by the quota of nodes in the cluster.
   * 
   * @example
   * 1
   */
  count?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScaleClusterNodePoolResponseBody extends $tea.Model {
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * T-5faa48fb31b6b8078d00****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'task_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScaleClusterNodePoolResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ScaleClusterNodePoolResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ScaleClusterNodePoolResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScaleOutClusterRequest extends $tea.Model {
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
   * The CPU management policy of the nodes in a node pool. The following policies are supported if the Kubernetes version of the cluster is 1.12.6 or later.
   * 
   * *   `static`: This policy allows pods with specific resource characteristics on the node to be granted with enhanced CPU affinity and exclusivity.
   * *   `none`: The default CPU affinity is used.
   * 
   * Default value: `none`.
   * 
   * @example
   * none
   */
  cpuPolicy?: string;
  /**
   * @remarks
   * Specifies a custom image for nodes. By default, the image provided by Container Service for Kubernetes (ACK) is used. You can select a custom image to replace the default image. For more information, see [Custom images](https://help.aliyun.com/document_detail/146647.html).
   * 
   * @example
   * m-bp16z7xko3vvv8gt****
   */
  imageId?: string;
  /**
   * @remarks
   * The name of the key pair. You must set this parameter or the `login_password` parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * secrity-key
   */
  keyPair?: string;
  /**
   * @remarks
   * The password for SSH logon. You must set this parameter or the `key_pair` parameter. The password must be 8 to 30 characters in length, and must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.
   * 
   * This parameter is required.
   * 
   * @example
   * Hello@1234
   */
  loginPassword?: string;
  /**
   * @remarks
   * After you specify the list of ApsaraDB RDS instances, the ECS instances in the cluster are automatically added to the whitelist of the ApsaraDB RDS instances.
   */
  rdsInstances?: string[];
  /**
   * @remarks
   * The container runtime.
   */
  runtime?: Runtime;
  /**
   * @remarks
   * The labels that you want to add to nodes. You must add labels based on the following rules:
   * 
   * *   Each label is a case-sensitive key-value pair. You can add up to 20 labels.
   * *   A key must be unique and cannot exceed 64 characters in length. A value can be empty and cannot exceed 128 characters in length. Keys and values cannot start with aliyun, acs:, https://, or http://. For more information, see [Labels and Selectors](https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#syntax-and-character-set).
   */
  tags?: Tag[];
  /**
   * @remarks
   * The taints that you want to add to nodes. Taints are added to nodes to prevent pods from being scheduled to inappropriate nodes. However, tolerations allow pods to be scheduled to nodes with matching taints. For more information, see [Taints and Tolerations](https://kubernetes.io/zh/docs/concepts/scheduling-eviction/taint-and-toleration/).
   */
  taints?: Taint[];
  /**
   * @remarks
   * The user data of the node pool. For more information, see [Generate user-defined data](https://help.aliyun.com/document_detail/49121.html).
   * 
   * @example
   * IyEvdXNyL2Jpbi9iYXNoCmVjaG8gIkhlbGxvIEFD****
   */
  userData?: string;
  /**
   * @remarks
   * The IDs of the vSwitches. You can select one to three vSwitches when you create a cluster. We recommend that you select vSwitches in different zones to ensure high availability.
   * 
   * This parameter is required.
   */
  vswitchIds?: string[];
  /**
   * @remarks
   * Specifies whether to enable auto-renewal for worker nodes. This parameter takes effect only if `worker_instance_charge_type` is set to `PrePaid`. Valid values:
   * 
   * *   `true`: enables auto-renewal.
   * *   `false`: disables auto-renewal.
   * 
   * Default value: `true`.
   * 
   * @example
   * true
   */
  workerAutoRenew?: boolean;
  /**
   * @remarks
   * The auto-renewal period for worker nodes after the subscriptions of worker nodes expire. This parameter takes effect and is required only if the subscription billing method is selected for worker nodes.
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
   * The configuration of the data disk that is mounted to worker nodes. The configuration includes the disk type and disk size.
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
   * The billing cycle of worker nodes. This parameter is required if worker_instance_charge_type is set to `PrePaid`.
   * 
   * Set the value to `Month`. Worker nodes are billed only on a monthly basis.
   * 
   * @example
   * Month
   */
  workerPeriodUnit?: string;
  /**
   * @remarks
   * The type of system disk that you want to use for worker nodes. Valid values:
   * 
   * *   `cloud_efficiency`: ultra disk.
   * *   `cloud_ssd`: standard SSD.
   * *   `cloud_essd`: enhanced SSD (ESSD).
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
   * The size of the system disk that you want to use for worker nodes. Unit: GiB.
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScaleOutClusterResponseBody extends $tea.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * c82e6987e2961451182edacd74faf****
   */
  clusterId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 687C5BAA-D103-4993-884B-C35E4314A1E1
   */
  requestId?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * T-5a54309c80282e39ea00002f
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'cluster_id',
      requestId: 'request_id',
      taskId: 'task_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      requestId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScaleOutClusterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ScaleOutClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ScaleOutClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScanClusterVulsResponseBody extends $tea.Model {
  /**
   * @example
   * 687C5BAA-D103-4993-884B-C35E4314A1E1
   */
  requestId?: string;
  /**
   * @example
   * T-xascadasd*****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'request_id',
      taskId: 'task_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScanClusterVulsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ScanClusterVulsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ScanClusterVulsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartAlertRequest extends $tea.Model {
  /**
   * @remarks
   * The name of the alert rule set to be enabled.
   */
  alertRuleGroupName?: string;
  /**
   * @remarks
   * The name of the alert rule to be enabled. If you do not specify an alert rule name, the alert rule set is enabled.
   */
  alertRuleName?: string;
  static names(): { [key: string]: string } {
    return {
      alertRuleGroupName: 'alert_rule_group_name',
      alertRuleName: 'alert_rule_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertRuleGroupName: 'string',
      alertRuleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartAlertResponseBody extends $tea.Model {
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * success
   */
  msg?: string;
  /**
   * @remarks
   * The status.
   * 
   * @example
   * true
   */
  status?: boolean;
  static names(): { [key: string]: string } {
    return {
      msg: 'msg',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      msg: 'string',
      status: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartAlertResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartAlertResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StartAlertResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartWorkflowRequest extends $tea.Model {
  /**
   * @remarks
   * The name of the output BAM file.
   * 
   * @example
   * abc.bam
   */
  mappingBamOutFilename?: string;
  /**
   * @remarks
   * The output path of the Binary Alignment Map (BAM) file.
   * 
   * @example
   * output/bamDirName
   */
  mappingBamOutPath?: string;
  /**
   * @remarks
   * The name of the OSS bucket that stores the data of the mapping workflow.
   * 
   * @example
   * gene-shenzhen
   */
  mappingBucketName?: string;
  /**
   * @remarks
   * The name of the first FASTQ file of the mapping workflow.
   * 
   * @example
   * MGISEQ2000_PCR-free_NA12878_1_V100003043_L01_1.fq.gz
   */
  mappingFastqFirstFilename?: string;
  /**
   * @remarks
   * The path of the FASTQ files of the mapping workflow.
   * 
   * @example
   * fastq/MGISEQ2000
   */
  mappingFastqPath?: string;
  /**
   * @remarks
   * The name of the second FASTQ file of the mapping workflow.
   * 
   * @example
   * MGISEQ2000_PCR-free_NA12878_1_V100003043_L01_2.fq.gz
   */
  mappingFastqSecondFilename?: string;
  /**
   * @remarks
   * Specifies whether to mark duplicate values.
   * 
   * @example
   * true
   */
  mappingIsMarkDup?: string;
  /**
   * @remarks
   * The region where the Object Storage Service (OSS) bucket that stores the data of the mapping workflow is deployed.
   * 
   * @example
   * cn-hangzhou
   */
  mappingOssRegion?: string;
  /**
   * @remarks
   * The path of the reference files of the mapping workflow.
   * 
   * @example
   * reference/hg19
   */
  mappingReferencePath?: string;
  /**
   * @remarks
   * The type of service-level agreement (SLA). Valid values:
   * 
   * *   s: the silver level (S-level). It requires 1 extra minute to process every 1.5 billion base pairs beyond the limit of 90 billion base pairs.
   * *   g: the gold level (G-level). It requires 1 extra minute to process every 2 billion base pairs beyond the limit of 90 billion base pairs.
   * *   p: the platinum level (P-level). It requires 1 extra minute to process every 3 billion base pairs beyond the limit of 90 billion base pairs.
   * 
   * @example
   * s
   */
  service?: string;
  /**
   * @remarks
   * The name of the OSS bucket that stores the data of the WGS workflow.
   * 
   * @example
   * gene-shenzhen
   */
  wgsBucketName?: string;
  /**
   * @remarks
   * The name of the first FASTQ file of the WGS workflow.
   * 
   * @example
   * MGISEQ2000_PCR-free_NA12878_1_V100003043_L01_1.fq.gz
   */
  wgsFastqFirstFilename?: string;
  /**
   * @remarks
   * The path of the FASTQ files of the WGS workflow.
   * 
   * @example
   * fastq/MGISEQ2000
   */
  wgsFastqPath?: string;
  /**
   * @remarks
   * The name of the second FASTQ file of the WGS workflow.
   * 
   * @example
   * MGISEQ2000_PCR-free_NA12878_1_V100003043_L01_2.fq.gz
   */
  wgsFastqSecondFilename?: string;
  /**
   * @remarks
   * The region where the OSS bucket that stores the data of the whole genome sequencing (WGS) workflow is deployed.
   * 
   * @example
   * cn-shenzhen
   */
  wgsOssRegion?: string;
  /**
   * @remarks
   * The path of the reference files of the WGS workflow.
   * 
   * @example
   * reference/hg19
   */
  wgsReferencePath?: string;
  /**
   * @remarks
   * The name of the output VCF file.
   * 
   * @example
   * abc.vcf
   */
  wgsVcfOutFilename?: string;
  /**
   * @remarks
   * The output path of the Variant Call Format (VCF) file.
   * 
   * @example
   * output/vcf
   */
  wgsVcfOutPath?: string;
  /**
   * @remarks
   * The type of workflow. Valid values: wgs and mapping.
   * 
   * This parameter is required.
   * 
   * @example
   * mapping
   */
  workflowType?: string;
  static names(): { [key: string]: string } {
    return {
      mappingBamOutFilename: 'mapping_bam_out_filename',
      mappingBamOutPath: 'mapping_bam_out_path',
      mappingBucketName: 'mapping_bucket_name',
      mappingFastqFirstFilename: 'mapping_fastq_first_filename',
      mappingFastqPath: 'mapping_fastq_path',
      mappingFastqSecondFilename: 'mapping_fastq_second_filename',
      mappingIsMarkDup: 'mapping_is_mark_dup',
      mappingOssRegion: 'mapping_oss_region',
      mappingReferencePath: 'mapping_reference_path',
      service: 'service',
      wgsBucketName: 'wgs_bucket_name',
      wgsFastqFirstFilename: 'wgs_fastq_first_filename',
      wgsFastqPath: 'wgs_fastq_path',
      wgsFastqSecondFilename: 'wgs_fastq_second_filename',
      wgsOssRegion: 'wgs_oss_region',
      wgsReferencePath: 'wgs_reference_path',
      wgsVcfOutFilename: 'wgs_vcf_out_filename',
      wgsVcfOutPath: 'wgs_vcf_out_path',
      workflowType: 'workflow_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mappingBamOutFilename: 'string',
      mappingBamOutPath: 'string',
      mappingBucketName: 'string',
      mappingFastqFirstFilename: 'string',
      mappingFastqPath: 'string',
      mappingFastqSecondFilename: 'string',
      mappingIsMarkDup: 'string',
      mappingOssRegion: 'string',
      mappingReferencePath: 'string',
      service: 'string',
      wgsBucketName: 'string',
      wgsFastqFirstFilename: 'string',
      wgsFastqPath: 'string',
      wgsFastqSecondFilename: 'string',
      wgsOssRegion: 'string',
      wgsReferencePath: 'string',
      wgsVcfOutFilename: 'string',
      wgsVcfOutPath: 'string',
      workflowType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartWorkflowResponseBody extends $tea.Model {
  /**
   * @remarks
   * The name of the workflow.
   * 
   * @example
   * mapping-gpu-66xv7
   */
  jobName?: string;
  static names(): { [key: string]: string } {
    return {
      jobName: 'JobName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartWorkflowResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartWorkflowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StartWorkflowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopAlertRequest extends $tea.Model {
  /**
   * @remarks
   * The name of the alert rule set to be disabled.
   */
  alertRuleGroupName?: string;
  /**
   * @remarks
   * The name of the alert rule to be disabled. If you do not specify an alert rule name, the alert rule set is disabled.
   */
  alertRuleName?: string;
  static names(): { [key: string]: string } {
    return {
      alertRuleGroupName: 'alert_rule_group_name',
      alertRuleName: 'alert_rule_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertRuleGroupName: 'string',
      alertRuleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopAlertResponseBody extends $tea.Model {
  /**
   * @remarks
   * The error message returned if the call fails.
   * 
   * @example
   * Success
   */
  msg?: string;
  /**
   * @remarks
   * The operation result. Valid values:
   * 
   * *   True: The operation is successful.
   * *   False: The operation failed.
   * 
   * @example
   * True
   */
  status?: boolean;
  static names(): { [key: string]: string } {
    return {
      msg: 'msg',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      msg: 'string',
      status: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopAlertResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopAlertResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StopAlertResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncClusterNodePoolResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2D69A58F-345C-4FDE-88E4-BF51894XXXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncClusterNodePoolResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SyncClusterNodePoolResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SyncClusterNodePoolResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequest extends $tea.Model {
  /**
   * @remarks
   * The region ID of the resource.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The list of resource IDs.
   * 
   * This parameter is required.
   */
  resourceIds?: string[];
  /**
   * @remarks
   * The type of resource that you want to label. Set the value to `CLUSTER`.
   * 
   * This parameter is required.
   * 
   * @example
   * CLUSTER
   */
  resourceType?: string;
  /**
   * @remarks
   * The labels that you want to add to the resources in key-value pairs. You can add up to 20 labels. Usage notes:
   * 
   * *   Label values must not be empty strings. A label value must be 1 to 128 characters in length.
   * *   The label value must not start with `aliyun` or `acs:`.
   * *   The label value must not contain `http://` or `https://`.
   * 
   * This parameter is required.
   */
  tags?: Tag[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'region_id',
      resourceIds: 'resource_ids',
      resourceType: 'resource_type',
      tags: 'tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceIds: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tags: { 'type': 'array', 'itemType': Tag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2D69A58F-345C-4FDE-88E4-BF51894XXXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: TagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnInstallClusterAddonsRequest extends $tea.Model {
  /**
   * @remarks
   * The components that you want to uninstall. The list is an array.
   */
  addons?: UnInstallClusterAddonsRequestAddons[];
  static names(): { [key: string]: string } {
    return {
      addons: 'addons',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addons: { 'type': 'array', 'itemType': UnInstallClusterAddonsRequestAddons },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnInstallClusterAddonsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesRequest extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to remove all custom labels. This parameter takes effect only when `tag_keys` is left empty. Valid values:
   * 
   * *   `true`: Remove all custom labels.
   * *   `false`: Do not remove all custom labels.
   * 
   * @example
   * true
   */
  all?: boolean;
  /**
   * @remarks
   * The region ID of the resources.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The list of resource IDs.
   * 
   * This parameter is required.
   */
  resourceIds?: string[];
  /**
   * @remarks
   * The type of resource. Set the value to `CLUSTER`.
   * 
   * This parameter is required.
   * 
   * @example
   * CLUSTER
   */
  resourceType?: string;
  /**
   * @remarks
   * The list of keys of the labels that you want to remove.
   * 
   * This parameter is required.
   */
  tagKeys?: string[];
  static names(): { [key: string]: string } {
    return {
      all: 'all',
      regionId: 'region_id',
      resourceIds: 'resource_ids',
      resourceType: 'resource_type',
      tagKeys: 'tag_keys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      regionId: 'string',
      resourceIds: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tagKeys: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to remove all custom labels. This parameter takes effect only when `tag_keys` is left empty. Valid values:
   * 
   * *   `true`: Remove all custom labels.
   * *   `false`: Do not remove all custom labels.
   * 
   * @example
   * true
   */
  all?: boolean;
  /**
   * @remarks
   * The region ID of the resources.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The list of resource IDs.
   * 
   * This parameter is required.
   */
  resourceIdsShrink?: string;
  /**
   * @remarks
   * The type of resource. Set the value to `CLUSTER`.
   * 
   * This parameter is required.
   * 
   * @example
   * CLUSTER
   */
  resourceType?: string;
  /**
   * @remarks
   * The list of keys of the labels that you want to remove.
   * 
   * This parameter is required.
   */
  tagKeysShrink?: string;
  static names(): { [key: string]: string } {
    return {
      all: 'all',
      regionId: 'region_id',
      resourceIdsShrink: 'resource_ids',
      resourceType: 'resource_type',
      tagKeysShrink: 'tag_keys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      regionId: 'string',
      resourceIdsShrink: 'string',
      resourceType: 'string',
      tagKeysShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2D69A58F-345C-4FDE-88E4-BF51894XXXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UntagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UntagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateClusterAuditLogConfigRequest extends $tea.Model {
  /**
   * @remarks
   * Enable or disable the audit log feature.
   * 
   * *   false: enables the audit log feature or updates the audit log configuration.
   * *   true: disables the audit log feature.
   * 
   * @example
   * false
   */
  disable?: boolean;
  /**
   * @remarks
   * The [SLS project](https://help.aliyun.com/zh/sls/product-overview/project?spm=a2c4g.11186623.0.i3) to which the [Logstore](https://help.aliyun.com/zh/sls/product-overview/logstore?spm=a2c4g.11186623.0.0.48287ce0jAUWWM) belongs.
   * 
   * *   Default value: k8s-log-{clusterid}.
   * *   After the cluster audit log feature is enabled, a Logstore is created in the specified SLS project to store the cluster audit logs.
   * *   If you want to change the project after the cluster audit log feature is enabled, you can use this parameter to specify another SLS project. You can perform this operation only in ACK managed clusters.
   * 
   * @example
   * k8s-log-c82e6987e2961451182edacd74faf****
   */
  slsProjectName?: string;
  static names(): { [key: string]: string } {
    return {
      disable: 'disable',
      slsProjectName: 'sls_project_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disable: 'boolean',
      slsProjectName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateClusterAuditLogConfigResponseBody extends $tea.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * c93095129fc41463aa455d89444fd****
   */
  clusterId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 48BD70F6-A7E6-543D-9F23-08DEB764C92E
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * T-5faa48fb31b6b8078d00****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'cluster_id',
      requestId: 'request_id',
      taskId: 'task_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      requestId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateClusterAuditLogConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateClusterAuditLogConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateClusterAuditLogConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateContactGroupForAlertRequest extends $tea.Model {
  alertRuleGroupName?: string;
  contactGroupIds?: number[];
  crName?: string;
  namespace?: string;
  static names(): { [key: string]: string } {
    return {
      alertRuleGroupName: 'alert_rule_group_name',
      contactGroupIds: 'contact_group_ids',
      crName: 'cr_name',
      namespace: 'namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertRuleGroupName: 'string',
      contactGroupIds: { 'type': 'array', 'itemType': 'number' },
      crName: 'string',
      namespace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateContactGroupForAlertResponseBody extends $tea.Model {
  msg?: string;
  status?: boolean;
  static names(): { [key: string]: string } {
    return {
      msg: 'msg',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      msg: 'string',
      status: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateContactGroupForAlertResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateContactGroupForAlertResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateContactGroupForAlertResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateControlPlaneLogRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * 162981*****
   * 
   * **if can be null:**
   * true
   */
  aliuid?: string;
  /**
   * @remarks
   * The control plane components for which you want to enable log collection.
   */
  components?: string[];
  /**
   * @remarks
   * The name of the Simple Log Service project that you want to use to store the logs of control plane components.
   * 
   * Default value: k8s-log-$Cluster ID.
   * 
   * @example
   * k8s-log-c5b5e80b0b64a4bf6939d2d8fbbc5****
   * 
   * **if can be null:**
   * true
   */
  logProject?: string;
  /**
   * @remarks
   * The retention period of the log data stored in the Logstore. Valid values: 1 to 3000. Unit: days.
   * 
   * Default value: 30.
   * 
   * @example
   * 30
   * 
   * **if can be null:**
   * true
   */
  logTtl?: string;
  static names(): { [key: string]: string } {
    return {
      aliuid: 'aliuid',
      components: 'components',
      logProject: 'log_project',
      logTtl: 'log_ttl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliuid: 'string',
      components: { 'type': 'array', 'itemType': 'string' },
      logProject: 'string',
      logTtl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateControlPlaneLogResponseBody extends $tea.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * cb95aa626a47740afbf6aa099b650****
   */
  clusterId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 687C5BAA-D103-4993-884B-C35E4314****
   */
  requestId?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * T-5a54309c80282e39ea00****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'cluster_id',
      requestId: 'request_id',
      taskId: 'task_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      requestId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateControlPlaneLogResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateControlPlaneLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateControlPlaneLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateK8sClusterUserConfigExpireRequest extends $tea.Model {
  /**
   * @remarks
   * The validity period of the kubeconfig file. Unit: hours.
   * 
   * > The value of expire_hour must be greater than 0 and equal to or smaller than 876000 (100 years).
   * 
   * This parameter is required.
   * 
   * @example
   * 720
   */
  expireHour?: number;
  /**
   * @remarks
   * The user ID.
   * 
   * This parameter is required.
   * 
   * @example
   * The ID of the Resource Access Management (RAM) user that you use.
   */
  user?: string;
  static names(): { [key: string]: string } {
    return {
      expireHour: 'expire_hour',
      user: 'user',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expireHour: 'number',
      user: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateK8sClusterUserConfigExpireResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourcesDeleteProtectionRequest extends $tea.Model {
  /**
   * @remarks
   * Specify whether to enable deletion protection. Set the value to true to enable deletion protection and set the value to false to disable deletion protection.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The namespace to which the resource belongs.
   * 
   * @example
   * default
   * 
   * **if can be null:**
   * true
   */
  namespace?: string;
  /**
   * @remarks
   * The type of resource for which deletion protection is enabled or disabled. You can specify namespaces or Services.
   * 
   * @example
   * services
   */
  resourceType?: string;
  /**
   * @remarks
   * The resources list.
   */
  resources?: string[];
  static names(): { [key: string]: string } {
    return {
      enable: 'enable',
      namespace: 'namespace',
      resourceType: 'resource_type',
      resources: 'resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      namespace: 'string',
      resourceType: 'string',
      resources: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourcesDeleteProtectionResponseBody extends $tea.Model {
  /**
   * @remarks
   * The namespace to which the resource belongs.
   * 
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * Indicates the status of deletion protection. A value of true indicates that deletion protection is enabled and a value of false indicates that deletion protection is disabled.
   */
  protection?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 0527ac9a-c899-4341-a21a-xxxxxxxxx
   */
  requestId?: string;
  /**
   * @remarks
   * The type of resource for which deletion protection is enabled or disabled.
   */
  resourceType?: string;
  /**
   * @remarks
   * The list of resources whose deletion protection status is updated.
   */
  resources?: string[];
  static names(): { [key: string]: string } {
    return {
      namespace: 'namespace',
      protection: 'protection',
      requestId: 'requestId',
      resourceType: 'resource_type',
      resources: 'resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespace: 'string',
      protection: 'string',
      requestId: 'string',
      resourceType: 'string',
      resources: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourcesDeleteProtectionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateResourcesDeleteProtectionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateResourcesDeleteProtectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTemplateRequest extends $tea.Model {
  /**
   * @remarks
   * The description of the template.
   * 
   * @example
   * web server cluster
   */
  description?: string;
  /**
   * @remarks
   * The name of the template.
   * 
   * @example
   * webserver01
   */
  name?: string;
  /**
   * @remarks
   * The label of the template.
   * 
   * @example
   * web
   */
  tags?: string;
  /**
   * @remarks
   * The YAML content of the template.
   * 
   * @example
   * apiVersion: apps/v1\\\\nkind: Deployment\\\\nmetadata:\\\\n  name: nginx-deployment-basic\\\\n  labels:\\\\n    app: nginx\\\\nspec:\\\\n  replicas: 2\\\\n  selector:\\\\n    matchLabels:\\\\n      app: nginx\\\\n  template:\\\\n    metadata:\\\\n      labels:\\\\n        app: nginx\\\\n    spec:\\\\n      containers:\\\\n      - name: nginx\\\\n        image: busybox:latest\\\\n        ports:\\\\n        - containerPort: 8080
   */
  template?: string;
  /**
   * @remarks
   * The type of template. This parameter can be set to a custom value.
   * 
   * *   If the parameter is set to `kubernetes`, the template is displayed on the Templates page in the console.
   * *   If the parameter is set to `compose`, the template is displayed on the Container Service - Swarm page in the console. Container Service for Swarm is deprecated.
   * 
   * @example
   * kubernetes
   */
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      name: 'name',
      tags: 'tags',
      template: 'template',
      templateType: 'template_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      tags: 'string',
      template: 'string',
      templateType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTemplateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserPermissionsRequest extends $tea.Model {
  /**
   * @remarks
   * The request body.
   */
  body?: UpdateUserPermissionsRequestBody[];
  /**
   * @remarks
   * The authorization method. Valid values:
   * 
   * *   `apply`: updates all permissions of the RAM user or RAM role. If you use this method, the existing permissions of the RAM user or RAM role on the cluster are overwritten. You must specify all the permissions that you want to grant to the RAM user or RAM role in the request parameters when you call the operation.
   * *   `delete`: revokes the specified permissions from the RAM user or RAM role. If you use this method, only the permissions that you specify are revoked, other permissions of the RAM user or RAM role on the cluster are not affected.
   * *   `patch`: grants the specified permissions to the RAM user or role. If you use this method, only the permissions that you specify are granted, other permissions of the RAM user or RAM role on the cluster are not affected.
   * 
   * Default value: `apply`
   * 
   * @example
   * apply
   */
  mode?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      mode: 'mode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: { 'type': 'array', 'itemType': UpdateUserPermissionsRequestBody },
      mode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserPermissionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeClusterRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is discontinued.
   * 
   * @example
   * k8s
   * 
   * @deprecated
   */
  componentName?: string;
  /**
   * @remarks
   * Specifies whether to update only the master nodes. Valid values:
   * 
   * *   true: Updates only the master nodes.
   * *   false: Updates the master nodes and worker nodes.
   * 
   * @example
   * true
   */
  masterOnly?: boolean;
  /**
   * @remarks
   * The Kubernetes version to which you want to update the cluster.
   * 
   * @example
   * 1.16.9-aliyun.1
   */
  nextVersion?: string;
  rollingPolicy?: UpgradeClusterRequestRollingPolicy;
  /**
   * @remarks
   * This parameter is discontinued. Specify the Kubernetes version by using the next_version parameter.
   * 
   * @example
   * 1.14.8-aliyun.1
   * 
   * @deprecated
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      componentName: 'component_name',
      masterOnly: 'master_only',
      nextVersion: 'next_version',
      rollingPolicy: 'rolling_policy',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentName: 'string',
      masterOnly: 'boolean',
      nextVersion: 'string',
      rollingPolicy: UpgradeClusterRequestRollingPolicy,
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeClusterResponseBody extends $tea.Model {
  /**
   * @remarks
   * 集群ID。
   * 
   * @example
   * c82e6987e2961451182edacd74faf****
   */
  clusterId?: string;
  /**
   * @remarks
   * 请求ID。
   * 
   * @example
   * 0527ac9a-c899-4341-a21a-****
   */
  requestId?: string;
  /**
   * @remarks
   * 任务ID。
   * 
   * @example
   * T-5faa48fb31b6b8078d00****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'cluster_id',
      requestId: 'request_id',
      taskId: 'task_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      requestId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeClusterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpgradeClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpgradeClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeClusterAddonsRequest extends $tea.Model {
  /**
   * @remarks
   * The request parameters.
   */
  body?: UpgradeClusterAddonsRequestBody[];
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: { 'type': 'array', 'itemType': UpgradeClusterAddonsRequestBody },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeClusterAddonsResponseBody extends $tea.Model {
  clusterId?: string;
  requestId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'cluster_id',
      requestId: 'request_id',
      taskId: 'task_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      requestId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeClusterAddonsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpgradeClusterAddonsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpgradeClusterAddonsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeClusterNodepoolRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the OS image that is used by the nodes.
   * 
   * @example
   * aliyun_2_1903_x64_20G_alibase_20200529.vhd
   */
  imageId?: string;
  /**
   * @remarks
   * The Kubernetes version that is used by the nodes.
   * 
   * @example
   * 1.22.15-aliyun.1
   */
  kubernetesVersion?: string;
  nodeNames?: string[];
  rollingPolicy?: UpgradeClusterNodepoolRequestRollingPolicy;
  /**
   * @remarks
   * The runtime type. Valid values: containerd and docker.
   * 
   * @example
   * containerd
   */
  runtimeType?: string;
  /**
   * @remarks
   * The version of the container runtime that is used by the nodes.
   * 
   * @example
   * 1.5.10
   */
  runtimeVersion?: string;
  useReplace?: boolean;
  static names(): { [key: string]: string } {
    return {
      imageId: 'image_id',
      kubernetesVersion: 'kubernetes_version',
      nodeNames: 'node_names',
      rollingPolicy: 'rolling_policy',
      runtimeType: 'runtime_type',
      runtimeVersion: 'runtime_version',
      useReplace: 'use_replace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      kubernetesVersion: 'string',
      nodeNames: { 'type': 'array', 'itemType': 'string' },
      rollingPolicy: UpgradeClusterNodepoolRequestRollingPolicy,
      runtimeType: 'string',
      runtimeVersion: 'string',
      useReplace: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeClusterNodepoolResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2D69A58F-345C-4FDE-88E4-BF518944****
   */
  requestId?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * T-5fd211e924e1d0078700xxxx
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskId: 'task_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeClusterNodepoolResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpgradeClusterNodepoolResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpgradeClusterNodepoolResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NodepoolAutoScaling extends $tea.Model {
  /**
   * @example
   * 5
   * 
   * @deprecated
   */
  eipBandwidth?: number;
  /**
   * @example
   * PayByBandwidth
   * 
   * @deprecated
   */
  eipInternetChargeType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @example
   * true
   * 
   * @deprecated
   */
  isBondEip?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  maxInstances?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
   */
  minInstances?: number;
  /**
   * @example
   * cpu
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      eipBandwidth: 'eip_bandwidth',
      eipInternetChargeType: 'eip_internet_charge_type',
      enable: 'enable',
      isBondEip: 'is_bond_eip',
      maxInstances: 'max_instances',
      minInstances: 'min_instances',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eipBandwidth: 'number',
      eipInternetChargeType: 'string',
      enable: 'boolean',
      isBondEip: 'boolean',
      maxInstances: 'number',
      minInstances: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NodepoolInterconnectConfig extends $tea.Model {
  /**
   * @example
   * 10
   * 
   * @deprecated
   */
  bandwidth?: number;
  /**
   * @example
   * ccn-qm5i0i0q9yi*******
   * 
   * @deprecated
   */
  ccnId?: string;
  /**
   * @example
   * cn-shanghai
   * 
   * @deprecated
   */
  ccnRegionId?: string;
  /**
   * @example
   * cen-ey9k9nfhz0f*******
   * 
   * @deprecated
   */
  cenId?: string;
  /**
   * @example
   * 1
   * 
   * @deprecated
   */
  improvedPeriod?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'bandwidth',
      ccnId: 'ccn_id',
      ccnRegionId: 'ccn_region_id',
      cenId: 'cen_id',
      improvedPeriod: 'improved_period',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      ccnId: 'string',
      ccnRegionId: 'string',
      cenId: 'string',
      improvedPeriod: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NodepoolKubernetesConfig extends $tea.Model {
  /**
   * @example
   * true
   */
  cmsEnabled?: boolean;
  /**
   * @example
   * none
   */
  cpuPolicy?: string;
  labels?: Tag[];
  /**
   * @example
   * customized,test.,5,.com
   */
  nodeNameMode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * docker
   */
  runtime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 19.03.5
   */
  runtimeVersion?: string;
  taints?: Taint[];
  /**
   * @example
   * MXM=
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      cmsEnabled: 'cms_enabled',
      cpuPolicy: 'cpu_policy',
      labels: 'labels',
      nodeNameMode: 'node_name_mode',
      runtime: 'runtime',
      runtimeVersion: 'runtime_version',
      taints: 'taints',
      userData: 'user_data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cmsEnabled: 'boolean',
      cpuPolicy: 'string',
      labels: { 'type': 'array', 'itemType': Tag },
      nodeNameMode: 'string',
      runtime: 'string',
      runtimeVersion: 'string',
      taints: { 'type': 'array', 'itemType': Taint },
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NodepoolManagementAutoRepairPolicy extends $tea.Model {
  /**
   * @example
   * true
   */
  restartNode?: boolean;
  static names(): { [key: string]: string } {
    return {
      restartNode: 'restart_node',
    };
  }

  static types(): { [key: string]: any } {
    return {
      restartNode: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NodepoolManagementAutoUpgradePolicy extends $tea.Model {
  /**
   * @example
   * true
   */
  autoUpgradeKubelet?: boolean;
  static names(): { [key: string]: string } {
    return {
      autoUpgradeKubelet: 'auto_upgrade_kubelet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoUpgradeKubelet: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NodepoolManagementAutoVulFixPolicy extends $tea.Model {
  /**
   * @example
   * true
   */
  restartNode?: boolean;
  /**
   * @example
   * asap,nntf
   */
  vulLevel?: string;
  static names(): { [key: string]: string } {
    return {
      restartNode: 'restart_node',
      vulLevel: 'vul_level',
    };
  }

  static types(): { [key: string]: any } {
    return {
      restartNode: 'boolean',
      vulLevel: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NodepoolManagementUpgradeConfig extends $tea.Model {
  /**
   * @example
   * true
   */
  autoUpgrade?: boolean;
  /**
   * @example
   * 1
   */
  maxUnavailable?: number;
  /**
   * @example
   * 5
   */
  surge?: number;
  /**
   * @example
   * 50
   */
  surgePercentage?: number;
  static names(): { [key: string]: string } {
    return {
      autoUpgrade: 'auto_upgrade',
      maxUnavailable: 'max_unavailable',
      surge: 'surge',
      surgePercentage: 'surge_percentage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoUpgrade: 'boolean',
      maxUnavailable: 'number',
      surge: 'number',
      surgePercentage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NodepoolManagement extends $tea.Model {
  /**
   * @example
   * true
   */
  autoRepair?: boolean;
  autoRepairPolicy?: NodepoolManagementAutoRepairPolicy;
  /**
   * @example
   * true
   */
  autoUpgrade?: boolean;
  autoUpgradePolicy?: NodepoolManagementAutoUpgradePolicy;
  /**
   * @example
   * true
   */
  autoVulFix?: boolean;
  autoVulFixPolicy?: NodepoolManagementAutoVulFixPolicy;
  /**
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @deprecated
   */
  upgradeConfig?: NodepoolManagementUpgradeConfig;
  static names(): { [key: string]: string } {
    return {
      autoRepair: 'auto_repair',
      autoRepairPolicy: 'auto_repair_policy',
      autoUpgrade: 'auto_upgrade',
      autoUpgradePolicy: 'auto_upgrade_policy',
      autoVulFix: 'auto_vul_fix',
      autoVulFixPolicy: 'auto_vul_fix_policy',
      enable: 'enable',
      upgradeConfig: 'upgrade_config',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRepair: 'boolean',
      autoRepairPolicy: NodepoolManagementAutoRepairPolicy,
      autoUpgrade: 'boolean',
      autoUpgradePolicy: NodepoolManagementAutoUpgradePolicy,
      autoVulFix: 'boolean',
      autoVulFixPolicy: NodepoolManagementAutoVulFixPolicy,
      enable: 'boolean',
      upgradeConfig: NodepoolManagementUpgradeConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NodepoolNodeConfig extends $tea.Model {
  kubeletConfiguration?: KubeletConfig;
  static names(): { [key: string]: string } {
    return {
      kubeletConfiguration: 'kubelet_configuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      kubeletConfiguration: KubeletConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NodepoolNodepoolInfo extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * np-test
   */
  name?: string;
  /**
   * @example
   * rg-acfmyvw3wjm****
   */
  resourceGroupId?: string;
  /**
   * @example
   * ess
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      resourceGroupId: 'resource_group_id',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      resourceGroupId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NodepoolScalingGroupPrivatePoolOptions extends $tea.Model {
  id?: string;
  matchCriteria?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      matchCriteria: 'match_criteria',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      matchCriteria: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NodepoolScalingGroupSpotPriceLimit extends $tea.Model {
  /**
   * @example
   * ecs.c6.large
   */
  instanceType?: string;
  /**
   * @example
   * 0.39
   */
  priceLimit?: string;
  static names(): { [key: string]: string } {
    return {
      instanceType: 'instance_type',
      priceLimit: 'price_limit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'string',
      priceLimit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NodepoolScalingGroupTags extends $tea.Model {
  /**
   * @example
   * key
   */
  key?: string;
  /**
   * @example
   * value
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NodepoolScalingGroup extends $tea.Model {
  /**
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @example
   * 0
   */
  autoRenewPeriod?: number;
  /**
   * @example
   * true
   */
  compensateWithOnDemand?: boolean;
  dataDisks?: DataDisk[];
  /**
   * @example
   * ds-bp1d19mmbsv3jf6xxxxx
   */
  deploymentsetId?: string;
  /**
   * @example
   * 2
   */
  desiredSize?: number;
  /**
   * @example
   * aliyun_2_1903_x64_20G_alibase_20200904.vhd
   */
  imageId?: string;
  /**
   * @example
   * AliyunLinux
   */
  imageType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PostPaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  instanceTypes?: string[];
  /**
   * @example
   * PayByBandwidth
   */
  internetChargeType?: string;
  /**
   * @example
   * 10
   */
  internetMaxBandwidthOut?: number;
  /**
   * @example
   * np-key
   */
  keyPair?: string;
  loginAsNonRoot?: boolean;
  /**
   * @example
   * Hello1234,,
   */
  loginPassword?: string;
  /**
   * @example
   * COST_OPTIMIZED
   */
  multiAzPolicy?: string;
  /**
   * @example
   * 0
   */
  onDemandBaseCapacity?: number;
  /**
   * @example
   * 20
   */
  onDemandPercentageAboveBaseCapacity?: number;
  /**
   * @example
   * 0
   */
  period?: number;
  /**
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @example
   * AliyunLinux
   * 
   * @deprecated
   */
  platform?: string;
  privatePoolOptions?: NodepoolScalingGroupPrivatePoolOptions;
  /**
   * @example
   * example-role
   */
  ramRoleName?: string;
  rdsInstances?: string[];
  /**
   * @example
   * release
   */
  scalingPolicy?: string;
  /**
   * @example
   * sg-2zeihch86ooz9io4****
   */
  securityGroupId?: string;
  securityGroupIds?: string[];
  /**
   * @example
   * 5
   */
  spotInstancePools?: number;
  /**
   * @example
   * false
   */
  spotInstanceRemedy?: boolean;
  spotPriceLimit?: NodepoolScalingGroupSpotPriceLimit[];
  /**
   * @example
   * NoSpot
   */
  spotStrategy?: string;
  /**
   * @example
   * true
   */
  systemDiskBurstingEnabled?: boolean;
  systemDiskCategories?: string[];
  /**
   * @example
   * cloud_efficiency
   */
  systemDiskCategory?: string;
  /**
   * @example
   * aes-256
   */
  systemDiskEncryptAlgorithm?: string;
  systemDiskEncrypted?: boolean;
  /**
   * @example
   * 0e478b7a-4262-4802-b8cb-00d3fb40****
   */
  systemDiskKmsKeyId?: string;
  /**
   * @example
   * PL1
   */
  systemDiskPerformanceLevel?: string;
  /**
   * @example
   * 1000
   */
  systemDiskProvisionedIops?: number;
  /**
   * @example
   * 120
   */
  systemDiskSize?: number;
  tags?: NodepoolScalingGroupTags[];
  /**
   * @remarks
   * This parameter is required.
   */
  vswitchIds?: string[];
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'auto_renew',
      autoRenewPeriod: 'auto_renew_period',
      compensateWithOnDemand: 'compensate_with_on_demand',
      dataDisks: 'data_disks',
      deploymentsetId: 'deploymentset_id',
      desiredSize: 'desired_size',
      imageId: 'image_id',
      imageType: 'image_type',
      instanceChargeType: 'instance_charge_type',
      instanceTypes: 'instance_types',
      internetChargeType: 'internet_charge_type',
      internetMaxBandwidthOut: 'internet_max_bandwidth_out',
      keyPair: 'key_pair',
      loginAsNonRoot: 'login_as_non_root',
      loginPassword: 'login_password',
      multiAzPolicy: 'multi_az_policy',
      onDemandBaseCapacity: 'on_demand_base_capacity',
      onDemandPercentageAboveBaseCapacity: 'on_demand_percentage_above_base_capacity',
      period: 'period',
      periodUnit: 'period_unit',
      platform: 'platform',
      privatePoolOptions: 'private_pool_options',
      ramRoleName: 'ram_role_name',
      rdsInstances: 'rds_instances',
      scalingPolicy: 'scaling_policy',
      securityGroupId: 'security_group_id',
      securityGroupIds: 'security_group_ids',
      spotInstancePools: 'spot_instance_pools',
      spotInstanceRemedy: 'spot_instance_remedy',
      spotPriceLimit: 'spot_price_limit',
      spotStrategy: 'spot_strategy',
      systemDiskBurstingEnabled: 'system_disk_bursting_enabled',
      systemDiskCategories: 'system_disk_categories',
      systemDiskCategory: 'system_disk_category',
      systemDiskEncryptAlgorithm: 'system_disk_encrypt_algorithm',
      systemDiskEncrypted: 'system_disk_encrypted',
      systemDiskKmsKeyId: 'system_disk_kms_key_id',
      systemDiskPerformanceLevel: 'system_disk_performance_level',
      systemDiskProvisionedIops: 'system_disk_provisioned_iops',
      systemDiskSize: 'system_disk_size',
      tags: 'tags',
      vswitchIds: 'vswitch_ids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'boolean',
      autoRenewPeriod: 'number',
      compensateWithOnDemand: 'boolean',
      dataDisks: { 'type': 'array', 'itemType': DataDisk },
      deploymentsetId: 'string',
      desiredSize: 'number',
      imageId: 'string',
      imageType: 'string',
      instanceChargeType: 'string',
      instanceTypes: { 'type': 'array', 'itemType': 'string' },
      internetChargeType: 'string',
      internetMaxBandwidthOut: 'number',
      keyPair: 'string',
      loginAsNonRoot: 'boolean',
      loginPassword: 'string',
      multiAzPolicy: 'string',
      onDemandBaseCapacity: 'number',
      onDemandPercentageAboveBaseCapacity: 'number',
      period: 'number',
      periodUnit: 'string',
      platform: 'string',
      privatePoolOptions: NodepoolScalingGroupPrivatePoolOptions,
      ramRoleName: 'string',
      rdsInstances: { 'type': 'array', 'itemType': 'string' },
      scalingPolicy: 'string',
      securityGroupId: 'string',
      securityGroupIds: { 'type': 'array', 'itemType': 'string' },
      spotInstancePools: 'number',
      spotInstanceRemedy: 'boolean',
      spotPriceLimit: { 'type': 'array', 'itemType': NodepoolScalingGroupSpotPriceLimit },
      spotStrategy: 'string',
      systemDiskBurstingEnabled: 'boolean',
      systemDiskCategories: { 'type': 'array', 'itemType': 'string' },
      systemDiskCategory: 'string',
      systemDiskEncryptAlgorithm: 'string',
      systemDiskEncrypted: 'boolean',
      systemDiskKmsKeyId: 'string',
      systemDiskPerformanceLevel: 'string',
      systemDiskProvisionedIops: 'number',
      systemDiskSize: 'number',
      tags: { 'type': 'array', 'itemType': NodepoolScalingGroupTags },
      vswitchIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NodepoolTeeConfig extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * false
   */
  teeEnable?: boolean;
  static names(): { [key: string]: string } {
    return {
      teeEnable: 'tee_enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      teeEnable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachInstancesResponseBodyList extends $tea.Model {
  /**
   * @remarks
   * The code that indicates the task result.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The ID of the ECS instance.
   * 
   * @example
   * i-2ze0lgm3y6iylcbt****
   */
  instanceId?: string;
  /**
   * @remarks
   * Indicates whether the ECS instance is successfully added to the ACK cluster.
   * 
   * @example
   * successful
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      instanceId: 'instanceId',
      message: 'message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      instanceId: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckServiceRoleRequestRoles extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * AliyunCSManagedAutoScalerRole
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckServiceRoleResponseBodyRoles extends $tea.Model {
  /**
   * @example
   * true
   */
  granted?: boolean;
  /**
   * @example
   * The role does not exist: AliyunCSManagedAutoScalerRole
   */
  message?: string;
  /**
   * @example
   * AliyunCSManagedAutoScalerRole
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      granted: 'granted',
      message: 'message',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      granted: 'boolean',
      message: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterRequestWorkerDataDisks extends $tea.Model {
  /**
   * @remarks
   * The type of a data disk.
   * 
   * This parameter is required.
   * 
   * @example
   * cloud_essd
   */
  category?: string;
  /**
   * @remarks
   * Specifies whether to encrypt the data disk. Valid values:
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
   * The PL of the data disk. This parameter takes effect only for ESSDs. You can specify a higher PL if you increase the size of a data disk. For more information, see [ESSDs](https://help.aliyun.com/document_detail/122389.html).
   * 
   * @example
   * PL1
   */
  performanceLevel?: string;
  /**
   * @remarks
   * The size of the data disk. Valid values: 40 to 32767. Unit: GiB.
   * 
   * This parameter is required.
   * 
   * @example
   * 120
   */
  size?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      encrypted: 'encrypted',
      performanceLevel: 'performance_level',
      size: 'size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      encrypted: 'string',
      performanceLevel: 'string',
      size: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterNodePoolRequestAutoScaling extends $tea.Model {
  /**
   * @remarks
   * This parameter is discontinued.
   * 
   * The maximum bandwidth of the EIP. Unit: Mbit/s.
   * 
   * **
   * 
   * **Important** This parameter is discontinued. Use internet_charge_type and internet_max_bandwidth_out.
   * 
   * @example
   * 5
   * 
   * @deprecated
   */
  eipBandwidth?: number;
  /**
   * @remarks
   * This parameter is discontinued.
   * 
   * The billing method of the EIP. Valid values:
   * 
   * *   `PayByBandwidth`: pay-by-bandwidth
   * *   `PayByTraffic`: pay-by-data-transfer
   * 
   * Default value: `PayByBandwidth`.
   * 
   * **
   * 
   * **Important** This parameter is discontinued. Use internet_charge_type and internet_max_bandwidth_out.
   * 
   * @example
   * PayByBandwidth
   * 
   * @deprecated
   */
  eipInternetChargeType?: string;
  /**
   * @remarks
   * Specifies whether to enable auto scaling for the node pool. Valid values:
   * 
   * *   `true`
   * *   `false`: If you set this parameter to false, other parameters of `auto_scaling` object do not take effect.
   * 
   * Default value: `false`.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * This parameter is discontinued.
   * 
   * Specifies whether to associate an elastic IP address (EIP) with the node pool. Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * Default value: `false`.
   * 
   * **
   * 
   * **Important** This parameter is discontinued. Use internet_charge_type and internet_max_bandwidth_out.
   * 
   * @example
   * true
   * 
   * @deprecated
   */
  isBondEip?: boolean;
  /**
   * @remarks
   * The maximum number of instances that can be automatically scaled. The number of nodes in the node pool cannot be greater than this value. This parameter takes effect only if `enable` is set to true. Valid values: [min_instances, 2000]. Default value: 0.
   * 
   * @example
   * 10
   */
  maxInstances?: number;
  /**
   * @remarks
   * The minimum number of instances that can be automatically scaled. The number of nodes in the node pool cannot be smaller than this value. This parameter takes effect only if `enable` is set to true. Valid values: [0, max_instances]. Default value: 0.
   * 
   * @example
   * 1
   */
  minInstances?: number;
  /**
   * @remarks
   * The type of instances that are automatically scaled. This parameter takes effect only if `enable` is set to true. Valid values:
   * 
   * *   `cpu`: regular instance
   * *   `gpu`: GPU-accelerated instance
   * *   `gpushare`: shared GPU-accelerated instance
   * *   `spot`: preemptible instance
   * 
   * Default value: `cpu`.
   * 
   * >  You cannot modify this parameter after the node pool is created.
   * 
   * @example
   * cpu
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      eipBandwidth: 'eip_bandwidth',
      eipInternetChargeType: 'eip_internet_charge_type',
      enable: 'enable',
      isBondEip: 'is_bond_eip',
      maxInstances: 'max_instances',
      minInstances: 'min_instances',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eipBandwidth: 'number',
      eipInternetChargeType: 'string',
      enable: 'boolean',
      isBondEip: 'boolean',
      maxInstances: 'number',
      minInstances: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterNodePoolRequestInterconnectConfig extends $tea.Model {
  /**
   * @remarks
   * This parameter is discontinued.
   * 
   * The bandwidth of the enhanced edge node pool. Unit: Mbit/s.
   * 
   * @example
   * 10
   */
  bandwidth?: number;
  /**
   * @remarks
   * This parameter is discontinued.
   * 
   * The ID of the Cloud Connect Network (CCN) instance that is associated with the enhanced edge node pool.
   * 
   * @example
   * ccn-qm5i0i0q9yi*******
   */
  ccnId?: string;
  /**
   * @remarks
   * This parameter is discontinued.
   * 
   * The region in which the CCN instance that is associated with the enhanced edge node pool resides.
   * 
   * @example
   * cn-shanghai
   */
  ccnRegionId?: string;
  /**
   * @remarks
   * This parameter is discontinued.
   * 
   * The ID of the Cloud Enterprise Network (CEN) instance that is associated with the enhanced edge node pool.
   * 
   * @example
   * cen-ey9k9nfhz0f*******
   */
  cenId?: string;
  /**
   * @remarks
   * This parameter is discontinued.
   * 
   * The subscription duration of the enhanced edge node pool. Unit: months.
   * 
   * @example
   * 1
   */
  improvedPeriod?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'bandwidth',
      ccnId: 'ccn_id',
      ccnRegionId: 'ccn_region_id',
      cenId: 'cen_id',
      improvedPeriod: 'improved_period',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      ccnId: 'string',
      ccnRegionId: 'string',
      cenId: 'string',
      improvedPeriod: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterNodePoolRequestKubernetesConfig extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to install the CloudMonitor agent on ECS nodes. After the CloudMonitor agent is installed on ECS nodes, you can view the monitoring information about the instances in the CloudMonitor console. We recommend that you install the CloudMonitor agent. Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * Default value: `false`.
   * 
   * @example
   * true
   */
  cmsEnabled?: boolean;
  /**
   * @remarks
   * The CPU management policy of the nodes in the node pool. The following policies are supported if the version of the cluster is Kubernetes 1.12.6 or later:
   * 
   * *   `static`: allows pods with specific resource characteristics on the node to be granted enhanced CPU affinity and exclusivity.
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
   * The labels that you want to add to the nodes in the cluster.
   */
  labels?: Tag[];
  /**
   * @remarks
   * The custom node name. A custom node name consists of a prefix, a node IP address, and a suffix.
   * 
   * *   The prefix and suffix can contain multiple parts that are separated by periods (.). Each part can contain lowercase letters, digits, and hyphens (-). A custom node name must start and end with a digit or lowercase letter.
   * *   The node IP address is the complete private IP address of the node.
   * 
   * Set the parameter to a value that is in the customized,aliyun,ip,com format. The value consists of four parts that are separated by commas (,). customized and ip are fixed content. aliyun is the prefix and com is the suffix. Example: aliyun.192.168.xxx.xxx.com.
   * 
   * @example
   * customized,aliyun,ip,com
   */
  nodeNameMode?: string;
  /**
   * @remarks
   * The container runtime.
   * 
   * @example
   * docker
   */
  runtime?: string;
  /**
   * @remarks
   * The version of the container runtime.
   * 
   * @example
   * 19.03.5
   */
  runtimeVersion?: string;
  /**
   * @remarks
   * The taint configurations.
   */
  taints?: Taint[];
  /**
   * @remarks
   * Specifies whether the nodes are schedulable after a scale-out operation is performed.
   * 
   * @example
   * true
   */
  unschedulable?: boolean;
  /**
   * @remarks
   * The user-defined data on nodes.
   * 
   * @example
   * dGhpcyBpcyBhIGV4YW1wbGU=
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      cmsEnabled: 'cms_enabled',
      cpuPolicy: 'cpu_policy',
      labels: 'labels',
      nodeNameMode: 'node_name_mode',
      runtime: 'runtime',
      runtimeVersion: 'runtime_version',
      taints: 'taints',
      unschedulable: 'unschedulable',
      userData: 'user_data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cmsEnabled: 'boolean',
      cpuPolicy: 'string',
      labels: { 'type': 'array', 'itemType': Tag },
      nodeNameMode: 'string',
      runtime: 'string',
      runtimeVersion: 'string',
      taints: { 'type': 'array', 'itemType': Taint },
      unschedulable: 'boolean',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterNodePoolRequestManagementAutoRepairPolicy extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to allow node restart. This parameter takes effect only if `auto_repair` is set to true. Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * If `auto_repair` is set to true, the default value of this parameter is `true`. If `auto_repair` is set to false, the default value of this parameter is `false`.
   * 
   * @example
   * true
   */
  restartNode?: boolean;
  static names(): { [key: string]: string } {
    return {
      restartNode: 'restart_node',
    };
  }

  static types(): { [key: string]: any } {
    return {
      restartNode: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterNodePoolRequestManagementAutoUpgradePolicy extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to allow auto update of the kubelet. This parameter takes effect only if `auto_upgrade` is set to true. Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * If `auto_upgrade` is set to true, the default value of this parameter is `true`. If `auto_upgrade` is set to false, the default value of this parameter is `false`.
   * 
   * @example
   * true
   */
  autoUpgradeKubelet?: boolean;
  /**
   * @remarks
   * 是否允许自动升级操作系统，仅当`auto_upgrade=true`时生效。取值：
   * - `true`：允许自动升级操作系统。
   * - `false`：不允许自动升级操作系统。
   * 
   * 
   * 默认值为`false`
   */
  autoUpgradeOs?: boolean;
  /**
   * @remarks
   * 是否允许自动升级运行时，仅当`auto_upgrade=true`时生效。取值：
   * - `true`：允许自动升级运行时。
   * - `false`：不允许自动升级运行时。
   * 
   * 默认值为`false`
   */
  autoUpgradeRuntime?: boolean;
  static names(): { [key: string]: string } {
    return {
      autoUpgradeKubelet: 'auto_upgrade_kubelet',
      autoUpgradeOs: 'auto_upgrade_os',
      autoUpgradeRuntime: 'auto_upgrade_runtime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoUpgradeKubelet: 'boolean',
      autoUpgradeOs: 'boolean',
      autoUpgradeRuntime: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterNodePoolRequestManagementAutoVulFixPolicy extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to allow node restart. This parameter takes effect only if `auto_vul_fix` is set to true. Valid values:
   * 
   * *   `true`
   * *   `false` If `auto_vul_fix` is set to true, the default value of this parameter is `false`. If `auto_vul_fix` is set to false, the default value of this parameter is `false`.
   * 
   * @example
   * true
   */
  restartNode?: boolean;
  /**
   * @remarks
   * The level of CVEs that can be automatically patched. Separate multiple levels with commas (,). Example: `asap,later`. Valid values:
   * 
   * *   `asap`: high
   * *   `later`: medium
   * *   `nntf`: low
   * 
   * If `auto_vul_fix` is set to true, the default value of this parameter is `asap`.
   * 
   * @example
   * asap,nntf
   */
  vulLevel?: string;
  static names(): { [key: string]: string } {
    return {
      restartNode: 'restart_node',
      vulLevel: 'vul_level',
    };
  }

  static types(): { [key: string]: any } {
    return {
      restartNode: 'boolean',
      vulLevel: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterNodePoolRequestManagementUpgradeConfig extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to enable auto update. Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * **
   * 
   * **Important** This parameter is discontinued. Use the preceding auto_upgrade parameter.
   * 
   * @example
   * false
   * 
   * @deprecated
   */
  autoUpgrade?: boolean;
  /**
   * @remarks
   * The maximum number of unavailable nodes. Valid values: 1 to 1000.
   * 
   * Default value: 1
   * 
   * @example
   * 1
   */
  maxUnavailable?: number;
  /**
   * @remarks
   * The number of additional nodes.
   * 
   * @example
   * 0
   */
  surge?: number;
  /**
   * @remarks
   * The percentage of additional nodes to the total nodes in the node pool. You must specify this parameter or the `surge` parameter.
   * 
   * @example
   * 0
   */
  surgePercentage?: number;
  static names(): { [key: string]: string } {
    return {
      autoUpgrade: 'auto_upgrade',
      maxUnavailable: 'max_unavailable',
      surge: 'surge',
      surgePercentage: 'surge_percentage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoUpgrade: 'boolean',
      maxUnavailable: 'number',
      surge: 'number',
      surgePercentage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterNodePoolRequestManagement extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to enable auto node repair. This parameter takes effect only if `enable` is set to true.
   * 
   * *   `true`
   * *   `false`
   * 
   * If `enable` is set to true, the default value of this parameter is `true`. If `enable` is set to false, the default value of this parameter is `false`.
   * 
   * @example
   * false
   */
  autoRepair?: boolean;
  /**
   * @remarks
   * The auto node repair policy.
   */
  autoRepairPolicy?: CreateClusterNodePoolRequestManagementAutoRepairPolicy;
  /**
   * @remarks
   * Specifies whether to enable auto node update. This parameter takes effect only if `enable` is set to true.
   * 
   * *   `true`
   * *   `false`
   * 
   * If `enable` is set to true, the default value of this parameter is `true`. If `enable` is set to false, the default value of this parameter is `false`.
   * 
   * @example
   * true
   */
  autoUpgrade?: boolean;
  /**
   * @remarks
   * The auto node update policy.
   */
  autoUpgradePolicy?: CreateClusterNodePoolRequestManagementAutoUpgradePolicy;
  /**
   * @remarks
   * Specifies whether to enable auto CVE patching. This parameter takes effect only if `enable` is set to true.
   * 
   * *   `true`
   * *   `false`
   * 
   * If `enable` is set to true, the default value of this parameter is `true`. If `enable` is set to false, the default value of this parameter is `false`.
   * 
   * @example
   * true
   */
  autoVulFix?: boolean;
  /**
   * @remarks
   * The auto CVE patching policy.
   */
  autoVulFixPolicy?: CreateClusterNodePoolRequestManagementAutoVulFixPolicy;
  /**
   * @remarks
   * Specifies whether to enable the managed node pool feature. Valid values:
   * 
   * *   `true`
   * *   `false`: If you set this parameter to false, other parameters of management do not take effect.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  enable?: boolean;
  /**
   * @remarks
   * The configurations of auto update. This parameter takes effect only if `enable` is set to true.
   * 
   * @deprecated
   */
  upgradeConfig?: CreateClusterNodePoolRequestManagementUpgradeConfig;
  static names(): { [key: string]: string } {
    return {
      autoRepair: 'auto_repair',
      autoRepairPolicy: 'auto_repair_policy',
      autoUpgrade: 'auto_upgrade',
      autoUpgradePolicy: 'auto_upgrade_policy',
      autoVulFix: 'auto_vul_fix',
      autoVulFixPolicy: 'auto_vul_fix_policy',
      enable: 'enable',
      upgradeConfig: 'upgrade_config',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRepair: 'boolean',
      autoRepairPolicy: CreateClusterNodePoolRequestManagementAutoRepairPolicy,
      autoUpgrade: 'boolean',
      autoUpgradePolicy: CreateClusterNodePoolRequestManagementAutoUpgradePolicy,
      autoVulFix: 'boolean',
      autoVulFixPolicy: CreateClusterNodePoolRequestManagementAutoVulFixPolicy,
      enable: 'boolean',
      upgradeConfig: CreateClusterNodePoolRequestManagementUpgradeConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterNodePoolRequestNodeConfig extends $tea.Model {
  /**
   * @remarks
   * The parameter settings of the kubelet.
   */
  kubeletConfiguration?: KubeletConfig;
  static names(): { [key: string]: string } {
    return {
      kubeletConfiguration: 'kubelet_configuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      kubeletConfiguration: KubeletConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterNodePoolRequestNodepoolInfo extends $tea.Model {
  /**
   * @remarks
   * The name of the node pool.
   * 
   * This parameter is required.
   * 
   * @example
   * cluster-demo
   */
  name?: string;
  /**
   * @remarks
   * The ID of the resource group. Instances that are added to the node pool belong to this resource group.
   * 
   * @example
   * rg-acfmyvw3wjmb****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The type of the node pool. Valid values:
   * 
   * *   `ess`: regular node pool, which supports the managed node pool feature and auto scaling feature.
   * *   `edge`: edge node pool.
   * *   `lingjun`: Lingjun node pool.
   * 
   * @example
   * ess
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      resourceGroupId: 'resource_group_id',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      resourceGroupId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterNodePoolRequestScalingGroupPrivatePoolOptions extends $tea.Model {
  /**
   * @remarks
   * The ID of the private node pool.
   * 
   * @example
   * eap-bp67acfmxazb4****
   */
  id?: string;
  /**
   * @remarks
   * The type of the private node pool. This parameter specifies the type of private node pool that is used to create instances. A private node pool is generated when an elasticity assurance or a capacity reservation service takes effect. The system selects a private node pool to launch instances. Valid values:
   * 
   * *   `Open`: uses open private pool. The system selects an open private pool to start instances. If no matching open private node pool is available, the resources in the public node pool are used.
   * *   `Target`: uses the specified private node pool. The system uses the resources of the specified private pool to start instances. If the specified private pool is unavailable, instances cannot be started.
   * *   `None`: No private pool is used. The resources of private pools are not used to start instances.
   * 
   * @example
   * Open
   */
  matchCriteria?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      matchCriteria: 'match_criteria',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      matchCriteria: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterNodePoolRequestScalingGroupSpotPriceLimit extends $tea.Model {
  /**
   * @remarks
   * The instance type of preemptible instance.
   * 
   * @example
   * ecs.c6.large
   */
  instanceType?: string;
  /**
   * @remarks
   * The price cap of a preemptible instance of the type.
   * 
   * @example
   * 0.39
   */
  priceLimit?: string;
  static names(): { [key: string]: string } {
    return {
      instanceType: 'instance_type',
      priceLimit: 'price_limit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'string',
      priceLimit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterNodePoolRequestScalingGroupTags extends $tea.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * node-k-1
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * node-v-1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterNodePoolRequestScalingGroup extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to enable auto-renewal for the nodes in the node pool. This parameter takes effect only if you set `instance_charge_type` to `PrePaid`. Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * Default value: `true`.
   * 
   * @example
   * true
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The duration of the auto-renewal. This parameter takes effect and is required only if you set instance_charge_type to PrePaid and auto_renew to true. Valid values if `period_unit` is set to Month: 1, 2, 3, 6, and 12.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  autoRenewPeriod?: number;
  /**
   * @remarks
   * Specifies whether to enable Center for Internet Security (CIS) reinforcement. CIS reinforcement can be enabled only if Alibaba Cloud Linux 2 or Alibaba Cloud Linux 3 is installed on nodes.
   * 
   * @example
   * false
   * 
   * @deprecated
   */
  cisEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to automatically create pay-as-you-go instances to meet the required number of ECS instances if preemptible instances cannot be created due to reasons such as the cost or insufficient inventory. This parameter takes effect if you set `multi_az_policy` to `COST_OPTIMIZED`. Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * @example
   * true
   */
  compensateWithOnDemand?: boolean;
  /**
   * @remarks
   * The configurations of the data disks that are mounted to the nodes in the node pool.
   */
  dataDisks?: DataDisk[];
  /**
   * @remarks
   * The deployment set ID.
   * 
   * @example
   * ds-bp1d19mmbsv3jf6xxxxx
   */
  deploymentsetId?: string;
  /**
   * @remarks
   * The expected number of nodes in the node pool.
   * 
   * @example
   * 0
   */
  desiredSize?: number;
  /**
   * @remarks
   * The custom image ID. By default, the image provided by the system is used.
   * 
   * @example
   * aliyun_2_1903_x64_20G_alibase_20200529.vhd
   */
  imageId?: string;
  /**
   * @remarks
   * The type of the operating system image. You must specify this parameter or the `platform` parameter. Valid values:
   * 
   * *   `AliyunLinux`: Alinux2
   * *   `AliyunLinux3`: Alinux3
   * *   `AliyunLinux3Arm64`: Alinux3 ARM
   * *   `AliyunLinuxUEFI`: Alinux2 UEFI
   * *   `CentOS`
   * *   `Windows`
   * *   `WindowsCore`: Windows Core
   * *   `ContainerOS`
   * 
   * @example
   * AliyunLinux
   */
  imageType?: string;
  /**
   * @remarks
   * The billing method of the nodes in the node pool. Valid values:
   * 
   * *   `PrePaid`: subscription
   * *   `PostPaid`: pay-as-you-go
   * 
   * Default value: `PostPaid`.
   * 
   * This parameter is required.
   * 
   * @example
   * PrePaid
   */
  instanceChargeType?: string;
  instancePatterns?: InstancePatterns[];
  /**
   * @remarks
   * The instance types of nodes in the node pool. A node that is added to the node pool is assigned one of the specified instance types that is the most appropriate. You can specify 1 to 10 instance types.
   * 
   * >  To ensure high availability, we recommend that you specify multiple instance types.
   * 
   * This parameter is required.
   */
  instanceTypes?: string[];
  /**
   * @remarks
   * The billing method of the public IP address. Valid values:
   * 
   * *   PayByBandwidth: pay-by-bandwidth
   * *   PayByTraffic: pay-by-data-transfer
   * 
   * @example
   * PayByTraffic
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The maximum outbound bandwidth of the public IP address. Unit: Mbit/s. Valid values: 1 to 100.
   * 
   * @example
   * 5
   */
  internetMaxBandwidthOut?: number;
  /**
   * @remarks
   * The name of the key pair. You must specify this parameter or the `login_password` parameter.
   * 
   * >  If you want to create a managed node pool, you must specify `key_pair`.
   * 
   * @example
   * np-key-name
   */
  keyPair?: string;
  /**
   * @remarks
   * Specifies whether a non-root user can log on to the ECS instance that is added to the node pool.
   * 
   * @example
   * true
   */
  loginAsNonRoot?: boolean;
  /**
   * @remarks
   * The password for SSH logon. You must specify this parameter or the `key_pair` parameter. The password must be 8 to 30 characters in length, and must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.
   * 
   * @example
   * Hello1234
   */
  loginPassword?: string;
  /**
   * @remarks
   * The ECS instance scaling policy for the multi-zone scaling group. Valid values:
   * 
   * *   `PRIORITY`: ECS instances are created based on the VSwitchIds.N parameter. If Auto Scaling fails to create an ECS instance in the zone of the vSwitch that has the highest priority, Auto Scaling attempts to create the ECS instance in the zone of the vSwitch that has a lower priority.
   * 
   * *   `COST_OPTIMIZED`: ECS instances are created based on the vCPU unit price in ascending order. Preemptible instances are preferably created when preemptible instance types are specified in the scaling configurations. You can specify `CompensateWithOnDemand` to specify whether to automatically create pay-as-you-go instances if preemptible instances cannot be created due to insufficient resources.
   * 
   *     **
   * 
   *     **Note** `COST_OPTIMIZED` takes effect only if multiple instance types are specified or at least one preemptible instance type is specified.
   * 
   * *   `BALANCE`: ECS instances are evenly distributed across multiple zones specified by the scaling group. If the distribution of ECS instances across zones is not balanced due to reasons such as insufficient inventory, you can call the [RebalanceInstances](https://help.aliyun.com/document_detail/71516.html) operation to evenly distribute the ECS instances across zones.
   * 
   * Default value: `PRIORITY`.
   * 
   * @example
   * COST_OPTIMIZED
   */
  multiAzPolicy?: string;
  /**
   * @remarks
   * The minimum number of pay-as-you-go instances that must be kept in the scaling group. Valid values: 0 to 1000. If the number of pay-as-you-go instances is smaller than the value of this parameter, Auto Scaling preferably creates pay-as-you-go instances.
   * 
   * @example
   * 0
   */
  onDemandBaseCapacity?: number;
  /**
   * @remarks
   * The percentage of pay-as-you-go instances among the extra instances that exceed the number specified by `on_demand_base_capacity`. Valid values: 0 to 100.
   * 
   * @example
   * 20
   */
  onDemandPercentageAboveBaseCapacity?: number;
  /**
   * @remarks
   * The subscription duration of the nodes in the node pool. This parameter takes effect and is required if you set `instance_charge_type` to `PrePaid`.
   * 
   * *   If `period_unit` is set to Week, the valid values of `period` are 1, 2, 3, and 4.
   * *   If `period_unit` is set to Month, the valid values of `period` are 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36, 48, and 60.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The billing cycle of the nodes in the node pool. This parameter takes effect and is required if you set `instance_charge_type` to `PrePaid`. Valid values:
   * 
   * *   `Month`: The subscription duration is measured in months.
   * *   `Week`: The subscription duration is measured in weeks.
   * 
   * Default value: `Month`.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * The operating system distribution. Valid values:
   * 
   * *   `CentOS`
   * *   `AliyunLinux`
   * *   `Windows`
   * *   `WindowsCore`
   * 
   * Default value: `AliyunLinux`.
   * 
   * @example
   * AliyunLinux
   * 
   * @deprecated
   */
  platform?: string;
  /**
   * @remarks
   * The configurations of the private node pool.
   */
  privatePoolOptions?: CreateClusterNodePoolRequestScalingGroupPrivatePoolOptions;
  /**
   * @example
   * example-role
   */
  ramRoleName?: string;
  /**
   * @remarks
   * The ApsaraDB RDS instances.
   */
  rdsInstances?: string[];
  /**
   * @remarks
   * The scaling mode of the scaling group. Valid values:
   * 
   * *   `release`: the standard mode. ECS instances are created and released based on the resource usage.
   * *   `recycle`: the swift mode. ECS instances are created, stopped, or started during scaling events. This reduces the time required for the next scale-out event. When the instance is stopped, you are charged only for the storage service. This does not apply to ECS instances that are attached with local disks.
   * 
   * Default value: `release`.
   * 
   * @example
   * release
   */
  scalingPolicy?: string;
  /**
   * @remarks
   * The ID of the security group to which you want to add the node pool. You must specify this parameter or the `security_group_ids` parameter. We recommend that you specify `security_group_ids`.
   * 
   * @example
   * sg-wz9a8g2mt6x5llu0****
   * 
   * @deprecated
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The security group IDs. You must specify this parameter or the `security_group_id` parameter. We recommend that you specify `security_group_ids`. If you specify both `security_group_id` and `security_group_ids`, `security_group_ids` is used.
   */
  securityGroupIds?: string[];
  /**
   * @remarks
   * 阿里云OS安全加固。取值：
   * 
   * - `true`：开启阿里云OS安全加固。
   * - `false`：不开启阿里云OS安全加固。
   * 
   * 默认值：`false`。
   */
  securityHardeningOs?: boolean;
  /**
   * @remarks
   * Specifies whether to enable reinforcement based on classified protection. You can enable reinforcement based on classified protection only if Alibaba Cloud Linux 2 or Alibaba Cloud Linux 3 is installed on nodes. Alibaba Cloud provides standards for baseline check and a scanner to ensure the compliance of Alibaba Cloud Linux 2 and Alibaba Cloud Linux 3 images with the level 3 standards of classified protection.
   * 
   * @example
   * false
   */
  socEnabled?: boolean;
  /**
   * @remarks
   * The number of instance types that are available for creating preemptible instances. Auto Scaling creates preemptible instances of multiple instance types that are available at the lowest cost. Valid values: 1 to 10.
   * 
   * @example
   * 5
   */
  spotInstancePools?: number;
  /**
   * @remarks
   * Specifies whether to enable the supplementation of preemptible instances. If the supplementation of preemptible instances is enabled, when the scaling group receives a system message that a preemptible instance is to be reclaimed, the scaling group attempts to create a new instance to replace this instance. Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * @example
   * false
   */
  spotInstanceRemedy?: boolean;
  /**
   * @remarks
   * The instance type of preemptible instance and the price cap for the instance type.
   */
  spotPriceLimit?: CreateClusterNodePoolRequestScalingGroupSpotPriceLimit[];
  /**
   * @remarks
   * The bidding policy of preemptible instances. Valid values:
   * 
   * *   `NoSpot`: non-preemptible.
   * *   `SpotWithPriceLimit`: specifies the highest bid.
   * *   `SpotAsPriceGo`: automatically submits bids based on the up-to-date market price.
   * 
   * For more information, see [Use preemptible instances](https://help.aliyun.com/document_detail/165053.html).
   * 
   * @example
   * NoSpot
   */
  spotStrategy?: string;
  /**
   * @remarks
   * Specifies whether to enable the burst feature for the system disk. Valid values:
   * 
   * *   true
   * *   false
   * 
   * This parameter is available only if `SystemDiskCategory` is set to `cloud_auto`. For more information, see [ESSD AutoPL disks](https://help.aliyun.com/document_detail/368372.html).
   * 
   * @example
   * true
   */
  systemDiskBurstingEnabled?: boolean;
  /**
   * @remarks
   * The system disk types. The system attempts to create system disks of a disk type with a lower priority if the disk type with a higher priority is unavailable. Valid values: cloud: disk cloud_efficiency: ultra disk cloud_ssd: standard SSD cloud_essd: ESSD
   */
  systemDiskCategories?: string[];
  /**
   * @remarks
   * The system disk type. Valid values:
   * 
   * *   `cloud_efficiency`: ultra disk
   * *   `cloud_ssd`: standard SSD
   * *   `cloud_essd`: Enterprise SSD (ESSD)
   * 
   * Default value: `cloud_efficiency`.
   * 
   * @example
   * cloud_efficiency
   */
  systemDiskCategory?: string;
  /**
   * @remarks
   * The encryption algorithm that is used to encrypt the system disk. Set the value to aes-256.
   * 
   * @example
   * aes-256
   */
  systemDiskEncryptAlgorithm?: string;
  /**
   * @remarks
   * Specifies whether to encrypt the system disk. Valid values: true false
   * 
   * @example
   * false
   */
  systemDiskEncrypted?: boolean;
  /**
   * @remarks
   * The ID of the Key Management Service (KMS) key that is used to encrypt the system disk.
   * 
   * @example
   * 0e478b7a-4262-4802-b8cb-00d3fb40****
   */
  systemDiskKmsKeyId?: string;
  /**
   * @remarks
   * The performance level (PL) of the system disk. This parameter takes effect only for an ESSD. Valid values:
   * 
   * *   PL0: moderate maximum concurrent I/O performance and low I/O latency
   * *   PL1: moderate maximum concurrent I/O performance and low I/O latency
   * *   PL2: high maximum concurrent I/O performance and low I/O latency
   * *   PL3: ultra-high maximum concurrent I/O performance and ultra-low I/O latency
   * 
   * >  Disks support all of the preceding PLs. However, when you create a disk, the available PLs vary based on the Elastic Compute Service (ECS) instance type that you selected. For more information, see [Overview of ECS instance families](https://help.aliyun.com/document_detail/25378.html).
   * 
   * @example
   * PL1
   */
  systemDiskPerformanceLevel?: string;
  /**
   * @remarks
   * The preset IOPS of the system disk. Valid values: 0 to min{50,000, 1,000 × Capacity - Baseline IOPS}. Baseline IOPS = min{1,800 + 50 × Capacity, 50,000}.
   * 
   * This parameter is available only if `SystemDiskCategory` is set to `cloud_auto`. For more information, see [ESSD AutoPL disks](https://help.aliyun.com/document_detail/368372.html).
   * 
   * @example
   * 1000
   */
  systemDiskProvisionedIops?: number;
  /**
   * @remarks
   * The size of the system disk. Unit: GiB.
   * 
   * Valid values: 20 to 20,248.
   * 
   * @example
   * 120
   */
  systemDiskSize?: number;
  /**
   * @remarks
   * The tag that you want to add only to ECS instances.
   * 
   * The tag key must be unique and can be up to 128 characters in length. The tag key and value cannot start with aliyun or acs: or contain https:// or http://.
   */
  tags?: CreateClusterNodePoolRequestScalingGroupTags[];
  /**
   * @remarks
   * Th vSwitch IDs. You can specify one to eight vSwitch IDs.
   * 
   * >  To ensure high availability, we recommend that you select vSwitches in different zones.
   * 
   * This parameter is required.
   */
  vswitchIds?: string[];
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'auto_renew',
      autoRenewPeriod: 'auto_renew_period',
      cisEnabled: 'cis_enabled',
      compensateWithOnDemand: 'compensate_with_on_demand',
      dataDisks: 'data_disks',
      deploymentsetId: 'deploymentset_id',
      desiredSize: 'desired_size',
      imageId: 'image_id',
      imageType: 'image_type',
      instanceChargeType: 'instance_charge_type',
      instancePatterns: 'instance_patterns',
      instanceTypes: 'instance_types',
      internetChargeType: 'internet_charge_type',
      internetMaxBandwidthOut: 'internet_max_bandwidth_out',
      keyPair: 'key_pair',
      loginAsNonRoot: 'login_as_non_root',
      loginPassword: 'login_password',
      multiAzPolicy: 'multi_az_policy',
      onDemandBaseCapacity: 'on_demand_base_capacity',
      onDemandPercentageAboveBaseCapacity: 'on_demand_percentage_above_base_capacity',
      period: 'period',
      periodUnit: 'period_unit',
      platform: 'platform',
      privatePoolOptions: 'private_pool_options',
      ramRoleName: 'ram_role_name',
      rdsInstances: 'rds_instances',
      scalingPolicy: 'scaling_policy',
      securityGroupId: 'security_group_id',
      securityGroupIds: 'security_group_ids',
      securityHardeningOs: 'security_hardening_os',
      socEnabled: 'soc_enabled',
      spotInstancePools: 'spot_instance_pools',
      spotInstanceRemedy: 'spot_instance_remedy',
      spotPriceLimit: 'spot_price_limit',
      spotStrategy: 'spot_strategy',
      systemDiskBurstingEnabled: 'system_disk_bursting_enabled',
      systemDiskCategories: 'system_disk_categories',
      systemDiskCategory: 'system_disk_category',
      systemDiskEncryptAlgorithm: 'system_disk_encrypt_algorithm',
      systemDiskEncrypted: 'system_disk_encrypted',
      systemDiskKmsKeyId: 'system_disk_kms_key_id',
      systemDiskPerformanceLevel: 'system_disk_performance_level',
      systemDiskProvisionedIops: 'system_disk_provisioned_iops',
      systemDiskSize: 'system_disk_size',
      tags: 'tags',
      vswitchIds: 'vswitch_ids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'boolean',
      autoRenewPeriod: 'number',
      cisEnabled: 'boolean',
      compensateWithOnDemand: 'boolean',
      dataDisks: { 'type': 'array', 'itemType': DataDisk },
      deploymentsetId: 'string',
      desiredSize: 'number',
      imageId: 'string',
      imageType: 'string',
      instanceChargeType: 'string',
      instancePatterns: { 'type': 'array', 'itemType': InstancePatterns },
      instanceTypes: { 'type': 'array', 'itemType': 'string' },
      internetChargeType: 'string',
      internetMaxBandwidthOut: 'number',
      keyPair: 'string',
      loginAsNonRoot: 'boolean',
      loginPassword: 'string',
      multiAzPolicy: 'string',
      onDemandBaseCapacity: 'number',
      onDemandPercentageAboveBaseCapacity: 'number',
      period: 'number',
      periodUnit: 'string',
      platform: 'string',
      privatePoolOptions: CreateClusterNodePoolRequestScalingGroupPrivatePoolOptions,
      ramRoleName: 'string',
      rdsInstances: { 'type': 'array', 'itemType': 'string' },
      scalingPolicy: 'string',
      securityGroupId: 'string',
      securityGroupIds: { 'type': 'array', 'itemType': 'string' },
      securityHardeningOs: 'boolean',
      socEnabled: 'boolean',
      spotInstancePools: 'number',
      spotInstanceRemedy: 'boolean',
      spotPriceLimit: { 'type': 'array', 'itemType': CreateClusterNodePoolRequestScalingGroupSpotPriceLimit },
      spotStrategy: 'string',
      systemDiskBurstingEnabled: 'boolean',
      systemDiskCategories: { 'type': 'array', 'itemType': 'string' },
      systemDiskCategory: 'string',
      systemDiskEncryptAlgorithm: 'string',
      systemDiskEncrypted: 'boolean',
      systemDiskKmsKeyId: 'string',
      systemDiskPerformanceLevel: 'string',
      systemDiskProvisionedIops: 'number',
      systemDiskSize: 'number',
      tags: { 'type': 'array', 'itemType': CreateClusterNodePoolRequestScalingGroupTags },
      vswitchIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterNodePoolRequestTeeConfig extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to enable confidential computing for the cluster.
   * 
   * @example
   * true
   */
  teeEnable?: boolean;
  static names(): { [key: string]: string } {
    return {
      teeEnable: 'tee_enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      teeEnable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAlertContactResponseBody extends $tea.Model {
  status?: boolean;
  msg?: string;
  contactId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'status',
      msg: 'msg',
      contactId: 'contact_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'boolean',
      msg: 'string',
      contactId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAlertContactGroupResponseBody extends $tea.Model {
  status?: boolean;
  msg?: string;
  contactGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'status',
      msg: 'msg',
      contactGroupId: 'contact_group_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'boolean',
      msg: 'string',
      contactGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteClusterRequestDeleteOptions extends $tea.Model {
  /**
   * @remarks
   * The deletion policy for the specified type of resource. Valid values:
   * 
   * *   delete: deletes the specified type of resource.
   * *   retain: retains the specified type of resource.
   * 
   * @example
   * delete
   */
  deleteMode?: string;
  /**
   * @remarks
   * Valid values:
   * 
   * *   SLB: SLB resources created for Services. By default, the SLB resources are automatically deleted.
   * *   ALB: Application Load Balancer (ALB) resources created by the ALB Ingress controller. By default, the ALB resources are retained.
   * *   SLS_Data: Simple Log Service projects used by the cluster logging feature. By default, the Simple Log Service projects are retained.
   * *   SLS_ControlPlane: Simple Log Service projects used to store the logs of control planes in ACK managed clusters. By default, the Simple Log Service projects are retained.
   * *   PrivateZone: PrivateZone resources created by ACK Serverless clusters. By default, the PrivateZone resources are retained.
   * 
   * @example
   * SLS_Data
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      deleteMode: 'delete_mode',
      resourceType: 'resource_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteMode: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAddonResponseBodyNewerVersions extends $tea.Model {
  /**
   * @remarks
   * The minimum cluster version required by the component version.
   * 
   * @example
   * 1.20.4
   */
  minimumClusterVersion?: string;
  /**
   * @remarks
   * Indicates whether the component can be updated to the version.
   * 
   * @example
   * true
   */
  upgradable?: boolean;
  /**
   * @remarks
   * The version number.
   * 
   * @example
   * v1.9.3.10-7dfca203-aliyun
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      minimumClusterVersion: 'minimum_cluster_version',
      upgradable: 'upgradable',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      minimumClusterVersion: 'string',
      upgradable: 'boolean',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAddonsResponseBodyComponentGroupsItems extends $tea.Model {
  /**
   * @remarks
   * The name of the component.
   * 
   * @example
   * flexvolume
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAddonsResponseBodyComponentGroups extends $tea.Model {
  /**
   * @remarks
   * The name of the component group.
   * 
   * @example
   * storage
   */
  groupName?: string;
  /**
   * @remarks
   * The names of the components in the component group.
   */
  items?: DescribeAddonsResponseBodyComponentGroupsItems[];
  static names(): { [key: string]: string } {
    return {
      groupName: 'group_name',
      items: 'items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      items: { 'type': 'array', 'itemType': DescribeAddonsResponseBodyComponentGroupsItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterEventsResponseBodyEventsData extends $tea.Model {
  /**
   * @remarks
   * The severity level of the event.
   * 
   * Valid values:
   * 
   * *   warning
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   error
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   info
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * info
   */
  level?: string;
  /**
   * @remarks
   * The details of the event.
   * 
   * @example
   * Start to upgrade NodePool nodePool/npdd89dc2b76c04f14b06774883b******
   */
  message?: string;
  /**
   * @remarks
   * The status of the event.
   * 
   * @example
   * Started
   */
  reason?: string;
  static names(): { [key: string]: string } {
    return {
      level: 'level',
      message: 'message',
      reason: 'reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      level: 'string',
      message: 'string',
      reason: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterEventsResponseBodyEvents extends $tea.Model {
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * @example
   * c82e6987e2961451182edacd74faf****
   */
  clusterId?: string;
  /**
   * @remarks
   * The description of the event.
   */
  data?: DescribeClusterEventsResponseBodyEventsData;
  /**
   * @remarks
   * The event ID.
   * 
   * @example
   * e-9ad04f72-8ee7-46bf-a02c-e4a06b39****
   */
  eventId?: string;
  /**
   * @remarks
   * The event source.
   * 
   * @example
   * cluster
   */
  source?: string;
  /**
   * @remarks
   * The subject related to the event.
   * 
   * @example
   * npdd89dc2b76c04f14b06774883b******
   */
  subject?: string;
  /**
   * @remarks
   * The time when the event started.
   * 
   * @example
   * 2020-12-01T17:31:00Z
   */
  time?: string;
  /**
   * @remarks
   * The type of event. Valid values:
   * 
   * @example
   * nodepool_update
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'cluster_id',
      data: 'data',
      eventId: 'event_id',
      source: 'source',
      subject: 'subject',
      time: 'time',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      data: DescribeClusterEventsResponseBodyEventsData,
      eventId: 'string',
      source: 'string',
      subject: 'string',
      time: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterEventsResponseBodyPageInfo extends $tea.Model {
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 50. Default value: 50.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 3
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'page_number',
      pageSize: 'page_size',
      totalCount: 'total_count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterLogsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the log entry.
   * 
   * @example
   * 590749245
   */
  ID?: number;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * c23421cfa74454bc8b37163fd19af***
   */
  clusterId?: string;
  /**
   * @remarks
   * The log content.
   * 
   * @example
   * start to update cluster status to CREATE_COMPLETE
   */
  clusterLog?: string;
  /**
   * @remarks
   * The time when the log entry was generated.
   * 
   * @example
   * 2020-09-11T10:11:51+08:00
   */
  created?: string;
  /**
   * @remarks
   * The time when the log entry was updated.
   * 
   * @example
   * 2020-09-11T10:11:51+08:00
   */
  updated?: string;
  static names(): { [key: string]: string } {
    return {
      ID: 'ID',
      clusterId: 'cluster_id',
      clusterLog: 'cluster_log',
      created: 'created',
      updated: 'updated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ID: 'number',
      clusterId: 'string',
      clusterLog: 'string',
      created: 'string',
      updated: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterNodePoolDetailResponseBodyAutoScaling extends $tea.Model {
  /**
   * @remarks
   * The maximum bandwidth of the elastic IP address (EIP).
   * 
   * @example
   * 5
   */
  eipBandwidth?: number;
  /**
   * @remarks
   * The metering method of the EIP. Valid values:
   * 
   * *   `PayByBandwidth`: pay-by-bandwidth.
   * *   `PayByTraffic`: pay-by-data-transfer.
   * 
   * @example
   * PayByBandwidth
   */
  eipInternetChargeType?: string;
  /**
   * @remarks
   * Indicates whether auto scaling is enabled. Valid values:
   * 
   * *   `true`: auto scaling is enabled.
   * *   `false`: auto scaling is disabled. If this parameter is set to false, other parameters in the `auto_scaling` section do not take effect.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * Indicates whether an EIP is associated with the node pool. Valid values:
   * 
   * *   `true`: An EIP is associated with the node pool.
   * *   `false`: No EIP is associated with the node pool.
   * 
   * @example
   * true
   */
  isBondEip?: boolean;
  /**
   * @remarks
   * The maximum number of Elastic Compute Service (ECS) instances that can be created in the node pool.
   * 
   * @example
   * 10
   */
  maxInstances?: number;
  /**
   * @remarks
   * The minimum number of ECS instances that must be kept in the node pool.
   * 
   * @example
   * 1
   */
  minInstances?: number;
  /**
   * @remarks
   * The instance types that can be used for the auto scaling of the node pool. Valid values:
   * 
   * *   `cpu`: regular instance.
   * *   `gpu`: GPU-accelerated instance.
   * *   `gpushare`: shared GPU-accelerated instance.
   * *   `spot`: preemptible instance.
   * 
   * @example
   * cpu
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      eipBandwidth: 'eip_bandwidth',
      eipInternetChargeType: 'eip_internet_charge_type',
      enable: 'enable',
      isBondEip: 'is_bond_eip',
      maxInstances: 'max_instances',
      minInstances: 'min_instances',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eipBandwidth: 'number',
      eipInternetChargeType: 'string',
      enable: 'boolean',
      isBondEip: 'boolean',
      maxInstances: 'number',
      minInstances: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterNodePoolDetailResponseBodyInterconnectConfig extends $tea.Model {
  /**
   * @remarks
   * The bandwidth of the enhanced edge node pool. Unit: Mbit/s.
   * 
   * @example
   * 10
   */
  bandwidth?: number;
  /**
   * @remarks
   * The ID of the Cloud Connect Network (CCN) instance that is associated with the enhanced edge node pool.
   * 
   * @example
   * ccn-qm5i0i0q9yi*******
   */
  ccnId?: string;
  /**
   * @remarks
   * The region to which the CCN instance that is associated with the enhanced edge node pool belongs.
   * 
   * @example
   * cn-shanghai
   */
  ccnRegionId?: string;
  /**
   * @remarks
   * The ID of the Cloud Enterprise Network (CEN) instance that is associated with the enhanced edge node pool.
   * 
   * @example
   * cen-ey9k9nfhz0f*******
   */
  cenId?: string;
  /**
   * @remarks
   * The subscription duration of the enhanced edge node pool. The duration is measured in months.
   * 
   * @example
   * 1
   */
  improvedPeriod?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'bandwidth',
      ccnId: 'ccn_id',
      ccnRegionId: 'ccn_region_id',
      cenId: 'cen_id',
      improvedPeriod: 'improved_period',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      ccnId: 'string',
      ccnRegionId: 'string',
      cenId: 'string',
      improvedPeriod: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterNodePoolDetailResponseBodyKubernetesConfig extends $tea.Model {
  /**
   * @remarks
   * Indicates whether the CloudMonitor agent is installed on ECS nodes in the cluster. After the CloudMonitor agent is installed, you can view monitoring information about the ECS instances in the CloudMonitor console. Installation is recommended. Valid values:
   * 
   * *   `true`: The CloudMonitor agent is installed on ECS nodes.
   * *   `false`: The CloudMonitor agent is not installed on ECS nodes.
   * 
   * @example
   * true
   */
  cmsEnabled?: boolean;
  /**
   * @remarks
   * The CPU management policy of the nodes in the node pool. The following policies are supported if the Kubernetes version of the cluster is 1.12.6 or later.
   * 
   * *   `static`: allows pods with specific resource characteristics on the node to be granted enhanced CPU affinity and exclusivity.
   * *   `none`: indicates that the default CPU affinity is used.
   * 
   * @example
   * none
   */
  cpuPolicy?: string;
  /**
   * @remarks
   * The labels of the nodes in the node pool. You can add labels to the nodes in the cluster. You must add labels based on the following rules:
   * 
   * *   Each label is a case-sensitive key-value pair. You can add up to 20 labels.
   * *   A key must be unique and cannot exceed 64 characters in length. A value can be empty and cannot exceed 128 characters in length. Keys and values cannot start with `aliyun`, `acs:`, `https://`, or `http://`. For more information, see [Labels and Selectors](https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#syntax-and-character-set).
   */
  labels?: Tag[];
  /**
   * @remarks
   * A custom node name consists of a prefix, an IP substring, and a suffix.
   * 
   * *   The prefix and suffix can contain multiple parts that are separated by periods (.). Each part can contain lowercase letters, digits, and hyphens (-). A custom node name must start and end with a digit or lowercase letter.
   * *   The IP substring length specifies the number of digits to be truncated from the end of the node IP address. The IP substring length ranges from 5 to 12.
   * 
   * For example, if the node IP address is 192.168.0.55, the prefix is aliyun.com, the IP substring length is 5, and the suffix is test, the node name will be aliyun.com00055test.
   * 
   * @example
   * customized,test.,5,.com
   */
  nodeNameMode?: string;
  /**
   * @remarks
   * The name of the container runtime.
   * 
   * @example
   * docker
   */
  runtime?: string;
  /**
   * @remarks
   * The version of the container runtime.
   * 
   * @example
   * 19.03.5
   */
  runtimeVersion?: string;
  /**
   * @remarks
   * The taints of the nodes in the node pool. Taints are added to nodes to prevent pods from being scheduled to inappropriate nodes. However, tolerations allow pods to be scheduled to nodes with matching taints. For more information, see [taint-and-toleration](https://kubernetes.io/zh/docs/concepts/scheduling-eviction/taint-and-toleration/).
   */
  taints?: Taint[];
  /**
   * @example
   * true
   */
  unschedulable?: boolean;
  /**
   * @remarks
   * The user data of the node pool. For more information, see [Generate user data](https://help.aliyun.com/document_detail/49121.html).
   * 
   * @example
   * IyEvYmluL3NoCmVjaG8gIkhlbGxvIEFDSyEi
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      cmsEnabled: 'cms_enabled',
      cpuPolicy: 'cpu_policy',
      labels: 'labels',
      nodeNameMode: 'node_name_mode',
      runtime: 'runtime',
      runtimeVersion: 'runtime_version',
      taints: 'taints',
      unschedulable: 'unschedulable',
      userData: 'user_data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cmsEnabled: 'boolean',
      cpuPolicy: 'string',
      labels: { 'type': 'array', 'itemType': Tag },
      nodeNameMode: 'string',
      runtime: 'string',
      runtimeVersion: 'string',
      taints: { 'type': 'array', 'itemType': Taint },
      unschedulable: 'boolean',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterNodePoolDetailResponseBodyManagementAutoRepairPolicy extends $tea.Model {
  /**
   * @example
   * true
   */
  restartNode?: boolean;
  static names(): { [key: string]: string } {
    return {
      restartNode: 'restart_node',
    };
  }

  static types(): { [key: string]: any } {
    return {
      restartNode: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterNodePoolDetailResponseBodyManagementAutoUpgradePolicy extends $tea.Model {
  /**
   * @example
   * true
   */
  autoUpgradeKubelet?: boolean;
  static names(): { [key: string]: string } {
    return {
      autoUpgradeKubelet: 'auto_upgrade_kubelet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoUpgradeKubelet: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterNodePoolDetailResponseBodyManagementAutoVulFixPolicy extends $tea.Model {
  /**
   * @example
   * true
   */
  restartNode?: boolean;
  /**
   * @example
   * asap,nntf
   */
  vulLevel?: string;
  static names(): { [key: string]: string } {
    return {
      restartNode: 'restart_node',
      vulLevel: 'vul_level',
    };
  }

  static types(): { [key: string]: any } {
    return {
      restartNode: 'boolean',
      vulLevel: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterNodePoolDetailResponseBodyManagementUpgradeConfig extends $tea.Model {
  /**
   * @remarks
   * Indicates whether auto update is enabled. Valid values:
   * 
   * *   `true`: Auto update is enabled.
   * *   `false`: Auto update is disabled.
   * 
   * @example
   * true
   */
  autoUpgrade?: boolean;
  /**
   * @remarks
   * The maximum number of nodes that can be in the Unavailable state. Valid values: 1 to 1000.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  maxUnavailable?: number;
  /**
   * @remarks
   * The number of additional nodes.
   * 
   * @example
   * 5
   */
  surge?: number;
  /**
   * @remarks
   * The percentage of additional nodes to the nodes in the node pool. You must set this parameter or `surge`.
   * 
   * @example
   * 50
   */
  surgePercentage?: number;
  static names(): { [key: string]: string } {
    return {
      autoUpgrade: 'auto_upgrade',
      maxUnavailable: 'max_unavailable',
      surge: 'surge',
      surgePercentage: 'surge_percentage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoUpgrade: 'boolean',
      maxUnavailable: 'number',
      surge: 'number',
      surgePercentage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterNodePoolDetailResponseBodyManagement extends $tea.Model {
  /**
   * @remarks
   * Indicates whether auto repair is enabled. This parameter takes effect only when `enable=true` is specified. Valid values:
   * 
   * *   `true`: Auto repair is enabled.
   * *   `false`: Auto repair is disabled.
   * 
   * @example
   * true
   */
  autoRepair?: boolean;
  autoRepairPolicy?: DescribeClusterNodePoolDetailResponseBodyManagementAutoRepairPolicy;
  /**
   * @example
   * true
   */
  autoUpgrade?: boolean;
  autoUpgradePolicy?: DescribeClusterNodePoolDetailResponseBodyManagementAutoUpgradePolicy;
  /**
   * @example
   * true
   */
  autoVulFix?: boolean;
  autoVulFixPolicy?: DescribeClusterNodePoolDetailResponseBodyManagementAutoVulFixPolicy;
  /**
   * @remarks
   * Indicates whether the managed node pool feature is enabled. Valid values:
   * 
   * *   `true`: The managed node pool feature is enabled.
   * *   `false`: The managed node pool feature is disabled. Other parameters in this section take effect only when `enable=true` is specified.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The configuration of auto update. The configuration takes effect only when `enable=true` is specified.
   */
  upgradeConfig?: DescribeClusterNodePoolDetailResponseBodyManagementUpgradeConfig;
  static names(): { [key: string]: string } {
    return {
      autoRepair: 'auto_repair',
      autoRepairPolicy: 'auto_repair_policy',
      autoUpgrade: 'auto_upgrade',
      autoUpgradePolicy: 'auto_upgrade_policy',
      autoVulFix: 'auto_vul_fix',
      autoVulFixPolicy: 'auto_vul_fix_policy',
      enable: 'enable',
      upgradeConfig: 'upgrade_config',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRepair: 'boolean',
      autoRepairPolicy: DescribeClusterNodePoolDetailResponseBodyManagementAutoRepairPolicy,
      autoUpgrade: 'boolean',
      autoUpgradePolicy: DescribeClusterNodePoolDetailResponseBodyManagementAutoUpgradePolicy,
      autoVulFix: 'boolean',
      autoVulFixPolicy: DescribeClusterNodePoolDetailResponseBodyManagementAutoVulFixPolicy,
      enable: 'boolean',
      upgradeConfig: DescribeClusterNodePoolDetailResponseBodyManagementUpgradeConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterNodePoolDetailResponseBodyNodeConfig extends $tea.Model {
  kubeletConfiguration?: KubeletConfig;
  static names(): { [key: string]: string } {
    return {
      kubeletConfiguration: 'kubelet_configuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      kubeletConfiguration: KubeletConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterNodePoolDetailResponseBodyNodepoolInfo extends $tea.Model {
  /**
   * @remarks
   * The time when the node pool was created.
   * 
   * @example
   * 2020-09-27T19:14:09.156823496+08:00
   */
  created?: string;
  /**
   * @remarks
   * Indicates whether the node pool is a default node pool. A Container Service for Kubernetes (ACK) cluster usually has only one default node pool. Valid values: `true`: The node pool is a default node pool. `false`: The node pool is not a default node pool.
   * 
   * @example
   * true
   */
  isDefault?: boolean;
  /**
   * @remarks
   * The name of the node pool.
   * 
   * The name must be 1 to 63 characters in length, and can contain digits, letters, and hyphens (-). It cannot start with a hyphen (-).
   * 
   * @example
   * default-nodepool
   */
  name?: string;
  /**
   * @remarks
   * The node pool ID.
   * 
   * @example
   * np615c0e0966124216a0412e10afe0****
   */
  nodepoolId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmyvw3wjmb****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The type of node pool.
   * 
   * @example
   * ess
   */
  type?: string;
  /**
   * @remarks
   * The time when the node pool was last updated.
   * 
   * @example
   * 2020-09-27T20:37:46+08:00
   */
  updated?: string;
  static names(): { [key: string]: string } {
    return {
      created: 'created',
      isDefault: 'is_default',
      name: 'name',
      nodepoolId: 'nodepool_id',
      regionId: 'region_id',
      resourceGroupId: 'resource_group_id',
      type: 'type',
      updated: 'updated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      created: 'string',
      isDefault: 'boolean',
      name: 'string',
      nodepoolId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      type: 'string',
      updated: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterNodePoolDetailResponseBodyScalingGroupPrivatePoolOptions extends $tea.Model {
  /**
   * @remarks
   * The ID of the private node pool.
   * 
   * @example
   * eap-bp67acfmxazb4****
   */
  id?: string;
  /**
   * @remarks
   * The type of private node pool. This parameter specifies the type of private node pool that you want to use to create instances. A private node pool is generated when an elasticity assurance or a capacity reservation service takes effect. The system selects a private node pool to launch instances. Valid values:
   * 
   * *   `Open`: open private pool. The system selects an open private node pool to launch instances. If no matching open private node pool is available, the resources in the public node pool are used.
   * *   `Target`: specific private pool. The system uses the resources of the specified private node pool to launch instances. If the specified private node pool is unavailable, instances cannot be launched.
   * *   `None`: no private node pool is used. The resources of private node pools are not used to launch the instances.
   * 
   * @example
   * Open
   */
  matchCriteria?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      matchCriteria: 'match_criteria',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      matchCriteria: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterNodePoolDetailResponseBodyScalingGroupSpotPriceLimit extends $tea.Model {
  /**
   * @remarks
   * The instance type of the preemptible instances.
   * 
   * @example
   * ecs.c6.large
   */
  instanceType?: string;
  /**
   * @remarks
   * The price cap of a preemptible instance of the type.
   * 
   * Unit: USD/hour.
   * 
   * @example
   * 0.39
   */
  priceLimit?: string;
  static names(): { [key: string]: string } {
    return {
      instanceType: 'instance_type',
      priceLimit: 'price_limit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'string',
      priceLimit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterNodePoolDetailResponseBodyScalingGroup extends $tea.Model {
  /**
   * @remarks
   * Indicates whether auto-renewal is enabled for the nodes in the node pool. This parameter takes effect only when `instance_charge_type` is set to `PrePaid`. Valid values:
   * 
   * *   `true`: Auto-renewal is enabled.
   * *   `false`: Auto-renewal is disabled.
   * 
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The duration of the auto-renewal. This parameter takes effect and is required only when `instance_charge_type` is set to `PrePaid`.
   * 
   * If you specify `PeriodUnit=Month`, the valid values are 1, 2, 3, 6, and 12.
   * 
   * @example
   * 1
   */
  autoRenewPeriod?: number;
  /**
   * @example
   * false
   * 
   * @deprecated
   */
  cisEnabled?: boolean;
  /**
   * @remarks
   * Indicates whether pay-as-you-go instances are automatically created to meet the required number of ECS instances if preemptible instances cannot be created due to reasons such as cost or insufficient inventory. This parameter takes effect when `multi_az_policy` is set to `COST_OPTIMIZED`. Valid values:
   * 
   * *   `true`: Pay-as-you-go instances are automatically created to meet the required number of ECS instances if preemptible instances cannot be created.
   * *   `false`: Pay-as-you-go instances are not automatically created to meet the required number of ECS instances if preemptible instances cannot be created.
   * 
   * @example
   * true
   */
  compensateWithOnDemand?: boolean;
  /**
   * @remarks
   * The configurations of the data disks that are attached to the nodes in the node pool. The configurations include the disk type and disk size.
   */
  dataDisks?: DataDisk[];
  /**
   * @remarks
   * The ID of the deployment set to which the ECS instances in the node pool belong.
   * 
   * @example
   * ds-bp1d19mmbsv3jf6xxxxx
   */
  deploymentsetId?: string;
  /**
   * @remarks
   * The expected number of nodes in the node pool.
   * 
   * @example
   * 2
   */
  desiredSize?: number;
  /**
   * @remarks
   * The ID of the custom image. You can call the `DescribeKubernetesVersionMetadata` operation to query the images supported by ACK.
   * 
   * @example
   * aliyun_2_1903_x64_20G_alibase_20200529.vhd
   */
  imageId?: string;
  /**
   * @example
   * AliyunLinux
   */
  imageType?: string;
  /**
   * @remarks
   * The billing method of the nodes in the node pool. Valid values:
   * 
   * *   `PrePaid`: the subscription billing method.
   * *   `PostPaid`: the pay-as-you-go billing method.
   * 
   * @example
   * PostPaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * 实例属性
   */
  instancePatterns?: InstancePatterns[];
  /**
   * @remarks
   * A list of instance types. You can select multiple instance types. When the system needs to create a node, it starts from the first instance type until the node is created. The instance type that is used to create the node varies based on the actual instance stock.
   */
  instanceTypes?: string[];
  /**
   * @remarks
   * The billing method of the public IP address of the node.
   * 
   * @example
   * PayByBandwidth
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The maximum outbound bandwidth of the public IP address of the node. Unit: Mbit/s. Valid values: 1 to 100.
   * 
   * @example
   * 10
   */
  internetMaxBandwidthOut?: number;
  /**
   * @remarks
   * The name of the key pair. You must set this parameter or the `login_password` parameter. You must set `key_pair` if the node pool is a managed node pool.
   * 
   * @example
   * pro-nodepool
   */
  keyPair?: string;
  /**
   * @example
   * true
   */
  loginAsNonRoot?: boolean;
  /**
   * @remarks
   * The password for SSH logon. You must set this parameter or the `key_pair` parameter. The password must be 8 to 30 characters in length, and must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.
   * 
   * For security purposes, the returned password is encrypted.
   * 
   * @example
   * ********
   */
  loginPassword?: string;
  /**
   * @remarks
   * The ECS instance scaling policy for a multi-zone scaling group. Valid values:
   * 
   * *   `PRIORITY`: the scaling group is scaled based on the VSwitchIds.N parameter. If an ECS instance cannot be created in the zone where the vSwitch that has the highest priority resides, Auto Scaling creates the ECS instance in the zone where the vSwitch that has the next highest priority resides.
   * 
   * *   `COST_OPTIMIZED`: ECS instances are created based on the vCPU unit price in ascending order. Preemptible instances are preferably created when preemptible instance types are specified in the scaling configuration. You can set the `CompensateWithOnDemand` parameter to specify whether to automatically create pay-as-you-go instances when preemptible instances cannot be created due to insufficient resources.
   * 
   *     **
   * 
   *     **Note**The `COST_OPTIMIZED` setting takes effect only when multiple instance types are specified or at least one instance type is specified for preemptible instances.
   * 
   * *   `BALANCE`: ECS instances are evenly distributed across multiple zones specified by the scaling group. If ECS instances become imbalanced among multiple zones due to insufficient inventory, you can call the RebalanceInstances operation of Auto Scaling to balance the instance distribution among zones. For more information, see [RebalanceInstances](https://help.aliyun.com/document_detail/71516.html).
   * 
   * Default value: `PRIORITY`.
   * 
   * @example
   * BALANCE
   */
  multiAzPolicy?: string;
  /**
   * @remarks
   * The minimum number of pay-as-you-go instances that must be kept in the scaling group. Valid values: 0 to 1000. If the number of pay-as-you-go instances is less than the value of this parameter, Auto Scaling preferably creates pay-as-you-go instances.
   * 
   * @example
   * 0
   */
  onDemandBaseCapacity?: number;
  /**
   * @remarks
   * The percentage of pay-as-you-go instances among the extra instances that exceed the number specified by `on_demand_base_capacity`. Valid values: 0 to 100.
   * 
   * @example
   * 20
   */
  onDemandPercentageAboveBaseCapacity?: number;
  /**
   * @remarks
   * The subscription duration of worker nodes. This parameter takes effect and is required only when `instance_charge_type` is set to `PrePaid`.
   * 
   * If `PeriodUnit=Month` is specified, the valid values are 1, 2, 3, 6, 12, 24, 36, 48, and 60.
   * 
   * @example
   * 0
   */
  period?: number;
  /**
   * @remarks
   * The billing cycle of the nodes. This parameter is required if `instance_charge_type` is set to `PrePaid`.
   * 
   * Valid value: `Month`.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * The release version of the operating system. Valid values:
   * 
   * *   `CentOS`
   * *   `AliyunLinux`
   * *   `Windows`
   * *   `WindowsCore`
   * 
   * @example
   * AliyunLinux
   */
  platform?: string;
  /**
   * @remarks
   * The configuration of the private node pool.
   */
  privatePoolOptions?: DescribeClusterNodePoolDetailResponseBodyScalingGroupPrivatePoolOptions;
  /**
   * @remarks
   * The name of the worker Resource Access Management (RAM) role. The RAM role is assigned to the worker nodes of the cluster to allow the worker nodes to manage ECS instances.
   * 
   * @example
   * KubernetesWorkerRole-021dc54f-929b-437a-8ae0-34c24d3e****
   */
  ramPolicy?: string;
  /**
   * @remarks
   * Worker RAM角色名称。
   * 
   * @example
   * KubernetesWorkerRole-4a4fa089-80c1-48a5-b3c6-9349311f****
   */
  ramRoleName?: string;
  /**
   * @remarks
   * After you specify the list of RDS instances, the ECS instances in the cluster are automatically added to the whitelist of the RDS instances.
   */
  rdsInstances?: string[];
  /**
   * @remarks
   * The ID of the scaling group.
   * 
   * @example
   * asg-2zeieod8giqmov7z****
   */
  scalingGroupId?: string;
  /**
   * @remarks
   * The scaling mode of the scaling group. Valid values:
   * 
   * *   `release`: the standard mode. ECS instances are created and released based on resource usage.
   * *   `recycle`: the swift mode. ECS instances are created, stopped, or started during scaling events. This reduces the time required for the next scale-out event. When the instance is stopped, you are charged only for the storage service. This does not apply to ECS instances that are attached with local disks.
   * 
   * @example
   * release
   */
  scalingPolicy?: string;
  /**
   * @remarks
   * The ID of the security group to which the node pool is added. If the node pool is added to multiple security groups, the first ID in the value of `security_group_ids` is returned.
   * 
   * @example
   * sg-2ze60ockeekspl3d****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The IDs of the security groups to which the node pool is added.
   */
  securityGroupIds?: string[];
  /**
   * @example
   * false
   */
  securityHardeningOs?: boolean;
  /**
   * @example
   * false
   */
  socEnabled?: boolean;
  /**
   * @remarks
   * The number of instance types that are available for creating preemptible instances. Auto Scaling creates preemptible instances of multiple instance types that are available at the lowest cost. Valid values: 1 to 10.
   * 
   * @example
   * 5
   */
  spotInstancePools?: number;
  /**
   * @remarks
   * Indicates whether preemptible instances are supplemented when the number of preemptible instances drops below the specified minimum number. If this parameter is set to true, when the scaling group receives a system message that a preemptible instance is to be reclaimed, the scaling group attempts to create a new instance to replace this instance. Valid values: Valid values:
   * 
   * *   `true`: Supplementation of preemptible instances is enabled.
   * *   `false`: Supplementation of preemptible instances is disabled.
   * 
   * @example
   * false
   */
  spotInstanceRemedy?: boolean;
  /**
   * @remarks
   * The bid configurations of preemptible instances.
   */
  spotPriceLimit?: DescribeClusterNodePoolDetailResponseBodyScalingGroupSpotPriceLimit[];
  /**
   * @remarks
   * The type of preemptible instance. Valid values:
   * 
   * *   NoSpot: a non-preemptible instance.
   * *   SpotWithPriceLimit: a preemptible instance that is configured with the highest bid price.
   * *   SpotAsPriceGo: a preemptible instance for which the system automatically bids based on the current market price.
   * 
   * For more information, see [Preemptible instances](https://help.aliyun.com/document_detail/157759.html).
   * 
   * @example
   * NoSpot
   */
  spotStrategy?: string;
  /**
   * @example
   * true
   */
  systemDiskBurstingEnabled?: boolean;
  /**
   * @remarks
   * The system disk types. The system attempts to create system disks from a disk type with a lower priority when the disk type with a higher priority is unavailable. Valid values: Valid values:
   * 
   * *   `cloud`: basic disk
   * *   `cloud_efficiency`: ultra disk
   * *   `cloud_ssd`: standard SSD
   * *   `cloud_essd`: ESSD
   * *   `cloud_auto`: ESSD AutoPL disk
   * *   `cloud_essd_entry`: ESSD Entry disk
   * 
   * Default value: `cloud_efficiency`.
   */
  systemDiskCategories?: string[];
  /**
   * @remarks
   * The system disk type. Valid values:
   * 
   * *   `cloud`: basic disk
   * *   `cloud_efficiency`: ultra disk
   * *   `cloud_ssd`: standard SSD
   * *   `cloud_essd`: Enterprise SSD (ESSD)
   * *   `cloud_auto`: ESSD AutoPL disk
   * *   `cloud_essd_entry`: ESSD Entry disk
   * 
   * Default value: `cloud_efficiency`.
   * 
   * @example
   * cloud_efficiency
   */
  systemDiskCategory?: string;
  /**
   * @example
   * aes-256
   */
  systemDiskEncryptAlgorithm?: string;
  /**
   * @remarks
   * Specifies whether to encrypt the system disk. Valid values: Valid values:
   * 
   * *   `true`: encrypts the system disk.
   * *   `false`: does not encrypt the system disk.
   * 
   * @example
   * false
   */
  systemDiskEncrypted?: boolean;
  /**
   * @example
   * 0e478b7a-4262-4802-b8cb-00d3fb40****
   */
  systemDiskKmsKeyId?: string;
  /**
   * @remarks
   * The performance level (PL) of the system disk that you want to use for the node. This parameter takes effect only for enhanced SSDs (ESSDs).
   * 
   * @example
   * PL1
   */
  systemDiskPerformanceLevel?: string;
  /**
   * @example
   * 1000
   */
  systemDiskProvisionedIops?: number;
  /**
   * @remarks
   * The system disk size of a node. Unit: GiB.
   * 
   * Valid values: 20 to 500.
   * 
   * @example
   * 120
   */
  systemDiskSize?: number;
  /**
   * @remarks
   * The labels that you want to add to the ECS instances.
   * 
   * A key must be unique and cannot exceed 128 characters in length. Neither keys nor values can start with aliyun or acs:. Neither keys nor values can contain https:// or http://.
   */
  tags?: Tag[];
  /**
   * @remarks
   * The IDs of vSwitches. You can specify 1 to 20 vSwitches.
   * 
   * > We recommend that you select vSwitches in different zones to ensure high availability.
   */
  vswitchIds?: string[];
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'auto_renew',
      autoRenewPeriod: 'auto_renew_period',
      cisEnabled: 'cis_enabled',
      compensateWithOnDemand: 'compensate_with_on_demand',
      dataDisks: 'data_disks',
      deploymentsetId: 'deploymentset_id',
      desiredSize: 'desired_size',
      imageId: 'image_id',
      imageType: 'image_type',
      instanceChargeType: 'instance_charge_type',
      instancePatterns: 'instance_patterns',
      instanceTypes: 'instance_types',
      internetChargeType: 'internet_charge_type',
      internetMaxBandwidthOut: 'internet_max_bandwidth_out',
      keyPair: 'key_pair',
      loginAsNonRoot: 'login_as_non_root',
      loginPassword: 'login_password',
      multiAzPolicy: 'multi_az_policy',
      onDemandBaseCapacity: 'on_demand_base_capacity',
      onDemandPercentageAboveBaseCapacity: 'on_demand_percentage_above_base_capacity',
      period: 'period',
      periodUnit: 'period_unit',
      platform: 'platform',
      privatePoolOptions: 'private_pool_options',
      ramPolicy: 'ram_policy',
      ramRoleName: 'ram_role_name',
      rdsInstances: 'rds_instances',
      scalingGroupId: 'scaling_group_id',
      scalingPolicy: 'scaling_policy',
      securityGroupId: 'security_group_id',
      securityGroupIds: 'security_group_ids',
      securityHardeningOs: 'security_hardening_os',
      socEnabled: 'soc_enabled',
      spotInstancePools: 'spot_instance_pools',
      spotInstanceRemedy: 'spot_instance_remedy',
      spotPriceLimit: 'spot_price_limit',
      spotStrategy: 'spot_strategy',
      systemDiskBurstingEnabled: 'system_disk_bursting_enabled',
      systemDiskCategories: 'system_disk_categories',
      systemDiskCategory: 'system_disk_category',
      systemDiskEncryptAlgorithm: 'system_disk_encrypt_algorithm',
      systemDiskEncrypted: 'system_disk_encrypted',
      systemDiskKmsKeyId: 'system_disk_kms_key_id',
      systemDiskPerformanceLevel: 'system_disk_performance_level',
      systemDiskProvisionedIops: 'system_disk_provisioned_iops',
      systemDiskSize: 'system_disk_size',
      tags: 'tags',
      vswitchIds: 'vswitch_ids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'boolean',
      autoRenewPeriod: 'number',
      cisEnabled: 'boolean',
      compensateWithOnDemand: 'boolean',
      dataDisks: { 'type': 'array', 'itemType': DataDisk },
      deploymentsetId: 'string',
      desiredSize: 'number',
      imageId: 'string',
      imageType: 'string',
      instanceChargeType: 'string',
      instancePatterns: { 'type': 'array', 'itemType': InstancePatterns },
      instanceTypes: { 'type': 'array', 'itemType': 'string' },
      internetChargeType: 'string',
      internetMaxBandwidthOut: 'number',
      keyPair: 'string',
      loginAsNonRoot: 'boolean',
      loginPassword: 'string',
      multiAzPolicy: 'string',
      onDemandBaseCapacity: 'number',
      onDemandPercentageAboveBaseCapacity: 'number',
      period: 'number',
      periodUnit: 'string',
      platform: 'string',
      privatePoolOptions: DescribeClusterNodePoolDetailResponseBodyScalingGroupPrivatePoolOptions,
      ramPolicy: 'string',
      ramRoleName: 'string',
      rdsInstances: { 'type': 'array', 'itemType': 'string' },
      scalingGroupId: 'string',
      scalingPolicy: 'string',
      securityGroupId: 'string',
      securityGroupIds: { 'type': 'array', 'itemType': 'string' },
      securityHardeningOs: 'boolean',
      socEnabled: 'boolean',
      spotInstancePools: 'number',
      spotInstanceRemedy: 'boolean',
      spotPriceLimit: { 'type': 'array', 'itemType': DescribeClusterNodePoolDetailResponseBodyScalingGroupSpotPriceLimit },
      spotStrategy: 'string',
      systemDiskBurstingEnabled: 'boolean',
      systemDiskCategories: { 'type': 'array', 'itemType': 'string' },
      systemDiskCategory: 'string',
      systemDiskEncryptAlgorithm: 'string',
      systemDiskEncrypted: 'boolean',
      systemDiskKmsKeyId: 'string',
      systemDiskPerformanceLevel: 'string',
      systemDiskProvisionedIops: 'number',
      systemDiskSize: 'number',
      tags: { 'type': 'array', 'itemType': Tag },
      vswitchIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterNodePoolDetailResponseBodyStatus extends $tea.Model {
  /**
   * @remarks
   * The number of failed nodes.
   * 
   * @example
   * 0
   */
  failedNodes?: number;
  /**
   * @remarks
   * The number of healthy nodes.
   * 
   * @example
   * 3
   */
  healthyNodes?: number;
  /**
   * @remarks
   * The number of nodes that are being created.
   * 
   * @example
   * 0
   */
  initialNodes?: number;
  /**
   * @remarks
   * The number of offline nodes.
   * 
   * @example
   * 0
   */
  offlineNodes?: number;
  /**
   * @remarks
   * The number of nodes that are being removed.
   * 
   * @example
   * 0
   */
  removingNodes?: number;
  /**
   * @remarks
   * The number of running nodes.
   * 
   * @example
   * 3
   */
  servingNodes?: number;
  /**
   * @remarks
   * The status of the node pool. Valid values:
   * 
   * *   `active`: The node pool is active.
   * *   `scaling`: The node pool is being scaled.
   * *   `removing`: Nodes are being removed from the node pool.
   * *   `deleting`: The node pool is being deleted.
   * *   `updating`: The node pool is being updated.
   * 
   * @example
   * active
   */
  state?: string;
  /**
   * @remarks
   * The total number of nodes in the node pool.
   * 
   * @example
   * 3
   */
  totalNodes?: number;
  static names(): { [key: string]: string } {
    return {
      failedNodes: 'failed_nodes',
      healthyNodes: 'healthy_nodes',
      initialNodes: 'initial_nodes',
      offlineNodes: 'offline_nodes',
      removingNodes: 'removing_nodes',
      servingNodes: 'serving_nodes',
      state: 'state',
      totalNodes: 'total_nodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedNodes: 'number',
      healthyNodes: 'number',
      initialNodes: 'number',
      offlineNodes: 'number',
      removingNodes: 'number',
      servingNodes: 'number',
      state: 'string',
      totalNodes: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterNodePoolDetailResponseBodyTeeConfig extends $tea.Model {
  /**
   * @remarks
   * Indicates whether confidential computing is enabled. Valid values:
   * 
   * *   `true`: Confidential computing is enabled.
   * *   `false`: Confidential computing is disabled.
   * 
   * @example
   * false
   */
  teeEnable?: boolean;
  static names(): { [key: string]: string } {
    return {
      teeEnable: 'tee_enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      teeEnable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterNodePoolsResponseBodyNodepoolsAutoScaling extends $tea.Model {
  /**
   * @remarks
   * The maximum bandwidth of the elastic IP address (EIP).
   * 
   * @example
   * 5
   */
  eipBandwidth?: number;
  /**
   * @remarks
   * The billing method of the EIP. Valid values:
   * 
   * *   `PayByBandwidth`: pay-by-bandwidth.
   * *   `PayByTraffic`: pay-by-data-transfer.
   * 
   * @example
   * PayByBandwidth
   */
  eipInternetChargeType?: string;
  /**
   * @remarks
   * Specifies whether to enable auto scaling. Valid values:
   * 
   * *   `true`
   * *   `false`: If you set this parameter to `false`, other parameters in `auto_scaling` do not take effect.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * Specifies whether to associate an EIP with the node pool. Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * @example
   * true
   */
  isBondEip?: boolean;
  /**
   * @remarks
   * The maximum number of Elastic Compute Service (ECS) instances that can be created in the node pool.
   * 
   * @example
   * 10
   */
  maxInstances?: number;
  /**
   * @remarks
   * The minimum number of ECS instances that must be retained in the node pool.
   * 
   * @example
   * 2
   */
  minInstances?: number;
  /**
   * @remarks
   * The instance types that can be used for the auto scaling of the node pool. Valid values:
   * 
   * *   `cpu`: regular instance.
   * *   `gpu`: GPU-accelerated instance.
   * *   `gpushare`: shared GPU-accelerated instance.
   * *   `spot`: preemptible instance.
   * 
   * @example
   * cpu
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      eipBandwidth: 'eip_bandwidth',
      eipInternetChargeType: 'eip_internet_charge_type',
      enable: 'enable',
      isBondEip: 'is_bond_eip',
      maxInstances: 'max_instances',
      minInstances: 'min_instances',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eipBandwidth: 'number',
      eipInternetChargeType: 'string',
      enable: 'boolean',
      isBondEip: 'boolean',
      maxInstances: 'number',
      minInstances: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterNodePoolsResponseBodyNodepoolsInterconnectConfig extends $tea.Model {
  /**
   * @remarks
   * This parameter is discontinued.
   * 
   * The bandwidth of the enhanced edge node pool. Unit: Mbit/s.
   * 
   * @example
   * 10
   */
  bandwidth?: number;
  /**
   * @remarks
   * This parameter is discontinued.
   * 
   * The ID of the Cloud Connect Network (CCN) instance that is associated with the enhanced edge node pool.
   * 
   * @example
   * ccn-qm5i0i0q9yi*******
   */
  ccnId?: string;
  /**
   * @remarks
   * This parameter is discontinued.
   * 
   * The region in which the CCN instance that is with the enhanced edge node pool resides.
   * 
   * @example
   * cn-shanghai
   */
  ccnRegionId?: string;
  /**
   * @remarks
   * This parameter is discontinued.
   * 
   * The ID of the Cloud Enterprise Network (CEN) instance that is associated with the enhanced edge node pool.
   * 
   * @example
   * cen-ey9k9nfhz0f*******
   */
  cenId?: string;
  /**
   * @remarks
   * This parameter is discontinued.
   * 
   * The subscription duration of the enhanced edge node pool. Unit: months.
   * 
   * @example
   * 1
   */
  improvedPeriod?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'bandwidth',
      ccnId: 'ccn_id',
      ccnRegionId: 'ccn_region_id',
      cenId: 'cen_id',
      improvedPeriod: 'improved_period',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      ccnId: 'string',
      ccnRegionId: 'string',
      cenId: 'string',
      improvedPeriod: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterNodePoolsResponseBodyNodepoolsKubernetesConfig extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to install the CloudMonitor agent on ECS nodes. After the CloudMonitor agent is installed on ECS nodes, you can view the monitoring information about the instances in the CloudMonitor console. We recommend that you install the CloudMonitor agent. Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * @example
   * true
   */
  cmsEnabled?: boolean;
  /**
   * @remarks
   * The CPU management policy of the nodes in the node pool. The following policies are supported if the version of the cluster is Kubernetes 1.12.6 or later:
   * 
   * *   `static`: allows pods with specific resource characteristics on the node to be granted enhanced CPU affinity and exclusivity.
   * *   `none`: specifies that the default CPU affinity is used.
   * 
   * @example
   * none
   */
  cpuPolicy?: string;
  /**
   * @remarks
   * The labels that you want to add to the nodes in the cluster. You must add labels based on the following rules:
   * 
   * *   A label is a case-sensitive key-value pair. You can add up to 20 labels.
   * *   The key must be unique and can be up to 64 characters in length. The value can be empty and can be up to 128 characters in length. Keys and values cannot start with `aliyun`, `acs:`, `https://`, or `http://`. For more information, see [Labels and Selectors](https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#syntax-and-character-set).
   */
  labels?: Tag[];
  /**
   * @remarks
   * The custom node name. A custom node name consists of a prefix, an IP substring, and a suffix.
   * 
   * *   The prefix and suffix can contain multiple parts that are separated by periods (.). Each part can contain lowercase letters, digits, and hyphens (-). A custom node name must start and end with a digit or lowercase letter.
   * *   The IP substring length specifies the number of digits to be truncated from the end of the node IP address. The IP substring length ranges from 5 to 12.
   * 
   * For example, if the node IP address is 192.168.0.55, the prefix is aliyun.com, the IP substring length is 5, and the suffix is test, the node name is aliyun.com00055test.
   * 
   * @example
   * customized,test.,5,.com
   */
  nodeNameMode?: string;
  /**
   * @remarks
   * The name of the container runtime.
   * 
   * @example
   * docker
   */
  runtime?: string;
  /**
   * @remarks
   * The version of the container runtime.
   * 
   * @example
   * 19.03.5
   */
  runtimeVersion?: string;
  /**
   * @remarks
   * The taints of the nodes in the node pool. Taints can be used together with tolerations to prevent pods from being scheduled to specified nodes. For more information, see [taint-and-toleration](https://kubernetes.io/zh/docs/concepts/scheduling-eviction/taint-and-toleration/).
   */
  taints?: Taint[];
  /**
   * @remarks
   * Specifies whether the nodes are schedulable after a scale-out activity is performed.
   * 
   * @example
   * true
   */
  unschedulable?: boolean;
  /**
   * @remarks
   * The user data of the node pool. For more information, see [Generate user-defined data](https://help.aliyun.com/document_detail/49121.html).
   * 
   * @example
   * IyEvYmluL3NoCmVjaG8gIkhlbGxvIEFD****
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      cmsEnabled: 'cms_enabled',
      cpuPolicy: 'cpu_policy',
      labels: 'labels',
      nodeNameMode: 'node_name_mode',
      runtime: 'runtime',
      runtimeVersion: 'runtime_version',
      taints: 'taints',
      unschedulable: 'unschedulable',
      userData: 'user_data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cmsEnabled: 'boolean',
      cpuPolicy: 'string',
      labels: { 'type': 'array', 'itemType': Tag },
      nodeNameMode: 'string',
      runtime: 'string',
      runtimeVersion: 'string',
      taints: { 'type': 'array', 'itemType': Taint },
      unschedulable: 'boolean',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterNodePoolsResponseBodyNodepoolsManagementAutoRepairPolicy extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to allow node restart.
   * 
   * @example
   * true
   */
  restartNode?: boolean;
  static names(): { [key: string]: string } {
    return {
      restartNode: 'restart_node',
    };
  }

  static types(): { [key: string]: any } {
    return {
      restartNode: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterNodePoolsResponseBodyNodepoolsManagementAutoUpgradePolicy extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to allow auto update of the kubelet.
   * 
   * @example
   * true
   */
  autoUpgradeKubelet?: boolean;
  static names(): { [key: string]: string } {
    return {
      autoUpgradeKubelet: 'auto_upgrade_kubelet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoUpgradeKubelet: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterNodePoolsResponseBodyNodepoolsManagementAutoVulFixPolicy extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to allow node restart.
   * 
   * @example
   * true
   */
  restartNode?: boolean;
  /**
   * @remarks
   * The severity level of CVEs that can be automatically patched. Multiple severity levels are separated by commas (,).
   * 
   * @example
   * asap,nntf
   */
  vulLevel?: string;
  static names(): { [key: string]: string } {
    return {
      restartNode: 'restart_node',
      vulLevel: 'vul_level',
    };
  }

  static types(): { [key: string]: any } {
    return {
      restartNode: 'boolean',
      vulLevel: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterNodePoolsResponseBodyNodepoolsManagementUpgradeConfig extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to enable auto update. Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * @example
   * true
   */
  autoUpgrade?: boolean;
  /**
   * @remarks
   * The maximum number of unavailable nodes. Valid values: 1 to 1000.
   * 
   * Default value: 1
   * 
   * @example
   * 1
   */
  maxUnavailable?: number;
  /**
   * @remarks
   * The number of additional nodes.
   * 
   * @example
   * 5
   */
  surge?: number;
  /**
   * @remarks
   * The percentage of additional nodes to the total nodes in the node pool. You must specify this parameter or the `surge` parameter.
   * 
   * The number of additional nodes = The percentage of additional nodes × The number of nodes in the node pool. For example, if the percentage of additional nodes is 50% and the number of nodes in the node pool is 6, the number of additional nodes is 3.
   * 
   * @example
   * 50
   */
  surgePercentage?: number;
  static names(): { [key: string]: string } {
    return {
      autoUpgrade: 'auto_upgrade',
      maxUnavailable: 'max_unavailable',
      surge: 'surge',
      surgePercentage: 'surge_percentage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoUpgrade: 'boolean',
      maxUnavailable: 'number',
      surge: 'number',
      surgePercentage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterNodePoolsResponseBodyNodepoolsManagement extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to enable auto repair. This parameter takes effect only if `enable` is set to true. Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * @example
   * true
   */
  autoRepair?: boolean;
  /**
   * @remarks
   * The auto node repair policy.
   */
  autoRepairPolicy?: DescribeClusterNodePoolsResponseBodyNodepoolsManagementAutoRepairPolicy;
  /**
   * @remarks
   * Specifies whether to enable auto update.
   * 
   * @example
   * true
   */
  autoUpgrade?: boolean;
  /**
   * @remarks
   * The auto update policy.
   */
  autoUpgradePolicy?: DescribeClusterNodePoolsResponseBodyNodepoolsManagementAutoUpgradePolicy;
  /**
   * @remarks
   * Specifies whether to enable auto Common Vulnerabilities and Exposures (CVE) patching.
   * 
   * @example
   * true
   */
  autoVulFix?: boolean;
  /**
   * @remarks
   * The auto CVE patching policy.
   */
  autoVulFixPolicy?: DescribeClusterNodePoolsResponseBodyNodepoolsManagementAutoVulFixPolicy;
  /**
   * @remarks
   * Specifies whether to enable the managed node pool feature. Valid values:
   * 
   * *   `true`
   * *   `false`: If you set this parameter to false, other parameters of `management` do not take effect.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The configurations of auto update. The configurations take effect only if `enable` is set to true.
   */
  upgradeConfig?: DescribeClusterNodePoolsResponseBodyNodepoolsManagementUpgradeConfig;
  static names(): { [key: string]: string } {
    return {
      autoRepair: 'auto_repair',
      autoRepairPolicy: 'auto_repair_policy',
      autoUpgrade: 'auto_upgrade',
      autoUpgradePolicy: 'auto_upgrade_policy',
      autoVulFix: 'auto_vul_fix',
      autoVulFixPolicy: 'auto_vul_fix_policy',
      enable: 'enable',
      upgradeConfig: 'upgrade_config',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRepair: 'boolean',
      autoRepairPolicy: DescribeClusterNodePoolsResponseBodyNodepoolsManagementAutoRepairPolicy,
      autoUpgrade: 'boolean',
      autoUpgradePolicy: DescribeClusterNodePoolsResponseBodyNodepoolsManagementAutoUpgradePolicy,
      autoVulFix: 'boolean',
      autoVulFixPolicy: DescribeClusterNodePoolsResponseBodyNodepoolsManagementAutoVulFixPolicy,
      enable: 'boolean',
      upgradeConfig: DescribeClusterNodePoolsResponseBodyNodepoolsManagementUpgradeConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterNodePoolsResponseBodyNodepoolsNodeConfig extends $tea.Model {
  /**
   * @remarks
   * The parameter settings of the kubelet.
   */
  kubeletConfiguration?: KubeletConfig;
  static names(): { [key: string]: string } {
    return {
      kubeletConfiguration: 'kubelet_configuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      kubeletConfiguration: KubeletConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterNodePoolsResponseBodyNodepoolsNodepoolInfo extends $tea.Model {
  /**
   * @remarks
   * The time when the node pool was created.
   * 
   * @example
   * 2020-09-27T19:14:09.156823496+08:00
   */
  created?: string;
  /**
   * @remarks
   * Specifies whether the node pool is a default node pool. A Container Service for Kubernetes (ACK) cluster generally has only one default node pool. Valid values:
   * 
   * *   `true`
   * *   `false`:
   * 
   * @example
   * true
   */
  isDefault?: boolean;
  /**
   * @remarks
   * The name of the node pool.
   * 
   * The name must be 1 to 63 characters in length, and can contain digits, letters, and hyphens (-). It cannot start with a hyphen (-).
   * 
   * @example
   * default-nodepool
   */
  name?: string;
  /**
   * @remarks
   * The node pool ID.
   * 
   * @example
   * np615c0e0966124216a0412e10afe0****
   */
  nodepoolId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmyvw3wjm****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The type of node pool. Valid values:
   * 
   * *   `edge`: edge node pool.
   * *   `ess`: node pool in the cloud.
   * 
   * @example
   * ess
   */
  type?: string;
  /**
   * @remarks
   * The time when the node pool was last updated.
   * 
   * @example
   * 2020-09-27T20:37:46+08:00
   */
  updated?: string;
  static names(): { [key: string]: string } {
    return {
      created: 'created',
      isDefault: 'is_default',
      name: 'name',
      nodepoolId: 'nodepool_id',
      regionId: 'region_id',
      resourceGroupId: 'resource_group_id',
      type: 'type',
      updated: 'updated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      created: 'string',
      isDefault: 'boolean',
      name: 'string',
      nodepoolId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      type: 'string',
      updated: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterNodePoolsResponseBodyNodepoolsScalingGroupPrivatePoolOptions extends $tea.Model {
  /**
   * @remarks
   * The private pool ID, which is the same as the ID of the elasticity assurance or capacity reservation for which the private pool is generated.
   * 
   * @example
   * eap-bp67acfmxazb4****
   */
  id?: string;
  /**
   * @remarks
   * The type of the private node pool. This parameter specifies the type of the private node pool that is used to create instances. A private node pool is generated when an elasticity assurance or a capacity reservation service takes effect. The system selects a private node pool to launch instances. Valid values:
   * 
   * *   `Open`: uses open private pool. The system selects an open private node pool to launch instances. If no matching open private node pool is available, the resources in the public node pool are used.
   * *   `Target`: uses the specified private node pool. The system uses the resources of the specified private node pool to launch instances. If the specified private node pool is unavailable, instances cannot be launched.
   * *   `None`: No private node pool is used. The resources of private node pools are not used to launch instances.
   * 
   * @example
   * Open
   */
  matchCriteria?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      matchCriteria: 'match_criteria',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      matchCriteria: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterNodePoolsResponseBodyNodepoolsScalingGroupSpotPriceLimit extends $tea.Model {
  /**
   * @remarks
   * The instance type of preemptible instances.
   * 
   * @example
   * ecs.c6.large
   */
  instanceType?: string;
  /**
   * @remarks
   * The price cap for a single preemptible instance.
   * 
   * Unit: USD/hour.
   * 
   * @example
   * 0.39
   */
  priceLimit?: string;
  static names(): { [key: string]: string } {
    return {
      instanceType: 'instance_type',
      priceLimit: 'price_limit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'string',
      priceLimit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterNodePoolsResponseBodyNodepoolsScalingGroup extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to enable auto-renewal for the nodes in the node pool. This parameter takes effect only if `instance_charge_type` is set to `PrePaid`. Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The auto-renewal duration. This parameter takes effect and is required only if `instance_charge_type` is set to `PrePaid`.
   * 
   * If you set `period_unit` to Month, the valid values of this parameter are 1, 2, 3, 6, and 12.
   * 
   * @example
   * 0
   */
  autoRenewPeriod?: number;
  /**
   * @remarks
   * Specifies whether to enable Center for Internet Security (CIS) reinforcement. CIS reinforcement can be enabled only if Alibaba Cloud Linux 2 or Alibaba Cloud Linux 3 is installed on nodes.
   * 
   * @example
   * false
   * 
   * @deprecated
   */
  cisEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to automatically create pay-as-you-go instances to meet the required number of ECS instances if preemptible instances cannot be created due to reasons such as the cost or insufficient inventory. This parameter takes effect if you set `multi_az_policy` to `COST_OPTIMIZED` Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * @example
   * true
   */
  compensateWithOnDemand?: boolean;
  /**
   * @remarks
   * The configurations of the data disks that are mounted to the nodes in the node pool. The configurations include the disk type and disk size.
   */
  dataDisks?: DataDisk[];
  /**
   * @remarks
   * The deployment set ID.
   * 
   * @example
   * ds-bp1d19mmbsv3jf6xxxxx
   */
  deploymentsetId?: string;
  /**
   * @remarks
   * The expected number of nodes in the node pool.
   * 
   * @example
   * 2
   */
  desiredSize?: number;
  /**
   * @remarks
   * The custom image ID. You can call the `DescribeKubernetesVersionMetadata` operation to query the images supported by ACK.
   * 
   * @example
   * aliyun_2_1903_x64_20G_alibase_20200529.vhd
   */
  imageId?: string;
  /**
   * @remarks
   * The type of the operating system image.
   * 
   * @example
   * AliyunLinux
   */
  imageType?: string;
  /**
   * @remarks
   * The billing method of the nodes in the node pool. Valid values:
   * 
   * *   `PrePaid`: subscription.
   * *   `PostPaid`: pay-as-you-go.
   * 
   * @example
   * PostPaid
   */
  instanceChargeType?: string;
  instancePatterns?: InstancePatterns[];
  /**
   * @remarks
   * The list of instance types. You can select multiple instance types. When the system needs to create a node, it starts from the first instance type until the node is created. The instance type that is used to create the node varies based on the inventory.
   * 
   * @example
   * ecs.n4.large
   */
  instanceTypes?: string[];
  /**
   * @remarks
   * The billing method of the public IP address.
   * 
   * @example
   * PayByBandwidth
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The maximum outbound bandwidth of the public IP address. Unit: Mbit/s. Valid values: 1 to 100.
   * 
   * @example
   * 10
   */
  internetMaxBandwidthOut?: number;
  /**
   * @remarks
   * The name of the key pair. You must specify this parameter or the `login_password` parameter.
   * 
   * You must specify the `key_pair` parameter if the node pool is a managed node pool.
   * 
   * @example
   * pro-nodepool
   */
  keyPair?: string;
  /**
   * @remarks
   * Specifies whether a non-root user can log on to the ECS instance added to the node pool.
   * 
   * @example
   * true
   */
  loginAsNonRoot?: boolean;
  /**
   * @remarks
   * The password for SSH logon. You must specify this parameter or the `key_pair` parameter. The password must be 8 to 30 characters in length, and must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.
   * 
   * The returned password is encrypted to ensure security.
   * 
   * @example
   * ******
   */
  loginPassword?: string;
  /**
   * @remarks
   * The ECS instance scaling policy for the multi-zone scaling group. Valid values:
   * 
   * *   `PRIORITY`: ECS instances are created based on the VSwitchIds.N parameter. If Auto Scaling fails to create an ECS instance in the zone of the vSwitch that has the highest priority, Auto Scaling attempts to create the ECS instance in the zone of the vSwitch that has a lower priority.
   * 
   * *   `COST_OPTIMIZED`: ECS instances are created based on the vCPU unit price in ascending order. Preemptible instances are preferably created when preemptible instance types are specified in the scaling configuration. You can specify `CompensateWithOnDemand` to specify whether to automatically create pay-as-you-go instances if preemptible instances cannot be created due to insufficient resources.
   * 
   *     **
   * 
   *     **Note** `COST_OPTIMIZED` takes effect only if multiple instance types are specified or at least one preemptible instance type is specified.
   * 
   * *   `BALANCE`: ECS instances are evenly distributed across multiple zones specified by the scaling group. If the distribution of ECS instances across zones is not balanced due to reasons such as insufficient inventory, you can call the `RebalanceInstances` operation to evenly distribute the ECS instances across zones. For more information, see [RebalanceInstances](https://help.aliyun.com/document_detail/71516.html).
   * 
   * @example
   * COST_OPTIMIZED
   */
  multiAzPolicy?: string;
  /**
   * @remarks
   * The minimum number of pay-as-you-go instances that must be kept in the scaling group. Valid values: 0 to 1000. If the number of pay-as-you-go instances is smaller than the value of this parameter, Auto Scaling preferably creates pay-as-you-go instances
   * 
   * @example
   * 0
   */
  onDemandBaseCapacity?: number;
  /**
   * @remarks
   * The percentage of pay-as-you-go instances among the extra instances that exceed the number specified by `on_demand_base_capacity`. Valid values: 0 to 100.
   * 
   * @example
   * 20
   */
  onDemandPercentageAboveBaseCapacity?: number;
  /**
   * @remarks
   * The subscription duration of the nodes in the node pool. This parameter takes effect and is required if you set `instance_charge_type` to `PrePaid`.
   * 
   * If `period_unit` is set to Month, the valid values of period are 1, 2, 3, 6, 12, 24, 36, 48, and 60.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The billing cycle of the nodes in the node pool. This parameter takes effect only if`instance_charge_type` is set to `PrePaid`.
   * 
   * Valid value: `Month`, which indicates that the subscription duration is measured in months.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * The operating system distribution. Valid values:
   * 
   * *   `CentOS`
   * *   `AliyunLinux`
   * *   `Windows`
   * *   `WindowsCore`
   * 
   * @example
   * AliyunLinux
   */
  platform?: string;
  /**
   * @remarks
   * The configurations of the private node pool.
   */
  privatePoolOptions?: DescribeClusterNodePoolsResponseBodyNodepoolsScalingGroupPrivatePoolOptions;
  /**
   * @remarks
   * The name of the worker Resource Access Management (RAM) role. The RAM role is assigned to the worker nodes of the cluster to allow the worker nodes to manage ECS instances.
   * 
   * @example
   * KubernetesWorkerRole-021dc54f-929b-437a-8ae0-34c24d3e****
   */
  ramPolicy?: string;
  /**
   * @example
   * KubernetesWorkerRole-4a4fa089-80c1-48a5-b3c6-9349311f****
   */
  ramRoleName?: string;
  /**
   * @remarks
   * The ApsaraDB RDS instances. If you specify the list of ApsaraDB RDS instances, ECS instances in the cluster are automatically added to the whitelist of the ApsaraDB RDS instances.
   */
  rdsInstances?: string[];
  /**
   * @remarks
   * The scaling group ID.
   * 
   * @example
   * asg-2ze8n5qw4atggut8****
   */
  scalingGroupId?: string;
  /**
   * @remarks
   * The scaling mode of the scaling group. Valid values:
   * 
   * *   `release`: the standard mode. ECS instances are created and released based on the resource usage.
   * *   `recycle`: the swift mode. ECS instances are created, stopped, or started during scaling events. This reduces the time required for the next scale-out event. When the instance is stopped, you are charged only for the storage service. This does not apply to ECS instances that are attached to local disks.
   * 
   * @example
   * release
   */
  scalingPolicy?: string;
  /**
   * @remarks
   * The ID of the security group to which the node pool is added. If the node pool is added to multiple security groups, the first ID in the value of the `security_group_ids` parameter is returned.
   * 
   * @example
   * sg-2ze1iuk12m2sb4c4****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The IDs of security groups for the node pool.
   */
  securityGroupIds?: string[];
  /**
   * @remarks
   * 阿里云OS安全加固。取值：
   * 
   * - `true`：开启阿里云OS安全加固。
   * - `false`：不开启阿里云OS安全加固。
   * 
   * 默认值：`false`。
   */
  securityHardeningOs?: boolean;
  /**
   * @remarks
   * Specifies whether to enable reinforcement based on classified protection. You can enable reinforcement based on classified protection only if Alibaba Cloud Linux 2 or Alibaba Cloud Linux 3 is installed on nodes. Alibaba Cloud provides standards for baseline check and a scanner to ensure the compliance of Alibaba Cloud Linux 2 and Alibaba Cloud Linux 3 images with the level 3 standards of classified protection.
   * 
   * @example
   * false
   */
  socEnabled?: boolean;
  /**
   * @remarks
   * The number of instance types that are available for creating preemptible instances. Auto Scaling creates preemptible instances of multiple instance types that are available at the lowest cost. Valid values: 1 to 10.
   * 
   * @example
   * 5
   */
  spotInstancePools?: number;
  /**
   * @remarks
   * Specifies whether to enable the supplementation of preemptible instances. If the supplementation of preemptible instances is enabled, when the scaling group receives a system message that a preemptible instance is to be reclaimed, the scaling group attempts to create a new instance to replace this instance. Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * @example
   * false
   */
  spotInstanceRemedy?: boolean;
  /**
   * @remarks
   * The bid configurations of preemptible instances.
   */
  spotPriceLimit?: DescribeClusterNodePoolsResponseBodyNodepoolsScalingGroupSpotPriceLimit[];
  /**
   * @remarks
   * The bidding policy of preemptible instances. Valid values:
   * 
   * *   NoSpot: non-preemptible.
   * *   SpotWithPriceLimit: specifies the highest bid.
   * *   SpotAsPriceGo: automatically submits bids based on the up-to-date market price.
   * 
   * For more information, see [Create a preemptible elastic container instance](https://help.aliyun.com/document_detail/157759.html).
   * 
   * @example
   * NoSpot
   */
  spotStrategy?: string;
  /**
   * @remarks
   * Specifies whether to enable Burst for the system disk when the disk type is cloud_auto.
   * 
   * @example
   * true
   */
  systemDiskBurstingEnabled?: boolean;
  /**
   * @remarks
   * The system disk types. The system attempts to create system disks from a disk type with a lower priority when the disk type with a higher priority is unavailable. Valid values: cloud: disk cloud_efficiency: utra disk cloud_ssd: standard SSD cloud_essd: Enterprise SSD (ESSD)
   */
  systemDiskCategories?: string[];
  /**
   * @remarks
   * The type of system disk. Valid values:
   * 
   * *   `cloud_efficiency`: ultra disk
   * *   `cloud_ssd`: SSD
   * 
   * @example
   * cloud_efficiency
   */
  systemDiskCategory?: string;
  /**
   * @remarks
   * The algorithm that you want to use to encrypt the system disk. Set the value to aes-256.
   * 
   * @example
   * aes-256
   */
  systemDiskEncryptAlgorithm?: string;
  /**
   * @remarks
   * Specifies whether to encrypt the system disk. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  systemDiskEncrypted?: boolean;
  /**
   * @remarks
   * The ID of the Key Management Service (KMS) key that is used to encrypt the system disk.
   * 
   * @example
   * 0e478b7a-4262-4802-b8cb-00d3fb40****
   */
  systemDiskKmsKeyId?: string;
  /**
   * @remarks
   * The performance level (PL) of the system disk. This parameter takes effect only for an ESSD.
   * 
   * @example
   * PL1
   */
  systemDiskPerformanceLevel?: string;
  /**
   * @remarks
   * The predefined read and write IOPS of the system disk when the disk type is cloud_auto.
   * 
   * @example
   * 1000
   */
  systemDiskProvisionedIops?: number;
  /**
   * @remarks
   * The size of the system disk. Unit: GiB.
   * 
   * Valid values: 20 to 500.
   * 
   * @example
   * 120
   */
  systemDiskSize?: number;
  /**
   * @remarks
   * The tag that you want to add only to ECS instances.
   * 
   * The tag key must be unique and cannot exceed 128 characters in length. The tag key and value must not start with aliyun or acs: or contain https:// or http://.
   */
  tags?: Tag[];
  /**
   * @remarks
   * The vSwitch IDs. You can specify 1 to 20 vSwitches.
   * 
   * >  To ensure high availability, we recommend that you select vSwitches in different zones.
   */
  vswitchIds?: string[];
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'auto_renew',
      autoRenewPeriod: 'auto_renew_period',
      cisEnabled: 'cis_enabled',
      compensateWithOnDemand: 'compensate_with_on_demand',
      dataDisks: 'data_disks',
      deploymentsetId: 'deploymentset_id',
      desiredSize: 'desired_size',
      imageId: 'image_id',
      imageType: 'image_type',
      instanceChargeType: 'instance_charge_type',
      instancePatterns: 'instance_patterns',
      instanceTypes: 'instance_types',
      internetChargeType: 'internet_charge_type',
      internetMaxBandwidthOut: 'internet_max_bandwidth_out',
      keyPair: 'key_pair',
      loginAsNonRoot: 'login_as_non_root',
      loginPassword: 'login_password',
      multiAzPolicy: 'multi_az_policy',
      onDemandBaseCapacity: 'on_demand_base_capacity',
      onDemandPercentageAboveBaseCapacity: 'on_demand_percentage_above_base_capacity',
      period: 'period',
      periodUnit: 'period_unit',
      platform: 'platform',
      privatePoolOptions: 'private_pool_options',
      ramPolicy: 'ram_policy',
      ramRoleName: 'ram_role_name',
      rdsInstances: 'rds_instances',
      scalingGroupId: 'scaling_group_id',
      scalingPolicy: 'scaling_policy',
      securityGroupId: 'security_group_id',
      securityGroupIds: 'security_group_ids',
      securityHardeningOs: 'security_hardening_os',
      socEnabled: 'soc_enabled',
      spotInstancePools: 'spot_instance_pools',
      spotInstanceRemedy: 'spot_instance_remedy',
      spotPriceLimit: 'spot_price_limit',
      spotStrategy: 'spot_strategy',
      systemDiskBurstingEnabled: 'system_disk_bursting_enabled',
      systemDiskCategories: 'system_disk_categories',
      systemDiskCategory: 'system_disk_category',
      systemDiskEncryptAlgorithm: 'system_disk_encrypt_algorithm',
      systemDiskEncrypted: 'system_disk_encrypted',
      systemDiskKmsKeyId: 'system_disk_kms_key_id',
      systemDiskPerformanceLevel: 'system_disk_performance_level',
      systemDiskProvisionedIops: 'system_disk_provisioned_iops',
      systemDiskSize: 'system_disk_size',
      tags: 'tags',
      vswitchIds: 'vswitch_ids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'boolean',
      autoRenewPeriod: 'number',
      cisEnabled: 'boolean',
      compensateWithOnDemand: 'boolean',
      dataDisks: { 'type': 'array', 'itemType': DataDisk },
      deploymentsetId: 'string',
      desiredSize: 'number',
      imageId: 'string',
      imageType: 'string',
      instanceChargeType: 'string',
      instancePatterns: { 'type': 'array', 'itemType': InstancePatterns },
      instanceTypes: { 'type': 'array', 'itemType': 'string' },
      internetChargeType: 'string',
      internetMaxBandwidthOut: 'number',
      keyPair: 'string',
      loginAsNonRoot: 'boolean',
      loginPassword: 'string',
      multiAzPolicy: 'string',
      onDemandBaseCapacity: 'number',
      onDemandPercentageAboveBaseCapacity: 'number',
      period: 'number',
      periodUnit: 'string',
      platform: 'string',
      privatePoolOptions: DescribeClusterNodePoolsResponseBodyNodepoolsScalingGroupPrivatePoolOptions,
      ramPolicy: 'string',
      ramRoleName: 'string',
      rdsInstances: { 'type': 'array', 'itemType': 'string' },
      scalingGroupId: 'string',
      scalingPolicy: 'string',
      securityGroupId: 'string',
      securityGroupIds: { 'type': 'array', 'itemType': 'string' },
      securityHardeningOs: 'boolean',
      socEnabled: 'boolean',
      spotInstancePools: 'number',
      spotInstanceRemedy: 'boolean',
      spotPriceLimit: { 'type': 'array', 'itemType': DescribeClusterNodePoolsResponseBodyNodepoolsScalingGroupSpotPriceLimit },
      spotStrategy: 'string',
      systemDiskBurstingEnabled: 'boolean',
      systemDiskCategories: { 'type': 'array', 'itemType': 'string' },
      systemDiskCategory: 'string',
      systemDiskEncryptAlgorithm: 'string',
      systemDiskEncrypted: 'boolean',
      systemDiskKmsKeyId: 'string',
      systemDiskPerformanceLevel: 'string',
      systemDiskProvisionedIops: 'number',
      systemDiskSize: 'number',
      tags: { 'type': 'array', 'itemType': Tag },
      vswitchIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterNodePoolsResponseBodyNodepoolsStatus extends $tea.Model {
  /**
   * @remarks
   * The number of failed nodes.
   * 
   * @example
   * 0
   */
  failedNodes?: number;
  /**
   * @remarks
   * The number of healthy nodes.
   * 
   * @example
   * 3
   */
  healthyNodes?: number;
  /**
   * @remarks
   * The number of nodes that are being created.
   * 
   * @example
   * 0
   */
  initialNodes?: number;
  /**
   * @remarks
   * The number of offline nodes.
   * 
   * @example
   * 0
   */
  offlineNodes?: number;
  /**
   * @remarks
   * The number of nodes that are being removed.
   * 
   * @example
   * 0
   */
  removingNodes?: number;
  /**
   * @remarks
   * The number of running nodes.
   * 
   * @example
   * 3
   */
  servingNodes?: number;
  /**
   * @remarks
   * The status of the node pool. Valid values:
   * 
   * *   `active`: The node pool is active.
   * *   `scaling`: The node pool is being scaled.
   * *   `removing`: The nodes are being removed from the node pool.
   * *   `deleting`: The node pool is being deleted.
   * *   `updating`: The node pool is being updated.
   * 
   * @example
   * active
   */
  state?: string;
  /**
   * @remarks
   * The total number of nodes in the node pool.
   * 
   * @example
   * 3
   */
  totalNodes?: number;
  static names(): { [key: string]: string } {
    return {
      failedNodes: 'failed_nodes',
      healthyNodes: 'healthy_nodes',
      initialNodes: 'initial_nodes',
      offlineNodes: 'offline_nodes',
      removingNodes: 'removing_nodes',
      servingNodes: 'serving_nodes',
      state: 'state',
      totalNodes: 'total_nodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedNodes: 'number',
      healthyNodes: 'number',
      initialNodes: 'number',
      offlineNodes: 'number',
      removingNodes: 'number',
      servingNodes: 'number',
      state: 'string',
      totalNodes: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterNodePoolsResponseBodyNodepoolsTeeConfig extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to enable confidential computing for the cluster. Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * @example
   * false
   */
  teeEnable?: boolean;
  static names(): { [key: string]: string } {
    return {
      teeEnable: 'tee_enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      teeEnable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterNodePoolsResponseBodyNodepools extends $tea.Model {
  /**
   * @remarks
   * The configurations of auto scaling.
   */
  autoScaling?: DescribeClusterNodePoolsResponseBodyNodepoolsAutoScaling;
  /**
   * @remarks
   * This parameter is discontinued.
   * 
   * The network configurations of the edge node pool. This parameter takes effect only on edge node pools.
   */
  interconnectConfig?: DescribeClusterNodePoolsResponseBodyNodepoolsInterconnectConfig;
  /**
   * @remarks
   * The network type of the edge node pool. Valid values: basic and dedicated. This parameter takes effect only on edge node pools.
   * 
   * @example
   * improved
   */
  interconnectMode?: string;
  /**
   * @remarks
   * The configurations of the cluster.
   */
  kubernetesConfig?: DescribeClusterNodePoolsResponseBodyNodepoolsKubernetesConfig;
  /**
   * @remarks
   * The configurations of managed node pools. Managed node pools are available only in professional managed Kubernetes clusters.
   */
  management?: DescribeClusterNodePoolsResponseBodyNodepoolsManagement;
  /**
   * @remarks
   * The maximum number of nodes that can be created in the edge node pool. The value of this parameter must be greater than or equal to 0. A value of 0 indicates that the number of nodes in the node pool is limited only by the quota of nodes in the cluster. In most cases, this parameter is set to a value larger than 0 for edge node pools. This parameter is set to 0 for node pools whose types are ess or default edge node pools.
   * 
   * @example
   * 10
   */
  maxNodes?: number;
  /**
   * @remarks
   * The configurations of nodes.
   */
  nodeConfig?: DescribeClusterNodePoolsResponseBodyNodepoolsNodeConfig;
  /**
   * @remarks
   * The information about the node pool.
   */
  nodepoolInfo?: DescribeClusterNodePoolsResponseBodyNodepoolsNodepoolInfo;
  /**
   * @remarks
   * The configurations of the scaling group.
   */
  scalingGroup?: DescribeClusterNodePoolsResponseBodyNodepoolsScalingGroup;
  /**
   * @remarks
   * The status details of the node pool.
   */
  status?: DescribeClusterNodePoolsResponseBodyNodepoolsStatus;
  /**
   * @remarks
   * The configurations of confidential computing.
   */
  teeConfig?: DescribeClusterNodePoolsResponseBodyNodepoolsTeeConfig;
  static names(): { [key: string]: string } {
    return {
      autoScaling: 'auto_scaling',
      interconnectConfig: 'interconnect_config',
      interconnectMode: 'interconnect_mode',
      kubernetesConfig: 'kubernetes_config',
      management: 'management',
      maxNodes: 'max_nodes',
      nodeConfig: 'node_config',
      nodepoolInfo: 'nodepool_info',
      scalingGroup: 'scaling_group',
      status: 'status',
      teeConfig: 'tee_config',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoScaling: DescribeClusterNodePoolsResponseBodyNodepoolsAutoScaling,
      interconnectConfig: DescribeClusterNodePoolsResponseBodyNodepoolsInterconnectConfig,
      interconnectMode: 'string',
      kubernetesConfig: DescribeClusterNodePoolsResponseBodyNodepoolsKubernetesConfig,
      management: DescribeClusterNodePoolsResponseBodyNodepoolsManagement,
      maxNodes: 'number',
      nodeConfig: DescribeClusterNodePoolsResponseBodyNodepoolsNodeConfig,
      nodepoolInfo: DescribeClusterNodePoolsResponseBodyNodepoolsNodepoolInfo,
      scalingGroup: DescribeClusterNodePoolsResponseBodyNodepoolsScalingGroup,
      status: DescribeClusterNodePoolsResponseBodyNodepoolsStatus,
      teeConfig: DescribeClusterNodePoolsResponseBodyNodepoolsTeeConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterNodesResponseBodyNodes extends $tea.Model {
  /**
   * @remarks
   * The time when the node was created.
   * 
   * @example
   * 2020-08-25T11:25:35+08:00
   */
  creationTime?: string;
  /**
   * @remarks
   * The error message generated when the node was created.
   * 
   * @example
   * error***
   */
  errorMessage?: string;
  /**
   * @remarks
   * The expiration date of the node.
   * 
   * @example
   * 2099-12-31T23:59:00+08:00
   */
  expiredTime?: string;
  /**
   * @remarks
   * The name of the host.
   * 
   * @example
   * iZ2vcckdmxp7u0urj2k****
   */
  hostName?: string;
  /**
   * @remarks
   * The ID of the system image that is used by the node.
   * 
   * @example
   * aliyun_2_1903_x64_20G_alibase_20200529.vhd
   */
  imageId?: string;
  /**
   * @remarks
   * The billing method of the node. Valid values:
   * 
   * *   `PrePaid`: the subscription billing method. If the value is PrePaid, make sure that you have a sufficient balance or credit in your account. Otherwise, an `InvalidPayMethod` error is returned.
   * *   `PostPaid`: the pay-as-you-go billing method.
   * 
   * @example
   * PostPaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * i-2vcckdmxp7u0urj2****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the instance on which the node is deployed.
   * 
   * @example
   * worker-k8s-for-cs-c5cdf7e3938bc4f8eb0e44b21a80f****
   */
  instanceName?: string;
  /**
   * @remarks
   * The role of the node. Valid values:
   * 
   * *   Master: master node
   * *   Worker: worker node
   * 
   * @example
   * Worker
   */
  instanceRole?: string;
  /**
   * @remarks
   * The status of the node.
   * 
   * @example
   * Running
   */
  instanceStatus?: string;
  /**
   * @remarks
   * The type of the node.
   * 
   * @example
   * ecs.c5.xlarge
   */
  instanceType?: string;
  /**
   * @remarks
   * The ECS instance family of the node.
   * 
   * @example
   * ecs.c5
   */
  instanceTypeFamily?: string;
  /**
   * @remarks
   * The IP address of the node.
   */
  ipAddress?: string[];
  /**
   * @remarks
   * Indicates whether the instance on which the node is deployed is provided by Alibaba Cloud. Valid values:
   * 
   * *   `true`: The instance is provided by Alibaba Cloud.
   * *   `false`: The instance is not provided by Alibaba Cloud.
   * 
   * @example
   * true
   */
  isAliyunNode?: boolean;
  /**
   * @remarks
   * The name of the node. This name is the identifier of the node in the cluster.
   * 
   * @example
   * cn-chengdu.192.168.0.36
   */
  nodeName?: string;
  /**
   * @remarks
   * Indicates whether the node is ready. Valid values:
   * 
   * *   `Ready`: The node is ready.
   * *   `NotReady`: The node is not ready.
   * *   `Unknown`: The status of the node is unknown.
   * *   `Offline`: The node is offline.
   * 
   * @example
   * Ready
   */
  nodeStatus?: string;
  /**
   * @remarks
   * The node pool ID.
   * 
   * @example
   * np0794239424a84eb7a95327369d56****
   */
  nodepoolId?: string;
  /**
   * @remarks
   * Indicates how the node is initialized. A node can be manually created or created by using Resource Orchestration Service (ROS).
   * 
   * @example
   * ess_attach
   */
  source?: string;
  /**
   * @remarks
   * The type of preemptible instance. Valid values:
   * 
   * *   NoSpot: a non-preemptible instance.
   * *   SpotWithPriceLimit: a preemptible instance that is configured with the highest bid price.
   * *   SpotAsPriceGo: a preemptible instance for which the system automatically bids based on the current market price.
   * 
   * @example
   * NoSpot
   */
  spotStrategy?: string;
  /**
   * @remarks
   * The status of the node. Valid values:
   * 
   * *   `pending`: The node is being created.
   * *   `running`: The node is running.
   * *   `starting`: The node is being started.
   * *   `stopping`: The node is being stopped.
   * *   `stopped`: The node is stopped.
   * 
   * @example
   * running
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'creation_time',
      errorMessage: 'error_message',
      expiredTime: 'expired_time',
      hostName: 'host_name',
      imageId: 'image_id',
      instanceChargeType: 'instance_charge_type',
      instanceId: 'instance_id',
      instanceName: 'instance_name',
      instanceRole: 'instance_role',
      instanceStatus: 'instance_status',
      instanceType: 'instance_type',
      instanceTypeFamily: 'instance_type_family',
      ipAddress: 'ip_address',
      isAliyunNode: 'is_aliyun_node',
      nodeName: 'node_name',
      nodeStatus: 'node_status',
      nodepoolId: 'nodepool_id',
      source: 'source',
      spotStrategy: 'spot_strategy',
      state: 'state',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      errorMessage: 'string',
      expiredTime: 'string',
      hostName: 'string',
      imageId: 'string',
      instanceChargeType: 'string',
      instanceId: 'string',
      instanceName: 'string',
      instanceRole: 'string',
      instanceStatus: 'string',
      instanceType: 'string',
      instanceTypeFamily: 'string',
      ipAddress: { 'type': 'array', 'itemType': 'string' },
      isAliyunNode: 'boolean',
      nodeName: 'string',
      nodeStatus: 'string',
      nodepoolId: 'string',
      source: 'string',
      spotStrategy: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterNodesResponseBodyPage extends $tea.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 5
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'page_number',
      pageSize: 'page_size',
      totalCount: 'total_count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterResourcesResponseBodyDependencies extends $tea.Model {
  clusterId?: string;
  resourceType?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'cluster_id',
      resourceType: 'resource_type',
      instanceId: 'instance_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      resourceType: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterResourcesResponseBodyAssociatedObject extends $tea.Model {
  /**
   * @remarks
   * The Kubernetes object type.
   * 
   * @example
   * Service
   */
  kind?: string;
  /**
   * @remarks
   * The namespace in which the Kubernetes object resides.
   * 
   * @example
   * kube-system
   */
  namespace?: string;
  /**
   * @remarks
   * The Kubernetes object name.
   * 
   * @example
   * nginx-ingress-lb
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      kind: 'kind',
      namespace: 'namespace',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      kind: 'string',
      namespace: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterResourcesResponseBodyDeleteBehavior extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to delete the resource by default when the cluster is deleted.
   * 
   * @example
   * false
   */
  deleteByDefault?: boolean;
  /**
   * @remarks
   * Specifies whether the default behavior returned in delete_by_default can be changed.
   * 
   * @example
   * false
   */
  changeable?: boolean;
  static names(): { [key: string]: string } {
    return {
      deleteByDefault: 'delete_by_default',
      changeable: 'changeable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteByDefault: 'boolean',
      changeable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterResourcesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * cb95aa626a47740afbf6aa099b65****
   */
  clusterId?: string;
  /**
   * @remarks
   * The time when the resource was created.
   * 
   * @example
   * 2020-09-11T10:11:54+08:00
   */
  created?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * lb-wz9poz4r0ymh8u0uf****
   */
  instanceId?: string;
  /**
   * @remarks
   * The resource information. For more information about how to query the source information about the resource, see [ListStackResources](https://help.aliyun.com/document_detail/133836.html).
   * 
   * @example
   * {\\"Id\\":\\"k8s_master_slb\\",\\"Name\\":\\"k8s_master_slb\\",\\"Type\\":\\"ALIYUN::SLB::LoadBalancer\\",\\"Status\\":\\"CREATE_COMPLETE\\",\\"StatusReason\\":\\"state changed\\",\\"Updated\\":\\"2020-05-21T13:25:02\\",\\"PhysicalId\\":\\"lb-wz9poz4r0ymh8u0uf****\\"}
   */
  resourceInfo?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * ALIYUN::SLB::LoadBalancer
   */
  resourceType?: string;
  /**
   * @remarks
   * The resource status. Valid values:
   * 
   * *   `CREATE_COMPLETE`: the resource is created.
   * *   `CREATE_FAILED`: the resource failed to be created.
   * *   `CREATE_IN_PROGRESS`: the resource is being created.
   * *   `DELETE_FAILED`: the resource failed to be deleted.
   * *   `DELETE_IN_PROGRESS`: the resource is being deleted.
   * *   `ROLLBACK_COMPLETE`: the resource is rolled back.
   * *   `ROLLBACK_FAILED`: the resource failed to be rolled back.
   * *   `ROLLBACK_IN_PROGRESS`: the resource is being rolled back.
   * 
   * @example
   * CREATE_COMPLETE
   */
  state?: string;
  /**
   * @remarks
   * Specifies whether the resource is created by Container Service for Kubernetes (ACK). Valid values:
   * 
   * *   1: the resource is created by ACK.
   * *   0: the resource is an existing resource.
   * 
   * @example
   * 1
   */
  autoCreate?: number;
  /**
   * @remarks
   * The dependent resources.
   */
  dependencies?: DescribeClusterResourcesResponseBodyDependencies[];
  /**
   * @remarks
   * The Kubernetes object with which the resource is associated.
   */
  associatedObject?: DescribeClusterResourcesResponseBodyAssociatedObject;
  /**
   * @remarks
   * The deletion behavior of the resource when the cluster is deleted.
   */
  deleteBehavior?: DescribeClusterResourcesResponseBodyDeleteBehavior;
  /**
   * @remarks
   * The type of the resource creator. Valid values:
   * 
   * *   user: the resource is created by the user.
   * *   system: the resource is created by the ACK management system.
   * *   addon: the resource is created by a cluster component.
   * 
   * @example
   * addon
   */
  creatorType?: string;
  /**
   * @remarks
   * The additional information about the resource.
   * 
   * @example
   * {"IP": "xx.xx.xx.xx"}
   */
  extraInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      clusterId: 'cluster_id',
      created: 'created',
      instanceId: 'instance_id',
      resourceInfo: 'resource_info',
      resourceType: 'resource_type',
      state: 'state',
      autoCreate: 'auto_create',
      dependencies: 'dependencies',
      associatedObject: 'associated_object',
      deleteBehavior: 'delete_behavior',
      creatorType: 'creator_type',
      extraInfo: 'extra_info',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      created: 'string',
      instanceId: 'string',
      resourceInfo: 'string',
      resourceType: 'string',
      state: 'string',
      autoCreate: 'number',
      dependencies: { 'type': 'array', 'itemType': DescribeClusterResourcesResponseBodyDependencies },
      associatedObject: DescribeClusterResourcesResponseBodyAssociatedObject,
      deleteBehavior: DescribeClusterResourcesResponseBodyDeleteBehavior,
      creatorType: 'string',
      extraInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterTasksResponseBodyPageInfo extends $tea.Model {
  /**
   * @remarks
   * The number of the page returned.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'page_number',
      pageSize: 'page_size',
      totalCount: 'total_count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterTasksResponseBodyTasksError extends $tea.Model {
  /**
   * @remarks
   * The error code returned.
   * 
   * @example
   * BadRequest
   */
  code?: string;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * Addon status not match
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterTasksResponseBodyTasks extends $tea.Model {
  /**
   * @remarks
   * The time when the task was created.
   * 
   * @example
   * 2022-08-03T10:11:33+08:00
   */
  created?: string;
  /**
   * @remarks
   * The error returned for the task.
   */
  error?: DescribeClusterTasksResponseBodyTasksError;
  /**
   * @remarks
   * The status of the task.
   * 
   * @example
   * success
   */
  state?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * install-addons-c3xxxxxx
   */
  taskId?: string;
  /**
   * @remarks
   * The type of task.
   * 
   * @example
   * cluster_addon_install
   */
  taskType?: string;
  /**
   * @remarks
   * The time when the task was updated.
   * 
   * @example
   * 2022-08-03T10:12:03.482+08:00
   */
  updated?: string;
  static names(): { [key: string]: string } {
    return {
      created: 'created',
      error: 'error',
      state: 'state',
      taskId: 'task_id',
      taskType: 'task_type',
      updated: 'updated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      created: 'string',
      error: DescribeClusterTasksResponseBodyTasksError,
      state: 'string',
      taskId: 'string',
      taskType: 'string',
      updated: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterVulsResponseBodyVulRecords extends $tea.Model {
  /**
   * @remarks
   * The CVE list.
   */
  cveList?: string[];
  /**
   * @remarks
   * The severity level of the vulnerability.
   * 
   * Valid values:
   * 
   * *   nntf: low
   * *   later: medium     
   * *   asap: high
   * 
   * @example
   * asap
   */
  necessity?: string;
  /**
   * @remarks
   * The number of nodes that have the vulnerability.
   * 
   * @example
   * 1
   */
  nodeCount?: number;
  /**
   * @remarks
   * The node pool ID.
   * 
   * @example
   * np0156da1082b54fa987e32618dd45f5d3
   */
  nodepoolId?: string;
  /**
   * @remarks
   * The name of the node pool.
   * 
   * @example
   * test
   */
  nodepoolName?: string;
  /**
   * @remarks
   * The alias of the vulnerability.
   * 
   * @example
   * CVE-2022-xxxx:rsync Security vulnerabilities
   */
  vulAliasName?: string;
  /**
   * @remarks
   * The name of the vulnerability.
   * 
   * @example
   * oval:com.redhat.rhsa:def:xxxxxxx
   */
  vulName?: string;
  /**
   * @remarks
   * The type of vulnerability.
   * 
   * Valid values:
   * 
   * *   app: application vulnerabilities
   * *   sca: application vulnerabilities (software component analysis)
   * *   cve: Linux vulnerabilities
   * *   cms: Web-CMS vulnerabilities
   * *   sys: Windows vulnerabilities
   * *   emg:  emergency vulnerabilities
   * 
   * @example
   * cve
   */
  vulType?: string;
  static names(): { [key: string]: string } {
    return {
      cveList: 'cve_list',
      necessity: 'necessity',
      nodeCount: 'node_count',
      nodepoolId: 'nodepool_id',
      nodepoolName: 'nodepool_name',
      vulAliasName: 'vul_alias_name',
      vulName: 'vul_name',
      vulType: 'vul_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cveList: { 'type': 'array', 'itemType': 'string' },
      necessity: 'string',
      nodeCount: 'number',
      nodepoolId: 'string',
      nodepoolName: 'string',
      vulAliasName: 'string',
      vulName: 'string',
      vulType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClustersResponseBodyTags extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClustersResponseBody extends $tea.Model {
  clusterId?: string;
  clusterType?: string;
  created?: string;
  currentVersion?: string;
  dataDiskCategory?: string;
  dataDiskSize?: number;
  deletionProtection?: boolean;
  dockerVersion?: string;
  externalLoadbalancerId?: string;
  initVersion?: string;
  masterUrl?: string;
  metaData?: string;
  name?: string;
  networkMode?: string;
  privateZone?: boolean;
  profile?: string;
  regionId?: string;
  resourceGroupId?: string;
  securityGroupId?: string;
  size?: number;
  state?: string;
  subnetCidr?: string;
  tags?: DescribeClustersResponseBodyTags[];
  updated?: string;
  vpcId?: string;
  vswitchCidr?: string;
  vswitchId?: string;
  workerRamRoleName?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'cluster_id',
      clusterType: 'cluster_type',
      created: 'created',
      currentVersion: 'current_version',
      dataDiskCategory: 'data_disk_category',
      dataDiskSize: 'data_disk_size',
      deletionProtection: 'deletion_protection',
      dockerVersion: 'docker_version',
      externalLoadbalancerId: 'external_loadbalancer_id',
      initVersion: 'init_version',
      masterUrl: 'master_url',
      metaData: 'meta_data',
      name: 'name',
      networkMode: 'network_mode',
      privateZone: 'private_zone',
      profile: 'profile',
      regionId: 'region_id',
      resourceGroupId: 'resource_group_id',
      securityGroupId: 'security_group_id',
      size: 'size',
      state: 'state',
      subnetCidr: 'subnet_cidr',
      tags: 'tags',
      updated: 'updated',
      vpcId: 'vpc_id',
      vswitchCidr: 'vswitch_cidr',
      vswitchId: 'vswitch_id',
      workerRamRoleName: 'worker_ram_role_name',
      zoneId: 'zone_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterType: 'string',
      created: 'string',
      currentVersion: 'string',
      dataDiskCategory: 'string',
      dataDiskSize: 'number',
      deletionProtection: 'boolean',
      dockerVersion: 'string',
      externalLoadbalancerId: 'string',
      initVersion: 'string',
      masterUrl: 'string',
      metaData: 'string',
      name: 'string',
      networkMode: 'string',
      privateZone: 'boolean',
      profile: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      securityGroupId: 'string',
      size: 'number',
      state: 'string',
      subnetCidr: 'string',
      tags: { 'type': 'array', 'itemType': DescribeClustersResponseBodyTags },
      updated: 'string',
      vpcId: 'string',
      vswitchCidr: 'string',
      vswitchId: 'string',
      workerRamRoleName: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClustersV1ResponseBodyClusters extends $tea.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * c3fb96524f9274b4495df0f12a6b5****
   */
  clusterId?: string;
  /**
   * @remarks
   * The type of ACK managed cluster. This parameter is available only for ACK managed clusters. Valid values:
   * 
   * *   `ack.pro.small`: ACK Pro cluster
   * *   `ack.standard`: ACK Basic cluster
   * 
   * @example
   * ack.standard
   */
  clusterSpec?: string;
  /**
   * @remarks
   * The cluster type. Valid values:
   * 
   * *   `Kubernetes`: ACK dedicated cluster
   * *   `ManagedKubernetes`: ACK managed cluster
   * *   `Ask`: ACK Serverless cluster
   * *   `ExternalKubernetes`: registered cluster
   * 
   * @example
   * Kubernetes
   */
  clusterType?: string;
  /**
   * @remarks
   * The time when the cluster was created.
   * 
   * @example
   * 2020-08-20T10:51:29+08:00
   */
  created?: string;
  /**
   * @remarks
   * The Kubernetes version of the cluster.
   * 
   * @example
   * 1.16.9-aliyun.1
   */
  currentVersion?: string;
  /**
   * @remarks
   * Indicates whether deletion protection is enabled for the cluster. If deletion protection is enabled, the cluster cannot be deleted in the ACK console or by calling API operations. Valid values:
   * 
   * *   `true`: Deletion protection is enabled for the cluster. The cluster cannot be deleted in the ACK console or by calling API operations.
   * *   `false`: Deletion protection is disabled for the cluster. The cluster can be deleted in the ACK console or by calling API operations.
   * 
   * @example
   * true
   */
  deletionProtection?: boolean;
  /**
   * @remarks
   * The Docker version that is used by the cluster.
   * 
   * @example
   * 19.03.5
   */
  dockerVersion?: string;
  /**
   * @remarks
   * The ID of the Server Load Balancer (SLB) instance that is used by the Ingress of the cluster.
   * 
   * The default SLB specification is slb.s1.small, which belongs to the high-performance instance type.
   * 
   * @example
   * lb-2vcrbmlevo6kjpgch****
   */
  externalLoadbalancerId?: string;
  /**
   * @remarks
   * The Kubernetes version of the cluster. The Kubernetes versions supported by ACK are the same as the versions of open source Kubernetes. We recommend that you specify the latest Kubernetes version. If you do not specify this parameter, the latest Kubernetes version is used.
   * 
   * You can create clusters of the latest two Kubernetes versions in the ACK console. You can call the corresponding ACK API operation to create clusters of other Kubernetes versions. For more information about the Kubernetes versions supported by ACK, see [Release notes for Kubernetes versions](https://help.aliyun.com/document_detail/185269.html).
   * 
   * @example
   * 1.16.9-aliyun.1
   */
  initVersion?: string;
  /**
   * @remarks
   * The maintenance window of the cluster. This feature is available only for ACK Pro clusters.
   */
  maintenanceWindow?: MaintenanceWindow;
  /**
   * @remarks
   * The endpoint of the cluster API server, including an internal endpoint and a public endpoint.
   * 
   * @example
   * {\\"api_server_endpoint\\":\\"\\",\\"intranet_api_server_endpoint\\":\\"https://192.168.0.251:6443\\"}
   */
  masterUrl?: string;
  /**
   * @remarks
   * The metadata of the cluster.
   * 
   * @example
   * {\\"Addons\\":[{\\"config\\":***}
   */
  metaData?: string;
  /**
   * @remarks
   * The cluster name.
   * 
   * The name must be 1 to 63 characters in length and can contain digits, letters, and hyphens (-). The name cannot start with a hyphen (-).
   * 
   * @example
   * cluster-demo
   */
  name?: string;
  /**
   * @remarks
   * The network mode of the cluster. Valid values:
   * 
   * *   `classic`: classic network
   * *   `vpc`: virtual private cloud (VPC)
   * *   `overlay`: overlay network
   * *   `calico`: network powered by Calico.
   * 
   * @example
   * vpc
   */
  networkMode?: string;
  /**
   * @remarks
   * The Kubernetes version to which the cluster can be updated.
   * 
   * @example
   * 1.18.8-aliyun.1
   */
  nextVersion?: string;
  /**
   * @remarks
   * Indicates whether Alibaba Cloud DNS PrivateZone is enabled. Valid values:
   * 
   * *   `true`: Alibaba Cloud DNS PrivateZone is enabled.
   * *   `false`: Alibaba Cloud DNS PrivateZone is disabled.
   * 
   * @example
   * false
   */
  privateZone?: boolean;
  /**
   * @remarks
   * The cluster identifier. Valid values:
   * 
   * *   `Edge`: The cluster is an ACK Edge cluster.
   * *   `Default`: The cluster is not an ACK Edge cluster.
   * 
   * @example
   * Default
   */
  profile?: string;
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the cluster belongs.
   * 
   * @example
   * rg-acfmyvw3wjm****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the security group to which the instances of the cluster belong.
   * 
   * @example
   * sg-2vcgwsrwgt5mp0yi****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The number of nodes in the cluster, including master nodes and worker nodes.
   * 
   * @example
   * 5
   */
  size?: number;
  /**
   * @remarks
   * The status of the cluster. Valid values:
   * 
   * *   `initial`: The cluster is being created.
   * *   `failed`: The cluster failed to be created.
   * *   `running`: The cluster is running.
   * *   `updating`: The cluster is being updated.
   * *   `updating_failed`: The cluster failed to be updated.
   * *   `scaling`: The cluster is being scaled.
   * *   `stopped`: The cluster is stopped.
   * *   `deleting`: The cluster is being deleted.
   * *   `deleted`: The cluster is deleted.
   * *   `delete_failed`: The cluster failed to be deleted.
   * 
   * @example
   * running
   */
  state?: string;
  /**
   * @remarks
   * The pod CIDR block. It must be a valid and private CIDR block, and must be one of the following CIDR blocks or their subnets:
   * 
   * *   10.0.0.0/8
   * *   172.16-31.0.0/12-16
   * *   192.168.0.0/16
   * 
   * The CIDR block of pods cannot overlap with the CIDR block of the VPC in which the cluster is deployed and the CIDR blocks of existing clusters in the VPC. You cannot modify the pod CIDR block after the cluster is created.
   * 
   * For more information, see [Plan CIDR blocks for an ACK cluster](https://help.aliyun.com/document_detail/86500.html).
   * 
   * @example
   * 172.21.0.0/16
   */
  subnetCidr?: string;
  /**
   * @remarks
   * The resource labels of the cluster.
   */
  tags?: Tag[];
  /**
   * @remarks
   * The time when the cluster was updated.
   * 
   * @example
   * 2020-09-16T11:09:55+08:00
   */
  updated?: string;
  /**
   * @remarks
   * The ID of the VPC where the cluster is deployed. This parameter is required when you create a cluster.
   * 
   * @example
   * vpc-2vcg932hsxsxuqbgl****
   */
  vpcId?: string;
  /**
   * @remarks
   * The IDs of the vSwitches. You can select one to three vSwitches when you create a cluster. We recommend that you select vSwitches in different zones to ensure high availability.
   * 
   * @example
   * vsw-2vc41xuumx5z2rdma****,vsw-2vc41xuumx5z2rdma****
   */
  vswitchId?: string;
  /**
   * @remarks
   * The name of the worker Resource Access Management (RAM) role. The RAM role is assigned to the worker nodes of the cluster to allow the worker nodes to manage Elastic Compute Service (ECS) instances.
   * 
   * @example
   * KubernetesWorkerRole-ec87d15b-edca-4302-933f-c8a16bf0****
   */
  workerRamRoleName?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-beijing-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'cluster_id',
      clusterSpec: 'cluster_spec',
      clusterType: 'cluster_type',
      created: 'created',
      currentVersion: 'current_version',
      deletionProtection: 'deletion_protection',
      dockerVersion: 'docker_version',
      externalLoadbalancerId: 'external_loadbalancer_id',
      initVersion: 'init_version',
      maintenanceWindow: 'maintenance_window',
      masterUrl: 'master_url',
      metaData: 'meta_data',
      name: 'name',
      networkMode: 'network_mode',
      nextVersion: 'next_version',
      privateZone: 'private_zone',
      profile: 'profile',
      regionId: 'region_id',
      resourceGroupId: 'resource_group_id',
      securityGroupId: 'security_group_id',
      size: 'size',
      state: 'state',
      subnetCidr: 'subnet_cidr',
      tags: 'tags',
      updated: 'updated',
      vpcId: 'vpc_id',
      vswitchId: 'vswitch_id',
      workerRamRoleName: 'worker_ram_role_name',
      zoneId: 'zone_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterSpec: 'string',
      clusterType: 'string',
      created: 'string',
      currentVersion: 'string',
      deletionProtection: 'boolean',
      dockerVersion: 'string',
      externalLoadbalancerId: 'string',
      initVersion: 'string',
      maintenanceWindow: MaintenanceWindow,
      masterUrl: 'string',
      metaData: 'string',
      name: 'string',
      networkMode: 'string',
      nextVersion: 'string',
      privateZone: 'boolean',
      profile: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      securityGroupId: 'string',
      size: 'number',
      state: 'string',
      subnetCidr: 'string',
      tags: { 'type': 'array', 'itemType': Tag },
      updated: 'string',
      vpcId: 'string',
      vswitchId: 'string',
      workerRamRoleName: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClustersV1ResponseBodyPageInfo extends $tea.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 3
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 50
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'page_number',
      pageSize: 'page_size',
      totalCount: 'total_count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEdgeMachineModelsResponseBodyModels extends $tea.Model {
  /**
   * @remarks
   * The number of vCores.
   * 
   * @example
   * 6
   */
  cpu?: number;
  /**
   * @remarks
   * The CPU architecture.
   * 
   * @example
   * x86_64/arm64
   */
  cpuArch?: string;
  /**
   * @remarks
   * The time when the cloud-native box was created.
   * 
   * @example
   * 2021-07-07T20:44:00+08:00
   */
  created?: string;
  /**
   * @remarks
   * The description of the cloud-native box.
   * 
   * @example
   * B010
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the cloud-native box model manages the Docker runtime.
   * 
   * @example
   * 0/1
   */
  manageRuntime?: number;
  /**
   * @remarks
   * The memory. Unit: GB.
   * 
   * @example
   * 8
   */
  memory?: number;
  /**
   * @remarks
   * The model of the cloud-native box.
   * 
   * @example
   * ACK-V-B010
   */
  model?: string;
  /**
   * @remarks
   * The ID of the cloud-native box.
   * 
   * @example
   * c34cc753-8908-4739-bd10-ebd922a4****
   */
  modelId?: string;
  static names(): { [key: string]: string } {
    return {
      cpu: 'cpu',
      cpuArch: 'cpu_arch',
      created: 'created',
      description: 'description',
      manageRuntime: 'manage_runtime',
      memory: 'memory',
      model: 'model',
      modelId: 'model_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      cpuArch: 'string',
      created: 'string',
      description: 'string',
      manageRuntime: 'number',
      memory: 'number',
      model: 'string',
      modelId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEdgeMachinesResponseBodyEdgeMachines extends $tea.Model {
  /**
   * @remarks
   * The time when the cloud-native box was activated.
   * 
   * @example
   * 2021-07-19T16:07:48+08:00
   */
  activeTime?: string;
  /**
   * @remarks
   * The time when the cloud-native box was created.
   * 
   * @example
   * 2021-07-07T20:44:00+08:00
   */
  created?: string;
  /**
   * @remarks
   * The device ID.
   * 
   * @example
   * c61083909b13f4a95b8554bda9577****
   */
  edgeMachineId?: string;
  /**
   * @remarks
   * The `hostname` of the cloud-native box.
   * 
   * @example
   * ack-v-b010-ssdfw****
   */
  hostname?: string;
  /**
   * @remarks
   * The lifecycle of the cloud-native box.
   * 
   * @example
   * activated
   */
  lifeState?: string;
  /**
   * @remarks
   * The model of the cloud-native box.
   * 
   * @example
   * ACK-V-B010
   */
  model?: string;
  /**
   * @remarks
   * The machine name.
   * 
   * @example
   * ack-v-b010-ssdfw****
   */
  name?: string;
  /**
   * @remarks
   * The status of the cloud-native box.
   * 
   * @example
   * online
   */
  onlineState?: string;
  /**
   * @remarks
   * The serial number.
   * 
   * @example
   * ACK9GBL31SXX****
   */
  sn?: string;
  /**
   * @remarks
   * The time when the cloud-native box was last updated.
   * 
   * @example
   * 2021-07-07T20:44:00+08:00
   */
  updated?: string;
  static names(): { [key: string]: string } {
    return {
      activeTime: 'active_time',
      created: 'created',
      edgeMachineId: 'edge_machine_id',
      hostname: 'hostname',
      lifeState: 'life_state',
      model: 'model',
      name: 'name',
      onlineState: 'online_state',
      sn: 'sn',
      updated: 'updated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeTime: 'string',
      created: 'string',
      edgeMachineId: 'string',
      hostname: 'string',
      lifeState: 'string',
      model: 'string',
      name: 'string',
      onlineState: 'string',
      sn: 'string',
      updated: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEdgeMachinesResponseBodyPageInfo extends $tea.Model {
  /**
   * @remarks
   * The page number.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of pages returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'page_number',
      pageSize: 'page_size',
      totalCount: 'total_count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventsResponseBodyEventsData extends $tea.Model {
  /**
   * @remarks
   * The severity level of the event.
   * 
   * @example
   * info
   */
  level?: string;
  /**
   * @remarks
   * The details of the event.
   * 
   * @example
   * Start to upgrade NodePool nodePool/nodePool-A
   */
  message?: string;
  /**
   * @remarks
   * The status of the event.
   * 
   * @example
   * Started
   */
  reason?: string;
  static names(): { [key: string]: string } {
    return {
      level: 'level',
      message: 'message',
      reason: 'reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      level: 'string',
      message: 'string',
      reason: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventsResponseBodyEvents extends $tea.Model {
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * @example
   * cluster-id
   */
  clusterId?: string;
  /**
   * @remarks
   * The description of the event.
   */
  data?: DescribeEventsResponseBodyEventsData;
  /**
   * @remarks
   * The event ID.
   * 
   * @example
   * A234-1234-1234
   */
  eventId?: string;
  /**
   * @remarks
   * The source of the event.
   */
  source?: string;
  /**
   * @remarks
   * The subject of the event.
   * 
   * @example
   * nodePool-id
   */
  subject?: string;
  /**
   * @remarks
   * The time when the event started.
   * 
   * @example
   * 2022-11-23T20:48:01+08:00
   */
  time?: string;
  /**
   * @remarks
   * The event type. Valid values:
   * 
   * *   `cluster_create`: cluster creation.
   * *   `cluster_scaleout`: cluster scale-out.
   * *   `cluster_attach`: node addition.
   * *   `cluster_delete`: cluster deletion.
   * *   `cluster_upgrade`: cluster upgrades.
   * *   `cluster_migrate`: cluster migration.
   * *   `cluster_node_delete`: node removal.
   * *   `cluster_node_drain`: node draining.
   * *   `cluster_modify`: cluster modifications.
   * *   `cluster_configuration_modify`: modifications of control plane configurations.
   * *   `cluster_addon_install`: component installation.
   * *   `cluster_addon_upgrade`: component updates.
   * *   `cluster_addon_uninstall`: component uninstallation.
   * *   `runtime_upgrade`: runtime updates.
   * *   `nodepool_upgrade`: node pool upgrades.
   * *   `nodepool_update`: node pool updates.
   * 
   * @example
   * nodepool_upgrade
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'cluster_id',
      data: 'data',
      eventId: 'event_id',
      source: 'source',
      subject: 'subject',
      time: 'time',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      data: DescribeEventsResponseBodyEventsData,
      eventId: 'string',
      source: 'string',
      subject: 'string',
      time: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventsResponseBodyPageInfo extends $tea.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 3
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'page_number',
      pageSize: 'page_size',
      totalCount: 'total_count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeKubernetesVersionMetadataResponseBodyImages extends $tea.Model {
  /**
   * @remarks
   * The image ID.
   * 
   * @example
   * centos_7_7_x64_20G_alibase_20200426.vhd
   */
  imageId?: string;
  /**
   * @remarks
   * The image name.
   * 
   * @example
   * CentOS 7.7
   */
  imageName?: string;
  /**
   * @remarks
   * The OS platform. Valid values:
   * 
   * *   `AliyunLinux`
   * *   `CentOS`
   * *   `Windows`
   * *   `WindowsCore`
   * 
   * @example
   * CentOS
   */
  platform?: string;
  /**
   * @remarks
   * The version of the image.
   * 
   * @example
   * 7.7
   */
  osVersion?: string;
  /**
   * @remarks
   * The type of OS distribution that you want to use. To specify the node OS, we recommend that you use this parameter. Valid values:
   * 
   * *   `CentOS`
   * *   `AliyunLinux`
   * *   `AliyunLinux Qboot`
   * *   `AliyunLinuxUEFI`
   * *   `AliyunLinux3`
   * *   `Windows`
   * *   `WindowsCore`
   * *   `AliyunLinux3Arm64`
   * *   `ContainerOS`
   * 
   * @example
   * centos_7_7_20
   */
  imageType?: string;
  /**
   * @remarks
   * The type of operating system. Examples:
   * 
   * *   `Windows`
   * *   `Linux`
   * 
   * @example
   * Linux
   */
  osType?: string;
  /**
   * @remarks
   * The type of image. Valid values:
   * 
   * *   `system`: public image
   * *   `self`: custom image
   * *   `others`: shared image from other Alibaba Cloud accounts
   * *   `marketplace`: image from the marketplace
   * 
   * @example
   * system
   */
  imageCategory?: string;
  /**
   * @remarks
   * The architecture of the image.
   * 
   * @example
   * x86_64
   */
  architecture?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'image_id',
      imageName: 'image_name',
      platform: 'platform',
      osVersion: 'os_version',
      imageType: 'image_type',
      osType: 'os_type',
      imageCategory: 'image_category',
      architecture: 'architecture',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      imageName: 'string',
      platform: 'string',
      osVersion: 'string',
      imageType: 'string',
      osType: 'string',
      imageCategory: 'string',
      architecture: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeKubernetesVersionMetadataResponseBody extends $tea.Model {
  /**
   * @remarks
   * Features of the queried Kubernetes version.
   */
  capabilities?: { [key: string]: any };
  /**
   * @remarks
   * The OS images that are returned.
   */
  images?: DescribeKubernetesVersionMetadataResponseBodyImages[];
  /**
   * @remarks
   * The metadata of the Kubernetes version.
   */
  metaData?: { [key: string]: any };
  /**
   * @remarks
   * Details of the supported container runtimes.
   */
  runtimes?: Runtime[];
  /**
   * @remarks
   * The Kubernetes version that is supported by ACK. For more information, see [Release notes for Kubernetes versions](https://help.aliyun.com/document_detail/185269.html).
   * 
   * @example
   * 1.16.9-aliyun.1
   */
  version?: string;
  /**
   * @remarks
   * The release date of the Kubernetes version.
   * 
   * @example
   * 2023-04-30T00:00:00Z
   */
  releaseDate?: string;
  /**
   * @remarks
   * The expiration date of the Kubernetes version.
   * 
   * @example
   * 2025-04-30T00:00:00Z
   */
  expirationDate?: string;
  /**
   * @remarks
   * Indicates whether you can create clusters that run the Kubernetes version.
   * 
   * @example
   * true
   */
  creatable?: boolean;
  upgradableVersions?: string[];
  static names(): { [key: string]: string } {
    return {
      capabilities: 'capabilities',
      images: 'images',
      metaData: 'meta_data',
      runtimes: 'runtimes',
      version: 'version',
      releaseDate: 'release_date',
      expirationDate: 'expiration_date',
      creatable: 'creatable',
      upgradableVersions: 'upgradable_versions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capabilities: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      images: { 'type': 'array', 'itemType': DescribeKubernetesVersionMetadataResponseBodyImages },
      metaData: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      runtimes: { 'type': 'array', 'itemType': Runtime },
      version: 'string',
      releaseDate: 'string',
      expirationDate: 'string',
      creatable: 'boolean',
      upgradableVersions: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNodePoolVulsResponseBodyVulRecordsVulList extends $tea.Model {
  /**
   * @remarks
   * The alias of the vulnerability.
   * 
   * @example
   * RHSA-2019:3197-Important: sudo security update
   */
  aliasName?: string;
  /**
   * @remarks
   * A list of CVE names corresponding to the vulnerabilities.
   */
  cveList?: string[];
  /**
   * @remarks
   * The name of the vulnerability.
   * 
   * @example
   * oval:com.redhat.rhsa:def:20193197
   */
  name?: string;
  /**
   * @remarks
   * The severity level of the vulnerability.
   * 
   * Valid values:
   * 
   * *   nntf: You can ignore the vulnerability.
   * *   later: You can fix the vulnerability later.
   * *   asap: You need to fix the vulnerability at the earliest opportunity.
   * 
   * @example
   * asap
   */
  necessity?: string;
  /**
   * @remarks
   * Indicates whether a restart is required.
   */
  needReboot?: boolean;
  static names(): { [key: string]: string } {
    return {
      aliasName: 'alias_name',
      cveList: 'cve_list',
      name: 'name',
      necessity: 'necessity',
      needReboot: 'need_reboot',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasName: 'string',
      cveList: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      necessity: 'string',
      needReboot: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNodePoolVulsResponseBodyVulRecords extends $tea.Model {
  /**
   * @remarks
   * The ID of the node.
   * 
   * @example
   * i-t4n2qolb0wtzt0pz****
   */
  instanceId?: string;
  /**
   * @remarks
   * The node name. This name is the identifier of the node in the cluster.
   * 
   * @example
   * cn-hangzhou.192.168.x.x
   */
  nodeName?: string;
  /**
   * @remarks
   * A list of vulnerabilities.
   */
  vulList?: DescribeNodePoolVulsResponseBodyVulRecordsVulList[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'instance_id',
      nodeName: 'node_name',
      vulList: 'vul_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      nodeName: 'string',
      vulList: { 'type': 'array', 'itemType': DescribeNodePoolVulsResponseBodyVulRecordsVulList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyGovernanceInClusterResponseBodyAdmitLogLog extends $tea.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * c8155823d057948c69a****
   */
  clusterId?: string;
  /**
   * @remarks
   * The policy type.
   * 
   * @example
   * ACKAllowedRepos
   */
  constraintKind?: string;
  /**
   * @remarks
   * The message that appears when an event is generated by a policy.
   * 
   * @example
   * d4hdhs*****
   */
  msg?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * Pod
   */
  resourceKind?: string;
  /**
   * @remarks
   * The resource name.
   * 
   * @example
   * nginx-deployment-basic2-84ccb74bfc-df22p
   */
  resourceName?: string;
  /**
   * @remarks
   * The namespace to which the resource belongs.
   * 
   * @example
   * default
   */
  resourceNamespace?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'cluster_id',
      constraintKind: 'constraint_kind',
      msg: 'msg',
      resourceKind: 'resource_kind',
      resourceName: 'resource_name',
      resourceNamespace: 'resource_namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      constraintKind: 'string',
      msg: 'string',
      resourceKind: 'string',
      resourceName: 'string',
      resourceNamespace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyGovernanceInClusterResponseBodyAdmitLog extends $tea.Model {
  /**
   * @remarks
   * The number of audit log entries.
   * 
   * @example
   * 100
   */
  count?: number;
  /**
   * @remarks
   * The audit log content.
   */
  log?: DescribePolicyGovernanceInClusterResponseBodyAdmitLogLog;
  /**
   * @remarks
   * The status of the query. Valid values:
   * 
   * *   `Complete`: The query succeeded and the complete query result is returned.
   * *   `Incomplete`: The query succeeded but the query result is incomplete. To obtain the complete query result, you must repeat the request.
   * 
   * @example
   * Complete
   */
  progress?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'count',
      log: 'log',
      progress: 'progress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      log: DescribePolicyGovernanceInClusterResponseBodyAdmitLogLog,
      progress: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyGovernanceInClusterResponseBodyOnState extends $tea.Model {
  /**
   * @remarks
   * The number of policies that are enabled.
   * 
   * @example
   * 3
   */
  enabledCount?: number;
  /**
   * @remarks
   * The severity level of the policy.
   * 
   * @example
   * high
   */
  severity?: string;
  /**
   * @remarks
   * The total number of policies of the severity level.
   * 
   * @example
   * 8
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      enabledCount: 'enabled_count',
      severity: 'severity',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabledCount: 'number',
      severity: 'string',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyGovernanceInClusterResponseBodyTotalViolationsDeny extends $tea.Model {
  /**
   * @remarks
   * The severity level of the policy.
   * 
   * @example
   * high
   */
  severity?: string;
  /**
   * @remarks
   * The number of blocking events that are triggered.
   * 
   * @example
   * 0
   */
  violations?: number;
  static names(): { [key: string]: string } {
    return {
      severity: 'severity',
      violations: 'violations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      severity: 'string',
      violations: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyGovernanceInClusterResponseBodyTotalViolationsWarn extends $tea.Model {
  /**
   * @remarks
   * The severity level of the policy.
   * 
   * @example
   * low
   */
  severity?: string;
  /**
   * @remarks
   * The number of alerting events that are triggered.
   * 
   * @example
   * 5
   */
  violations?: number;
  static names(): { [key: string]: string } {
    return {
      severity: 'severity',
      violations: 'violations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      severity: 'string',
      violations: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyGovernanceInClusterResponseBodyTotalViolations extends $tea.Model {
  /**
   * @remarks
   * Details about the blocking events that are triggered by the policies of each severity level.
   */
  deny?: DescribePolicyGovernanceInClusterResponseBodyTotalViolationsDeny;
  /**
   * @remarks
   * Details about the alerting events that are triggered by the policies of each severity level.
   */
  warn?: DescribePolicyGovernanceInClusterResponseBodyTotalViolationsWarn;
  static names(): { [key: string]: string } {
    return {
      deny: 'deny',
      warn: 'warn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deny: DescribePolicyGovernanceInClusterResponseBodyTotalViolationsDeny,
      warn: DescribePolicyGovernanceInClusterResponseBodyTotalViolationsWarn,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyGovernanceInClusterResponseBodyViolationsDeny extends $tea.Model {
  /**
   * @remarks
   * The policy description.
   * 
   * @example
   * Requires container images to begin with a repo string from a specified list.
   */
  policyDescription?: string;
  /**
   * @remarks
   * The policy name.
   * 
   * @example
   * policy-gatekeeper-ackallowedrepos
   */
  policyName?: string;
  /**
   * @remarks
   * The severity level of the policy.
   * 
   * @example
   * high
   */
  severity?: string;
  /**
   * @remarks
   * The total number of blocking events that are triggered by the policy.
   * 
   * @example
   * 11
   */
  violations?: number;
  static names(): { [key: string]: string } {
    return {
      policyDescription: 'policyDescription',
      policyName: 'policyName',
      severity: 'severity',
      violations: 'violations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyDescription: 'string',
      policyName: 'string',
      severity: 'string',
      violations: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyGovernanceInClusterResponseBodyViolationsWarn extends $tea.Model {
  /**
   * @remarks
   * The policy description.
   * 
   * @example
   * Controls Linux capabilities.
   */
  policyDescription?: string;
  /**
   * @remarks
   * The policy name.
   * 
   * @example
   * policy-gatekeeper-ackpspcapabilities
   */
  policyName?: string;
  /**
   * @remarks
   * The severity level of the policy.
   * 
   * @example
   * high
   */
  severity?: string;
  /**
   * @remarks
   * The total number of alerting events that are triggered by the policy.
   * 
   * @example
   * 81
   */
  violations?: number;
  static names(): { [key: string]: string } {
    return {
      policyDescription: 'policyDescription',
      policyName: 'policyName',
      severity: 'severity',
      violations: 'violations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyDescription: 'string',
      policyName: 'string',
      severity: 'string',
      violations: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyGovernanceInClusterResponseBodyViolations extends $tea.Model {
  /**
   * @remarks
   * Details about the blocking events that are triggered by each policy.
   */
  deny?: DescribePolicyGovernanceInClusterResponseBodyViolationsDeny;
  /**
   * @remarks
   * Details about the alerting events that are triggered by the policies of each severity level.
   */
  warn?: DescribePolicyGovernanceInClusterResponseBodyViolationsWarn;
  static names(): { [key: string]: string } {
    return {
      deny: 'deny',
      warn: 'warn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deny: DescribePolicyGovernanceInClusterResponseBodyViolationsDeny,
      warn: DescribePolicyGovernanceInClusterResponseBodyViolationsWarn,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyInstancesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The UID of the Alibaba Cloud account that is used to deploy the policy instance.
   * 
   * @example
   * 16298168****
   */
  aliUid?: string;
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * @example
   * c8155823d057948c69a****
   */
  clusterId?: string;
  /**
   * @remarks
   * The name of the policy instance.
   * 
   * @example
   * no-env-var-secrets-****
   */
  instanceName?: string;
  /**
   * @remarks
   * The name of the policy.
   * 
   * @example
   * ACKPSPCapabilities
   */
  policyName?: string;
  /**
   * @remarks
   * The type of policy.
   * 
   * @example
   * k8s-general
   */
  policyCategory?: string;
  /**
   * @remarks
   * The description of the policy template.
   * 
   * @example
   * Restricts secrets used in pod envs
   */
  policyDescription?: string;
  /**
   * @remarks
   * The parameters of the policy instance.
   * 
   * @example
   * "restrictedNamespaces": [ "test" ]
   */
  policyParameters?: string;
  /**
   * @remarks
   * The severity level of the policy instance.
   * 
   * @example
   * low
   */
  policySeverity?: string;
  /**
   * @remarks
   * The applicable scope of the policy instance.
   * 
   * A value of \\* indicates all namespaces in the cluster. This is the default value.
   * 
   * Multiple namespaces are separated by commas (,).
   * 
   * @example
   * *
   */
  policyScope?: string;
  /**
   * @remarks
   * The action of the policy. Valid values:
   * 
   * *   `deny`: Deployments that match the policy are denied.
   * *   `warn`: Alerts are generated for deployments that match the policy.
   * 
   * @example
   * deny
   */
  policyAction?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'ali_uid',
      clusterId: 'cluster_id',
      instanceName: 'instance_name',
      policyName: 'policy_name',
      policyCategory: 'policy_category',
      policyDescription: 'policy_description',
      policyParameters: 'policy_parameters',
      policySeverity: 'policy_severity',
      policyScope: 'policy_scope',
      policyAction: 'policy_action',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'string',
      clusterId: 'string',
      instanceName: 'string',
      policyName: 'string',
      policyCategory: 'string',
      policyDescription: 'string',
      policyParameters: 'string',
      policySeverity: 'string',
      policyScope: 'string',
      policyAction: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyInstancesStatusResponseBodyPolicyInstances extends $tea.Model {
  /**
   * @remarks
   * The policy type. For more information about different types of policies and their descriptions, see [Predefined security policies of ACK](https://help.aliyun.com/document_detail/359819.html).
   * 
   * @example
   * compliance
   */
  policyCategory?: string;
  /**
   * @remarks
   * The description of the policy.
   * 
   * @example
   * Restricts use of the cluster-admin role.
   */
  policyDescription?: string;
  /**
   * @remarks
   * The number of policy instances that are deployed. If this parameter is empty, no policy instance is deployed.
   * 
   * @example
   * 1
   */
  policyInstancesCount?: number;
  /**
   * @remarks
   * The name of the policy.
   * 
   * @example
   * ACKRestrictRoleBindings
   */
  policyName?: string;
  /**
   * @remarks
   * The severity level of the policy.
   * 
   * @example
   * medium
   */
  policySeverity?: string;
  static names(): { [key: string]: string } {
    return {
      policyCategory: 'policy_category',
      policyDescription: 'policy_description',
      policyInstancesCount: 'policy_instances_count',
      policyName: 'policy_name',
      policySeverity: 'policy_severity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyCategory: 'string',
      policyDescription: 'string',
      policyInstancesCount: 'number',
      policyName: 'string',
      policySeverity: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourcesDeleteProtectionResponseBody extends $tea.Model {
  /**
   * @remarks
   * The name of the resource.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The namespace to which the resource belongs.
   * 
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * The type of resource for which deletion protection is enabled.
   * 
   * @example
   * namespaces
   */
  resource?: string;
  /**
   * @remarks
   * Indicates whether deletion protection is enabled.
   * 
   * *   true: deletion protection is enabled.
   * *   false: deletion protection is disabled.
   * 
   * Default value: false
   * 
   * @example
   * false
   */
  protection?: boolean;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      namespace: 'namespace',
      resource: 'resource',
      protection: 'protection',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      namespace: 'string',
      resource: 'string',
      protection: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTaskInfoResponseBodyError extends $tea.Model {
  /**
   * @remarks
   * The error code returned.
   * 
   * @example
   * 400
   */
  code?: string;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * failed to xxx
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTaskInfoResponseBodyEvents extends $tea.Model {
  /**
   * @remarks
   * The action of the event.
   * 
   * @example
   * start
   */
  action?: string;
  /**
   * @remarks
   * The severity level of the event.
   * 
   * @example
   * Normal
   */
  level?: string;
  /**
   * @remarks
   * The message about the event.
   * 
   * @example
   * start to xxx
   */
  message?: string;
  /**
   * @remarks
   * The cause of the event.
   * 
   * @example
   * NodePoolUpgradeStart
   */
  reason?: string;
  /**
   * @remarks
   * The source of the event.
   * 
   * @example
   * ACK
   */
  source?: string;
  /**
   * @remarks
   * The timestamp when the event was generated.
   * 
   * @example
   * 1669706229286
   */
  timestamp?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'action',
      level: 'level',
      message: 'message',
      reason: 'reason',
      source: 'source',
      timestamp: 'timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      level: 'string',
      message: 'string',
      reason: 'string',
      source: 'string',
      timestamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTaskInfoResponseBodyStages extends $tea.Model {
  /**
   * @remarks
   * The end time of the stage.
   * 
   * @example
   * 2022-12-15 23:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * The message about the stage.
   * 
   * @example
   * success to xxxxx
   */
  message?: string;
  /**
   * @remarks
   * The output generated at the stage.
   */
  outputs?: { [key: string]: any };
  /**
   * @remarks
   * The start time of the stage.
   * 
   * @example
   * 2022-12-15 23:00:00
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the stage.
   * 
   * @example
   * running
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'end_time',
      message: 'message',
      outputs: 'outputs',
      startTime: 'start_time',
      state: 'state',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      message: 'string',
      outputs: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      startTime: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTaskInfoResponseBodyTarget extends $tea.Model {
  /**
   * @remarks
   * The ID of the object.
   * 
   * @example
   * c78592bfe92244365b3c3ad47f1de****
   */
  id?: string;
  /**
   * @remarks
   * The type of the object.
   * 
   * @example
   * cluster
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTaskInfoResponseBodyTaskResult extends $tea.Model {
  /**
   * @remarks
   * The resources that are managed by the task. For a scale-out task, the value of this parameter is the ID of the instance that is added by the task.
   * 
   * @example
   * i-xxx
   */
  data?: string;
  /**
   * @remarks
   * The status of the scale-out task. Valid values:
   * 
   * *   `success`: The scale-out task is successful.
   * *   `success`: The scale-out task failed.
   * *   `initial`: The scale-out task is being initialized.
   * 
   * @example
   * success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTemplateAttributeResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the template. When you update a template, a new template ID is generated.
   * 
   * @example
   * 72d20cf8-a533-4ea9-a10d-e7630d3d****
   */
  id?: string;
  /**
   * @remarks
   * The access control policy of the template.
   * 
   * @example
   * private
   */
  acl?: string;
  /**
   * @remarks
   * The name of the template.
   * 
   * @example
   * web
   */
  name?: string;
  /**
   * @remarks
   * The template content in the YAML format.
   * 
   * @example
   * apiVersion: V1\\n***
   */
  template?: string;
  /**
   * @remarks
   * The type of template. The value can be a custom value.
   * 
   * *   If the parameter is set to `kubernetes`, the template is displayed on the Templates page in the console.
   * *   If the parameter is set to `compose`, the template is displayed on the Container Service - Swarm page in the console. Container Service for Swarm is deprecated.
   * *   If the value of the parameter is not `kubernetes`, the template is not displayed on the Templates page in the console. We recommend that you set the parameter to `kubernetes`.
   * 
   * Default value: `kubernetes`.
   * 
   * @example
   * kubernetes
   */
  templateType?: string;
  /**
   * @remarks
   * The description of the template.
   * 
   * @example
   * test template
   */
  description?: string;
  /**
   * @remarks
   * The label of the template.
   * 
   * @example
   * sa
   */
  tags?: string;
  /**
   * @remarks
   * The unique ID of the template. The value remains unchanged after the template is updated.
   * 
   * @example
   * 874ec485-e7e6-4373-8a3b-47bde8ae****
   */
  templateWithHistId?: string;
  /**
   * @remarks
   * The time when the template was created.
   * 
   * @example
   * 2020-09-16T19:21:29+08:00
   */
  created?: string;
  /**
   * @remarks
   * The time when the template was updated.
   * 
   * @example
   * 2020-09-16T19:21:29+08:00
   */
  updated?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      acl: 'acl',
      name: 'name',
      template: 'template',
      templateType: 'template_type',
      description: 'description',
      tags: 'tags',
      templateWithHistId: 'template_with_hist_id',
      created: 'created',
      updated: 'updated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      acl: 'string',
      name: 'string',
      template: 'string',
      templateType: 'string',
      description: 'string',
      tags: 'string',
      templateWithHistId: 'string',
      created: 'string',
      updated: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTemplatesResponseBodyPageInfo extends $tea.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 20
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 3
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 50
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'page_number',
      pageSize: 'page_size',
      totalCount: 'total_count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTemplatesResponseBodyTemplates extends $tea.Model {
  /**
   * @remarks
   * The access control policy of the template. Valid values:
   * 
   * *   `private`: The template is private.
   * *   `public`: The template is public.
   * *   `shared`: The template can be shared.
   * 
   * Default value: `private`.
   * 
   * @example
   * private
   */
  acl?: string;
  /**
   * @remarks
   * The time when the template was created.
   * 
   * @example
   * 2020-06-10T16:30:16+08:00
   */
  created?: string;
  /**
   * @remarks
   * The description of the template.
   * 
   * @example
   * a web server
   */
  description?: string;
  /**
   * @remarks
   * The ID of the template.
   * 
   * @example
   * 874ec485-e7e6-4373-8a3b-47bde8ae789f
   */
  id?: string;
  /**
   * @remarks
   * The name of the template.
   * 
   * @example
   * webserver
   */
  name?: string;
  /**
   * @remarks
   * The label of the template. By default, the value is the name of the template.
   * 
   * @example
   * kubernetes
   */
  tags?: string;
  /**
   * @remarks
   * The template content in the YAML format.
   * 
   * @example
   * apiVersion: apps/v1\\nkind: Deployment\\nmetadata:\\n  name: nginx-deployment-basic\\n  labels:\\n    app: nginx\\nspec:\\n  replicas: 2\\n  selector:\\n    matchLabels:\\n      app: nginx\\n  template:\\n    metadata:\\n      labels:\\n        app: nginx\\n    spec:\\n      containers:\\n      - name: nginx\\n        image: busybox:latest\\n        ports:\\n        - containerPort: 80
   */
  template?: string;
  /**
   * @remarks
   * The type of template. This parameter can be set to a custom value.
   * 
   * *   If the parameter is set to `kubernetes`, the template is displayed on the Templates page in the console.
   * *   If the parameter is set to `compose`, the template is displayed on the Container Service - Swarm page in the console. However, Container Service for Swarm is deprecated.
   * 
   * @example
   * kubernetes
   */
  templateType?: string;
  /**
   * @remarks
   * The ID of the parent template. The value of `template_with_hist_id` is the same for each template version. This allows you to manage different template versions.
   * 
   * @example
   * ad81d115-7c8b-47e7-a222-9c28d7f6e588
   */
  templateWithHistId?: string;
  /**
   * @remarks
   * The time when the template was updated.
   * 
   * @example
   * 2020-06-10T16:30:16+08:00
   */
  updated?: string;
  static names(): { [key: string]: string } {
    return {
      acl: 'acl',
      created: 'created',
      description: 'description',
      id: 'id',
      name: 'name',
      tags: 'tags',
      template: 'template',
      templateType: 'template_type',
      templateWithHistId: 'template_with_hist_id',
      updated: 'updated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acl: 'string',
      created: 'string',
      description: 'string',
      id: 'string',
      name: 'string',
      tags: 'string',
      template: 'string',
      templateType: 'string',
      templateWithHistId: 'string',
      updated: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTriggerResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the trigger.
   * 
   * @example
   * 1234
   */
  id?: string;
  /**
   * @remarks
   * The name of the trigger.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The ID of the associated cluster.
   * 
   * @example
   * c259f563386444ebb8d7****
   */
  clusterId?: string;
  /**
   * @remarks
   * The name of the project.
   * 
   * The name consists of the namespace where the application is deployed and the name of the application. The format is `${namespace}/${name}`. Example: default/test-app.
   * 
   * @example
   * default/test-app
   */
  projectId?: string;
  /**
   * @remarks
   * The type of trigger.
   * 
   * Valid values:
   * 
   * *   `deployment`: performs actions on Deployments.
   * *   `application`: performs actions on applications that are deployed in Application Center.
   * 
   * Default value: `deployment`.
   * 
   * @example
   * deployment
   */
  type?: string;
  /**
   * @remarks
   * The action that the trigger performs. The value is set to redeploy.
   * 
   * `redeploy`: redeploys the resource specified by project_id.
   * 
   * @example
   * redeploy
   */
  action?: string;
  /**
   * @remarks
   * The token information.
   * 
   * @example
   * eyJhbGci***
   */
  token?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      name: 'name',
      clusterId: 'cluster_id',
      projectId: 'project_id',
      type: 'type',
      action: 'action',
      token: 'token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
      clusterId: 'string',
      projectId: 'string',
      type: 'string',
      action: 'string',
      token: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserPermissionResponseBody extends $tea.Model {
  /**
   * @remarks
   * The authorization setting. Valid values:
   * 
   * *   `{cluster_id}` is returned if the permissions are scoped to a cluster.
   * *   `{cluster_id}/{namespace}` is returned if the permissions are scoped to a namespace of a cluster.
   * *   `all-clusters` is returned if the permissions are scoped to all clusters.
   * 
   * @example
   * c1b542****
   */
  resourceId?: string;
  /**
   * @remarks
   * The authorization type. Valid values:
   * 
   * *   `cluster`: indicates that the permissions are scoped to a cluster.
   * *   `namespace`: indicates that the permissions are scoped to a namespace of a cluster.
   * *   `console`: indicates that the permissions are scoped to all clusters. This value was displayed only in the console.
   * 
   * @example
   * cluster
   */
  resourceType?: string;
  /**
   * @remarks
   * The name of the custom role. If a custom role is assigned, the value is the name of the assigned custom role.
   * 
   * @example
   * view
   */
  roleName?: string;
  /**
   * @remarks
   * The type of predefined role. Valid values:
   * 
   * *   `admin`: administrator
   * *   `ops`: O\\&M engineer
   * *   `dev`: developer
   * *   `restricted`: restricted user
   * *   `custom`: custom role
   * 
   * @example
   * admin
   */
  roleType?: string;
  /**
   * @remarks
   * Indicates whether the permissions are granted to the cluster owner.
   * 
   * *   `0`: indicates that the permissions are not granted to the cluster owner.
   * *   `1`: indicates that the permissions are granted to the cluster owner. The cluster owner is the administrator.
   * 
   * @example
   * 1
   */
  isOwner?: number;
  /**
   * @remarks
   * Indicates whether the permissions are granted to the RAM role. Valid values:
   * 
   * *   `0`: indicates that the permissions are not granted to the RAM role.
   * *   `1`: indicates that the permissions are granted to the RAM role.
   * 
   * @example
   * 1
   */
  isRamRole?: number;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'resource_id',
      resourceType: 'resource_type',
      roleName: 'role_name',
      roleType: 'role_type',
      isOwner: 'is_owner',
      isRamRole: 'is_ram_role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceType: 'string',
      roleName: 'string',
      roleType: 'string',
      isOwner: 'number',
      isRamRole: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserQuotaResponseBodyEdgeImprovedNodepoolQuota extends $tea.Model {
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * The maximum bandwidth of each enhanced node pool. Unit: Mbit/s.
   * 
   * @example
   * 10
   */
  bandwidth?: number;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * The quota of enhanced edge node pools that belong to an Alibaba Cloud account.
   * 
   * @example
   * 3
   */
  count?: number;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * The maximum subscription duration of an enhanced edge node pool. Unit: months.
   * 
   * > You can ignore this parameter because enhanced edge node pools are pay-as-you-go resources.
   * 
   * @example
   * 3
   */
  period?: number;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'bandwidth',
      count: 'count',
      period: 'period',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      count: 'number',
      period: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWorkflowsResponseBodyJobs extends $tea.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * cb1a7214cfc0b41d9bb086affc2d8f51c
   */
  clusterId?: string;
  /**
   * @remarks
   * The time when the workflow was created.
   * 
   * @example
   * 2020-01-15T13:18:52Z
   */
  createTime?: string;
  /**
   * @remarks
   * The name of the workflow.
   * 
   * @example
   * wgs-gpu-qb4dk
   */
  jobName?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'cluster_id',
      createTime: 'create_time',
      jobName: 'job_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      createTime: 'string',
      jobName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FixNodePoolVulsRequestRolloutPolicy extends $tea.Model {
  /**
   * @remarks
   * The maximum concurrency for batch patching. Minimum value: 1. The maximum value equals the number of nodes in the node pool.
   * 
   * @example
   * 1
   */
  maxParallelism?: number;
  static names(): { [key: string]: string } {
    return {
      maxParallelism: 'max_parallelism',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxParallelism: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterAddonInstanceResponseBodyLogging extends $tea.Model {
  /**
   * @remarks
   * Indicates whether Simple Log Service is supported by the component.
   * 
   * @example
   * false
   */
  capable?: boolean;
  /**
   * @remarks
   * Indicates whether Simple Log Service is enabled for the component.
   * 
   * @example
   * false
   */
  enabled?: boolean;
  /**
   * @remarks
   * The Simple Log Service project that is used to collect logs for the component.
   * 
   * @example
   * my-log-project
   */
  logProject?: string;
  /**
   * @remarks
   * The Simple Log Service Logstore that is used to collect logs for the component.
   * 
   * @example
   * my-logstore
   */
  logstore?: string;
  static names(): { [key: string]: string } {
    return {
      capable: 'capable',
      enabled: 'enabled',
      logProject: 'log_project',
      logstore: 'logstore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capable: 'boolean',
      enabled: 'boolean',
      logProject: 'string',
      logstore: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterDiagnosisCheckItemsResponseBodyCheckItems extends $tea.Model {
  /**
   * @example
   * Check whether the node can access host dns service
   */
  desc?: string;
  /**
   * @example
   * HostDNS
   */
  display?: string;
  /**
   * @example
   * Node
   */
  group?: string;
  /**
   * @example
   * normal
   */
  level?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * HostDNS
   */
  name?: string;
  /**
   * @example
   * True
   */
  refer?: string;
  /**
   * @example
   * True
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      desc: 'desc',
      display: 'display',
      group: 'group',
      level: 'level',
      message: 'message',
      name: 'name',
      refer: 'refer',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desc: 'string',
      display: 'string',
      group: 'string',
      level: 'string',
      message: 'string',
      name: 'string',
      refer: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetKubernetesTriggerResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the trigger.
   * 
   * @example
   * 1234
   */
  id?: string;
  /**
   * @remarks
   * The name of the trigger.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The ID of the associated cluster.
   * 
   * @example
   * c259f563386444ebb8d7**
   */
  clusterId?: string;
  /**
   * @remarks
   * The name of the project.
   * 
   * The name consists of the namespace where the application is deployed and the name of the application. The format is `${namespace}/${name}`. Example: default/test-app.
   * 
   * @example
   * default/test-app
   */
  projectId?: string;
  /**
   * @remarks
   * The type of trigger.
   * 
   * Valid values:
   * 
   * *   `deployment`: performs actions on Deployments.
   * *   `application`: performs actions on applications that are deployed in Application Center.
   * 
   * Default value: `deployment`.
   * 
   * @example
   * deployment
   */
  type?: string;
  /**
   * @remarks
   * The action that the trigger performs. The value is set to redeploy.
   * 
   * `redeploy`: redeploys the resource specified by project_id.
   * 
   * @example
   * redeploy
   */
  action?: string;
  /**
   * @remarks
   * Token
   * 
   * @example
   * eyJhbGci***
   */
  token?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      name: 'name',
      clusterId: 'cluster_id',
      projectId: 'project_id',
      type: 'type',
      action: 'action',
      token: 'token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
      clusterId: 'string',
      projectId: 'string',
      type: 'string',
      action: 'string',
      token: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUpgradeStatusResponseBodyUpgradeTask extends $tea.Model {
  /**
   * @remarks
   * The description of the update task.
   * 
   * @example
   * subject to actual return
   */
  message?: string;
  /**
   * @remarks
   * The status of the update task. Valid values:
   * 
   * *   `running`: The update task is being executed.
   * *   `Success`: The update task is successfully executed.
   * *   `Failed`: The update task failed.
   * 
   * @example
   * running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'message',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GrantPermissionsRequestBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the cluster on which you want to grant permissions to the RAM role or RAM role.
   * 
   * *   Set this parameter to an empty string if `role_type` is set to `all-clusters`.
   * 
   * This parameter is required.
   * 
   * @example
   * c796c60***
   */
  cluster?: string;
  /**
   * @remarks
   * Specifies whether to assign a custom role to the RAM user or RAM role. If you want to assign a custom role to the RAM user or RAM role, set `role_name` to the name of the custom role.
   * 
   * @example
   * false
   */
  isCustom?: boolean;
  /**
   * @remarks
   * Specifies whether to use a RAM role to grant permissions.
   * 
   * @example
   * false
   */
  isRamRole?: boolean;
  /**
   * @remarks
   * The namespace that you want to authorize the RAM user or RAM role to manage. This parameter is required only if you set role_type to namespace.
   * 
   * @example
   * test
   */
  namespace?: string;
  /**
   * @remarks
   * The predefined role. Valid values:
   * 
   * *   `admin`: administrator
   * *   `ops`: O\\&M engineer
   * *   `dev`: developer
   * *   `restricted`: restricted user
   * *   Custom role
   * 
   * This parameter is required.
   * 
   * @example
   * ops
   */
  roleName?: string;
  /**
   * @remarks
   * The authorization type. Valid values:
   * 
   * *   `cluster`: authorizes the RAM user or RAM role to manage the specified clusters.
   * *   `namespace`: authorizes the RAM user or RAM role to manage the specified namepsaces.
   * *   `all-clusters`: authorizes the RAM user or RAM role to manage all clusters.
   * 
   * This parameter is required.
   * 
   * @example
   * cluster
   */
  roleType?: string;
  static names(): { [key: string]: string } {
    return {
      cluster: 'cluster',
      isCustom: 'is_custom',
      isRamRole: 'is_ram_role',
      namespace: 'namespace',
      roleName: 'role_name',
      roleType: 'role_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cluster: 'string',
      isCustom: 'boolean',
      isRamRole: 'boolean',
      namespace: 'string',
      roleName: 'string',
      roleType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallClusterAddonsRequestBody extends $tea.Model {
  /**
   * @remarks
   * The custom component settings that you want to use. The value is a JSON string.
   * 
   * @example
   * {\\"IngressDashboardEnabled\\":\\"true\\",\\"sls_project_name\\":\\"your_sls_project_name\\"}"}
   */
  config?: string;
  /**
   * @remarks
   * The component name.
   * 
   * This parameter is required.
   * 
   * @example
   * ags-metrics-collector
   */
  name?: string;
  /**
   * @remarks
   * The component version.
   * 
   * >  You can call the [DescribeClusterAddonsVersion](https://help.aliyun.com/document_detail/197434.html) operation to query the version of a component.
   * 
   * This parameter is required.
   * 
   * @example
   * v1.0.0.2-cc3b2d6-aliyun
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'config',
      name: 'name',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      name: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAddonsResponseBodyAddons extends $tea.Model {
  /**
   * @remarks
   * Architectures supported by the component. Valid values:
   * 
   * *   amd64
   * *   arm64
   */
  architecture?: string[];
  /**
   * @remarks
   * The category of the component.
   * 
   * @example
   * monitor
   */
  category?: string;
  /**
   * @remarks
   * The schema of the custom parameters of the component.
   * 
   * @example
   * {}
   */
  configSchema?: string;
  /**
   * @remarks
   * Indicates whether the component is automatically installed by default.
   * 
   * @example
   * false
   */
  installByDefault?: boolean;
  /**
   * @remarks
   * Indicates whether the component is fully managed.
   * 
   * @example
   * false
   */
  managed?: boolean;
  /**
   * @remarks
   * The component name.
   * 
   * @example
   * arms-prometheus
   */
  name?: string;
  /**
   * @remarks
   * Operations supported by the component. Valid values:
   * 
   * *   Install
   * *   Upgrade
   * *   Modify
   * *   Uninstall
   */
  supportedActions?: string[];
  /**
   * @remarks
   * The version number.
   * 
   * @example
   * 1.1.9
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      architecture: 'architecture',
      category: 'category',
      configSchema: 'config_schema',
      installByDefault: 'install_by_default',
      managed: 'managed',
      name: 'name',
      supportedActions: 'supported_actions',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architecture: { 'type': 'array', 'itemType': 'string' },
      category: 'string',
      configSchema: 'string',
      installByDefault: 'boolean',
      managed: 'boolean',
      name: 'string',
      supportedActions: { 'type': 'array', 'itemType': 'string' },
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterAddonInstancesResponseBodyAddons extends $tea.Model {
  /**
   * @remarks
   * The component name.
   * 
   * @example
   * coredns
   */
  name?: string;
  /**
   * @remarks
   * The status of the component. Valid values:
   * 
   * *   active: The component is installed.
   * *   updating: The component is being modified.
   * *   upgrading: The component is being updated.
   * *   deleting: The component is being uninstalled.
   * 
   * @example
   * active
   */
  state?: string;
  /**
   * @remarks
   * The version of the component.
   * 
   * @example
   * v1.9.3.10-7dfca203-aliyun
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      state: 'state',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      state: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterChecksResponseBodyChecks extends $tea.Model {
  /**
   * @remarks
   * The ID of the cluster check task.
   * 
   * @example
   * 1697100584236600453-ce0da5a1d627e4e9e9f96cae8ad07****-clustercheck-lboto
   */
  checkId?: string;
  /**
   * @remarks
   * The time when the cluster check task was created.
   * 
   * @example
   * 2023-10-16T08:31:20.292030178Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The time when the cluster check task was completed.
   * 
   * @example
   * 2023-10-16T08:35:20.292030178Z
   */
  finishedAt?: string;
  /**
   * @remarks
   * The message that indicates the status of the cluster check task.
   * 
   * @example
   * task succeed
   */
  message?: string;
  /**
   * @remarks
   * The status of the cluster check.
   * 
   * @example
   * Succeeded
   */
  status?: string;
  /**
   * @remarks
   * The check method.
   * 
   * @example
   * ClusterUpgrade
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      checkId: 'check_id',
      createdAt: 'created_at',
      finishedAt: 'finished_at',
      message: 'message',
      status: 'status',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkId: 'string',
      createdAt: 'string',
      finishedAt: 'string',
      message: 'string',
      status: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterKubeconfigStatesResponseBodyPage extends $tea.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 5
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'page_number',
      pageSize: 'page_size',
      totalCount: 'total_count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterKubeconfigStatesResponseBodyStates extends $tea.Model {
  /**
   * @remarks
   * The display name of the account.
   * 
   * @example
   * tom
   */
  accountDisplayName?: string;
  /**
   * @remarks
   * The ID of an Alibaba Cloud account, RAM user, or RAM role.
   * 
   * @example
   * 22855*****************
   */
  accountId?: string;
  /**
   * @remarks
   * The name of the account.
   * 
   * @example
   * tom
   */
  accountName?: string;
  /**
   * @remarks
   * The status of the account. Valid values:
   * 
   * *   Active: The account is active.
   * *   InActive: The account is locked.
   * *   Deleted: The account is deleted.
   * 
   * @example
   * Active
   */
  accountState?: string;
  /**
   * @remarks
   * The type of the account. Valid values:
   * 
   * *   RootAccount: Alibaba Cloud account.
   * *   RamUser: RAM user.
   * *   RamRole: RAM role.
   * 
   * @example
   * RamUser
   */
  accountType?: string;
  /**
   * @remarks
   * Expiration time of the certificate.
   * 
   * @example
   * 2027-07-15T01:32:20Z
   */
  certExpireTime?: string;
  /**
   * @remarks
   * The status of the certificate.
   * 
   * *   Unexpired: The certificate is not expired.
   * *   Expired: The certificate is expired.
   * *   Unknown: The status of the certificate is unknown.
   * 
   * @example
   * Expired
   */
  certState?: string;
  /**
   * @remarks
   * Indicates whether the certificate can be revoked.
   * 
   * @example
   * true
   */
  revokable?: boolean;
  static names(): { [key: string]: string } {
    return {
      accountDisplayName: 'account_display_name',
      accountId: 'account_id',
      accountName: 'account_name',
      accountState: 'account_state',
      accountType: 'account_type',
      certExpireTime: 'cert_expire_time',
      certState: 'cert_state',
      revokable: 'revokable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountDisplayName: 'string',
      accountId: 'string',
      accountName: 'string',
      accountState: 'string',
      accountType: 'string',
      certExpireTime: 'string',
      certState: 'string',
      revokable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOperationPlansResponseBodyPlans extends $tea.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * c29ced64b3dfe4f33b57ca0aa9f68****
   */
  clusterId?: string;
  /**
   * @remarks
   * The time when the operation plan was created.
   * 
   * @example
   * 2023-11-21T20:01:22+08:00
   */
  created?: string;
  /**
   * @remarks
   * The expected end time of the plan.
   * 
   * @example
   * 2023-11-22T18:00:00+08:00
   */
  endTime?: string;
  /**
   * @remarks
   * The operation plan ID.
   * 
   * @example
   * P-655c9c127e0e6603ef00****
   */
  planId?: string;
  /**
   * @remarks
   * The expected start time of the plan.
   * 
   * @example
   * 2023-11-22T15:18:00+08:00
   */
  startTime?: string;
  /**
   * @remarks
   * The plan status. Valid values:
   * 
   * *   scheduled
   * *   Canceled
   * 
   * @example
   * scheduled
   */
  state?: string;
  /**
   * @remarks
   * The target ID.
   * 
   * @example
   * c29ced64b3dfe4f33b57ca0aa9f68****
   */
  targetId?: string;
  /**
   * @remarks
   * The target type.
   * 
   * @example
   * cluster
   */
  targetType?: string;
  /**
   * @remarks
   * The plan type. Valid values:
   * 
   * *   cluster_upgrade
   * 
   * @example
   * cluster_upgrade
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'cluster_id',
      created: 'created',
      endTime: 'end_time',
      planId: 'plan_id',
      startTime: 'start_time',
      state: 'state',
      targetId: 'target_id',
      targetType: 'target_type',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      created: 'string',
      endTime: 'string',
      planId: 'string',
      startTime: 'string',
      state: 'string',
      targetId: 'string',
      targetType: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBodyTagResourcesTagResource extends $tea.Model {
  /**
   * @remarks
   * The ID of the resource.
   * 
   * @example
   * i-xxx
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of the resource. For more information, see [Labels](https://help.aliyun.com/document_detail/110425.html).
   * 
   * @example
   * CLUSTER
   */
  resourceType?: string;
  /**
   * @remarks
   * The key of the label.
   * 
   * @example
   * ack.aliyun.com
   */
  tagKey?: string;
  /**
   * @remarks
   * The value of the label.
   * 
   * @example
   * c71cf3d796c374bf48644482cb0c3****
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'resource_id',
      resourceType: 'resource_type',
      tagKey: 'tag_key',
      tagValue: 'tag_value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceType: 'string',
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBodyTagResources extends $tea.Model {
  /**
   * @remarks
   * The resource and label.
   */
  tagResource?: ListTagResourcesResponseBodyTagResourcesTagResource[];
  static names(): { [key: string]: string } {
    return {
      tagResource: 'tag_resource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagResource: { 'type': 'array', 'itemType': ListTagResourcesResponseBodyTagResourcesTagResource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserKubeConfigStatesResponseBodyPage extends $tea.Model {
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'page_number',
      pageSize: 'page_size',
      totalCount: 'total_count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserKubeConfigStatesResponseBodyStates extends $tea.Model {
  /**
   * @remarks
   * The expiration date of the certificate used in a kubeconfig file. Format: the UTC time in the RFC3339 format.
   * 
   * @example
   * 2026-11-30T07:41:50Z
   */
  certExpireTime?: string;
  /**
   * @remarks
   * The current status of the certificate used in a kubeconfig file. Valid values:
   * 
   * *   Expired: The certificate is expired.
   * *   Unexpired: The certificate is not expired.
   * *   Unissued: The certificate is not issued.
   * *   Unknown: The status of the certificate is unknown.
   * *   Removed: The certificate is removed. An issue record is found for the certificate.
   * 
   * @example
   * Unissued
   */
  certState?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * c5b5e80b0b64a4bf6939d2d8fbbc5****
   */
  clusterId?: string;
  /**
   * @remarks
   * The cluster name.
   * 
   * The name must be 1 to 63 characters in length, and can contain digits, letters, and hyphens (-). The name cannot start with a hyphen (-).
   * 
   * @example
   * cluster-demo
   */
  clusterName?: string;
  /**
   * @remarks
   * The status of the cluster. Valid values:
   * 
   * *   `initial`: The cluster is being created.
   * *   `failed`: The cluster failed to be created.
   * *   `running`: The cluster is running.
   * *   `updating`: The cluster is being upgraded.
   * *   `updating_failed`: The cluster failed to be updated.
   * *   `scaling`: The cluster is being scaled.
   * *   `waiting`: The cluster is waiting for connection requests.
   * *   `disconnected`: The cluster is disconnected.
   * *   `stopped`: The cluster is stopped.
   * *   `deleting`: The cluster is being deleted.
   * *   `deleted`: The cluster is deleted.
   * *   `delete_failed`: The cluster failed to be deleted.
   * 
   * @example
   * running
   */
  clusterState?: string;
  static names(): { [key: string]: string } {
    return {
      certExpireTime: 'cert_expire_time',
      certState: 'cert_state',
      clusterId: 'cluster_id',
      clusterName: 'cluster_name',
      clusterState: 'cluster_state',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certExpireTime: 'string',
      certState: 'string',
      clusterId: 'string',
      clusterName: 'string',
      clusterState: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterRequestApiServerCustomCertSans extends $tea.Model {
  /**
   * @example
   * append
   */
  action?: string;
  subjectAlternativeNames?: string[];
  static names(): { [key: string]: string } {
    return {
      action: 'action',
      subjectAlternativeNames: 'subject_alternative_names',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      subjectAlternativeNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterRequestOperationPolicyClusterAutoUpgrade extends $tea.Model {
  /**
   * @example
   * patch
   */
  channel?: string;
  /**
   * @example
   * true
   */
  enabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      channel: 'channel',
      enabled: 'enabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channel: 'string',
      enabled: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterRequestOperationPolicy extends $tea.Model {
  clusterAutoUpgrade?: ModifyClusterRequestOperationPolicyClusterAutoUpgrade;
  static names(): { [key: string]: string } {
    return {
      clusterAutoUpgrade: 'cluster_auto_upgrade',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterAutoUpgrade: ModifyClusterRequestOperationPolicyClusterAutoUpgrade,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterRequestSystemEventsLogging extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to enable system event storage.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The name of the LogProject that stores system events.
   * 
   * @example
   * k8s-log-cb95aa626a47740afbf6aa099b65****
   */
  loggingProject?: string;
  static names(): { [key: string]: string } {
    return {
      enabled: 'enabled',
      loggingProject: 'logging_project',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      loggingProject: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterConfigurationRequestCustomizeConfigConfigs extends $tea.Model {
  /**
   * @remarks
   * The name of the configuration item.
   * 
   * @example
   * MaxRequestsInflight
   */
  key?: string;
  /**
   * @remarks
   * The value of the configuration item.
   * 
   * @example
   * 100
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterConfigurationRequestCustomizeConfig extends $tea.Model {
  /**
   * @remarks
   * The custom configuration.
   */
  configs?: ModifyClusterConfigurationRequestCustomizeConfigConfigs[];
  /**
   * @remarks
   * The name of the component.
   * 
   * @example
   * kube-apiserver
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      configs: 'configs',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configs: { 'type': 'array', 'itemType': ModifyClusterConfigurationRequestCustomizeConfigConfigs },
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterNodePoolRequestAutoScaling extends $tea.Model {
  /**
   * @remarks
   * The maximum bandwidth of the EIP.
   * 
   * @example
   * 5
   * 
   * @deprecated
   */
  eipBandwidth?: number;
  /**
   * @remarks
   * The metering method of the EIP. Valid values:
   * 
   * *   `PayByBandwidth`: pay-by-bandwidth.
   * *   `PayByTraffic`: pay-by-data-transfer.
   * 
   * Default value: `PayByBandwidth`.
   * 
   * @example
   * PayByBandwidth
   * 
   * @deprecated
   */
  eipInternetChargeType?: string;
  /**
   * @remarks
   * Specifies whether to enable auto scaling. Valid values:
   * 
   * *   `true`: enables auto scaling for the node pool.
   * *   `false`: disables auto scaling for the node pool. If you set this parameter to false, other parameters in the `auto_scaling` section do not take effect.
   * 
   * Default value: `false`.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * Specifies whether to associate an elastic IP address (EIP) with the node pool. Valid values:
   * 
   * *   `true`: associates an EIP with the node pool.
   * *   `false`: does not associate an EIP with the node pool.
   * 
   * Default value: `false`.
   * 
   * @example
   * true
   * 
   * @deprecated
   */
  isBondEip?: boolean;
  /**
   * @remarks
   * The maximum number of Elastic Compute Service (ECS) instances that can be created in the node pool.
   * 
   * @example
   * 10
   */
  maxInstances?: number;
  /**
   * @remarks
   * The minimum number of ECS instances that must be kept in the node pool.
   * 
   * @example
   * 2
   */
  minInstances?: number;
  /**
   * @remarks
   * The instance types that can be used for auto scaling of the node pool. Valid values:
   * 
   * *   `cpu`: regular instance.
   * *   `gpu`: GPU-accelerated instance.
   * *   `gpushare`: shared GPU-accelerated instance.
   * *   `spot`: preemptible instance.
   * 
   * Default value: `cpu`.
   * 
   * @example
   * cpu
   * 
   * @deprecated
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      eipBandwidth: 'eip_bandwidth',
      eipInternetChargeType: 'eip_internet_charge_type',
      enable: 'enable',
      isBondEip: 'is_bond_eip',
      maxInstances: 'max_instances',
      minInstances: 'min_instances',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eipBandwidth: 'number',
      eipInternetChargeType: 'string',
      enable: 'boolean',
      isBondEip: 'boolean',
      maxInstances: 'number',
      minInstances: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterNodePoolRequestKubernetesConfig extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to install the CloudMonitor agent on ECS nodes. After the CloudMonitor agent is installed on ECS nodes, you can view monitoring information about the instances in the CloudMonitor console. We recommend that you install the CloudMonitor agent. Valid values:
   * 
   * *   `true`: installs the CloudMonitor agent on ECS nodes.
   * *   `false`: does not install the CloudMonitor agent on ECS nodes.
   * 
   * Default value: `false`.
   * 
   * @example
   * true
   */
  cmsEnabled?: boolean;
  /**
   * @remarks
   * The CPU management policy of the nodes in the node pool. The following policies are supported if the Kubernetes version of the cluster is 1.12.6 or later:
   * 
   * *   `static`: allows pods with specific resource characteristics on the node to be granted enhanced CPU affinity and exclusivity.
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
   * The labels of the nodes in the node pool. You can add labels to the nodes in the cluster. You must add labels based on the following rules:
   * 
   * *   A tag is a case-sensitive key-value pair. You can add up to 20 tags.
   * *   The key must be unique and cannot exceed 64 characters in length. The value can be empty and cannot exceed 128 characters in length. Keys and values cannot start with `aliyun`, `acs:`, `https://`, or `http://`. For more information, see [Labels and Selectors](https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#syntax-and-character-set).
   */
  labels?: Tag[];
  /**
   * @remarks
   * The name of the container runtime.
   * 
   * @example
   * docker
   */
  runtime?: string;
  /**
   * @remarks
   * The version of the container runtime.
   * 
   * @example
   * 19.03.5
   */
  runtimeVersion?: string;
  /**
   * @remarks
   * The configuration of a node taint.
   */
  taints?: Taint[];
  /**
   * @remarks
   * Specifies whether the nodes are unschedulable after a scale-out activity is performed.
   * 
   * @example
   * false
   */
  unschedulable?: boolean;
  /**
   * @remarks
   * The user-defined data of the node pool. For more information, see [Prepare user data](https://help.aliyun.com/document_detail/49121.html).
   * 
   * @example
   * IyEvdXNyL2Jpbi9iYXNoCmVjaG8gIkhlbGxvIEFDSyEi
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      cmsEnabled: 'cms_enabled',
      cpuPolicy: 'cpu_policy',
      labels: 'labels',
      runtime: 'runtime',
      runtimeVersion: 'runtime_version',
      taints: 'taints',
      unschedulable: 'unschedulable',
      userData: 'user_data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cmsEnabled: 'boolean',
      cpuPolicy: 'string',
      labels: { 'type': 'array', 'itemType': Tag },
      runtime: 'string',
      runtimeVersion: 'string',
      taints: { 'type': 'array', 'itemType': Taint },
      unschedulable: 'boolean',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterNodePoolRequestManagementAutoRepairPolicy extends $tea.Model {
  /**
   * @remarks
   * Specifies whether ACK is allowed to automatically restart nodes after repairing the nodes. Valid values:
   * 
   * *   `true`: yes.
   * *   `false`: no.
   * 
   * @example
   * true
   */
  restartNode?: boolean;
  static names(): { [key: string]: string } {
    return {
      restartNode: 'restart_node',
    };
  }

  static types(): { [key: string]: any } {
    return {
      restartNode: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterNodePoolRequestManagementAutoUpgradePolicy extends $tea.Model {
  /**
   * @remarks
   * Specifies whether ACK is allowed to automatically update the kubelet. Valid values:
   * 
   * *   `true`: yes.
   * *   `false`: no.
   * 
   * @example
   * true
   */
  autoUpgradeKubelet?: boolean;
  /**
   * @remarks
   * Specifies whether ACK is allowed to automatically update the operating system. This parameter takes effect only when you specify `auto_upgrade=true`. Valid values:
   * 
   * *   `true`: yes.
   * *   `false`: no.
   * 
   * Default value: `false`.
   */
  autoUpgradeOs?: boolean;
  /**
   * @remarks
   * Specifies whether ACK is allowed to automatically update the runtime. This parameter takes effect only when you specify `auto_upgrade=true`. Valid values:
   * 
   * *   `true`: yes.
   * *   `false`: no.
   * 
   * Default value: `false`.
   */
  autoUpgradeRuntime?: boolean;
  static names(): { [key: string]: string } {
    return {
      autoUpgradeKubelet: 'auto_upgrade_kubelet',
      autoUpgradeOs: 'auto_upgrade_os',
      autoUpgradeRuntime: 'auto_upgrade_runtime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoUpgradeKubelet: 'boolean',
      autoUpgradeOs: 'boolean',
      autoUpgradeRuntime: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterNodePoolRequestManagementAutoVulFixPolicy extends $tea.Model {
  /**
   * @remarks
   * Specifies whether ACK is allowed to automatically restart nodes after patching CVE vulnerabilities. Valid values:
   * 
   * *   `true`: yes.
   * *   `false`: no.
   * 
   * @example
   * true
   */
  restartNode?: boolean;
  /**
   * @remarks
   * The severity levels of vulnerabilities that ACK is allowed to automatically patch. Multiple severity levels are separated by commas (,).
   * 
   * @example
   * asap,nntf
   */
  vulLevel?: string;
  static names(): { [key: string]: string } {
    return {
      restartNode: 'restart_node',
      vulLevel: 'vul_level',
    };
  }

  static types(): { [key: string]: any } {
    return {
      restartNode: 'boolean',
      vulLevel: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterNodePoolRequestManagementUpgradeConfig extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to enable auto update.
   * 
   * *   true: enables auto update.
   * *   false: disables auto update.
   * 
   * Default value: `true`.
   * 
   * @example
   * true
   * 
   * @deprecated
   */
  autoUpgrade?: boolean;
  /**
   * @remarks
   * The maximum number of nodes that can be in the Unavailable state.
   * 
   * Valid values: 1 to 1000.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  maxUnavailable?: number;
  /**
   * @remarks
   * The number of nodes that are temporarily added to the node pool during an auto update. Additional nodes are used to host the workloads of nodes that are being updated.
   * 
   * >  We recommend that you set the number of additional nodes to a value that does not exceed the current number of existing nodes.
   * 
   * @example
   * 5
   */
  surge?: number;
  /**
   * @remarks
   * The percentage of additional nodes to the nodes in the node pool. You must set this parameter or `surge`.
   * 
   * @example
   * 0
   */
  surgePercentage?: number;
  static names(): { [key: string]: string } {
    return {
      autoUpgrade: 'auto_upgrade',
      maxUnavailable: 'max_unavailable',
      surge: 'surge',
      surgePercentage: 'surge_percentage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoUpgrade: 'boolean',
      maxUnavailable: 'number',
      surge: 'number',
      surgePercentage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterNodePoolRequestManagement extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to enable auto repair. This parameter takes effect only when you specify `enable=true`. Valid values:
   * 
   * *   `true`: enables auto repair.
   * *   `false`: disables auto repair.
   * 
   * Default value: `true`.
   * 
   * @example
   * true
   */
  autoRepair?: boolean;
  /**
   * @remarks
   * The auto node repair policy.
   */
  autoRepairPolicy?: ModifyClusterNodePoolRequestManagementAutoRepairPolicy;
  /**
   * @remarks
   * Specifies whether to enable auto update. Valid values:
   * 
   * *   `true`: enables auto update.
   * *   `false`: disables auto update.
   * 
   * @example
   * true
   */
  autoUpgrade?: boolean;
  /**
   * @remarks
   * The auto update policy.
   */
  autoUpgradePolicy?: ModifyClusterNodePoolRequestManagementAutoUpgradePolicy;
  /**
   * @remarks
   * Specifies whether ACK is allowed to automatically patch CVE vulnerabilities. Valid values:
   * 
   * *   `true`: yes.
   * *   `true`: no.
   * 
   * @example
   * true
   */
  autoVulFix?: boolean;
  /**
   * @remarks
   * The auto CVE patching policy.
   */
  autoVulFixPolicy?: ModifyClusterNodePoolRequestManagementAutoVulFixPolicy;
  /**
   * @remarks
   * Specifies whether to enable the managed node pool feature. Valid values:
   * 
   * *   `true`: enables the managed node pool feature.
   * *   `false`: disables the managed node pool feature. Other parameters in this section take effect only when `enable=true` is specified.
   * 
   * Default value: `false`.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The configuration of auto update. The configuration takes effect only when `enable=true` is specified.
   * 
   * @deprecated
   */
  upgradeConfig?: ModifyClusterNodePoolRequestManagementUpgradeConfig;
  static names(): { [key: string]: string } {
    return {
      autoRepair: 'auto_repair',
      autoRepairPolicy: 'auto_repair_policy',
      autoUpgrade: 'auto_upgrade',
      autoUpgradePolicy: 'auto_upgrade_policy',
      autoVulFix: 'auto_vul_fix',
      autoVulFixPolicy: 'auto_vul_fix_policy',
      enable: 'enable',
      upgradeConfig: 'upgrade_config',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRepair: 'boolean',
      autoRepairPolicy: ModifyClusterNodePoolRequestManagementAutoRepairPolicy,
      autoUpgrade: 'boolean',
      autoUpgradePolicy: ModifyClusterNodePoolRequestManagementAutoUpgradePolicy,
      autoVulFix: 'boolean',
      autoVulFixPolicy: ModifyClusterNodePoolRequestManagementAutoVulFixPolicy,
      enable: 'boolean',
      upgradeConfig: ModifyClusterNodePoolRequestManagementUpgradeConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterNodePoolRequestNodepoolInfo extends $tea.Model {
  /**
   * @remarks
   * The name of the node pool.
   * 
   * The name must be 1 to 63 characters in length, and can contain digits, letters, and hyphens (-). It cannot start with a hyphen (-).
   * 
   * @example
   * default-nodepool
   */
  name?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmyvw3wjm****
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      resourceGroupId: 'resource_group_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterNodePoolRequestScalingGroupPrivatePoolOptions extends $tea.Model {
  /**
   * @remarks
   * The ID of the private node pool.
   * 
   * @example
   * eap-bp67acfmxazb4****
   */
  id?: string;
  /**
   * @remarks
   * The type of the private node pool. This parameter specifies the type of private node pool that you want to use to create instances. A private node pool is generated when an elasticity assurance or a capacity reservation service takes effect. The system selects a private node pool to launch instances. Valid values:
   * 
   * *   `Open`: specifies an open private node pool. The system selects an open private node pool to launch instances. If no matching open private node pool is available, the resources in the public node pool are used.
   * *   `Target`: specifies a private node pool. The system uses the resources of the specified private node pool to launch instances. If the specified private node pool is unavailable, instances cannot be launched.
   * *   `None`: no private node pool is used. The resources of private node pools are not used to launch the instances.
   * 
   * @example
   * Open
   */
  matchCriteria?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      matchCriteria: 'match_criteria',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      matchCriteria: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterNodePoolRequestScalingGroupSpotPriceLimit extends $tea.Model {
  /**
   * @remarks
   * The instance type of preemptible instances.
   * 
   * @example
   * ecs.c6.large
   */
  instanceType?: string;
  /**
   * @remarks
   * The maximum bid price of a preemptible instance.
   * 
   * Unit: USD/hour.
   * 
   * @example
   * 0.39
   */
  priceLimit?: string;
  static names(): { [key: string]: string } {
    return {
      instanceType: 'instance_type',
      priceLimit: 'price_limit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'string',
      priceLimit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterNodePoolRequestScalingGroup extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to enable auto-renewal for the nodes in the node pool. This parameter takes effect only when you set `instance_charge_type` to `PrePaid`. Valid values:
   * 
   * *   `true`: enables auto-renewal.
   * *   `false`: disables auto-renewal.
   * 
   * Default value: `true`.
   * 
   * @example
   * true
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The auto-renewal duration. This parameter takes effect and is required only when you set `instance_charge_type` to `PrePaid`.
   * 
   * If you specify `PeriodUnit=Month`, the valid values are 1, 2, 3, 6, and 12.
   * 
   * @example
   * 1
   */
  autoRenewPeriod?: number;
  /**
   * @remarks
   * Specifies whether to automatically create pay-as-you-go instances to meet the required number of ECS instances if preemptible instances cannot be created due to reasons such as the cost or insufficient inventory. This parameter takes effect when you set `multi_az_policy` to `COST_OPTIMIZED`. Valid values:
   * 
   * *   `true`: automatically creates pay-as-you-go instances to meet the required number of ECS instances if preemptible instances cannot be created
   * *   `false`: does not create pay-as-you-go instances to meet the required number of ECS instances if preemptible instances cannot be created.
   * 
   * @example
   * true
   */
  compensateWithOnDemand?: boolean;
  /**
   * @remarks
   * The configurations of the data disks that are mounted to the nodes in the node pool. You can mount at most 10 data disks to the nodes in the node pool.
   */
  dataDisks?: DataDisk[];
  /**
   * @remarks
   * The expected number of nodes in the node pool.
   * 
   * @example
   * 2
   */
  desiredSize?: number;
  /**
   * @remarks
   * The ID of the custom image. You can call the `DescribeKubernetesVersionMetadata` operation to query the supported images. By default, the latest image is used.
   * 
   * @example
   * aliyun_2_1903_x64_20G_alibase_20200904.vhd
   */
  imageId?: string;
  /**
   * @remarks
   * The type of OS distribution that you want to use. To specify the node OS, we recommend that you use this parameter. Valid values: CentOS, AliyunLinux, AliyunLinux Qboot, AliyunLinuxUEFI, AliyunLinux3, Windows, WindowsCore, AliyunLinux3Arm64, and ContainerOS.
   * 
   * @example
   * AliyunLinux
   */
  imageType?: string;
  /**
   * @remarks
   * The billing method of the nodes in the node pool. Valid values:
   * 
   * *   `PrePaid`: subscription.
   * *   `PostPaid`: pay-as-you-go.
   * 
   * Default value: `PostPaid`.
   * 
   * @example
   * PostPaid
   */
  instanceChargeType?: string;
  instancePatterns?: InstancePatterns[];
  /**
   * @remarks
   * A list of instance types. You can select multiple instance types. When the system needs to create a node, it starts from the first instance type until the node is created. The instance type that is used to create the node varies based on the actual instance stock.
   */
  instanceTypes?: string[];
  /**
   * @remarks
   * The metering method of the public IP address. Valid values:
   * 
   * *   `PayByBandwidth`: pay-by-bandwidth.
   * *   `PayByTraffic`: pay-by-data-transfer.
   * 
   * @example
   * PayByBandwidth
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The maximum outbound bandwidth of the public IP address of the node. Unit: Mbit/s. Valid values: 1 to 100.
   * 
   * @example
   * 5
   */
  internetMaxBandwidthOut?: number;
  /**
   * @remarks
   * The name of the key pair. You must set this parameter or the `login_password` parameter. You must set `key_pair` if the node pool is a managed node pool.
   * 
   * @example
   * pro-nodepool
   */
  keyPair?: string;
  /**
   * @remarks
   * The password for SSH logon. You must set this parameter or the `key_pair` parameter. The password must be 8 to 30 characters in length, and must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.
   * 
   * @example
   * Hello1234
   */
  loginPassword?: string;
  /**
   * @remarks
   * The ECS instance scaling policy for the multi-zone scaling group. Valid values:
   * 
   * *   `PRIORITY`: The scaling group is scaled based on the VSwitchIds.N parameter. If an ECS instance cannot be created in the zone where the vSwitch that has the highest priority resides, Auto Scaling creates the ECS instance in the zone where the vSwitch that has the next highest priority resides.
   * 
   * *   `COST_OPTIMIZED`: ECS instances are created based on the vCPU unit price in ascending order. Preemptible instances are preferably created when preemptible instance types are specified in the scaling configuration. You can set the `CompensateWithOnDemand` parameter to specify whether to automatically create pay-as-you-go instances when preemptible instances cannot be created due to insufficient resources.
   * 
   *     **
   * 
   *     **Note** `COST_OPTIMIZED` is valid only when multiple instance types are specified or at least one preemptible instance type is specified.
   * 
   * *   `BALANCE`: ECS instances are evenly distributed across multiple zones specified by the scaling group. If ECS instances become imbalanced among multiple zones due to the insufficient inventory, you can call the `RebalanceInstances` operation of Auto Scaling to balance the instance distribution among zones. For more information, see [RebalanceInstances](https://help.aliyun.com/document_detail/71516.html).
   * 
   * Default value: `PRIORITY`.
   * 
   * @example
   * BALANCE
   */
  multiAzPolicy?: string;
  /**
   * @remarks
   * The minimum number of pay-as-you-go instances that must be kept in the scaling group. Valid values: 0 to 1000. If the number of pay-as-you-go instances is less than the value of this parameter, Auto Scaling preferably creates pay-as-you-go instances.
   * 
   * @example
   * 0
   */
  onDemandBaseCapacity?: number;
  /**
   * @remarks
   * The percentage of pay-as-you-go instances among the extra instances that exceed the number specified by `on_demand_base_capacity`. Valid values: 0 to 100.
   * 
   * @example
   * 20
   */
  onDemandPercentageAboveBaseCapacity?: number;
  /**
   * @remarks
   * The subscription duration of the nodes in the node pool. This parameter takes effect and is required only when you set `instance_charge_type` to `PrePaid`.
   * 
   * If `PeriodUnit=Month` is specified, the valid values are 1, 2, 3, 6, 12, 24, 36, 48, and 60.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The billing cycle of the nodes in the node pool. This parameter is required if you set `instance_charge_type` to `PrePaid`.
   * 
   * The billing cycle is measured only in months.
   * 
   * Default value: `Month`.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * The operating system. Valid values:
   * 
   * *   `AliyunLinux`
   * *   `CentOS`
   * *   `Windows`
   * *   `WindowsCore`
   * 
   * @example
   * AliyunLinux
   * 
   * @deprecated
   */
  platform?: string;
  /**
   * @remarks
   * The configuration of the private node pool.
   */
  privatePoolOptions?: ModifyClusterNodePoolRequestScalingGroupPrivatePoolOptions;
  /**
   * @remarks
   * A list of ApsaraDB RDS instances.
   */
  rdsInstances?: string[];
  /**
   * @remarks
   * The scaling mode of the scaling group. Valid values:
   * 
   * *   `release`: the standard mode. ECS instances are created and released based on the resource usage.
   * *   `recycle`: the swift mode. ECS instances are created, stopped, or started during scaling events. This reduces the time required for the next scale-out event. When the instance is stopped, you are charged only for the storage service. This does not apply to ECS instances that are attached with local disks.
   * 
   * @example
   * release
   */
  scalingPolicy?: string;
  /**
   * @remarks
   * The number of instance types that are available for creating preemptible instances. Auto Scaling creates preemptible instances of multiple instance types that are available at the lowest cost. Valid values: 1 to 10.
   * 
   * @example
   * 5
   */
  spotInstancePools?: number;
  /**
   * @remarks
   * Specifies whether to supplement preemptible instances. If this parameter is set to true, when the scaling group receives a system message that a preemptible instance is to be reclaimed, the scaling group attempts to create a new instance to replace this instance. Valid values:
   * 
   * *   `true`: enables the supplementation of preemptible instances.
   * *   `false`: disables the supplementation of preemptible instances.
   * 
   * @example
   * false
   */
  spotInstanceRemedy?: boolean;
  /**
   * @remarks
   * The bid configurations of preemptible instances.
   */
  spotPriceLimit?: ModifyClusterNodePoolRequestScalingGroupSpotPriceLimit[];
  /**
   * @remarks
   * The bidding policy of preemptible instances. Valid values:
   * 
   * *   `NoSpot`: non-preemptible instance.
   * *   `SpotWithPriceLimit`: specifies the highest bid for the preemptible instance.
   * *   `SpotAsPriceGo`: automatically submits bids based on the up-to-date market price.
   * 
   * For more information, see [Preemptible instances](https://help.aliyun.com/document_detail/157759.html).
   * 
   * @example
   * SpotWithPriceLimit
   */
  spotStrategy?: string;
  /**
   * @remarks
   * Specifies whether to enable Burst for the system disk when the disk type is cloud_auto.
   * 
   * @example
   * true
   */
  systemDiskBurstingEnabled?: boolean;
  /**
   * @remarks
   * The types of system disks. The system attempts to create system disks from a disk type with a lower priority when the disk type with a higher priority is unavailable. Valid values: cloud: disk. cloud_efficiency: ultra disk. cloud_ssd: standard SSD. cloud_essd: enhanced SSD (ESSD).
   */
  systemDiskCategories?: string[];
  /**
   * @remarks
   * The type of the system disk. Valid values:
   * 
   * *   `cloud_efficiency`: ultra disk.
   * *   `cloud_ssd`: standard SSD.
   * 
   * Default value: `cloud_ssd`.
   * 
   * @example
   * cloud_efficiency
   */
  systemDiskCategory?: string;
  /**
   * @remarks
   * The algorithm that you want to use to encrypt the system disk. The value is aes-256.
   * 
   * @example
   * aes-256
   */
  systemDiskEncryptAlgorithm?: string;
  /**
   * @remarks
   * Specifies whether to encrypt the system disk. Valid values: true: encrypts the system disk. false: does not encrypt the system disk.
   * 
   * @example
   * false
   */
  systemDiskEncrypted?: boolean;
  /**
   * @remarks
   * The ID of the Key Management Service (KMS) key that is used to encrypt the system disk.
   * 
   * @example
   * 0e478b7a-4262-4802-b8cb-00d3fb40****
   */
  systemDiskKmsKeyId?: string;
  /**
   * @remarks
   * The performance level (PL) of the system disk that you want to use for the node. This parameter takes effect only for enhanced SSDs. You can specify a higher PL if you increase the size of the system disk. For more information, see [ESSDs](https://help.aliyun.com/document_detail/122389.html).
   * 
   * @example
   * PL1
   */
  systemDiskPerformanceLevel?: string;
  /**
   * @remarks
   * The predefined read and write IOPS of the system disk when the disk type is cloud_auto.
   * 
   * @example
   * 1000
   */
  systemDiskProvisionedIops?: number;
  /**
   * @remarks
   * The size of the system disk in GiB.
   * 
   * Valid values: 20 to 500.
   * 
   * The value of this parameter must be at least 20 and greater than or equal to the size of the image.
   * 
   * Default value: the greater value between 40 and the image size.
   * 
   * @example
   * 120
   */
  systemDiskSize?: number;
  /**
   * @remarks
   * The labels that you want to add only to ECS instances.
   * 
   * The tag key must be unique and cannot exceed 128 characters in length. The tag key and value must not start with aliyun or acs: or contain https:// or http://.
   */
  tags?: Tag[];
  /**
   * @remarks
   * The IDs of vSwitches. You can specify 1 to 20 vSwitches.
   * 
   * >  To ensure high availability, we recommend that you select vSwitches in different zones.
   */
  vswitchIds?: string[];
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'auto_renew',
      autoRenewPeriod: 'auto_renew_period',
      compensateWithOnDemand: 'compensate_with_on_demand',
      dataDisks: 'data_disks',
      desiredSize: 'desired_size',
      imageId: 'image_id',
      imageType: 'image_type',
      instanceChargeType: 'instance_charge_type',
      instancePatterns: 'instance_patterns',
      instanceTypes: 'instance_types',
      internetChargeType: 'internet_charge_type',
      internetMaxBandwidthOut: 'internet_max_bandwidth_out',
      keyPair: 'key_pair',
      loginPassword: 'login_password',
      multiAzPolicy: 'multi_az_policy',
      onDemandBaseCapacity: 'on_demand_base_capacity',
      onDemandPercentageAboveBaseCapacity: 'on_demand_percentage_above_base_capacity',
      period: 'period',
      periodUnit: 'period_unit',
      platform: 'platform',
      privatePoolOptions: 'private_pool_options',
      rdsInstances: 'rds_instances',
      scalingPolicy: 'scaling_policy',
      spotInstancePools: 'spot_instance_pools',
      spotInstanceRemedy: 'spot_instance_remedy',
      spotPriceLimit: 'spot_price_limit',
      spotStrategy: 'spot_strategy',
      systemDiskBurstingEnabled: 'system_disk_bursting_enabled',
      systemDiskCategories: 'system_disk_categories',
      systemDiskCategory: 'system_disk_category',
      systemDiskEncryptAlgorithm: 'system_disk_encrypt_algorithm',
      systemDiskEncrypted: 'system_disk_encrypted',
      systemDiskKmsKeyId: 'system_disk_kms_key_id',
      systemDiskPerformanceLevel: 'system_disk_performance_level',
      systemDiskProvisionedIops: 'system_disk_provisioned_iops',
      systemDiskSize: 'system_disk_size',
      tags: 'tags',
      vswitchIds: 'vswitch_ids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'boolean',
      autoRenewPeriod: 'number',
      compensateWithOnDemand: 'boolean',
      dataDisks: { 'type': 'array', 'itemType': DataDisk },
      desiredSize: 'number',
      imageId: 'string',
      imageType: 'string',
      instanceChargeType: 'string',
      instancePatterns: { 'type': 'array', 'itemType': InstancePatterns },
      instanceTypes: { 'type': 'array', 'itemType': 'string' },
      internetChargeType: 'string',
      internetMaxBandwidthOut: 'number',
      keyPair: 'string',
      loginPassword: 'string',
      multiAzPolicy: 'string',
      onDemandBaseCapacity: 'number',
      onDemandPercentageAboveBaseCapacity: 'number',
      period: 'number',
      periodUnit: 'string',
      platform: 'string',
      privatePoolOptions: ModifyClusterNodePoolRequestScalingGroupPrivatePoolOptions,
      rdsInstances: { 'type': 'array', 'itemType': 'string' },
      scalingPolicy: 'string',
      spotInstancePools: 'number',
      spotInstanceRemedy: 'boolean',
      spotPriceLimit: { 'type': 'array', 'itemType': ModifyClusterNodePoolRequestScalingGroupSpotPriceLimit },
      spotStrategy: 'string',
      systemDiskBurstingEnabled: 'boolean',
      systemDiskCategories: { 'type': 'array', 'itemType': 'string' },
      systemDiskCategory: 'string',
      systemDiskEncryptAlgorithm: 'string',
      systemDiskEncrypted: 'boolean',
      systemDiskKmsKeyId: 'string',
      systemDiskPerformanceLevel: 'string',
      systemDiskProvisionedIops: 'number',
      systemDiskSize: 'number',
      tags: { 'type': 'array', 'itemType': Tag },
      vswitchIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterNodePoolRequestTeeConfig extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to enable confidential computing for the cluster. Valid values:
   * 
   * *   `true`: enables confidential computing for the cluster.
   * *   `false`: disables confidential computing for the cluster.
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  teeEnable?: boolean;
  static names(): { [key: string]: string } {
    return {
      teeEnable: 'tee_enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      teeEnable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyNodePoolNodeConfigRequestOsConfig extends $tea.Model {
  sysctl?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      sysctl: 'sysctl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sysctl: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyNodePoolNodeConfigRequestRollingPolicy extends $tea.Model {
  /**
   * @remarks
   * The maximum number of unavailable nodes.
   * 
   * @example
   * 3
   */
  maxParallelism?: number;
  static names(): { [key: string]: string } {
    return {
      maxParallelism: 'max_parallelism',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxParallelism: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RepairClusterNodePoolRequestOperations extends $tea.Model {
  args?: string[];
  operationId?: string;
  static names(): { [key: string]: string } {
    return {
      args: 'args',
      operationId: 'operation_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      args: { 'type': 'array', 'itemType': 'string' },
      operationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScaleClusterRequestTags extends $tea.Model {
  key?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScaleClusterRequestTaints extends $tea.Model {
  effect?: string;
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      effect: 'effect',
      key: 'key',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effect: 'string',
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScaleClusterRequestWorkerDataDisks extends $tea.Model {
  category?: string;
  encrypted?: string;
  size?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      encrypted: 'encrypted',
      size: 'size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      encrypted: 'string',
      size: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScaleOutClusterRequestWorkerDataDisks extends $tea.Model {
  /**
   * @remarks
   * The ID of an automatic snapshot policy. Automatic backup is performed for a disk based on the specified automatic snapshot policy.
   * 
   * By default, this parameter is empty, which indicates that automatic backup is disabled.
   * 
   * @example
   * sp-bp14yziiuvu3s6jn****
   */
  autoSnapshotPolicyId?: string;
  /**
   * @remarks
   * The data disk type.
   * 
   * @example
   * cloud_essd
   */
  category?: string;
  /**
   * @remarks
   * Specifies whether to encrypt the data disks. Valid values:
   * 
   * *   `true`: encrypts data disks.
   * *   `false`: does not encrypt data disks.
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnInstallClusterAddonsRequestAddons extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to release cloud resources.
   * 
   * @example
   * true
   */
  cleanupCloudResources?: boolean;
  /**
   * @remarks
   * The component name.
   * 
   * @example
   * ack-node-problem-detector
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      cleanupCloudResources: 'cleanup_cloud_resources',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cleanupCloudResources: 'boolean',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserPermissionsRequestBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the cluster on which you want to grant permissions to the RAM role or RAM role.
   * 
   * *   Set this parameter to an empty string if `role_type` is set to `all-clusters`.
   * 
   * @example
   * c796c60***
   */
  cluster?: string;
  /**
   * @remarks
   * Specifies whether to assign a custom role to the RAM user or RAM role. If you want to assign a custom role to the RAM user or RAM role, set `role_name` to the name of the custom role.
   * 
   * @example
   * false
   */
  isCustom?: boolean;
  /**
   * @remarks
   * Specifies whether to use a RAM role to grant permissions.
   * 
   * @example
   * false
   */
  isRamRole?: boolean;
  /**
   * @remarks
   * The namespace that you want to authorize the RAM user or RAM role to manage. This parameter is required only if you set role_type to namespace.
   * 
   * @example
   * test
   */
  namespace?: string;
  /**
   * @remarks
   * The predefined role. Valid values:
   * 
   * *   `admin`: administrator
   * *   `ops`: O\\&M engineer
   * *   `dev`: developer
   * *   `restricted`: restricted user
   * *   Custom role
   * 
   * @example
   * ops
   */
  roleName?: string;
  /**
   * @remarks
   * The authorization type. Valid values:
   * 
   * *   `cluster`: authorizes the RAM user or RAM role to manage the specified clusters.
   * *   `namespace`: authorizes the RAM user or RAM role to manage the specified namepsaces.
   * *   `all-clusters`: authorizes the RAM user or RAM role to manage all clusters.
   * 
   * @example
   * cluster
   */
  roleType?: string;
  static names(): { [key: string]: string } {
    return {
      cluster: 'cluster',
      isCustom: 'is_custom',
      isRamRole: 'is_ram_role',
      namespace: 'namespace',
      roleName: 'role_name',
      roleType: 'role_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cluster: 'string',
      isCustom: 'boolean',
      isRamRole: 'boolean',
      namespace: 'string',
      roleName: 'string',
      roleType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeClusterRequestRollingPolicy extends $tea.Model {
  maxParallelism?: number;
  static names(): { [key: string]: string } {
    return {
      maxParallelism: 'max_parallelism',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxParallelism: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeClusterAddonsRequestBody extends $tea.Model {
  /**
   * @remarks
   * The name of the component.
   * 
   * This parameter is required.
   * 
   * @example
   * coredns
   */
  componentName?: string;
  /**
   * @remarks
   * The custom component settings that you want to use. The value is a JSON string.
   * 
   * @example
   * {\\"CpuRequest\\":\\"800m\\"}
   */
  config?: string;
  /**
   * @remarks
   * The version to which the component can be updated. You can call the `DescribeClusterAddonsVersion` operation to query the version to which the component can be updated.
   * 
   * This parameter is required.
   * 
   * @example
   * 1.6.7
   */
  nextVersion?: string;
  /**
   * @remarks
   * The update policy. Valid values:
   * 
   * *   overwrite
   * *   canary
   * 
   * @example
   * canary
   */
  policy?: string;
  /**
   * @remarks
   * The current version of the component.
   * 
   * @example
   * v1.6.2
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      componentName: 'component_name',
      config: 'config',
      nextVersion: 'next_version',
      policy: 'policy',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentName: 'string',
      config: 'string',
      nextVersion: 'string',
      policy: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeClusterNodepoolRequestRollingPolicy extends $tea.Model {
  batchInterval?: number;
  maxParallelism?: number;
  pausePolicy?: string;
  static names(): { [key: string]: string } {
    return {
      batchInterval: 'batch_interval',
      maxParallelism: 'max_parallelism',
      pausePolicy: 'pause_policy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchInterval: 'number',
      maxParallelism: 'number',
      pausePolicy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._signatureAlgorithm = "v2";
    this._endpointRule = "regional";
    this._endpointMap = {
      'ap-northeast-2-pop': "cs.aliyuncs.com",
      'cn-beijing-finance-pop': "cs.aliyuncs.com",
      'cn-beijing-gov-1': "cs.aliyuncs.com",
      'cn-beijing-nu16-b01': "cs.aliyuncs.com",
      'cn-edge-1': "cs.aliyuncs.com",
      'cn-fujian': "cs.aliyuncs.com",
      'cn-haidian-cm12-c01': "cs.aliyuncs.com",
      'cn-hangzhou-bj-b01': "cs.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "cs.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "cs.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "cs.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "cs.aliyuncs.com",
      'cn-hangzhou-test-306': "cs.aliyuncs.com",
      'cn-hongkong-finance-pop': "cs.aliyuncs.com",
      'cn-qingdao-nebula': "cs.aliyuncs.com",
      'cn-shanghai-et15-b01': "cs.aliyuncs.com",
      'cn-shanghai-et2-b01': "cs.aliyuncs.com",
      'cn-shanghai-inner': "cs.aliyuncs.com",
      'cn-shanghai-internal-test-1': "cs.aliyuncs.com",
      'cn-shenzhen-inner': "cs.aliyuncs.com",
      'cn-shenzhen-st4-d01': "cs.aliyuncs.com",
      'cn-shenzhen-su18-b01': "cs.aliyuncs.com",
      'cn-wuhan': "cs.aliyuncs.com",
      'cn-yushanfang': "cs.aliyuncs.com",
      'cn-zhangbei': "cs.aliyuncs.com",
      'cn-zhangbei-na61-b01': "cs.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "cs.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "cs.aliyuncs.com",
      'eu-west-1-oxs': "cs.aliyuncs.com",
      'rus-west-1-pop': "cs.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("cs", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!Util.empty(endpoint)) {
      return endpoint;
    }

    if (!Util.isUnset(endpointMap) && !Util.empty(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return EndpointUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * You can call the AttachInstances operation to add existing Elastic Compute Service (ECS) instances to a cluster.
   * 
   * @param request - AttachInstancesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AttachInstancesResponse
   */
  async attachInstancesWithOptions(ClusterId: string, request: AttachInstancesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<AttachInstancesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.cpuPolicy)) {
      body["cpu_policy"] = request.cpuPolicy;
    }

    if (!Util.isUnset(request.formatDisk)) {
      body["format_disk"] = request.formatDisk;
    }

    if (!Util.isUnset(request.imageId)) {
      body["image_id"] = request.imageId;
    }

    if (!Util.isUnset(request.instances)) {
      body["instances"] = request.instances;
    }

    if (!Util.isUnset(request.isEdgeWorker)) {
      body["is_edge_worker"] = request.isEdgeWorker;
    }

    if (!Util.isUnset(request.keepInstanceName)) {
      body["keep_instance_name"] = request.keepInstanceName;
    }

    if (!Util.isUnset(request.keyPair)) {
      body["key_pair"] = request.keyPair;
    }

    if (!Util.isUnset(request.nodepoolId)) {
      body["nodepool_id"] = request.nodepoolId;
    }

    if (!Util.isUnset(request.password)) {
      body["password"] = request.password;
    }

    if (!Util.isUnset(request.rdsInstances)) {
      body["rds_instances"] = request.rdsInstances;
    }

    if (!Util.isUnset(request.runtime)) {
      body["runtime"] = request.runtime;
    }

    if (!Util.isUnset(request.tags)) {
      body["tags"] = request.tags;
    }

    if (!Util.isUnset(request.userData)) {
      body["user_data"] = request.userData;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AttachInstances",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${OpenApiUtil.getEncodeParam(ClusterId)}/attach`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<AttachInstancesResponse>(await this.callApi(params, req, runtime), new AttachInstancesResponse({}));
  }

  /**
   * You can call the AttachInstances operation to add existing Elastic Compute Service (ECS) instances to a cluster.
   * 
   * @param request - AttachInstancesRequest
   * @returns AttachInstancesResponse
   */
  async attachInstances(ClusterId: string, request: AttachInstancesRequest): Promise<AttachInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.attachInstancesWithOptions(ClusterId, request, headers, runtime);
  }

  /**
   * Adds existing nodes to a specific node pool. You can add existing ECS instances to a specific node pool in a Container Service for Kubernetes (ACK) cluster as worker nodes. You can also add removed worker nodes back to the node pool.
   * 
   * @param request - AttachInstancesToNodePoolRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AttachInstancesToNodePoolResponse
   */
  async attachInstancesToNodePoolWithOptions(ClusterId: string, NodepoolId: string, request: AttachInstancesToNodePoolRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<AttachInstancesToNodePoolResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.formatDisk)) {
      body["format_disk"] = request.formatDisk;
    }

    if (!Util.isUnset(request.instances)) {
      body["instances"] = request.instances;
    }

    if (!Util.isUnset(request.keepInstanceName)) {
      body["keep_instance_name"] = request.keepInstanceName;
    }

    if (!Util.isUnset(request.password)) {
      body["password"] = request.password;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AttachInstancesToNodePool",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${OpenApiUtil.getEncodeParam(ClusterId)}/nodepools/${OpenApiUtil.getEncodeParam(NodepoolId)}/attach`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<AttachInstancesToNodePoolResponse>(await this.callApi(params, req, runtime), new AttachInstancesToNodePoolResponse({}));
  }

  /**
   * Adds existing nodes to a specific node pool. You can add existing ECS instances to a specific node pool in a Container Service for Kubernetes (ACK) cluster as worker nodes. You can also add removed worker nodes back to the node pool.
   * 
   * @param request - AttachInstancesToNodePoolRequest
   * @returns AttachInstancesToNodePoolResponse
   */
  async attachInstancesToNodePool(ClusterId: string, NodepoolId: string, request: AttachInstancesToNodePoolRequest): Promise<AttachInstancesToNodePoolResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.attachInstancesToNodePoolWithOptions(ClusterId, NodepoolId, request, headers, runtime);
  }

  /**
   * You can call the CancelClusterUpgrade operation to cancel the update of a cluster.
   * 
   * @deprecated OpenAPI CancelClusterUpgrade is deprecated
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelClusterUpgradeResponse
   */
  // Deprecated
  async cancelClusterUpgradeWithOptions(ClusterId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CancelClusterUpgradeResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "CancelClusterUpgrade",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/api/v2/clusters/${OpenApiUtil.getEncodeParam(ClusterId)}/upgrade/cancel`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<CancelClusterUpgradeResponse>(await this.callApi(params, req, runtime), new CancelClusterUpgradeResponse({}));
  }

  /**
   * You can call the CancelClusterUpgrade operation to cancel the update of a cluster.
   * 
   * @deprecated OpenAPI CancelClusterUpgrade is deprecated
   * @returns CancelClusterUpgradeResponse
   */
  // Deprecated
  async cancelClusterUpgrade(ClusterId: string): Promise<CancelClusterUpgradeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cancelClusterUpgradeWithOptions(ClusterId, headers, runtime);
  }

  /**
   * You can call the CancelComponentUpgrade operation to cancel the update of a component.
   * 
   * @deprecated OpenAPI CancelComponentUpgrade is deprecated
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelComponentUpgradeResponse
   */
  // Deprecated
  async cancelComponentUpgradeWithOptions(clusterId: string, componentId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CancelComponentUpgradeResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "CancelComponentUpgrade",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${OpenApiUtil.getEncodeParam(clusterId)}/components/${OpenApiUtil.getEncodeParam(componentId)}/cancel`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<CancelComponentUpgradeResponse>(await this.callApi(params, req, runtime), new CancelComponentUpgradeResponse({}));
  }

  /**
   * You can call the CancelComponentUpgrade operation to cancel the update of a component.
   * 
   * @deprecated OpenAPI CancelComponentUpgrade is deprecated
   * @returns CancelComponentUpgradeResponse
   */
  // Deprecated
  async cancelComponentUpgrade(clusterId: string, componentId: string): Promise<CancelComponentUpgradeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cancelComponentUpgradeWithOptions(clusterId, componentId, headers, runtime);
  }

  /**
   * You can call the CancelOperationPlan operation to cancel a pending auto O\\\\\\&M plan.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelOperationPlanResponse
   */
  async cancelOperationPlanWithOptions(planId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CancelOperationPlanResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "CancelOperationPlan",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/operation/plans/${OpenApiUtil.getEncodeParam(planId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CancelOperationPlanResponse>(await this.callApi(params, req, runtime), new CancelOperationPlanResponse({}));
  }

  /**
   * You can call the CancelOperationPlan operation to cancel a pending auto O\\\\\\&M plan.
   * @returns CancelOperationPlanResponse
   */
  async cancelOperationPlan(planId: string): Promise<CancelOperationPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cancelOperationPlanWithOptions(planId, headers, runtime);
  }

  /**
   * Cancels the execution of a cluster task.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelTaskResponse
   */
  async cancelTaskWithOptions(taskId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CancelTaskResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "CancelTask",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/tasks/${OpenApiUtil.getEncodeParam(taskId)}/cancel`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<CancelTaskResponse>(await this.callApi(params, req, runtime), new CancelTaskResponse({}));
  }

  /**
   * Cancels the execution of a cluster task.
   * @returns CancelTaskResponse
   */
  async cancelTask(taskId: string): Promise<CancelTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cancelTaskWithOptions(taskId, headers, runtime);
  }

  /**
   * You can call the CancelWorkflow operation to cancel an ongoing workflow.
   * 
   * @deprecated OpenAPI CancelWorkflow is deprecated
   * 
   * @param request - CancelWorkflowRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelWorkflowResponse
   */
  // Deprecated
  async cancelWorkflowWithOptions(workflowName: string, request: CancelWorkflowRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CancelWorkflowResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.action)) {
      body["action"] = request.action;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CancelWorkflow",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/gs/workflow/${OpenApiUtil.getEncodeParam(workflowName)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<CancelWorkflowResponse>(await this.callApi(params, req, runtime), new CancelWorkflowResponse({}));
  }

  /**
   * You can call the CancelWorkflow operation to cancel an ongoing workflow.
   * 
   * @deprecated OpenAPI CancelWorkflow is deprecated
   * 
   * @param request - CancelWorkflowRequest
   * @returns CancelWorkflowResponse
   */
  // Deprecated
  async cancelWorkflow(workflowName: string, request: CancelWorkflowRequest): Promise<CancelWorkflowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cancelWorkflowWithOptions(workflowName, request, headers, runtime);
  }

  /**
   * Queries the current log configuration of control plane components, including the log retention period and the log collection component. Container Service for Kubernetes (ACK) managed clusters can collect the logs of control plane components and deliver the logs to projects in Simple Log Service. These control plane components include Kube API Server, Kube Scheduler, Kube Controller Manager, and Cloud Controller Manager.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckControlPlaneLogEnableResponse
   */
  async checkControlPlaneLogEnableWithOptions(ClusterId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CheckControlPlaneLogEnableResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "CheckControlPlaneLogEnable",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${OpenApiUtil.getEncodeParam(ClusterId)}/controlplanelog`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CheckControlPlaneLogEnableResponse>(await this.callApi(params, req, runtime), new CheckControlPlaneLogEnableResponse({}));
  }

  /**
   * Queries the current log configuration of control plane components, including the log retention period and the log collection component. Container Service for Kubernetes (ACK) managed clusters can collect the logs of control plane components and deliver the logs to projects in Simple Log Service. These control plane components include Kube API Server, Kube Scheduler, Kube Controller Manager, and Cloud Controller Manager.
   * @returns CheckControlPlaneLogEnableResponse
   */
  async checkControlPlaneLogEnable(ClusterId: string): Promise<CheckControlPlaneLogEnableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.checkControlPlaneLogEnableWithOptions(ClusterId, headers, runtime);
  }

  /**
   * 检查是否授权指定服务角色
   * 
   * @param request - CheckServiceRoleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckServiceRoleResponse
   */
  async checkServiceRoleWithOptions(request: CheckServiceRoleRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CheckServiceRoleResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.roles)) {
      body["roles"] = request.roles;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CheckServiceRole",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/ram/check-service-role`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CheckServiceRoleResponse>(await this.callApi(params, req, runtime), new CheckServiceRoleResponse({}));
  }

  /**
   * 检查是否授权指定服务角色
   * 
   * @param request - CheckServiceRoleRequest
   * @returns CheckServiceRoleResponse
   */
  async checkServiceRole(request: CheckServiceRoleRequest): Promise<CheckServiceRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.checkServiceRoleWithOptions(request, headers, runtime);
  }

  /**
   * You can call the CleanClusterUserPermissions operation to delete kubeconfig files that may pose potential risks from a user and revoke Role-Based Access Control (RBAC) permissions on a cluster.
   * 
   * @remarks
   * > 
   * *   To call this operation, make sure that you have the AliyunCSFullAccess permissions.
   * *   You cannot revoke the permissions of an Alibaba Cloud account.
   * *   You cannot revoke the permissions of the account that you use to call this operation.
   * 
   * @param request - CleanClusterUserPermissionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CleanClusterUserPermissionsResponse
   */
  async cleanClusterUserPermissionsWithOptions(ClusterId: string, Uid: string, request: CleanClusterUserPermissionsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CleanClusterUserPermissionsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.force)) {
      query["Force"] = request.force;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CleanClusterUserPermissions",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/cluster/${OpenApiUtil.getEncodeParam(ClusterId)}/user/${OpenApiUtil.getEncodeParam(Uid)}/permissions`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<CleanClusterUserPermissionsResponse>(await this.callApi(params, req, runtime), new CleanClusterUserPermissionsResponse({}));
  }

  /**
   * You can call the CleanClusterUserPermissions operation to delete kubeconfig files that may pose potential risks from a user and revoke Role-Based Access Control (RBAC) permissions on a cluster.
   * 
   * @remarks
   * > 
   * *   To call this operation, make sure that you have the AliyunCSFullAccess permissions.
   * *   You cannot revoke the permissions of an Alibaba Cloud account.
   * *   You cannot revoke the permissions of the account that you use to call this operation.
   * 
   * @param request - CleanClusterUserPermissionsRequest
   * @returns CleanClusterUserPermissionsResponse
   */
  async cleanClusterUserPermissions(ClusterId: string, Uid: string, request: CleanClusterUserPermissionsRequest): Promise<CleanClusterUserPermissionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cleanClusterUserPermissionsWithOptions(ClusterId, Uid, request, headers, runtime);
  }

  /**
   * You can call the CleanUserPermissions operation to delete the kubeconfig files of the specified users and revoke the relevant Role-Based Access Control (RBAC) permissions. This API operation is suitable for scenarios where employees have resigned or the accounts of employees are locked.
   * 
   * @remarks
   * >- To call this operation, make sure that you have the AliyunCSFullAccess permissions.
   * >- You cannot revoke the permissions of an Alibaba Cloud account.
   * >- You cannot revoke the permissions of the account that you use to call this operation.
   * 
   * @param tmpReq - CleanUserPermissionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CleanUserPermissionsResponse
   */
  async cleanUserPermissionsWithOptions(Uid: string, tmpReq: CleanUserPermissionsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CleanUserPermissionsResponse> {
    Util.validateModel(tmpReq);
    let request = new CleanUserPermissionsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.clusterIds)) {
      request.clusterIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.clusterIds, "ClusterIds", "simple");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clusterIdsShrink)) {
      query["ClusterIds"] = request.clusterIdsShrink;
    }

    if (!Util.isUnset(request.force)) {
      query["Force"] = request.force;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CleanUserPermissions",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/users/${OpenApiUtil.getEncodeParam(Uid)}/permissions`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CleanUserPermissionsResponse>(await this.callApi(params, req, runtime), new CleanUserPermissionsResponse({}));
  }

  /**
   * You can call the CleanUserPermissions operation to delete the kubeconfig files of the specified users and revoke the relevant Role-Based Access Control (RBAC) permissions. This API operation is suitable for scenarios where employees have resigned or the accounts of employees are locked.
   * 
   * @remarks
   * >- To call this operation, make sure that you have the AliyunCSFullAccess permissions.
   * >- You cannot revoke the permissions of an Alibaba Cloud account.
   * >- You cannot revoke the permissions of the account that you use to call this operation.
   * 
   * @param request - CleanUserPermissionsRequest
   * @returns CleanUserPermissionsResponse
   */
  async cleanUserPermissions(Uid: string, request: CleanUserPermissionsRequest): Promise<CleanUserPermissionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cleanUserPermissionsWithOptions(Uid, request, headers, runtime);
  }

  /**
   * Creates a scaling configuration to allow the system to scale resources based on the given scaling rules. When you create a scaling configuration, you can specify the scaling metrics, thresholds, scaling order, and scaling interval.
   * 
   * @param request - CreateAutoscalingConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAutoscalingConfigResponse
   */
  async createAutoscalingConfigWithOptions(ClusterId: string, request: CreateAutoscalingConfigRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateAutoscalingConfigResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.coolDownDuration)) {
      body["cool_down_duration"] = request.coolDownDuration;
    }

    if (!Util.isUnset(request.daemonsetEvictionForNodes)) {
      body["daemonset_eviction_for_nodes"] = request.daemonsetEvictionForNodes;
    }

    if (!Util.isUnset(request.expander)) {
      body["expander"] = request.expander;
    }

    if (!Util.isUnset(request.gpuUtilizationThreshold)) {
      body["gpu_utilization_threshold"] = request.gpuUtilizationThreshold;
    }

    if (!Util.isUnset(request.maxGracefulTerminationSec)) {
      body["max_graceful_termination_sec"] = request.maxGracefulTerminationSec;
    }

    if (!Util.isUnset(request.minReplicaCount)) {
      body["min_replica_count"] = request.minReplicaCount;
    }

    if (!Util.isUnset(request.recycleNodeDeletionEnabled)) {
      body["recycle_node_deletion_enabled"] = request.recycleNodeDeletionEnabled;
    }

    if (!Util.isUnset(request.scaleDownEnabled)) {
      body["scale_down_enabled"] = request.scaleDownEnabled;
    }

    if (!Util.isUnset(request.scaleUpFromZero)) {
      body["scale_up_from_zero"] = request.scaleUpFromZero;
    }

    if (!Util.isUnset(request.scanInterval)) {
      body["scan_interval"] = request.scanInterval;
    }

    if (!Util.isUnset(request.skipNodesWithLocalStorage)) {
      body["skip_nodes_with_local_storage"] = request.skipNodesWithLocalStorage;
    }

    if (!Util.isUnset(request.skipNodesWithSystemPods)) {
      body["skip_nodes_with_system_pods"] = request.skipNodesWithSystemPods;
    }

    if (!Util.isUnset(request.unneededDuration)) {
      body["unneeded_duration"] = request.unneededDuration;
    }

    if (!Util.isUnset(request.utilizationThreshold)) {
      body["utilization_threshold"] = request.utilizationThreshold;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateAutoscalingConfig",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/cluster/${OpenApiUtil.getEncodeParam(ClusterId)}/autoscale/config/`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<CreateAutoscalingConfigResponse>(await this.callApi(params, req, runtime), new CreateAutoscalingConfigResponse({}));
  }

  /**
   * Creates a scaling configuration to allow the system to scale resources based on the given scaling rules. When you create a scaling configuration, you can specify the scaling metrics, thresholds, scaling order, and scaling interval.
   * 
   * @param request - CreateAutoscalingConfigRequest
   * @returns CreateAutoscalingConfigResponse
   */
  async createAutoscalingConfig(ClusterId: string, request: CreateAutoscalingConfigRequest): Promise<CreateAutoscalingConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createAutoscalingConfigWithOptions(ClusterId, request, headers, runtime);
  }

  /**
   * You can call the CreateCluster operation to create a Container Service for Kubernetes (ACK) cluster. ACK clusters include ACK managed clusters, ACK dedicated clusters, ACK Serverless clusters, ACK Edge clusters, ACK clusters that support sandboxed containers, and registered clusters. For more information about how to create different types of ACK clusters, see the following usage notes.
   * 
   * @remarks
   * This topic describes all parameters for creating an ACK cluster. You can create the following types of ACK clusters.
   * *   [Create an ACK managed cluster](https://help.aliyun.com/document_detail/90776.html)
   * *   [Create an ACK dedicated cluster](https://help.aliyun.com/document_detail/197620.html)
   * *   [Create an ACK Serverless cluster](https://help.aliyun.com/document_detail/144246.html)
   * *   [Create an ACK Edge cluster](https://help.aliyun.com/document_detail/128204.html)
   * *   [Create an ACK Basic cluster that supports sandboxed containers](https://help.aliyun.com/document_detail/196321.html)
   * *   [Create an ACK Pro cluster that supports sandboxed containers](https://help.aliyun.com/document_detail/140623.html)
   * 
   * @param request - CreateClusterRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateClusterResponse
   */
  async createClusterWithOptions(request: CreateClusterRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateClusterResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessControlList)) {
      body["access_control_list"] = request.accessControlList;
    }

    if (!Util.isUnset(request.addons)) {
      body["addons"] = request.addons;
    }

    if (!Util.isUnset(request.apiAudiences)) {
      body["api_audiences"] = request.apiAudiences;
    }

    if (!Util.isUnset(request.chargeType)) {
      body["charge_type"] = request.chargeType;
    }

    if (!Util.isUnset(request.cisEnabled)) {
      body["cis_enabled"] = request.cisEnabled;
    }

    if (!Util.isUnset(request.cloudMonitorFlags)) {
      body["cloud_monitor_flags"] = request.cloudMonitorFlags;
    }

    if (!Util.isUnset(request.clusterDomain)) {
      body["cluster_domain"] = request.clusterDomain;
    }

    if (!Util.isUnset(request.clusterSpec)) {
      body["cluster_spec"] = request.clusterSpec;
    }

    if (!Util.isUnset(request.clusterType)) {
      body["cluster_type"] = request.clusterType;
    }

    if (!Util.isUnset(request.containerCidr)) {
      body["container_cidr"] = request.containerCidr;
    }

    if (!Util.isUnset(request.controlplaneLogComponents)) {
      body["controlplane_log_components"] = request.controlplaneLogComponents;
    }

    if (!Util.isUnset(request.controlplaneLogProject)) {
      body["controlplane_log_project"] = request.controlplaneLogProject;
    }

    if (!Util.isUnset(request.controlplaneLogTtl)) {
      body["controlplane_log_ttl"] = request.controlplaneLogTtl;
    }

    if (!Util.isUnset(request.cpuPolicy)) {
      body["cpu_policy"] = request.cpuPolicy;
    }

    if (!Util.isUnset(request.customSan)) {
      body["custom_san"] = request.customSan;
    }

    if (!Util.isUnset(request.deletionProtection)) {
      body["deletion_protection"] = request.deletionProtection;
    }

    if (!Util.isUnset(request.disableRollback)) {
      body["disable_rollback"] = request.disableRollback;
    }

    if (!Util.isUnset(request.enableRrsa)) {
      body["enable_rrsa"] = request.enableRrsa;
    }

    if (!Util.isUnset(request.encryptionProviderKey)) {
      body["encryption_provider_key"] = request.encryptionProviderKey;
    }

    if (!Util.isUnset(request.endpointPublicAccess)) {
      body["endpoint_public_access"] = request.endpointPublicAccess;
    }

    if (!Util.isUnset(request.formatDisk)) {
      body["format_disk"] = request.formatDisk;
    }

    if (!Util.isUnset(request.imageId)) {
      body["image_id"] = request.imageId;
    }

    if (!Util.isUnset(request.imageType)) {
      body["image_type"] = request.imageType;
    }

    if (!Util.isUnset(request.instances)) {
      body["instances"] = request.instances;
    }

    if (!Util.isUnset(request.ipStack)) {
      body["ip_stack"] = request.ipStack;
    }

    if (!Util.isUnset(request.isEnterpriseSecurityGroup)) {
      body["is_enterprise_security_group"] = request.isEnterpriseSecurityGroup;
    }

    if (!Util.isUnset(request.keepInstanceName)) {
      body["keep_instance_name"] = request.keepInstanceName;
    }

    if (!Util.isUnset(request.keyPair)) {
      body["key_pair"] = request.keyPair;
    }

    if (!Util.isUnset(request.kubernetesVersion)) {
      body["kubernetes_version"] = request.kubernetesVersion;
    }

    if (!Util.isUnset(request.loadBalancerSpec)) {
      body["load_balancer_spec"] = request.loadBalancerSpec;
    }

    if (!Util.isUnset(request.loggingType)) {
      body["logging_type"] = request.loggingType;
    }

    if (!Util.isUnset(request.loginPassword)) {
      body["login_password"] = request.loginPassword;
    }

    if (!Util.isUnset(request.masterAutoRenew)) {
      body["master_auto_renew"] = request.masterAutoRenew;
    }

    if (!Util.isUnset(request.masterAutoRenewPeriod)) {
      body["master_auto_renew_period"] = request.masterAutoRenewPeriod;
    }

    if (!Util.isUnset(request.masterCount)) {
      body["master_count"] = request.masterCount;
    }

    if (!Util.isUnset(request.masterInstanceChargeType)) {
      body["master_instance_charge_type"] = request.masterInstanceChargeType;
    }

    if (!Util.isUnset(request.masterInstanceTypes)) {
      body["master_instance_types"] = request.masterInstanceTypes;
    }

    if (!Util.isUnset(request.masterPeriod)) {
      body["master_period"] = request.masterPeriod;
    }

    if (!Util.isUnset(request.masterPeriodUnit)) {
      body["master_period_unit"] = request.masterPeriodUnit;
    }

    if (!Util.isUnset(request.masterSystemDiskCategory)) {
      body["master_system_disk_category"] = request.masterSystemDiskCategory;
    }

    if (!Util.isUnset(request.masterSystemDiskPerformanceLevel)) {
      body["master_system_disk_performance_level"] = request.masterSystemDiskPerformanceLevel;
    }

    if (!Util.isUnset(request.masterSystemDiskSize)) {
      body["master_system_disk_size"] = request.masterSystemDiskSize;
    }

    if (!Util.isUnset(request.masterSystemDiskSnapshotPolicyId)) {
      body["master_system_disk_snapshot_policy_id"] = request.masterSystemDiskSnapshotPolicyId;
    }

    if (!Util.isUnset(request.masterVswitchIds)) {
      body["master_vswitch_ids"] = request.masterVswitchIds;
    }

    if (!Util.isUnset(request.name)) {
      body["name"] = request.name;
    }

    if (!Util.isUnset(request.natGateway)) {
      body["nat_gateway"] = request.natGateway;
    }

    if (!Util.isUnset(request.nodeCidrMask)) {
      body["node_cidr_mask"] = request.nodeCidrMask;
    }

    if (!Util.isUnset(request.nodeNameMode)) {
      body["node_name_mode"] = request.nodeNameMode;
    }

    if (!Util.isUnset(request.nodePortRange)) {
      body["node_port_range"] = request.nodePortRange;
    }

    if (!Util.isUnset(request.nodepools)) {
      body["nodepools"] = request.nodepools;
    }

    if (!Util.isUnset(request.numOfNodes)) {
      body["num_of_nodes"] = request.numOfNodes;
    }

    if (!Util.isUnset(request.osType)) {
      body["os_type"] = request.osType;
    }

    if (!Util.isUnset(request.period)) {
      body["period"] = request.period;
    }

    if (!Util.isUnset(request.periodUnit)) {
      body["period_unit"] = request.periodUnit;
    }

    if (!Util.isUnset(request.platform)) {
      body["platform"] = request.platform;
    }

    if (!Util.isUnset(request.podVswitchIds)) {
      body["pod_vswitch_ids"] = request.podVswitchIds;
    }

    if (!Util.isUnset(request.profile)) {
      body["profile"] = request.profile;
    }

    if (!Util.isUnset(request.proxyMode)) {
      body["proxy_mode"] = request.proxyMode;
    }

    if (!Util.isUnset(request.rdsInstances)) {
      body["rds_instances"] = request.rdsInstances;
    }

    if (!Util.isUnset(request.regionId)) {
      body["region_id"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      body["resource_group_id"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.runtime)) {
      body["runtime"] = request.runtime;
    }

    if (!Util.isUnset(request.securityGroupId)) {
      body["security_group_id"] = request.securityGroupId;
    }

    if (!Util.isUnset(request.securityHardeningOs)) {
      body["security_hardening_os"] = request.securityHardeningOs;
    }

    if (!Util.isUnset(request.serviceAccountIssuer)) {
      body["service_account_issuer"] = request.serviceAccountIssuer;
    }

    if (!Util.isUnset(request.serviceCidr)) {
      body["service_cidr"] = request.serviceCidr;
    }

    if (!Util.isUnset(request.serviceDiscoveryTypes)) {
      body["service_discovery_types"] = request.serviceDiscoveryTypes;
    }

    if (!Util.isUnset(request.snatEntry)) {
      body["snat_entry"] = request.snatEntry;
    }

    if (!Util.isUnset(request.socEnabled)) {
      body["soc_enabled"] = request.socEnabled;
    }

    if (!Util.isUnset(request.sshFlags)) {
      body["ssh_flags"] = request.sshFlags;
    }

    if (!Util.isUnset(request.tags)) {
      body["tags"] = request.tags;
    }

    if (!Util.isUnset(request.taints)) {
      body["taints"] = request.taints;
    }

    if (!Util.isUnset(request.timeoutMins)) {
      body["timeout_mins"] = request.timeoutMins;
    }

    if (!Util.isUnset(request.timezone)) {
      body["timezone"] = request.timezone;
    }

    if (!Util.isUnset(request.userCa)) {
      body["user_ca"] = request.userCa;
    }

    if (!Util.isUnset(request.userData)) {
      body["user_data"] = request.userData;
    }

    if (!Util.isUnset(request.vpcid)) {
      body["vpcid"] = request.vpcid;
    }

    if (!Util.isUnset(request.vswitchIds)) {
      body["vswitch_ids"] = request.vswitchIds;
    }

    if (!Util.isUnset(request.workerAutoRenew)) {
      body["worker_auto_renew"] = request.workerAutoRenew;
    }

    if (!Util.isUnset(request.workerAutoRenewPeriod)) {
      body["worker_auto_renew_period"] = request.workerAutoRenewPeriod;
    }

    if (!Util.isUnset(request.workerDataDisks)) {
      body["worker_data_disks"] = request.workerDataDisks;
    }

    if (!Util.isUnset(request.workerInstanceChargeType)) {
      body["worker_instance_charge_type"] = request.workerInstanceChargeType;
    }

    if (!Util.isUnset(request.workerInstanceTypes)) {
      body["worker_instance_types"] = request.workerInstanceTypes;
    }

    if (!Util.isUnset(request.workerPeriod)) {
      body["worker_period"] = request.workerPeriod;
    }

    if (!Util.isUnset(request.workerPeriodUnit)) {
      body["worker_period_unit"] = request.workerPeriodUnit;
    }

    if (!Util.isUnset(request.workerSystemDiskCategory)) {
      body["worker_system_disk_category"] = request.workerSystemDiskCategory;
    }

    if (!Util.isUnset(request.workerSystemDiskPerformanceLevel)) {
      body["worker_system_disk_performance_level"] = request.workerSystemDiskPerformanceLevel;
    }

    if (!Util.isUnset(request.workerSystemDiskSize)) {
      body["worker_system_disk_size"] = request.workerSystemDiskSize;
    }

    if (!Util.isUnset(request.workerSystemDiskSnapshotPolicyId)) {
      body["worker_system_disk_snapshot_policy_id"] = request.workerSystemDiskSnapshotPolicyId;
    }

    if (!Util.isUnset(request.workerVswitchIds)) {
      body["worker_vswitch_ids"] = request.workerVswitchIds;
    }

    if (!Util.isUnset(request.zoneId)) {
      body["zone_id"] = request.zoneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateCluster",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateClusterResponse>(await this.callApi(params, req, runtime), new CreateClusterResponse({}));
  }

  /**
   * You can call the CreateCluster operation to create a Container Service for Kubernetes (ACK) cluster. ACK clusters include ACK managed clusters, ACK dedicated clusters, ACK Serverless clusters, ACK Edge clusters, ACK clusters that support sandboxed containers, and registered clusters. For more information about how to create different types of ACK clusters, see the following usage notes.
   * 
   * @remarks
   * This topic describes all parameters for creating an ACK cluster. You can create the following types of ACK clusters.
   * *   [Create an ACK managed cluster](https://help.aliyun.com/document_detail/90776.html)
   * *   [Create an ACK dedicated cluster](https://help.aliyun.com/document_detail/197620.html)
   * *   [Create an ACK Serverless cluster](https://help.aliyun.com/document_detail/144246.html)
   * *   [Create an ACK Edge cluster](https://help.aliyun.com/document_detail/128204.html)
   * *   [Create an ACK Basic cluster that supports sandboxed containers](https://help.aliyun.com/document_detail/196321.html)
   * *   [Create an ACK Pro cluster that supports sandboxed containers](https://help.aliyun.com/document_detail/140623.html)
   * 
   * @param request - CreateClusterRequest
   * @returns CreateClusterResponse
   */
  async createCluster(request: CreateClusterRequest): Promise<CreateClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createClusterWithOptions(request, headers, runtime);
  }

  /**
   * 发起集群诊断
   * 
   * @param request - CreateClusterDiagnosisRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateClusterDiagnosisResponse
   */
  async createClusterDiagnosisWithOptions(clusterId: string, request: CreateClusterDiagnosisRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateClusterDiagnosisResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.target)) {
      body["target"] = request.target;
    }

    if (!Util.isUnset(request.type)) {
      body["type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateClusterDiagnosis",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${OpenApiUtil.getEncodeParam(clusterId)}/diagnosis`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateClusterDiagnosisResponse>(await this.callApi(params, req, runtime), new CreateClusterDiagnosisResponse({}));
  }

  /**
   * 发起集群诊断
   * 
   * @param request - CreateClusterDiagnosisRequest
   * @returns CreateClusterDiagnosisResponse
   */
  async createClusterDiagnosis(clusterId: string, request: CreateClusterDiagnosisRequest): Promise<CreateClusterDiagnosisResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createClusterDiagnosisWithOptions(clusterId, request, headers, runtime);
  }

  /**
   * Creates a node pool for a Container Service for Kubernetes (ACK) cluster. You can use node pools to facilitate node management. For example, you can schedule, configure, or maintain nodes by node pool, and enable auto scaling for a node pool. We recommend that you use a managed node pool, which can help automate specific O\\&M tasks for nodes, such as Common Vulnerabilities and Exposures (CVE) patching and node repair. This reduces your O\\&M workload.
   * 
   * @param request - CreateClusterNodePoolRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateClusterNodePoolResponse
   */
  async createClusterNodePoolWithOptions(ClusterId: string, request: CreateClusterNodePoolRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateClusterNodePoolResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.autoScaling)) {
      body["auto_scaling"] = request.autoScaling;
    }

    if (!Util.isUnset(request.count)) {
      body["count"] = request.count;
    }

    if (!Util.isUnset(request.interconnectConfig)) {
      body["interconnect_config"] = request.interconnectConfig;
    }

    if (!Util.isUnset(request.interconnectMode)) {
      body["interconnect_mode"] = request.interconnectMode;
    }

    if (!Util.isUnset(request.kubernetesConfig)) {
      body["kubernetes_config"] = request.kubernetesConfig;
    }

    if (!Util.isUnset(request.management)) {
      body["management"] = request.management;
    }

    if (!Util.isUnset(request.maxNodes)) {
      body["max_nodes"] = request.maxNodes;
    }

    if (!Util.isUnset(request.nodeConfig)) {
      body["node_config"] = request.nodeConfig;
    }

    if (!Util.isUnset(request.nodepoolInfo)) {
      body["nodepool_info"] = request.nodepoolInfo;
    }

    if (!Util.isUnset(request.scalingGroup)) {
      body["scaling_group"] = request.scalingGroup;
    }

    if (!Util.isUnset(request.teeConfig)) {
      body["tee_config"] = request.teeConfig;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateClusterNodePool",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${OpenApiUtil.getEncodeParam(ClusterId)}/nodepools`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateClusterNodePoolResponse>(await this.callApi(params, req, runtime), new CreateClusterNodePoolResponse({}));
  }

  /**
   * Creates a node pool for a Container Service for Kubernetes (ACK) cluster. You can use node pools to facilitate node management. For example, you can schedule, configure, or maintain nodes by node pool, and enable auto scaling for a node pool. We recommend that you use a managed node pool, which can help automate specific O\\&M tasks for nodes, such as Common Vulnerabilities and Exposures (CVE) patching and node repair. This reduces your O\\&M workload.
   * 
   * @param request - CreateClusterNodePoolRequest
   * @returns CreateClusterNodePoolResponse
   */
  async createClusterNodePool(ClusterId: string, request: CreateClusterNodePoolRequest): Promise<CreateClusterNodePoolResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createClusterNodePoolWithOptions(ClusterId, request, headers, runtime);
  }

  /**
   * You can call the CreateEdgeMachine operation to activate a cloud-native box.
   * 
   * @param request - CreateEdgeMachineRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateEdgeMachineResponse
   */
  async createEdgeMachineWithOptions(request: CreateEdgeMachineRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateEdgeMachineResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.hostname)) {
      body["hostname"] = request.hostname;
    }

    if (!Util.isUnset(request.model)) {
      body["model"] = request.model;
    }

    if (!Util.isUnset(request.sn)) {
      body["sn"] = request.sn;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateEdgeMachine",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/edge_machines`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateEdgeMachineResponse>(await this.callApi(params, req, runtime), new CreateEdgeMachineResponse({}));
  }

  /**
   * You can call the CreateEdgeMachine operation to activate a cloud-native box.
   * 
   * @param request - CreateEdgeMachineRequest
   * @returns CreateEdgeMachineResponse
   */
  async createEdgeMachine(request: CreateEdgeMachineRequest): Promise<CreateEdgeMachineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createEdgeMachineWithOptions(request, headers, runtime);
  }

  /**
   * You can call the CreateKubernetesTrigger operation to create a trigger for an application.
   * 
   * @param request - CreateKubernetesTriggerRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateKubernetesTriggerResponse
   */
  async createKubernetesTriggerWithOptions(request: CreateKubernetesTriggerRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateKubernetesTriggerResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.action)) {
      body["action"] = request.action;
    }

    if (!Util.isUnset(request.clusterId)) {
      body["cluster_id"] = request.clusterId;
    }

    if (!Util.isUnset(request.projectId)) {
      body["project_id"] = request.projectId;
    }

    if (!Util.isUnset(request.type)) {
      body["type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateKubernetesTrigger",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/triggers`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateKubernetesTriggerResponse>(await this.callApi(params, req, runtime), new CreateKubernetesTriggerResponse({}));
  }

  /**
   * You can call the CreateKubernetesTrigger operation to create a trigger for an application.
   * 
   * @param request - CreateKubernetesTriggerRequest
   * @returns CreateKubernetesTriggerResponse
   */
  async createKubernetesTrigger(request: CreateKubernetesTriggerRequest): Promise<CreateKubernetesTriggerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createKubernetesTriggerWithOptions(request, headers, runtime);
  }

  /**
   * Creates an orchestration template. An orchestration template defines and describes a group of Kubernetes resources. It declaratively describes the configuration of an application or how an application runs. You can use orchestration templates to manage resources in Kubernetes clusters and automate resource deployment, such as pods, Services, Deployments, ConfigMaps, and persistent volumes (PVs).
   * 
   * @param request - CreateTemplateRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTemplateResponse
   */
  async createTemplateWithOptions(request: CreateTemplateRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateTemplateResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.name)) {
      body["name"] = request.name;
    }

    if (!Util.isUnset(request.tags)) {
      body["tags"] = request.tags;
    }

    if (!Util.isUnset(request.template)) {
      body["template"] = request.template;
    }

    if (!Util.isUnset(request.templateType)) {
      body["template_type"] = request.templateType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateTemplate",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/templates`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateTemplateResponse>(await this.callApi(params, req, runtime), new CreateTemplateResponse({}));
  }

  /**
   * Creates an orchestration template. An orchestration template defines and describes a group of Kubernetes resources. It declaratively describes the configuration of an application or how an application runs. You can use orchestration templates to manage resources in Kubernetes clusters and automate resource deployment, such as pods, Services, Deployments, ConfigMaps, and persistent volumes (PVs).
   * 
   * @param request - CreateTemplateRequest
   * @returns CreateTemplateResponse
   */
  async createTemplate(request: CreateTemplateRequest): Promise<CreateTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createTemplateWithOptions(request, headers, runtime);
  }

  /**
   * You can call the CreateTrigger operation to create a trigger for an application.
   * 
   * @param request - CreateTriggerRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTriggerResponse
   */
  async createTriggerWithOptions(clusterId: string, request: CreateTriggerRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateTriggerResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.action)) {
      body["action"] = request.action;
    }

    if (!Util.isUnset(request.clusterId)) {
      body["cluster_id"] = request.clusterId;
    }

    if (!Util.isUnset(request.projectId)) {
      body["project_id"] = request.projectId;
    }

    if (!Util.isUnset(request.type)) {
      body["type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateTrigger",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${OpenApiUtil.getEncodeParam(clusterId)}/triggers`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateTriggerResponse>(await this.callApi(params, req, runtime), new CreateTriggerResponse({}));
  }

  /**
   * You can call the CreateTrigger operation to create a trigger for an application.
   * 
   * @param request - CreateTriggerRequest
   * @returns CreateTriggerResponse
   */
  async createTrigger(clusterId: string, request: CreateTriggerRequest): Promise<CreateTriggerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createTriggerWithOptions(clusterId, request, headers, runtime);
  }

  /**
   * 删除ACK报警联系人
   * 
   * @param tmpReq - DeleteAlertContactRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAlertContactResponse
   */
  async deleteAlertContactWithOptions(tmpReq: DeleteAlertContactRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteAlertContactResponse> {
    Util.validateModel(tmpReq);
    let request = new DeleteAlertContactShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.contactIds)) {
      request.contactIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.contactIds, "contact_ids", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.contactIdsShrink)) {
      query["contact_ids"] = request.contactIdsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteAlertContact",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/alert/contacts`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "array",
    });
    return $tea.cast<DeleteAlertContactResponse>(await this.callApi(params, req, runtime), new DeleteAlertContactResponse({}));
  }

  /**
   * 删除ACK报警联系人
   * 
   * @param request - DeleteAlertContactRequest
   * @returns DeleteAlertContactResponse
   */
  async deleteAlertContact(request: DeleteAlertContactRequest): Promise<DeleteAlertContactResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteAlertContactWithOptions(request, headers, runtime);
  }

  /**
   * 删除ACK报警联系人分组
   * 
   * @param tmpReq - DeleteAlertContactGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAlertContactGroupResponse
   */
  async deleteAlertContactGroupWithOptions(tmpReq: DeleteAlertContactGroupRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteAlertContactGroupResponse> {
    Util.validateModel(tmpReq);
    let request = new DeleteAlertContactGroupShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.contactGroupIds)) {
      request.contactGroupIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.contactGroupIds, "contact_group_ids", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.contactGroupIdsShrink)) {
      query["contact_group_ids"] = request.contactGroupIdsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteAlertContactGroup",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/alert/contact_groups`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "array",
    });
    return $tea.cast<DeleteAlertContactGroupResponse>(await this.callApi(params, req, runtime), new DeleteAlertContactGroupResponse({}));
  }

  /**
   * 删除ACK报警联系人分组
   * 
   * @param request - DeleteAlertContactGroupRequest
   * @returns DeleteAlertContactGroupResponse
   */
  async deleteAlertContactGroup(request: DeleteAlertContactGroupRequest): Promise<DeleteAlertContactGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteAlertContactGroupWithOptions(request, headers, runtime);
  }

  /**
   * You can call the DeleteCluster operation to delete a cluster and specify whether to delete or retain the relevant cluster resources. Before you delete a cluster, you must manually delete workloads in the cluster, such as Deployments, StatefulSets, Jobs, and CronJobs. Otherwise, you may fail to delete the cluster.
   * 
   * @param tmpReq - DeleteClusterRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteClusterResponse
   */
  async deleteClusterWithOptions(ClusterId: string, tmpReq: DeleteClusterRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteClusterResponse> {
    Util.validateModel(tmpReq);
    let request = new DeleteClusterShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.deleteOptions)) {
      request.deleteOptionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deleteOptions, "delete_options", "json");
    }

    if (!Util.isUnset(tmpReq.retainResources)) {
      request.retainResourcesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.retainResources, "retain_resources", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.deleteOptionsShrink)) {
      query["delete_options"] = request.deleteOptionsShrink;
    }

    if (!Util.isUnset(request.keepSlb)) {
      query["keep_slb"] = request.keepSlb;
    }

    if (!Util.isUnset(request.retainAllResources)) {
      query["retain_all_resources"] = request.retainAllResources;
    }

    if (!Util.isUnset(request.retainResourcesShrink)) {
      query["retain_resources"] = request.retainResourcesShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteCluster",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${OpenApiUtil.getEncodeParam(ClusterId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteClusterResponse>(await this.callApi(params, req, runtime), new DeleteClusterResponse({}));
  }

  /**
   * You can call the DeleteCluster operation to delete a cluster and specify whether to delete or retain the relevant cluster resources. Before you delete a cluster, you must manually delete workloads in the cluster, such as Deployments, StatefulSets, Jobs, and CronJobs. Otherwise, you may fail to delete the cluster.
   * 
   * @param request - DeleteClusterRequest
   * @returns DeleteClusterResponse
   */
  async deleteCluster(ClusterId: string, request: DeleteClusterRequest): Promise<DeleteClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteClusterWithOptions(ClusterId, request, headers, runtime);
  }

  /**
   * You can call the DeleteClusterNodepool operation to delete a node pool by node pool ID.
   * 
   * @param request - DeleteClusterNodepoolRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteClusterNodepoolResponse
   */
  async deleteClusterNodepoolWithOptions(ClusterId: string, NodepoolId: string, request: DeleteClusterNodepoolRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteClusterNodepoolResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.force)) {
      query["force"] = request.force;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteClusterNodepool",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${OpenApiUtil.getEncodeParam(ClusterId)}/nodepools/${OpenApiUtil.getEncodeParam(NodepoolId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteClusterNodepoolResponse>(await this.callApi(params, req, runtime), new DeleteClusterNodepoolResponse({}));
  }

  /**
   * You can call the DeleteClusterNodepool operation to delete a node pool by node pool ID.
   * 
   * @param request - DeleteClusterNodepoolRequest
   * @returns DeleteClusterNodepoolResponse
   */
  async deleteClusterNodepool(ClusterId: string, NodepoolId: string, request: DeleteClusterNodepoolRequest): Promise<DeleteClusterNodepoolResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteClusterNodepoolWithOptions(ClusterId, NodepoolId, request, headers, runtime);
  }

  /**
   * Removes nodes from a Container Service for Kubernetes (ACK) cluster. When you remove nodes, you can specify whether to release the Elastic Compute Service (ECS) instances and drain the nodes. When you remove nodes, pods on the nodes are migrated. This may adversely affect your businesses. We recommend that you back up data and perform this operation during off-peak hours.
   * 
   * @remarks
   * > 
   * *   When you remove a node, the pods that run on the node are migrated to other nodes. This may cause service interruptions. We recommend that you remove nodes during off-peak hours. - The operation may have unexpected risks. Back up the data before you perform this operation. - When the system removes a node, it sets the status of the node to Unschedulable. - The system removes only worker nodes. It does not remove master nodes.
   * 
   * @param request - DeleteClusterNodesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteClusterNodesResponse
   */
  async deleteClusterNodesWithOptions(ClusterId: string, request: DeleteClusterNodesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteClusterNodesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.drainNode)) {
      body["drain_node"] = request.drainNode;
    }

    if (!Util.isUnset(request.nodes)) {
      body["nodes"] = request.nodes;
    }

    if (!Util.isUnset(request.releaseNode)) {
      body["release_node"] = request.releaseNode;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteClusterNodes",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${OpenApiUtil.getEncodeParam(ClusterId)}/nodes`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteClusterNodesResponse>(await this.callApi(params, req, runtime), new DeleteClusterNodesResponse({}));
  }

  /**
   * Removes nodes from a Container Service for Kubernetes (ACK) cluster. When you remove nodes, you can specify whether to release the Elastic Compute Service (ECS) instances and drain the nodes. When you remove nodes, pods on the nodes are migrated. This may adversely affect your businesses. We recommend that you back up data and perform this operation during off-peak hours.
   * 
   * @remarks
   * > 
   * *   When you remove a node, the pods that run on the node are migrated to other nodes. This may cause service interruptions. We recommend that you remove nodes during off-peak hours. - The operation may have unexpected risks. Back up the data before you perform this operation. - When the system removes a node, it sets the status of the node to Unschedulable. - The system removes only worker nodes. It does not remove master nodes.
   * 
   * @param request - DeleteClusterNodesRequest
   * @returns DeleteClusterNodesResponse
   */
  async deleteClusterNodes(ClusterId: string, request: DeleteClusterNodesRequest): Promise<DeleteClusterNodesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteClusterNodesWithOptions(ClusterId, request, headers, runtime);
  }

  /**
   * You can call the DeleteEdgeMachine operation to delete a cloud-native box.
   * 
   * @param request - DeleteEdgeMachineRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteEdgeMachineResponse
   */
  async deleteEdgeMachineWithOptions(edgeMachineid: string, request: DeleteEdgeMachineRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteEdgeMachineResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.force)) {
      query["force"] = request.force;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteEdgeMachine",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/edge_machines/%5Bedge_machineid%5D`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<DeleteEdgeMachineResponse>(await this.callApi(params, req, runtime), new DeleteEdgeMachineResponse({}));
  }

  /**
   * You can call the DeleteEdgeMachine operation to delete a cloud-native box.
   * 
   * @param request - DeleteEdgeMachineRequest
   * @returns DeleteEdgeMachineResponse
   */
  async deleteEdgeMachine(edgeMachineid: string, request: DeleteEdgeMachineRequest): Promise<DeleteEdgeMachineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteEdgeMachineWithOptions(edgeMachineid, request, headers, runtime);
  }

  /**
   * You can call the DeleteKubernetesTrigger operation to delete an application trigger by trigger ID
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteKubernetesTriggerResponse
   */
  async deleteKubernetesTriggerWithOptions(Id: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteKubernetesTriggerResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteKubernetesTrigger",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/triggers/revoke/${OpenApiUtil.getEncodeParam(Id)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<DeleteKubernetesTriggerResponse>(await this.callApi(params, req, runtime), new DeleteKubernetesTriggerResponse({}));
  }

  /**
   * You can call the DeleteKubernetesTrigger operation to delete an application trigger by trigger ID
   * @returns DeleteKubernetesTriggerResponse
   */
  async deleteKubernetesTrigger(Id: string): Promise<DeleteKubernetesTriggerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteKubernetesTriggerWithOptions(Id, headers, runtime);
  }

  /**
   * Deletes policy instances in a Container Service for Kubernetes (ACK) cluster.
   * 
   * @param request - DeletePolicyInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePolicyInstanceResponse
   */
  async deletePolicyInstanceWithOptions(clusterId: string, policyName: string, request: DeletePolicyInstanceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeletePolicyInstanceResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceName)) {
      query["instance_name"] = request.instanceName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeletePolicyInstance",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${OpenApiUtil.getEncodeParam(clusterId)}/policies/${OpenApiUtil.getEncodeParam(policyName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeletePolicyInstanceResponse>(await this.callApi(params, req, runtime), new DeletePolicyInstanceResponse({}));
  }

  /**
   * Deletes policy instances in a Container Service for Kubernetes (ACK) cluster.
   * 
   * @param request - DeletePolicyInstanceRequest
   * @returns DeletePolicyInstanceResponse
   */
  async deletePolicyInstance(clusterId: string, policyName: string, request: DeletePolicyInstanceRequest): Promise<DeletePolicyInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deletePolicyInstanceWithOptions(clusterId, policyName, request, headers, runtime);
  }

  /**
   * Deletes the orchestration templates that you no longer need.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTemplateResponse
   */
  async deleteTemplateWithOptions(TemplateId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteTemplateResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteTemplate",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/templates/${OpenApiUtil.getEncodeParam(TemplateId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<DeleteTemplateResponse>(await this.callApi(params, req, runtime), new DeleteTemplateResponse({}));
  }

  /**
   * Deletes the orchestration templates that you no longer need.
   * @returns DeleteTemplateResponse
   */
  async deleteTemplate(TemplateId: string): Promise<DeleteTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteTemplateWithOptions(TemplateId, headers, runtime);
  }

  /**
   * You can call the DeleteTrigger operation to delete an application trigger.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTriggerResponse
   */
  async deleteTriggerWithOptions(clusterId: string, Id: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteTriggerResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteTrigger",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${OpenApiUtil.getEncodeParam(clusterId)}/triggers/${OpenApiUtil.getEncodeParam(Id)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<DeleteTriggerResponse>(await this.callApi(params, req, runtime), new DeleteTriggerResponse({}));
  }

  /**
   * You can call the DeleteTrigger operation to delete an application trigger.
   * @returns DeleteTriggerResponse
   */
  async deleteTrigger(clusterId: string, Id: string): Promise<DeleteTriggerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteTriggerWithOptions(clusterId, Id, headers, runtime);
  }

  /**
   * Deploys a policy in the specified namespaces of a specific Container Service for Kubernetes (ACK) cluster. You can create and deploy a security policy by specifying the policy type, action of the policy such as alerting or denying, and namespaces to which the policy applies.
   * 
   * @param request - DeployPolicyInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeployPolicyInstanceResponse
   */
  async deployPolicyInstanceWithOptions(clusterId: string, policyName: string, request: DeployPolicyInstanceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeployPolicyInstanceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.action)) {
      body["action"] = request.action;
    }

    if (!Util.isUnset(request.namespaces)) {
      body["namespaces"] = request.namespaces;
    }

    if (!Util.isUnset(request.parameters)) {
      body["parameters"] = request.parameters;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeployPolicyInstance",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${OpenApiUtil.getEncodeParam(clusterId)}/policies/${OpenApiUtil.getEncodeParam(policyName)}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeployPolicyInstanceResponse>(await this.callApi(params, req, runtime), new DeployPolicyInstanceResponse({}));
  }

  /**
   * Deploys a policy in the specified namespaces of a specific Container Service for Kubernetes (ACK) cluster. You can create and deploy a security policy by specifying the policy type, action of the policy such as alerting or denying, and namespaces to which the policy applies.
   * 
   * @param request - DeployPolicyInstanceRequest
   * @returns DeployPolicyInstanceResponse
   */
  async deployPolicyInstance(clusterId: string, policyName: string, request: DeployPolicyInstanceRequest): Promise<DeployPolicyInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deployPolicyInstanceWithOptions(clusterId, policyName, request, headers, runtime);
  }

  /**
   * You can call the DescirbeWorkflow operation to query detailed information about a workflow.
   * 
   * @deprecated OpenAPI DescirbeWorkflow is deprecated
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescirbeWorkflowResponse
   */
  // Deprecated
  async descirbeWorkflowWithOptions(workflowName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescirbeWorkflowResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DescirbeWorkflow",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/gs/workflow/${OpenApiUtil.getEncodeParam(workflowName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescirbeWorkflowResponse>(await this.callApi(params, req, runtime), new DescirbeWorkflowResponse({}));
  }

  /**
   * You can call the DescirbeWorkflow operation to query detailed information about a workflow.
   * 
   * @deprecated OpenAPI DescirbeWorkflow is deprecated
   * @returns DescirbeWorkflowResponse
   */
  // Deprecated
  async descirbeWorkflow(workflowName: string): Promise<DescirbeWorkflowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.descirbeWorkflowWithOptions(workflowName, headers, runtime);
  }

  /**
   * 查询指定集群组件
   * 
   * @param request - DescribeAddonRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAddonResponse
   */
  async describeAddonWithOptions(addonName: string, request: DescribeAddonRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeAddonResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clusterId)) {
      query["cluster_id"] = request.clusterId;
    }

    if (!Util.isUnset(request.clusterSpec)) {
      query["cluster_spec"] = request.clusterSpec;
    }

    if (!Util.isUnset(request.clusterType)) {
      query["cluster_type"] = request.clusterType;
    }

    if (!Util.isUnset(request.clusterVersion)) {
      query["cluster_version"] = request.clusterVersion;
    }

    if (!Util.isUnset(request.profile)) {
      query["profile"] = request.profile;
    }

    if (!Util.isUnset(request.regionId)) {
      query["region_id"] = request.regionId;
    }

    if (!Util.isUnset(request.version)) {
      query["version"] = request.version;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAddon",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/addons/${OpenApiUtil.getEncodeParam(addonName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeAddonResponse>(await this.callApi(params, req, runtime), new DescribeAddonResponse({}));
  }

  /**
   * 查询指定集群组件
   * 
   * @param request - DescribeAddonRequest
   * @returns DescribeAddonResponse
   */
  async describeAddon(addonName: string, request: DescribeAddonRequest): Promise<DescribeAddonResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeAddonWithOptions(addonName, request, headers, runtime);
  }

  /**
   * You can call the DescribeAddons operation to query the details about all components that are supported by Container Service for Kubernetes (ACK).
   * 
   * @deprecated OpenAPI DescribeAddons is deprecated
   * 
   * @param request - DescribeAddonsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAddonsResponse
   */
  // Deprecated
  async describeAddonsWithOptions(request: DescribeAddonsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeAddonsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clusterProfile)) {
      query["cluster_profile"] = request.clusterProfile;
    }

    if (!Util.isUnset(request.clusterSpec)) {
      query["cluster_spec"] = request.clusterSpec;
    }

    if (!Util.isUnset(request.clusterType)) {
      query["cluster_type"] = request.clusterType;
    }

    if (!Util.isUnset(request.clusterVersion)) {
      query["cluster_version"] = request.clusterVersion;
    }

    if (!Util.isUnset(request.region)) {
      query["region"] = request.region;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAddons",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/components/metadata`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeAddonsResponse>(await this.callApi(params, req, runtime), new DescribeAddonsResponse({}));
  }

  /**
   * You can call the DescribeAddons operation to query the details about all components that are supported by Container Service for Kubernetes (ACK).
   * 
   * @deprecated OpenAPI DescribeAddons is deprecated
   * 
   * @param request - DescribeAddonsRequest
   * @returns DescribeAddonsResponse
   */
  // Deprecated
  async describeAddons(request: DescribeAddonsRequest): Promise<DescribeAddonsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeAddonsWithOptions(request, headers, runtime);
  }

  /**
   * You can call the DescribeClusterAddonInstance operation to query the information about a cluster component, including the version, status, and configuration of the component.
   * 
   * @deprecated OpenAPI DescribeClusterAddonInstance is deprecated
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeClusterAddonInstanceResponse
   */
  // Deprecated
  async describeClusterAddonInstanceWithOptions(ClusterID: string, AddonName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeClusterAddonInstanceResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DescribeClusterAddonInstance",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${OpenApiUtil.getEncodeParam(ClusterID)}/components/${OpenApiUtil.getEncodeParam(AddonName)}/instance`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeClusterAddonInstanceResponse>(await this.callApi(params, req, runtime), new DescribeClusterAddonInstanceResponse({}));
  }

  /**
   * You can call the DescribeClusterAddonInstance operation to query the information about a cluster component, including the version, status, and configuration of the component.
   * 
   * @deprecated OpenAPI DescribeClusterAddonInstance is deprecated
   * @returns DescribeClusterAddonInstanceResponse
   */
  // Deprecated
  async describeClusterAddonInstance(ClusterID: string, AddonName: string): Promise<DescribeClusterAddonInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeClusterAddonInstanceWithOptions(ClusterID, AddonName, headers, runtime);
  }

  /**
   * You can call the DescribeClusterAddonMetadata operation to query the metadata of a component version. The metadata includes the component version and available parameters.
   * 
   * @deprecated OpenAPI DescribeClusterAddonMetadata is deprecated
   * 
   * @param request - DescribeClusterAddonMetadataRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeClusterAddonMetadataResponse
   */
  // Deprecated
  async describeClusterAddonMetadataWithOptions(clusterId: string, componentId: string, request: DescribeClusterAddonMetadataRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeClusterAddonMetadataResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.version)) {
      query["version"] = request.version;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeClusterAddonMetadata",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${OpenApiUtil.getEncodeParam(clusterId)}/components/${OpenApiUtil.getEncodeParam(componentId)}/metadata`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeClusterAddonMetadataResponse>(await this.callApi(params, req, runtime), new DescribeClusterAddonMetadataResponse({}));
  }

  /**
   * You can call the DescribeClusterAddonMetadata operation to query the metadata of a component version. The metadata includes the component version and available parameters.
   * 
   * @deprecated OpenAPI DescribeClusterAddonMetadata is deprecated
   * 
   * @param request - DescribeClusterAddonMetadataRequest
   * @returns DescribeClusterAddonMetadataResponse
   */
  // Deprecated
  async describeClusterAddonMetadata(clusterId: string, componentId: string, request: DescribeClusterAddonMetadataRequest): Promise<DescribeClusterAddonMetadataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeClusterAddonMetadataWithOptions(clusterId, componentId, request, headers, runtime);
  }

  /**
   * You can call the DescribeClusterAddonUpgradeStatus operation to query the update progress of a cluster component.
   * 
   * @deprecated OpenAPI DescribeClusterAddonUpgradeStatus is deprecated
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeClusterAddonUpgradeStatusResponse
   */
  // Deprecated
  async describeClusterAddonUpgradeStatusWithOptions(ClusterId: string, ComponentId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeClusterAddonUpgradeStatusResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DescribeClusterAddonUpgradeStatus",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${OpenApiUtil.getEncodeParam(ClusterId)}/components/${OpenApiUtil.getEncodeParam(ComponentId)}/upgradestatus`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeClusterAddonUpgradeStatusResponse>(await this.callApi(params, req, runtime), new DescribeClusterAddonUpgradeStatusResponse({}));
  }

  /**
   * You can call the DescribeClusterAddonUpgradeStatus operation to query the update progress of a cluster component.
   * 
   * @deprecated OpenAPI DescribeClusterAddonUpgradeStatus is deprecated
   * @returns DescribeClusterAddonUpgradeStatusResponse
   */
  // Deprecated
  async describeClusterAddonUpgradeStatus(ClusterId: string, ComponentId: string): Promise<DescribeClusterAddonUpgradeStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeClusterAddonUpgradeStatusWithOptions(ClusterId, ComponentId, headers, runtime);
  }

  /**
   * You can call the DescribeClusterAddonsUpgradeStatus operation to query the update progress of a component by component name.
   * 
   * @deprecated OpenAPI DescribeClusterAddonsUpgradeStatus is deprecated
   * 
   * @param tmpReq - DescribeClusterAddonsUpgradeStatusRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeClusterAddonsUpgradeStatusResponse
   */
  // Deprecated
  async describeClusterAddonsUpgradeStatusWithOptions(ClusterId: string, tmpReq: DescribeClusterAddonsUpgradeStatusRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeClusterAddonsUpgradeStatusResponse> {
    Util.validateModel(tmpReq);
    let request = new DescribeClusterAddonsUpgradeStatusShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.componentIds)) {
      request.componentIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.componentIds, "componentIds", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.componentIdsShrink)) {
      query["componentIds"] = request.componentIdsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeClusterAddonsUpgradeStatus",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${OpenApiUtil.getEncodeParam(ClusterId)}/components/upgradestatus`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeClusterAddonsUpgradeStatusResponse>(await this.callApi(params, req, runtime), new DescribeClusterAddonsUpgradeStatusResponse({}));
  }

  /**
   * You can call the DescribeClusterAddonsUpgradeStatus operation to query the update progress of a component by component name.
   * 
   * @deprecated OpenAPI DescribeClusterAddonsUpgradeStatus is deprecated
   * 
   * @param request - DescribeClusterAddonsUpgradeStatusRequest
   * @returns DescribeClusterAddonsUpgradeStatusResponse
   */
  // Deprecated
  async describeClusterAddonsUpgradeStatus(ClusterId: string, request: DescribeClusterAddonsUpgradeStatusRequest): Promise<DescribeClusterAddonsUpgradeStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeClusterAddonsUpgradeStatusWithOptions(ClusterId, request, headers, runtime);
  }

  /**
   * You can call the DescribeClusterAddonsVersion operation to query the details about all components in a cluster by cluster ID.
   * 
   * @deprecated OpenAPI DescribeClusterAddonsVersion is deprecated
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeClusterAddonsVersionResponse
   */
  // Deprecated
  async describeClusterAddonsVersionWithOptions(ClusterId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeClusterAddonsVersionResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DescribeClusterAddonsVersion",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${OpenApiUtil.getEncodeParam(ClusterId)}/components/version`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeClusterAddonsVersionResponse>(await this.callApi(params, req, runtime), new DescribeClusterAddonsVersionResponse({}));
  }

  /**
   * You can call the DescribeClusterAddonsVersion operation to query the details about all components in a cluster by cluster ID.
   * 
   * @deprecated OpenAPI DescribeClusterAddonsVersion is deprecated
   * @returns DescribeClusterAddonsVersionResponse
   */
  // Deprecated
  async describeClusterAddonsVersion(ClusterId: string): Promise<DescribeClusterAddonsVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeClusterAddonsVersionWithOptions(ClusterId, headers, runtime);
  }

  /**
   * Queries the script that is used to add existing nodes to a Container Service for Kubernetes (ACK) cluster. You can manually add existing Elastic Compute Service (ECS) instances to an ACK cluster as worker nodes or re-add the worker nodes that you have removed to a node pool.
   * 
   * @param request - DescribeClusterAttachScriptsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeClusterAttachScriptsResponse
   */
  async describeClusterAttachScriptsWithOptions(ClusterId: string, request: DescribeClusterAttachScriptsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeClusterAttachScriptsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.arch)) {
      body["arch"] = request.arch;
    }

    if (!Util.isUnset(request.formatDisk)) {
      body["format_disk"] = request.formatDisk;
    }

    if (!Util.isUnset(request.keepInstanceName)) {
      body["keep_instance_name"] = request.keepInstanceName;
    }

    if (!Util.isUnset(request.nodepoolId)) {
      body["nodepool_id"] = request.nodepoolId;
    }

    if (!Util.isUnset(request.options)) {
      body["options"] = request.options;
    }

    if (!Util.isUnset(request.rdsInstances)) {
      body["rds_instances"] = request.rdsInstances;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeClusterAttachScripts",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${OpenApiUtil.getEncodeParam(ClusterId)}/attachscript`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "string",
    });
    return $tea.cast<DescribeClusterAttachScriptsResponse>(await this.callApi(params, req, runtime), new DescribeClusterAttachScriptsResponse({}));
  }

  /**
   * Queries the script that is used to add existing nodes to a Container Service for Kubernetes (ACK) cluster. You can manually add existing Elastic Compute Service (ECS) instances to an ACK cluster as worker nodes or re-add the worker nodes that you have removed to a node pool.
   * 
   * @param request - DescribeClusterAttachScriptsRequest
   * @returns DescribeClusterAttachScriptsResponse
   */
  async describeClusterAttachScripts(ClusterId: string, request: DescribeClusterAttachScriptsRequest): Promise<DescribeClusterAttachScriptsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeClusterAttachScriptsWithOptions(ClusterId, request, headers, runtime);
  }

  /**
   * You can call the DescribeClusterDetail operation to query the details of a Container Service for Kubernetes (ACK) cluster by cluster ID.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeClusterDetailResponse
   */
  async describeClusterDetailWithOptions(ClusterId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeClusterDetailResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DescribeClusterDetail",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${OpenApiUtil.getEncodeParam(ClusterId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeClusterDetailResponse>(await this.callApi(params, req, runtime), new DescribeClusterDetailResponse({}));
  }

  /**
   * You can call the DescribeClusterDetail operation to query the details of a Container Service for Kubernetes (ACK) cluster by cluster ID.
   * @returns DescribeClusterDetailResponse
   */
  async describeClusterDetail(ClusterId: string): Promise<DescribeClusterDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeClusterDetailWithOptions(ClusterId, headers, runtime);
  }

  /**
   * Queries events and event details in a Container Service for Kubernetes (ACK) cluster, including the severity level, status, and start time of each event. Events are generated when clusters created, modified, and updated, node pools are created and scaled out, and components are installed.
   * 
   * @param request - DescribeClusterEventsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeClusterEventsResponse
   */
  async describeClusterEventsWithOptions(ClusterId: string, request: DescribeClusterEventsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeClusterEventsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["page_number"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["page_size"] = request.pageSize;
    }

    if (!Util.isUnset(request.taskId)) {
      query["task_id"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeClusterEvents",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${OpenApiUtil.getEncodeParam(ClusterId)}/events`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeClusterEventsResponse>(await this.callApi(params, req, runtime), new DescribeClusterEventsResponse({}));
  }

  /**
   * Queries events and event details in a Container Service for Kubernetes (ACK) cluster, including the severity level, status, and start time of each event. Events are generated when clusters created, modified, and updated, node pools are created and scaled out, and components are installed.
   * 
   * @param request - DescribeClusterEventsRequest
   * @returns DescribeClusterEventsResponse
   */
  async describeClusterEvents(ClusterId: string, request: DescribeClusterEventsRequest): Promise<DescribeClusterEventsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeClusterEventsWithOptions(ClusterId, request, headers, runtime);
  }

  /**
   * Queries the cluster log to help analyze cluster issues and locate the cause.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeClusterLogsResponse
   */
  async describeClusterLogsWithOptions(ClusterId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeClusterLogsResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DescribeClusterLogs",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${OpenApiUtil.getEncodeParam(ClusterId)}/logs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "array",
    });
    return $tea.cast<DescribeClusterLogsResponse>(await this.callApi(params, req, runtime), new DescribeClusterLogsResponse({}));
  }

  /**
   * Queries the cluster log to help analyze cluster issues and locate the cause.
   * @returns DescribeClusterLogsResponse
   */
  async describeClusterLogs(ClusterId: string): Promise<DescribeClusterLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeClusterLogsWithOptions(ClusterId, headers, runtime);
  }

  /**
   * You can call the DescribeClusterNodePoolDetail.html operation to query the details about a node pool in a cluster by node pool ID.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeClusterNodePoolDetailResponse
   */
  async describeClusterNodePoolDetailWithOptions(ClusterId: string, NodepoolId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeClusterNodePoolDetailResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DescribeClusterNodePoolDetail",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${OpenApiUtil.getEncodeParam(ClusterId)}/nodepools/${OpenApiUtil.getEncodeParam(NodepoolId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeClusterNodePoolDetailResponse>(await this.callApi(params, req, runtime), new DescribeClusterNodePoolDetailResponse({}));
  }

  /**
   * You can call the DescribeClusterNodePoolDetail.html operation to query the details about a node pool in a cluster by node pool ID.
   * @returns DescribeClusterNodePoolDetailResponse
   */
  async describeClusterNodePoolDetail(ClusterId: string, NodepoolId: string): Promise<DescribeClusterNodePoolDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeClusterNodePoolDetailWithOptions(ClusterId, NodepoolId, headers, runtime);
  }

  /**
   * Queries node pools in a Container Service for Kubernetes (ACK) cluster.
   * 
   * @param request - DescribeClusterNodePoolsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeClusterNodePoolsResponse
   */
  async describeClusterNodePoolsWithOptions(ClusterId: string, request: DescribeClusterNodePoolsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeClusterNodePoolsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.nodepoolName)) {
      query["NodepoolName"] = request.nodepoolName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeClusterNodePools",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${OpenApiUtil.getEncodeParam(ClusterId)}/nodepools`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeClusterNodePoolsResponse>(await this.callApi(params, req, runtime), new DescribeClusterNodePoolsResponse({}));
  }

  /**
   * Queries node pools in a Container Service for Kubernetes (ACK) cluster.
   * 
   * @param request - DescribeClusterNodePoolsRequest
   * @returns DescribeClusterNodePoolsResponse
   */
  async describeClusterNodePools(ClusterId: string, request: DescribeClusterNodePoolsRequest): Promise<DescribeClusterNodePoolsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeClusterNodePoolsWithOptions(ClusterId, request, headers, runtime);
  }

  /**
   * You can call the DescribeClusterNodes operation to query the details about all nodes in a cluster by cluster ID.
   * 
   * @param request - DescribeClusterNodesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeClusterNodesResponse
   */
  async describeClusterNodesWithOptions(ClusterId: string, request: DescribeClusterNodesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeClusterNodesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceIds)) {
      query["instanceIds"] = request.instanceIds;
    }

    if (!Util.isUnset(request.nodepoolId)) {
      query["nodepool_id"] = request.nodepoolId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.state)) {
      query["state"] = request.state;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeClusterNodes",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${OpenApiUtil.getEncodeParam(ClusterId)}/nodes`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeClusterNodesResponse>(await this.callApi(params, req, runtime), new DescribeClusterNodesResponse({}));
  }

  /**
   * You can call the DescribeClusterNodes operation to query the details about all nodes in a cluster by cluster ID.
   * 
   * @param request - DescribeClusterNodesRequest
   * @returns DescribeClusterNodesResponse
   */
  async describeClusterNodes(ClusterId: string, request: DescribeClusterNodesRequest): Promise<DescribeClusterNodesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeClusterNodesWithOptions(ClusterId, request, headers, runtime);
  }

  /**
   * You can call the DescribeClusterResources operation to query all resources in a cluster by cluster ID.
   * 
   * @param request - DescribeClusterResourcesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeClusterResourcesResponse
   */
  async describeClusterResourcesWithOptions(ClusterId: string, request: DescribeClusterResourcesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeClusterResourcesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.withAddonResources)) {
      query["with_addon_resources"] = request.withAddonResources;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeClusterResources",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${OpenApiUtil.getEncodeParam(ClusterId)}/resources`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "array",
    });
    return $tea.cast<DescribeClusterResourcesResponse>(await this.callApi(params, req, runtime), new DescribeClusterResourcesResponse({}));
  }

  /**
   * You can call the DescribeClusterResources operation to query all resources in a cluster by cluster ID.
   * 
   * @param request - DescribeClusterResourcesRequest
   * @returns DescribeClusterResourcesResponse
   */
  async describeClusterResources(ClusterId: string, request: DescribeClusterResourcesRequest): Promise<DescribeClusterResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeClusterResourcesWithOptions(ClusterId, request, headers, runtime);
  }

  /**
   * Queries tasks in a Container Service for Kubernetes (ACK) cluster.
   * 
   * @param request - DescribeClusterTasksRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeClusterTasksResponse
   */
  async describeClusterTasksWithOptions(clusterId: string, request: DescribeClusterTasksRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeClusterTasksResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["page_number"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["page_size"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeClusterTasks",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${OpenApiUtil.getEncodeParam(clusterId)}/tasks`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeClusterTasksResponse>(await this.callApi(params, req, runtime), new DescribeClusterTasksResponse({}));
  }

  /**
   * Queries tasks in a Container Service for Kubernetes (ACK) cluster.
   * 
   * @param request - DescribeClusterTasksRequest
   * @returns DescribeClusterTasksResponse
   */
  async describeClusterTasks(clusterId: string, request: DescribeClusterTasksRequest): Promise<DescribeClusterTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeClusterTasksWithOptions(clusterId, request, headers, runtime);
  }

  /**
   * Kubeconfig files store identity and authentication information that is used by clients to access Container Service for Kubernetes (ACK) clusters. To use a kubectl client to manage an ACK cluster, you need to use the corresponding kubeconfig file to connect to the ACK cluster. We recommend that you keep kubeconfig files confidential and revoke kubeconfig files that are not in use. This helps prevent data leaks caused by the disclosure of kubeconfig files.
   * 
   * @remarks
   * *
   * ****The default validity period of a kubeconfig file is 3 years. Two months before a kubeconfig file expires, you can renew it in the Container Service for Kubernetes (ACK) console or by calling API operations. After a kubeconfig file is renewed, the secret is valid for 3 years. The previous kubeconfig secret remains valid until expiration. We recommend that you renew your kubeconfig file at the earliest opportunity.
   * 
   * @param request - DescribeClusterUserKubeconfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeClusterUserKubeconfigResponse
   */
  async describeClusterUserKubeconfigWithOptions(ClusterId: string, request: DescribeClusterUserKubeconfigRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeClusterUserKubeconfigResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.privateIpAddress)) {
      query["PrivateIpAddress"] = request.privateIpAddress;
    }

    if (!Util.isUnset(request.temporaryDurationMinutes)) {
      query["TemporaryDurationMinutes"] = request.temporaryDurationMinutes;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeClusterUserKubeconfig",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/k8s/${OpenApiUtil.getEncodeParam(ClusterId)}/user_config`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeClusterUserKubeconfigResponse>(await this.callApi(params, req, runtime), new DescribeClusterUserKubeconfigResponse({}));
  }

  /**
   * Kubeconfig files store identity and authentication information that is used by clients to access Container Service for Kubernetes (ACK) clusters. To use a kubectl client to manage an ACK cluster, you need to use the corresponding kubeconfig file to connect to the ACK cluster. We recommend that you keep kubeconfig files confidential and revoke kubeconfig files that are not in use. This helps prevent data leaks caused by the disclosure of kubeconfig files.
   * 
   * @remarks
   * *
   * ****The default validity period of a kubeconfig file is 3 years. Two months before a kubeconfig file expires, you can renew it in the Container Service for Kubernetes (ACK) console or by calling API operations. After a kubeconfig file is renewed, the secret is valid for 3 years. The previous kubeconfig secret remains valid until expiration. We recommend that you renew your kubeconfig file at the earliest opportunity.
   * 
   * @param request - DescribeClusterUserKubeconfigRequest
   * @returns DescribeClusterUserKubeconfigResponse
   */
  async describeClusterUserKubeconfig(ClusterId: string, request: DescribeClusterUserKubeconfigRequest): Promise<DescribeClusterUserKubeconfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeClusterUserKubeconfigWithOptions(ClusterId, request, headers, runtime);
  }

  /**
   * 获取集群kubeconfig接口
   * 
   * @deprecated OpenAPI DescribeClusterV2UserKubeconfig is deprecated
   * 
   * @param request - DescribeClusterV2UserKubeconfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeClusterV2UserKubeconfigResponse
   */
  // Deprecated
  async describeClusterV2UserKubeconfigWithOptions(ClusterId: string, request: DescribeClusterV2UserKubeconfigRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeClusterV2UserKubeconfigResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.privateIpAddress)) {
      query["PrivateIpAddress"] = request.privateIpAddress;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeClusterV2UserKubeconfig",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/api/v2/k8s/${OpenApiUtil.getEncodeParam(ClusterId)}/user_config`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeClusterV2UserKubeconfigResponse>(await this.callApi(params, req, runtime), new DescribeClusterV2UserKubeconfigResponse({}));
  }

  /**
   * 获取集群kubeconfig接口
   * 
   * @deprecated OpenAPI DescribeClusterV2UserKubeconfig is deprecated
   * 
   * @param request - DescribeClusterV2UserKubeconfigRequest
   * @returns DescribeClusterV2UserKubeconfigResponse
   */
  // Deprecated
  async describeClusterV2UserKubeconfig(ClusterId: string, request: DescribeClusterV2UserKubeconfigRequest): Promise<DescribeClusterV2UserKubeconfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeClusterV2UserKubeconfigWithOptions(ClusterId, request, headers, runtime);
  }

  /**
   * Queries the security vulnerability details of a cluster by cluster ID. The details include vulnerability name, vulnerability type, and vulnerability severity. We recommend that you scan your cluster on a regular basis to ensure cluster security.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeClusterVulsResponse
   */
  async describeClusterVulsWithOptions(clusterId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeClusterVulsResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DescribeClusterVuls",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${OpenApiUtil.getEncodeParam(clusterId)}/vuls`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeClusterVulsResponse>(await this.callApi(params, req, runtime), new DescribeClusterVulsResponse({}));
  }

  /**
   * Queries the security vulnerability details of a cluster by cluster ID. The details include vulnerability name, vulnerability type, and vulnerability severity. We recommend that you scan your cluster on a regular basis to ensure cluster security.
   * @returns DescribeClusterVulsResponse
   */
  async describeClusterVuls(clusterId: string): Promise<DescribeClusterVulsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeClusterVulsWithOptions(clusterId, headers, runtime);
  }

  /**
   * You can call the DescribeClusters operation to query all the clusters that belong to the current Alibaba Cloud account, including Kubernetes clusters and Swarm clusters.
   * 
   * @deprecated OpenAPI DescribeClusters is deprecated
   * 
   * @param request - DescribeClustersRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeClustersResponse
   */
  // Deprecated
  async describeClustersWithOptions(request: DescribeClustersRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeClustersResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clusterType)) {
      query["clusterType"] = request.clusterType;
    }

    if (!Util.isUnset(request.name)) {
      query["name"] = request.name;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["resource_group_id"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeClusters",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "array",
    });
    return $tea.cast<DescribeClustersResponse>(await this.callApi(params, req, runtime), new DescribeClustersResponse({}));
  }

  /**
   * You can call the DescribeClusters operation to query all the clusters that belong to the current Alibaba Cloud account, including Kubernetes clusters and Swarm clusters.
   * 
   * @deprecated OpenAPI DescribeClusters is deprecated
   * 
   * @param request - DescribeClustersRequest
   * @returns DescribeClustersResponse
   */
  // Deprecated
  async describeClusters(request: DescribeClustersRequest): Promise<DescribeClustersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeClustersWithOptions(request, headers, runtime);
  }

  /**
   * You can call the DescribeClustersV1 operation to query the details about all Container Service for Kubernetes (ACK) clusters.
   * 
   * @param request - DescribeClustersV1Request
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeClustersV1Response
   */
  async describeClustersV1WithOptions(request: DescribeClustersV1Request, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeClustersV1Response> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clusterId)) {
      query["cluster_id"] = request.clusterId;
    }

    if (!Util.isUnset(request.clusterSpec)) {
      query["cluster_spec"] = request.clusterSpec;
    }

    if (!Util.isUnset(request.clusterType)) {
      query["cluster_type"] = request.clusterType;
    }

    if (!Util.isUnset(request.name)) {
      query["name"] = request.name;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["page_number"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["page_size"] = request.pageSize;
    }

    if (!Util.isUnset(request.profile)) {
      query["profile"] = request.profile;
    }

    if (!Util.isUnset(request.regionId)) {
      query["region_id"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeClustersV1",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/api/v1/clusters`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeClustersV1Response>(await this.callApi(params, req, runtime), new DescribeClustersV1Response({}));
  }

  /**
   * You can call the DescribeClustersV1 operation to query the details about all Container Service for Kubernetes (ACK) clusters.
   * 
   * @param request - DescribeClustersV1Request
   * @returns DescribeClustersV1Response
   */
  async describeClustersV1(request: DescribeClustersV1Request): Promise<DescribeClustersV1Response> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeClustersV1WithOptions(request, headers, runtime);
  }

  /**
   * You can call the DescribeEdgeMachineActiveProcess operation to query the activation progress of a cloud-native box.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEdgeMachineActiveProcessResponse
   */
  async describeEdgeMachineActiveProcessWithOptions(edgeMachineid: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeEdgeMachineActiveProcessResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DescribeEdgeMachineActiveProcess",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/edge_machines/%5Bedge_machineid%5D/activeprocess`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeEdgeMachineActiveProcessResponse>(await this.callApi(params, req, runtime), new DescribeEdgeMachineActiveProcessResponse({}));
  }

  /**
   * You can call the DescribeEdgeMachineActiveProcess operation to query the activation progress of a cloud-native box.
   * @returns DescribeEdgeMachineActiveProcessResponse
   */
  async describeEdgeMachineActiveProcess(edgeMachineid: string): Promise<DescribeEdgeMachineActiveProcessResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeEdgeMachineActiveProcessWithOptions(edgeMachineid, headers, runtime);
  }

  /**
   * You can call the DescribeEdgeMachineModels operation to query the cloud-native box models.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEdgeMachineModelsResponse
   */
  async describeEdgeMachineModelsWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeEdgeMachineModelsResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DescribeEdgeMachineModels",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/edge_machines/models`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeEdgeMachineModelsResponse>(await this.callApi(params, req, runtime), new DescribeEdgeMachineModelsResponse({}));
  }

  /**
   * You can call the DescribeEdgeMachineModels operation to query the cloud-native box models.
   * @returns DescribeEdgeMachineModelsResponse
   */
  async describeEdgeMachineModels(): Promise<DescribeEdgeMachineModelsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeEdgeMachineModelsWithOptions(headers, runtime);
  }

  /**
   * You can call the DescribeEdgeMachineTunnelConfigDetail operation to obtain the SSH token of a cloud-native box.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEdgeMachineTunnelConfigDetailResponse
   */
  async describeEdgeMachineTunnelConfigDetailWithOptions(edgeMachineid: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeEdgeMachineTunnelConfigDetailResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DescribeEdgeMachineTunnelConfigDetail",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/edge_machines/%5Bedge_machineid%5D/tunnelconfig`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeEdgeMachineTunnelConfigDetailResponse>(await this.callApi(params, req, runtime), new DescribeEdgeMachineTunnelConfigDetailResponse({}));
  }

  /**
   * You can call the DescribeEdgeMachineTunnelConfigDetail operation to obtain the SSH token of a cloud-native box.
   * @returns DescribeEdgeMachineTunnelConfigDetailResponse
   */
  async describeEdgeMachineTunnelConfigDetail(edgeMachineid: string): Promise<DescribeEdgeMachineTunnelConfigDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeEdgeMachineTunnelConfigDetailWithOptions(edgeMachineid, headers, runtime);
  }

  /**
   * You can call the DescribeEdgeMachines operation to query a list of cloud-native boxes.
   * 
   * @param request - DescribeEdgeMachinesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEdgeMachinesResponse
   */
  async describeEdgeMachinesWithOptions(request: DescribeEdgeMachinesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeEdgeMachinesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.hostname)) {
      query["hostname"] = request.hostname;
    }

    if (!Util.isUnset(request.lifeState)) {
      query["life_state"] = request.lifeState;
    }

    if (!Util.isUnset(request.model)) {
      query["model"] = request.model;
    }

    if (!Util.isUnset(request.onlineState)) {
      query["online_state"] = request.onlineState;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["page_number"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["page_size"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeEdgeMachines",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/edge_machines`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeEdgeMachinesResponse>(await this.callApi(params, req, runtime), new DescribeEdgeMachinesResponse({}));
  }

  /**
   * You can call the DescribeEdgeMachines operation to query a list of cloud-native boxes.
   * 
   * @param request - DescribeEdgeMachinesRequest
   * @returns DescribeEdgeMachinesResponse
   */
  async describeEdgeMachines(request: DescribeEdgeMachinesRequest): Promise<DescribeEdgeMachinesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeEdgeMachinesWithOptions(request, headers, runtime);
  }

  /**
   * Queries detailed information about a type of events, including the severity level, status, and start time of each event. Events are generated when clusters are created, modified, and updated, node pools are created and scaled out, and components are installed.
   * 
   * @param request - DescribeEventsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEventsResponse
   */
  async describeEventsWithOptions(request: DescribeEventsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeEventsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clusterId)) {
      query["cluster_id"] = request.clusterId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["page_number"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["page_size"] = request.pageSize;
    }

    if (!Util.isUnset(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeEvents",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/events`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeEventsResponse>(await this.callApi(params, req, runtime), new DescribeEventsResponse({}));
  }

  /**
   * Queries detailed information about a type of events, including the severity level, status, and start time of each event. Events are generated when clusters are created, modified, and updated, node pools are created and scaled out, and components are installed.
   * 
   * @param request - DescribeEventsRequest
   * @returns DescribeEventsResponse
   */
  async describeEvents(request: DescribeEventsRequest): Promise<DescribeEventsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeEventsWithOptions(request, headers, runtime);
  }

  /**
   * You can call the DescribeExternalAgent operation to query the agent configurations of a registered cluster by cluster ID.
   * 
   * @remarks
   * For more information, see [Register an external Kubernetes cluster](https://help.aliyun.com/document_detail/121053.html).
   * 
   * @param request - DescribeExternalAgentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeExternalAgentResponse
   */
  async describeExternalAgentWithOptions(ClusterId: string, request: DescribeExternalAgentRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeExternalAgentResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.agentMode)) {
      query["AgentMode"] = request.agentMode;
    }

    if (!Util.isUnset(request.privateIpAddress)) {
      query["PrivateIpAddress"] = request.privateIpAddress;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeExternalAgent",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/k8s/${OpenApiUtil.getEncodeParam(ClusterId)}/external/agent/deployment`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeExternalAgentResponse>(await this.callApi(params, req, runtime), new DescribeExternalAgentResponse({}));
  }

  /**
   * You can call the DescribeExternalAgent operation to query the agent configurations of a registered cluster by cluster ID.
   * 
   * @remarks
   * For more information, see [Register an external Kubernetes cluster](https://help.aliyun.com/document_detail/121053.html).
   * 
   * @param request - DescribeExternalAgentRequest
   * @returns DescribeExternalAgentResponse
   */
  async describeExternalAgent(ClusterId: string, request: DescribeExternalAgentRequest): Promise<DescribeExternalAgentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeExternalAgentWithOptions(ClusterId, request, headers, runtime);
  }

  /**
   * Queries the detailed information about Kubernetes versions, including the version number, release date, expiration date, compatible OSs, and runtime.
   * 
   * @param request - DescribeKubernetesVersionMetadataRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeKubernetesVersionMetadataResponse
   */
  async describeKubernetesVersionMetadataWithOptions(request: DescribeKubernetesVersionMetadataRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeKubernetesVersionMetadataResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clusterType)) {
      query["ClusterType"] = request.clusterType;
    }

    if (!Util.isUnset(request.kubernetesVersion)) {
      query["KubernetesVersion"] = request.kubernetesVersion;
    }

    if (!Util.isUnset(request.mode)) {
      query["Mode"] = request.mode;
    }

    if (!Util.isUnset(request.profile)) {
      query["Profile"] = request.profile;
    }

    if (!Util.isUnset(request.queryUpgradableVersion)) {
      query["QueryUpgradableVersion"] = request.queryUpgradableVersion;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.runtime)) {
      query["runtime"] = request.runtime;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeKubernetesVersionMetadata",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/api/v1/metadata/versions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "array",
    });
    return $tea.cast<DescribeKubernetesVersionMetadataResponse>(await this.callApi(params, req, runtime), new DescribeKubernetesVersionMetadataResponse({}));
  }

  /**
   * Queries the detailed information about Kubernetes versions, including the version number, release date, expiration date, compatible OSs, and runtime.
   * 
   * @param request - DescribeKubernetesVersionMetadataRequest
   * @returns DescribeKubernetesVersionMetadataResponse
   */
  async describeKubernetesVersionMetadata(request: DescribeKubernetesVersionMetadataRequest): Promise<DescribeKubernetesVersionMetadataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeKubernetesVersionMetadataWithOptions(request, headers, runtime);
  }

  /**
   * Queries the vulnerability information of a node pool, such as vulnerability names and severity levels, by specifying the ID of the node pool. We recommend that you periodically scan node pools for vulnerabilities to enhance cluster security.
   * 
   * @param request - DescribeNodePoolVulsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeNodePoolVulsResponse
   */
  async describeNodePoolVulsWithOptions(clusterId: string, nodepoolId: string, request: DescribeNodePoolVulsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeNodePoolVulsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.necessity)) {
      query["necessity"] = request.necessity;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeNodePoolVuls",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${OpenApiUtil.getEncodeParam(clusterId)}/nodepools/${OpenApiUtil.getEncodeParam(nodepoolId)}/vuls`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeNodePoolVulsResponse>(await this.callApi(params, req, runtime), new DescribeNodePoolVulsResponse({}));
  }

  /**
   * Queries the vulnerability information of a node pool, such as vulnerability names and severity levels, by specifying the ID of the node pool. We recommend that you periodically scan node pools for vulnerabilities to enhance cluster security.
   * 
   * @param request - DescribeNodePoolVulsRequest
   * @returns DescribeNodePoolVulsResponse
   */
  async describeNodePoolVuls(clusterId: string, nodepoolId: string, request: DescribeNodePoolVulsRequest): Promise<DescribeNodePoolVulsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeNodePoolVulsWithOptions(clusterId, nodepoolId, request, headers, runtime);
  }

  /**
   * Queries the policies for a Container Service for Kubernetes (ACK) cluster. Container security policies for ACK clusters offer a variety of built-in policies, including cis-k8s, infra, k8s-general, and PodSecurityPolicy. You can use these policies to ensure the security of containers running in a production environment.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePoliciesResponse
   */
  async describePoliciesWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribePoliciesResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DescribePolicies",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/policies`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribePoliciesResponse>(await this.callApi(params, req, runtime), new DescribePoliciesResponse({}));
  }

  /**
   * Queries the policies for a Container Service for Kubernetes (ACK) cluster. Container security policies for ACK clusters offer a variety of built-in policies, including cis-k8s, infra, k8s-general, and PodSecurityPolicy. You can use these policies to ensure the security of containers running in a production environment.
   * @returns DescribePoliciesResponse
   */
  async describePolicies(): Promise<DescribePoliciesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describePoliciesWithOptions(headers, runtime);
  }

  /**
   * Container security policies for Container Service for Kubernetes (ACK) clusters offer a variety of built-in policies, including cis-k8s, infra, k8s-general, and PodSecurityPolicy. You can use these policies to ensure the security of containers running in a production environment. You can call the DescribePolicyDetails operation to query information about a policy, such as the content, action, and severity level of the policy.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePolicyDetailsResponse
   */
  async describePolicyDetailsWithOptions(policyName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribePolicyDetailsResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DescribePolicyDetails",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/policies/${OpenApiUtil.getEncodeParam(policyName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribePolicyDetailsResponse>(await this.callApi(params, req, runtime), new DescribePolicyDetailsResponse({}));
  }

  /**
   * Container security policies for Container Service for Kubernetes (ACK) clusters offer a variety of built-in policies, including cis-k8s, infra, k8s-general, and PodSecurityPolicy. You can use these policies to ensure the security of containers running in a production environment. You can call the DescribePolicyDetails operation to query information about a policy, such as the content, action, and severity level of the policy.
   * @returns DescribePolicyDetailsResponse
   */
  async describePolicyDetails(policyName: string): Promise<DescribePolicyDetailsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describePolicyDetailsWithOptions(policyName, headers, runtime);
  }

  /**
   * Queries the details of policies for a Container Service for Kubernetes (ACK) cluster. For example, you can query the number of multi-level policies that are enabled for the cluster, audit logs of the policies, and denying and alerting information. Container security policies for ACK clusters offer a variety of built-in policies, such as cis-k8s, infra, k8s-general, and PodSecurityPolicy. You can use these policies to ensure the security of containers running in a production environment.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePolicyGovernanceInClusterResponse
   */
  async describePolicyGovernanceInClusterWithOptions(clusterId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribePolicyGovernanceInClusterResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DescribePolicyGovernanceInCluster",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${OpenApiUtil.getEncodeParam(clusterId)}/policygovernance`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribePolicyGovernanceInClusterResponse>(await this.callApi(params, req, runtime), new DescribePolicyGovernanceInClusterResponse({}));
  }

  /**
   * Queries the details of policies for a Container Service for Kubernetes (ACK) cluster. For example, you can query the number of multi-level policies that are enabled for the cluster, audit logs of the policies, and denying and alerting information. Container security policies for ACK clusters offer a variety of built-in policies, such as cis-k8s, infra, k8s-general, and PodSecurityPolicy. You can use these policies to ensure the security of containers running in a production environment.
   * @returns DescribePolicyGovernanceInClusterResponse
   */
  async describePolicyGovernanceInCluster(clusterId: string): Promise<DescribePolicyGovernanceInClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describePolicyGovernanceInClusterWithOptions(clusterId, headers, runtime);
  }

  /**
   * Queries the detailed information about policy instances of the specified type in a Container Service for Kubernetes (ACK) cluster, such as the policy description and severity level. You can choose a type of security policy for an ACK cluster, specify the action and applicable scope of the policy, and then create and deploy a policy instance.
   * 
   * @param request - DescribePolicyInstancesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePolicyInstancesResponse
   */
  async describePolicyInstancesWithOptions(clusterId: string, request: DescribePolicyInstancesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribePolicyInstancesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceName)) {
      query["instance_name"] = request.instanceName;
    }

    if (!Util.isUnset(request.policyName)) {
      query["policy_name"] = request.policyName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePolicyInstances",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${OpenApiUtil.getEncodeParam(clusterId)}/policies`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "array",
    });
    return $tea.cast<DescribePolicyInstancesResponse>(await this.callApi(params, req, runtime), new DescribePolicyInstancesResponse({}));
  }

  /**
   * Queries the detailed information about policy instances of the specified type in a Container Service for Kubernetes (ACK) cluster, such as the policy description and severity level. You can choose a type of security policy for an ACK cluster, specify the action and applicable scope of the policy, and then create and deploy a policy instance.
   * 
   * @param request - DescribePolicyInstancesRequest
   * @returns DescribePolicyInstancesResponse
   */
  async describePolicyInstances(clusterId: string, request: DescribePolicyInstancesRequest): Promise<DescribePolicyInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describePolicyInstancesWithOptions(clusterId, request, headers, runtime);
  }

  /**
   * Queries the deployment of policy instances in the current Container Service for Kubernetes (ACK) cluster, including the number of policy instances of each type and the number of policy types of each severity level.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePolicyInstancesStatusResponse
   */
  async describePolicyInstancesStatusWithOptions(clusterId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribePolicyInstancesStatusResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DescribePolicyInstancesStatus",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${OpenApiUtil.getEncodeParam(clusterId)}/policies/status`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribePolicyInstancesStatusResponse>(await this.callApi(params, req, runtime), new DescribePolicyInstancesStatusResponse({}));
  }

  /**
   * Queries the deployment of policy instances in the current Container Service for Kubernetes (ACK) cluster, including the number of policy instances of each type and the number of policy types of each severity level.
   * @returns DescribePolicyInstancesStatusResponse
   */
  async describePolicyInstancesStatus(clusterId: string): Promise<DescribePolicyInstancesStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describePolicyInstancesStatusWithOptions(clusterId, headers, runtime);
  }

  /**
   * Queries whether the deletion protection feature is enabled for the specified resources. The resources that you can query include namespaces and Services.
   * 
   * @param request - DescribeResourcesDeleteProtectionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeResourcesDeleteProtectionResponse
   */
  async describeResourcesDeleteProtectionWithOptions(ClusterId: string, ResourceType: string, request: DescribeResourcesDeleteProtectionRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeResourcesDeleteProtectionResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.namespace)) {
      query["namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.resources)) {
      query["resources"] = request.resources;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeResourcesDeleteProtection",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${OpenApiUtil.getEncodeParam(ClusterId)}/resources/${OpenApiUtil.getEncodeParam(ResourceType)}/protection`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "array",
    });
    return $tea.cast<DescribeResourcesDeleteProtectionResponse>(await this.callApi(params, req, runtime), new DescribeResourcesDeleteProtectionResponse({}));
  }

  /**
   * Queries whether the deletion protection feature is enabled for the specified resources. The resources that you can query include namespaces and Services.
   * 
   * @param request - DescribeResourcesDeleteProtectionRequest
   * @returns DescribeResourcesDeleteProtectionResponse
   */
  async describeResourcesDeleteProtection(ClusterId: string, ResourceType: string, request: DescribeResourcesDeleteProtectionRequest): Promise<DescribeResourcesDeleteProtectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeResourcesDeleteProtectionWithOptions(ClusterId, ResourceType, request, headers, runtime);
  }

  /**
   * Queries or issues the kubeconfig credentials of a Resource Access Management (RAM) user or RAM role of the account. If you are the permission manager of a Container Service for Kubernetes (ACK) cluster, you can issue the kubeconfig credentials to a specific RAM user or RAM role of the account by using the Alibaba Cloud account. The kubeconfig credentials, which are used to connect to the ACK cluster, contain the identity information about the RAM user or RAM role.
   * 
   * @remarks
   * *
   * ****Only Alibaba Cloud accounts can call this API operation.
   * 
   * @param request - DescribeSubaccountK8sClusterUserConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSubaccountK8sClusterUserConfigResponse
   */
  async describeSubaccountK8sClusterUserConfigWithOptions(ClusterId: string, Uid: string, request: DescribeSubaccountK8sClusterUserConfigRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeSubaccountK8sClusterUserConfigResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.privateIpAddress)) {
      query["PrivateIpAddress"] = request.privateIpAddress;
    }

    if (!Util.isUnset(request.temporaryDurationMinutes)) {
      query["TemporaryDurationMinutes"] = request.temporaryDurationMinutes;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSubaccountK8sClusterUserConfig",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/k8s/${OpenApiUtil.getEncodeParam(ClusterId)}/users/${OpenApiUtil.getEncodeParam(Uid)}/user_config`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeSubaccountK8sClusterUserConfigResponse>(await this.callApi(params, req, runtime), new DescribeSubaccountK8sClusterUserConfigResponse({}));
  }

  /**
   * Queries or issues the kubeconfig credentials of a Resource Access Management (RAM) user or RAM role of the account. If you are the permission manager of a Container Service for Kubernetes (ACK) cluster, you can issue the kubeconfig credentials to a specific RAM user or RAM role of the account by using the Alibaba Cloud account. The kubeconfig credentials, which are used to connect to the ACK cluster, contain the identity information about the RAM user or RAM role.
   * 
   * @remarks
   * *
   * ****Only Alibaba Cloud accounts can call this API operation.
   * 
   * @param request - DescribeSubaccountK8sClusterUserConfigRequest
   * @returns DescribeSubaccountK8sClusterUserConfigResponse
   */
  async describeSubaccountK8sClusterUserConfig(ClusterId: string, Uid: string, request: DescribeSubaccountK8sClusterUserConfigRequest): Promise<DescribeSubaccountK8sClusterUserConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeSubaccountK8sClusterUserConfigWithOptions(ClusterId, Uid, request, headers, runtime);
  }

  /**
   * Queries detailed information about a task, such as the task type, status, and progress.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTaskInfoResponse
   */
  async describeTaskInfoWithOptions(taskId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeTaskInfoResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DescribeTaskInfo",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/tasks/${OpenApiUtil.getEncodeParam(taskId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeTaskInfoResponse>(await this.callApi(params, req, runtime), new DescribeTaskInfoResponse({}));
  }

  /**
   * Queries detailed information about a task, such as the task type, status, and progress.
   * @returns DescribeTaskInfoResponse
   */
  async describeTaskInfo(taskId: string): Promise<DescribeTaskInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeTaskInfoWithOptions(taskId, headers, runtime);
  }

  /**
   * An orchestration template defines and describes a group of Kubernetes resources. It declaratively describes the configuration of an application or how an application runs. You can call the DescribeTemplates API operation to query orchestration templates and their detailed information, including access permissions, YAML content, and labels.
   * 
   * @param request - DescribeTemplateAttributeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTemplateAttributeResponse
   */
  async describeTemplateAttributeWithOptions(TemplateId: string, request: DescribeTemplateAttributeRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeTemplateAttributeResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.templateType)) {
      query["template_type"] = request.templateType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeTemplateAttribute",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/templates/${OpenApiUtil.getEncodeParam(TemplateId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "array",
    });
    return $tea.cast<DescribeTemplateAttributeResponse>(await this.callApi(params, req, runtime), new DescribeTemplateAttributeResponse({}));
  }

  /**
   * An orchestration template defines and describes a group of Kubernetes resources. It declaratively describes the configuration of an application or how an application runs. You can call the DescribeTemplates API operation to query orchestration templates and their detailed information, including access permissions, YAML content, and labels.
   * 
   * @param request - DescribeTemplateAttributeRequest
   * @returns DescribeTemplateAttributeResponse
   */
  async describeTemplateAttribute(TemplateId: string, request: DescribeTemplateAttributeRequest): Promise<DescribeTemplateAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeTemplateAttributeWithOptions(TemplateId, request, headers, runtime);
  }

  /**
   * An orchestration template defines and describes a group of Kubernetes resources. It declaratively describes the configuration of an application or how an application runs. You can call the DescribeTemplates API operation to query orchestration templates and their detailed information, including access permissions, YAML content, and labels.
   * 
   * @param request - DescribeTemplatesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTemplatesResponse
   */
  async describeTemplatesWithOptions(request: DescribeTemplatesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeTemplatesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNum)) {
      query["page_num"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["page_size"] = request.pageSize;
    }

    if (!Util.isUnset(request.templateType)) {
      query["template_type"] = request.templateType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeTemplates",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/templates`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeTemplatesResponse>(await this.callApi(params, req, runtime), new DescribeTemplatesResponse({}));
  }

  /**
   * An orchestration template defines and describes a group of Kubernetes resources. It declaratively describes the configuration of an application or how an application runs. You can call the DescribeTemplates API operation to query orchestration templates and their detailed information, including access permissions, YAML content, and labels.
   * 
   * @param request - DescribeTemplatesRequest
   * @returns DescribeTemplatesResponse
   */
  async describeTemplates(request: DescribeTemplatesRequest): Promise<DescribeTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeTemplatesWithOptions(request, headers, runtime);
  }

  /**
   * You can call the DescribeTrigger operation to query triggers.
   * 
   * @param request - DescribeTriggerRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTriggerResponse
   */
  async describeTriggerWithOptions(clusterId: string, request: DescribeTriggerRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeTriggerResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    if (!Util.isUnset(request.action)) {
      query["action"] = request.action;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeTrigger",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${OpenApiUtil.getEncodeParam(clusterId)}/triggers`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "array",
    });
    return $tea.cast<DescribeTriggerResponse>(await this.callApi(params, req, runtime), new DescribeTriggerResponse({}));
  }

  /**
   * You can call the DescribeTrigger operation to query triggers.
   * 
   * @param request - DescribeTriggerRequest
   * @returns DescribeTriggerResponse
   */
  async describeTrigger(clusterId: string, request: DescribeTriggerRequest): Promise<DescribeTriggerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeTriggerWithOptions(clusterId, request, headers, runtime);
  }

  /**
   * Queries the Role-Based Access Control (RBAC) permissions that are granted to the current Resource Access Management (RAM) user or RAM role on a Container Service for Kubernetes (ACK) cluster. You can use Kubernetes namespaces to limit users from accessing resources in an ACK cluster. Users that are granted RBAC permissions only on one namespace cannot access resources in other namespaces.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUserClusterNamespacesResponse
   */
  async describeUserClusterNamespacesWithOptions(ClusterId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeUserClusterNamespacesResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DescribeUserClusterNamespaces",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/api/v2/k8s/${OpenApiUtil.getEncodeParam(ClusterId)}/namespaces`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "array",
    });
    return $tea.cast<DescribeUserClusterNamespacesResponse>(await this.callApi(params, req, runtime), new DescribeUserClusterNamespacesResponse({}));
  }

  /**
   * Queries the Role-Based Access Control (RBAC) permissions that are granted to the current Resource Access Management (RAM) user or RAM role on a Container Service for Kubernetes (ACK) cluster. You can use Kubernetes namespaces to limit users from accessing resources in an ACK cluster. Users that are granted RBAC permissions only on one namespace cannot access resources in other namespaces.
   * @returns DescribeUserClusterNamespacesResponse
   */
  async describeUserClusterNamespaces(ClusterId: string): Promise<DescribeUserClusterNamespacesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeUserClusterNamespacesWithOptions(ClusterId, headers, runtime);
  }

  /**
   * In an Container Service for Kubernetes (ACK) cluster, you can create and specify different Resource Access Management (RAM) users or roles to have different access permissions. This ensures access control and resource isolation. You can call the DescribeUserPermission operation to query the permissions that are granted to a RAM user or RAM role on ACK clusters, including the resources that are allowed to access, the scope of the permissions, the predefined role, and the permission source.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUserPermissionResponse
   */
  async describeUserPermissionWithOptions(uid: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeUserPermissionResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DescribeUserPermission",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/permissions/users/${OpenApiUtil.getEncodeParam(uid)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "array",
    });
    return $tea.cast<DescribeUserPermissionResponse>(await this.callApi(params, req, runtime), new DescribeUserPermissionResponse({}));
  }

  /**
   * In an Container Service for Kubernetes (ACK) cluster, you can create and specify different Resource Access Management (RAM) users or roles to have different access permissions. This ensures access control and resource isolation. You can call the DescribeUserPermission operation to query the permissions that are granted to a RAM user or RAM role on ACK clusters, including the resources that are allowed to access, the scope of the permissions, the predefined role, and the permission source.
   * @returns DescribeUserPermissionResponse
   */
  async describeUserPermission(uid: string): Promise<DescribeUserPermissionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeUserPermissionWithOptions(uid, headers, runtime);
  }

  /**
   * Queries quotas related to Container Service for Kubernetes (ACK) clusters, node pools, and nodes. To increase a quota, submit an application in the Quota Center console.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUserQuotaResponse
   */
  async describeUserQuotaWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeUserQuotaResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DescribeUserQuota",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/quota`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeUserQuotaResponse>(await this.callApi(params, req, runtime), new DescribeUserQuotaResponse({}));
  }

  /**
   * Queries quotas related to Container Service for Kubernetes (ACK) clusters, node pools, and nodes. To increase a quota, submit an application in the Quota Center console.
   * @returns DescribeUserQuotaResponse
   */
  async describeUserQuota(): Promise<DescribeUserQuotaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeUserQuotaWithOptions(headers, runtime);
  }

  /**
   * You can call the DescribeWorkflows operation to query all workflows.
   * 
   * @deprecated OpenAPI DescribeWorkflows is deprecated
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeWorkflowsResponse
   */
  // Deprecated
  async describeWorkflowsWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeWorkflowsResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DescribeWorkflows",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/gs/workflows`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeWorkflowsResponse>(await this.callApi(params, req, runtime), new DescribeWorkflowsResponse({}));
  }

  /**
   * You can call the DescribeWorkflows operation to query all workflows.
   * 
   * @deprecated OpenAPI DescribeWorkflows is deprecated
   * @returns DescribeWorkflowsResponse
   */
  // Deprecated
  async describeWorkflows(): Promise<DescribeWorkflowsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeWorkflowsWithOptions(headers, runtime);
  }

  /**
   * You can call the EdgeClusterAddEdgeMachine operation to add a cloud-native box to a Container Service for Kubernetes (ACK) Edge cluster.
   * 
   * @param request - EdgeClusterAddEdgeMachineRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EdgeClusterAddEdgeMachineResponse
   */
  async edgeClusterAddEdgeMachineWithOptions(clusterid: string, edgeMachineid: string, request: EdgeClusterAddEdgeMachineRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<EdgeClusterAddEdgeMachineResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.expired)) {
      body["expired"] = request.expired;
    }

    if (!Util.isUnset(request.nodepoolId)) {
      body["nodepool_id"] = request.nodepoolId;
    }

    if (!Util.isUnset(request.options)) {
      body["options"] = request.options;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "EdgeClusterAddEdgeMachine",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/%5Bclusterid%5D/attachedgemachine/%5Bedge_machineid%5D`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<EdgeClusterAddEdgeMachineResponse>(await this.callApi(params, req, runtime), new EdgeClusterAddEdgeMachineResponse({}));
  }

  /**
   * You can call the EdgeClusterAddEdgeMachine operation to add a cloud-native box to a Container Service for Kubernetes (ACK) Edge cluster.
   * 
   * @param request - EdgeClusterAddEdgeMachineRequest
   * @returns EdgeClusterAddEdgeMachineResponse
   */
  async edgeClusterAddEdgeMachine(clusterid: string, edgeMachineid: string, request: EdgeClusterAddEdgeMachineRequest): Promise<EdgeClusterAddEdgeMachineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.edgeClusterAddEdgeMachineWithOptions(clusterid, edgeMachineid, request, headers, runtime);
  }

  /**
   * Patches node vulnerabilities in a node pool to enhance node security. Cloud Security provided by Alibaba Cloud periodically scans Elastic Compute Service (ECS) instances for vulnerabilities and provides suggestions on how to patch the detected vulnerabilities. Vulnerability patching may require node restarts. Make sure that your cluster has sufficient idle nodes for node draining.
   * 
   * @remarks
   * 1.  The Common Vulnerabilities and Exposures (CVE) patching feature is developed based on Security Center. To use this feature, you must purchase the Security Center Ultimate Edition that supports Container Service for Kubernetes (ACK).
   * 2.  ACK may need to restart nodes to patch certain vulnerabilities. ACK drains a node before the node restarts. Make sure that the ACK cluster has sufficient idle nodes to host the pods evicted from the trained nodes. For example, you can scale out a node pool before you patch vulnerabilities for the nodes in the node pool.
   * 3.  Security Center ensures the compatibility of CVE patches. We recommend that you check the compatibility of a CVE patch with your application before you install the patch. You can pause or cancel a CVE patching task anytime.
   * 4.  CVE patching is a progressive task that consists of multiple batches. After you pause or cancel a CVE patching task, ACK continues to process the dispatched batches. Only the batches that have not been dispatched are paused or canceled.
   * 
   * @param request - FixNodePoolVulsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FixNodePoolVulsResponse
   */
  async fixNodePoolVulsWithOptions(clusterId: string, nodepoolId: string, request: FixNodePoolVulsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<FixNodePoolVulsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.autoRestart)) {
      body["auto_restart"] = request.autoRestart;
    }

    if (!Util.isUnset(request.nodes)) {
      body["nodes"] = request.nodes;
    }

    if (!Util.isUnset(request.rolloutPolicy)) {
      body["rollout_policy"] = request.rolloutPolicy;
    }

    if (!Util.isUnset(request.vuls)) {
      body["vuls"] = request.vuls;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "FixNodePoolVuls",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${OpenApiUtil.getEncodeParam(clusterId)}/nodepools/${OpenApiUtil.getEncodeParam(nodepoolId)}/vuls/fix`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<FixNodePoolVulsResponse>(await this.callApi(params, req, runtime), new FixNodePoolVulsResponse({}));
  }

  /**
   * Patches node vulnerabilities in a node pool to enhance node security. Cloud Security provided by Alibaba Cloud periodically scans Elastic Compute Service (ECS) instances for vulnerabilities and provides suggestions on how to patch the detected vulnerabilities. Vulnerability patching may require node restarts. Make sure that your cluster has sufficient idle nodes for node draining.
   * 
   * @remarks
   * 1.  The Common Vulnerabilities and Exposures (CVE) patching feature is developed based on Security Center. To use this feature, you must purchase the Security Center Ultimate Edition that supports Container Service for Kubernetes (ACK).
   * 2.  ACK may need to restart nodes to patch certain vulnerabilities. ACK drains a node before the node restarts. Make sure that the ACK cluster has sufficient idle nodes to host the pods evicted from the trained nodes. For example, you can scale out a node pool before you patch vulnerabilities for the nodes in the node pool.
   * 3.  Security Center ensures the compatibility of CVE patches. We recommend that you check the compatibility of a CVE patch with your application before you install the patch. You can pause or cancel a CVE patching task anytime.
   * 4.  CVE patching is a progressive task that consists of multiple batches. After you pause or cancel a CVE patching task, ACK continues to process the dispatched batches. Only the batches that have not been dispatched are paused or canceled.
   * 
   * @param request - FixNodePoolVulsRequest
   * @returns FixNodePoolVulsResponse
   */
  async fixNodePoolVuls(clusterId: string, nodepoolId: string, request: FixNodePoolVulsRequest): Promise<FixNodePoolVulsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.fixNodePoolVulsWithOptions(clusterId, nodepoolId, request, headers, runtime);
  }

  /**
   * You can call the GetClusterAddonInstance operation to query the information of a component instance in a cluster, including the version, configurations, and log status of the component instance.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetClusterAddonInstanceResponse
   */
  async getClusterAddonInstanceWithOptions(clusterId: string, instanceName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetClusterAddonInstanceResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetClusterAddonInstance",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${OpenApiUtil.getEncodeParam(clusterId)}/addon_instances/${OpenApiUtil.getEncodeParam(instanceName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetClusterAddonInstanceResponse>(await this.callApi(params, req, runtime), new GetClusterAddonInstanceResponse({}));
  }

  /**
   * You can call the GetClusterAddonInstance operation to query the information of a component instance in a cluster, including the version, configurations, and log status of the component instance.
   * @returns GetClusterAddonInstanceResponse
   */
  async getClusterAddonInstance(clusterId: string, instanceName: string): Promise<GetClusterAddonInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getClusterAddonInstanceWithOptions(clusterId, instanceName, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetClusterAuditProjectResponse
   */
  async getClusterAuditProjectWithOptions(clusterid: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetClusterAuditProjectResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetClusterAuditProject",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${OpenApiUtil.getEncodeParam(clusterid)}/audit`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetClusterAuditProjectResponse>(await this.callApi(params, req, runtime), new GetClusterAuditProjectResponse({}));
  }

  /**
   * @returns GetClusterAuditProjectResponse
   */
  async getClusterAuditProject(clusterid: string): Promise<GetClusterAuditProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getClusterAuditProjectWithOptions(clusterid, headers, runtime);
  }

  /**
   * Queries a cluster check task by cluster ID and task ID. You can view the status, check items, creation time, and end time of the task. Container Intelligence Service (CIS) provides a variety of Kubernetes cluster check features, including cluster update check, cluster migration check, component installation check, component update check, and node pool check.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetClusterCheckResponse
   */
  async getClusterCheckWithOptions(clusterId: string, checkId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetClusterCheckResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetClusterCheck",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${OpenApiUtil.getEncodeParam(clusterId)}/checks/${OpenApiUtil.getEncodeParam(checkId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetClusterCheckResponse>(await this.callApi(params, req, runtime), new GetClusterCheckResponse({}));
  }

  /**
   * Queries a cluster check task by cluster ID and task ID. You can view the status, check items, creation time, and end time of the task. Container Intelligence Service (CIS) provides a variety of Kubernetes cluster check features, including cluster update check, cluster migration check, component installation check, component update check, and node pool check.
   * @returns GetClusterCheckResponse
   */
  async getClusterCheck(clusterId: string, checkId: string): Promise<GetClusterCheckResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getClusterCheckWithOptions(clusterId, checkId, headers, runtime);
  }

  /**
   * 获取集群诊断检查项
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetClusterDiagnosisCheckItemsResponse
   */
  async getClusterDiagnosisCheckItemsWithOptions(clusterId: string, diagnosisId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetClusterDiagnosisCheckItemsResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetClusterDiagnosisCheckItems",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${OpenApiUtil.getEncodeParam(clusterId)}/diagnosis/${OpenApiUtil.getEncodeParam(diagnosisId)}/check_items`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetClusterDiagnosisCheckItemsResponse>(await this.callApi(params, req, runtime), new GetClusterDiagnosisCheckItemsResponse({}));
  }

  /**
   * 获取集群诊断检查项
   * @returns GetClusterDiagnosisCheckItemsResponse
   */
  async getClusterDiagnosisCheckItems(clusterId: string, diagnosisId: string): Promise<GetClusterDiagnosisCheckItemsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getClusterDiagnosisCheckItemsWithOptions(clusterId, diagnosisId, headers, runtime);
  }

  /**
   * 获取集群诊断结果
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetClusterDiagnosisResultResponse
   */
  async getClusterDiagnosisResultWithOptions(clusterId: string, diagnosisId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetClusterDiagnosisResultResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetClusterDiagnosisResult",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${OpenApiUtil.getEncodeParam(clusterId)}/diagnosis/${OpenApiUtil.getEncodeParam(diagnosisId)}/result`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetClusterDiagnosisResultResponse>(await this.callApi(params, req, runtime), new GetClusterDiagnosisResultResponse({}));
  }

  /**
   * 获取集群诊断结果
   * @returns GetClusterDiagnosisResultResponse
   */
  async getClusterDiagnosisResult(clusterId: string, diagnosisId: string): Promise<GetClusterDiagnosisResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getClusterDiagnosisResultWithOptions(clusterId, diagnosisId, headers, runtime);
  }

  /**
   * You can call the GetKubernetesTrigger operationto query the triggers of an application by application name.
   * 
   * @param request - GetKubernetesTriggerRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetKubernetesTriggerResponse
   */
  async getKubernetesTriggerWithOptions(ClusterId: string, request: GetKubernetesTriggerRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetKubernetesTriggerResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    if (!Util.isUnset(request.action)) {
      query["action"] = request.action;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetKubernetesTrigger",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/triggers/${OpenApiUtil.getEncodeParam(ClusterId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "array",
    });
    return $tea.cast<GetKubernetesTriggerResponse>(await this.callApi(params, req, runtime), new GetKubernetesTriggerResponse({}));
  }

  /**
   * You can call the GetKubernetesTrigger operationto query the triggers of an application by application name.
   * 
   * @param request - GetKubernetesTriggerRequest
   * @returns GetKubernetesTriggerResponse
   */
  async getKubernetesTrigger(ClusterId: string, request: GetKubernetesTriggerRequest): Promise<GetKubernetesTriggerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getKubernetesTriggerWithOptions(ClusterId, request, headers, runtime);
  }

  /**
   * You can call the GetUpgradeStatus operation to query the update progress of a cluster by cluster ID.
   * 
   * @deprecated OpenAPI GetUpgradeStatus is deprecated
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUpgradeStatusResponse
   */
  // Deprecated
  async getUpgradeStatusWithOptions(ClusterId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetUpgradeStatusResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetUpgradeStatus",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/api/v2/clusters/${OpenApiUtil.getEncodeParam(ClusterId)}/upgrade/status`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetUpgradeStatusResponse>(await this.callApi(params, req, runtime), new GetUpgradeStatusResponse({}));
  }

  /**
   * You can call the GetUpgradeStatus operation to query the update progress of a cluster by cluster ID.
   * 
   * @deprecated OpenAPI GetUpgradeStatus is deprecated
   * @returns GetUpgradeStatusResponse
   */
  // Deprecated
  async getUpgradeStatus(ClusterId: string): Promise<GetUpgradeStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getUpgradeStatusWithOptions(ClusterId, headers, runtime);
  }

  /**
   * Updates the role-based access control (RBAC) permissions of a Resource Access Management (RAM) user or RAM role. By default, you do not have the RBAC permissions on a Container Service for Kubernetes (ACK) cluster if you are not the cluster owner or you are not using an Alibaba Cloud account. You can call this operation to specify the resources that can be accessed, permission scope, and predefined roles. This helps you better manage the access control on resources in ACK clusters.
   * 
   * @remarks
   * *Precautions**:
   * *   Make sure that you have attached a RAM policy that has at least the read-only permissions on the cluster to the RAM user or RAM role in the RAM console. Otherwise, the `ErrorRamPolicyConfig` error code is returned when you call the operation. For more information about how to authorize a RAM user by attaching RAM policies, see [Create a custom RAM policy](https://help.aliyun.com/document_detail/86485.html).
   * *   If you use a RAM user to call the operation, make sure that the RAM user has the permissions to modify the permissions of other RAM users or RAM roles. Otherwise, the `StatusForbidden` or `ForbiddenGrantPermissions` error code is returned when you call the operation. For more information, see [Use a RAM user to grant RBAC permissions to other RAM users](https://help.aliyun.com/document_detail/119035.html).
   * *   If you update full permissions, the existing permissions of the RAM user or RAM role on the cluster are overwritten. You must specify all the permissions that you want to grant to the RAM user or RAM role in the request parameters when you call the operation.
   * 
   * @param request - GrantPermissionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GrantPermissionsResponse
   */
  async grantPermissionsWithOptions(uid: string, request: GrantPermissionsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GrantPermissionsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: Util.toArray(request.body),
    });
    let params = new $OpenApi.Params({
      action: "GrantPermissions",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/permissions/users/${OpenApiUtil.getEncodeParam(uid)}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<GrantPermissionsResponse>(await this.callApi(params, req, runtime), new GrantPermissionsResponse({}));
  }

  /**
   * Updates the role-based access control (RBAC) permissions of a Resource Access Management (RAM) user or RAM role. By default, you do not have the RBAC permissions on a Container Service for Kubernetes (ACK) cluster if you are not the cluster owner or you are not using an Alibaba Cloud account. You can call this operation to specify the resources that can be accessed, permission scope, and predefined roles. This helps you better manage the access control on resources in ACK clusters.
   * 
   * @remarks
   * *Precautions**:
   * *   Make sure that you have attached a RAM policy that has at least the read-only permissions on the cluster to the RAM user or RAM role in the RAM console. Otherwise, the `ErrorRamPolicyConfig` error code is returned when you call the operation. For more information about how to authorize a RAM user by attaching RAM policies, see [Create a custom RAM policy](https://help.aliyun.com/document_detail/86485.html).
   * *   If you use a RAM user to call the operation, make sure that the RAM user has the permissions to modify the permissions of other RAM users or RAM roles. Otherwise, the `StatusForbidden` or `ForbiddenGrantPermissions` error code is returned when you call the operation. For more information, see [Use a RAM user to grant RBAC permissions to other RAM users](https://help.aliyun.com/document_detail/119035.html).
   * *   If you update full permissions, the existing permissions of the RAM user or RAM role on the cluster are overwritten. You must specify all the permissions that you want to grant to the RAM user or RAM role in the request parameters when you call the operation.
   * 
   * @param request - GrantPermissionsRequest
   * @returns GrantPermissionsResponse
   */
  async grantPermissions(uid: string, request: GrantPermissionsRequest): Promise<GrantPermissionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.grantPermissionsWithOptions(uid, request, headers, runtime);
  }

  /**
   * Installs a component by specifying the name and version of the component. To enhance Kubernetes capabilities, you can install a variety of components in Container Service for Kubernetes (ACK) clusters, such as fully-managed core components and application, logging and monitoring, network, storage, and security group components.
   * 
   * @param request - InstallClusterAddonsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InstallClusterAddonsResponse
   */
  async installClusterAddonsWithOptions(ClusterId: string, request: InstallClusterAddonsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<InstallClusterAddonsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: Util.toArray(request.body),
    });
    let params = new $OpenApi.Params({
      action: "InstallClusterAddons",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${OpenApiUtil.getEncodeParam(ClusterId)}/components/install`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<InstallClusterAddonsResponse>(await this.callApi(params, req, runtime), new InstallClusterAddonsResponse({}));
  }

  /**
   * Installs a component by specifying the name and version of the component. To enhance Kubernetes capabilities, you can install a variety of components in Container Service for Kubernetes (ACK) clusters, such as fully-managed core components and application, logging and monitoring, network, storage, and security group components.
   * 
   * @param request - InstallClusterAddonsRequest
   * @returns InstallClusterAddonsResponse
   */
  async installClusterAddons(ClusterId: string, request: InstallClusterAddonsRequest): Promise<InstallClusterAddonsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.installClusterAddonsWithOptions(ClusterId, request, headers, runtime);
  }

  /**
   * You can call the ListAddons operation to query all available components in a cluster. You can query all available components in a cluster by specifying the ID of the cluster. You can also specify parameters such as the region, cluster type, cluster subtype (profile), cluster specification, and cluster version to get a list of available components in clusters that meet the conditions.
   * 
   * @param request - ListAddonsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAddonsResponse
   */
  async listAddonsWithOptions(request: ListAddonsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListAddonsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clusterId)) {
      query["cluster_id"] = request.clusterId;
    }

    if (!Util.isUnset(request.clusterSpec)) {
      query["cluster_spec"] = request.clusterSpec;
    }

    if (!Util.isUnset(request.clusterType)) {
      query["cluster_type"] = request.clusterType;
    }

    if (!Util.isUnset(request.clusterVersion)) {
      query["cluster_version"] = request.clusterVersion;
    }

    if (!Util.isUnset(request.profile)) {
      query["profile"] = request.profile;
    }

    if (!Util.isUnset(request.regionId)) {
      query["region_id"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAddons",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/addons`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListAddonsResponse>(await this.callApi(params, req, runtime), new ListAddonsResponse({}));
  }

  /**
   * You can call the ListAddons operation to query all available components in a cluster. You can query all available components in a cluster by specifying the ID of the cluster. You can also specify parameters such as the region, cluster type, cluster subtype (profile), cluster specification, and cluster version to get a list of available components in clusters that meet the conditions.
   * 
   * @param request - ListAddonsRequest
   * @returns ListAddonsResponse
   */
  async listAddons(request: ListAddonsRequest): Promise<ListAddonsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAddonsWithOptions(request, headers, runtime);
  }

  /**
   * You can call the ListClusterAddonInstances operation to query information about the components that are installed in a cluster.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListClusterAddonInstancesResponse
   */
  async listClusterAddonInstancesWithOptions(clusterId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListClusterAddonInstancesResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ListClusterAddonInstances",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${OpenApiUtil.getEncodeParam(clusterId)}/addon_instances`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListClusterAddonInstancesResponse>(await this.callApi(params, req, runtime), new ListClusterAddonInstancesResponse({}));
  }

  /**
   * You can call the ListClusterAddonInstances operation to query information about the components that are installed in a cluster.
   * @returns ListClusterAddonInstancesResponse
   */
  async listClusterAddonInstances(clusterId: string): Promise<ListClusterAddonInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listClusterAddonInstancesWithOptions(clusterId, headers, runtime);
  }

  /**
   * You can call the ListClusterChecks operation to query all the cluster check results of a cluster.
   * 
   * @param request - ListClusterChecksRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListClusterChecksResponse
   */
  async listClusterChecksWithOptions(clusterId: string, request: ListClusterChecksRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListClusterChecksResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.target)) {
      query["target"] = request.target;
    }

    if (!Util.isUnset(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListClusterChecks",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${OpenApiUtil.getEncodeParam(clusterId)}/checks`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListClusterChecksResponse>(await this.callApi(params, req, runtime), new ListClusterChecksResponse({}));
  }

  /**
   * You can call the ListClusterChecks operation to query all the cluster check results of a cluster.
   * 
   * @param request - ListClusterChecksRequest
   * @returns ListClusterChecksResponse
   */
  async listClusterChecks(clusterId: string, request: ListClusterChecksRequest): Promise<ListClusterChecksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listClusterChecksWithOptions(clusterId, request, headers, runtime);
  }

  /**
   * You can call the ListClusterKubeconfigStates operation to query the kubeconfig files that are issued to users for the current cluster and the status of the kubeconfig files.
   * 
   * @remarks
   * > 
   * *   To call this operation, make sure that you have ram:ListUsers and ram:ListRoles permissions.
   * *   To call this operation, make sure that you have the AliyunCSFullAccess permissions.
   * 
   * @param request - ListClusterKubeconfigStatesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListClusterKubeconfigStatesResponse
   */
  async listClusterKubeconfigStatesWithOptions(ClusterId: string, request: ListClusterKubeconfigStatesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListClusterKubeconfigStatesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListClusterKubeconfigStates",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${OpenApiUtil.getEncodeParam(ClusterId)}/kubeconfig/states`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListClusterKubeconfigStatesResponse>(await this.callApi(params, req, runtime), new ListClusterKubeconfigStatesResponse({}));
  }

  /**
   * You can call the ListClusterKubeconfigStates operation to query the kubeconfig files that are issued to users for the current cluster and the status of the kubeconfig files.
   * 
   * @remarks
   * > 
   * *   To call this operation, make sure that you have ram:ListUsers and ram:ListRoles permissions.
   * *   To call this operation, make sure that you have the AliyunCSFullAccess permissions.
   * 
   * @param request - ListClusterKubeconfigStatesRequest
   * @returns ListClusterKubeconfigStatesResponse
   */
  async listClusterKubeconfigStates(ClusterId: string, request: ListClusterKubeconfigStatesRequest): Promise<ListClusterKubeconfigStatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listClusterKubeconfigStatesWithOptions(ClusterId, request, headers, runtime);
  }

  /**
   * 获取自动运维执行计划列表
   * 
   * @param request - ListOperationPlansRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListOperationPlansResponse
   */
  async listOperationPlansWithOptions(request: ListOperationPlansRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListOperationPlansResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clusterId)) {
      query["cluster_id"] = request.clusterId;
    }

    if (!Util.isUnset(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListOperationPlans",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/operation/plans`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListOperationPlansResponse>(await this.callApi(params, req, runtime), new ListOperationPlansResponse({}));
  }

  /**
   * 获取自动运维执行计划列表
   * 
   * @param request - ListOperationPlansRequest
   * @returns ListOperationPlansResponse
   */
  async listOperationPlans(request: ListOperationPlansRequest): Promise<ListOperationPlansResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listOperationPlansWithOptions(request, headers, runtime);
  }

  /**
   * Queries resource labels and the detailed information, such as the key-value pairs of the labels and the clusters to which the labels are added. You can use labels to classify and manage Container Service for Kubernetes (ACK) clusters in order to meet monitoring, cost analysis, and tenant isolation requirements.
   * 
   * @param tmpReq - ListTagResourcesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagResourcesResponse
   */
  async listTagResourcesWithOptions(tmpReq: ListTagResourcesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListTagResourcesResponse> {
    Util.validateModel(tmpReq);
    let request = new ListTagResourcesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.resourceIds)) {
      request.resourceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceIds, "resource_ids", "json");
    }

    if (!Util.isUnset(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "tags", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.nextToken)) {
      query["next_token"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["region_id"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceIdsShrink)) {
      query["resource_ids"] = request.resourceIdsShrink;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["resource_type"] = request.resourceType;
    }

    if (!Util.isUnset(request.tagsShrink)) {
      query["tags"] = request.tagsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTagResources",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/tags`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListTagResourcesResponse>(await this.callApi(params, req, runtime), new ListTagResourcesResponse({}));
  }

  /**
   * Queries resource labels and the detailed information, such as the key-value pairs of the labels and the clusters to which the labels are added. You can use labels to classify and manage Container Service for Kubernetes (ACK) clusters in order to meet monitoring, cost analysis, and tenant isolation requirements.
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTagResourcesWithOptions(request, headers, runtime);
  }

  /**
   * You can call the ListUserKubeConfigStates operation to query the status of the kubeconfig files of all clusters managed by the current user.
   * 
   * @remarks
   * >  To call this operation, make sure that you have the AliyunCSFullAccess permissions.
   * 
   * @param request - ListUserKubeConfigStatesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUserKubeConfigStatesResponse
   */
  async listUserKubeConfigStatesWithOptions(Uid: string, request: ListUserKubeConfigStatesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListUserKubeConfigStatesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["page_number"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["page_size"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListUserKubeConfigStates",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/users/${OpenApiUtil.getEncodeParam(Uid)}/kubeconfig/states`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListUserKubeConfigStatesResponse>(await this.callApi(params, req, runtime), new ListUserKubeConfigStatesResponse({}));
  }

  /**
   * You can call the ListUserKubeConfigStates operation to query the status of the kubeconfig files of all clusters managed by the current user.
   * 
   * @remarks
   * >  To call this operation, make sure that you have the AliyunCSFullAccess permissions.
   * 
   * @param request - ListUserKubeConfigStatesRequest
   * @returns ListUserKubeConfigStatesResponse
   */
  async listUserKubeConfigStates(Uid: string, request: ListUserKubeConfigStatesRequest): Promise<ListUserKubeConfigStatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listUserKubeConfigStatesWithOptions(Uid, request, headers, runtime);
  }

  /**
   * Container Service for Kubernetes (ACK) Pro clusters are developed based on ACK Basic clusters. ACK Pro clusters provide all benefits of ACK managed clusters, such as fully-managed control planes and control plane high availability. In addition, ACK Pro clusters provide you with enhanced reliability, security, and schedulability. ACK Pro clusters are covered by the SLA that supports compensation clauses. ACK Pro clusters are suitable for large-scale businesses that require high stability and security in production environments. We recommend that you migrate from ACK Basic clusters to ACK Pro clusters.
   * 
   * @param request - MigrateClusterRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MigrateClusterResponse
   */
  async migrateClusterWithOptions(clusterId: string, request: MigrateClusterRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<MigrateClusterResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.ossBucketEndpoint)) {
      body["oss_bucket_endpoint"] = request.ossBucketEndpoint;
    }

    if (!Util.isUnset(request.ossBucketName)) {
      body["oss_bucket_name"] = request.ossBucketName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "MigrateCluster",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${OpenApiUtil.getEncodeParam(clusterId)}/migrate`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<MigrateClusterResponse>(await this.callApi(params, req, runtime), new MigrateClusterResponse({}));
  }

  /**
   * Container Service for Kubernetes (ACK) Pro clusters are developed based on ACK Basic clusters. ACK Pro clusters provide all benefits of ACK managed clusters, such as fully-managed control planes and control plane high availability. In addition, ACK Pro clusters provide you with enhanced reliability, security, and schedulability. ACK Pro clusters are covered by the SLA that supports compensation clauses. ACK Pro clusters are suitable for large-scale businesses that require high stability and security in production environments. We recommend that you migrate from ACK Basic clusters to ACK Pro clusters.
   * 
   * @param request - MigrateClusterRequest
   * @returns MigrateClusterResponse
   */
  async migrateCluster(clusterId: string, request: MigrateClusterRequest): Promise<MigrateClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.migrateClusterWithOptions(clusterId, request, headers, runtime);
  }

  /**
   * You can call the ModifyCluster operation to modify the cluster configurations by cluster ID.
   * 
   * @param request - ModifyClusterRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyClusterResponse
   */
  async modifyClusterWithOptions(ClusterId: string, request: ModifyClusterRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ModifyClusterResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessControlList)) {
      body["access_control_list"] = request.accessControlList;
    }

    if (!Util.isUnset(request.apiServerCustomCertSans)) {
      body["api_server_custom_cert_sans"] = request.apiServerCustomCertSans;
    }

    if (!Util.isUnset(request.apiServerEip)) {
      body["api_server_eip"] = request.apiServerEip;
    }

    if (!Util.isUnset(request.apiServerEipId)) {
      body["api_server_eip_id"] = request.apiServerEipId;
    }

    if (!Util.isUnset(request.clusterName)) {
      body["cluster_name"] = request.clusterName;
    }

    if (!Util.isUnset(request.deletionProtection)) {
      body["deletion_protection"] = request.deletionProtection;
    }

    if (!Util.isUnset(request.enableRrsa)) {
      body["enable_rrsa"] = request.enableRrsa;
    }

    if (!Util.isUnset(request.ingressDomainRebinding)) {
      body["ingress_domain_rebinding"] = request.ingressDomainRebinding;
    }

    if (!Util.isUnset(request.ingressLoadbalancerId)) {
      body["ingress_loadbalancer_id"] = request.ingressLoadbalancerId;
    }

    if (!Util.isUnset(request.instanceDeletionProtection)) {
      body["instance_deletion_protection"] = request.instanceDeletionProtection;
    }

    if (!Util.isUnset(request.maintenanceWindow)) {
      body["maintenance_window"] = request.maintenanceWindow;
    }

    if (!Util.isUnset(request.operationPolicy)) {
      body["operation_policy"] = request.operationPolicy;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      body["resource_group_id"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.systemEventsLogging)) {
      body["system_events_logging"] = request.systemEventsLogging;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ModifyCluster",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/api/v2/clusters/${OpenApiUtil.getEncodeParam(ClusterId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ModifyClusterResponse>(await this.callApi(params, req, runtime), new ModifyClusterResponse({}));
  }

  /**
   * You can call the ModifyCluster operation to modify the cluster configurations by cluster ID.
   * 
   * @param request - ModifyClusterRequest
   * @returns ModifyClusterResponse
   */
  async modifyCluster(ClusterId: string, request: ModifyClusterRequest): Promise<ModifyClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyClusterWithOptions(ClusterId, request, headers, runtime);
  }

  /**
   * Modifies the configuration of a cluster component. This operation may affect your businesses. We recommend that you assess the impact, back up data, and perform the operation during off-peak hours.
   * 
   * @remarks
   * You can use this API operation to modify the components in a Container Service for Kubernetes (ACK) cluster or the control plane components in an ACK Pro cluster.
   * *   To query the customizable parameters of a component, call the `DescribeClusterAddonMetadata` API operation. For more information, see [Query the metadata of a specified component version](https://www.alibabacloud.com/help/zh/container-service-for-kubernetes/latest/query).
   * *   For more information about the customizable parameters of control plane components in ACK Pro clusters, see [Customize the parameters of control plane components in ACK Pro clusters](https://www.alibabacloud.com/help/zh/container-service-for-kubernetes/latest/customize-control-plane-parameters-for-a-professional-kubernetes-cluster).
   * After you call this operation, the component may be redeployed and restarted. We recommend that you assess the impact before you call this operation.
   * 
   * @param request - ModifyClusterAddonRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyClusterAddonResponse
   */
  async modifyClusterAddonWithOptions(clusterId: string, componentId: string, request: ModifyClusterAddonRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ModifyClusterAddonResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.config)) {
      body["config"] = request.config;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ModifyClusterAddon",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${OpenApiUtil.getEncodeParam(clusterId)}/components/${OpenApiUtil.getEncodeParam(componentId)}/config`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<ModifyClusterAddonResponse>(await this.callApi(params, req, runtime), new ModifyClusterAddonResponse({}));
  }

  /**
   * Modifies the configuration of a cluster component. This operation may affect your businesses. We recommend that you assess the impact, back up data, and perform the operation during off-peak hours.
   * 
   * @remarks
   * You can use this API operation to modify the components in a Container Service for Kubernetes (ACK) cluster or the control plane components in an ACK Pro cluster.
   * *   To query the customizable parameters of a component, call the `DescribeClusterAddonMetadata` API operation. For more information, see [Query the metadata of a specified component version](https://www.alibabacloud.com/help/zh/container-service-for-kubernetes/latest/query).
   * *   For more information about the customizable parameters of control plane components in ACK Pro clusters, see [Customize the parameters of control plane components in ACK Pro clusters](https://www.alibabacloud.com/help/zh/container-service-for-kubernetes/latest/customize-control-plane-parameters-for-a-professional-kubernetes-cluster).
   * After you call this operation, the component may be redeployed and restarted. We recommend that you assess the impact before you call this operation.
   * 
   * @param request - ModifyClusterAddonRequest
   * @returns ModifyClusterAddonResponse
   */
  async modifyClusterAddon(clusterId: string, componentId: string, request: ModifyClusterAddonRequest): Promise<ModifyClusterAddonResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyClusterAddonWithOptions(clusterId, componentId, request, headers, runtime);
  }

  /**
   * This API operation applies only to Container Service for Kubernetes (ACK) managed clusters.
   * 
   * @param request - ModifyClusterConfigurationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyClusterConfigurationResponse
   */
  async modifyClusterConfigurationWithOptions(ClusterId: string, request: ModifyClusterConfigurationRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ModifyClusterConfigurationResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.customizeConfig)) {
      body["customize_config"] = request.customizeConfig;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ModifyClusterConfiguration",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${OpenApiUtil.getEncodeParam(ClusterId)}/configuration`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<ModifyClusterConfigurationResponse>(await this.callApi(params, req, runtime), new ModifyClusterConfigurationResponse({}));
  }

  /**
   * This API operation applies only to Container Service for Kubernetes (ACK) managed clusters.
   * 
   * @param request - ModifyClusterConfigurationRequest
   * @returns ModifyClusterConfigurationResponse
   */
  async modifyClusterConfiguration(ClusterId: string, request: ModifyClusterConfigurationRequest): Promise<ModifyClusterConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyClusterConfigurationWithOptions(ClusterId, request, headers, runtime);
  }

  /**
   * You can call the ModifyClusterNodePool operation to modify the configuration of a node pool with the specified node pool ID.
   * 
   * @param request - ModifyClusterNodePoolRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyClusterNodePoolResponse
   */
  async modifyClusterNodePoolWithOptions(ClusterId: string, NodepoolId: string, request: ModifyClusterNodePoolRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ModifyClusterNodePoolResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.autoScaling)) {
      body["auto_scaling"] = request.autoScaling;
    }

    if (!Util.isUnset(request.concurrency)) {
      body["concurrency"] = request.concurrency;
    }

    if (!Util.isUnset(request.kubernetesConfig)) {
      body["kubernetes_config"] = request.kubernetesConfig;
    }

    if (!Util.isUnset(request.management)) {
      body["management"] = request.management;
    }

    if (!Util.isUnset(request.nodepoolInfo)) {
      body["nodepool_info"] = request.nodepoolInfo;
    }

    if (!Util.isUnset(request.scalingGroup)) {
      body["scaling_group"] = request.scalingGroup;
    }

    if (!Util.isUnset(request.teeConfig)) {
      body["tee_config"] = request.teeConfig;
    }

    if (!Util.isUnset(request.updateNodes)) {
      body["update_nodes"] = request.updateNodes;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ModifyClusterNodePool",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${OpenApiUtil.getEncodeParam(ClusterId)}/nodepools/${OpenApiUtil.getEncodeParam(NodepoolId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ModifyClusterNodePoolResponse>(await this.callApi(params, req, runtime), new ModifyClusterNodePoolResponse({}));
  }

  /**
   * You can call the ModifyClusterNodePool operation to modify the configuration of a node pool with the specified node pool ID.
   * 
   * @param request - ModifyClusterNodePoolRequest
   * @returns ModifyClusterNodePoolResponse
   */
  async modifyClusterNodePool(ClusterId: string, NodepoolId: string, request: ModifyClusterNodePoolRequest): Promise<ModifyClusterNodePoolResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyClusterNodePoolWithOptions(ClusterId, NodepoolId, request, headers, runtime);
  }

  /**
   * Modifies the labels of a Container Service for Kubernetes (ACK) cluster. You can use labels (key-value pairs) to classify and manage ACK clusters in order to meet monitoring, cost analysis, and tenant isolation requirements.
   * 
   * @param request - ModifyClusterTagsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyClusterTagsResponse
   */
  async modifyClusterTagsWithOptions(ClusterId: string, request: ModifyClusterTagsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ModifyClusterTagsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: Util.toArray(request.body),
    });
    let params = new $OpenApi.Params({
      action: "ModifyClusterTags",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${OpenApiUtil.getEncodeParam(ClusterId)}/tags`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<ModifyClusterTagsResponse>(await this.callApi(params, req, runtime), new ModifyClusterTagsResponse({}));
  }

  /**
   * Modifies the labels of a Container Service for Kubernetes (ACK) cluster. You can use labels (key-value pairs) to classify and manage ACK clusters in order to meet monitoring, cost analysis, and tenant isolation requirements.
   * 
   * @param request - ModifyClusterTagsRequest
   * @returns ModifyClusterTagsResponse
   */
  async modifyClusterTags(ClusterId: string, request: ModifyClusterTagsRequest): Promise<ModifyClusterTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyClusterTagsWithOptions(ClusterId, request, headers, runtime);
  }

  /**
   * Modifies the configuration of a node pool, such as the kubelet configuration and node rolling update configuration. After you modify the node pool configuration, nodes are batch updated and the kubelet on each node is restarted. This may adversely affect the nodes and workloads. We recommend that you perform this operation during off-peak hours.
   * 
   * @remarks
   * >  Container Service for Kubernetes (ACK) allows you to modify the kubelet configuration of nodes in a node pool. After you modify the kubelet configuration, the new configuration immediately takes effect on existing nodes in the node pool and is automatically applied to newly added nodes.
   * 
   * @param request - ModifyNodePoolNodeConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyNodePoolNodeConfigResponse
   */
  async modifyNodePoolNodeConfigWithOptions(ClusterId: string, NodepoolId: string, request: ModifyNodePoolNodeConfigRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ModifyNodePoolNodeConfigResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.kubeletConfig)) {
      body["kubelet_config"] = request.kubeletConfig;
    }

    if (!Util.isUnset(request.osConfig)) {
      body["os_config"] = request.osConfig;
    }

    if (!Util.isUnset(request.rollingPolicy)) {
      body["rolling_policy"] = request.rollingPolicy;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ModifyNodePoolNodeConfig",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${OpenApiUtil.getEncodeParam(ClusterId)}/nodepools/${OpenApiUtil.getEncodeParam(NodepoolId)}/node_config`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ModifyNodePoolNodeConfigResponse>(await this.callApi(params, req, runtime), new ModifyNodePoolNodeConfigResponse({}));
  }

  /**
   * Modifies the configuration of a node pool, such as the kubelet configuration and node rolling update configuration. After you modify the node pool configuration, nodes are batch updated and the kubelet on each node is restarted. This may adversely affect the nodes and workloads. We recommend that you perform this operation during off-peak hours.
   * 
   * @remarks
   * >  Container Service for Kubernetes (ACK) allows you to modify the kubelet configuration of nodes in a node pool. After you modify the kubelet configuration, the new configuration immediately takes effect on existing nodes in the node pool and is automatically applied to newly added nodes.
   * 
   * @param request - ModifyNodePoolNodeConfigRequest
   * @returns ModifyNodePoolNodeConfigResponse
   */
  async modifyNodePoolNodeConfig(ClusterId: string, NodepoolId: string, request: ModifyNodePoolNodeConfigRequest): Promise<ModifyNodePoolNodeConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyNodePoolNodeConfigWithOptions(ClusterId, NodepoolId, request, headers, runtime);
  }

  /**
   * Updates a policy in a specific Container Service for Kubernetes (ACK) cluster. You can modify the action of the policy such as alerting or denying and namespaces to which the policy applies.
   * 
   * @param request - ModifyPolicyInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyPolicyInstanceResponse
   */
  async modifyPolicyInstanceWithOptions(clusterId: string, policyName: string, request: ModifyPolicyInstanceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ModifyPolicyInstanceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.action)) {
      body["action"] = request.action;
    }

    if (!Util.isUnset(request.instanceName)) {
      body["instance_name"] = request.instanceName;
    }

    if (!Util.isUnset(request.namespaces)) {
      body["namespaces"] = request.namespaces;
    }

    if (!Util.isUnset(request.parameters)) {
      body["parameters"] = request.parameters;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ModifyPolicyInstance",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${OpenApiUtil.getEncodeParam(clusterId)}/policies/${OpenApiUtil.getEncodeParam(policyName)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ModifyPolicyInstanceResponse>(await this.callApi(params, req, runtime), new ModifyPolicyInstanceResponse({}));
  }

  /**
   * Updates a policy in a specific Container Service for Kubernetes (ACK) cluster. You can modify the action of the policy such as alerting or denying and namespaces to which the policy applies.
   * 
   * @param request - ModifyPolicyInstanceRequest
   * @returns ModifyPolicyInstanceResponse
   */
  async modifyPolicyInstance(clusterId: string, policyName: string, request: ModifyPolicyInstanceRequest): Promise<ModifyPolicyInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyPolicyInstanceWithOptions(clusterId, policyName, request, headers, runtime);
  }

  /**
   * You can call the OpenAckService operation to activate Container Service for Kubernetes (ACK).
   * 
   * @remarks
   *   You can activate ACK by using Alibaba Cloud accounts.
   * *   To activate ACK by using RAM users, you need to grant the AdministratorAccess permission to the RAM users.
   * 
   * @param request - OpenAckServiceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OpenAckServiceResponse
   */
  async openAckServiceWithOptions(request: OpenAckServiceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<OpenAckServiceResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "OpenAckService",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/service/open`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<OpenAckServiceResponse>(await this.callApi(params, req, runtime), new OpenAckServiceResponse({}));
  }

  /**
   * You can call the OpenAckService operation to activate Container Service for Kubernetes (ACK).
   * 
   * @remarks
   *   You can activate ACK by using Alibaba Cloud accounts.
   * *   To activate ACK by using RAM users, you need to grant the AdministratorAccess permission to the RAM users.
   * 
   * @param request - OpenAckServiceRequest
   * @returns OpenAckServiceResponse
   */
  async openAckService(request: OpenAckServiceRequest): Promise<OpenAckServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.openAckServiceWithOptions(request, headers, runtime);
  }

  /**
   * You can call the PauseClusterUpgrade operation to pause the update of a Container Service for Kubernetes (ACK) cluster.
   * 
   * @deprecated OpenAPI PauseClusterUpgrade is deprecated
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PauseClusterUpgradeResponse
   */
  // Deprecated
  async pauseClusterUpgradeWithOptions(ClusterId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<PauseClusterUpgradeResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "PauseClusterUpgrade",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/api/v2/clusters/${OpenApiUtil.getEncodeParam(ClusterId)}/upgrade/pause`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<PauseClusterUpgradeResponse>(await this.callApi(params, req, runtime), new PauseClusterUpgradeResponse({}));
  }

  /**
   * You can call the PauseClusterUpgrade operation to pause the update of a Container Service for Kubernetes (ACK) cluster.
   * 
   * @deprecated OpenAPI PauseClusterUpgrade is deprecated
   * @returns PauseClusterUpgradeResponse
   */
  // Deprecated
  async pauseClusterUpgrade(ClusterId: string): Promise<PauseClusterUpgradeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.pauseClusterUpgradeWithOptions(ClusterId, headers, runtime);
  }

  /**
   * You can call the PauseComponentUpgrade operation to pause the update of a component.
   * 
   * @deprecated OpenAPI PauseComponentUpgrade is deprecated
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PauseComponentUpgradeResponse
   */
  // Deprecated
  async pauseComponentUpgradeWithOptions(clusterid: string, componentid: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<PauseComponentUpgradeResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "PauseComponentUpgrade",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${OpenApiUtil.getEncodeParam(clusterid)}/components/${OpenApiUtil.getEncodeParam(componentid)}/pause`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<PauseComponentUpgradeResponse>(await this.callApi(params, req, runtime), new PauseComponentUpgradeResponse({}));
  }

  /**
   * You can call the PauseComponentUpgrade operation to pause the update of a component.
   * 
   * @deprecated OpenAPI PauseComponentUpgrade is deprecated
   * @returns PauseComponentUpgradeResponse
   */
  // Deprecated
  async pauseComponentUpgrade(clusterid: string, componentid: string): Promise<PauseComponentUpgradeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.pauseComponentUpgradeWithOptions(clusterid, componentid, headers, runtime);
  }

  /**
   * Pauses an on-going task.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PauseTaskResponse
   */
  async pauseTaskWithOptions(taskId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<PauseTaskResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "PauseTask",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/tasks/${OpenApiUtil.getEncodeParam(taskId)}/pause`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<PauseTaskResponse>(await this.callApi(params, req, runtime), new PauseTaskResponse({}));
  }

  /**
   * Pauses an on-going task.
   * @returns PauseTaskResponse
   */
  async pauseTask(taskId: string): Promise<PauseTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.pauseTaskWithOptions(taskId, headers, runtime);
  }

  /**
   * You can call the RemoveClusterNodes operation to remove nodes from a Container Service for Kubernetes (ACK) cluster.
   * 
   * @remarks
   * ***
   * *   When you remove a node, the pods that run on the node are migrated to other nodes. This may cause service interruptions. We recommend that you remove nodes during off-peak hours.
   * *   Unknown errors may occur when you remove nodes. Before you remove nodes, back up the data on the nodes.
   * *   Nodes remain in the Unschedulable state when they are being removed.
   * *   You can remove only worker nodes. You cannot remove master nodes.
   * 
   * @deprecated OpenAPI RemoveClusterNodes is deprecated
   * 
   * @param request - RemoveClusterNodesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveClusterNodesResponse
   */
  // Deprecated
  async removeClusterNodesWithOptions(ClusterId: string, request: RemoveClusterNodesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RemoveClusterNodesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.drainNode)) {
      body["drain_node"] = request.drainNode;
    }

    if (!Util.isUnset(request.nodes)) {
      body["nodes"] = request.nodes;
    }

    if (!Util.isUnset(request.releaseNode)) {
      body["release_node"] = request.releaseNode;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RemoveClusterNodes",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/api/v2/clusters/${OpenApiUtil.getEncodeParam(ClusterId)}/nodes/remove`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<RemoveClusterNodesResponse>(await this.callApi(params, req, runtime), new RemoveClusterNodesResponse({}));
  }

  /**
   * You can call the RemoveClusterNodes operation to remove nodes from a Container Service for Kubernetes (ACK) cluster.
   * 
   * @remarks
   * ***
   * *   When you remove a node, the pods that run on the node are migrated to other nodes. This may cause service interruptions. We recommend that you remove nodes during off-peak hours.
   * *   Unknown errors may occur when you remove nodes. Before you remove nodes, back up the data on the nodes.
   * *   Nodes remain in the Unschedulable state when they are being removed.
   * *   You can remove only worker nodes. You cannot remove master nodes.
   * 
   * @deprecated OpenAPI RemoveClusterNodes is deprecated
   * 
   * @param request - RemoveClusterNodesRequest
   * @returns RemoveClusterNodesResponse
   */
  // Deprecated
  async removeClusterNodes(ClusterId: string, request: RemoveClusterNodesRequest): Promise<RemoveClusterNodesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.removeClusterNodesWithOptions(ClusterId, request, headers, runtime);
  }

  /**
   * Removes nodes from a node pool.
   * 
   * @remarks
   * *
   * ****
   * *   When you remove a node, the pods that run on the node are migrated to other nodes. This may cause service interruptions. We recommend that you remove nodes during off-peak hours. - The operation may have unexpected risks. Back up the data before you perform this operation. - When the system removes a node, it sets the status of the node to Unschedulable. - The system removes only worker nodes. It does not remove master nodes.
   * 
   * @param tmpReq - RemoveNodePoolNodesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveNodePoolNodesResponse
   */
  async removeNodePoolNodesWithOptions(ClusterId: string, NodepoolId: string, tmpReq: RemoveNodePoolNodesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RemoveNodePoolNodesResponse> {
    Util.validateModel(tmpReq);
    let request = new RemoveNodePoolNodesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.instanceIds)) {
      request.instanceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.instanceIds, "instance_ids", "json");
    }

    if (!Util.isUnset(tmpReq.nodes)) {
      request.nodesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.nodes, "nodes", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.concurrency)) {
      query["concurrency"] = request.concurrency;
    }

    if (!Util.isUnset(request.drainNode)) {
      query["drain_node"] = request.drainNode;
    }

    if (!Util.isUnset(request.instanceIdsShrink)) {
      query["instance_ids"] = request.instanceIdsShrink;
    }

    if (!Util.isUnset(request.nodesShrink)) {
      query["nodes"] = request.nodesShrink;
    }

    if (!Util.isUnset(request.releaseNode)) {
      query["release_node"] = request.releaseNode;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RemoveNodePoolNodes",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${OpenApiUtil.getEncodeParam(ClusterId)}/nodepools/${OpenApiUtil.getEncodeParam(NodepoolId)}/nodes`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<RemoveNodePoolNodesResponse>(await this.callApi(params, req, runtime), new RemoveNodePoolNodesResponse({}));
  }

  /**
   * Removes nodes from a node pool.
   * 
   * @remarks
   * *
   * ****
   * *   When you remove a node, the pods that run on the node are migrated to other nodes. This may cause service interruptions. We recommend that you remove nodes during off-peak hours. - The operation may have unexpected risks. Back up the data before you perform this operation. - When the system removes a node, it sets the status of the node to Unschedulable. - The system removes only worker nodes. It does not remove master nodes.
   * 
   * @param request - RemoveNodePoolNodesRequest
   * @returns RemoveNodePoolNodesResponse
   */
  async removeNodePoolNodes(ClusterId: string, NodepoolId: string, request: RemoveNodePoolNodesRequest): Promise<RemoveNodePoolNodesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.removeNodePoolNodesWithOptions(ClusterId, NodepoolId, request, headers, runtime);
  }

  /**
   * You can call the RemoveWorkflow operation to delete a workflow.
   * 
   * @deprecated OpenAPI RemoveWorkflow is deprecated
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveWorkflowResponse
   */
  // Deprecated
  async removeWorkflowWithOptions(workflowName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RemoveWorkflowResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "RemoveWorkflow",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/gs/workflow/${OpenApiUtil.getEncodeParam(workflowName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<RemoveWorkflowResponse>(await this.callApi(params, req, runtime), new RemoveWorkflowResponse({}));
  }

  /**
   * You can call the RemoveWorkflow operation to delete a workflow.
   * 
   * @deprecated OpenAPI RemoveWorkflow is deprecated
   * @returns RemoveWorkflowResponse
   */
  // Deprecated
  async removeWorkflow(workflowName: string): Promise<RemoveWorkflowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.removeWorkflowWithOptions(workflowName, headers, runtime);
  }

  /**
   * You can call the RepairClusterNodePool operation to fix issues on specified nodes in a managed node pool.
   * 
   * @param request - RepairClusterNodePoolRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RepairClusterNodePoolResponse
   */
  async repairClusterNodePoolWithOptions(clusterId: string, nodepoolId: string, request: RepairClusterNodePoolRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RepairClusterNodePoolResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.autoRestart)) {
      body["auto_restart"] = request.autoRestart;
    }

    if (!Util.isUnset(request.nodes)) {
      body["nodes"] = request.nodes;
    }

    if (!Util.isUnset(request.operations)) {
      body["operations"] = request.operations;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RepairClusterNodePool",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${OpenApiUtil.getEncodeParam(clusterId)}/nodepools/${OpenApiUtil.getEncodeParam(nodepoolId)}/repair`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<RepairClusterNodePoolResponse>(await this.callApi(params, req, runtime), new RepairClusterNodePoolResponse({}));
  }

  /**
   * You can call the RepairClusterNodePool operation to fix issues on specified nodes in a managed node pool.
   * 
   * @param request - RepairClusterNodePoolRequest
   * @returns RepairClusterNodePoolResponse
   */
  async repairClusterNodePool(clusterId: string, nodepoolId: string, request: RepairClusterNodePoolRequest): Promise<RepairClusterNodePoolResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.repairClusterNodePoolWithOptions(clusterId, nodepoolId, request, headers, runtime);
  }

  /**
   * You can call the ResumeComponentUpgrade operation to resume the update of a component.
   * 
   * @deprecated OpenAPI ResumeComponentUpgrade is deprecated
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResumeComponentUpgradeResponse
   */
  // Deprecated
  async resumeComponentUpgradeWithOptions(clusterid: string, componentid: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ResumeComponentUpgradeResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ResumeComponentUpgrade",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${OpenApiUtil.getEncodeParam(clusterid)}/components/${OpenApiUtil.getEncodeParam(componentid)}/resume`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<ResumeComponentUpgradeResponse>(await this.callApi(params, req, runtime), new ResumeComponentUpgradeResponse({}));
  }

  /**
   * You can call the ResumeComponentUpgrade operation to resume the update of a component.
   * 
   * @deprecated OpenAPI ResumeComponentUpgrade is deprecated
   * @returns ResumeComponentUpgradeResponse
   */
  // Deprecated
  async resumeComponentUpgrade(clusterid: string, componentid: string): Promise<ResumeComponentUpgradeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.resumeComponentUpgradeWithOptions(clusterid, componentid, headers, runtime);
  }

  /**
   * You can call the ResumeTask operation to resume a task.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResumeTaskResponse
   */
  async resumeTaskWithOptions(taskId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ResumeTaskResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ResumeTask",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/tasks/${OpenApiUtil.getEncodeParam(taskId)}/resume`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<ResumeTaskResponse>(await this.callApi(params, req, runtime), new ResumeTaskResponse({}));
  }

  /**
   * You can call the ResumeTask operation to resume a task.
   * @returns ResumeTaskResponse
   */
  async resumeTask(taskId: string): Promise<ResumeTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.resumeTaskWithOptions(taskId, headers, runtime);
  }

  /**
   * You can call the ResumeUpgradeCluster operation to resume the update of a cluster by cluster ID.
   * 
   * @deprecated OpenAPI ResumeUpgradeCluster is deprecated
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResumeUpgradeClusterResponse
   */
  // Deprecated
  async resumeUpgradeClusterWithOptions(ClusterId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ResumeUpgradeClusterResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ResumeUpgradeCluster",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/api/v2/clusters/${OpenApiUtil.getEncodeParam(ClusterId)}/upgrade/resume`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<ResumeUpgradeClusterResponse>(await this.callApi(params, req, runtime), new ResumeUpgradeClusterResponse({}));
  }

  /**
   * You can call the ResumeUpgradeCluster operation to resume the update of a cluster by cluster ID.
   * 
   * @deprecated OpenAPI ResumeUpgradeCluster is deprecated
   * @returns ResumeUpgradeClusterResponse
   */
  // Deprecated
  async resumeUpgradeCluster(ClusterId: string): Promise<ResumeUpgradeClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.resumeUpgradeClusterWithOptions(ClusterId, headers, runtime);
  }

  /**
   * You can call the RevokeK8sClusterKubeConfig operation to revoke the kubeconfig file that the current Resource Access Management (RAM) user uses to log on to a Kubernetes cluster. The kubeconfig file contains the identity information of the RAM user.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RevokeK8sClusterKubeConfigResponse
   */
  async revokeK8sClusterKubeConfigWithOptions(ClusterId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RevokeK8sClusterKubeConfigResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "RevokeK8sClusterKubeConfig",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/k8s/${OpenApiUtil.getEncodeParam(ClusterId)}/certs`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<RevokeK8sClusterKubeConfigResponse>(await this.callApi(params, req, runtime), new RevokeK8sClusterKubeConfigResponse({}));
  }

  /**
   * You can call the RevokeK8sClusterKubeConfig operation to revoke the kubeconfig file that the current Resource Access Management (RAM) user uses to log on to a Kubernetes cluster. The kubeconfig file contains the identity information of the RAM user.
   * @returns RevokeK8sClusterKubeConfigResponse
   */
  async revokeK8sClusterKubeConfig(ClusterId: string): Promise<RevokeK8sClusterKubeConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.revokeK8sClusterKubeConfigWithOptions(ClusterId, headers, runtime);
  }

  /**
   * Initiates cluster checks such as cluster update checks.
   * 
   * @param request - RunClusterCheckRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunClusterCheckResponse
   */
  async runClusterCheckWithOptions(clusterId: string, request: RunClusterCheckRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RunClusterCheckResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.options)) {
      body["options"] = request.options;
    }

    if (!Util.isUnset(request.target)) {
      body["target"] = request.target;
    }

    if (!Util.isUnset(request.type)) {
      body["type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RunClusterCheck",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${OpenApiUtil.getEncodeParam(clusterId)}/checks`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<RunClusterCheckResponse>(await this.callApi(params, req, runtime), new RunClusterCheckResponse({}));
  }

  /**
   * Initiates cluster checks such as cluster update checks.
   * 
   * @param request - RunClusterCheckRequest
   * @returns RunClusterCheckResponse
   */
  async runClusterCheck(clusterId: string, request: RunClusterCheckRequest): Promise<RunClusterCheckResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.runClusterCheckWithOptions(clusterId, request, headers, runtime);
  }

  /**
   * 扩容Kubernetes集群
   * 
   * @deprecated OpenAPI ScaleCluster is deprecated
   * 
   * @param request - ScaleClusterRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ScaleClusterResponse
   */
  // Deprecated
  async scaleClusterWithOptions(ClusterId: string, request: ScaleClusterRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ScaleClusterResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.cloudMonitorFlags)) {
      body["cloud_monitor_flags"] = request.cloudMonitorFlags;
    }

    if (!Util.isUnset(request.count)) {
      body["count"] = request.count;
    }

    if (!Util.isUnset(request.cpuPolicy)) {
      body["cpu_policy"] = request.cpuPolicy;
    }

    if (!Util.isUnset(request.disableRollback)) {
      body["disable_rollback"] = request.disableRollback;
    }

    if (!Util.isUnset(request.keyPair)) {
      body["key_pair"] = request.keyPair;
    }

    if (!Util.isUnset(request.loginPassword)) {
      body["login_password"] = request.loginPassword;
    }

    if (!Util.isUnset(request.tags)) {
      body["tags"] = request.tags;
    }

    if (!Util.isUnset(request.taints)) {
      body["taints"] = request.taints;
    }

    if (!Util.isUnset(request.vswitchIds)) {
      body["vswitch_ids"] = request.vswitchIds;
    }

    if (!Util.isUnset(request.workerAutoRenew)) {
      body["worker_auto_renew"] = request.workerAutoRenew;
    }

    if (!Util.isUnset(request.workerAutoRenewPeriod)) {
      body["worker_auto_renew_period"] = request.workerAutoRenewPeriod;
    }

    if (!Util.isUnset(request.workerDataDisk)) {
      body["worker_data_disk"] = request.workerDataDisk;
    }

    if (!Util.isUnset(request.workerDataDisks)) {
      body["worker_data_disks"] = request.workerDataDisks;
    }

    if (!Util.isUnset(request.workerInstanceChargeType)) {
      body["worker_instance_charge_type"] = request.workerInstanceChargeType;
    }

    if (!Util.isUnset(request.workerInstanceTypes)) {
      body["worker_instance_types"] = request.workerInstanceTypes;
    }

    if (!Util.isUnset(request.workerPeriod)) {
      body["worker_period"] = request.workerPeriod;
    }

    if (!Util.isUnset(request.workerPeriodUnit)) {
      body["worker_period_unit"] = request.workerPeriodUnit;
    }

    if (!Util.isUnset(request.workerSystemDiskCategory)) {
      body["worker_system_disk_category"] = request.workerSystemDiskCategory;
    }

    if (!Util.isUnset(request.workerSystemDiskSize)) {
      body["worker_system_disk_size"] = request.workerSystemDiskSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ScaleCluster",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${OpenApiUtil.getEncodeParam(ClusterId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ScaleClusterResponse>(await this.callApi(params, req, runtime), new ScaleClusterResponse({}));
  }

  /**
   * 扩容Kubernetes集群
   * 
   * @deprecated OpenAPI ScaleCluster is deprecated
   * 
   * @param request - ScaleClusterRequest
   * @returns ScaleClusterResponse
   */
  // Deprecated
  async scaleCluster(ClusterId: string, request: ScaleClusterRequest): Promise<ScaleClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.scaleClusterWithOptions(ClusterId, request, headers, runtime);
  }

  /**
   * You can call the ScaleClusterNodePool operation to scale out a node pool by node pool ID.
   * 
   * @param request - ScaleClusterNodePoolRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ScaleClusterNodePoolResponse
   */
  async scaleClusterNodePoolWithOptions(ClusterId: string, NodepoolId: string, request: ScaleClusterNodePoolRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ScaleClusterNodePoolResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.count)) {
      body["count"] = request.count;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ScaleClusterNodePool",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${OpenApiUtil.getEncodeParam(ClusterId)}/nodepools/${OpenApiUtil.getEncodeParam(NodepoolId)}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ScaleClusterNodePoolResponse>(await this.callApi(params, req, runtime), new ScaleClusterNodePoolResponse({}));
  }

  /**
   * You can call the ScaleClusterNodePool operation to scale out a node pool by node pool ID.
   * 
   * @param request - ScaleClusterNodePoolRequest
   * @returns ScaleClusterNodePoolResponse
   */
  async scaleClusterNodePool(ClusterId: string, NodepoolId: string, request: ScaleClusterNodePoolRequest): Promise<ScaleClusterNodePoolResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.scaleClusterNodePoolWithOptions(ClusterId, NodepoolId, request, headers, runtime);
  }

  /**
   * You can call the ScaleOutCluster operation to scale out a cluster by cluster ID.
   * 
   * @remarks
   * *
   * ****The ScaleOutCluster API operation is phased out. You must call the node pool-related API operations to manage nodes. If you want to add worker nodes to a Container Service for Kubernetes (ACK) cluster, call the ScaleClusterNodePool API operation. For more information, see [ScaleClusterNodePool](https://help.aliyun.com/document_detail/184928.html).
   * 
   * @param request - ScaleOutClusterRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ScaleOutClusterResponse
   */
  async scaleOutClusterWithOptions(ClusterId: string, request: ScaleOutClusterRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ScaleOutClusterResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.cloudMonitorFlags)) {
      body["cloud_monitor_flags"] = request.cloudMonitorFlags;
    }

    if (!Util.isUnset(request.count)) {
      body["count"] = request.count;
    }

    if (!Util.isUnset(request.cpuPolicy)) {
      body["cpu_policy"] = request.cpuPolicy;
    }

    if (!Util.isUnset(request.imageId)) {
      body["image_id"] = request.imageId;
    }

    if (!Util.isUnset(request.keyPair)) {
      body["key_pair"] = request.keyPair;
    }

    if (!Util.isUnset(request.loginPassword)) {
      body["login_password"] = request.loginPassword;
    }

    if (!Util.isUnset(request.rdsInstances)) {
      body["rds_instances"] = request.rdsInstances;
    }

    if (!Util.isUnset(request.runtime)) {
      body["runtime"] = request.runtime;
    }

    if (!Util.isUnset(request.tags)) {
      body["tags"] = request.tags;
    }

    if (!Util.isUnset(request.taints)) {
      body["taints"] = request.taints;
    }

    if (!Util.isUnset(request.userData)) {
      body["user_data"] = request.userData;
    }

    if (!Util.isUnset(request.vswitchIds)) {
      body["vswitch_ids"] = request.vswitchIds;
    }

    if (!Util.isUnset(request.workerAutoRenew)) {
      body["worker_auto_renew"] = request.workerAutoRenew;
    }

    if (!Util.isUnset(request.workerAutoRenewPeriod)) {
      body["worker_auto_renew_period"] = request.workerAutoRenewPeriod;
    }

    if (!Util.isUnset(request.workerDataDisks)) {
      body["worker_data_disks"] = request.workerDataDisks;
    }

    if (!Util.isUnset(request.workerInstanceChargeType)) {
      body["worker_instance_charge_type"] = request.workerInstanceChargeType;
    }

    if (!Util.isUnset(request.workerInstanceTypes)) {
      body["worker_instance_types"] = request.workerInstanceTypes;
    }

    if (!Util.isUnset(request.workerPeriod)) {
      body["worker_period"] = request.workerPeriod;
    }

    if (!Util.isUnset(request.workerPeriodUnit)) {
      body["worker_period_unit"] = request.workerPeriodUnit;
    }

    if (!Util.isUnset(request.workerSystemDiskCategory)) {
      body["worker_system_disk_category"] = request.workerSystemDiskCategory;
    }

    if (!Util.isUnset(request.workerSystemDiskSize)) {
      body["worker_system_disk_size"] = request.workerSystemDiskSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ScaleOutCluster",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/api/v2/clusters/${OpenApiUtil.getEncodeParam(ClusterId)}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ScaleOutClusterResponse>(await this.callApi(params, req, runtime), new ScaleOutClusterResponse({}));
  }

  /**
   * You can call the ScaleOutCluster operation to scale out a cluster by cluster ID.
   * 
   * @remarks
   * *
   * ****The ScaleOutCluster API operation is phased out. You must call the node pool-related API operations to manage nodes. If you want to add worker nodes to a Container Service for Kubernetes (ACK) cluster, call the ScaleClusterNodePool API operation. For more information, see [ScaleClusterNodePool](https://help.aliyun.com/document_detail/184928.html).
   * 
   * @param request - ScaleOutClusterRequest
   * @returns ScaleOutClusterResponse
   */
  async scaleOutCluster(ClusterId: string, request: ScaleOutClusterRequest): Promise<ScaleOutClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.scaleOutClusterWithOptions(ClusterId, request, headers, runtime);
  }

  /**
   * The cluster ID.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ScanClusterVulsResponse
   */
  async scanClusterVulsWithOptions(clusterId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ScanClusterVulsResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ScanClusterVuls",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${OpenApiUtil.getEncodeParam(clusterId)}/vuls/scan`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ScanClusterVulsResponse>(await this.callApi(params, req, runtime), new ScanClusterVulsResponse({}));
  }

  /**
   * The cluster ID.
   * @returns ScanClusterVulsResponse
   */
  async scanClusterVuls(clusterId: string): Promise<ScanClusterVulsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.scanClusterVulsWithOptions(clusterId, headers, runtime);
  }

  /**
   * @param request - StartAlertRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartAlertResponse
   */
  async startAlertWithOptions(ClusterId: string, request: StartAlertRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<StartAlertResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.alertRuleGroupName)) {
      body["alert_rule_group_name"] = request.alertRuleGroupName;
    }

    if (!Util.isUnset(request.alertRuleName)) {
      body["alert_rule_name"] = request.alertRuleName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "StartAlert",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/alert/${OpenApiUtil.getEncodeParam(ClusterId)}/alert_rule/start`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<StartAlertResponse>(await this.callApi(params, req, runtime), new StartAlertResponse({}));
  }

  /**
   * @param request - StartAlertRequest
   * @returns StartAlertResponse
   */
  async startAlert(ClusterId: string, request: StartAlertRequest): Promise<StartAlertResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startAlertWithOptions(ClusterId, request, headers, runtime);
  }

  /**
   * You can call the StartWorkflow operation to create a workflow.
   * 
   * @deprecated OpenAPI StartWorkflow is deprecated
   * 
   * @param request - StartWorkflowRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartWorkflowResponse
   */
  // Deprecated
  async startWorkflowWithOptions(request: StartWorkflowRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<StartWorkflowResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.mappingBamOutFilename)) {
      body["mapping_bam_out_filename"] = request.mappingBamOutFilename;
    }

    if (!Util.isUnset(request.mappingBamOutPath)) {
      body["mapping_bam_out_path"] = request.mappingBamOutPath;
    }

    if (!Util.isUnset(request.mappingBucketName)) {
      body["mapping_bucket_name"] = request.mappingBucketName;
    }

    if (!Util.isUnset(request.mappingFastqFirstFilename)) {
      body["mapping_fastq_first_filename"] = request.mappingFastqFirstFilename;
    }

    if (!Util.isUnset(request.mappingFastqPath)) {
      body["mapping_fastq_path"] = request.mappingFastqPath;
    }

    if (!Util.isUnset(request.mappingFastqSecondFilename)) {
      body["mapping_fastq_second_filename"] = request.mappingFastqSecondFilename;
    }

    if (!Util.isUnset(request.mappingIsMarkDup)) {
      body["mapping_is_mark_dup"] = request.mappingIsMarkDup;
    }

    if (!Util.isUnset(request.mappingOssRegion)) {
      body["mapping_oss_region"] = request.mappingOssRegion;
    }

    if (!Util.isUnset(request.mappingReferencePath)) {
      body["mapping_reference_path"] = request.mappingReferencePath;
    }

    if (!Util.isUnset(request.service)) {
      body["service"] = request.service;
    }

    if (!Util.isUnset(request.wgsBucketName)) {
      body["wgs_bucket_name"] = request.wgsBucketName;
    }

    if (!Util.isUnset(request.wgsFastqFirstFilename)) {
      body["wgs_fastq_first_filename"] = request.wgsFastqFirstFilename;
    }

    if (!Util.isUnset(request.wgsFastqPath)) {
      body["wgs_fastq_path"] = request.wgsFastqPath;
    }

    if (!Util.isUnset(request.wgsFastqSecondFilename)) {
      body["wgs_fastq_second_filename"] = request.wgsFastqSecondFilename;
    }

    if (!Util.isUnset(request.wgsOssRegion)) {
      body["wgs_oss_region"] = request.wgsOssRegion;
    }

    if (!Util.isUnset(request.wgsReferencePath)) {
      body["wgs_reference_path"] = request.wgsReferencePath;
    }

    if (!Util.isUnset(request.wgsVcfOutFilename)) {
      body["wgs_vcf_out_filename"] = request.wgsVcfOutFilename;
    }

    if (!Util.isUnset(request.wgsVcfOutPath)) {
      body["wgs_vcf_out_path"] = request.wgsVcfOutPath;
    }

    if (!Util.isUnset(request.workflowType)) {
      body["workflow_type"] = request.workflowType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "StartWorkflow",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/gs/workflow`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<StartWorkflowResponse>(await this.callApi(params, req, runtime), new StartWorkflowResponse({}));
  }

  /**
   * You can call the StartWorkflow operation to create a workflow.
   * 
   * @deprecated OpenAPI StartWorkflow is deprecated
   * 
   * @param request - StartWorkflowRequest
   * @returns StartWorkflowResponse
   */
  // Deprecated
  async startWorkflow(request: StartWorkflowRequest): Promise<StartWorkflowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startWorkflowWithOptions(request, headers, runtime);
  }

  /**
   * You can call the StopAlert operation to disable an alert rule or an alert rule set in the alert center of Container Service for Kubernetes (ACK).
   * 
   * @param request - StopAlertRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopAlertResponse
   */
  async stopAlertWithOptions(ClusterId: string, request: StopAlertRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<StopAlertResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.alertRuleGroupName)) {
      body["alert_rule_group_name"] = request.alertRuleGroupName;
    }

    if (!Util.isUnset(request.alertRuleName)) {
      body["alert_rule_name"] = request.alertRuleName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "StopAlert",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/alert/${OpenApiUtil.getEncodeParam(ClusterId)}/alert_rule/stop`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<StopAlertResponse>(await this.callApi(params, req, runtime), new StopAlertResponse({}));
  }

  /**
   * You can call the StopAlert operation to disable an alert rule or an alert rule set in the alert center of Container Service for Kubernetes (ACK).
   * 
   * @param request - StopAlertRequest
   * @returns StopAlertResponse
   */
  async stopAlert(ClusterId: string, request: StopAlertRequest): Promise<StopAlertResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopAlertWithOptions(ClusterId, request, headers, runtime);
  }

  /**
   * Synchronizes the information about a node pool, including the metadata and node information of the node pool.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SyncClusterNodePoolResponse
   */
  async syncClusterNodePoolWithOptions(ClusterId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<SyncClusterNodePoolResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "SyncClusterNodePool",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${OpenApiUtil.getEncodeParam(ClusterId)}/sync_nodepools`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<SyncClusterNodePoolResponse>(await this.callApi(params, req, runtime), new SyncClusterNodePoolResponse({}));
  }

  /**
   * Synchronizes the information about a node pool, including the metadata and node information of the node pool.
   * @returns SyncClusterNodePoolResponse
   */
  async syncClusterNodePool(ClusterId: string): Promise<SyncClusterNodePoolResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.syncClusterNodePoolWithOptions(ClusterId, headers, runtime);
  }

  /**
   * Adds labels to a Container Service for Kubernetes (ACK) cluster. You can use labels to classify and manage ACK clusters in order to meet monitoring, cost analysis, and tenant isolation requirements.
   * 
   * @param request - TagResourcesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagResourcesResponse
   */
  async tagResourcesWithOptions(request: TagResourcesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<TagResourcesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionId)) {
      body["region_id"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceIds)) {
      body["resource_ids"] = request.resourceIds;
    }

    if (!Util.isUnset(request.resourceType)) {
      body["resource_type"] = request.resourceType;
    }

    if (!Util.isUnset(request.tags)) {
      body["tags"] = request.tags;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "TagResources",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/tags`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<TagResourcesResponse>(await this.callApi(params, req, runtime), new TagResourcesResponse({}));
  }

  /**
   * Adds labels to a Container Service for Kubernetes (ACK) cluster. You can use labels to classify and manage ACK clusters in order to meet monitoring, cost analysis, and tenant isolation requirements.
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.tagResourcesWithOptions(request, headers, runtime);
  }

  /**
   * Uninstalls components that you no longer need from a cluster. You must specify the name of the components and specify whether to release associated Alibaba Cloud resources from the cluster.
   * 
   * @param request - UnInstallClusterAddonsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnInstallClusterAddonsResponse
   */
  async unInstallClusterAddonsWithOptions(ClusterId: string, request: UnInstallClusterAddonsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UnInstallClusterAddonsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: Util.toArray(request.addons),
    });
    let params = new $OpenApi.Params({
      action: "UnInstallClusterAddons",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${OpenApiUtil.getEncodeParam(ClusterId)}/components/uninstall`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<UnInstallClusterAddonsResponse>(await this.callApi(params, req, runtime), new UnInstallClusterAddonsResponse({}));
  }

  /**
   * Uninstalls components that you no longer need from a cluster. You must specify the name of the components and specify whether to release associated Alibaba Cloud resources from the cluster.
   * 
   * @param request - UnInstallClusterAddonsRequest
   * @returns UnInstallClusterAddonsResponse
   */
  async unInstallClusterAddons(ClusterId: string, request: UnInstallClusterAddonsRequest): Promise<UnInstallClusterAddonsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.unInstallClusterAddonsWithOptions(ClusterId, request, headers, runtime);
  }

  /**
   * Removes labels from a Container Service for Kubernetes (ACK) cluster.
   * 
   * @param tmpReq - UntagResourcesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UntagResourcesResponse
   */
  async untagResourcesWithOptions(tmpReq: UntagResourcesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UntagResourcesResponse> {
    Util.validateModel(tmpReq);
    let request = new UntagResourcesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.resourceIds)) {
      request.resourceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceIds, "resource_ids", "json");
    }

    if (!Util.isUnset(tmpReq.tagKeys)) {
      request.tagKeysShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tagKeys, "tag_keys", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.all)) {
      query["all"] = request.all;
    }

    if (!Util.isUnset(request.regionId)) {
      query["region_id"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceIdsShrink)) {
      query["resource_ids"] = request.resourceIdsShrink;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["resource_type"] = request.resourceType;
    }

    if (!Util.isUnset(request.tagKeysShrink)) {
      query["tag_keys"] = request.tagKeysShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UntagResources",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/tags`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UntagResourcesResponse>(await this.callApi(params, req, runtime), new UntagResourcesResponse({}));
  }

  /**
   * Removes labels from a Container Service for Kubernetes (ACK) cluster.
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.untagResourcesWithOptions(request, headers, runtime);
  }

  /**
   * You can call the UpdateClusterAuditLogConfig operation to enable or disable the audit log feature in a Container Service for Kubernetes (ACK) cluster and update the audit log configuration. This operation also allows you to record requests to the Kubernetes API and the responses, which can be used to trace cluster operation history and troubleshoot cluster issues.
   * 
   * @remarks
   * Before you call this operation, ensure that you understand the billing methods and pricing of [Simple Log Service](https://www.aliyun.com/price/product#/sls/detail/sls) (SLS).
   * 
   * @param request - UpdateClusterAuditLogConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateClusterAuditLogConfigResponse
   */
  async updateClusterAuditLogConfigWithOptions(clusterid: string, request: UpdateClusterAuditLogConfigRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateClusterAuditLogConfigResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.disable)) {
      body["disable"] = request.disable;
    }

    if (!Util.isUnset(request.slsProjectName)) {
      body["sls_project_name"] = request.slsProjectName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateClusterAuditLogConfig",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${OpenApiUtil.getEncodeParam(clusterid)}/audit_log`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateClusterAuditLogConfigResponse>(await this.callApi(params, req, runtime), new UpdateClusterAuditLogConfigResponse({}));
  }

  /**
   * You can call the UpdateClusterAuditLogConfig operation to enable or disable the audit log feature in a Container Service for Kubernetes (ACK) cluster and update the audit log configuration. This operation also allows you to record requests to the Kubernetes API and the responses, which can be used to trace cluster operation history and troubleshoot cluster issues.
   * 
   * @remarks
   * Before you call this operation, ensure that you understand the billing methods and pricing of [Simple Log Service](https://www.aliyun.com/price/product#/sls/detail/sls) (SLS).
   * 
   * @param request - UpdateClusterAuditLogConfigRequest
   * @returns UpdateClusterAuditLogConfigResponse
   */
  async updateClusterAuditLogConfig(clusterid: string, request: UpdateClusterAuditLogConfigRequest): Promise<UpdateClusterAuditLogConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateClusterAuditLogConfigWithOptions(clusterid, request, headers, runtime);
  }

  /**
   * 为集群中报警规则集设置订阅的通知对象联系人组
   * 
   * @param request - UpdateContactGroupForAlertRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateContactGroupForAlertResponse
   */
  async updateContactGroupForAlertWithOptions(ClusterId: string, request: UpdateContactGroupForAlertRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateContactGroupForAlertResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.alertRuleGroupName)) {
      body["alert_rule_group_name"] = request.alertRuleGroupName;
    }

    if (!Util.isUnset(request.contactGroupIds)) {
      body["contact_group_ids"] = request.contactGroupIds;
    }

    if (!Util.isUnset(request.crName)) {
      body["cr_name"] = request.crName;
    }

    if (!Util.isUnset(request.namespace)) {
      body["namespace"] = request.namespace;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateContactGroupForAlert",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/alert/${OpenApiUtil.getEncodeParam(ClusterId)}/alert_rule/contact_groups`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateContactGroupForAlertResponse>(await this.callApi(params, req, runtime), new UpdateContactGroupForAlertResponse({}));
  }

  /**
   * 为集群中报警规则集设置订阅的通知对象联系人组
   * 
   * @param request - UpdateContactGroupForAlertRequest
   * @returns UpdateContactGroupForAlertResponse
   */
  async updateContactGroupForAlert(ClusterId: string, request: UpdateContactGroupForAlertRequest): Promise<UpdateContactGroupForAlertResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateContactGroupForAlertWithOptions(ClusterId, request, headers, runtime);
  }

  /**
   * You can call the UpdateControlPlaneLog operation to modify the log collection configurations for control plane components in a Container Service for Kubernetes (ACK) managed cluster.
   * 
   * @param request - UpdateControlPlaneLogRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateControlPlaneLogResponse
   */
  async updateControlPlaneLogWithOptions(ClusterId: string, request: UpdateControlPlaneLogRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateControlPlaneLogResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.aliuid)) {
      body["aliuid"] = request.aliuid;
    }

    if (!Util.isUnset(request.components)) {
      body["components"] = request.components;
    }

    if (!Util.isUnset(request.logProject)) {
      body["log_project"] = request.logProject;
    }

    if (!Util.isUnset(request.logTtl)) {
      body["log_ttl"] = request.logTtl;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateControlPlaneLog",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${OpenApiUtil.getEncodeParam(ClusterId)}/controlplanelog`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateControlPlaneLogResponse>(await this.callApi(params, req, runtime), new UpdateControlPlaneLogResponse({}));
  }

  /**
   * You can call the UpdateControlPlaneLog operation to modify the log collection configurations for control plane components in a Container Service for Kubernetes (ACK) managed cluster.
   * 
   * @param request - UpdateControlPlaneLogRequest
   * @returns UpdateControlPlaneLogResponse
   */
  async updateControlPlaneLog(ClusterId: string, request: UpdateControlPlaneLogRequest): Promise<UpdateControlPlaneLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateControlPlaneLogWithOptions(ClusterId, request, headers, runtime);
  }

  /**
   * Sets the validity period of a kubeconfig file used by a Resource Access Management (RAM) user or RAM role to connect to a Container Service for Kubernetes (ACK) cluster. The validity period ranges from 1 to 876,000 hours. You can call this API operation when you customize configurations by using an Alibaba Cloud account. The default validity period of a kubeconfig file is three years.
   * 
   * @remarks
   * - You can call this operation only with an Alibaba Cloud account. 
   * - If the kubeconfig file used by your cluster is revoked, the custom validity period of the kubeconfig file is reset. In this case, you need to call this API operation to reconfigure the validity period of the kubeconfig file.
   * 
   * @param request - UpdateK8sClusterUserConfigExpireRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateK8sClusterUserConfigExpireResponse
   */
  async updateK8sClusterUserConfigExpireWithOptions(ClusterId: string, request: UpdateK8sClusterUserConfigExpireRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateK8sClusterUserConfigExpireResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.expireHour)) {
      body["expire_hour"] = request.expireHour;
    }

    if (!Util.isUnset(request.user)) {
      body["user"] = request.user;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateK8sClusterUserConfigExpire",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/k8s/${OpenApiUtil.getEncodeParam(ClusterId)}/user_config/expire`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<UpdateK8sClusterUserConfigExpireResponse>(await this.callApi(params, req, runtime), new UpdateK8sClusterUserConfigExpireResponse({}));
  }

  /**
   * Sets the validity period of a kubeconfig file used by a Resource Access Management (RAM) user or RAM role to connect to a Container Service for Kubernetes (ACK) cluster. The validity period ranges from 1 to 876,000 hours. You can call this API operation when you customize configurations by using an Alibaba Cloud account. The default validity period of a kubeconfig file is three years.
   * 
   * @remarks
   * - You can call this operation only with an Alibaba Cloud account. 
   * - If the kubeconfig file used by your cluster is revoked, the custom validity period of the kubeconfig file is reset. In this case, you need to call this API operation to reconfigure the validity period of the kubeconfig file.
   * 
   * @param request - UpdateK8sClusterUserConfigExpireRequest
   * @returns UpdateK8sClusterUserConfigExpireResponse
   */
  async updateK8sClusterUserConfigExpire(ClusterId: string, request: UpdateK8sClusterUserConfigExpireRequest): Promise<UpdateK8sClusterUserConfigExpireResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateK8sClusterUserConfigExpireWithOptions(ClusterId, request, headers, runtime);
  }

  /**
   * Updates the deletion protection status of the specified resources. You can enable or disable deletion protection for namespaces and Services.
   * 
   * @param request - UpdateResourcesDeleteProtectionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateResourcesDeleteProtectionResponse
   */
  async updateResourcesDeleteProtectionWithOptions(ClusterId: string, request: UpdateResourcesDeleteProtectionRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateResourcesDeleteProtectionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.enable)) {
      body["enable"] = request.enable;
    }

    if (!Util.isUnset(request.namespace)) {
      body["namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.resourceType)) {
      body["resource_type"] = request.resourceType;
    }

    if (!Util.isUnset(request.resources)) {
      body["resources"] = request.resources;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateResourcesDeleteProtection",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${OpenApiUtil.getEncodeParam(ClusterId)}/resources/protection`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateResourcesDeleteProtectionResponse>(await this.callApi(params, req, runtime), new UpdateResourcesDeleteProtectionResponse({}));
  }

  /**
   * Updates the deletion protection status of the specified resources. You can enable or disable deletion protection for namespaces and Services.
   * 
   * @param request - UpdateResourcesDeleteProtectionRequest
   * @returns UpdateResourcesDeleteProtectionResponse
   */
  async updateResourcesDeleteProtection(ClusterId: string, request: UpdateResourcesDeleteProtectionRequest): Promise<UpdateResourcesDeleteProtectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateResourcesDeleteProtectionWithOptions(ClusterId, request, headers, runtime);
  }

  /**
   * Updates the configurations of an orchestration template. An orchestration template defines and describes a group of Container Service for Kubernetes (ACK) resources. An orchestration template describes the configurations of an application or how an application runs in a declarative manner.
   * 
   * @param request - UpdateTemplateRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTemplateResponse
   */
  async updateTemplateWithOptions(TemplateId: string, request: UpdateTemplateRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateTemplateResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.name)) {
      body["name"] = request.name;
    }

    if (!Util.isUnset(request.tags)) {
      body["tags"] = request.tags;
    }

    if (!Util.isUnset(request.template)) {
      body["template"] = request.template;
    }

    if (!Util.isUnset(request.templateType)) {
      body["template_type"] = request.templateType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateTemplate",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/templates/${OpenApiUtil.getEncodeParam(TemplateId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<UpdateTemplateResponse>(await this.callApi(params, req, runtime), new UpdateTemplateResponse({}));
  }

  /**
   * Updates the configurations of an orchestration template. An orchestration template defines and describes a group of Container Service for Kubernetes (ACK) resources. An orchestration template describes the configurations of an application or how an application runs in a declarative manner.
   * 
   * @param request - UpdateTemplateRequest
   * @returns UpdateTemplateResponse
   */
  async updateTemplate(TemplateId: string, request: UpdateTemplateRequest): Promise<UpdateTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateTemplateWithOptions(TemplateId, request, headers, runtime);
  }

  /**
   * Updates the role-based access control (RBAC) permissions of a Resource Access Management (RAM) user or RAM role. By default, you do not have the RBAC permissions on a Container Service for Kubernetes (ACK) cluster if you are not the cluster owner or you are not using an Alibaba Cloud account. You can call this operation to specify the resources that can be accessed, permission scope, and predefined roles. This helps you better manage the access control on resources in ACK clusters.
   * 
   * @remarks
   * *Precautions**:
   * *   You can update the permissions of a RAM user or RAM role on a cluster by using full update or incremental update. If you use full update, the existing permissions of the RAM user or RAM role on the cluster are overwritten. You must specify all the permissions that you want to grant to the RAM user or RAM role in the request parameters when you call the operation. If you use incremental update, you can grant permissions to or revoke permissions from the RAM user or RAM role on the cluster. In this case, only the permissions that you specify in the request parameters when you call the operation are granted or revoked, other permissions of the RAM user or RAM role on the cluster are not affected.
   * 
   * @param request - UpdateUserPermissionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateUserPermissionsResponse
   */
  async updateUserPermissionsWithOptions(uid: string, request: UpdateUserPermissionsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateUserPermissionsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.mode)) {
      query["mode"] = request.mode;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: Util.toArray(request.body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateUserPermissions",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/permissions/users/${OpenApiUtil.getEncodeParam(uid)}/update`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<UpdateUserPermissionsResponse>(await this.callApi(params, req, runtime), new UpdateUserPermissionsResponse({}));
  }

  /**
   * Updates the role-based access control (RBAC) permissions of a Resource Access Management (RAM) user or RAM role. By default, you do not have the RBAC permissions on a Container Service for Kubernetes (ACK) cluster if you are not the cluster owner or you are not using an Alibaba Cloud account. You can call this operation to specify the resources that can be accessed, permission scope, and predefined roles. This helps you better manage the access control on resources in ACK clusters.
   * 
   * @remarks
   * *Precautions**:
   * *   You can update the permissions of a RAM user or RAM role on a cluster by using full update or incremental update. If you use full update, the existing permissions of the RAM user or RAM role on the cluster are overwritten. You must specify all the permissions that you want to grant to the RAM user or RAM role in the request parameters when you call the operation. If you use incremental update, you can grant permissions to or revoke permissions from the RAM user or RAM role on the cluster. In this case, only the permissions that you specify in the request parameters when you call the operation are granted or revoked, other permissions of the RAM user or RAM role on the cluster are not affected.
   * 
   * @param request - UpdateUserPermissionsRequest
   * @returns UpdateUserPermissionsResponse
   */
  async updateUserPermissions(uid: string, request: UpdateUserPermissionsRequest): Promise<UpdateUserPermissionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateUserPermissionsWithOptions(uid, request, headers, runtime);
  }

  /**
   * You can call the UpgradeCluster operation to upgrade a cluster by cluster ID.
   * 
   * @param request - UpgradeClusterRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpgradeClusterResponse
   */
  async upgradeClusterWithOptions(ClusterId: string, request: UpgradeClusterRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpgradeClusterResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.componentName)) {
      body["component_name"] = request.componentName;
    }

    if (!Util.isUnset(request.masterOnly)) {
      body["master_only"] = request.masterOnly;
    }

    if (!Util.isUnset(request.nextVersion)) {
      body["next_version"] = request.nextVersion;
    }

    if (!Util.isUnset(request.rollingPolicy)) {
      body["rolling_policy"] = request.rollingPolicy;
    }

    if (!Util.isUnset(request.version)) {
      body["version"] = request.version;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpgradeCluster",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/api/v2/clusters/${OpenApiUtil.getEncodeParam(ClusterId)}/upgrade`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpgradeClusterResponse>(await this.callApi(params, req, runtime), new UpgradeClusterResponse({}));
  }

  /**
   * You can call the UpgradeCluster operation to upgrade a cluster by cluster ID.
   * 
   * @param request - UpgradeClusterRequest
   * @returns UpgradeClusterResponse
   */
  async upgradeCluster(ClusterId: string, request: UpgradeClusterRequest): Promise<UpgradeClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.upgradeClusterWithOptions(ClusterId, request, headers, runtime);
  }

  /**
   * Updates cluster components to use new features and patch vulnerabilities. You must update cluster components one after one and update a component only after the previous one is successfully updated. Before you update a component, we recommend that you read the update notes for each component. Cluster component updates may affect your businesses. Assess the impact, back up data, and perform the update during off-peak hours.
   * 
   * @param request - UpgradeClusterAddonsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpgradeClusterAddonsResponse
   */
  async upgradeClusterAddonsWithOptions(ClusterId: string, request: UpgradeClusterAddonsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpgradeClusterAddonsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: Util.toArray(request.body),
    });
    let params = new $OpenApi.Params({
      action: "UpgradeClusterAddons",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${OpenApiUtil.getEncodeParam(ClusterId)}/components/upgrade`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpgradeClusterAddonsResponse>(await this.callApi(params, req, runtime), new UpgradeClusterAddonsResponse({}));
  }

  /**
   * Updates cluster components to use new features and patch vulnerabilities. You must update cluster components one after one and update a component only after the previous one is successfully updated. Before you update a component, we recommend that you read the update notes for each component. Cluster component updates may affect your businesses. Assess the impact, back up data, and perform the update during off-peak hours.
   * 
   * @param request - UpgradeClusterAddonsRequest
   * @returns UpgradeClusterAddonsResponse
   */
  async upgradeClusterAddons(ClusterId: string, request: UpgradeClusterAddonsRequest): Promise<UpgradeClusterAddonsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.upgradeClusterAddonsWithOptions(ClusterId, request, headers, runtime);
  }

  /**
   * You can call the UpgradeClusterNodepool operation to update the Kubernetes version, OS version, or container runtime version of the nodes in a node pool.
   * 
   * @remarks
   * This operation allows you to update the Kubernetes version, OS version, or container runtime version of the nodes in a node pool.
   * 
   * @param request - UpgradeClusterNodepoolRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpgradeClusterNodepoolResponse
   */
  async upgradeClusterNodepoolWithOptions(ClusterId: string, NodepoolId: string, request: UpgradeClusterNodepoolRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpgradeClusterNodepoolResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.imageId)) {
      body["image_id"] = request.imageId;
    }

    if (!Util.isUnset(request.kubernetesVersion)) {
      body["kubernetes_version"] = request.kubernetesVersion;
    }

    if (!Util.isUnset(request.nodeNames)) {
      body["node_names"] = request.nodeNames;
    }

    if (!Util.isUnset(request.rollingPolicy)) {
      body["rolling_policy"] = request.rollingPolicy;
    }

    if (!Util.isUnset(request.runtimeType)) {
      body["runtime_type"] = request.runtimeType;
    }

    if (!Util.isUnset(request.runtimeVersion)) {
      body["runtime_version"] = request.runtimeVersion;
    }

    if (!Util.isUnset(request.useReplace)) {
      body["use_replace"] = request.useReplace;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpgradeClusterNodepool",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${OpenApiUtil.getEncodeParam(ClusterId)}/nodepools/${OpenApiUtil.getEncodeParam(NodepoolId)}/upgrade`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpgradeClusterNodepoolResponse>(await this.callApi(params, req, runtime), new UpgradeClusterNodepoolResponse({}));
  }

  /**
   * You can call the UpgradeClusterNodepool operation to update the Kubernetes version, OS version, or container runtime version of the nodes in a node pool.
   * 
   * @remarks
   * This operation allows you to update the Kubernetes version, OS version, or container runtime version of the nodes in a node pool.
   * 
   * @param request - UpgradeClusterNodepoolRequest
   * @returns UpgradeClusterNodepoolResponse
   */
  async upgradeClusterNodepool(ClusterId: string, NodepoolId: string, request: UpgradeClusterNodepoolRequest): Promise<UpgradeClusterNodepoolResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.upgradeClusterNodepoolWithOptions(ClusterId, NodepoolId, request, headers, runtime);
  }

}
