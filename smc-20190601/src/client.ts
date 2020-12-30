// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CreateReplicationJobRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  regionId?: string;
  clientToken?: string;
  name?: string;
  description?: string;
  sourceId?: string;
  targetType?: string;
  scheduledStartTime?: string;
  validTime?: string;
  imageName?: string;
  instanceId?: string;
  systemDiskSize?: number;
  vpcId?: string;
  vSwitchId?: string;
  replicationParameters?: string;
  netMode?: number;
  runOnce?: boolean;
  frequency?: number;
  maxNumberOfImageToKeep?: number;
  instanceType?: string;
  launchTemplateId?: string;
  launchTemplateVersion?: string;
  instanceRamRole?: string;
  containerNamespace?: string;
  containerRepository?: string;
  containerTag?: string;
  licenseType?: string;
  dataDisk?: CreateReplicationJobRequestDataDisk[];
  tag?: CreateReplicationJobRequestTag[];
  systemDiskPart?: CreateReplicationJobRequestSystemDiskPart[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      regionId: 'RegionId',
      clientToken: 'ClientToken',
      name: 'Name',
      description: 'Description',
      sourceId: 'SourceId',
      targetType: 'TargetType',
      scheduledStartTime: 'ScheduledStartTime',
      validTime: 'ValidTime',
      imageName: 'ImageName',
      instanceId: 'InstanceId',
      systemDiskSize: 'SystemDiskSize',
      vpcId: 'VpcId',
      vSwitchId: 'VSwitchId',
      replicationParameters: 'ReplicationParameters',
      netMode: 'NetMode',
      runOnce: 'RunOnce',
      frequency: 'Frequency',
      maxNumberOfImageToKeep: 'MaxNumberOfImageToKeep',
      instanceType: 'InstanceType',
      launchTemplateId: 'LaunchTemplateId',
      launchTemplateVersion: 'LaunchTemplateVersion',
      instanceRamRole: 'InstanceRamRole',
      containerNamespace: 'ContainerNamespace',
      containerRepository: 'ContainerRepository',
      containerTag: 'ContainerTag',
      licenseType: 'LicenseType',
      dataDisk: 'DataDisk',
      tag: 'Tag',
      systemDiskPart: 'SystemDiskPart',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      regionId: 'string',
      clientToken: 'string',
      name: 'string',
      description: 'string',
      sourceId: 'string',
      targetType: 'string',
      scheduledStartTime: 'string',
      validTime: 'string',
      imageName: 'string',
      instanceId: 'string',
      systemDiskSize: 'number',
      vpcId: 'string',
      vSwitchId: 'string',
      replicationParameters: 'string',
      netMode: 'number',
      runOnce: 'boolean',
      frequency: 'number',
      maxNumberOfImageToKeep: 'number',
      instanceType: 'string',
      launchTemplateId: 'string',
      launchTemplateVersion: 'string',
      instanceRamRole: 'string',
      containerNamespace: 'string',
      containerRepository: 'string',
      containerTag: 'string',
      licenseType: 'string',
      dataDisk: { 'type': 'array', 'itemType': CreateReplicationJobRequestDataDisk },
      tag: { 'type': 'array', 'itemType': CreateReplicationJobRequestTag },
      systemDiskPart: { 'type': 'array', 'itemType': CreateReplicationJobRequestSystemDiskPart },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateReplicationJobResponseBody extends $tea.Model {
  requestId?: string;
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateReplicationJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateReplicationJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateReplicationJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CutOverReplicationJobRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  jobId?: string;
  syncData?: boolean;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      jobId: 'JobId',
      syncData: 'SyncData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      jobId: 'string',
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
  body: CutOverReplicationJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CutOverReplicationJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteReplicationJobRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      jobId: 'string',
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
  body: DeleteReplicationJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteReplicationJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSourceServerRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  sourceId?: string;
  force?: boolean;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      sourceId: 'SourceId',
      force: 'Force',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      sourceId: 'string',
      force: 'boolean',
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
  body: DeleteSourceServerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteSourceServerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReplicationJobsRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  name?: string;
  regionId?: string;
  status?: string;
  businessStatus?: string;
  pageNumber?: number;
  pageSize?: number;
  sourceId?: string[];
  jobId?: string[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      name: 'Name',
      regionId: 'RegionId',
      status: 'Status',
      businessStatus: 'BusinessStatus',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sourceId: 'SourceId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      name: 'string',
      regionId: 'string',
      status: 'string',
      businessStatus: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      sourceId: { 'type': 'array', 'itemType': 'string' },
      jobId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReplicationJobsResponseBody extends $tea.Model {
  totalCount?: number;
  replicationJobs?: DescribeReplicationJobsResponseBodyReplicationJobs;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      replicationJobs: 'ReplicationJobs',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      replicationJobs: DescribeReplicationJobsResponseBodyReplicationJobs,
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReplicationJobsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeReplicationJobsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeReplicationJobsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSourceServersRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  jobId?: string;
  state?: string;
  name?: string;
  pageNumber?: number;
  pageSize?: number;
  sourceId?: string[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      jobId: 'JobId',
      state: 'State',
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sourceId: 'SourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      jobId: 'string',
      state: 'string',
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      sourceId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSourceServersResponseBody extends $tea.Model {
  sourceServers?: DescribeSourceServersResponseBodySourceServers;
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      sourceServers: 'SourceServers',
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceServers: DescribeSourceServersResponseBodySourceServers,
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSourceServersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSourceServersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSourceServersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceType?: string;
  nextToken?: string;
  resourceId?: string[];
  tag?: ListTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceType: 'ResourceType',
      nextToken: 'NextToken',
      resourceId: 'ResourceId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceType: 'string',
      nextToken: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
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

export class ModifyReplicationJobAttributeRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  jobId?: string;
  name?: string;
  description?: string;
  targetType?: string;
  scheduledStartTime?: string;
  imageName?: string;
  instanceId?: string;
  systemDiskSize?: number;
  frequency?: number;
  maxNumberOfImageToKeep?: number;
  instanceType?: string;
  launchTemplateId?: string;
  launchTemplateVersion?: string;
  instanceRamRole?: string;
  containerNamespace?: string;
  containerRepository?: string;
  containerTag?: string;
  validTime?: string;
  systemDiskPart?: ModifyReplicationJobAttributeRequestSystemDiskPart[];
  dataDisk?: ModifyReplicationJobAttributeRequestDataDisk[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      jobId: 'JobId',
      name: 'Name',
      description: 'Description',
      targetType: 'TargetType',
      scheduledStartTime: 'ScheduledStartTime',
      imageName: 'ImageName',
      instanceId: 'InstanceId',
      systemDiskSize: 'SystemDiskSize',
      frequency: 'Frequency',
      maxNumberOfImageToKeep: 'MaxNumberOfImageToKeep',
      instanceType: 'InstanceType',
      launchTemplateId: 'LaunchTemplateId',
      launchTemplateVersion: 'LaunchTemplateVersion',
      instanceRamRole: 'InstanceRamRole',
      containerNamespace: 'ContainerNamespace',
      containerRepository: 'ContainerRepository',
      containerTag: 'ContainerTag',
      validTime: 'ValidTime',
      systemDiskPart: 'SystemDiskPart',
      dataDisk: 'DataDisk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      jobId: 'string',
      name: 'string',
      description: 'string',
      targetType: 'string',
      scheduledStartTime: 'string',
      imageName: 'string',
      instanceId: 'string',
      systemDiskSize: 'number',
      frequency: 'number',
      maxNumberOfImageToKeep: 'number',
      instanceType: 'string',
      launchTemplateId: 'string',
      launchTemplateVersion: 'string',
      instanceRamRole: 'string',
      containerNamespace: 'string',
      containerRepository: 'string',
      containerTag: 'string',
      validTime: 'string',
      systemDiskPart: { 'type': 'array', 'itemType': ModifyReplicationJobAttributeRequestSystemDiskPart },
      dataDisk: { 'type': 'array', 'itemType': ModifyReplicationJobAttributeRequestDataDisk },
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
  body: ModifyReplicationJobAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyReplicationJobAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySourceServerAttributeRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  sourceId?: string;
  name?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      sourceId: 'SourceId',
      name: 'Name',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      sourceId: 'string',
      name: 'string',
      description: 'string',
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
  body: ModifySourceServerAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifySourceServerAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartReplicationJobRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      jobId: 'string',
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
  body: StartReplicationJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StartReplicationJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopReplicationJobRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      jobId: 'string',
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
  body: StopReplicationJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StopReplicationJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceType?: string;
  resourceId?: string[];
  tag?: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceType: 'ResourceType',
      resourceId: 'ResourceId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceType: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
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
  body: TagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: TagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceType?: string;
  all?: boolean;
  resourceId?: string[];
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceType: 'ResourceType',
      all: 'All',
      resourceId: 'ResourceId',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceType: 'string',
      all: 'boolean',
      resourceId: { 'type': 'array', 'itemType': 'string' },
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
  body: UntagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UntagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateReplicationJobRequestDataDiskPart extends $tea.Model {
  sizeBytes?: number;
  block?: boolean;
  device?: string;
  static names(): { [key: string]: string } {
    return {
      sizeBytes: 'SizeBytes',
      block: 'Block',
      device: 'Device',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sizeBytes: 'number',
      block: 'boolean',
      device: 'string',
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

export class CreateReplicationJobRequestSystemDiskPart extends $tea.Model {
  sizeBytes?: number;
  block?: boolean;
  device?: string;
  static names(): { [key: string]: string } {
    return {
      sizeBytes: 'SizeBytes',
      block: 'Block',
      device: 'Device',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sizeBytes: 'number',
      block: 'boolean',
      device: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReplicationJobsResponseBodyReplicationJobsReplicationJobDataDisksDataDiskPartsPart extends $tea.Model {
  sizeBytes?: number;
  block?: boolean;
  device?: string;
  static names(): { [key: string]: string } {
    return {
      sizeBytes: 'SizeBytes',
      block: 'Block',
      device: 'Device',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sizeBytes: 'number',
      block: 'boolean',
      device: 'string',
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
  size?: number;
  parts?: DescribeReplicationJobsResponseBodyReplicationJobsReplicationJobDataDisksDataDiskParts;
  static names(): { [key: string]: string } {
    return {
      index: 'Index',
      size: 'Size',
      parts: 'Parts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'number',
      size: 'number',
      parts: DescribeReplicationJobsResponseBodyReplicationJobsReplicationJobDataDisksDataDiskParts,
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

export class DescribeReplicationJobsResponseBodyReplicationJobsReplicationJobSystemDiskPartsSystemDiskPart extends $tea.Model {
  sizeBytes?: number;
  block?: boolean;
  device?: string;
  static names(): { [key: string]: string } {
    return {
      sizeBytes: 'SizeBytes',
      block: 'Block',
      device: 'Device',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sizeBytes: 'number',
      block: 'boolean',
      device: 'string',
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

export class DescribeReplicationJobsResponseBodyReplicationJobsReplicationJobReplicationJobRunsReplicationJobRun extends $tea.Model {
  endTime?: string;
  type?: string;
  startTime?: string;
  imageId?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      type: 'Type',
      startTime: 'StartTime',
      imageId: 'ImageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      type: 'string',
      startTime: 'string',
      imageId: 'string',
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

export class DescribeReplicationJobsResponseBodyReplicationJobsReplicationJob extends $tea.Model {
  frequency?: number;
  vpcId?: string;
  creationTime?: string;
  status?: string;
  scheduledStartTime?: string;
  maxNumberOfImageToKeep?: number;
  containerNamespace?: string;
  dataDisks?: DescribeReplicationJobsResponseBodyReplicationJobsReplicationJobDataDisks;
  statusInfo?: string;
  instanceRamRole?: string;
  systemDiskSize?: number;
  description?: string;
  replicationParameters?: string;
  errorCode?: string;
  validTime?: string;
  netMode?: number;
  containerTag?: string;
  licenseType?: string;
  name?: string;
  imageId?: string;
  progress?: number;
  runOnce?: boolean;
  launchTemplateId?: string;
  containerRepository?: string;
  instanceId?: string;
  systemDiskParts?: DescribeReplicationJobsResponseBodyReplicationJobsReplicationJobSystemDiskParts;
  instanceType?: string;
  sourceId?: string;
  launchTemplateVersion?: string;
  regionId?: string;
  transitionInstanceId?: string;
  endTime?: string;
  startTime?: string;
  vSwitchId?: string;
  jobId?: string;
  imageName?: string;
  businessStatus?: string;
  replicationJobRuns?: DescribeReplicationJobsResponseBodyReplicationJobsReplicationJobReplicationJobRuns;
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      frequency: 'Frequency',
      vpcId: 'VpcId',
      creationTime: 'CreationTime',
      status: 'Status',
      scheduledStartTime: 'ScheduledStartTime',
      maxNumberOfImageToKeep: 'MaxNumberOfImageToKeep',
      containerNamespace: 'ContainerNamespace',
      dataDisks: 'DataDisks',
      statusInfo: 'StatusInfo',
      instanceRamRole: 'InstanceRamRole',
      systemDiskSize: 'SystemDiskSize',
      description: 'Description',
      replicationParameters: 'ReplicationParameters',
      errorCode: 'ErrorCode',
      validTime: 'ValidTime',
      netMode: 'NetMode',
      containerTag: 'ContainerTag',
      licenseType: 'LicenseType',
      name: 'Name',
      imageId: 'ImageId',
      progress: 'Progress',
      runOnce: 'RunOnce',
      launchTemplateId: 'LaunchTemplateId',
      containerRepository: 'ContainerRepository',
      instanceId: 'InstanceId',
      systemDiskParts: 'SystemDiskParts',
      instanceType: 'InstanceType',
      sourceId: 'SourceId',
      launchTemplateVersion: 'LaunchTemplateVersion',
      regionId: 'RegionId',
      transitionInstanceId: 'TransitionInstanceId',
      endTime: 'EndTime',
      startTime: 'StartTime',
      vSwitchId: 'VSwitchId',
      jobId: 'JobId',
      imageName: 'ImageName',
      businessStatus: 'BusinessStatus',
      replicationJobRuns: 'ReplicationJobRuns',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      frequency: 'number',
      vpcId: 'string',
      creationTime: 'string',
      status: 'string',
      scheduledStartTime: 'string',
      maxNumberOfImageToKeep: 'number',
      containerNamespace: 'string',
      dataDisks: DescribeReplicationJobsResponseBodyReplicationJobsReplicationJobDataDisks,
      statusInfo: 'string',
      instanceRamRole: 'string',
      systemDiskSize: 'number',
      description: 'string',
      replicationParameters: 'string',
      errorCode: 'string',
      validTime: 'string',
      netMode: 'number',
      containerTag: 'string',
      licenseType: 'string',
      name: 'string',
      imageId: 'string',
      progress: 'number',
      runOnce: 'boolean',
      launchTemplateId: 'string',
      containerRepository: 'string',
      instanceId: 'string',
      systemDiskParts: DescribeReplicationJobsResponseBodyReplicationJobsReplicationJobSystemDiskParts,
      instanceType: 'string',
      sourceId: 'string',
      launchTemplateVersion: 'string',
      regionId: 'string',
      transitionInstanceId: 'string',
      endTime: 'string',
      startTime: 'string',
      vSwitchId: 'string',
      jobId: 'string',
      imageName: 'string',
      businessStatus: 'string',
      replicationJobRuns: DescribeReplicationJobsResponseBodyReplicationJobsReplicationJobReplicationJobRuns,
      targetType: 'string',
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

export class DescribeSourceServersResponseBodySourceServersSourceServerDataDisksDataDiskPartsPart extends $tea.Model {
  canBlock?: boolean;
  sizeBytes?: number;
  need?: boolean;
  device?: string;
  path?: string;
  static names(): { [key: string]: string } {
    return {
      canBlock: 'CanBlock',
      sizeBytes: 'SizeBytes',
      need: 'Need',
      device: 'Device',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canBlock: 'boolean',
      sizeBytes: 'number',
      need: 'boolean',
      device: 'string',
      path: 'string',
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
  size?: number;
  parts?: DescribeSourceServersResponseBodySourceServersSourceServerDataDisksDataDiskParts;
  path?: string;
  static names(): { [key: string]: string } {
    return {
      index: 'Index',
      size: 'Size',
      parts: 'Parts',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'number',
      size: 'number',
      parts: DescribeSourceServersResponseBodySourceServersSourceServerDataDisksDataDiskParts,
      path: 'string',
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
  sizeBytes?: number;
  need?: boolean;
  device?: string;
  path?: string;
  static names(): { [key: string]: string } {
    return {
      canBlock: 'CanBlock',
      sizeBytes: 'SizeBytes',
      need: 'Need',
      device: 'Device',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canBlock: 'boolean',
      sizeBytes: 'number',
      need: 'boolean',
      device: 'string',
      path: 'string',
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

export class DescribeSourceServersResponseBodySourceServersSourceServer extends $tea.Model {
  creationTime?: string;
  heartbeatRate?: number;
  state?: string;
  dataDisks?: DescribeSourceServersResponseBodySourceServersSourceServerDataDisks;
  systemDiskParts?: DescribeSourceServersResponseBodySourceServersSourceServerSystemDiskParts;
  kernelLevel?: number;
  sourceId?: string;
  agentVersion?: string;
  statusInfo?: string;
  systemDiskSize?: number;
  description?: string;
  errorCode?: string;
  jobId?: string;
  platform?: string;
  replicationDriver?: string;
  name?: string;
  systemInfo?: string;
  architecture?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      heartbeatRate: 'HeartbeatRate',
      state: 'State',
      dataDisks: 'DataDisks',
      systemDiskParts: 'SystemDiskParts',
      kernelLevel: 'KernelLevel',
      sourceId: 'SourceId',
      agentVersion: 'AgentVersion',
      statusInfo: 'StatusInfo',
      systemDiskSize: 'SystemDiskSize',
      description: 'Description',
      errorCode: 'ErrorCode',
      jobId: 'JobId',
      platform: 'Platform',
      replicationDriver: 'ReplicationDriver',
      name: 'Name',
      systemInfo: 'SystemInfo',
      architecture: 'Architecture',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      heartbeatRate: 'number',
      state: 'string',
      dataDisks: DescribeSourceServersResponseBodySourceServersSourceServerDataDisks,
      systemDiskParts: DescribeSourceServersResponseBodySourceServersSourceServerSystemDiskParts,
      kernelLevel: 'number',
      sourceId: 'string',
      agentVersion: 'string',
      statusInfo: 'string',
      systemDiskSize: 'number',
      description: 'string',
      errorCode: 'string',
      jobId: 'string',
      platform: 'string',
      replicationDriver: 'string',
      name: 'string',
      systemInfo: 'string',
      architecture: 'string',
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
  resourceType?: string;
  tagValue?: string;
  resourceId?: string;
  tagKey?: string;
  static names(): { [key: string]: string } {
    return {
      resourceType: 'ResourceType',
      tagValue: 'TagValue',
      resourceId: 'ResourceId',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceType: 'string',
      tagValue: 'string',
      resourceId: 'string',
      tagKey: 'string',
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

export class ModifyReplicationJobAttributeRequestSystemDiskPart extends $tea.Model {
  sizeBytes?: number;
  block?: boolean;
  device?: string;
  static names(): { [key: string]: string } {
    return {
      sizeBytes: 'SizeBytes',
      block: 'Block',
      device: 'Device',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sizeBytes: 'number',
      block: 'boolean',
      device: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyReplicationJobAttributeRequestDataDiskPart extends $tea.Model {
  sizeBytes?: number;
  block?: boolean;
  device?: string;
  static names(): { [key: string]: string } {
    return {
      sizeBytes: 'SizeBytes',
      block: 'Block',
      device: 'Device',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sizeBytes: 'number',
      block: 'boolean',
      device: 'string',
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

  async createReplicationJobWithOptions(request: CreateReplicationJobRequest, runtime: $Util.RuntimeOptions): Promise<CreateReplicationJobResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateReplicationJobResponse>(await this.doRPCRequest("CreateReplicationJob", "2019-06-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateReplicationJobResponse({}));
  }

  async createReplicationJob(request: CreateReplicationJobRequest): Promise<CreateReplicationJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createReplicationJobWithOptions(request, runtime);
  }

  async cutOverReplicationJobWithOptions(request: CutOverReplicationJobRequest, runtime: $Util.RuntimeOptions): Promise<CutOverReplicationJobResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CutOverReplicationJobResponse>(await this.doRPCRequest("CutOverReplicationJob", "2019-06-01", "HTTPS", "POST", "AK", "json", req, runtime), new CutOverReplicationJobResponse({}));
  }

  async cutOverReplicationJob(request: CutOverReplicationJobRequest): Promise<CutOverReplicationJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cutOverReplicationJobWithOptions(request, runtime);
  }

  async deleteReplicationJobWithOptions(request: DeleteReplicationJobRequest, runtime: $Util.RuntimeOptions): Promise<DeleteReplicationJobResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteReplicationJobResponse>(await this.doRPCRequest("DeleteReplicationJob", "2019-06-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteReplicationJobResponse({}));
  }

  async deleteReplicationJob(request: DeleteReplicationJobRequest): Promise<DeleteReplicationJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteReplicationJobWithOptions(request, runtime);
  }

  async deleteSourceServerWithOptions(request: DeleteSourceServerRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSourceServerResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteSourceServerResponse>(await this.doRPCRequest("DeleteSourceServer", "2019-06-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteSourceServerResponse({}));
  }

  async deleteSourceServer(request: DeleteSourceServerRequest): Promise<DeleteSourceServerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSourceServerWithOptions(request, runtime);
  }

  async describeReplicationJobsWithOptions(request: DescribeReplicationJobsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeReplicationJobsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeReplicationJobsResponse>(await this.doRPCRequest("DescribeReplicationJobs", "2019-06-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeReplicationJobsResponse({}));
  }

  async describeReplicationJobs(request: DescribeReplicationJobsRequest): Promise<DescribeReplicationJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeReplicationJobsWithOptions(request, runtime);
  }

  async describeSourceServersWithOptions(request: DescribeSourceServersRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSourceServersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSourceServersResponse>(await this.doRPCRequest("DescribeSourceServers", "2019-06-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSourceServersResponse({}));
  }

  async describeSourceServers(request: DescribeSourceServersRequest): Promise<DescribeSourceServersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSourceServersWithOptions(request, runtime);
  }

  async listTagResourcesWithOptions(request: ListTagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListTagResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListTagResourcesResponse>(await this.doRPCRequest("ListTagResources", "2019-06-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListTagResourcesResponse({}));
  }

  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  async modifyReplicationJobAttributeWithOptions(request: ModifyReplicationJobAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyReplicationJobAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyReplicationJobAttributeResponse>(await this.doRPCRequest("ModifyReplicationJobAttribute", "2019-06-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyReplicationJobAttributeResponse({}));
  }

  async modifyReplicationJobAttribute(request: ModifyReplicationJobAttributeRequest): Promise<ModifyReplicationJobAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyReplicationJobAttributeWithOptions(request, runtime);
  }

  async modifySourceServerAttributeWithOptions(request: ModifySourceServerAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ModifySourceServerAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifySourceServerAttributeResponse>(await this.doRPCRequest("ModifySourceServerAttribute", "2019-06-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifySourceServerAttributeResponse({}));
  }

  async modifySourceServerAttribute(request: ModifySourceServerAttributeRequest): Promise<ModifySourceServerAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySourceServerAttributeWithOptions(request, runtime);
  }

  async startReplicationJobWithOptions(request: StartReplicationJobRequest, runtime: $Util.RuntimeOptions): Promise<StartReplicationJobResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StartReplicationJobResponse>(await this.doRPCRequest("StartReplicationJob", "2019-06-01", "HTTPS", "POST", "AK", "json", req, runtime), new StartReplicationJobResponse({}));
  }

  async startReplicationJob(request: StartReplicationJobRequest): Promise<StartReplicationJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startReplicationJobWithOptions(request, runtime);
  }

  async stopReplicationJobWithOptions(request: StopReplicationJobRequest, runtime: $Util.RuntimeOptions): Promise<StopReplicationJobResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StopReplicationJobResponse>(await this.doRPCRequest("StopReplicationJob", "2019-06-01", "HTTPS", "POST", "AK", "json", req, runtime), new StopReplicationJobResponse({}));
  }

  async stopReplicationJob(request: StopReplicationJobRequest): Promise<StopReplicationJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopReplicationJobWithOptions(request, runtime);
  }

  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<TagResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<TagResourcesResponse>(await this.doRPCRequest("TagResources", "2019-06-01", "HTTPS", "POST", "AK", "json", req, runtime), new TagResourcesResponse({}));
  }

  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  async untagResourcesWithOptions(request: UntagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<UntagResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UntagResourcesResponse>(await this.doRPCRequest("UntagResources", "2019-06-01", "HTTPS", "POST", "AK", "json", req, runtime), new UntagResourcesResponse({}));
  }

  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

}
