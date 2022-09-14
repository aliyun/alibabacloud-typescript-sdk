// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddNodesRequest extends $tea.Model {
  clusterId?: string;
  computeSpotPriceLimit?: string;
  computeSpotStrategy?: string;
  count?: number;
  imageId?: string;
  imageOwnerAlias?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      computeSpotPriceLimit: 'ComputeSpotPriceLimit',
      computeSpotStrategy: 'ComputeSpotStrategy',
      count: 'Count',
      imageId: 'ImageId',
      imageOwnerAlias: 'ImageOwnerAlias',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      computeSpotPriceLimit: 'string',
      computeSpotStrategy: 'string',
      count: 'number',
      imageId: 'string',
      imageOwnerAlias: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddNodesResponseBody extends $tea.Model {
  instanceIds?: AddNodesResponseBodyInstanceIds;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: AddNodesResponseBodyInstanceIds,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddNodesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddNodesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddNodesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddUsersRequest extends $tea.Model {
  clusterId?: string;
  releaseInstance?: boolean;
  user?: AddUsersRequestUser[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      releaseInstance: 'ReleaseInstance',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      releaseInstance: 'boolean',
      user: { 'type': 'array', 'itemType': AddUsersRequestUser },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddUsersResponseBody extends $tea.Model {
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

export class AddUsersResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddUsersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddUsersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterRequest extends $tea.Model {
  ecsOrder?: CreateClusterRequestEcsOrder;
  accountType?: string;
  application?: CreateClusterRequestApplication[];
  computeSpotPriceLimit?: string;
  computeSpotStrategy?: string;
  description?: string;
  ecsChargeType?: string;
  ehpcVersion?: string;
  haEnable?: boolean;
  imageId?: string;
  imageOwnerAlias?: string;
  keyPairName?: string;
  name?: string;
  osTag?: string;
  password?: string;
  remoteDirectory?: string;
  sccClusterId?: string;
  schedulerType?: string;
  securityGroupId?: string;
  securityGroupName?: string;
  vSwitchId?: string;
  volumeId?: string;
  volumeMountpoint?: string;
  volumeProtocol?: string;
  volumeType?: string;
  vpcId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      ecsOrder: 'EcsOrder',
      accountType: 'AccountType',
      application: 'Application',
      computeSpotPriceLimit: 'ComputeSpotPriceLimit',
      computeSpotStrategy: 'ComputeSpotStrategy',
      description: 'Description',
      ecsChargeType: 'EcsChargeType',
      ehpcVersion: 'EhpcVersion',
      haEnable: 'HaEnable',
      imageId: 'ImageId',
      imageOwnerAlias: 'ImageOwnerAlias',
      keyPairName: 'KeyPairName',
      name: 'Name',
      osTag: 'OsTag',
      password: 'Password',
      remoteDirectory: 'RemoteDirectory',
      sccClusterId: 'SccClusterId',
      schedulerType: 'SchedulerType',
      securityGroupId: 'SecurityGroupId',
      securityGroupName: 'SecurityGroupName',
      vSwitchId: 'VSwitchId',
      volumeId: 'VolumeId',
      volumeMountpoint: 'VolumeMountpoint',
      volumeProtocol: 'VolumeProtocol',
      volumeType: 'VolumeType',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecsOrder: CreateClusterRequestEcsOrder,
      accountType: 'string',
      application: { 'type': 'array', 'itemType': CreateClusterRequestApplication },
      computeSpotPriceLimit: 'string',
      computeSpotStrategy: 'string',
      description: 'string',
      ecsChargeType: 'string',
      ehpcVersion: 'string',
      haEnable: 'boolean',
      imageId: 'string',
      imageOwnerAlias: 'string',
      keyPairName: 'string',
      name: 'string',
      osTag: 'string',
      password: 'string',
      remoteDirectory: 'string',
      sccClusterId: 'string',
      schedulerType: 'string',
      securityGroupId: 'string',
      securityGroupName: 'string',
      vSwitchId: 'string',
      volumeId: 'string',
      volumeMountpoint: 'string',
      volumeProtocol: 'string',
      volumeType: 'string',
      vpcId: 'string',
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
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      requestId: 'string',
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

export class CreateJobTemplateRequest extends $tea.Model {
  arrayRequest?: string;
  commandLine?: string;
  name?: string;
  packagePath?: string;
  priority?: number;
  reRunable?: boolean;
  regionId?: string;
  runasUser?: string;
  stderrRedirectPath?: string;
  stdoutRedirectPath?: string;
  variables?: string;
  static names(): { [key: string]: string } {
    return {
      arrayRequest: 'ArrayRequest',
      commandLine: 'CommandLine',
      name: 'Name',
      packagePath: 'PackagePath',
      priority: 'Priority',
      reRunable: 'ReRunable',
      regionId: 'RegionId',
      runasUser: 'RunasUser',
      stderrRedirectPath: 'StderrRedirectPath',
      stdoutRedirectPath: 'StdoutRedirectPath',
      variables: 'Variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrayRequest: 'string',
      commandLine: 'string',
      name: 'string',
      packagePath: 'string',
      priority: 'number',
      reRunable: 'boolean',
      regionId: 'string',
      runasUser: 'string',
      stderrRedirectPath: 'string',
      stdoutRedirectPath: 'string',
      variables: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobTemplateResponseBody extends $tea.Model {
  requestId?: string;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateJobTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateJobTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteClusterRequest extends $tea.Model {
  clusterId?: string;
  releaseInstance?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      releaseInstance: 'ReleaseInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      releaseInstance: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteClusterResponseBody extends $tea.Model {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class DeleteJobTemplatesRequest extends $tea.Model {
  regionId?: string;
  templates?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      templates: 'Templates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      templates: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteJobTemplatesResponseBody extends $tea.Model {
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

export class DeleteJobTemplatesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteJobTemplatesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteJobTemplatesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteJobsRequest extends $tea.Model {
  clusterId?: string;
  jobs?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      jobs: 'Jobs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      jobs: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteJobsResponseBody extends $tea.Model {
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

export class DeleteJobsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteJobsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteJobsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNodesRequest extends $tea.Model {
  clusterId?: string;
  instance?: DeleteNodesRequestInstance[];
  releaseInstance?: boolean;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      instance: 'Instance',
      releaseInstance: 'ReleaseInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      instance: { 'type': 'array', 'itemType': DeleteNodesRequestInstance },
      releaseInstance: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNodesResponseBody extends $tea.Model {
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

export class DeleteNodesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteNodesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteNodesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUsersRequest extends $tea.Model {
  clusterId?: string;
  user?: DeleteUsersRequestUser[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      user: { 'type': 'array', 'itemType': DeleteUsersRequestUser },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUsersResponseBody extends $tea.Model {
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

export class DeleteUsersResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteUsersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteUsersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterRequest extends $tea.Model {
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
  clusterInfo?: DescribeClusterResponseBodyClusterInfo;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterInfo: 'ClusterInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterInfo: DescribeClusterResponseBodyClusterInfo,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class EditJobTemplateRequest extends $tea.Model {
  arrayRequest?: string;
  commandLine?: string;
  name?: string;
  packagePath?: string;
  priority?: number;
  reRunable?: boolean;
  regionId?: string;
  runasUser?: string;
  stderrRedirectPath?: string;
  stdoutRedirectPath?: string;
  templateId?: string;
  variables?: string;
  static names(): { [key: string]: string } {
    return {
      arrayRequest: 'ArrayRequest',
      commandLine: 'CommandLine',
      name: 'Name',
      packagePath: 'PackagePath',
      priority: 'Priority',
      reRunable: 'ReRunable',
      regionId: 'RegionId',
      runasUser: 'RunasUser',
      stderrRedirectPath: 'StderrRedirectPath',
      stdoutRedirectPath: 'StdoutRedirectPath',
      templateId: 'TemplateId',
      variables: 'Variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrayRequest: 'string',
      commandLine: 'string',
      name: 'string',
      packagePath: 'string',
      priority: 'number',
      reRunable: 'boolean',
      regionId: 'string',
      runasUser: 'string',
      stderrRedirectPath: 'string',
      stdoutRedirectPath: 'string',
      templateId: 'string',
      variables: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EditJobTemplateResponseBody extends $tea.Model {
  requestId?: string;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EditJobTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: EditJobTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: EditJobTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAutoScaleConfigRequest extends $tea.Model {
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

export class GetAutoScaleConfigResponseBody extends $tea.Model {
  clusterId?: string;
  clusterType?: string;
  enableAutoGrow?: boolean;
  enableAutoShrink?: boolean;
  excludeNodes?: string;
  extraNodesGrowRatio?: number;
  growIntervalInMinutes?: number;
  growRatio?: number;
  growTimeoutInMinutes?: number;
  maxNodesInCluster?: number;
  requestId?: string;
  shrinkIdleTimes?: number;
  shrinkIntervalInMinutes?: number;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterType: 'ClusterType',
      enableAutoGrow: 'EnableAutoGrow',
      enableAutoShrink: 'EnableAutoShrink',
      excludeNodes: 'ExcludeNodes',
      extraNodesGrowRatio: 'ExtraNodesGrowRatio',
      growIntervalInMinutes: 'GrowIntervalInMinutes',
      growRatio: 'GrowRatio',
      growTimeoutInMinutes: 'GrowTimeoutInMinutes',
      maxNodesInCluster: 'MaxNodesInCluster',
      requestId: 'RequestId',
      shrinkIdleTimes: 'ShrinkIdleTimes',
      shrinkIntervalInMinutes: 'ShrinkIntervalInMinutes',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterType: 'string',
      enableAutoGrow: 'boolean',
      enableAutoShrink: 'boolean',
      excludeNodes: 'string',
      extraNodesGrowRatio: 'number',
      growIntervalInMinutes: 'number',
      growRatio: 'number',
      growTimeoutInMinutes: 'number',
      maxNodesInCluster: 'number',
      requestId: 'string',
      shrinkIdleTimes: 'number',
      shrinkIntervalInMinutes: 'number',
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAutoScaleConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetAutoScaleConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetAutoScaleConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterLogsRequest extends $tea.Model {
  clusterId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterLogsResponseBody extends $tea.Model {
  clusterId?: string;
  logs?: ListClusterLogsResponseBodyLogs;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      logs: 'Logs',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      logs: ListClusterLogsResponseBodyLogs,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterLogsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListClusterLogsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListClusterLogsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
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

export class ListClustersResponseBody extends $tea.Model {
  clusters?: ListClustersResponseBodyClusters;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      clusters: 'Clusters',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusters: ListClustersResponseBodyClusters,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListClustersResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class ListCurrentClientVersionResponseBody extends $tea.Model {
  clientVersion?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clientVersion: 'ClientVersion',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientVersion: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCurrentClientVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListCurrentClientVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListCurrentClientVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomImagesRequest extends $tea.Model {
  baseOsTag?: string;
  imageOwnerAlias?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      baseOsTag: 'BaseOsTag',
      imageOwnerAlias: 'ImageOwnerAlias',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseOsTag: 'string',
      imageOwnerAlias: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomImagesResponseBody extends $tea.Model {
  images?: ListCustomImagesResponseBodyImages;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      images: 'Images',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      images: ListCustomImagesResponseBodyImages,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomImagesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListCustomImagesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListCustomImagesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImagesResponseBody extends $tea.Model {
  osTags?: ListImagesResponseBodyOsTags;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      osTags: 'OsTags',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      osTags: ListImagesResponseBodyOsTags,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImagesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListImagesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListImagesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobTemplatesRequest extends $tea.Model {
  name?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobTemplatesResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  templates?: ListJobTemplatesResponseBodyTemplates;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      templates: 'Templates',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      templates: ListJobTemplatesResponseBodyTemplates,
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobTemplatesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListJobTemplatesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListJobTemplatesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsRequest extends $tea.Model {
  clusterId?: string;
  owner?: string;
  pageNumber?: number;
  pageSize?: number;
  rerunable?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      owner: 'Owner',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      rerunable: 'Rerunable',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      owner: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      rerunable: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponseBody extends $tea.Model {
  jobs?: ListJobsResponseBodyJobs;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      jobs: 'Jobs',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobs: ListJobsResponseBodyJobs,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListJobsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListJobsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesRequest extends $tea.Model {
  clusterId?: string;
  hostName?: string;
  pageNumber?: number;
  pageSize?: number;
  role?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      hostName: 'HostName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      hostName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      role: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBody extends $tea.Model {
  nodes?: ListNodesResponseBodyNodes;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      nodes: 'Nodes',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: ListNodesResponseBodyNodes,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListNodesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListNodesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesNoPagingRequest extends $tea.Model {
  clusterId?: string;
  hostName?: string;
  onlyDetached?: boolean;
  role?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      hostName: 'HostName',
      onlyDetached: 'OnlyDetached',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      hostName: 'string',
      onlyDetached: 'boolean',
      role: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesNoPagingResponseBody extends $tea.Model {
  nodes?: ListNodesNoPagingResponseBodyNodes;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      nodes: 'Nodes',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: ListNodesNoPagingResponseBodyNodes,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesNoPagingResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListNodesNoPagingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListNodesNoPagingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPreferredEcsTypesRequest extends $tea.Model {
  spotStrategy?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      spotStrategy: 'SpotStrategy',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spotStrategy: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPreferredEcsTypesResponseBody extends $tea.Model {
  requestId?: string;
  series?: ListPreferredEcsTypesResponseBodySeries;
  supportSpotInstance?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      series: 'Series',
      supportSpotInstance: 'SupportSpotInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      series: ListPreferredEcsTypesResponseBodySeries,
      supportSpotInstance: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPreferredEcsTypesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListPreferredEcsTypesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListPreferredEcsTypesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRegionsResponseBody extends $tea.Model {
  regions?: ListRegionsResponseBodyRegions;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      regions: 'Regions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regions: ListRegionsResponseBodyRegions,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRegionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListRegionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListRegionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSoftwaresRequest extends $tea.Model {
  ehpcVersion?: string;
  static names(): { [key: string]: string } {
    return {
      ehpcVersion: 'EhpcVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ehpcVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSoftwaresResponseBody extends $tea.Model {
  requestId?: string;
  softwares?: ListSoftwaresResponseBodySoftwares;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      softwares: 'Softwares',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      softwares: ListSoftwaresResponseBodySoftwares,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSoftwaresResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListSoftwaresResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListSoftwaresResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersRequest extends $tea.Model {
  clusterId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  users?: ListUsersResponseBodyUsers;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      users: ListUsersResponseBodyUsers,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListUsersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListUsersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVolumesRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
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

export class ListVolumesResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  volumes?: ListVolumesResponseBodyVolumes;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      volumes: 'Volumes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      volumes: ListVolumesResponseBodyVolumes,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVolumesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListVolumesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListVolumesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterAttributesRequest extends $tea.Model {
  clusterId?: string;
  description?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      description: 'Description',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      description: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterAttributesResponseBody extends $tea.Model {
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

export class ModifyClusterAttributesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyClusterAttributesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyClusterAttributesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyUserGroupsRequest extends $tea.Model {
  clusterId?: string;
  user?: ModifyUserGroupsRequestUser[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      user: { 'type': 'array', 'itemType': ModifyUserGroupsRequestUser },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyUserGroupsResponseBody extends $tea.Model {
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

export class ModifyUserGroupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyUserGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyUserGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyUserPasswordsRequest extends $tea.Model {
  clusterId?: string;
  user?: ModifyUserPasswordsRequestUser[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      user: { 'type': 'array', 'itemType': ModifyUserPasswordsRequestUser },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyUserPasswordsResponseBody extends $tea.Model {
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

export class ModifyUserPasswordsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyUserPasswordsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyUserPasswordsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RerunJobsRequest extends $tea.Model {
  clusterId?: string;
  jobs?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      jobs: 'Jobs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      jobs: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RerunJobsResponseBody extends $tea.Model {
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

export class RerunJobsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RerunJobsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RerunJobsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetNodesRequest extends $tea.Model {
  clusterId?: string;
  instance?: ResetNodesRequestInstance[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      instance: 'Instance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      instance: { 'type': 'array', 'itemType': ResetNodesRequestInstance },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetNodesResponseBody extends $tea.Model {
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

export class ResetNodesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ResetNodesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ResetNodesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetAutoScaleConfigRequest extends $tea.Model {
  clusterId?: string;
  enableAutoGrow?: boolean;
  enableAutoShrink?: boolean;
  excludeNodes?: string;
  extraNodesGrowRatio?: number;
  growIntervalInMinutes?: number;
  growRatio?: number;
  growTimeoutInMinutes?: number;
  maxNodesInCluster?: number;
  shrinkIdleTimes?: number;
  shrinkIntervalInMinutes?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      enableAutoGrow: 'EnableAutoGrow',
      enableAutoShrink: 'EnableAutoShrink',
      excludeNodes: 'ExcludeNodes',
      extraNodesGrowRatio: 'ExtraNodesGrowRatio',
      growIntervalInMinutes: 'GrowIntervalInMinutes',
      growRatio: 'GrowRatio',
      growTimeoutInMinutes: 'GrowTimeoutInMinutes',
      maxNodesInCluster: 'MaxNodesInCluster',
      shrinkIdleTimes: 'ShrinkIdleTimes',
      shrinkIntervalInMinutes: 'ShrinkIntervalInMinutes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      enableAutoGrow: 'boolean',
      enableAutoShrink: 'boolean',
      excludeNodes: 'string',
      extraNodesGrowRatio: 'number',
      growIntervalInMinutes: 'number',
      growRatio: 'number',
      growTimeoutInMinutes: 'number',
      maxNodesInCluster: 'number',
      shrinkIdleTimes: 'number',
      shrinkIntervalInMinutes: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetAutoScaleConfigResponseBody extends $tea.Model {
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

export class SetAutoScaleConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SetAutoScaleConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SetAutoScaleConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetJobUserRequest extends $tea.Model {
  clusterId?: string;
  runasUser?: string;
  runasUserPassword?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      runasUser: 'RunasUser',
      runasUserPassword: 'RunasUserPassword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      runasUser: 'string',
      runasUserPassword: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetJobUserResponseBody extends $tea.Model {
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

export class SetJobUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SetJobUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SetJobUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopJobsRequest extends $tea.Model {
  clusterId?: string;
  jobs?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      jobs: 'Jobs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      jobs: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopJobsResponseBody extends $tea.Model {
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

export class StopJobsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: StopJobsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StopJobsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitJobRequest extends $tea.Model {
  arrayRequest?: string;
  clusterId?: string;
  commandLine?: string;
  name?: string;
  packagePath?: string;
  priority?: number;
  reRunable?: boolean;
  runasUser?: string;
  runasUserPassword?: string;
  stderrRedirectPath?: string;
  stdoutRedirectPath?: string;
  variables?: string;
  static names(): { [key: string]: string } {
    return {
      arrayRequest: 'ArrayRequest',
      clusterId: 'ClusterId',
      commandLine: 'CommandLine',
      name: 'Name',
      packagePath: 'PackagePath',
      priority: 'Priority',
      reRunable: 'ReRunable',
      runasUser: 'RunasUser',
      runasUserPassword: 'RunasUserPassword',
      stderrRedirectPath: 'StderrRedirectPath',
      stdoutRedirectPath: 'StdoutRedirectPath',
      variables: 'Variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrayRequest: 'string',
      clusterId: 'string',
      commandLine: 'string',
      name: 'string',
      packagePath: 'string',
      priority: 'number',
      reRunable: 'boolean',
      runasUser: 'string',
      runasUserPassword: 'string',
      stderrRedirectPath: 'string',
      stdoutRedirectPath: 'string',
      variables: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitJobResponseBody extends $tea.Model {
  jobId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SubmitJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SubmitJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeClientRequest extends $tea.Model {
  clientVersion?: string;
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      clientVersion: 'ClientVersion',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientVersion: 'string',
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeClientResponseBody extends $tea.Model {
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

export class UpgradeClientResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpgradeClientResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpgradeClientResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddNodesResponseBodyInstanceIds extends $tea.Model {
  instanceId?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddUsersRequestUser extends $tea.Model {
  group?: string;
  name?: string;
  password?: string;
  static names(): { [key: string]: string } {
    return {
      group: 'Group',
      name: 'Name',
      password: 'Password',
    };
  }

  static types(): { [key: string]: any } {
    return {
      group: 'string',
      name: 'string',
      password: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterRequestEcsOrderCompute extends $tea.Model {
  count?: number;
  instanceType?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      instanceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterRequestEcsOrderLogin extends $tea.Model {
  count?: number;
  instanceType?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      instanceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterRequestEcsOrderManager extends $tea.Model {
  count?: number;
  instanceType?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      instanceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterRequestEcsOrder extends $tea.Model {
  compute: CreateClusterRequestEcsOrderCompute;
  login: CreateClusterRequestEcsOrderLogin;
  manager: CreateClusterRequestEcsOrderManager;
  static names(): { [key: string]: string } {
    return {
      compute: 'Compute',
      login: 'Login',
      manager: 'Manager',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compute: CreateClusterRequestEcsOrderCompute,
      login: CreateClusterRequestEcsOrderLogin,
      manager: CreateClusterRequestEcsOrderManager,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterRequestApplication extends $tea.Model {
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNodesRequestInstance extends $tea.Model {
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

export class DeleteUsersRequestUser extends $tea.Model {
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
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

export class DescribeClusterResponseBodyClusterInfoApplicationsApplicationInfo extends $tea.Model {
  name?: string;
  tag?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      tag: 'Tag',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      tag: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterResponseBodyClusterInfoApplications extends $tea.Model {
  applicationInfo?: DescribeClusterResponseBodyClusterInfoApplicationsApplicationInfo[];
  static names(): { [key: string]: string } {
    return {
      applicationInfo: 'ApplicationInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationInfo: { 'type': 'array', 'itemType': DescribeClusterResponseBodyClusterInfoApplicationsApplicationInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterResponseBodyClusterInfoEcsInfoCompute extends $tea.Model {
  count?: number;
  instanceType?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      instanceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterResponseBodyClusterInfoEcsInfoLogin extends $tea.Model {
  count?: number;
  instanceType?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      instanceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterResponseBodyClusterInfoEcsInfoManager extends $tea.Model {
  count?: number;
  instanceType?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      instanceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterResponseBodyClusterInfoEcsInfo extends $tea.Model {
  compute?: DescribeClusterResponseBodyClusterInfoEcsInfoCompute;
  login?: DescribeClusterResponseBodyClusterInfoEcsInfoLogin;
  manager?: DescribeClusterResponseBodyClusterInfoEcsInfoManager;
  static names(): { [key: string]: string } {
    return {
      compute: 'Compute',
      login: 'Login',
      manager: 'Manager',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compute: DescribeClusterResponseBodyClusterInfoEcsInfoCompute,
      login: DescribeClusterResponseBodyClusterInfoEcsInfoLogin,
      manager: DescribeClusterResponseBodyClusterInfoEcsInfoManager,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterResponseBodyClusterInfo extends $tea.Model {
  accountType?: string;
  applications?: DescribeClusterResponseBodyClusterInfoApplications;
  clientVersion?: string;
  createTime?: string;
  description?: string;
  ecsChargeType?: string;
  ecsInfo?: DescribeClusterResponseBodyClusterInfoEcsInfo;
  haEnable?: boolean;
  id?: string;
  imageId?: string;
  imageOwnerAlias?: string;
  keyPairName?: string;
  name?: string;
  osTag?: string;
  regionId?: string;
  remoteDirectory?: string;
  sccClusterId?: string;
  schedulerType?: string;
  securityGroupId?: string;
  status?: string;
  vSwitchId?: string;
  volumeId?: string;
  volumeMountpoint?: string;
  volumeProtocol?: string;
  volumeType?: string;
  static names(): { [key: string]: string } {
    return {
      accountType: 'AccountType',
      applications: 'Applications',
      clientVersion: 'ClientVersion',
      createTime: 'CreateTime',
      description: 'Description',
      ecsChargeType: 'EcsChargeType',
      ecsInfo: 'EcsInfo',
      haEnable: 'HaEnable',
      id: 'Id',
      imageId: 'ImageId',
      imageOwnerAlias: 'ImageOwnerAlias',
      keyPairName: 'KeyPairName',
      name: 'Name',
      osTag: 'OsTag',
      regionId: 'RegionId',
      remoteDirectory: 'RemoteDirectory',
      sccClusterId: 'SccClusterId',
      schedulerType: 'SchedulerType',
      securityGroupId: 'SecurityGroupId',
      status: 'Status',
      vSwitchId: 'VSwitchId',
      volumeId: 'VolumeId',
      volumeMountpoint: 'VolumeMountpoint',
      volumeProtocol: 'VolumeProtocol',
      volumeType: 'VolumeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountType: 'string',
      applications: DescribeClusterResponseBodyClusterInfoApplications,
      clientVersion: 'string',
      createTime: 'string',
      description: 'string',
      ecsChargeType: 'string',
      ecsInfo: DescribeClusterResponseBodyClusterInfoEcsInfo,
      haEnable: 'boolean',
      id: 'string',
      imageId: 'string',
      imageOwnerAlias: 'string',
      keyPairName: 'string',
      name: 'string',
      osTag: 'string',
      regionId: 'string',
      remoteDirectory: 'string',
      sccClusterId: 'string',
      schedulerType: 'string',
      securityGroupId: 'string',
      status: 'string',
      vSwitchId: 'string',
      volumeId: 'string',
      volumeMountpoint: 'string',
      volumeProtocol: 'string',
      volumeType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterLogsResponseBodyLogsLogInfo extends $tea.Model {
  createTime?: string;
  level?: string;
  message?: string;
  operation?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      level: 'Level',
      message: 'Message',
      operation: 'Operation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      level: 'string',
      message: 'string',
      operation: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterLogsResponseBodyLogs extends $tea.Model {
  logInfo?: ListClusterLogsResponseBodyLogsLogInfo[];
  static names(): { [key: string]: string } {
    return {
      logInfo: 'LogInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logInfo: { 'type': 'array', 'itemType': ListClusterLogsResponseBodyLogsLogInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponseBodyClustersClusterInfoSimpleComputes extends $tea.Model {
  exceptionCount?: number;
  normalCount?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      exceptionCount: 'ExceptionCount',
      normalCount: 'NormalCount',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exceptionCount: 'number',
      normalCount: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponseBodyClustersClusterInfoSimpleManagers extends $tea.Model {
  exceptionCount?: number;
  normalCount?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      exceptionCount: 'ExceptionCount',
      normalCount: 'NormalCount',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exceptionCount: 'number',
      normalCount: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponseBodyClustersClusterInfoSimpleTotalResources extends $tea.Model {
  cpu?: number;
  gpu?: number;
  memory?: number;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      gpu: 'Gpu',
      memory: 'Memory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      gpu: 'number',
      memory: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponseBodyClustersClusterInfoSimpleUsedResources extends $tea.Model {
  cpu?: number;
  gpu?: number;
  memory?: number;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      gpu: 'Gpu',
      memory: 'Memory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      gpu: 'number',
      memory: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponseBodyClustersClusterInfoSimple extends $tea.Model {
  accountType?: string;
  computes?: ListClustersResponseBodyClustersClusterInfoSimpleComputes;
  count?: number;
  createTime?: string;
  description?: string;
  id?: string;
  imageId?: string;
  imageOwnerAlias?: string;
  instanceType?: string;
  loginNodes?: string;
  managers?: ListClustersResponseBodyClustersClusterInfoSimpleManagers;
  name?: string;
  osTag?: string;
  regionId?: string;
  schedulerType?: string;
  status?: string;
  totalResources?: ListClustersResponseBodyClustersClusterInfoSimpleTotalResources;
  usedResources?: ListClustersResponseBodyClustersClusterInfoSimpleUsedResources;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      accountType: 'AccountType',
      computes: 'Computes',
      count: 'Count',
      createTime: 'CreateTime',
      description: 'Description',
      id: 'Id',
      imageId: 'ImageId',
      imageOwnerAlias: 'ImageOwnerAlias',
      instanceType: 'InstanceType',
      loginNodes: 'LoginNodes',
      managers: 'Managers',
      name: 'Name',
      osTag: 'OsTag',
      regionId: 'RegionId',
      schedulerType: 'SchedulerType',
      status: 'Status',
      totalResources: 'TotalResources',
      usedResources: 'UsedResources',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountType: 'string',
      computes: ListClustersResponseBodyClustersClusterInfoSimpleComputes,
      count: 'number',
      createTime: 'string',
      description: 'string',
      id: 'string',
      imageId: 'string',
      imageOwnerAlias: 'string',
      instanceType: 'string',
      loginNodes: 'string',
      managers: ListClustersResponseBodyClustersClusterInfoSimpleManagers,
      name: 'string',
      osTag: 'string',
      regionId: 'string',
      schedulerType: 'string',
      status: 'string',
      totalResources: ListClustersResponseBodyClustersClusterInfoSimpleTotalResources,
      usedResources: ListClustersResponseBodyClustersClusterInfoSimpleUsedResources,
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponseBodyClusters extends $tea.Model {
  clusterInfoSimple?: ListClustersResponseBodyClustersClusterInfoSimple[];
  static names(): { [key: string]: string } {
    return {
      clusterInfoSimple: 'ClusterInfoSimple',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterInfoSimple: { 'type': 'array', 'itemType': ListClustersResponseBodyClustersClusterInfoSimple },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomImagesResponseBodyImagesImageInfoBaseOsTag extends $tea.Model {
  architecture?: string;
  osTag?: string;
  platform?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      architecture: 'Architecture',
      osTag: 'OsTag',
      platform: 'Platform',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architecture: 'string',
      osTag: 'string',
      platform: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomImagesResponseBodyImagesImageInfo extends $tea.Model {
  baseOsTag?: ListCustomImagesResponseBodyImagesImageInfoBaseOsTag;
  description?: string;
  imageId?: string;
  imageName?: string;
  imageOwnerAlias?: string;
  static names(): { [key: string]: string } {
    return {
      baseOsTag: 'BaseOsTag',
      description: 'Description',
      imageId: 'ImageId',
      imageName: 'ImageName',
      imageOwnerAlias: 'ImageOwnerAlias',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseOsTag: ListCustomImagesResponseBodyImagesImageInfoBaseOsTag,
      description: 'string',
      imageId: 'string',
      imageName: 'string',
      imageOwnerAlias: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomImagesResponseBodyImages extends $tea.Model {
  imageInfo?: ListCustomImagesResponseBodyImagesImageInfo[];
  static names(): { [key: string]: string } {
    return {
      imageInfo: 'ImageInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageInfo: { 'type': 'array', 'itemType': ListCustomImagesResponseBodyImagesImageInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImagesResponseBodyOsTagsOsInfo extends $tea.Model {
  architecture?: string;
  osTag?: string;
  platform?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      architecture: 'Architecture',
      osTag: 'OsTag',
      platform: 'Platform',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architecture: 'string',
      osTag: 'string',
      platform: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImagesResponseBodyOsTags extends $tea.Model {
  osInfo?: ListImagesResponseBodyOsTagsOsInfo[];
  static names(): { [key: string]: string } {
    return {
      osInfo: 'OsInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      osInfo: { 'type': 'array', 'itemType': ListImagesResponseBodyOsTagsOsInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobTemplatesResponseBodyTemplatesJobTemplates extends $tea.Model {
  arrayRequest?: string;
  commandLine?: string;
  id?: string;
  name?: string;
  packagePath?: string;
  priority?: number;
  reRunable?: boolean;
  runasUser?: string;
  stderrRedirectPath?: string;
  stdoutRedirectPath?: string;
  variables?: string;
  static names(): { [key: string]: string } {
    return {
      arrayRequest: 'ArrayRequest',
      commandLine: 'CommandLine',
      id: 'Id',
      name: 'Name',
      packagePath: 'PackagePath',
      priority: 'Priority',
      reRunable: 'ReRunable',
      runasUser: 'RunasUser',
      stderrRedirectPath: 'StderrRedirectPath',
      stdoutRedirectPath: 'StdoutRedirectPath',
      variables: 'Variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrayRequest: 'string',
      commandLine: 'string',
      id: 'string',
      name: 'string',
      packagePath: 'string',
      priority: 'number',
      reRunable: 'boolean',
      runasUser: 'string',
      stderrRedirectPath: 'string',
      stdoutRedirectPath: 'string',
      variables: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobTemplatesResponseBodyTemplates extends $tea.Model {
  jobTemplates?: ListJobTemplatesResponseBodyTemplatesJobTemplates[];
  static names(): { [key: string]: string } {
    return {
      jobTemplates: 'JobTemplates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobTemplates: { 'type': 'array', 'itemType': ListJobTemplatesResponseBodyTemplatesJobTemplates },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponseBodyJobsJobInfoResources extends $tea.Model {
  cores?: number;
  nodes?: number;
  static names(): { [key: string]: string } {
    return {
      cores: 'Cores',
      nodes: 'Nodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cores: 'number',
      nodes: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponseBodyJobsJobInfo extends $tea.Model {
  arrayRequest?: string;
  comment?: string;
  id?: string;
  lastModifyTime?: string;
  name?: string;
  owner?: string;
  priority?: number;
  resources?: ListJobsResponseBodyJobsJobInfoResources;
  shellPath?: string;
  startTime?: string;
  state?: string;
  stderr?: string;
  stdout?: string;
  submitTime?: string;
  static names(): { [key: string]: string } {
    return {
      arrayRequest: 'ArrayRequest',
      comment: 'Comment',
      id: 'Id',
      lastModifyTime: 'LastModifyTime',
      name: 'Name',
      owner: 'Owner',
      priority: 'Priority',
      resources: 'Resources',
      shellPath: 'ShellPath',
      startTime: 'StartTime',
      state: 'State',
      stderr: 'Stderr',
      stdout: 'Stdout',
      submitTime: 'SubmitTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrayRequest: 'string',
      comment: 'string',
      id: 'string',
      lastModifyTime: 'string',
      name: 'string',
      owner: 'string',
      priority: 'number',
      resources: ListJobsResponseBodyJobsJobInfoResources,
      shellPath: 'string',
      startTime: 'string',
      state: 'string',
      stderr: 'string',
      stdout: 'string',
      submitTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponseBodyJobs extends $tea.Model {
  jobInfo?: ListJobsResponseBodyJobsJobInfo[];
  static names(): { [key: string]: string } {
    return {
      jobInfo: 'JobInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobInfo: { 'type': 'array', 'itemType': ListJobsResponseBodyJobsJobInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBodyNodesNodeInfoTotalResources extends $tea.Model {
  cpu?: number;
  gpu?: number;
  memory?: number;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      gpu: 'Gpu',
      memory: 'Memory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      gpu: 'number',
      memory: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBodyNodesNodeInfoUsedResources extends $tea.Model {
  cpu?: number;
  gpu?: number;
  memory?: number;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      gpu: 'Gpu',
      memory: 'Memory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      gpu: 'number',
      memory: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBodyNodesNodeInfo extends $tea.Model {
  addTime?: string;
  createdByEhpc?: boolean;
  expired?: boolean;
  expiredTime?: string;
  id?: string;
  imageId?: string;
  imageOwnerAlias?: string;
  lockReason?: string;
  regionId?: string;
  role?: string;
  spotStrategy?: string;
  status?: string;
  totalResources?: ListNodesResponseBodyNodesNodeInfoTotalResources;
  usedResources?: ListNodesResponseBodyNodesNodeInfoUsedResources;
  static names(): { [key: string]: string } {
    return {
      addTime: 'AddTime',
      createdByEhpc: 'CreatedByEhpc',
      expired: 'Expired',
      expiredTime: 'ExpiredTime',
      id: 'Id',
      imageId: 'ImageId',
      imageOwnerAlias: 'ImageOwnerAlias',
      lockReason: 'LockReason',
      regionId: 'RegionId',
      role: 'Role',
      spotStrategy: 'SpotStrategy',
      status: 'Status',
      totalResources: 'TotalResources',
      usedResources: 'UsedResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addTime: 'string',
      createdByEhpc: 'boolean',
      expired: 'boolean',
      expiredTime: 'string',
      id: 'string',
      imageId: 'string',
      imageOwnerAlias: 'string',
      lockReason: 'string',
      regionId: 'string',
      role: 'string',
      spotStrategy: 'string',
      status: 'string',
      totalResources: ListNodesResponseBodyNodesNodeInfoTotalResources,
      usedResources: ListNodesResponseBodyNodesNodeInfoUsedResources,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBodyNodes extends $tea.Model {
  nodeInfo?: ListNodesResponseBodyNodesNodeInfo[];
  static names(): { [key: string]: string } {
    return {
      nodeInfo: 'NodeInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeInfo: { 'type': 'array', 'itemType': ListNodesResponseBodyNodesNodeInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesNoPagingResponseBodyNodesNodeInfoTotalResources extends $tea.Model {
  cpu?: number;
  gpu?: number;
  memory?: number;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      gpu: 'Gpu',
      memory: 'Memory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      gpu: 'number',
      memory: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesNoPagingResponseBodyNodesNodeInfoUsedResources extends $tea.Model {
  cpu?: number;
  gpu?: number;
  memory?: number;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      gpu: 'Gpu',
      memory: 'Memory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      gpu: 'number',
      memory: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesNoPagingResponseBodyNodesNodeInfo extends $tea.Model {
  addTime?: string;
  createdByEhpc?: boolean;
  expired?: boolean;
  expiredTime?: string;
  id?: string;
  imageId?: string;
  imageOwnerAlias?: string;
  lockReason?: string;
  regionId?: string;
  role?: string;
  spotStrategy?: string;
  status?: string;
  totalResources?: ListNodesNoPagingResponseBodyNodesNodeInfoTotalResources;
  usedResources?: ListNodesNoPagingResponseBodyNodesNodeInfoUsedResources;
  static names(): { [key: string]: string } {
    return {
      addTime: 'AddTime',
      createdByEhpc: 'CreatedByEhpc',
      expired: 'Expired',
      expiredTime: 'ExpiredTime',
      id: 'Id',
      imageId: 'ImageId',
      imageOwnerAlias: 'ImageOwnerAlias',
      lockReason: 'LockReason',
      regionId: 'RegionId',
      role: 'Role',
      spotStrategy: 'SpotStrategy',
      status: 'Status',
      totalResources: 'TotalResources',
      usedResources: 'UsedResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addTime: 'string',
      createdByEhpc: 'boolean',
      expired: 'boolean',
      expiredTime: 'string',
      id: 'string',
      imageId: 'string',
      imageOwnerAlias: 'string',
      lockReason: 'string',
      regionId: 'string',
      role: 'string',
      spotStrategy: 'string',
      status: 'string',
      totalResources: ListNodesNoPagingResponseBodyNodesNodeInfoTotalResources,
      usedResources: ListNodesNoPagingResponseBodyNodesNodeInfoUsedResources,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesNoPagingResponseBodyNodes extends $tea.Model {
  nodeInfo?: ListNodesNoPagingResponseBodyNodesNodeInfo[];
  static names(): { [key: string]: string } {
    return {
      nodeInfo: 'NodeInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeInfo: { 'type': 'array', 'itemType': ListNodesNoPagingResponseBodyNodesNodeInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPreferredEcsTypesResponseBodySeriesSeriesInfoRolesCompute extends $tea.Model {
  instanceTypeId?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceTypeId: 'InstanceTypeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceTypeId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPreferredEcsTypesResponseBodySeriesSeriesInfoRolesLogin extends $tea.Model {
  instanceTypeId?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceTypeId: 'InstanceTypeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceTypeId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPreferredEcsTypesResponseBodySeriesSeriesInfoRolesManager extends $tea.Model {
  instanceTypeId?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceTypeId: 'InstanceTypeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceTypeId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPreferredEcsTypesResponseBodySeriesSeriesInfoRoles extends $tea.Model {
  compute?: ListPreferredEcsTypesResponseBodySeriesSeriesInfoRolesCompute;
  login?: ListPreferredEcsTypesResponseBodySeriesSeriesInfoRolesLogin;
  manager?: ListPreferredEcsTypesResponseBodySeriesSeriesInfoRolesManager;
  static names(): { [key: string]: string } {
    return {
      compute: 'Compute',
      login: 'Login',
      manager: 'Manager',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compute: ListPreferredEcsTypesResponseBodySeriesSeriesInfoRolesCompute,
      login: ListPreferredEcsTypesResponseBodySeriesSeriesInfoRolesLogin,
      manager: ListPreferredEcsTypesResponseBodySeriesSeriesInfoRolesManager,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPreferredEcsTypesResponseBodySeriesSeriesInfo extends $tea.Model {
  roles?: ListPreferredEcsTypesResponseBodySeriesSeriesInfoRoles;
  seriesId?: string;
  seriesName?: string;
  static names(): { [key: string]: string } {
    return {
      roles: 'Roles',
      seriesId: 'SeriesId',
      seriesName: 'SeriesName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roles: ListPreferredEcsTypesResponseBodySeriesSeriesInfoRoles,
      seriesId: 'string',
      seriesName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPreferredEcsTypesResponseBodySeries extends $tea.Model {
  seriesInfo?: ListPreferredEcsTypesResponseBodySeriesSeriesInfo[];
  static names(): { [key: string]: string } {
    return {
      seriesInfo: 'SeriesInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      seriesInfo: { 'type': 'array', 'itemType': ListPreferredEcsTypesResponseBodySeriesSeriesInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRegionsResponseBodyRegionsRegionInfo extends $tea.Model {
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

export class ListRegionsResponseBodyRegions extends $tea.Model {
  regionInfo?: ListRegionsResponseBodyRegionsRegionInfo[];
  static names(): { [key: string]: string } {
    return {
      regionInfo: 'RegionInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionInfo: { 'type': 'array', 'itemType': ListRegionsResponseBodyRegionsRegionInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSoftwaresResponseBodySoftwaresSoftwareInfoApplicationsApplicationInfo extends $tea.Model {
  name?: string;
  required?: boolean;
  tag?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      required: 'Required',
      tag: 'Tag',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      required: 'boolean',
      tag: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSoftwaresResponseBodySoftwaresSoftwareInfoApplications extends $tea.Model {
  applicationInfo?: ListSoftwaresResponseBodySoftwaresSoftwareInfoApplicationsApplicationInfo[];
  static names(): { [key: string]: string } {
    return {
      applicationInfo: 'ApplicationInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationInfo: { 'type': 'array', 'itemType': ListSoftwaresResponseBodySoftwaresSoftwareInfoApplicationsApplicationInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSoftwaresResponseBodySoftwaresSoftwareInfo extends $tea.Model {
  accountType?: string;
  accountVersion?: string;
  applications?: ListSoftwaresResponseBodySoftwaresSoftwareInfoApplications;
  ehpcVersion?: string;
  osTag?: string;
  schedulerType?: string;
  schedulerVersion?: string;
  static names(): { [key: string]: string } {
    return {
      accountType: 'AccountType',
      accountVersion: 'AccountVersion',
      applications: 'Applications',
      ehpcVersion: 'EhpcVersion',
      osTag: 'OsTag',
      schedulerType: 'SchedulerType',
      schedulerVersion: 'SchedulerVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountType: 'string',
      accountVersion: 'string',
      applications: ListSoftwaresResponseBodySoftwaresSoftwareInfoApplications,
      ehpcVersion: 'string',
      osTag: 'string',
      schedulerType: 'string',
      schedulerVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSoftwaresResponseBodySoftwares extends $tea.Model {
  softwareInfo?: ListSoftwaresResponseBodySoftwaresSoftwareInfo[];
  static names(): { [key: string]: string } {
    return {
      softwareInfo: 'SoftwareInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      softwareInfo: { 'type': 'array', 'itemType': ListSoftwaresResponseBodySoftwaresSoftwareInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBodyUsersUserInfo extends $tea.Model {
  addTime?: string;
  group?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      addTime: 'AddTime',
      group: 'Group',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addTime: 'string',
      group: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBodyUsers extends $tea.Model {
  userInfo?: ListUsersResponseBodyUsersUserInfo[];
  static names(): { [key: string]: string } {
    return {
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userInfo: { 'type': 'array', 'itemType': ListUsersResponseBodyUsersUserInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVolumesResponseBodyVolumesVolumeInfo extends $tea.Model {
  clusterId?: string;
  clusterName?: string;
  regionId?: string;
  remoteDirectory?: string;
  volumeId?: string;
  volumeMountpoint?: string;
  volumeProtocol?: string;
  volumeType?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      regionId: 'RegionId',
      remoteDirectory: 'RemoteDirectory',
      volumeId: 'VolumeId',
      volumeMountpoint: 'VolumeMountpoint',
      volumeProtocol: 'VolumeProtocol',
      volumeType: 'VolumeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterName: 'string',
      regionId: 'string',
      remoteDirectory: 'string',
      volumeId: 'string',
      volumeMountpoint: 'string',
      volumeProtocol: 'string',
      volumeType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVolumesResponseBodyVolumes extends $tea.Model {
  volumeInfo?: ListVolumesResponseBodyVolumesVolumeInfo[];
  static names(): { [key: string]: string } {
    return {
      volumeInfo: 'VolumeInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      volumeInfo: { 'type': 'array', 'itemType': ListVolumesResponseBodyVolumesVolumeInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyUserGroupsRequestUser extends $tea.Model {
  group?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      group: 'Group',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      group: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyUserPasswordsRequestUser extends $tea.Model {
  name?: string;
  password?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      password: 'Password',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      password: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetNodesRequestInstance extends $tea.Model {
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


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "regional";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("ehpc", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async addNodesWithOptions(request: AddNodesRequest, runtime: $Util.RuntimeOptions): Promise<AddNodesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddNodes",
      version: "2017-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddNodesResponse>(await this.callApi(params, req, runtime), new AddNodesResponse({}));
  }

  async addNodes(request: AddNodesRequest): Promise<AddNodesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addNodesWithOptions(request, runtime);
  }

  async addUsersWithOptions(request: AddUsersRequest, runtime: $Util.RuntimeOptions): Promise<AddUsersResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddUsers",
      version: "2017-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddUsersResponse>(await this.callApi(params, req, runtime), new AddUsersResponse({}));
  }

  async addUsers(request: AddUsersRequest): Promise<AddUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addUsersWithOptions(request, runtime);
  }

  async createClusterWithOptions(request: CreateClusterRequest, runtime: $Util.RuntimeOptions): Promise<CreateClusterResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateCluster",
      version: "2017-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateClusterResponse>(await this.callApi(params, req, runtime), new CreateClusterResponse({}));
  }

  async createCluster(request: CreateClusterRequest): Promise<CreateClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createClusterWithOptions(request, runtime);
  }

  async createJobTemplateWithOptions(request: CreateJobTemplateRequest, runtime: $Util.RuntimeOptions): Promise<CreateJobTemplateResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateJobTemplate",
      version: "2017-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateJobTemplateResponse>(await this.callApi(params, req, runtime), new CreateJobTemplateResponse({}));
  }

  async createJobTemplate(request: CreateJobTemplateRequest): Promise<CreateJobTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createJobTemplateWithOptions(request, runtime);
  }

  async deleteClusterWithOptions(request: DeleteClusterRequest, runtime: $Util.RuntimeOptions): Promise<DeleteClusterResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteCluster",
      version: "2017-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteClusterResponse>(await this.callApi(params, req, runtime), new DeleteClusterResponse({}));
  }

  async deleteCluster(request: DeleteClusterRequest): Promise<DeleteClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteClusterWithOptions(request, runtime);
  }

  async deleteJobTemplatesWithOptions(request: DeleteJobTemplatesRequest, runtime: $Util.RuntimeOptions): Promise<DeleteJobTemplatesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteJobTemplates",
      version: "2017-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteJobTemplatesResponse>(await this.callApi(params, req, runtime), new DeleteJobTemplatesResponse({}));
  }

  async deleteJobTemplates(request: DeleteJobTemplatesRequest): Promise<DeleteJobTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteJobTemplatesWithOptions(request, runtime);
  }

  async deleteJobsWithOptions(request: DeleteJobsRequest, runtime: $Util.RuntimeOptions): Promise<DeleteJobsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteJobs",
      version: "2017-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteJobsResponse>(await this.callApi(params, req, runtime), new DeleteJobsResponse({}));
  }

  async deleteJobs(request: DeleteJobsRequest): Promise<DeleteJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteJobsWithOptions(request, runtime);
  }

  async deleteNodesWithOptions(request: DeleteNodesRequest, runtime: $Util.RuntimeOptions): Promise<DeleteNodesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteNodes",
      version: "2017-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteNodesResponse>(await this.callApi(params, req, runtime), new DeleteNodesResponse({}));
  }

  async deleteNodes(request: DeleteNodesRequest): Promise<DeleteNodesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteNodesWithOptions(request, runtime);
  }

  async deleteUsersWithOptions(request: DeleteUsersRequest, runtime: $Util.RuntimeOptions): Promise<DeleteUsersResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteUsers",
      version: "2017-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteUsersResponse>(await this.callApi(params, req, runtime), new DeleteUsersResponse({}));
  }

  async deleteUsers(request: DeleteUsersRequest): Promise<DeleteUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteUsersWithOptions(request, runtime);
  }

  async describeClusterWithOptions(request: DescribeClusterRequest, runtime: $Util.RuntimeOptions): Promise<DescribeClusterResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCluster",
      version: "2017-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeClusterResponse>(await this.callApi(params, req, runtime), new DescribeClusterResponse({}));
  }

  async describeCluster(request: DescribeClusterRequest): Promise<DescribeClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeClusterWithOptions(request, runtime);
  }

  async editJobTemplateWithOptions(request: EditJobTemplateRequest, runtime: $Util.RuntimeOptions): Promise<EditJobTemplateResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "EditJobTemplate",
      version: "2017-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EditJobTemplateResponse>(await this.callApi(params, req, runtime), new EditJobTemplateResponse({}));
  }

  async editJobTemplate(request: EditJobTemplateRequest): Promise<EditJobTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.editJobTemplateWithOptions(request, runtime);
  }

  async getAutoScaleConfigWithOptions(request: GetAutoScaleConfigRequest, runtime: $Util.RuntimeOptions): Promise<GetAutoScaleConfigResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAutoScaleConfig",
      version: "2017-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAutoScaleConfigResponse>(await this.callApi(params, req, runtime), new GetAutoScaleConfigResponse({}));
  }

  async getAutoScaleConfig(request: GetAutoScaleConfigRequest): Promise<GetAutoScaleConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAutoScaleConfigWithOptions(request, runtime);
  }

  async listClusterLogsWithOptions(request: ListClusterLogsRequest, runtime: $Util.RuntimeOptions): Promise<ListClusterLogsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListClusterLogs",
      version: "2017-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListClusterLogsResponse>(await this.callApi(params, req, runtime), new ListClusterLogsResponse({}));
  }

  async listClusterLogs(request: ListClusterLogsRequest): Promise<ListClusterLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listClusterLogsWithOptions(request, runtime);
  }

  async listClustersWithOptions(request: ListClustersRequest, runtime: $Util.RuntimeOptions): Promise<ListClustersResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListClusters",
      version: "2017-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListClustersResponse>(await this.callApi(params, req, runtime), new ListClustersResponse({}));
  }

  async listClusters(request: ListClustersRequest): Promise<ListClustersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listClustersWithOptions(request, runtime);
  }

  async listCurrentClientVersionWithOptions(runtime: $Util.RuntimeOptions): Promise<ListCurrentClientVersionResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "ListCurrentClientVersion",
      version: "2017-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListCurrentClientVersionResponse>(await this.callApi(params, req, runtime), new ListCurrentClientVersionResponse({}));
  }

  async listCurrentClientVersion(): Promise<ListCurrentClientVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCurrentClientVersionWithOptions(runtime);
  }

  async listCustomImagesWithOptions(request: ListCustomImagesRequest, runtime: $Util.RuntimeOptions): Promise<ListCustomImagesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListCustomImages",
      version: "2017-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListCustomImagesResponse>(await this.callApi(params, req, runtime), new ListCustomImagesResponse({}));
  }

  async listCustomImages(request: ListCustomImagesRequest): Promise<ListCustomImagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCustomImagesWithOptions(request, runtime);
  }

  async listImagesWithOptions(runtime: $Util.RuntimeOptions): Promise<ListImagesResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "ListImages",
      version: "2017-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListImagesResponse>(await this.callApi(params, req, runtime), new ListImagesResponse({}));
  }

  async listImages(): Promise<ListImagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listImagesWithOptions(runtime);
  }

  async listJobTemplatesWithOptions(request: ListJobTemplatesRequest, runtime: $Util.RuntimeOptions): Promise<ListJobTemplatesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListJobTemplates",
      version: "2017-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListJobTemplatesResponse>(await this.callApi(params, req, runtime), new ListJobTemplatesResponse({}));
  }

  async listJobTemplates(request: ListJobTemplatesRequest): Promise<ListJobTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listJobTemplatesWithOptions(request, runtime);
  }

  async listJobsWithOptions(request: ListJobsRequest, runtime: $Util.RuntimeOptions): Promise<ListJobsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListJobs",
      version: "2017-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListJobsResponse>(await this.callApi(params, req, runtime), new ListJobsResponse({}));
  }

  async listJobs(request: ListJobsRequest): Promise<ListJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listJobsWithOptions(request, runtime);
  }

  async listNodesWithOptions(request: ListNodesRequest, runtime: $Util.RuntimeOptions): Promise<ListNodesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListNodes",
      version: "2017-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListNodesResponse>(await this.callApi(params, req, runtime), new ListNodesResponse({}));
  }

  async listNodes(request: ListNodesRequest): Promise<ListNodesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listNodesWithOptions(request, runtime);
  }

  async listNodesNoPagingWithOptions(request: ListNodesNoPagingRequest, runtime: $Util.RuntimeOptions): Promise<ListNodesNoPagingResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListNodesNoPaging",
      version: "2017-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListNodesNoPagingResponse>(await this.callApi(params, req, runtime), new ListNodesNoPagingResponse({}));
  }

  async listNodesNoPaging(request: ListNodesNoPagingRequest): Promise<ListNodesNoPagingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listNodesNoPagingWithOptions(request, runtime);
  }

  async listPreferredEcsTypesWithOptions(request: ListPreferredEcsTypesRequest, runtime: $Util.RuntimeOptions): Promise<ListPreferredEcsTypesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListPreferredEcsTypes",
      version: "2017-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListPreferredEcsTypesResponse>(await this.callApi(params, req, runtime), new ListPreferredEcsTypesResponse({}));
  }

  async listPreferredEcsTypes(request: ListPreferredEcsTypesRequest): Promise<ListPreferredEcsTypesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPreferredEcsTypesWithOptions(request, runtime);
  }

  async listRegionsWithOptions(runtime: $Util.RuntimeOptions): Promise<ListRegionsResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "ListRegions",
      version: "2017-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListRegionsResponse>(await this.callApi(params, req, runtime), new ListRegionsResponse({}));
  }

  async listRegions(): Promise<ListRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRegionsWithOptions(runtime);
  }

  async listSoftwaresWithOptions(request: ListSoftwaresRequest, runtime: $Util.RuntimeOptions): Promise<ListSoftwaresResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListSoftwares",
      version: "2017-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListSoftwaresResponse>(await this.callApi(params, req, runtime), new ListSoftwaresResponse({}));
  }

  async listSoftwares(request: ListSoftwaresRequest): Promise<ListSoftwaresResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSoftwaresWithOptions(request, runtime);
  }

  async listUsersWithOptions(request: ListUsersRequest, runtime: $Util.RuntimeOptions): Promise<ListUsersResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListUsers",
      version: "2017-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListUsersResponse>(await this.callApi(params, req, runtime), new ListUsersResponse({}));
  }

  async listUsers(request: ListUsersRequest): Promise<ListUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUsersWithOptions(request, runtime);
  }

  async listVolumesWithOptions(request: ListVolumesRequest, runtime: $Util.RuntimeOptions): Promise<ListVolumesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListVolumes",
      version: "2017-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListVolumesResponse>(await this.callApi(params, req, runtime), new ListVolumesResponse({}));
  }

  async listVolumes(request: ListVolumesRequest): Promise<ListVolumesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listVolumesWithOptions(request, runtime);
  }

  async modifyClusterAttributesWithOptions(request: ModifyClusterAttributesRequest, runtime: $Util.RuntimeOptions): Promise<ModifyClusterAttributesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyClusterAttributes",
      version: "2017-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyClusterAttributesResponse>(await this.callApi(params, req, runtime), new ModifyClusterAttributesResponse({}));
  }

  async modifyClusterAttributes(request: ModifyClusterAttributesRequest): Promise<ModifyClusterAttributesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyClusterAttributesWithOptions(request, runtime);
  }

  async modifyUserGroupsWithOptions(request: ModifyUserGroupsRequest, runtime: $Util.RuntimeOptions): Promise<ModifyUserGroupsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyUserGroups",
      version: "2017-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyUserGroupsResponse>(await this.callApi(params, req, runtime), new ModifyUserGroupsResponse({}));
  }

  async modifyUserGroups(request: ModifyUserGroupsRequest): Promise<ModifyUserGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyUserGroupsWithOptions(request, runtime);
  }

  async modifyUserPasswordsWithOptions(request: ModifyUserPasswordsRequest, runtime: $Util.RuntimeOptions): Promise<ModifyUserPasswordsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyUserPasswords",
      version: "2017-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyUserPasswordsResponse>(await this.callApi(params, req, runtime), new ModifyUserPasswordsResponse({}));
  }

  async modifyUserPasswords(request: ModifyUserPasswordsRequest): Promise<ModifyUserPasswordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyUserPasswordsWithOptions(request, runtime);
  }

  async rerunJobsWithOptions(request: RerunJobsRequest, runtime: $Util.RuntimeOptions): Promise<RerunJobsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RerunJobs",
      version: "2017-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RerunJobsResponse>(await this.callApi(params, req, runtime), new RerunJobsResponse({}));
  }

  async rerunJobs(request: RerunJobsRequest): Promise<RerunJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.rerunJobsWithOptions(request, runtime);
  }

  async resetNodesWithOptions(request: ResetNodesRequest, runtime: $Util.RuntimeOptions): Promise<ResetNodesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ResetNodes",
      version: "2017-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ResetNodesResponse>(await this.callApi(params, req, runtime), new ResetNodesResponse({}));
  }

  async resetNodes(request: ResetNodesRequest): Promise<ResetNodesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resetNodesWithOptions(request, runtime);
  }

  async setAutoScaleConfigWithOptions(request: SetAutoScaleConfigRequest, runtime: $Util.RuntimeOptions): Promise<SetAutoScaleConfigResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetAutoScaleConfig",
      version: "2017-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetAutoScaleConfigResponse>(await this.callApi(params, req, runtime), new SetAutoScaleConfigResponse({}));
  }

  async setAutoScaleConfig(request: SetAutoScaleConfigRequest): Promise<SetAutoScaleConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setAutoScaleConfigWithOptions(request, runtime);
  }

  async setJobUserWithOptions(request: SetJobUserRequest, runtime: $Util.RuntimeOptions): Promise<SetJobUserResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetJobUser",
      version: "2017-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetJobUserResponse>(await this.callApi(params, req, runtime), new SetJobUserResponse({}));
  }

  async setJobUser(request: SetJobUserRequest): Promise<SetJobUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setJobUserWithOptions(request, runtime);
  }

  async stopJobsWithOptions(request: StopJobsRequest, runtime: $Util.RuntimeOptions): Promise<StopJobsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StopJobs",
      version: "2017-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StopJobsResponse>(await this.callApi(params, req, runtime), new StopJobsResponse({}));
  }

  async stopJobs(request: StopJobsRequest): Promise<StopJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopJobsWithOptions(request, runtime);
  }

  async submitJobWithOptions(request: SubmitJobRequest, runtime: $Util.RuntimeOptions): Promise<SubmitJobResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitJob",
      version: "2017-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitJobResponse>(await this.callApi(params, req, runtime), new SubmitJobResponse({}));
  }

  async submitJob(request: SubmitJobRequest): Promise<SubmitJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitJobWithOptions(request, runtime);
  }

  async upgradeClientWithOptions(request: UpgradeClientRequest, runtime: $Util.RuntimeOptions): Promise<UpgradeClientResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpgradeClient",
      version: "2017-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpgradeClientResponse>(await this.callApi(params, req, runtime), new UpgradeClientResponse({}));
  }

  async upgradeClient(request: UpgradeClientRequest): Promise<UpgradeClientResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.upgradeClientWithOptions(request, runtime);
  }

}
