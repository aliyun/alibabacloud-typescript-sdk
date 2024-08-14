// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

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
      key: 'Key',
      value: 'Value',
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

export class AttachClusterToHubRequest extends $tea.Model {
  /**
   * @remarks
   * The operation that you want to perform. Set the value to **AttachClusterToHub**.
   * 
   * @example
   * true
   */
  attachToMesh?: boolean;
  /**
   * @remarks
   * The ID of the task.
   * 
   * This parameter is required.
   * 
   * @example
   * cd08d62e6506a4fa5a8c44c19d0fc****
   */
  clusterId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * This parameter is required.
   * 
   * @example
   * ["cdea10134be464ba4acb36cc831a6****"]
   */
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
  /**
   * @remarks
   * You can call the AttachClusterToHub operation to associate an Container Service for Kubernetes (ACK) cluster with a master instance of ACK One.
   * 
   * @example
   * c8e28143817db4b039b8548d7c899****
   */
  clusterId?: string;
  /**
   * @remarks
   * Zhishi
   */
  managedClusterIds?: string[];
  /**
   * @remarks
   * Example 1
   * 
   * @example
   * EA06613B-37A3-549E-BAE0-E4AD8A6E93D7
   */
  requestId?: string;
  /**
   * @example
   * T-623a96b7bbeaac074b00****
   */
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

export class ChangeResourceGroupRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the new resource group. You can view the available resource groups in the Resource Management console.
   * 
   * This parameter is required.
   * 
   * @example
   * rg-aekzlvgbhaca***
   */
  newResourceGroupId?: string;
  /**
   * @remarks
   * The ID of the resource. The value of this parameter varies with the resource type. For example, if you set ResourceType to cluster, this parameter specifies a cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * c9603ee23a84a41d6a1424619cb80****
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource type. Set the value to cluster.
   * 
   * @example
   * cluster
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      newResourceGroupId: 'NewResourceGroupId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newResourceGroupId: 'string',
      resourceId: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeResourceGroupResponseBody extends $tea.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 5BE4C329-DCC2-5B61-8F66-112B7D7FC712
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

export class ChangeResourceGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ChangeResourceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ChangeResourceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHubClusterRequest extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to expose the API server to the Internet. Valid values:
   * 
   * *   true: exposes the API server to the Internet.
   * *   false: exposes the API server to the internal network.
   * 
   * @example
   * true
   */
  apiServerPublicEip?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the workflow instance UI. This parameter takes effect only if Profile is set to XFlow. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  argoServerEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the audit log feature. Valid values:
   * 
   * *   true: enables the audit log feature.
   * *   false: disables the audit log feature.
   * 
   * @example
   * false
   */
  auditLogEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to use an advanced security group.
   * 
   * @example
   * false
   */
  isEnterpriseSecurityGroup?: boolean;
  /**
   * @remarks
   * The name of the master instance.
   * 
   * @example
   * ack-demo
   */
  name?: string;
  /**
   * @remarks
   * The limit on the prices of containers in the workflow. This parameter takes effect only if the WorkflowScheduleMode parameter is set to cost-optimized.
   * 
   * @example
   * 0.08
   */
  priceLimit?: string;
  /**
   * @remarks
   * The type of scenario for which the master instance is suitable. Valid values:
   * 
   * *   `Default`: The master instance is suitable for standard scenarios.
   * *   `XFlow`: The master instance is suitable for workflow scenarios.
   * 
   * Default value: `Default`.
   * 
   * @example
   * Default
   */
  profile?: string;
  /**
   * @remarks
   * The ID of the region. You can call the DescribeRegions operation to query available regions.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The Resource Group ID.
   * 
   * @example
   * rg-1exm6tg2h48***
   */
  resourceGroupID?: string;
  /**
   * @remarks
   * The tags.
   * 
   * You can specify at most 20 tags in each call.
   */
  tag?: Tag[];
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * This parameter is required.
   * 
   * @example
   * ["vsw-2zeaijsas4zkzz81xm***"]
   */
  vSwitches?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) to which the master instance belongs. You can call the DescribeVpcs operation to query available VPCs.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-f8zin0jscsr84s96tg***
   */
  vpcId?: string;
  /**
   * @remarks
   * The scheduling mode of the workflow. This parameter takes effect only if Profile is set to XFlow. Valid values:
   * 
   * *   cost-optimized: cost-prioritized scheduling mode.
   * *   stock-optimized: inventory-prioritized scheduling mode.
   * 
   * @example
   * cost-optimized
   */
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
      tag: 'Tag',
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
      tag: { 'type': 'array', 'itemType': Tag },
      vSwitches: 'string',
      vpcId: 'string',
      workflowScheduleMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHubClusterShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to expose the API server to the Internet. Valid values:
   * 
   * *   true: exposes the API server to the Internet.
   * *   false: exposes the API server to the internal network.
   * 
   * @example
   * true
   */
  apiServerPublicEip?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the workflow instance UI. This parameter takes effect only if Profile is set to XFlow. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  argoServerEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the audit log feature. Valid values:
   * 
   * *   true: enables the audit log feature.
   * *   false: disables the audit log feature.
   * 
   * @example
   * false
   */
  auditLogEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to use an advanced security group.
   * 
   * @example
   * false
   */
  isEnterpriseSecurityGroup?: boolean;
  /**
   * @remarks
   * The name of the master instance.
   * 
   * @example
   * ack-demo
   */
  name?: string;
  /**
   * @remarks
   * The limit on the prices of containers in the workflow. This parameter takes effect only if the WorkflowScheduleMode parameter is set to cost-optimized.
   * 
   * @example
   * 0.08
   */
  priceLimit?: string;
  /**
   * @remarks
   * The type of scenario for which the master instance is suitable. Valid values:
   * 
   * *   `Default`: The master instance is suitable for standard scenarios.
   * *   `XFlow`: The master instance is suitable for workflow scenarios.
   * 
   * Default value: `Default`.
   * 
   * @example
   * Default
   */
  profile?: string;
  /**
   * @remarks
   * The ID of the region. You can call the DescribeRegions operation to query available regions.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The Resource Group ID.
   * 
   * @example
   * rg-1exm6tg2h48***
   */
  resourceGroupID?: string;
  /**
   * @remarks
   * The tags.
   * 
   * You can specify at most 20 tags in each call.
   */
  tagShrink?: string;
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * This parameter is required.
   * 
   * @example
   * ["vsw-2zeaijsas4zkzz81xm***"]
   */
  vSwitches?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) to which the master instance belongs. You can call the DescribeVpcs operation to query available VPCs.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-f8zin0jscsr84s96tg***
   */
  vpcId?: string;
  /**
   * @remarks
   * The scheduling mode of the workflow. This parameter takes effect only if Profile is set to XFlow. Valid values:
   * 
   * *   cost-optimized: cost-prioritized scheduling mode.
   * *   stock-optimized: inventory-prioritized scheduling mode.
   * 
   * @example
   * cost-optimized
   */
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
      tagShrink: 'Tag',
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
      tagShrink: 'string',
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
  /**
   * @remarks
   * The ID of the master instance.
   * 
   * @example
   * c09946603cd764dac96135f51d1ba****
   */
  clusterId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 62F5AA2B-A2C9-5135-BCE2-C2167099****
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * T-62523eda841eca071400****
   */
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
  /**
   * @remarks
   * The ID of the master instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cd90dd24a86fd42f895a1b77df620****
   */
  clusterId?: string;
  /**
   * @remarks
   * Specifies whether to forcefully delete the master instance in ACK One. Valid values:
   * 
   * *   true: forcefully deletes the master instance in ACK One.
   * *   false: does not forcibly delete the master instance in ACK One.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  force?: boolean;
  /**
   * @remarks
   * The list of resources to retain.
   */
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
  /**
   * @remarks
   * The ID of the master instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cd90dd24a86fd42f895a1b77df620****
   */
  clusterId?: string;
  /**
   * @remarks
   * Specifies whether to forcefully delete the master instance in ACK One. Valid values:
   * 
   * *   true: forcefully deletes the master instance in ACK One.
   * *   false: does not forcibly delete the master instance in ACK One.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  force?: boolean;
  /**
   * @remarks
   * The list of resources to retain.
   */
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
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * @example
   * cb09fda0dc2f94a8397c76638c7ec****
   */
  clusterId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7A827E32-6D24-5757-B3FD-D9396495FBDC
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the job.
   * 
   * @example
   * T-623a96b7bbeaac074b00****
   */
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
  /**
   * @remarks
   * The ID of the master instance.
   * 
   * This parameter is required.
   * 
   * @example
   * c09946603cd764dac96135f51d1ba****
   */
  clusterId?: string;
  /**
   * @remarks
   * A array of JSON strings. The JSON strings in the array indicate the IDs of the associated clusters for which the policy is deleted.
   */
  clusterIds?: string[];
  /**
   * @remarks
   * The name of the policy.
   * 
   * This parameter is required.
   * 
   * @example
   * ACKNoEnvVarSecrets
   */
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
  /**
   * @remarks
   * The ID of the master instance.
   * 
   * This parameter is required.
   * 
   * @example
   * c09946603cd764dac96135f51d1ba****
   */
  clusterId?: string;
  /**
   * @remarks
   * A array of JSON strings. The JSON strings in the array indicate the IDs of the associated clusters for which the policy is deleted.
   */
  clusterIdsShrink?: string;
  /**
   * @remarks
   * The name of the policy.
   * 
   * This parameter is required.
   * 
   * @example
   * ACKNoEnvVarSecrets
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EA06613B-37A3-549E-BAE0-E4AD8A6E93D7
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
  /**
   * @remarks
   * The ID of the master instance.
   * 
   * This parameter is required.
   * 
   * @example
   * c09946603cd764dac96135f51d1ba****
   */
  clusterId?: string;
  /**
   * @remarks
   * The ID of the RAM user.
   * 
   * This parameter is required.
   * 
   * @example
   * 2176****
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 2D676EFC-8C04-5CCE-A08E-BB97D24B47E8
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
  /**
   * @remarks
   * The ID of the master instance.
   * 
   * This parameter is required.
   * 
   * @example
   * c102fe5f1ee5d4c87a68121a77d8b****
   */
  clusterId?: string;
  /**
   * @remarks
   * An array of JSON strings. The JSON strings in the array indicate the IDs of the associated clusters in which the policy instance is deployed.
   * 
   * This parameter is required.
   */
  clusterIds?: string[];
  /**
   * @remarks
   * A list of namespaces.
   */
  namespaces?: string[];
  /**
   * @remarks
   * The action of the policy. Valid values:
   * 
   * *   deny: blocks deployments that match the policy.
   * *   warn: generates alerts for deployments that match the policy.
   * 
   * This parameter is required.
   * 
   * @example
   * warn
   */
  policyAction?: string;
  /**
   * @remarks
   * The name of the policy.
   * 
   * This parameter is required.
   * 
   * @example
   * ACKNoEnvVarSecrets
   */
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
  /**
   * @remarks
   * The ID of the master instance.
   * 
   * This parameter is required.
   * 
   * @example
   * c102fe5f1ee5d4c87a68121a77d8b****
   */
  clusterId?: string;
  /**
   * @remarks
   * An array of JSON strings. The JSON strings in the array indicate the IDs of the associated clusters in which the policy instance is deployed.
   * 
   * This parameter is required.
   */
  clusterIdsShrink?: string;
  /**
   * @remarks
   * A list of namespaces.
   */
  namespacesShrink?: string;
  /**
   * @remarks
   * The action of the policy. Valid values:
   * 
   * *   deny: blocks deployments that match the policy.
   * *   warn: generates alerts for deployments that match the policy.
   * 
   * This parameter is required.
   * 
   * @example
   * warn
   */
  policyAction?: string;
  /**
   * @remarks
   * The name of the policy.
   * 
   * This parameter is required.
   * 
   * @example
   * ACKNoEnvVarSecrets
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2D676EFC-8C04-5CCE-A08E-BB97D24B47E8
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
  /**
   * @remarks
   * The ID of the master instance.
   * 
   * This parameter is required.
   * 
   * @example
   * c676decda7b8148d69a9aba751877****
   */
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
  /**
   * @remarks
   * The details of the master instance.
   */
  cluster?: DescribeHubClusterDetailsResponseBodyCluster;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 52C1B7DF-96C1-5214-97B6-1B0859FEAFE5
   */
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
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * c102fe5f1ee5d4c87a68121a77d8b****
   */
  clusterId?: string;
  /**
   * @remarks
   * Specifies whether to obtain the kubeconfig file that is used to connect to the cluster over the internal network. Valid values:
   * 
   * *   `true`: obtains the kubeconfig file that is used to connect to the master instance over the internal network.
   * *   `false`: obtains the kubeconfig file that is used to connect to the master instance over the Internet.
   * 
   * Default value: `false`
   * 
   * @example
   * false
   */
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
  /**
   * @remarks
   * The content of the kubeconfig file.
   * 
   * @example
   * "\\napiVersion: v1\\nclusters:\\n- cluster:\\n    server: https://172.16.11.***:6443\\n    certificate-authority-data: LS0tLS1CRU=...\\n  name: kubernetes\\ncontexts:\\n- context:\\n    cluster: kubernetes\\n    user: \\"kubernetes-a****\\"\\n  name: kubernetes-admin-cc2cbf5802bec4bfa9fae4014d8c****\\ncurrent-context: kubernetes-admin-cc2cbf5802bec4bfa9fae4014d8c9****\\nkind: Config\\npreferences: {}\\nusers:\\n- name: \\"kubernetes-admin\\"\\n  user:\\n    client-certificate-data: LS0tLS1CRU...\\n    client-key-data: LS0tCg==...\\n"
   */
  kubeconfig?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 5BE4C329-DCC2-5B61-8F66-112B7D7FC712
   */
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
  /**
   * @remarks
   * The ID of the Fleet instance. You can call the [DescribeHubClusters](https://help.aliyun.com/document_detail/424404.html) operation to query the created Fleet instances.
   * 
   * This parameter is required.
   * 
   * @example
   * c9cb1d933b2ab47ff9cd25571477dc8f2
   */
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
  /**
   * @remarks
   * The details of operations logs.
   */
  logs?: DescribeHubClusterLogsResponseBodyLogs[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 661192D7-25A6-54C2-B643-1129CB7D2768
   */
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
  /**
   * @remarks
   * The configurations of the cluster.
   * 
   * @example
   * Default
   */
  profile?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-aekz77rhypeu***
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags.
   */
  tag?: Tag[];
  static names(): { [key: string]: string } {
    return {
      profile: 'Profile',
      resourceGroupId: 'ResourceGroupId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      profile: 'string',
      resourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': Tag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHubClustersShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * The configurations of the cluster.
   * 
   * @example
   * Default
   */
  profile?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-aekz77rhypeu***
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags.
   */
  tagShrink?: string;
  static names(): { [key: string]: string } {
    return {
      profile: 'Profile',
      resourceGroupId: 'ResourceGroupId',
      tagShrink: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      profile: 'string',
      resourceGroupId: 'string',
      tagShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHubClustersResponseBody extends $tea.Model {
  /**
   * @remarks
   * The information about clusters.
   */
  clusters?: DescribeHubClustersResponseBodyClusters[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 2D676EFC-8C04-5CCE-A08E-BB97D24B47E8
   */
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
  /**
   * @remarks
   * The status of the association between the clusters and Service Mesh (ASM).
   * 
   * This parameter is required.
   * 
   * @example
   * c2f41fd4599454a9c9ad8b3daafe873ad
   */
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
  /**
   * @remarks
   * The status of the associated clusters. Valid values: - initial: The associated clusters are being initialized. - failed: The associated clustersfailed to be created. - running: The associated clusters are running. - inactive: The associated clusters are inactive. - deleting: The associated clusters are being deleted. - deleted: The associated clusters are deleted.
   */
  clusters?: DescribeManagedClustersResponseBodyClusters[];
  /**
   * @remarks
   * VPC ID
   * 
   * @example
   * BDA85C7A-FC81-56C4-9BC2-9112EE970059
   */
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
  /**
   * @remarks
   * A list of policies.
   */
  policies?: DescribePoliciesResponseBodyPolicies[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9439169C-64C1-5849-9F7C-E3E60BDDEF7A
   */
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
  /**
   * @remarks
   * The policy name.
   * 
   * @example
   * ACKAllowedRepos
   */
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
  /**
   * @remarks
   * The policies.
   */
  policy?: DescribePolicyDetailsResponseBodyPolicy;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2D676EFC-8C04-5CCE-A08E-BB97D24B47E8
   */
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
  /**
   * @remarks
   * The ID of the master instance.
   * 
   * This parameter is required.
   * 
   * @example
   * c09946603cd764dac96135f51d1ba****
   */
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
  /**
   * @remarks
   * The detailed information about the policies.
   */
  policyGovernances?: DescribePolicyGovernanceInClusterResponseBodyPolicyGovernances[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 96C6A284-0EC3-5486-9A97-E8E9EE27E9EF
   */
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
  /**
   * @remarks
   * The ID of the master instance.
   * 
   * This parameter is required.
   * 
   * @example
   * c102fe5f1ee5d4c87a68121a77d8b****
   */
  clusterId?: string;
  /**
   * @remarks
   * The name of the policy.
   * 
   * This parameter is required.
   * 
   * @example
   * ACKNoEnvVarSecrets
   */
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
  /**
   * @remarks
   * A list of policy instances.
   */
  policies?: DescribePolicyInstancesResponseBodyPolicies[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5BE4C329-DCC2-5B61-8F66-112B7D7FC712
   */
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
  /**
   * @remarks
   * The ID of the master instance.
   * 
   * This parameter is required.
   * 
   * @example
   * c676decda7b8148d69a9aba751877****
   */
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
  /**
   * @remarks
   * The number of policy instances of each policy type.
   */
  policies?: DescribePolicyInstancesStatusResponseBodyPolicies;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5D89C59A-A7EB-5BF8-B094-6479175346CA
   */
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
  /**
   * @remarks
   * The language. Valid values: zh and en.
   * 
   * @example
   * en
   */
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
  /**
   * @remarks
   * A list of available regions that are returned.
   */
  regions?: DescribeRegionsResponseBodyRegions[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C0EE05F4-6C1D-5993-B028-B569F9ED6B51
   */
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
  /**
   * @remarks
   * The ID of the RAM user that you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * 21175****
   * 
   * **if can be null:**
   * false
   */
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
  /**
   * @remarks
   * The details about the permissions of the RAM user.
   */
  permissions?: DescribeUserPermissionsResponseBodyPermissions[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * EA06613B-37A3-549E-BAE0-E4AD8A6E93D7
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * This parameter is required.
   * 
   * @example
   * cb09fda0dc2f94a8397c76638c7ec****
   */
  clusterId?: string;
  /**
   * @remarks
   * The operation that you want to perform. Set the value to **DetachClusterFromHub**.
   * 
   * This parameter is required.
   * 
   * @example
   * ["c1c731554c1ec4a1ca9bb690ff9ed****"]
   */
  clusterIds?: string;
  /**
   * @remarks
   * Example 1
   * 
   * @example
   * false
   */
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
  /**
   * @remarks
   * Zhishi
   * 
   * @example
   * cc490b1e67ccc43a784727f29f33e****
   */
  clusterId?: string;
  managedClusterIds?: string[];
  /**
   * @remarks
   * You can call the DetachClusterFromHub operation to disassociate clusters from a master instance.
   * 
   * @example
   * 4412F213-DBCD-5D1B-A9A1-F6C26C6C19D9
   */
  requestId?: string;
  /**
   * @example
   * T-623a96b7bbeaac074b00****
   */
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
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * c102fe5f1ee5d4c87a68121a77d8b****
   */
  clusterId?: string;
  /**
   * @remarks
   * The entity to which the permissions are granted. A value of `true` indicates that the permissions are granted to a RAM user. A value of `false` indicates that the permissions are granted to a RAM role.
   * 
   * @example
   * false
   */
  isRamRole?: boolean;
  /**
   * @remarks
   * The name of the namespace.
   * 
   * *   If **RoleType** is set to **cluster**, you do not need to specify this parameter.
   * *   This parameter is required if **RoleType** is set to **namespace**.
   * *   If **RoleType** is set to **namespace** and **RoleName** is set to **gitops-dev**, this parameter is required and must be set to **argocd**.
   * 
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * The predefined role. Valid values:
   * 
   * *   admin: administrator
   * *   dev: developer
   * *   gitops-dev: GitOps developer. The parameter is available only for Fleet instances.
   * 
   * The value of RoleName and that of RoleType must meet the following requirements:
   * 
   * *   If **RoleType** is set to **cluster**, this parameter must be set to **admin**.
   * *   If **RoleType** is set to **namespace**, this parameter must be set to **dev** or **gitops-dev**.
   * 
   * This parameter is required.
   * 
   * @example
   * admin
   */
  roleName?: string;
  /**
   * @remarks
   * The authorization type. Valid values:
   * 
   * *   cluster: The permissions are granted to a cluster.
   * *   namespace: The permissions are granted to a namespace of a cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * cluster
   */
  roleType?: string;
  /**
   * @remarks
   * The ID of the RAM user or RAM role.
   * 
   * This parameter is required.
   * 
   * @example
   * 2176****
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 2D676EFC-8C04-5CCE-A08E-BB97D24B47E8
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
  /**
   * @remarks
   * The list of permissions that you want to grant to the RAM user.
   */
  permissions?: GrantUserPermissionsRequestPermissions[];
  /**
   * @remarks
   * The ID of the RAM user.
   * 
   * This parameter is required.
   * 
   * @example
   * 2367****
   */
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
  /**
   * @remarks
   * The list of permissions that you want to grant to the RAM user.
   */
  permissionsShrink?: string;
  /**
   * @remarks
   * The ID of the RAM user.
   * 
   * This parameter is required.
   * 
   * @example
   * 2367****
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4412F213-DBCD-5D1B-A9A1-F6C26C6C19D9
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
  /**
   * @remarks
   * The Internet access control list (ACL). This parameter takes effect only if PublicAccessEnabled is set to true.
   */
  accessControlList?: string[];
  /**
   * @remarks
   * The ID of the EIP.
   * 
   * @example
   * eip-xxx
   */
  apiServerEipId?: string;
  /**
   * @remarks
   * Specifies whether to enable Argo CD. This parameter takes effect only if Profile is set to XFlow. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  argoCDEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to enable high availability for Argo CD. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  argoCDHAEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to enable ArgoEvents. Valid values:
   * 
   * - true
   * - false
   * 
   * @example
   * true
   */
  argoEventsEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the workflow instance UI. This parameter takes effect only if Profile is set to XFlow. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  argoServerEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the audit logging feature. Valid values:
   * 
   * *   true: enables the audit logging feature.
   * *   false: disables the audit logging feature.
   * 
   * @example
   * true
   */
  auditLogEnabled?: boolean;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * c46979b1075f04d99b5f2b710393e5****
   */
  clusterId?: string;
  /**
   * @remarks
   * Specifies whether to enable the deletion protection feature for the cluster. After you enable the deletion protection feature for the cluster, you cannot delete the cluster in the console or by calling the DeleteHubCluster operation. Valid values:
   * 
   * *   true
   * *   false
   * 
   * Default value: false.
   * 
   * @example
   * true
   */
  deletionProtection?: boolean;
  /**
   * @remarks
   * Specifies whether to enable Service Mesh (ASM). Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  enableMesh?: boolean;
  /**
   * @remarks
   * Specifies whether to enable Gateway. Valid values:
   * - true
   * - false
   * 
   * @example
   * true
   */
  gatewayEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the monitoring dashboard feature for the workflow instance. This parameter takes effect only if Profile is set to XFlow. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  monitorEnabled?: boolean;
  /**
   * @remarks
   * The name of the master instance. The name must be 1 to 63 characters in length. It must start with a letter, and can contain letters, digits, underscores (_), and hyphens (-).
   * 
   * @example
   * ack-demo
   */
  name?: string;
  /**
   * @remarks
   * The limit on the prices of containers in the workflow. This parameter takes effect only if the WorkflowScheduleMode parameter is set to cost-optimized.
   * 
   * @example
   * 0.08
   */
  priceLimit?: string;
  /**
   * @remarks
   * Specifies whether to enable public domain name resolution in the Argo CD or Argo Workflow console. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  publicAccessEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to associate an elastic IP address (EIP) with the API server. Valid values:
   * 
   * *   true: associates an EIP with the API server. You can specify ApiServerEipId. If you do not specify ApiServerEipId, the system automatically creates an EIP.
   * *   false: disassociates an EIP from the API server.
   * 
   * @example
   * true
   */
  publicApiServerEnabled?: boolean;
  /**
   * @remarks
   * The vSwitches.
   */
  vSwitches?: string[];
  /**
   * @remarks
   * The scheduling mode of the workflow. This parameter takes effect only if Profile is set to XFlow. Valid values:
   * 
   * *   cost-optimized: cost-prioritized scheduling mode.
   * *   stock-optimized: inventory-prioritized scheduling mode.
   * 
   * @example
   * cost-optimized
   */
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
  /**
   * @remarks
   * The Internet access control list (ACL). This parameter takes effect only if PublicAccessEnabled is set to true.
   */
  accessControlListShrink?: string;
  /**
   * @remarks
   * The ID of the EIP.
   * 
   * @example
   * eip-xxx
   */
  apiServerEipId?: string;
  /**
   * @remarks
   * Specifies whether to enable Argo CD. This parameter takes effect only if Profile is set to XFlow. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  argoCDEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to enable high availability for Argo CD. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  argoCDHAEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to enable ArgoEvents. Valid values:
   * 
   * - true
   * - false
   * 
   * @example
   * true
   */
  argoEventsEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the workflow instance UI. This parameter takes effect only if Profile is set to XFlow. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  argoServerEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the audit logging feature. Valid values:
   * 
   * *   true: enables the audit logging feature.
   * *   false: disables the audit logging feature.
   * 
   * @example
   * true
   */
  auditLogEnabled?: boolean;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * c46979b1075f04d99b5f2b710393e5****
   */
  clusterId?: string;
  /**
   * @remarks
   * Specifies whether to enable the deletion protection feature for the cluster. After you enable the deletion protection feature for the cluster, you cannot delete the cluster in the console or by calling the DeleteHubCluster operation. Valid values:
   * 
   * *   true
   * *   false
   * 
   * Default value: false.
   * 
   * @example
   * true
   */
  deletionProtection?: boolean;
  /**
   * @remarks
   * Specifies whether to enable Service Mesh (ASM). Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  enableMesh?: boolean;
  /**
   * @remarks
   * Specifies whether to enable Gateway. Valid values:
   * - true
   * - false
   * 
   * @example
   * true
   */
  gatewayEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the monitoring dashboard feature for the workflow instance. This parameter takes effect only if Profile is set to XFlow. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  monitorEnabled?: boolean;
  /**
   * @remarks
   * The name of the master instance. The name must be 1 to 63 characters in length. It must start with a letter, and can contain letters, digits, underscores (_), and hyphens (-).
   * 
   * @example
   * ack-demo
   */
  name?: string;
  /**
   * @remarks
   * The limit on the prices of containers in the workflow. This parameter takes effect only if the WorkflowScheduleMode parameter is set to cost-optimized.
   * 
   * @example
   * 0.08
   */
  priceLimit?: string;
  /**
   * @remarks
   * Specifies whether to enable public domain name resolution in the Argo CD or Argo Workflow console. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  publicAccessEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to associate an elastic IP address (EIP) with the API server. Valid values:
   * 
   * *   true: associates an EIP with the API server. You can specify ApiServerEipId. If you do not specify ApiServerEipId, the system automatically creates an EIP.
   * *   false: disassociates an EIP from the API server.
   * 
   * @example
   * true
   */
  publicApiServerEnabled?: boolean;
  /**
   * @remarks
   * The vSwitches.
   */
  vSwitchesShrink?: string;
  /**
   * @remarks
   * The scheduling mode of the workflow. This parameter takes effect only if Profile is set to XFlow. Valid values:
   * 
   * *   cost-optimized: cost-prioritized scheduling mode.
   * *   stock-optimized: inventory-prioritized scheduling mode.
   * 
   * @example
   * cost-optimized
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 52C1B7DF-96C1-5214-97B6-1B0859FEAFE5
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
  /**
   * @remarks
   * The ID of the master instance.
   * 
   * This parameter is required.
   * 
   * @example
   * c8e28143817db4b039b8548d7c899****
   */
  clusterId?: string;
  /**
   * @remarks
   * The namespace to which the permissions are scoped. By default, this parameter is empty when you set RoleType to cluster.
   * 
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * Specifies the predefined role that you want to assign. Valid values:
   * 
   * *   admin: the administrator role.
   * *   dev: the developer role.
   * 
   * This parameter is required.
   * 
   * @example
   * admin
   */
  roleName?: string;
  /**
   * @remarks
   * The authorization type. Valid values:
   * 
   * *   cluster: specifies that the permissions are scoped to a master instance.
   * *   namespace: specifies that the permissions are scoped to a namespace of a cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * cluster
   */
  roleType?: string;
  /**
   * @remarks
   * The ID of the RAM user.
   * 
   * This parameter is required.
   * 
   * @example
   * 2176****
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 62F5AA2B-A2C9-5135-BCE2-C2167099****
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
  /**
   * @remarks
   * The ID of the elastic IP address (EIP).
   * 
   * @example
   * eip-abc****
   */
  apiServerEipId?: string;
  /**
   * @remarks
   * Indicates whether the API server is accessible over the Internet. Valid values:
   * 
   * *   true: The API server is accessible over the Internet.
   * *   false: The API server is inaccessible over the Internet.
   * 
   * @example
   * true
   */
  enabledPublic?: boolean;
  /**
   * @remarks
   * The ID of the Server Load Balancer (SLB) instance.
   * 
   * @example
   * lb-hp3ioqbfeq37h13rwe***
   */
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
  /**
   * @remarks
   * The Internet access control list (ACL). This parameter takes effect only if PublicAccessEnabled is set to true.
   */
  accessControlList?: string[];
  /**
   * @remarks
   * Indicates whether GitOps is enabled. Valid values:
   * 
   * *   true: GitOps is enabled.
   * *   false: GitOps is disabled.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * Indicates whether GitOps High Availability is enabled. Valid values:
   * 
   * *   true:  GitOps High Availability is enabled.
   * *   false:  GitOps High Availability is disabled.
   * 
   * @example
   * true
   */
  HAEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to enable public domain name resolution in the Argo CD or Argo Workflow console. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
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
  /**
   * @remarks
   * The Internet access control list (ACL). This parameter takes effect only if PublicAccessEnabled is set to true.
   */
  accessControlList?: string[];
  /**
   * @remarks
   * Specifies whether to enable the argo workflow. Valid values:
   * 
   * *   **false** (default)
   * *   **true**
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * Specifies whether to enable public domain name resolution in the Argo CD or Argo Workflow console. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  publicAccessEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the argo workflow. UI Valid values:
   * 
   * *   **false** (default)
   * *   **true**
   * 
   * @example
   * true
   */
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
  /**
   * @remarks
   * The Argo workflow metadata.
   */
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
  /**
   * @remarks
   * The GitOps metadata.
   */
  gitOps?: DescribeHubClusterDetailsResponseBodyClusterClusterInfoMetaDataACKOneGitOps;
  /**
   * @remarks
   * The workflow metadata.
   */
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
  /**
   * @remarks
   * The cluster metadata.
   */
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

export class DescribeHubClusterDetailsResponseBodyClusterClusterInfoTags extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
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

export class DescribeHubClusterDetailsResponseBodyClusterClusterInfo extends $tea.Model {
  /**
   * @remarks
   * The ID of the master instance.
   * 
   * @example
   * cb09fda0dc2f94a8397c76638c7ecf***
   */
  clusterId?: string;
  /**
   * @remarks
   * The specification of the master instance. Valid value:
   * 
   * *   ack.pro.small: ACK Pro cluster
   * 
   * @example
   * ack.pro.small
   */
  clusterSpec?: string;
  /**
   * @remarks
   * The time when the master instance was created.
   * 
   * @example
   * 2022-03-23T06:22:28Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The error message returned when the master instance failed to be created.
   * 
   * @example
   * The specified product does not exist.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The cluster metadata.
   */
  metaData?: DescribeHubClusterDetailsResponseBodyClusterClusterInfoMetaData;
  /**
   * @remarks
   * The name of the master instance.
   * 
   * @example
   * ackone-heyuan
   */
  name?: string;
  /**
   * @remarks
   * The configurations of the master instance.
   * 
   * @example
   * Default
   */
  profile?: string;
  /**
   * @remarks
   * The ID of the region in which the master instance resides.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of Resource Group.
   * 
   * @example
   * rg-1w4vdvo6p51***
   */
  resourceGroupID?: string;
  /**
   * @remarks
   * The status of the master instance. Valid values:
   * 
   * *   initial: The master instance is being initialized.
   * *   failed: The master instance failed to be created.
   * *   running: The master instance is running
   * *   inactive: The master instance is pending.
   * *   deleting: The master instance is being deleted.
   * *   delete_failed: The master instance failed to be deleted.
   * *   deleted: The master instance is deleted.
   * 
   * @example
   * running
   */
  state?: string;
  tags?: DescribeHubClusterDetailsResponseBodyClusterClusterInfoTags[];
  /**
   * @remarks
   * The time when the master instance was updated.
   * 
   * @example
   * 2022-03-21T02:51:35.542Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The version of the master instance.
   * 
   * @example
   * 1.22.3-aliyun.1
   */
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
      tags: 'Tags',
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
      tags: { 'type': 'array', 'itemType': DescribeHubClusterDetailsResponseBodyClusterClusterInfoTags },
      updateTime: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHubClusterDetailsResponseBodyClusterConditions extends $tea.Model {
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * The reason for the deletion condition.
   * 
   * @example
   * Successful
   */
  reason?: string;
  /**
   * @remarks
   * The status of the master instance that the deletion condition indicates. Valid values:
   * 
   * *   True: The master instance cannot be deleted.
   * *   False: The master instance can be deleted.
   * *   Unknow: Whether the master instance can be deleted is unknown.
   * 
   * @example
   * True
   */
  status?: string;
  /**
   * @remarks
   * The type of deletion condition.
   * 
   * @example
   * DeletionProtection
   */
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
  /**
   * @remarks
   * The endpoint that is used to access the API server over the internal network.
   * 
   * @example
   * https://172.16.6.**:6443
   */
  intranetApiServerEndpoint?: string;
  /**
   * @remarks
   * The endpoint that is used to access the API server over the Internet.
   * 
   * @example
   * https://123.57.21.***:6443
   */
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
  /**
   * @remarks
   * Indicates whether the audit logging feature is enabled. Valid values:
   * 
   * *   true: Audit logging is enabled.
   * *   false: Audit logging is disabled.
   * 
   * @example
   * false
   */
  enableLog?: boolean;
  /**
   * @remarks
   * The name of the project of Log Service.
   * 
   * @example
   * k8s-log-abc
   */
  logProject?: string;
  /**
   * @remarks
   * The number of days that logs are retained by Log Service.
   * 
   * @example
   * 7
   */
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
  /**
   * @remarks
   * Indicates whether ASM is enabled. Valid values:
   * 
   * *   true: ASM is enabled.
   * *   false: ASM is disabled.
   * 
   * @example
   * false
   */
  enableMesh?: boolean;
  /**
   * @remarks
   * service mesh (ASM) instance ID
   * 
   * @example
   * cb09fda0dc2f94a8397c76638c7ecf***
   */
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
  /**
   * @remarks
   * The domain name of the master instance.
   * 
   * @example
   * cluster.local
   */
  clusterDomain?: string;
  /**
   * @remarks
   * The IP version that is supported by the master instance. Valid values:
   * 
   * *   ipv4: IPv4.
   * *   ipv6: IPv6.
   * *   dual: IPv4 and IPv6.
   * 
   * @example
   * ipv4
   */
  IPStack?: string;
  /**
   * @remarks
   * The IDs of the associated security groups.
   */
  securityGroupIDs?: string[];
  /**
   * @remarks
   * The details of the vSwitches.
   */
  vSwitches?: string[];
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) in which the master instance resides.
   * 
   * @example
   * vpc-f8ziib1019r9o0hdv2***
   */
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
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * @example
   * vsw-wz9sf0hsuizl7bxnj****
   */
  vswitchId?: string;
  /**
   * @remarks
   * The zone ID of the cluster.
   * 
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the most recent zone list.
   * 
   * @example
   * cn-hangzhou-e
   */
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
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the most recent region list.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The vSwitches.
   */
  vSwitches?: DescribeHubClusterDetailsResponseBodyClusterWorkflowConfigWorkflowUnitsVSwitches[];
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * @example
   * vpc-f8zukabbkv5aw7zkm****
   */
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
  /**
   * @remarks
   * Specifies whether to enable the workflow instance UI. This parameter takes effect only if Profile is set to XFlow. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  argoServerEnabled?: boolean;
  /**
   * @remarks
   * The limit on the prices of containers in the workflow. This parameter takes effect only if the WorkflowScheduleMode parameter is set to cost-optimized.
   * 
   * @example
   * 0.08
   */
  priceLimit?: string;
  /**
   * @remarks
   * The scheduling mode of the workflow. This parameter takes effect only if Profile is set to XFlow. Valid values:
   * 
   * *   cost-optimized: cost-prioritized scheduling mode.
   * *   stock-optimized: inventory-prioritized scheduling mode.
   * 
   * @example
   * cost-optimized
   */
  workflowScheduleMode?: string;
  /**
   * @remarks
   * The Argo workflow regions  configuration.
   */
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
  /**
   * @remarks
   * The details of the API server of the master instance.
   */
  apiServer?: DescribeHubClusterDetailsResponseBodyClusterApiServer;
  /**
   * @remarks
   * The details of the master instance.
   */
  clusterInfo?: DescribeHubClusterDetailsResponseBodyClusterClusterInfo;
  /**
   * @remarks
   * The deletion conditions of the master instance.
   */
  conditions?: DescribeHubClusterDetailsResponseBodyClusterConditions[];
  /**
   * @remarks
   * The endpoint of the master instance.
   */
  endpoints?: DescribeHubClusterDetailsResponseBodyClusterEndpoints;
  /**
   * @remarks
   * The logging configuration.
   */
  logConfig?: DescribeHubClusterDetailsResponseBodyClusterLogConfig;
  /**
   * @remarks
   * The configurations of Alibaba Cloud Service Mesh (ASM).
   */
  meshConfig?: DescribeHubClusterDetailsResponseBodyClusterMeshConfig;
  /**
   * @remarks
   * The network configurations of the master instance.
   */
  network?: DescribeHubClusterDetailsResponseBodyClusterNetwork;
  /**
   * @remarks
   * The Argo workflow configuration.
   */
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
  /**
   * @remarks
   * The ID of the Fleet instance.
   * 
   * @example
   * c102fe5f1ee5d4c87a68121a77d8b0f38
   */
  clusterId?: string;
  /**
   * @remarks
   * The log of the Fleet instance.
   * 
   * @example
   * Cluster Created
   */
  clusterLog?: string;
  /**
   * @remarks
   * The time when the log was created. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2021-12-02T11:48:15+08:00
   */
  creationTime?: string;
  /**
   * @remarks
   * The log level. Valid values:
   * 
   * *   error
   * *   warn
   * *   info
   * 
   * @example
   * INFO
   */
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
  /**
   * @remarks
   * The elastic IP address (EIP) ID.
   * 
   * @example
   * eip-xxx
   */
  apiServerEipId?: string;
  /**
   * @remarks
   * Indicates whether the public endpoint is enabled for the API server. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  enabledPublic?: boolean;
  /**
   * @remarks
   * The ID of the Server Load Balancer (SLB) instance that is associated with the cluster.
   * 
   * @example
   * lb-bp1qyp4l6bscqxw69****
   */
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

export class DescribeHubClustersResponseBodyClustersClusterInfoTags extends $tea.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * headername
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * release
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
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

export class DescribeHubClustersResponseBodyClustersClusterInfo extends $tea.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * c2d3e0121ea214b438010502a8019****
   */
  clusterId?: string;
  /**
   * @remarks
   * The specifications of the cluster.
   * 
   * *   Only ack.pro.small may be returned.
   * 
   * @example
   * ack.pro.small
   */
  clusterSpec?: string;
  /**
   * @remarks
   * The time when the cluster was created.
   * 
   * @example
   * 2021-11-05T10:25:48Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The error message that is returned if the cluster failed to be created.
   * 
   * @example
   * Success
   */
  errorMessage?: string;
  /**
   * @remarks
   * The cluster name.
   * 
   * @example
   * ackone-heyuan
   */
  name?: string;
  /**
   * @remarks
   * The configurations of the cluster.
   * 
   * @example
   * Default
   */
  profile?: string;
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
   * rg-qh2zgjsdv52***
   */
  resourceGroupID?: string;
  /**
   * @remarks
   * The state of the cluster. Valid values:
   * 
   * *   initial: The cluster is being initialized.
   * *   failed: The cluster failed to be created.
   * *   running: The cluster is running
   * *   inactive: The cluster is not activated.
   * *   deleting: The cluster is being deleted.
   * *   delete_failed: The cluster failed to be deleted.
   * *   deleted: The cluster is deleted.
   * 
   * @example
   * running
   */
  state?: string;
  /**
   * @remarks
   * The tags.
   */
  tags?: DescribeHubClustersResponseBodyClustersClusterInfoTags[];
  /**
   * @remarks
   * The time when the cluster was last modified.
   * 
   * @example
   * 2021-09-02T13:39:50Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The version of the cluster.
   * 
   * @example
   * 1.22.3-aliyun.1
   */
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
      tags: 'Tags',
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
      tags: { 'type': 'array', 'itemType': DescribeHubClustersResponseBodyClustersClusterInfoTags },
      updateTime: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHubClustersResponseBodyClustersConditions extends $tea.Model {
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * Successful!
   */
  message?: string;
  /**
   * @remarks
   * The reason for the deletion condition.
   * 
   * @example
   * Successful
   */
  reason?: string;
  /**
   * @remarks
   * The state of the cluster that the deletion condition indicates. Valid values:
   * 
   * *   True: The cluster cannot be deleted.
   * *   False: The cluster can be deleted.
   * *   Unknow: Whether the cluster can be deleted is unknown.
   * 
   * @example
   * True
   */
  status?: string;
  /**
   * @remarks
   * The type of deletion condition.
   * 
   * @example
   * DeletionProtection
   */
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
  /**
   * @remarks
   * The internal endpoint of the API server.
   * 
   * @example
   * https://172.16.6.**:6443
   */
  intranetApiServerEndpoint?: string;
  /**
   * @remarks
   * The public endpoint of the API server.
   * 
   * @example
   * https://123.57.21.***:6443
   */
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
  /**
   * @remarks
   * Indicates whether the audit logging feature is enabled. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  enableLog?: boolean;
  /**
   * @remarks
   * The name of the project in Simple Log Service.
   * 
   * @example
   * audit-log-abc
   */
  logProject?: string;
  /**
   * @remarks
   * The number of days that logs are retained by Simple Log Service.
   * 
   * @example
   * 7
   */
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
  /**
   * @remarks
   * Indicates whether ASM is enabled. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  enableMesh?: boolean;
  /**
   * @remarks
   * The ASM instance ID.
   * 
   * @example
   * c2d3e0121ea214b438010502a8019****
   */
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
  /**
   * @remarks
   * The domain name of the cluster.
   * 
   * @example
   * cluster.local
   */
  clusterDomain?: string;
  /**
   * @remarks
   * The security group IDs.
   */
  securityGroupIDs?: string[];
  /**
   * @remarks
   * The IDs of vSwitches to which the cluster belongs.
   */
  vSwitches?: string[];
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) to which the cluster belongs.
   * 
   * @example
   * vpc-2zeusrwi7c2mlww4a****
   */
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
  /**
   * @remarks
   * The information about the API server.
   */
  apiServer?: DescribeHubClustersResponseBodyClustersApiServer;
  /**
   * @remarks
   * The details of the cluster.
   */
  clusterInfo?: DescribeHubClustersResponseBodyClustersClusterInfo;
  /**
   * @remarks
   * The deletion conditions of the cluster.
   */
  conditions?: DescribeHubClustersResponseBodyClustersConditions[];
  /**
   * @remarks
   * The endpoints of the cluster.
   */
  endpoints?: DescribeHubClustersResponseBodyClustersEndpoints;
  /**
   * @remarks
   * The logging configurations.
   */
  logConfig?: DescribeHubClustersResponseBodyClustersLogConfig;
  /**
   * @remarks
   * The configurations of Alibaba Cloud Service Mesh (ASM).
   */
  meshConfig?: DescribeHubClustersResponseBodyClustersMeshConfig;
  /**
   * @remarks
   * The network configurations of the cluster.
   */
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
  /**
   * @remarks
   * Information about the master instance.
   * 
   * @example
   * c2f41fd4599454a9c9ad8b3daafe873ad
   */
  clusterID?: string;
  /**
   * @remarks
   * The ID of the master instance.
   * 
   * @example
   * ack.pro.small
   */
  clusterSpec?: string;
  /**
   * @remarks
   * The time when the master instance was created.
   * 
   * @example
   * One
   */
  clusterType?: string;
  /**
   * @remarks
   * The ID of the master instance.
   * 
   * @example
   * 2022-03-23T06:22:28Z
   */
  created?: string;
  /**
   * @remarks
   * The name of the master instance.
   * 
   * @example
   * 1.22.3-aliyun.1
   */
  currentVersion?: string;
  /**
   * @remarks
   * The specification of the master instance. Valid values: - ack.pro.small: ACK Pro.
   * 
   * @example
   * 1.20.4-aliyun.1
   */
  initVersion?: string;
  /**
   * @remarks
   * The status information.
   * 
   * @example
   * ackone-heyuan
   */
  name?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * Default
   */
  profile?: string;
  /**
   * @remarks
   * The ID of the master instance.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The name of the master instance.
   * 
   * @example
   * rg-acfmx7o7ewyqcby
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The current Kubernetes version of the master instance.
   * 
   * @example
   * running
   */
  state?: string;
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * @example
   * 2022-03-23T06:22:28Z
   */
  updated?: string;
  /**
   * @remarks
   * The original Kubernetes version of the master instance.
   * 
   * @example
   * vsw-m5e0pbkgmhvzecf7enfym
   */
  vSwitchID?: string;
  /**
   * @remarks
   * The status of the association between the clusters and the master instance. Valid values: - Installing: The clusters are being associated with the master instance. - Successed: The clusters are associated with the master instance. - Failed: The clusters failed to be associated with the master instance. - Deleting: The clusters are being disassociated from the master instance. - Deleted: The clusters are disassociated from the master instance.
   * 
   * @example
   * vpc-bp1fhizs9fxuvit06zeb9
   */
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
  /**
   * @example
   * true
   */
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
  /**
   * @remarks
   * Query the clusters that are associated with a master instance.
   * 
   * @example
   * SUCCESS
   */
  message?: string;
  /**
   * @remarks
   * You can call the DescribeManagedClusters operation to query the clusters that are associated with a master instance.
   * 
   * @example
   * Successed
   */
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
  /**
   * @remarks
   * The name of the master instance.
   */
  cluster?: DescribeManagedClustersResponseBodyClustersCluster;
  /**
   * @remarks
   * Zhishi
   */
  meshStatus?: DescribeManagedClustersResponseBodyClustersMeshStatus;
  /**
   * @remarks
   * Example 1
   */
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
  /**
   * @remarks
   * The policy type.
   * 
   * @example
   * psp
   */
  category?: string;
  /**
   * @remarks
   * The names of the policies of each policy type.
   */
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
  /**
   * @remarks
   * The action of the policy. Valid values:
   * 
   * *   enforce: blocks deployments that match the policy.
   * *   inform: generates alerts for deployments that match the policy.
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
   * The time when the policy was created.
   * 
   * @example
   * 2021-11-18T10:52:17+08:00
   */
  created?: string;
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
   * *   1: Parameters are not required.
   * 
   * @example
   * 0
   */
  noConfig?: number;
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
   * The content of the policy.
   * 
   * @example
   * The content of the policy.
   */
  template?: string;
  /**
   * @remarks
   * The time when the policy was last updated.
   * 
   * @example
   * 2021-11-18T10:52:17+08:00
   */
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
  /**
   * @remarks
   * The ID of the associated cluster.
   * 
   * @example
   * ca5cf1b5edb5c4736a6ea0dfb4061****
   */
  clusterId?: string;
  /**
   * @remarks
   * The specifications of the associated cluster.
   * 
   * @example
   * ack.pro.small
   */
  clusterSpec?: string;
  /**
   * @remarks
   * The type of the associated cluster.
   * 
   * @example
   * ManagedKubernetes
   */
  clusterType?: string;
  /**
   * @remarks
   * The name of the associated cluster.
   * 
   * @example
   * ack-001
   */
  name?: string;
  /**
   * @remarks
   * The identifier of the associated cluster.
   * 
   * @example
   * Default
   */
  profile?: string;
  /**
   * @remarks
   * The region ID of the associated cluster.
   * 
   * @example
   * cn-heyuan
   */
  regionId?: string;
  /**
   * @remarks
   * The status of the associated cluster.
   * 
   * @example
   * running
   */
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
  /**
   * @remarks
   * The number of log entries in the query result.
   * 
   * @example
   * 100
   */
  count?: string;
  /**
   * @remarks
   * The name of the Log Service project.
   * 
   * @example
   * demo
   */
  logProject?: string;
  /**
   * @remarks
   * The name of the Logstore.
   * 
   * @example
   * demo
   */
  logStore?: string;
  /**
   * @remarks
   * The content of the audit log.
   */
  logs?: { [key: string]: string }[];
  /**
   * @remarks
   * The status of the query. Valid values:
   * 
   * *   Complete: The query is successful, and the complete result is returned.
   * *   Incomplete: The query is successful, but the query result is incomplete. To obtain the complete result, you must call the operation again.
   * 
   * @example
   * Complete
   */
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
  /**
   * @remarks
   * The types of policies that are enabled in the associated cluster.
   * 
   * @example
   * 2
   */
  enabledCount?: number;
  /**
   * @remarks
   * The severity level.
   * 
   * @example
   * low
   */
  severity?: string;
  /**
   * @remarks
   * The types of policies of each severity level.
   * 
   * @example
   * 2
   */
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
  /**
   * @remarks
   * The severity level.
   * 
   * @example
   * low
   */
  severity?: string;
  /**
   * @remarks
   * The number of deployments that are blocked.
   * 
   * @example
   * 2
   */
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
  /**
   * @remarks
   * The severity level.
   * 
   * @example
   * low
   */
  severity?: string;
  /**
   * @remarks
   * The number of deployments that have triggered alerting.
   * 
   * @example
   * 2
   */
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
  /**
   * @remarks
   * The information about the deployments that are blocked.
   */
  deny?: DescribePolicyGovernanceInClusterResponseBodyPolicyGovernancesPolicyGovernanceViolationTotalViolationsDeny[];
  /**
   * @remarks
   * The information about the deployments that have triggered alerting.
   */
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
  /**
   * @remarks
   * The description of the policy.
   * 
   * @example
   * Restricts secrets used in pod envs
   */
  policyDescription?: string;
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
   * The severity level of the policy.
   * 
   * @example
   * low
   */
  severity?: string;
  /**
   * @remarks
   * The number of times that the policy blocks deployments.
   * 
   * @example
   * 2
   */
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
  /**
   * @remarks
   * The description of the policy.
   * 
   * @example
   * Restricts secrets used in pod envs
   */
  policyDescription?: string;
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
   * The severity level of the policy.
   * 
   * @example
   * low
   */
  severity?: string;
  /**
   * @remarks
   * The number of times that the policy generates alerts.
   * 
   * @example
   * 2
   */
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
  /**
   * @remarks
   * The information about the deployments that are blocked.
   */
  deny?: DescribePolicyGovernanceInClusterResponseBodyPolicyGovernancesPolicyGovernanceViolationViolationsDeny[];
  /**
   * @remarks
   * The information about the deployments that have triggered alerting.
   */
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
  /**
   * @remarks
   * The number of deployments that match the policies in the associated cluster, including deployments that are blocked and deployments that have triggered alerting. The deployments are classified by severity level.
   */
  totalViolations?: DescribePolicyGovernanceInClusterResponseBodyPolicyGovernancesPolicyGovernanceViolationTotalViolations;
  /**
   * @remarks
   * The number of deployments that match the policies in the associated cluster, including deployments that are blocked and deployments that have triggered alerting. The deployments are classified by policy type.
   */
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
  /**
   * @remarks
   * The audit log generated by the associated cluster.
   */
  admitLog?: DescribePolicyGovernanceInClusterResponseBodyPolicyGovernancesPolicyGovernanceAdmitLog;
  /**
   * @remarks
   * The number of policies of each severity level enabled in the associated cluster.
   */
  onState?: DescribePolicyGovernanceInClusterResponseBodyPolicyGovernancesPolicyGovernanceOnState[];
  /**
   * @remarks
   * The number of deployments that match the policies in the associated cluster, including deployments that are blocked and deployments that have triggered alerting.
   */
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
  /**
   * @remarks
   * The information about the associated clusters in which the policies are deployed.
   */
  cluster?: DescribePolicyGovernanceInClusterResponseBodyPolicyGovernancesCluster;
  /**
   * @remarks
   * The detailed policy information.
   */
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
  /**
   * @remarks
   * The ID of the associated cluster.
   * 
   * @example
   * cd0e6882394f7496589837cac3585****
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
   * The action of the policy. Valid values:
   * 
   * *   deny: blocks deployments that match the policy.
   * *   warn: generates alerts for deployments that match the policy.
   * 
   * @example
   * warn
   */
  policyAction?: string;
  /**
   * @remarks
   * The type of the policy.
   * 
   * @example
   * k8s-general
   */
  policyCategory?: string;
  /**
   * @remarks
   * The description of the policy.
   * 
   * @example
   * Restricts secrets used in pod envs
   */
  policyDescription?: string;
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
   * The parameters of the policy instance.
   */
  policyParameters?: { [key: string]: string };
  /**
   * @remarks
   * The applicable scope of the policy instance.
   * 
   * A value of \\* indicates all namespaces. This is the default value.
   * 
   * Multiple namespaces are separated by commas (,).
   * 
   * @example
   * *
   */
  policyScope?: string;
  /**
   * @remarks
   * The severity level of the policy.
   * 
   * @example
   * low
   */
  policySeverity?: string;
  /**
   * @remarks
   * The total number of deployments that match the policy in the associated cluster, including the deployments that are blocked and the deployments that have triggered alerting.
   * 
   * @example
   * 2
   */
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
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * c639e5310e73e4a29ab18d6330a633****
   */
  clusterId?: string;
  /**
   * @remarks
   * The status of the policy deployment.
   * 
   * @example
   * Success
   */
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
  /**
   * @remarks
   * The type of the policy.
   * 
   * @example
   * compliance
   */
  policyCategory?: string;
  /**
   * @remarks
   * The associated clusters in which the policy instances are deployed.
   */
  policyClusters?: DescribePolicyInstancesStatusResponseBodyPoliciesPolicyInstancesPolicyClusters[];
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
   * The number of policy instances that are deployed. If this parameter is left empty, no policy instance is deployed.
   * 
   * @example
   * 2
   */
  policyInstancesCount?: number;
  /**
   * @remarks
   * The policy name.
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
   * low
   */
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
  /**
   * @remarks
   * The number of policy instances.
   * 
   * @example
   * 2
   */
  severityCount?: string;
  /**
   * @remarks
   * The severity level of the policy.
   * 
   * @example
   * low
   */
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
  /**
   * @remarks
   * The number of policy instances of each policy type.
   */
  policyInstances?: DescribePolicyInstancesStatusResponseBodyPoliciesPolicyInstances[];
  /**
   * @remarks
   * The number of policy instances that are deployed in the cluster.
   */
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
  /**
   * @remarks
   * The name of the region.
   * 
   * @example
   * China (Beijing)
   */
  localName?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-beijing
   */
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
  /**
   * @remarks
   * The authorization setting. Valid values:
   * 
   * *   {cluster_id} is returned if the permissions are scoped to a cluster.
   * *   {cluster_id}/{namespace} is returned if the permissions are scoped to a namespace of a cluster.
   * *   all-clusters is returned if the permissions are scoped to all clusters.
   * 
   * @example
   * cffef3c9c7ba145b083292942a2c3****
   */
  resourceId?: string;
  /**
   * @remarks
   * The authorization type. Valid values:
   * 
   * *   cluster: indicates that the permissions are scoped to a cluster.
   * *   namespace: indicates that the permissions are scoped to a namespace of a cluster.
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
   * *   admin: administrator
   * *   dev: developer
   * 
   * @example
   * dev
   */
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
  /**
   * @remarks
   * The master instance ID.
   * 
   * *   When the role_type parameter is set to all-clusters, set the parameter to an empty string.
   * 
   * @example
   * cf67bdb0ffcb349ecabc1ca70da78****
   */
  clusterId?: string;
  /**
   * @remarks
   * The entity to which the permissions are granted. A value of `true` indicates that the permissions are granted to a RAM user. A value of `false` indicates that the permissions are granted to a RAM role.
   * 
   * @example
   * true
   */
  isRamRole?: boolean;
  /**
   * @remarks
   * The namespace to which the permissions are scoped. By default, this parameter is empty when you set RoleType to cluster.
   * 
   * @example
   * test
   */
  namespace?: string;
  /**
   * @remarks
   * The predefined role that you want to assign. Valid values:
   * 
   * *   admin: the administrator role.
   * *   dev: the developer role.
   * 
   * This parameter is required.
   * 
   * @example
   * dev
   */
  roleName?: string;
  /**
   * @remarks
   * The authorization type. Valid values:
   * 
   * *   cluster: specifies that the permissions are scoped to a master instance.
   * *   namespace: specifies that the permissions are scoped to a namespace of a cluster.
   * *   all-clusters: specifies that the permissions are scoped to all master instances.
   * 
   * This parameter is required.
   * 
   * @example
   * cluster
   */
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

  /**
   * You can search for API operations, call and debug API operations online, and dynamically generate executable sample code for SDKs.
   * 
   * @param request - AttachClusterToHubRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AttachClusterToHubResponse
   */
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

  /**
   * You can search for API operations, call and debug API operations online, and dynamically generate executable sample code for SDKs.
   * 
   * @param request - AttachClusterToHubRequest
   * @returns AttachClusterToHubResponse
   */
  async attachClusterToHub(request: AttachClusterToHubRequest): Promise<AttachClusterToHubResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.attachClusterToHubWithOptions(request, runtime);
  }

  /**
   * 更新资源组
   * 
   * @param request - ChangeResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroupWithOptions(request: ChangeResourceGroupRequest, runtime: $Util.RuntimeOptions): Promise<ChangeResourceGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.newResourceGroupId)) {
      query["NewResourceGroupId"] = request.newResourceGroupId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ChangeResourceGroup",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ChangeResourceGroupResponse>(await this.callApi(params, req, runtime), new ChangeResourceGroupResponse({}));
  }

  /**
   * 更新资源组
   * 
   * @param request - ChangeResourceGroupRequest
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroup(request: ChangeResourceGroupRequest): Promise<ChangeResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.changeResourceGroupWithOptions(request, runtime);
  }

  /**
   * Creates a master instance in Alibaba Cloud Distributed Cloud Container Platform (ACK One).
   * 
   * @param tmpReq - CreateHubClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateHubClusterResponse
   */
  async createHubClusterWithOptions(tmpReq: CreateHubClusterRequest, runtime: $Util.RuntimeOptions): Promise<CreateHubClusterResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateHubClusterShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.tag)) {
      request.tagShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tag, "Tag", "json");
    }

    let query = { };
    if (!Util.isUnset(request.tagShrink)) {
      query["Tag"] = request.tagShrink;
    }

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
      query: OpenApiUtil.query(query),
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

  /**
   * Creates a master instance in Alibaba Cloud Distributed Cloud Container Platform (ACK One).
   * 
   * @param request - CreateHubClusterRequest
   * @returns CreateHubClusterResponse
   */
  async createHubCluster(request: CreateHubClusterRequest): Promise<CreateHubClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createHubClusterWithOptions(request, runtime);
  }

  /**
   * Deletes a master cluster in Alibaba Cloud Distributed Cloud Container Platform (ACK One).
   * 
   * @param tmpReq - DeleteHubClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteHubClusterResponse
   */
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

  /**
   * Deletes a master cluster in Alibaba Cloud Distributed Cloud Container Platform (ACK One).
   * 
   * @param request - DeleteHubClusterRequest
   * @returns DeleteHubClusterResponse
   */
  async deleteHubCluster(request: DeleteHubClusterRequest): Promise<DeleteHubClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteHubClusterWithOptions(request, runtime);
  }

  /**
   * Deletes a policy for associated clusters.
   * 
   * @param tmpReq - DeletePolicyInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePolicyInstanceResponse
   */
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

  /**
   * Deletes a policy for associated clusters.
   * 
   * @param request - DeletePolicyInstanceRequest
   * @returns DeletePolicyInstanceResponse
   */
  async deletePolicyInstance(request: DeletePolicyInstanceRequest): Promise<DeletePolicyInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deletePolicyInstanceWithOptions(request, runtime);
  }

  /**
   * Deletes the role-based access control (RBAC) permissions of a RAM user.
   * 
   * @param request - DeleteUserPermissionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteUserPermissionResponse
   */
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

  /**
   * Deletes the role-based access control (RBAC) permissions of a RAM user.
   * 
   * @param request - DeleteUserPermissionRequest
   * @returns DeleteUserPermissionResponse
   */
  async deleteUserPermission(request: DeleteUserPermissionRequest): Promise<DeleteUserPermissionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteUserPermissionWithOptions(request, runtime);
  }

  /**
   * Deploys a policy instance in the clusters that are associated with a master instance.
   * 
   * @param tmpReq - DeployPolicyInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeployPolicyInstanceResponse
   */
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

  /**
   * Deploys a policy instance in the clusters that are associated with a master instance.
   * 
   * @param request - DeployPolicyInstanceRequest
   * @returns DeployPolicyInstanceResponse
   */
  async deployPolicyInstance(request: DeployPolicyInstanceRequest): Promise<DeployPolicyInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deployPolicyInstanceWithOptions(request, runtime);
  }

  /**
   * Queries the details of a master instance in Alibaba Cloud Distributed Cloud Container Platform (ACK One).
   * 
   * @param request - DescribeHubClusterDetailsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeHubClusterDetailsResponse
   */
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

  /**
   * Queries the details of a master instance in Alibaba Cloud Distributed Cloud Container Platform (ACK One).
   * 
   * @param request - DescribeHubClusterDetailsRequest
   * @returns DescribeHubClusterDetailsResponse
   */
  async describeHubClusterDetails(request: DescribeHubClusterDetailsRequest): Promise<DescribeHubClusterDetailsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeHubClusterDetailsWithOptions(request, runtime);
  }

  /**
   * Queries the kubeconfig file of a Distributed Cloud Container Platform for Kubernetes (ACK One) cluster. In addition to the Container Service for Kubernetes (ACK) console, you can also use the Kubernetes CLI kubectl to manage clusters and applications. If you use kubectl to manage an ACK cluster, you must obtain the kubeconfig file of the cluster and use kubectl to connect to the cluster.
   * 
   * @param request - DescribeHubClusterKubeconfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeHubClusterKubeconfigResponse
   */
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

  /**
   * Queries the kubeconfig file of a Distributed Cloud Container Platform for Kubernetes (ACK One) cluster. In addition to the Container Service for Kubernetes (ACK) console, you can also use the Kubernetes CLI kubectl to manage clusters and applications. If you use kubectl to manage an ACK cluster, you must obtain the kubeconfig file of the cluster and use kubectl to connect to the cluster.
   * 
   * @param request - DescribeHubClusterKubeconfigRequest
   * @returns DescribeHubClusterKubeconfigResponse
   */
  async describeHubClusterKubeconfig(request: DescribeHubClusterKubeconfigRequest): Promise<DescribeHubClusterKubeconfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeHubClusterKubeconfigWithOptions(request, runtime);
  }

  /**
   * Queries the logs of the Fleet instance of a multi-cluster fleet of Distributed Cloud Container Platform for Kubernetes (ACK One).
   * 
   * @param request - DescribeHubClusterLogsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeHubClusterLogsResponse
   */
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

  /**
   * Queries the logs of the Fleet instance of a multi-cluster fleet of Distributed Cloud Container Platform for Kubernetes (ACK One).
   * 
   * @param request - DescribeHubClusterLogsRequest
   * @returns DescribeHubClusterLogsResponse
   */
  async describeHubClusterLogs(request: DescribeHubClusterLogsRequest): Promise<DescribeHubClusterLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeHubClusterLogsWithOptions(request, runtime);
  }

  /**
   * Queries the Distributed Cloud Container Platform for Kubernetes (ACK One) clusters that are created by the current user.
   * 
   * @param tmpReq - DescribeHubClustersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeHubClustersResponse
   */
  async describeHubClustersWithOptions(tmpReq: DescribeHubClustersRequest, runtime: $Util.RuntimeOptions): Promise<DescribeHubClustersResponse> {
    Util.validateModel(tmpReq);
    let request = new DescribeHubClustersShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.tag)) {
      request.tagShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tag, "Tag", "json");
    }

    let query = { };
    if (!Util.isUnset(request.profile)) {
      query["Profile"] = request.profile;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.tagShrink)) {
      query["Tag"] = request.tagShrink;
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

  /**
   * Queries the Distributed Cloud Container Platform for Kubernetes (ACK One) clusters that are created by the current user.
   * 
   * @param request - DescribeHubClustersRequest
   * @returns DescribeHubClustersResponse
   */
  async describeHubClusters(request: DescribeHubClustersRequest): Promise<DescribeHubClustersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeHubClustersWithOptions(request, runtime);
  }

  /**
   * Alibaba Cloud CLI allows you to search for API operations, call and debug API operations online, and dynamically generate executable sample code for SDKs.
   * 
   * @param request - DescribeManagedClustersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeManagedClustersResponse
   */
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

  /**
   * Alibaba Cloud CLI allows you to search for API operations, call and debug API operations online, and dynamically generate executable sample code for SDKs.
   * 
   * @param request - DescribeManagedClustersRequest
   * @returns DescribeManagedClustersResponse
   */
  async describeManagedClusters(request: DescribeManagedClustersRequest): Promise<DescribeManagedClustersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeManagedClustersWithOptions(request, runtime);
  }

  /**
   * Queries a list of policies.
   * 
   * @param request - DescribePoliciesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePoliciesResponse
   */
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

  /**
   * Queries a list of policies.
   * @returns DescribePoliciesResponse
   */
  async describePolicies(): Promise<DescribePoliciesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePoliciesWithOptions(runtime);
  }

  /**
   * Queries detailed information about a policy.
   * 
   * @param request - DescribePolicyDetailsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePolicyDetailsResponse
   */
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

  /**
   * Queries detailed information about a policy.
   * 
   * @param request - DescribePolicyDetailsRequest
   * @returns DescribePolicyDetailsResponse
   */
  async describePolicyDetails(request: DescribePolicyDetailsRequest): Promise<DescribePolicyDetailsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePolicyDetailsWithOptions(request, runtime);
  }

  /**
   * Queries detailed information about the policies used by the clusters that are associated with a master instance.
   * 
   * @param request - DescribePolicyGovernanceInClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePolicyGovernanceInClusterResponse
   */
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

  /**
   * Queries detailed information about the policies used by the clusters that are associated with a master instance.
   * 
   * @param request - DescribePolicyGovernanceInClusterRequest
   * @returns DescribePolicyGovernanceInClusterResponse
   */
  async describePolicyGovernanceInCluster(request: DescribePolicyGovernanceInClusterRequest): Promise<DescribePolicyGovernanceInClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePolicyGovernanceInClusterWithOptions(request, runtime);
  }

  /**
   * Queries policy instances that are deployed in the clusters associated with a master instance.
   * 
   * @param request - DescribePolicyInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePolicyInstancesResponse
   */
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

  /**
   * Queries policy instances that are deployed in the clusters associated with a master instance.
   * 
   * @param request - DescribePolicyInstancesRequest
   * @returns DescribePolicyInstancesResponse
   */
  async describePolicyInstances(request: DescribePolicyInstancesRequest): Promise<DescribePolicyInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePolicyInstancesWithOptions(request, runtime);
  }

  /**
   * Queries detailed information about policy instances that are deployed in the clusters associated with a master instance.
   * 
   * @param request - DescribePolicyInstancesStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePolicyInstancesStatusResponse
   */
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

  /**
   * Queries detailed information about policy instances that are deployed in the clusters associated with a master instance.
   * 
   * @param request - DescribePolicyInstancesStatusRequest
   * @returns DescribePolicyInstancesStatusResponse
   */
  async describePolicyInstancesStatus(request: DescribePolicyInstancesStatusRequest): Promise<DescribePolicyInstancesStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePolicyInstancesStatusWithOptions(request, runtime);
  }

  /**
   * 查询地域列表
   * 
   * @param request - DescribeRegionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRegionsResponse
   */
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

  /**
   * 查询地域列表
   * 
   * @param request - DescribeRegionsRequest
   * @returns DescribeRegionsResponse
   */
  async describeRegions(request: DescribeRegionsRequest): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  /**
   * Query the permissions of a Resource Access Management (RAM) user.
   * 
   * @param request - DescribeUserPermissionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUserPermissionsResponse
   */
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

  /**
   * Query the permissions of a Resource Access Management (RAM) user.
   * 
   * @param request - DescribeUserPermissionsRequest
   * @returns DescribeUserPermissionsResponse
   */
  async describeUserPermissions(request: DescribeUserPermissionsRequest): Promise<DescribeUserPermissionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUserPermissionsWithOptions(request, runtime);
  }

  /**
   * Alibaba Cloud CLI allows you to search for API operations, call and debug API operations online, and dynamically generate executable sample code for SDKs.
   * 
   * @param request - DetachClusterFromHubRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetachClusterFromHubResponse
   */
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

  /**
   * Alibaba Cloud CLI allows you to search for API operations, call and debug API operations online, and dynamically generate executable sample code for SDKs.
   * 
   * @param request - DetachClusterFromHubRequest
   * @returns DetachClusterFromHubResponse
   */
  async detachClusterFromHub(request: DetachClusterFromHubRequest): Promise<DetachClusterFromHubResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detachClusterFromHubWithOptions(request, runtime);
  }

  /**
   * Grants role-based access control (RBAC) permissions to Resource Access Management (RAM) users or RAM roles. System policies can be attached to RAM users to grant only the operation permissions on Distributed Cloud Container Platform for Kubernetes (ACK One) cluster resources. The operation permissions include creating and viewing instances. If you want to perform operations on Kubernetes resources in a specific cluster by using a RAM user or assuming a RAM role, such as creating GitOps applications and Argo workflows, you must grant RBAC permissions to the RAM user or RAM role to perform operations on the specified ACK One cluster and namespace. This topic describes how to grant RBAC permissions to a RAM user or RAM role.
   * 
   * @remarks
   *   To call this API operation to grant permissions to a RAM user or RAM role on a specific cluster, you must use an Alibaba Cloud account, the account that is used to create the cluster, or a RAM user that has the cluster administrator permissions. A regular RAM user does not have the permissions to call this operation.
   * *   Before you grant RBAC permissions to a RAM user or RAM role on a cluster, you must grant the operation permissions to the RAM user or RAM role on the specified cluster. For more information, see [Attach a system permission policy to a RAM user or RAM role](https://help.aliyun.com/document_detail/613486.html).
   * For more information, see [Authorization overview](https://help.aliyun.com/document_detail/613468.html).
   * 
   * @param request - GrantUserPermissionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GrantUserPermissionResponse
   */
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

  /**
   * Grants role-based access control (RBAC) permissions to Resource Access Management (RAM) users or RAM roles. System policies can be attached to RAM users to grant only the operation permissions on Distributed Cloud Container Platform for Kubernetes (ACK One) cluster resources. The operation permissions include creating and viewing instances. If you want to perform operations on Kubernetes resources in a specific cluster by using a RAM user or assuming a RAM role, such as creating GitOps applications and Argo workflows, you must grant RBAC permissions to the RAM user or RAM role to perform operations on the specified ACK One cluster and namespace. This topic describes how to grant RBAC permissions to a RAM user or RAM role.
   * 
   * @remarks
   *   To call this API operation to grant permissions to a RAM user or RAM role on a specific cluster, you must use an Alibaba Cloud account, the account that is used to create the cluster, or a RAM user that has the cluster administrator permissions. A regular RAM user does not have the permissions to call this operation.
   * *   Before you grant RBAC permissions to a RAM user or RAM role on a cluster, you must grant the operation permissions to the RAM user or RAM role on the specified cluster. For more information, see [Attach a system permission policy to a RAM user or RAM role](https://help.aliyun.com/document_detail/613486.html).
   * For more information, see [Authorization overview](https://help.aliyun.com/document_detail/613468.html).
   * 
   * @param request - GrantUserPermissionRequest
   * @returns GrantUserPermissionResponse
   */
  async grantUserPermission(request: GrantUserPermissionRequest): Promise<GrantUserPermissionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.grantUserPermissionWithOptions(request, runtime);
  }

  /**
   * Grant permissions to a Resource Access Management (RAM) user.
   * 
   * @deprecated OpenAPI GrantUserPermissions is deprecated, please use adcp::2022-01-01::GrantUserPermission instead.
   * 
   * @param tmpReq - GrantUserPermissionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GrantUserPermissionsResponse
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
   * Grant permissions to a Resource Access Management (RAM) user.
   * 
   * @deprecated OpenAPI GrantUserPermissions is deprecated, please use adcp::2022-01-01::GrantUserPermission instead.
   * 
   * @param request - GrantUserPermissionsRequest
   * @returns GrantUserPermissionsResponse
   */
  // Deprecated
  async grantUserPermissions(request: GrantUserPermissionsRequest): Promise<GrantUserPermissionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.grantUserPermissionsWithOptions(request, runtime);
  }

  /**
   * Updates the configurations of a Container Service for Kubernetes (ACK) cluster that serves as a master instance.
   * 
   * @param tmpReq - UpdateHubClusterFeatureRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateHubClusterFeatureResponse
   */
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

  /**
   * Updates the configurations of a Container Service for Kubernetes (ACK) cluster that serves as a master instance.
   * 
   * @param request - UpdateHubClusterFeatureRequest
   * @returns UpdateHubClusterFeatureResponse
   */
  async updateHubClusterFeature(request: UpdateHubClusterFeatureRequest): Promise<UpdateHubClusterFeatureResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateHubClusterFeatureWithOptions(request, runtime);
  }

  /**
   * Updates the role-based access control (RBAC) permissions of a RAM user.
   * 
   * @param request - UpdateUserPermissionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateUserPermissionResponse
   */
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

  /**
   * Updates the role-based access control (RBAC) permissions of a RAM user.
   * 
   * @param request - UpdateUserPermissionRequest
   * @returns UpdateUserPermissionResponse
   */
  async updateUserPermission(request: UpdateUserPermissionRequest): Promise<UpdateUserPermissionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateUserPermissionWithOptions(request, runtime);
  }

}
