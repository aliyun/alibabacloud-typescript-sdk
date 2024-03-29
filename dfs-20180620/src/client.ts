// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AttachVscMountPointRequest extends $tea.Model {
  description?: string;
  fileSystemId?: string;
  inputRegionId?: string;
  instanceIds?: { [key: string]: any };
  mountPointId?: string;
  vscIds?: string[];
  vscType?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      fileSystemId: 'FileSystemId',
      inputRegionId: 'InputRegionId',
      instanceIds: 'InstanceIds',
      mountPointId: 'MountPointId',
      vscIds: 'VscIds',
      vscType: 'VscType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      fileSystemId: 'string',
      inputRegionId: 'string',
      instanceIds: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      mountPointId: 'string',
      vscIds: { 'type': 'array', 'itemType': 'string' },
      vscType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachVscMountPointShrinkRequest extends $tea.Model {
  description?: string;
  fileSystemId?: string;
  inputRegionId?: string;
  instanceIdsShrink?: string;
  mountPointId?: string;
  vscIdsShrink?: string;
  vscType?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      fileSystemId: 'FileSystemId',
      inputRegionId: 'InputRegionId',
      instanceIdsShrink: 'InstanceIds',
      mountPointId: 'MountPointId',
      vscIdsShrink: 'VscIds',
      vscType: 'VscType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      fileSystemId: 'string',
      inputRegionId: 'string',
      instanceIdsShrink: 'string',
      mountPointId: 'string',
      vscIdsShrink: 'string',
      vscType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachVscMountPointResponseBody extends $tea.Model {
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

export class AttachVscMountPointResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AttachVscMountPointResponseBody;
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
      body: AttachVscMountPointResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindVscMountPointAliasRequest extends $tea.Model {
  aliasPrefix?: string;
  fileSystemId?: string;
  inputRegionId?: string;
  mountPointId?: string;
  static names(): { [key: string]: string } {
    return {
      aliasPrefix: 'AliasPrefix',
      fileSystemId: 'FileSystemId',
      inputRegionId: 'InputRegionId',
      mountPointId: 'MountPointId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasPrefix: 'string',
      fileSystemId: 'string',
      inputRegionId: 'string',
      mountPointId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindVscMountPointAliasResponseBody extends $tea.Model {
  mountPointAlias?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      mountPointAlias: 'MountPointAlias',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountPointAlias: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindVscMountPointAliasResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BindVscMountPointAliasResponseBody;
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
      body: BindVscMountPointAliasResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAccessGroupRequest extends $tea.Model {
  accessGroupName?: string;
  description?: string;
  inputRegionId?: string;
  networkType?: string;
  static names(): { [key: string]: string } {
    return {
      accessGroupName: 'AccessGroupName',
      description: 'Description',
      inputRegionId: 'InputRegionId',
      networkType: 'NetworkType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessGroupName: 'string',
      description: 'string',
      inputRegionId: 'string',
      networkType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAccessGroupResponseBody extends $tea.Model {
  accessGroupId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessGroupId: 'AccessGroupId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessGroupId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAccessGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAccessGroupResponseBody;
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
      body: CreateAccessGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAccessRuleRequest extends $tea.Model {
  accessGroupId?: string;
  description?: string;
  inputRegionId?: string;
  networkSegment?: string;
  priority?: number;
  RWAccessType?: string;
  static names(): { [key: string]: string } {
    return {
      accessGroupId: 'AccessGroupId',
      description: 'Description',
      inputRegionId: 'InputRegionId',
      networkSegment: 'NetworkSegment',
      priority: 'Priority',
      RWAccessType: 'RWAccessType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessGroupId: 'string',
      description: 'string',
      inputRegionId: 'string',
      networkSegment: 'string',
      priority: 'number',
      RWAccessType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAccessRuleResponseBody extends $tea.Model {
  accessRuleId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessRuleId: 'AccessRuleId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessRuleId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAccessRuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAccessRuleResponseBody;
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
      body: CreateAccessRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFileSystemRequest extends $tea.Model {
  dataRedundancyType?: string;
  description?: string;
  fileSystemName?: string;
  inputRegionId?: string;
  partitionNumber?: number;
  protocolType?: string;
  provisionedThroughputInMiBps?: number;
  spaceCapacity?: number;
  storageSetName?: string;
  storageType?: string;
  throughputMode?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      dataRedundancyType: 'DataRedundancyType',
      description: 'Description',
      fileSystemName: 'FileSystemName',
      inputRegionId: 'InputRegionId',
      partitionNumber: 'PartitionNumber',
      protocolType: 'ProtocolType',
      provisionedThroughputInMiBps: 'ProvisionedThroughputInMiBps',
      spaceCapacity: 'SpaceCapacity',
      storageSetName: 'StorageSetName',
      storageType: 'StorageType',
      throughputMode: 'ThroughputMode',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataRedundancyType: 'string',
      description: 'string',
      fileSystemName: 'string',
      inputRegionId: 'string',
      partitionNumber: 'number',
      protocolType: 'string',
      provisionedThroughputInMiBps: 'number',
      spaceCapacity: 'number',
      storageSetName: 'string',
      storageType: 'string',
      throughputMode: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFileSystemResponseBody extends $tea.Model {
  fileSystemId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFileSystemResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateFileSystemResponseBody;
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
      body: CreateFileSystemResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMountPointRequest extends $tea.Model {
  accessGroupId?: string;
  description?: string;
  fileSystemId?: string;
  inputRegionId?: string;
  networkType?: string;
  vSwitchId?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      accessGroupId: 'AccessGroupId',
      description: 'Description',
      fileSystemId: 'FileSystemId',
      inputRegionId: 'InputRegionId',
      networkType: 'NetworkType',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessGroupId: 'string',
      description: 'string',
      fileSystemId: 'string',
      inputRegionId: 'string',
      networkType: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMountPointResponseBody extends $tea.Model {
  mountPointId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      mountPointId: 'MountPointId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountPointId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMountPointResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateMountPointResponseBody;
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
      body: CreateMountPointResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserGroupsMappingRequest extends $tea.Model {
  fileSystemId?: string;
  groupNames?: string[];
  inputRegionId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      groupNames: 'GroupNames',
      inputRegionId: 'InputRegionId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      groupNames: { 'type': 'array', 'itemType': 'string' },
      inputRegionId: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserGroupsMappingShrinkRequest extends $tea.Model {
  fileSystemId?: string;
  groupNamesShrink?: string;
  inputRegionId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      groupNamesShrink: 'GroupNames',
      inputRegionId: 'InputRegionId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      groupNamesShrink: 'string',
      inputRegionId: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserGroupsMappingResponseBody extends $tea.Model {
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

export class CreateUserGroupsMappingResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateUserGroupsMappingResponseBody;
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
      body: CreateUserGroupsMappingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVscMountPointRequest extends $tea.Model {
  description?: string;
  fileSystemId?: string;
  inputRegionId?: string;
  instanceIds?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      fileSystemId: 'FileSystemId',
      inputRegionId: 'InputRegionId',
      instanceIds: 'InstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      fileSystemId: 'string',
      inputRegionId: 'string',
      instanceIds: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVscMountPointShrinkRequest extends $tea.Model {
  description?: string;
  fileSystemId?: string;
  inputRegionId?: string;
  instanceIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      fileSystemId: 'FileSystemId',
      inputRegionId: 'InputRegionId',
      instanceIdsShrink: 'InstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      fileSystemId: 'string',
      inputRegionId: 'string',
      instanceIdsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVscMountPointResponseBody extends $tea.Model {
  mountPointId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      mountPointId: 'MountPointId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountPointId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVscMountPointResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateVscMountPointResponseBody;
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
      body: CreateVscMountPointResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAccessGroupRequest extends $tea.Model {
  accessGroupId?: string;
  inputRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      accessGroupId: 'AccessGroupId',
      inputRegionId: 'InputRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessGroupId: 'string',
      inputRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAccessGroupResponseBody extends $tea.Model {
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

export class DeleteAccessGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteAccessGroupResponseBody;
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
      body: DeleteAccessGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAccessRuleRequest extends $tea.Model {
  accessGroupId?: string;
  accessRuleId?: string;
  inputRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      accessGroupId: 'AccessGroupId',
      accessRuleId: 'AccessRuleId',
      inputRegionId: 'InputRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessGroupId: 'string',
      accessRuleId: 'string',
      inputRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAccessRuleResponseBody extends $tea.Model {
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

export class DeleteAccessRuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteAccessRuleResponseBody;
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
      body: DeleteAccessRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFileSystemRequest extends $tea.Model {
  fileSystemId?: string;
  inputRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      inputRegionId: 'InputRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      inputRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFileSystemResponseBody extends $tea.Model {
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

export class DeleteFileSystemResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteFileSystemResponseBody;
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
      body: DeleteFileSystemResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMountPointRequest extends $tea.Model {
  fileSystemId?: string;
  inputRegionId?: string;
  mountPointId?: string;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      inputRegionId: 'InputRegionId',
      mountPointId: 'MountPointId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      inputRegionId: 'string',
      mountPointId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMountPointResponseBody extends $tea.Model {
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

export class DeleteMountPointResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteMountPointResponseBody;
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
      body: DeleteMountPointResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserGroupsMappingRequest extends $tea.Model {
  fileSystemId?: string;
  groupNames?: { [key: string]: any };
  inputRegionId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      groupNames: 'GroupNames',
      inputRegionId: 'InputRegionId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      groupNames: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      inputRegionId: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserGroupsMappingShrinkRequest extends $tea.Model {
  fileSystemId?: string;
  groupNamesShrink?: string;
  inputRegionId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      groupNamesShrink: 'GroupNames',
      inputRegionId: 'InputRegionId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      groupNamesShrink: 'string',
      inputRegionId: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserGroupsMappingResponseBody extends $tea.Model {
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

export class DeleteUserGroupsMappingResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteUserGroupsMappingResponseBody;
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
      body: DeleteUserGroupsMappingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVscMountPointRequest extends $tea.Model {
  fileSystemId?: string;
  inputRegionId?: string;
  mountPointId?: string;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      inputRegionId: 'InputRegionId',
      mountPointId: 'MountPointId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      inputRegionId: 'string',
      mountPointId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVscMountPointResponseBody extends $tea.Model {
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

export class DeleteVscMountPointResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteVscMountPointResponseBody;
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
      body: DeleteVscMountPointResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsRequest extends $tea.Model {
  acceptLanguage?: string;
  inputRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      inputRegionId: 'InputRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      inputRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBody extends $tea.Model {
  regions?: DescribeRegionsResponseBodyRegions;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      regions: 'Regions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regions: DescribeRegionsResponseBodyRegions,
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

export class DescribeVscMountPointsRequest extends $tea.Model {
  fileSystemId?: string;
  inputRegionId?: string;
  instanceId?: string;
  mountPointId?: string;
  status?: string;
  vscId?: string;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      inputRegionId: 'InputRegionId',
      instanceId: 'InstanceId',
      mountPointId: 'MountPointId',
      status: 'Status',
      vscId: 'VscId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      inputRegionId: 'string',
      instanceId: 'string',
      mountPointId: 'string',
      status: 'string',
      vscId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVscMountPointsResponseBody extends $tea.Model {
  mountPoints?: DescribeVscMountPointsResponseBodyMountPoints[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      mountPoints: 'MountPoints',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountPoints: { 'type': 'array', 'itemType': DescribeVscMountPointsResponseBodyMountPoints },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVscMountPointsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeVscMountPointsResponseBody;
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
      body: DescribeVscMountPointsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachVscMountPointRequest extends $tea.Model {
  description?: string;
  fileSystemId?: string;
  inputRegionId?: string;
  instanceIds?: { [key: string]: any };
  mountPointId?: string;
  vscIds?: string[];
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      fileSystemId: 'FileSystemId',
      inputRegionId: 'InputRegionId',
      instanceIds: 'InstanceIds',
      mountPointId: 'MountPointId',
      vscIds: 'VscIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      fileSystemId: 'string',
      inputRegionId: 'string',
      instanceIds: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      mountPointId: 'string',
      vscIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachVscMountPointShrinkRequest extends $tea.Model {
  description?: string;
  fileSystemId?: string;
  inputRegionId?: string;
  instanceIdsShrink?: string;
  mountPointId?: string;
  vscIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      fileSystemId: 'FileSystemId',
      inputRegionId: 'InputRegionId',
      instanceIdsShrink: 'InstanceIds',
      mountPointId: 'MountPointId',
      vscIdsShrink: 'VscIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      fileSystemId: 'string',
      inputRegionId: 'string',
      instanceIdsShrink: 'string',
      mountPointId: 'string',
      vscIdsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachVscMountPointResponseBody extends $tea.Model {
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

export class DetachVscMountPointResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DetachVscMountPointResponseBody;
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
      body: DetachVscMountPointResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccessGroupRequest extends $tea.Model {
  accessGroupId?: string;
  inputRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      accessGroupId: 'AccessGroupId',
      inputRegionId: 'InputRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessGroupId: 'string',
      inputRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccessGroupResponseBody extends $tea.Model {
  accessGroup?: GetAccessGroupResponseBodyAccessGroup;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessGroup: 'AccessGroup',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessGroup: GetAccessGroupResponseBodyAccessGroup,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccessGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAccessGroupResponseBody;
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
      body: GetAccessGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccessRuleRequest extends $tea.Model {
  accessGroupId?: string;
  accessRuleId?: string;
  inputRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      accessGroupId: 'AccessGroupId',
      accessRuleId: 'AccessRuleId',
      inputRegionId: 'InputRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessGroupId: 'string',
      accessRuleId: 'string',
      inputRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccessRuleResponseBody extends $tea.Model {
  accessRule?: GetAccessRuleResponseBodyAccessRule;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessRule: 'AccessRule',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessRule: GetAccessRuleResponseBodyAccessRule,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccessRuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAccessRuleResponseBody;
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
      body: GetAccessRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFileSystemRequest extends $tea.Model {
  fileSystemId?: string;
  inputRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      inputRegionId: 'InputRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      inputRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFileSystemResponseBody extends $tea.Model {
  fileSystem?: GetFileSystemResponseBodyFileSystem;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      fileSystem: 'FileSystem',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystem: GetFileSystemResponseBodyFileSystem,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFileSystemResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetFileSystemResponseBody;
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
      body: GetFileSystemResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMountPointRequest extends $tea.Model {
  fileSystemId?: string;
  inputRegionId?: string;
  mountPointId?: string;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      inputRegionId: 'InputRegionId',
      mountPointId: 'MountPointId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      inputRegionId: 'string',
      mountPointId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMountPointResponseBody extends $tea.Model {
  mountPoint?: GetMountPointResponseBodyMountPoint;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      mountPoint: 'MountPoint',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountPoint: GetMountPointResponseBodyMountPoint,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMountPointResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetMountPointResponseBody;
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
      body: GetMountPointResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegionRequest extends $tea.Model {
  inputRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      inputRegionId: 'InputRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegionResponseBody extends $tea.Model {
  availableZones?: GetRegionResponseBodyAvailableZones[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      availableZones: 'AvailableZones',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableZones: { 'type': 'array', 'itemType': GetRegionResponseBodyAvailableZones },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetRegionResponseBody;
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
      body: GetRegionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccessGroupsRequest extends $tea.Model {
  inputRegionId?: string;
  limit?: number;
  orderBy?: string;
  orderType?: string;
  startOffset?: number;
  static names(): { [key: string]: string } {
    return {
      inputRegionId: 'InputRegionId',
      limit: 'Limit',
      orderBy: 'OrderBy',
      orderType: 'OrderType',
      startOffset: 'StartOffset',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputRegionId: 'string',
      limit: 'number',
      orderBy: 'string',
      orderType: 'string',
      startOffset: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccessGroupsResponseBody extends $tea.Model {
  accessGroups?: ListAccessGroupsResponseBodyAccessGroups[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accessGroups: 'AccessGroups',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessGroups: { 'type': 'array', 'itemType': ListAccessGroupsResponseBodyAccessGroups },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccessGroupsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAccessGroupsResponseBody;
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
      body: ListAccessGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccessRulesRequest extends $tea.Model {
  accessGroupId?: string;
  inputRegionId?: string;
  limit?: number;
  orderBy?: string;
  orderType?: string;
  startOffset?: number;
  static names(): { [key: string]: string } {
    return {
      accessGroupId: 'AccessGroupId',
      inputRegionId: 'InputRegionId',
      limit: 'Limit',
      orderBy: 'OrderBy',
      orderType: 'OrderType',
      startOffset: 'StartOffset',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessGroupId: 'string',
      inputRegionId: 'string',
      limit: 'number',
      orderBy: 'string',
      orderType: 'string',
      startOffset: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccessRulesResponseBody extends $tea.Model {
  accessRules?: ListAccessRulesResponseBodyAccessRules[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accessRules: 'AccessRules',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessRules: { 'type': 'array', 'itemType': ListAccessRulesResponseBodyAccessRules },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccessRulesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAccessRulesResponseBody;
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
      body: ListAccessRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFileSystemsRequest extends $tea.Model {
  inputRegionId?: string;
  limit?: number;
  orderBy?: string;
  orderType?: string;
  startOffset?: number;
  static names(): { [key: string]: string } {
    return {
      inputRegionId: 'InputRegionId',
      limit: 'Limit',
      orderBy: 'OrderBy',
      orderType: 'OrderType',
      startOffset: 'StartOffset',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputRegionId: 'string',
      limit: 'number',
      orderBy: 'string',
      orderType: 'string',
      startOffset: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFileSystemsResponseBody extends $tea.Model {
  fileSystems?: ListFileSystemsResponseBodyFileSystems[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      fileSystems: 'FileSystems',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystems: { 'type': 'array', 'itemType': ListFileSystemsResponseBodyFileSystems },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFileSystemsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListFileSystemsResponseBody;
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
      body: ListFileSystemsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMountPointsRequest extends $tea.Model {
  fileSystemId?: string;
  inputRegionId?: string;
  limit?: number;
  orderBy?: string;
  orderType?: string;
  startOffset?: number;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      inputRegionId: 'InputRegionId',
      limit: 'Limit',
      orderBy: 'OrderBy',
      orderType: 'OrderType',
      startOffset: 'StartOffset',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      inputRegionId: 'string',
      limit: 'number',
      orderBy: 'string',
      orderType: 'string',
      startOffset: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMountPointsResponseBody extends $tea.Model {
  mountPoints?: ListMountPointsResponseBodyMountPoints[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      mountPoints: 'MountPoints',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountPoints: { 'type': 'array', 'itemType': ListMountPointsResponseBodyMountPoints },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMountPointsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListMountPointsResponseBody;
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
      body: ListMountPointsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserGroupsMappingsRequest extends $tea.Model {
  filesystemId?: string;
  inputRegionId?: string;
  limit?: number;
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      filesystemId: 'FilesystemId',
      inputRegionId: 'InputRegionId',
      limit: 'Limit',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filesystemId: 'string',
      inputRegionId: 'string',
      limit: 'number',
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserGroupsMappingsResponseBody extends $tea.Model {
  hasMore?: boolean;
  nextToken?: string;
  requestId?: string;
  userGroupsMappings?: ListUserGroupsMappingsResponseBodyUserGroupsMappings[];
  static names(): { [key: string]: string } {
    return {
      hasMore: 'HasMore',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      userGroupsMappings: 'UserGroupsMappings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasMore: 'boolean',
      nextToken: 'string',
      requestId: 'string',
      userGroupsMappings: { 'type': 'array', 'itemType': ListUserGroupsMappingsResponseBodyUserGroupsMappings },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserGroupsMappingsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListUserGroupsMappingsResponseBody;
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
      body: ListUserGroupsMappingsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAccessGroupRequest extends $tea.Model {
  accessGroupId?: string;
  accessGroupName?: string;
  description?: string;
  inputRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      accessGroupId: 'AccessGroupId',
      accessGroupName: 'AccessGroupName',
      description: 'Description',
      inputRegionId: 'InputRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessGroupId: 'string',
      accessGroupName: 'string',
      description: 'string',
      inputRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAccessGroupResponseBody extends $tea.Model {
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

export class ModifyAccessGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyAccessGroupResponseBody;
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
      body: ModifyAccessGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAccessRuleRequest extends $tea.Model {
  accessGroupId?: string;
  accessRuleId?: string;
  description?: string;
  inputRegionId?: string;
  priority?: number;
  RWAccessType?: string;
  static names(): { [key: string]: string } {
    return {
      accessGroupId: 'AccessGroupId',
      accessRuleId: 'AccessRuleId',
      description: 'Description',
      inputRegionId: 'InputRegionId',
      priority: 'Priority',
      RWAccessType: 'RWAccessType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessGroupId: 'string',
      accessRuleId: 'string',
      description: 'string',
      inputRegionId: 'string',
      priority: 'number',
      RWAccessType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAccessRuleResponseBody extends $tea.Model {
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

export class ModifyAccessRuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyAccessRuleResponseBody;
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
      body: ModifyAccessRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFileSystemRequest extends $tea.Model {
  description?: string;
  fileSystemId?: string;
  fileSystemName?: string;
  inputRegionId?: string;
  provisionedThroughputInMiBps?: number;
  spaceCapacity?: number;
  throughputMode?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      fileSystemId: 'FileSystemId',
      fileSystemName: 'FileSystemName',
      inputRegionId: 'InputRegionId',
      provisionedThroughputInMiBps: 'ProvisionedThroughputInMiBps',
      spaceCapacity: 'SpaceCapacity',
      throughputMode: 'ThroughputMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      fileSystemId: 'string',
      fileSystemName: 'string',
      inputRegionId: 'string',
      provisionedThroughputInMiBps: 'number',
      spaceCapacity: 'number',
      throughputMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFileSystemResponseBody extends $tea.Model {
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

export class ModifyFileSystemResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyFileSystemResponseBody;
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
      body: ModifyFileSystemResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMountPointRequest extends $tea.Model {
  accessGroupId?: string;
  description?: string;
  fileSystemId?: string;
  inputRegionId?: string;
  mountPointId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      accessGroupId: 'AccessGroupId',
      description: 'Description',
      fileSystemId: 'FileSystemId',
      inputRegionId: 'InputRegionId',
      mountPointId: 'MountPointId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessGroupId: 'string',
      description: 'string',
      fileSystemId: 'string',
      inputRegionId: 'string',
      mountPointId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMountPointResponseBody extends $tea.Model {
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

export class ModifyMountPointResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyMountPointResponseBody;
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
      body: ModifyMountPointResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegionsRegion extends $tea.Model {
  localName?: string;
  regionEndpoint?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      localName: 'LocalName',
      regionEndpoint: 'RegionEndpoint',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localName: 'string',
      regionEndpoint: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegions extends $tea.Model {
  region?: DescribeRegionsResponseBodyRegionsRegion[];
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyRegionsRegion },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVscMountPointsResponseBodyMountPointsInstancesVscs extends $tea.Model {
  vscId?: string;
  vscStatus?: string;
  vscType?: string;
  static names(): { [key: string]: string } {
    return {
      vscId: 'VscId',
      vscStatus: 'VscStatus',
      vscType: 'VscType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vscId: 'string',
      vscStatus: 'string',
      vscType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVscMountPointsResponseBodyMountPointsInstances extends $tea.Model {
  instanceId?: string;
  status?: string;
  vscs?: DescribeVscMountPointsResponseBodyMountPointsInstancesVscs[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      status: 'Status',
      vscs: 'Vscs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      status: 'string',
      vscs: { 'type': 'array', 'itemType': DescribeVscMountPointsResponseBodyMountPointsInstancesVscs },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVscMountPointsResponseBodyMountPoints extends $tea.Model {
  description?: string;
  instanceTotalCount?: number;
  instances?: DescribeVscMountPointsResponseBodyMountPointsInstances[];
  mountPointAlias?: string;
  mountPointId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      instanceTotalCount: 'InstanceTotalCount',
      instances: 'Instances',
      mountPointAlias: 'MountPointAlias',
      mountPointId: 'MountPointId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      instanceTotalCount: 'number',
      instances: { 'type': 'array', 'itemType': DescribeVscMountPointsResponseBodyMountPointsInstances },
      mountPointAlias: 'string',
      mountPointId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccessGroupResponseBodyAccessGroup extends $tea.Model {
  accessGroupId?: string;
  accessGroupName?: string;
  createTime?: string;
  description?: string;
  isDefault?: boolean;
  mountPointCount?: number;
  networkType?: string;
  regionId?: string;
  ruleCount?: number;
  static names(): { [key: string]: string } {
    return {
      accessGroupId: 'AccessGroupId',
      accessGroupName: 'AccessGroupName',
      createTime: 'CreateTime',
      description: 'Description',
      isDefault: 'IsDefault',
      mountPointCount: 'MountPointCount',
      networkType: 'NetworkType',
      regionId: 'RegionId',
      ruleCount: 'RuleCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessGroupId: 'string',
      accessGroupName: 'string',
      createTime: 'string',
      description: 'string',
      isDefault: 'boolean',
      mountPointCount: 'number',
      networkType: 'string',
      regionId: 'string',
      ruleCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccessRuleResponseBodyAccessRule extends $tea.Model {
  accessGroupId?: string;
  accessRuleId?: string;
  createTime?: string;
  description?: string;
  networkSegment?: string;
  priority?: number;
  RWAccessType?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      accessGroupId: 'AccessGroupId',
      accessRuleId: 'AccessRuleId',
      createTime: 'CreateTime',
      description: 'Description',
      networkSegment: 'NetworkSegment',
      priority: 'Priority',
      RWAccessType: 'RWAccessType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessGroupId: 'string',
      accessRuleId: 'string',
      createTime: 'string',
      description: 'string',
      networkSegment: 'string',
      priority: 'number',
      RWAccessType: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFileSystemResponseBodyFileSystem extends $tea.Model {
  createTime?: string;
  description?: string;
  fileSystemId?: string;
  fileSystemName?: string;
  meteringSpaceSize?: number;
  mountPointCount?: number;
  numberOfDirectories?: number;
  numberOfFiles?: number;
  protocolType?: string;
  provisionedThroughputInMiBps?: number;
  regionId?: string;
  spaceCapacity?: number;
  storagePackageId?: string;
  storageType?: string;
  throughputMode?: string;
  usedSpaceSize?: number;
  version?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      fileSystemId: 'FileSystemId',
      fileSystemName: 'FileSystemName',
      meteringSpaceSize: 'MeteringSpaceSize',
      mountPointCount: 'MountPointCount',
      numberOfDirectories: 'NumberOfDirectories',
      numberOfFiles: 'NumberOfFiles',
      protocolType: 'ProtocolType',
      provisionedThroughputInMiBps: 'ProvisionedThroughputInMiBps',
      regionId: 'RegionId',
      spaceCapacity: 'SpaceCapacity',
      storagePackageId: 'StoragePackageId',
      storageType: 'StorageType',
      throughputMode: 'ThroughputMode',
      usedSpaceSize: 'UsedSpaceSize',
      version: 'Version',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      fileSystemId: 'string',
      fileSystemName: 'string',
      meteringSpaceSize: 'number',
      mountPointCount: 'number',
      numberOfDirectories: 'number',
      numberOfFiles: 'number',
      protocolType: 'string',
      provisionedThroughputInMiBps: 'number',
      regionId: 'string',
      spaceCapacity: 'number',
      storagePackageId: 'string',
      storageType: 'string',
      throughputMode: 'string',
      usedSpaceSize: 'number',
      version: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMountPointResponseBodyMountPoint extends $tea.Model {
  accessGroupId?: string;
  createTime?: string;
  description?: string;
  fileSystemId?: string;
  mountPointDomain?: string;
  mountPointId?: string;
  networkType?: string;
  regionId?: string;
  status?: string;
  vSwitchId?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      accessGroupId: 'AccessGroupId',
      createTime: 'CreateTime',
      description: 'Description',
      fileSystemId: 'FileSystemId',
      mountPointDomain: 'MountPointDomain',
      mountPointId: 'MountPointId',
      networkType: 'NetworkType',
      regionId: 'RegionId',
      status: 'Status',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessGroupId: 'string',
      createTime: 'string',
      description: 'string',
      fileSystemId: 'string',
      mountPointDomain: 'string',
      mountPointId: 'string',
      networkType: 'string',
      regionId: 'string',
      status: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegionResponseBodyAvailableZonesOptions extends $tea.Model {
  protocolType?: string;
  storageType?: string;
  static names(): { [key: string]: string } {
    return {
      protocolType: 'ProtocolType',
      storageType: 'StorageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      protocolType: 'string',
      storageType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegionResponseBodyAvailableZones extends $tea.Model {
  options?: GetRegionResponseBodyAvailableZonesOptions[];
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      options: 'Options',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      options: { 'type': 'array', 'itemType': GetRegionResponseBodyAvailableZonesOptions },
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccessGroupsResponseBodyAccessGroups extends $tea.Model {
  accessGroupId?: string;
  accessGroupName?: string;
  createTime?: string;
  description?: string;
  isDefault?: boolean;
  mountPointCount?: number;
  networkType?: string;
  regionId?: string;
  ruleCount?: number;
  static names(): { [key: string]: string } {
    return {
      accessGroupId: 'AccessGroupId',
      accessGroupName: 'AccessGroupName',
      createTime: 'CreateTime',
      description: 'Description',
      isDefault: 'IsDefault',
      mountPointCount: 'MountPointCount',
      networkType: 'NetworkType',
      regionId: 'RegionId',
      ruleCount: 'RuleCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessGroupId: 'string',
      accessGroupName: 'string',
      createTime: 'string',
      description: 'string',
      isDefault: 'boolean',
      mountPointCount: 'number',
      networkType: 'string',
      regionId: 'string',
      ruleCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccessRulesResponseBodyAccessRules extends $tea.Model {
  accessGroupId?: string;
  accessRuleId?: string;
  createTime?: string;
  description?: string;
  networkSegment?: string;
  priority?: number;
  RWAccessType?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      accessGroupId: 'AccessGroupId',
      accessRuleId: 'AccessRuleId',
      createTime: 'CreateTime',
      description: 'Description',
      networkSegment: 'NetworkSegment',
      priority: 'Priority',
      RWAccessType: 'RWAccessType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessGroupId: 'string',
      accessRuleId: 'string',
      createTime: 'string',
      description: 'string',
      networkSegment: 'string',
      priority: 'number',
      RWAccessType: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFileSystemsResponseBodyFileSystems extends $tea.Model {
  createTime?: string;
  description?: string;
  fileSystemId?: string;
  fileSystemName?: string;
  meteringSpaceSize?: number;
  mountPointCount?: number;
  numberOfDirectories?: number;
  numberOfFiles?: number;
  protocolType?: string;
  provisionedThroughputInMiBps?: number;
  regionId?: string;
  spaceCapacity?: number;
  storagePackageId?: string;
  storageType?: string;
  throughputMode?: string;
  usedSpaceSize?: number;
  version?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      fileSystemId: 'FileSystemId',
      fileSystemName: 'FileSystemName',
      meteringSpaceSize: 'MeteringSpaceSize',
      mountPointCount: 'MountPointCount',
      numberOfDirectories: 'NumberOfDirectories',
      numberOfFiles: 'NumberOfFiles',
      protocolType: 'ProtocolType',
      provisionedThroughputInMiBps: 'ProvisionedThroughputInMiBps',
      regionId: 'RegionId',
      spaceCapacity: 'SpaceCapacity',
      storagePackageId: 'StoragePackageId',
      storageType: 'StorageType',
      throughputMode: 'ThroughputMode',
      usedSpaceSize: 'UsedSpaceSize',
      version: 'Version',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      fileSystemId: 'string',
      fileSystemName: 'string',
      meteringSpaceSize: 'number',
      mountPointCount: 'number',
      numberOfDirectories: 'number',
      numberOfFiles: 'number',
      protocolType: 'string',
      provisionedThroughputInMiBps: 'number',
      regionId: 'string',
      spaceCapacity: 'number',
      storagePackageId: 'string',
      storageType: 'string',
      throughputMode: 'string',
      usedSpaceSize: 'number',
      version: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMountPointsResponseBodyMountPoints extends $tea.Model {
  accessGroupId?: string;
  createTime?: string;
  description?: string;
  fileSystemId?: string;
  mountPointDomain?: string;
  mountPointId?: string;
  networkType?: string;
  regionId?: string;
  status?: string;
  vSwitchId?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      accessGroupId: 'AccessGroupId',
      createTime: 'CreateTime',
      description: 'Description',
      fileSystemId: 'FileSystemId',
      mountPointDomain: 'MountPointDomain',
      mountPointId: 'MountPointId',
      networkType: 'NetworkType',
      regionId: 'RegionId',
      status: 'Status',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessGroupId: 'string',
      createTime: 'string',
      description: 'string',
      fileSystemId: 'string',
      mountPointDomain: 'string',
      mountPointId: 'string',
      networkType: 'string',
      regionId: 'string',
      status: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserGroupsMappingsResponseBodyUserGroupsMappings extends $tea.Model {
  groupNames?: string[];
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      groupNames: 'GroupNames',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupNames: { 'type': 'array', 'itemType': 'string' },
      userName: 'string',
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
    this._endpoint = this.getEndpoint("dfs", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
    * ****
    *
    * @param tmpReq AttachVscMountPointRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return AttachVscMountPointResponse
   */
  async attachVscMountPointWithOptions(tmpReq: AttachVscMountPointRequest, runtime: $Util.RuntimeOptions): Promise<AttachVscMountPointResponse> {
    Util.validateModel(tmpReq);
    let request = new AttachVscMountPointShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.instanceIds)) {
      request.instanceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.instanceIds, "InstanceIds", "json");
    }

    if (!Util.isUnset(tmpReq.vscIds)) {
      request.vscIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.vscIds, "VscIds", "json");
    }

    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!Util.isUnset(request.inputRegionId)) {
      query["InputRegionId"] = request.inputRegionId;
    }

    if (!Util.isUnset(request.instanceIdsShrink)) {
      query["InstanceIds"] = request.instanceIdsShrink;
    }

    if (!Util.isUnset(request.mountPointId)) {
      query["MountPointId"] = request.mountPointId;
    }

    if (!Util.isUnset(request.vscIdsShrink)) {
      query["VscIds"] = request.vscIdsShrink;
    }

    if (!Util.isUnset(request.vscType)) {
      query["VscType"] = request.vscType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AttachVscMountPoint",
      version: "2018-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AttachVscMountPointResponse>(await this.callApi(params, req, runtime), new AttachVscMountPointResponse({}));
  }

  /**
    * ****
    *
    * @param request AttachVscMountPointRequest
    * @return AttachVscMountPointResponse
   */
  async attachVscMountPoint(request: AttachVscMountPointRequest): Promise<AttachVscMountPointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.attachVscMountPointWithOptions(request, runtime);
  }

  async bindVscMountPointAliasWithOptions(request: BindVscMountPointAliasRequest, runtime: $Util.RuntimeOptions): Promise<BindVscMountPointAliasResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aliasPrefix)) {
      query["AliasPrefix"] = request.aliasPrefix;
    }

    if (!Util.isUnset(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!Util.isUnset(request.inputRegionId)) {
      query["InputRegionId"] = request.inputRegionId;
    }

    if (!Util.isUnset(request.mountPointId)) {
      query["MountPointId"] = request.mountPointId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BindVscMountPointAlias",
      version: "2018-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BindVscMountPointAliasResponse>(await this.callApi(params, req, runtime), new BindVscMountPointAliasResponse({}));
  }

  async bindVscMountPointAlias(request: BindVscMountPointAliasRequest): Promise<BindVscMountPointAliasResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bindVscMountPointAliasWithOptions(request, runtime);
  }

  async createAccessGroupWithOptions(request: CreateAccessGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateAccessGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accessGroupName)) {
      query["AccessGroupName"] = request.accessGroupName;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.inputRegionId)) {
      query["InputRegionId"] = request.inputRegionId;
    }

    if (!Util.isUnset(request.networkType)) {
      query["NetworkType"] = request.networkType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateAccessGroup",
      version: "2018-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAccessGroupResponse>(await this.callApi(params, req, runtime), new CreateAccessGroupResponse({}));
  }

  async createAccessGroup(request: CreateAccessGroupRequest): Promise<CreateAccessGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAccessGroupWithOptions(request, runtime);
  }

  async createAccessRuleWithOptions(request: CreateAccessRuleRequest, runtime: $Util.RuntimeOptions): Promise<CreateAccessRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accessGroupId)) {
      query["AccessGroupId"] = request.accessGroupId;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.inputRegionId)) {
      query["InputRegionId"] = request.inputRegionId;
    }

    if (!Util.isUnset(request.networkSegment)) {
      query["NetworkSegment"] = request.networkSegment;
    }

    if (!Util.isUnset(request.priority)) {
      query["Priority"] = request.priority;
    }

    if (!Util.isUnset(request.RWAccessType)) {
      query["RWAccessType"] = request.RWAccessType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateAccessRule",
      version: "2018-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAccessRuleResponse>(await this.callApi(params, req, runtime), new CreateAccessRuleResponse({}));
  }

  async createAccessRule(request: CreateAccessRuleRequest): Promise<CreateAccessRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAccessRuleWithOptions(request, runtime);
  }

  async createFileSystemWithOptions(request: CreateFileSystemRequest, runtime: $Util.RuntimeOptions): Promise<CreateFileSystemResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dataRedundancyType)) {
      query["DataRedundancyType"] = request.dataRedundancyType;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.fileSystemName)) {
      query["FileSystemName"] = request.fileSystemName;
    }

    if (!Util.isUnset(request.inputRegionId)) {
      query["InputRegionId"] = request.inputRegionId;
    }

    if (!Util.isUnset(request.partitionNumber)) {
      query["PartitionNumber"] = request.partitionNumber;
    }

    if (!Util.isUnset(request.protocolType)) {
      query["ProtocolType"] = request.protocolType;
    }

    if (!Util.isUnset(request.provisionedThroughputInMiBps)) {
      query["ProvisionedThroughputInMiBps"] = request.provisionedThroughputInMiBps;
    }

    if (!Util.isUnset(request.spaceCapacity)) {
      query["SpaceCapacity"] = request.spaceCapacity;
    }

    if (!Util.isUnset(request.storageSetName)) {
      query["StorageSetName"] = request.storageSetName;
    }

    if (!Util.isUnset(request.storageType)) {
      query["StorageType"] = request.storageType;
    }

    if (!Util.isUnset(request.throughputMode)) {
      query["ThroughputMode"] = request.throughputMode;
    }

    if (!Util.isUnset(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateFileSystem",
      version: "2018-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateFileSystemResponse>(await this.callApi(params, req, runtime), new CreateFileSystemResponse({}));
  }

  async createFileSystem(request: CreateFileSystemRequest): Promise<CreateFileSystemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createFileSystemWithOptions(request, runtime);
  }

  async createMountPointWithOptions(request: CreateMountPointRequest, runtime: $Util.RuntimeOptions): Promise<CreateMountPointResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accessGroupId)) {
      query["AccessGroupId"] = request.accessGroupId;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!Util.isUnset(request.inputRegionId)) {
      query["InputRegionId"] = request.inputRegionId;
    }

    if (!Util.isUnset(request.networkType)) {
      query["NetworkType"] = request.networkType;
    }

    if (!Util.isUnset(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    if (!Util.isUnset(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateMountPoint",
      version: "2018-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateMountPointResponse>(await this.callApi(params, req, runtime), new CreateMountPointResponse({}));
  }

  async createMountPoint(request: CreateMountPointRequest): Promise<CreateMountPointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createMountPointWithOptions(request, runtime);
  }

  async createUserGroupsMappingWithOptions(tmpReq: CreateUserGroupsMappingRequest, runtime: $Util.RuntimeOptions): Promise<CreateUserGroupsMappingResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateUserGroupsMappingShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.groupNames)) {
      request.groupNamesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.groupNames, "GroupNames", "json");
    }

    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateUserGroupsMapping",
      version: "2018-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateUserGroupsMappingResponse>(await this.callApi(params, req, runtime), new CreateUserGroupsMappingResponse({}));
  }

  async createUserGroupsMapping(request: CreateUserGroupsMappingRequest): Promise<CreateUserGroupsMappingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createUserGroupsMappingWithOptions(request, runtime);
  }

  async createVscMountPointWithOptions(tmpReq: CreateVscMountPointRequest, runtime: $Util.RuntimeOptions): Promise<CreateVscMountPointResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateVscMountPointShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.instanceIds)) {
      request.instanceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.instanceIds, "InstanceIds", "json");
    }

    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!Util.isUnset(request.inputRegionId)) {
      query["InputRegionId"] = request.inputRegionId;
    }

    if (!Util.isUnset(request.instanceIdsShrink)) {
      query["InstanceIds"] = request.instanceIdsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateVscMountPoint",
      version: "2018-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateVscMountPointResponse>(await this.callApi(params, req, runtime), new CreateVscMountPointResponse({}));
  }

  async createVscMountPoint(request: CreateVscMountPointRequest): Promise<CreateVscMountPointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createVscMountPointWithOptions(request, runtime);
  }

  async deleteAccessGroupWithOptions(request: DeleteAccessGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAccessGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accessGroupId)) {
      query["AccessGroupId"] = request.accessGroupId;
    }

    if (!Util.isUnset(request.inputRegionId)) {
      query["InputRegionId"] = request.inputRegionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteAccessGroup",
      version: "2018-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteAccessGroupResponse>(await this.callApi(params, req, runtime), new DeleteAccessGroupResponse({}));
  }

  async deleteAccessGroup(request: DeleteAccessGroupRequest): Promise<DeleteAccessGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAccessGroupWithOptions(request, runtime);
  }

  async deleteAccessRuleWithOptions(request: DeleteAccessRuleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAccessRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accessGroupId)) {
      query["AccessGroupId"] = request.accessGroupId;
    }

    if (!Util.isUnset(request.accessRuleId)) {
      query["AccessRuleId"] = request.accessRuleId;
    }

    if (!Util.isUnset(request.inputRegionId)) {
      query["InputRegionId"] = request.inputRegionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteAccessRule",
      version: "2018-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteAccessRuleResponse>(await this.callApi(params, req, runtime), new DeleteAccessRuleResponse({}));
  }

  async deleteAccessRule(request: DeleteAccessRuleRequest): Promise<DeleteAccessRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAccessRuleWithOptions(request, runtime);
  }

  async deleteFileSystemWithOptions(request: DeleteFileSystemRequest, runtime: $Util.RuntimeOptions): Promise<DeleteFileSystemResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!Util.isUnset(request.inputRegionId)) {
      query["InputRegionId"] = request.inputRegionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteFileSystem",
      version: "2018-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteFileSystemResponse>(await this.callApi(params, req, runtime), new DeleteFileSystemResponse({}));
  }

  async deleteFileSystem(request: DeleteFileSystemRequest): Promise<DeleteFileSystemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteFileSystemWithOptions(request, runtime);
  }

  async deleteMountPointWithOptions(request: DeleteMountPointRequest, runtime: $Util.RuntimeOptions): Promise<DeleteMountPointResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!Util.isUnset(request.inputRegionId)) {
      query["InputRegionId"] = request.inputRegionId;
    }

    if (!Util.isUnset(request.mountPointId)) {
      query["MountPointId"] = request.mountPointId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteMountPoint",
      version: "2018-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteMountPointResponse>(await this.callApi(params, req, runtime), new DeleteMountPointResponse({}));
  }

  async deleteMountPoint(request: DeleteMountPointRequest): Promise<DeleteMountPointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteMountPointWithOptions(request, runtime);
  }

  async deleteUserGroupsMappingWithOptions(tmpReq: DeleteUserGroupsMappingRequest, runtime: $Util.RuntimeOptions): Promise<DeleteUserGroupsMappingResponse> {
    Util.validateModel(tmpReq);
    let request = new DeleteUserGroupsMappingShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.groupNames)) {
      request.groupNamesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.groupNames, "GroupNames", "json");
    }

    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteUserGroupsMapping",
      version: "2018-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteUserGroupsMappingResponse>(await this.callApi(params, req, runtime), new DeleteUserGroupsMappingResponse({}));
  }

  async deleteUserGroupsMapping(request: DeleteUserGroupsMappingRequest): Promise<DeleteUserGroupsMappingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteUserGroupsMappingWithOptions(request, runtime);
  }

  async deleteVscMountPointWithOptions(request: DeleteVscMountPointRequest, runtime: $Util.RuntimeOptions): Promise<DeleteVscMountPointResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!Util.isUnset(request.inputRegionId)) {
      query["InputRegionId"] = request.inputRegionId;
    }

    if (!Util.isUnset(request.mountPointId)) {
      query["MountPointId"] = request.mountPointId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteVscMountPoint",
      version: "2018-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteVscMountPointResponse>(await this.callApi(params, req, runtime), new DeleteVscMountPointResponse({}));
  }

  async deleteVscMountPoint(request: DeleteVscMountPointRequest): Promise<DeleteVscMountPointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteVscMountPointWithOptions(request, runtime);
  }

  async describeRegionsWithOptions(request: DescribeRegionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.inputRegionId)) {
      query["InputRegionId"] = request.inputRegionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRegions",
      version: "2018-06-20",
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

  async describeRegions(request: DescribeRegionsRequest): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  async describeVscMountPointsWithOptions(request: DescribeVscMountPointsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVscMountPointsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!Util.isUnset(request.inputRegionId)) {
      query["InputRegionId"] = request.inputRegionId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.mountPointId)) {
      query["MountPointId"] = request.mountPointId;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.vscId)) {
      query["VscId"] = request.vscId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeVscMountPoints",
      version: "2018-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeVscMountPointsResponse>(await this.callApi(params, req, runtime), new DescribeVscMountPointsResponse({}));
  }

  async describeVscMountPoints(request: DescribeVscMountPointsRequest): Promise<DescribeVscMountPointsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVscMountPointsWithOptions(request, runtime);
  }

  async detachVscMountPointWithOptions(tmpReq: DetachVscMountPointRequest, runtime: $Util.RuntimeOptions): Promise<DetachVscMountPointResponse> {
    Util.validateModel(tmpReq);
    let request = new DetachVscMountPointShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.instanceIds)) {
      request.instanceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.instanceIds, "InstanceIds", "json");
    }

    if (!Util.isUnset(tmpReq.vscIds)) {
      request.vscIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.vscIds, "VscIds", "json");
    }

    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!Util.isUnset(request.inputRegionId)) {
      query["InputRegionId"] = request.inputRegionId;
    }

    if (!Util.isUnset(request.instanceIdsShrink)) {
      query["InstanceIds"] = request.instanceIdsShrink;
    }

    if (!Util.isUnset(request.mountPointId)) {
      query["MountPointId"] = request.mountPointId;
    }

    if (!Util.isUnset(request.vscIdsShrink)) {
      query["VscIds"] = request.vscIdsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DetachVscMountPoint",
      version: "2018-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DetachVscMountPointResponse>(await this.callApi(params, req, runtime), new DetachVscMountPointResponse({}));
  }

  async detachVscMountPoint(request: DetachVscMountPointRequest): Promise<DetachVscMountPointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detachVscMountPointWithOptions(request, runtime);
  }

  async getAccessGroupWithOptions(request: GetAccessGroupRequest, runtime: $Util.RuntimeOptions): Promise<GetAccessGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accessGroupId)) {
      query["AccessGroupId"] = request.accessGroupId;
    }

    if (!Util.isUnset(request.inputRegionId)) {
      query["InputRegionId"] = request.inputRegionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAccessGroup",
      version: "2018-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAccessGroupResponse>(await this.callApi(params, req, runtime), new GetAccessGroupResponse({}));
  }

  async getAccessGroup(request: GetAccessGroupRequest): Promise<GetAccessGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAccessGroupWithOptions(request, runtime);
  }

  async getAccessRuleWithOptions(request: GetAccessRuleRequest, runtime: $Util.RuntimeOptions): Promise<GetAccessRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accessGroupId)) {
      query["AccessGroupId"] = request.accessGroupId;
    }

    if (!Util.isUnset(request.accessRuleId)) {
      query["AccessRuleId"] = request.accessRuleId;
    }

    if (!Util.isUnset(request.inputRegionId)) {
      query["InputRegionId"] = request.inputRegionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAccessRule",
      version: "2018-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAccessRuleResponse>(await this.callApi(params, req, runtime), new GetAccessRuleResponse({}));
  }

  async getAccessRule(request: GetAccessRuleRequest): Promise<GetAccessRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAccessRuleWithOptions(request, runtime);
  }

  async getFileSystemWithOptions(request: GetFileSystemRequest, runtime: $Util.RuntimeOptions): Promise<GetFileSystemResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!Util.isUnset(request.inputRegionId)) {
      query["InputRegionId"] = request.inputRegionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetFileSystem",
      version: "2018-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetFileSystemResponse>(await this.callApi(params, req, runtime), new GetFileSystemResponse({}));
  }

  async getFileSystem(request: GetFileSystemRequest): Promise<GetFileSystemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getFileSystemWithOptions(request, runtime);
  }

  async getMountPointWithOptions(request: GetMountPointRequest, runtime: $Util.RuntimeOptions): Promise<GetMountPointResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!Util.isUnset(request.inputRegionId)) {
      query["InputRegionId"] = request.inputRegionId;
    }

    if (!Util.isUnset(request.mountPointId)) {
      query["MountPointId"] = request.mountPointId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetMountPoint",
      version: "2018-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetMountPointResponse>(await this.callApi(params, req, runtime), new GetMountPointResponse({}));
  }

  async getMountPoint(request: GetMountPointRequest): Promise<GetMountPointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMountPointWithOptions(request, runtime);
  }

  async getRegionWithOptions(request: GetRegionRequest, runtime: $Util.RuntimeOptions): Promise<GetRegionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.inputRegionId)) {
      query["InputRegionId"] = request.inputRegionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetRegion",
      version: "2018-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetRegionResponse>(await this.callApi(params, req, runtime), new GetRegionResponse({}));
  }

  async getRegion(request: GetRegionRequest): Promise<GetRegionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRegionWithOptions(request, runtime);
  }

  async listAccessGroupsWithOptions(request: ListAccessGroupsRequest, runtime: $Util.RuntimeOptions): Promise<ListAccessGroupsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.inputRegionId)) {
      query["InputRegionId"] = request.inputRegionId;
    }

    if (!Util.isUnset(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!Util.isUnset(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!Util.isUnset(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!Util.isUnset(request.startOffset)) {
      query["StartOffset"] = request.startOffset;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAccessGroups",
      version: "2018-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAccessGroupsResponse>(await this.callApi(params, req, runtime), new ListAccessGroupsResponse({}));
  }

  async listAccessGroups(request: ListAccessGroupsRequest): Promise<ListAccessGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAccessGroupsWithOptions(request, runtime);
  }

  async listAccessRulesWithOptions(request: ListAccessRulesRequest, runtime: $Util.RuntimeOptions): Promise<ListAccessRulesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accessGroupId)) {
      query["AccessGroupId"] = request.accessGroupId;
    }

    if (!Util.isUnset(request.inputRegionId)) {
      query["InputRegionId"] = request.inputRegionId;
    }

    if (!Util.isUnset(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!Util.isUnset(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!Util.isUnset(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!Util.isUnset(request.startOffset)) {
      query["StartOffset"] = request.startOffset;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAccessRules",
      version: "2018-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAccessRulesResponse>(await this.callApi(params, req, runtime), new ListAccessRulesResponse({}));
  }

  async listAccessRules(request: ListAccessRulesRequest): Promise<ListAccessRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAccessRulesWithOptions(request, runtime);
  }

  async listFileSystemsWithOptions(request: ListFileSystemsRequest, runtime: $Util.RuntimeOptions): Promise<ListFileSystemsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.inputRegionId)) {
      query["InputRegionId"] = request.inputRegionId;
    }

    if (!Util.isUnset(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!Util.isUnset(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!Util.isUnset(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!Util.isUnset(request.startOffset)) {
      query["StartOffset"] = request.startOffset;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListFileSystems",
      version: "2018-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListFileSystemsResponse>(await this.callApi(params, req, runtime), new ListFileSystemsResponse({}));
  }

  async listFileSystems(request: ListFileSystemsRequest): Promise<ListFileSystemsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFileSystemsWithOptions(request, runtime);
  }

  async listMountPointsWithOptions(request: ListMountPointsRequest, runtime: $Util.RuntimeOptions): Promise<ListMountPointsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!Util.isUnset(request.inputRegionId)) {
      query["InputRegionId"] = request.inputRegionId;
    }

    if (!Util.isUnset(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!Util.isUnset(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!Util.isUnset(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!Util.isUnset(request.startOffset)) {
      query["StartOffset"] = request.startOffset;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListMountPoints",
      version: "2018-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListMountPointsResponse>(await this.callApi(params, req, runtime), new ListMountPointsResponse({}));
  }

  async listMountPoints(request: ListMountPointsRequest): Promise<ListMountPointsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listMountPointsWithOptions(request, runtime);
  }

  async listUserGroupsMappingsWithOptions(request: ListUserGroupsMappingsRequest, runtime: $Util.RuntimeOptions): Promise<ListUserGroupsMappingsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.filesystemId)) {
      query["FilesystemId"] = request.filesystemId;
    }

    if (!Util.isUnset(request.inputRegionId)) {
      query["InputRegionId"] = request.inputRegionId;
    }

    if (!Util.isUnset(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListUserGroupsMappings",
      version: "2018-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListUserGroupsMappingsResponse>(await this.callApi(params, req, runtime), new ListUserGroupsMappingsResponse({}));
  }

  async listUserGroupsMappings(request: ListUserGroupsMappingsRequest): Promise<ListUserGroupsMappingsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUserGroupsMappingsWithOptions(request, runtime);
  }

  async modifyAccessGroupWithOptions(request: ModifyAccessGroupRequest, runtime: $Util.RuntimeOptions): Promise<ModifyAccessGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accessGroupId)) {
      query["AccessGroupId"] = request.accessGroupId;
    }

    if (!Util.isUnset(request.accessGroupName)) {
      query["AccessGroupName"] = request.accessGroupName;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.inputRegionId)) {
      query["InputRegionId"] = request.inputRegionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyAccessGroup",
      version: "2018-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyAccessGroupResponse>(await this.callApi(params, req, runtime), new ModifyAccessGroupResponse({}));
  }

  async modifyAccessGroup(request: ModifyAccessGroupRequest): Promise<ModifyAccessGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyAccessGroupWithOptions(request, runtime);
  }

  async modifyAccessRuleWithOptions(request: ModifyAccessRuleRequest, runtime: $Util.RuntimeOptions): Promise<ModifyAccessRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accessGroupId)) {
      query["AccessGroupId"] = request.accessGroupId;
    }

    if (!Util.isUnset(request.accessRuleId)) {
      query["AccessRuleId"] = request.accessRuleId;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.inputRegionId)) {
      query["InputRegionId"] = request.inputRegionId;
    }

    if (!Util.isUnset(request.priority)) {
      query["Priority"] = request.priority;
    }

    if (!Util.isUnset(request.RWAccessType)) {
      query["RWAccessType"] = request.RWAccessType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyAccessRule",
      version: "2018-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyAccessRuleResponse>(await this.callApi(params, req, runtime), new ModifyAccessRuleResponse({}));
  }

  async modifyAccessRule(request: ModifyAccessRuleRequest): Promise<ModifyAccessRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyAccessRuleWithOptions(request, runtime);
  }

  async modifyFileSystemWithOptions(request: ModifyFileSystemRequest, runtime: $Util.RuntimeOptions): Promise<ModifyFileSystemResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!Util.isUnset(request.fileSystemName)) {
      query["FileSystemName"] = request.fileSystemName;
    }

    if (!Util.isUnset(request.inputRegionId)) {
      query["InputRegionId"] = request.inputRegionId;
    }

    if (!Util.isUnset(request.provisionedThroughputInMiBps)) {
      query["ProvisionedThroughputInMiBps"] = request.provisionedThroughputInMiBps;
    }

    if (!Util.isUnset(request.spaceCapacity)) {
      query["SpaceCapacity"] = request.spaceCapacity;
    }

    if (!Util.isUnset(request.throughputMode)) {
      query["ThroughputMode"] = request.throughputMode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyFileSystem",
      version: "2018-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyFileSystemResponse>(await this.callApi(params, req, runtime), new ModifyFileSystemResponse({}));
  }

  async modifyFileSystem(request: ModifyFileSystemRequest): Promise<ModifyFileSystemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyFileSystemWithOptions(request, runtime);
  }

  async modifyMountPointWithOptions(request: ModifyMountPointRequest, runtime: $Util.RuntimeOptions): Promise<ModifyMountPointResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accessGroupId)) {
      query["AccessGroupId"] = request.accessGroupId;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!Util.isUnset(request.inputRegionId)) {
      query["InputRegionId"] = request.inputRegionId;
    }

    if (!Util.isUnset(request.mountPointId)) {
      query["MountPointId"] = request.mountPointId;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyMountPoint",
      version: "2018-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyMountPointResponse>(await this.callApi(params, req, runtime), new ModifyMountPointResponse({}));
  }

  async modifyMountPoint(request: ModifyMountPointRequest): Promise<ModifyMountPointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyMountPointWithOptions(request, runtime);
  }

}
