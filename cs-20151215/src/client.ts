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
  static names(): { [key: string]: string } {
    return {
      config: 'config',
      disabled: 'disabled',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      disabled: 'boolean',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataDisk extends $tea.Model {
  autoSnapshotPolicyId?: string;
  category?: string;
  encrypted?: string;
  performanceLevel?: string;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      autoSnapshotPolicyId: 'auto_snapshot_policy_id',
      category: 'category',
      encrypted: 'encrypted',
      performanceLevel: 'performance_level',
      size: 'size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoSnapshotPolicyId: 'string',
      category: 'string',
      encrypted: 'string',
      performanceLevel: 'string',
      size: 'number',
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
  headers: { [key: string]: string };
  statusCode: number;
  body: AttachInstancesResponseBody;
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

export class CancelClusterUpgradeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
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
  headers: { [key: string]: string };
  statusCode: number;
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

export class CancelTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
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
  headers: { [key: string]: string };
  statusCode: number;
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

export class CreateAutoscalingConfigRequest extends $tea.Model {
  coolDownDuration?: string;
  expander?: string;
  gpuUtilizationThreshold?: string;
  scaleDownEnabled?: boolean;
  scanInterval?: string;
  unneededDuration?: string;
  utilizationThreshold?: string;
  static names(): { [key: string]: string } {
    return {
      coolDownDuration: 'cool_down_duration',
      expander: 'expander',
      gpuUtilizationThreshold: 'gpu_utilization_threshold',
      scaleDownEnabled: 'scale_down_enabled',
      scanInterval: 'scan_interval',
      unneededDuration: 'unneeded_duration',
      utilizationThreshold: 'utilization_threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coolDownDuration: 'string',
      expander: 'string',
      gpuUtilizationThreshold: 'string',
      scaleDownEnabled: 'boolean',
      scanInterval: 'string',
      unneededDuration: 'string',
      utilizationThreshold: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAutoscalingConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateClusterResponseBody;
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

export class CreateClusterNodePoolRequest extends $tea.Model {
  autoScaling?: CreateClusterNodePoolRequestAutoScaling;
  count?: number;
  interconnectConfig?: CreateClusterNodePoolRequestInterconnectConfig;
  interconnectMode?: string;
  kubernetesConfig?: CreateClusterNodePoolRequestKubernetesConfig;
  management?: CreateClusterNodePoolRequestManagement;
  maxNodes?: number;
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
  static names(): { [key: string]: string } {
    return {
      nodepoolId: 'nodepool_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodepoolId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterNodePoolResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateClusterNodePoolResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateEdgeMachineResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateKubernetesTriggerResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateTemplateResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateTriggerResponseBody;
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

export class DeleteAlertContactResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
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

export class DeleteAlertContactGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
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

export class DeleteClusterRequest extends $tea.Model {
  keepSlb?: boolean;
  retainAllResources?: boolean;
  retainResources?: string[];
  static names(): { [key: string]: string } {
    return {
      keepSlb: 'keep_slb',
      retainAllResources: 'retain_all_resources',
      retainResources: 'retain_resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
  keepSlb?: boolean;
  retainAllResources?: boolean;
  retainResourcesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      keepSlb: 'keep_slb',
      retainAllResources: 'retain_all_resources',
      retainResourcesShrink: 'retain_resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keepSlb: 'boolean',
      retainAllResources: 'boolean',
      retainResourcesShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteClusterResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
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
  static names(): { [key: string]: string } {
    return {
      requestId: 'request_id',
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

export class DeleteClusterNodepoolResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteClusterNodepoolResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteClusterNodesResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
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
  headers: { [key: string]: string };
  statusCode: number;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DeletePolicyInstanceResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
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
  headers: { [key: string]: string };
  statusCode: number;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DeployPolicyInstanceResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DescirbeWorkflowResponseBody;
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

export class DescribeAddonsRequest extends $tea.Model {
  clusterType?: string;
  region?: string;
  static names(): { [key: string]: string } {
    return {
      clusterType: 'cluster_type',
      region: 'region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterType: 'string',
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeAddonsResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeClusterAddonMetadataResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: {[key: string]: any};
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
  headers: { [key: string]: string };
  statusCode: number;
  body: {[key: string]: any};
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
  headers: { [key: string]: string };
  statusCode: number;
  body: {[key: string]: any};
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
  headers: { [key: string]: string };
  statusCode: number;
  body: string;
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

export class DescribeClusterDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeClusterDetailResponseBody;
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
  taskId?: number;
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
      taskId: 'number',
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeClusterEventsResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeClusterLogsResponseBody[];
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeClusterNodePoolDetailResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeClusterNodePoolsResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeClusterNodesResponseBody;
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

export class DescribeClusterResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeClusterResourcesResponseBody[];
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeClusterTasksResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeClusterUserKubeconfigResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeClusterV2UserKubeconfigResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeClustersResponseBody[];
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
  clusterSpec?: string;
  clusterType?: string;
  name?: string;
  pageNumber?: number;
  pageSize?: number;
  profile?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeClustersV1ResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeEdgeMachineActiveProcessResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeEdgeMachineModelsResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeEdgeMachineTunnelConfigDetailResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeEdgeMachinesResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeEventsResponseBody;
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
  privateIpAddress?: string;
  static names(): { [key: string]: string } {
    return {
      privateIpAddress: 'PrivateIpAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeExternalAgentResponseBody;
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
  profile?: string;
  region?: string;
  runtime?: string;
  static names(): { [key: string]: string } {
    return {
      clusterType: 'ClusterType',
      kubernetesVersion: 'KubernetesVersion',
      profile: 'Profile',
      region: 'Region',
      runtime: 'runtime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterType: 'string',
      kubernetesVersion: 'string',
      profile: 'string',
      region: 'string',
      runtime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeKubernetesVersionMetadataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeKubernetesVersionMetadataResponseBody[];
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeNodePoolVulsResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: {[key: string]: any};
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribePolicyDetailsResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribePolicyGovernanceInClusterResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribePolicyInstancesResponseBody[];
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribePolicyInstancesStatusResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeTaskInfoResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeTemplateAttributeResponseBody[];
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeTemplatesResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeTriggerResponseBody[];
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

export class DescribeUserPermissionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeUserPermissionResponseBody[];
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
  static names(): { [key: string]: string } {
    return {
      amkClusterQuota: 'amk_cluster_quota',
      askClusterQuota: 'ask_cluster_quota',
      clusterNodepoolQuota: 'cluster_nodepool_quota',
      clusterQuota: 'cluster_quota',
      edgeImprovedNodepoolQuota: 'edge_improved_nodepool_quota',
      nodeQuota: 'node_quota',
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
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserQuotaResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeUserQuotaResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeWorkflowsResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: EdgeClusterAddEdgeMachineResponseBody;
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
  nodes?: string[];
  rolloutPolicy?: FixNodePoolVulsRequestRolloutPolicy;
  vulList?: string[];
  static names(): { [key: string]: string } {
    return {
      nodes: 'nodes',
      rolloutPolicy: 'rollout_policy',
      vulList: 'vul_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: { 'type': 'array', 'itemType': 'string' },
      rolloutPolicy: FixNodePoolVulsRequestRolloutPolicy,
      vulList: { 'type': 'array', 'itemType': 'string' },
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
  headers: { [key: string]: string };
  statusCode: number;
  body: FixNodePoolVulsResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetKubernetesTriggerResponseBody[];
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetUpgradeStatusResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
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
  headers: { [key: string]: string };
  statusCode: number;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListTagResourcesResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: MigrateClusterResponseBody;
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
  apiServerEip?: boolean;
  apiServerEipId?: string;
  deletionProtection?: boolean;
  enableRrsa?: boolean;
  ingressDomainRebinding?: string;
  ingressLoadbalancerId?: string;
  instanceDeletionProtection?: boolean;
  maintenanceWindow?: MaintenanceWindow;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      apiServerEip: 'api_server_eip',
      apiServerEipId: 'api_server_eip_id',
      deletionProtection: 'deletion_protection',
      enableRrsa: 'enable_rrsa',
      ingressDomainRebinding: 'ingress_domain_rebinding',
      ingressLoadbalancerId: 'ingress_loadbalancer_id',
      instanceDeletionProtection: 'instance_deletion_protection',
      maintenanceWindow: 'maintenance_window',
      resourceGroupId: 'resource_group_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiServerEip: 'boolean',
      apiServerEipId: 'string',
      deletionProtection: 'boolean',
      enableRrsa: 'boolean',
      ingressDomainRebinding: 'string',
      ingressLoadbalancerId: 'string',
      instanceDeletionProtection: 'boolean',
      maintenanceWindow: MaintenanceWindow,
      resourceGroupId: 'string',
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyClusterResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
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
  headers: { [key: string]: string };
  statusCode: number;
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
  kubernetesConfig?: ModifyClusterNodePoolRequestKubernetesConfig;
  management?: ModifyClusterNodePoolRequestManagement;
  nodepoolInfo?: ModifyClusterNodePoolRequestNodepoolInfo;
  scalingGroup?: ModifyClusterNodePoolRequestScalingGroup;
  teeConfig?: ModifyClusterNodePoolRequestTeeConfig;
  updateNodes?: boolean;
  static names(): { [key: string]: string } {
    return {
      autoScaling: 'auto_scaling',
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
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      nodepoolId: 'nodepool_id',
      taskId: 'task_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodepoolId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterNodePoolResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyClusterNodePoolResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
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
  kubeletConfig?: ModifyNodePoolNodeConfigRequestKubeletConfig;
  rollingPolicy?: ModifyNodePoolNodeConfigRequestRollingPolicy;
  static names(): { [key: string]: string } {
    return {
      kubeletConfig: 'kubelet_config',
      rollingPolicy: 'rolling_policy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      kubeletConfig: ModifyNodePoolNodeConfigRequestKubeletConfig,
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyNodePoolNodeConfigResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyPolicyInstanceResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: OpenAckServiceResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
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
  headers: { [key: string]: string };
  statusCode: number;
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
  headers: { [key: string]: string };
  statusCode: number;
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
  headers: { [key: string]: string };
  statusCode: number;
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

export class RemoveNodePoolNodesShrinkRequest extends $tea.Model {
  drainNode?: boolean;
  nodesShrink?: string;
  releaseNode?: boolean;
  static names(): { [key: string]: string } {
    return {
      drainNode: 'drain_node',
      nodesShrink: 'nodes',
      releaseNode: 'release_node',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drainNode: 'boolean',
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
  headers: { [key: string]: string };
  statusCode: number;
  body: RemoveNodePoolNodesResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
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
  nodes?: string[];
  static names(): { [key: string]: string } {
    return {
      nodes: 'nodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: { 'type': 'array', 'itemType': 'string' },
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
  headers: { [key: string]: string };
  statusCode: number;
  body: RepairClusterNodePoolResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
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
  headers: { [key: string]: string };
  statusCode: number;
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
  headers: { [key: string]: string };
  statusCode: number;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ScaleClusterResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ScaleClusterNodePoolResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ScaleOutClusterResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: StartWorkflowResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: TagResourcesResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: UntagResourcesResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
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
  headers: { [key: string]: string };
  statusCode: number;
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
  headers: { [key: string]: string };
  statusCode: number;
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
  nextVersion?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      componentName: 'component_name',
      nextVersion: 'next_version',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentName: 'string',
      nextVersion: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeClusterResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
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
  headers: { [key: string]: string };
  statusCode: number;
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
  runtimeVersion?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'image_id',
      kubernetesVersion: 'kubernetes_version',
      runtimeVersion: 'runtime_version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      kubernetesVersion: 'string',
      runtimeVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeClusterNodepoolResponseBody extends $tea.Model {
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

export class UpgradeClusterNodepoolResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpgradeClusterNodepoolResponseBody;
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
  enable?: boolean;
  upgradeConfig?: CreateClusterNodePoolRequestManagementUpgradeConfig;
  static names(): { [key: string]: string } {
    return {
      autoRepair: 'auto_repair',
      enable: 'enable',
      upgradeConfig: 'upgrade_config',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRepair: 'boolean',
      enable: 'boolean',
      upgradeConfig: CreateClusterNodePoolRequestManagementUpgradeConfig,
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
  loginPassword?: string;
  multiAzPolicy?: string;
  onDemandBaseCapacity?: number;
  onDemandPercentageAboveBaseCapacity?: number;
  period?: number;
  periodUnit?: string;
  platform?: string;
  rdsInstances?: string[];
  scalingPolicy?: string;
  securityGroupId?: string;
  securityGroupIds?: string[];
  spotInstancePools?: number;
  spotInstanceRemedy?: boolean;
  spotPriceLimit?: CreateClusterNodePoolRequestScalingGroupSpotPriceLimit[];
  spotStrategy?: string;
  systemDiskCategory?: string;
  systemDiskPerformanceLevel?: string;
  systemDiskSize?: number;
  tags?: CreateClusterNodePoolRequestScalingGroupTags[];
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
      loginPassword: 'login_password',
      multiAzPolicy: 'multi_az_policy',
      onDemandBaseCapacity: 'on_demand_base_capacity',
      onDemandPercentageAboveBaseCapacity: 'on_demand_percentage_above_base_capacity',
      period: 'period',
      periodUnit: 'period_unit',
      platform: 'platform',
      rdsInstances: 'rds_instances',
      scalingPolicy: 'scaling_policy',
      securityGroupId: 'security_group_id',
      securityGroupIds: 'security_group_ids',
      spotInstancePools: 'spot_instance_pools',
      spotInstanceRemedy: 'spot_instance_remedy',
      spotPriceLimit: 'spot_price_limit',
      spotStrategy: 'spot_strategy',
      systemDiskCategory: 'system_disk_category',
      systemDiskPerformanceLevel: 'system_disk_performance_level',
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
      loginPassword: 'string',
      multiAzPolicy: 'string',
      onDemandBaseCapacity: 'number',
      onDemandPercentageAboveBaseCapacity: 'number',
      period: 'number',
      periodUnit: 'string',
      platform: 'string',
      rdsInstances: { 'type': 'array', 'itemType': 'string' },
      scalingPolicy: 'string',
      securityGroupId: 'string',
      securityGroupIds: { 'type': 'array', 'itemType': 'string' },
      spotInstancePools: 'number',
      spotInstanceRemedy: 'boolean',
      spotPriceLimit: { 'type': 'array', 'itemType': CreateClusterNodePoolRequestScalingGroupSpotPriceLimit },
      spotStrategy: 'string',
      systemDiskCategory: 'string',
      systemDiskPerformanceLevel: 'string',
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
  enable?: boolean;
  upgradeConfig?: DescribeClusterNodePoolDetailResponseBodyManagementUpgradeConfig;
  static names(): { [key: string]: string } {
    return {
      autoRepair: 'auto_repair',
      enable: 'enable',
      upgradeConfig: 'upgrade_config',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRepair: 'boolean',
      enable: 'boolean',
      upgradeConfig: DescribeClusterNodePoolDetailResponseBodyManagementUpgradeConfig,
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
  compensateWithOnDemand?: boolean;
  dataDisks?: DataDisk[];
  deploymentsetId?: string;
  desiredSize?: number;
  imageId?: string;
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
  ramPolicy?: string;
  rdsInstances?: string[];
  scalingGroupId?: string;
  scalingPolicy?: string;
  securityGroupId?: string;
  securityGroupIds?: string[];
  spotInstancePools?: number;
  spotInstanceRemedy?: boolean;
  spotPriceLimit?: DescribeClusterNodePoolDetailResponseBodyScalingGroupSpotPriceLimit[];
  spotStrategy?: string;
  systemDiskCategory?: string;
  systemDiskPerformanceLevel?: string;
  systemDiskSize?: number;
  tags?: Tag[];
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
      ramPolicy: 'ram_policy',
      rdsInstances: 'rds_instances',
      scalingGroupId: 'scaling_group_id',
      scalingPolicy: 'scaling_policy',
      securityGroupId: 'security_group_id',
      securityGroupIds: 'security_group_ids',
      spotInstancePools: 'spot_instance_pools',
      spotInstanceRemedy: 'spot_instance_remedy',
      spotPriceLimit: 'spot_price_limit',
      spotStrategy: 'spot_strategy',
      systemDiskCategory: 'system_disk_category',
      systemDiskPerformanceLevel: 'system_disk_performance_level',
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
      ramPolicy: 'string',
      rdsInstances: { 'type': 'array', 'itemType': 'string' },
      scalingGroupId: 'string',
      scalingPolicy: 'string',
      securityGroupId: 'string',
      securityGroupIds: { 'type': 'array', 'itemType': 'string' },
      spotInstancePools: 'number',
      spotInstanceRemedy: 'boolean',
      spotPriceLimit: { 'type': 'array', 'itemType': DescribeClusterNodePoolDetailResponseBodyScalingGroupSpotPriceLimit },
      spotStrategy: 'string',
      systemDiskCategory: 'string',
      systemDiskPerformanceLevel: 'string',
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
  enable?: boolean;
  upgradeConfig?: DescribeClusterNodePoolsResponseBodyNodepoolsManagementUpgradeConfig;
  static names(): { [key: string]: string } {
    return {
      autoRepair: 'auto_repair',
      enable: 'enable',
      upgradeConfig: 'upgrade_config',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRepair: 'boolean',
      enable: 'boolean',
      upgradeConfig: DescribeClusterNodePoolsResponseBodyNodepoolsManagementUpgradeConfig,
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
  compensateWithOnDemand?: boolean;
  dataDisks?: DataDisk[];
  deploymentsetId?: string;
  desiredSize?: number;
  imageId?: string;
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
  ramPolicy?: string;
  rdsInstances?: string[];
  scalingGroupId?: string;
  scalingPolicy?: string;
  securityGroupId?: string;
  securityGroupIds?: string[];
  spotInstancePools?: number;
  spotInstanceRemedy?: boolean;
  spotPriceLimit?: DescribeClusterNodePoolsResponseBodyNodepoolsScalingGroupSpotPriceLimit[];
  spotStrategy?: string;
  systemDiskCategory?: string;
  systemDiskPerformanceLevel?: string;
  systemDiskSize?: number;
  tags?: Tag[];
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
      ramPolicy: 'ram_policy',
      rdsInstances: 'rds_instances',
      scalingGroupId: 'scaling_group_id',
      scalingPolicy: 'scaling_policy',
      securityGroupId: 'security_group_id',
      securityGroupIds: 'security_group_ids',
      spotInstancePools: 'spot_instance_pools',
      spotInstanceRemedy: 'spot_instance_remedy',
      spotPriceLimit: 'spot_price_limit',
      spotStrategy: 'spot_strategy',
      systemDiskCategory: 'system_disk_category',
      systemDiskPerformanceLevel: 'system_disk_performance_level',
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
      ramPolicy: 'string',
      rdsInstances: { 'type': 'array', 'itemType': 'string' },
      scalingGroupId: 'string',
      scalingPolicy: 'string',
      securityGroupId: 'string',
      securityGroupIds: { 'type': 'array', 'itemType': 'string' },
      spotInstancePools: 'number',
      spotInstanceRemedy: 'boolean',
      spotPriceLimit: { 'type': 'array', 'itemType': DescribeClusterNodePoolsResponseBodyNodepoolsScalingGroupSpotPriceLimit },
      spotStrategy: 'string',
      systemDiskCategory: 'string',
      systemDiskPerformanceLevel: 'string',
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

export class DescribeClusterResourcesResponseBody extends $tea.Model {
  clusterId?: string;
  created?: string;
  instanceId?: string;
  resourceInfo?: string;
  resourceType?: string;
  state?: string;
  autoCreate?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'cluster_id',
      created: 'created',
      instanceId: 'instance_id',
      resourceInfo: 'resource_info',
      resourceType: 'resource_type',
      state: 'state',
      autoCreate: 'auto_create',
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
  multiAz?: string;
  static names(): { [key: string]: string } {
    return {
      capabilities: 'capabilities',
      images: 'images',
      metaData: 'meta_data',
      runtimes: 'runtimes',
      version: 'version',
      multiAz: 'multi_az',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capabilities: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      images: { 'type': 'array', 'itemType': DescribeKubernetesVersionMetadataResponseBodyImages },
      metaData: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      runtimes: { 'type': 'array', 'itemType': Runtime },
      version: 'string',
      multiAz: 'string',
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
  vulList?: DescribeNodePoolVulsResponseBodyVulRecordsVulList[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'instance_id',
      vulList: 'vul_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
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
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      cmsEnabled: 'cms_enabled',
      cpuPolicy: 'cpu_policy',
      labels: 'labels',
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
  enable?: boolean;
  upgradeConfig?: ModifyClusterNodePoolRequestManagementUpgradeConfig;
  static names(): { [key: string]: string } {
    return {
      autoRepair: 'auto_repair',
      enable: 'enable',
      upgradeConfig: 'upgrade_config',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRepair: 'boolean',
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
  rdsInstances?: string[];
  scalingPolicy?: string;
  spotInstancePools?: number;
  spotInstanceRemedy?: boolean;
  spotPriceLimit?: ModifyClusterNodePoolRequestScalingGroupSpotPriceLimit[];
  spotStrategy?: string;
  systemDiskCategory?: string;
  systemDiskPerformanceLevel?: string;
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
      rdsInstances: 'rds_instances',
      scalingPolicy: 'scaling_policy',
      spotInstancePools: 'spot_instance_pools',
      spotInstanceRemedy: 'spot_instance_remedy',
      spotPriceLimit: 'spot_price_limit',
      spotStrategy: 'spot_strategy',
      systemDiskCategory: 'system_disk_category',
      systemDiskPerformanceLevel: 'system_disk_performance_level',
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
      rdsInstances: { 'type': 'array', 'itemType': 'string' },
      scalingPolicy: 'string',
      spotInstancePools: 'number',
      spotInstanceRemedy: 'boolean',
      spotPriceLimit: { 'type': 'array', 'itemType': ModifyClusterNodePoolRequestScalingGroupSpotPriceLimit },
      spotStrategy: 'string',
      systemDiskCategory: 'string',
      systemDiskPerformanceLevel: 'string',
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

export class ModifyNodePoolNodeConfigRequestKubeletConfig extends $tea.Model {
  cpuManagerPolicy?: string;
  eventBurst?: number;
  eventRecordQPS?: number;
  evictionHard?: { [key: string]: any };
  evictionSoft?: { [key: string]: any };
  evictionSoftGracePeriod?: { [key: string]: any };
  kubeAPIBurst?: number;
  kubeAPIQPS?: number;
  kubeReserved?: { [key: string]: any };
  registryBurst?: number;
  registryPullQPS?: number;
  serializeImagePulls?: boolean;
  systemReserved?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      cpuManagerPolicy: 'cpuManagerPolicy',
      eventBurst: 'eventBurst',
      eventRecordQPS: 'eventRecordQPS',
      evictionHard: 'evictionHard',
      evictionSoft: 'evictionSoft',
      evictionSoftGracePeriod: 'evictionSoftGracePeriod',
      kubeAPIBurst: 'kubeAPIBurst',
      kubeAPIQPS: 'kubeAPIQPS',
      kubeReserved: 'kubeReserved',
      registryBurst: 'registryBurst',
      registryPullQPS: 'registryPullQPS',
      serializeImagePulls: 'serializeImagePulls',
      systemReserved: 'systemReserved',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuManagerPolicy: 'string',
      eventBurst: 'number',
      eventRecordQPS: 'number',
      evictionHard: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      evictionSoft: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      evictionSoftGracePeriod: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      kubeAPIBurst: 'number',
      kubeAPIQPS: 'number',
      kubeReserved: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
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

export class UpgradeClusterAddonsRequestBody extends $tea.Model {
  componentName?: string;
  config?: string;
  nextVersion?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      componentName: 'component_name',
      config: 'config',
      nextVersion: 'next_version',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentName: 'string',
      config: 'string',
      nextVersion: 'string',
      version: 'string',
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

  async attachInstances(ClusterId: string, request: AttachInstancesRequest): Promise<AttachInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.attachInstancesWithOptions(ClusterId, request, headers, runtime);
  }

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

    if (!Util.isUnset($tea.toMap(request.runtime))) {
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

  async cancelClusterUpgrade(ClusterId: string): Promise<CancelClusterUpgradeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cancelClusterUpgradeWithOptions(ClusterId, headers, runtime);
  }

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

  async cancelComponentUpgrade(clusterId: string, componentId: string): Promise<CancelComponentUpgradeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cancelComponentUpgradeWithOptions(clusterId, componentId, headers, runtime);
  }

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

  async cancelTask(taskId: string): Promise<CancelTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cancelTaskWithOptions(taskId, headers, runtime);
  }

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

  async cancelWorkflow(workflowName: string, request: CancelWorkflowRequest): Promise<CancelWorkflowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cancelWorkflowWithOptions(workflowName, request, headers, runtime);
  }

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

  async createAutoscalingConfig(ClusterId: string, request: CreateAutoscalingConfigRequest): Promise<CreateAutoscalingConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createAutoscalingConfigWithOptions(ClusterId, request, headers, runtime);
  }

  async createAutoscalingConfigWithOptions(ClusterId: string, request: CreateAutoscalingConfigRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateAutoscalingConfigResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.coolDownDuration)) {
      body["cool_down_duration"] = request.coolDownDuration;
    }

    if (!Util.isUnset(request.expander)) {
      body["expander"] = request.expander;
    }

    if (!Util.isUnset(request.gpuUtilizationThreshold)) {
      body["gpu_utilization_threshold"] = request.gpuUtilizationThreshold;
    }

    if (!Util.isUnset(request.scaleDownEnabled)) {
      body["scale_down_enabled"] = request.scaleDownEnabled;
    }

    if (!Util.isUnset(request.scanInterval)) {
      body["scan_interval"] = request.scanInterval;
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

  async createCluster(request: CreateClusterRequest): Promise<CreateClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createClusterWithOptions(request, headers, runtime);
  }

  async createClusterWithOptions(request: CreateClusterRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateClusterResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
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

    if (!Util.isUnset($tea.toMap(request.runtime))) {
      body["runtime"] = request.runtime;
    }

    if (!Util.isUnset(request.securityGroupId)) {
      body["security_group_id"] = request.securityGroupId;
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

  async createClusterNodePool(ClusterId: string, request: CreateClusterNodePoolRequest): Promise<CreateClusterNodePoolResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createClusterNodePoolWithOptions(ClusterId, request, headers, runtime);
  }

  async createClusterNodePoolWithOptions(ClusterId: string, request: CreateClusterNodePoolRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateClusterNodePoolResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset($tea.toMap(request.autoScaling))) {
      body["auto_scaling"] = request.autoScaling;
    }

    if (!Util.isUnset(request.count)) {
      body["count"] = request.count;
    }

    if (!Util.isUnset($tea.toMap(request.interconnectConfig))) {
      body["interconnect_config"] = request.interconnectConfig;
    }

    if (!Util.isUnset(request.interconnectMode)) {
      body["interconnect_mode"] = request.interconnectMode;
    }

    if (!Util.isUnset($tea.toMap(request.kubernetesConfig))) {
      body["kubernetes_config"] = request.kubernetesConfig;
    }

    if (!Util.isUnset($tea.toMap(request.management))) {
      body["management"] = request.management;
    }

    if (!Util.isUnset(request.maxNodes)) {
      body["max_nodes"] = request.maxNodes;
    }

    if (!Util.isUnset($tea.toMap(request.nodepoolInfo))) {
      body["nodepool_info"] = request.nodepoolInfo;
    }

    if (!Util.isUnset($tea.toMap(request.scalingGroup))) {
      body["scaling_group"] = request.scalingGroup;
    }

    if (!Util.isUnset($tea.toMap(request.teeConfig))) {
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

  async createEdgeMachine(request: CreateEdgeMachineRequest): Promise<CreateEdgeMachineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createEdgeMachineWithOptions(request, headers, runtime);
  }

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

  async createKubernetesTrigger(request: CreateKubernetesTriggerRequest): Promise<CreateKubernetesTriggerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createKubernetesTriggerWithOptions(request, headers, runtime);
  }

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

  async createTemplate(request: CreateTemplateRequest): Promise<CreateTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createTemplateWithOptions(request, headers, runtime);
  }

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

  async createTrigger(clusterId: string, request: CreateTriggerRequest): Promise<CreateTriggerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createTriggerWithOptions(clusterId, request, headers, runtime);
  }

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

  async deleteAlertContact(): Promise<DeleteAlertContactResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteAlertContactWithOptions(headers, runtime);
  }

  async deleteAlertContactWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteAlertContactResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
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
      bodyType: "none",
    });
    return $tea.cast<DeleteAlertContactResponse>(await this.callApi(params, req, runtime), new DeleteAlertContactResponse({}));
  }

  async deleteAlertContactGroup(): Promise<DeleteAlertContactGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteAlertContactGroupWithOptions(headers, runtime);
  }

  async deleteAlertContactGroupWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteAlertContactGroupResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
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
      bodyType: "none",
    });
    return $tea.cast<DeleteAlertContactGroupResponse>(await this.callApi(params, req, runtime), new DeleteAlertContactGroupResponse({}));
  }

  async deleteCluster(ClusterId: string, request: DeleteClusterRequest): Promise<DeleteClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteClusterWithOptions(ClusterId, request, headers, runtime);
  }

  async deleteClusterWithOptions(ClusterId: string, tmpReq: DeleteClusterRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteClusterResponse> {
    Util.validateModel(tmpReq);
    let request = new DeleteClusterShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.retainResources)) {
      request.retainResourcesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.retainResources, "retain_resources", "json");
    }

    let query : {[key: string ]: any} = { };
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
      bodyType: "none",
    });
    return $tea.cast<DeleteClusterResponse>(await this.callApi(params, req, runtime), new DeleteClusterResponse({}));
  }

  async deleteClusterNodepool(ClusterId: string, NodepoolId: string, request: DeleteClusterNodepoolRequest): Promise<DeleteClusterNodepoolResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteClusterNodepoolWithOptions(ClusterId, NodepoolId, request, headers, runtime);
  }

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

  async deleteClusterNodes(ClusterId: string, request: DeleteClusterNodesRequest): Promise<DeleteClusterNodesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteClusterNodesWithOptions(ClusterId, request, headers, runtime);
  }

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

  async deleteEdgeMachine(edgeMachineid: string, request: DeleteEdgeMachineRequest): Promise<DeleteEdgeMachineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteEdgeMachineWithOptions(edgeMachineid, request, headers, runtime);
  }

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

  async deleteKubernetesTrigger(Id: string): Promise<DeleteKubernetesTriggerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteKubernetesTriggerWithOptions(Id, headers, runtime);
  }

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

  async deletePolicyInstance(clusterId: string, policyName: string, request: DeletePolicyInstanceRequest): Promise<DeletePolicyInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deletePolicyInstanceWithOptions(clusterId, policyName, request, headers, runtime);
  }

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

  async deleteTemplate(TemplateId: string): Promise<DeleteTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteTemplateWithOptions(TemplateId, headers, runtime);
  }

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

  async deleteTrigger(clusterId: string, Id: string): Promise<DeleteTriggerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteTriggerWithOptions(clusterId, Id, headers, runtime);
  }

  async deleteTriggerWithOptions(clusterId: string, Id: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteTriggerResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteTrigger",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/%5Bcluster_id%5D/triggers/%5BId%5D`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<DeleteTriggerResponse>(await this.callApi(params, req, runtime), new DeleteTriggerResponse({}));
  }

  async deployPolicyInstance(clusterId: string, policyName: string, request: DeployPolicyInstanceRequest): Promise<DeployPolicyInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deployPolicyInstanceWithOptions(clusterId, policyName, request, headers, runtime);
  }

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

  async descirbeWorkflow(workflowName: string): Promise<DescirbeWorkflowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.descirbeWorkflowWithOptions(workflowName, headers, runtime);
  }

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

  async describeAddons(request: DescribeAddonsRequest): Promise<DescribeAddonsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeAddonsWithOptions(request, headers, runtime);
  }

  async describeAddonsWithOptions(request: DescribeAddonsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeAddonsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clusterType)) {
      query["cluster_type"] = request.clusterType;
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

  async describeClusterAddonMetadata(clusterId: string, componentId: string, version: string): Promise<DescribeClusterAddonMetadataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeClusterAddonMetadataWithOptions(clusterId, componentId, version, headers, runtime);
  }

  async describeClusterAddonMetadataWithOptions(clusterId: string, componentId: string, version: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeClusterAddonMetadataResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
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

  async describeClusterAddonUpgradeStatus(ClusterId: string, ComponentId: string): Promise<DescribeClusterAddonUpgradeStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeClusterAddonUpgradeStatusWithOptions(ClusterId, ComponentId, headers, runtime);
  }

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

  async describeClusterAddonsUpgradeStatus(ClusterId: string, request: DescribeClusterAddonsUpgradeStatusRequest): Promise<DescribeClusterAddonsUpgradeStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeClusterAddonsUpgradeStatusWithOptions(ClusterId, request, headers, runtime);
  }

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

  async describeClusterAddonsVersion(ClusterId: string): Promise<DescribeClusterAddonsVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeClusterAddonsVersionWithOptions(ClusterId, headers, runtime);
  }

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

  async describeClusterAttachScripts(ClusterId: string, request: DescribeClusterAttachScriptsRequest): Promise<DescribeClusterAttachScriptsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeClusterAttachScriptsWithOptions(ClusterId, request, headers, runtime);
  }

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

  async describeClusterDetail(ClusterId: string): Promise<DescribeClusterDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeClusterDetailWithOptions(ClusterId, headers, runtime);
  }

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

  async describeClusterEvents(ClusterId: string, request: DescribeClusterEventsRequest): Promise<DescribeClusterEventsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeClusterEventsWithOptions(ClusterId, request, headers, runtime);
  }

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

  async describeClusterLogs(ClusterId: string): Promise<DescribeClusterLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeClusterLogsWithOptions(ClusterId, headers, runtime);
  }

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

  async describeClusterNodePoolDetail(ClusterId: string, NodepoolId: string): Promise<DescribeClusterNodePoolDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeClusterNodePoolDetailWithOptions(ClusterId, NodepoolId, headers, runtime);
  }

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

  async describeClusterNodePools(ClusterId: string): Promise<DescribeClusterNodePoolsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeClusterNodePoolsWithOptions(ClusterId, headers, runtime);
  }

  async describeClusterNodePoolsWithOptions(ClusterId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeClusterNodePoolsResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
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

  async describeClusterNodes(ClusterId: string, request: DescribeClusterNodesRequest): Promise<DescribeClusterNodesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeClusterNodesWithOptions(ClusterId, request, headers, runtime);
  }

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

  async describeClusterResources(ClusterId: string): Promise<DescribeClusterResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeClusterResourcesWithOptions(ClusterId, headers, runtime);
  }

  async describeClusterResourcesWithOptions(ClusterId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeClusterResourcesResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
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

  async describeClusterTasks(clusterId: string): Promise<DescribeClusterTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeClusterTasksWithOptions(clusterId, headers, runtime);
  }

  async describeClusterTasksWithOptions(clusterId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeClusterTasksResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
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

  async describeClusterUserKubeconfig(ClusterId: string, request: DescribeClusterUserKubeconfigRequest): Promise<DescribeClusterUserKubeconfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeClusterUserKubeconfigWithOptions(ClusterId, request, headers, runtime);
  }

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

  async describeClusterV2UserKubeconfig(ClusterId: string, request: DescribeClusterV2UserKubeconfigRequest): Promise<DescribeClusterV2UserKubeconfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeClusterV2UserKubeconfigWithOptions(ClusterId, request, headers, runtime);
  }

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

  async describeClusters(request: DescribeClustersRequest): Promise<DescribeClustersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeClustersWithOptions(request, headers, runtime);
  }

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

  async describeClustersV1(request: DescribeClustersV1Request): Promise<DescribeClustersV1Response> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeClustersV1WithOptions(request, headers, runtime);
  }

  async describeClustersV1WithOptions(request: DescribeClustersV1Request, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeClustersV1Response> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
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

  async describeEdgeMachineActiveProcess(edgeMachineid: string): Promise<DescribeEdgeMachineActiveProcessResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeEdgeMachineActiveProcessWithOptions(edgeMachineid, headers, runtime);
  }

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

  async describeEdgeMachineModels(): Promise<DescribeEdgeMachineModelsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeEdgeMachineModelsWithOptions(headers, runtime);
  }

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

  async describeEdgeMachineTunnelConfigDetail(edgeMachineid: string): Promise<DescribeEdgeMachineTunnelConfigDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeEdgeMachineTunnelConfigDetailWithOptions(edgeMachineid, headers, runtime);
  }

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

  async describeEdgeMachines(request: DescribeEdgeMachinesRequest): Promise<DescribeEdgeMachinesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeEdgeMachinesWithOptions(request, headers, runtime);
  }

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

  async describeEvents(request: DescribeEventsRequest): Promise<DescribeEventsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeEventsWithOptions(request, headers, runtime);
  }

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

  async describeExternalAgent(ClusterId: string, request: DescribeExternalAgentRequest): Promise<DescribeExternalAgentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeExternalAgentWithOptions(ClusterId, request, headers, runtime);
  }

  async describeExternalAgentWithOptions(ClusterId: string, request: DescribeExternalAgentRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeExternalAgentResponse> {
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

  async describeKubernetesVersionMetadata(request: DescribeKubernetesVersionMetadataRequest): Promise<DescribeKubernetesVersionMetadataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeKubernetesVersionMetadataWithOptions(request, headers, runtime);
  }

  async describeKubernetesVersionMetadataWithOptions(request: DescribeKubernetesVersionMetadataRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeKubernetesVersionMetadataResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clusterType)) {
      query["ClusterType"] = request.clusterType;
    }

    if (!Util.isUnset(request.kubernetesVersion)) {
      query["KubernetesVersion"] = request.kubernetesVersion;
    }

    if (!Util.isUnset(request.profile)) {
      query["Profile"] = request.profile;
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

  async describeNodePoolVuls(clusterId: string, nodepoolId: string): Promise<DescribeNodePoolVulsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeNodePoolVulsWithOptions(clusterId, nodepoolId, headers, runtime);
  }

  async describeNodePoolVulsWithOptions(clusterId: string, nodepoolId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeNodePoolVulsResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
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

  async describePolicies(): Promise<DescribePoliciesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describePoliciesWithOptions(headers, runtime);
  }

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

  async describePolicyDetails(policyName: string): Promise<DescribePolicyDetailsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describePolicyDetailsWithOptions(policyName, headers, runtime);
  }

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

  async describePolicyGovernanceInCluster(clusterId: string): Promise<DescribePolicyGovernanceInClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describePolicyGovernanceInClusterWithOptions(clusterId, headers, runtime);
  }

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

  async describePolicyInstances(clusterId: string, request: DescribePolicyInstancesRequest): Promise<DescribePolicyInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describePolicyInstancesWithOptions(clusterId, request, headers, runtime);
  }

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

  async describePolicyInstancesStatus(clusterId: string): Promise<DescribePolicyInstancesStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describePolicyInstancesStatusWithOptions(clusterId, headers, runtime);
  }

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

  async describeTaskInfo(taskId: string): Promise<DescribeTaskInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeTaskInfoWithOptions(taskId, headers, runtime);
  }

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

  async describeTemplateAttribute(TemplateId: string, request: DescribeTemplateAttributeRequest): Promise<DescribeTemplateAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeTemplateAttributeWithOptions(TemplateId, request, headers, runtime);
  }

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

  async describeTemplates(request: DescribeTemplatesRequest): Promise<DescribeTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeTemplatesWithOptions(request, headers, runtime);
  }

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

  async describeTrigger(clusterId: string, request: DescribeTriggerRequest): Promise<DescribeTriggerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeTriggerWithOptions(clusterId, request, headers, runtime);
  }

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
      pathname: `/clusters/%5Bcluster_id%5D/triggers`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "array",
    });
    return $tea.cast<DescribeTriggerResponse>(await this.callApi(params, req, runtime), new DescribeTriggerResponse({}));
  }

  async describeUserPermission(uid: string): Promise<DescribeUserPermissionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeUserPermissionWithOptions(uid, headers, runtime);
  }

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

  async describeUserQuota(): Promise<DescribeUserQuotaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeUserQuotaWithOptions(headers, runtime);
  }

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

  async describeWorkflows(): Promise<DescribeWorkflowsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeWorkflowsWithOptions(headers, runtime);
  }

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

  async edgeClusterAddEdgeMachine(clusterid: string, edgeMachineid: string, request: EdgeClusterAddEdgeMachineRequest): Promise<EdgeClusterAddEdgeMachineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.edgeClusterAddEdgeMachineWithOptions(clusterid, edgeMachineid, request, headers, runtime);
  }

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

  async fixNodePoolVuls(clusterId: string, nodepoolId: string, request: FixNodePoolVulsRequest): Promise<FixNodePoolVulsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.fixNodePoolVulsWithOptions(clusterId, nodepoolId, request, headers, runtime);
  }

  async fixNodePoolVulsWithOptions(clusterId: string, nodepoolId: string, request: FixNodePoolVulsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<FixNodePoolVulsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.nodes)) {
      body["nodes"] = request.nodes;
    }

    if (!Util.isUnset($tea.toMap(request.rolloutPolicy))) {
      body["rollout_policy"] = request.rolloutPolicy;
    }

    if (!Util.isUnset(request.vulList)) {
      body["vul_list"] = request.vulList;
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

  async getKubernetesTrigger(ClusterId: string, request: GetKubernetesTriggerRequest): Promise<GetKubernetesTriggerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getKubernetesTriggerWithOptions(ClusterId, request, headers, runtime);
  }

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

  async getUpgradeStatus(ClusterId: string): Promise<GetUpgradeStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getUpgradeStatusWithOptions(ClusterId, headers, runtime);
  }

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

  async grantPermissions(uid: string, request: GrantPermissionsRequest): Promise<GrantPermissionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.grantPermissionsWithOptions(uid, request, headers, runtime);
  }

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

  async installClusterAddons(ClusterId: string, request: InstallClusterAddonsRequest): Promise<InstallClusterAddonsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.installClusterAddonsWithOptions(ClusterId, request, headers, runtime);
  }

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

  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTagResourcesWithOptions(request, headers, runtime);
  }

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

  async migrateCluster(clusterId: string, request: MigrateClusterRequest): Promise<MigrateClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.migrateClusterWithOptions(clusterId, request, headers, runtime);
  }

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

  async modifyCluster(ClusterId: string, request: ModifyClusterRequest): Promise<ModifyClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyClusterWithOptions(ClusterId, request, headers, runtime);
  }

  async modifyClusterWithOptions(ClusterId: string, request: ModifyClusterRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ModifyClusterResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.apiServerEip)) {
      body["api_server_eip"] = request.apiServerEip;
    }

    if (!Util.isUnset(request.apiServerEipId)) {
      body["api_server_eip_id"] = request.apiServerEipId;
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

    if (!Util.isUnset($tea.toMap(request.maintenanceWindow))) {
      body["maintenance_window"] = request.maintenanceWindow;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      body["resource_group_id"] = request.resourceGroupId;
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

  async modifyClusterAddon(clusterId: string, componentId: string, request: ModifyClusterAddonRequest): Promise<ModifyClusterAddonResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyClusterAddonWithOptions(clusterId, componentId, request, headers, runtime);
  }

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

  async modifyClusterConfiguration(ClusterId: string, request: ModifyClusterConfigurationRequest): Promise<ModifyClusterConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyClusterConfigurationWithOptions(ClusterId, request, headers, runtime);
  }

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

  async modifyClusterNodePool(ClusterId: string, NodepoolId: string, request: ModifyClusterNodePoolRequest): Promise<ModifyClusterNodePoolResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyClusterNodePoolWithOptions(ClusterId, NodepoolId, request, headers, runtime);
  }

  async modifyClusterNodePoolWithOptions(ClusterId: string, NodepoolId: string, request: ModifyClusterNodePoolRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ModifyClusterNodePoolResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset($tea.toMap(request.autoScaling))) {
      body["auto_scaling"] = request.autoScaling;
    }

    if (!Util.isUnset($tea.toMap(request.kubernetesConfig))) {
      body["kubernetes_config"] = request.kubernetesConfig;
    }

    if (!Util.isUnset($tea.toMap(request.management))) {
      body["management"] = request.management;
    }

    if (!Util.isUnset($tea.toMap(request.nodepoolInfo))) {
      body["nodepool_info"] = request.nodepoolInfo;
    }

    if (!Util.isUnset($tea.toMap(request.scalingGroup))) {
      body["scaling_group"] = request.scalingGroup;
    }

    if (!Util.isUnset($tea.toMap(request.teeConfig))) {
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

  async modifyClusterTags(ClusterId: string, request: ModifyClusterTagsRequest): Promise<ModifyClusterTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyClusterTagsWithOptions(ClusterId, request, headers, runtime);
  }

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

  async modifyNodePoolNodeConfig(ClusterId: string, NodepoolId: string, request: ModifyNodePoolNodeConfigRequest): Promise<ModifyNodePoolNodeConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyNodePoolNodeConfigWithOptions(ClusterId, NodepoolId, request, headers, runtime);
  }

  async modifyNodePoolNodeConfigWithOptions(ClusterId: string, NodepoolId: string, request: ModifyNodePoolNodeConfigRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ModifyNodePoolNodeConfigResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset($tea.toMap(request.kubeletConfig))) {
      body["kubelet_config"] = request.kubeletConfig;
    }

    if (!Util.isUnset($tea.toMap(request.rollingPolicy))) {
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

  async modifyPolicyInstance(clusterId: string, policyName: string, request: ModifyPolicyInstanceRequest): Promise<ModifyPolicyInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyPolicyInstanceWithOptions(clusterId, policyName, request, headers, runtime);
  }

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

  async openAckService(request: OpenAckServiceRequest): Promise<OpenAckServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.openAckServiceWithOptions(request, headers, runtime);
  }

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

  async pauseClusterUpgrade(ClusterId: string): Promise<PauseClusterUpgradeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.pauseClusterUpgradeWithOptions(ClusterId, headers, runtime);
  }

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

  async pauseComponentUpgrade(clusterid: string, componentid: string): Promise<PauseComponentUpgradeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.pauseComponentUpgradeWithOptions(clusterid, componentid, headers, runtime);
  }

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

  async pauseTask(taskId: string): Promise<PauseTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.pauseTaskWithOptions(taskId, headers, runtime);
  }

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

  async removeClusterNodes(ClusterId: string, request: RemoveClusterNodesRequest): Promise<RemoveClusterNodesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.removeClusterNodesWithOptions(ClusterId, request, headers, runtime);
  }

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

  async removeNodePoolNodes(ClusterId: string, NodepoolId: string, request: RemoveNodePoolNodesRequest): Promise<RemoveNodePoolNodesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.removeNodePoolNodesWithOptions(ClusterId, NodepoolId, request, headers, runtime);
  }

  async removeNodePoolNodesWithOptions(ClusterId: string, NodepoolId: string, tmpReq: RemoveNodePoolNodesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RemoveNodePoolNodesResponse> {
    Util.validateModel(tmpReq);
    let request = new RemoveNodePoolNodesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.nodes)) {
      request.nodesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.nodes, "nodes", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.drainNode)) {
      query["drain_node"] = request.drainNode;
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

  async removeWorkflow(workflowName: string): Promise<RemoveWorkflowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.removeWorkflowWithOptions(workflowName, headers, runtime);
  }

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

  async repairClusterNodePool(clusterId: string, nodepoolId: string, request: RepairClusterNodePoolRequest): Promise<RepairClusterNodePoolResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.repairClusterNodePoolWithOptions(clusterId, nodepoolId, request, headers, runtime);
  }

  async repairClusterNodePoolWithOptions(clusterId: string, nodepoolId: string, request: RepairClusterNodePoolRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RepairClusterNodePoolResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.nodes)) {
      body["nodes"] = request.nodes;
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

  async resumeComponentUpgrade(clusterid: string, componentid: string): Promise<ResumeComponentUpgradeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.resumeComponentUpgradeWithOptions(clusterid, componentid, headers, runtime);
  }

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

  async resumeTask(taskId: string): Promise<ResumeTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.resumeTaskWithOptions(taskId, headers, runtime);
  }

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

  async resumeUpgradeCluster(ClusterId: string): Promise<ResumeUpgradeClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.resumeUpgradeClusterWithOptions(ClusterId, headers, runtime);
  }

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

  async scaleCluster(ClusterId: string, request: ScaleClusterRequest): Promise<ScaleClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.scaleClusterWithOptions(ClusterId, request, headers, runtime);
  }

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

  async scaleClusterNodePool(ClusterId: string, NodepoolId: string, request: ScaleClusterNodePoolRequest): Promise<ScaleClusterNodePoolResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.scaleClusterNodePoolWithOptions(ClusterId, NodepoolId, request, headers, runtime);
  }

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

  async scaleOutCluster(ClusterId: string, request: ScaleOutClusterRequest): Promise<ScaleOutClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.scaleOutClusterWithOptions(ClusterId, request, headers, runtime);
  }

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

    if (!Util.isUnset($tea.toMap(request.runtime))) {
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

  async startWorkflow(request: StartWorkflowRequest): Promise<StartWorkflowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startWorkflowWithOptions(request, headers, runtime);
  }

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

  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.tagResourcesWithOptions(request, headers, runtime);
  }

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

  async unInstallClusterAddons(ClusterId: string, request: UnInstallClusterAddonsRequest): Promise<UnInstallClusterAddonsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.unInstallClusterAddonsWithOptions(ClusterId, request, headers, runtime);
  }

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

  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.untagResourcesWithOptions(request, headers, runtime);
  }

  async untagResourcesWithOptions(request: UntagResourcesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UntagResourcesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.all)) {
      query["all"] = request.all;
    }

    if (!Util.isUnset(request.regionId)) {
      query["region_id"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceIds)) {
      query["resource_ids"] = request.resourceIds;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["resource_type"] = request.resourceType;
    }

    if (!Util.isUnset(request.tagKeys)) {
      query["tag_keys"] = request.tagKeys;
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

  async updateContactGroupForAlert(ClusterId: string): Promise<UpdateContactGroupForAlertResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateContactGroupForAlertWithOptions(ClusterId, headers, runtime);
  }

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

  async updateK8sClusterUserConfigExpire(ClusterId: string, request: UpdateK8sClusterUserConfigExpireRequest): Promise<UpdateK8sClusterUserConfigExpireResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateK8sClusterUserConfigExpireWithOptions(ClusterId, request, headers, runtime);
  }

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

  async updateTemplate(TemplateId: string, request: UpdateTemplateRequest): Promise<UpdateTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateTemplateWithOptions(TemplateId, request, headers, runtime);
  }

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

  async upgradeCluster(ClusterId: string, request: UpgradeClusterRequest): Promise<UpgradeClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.upgradeClusterWithOptions(ClusterId, request, headers, runtime);
  }

  async upgradeClusterWithOptions(ClusterId: string, request: UpgradeClusterRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpgradeClusterResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.componentName)) {
      body["component_name"] = request.componentName;
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
      bodyType: "none",
    });
    return $tea.cast<UpgradeClusterResponse>(await this.callApi(params, req, runtime), new UpgradeClusterResponse({}));
  }

  async upgradeClusterAddons(ClusterId: string, request: UpgradeClusterAddonsRequest): Promise<UpgradeClusterAddonsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.upgradeClusterAddonsWithOptions(ClusterId, request, headers, runtime);
  }

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

  async upgradeClusterNodepool(ClusterId: string, NodepoolId: string, request: UpgradeClusterNodepoolRequest): Promise<UpgradeClusterNodepoolResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.upgradeClusterNodepoolWithOptions(ClusterId, NodepoolId, request, headers, runtime);
  }

  async upgradeClusterNodepoolWithOptions(ClusterId: string, NodepoolId: string, request: UpgradeClusterNodepoolRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpgradeClusterNodepoolResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.imageId)) {
      body["image_id"] = request.imageId;
    }

    if (!Util.isUnset(request.kubernetesVersion)) {
      body["kubernetes_version"] = request.kubernetesVersion;
    }

    if (!Util.isUnset(request.runtimeVersion)) {
      body["runtime_version"] = request.runtimeVersion;
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

}
