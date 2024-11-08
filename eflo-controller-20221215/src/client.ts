// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class ApproveOperationRequest extends $tea.Model {
  /**
   * @example
   * e01-cn-zvp2tgykr08
   */
  nodeId?: string;
  /**
   * @example
   * RepairMachine
   */
  operationType?: string;
  static names(): { [key: string]: string } {
    return {
      nodeId: 'NodeId',
      operationType: 'OperationType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeId: 'string',
      operationType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApproveOperationResponseBody extends $tea.Model {
  /**
   * @example
   * Resource not found
   */
  errorMessage?: string;
  /**
   * @example
   * 8F065DDD-6996-5973-9691-9EC57BD0072E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApproveOperationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ApproveOperationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ApproveOperationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeResourceGroupRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * rg-aekzyqdwnfabx6q
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * i118099391667548921125
   */
  resourceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-wulanchabu
   */
  resourceRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'ResourceGroupId',
      resourceId: 'ResourceId',
      resourceRegionId: 'ResourceRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupId: 'string',
      resourceId: 'string',
      resourceRegionId: 'string',
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
   * 8F065DDD-6996-5973-9691-9EC57BD0072E
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

export class CreateClusterRequest extends $tea.Model {
  clusterDescription?: string;
  /**
   * @example
   * Standard_Cluster
   */
  clusterName?: string;
  /**
   * @example
   * Lite
   */
  clusterType?: string;
  components?: CreateClusterRequestComponents[];
  hpnZone?: string;
  /**
   * @example
   * False
   */
  ignoreFailedNodeTasks?: boolean;
  networks?: CreateClusterRequestNetworks;
  nimizVSwitches?: string[];
  nodeGroups?: CreateClusterRequestNodeGroups[];
  openEniJumboFrame?: boolean;
  /**
   * @example
   * rg-aek2xdkc6icwfha
   */
  resourceGroupId?: string;
  tag?: CreateClusterRequestTag[];
  static names(): { [key: string]: string } {
    return {
      clusterDescription: 'ClusterDescription',
      clusterName: 'ClusterName',
      clusterType: 'ClusterType',
      components: 'Components',
      hpnZone: 'HpnZone',
      ignoreFailedNodeTasks: 'IgnoreFailedNodeTasks',
      networks: 'Networks',
      nimizVSwitches: 'NimizVSwitches',
      nodeGroups: 'NodeGroups',
      openEniJumboFrame: 'OpenEniJumboFrame',
      resourceGroupId: 'ResourceGroupId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterDescription: 'string',
      clusterName: 'string',
      clusterType: 'string',
      components: { 'type': 'array', 'itemType': CreateClusterRequestComponents },
      hpnZone: 'string',
      ignoreFailedNodeTasks: 'boolean',
      networks: CreateClusterRequestNetworks,
      nimizVSwitches: { 'type': 'array', 'itemType': 'string' },
      nodeGroups: { 'type': 'array', 'itemType': CreateClusterRequestNodeGroups },
      openEniJumboFrame: 'boolean',
      resourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': CreateClusterRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterShrinkRequest extends $tea.Model {
  clusterDescription?: string;
  /**
   * @example
   * Standard_Cluster
   */
  clusterName?: string;
  /**
   * @example
   * Lite
   */
  clusterType?: string;
  componentsShrink?: string;
  hpnZone?: string;
  /**
   * @example
   * False
   */
  ignoreFailedNodeTasks?: boolean;
  networksShrink?: string;
  nimizVSwitchesShrink?: string;
  nodeGroupsShrink?: string;
  openEniJumboFrame?: boolean;
  /**
   * @example
   * rg-aek2xdkc6icwfha
   */
  resourceGroupId?: string;
  tag?: CreateClusterShrinkRequestTag[];
  static names(): { [key: string]: string } {
    return {
      clusterDescription: 'ClusterDescription',
      clusterName: 'ClusterName',
      clusterType: 'ClusterType',
      componentsShrink: 'Components',
      hpnZone: 'HpnZone',
      ignoreFailedNodeTasks: 'IgnoreFailedNodeTasks',
      networksShrink: 'Networks',
      nimizVSwitchesShrink: 'NimizVSwitches',
      nodeGroupsShrink: 'NodeGroups',
      openEniJumboFrame: 'OpenEniJumboFrame',
      resourceGroupId: 'ResourceGroupId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterDescription: 'string',
      clusterName: 'string',
      clusterType: 'string',
      componentsShrink: 'string',
      hpnZone: 'string',
      ignoreFailedNodeTasks: 'boolean',
      networksShrink: 'string',
      nimizVSwitchesShrink: 'string',
      nodeGroupsShrink: 'string',
      openEniJumboFrame: 'boolean',
      resourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': CreateClusterShrinkRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterResponseBody extends $tea.Model {
  /**
   * @example
   * i116913051663373010974
   */
  clusterId?: string;
  /**
   * @example
   * 3C683243-7915-57FB-9570-A2932C1C0F78
   */
  requestId?: string;
  /**
   * @example
   * i159809891662373011015
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

export class DeleteClusterRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * i116913051662373010974
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

export class DeleteClusterResponseBody extends $tea.Model {
  /**
   * @example
   * 0FC4A1C7-421C-5EAB-9361-4C0338EFA287
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

export class DescribeClusterRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * i119982311660892626523
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

export class DescribeClusterResponseBody extends $tea.Model {
  clusterDescription?: string;
  /**
   * @example
   * i116913051662373010974
   */
  clusterId?: string;
  /**
   * @example
   * Eflo-YJ-Test-Cluster
   */
  clusterName?: string;
  /**
   * @example
   * AckEdgPro
   */
  clusterType?: string;
  components?: DescribeClusterResponseBodyComponents[];
  computingIpVersion?: string;
  /**
   * @example
   * 2022-06-08T07:05:11Z
   */
  createTime?: string;
  hpnZone?: string;
  networks?: DescribeClusterResponseBodyNetworks[];
  /**
   * @example
   * 2
   */
  nodeCount?: number;
  /**
   * @example
   * 2
   */
  nodeGroupCount?: number;
  openEniJumboFrame?: string;
  /**
   * @example
   * running
   */
  operatingState?: string;
  /**
   * @example
   * 887FA855-89F4-5DB3-B305-C5879EC480E6
   */
  requestId?: string;
  /**
   * @example
   * rg-aek2k3rqlvv6ytq
   */
  resourceGroupId?: string;
  /**
   * @example
   * i152609221670466904596
   */
  taskId?: string;
  /**
   * @example
   * 2022-08-23T06:36:17.000Z
   */
  updateTime?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterDescription: 'ClusterDescription',
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      clusterType: 'ClusterType',
      components: 'Components',
      computingIpVersion: 'ComputingIpVersion',
      createTime: 'CreateTime',
      hpnZone: 'HpnZone',
      networks: 'Networks',
      nodeCount: 'NodeCount',
      nodeGroupCount: 'NodeGroupCount',
      openEniJumboFrame: 'OpenEniJumboFrame',
      operatingState: 'OperatingState',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      taskId: 'TaskId',
      updateTime: 'UpdateTime',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterDescription: 'string',
      clusterId: 'string',
      clusterName: 'string',
      clusterType: 'string',
      components: { 'type': 'array', 'itemType': DescribeClusterResponseBodyComponents },
      computingIpVersion: 'string',
      createTime: 'string',
      hpnZone: 'string',
      networks: { 'type': 'array', 'itemType': DescribeClusterResponseBodyNetworks },
      nodeCount: 'number',
      nodeGroupCount: 'number',
      openEniJumboFrame: 'string',
      operatingState: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      taskId: 'string',
      updateTime: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvocationsRequest extends $tea.Model {
  /**
   * @example
   * PlainText
   */
  contentEncoding?: string;
  /**
   * @example
   * true
   */
  includeOutput?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * t-cd03crwys0lrls0
   */
  invokeId?: string;
  /**
   * @example
   * e01-cn-zvp2tgykr08
   */
  nodeId?: string;
  static names(): { [key: string]: string } {
    return {
      contentEncoding: 'ContentEncoding',
      includeOutput: 'IncludeOutput',
      invokeId: 'InvokeId',
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentEncoding: 'string',
      includeOutput: 'boolean',
      invokeId: 'string',
      nodeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvocationsResponseBody extends $tea.Model {
  invocations?: DescribeInvocationsResponseBodyInvocations;
  /**
   * @example
   * 4FD06DF0-9167-5C6F-A145-F30CA4A15D54
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      invocations: 'Invocations',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invocations: DescribeInvocationsResponseBodyInvocations,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvocationsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeInvocationsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeInvocationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNodeRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * mock-sn-2060
   */
  nodeId?: string;
  static names(): { [key: string]: string } {
    return {
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNodeResponseBody extends $tea.Model {
  /**
   * @example
   * i116913051662373010974
   */
  clusterId?: string;
  /**
   * @example
   * Standard_Cluster
   */
  clusterName?: string;
  /**
   * @example
   * 2022-09-30T03:35:53Z
   */
  createTime?: string;
  /**
   * @example
   * 2022-06-23T16:00:00Z
   */
  expiredTime?: string;
  /**
   * @example
   * 31d38530-241e-11ed-bc63-acde48001122
   */
  hostname?: string;
  hpnZone?: string;
  /**
   * @example
   * i190297201634099844192
   */
  imageId?: string;
  /**
   * @remarks
   * 镜像名称
   * 
   * @example
   * Centos7.9_all_0811
   */
  imageName?: string;
  /**
   * @example
   * efg1.nvga1
   */
  machineType?: string;
  networks?: DescribeNodeResponseBodyNetworks[];
  /**
   * @example
   * ng-ec3c96ff0aa4c60d
   */
  nodeGroupId?: string;
  /**
   * @example
   * emr-default
   */
  nodeGroupName?: string;
  /**
   * @example
   * e01-cn-zvp2tgykr08
   */
  nodeId?: string;
  operatingState?: string;
  /**
   * @example
   * AC4F0004-7BCE-52E0-891B-CAC7D64E3368
   */
  requestId?: string;
  resourceGroupId?: string;
  /**
   * @example
   * sag42ckf4jx
   */
  sn?: string;
  /**
   * @example
   * cn-hangzhou-i
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      createTime: 'CreateTime',
      expiredTime: 'ExpiredTime',
      hostname: 'Hostname',
      hpnZone: 'HpnZone',
      imageId: 'ImageId',
      imageName: 'ImageName',
      machineType: 'MachineType',
      networks: 'Networks',
      nodeGroupId: 'NodeGroupId',
      nodeGroupName: 'NodeGroupName',
      nodeId: 'NodeId',
      operatingState: 'OperatingState',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      sn: 'Sn',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterName: 'string',
      createTime: 'string',
      expiredTime: 'string',
      hostname: 'string',
      hpnZone: 'string',
      imageId: 'string',
      imageName: 'string',
      machineType: 'string',
      networks: { 'type': 'array', 'itemType': DescribeNodeResponseBodyNetworks },
      nodeGroupId: 'string',
      nodeGroupName: 'string',
      nodeId: 'string',
      operatingState: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      sn: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNodeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeNodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeNodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsRequest extends $tea.Model {
  /**
   * @example
   * zh-CN
   */
  acceptLanguage?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBody extends $tea.Model {
  regions?: DescribeRegionsResponseBodyRegions[];
  /**
   * @example
   * 1D2FBB36-C39B-5EBB-9928-FCC1A236D65D
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

export class DescribeSendFileResultsRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * t-bj038i0d6r8zoqo
   */
  invokeId?: string;
  /**
   * @example
   * e01-cn-zvp2tgykr08
   */
  nodeId?: string;
  static names(): { [key: string]: string } {
    return {
      invokeId: 'InvokeId',
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invokeId: 'string',
      nodeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSendFileResultsResponseBody extends $tea.Model {
  invocations?: DescribeSendFileResultsResponseBodyInvocations;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 4FD06DF0-9167-5C6F-A145-F30CA4A15D54
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      invocations: 'Invocations',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invocations: DescribeSendFileResultsResponseBodyInvocations,
      requestId: 'string',
      totalCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSendFileResultsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSendFileResultsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeSendFileResultsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTaskRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * i156331731670384438138
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
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

export class DescribeTaskResponseBody extends $tea.Model {
  /**
   * @example
   * i119982311660892626523
   */
  clusterId?: string;
  /**
   * @example
   * Standard_Cluster
   */
  clusterName?: string;
  /**
   * @example
   * 2022-11-30T02:00:00.852Z
   */
  createTime?: string;
  /**
   * @example
   * Releasing [prod_main_mid_26e234cf] in region [cn-beijing] with weight [0]
   */
  message?: string;
  nodeIds?: string[];
  /**
   * @example
   * A7FD7411-9395-52E8-AF42-EB3A4A55446D
   */
  requestId?: string;
  steps?: DescribeTaskResponseBodySteps[];
  /**
   * @example
   * running
   */
  taskState?: string;
  /**
   * @example
   * cut_cluster
   */
  taskType?: string;
  /**
   * @example
   * 2022-11-30T03:40:14.852Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      createTime: 'CreateTime',
      message: 'Message',
      nodeIds: 'NodeIds',
      requestId: 'RequestId',
      steps: 'Steps',
      taskState: 'TaskState',
      taskType: 'TaskType',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterName: 'string',
      createTime: 'string',
      message: 'string',
      nodeIds: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      steps: { 'type': 'array', 'itemType': DescribeTaskResponseBodySteps },
      taskState: 'string',
      taskType: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesRequest extends $tea.Model {
  /**
   * @example
   * zh-CN
   */
  acceptLanguage?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponseBody extends $tea.Model {
  /**
   * @example
   * E9116F2D-82F8-501E-9ADB-2BE0C02B6A84
   */
  requestId?: string;
  zones?: DescribeZonesResponseBodyZones[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      zones: 'Zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      zones: { 'type': 'array', 'itemType': DescribeZonesResponseBodyZones },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeZonesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeZonesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExtendClusterRequest extends $tea.Model {
  /**
   * @example
   * i15b480fbd2fcdbc2869cd80
   */
  clusterId?: string;
  /**
   * @example
   * False
   */
  ignoreFailedNodeTasks?: boolean;
  ipAllocationPolicy?: ExtendClusterRequestIpAllocationPolicy[];
  nodeGroups?: ExtendClusterRequestNodeGroups[];
  vSwitchZoneId?: string;
  vpdSubnets?: string[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      ignoreFailedNodeTasks: 'IgnoreFailedNodeTasks',
      ipAllocationPolicy: 'IpAllocationPolicy',
      nodeGroups: 'NodeGroups',
      vSwitchZoneId: 'VSwitchZoneId',
      vpdSubnets: 'VpdSubnets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      ignoreFailedNodeTasks: 'boolean',
      ipAllocationPolicy: { 'type': 'array', 'itemType': ExtendClusterRequestIpAllocationPolicy },
      nodeGroups: { 'type': 'array', 'itemType': ExtendClusterRequestNodeGroups },
      vSwitchZoneId: 'string',
      vpdSubnets: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExtendClusterShrinkRequest extends $tea.Model {
  /**
   * @example
   * i15b480fbd2fcdbc2869cd80
   */
  clusterId?: string;
  /**
   * @example
   * False
   */
  ignoreFailedNodeTasks?: boolean;
  ipAllocationPolicyShrink?: string;
  nodeGroupsShrink?: string;
  vSwitchZoneId?: string;
  vpdSubnetsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      ignoreFailedNodeTasks: 'IgnoreFailedNodeTasks',
      ipAllocationPolicyShrink: 'IpAllocationPolicy',
      nodeGroupsShrink: 'NodeGroups',
      vSwitchZoneId: 'VSwitchZoneId',
      vpdSubnetsShrink: 'VpdSubnets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      ignoreFailedNodeTasks: 'boolean',
      ipAllocationPolicyShrink: 'string',
      nodeGroupsShrink: 'string',
      vSwitchZoneId: 'string',
      vpdSubnetsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExtendClusterResponseBody extends $tea.Model {
  /**
   * @example
   * 03668372-18FF-5959-98D9-6B36A4643C7A
   */
  requestId?: string;
  /**
   * @example
   * i158475611663639202234
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskId: 'TaskId',
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

export class ExtendClusterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ExtendClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ExtendClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterNodesRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * i15b480fbd2fcdbc2869cd80
   */
  clusterId?: string;
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * AAAAAdQ3Z+oPlg49gsr2y8jb6wY=
   */
  nextToken?: string;
  /**
   * @example
   * ng-ec3c96ff0aa4c60d
   */
  nodeGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      nodeGroupId: 'NodeGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      nodeGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterNodesResponseBody extends $tea.Model {
  /**
   * @example
   * AAAAAXW/ZB9TBvH+0ZK0phtCibQgQmu1RbqplAI6Velo2OKR
   */
  nextToken?: string;
  nodes?: ListClusterNodesResponseBodyNodes[];
  /**
   * @example
   * 2BA76272-6608-5AEC-BBA8-B6F0D3D14CDB
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      nodes: 'Nodes',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      nodes: { 'type': 'array', 'itemType': ListClusterNodesResponseBodyNodes },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterNodesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListClusterNodesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListClusterNodesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersRequest extends $tea.Model {
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * a3f2224a5ec7224116c4f5246120abe4
   */
  nextToken?: string;
  /**
   * @example
   * rg-aek2bg6wyoox6jq
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponseBody extends $tea.Model {
  clusters?: ListClustersResponseBodyClusters[];
  /**
   * @example
   * f4f9a292c17072a2
   */
  nextToken?: string;
  /**
   * @example
   * 2FE2B22C-CF9D-59DE-BF63-DC9B9B33A9D1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clusters: 'Clusters',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusters: { 'type': 'array', 'itemType': ListClustersResponseBodyClusters },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListClustersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListClustersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFreeNodesRequest extends $tea.Model {
  hpnZone?: string;
  /**
   * @example
   * mock-machine-type2
   */
  machineType?: string;
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * a3f2224a5ec7224116c4f5246120abe4
   */
  nextToken?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      hpnZone: 'HpnZone',
      machineType: 'MachineType',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hpnZone: 'string',
      machineType: 'string',
      maxResults: 'number',
      nextToken: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFreeNodesResponseBody extends $tea.Model {
  /**
   * @example
   * a3f2224a5ec7224116c4f5246120abe4
   */
  nextToken?: string;
  nodes?: ListFreeNodesResponseBodyNodes[];
  /**
   * @example
   * AA14CB86-70C4-5CB7-9E7B-6CCA77F3512B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      nodes: 'Nodes',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      nodes: { 'type': 'array', 'itemType': ListFreeNodesResponseBodyNodes },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFreeNodesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListFreeNodesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListFreeNodesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequest extends $tea.Model {
  /**
   * @example
   * AAAAAdQ3Z+oPlg49gsr2y8jb6wY=
   */
  nextToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  resourceId?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Node
   */
  resourceType?: string;
  tag?: ListTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': ListTagResourcesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBody extends $tea.Model {
  /**
   * @example
   * AAAAAdQ3Z+oPlg49gsr2y8jb6wY=
   */
  nextToken?: string;
  /**
   * @example
   * 8F208B6D-4C42-5FD3-B6BE-E826E92A44DD
   */
  requestId?: string;
  tagResources?: ListTagResourcesResponseBodyTagResources;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      tagResources: 'TagResources',
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

export class RebootNodesRequest extends $tea.Model {
  /**
   * @example
   * i15b480fbd2fcdbc2869cd80
   */
  clusterId?: string;
  /**
   * @example
   * False
   */
  ignoreFailedNodeTasks?: boolean;
  nodes?: string[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      ignoreFailedNodeTasks: 'IgnoreFailedNodeTasks',
      nodes: 'Nodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      ignoreFailedNodeTasks: 'boolean',
      nodes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RebootNodesShrinkRequest extends $tea.Model {
  /**
   * @example
   * i15b480fbd2fcdbc2869cd80
   */
  clusterId?: string;
  /**
   * @example
   * False
   */
  ignoreFailedNodeTasks?: boolean;
  nodesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      ignoreFailedNodeTasks: 'IgnoreFailedNodeTasks',
      nodesShrink: 'Nodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      ignoreFailedNodeTasks: 'boolean',
      nodesShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RebootNodesResponseBody extends $tea.Model {
  /**
   * @example
   * 4FD06DF0-9167-5C6F-A145-F30CA4A15D54
   */
  requestId?: string;
  /**
   * @example
   * i158475611663639202234
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskId: 'TaskId',
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

export class RebootNodesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RebootNodesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RebootNodesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReimageNodesRequest extends $tea.Model {
  /**
   * @example
   * i15dfa12e8f27c44f4a006c2c8bb
   */
  clusterId?: string;
  /**
   * @example
   * False
   */
  ignoreFailedNodeTasks?: boolean;
  nodes?: ReimageNodesRequestNodes[];
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      ignoreFailedNodeTasks: 'IgnoreFailedNodeTasks',
      nodes: 'Nodes',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      ignoreFailedNodeTasks: 'boolean',
      nodes: { 'type': 'array', 'itemType': ReimageNodesRequestNodes },
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReimageNodesShrinkRequest extends $tea.Model {
  /**
   * @example
   * i15dfa12e8f27c44f4a006c2c8bb
   */
  clusterId?: string;
  /**
   * @example
   * False
   */
  ignoreFailedNodeTasks?: boolean;
  nodesShrink?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      ignoreFailedNodeTasks: 'IgnoreFailedNodeTasks',
      nodesShrink: 'Nodes',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      ignoreFailedNodeTasks: 'boolean',
      nodesShrink: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReimageNodesResponseBody extends $tea.Model {
  /**
   * @example
   * 15FBCD9B-C93F-54E8-A168-AADE7E66DAD2
   */
  requestId?: string;
  /**
   * @example
   * i158782151663841517926
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskId: 'TaskId',
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

export class ReimageNodesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ReimageNodesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ReimageNodesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunCommandRequest extends $tea.Model {
  /**
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ZWNobyAxMjM=
   */
  commandContent?: string;
  /**
   * @example
   * Base64
   */
  contentEncoding?: string;
  /**
   * @example
   * testDescription
   */
  description?: string;
  /**
   * @example
   * false
   */
  enableParameter?: boolean;
  frequency?: string;
  /**
   * @example
   * testName
   */
  name?: string;
  nodeIdList?: string[];
  /**
   * @example
   * {"name":"Jack", "accessKey":"LTAIdyvdIqaRY****"}
   */
  parameters?: { [key: string]: any };
  /**
   * @example
   * Once
   */
  repeatMode?: string;
  /**
   * @example
   * 3600
   */
  timeout?: number;
  /**
   * @example
   * root
   */
  username?: string;
  /**
   * @example
   * /home/user
   */
  workingDir?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      commandContent: 'CommandContent',
      contentEncoding: 'ContentEncoding',
      description: 'Description',
      enableParameter: 'EnableParameter',
      frequency: 'Frequency',
      name: 'Name',
      nodeIdList: 'NodeIdList',
      parameters: 'Parameters',
      repeatMode: 'RepeatMode',
      timeout: 'Timeout',
      username: 'Username',
      workingDir: 'WorkingDir',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      commandContent: 'string',
      contentEncoding: 'string',
      description: 'string',
      enableParameter: 'boolean',
      frequency: 'string',
      name: 'string',
      nodeIdList: { 'type': 'array', 'itemType': 'string' },
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      repeatMode: 'string',
      timeout: 'number',
      username: 'string',
      workingDir: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunCommandShrinkRequest extends $tea.Model {
  /**
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ZWNobyAxMjM=
   */
  commandContent?: string;
  /**
   * @example
   * Base64
   */
  contentEncoding?: string;
  /**
   * @example
   * testDescription
   */
  description?: string;
  /**
   * @example
   * false
   */
  enableParameter?: boolean;
  frequency?: string;
  /**
   * @example
   * testName
   */
  name?: string;
  nodeIdListShrink?: string;
  /**
   * @example
   * {"name":"Jack", "accessKey":"LTAIdyvdIqaRY****"}
   */
  parametersShrink?: string;
  /**
   * @example
   * Once
   */
  repeatMode?: string;
  /**
   * @example
   * 3600
   */
  timeout?: number;
  /**
   * @example
   * root
   */
  username?: string;
  /**
   * @example
   * /home/user
   */
  workingDir?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      commandContent: 'CommandContent',
      contentEncoding: 'ContentEncoding',
      description: 'Description',
      enableParameter: 'EnableParameter',
      frequency: 'Frequency',
      name: 'Name',
      nodeIdListShrink: 'NodeIdList',
      parametersShrink: 'Parameters',
      repeatMode: 'RepeatMode',
      timeout: 'Timeout',
      username: 'Username',
      workingDir: 'WorkingDir',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      commandContent: 'string',
      contentEncoding: 'string',
      description: 'string',
      enableParameter: 'boolean',
      frequency: 'string',
      name: 'string',
      nodeIdListShrink: 'string',
      parametersShrink: 'string',
      repeatMode: 'string',
      timeout: 'number',
      username: 'string',
      workingDir: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunCommandResponseBody extends $tea.Model {
  /**
   * @example
   * t-7d2a745b412b4601b2d47f6a768d*
   */
  invokeId?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 2FE2B22C-CF9D-59DE-BF63-DC9B9B33A9D1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      invokeId: 'InvokeId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invokeId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunCommandResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RunCommandResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RunCommandResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendFileRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * #!/bin/bash echo "Current User is :" echo $(ps | grep "$$" | awk \\"{print $2}\\") -------- oss://bucketName/objectName
   */
  content?: string;
  /**
   * @example
   * PlainText
   */
  contentType?: string;
  /**
   * @example
   * This is a test file.
   */
  description?: string;
  /**
   * @example
   * test
   */
  fileGroup?: string;
  /**
   * @example
   * 0644
   */
  fileMode?: string;
  /**
   * @example
   * root
   */
  fileOwner?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * file.txt
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  nodeIdList?: string[];
  /**
   * @example
   * True
   */
  overwrite?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * /home
   */
  targetDir?: string;
  /**
   * @example
   * 600
   */
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      contentType: 'ContentType',
      description: 'Description',
      fileGroup: 'FileGroup',
      fileMode: 'FileMode',
      fileOwner: 'FileOwner',
      name: 'Name',
      nodeIdList: 'NodeIdList',
      overwrite: 'Overwrite',
      targetDir: 'TargetDir',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      contentType: 'string',
      description: 'string',
      fileGroup: 'string',
      fileMode: 'string',
      fileOwner: 'string',
      name: 'string',
      nodeIdList: { 'type': 'array', 'itemType': 'string' },
      overwrite: 'boolean',
      targetDir: 'string',
      timeout: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendFileShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * #!/bin/bash echo "Current User is :" echo $(ps | grep "$$" | awk \\"{print $2}\\") -------- oss://bucketName/objectName
   */
  content?: string;
  /**
   * @example
   * PlainText
   */
  contentType?: string;
  /**
   * @example
   * This is a test file.
   */
  description?: string;
  /**
   * @example
   * test
   */
  fileGroup?: string;
  /**
   * @example
   * 0644
   */
  fileMode?: string;
  /**
   * @example
   * root
   */
  fileOwner?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * file.txt
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  nodeIdListShrink?: string;
  /**
   * @example
   * True
   */
  overwrite?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * /home
   */
  targetDir?: string;
  /**
   * @example
   * 600
   */
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      contentType: 'ContentType',
      description: 'Description',
      fileGroup: 'FileGroup',
      fileMode: 'FileMode',
      fileOwner: 'FileOwner',
      name: 'Name',
      nodeIdListShrink: 'NodeIdList',
      overwrite: 'Overwrite',
      targetDir: 'TargetDir',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      contentType: 'string',
      description: 'string',
      fileGroup: 'string',
      fileMode: 'string',
      fileOwner: 'string',
      name: 'string',
      nodeIdListShrink: 'string',
      overwrite: 'boolean',
      targetDir: 'string',
      timeout: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendFileResponseBody extends $tea.Model {
  /**
   * @example
   * t-hz03la52z1zkvls
   */
  invokeId?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 3C683243-7915-57FB-9570-A2932C1C0F78
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      invokeId: 'InvokeId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invokeId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendFileResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SendFileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SendFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ShrinkClusterRequest extends $tea.Model {
  /**
   * @example
   * i15dfa12e8f27c44f4a006c2c8bb
   */
  clusterId?: string;
  /**
   * @example
   * False
   */
  ignoreFailedNodeTasks?: boolean;
  nodeGroups?: ShrinkClusterRequestNodeGroups[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      ignoreFailedNodeTasks: 'IgnoreFailedNodeTasks',
      nodeGroups: 'NodeGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      ignoreFailedNodeTasks: 'boolean',
      nodeGroups: { 'type': 'array', 'itemType': ShrinkClusterRequestNodeGroups },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ShrinkClusterShrinkRequest extends $tea.Model {
  /**
   * @example
   * i15dfa12e8f27c44f4a006c2c8bb
   */
  clusterId?: string;
  /**
   * @example
   * False
   */
  ignoreFailedNodeTasks?: boolean;
  nodeGroupsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      ignoreFailedNodeTasks: 'IgnoreFailedNodeTasks',
      nodeGroupsShrink: 'NodeGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      ignoreFailedNodeTasks: 'boolean',
      nodeGroupsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ShrinkClusterResponseBody extends $tea.Model {
  /**
   * @example
   * CC9FEF89-9BE5-5E03-845E-238B48D7599B
   */
  requestId?: string;
  /**
   * @example
   * i159136551662516768776
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskId: 'TaskId',
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

export class ShrinkClusterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ShrinkClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ShrinkClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopInvocationRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * f-hz044748dzepds0
   */
  invokeId?: string;
  nodeIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      invokeId: 'InvokeId',
      nodeIdList: 'NodeIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invokeId: 'string',
      nodeIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopInvocationShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * f-hz044748dzepds0
   */
  invokeId?: string;
  nodeIdListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      invokeId: 'InvokeId',
      nodeIdListShrink: 'NodeIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invokeId: 'string',
      nodeIdListShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopInvocationResponseBody extends $tea.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * A7FD7411-9395-52E8-AF42-EB3A4A55446D
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

export class StopInvocationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopInvocationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StopInvocationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  resourceId?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Cluster
   */
  resourceType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  tag?: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': TagResourcesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponseBody extends $tea.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * E7BB53E1-0B08-5C4E-BA66-9225548C3151
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

export class UntagResourcesRequest extends $tea.Model {
  /**
   * @example
   * False
   */
  all?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  resourceId?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Cluster
   */
  resourceType?: string;
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tagKey: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponseBody extends $tea.Model {
  /**
   * @example
   * 81F648D0-5570-5351-AE98-6F501C7E957F
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

export class CreateClusterRequestComponentsComponentConfig extends $tea.Model {
  /**
   * @example
   * {
   *       "EndpointPublicAccess": false,
   *       "ContainerCidr": "10.4.0.0/24",
   *       "KeyPair": "test",
   *       "NodeCidrMask": "25",
   *       "ResourceGroupId": "rg-axsadm3sdzsdvdsndstdisd",
   *       "WorkerSystemDiskCategory": "da",
   *       "WorkerSystemDiskSize": 40,
   *       "DeletionProtection": false,
   *       "KubeProxy": "iptables",
   *       "Name": "da",
   *       "LoadBalancerSpec": "slb.s1.small",
   *       "Runtime": {
   *             "Version": "19.03.15",
   *             "Name": "docker"
   *       },
   *       "IsEnterpriseSecurityGroup": true,
   *       "Vpcid": "192.168.23.0/24",
   *       "NumOfNodes": 1,
   *       "VswitchIds": [
   *             "dad"
   *       ],
   *       "ServiceCidr": "10.0.0.0/16",
   *       "SnatEntry": false,
   *       "kubernetesVersion": "1.20.11-aliyunedge.1",
   *       "WorkerInstanceTypes": [
   *             "da"
   *       ]
   * }
   */
  basicArgs?: any;
  nodeUnits?: any[];
  static names(): { [key: string]: string } {
    return {
      basicArgs: 'BasicArgs',
      nodeUnits: 'NodeUnits',
    };
  }

  static types(): { [key: string]: any } {
    return {
      basicArgs: 'any',
      nodeUnits: { 'type': 'array', 'itemType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterRequestComponents extends $tea.Model {
  componentConfig?: CreateClusterRequestComponentsComponentConfig;
  /**
   * @example
   * ACKEdge
   */
  componentType?: string;
  static names(): { [key: string]: string } {
    return {
      componentConfig: 'ComponentConfig',
      componentType: 'ComponentType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentConfig: CreateClusterRequestComponentsComponentConfig,
      componentType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterRequestNetworksIpAllocationPolicyBondPolicyBonds extends $tea.Model {
  name?: string;
  subnet?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      subnet: 'Subnet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      subnet: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterRequestNetworksIpAllocationPolicyBondPolicy extends $tea.Model {
  bondDefaultSubnet?: string;
  bonds?: CreateClusterRequestNetworksIpAllocationPolicyBondPolicyBonds[];
  static names(): { [key: string]: string } {
    return {
      bondDefaultSubnet: 'BondDefaultSubnet',
      bonds: 'Bonds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bondDefaultSubnet: 'string',
      bonds: { 'type': 'array', 'itemType': CreateClusterRequestNetworksIpAllocationPolicyBondPolicyBonds },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterRequestNetworksIpAllocationPolicyMachineTypePolicyBonds extends $tea.Model {
  name?: string;
  subnet?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      subnet: 'Subnet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      subnet: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterRequestNetworksIpAllocationPolicyMachineTypePolicy extends $tea.Model {
  bonds?: CreateClusterRequestNetworksIpAllocationPolicyMachineTypePolicyBonds[];
  machineType?: string;
  static names(): { [key: string]: string } {
    return {
      bonds: 'Bonds',
      machineType: 'MachineType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bonds: { 'type': 'array', 'itemType': CreateClusterRequestNetworksIpAllocationPolicyMachineTypePolicyBonds },
      machineType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterRequestNetworksIpAllocationPolicyNodePolicyBonds extends $tea.Model {
  name?: string;
  subnet?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      subnet: 'Subnet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      subnet: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterRequestNetworksIpAllocationPolicyNodePolicy extends $tea.Model {
  bonds?: CreateClusterRequestNetworksIpAllocationPolicyNodePolicyBonds[];
  nodeId?: string;
  static names(): { [key: string]: string } {
    return {
      bonds: 'Bonds',
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bonds: { 'type': 'array', 'itemType': CreateClusterRequestNetworksIpAllocationPolicyNodePolicyBonds },
      nodeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterRequestNetworksIpAllocationPolicy extends $tea.Model {
  bondPolicy?: CreateClusterRequestNetworksIpAllocationPolicyBondPolicy;
  machineTypePolicy?: CreateClusterRequestNetworksIpAllocationPolicyMachineTypePolicy[];
  nodePolicy?: CreateClusterRequestNetworksIpAllocationPolicyNodePolicy[];
  static names(): { [key: string]: string } {
    return {
      bondPolicy: 'BondPolicy',
      machineTypePolicy: 'MachineTypePolicy',
      nodePolicy: 'NodePolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bondPolicy: CreateClusterRequestNetworksIpAllocationPolicyBondPolicy,
      machineTypePolicy: { 'type': 'array', 'itemType': CreateClusterRequestNetworksIpAllocationPolicyMachineTypePolicy },
      nodePolicy: { 'type': 'array', 'itemType': CreateClusterRequestNetworksIpAllocationPolicyNodePolicy },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterRequestNetworksNewVpdInfoVpdSubnets extends $tea.Model {
  subnetCidr?: string;
  subnetType?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      subnetCidr: 'SubnetCidr',
      subnetType: 'SubnetType',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subnetCidr: 'string',
      subnetType: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterRequestNetworksNewVpdInfo extends $tea.Model {
  /**
   * @example
   * cen-1gb1eftc5qp2ao75fo
   */
  cenId?: string;
  /**
   * @example
   * 172.16.0.0/24
   */
  cloudLinkCidr?: string;
  /**
   * @example
   * vcc-cn-c4dtycm5i08
   */
  cloudLinkId?: string;
  /**
   * @example
   * vpc-0jl2x45apm6odc2c10h25
   */
  monitorVpcId?: string;
  /**
   * @example
   * vsw-0jl2w3ffbghkss0x2foff
   */
  monitorVswitchId?: string;
  /**
   * @example
   * 192.168.0.0/16
   */
  vpdCidr?: string;
  vpdSubnets?: CreateClusterRequestNetworksNewVpdInfoVpdSubnets[];
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      cloudLinkCidr: 'CloudLinkCidr',
      cloudLinkId: 'CloudLinkId',
      monitorVpcId: 'MonitorVpcId',
      monitorVswitchId: 'MonitorVswitchId',
      vpdCidr: 'VpdCidr',
      vpdSubnets: 'VpdSubnets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      cloudLinkCidr: 'string',
      cloudLinkId: 'string',
      monitorVpcId: 'string',
      monitorVswitchId: 'string',
      vpdCidr: 'string',
      vpdSubnets: { 'type': 'array', 'itemType': CreateClusterRequestNetworksNewVpdInfoVpdSubnets },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterRequestNetworksVpdInfo extends $tea.Model {
  /**
   * @remarks
   * 专有网络 id
   * 
   * @example
   * vpd-vfuz6ejv
   */
  vpdId?: string;
  /**
   * @remarks
   * 集群子网id列表
   */
  vpdSubnets?: string[];
  static names(): { [key: string]: string } {
    return {
      vpdId: 'VpdId',
      vpdSubnets: 'VpdSubnets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpdId: 'string',
      vpdSubnets: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterRequestNetworks extends $tea.Model {
  ipAllocationPolicy?: CreateClusterRequestNetworksIpAllocationPolicy[];
  newVpdInfo?: CreateClusterRequestNetworksNewVpdInfo;
  securityGroupId?: string;
  tailIpVersion?: string;
  vSwitchId?: string;
  vSwitchZoneId?: string;
  vpcId?: string;
  /**
   * @remarks
   * 复用VPD信息
   */
  vpdInfo?: CreateClusterRequestNetworksVpdInfo;
  static names(): { [key: string]: string } {
    return {
      ipAllocationPolicy: 'IpAllocationPolicy',
      newVpdInfo: 'NewVpdInfo',
      securityGroupId: 'SecurityGroupId',
      tailIpVersion: 'TailIpVersion',
      vSwitchId: 'VSwitchId',
      vSwitchZoneId: 'VSwitchZoneId',
      vpcId: 'VpcId',
      vpdInfo: 'VpdInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipAllocationPolicy: { 'type': 'array', 'itemType': CreateClusterRequestNetworksIpAllocationPolicy },
      newVpdInfo: CreateClusterRequestNetworksNewVpdInfo,
      securityGroupId: 'string',
      tailIpVersion: 'string',
      vSwitchId: 'string',
      vSwitchZoneId: 'string',
      vpcId: 'string',
      vpdInfo: CreateClusterRequestNetworksVpdInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterRequestNodeGroupsNodes extends $tea.Model {
  /**
   * @example
   * 8d13b784-17a9-11ed-bc7b-acde48001122
   */
  hostname?: string;
  /**
   * @example
   * ***
   */
  loginPassword?: string;
  /**
   * @example
   * e01poc-cn-i7m2wnivf0d
   */
  nodeId?: string;
  vSwitchId?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      hostname: 'Hostname',
      loginPassword: 'LoginPassword',
      nodeId: 'NodeId',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostname: 'string',
      loginPassword: 'string',
      nodeId: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterRequestNodeGroups extends $tea.Model {
  /**
   * @example
   * i190297201634099844192
   */
  imageId?: string;
  /**
   * @example
   * efg1.nvga1
   */
  machineType?: string;
  nodeGroupDescription?: string;
  /**
   * @example
   * emr-default
   */
  nodeGroupName?: string;
  nodes?: CreateClusterRequestNodeGroupsNodes[];
  userData?: string;
  /**
   * @example
   * cn-hangzhou-i
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      machineType: 'MachineType',
      nodeGroupDescription: 'NodeGroupDescription',
      nodeGroupName: 'NodeGroupName',
      nodes: 'Nodes',
      userData: 'UserData',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      machineType: 'string',
      nodeGroupDescription: 'string',
      nodeGroupName: 'string',
      nodes: { 'type': 'array', 'itemType': CreateClusterRequestNodeGroupsNodes },
      userData: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterRequestTag extends $tea.Model {
  /**
   * @example
   * env-name
   */
  key?: string;
  /**
   * @example
   * dev
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

export class CreateClusterShrinkRequestTag extends $tea.Model {
  /**
   * @example
   * env-name
   */
  key?: string;
  /**
   * @example
   * dev
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

export class DescribeClusterResponseBodyComponents extends $tea.Model {
  /**
   * @example
   * i149549021660892626529
   */
  componentId?: string;
  /**
   * @example
   * ACKEdge
   */
  componentType?: string;
  static names(): { [key: string]: string } {
    return {
      componentId: 'ComponentId',
      componentType: 'ComponentType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentId: 'string',
      componentType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterResponseBodyNetworks extends $tea.Model {
  /**
   * @example
   * vpd-iqd7xunc
   */
  vpdId?: string;
  static names(): { [key: string]: string } {
    return {
      vpdId: 'VpdId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpdId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvocationsResponseBodyInvocationsInvocationInvokeNodesInvokeNode extends $tea.Model {
  /**
   * @example
   * 2023-02-06T07:12:50Z
   */
  creationTime?: string;
  /**
   * @example
   * 0
   */
  dropped?: number;
  /**
   * @example
   * NodeNotExists：
   */
  errorCode?: boolean;
  /**
   * @example
   * the specified node does not exists
   */
  errorInfo?: string;
  /**
   * @example
   * 0
   */
  exitCode?: number;
  /**
   * @example
   * 2023-02-06T07:12:50Z
   */
  finishTime?: string;
  /**
   * @example
   * Pending
   */
  invocationStatus?: string;
  /**
   * @example
   * e01-cn-lbj36wkp70b
   */
  nodeId?: string;
  /**
   * @example
   * Finished
   */
  nodeInvokeStatus?: string;
  /**
   * @example
   * OutPutTestmsg
   */
  output?: string;
  /**
   * @example
   * 0
   */
  repeats?: number;
  /**
   * @example
   * 2019-12-20T06:15:55Z
   */
  startTime?: string;
  /**
   * @example
   * 2019-12-20T06:15:55Z
   */
  stopTime?: string;
  /**
   * @example
   * false
   */
  timed?: string;
  /**
   * @example
   * 2023-02-06T07:12:50Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      dropped: 'Dropped',
      errorCode: 'ErrorCode',
      errorInfo: 'ErrorInfo',
      exitCode: 'ExitCode',
      finishTime: 'FinishTime',
      invocationStatus: 'InvocationStatus',
      nodeId: 'NodeId',
      nodeInvokeStatus: 'NodeInvokeStatus',
      output: 'Output',
      repeats: 'Repeats',
      startTime: 'StartTime',
      stopTime: 'StopTime',
      timed: 'Timed',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      dropped: 'number',
      errorCode: 'boolean',
      errorInfo: 'string',
      exitCode: 'number',
      finishTime: 'string',
      invocationStatus: 'string',
      nodeId: 'string',
      nodeInvokeStatus: 'string',
      output: 'string',
      repeats: 'number',
      startTime: 'string',
      stopTime: 'string',
      timed: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvocationsResponseBodyInvocationsInvocationInvokeNodes extends $tea.Model {
  invokeNode?: DescribeInvocationsResponseBodyInvocationsInvocationInvokeNodesInvokeNode[];
  static names(): { [key: string]: string } {
    return {
      invokeNode: 'InvokeNode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invokeNode: { 'type': 'array', 'itemType': DescribeInvocationsResponseBodyInvocationsInvocationInvokeNodesInvokeNode },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvocationsResponseBodyInvocationsInvocation extends $tea.Model {
  /**
   * @example
   * cnBtIC1xYSB8IGdyZXAgdnNm****
   */
  commandContent?: string;
  /**
   * @example
   * testDescription
   */
  commandDescription?: string;
  /**
   * @example
   * CommandTestName
   */
  commandName?: string;
  /**
   * @example
   * 2020-01-19T09:15:46Z
   */
  creationTime?: string;
  frequency?: string;
  /**
   * @example
   * Success
   */
  invocationStatus?: string;
  /**
   * @example
   * t-ind3k9ytvvduoe8
   */
  invokeId?: string;
  invokeNodes?: DescribeInvocationsResponseBodyInvocationsInvocationInvokeNodes;
  /**
   * @example
   * Running
   */
  invokeStatus?: string;
  /**
   * @example
   * {}
   */
  parameters?: string;
  /**
   * @example
   * Once
   */
  repeatMode?: string;
  /**
   * @example
   * 60
   */
  timeout?: number;
  /**
   * @example
   * root
   */
  username?: string;
  /**
   * @example
   * /home
   */
  workingDir?: string;
  static names(): { [key: string]: string } {
    return {
      commandContent: 'CommandContent',
      commandDescription: 'CommandDescription',
      commandName: 'CommandName',
      creationTime: 'CreationTime',
      frequency: 'Frequency',
      invocationStatus: 'InvocationStatus',
      invokeId: 'InvokeId',
      invokeNodes: 'InvokeNodes',
      invokeStatus: 'InvokeStatus',
      parameters: 'Parameters',
      repeatMode: 'RepeatMode',
      timeout: 'Timeout',
      username: 'Username',
      workingDir: 'WorkingDir',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandContent: 'string',
      commandDescription: 'string',
      commandName: 'string',
      creationTime: 'string',
      frequency: 'string',
      invocationStatus: 'string',
      invokeId: 'string',
      invokeNodes: DescribeInvocationsResponseBodyInvocationsInvocationInvokeNodes,
      invokeStatus: 'string',
      parameters: 'string',
      repeatMode: 'string',
      timeout: 'number',
      username: 'string',
      workingDir: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvocationsResponseBodyInvocations extends $tea.Model {
  invocation?: DescribeInvocationsResponseBodyInvocationsInvocation[];
  static names(): { [key: string]: string } {
    return {
      invocation: 'Invocation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invocation: { 'type': 'array', 'itemType': DescribeInvocationsResponseBodyInvocationsInvocation },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNodeResponseBodyNetworks extends $tea.Model {
  /**
   * @example
   * Bond0
   */
  bondName?: string;
  /**
   * @example
   * 47.254.235.44
   */
  ip?: string;
  /**
   * @example
   * vsw-uf68v51fldm5egmui5a6k
   */
  subnetId?: string;
  /**
   * @example
   * vpd-xcuhjyrj
   */
  vpdId?: string;
  static names(): { [key: string]: string } {
    return {
      bondName: 'BondName',
      ip: 'Ip',
      subnetId: 'SubnetId',
      vpdId: 'VpdId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bondName: 'string',
      ip: 'string',
      subnetId: 'string',
      vpdId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegions extends $tea.Model {
  localName?: string;
  /**
   * @example
   * cn-hangzhou
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

export class DescribeSendFileResultsResponseBodyInvocationsInvocationInvokeNodesInvokeNode extends $tea.Model {
  /**
   * @example
   * 2023-02-06T07:12:50Z
   */
  creationTime?: string;
  /**
   * @example
   * AccountNotExists
   */
  errorCode?: string;
  /**
   * @example
   * the specified instance does not exists
   */
  errorInfo?: string;
  /**
   * @example
   * 2023-04-10T10:53:46.156+08:00
   */
  finishTime?: string;
  /**
   * @example
   * Success
   */
  invocationStatus?: string;
  /**
   * @example
   * e01-cn-9lb3c15m81j
   */
  nodeId?: string;
  /**
   * @example
   * 2023-03-30T16:00:00Z
   */
  startTime?: string;
  /**
   * @example
   * 2023-03-30T16:00:00Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      errorCode: 'ErrorCode',
      errorInfo: 'ErrorInfo',
      finishTime: 'FinishTime',
      invocationStatus: 'InvocationStatus',
      nodeId: 'NodeId',
      startTime: 'StartTime',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      errorCode: 'string',
      errorInfo: 'string',
      finishTime: 'string',
      invocationStatus: 'string',
      nodeId: 'string',
      startTime: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSendFileResultsResponseBodyInvocationsInvocationInvokeNodes extends $tea.Model {
  invokeNode?: DescribeSendFileResultsResponseBodyInvocationsInvocationInvokeNodesInvokeNode[];
  static names(): { [key: string]: string } {
    return {
      invokeNode: 'InvokeNode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invokeNode: { 'type': 'array', 'itemType': DescribeSendFileResultsResponseBodyInvocationsInvocationInvokeNodesInvokeNode },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSendFileResultsResponseBodyInvocationsInvocation extends $tea.Model {
  /**
   * @example
   * Base64
   */
  content?: string;
  /**
   * @example
   * PlainText
   */
  contentType?: string;
  /**
   * @example
   * 2023-04-10T10:53:46.156+08:00
   */
  creationTime?: string;
  description?: string;
  /**
   * @example
   * root
   */
  fileGroup?: string;
  /**
   * @example
   * 0644
   */
  fileMode?: string;
  /**
   * @example
   * root
   */
  fileOwner?: string;
  /**
   * @example
   * Pending
   */
  invocationStatus?: string;
  invokeNodes?: DescribeSendFileResultsResponseBodyInvocationsInvocationInvokeNodes;
  /**
   * @example
   * test
   */
  name?: string;
  /**
   * @example
   * 3
   */
  nodeCount?: number;
  /**
   * @example
   * true
   */
  overwrite?: boolean;
  /**
   * @example
   * /home/user
   */
  targetDir?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      contentType: 'ContentType',
      creationTime: 'CreationTime',
      description: 'Description',
      fileGroup: 'FileGroup',
      fileMode: 'FileMode',
      fileOwner: 'FileOwner',
      invocationStatus: 'InvocationStatus',
      invokeNodes: 'InvokeNodes',
      name: 'Name',
      nodeCount: 'NodeCount',
      overwrite: 'Overwrite',
      targetDir: 'TargetDir',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      contentType: 'string',
      creationTime: 'string',
      description: 'string',
      fileGroup: 'string',
      fileMode: 'string',
      fileOwner: 'string',
      invocationStatus: 'string',
      invokeNodes: DescribeSendFileResultsResponseBodyInvocationsInvocationInvokeNodes,
      name: 'string',
      nodeCount: 'number',
      overwrite: 'boolean',
      targetDir: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSendFileResultsResponseBodyInvocations extends $tea.Model {
  invocation?: DescribeSendFileResultsResponseBodyInvocationsInvocation[];
  static names(): { [key: string]: string } {
    return {
      invocation: 'Invocation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invocation: { 'type': 'array', 'itemType': DescribeSendFileResultsResponseBodyInvocationsInvocation },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTaskResponseBodyStepsSubTasks extends $tea.Model {
  /**
   * @example
   * 2022-11-30T2:00:00.852Z
   */
  createTime?: string;
  /**
   * @example
   * Releasing [prod_main_mid_26e234cf] in region [cn-beijing] with weight [0]
   */
  message?: string;
  /**
   * @example
   * i158805051661047928377
   */
  taskId?: string;
  /**
   * @example
   * running
   */
  taskState?: string;
  /**
   * @example
   * cut_node_sub_task
   */
  taskType?: string;
  /**
   * @example
   * 2022-11-30T02:20:14.852Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      message: 'Message',
      taskId: 'TaskId',
      taskState: 'TaskState',
      taskType: 'TaskType',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      message: 'string',
      taskId: 'string',
      taskState: 'string',
      taskType: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTaskResponseBodySteps extends $tea.Model {
  /**
   * @example
   * get taskinfo failed
   */
  message?: string;
  stageTag?: string;
  /**
   * @example
   * 2022-11-30T2:00:00.852Z
   */
  startTime?: string;
  /**
   * @example
   * create_vpd
   */
  stepName?: string;
  /**
   * @example
   * execution_success
   */
  stepState?: string;
  /**
   * @example
   * normal
   */
  stepType?: string;
  subTasks?: DescribeTaskResponseBodyStepsSubTasks[];
  /**
   * @example
   * 2022-11-30T02:20:14.852Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      stageTag: 'StageTag',
      startTime: 'StartTime',
      stepName: 'StepName',
      stepState: 'StepState',
      stepType: 'StepType',
      subTasks: 'SubTasks',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      stageTag: 'string',
      startTime: 'string',
      stepName: 'string',
      stepState: 'string',
      stepType: 'string',
      subTasks: { 'type': 'array', 'itemType': DescribeTaskResponseBodyStepsSubTasks },
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponseBodyZones extends $tea.Model {
  localName?: string;
  /**
   * @example
   * cn-hangzhou-i
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      localName: 'LocalName',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localName: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExtendClusterRequestIpAllocationPolicyBondPolicyBonds extends $tea.Model {
  /**
   * @example
   * Bond0
   */
  name?: string;
  /**
   * @example
   * subnet-3od2fe
   */
  subnet?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      subnet: 'Subnet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      subnet: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExtendClusterRequestIpAllocationPolicyBondPolicy extends $tea.Model {
  /**
   * @example
   * subnet-3od2fe
   */
  bondDefaultSubnet?: string;
  bonds?: ExtendClusterRequestIpAllocationPolicyBondPolicyBonds[];
  static names(): { [key: string]: string } {
    return {
      bondDefaultSubnet: 'BondDefaultSubnet',
      bonds: 'Bonds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bondDefaultSubnet: 'string',
      bonds: { 'type': 'array', 'itemType': ExtendClusterRequestIpAllocationPolicyBondPolicyBonds },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExtendClusterRequestIpAllocationPolicyMachineTypePolicyBonds extends $tea.Model {
  /**
   * @example
   * Bond0
   */
  name?: string;
  /**
   * @example
   * subnet-fdo3dv
   */
  subnet?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      subnet: 'Subnet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      subnet: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExtendClusterRequestIpAllocationPolicyMachineTypePolicy extends $tea.Model {
  bonds?: ExtendClusterRequestIpAllocationPolicyMachineTypePolicyBonds[];
  /**
   * @example
   * efg1.nvga1
   */
  machineType?: string;
  static names(): { [key: string]: string } {
    return {
      bonds: 'Bonds',
      machineType: 'MachineType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bonds: { 'type': 'array', 'itemType': ExtendClusterRequestIpAllocationPolicyMachineTypePolicyBonds },
      machineType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExtendClusterRequestIpAllocationPolicyNodePolicyBonds extends $tea.Model {
  /**
   * @example
   * Bond0
   */
  name?: string;
  /**
   * @example
   * subnet-fdo3dv
   */
  subnet?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      subnet: 'Subnet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      subnet: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExtendClusterRequestIpAllocationPolicyNodePolicy extends $tea.Model {
  bonds?: ExtendClusterRequestIpAllocationPolicyNodePolicyBonds[];
  /**
   * @example
   * i-3fdodw2
   */
  nodeId?: string;
  static names(): { [key: string]: string } {
    return {
      bonds: 'Bonds',
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bonds: { 'type': 'array', 'itemType': ExtendClusterRequestIpAllocationPolicyNodePolicyBonds },
      nodeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExtendClusterRequestIpAllocationPolicy extends $tea.Model {
  bondPolicy?: ExtendClusterRequestIpAllocationPolicyBondPolicy;
  machineTypePolicy?: ExtendClusterRequestIpAllocationPolicyMachineTypePolicy[];
  nodePolicy?: ExtendClusterRequestIpAllocationPolicyNodePolicy[];
  static names(): { [key: string]: string } {
    return {
      bondPolicy: 'BondPolicy',
      machineTypePolicy: 'MachineTypePolicy',
      nodePolicy: 'NodePolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bondPolicy: ExtendClusterRequestIpAllocationPolicyBondPolicy,
      machineTypePolicy: { 'type': 'array', 'itemType': ExtendClusterRequestIpAllocationPolicyMachineTypePolicy },
      nodePolicy: { 'type': 'array', 'itemType': ExtendClusterRequestIpAllocationPolicyNodePolicy },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExtendClusterRequestNodeGroupsNodes extends $tea.Model {
  /**
   * @example
   * d044d220-33fd-11ed-86a6
   */
  hostname?: string;
  /**
   * @example
   * ***
   */
  loginPassword?: string;
  /**
   * @example
   * e01-cn-zvp2zdpy601
   */
  nodeId?: string;
  vSwitchId?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      hostname: 'Hostname',
      loginPassword: 'LoginPassword',
      nodeId: 'NodeId',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostname: 'string',
      loginPassword: 'string',
      nodeId: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExtendClusterRequestNodeGroups extends $tea.Model {
  /**
   * @example
   * i16d4883a46cbadeb4bc9
   */
  nodeGroupId?: string;
  nodes?: ExtendClusterRequestNodeGroupsNodes[];
  userData?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      nodeGroupId: 'NodeGroupId',
      nodes: 'Nodes',
      userData: 'UserData',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeGroupId: 'string',
      nodes: { 'type': 'array', 'itemType': ExtendClusterRequestNodeGroupsNodes },
      userData: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterNodesResponseBodyNodesNetworks extends $tea.Model {
  bondName?: string;
  ip?: string;
  subnetId?: string;
  vpdId?: string;
  static names(): { [key: string]: string } {
    return {
      bondName: 'BondName',
      ip: 'Ip',
      subnetId: 'SubnetId',
      vpdId: 'VpdId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bondName: 'string',
      ip: 'string',
      subnetId: 'string',
      vpdId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterNodesResponseBodyNodes extends $tea.Model {
  /**
   * @example
   * 1642472468000
   */
  createTime?: string;
  /**
   * @example
   * 1762185600000
   */
  expiredTime?: string;
  /**
   * @example
   * 72432f80-273e-11ed-b57a-acde48001122
   */
  hostname?: string;
  hpnZone?: string;
  /**
   * @example
   * i190297201669099844192
   */
  imageId?: string;
  /**
   * @example
   * cn-wulanchabu-b11
   */
  machineType?: string;
  networks?: ListClusterNodesResponseBodyNodesNetworks[];
  /**
   * @example
   * ng-e9b74f4d450cf18d
   */
  nodeGroupId?: string;
  /**
   * @example
   * emr_master
   */
  nodeGroupName?: string;
  /**
   * @example
   * e01-cn-2r42tmj4z02
   */
  nodeId?: string;
  /**
   * @example
   * Extending
   */
  operatingState?: string;
  /**
   * @example
   * sn_tOuUk
   */
  sn?: string;
  /**
   * @example
   * cn-hangzhou-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      expiredTime: 'ExpiredTime',
      hostname: 'Hostname',
      hpnZone: 'HpnZone',
      imageId: 'ImageId',
      machineType: 'MachineType',
      networks: 'Networks',
      nodeGroupId: 'NodeGroupId',
      nodeGroupName: 'NodeGroupName',
      nodeId: 'NodeId',
      operatingState: 'OperatingState',
      sn: 'Sn',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      expiredTime: 'string',
      hostname: 'string',
      hpnZone: 'string',
      imageId: 'string',
      machineType: 'string',
      networks: { 'type': 'array', 'itemType': ListClusterNodesResponseBodyNodesNetworks },
      nodeGroupId: 'string',
      nodeGroupName: 'string',
      nodeId: 'string',
      operatingState: 'string',
      sn: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponseBodyClusters extends $tea.Model {
  clusterDescription?: string;
  /**
   * @example
   * i137590131672134915401
   */
  clusterId?: string;
  /**
   * @example
   * cnp_test_cluster
   */
  clusterName?: string;
  /**
   * @example
   * AckEdgPro
   */
  clusterType?: string;
  /**
   * @example
   * {}
   */
  components?: any;
  computingIpVersion?: string;
  /**
   * @example
   * 1672134938
   */
  createTime?: string;
  hpnZone?: string;
  /**
   * @example
   * 12
   */
  nodeCount?: number;
  /**
   * @example
   * 2
   */
  nodeGroupCount?: number;
  /**
   * @example
   * initializing
   */
  operatingState?: string;
  /**
   * @example
   * rg-aek2ajbjoloa23q
   */
  resourceGroupId?: string;
  /**
   * @example
   * i156365121663149566024
   */
  taskId?: string;
  /**
   * @example
   * 1672134968
   */
  updateTime?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterDescription: 'ClusterDescription',
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      clusterType: 'ClusterType',
      components: 'Components',
      computingIpVersion: 'ComputingIpVersion',
      createTime: 'CreateTime',
      hpnZone: 'HpnZone',
      nodeCount: 'NodeCount',
      nodeGroupCount: 'NodeGroupCount',
      operatingState: 'OperatingState',
      resourceGroupId: 'ResourceGroupId',
      taskId: 'TaskId',
      updateTime: 'UpdateTime',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterDescription: 'string',
      clusterId: 'string',
      clusterName: 'string',
      clusterType: 'string',
      components: 'any',
      computingIpVersion: 'string',
      createTime: 'string',
      hpnZone: 'string',
      nodeCount: 'number',
      nodeGroupCount: 'number',
      operatingState: 'string',
      resourceGroupId: 'string',
      taskId: 'string',
      updateTime: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFreeNodesResponseBodyNodes extends $tea.Model {
  /**
   * @example
   * 1652321554
   */
  createTime?: string;
  /**
   * @example
   * 1673107200
   */
  expiredTime?: string;
  hpnZone?: string;
  /**
   * @example
   * efg1.nvga1
   */
  machineType?: string;
  /**
   * @example
   * e01-cn-7pp2x193801
   */
  nodeId?: string;
  resourceGroupId?: string;
  /**
   * @example
   * sn_pozkHBgicd
   */
  sn?: string;
  /**
   * @example
   * cn-hangzhou-j
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      expiredTime: 'ExpiredTime',
      hpnZone: 'HpnZone',
      machineType: 'MachineType',
      nodeId: 'NodeId',
      resourceGroupId: 'ResourceGroupId',
      sn: 'Sn',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      expiredTime: 'string',
      hpnZone: 'string',
      machineType: 'string',
      nodeId: 'string',
      resourceGroupId: 'string',
      sn: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequestTag extends $tea.Model {
  /**
   * @example
   * PodName
   */
  key?: string;
  /**
   * @example
   * WFT-OTC
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

export class ListTagResourcesResponseBodyTagResourcesTagResource extends $tea.Model {
  /**
   * @example
   * i15azeddnvf7uhw2oij57o0
   */
  resourceId?: string;
  /**
   * @example
   * Cluster
   */
  resourceType?: string;
  /**
   * @example
   * env
   */
  tagKey?: string;
  /**
   * @example
   * dev
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
      tagValue: 'TagValue',
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
      tagResource: 'TagResource',
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

export class ReimageNodesRequestNodes extends $tea.Model {
  /**
   * @example
   * 457db5ca-241d-11ed-9fd7-acde48001122
   */
  hostname?: string;
  /**
   * @example
   * m-8vbf8rpv2nn14y7oybjy
   */
  imageId?: string;
  /**
   * @example
   * ***
   */
  loginPassword?: string;
  /**
   * @example
   * e01-cn-zvp2tgykr0b
   */
  nodeId?: string;
  static names(): { [key: string]: string } {
    return {
      hostname: 'Hostname',
      imageId: 'ImageId',
      loginPassword: 'LoginPassword',
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostname: 'string',
      imageId: 'string',
      loginPassword: 'string',
      nodeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ShrinkClusterRequestNodeGroupsNodes extends $tea.Model {
  /**
   * @example
   * e01poc-cn-zmb2ypjdc01
   */
  nodeId?: string;
  static names(): { [key: string]: string } {
    return {
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ShrinkClusterRequestNodeGroups extends $tea.Model {
  /**
   * @example
   * ng-3b6fbd24b1b845a0
   */
  nodeGroupId?: string;
  nodes?: ShrinkClusterRequestNodeGroupsNodes[];
  static names(): { [key: string]: string } {
    return {
      nodeGroupId: 'NodeGroupId',
      nodes: 'Nodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeGroupId: 'string',
      nodes: { 'type': 'array', 'itemType': ShrinkClusterRequestNodeGroupsNodes },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequestTag extends $tea.Model {
  /**
   * @example
   * app
   */
  key?: string;
  /**
   * @example
   * v3
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


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("eflo-controller", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 审批运维操作
   * 
   * @param request - ApproveOperationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ApproveOperationResponse
   */
  async approveOperationWithOptions(request: ApproveOperationRequest, runtime: $Util.RuntimeOptions): Promise<ApproveOperationResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.nodeId)) {
      body["NodeId"] = request.nodeId;
    }

    if (!Util.isUnset(request.operationType)) {
      body["OperationType"] = request.operationType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ApproveOperation",
      version: "2022-12-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ApproveOperationResponse>(await this.callApi(params, req, runtime), new ApproveOperationResponse({}));
  }

  /**
   * 审批运维操作
   * 
   * @param request - ApproveOperationRequest
   * @returns ApproveOperationResponse
   */
  async approveOperation(request: ApproveOperationRequest): Promise<ApproveOperationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.approveOperationWithOptions(request, runtime);
  }

  /**
   * 资源转组
   * 
   * @param request - ChangeResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroupWithOptions(request: ChangeResourceGroupRequest, runtime: $Util.RuntimeOptions): Promise<ChangeResourceGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceRegionId)) {
      query["ResourceRegionId"] = request.resourceRegionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ChangeResourceGroup",
      version: "2022-12-15",
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
   * 资源转组
   * 
   * @param request - ChangeResourceGroupRequest
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroup(request: ChangeResourceGroupRequest): Promise<ChangeResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.changeResourceGroupWithOptions(request, runtime);
  }

  /**
   * 创建大计算集群
   * 
   * @param tmpReq - CreateClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateClusterResponse
   */
  async createClusterWithOptions(tmpReq: CreateClusterRequest, runtime: $Util.RuntimeOptions): Promise<CreateClusterResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateClusterShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.components)) {
      request.componentsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.components, "Components", "json");
    }

    if (!Util.isUnset(tmpReq.networks)) {
      request.networksShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.networks, "Networks", "json");
    }

    if (!Util.isUnset(tmpReq.nimizVSwitches)) {
      request.nimizVSwitchesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.nimizVSwitches, "NimizVSwitches", "json");
    }

    if (!Util.isUnset(tmpReq.nodeGroups)) {
      request.nodeGroupsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.nodeGroups, "NodeGroups", "json");
    }

    let query = { };
    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clusterDescription)) {
      body["ClusterDescription"] = request.clusterDescription;
    }

    if (!Util.isUnset(request.clusterName)) {
      body["ClusterName"] = request.clusterName;
    }

    if (!Util.isUnset(request.clusterType)) {
      body["ClusterType"] = request.clusterType;
    }

    if (!Util.isUnset(request.componentsShrink)) {
      body["Components"] = request.componentsShrink;
    }

    if (!Util.isUnset(request.hpnZone)) {
      body["HpnZone"] = request.hpnZone;
    }

    if (!Util.isUnset(request.ignoreFailedNodeTasks)) {
      body["IgnoreFailedNodeTasks"] = request.ignoreFailedNodeTasks;
    }

    if (!Util.isUnset(request.networksShrink)) {
      body["Networks"] = request.networksShrink;
    }

    if (!Util.isUnset(request.nimizVSwitchesShrink)) {
      body["NimizVSwitches"] = request.nimizVSwitchesShrink;
    }

    if (!Util.isUnset(request.nodeGroupsShrink)) {
      body["NodeGroups"] = request.nodeGroupsShrink;
    }

    if (!Util.isUnset(request.openEniJumboFrame)) {
      body["OpenEniJumboFrame"] = request.openEniJumboFrame;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateCluster",
      version: "2022-12-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateClusterResponse>(await this.callApi(params, req, runtime), new CreateClusterResponse({}));
  }

  /**
   * 创建大计算集群
   * 
   * @param request - CreateClusterRequest
   * @returns CreateClusterResponse
   */
  async createCluster(request: CreateClusterRequest): Promise<CreateClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createClusterWithOptions(request, runtime);
  }

  /**
   * 删除集群实例
   * 
   * @param request - DeleteClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteClusterResponse
   */
  async deleteClusterWithOptions(request: DeleteClusterRequest, runtime: $Util.RuntimeOptions): Promise<DeleteClusterResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteCluster",
      version: "2022-12-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteClusterResponse>(await this.callApi(params, req, runtime), new DeleteClusterResponse({}));
  }

  /**
   * 删除集群实例
   * 
   * @param request - DeleteClusterRequest
   * @returns DeleteClusterResponse
   */
  async deleteCluster(request: DeleteClusterRequest): Promise<DeleteClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteClusterWithOptions(request, runtime);
  }

  /**
   * 集群详情
   * 
   * @param request - DescribeClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeClusterResponse
   */
  async describeClusterWithOptions(request: DescribeClusterRequest, runtime: $Util.RuntimeOptions): Promise<DescribeClusterResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCluster",
      version: "2022-12-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeClusterResponse>(await this.callApi(params, req, runtime), new DescribeClusterResponse({}));
  }

  /**
   * 集群详情
   * 
   * @param request - DescribeClusterRequest
   * @returns DescribeClusterResponse
   */
  async describeCluster(request: DescribeClusterRequest): Promise<DescribeClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeClusterWithOptions(request, runtime);
  }

  /**
   * 查询运维助手命令的执行列表和状态
   * 
   * @param request - DescribeInvocationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInvocationsResponse
   */
  async describeInvocationsWithOptions(request: DescribeInvocationsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInvocationsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.contentEncoding)) {
      body["ContentEncoding"] = request.contentEncoding;
    }

    if (!Util.isUnset(request.includeOutput)) {
      body["IncludeOutput"] = request.includeOutput;
    }

    if (!Util.isUnset(request.invokeId)) {
      body["InvokeId"] = request.invokeId;
    }

    if (!Util.isUnset(request.nodeId)) {
      body["NodeId"] = request.nodeId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeInvocations",
      version: "2022-12-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeInvocationsResponse>(await this.callApi(params, req, runtime), new DescribeInvocationsResponse({}));
  }

  /**
   * 查询运维助手命令的执行列表和状态
   * 
   * @param request - DescribeInvocationsRequest
   * @returns DescribeInvocationsResponse
   */
  async describeInvocations(request: DescribeInvocationsRequest): Promise<DescribeInvocationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInvocationsWithOptions(request, runtime);
  }

  /**
   * 查询节点列表
   * 
   * @param request - DescribeNodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeNodeResponse
   */
  async describeNodeWithOptions(request: DescribeNodeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeNodeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.nodeId)) {
      body["NodeId"] = request.nodeId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeNode",
      version: "2022-12-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeNodeResponse>(await this.callApi(params, req, runtime), new DescribeNodeResponse({}));
  }

  /**
   * 查询节点列表
   * 
   * @param request - DescribeNodeRequest
   * @returns DescribeNodeResponse
   */
  async describeNode(request: DescribeNodeRequest): Promise<DescribeNodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeNodeWithOptions(request, runtime);
  }

  /**
   * 区域列表
   * 
   * @param request - DescribeRegionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRegionsResponse
   */
  async describeRegionsWithOptions(request: DescribeRegionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      body["AcceptLanguage"] = request.acceptLanguage;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRegions",
      version: "2022-12-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRegionsResponse>(await this.callApi(params, req, runtime), new DescribeRegionsResponse({}));
  }

  /**
   * 区域列表
   * 
   * @param request - DescribeRegionsRequest
   * @returns DescribeRegionsResponse
   */
  async describeRegions(request: DescribeRegionsRequest): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  /**
   * 查询运维助手下发文件列表及状态
   * 
   * @param request - DescribeSendFileResultsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSendFileResultsResponse
   */
  async describeSendFileResultsWithOptions(request: DescribeSendFileResultsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSendFileResultsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.invokeId)) {
      body["InvokeId"] = request.invokeId;
    }

    if (!Util.isUnset(request.nodeId)) {
      body["NodeId"] = request.nodeId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSendFileResults",
      version: "2022-12-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSendFileResultsResponse>(await this.callApi(params, req, runtime), new DescribeSendFileResultsResponse({}));
  }

  /**
   * 查询运维助手下发文件列表及状态
   * 
   * @param request - DescribeSendFileResultsRequest
   * @returns DescribeSendFileResultsResponse
   */
  async describeSendFileResults(request: DescribeSendFileResultsRequest): Promise<DescribeSendFileResultsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSendFileResultsWithOptions(request, runtime);
  }

  /**
   * 查询任务详情
   * 
   * @param request - DescribeTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTaskResponse
   */
  async describeTaskWithOptions(request: DescribeTaskRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTaskResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeTask",
      version: "2022-12-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeTaskResponse>(await this.callApi(params, req, runtime), new DescribeTaskResponse({}));
  }

  /**
   * 查询任务详情
   * 
   * @param request - DescribeTaskRequest
   * @returns DescribeTaskResponse
   */
  async describeTask(request: DescribeTaskRequest): Promise<DescribeTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTaskWithOptions(request, runtime);
  }

  /**
   * 可用区列表
   * 
   * @param request - DescribeZonesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeZonesResponse
   */
  async describeZonesWithOptions(request: DescribeZonesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeZonesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      body["AcceptLanguage"] = request.acceptLanguage;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeZones",
      version: "2022-12-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeZonesResponse>(await this.callApi(params, req, runtime), new DescribeZonesResponse({}));
  }

  /**
   * 可用区列表
   * 
   * @param request - DescribeZonesRequest
   * @returns DescribeZonesResponse
   */
  async describeZones(request: DescribeZonesRequest): Promise<DescribeZonesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeZonesWithOptions(request, runtime);
  }

  /**
   * 集群扩容
   * 
   * @param tmpReq - ExtendClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExtendClusterResponse
   */
  async extendClusterWithOptions(tmpReq: ExtendClusterRequest, runtime: $Util.RuntimeOptions): Promise<ExtendClusterResponse> {
    Util.validateModel(tmpReq);
    let request = new ExtendClusterShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.ipAllocationPolicy)) {
      request.ipAllocationPolicyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ipAllocationPolicy, "IpAllocationPolicy", "json");
    }

    if (!Util.isUnset(tmpReq.nodeGroups)) {
      request.nodeGroupsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.nodeGroups, "NodeGroups", "json");
    }

    if (!Util.isUnset(tmpReq.vpdSubnets)) {
      request.vpdSubnetsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.vpdSubnets, "VpdSubnets", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.ignoreFailedNodeTasks)) {
      body["IgnoreFailedNodeTasks"] = request.ignoreFailedNodeTasks;
    }

    if (!Util.isUnset(request.ipAllocationPolicyShrink)) {
      body["IpAllocationPolicy"] = request.ipAllocationPolicyShrink;
    }

    if (!Util.isUnset(request.nodeGroupsShrink)) {
      body["NodeGroups"] = request.nodeGroupsShrink;
    }

    if (!Util.isUnset(request.vSwitchZoneId)) {
      body["VSwitchZoneId"] = request.vSwitchZoneId;
    }

    if (!Util.isUnset(request.vpdSubnetsShrink)) {
      body["VpdSubnets"] = request.vpdSubnetsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ExtendCluster",
      version: "2022-12-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ExtendClusterResponse>(await this.callApi(params, req, runtime), new ExtendClusterResponse({}));
  }

  /**
   * 集群扩容
   * 
   * @param request - ExtendClusterRequest
   * @returns ExtendClusterResponse
   */
  async extendCluster(request: ExtendClusterRequest): Promise<ExtendClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.extendClusterWithOptions(request, runtime);
  }

  /**
   * 集群下的主机分组列表，分组下的主机列表
   * 
   * @param request - ListClusterNodesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListClusterNodesResponse
   */
  async listClusterNodesWithOptions(request: ListClusterNodesRequest, runtime: $Util.RuntimeOptions): Promise<ListClusterNodesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.nodeGroupId)) {
      body["NodeGroupId"] = request.nodeGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListClusterNodes",
      version: "2022-12-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListClusterNodesResponse>(await this.callApi(params, req, runtime), new ListClusterNodesResponse({}));
  }

  /**
   * 集群下的主机分组列表，分组下的主机列表
   * 
   * @param request - ListClusterNodesRequest
   * @returns ListClusterNodesResponse
   */
  async listClusterNodes(request: ListClusterNodesRequest): Promise<ListClusterNodesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listClusterNodesWithOptions(request, runtime);
  }

  /**
   * 获取集群实例列表
   * 
   * @param request - ListClustersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListClustersResponse
   */
  async listClustersWithOptions(request: ListClustersRequest, runtime: $Util.RuntimeOptions): Promise<ListClustersResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListClusters",
      version: "2022-12-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListClustersResponse>(await this.callApi(params, req, runtime), new ListClustersResponse({}));
  }

  /**
   * 获取集群实例列表
   * 
   * @param request - ListClustersRequest
   * @returns ListClustersResponse
   */
  async listClusters(request: ListClustersRequest): Promise<ListClustersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listClustersWithOptions(request, runtime);
  }

  /**
   * 可用物理机列表
   * 
   * @param request - ListFreeNodesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFreeNodesResponse
   */
  async listFreeNodesWithOptions(request: ListFreeNodesRequest, runtime: $Util.RuntimeOptions): Promise<ListFreeNodesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.hpnZone)) {
      body["HpnZone"] = request.hpnZone;
    }

    if (!Util.isUnset(request.machineType)) {
      body["MachineType"] = request.machineType;
    }

    if (!Util.isUnset(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListFreeNodes",
      version: "2022-12-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListFreeNodesResponse>(await this.callApi(params, req, runtime), new ListFreeNodesResponse({}));
  }

  /**
   * 可用物理机列表
   * 
   * @param request - ListFreeNodesRequest
   * @returns ListFreeNodesResponse
   */
  async listFreeNodes(request: ListFreeNodesRequest): Promise<ListFreeNodesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFreeNodesWithOptions(request, runtime);
  }

  /**
   * 查询资源标签
   * 
   * @param request - ListTagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagResourcesResponse
   */
  async listTagResourcesWithOptions(request: ListTagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListTagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTagResources",
      version: "2022-12-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTagResourcesResponse>(await this.callApi(params, req, runtime), new ListTagResourcesResponse({}));
  }

  /**
   * 查询资源标签
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * 重启机器
   * 
   * @param tmpReq - RebootNodesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RebootNodesResponse
   */
  async rebootNodesWithOptions(tmpReq: RebootNodesRequest, runtime: $Util.RuntimeOptions): Promise<RebootNodesResponse> {
    Util.validateModel(tmpReq);
    let request = new RebootNodesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.nodes)) {
      request.nodesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.nodes, "Nodes", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.ignoreFailedNodeTasks)) {
      body["IgnoreFailedNodeTasks"] = request.ignoreFailedNodeTasks;
    }

    if (!Util.isUnset(request.nodesShrink)) {
      body["Nodes"] = request.nodesShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RebootNodes",
      version: "2022-12-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RebootNodesResponse>(await this.callApi(params, req, runtime), new RebootNodesResponse({}));
  }

  /**
   * 重启机器
   * 
   * @param request - RebootNodesRequest
   * @returns RebootNodesResponse
   */
  async rebootNodes(request: RebootNodesRequest): Promise<RebootNodesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.rebootNodesWithOptions(request, runtime);
  }

  /**
   * 机器重装
   * 
   * @param tmpReq - ReimageNodesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReimageNodesResponse
   */
  async reimageNodesWithOptions(tmpReq: ReimageNodesRequest, runtime: $Util.RuntimeOptions): Promise<ReimageNodesResponse> {
    Util.validateModel(tmpReq);
    let request = new ReimageNodesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.nodes)) {
      request.nodesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.nodes, "Nodes", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.ignoreFailedNodeTasks)) {
      body["IgnoreFailedNodeTasks"] = request.ignoreFailedNodeTasks;
    }

    if (!Util.isUnset(request.nodesShrink)) {
      body["Nodes"] = request.nodesShrink;
    }

    if (!Util.isUnset(request.userData)) {
      body["UserData"] = request.userData;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ReimageNodes",
      version: "2022-12-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ReimageNodesResponse>(await this.callApi(params, req, runtime), new ReimageNodesResponse({}));
  }

  /**
   * 机器重装
   * 
   * @param request - ReimageNodesRequest
   * @returns ReimageNodesResponse
   */
  async reimageNodes(request: ReimageNodesRequest): Promise<ReimageNodesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.reimageNodesWithOptions(request, runtime);
  }

  /**
   * 一台或多台灵骏机器中执行一段Shell的脚本
   * 
   * @param tmpReq - RunCommandRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunCommandResponse
   */
  async runCommandWithOptions(tmpReq: RunCommandRequest, runtime: $Util.RuntimeOptions): Promise<RunCommandResponse> {
    Util.validateModel(tmpReq);
    let request = new RunCommandShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.nodeIdList)) {
      request.nodeIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.nodeIdList, "NodeIdList", "json");
    }

    if (!Util.isUnset(tmpReq.parameters)) {
      request.parametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.parameters, "Parameters", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.commandContent)) {
      body["CommandContent"] = request.commandContent;
    }

    if (!Util.isUnset(request.contentEncoding)) {
      body["ContentEncoding"] = request.contentEncoding;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.enableParameter)) {
      body["EnableParameter"] = request.enableParameter;
    }

    if (!Util.isUnset(request.frequency)) {
      body["Frequency"] = request.frequency;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.nodeIdListShrink)) {
      body["NodeIdList"] = request.nodeIdListShrink;
    }

    if (!Util.isUnset(request.parametersShrink)) {
      body["Parameters"] = request.parametersShrink;
    }

    if (!Util.isUnset(request.repeatMode)) {
      body["RepeatMode"] = request.repeatMode;
    }

    if (!Util.isUnset(request.timeout)) {
      body["Timeout"] = request.timeout;
    }

    if (!Util.isUnset(request.username)) {
      body["Username"] = request.username;
    }

    if (!Util.isUnset(request.workingDir)) {
      body["WorkingDir"] = request.workingDir;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RunCommand",
      version: "2022-12-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RunCommandResponse>(await this.callApi(params, req, runtime), new RunCommandResponse({}));
  }

  /**
   * 一台或多台灵骏机器中执行一段Shell的脚本
   * 
   * @param request - RunCommandRequest
   * @returns RunCommandResponse
   */
  async runCommand(request: RunCommandRequest): Promise<RunCommandResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.runCommandWithOptions(request, runtime);
  }

  /**
   * 一台或多台灵骏机器下发远程文件
   * 
   * @param tmpReq - SendFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SendFileResponse
   */
  async sendFileWithOptions(tmpReq: SendFileRequest, runtime: $Util.RuntimeOptions): Promise<SendFileResponse> {
    Util.validateModel(tmpReq);
    let request = new SendFileShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.nodeIdList)) {
      request.nodeIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.nodeIdList, "NodeIdList", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.content)) {
      body["Content"] = request.content;
    }

    if (!Util.isUnset(request.contentType)) {
      body["ContentType"] = request.contentType;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.fileGroup)) {
      body["FileGroup"] = request.fileGroup;
    }

    if (!Util.isUnset(request.fileMode)) {
      body["FileMode"] = request.fileMode;
    }

    if (!Util.isUnset(request.fileOwner)) {
      body["FileOwner"] = request.fileOwner;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.nodeIdListShrink)) {
      body["NodeIdList"] = request.nodeIdListShrink;
    }

    if (!Util.isUnset(request.overwrite)) {
      body["Overwrite"] = request.overwrite;
    }

    if (!Util.isUnset(request.targetDir)) {
      body["TargetDir"] = request.targetDir;
    }

    if (!Util.isUnset(request.timeout)) {
      body["Timeout"] = request.timeout;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SendFile",
      version: "2022-12-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SendFileResponse>(await this.callApi(params, req, runtime), new SendFileResponse({}));
  }

  /**
   * 一台或多台灵骏机器下发远程文件
   * 
   * @param request - SendFileRequest
   * @returns SendFileResponse
   */
  async sendFile(request: SendFileRequest): Promise<SendFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.sendFileWithOptions(request, runtime);
  }

  /**
   * 缩容
   * 
   * @param tmpReq - ShrinkClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ShrinkClusterResponse
   */
  async shrinkClusterWithOptions(tmpReq: ShrinkClusterRequest, runtime: $Util.RuntimeOptions): Promise<ShrinkClusterResponse> {
    Util.validateModel(tmpReq);
    let request = new ShrinkClusterShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.nodeGroups)) {
      request.nodeGroupsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.nodeGroups, "NodeGroups", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.ignoreFailedNodeTasks)) {
      body["IgnoreFailedNodeTasks"] = request.ignoreFailedNodeTasks;
    }

    if (!Util.isUnset(request.nodeGroupsShrink)) {
      body["NodeGroups"] = request.nodeGroupsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ShrinkCluster",
      version: "2022-12-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ShrinkClusterResponse>(await this.callApi(params, req, runtime), new ShrinkClusterResponse({}));
  }

  /**
   * 缩容
   * 
   * @param request - ShrinkClusterRequest
   * @returns ShrinkClusterResponse
   */
  async shrinkCluster(request: ShrinkClusterRequest): Promise<ShrinkClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.shrinkClusterWithOptions(request, runtime);
  }

  /**
   * 停止运维助手命令进程
   * 
   * @param tmpReq - StopInvocationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopInvocationResponse
   */
  async stopInvocationWithOptions(tmpReq: StopInvocationRequest, runtime: $Util.RuntimeOptions): Promise<StopInvocationResponse> {
    Util.validateModel(tmpReq);
    let request = new StopInvocationShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.nodeIdList)) {
      request.nodeIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.nodeIdList, "NodeIdList", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.invokeId)) {
      body["InvokeId"] = request.invokeId;
    }

    if (!Util.isUnset(request.nodeIdListShrink)) {
      body["NodeIdList"] = request.nodeIdListShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "StopInvocation",
      version: "2022-12-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StopInvocationResponse>(await this.callApi(params, req, runtime), new StopInvocationResponse({}));
  }

  /**
   * 停止运维助手命令进程
   * 
   * @param request - StopInvocationRequest
   * @returns StopInvocationResponse
   */
  async stopInvocation(request: StopInvocationRequest): Promise<StopInvocationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopInvocationWithOptions(request, runtime);
  }

  /**
   * 资源打用户标签
   * 
   * @param request - TagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagResourcesResponse
   */
  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<TagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TagResources",
      version: "2022-12-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TagResourcesResponse>(await this.callApi(params, req, runtime), new TagResourcesResponse({}));
  }

  /**
   * 资源打用户标签
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * 资源去除用户标签
   * 
   * @param request - UntagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UntagResourcesResponse
   */
  async untagResourcesWithOptions(request: UntagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<UntagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.all)) {
      query["All"] = request.all;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tagKey)) {
      query["TagKey"] = request.tagKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UntagResources",
      version: "2022-12-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UntagResourcesResponse>(await this.callApi(params, req, runtime), new UntagResourcesResponse({}));
  }

  /**
   * 资源去除用户标签
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

}
