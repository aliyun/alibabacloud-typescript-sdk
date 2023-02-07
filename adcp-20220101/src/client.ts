// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AttachClusterToHubRequest extends $tea.Model {
  attachToMesh?: boolean;
  clusterId?: string;
  clusterIds?: string;
  static names(): { [key: string]: string } {
    return {
      attachToMesh: 'AttachToMesh',
      clusterId: 'ClusterId',
      clusterIds: 'ClusterIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachToMesh: 'boolean',
      clusterId: 'string',
      clusterIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachClusterToHubResponseBody extends $tea.Model {
  clusterId?: string;
  managedClusterIds?: string[];
  requestId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      managedClusterIds: 'ManagedClusterIds',
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      managedClusterIds: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachClusterToHubResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AttachClusterToHubResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AttachClusterToHubResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHubClusterRequest extends $tea.Model {
  apiServerPublicEip?: boolean;
  argoServerEnabled?: boolean;
  auditLogEnabled?: boolean;
  isEnterpriseSecurityGroup?: boolean;
  name?: string;
  priceLimit?: string;
  profile?: string;
  regionId?: string;
  vSwitches?: string;
  vpcId?: string;
  workflowScheduleMode?: string;
  static names(): { [key: string]: string } {
    return {
      apiServerPublicEip: 'ApiServerPublicEip',
      argoServerEnabled: 'ArgoServerEnabled',
      auditLogEnabled: 'AuditLogEnabled',
      isEnterpriseSecurityGroup: 'IsEnterpriseSecurityGroup',
      name: 'Name',
      priceLimit: 'PriceLimit',
      profile: 'Profile',
      regionId: 'RegionId',
      vSwitches: 'VSwitches',
      vpcId: 'VpcId',
      workflowScheduleMode: 'WorkflowScheduleMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiServerPublicEip: 'boolean',
      argoServerEnabled: 'boolean',
      auditLogEnabled: 'boolean',
      isEnterpriseSecurityGroup: 'boolean',
      name: 'string',
      priceLimit: 'string',
      profile: 'string',
      regionId: 'string',
      vSwitches: 'string',
      vpcId: 'string',
      workflowScheduleMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHubClusterResponseBody extends $tea.Model {
  clusterId?: string;
  requestId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      requestId: 'RequestId',
      taskId: 'TaskId',
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

export class CreateHubClusterResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateHubClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateHubClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHubClusterRequest extends $tea.Model {
  clusterId?: string;
  force?: boolean;
  retainResources?: string[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      force: 'Force',
      retainResources: 'RetainResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      force: 'boolean',
      retainResources: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHubClusterShrinkRequest extends $tea.Model {
  clusterId?: string;
  force?: boolean;
  retainResourcesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      force: 'Force',
      retainResourcesShrink: 'RetainResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      force: 'boolean',
      retainResourcesShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHubClusterResponseBody extends $tea.Model {
  clusterId?: string;
  requestId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      requestId: 'RequestId',
      taskId: 'TaskId',
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

export class DeleteHubClusterResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteHubClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteHubClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHubClusterDetailsRequest extends $tea.Model {
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

export class DescribeHubClusterDetailsResponseBody extends $tea.Model {
  cluster?: DescribeHubClusterDetailsResponseBodyCluster;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      cluster: 'Cluster',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cluster: DescribeHubClusterDetailsResponseBodyCluster,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHubClusterDetailsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeHubClusterDetailsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeHubClusterDetailsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHubClusterKubeconfigRequest extends $tea.Model {
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

export class DescribeHubClusterKubeconfigResponseBody extends $tea.Model {
  kubeconfig?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      kubeconfig: 'Kubeconfig',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      kubeconfig: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHubClusterKubeconfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeHubClusterKubeconfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeHubClusterKubeconfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHubClusterLogsRequest extends $tea.Model {
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

export class DescribeHubClusterLogsResponseBody extends $tea.Model {
  logs?: DescribeHubClusterLogsResponseBodyLogs[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      logs: 'Logs',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logs: { 'type': 'array', 'itemType': DescribeHubClusterLogsResponseBodyLogs },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHubClusterLogsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeHubClusterLogsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeHubClusterLogsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHubClustersRequest extends $tea.Model {
  profile?: string;
  static names(): { [key: string]: string } {
    return {
      profile: 'Profile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      profile: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHubClustersResponseBody extends $tea.Model {
  clusters?: DescribeHubClustersResponseBodyClusters[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clusters: 'Clusters',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusters: { 'type': 'array', 'itemType': DescribeHubClustersResponseBodyClusters },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHubClustersResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeHubClustersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeHubClustersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeManagedClustersRequest extends $tea.Model {
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

export class DescribeManagedClustersResponseBody extends $tea.Model {
  clusters?: DescribeManagedClustersResponseBodyClusters[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clusters: 'Clusters',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusters: { 'type': 'array', 'itemType': DescribeManagedClustersResponseBodyClusters },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeManagedClustersResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeManagedClustersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeManagedClustersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsRequest extends $tea.Model {
  language?: string;
  static names(): { [key: string]: string } {
    return {
      language: 'Language',
    };
  }

  static types(): { [key: string]: any } {
    return {
      language: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBody extends $tea.Model {
  regions?: DescribeRegionsResponseBodyRegions[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      regions: 'Regions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regions: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyRegions },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeRegionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeRegionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachClusterFromHubRequest extends $tea.Model {
  clusterId?: string;
  clusterIds?: string;
  detachFromMesh?: boolean;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterIds: 'ClusterIds',
      detachFromMesh: 'DetachFromMesh',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterIds: 'string',
      detachFromMesh: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachClusterFromHubResponseBody extends $tea.Model {
  clusterId?: string;
  managedClusterIds?: string[];
  requestId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      managedClusterIds: 'ManagedClusterIds',
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      managedClusterIds: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachClusterFromHubResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DetachClusterFromHubResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DetachClusterFromHubResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHubClusterFeatureRequest extends $tea.Model {
  apiServerEipId?: string;
  argoCDEnabled?: boolean;
  argoServerEnabled?: boolean;
  auditLogEnabled?: boolean;
  clusterId?: string;
  deletionProtection?: boolean;
  enableMesh?: boolean;
  name?: string;
  priceLimit?: string;
  publicApiServerEnabled?: boolean;
  vSwitches?: string[];
  workflowScheduleMode?: string;
  static names(): { [key: string]: string } {
    return {
      apiServerEipId: 'ApiServerEipId',
      argoCDEnabled: 'ArgoCDEnabled',
      argoServerEnabled: 'ArgoServerEnabled',
      auditLogEnabled: 'AuditLogEnabled',
      clusterId: 'ClusterId',
      deletionProtection: 'DeletionProtection',
      enableMesh: 'EnableMesh',
      name: 'Name',
      priceLimit: 'PriceLimit',
      publicApiServerEnabled: 'PublicApiServerEnabled',
      vSwitches: 'VSwitches',
      workflowScheduleMode: 'WorkflowScheduleMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiServerEipId: 'string',
      argoCDEnabled: 'boolean',
      argoServerEnabled: 'boolean',
      auditLogEnabled: 'boolean',
      clusterId: 'string',
      deletionProtection: 'boolean',
      enableMesh: 'boolean',
      name: 'string',
      priceLimit: 'string',
      publicApiServerEnabled: 'boolean',
      vSwitches: { 'type': 'array', 'itemType': 'string' },
      workflowScheduleMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHubClusterFeatureShrinkRequest extends $tea.Model {
  apiServerEipId?: string;
  argoCDEnabled?: boolean;
  argoServerEnabled?: boolean;
  auditLogEnabled?: boolean;
  clusterId?: string;
  deletionProtection?: boolean;
  enableMesh?: boolean;
  name?: string;
  priceLimit?: string;
  publicApiServerEnabled?: boolean;
  vSwitchesShrink?: string;
  workflowScheduleMode?: string;
  static names(): { [key: string]: string } {
    return {
      apiServerEipId: 'ApiServerEipId',
      argoCDEnabled: 'ArgoCDEnabled',
      argoServerEnabled: 'ArgoServerEnabled',
      auditLogEnabled: 'AuditLogEnabled',
      clusterId: 'ClusterId',
      deletionProtection: 'DeletionProtection',
      enableMesh: 'EnableMesh',
      name: 'Name',
      priceLimit: 'PriceLimit',
      publicApiServerEnabled: 'PublicApiServerEnabled',
      vSwitchesShrink: 'VSwitches',
      workflowScheduleMode: 'WorkflowScheduleMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiServerEipId: 'string',
      argoCDEnabled: 'boolean',
      argoServerEnabled: 'boolean',
      auditLogEnabled: 'boolean',
      clusterId: 'string',
      deletionProtection: 'boolean',
      enableMesh: 'boolean',
      name: 'string',
      priceLimit: 'string',
      publicApiServerEnabled: 'boolean',
      vSwitchesShrink: 'string',
      workflowScheduleMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHubClusterFeatureResponseBody extends $tea.Model {
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

export class UpdateHubClusterFeatureResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateHubClusterFeatureResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateHubClusterFeatureResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHubClusterDetailsResponseBodyClusterApiServer extends $tea.Model {
  apiServerEipId?: string;
  enabledPublic?: boolean;
  loadBalancerId?: string;
  static names(): { [key: string]: string } {
    return {
      apiServerEipId: 'ApiServerEipId',
      enabledPublic: 'EnabledPublic',
      loadBalancerId: 'LoadBalancerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiServerEipId: 'string',
      enabledPublic: 'boolean',
      loadBalancerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHubClusterDetailsResponseBodyClusterClusterInfo extends $tea.Model {
  clusterId?: string;
  clusterSpec?: string;
  creationTime?: string;
  errorMessage?: string;
  name?: string;
  profile?: string;
  regionId?: string;
  state?: string;
  updateTime?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterSpec: 'ClusterSpec',
      creationTime: 'CreationTime',
      errorMessage: 'ErrorMessage',
      name: 'Name',
      profile: 'Profile',
      regionId: 'RegionId',
      state: 'State',
      updateTime: 'UpdateTime',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterSpec: 'string',
      creationTime: 'string',
      errorMessage: 'string',
      name: 'string',
      profile: 'string',
      regionId: 'string',
      state: 'string',
      updateTime: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHubClusterDetailsResponseBodyClusterConditions extends $tea.Model {
  message?: string;
  reason?: string;
  status?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      reason: 'Reason',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      reason: 'string',
      status: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHubClusterDetailsResponseBodyClusterEndpoints extends $tea.Model {
  intranetApiServerEndpoint?: string;
  publicApiServerEndpoint?: string;
  static names(): { [key: string]: string } {
    return {
      intranetApiServerEndpoint: 'IntranetApiServerEndpoint',
      publicApiServerEndpoint: 'PublicApiServerEndpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      intranetApiServerEndpoint: 'string',
      publicApiServerEndpoint: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHubClusterDetailsResponseBodyClusterLogConfig extends $tea.Model {
  enableLog?: boolean;
  logProject?: string;
  logStoreTTL?: string;
  static names(): { [key: string]: string } {
    return {
      enableLog: 'EnableLog',
      logProject: 'LogProject',
      logStoreTTL: 'LogStoreTTL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableLog: 'boolean',
      logProject: 'string',
      logStoreTTL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHubClusterDetailsResponseBodyClusterMeshConfig extends $tea.Model {
  enableMesh?: boolean;
  meshId?: string;
  static names(): { [key: string]: string } {
    return {
      enableMesh: 'EnableMesh',
      meshId: 'MeshId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableMesh: 'boolean',
      meshId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHubClusterDetailsResponseBodyClusterNetwork extends $tea.Model {
  clusterDomain?: string;
  IPStack?: string;
  securityGroupIDs?: string[];
  vSwitches?: string[];
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterDomain: 'ClusterDomain',
      IPStack: 'IPStack',
      securityGroupIDs: 'SecurityGroupIDs',
      vSwitches: 'VSwitches',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterDomain: 'string',
      IPStack: 'string',
      securityGroupIDs: { 'type': 'array', 'itemType': 'string' },
      vSwitches: { 'type': 'array', 'itemType': 'string' },
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHubClusterDetailsResponseBodyClusterWorkflowConfigWorkflowUnitsVSwitches extends $tea.Model {
  vswitchId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      vswitchId: 'VswitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vswitchId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHubClusterDetailsResponseBodyClusterWorkflowConfigWorkflowUnits extends $tea.Model {
  regionId?: string;
  vSwitches?: DescribeHubClusterDetailsResponseBodyClusterWorkflowConfigWorkflowUnitsVSwitches[];
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      vSwitches: 'VSwitches',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      vSwitches: { 'type': 'array', 'itemType': DescribeHubClusterDetailsResponseBodyClusterWorkflowConfigWorkflowUnitsVSwitches },
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHubClusterDetailsResponseBodyClusterWorkflowConfig extends $tea.Model {
  argoServerEnabled?: boolean;
  priceLimit?: string;
  workflowScheduleMode?: string;
  workflowUnits?: DescribeHubClusterDetailsResponseBodyClusterWorkflowConfigWorkflowUnits[];
  static names(): { [key: string]: string } {
    return {
      argoServerEnabled: 'ArgoServerEnabled',
      priceLimit: 'PriceLimit',
      workflowScheduleMode: 'WorkflowScheduleMode',
      workflowUnits: 'WorkflowUnits',
    };
  }

  static types(): { [key: string]: any } {
    return {
      argoServerEnabled: 'boolean',
      priceLimit: 'string',
      workflowScheduleMode: 'string',
      workflowUnits: { 'type': 'array', 'itemType': DescribeHubClusterDetailsResponseBodyClusterWorkflowConfigWorkflowUnits },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHubClusterDetailsResponseBodyCluster extends $tea.Model {
  apiServer?: DescribeHubClusterDetailsResponseBodyClusterApiServer;
  clusterInfo?: DescribeHubClusterDetailsResponseBodyClusterClusterInfo;
  conditions?: DescribeHubClusterDetailsResponseBodyClusterConditions[];
  endpoints?: DescribeHubClusterDetailsResponseBodyClusterEndpoints;
  logConfig?: DescribeHubClusterDetailsResponseBodyClusterLogConfig;
  meshConfig?: DescribeHubClusterDetailsResponseBodyClusterMeshConfig;
  network?: DescribeHubClusterDetailsResponseBodyClusterNetwork;
  workflowConfig?: DescribeHubClusterDetailsResponseBodyClusterWorkflowConfig;
  static names(): { [key: string]: string } {
    return {
      apiServer: 'ApiServer',
      clusterInfo: 'ClusterInfo',
      conditions: 'Conditions',
      endpoints: 'Endpoints',
      logConfig: 'LogConfig',
      meshConfig: 'MeshConfig',
      network: 'Network',
      workflowConfig: 'WorkflowConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiServer: DescribeHubClusterDetailsResponseBodyClusterApiServer,
      clusterInfo: DescribeHubClusterDetailsResponseBodyClusterClusterInfo,
      conditions: { 'type': 'array', 'itemType': DescribeHubClusterDetailsResponseBodyClusterConditions },
      endpoints: DescribeHubClusterDetailsResponseBodyClusterEndpoints,
      logConfig: DescribeHubClusterDetailsResponseBodyClusterLogConfig,
      meshConfig: DescribeHubClusterDetailsResponseBodyClusterMeshConfig,
      network: DescribeHubClusterDetailsResponseBodyClusterNetwork,
      workflowConfig: DescribeHubClusterDetailsResponseBodyClusterWorkflowConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHubClusterLogsResponseBodyLogs extends $tea.Model {
  clusterId?: string;
  clusterLog?: string;
  creationTime?: string;
  logLevel?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterLog: 'ClusterLog',
      creationTime: 'CreationTime',
      logLevel: 'LogLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterLog: 'string',
      creationTime: 'string',
      logLevel: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHubClustersResponseBodyClustersApiServer extends $tea.Model {
  apiServerEipId?: string;
  enabledPublic?: boolean;
  loadBalancerId?: string;
  static names(): { [key: string]: string } {
    return {
      apiServerEipId: 'ApiServerEipId',
      enabledPublic: 'EnabledPublic',
      loadBalancerId: 'LoadBalancerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiServerEipId: 'string',
      enabledPublic: 'boolean',
      loadBalancerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHubClustersResponseBodyClustersClusterInfo extends $tea.Model {
  clusterId?: string;
  clusterSpec?: string;
  creationTime?: string;
  errorMessage?: string;
  name?: string;
  profile?: string;
  regionId?: string;
  state?: string;
  updateTime?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterSpec: 'ClusterSpec',
      creationTime: 'CreationTime',
      errorMessage: 'ErrorMessage',
      name: 'Name',
      profile: 'Profile',
      regionId: 'RegionId',
      state: 'State',
      updateTime: 'UpdateTime',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterSpec: 'string',
      creationTime: 'string',
      errorMessage: 'string',
      name: 'string',
      profile: 'string',
      regionId: 'string',
      state: 'string',
      updateTime: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHubClustersResponseBodyClustersConditions extends $tea.Model {
  message?: string;
  reason?: string;
  status?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      reason: 'Reason',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      reason: 'string',
      status: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHubClustersResponseBodyClustersEndpoints extends $tea.Model {
  intranetApiServerEndpoint?: string;
  publicApiServerEndpoint?: string;
  static names(): { [key: string]: string } {
    return {
      intranetApiServerEndpoint: 'IntranetApiServerEndpoint',
      publicApiServerEndpoint: 'PublicApiServerEndpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      intranetApiServerEndpoint: 'string',
      publicApiServerEndpoint: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHubClustersResponseBodyClustersLogConfig extends $tea.Model {
  enableLog?: boolean;
  logProject?: string;
  logStoreTTL?: string;
  static names(): { [key: string]: string } {
    return {
      enableLog: 'EnableLog',
      logProject: 'LogProject',
      logStoreTTL: 'LogStoreTTL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableLog: 'boolean',
      logProject: 'string',
      logStoreTTL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHubClustersResponseBodyClustersMeshConfig extends $tea.Model {
  enableMesh?: boolean;
  meshId?: string;
  static names(): { [key: string]: string } {
    return {
      enableMesh: 'EnableMesh',
      meshId: 'MeshId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableMesh: 'boolean',
      meshId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHubClustersResponseBodyClustersNetwork extends $tea.Model {
  clusterDomain?: string;
  securityGroupIDs?: string[];
  vSwitches?: string[];
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterDomain: 'ClusterDomain',
      securityGroupIDs: 'SecurityGroupIDs',
      vSwitches: 'VSwitches',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterDomain: 'string',
      securityGroupIDs: { 'type': 'array', 'itemType': 'string' },
      vSwitches: { 'type': 'array', 'itemType': 'string' },
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHubClustersResponseBodyClusters extends $tea.Model {
  apiServer?: DescribeHubClustersResponseBodyClustersApiServer;
  clusterInfo?: DescribeHubClustersResponseBodyClustersClusterInfo;
  conditions?: DescribeHubClustersResponseBodyClustersConditions[];
  endpoints?: DescribeHubClustersResponseBodyClustersEndpoints;
  logConfig?: DescribeHubClustersResponseBodyClustersLogConfig;
  meshConfig?: DescribeHubClustersResponseBodyClustersMeshConfig;
  network?: DescribeHubClustersResponseBodyClustersNetwork;
  static names(): { [key: string]: string } {
    return {
      apiServer: 'ApiServer',
      clusterInfo: 'ClusterInfo',
      conditions: 'Conditions',
      endpoints: 'Endpoints',
      logConfig: 'LogConfig',
      meshConfig: 'MeshConfig',
      network: 'Network',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiServer: DescribeHubClustersResponseBodyClustersApiServer,
      clusterInfo: DescribeHubClustersResponseBodyClustersClusterInfo,
      conditions: { 'type': 'array', 'itemType': DescribeHubClustersResponseBodyClustersConditions },
      endpoints: DescribeHubClustersResponseBodyClustersEndpoints,
      logConfig: DescribeHubClustersResponseBodyClustersLogConfig,
      meshConfig: DescribeHubClustersResponseBodyClustersMeshConfig,
      network: DescribeHubClustersResponseBodyClustersNetwork,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeManagedClustersResponseBodyClustersCluster extends $tea.Model {
  clusterID?: string;
  clusterSpec?: string;
  clusterType?: string;
  created?: string;
  currentVersion?: string;
  initVersion?: string;
  name?: string;
  profile?: string;
  region?: string;
  resourceGroupId?: string;
  state?: string;
  updated?: string;
  vSwitchID?: string;
  vpcID?: string;
  static names(): { [key: string]: string } {
    return {
      clusterID: 'ClusterID',
      clusterSpec: 'ClusterSpec',
      clusterType: 'ClusterType',
      created: 'Created',
      currentVersion: 'CurrentVersion',
      initVersion: 'InitVersion',
      name: 'Name',
      profile: 'Profile',
      region: 'Region',
      resourceGroupId: 'ResourceGroupId',
      state: 'State',
      updated: 'Updated',
      vSwitchID: 'VSwitchID',
      vpcID: 'VpcID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterID: 'string',
      clusterSpec: 'string',
      clusterType: 'string',
      created: 'string',
      currentVersion: 'string',
      initVersion: 'string',
      name: 'string',
      profile: 'string',
      region: 'string',
      resourceGroupId: 'string',
      state: 'string',
      updated: 'string',
      vSwitchID: 'string',
      vpcID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeManagedClustersResponseBodyClustersMeshStatus extends $tea.Model {
  inMesh?: boolean;
  static names(): { [key: string]: string } {
    return {
      inMesh: 'InMesh',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inMesh: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeManagedClustersResponseBodyClustersStatus extends $tea.Model {
  message?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeManagedClustersResponseBodyClusters extends $tea.Model {
  cluster?: DescribeManagedClustersResponseBodyClustersCluster;
  meshStatus?: DescribeManagedClustersResponseBodyClustersMeshStatus;
  status?: DescribeManagedClustersResponseBodyClustersStatus;
  static names(): { [key: string]: string } {
    return {
      cluster: 'Cluster',
      meshStatus: 'MeshStatus',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cluster: DescribeManagedClustersResponseBodyClustersCluster,
      meshStatus: DescribeManagedClustersResponseBodyClustersMeshStatus,
      status: DescribeManagedClustersResponseBodyClustersStatus,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegions extends $tea.Model {
  localName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      localName: 'LocalName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localName: 'string',
      regionId: 'string',
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
    this._endpointRule = "central";
    this._endpointMap = {
      'cn-beijing': "adcp.cn-beijing.aliyuncs.com",
      'cn-zhangjiakou': "adcp.cn-zhangjiakou.aliyuncs.com",
      'cn-hangzhou': "adcp.cn-hangzhou.aliyuncs.com",
      'cn-shanghai': "adcp.cn-shanghai.aliyuncs.com",
      'cn-shenzhen': "adcp.cn-shenzhen.aliyuncs.com",
      'cn-heyuan': "adcp.cn-heyuan.aliyuncs.com",
      'cn-hongkong': "adcp.cn-hongkong.aliyuncs.com",
      'ap-northeast-1': "adcp.ap-northeast-1.aliyuncs.com",
      'ap-southeast-1': "adcp.ap-southeast-1.aliyuncs.com",
      'ap-southeast-5': "adcp.ap-southeast-5.aliyuncs.com",
      'ap-south-1': "adcp.ap-south-1.aliyuncs.com",
      'ap-southeast-2': "adcp.ap-southeast-2.aliyuncs.com",
      'ap-southeast-3': "adcp.ap-southeast-3.aliyuncs.com",
      'cn-chengdu': "adcp-vpc.cn-chengdu.aliyuncs.com",
      'cn-huhehaote': "adcp.cn-huhehaote.aliyuncs.com",
      'cn-qingdao': "adcp.cn-qingdao.aliyuncs.com",
      'cn-shanghai-finance-1': "adcp-vpc.cn-shanghai-finance-1.aliyuncs.com",
      'cn-wulanchabu': "adcp.cn-wulanchabu.aliyuncs.com",
      'eu-central-1': "adcp.eu-central-1.aliyuncs.com",
      'eu-west-1': "adcp-vpc.eu-west-1.aliyuncs.com",
      'me-east-1': "adcp.me-east-1.aliyuncs.com",
      'us-east-1': "adcp.us-east-1.aliyuncs.com",
      'us-west-1': "adcp.us-west-1.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("adcp", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async attachClusterToHubWithOptions(request: AttachClusterToHubRequest, runtime: $Util.RuntimeOptions): Promise<AttachClusterToHubResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.attachToMesh)) {
      query["AttachToMesh"] = request.attachToMesh;
    }

    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clusterIds)) {
      body["ClusterIds"] = request.clusterIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AttachClusterToHub",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AttachClusterToHubResponse>(await this.callApi(params, req, runtime), new AttachClusterToHubResponse({}));
  }

  async attachClusterToHub(request: AttachClusterToHubRequest): Promise<AttachClusterToHubResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.attachClusterToHubWithOptions(request, runtime);
  }

  async createHubClusterWithOptions(request: CreateHubClusterRequest, runtime: $Util.RuntimeOptions): Promise<CreateHubClusterResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.apiServerPublicEip)) {
      body["ApiServerPublicEip"] = request.apiServerPublicEip;
    }

    if (!Util.isUnset(request.argoServerEnabled)) {
      body["ArgoServerEnabled"] = request.argoServerEnabled;
    }

    if (!Util.isUnset(request.auditLogEnabled)) {
      body["AuditLogEnabled"] = request.auditLogEnabled;
    }

    if (!Util.isUnset(request.isEnterpriseSecurityGroup)) {
      body["IsEnterpriseSecurityGroup"] = request.isEnterpriseSecurityGroup;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.priceLimit)) {
      body["PriceLimit"] = request.priceLimit;
    }

    if (!Util.isUnset(request.profile)) {
      body["Profile"] = request.profile;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.vSwitches)) {
      body["VSwitches"] = request.vSwitches;
    }

    if (!Util.isUnset(request.vpcId)) {
      body["VpcId"] = request.vpcId;
    }

    if (!Util.isUnset(request.workflowScheduleMode)) {
      body["WorkflowScheduleMode"] = request.workflowScheduleMode;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateHubCluster",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateHubClusterResponse>(await this.callApi(params, req, runtime), new CreateHubClusterResponse({}));
  }

  async createHubCluster(request: CreateHubClusterRequest): Promise<CreateHubClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createHubClusterWithOptions(request, runtime);
  }

  async deleteHubClusterWithOptions(tmpReq: DeleteHubClusterRequest, runtime: $Util.RuntimeOptions): Promise<DeleteHubClusterResponse> {
    Util.validateModel(tmpReq);
    let request = new DeleteHubClusterShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.retainResources)) {
      request.retainResourcesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.retainResources, "RetainResources", "json");
    }

    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.force)) {
      query["Force"] = request.force;
    }

    if (!Util.isUnset(request.retainResourcesShrink)) {
      query["RetainResources"] = request.retainResourcesShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteHubCluster",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteHubClusterResponse>(await this.callApi(params, req, runtime), new DeleteHubClusterResponse({}));
  }

  async deleteHubCluster(request: DeleteHubClusterRequest): Promise<DeleteHubClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteHubClusterWithOptions(request, runtime);
  }

  async describeHubClusterDetailsWithOptions(request: DescribeHubClusterDetailsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeHubClusterDetailsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeHubClusterDetails",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeHubClusterDetailsResponse>(await this.callApi(params, req, runtime), new DescribeHubClusterDetailsResponse({}));
  }

  async describeHubClusterDetails(request: DescribeHubClusterDetailsRequest): Promise<DescribeHubClusterDetailsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeHubClusterDetailsWithOptions(request, runtime);
  }

  async describeHubClusterKubeconfigWithOptions(request: DescribeHubClusterKubeconfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeHubClusterKubeconfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.privateIpAddress)) {
      query["PrivateIpAddress"] = request.privateIpAddress;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeHubClusterKubeconfig",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeHubClusterKubeconfigResponse>(await this.callApi(params, req, runtime), new DescribeHubClusterKubeconfigResponse({}));
  }

  async describeHubClusterKubeconfig(request: DescribeHubClusterKubeconfigRequest): Promise<DescribeHubClusterKubeconfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeHubClusterKubeconfigWithOptions(request, runtime);
  }

  async describeHubClusterLogsWithOptions(request: DescribeHubClusterLogsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeHubClusterLogsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeHubClusterLogs",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeHubClusterLogsResponse>(await this.callApi(params, req, runtime), new DescribeHubClusterLogsResponse({}));
  }

  async describeHubClusterLogs(request: DescribeHubClusterLogsRequest): Promise<DescribeHubClusterLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeHubClusterLogsWithOptions(request, runtime);
  }

  async describeHubClustersWithOptions(request: DescribeHubClustersRequest, runtime: $Util.RuntimeOptions): Promise<DescribeHubClustersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.profile)) {
      query["Profile"] = request.profile;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeHubClusters",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeHubClustersResponse>(await this.callApi(params, req, runtime), new DescribeHubClustersResponse({}));
  }

  async describeHubClusters(request: DescribeHubClustersRequest): Promise<DescribeHubClustersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeHubClustersWithOptions(request, runtime);
  }

  async describeManagedClustersWithOptions(request: DescribeManagedClustersRequest, runtime: $Util.RuntimeOptions): Promise<DescribeManagedClustersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeManagedClusters",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeManagedClustersResponse>(await this.callApi(params, req, runtime), new DescribeManagedClustersResponse({}));
  }

  async describeManagedClusters(request: DescribeManagedClustersRequest): Promise<DescribeManagedClustersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeManagedClustersWithOptions(request, runtime);
  }

  async describeRegionsWithOptions(request: DescribeRegionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRegions",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRegionsResponse>(await this.callApi(params, req, runtime), new DescribeRegionsResponse({}));
  }

  async describeRegions(request: DescribeRegionsRequest): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  async detachClusterFromHubWithOptions(request: DetachClusterFromHubRequest, runtime: $Util.RuntimeOptions): Promise<DetachClusterFromHubResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.detachFromMesh)) {
      query["DetachFromMesh"] = request.detachFromMesh;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clusterIds)) {
      body["ClusterIds"] = request.clusterIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DetachClusterFromHub",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DetachClusterFromHubResponse>(await this.callApi(params, req, runtime), new DetachClusterFromHubResponse({}));
  }

  async detachClusterFromHub(request: DetachClusterFromHubRequest): Promise<DetachClusterFromHubResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detachClusterFromHubWithOptions(request, runtime);
  }

  async updateHubClusterFeatureWithOptions(tmpReq: UpdateHubClusterFeatureRequest, runtime: $Util.RuntimeOptions): Promise<UpdateHubClusterFeatureResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateHubClusterFeatureShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.vSwitches)) {
      request.vSwitchesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.vSwitches, "VSwitches", "json");
    }

    let query = { };
    if (!Util.isUnset(request.apiServerEipId)) {
      query["ApiServerEipId"] = request.apiServerEipId;
    }

    if (!Util.isUnset(request.argoCDEnabled)) {
      query["ArgoCDEnabled"] = request.argoCDEnabled;
    }

    if (!Util.isUnset(request.argoServerEnabled)) {
      query["ArgoServerEnabled"] = request.argoServerEnabled;
    }

    if (!Util.isUnset(request.auditLogEnabled)) {
      query["AuditLogEnabled"] = request.auditLogEnabled;
    }

    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.deletionProtection)) {
      query["DeletionProtection"] = request.deletionProtection;
    }

    if (!Util.isUnset(request.enableMesh)) {
      query["EnableMesh"] = request.enableMesh;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.priceLimit)) {
      query["PriceLimit"] = request.priceLimit;
    }

    if (!Util.isUnset(request.publicApiServerEnabled)) {
      query["PublicApiServerEnabled"] = request.publicApiServerEnabled;
    }

    if (!Util.isUnset(request.vSwitchesShrink)) {
      query["VSwitches"] = request.vSwitchesShrink;
    }

    if (!Util.isUnset(request.workflowScheduleMode)) {
      query["WorkflowScheduleMode"] = request.workflowScheduleMode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateHubClusterFeature",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateHubClusterFeatureResponse>(await this.callApi(params, req, runtime), new UpdateHubClusterFeatureResponse({}));
  }

  async updateHubClusterFeature(request: UpdateHubClusterFeatureRequest): Promise<UpdateHubClusterFeatureResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateHubClusterFeatureWithOptions(request, runtime);
  }

}
