// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AttachInstancesRequest extends $tea.Model {
  clusterId?: string;
  instances?: string[];
  runtime?: AttachInstancesRequestRuntime;
  imageId?: string;
  formatDisk?: boolean;
  keepInstanceName?: boolean;
  cpuPolicy?: string;
  keyPair?: string;
  password?: string;
  isEdgeWorker?: boolean;
  userData?: string;
  nodepoolId?: string;
  rdsInstances?: string[];
  tags?: AttachInstancesRequestTags[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      instances: 'instances',
      runtime: 'runtime',
      imageId: 'image_id',
      formatDisk: 'format_disk',
      keepInstanceName: 'keep_instance_name',
      cpuPolicy: 'cpu_policy',
      keyPair: 'key_pair',
      password: 'password',
      isEdgeWorker: 'is_edge_worker',
      userData: 'user_data',
      nodepoolId: 'nodepool_id',
      rdsInstances: 'rds_instances',
      tags: 'tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      instances: { 'type': 'array', 'itemType': 'string' },
      runtime: AttachInstancesRequestRuntime,
      imageId: 'string',
      formatDisk: 'boolean',
      keepInstanceName: 'boolean',
      cpuPolicy: 'string',
      keyPair: 'string',
      password: 'string',
      isEdgeWorker: 'boolean',
      userData: 'string',
      nodepoolId: 'string',
      rdsInstances: { 'type': 'array', 'itemType': 'string' },
      tags: { 'type': 'array', 'itemType': AttachInstancesRequestTags },
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
  body: AttachInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AttachInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelClusterUpgradeRequest extends $tea.Model {
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelClusterUpgradeResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelComponentUpgradeRequest extends $tea.Model {
  clusterid?: string;
  componentid?: string;
  static names(): { [key: string]: string } {
    return {
      clusterid: 'clusterid',
      componentid: 'componentid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterid: 'string',
      componentid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelComponentUpgradeResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterRequest extends $tea.Model {
  name?: string;
  clusterType?: string;
  regionId?: string;
  zoneId?: string;
  kubernetesVersion?: string;
  deletionProtection?: string;
  runtime?: CreateClusterRequestRuntime;
  vpcid?: string;
  workerVswitchIds?: string[];
  containerCidr?: string;
  serviceCidr?: string;
  nodeCidrMask?: string;
  snatEntry?: boolean;
  endpointPublicAccess?: boolean;
  sshFlags?: boolean;
  rdsInstances?: string[];
  securityGroupId?: string;
  isEnterpriseSecurityGroup?: boolean;
  proxyMode?: string;
  tags?: CreateClusterRequestTags[];
  imagesId?: string;
  masterInstanceChargeType?: string;
  masterPeriod?: number;
  masterPeriodUnit?: string;
  masterAutoRenew?: boolean;
  masterAutoRenewPeriod?: number;
  masterCount?: number;
  masterVswitchIds?: string[];
  masterInstanceTypes?: string[];
  masterSystemDiskCategory?: string;
  masterSystemDiskSize?: number;
  workerInstanceChargeType?: string;
  workerPeriod?: number;
  workerPeriodUnit?: string;
  workerAutoRenew?: boolean;
  workerAutoRenewPeriod?: number;
  numOfNodes?: number;
  workerInstanceTypes?: string[];
  workerSystemDiskCategory?: string;
  workerSystemDiskSize?: number;
  workerDataDisks?: CreateClusterRequestWorkerDataDisks[];
  osType?: string;
  keyPair?: string;
  loginPassword?: string;
  userData?: string;
  nodePortRange?: string;
  cpuPolicy?: string;
  taints?: CreateClusterRequestTaints[];
  cloudMonitorFlags?: boolean;
  addons?: CreateClusterRequestAddons[];
  platform?: string;
  vswitchIds?: string[];
  privateZone?: boolean;
  profile?: string;
  podVswitchIds?: string[];
  disableRollback?: boolean;
  timeoutMins?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      clusterType: 'cluster_type',
      regionId: 'region_id',
      zoneId: 'zone_id',
      kubernetesVersion: 'kubernetes_version',
      deletionProtection: 'deletion_protection',
      runtime: 'runtime',
      vpcid: 'vpcid',
      workerVswitchIds: 'worker_vswitch_ids',
      containerCidr: 'container_cidr',
      serviceCidr: 'service_cidr',
      nodeCidrMask: 'node_cidr_mask',
      snatEntry: 'snat_entry',
      endpointPublicAccess: 'endpoint_public_access',
      sshFlags: 'ssh_flags',
      rdsInstances: 'rds_instances',
      securityGroupId: 'security_group_id',
      isEnterpriseSecurityGroup: 'is_enterprise_security_group',
      proxyMode: 'proxy_mode',
      tags: 'tags',
      imagesId: 'images_id',
      masterInstanceChargeType: 'master_instance_charge_type',
      masterPeriod: 'master_period',
      masterPeriodUnit: 'master_period_unit',
      masterAutoRenew: 'master_auto_renew',
      masterAutoRenewPeriod: 'master_auto_renew_period',
      masterCount: 'master_count',
      masterVswitchIds: 'master_vswitch_ids',
      masterInstanceTypes: 'master_instance_types',
      masterSystemDiskCategory: 'master_system_disk_category',
      masterSystemDiskSize: 'master_system_disk_size',
      workerInstanceChargeType: 'worker_instance_charge_type',
      workerPeriod: 'worker_period',
      workerPeriodUnit: 'worker_period_unit',
      workerAutoRenew: 'worker_auto_renew',
      workerAutoRenewPeriod: 'worker_auto_renew_period',
      numOfNodes: 'num_of_nodes',
      workerInstanceTypes: 'worker_instance_types',
      workerSystemDiskCategory: 'worker_system_disk_category',
      workerSystemDiskSize: 'worker_system_disk_size',
      workerDataDisks: 'worker_data_disks',
      osType: 'os_type',
      keyPair: 'key_pair',
      loginPassword: 'login_password',
      userData: 'user_data',
      nodePortRange: 'node_port_range',
      cpuPolicy: 'cpu_policy',
      taints: 'taints',
      cloudMonitorFlags: 'cloud_monitor_flags',
      addons: 'addons',
      platform: 'platform',
      vswitchIds: 'vswitch_ids',
      privateZone: 'private_zone',
      profile: 'profile',
      podVswitchIds: 'pod_vswitch_ids',
      disableRollback: 'disable_rollback',
      timeoutMins: 'timeout_mins',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      clusterType: 'string',
      regionId: 'string',
      zoneId: 'string',
      kubernetesVersion: 'string',
      deletionProtection: 'string',
      runtime: CreateClusterRequestRuntime,
      vpcid: 'string',
      workerVswitchIds: { 'type': 'array', 'itemType': 'string' },
      containerCidr: 'string',
      serviceCidr: 'string',
      nodeCidrMask: 'string',
      snatEntry: 'boolean',
      endpointPublicAccess: 'boolean',
      sshFlags: 'boolean',
      rdsInstances: { 'type': 'array', 'itemType': 'string' },
      securityGroupId: 'string',
      isEnterpriseSecurityGroup: 'boolean',
      proxyMode: 'string',
      tags: { 'type': 'array', 'itemType': CreateClusterRequestTags },
      imagesId: 'string',
      masterInstanceChargeType: 'string',
      masterPeriod: 'number',
      masterPeriodUnit: 'string',
      masterAutoRenew: 'boolean',
      masterAutoRenewPeriod: 'number',
      masterCount: 'number',
      masterVswitchIds: { 'type': 'array', 'itemType': 'string' },
      masterInstanceTypes: { 'type': 'array', 'itemType': 'string' },
      masterSystemDiskCategory: 'string',
      masterSystemDiskSize: 'number',
      workerInstanceChargeType: 'string',
      workerPeriod: 'number',
      workerPeriodUnit: 'string',
      workerAutoRenew: 'boolean',
      workerAutoRenewPeriod: 'number',
      numOfNodes: 'number',
      workerInstanceTypes: { 'type': 'array', 'itemType': 'string' },
      workerSystemDiskCategory: 'string',
      workerSystemDiskSize: 'number',
      workerDataDisks: { 'type': 'array', 'itemType': CreateClusterRequestWorkerDataDisks },
      osType: 'string',
      keyPair: 'string',
      loginPassword: 'string',
      userData: 'string',
      nodePortRange: 'string',
      cpuPolicy: 'string',
      taints: { 'type': 'array', 'itemType': CreateClusterRequestTaints },
      cloudMonitorFlags: 'boolean',
      addons: { 'type': 'array', 'itemType': CreateClusterRequestAddons },
      platform: 'string',
      vswitchIds: { 'type': 'array', 'itemType': 'string' },
      privateZone: 'boolean',
      profile: 'string',
      podVswitchIds: { 'type': 'array', 'itemType': 'string' },
      disableRollback: 'boolean',
      timeoutMins: 'number',
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
  body: CreateClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateKubernetesTriggerRequest extends $tea.Model {
  regionId?: string;
  clusterId?: string;
  projectId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      clusterId: 'ClusterId',
      projectId: 'ProjectId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
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
  static names(): { [key: string]: string } {
    return {
      action: 'action',
      clusterId: 'cluster_id',
      id: 'id',
      projectId: 'project_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      clusterId: 'string',
      id: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateKubernetesTriggerResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateKubernetesTriggerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateKubernetesTriggerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteClusterRequest extends $tea.Model {
  clusterId?: string;
  retainResources?: string[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      retainResources: 'retain_resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      retainResources: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteClusterResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteKubernetesTriggerRequest extends $tea.Model {
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteKubernetesTriggerResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAddonsRequest extends $tea.Model {
  region?: string;
  clusterType?: string;
  static names(): { [key: string]: string } {
    return {
      region: 'region',
      clusterType: 'cluster_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: 'string',
      clusterType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAddonsResponseBody extends $tea.Model {
  componentGroups?: DescribeAddonsResponseBodyComponentGroups[];
  standardComponents?: DescribeAddonsResponseBodyStandardComponents;
  static names(): { [key: string]: string } {
    return {
      componentGroups: 'ComponentGroups',
      standardComponents: 'StandardComponents',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentGroups: { 'type': 'array', 'itemType': DescribeAddonsResponseBodyComponentGroups },
      standardComponents: DescribeAddonsResponseBodyStandardComponents,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAddonsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAddonsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAddonsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterAddonUpgradeStatusRequest extends $tea.Model {
  clusterId?: string;
  componentId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      componentId: 'ComponentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      componentId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterAddonUpgradeStatusResponseBody extends $tea.Model {
  addonInfo?: DescribeClusterAddonUpgradeStatusResponseBodyAddonInfo;
  canUpgrade?: boolean;
  template?: string;
  static names(): { [key: string]: string } {
    return {
      addonInfo: 'addon_info',
      canUpgrade: 'can_upgrade',
      template: 'template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addonInfo: DescribeClusterAddonUpgradeStatusResponseBodyAddonInfo,
      canUpgrade: 'boolean',
      template: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterAddonUpgradeStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeClusterAddonUpgradeStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeClusterAddonUpgradeStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterAddonsUpgradeStatusRequest extends $tea.Model {
  clusterId?: string;
  componentIds?: string[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      componentIds: 'componentIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      componentIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterAddonsUpgradeStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterAddonsVersionRequest extends $tea.Model {
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterAddonsVersionResponseBody extends $tea.Model {
  addonsName?: { [key: string]: {[key: string]: any} };
  static names(): { [key: string]: string } {
    return {
      addonsName: 'AddonsName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addonsName: { 'type': 'map', 'keyType': 'string', 'valueType': '{[key: string]: any}' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterAddonsVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeClusterAddonsVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeClusterAddonsVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterAttachScriptsRequest extends $tea.Model {
  clusterId?: string;
  arch?: string;
  options?: DescribeClusterAttachScriptsRequestOptions;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      arch: 'arch',
      options: 'options',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      arch: 'string',
      options: DescribeClusterAttachScriptsRequestOptions,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterAttachScriptsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: string;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterDetailRequest extends $tea.Model {
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterDetailResponseBody extends $tea.Model {
  clusterId?: string;
  clusterType?: string;
  created?: string;
  currentVersion?: string;
  deletionProtection?: boolean;
  dockerVersion?: string;
  externalLoadbalancerId?: string;
  instanceType?: string;
  metaData?: string;
  name?: string;
  networkMode?: string;
  regionId?: string;
  resourceGroupId?: string;
  securityGroupId?: string;
  size?: number;
  state?: string;
  tags?: DescribeClusterDetailResponseBodyTags[];
  updated?: string;
  vpcId?: string;
  vswitchCidr?: string;
  vswitchId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'cluster_id',
      clusterType: 'cluster_type',
      created: 'created',
      currentVersion: 'current_version',
      deletionProtection: 'deletion_protection',
      dockerVersion: 'docker_version',
      externalLoadbalancerId: 'external_loadbalancer_id',
      instanceType: 'instance_type',
      metaData: 'meta_data',
      name: 'name',
      networkMode: 'network_mode',
      regionId: 'region_id',
      resourceGroupId: 'resource_group_id',
      securityGroupId: 'security_group_id',
      size: 'size',
      state: 'state',
      tags: 'tags',
      updated: 'updated',
      vpcId: 'vpc_id',
      vswitchCidr: 'vswitch_cidr',
      vswitchId: 'vswitch_id',
      zoneId: 'zone_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterType: 'string',
      created: 'string',
      currentVersion: 'string',
      deletionProtection: 'boolean',
      dockerVersion: 'string',
      externalLoadbalancerId: 'string',
      instanceType: 'string',
      metaData: 'string',
      name: 'string',
      networkMode: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      securityGroupId: 'string',
      size: 'number',
      state: 'string',
      tags: { 'type': 'array', 'itemType': DescribeClusterDetailResponseBodyTags },
      updated: 'string',
      vpcId: 'string',
      vswitchCidr: 'string',
      vswitchId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeClusterDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeClusterDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterLogsRequest extends $tea.Model {
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterLogsResponseBody extends $tea.Model {
  ID?: string;
  clusterId?: string;
  clusterLog?: string;
  created?: string;
  logLevel?: string;
  updated?: string;
  static names(): { [key: string]: string } {
    return {
      ID: 'ID',
      clusterId: 'cluster_id',
      clusterLog: 'cluster_log',
      created: 'created',
      logLevel: 'log_level',
      updated: 'updated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ID: 'string',
      clusterId: 'string',
      clusterLog: 'string',
      created: 'string',
      logLevel: 'string',
      updated: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterLogsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeClusterLogsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeClusterLogsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterNodesRequest extends $tea.Model {
  clusterId?: string;
  pageSize?: string;
  pageNumber?: string;
  nodepoolId?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      pageSize: 'pageSize',
      pageNumber: 'pageNumber',
      nodepoolId: 'nodepool_id',
      state: 'state',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      pageSize: 'string',
      pageNumber: 'string',
      nodepoolId: 'string',
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
  body: DescribeClusterNodesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeClusterNodesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterResourcesRequest extends $tea.Model {
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeClusterResourcesResponseBody[];
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: { 'type': 'array', 'itemType': DescribeClusterResourcesResponseBody },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterUserKubeconfigRequest extends $tea.Model {
  clusterId?: string;
  privateIpAddress?: boolean;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      privateIpAddress: 'PrivateIpAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      privateIpAddress: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterUserKubeconfigResponseBody extends $tea.Model {
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

export class DescribeClusterUserKubeconfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeClusterUserKubeconfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeClusterUserKubeconfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterV2UserKubeconfigRequest extends $tea.Model {
  clusterId?: string;
  privateIpAddress?: boolean;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      privateIpAddress: 'PrivateIpAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
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
  body: DescribeClusterV2UserKubeconfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeClusterV2UserKubeconfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClustersRequest extends $tea.Model {
  name?: string;
  clusterType?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      clusterType: 'clusterType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      clusterType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClustersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeClustersResponseBody[];
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: { 'type': 'array', 'itemType': DescribeClustersResponseBody },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClustersV1Request extends $tea.Model {
  name?: string;
  clusterType?: string;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      clusterType: 'ClusterType',
      pageSize: 'page_size',
      pageNumber: 'page_number',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      clusterType: 'string',
      pageSize: 'number',
      pageNumber: 'number',
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
  body: DescribeClustersV1ResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeClustersV1ResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExternalAgentRequest extends $tea.Model {
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
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
  body: DescribeExternalAgentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeExternalAgentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTemplatesRequest extends $tea.Model {
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
  body: DescribeTemplatesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeTemplatesResponseBody,
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
  nodeQuota?: number;
  static names(): { [key: string]: string } {
    return {
      amkClusterQuota: 'amk_cluster_quota',
      askClusterQuota: 'ask_cluster_quota',
      clusterNodepoolQuota: 'cluster_nodepool_quota',
      clusterQuota: 'cluster_quota',
      nodeQuota: 'node_quota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amkClusterQuota: 'number',
      askClusterQuota: 'number',
      clusterNodepoolQuota: 'number',
      clusterQuota: 'number',
      nodeQuota: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserQuotaResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeUserQuotaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeUserQuotaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetKubernetesTriggerRequest extends $tea.Model {
  clusterId?: string;
  namespace?: string;
  type?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      namespace: 'Namespace',
      type: 'Type',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      namespace: 'string',
      type: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetKubernetesTriggerResponseBody extends $tea.Model {
  triggers?: GetKubernetesTriggerResponseBodyTriggers[];
  static names(): { [key: string]: string } {
    return {
      triggers: 'triggers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      triggers: { 'type': 'array', 'itemType': GetKubernetesTriggerResponseBodyTriggers },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetKubernetesTriggerResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetKubernetesTriggerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetKubernetesTriggerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUpgradeStatusRequest extends $tea.Model {
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
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
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'error_message',
      precheckReportId: 'precheck_report_id',
      status: 'status',
      upgradeStep: 'upgrade_step',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      precheckReportId: 'string',
      status: 'string',
      upgradeStep: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUpgradeStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetUpgradeStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetUpgradeStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallClusterAddonsRequest extends $tea.Model {
  clusterId?: string;
  body?: InstallClusterAddonsRequestBody[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      body: { 'type': 'array', 'itemType': InstallClusterAddonsRequestBody },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallClusterAddonsResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterRequest extends $tea.Model {
  clusterId?: string;
  deletionProtection?: boolean;
  ingressLoadbalancerId?: string;
  apiServerEip?: boolean;
  apiServerEipId?: string;
  resourceGroupId?: string;
  ingressDomainRebinding?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      deletionProtection: 'deletion_protection',
      ingressLoadbalancerId: 'ingress_loadbalancer_id',
      apiServerEip: 'api_server_eip',
      apiServerEipId: 'api_server_eip_id',
      resourceGroupId: 'resource_group_id',
      ingressDomainRebinding: 'ingress_domain_rebinding',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      deletionProtection: 'boolean',
      ingressLoadbalancerId: 'string',
      apiServerEip: 'boolean',
      apiServerEipId: 'string',
      resourceGroupId: 'string',
      ingressDomainRebinding: 'string',
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
  body: ModifyClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterConfigurationRequest extends $tea.Model {
  clusterId?: string;
  customizeConfig?: ModifyClusterConfigurationRequestCustomizeConfig;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      customizeConfig: 'customize_config',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      customizeConfig: ModifyClusterConfigurationRequestCustomizeConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterConfigurationResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterTagsRequest extends $tea.Model {
  clusterId?: string;
  body?: ModifyClusterTagsRequestBody[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      body: { 'type': 'array', 'itemType': ModifyClusterTagsRequestBody },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterTagsResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PauseComponentUpgradeRequest extends $tea.Model {
  clusterid?: string;
  componentid?: string;
  static names(): { [key: string]: string } {
    return {
      clusterid: 'clusterid',
      componentid: 'componentid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterid: 'string',
      componentid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PauseComponentUpgradeResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveClusterNodesRequest extends $tea.Model {
  clusterId?: string;
  releaseNode?: boolean;
  drainNode?: boolean;
  nodes?: string[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      releaseNode: 'release_node',
      drainNode: 'drain_node',
      nodes: 'nodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      releaseNode: 'boolean',
      drainNode: 'boolean',
      nodes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveClusterNodesResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumeComponentUpgradeRequest extends $tea.Model {
  clusterid?: string;
  componentid?: string;
  static names(): { [key: string]: string } {
    return {
      clusterid: 'clusterid',
      componentid: 'componentid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterid: 'string',
      componentid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumeComponentUpgradeResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScaleClusterRequest extends $tea.Model {
  clusterId?: string;
  count?: number;
  keyPair?: string;
  loginPassword?: string;
  workerDataDisk?: boolean;
  workerInstanceTypes?: string[];
  workerInstanceChargeType?: string;
  workerPeriod?: number;
  workerPeriodUnit?: string;
  workerAutoRenew?: boolean;
  workerAutoRenewPeriod?: number;
  workerSystemDiskCategory?: string;
  workerSystemDiskSize?: number;
  cloudMonitorFlags?: boolean;
  cpuPolicy?: string;
  disableRollback?: boolean;
  vswitchIds?: string[];
  workerDataDisks?: ScaleClusterRequestWorkerDataDisks[];
  tags?: ScaleClusterRequestTags[];
  taints?: ScaleClusterRequestTaints[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      count: 'count',
      keyPair: 'key_pair',
      loginPassword: 'login_password',
      workerDataDisk: 'worker_data_disk',
      workerInstanceTypes: 'worker_instance_types',
      workerInstanceChargeType: 'worker_instance_charge_type',
      workerPeriod: 'worker_period',
      workerPeriodUnit: 'worker_period_unit',
      workerAutoRenew: 'worker_auto_renew',
      workerAutoRenewPeriod: 'worker_auto_renew_period',
      workerSystemDiskCategory: 'worker_system_disk_category',
      workerSystemDiskSize: 'worker_system_disk_size',
      cloudMonitorFlags: 'cloud_monitor_flags',
      cpuPolicy: 'cpu_policy',
      disableRollback: 'disable_rollback',
      vswitchIds: 'vswitch_ids',
      workerDataDisks: 'worker_data_disks',
      tags: 'tags',
      taints: 'taints',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      count: 'number',
      keyPair: 'string',
      loginPassword: 'string',
      workerDataDisk: 'boolean',
      workerInstanceTypes: { 'type': 'array', 'itemType': 'string' },
      workerInstanceChargeType: 'string',
      workerPeriod: 'number',
      workerPeriodUnit: 'string',
      workerAutoRenew: 'boolean',
      workerAutoRenewPeriod: 'number',
      workerSystemDiskCategory: 'string',
      workerSystemDiskSize: 'number',
      cloudMonitorFlags: 'boolean',
      cpuPolicy: 'string',
      disableRollback: 'boolean',
      vswitchIds: { 'type': 'array', 'itemType': 'string' },
      workerDataDisks: { 'type': 'array', 'itemType': ScaleClusterRequestWorkerDataDisks },
      tags: { 'type': 'array', 'itemType': ScaleClusterRequestTags },
      taints: { 'type': 'array', 'itemType': ScaleClusterRequestTaints },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScaleClusterShrinkRequest extends $tea.Model {
  clusterId?: string;
  count?: number;
  keyPair?: string;
  loginPassword?: string;
  workerDataDisk?: boolean;
  workerInstanceTypes?: string[];
  workerInstanceChargeType?: string;
  workerPeriod?: number;
  workerPeriodUnit?: string;
  workerAutoRenew?: boolean;
  workerAutoRenewPeriod?: number;
  workerSystemDiskCategory?: string;
  workerSystemDiskSize?: number;
  cloudMonitorFlags?: boolean;
  cpuPolicy?: string;
  disableRollback?: boolean;
  vswitchIds?: string[];
  workerDataDisks?: ScaleClusterShrinkRequestWorkerDataDisks[];
  tags?: ScaleClusterShrinkRequestTags[];
  taintsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      count: 'count',
      keyPair: 'key_pair',
      loginPassword: 'login_password',
      workerDataDisk: 'worker_data_disk',
      workerInstanceTypes: 'worker_instance_types',
      workerInstanceChargeType: 'worker_instance_charge_type',
      workerPeriod: 'worker_period',
      workerPeriodUnit: 'worker_period_unit',
      workerAutoRenew: 'worker_auto_renew',
      workerAutoRenewPeriod: 'worker_auto_renew_period',
      workerSystemDiskCategory: 'worker_system_disk_category',
      workerSystemDiskSize: 'worker_system_disk_size',
      cloudMonitorFlags: 'cloud_monitor_flags',
      cpuPolicy: 'cpu_policy',
      disableRollback: 'disable_rollback',
      vswitchIds: 'vswitch_ids',
      workerDataDisks: 'worker_data_disks',
      tags: 'tags',
      taintsShrink: 'taints',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      count: 'number',
      keyPair: 'string',
      loginPassword: 'string',
      workerDataDisk: 'boolean',
      workerInstanceTypes: { 'type': 'array', 'itemType': 'string' },
      workerInstanceChargeType: 'string',
      workerPeriod: 'number',
      workerPeriodUnit: 'string',
      workerAutoRenew: 'boolean',
      workerAutoRenewPeriod: 'number',
      workerSystemDiskCategory: 'string',
      workerSystemDiskSize: 'number',
      cloudMonitorFlags: 'boolean',
      cpuPolicy: 'string',
      disableRollback: 'boolean',
      vswitchIds: { 'type': 'array', 'itemType': 'string' },
      workerDataDisks: { 'type': 'array', 'itemType': ScaleClusterShrinkRequestWorkerDataDisks },
      tags: { 'type': 'array', 'itemType': ScaleClusterShrinkRequestTags },
      taintsShrink: 'string',
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
  body: ScaleClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ScaleClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScaleOutClusterRequest extends $tea.Model {
  clusterId?: string;
  count?: number;
  workerInstanceChargeType?: string;
  workerPeriod?: number;
  workerPeriodUnit?: string;
  workerAutoRenew?: boolean;
  workerAutoRenewPeriod?: number;
  workerSystemDiskCategory?: string;
  workerSystemDiskSize?: number;
  workerDataDisk?: boolean;
  keyPair?: string;
  loginPassword?: string;
  cloudMonitorFlags?: boolean;
  cpuPolicy?: string;
  disableRollback?: boolean;
  imageId?: string;
  userData?: string;
  runtime?: ScaleOutClusterRequestRuntime;
  vswitchIds?: string[];
  workerInstanceTypes?: string[];
  rdsInstances?: string[];
  workerDataDisks?: ScaleOutClusterRequestWorkerDataDisks[];
  tags?: ScaleOutClusterRequestTags[];
  taints?: ScaleOutClusterRequestTaints[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      count: 'count',
      workerInstanceChargeType: 'worker_instance_charge_type',
      workerPeriod: 'worker_period',
      workerPeriodUnit: 'worker_period_unit',
      workerAutoRenew: 'worker_auto_renew',
      workerAutoRenewPeriod: 'worker_auto_renew_period',
      workerSystemDiskCategory: 'worker_system_disk_category',
      workerSystemDiskSize: 'worker_system_disk_size',
      workerDataDisk: 'worker_data_disk',
      keyPair: 'key_pair',
      loginPassword: 'login_password',
      cloudMonitorFlags: 'cloud_monitor_flags',
      cpuPolicy: 'cpu_policy',
      disableRollback: 'disable_rollback',
      imageId: 'image_id',
      userData: 'user_data',
      runtime: 'runtime',
      vswitchIds: 'vswitch_ids',
      workerInstanceTypes: 'worker_instance_types',
      rdsInstances: 'rds_instances',
      workerDataDisks: 'worker_data_disks',
      tags: 'tags',
      taints: 'taints',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      count: 'number',
      workerInstanceChargeType: 'string',
      workerPeriod: 'number',
      workerPeriodUnit: 'string',
      workerAutoRenew: 'boolean',
      workerAutoRenewPeriod: 'number',
      workerSystemDiskCategory: 'string',
      workerSystemDiskSize: 'number',
      workerDataDisk: 'boolean',
      keyPair: 'string',
      loginPassword: 'string',
      cloudMonitorFlags: 'boolean',
      cpuPolicy: 'string',
      disableRollback: 'boolean',
      imageId: 'string',
      userData: 'string',
      runtime: ScaleOutClusterRequestRuntime,
      vswitchIds: { 'type': 'array', 'itemType': 'string' },
      workerInstanceTypes: { 'type': 'array', 'itemType': 'string' },
      rdsInstances: { 'type': 'array', 'itemType': 'string' },
      workerDataDisks: { 'type': 'array', 'itemType': ScaleOutClusterRequestWorkerDataDisks },
      tags: { 'type': 'array', 'itemType': ScaleOutClusterRequestTags },
      taints: { 'type': 'array', 'itemType': ScaleOutClusterRequestTaints },
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
  body: ScaleOutClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ScaleOutClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnInstallClusterAddonsRequest extends $tea.Model {
  clusterId?: string;
  addons?: UnInstallClusterAddonsRequestAddons[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      addons: 'addons',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      addons: { 'type': 'array', 'itemType': UnInstallClusterAddonsRequestAddons },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnInstallClusterAddonsResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTemplateRequest extends $tea.Model {
  templateId?: string;
  name?: string;
  template?: string;
  tags?: string;
  description?: string;
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      templateId: 'TemplateId',
      name: 'name',
      template: 'template',
      tags: 'tags',
      description: 'description',
      templateType: 'template_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateId: 'string',
      name: 'string',
      template: 'string',
      tags: 'string',
      description: 'string',
      templateType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeClusterRequest extends $tea.Model {
  clusterId?: string;
  componentName?: string;
  version?: string;
  nextVersion?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      componentName: 'component_name',
      version: 'version',
      nextVersion: 'next_version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      componentName: 'string',
      version: 'string',
      nextVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeClusterResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeClusterAddonsRequest extends $tea.Model {
  clusterId?: string;
  body?: UpgradeClusterAddonsRequestBody[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      body: { 'type': 'array', 'itemType': UpgradeClusterAddonsRequestBody },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeClusterAddonsResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachInstancesRequestRuntime extends $tea.Model {
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

export class AttachInstancesRequestTags extends $tea.Model {
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

export class CreateClusterRequestRuntime extends $tea.Model {
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

export class CreateClusterRequestTags extends $tea.Model {
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

export class CreateClusterRequestWorkerDataDisks extends $tea.Model {
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

export class CreateClusterRequestTaints extends $tea.Model {
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

export class CreateClusterRequestAddons extends $tea.Model {
  config?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'config',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAddonsResponseBodyComponentGroupsItems extends $tea.Model {
  description?: string;
  disabled?: boolean;
  name?: string;
  required?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      disabled: 'disabled',
      name: 'name',
      required: 'required',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      disabled: 'boolean',
      name: 'string',
      required: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAddonsResponseBodyComponentGroups extends $tea.Model {
  default?: string[];
  groupName?: string;
  items?: DescribeAddonsResponseBodyComponentGroupsItems[];
  static names(): { [key: string]: string } {
    return {
      default: 'default',
      groupName: 'group_name',
      items: 'items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      default: { 'type': 'array', 'itemType': 'string' },
      groupName: 'string',
      items: { 'type': 'array', 'itemType': DescribeAddonsResponseBodyComponentGroupsItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAddonsResponseBodyStandardComponents extends $tea.Model {
  componentName?: { [key: string]: {[key: string]: any} };
  static names(): { [key: string]: string } {
    return {
      componentName: 'ComponentName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentName: { 'type': 'map', 'keyType': 'string', 'valueType': '{[key: string]: any}' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterAddonUpgradeStatusResponseBodyAddonInfo extends $tea.Model {
  category?: string;
  componentName?: string;
  message?: string;
  version?: string;
  yaml?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      componentName: 'component_name',
      message: 'message',
      version: 'version',
      yaml: 'yaml',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      componentName: 'string',
      message: 'string',
      version: 'string',
      yaml: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterAttachScriptsRequestOptions extends $tea.Model {
  allowedClusterAddons?: string[];
  enableIptables?: boolean;
  flannelIface?: string;
  gpuVersion?: string;
  manageRuntime?: boolean;
  nodeNameOverride?: string;
  quiet?: string;
  static names(): { [key: string]: string } {
    return {
      allowedClusterAddons: 'allowedClusterAddons',
      enableIptables: 'enableIptables',
      flannelIface: 'flannelIface',
      gpuVersion: 'gpuVersion',
      manageRuntime: 'manageRuntime',
      nodeNameOverride: 'nodeNameOverride',
      quiet: 'quiet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowedClusterAddons: { 'type': 'array', 'itemType': 'string' },
      enableIptables: 'boolean',
      flannelIface: 'string',
      gpuVersion: 'string',
      manageRuntime: 'boolean',
      nodeNameOverride: 'string',
      quiet: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterDetailResponseBodyTags extends $tea.Model {
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
  static names(): { [key: string]: string } {
    return {
      clusterId: 'cluster_id',
      created: 'created',
      instanceId: 'instance_id',
      resourceInfo: 'resource_info',
      resourceType: 'resource_type',
      state: 'state',
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

export class DescribeClustersV1ResponseBodyClustersTags extends $tea.Model {
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

export class DescribeClustersV1ResponseBodyClusters extends $tea.Model {
  clusterHealthy?: string;
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
  nodeStatus?: string;
  privateZone?: boolean;
  profile?: string;
  regionId?: string;
  resourceGroupId?: string;
  securityGroupId?: string;
  size?: number;
  state?: string;
  subnetCidr?: string;
  tags?: DescribeClustersV1ResponseBodyClustersTags[];
  updated?: string;
  vpcId?: string;
  vswitchCidr?: string;
  vswitchId?: string;
  workerRamRoleName?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterHealthy: 'cluster_healthy',
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
      nodeStatus: 'node_status',
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
      clusterHealthy: 'string',
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
      nodeStatus: 'string',
      privateZone: 'boolean',
      profile: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      securityGroupId: 'string',
      size: 'number',
      state: 'string',
      subnetCidr: 'string',
      tags: { 'type': 'array', 'itemType': DescribeClustersV1ResponseBodyClustersTags },
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
      updated: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetKubernetesTriggerResponseBodyTriggers extends $tea.Model {
  action?: string;
  clusterId?: string;
  id?: string;
  projectId?: string;
  token?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'action',
      clusterId: 'cluster_id',
      id: 'id',
      projectId: 'project_id',
      token: 'token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      clusterId: 'string',
      id: 'string',
      projectId: 'string',
      token: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallClusterAddonsRequestBody extends $tea.Model {
  config?: string;
  disabled?: boolean;
  name?: string;
  required?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'config',
      disabled: 'disabled',
      name: 'name',
      required: 'required',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      disabled: 'boolean',
      name: 'string',
      required: 'string',
      version: 'string',
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
  configs?: ModifyClusterConfigurationRequestCustomizeConfigConfigs;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      configs: 'configs',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configs: ModifyClusterConfigurationRequestCustomizeConfigConfigs,
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterTagsRequestBody extends $tea.Model {
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

export class ScaleClusterShrinkRequestWorkerDataDisks extends $tea.Model {
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

export class ScaleClusterShrinkRequestTags extends $tea.Model {
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

export class ScaleOutClusterRequestRuntime extends $tea.Model {
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

export class ScaleOutClusterRequestWorkerDataDisks extends $tea.Model {
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

export class ScaleOutClusterRequestTags extends $tea.Model {
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

export class ScaleOutClusterRequestTaints extends $tea.Model {
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


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "regional";
    this._endpointMap = {
      'ap-northeast-2-pop': "cs.aliyuncs.com",
      'cn-beijing-finance-1': "cs.aliyuncs.com",
      'cn-beijing-finance-pop': "cs.aliyuncs.com",
      'cn-beijing-gov-1': "cs.aliyuncs.com",
      'cn-beijing-nu16-b01': "cs.aliyuncs.com",
      'cn-edge-1': "cs.aliyuncs.com",
      'cn-fujian': "cs.aliyuncs.com",
      'cn-haidian-cm12-c01': "cs.aliyuncs.com",
      'cn-hangzhou-bj-b01': "cs.aliyuncs.com",
      'cn-hangzhou-finance': "cs.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "cs.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "cs.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "cs.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "cs.aliyuncs.com",
      'cn-hangzhou-test-306': "cs.aliyuncs.com",
      'cn-hongkong-finance-pop': "cs.aliyuncs.com",
      'cn-huhehaote-nebula-1': "cs.aliyuncs.com",
      'cn-qingdao-nebula': "cs.aliyuncs.com",
      'cn-shanghai-et15-b01': "cs.aliyuncs.com",
      'cn-shanghai-et2-b01': "cs.aliyuncs.com",
      'cn-shanghai-finance-1': "cs.aliyuncs.com",
      'cn-shanghai-inner': "cs.aliyuncs.com",
      'cn-shanghai-internal-test-1': "cs.aliyuncs.com",
      'cn-shenzhen-finance-1': "cs.aliyuncs.com",
      'cn-shenzhen-inner': "cs.aliyuncs.com",
      'cn-shenzhen-st4-d01': "cs.aliyuncs.com",
      'cn-shenzhen-su18-b01': "cs.aliyuncs.com",
      'cn-wuhan': "cs.aliyuncs.com",
      'cn-wulanchabu': "cs.aliyuncs.com",
      'cn-yushanfang': "cs.aliyuncs.com",
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
    body["instances"] = request.instances;
    body["runtime"] = request.runtime;
    body["image_id"] = request.imageId;
    body["format_disk"] = request.formatDisk;
    body["keep_instance_name"] = request.keepInstanceName;
    body["cpu_policy"] = request.cpuPolicy;
    body["key_pair"] = request.keyPair;
    body["password"] = request.password;
    body["is_edge_worker"] = request.isEdgeWorker;
    body["user_data"] = request.userData;
    body["nodepool_id"] = request.nodepoolId;
    body["rds_instances"] = request.rdsInstances;
    body["tags"] = request.tags;
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: body,
    });
    return $tea.cast<AttachInstancesResponse>(await this.doROARequestWithForm("AttachInstances", "2015-12-15", "HTTPS", "POST", "AK", `/clusters/${ClusterId}/attach`, "json", req, runtime), new AttachInstancesResponse({}));
  }

  async cancelClusterUpgrade(ClusterId: string, request: CancelClusterUpgradeRequest): Promise<CancelClusterUpgradeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cancelClusterUpgradeWithOptions(ClusterId, request, headers, runtime);
  }

  async cancelClusterUpgradeWithOptions(ClusterId: string, request: CancelClusterUpgradeRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CancelClusterUpgradeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<CancelClusterUpgradeResponse>(await this.doROARequest("CancelClusterUpgrade", "2015-12-15", "HTTPS", "POST", "AK", `/api/v2/clusters/${ClusterId}/upgrade/cancel`, "none", req, runtime), new CancelClusterUpgradeResponse({}));
  }

  async cancelComponentUpgrade(clusterid: string, componentid: string, request: CancelComponentUpgradeRequest): Promise<CancelComponentUpgradeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cancelComponentUpgradeWithOptions(clusterid, componentid, request, headers, runtime);
  }

  async cancelComponentUpgradeWithOptions(clusterid: string, componentid: string, request: CancelComponentUpgradeRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CancelComponentUpgradeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<CancelComponentUpgradeResponse>(await this.doROARequest("CancelComponentUpgrade", "2015-12-15", "HTTPS", "POST", "AK", `/clusters/${clusterid}/components/{componentid}/cancel`, "none", req, runtime), new CancelComponentUpgradeResponse({}));
  }

  async createCluster(request: CreateClusterRequest): Promise<CreateClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createClusterWithOptions(request, headers, runtime);
  }

  async createClusterWithOptions(request: CreateClusterRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateClusterResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    body["name"] = request.name;
    body["cluster_type"] = request.clusterType;
    body["region_id"] = request.regionId;
    body["zone_id"] = request.zoneId;
    body["kubernetes_version"] = request.kubernetesVersion;
    body["deletion_protection"] = request.deletionProtection;
    body["runtime"] = request.runtime;
    body["vpcid"] = request.vpcid;
    body["worker_vswitch_ids"] = request.workerVswitchIds;
    body["container_cidr"] = request.containerCidr;
    body["service_cidr"] = request.serviceCidr;
    body["node_cidr_mask"] = request.nodeCidrMask;
    body["snat_entry"] = request.snatEntry;
    body["endpoint_public_access"] = request.endpointPublicAccess;
    body["ssh_flags"] = request.sshFlags;
    body["rds_instances"] = request.rdsInstances;
    body["security_group_id"] = request.securityGroupId;
    body["is_enterprise_security_group"] = request.isEnterpriseSecurityGroup;
    body["proxy_mode"] = request.proxyMode;
    body["tags"] = request.tags;
    body["images_id"] = request.imagesId;
    body["master_instance_charge_type"] = request.masterInstanceChargeType;
    body["master_period"] = request.masterPeriod;
    body["master_period_unit"] = request.masterPeriodUnit;
    body["master_auto_renew"] = request.masterAutoRenew;
    body["master_auto_renew_period"] = request.masterAutoRenewPeriod;
    body["master_count"] = request.masterCount;
    body["master_vswitch_ids"] = request.masterVswitchIds;
    body["master_instance_types"] = request.masterInstanceTypes;
    body["master_system_disk_category"] = request.masterSystemDiskCategory;
    body["master_system_disk_size"] = request.masterSystemDiskSize;
    body["worker_instance_charge_type"] = request.workerInstanceChargeType;
    body["worker_period"] = request.workerPeriod;
    body["worker_period_unit"] = request.workerPeriodUnit;
    body["worker_auto_renew"] = request.workerAutoRenew;
    body["worker_auto_renew_period"] = request.workerAutoRenewPeriod;
    body["num_of_nodes"] = request.numOfNodes;
    body["worker_instance_types"] = request.workerInstanceTypes;
    body["worker_system_disk_category"] = request.workerSystemDiskCategory;
    body["worker_system_disk_size"] = request.workerSystemDiskSize;
    body["worker_data_disks"] = request.workerDataDisks;
    body["os_type"] = request.osType;
    body["key_pair"] = request.keyPair;
    body["login_password"] = request.loginPassword;
    body["user_data"] = request.userData;
    body["node_port_range"] = request.nodePortRange;
    body["cpu_policy"] = request.cpuPolicy;
    body["taints"] = request.taints;
    body["cloud_monitor_flags"] = request.cloudMonitorFlags;
    body["addons"] = request.addons;
    body["platform"] = request.platform;
    body["vswitch_ids"] = request.vswitchIds;
    body["private_zone"] = request.privateZone;
    body["profile"] = request.profile;
    body["pod_vswitch_ids"] = request.podVswitchIds;
    body["disable_rollback"] = request.disableRollback;
    body["timeout_mins"] = request.timeoutMins;
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: body,
    });
    return $tea.cast<CreateClusterResponse>(await this.doROARequestWithForm("CreateCluster", "2015-12-15", "HTTPS", "POST", "AK", `/clusters`, "json", req, runtime), new CreateClusterResponse({}));
  }

  async createKubernetesTrigger(request: CreateKubernetesTriggerRequest): Promise<CreateKubernetesTriggerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createKubernetesTriggerWithOptions(request, headers, runtime);
  }

  async createKubernetesTriggerWithOptions(request: CreateKubernetesTriggerRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateKubernetesTriggerResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    body["RegionId"] = request.regionId;
    body["ClusterId"] = request.clusterId;
    body["ProjectId"] = request.projectId;
    body["Type"] = request.type;
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: body,
    });
    return $tea.cast<CreateKubernetesTriggerResponse>(await this.doROARequestWithForm("CreateKubernetesTrigger", "2015-12-15", "HTTPS", "POST", "AK", `/triggers`, "json", req, runtime), new CreateKubernetesTriggerResponse({}));
  }

  async deleteCluster(ClusterId: string, request: DeleteClusterRequest): Promise<DeleteClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteClusterWithOptions(ClusterId, request, headers, runtime);
  }

  async deleteClusterWithOptions(ClusterId: string, request: DeleteClusterRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteClusterResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    query["retain_resources"] = request.retainResources;
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DeleteClusterResponse>(await this.doROARequest("DeleteCluster", "2015-12-15", "HTTPS", "DELETE", "AK", `/clusters/${ClusterId}`, "none", req, runtime), new DeleteClusterResponse({}));
  }

  async deleteKubernetesTrigger(Id: string, request: DeleteKubernetesTriggerRequest): Promise<DeleteKubernetesTriggerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteKubernetesTriggerWithOptions(Id, request, headers, runtime);
  }

  async deleteKubernetesTriggerWithOptions(Id: string, request: DeleteKubernetesTriggerRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteKubernetesTriggerResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<DeleteKubernetesTriggerResponse>(await this.doROARequest("DeleteKubernetesTrigger", "2015-12-15", "HTTPS", "DELETE", "AK", `/triggers/revoke/${Id}`, "none", req, runtime), new DeleteKubernetesTriggerResponse({}));
  }

  async describeAddons(request: DescribeAddonsRequest): Promise<DescribeAddonsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeAddonsWithOptions(request, headers, runtime);
  }

  async describeAddonsWithOptions(request: DescribeAddonsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeAddonsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    query["region"] = request.region;
    query["cluster_type"] = request.clusterType;
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DescribeAddonsResponse>(await this.doROARequest("DescribeAddons", "2015-12-15", "HTTPS", "GET", "AK", `/clusters/components/metadata`, "json", req, runtime), new DescribeAddonsResponse({}));
  }

  async describeClusterAddonUpgradeStatus(ClusterId: string, ComponentId: string, request: DescribeClusterAddonUpgradeStatusRequest): Promise<DescribeClusterAddonUpgradeStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeClusterAddonUpgradeStatusWithOptions(ClusterId, ComponentId, request, headers, runtime);
  }

  async describeClusterAddonUpgradeStatusWithOptions(ClusterId: string, ComponentId: string, request: DescribeClusterAddonUpgradeStatusRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeClusterAddonUpgradeStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<DescribeClusterAddonUpgradeStatusResponse>(await this.doROARequest("DescribeClusterAddonUpgradeStatus", "2015-12-15", "HTTPS", "GET", "AK", `/clusters/${ClusterId}/components/{ComponentId}/upgradestatus`, "json", req, runtime), new DescribeClusterAddonUpgradeStatusResponse({}));
  }

  /**
   * 批量查询集群Addon升级状态
  
   */
  async describeClusterAddonsUpgradeStatus(ClusterId: string, request: DescribeClusterAddonsUpgradeStatusRequest): Promise<DescribeClusterAddonsUpgradeStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeClusterAddonsUpgradeStatusWithOptions(ClusterId, request, headers, runtime);
  }

  async describeClusterAddonsUpgradeStatusWithOptions(ClusterId: string, request: DescribeClusterAddonsUpgradeStatusRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeClusterAddonsUpgradeStatusResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    query["componentIds"] = request.componentIds;
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DescribeClusterAddonsUpgradeStatusResponse>(await this.doROARequest("DescribeClusterAddonsUpgradeStatus", "2015-12-15", "HTTPS", "GET", "AK", `/clusters/[ClusterId]/components/upgradestatus`, "none", req, runtime), new DescribeClusterAddonsUpgradeStatusResponse({}));
  }

  async describeClusterAddonsVersion(ClusterId: string, request: DescribeClusterAddonsVersionRequest): Promise<DescribeClusterAddonsVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeClusterAddonsVersionWithOptions(ClusterId, request, headers, runtime);
  }

  async describeClusterAddonsVersionWithOptions(ClusterId: string, request: DescribeClusterAddonsVersionRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeClusterAddonsVersionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<DescribeClusterAddonsVersionResponse>(await this.doROARequest("DescribeClusterAddonsVersion", "2015-12-15", "HTTPS", "GET", "AK", `/clusters/${ClusterId}/components/version`, "json", req, runtime), new DescribeClusterAddonsVersionResponse({}));
  }

  async describeClusterAttachScripts(ClusterId: string, request: DescribeClusterAttachScriptsRequest): Promise<DescribeClusterAttachScriptsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeClusterAttachScriptsWithOptions(ClusterId, request, headers, runtime);
  }

  async describeClusterAttachScriptsWithOptions(ClusterId: string, request: DescribeClusterAttachScriptsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeClusterAttachScriptsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    body["arch"] = request.arch;
    body["options"] = request.options;
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: body,
    });
    return $tea.cast<DescribeClusterAttachScriptsResponse>(await this.doROARequestWithForm("DescribeClusterAttachScripts", "2015-12-15", "HTTPS", "POST", "AK", `/clusters/${ClusterId}/attachscript`, "string", req, runtime), new DescribeClusterAttachScriptsResponse({}));
  }

  async describeClusterDetail(ClusterId: string, request: DescribeClusterDetailRequest): Promise<DescribeClusterDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeClusterDetailWithOptions(ClusterId, request, headers, runtime);
  }

  async describeClusterDetailWithOptions(ClusterId: string, request: DescribeClusterDetailRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeClusterDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<DescribeClusterDetailResponse>(await this.doROARequest("DescribeClusterDetail", "2015-12-15", "HTTPS", "GET", "AK", `/clusters/${ClusterId}`, "json", req, runtime), new DescribeClusterDetailResponse({}));
  }

  async describeClusterLogs(ClusterId: string, request: DescribeClusterLogsRequest): Promise<DescribeClusterLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeClusterLogsWithOptions(ClusterId, request, headers, runtime);
  }

  async describeClusterLogsWithOptions(ClusterId: string, request: DescribeClusterLogsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeClusterLogsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<DescribeClusterLogsResponse>(await this.doROARequest("DescribeClusterLogs", "2015-12-15", "HTTPS", "GET", "AK", `/clusters/${ClusterId}/logs`, "json", req, runtime), new DescribeClusterLogsResponse({}));
  }

  async describeClusterNodes(ClusterId: string, request: DescribeClusterNodesRequest): Promise<DescribeClusterNodesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeClusterNodesWithOptions(ClusterId, request, headers, runtime);
  }

  async describeClusterNodesWithOptions(ClusterId: string, request: DescribeClusterNodesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeClusterNodesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    query["pageSize"] = request.pageSize;
    query["pageNumber"] = request.pageNumber;
    query["nodepool_id"] = request.nodepoolId;
    query["state"] = request.state;
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DescribeClusterNodesResponse>(await this.doROARequest("DescribeClusterNodes", "2015-12-15", "HTTPS", "GET", "AK", `/clusters/${ClusterId}/nodes`, "json", req, runtime), new DescribeClusterNodesResponse({}));
  }

  async describeClusterResources(ClusterId: string, request: DescribeClusterResourcesRequest): Promise<DescribeClusterResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeClusterResourcesWithOptions(ClusterId, request, headers, runtime);
  }

  async describeClusterResourcesWithOptions(ClusterId: string, request: DescribeClusterResourcesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeClusterResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<DescribeClusterResourcesResponse>(await this.doROARequest("DescribeClusterResources", "2015-12-15", "HTTPS", "GET", "AK", `/clusters/${ClusterId}/resources`, "array", req, runtime), new DescribeClusterResourcesResponse({}));
  }

  async describeClusterUserKubeconfig(ClusterId: string, request: DescribeClusterUserKubeconfigRequest): Promise<DescribeClusterUserKubeconfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeClusterUserKubeconfigWithOptions(ClusterId, request, headers, runtime);
  }

  async describeClusterUserKubeconfigWithOptions(ClusterId: string, request: DescribeClusterUserKubeconfigRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeClusterUserKubeconfigResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    query["PrivateIpAddress"] = request.privateIpAddress;
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DescribeClusterUserKubeconfigResponse>(await this.doROARequest("DescribeClusterUserKubeconfig", "2015-12-15", "HTTPS", "GET", "AK", `/k8s/${ClusterId}/user_config`, "json", req, runtime), new DescribeClusterUserKubeconfigResponse({}));
  }

  async describeClusterV2UserKubeconfig(ClusterId: string, request: DescribeClusterV2UserKubeconfigRequest): Promise<DescribeClusterV2UserKubeconfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeClusterV2UserKubeconfigWithOptions(ClusterId, request, headers, runtime);
  }

  async describeClusterV2UserKubeconfigWithOptions(ClusterId: string, request: DescribeClusterV2UserKubeconfigRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeClusterV2UserKubeconfigResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    query["PrivateIpAddress"] = request.privateIpAddress;
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DescribeClusterV2UserKubeconfigResponse>(await this.doROARequest("DescribeClusterV2UserKubeconfig", "2015-12-15", "HTTPS", "GET", "AK", `/api/v2/k8s/${ClusterId}/user_config`, "json", req, runtime), new DescribeClusterV2UserKubeconfigResponse({}));
  }

  async describeClusters(request: DescribeClustersRequest): Promise<DescribeClustersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeClustersWithOptions(request, headers, runtime);
  }

  async describeClustersWithOptions(request: DescribeClustersRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeClustersResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    query["name"] = request.name;
    query["clusterType"] = request.clusterType;
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DescribeClustersResponse>(await this.doROARequest("DescribeClusters", "2015-12-15", "HTTPS", "GET", "AK", `/clusters`, "array", req, runtime), new DescribeClustersResponse({}));
  }

  async describeClustersV1(request: DescribeClustersV1Request): Promise<DescribeClustersV1Response> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeClustersV1WithOptions(request, headers, runtime);
  }

  async describeClustersV1WithOptions(request: DescribeClustersV1Request, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeClustersV1Response> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    query["Name"] = request.name;
    query["ClusterType"] = request.clusterType;
    query["page_size"] = request.pageSize;
    query["page_number"] = request.pageNumber;
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DescribeClustersV1Response>(await this.doROARequest("DescribeClustersV1", "2015-12-15", "HTTPS", "GET", "AK", `/api/v1/clusters`, "json", req, runtime), new DescribeClustersV1Response({}));
  }

  async describeExternalAgent(ClusterId: string, request: DescribeExternalAgentRequest): Promise<DescribeExternalAgentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeExternalAgentWithOptions(ClusterId, request, headers, runtime);
  }

  async describeExternalAgentWithOptions(ClusterId: string, request: DescribeExternalAgentRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeExternalAgentResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<DescribeExternalAgentResponse>(await this.doROARequest("DescribeExternalAgent", "2015-12-15", "HTTPS", "GET", "AK", `/k8s/${ClusterId}/external/agent/deployment`, "json", req, runtime), new DescribeExternalAgentResponse({}));
  }

  async describeTemplates(request: DescribeTemplatesRequest): Promise<DescribeTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeTemplatesWithOptions(request, headers, runtime);
  }

  async describeTemplatesWithOptions(request: DescribeTemplatesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeTemplatesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    query["template_type"] = request.templateType;
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DescribeTemplatesResponse>(await this.doROARequest("DescribeTemplates", "2015-12-15", "HTTPS", "GET", "AK", `/templates`, "json", req, runtime), new DescribeTemplatesResponse({}));
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
    return $tea.cast<DescribeUserQuotaResponse>(await this.doROARequest("DescribeUserQuota", "2015-12-15", "HTTPS", "GET", "AK", `/quota`, "json", req, runtime), new DescribeUserQuotaResponse({}));
  }

  async getKubernetesTrigger(ClusterId: string, request: GetKubernetesTriggerRequest): Promise<GetKubernetesTriggerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getKubernetesTriggerWithOptions(ClusterId, request, headers, runtime);
  }

  async getKubernetesTriggerWithOptions(ClusterId: string, request: GetKubernetesTriggerRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetKubernetesTriggerResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    query["Namespace"] = request.namespace;
    query["Type"] = request.type;
    query["Name"] = request.name;
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<GetKubernetesTriggerResponse>(await this.doROARequest("GetKubernetesTrigger", "2015-12-15", "HTTPS", "GET", "AK", `/triggers/${ClusterId}`, "json", req, runtime), new GetKubernetesTriggerResponse({}));
  }

  async getUpgradeStatus(ClusterId: string, request: GetUpgradeStatusRequest): Promise<GetUpgradeStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getUpgradeStatusWithOptions(ClusterId, request, headers, runtime);
  }

  async getUpgradeStatusWithOptions(ClusterId: string, request: GetUpgradeStatusRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetUpgradeStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<GetUpgradeStatusResponse>(await this.doROARequest("GetUpgradeStatus", "2015-12-15", "HTTPS", "GET", "AK", `/api/v2/clusters/${ClusterId}/upgrade/status`, "json", req, runtime), new GetUpgradeStatusResponse({}));
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
    return $tea.cast<InstallClusterAddonsResponse>(await this.doROARequest("InstallClusterAddons", "2015-12-15", "HTTPS", "POST", "AK", `/clusters/${ClusterId}/components/install`, "none", req, runtime), new InstallClusterAddonsResponse({}));
  }

  async modifyCluster(ClusterId: string, request: ModifyClusterRequest): Promise<ModifyClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyClusterWithOptions(ClusterId, request, headers, runtime);
  }

  async modifyClusterWithOptions(ClusterId: string, request: ModifyClusterRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ModifyClusterResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    body["deletion_protection"] = request.deletionProtection;
    body["ingress_loadbalancer_id"] = request.ingressLoadbalancerId;
    body["api_server_eip"] = request.apiServerEip;
    body["api_server_eip_id"] = request.apiServerEipId;
    body["resource_group_id"] = request.resourceGroupId;
    body["ingress_domain_rebinding"] = request.ingressDomainRebinding;
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: body,
    });
    return $tea.cast<ModifyClusterResponse>(await this.doROARequestWithForm("ModifyCluster", "2015-12-15", "HTTPS", "PUT", "AK", `/api/v2/clusters/${ClusterId}`, "json", req, runtime), new ModifyClusterResponse({}));
  }

  async modifyClusterConfiguration(ClusterId: string, request: ModifyClusterConfigurationRequest): Promise<ModifyClusterConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyClusterConfigurationWithOptions(ClusterId, request, headers, runtime);
  }

  async modifyClusterConfigurationWithOptions(ClusterId: string, request: ModifyClusterConfigurationRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ModifyClusterConfigurationResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    body["customize_config"] = request.customizeConfig;
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: body,
    });
    return $tea.cast<ModifyClusterConfigurationResponse>(await this.doROARequestWithForm("ModifyClusterConfiguration", "2015-12-15", "HTTPS", "PUT", "AK", `/clusters/${ClusterId}/configuration`, "none", req, runtime), new ModifyClusterConfigurationResponse({}));
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
    return $tea.cast<ModifyClusterTagsResponse>(await this.doROARequest("ModifyClusterTags", "2015-12-15", "HTTPS", "POST", "AK", `/clusters/${ClusterId}/tags`, "none", req, runtime), new ModifyClusterTagsResponse({}));
  }

  async pauseComponentUpgrade(clusterid: string, componentid: string, request: PauseComponentUpgradeRequest): Promise<PauseComponentUpgradeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.pauseComponentUpgradeWithOptions(clusterid, componentid, request, headers, runtime);
  }

  async pauseComponentUpgradeWithOptions(clusterid: string, componentid: string, request: PauseComponentUpgradeRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<PauseComponentUpgradeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<PauseComponentUpgradeResponse>(await this.doROARequest("PauseComponentUpgrade", "2015-12-15", "HTTPS", "POST", "AK", `/clusters/${clusterid}/components/{componentid}/pause`, "none", req, runtime), new PauseComponentUpgradeResponse({}));
  }

  async removeClusterNodes(ClusterId: string, request: RemoveClusterNodesRequest): Promise<RemoveClusterNodesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.removeClusterNodesWithOptions(ClusterId, request, headers, runtime);
  }

  async removeClusterNodesWithOptions(ClusterId: string, request: RemoveClusterNodesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RemoveClusterNodesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    body["release_node"] = request.releaseNode;
    body["drain_node"] = request.drainNode;
    body["nodes"] = request.nodes;
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: body,
    });
    return $tea.cast<RemoveClusterNodesResponse>(await this.doROARequestWithForm("RemoveClusterNodes", "2015-12-15", "HTTPS", "POST", "AK", `/api/v2/clusters/${ClusterId}/nodes/remove`, "none", req, runtime), new RemoveClusterNodesResponse({}));
  }

  async resumeComponentUpgrade(clusterid: string, componentid: string, request: ResumeComponentUpgradeRequest): Promise<ResumeComponentUpgradeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.resumeComponentUpgradeWithOptions(clusterid, componentid, request, headers, runtime);
  }

  async resumeComponentUpgradeWithOptions(clusterid: string, componentid: string, request: ResumeComponentUpgradeRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ResumeComponentUpgradeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<ResumeComponentUpgradeResponse>(await this.doROARequest("ResumeComponentUpgrade", "2015-12-15", "HTTPS", "POST", "AK", `/clusters/${clusterid}/components/{componentid}/resume`, "none", req, runtime), new ResumeComponentUpgradeResponse({}));
  }

  async scaleCluster(ClusterId: string, request: ScaleClusterRequest): Promise<ScaleClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.scaleClusterWithOptions(ClusterId, request, headers, runtime);
  }

  async scaleClusterWithOptions(ClusterId: string, tmpReq: ScaleClusterRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ScaleClusterResponse> {
    Util.validateModel(tmpReq);
    let request = new ScaleClusterShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.taints)) {
      request.taintsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.taints, "taints", "json");
    }

    let body : {[key: string ]: any} = { };
    body["count"] = request.count;
    body["key_pair"] = request.keyPair;
    body["login_password"] = request.loginPassword;
    body["worker_data_disk"] = request.workerDataDisk;
    body["worker_instance_types"] = request.workerInstanceTypes;
    body["worker_instance_charge_type"] = request.workerInstanceChargeType;
    body["worker_period"] = request.workerPeriod;
    body["worker_period_unit"] = request.workerPeriodUnit;
    body["worker_auto_renew"] = request.workerAutoRenew;
    body["worker_auto_renew_period"] = request.workerAutoRenewPeriod;
    body["worker_system_disk_category"] = request.workerSystemDiskCategory;
    body["worker_system_disk_size"] = request.workerSystemDiskSize;
    body["cloud_monitor_flags"] = request.cloudMonitorFlags;
    body["cpu_policy"] = request.cpuPolicy;
    body["disable_rollback"] = request.disableRollback;
    body["vswitch_ids"] = request.vswitchIds;
    body["worker_data_disks"] = request.workerDataDisks;
    body["tags"] = request.tags;
    body["taints"] = request.taintsShrink;
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: body,
    });
    return $tea.cast<ScaleClusterResponse>(await this.doROARequestWithForm("ScaleCluster", "2015-12-15", "HTTPS", "PUT", "AK", `/clusters/${ClusterId}`, "json", req, runtime), new ScaleClusterResponse({}));
  }

  async scaleOutCluster(ClusterId: string, request: ScaleOutClusterRequest): Promise<ScaleOutClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.scaleOutClusterWithOptions(ClusterId, request, headers, runtime);
  }

  async scaleOutClusterWithOptions(ClusterId: string, request: ScaleOutClusterRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ScaleOutClusterResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    body["count"] = request.count;
    body["worker_instance_charge_type"] = request.workerInstanceChargeType;
    body["worker_period"] = request.workerPeriod;
    body["worker_period_unit"] = request.workerPeriodUnit;
    body["worker_auto_renew"] = request.workerAutoRenew;
    body["worker_auto_renew_period"] = request.workerAutoRenewPeriod;
    body["worker_system_disk_category"] = request.workerSystemDiskCategory;
    body["worker_system_disk_size"] = request.workerSystemDiskSize;
    body["worker_data_disk"] = request.workerDataDisk;
    body["key_pair"] = request.keyPair;
    body["login_password"] = request.loginPassword;
    body["cloud_monitor_flags"] = request.cloudMonitorFlags;
    body["cpu_policy"] = request.cpuPolicy;
    body["disable_rollback"] = request.disableRollback;
    body["image_id"] = request.imageId;
    body["user_data"] = request.userData;
    body["runtime"] = request.runtime;
    body["vswitch_ids"] = request.vswitchIds;
    body["worker_instance_types"] = request.workerInstanceTypes;
    body["rds_instances"] = request.rdsInstances;
    body["worker_data_disks"] = request.workerDataDisks;
    body["tags"] = request.tags;
    body["taints"] = request.taints;
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: body,
    });
    return $tea.cast<ScaleOutClusterResponse>(await this.doROARequestWithForm("ScaleOutCluster", "2015-12-15", "HTTPS", "POST", "AK", `/api/v2/clusters/${ClusterId}`, "json", req, runtime), new ScaleOutClusterResponse({}));
  }

  async unInstallClusterAddons(ClusterId: string, request: UnInstallClusterAddonsRequest): Promise<UnInstallClusterAddonsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.unInstallClusterAddonsWithOptions(ClusterId, request, headers, runtime);
  }

  async unInstallClusterAddonsWithOptions(ClusterId: string, request: UnInstallClusterAddonsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UnInstallClusterAddonsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    body["addons"] = request.addons;
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: body,
    });
    return $tea.cast<UnInstallClusterAddonsResponse>(await this.doROARequestWithForm("UnInstallClusterAddons", "2015-12-15", "HTTPS", "POST", "AK", `/clusters/${ClusterId}/components/uninstall`, "none", req, runtime), new UnInstallClusterAddonsResponse({}));
  }

  async updateTemplate(TemplateId: string, request: UpdateTemplateRequest): Promise<UpdateTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateTemplateWithOptions(TemplateId, request, headers, runtime);
  }

  async updateTemplateWithOptions(TemplateId: string, request: UpdateTemplateRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateTemplateResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    body["name"] = request.name;
    body["template"] = request.template;
    body["tags"] = request.tags;
    body["description"] = request.description;
    body["template_type"] = request.templateType;
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: body,
    });
    return $tea.cast<UpdateTemplateResponse>(await this.doROARequestWithForm("UpdateTemplate", "2015-12-15", "HTTPS", "PUT", "AK", `/templates/${TemplateId}`, "none", req, runtime), new UpdateTemplateResponse({}));
  }

  async upgradeCluster(ClusterId: string, request: UpgradeClusterRequest): Promise<UpgradeClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.upgradeClusterWithOptions(ClusterId, request, headers, runtime);
  }

  async upgradeClusterWithOptions(ClusterId: string, request: UpgradeClusterRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpgradeClusterResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    body["component_name"] = request.componentName;
    body["version"] = request.version;
    body["next_version"] = request.nextVersion;
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: body,
    });
    return $tea.cast<UpgradeClusterResponse>(await this.doROARequestWithForm("UpgradeCluster", "2015-12-15", "HTTPS", "POST", "AK", `/api/v2/clusters/${ClusterId}/upgrade`, "none", req, runtime), new UpgradeClusterResponse({}));
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
    return $tea.cast<UpgradeClusterAddonsResponse>(await this.doROARequest("UpgradeClusterAddons", "2015-12-15", "HTTPS", "POST", "AK", `/clusters/${ClusterId}/components/upgrade`, "none", req, runtime), new UpgradeClusterAddonsResponse({}));
  }

}
