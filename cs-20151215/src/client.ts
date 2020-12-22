// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

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

export class Taint extends $tea.Model {
  key?: string;
  value?: string;
  effect?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
      effect: 'effect',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
      effect: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataDisk extends $tea.Model {
  category?: string;
  size?: number;
  encrypted?: string;
  autoSnapshotPolicyId?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      size: 'size',
      encrypted: 'encrypted',
      autoSnapshotPolicyId: 'auto_snapshot_policy_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      size: 'number',
      encrypted: 'string',
      autoSnapshotPolicyId: 'string',
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

export class Addon extends $tea.Model {
  name?: string;
  config?: string;
  disabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      config: 'config',
      disabled: 'disabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      config: 'string',
      disabled: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MaintenanceWindow extends $tea.Model {
  enable?: boolean;
  maintenanceTime?: string;
  duration?: string;
  weeklyPeriod?: string;
  static names(): { [key: string]: string } {
    return {
      enable: 'enable',
      maintenanceTime: 'maintenance_time',
      duration: 'duration',
      weeklyPeriod: 'weekly_period',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      maintenanceTime: 'string',
      duration: 'string',
      weeklyPeriod: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequest extends $tea.Model {
  resourceIds?: string[];
  tags?: Tag[];
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      resourceIds: 'resource_ids',
      tags: 'tags',
      nextToken: 'next_token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceIds: { 'type': 'array', 'itemType': 'string' },
      tags: { 'type': 'array', 'itemType': Tag },
      nextToken: 'string',
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
  body: ListTagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListTagResourcesResponseBody,
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
  instanceDeletionProtection?: boolean;
  ingressDomainRebinding?: string;
  ingressLoadbalancerId?: string;
  resourceGroupId?: string;
  maintenanceWindow?: MaintenanceWindow;
  static names(): { [key: string]: string } {
    return {
      apiServerEip: 'api_server_eip',
      apiServerEipId: 'api_server_eip_id',
      deletionProtection: 'deletion_protection',
      instanceDeletionProtection: 'instance_deletion_protection',
      ingressDomainRebinding: 'ingress_domain_rebinding',
      ingressLoadbalancerId: 'ingress_loadbalancer_id',
      resourceGroupId: 'resource_group_id',
      maintenanceWindow: 'maintenance_window',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiServerEip: 'boolean',
      apiServerEipId: 'string',
      deletionProtection: 'boolean',
      instanceDeletionProtection: 'boolean',
      ingressDomainRebinding: 'string',
      ingressLoadbalancerId: 'string',
      resourceGroupId: 'string',
      maintenanceWindow: MaintenanceWindow,
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

export class DescribeClusterAttachScriptsRequest extends $tea.Model {
  nodepoolId?: string;
  formatDisk?: boolean;
  keepInstanceName?: boolean;
  rdsInstances?: string[];
  arch?: string;
  options?: string;
  static names(): { [key: string]: string } {
    return {
      nodepoolId: 'nodepool_id',
      formatDisk: 'format_disk',
      keepInstanceName: 'keep_instance_name',
      rdsInstances: 'rds_instances',
      arch: 'arch',
      options: 'options',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodepoolId: 'string',
      formatDisk: 'boolean',
      keepInstanceName: 'boolean',
      rdsInstances: { 'type': 'array', 'itemType': 'string' },
      arch: 'string',
      options: 'string',
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

export class DescribeKubernetesVersionMetadataRequest extends $tea.Model {
  region?: string;
  clusterType?: string;
  multiAZ?: boolean;
  kubernetesVersion?: string;
  profile?: string;
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
      clusterType: 'ClusterType',
      multiAZ: 'MultiAZ',
      kubernetesVersion: 'KubernetesVersion',
      profile: 'Profile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: 'string',
      clusterType: 'string',
      multiAZ: 'boolean',
      kubernetesVersion: 'string',
      profile: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeKubernetesVersionMetadataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeKubernetesVersionMetadataResponseBody[];
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: { 'type': 'array', 'itemType': DescribeKubernetesVersionMetadataResponseBody },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterLogsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeClusterLogsResponseBody[];
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: { 'type': 'array', 'itemType': DescribeClusterLogsResponseBody },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateKubernetesTriggerRequest extends $tea.Model {
  clusterId?: string;
  projectId?: string;
  action?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'cluster_id',
      projectId: 'project_id',
      action: 'action',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      projectId: 'string',
      action: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateKubernetesTriggerResponseBody extends $tea.Model {
  id?: string;
  clusterId?: string;
  projectId?: string;
  type?: string;
  action?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      clusterId: 'cluster_id',
      projectId: 'project_id',
      type: 'type',
      action: 'action',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      clusterId: 'string',
      projectId: 'string',
      type: 'string',
      action: 'string',
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

export class DescribeClusterDetailResponseBody extends $tea.Model {
  clusterId?: string;
  clusterType?: string;
  created?: string;
  initVersion?: string;
  currentVersion?: string;
  nextVersion?: string;
  deletionProtection?: boolean;
  dockerVersion?: string;
  externalLoadbalancerId?: string;
  metaData?: string;
  name?: string;
  networkMode?: string;
  regionId?: string;
  resourceGroupId?: string;
  securityGroupId?: string;
  size?: number;
  state?: string;
  tags?: Tag[];
  updated?: string;
  vpcId?: string;
  vswitchId?: string;
  subnetCidr?: string;
  zoneId?: string;
  masterUrl?: string;
  privateZone?: boolean;
  profile?: string;
  clusterSpec?: string;
  workerRamRoleName?: string;
  maintenanceWindow?: MaintenanceWindow;
  parameters?: { [key: string]: any };
  outputs?: DescribeClusterDetailResponseBodyOutputs[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'cluster_id',
      clusterType: 'cluster_type',
      created: 'created',
      initVersion: 'init_version',
      currentVersion: 'current_version',
      nextVersion: 'next_version',
      deletionProtection: 'deletion_protection',
      dockerVersion: 'docker_version',
      externalLoadbalancerId: 'external_loadbalancer_id',
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
      vswitchId: 'vswitch_id',
      subnetCidr: 'subnet_cidr',
      zoneId: 'zone_id',
      masterUrl: 'master_url',
      privateZone: 'private_zone',
      profile: 'profile',
      clusterSpec: 'cluster_spec',
      workerRamRoleName: 'worker_ram_role_name',
      maintenanceWindow: 'maintenance_window',
      parameters: 'parameters',
      outputs: 'outputs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterType: 'string',
      created: 'string',
      initVersion: 'string',
      currentVersion: 'string',
      nextVersion: 'string',
      deletionProtection: 'boolean',
      dockerVersion: 'string',
      externalLoadbalancerId: 'string',
      metaData: 'string',
      name: 'string',
      networkMode: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      securityGroupId: 'string',
      size: 'number',
      state: 'string',
      tags: { 'type': 'array', 'itemType': Tag },
      updated: 'string',
      vpcId: 'string',
      vswitchId: 'string',
      subnetCidr: 'string',
      zoneId: 'string',
      masterUrl: 'string',
      privateZone: 'boolean',
      profile: 'string',
      clusterSpec: 'string',
      workerRamRoleName: 'string',
      maintenanceWindow: MaintenanceWindow,
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      outputs: { 'type': 'array', 'itemType': DescribeClusterDetailResponseBodyOutputs },
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

export class ModifyClusterNodePoolRequest extends $tea.Model {
  autoScaling?: ModifyClusterNodePoolRequestAutoScaling;
  kubernetesConfig?: ModifyClusterNodePoolRequestKubernetesConfig;
  nodepoolInfo?: ModifyClusterNodePoolRequestNodepoolInfo;
  scalingGroup?: ModifyClusterNodePoolRequestScalingGroup;
  teeConfig?: ModifyClusterNodePoolRequestTeeConfig;
  management?: ModifyClusterNodePoolRequestManagement;
  updateNodes?: boolean;
  static names(): { [key: string]: string } {
    return {
      autoScaling: 'auto_scaling',
      kubernetesConfig: 'kubernetes_config',
      nodepoolInfo: 'nodepool_info',
      scalingGroup: 'scaling_group',
      teeConfig: 'tee_config',
      management: 'management',
      updateNodes: 'update_nodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoScaling: ModifyClusterNodePoolRequestAutoScaling,
      kubernetesConfig: ModifyClusterNodePoolRequestKubernetesConfig,
      nodepoolInfo: ModifyClusterNodePoolRequestNodepoolInfo,
      scalingGroup: ModifyClusterNodePoolRequestScalingGroup,
      teeConfig: ModifyClusterNodePoolRequestTeeConfig,
      management: ModifyClusterNodePoolRequestManagement,
      updateNodes: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterNodePoolResponseBody extends $tea.Model {
  taskId?: string;
  nodepoolId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'task_id',
      nodepoolId: 'nodepool_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      nodepoolId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterNodePoolResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyClusterNodePoolResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyClusterNodePoolResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumeUpgradeClusterResponse extends $tea.Model {
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
  body: ScaleClusterNodePoolResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ScaleClusterNodePoolResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterNodePoolDetailResponseBody extends $tea.Model {
  autoScaling?: DescribeClusterNodePoolDetailResponseBodyAutoScaling;
  kubernetesConfig?: DescribeClusterNodePoolDetailResponseBodyKubernetesConfig;
  nodepoolInfo?: DescribeClusterNodePoolDetailResponseBodyNodepoolInfo;
  scalingGroup?: DescribeClusterNodePoolDetailResponseBodyScalingGroup;
  status?: DescribeClusterNodePoolDetailResponseBodyStatus;
  teeConfig?: DescribeClusterNodePoolDetailResponseBodyTeeConfig;
  management?: DescribeClusterNodePoolDetailResponseBodyManagement;
  static names(): { [key: string]: string } {
    return {
      autoScaling: 'auto_scaling',
      kubernetesConfig: 'kubernetes_config',
      nodepoolInfo: 'nodepool_info',
      scalingGroup: 'scaling_group',
      status: 'status',
      teeConfig: 'tee_config',
      management: 'management',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoScaling: DescribeClusterNodePoolDetailResponseBodyAutoScaling,
      kubernetesConfig: DescribeClusterNodePoolDetailResponseBodyKubernetesConfig,
      nodepoolInfo: DescribeClusterNodePoolDetailResponseBodyNodepoolInfo,
      scalingGroup: DescribeClusterNodePoolDetailResponseBodyScalingGroup,
      status: DescribeClusterNodePoolDetailResponseBodyStatus,
      teeConfig: DescribeClusterNodePoolDetailResponseBodyTeeConfig,
      management: DescribeClusterNodePoolDetailResponseBodyManagement,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterNodePoolDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeClusterNodePoolDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeClusterNodePoolDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterNodePoolRequest extends $tea.Model {
  autoScaling?: CreateClusterNodePoolRequestAutoScaling;
  kubernetesConfig?: CreateClusterNodePoolRequestKubernetesConfig;
  nodepoolInfo?: CreateClusterNodePoolRequestNodepoolInfo;
  scalingGroup?: CreateClusterNodePoolRequestScalingGroup;
  teeConfig?: CreateClusterNodePoolRequestTeeConfig;
  management?: CreateClusterNodePoolRequestManagement;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      autoScaling: 'auto_scaling',
      kubernetesConfig: 'kubernetes_config',
      nodepoolInfo: 'nodepool_info',
      scalingGroup: 'scaling_group',
      teeConfig: 'tee_config',
      management: 'management',
      count: 'count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoScaling: CreateClusterNodePoolRequestAutoScaling,
      kubernetesConfig: CreateClusterNodePoolRequestKubernetesConfig,
      nodepoolInfo: CreateClusterNodePoolRequestNodepoolInfo,
      scalingGroup: CreateClusterNodePoolRequestScalingGroup,
      teeConfig: CreateClusterNodePoolRequestTeeConfig,
      management: CreateClusterNodePoolRequestManagement,
      count: 'number',
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
  body: CreateClusterNodePoolResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateClusterNodePoolResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterUserKubeconfigRequest extends $tea.Model {
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

export class DescribeClusterAddonUpgradeStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: {[key: string]: any};
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
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

export class CreateClusterRequest extends $tea.Model {
  name?: string;
  regionId?: string;
  clusterType?: string;
  clusterSpec?: string;
  kubernetesVersion?: string;
  runtime?: Runtime;
  vpcid?: string;
  podVswitchIds?: string[];
  containerCidr?: string;
  serviceCidr?: string;
  securityGroupId?: string;
  isEnterpriseSecurityGroup?: boolean;
  snatEntry?: boolean;
  endpointPublicAccess?: boolean;
  sshFlags?: boolean;
  timezone?: string;
  nodeCidrMask?: string;
  userCa?: string;
  userData?: string;
  clusterDomain?: string;
  nodeNameMode?: string;
  customSan?: string;
  encryptionProviderKey?: string;
  serviceAccountIssuer?: string;
  apiAudiences?: string;
  imageId?: string;
  rdsInstances?: string[];
  tags?: Tag[];
  addons?: Addon[];
  taints?: Taint[];
  cloudMonitorFlags?: boolean;
  platform?: string;
  osType?: string;
  cpuPolicy?: string;
  proxyMode?: string;
  nodePortRange?: string;
  keyPair?: string;
  loginPassword?: string;
  masterCount?: number;
  masterVswitchIds?: string[];
  masterInstanceTypes?: string[];
  masterSystemDiskCategory?: string;
  masterSystemDiskSize?: number;
  masterSystemDiskSnapshotPolicyId?: string;
  masterInstanceChargeType?: string;
  masterPeriodUnit?: string;
  masterPeriod?: number;
  masterAutoRenew?: boolean;
  masterAutoRenewPeriod?: number;
  numOfNodes?: number;
  workerVswitchIds?: string[];
  workerInstanceTypes?: string[];
  workerSystemDiskCategory?: string;
  workerSystemDiskSize?: number;
  workerSystemDiskSnapshotPolicyId?: string;
  workerDataDisks?: DataDisk[];
  workerInstanceChargeType?: string;
  workerPeriodUnit?: string;
  workerPeriod?: number;
  workerAutoRenew?: boolean;
  workerAutoRenewPeriod?: number;
  instances?: string[];
  formatDisk?: boolean;
  keepInstanceName?: boolean;
  serviceDiscoveryTypes?: string[];
  natGateway?: boolean;
  zoneId?: string;
  profile?: string;
  deletionProtection?: boolean;
  disableRollback?: boolean;
  timeoutMins?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      regionId: 'region_id',
      clusterType: 'cluster_type',
      clusterSpec: 'cluster_spec',
      kubernetesVersion: 'kubernetes_version',
      runtime: 'runtime',
      vpcid: 'vpcid',
      podVswitchIds: 'pod_vswitch_ids',
      containerCidr: 'container_cidr',
      serviceCidr: 'service_cidr',
      securityGroupId: 'security_group_id',
      isEnterpriseSecurityGroup: 'is_enterprise_security_group',
      snatEntry: 'snat_entry',
      endpointPublicAccess: 'endpoint_public_access',
      sshFlags: 'ssh_flags',
      timezone: 'timezone',
      nodeCidrMask: 'node_cidr_mask',
      userCa: 'user_ca',
      userData: 'user_data',
      clusterDomain: 'cluster_domain',
      nodeNameMode: 'node_name_mode',
      customSan: 'custom_san',
      encryptionProviderKey: 'encryption_provider_key',
      serviceAccountIssuer: 'service_account_issuer',
      apiAudiences: 'api_audiences',
      imageId: 'image_id',
      rdsInstances: 'rds_instances',
      tags: 'tags',
      addons: 'addons',
      taints: 'taints',
      cloudMonitorFlags: 'cloud_monitor_flags',
      platform: 'platform',
      osType: 'os_type',
      cpuPolicy: 'cpu_policy',
      proxyMode: 'proxy_mode',
      nodePortRange: 'node_port_range',
      keyPair: 'key_pair',
      loginPassword: 'login_password',
      masterCount: 'master_count',
      masterVswitchIds: 'master_vswitch_ids',
      masterInstanceTypes: 'master_instance_types',
      masterSystemDiskCategory: 'master_system_disk_category',
      masterSystemDiskSize: 'master_system_disk_size',
      masterSystemDiskSnapshotPolicyId: 'master_system_disk_snapshot_policy_id',
      masterInstanceChargeType: 'master_instance_charge_type',
      masterPeriodUnit: 'master_period_unit',
      masterPeriod: 'master_period',
      masterAutoRenew: 'master_auto_renew',
      masterAutoRenewPeriod: 'master_auto_renew_period',
      numOfNodes: 'num_of_nodes',
      workerVswitchIds: 'worker_vswitch_ids',
      workerInstanceTypes: 'worker_instance_types',
      workerSystemDiskCategory: 'worker_system_disk_category',
      workerSystemDiskSize: 'worker_system_disk_size',
      workerSystemDiskSnapshotPolicyId: 'worker_system_disk_snapshot_policy_id',
      workerDataDisks: 'worker_data_disks',
      workerInstanceChargeType: 'worker_instance_charge_type',
      workerPeriodUnit: 'worker_period_unit',
      workerPeriod: 'worker_period',
      workerAutoRenew: 'worker_auto_renew',
      workerAutoRenewPeriod: 'worker_auto_renew_period',
      instances: 'instances',
      formatDisk: 'format_disk',
      keepInstanceName: 'keep_instance_name',
      serviceDiscoveryTypes: 'service_discovery_types',
      natGateway: 'nat_gateway',
      zoneId: 'zone_id',
      profile: 'profile',
      deletionProtection: 'deletion_protection',
      disableRollback: 'disable_rollback',
      timeoutMins: 'timeout_mins',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      regionId: 'string',
      clusterType: 'string',
      clusterSpec: 'string',
      kubernetesVersion: 'string',
      runtime: Runtime,
      vpcid: 'string',
      podVswitchIds: { 'type': 'array', 'itemType': 'string' },
      containerCidr: 'string',
      serviceCidr: 'string',
      securityGroupId: 'string',
      isEnterpriseSecurityGroup: 'boolean',
      snatEntry: 'boolean',
      endpointPublicAccess: 'boolean',
      sshFlags: 'boolean',
      timezone: 'string',
      nodeCidrMask: 'string',
      userCa: 'string',
      userData: 'string',
      clusterDomain: 'string',
      nodeNameMode: 'string',
      customSan: 'string',
      encryptionProviderKey: 'string',
      serviceAccountIssuer: 'string',
      apiAudiences: 'string',
      imageId: 'string',
      rdsInstances: { 'type': 'array', 'itemType': 'string' },
      tags: { 'type': 'array', 'itemType': Tag },
      addons: { 'type': 'array', 'itemType': Addon },
      taints: { 'type': 'array', 'itemType': Taint },
      cloudMonitorFlags: 'boolean',
      platform: 'string',
      osType: 'string',
      cpuPolicy: 'string',
      proxyMode: 'string',
      nodePortRange: 'string',
      keyPair: 'string',
      loginPassword: 'string',
      masterCount: 'number',
      masterVswitchIds: { 'type': 'array', 'itemType': 'string' },
      masterInstanceTypes: { 'type': 'array', 'itemType': 'string' },
      masterSystemDiskCategory: 'string',
      masterSystemDiskSize: 'number',
      masterSystemDiskSnapshotPolicyId: 'string',
      masterInstanceChargeType: 'string',
      masterPeriodUnit: 'string',
      masterPeriod: 'number',
      masterAutoRenew: 'boolean',
      masterAutoRenewPeriod: 'number',
      numOfNodes: 'number',
      workerVswitchIds: { 'type': 'array', 'itemType': 'string' },
      workerInstanceTypes: { 'type': 'array', 'itemType': 'string' },
      workerSystemDiskCategory: 'string',
      workerSystemDiskSize: 'number',
      workerSystemDiskSnapshotPolicyId: 'string',
      workerDataDisks: { 'type': 'array', 'itemType': DataDisk },
      workerInstanceChargeType: 'string',
      workerPeriodUnit: 'string',
      workerPeriod: 'number',
      workerAutoRenew: 'boolean',
      workerAutoRenewPeriod: 'number',
      instances: { 'type': 'array', 'itemType': 'string' },
      formatDisk: 'boolean',
      keepInstanceName: 'boolean',
      serviceDiscoveryTypes: { 'type': 'array', 'itemType': 'string' },
      natGateway: 'boolean',
      zoneId: 'string',
      profile: 'string',
      deletionProtection: 'boolean',
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

export class AttachInstancesRequest extends $tea.Model {
  instances?: string[];
  keyPair?: string;
  password?: string;
  formatDisk?: boolean;
  keepInstanceName?: boolean;
  isEdgeWorker?: boolean;
  nodepoolId?: string;
  imageId?: string;
  cpuPolicy?: string;
  userData?: string;
  rdsInstances?: string[];
  runtime?: Runtime;
  tags?: Tag[];
  static names(): { [key: string]: string } {
    return {
      instances: 'instances',
      keyPair: 'key_pair',
      password: 'password',
      formatDisk: 'format_disk',
      keepInstanceName: 'keep_instance_name',
      isEdgeWorker: 'is_edge_worker',
      nodepoolId: 'nodepool_id',
      imageId: 'image_id',
      cpuPolicy: 'cpu_policy',
      userData: 'user_data',
      rdsInstances: 'rds_instances',
      runtime: 'runtime',
      tags: 'tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: { 'type': 'array', 'itemType': 'string' },
      keyPair: 'string',
      password: 'string',
      formatDisk: 'boolean',
      keepInstanceName: 'boolean',
      isEdgeWorker: 'boolean',
      nodepoolId: 'string',
      imageId: 'string',
      cpuPolicy: 'string',
      userData: 'string',
      rdsInstances: { 'type': 'array', 'itemType': 'string' },
      runtime: Runtime,
      tags: { 'type': 'array', 'itemType': Tag },
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

export class DescribeTemplatesRequest extends $tea.Model {
  templateType?: string;
  pageNum?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      templateType: 'template_type',
      pageNum: 'page_num',
      pageSize: 'page_size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateType: 'string',
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTemplatesResponseBody extends $tea.Model {
  templates?: DescribeTemplatesResponseBodyTemplates[];
  pageInfo?: DescribeTemplatesResponseBodyPageInfo;
  static names(): { [key: string]: string } {
    return {
      templates: 'templates',
      pageInfo: 'page_info',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templates: { 'type': 'array', 'itemType': DescribeTemplatesResponseBodyTemplates },
      pageInfo: DescribeTemplatesResponseBodyPageInfo,
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

export class PauseClusterUpgradeResponse extends $tea.Model {
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

export class DeleteTemplateResponse extends $tea.Model {
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
  body: DescribeTemplateAttributeResponseBody[];
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: { 'type': 'array', 'itemType': DescribeTemplateAttributeResponseBody },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTemplateRequest extends $tea.Model {
  name?: string;
  template?: string;
  tags?: string;
  description?: string;
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      template: 'template',
      tags: 'tags',
      description: 'description',
      templateType: 'template_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
  body: CreateTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterNodesRequest extends $tea.Model {
  instanceIds?: string[];
  nodepoolId?: string;
  state?: string;
  pageSize?: string;
  pageNumber?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'instanceIds',
      nodepoolId: 'nodepool_id',
      state: 'state',
      pageSize: 'pageSize',
      pageNumber: 'pageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      nodepoolId: 'string',
      state: 'string',
      pageSize: 'string',
      pageNumber: 'string',
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

export class DeleteClusterRequest extends $tea.Model {
  retainAllResources?: boolean;
  keepSlb?: boolean;
  retainResources?: string[];
  static names(): { [key: string]: string } {
    return {
      retainAllResources: 'retain_all_resources',
      keepSlb: 'keep_slb',
      retainResources: 'retain_resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      retainAllResources: 'boolean',
      keepSlb: 'boolean',
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

export class DescribeClusterAddonsVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: {[key: string]: any};
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
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

export class DescribeClustersV1Request extends $tea.Model {
  name?: string;
  clusterType?: string;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      clusterType: 'cluster_type',
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

export class DescribeTaskInfoResponseBody extends $tea.Model {
  clusterId?: string;
  taskId?: string;
  created?: string;
  updated?: string;
  state?: string;
  taskType?: string;
  taskResult?: DescribeTaskInfoResponseBodyTaskResult[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'cluster_id',
      taskId: 'task_id',
      created: 'created',
      updated: 'updated',
      state: 'state',
      taskType: 'task_type',
      taskResult: 'task_result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      taskId: 'string',
      created: 'string',
      updated: 'string',
      state: 'string',
      taskType: 'string',
      taskResult: { 'type': 'array', 'itemType': DescribeTaskInfoResponseBodyTaskResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTaskInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeTaskInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeTaskInfoResponseBody,
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

export class DeleteClusterNodepoolResponse extends $tea.Model {
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

export class DescribeClusterAddonsUpgradeStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: {[key: string]: any};
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
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
  body: DescribeClusterNodePoolsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeClusterNodePoolsResponseBody,
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

export class ScaleOutClusterRequest extends $tea.Model {
  count?: number;
  keyPair?: string;
  loginPassword?: string;
  vswitchIds?: string[];
  workerInstanceChargeType?: string;
  workerPeriod?: number;
  workerPeriodUnit?: string;
  workerAutoRenew?: boolean;
  workerAutoRenewPeriod?: number;
  workerInstanceTypes?: string[];
  workerSystemDiskCategory?: string;
  workerSystemDiskSize?: number;
  workerDataDisks?: DataDisk[];
  cloudMonitorFlags?: boolean;
  cpuPolicy?: string;
  imageId?: string;
  userData?: string;
  rdsInstances?: string[];
  tags?: Tag[];
  taints?: Taint[];
  runtime?: Runtime;
  static names(): { [key: string]: string } {
    return {
      count: 'count',
      keyPair: 'key_pair',
      loginPassword: 'login_password',
      vswitchIds: 'vswitch_ids',
      workerInstanceChargeType: 'worker_instance_charge_type',
      workerPeriod: 'worker_period',
      workerPeriodUnit: 'worker_period_unit',
      workerAutoRenew: 'worker_auto_renew',
      workerAutoRenewPeriod: 'worker_auto_renew_period',
      workerInstanceTypes: 'worker_instance_types',
      workerSystemDiskCategory: 'worker_system_disk_category',
      workerSystemDiskSize: 'worker_system_disk_size',
      workerDataDisks: 'worker_data_disks',
      cloudMonitorFlags: 'cloud_monitor_flags',
      cpuPolicy: 'cpu_policy',
      imageId: 'image_id',
      userData: 'user_data',
      rdsInstances: 'rds_instances',
      tags: 'tags',
      taints: 'taints',
      runtime: 'runtime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      keyPair: 'string',
      loginPassword: 'string',
      vswitchIds: { 'type': 'array', 'itemType': 'string' },
      workerInstanceChargeType: 'string',
      workerPeriod: 'number',
      workerPeriodUnit: 'string',
      workerAutoRenew: 'boolean',
      workerAutoRenewPeriod: 'number',
      workerInstanceTypes: { 'type': 'array', 'itemType': 'string' },
      workerSystemDiskCategory: 'string',
      workerSystemDiskSize: 'number',
      workerDataDisks: { 'type': 'array', 'itemType': DataDisk },
      cloudMonitorFlags: 'boolean',
      cpuPolicy: 'string',
      imageId: 'string',
      userData: 'string',
      rdsInstances: { 'type': 'array', 'itemType': 'string' },
      tags: { 'type': 'array', 'itemType': Tag },
      taints: { 'type': 'array', 'itemType': Taint },
      runtime: Runtime,
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

export class GetKubernetesTriggerRequest extends $tea.Model {
  namespace?: string;
  type?: string;
  name?: string;
  action?: string;
  static names(): { [key: string]: string } {
    return {
      namespace: 'Namespace',
      type: 'Type',
      name: 'Name',
      action: 'action',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespace: 'string',
      type: 'string',
      name: 'string',
      action: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetKubernetesTriggerResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetKubernetesTriggerResponseBody[];
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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

export class DeleteClusterNodesRequest extends $tea.Model {
  drainNode?: boolean;
  releaseNode?: boolean;
  nodes?: string[];
  static names(): { [key: string]: string } {
    return {
      drainNode: 'drain_node',
      releaseNode: 'release_node',
      nodes: 'nodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drainNode: 'boolean',
      releaseNode: 'boolean',
      nodes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteClusterNodesResponseBody extends $tea.Model {
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

export class DeleteClusterNodesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteClusterNodesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteClusterNodesResponseBody,
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

export class ListTagResourcesResponseBodyTagResourcesTagResource extends $tea.Model {
  tagKey?: string;
  tagValue?: string;
  resourceId?: string;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'tag_key',
      tagValue: 'tag_value',
      resourceId: 'resource_id',
      resourceType: 'resource_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
      resourceId: 'string',
      resourceType: 'string',
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

export class DescribeKubernetesVersionMetadataResponseBodyImages extends $tea.Model {
  imageId?: string;
  imageName?: string;
  platform?: string;
  osVersion?: string;
  imageType?: string;
  osType?: string;
  imageCategory?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'image_id',
      imageName: 'image_name',
      platform: 'platform',
      osVersion: 'os_version',
      imageType: 'image_type',
      osType: 'os_type',
      imageCategory: 'image_category',
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

export class DescribeClusterLogsResponseBody extends $tea.Model {
  ID?: number;
  clusterId?: string;
  clusterLog?: string;
  logLevel?: string;
  created?: string;
  updated?: string;
  static names(): { [key: string]: string } {
    return {
      ID: 'ID',
      clusterId: 'cluster_id',
      clusterLog: 'cluster_log',
      logLevel: 'log_level',
      created: 'created',
      updated: 'updated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ID: 'number',
      clusterId: 'string',
      clusterLog: 'string',
      logLevel: 'string',
      created: 'string',
      updated: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterDetailResponseBodyOutputs extends $tea.Model {
  outputKey?: string;
  outputValue?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      outputKey: 'OutputKey',
      outputValue: 'OutputValue',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outputKey: 'string',
      outputValue: 'string',
      description: 'string',
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
  dataDisks?: DataDisk[];
  instanceChargeType?: string;
  period?: number;
  periodUnit?: string;
  autoRenew?: boolean;
  autoRenewPeriod?: number;
  platform?: string;
  imageId?: string;
  spotStrategy?: string;
  spotPriceLimit?: ModifyClusterNodePoolRequestScalingGroupSpotPriceLimit[];
  instanceTypes?: string[];
  keyPair?: string;
  loginPassword?: string;
  rdsInstances?: string[];
  scalingPolicy?: string;
  systemDiskCategory?: string;
  systemDiskSize?: number;
  tags?: Tag[];
  vswitchIds?: string[];
  multiAzPolicy?: string;
  onDemandBaseCapacity?: number;
  onDemandPercentageAboveBaseCapacity?: number;
  spotInstancePools?: number;
  spotInstanceRemedy?: boolean;
  compensateWithOnDemand?: boolean;
  static names(): { [key: string]: string } {
    return {
      dataDisks: 'data_disks',
      instanceChargeType: 'instance_charge_type',
      period: 'period',
      periodUnit: 'period_unit',
      autoRenew: 'auto_renew',
      autoRenewPeriod: 'auto_renew_period',
      platform: 'platform',
      imageId: 'image_id',
      spotStrategy: 'spot_strategy',
      spotPriceLimit: 'spot_price_limit',
      instanceTypes: 'instance_types',
      keyPair: 'key_pair',
      loginPassword: 'login_password',
      rdsInstances: 'rds_instances',
      scalingPolicy: 'scaling_policy',
      systemDiskCategory: 'system_disk_category',
      systemDiskSize: 'system_disk_size',
      tags: 'tags',
      vswitchIds: 'vswitch_ids',
      multiAzPolicy: 'multi_az_policy',
      onDemandBaseCapacity: 'on_demand_base_capacity',
      onDemandPercentageAboveBaseCapacity: 'on_demand_percentage_above_base_capacity',
      spotInstancePools: 'spot_instance_pools',
      spotInstanceRemedy: 'spot_instance_remedy',
      compensateWithOnDemand: 'compensate_with_on_demand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataDisks: { 'type': 'array', 'itemType': DataDisk },
      instanceChargeType: 'string',
      period: 'number',
      periodUnit: 'string',
      autoRenew: 'boolean',
      autoRenewPeriod: 'number',
      platform: 'string',
      imageId: 'string',
      spotStrategy: 'string',
      spotPriceLimit: { 'type': 'array', 'itemType': ModifyClusterNodePoolRequestScalingGroupSpotPriceLimit },
      instanceTypes: { 'type': 'array', 'itemType': 'string' },
      keyPair: 'string',
      loginPassword: 'string',
      rdsInstances: { 'type': 'array', 'itemType': 'string' },
      scalingPolicy: 'string',
      systemDiskCategory: 'string',
      systemDiskSize: 'number',
      tags: { 'type': 'array', 'itemType': Tag },
      vswitchIds: { 'type': 'array', 'itemType': 'string' },
      multiAzPolicy: 'string',
      onDemandBaseCapacity: 'number',
      onDemandPercentageAboveBaseCapacity: 'number',
      spotInstancePools: 'number',
      spotInstanceRemedy: 'boolean',
      compensateWithOnDemand: 'boolean',
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

export class ModifyClusterNodePoolRequestManagementUpgradeConfig extends $tea.Model {
  autoUpgrade?: boolean;
  surge?: number;
  surgePercentage?: number;
  maxUnavailable?: number;
  static names(): { [key: string]: string } {
    return {
      autoUpgrade: 'auto_upgrade',
      surge: 'surge',
      surgePercentage: 'surge_percentage',
      maxUnavailable: 'max_unavailable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoUpgrade: 'boolean',
      surge: 'number',
      surgePercentage: 'number',
      maxUnavailable: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterNodePoolRequestManagement extends $tea.Model {
  enable?: boolean;
  autoRepair?: boolean;
  upgradeConfig?: ModifyClusterNodePoolRequestManagementUpgradeConfig;
  static names(): { [key: string]: string } {
    return {
      enable: 'enable',
      autoRepair: 'auto_repair',
      upgradeConfig: 'upgrade_config',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      autoRepair: 'boolean',
      upgradeConfig: ModifyClusterNodePoolRequestManagementUpgradeConfig,
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

export class DescribeClusterNodePoolDetailResponseBodyKubernetesConfig extends $tea.Model {
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
  dataDisks?: DataDisk[];
  imageId?: string;
  instanceChargeType?: string;
  instanceTypes?: string[];
  multiAzPolicy?: string;
  onDemandBaseCapacity?: number;
  onDemandPercentageAboveBaseCapacity?: number;
  spotInstancePools?: number;
  spotInstanceRemedy?: boolean;
  compensateWithOnDemand?: boolean;
  period?: number;
  periodUnit?: string;
  platform?: string;
  ramPolicy?: string;
  spotStrategy?: string;
  spotPriceLimit?: DescribeClusterNodePoolDetailResponseBodyScalingGroupSpotPriceLimit[];
  rdsInstances?: string[];
  scalingGroupId?: string;
  scalingPolicy?: string;
  securityGroupId?: string;
  systemDiskCategory?: string;
  systemDiskSize?: number;
  tags?: Tag[];
  vswitchIds?: string[];
  loginPassword?: string;
  keyPair?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'auto_renew',
      autoRenewPeriod: 'auto_renew_period',
      dataDisks: 'data_disks',
      imageId: 'image_id',
      instanceChargeType: 'instance_charge_type',
      instanceTypes: 'instance_types',
      multiAzPolicy: 'multi_az_policy',
      onDemandBaseCapacity: 'on_demand_base_capacity',
      onDemandPercentageAboveBaseCapacity: 'on_demand_percentage_above_base_capacity',
      spotInstancePools: 'spot_instance_pools',
      spotInstanceRemedy: 'spot_instance_remedy',
      compensateWithOnDemand: 'compensate_with_on_demand',
      period: 'period',
      periodUnit: 'period_unit',
      platform: 'platform',
      ramPolicy: 'ram_policy',
      spotStrategy: 'spot_strategy',
      spotPriceLimit: 'spot_price_limit',
      rdsInstances: 'rds_instances',
      scalingGroupId: 'scaling_group_id',
      scalingPolicy: 'scaling_policy',
      securityGroupId: 'security_group_id',
      systemDiskCategory: 'system_disk_category',
      systemDiskSize: 'system_disk_size',
      tags: 'tags',
      vswitchIds: 'vswitch_ids',
      loginPassword: 'login_password',
      keyPair: 'key_pair',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'boolean',
      autoRenewPeriod: 'number',
      dataDisks: { 'type': 'array', 'itemType': DataDisk },
      imageId: 'string',
      instanceChargeType: 'string',
      instanceTypes: { 'type': 'array', 'itemType': 'string' },
      multiAzPolicy: 'string',
      onDemandBaseCapacity: 'number',
      onDemandPercentageAboveBaseCapacity: 'number',
      spotInstancePools: 'number',
      spotInstanceRemedy: 'boolean',
      compensateWithOnDemand: 'boolean',
      period: 'number',
      periodUnit: 'string',
      platform: 'string',
      ramPolicy: 'string',
      spotStrategy: 'string',
      spotPriceLimit: { 'type': 'array', 'itemType': DescribeClusterNodePoolDetailResponseBodyScalingGroupSpotPriceLimit },
      rdsInstances: { 'type': 'array', 'itemType': 'string' },
      scalingGroupId: 'string',
      scalingPolicy: 'string',
      securityGroupId: 'string',
      systemDiskCategory: 'string',
      systemDiskSize: 'number',
      tags: { 'type': 'array', 'itemType': Tag },
      vswitchIds: { 'type': 'array', 'itemType': 'string' },
      loginPassword: 'string',
      keyPair: 'string',
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

export class DescribeClusterNodePoolDetailResponseBodyManagementUpgradeConfig extends $tea.Model {
  autoUpgrade?: boolean;
  surge?: number;
  surgePercentage?: number;
  maxUnavailable?: number;
  static names(): { [key: string]: string } {
    return {
      autoUpgrade: 'auto_upgrade',
      surge: 'surge',
      surgePercentage: 'surge_percentage',
      maxUnavailable: 'max_unavailable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoUpgrade: 'boolean',
      surge: 'number',
      surgePercentage: 'number',
      maxUnavailable: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterNodePoolDetailResponseBodyManagement extends $tea.Model {
  enable?: boolean;
  autoRepair?: boolean;
  upgradeConfig?: DescribeClusterNodePoolDetailResponseBodyManagementUpgradeConfig;
  static names(): { [key: string]: string } {
    return {
      enable: 'enable',
      autoRepair: 'auto_repair',
      upgradeConfig: 'upgrade_config',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      autoRepair: 'boolean',
      upgradeConfig: DescribeClusterNodePoolDetailResponseBodyManagementUpgradeConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterNodePoolRequestAutoScaling extends $tea.Model {
  enable?: boolean;
  maxInstances?: number;
  minInstances?: number;
  type?: string;
  isBondEip?: boolean;
  eipInternetChargeType?: string;
  eipBandwidth?: number;
  static names(): { [key: string]: string } {
    return {
      enable: 'enable',
      maxInstances: 'max_instances',
      minInstances: 'min_instances',
      type: 'type',
      isBondEip: 'is_bond_eip',
      eipInternetChargeType: 'eip_internet_charge_type',
      eipBandwidth: 'eip_bandwidth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      maxInstances: 'number',
      minInstances: 'number',
      type: 'string',
      isBondEip: 'boolean',
      eipInternetChargeType: 'string',
      eipBandwidth: 'number',
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

export class CreateClusterNodePoolRequestNodepoolInfo extends $tea.Model {
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
  dataDisks?: DataDisk[];
  imageId?: string;
  instanceChargeType?: string;
  instanceTypes?: string[];
  keyPair?: string;
  loginPassword?: string;
  period?: number;
  periodUnit?: string;
  platform?: string;
  rdsInstances?: string[];
  spotStrategy?: string;
  spotPriceLimit?: CreateClusterNodePoolRequestScalingGroupSpotPriceLimit[];
  scalingPolicy?: string;
  securityGroupId?: string;
  systemDiskCategory?: string;
  systemDiskSize?: number;
  tags?: CreateClusterNodePoolRequestScalingGroupTags[];
  vswitchIds?: string[];
  multiAzPolicy?: string;
  onDemandBaseCapacity?: number;
  onDemandPercentageAboveBaseCapacity?: number;
  spotInstancePools?: number;
  spotInstanceRemedy?: boolean;
  compensateWithOnDemand?: boolean;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'auto_renew',
      autoRenewPeriod: 'auto_renew_period',
      dataDisks: 'data_disks',
      imageId: 'image_id',
      instanceChargeType: 'instance_charge_type',
      instanceTypes: 'instance_types',
      keyPair: 'key_pair',
      loginPassword: 'login_password',
      period: 'period',
      periodUnit: 'period_unit',
      platform: 'platform',
      rdsInstances: 'rds_instances',
      spotStrategy: 'spot_strategy',
      spotPriceLimit: 'spot_price_limit',
      scalingPolicy: 'scaling_policy',
      securityGroupId: 'security_group_id',
      systemDiskCategory: 'system_disk_category',
      systemDiskSize: 'system_disk_size',
      tags: 'tags',
      vswitchIds: 'vswitch_ids',
      multiAzPolicy: 'multi_az_policy',
      onDemandBaseCapacity: 'on_demand_base_capacity',
      onDemandPercentageAboveBaseCapacity: 'on_demand_percentage_above_base_capacity',
      spotInstancePools: 'spot_instance_pools',
      spotInstanceRemedy: 'spot_instance_remedy',
      compensateWithOnDemand: 'compensate_with_on_demand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'boolean',
      autoRenewPeriod: 'number',
      dataDisks: { 'type': 'array', 'itemType': DataDisk },
      imageId: 'string',
      instanceChargeType: 'string',
      instanceTypes: { 'type': 'array', 'itemType': 'string' },
      keyPair: 'string',
      loginPassword: 'string',
      period: 'number',
      periodUnit: 'string',
      platform: 'string',
      rdsInstances: { 'type': 'array', 'itemType': 'string' },
      spotStrategy: 'string',
      spotPriceLimit: { 'type': 'array', 'itemType': CreateClusterNodePoolRequestScalingGroupSpotPriceLimit },
      scalingPolicy: 'string',
      securityGroupId: 'string',
      systemDiskCategory: 'string',
      systemDiskSize: 'number',
      tags: { 'type': 'array', 'itemType': CreateClusterNodePoolRequestScalingGroupTags },
      vswitchIds: { 'type': 'array', 'itemType': 'string' },
      multiAzPolicy: 'string',
      onDemandBaseCapacity: 'number',
      onDemandPercentageAboveBaseCapacity: 'number',
      spotInstancePools: 'number',
      spotInstanceRemedy: 'boolean',
      compensateWithOnDemand: 'boolean',
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

export class CreateClusterNodePoolRequestManagementUpgradeConfig extends $tea.Model {
  autoUpgrade?: boolean;
  surge?: number;
  surgePercentage?: number;
  maxUnavailable?: number;
  static names(): { [key: string]: string } {
    return {
      autoUpgrade: 'auto_upgrade',
      surge: 'surge',
      surgePercentage: 'surge_percentage',
      maxUnavailable: 'max_unavailable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoUpgrade: 'boolean',
      surge: 'number',
      surgePercentage: 'number',
      maxUnavailable: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterNodePoolRequestManagement extends $tea.Model {
  enable?: boolean;
  autoRepair?: boolean;
  upgradeConfig?: CreateClusterNodePoolRequestManagementUpgradeConfig;
  static names(): { [key: string]: string } {
    return {
      enable: 'enable',
      autoRepair: 'auto_repair',
      upgradeConfig: 'upgrade_config',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      autoRepair: 'boolean',
      upgradeConfig: CreateClusterNodePoolRequestManagementUpgradeConfig,
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

export class DescribeTemplatesResponseBodyTemplates extends $tea.Model {
  acl?: string;
  id?: string;
  name?: string;
  description?: string;
  tags?: string;
  template?: string;
  templateType?: string;
  created?: string;
  updated?: string;
  templateWithHistId?: string;
  static names(): { [key: string]: string } {
    return {
      acl: 'acl',
      id: 'id',
      name: 'name',
      description: 'description',
      tags: 'tags',
      template: 'template',
      templateType: 'template_type',
      created: 'created',
      updated: 'updated',
      templateWithHistId: 'template_with_hist_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acl: 'string',
      id: 'string',
      name: 'string',
      description: 'string',
      tags: 'string',
      template: 'string',
      templateType: 'string',
      created: 'string',
      updated: 'string',
      templateWithHistId: 'string',
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
  spotStrategy?: string;
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
      spotStrategy: 'spot_strategy',
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
      spotStrategy: 'string',
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

export class DescribeClustersV1ResponseBodyClusters extends $tea.Model {
  clusterId?: string;
  clusterType?: string;
  created?: string;
  initVersion?: string;
  currentVersion?: string;
  nextVersion?: string;
  deletionProtection?: boolean;
  dockerVersion?: string;
  externalLoadbalancerId?: string;
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
  tags?: Tag[];
  updated?: string;
  vpcId?: string;
  vswitchId?: string;
  workerRamRoleName?: string;
  zoneId?: string;
  clusterSpec?: string;
  maintenanceWindow?: MaintenanceWindow;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'cluster_id',
      clusterType: 'cluster_type',
      created: 'created',
      initVersion: 'init_version',
      currentVersion: 'current_version',
      nextVersion: 'next_version',
      deletionProtection: 'deletion_protection',
      dockerVersion: 'docker_version',
      externalLoadbalancerId: 'external_loadbalancer_id',
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
      vswitchId: 'vswitch_id',
      workerRamRoleName: 'worker_ram_role_name',
      zoneId: 'zone_id',
      clusterSpec: 'cluster_spec',
      maintenanceWindow: 'maintenance_window',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterType: 'string',
      created: 'string',
      initVersion: 'string',
      currentVersion: 'string',
      nextVersion: 'string',
      deletionProtection: 'boolean',
      dockerVersion: 'string',
      externalLoadbalancerId: 'string',
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
      tags: { 'type': 'array', 'itemType': Tag },
      updated: 'string',
      vpcId: 'string',
      vswitchId: 'string',
      workerRamRoleName: 'string',
      zoneId: 'string',
      clusterSpec: 'string',
      maintenanceWindow: MaintenanceWindow,
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
  name?: string;
  configs?: ModifyClusterConfigurationRequestCustomizeConfigConfigs[];
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      configs: 'configs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      configs: { 'type': 'array', 'itemType': ModifyClusterConfigurationRequestCustomizeConfigConfigs },
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

export class InstallClusterAddonsRequestBody extends $tea.Model {
  name?: string;
  version?: string;
  config?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      version: 'version',
      config: 'config',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      version: 'string',
      config: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterNodePoolsResponseBodyNodepoolsAutoScaling extends $tea.Model {
  eipBandwidth?: number;
  isBondEip?: boolean;
  eipInternetChargeType?: string;
  enable?: boolean;
  maxInstances?: number;
  minInstances?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      eipBandwidth: 'eip_bandwidth',
      isBondEip: 'is_bond_eip',
      eipInternetChargeType: 'eip_internet_charge_type',
      enable: 'enable',
      maxInstances: 'max_instances',
      minInstances: 'min_instances',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eipBandwidth: 'number',
      isBondEip: 'boolean',
      eipInternetChargeType: 'string',
      enable: 'boolean',
      maxInstances: 'number',
      minInstances: 'number',
      type: 'string',
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
  dataDisks?: DataDisk[];
  imageId?: string;
  instanceChargeType?: string;
  instanceTypes?: string[];
  multiAzPolicy?: string;
  onDemandBaseCapacity?: number;
  onDemandPercentageAboveBaseCapacity?: number;
  spotInstancePools?: number;
  spotInstanceRemedy?: boolean;
  compensateWithOnDemand?: boolean;
  period?: number;
  periodUnit?: string;
  platform?: string;
  ramPolicy?: string;
  spotStrategy?: string;
  spotPriceLimit?: DescribeClusterNodePoolsResponseBodyNodepoolsScalingGroupSpotPriceLimit[];
  rdsInstances?: string[];
  scalingGroupId?: string;
  scalingPolicy?: string;
  securityGroupId?: string;
  systemDiskCategory?: string;
  systemDiskSize?: number;
  tags?: Tag[];
  vswitchIds?: string[];
  loginPassword?: string;
  keyPair?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'auto_renew',
      autoRenewPeriod: 'auto_renew_period',
      dataDisks: 'data_disks',
      imageId: 'image_id',
      instanceChargeType: 'instance_charge_type',
      instanceTypes: 'instance_types',
      multiAzPolicy: 'multi_az_policy',
      onDemandBaseCapacity: 'on_demand_base_capacity',
      onDemandPercentageAboveBaseCapacity: 'on_demand_percentage_above_base_capacity',
      spotInstancePools: 'spot_instance_pools',
      spotInstanceRemedy: 'spot_instance_remedy',
      compensateWithOnDemand: 'compensate_with_on_demand',
      period: 'period',
      periodUnit: 'period_unit',
      platform: 'platform',
      ramPolicy: 'ram_policy',
      spotStrategy: 'spot_strategy',
      spotPriceLimit: 'spot_price_limit',
      rdsInstances: 'rds_instances',
      scalingGroupId: 'scaling_group_id',
      scalingPolicy: 'scaling_policy',
      securityGroupId: 'security_group_id',
      systemDiskCategory: 'system_disk_category',
      systemDiskSize: 'system_disk_size',
      tags: 'tags',
      vswitchIds: 'vswitch_ids',
      loginPassword: 'login_password',
      keyPair: 'key_pair',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'boolean',
      autoRenewPeriod: 'number',
      dataDisks: { 'type': 'array', 'itemType': DataDisk },
      imageId: 'string',
      instanceChargeType: 'string',
      instanceTypes: { 'type': 'array', 'itemType': 'string' },
      multiAzPolicy: 'string',
      onDemandBaseCapacity: 'number',
      onDemandPercentageAboveBaseCapacity: 'number',
      spotInstancePools: 'number',
      spotInstanceRemedy: 'boolean',
      compensateWithOnDemand: 'boolean',
      period: 'number',
      periodUnit: 'string',
      platform: 'string',
      ramPolicy: 'string',
      spotStrategy: 'string',
      spotPriceLimit: { 'type': 'array', 'itemType': DescribeClusterNodePoolsResponseBodyNodepoolsScalingGroupSpotPriceLimit },
      rdsInstances: { 'type': 'array', 'itemType': 'string' },
      scalingGroupId: 'string',
      scalingPolicy: 'string',
      securityGroupId: 'string',
      systemDiskCategory: 'string',
      systemDiskSize: 'number',
      tags: { 'type': 'array', 'itemType': Tag },
      vswitchIds: { 'type': 'array', 'itemType': 'string' },
      loginPassword: 'string',
      keyPair: 'string',
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

export class DescribeClusterNodePoolsResponseBodyNodepoolsManagementUpgradeConfig extends $tea.Model {
  autoUpgrade?: boolean;
  surge?: number;
  surgePercentage?: number;
  maxUnavailable?: number;
  static names(): { [key: string]: string } {
    return {
      autoUpgrade: 'auto_upgrade',
      surge: 'surge',
      surgePercentage: 'surge_percentage',
      maxUnavailable: 'max_unavailable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoUpgrade: 'boolean',
      surge: 'number',
      surgePercentage: 'number',
      maxUnavailable: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterNodePoolsResponseBodyNodepoolsManagement extends $tea.Model {
  enable?: boolean;
  autoRepair?: boolean;
  upgradeConfig?: DescribeClusterNodePoolsResponseBodyNodepoolsManagementUpgradeConfig;
  static names(): { [key: string]: string } {
    return {
      enable: 'enable',
      autoRepair: 'auto_repair',
      upgradeConfig: 'upgrade_config',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      autoRepair: 'boolean',
      upgradeConfig: DescribeClusterNodePoolsResponseBodyNodepoolsManagementUpgradeConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterNodePoolsResponseBodyNodepools extends $tea.Model {
  autoScaling?: DescribeClusterNodePoolsResponseBodyNodepoolsAutoScaling;
  kubernetesConfig?: DescribeClusterNodePoolsResponseBodyNodepoolsKubernetesConfig;
  nodepoolInfo?: DescribeClusterNodePoolsResponseBodyNodepoolsNodepoolInfo;
  scalingGroup?: DescribeClusterNodePoolsResponseBodyNodepoolsScalingGroup;
  status?: DescribeClusterNodePoolsResponseBodyNodepoolsStatus;
  teeConfig?: DescribeClusterNodePoolsResponseBodyNodepoolsTeeConfig;
  management?: DescribeClusterNodePoolsResponseBodyNodepoolsManagement;
  static names(): { [key: string]: string } {
    return {
      autoScaling: 'auto_scaling',
      kubernetesConfig: 'kubernetes_config',
      nodepoolInfo: 'nodepool_info',
      scalingGroup: 'scaling_group',
      status: 'status',
      teeConfig: 'tee_config',
      management: 'management',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoScaling: DescribeClusterNodePoolsResponseBodyNodepoolsAutoScaling,
      kubernetesConfig: DescribeClusterNodePoolsResponseBodyNodepoolsKubernetesConfig,
      nodepoolInfo: DescribeClusterNodePoolsResponseBodyNodepoolsNodepoolInfo,
      scalingGroup: DescribeClusterNodePoolsResponseBodyNodepoolsScalingGroup,
      status: DescribeClusterNodePoolsResponseBodyNodepoolsStatus,
      teeConfig: DescribeClusterNodePoolsResponseBodyNodepoolsTeeConfig,
      management: DescribeClusterNodePoolsResponseBodyNodepoolsManagement,
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
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      name: 'name',
      clusterId: 'cluster_id',
      projectId: 'project_id',
      type: 'type',
      action: 'action',
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
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUpgradeStatusResponseBodyUpgradeTask extends $tea.Model {
  status?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'status',
      message: 'message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      message: 'string',
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

  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTagResourcesWithOptions(request, headers, runtime);
  }

  async listTagResourcesWithOptions(request: ListTagResourcesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListTagResourcesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.resourceIds)) {
      query["resource_ids"] = request.resourceIds;
    }

    if (!Util.isUnset(request.tags)) {
      query["tags"] = request.tags;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["next_token"] = request.nextToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListTagResourcesResponse>(await this.doROARequest("ListTagResources", "2015-12-15", "HTTPS", "GET", "AK", `/tags`, "json", req, runtime), new ListTagResourcesResponse({}));
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

    if (!Util.isUnset(request.instanceDeletionProtection)) {
      body["instance_deletion_protection"] = request.instanceDeletionProtection;
    }

    if (!Util.isUnset(request.ingressDomainRebinding)) {
      body["ingress_domain_rebinding"] = request.ingressDomainRebinding;
    }

    if (!Util.isUnset(request.ingressLoadbalancerId)) {
      body["ingress_loadbalancer_id"] = request.ingressLoadbalancerId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      body["resource_group_id"] = request.resourceGroupId;
    }

    if (!Util.isUnset($tea.toMap(request.maintenanceWindow))) {
      body["maintenance_window"] = request.maintenanceWindow;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    return $tea.cast<ModifyClusterResponse>(await this.doROARequest("ModifyCluster", "2015-12-15", "HTTPS", "PUT", "AK", `/api/v2/clusters/${ClusterId}`, "json", req, runtime), new ModifyClusterResponse({}));
  }

  async describeClusterAttachScripts(ClusterId: string, request: DescribeClusterAttachScriptsRequest): Promise<DescribeClusterAttachScriptsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeClusterAttachScriptsWithOptions(ClusterId, request, headers, runtime);
  }

  async describeClusterAttachScriptsWithOptions(ClusterId: string, request: DescribeClusterAttachScriptsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeClusterAttachScriptsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.nodepoolId)) {
      body["nodepool_id"] = request.nodepoolId;
    }

    if (!Util.isUnset(request.formatDisk)) {
      body["format_disk"] = request.formatDisk;
    }

    if (!Util.isUnset(request.keepInstanceName)) {
      body["keep_instance_name"] = request.keepInstanceName;
    }

    if (!Util.isUnset(request.rdsInstances)) {
      body["rds_instances"] = request.rdsInstances;
    }

    if (!Util.isUnset(request.arch)) {
      body["arch"] = request.arch;
    }

    if (!Util.isUnset(request.options)) {
      body["options"] = request.options;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    return $tea.cast<DescribeClusterAttachScriptsResponse>(await this.doROARequest("DescribeClusterAttachScripts", "2015-12-15", "HTTPS", "POST", "AK", `/clusters/${ClusterId}/attachscript`, "string", req, runtime), new DescribeClusterAttachScriptsResponse({}));
  }

  async describeKubernetesVersionMetadata(request: DescribeKubernetesVersionMetadataRequest): Promise<DescribeKubernetesVersionMetadataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeKubernetesVersionMetadataWithOptions(request, headers, runtime);
  }

  async describeKubernetesVersionMetadataWithOptions(request: DescribeKubernetesVersionMetadataRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeKubernetesVersionMetadataResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.clusterType)) {
      query["ClusterType"] = request.clusterType;
    }

    if (!Util.isUnset(request.multiAZ)) {
      query["MultiAZ"] = request.multiAZ;
    }

    if (!Util.isUnset(request.kubernetesVersion)) {
      query["KubernetesVersion"] = request.kubernetesVersion;
    }

    if (!Util.isUnset(request.profile)) {
      query["Profile"] = request.profile;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DescribeKubernetesVersionMetadataResponse>(await this.doROARequest("DescribeKubernetesVersionMetadata", "2015-12-15", "HTTPS", "GET", "AK", `/api/v1/metadata/versions`, "array", req, runtime), new DescribeKubernetesVersionMetadataResponse({}));
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
    return $tea.cast<DescribeClusterLogsResponse>(await this.doROARequest("DescribeClusterLogs", "2015-12-15", "HTTPS", "GET", "AK", `/clusters/${ClusterId}/logs`, "array", req, runtime), new DescribeClusterLogsResponse({}));
  }

  async createKubernetesTrigger(request: CreateKubernetesTriggerRequest): Promise<CreateKubernetesTriggerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createKubernetesTriggerWithOptions(request, headers, runtime);
  }

  async createKubernetesTriggerWithOptions(request: CreateKubernetesTriggerRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateKubernetesTriggerResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clusterId)) {
      body["cluster_id"] = request.clusterId;
    }

    if (!Util.isUnset(request.projectId)) {
      body["project_id"] = request.projectId;
    }

    if (!Util.isUnset(request.action)) {
      body["action"] = request.action;
    }

    if (!Util.isUnset(request.type)) {
      body["type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    return $tea.cast<CreateKubernetesTriggerResponse>(await this.doROARequest("CreateKubernetesTrigger", "2015-12-15", "HTTPS", "POST", "AK", `/triggers`, "json", req, runtime), new CreateKubernetesTriggerResponse({}));
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
    return $tea.cast<DescribeClusterDetailResponse>(await this.doROARequest("DescribeClusterDetail", "2015-12-15", "HTTPS", "GET", "AK", `/clusters/${ClusterId}`, "json", req, runtime), new DescribeClusterDetailResponse({}));
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
    return $tea.cast<PauseComponentUpgradeResponse>(await this.doROARequest("PauseComponentUpgrade", "2015-12-15", "HTTPS", "POST", "AK", `/clusters/${clusterid}/components/{componentid}/pause`, "none", req, runtime), new PauseComponentUpgradeResponse({}));
  }

  async describeClusters(request: DescribeClustersRequest): Promise<DescribeClustersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeClustersWithOptions(request, headers, runtime);
  }

  async describeClustersWithOptions(request: DescribeClustersRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeClustersResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.name)) {
      query["name"] = request.name;
    }

    if (!Util.isUnset(request.clusterType)) {
      query["clusterType"] = request.clusterType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DescribeClustersResponse>(await this.doROARequest("DescribeClusters", "2015-12-15", "HTTPS", "GET", "AK", `/clusters`, "array", req, runtime), new DescribeClustersResponse({}));
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

    if (!Util.isUnset($tea.toMap(request.nodepoolInfo))) {
      body["nodepool_info"] = request.nodepoolInfo;
    }

    if (!Util.isUnset($tea.toMap(request.scalingGroup))) {
      body["scaling_group"] = request.scalingGroup;
    }

    if (!Util.isUnset($tea.toMap(request.teeConfig))) {
      body["tee_config"] = request.teeConfig;
    }

    if (!Util.isUnset($tea.toMap(request.management))) {
      body["management"] = request.management;
    }

    if (!Util.isUnset(request.updateNodes)) {
      body["update_nodes"] = request.updateNodes;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    return $tea.cast<ModifyClusterNodePoolResponse>(await this.doROARequest("ModifyClusterNodePool", "2015-12-15", "HTTPS", "PUT", "AK", `/clusters/${ClusterId}/nodepools/{NodepoolId}`, "json", req, runtime), new ModifyClusterNodePoolResponse({}));
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
    return $tea.cast<ResumeUpgradeClusterResponse>(await this.doROARequest("ResumeUpgradeCluster", "2015-12-15", "HTTPS", "POST", "AK", `/api/v2/clusters/${ClusterId}/upgrade/resume`, "none", req, runtime), new ResumeUpgradeClusterResponse({}));
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
    return $tea.cast<ScaleClusterNodePoolResponse>(await this.doROARequest("ScaleClusterNodePool", "2015-12-15", "HTTPS", "POST", "AK", `/clusters/${ClusterId}/nodepools/{NodepoolId}`, "json", req, runtime), new ScaleClusterNodePoolResponse({}));
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
    return $tea.cast<DescribeClusterNodePoolDetailResponse>(await this.doROARequest("DescribeClusterNodePoolDetail", "2015-12-15", "HTTPS", "GET", "AK", `/clusters/${ClusterId}/nodepools/{NodepoolId}`, "json", req, runtime), new DescribeClusterNodePoolDetailResponse({}));
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

    if (!Util.isUnset($tea.toMap(request.kubernetesConfig))) {
      body["kubernetes_config"] = request.kubernetesConfig;
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

    if (!Util.isUnset($tea.toMap(request.management))) {
      body["management"] = request.management;
    }

    if (!Util.isUnset(request.count)) {
      body["count"] = request.count;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    return $tea.cast<CreateClusterNodePoolResponse>(await this.doROARequest("CreateClusterNodePool", "2015-12-15", "HTTPS", "POST", "AK", `/clusters/${ClusterId}/nodepools`, "json", req, runtime), new CreateClusterNodePoolResponse({}));
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

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DescribeClusterUserKubeconfigResponse>(await this.doROARequest("DescribeClusterUserKubeconfig", "2015-12-15", "HTTPS", "GET", "AK", `/k8s/${ClusterId}/user_config`, "json", req, runtime), new DescribeClusterUserKubeconfigResponse({}));
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
    return $tea.cast<ScaleClusterResponse>(await this.doROARequest("ScaleCluster", "2015-12-15", "HTTPS", "PUT", "AK", `/clusters/${ClusterId}`, "json", req, runtime), new ScaleClusterResponse({}));
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
    return $tea.cast<DescribeClusterAddonUpgradeStatusResponse>(await this.doROARequest("DescribeClusterAddonUpgradeStatus", "2015-12-15", "HTTPS", "GET", "AK", `/clusters/${ClusterId}/components/{ComponentId}/upgradestatus`, "json", req, runtime), new DescribeClusterAddonUpgradeStatusResponse({}));
  }

  async describeAddons(request: DescribeAddonsRequest): Promise<DescribeAddonsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeAddonsWithOptions(request, headers, runtime);
  }

  async describeAddonsWithOptions(request: DescribeAddonsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeAddonsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.region)) {
      query["region"] = request.region;
    }

    if (!Util.isUnset(request.clusterType)) {
      query["cluster_type"] = request.clusterType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DescribeAddonsResponse>(await this.doROARequest("DescribeAddons", "2015-12-15", "HTTPS", "GET", "AK", `/clusters/components/metadata`, "json", req, runtime), new DescribeAddonsResponse({}));
  }

  async createCluster(request: CreateClusterRequest): Promise<CreateClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createClusterWithOptions(request, headers, runtime);
  }

  async createClusterWithOptions(request: CreateClusterRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateClusterResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.name)) {
      body["name"] = request.name;
    }

    if (!Util.isUnset(request.regionId)) {
      body["region_id"] = request.regionId;
    }

    if (!Util.isUnset(request.clusterType)) {
      body["cluster_type"] = request.clusterType;
    }

    if (!Util.isUnset(request.clusterSpec)) {
      body["cluster_spec"] = request.clusterSpec;
    }

    if (!Util.isUnset(request.kubernetesVersion)) {
      body["kubernetes_version"] = request.kubernetesVersion;
    }

    if (!Util.isUnset($tea.toMap(request.runtime))) {
      body["runtime"] = request.runtime;
    }

    if (!Util.isUnset(request.vpcid)) {
      body["vpcid"] = request.vpcid;
    }

    if (!Util.isUnset(request.podVswitchIds)) {
      body["pod_vswitch_ids"] = request.podVswitchIds;
    }

    if (!Util.isUnset(request.containerCidr)) {
      body["container_cidr"] = request.containerCidr;
    }

    if (!Util.isUnset(request.serviceCidr)) {
      body["service_cidr"] = request.serviceCidr;
    }

    if (!Util.isUnset(request.securityGroupId)) {
      body["security_group_id"] = request.securityGroupId;
    }

    if (!Util.isUnset(request.isEnterpriseSecurityGroup)) {
      body["is_enterprise_security_group"] = request.isEnterpriseSecurityGroup;
    }

    if (!Util.isUnset(request.snatEntry)) {
      body["snat_entry"] = request.snatEntry;
    }

    if (!Util.isUnset(request.endpointPublicAccess)) {
      body["endpoint_public_access"] = request.endpointPublicAccess;
    }

    if (!Util.isUnset(request.sshFlags)) {
      body["ssh_flags"] = request.sshFlags;
    }

    if (!Util.isUnset(request.timezone)) {
      body["timezone"] = request.timezone;
    }

    if (!Util.isUnset(request.nodeCidrMask)) {
      body["node_cidr_mask"] = request.nodeCidrMask;
    }

    if (!Util.isUnset(request.userCa)) {
      body["user_ca"] = request.userCa;
    }

    if (!Util.isUnset(request.userData)) {
      body["user_data"] = request.userData;
    }

    if (!Util.isUnset(request.clusterDomain)) {
      body["cluster_domain"] = request.clusterDomain;
    }

    if (!Util.isUnset(request.nodeNameMode)) {
      body["node_name_mode"] = request.nodeNameMode;
    }

    if (!Util.isUnset(request.customSan)) {
      body["custom_san"] = request.customSan;
    }

    if (!Util.isUnset(request.encryptionProviderKey)) {
      body["encryption_provider_key"] = request.encryptionProviderKey;
    }

    if (!Util.isUnset(request.serviceAccountIssuer)) {
      body["service_account_issuer"] = request.serviceAccountIssuer;
    }

    if (!Util.isUnset(request.apiAudiences)) {
      body["api_audiences"] = request.apiAudiences;
    }

    if (!Util.isUnset(request.imageId)) {
      body["image_id"] = request.imageId;
    }

    if (!Util.isUnset(request.rdsInstances)) {
      body["rds_instances"] = request.rdsInstances;
    }

    if (!Util.isUnset(request.tags)) {
      body["tags"] = request.tags;
    }

    if (!Util.isUnset(request.addons)) {
      body["addons"] = request.addons;
    }

    if (!Util.isUnset(request.taints)) {
      body["taints"] = request.taints;
    }

    if (!Util.isUnset(request.cloudMonitorFlags)) {
      body["cloud_monitor_flags"] = request.cloudMonitorFlags;
    }

    if (!Util.isUnset(request.platform)) {
      body["platform"] = request.platform;
    }

    if (!Util.isUnset(request.osType)) {
      body["os_type"] = request.osType;
    }

    if (!Util.isUnset(request.cpuPolicy)) {
      body["cpu_policy"] = request.cpuPolicy;
    }

    if (!Util.isUnset(request.proxyMode)) {
      body["proxy_mode"] = request.proxyMode;
    }

    if (!Util.isUnset(request.nodePortRange)) {
      body["node_port_range"] = request.nodePortRange;
    }

    if (!Util.isUnset(request.keyPair)) {
      body["key_pair"] = request.keyPair;
    }

    if (!Util.isUnset(request.loginPassword)) {
      body["login_password"] = request.loginPassword;
    }

    if (!Util.isUnset(request.masterCount)) {
      body["master_count"] = request.masterCount;
    }

    if (!Util.isUnset(request.masterVswitchIds)) {
      body["master_vswitch_ids"] = request.masterVswitchIds;
    }

    if (!Util.isUnset(request.masterInstanceTypes)) {
      body["master_instance_types"] = request.masterInstanceTypes;
    }

    if (!Util.isUnset(request.masterSystemDiskCategory)) {
      body["master_system_disk_category"] = request.masterSystemDiskCategory;
    }

    if (!Util.isUnset(request.masterSystemDiskSize)) {
      body["master_system_disk_size"] = request.masterSystemDiskSize;
    }

    if (!Util.isUnset(request.masterSystemDiskSnapshotPolicyId)) {
      body["master_system_disk_snapshot_policy_id"] = request.masterSystemDiskSnapshotPolicyId;
    }

    if (!Util.isUnset(request.masterInstanceChargeType)) {
      body["master_instance_charge_type"] = request.masterInstanceChargeType;
    }

    if (!Util.isUnset(request.masterPeriodUnit)) {
      body["master_period_unit"] = request.masterPeriodUnit;
    }

    if (!Util.isUnset(request.masterPeriod)) {
      body["master_period"] = request.masterPeriod;
    }

    if (!Util.isUnset(request.masterAutoRenew)) {
      body["master_auto_renew"] = request.masterAutoRenew;
    }

    if (!Util.isUnset(request.masterAutoRenewPeriod)) {
      body["master_auto_renew_period"] = request.masterAutoRenewPeriod;
    }

    if (!Util.isUnset(request.numOfNodes)) {
      body["num_of_nodes"] = request.numOfNodes;
    }

    if (!Util.isUnset(request.workerVswitchIds)) {
      body["worker_vswitch_ids"] = request.workerVswitchIds;
    }

    if (!Util.isUnset(request.workerInstanceTypes)) {
      body["worker_instance_types"] = request.workerInstanceTypes;
    }

    if (!Util.isUnset(request.workerSystemDiskCategory)) {
      body["worker_system_disk_category"] = request.workerSystemDiskCategory;
    }

    if (!Util.isUnset(request.workerSystemDiskSize)) {
      body["worker_system_disk_size"] = request.workerSystemDiskSize;
    }

    if (!Util.isUnset(request.workerSystemDiskSnapshotPolicyId)) {
      body["worker_system_disk_snapshot_policy_id"] = request.workerSystemDiskSnapshotPolicyId;
    }

    if (!Util.isUnset(request.workerDataDisks)) {
      body["worker_data_disks"] = request.workerDataDisks;
    }

    if (!Util.isUnset(request.workerInstanceChargeType)) {
      body["worker_instance_charge_type"] = request.workerInstanceChargeType;
    }

    if (!Util.isUnset(request.workerPeriodUnit)) {
      body["worker_period_unit"] = request.workerPeriodUnit;
    }

    if (!Util.isUnset(request.workerPeriod)) {
      body["worker_period"] = request.workerPeriod;
    }

    if (!Util.isUnset(request.workerAutoRenew)) {
      body["worker_auto_renew"] = request.workerAutoRenew;
    }

    if (!Util.isUnset(request.workerAutoRenewPeriod)) {
      body["worker_auto_renew_period"] = request.workerAutoRenewPeriod;
    }

    if (!Util.isUnset(request.instances)) {
      body["instances"] = request.instances;
    }

    if (!Util.isUnset(request.formatDisk)) {
      body["format_disk"] = request.formatDisk;
    }

    if (!Util.isUnset(request.keepInstanceName)) {
      body["keep_instance_name"] = request.keepInstanceName;
    }

    if (!Util.isUnset(request.serviceDiscoveryTypes)) {
      body["service_discovery_types"] = request.serviceDiscoveryTypes;
    }

    if (!Util.isUnset(request.natGateway)) {
      body["nat_gateway"] = request.natGateway;
    }

    if (!Util.isUnset(request.zoneId)) {
      body["zone_id"] = request.zoneId;
    }

    if (!Util.isUnset(request.profile)) {
      body["profile"] = request.profile;
    }

    if (!Util.isUnset(request.deletionProtection)) {
      body["deletion_protection"] = request.deletionProtection;
    }

    if (!Util.isUnset(request.disableRollback)) {
      body["disable_rollback"] = request.disableRollback;
    }

    if (!Util.isUnset(request.timeoutMins)) {
      body["timeout_mins"] = request.timeoutMins;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    return $tea.cast<CreateClusterResponse>(await this.doROARequest("CreateCluster", "2015-12-15", "HTTPS", "POST", "AK", `/clusters`, "json", req, runtime), new CreateClusterResponse({}));
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
    return $tea.cast<UpgradeClusterResponse>(await this.doROARequest("UpgradeCluster", "2015-12-15", "HTTPS", "POST", "AK", `/api/v2/clusters/${ClusterId}/upgrade`, "none", req, runtime), new UpgradeClusterResponse({}));
  }

  async attachInstances(ClusterId: string, request: AttachInstancesRequest): Promise<AttachInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.attachInstancesWithOptions(ClusterId, request, headers, runtime);
  }

  async attachInstancesWithOptions(ClusterId: string, request: AttachInstancesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<AttachInstancesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instances)) {
      body["instances"] = request.instances;
    }

    if (!Util.isUnset(request.keyPair)) {
      body["key_pair"] = request.keyPair;
    }

    if (!Util.isUnset(request.password)) {
      body["password"] = request.password;
    }

    if (!Util.isUnset(request.formatDisk)) {
      body["format_disk"] = request.formatDisk;
    }

    if (!Util.isUnset(request.keepInstanceName)) {
      body["keep_instance_name"] = request.keepInstanceName;
    }

    if (!Util.isUnset(request.isEdgeWorker)) {
      body["is_edge_worker"] = request.isEdgeWorker;
    }

    if (!Util.isUnset(request.nodepoolId)) {
      body["nodepool_id"] = request.nodepoolId;
    }

    if (!Util.isUnset(request.imageId)) {
      body["image_id"] = request.imageId;
    }

    if (!Util.isUnset(request.cpuPolicy)) {
      body["cpu_policy"] = request.cpuPolicy;
    }

    if (!Util.isUnset(request.userData)) {
      body["user_data"] = request.userData;
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

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    return $tea.cast<AttachInstancesResponse>(await this.doROARequest("AttachInstances", "2015-12-15", "HTTPS", "POST", "AK", `/clusters/${ClusterId}/attach`, "json", req, runtime), new AttachInstancesResponse({}));
  }

  async describeTemplates(request: DescribeTemplatesRequest): Promise<DescribeTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeTemplatesWithOptions(request, headers, runtime);
  }

  async describeTemplatesWithOptions(request: DescribeTemplatesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeTemplatesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.templateType)) {
      query["template_type"] = request.templateType;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["page_num"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["page_size"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DescribeTemplatesResponse>(await this.doROARequest("DescribeTemplates", "2015-12-15", "HTTPS", "GET", "AK", `/templates`, "json", req, runtime), new DescribeTemplatesResponse({}));
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
    return $tea.cast<PauseClusterUpgradeResponse>(await this.doROARequest("PauseClusterUpgrade", "2015-12-15", "HTTPS", "POST", "AK", `/api/v2/clusters/${ClusterId}/upgrade/pause`, "none", req, runtime), new PauseClusterUpgradeResponse({}));
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
    return $tea.cast<DeleteTemplateResponse>(await this.doROARequest("DeleteTemplate", "2015-12-15", "HTTPS", "DELETE", "AK", `/templates/${TemplateId}`, "none", req, runtime), new DeleteTemplateResponse({}));
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
    return $tea.cast<DescribeTemplateAttributeResponse>(await this.doROARequest("DescribeTemplateAttribute", "2015-12-15", "HTTPS", "GET", "AK", `/templates/${TemplateId}`, "array", req, runtime), new DescribeTemplateAttributeResponse({}));
  }

  async createTemplate(request: CreateTemplateRequest): Promise<CreateTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createTemplateWithOptions(request, headers, runtime);
  }

  async createTemplateWithOptions(request: CreateTemplateRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateTemplateResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.name)) {
      body["name"] = request.name;
    }

    if (!Util.isUnset(request.template)) {
      body["template"] = request.template;
    }

    if (!Util.isUnset(request.tags)) {
      body["tags"] = request.tags;
    }

    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.templateType)) {
      body["template_type"] = request.templateType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    return $tea.cast<CreateTemplateResponse>(await this.doROARequest("CreateTemplate", "2015-12-15", "HTTPS", "POST", "AK", `/templates`, "json", req, runtime), new CreateTemplateResponse({}));
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

    if (!Util.isUnset(request.state)) {
      query["state"] = request.state;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DescribeClusterNodesResponse>(await this.doROARequest("DescribeClusterNodes", "2015-12-15", "HTTPS", "GET", "AK", `/clusters/${ClusterId}/nodes`, "json", req, runtime), new DescribeClusterNodesResponse({}));
  }

  async deleteCluster(ClusterId: string, request: DeleteClusterRequest): Promise<DeleteClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteClusterWithOptions(ClusterId, request, headers, runtime);
  }

  async deleteClusterWithOptions(ClusterId: string, request: DeleteClusterRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteClusterResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.retainResources)) {
      query["retain_resources"] = request.retainResources;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.retainAllResources)) {
      body["retain_all_resources"] = request.retainAllResources;
    }

    if (!Util.isUnset(request.keepSlb)) {
      body["keep_slb"] = request.keepSlb;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    return $tea.cast<DeleteClusterResponse>(await this.doROARequestWithForm("DeleteCluster", "2015-12-15", "HTTPS", "DELETE", "AK", `/clusters/${ClusterId}`, "none", req, runtime), new DeleteClusterResponse({}));
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
    return $tea.cast<CancelComponentUpgradeResponse>(await this.doROARequest("CancelComponentUpgrade", "2015-12-15", "HTTPS", "POST", "AK", `/clusters/${clusterId}/components/{componentId}/cancel`, "none", req, runtime), new CancelComponentUpgradeResponse({}));
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
    return $tea.cast<DescribeClusterAddonsVersionResponse>(await this.doROARequest("DescribeClusterAddonsVersion", "2015-12-15", "HTTPS", "GET", "AK", `/clusters/${ClusterId}/components/version`, "json", req, runtime), new DescribeClusterAddonsVersionResponse({}));
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
    return $tea.cast<DescribeExternalAgentResponse>(await this.doROARequest("DescribeExternalAgent", "2015-12-15", "HTTPS", "GET", "AK", `/k8s/${ClusterId}/external/agent/deployment`, "json", req, runtime), new DescribeExternalAgentResponse({}));
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
    return $tea.cast<UnInstallClusterAddonsResponse>(await this.doROARequest("UnInstallClusterAddons", "2015-12-15", "HTTPS", "POST", "AK", `/clusters/${ClusterId}/components/uninstall`, "none", req, runtime), new UnInstallClusterAddonsResponse({}));
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
    return $tea.cast<ResumeComponentUpgradeResponse>(await this.doROARequest("ResumeComponentUpgrade", "2015-12-15", "HTTPS", "POST", "AK", `/clusters/${clusterid}/components/{componentid}/resume`, "none", req, runtime), new ResumeComponentUpgradeResponse({}));
  }

  async describeClustersV1(request: DescribeClustersV1Request): Promise<DescribeClustersV1Response> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeClustersV1WithOptions(request, headers, runtime);
  }

  async describeClustersV1WithOptions(request: DescribeClustersV1Request, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeClustersV1Response> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.name)) {
      query["name"] = request.name;
    }

    if (!Util.isUnset(request.clusterType)) {
      query["cluster_type"] = request.clusterType;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["page_size"] = request.pageSize;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["page_number"] = request.pageNumber;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DescribeClustersV1Response>(await this.doROARequest("DescribeClustersV1", "2015-12-15", "HTTPS", "GET", "AK", `/api/v1/clusters`, "json", req, runtime), new DescribeClustersV1Response({}));
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
    return $tea.cast<ModifyClusterConfigurationResponse>(await this.doROARequest("ModifyClusterConfiguration", "2015-12-15", "HTTPS", "PUT", "AK", `/clusters/${ClusterId}/configuration`, "none", req, runtime), new ModifyClusterConfigurationResponse({}));
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
    return $tea.cast<DescribeTaskInfoResponse>(await this.doROARequest("DescribeTaskInfo", "2015-12-15", "HTTPS", "GET", "AK", `/tasks/${taskId}`, "json", req, runtime), new DescribeTaskInfoResponse({}));
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
    return $tea.cast<CancelClusterUpgradeResponse>(await this.doROARequest("CancelClusterUpgrade", "2015-12-15", "HTTPS", "POST", "AK", `/api/v2/clusters/${ClusterId}/upgrade/cancel`, "none", req, runtime), new CancelClusterUpgradeResponse({}));
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
    return $tea.cast<UpdateTemplateResponse>(await this.doROARequest("UpdateTemplate", "2015-12-15", "HTTPS", "PUT", "AK", `/templates/${TemplateId}`, "none", req, runtime), new UpdateTemplateResponse({}));
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

  async deleteKubernetesTrigger(Id: string): Promise<DeleteKubernetesTriggerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteKubernetesTriggerWithOptions(Id, headers, runtime);
  }

  async deleteKubernetesTriggerWithOptions(Id: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteKubernetesTriggerResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<DeleteKubernetesTriggerResponse>(await this.doROARequest("DeleteKubernetesTrigger", "2015-12-15", "HTTPS", "DELETE", "AK", `/triggers/revoke/${Id}`, "none", req, runtime), new DeleteKubernetesTriggerResponse({}));
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

  async deleteClusterNodepool(ClusterId: string, NodepoolId: string): Promise<DeleteClusterNodepoolResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteClusterNodepoolWithOptions(ClusterId, NodepoolId, headers, runtime);
  }

  async deleteClusterNodepoolWithOptions(ClusterId: string, NodepoolId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteClusterNodepoolResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<DeleteClusterNodepoolResponse>(await this.doROARequest("DeleteClusterNodepool", "2015-12-15", "HTTPS", "DELETE", "AK", `/clusters/${ClusterId}/nodepools/{NodepoolId}`, "none", req, runtime), new DeleteClusterNodepoolResponse({}));
  }

  async describeClusterAddonsUpgradeStatus(ClusterId: string, request: DescribeClusterAddonsUpgradeStatusRequest): Promise<DescribeClusterAddonsUpgradeStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeClusterAddonsUpgradeStatusWithOptions(ClusterId, request, headers, runtime);
  }

  async describeClusterAddonsUpgradeStatusWithOptions(ClusterId: string, request: DescribeClusterAddonsUpgradeStatusRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeClusterAddonsUpgradeStatusResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.componentIds)) {
      query["componentIds"] = request.componentIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DescribeClusterAddonsUpgradeStatusResponse>(await this.doROARequest("DescribeClusterAddonsUpgradeStatus", "2015-12-15", "HTTPS", "GET", "AK", `/clusters/[ClusterId]/components/upgradestatus`, "json", req, runtime), new DescribeClusterAddonsUpgradeStatusResponse({}));
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

  async describeClusterNodePools(ClusterId: string): Promise<DescribeClusterNodePoolsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeClusterNodePoolsWithOptions(ClusterId, headers, runtime);
  }

  async describeClusterNodePoolsWithOptions(ClusterId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeClusterNodePoolsResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<DescribeClusterNodePoolsResponse>(await this.doROARequest("DescribeClusterNodePools", "2015-12-15", "HTTPS", "GET", "AK", `/clusters/${ClusterId}/nodepools`, "json", req, runtime), new DescribeClusterNodePoolsResponse({}));
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
    return $tea.cast<DescribeClusterV2UserKubeconfigResponse>(await this.doROARequest("DescribeClusterV2UserKubeconfig", "2015-12-15", "HTTPS", "GET", "AK", `/api/v2/k8s/${ClusterId}/user_config`, "json", req, runtime), new DescribeClusterV2UserKubeconfigResponse({}));
  }

  async scaleOutCluster(ClusterId: string, request: ScaleOutClusterRequest): Promise<ScaleOutClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.scaleOutClusterWithOptions(ClusterId, request, headers, runtime);
  }

  async scaleOutClusterWithOptions(ClusterId: string, request: ScaleOutClusterRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ScaleOutClusterResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.count)) {
      body["count"] = request.count;
    }

    if (!Util.isUnset(request.keyPair)) {
      body["key_pair"] = request.keyPair;
    }

    if (!Util.isUnset(request.loginPassword)) {
      body["login_password"] = request.loginPassword;
    }

    if (!Util.isUnset(request.vswitchIds)) {
      body["vswitch_ids"] = request.vswitchIds;
    }

    if (!Util.isUnset(request.workerInstanceChargeType)) {
      body["worker_instance_charge_type"] = request.workerInstanceChargeType;
    }

    if (!Util.isUnset(request.workerPeriod)) {
      body["worker_period"] = request.workerPeriod;
    }

    if (!Util.isUnset(request.workerPeriodUnit)) {
      body["worker_period_unit"] = request.workerPeriodUnit;
    }

    if (!Util.isUnset(request.workerAutoRenew)) {
      body["worker_auto_renew"] = request.workerAutoRenew;
    }

    if (!Util.isUnset(request.workerAutoRenewPeriod)) {
      body["worker_auto_renew_period"] = request.workerAutoRenewPeriod;
    }

    if (!Util.isUnset(request.workerInstanceTypes)) {
      body["worker_instance_types"] = request.workerInstanceTypes;
    }

    if (!Util.isUnset(request.workerSystemDiskCategory)) {
      body["worker_system_disk_category"] = request.workerSystemDiskCategory;
    }

    if (!Util.isUnset(request.workerSystemDiskSize)) {
      body["worker_system_disk_size"] = request.workerSystemDiskSize;
    }

    if (!Util.isUnset(request.workerDataDisks)) {
      body["worker_data_disks"] = request.workerDataDisks;
    }

    if (!Util.isUnset(request.cloudMonitorFlags)) {
      body["cloud_monitor_flags"] = request.cloudMonitorFlags;
    }

    if (!Util.isUnset(request.cpuPolicy)) {
      body["cpu_policy"] = request.cpuPolicy;
    }

    if (!Util.isUnset(request.imageId)) {
      body["image_id"] = request.imageId;
    }

    if (!Util.isUnset(request.userData)) {
      body["user_data"] = request.userData;
    }

    if (!Util.isUnset(request.rdsInstances)) {
      body["rds_instances"] = request.rdsInstances;
    }

    if (!Util.isUnset(request.tags)) {
      body["tags"] = request.tags;
    }

    if (!Util.isUnset(request.taints)) {
      body["taints"] = request.taints;
    }

    if (!Util.isUnset($tea.toMap(request.runtime))) {
      body["runtime"] = request.runtime;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    return $tea.cast<ScaleOutClusterResponse>(await this.doROARequest("ScaleOutCluster", "2015-12-15", "HTTPS", "POST", "AK", `/api/v2/clusters/${ClusterId}`, "json", req, runtime), new ScaleOutClusterResponse({}));
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

  async getKubernetesTrigger(ClusterId: string, request: GetKubernetesTriggerRequest): Promise<GetKubernetesTriggerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getKubernetesTriggerWithOptions(ClusterId, request, headers, runtime);
  }

  async getKubernetesTriggerWithOptions(ClusterId: string, request: GetKubernetesTriggerRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetKubernetesTriggerResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.action)) {
      query["action"] = request.action;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<GetKubernetesTriggerResponse>(await this.doROARequest("GetKubernetesTrigger", "2015-12-15", "HTTPS", "GET", "AK", `/triggers/${ClusterId}`, "array", req, runtime), new GetKubernetesTriggerResponse({}));
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
    return $tea.cast<GetUpgradeStatusResponse>(await this.doROARequest("GetUpgradeStatus", "2015-12-15", "HTTPS", "GET", "AK", `/api/v2/clusters/${ClusterId}/upgrade/status`, "json", req, runtime), new GetUpgradeStatusResponse({}));
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
    return $tea.cast<DescribeClusterResourcesResponse>(await this.doROARequest("DescribeClusterResources", "2015-12-15", "HTTPS", "GET", "AK", `/clusters/${ClusterId}/resources`, "array", req, runtime), new DescribeClusterResourcesResponse({}));
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

    if (!Util.isUnset(request.releaseNode)) {
      body["release_node"] = request.releaseNode;
    }

    if (!Util.isUnset(request.nodes)) {
      body["nodes"] = request.nodes;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    return $tea.cast<DeleteClusterNodesResponse>(await this.doROARequest("DeleteClusterNodes", "2015-12-15", "HTTPS", "POST", "AK", `/clusters/${ClusterId}/nodes`, "json", req, runtime), new DeleteClusterNodesResponse({}));
  }

}
