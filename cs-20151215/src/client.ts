// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class Addon extends $tea.Model {
  config?: string;
  disabled?: boolean;
  name?: string;
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
  autoFormat?: boolean;
  autoSnapshotPolicyId?: string;
  burstingEnabled?: boolean;
  category?: string;
  device?: string;
  diskName?: string;
  encrypted?: string;
  fileSystem?: string;
  kmsKeyId?: string;
  mountTarget?: string;
  performanceLevel?: string;
  provisionedIops?: number;
  size?: number;
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

export class KubeletConfig extends $tea.Model {
  allowedUnsafeSysctls?: string[];
  containerLogMaxFiles?: number;
  containerLogMaxSize?: string;
  cpuManagerPolicy?: string;
  eventBurst?: number;
  eventRecordQPS?: number;
  evictionHard?: { [key: string]: any };
  evictionSoft?: { [key: string]: any };
  evictionSoftGracePeriod?: { [key: string]: any };
  featureGates?: { [key: string]: any };
  kubeAPIBurst?: number;
  kubeAPIQPS?: number;
  kubeReserved?: { [key: string]: any };
  maxPods?: number;
  readOnlyPort?: number;
  registryBurst?: number;
  registryPullQPS?: number;
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
  duration?: string;
  enable?: boolean;
  maintenanceTime?: string;
  weeklyPeriod?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'duration',
      enable: 'enable',
      maintenanceTime: 'maintenance_time',
      weeklyPeriod: 'weekly_period',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'string',
      enable: 'boolean',
      maintenanceTime: 'string',
      weeklyPeriod: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Nodepool extends $tea.Model {
  autoScaling?: NodepoolAutoScaling;
  count?: number;
  interconnectConfig?: NodepoolInterconnectConfig;
  interconnectMode?: string;
  kubernetesConfig?: NodepoolKubernetesConfig;
  management?: NodepoolManagement;
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
  name?: string;
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

export class Taint extends $tea.Model {
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

export class StandardComponentsValue extends $tea.Model {
  name?: string;
  version?: string;
  description?: string;
  required?: string;
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
  quota?: string;
  operationCode?: string;
  adjustable?: boolean;
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
  cpuPolicy?: string;
  formatDisk?: boolean;
  imageId?: string;
  instances?: string[];
  isEdgeWorker?: boolean;
  keepInstanceName?: boolean;
  keyPair?: string;
  nodepoolId?: string;
  password?: string;
  rdsInstances?: string[];
  runtime?: Runtime;
  tags?: Tag[];
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
  list?: AttachInstancesResponseBodyList[];
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
  formatDisk?: boolean;
  instances?: string[];
  keepInstanceName?: boolean;
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
  requestId?: string;
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
  aliuid?: string;
  components?: string[];
  logProject?: string;
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

export class CreateAutoscalingConfigRequest extends $tea.Model {
  coolDownDuration?: string;
  daemonsetEvictionForNodes?: boolean;
  expander?: string;
  gpuUtilizationThreshold?: string;
  maxGracefulTerminationSec?: number;
  minReplicaCount?: number;
  recycleNodeDeletionEnabled?: boolean;
  scaleDownEnabled?: boolean;
  scaleUpFromZero?: boolean;
  scanInterval?: string;
  skipNodesWithLocalStorage?: boolean;
  skipNodesWithSystemPods?: boolean;
  unneededDuration?: string;
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
  accessControlList?: string[];
  addons?: Addon[];
  apiAudiences?: string;
  chargeType?: string;
  cisEnabled?: boolean;
  cloudMonitorFlags?: boolean;
  clusterDomain?: string;
  clusterSpec?: string;
  clusterType?: string;
  containerCidr?: string;
  controlplaneLogComponents?: string[];
  controlplaneLogProject?: string;
  controlplaneLogTtl?: string;
  cpuPolicy?: string;
  customSan?: string;
  deletionProtection?: boolean;
  disableRollback?: boolean;
  enableRrsa?: boolean;
  encryptionProviderKey?: string;
  endpointPublicAccess?: boolean;
  formatDisk?: boolean;
  imageId?: string;
  imageType?: string;
  instances?: string[];
  ipStack?: string;
  isEnterpriseSecurityGroup?: boolean;
  keepInstanceName?: boolean;
  keyPair?: string;
  kubernetesVersion?: string;
  loadBalancerSpec?: string;
  loggingType?: string;
  loginPassword?: string;
  masterAutoRenew?: boolean;
  masterAutoRenewPeriod?: number;
  masterCount?: number;
  masterInstanceChargeType?: string;
  masterInstanceTypes?: string[];
  masterPeriod?: number;
  masterPeriodUnit?: string;
  masterSystemDiskCategory?: string;
  masterSystemDiskPerformanceLevel?: string;
  masterSystemDiskSize?: number;
  masterSystemDiskSnapshotPolicyId?: string;
  masterVswitchIds?: string[];
  name?: string;
  natGateway?: boolean;
  nodeCidrMask?: string;
  nodeNameMode?: string;
  nodePortRange?: string;
  nodepools?: Nodepool[];
  numOfNodes?: number;
  osType?: string;
  period?: number;
  periodUnit?: string;
  platform?: string;
  podVswitchIds?: string[];
  profile?: string;
  proxyMode?: string;
  rdsInstances?: string[];
  regionId?: string;
  resourceGroupId?: string;
  runtime?: Runtime;
  securityGroupId?: string;
  securityHardeningOs?: boolean;
  serviceAccountIssuer?: string;
  serviceCidr?: string;
  serviceDiscoveryTypes?: string[];
  snatEntry?: boolean;
  socEnabled?: boolean;
  sshFlags?: boolean;
  tags?: Tag[];
  taints?: Taint[];
  timeoutMins?: number;
  timezone?: string;
  userCa?: string;
  userData?: string;
  vpcid?: string;
  vswitchIds?: string[];
  workerAutoRenew?: boolean;
  workerAutoRenewPeriod?: number;
  workerDataDisks?: CreateClusterRequestWorkerDataDisks[];
  workerInstanceChargeType?: string;
  workerInstanceTypes?: string[];
  workerPeriod?: number;
  workerPeriodUnit?: string;
  workerSystemDiskCategory?: string;
  workerSystemDiskPerformanceLevel?: string;
  workerSystemDiskSize?: number;
  workerSystemDiskSnapshotPolicyId?: string;
  workerVswitchIds?: string[];
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
  target?: { [key: string]: any };
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
  clusterId?: string;
  diagnosisId?: string;
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
  autoScaling?: CreateClusterNodePoolRequestAutoScaling;
  count?: number;
  interconnectConfig?: CreateClusterNodePoolRequestInterconnectConfig;
  interconnectMode?: string;
  kubernetesConfig?: CreateClusterNodePoolRequestKubernetesConfig;
  management?: CreateClusterNodePoolRequestManagement;
  maxNodes?: number;
  nodeConfig?: CreateClusterNodePoolRequestNodeConfig;
  nodepoolInfo?: CreateClusterNodePoolRequestNodepoolInfo;
  scalingGroup?: CreateClusterNodePoolRequestScalingGroup;
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
  nodepoolId?: string;
  requestId?: string;
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
  hostname?: string;
  model?: string;
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
  edgeMachineId?: string;
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
  action?: string;
  clusterId?: string;
  projectId?: string;
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
  action?: string;
  clusterId?: string;
  id?: string;
  projectId?: string;
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
  description?: string;
  name?: string;
  tags?: string;
  template?: string;
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
  action?: string;
  clusterId?: string;
  projectId?: string;
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
  action?: string;
  clusterId?: string;
  id?: string;
  projectId?: string;
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
  body?: DeleteAlertContactResponseBody;
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
      body: DeleteAlertContactResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAlertContactGroupRequest extends $tea.Model {
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
  deleteOptions?: DeleteClusterRequestDeleteOptions[];
  keepSlb?: boolean;
  retainAllResources?: boolean;
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
  deleteOptionsShrink?: string;
  keepSlb?: boolean;
  retainAllResources?: boolean;
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
  requestId?: string;
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
  drainNode?: boolean;
  nodes?: string[];
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
  action?: string;
  namespaces?: string[];
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
  createTime?: string;
  duration?: string;
  finishTime?: string;
  inputDataSize?: string;
  jobName?: string;
  jobNamespace?: string;
  outputDataSize?: string;
  status?: string;
  totalBases?: string;
  totalReads?: string;
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
  clusterId?: string;
  clusterSpec?: string;
  clusterType?: string;
  clusterVersion?: string;
  profile?: string;
  regionId?: string;
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
  architecture?: string[];
  category?: string;
  configSchema?: string;
  installByDefault?: boolean;
  managed?: boolean;
  name?: string;
  newerVersions?: DescribeAddonResponseBodyNewerVersions[];
  supportedActions?: string[];
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
  clusterProfile?: string;
  clusterSpec?: string;
  clusterType?: string;
  clusterVersion?: string;
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
  componentGroups?: DescribeAddonsResponseBodyComponentGroups[];
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
  config?: string;
  name?: string;
  state?: string;
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
  configSchema?: string;
  name?: string;
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
  arch?: string;
  formatDisk?: boolean;
  keepInstanceName?: boolean;
  nodepoolId?: string;
  options?: string;
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
  clusterId?: string;
  clusterSpec?: string;
  clusterType?: string;
  created?: string;
  currentVersion?: string;
  deletionProtection?: boolean;
  dockerVersion?: string;
  externalLoadbalancerId?: string;
  initVersion?: string;
  maintenanceWindow?: MaintenanceWindow;
  masterUrl?: string;
  metaData?: string;
  name?: string;
  networkMode?: string;
  nextVersion?: string;
  parameters?: { [key: string]: string };
  privateZone?: boolean;
  profile?: string;
  regionId?: string;
  resourceGroupId?: string;
  securityGroupId?: string;
  size?: number;
  state?: string;
  subnetCidr?: string;
  tags?: Tag[];
  updated?: string;
  vpcId?: string;
  vswitchId?: string;
  workerRamRoleName?: string;
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
  pageNumber?: number;
  pageSize?: number;
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
  events?: DescribeClusterEventsResponseBodyEvents[];
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
  autoScaling?: DescribeClusterNodePoolDetailResponseBodyAutoScaling;
  interconnectConfig?: DescribeClusterNodePoolDetailResponseBodyInterconnectConfig;
  interconnectMode?: string;
  kubernetesConfig?: DescribeClusterNodePoolDetailResponseBodyKubernetesConfig;
  management?: DescribeClusterNodePoolDetailResponseBodyManagement;
  maxNodes?: number;
  nodeConfig?: DescribeClusterNodePoolDetailResponseBodyNodeConfig;
  nodepoolInfo?: DescribeClusterNodePoolDetailResponseBodyNodepoolInfo;
  scalingGroup?: DescribeClusterNodePoolDetailResponseBodyScalingGroup;
  status?: DescribeClusterNodePoolDetailResponseBodyStatus;
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
  instanceIds?: string;
  nodepoolId?: string;
  pageNumber?: string;
  pageSize?: string;
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
  nodes?: DescribeClusterNodesResponseBodyNodes[];
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
  pageNumber?: number;
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
  pageInfo?: DescribeClusterTasksResponseBodyPageInfo;
  requestId?: string;
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
  privateIpAddress?: boolean;
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
  config?: string;
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
  clusterType?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      clusterType: 'clusterType',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterType: 'string',
      name: 'string',
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
  clusterId?: string;
  clusterSpec?: string;
  clusterType?: string;
  name?: string;
  pageNumber?: number;
  pageSize?: number;
  profile?: string;
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
  clusters?: DescribeClustersV1ResponseBodyClusters[];
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
  logs?: string;
  progress?: number;
  requestId?: string;
  state?: string;
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
  deviceName?: string;
  model?: string;
  productKey?: string;
  requestId?: string;
  sn?: string;
  token?: string;
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
  hostname?: string;
  lifeState?: string;
  model?: string;
  onlineState?: string;
  pageNumber?: number;
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
  edgeMachines?: DescribeEdgeMachinesResponseBodyEdgeMachines[];
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
  clusterId?: string;
  pageNumber?: number;
  pageSize?: number;
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
  events?: DescribeEventsResponseBodyEvents[];
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
  agentMode?: string;
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
  clusterType?: string;
  kubernetesVersion?: string;
  mode?: string;
  profile?: string;
  queryUpgradableVersion?: boolean;
  region?: string;
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
  vulRecords?: DescribeNodePoolVulsResponseBodyVulRecords[];
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
  action?: string;
  category?: string;
  description?: string;
  isDeleted?: number;
  name?: string;
  noConfig?: number;
  severity?: string;
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
  admitLog?: DescribePolicyGovernanceInClusterResponseBodyAdmitLog;
  onState?: DescribePolicyGovernanceInClusterResponseBodyOnState[];
  totalViolations?: DescribePolicyGovernanceInClusterResponseBodyTotalViolations;
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
  instanceName?: string;
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
  instancesSeverityCount?: { [key: string]: any };
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

export class DescribeSubaccountK8sClusterUserConfigRequest extends $tea.Model {
  privateIpAddress?: boolean;
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
  config?: string;
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
  clusterId?: string;
  created?: string;
  currentStage?: string;
  error?: DescribeTaskInfoResponseBodyError;
  events?: DescribeTaskInfoResponseBodyEvents[];
  parameters?: { [key: string]: any };
  stages?: DescribeTaskInfoResponseBodyStages[];
  state?: string;
  target?: DescribeTaskInfoResponseBodyTarget;
  taskId?: string;
  taskResult?: DescribeTaskInfoResponseBodyTaskResult[];
  taskType?: string;
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
  pageNum?: number;
  pageSize?: number;
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
  pageInfo?: DescribeTemplatesResponseBodyPageInfo;
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
  name?: string;
  namespace?: string;
  type?: string;
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
  amkClusterQuota?: number;
  askClusterQuota?: number;
  clusterNodepoolQuota?: number;
  clusterQuota?: number;
  edgeImprovedNodepoolQuota?: DescribeUserQuotaResponseBodyEdgeImprovedNodepoolQuota;
  nodeQuota?: number;
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
  expired?: number;
  nodepoolId?: string;
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
  edgeMachineId?: string;
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
  autoRestart?: boolean;
  nodes?: string[];
  rolloutPolicy?: FixNodePoolVulsRequestRolloutPolicy;
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
  config?: string;
  logging?: GetClusterAddonInstanceResponseBodyLogging;
  name?: string;
  state?: string;
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

export class GetClusterCheckResponseBody extends $tea.Model {
  checkId?: string;
  checkItems?: { [key: string]: {[key: string ]: any}[] };
  createdAt?: string;
  finishedAt?: string;
  message?: string;
  status?: string;
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
  code?: string;
  isSuccess?: boolean;
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
  code?: number;
  created?: string;
  diagnosisId?: string;
  finished?: string;
  message?: string;
  result?: string;
  status?: number;
  target?: string;
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
  name?: string;
  namespace?: string;
  type?: string;
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
  errorMessage?: string;
  precheckReportId?: string;
  status?: string;
  upgradeStep?: string;
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
  clusterId?: string;
  clusterSpec?: string;
  clusterType?: string;
  clusterVersion?: string;
  profile?: string;
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
  target?: string;
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

export class ListOperationPlansRequest extends $tea.Model {
  clusterId?: string;
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
  nextToken?: string;
  regionId?: string;
  resourceIds?: string[];
  resourceType?: string;
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
  nextToken?: string;
  regionId?: string;
  resourceIdsShrink?: string;
  resourceType?: string;
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
  nextToken?: string;
  requestId?: string;
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

export class MigrateClusterRequest extends $tea.Model {
  ossBucketEndpoint?: string;
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
  accessControlList?: string[];
  apiServerCustomCertSans?: ModifyClusterRequestApiServerCustomCertSans;
  apiServerEip?: boolean;
  apiServerEipId?: string;
  clusterName?: string;
  deletionProtection?: boolean;
  enableRrsa?: boolean;
  ingressDomainRebinding?: boolean;
  ingressLoadbalancerId?: string;
  instanceDeletionProtection?: boolean;
  maintenanceWindow?: MaintenanceWindow;
  operationPolicy?: ModifyClusterRequestOperationPolicy;
  resourceGroupId?: string;
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
  autoScaling?: ModifyClusterNodePoolRequestAutoScaling;
  concurrency?: boolean;
  kubernetesConfig?: ModifyClusterNodePoolRequestKubernetesConfig;
  management?: ModifyClusterNodePoolRequestManagement;
  nodepoolInfo?: ModifyClusterNodePoolRequestNodepoolInfo;
  scalingGroup?: ModifyClusterNodePoolRequestScalingGroup;
  teeConfig?: ModifyClusterNodePoolRequestTeeConfig;
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
  nodepoolId?: string;
  requestId?: string;
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
  kubeletConfig?: KubeletConfig;
  osConfig?: ModifyNodePoolNodeConfigRequestOsConfig;
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
  nodepoolId?: string;
  requestId?: string;
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
  action?: string;
  instanceName?: string;
  namespaces?: string[];
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
  orderId?: string;
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
  drainNode?: boolean;
  nodes?: string[];
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
  concurrency?: boolean;
  drainNode?: boolean;
  instanceIds?: string[];
  nodes?: string[];
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
  concurrency?: boolean;
  drainNode?: boolean;
  instanceIdsShrink?: string;
  nodesShrink?: string;
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
  requestId?: string;
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
  autoRestart?: boolean;
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
  requestId?: string;
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

export class RunClusterCheckRequest extends $tea.Model {
  options?: { [key: string]: string };
  target?: string;
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
  checkId?: string;
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
  cloudMonitorFlags?: boolean;
  count?: number;
  cpuPolicy?: string;
  imageId?: string;
  keyPair?: string;
  loginPassword?: string;
  rdsInstances?: string[];
  runtime?: Runtime;
  tags?: Tag[];
  taints?: Taint[];
  userData?: string;
  vswitchIds?: string[];
  workerAutoRenew?: boolean;
  workerAutoRenewPeriod?: number;
  workerDataDisks?: ScaleOutClusterRequestWorkerDataDisks[];
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
  requestId?: string;
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
  alertRuleGroupName?: string;
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
  mappingBamOutFilename?: string;
  mappingBamOutPath?: string;
  mappingBucketName?: string;
  mappingFastqFirstFilename?: string;
  mappingFastqPath?: string;
  mappingFastqSecondFilename?: string;
  mappingIsMarkDup?: string;
  mappingOssRegion?: string;
  mappingReferencePath?: string;
  service?: string;
  wgsBucketName?: string;
  wgsFastqFirstFilename?: string;
  wgsFastqPath?: string;
  wgsFastqSecondFilename?: string;
  wgsOssRegion?: string;
  wgsReferencePath?: string;
  wgsVcfOutFilename?: string;
  wgsVcfOutPath?: string;
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
  alertRuleGroupName?: string;
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
  regionId?: string;
  resourceIds?: string[];
  resourceType?: string;
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
  all?: boolean;
  regionId?: string;
  resourceIds?: string[];
  resourceType?: string;
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
  all?: boolean;
  regionId?: string;
  resourceIdsShrink?: string;
  resourceType?: string;
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

export class UpdateContactGroupForAlertResponse extends $tea.Model {
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

export class UpdateControlPlaneLogRequest extends $tea.Model {
  aliuid?: string;
  components?: string[];
  logProject?: string;
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
  expireHour?: number;
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

export class UpdateTemplateRequest extends $tea.Model {
  description?: string;
  name?: string;
  tags?: string;
  template?: string;
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
  body?: UpdateUserPermissionsRequestBody[];
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
  componentName?: string;
  masterOnly?: boolean;
  nextVersion?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      componentName: 'component_name',
      masterOnly: 'master_only',
      nextVersion: 'next_version',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentName: 'string',
      masterOnly: 'boolean',
      nextVersion: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeClusterResponseBody extends $tea.Model {
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

export class UpgradeClusterAddonsResponse extends $tea.Model {
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

export class UpgradeClusterNodepoolRequest extends $tea.Model {
  imageId?: string;
  kubernetesVersion?: string;
  nodeNames?: string[];
  rollingPolicy?: UpgradeClusterNodepoolRequestRollingPolicy;
  runtimeType?: string;
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
  requestId?: string;
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
  eipBandwidth?: number;
  eipInternetChargeType?: string;
  enable?: boolean;
  isBondEip?: boolean;
  maxInstances?: number;
  minInstances?: number;
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
  bandwidth?: number;
  ccnId?: string;
  ccnRegionId?: string;
  cenId?: string;
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
  cmsEnabled?: boolean;
  cpuPolicy?: string;
  labels?: Tag[];
  nodeNameMode?: string;
  runtime?: string;
  runtimeVersion?: string;
  taints?: Taint[];
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
  restartNode?: boolean;
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
  autoUpgrade?: boolean;
  maxUnavailable?: number;
  surge?: number;
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
  autoRepair?: boolean;
  autoRepairPolicy?: NodepoolManagementAutoRepairPolicy;
  autoUpgrade?: boolean;
  autoUpgradePolicy?: NodepoolManagementAutoUpgradePolicy;
  autoVulFix?: boolean;
  autoVulFixPolicy?: NodepoolManagementAutoVulFixPolicy;
  enable?: boolean;
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
  name?: string;
  resourceGroupId?: string;
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
  instanceType?: string;
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

export class NodepoolScalingGroup extends $tea.Model {
  autoRenew?: boolean;
  autoRenewPeriod?: number;
  compensateWithOnDemand?: boolean;
  dataDisks?: DataDisk[];
  deploymentsetId?: string;
  desiredSize?: number;
  imageId?: string;
  imageType?: string;
  instanceChargeType?: string;
  instanceTypes?: string[];
  internetChargeType?: string;
  internetMaxBandwidthOut?: number;
  keyPair?: string;
  loginAsNonRoot?: boolean;
  loginPassword?: string;
  multiAzPolicy?: string;
  onDemandBaseCapacity?: number;
  onDemandPercentageAboveBaseCapacity?: number;
  period?: number;
  periodUnit?: string;
  platform?: string;
  privatePoolOptions?: NodepoolScalingGroupPrivatePoolOptions;
  rdsInstances?: string[];
  scalingPolicy?: string;
  securityGroupId?: string;
  securityGroupIds?: string[];
  spotInstancePools?: number;
  spotInstanceRemedy?: boolean;
  spotPriceLimit?: NodepoolScalingGroupSpotPriceLimit[];
  spotStrategy?: string;
  systemDiskBurstingEnabled?: boolean;
  systemDiskCategories?: string[];
  systemDiskCategory?: string;
  systemDiskEncryptAlgorithm?: string;
  systemDiskEncrypted?: boolean;
  systemDiskKmsKeyId?: string;
  systemDiskPerformanceLevel?: string;
  systemDiskProvisionedIops?: number;
  systemDiskSize?: number;
  tags?: NodepoolScalingGroupTags[];
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
  code?: string;
  instanceId?: string;
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
  granted?: boolean;
  message?: string;
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
  category?: string;
  encrypted?: string;
  performanceLevel?: string;
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
  eipBandwidth?: number;
  eipInternetChargeType?: string;
  enable?: boolean;
  isBondEip?: boolean;
  maxInstances?: number;
  minInstances?: number;
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
  bandwidth?: number;
  ccnId?: string;
  ccnRegionId?: string;
  cenId?: string;
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
  cmsEnabled?: boolean;
  cpuPolicy?: string;
  labels?: Tag[];
  nodeNameMode?: string;
  runtime?: string;
  runtimeVersion?: string;
  taints?: Taint[];
  unschedulable?: boolean;
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
  autoUpgradeKubelet?: boolean;
  autoUpgradeOs?: boolean;
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
  restartNode?: boolean;
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
  autoUpgrade?: boolean;
  maxUnavailable?: number;
  surge?: number;
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
  autoRepair?: boolean;
  autoRepairPolicy?: CreateClusterNodePoolRequestManagementAutoRepairPolicy;
  autoUpgrade?: boolean;
  autoUpgradePolicy?: CreateClusterNodePoolRequestManagementAutoUpgradePolicy;
  autoVulFix?: boolean;
  autoVulFixPolicy?: CreateClusterNodePoolRequestManagementAutoVulFixPolicy;
  enable?: boolean;
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
  name?: string;
  resourceGroupId?: string;
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

export class CreateClusterNodePoolRequestScalingGroupSpotPriceLimit extends $tea.Model {
  instanceType?: string;
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

export class CreateClusterNodePoolRequestScalingGroup extends $tea.Model {
  autoRenew?: boolean;
  autoRenewPeriod?: number;
  cisEnabled?: boolean;
  compensateWithOnDemand?: boolean;
  dataDisks?: DataDisk[];
  deploymentsetId?: string;
  desiredSize?: number;
  imageId?: string;
  imageType?: string;
  instanceChargeType?: string;
  instanceTypes?: string[];
  internetChargeType?: string;
  internetMaxBandwidthOut?: number;
  keyPair?: string;
  loginAsNonRoot?: boolean;
  loginPassword?: string;
  multiAzPolicy?: string;
  onDemandBaseCapacity?: number;
  onDemandPercentageAboveBaseCapacity?: number;
  period?: number;
  periodUnit?: string;
  platform?: string;
  privatePoolOptions?: CreateClusterNodePoolRequestScalingGroupPrivatePoolOptions;
  rdsInstances?: string[];
  scalingPolicy?: string;
  securityGroupId?: string;
  securityGroupIds?: string[];
  securityHardeningOs?: boolean;
  socEnabled?: boolean;
  spotInstancePools?: number;
  spotInstanceRemedy?: boolean;
  spotPriceLimit?: CreateClusterNodePoolRequestScalingGroupSpotPriceLimit[];
  spotStrategy?: string;
  systemDiskBurstingEnabled?: boolean;
  systemDiskCategories?: string[];
  systemDiskCategory?: string;
  systemDiskEncryptAlgorithm?: string;
  systemDiskEncrypted?: boolean;
  systemDiskKmsKeyId?: string;
  systemDiskPerformanceLevel?: string;
  systemDiskProvisionedIops?: number;
  systemDiskSize?: number;
  tags?: CreateClusterNodePoolRequestScalingGroupTags[];
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

export class DeleteAlertContactResponseBodyBody extends $tea.Model {
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

export class DeleteAlertContactResponseBody extends $tea.Model {
  body?: DeleteAlertContactResponseBodyBody[];
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: { 'type': 'array', 'itemType': DeleteAlertContactResponseBodyBody },
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
  deleteMode?: string;
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
  minimumClusterVersion?: string;
  upgradable?: boolean;
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
  groupName?: string;
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
  level?: string;
  message?: string;
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
  clusterId?: string;
  data?: DescribeClusterEventsResponseBodyEventsData;
  eventId?: string;
  source?: string;
  subject?: string;
  time?: string;
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
  pageNumber?: number;
  pageSize?: number;
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
  ID?: number;
  clusterId?: string;
  clusterLog?: string;
  created?: string;
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
  eipBandwidth?: number;
  eipInternetChargeType?: string;
  enable?: boolean;
  isBondEip?: boolean;
  maxInstances?: number;
  minInstances?: number;
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
  bandwidth?: number;
  ccnId?: string;
  ccnRegionId?: string;
  cenId?: string;
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
  cmsEnabled?: boolean;
  cpuPolicy?: string;
  labels?: Tag[];
  nodeNameMode?: string;
  runtime?: string;
  runtimeVersion?: string;
  taints?: Taint[];
  unschedulable?: boolean;
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
  restartNode?: boolean;
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
  autoUpgrade?: boolean;
  maxUnavailable?: number;
  surge?: number;
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
  autoRepair?: boolean;
  autoRepairPolicy?: DescribeClusterNodePoolDetailResponseBodyManagementAutoRepairPolicy;
  autoUpgrade?: boolean;
  autoUpgradePolicy?: DescribeClusterNodePoolDetailResponseBodyManagementAutoUpgradePolicy;
  autoVulFix?: boolean;
  autoVulFixPolicy?: DescribeClusterNodePoolDetailResponseBodyManagementAutoVulFixPolicy;
  enable?: boolean;
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
  created?: string;
  isDefault?: boolean;
  name?: string;
  nodepoolId?: string;
  regionId?: string;
  resourceGroupId?: string;
  type?: string;
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

export class DescribeClusterNodePoolDetailResponseBodyScalingGroupSpotPriceLimit extends $tea.Model {
  instanceType?: string;
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
  autoRenew?: boolean;
  autoRenewPeriod?: number;
  cisEnabled?: boolean;
  compensateWithOnDemand?: boolean;
  dataDisks?: DataDisk[];
  deploymentsetId?: string;
  desiredSize?: number;
  imageId?: string;
  imageType?: string;
  instanceChargeType?: string;
  instanceTypes?: string[];
  internetChargeType?: string;
  internetMaxBandwidthOut?: number;
  keyPair?: string;
  loginAsNonRoot?: boolean;
  loginPassword?: string;
  multiAzPolicy?: string;
  onDemandBaseCapacity?: number;
  onDemandPercentageAboveBaseCapacity?: number;
  period?: number;
  periodUnit?: string;
  platform?: string;
  privatePoolOptions?: DescribeClusterNodePoolDetailResponseBodyScalingGroupPrivatePoolOptions;
  ramPolicy?: string;
  rdsInstances?: string[];
  scalingGroupId?: string;
  scalingPolicy?: string;
  securityGroupId?: string;
  securityGroupIds?: string[];
  securityHardeningOs?: boolean;
  socEnabled?: boolean;
  spotInstancePools?: number;
  spotInstanceRemedy?: boolean;
  spotPriceLimit?: DescribeClusterNodePoolDetailResponseBodyScalingGroupSpotPriceLimit[];
  spotStrategy?: string;
  systemDiskBurstingEnabled?: boolean;
  systemDiskCategories?: string[];
  systemDiskCategory?: string;
  systemDiskEncryptAlgorithm?: string;
  systemDiskEncrypted?: boolean;
  systemDiskKmsKeyId?: string;
  systemDiskPerformanceLevel?: string;
  systemDiskProvisionedIops?: number;
  systemDiskSize?: number;
  tags?: Tag[];
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
  failedNodes?: number;
  healthyNodes?: number;
  initialNodes?: number;
  offlineNodes?: number;
  removingNodes?: number;
  servingNodes?: number;
  state?: string;
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
  eipBandwidth?: number;
  eipInternetChargeType?: string;
  enable?: boolean;
  isBondEip?: boolean;
  maxInstances?: number;
  minInstances?: number;
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
  bandwidth?: number;
  ccnId?: string;
  ccnRegionId?: string;
  cenId?: string;
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
  cmsEnabled?: boolean;
  cpuPolicy?: string;
  labels?: Tag[];
  nodeNameMode?: string;
  runtime?: string;
  runtimeVersion?: string;
  taints?: Taint[];
  unschedulable?: boolean;
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
  restartNode?: boolean;
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
  autoUpgrade?: boolean;
  maxUnavailable?: number;
  surge?: number;
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
  autoRepair?: boolean;
  autoRepairPolicy?: DescribeClusterNodePoolsResponseBodyNodepoolsManagementAutoRepairPolicy;
  autoUpgrade?: boolean;
  autoUpgradePolicy?: DescribeClusterNodePoolsResponseBodyNodepoolsManagementAutoUpgradePolicy;
  autoVulFix?: boolean;
  autoVulFixPolicy?: DescribeClusterNodePoolsResponseBodyNodepoolsManagementAutoVulFixPolicy;
  enable?: boolean;
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
  created?: string;
  isDefault?: boolean;
  name?: string;
  nodepoolId?: string;
  regionId?: string;
  resourceGroupId?: string;
  type?: string;
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

export class DescribeClusterNodePoolsResponseBodyNodepoolsScalingGroupSpotPriceLimit extends $tea.Model {
  instanceType?: string;
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
  autoRenew?: boolean;
  autoRenewPeriod?: number;
  cisEnabled?: boolean;
  compensateWithOnDemand?: boolean;
  dataDisks?: DataDisk[];
  deploymentsetId?: string;
  desiredSize?: number;
  imageId?: string;
  imageType?: string;
  instanceChargeType?: string;
  instanceTypes?: string[];
  internetChargeType?: string;
  internetMaxBandwidthOut?: number;
  keyPair?: string;
  loginAsNonRoot?: boolean;
  loginPassword?: string;
  multiAzPolicy?: string;
  onDemandBaseCapacity?: number;
  onDemandPercentageAboveBaseCapacity?: number;
  period?: number;
  periodUnit?: string;
  platform?: string;
  privatePoolOptions?: DescribeClusterNodePoolsResponseBodyNodepoolsScalingGroupPrivatePoolOptions;
  ramPolicy?: string;
  rdsInstances?: string[];
  scalingGroupId?: string;
  scalingPolicy?: string;
  securityGroupId?: string;
  securityGroupIds?: string[];
  securityHardeningOs?: boolean;
  socEnabled?: boolean;
  spotInstancePools?: number;
  spotInstanceRemedy?: boolean;
  spotPriceLimit?: DescribeClusterNodePoolsResponseBodyNodepoolsScalingGroupSpotPriceLimit[];
  spotStrategy?: string;
  systemDiskBurstingEnabled?: boolean;
  systemDiskCategories?: string[];
  systemDiskCategory?: string;
  systemDiskEncryptAlgorithm?: string;
  systemDiskEncrypted?: boolean;
  systemDiskKmsKeyId?: string;
  systemDiskPerformanceLevel?: string;
  systemDiskProvisionedIops?: number;
  systemDiskSize?: number;
  tags?: Tag[];
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
  failedNodes?: number;
  healthyNodes?: number;
  initialNodes?: number;
  offlineNodes?: number;
  removingNodes?: number;
  servingNodes?: number;
  state?: string;
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
  autoScaling?: DescribeClusterNodePoolsResponseBodyNodepoolsAutoScaling;
  interconnectConfig?: DescribeClusterNodePoolsResponseBodyNodepoolsInterconnectConfig;
  interconnectMode?: string;
  kubernetesConfig?: DescribeClusterNodePoolsResponseBodyNodepoolsKubernetesConfig;
  management?: DescribeClusterNodePoolsResponseBodyNodepoolsManagement;
  maxNodes?: number;
  nodeConfig?: DescribeClusterNodePoolsResponseBodyNodepoolsNodeConfig;
  nodepoolInfo?: DescribeClusterNodePoolsResponseBodyNodepoolsNodepoolInfo;
  scalingGroup?: DescribeClusterNodePoolsResponseBodyNodepoolsScalingGroup;
  status?: DescribeClusterNodePoolsResponseBodyNodepoolsStatus;
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
  creationTime?: string;
  errorMessage?: string;
  expiredTime?: string;
  hostName?: string;
  imageId?: string;
  instanceChargeType?: string;
  instanceId?: string;
  instanceName?: string;
  instanceRole?: string;
  instanceStatus?: string;
  instanceType?: string;
  instanceTypeFamily?: string;
  ipAddress?: string[];
  isAliyunNode?: boolean;
  nodeName?: string;
  nodeStatus?: string;
  nodepoolId?: string;
  source?: string;
  spotStrategy?: string;
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
  pageNumber?: number;
  pageSize?: number;
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
  kind?: string;
  namespace?: string;
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
  deleteByDefault?: boolean;
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
  clusterId?: string;
  created?: string;
  instanceId?: string;
  resourceInfo?: string;
  resourceType?: string;
  state?: string;
  autoCreate?: number;
  dependencies?: DescribeClusterResourcesResponseBodyDependencies[];
  associatedObject?: DescribeClusterResourcesResponseBodyAssociatedObject;
  deleteBehavior?: DescribeClusterResourcesResponseBodyDeleteBehavior;
  creatorType?: string;
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
  pageNumber?: number;
  pageSize?: number;
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
  code?: string;
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
  created?: string;
  error?: DescribeClusterTasksResponseBodyTasksError;
  state?: string;
  taskId?: string;
  taskType?: string;
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
  cveList?: string[];
  necessity?: string;
  nodeCount?: number;
  nodepoolId?: string;
  nodepoolName?: string;
  vulAliasName?: string;
  vulName?: string;
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
  clusterId?: string;
  clusterSpec?: string;
  clusterType?: string;
  created?: string;
  currentVersion?: string;
  deletionProtection?: boolean;
  dockerVersion?: string;
  externalLoadbalancerId?: string;
  initVersion?: string;
  maintenanceWindow?: MaintenanceWindow;
  masterUrl?: string;
  metaData?: string;
  name?: string;
  networkMode?: string;
  nextVersion?: string;
  privateZone?: boolean;
  profile?: string;
  regionId?: string;
  resourceGroupId?: string;
  securityGroupId?: string;
  size?: number;
  state?: string;
  subnetCidr?: string;
  tags?: Tag[];
  updated?: string;
  vpcId?: string;
  vswitchId?: string;
  workerRamRoleName?: string;
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
  pageNumber?: number;
  pageSize?: number;
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
  cpu?: number;
  cpuArch?: string;
  created?: string;
  description?: string;
  manageRuntime?: number;
  memory?: number;
  model?: string;
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
  activeTime?: string;
  created?: string;
  edgeMachineId?: string;
  hostname?: string;
  lifeState?: string;
  model?: string;
  name?: string;
  onlineState?: string;
  sn?: string;
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
  pageNumber?: number;
  pageSize?: number;
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
  level?: string;
  message?: string;
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
  clusterId?: string;
  data?: DescribeEventsResponseBodyEventsData;
  eventId?: string;
  source?: string;
  subject?: string;
  time?: string;
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
  pageNumber?: number;
  pageSize?: number;
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
  imageId?: string;
  imageName?: string;
  platform?: string;
  osVersion?: string;
  imageType?: string;
  osType?: string;
  imageCategory?: string;
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
  capabilities?: { [key: string]: any };
  images?: DescribeKubernetesVersionMetadataResponseBodyImages[];
  metaData?: { [key: string]: any };
  runtimes?: Runtime[];
  version?: string;
  releaseDate?: string;
  expirationDate?: string;
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
  aliasName?: string;
  cveList?: string[];
  name?: string;
  necessity?: string;
  static names(): { [key: string]: string } {
    return {
      aliasName: 'alias_name',
      cveList: 'cve_list',
      name: 'name',
      necessity: 'necessity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasName: 'string',
      cveList: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      necessity: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNodePoolVulsResponseBodyVulRecords extends $tea.Model {
  instanceId?: string;
  nodeName?: string;
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
  clusterId?: string;
  constraintKind?: string;
  msg?: string;
  resourceKind?: string;
  resourceName?: string;
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
  count?: number;
  log?: DescribePolicyGovernanceInClusterResponseBodyAdmitLogLog;
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
  enabledCount?: number;
  severity?: string;
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
  severity?: string;
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
  severity?: string;
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
  deny?: DescribePolicyGovernanceInClusterResponseBodyTotalViolationsDeny;
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
  policyDescription?: string;
  policyName?: string;
  severity?: string;
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
  policyDescription?: string;
  policyName?: string;
  severity?: string;
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
  deny?: DescribePolicyGovernanceInClusterResponseBodyViolationsDeny;
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
  aliUid?: string;
  clusterId?: string;
  instanceName?: string;
  policyName?: string;
  policyCategory?: string;
  policyDescription?: string;
  policyParameters?: string;
  policySeverity?: string;
  policyScope?: string;
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
  policyCategory?: string;
  policyDescription?: string;
  policyInstancesCount?: number;
  policyName?: string;
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

export class DescribeTaskInfoResponseBodyError extends $tea.Model {
  code?: string;
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
  action?: string;
  level?: string;
  message?: string;
  reason?: string;
  source?: string;
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
  endTime?: string;
  message?: string;
  outputs?: { [key: string]: any };
  startTime?: string;
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
  id?: string;
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
  data?: string;
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
  id?: string;
  acl?: string;
  name?: string;
  template?: string;
  templateType?: string;
  description?: string;
  tags?: string;
  templateWithHistId?: string;
  created?: string;
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
  pageNumber?: number;
  pageSize?: number;
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
  acl?: string;
  created?: string;
  description?: string;
  id?: string;
  name?: string;
  tags?: string;
  template?: string;
  templateType?: string;
  templateWithHistId?: string;
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
  id?: string;
  name?: string;
  clusterId?: string;
  projectId?: string;
  type?: string;
  action?: string;
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
  resourceId?: string;
  resourceType?: string;
  roleName?: string;
  roleType?: string;
  isOwner?: number;
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
  bandwidth?: number;
  count?: number;
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
  clusterId?: string;
  createTime?: string;
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
  capable?: boolean;
  enabled?: boolean;
  logProject?: string;
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
  desc?: string;
  display?: string;
  group?: string;
  level?: string;
  message?: string;
  name?: string;
  refer?: string;
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
  id?: string;
  name?: string;
  clusterId?: string;
  projectId?: string;
  type?: string;
  action?: string;
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
  message?: string;
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
  cluster?: string;
  isCustom?: boolean;
  isRamRole?: boolean;
  namespace?: string;
  roleName?: string;
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
  config?: string;
  name?: string;
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
  architecture?: string[];
  category?: string;
  configSchema?: string;
  installByDefault?: boolean;
  managed?: boolean;
  name?: string;
  supportedActions?: string[];
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
  name?: string;
  state?: string;
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
  checkId?: string;
  createdAt?: string;
  finishedAt?: string;
  message?: string;
  status?: string;
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

export class ListOperationPlansResponseBodyPlans extends $tea.Model {
  clusterId?: string;
  created?: string;
  endTime?: string;
  planId?: string;
  startTime?: string;
  state?: string;
  targetId?: string;
  targetType?: string;
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
  resourceId?: string;
  resourceType?: string;
  tagKey?: string;
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

export class ModifyClusterRequestApiServerCustomCertSans extends $tea.Model {
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
  channel?: string;
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
  enabled?: boolean;
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

export class ModifyClusterConfigurationRequestCustomizeConfig extends $tea.Model {
  configs?: ModifyClusterConfigurationRequestCustomizeConfigConfigs[];
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
  eipBandwidth?: number;
  eipInternetChargeType?: string;
  enable?: boolean;
  isBondEip?: boolean;
  maxInstances?: number;
  minInstances?: number;
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
  cmsEnabled?: boolean;
  cpuPolicy?: string;
  labels?: Tag[];
  runtime?: string;
  runtimeVersion?: string;
  taints?: Taint[];
  unschedulable?: boolean;
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
  autoUpgradeKubelet?: boolean;
  autoUpgradeOs?: boolean;
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
  restartNode?: boolean;
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
  autoUpgrade?: boolean;
  maxUnavailable?: number;
  surge?: number;
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
  autoRepair?: boolean;
  autoRepairPolicy?: ModifyClusterNodePoolRequestManagementAutoRepairPolicy;
  autoUpgrade?: boolean;
  autoUpgradePolicy?: ModifyClusterNodePoolRequestManagementAutoUpgradePolicy;
  autoVulFix?: boolean;
  autoVulFixPolicy?: ModifyClusterNodePoolRequestManagementAutoVulFixPolicy;
  enable?: boolean;
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
  name?: string;
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

export class ModifyClusterNodePoolRequestScalingGroupSpotPriceLimit extends $tea.Model {
  instanceType?: string;
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
  autoRenew?: boolean;
  autoRenewPeriod?: number;
  compensateWithOnDemand?: boolean;
  dataDisks?: DataDisk[];
  desiredSize?: number;
  imageId?: string;
  imageType?: string;
  instanceChargeType?: string;
  instanceTypes?: string[];
  internetChargeType?: string;
  internetMaxBandwidthOut?: number;
  keyPair?: string;
  loginPassword?: string;
  multiAzPolicy?: string;
  onDemandBaseCapacity?: number;
  onDemandPercentageAboveBaseCapacity?: number;
  period?: number;
  periodUnit?: string;
  platform?: string;
  privatePoolOptions?: ModifyClusterNodePoolRequestScalingGroupPrivatePoolOptions;
  rdsInstances?: string[];
  scalingPolicy?: string;
  spotInstancePools?: number;
  spotInstanceRemedy?: boolean;
  spotPriceLimit?: ModifyClusterNodePoolRequestScalingGroupSpotPriceLimit[];
  spotStrategy?: string;
  systemDiskBurstingEnabled?: boolean;
  systemDiskCategories?: string[];
  systemDiskCategory?: string;
  systemDiskEncryptAlgorithm?: string;
  systemDiskEncrypted?: boolean;
  systemDiskKmsKeyId?: string;
  systemDiskPerformanceLevel?: string;
  systemDiskProvisionedIops?: number;
  systemDiskSize?: number;
  tags?: Tag[];
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
  autoSnapshotPolicyId?: string;
  category?: string;
  encrypted?: string;
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
  cleanupCloudResources?: boolean;
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
  cluster?: string;
  isCustom?: boolean;
  isRamRole?: boolean;
  namespace?: string;
  roleName?: string;
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

export class UpgradeClusterAddonsRequestBody extends $tea.Model {
  componentName?: string;
  config?: string;
  nextVersion?: string;
  policy?: string;
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
   * @summary You can call the AttachInstances operation to add existing Elastic Compute Service (ECS) instances to a cluster.
   *
   * @param request AttachInstancesRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return AttachInstancesResponse
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
   * @summary You can call the AttachInstances operation to add existing Elastic Compute Service (ECS) instances to a cluster.
   *
   * @param request AttachInstancesRequest
   * @return AttachInstancesResponse
   */
  async attachInstances(ClusterId: string, request: AttachInstancesRequest): Promise<AttachInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.attachInstancesWithOptions(ClusterId, request, headers, runtime);
  }

  /**
   * @summary You can call the AttachInstancesToNodePool operation to add existing nodes to a node pool.
   *
   * @param request AttachInstancesToNodePoolRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return AttachInstancesToNodePoolResponse
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
   * @summary You can call the AttachInstancesToNodePool operation to add existing nodes to a node pool.
   *
   * @param request AttachInstancesToNodePoolRequest
   * @return AttachInstancesToNodePoolResponse
   */
  async attachInstancesToNodePool(ClusterId: string, NodepoolId: string, request: AttachInstancesToNodePoolRequest): Promise<AttachInstancesToNodePoolResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.attachInstancesToNodePoolWithOptions(ClusterId, NodepoolId, request, headers, runtime);
  }

  /**
   * @deprecated OpenAPI CancelClusterUpgrade is deprecated
   *
   * @summary You can call the CancelClusterUpgrade operation to cancel the update of a cluster.
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return CancelClusterUpgradeResponse
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
   * @deprecated OpenAPI CancelClusterUpgrade is deprecated
   *
   * @summary You can call the CancelClusterUpgrade operation to cancel the update of a cluster.
   *
   * @return CancelClusterUpgradeResponse
   */
  // Deprecated
  async cancelClusterUpgrade(ClusterId: string): Promise<CancelClusterUpgradeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cancelClusterUpgradeWithOptions(ClusterId, headers, runtime);
  }

  /**
   * @summary You can call the CancelComponentUpgrade operation to cancel the update of a component.
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return CancelComponentUpgradeResponse
   */
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
   * @summary You can call the CancelComponentUpgrade operation to cancel the update of a component.
   *
   * @return CancelComponentUpgradeResponse
   */
  async cancelComponentUpgrade(clusterId: string, componentId: string): Promise<CancelComponentUpgradeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cancelComponentUpgradeWithOptions(clusterId, componentId, headers, runtime);
  }

  /**
   * @summary 取消自动运维执行计划
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return CancelOperationPlanResponse
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
   * @summary 取消自动运维执行计划
   *
   * @return CancelOperationPlanResponse
   */
  async cancelOperationPlan(planId: string): Promise<CancelOperationPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cancelOperationPlanWithOptions(planId, headers, runtime);
  }

  /**
   * @summary You can call the CancelTask operation to cancel a task.
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return CancelTaskResponse
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
   * @summary You can call the CancelTask operation to cancel a task.
   *
   * @return CancelTaskResponse
   */
  async cancelTask(taskId: string): Promise<CancelTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cancelTaskWithOptions(taskId, headers, runtime);
  }

  /**
   * @summary You can call the CancelWorkflow operation to cancel an ongoing workflow.
   *
   * @param request CancelWorkflowRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return CancelWorkflowResponse
   */
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
   * @summary You can call the CancelWorkflow operation to cancel an ongoing workflow.
   *
   * @param request CancelWorkflowRequest
   * @return CancelWorkflowResponse
   */
  async cancelWorkflow(workflowName: string, request: CancelWorkflowRequest): Promise<CancelWorkflowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cancelWorkflowWithOptions(workflowName, request, headers, runtime);
  }

  /**
   * @summary Queries the current log configuration of control plane components, including the log retention period and the log collection component. Container Service for Kubernetes (ACK) managed clusters can collect the logs of control plane components and deliver the logs to projects in Simple Log Service. These control plane components include Kube API Server, Kube Scheduler, Kube Controller Manager, and Cloud Controller Manager.
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return CheckControlPlaneLogEnableResponse
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
   * @summary Queries the current log configuration of control plane components, including the log retention period and the log collection component. Container Service for Kubernetes (ACK) managed clusters can collect the logs of control plane components and deliver the logs to projects in Simple Log Service. These control plane components include Kube API Server, Kube Scheduler, Kube Controller Manager, and Cloud Controller Manager.
   *
   * @return CheckControlPlaneLogEnableResponse
   */
  async checkControlPlaneLogEnable(ClusterId: string): Promise<CheckControlPlaneLogEnableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.checkControlPlaneLogEnableWithOptions(ClusterId, headers, runtime);
  }

  /**
   * @summary 检查是否授权指定服务角色
   *
   * @param request CheckServiceRoleRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return CheckServiceRoleResponse
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
   * @summary 检查是否授权指定服务角色
   *
   * @param request CheckServiceRoleRequest
   * @return CheckServiceRoleResponse
   */
  async checkServiceRole(request: CheckServiceRoleRequest): Promise<CheckServiceRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.checkServiceRoleWithOptions(request, headers, runtime);
  }

  /**
   * @summary Creates a scaling configuration to allow the system to scale resources based on the given scaling rules. When you create a scaling configuration, you can specify the scaling metrics, thresholds, scaling order, and scaling interval.
   *
   * @param request CreateAutoscalingConfigRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateAutoscalingConfigResponse
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
   * @summary Creates a scaling configuration to allow the system to scale resources based on the given scaling rules. When you create a scaling configuration, you can specify the scaling metrics, thresholds, scaling order, and scaling interval.
   *
   * @param request CreateAutoscalingConfigRequest
   * @return CreateAutoscalingConfigResponse
   */
  async createAutoscalingConfig(ClusterId: string, request: CreateAutoscalingConfigRequest): Promise<CreateAutoscalingConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createAutoscalingConfigWithOptions(ClusterId, request, headers, runtime);
  }

  /**
   * @summary You can call the CreateCluster operation to create a Container Service for Kubernetes (ACK) cluster. ACK clusters include ACK managed clusters, ACK dedicated clusters, ACK Serverless clusters, ACK Edge clusters, ACK clusters that support sandboxed containers, and registered clusters. For more information about how to create different types of ACK clusters, see the following usage notes.
   *
   * @description This topic describes all parameters for creating an ACK cluster. You can create the following types of ACK clusters.
   * *   [Create an ACK managed cluster](https://help.aliyun.com/document_detail/90776.html)
   * *   [Create an ACK dedicated cluster](https://help.aliyun.com/document_detail/197620.html)
   * *   [Create an ACK Serverless cluster](https://help.aliyun.com/document_detail/144246.html)
   * *   [Create an ACK Edge cluster](https://help.aliyun.com/document_detail/128204.html)
   * *   [Create an ACK Basic cluster that supports sandboxed containers](https://help.aliyun.com/document_detail/196321.html)
   * *   [Create an ACK Pro cluster that supports sandboxed containers](https://help.aliyun.com/document_detail/140623.html)
   *
   * @param request CreateClusterRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateClusterResponse
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
   * @summary You can call the CreateCluster operation to create a Container Service for Kubernetes (ACK) cluster. ACK clusters include ACK managed clusters, ACK dedicated clusters, ACK Serverless clusters, ACK Edge clusters, ACK clusters that support sandboxed containers, and registered clusters. For more information about how to create different types of ACK clusters, see the following usage notes.
   *
   * @description This topic describes all parameters for creating an ACK cluster. You can create the following types of ACK clusters.
   * *   [Create an ACK managed cluster](https://help.aliyun.com/document_detail/90776.html)
   * *   [Create an ACK dedicated cluster](https://help.aliyun.com/document_detail/197620.html)
   * *   [Create an ACK Serverless cluster](https://help.aliyun.com/document_detail/144246.html)
   * *   [Create an ACK Edge cluster](https://help.aliyun.com/document_detail/128204.html)
   * *   [Create an ACK Basic cluster that supports sandboxed containers](https://help.aliyun.com/document_detail/196321.html)
   * *   [Create an ACK Pro cluster that supports sandboxed containers](https://help.aliyun.com/document_detail/140623.html)
   *
   * @param request CreateClusterRequest
   * @return CreateClusterResponse
   */
  async createCluster(request: CreateClusterRequest): Promise<CreateClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createClusterWithOptions(request, headers, runtime);
  }

  /**
   * @summary 发起集群诊断
   *
   * @param request CreateClusterDiagnosisRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateClusterDiagnosisResponse
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
   * @summary 发起集群诊断
   *
   * @param request CreateClusterDiagnosisRequest
   * @return CreateClusterDiagnosisResponse
   */
  async createClusterDiagnosis(clusterId: string, request: CreateClusterDiagnosisRequest): Promise<CreateClusterDiagnosisResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createClusterDiagnosisWithOptions(clusterId, request, headers, runtime);
  }

  /**
   * @summary Creates a node pool for a Container Service for Kubernetes (ACK) cluster. You can use node pools to facilitate node management. For example, you can schedule, configure, or maintain nodes by node pool, and enable auto scaling for a node pool. We recommend that you use a managed node pool, which can help automate specific O\\&M tasks for nodes, such as Common Vulnerabilities and Exposures (CVE) patching and node repair. This reduces your O\\&M workload.
   *
   * @param request CreateClusterNodePoolRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateClusterNodePoolResponse
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
   * @summary Creates a node pool for a Container Service for Kubernetes (ACK) cluster. You can use node pools to facilitate node management. For example, you can schedule, configure, or maintain nodes by node pool, and enable auto scaling for a node pool. We recommend that you use a managed node pool, which can help automate specific O\\&M tasks for nodes, such as Common Vulnerabilities and Exposures (CVE) patching and node repair. This reduces your O\\&M workload.
   *
   * @param request CreateClusterNodePoolRequest
   * @return CreateClusterNodePoolResponse
   */
  async createClusterNodePool(ClusterId: string, request: CreateClusterNodePoolRequest): Promise<CreateClusterNodePoolResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createClusterNodePoolWithOptions(ClusterId, request, headers, runtime);
  }

  /**
   * @summary You can call the CreateEdgeMachine operation to activate a cloud-native box.
   *
   * @param request CreateEdgeMachineRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateEdgeMachineResponse
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
   * @summary You can call the CreateEdgeMachine operation to activate a cloud-native box.
   *
   * @param request CreateEdgeMachineRequest
   * @return CreateEdgeMachineResponse
   */
  async createEdgeMachine(request: CreateEdgeMachineRequest): Promise<CreateEdgeMachineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createEdgeMachineWithOptions(request, headers, runtime);
  }

  /**
   * @summary You can call the CreateKubernetesTrigger operation to create a trigger for an application.
   *
   * @param request CreateKubernetesTriggerRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateKubernetesTriggerResponse
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
   * @summary You can call the CreateKubernetesTrigger operation to create a trigger for an application.
   *
   * @param request CreateKubernetesTriggerRequest
   * @return CreateKubernetesTriggerResponse
   */
  async createKubernetesTrigger(request: CreateKubernetesTriggerRequest): Promise<CreateKubernetesTriggerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createKubernetesTriggerWithOptions(request, headers, runtime);
  }

  /**
   * @summary Creates an orchestration template. An orchestration template defines and describes a group of Kubernetes resources. It declaratively describes the configuration of an application or how an application runs. You can use orchestration templates to manage resources in Kubernetes clusters and automate resource deployment, such as pods, Services, Deployments, ConfigMaps, and persistent volumes (PVs).
   *
   * @param request CreateTemplateRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateTemplateResponse
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
   * @summary Creates an orchestration template. An orchestration template defines and describes a group of Kubernetes resources. It declaratively describes the configuration of an application or how an application runs. You can use orchestration templates to manage resources in Kubernetes clusters and automate resource deployment, such as pods, Services, Deployments, ConfigMaps, and persistent volumes (PVs).
   *
   * @param request CreateTemplateRequest
   * @return CreateTemplateResponse
   */
  async createTemplate(request: CreateTemplateRequest): Promise<CreateTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createTemplateWithOptions(request, headers, runtime);
  }

  /**
   * @summary You can call the CreateTrigger operation to create a trigger for an application.
   *
   * @param request CreateTriggerRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateTriggerResponse
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
   * @summary You can call the CreateTrigger operation to create a trigger for an application.
   *
   * @param request CreateTriggerRequest
   * @return CreateTriggerResponse
   */
  async createTrigger(clusterId: string, request: CreateTriggerRequest): Promise<CreateTriggerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createTriggerWithOptions(clusterId, request, headers, runtime);
  }

  /**
   * @param tmpReq DeleteAlertContactRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteAlertContactResponse
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
   * @param request DeleteAlertContactRequest
   * @return DeleteAlertContactResponse
   */
  async deleteAlertContact(request: DeleteAlertContactRequest): Promise<DeleteAlertContactResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteAlertContactWithOptions(request, headers, runtime);
  }

  /**
   * @param tmpReq DeleteAlertContactGroupRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteAlertContactGroupResponse
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
   * @param request DeleteAlertContactGroupRequest
   * @return DeleteAlertContactGroupResponse
   */
  async deleteAlertContactGroup(request: DeleteAlertContactGroupRequest): Promise<DeleteAlertContactGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteAlertContactGroupWithOptions(request, headers, runtime);
  }

  /**
   * @summary You can call the DeleteCluster operation to delete a cluster by cluster ID and release all nodes in the cluster.
   *
   * @param tmpReq DeleteClusterRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteClusterResponse
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
   * @summary You can call the DeleteCluster operation to delete a cluster by cluster ID and release all nodes in the cluster.
   *
   * @param request DeleteClusterRequest
   * @return DeleteClusterResponse
   */
  async deleteCluster(ClusterId: string, request: DeleteClusterRequest): Promise<DeleteClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteClusterWithOptions(ClusterId, request, headers, runtime);
  }

  /**
   * @summary You can call the DeleteClusterNodepool operation to delete a node pool by node pool ID.
   *
   * @param request DeleteClusterNodepoolRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteClusterNodepoolResponse
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
   * @summary You can call the DeleteClusterNodepool operation to delete a node pool by node pool ID.
   *
   * @param request DeleteClusterNodepoolRequest
   * @return DeleteClusterNodepoolResponse
   */
  async deleteClusterNodepool(ClusterId: string, NodepoolId: string, request: DeleteClusterNodepoolRequest): Promise<DeleteClusterNodepoolResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteClusterNodepoolWithOptions(ClusterId, NodepoolId, request, headers, runtime);
  }

  /**
   * @summary Removes nodes from a Container Service for Kubernetes (ACK) cluster. When you remove nodes, you can specify whether to release the Elastic Compute Service (ECS) instances and drain the nodes. When you remove nodes, pods on the nodes are migrated. This may adversely affect your businesses. We recommend that you back up data and perform this operation during off-peak hours.
   *
   * @description > 
   * *   When you remove a node, the pods that run on the node are migrated to other nodes. This may cause service interruptions. We recommend that you remove nodes during off-peak hours. - The operation may have unexpected risks. Back up the data before you perform this operation. - When the system removes a node, it sets the status of the node to Unschedulable. - The system removes only worker nodes. It does not remove master nodes.
   *
   * @param request DeleteClusterNodesRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteClusterNodesResponse
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
   * @summary Removes nodes from a Container Service for Kubernetes (ACK) cluster. When you remove nodes, you can specify whether to release the Elastic Compute Service (ECS) instances and drain the nodes. When you remove nodes, pods on the nodes are migrated. This may adversely affect your businesses. We recommend that you back up data and perform this operation during off-peak hours.
   *
   * @description > 
   * *   When you remove a node, the pods that run on the node are migrated to other nodes. This may cause service interruptions. We recommend that you remove nodes during off-peak hours. - The operation may have unexpected risks. Back up the data before you perform this operation. - When the system removes a node, it sets the status of the node to Unschedulable. - The system removes only worker nodes. It does not remove master nodes.
   *
   * @param request DeleteClusterNodesRequest
   * @return DeleteClusterNodesResponse
   */
  async deleteClusterNodes(ClusterId: string, request: DeleteClusterNodesRequest): Promise<DeleteClusterNodesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteClusterNodesWithOptions(ClusterId, request, headers, runtime);
  }

  /**
   * @summary You can call the DeleteEdgeMachine operation to delete a cloud-native box.
   *
   * @param request DeleteEdgeMachineRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteEdgeMachineResponse
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
   * @summary You can call the DeleteEdgeMachine operation to delete a cloud-native box.
   *
   * @param request DeleteEdgeMachineRequest
   * @return DeleteEdgeMachineResponse
   */
  async deleteEdgeMachine(edgeMachineid: string, request: DeleteEdgeMachineRequest): Promise<DeleteEdgeMachineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteEdgeMachineWithOptions(edgeMachineid, request, headers, runtime);
  }

  /**
   * @summary You can call the DeleteKubernetesTrigger operation to delete an application trigger by trigger ID
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteKubernetesTriggerResponse
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
   * @summary You can call the DeleteKubernetesTrigger operation to delete an application trigger by trigger ID
   *
   * @return DeleteKubernetesTriggerResponse
   */
  async deleteKubernetesTrigger(Id: string): Promise<DeleteKubernetesTriggerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteKubernetesTriggerWithOptions(Id, headers, runtime);
  }

  /**
   * @summary Deletes policy instances in a Container Service for Kubernetes (ACK) cluster.
   *
   * @param request DeletePolicyInstanceRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeletePolicyInstanceResponse
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
   * @summary Deletes policy instances in a Container Service for Kubernetes (ACK) cluster.
   *
   * @param request DeletePolicyInstanceRequest
   * @return DeletePolicyInstanceResponse
   */
  async deletePolicyInstance(clusterId: string, policyName: string, request: DeletePolicyInstanceRequest): Promise<DeletePolicyInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deletePolicyInstanceWithOptions(clusterId, policyName, request, headers, runtime);
  }

  /**
   * @summary You can call the DeleteTemplate operation to delete an orchestration template by template ID.
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteTemplateResponse
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
   * @summary You can call the DeleteTemplate operation to delete an orchestration template by template ID.
   *
   * @return DeleteTemplateResponse
   */
  async deleteTemplate(TemplateId: string): Promise<DeleteTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteTemplateWithOptions(TemplateId, headers, runtime);
  }

  /**
   * @summary You can call the DeleteTrigger operation to delete an application trigger.
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteTriggerResponse
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
   * @summary You can call the DeleteTrigger operation to delete an application trigger.
   *
   * @return DeleteTriggerResponse
   */
  async deleteTrigger(clusterId: string, Id: string): Promise<DeleteTriggerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteTriggerWithOptions(clusterId, Id, headers, runtime);
  }

  /**
   * @summary You can call the DeployPolicyInstance operation to deploy a policy instance in a cluster.
   *
   * @param request DeployPolicyInstanceRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeployPolicyInstanceResponse
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
   * @summary You can call the DeployPolicyInstance operation to deploy a policy instance in a cluster.
   *
   * @param request DeployPolicyInstanceRequest
   * @return DeployPolicyInstanceResponse
   */
  async deployPolicyInstance(clusterId: string, policyName: string, request: DeployPolicyInstanceRequest): Promise<DeployPolicyInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deployPolicyInstanceWithOptions(clusterId, policyName, request, headers, runtime);
  }

  /**
   * @summary You can call the DescirbeWorkflow operation to query detailed information about a workflow.
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescirbeWorkflowResponse
   */
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
   * @summary You can call the DescirbeWorkflow operation to query detailed information about a workflow.
   *
   * @return DescirbeWorkflowResponse
   */
  async descirbeWorkflow(workflowName: string): Promise<DescirbeWorkflowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.descirbeWorkflowWithOptions(workflowName, headers, runtime);
  }

  /**
   * @summary 查询指定集群组件
   *
   * @param request DescribeAddonRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeAddonResponse
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
   * @summary 查询指定集群组件
   *
   * @param request DescribeAddonRequest
   * @return DescribeAddonResponse
   */
  async describeAddon(addonName: string, request: DescribeAddonRequest): Promise<DescribeAddonResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeAddonWithOptions(addonName, request, headers, runtime);
  }

  /**
   * @deprecated OpenAPI DescribeAddons is deprecated
   *
   * @summary You can call the DescribeAddons operation to query the details about all components that are supported by Container Service for Kubernetes (ACK).
   *
   * @param request DescribeAddonsRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeAddonsResponse
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
   * @deprecated OpenAPI DescribeAddons is deprecated
   *
   * @summary You can call the DescribeAddons operation to query the details about all components that are supported by Container Service for Kubernetes (ACK).
   *
   * @param request DescribeAddonsRequest
   * @return DescribeAddonsResponse
   */
  // Deprecated
  async describeAddons(request: DescribeAddonsRequest): Promise<DescribeAddonsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeAddonsWithOptions(request, headers, runtime);
  }

  /**
   * @deprecated OpenAPI DescribeClusterAddonInstance is deprecated
   *
   * @summary You can call the DescribeClusterAddonInstance operation to query the information about a cluster component, including the version, status, and configuration of the component.
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeClusterAddonInstanceResponse
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
   * @deprecated OpenAPI DescribeClusterAddonInstance is deprecated
   *
   * @summary You can call the DescribeClusterAddonInstance operation to query the information about a cluster component, including the version, status, and configuration of the component.
   *
   * @return DescribeClusterAddonInstanceResponse
   */
  // Deprecated
  async describeClusterAddonInstance(ClusterID: string, AddonName: string): Promise<DescribeClusterAddonInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeClusterAddonInstanceWithOptions(ClusterID, AddonName, headers, runtime);
  }

  /**
   * @deprecated OpenAPI DescribeClusterAddonMetadata is deprecated
   *
   * @summary You can call the DescribeClusterAddonMetadata operation to query the metadata of a component version. The metadata includes the component version and available parameters.
   *
   * @param request DescribeClusterAddonMetadataRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeClusterAddonMetadataResponse
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
   * @deprecated OpenAPI DescribeClusterAddonMetadata is deprecated
   *
   * @summary You can call the DescribeClusterAddonMetadata operation to query the metadata of a component version. The metadata includes the component version and available parameters.
   *
   * @param request DescribeClusterAddonMetadataRequest
   * @return DescribeClusterAddonMetadataResponse
   */
  // Deprecated
  async describeClusterAddonMetadata(clusterId: string, componentId: string, request: DescribeClusterAddonMetadataRequest): Promise<DescribeClusterAddonMetadataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeClusterAddonMetadataWithOptions(clusterId, componentId, request, headers, runtime);
  }

  /**
   * @deprecated OpenAPI DescribeClusterAddonUpgradeStatus is deprecated
   *
   * @summary You can call the DescribeClusterAddonUpgradeStatus operation to query the update progress of a cluster component.
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeClusterAddonUpgradeStatusResponse
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
   * @deprecated OpenAPI DescribeClusterAddonUpgradeStatus is deprecated
   *
   * @summary You can call the DescribeClusterAddonUpgradeStatus operation to query the update progress of a cluster component.
   *
   * @return DescribeClusterAddonUpgradeStatusResponse
   */
  // Deprecated
  async describeClusterAddonUpgradeStatus(ClusterId: string, ComponentId: string): Promise<DescribeClusterAddonUpgradeStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeClusterAddonUpgradeStatusWithOptions(ClusterId, ComponentId, headers, runtime);
  }

  /**
   * @deprecated OpenAPI DescribeClusterAddonsUpgradeStatus is deprecated
   *
   * @summary You can call the DescribeClusterAddonsUpgradeStatus operation to query the update progress of a component by component name.
   *
   * @param tmpReq DescribeClusterAddonsUpgradeStatusRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeClusterAddonsUpgradeStatusResponse
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
   * @deprecated OpenAPI DescribeClusterAddonsUpgradeStatus is deprecated
   *
   * @summary You can call the DescribeClusterAddonsUpgradeStatus operation to query the update progress of a component by component name.
   *
   * @param request DescribeClusterAddonsUpgradeStatusRequest
   * @return DescribeClusterAddonsUpgradeStatusResponse
   */
  // Deprecated
  async describeClusterAddonsUpgradeStatus(ClusterId: string, request: DescribeClusterAddonsUpgradeStatusRequest): Promise<DescribeClusterAddonsUpgradeStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeClusterAddonsUpgradeStatusWithOptions(ClusterId, request, headers, runtime);
  }

  /**
   * @deprecated OpenAPI DescribeClusterAddonsVersion is deprecated
   *
   * @summary You can call the DescribeClusterAddonsVersion operation to query the details about all components in a cluster by cluster ID.
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeClusterAddonsVersionResponse
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
   * @deprecated OpenAPI DescribeClusterAddonsVersion is deprecated
   *
   * @summary You can call the DescribeClusterAddonsVersion operation to query the details about all components in a cluster by cluster ID.
   *
   * @return DescribeClusterAddonsVersionResponse
   */
  // Deprecated
  async describeClusterAddonsVersion(ClusterId: string): Promise<DescribeClusterAddonsVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeClusterAddonsVersionWithOptions(ClusterId, headers, runtime);
  }

  /**
   * @summary Queries the script that is used to add existing nodes to a Container Service for Kubernetes (ACK) cluster. You can manually add existing Elastic Compute Service (ECS) instances to an ACK cluster as worker nodes or re-add the worker nodes that you have removed to a node pool.
   *
   * @param request DescribeClusterAttachScriptsRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeClusterAttachScriptsResponse
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
   * @summary Queries the script that is used to add existing nodes to a Container Service for Kubernetes (ACK) cluster. You can manually add existing Elastic Compute Service (ECS) instances to an ACK cluster as worker nodes or re-add the worker nodes that you have removed to a node pool.
   *
   * @param request DescribeClusterAttachScriptsRequest
   * @return DescribeClusterAttachScriptsResponse
   */
  async describeClusterAttachScripts(ClusterId: string, request: DescribeClusterAttachScriptsRequest): Promise<DescribeClusterAttachScriptsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeClusterAttachScriptsWithOptions(ClusterId, request, headers, runtime);
  }

  /**
   * @summary You can call the DescribeClusterDetail operation to query the details of a Container Service for Kubernetes (ACK) cluster by cluster ID.
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeClusterDetailResponse
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
   * @summary You can call the DescribeClusterDetail operation to query the details of a Container Service for Kubernetes (ACK) cluster by cluster ID.
   *
   * @return DescribeClusterDetailResponse
   */
  async describeClusterDetail(ClusterId: string): Promise<DescribeClusterDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeClusterDetailWithOptions(ClusterId, headers, runtime);
  }

  /**
   * @summary Queries events and event details in a Container Service for Kubernetes (ACK) cluster, including the severity level, status, and start time of each event. Events are generated when clusters created, modified, and updated, node pools are created and scaled out, and components are installed.
   *
   * @param request DescribeClusterEventsRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeClusterEventsResponse
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
   * @summary Queries events and event details in a Container Service for Kubernetes (ACK) cluster, including the severity level, status, and start time of each event. Events are generated when clusters created, modified, and updated, node pools are created and scaled out, and components are installed.
   *
   * @param request DescribeClusterEventsRequest
   * @return DescribeClusterEventsResponse
   */
  async describeClusterEvents(ClusterId: string, request: DescribeClusterEventsRequest): Promise<DescribeClusterEventsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeClusterEventsWithOptions(ClusterId, request, headers, runtime);
  }

  /**
   * @summary Queries the cluster log to help analyze cluster issues and locate the cause.
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeClusterLogsResponse
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
   * @summary Queries the cluster log to help analyze cluster issues and locate the cause.
   *
   * @return DescribeClusterLogsResponse
   */
  async describeClusterLogs(ClusterId: string): Promise<DescribeClusterLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeClusterLogsWithOptions(ClusterId, headers, runtime);
  }

  /**
   * @summary You can call the DescribeClusterNodePoolDetail.html operation to query the details about a node pool in a cluster by node pool ID.
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeClusterNodePoolDetailResponse
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
   * @summary You can call the DescribeClusterNodePoolDetail.html operation to query the details about a node pool in a cluster by node pool ID.
   *
   * @return DescribeClusterNodePoolDetailResponse
   */
  async describeClusterNodePoolDetail(ClusterId: string, NodepoolId: string): Promise<DescribeClusterNodePoolDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeClusterNodePoolDetailWithOptions(ClusterId, NodepoolId, headers, runtime);
  }

  /**
   * @summary Queries node pools in a Container Service for Kubernetes (ACK) cluster.
   *
   * @param request DescribeClusterNodePoolsRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeClusterNodePoolsResponse
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
   * @summary Queries node pools in a Container Service for Kubernetes (ACK) cluster.
   *
   * @param request DescribeClusterNodePoolsRequest
   * @return DescribeClusterNodePoolsResponse
   */
  async describeClusterNodePools(ClusterId: string, request: DescribeClusterNodePoolsRequest): Promise<DescribeClusterNodePoolsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeClusterNodePoolsWithOptions(ClusterId, request, headers, runtime);
  }

  /**
   * @summary You can call the DescribeClusterNodes operation to query the details about all nodes in a cluster by cluster ID.
   *
   * @param request DescribeClusterNodesRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeClusterNodesResponse
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
   * @summary You can call the DescribeClusterNodes operation to query the details about all nodes in a cluster by cluster ID.
   *
   * @param request DescribeClusterNodesRequest
   * @return DescribeClusterNodesResponse
   */
  async describeClusterNodes(ClusterId: string, request: DescribeClusterNodesRequest): Promise<DescribeClusterNodesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeClusterNodesWithOptions(ClusterId, request, headers, runtime);
  }

  /**
   * @summary You can call the DescribeClusterResources operation to query all resources in a cluster by cluster ID.
   *
   * @param request DescribeClusterResourcesRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeClusterResourcesResponse
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
   * @summary You can call the DescribeClusterResources operation to query all resources in a cluster by cluster ID.
   *
   * @param request DescribeClusterResourcesRequest
   * @return DescribeClusterResourcesResponse
   */
  async describeClusterResources(ClusterId: string, request: DescribeClusterResourcesRequest): Promise<DescribeClusterResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeClusterResourcesWithOptions(ClusterId, request, headers, runtime);
  }

  /**
   * @summary Queries tasks in a Container Service for Kubernetes (ACK) cluster.
   *
   * @param request DescribeClusterTasksRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeClusterTasksResponse
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
   * @summary Queries tasks in a Container Service for Kubernetes (ACK) cluster.
   *
   * @param request DescribeClusterTasksRequest
   * @return DescribeClusterTasksResponse
   */
  async describeClusterTasks(clusterId: string, request: DescribeClusterTasksRequest): Promise<DescribeClusterTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeClusterTasksWithOptions(clusterId, request, headers, runtime);
  }

  /**
   * @summary Kubeconfig files store identity and authentication information that is used by clients to access Container Service for Kubernetes (ACK) clusters. To use a kubectl client to manage an ACK cluster, you need to use the corresponding kubeconfig file to connect to the ACK cluster. We recommend that you keep kubeconfig files confidential and revoke kubeconfig files that are not in use. This helps prevent data leaks caused by the disclosure of kubeconfig files.
   *
   * @description **
   * ****The default validity period of a kubeconfig file is 3 years. Two months before a kubeconfig file expires, you can renew it in the Container Service for Kubernetes (ACK) console or by calling API operations. After a kubeconfig file is renewed, the secret is valid for 3 years. The previous kubeconfig secret remains valid until expiration. We recommend that you renew your kubeconfig file at the earliest opportunity.
   *
   * @param request DescribeClusterUserKubeconfigRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeClusterUserKubeconfigResponse
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
   * @summary Kubeconfig files store identity and authentication information that is used by clients to access Container Service for Kubernetes (ACK) clusters. To use a kubectl client to manage an ACK cluster, you need to use the corresponding kubeconfig file to connect to the ACK cluster. We recommend that you keep kubeconfig files confidential and revoke kubeconfig files that are not in use. This helps prevent data leaks caused by the disclosure of kubeconfig files.
   *
   * @description **
   * ****The default validity period of a kubeconfig file is 3 years. Two months before a kubeconfig file expires, you can renew it in the Container Service for Kubernetes (ACK) console or by calling API operations. After a kubeconfig file is renewed, the secret is valid for 3 years. The previous kubeconfig secret remains valid until expiration. We recommend that you renew your kubeconfig file at the earliest opportunity.
   *
   * @param request DescribeClusterUserKubeconfigRequest
   * @return DescribeClusterUserKubeconfigResponse
   */
  async describeClusterUserKubeconfig(ClusterId: string, request: DescribeClusterUserKubeconfigRequest): Promise<DescribeClusterUserKubeconfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeClusterUserKubeconfigWithOptions(ClusterId, request, headers, runtime);
  }

  /**
   * @deprecated OpenAPI DescribeClusterV2UserKubeconfig is deprecated
   *
   * @summary 获取集群kubeconfig接口
   *
   * @param request DescribeClusterV2UserKubeconfigRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeClusterV2UserKubeconfigResponse
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
   * @deprecated OpenAPI DescribeClusterV2UserKubeconfig is deprecated
   *
   * @summary 获取集群kubeconfig接口
   *
   * @param request DescribeClusterV2UserKubeconfigRequest
   * @return DescribeClusterV2UserKubeconfigResponse
   */
  // Deprecated
  async describeClusterV2UserKubeconfig(ClusterId: string, request: DescribeClusterV2UserKubeconfigRequest): Promise<DescribeClusterV2UserKubeconfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeClusterV2UserKubeconfigWithOptions(ClusterId, request, headers, runtime);
  }

  /**
   * @summary You can call the DescribeClusterVuls operation to query the vulnerability information of a cluster.
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeClusterVulsResponse
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
   * @summary You can call the DescribeClusterVuls operation to query the vulnerability information of a cluster.
   *
   * @return DescribeClusterVulsResponse
   */
  async describeClusterVuls(clusterId: string): Promise<DescribeClusterVulsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeClusterVulsWithOptions(clusterId, headers, runtime);
  }

  /**
   * @deprecated OpenAPI DescribeClusters is deprecated
   *
   * @summary You can call the DescribeClusters operation to query all the clusters that belong to the current Alibaba Cloud account, including Kubernetes clusters and Swarm clusters.
   *
   * @param request DescribeClustersRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeClustersResponse
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
   * @deprecated OpenAPI DescribeClusters is deprecated
   *
   * @summary You can call the DescribeClusters operation to query all the clusters that belong to the current Alibaba Cloud account, including Kubernetes clusters and Swarm clusters.
   *
   * @param request DescribeClustersRequest
   * @return DescribeClustersResponse
   */
  // Deprecated
  async describeClusters(request: DescribeClustersRequest): Promise<DescribeClustersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeClustersWithOptions(request, headers, runtime);
  }

  /**
   * @summary You can call the DescribeClustersV1 operation to query the details about all Container Service for Kubernetes (ACK) clusters.
   *
   * @param request DescribeClustersV1Request
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeClustersV1Response
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
   * @summary You can call the DescribeClustersV1 operation to query the details about all Container Service for Kubernetes (ACK) clusters.
   *
   * @param request DescribeClustersV1Request
   * @return DescribeClustersV1Response
   */
  async describeClustersV1(request: DescribeClustersV1Request): Promise<DescribeClustersV1Response> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeClustersV1WithOptions(request, headers, runtime);
  }

  /**
   * @summary You can call the DescribeEdgeMachineActiveProcess operation to query the activation progress of a cloud-native box.
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeEdgeMachineActiveProcessResponse
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
   * @summary You can call the DescribeEdgeMachineActiveProcess operation to query the activation progress of a cloud-native box.
   *
   * @return DescribeEdgeMachineActiveProcessResponse
   */
  async describeEdgeMachineActiveProcess(edgeMachineid: string): Promise<DescribeEdgeMachineActiveProcessResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeEdgeMachineActiveProcessWithOptions(edgeMachineid, headers, runtime);
  }

  /**
   * @summary You can call the DescribeEdgeMachineModels operation to query the cloud-native box models.
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeEdgeMachineModelsResponse
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
   * @summary You can call the DescribeEdgeMachineModels operation to query the cloud-native box models.
   *
   * @return DescribeEdgeMachineModelsResponse
   */
  async describeEdgeMachineModels(): Promise<DescribeEdgeMachineModelsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeEdgeMachineModelsWithOptions(headers, runtime);
  }

  /**
   * @summary You can call the DescribeEdgeMachineTunnelConfigDetail operation to obtain the SSH token of a cloud-native box.
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeEdgeMachineTunnelConfigDetailResponse
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
   * @summary You can call the DescribeEdgeMachineTunnelConfigDetail operation to obtain the SSH token of a cloud-native box.
   *
   * @return DescribeEdgeMachineTunnelConfigDetailResponse
   */
  async describeEdgeMachineTunnelConfigDetail(edgeMachineid: string): Promise<DescribeEdgeMachineTunnelConfigDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeEdgeMachineTunnelConfigDetailWithOptions(edgeMachineid, headers, runtime);
  }

  /**
   * @summary You can call the DescribeEdgeMachines operation to query a list of cloud-native boxes.
   *
   * @param request DescribeEdgeMachinesRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeEdgeMachinesResponse
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
   * @summary You can call the DescribeEdgeMachines operation to query a list of cloud-native boxes.
   *
   * @param request DescribeEdgeMachinesRequest
   * @return DescribeEdgeMachinesResponse
   */
  async describeEdgeMachines(request: DescribeEdgeMachinesRequest): Promise<DescribeEdgeMachinesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeEdgeMachinesWithOptions(request, headers, runtime);
  }

  /**
   * @summary Queries detailed information about a type of events, including the severity level, status, and start time of each event. Events are generated when clusters are created, modified, and updated, node pools are created and scaled out, and components are installed.
   *
   * @param request DescribeEventsRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeEventsResponse
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
   * @summary Queries detailed information about a type of events, including the severity level, status, and start time of each event. Events are generated when clusters are created, modified, and updated, node pools are created and scaled out, and components are installed.
   *
   * @param request DescribeEventsRequest
   * @return DescribeEventsResponse
   */
  async describeEvents(request: DescribeEventsRequest): Promise<DescribeEventsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeEventsWithOptions(request, headers, runtime);
  }

  /**
   * @summary You can call the DescribeExternalAgent operation to query the agent configurations of a registered cluster by cluster ID.
   *
   * @description For more information, see [Register an external Kubernetes cluster](https://help.aliyun.com/document_detail/121053.html).
   *
   * @param request DescribeExternalAgentRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeExternalAgentResponse
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
   * @summary You can call the DescribeExternalAgent operation to query the agent configurations of a registered cluster by cluster ID.
   *
   * @description For more information, see [Register an external Kubernetes cluster](https://help.aliyun.com/document_detail/121053.html).
   *
   * @param request DescribeExternalAgentRequest
   * @return DescribeExternalAgentResponse
   */
  async describeExternalAgent(ClusterId: string, request: DescribeExternalAgentRequest): Promise<DescribeExternalAgentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeExternalAgentWithOptions(ClusterId, request, headers, runtime);
  }

  /**
   * @summary Queries the detailed information about Kubernetes versions, including the version number, release date, expiration date, compatible OSs, and runtime.
   *
   * @param request DescribeKubernetesVersionMetadataRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeKubernetesVersionMetadataResponse
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
   * @summary Queries the detailed information about Kubernetes versions, including the version number, release date, expiration date, compatible OSs, and runtime.
   *
   * @param request DescribeKubernetesVersionMetadataRequest
   * @return DescribeKubernetesVersionMetadataResponse
   */
  async describeKubernetesVersionMetadata(request: DescribeKubernetesVersionMetadataRequest): Promise<DescribeKubernetesVersionMetadataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeKubernetesVersionMetadataWithOptions(request, headers, runtime);
  }

  /**
   * @summary Queries the vulnerability information of a node pool, such as vulnerability names and severity levels, by specifying the ID of the node pool. We recommend that you periodically scan node pools for vulnerabilities to enhance cluster security.
   *
   * @param request DescribeNodePoolVulsRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeNodePoolVulsResponse
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
   * @summary Queries the vulnerability information of a node pool, such as vulnerability names and severity levels, by specifying the ID of the node pool. We recommend that you periodically scan node pools for vulnerabilities to enhance cluster security.
   *
   * @param request DescribeNodePoolVulsRequest
   * @return DescribeNodePoolVulsResponse
   */
  async describeNodePoolVuls(clusterId: string, nodepoolId: string, request: DescribeNodePoolVulsRequest): Promise<DescribeNodePoolVulsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeNodePoolVulsWithOptions(clusterId, nodepoolId, request, headers, runtime);
  }

  /**
   * @summary You can call the DescribePolicies operation to query a list of policies.
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribePoliciesResponse
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
   * @summary You can call the DescribePolicies operation to query a list of policies.
   *
   * @return DescribePoliciesResponse
   */
  async describePolicies(): Promise<DescribePoliciesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describePoliciesWithOptions(headers, runtime);
  }

  /**
   * @summary Container security policies for Container Service for Kubernetes (ACK) clusters offer a variety of built-in policies, including cis-k8s, infra, k8s-general, and PodSecurityPolicy. You can use these policies to ensure the security of containers running in a production environment. You can call the DescribePolicyDetails operation to query information about a policy, such as the content, action, and severity level of the policy.
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribePolicyDetailsResponse
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
   * @summary Container security policies for Container Service for Kubernetes (ACK) clusters offer a variety of built-in policies, including cis-k8s, infra, k8s-general, and PodSecurityPolicy. You can use these policies to ensure the security of containers running in a production environment. You can call the DescribePolicyDetails operation to query information about a policy, such as the content, action, and severity level of the policy.
   *
   * @return DescribePolicyDetailsResponse
   */
  async describePolicyDetails(policyName: string): Promise<DescribePolicyDetailsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describePolicyDetailsWithOptions(policyName, headers, runtime);
  }

  /**
   * @summary You can call the DescribePolicyGovernanceInCluster operation to query information about policies in a Container Service for Kubernetes (ACK) cluster.
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribePolicyGovernanceInClusterResponse
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
   * @summary You can call the DescribePolicyGovernanceInCluster operation to query information about policies in a Container Service for Kubernetes (ACK) cluster.
   *
   * @return DescribePolicyGovernanceInClusterResponse
   */
  async describePolicyGovernanceInCluster(clusterId: string): Promise<DescribePolicyGovernanceInClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describePolicyGovernanceInClusterWithOptions(clusterId, headers, runtime);
  }

  /**
   * @summary Queries the detailed information about policy instances of the specified type in a Container Service for Kubernetes (ACK) cluster, such as the policy description and severity level. You can choose a type of security policy for an ACK cluster, specify the action and applicable scope of the policy, and then create and deploy a policy instance.
   *
   * @param request DescribePolicyInstancesRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribePolicyInstancesResponse
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
   * @summary Queries the detailed information about policy instances of the specified type in a Container Service for Kubernetes (ACK) cluster, such as the policy description and severity level. You can choose a type of security policy for an ACK cluster, specify the action and applicable scope of the policy, and then create and deploy a policy instance.
   *
   * @param request DescribePolicyInstancesRequest
   * @return DescribePolicyInstancesResponse
   */
  async describePolicyInstances(clusterId: string, request: DescribePolicyInstancesRequest): Promise<DescribePolicyInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describePolicyInstancesWithOptions(clusterId, request, headers, runtime);
  }

  /**
   * @summary Queries the deployment of policy instances in the current Container Service for Kubernetes (ACK) cluster, including the number of policy instances of each type and the number of policy types of each severity level.
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribePolicyInstancesStatusResponse
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
   * @summary Queries the deployment of policy instances in the current Container Service for Kubernetes (ACK) cluster, including the number of policy instances of each type and the number of policy types of each severity level.
   *
   * @return DescribePolicyInstancesStatusResponse
   */
  async describePolicyInstancesStatus(clusterId: string): Promise<DescribePolicyInstancesStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describePolicyInstancesStatusWithOptions(clusterId, headers, runtime);
  }

  /**
   * @summary You can use an Alibaba Cloud account to call the DescribeSubaccountK8sClusterUserConfig operation to obtain the cluster kubeconfig file of a RAM user or RAM role.
   *
   * @description **
   * ****Only Alibaba Cloud accounts can call this API operation.
   *
   * @param request DescribeSubaccountK8sClusterUserConfigRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeSubaccountK8sClusterUserConfigResponse
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
   * @summary You can use an Alibaba Cloud account to call the DescribeSubaccountK8sClusterUserConfig operation to obtain the cluster kubeconfig file of a RAM user or RAM role.
   *
   * @description **
   * ****Only Alibaba Cloud accounts can call this API operation.
   *
   * @param request DescribeSubaccountK8sClusterUserConfigRequest
   * @return DescribeSubaccountK8sClusterUserConfigResponse
   */
  async describeSubaccountK8sClusterUserConfig(ClusterId: string, Uid: string, request: DescribeSubaccountK8sClusterUserConfigRequest): Promise<DescribeSubaccountK8sClusterUserConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeSubaccountK8sClusterUserConfigWithOptions(ClusterId, Uid, request, headers, runtime);
  }

  /**
   * @summary Queries detailed information about a task, such as the task type, status, and progress.
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeTaskInfoResponse
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
   * @summary Queries detailed information about a task, such as the task type, status, and progress.
   *
   * @return DescribeTaskInfoResponse
   */
  async describeTaskInfo(taskId: string): Promise<DescribeTaskInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeTaskInfoWithOptions(taskId, headers, runtime);
  }

  /**
   * @summary An orchestration template defines and describes a group of Kubernetes resources. It declaratively describes the configuration of an application or how an application runs. You can call the DescribeTemplates API operation to query orchestration templates and their detailed information, including access permissions, YAML content, and labels.
   *
   * @param request DescribeTemplateAttributeRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeTemplateAttributeResponse
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
   * @summary An orchestration template defines and describes a group of Kubernetes resources. It declaratively describes the configuration of an application or how an application runs. You can call the DescribeTemplates API operation to query orchestration templates and their detailed information, including access permissions, YAML content, and labels.
   *
   * @param request DescribeTemplateAttributeRequest
   * @return DescribeTemplateAttributeResponse
   */
  async describeTemplateAttribute(TemplateId: string, request: DescribeTemplateAttributeRequest): Promise<DescribeTemplateAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeTemplateAttributeWithOptions(TemplateId, request, headers, runtime);
  }

  /**
   * @summary An orchestration template defines and describes a group of Kubernetes resources. It declaratively describes the configuration of an application or how an application runs. You can call the DescribeTemplates API operation to query orchestration templates and their detailed information, including access permissions, YAML content, and labels.
   *
   * @param request DescribeTemplatesRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeTemplatesResponse
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
   * @summary An orchestration template defines and describes a group of Kubernetes resources. It declaratively describes the configuration of an application or how an application runs. You can call the DescribeTemplates API operation to query orchestration templates and their detailed information, including access permissions, YAML content, and labels.
   *
   * @param request DescribeTemplatesRequest
   * @return DescribeTemplatesResponse
   */
  async describeTemplates(request: DescribeTemplatesRequest): Promise<DescribeTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeTemplatesWithOptions(request, headers, runtime);
  }

  /**
   * @summary You can call the DescribeTrigger operation to query triggers.
   *
   * @param request DescribeTriggerRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeTriggerResponse
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
   * @summary You can call the DescribeTrigger operation to query triggers.
   *
   * @param request DescribeTriggerRequest
   * @return DescribeTriggerResponse
   */
  async describeTrigger(clusterId: string, request: DescribeTriggerRequest): Promise<DescribeTriggerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeTriggerWithOptions(clusterId, request, headers, runtime);
  }

  /**
   * @summary Queries the Role-Based Access Control (RBAC) permissions that are granted to the current Resource Access Management (RAM) user or RAM role on a Container Service for Kubernetes (ACK) cluster. You can use Kubernetes namespaces to limit users from accessing resources in an ACK cluster. Users that are granted RBAC permissions only on one namespace cannot access resources in other namespaces.
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeUserClusterNamespacesResponse
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
   * @summary Queries the Role-Based Access Control (RBAC) permissions that are granted to the current Resource Access Management (RAM) user or RAM role on a Container Service for Kubernetes (ACK) cluster. You can use Kubernetes namespaces to limit users from accessing resources in an ACK cluster. Users that are granted RBAC permissions only on one namespace cannot access resources in other namespaces.
   *
   * @return DescribeUserClusterNamespacesResponse
   */
  async describeUserClusterNamespaces(ClusterId: string): Promise<DescribeUserClusterNamespacesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeUserClusterNamespacesWithOptions(ClusterId, headers, runtime);
  }

  /**
   * @summary In an Container Service for Kubernetes (ACK) cluster, you can create and specify different Resource Access Management (RAM) users or roles to have different access permissions. This ensures access control and resource isolation. You can call the DescribeUserPermission operation to query the permissions that are granted to a RAM user or RAM role on ACK clusters, including the resources that are allowed to access, the scope of the permissions, the predefined role, and the permission source.
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeUserPermissionResponse
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
   * @summary In an Container Service for Kubernetes (ACK) cluster, you can create and specify different Resource Access Management (RAM) users or roles to have different access permissions. This ensures access control and resource isolation. You can call the DescribeUserPermission operation to query the permissions that are granted to a RAM user or RAM role on ACK clusters, including the resources that are allowed to access, the scope of the permissions, the predefined role, and the permission source.
   *
   * @return DescribeUserPermissionResponse
   */
  async describeUserPermission(uid: string): Promise<DescribeUserPermissionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeUserPermissionWithOptions(uid, headers, runtime);
  }

  /**
   * @summary Queries quotas related to Container Service for Kubernetes (ACK) clusters, node pools, and nodes. To increase a quota, submit an application in the Quota Center console.
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeUserQuotaResponse
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
   * @summary Queries quotas related to Container Service for Kubernetes (ACK) clusters, node pools, and nodes. To increase a quota, submit an application in the Quota Center console.
   *
   * @return DescribeUserQuotaResponse
   */
  async describeUserQuota(): Promise<DescribeUserQuotaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeUserQuotaWithOptions(headers, runtime);
  }

  /**
   * @summary You can call the DescribeWorkflows operation to query all workflows.
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeWorkflowsResponse
   */
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
   * @summary You can call the DescribeWorkflows operation to query all workflows.
   *
   * @return DescribeWorkflowsResponse
   */
  async describeWorkflows(): Promise<DescribeWorkflowsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeWorkflowsWithOptions(headers, runtime);
  }

  /**
   * @summary You can call the EdgeClusterAddEdgeMachine operation to add a cloud-native box to a Container Service for Kubernetes (ACK) Edge cluster.
   *
   * @param request EdgeClusterAddEdgeMachineRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return EdgeClusterAddEdgeMachineResponse
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
   * @summary You can call the EdgeClusterAddEdgeMachine operation to add a cloud-native box to a Container Service for Kubernetes (ACK) Edge cluster.
   *
   * @param request EdgeClusterAddEdgeMachineRequest
   * @return EdgeClusterAddEdgeMachineResponse
   */
  async edgeClusterAddEdgeMachine(clusterid: string, edgeMachineid: string, request: EdgeClusterAddEdgeMachineRequest): Promise<EdgeClusterAddEdgeMachineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.edgeClusterAddEdgeMachineWithOptions(clusterid, edgeMachineid, request, headers, runtime);
  }

  /**
   * @summary Patches node vulnerabilities in a node pool to enhance node security. Cloud Security provided by Alibaba Cloud periodically scans Elastic Compute Service (ECS) instances for vulnerabilities and provides suggestions on how to patch the detected vulnerabilities. Vulnerability patching may require node restarts. Make sure that your cluster has sufficient idle nodes for node draining.
   *
   * @description 1.  The Common Vulnerabilities and Exposures (CVE) patching feature is developed based on Security Center. To use this feature, you must purchase the Security Center Ultimate Edition that supports Container Service for Kubernetes (ACK).
   * 2.  ACK may need to restart nodes to patch certain vulnerabilities. ACK drains a node before the node restarts. Make sure that the ACK cluster has sufficient idle nodes to host the pods evicted from the trained nodes. For example, you can scale out a node pool before you patch vulnerabilities for the nodes in the node pool.
   * 3.  Security Center ensures the compatibility of CVE patches. We recommend that you check the compatibility of a CVE patch with your application before you install the patch. You can pause or cancel a CVE patching task anytime.
   * 4.  CVE patching is a progressive task that consists of multiple batches. After you pause or cancel a CVE patching task, ACK continues to process the dispatched batches. Only the batches that have not been dispatched are paused or canceled.
   *
   * @param request FixNodePoolVulsRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return FixNodePoolVulsResponse
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
   * @summary Patches node vulnerabilities in a node pool to enhance node security. Cloud Security provided by Alibaba Cloud periodically scans Elastic Compute Service (ECS) instances for vulnerabilities and provides suggestions on how to patch the detected vulnerabilities. Vulnerability patching may require node restarts. Make sure that your cluster has sufficient idle nodes for node draining.
   *
   * @description 1.  The Common Vulnerabilities and Exposures (CVE) patching feature is developed based on Security Center. To use this feature, you must purchase the Security Center Ultimate Edition that supports Container Service for Kubernetes (ACK).
   * 2.  ACK may need to restart nodes to patch certain vulnerabilities. ACK drains a node before the node restarts. Make sure that the ACK cluster has sufficient idle nodes to host the pods evicted from the trained nodes. For example, you can scale out a node pool before you patch vulnerabilities for the nodes in the node pool.
   * 3.  Security Center ensures the compatibility of CVE patches. We recommend that you check the compatibility of a CVE patch with your application before you install the patch. You can pause or cancel a CVE patching task anytime.
   * 4.  CVE patching is a progressive task that consists of multiple batches. After you pause or cancel a CVE patching task, ACK continues to process the dispatched batches. Only the batches that have not been dispatched are paused or canceled.
   *
   * @param request FixNodePoolVulsRequest
   * @return FixNodePoolVulsResponse
   */
  async fixNodePoolVuls(clusterId: string, nodepoolId: string, request: FixNodePoolVulsRequest): Promise<FixNodePoolVulsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.fixNodePoolVulsWithOptions(clusterId, nodepoolId, request, headers, runtime);
  }

  /**
   * @summary You can call the GetClusterAddonInstance operation to query the information of a component instance in a cluster, including the version, configurations, and log status of the component instance.
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetClusterAddonInstanceResponse
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
   * @summary You can call the GetClusterAddonInstance operation to query the information of a component instance in a cluster, including the version, configurations, and log status of the component instance.
   *
   * @return GetClusterAddonInstanceResponse
   */
  async getClusterAddonInstance(clusterId: string, instanceName: string): Promise<GetClusterAddonInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getClusterAddonInstanceWithOptions(clusterId, instanceName, headers, runtime);
  }

  /**
   * @summary Queries a cluster check task by cluster ID and task ID. You can view the status, check items, creation time, and end time of the task. Container Intelligence Service (CIS) provides a variety of Kubernetes cluster check features, including cluster update check, cluster migration check, component installation check, component update check, and node pool check.
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetClusterCheckResponse
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
   * @summary Queries a cluster check task by cluster ID and task ID. You can view the status, check items, creation time, and end time of the task. Container Intelligence Service (CIS) provides a variety of Kubernetes cluster check features, including cluster update check, cluster migration check, component installation check, component update check, and node pool check.
   *
   * @return GetClusterCheckResponse
   */
  async getClusterCheck(clusterId: string, checkId: string): Promise<GetClusterCheckResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getClusterCheckWithOptions(clusterId, checkId, headers, runtime);
  }

  /**
   * @summary 获取集群诊断检查项
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetClusterDiagnosisCheckItemsResponse
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
   * @summary 获取集群诊断检查项
   *
   * @return GetClusterDiagnosisCheckItemsResponse
   */
  async getClusterDiagnosisCheckItems(clusterId: string, diagnosisId: string): Promise<GetClusterDiagnosisCheckItemsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getClusterDiagnosisCheckItemsWithOptions(clusterId, diagnosisId, headers, runtime);
  }

  /**
   * @summary 获取集群诊断结果
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetClusterDiagnosisResultResponse
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
   * @summary 获取集群诊断结果
   *
   * @return GetClusterDiagnosisResultResponse
   */
  async getClusterDiagnosisResult(clusterId: string, diagnosisId: string): Promise<GetClusterDiagnosisResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getClusterDiagnosisResultWithOptions(clusterId, diagnosisId, headers, runtime);
  }

  /**
   * @summary You can call the GetKubernetesTrigger operationto query the triggers of an application by application name.
   *
   * @param request GetKubernetesTriggerRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetKubernetesTriggerResponse
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
   * @summary You can call the GetKubernetesTrigger operationto query the triggers of an application by application name.
   *
   * @param request GetKubernetesTriggerRequest
   * @return GetKubernetesTriggerResponse
   */
  async getKubernetesTrigger(ClusterId: string, request: GetKubernetesTriggerRequest): Promise<GetKubernetesTriggerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getKubernetesTriggerWithOptions(ClusterId, request, headers, runtime);
  }

  /**
   * @summary You can call the GetUpgradeStatus operation to query the update progress of a cluster by cluster ID.
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetUpgradeStatusResponse
   */
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
   * @summary You can call the GetUpgradeStatus operation to query the update progress of a cluster by cluster ID.
   *
   * @return GetUpgradeStatusResponse
   */
  async getUpgradeStatus(ClusterId: string): Promise<GetUpgradeStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getUpgradeStatusWithOptions(ClusterId, headers, runtime);
  }

  /**
   * @summary You can call the GrantPermissions operation to grant a Resource Access Management (RAM) user the permissions to manage Container Service for Kubernetes (ACK) clusters.
   *
   * @description ****
   * *   Make sure that you have granted the RAM user at least read-only permissions on the desired ACK clusters in the RAM console. Otherwise, the `ErrorRamPolicyConfig` error code is returned. For more information about how to authorize a RAM user by attaching RAM policies, see [Create a custom RAM policy](https://help.aliyun.com/document_detail/86485.html).
   * *   If you use a RAM user to call this API operation, make sure that the RAM user is authorized to modify the permissions of other RAM users on the desired ACK clusters. Otherwise, the `StatusForbidden` or `ForbiddenGrantPermissions` error code is returned. For more information, see [Use a RAM user to grant RBAC permissions to other RAM users](https://help.aliyun.com/document_detail/119035.html).
   * *   This operation overwrites the permissions that have been granted to the specified RAM user. When you call this operation, make sure that the required permissions are included.
   *
   * @param request GrantPermissionsRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GrantPermissionsResponse
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
   * @summary You can call the GrantPermissions operation to grant a Resource Access Management (RAM) user the permissions to manage Container Service for Kubernetes (ACK) clusters.
   *
   * @description ****
   * *   Make sure that you have granted the RAM user at least read-only permissions on the desired ACK clusters in the RAM console. Otherwise, the `ErrorRamPolicyConfig` error code is returned. For more information about how to authorize a RAM user by attaching RAM policies, see [Create a custom RAM policy](https://help.aliyun.com/document_detail/86485.html).
   * *   If you use a RAM user to call this API operation, make sure that the RAM user is authorized to modify the permissions of other RAM users on the desired ACK clusters. Otherwise, the `StatusForbidden` or `ForbiddenGrantPermissions` error code is returned. For more information, see [Use a RAM user to grant RBAC permissions to other RAM users](https://help.aliyun.com/document_detail/119035.html).
   * *   This operation overwrites the permissions that have been granted to the specified RAM user. When you call this operation, make sure that the required permissions are included.
   *
   * @param request GrantPermissionsRequest
   * @return GrantPermissionsResponse
   */
  async grantPermissions(uid: string, request: GrantPermissionsRequest): Promise<GrantPermissionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.grantPermissionsWithOptions(uid, request, headers, runtime);
  }

  /**
   * @summary Installs a component by specifying the name and version of the component. To enhance Kubernetes capabilities, you can install a variety of components in Container Service for Kubernetes (ACK) clusters, such as fully-managed core components and application, logging and monitoring, network, storage, and security group components.
   *
   * @param request InstallClusterAddonsRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return InstallClusterAddonsResponse
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
   * @summary Installs a component by specifying the name and version of the component. To enhance Kubernetes capabilities, you can install a variety of components in Container Service for Kubernetes (ACK) clusters, such as fully-managed core components and application, logging and monitoring, network, storage, and security group components.
   *
   * @param request InstallClusterAddonsRequest
   * @return InstallClusterAddonsResponse
   */
  async installClusterAddons(ClusterId: string, request: InstallClusterAddonsRequest): Promise<InstallClusterAddonsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.installClusterAddonsWithOptions(ClusterId, request, headers, runtime);
  }

  /**
   * @summary You can call the ListAddons operation to query all available components in a cluster. You can query all available components in a cluster by specifying the ID of the cluster. You can also specify parameters such as the region, cluster type, cluster subtype (profile), cluster specification, and cluster version to get a list of available components in clusters that meet the conditions.
   *
   * @param request ListAddonsRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListAddonsResponse
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
   * @summary You can call the ListAddons operation to query all available components in a cluster. You can query all available components in a cluster by specifying the ID of the cluster. You can also specify parameters such as the region, cluster type, cluster subtype (profile), cluster specification, and cluster version to get a list of available components in clusters that meet the conditions.
   *
   * @param request ListAddonsRequest
   * @return ListAddonsResponse
   */
  async listAddons(request: ListAddonsRequest): Promise<ListAddonsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAddonsWithOptions(request, headers, runtime);
  }

  /**
   * @summary You can call the ListClusterAddonInstances operation to query information about the components that are installed in a cluster.
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListClusterAddonInstancesResponse
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
   * @summary You can call the ListClusterAddonInstances operation to query information about the components that are installed in a cluster.
   *
   * @return ListClusterAddonInstancesResponse
   */
  async listClusterAddonInstances(clusterId: string): Promise<ListClusterAddonInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listClusterAddonInstancesWithOptions(clusterId, headers, runtime);
  }

  /**
   * @summary You can call the ListClusterChecks operation to query all the cluster check results of a cluster.
   *
   * @param request ListClusterChecksRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListClusterChecksResponse
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
   * @summary You can call the ListClusterChecks operation to query all the cluster check results of a cluster.
   *
   * @param request ListClusterChecksRequest
   * @return ListClusterChecksResponse
   */
  async listClusterChecks(clusterId: string, request: ListClusterChecksRequest): Promise<ListClusterChecksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listClusterChecksWithOptions(clusterId, request, headers, runtime);
  }

  /**
   * @summary 获取自动运维执行计划列表
   *
   * @param request ListOperationPlansRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListOperationPlansResponse
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
   * @summary 获取自动运维执行计划列表
   *
   * @param request ListOperationPlansRequest
   * @return ListOperationPlansResponse
   */
  async listOperationPlans(request: ListOperationPlansRequest): Promise<ListOperationPlansResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listOperationPlansWithOptions(request, headers, runtime);
  }

  /**
   * @summary Queries resource labels and the detailed information, such as the key-value pairs of the labels and the clusters to which the labels are added. You can use labels to classify and manage Container Service for Kubernetes (ACK) clusters in order to meet monitoring, cost analysis, and tenant isolation requirements.
   *
   * @param tmpReq ListTagResourcesRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListTagResourcesResponse
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
   * @summary Queries resource labels and the detailed information, such as the key-value pairs of the labels and the clusters to which the labels are added. You can use labels to classify and manage Container Service for Kubernetes (ACK) clusters in order to meet monitoring, cost analysis, and tenant isolation requirements.
   *
   * @param request ListTagResourcesRequest
   * @return ListTagResourcesResponse
   */
  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTagResourcesWithOptions(request, headers, runtime);
  }

  /**
   * @summary Container Service for Kubernetes (ACK) Pro clusters are developed based on ACK Basic clusters. ACK Pro clusters provide all benefits of ACK managed clusters, such as fully-managed control planes and control plane high availability. In addition, ACK Pro clusters provide you with enhanced reliability, security, and schedulability. ACK Pro clusters are covered by the SLA that supports compensation clauses. ACK Pro clusters are suitable for large-scale businesses that require high stability and security in production environments. We recommend that you migrate from ACK Basic clusters to ACK Pro clusters.
   *
   * @param request MigrateClusterRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return MigrateClusterResponse
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
   * @summary Container Service for Kubernetes (ACK) Pro clusters are developed based on ACK Basic clusters. ACK Pro clusters provide all benefits of ACK managed clusters, such as fully-managed control planes and control plane high availability. In addition, ACK Pro clusters provide you with enhanced reliability, security, and schedulability. ACK Pro clusters are covered by the SLA that supports compensation clauses. ACK Pro clusters are suitable for large-scale businesses that require high stability and security in production environments. We recommend that you migrate from ACK Basic clusters to ACK Pro clusters.
   *
   * @param request MigrateClusterRequest
   * @return MigrateClusterResponse
   */
  async migrateCluster(clusterId: string, request: MigrateClusterRequest): Promise<MigrateClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.migrateClusterWithOptions(clusterId, request, headers, runtime);
  }

  /**
   * @summary You can call the ModifyCluster operation to modify the cluster configurations by cluster ID.
   *
   * @param request ModifyClusterRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyClusterResponse
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
   * @summary You can call the ModifyCluster operation to modify the cluster configurations by cluster ID.
   *
   * @param request ModifyClusterRequest
   * @return ModifyClusterResponse
   */
  async modifyCluster(ClusterId: string, request: ModifyClusterRequest): Promise<ModifyClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyClusterWithOptions(ClusterId, request, headers, runtime);
  }

  /**
   * @summary Modifies the configuration of a cluster component. This operation may affect your businesses. We recommend that you assess the impact, back up data, and perform the operation during off-peak hours.
   *
   * @description You can use this API operation to modify the components in a Container Service for Kubernetes (ACK) cluster or the control plane components in an ACK Pro cluster.
   * *   To query the customizable parameters of a component, call the `DescribeClusterAddonMetadata` API operation. For more information, see [Query the metadata of a specified component version](https://www.alibabacloud.com/help/zh/container-service-for-kubernetes/latest/query).
   * *   For more information about the customizable parameters of control plane components in ACK Pro clusters, see [Customize the parameters of control plane components in ACK Pro clusters](https://www.alibabacloud.com/help/zh/container-service-for-kubernetes/latest/customize-control-plane-parameters-for-a-professional-kubernetes-cluster).
   * After you call this operation, the component may be redeployed and restarted. We recommend that you assess the impact before you call this operation.
   *
   * @param request ModifyClusterAddonRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyClusterAddonResponse
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
   * @summary Modifies the configuration of a cluster component. This operation may affect your businesses. We recommend that you assess the impact, back up data, and perform the operation during off-peak hours.
   *
   * @description You can use this API operation to modify the components in a Container Service for Kubernetes (ACK) cluster or the control plane components in an ACK Pro cluster.
   * *   To query the customizable parameters of a component, call the `DescribeClusterAddonMetadata` API operation. For more information, see [Query the metadata of a specified component version](https://www.alibabacloud.com/help/zh/container-service-for-kubernetes/latest/query).
   * *   For more information about the customizable parameters of control plane components in ACK Pro clusters, see [Customize the parameters of control plane components in ACK Pro clusters](https://www.alibabacloud.com/help/zh/container-service-for-kubernetes/latest/customize-control-plane-parameters-for-a-professional-kubernetes-cluster).
   * After you call this operation, the component may be redeployed and restarted. We recommend that you assess the impact before you call this operation.
   *
   * @param request ModifyClusterAddonRequest
   * @return ModifyClusterAddonResponse
   */
  async modifyClusterAddon(clusterId: string, componentId: string, request: ModifyClusterAddonRequest): Promise<ModifyClusterAddonResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyClusterAddonWithOptions(clusterId, componentId, request, headers, runtime);
  }

  /**
   * @summary This API operation applies only to Container Service for Kubernetes (ACK) managed clusters.
   *
   * @param request ModifyClusterConfigurationRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyClusterConfigurationResponse
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
   * @summary This API operation applies only to Container Service for Kubernetes (ACK) managed clusters.
   *
   * @param request ModifyClusterConfigurationRequest
   * @return ModifyClusterConfigurationResponse
   */
  async modifyClusterConfiguration(ClusterId: string, request: ModifyClusterConfigurationRequest): Promise<ModifyClusterConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyClusterConfigurationWithOptions(ClusterId, request, headers, runtime);
  }

  /**
   * @summary You can call the ModifyClusterNodePool operation to modify the configuration of a node pool with the specified node pool ID.
   *
   * @param request ModifyClusterNodePoolRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyClusterNodePoolResponse
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
   * @summary You can call the ModifyClusterNodePool operation to modify the configuration of a node pool with the specified node pool ID.
   *
   * @param request ModifyClusterNodePoolRequest
   * @return ModifyClusterNodePoolResponse
   */
  async modifyClusterNodePool(ClusterId: string, NodepoolId: string, request: ModifyClusterNodePoolRequest): Promise<ModifyClusterNodePoolResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyClusterNodePoolWithOptions(ClusterId, NodepoolId, request, headers, runtime);
  }

  /**
   * @summary Modifies the labels of a Container Service for Kubernetes (ACK) cluster. You can use labels (key-value pairs) to classify and manage ACK clusters in order to meet monitoring, cost analysis, and tenant isolation requirements.
   *
   * @param request ModifyClusterTagsRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyClusterTagsResponse
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
   * @summary Modifies the labels of a Container Service for Kubernetes (ACK) cluster. You can use labels (key-value pairs) to classify and manage ACK clusters in order to meet monitoring, cost analysis, and tenant isolation requirements.
   *
   * @param request ModifyClusterTagsRequest
   * @return ModifyClusterTagsResponse
   */
  async modifyClusterTags(ClusterId: string, request: ModifyClusterTagsRequest): Promise<ModifyClusterTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyClusterTagsWithOptions(ClusterId, request, headers, runtime);
  }

  /**
   * @summary Modifies the configuration of a node pool, such as the kubelet configuration and node rolling update configuration. After you modify the node pool configuration, nodes are batch updated and the kubelet on each node is restarted. This may adversely affect the nodes and workloads. We recommend that you perform this operation during off-peak hours.
   *
   * @description >  Container Service for Kubernetes (ACK) allows you to modify the kubelet configuration of nodes in a node pool. After you modify the kubelet configuration, the new configuration immediately takes effect on existing nodes in the node pool and is automatically applied to newly added nodes.
   *
   * @param request ModifyNodePoolNodeConfigRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyNodePoolNodeConfigResponse
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
   * @summary Modifies the configuration of a node pool, such as the kubelet configuration and node rolling update configuration. After you modify the node pool configuration, nodes are batch updated and the kubelet on each node is restarted. This may adversely affect the nodes and workloads. We recommend that you perform this operation during off-peak hours.
   *
   * @description >  Container Service for Kubernetes (ACK) allows you to modify the kubelet configuration of nodes in a node pool. After you modify the kubelet configuration, the new configuration immediately takes effect on existing nodes in the node pool and is automatically applied to newly added nodes.
   *
   * @param request ModifyNodePoolNodeConfigRequest
   * @return ModifyNodePoolNodeConfigResponse
   */
  async modifyNodePoolNodeConfig(ClusterId: string, NodepoolId: string, request: ModifyNodePoolNodeConfigRequest): Promise<ModifyNodePoolNodeConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyNodePoolNodeConfigWithOptions(ClusterId, NodepoolId, request, headers, runtime);
  }

  /**
   * @summary You can call the ModifyPolicyInstance operation to update policy instances in a Container Service for Kubernetes (ACK) cluster.
   *
   * @param request ModifyPolicyInstanceRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyPolicyInstanceResponse
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
   * @summary You can call the ModifyPolicyInstance operation to update policy instances in a Container Service for Kubernetes (ACK) cluster.
   *
   * @param request ModifyPolicyInstanceRequest
   * @return ModifyPolicyInstanceResponse
   */
  async modifyPolicyInstance(clusterId: string, policyName: string, request: ModifyPolicyInstanceRequest): Promise<ModifyPolicyInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyPolicyInstanceWithOptions(clusterId, policyName, request, headers, runtime);
  }

  /**
   * @summary You can call the OpenAckService operation to activate Container Service for Kubernetes (ACK).
   *
   * @description *   You can activate ACK by using Alibaba Cloud accounts.
   * *   To activate ACK by using RAM users, you need to grant the AdministratorAccess permission to the RAM users.
   *
   * @param request OpenAckServiceRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return OpenAckServiceResponse
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
   * @summary You can call the OpenAckService operation to activate Container Service for Kubernetes (ACK).
   *
   * @description *   You can activate ACK by using Alibaba Cloud accounts.
   * *   To activate ACK by using RAM users, you need to grant the AdministratorAccess permission to the RAM users.
   *
   * @param request OpenAckServiceRequest
   * @return OpenAckServiceResponse
   */
  async openAckService(request: OpenAckServiceRequest): Promise<OpenAckServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.openAckServiceWithOptions(request, headers, runtime);
  }

  /**
   * @deprecated OpenAPI PauseClusterUpgrade is deprecated
   *
   * @summary You can call the PauseClusterUpgrade operation to pause the update of a Container Service for Kubernetes (ACK) cluster.
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return PauseClusterUpgradeResponse
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
   * @deprecated OpenAPI PauseClusterUpgrade is deprecated
   *
   * @summary You can call the PauseClusterUpgrade operation to pause the update of a Container Service for Kubernetes (ACK) cluster.
   *
   * @return PauseClusterUpgradeResponse
   */
  // Deprecated
  async pauseClusterUpgrade(ClusterId: string): Promise<PauseClusterUpgradeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.pauseClusterUpgradeWithOptions(ClusterId, headers, runtime);
  }

  /**
   * @summary You can call the PauseComponentUpgrade operation to pause the update of a component.
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return PauseComponentUpgradeResponse
   */
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
   * @summary You can call the PauseComponentUpgrade operation to pause the update of a component.
   *
   * @return PauseComponentUpgradeResponse
   */
  async pauseComponentUpgrade(clusterid: string, componentid: string): Promise<PauseComponentUpgradeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.pauseComponentUpgradeWithOptions(clusterid, componentid, headers, runtime);
  }

  /**
   * @summary Pauses an on-going task.
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return PauseTaskResponse
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
   * @summary Pauses an on-going task.
   *
   * @return PauseTaskResponse
   */
  async pauseTask(taskId: string): Promise<PauseTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.pauseTaskWithOptions(taskId, headers, runtime);
  }

  /**
   * @deprecated OpenAPI RemoveClusterNodes is deprecated
   *
   * @summary You can call the RemoveClusterNodes operation to remove nodes from a Container Service for Kubernetes (ACK) cluster.
   *
   * @description ****
   * *   When you remove a node, the pods that run on the node are migrated to other nodes. This may cause service interruptions. We recommend that you remove nodes during off-peak hours.
   * *   Unknown errors may occur when you remove nodes. Before you remove nodes, back up the data on the nodes.
   * *   Nodes remain in the Unschedulable state when they are being removed.
   * *   You can remove only worker nodes. You cannot remove master nodes.
   *
   * @param request RemoveClusterNodesRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return RemoveClusterNodesResponse
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
   * @deprecated OpenAPI RemoveClusterNodes is deprecated
   *
   * @summary You can call the RemoveClusterNodes operation to remove nodes from a Container Service for Kubernetes (ACK) cluster.
   *
   * @description ****
   * *   When you remove a node, the pods that run on the node are migrated to other nodes. This may cause service interruptions. We recommend that you remove nodes during off-peak hours.
   * *   Unknown errors may occur when you remove nodes. Before you remove nodes, back up the data on the nodes.
   * *   Nodes remain in the Unschedulable state when they are being removed.
   * *   You can remove only worker nodes. You cannot remove master nodes.
   *
   * @param request RemoveClusterNodesRequest
   * @return RemoveClusterNodesResponse
   */
  // Deprecated
  async removeClusterNodes(ClusterId: string, request: RemoveClusterNodesRequest): Promise<RemoveClusterNodesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.removeClusterNodesWithOptions(ClusterId, request, headers, runtime);
  }

  /**
   * @summary Removes nodes from a node pool.
   *
   * @description **
   * ****
   * *   When you remove a node, the pods that run on the node are migrated to other nodes. This may cause service interruptions. We recommend that you remove nodes during off-peak hours. - The operation may have unexpected risks. Back up the data before you perform this operation. - When the system removes a node, it sets the status of the node to Unschedulable. - The system removes only worker nodes. It does not remove master nodes.
   *
   * @param tmpReq RemoveNodePoolNodesRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return RemoveNodePoolNodesResponse
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
   * @summary Removes nodes from a node pool.
   *
   * @description **
   * ****
   * *   When you remove a node, the pods that run on the node are migrated to other nodes. This may cause service interruptions. We recommend that you remove nodes during off-peak hours. - The operation may have unexpected risks. Back up the data before you perform this operation. - When the system removes a node, it sets the status of the node to Unschedulable. - The system removes only worker nodes. It does not remove master nodes.
   *
   * @param request RemoveNodePoolNodesRequest
   * @return RemoveNodePoolNodesResponse
   */
  async removeNodePoolNodes(ClusterId: string, NodepoolId: string, request: RemoveNodePoolNodesRequest): Promise<RemoveNodePoolNodesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.removeNodePoolNodesWithOptions(ClusterId, NodepoolId, request, headers, runtime);
  }

  /**
   * @summary You can call the RemoveWorkflow operation to delete a workflow.
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return RemoveWorkflowResponse
   */
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
   * @summary You can call the RemoveWorkflow operation to delete a workflow.
   *
   * @return RemoveWorkflowResponse
   */
  async removeWorkflow(workflowName: string): Promise<RemoveWorkflowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.removeWorkflowWithOptions(workflowName, headers, runtime);
  }

  /**
   * @summary You can call the RepairClusterNodePool operation to fix issues on specified nodes in a managed node pool.
   *
   * @param request RepairClusterNodePoolRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return RepairClusterNodePoolResponse
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
   * @summary You can call the RepairClusterNodePool operation to fix issues on specified nodes in a managed node pool.
   *
   * @param request RepairClusterNodePoolRequest
   * @return RepairClusterNodePoolResponse
   */
  async repairClusterNodePool(clusterId: string, nodepoolId: string, request: RepairClusterNodePoolRequest): Promise<RepairClusterNodePoolResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.repairClusterNodePoolWithOptions(clusterId, nodepoolId, request, headers, runtime);
  }

  /**
   * @summary You can call the ResumeComponentUpgrade operation to resume the update of a component.
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ResumeComponentUpgradeResponse
   */
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
   * @summary You can call the ResumeComponentUpgrade operation to resume the update of a component.
   *
   * @return ResumeComponentUpgradeResponse
   */
  async resumeComponentUpgrade(clusterid: string, componentid: string): Promise<ResumeComponentUpgradeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.resumeComponentUpgradeWithOptions(clusterid, componentid, headers, runtime);
  }

  /**
   * @summary You can call the ResumeTask operation to resume a task.
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ResumeTaskResponse
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
   * @summary You can call the ResumeTask operation to resume a task.
   *
   * @return ResumeTaskResponse
   */
  async resumeTask(taskId: string): Promise<ResumeTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.resumeTaskWithOptions(taskId, headers, runtime);
  }

  /**
   * @deprecated OpenAPI ResumeUpgradeCluster is deprecated
   *
   * @summary You can call the ResumeUpgradeCluster operation to resume the update of a cluster by cluster ID.
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ResumeUpgradeClusterResponse
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
   * @deprecated OpenAPI ResumeUpgradeCluster is deprecated
   *
   * @summary You can call the ResumeUpgradeCluster operation to resume the update of a cluster by cluster ID.
   *
   * @return ResumeUpgradeClusterResponse
   */
  // Deprecated
  async resumeUpgradeCluster(ClusterId: string): Promise<ResumeUpgradeClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.resumeUpgradeClusterWithOptions(ClusterId, headers, runtime);
  }

  /**
   * @summary You can call the RunClusterCheck operation to initiate cluster checks, such as cluster update prechecks.
   *
   * @param request RunClusterCheckRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return RunClusterCheckResponse
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
   * @summary You can call the RunClusterCheck operation to initiate cluster checks, such as cluster update prechecks.
   *
   * @param request RunClusterCheckRequest
   * @return RunClusterCheckResponse
   */
  async runClusterCheck(clusterId: string, request: RunClusterCheckRequest): Promise<RunClusterCheckResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.runClusterCheckWithOptions(clusterId, request, headers, runtime);
  }

  /**
   * @deprecated OpenAPI ScaleCluster is deprecated
   *
   * @summary 扩容Kubernetes集群
   *
   * @param request ScaleClusterRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ScaleClusterResponse
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
   * @deprecated OpenAPI ScaleCluster is deprecated
   *
   * @summary 扩容Kubernetes集群
   *
   * @param request ScaleClusterRequest
   * @return ScaleClusterResponse
   */
  // Deprecated
  async scaleCluster(ClusterId: string, request: ScaleClusterRequest): Promise<ScaleClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.scaleClusterWithOptions(ClusterId, request, headers, runtime);
  }

  /**
   * @summary You can call the ScaleClusterNodePool operation to scale out a node pool by node pool ID.
   *
   * @param request ScaleClusterNodePoolRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ScaleClusterNodePoolResponse
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
   * @summary You can call the ScaleClusterNodePool operation to scale out a node pool by node pool ID.
   *
   * @param request ScaleClusterNodePoolRequest
   * @return ScaleClusterNodePoolResponse
   */
  async scaleClusterNodePool(ClusterId: string, NodepoolId: string, request: ScaleClusterNodePoolRequest): Promise<ScaleClusterNodePoolResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.scaleClusterNodePoolWithOptions(ClusterId, NodepoolId, request, headers, runtime);
  }

  /**
   * @summary You can call the ScaleOutCluster operation to scale out a cluster by cluster ID.
   *
   * @description **
   * ****The ScaleOutCluster API operation is phased out. You must call the node pool-related API operations to manage nodes. If you want to add worker nodes to a Container Service for Kubernetes (ACK) cluster, call the ScaleClusterNodePool API operation. For more information, see [ScaleClusterNodePool](https://help.aliyun.com/document_detail/184928.html).
   *
   * @param request ScaleOutClusterRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ScaleOutClusterResponse
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
   * @summary You can call the ScaleOutCluster operation to scale out a cluster by cluster ID.
   *
   * @description **
   * ****The ScaleOutCluster API operation is phased out. You must call the node pool-related API operations to manage nodes. If you want to add worker nodes to a Container Service for Kubernetes (ACK) cluster, call the ScaleClusterNodePool API operation. For more information, see [ScaleClusterNodePool](https://help.aliyun.com/document_detail/184928.html).
   *
   * @param request ScaleOutClusterRequest
   * @return ScaleOutClusterResponse
   */
  async scaleOutCluster(ClusterId: string, request: ScaleOutClusterRequest): Promise<ScaleOutClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.scaleOutClusterWithOptions(ClusterId, request, headers, runtime);
  }

  /**
   * @summary The cluster ID.
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ScanClusterVulsResponse
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
   * @summary The cluster ID.
   *
   * @return ScanClusterVulsResponse
   */
  async scanClusterVuls(clusterId: string): Promise<ScanClusterVulsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.scanClusterVulsWithOptions(clusterId, headers, runtime);
  }

  /**
   * @param request StartAlertRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return StartAlertResponse
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
   * @param request StartAlertRequest
   * @return StartAlertResponse
   */
  async startAlert(ClusterId: string, request: StartAlertRequest): Promise<StartAlertResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startAlertWithOptions(ClusterId, request, headers, runtime);
  }

  /**
   * @summary You can call the StartWorkflow operation to create a workflow.
   *
   * @param request StartWorkflowRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return StartWorkflowResponse
   */
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
   * @summary You can call the StartWorkflow operation to create a workflow.
   *
   * @param request StartWorkflowRequest
   * @return StartWorkflowResponse
   */
  async startWorkflow(request: StartWorkflowRequest): Promise<StartWorkflowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startWorkflowWithOptions(request, headers, runtime);
  }

  /**
   * @summary You can call the StopAlert operation to disable an alert rule or an alert rule set in the alert center of Container Service for Kubernetes (ACK).
   *
   * @param request StopAlertRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return StopAlertResponse
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
   * @summary You can call the StopAlert operation to disable an alert rule or an alert rule set in the alert center of Container Service for Kubernetes (ACK).
   *
   * @param request StopAlertRequest
   * @return StopAlertResponse
   */
  async stopAlert(ClusterId: string, request: StopAlertRequest): Promise<StopAlertResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopAlertWithOptions(ClusterId, request, headers, runtime);
  }

  /**
   * @summary Synchronizes the information about a node pool, including the metadata and node information of the node pool.
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return SyncClusterNodePoolResponse
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
   * @summary Synchronizes the information about a node pool, including the metadata and node information of the node pool.
   *
   * @return SyncClusterNodePoolResponse
   */
  async syncClusterNodePool(ClusterId: string): Promise<SyncClusterNodePoolResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.syncClusterNodePoolWithOptions(ClusterId, headers, runtime);
  }

  /**
   * @summary Adds labels to a Container Service for Kubernetes (ACK) cluster. You can use labels to classify and manage ACK clusters in order to meet monitoring, cost analysis, and tenant isolation requirements.
   *
   * @param request TagResourcesRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return TagResourcesResponse
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
   * @summary Adds labels to a Container Service for Kubernetes (ACK) cluster. You can use labels to classify and manage ACK clusters in order to meet monitoring, cost analysis, and tenant isolation requirements.
   *
   * @param request TagResourcesRequest
   * @return TagResourcesResponse
   */
  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.tagResourcesWithOptions(request, headers, runtime);
  }

  /**
   * @summary You can call the UnInstallClusterAddons operation to uninstall the components in a cluster by component names.
   *
   * @param request UnInstallClusterAddonsRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return UnInstallClusterAddonsResponse
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
   * @summary You can call the UnInstallClusterAddons operation to uninstall the components in a cluster by component names.
   *
   * @param request UnInstallClusterAddonsRequest
   * @return UnInstallClusterAddonsResponse
   */
  async unInstallClusterAddons(ClusterId: string, request: UnInstallClusterAddonsRequest): Promise<UnInstallClusterAddonsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.unInstallClusterAddonsWithOptions(ClusterId, request, headers, runtime);
  }

  /**
   * @summary Removes labels from a Container Service for Kubernetes (ACK) cluster.
   *
   * @param tmpReq UntagResourcesRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return UntagResourcesResponse
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
   * @summary Removes labels from a Container Service for Kubernetes (ACK) cluster.
   *
   * @param request UntagResourcesRequest
   * @return UntagResourcesResponse
   */
  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.untagResourcesWithOptions(request, headers, runtime);
  }

  /**
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateContactGroupForAlertResponse
   */
  async updateContactGroupForAlertWithOptions(ClusterId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateContactGroupForAlertResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
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
      bodyType: "none",
    });
    return $tea.cast<UpdateContactGroupForAlertResponse>(await this.callApi(params, req, runtime), new UpdateContactGroupForAlertResponse({}));
  }

  /**
   * @return UpdateContactGroupForAlertResponse
   */
  async updateContactGroupForAlert(ClusterId: string): Promise<UpdateContactGroupForAlertResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateContactGroupForAlertWithOptions(ClusterId, headers, runtime);
  }

  /**
   * @summary You can call the UpdateControlPlaneLog operation to modify the log collection configurations for control plane components in a Container Service for Kubernetes (ACK) managed cluster.
   *
   * @param request UpdateControlPlaneLogRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateControlPlaneLogResponse
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
   * @summary You can call the UpdateControlPlaneLog operation to modify the log collection configurations for control plane components in a Container Service for Kubernetes (ACK) managed cluster.
   *
   * @param request UpdateControlPlaneLogRequest
   * @return UpdateControlPlaneLogResponse
   */
  async updateControlPlaneLog(ClusterId: string, request: UpdateControlPlaneLogRequest): Promise<UpdateControlPlaneLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateControlPlaneLogWithOptions(ClusterId, request, headers, runtime);
  }

  /**
   * @summary Sets the validity period of a kubeconfig file used by a Resource Access Management (RAM) user or RAM role to connect to a Container Service for Kubernetes (ACK) cluster. The validity period ranges from 1 to 876,000 hours. You can call this API operation when you customize configurations by using an Alibaba Cloud account. The default validity period of a kubeconfig file is three years.
   *
   * @description - You can call this operation only with an Alibaba Cloud account. 
   * - If the kubeconfig file used by your cluster is revoked, the custom validity period of the kubeconfig file is reset. In this case, you need to call this API operation to reconfigure the validity period of the kubeconfig file.
   *
   * @param request UpdateK8sClusterUserConfigExpireRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateK8sClusterUserConfigExpireResponse
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
   * @summary Sets the validity period of a kubeconfig file used by a Resource Access Management (RAM) user or RAM role to connect to a Container Service for Kubernetes (ACK) cluster. The validity period ranges from 1 to 876,000 hours. You can call this API operation when you customize configurations by using an Alibaba Cloud account. The default validity period of a kubeconfig file is three years.
   *
   * @description - You can call this operation only with an Alibaba Cloud account. 
   * - If the kubeconfig file used by your cluster is revoked, the custom validity period of the kubeconfig file is reset. In this case, you need to call this API operation to reconfigure the validity period of the kubeconfig file.
   *
   * @param request UpdateK8sClusterUserConfigExpireRequest
   * @return UpdateK8sClusterUserConfigExpireResponse
   */
  async updateK8sClusterUserConfigExpire(ClusterId: string, request: UpdateK8sClusterUserConfigExpireRequest): Promise<UpdateK8sClusterUserConfigExpireResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateK8sClusterUserConfigExpireWithOptions(ClusterId, request, headers, runtime);
  }

  /**
   * @summary You can call the UpdateTemplate operation to update an orchestration template by template ID.
   *
   * @param request UpdateTemplateRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateTemplateResponse
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
   * @summary You can call the UpdateTemplate operation to update an orchestration template by template ID.
   *
   * @param request UpdateTemplateRequest
   * @return UpdateTemplateResponse
   */
  async updateTemplate(TemplateId: string, request: UpdateTemplateRequest): Promise<UpdateTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateTemplateWithOptions(TemplateId, request, headers, runtime);
  }

  /**
   * @summary 更新指定RAM用户/角色的RBAC权限
   *
   * @param request UpdateUserPermissionsRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateUserPermissionsResponse
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
   * @summary 更新指定RAM用户/角色的RBAC权限
   *
   * @param request UpdateUserPermissionsRequest
   * @return UpdateUserPermissionsResponse
   */
  async updateUserPermissions(uid: string, request: UpdateUserPermissionsRequest): Promise<UpdateUserPermissionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateUserPermissionsWithOptions(uid, request, headers, runtime);
  }

  /**
   * @summary You can call the UpgradeCluster operation to upgrade a cluster by cluster ID.
   *
   * @param request UpgradeClusterRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpgradeClusterResponse
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
   * @summary You can call the UpgradeCluster operation to upgrade a cluster by cluster ID.
   *
   * @param request UpgradeClusterRequest
   * @return UpgradeClusterResponse
   */
  async upgradeCluster(ClusterId: string, request: UpgradeClusterRequest): Promise<UpgradeClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.upgradeClusterWithOptions(ClusterId, request, headers, runtime);
  }

  /**
   * @summary Updates cluster components to use new features and patch vulnerabilities. You must update cluster components one after one and update a component only after the previous one is successfully updated. Before you update a component, we recommend that you read the update notes for each component. Cluster component updates may affect your businesses. Assess the impact, back up data, and perform the update during off-peak hours.
   *
   * @param request UpgradeClusterAddonsRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpgradeClusterAddonsResponse
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
      bodyType: "none",
    });
    return $tea.cast<UpgradeClusterAddonsResponse>(await this.callApi(params, req, runtime), new UpgradeClusterAddonsResponse({}));
  }

  /**
   * @summary Updates cluster components to use new features and patch vulnerabilities. You must update cluster components one after one and update a component only after the previous one is successfully updated. Before you update a component, we recommend that you read the update notes for each component. Cluster component updates may affect your businesses. Assess the impact, back up data, and perform the update during off-peak hours.
   *
   * @param request UpgradeClusterAddonsRequest
   * @return UpgradeClusterAddonsResponse
   */
  async upgradeClusterAddons(ClusterId: string, request: UpgradeClusterAddonsRequest): Promise<UpgradeClusterAddonsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.upgradeClusterAddonsWithOptions(ClusterId, request, headers, runtime);
  }

  /**
   * @summary You can call the UpgradeClusterNodepool operation to update the Kubernetes version, OS version, or container runtime version of the nodes in a node pool.
   *
   * @description This operation allows you to update the Kubernetes version, OS version, or container runtime version of the nodes in a node pool.
   *
   * @param request UpgradeClusterNodepoolRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpgradeClusterNodepoolResponse
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
   * @summary You can call the UpgradeClusterNodepool operation to update the Kubernetes version, OS version, or container runtime version of the nodes in a node pool.
   *
   * @description This operation allows you to update the Kubernetes version, OS version, or container runtime version of the nodes in a node pool.
   *
   * @param request UpgradeClusterNodepoolRequest
   * @return UpgradeClusterNodepoolResponse
   */
  async upgradeClusterNodepool(ClusterId: string, NodepoolId: string, request: UpgradeClusterNodepoolRequest): Promise<UpgradeClusterNodepoolResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.upgradeClusterNodepoolWithOptions(ClusterId, NodepoolId, request, headers, runtime);
  }

}
