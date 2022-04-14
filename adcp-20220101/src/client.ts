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
  clusterId?: string;
  clusterIds?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterIds: 'ClusterIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      managedClusterIds: 'ManagedClusterIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      managedClusterIds: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachClusterToHubResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AttachClusterToHubResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AttachClusterToHubResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHubClusterRequest extends $tea.Model {
  apiServerPublicEip?: boolean;
  auditLogEnabled?: boolean;
  auditLogProject?: string;
  auditLogStoreTTL?: string;
  controlPlaneLogEnabled?: boolean;
  controlPlaneLogProject?: string;
  controlPlaneLogTTL?: string;
  isEnterpriseSecurityGroup?: boolean;
  name?: string;
  regionId?: string;
  vSwitches?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      apiServerPublicEip: 'ApiServerPublicEip',
      auditLogEnabled: 'AuditLogEnabled',
      auditLogProject: 'AuditLogProject',
      auditLogStoreTTL: 'AuditLogStoreTTL',
      controlPlaneLogEnabled: 'ControlPlaneLogEnabled',
      controlPlaneLogProject: 'ControlPlaneLogProject',
      controlPlaneLogTTL: 'ControlPlaneLogTTL',
      isEnterpriseSecurityGroup: 'IsEnterpriseSecurityGroup',
      name: 'Name',
      regionId: 'RegionId',
      vSwitches: 'VSwitches',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiServerPublicEip: 'boolean',
      auditLogEnabled: 'boolean',
      auditLogProject: 'string',
      auditLogStoreTTL: 'string',
      controlPlaneLogEnabled: 'boolean',
      controlPlaneLogProject: 'string',
      controlPlaneLogTTL: 'string',
      isEnterpriseSecurityGroup: 'boolean',
      name: 'string',
      regionId: 'string',
      vSwitches: 'string',
      vpcId: 'string',
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
  body: CreateHubClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      force: 'Force',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      force: 'boolean',
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
  body: DeleteHubClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: DescribeHubClusterDetailsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: DescribeHubClusterKubeconfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: DescribeHubClusterLogsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeHubClusterLogsResponseBody,
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
  body: DescribeHubClustersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: DescribeManagedClustersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeManagedClustersResponseBody,
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
  body: DescribeRegionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterIds: 'ClusterIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterIds: 'string',
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
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      managedClusterIds: 'ManagedClusterIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      managedClusterIds: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachClusterFromHubResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DetachClusterFromHubResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DetachClusterFromHubResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHubClusterDetailsResponseBodyClusterApiServer extends $tea.Model {
  enabledPublic?: boolean;
  loadBalancerId?: string;
  static names(): { [key: string]: string } {
    return {
      enabledPublic: 'EnabledPublic',
      loadBalancerId: 'LoadBalancerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class DescribeHubClusterDetailsResponseBodyCluster extends $tea.Model {
  apiServer?: DescribeHubClusterDetailsResponseBodyClusterApiServer;
  clusterInfo?: DescribeHubClusterDetailsResponseBodyClusterClusterInfo;
  endpoints?: DescribeHubClusterDetailsResponseBodyClusterEndpoints;
  network?: DescribeHubClusterDetailsResponseBodyClusterNetwork;
  static names(): { [key: string]: string } {
    return {
      apiServer: 'ApiServer',
      clusterInfo: 'ClusterInfo',
      endpoints: 'Endpoints',
      network: 'Network',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiServer: DescribeHubClusterDetailsResponseBodyClusterApiServer,
      clusterInfo: DescribeHubClusterDetailsResponseBodyClusterClusterInfo,
      endpoints: DescribeHubClusterDetailsResponseBodyClusterEndpoints,
      network: DescribeHubClusterDetailsResponseBodyClusterNetwork,
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
  enabledPublic?: boolean;
  loadBalancerId?: string;
  static names(): { [key: string]: string } {
    return {
      enabledPublic: 'EnabledPublic',
      loadBalancerId: 'LoadBalancerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
  endpoints?: DescribeHubClustersResponseBodyClustersEndpoints;
  network?: DescribeHubClustersResponseBodyClustersNetwork;
  static names(): { [key: string]: string } {
    return {
      apiServer: 'ApiServer',
      clusterInfo: 'ClusterInfo',
      endpoints: 'Endpoints',
      network: 'Network',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiServer: DescribeHubClustersResponseBodyClustersApiServer,
      clusterInfo: DescribeHubClustersResponseBodyClustersClusterInfo,
      endpoints: DescribeHubClustersResponseBodyClustersEndpoints,
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
  status?: DescribeManagedClustersResponseBodyClustersStatus;
  static names(): { [key: string]: string } {
    return {
      cluster: 'Cluster',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cluster: DescribeManagedClustersResponseBodyClustersCluster,
      status: DescribeManagedClustersResponseBodyClustersStatus,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegions extends $tea.Model {
  localName?: string;
  regionEndpoint?: string;
  regionId?: string;
  regionVpcEndpoint?: string;
  static names(): { [key: string]: string } {
    return {
      localName: 'LocalName',
      regionEndpoint: 'RegionEndpoint',
      regionId: 'RegionId',
      regionVpcEndpoint: 'RegionVpcEndpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localName: 'string',
      regionEndpoint: 'string',
      regionId: 'string',
      regionVpcEndpoint: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "central";
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

    if (!Util.isUnset(request.auditLogEnabled)) {
      body["AuditLogEnabled"] = request.auditLogEnabled;
    }

    if (!Util.isUnset(request.auditLogProject)) {
      body["AuditLogProject"] = request.auditLogProject;
    }

    if (!Util.isUnset(request.auditLogStoreTTL)) {
      body["AuditLogStoreTTL"] = request.auditLogStoreTTL;
    }

    if (!Util.isUnset(request.controlPlaneLogEnabled)) {
      body["ControlPlaneLogEnabled"] = request.controlPlaneLogEnabled;
    }

    if (!Util.isUnset(request.controlPlaneLogProject)) {
      body["ControlPlaneLogProject"] = request.controlPlaneLogProject;
    }

    if (!Util.isUnset(request.controlPlaneLogTTL)) {
      body["ControlPlaneLogTTL"] = request.controlPlaneLogTTL;
    }

    if (!Util.isUnset(request.isEnterpriseSecurityGroup)) {
      body["IsEnterpriseSecurityGroup"] = request.isEnterpriseSecurityGroup;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
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

  async deleteHubClusterWithOptions(request: DeleteHubClusterRequest, runtime: $Util.RuntimeOptions): Promise<DeleteHubClusterResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.force)) {
      query["Force"] = request.force;
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

  async describeHubClustersWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeHubClustersResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
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

  async describeHubClusters(): Promise<DescribeHubClustersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeHubClustersWithOptions(runtime);
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

  async describeRegionsWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
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

  async describeRegions(): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(runtime);
  }

  async detachClusterFromHubWithOptions(request: DetachClusterFromHubRequest, runtime: $Util.RuntimeOptions): Promise<DetachClusterFromHubResponse> {
    Util.validateModel(request);
    let query = { };
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

}
