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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AttachClusterToHubResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  resourceGroupID?: string;
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
      resourceGroupID: 'ResourceGroupID',
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
      resourceGroupID: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateHubClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteHubClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class DeletePolicyInstanceRequest extends $tea.Model {
  clusterId?: string;
  clusterIds?: string[];
  policyName?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterIds: 'ClusterIds',
      policyName: 'PolicyName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterIds: { 'type': 'array', 'itemType': 'string' },
      policyName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePolicyInstanceShrinkRequest extends $tea.Model {
  clusterId?: string;
  clusterIdsShrink?: string;
  policyName?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterIdsShrink: 'ClusterIds',
      policyName: 'PolicyName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterIdsShrink: 'string',
      policyName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePolicyInstanceResponseBody extends $tea.Model {
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

export class DeleteUserPermissionRequest extends $tea.Model {
  clusterId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserPermissionResponseBody extends $tea.Model {
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

export class DeleteUserPermissionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteUserPermissionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteUserPermissionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployPolicyInstanceRequest extends $tea.Model {
  clusterId?: string;
  clusterIds?: string[];
  namespaces?: string[];
  policyAction?: string;
  policyName?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterIds: 'ClusterIds',
      namespaces: 'Namespaces',
      policyAction: 'PolicyAction',
      policyName: 'PolicyName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterIds: { 'type': 'array', 'itemType': 'string' },
      namespaces: { 'type': 'array', 'itemType': 'string' },
      policyAction: 'string',
      policyName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployPolicyInstanceShrinkRequest extends $tea.Model {
  clusterId?: string;
  clusterIdsShrink?: string;
  namespacesShrink?: string;
  policyAction?: string;
  policyName?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterIdsShrink: 'ClusterIds',
      namespacesShrink: 'Namespaces',
      policyAction: 'PolicyAction',
      policyName: 'PolicyName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterIdsShrink: 'string',
      namespacesShrink: 'string',
      policyAction: 'string',
      policyName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployPolicyInstanceResponseBody extends $tea.Model {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeHubClusterDetailsResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeHubClusterKubeconfigResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeHubClusterLogsResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      profile: 'Profile',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      profile: 'string',
      resourceGroupId: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeHubClustersResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeManagedClustersResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class DescribePoliciesResponseBody extends $tea.Model {
  policies?: DescribePoliciesResponseBodyPolicies[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      policies: 'Policies',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policies: { 'type': 'array', 'itemType': DescribePoliciesResponseBodyPolicies },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePoliciesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribePoliciesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribePoliciesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyDetailsRequest extends $tea.Model {
  policyName?: string;
  static names(): { [key: string]: string } {
    return {
      policyName: 'PolicyName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyDetailsResponseBody extends $tea.Model {
  policy?: DescribePolicyDetailsResponseBodyPolicy;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      policy: 'Policy',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policy: DescribePolicyDetailsResponseBodyPolicy,
      requestId: 'string',
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

export class DescribePolicyGovernanceInClusterRequest extends $tea.Model {
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

export class DescribePolicyGovernanceInClusterResponseBody extends $tea.Model {
  policyGovernances?: DescribePolicyGovernanceInClusterResponseBodyPolicyGovernances[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      policyGovernances: 'PolicyGovernances',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyGovernances: { 'type': 'array', 'itemType': DescribePolicyGovernanceInClusterResponseBodyPolicyGovernances },
      requestId: 'string',
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
  clusterId?: string;
  policyName?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      policyName: 'PolicyName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      policyName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyInstancesResponseBody extends $tea.Model {
  policies?: DescribePolicyInstancesResponseBodyPolicies[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      policies: 'Policies',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policies: { 'type': 'array', 'itemType': DescribePolicyInstancesResponseBodyPolicies },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyInstancesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribePolicyInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribePolicyInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyInstancesStatusRequest extends $tea.Model {
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

export class DescribePolicyInstancesStatusResponseBody extends $tea.Model {
  policies?: DescribePolicyInstancesStatusResponseBodyPolicies;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      policies: 'Policies',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policies: DescribePolicyInstancesStatusResponseBodyPolicies,
      requestId: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRegionsResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class DescribeUserPermissionsRequest extends $tea.Model {
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserPermissionsResponseBody extends $tea.Model {
  permissions?: DescribeUserPermissionsResponseBodyPermissions[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      permissions: 'Permissions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      permissions: { 'type': 'array', 'itemType': DescribeUserPermissionsResponseBodyPermissions },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserPermissionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeUserPermissionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeUserPermissionsResponseBody,
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DetachClusterFromHubResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class GrantUserPermissionRequest extends $tea.Model {
  clusterId?: string;
  isRamRole?: boolean;
  namespace?: string;
  roleName?: string;
  roleType?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      isRamRole: 'IsRamRole',
      namespace: 'Namespace',
      roleName: 'RoleName',
      roleType: 'RoleType',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      isRamRole: 'boolean',
      namespace: 'string',
      roleName: 'string',
      roleType: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GrantUserPermissionResponseBody extends $tea.Model {
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

export class GrantUserPermissionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GrantUserPermissionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GrantUserPermissionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GrantUserPermissionsRequest extends $tea.Model {
  permissions?: GrantUserPermissionsRequestPermissions[];
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      permissions: 'Permissions',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      permissions: { 'type': 'array', 'itemType': GrantUserPermissionsRequestPermissions },
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GrantUserPermissionsShrinkRequest extends $tea.Model {
  permissionsShrink?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      permissionsShrink: 'Permissions',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      permissionsShrink: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GrantUserPermissionsResponseBody extends $tea.Model {
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

export class GrantUserPermissionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GrantUserPermissionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GrantUserPermissionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHubClusterFeatureRequest extends $tea.Model {
  accessControlList?: string[];
  apiServerEipId?: string;
  argoCDEnabled?: boolean;
  argoCDHAEnabled?: boolean;
  argoEventsEnabled?: boolean;
  argoServerEnabled?: boolean;
  auditLogEnabled?: boolean;
  clusterId?: string;
  deletionProtection?: boolean;
  enableMesh?: boolean;
  gatewayEnabled?: boolean;
  monitorEnabled?: boolean;
  name?: string;
  priceLimit?: string;
  publicAccessEnabled?: boolean;
  publicApiServerEnabled?: boolean;
  vSwitches?: string[];
  workflowScheduleMode?: string;
  static names(): { [key: string]: string } {
    return {
      accessControlList: 'AccessControlList',
      apiServerEipId: 'ApiServerEipId',
      argoCDEnabled: 'ArgoCDEnabled',
      argoCDHAEnabled: 'ArgoCDHAEnabled',
      argoEventsEnabled: 'ArgoEventsEnabled',
      argoServerEnabled: 'ArgoServerEnabled',
      auditLogEnabled: 'AuditLogEnabled',
      clusterId: 'ClusterId',
      deletionProtection: 'DeletionProtection',
      enableMesh: 'EnableMesh',
      gatewayEnabled: 'GatewayEnabled',
      monitorEnabled: 'MonitorEnabled',
      name: 'Name',
      priceLimit: 'PriceLimit',
      publicAccessEnabled: 'PublicAccessEnabled',
      publicApiServerEnabled: 'PublicApiServerEnabled',
      vSwitches: 'VSwitches',
      workflowScheduleMode: 'WorkflowScheduleMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessControlList: { 'type': 'array', 'itemType': 'string' },
      apiServerEipId: 'string',
      argoCDEnabled: 'boolean',
      argoCDHAEnabled: 'boolean',
      argoEventsEnabled: 'boolean',
      argoServerEnabled: 'boolean',
      auditLogEnabled: 'boolean',
      clusterId: 'string',
      deletionProtection: 'boolean',
      enableMesh: 'boolean',
      gatewayEnabled: 'boolean',
      monitorEnabled: 'boolean',
      name: 'string',
      priceLimit: 'string',
      publicAccessEnabled: 'boolean',
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
  accessControlListShrink?: string;
  apiServerEipId?: string;
  argoCDEnabled?: boolean;
  argoCDHAEnabled?: boolean;
  argoEventsEnabled?: boolean;
  argoServerEnabled?: boolean;
  auditLogEnabled?: boolean;
  clusterId?: string;
  deletionProtection?: boolean;
  enableMesh?: boolean;
  gatewayEnabled?: boolean;
  monitorEnabled?: boolean;
  name?: string;
  priceLimit?: string;
  publicAccessEnabled?: boolean;
  publicApiServerEnabled?: boolean;
  vSwitchesShrink?: string;
  workflowScheduleMode?: string;
  static names(): { [key: string]: string } {
    return {
      accessControlListShrink: 'AccessControlList',
      apiServerEipId: 'ApiServerEipId',
      argoCDEnabled: 'ArgoCDEnabled',
      argoCDHAEnabled: 'ArgoCDHAEnabled',
      argoEventsEnabled: 'ArgoEventsEnabled',
      argoServerEnabled: 'ArgoServerEnabled',
      auditLogEnabled: 'AuditLogEnabled',
      clusterId: 'ClusterId',
      deletionProtection: 'DeletionProtection',
      enableMesh: 'EnableMesh',
      gatewayEnabled: 'GatewayEnabled',
      monitorEnabled: 'MonitorEnabled',
      name: 'Name',
      priceLimit: 'PriceLimit',
      publicAccessEnabled: 'PublicAccessEnabled',
      publicApiServerEnabled: 'PublicApiServerEnabled',
      vSwitchesShrink: 'VSwitches',
      workflowScheduleMode: 'WorkflowScheduleMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessControlListShrink: 'string',
      apiServerEipId: 'string',
      argoCDEnabled: 'boolean',
      argoCDHAEnabled: 'boolean',
      argoEventsEnabled: 'boolean',
      argoServerEnabled: 'boolean',
      auditLogEnabled: 'boolean',
      clusterId: 'string',
      deletionProtection: 'boolean',
      enableMesh: 'boolean',
      gatewayEnabled: 'boolean',
      monitorEnabled: 'boolean',
      name: 'string',
      priceLimit: 'string',
      publicAccessEnabled: 'boolean',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateHubClusterFeatureResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class UpdateUserPermissionRequest extends $tea.Model {
  clusterId?: string;
  namespace?: string;
  roleName?: string;
  roleType?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      namespace: 'Namespace',
      roleName: 'RoleName',
      roleType: 'RoleType',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      namespace: 'string',
      roleName: 'string',
      roleType: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserPermissionResponseBody extends $tea.Model {
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

export class UpdateUserPermissionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateUserPermissionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateUserPermissionResponseBody,
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

export class DescribeHubClusterDetailsResponseBodyClusterClusterInfoMetaDataACKOneGitOps extends $tea.Model {
  accessControlList?: string[];
  enabled?: boolean;
  HAEnabled?: boolean;
  publicAccessEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessControlList: 'AccessControlList',
      enabled: 'Enabled',
      HAEnabled: 'HAEnabled',
      publicAccessEnabled: 'PublicAccessEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessControlList: { 'type': 'array', 'itemType': 'string' },
      enabled: 'boolean',
      HAEnabled: 'boolean',
      publicAccessEnabled: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHubClusterDetailsResponseBodyClusterClusterInfoMetaDataACKOneWorkFlowArgoWorkflow extends $tea.Model {
  accessControlList?: string[];
  enabled?: boolean;
  publicAccessEnabled?: boolean;
  serverEnabled?: string;
  static names(): { [key: string]: string } {
    return {
      accessControlList: 'AccessControlList',
      enabled: 'Enabled',
      publicAccessEnabled: 'PublicAccessEnabled',
      serverEnabled: 'ServerEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessControlList: { 'type': 'array', 'itemType': 'string' },
      enabled: 'boolean',
      publicAccessEnabled: 'boolean',
      serverEnabled: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHubClusterDetailsResponseBodyClusterClusterInfoMetaDataACKOneWorkFlow extends $tea.Model {
  argoWorkflow?: DescribeHubClusterDetailsResponseBodyClusterClusterInfoMetaDataACKOneWorkFlowArgoWorkflow;
  static names(): { [key: string]: string } {
    return {
      argoWorkflow: 'ArgoWorkflow',
    };
  }

  static types(): { [key: string]: any } {
    return {
      argoWorkflow: DescribeHubClusterDetailsResponseBodyClusterClusterInfoMetaDataACKOneWorkFlowArgoWorkflow,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHubClusterDetailsResponseBodyClusterClusterInfoMetaDataACKOne extends $tea.Model {
  gitOps?: DescribeHubClusterDetailsResponseBodyClusterClusterInfoMetaDataACKOneGitOps;
  workFlow?: DescribeHubClusterDetailsResponseBodyClusterClusterInfoMetaDataACKOneWorkFlow;
  static names(): { [key: string]: string } {
    return {
      gitOps: 'GitOps',
      workFlow: 'WorkFlow',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gitOps: DescribeHubClusterDetailsResponseBodyClusterClusterInfoMetaDataACKOneGitOps,
      workFlow: DescribeHubClusterDetailsResponseBodyClusterClusterInfoMetaDataACKOneWorkFlow,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHubClusterDetailsResponseBodyClusterClusterInfoMetaData extends $tea.Model {
  ACKOne?: DescribeHubClusterDetailsResponseBodyClusterClusterInfoMetaDataACKOne;
  static names(): { [key: string]: string } {
    return {
      ACKOne: 'ACKOne',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ACKOne: DescribeHubClusterDetailsResponseBodyClusterClusterInfoMetaDataACKOne,
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
  metaData?: DescribeHubClusterDetailsResponseBodyClusterClusterInfoMetaData;
  name?: string;
  profile?: string;
  regionId?: string;
  resourceGroupID?: string;
  state?: string;
  updateTime?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterSpec: 'ClusterSpec',
      creationTime: 'CreationTime',
      errorMessage: 'ErrorMessage',
      metaData: 'MetaData',
      name: 'Name',
      profile: 'Profile',
      regionId: 'RegionId',
      resourceGroupID: 'ResourceGroupID',
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
      metaData: DescribeHubClusterDetailsResponseBodyClusterClusterInfoMetaData,
      name: 'string',
      profile: 'string',
      regionId: 'string',
      resourceGroupID: 'string',
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
  resourceGroupID?: string;
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
      resourceGroupID: 'ResourceGroupID',
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
      resourceGroupID: 'string',
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

export class DescribePoliciesResponseBodyPolicies extends $tea.Model {
  category?: string;
  names?: string[];
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      names: 'Names',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      names: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyDetailsResponseBodyPolicy extends $tea.Model {
  action?: string;
  category?: string;
  created?: string;
  description?: string;
  name?: string;
  noConfig?: number;
  severity?: string;
  template?: string;
  updated?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      category: 'Category',
      created: 'Created',
      description: 'Description',
      name: 'Name',
      noConfig: 'NoConfig',
      severity: 'Severity',
      template: 'Template',
      updated: 'Updated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      category: 'string',
      created: 'string',
      description: 'string',
      name: 'string',
      noConfig: 'number',
      severity: 'string',
      template: 'string',
      updated: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyGovernanceInClusterResponseBodyPolicyGovernancesCluster extends $tea.Model {
  clusterId?: string;
  clusterSpec?: string;
  clusterType?: string;
  name?: string;
  profile?: string;
  regionId?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterSpec: 'ClusterSpec',
      clusterType: 'ClusterType',
      name: 'Name',
      profile: 'Profile',
      regionId: 'RegionId',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterSpec: 'string',
      clusterType: 'string',
      name: 'string',
      profile: 'string',
      regionId: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyGovernanceInClusterResponseBodyPolicyGovernancesPolicyGovernanceAdmitLog extends $tea.Model {
  count?: string;
  logProject?: string;
  logStore?: string;
  logs?: { [key: string]: string }[];
  progress?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      logProject: 'LogProject',
      logStore: 'LogStore',
      logs: 'Logs',
      progress: 'Progress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'string',
      logProject: 'string',
      logStore: 'string',
      logs: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'string' } },
      progress: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyGovernanceInClusterResponseBodyPolicyGovernancesPolicyGovernanceOnState extends $tea.Model {
  enabledCount?: number;
  severity?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      enabledCount: 'EnabledCount',
      severity: 'Severity',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabledCount: 'number',
      severity: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyGovernanceInClusterResponseBodyPolicyGovernancesPolicyGovernanceViolationTotalViolationsDeny extends $tea.Model {
  severity?: string;
  violations?: number;
  static names(): { [key: string]: string } {
    return {
      severity: 'Severity',
      violations: 'Violations',
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

export class DescribePolicyGovernanceInClusterResponseBodyPolicyGovernancesPolicyGovernanceViolationTotalViolationsWarn extends $tea.Model {
  severity?: string;
  violations?: string;
  static names(): { [key: string]: string } {
    return {
      severity: 'Severity',
      violations: 'Violations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      severity: 'string',
      violations: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyGovernanceInClusterResponseBodyPolicyGovernancesPolicyGovernanceViolationTotalViolations extends $tea.Model {
  deny?: DescribePolicyGovernanceInClusterResponseBodyPolicyGovernancesPolicyGovernanceViolationTotalViolationsDeny[];
  warn?: DescribePolicyGovernanceInClusterResponseBodyPolicyGovernancesPolicyGovernanceViolationTotalViolationsWarn[];
  static names(): { [key: string]: string } {
    return {
      deny: 'Deny',
      warn: 'Warn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deny: { 'type': 'array', 'itemType': DescribePolicyGovernanceInClusterResponseBodyPolicyGovernancesPolicyGovernanceViolationTotalViolationsDeny },
      warn: { 'type': 'array', 'itemType': DescribePolicyGovernanceInClusterResponseBodyPolicyGovernancesPolicyGovernanceViolationTotalViolationsWarn },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyGovernanceInClusterResponseBodyPolicyGovernancesPolicyGovernanceViolationViolationsDeny extends $tea.Model {
  policyDescription?: string;
  policyName?: string;
  severity?: string;
  violations?: number;
  static names(): { [key: string]: string } {
    return {
      policyDescription: 'PolicyDescription',
      policyName: 'PolicyName',
      severity: 'Severity',
      violations: 'Violations',
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

export class DescribePolicyGovernanceInClusterResponseBodyPolicyGovernancesPolicyGovernanceViolationViolationsWarn extends $tea.Model {
  policyDescription?: string;
  policyName?: string;
  severity?: string;
  violations?: number;
  static names(): { [key: string]: string } {
    return {
      policyDescription: 'PolicyDescription',
      policyName: 'PolicyName',
      severity: 'Severity',
      violations: 'Violations',
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

export class DescribePolicyGovernanceInClusterResponseBodyPolicyGovernancesPolicyGovernanceViolationViolations extends $tea.Model {
  deny?: DescribePolicyGovernanceInClusterResponseBodyPolicyGovernancesPolicyGovernanceViolationViolationsDeny[];
  warn?: DescribePolicyGovernanceInClusterResponseBodyPolicyGovernancesPolicyGovernanceViolationViolationsWarn[];
  static names(): { [key: string]: string } {
    return {
      deny: 'Deny',
      warn: 'Warn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deny: { 'type': 'array', 'itemType': DescribePolicyGovernanceInClusterResponseBodyPolicyGovernancesPolicyGovernanceViolationViolationsDeny },
      warn: { 'type': 'array', 'itemType': DescribePolicyGovernanceInClusterResponseBodyPolicyGovernancesPolicyGovernanceViolationViolationsWarn },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyGovernanceInClusterResponseBodyPolicyGovernancesPolicyGovernanceViolation extends $tea.Model {
  totalViolations?: DescribePolicyGovernanceInClusterResponseBodyPolicyGovernancesPolicyGovernanceViolationTotalViolations;
  violations?: DescribePolicyGovernanceInClusterResponseBodyPolicyGovernancesPolicyGovernanceViolationViolations;
  static names(): { [key: string]: string } {
    return {
      totalViolations: 'TotalViolations',
      violations: 'Violations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalViolations: DescribePolicyGovernanceInClusterResponseBodyPolicyGovernancesPolicyGovernanceViolationTotalViolations,
      violations: DescribePolicyGovernanceInClusterResponseBodyPolicyGovernancesPolicyGovernanceViolationViolations,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyGovernanceInClusterResponseBodyPolicyGovernancesPolicyGovernance extends $tea.Model {
  admitLog?: DescribePolicyGovernanceInClusterResponseBodyPolicyGovernancesPolicyGovernanceAdmitLog;
  onState?: DescribePolicyGovernanceInClusterResponseBodyPolicyGovernancesPolicyGovernanceOnState[];
  violation?: DescribePolicyGovernanceInClusterResponseBodyPolicyGovernancesPolicyGovernanceViolation;
  static names(): { [key: string]: string } {
    return {
      admitLog: 'AdmitLog',
      onState: 'OnState',
      violation: 'Violation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      admitLog: DescribePolicyGovernanceInClusterResponseBodyPolicyGovernancesPolicyGovernanceAdmitLog,
      onState: { 'type': 'array', 'itemType': DescribePolicyGovernanceInClusterResponseBodyPolicyGovernancesPolicyGovernanceOnState },
      violation: DescribePolicyGovernanceInClusterResponseBodyPolicyGovernancesPolicyGovernanceViolation,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyGovernanceInClusterResponseBodyPolicyGovernances extends $tea.Model {
  cluster?: DescribePolicyGovernanceInClusterResponseBodyPolicyGovernancesCluster;
  policyGovernance?: DescribePolicyGovernanceInClusterResponseBodyPolicyGovernancesPolicyGovernance;
  static names(): { [key: string]: string } {
    return {
      cluster: 'Cluster',
      policyGovernance: 'PolicyGovernance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cluster: DescribePolicyGovernanceInClusterResponseBodyPolicyGovernancesCluster,
      policyGovernance: DescribePolicyGovernanceInClusterResponseBodyPolicyGovernancesPolicyGovernance,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyInstancesResponseBodyPolicies extends $tea.Model {
  clusterId?: string;
  instanceName?: string;
  policyAction?: string;
  policyCategory?: string;
  policyDescription?: string;
  policyName?: string;
  policyParameters?: { [key: string]: string };
  policyScope?: string;
  policySeverity?: string;
  totalViolations?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      instanceName: 'InstanceName',
      policyAction: 'PolicyAction',
      policyCategory: 'PolicyCategory',
      policyDescription: 'PolicyDescription',
      policyName: 'PolicyName',
      policyParameters: 'PolicyParameters',
      policyScope: 'PolicyScope',
      policySeverity: 'PolicySeverity',
      totalViolations: 'TotalViolations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      instanceName: 'string',
      policyAction: 'string',
      policyCategory: 'string',
      policyDescription: 'string',
      policyName: 'string',
      policyParameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      policyScope: 'string',
      policySeverity: 'string',
      totalViolations: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyInstancesStatusResponseBodyPoliciesPolicyInstancesPolicyClusters extends $tea.Model {
  clusterId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyInstancesStatusResponseBodyPoliciesPolicyInstances extends $tea.Model {
  policyCategory?: string;
  policyClusters?: DescribePolicyInstancesStatusResponseBodyPoliciesPolicyInstancesPolicyClusters[];
  policyDescription?: string;
  policyInstancesCount?: number;
  policyName?: string;
  policySeverity?: string;
  static names(): { [key: string]: string } {
    return {
      policyCategory: 'PolicyCategory',
      policyClusters: 'PolicyClusters',
      policyDescription: 'PolicyDescription',
      policyInstancesCount: 'PolicyInstancesCount',
      policyName: 'PolicyName',
      policySeverity: 'PolicySeverity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyCategory: 'string',
      policyClusters: { 'type': 'array', 'itemType': DescribePolicyInstancesStatusResponseBodyPoliciesPolicyInstancesPolicyClusters },
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

export class DescribePolicyInstancesStatusResponseBodyPoliciesSeverityInfo extends $tea.Model {
  severityCount?: string;
  severityType?: string;
  static names(): { [key: string]: string } {
    return {
      severityCount: 'SeverityCount',
      severityType: 'SeverityType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      severityCount: 'string',
      severityType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyInstancesStatusResponseBodyPolicies extends $tea.Model {
  policyInstances?: DescribePolicyInstancesStatusResponseBodyPoliciesPolicyInstances[];
  severityInfo?: DescribePolicyInstancesStatusResponseBodyPoliciesSeverityInfo[];
  static names(): { [key: string]: string } {
    return {
      policyInstances: 'PolicyInstances',
      severityInfo: 'SeverityInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyInstances: { 'type': 'array', 'itemType': DescribePolicyInstancesStatusResponseBodyPoliciesPolicyInstances },
      severityInfo: { 'type': 'array', 'itemType': DescribePolicyInstancesStatusResponseBodyPoliciesSeverityInfo },
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

export class DescribeUserPermissionsResponseBodyPermissions extends $tea.Model {
  resourceId?: string;
  resourceType?: string;
  roleName?: string;
  roleType?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      roleName: 'RoleName',
      roleType: 'RoleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceType: 'string',
      roleName: 'string',
      roleType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GrantUserPermissionsRequestPermissions extends $tea.Model {
  clusterId?: string;
  isRamRole?: boolean;
  namespace?: string;
  roleName?: string;
  roleType?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      isRamRole: 'IsRamRole',
      namespace: 'Namespace',
      roleName: 'RoleName',
      roleType: 'RoleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
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


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
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

    if (!Util.isUnset(request.resourceGroupID)) {
      body["ResourceGroupID"] = request.resourceGroupID;
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

  async deletePolicyInstanceWithOptions(tmpReq: DeletePolicyInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DeletePolicyInstanceResponse> {
    Util.validateModel(tmpReq);
    let request = new DeletePolicyInstanceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.clusterIds)) {
      request.clusterIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.clusterIds, "ClusterIds", "json");
    }

    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.clusterIdsShrink)) {
      query["ClusterIds"] = request.clusterIdsShrink;
    }

    if (!Util.isUnset(request.policyName)) {
      query["PolicyName"] = request.policyName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeletePolicyInstance",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeletePolicyInstanceResponse>(await this.callApi(params, req, runtime), new DeletePolicyInstanceResponse({}));
  }

  async deletePolicyInstance(request: DeletePolicyInstanceRequest): Promise<DeletePolicyInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deletePolicyInstanceWithOptions(request, runtime);
  }

  async deleteUserPermissionWithOptions(request: DeleteUserPermissionRequest, runtime: $Util.RuntimeOptions): Promise<DeleteUserPermissionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteUserPermission",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteUserPermissionResponse>(await this.callApi(params, req, runtime), new DeleteUserPermissionResponse({}));
  }

  async deleteUserPermission(request: DeleteUserPermissionRequest): Promise<DeleteUserPermissionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteUserPermissionWithOptions(request, runtime);
  }

  async deployPolicyInstanceWithOptions(tmpReq: DeployPolicyInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DeployPolicyInstanceResponse> {
    Util.validateModel(tmpReq);
    let request = new DeployPolicyInstanceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.clusterIds)) {
      request.clusterIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.clusterIds, "ClusterIds", "json");
    }

    if (!Util.isUnset(tmpReq.namespaces)) {
      request.namespacesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.namespaces, "Namespaces", "json");
    }

    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.clusterIdsShrink)) {
      query["ClusterIds"] = request.clusterIdsShrink;
    }

    if (!Util.isUnset(request.namespacesShrink)) {
      query["Namespaces"] = request.namespacesShrink;
    }

    if (!Util.isUnset(request.policyAction)) {
      query["PolicyAction"] = request.policyAction;
    }

    if (!Util.isUnset(request.policyName)) {
      query["PolicyName"] = request.policyName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeployPolicyInstance",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeployPolicyInstanceResponse>(await this.callApi(params, req, runtime), new DeployPolicyInstanceResponse({}));
  }

  async deployPolicyInstance(request: DeployPolicyInstanceRequest): Promise<DeployPolicyInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deployPolicyInstanceWithOptions(request, runtime);
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

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
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

  async describePoliciesWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribePoliciesResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "DescribePolicies",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePoliciesResponse>(await this.callApi(params, req, runtime), new DescribePoliciesResponse({}));
  }

  async describePolicies(): Promise<DescribePoliciesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePoliciesWithOptions(runtime);
  }

  async describePolicyDetailsWithOptions(request: DescribePolicyDetailsRequest, runtime: $Util.RuntimeOptions): Promise<DescribePolicyDetailsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.policyName)) {
      query["PolicyName"] = request.policyName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePolicyDetails",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePolicyDetailsResponse>(await this.callApi(params, req, runtime), new DescribePolicyDetailsResponse({}));
  }

  async describePolicyDetails(request: DescribePolicyDetailsRequest): Promise<DescribePolicyDetailsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePolicyDetailsWithOptions(request, runtime);
  }

  async describePolicyGovernanceInClusterWithOptions(request: DescribePolicyGovernanceInClusterRequest, runtime: $Util.RuntimeOptions): Promise<DescribePolicyGovernanceInClusterResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePolicyGovernanceInCluster",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePolicyGovernanceInClusterResponse>(await this.callApi(params, req, runtime), new DescribePolicyGovernanceInClusterResponse({}));
  }

  async describePolicyGovernanceInCluster(request: DescribePolicyGovernanceInClusterRequest): Promise<DescribePolicyGovernanceInClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePolicyGovernanceInClusterWithOptions(request, runtime);
  }

  async describePolicyInstancesWithOptions(request: DescribePolicyInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DescribePolicyInstancesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.policyName)) {
      query["PolicyName"] = request.policyName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePolicyInstances",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePolicyInstancesResponse>(await this.callApi(params, req, runtime), new DescribePolicyInstancesResponse({}));
  }

  async describePolicyInstances(request: DescribePolicyInstancesRequest): Promise<DescribePolicyInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePolicyInstancesWithOptions(request, runtime);
  }

  async describePolicyInstancesStatusWithOptions(request: DescribePolicyInstancesStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribePolicyInstancesStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePolicyInstancesStatus",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePolicyInstancesStatusResponse>(await this.callApi(params, req, runtime), new DescribePolicyInstancesStatusResponse({}));
  }

  async describePolicyInstancesStatus(request: DescribePolicyInstancesStatusRequest): Promise<DescribePolicyInstancesStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePolicyInstancesStatusWithOptions(request, runtime);
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

  async describeUserPermissionsWithOptions(request: DescribeUserPermissionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUserPermissionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeUserPermissions",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeUserPermissionsResponse>(await this.callApi(params, req, runtime), new DescribeUserPermissionsResponse({}));
  }

  async describeUserPermissions(request: DescribeUserPermissionsRequest): Promise<DescribeUserPermissionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUserPermissionsWithOptions(request, runtime);
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

  async grantUserPermissionWithOptions(request: GrantUserPermissionRequest, runtime: $Util.RuntimeOptions): Promise<GrantUserPermissionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.isRamRole)) {
      query["IsRamRole"] = request.isRamRole;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.roleName)) {
      query["RoleName"] = request.roleName;
    }

    if (!Util.isUnset(request.roleType)) {
      query["RoleType"] = request.roleType;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GrantUserPermission",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GrantUserPermissionResponse>(await this.callApi(params, req, runtime), new GrantUserPermissionResponse({}));
  }

  async grantUserPermission(request: GrantUserPermissionRequest): Promise<GrantUserPermissionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.grantUserPermissionWithOptions(request, runtime);
  }

  /**
    * @deprecated : GrantUserPermissions is deprecated, please use adcp::2022-01-01::GrantUserPermission instead.
    *
    * @param tmpReq GrantUserPermissionsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GrantUserPermissionsResponse
   */
  // Deprecated
  async grantUserPermissionsWithOptions(tmpReq: GrantUserPermissionsRequest, runtime: $Util.RuntimeOptions): Promise<GrantUserPermissionsResponse> {
    Util.validateModel(tmpReq);
    let request = new GrantUserPermissionsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.permissions)) {
      request.permissionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.permissions, "Permissions", "json");
    }

    let query = { };
    if (!Util.isUnset(request.permissionsShrink)) {
      query["Permissions"] = request.permissionsShrink;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GrantUserPermissions",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GrantUserPermissionsResponse>(await this.callApi(params, req, runtime), new GrantUserPermissionsResponse({}));
  }

  /**
    * @deprecated : GrantUserPermissions is deprecated, please use adcp::2022-01-01::GrantUserPermission instead.
    *
    * @param request GrantUserPermissionsRequest
    * @return GrantUserPermissionsResponse
   */
  // Deprecated
  async grantUserPermissions(request: GrantUserPermissionsRequest): Promise<GrantUserPermissionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.grantUserPermissionsWithOptions(request, runtime);
  }

  async updateHubClusterFeatureWithOptions(tmpReq: UpdateHubClusterFeatureRequest, runtime: $Util.RuntimeOptions): Promise<UpdateHubClusterFeatureResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateHubClusterFeatureShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.accessControlList)) {
      request.accessControlListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.accessControlList, "AccessControlList", "json");
    }

    if (!Util.isUnset(tmpReq.vSwitches)) {
      request.vSwitchesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.vSwitches, "VSwitches", "json");
    }

    let query = { };
    if (!Util.isUnset(request.accessControlListShrink)) {
      query["AccessControlList"] = request.accessControlListShrink;
    }

    if (!Util.isUnset(request.apiServerEipId)) {
      query["ApiServerEipId"] = request.apiServerEipId;
    }

    if (!Util.isUnset(request.argoCDEnabled)) {
      query["ArgoCDEnabled"] = request.argoCDEnabled;
    }

    if (!Util.isUnset(request.argoCDHAEnabled)) {
      query["ArgoCDHAEnabled"] = request.argoCDHAEnabled;
    }

    if (!Util.isUnset(request.argoEventsEnabled)) {
      query["ArgoEventsEnabled"] = request.argoEventsEnabled;
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

    if (!Util.isUnset(request.gatewayEnabled)) {
      query["GatewayEnabled"] = request.gatewayEnabled;
    }

    if (!Util.isUnset(request.monitorEnabled)) {
      query["MonitorEnabled"] = request.monitorEnabled;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.priceLimit)) {
      query["PriceLimit"] = request.priceLimit;
    }

    if (!Util.isUnset(request.publicAccessEnabled)) {
      query["PublicAccessEnabled"] = request.publicAccessEnabled;
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

  async updateUserPermissionWithOptions(request: UpdateUserPermissionRequest, runtime: $Util.RuntimeOptions): Promise<UpdateUserPermissionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.roleName)) {
      query["RoleName"] = request.roleName;
    }

    if (!Util.isUnset(request.roleType)) {
      query["RoleType"] = request.roleType;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateUserPermission",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateUserPermissionResponse>(await this.callApi(params, req, runtime), new UpdateUserPermissionResponse({}));
  }

  async updateUserPermission(request: UpdateUserPermissionRequest): Promise<UpdateUserPermissionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateUserPermissionWithOptions(request, runtime);
  }

}
