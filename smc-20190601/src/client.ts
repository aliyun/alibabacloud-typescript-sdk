// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CreateAccessTokenRequest extends $tea.Model {
  count?: string;
  description?: string;
  name?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  timeToLiveInDays?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      description: 'Description',
      name: 'Name',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      timeToLiveInDays: 'TimeToLiveInDays',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'string',
      description: 'string',
      name: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      timeToLiveInDays: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAccessTokenResponseBody extends $tea.Model {
  accessTokenCode?: string;
  accessTokenId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessTokenCode: 'AccessTokenCode',
      accessTokenId: 'AccessTokenId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessTokenCode: 'string',
      accessTokenId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAccessTokenResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateAccessTokenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateAccessTokenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateReplicationJobRequest extends $tea.Model {
  clientToken?: string;
  containerNamespace?: string;
  containerRepository?: string;
  containerTag?: string;
  dataDisk?: CreateReplicationJobRequestDataDisk[];
  description?: string;
  frequency?: number;
  imageName?: string;
  instanceId?: string;
  instanceRamRole?: string;
  instanceType?: string;
  jobType?: number;
  launchTemplateId?: string;
  launchTemplateVersion?: string;
  licenseType?: string;
  maxNumberOfImageToKeep?: number;
  name?: string;
  netMode?: number;
  ownerId?: number;
  regionId?: string;
  replicationParameters?: string;
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  runOnce?: boolean;
  scheduledStartTime?: string;
  sourceId?: string;
  systemDiskPart?: CreateReplicationJobRequestSystemDiskPart[];
  systemDiskSize?: number;
  tag?: CreateReplicationJobRequestTag[];
  targetType?: string;
  vSwitchId?: string;
  validTime?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      containerNamespace: 'ContainerNamespace',
      containerRepository: 'ContainerRepository',
      containerTag: 'ContainerTag',
      dataDisk: 'DataDisk',
      description: 'Description',
      frequency: 'Frequency',
      imageName: 'ImageName',
      instanceId: 'InstanceId',
      instanceRamRole: 'InstanceRamRole',
      instanceType: 'InstanceType',
      jobType: 'JobType',
      launchTemplateId: 'LaunchTemplateId',
      launchTemplateVersion: 'LaunchTemplateVersion',
      licenseType: 'LicenseType',
      maxNumberOfImageToKeep: 'MaxNumberOfImageToKeep',
      name: 'Name',
      netMode: 'NetMode',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      replicationParameters: 'ReplicationParameters',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      runOnce: 'RunOnce',
      scheduledStartTime: 'ScheduledStartTime',
      sourceId: 'SourceId',
      systemDiskPart: 'SystemDiskPart',
      systemDiskSize: 'SystemDiskSize',
      tag: 'Tag',
      targetType: 'TargetType',
      vSwitchId: 'VSwitchId',
      validTime: 'ValidTime',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      containerNamespace: 'string',
      containerRepository: 'string',
      containerTag: 'string',
      dataDisk: { 'type': 'array', 'itemType': CreateReplicationJobRequestDataDisk },
      description: 'string',
      frequency: 'number',
      imageName: 'string',
      instanceId: 'string',
      instanceRamRole: 'string',
      instanceType: 'string',
      jobType: 'number',
      launchTemplateId: 'string',
      launchTemplateVersion: 'string',
      licenseType: 'string',
      maxNumberOfImageToKeep: 'number',
      name: 'string',
      netMode: 'number',
      ownerId: 'number',
      regionId: 'string',
      replicationParameters: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      runOnce: 'boolean',
      scheduledStartTime: 'string',
      sourceId: 'string',
      systemDiskPart: { 'type': 'array', 'itemType': CreateReplicationJobRequestSystemDiskPart },
      systemDiskSize: 'number',
      tag: { 'type': 'array', 'itemType': CreateReplicationJobRequestTag },
      targetType: 'string',
      vSwitchId: 'string',
      validTime: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateReplicationJobResponseBody extends $tea.Model {
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

export class CreateReplicationJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateReplicationJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateReplicationJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CutOverReplicationJobRequest extends $tea.Model {
  jobId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  syncData?: boolean;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      syncData: 'SyncData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      syncData: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CutOverReplicationJobResponseBody extends $tea.Model {
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

export class CutOverReplicationJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CutOverReplicationJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CutOverReplicationJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAccessTokenRequest extends $tea.Model {
  accessTokenId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      accessTokenId: 'AccessTokenId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessTokenId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAccessTokenResponseBody extends $tea.Model {
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

export class DeleteAccessTokenResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteAccessTokenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteAccessTokenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteReplicationJobRequest extends $tea.Model {
  jobId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteReplicationJobResponseBody extends $tea.Model {
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

export class DeleteReplicationJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteReplicationJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteReplicationJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSourceServerRequest extends $tea.Model {
  force?: boolean;
  ownerId?: number;
  resourceOwnerAccount?: string;
  sourceId?: string;
  static names(): { [key: string]: string } {
    return {
      force: 'Force',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      sourceId: 'SourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      force: 'boolean',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      sourceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSourceServerResponseBody extends $tea.Model {
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

export class DeleteSourceServerResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteSourceServerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteSourceServerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReplicationJobsRequest extends $tea.Model {
  businessStatus?: string;
  instanceId?: string[];
  jobId?: string[];
  jobType?: number;
  name?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  sourceId?: string[];
  status?: string;
  tag?: DescribeReplicationJobsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      businessStatus: 'BusinessStatus',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      jobType: 'JobType',
      name: 'Name',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      sourceId: 'SourceId',
      status: 'Status',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessStatus: 'string',
      instanceId: { 'type': 'array', 'itemType': 'string' },
      jobId: { 'type': 'array', 'itemType': 'string' },
      jobType: 'number',
      name: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      sourceId: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
      tag: { 'type': 'array', 'itemType': DescribeReplicationJobsRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReplicationJobsResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  replicationJobs?: DescribeReplicationJobsResponseBodyReplicationJobs;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      replicationJobs: 'ReplicationJobs',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      replicationJobs: DescribeReplicationJobsResponseBodyReplicationJobs,
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReplicationJobsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeReplicationJobsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeReplicationJobsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSourceServersRequest extends $tea.Model {
  jobId?: string;
  name?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  sourceId?: string[];
  state?: string;
  tag?: DescribeSourceServersRequestTag[];
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      name: 'Name',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      sourceId: 'SourceId',
      state: 'State',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      name: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      sourceId: { 'type': 'array', 'itemType': 'string' },
      state: 'string',
      tag: { 'type': 'array', 'itemType': DescribeSourceServersRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSourceServersResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  sourceServers?: DescribeSourceServersResponseBodySourceServers;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      sourceServers: 'SourceServers',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      sourceServers: DescribeSourceServersResponseBodySourceServers,
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSourceServersResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeSourceServersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeSourceServersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableAccessTokenRequest extends $tea.Model {
  accessTokenId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      accessTokenId: 'AccessTokenId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessTokenId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableAccessTokenResponseBody extends $tea.Model {
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

export class DisableAccessTokenResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DisableAccessTokenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DisableAccessTokenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccessTokensRequest extends $tea.Model {
  accessTokenId?: string[];
  name?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      accessTokenId: 'AccessTokenId',
      name: 'Name',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessTokenId: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccessTokensResponseBody extends $tea.Model {
  accessTokens?: ListAccessTokensResponseBodyAccessTokens;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accessTokens: 'AccessTokens',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessTokens: ListAccessTokensResponseBodyAccessTokens,
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

export class ListAccessTokensResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListAccessTokensResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListAccessTokensResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequest extends $tea.Model {
  nextToken?: string;
  ownerId?: number;
  resourceId?: string[];
  resourceOwnerAccount?: string;
  resourceType?: string;
  tag?: ListTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      ownerId: 'OwnerId',
      resourceId: 'ResourceId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      ownerId: 'number',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceOwnerAccount: 'string',
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': ListTagResourcesRequestTag },
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

export class ModifyReplicationJobAttributeRequest extends $tea.Model {
  containerNamespace?: string;
  containerRepository?: string;
  containerTag?: string;
  dataDisk?: ModifyReplicationJobAttributeRequestDataDisk[];
  description?: string;
  frequency?: number;
  imageName?: string;
  instanceId?: string;
  instanceRamRole?: string;
  instanceType?: string;
  jobId?: string;
  launchTemplateId?: string;
  launchTemplateVersion?: string;
  licenseType?: string;
  maxNumberOfImageToKeep?: number;
  name?: string;
  netMode?: number;
  ownerId?: number;
  replicationParameters?: string;
  resourceOwnerAccount?: string;
  scheduledStartTime?: string;
  systemDiskPart?: ModifyReplicationJobAttributeRequestSystemDiskPart[];
  systemDiskSize?: number;
  targetType?: string;
  vSwitchId?: string;
  validTime?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      containerNamespace: 'ContainerNamespace',
      containerRepository: 'ContainerRepository',
      containerTag: 'ContainerTag',
      dataDisk: 'DataDisk',
      description: 'Description',
      frequency: 'Frequency',
      imageName: 'ImageName',
      instanceId: 'InstanceId',
      instanceRamRole: 'InstanceRamRole',
      instanceType: 'InstanceType',
      jobId: 'JobId',
      launchTemplateId: 'LaunchTemplateId',
      launchTemplateVersion: 'LaunchTemplateVersion',
      licenseType: 'LicenseType',
      maxNumberOfImageToKeep: 'MaxNumberOfImageToKeep',
      name: 'Name',
      netMode: 'NetMode',
      ownerId: 'OwnerId',
      replicationParameters: 'ReplicationParameters',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      scheduledStartTime: 'ScheduledStartTime',
      systemDiskPart: 'SystemDiskPart',
      systemDiskSize: 'SystemDiskSize',
      targetType: 'TargetType',
      vSwitchId: 'VSwitchId',
      validTime: 'ValidTime',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerNamespace: 'string',
      containerRepository: 'string',
      containerTag: 'string',
      dataDisk: { 'type': 'array', 'itemType': ModifyReplicationJobAttributeRequestDataDisk },
      description: 'string',
      frequency: 'number',
      imageName: 'string',
      instanceId: 'string',
      instanceRamRole: 'string',
      instanceType: 'string',
      jobId: 'string',
      launchTemplateId: 'string',
      launchTemplateVersion: 'string',
      licenseType: 'string',
      maxNumberOfImageToKeep: 'number',
      name: 'string',
      netMode: 'number',
      ownerId: 'number',
      replicationParameters: 'string',
      resourceOwnerAccount: 'string',
      scheduledStartTime: 'string',
      systemDiskPart: { 'type': 'array', 'itemType': ModifyReplicationJobAttributeRequestSystemDiskPart },
      systemDiskSize: 'number',
      targetType: 'string',
      vSwitchId: 'string',
      validTime: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyReplicationJobAttributeResponseBody extends $tea.Model {
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

export class ModifyReplicationJobAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyReplicationJobAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyReplicationJobAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySourceServerAttributeRequest extends $tea.Model {
  description?: string;
  name?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  sourceId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      sourceId: 'SourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      sourceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySourceServerAttributeResponseBody extends $tea.Model {
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

export class ModifySourceServerAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifySourceServerAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifySourceServerAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartReplicationJobRequest extends $tea.Model {
  jobId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartReplicationJobResponseBody extends $tea.Model {
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

export class StartReplicationJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: StartReplicationJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StartReplicationJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopReplicationJobRequest extends $tea.Model {
  jobId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopReplicationJobResponseBody extends $tea.Model {
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

export class StopReplicationJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: StopReplicationJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StopReplicationJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequest extends $tea.Model {
  ownerId?: number;
  resourceId?: string[];
  resourceOwnerAccount?: string;
  resourceType?: string;
  tag?: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceId: 'ResourceId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceOwnerAccount: 'string',
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': TagResourcesRequestTag },
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

export class UntagResourcesRequest extends $tea.Model {
  all?: boolean;
  ownerId?: number;
  resourceId?: string[];
  resourceOwnerAccount?: string;
  resourceType?: string;
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      ownerId: 'OwnerId',
      resourceId: 'ResourceId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      ownerId: 'number',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceOwnerAccount: 'string',
      resourceType: 'string',
      tagKey: { 'type': 'array', 'itemType': 'string' },
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

export class CreateReplicationJobRequestDataDiskPart extends $tea.Model {
  block?: boolean;
  device?: string;
  sizeBytes?: number;
  static names(): { [key: string]: string } {
    return {
      block: 'Block',
      device: 'Device',
      sizeBytes: 'SizeBytes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      block: 'boolean',
      device: 'string',
      sizeBytes: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateReplicationJobRequestDataDisk extends $tea.Model {
  index?: number;
  part?: CreateReplicationJobRequestDataDiskPart[];
  size?: number;
  static names(): { [key: string]: string } {
    return {
      index: 'Index',
      part: 'Part',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'number',
      part: { 'type': 'array', 'itemType': CreateReplicationJobRequestDataDiskPart },
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateReplicationJobRequestSystemDiskPart extends $tea.Model {
  block?: boolean;
  device?: string;
  sizeBytes?: number;
  static names(): { [key: string]: string } {
    return {
      block: 'Block',
      device: 'Device',
      sizeBytes: 'SizeBytes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      block: 'boolean',
      device: 'string',
      sizeBytes: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateReplicationJobRequestTag extends $tea.Model {
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

export class DescribeReplicationJobsRequestTag extends $tea.Model {
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

export class DescribeReplicationJobsResponseBodyReplicationJobsReplicationJobDataDisksDataDiskPartsPart extends $tea.Model {
  block?: boolean;
  device?: string;
  sizeBytes?: number;
  static names(): { [key: string]: string } {
    return {
      block: 'Block',
      device: 'Device',
      sizeBytes: 'SizeBytes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      block: 'boolean',
      device: 'string',
      sizeBytes: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReplicationJobsResponseBodyReplicationJobsReplicationJobDataDisksDataDiskParts extends $tea.Model {
  part?: DescribeReplicationJobsResponseBodyReplicationJobsReplicationJobDataDisksDataDiskPartsPart[];
  static names(): { [key: string]: string } {
    return {
      part: 'Part',
    };
  }

  static types(): { [key: string]: any } {
    return {
      part: { 'type': 'array', 'itemType': DescribeReplicationJobsResponseBodyReplicationJobsReplicationJobDataDisksDataDiskPartsPart },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReplicationJobsResponseBodyReplicationJobsReplicationJobDataDisksDataDisk extends $tea.Model {
  index?: number;
  parts?: DescribeReplicationJobsResponseBodyReplicationJobsReplicationJobDataDisksDataDiskParts;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      index: 'Index',
      parts: 'Parts',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'number',
      parts: DescribeReplicationJobsResponseBodyReplicationJobsReplicationJobDataDisksDataDiskParts,
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReplicationJobsResponseBodyReplicationJobsReplicationJobDataDisks extends $tea.Model {
  dataDisk?: DescribeReplicationJobsResponseBodyReplicationJobsReplicationJobDataDisksDataDisk[];
  static names(): { [key: string]: string } {
    return {
      dataDisk: 'DataDisk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataDisk: { 'type': 'array', 'itemType': DescribeReplicationJobsResponseBodyReplicationJobsReplicationJobDataDisksDataDisk },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReplicationJobsResponseBodyReplicationJobsReplicationJobReplicationJobRunsReplicationJobRun extends $tea.Model {
  endTime?: string;
  imageId?: string;
  startTime?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      imageId: 'ImageId',
      startTime: 'StartTime',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      imageId: 'string',
      startTime: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReplicationJobsResponseBodyReplicationJobsReplicationJobReplicationJobRuns extends $tea.Model {
  replicationJobRun?: DescribeReplicationJobsResponseBodyReplicationJobsReplicationJobReplicationJobRunsReplicationJobRun[];
  static names(): { [key: string]: string } {
    return {
      replicationJobRun: 'ReplicationJobRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      replicationJobRun: { 'type': 'array', 'itemType': DescribeReplicationJobsResponseBodyReplicationJobsReplicationJobReplicationJobRunsReplicationJobRun },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReplicationJobsResponseBodyReplicationJobsReplicationJobSystemDiskPartsSystemDiskPart extends $tea.Model {
  block?: boolean;
  device?: string;
  sizeBytes?: number;
  static names(): { [key: string]: string } {
    return {
      block: 'Block',
      device: 'Device',
      sizeBytes: 'SizeBytes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      block: 'boolean',
      device: 'string',
      sizeBytes: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReplicationJobsResponseBodyReplicationJobsReplicationJobSystemDiskParts extends $tea.Model {
  systemDiskPart?: DescribeReplicationJobsResponseBodyReplicationJobsReplicationJobSystemDiskPartsSystemDiskPart[];
  static names(): { [key: string]: string } {
    return {
      systemDiskPart: 'SystemDiskPart',
    };
  }

  static types(): { [key: string]: any } {
    return {
      systemDiskPart: { 'type': 'array', 'itemType': DescribeReplicationJobsResponseBodyReplicationJobsReplicationJobSystemDiskPartsSystemDiskPart },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReplicationJobsResponseBodyReplicationJobsReplicationJobTagsTag extends $tea.Model {
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

export class DescribeReplicationJobsResponseBodyReplicationJobsReplicationJobTags extends $tea.Model {
  tag?: DescribeReplicationJobsResponseBodyReplicationJobsReplicationJobTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeReplicationJobsResponseBodyReplicationJobsReplicationJobTagsTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReplicationJobsResponseBodyReplicationJobsReplicationJob extends $tea.Model {
  businessStatus?: string;
  containerNamespace?: string;
  containerRepository?: string;
  containerTag?: string;
  creationTime?: string;
  dataDisks?: DescribeReplicationJobsResponseBodyReplicationJobsReplicationJobDataDisks;
  description?: string;
  endTime?: string;
  errorCode?: string;
  frequency?: number;
  imageId?: string;
  imageName?: string;
  instanceId?: string;
  instanceRamRole?: string;
  instanceType?: string;
  jobId?: string;
  jobType?: number;
  launchTemplateId?: string;
  launchTemplateVersion?: string;
  licenseType?: string;
  maxNumberOfImageToKeep?: number;
  name?: string;
  netMode?: number;
  progress?: number;
  regionId?: string;
  replicationJobRuns?: DescribeReplicationJobsResponseBodyReplicationJobsReplicationJobReplicationJobRuns;
  replicationParameters?: string;
  resourceGroupId?: string;
  runOnce?: boolean;
  scheduledStartTime?: string;
  sourceId?: string;
  startTime?: string;
  status?: string;
  statusInfo?: string;
  systemDiskParts?: DescribeReplicationJobsResponseBodyReplicationJobsReplicationJobSystemDiskParts;
  systemDiskSize?: number;
  tags?: DescribeReplicationJobsResponseBodyReplicationJobsReplicationJobTags;
  targetType?: string;
  transitionInstanceId?: string;
  vSwitchId?: string;
  validTime?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      businessStatus: 'BusinessStatus',
      containerNamespace: 'ContainerNamespace',
      containerRepository: 'ContainerRepository',
      containerTag: 'ContainerTag',
      creationTime: 'CreationTime',
      dataDisks: 'DataDisks',
      description: 'Description',
      endTime: 'EndTime',
      errorCode: 'ErrorCode',
      frequency: 'Frequency',
      imageId: 'ImageId',
      imageName: 'ImageName',
      instanceId: 'InstanceId',
      instanceRamRole: 'InstanceRamRole',
      instanceType: 'InstanceType',
      jobId: 'JobId',
      jobType: 'JobType',
      launchTemplateId: 'LaunchTemplateId',
      launchTemplateVersion: 'LaunchTemplateVersion',
      licenseType: 'LicenseType',
      maxNumberOfImageToKeep: 'MaxNumberOfImageToKeep',
      name: 'Name',
      netMode: 'NetMode',
      progress: 'Progress',
      regionId: 'RegionId',
      replicationJobRuns: 'ReplicationJobRuns',
      replicationParameters: 'ReplicationParameters',
      resourceGroupId: 'ResourceGroupId',
      runOnce: 'RunOnce',
      scheduledStartTime: 'ScheduledStartTime',
      sourceId: 'SourceId',
      startTime: 'StartTime',
      status: 'Status',
      statusInfo: 'StatusInfo',
      systemDiskParts: 'SystemDiskParts',
      systemDiskSize: 'SystemDiskSize',
      tags: 'Tags',
      targetType: 'TargetType',
      transitionInstanceId: 'TransitionInstanceId',
      vSwitchId: 'VSwitchId',
      validTime: 'ValidTime',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessStatus: 'string',
      containerNamespace: 'string',
      containerRepository: 'string',
      containerTag: 'string',
      creationTime: 'string',
      dataDisks: DescribeReplicationJobsResponseBodyReplicationJobsReplicationJobDataDisks,
      description: 'string',
      endTime: 'string',
      errorCode: 'string',
      frequency: 'number',
      imageId: 'string',
      imageName: 'string',
      instanceId: 'string',
      instanceRamRole: 'string',
      instanceType: 'string',
      jobId: 'string',
      jobType: 'number',
      launchTemplateId: 'string',
      launchTemplateVersion: 'string',
      licenseType: 'string',
      maxNumberOfImageToKeep: 'number',
      name: 'string',
      netMode: 'number',
      progress: 'number',
      regionId: 'string',
      replicationJobRuns: DescribeReplicationJobsResponseBodyReplicationJobsReplicationJobReplicationJobRuns,
      replicationParameters: 'string',
      resourceGroupId: 'string',
      runOnce: 'boolean',
      scheduledStartTime: 'string',
      sourceId: 'string',
      startTime: 'string',
      status: 'string',
      statusInfo: 'string',
      systemDiskParts: DescribeReplicationJobsResponseBodyReplicationJobsReplicationJobSystemDiskParts,
      systemDiskSize: 'number',
      tags: DescribeReplicationJobsResponseBodyReplicationJobsReplicationJobTags,
      targetType: 'string',
      transitionInstanceId: 'string',
      vSwitchId: 'string',
      validTime: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReplicationJobsResponseBodyReplicationJobs extends $tea.Model {
  replicationJob?: DescribeReplicationJobsResponseBodyReplicationJobsReplicationJob[];
  static names(): { [key: string]: string } {
    return {
      replicationJob: 'ReplicationJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      replicationJob: { 'type': 'array', 'itemType': DescribeReplicationJobsResponseBodyReplicationJobsReplicationJob },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSourceServersRequestTag extends $tea.Model {
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

export class DescribeSourceServersResponseBodySourceServersSourceServerDataDisksDataDiskPartsPart extends $tea.Model {
  canBlock?: boolean;
  device?: string;
  need?: boolean;
  path?: string;
  sizeBytes?: number;
  static names(): { [key: string]: string } {
    return {
      canBlock: 'CanBlock',
      device: 'Device',
      need: 'Need',
      path: 'Path',
      sizeBytes: 'SizeBytes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canBlock: 'boolean',
      device: 'string',
      need: 'boolean',
      path: 'string',
      sizeBytes: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSourceServersResponseBodySourceServersSourceServerDataDisksDataDiskParts extends $tea.Model {
  part?: DescribeSourceServersResponseBodySourceServersSourceServerDataDisksDataDiskPartsPart[];
  static names(): { [key: string]: string } {
    return {
      part: 'Part',
    };
  }

  static types(): { [key: string]: any } {
    return {
      part: { 'type': 'array', 'itemType': DescribeSourceServersResponseBodySourceServersSourceServerDataDisksDataDiskPartsPart },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSourceServersResponseBodySourceServersSourceServerDataDisksDataDisk extends $tea.Model {
  index?: number;
  parts?: DescribeSourceServersResponseBodySourceServersSourceServerDataDisksDataDiskParts;
  path?: string;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      index: 'Index',
      parts: 'Parts',
      path: 'Path',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'number',
      parts: DescribeSourceServersResponseBodySourceServersSourceServerDataDisksDataDiskParts,
      path: 'string',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSourceServersResponseBodySourceServersSourceServerDataDisks extends $tea.Model {
  dataDisk?: DescribeSourceServersResponseBodySourceServersSourceServerDataDisksDataDisk[];
  static names(): { [key: string]: string } {
    return {
      dataDisk: 'DataDisk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataDisk: { 'type': 'array', 'itemType': DescribeSourceServersResponseBodySourceServersSourceServerDataDisksDataDisk },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSourceServersResponseBodySourceServersSourceServerSystemDiskPartsSystemDiskPart extends $tea.Model {
  canBlock?: boolean;
  device?: string;
  need?: boolean;
  path?: string;
  sizeBytes?: number;
  static names(): { [key: string]: string } {
    return {
      canBlock: 'CanBlock',
      device: 'Device',
      need: 'Need',
      path: 'Path',
      sizeBytes: 'SizeBytes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canBlock: 'boolean',
      device: 'string',
      need: 'boolean',
      path: 'string',
      sizeBytes: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSourceServersResponseBodySourceServersSourceServerSystemDiskParts extends $tea.Model {
  systemDiskPart?: DescribeSourceServersResponseBodySourceServersSourceServerSystemDiskPartsSystemDiskPart[];
  static names(): { [key: string]: string } {
    return {
      systemDiskPart: 'SystemDiskPart',
    };
  }

  static types(): { [key: string]: any } {
    return {
      systemDiskPart: { 'type': 'array', 'itemType': DescribeSourceServersResponseBodySourceServersSourceServerSystemDiskPartsSystemDiskPart },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSourceServersResponseBodySourceServersSourceServerTagsTag extends $tea.Model {
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

export class DescribeSourceServersResponseBodySourceServersSourceServerTags extends $tea.Model {
  tag?: DescribeSourceServersResponseBodySourceServersSourceServerTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeSourceServersResponseBodySourceServersSourceServerTagsTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSourceServersResponseBodySourceServersSourceServer extends $tea.Model {
  agentVersion?: string;
  architecture?: string;
  creationTime?: string;
  dataDisks?: DescribeSourceServersResponseBodySourceServersSourceServerDataDisks;
  description?: string;
  errorCode?: string;
  heartbeatRate?: number;
  jobId?: string;
  kernelLevel?: number;
  name?: string;
  platform?: string;
  replicationDriver?: string;
  resourceGroupId?: string;
  sourceId?: string;
  state?: string;
  statusInfo?: string;
  systemDiskParts?: DescribeSourceServersResponseBodySourceServersSourceServerSystemDiskParts;
  systemDiskSize?: number;
  systemInfo?: string;
  tags?: DescribeSourceServersResponseBodySourceServersSourceServerTags;
  static names(): { [key: string]: string } {
    return {
      agentVersion: 'AgentVersion',
      architecture: 'Architecture',
      creationTime: 'CreationTime',
      dataDisks: 'DataDisks',
      description: 'Description',
      errorCode: 'ErrorCode',
      heartbeatRate: 'HeartbeatRate',
      jobId: 'JobId',
      kernelLevel: 'KernelLevel',
      name: 'Name',
      platform: 'Platform',
      replicationDriver: 'ReplicationDriver',
      resourceGroupId: 'ResourceGroupId',
      sourceId: 'SourceId',
      state: 'State',
      statusInfo: 'StatusInfo',
      systemDiskParts: 'SystemDiskParts',
      systemDiskSize: 'SystemDiskSize',
      systemInfo: 'SystemInfo',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentVersion: 'string',
      architecture: 'string',
      creationTime: 'string',
      dataDisks: DescribeSourceServersResponseBodySourceServersSourceServerDataDisks,
      description: 'string',
      errorCode: 'string',
      heartbeatRate: 'number',
      jobId: 'string',
      kernelLevel: 'number',
      name: 'string',
      platform: 'string',
      replicationDriver: 'string',
      resourceGroupId: 'string',
      sourceId: 'string',
      state: 'string',
      statusInfo: 'string',
      systemDiskParts: DescribeSourceServersResponseBodySourceServersSourceServerSystemDiskParts,
      systemDiskSize: 'number',
      systemInfo: 'string',
      tags: DescribeSourceServersResponseBodySourceServersSourceServerTags,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSourceServersResponseBodySourceServers extends $tea.Model {
  sourceServer?: DescribeSourceServersResponseBodySourceServersSourceServer[];
  static names(): { [key: string]: string } {
    return {
      sourceServer: 'SourceServer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceServer: { 'type': 'array', 'itemType': DescribeSourceServersResponseBodySourceServersSourceServer },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccessTokensResponseBodyAccessTokensAccessToken extends $tea.Model {
  accessTokenId?: string;
  count?: string;
  creationTime?: string;
  description?: string;
  name?: string;
  registeredCount?: string;
  status?: string;
  timeToLiveInDays?: string;
  static names(): { [key: string]: string } {
    return {
      accessTokenId: 'AccessTokenId',
      count: 'Count',
      creationTime: 'CreationTime',
      description: 'Description',
      name: 'Name',
      registeredCount: 'RegisteredCount',
      status: 'Status',
      timeToLiveInDays: 'TimeToLiveInDays',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessTokenId: 'string',
      count: 'string',
      creationTime: 'string',
      description: 'string',
      name: 'string',
      registeredCount: 'string',
      status: 'string',
      timeToLiveInDays: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccessTokensResponseBodyAccessTokens extends $tea.Model {
  accessToken?: ListAccessTokensResponseBodyAccessTokensAccessToken[];
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: { 'type': 'array', 'itemType': ListAccessTokensResponseBodyAccessTokensAccessToken },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequestTag extends $tea.Model {
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

export class ListTagResourcesResponseBodyTagResourcesTagResource extends $tea.Model {
  resourceId?: string;
  resourceType?: string;
  tagKey?: string;
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

export class ModifyReplicationJobAttributeRequestDataDiskPart extends $tea.Model {
  block?: boolean;
  device?: string;
  sizeBytes?: number;
  static names(): { [key: string]: string } {
    return {
      block: 'Block',
      device: 'Device',
      sizeBytes: 'SizeBytes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      block: 'boolean',
      device: 'string',
      sizeBytes: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyReplicationJobAttributeRequestDataDisk extends $tea.Model {
  index?: number;
  part?: ModifyReplicationJobAttributeRequestDataDiskPart[];
  size?: number;
  static names(): { [key: string]: string } {
    return {
      index: 'Index',
      part: 'Part',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'number',
      part: { 'type': 'array', 'itemType': ModifyReplicationJobAttributeRequestDataDiskPart },
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyReplicationJobAttributeRequestSystemDiskPart extends $tea.Model {
  block?: boolean;
  device?: string;
  sizeBytes?: number;
  static names(): { [key: string]: string } {
    return {
      block: 'Block',
      device: 'Device',
      sizeBytes: 'SizeBytes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      block: 'boolean',
      device: 'string',
      sizeBytes: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequestTag extends $tea.Model {
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


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "central";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("smc", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
    * If you want to import the information of migration sources by using an activation code, you can call this operation to create one.
    *
    * @param request CreateAccessTokenRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateAccessTokenResponse
   */
  async createAccessTokenWithOptions(request: CreateAccessTokenRequest, runtime: $Util.RuntimeOptions): Promise<CreateAccessTokenResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.count)) {
      query["Count"] = request.count;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.timeToLiveInDays)) {
      query["TimeToLiveInDays"] = request.timeToLiveInDays;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateAccessToken",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAccessTokenResponse>(await this.callApi(params, req, runtime), new CreateAccessTokenResponse({}));
  }

  /**
    * If you want to import the information of migration sources by using an activation code, you can call this operation to create one.
    *
    * @param request CreateAccessTokenRequest
    * @return CreateAccessTokenResponse
   */
  async createAccessToken(request: CreateAccessTokenRequest): Promise<CreateAccessTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAccessTokenWithOptions(request, runtime);
  }

  /**
    * ## Usage notes
    * *   You can create migration jobs only for source servers that are in the Available state.
    * *   Each source server can be associated with only one migration job that is in the Ready, Running, Stopped, Waiting, InError, or Expired state.
    * *   You can create a maximum of 1,000 migration jobs within each Alibaba Cloud account.
    * *   If you migrate a source server to an image, you must specify the ImageName, SystemDiskSize, and DataDisk parameters.
    * *   If you use a virtual private cloud (VPC) to migrate data, the VSwitchId parameter is required and the VpcId parameter is optional.
    * *   Server Migration Center (SMC) allows you to migrate source servers to Docker container images. This allows you to migrate containerized applications in a cost-effective way.
    *
    * @param request CreateReplicationJobRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateReplicationJobResponse
   */
  async createReplicationJobWithOptions(request: CreateReplicationJobRequest, runtime: $Util.RuntimeOptions): Promise<CreateReplicationJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.containerNamespace)) {
      query["ContainerNamespace"] = request.containerNamespace;
    }

    if (!Util.isUnset(request.containerRepository)) {
      query["ContainerRepository"] = request.containerRepository;
    }

    if (!Util.isUnset(request.containerTag)) {
      query["ContainerTag"] = request.containerTag;
    }

    if (!Util.isUnset(request.dataDisk)) {
      query["DataDisk"] = request.dataDisk;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.frequency)) {
      query["Frequency"] = request.frequency;
    }

    if (!Util.isUnset(request.imageName)) {
      query["ImageName"] = request.imageName;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.instanceRamRole)) {
      query["InstanceRamRole"] = request.instanceRamRole;
    }

    if (!Util.isUnset(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!Util.isUnset(request.jobType)) {
      query["JobType"] = request.jobType;
    }

    if (!Util.isUnset(request.launchTemplateId)) {
      query["LaunchTemplateId"] = request.launchTemplateId;
    }

    if (!Util.isUnset(request.launchTemplateVersion)) {
      query["LaunchTemplateVersion"] = request.launchTemplateVersion;
    }

    if (!Util.isUnset(request.licenseType)) {
      query["LicenseType"] = request.licenseType;
    }

    if (!Util.isUnset(request.maxNumberOfImageToKeep)) {
      query["MaxNumberOfImageToKeep"] = request.maxNumberOfImageToKeep;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.netMode)) {
      query["NetMode"] = request.netMode;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.replicationParameters)) {
      query["ReplicationParameters"] = request.replicationParameters;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.runOnce)) {
      query["RunOnce"] = request.runOnce;
    }

    if (!Util.isUnset(request.scheduledStartTime)) {
      query["ScheduledStartTime"] = request.scheduledStartTime;
    }

    if (!Util.isUnset(request.sourceId)) {
      query["SourceId"] = request.sourceId;
    }

    if (!Util.isUnset(request.systemDiskPart)) {
      query["SystemDiskPart"] = request.systemDiskPart;
    }

    if (!Util.isUnset(request.systemDiskSize)) {
      query["SystemDiskSize"] = request.systemDiskSize;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!Util.isUnset(request.targetType)) {
      query["TargetType"] = request.targetType;
    }

    if (!Util.isUnset(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    if (!Util.isUnset(request.validTime)) {
      query["ValidTime"] = request.validTime;
    }

    if (!Util.isUnset(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateReplicationJob",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateReplicationJobResponse>(await this.callApi(params, req, runtime), new CreateReplicationJobResponse({}));
  }

  /**
    * ## Usage notes
    * *   You can create migration jobs only for source servers that are in the Available state.
    * *   Each source server can be associated with only one migration job that is in the Ready, Running, Stopped, Waiting, InError, or Expired state.
    * *   You can create a maximum of 1,000 migration jobs within each Alibaba Cloud account.
    * *   If you migrate a source server to an image, you must specify the ImageName, SystemDiskSize, and DataDisk parameters.
    * *   If you use a virtual private cloud (VPC) to migrate data, the VSwitchId parameter is required and the VpcId parameter is optional.
    * *   Server Migration Center (SMC) allows you to migrate source servers to Docker container images. This allows you to migrate containerized applications in a cost-effective way.
    *
    * @param request CreateReplicationJobRequest
    * @return CreateReplicationJobResponse
   */
  async createReplicationJob(request: CreateReplicationJobRequest): Promise<CreateReplicationJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createReplicationJobWithOptions(request, runtime);
  }

  /**
    * ## Usage notes
    * *   The incremental migration job must be in the Waiting state.
    * *   After you call this operation, the incremental migration job no longer periodically runs. In the meantime, Server Migration Center (SMC) determines whether to perform a full data migration for the last time based on the value of the `SyncData` parameter. If you set the SyncData parameter to `false`, SMC releases intermediate resources without data migration before the migration job is complete. If you set the SyncData parameter to `true`, SMC performs a full data migration and releases intermediate resources before the migration job is complete.
    *
    * @param request CutOverReplicationJobRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CutOverReplicationJobResponse
   */
  async cutOverReplicationJobWithOptions(request: CutOverReplicationJobRequest, runtime: $Util.RuntimeOptions): Promise<CutOverReplicationJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.syncData)) {
      query["SyncData"] = request.syncData;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CutOverReplicationJob",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CutOverReplicationJobResponse>(await this.callApi(params, req, runtime), new CutOverReplicationJobResponse({}));
  }

  /**
    * ## Usage notes
    * *   The incremental migration job must be in the Waiting state.
    * *   After you call this operation, the incremental migration job no longer periodically runs. In the meantime, Server Migration Center (SMC) determines whether to perform a full data migration for the last time based on the value of the `SyncData` parameter. If you set the SyncData parameter to `false`, SMC releases intermediate resources without data migration before the migration job is complete. If you set the SyncData parameter to `true`, SMC performs a full data migration and releases intermediate resources before the migration job is complete.
    *
    * @param request CutOverReplicationJobRequest
    * @return CutOverReplicationJobResponse
   */
  async cutOverReplicationJob(request: CutOverReplicationJobRequest): Promise<CutOverReplicationJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cutOverReplicationJobWithOptions(request, runtime);
  }

  /**
    * You can call this operation to delete an activation code if you no longer need to import the information about migration sources by using the activation code or if the activation code has expired.
    *
    * @param request DeleteAccessTokenRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteAccessTokenResponse
   */
  async deleteAccessTokenWithOptions(request: DeleteAccessTokenRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAccessTokenResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accessTokenId)) {
      query["AccessTokenId"] = request.accessTokenId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteAccessToken",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteAccessTokenResponse>(await this.callApi(params, req, runtime), new DeleteAccessTokenResponse({}));
  }

  /**
    * You can call this operation to delete an activation code if you no longer need to import the information about migration sources by using the activation code or if the activation code has expired.
    *
    * @param request DeleteAccessTokenRequest
    * @return DeleteAccessTokenResponse
   */
  async deleteAccessToken(request: DeleteAccessTokenRequest): Promise<DeleteAccessTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAccessTokenWithOptions(request, runtime);
  }

  /**
    * ## Usage notes
    * *   Deleted migration jobs cannot be restored.
    * *   After a migration job is deleted, associated resources, such as the intermediate instance, are automatically released.
    *
    * @param request DeleteReplicationJobRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteReplicationJobResponse
   */
  async deleteReplicationJobWithOptions(request: DeleteReplicationJobRequest, runtime: $Util.RuntimeOptions): Promise<DeleteReplicationJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteReplicationJob",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteReplicationJobResponse>(await this.callApi(params, req, runtime), new DeleteReplicationJobResponse({}));
  }

  /**
    * ## Usage notes
    * *   Deleted migration jobs cannot be restored.
    * *   After a migration job is deleted, associated resources, such as the intermediate instance, are automatically released.
    *
    * @param request DeleteReplicationJobRequest
    * @return DeleteReplicationJobResponse
   */
  async deleteReplicationJob(request: DeleteReplicationJobRequest): Promise<DeleteReplicationJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteReplicationJobWithOptions(request, runtime);
  }

  /**
    * ## Usage notes
    * *   If a migration job is created for the migration source and the migration job is in the Running state, the migration source cannot be deleted.
    * *   If a migration job is created for the migration source but the migration job is not in the Running state, you can set the `Force` parameter to true to delete the migration source.
    *
    * @param request DeleteSourceServerRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteSourceServerResponse
   */
  async deleteSourceServerWithOptions(request: DeleteSourceServerRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSourceServerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.force)) {
      query["Force"] = request.force;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.sourceId)) {
      query["SourceId"] = request.sourceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteSourceServer",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteSourceServerResponse>(await this.callApi(params, req, runtime), new DeleteSourceServerResponse({}));
  }

  /**
    * ## Usage notes
    * *   If a migration job is created for the migration source and the migration job is in the Running state, the migration source cannot be deleted.
    * *   If a migration job is created for the migration source but the migration job is not in the Running state, you can set the `Force` parameter to true to delete the migration source.
    *
    * @param request DeleteSourceServerRequest
    * @return DeleteSourceServerResponse
   */
  async deleteSourceServer(request: DeleteSourceServerRequest): Promise<DeleteSourceServerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSourceServerWithOptions(request, runtime);
  }

  /**
    * ## Usage notes
    * *   You can specify multiple request parameters to be queried. Specified parameters are evaluated by using the AND operator. Only the specified parameters are used as filter conditions.
    * *   Server Migration Center (SMC) allows you to migrate source servers to Docker container images. You can use SMC to migrate containerized applications in a cost-effective way. For more information, see [Terms](~~60744~~).
    *
    * @param request DescribeReplicationJobsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeReplicationJobsResponse
   */
  async describeReplicationJobsWithOptions(request: DescribeReplicationJobsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeReplicationJobsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.businessStatus)) {
      query["BusinessStatus"] = request.businessStatus;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!Util.isUnset(request.jobType)) {
      query["JobType"] = request.jobType;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.sourceId)) {
      query["SourceId"] = request.sourceId;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeReplicationJobs",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeReplicationJobsResponse>(await this.callApi(params, req, runtime), new DescribeReplicationJobsResponse({}));
  }

  /**
    * ## Usage notes
    * *   You can specify multiple request parameters to be queried. Specified parameters are evaluated by using the AND operator. Only the specified parameters are used as filter conditions.
    * *   Server Migration Center (SMC) allows you to migrate source servers to Docker container images. You can use SMC to migrate containerized applications in a cost-effective way. For more information, see [Terms](~~60744~~).
    *
    * @param request DescribeReplicationJobsRequest
    * @return DescribeReplicationJobsResponse
   */
  async describeReplicationJobs(request: DescribeReplicationJobsRequest): Promise<DescribeReplicationJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeReplicationJobsWithOptions(request, runtime);
  }

  /**
    * ## Usage notes
    * You can specify multiple request parameters to be queried. Specified parameters are evaluated by using the AND operator. Only the specified parameters are used as filter conditions.
    *
    * @param request DescribeSourceServersRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeSourceServersResponse
   */
  async describeSourceServersWithOptions(request: DescribeSourceServersRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSourceServersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.sourceId)) {
      query["SourceId"] = request.sourceId;
    }

    if (!Util.isUnset(request.state)) {
      query["State"] = request.state;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSourceServers",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSourceServersResponse>(await this.callApi(params, req, runtime), new DescribeSourceServersResponse({}));
  }

  /**
    * ## Usage notes
    * You can specify multiple request parameters to be queried. Specified parameters are evaluated by using the AND operator. Only the specified parameters are used as filter conditions.
    *
    * @param request DescribeSourceServersRequest
    * @return DescribeSourceServersResponse
   */
  async describeSourceServers(request: DescribeSourceServersRequest): Promise<DescribeSourceServersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSourceServersWithOptions(request, runtime);
  }

  /**
    * To prevent an activation code from being leaked, you can call this operation to disable the activation code. Disabled activation codes can no longer be used to import the information about migration sources. However, migration sources whose information has been imported are not affected.
    *
    * @param request DisableAccessTokenRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DisableAccessTokenResponse
   */
  async disableAccessTokenWithOptions(request: DisableAccessTokenRequest, runtime: $Util.RuntimeOptions): Promise<DisableAccessTokenResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accessTokenId)) {
      query["AccessTokenId"] = request.accessTokenId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DisableAccessToken",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DisableAccessTokenResponse>(await this.callApi(params, req, runtime), new DisableAccessTokenResponse({}));
  }

  /**
    * To prevent an activation code from being leaked, you can call this operation to disable the activation code. Disabled activation codes can no longer be used to import the information about migration sources. However, migration sources whose information has been imported are not affected.
    *
    * @param request DisableAccessTokenRequest
    * @return DisableAccessTokenResponse
   */
  async disableAccessToken(request: DisableAccessTokenRequest): Promise<DisableAccessTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableAccessTokenWithOptions(request, runtime);
  }

  /**
    * You can call this operation to query activation codes and the usage details of the activation codes. An activation code can be in the activated, unactivated, or expired state.
    *
    * @param request ListAccessTokensRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListAccessTokensResponse
   */
  async listAccessTokensWithOptions(request: ListAccessTokensRequest, runtime: $Util.RuntimeOptions): Promise<ListAccessTokensResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accessTokenId)) {
      query["AccessTokenId"] = request.accessTokenId;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAccessTokens",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAccessTokensResponse>(await this.callApi(params, req, runtime), new ListAccessTokensResponse({}));
  }

  /**
    * You can call this operation to query activation codes and the usage details of the activation codes. An activation code can be in the activated, unactivated, or expired state.
    *
    * @param request ListAccessTokensRequest
    * @return ListAccessTokensResponse
   */
  async listAccessTokens(request: ListAccessTokensRequest): Promise<ListAccessTokensResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAccessTokensWithOptions(request, runtime);
  }

  async listTagResourcesWithOptions(request: ListTagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListTagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
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
      version: "2019-06-01",
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

  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
    * ## Usage notes
    * Before you modify the parameters of a migration job, take note of the following information:
    * *   The `Name` and `Description` parameters can be modified during the lifecycle of the migration job.
    * *   The `Frequency` and `MaxNumberOfImageToKeep` parameters can be modified only before the migration job is executed or when the migration job is in the `Waiting` state.
    * *   Other parameters can be modified only before the migration job is executed.
    *
    * @param request ModifyReplicationJobAttributeRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ModifyReplicationJobAttributeResponse
   */
  async modifyReplicationJobAttributeWithOptions(request: ModifyReplicationJobAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyReplicationJobAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.containerNamespace)) {
      query["ContainerNamespace"] = request.containerNamespace;
    }

    if (!Util.isUnset(request.containerRepository)) {
      query["ContainerRepository"] = request.containerRepository;
    }

    if (!Util.isUnset(request.containerTag)) {
      query["ContainerTag"] = request.containerTag;
    }

    if (!Util.isUnset(request.dataDisk)) {
      query["DataDisk"] = request.dataDisk;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.frequency)) {
      query["Frequency"] = request.frequency;
    }

    if (!Util.isUnset(request.imageName)) {
      query["ImageName"] = request.imageName;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.instanceRamRole)) {
      query["InstanceRamRole"] = request.instanceRamRole;
    }

    if (!Util.isUnset(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!Util.isUnset(request.launchTemplateId)) {
      query["LaunchTemplateId"] = request.launchTemplateId;
    }

    if (!Util.isUnset(request.launchTemplateVersion)) {
      query["LaunchTemplateVersion"] = request.launchTemplateVersion;
    }

    if (!Util.isUnset(request.licenseType)) {
      query["LicenseType"] = request.licenseType;
    }

    if (!Util.isUnset(request.maxNumberOfImageToKeep)) {
      query["MaxNumberOfImageToKeep"] = request.maxNumberOfImageToKeep;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.netMode)) {
      query["NetMode"] = request.netMode;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.replicationParameters)) {
      query["ReplicationParameters"] = request.replicationParameters;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.scheduledStartTime)) {
      query["ScheduledStartTime"] = request.scheduledStartTime;
    }

    if (!Util.isUnset(request.systemDiskPart)) {
      query["SystemDiskPart"] = request.systemDiskPart;
    }

    if (!Util.isUnset(request.systemDiskSize)) {
      query["SystemDiskSize"] = request.systemDiskSize;
    }

    if (!Util.isUnset(request.targetType)) {
      query["TargetType"] = request.targetType;
    }

    if (!Util.isUnset(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    if (!Util.isUnset(request.validTime)) {
      query["ValidTime"] = request.validTime;
    }

    if (!Util.isUnset(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyReplicationJobAttribute",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyReplicationJobAttributeResponse>(await this.callApi(params, req, runtime), new ModifyReplicationJobAttributeResponse({}));
  }

  /**
    * ## Usage notes
    * Before you modify the parameters of a migration job, take note of the following information:
    * *   The `Name` and `Description` parameters can be modified during the lifecycle of the migration job.
    * *   The `Frequency` and `MaxNumberOfImageToKeep` parameters can be modified only before the migration job is executed or when the migration job is in the `Waiting` state.
    * *   Other parameters can be modified only before the migration job is executed.
    *
    * @param request ModifyReplicationJobAttributeRequest
    * @return ModifyReplicationJobAttributeResponse
   */
  async modifyReplicationJobAttribute(request: ModifyReplicationJobAttributeRequest): Promise<ModifyReplicationJobAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyReplicationJobAttributeWithOptions(request, runtime);
  }

  /**
    * ## Usage notes
    * You can call this operation regardless of the status of the migration source.
    *
    * @param request ModifySourceServerAttributeRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ModifySourceServerAttributeResponse
   */
  async modifySourceServerAttributeWithOptions(request: ModifySourceServerAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ModifySourceServerAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.sourceId)) {
      query["SourceId"] = request.sourceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifySourceServerAttribute",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifySourceServerAttributeResponse>(await this.callApi(params, req, runtime), new ModifySourceServerAttributeResponse({}));
  }

  /**
    * ## Usage notes
    * You can call this operation regardless of the status of the migration source.
    *
    * @param request ModifySourceServerAttributeRequest
    * @return ModifySourceServerAttributeResponse
   */
  async modifySourceServerAttribute(request: ModifySourceServerAttributeRequest): Promise<ModifySourceServerAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySourceServerAttributeWithOptions(request, runtime);
  }

  /**
    * ## Usage notes
    * This operation can only be used to start the migration jobs that are in the Ready, Stopped, or InError state.
    *
    * @param request StartReplicationJobRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return StartReplicationJobResponse
   */
  async startReplicationJobWithOptions(request: StartReplicationJobRequest, runtime: $Util.RuntimeOptions): Promise<StartReplicationJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StartReplicationJob",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StartReplicationJobResponse>(await this.callApi(params, req, runtime), new StartReplicationJobResponse({}));
  }

  /**
    * ## Usage notes
    * This operation can only be used to start the migration jobs that are in the Ready, Stopped, or InError state.
    *
    * @param request StartReplicationJobRequest
    * @return StartReplicationJobResponse
   */
  async startReplicationJob(request: StartReplicationJobRequest): Promise<StartReplicationJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startReplicationJobWithOptions(request, runtime);
  }

  /**
    * ## Usage notes
    * You can call this operation to pause only a migration job whose primary status is Running and business status is Syncing.
    *
    * @param request StopReplicationJobRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return StopReplicationJobResponse
   */
  async stopReplicationJobWithOptions(request: StopReplicationJobRequest, runtime: $Util.RuntimeOptions): Promise<StopReplicationJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StopReplicationJob",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StopReplicationJobResponse>(await this.callApi(params, req, runtime), new StopReplicationJobResponse({}));
  }

  /**
    * ## Usage notes
    * You can call this operation to pause only a migration job whose primary status is Running and business status is Syncing.
    *
    * @param request StopReplicationJobRequest
    * @return StopReplicationJobResponse
   */
  async stopReplicationJob(request: StopReplicationJobRequest): Promise<StopReplicationJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopReplicationJobWithOptions(request, runtime);
  }

  /**
    * ## Usage notes
    * Up to 20 tags can be added to each SMC resource.
    * Before you add tags to an SMC resource, Alibaba Cloud checks the number of the tags that have been added to the resource. If the maximum number is reached, an error message is returned.
    *
    * @param request TagResourcesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return TagResourcesResponse
   */
  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<TagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
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
      version: "2019-06-01",
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
    * ## Usage notes
    * Up to 20 tags can be added to each SMC resource.
    * Before you add tags to an SMC resource, Alibaba Cloud checks the number of the tags that have been added to the resource. If the maximum number is reached, an error message is returned.
    *
    * @param request TagResourcesRequest
    * @return TagResourcesResponse
   */
  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
    * You can call this operation to remove tags that are added to one or more SMC resources and deletes the tags if the tags are no longer used.
    *
    * @param request UntagResourcesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return UntagResourcesResponse
   */
  async untagResourcesWithOptions(request: UntagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<UntagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.all)) {
      query["All"] = request.all;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
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
      version: "2019-06-01",
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
    * You can call this operation to remove tags that are added to one or more SMC resources and deletes the tags if the tags are no longer used.
    *
    * @param request UntagResourcesRequest
    * @return UntagResourcesResponse
   */
  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

}
