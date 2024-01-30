// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class OtsDetail extends $tea.Model {
  tableNames?: string[];
  static names(): { [key: string]: string } {
    return {
      tableNames: 'TableNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OtsTableRestoreDetail extends $tea.Model {
  batchChannelCount?: number;
  indexNameSuffix?: string;
  overwriteExisting?: boolean;
  reGenerateAutoIncrementPK?: boolean;
  restoreIndex?: boolean;
  restoreSearchIndex?: boolean;
  searchIndexNameSuffix?: string;
  static names(): { [key: string]: string } {
    return {
      batchChannelCount: 'BatchChannelCount',
      indexNameSuffix: 'IndexNameSuffix',
      overwriteExisting: 'OverwriteExisting',
      reGenerateAutoIncrementPK: 'ReGenerateAutoIncrementPK',
      restoreIndex: 'RestoreIndex',
      restoreSearchIndex: 'RestoreSearchIndex',
      searchIndexNameSuffix: 'SearchIndexNameSuffix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchChannelCount: 'number',
      indexNameSuffix: 'string',
      overwriteExisting: 'boolean',
      reGenerateAutoIncrementPK: 'boolean',
      restoreIndex: 'boolean',
      restoreSearchIndex: 'boolean',
      searchIndexNameSuffix: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Report extends $tea.Model {
  failedFiles?: string;
  skippedFiles?: string;
  successFiles?: string;
  totalFiles?: string;
  static names(): { [key: string]: string } {
    return {
      failedFiles: 'FailedFiles',
      skippedFiles: 'SkippedFiles',
      successFiles: 'SuccessFiles',
      totalFiles: 'TotalFiles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedFiles: 'string',
      skippedFiles: 'string',
      successFiles: 'string',
      totalFiles: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Rule extends $tea.Model {
  backupType?: string;
  destinationRegionId?: string;
  destinationRetention?: number;
  disabled?: boolean;
  doCopy?: boolean;
  retention?: number;
  ruleName?: string;
  schedule?: string;
  static names(): { [key: string]: string } {
    return {
      backupType: 'BackupType',
      destinationRegionId: 'DestinationRegionId',
      destinationRetention: 'DestinationRetention',
      disabled: 'Disabled',
      doCopy: 'DoCopy',
      retention: 'Retention',
      ruleName: 'RuleName',
      schedule: 'Schedule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupType: 'string',
      destinationRegionId: 'string',
      destinationRetention: 'number',
      disabled: 'boolean',
      doCopy: 'boolean',
      retention: 'number',
      ruleName: 'string',
      schedule: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddContainerClusterRequest extends $tea.Model {
  clusterType?: string;
  description?: string;
  identifier?: string;
  name?: string;
  networkType?: string;
  static names(): { [key: string]: string } {
    return {
      clusterType: 'ClusterType',
      description: 'Description',
      identifier: 'Identifier',
      name: 'Name',
      networkType: 'NetworkType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterType: 'string',
      description: 'string',
      identifier: 'string',
      name: 'string',
      networkType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddContainerClusterResponseBody extends $tea.Model {
  clusterId?: string;
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  token?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      token: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddContainerClusterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddContainerClusterResponseBody;
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
      body: AddContainerClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachNasFileSystemRequest extends $tea.Model {
  createTime?: string;
  crossAccountRoleName?: string;
  crossAccountType?: string;
  crossAccountUserId?: number;
  fileSystemId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      crossAccountRoleName: 'CrossAccountRoleName',
      crossAccountType: 'CrossAccountType',
      crossAccountUserId: 'CrossAccountUserId',
      fileSystemId: 'FileSystemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      crossAccountRoleName: 'string',
      crossAccountType: 'string',
      crossAccountUserId: 'number',
      fileSystemId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachNasFileSystemResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachNasFileSystemResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AttachNasFileSystemResponseBody;
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
      body: AttachNasFileSystemResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelBackupJobRequest extends $tea.Model {
  jobId?: string;
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      vaultId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelBackupJobResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelBackupJobResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CancelBackupJobResponseBody;
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
      body: CancelBackupJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelRestoreJobRequest extends $tea.Model {
  restoreId?: string;
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      restoreId: 'RestoreId',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      restoreId: 'string',
      vaultId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelRestoreJobResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelRestoreJobResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CancelRestoreJobResponseBody;
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
      body: CancelRestoreJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeResourceGroupRequest extends $tea.Model {
  newResourceGroupId?: string;
  resourceId?: string;
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
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

export class CheckRoleRequest extends $tea.Model {
  checkRoleType?: string;
  crossAccountRoleName?: string;
  crossAccountUserId?: number;
  static names(): { [key: string]: string } {
    return {
      checkRoleType: 'CheckRoleType',
      crossAccountRoleName: 'CrossAccountRoleName',
      crossAccountUserId: 'CrossAccountUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkRoleType: 'string',
      crossAccountRoleName: 'string',
      crossAccountUserId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckRoleResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckRoleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CheckRoleResponseBody;
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
      body: CheckRoleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBackupJobRequest extends $tea.Model {
  backupType?: string;
  clusterId?: string;
  containerClusterId?: string;
  containerResources?: string;
  crossAccountRoleName?: string;
  crossAccountType?: string;
  crossAccountUserId?: number;
  detail?: { [key: string]: any };
  exclude?: string;
  include?: string;
  initiatedByAck?: boolean;
  instanceId?: string;
  jobName?: string;
  options?: string;
  retention?: number;
  sourceType?: string;
  speedLimit?: string;
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      backupType: 'BackupType',
      clusterId: 'ClusterId',
      containerClusterId: 'ContainerClusterId',
      containerResources: 'ContainerResources',
      crossAccountRoleName: 'CrossAccountRoleName',
      crossAccountType: 'CrossAccountType',
      crossAccountUserId: 'CrossAccountUserId',
      detail: 'Detail',
      exclude: 'Exclude',
      include: 'Include',
      initiatedByAck: 'InitiatedByAck',
      instanceId: 'InstanceId',
      jobName: 'JobName',
      options: 'Options',
      retention: 'Retention',
      sourceType: 'SourceType',
      speedLimit: 'SpeedLimit',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupType: 'string',
      clusterId: 'string',
      containerClusterId: 'string',
      containerResources: 'string',
      crossAccountRoleName: 'string',
      crossAccountType: 'string',
      crossAccountUserId: 'number',
      detail: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      exclude: 'string',
      include: 'string',
      initiatedByAck: 'boolean',
      instanceId: 'string',
      jobName: 'string',
      options: 'string',
      retention: 'number',
      sourceType: 'string',
      speedLimit: 'string',
      vaultId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBackupJobShrinkRequest extends $tea.Model {
  backupType?: string;
  clusterId?: string;
  containerClusterId?: string;
  containerResources?: string;
  crossAccountRoleName?: string;
  crossAccountType?: string;
  crossAccountUserId?: number;
  detailShrink?: string;
  exclude?: string;
  include?: string;
  initiatedByAck?: boolean;
  instanceId?: string;
  jobName?: string;
  options?: string;
  retention?: number;
  sourceType?: string;
  speedLimit?: string;
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      backupType: 'BackupType',
      clusterId: 'ClusterId',
      containerClusterId: 'ContainerClusterId',
      containerResources: 'ContainerResources',
      crossAccountRoleName: 'CrossAccountRoleName',
      crossAccountType: 'CrossAccountType',
      crossAccountUserId: 'CrossAccountUserId',
      detailShrink: 'Detail',
      exclude: 'Exclude',
      include: 'Include',
      initiatedByAck: 'InitiatedByAck',
      instanceId: 'InstanceId',
      jobName: 'JobName',
      options: 'Options',
      retention: 'Retention',
      sourceType: 'SourceType',
      speedLimit: 'SpeedLimit',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupType: 'string',
      clusterId: 'string',
      containerClusterId: 'string',
      containerResources: 'string',
      crossAccountRoleName: 'string',
      crossAccountType: 'string',
      crossAccountUserId: 'number',
      detailShrink: 'string',
      exclude: 'string',
      include: 'string',
      initiatedByAck: 'boolean',
      instanceId: 'string',
      jobName: 'string',
      options: 'string',
      retention: 'number',
      sourceType: 'string',
      speedLimit: 'string',
      vaultId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBackupJobResponseBody extends $tea.Model {
  code?: string;
  jobId?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      jobId: 'JobId',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      jobId: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBackupJobResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateBackupJobResponseBody;
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
      body: CreateBackupJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBackupPlanRequest extends $tea.Model {
  backupType?: string;
  bucket?: string;
  changeListPath?: string;
  createTime?: number;
  crossAccountRoleName?: string;
  crossAccountType?: string;
  crossAccountUserId?: number;
  destDataSourceDetail?: { [key: string]: any };
  destDataSourceId?: string;
  destSourceType?: string;
  detail?: { [key: string]: any };
  disabled?: boolean;
  exclude?: string;
  fileSystemId?: string;
  include?: string;
  instanceId?: string;
  instanceName?: string;
  keepLatestSnapshots?: number;
  options?: string;
  otsDetail?: OtsDetail;
  path?: string[];
  planName?: string;
  prefix?: string;
  retention?: number;
  rule?: CreateBackupPlanRequestRule[];
  schedule?: string;
  sourceType?: string;
  speedLimit?: string;
  udmRegionId?: string;
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      backupType: 'BackupType',
      bucket: 'Bucket',
      changeListPath: 'ChangeListPath',
      createTime: 'CreateTime',
      crossAccountRoleName: 'CrossAccountRoleName',
      crossAccountType: 'CrossAccountType',
      crossAccountUserId: 'CrossAccountUserId',
      destDataSourceDetail: 'DestDataSourceDetail',
      destDataSourceId: 'DestDataSourceId',
      destSourceType: 'DestSourceType',
      detail: 'Detail',
      disabled: 'Disabled',
      exclude: 'Exclude',
      fileSystemId: 'FileSystemId',
      include: 'Include',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      keepLatestSnapshots: 'KeepLatestSnapshots',
      options: 'Options',
      otsDetail: 'OtsDetail',
      path: 'Path',
      planName: 'PlanName',
      prefix: 'Prefix',
      retention: 'Retention',
      rule: 'Rule',
      schedule: 'Schedule',
      sourceType: 'SourceType',
      speedLimit: 'SpeedLimit',
      udmRegionId: 'UdmRegionId',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupType: 'string',
      bucket: 'string',
      changeListPath: 'string',
      createTime: 'number',
      crossAccountRoleName: 'string',
      crossAccountType: 'string',
      crossAccountUserId: 'number',
      destDataSourceDetail: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      destDataSourceId: 'string',
      destSourceType: 'string',
      detail: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      disabled: 'boolean',
      exclude: 'string',
      fileSystemId: 'string',
      include: 'string',
      instanceId: 'string',
      instanceName: 'string',
      keepLatestSnapshots: 'number',
      options: 'string',
      otsDetail: OtsDetail,
      path: { 'type': 'array', 'itemType': 'string' },
      planName: 'string',
      prefix: 'string',
      retention: 'number',
      rule: { 'type': 'array', 'itemType': CreateBackupPlanRequestRule },
      schedule: 'string',
      sourceType: 'string',
      speedLimit: 'string',
      udmRegionId: 'string',
      vaultId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBackupPlanShrinkRequest extends $tea.Model {
  backupType?: string;
  bucket?: string;
  changeListPath?: string;
  createTime?: number;
  crossAccountRoleName?: string;
  crossAccountType?: string;
  crossAccountUserId?: number;
  destDataSourceDetailShrink?: string;
  destDataSourceId?: string;
  destSourceType?: string;
  detailShrink?: string;
  disabled?: boolean;
  exclude?: string;
  fileSystemId?: string;
  include?: string;
  instanceId?: string;
  instanceName?: string;
  keepLatestSnapshots?: number;
  options?: string;
  otsDetailShrink?: string;
  path?: string[];
  planName?: string;
  prefix?: string;
  retention?: number;
  rule?: CreateBackupPlanShrinkRequestRule[];
  schedule?: string;
  sourceType?: string;
  speedLimit?: string;
  udmRegionId?: string;
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      backupType: 'BackupType',
      bucket: 'Bucket',
      changeListPath: 'ChangeListPath',
      createTime: 'CreateTime',
      crossAccountRoleName: 'CrossAccountRoleName',
      crossAccountType: 'CrossAccountType',
      crossAccountUserId: 'CrossAccountUserId',
      destDataSourceDetailShrink: 'DestDataSourceDetail',
      destDataSourceId: 'DestDataSourceId',
      destSourceType: 'DestSourceType',
      detailShrink: 'Detail',
      disabled: 'Disabled',
      exclude: 'Exclude',
      fileSystemId: 'FileSystemId',
      include: 'Include',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      keepLatestSnapshots: 'KeepLatestSnapshots',
      options: 'Options',
      otsDetailShrink: 'OtsDetail',
      path: 'Path',
      planName: 'PlanName',
      prefix: 'Prefix',
      retention: 'Retention',
      rule: 'Rule',
      schedule: 'Schedule',
      sourceType: 'SourceType',
      speedLimit: 'SpeedLimit',
      udmRegionId: 'UdmRegionId',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupType: 'string',
      bucket: 'string',
      changeListPath: 'string',
      createTime: 'number',
      crossAccountRoleName: 'string',
      crossAccountType: 'string',
      crossAccountUserId: 'number',
      destDataSourceDetailShrink: 'string',
      destDataSourceId: 'string',
      destSourceType: 'string',
      detailShrink: 'string',
      disabled: 'boolean',
      exclude: 'string',
      fileSystemId: 'string',
      include: 'string',
      instanceId: 'string',
      instanceName: 'string',
      keepLatestSnapshots: 'number',
      options: 'string',
      otsDetailShrink: 'string',
      path: { 'type': 'array', 'itemType': 'string' },
      planName: 'string',
      prefix: 'string',
      retention: 'number',
      rule: { 'type': 'array', 'itemType': CreateBackupPlanShrinkRequestRule },
      schedule: 'string',
      sourceType: 'string',
      speedLimit: 'string',
      udmRegionId: 'string',
      vaultId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBackupPlanResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  planId?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      planId: 'PlanId',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      planId: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBackupPlanResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateBackupPlanResponseBody;
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
      body: CreateBackupPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClientsRequest extends $tea.Model {
  alertSetting?: string;
  clientInfo?: string;
  resourceGroupId?: string;
  useHttps?: boolean;
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      alertSetting: 'AlertSetting',
      clientInfo: 'ClientInfo',
      resourceGroupId: 'ResourceGroupId',
      useHttps: 'UseHttps',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertSetting: 'string',
      clientInfo: 'string',
      resourceGroupId: 'string',
      useHttps: 'boolean',
      vaultId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClientsResponseBody extends $tea.Model {
  code?: string;
  instanceStatuses?: CreateClientsResponseBodyInstanceStatuses;
  message?: string;
  requestId?: string;
  success?: boolean;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      instanceStatuses: 'InstanceStatuses',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      instanceStatuses: CreateClientsResponseBodyInstanceStatuses,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClientsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateClientsResponseBody;
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
      body: CreateClientsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHanaBackupPlanRequest extends $tea.Model {
  backupPrefix?: string;
  backupType?: string;
  clusterId?: string;
  databaseName?: string;
  planName?: string;
  resourceGroupId?: string;
  schedule?: string;
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      backupPrefix: 'BackupPrefix',
      backupType: 'BackupType',
      clusterId: 'ClusterId',
      databaseName: 'DatabaseName',
      planName: 'PlanName',
      resourceGroupId: 'ResourceGroupId',
      schedule: 'Schedule',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPrefix: 'string',
      backupType: 'string',
      clusterId: 'string',
      databaseName: 'string',
      planName: 'string',
      resourceGroupId: 'string',
      schedule: 'string',
      vaultId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHanaBackupPlanResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  planId?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      planId: 'PlanId',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      planId: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHanaBackupPlanResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateHanaBackupPlanResponseBody;
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
      body: CreateHanaBackupPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHanaInstanceRequest extends $tea.Model {
  alertSetting?: string;
  ecsInstanceId?: string;
  hanaName?: string;
  host?: string;
  instanceNumber?: number;
  password?: string;
  resourceGroupId?: string;
  sid?: string;
  useSsl?: boolean;
  userName?: string;
  validateCertificate?: boolean;
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      alertSetting: 'AlertSetting',
      ecsInstanceId: 'EcsInstanceId',
      hanaName: 'HanaName',
      host: 'Host',
      instanceNumber: 'InstanceNumber',
      password: 'Password',
      resourceGroupId: 'ResourceGroupId',
      sid: 'Sid',
      useSsl: 'UseSsl',
      userName: 'UserName',
      validateCertificate: 'ValidateCertificate',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertSetting: 'string',
      ecsInstanceId: 'string',
      hanaName: 'string',
      host: 'string',
      instanceNumber: 'number',
      password: 'string',
      resourceGroupId: 'string',
      sid: 'string',
      useSsl: 'boolean',
      userName: 'string',
      validateCertificate: 'boolean',
      vaultId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHanaInstanceResponseBody extends $tea.Model {
  clusterId?: string;
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHanaInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateHanaInstanceResponseBody;
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
      body: CreateHanaInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHanaRestoreRequest extends $tea.Model {
  backupId?: number;
  backupPrefix?: string;
  checkAccess?: boolean;
  clearLog?: boolean;
  clusterId?: string;
  databaseName?: string;
  logPosition?: number;
  masterClientId?: string;
  mode?: string;
  recoveryPointInTime?: number;
  sidAdmin?: string;
  source?: string;
  sourceClusterId?: string;
  systemCopy?: boolean;
  useCatalog?: boolean;
  useDelta?: boolean;
  vaultId?: string;
  volumeId?: number;
  static names(): { [key: string]: string } {
    return {
      backupId: 'BackupId',
      backupPrefix: 'BackupPrefix',
      checkAccess: 'CheckAccess',
      clearLog: 'ClearLog',
      clusterId: 'ClusterId',
      databaseName: 'DatabaseName',
      logPosition: 'LogPosition',
      masterClientId: 'MasterClientId',
      mode: 'Mode',
      recoveryPointInTime: 'RecoveryPointInTime',
      sidAdmin: 'SidAdmin',
      source: 'Source',
      sourceClusterId: 'SourceClusterId',
      systemCopy: 'SystemCopy',
      useCatalog: 'UseCatalog',
      useDelta: 'UseDelta',
      vaultId: 'VaultId',
      volumeId: 'VolumeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupId: 'number',
      backupPrefix: 'string',
      checkAccess: 'boolean',
      clearLog: 'boolean',
      clusterId: 'string',
      databaseName: 'string',
      logPosition: 'number',
      masterClientId: 'string',
      mode: 'string',
      recoveryPointInTime: 'number',
      sidAdmin: 'string',
      source: 'string',
      sourceClusterId: 'string',
      systemCopy: 'boolean',
      useCatalog: 'boolean',
      useDelta: 'boolean',
      vaultId: 'string',
      volumeId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHanaRestoreResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  restoreId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      restoreId: 'RestoreId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      restoreId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHanaRestoreResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateHanaRestoreResponseBody;
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
      body: CreateHanaRestoreResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyBindingsRequest extends $tea.Model {
  policyBindingList?: CreatePolicyBindingsRequestPolicyBindingList[];
  policyId?: string;
  static names(): { [key: string]: string } {
    return {
      policyBindingList: 'PolicyBindingList',
      policyId: 'PolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyBindingList: { 'type': 'array', 'itemType': CreatePolicyBindingsRequestPolicyBindingList },
      policyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyBindingsShrinkRequest extends $tea.Model {
  policyBindingListShrink?: string;
  policyId?: string;
  static names(): { [key: string]: string } {
    return {
      policyBindingListShrink: 'PolicyBindingList',
      policyId: 'PolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyBindingListShrink: 'string',
      policyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyBindingsResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyBindingsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreatePolicyBindingsResponseBody;
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
      body: CreatePolicyBindingsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyV2Request extends $tea.Model {
  policyDescription?: string;
  policyName?: string;
  rules?: CreatePolicyV2RequestRules[];
  static names(): { [key: string]: string } {
    return {
      policyDescription: 'PolicyDescription',
      policyName: 'PolicyName',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyDescription: 'string',
      policyName: 'string',
      rules: { 'type': 'array', 'itemType': CreatePolicyV2RequestRules },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyV2ShrinkRequest extends $tea.Model {
  policyDescription?: string;
  policyName?: string;
  rulesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      policyDescription: 'PolicyDescription',
      policyName: 'PolicyName',
      rulesShrink: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyDescription: 'string',
      policyName: 'string',
      rulesShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyV2ResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  policyId?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      policyId: 'PolicyId',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      policyId: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyV2Response extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreatePolicyV2ResponseBody;
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
      body: CreatePolicyV2ResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateReplicationVaultRequest extends $tea.Model {
  description?: string;
  redundancyType?: string;
  replicationSourceRegionId?: string;
  replicationSourceVaultId?: string;
  vaultName?: string;
  vaultRegionId?: string;
  vaultStorageClass?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      redundancyType: 'RedundancyType',
      replicationSourceRegionId: 'ReplicationSourceRegionId',
      replicationSourceVaultId: 'ReplicationSourceVaultId',
      vaultName: 'VaultName',
      vaultRegionId: 'VaultRegionId',
      vaultStorageClass: 'VaultStorageClass',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      redundancyType: 'string',
      replicationSourceRegionId: 'string',
      replicationSourceVaultId: 'string',
      vaultName: 'string',
      vaultRegionId: 'string',
      vaultStorageClass: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateReplicationVaultResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  taskId?: string;
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      taskId: 'TaskId',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      taskId: 'string',
      vaultId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateReplicationVaultResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateReplicationVaultResponseBody;
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
      body: CreateReplicationVaultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRestoreJobRequest extends $tea.Model {
  crossAccountRoleName?: string;
  crossAccountType?: string;
  crossAccountUserId?: number;
  exclude?: string;
  failbackDetail?: { [key: string]: any };
  include?: string;
  initiatedByAck?: boolean;
  options?: string;
  otsDetail?: OtsTableRestoreDetail;
  restoreType?: string;
  snapshotHash?: string;
  snapshotId?: string;
  sourceType?: string;
  targetBucket?: string;
  targetContainer?: string;
  targetContainerClusterId?: string;
  targetCreateTime?: number;
  targetFileSystemId?: string;
  targetInstanceId?: string;
  targetInstanceName?: string;
  targetPath?: string;
  targetPrefix?: string;
  targetTableName?: string;
  targetTime?: number;
  udmDetail?: { [key: string]: any };
  udmRegionId?: string;
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      crossAccountRoleName: 'CrossAccountRoleName',
      crossAccountType: 'CrossAccountType',
      crossAccountUserId: 'CrossAccountUserId',
      exclude: 'Exclude',
      failbackDetail: 'FailbackDetail',
      include: 'Include',
      initiatedByAck: 'InitiatedByAck',
      options: 'Options',
      otsDetail: 'OtsDetail',
      restoreType: 'RestoreType',
      snapshotHash: 'SnapshotHash',
      snapshotId: 'SnapshotId',
      sourceType: 'SourceType',
      targetBucket: 'TargetBucket',
      targetContainer: 'TargetContainer',
      targetContainerClusterId: 'TargetContainerClusterId',
      targetCreateTime: 'TargetCreateTime',
      targetFileSystemId: 'TargetFileSystemId',
      targetInstanceId: 'TargetInstanceId',
      targetInstanceName: 'TargetInstanceName',
      targetPath: 'TargetPath',
      targetPrefix: 'TargetPrefix',
      targetTableName: 'TargetTableName',
      targetTime: 'TargetTime',
      udmDetail: 'UdmDetail',
      udmRegionId: 'UdmRegionId',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      crossAccountRoleName: 'string',
      crossAccountType: 'string',
      crossAccountUserId: 'number',
      exclude: 'string',
      failbackDetail: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      include: 'string',
      initiatedByAck: 'boolean',
      options: 'string',
      otsDetail: OtsTableRestoreDetail,
      restoreType: 'string',
      snapshotHash: 'string',
      snapshotId: 'string',
      sourceType: 'string',
      targetBucket: 'string',
      targetContainer: 'string',
      targetContainerClusterId: 'string',
      targetCreateTime: 'number',
      targetFileSystemId: 'string',
      targetInstanceId: 'string',
      targetInstanceName: 'string',
      targetPath: 'string',
      targetPrefix: 'string',
      targetTableName: 'string',
      targetTime: 'number',
      udmDetail: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      udmRegionId: 'string',
      vaultId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRestoreJobShrinkRequest extends $tea.Model {
  crossAccountRoleName?: string;
  crossAccountType?: string;
  crossAccountUserId?: number;
  exclude?: string;
  failbackDetailShrink?: string;
  include?: string;
  initiatedByAck?: boolean;
  options?: string;
  otsDetailShrink?: string;
  restoreType?: string;
  snapshotHash?: string;
  snapshotId?: string;
  sourceType?: string;
  targetBucket?: string;
  targetContainer?: string;
  targetContainerClusterId?: string;
  targetCreateTime?: number;
  targetFileSystemId?: string;
  targetInstanceId?: string;
  targetInstanceName?: string;
  targetPath?: string;
  targetPrefix?: string;
  targetTableName?: string;
  targetTime?: number;
  udmDetailShrink?: string;
  udmRegionId?: string;
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      crossAccountRoleName: 'CrossAccountRoleName',
      crossAccountType: 'CrossAccountType',
      crossAccountUserId: 'CrossAccountUserId',
      exclude: 'Exclude',
      failbackDetailShrink: 'FailbackDetail',
      include: 'Include',
      initiatedByAck: 'InitiatedByAck',
      options: 'Options',
      otsDetailShrink: 'OtsDetail',
      restoreType: 'RestoreType',
      snapshotHash: 'SnapshotHash',
      snapshotId: 'SnapshotId',
      sourceType: 'SourceType',
      targetBucket: 'TargetBucket',
      targetContainer: 'TargetContainer',
      targetContainerClusterId: 'TargetContainerClusterId',
      targetCreateTime: 'TargetCreateTime',
      targetFileSystemId: 'TargetFileSystemId',
      targetInstanceId: 'TargetInstanceId',
      targetInstanceName: 'TargetInstanceName',
      targetPath: 'TargetPath',
      targetPrefix: 'TargetPrefix',
      targetTableName: 'TargetTableName',
      targetTime: 'TargetTime',
      udmDetailShrink: 'UdmDetail',
      udmRegionId: 'UdmRegionId',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      crossAccountRoleName: 'string',
      crossAccountType: 'string',
      crossAccountUserId: 'number',
      exclude: 'string',
      failbackDetailShrink: 'string',
      include: 'string',
      initiatedByAck: 'boolean',
      options: 'string',
      otsDetailShrink: 'string',
      restoreType: 'string',
      snapshotHash: 'string',
      snapshotId: 'string',
      sourceType: 'string',
      targetBucket: 'string',
      targetContainer: 'string',
      targetContainerClusterId: 'string',
      targetCreateTime: 'number',
      targetFileSystemId: 'string',
      targetInstanceId: 'string',
      targetInstanceName: 'string',
      targetPath: 'string',
      targetPrefix: 'string',
      targetTableName: 'string',
      targetTime: 'number',
      udmDetailShrink: 'string',
      udmRegionId: 'string',
      vaultId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRestoreJobResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  restoreId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      restoreId: 'RestoreId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      restoreId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRestoreJobResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateRestoreJobResponseBody;
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
      body: CreateRestoreJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTempFileUploadUrlRequest extends $tea.Model {
  fileName?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTempFileUploadUrlResponseBody extends $tea.Model {
  bucketName?: string;
  code?: string;
  endpoint?: string;
  expireTime?: number;
  message?: string;
  ossAccessKeyId?: string;
  policy?: string;
  requestId?: string;
  signature?: string;
  success?: boolean;
  tempFileKey?: string;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'BucketName',
      code: 'Code',
      endpoint: 'Endpoint',
      expireTime: 'ExpireTime',
      message: 'Message',
      ossAccessKeyId: 'OssAccessKeyId',
      policy: 'Policy',
      requestId: 'RequestId',
      signature: 'Signature',
      success: 'Success',
      tempFileKey: 'TempFileKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      code: 'string',
      endpoint: 'string',
      expireTime: 'number',
      message: 'string',
      ossAccessKeyId: 'string',
      policy: 'string',
      requestId: 'string',
      signature: 'string',
      success: 'boolean',
      tempFileKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTempFileUploadUrlResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateTempFileUploadUrlResponseBody;
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
      body: CreateTempFileUploadUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVaultRequest extends $tea.Model {
  description?: string;
  encryptType?: string;
  kmsKeyId?: string;
  vaultName?: string;
  vaultRegionId?: string;
  vaultStorageClass?: string;
  vaultType?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      encryptType: 'EncryptType',
      kmsKeyId: 'KmsKeyId',
      vaultName: 'VaultName',
      vaultRegionId: 'VaultRegionId',
      vaultStorageClass: 'VaultStorageClass',
      vaultType: 'VaultType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      encryptType: 'string',
      kmsKeyId: 'string',
      vaultName: 'string',
      vaultRegionId: 'string',
      vaultStorageClass: 'string',
      vaultType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVaultResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  taskId?: string;
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      taskId: 'TaskId',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      taskId: 'string',
      vaultId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVaultResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateVaultResponseBody;
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
      body: CreateVaultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBackupClientRequest extends $tea.Model {
  clientId?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBackupClientResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBackupClientResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteBackupClientResponseBody;
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
      body: DeleteBackupClientResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBackupClientResourceRequest extends $tea.Model {
  clientIds?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      clientIds: 'ClientIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIds: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBackupClientResourceShrinkRequest extends $tea.Model {
  clientIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      clientIdsShrink: 'ClientIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIdsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBackupClientResourceResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBackupClientResourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteBackupClientResourceResponseBody;
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
      body: DeleteBackupClientResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBackupPlanRequest extends $tea.Model {
  planId?: string;
  requireNoRunningJobs?: boolean;
  sourceType?: string;
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      planId: 'PlanId',
      requireNoRunningJobs: 'RequireNoRunningJobs',
      sourceType: 'SourceType',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      planId: 'string',
      requireNoRunningJobs: 'boolean',
      sourceType: 'string',
      vaultId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBackupPlanResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBackupPlanResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteBackupPlanResponseBody;
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
      body: DeleteBackupPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteClientRequest extends $tea.Model {
  clientId?: string;
  resourceGroupId?: string;
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      resourceGroupId: 'ResourceGroupId',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      resourceGroupId: 'string',
      vaultId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteClientResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteClientResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteClientResponseBody;
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
      body: DeleteClientResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHanaBackupPlanRequest extends $tea.Model {
  clusterId?: string;
  planId?: string;
  resourceGroupId?: string;
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      planId: 'PlanId',
      resourceGroupId: 'ResourceGroupId',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      planId: 'string',
      resourceGroupId: 'string',
      vaultId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHanaBackupPlanResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHanaBackupPlanResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteHanaBackupPlanResponseBody;
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
      body: DeleteHanaBackupPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHanaInstanceRequest extends $tea.Model {
  clusterId?: string;
  resourceGroupId?: string;
  sid?: string;
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      resourceGroupId: 'ResourceGroupId',
      sid: 'Sid',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      resourceGroupId: 'string',
      sid: 'string',
      vaultId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHanaInstanceResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHanaInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteHanaInstanceResponseBody;
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
      body: DeleteHanaInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePolicyBindingRequest extends $tea.Model {
  dataSourceIds?: string[];
  policyId?: string;
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceIds: 'DataSourceIds',
      policyId: 'PolicyId',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceIds: { 'type': 'array', 'itemType': 'string' },
      policyId: 'string',
      sourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePolicyBindingShrinkRequest extends $tea.Model {
  dataSourceIdsShrink?: string;
  policyId?: string;
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceIdsShrink: 'DataSourceIds',
      policyId: 'PolicyId',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceIdsShrink: 'string',
      policyId: 'string',
      sourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePolicyBindingResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePolicyBindingResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeletePolicyBindingResponseBody;
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
      body: DeletePolicyBindingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePolicyV2Request extends $tea.Model {
  policyId?: string;
  static names(): { [key: string]: string } {
    return {
      policyId: 'PolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePolicyV2ResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePolicyV2Response extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeletePolicyV2ResponseBody;
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
      body: DeletePolicyV2ResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSnapshotRequest extends $tea.Model {
  clientId?: string;
  force?: boolean;
  instanceId?: string;
  snapshotId?: string;
  sourceType?: string;
  token?: string;
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      force: 'Force',
      instanceId: 'InstanceId',
      snapshotId: 'SnapshotId',
      sourceType: 'SourceType',
      token: 'Token',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      force: 'boolean',
      instanceId: 'string',
      snapshotId: 'string',
      sourceType: 'string',
      token: 'string',
      vaultId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSnapshotResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSnapshotResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteSnapshotResponseBody;
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
      body: DeleteSnapshotResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVaultRequest extends $tea.Model {
  resourceGroupId?: string;
  token?: string;
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'ResourceGroupId',
      token: 'Token',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupId: 'string',
      token: 'string',
      vaultId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVaultResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVaultResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteVaultResponseBody;
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
      body: DeleteVaultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupClientsRequest extends $tea.Model {
  clientIds?: string[];
  clientType?: string;
  clusterId?: string;
  crossAccountRoleName?: string;
  crossAccountType?: string;
  crossAccountUserId?: number;
  instanceIds?: string[];
  pageNumber?: number;
  pageSize?: number;
  tag?: DescribeBackupClientsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      clientIds: 'ClientIds',
      clientType: 'ClientType',
      clusterId: 'ClusterId',
      crossAccountRoleName: 'CrossAccountRoleName',
      crossAccountType: 'CrossAccountType',
      crossAccountUserId: 'CrossAccountUserId',
      instanceIds: 'InstanceIds',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIds: { 'type': 'array', 'itemType': 'string' },
      clientType: 'string',
      clusterId: 'string',
      crossAccountRoleName: 'string',
      crossAccountType: 'string',
      crossAccountUserId: 'number',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      pageNumber: 'number',
      pageSize: 'number',
      tag: { 'type': 'array', 'itemType': DescribeBackupClientsRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupClientsShrinkRequest extends $tea.Model {
  clientIdsShrink?: string;
  clientType?: string;
  clusterId?: string;
  crossAccountRoleName?: string;
  crossAccountType?: string;
  crossAccountUserId?: number;
  instanceIdsShrink?: string;
  pageNumber?: number;
  pageSize?: number;
  tag?: DescribeBackupClientsShrinkRequestTag[];
  static names(): { [key: string]: string } {
    return {
      clientIdsShrink: 'ClientIds',
      clientType: 'ClientType',
      clusterId: 'ClusterId',
      crossAccountRoleName: 'CrossAccountRoleName',
      crossAccountType: 'CrossAccountType',
      crossAccountUserId: 'CrossAccountUserId',
      instanceIdsShrink: 'InstanceIds',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIdsShrink: 'string',
      clientType: 'string',
      clusterId: 'string',
      crossAccountRoleName: 'string',
      crossAccountType: 'string',
      crossAccountUserId: 'number',
      instanceIdsShrink: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      tag: { 'type': 'array', 'itemType': DescribeBackupClientsShrinkRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupClientsResponseBody extends $tea.Model {
  clients?: DescribeBackupClientsResponseBodyClients[];
  code?: string;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      clients: 'Clients',
      code: 'Code',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clients: { 'type': 'array', 'itemType': DescribeBackupClientsResponseBodyClients },
      code: 'string',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupClientsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeBackupClientsResponseBody;
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
      body: DescribeBackupClientsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupJobs2Request extends $tea.Model {
  filters?: DescribeBackupJobs2RequestFilters[];
  pageNumber?: number;
  pageSize?: number;
  sortDirection?: string;
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      filters: 'Filters',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sortDirection: 'SortDirection',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filters: { 'type': 'array', 'itemType': DescribeBackupJobs2RequestFilters },
      pageNumber: 'number',
      pageSize: 'number',
      sortDirection: 'string',
      sourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupJobs2ResponseBody extends $tea.Model {
  backupJobs?: DescribeBackupJobs2ResponseBodyBackupJobs;
  code?: string;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      backupJobs: 'BackupJobs',
      code: 'Code',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupJobs: DescribeBackupJobs2ResponseBodyBackupJobs,
      code: 'string',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupJobs2Response extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeBackupJobs2ResponseBody;
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
      body: DescribeBackupJobs2ResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPlansRequest extends $tea.Model {
  filters?: DescribeBackupPlansRequestFilters[];
  pageNumber?: number;
  pageSize?: number;
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      filters: 'Filters',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filters: { 'type': 'array', 'itemType': DescribeBackupPlansRequestFilters },
      pageNumber: 'number',
      pageSize: 'number',
      sourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPlansResponseBody extends $tea.Model {
  backupPlans?: DescribeBackupPlansResponseBodyBackupPlans;
  code?: string;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      backupPlans: 'BackupPlans',
      code: 'Code',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPlans: DescribeBackupPlansResponseBodyBackupPlans,
      code: 'string',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPlansResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeBackupPlansResponseBody;
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
      body: DescribeBackupPlansResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClientsRequest extends $tea.Model {
  clientId?: string;
  clientType?: string;
  clusterId?: string;
  pageNumber?: number;
  pageSize?: number;
  resourceGroupId?: string;
  sourceType?: string;
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      clientType: 'ClientType',
      clusterId: 'ClusterId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceGroupId: 'ResourceGroupId',
      sourceType: 'SourceType',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      clientType: 'string',
      clusterId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
      sourceType: 'string',
      vaultId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClientsResponseBody extends $tea.Model {
  clients?: DescribeClientsResponseBodyClients;
  code?: string;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      clients: 'Clients',
      code: 'Code',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clients: DescribeClientsResponseBodyClients,
      code: 'string',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClientsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeClientsResponseBody;
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
      body: DescribeClientsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerClusterRequest extends $tea.Model {
  clusterId?: string;
  identifier?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      identifier: 'Identifier',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      identifier: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerClusterResponseBody extends $tea.Model {
  clusters?: DescribeContainerClusterResponseBodyClusters[];
  code?: string;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      clusters: 'Clusters',
      code: 'Code',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusters: { 'type': 'array', 'itemType': DescribeContainerClusterResponseBodyClusters },
      code: 'string',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerClusterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeContainerClusterResponseBody;
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
      body: DescribeContainerClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCrossAccountsRequest extends $tea.Model {
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

export class DescribeCrossAccountsResponseBody extends $tea.Model {
  code?: string;
  crossAccounts?: DescribeCrossAccountsResponseBodyCrossAccounts;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      crossAccounts: 'CrossAccounts',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      crossAccounts: DescribeCrossAccountsResponseBodyCrossAccounts,
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCrossAccountsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeCrossAccountsResponseBody;
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
      body: DescribeCrossAccountsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHanaBackupPlansRequest extends $tea.Model {
  clusterId?: string;
  databaseName?: string;
  pageNumber?: number;
  pageSize?: number;
  resourceGroupId?: string;
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      databaseName: 'DatabaseName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceGroupId: 'ResourceGroupId',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      databaseName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
      vaultId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHanaBackupPlansResponseBody extends $tea.Model {
  code?: string;
  hanaBackupPlans?: DescribeHanaBackupPlansResponseBodyHanaBackupPlans;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      hanaBackupPlans: 'HanaBackupPlans',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      hanaBackupPlans: DescribeHanaBackupPlansResponseBodyHanaBackupPlans,
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHanaBackupPlansResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeHanaBackupPlansResponseBody;
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
      body: DescribeHanaBackupPlansResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHanaBackupSettingRequest extends $tea.Model {
  clusterId?: string;
  databaseName?: string;
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      databaseName: 'DatabaseName',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      databaseName: 'string',
      vaultId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHanaBackupSettingResponseBody extends $tea.Model {
  code?: string;
  hanaBackupSetting?: DescribeHanaBackupSettingResponseBodyHanaBackupSetting;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      hanaBackupSetting: 'HanaBackupSetting',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      hanaBackupSetting: DescribeHanaBackupSettingResponseBodyHanaBackupSetting,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHanaBackupSettingResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeHanaBackupSettingResponseBody;
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
      body: DescribeHanaBackupSettingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHanaBackupsAsyncRequest extends $tea.Model {
  clusterId?: string;
  databaseName?: string;
  includeDifferential?: boolean;
  includeIncremental?: boolean;
  includeLog?: boolean;
  logPosition?: number;
  mode?: string;
  pageNumber?: number;
  pageSize?: number;
  recoveryPointInTime?: number;
  resourceGroupId?: string;
  source?: string;
  sourceClusterId?: string;
  systemCopy?: boolean;
  useBackint?: boolean;
  vaultId?: string;
  volumeId?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      databaseName: 'DatabaseName',
      includeDifferential: 'IncludeDifferential',
      includeIncremental: 'IncludeIncremental',
      includeLog: 'IncludeLog',
      logPosition: 'LogPosition',
      mode: 'Mode',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      recoveryPointInTime: 'RecoveryPointInTime',
      resourceGroupId: 'ResourceGroupId',
      source: 'Source',
      sourceClusterId: 'SourceClusterId',
      systemCopy: 'SystemCopy',
      useBackint: 'UseBackint',
      vaultId: 'VaultId',
      volumeId: 'VolumeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      databaseName: 'string',
      includeDifferential: 'boolean',
      includeIncremental: 'boolean',
      includeLog: 'boolean',
      logPosition: 'number',
      mode: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      recoveryPointInTime: 'number',
      resourceGroupId: 'string',
      source: 'string',
      sourceClusterId: 'string',
      systemCopy: 'boolean',
      useBackint: 'boolean',
      vaultId: 'string',
      volumeId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHanaBackupsAsyncResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHanaBackupsAsyncResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeHanaBackupsAsyncResponseBody;
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
      body: DescribeHanaBackupsAsyncResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHanaDatabasesRequest extends $tea.Model {
  clusterId?: string;
  pageNumber?: number;
  pageSize?: number;
  resourceGroupId?: string;
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceGroupId: 'ResourceGroupId',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
      vaultId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHanaDatabasesResponseBody extends $tea.Model {
  code?: string;
  hanaDatabases?: DescribeHanaDatabasesResponseBodyHanaDatabases;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      hanaDatabases: 'HanaDatabases',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      hanaDatabases: DescribeHanaDatabasesResponseBodyHanaDatabases,
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHanaDatabasesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeHanaDatabasesResponseBody;
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
      body: DescribeHanaDatabasesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHanaInstancesRequest extends $tea.Model {
  clusterId?: string;
  pageNumber?: number;
  pageSize?: number;
  resourceGroupId?: string;
  tag?: DescribeHanaInstancesRequestTag[];
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceGroupId: 'ResourceGroupId',
      tag: 'Tag',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': DescribeHanaInstancesRequestTag },
      vaultId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHanaInstancesResponseBody extends $tea.Model {
  code?: string;
  hanas?: DescribeHanaInstancesResponseBodyHanas;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      hanas: 'Hanas',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      hanas: DescribeHanaInstancesResponseBodyHanas,
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHanaInstancesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeHanaInstancesResponseBody;
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
      body: DescribeHanaInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHanaRestoresRequest extends $tea.Model {
  backupId?: number;
  clusterId?: string;
  databaseName?: string;
  pageNumber?: number;
  pageSize?: number;
  resourceGroupId?: string;
  restoreId?: string;
  restoreStatus?: string;
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      backupId: 'BackupId',
      clusterId: 'ClusterId',
      databaseName: 'DatabaseName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceGroupId: 'ResourceGroupId',
      restoreId: 'RestoreId',
      restoreStatus: 'RestoreStatus',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupId: 'number',
      clusterId: 'string',
      databaseName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
      restoreId: 'string',
      restoreStatus: 'string',
      vaultId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHanaRestoresResponseBody extends $tea.Model {
  code?: string;
  hanaRestore?: DescribeHanaRestoresResponseBodyHanaRestore;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      hanaRestore: 'HanaRestore',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      hanaRestore: DescribeHanaRestoresResponseBodyHanaRestore,
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHanaRestoresResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeHanaRestoresResponseBody;
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
      body: DescribeHanaRestoresResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHanaRetentionSettingRequest extends $tea.Model {
  clusterId?: string;
  databaseName?: string;
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      databaseName: 'DatabaseName',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      databaseName: 'string',
      vaultId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHanaRetentionSettingResponseBody extends $tea.Model {
  clusterId?: string;
  code?: string;
  databaseName?: string;
  disabled?: boolean;
  message?: string;
  requestId?: string;
  retentionDays?: number;
  schedule?: string;
  success?: boolean;
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      code: 'Code',
      databaseName: 'DatabaseName',
      disabled: 'Disabled',
      message: 'Message',
      requestId: 'RequestId',
      retentionDays: 'RetentionDays',
      schedule: 'Schedule',
      success: 'Success',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      code: 'string',
      databaseName: 'string',
      disabled: 'boolean',
      message: 'string',
      requestId: 'string',
      retentionDays: 'number',
      schedule: 'string',
      success: 'boolean',
      vaultId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHanaRetentionSettingResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeHanaRetentionSettingResponseBody;
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
      body: DescribeHanaRetentionSettingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOtsTableSnapshotsRequest extends $tea.Model {
  crossAccountRoleName?: string;
  crossAccountType?: string;
  crossAccountUserId?: number;
  endTime?: number;
  limit?: number;
  nextToken?: string;
  otsInstances?: DescribeOtsTableSnapshotsRequestOtsInstances[];
  snapshotIds?: string[];
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      crossAccountRoleName: 'CrossAccountRoleName',
      crossAccountType: 'CrossAccountType',
      crossAccountUserId: 'CrossAccountUserId',
      endTime: 'EndTime',
      limit: 'Limit',
      nextToken: 'NextToken',
      otsInstances: 'OtsInstances',
      snapshotIds: 'SnapshotIds',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      crossAccountRoleName: 'string',
      crossAccountType: 'string',
      crossAccountUserId: 'number',
      endTime: 'number',
      limit: 'number',
      nextToken: 'string',
      otsInstances: { 'type': 'array', 'itemType': DescribeOtsTableSnapshotsRequestOtsInstances },
      snapshotIds: { 'type': 'array', 'itemType': 'string' },
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOtsTableSnapshotsResponseBody extends $tea.Model {
  code?: string;
  limit?: number;
  message?: string;
  nextToken?: string;
  requestId?: string;
  snapshots?: DescribeOtsTableSnapshotsResponseBodySnapshots[];
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      limit: 'Limit',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      snapshots: 'Snapshots',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      limit: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      snapshots: { 'type': 'array', 'itemType': DescribeOtsTableSnapshotsResponseBodySnapshots },
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOtsTableSnapshotsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeOtsTableSnapshotsResponseBody;
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
      body: DescribeOtsTableSnapshotsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePoliciesV2Request extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  policyId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      policyId: 'PolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      policyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePoliciesV2ResponseBody extends $tea.Model {
  code?: string;
  maxResults?: number;
  message?: string;
  nextToken?: string;
  policies?: DescribePoliciesV2ResponseBodyPolicies[];
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      maxResults: 'MaxResults',
      message: 'Message',
      nextToken: 'NextToken',
      policies: 'Policies',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      policies: { 'type': 'array', 'itemType': DescribePoliciesV2ResponseBodyPolicies },
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePoliciesV2Response extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribePoliciesV2ResponseBody;
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
      body: DescribePoliciesV2ResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyBindingsRequest extends $tea.Model {
  dataSourceIds?: string[];
  filters?: DescribePolicyBindingsRequestFilters[];
  maxResults?: number;
  nextToken?: string;
  policyId?: string;
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceIds: 'DataSourceIds',
      filters: 'Filters',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      policyId: 'PolicyId',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceIds: { 'type': 'array', 'itemType': 'string' },
      filters: { 'type': 'array', 'itemType': DescribePolicyBindingsRequestFilters },
      maxResults: 'number',
      nextToken: 'string',
      policyId: 'string',
      sourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyBindingsShrinkRequest extends $tea.Model {
  dataSourceIdsShrink?: string;
  filters?: DescribePolicyBindingsShrinkRequestFilters[];
  maxResults?: number;
  nextToken?: string;
  policyId?: string;
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceIdsShrink: 'DataSourceIds',
      filters: 'Filters',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      policyId: 'PolicyId',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceIdsShrink: 'string',
      filters: { 'type': 'array', 'itemType': DescribePolicyBindingsShrinkRequestFilters },
      maxResults: 'number',
      nextToken: 'string',
      policyId: 'string',
      sourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyBindingsResponseBody extends $tea.Model {
  code?: string;
  maxResults?: number;
  message?: string;
  nextToken?: string;
  policyBindings?: DescribePolicyBindingsResponseBodyPolicyBindings[];
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      maxResults: 'MaxResults',
      message: 'Message',
      nextToken: 'NextToken',
      policyBindings: 'PolicyBindings',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      policyBindings: { 'type': 'array', 'itemType': DescribePolicyBindingsResponseBodyPolicyBindings },
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyBindingsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribePolicyBindingsResponseBody;
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
      body: DescribePolicyBindingsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecoverableOtsInstancesRequest extends $tea.Model {
  crossAccountRoleName?: string;
  crossAccountType?: string;
  crossAccountUserId?: number;
  static names(): { [key: string]: string } {
    return {
      crossAccountRoleName: 'CrossAccountRoleName',
      crossAccountType: 'CrossAccountType',
      crossAccountUserId: 'CrossAccountUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      crossAccountRoleName: 'string',
      crossAccountType: 'string',
      crossAccountUserId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecoverableOtsInstancesResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  otsInstances?: DescribeRecoverableOtsInstancesResponseBodyOtsInstances[];
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      otsInstances: 'OtsInstances',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      otsInstances: { 'type': 'array', 'itemType': DescribeRecoverableOtsInstancesResponseBodyOtsInstances },
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecoverableOtsInstancesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRecoverableOtsInstancesResponseBody;
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
      body: DescribeRecoverableOtsInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsRequest extends $tea.Model {
  needVaultCount?: boolean;
  static names(): { [key: string]: string } {
    return {
      needVaultCount: 'NeedVaultCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      needVaultCount: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  regions?: DescribeRegionsResponseBodyRegions;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      regions: 'Regions',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      regions: DescribeRegionsResponseBodyRegions,
      requestId: 'string',
      success: 'boolean',
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

export class DescribeRestoreJobs2Request extends $tea.Model {
  filters?: DescribeRestoreJobs2RequestFilters[];
  pageNumber?: number;
  pageSize?: number;
  restoreType?: string;
  static names(): { [key: string]: string } {
    return {
      filters: 'Filters',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      restoreType: 'RestoreType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filters: { 'type': 'array', 'itemType': DescribeRestoreJobs2RequestFilters },
      pageNumber: 'number',
      pageSize: 'number',
      restoreType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreJobs2ResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  restoreJobs?: DescribeRestoreJobs2ResponseBodyRestoreJobs;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      restoreJobs: 'RestoreJobs',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      restoreJobs: DescribeRestoreJobs2ResponseBodyRestoreJobs,
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreJobs2Response extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRestoreJobs2ResponseBody;
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
      body: DescribeRestoreJobs2ResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTaskRequest extends $tea.Model {
  resourceGroupId?: string;
  taskId?: string;
  token?: string;
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'ResourceGroupId',
      taskId: 'TaskId',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupId: 'string',
      taskId: 'string',
      token: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTaskResponseBody extends $tea.Model {
  code?: string;
  completedTime?: number;
  createdTime?: number;
  description?: string;
  message?: string;
  name?: string;
  progress?: number;
  requestId?: string;
  result?: string;
  success?: boolean;
  updatedTime?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      completedTime: 'CompletedTime',
      createdTime: 'CreatedTime',
      description: 'Description',
      message: 'Message',
      name: 'Name',
      progress: 'Progress',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
      updatedTime: 'UpdatedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      completedTime: 'number',
      createdTime: 'number',
      description: 'string',
      message: 'string',
      name: 'string',
      progress: 'number',
      requestId: 'string',
      result: 'string',
      success: 'boolean',
      updatedTime: 'number',
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

export class DescribeUdmSnapshotsRequest extends $tea.Model {
  diskId?: string;
  endTime?: number;
  instanceId?: string;
  jobId?: string;
  snapshotIds?: { [key: string]: any };
  sourceType?: string;
  startTime?: number;
  udmRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      diskId: 'DiskId',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      snapshotIds: 'SnapshotIds',
      sourceType: 'SourceType',
      startTime: 'StartTime',
      udmRegionId: 'UdmRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskId: 'string',
      endTime: 'number',
      instanceId: 'string',
      jobId: 'string',
      snapshotIds: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      sourceType: 'string',
      startTime: 'number',
      udmRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUdmSnapshotsShrinkRequest extends $tea.Model {
  diskId?: string;
  endTime?: number;
  instanceId?: string;
  jobId?: string;
  snapshotIdsShrink?: string;
  sourceType?: string;
  startTime?: number;
  udmRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      diskId: 'DiskId',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      snapshotIdsShrink: 'SnapshotIds',
      sourceType: 'SourceType',
      startTime: 'StartTime',
      udmRegionId: 'UdmRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskId: 'string',
      endTime: 'number',
      instanceId: 'string',
      jobId: 'string',
      snapshotIdsShrink: 'string',
      sourceType: 'string',
      startTime: 'number',
      udmRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUdmSnapshotsResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  snapshots?: DescribeUdmSnapshotsResponseBodySnapshots[];
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      snapshots: 'Snapshots',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      snapshots: { 'type': 'array', 'itemType': DescribeUdmSnapshotsResponseBodySnapshots },
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUdmSnapshotsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeUdmSnapshotsResponseBody;
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
      body: DescribeUdmSnapshotsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVaultReplicationRegionsRequest extends $tea.Model {
  token?: string;
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      token: 'Token',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      token: 'string',
      vaultId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVaultReplicationRegionsResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  regions?: DescribeVaultReplicationRegionsResponseBodyRegions;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      regions: 'Regions',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      regions: DescribeVaultReplicationRegionsResponseBodyRegions,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVaultReplicationRegionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeVaultReplicationRegionsResponseBody;
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
      body: DescribeVaultReplicationRegionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVaultsRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  resourceGroupId?: string;
  status?: string;
  tag?: DescribeVaultsRequestTag[];
  vaultId?: string;
  vaultRegionId?: string;
  vaultType?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      tag: 'Tag',
      vaultId: 'VaultId',
      vaultRegionId: 'VaultRegionId',
      vaultType: 'VaultType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
      status: 'string',
      tag: { 'type': 'array', 'itemType': DescribeVaultsRequestTag },
      vaultId: 'string',
      vaultRegionId: 'string',
      vaultType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVaultsResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  vaults?: DescribeVaultsResponseBodyVaults;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
      vaults: 'Vaults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
      vaults: DescribeVaultsResponseBodyVaults,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVaultsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeVaultsResponseBody;
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
      body: DescribeVaultsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachNasFileSystemRequest extends $tea.Model {
  createTime?: string;
  crossAccountRoleName?: string;
  crossAccountType?: string;
  crossAccountUserId?: number;
  fileSystemId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      crossAccountRoleName: 'CrossAccountRoleName',
      crossAccountType: 'CrossAccountType',
      crossAccountUserId: 'CrossAccountUserId',
      fileSystemId: 'FileSystemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      crossAccountRoleName: 'string',
      crossAccountType: 'string',
      crossAccountUserId: 'number',
      fileSystemId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachNasFileSystemResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachNasFileSystemResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DetachNasFileSystemResponseBody;
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
      body: DetachNasFileSystemResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableBackupPlanRequest extends $tea.Model {
  planId?: string;
  sourceType?: string;
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      planId: 'PlanId',
      sourceType: 'SourceType',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      planId: 'string',
      sourceType: 'string',
      vaultId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableBackupPlanResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableBackupPlanResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DisableBackupPlanResponseBody;
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
      body: DisableBackupPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableHanaBackupPlanRequest extends $tea.Model {
  clusterId?: string;
  planId?: string;
  resourceGroupId?: string;
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      planId: 'PlanId',
      resourceGroupId: 'ResourceGroupId',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      planId: 'string',
      resourceGroupId: 'string',
      vaultId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableHanaBackupPlanResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableHanaBackupPlanResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DisableHanaBackupPlanResponseBody;
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
      body: DisableHanaBackupPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableBackupPlanRequest extends $tea.Model {
  planId?: string;
  sourceType?: string;
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      planId: 'PlanId',
      sourceType: 'SourceType',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      planId: 'string',
      sourceType: 'string',
      vaultId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableBackupPlanResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableBackupPlanResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EnableBackupPlanResponseBody;
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
      body: EnableBackupPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableHanaBackupPlanRequest extends $tea.Model {
  clusterId?: string;
  planId?: string;
  resourceGroupId?: string;
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      planId: 'PlanId',
      resourceGroupId: 'ResourceGroupId',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      planId: 'string',
      resourceGroupId: 'string',
      vaultId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableHanaBackupPlanResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableHanaBackupPlanResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EnableHanaBackupPlanResponseBody;
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
      body: EnableHanaBackupPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteBackupPlanRequest extends $tea.Model {
  planId?: string;
  ruleId?: string;
  sourceType?: string;
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      planId: 'PlanId',
      ruleId: 'RuleId',
      sourceType: 'SourceType',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      planId: 'string',
      ruleId: 'string',
      sourceType: 'string',
      vaultId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteBackupPlanResponseBody extends $tea.Model {
  code?: string;
  jobId?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      jobId: 'JobId',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      jobId: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteBackupPlanResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ExecuteBackupPlanResponseBody;
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
      body: ExecuteBackupPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecutePolicyV2Request extends $tea.Model {
  dataSourceId?: string;
  policyId?: string;
  ruleId?: string;
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceId: 'DataSourceId',
      policyId: 'PolicyId',
      ruleId: 'RuleId',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceId: 'string',
      policyId: 'string',
      ruleId: 'string',
      sourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecutePolicyV2ResponseBody extends $tea.Model {
  code?: string;
  jobId?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      jobId: 'JobId',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      jobId: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecutePolicyV2Response extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ExecutePolicyV2ResponseBody;
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
      body: ExecutePolicyV2ResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateRamPolicyRequest extends $tea.Model {
  actionType?: string;
  requireBasePolicy?: boolean;
  resourceGroupId?: string;
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      actionType: 'ActionType',
      requireBasePolicy: 'RequireBasePolicy',
      resourceGroupId: 'ResourceGroupId',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionType: 'string',
      requireBasePolicy: 'boolean',
      resourceGroupId: 'string',
      vaultId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateRamPolicyResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  policyDocument?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      policyDocument: 'PolicyDocument',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      policyDocument: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateRamPolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GenerateRamPolicyResponseBody;
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
      body: GenerateRamPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTempFileDownloadLinkRequest extends $tea.Model {
  tempFileKey?: string;
  static names(): { [key: string]: string } {
    return {
      tempFileKey: 'TempFileKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tempFileKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTempFileDownloadLinkResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTempFileDownloadLinkResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTempFileDownloadLinkResponseBody;
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
      body: GetTempFileDownloadLinkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallBackupClientsRequest extends $tea.Model {
  crossAccountRoleName?: string;
  crossAccountType?: string;
  crossAccountUserId?: number;
  instanceIds?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      crossAccountRoleName: 'CrossAccountRoleName',
      crossAccountType: 'CrossAccountType',
      crossAccountUserId: 'CrossAccountUserId',
      instanceIds: 'InstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      crossAccountRoleName: 'string',
      crossAccountType: 'string',
      crossAccountUserId: 'number',
      instanceIds: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallBackupClientsShrinkRequest extends $tea.Model {
  crossAccountRoleName?: string;
  crossAccountType?: string;
  crossAccountUserId?: number;
  instanceIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      crossAccountRoleName: 'CrossAccountRoleName',
      crossAccountType: 'CrossAccountType',
      crossAccountUserId: 'CrossAccountUserId',
      instanceIdsShrink: 'InstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      crossAccountRoleName: 'string',
      crossAccountType: 'string',
      crossAccountUserId: 'number',
      instanceIdsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallBackupClientsResponseBody extends $tea.Model {
  code?: string;
  instanceStatuses?: InstallBackupClientsResponseBodyInstanceStatuses[];
  message?: string;
  requestId?: string;
  success?: boolean;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      instanceStatuses: 'InstanceStatuses',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      instanceStatuses: { 'type': 'array', 'itemType': InstallBackupClientsResponseBodyInstanceStatuses },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallBackupClientsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: InstallBackupClientsResponseBody;
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
      body: InstallBackupClientsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenHbrServiceResponseBody extends $tea.Model {
  orderId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenHbrServiceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: OpenHbrServiceResponseBody;
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
      body: OpenHbrServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchHistoricalSnapshotsRequest extends $tea.Model {
  limit?: number;
  nextToken?: string;
  order?: string;
  query?: any[];
  sortBy?: string;
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      limit: 'Limit',
      nextToken: 'NextToken',
      order: 'Order',
      query: 'Query',
      sortBy: 'SortBy',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: 'number',
      nextToken: 'string',
      order: 'string',
      query: { 'type': 'array', 'itemType': 'any' },
      sortBy: 'string',
      sourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchHistoricalSnapshotsShrinkRequest extends $tea.Model {
  limit?: number;
  nextToken?: string;
  order?: string;
  queryShrink?: string;
  sortBy?: string;
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      limit: 'Limit',
      nextToken: 'NextToken',
      order: 'Order',
      queryShrink: 'Query',
      sortBy: 'SortBy',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: 'number',
      nextToken: 'string',
      order: 'string',
      queryShrink: 'string',
      sortBy: 'string',
      sourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchHistoricalSnapshotsResponseBody extends $tea.Model {
  code?: string;
  limit?: number;
  message?: string;
  nextToken?: string;
  requestId?: string;
  snapshots?: SearchHistoricalSnapshotsResponseBodySnapshots;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      limit: 'Limit',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      snapshots: 'Snapshots',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      limit: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      snapshots: SearchHistoricalSnapshotsResponseBodySnapshots,
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchHistoricalSnapshotsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SearchHistoricalSnapshotsResponseBody;
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
      body: SearchHistoricalSnapshotsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartHanaDatabaseAsyncRequest extends $tea.Model {
  clusterId?: string;
  databaseName?: string;
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      databaseName: 'DatabaseName',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      databaseName: 'string',
      vaultId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartHanaDatabaseAsyncResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartHanaDatabaseAsyncResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartHanaDatabaseAsyncResponseBody;
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
      body: StartHanaDatabaseAsyncResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopHanaDatabaseAsyncRequest extends $tea.Model {
  clusterId?: string;
  databaseName?: string;
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      databaseName: 'DatabaseName',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      databaseName: 'string',
      vaultId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopHanaDatabaseAsyncResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopHanaDatabaseAsyncResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopHanaDatabaseAsyncResponseBody;
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
      body: StopHanaDatabaseAsyncResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UninstallBackupClientsRequest extends $tea.Model {
  clientIds?: { [key: string]: any };
  crossAccountRoleName?: string;
  crossAccountType?: string;
  crossAccountUserId?: number;
  instanceIds?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      clientIds: 'ClientIds',
      crossAccountRoleName: 'CrossAccountRoleName',
      crossAccountType: 'CrossAccountType',
      crossAccountUserId: 'CrossAccountUserId',
      instanceIds: 'InstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIds: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      crossAccountRoleName: 'string',
      crossAccountType: 'string',
      crossAccountUserId: 'number',
      instanceIds: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UninstallBackupClientsShrinkRequest extends $tea.Model {
  clientIdsShrink?: string;
  crossAccountRoleName?: string;
  crossAccountType?: string;
  crossAccountUserId?: number;
  instanceIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      clientIdsShrink: 'ClientIds',
      crossAccountRoleName: 'CrossAccountRoleName',
      crossAccountType: 'CrossAccountType',
      crossAccountUserId: 'CrossAccountUserId',
      instanceIdsShrink: 'InstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIdsShrink: 'string',
      crossAccountRoleName: 'string',
      crossAccountType: 'string',
      crossAccountUserId: 'number',
      instanceIdsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UninstallBackupClientsResponseBody extends $tea.Model {
  code?: string;
  instanceStatuses?: UninstallBackupClientsResponseBodyInstanceStatuses[];
  message?: string;
  requestId?: string;
  success?: boolean;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      instanceStatuses: 'InstanceStatuses',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      instanceStatuses: { 'type': 'array', 'itemType': UninstallBackupClientsResponseBodyInstanceStatuses },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UninstallBackupClientsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UninstallBackupClientsResponseBody;
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
      body: UninstallBackupClientsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UninstallClientRequest extends $tea.Model {
  clientId?: string;
  resourceGroupId?: string;
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      resourceGroupId: 'ResourceGroupId',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      resourceGroupId: 'string',
      vaultId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UninstallClientResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UninstallClientResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UninstallClientResponseBody;
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
      body: UninstallClientResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBackupPlanRequest extends $tea.Model {
  changeListPath?: string;
  detail?: { [key: string]: any };
  exclude?: string;
  include?: string;
  keepLatestSnapshots?: number;
  options?: string;
  otsDetail?: OtsDetail;
  path?: string[];
  planId?: string;
  planName?: string;
  prefix?: string;
  retention?: number;
  rule?: UpdateBackupPlanRequestRule[];
  schedule?: string;
  sourceType?: string;
  speedLimit?: string;
  updatePaths?: boolean;
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      changeListPath: 'ChangeListPath',
      detail: 'Detail',
      exclude: 'Exclude',
      include: 'Include',
      keepLatestSnapshots: 'KeepLatestSnapshots',
      options: 'Options',
      otsDetail: 'OtsDetail',
      path: 'Path',
      planId: 'PlanId',
      planName: 'PlanName',
      prefix: 'Prefix',
      retention: 'Retention',
      rule: 'Rule',
      schedule: 'Schedule',
      sourceType: 'SourceType',
      speedLimit: 'SpeedLimit',
      updatePaths: 'UpdatePaths',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeListPath: 'string',
      detail: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      exclude: 'string',
      include: 'string',
      keepLatestSnapshots: 'number',
      options: 'string',
      otsDetail: OtsDetail,
      path: { 'type': 'array', 'itemType': 'string' },
      planId: 'string',
      planName: 'string',
      prefix: 'string',
      retention: 'number',
      rule: { 'type': 'array', 'itemType': UpdateBackupPlanRequestRule },
      schedule: 'string',
      sourceType: 'string',
      speedLimit: 'string',
      updatePaths: 'boolean',
      vaultId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBackupPlanShrinkRequest extends $tea.Model {
  changeListPath?: string;
  detailShrink?: string;
  exclude?: string;
  include?: string;
  keepLatestSnapshots?: number;
  options?: string;
  otsDetailShrink?: string;
  path?: string[];
  planId?: string;
  planName?: string;
  prefix?: string;
  retention?: number;
  rule?: UpdateBackupPlanShrinkRequestRule[];
  schedule?: string;
  sourceType?: string;
  speedLimit?: string;
  updatePaths?: boolean;
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      changeListPath: 'ChangeListPath',
      detailShrink: 'Detail',
      exclude: 'Exclude',
      include: 'Include',
      keepLatestSnapshots: 'KeepLatestSnapshots',
      options: 'Options',
      otsDetailShrink: 'OtsDetail',
      path: 'Path',
      planId: 'PlanId',
      planName: 'PlanName',
      prefix: 'Prefix',
      retention: 'Retention',
      rule: 'Rule',
      schedule: 'Schedule',
      sourceType: 'SourceType',
      speedLimit: 'SpeedLimit',
      updatePaths: 'UpdatePaths',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeListPath: 'string',
      detailShrink: 'string',
      exclude: 'string',
      include: 'string',
      keepLatestSnapshots: 'number',
      options: 'string',
      otsDetailShrink: 'string',
      path: { 'type': 'array', 'itemType': 'string' },
      planId: 'string',
      planName: 'string',
      prefix: 'string',
      retention: 'number',
      rule: { 'type': 'array', 'itemType': UpdateBackupPlanShrinkRequestRule },
      schedule: 'string',
      sourceType: 'string',
      speedLimit: 'string',
      updatePaths: 'boolean',
      vaultId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBackupPlanResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBackupPlanResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateBackupPlanResponseBody;
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
      body: UpdateBackupPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateClientSettingsRequest extends $tea.Model {
  alertOnPartialComplete?: boolean;
  clientId?: string;
  dataNetworkType?: string;
  dataProxySetting?: string;
  maxCpuCore?: number;
  maxMemory?: number;
  maxWorker?: number;
  proxyHost?: string;
  proxyPassword?: string;
  proxyPort?: number;
  proxyUser?: string;
  resourceGroupId?: string;
  useHttps?: boolean;
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      alertOnPartialComplete: 'AlertOnPartialComplete',
      clientId: 'ClientId',
      dataNetworkType: 'DataNetworkType',
      dataProxySetting: 'DataProxySetting',
      maxCpuCore: 'MaxCpuCore',
      maxMemory: 'MaxMemory',
      maxWorker: 'MaxWorker',
      proxyHost: 'ProxyHost',
      proxyPassword: 'ProxyPassword',
      proxyPort: 'ProxyPort',
      proxyUser: 'ProxyUser',
      resourceGroupId: 'ResourceGroupId',
      useHttps: 'UseHttps',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertOnPartialComplete: 'boolean',
      clientId: 'string',
      dataNetworkType: 'string',
      dataProxySetting: 'string',
      maxCpuCore: 'number',
      maxMemory: 'number',
      maxWorker: 'number',
      proxyHost: 'string',
      proxyPassword: 'string',
      proxyPort: 'number',
      proxyUser: 'string',
      resourceGroupId: 'string',
      useHttps: 'boolean',
      vaultId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateClientSettingsResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateClientSettingsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateClientSettingsResponseBody;
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
      body: UpdateClientSettingsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateContainerClusterRequest extends $tea.Model {
  clusterId?: string;
  description?: string;
  name?: string;
  networkType?: string;
  renewToken?: boolean;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      description: 'Description',
      name: 'Name',
      networkType: 'NetworkType',
      renewToken: 'RenewToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      description: 'string',
      name: 'string',
      networkType: 'string',
      renewToken: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateContainerClusterResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  token?: string;
  tokenUpdated?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      token: 'Token',
      tokenUpdated: 'TokenUpdated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      token: 'string',
      tokenUpdated: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateContainerClusterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateContainerClusterResponseBody;
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
      body: UpdateContainerClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHanaBackupPlanRequest extends $tea.Model {
  backupPrefix?: string;
  clusterId?: string;
  planId?: string;
  planName?: string;
  resourceGroupId?: string;
  schedule?: string;
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      backupPrefix: 'BackupPrefix',
      clusterId: 'ClusterId',
      planId: 'PlanId',
      planName: 'PlanName',
      resourceGroupId: 'ResourceGroupId',
      schedule: 'Schedule',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPrefix: 'string',
      clusterId: 'string',
      planId: 'string',
      planName: 'string',
      resourceGroupId: 'string',
      schedule: 'string',
      vaultId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHanaBackupPlanResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHanaBackupPlanResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateHanaBackupPlanResponseBody;
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
      body: UpdateHanaBackupPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHanaBackupSettingRequest extends $tea.Model {
  catalogBackupParameterFile?: string;
  catalogBackupUsingBackint?: boolean;
  clusterId?: string;
  dataBackupParameterFile?: string;
  databaseName?: string;
  enableAutoLogBackup?: boolean;
  logBackupParameterFile?: string;
  logBackupTimeout?: number;
  logBackupUsingBackint?: boolean;
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      catalogBackupParameterFile: 'CatalogBackupParameterFile',
      catalogBackupUsingBackint: 'CatalogBackupUsingBackint',
      clusterId: 'ClusterId',
      dataBackupParameterFile: 'DataBackupParameterFile',
      databaseName: 'DatabaseName',
      enableAutoLogBackup: 'EnableAutoLogBackup',
      logBackupParameterFile: 'LogBackupParameterFile',
      logBackupTimeout: 'LogBackupTimeout',
      logBackupUsingBackint: 'LogBackupUsingBackint',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogBackupParameterFile: 'string',
      catalogBackupUsingBackint: 'boolean',
      clusterId: 'string',
      dataBackupParameterFile: 'string',
      databaseName: 'string',
      enableAutoLogBackup: 'boolean',
      logBackupParameterFile: 'string',
      logBackupTimeout: 'number',
      logBackupUsingBackint: 'boolean',
      vaultId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHanaBackupSettingResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHanaBackupSettingResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateHanaBackupSettingResponseBody;
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
      body: UpdateHanaBackupSettingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHanaInstanceRequest extends $tea.Model {
  alertSetting?: string;
  clusterId?: string;
  hanaName?: string;
  host?: string;
  instanceNumber?: number;
  password?: string;
  resourceGroupId?: string;
  useSsl?: boolean;
  userName?: string;
  validateCertificate?: boolean;
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      alertSetting: 'AlertSetting',
      clusterId: 'ClusterId',
      hanaName: 'HanaName',
      host: 'Host',
      instanceNumber: 'InstanceNumber',
      password: 'Password',
      resourceGroupId: 'ResourceGroupId',
      useSsl: 'UseSsl',
      userName: 'UserName',
      validateCertificate: 'ValidateCertificate',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertSetting: 'string',
      clusterId: 'string',
      hanaName: 'string',
      host: 'string',
      instanceNumber: 'number',
      password: 'string',
      resourceGroupId: 'string',
      useSsl: 'boolean',
      userName: 'string',
      validateCertificate: 'boolean',
      vaultId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHanaInstanceResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHanaInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateHanaInstanceResponseBody;
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
      body: UpdateHanaInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHanaRetentionSettingRequest extends $tea.Model {
  clusterId?: string;
  databaseName?: string;
  disabled?: boolean;
  retentionDays?: number;
  schedule?: string;
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      databaseName: 'DatabaseName',
      disabled: 'Disabled',
      retentionDays: 'RetentionDays',
      schedule: 'Schedule',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      databaseName: 'string',
      disabled: 'boolean',
      retentionDays: 'number',
      schedule: 'string',
      vaultId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHanaRetentionSettingResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHanaRetentionSettingResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateHanaRetentionSettingResponseBody;
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
      body: UpdateHanaRetentionSettingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePolicyBindingRequest extends $tea.Model {
  advancedOptions?: UpdatePolicyBindingRequestAdvancedOptions;
  dataSourceId?: string;
  disabled?: boolean;
  policyBindingDescription?: string;
  policyId?: string;
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      advancedOptions: 'AdvancedOptions',
      dataSourceId: 'DataSourceId',
      disabled: 'Disabled',
      policyBindingDescription: 'PolicyBindingDescription',
      policyId: 'PolicyId',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advancedOptions: UpdatePolicyBindingRequestAdvancedOptions,
      dataSourceId: 'string',
      disabled: 'boolean',
      policyBindingDescription: 'string',
      policyId: 'string',
      sourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePolicyBindingShrinkRequest extends $tea.Model {
  advancedOptionsShrink?: string;
  dataSourceId?: string;
  disabled?: boolean;
  policyBindingDescription?: string;
  policyId?: string;
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      advancedOptionsShrink: 'AdvancedOptions',
      dataSourceId: 'DataSourceId',
      disabled: 'Disabled',
      policyBindingDescription: 'PolicyBindingDescription',
      policyId: 'PolicyId',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advancedOptionsShrink: 'string',
      dataSourceId: 'string',
      disabled: 'boolean',
      policyBindingDescription: 'string',
      policyId: 'string',
      sourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePolicyBindingResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePolicyBindingResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdatePolicyBindingResponseBody;
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
      body: UpdatePolicyBindingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePolicyV2Request extends $tea.Model {
  policyDescription?: string;
  policyId?: string;
  policyName?: string;
  rules?: UpdatePolicyV2RequestRules[];
  static names(): { [key: string]: string } {
    return {
      policyDescription: 'PolicyDescription',
      policyId: 'PolicyId',
      policyName: 'PolicyName',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyDescription: 'string',
      policyId: 'string',
      policyName: 'string',
      rules: { 'type': 'array', 'itemType': UpdatePolicyV2RequestRules },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePolicyV2ShrinkRequest extends $tea.Model {
  policyDescription?: string;
  policyId?: string;
  policyName?: string;
  rulesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      policyDescription: 'PolicyDescription',
      policyId: 'PolicyId',
      policyName: 'PolicyName',
      rulesShrink: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyDescription: 'string',
      policyId: 'string',
      policyName: 'string',
      rulesShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePolicyV2ResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePolicyV2Response extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdatePolicyV2ResponseBody;
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
      body: UpdatePolicyV2ResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVaultRequest extends $tea.Model {
  description?: string;
  resourceGroupId?: string;
  vaultId?: string;
  vaultName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      resourceGroupId: 'ResourceGroupId',
      vaultId: 'VaultId',
      vaultName: 'VaultName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      resourceGroupId: 'string',
      vaultId: 'string',
      vaultName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVaultResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVaultResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateVaultResponseBody;
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
      body: UpdateVaultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeBackupClientsRequest extends $tea.Model {
  clientIds?: { [key: string]: any };
  crossAccountRoleName?: string;
  crossAccountType?: string;
  crossAccountUserId?: number;
  instanceIds?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      clientIds: 'ClientIds',
      crossAccountRoleName: 'CrossAccountRoleName',
      crossAccountType: 'CrossAccountType',
      crossAccountUserId: 'CrossAccountUserId',
      instanceIds: 'InstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIds: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      crossAccountRoleName: 'string',
      crossAccountType: 'string',
      crossAccountUserId: 'number',
      instanceIds: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeBackupClientsShrinkRequest extends $tea.Model {
  clientIdsShrink?: string;
  crossAccountRoleName?: string;
  crossAccountType?: string;
  crossAccountUserId?: number;
  instanceIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      clientIdsShrink: 'ClientIds',
      crossAccountRoleName: 'CrossAccountRoleName',
      crossAccountType: 'CrossAccountType',
      crossAccountUserId: 'CrossAccountUserId',
      instanceIdsShrink: 'InstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIdsShrink: 'string',
      crossAccountRoleName: 'string',
      crossAccountType: 'string',
      crossAccountUserId: 'number',
      instanceIdsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeBackupClientsResponseBody extends $tea.Model {
  code?: string;
  instanceStatuses?: UpgradeBackupClientsResponseBodyInstanceStatuses[];
  message?: string;
  requestId?: string;
  success?: boolean;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      instanceStatuses: 'InstanceStatuses',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      instanceStatuses: { 'type': 'array', 'itemType': UpgradeBackupClientsResponseBodyInstanceStatuses },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeBackupClientsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpgradeBackupClientsResponseBody;
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
      body: UpgradeBackupClientsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeClientRequest extends $tea.Model {
  clientId?: string;
  resourceGroupId?: string;
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      resourceGroupId: 'ResourceGroupId',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      resourceGroupId: 'string',
      vaultId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeClientResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeClientResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpgradeClientResponseBody;
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

export class CreateBackupPlanRequestRule extends $tea.Model {
  backupType?: string;
  destinationRegionId?: string;
  destinationRetention?: number;
  disabled?: boolean;
  doCopy?: boolean;
  retention?: number;
  ruleName?: string;
  schedule?: string;
  static names(): { [key: string]: string } {
    return {
      backupType: 'BackupType',
      destinationRegionId: 'DestinationRegionId',
      destinationRetention: 'DestinationRetention',
      disabled: 'Disabled',
      doCopy: 'DoCopy',
      retention: 'Retention',
      ruleName: 'RuleName',
      schedule: 'Schedule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupType: 'string',
      destinationRegionId: 'string',
      destinationRetention: 'number',
      disabled: 'boolean',
      doCopy: 'boolean',
      retention: 'number',
      ruleName: 'string',
      schedule: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBackupPlanShrinkRequestRule extends $tea.Model {
  backupType?: string;
  destinationRegionId?: string;
  destinationRetention?: number;
  disabled?: boolean;
  doCopy?: boolean;
  retention?: number;
  ruleName?: string;
  schedule?: string;
  static names(): { [key: string]: string } {
    return {
      backupType: 'BackupType',
      destinationRegionId: 'DestinationRegionId',
      destinationRetention: 'DestinationRetention',
      disabled: 'Disabled',
      doCopy: 'DoCopy',
      retention: 'Retention',
      ruleName: 'RuleName',
      schedule: 'Schedule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupType: 'string',
      destinationRegionId: 'string',
      destinationRetention: 'number',
      disabled: 'boolean',
      doCopy: 'boolean',
      retention: 'number',
      ruleName: 'string',
      schedule: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClientsResponseBodyInstanceStatusesInstanceStatus extends $tea.Model {
  instanceId?: string;
  validInstance?: boolean;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      validInstance: 'ValidInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      validInstance: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClientsResponseBodyInstanceStatuses extends $tea.Model {
  instanceStatus?: CreateClientsResponseBodyInstanceStatusesInstanceStatus[];
  static names(): { [key: string]: string } {
    return {
      instanceStatus: 'InstanceStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceStatus: { 'type': 'array', 'itemType': CreateClientsResponseBodyInstanceStatusesInstanceStatus },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyBindingsRequestPolicyBindingListAdvancedOptionsCommonFileSystemDetail extends $tea.Model {
  fetchSliceSize?: number;
  fullOnIncrementFail?: boolean;
  static names(): { [key: string]: string } {
    return {
      fetchSliceSize: 'FetchSliceSize',
      fullOnIncrementFail: 'FullOnIncrementFail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fetchSliceSize: 'number',
      fullOnIncrementFail: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyBindingsRequestPolicyBindingListAdvancedOptionsCommonNasDetail extends $tea.Model {
  clusterId?: string;
  fetchSliceSize?: number;
  fullOnIncrementFail?: boolean;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      fetchSliceSize: 'FetchSliceSize',
      fullOnIncrementFail: 'FullOnIncrementFail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      fetchSliceSize: 'number',
      fullOnIncrementFail: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyBindingsRequestPolicyBindingListAdvancedOptionsFileDetail extends $tea.Model {
  advPolicy?: boolean;
  useVSS?: boolean;
  static names(): { [key: string]: string } {
    return {
      advPolicy: 'AdvPolicy',
      useVSS: 'UseVSS',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advPolicy: 'boolean',
      useVSS: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyBindingsRequestPolicyBindingListAdvancedOptionsOssDetail extends $tea.Model {
  inventoryCleanupPolicy?: string;
  inventoryId?: string;
  static names(): { [key: string]: string } {
    return {
      inventoryCleanupPolicy: 'InventoryCleanupPolicy',
      inventoryId: 'InventoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inventoryCleanupPolicy: 'string',
      inventoryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyBindingsRequestPolicyBindingListAdvancedOptionsUdmDetail extends $tea.Model {
  appConsistent?: boolean;
  diskIdList?: string[];
  enableFsFreeze?: boolean;
  enableWriters?: boolean;
  excludeDiskIdList?: string[];
  postScriptPath?: string;
  preScriptPath?: string;
  ramRoleName?: string;
  snapshotGroup?: boolean;
  timeoutInSeconds?: number;
  static names(): { [key: string]: string } {
    return {
      appConsistent: 'AppConsistent',
      diskIdList: 'DiskIdList',
      enableFsFreeze: 'EnableFsFreeze',
      enableWriters: 'EnableWriters',
      excludeDiskIdList: 'ExcludeDiskIdList',
      postScriptPath: 'PostScriptPath',
      preScriptPath: 'PreScriptPath',
      ramRoleName: 'RamRoleName',
      snapshotGroup: 'SnapshotGroup',
      timeoutInSeconds: 'TimeoutInSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appConsistent: 'boolean',
      diskIdList: { 'type': 'array', 'itemType': 'string' },
      enableFsFreeze: 'boolean',
      enableWriters: 'boolean',
      excludeDiskIdList: { 'type': 'array', 'itemType': 'string' },
      postScriptPath: 'string',
      preScriptPath: 'string',
      ramRoleName: 'string',
      snapshotGroup: 'boolean',
      timeoutInSeconds: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyBindingsRequestPolicyBindingListAdvancedOptions extends $tea.Model {
  commonFileSystemDetail?: CreatePolicyBindingsRequestPolicyBindingListAdvancedOptionsCommonFileSystemDetail;
  commonNasDetail?: CreatePolicyBindingsRequestPolicyBindingListAdvancedOptionsCommonNasDetail;
  fileDetail?: CreatePolicyBindingsRequestPolicyBindingListAdvancedOptionsFileDetail;
  ossDetail?: CreatePolicyBindingsRequestPolicyBindingListAdvancedOptionsOssDetail;
  udmDetail?: CreatePolicyBindingsRequestPolicyBindingListAdvancedOptionsUdmDetail;
  static names(): { [key: string]: string } {
    return {
      commonFileSystemDetail: 'CommonFileSystemDetail',
      commonNasDetail: 'CommonNasDetail',
      fileDetail: 'FileDetail',
      ossDetail: 'OssDetail',
      udmDetail: 'UdmDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonFileSystemDetail: CreatePolicyBindingsRequestPolicyBindingListAdvancedOptionsCommonFileSystemDetail,
      commonNasDetail: CreatePolicyBindingsRequestPolicyBindingListAdvancedOptionsCommonNasDetail,
      fileDetail: CreatePolicyBindingsRequestPolicyBindingListAdvancedOptionsFileDetail,
      ossDetail: CreatePolicyBindingsRequestPolicyBindingListAdvancedOptionsOssDetail,
      udmDetail: CreatePolicyBindingsRequestPolicyBindingListAdvancedOptionsUdmDetail,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyBindingsRequestPolicyBindingList extends $tea.Model {
  advancedOptions?: CreatePolicyBindingsRequestPolicyBindingListAdvancedOptions;
  crossAccountRoleName?: string;
  crossAccountType?: string;
  crossAccountUserId?: number;
  dataSourceId?: string;
  policyBindingDescription?: string;
  source?: string;
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      advancedOptions: 'AdvancedOptions',
      crossAccountRoleName: 'CrossAccountRoleName',
      crossAccountType: 'CrossAccountType',
      crossAccountUserId: 'CrossAccountUserId',
      dataSourceId: 'DataSourceId',
      policyBindingDescription: 'PolicyBindingDescription',
      source: 'Source',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advancedOptions: CreatePolicyBindingsRequestPolicyBindingListAdvancedOptions,
      crossAccountRoleName: 'string',
      crossAccountType: 'string',
      crossAccountUserId: 'number',
      dataSourceId: 'string',
      policyBindingDescription: 'string',
      source: 'string',
      sourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyV2RequestRulesRetentionRules extends $tea.Model {
  advancedRetentionType?: string;
  retention?: number;
  whichSnapshot?: number;
  static names(): { [key: string]: string } {
    return {
      advancedRetentionType: 'AdvancedRetentionType',
      retention: 'Retention',
      whichSnapshot: 'WhichSnapshot',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advancedRetentionType: 'string',
      retention: 'number',
      whichSnapshot: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyV2RequestRules extends $tea.Model {
  backupType?: string;
  keepLatestSnapshots?: number;
  replicationRegionId?: string;
  retention?: number;
  retentionRules?: CreatePolicyV2RequestRulesRetentionRules[];
  ruleType?: string;
  schedule?: string;
  static names(): { [key: string]: string } {
    return {
      backupType: 'BackupType',
      keepLatestSnapshots: 'KeepLatestSnapshots',
      replicationRegionId: 'ReplicationRegionId',
      retention: 'Retention',
      retentionRules: 'RetentionRules',
      ruleType: 'RuleType',
      schedule: 'Schedule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupType: 'string',
      keepLatestSnapshots: 'number',
      replicationRegionId: 'string',
      retention: 'number',
      retentionRules: { 'type': 'array', 'itemType': CreatePolicyV2RequestRulesRetentionRules },
      ruleType: 'string',
      schedule: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupClientsRequestTag extends $tea.Model {
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

export class DescribeBackupClientsShrinkRequestTag extends $tea.Model {
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

export class DescribeBackupClientsResponseBodyClientsSettings extends $tea.Model {
  alertOnPartialComplete?: boolean;
  dataNetworkType?: string;
  dataProxySetting?: string;
  maxCpuCore?: string;
  maxMemory?: number;
  maxWorker?: string;
  proxyHost?: string;
  proxyPassword?: string;
  proxyPort?: number;
  proxyUser?: string;
  useHttps?: string;
  static names(): { [key: string]: string } {
    return {
      alertOnPartialComplete: 'AlertOnPartialComplete',
      dataNetworkType: 'DataNetworkType',
      dataProxySetting: 'DataProxySetting',
      maxCpuCore: 'MaxCpuCore',
      maxMemory: 'MaxMemory',
      maxWorker: 'MaxWorker',
      proxyHost: 'ProxyHost',
      proxyPassword: 'ProxyPassword',
      proxyPort: 'ProxyPort',
      proxyUser: 'ProxyUser',
      useHttps: 'UseHttps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertOnPartialComplete: 'boolean',
      dataNetworkType: 'string',
      dataProxySetting: 'string',
      maxCpuCore: 'string',
      maxMemory: 'number',
      maxWorker: 'string',
      proxyHost: 'string',
      proxyPassword: 'string',
      proxyPort: 'number',
      proxyUser: 'string',
      useHttps: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupClientsResponseBodyClientsTags extends $tea.Model {
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

export class DescribeBackupClientsResponseBodyClients extends $tea.Model {
  appliance?: boolean;
  archType?: string;
  backupStatus?: string;
  clientId?: string;
  clientType?: string;
  clientVersion?: string;
  createdTime?: number;
  hostname?: string;
  instanceId?: string;
  instanceName?: string;
  lastHeartBeatTime?: number;
  maxClientVersion?: string;
  osType?: string;
  privateIpV4?: string;
  settings?: DescribeBackupClientsResponseBodyClientsSettings;
  status?: string;
  tags?: DescribeBackupClientsResponseBodyClientsTags[];
  updatedTime?: number;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      appliance: 'Appliance',
      archType: 'ArchType',
      backupStatus: 'BackupStatus',
      clientId: 'ClientId',
      clientType: 'ClientType',
      clientVersion: 'ClientVersion',
      createdTime: 'CreatedTime',
      hostname: 'Hostname',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      lastHeartBeatTime: 'LastHeartBeatTime',
      maxClientVersion: 'MaxClientVersion',
      osType: 'OsType',
      privateIpV4: 'PrivateIpV4',
      settings: 'Settings',
      status: 'Status',
      tags: 'Tags',
      updatedTime: 'UpdatedTime',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appliance: 'boolean',
      archType: 'string',
      backupStatus: 'string',
      clientId: 'string',
      clientType: 'string',
      clientVersion: 'string',
      createdTime: 'number',
      hostname: 'string',
      instanceId: 'string',
      instanceName: 'string',
      lastHeartBeatTime: 'number',
      maxClientVersion: 'string',
      osType: 'string',
      privateIpV4: 'string',
      settings: DescribeBackupClientsResponseBodyClientsSettings,
      status: 'string',
      tags: { 'type': 'array', 'itemType': DescribeBackupClientsResponseBodyClientsTags },
      updatedTime: 'number',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupJobs2RequestFilters extends $tea.Model {
  key?: string;
  operator?: string;
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      operator: 'Operator',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      operator: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupJobs2ResponseBodyBackupJobsBackupJobDetailDiskNativeSnapshotIdList extends $tea.Model {
  diskNativeSnapshotId?: string[];
  static names(): { [key: string]: string } {
    return {
      diskNativeSnapshotId: 'DiskNativeSnapshotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskNativeSnapshotId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupJobs2ResponseBodyBackupJobsBackupJobDetail extends $tea.Model {
  destinationNativeSnapshotErrorMessage?: string;
  destinationNativeSnapshotId?: string;
  destinationNativeSnapshotProgress?: number;
  destinationNativeSnapshotStatus?: string;
  destinationRetention?: number;
  destinationSnapshotId?: string;
  diskNativeSnapshotIdList?: DescribeBackupJobs2ResponseBodyBackupJobsBackupJobDetailDiskNativeSnapshotIdList;
  doCopy?: boolean;
  nativeSnapshotId?: string;
  static names(): { [key: string]: string } {
    return {
      destinationNativeSnapshotErrorMessage: 'DestinationNativeSnapshotErrorMessage',
      destinationNativeSnapshotId: 'DestinationNativeSnapshotId',
      destinationNativeSnapshotProgress: 'DestinationNativeSnapshotProgress',
      destinationNativeSnapshotStatus: 'DestinationNativeSnapshotStatus',
      destinationRetention: 'DestinationRetention',
      destinationSnapshotId: 'DestinationSnapshotId',
      diskNativeSnapshotIdList: 'DiskNativeSnapshotIdList',
      doCopy: 'DoCopy',
      nativeSnapshotId: 'NativeSnapshotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationNativeSnapshotErrorMessage: 'string',
      destinationNativeSnapshotId: 'string',
      destinationNativeSnapshotProgress: 'number',
      destinationNativeSnapshotStatus: 'string',
      destinationRetention: 'number',
      destinationSnapshotId: 'string',
      diskNativeSnapshotIdList: DescribeBackupJobs2ResponseBodyBackupJobsBackupJobDetailDiskNativeSnapshotIdList,
      doCopy: 'boolean',
      nativeSnapshotId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupJobs2ResponseBodyBackupJobsBackupJobOtsDetailTableNames extends $tea.Model {
  tableName?: string[];
  static names(): { [key: string]: string } {
    return {
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableName: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupJobs2ResponseBodyBackupJobsBackupJobOtsDetail extends $tea.Model {
  tableNames?: DescribeBackupJobs2ResponseBodyBackupJobsBackupJobOtsDetailTableNames;
  static names(): { [key: string]: string } {
    return {
      tableNames: 'TableNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableNames: DescribeBackupJobs2ResponseBodyBackupJobsBackupJobOtsDetailTableNames,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupJobs2ResponseBodyBackupJobsBackupJobPaths extends $tea.Model {
  path?: string[];
  static names(): { [key: string]: string } {
    return {
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      path: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupJobs2ResponseBodyBackupJobsBackupJob extends $tea.Model {
  actualBytes?: number;
  actualFiles?: number;
  actualItems?: number;
  backupType?: string;
  bucket?: string;
  bytesDone?: number;
  bytesTotal?: number;
  changeListPath?: string;
  clientId?: string;
  completeTime?: number;
  createTime?: number;
  createdTime?: number;
  crossAccountRoleName?: string;
  crossAccountType?: string;
  crossAccountUserId?: number;
  destDataSourceDetail?: string;
  destDataSourceId?: string;
  destSourceType?: string;
  detail?: DescribeBackupJobs2ResponseBodyBackupJobsBackupJobDetail;
  errorMessage?: string;
  exclude?: string;
  fileSystemId?: string;
  filesDone?: number;
  filesTotal?: number;
  identifier?: string;
  include?: string;
  instanceId?: string;
  instanceName?: string;
  itemsDone?: number;
  itemsTotal?: number;
  jobId?: string;
  jobName?: string;
  options?: string;
  otsDetail?: DescribeBackupJobs2ResponseBodyBackupJobsBackupJobOtsDetail;
  paths?: DescribeBackupJobs2ResponseBodyBackupJobsBackupJobPaths;
  planId?: string;
  prefix?: string;
  progress?: number;
  sourceType?: string;
  speed?: number;
  speedLimit?: string;
  startTime?: number;
  status?: string;
  tableName?: string;
  updatedTime?: number;
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      actualBytes: 'ActualBytes',
      actualFiles: 'ActualFiles',
      actualItems: 'ActualItems',
      backupType: 'BackupType',
      bucket: 'Bucket',
      bytesDone: 'BytesDone',
      bytesTotal: 'BytesTotal',
      changeListPath: 'ChangeListPath',
      clientId: 'ClientId',
      completeTime: 'CompleteTime',
      createTime: 'CreateTime',
      createdTime: 'CreatedTime',
      crossAccountRoleName: 'CrossAccountRoleName',
      crossAccountType: 'CrossAccountType',
      crossAccountUserId: 'CrossAccountUserId',
      destDataSourceDetail: 'DestDataSourceDetail',
      destDataSourceId: 'DestDataSourceId',
      destSourceType: 'DestSourceType',
      detail: 'Detail',
      errorMessage: 'ErrorMessage',
      exclude: 'Exclude',
      fileSystemId: 'FileSystemId',
      filesDone: 'FilesDone',
      filesTotal: 'FilesTotal',
      identifier: 'Identifier',
      include: 'Include',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      itemsDone: 'ItemsDone',
      itemsTotal: 'ItemsTotal',
      jobId: 'JobId',
      jobName: 'JobName',
      options: 'Options',
      otsDetail: 'OtsDetail',
      paths: 'Paths',
      planId: 'PlanId',
      prefix: 'Prefix',
      progress: 'Progress',
      sourceType: 'SourceType',
      speed: 'Speed',
      speedLimit: 'SpeedLimit',
      startTime: 'StartTime',
      status: 'Status',
      tableName: 'TableName',
      updatedTime: 'UpdatedTime',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualBytes: 'number',
      actualFiles: 'number',
      actualItems: 'number',
      backupType: 'string',
      bucket: 'string',
      bytesDone: 'number',
      bytesTotal: 'number',
      changeListPath: 'string',
      clientId: 'string',
      completeTime: 'number',
      createTime: 'number',
      createdTime: 'number',
      crossAccountRoleName: 'string',
      crossAccountType: 'string',
      crossAccountUserId: 'number',
      destDataSourceDetail: 'string',
      destDataSourceId: 'string',
      destSourceType: 'string',
      detail: DescribeBackupJobs2ResponseBodyBackupJobsBackupJobDetail,
      errorMessage: 'string',
      exclude: 'string',
      fileSystemId: 'string',
      filesDone: 'number',
      filesTotal: 'number',
      identifier: 'string',
      include: 'string',
      instanceId: 'string',
      instanceName: 'string',
      itemsDone: 'number',
      itemsTotal: 'number',
      jobId: 'string',
      jobName: 'string',
      options: 'string',
      otsDetail: DescribeBackupJobs2ResponseBodyBackupJobsBackupJobOtsDetail,
      paths: DescribeBackupJobs2ResponseBodyBackupJobsBackupJobPaths,
      planId: 'string',
      prefix: 'string',
      progress: 'number',
      sourceType: 'string',
      speed: 'number',
      speedLimit: 'string',
      startTime: 'number',
      status: 'string',
      tableName: 'string',
      updatedTime: 'number',
      vaultId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupJobs2ResponseBodyBackupJobs extends $tea.Model {
  backupJob?: DescribeBackupJobs2ResponseBodyBackupJobsBackupJob[];
  static names(): { [key: string]: string } {
    return {
      backupJob: 'BackupJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupJob: { 'type': 'array', 'itemType': DescribeBackupJobs2ResponseBodyBackupJobsBackupJob },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPlansRequestFilters extends $tea.Model {
  key?: string;
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPlansResponseBodyBackupPlansBackupPlanOtsDetailTableNames extends $tea.Model {
  tableName?: string[];
  static names(): { [key: string]: string } {
    return {
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableName: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPlansResponseBodyBackupPlansBackupPlanOtsDetail extends $tea.Model {
  tableNames?: DescribeBackupPlansResponseBodyBackupPlansBackupPlanOtsDetailTableNames;
  static names(): { [key: string]: string } {
    return {
      tableNames: 'TableNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableNames: DescribeBackupPlansResponseBodyBackupPlansBackupPlanOtsDetailTableNames,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPlansResponseBodyBackupPlansBackupPlanPaths extends $tea.Model {
  path?: string[];
  static names(): { [key: string]: string } {
    return {
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      path: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPlansResponseBodyBackupPlansBackupPlanResourcesResource extends $tea.Model {
  extra?: string;
  resourceId?: string;
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      extra: 'Extra',
      resourceId: 'ResourceId',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extra: 'string',
      resourceId: 'string',
      sourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPlansResponseBodyBackupPlansBackupPlanResources extends $tea.Model {
  resource?: DescribeBackupPlansResponseBodyBackupPlansBackupPlanResourcesResource[];
  static names(): { [key: string]: string } {
    return {
      resource: 'Resource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resource: { 'type': 'array', 'itemType': DescribeBackupPlansResponseBodyBackupPlansBackupPlanResourcesResource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPlansResponseBodyBackupPlansBackupPlanRulesRule extends $tea.Model {
  backupType?: string;
  destinationRegionId?: string;
  destinationRetention?: number;
  disabled?: boolean;
  doCopy?: boolean;
  retention?: number;
  ruleId?: string;
  ruleName?: string;
  schedule?: string;
  static names(): { [key: string]: string } {
    return {
      backupType: 'BackupType',
      destinationRegionId: 'DestinationRegionId',
      destinationRetention: 'DestinationRetention',
      disabled: 'Disabled',
      doCopy: 'DoCopy',
      retention: 'Retention',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      schedule: 'Schedule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupType: 'string',
      destinationRegionId: 'string',
      destinationRetention: 'number',
      disabled: 'boolean',
      doCopy: 'boolean',
      retention: 'number',
      ruleId: 'string',
      ruleName: 'string',
      schedule: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPlansResponseBodyBackupPlansBackupPlanRules extends $tea.Model {
  rule?: DescribeBackupPlansResponseBodyBackupPlansBackupPlanRulesRule[];
  static names(): { [key: string]: string } {
    return {
      rule: 'Rule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rule: { 'type': 'array', 'itemType': DescribeBackupPlansResponseBodyBackupPlansBackupPlanRulesRule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPlansResponseBodyBackupPlansBackupPlanTrialInfo extends $tea.Model {
  keepAfterTrialExpiration?: boolean;
  trialExpireTime?: number;
  trialStartTime?: number;
  trialVaultReleaseTime?: number;
  static names(): { [key: string]: string } {
    return {
      keepAfterTrialExpiration: 'KeepAfterTrialExpiration',
      trialExpireTime: 'TrialExpireTime',
      trialStartTime: 'TrialStartTime',
      trialVaultReleaseTime: 'TrialVaultReleaseTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keepAfterTrialExpiration: 'boolean',
      trialExpireTime: 'number',
      trialStartTime: 'number',
      trialVaultReleaseTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPlansResponseBodyBackupPlansBackupPlan extends $tea.Model {
  backupSourceGroupId?: string;
  backupType?: string;
  bucket?: string;
  changeListPath?: string;
  clientId?: string;
  clusterId?: string;
  createTime?: number;
  createdTime?: number;
  crossAccountRoleName?: string;
  crossAccountType?: string;
  crossAccountUserId?: number;
  dataSourceId?: string;
  destDataSourceDetail?: string;
  destDataSourceId?: string;
  destSourceType?: string;
  detail?: string;
  disabled?: boolean;
  exclude?: string;
  fileSystemId?: string;
  include?: string;
  instanceGroupId?: string;
  instanceId?: string;
  instanceName?: string;
  keepLatestSnapshots?: number;
  latestExecuteJobId?: string;
  options?: string;
  otsDetail?: DescribeBackupPlansResponseBodyBackupPlansBackupPlanOtsDetail;
  paths?: DescribeBackupPlansResponseBodyBackupPlansBackupPlanPaths;
  planId?: string;
  planName?: string;
  prefix?: string;
  resources?: DescribeBackupPlansResponseBodyBackupPlansBackupPlanResources;
  retention?: number;
  rules?: DescribeBackupPlansResponseBodyBackupPlansBackupPlanRules;
  schedule?: string;
  sourceType?: string;
  speedLimit?: string;
  trialInfo?: DescribeBackupPlansResponseBodyBackupPlansBackupPlanTrialInfo;
  updatedTime?: number;
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      backupSourceGroupId: 'BackupSourceGroupId',
      backupType: 'BackupType',
      bucket: 'Bucket',
      changeListPath: 'ChangeListPath',
      clientId: 'ClientId',
      clusterId: 'ClusterId',
      createTime: 'CreateTime',
      createdTime: 'CreatedTime',
      crossAccountRoleName: 'CrossAccountRoleName',
      crossAccountType: 'CrossAccountType',
      crossAccountUserId: 'CrossAccountUserId',
      dataSourceId: 'DataSourceId',
      destDataSourceDetail: 'DestDataSourceDetail',
      destDataSourceId: 'DestDataSourceId',
      destSourceType: 'DestSourceType',
      detail: 'Detail',
      disabled: 'Disabled',
      exclude: 'Exclude',
      fileSystemId: 'FileSystemId',
      include: 'Include',
      instanceGroupId: 'InstanceGroupId',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      keepLatestSnapshots: 'KeepLatestSnapshots',
      latestExecuteJobId: 'LatestExecuteJobId',
      options: 'Options',
      otsDetail: 'OtsDetail',
      paths: 'Paths',
      planId: 'PlanId',
      planName: 'PlanName',
      prefix: 'Prefix',
      resources: 'Resources',
      retention: 'Retention',
      rules: 'Rules',
      schedule: 'Schedule',
      sourceType: 'SourceType',
      speedLimit: 'SpeedLimit',
      trialInfo: 'TrialInfo',
      updatedTime: 'UpdatedTime',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupSourceGroupId: 'string',
      backupType: 'string',
      bucket: 'string',
      changeListPath: 'string',
      clientId: 'string',
      clusterId: 'string',
      createTime: 'number',
      createdTime: 'number',
      crossAccountRoleName: 'string',
      crossAccountType: 'string',
      crossAccountUserId: 'number',
      dataSourceId: 'string',
      destDataSourceDetail: 'string',
      destDataSourceId: 'string',
      destSourceType: 'string',
      detail: 'string',
      disabled: 'boolean',
      exclude: 'string',
      fileSystemId: 'string',
      include: 'string',
      instanceGroupId: 'string',
      instanceId: 'string',
      instanceName: 'string',
      keepLatestSnapshots: 'number',
      latestExecuteJobId: 'string',
      options: 'string',
      otsDetail: DescribeBackupPlansResponseBodyBackupPlansBackupPlanOtsDetail,
      paths: DescribeBackupPlansResponseBodyBackupPlansBackupPlanPaths,
      planId: 'string',
      planName: 'string',
      prefix: 'string',
      resources: DescribeBackupPlansResponseBodyBackupPlansBackupPlanResources,
      retention: 'number',
      rules: DescribeBackupPlansResponseBodyBackupPlansBackupPlanRules,
      schedule: 'string',
      sourceType: 'string',
      speedLimit: 'string',
      trialInfo: DescribeBackupPlansResponseBodyBackupPlansBackupPlanTrialInfo,
      updatedTime: 'number',
      vaultId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPlansResponseBodyBackupPlans extends $tea.Model {
  backupPlan?: DescribeBackupPlansResponseBodyBackupPlansBackupPlan[];
  static names(): { [key: string]: string } {
    return {
      backupPlan: 'BackupPlan',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPlan: { 'type': 'array', 'itemType': DescribeBackupPlansResponseBodyBackupPlansBackupPlan },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClientsResponseBodyClientsClient extends $tea.Model {
  alertSetting?: string;
  clientId?: string;
  clientName?: string;
  clientType?: string;
  clientVersion?: string;
  clusterId?: string;
  createdTime?: number;
  instanceId?: string;
  instanceName?: string;
  maxVersion?: string;
  networkType?: string;
  status?: string;
  statusMessage?: string;
  updatedTime?: number;
  useHttps?: boolean;
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      alertSetting: 'AlertSetting',
      clientId: 'ClientId',
      clientName: 'ClientName',
      clientType: 'ClientType',
      clientVersion: 'ClientVersion',
      clusterId: 'ClusterId',
      createdTime: 'CreatedTime',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      maxVersion: 'MaxVersion',
      networkType: 'NetworkType',
      status: 'Status',
      statusMessage: 'StatusMessage',
      updatedTime: 'UpdatedTime',
      useHttps: 'UseHttps',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertSetting: 'string',
      clientId: 'string',
      clientName: 'string',
      clientType: 'string',
      clientVersion: 'string',
      clusterId: 'string',
      createdTime: 'number',
      instanceId: 'string',
      instanceName: 'string',
      maxVersion: 'string',
      networkType: 'string',
      status: 'string',
      statusMessage: 'string',
      updatedTime: 'number',
      useHttps: 'boolean',
      vaultId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClientsResponseBodyClients extends $tea.Model {
  client?: DescribeClientsResponseBodyClientsClient[];
  static names(): { [key: string]: string } {
    return {
      client: 'Client',
    };
  }

  static types(): { [key: string]: any } {
    return {
      client: { 'type': 'array', 'itemType': DescribeClientsResponseBodyClientsClient },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerClusterResponseBodyClusters extends $tea.Model {
  agentStatus?: string;
  clusterId?: string;
  clusterType?: string;
  description?: string;
  identifier?: string;
  name?: string;
  networkType?: string;
  token?: string;
  static names(): { [key: string]: string } {
    return {
      agentStatus: 'AgentStatus',
      clusterId: 'ClusterId',
      clusterType: 'ClusterType',
      description: 'Description',
      identifier: 'Identifier',
      name: 'Name',
      networkType: 'NetworkType',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentStatus: 'string',
      clusterId: 'string',
      clusterType: 'string',
      description: 'string',
      identifier: 'string',
      name: 'string',
      networkType: 'string',
      token: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCrossAccountsResponseBodyCrossAccountsCrossAccount extends $tea.Model {
  alias?: string;
  createdTime?: number;
  crossAccountRoleName?: string;
  crossAccountUserId?: number;
  id?: number;
  ownerId?: number;
  updatedTime?: number;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      createdTime: 'CreatedTime',
      crossAccountRoleName: 'CrossAccountRoleName',
      crossAccountUserId: 'CrossAccountUserId',
      id: 'Id',
      ownerId: 'OwnerId',
      updatedTime: 'UpdatedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      createdTime: 'number',
      crossAccountRoleName: 'string',
      crossAccountUserId: 'number',
      id: 'number',
      ownerId: 'number',
      updatedTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCrossAccountsResponseBodyCrossAccounts extends $tea.Model {
  crossAccount?: DescribeCrossAccountsResponseBodyCrossAccountsCrossAccount[];
  static names(): { [key: string]: string } {
    return {
      crossAccount: 'CrossAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      crossAccount: { 'type': 'array', 'itemType': DescribeCrossAccountsResponseBodyCrossAccountsCrossAccount },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHanaBackupPlansResponseBodyHanaBackupPlansHanaBackupPlan extends $tea.Model {
  backupPrefix?: string;
  backupType?: string;
  clusterId?: string;
  databaseName?: string;
  disabled?: boolean;
  planId?: string;
  planName?: string;
  schedule?: string;
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      backupPrefix: 'BackupPrefix',
      backupType: 'BackupType',
      clusterId: 'ClusterId',
      databaseName: 'DatabaseName',
      disabled: 'Disabled',
      planId: 'PlanId',
      planName: 'PlanName',
      schedule: 'Schedule',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPrefix: 'string',
      backupType: 'string',
      clusterId: 'string',
      databaseName: 'string',
      disabled: 'boolean',
      planId: 'string',
      planName: 'string',
      schedule: 'string',
      vaultId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHanaBackupPlansResponseBodyHanaBackupPlans extends $tea.Model {
  hanaBackupPlan?: DescribeHanaBackupPlansResponseBodyHanaBackupPlansHanaBackupPlan[];
  static names(): { [key: string]: string } {
    return {
      hanaBackupPlan: 'HanaBackupPlan',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hanaBackupPlan: { 'type': 'array', 'itemType': DescribeHanaBackupPlansResponseBodyHanaBackupPlansHanaBackupPlan },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHanaBackupSettingResponseBodyHanaBackupSetting extends $tea.Model {
  catalogBackupParameterFile?: string;
  catalogBackupUsingBackint?: boolean;
  dataBackupParameterFile?: string;
  databaseName?: string;
  enableAutoLogBackup?: boolean;
  logBackupParameterFile?: string;
  logBackupTimeout?: number;
  logBackupUsingBackint?: boolean;
  static names(): { [key: string]: string } {
    return {
      catalogBackupParameterFile: 'CatalogBackupParameterFile',
      catalogBackupUsingBackint: 'CatalogBackupUsingBackint',
      dataBackupParameterFile: 'DataBackupParameterFile',
      databaseName: 'DatabaseName',
      enableAutoLogBackup: 'EnableAutoLogBackup',
      logBackupParameterFile: 'LogBackupParameterFile',
      logBackupTimeout: 'LogBackupTimeout',
      logBackupUsingBackint: 'LogBackupUsingBackint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogBackupParameterFile: 'string',
      catalogBackupUsingBackint: 'boolean',
      dataBackupParameterFile: 'string',
      databaseName: 'string',
      enableAutoLogBackup: 'boolean',
      logBackupParameterFile: 'string',
      logBackupTimeout: 'number',
      logBackupUsingBackint: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHanaDatabasesResponseBodyHanaDatabasesHanaDatabase extends $tea.Model {
  activeStatus?: string;
  databaseName?: string;
  detail?: string;
  host?: string;
  serviceName?: string;
  sqlPort?: number;
  static names(): { [key: string]: string } {
    return {
      activeStatus: 'ActiveStatus',
      databaseName: 'DatabaseName',
      detail: 'Detail',
      host: 'Host',
      serviceName: 'ServiceName',
      sqlPort: 'SqlPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeStatus: 'string',
      databaseName: 'string',
      detail: 'string',
      host: 'string',
      serviceName: 'string',
      sqlPort: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHanaDatabasesResponseBodyHanaDatabases extends $tea.Model {
  hanaDatabase?: DescribeHanaDatabasesResponseBodyHanaDatabasesHanaDatabase[];
  static names(): { [key: string]: string } {
    return {
      hanaDatabase: 'HanaDatabase',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hanaDatabase: { 'type': 'array', 'itemType': DescribeHanaDatabasesResponseBodyHanaDatabasesHanaDatabase },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHanaInstancesRequestTag extends $tea.Model {
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

export class DescribeHanaInstancesResponseBodyHanasHanaTagsTag extends $tea.Model {
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

export class DescribeHanaInstancesResponseBodyHanasHanaTags extends $tea.Model {
  tag?: DescribeHanaInstancesResponseBodyHanasHanaTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeHanaInstancesResponseBodyHanasHanaTagsTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHanaInstancesResponseBodyHanasHana extends $tea.Model {
  alertSetting?: string;
  clusterId?: string;
  hanaName?: string;
  host?: string;
  instanceNumber?: number;
  resourceGroupId?: string;
  status?: number;
  statusMessage?: string;
  tags?: DescribeHanaInstancesResponseBodyHanasHanaTags;
  useSsl?: boolean;
  userName?: string;
  validateCertificate?: boolean;
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      alertSetting: 'AlertSetting',
      clusterId: 'ClusterId',
      hanaName: 'HanaName',
      host: 'Host',
      instanceNumber: 'InstanceNumber',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      statusMessage: 'StatusMessage',
      tags: 'Tags',
      useSsl: 'UseSsl',
      userName: 'UserName',
      validateCertificate: 'ValidateCertificate',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertSetting: 'string',
      clusterId: 'string',
      hanaName: 'string',
      host: 'string',
      instanceNumber: 'number',
      resourceGroupId: 'string',
      status: 'number',
      statusMessage: 'string',
      tags: DescribeHanaInstancesResponseBodyHanasHanaTags,
      useSsl: 'boolean',
      userName: 'string',
      validateCertificate: 'boolean',
      vaultId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHanaInstancesResponseBodyHanas extends $tea.Model {
  hana?: DescribeHanaInstancesResponseBodyHanasHana[];
  static names(): { [key: string]: string } {
    return {
      hana: 'Hana',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hana: { 'type': 'array', 'itemType': DescribeHanaInstancesResponseBodyHanasHana },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHanaRestoresResponseBodyHanaRestoreHanaRestores extends $tea.Model {
  backupID?: number;
  backupPrefix?: string;
  checkAccess?: boolean;
  clearLog?: boolean;
  clusterId?: string;
  currentPhase?: number;
  currentProgress?: number;
  databaseName?: string;
  databaseRestoreId?: number;
  endTime?: number;
  logPosition?: number;
  maxPhase?: number;
  maxProgress?: number;
  message?: string;
  mode?: string;
  phase?: string;
  reachedTime?: number;
  recoveryPointInTime?: number;
  restoreId?: string;
  source?: string;
  sourceClusterId?: string;
  startTime?: number;
  state?: string;
  status?: string;
  systemCopy?: boolean;
  useCatalog?: boolean;
  useDelta?: boolean;
  vaultId?: string;
  volumeId?: number;
  static names(): { [key: string]: string } {
    return {
      backupID: 'BackupID',
      backupPrefix: 'BackupPrefix',
      checkAccess: 'CheckAccess',
      clearLog: 'ClearLog',
      clusterId: 'ClusterId',
      currentPhase: 'CurrentPhase',
      currentProgress: 'CurrentProgress',
      databaseName: 'DatabaseName',
      databaseRestoreId: 'DatabaseRestoreId',
      endTime: 'EndTime',
      logPosition: 'LogPosition',
      maxPhase: 'MaxPhase',
      maxProgress: 'MaxProgress',
      message: 'Message',
      mode: 'Mode',
      phase: 'Phase',
      reachedTime: 'ReachedTime',
      recoveryPointInTime: 'RecoveryPointInTime',
      restoreId: 'RestoreId',
      source: 'Source',
      sourceClusterId: 'SourceClusterId',
      startTime: 'StartTime',
      state: 'State',
      status: 'Status',
      systemCopy: 'SystemCopy',
      useCatalog: 'UseCatalog',
      useDelta: 'UseDelta',
      vaultId: 'VaultId',
      volumeId: 'VolumeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupID: 'number',
      backupPrefix: 'string',
      checkAccess: 'boolean',
      clearLog: 'boolean',
      clusterId: 'string',
      currentPhase: 'number',
      currentProgress: 'number',
      databaseName: 'string',
      databaseRestoreId: 'number',
      endTime: 'number',
      logPosition: 'number',
      maxPhase: 'number',
      maxProgress: 'number',
      message: 'string',
      mode: 'string',
      phase: 'string',
      reachedTime: 'number',
      recoveryPointInTime: 'number',
      restoreId: 'string',
      source: 'string',
      sourceClusterId: 'string',
      startTime: 'number',
      state: 'string',
      status: 'string',
      systemCopy: 'boolean',
      useCatalog: 'boolean',
      useDelta: 'boolean',
      vaultId: 'string',
      volumeId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHanaRestoresResponseBodyHanaRestore extends $tea.Model {
  hanaRestores?: DescribeHanaRestoresResponseBodyHanaRestoreHanaRestores[];
  static names(): { [key: string]: string } {
    return {
      hanaRestores: 'HanaRestores',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hanaRestores: { 'type': 'array', 'itemType': DescribeHanaRestoresResponseBodyHanaRestoreHanaRestores },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOtsTableSnapshotsRequestOtsInstances extends $tea.Model {
  instanceName?: string;
  tableNames?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceName: 'InstanceName',
      tableNames: 'TableNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceName: 'string',
      tableNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOtsTableSnapshotsResponseBodySnapshots extends $tea.Model {
  actualBytes?: string;
  backupType?: string;
  bytesTotal?: number;
  completeTime?: number;
  createTime?: number;
  createdTime?: number;
  instanceName?: string;
  jobId?: string;
  parentSnapshotHash?: string;
  rangeEnd?: number;
  rangeStart?: number;
  retention?: number;
  snapshotHash?: string;
  snapshotId?: string;
  sourceType?: string;
  startTime?: number;
  status?: string;
  tableName?: string;
  updatedTime?: number;
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      actualBytes: 'ActualBytes',
      backupType: 'BackupType',
      bytesTotal: 'BytesTotal',
      completeTime: 'CompleteTime',
      createTime: 'CreateTime',
      createdTime: 'CreatedTime',
      instanceName: 'InstanceName',
      jobId: 'JobId',
      parentSnapshotHash: 'ParentSnapshotHash',
      rangeEnd: 'RangeEnd',
      rangeStart: 'RangeStart',
      retention: 'Retention',
      snapshotHash: 'SnapshotHash',
      snapshotId: 'SnapshotId',
      sourceType: 'SourceType',
      startTime: 'StartTime',
      status: 'Status',
      tableName: 'TableName',
      updatedTime: 'UpdatedTime',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualBytes: 'string',
      backupType: 'string',
      bytesTotal: 'number',
      completeTime: 'number',
      createTime: 'number',
      createdTime: 'number',
      instanceName: 'string',
      jobId: 'string',
      parentSnapshotHash: 'string',
      rangeEnd: 'number',
      rangeStart: 'number',
      retention: 'number',
      snapshotHash: 'string',
      snapshotId: 'string',
      sourceType: 'string',
      startTime: 'number',
      status: 'string',
      tableName: 'string',
      updatedTime: 'number',
      vaultId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePoliciesV2ResponseBodyPoliciesRulesRetentionRules extends $tea.Model {
  advancedRetentionType?: string;
  retention?: number;
  whichSnapshot?: number;
  static names(): { [key: string]: string } {
    return {
      advancedRetentionType: 'AdvancedRetentionType',
      retention: 'Retention',
      whichSnapshot: 'WhichSnapshot',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advancedRetentionType: 'string',
      retention: 'number',
      whichSnapshot: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePoliciesV2ResponseBodyPoliciesRules extends $tea.Model {
  backupType?: string;
  keepLatestSnapshots?: number;
  replicationRegionId?: string;
  retention?: number;
  retentionRules?: DescribePoliciesV2ResponseBodyPoliciesRulesRetentionRules[];
  ruleId?: string;
  ruleType?: string;
  schedule?: string;
  static names(): { [key: string]: string } {
    return {
      backupType: 'BackupType',
      keepLatestSnapshots: 'KeepLatestSnapshots',
      replicationRegionId: 'ReplicationRegionId',
      retention: 'Retention',
      retentionRules: 'RetentionRules',
      ruleId: 'RuleId',
      ruleType: 'RuleType',
      schedule: 'Schedule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupType: 'string',
      keepLatestSnapshots: 'number',
      replicationRegionId: 'string',
      retention: 'number',
      retentionRules: { 'type': 'array', 'itemType': DescribePoliciesV2ResponseBodyPoliciesRulesRetentionRules },
      ruleId: 'string',
      ruleType: 'string',
      schedule: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePoliciesV2ResponseBodyPolicies extends $tea.Model {
  createdTime?: number;
  policyBindingCount?: number;
  policyDescription?: string;
  policyId?: string;
  policyName?: string;
  rules?: DescribePoliciesV2ResponseBodyPoliciesRules[];
  updatedTime?: number;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      policyBindingCount: 'PolicyBindingCount',
      policyDescription: 'PolicyDescription',
      policyId: 'PolicyId',
      policyName: 'PolicyName',
      rules: 'Rules',
      updatedTime: 'UpdatedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'number',
      policyBindingCount: 'number',
      policyDescription: 'string',
      policyId: 'string',
      policyName: 'string',
      rules: { 'type': 'array', 'itemType': DescribePoliciesV2ResponseBodyPoliciesRules },
      updatedTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyBindingsRequestFilters extends $tea.Model {
  key?: string;
  operator?: string;
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      operator: 'Operator',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      operator: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyBindingsShrinkRequestFilters extends $tea.Model {
  key?: string;
  operator?: string;
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      operator: 'Operator',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      operator: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyBindingsResponseBodyPolicyBindingsAdvancedOptionsCommonFileSystemDetail extends $tea.Model {
  fetchSliceSize?: number;
  fullOnIncrementFail?: boolean;
  static names(): { [key: string]: string } {
    return {
      fetchSliceSize: 'FetchSliceSize',
      fullOnIncrementFail: 'FullOnIncrementFail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fetchSliceSize: 'number',
      fullOnIncrementFail: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyBindingsResponseBodyPolicyBindingsAdvancedOptionsCommonNasDetail extends $tea.Model {
  clientId?: string;
  clusterId?: string;
  fetchSliceSize?: number;
  fullOnIncrementFail?: boolean;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      clusterId: 'ClusterId',
      fetchSliceSize: 'FetchSliceSize',
      fullOnIncrementFail: 'FullOnIncrementFail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      clusterId: 'string',
      fetchSliceSize: 'number',
      fullOnIncrementFail: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyBindingsResponseBodyPolicyBindingsAdvancedOptionsFileDetail extends $tea.Model {
  advPolicy?: boolean;
  useVSS?: boolean;
  static names(): { [key: string]: string } {
    return {
      advPolicy: 'AdvPolicy',
      useVSS: 'UseVSS',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advPolicy: 'boolean',
      useVSS: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyBindingsResponseBodyPolicyBindingsAdvancedOptionsOssDetail extends $tea.Model {
  inventoryCleanupPolicy?: string;
  inventoryId?: string;
  static names(): { [key: string]: string } {
    return {
      inventoryCleanupPolicy: 'InventoryCleanupPolicy',
      inventoryId: 'InventoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inventoryCleanupPolicy: 'string',
      inventoryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyBindingsResponseBodyPolicyBindingsAdvancedOptionsUdmDetail extends $tea.Model {
  appConsistent?: boolean;
  destinationKmsKeyId?: string;
  diskIdList?: string[];
  enableFsFreeze?: boolean;
  enableWriters?: boolean;
  excludeDiskIdList?: string[];
  postScriptPath?: string;
  preScriptPath?: string;
  ramRoleName?: string;
  snapshotGroup?: boolean;
  timeoutInSeconds?: number;
  static names(): { [key: string]: string } {
    return {
      appConsistent: 'AppConsistent',
      destinationKmsKeyId: 'DestinationKmsKeyId',
      diskIdList: 'DiskIdList',
      enableFsFreeze: 'EnableFsFreeze',
      enableWriters: 'EnableWriters',
      excludeDiskIdList: 'ExcludeDiskIdList',
      postScriptPath: 'PostScriptPath',
      preScriptPath: 'PreScriptPath',
      ramRoleName: 'RamRoleName',
      snapshotGroup: 'SnapshotGroup',
      timeoutInSeconds: 'TimeoutInSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appConsistent: 'boolean',
      destinationKmsKeyId: 'string',
      diskIdList: { 'type': 'array', 'itemType': 'string' },
      enableFsFreeze: 'boolean',
      enableWriters: 'boolean',
      excludeDiskIdList: { 'type': 'array', 'itemType': 'string' },
      postScriptPath: 'string',
      preScriptPath: 'string',
      ramRoleName: 'string',
      snapshotGroup: 'boolean',
      timeoutInSeconds: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyBindingsResponseBodyPolicyBindingsAdvancedOptions extends $tea.Model {
  commonFileSystemDetail?: DescribePolicyBindingsResponseBodyPolicyBindingsAdvancedOptionsCommonFileSystemDetail;
  commonNasDetail?: DescribePolicyBindingsResponseBodyPolicyBindingsAdvancedOptionsCommonNasDetail;
  fileDetail?: DescribePolicyBindingsResponseBodyPolicyBindingsAdvancedOptionsFileDetail;
  ossDetail?: DescribePolicyBindingsResponseBodyPolicyBindingsAdvancedOptionsOssDetail;
  udmDetail?: DescribePolicyBindingsResponseBodyPolicyBindingsAdvancedOptionsUdmDetail;
  static names(): { [key: string]: string } {
    return {
      commonFileSystemDetail: 'CommonFileSystemDetail',
      commonNasDetail: 'CommonNasDetail',
      fileDetail: 'FileDetail',
      ossDetail: 'OssDetail',
      udmDetail: 'UdmDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonFileSystemDetail: DescribePolicyBindingsResponseBodyPolicyBindingsAdvancedOptionsCommonFileSystemDetail,
      commonNasDetail: DescribePolicyBindingsResponseBodyPolicyBindingsAdvancedOptionsCommonNasDetail,
      fileDetail: DescribePolicyBindingsResponseBodyPolicyBindingsAdvancedOptionsFileDetail,
      ossDetail: DescribePolicyBindingsResponseBodyPolicyBindingsAdvancedOptionsOssDetail,
      udmDetail: DescribePolicyBindingsResponseBodyPolicyBindingsAdvancedOptionsUdmDetail,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyBindingsResponseBodyPolicyBindings extends $tea.Model {
  advancedOptions?: DescribePolicyBindingsResponseBodyPolicyBindingsAdvancedOptions;
  createdTime?: number;
  crossAccountRoleName?: string;
  crossAccountType?: string;
  crossAccountUserId?: number;
  dataSourceId?: string;
  disabled?: boolean;
  policyBindingDescription?: string;
  policyBindingId?: string;
  policyId?: string;
  sourceType?: string;
  updatedTime?: number;
  static names(): { [key: string]: string } {
    return {
      advancedOptions: 'AdvancedOptions',
      createdTime: 'CreatedTime',
      crossAccountRoleName: 'CrossAccountRoleName',
      crossAccountType: 'CrossAccountType',
      crossAccountUserId: 'CrossAccountUserId',
      dataSourceId: 'DataSourceId',
      disabled: 'Disabled',
      policyBindingDescription: 'PolicyBindingDescription',
      policyBindingId: 'PolicyBindingId',
      policyId: 'PolicyId',
      sourceType: 'SourceType',
      updatedTime: 'UpdatedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advancedOptions: DescribePolicyBindingsResponseBodyPolicyBindingsAdvancedOptions,
      createdTime: 'number',
      crossAccountRoleName: 'string',
      crossAccountType: 'string',
      crossAccountUserId: 'number',
      dataSourceId: 'string',
      disabled: 'boolean',
      policyBindingDescription: 'string',
      policyBindingId: 'string',
      policyId: 'string',
      sourceType: 'string',
      updatedTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecoverableOtsInstancesResponseBodyOtsInstances extends $tea.Model {
  instanceName?: string;
  tableNames?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceName: 'InstanceName',
      tableNames: 'TableNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceName: 'string',
      tableNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegionsRegion extends $tea.Model {
  localName?: string;
  regionId?: string;
  vaultCount?: number;
  static names(): { [key: string]: string } {
    return {
      localName: 'LocalName',
      regionId: 'RegionId',
      vaultCount: 'VaultCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localName: 'string',
      regionId: 'string',
      vaultCount: 'number',
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

export class DescribeRestoreJobs2RequestFilters extends $tea.Model {
  key?: string;
  operator?: string;
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      operator: 'Operator',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      operator: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreJobs2ResponseBodyRestoreJobsRestoreJobOtsDetail extends $tea.Model {
  batchChannelCount?: number;
  overwriteExisting?: boolean;
  static names(): { [key: string]: string } {
    return {
      batchChannelCount: 'BatchChannelCount',
      overwriteExisting: 'OverwriteExisting',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchChannelCount: 'number',
      overwriteExisting: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreJobs2ResponseBodyRestoreJobsRestoreJobReport extends $tea.Model {
  failedFiles?: string;
  reportTaskStatus?: string;
  skippedFiles?: string;
  successFiles?: string;
  totalFiles?: string;
  static names(): { [key: string]: string } {
    return {
      failedFiles: 'FailedFiles',
      reportTaskStatus: 'ReportTaskStatus',
      skippedFiles: 'SkippedFiles',
      successFiles: 'SuccessFiles',
      totalFiles: 'TotalFiles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedFiles: 'string',
      reportTaskStatus: 'string',
      skippedFiles: 'string',
      successFiles: 'string',
      totalFiles: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreJobs2ResponseBodyRestoreJobsRestoreJob extends $tea.Model {
  actualBytes?: number;
  actualItems?: number;
  bytesDone?: number;
  bytesTotal?: number;
  clusterId?: string;
  completeTime?: number;
  createdTime?: number;
  crossAccountRoleName?: string;
  crossAccountType?: string;
  crossAccountUserId?: number;
  errorFile?: string;
  errorMessage?: string;
  exclude?: string;
  expireTime?: number;
  failbackDetail?: string;
  include?: string;
  itemsDone?: number;
  itemsTotal?: number;
  meteringBytesDone?: number;
  meteringBytesTotal?: number;
  options?: string;
  otsDetail?: DescribeRestoreJobs2ResponseBodyRestoreJobsRestoreJobOtsDetail;
  parentId?: string;
  progress?: number;
  report?: DescribeRestoreJobs2ResponseBodyRestoreJobsRestoreJobReport;
  restoreId?: string;
  restoreType?: string;
  snapshotHash?: string;
  snapshotId?: string;
  sourceType?: string;
  speed?: number;
  startTime?: number;
  status?: string;
  storageClass?: string;
  targetBucket?: string;
  targetClientId?: string;
  targetCreateTime?: number;
  targetDataSourceId?: string;
  targetFileSystemId?: string;
  targetInstanceId?: string;
  targetInstanceName?: string;
  targetPath?: string;
  targetPrefix?: string;
  targetTableName?: string;
  targetTime?: number;
  udmDetail?: string;
  updatedTime?: number;
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      actualBytes: 'ActualBytes',
      actualItems: 'ActualItems',
      bytesDone: 'BytesDone',
      bytesTotal: 'BytesTotal',
      clusterId: 'ClusterId',
      completeTime: 'CompleteTime',
      createdTime: 'CreatedTime',
      crossAccountRoleName: 'CrossAccountRoleName',
      crossAccountType: 'CrossAccountType',
      crossAccountUserId: 'CrossAccountUserId',
      errorFile: 'ErrorFile',
      errorMessage: 'ErrorMessage',
      exclude: 'Exclude',
      expireTime: 'ExpireTime',
      failbackDetail: 'FailbackDetail',
      include: 'Include',
      itemsDone: 'ItemsDone',
      itemsTotal: 'ItemsTotal',
      meteringBytesDone: 'MeteringBytesDone',
      meteringBytesTotal: 'MeteringBytesTotal',
      options: 'Options',
      otsDetail: 'OtsDetail',
      parentId: 'ParentId',
      progress: 'Progress',
      report: 'Report',
      restoreId: 'RestoreId',
      restoreType: 'RestoreType',
      snapshotHash: 'SnapshotHash',
      snapshotId: 'SnapshotId',
      sourceType: 'SourceType',
      speed: 'Speed',
      startTime: 'StartTime',
      status: 'Status',
      storageClass: 'StorageClass',
      targetBucket: 'TargetBucket',
      targetClientId: 'TargetClientId',
      targetCreateTime: 'TargetCreateTime',
      targetDataSourceId: 'TargetDataSourceId',
      targetFileSystemId: 'TargetFileSystemId',
      targetInstanceId: 'TargetInstanceId',
      targetInstanceName: 'TargetInstanceName',
      targetPath: 'TargetPath',
      targetPrefix: 'TargetPrefix',
      targetTableName: 'TargetTableName',
      targetTime: 'TargetTime',
      udmDetail: 'UdmDetail',
      updatedTime: 'UpdatedTime',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualBytes: 'number',
      actualItems: 'number',
      bytesDone: 'number',
      bytesTotal: 'number',
      clusterId: 'string',
      completeTime: 'number',
      createdTime: 'number',
      crossAccountRoleName: 'string',
      crossAccountType: 'string',
      crossAccountUserId: 'number',
      errorFile: 'string',
      errorMessage: 'string',
      exclude: 'string',
      expireTime: 'number',
      failbackDetail: 'string',
      include: 'string',
      itemsDone: 'number',
      itemsTotal: 'number',
      meteringBytesDone: 'number',
      meteringBytesTotal: 'number',
      options: 'string',
      otsDetail: DescribeRestoreJobs2ResponseBodyRestoreJobsRestoreJobOtsDetail,
      parentId: 'string',
      progress: 'number',
      report: DescribeRestoreJobs2ResponseBodyRestoreJobsRestoreJobReport,
      restoreId: 'string',
      restoreType: 'string',
      snapshotHash: 'string',
      snapshotId: 'string',
      sourceType: 'string',
      speed: 'number',
      startTime: 'number',
      status: 'string',
      storageClass: 'string',
      targetBucket: 'string',
      targetClientId: 'string',
      targetCreateTime: 'number',
      targetDataSourceId: 'string',
      targetFileSystemId: 'string',
      targetInstanceId: 'string',
      targetInstanceName: 'string',
      targetPath: 'string',
      targetPrefix: 'string',
      targetTableName: 'string',
      targetTime: 'number',
      udmDetail: 'string',
      updatedTime: 'number',
      vaultId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreJobs2ResponseBodyRestoreJobs extends $tea.Model {
  restoreJob?: DescribeRestoreJobs2ResponseBodyRestoreJobsRestoreJob[];
  static names(): { [key: string]: string } {
    return {
      restoreJob: 'RestoreJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      restoreJob: { 'type': 'array', 'itemType': DescribeRestoreJobs2ResponseBodyRestoreJobsRestoreJob },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUdmSnapshotsResponseBodySnapshotsDetail extends $tea.Model {
  consistentLevel?: string;
  containOsDisk?: boolean;
  diskCategory?: string;
  diskDevName?: string;
  diskHbrSnapshotIdWithDeviceMap?: { [key: string]: any };
  diskIdList?: string[];
  downgradeReason?: string;
  hostName?: string;
  instanceIdWithDiskIdListMap?: { [key: string]: any };
  instanceName?: string;
  instanceType?: string;
  instantAccess?: boolean;
  nativeSnapshotIdList?: string[];
  osDiskId?: string;
  osName?: string;
  osNameEn?: string;
  osType?: string;
  performanceLevel?: string;
  platform?: string;
  snapshotGroupId?: string;
  systemDisk?: boolean;
  vmName?: string;
  static names(): { [key: string]: string } {
    return {
      consistentLevel: 'ConsistentLevel',
      containOsDisk: 'ContainOsDisk',
      diskCategory: 'DiskCategory',
      diskDevName: 'DiskDevName',
      diskHbrSnapshotIdWithDeviceMap: 'DiskHbrSnapshotIdWithDeviceMap',
      diskIdList: 'DiskIdList',
      downgradeReason: 'DowngradeReason',
      hostName: 'HostName',
      instanceIdWithDiskIdListMap: 'InstanceIdWithDiskIdListMap',
      instanceName: 'InstanceName',
      instanceType: 'InstanceType',
      instantAccess: 'InstantAccess',
      nativeSnapshotIdList: 'NativeSnapshotIdList',
      osDiskId: 'OsDiskId',
      osName: 'OsName',
      osNameEn: 'OsNameEn',
      osType: 'OsType',
      performanceLevel: 'PerformanceLevel',
      platform: 'Platform',
      snapshotGroupId: 'SnapshotGroupId',
      systemDisk: 'SystemDisk',
      vmName: 'VmName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consistentLevel: 'string',
      containOsDisk: 'boolean',
      diskCategory: 'string',
      diskDevName: 'string',
      diskHbrSnapshotIdWithDeviceMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      diskIdList: { 'type': 'array', 'itemType': 'string' },
      downgradeReason: 'string',
      hostName: 'string',
      instanceIdWithDiskIdListMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      instanceName: 'string',
      instanceType: 'string',
      instantAccess: 'boolean',
      nativeSnapshotIdList: { 'type': 'array', 'itemType': 'string' },
      osDiskId: 'string',
      osName: 'string',
      osNameEn: 'string',
      osType: 'string',
      performanceLevel: 'string',
      platform: 'string',
      snapshotGroupId: 'string',
      systemDisk: 'boolean',
      vmName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUdmSnapshotsResponseBodySnapshots extends $tea.Model {
  actualBytes?: string;
  advancedRetentionType?: string;
  backupType?: string;
  bytesTotal?: number;
  completeTime?: number;
  createTime?: number;
  createdTime?: number;
  detail?: DescribeUdmSnapshotsResponseBodySnapshotsDetail;
  diskId?: string;
  expireTime?: number;
  instanceId?: string;
  jobId?: string;
  nativeSnapshotId?: string;
  nativeSnapshotInfo?: string;
  parentSnapshotHash?: string;
  prefix?: string;
  realSnapshotTime?: number;
  retention?: number;
  snapshotHash?: string;
  snapshotId?: string;
  sourceType?: string;
  startTime?: number;
  status?: string;
  updatedTime?: number;
  static names(): { [key: string]: string } {
    return {
      actualBytes: 'ActualBytes',
      advancedRetentionType: 'AdvancedRetentionType',
      backupType: 'BackupType',
      bytesTotal: 'BytesTotal',
      completeTime: 'CompleteTime',
      createTime: 'CreateTime',
      createdTime: 'CreatedTime',
      detail: 'Detail',
      diskId: 'DiskId',
      expireTime: 'ExpireTime',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      nativeSnapshotId: 'NativeSnapshotId',
      nativeSnapshotInfo: 'NativeSnapshotInfo',
      parentSnapshotHash: 'ParentSnapshotHash',
      prefix: 'Prefix',
      realSnapshotTime: 'RealSnapshotTime',
      retention: 'Retention',
      snapshotHash: 'SnapshotHash',
      snapshotId: 'SnapshotId',
      sourceType: 'SourceType',
      startTime: 'StartTime',
      status: 'Status',
      updatedTime: 'UpdatedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualBytes: 'string',
      advancedRetentionType: 'string',
      backupType: 'string',
      bytesTotal: 'number',
      completeTime: 'number',
      createTime: 'number',
      createdTime: 'number',
      detail: DescribeUdmSnapshotsResponseBodySnapshotsDetail,
      diskId: 'string',
      expireTime: 'number',
      instanceId: 'string',
      jobId: 'string',
      nativeSnapshotId: 'string',
      nativeSnapshotInfo: 'string',
      parentSnapshotHash: 'string',
      prefix: 'string',
      realSnapshotTime: 'number',
      retention: 'number',
      snapshotHash: 'string',
      snapshotId: 'string',
      sourceType: 'string',
      startTime: 'number',
      status: 'string',
      updatedTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVaultReplicationRegionsResponseBodyRegions extends $tea.Model {
  regionId?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVaultsRequestTag extends $tea.Model {
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

export class DescribeVaultsResponseBodyVaultsVaultBackupPlanStatistics extends $tea.Model {
  commonNas?: number;
  csg?: number;
  ecsFile?: number;
  ecsHana?: number;
  isilon?: number;
  localFile?: number;
  localVm?: number;
  mySql?: number;
  nas?: number;
  oracle?: number;
  oss?: number;
  ots?: number;
  sqlServer?: number;
  static names(): { [key: string]: string } {
    return {
      commonNas: 'CommonNas',
      csg: 'Csg',
      ecsFile: 'EcsFile',
      ecsHana: 'EcsHana',
      isilon: 'Isilon',
      localFile: 'LocalFile',
      localVm: 'LocalVm',
      mySql: 'MySql',
      nas: 'Nas',
      oracle: 'Oracle',
      oss: 'Oss',
      ots: 'Ots',
      sqlServer: 'SqlServer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonNas: 'number',
      csg: 'number',
      ecsFile: 'number',
      ecsHana: 'number',
      isilon: 'number',
      localFile: 'number',
      localVm: 'number',
      mySql: 'number',
      nas: 'number',
      oracle: 'number',
      oss: 'number',
      ots: 'number',
      sqlServer: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVaultsResponseBodyVaultsVaultReplicationProgress extends $tea.Model {
  historicalReplicationProgress?: number;
  newReplicationProgress?: number;
  static names(): { [key: string]: string } {
    return {
      historicalReplicationProgress: 'HistoricalReplicationProgress',
      newReplicationProgress: 'NewReplicationProgress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      historicalReplicationProgress: 'number',
      newReplicationProgress: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVaultsResponseBodyVaultsVaultSourceTypes extends $tea.Model {
  sourceType?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceType: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVaultsResponseBodyVaultsVaultTagsTag extends $tea.Model {
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

export class DescribeVaultsResponseBodyVaultsVaultTags extends $tea.Model {
  tag?: DescribeVaultsResponseBodyVaultsVaultTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeVaultsResponseBodyVaultsVaultTagsTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVaultsResponseBodyVaultsVaultTrialInfo extends $tea.Model {
  keepAfterTrialExpiration?: boolean;
  trialExpireTime?: number;
  trialStartTime?: number;
  trialVaultReleaseTime?: number;
  static names(): { [key: string]: string } {
    return {
      keepAfterTrialExpiration: 'KeepAfterTrialExpiration',
      trialExpireTime: 'TrialExpireTime',
      trialStartTime: 'TrialStartTime',
      trialVaultReleaseTime: 'TrialVaultReleaseTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keepAfterTrialExpiration: 'boolean',
      trialExpireTime: 'number',
      trialStartTime: 'number',
      trialVaultReleaseTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVaultsResponseBodyVaultsVault extends $tea.Model {
  archiveBytesDone?: number;
  archiveStorageSize?: number;
  backupPlanStatistics?: DescribeVaultsResponseBodyVaultsVaultBackupPlanStatistics;
  bucketName?: string;
  bytesDone?: number;
  chargeType?: string;
  chargedStorageSize?: number;
  compressionAlgorithm?: string;
  createdTime?: number;
  dedup?: boolean;
  description?: string;
  encryptType?: string;
  indexAvailable?: boolean;
  indexLevel?: string;
  indexUpdateTime?: number;
  kmsKeyId?: string;
  latestReplicationTime?: number;
  redundancyType?: string;
  replication?: boolean;
  replicationProgress?: DescribeVaultsResponseBodyVaultsVaultReplicationProgress;
  replicationSourceRegionId?: string;
  replicationSourceVault?: boolean;
  replicationSourceVaultId?: string;
  resourceGroupId?: string;
  retention?: number;
  searchEnabled?: boolean;
  snapshotCount?: number;
  sourceTypes?: DescribeVaultsResponseBodyVaultsVaultSourceTypes;
  status?: string;
  storageSize?: number;
  tags?: DescribeVaultsResponseBodyVaultsVaultTags;
  trialInfo?: DescribeVaultsResponseBodyVaultsVaultTrialInfo;
  updatedTime?: number;
  vaultId?: string;
  vaultName?: string;
  vaultRegionId?: string;
  vaultStatusMessage?: string;
  vaultStorageClass?: string;
  vaultType?: string;
  wormEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      archiveBytesDone: 'ArchiveBytesDone',
      archiveStorageSize: 'ArchiveStorageSize',
      backupPlanStatistics: 'BackupPlanStatistics',
      bucketName: 'BucketName',
      bytesDone: 'BytesDone',
      chargeType: 'ChargeType',
      chargedStorageSize: 'ChargedStorageSize',
      compressionAlgorithm: 'CompressionAlgorithm',
      createdTime: 'CreatedTime',
      dedup: 'Dedup',
      description: 'Description',
      encryptType: 'EncryptType',
      indexAvailable: 'IndexAvailable',
      indexLevel: 'IndexLevel',
      indexUpdateTime: 'IndexUpdateTime',
      kmsKeyId: 'KmsKeyId',
      latestReplicationTime: 'LatestReplicationTime',
      redundancyType: 'RedundancyType',
      replication: 'Replication',
      replicationProgress: 'ReplicationProgress',
      replicationSourceRegionId: 'ReplicationSourceRegionId',
      replicationSourceVault: 'ReplicationSourceVault',
      replicationSourceVaultId: 'ReplicationSourceVaultId',
      resourceGroupId: 'ResourceGroupId',
      retention: 'Retention',
      searchEnabled: 'SearchEnabled',
      snapshotCount: 'SnapshotCount',
      sourceTypes: 'SourceTypes',
      status: 'Status',
      storageSize: 'StorageSize',
      tags: 'Tags',
      trialInfo: 'TrialInfo',
      updatedTime: 'UpdatedTime',
      vaultId: 'VaultId',
      vaultName: 'VaultName',
      vaultRegionId: 'VaultRegionId',
      vaultStatusMessage: 'VaultStatusMessage',
      vaultStorageClass: 'VaultStorageClass',
      vaultType: 'VaultType',
      wormEnabled: 'WormEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      archiveBytesDone: 'number',
      archiveStorageSize: 'number',
      backupPlanStatistics: DescribeVaultsResponseBodyVaultsVaultBackupPlanStatistics,
      bucketName: 'string',
      bytesDone: 'number',
      chargeType: 'string',
      chargedStorageSize: 'number',
      compressionAlgorithm: 'string',
      createdTime: 'number',
      dedup: 'boolean',
      description: 'string',
      encryptType: 'string',
      indexAvailable: 'boolean',
      indexLevel: 'string',
      indexUpdateTime: 'number',
      kmsKeyId: 'string',
      latestReplicationTime: 'number',
      redundancyType: 'string',
      replication: 'boolean',
      replicationProgress: DescribeVaultsResponseBodyVaultsVaultReplicationProgress,
      replicationSourceRegionId: 'string',
      replicationSourceVault: 'boolean',
      replicationSourceVaultId: 'string',
      resourceGroupId: 'string',
      retention: 'number',
      searchEnabled: 'boolean',
      snapshotCount: 'number',
      sourceTypes: DescribeVaultsResponseBodyVaultsVaultSourceTypes,
      status: 'string',
      storageSize: 'number',
      tags: DescribeVaultsResponseBodyVaultsVaultTags,
      trialInfo: DescribeVaultsResponseBodyVaultsVaultTrialInfo,
      updatedTime: 'number',
      vaultId: 'string',
      vaultName: 'string',
      vaultRegionId: 'string',
      vaultStatusMessage: 'string',
      vaultStorageClass: 'string',
      vaultType: 'string',
      wormEnabled: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVaultsResponseBodyVaults extends $tea.Model {
  vault?: DescribeVaultsResponseBodyVaultsVault[];
  static names(): { [key: string]: string } {
    return {
      vault: 'Vault',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vault: { 'type': 'array', 'itemType': DescribeVaultsResponseBodyVaultsVault },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallBackupClientsResponseBodyInstanceStatuses extends $tea.Model {
  errorCode?: string;
  instanceId?: string;
  validInstance?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      instanceId: 'InstanceId',
      validInstance: 'ValidInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      instanceId: 'string',
      validInstance: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchHistoricalSnapshotsResponseBodySnapshotsSnapshotPaths extends $tea.Model {
  path?: string[];
  static names(): { [key: string]: string } {
    return {
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      path: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchHistoricalSnapshotsResponseBodySnapshotsSnapshot extends $tea.Model {
  actualBytes?: number;
  actualItems?: number;
  archiveTime?: number;
  backupType?: string;
  bucket?: string;
  bytesDone?: number;
  bytesTotal?: number;
  clientId?: string;
  completeTime?: number;
  createTime?: number;
  createdTime?: number;
  errorFile?: string;
  exclude?: string;
  expireTime?: number;
  fileSystemId?: string;
  include?: string;
  instanceId?: string;
  instanceName?: string;
  itemsDone?: number;
  itemsTotal?: number;
  jobId?: string;
  parentSnapshotHash?: string;
  path?: string;
  paths?: SearchHistoricalSnapshotsResponseBodySnapshotsSnapshotPaths;
  prefix?: string;
  rangeEnd?: number;
  rangeStart?: number;
  retention?: number;
  snapshotHash?: string;
  snapshotId?: string;
  sourceParentSnapshotHash?: string;
  sourceSnapshotHash?: string;
  sourceType?: string;
  startTime?: number;
  status?: string;
  storageClass?: string;
  tableName?: string;
  updatedTime?: number;
  useCommonNas?: boolean;
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      actualBytes: 'ActualBytes',
      actualItems: 'ActualItems',
      archiveTime: 'ArchiveTime',
      backupType: 'BackupType',
      bucket: 'Bucket',
      bytesDone: 'BytesDone',
      bytesTotal: 'BytesTotal',
      clientId: 'ClientId',
      completeTime: 'CompleteTime',
      createTime: 'CreateTime',
      createdTime: 'CreatedTime',
      errorFile: 'ErrorFile',
      exclude: 'Exclude',
      expireTime: 'ExpireTime',
      fileSystemId: 'FileSystemId',
      include: 'Include',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      itemsDone: 'ItemsDone',
      itemsTotal: 'ItemsTotal',
      jobId: 'JobId',
      parentSnapshotHash: 'ParentSnapshotHash',
      path: 'Path',
      paths: 'Paths',
      prefix: 'Prefix',
      rangeEnd: 'RangeEnd',
      rangeStart: 'RangeStart',
      retention: 'Retention',
      snapshotHash: 'SnapshotHash',
      snapshotId: 'SnapshotId',
      sourceParentSnapshotHash: 'SourceParentSnapshotHash',
      sourceSnapshotHash: 'SourceSnapshotHash',
      sourceType: 'SourceType',
      startTime: 'StartTime',
      status: 'Status',
      storageClass: 'StorageClass',
      tableName: 'TableName',
      updatedTime: 'UpdatedTime',
      useCommonNas: 'UseCommonNas',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualBytes: 'number',
      actualItems: 'number',
      archiveTime: 'number',
      backupType: 'string',
      bucket: 'string',
      bytesDone: 'number',
      bytesTotal: 'number',
      clientId: 'string',
      completeTime: 'number',
      createTime: 'number',
      createdTime: 'number',
      errorFile: 'string',
      exclude: 'string',
      expireTime: 'number',
      fileSystemId: 'string',
      include: 'string',
      instanceId: 'string',
      instanceName: 'string',
      itemsDone: 'number',
      itemsTotal: 'number',
      jobId: 'string',
      parentSnapshotHash: 'string',
      path: 'string',
      paths: SearchHistoricalSnapshotsResponseBodySnapshotsSnapshotPaths,
      prefix: 'string',
      rangeEnd: 'number',
      rangeStart: 'number',
      retention: 'number',
      snapshotHash: 'string',
      snapshotId: 'string',
      sourceParentSnapshotHash: 'string',
      sourceSnapshotHash: 'string',
      sourceType: 'string',
      startTime: 'number',
      status: 'string',
      storageClass: 'string',
      tableName: 'string',
      updatedTime: 'number',
      useCommonNas: 'boolean',
      vaultId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchHistoricalSnapshotsResponseBodySnapshots extends $tea.Model {
  snapshot?: SearchHistoricalSnapshotsResponseBodySnapshotsSnapshot[];
  static names(): { [key: string]: string } {
    return {
      snapshot: 'Snapshot',
    };
  }

  static types(): { [key: string]: any } {
    return {
      snapshot: { 'type': 'array', 'itemType': SearchHistoricalSnapshotsResponseBodySnapshotsSnapshot },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UninstallBackupClientsResponseBodyInstanceStatuses extends $tea.Model {
  errorCode?: string;
  instanceId?: string;
  validInstance?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      instanceId: 'InstanceId',
      validInstance: 'ValidInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      instanceId: 'string',
      validInstance: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBackupPlanRequestRule extends $tea.Model {
  backupType?: string;
  destinationRegionId?: string;
  destinationRetention?: number;
  disabled?: boolean;
  doCopy?: boolean;
  retention?: number;
  ruleName?: string;
  schedule?: string;
  static names(): { [key: string]: string } {
    return {
      backupType: 'BackupType',
      destinationRegionId: 'DestinationRegionId',
      destinationRetention: 'DestinationRetention',
      disabled: 'Disabled',
      doCopy: 'DoCopy',
      retention: 'Retention',
      ruleName: 'RuleName',
      schedule: 'Schedule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupType: 'string',
      destinationRegionId: 'string',
      destinationRetention: 'number',
      disabled: 'boolean',
      doCopy: 'boolean',
      retention: 'number',
      ruleName: 'string',
      schedule: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBackupPlanShrinkRequestRule extends $tea.Model {
  backupType?: string;
  destinationRegionId?: string;
  destinationRetention?: number;
  disabled?: boolean;
  doCopy?: boolean;
  retention?: number;
  ruleName?: string;
  schedule?: string;
  static names(): { [key: string]: string } {
    return {
      backupType: 'BackupType',
      destinationRegionId: 'DestinationRegionId',
      destinationRetention: 'DestinationRetention',
      disabled: 'Disabled',
      doCopy: 'DoCopy',
      retention: 'Retention',
      ruleName: 'RuleName',
      schedule: 'Schedule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupType: 'string',
      destinationRegionId: 'string',
      destinationRetention: 'number',
      disabled: 'boolean',
      doCopy: 'boolean',
      retention: 'number',
      ruleName: 'string',
      schedule: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePolicyBindingRequestAdvancedOptionsCommonFileSystemDetail extends $tea.Model {
  fetchSliceSize?: number;
  fullOnIncrementFail?: boolean;
  static names(): { [key: string]: string } {
    return {
      fetchSliceSize: 'FetchSliceSize',
      fullOnIncrementFail: 'FullOnIncrementFail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fetchSliceSize: 'number',
      fullOnIncrementFail: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePolicyBindingRequestAdvancedOptionsOssDetail extends $tea.Model {
  inventoryCleanupPolicy?: string;
  inventoryId?: string;
  static names(): { [key: string]: string } {
    return {
      inventoryCleanupPolicy: 'InventoryCleanupPolicy',
      inventoryId: 'InventoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inventoryCleanupPolicy: 'string',
      inventoryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePolicyBindingRequestAdvancedOptionsUdmDetail extends $tea.Model {
  appConsistent?: boolean;
  diskIdList?: string[];
  enableFsFreeze?: boolean;
  enableWriters?: boolean;
  excludeDiskIdList?: string[];
  postScriptPath?: string;
  preScriptPath?: string;
  ramRoleName?: string;
  snapshotGroup?: boolean;
  timeoutInSeconds?: number;
  static names(): { [key: string]: string } {
    return {
      appConsistent: 'AppConsistent',
      diskIdList: 'DiskIdList',
      enableFsFreeze: 'EnableFsFreeze',
      enableWriters: 'EnableWriters',
      excludeDiskIdList: 'ExcludeDiskIdList',
      postScriptPath: 'PostScriptPath',
      preScriptPath: 'PreScriptPath',
      ramRoleName: 'RamRoleName',
      snapshotGroup: 'SnapshotGroup',
      timeoutInSeconds: 'TimeoutInSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appConsistent: 'boolean',
      diskIdList: { 'type': 'array', 'itemType': 'string' },
      enableFsFreeze: 'boolean',
      enableWriters: 'boolean',
      excludeDiskIdList: { 'type': 'array', 'itemType': 'string' },
      postScriptPath: 'string',
      preScriptPath: 'string',
      ramRoleName: 'string',
      snapshotGroup: 'boolean',
      timeoutInSeconds: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePolicyBindingRequestAdvancedOptions extends $tea.Model {
  commonFileSystemDetail?: UpdatePolicyBindingRequestAdvancedOptionsCommonFileSystemDetail;
  ossDetail?: UpdatePolicyBindingRequestAdvancedOptionsOssDetail;
  udmDetail?: UpdatePolicyBindingRequestAdvancedOptionsUdmDetail;
  static names(): { [key: string]: string } {
    return {
      commonFileSystemDetail: 'CommonFileSystemDetail',
      ossDetail: 'OssDetail',
      udmDetail: 'UdmDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonFileSystemDetail: UpdatePolicyBindingRequestAdvancedOptionsCommonFileSystemDetail,
      ossDetail: UpdatePolicyBindingRequestAdvancedOptionsOssDetail,
      udmDetail: UpdatePolicyBindingRequestAdvancedOptionsUdmDetail,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePolicyV2RequestRulesRetentionRules extends $tea.Model {
  advancedRetentionType?: string;
  retention?: number;
  whichSnapshot?: number;
  static names(): { [key: string]: string } {
    return {
      advancedRetentionType: 'AdvancedRetentionType',
      retention: 'Retention',
      whichSnapshot: 'WhichSnapshot',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advancedRetentionType: 'string',
      retention: 'number',
      whichSnapshot: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePolicyV2RequestRules extends $tea.Model {
  archiveDays?: number;
  backupType?: string;
  coldArchiveDays?: number;
  keepLatestSnapshots?: number;
  replicationRegionId?: string;
  retention?: number;
  retentionRules?: UpdatePolicyV2RequestRulesRetentionRules[];
  ruleId?: string;
  ruleType?: string;
  schedule?: string;
  static names(): { [key: string]: string } {
    return {
      archiveDays: 'ArchiveDays',
      backupType: 'BackupType',
      coldArchiveDays: 'ColdArchiveDays',
      keepLatestSnapshots: 'KeepLatestSnapshots',
      replicationRegionId: 'ReplicationRegionId',
      retention: 'Retention',
      retentionRules: 'RetentionRules',
      ruleId: 'RuleId',
      ruleType: 'RuleType',
      schedule: 'Schedule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      archiveDays: 'number',
      backupType: 'string',
      coldArchiveDays: 'number',
      keepLatestSnapshots: 'number',
      replicationRegionId: 'string',
      retention: 'number',
      retentionRules: { 'type': 'array', 'itemType': UpdatePolicyV2RequestRulesRetentionRules },
      ruleId: 'string',
      ruleType: 'string',
      schedule: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeBackupClientsResponseBodyInstanceStatuses extends $tea.Model {
  errorCode?: string;
  instanceId?: string;
  validInstance?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      instanceId: 'InstanceId',
      validInstance: 'ValidInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      instanceId: 'string',
      validInstance: 'boolean',
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
      'ap-northeast-2-pop': "hbr.aliyuncs.com",
      'cn-beijing-finance-1': "hbr.aliyuncs.com",
      'cn-beijing-finance-pop': "hbr.aliyuncs.com",
      'cn-beijing-gov-1': "hbr.aliyuncs.com",
      'cn-beijing-nu16-b01': "hbr.aliyuncs.com",
      'cn-edge-1': "hbr.aliyuncs.com",
      'cn-fujian': "hbr.aliyuncs.com",
      'cn-haidian-cm12-c01': "hbr.aliyuncs.com",
      'cn-hangzhou-bj-b01': "hbr.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "hbr.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "hbr.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "hbr.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "hbr.aliyuncs.com",
      'cn-hangzhou-test-306': "hbr.aliyuncs.com",
      'cn-hongkong-finance-pop': "hbr.aliyuncs.com",
      'cn-huhehaote-nebula-1': "hbr.aliyuncs.com",
      'cn-qingdao-nebula': "hbr.aliyuncs.com",
      'cn-shanghai-et15-b01': "hbr.aliyuncs.com",
      'cn-shanghai-et2-b01': "hbr.aliyuncs.com",
      'cn-shanghai-inner': "hbr.aliyuncs.com",
      'cn-shanghai-internal-test-1': "hbr.aliyuncs.com",
      'cn-shenzhen-inner': "hbr.aliyuncs.com",
      'cn-shenzhen-st4-d01': "hbr.aliyuncs.com",
      'cn-shenzhen-su18-b01': "hbr.aliyuncs.com",
      'cn-wuhan': "hbr.aliyuncs.com",
      'cn-wulanchabu': "hbr.aliyuncs.com",
      'cn-yushanfang': "hbr.aliyuncs.com",
      'cn-zhangbei': "hbr.aliyuncs.com",
      'cn-zhangbei-na61-b01': "hbr.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "hbr.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "hbr.aliyuncs.com",
      'eu-west-1-oxs': "hbr.aliyuncs.com",
      'rus-west-1-pop': "hbr.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("hbr", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async addContainerClusterWithOptions(request: AddContainerClusterRequest, runtime: $Util.RuntimeOptions): Promise<AddContainerClusterResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterType)) {
      query["ClusterType"] = request.clusterType;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.identifier)) {
      query["Identifier"] = request.identifier;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.networkType)) {
      query["NetworkType"] = request.networkType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddContainerCluster",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddContainerClusterResponse>(await this.callApi(params, req, runtime), new AddContainerClusterResponse({}));
  }

  async addContainerCluster(request: AddContainerClusterRequest): Promise<AddContainerClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addContainerClusterWithOptions(request, runtime);
  }

  async attachNasFileSystemWithOptions(request: AttachNasFileSystemRequest, runtime: $Util.RuntimeOptions): Promise<AttachNasFileSystemResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.createTime)) {
      query["CreateTime"] = request.createTime;
    }

    if (!Util.isUnset(request.crossAccountRoleName)) {
      query["CrossAccountRoleName"] = request.crossAccountRoleName;
    }

    if (!Util.isUnset(request.crossAccountType)) {
      query["CrossAccountType"] = request.crossAccountType;
    }

    if (!Util.isUnset(request.crossAccountUserId)) {
      query["CrossAccountUserId"] = request.crossAccountUserId;
    }

    if (!Util.isUnset(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AttachNasFileSystem",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AttachNasFileSystemResponse>(await this.callApi(params, req, runtime), new AttachNasFileSystemResponse({}));
  }

  async attachNasFileSystem(request: AttachNasFileSystemRequest): Promise<AttachNasFileSystemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.attachNasFileSystemWithOptions(request, runtime);
  }

  async cancelBackupJobWithOptions(request: CancelBackupJobRequest, runtime: $Util.RuntimeOptions): Promise<CancelBackupJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!Util.isUnset(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CancelBackupJob",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CancelBackupJobResponse>(await this.callApi(params, req, runtime), new CancelBackupJobResponse({}));
  }

  async cancelBackupJob(request: CancelBackupJobRequest): Promise<CancelBackupJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelBackupJobWithOptions(request, runtime);
  }

  async cancelRestoreJobWithOptions(request: CancelRestoreJobRequest, runtime: $Util.RuntimeOptions): Promise<CancelRestoreJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.restoreId)) {
      query["RestoreId"] = request.restoreId;
    }

    if (!Util.isUnset(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CancelRestoreJob",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CancelRestoreJobResponse>(await this.callApi(params, req, runtime), new CancelRestoreJobResponse({}));
  }

  async cancelRestoreJob(request: CancelRestoreJobRequest): Promise<CancelRestoreJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelRestoreJobWithOptions(request, runtime);
  }

  /**
    * *   In the Hybrid Backup Recovery (HBR), you can use resource groups to manage resources such as backup vaults, backup clients, and SAP HANA instances.
    * *   A resource is a cloud service entity that you create on Alibaba Cloud, such as an ECS instance, a backup vault, or an SAP HANA instance.
    * *   You can sort resources owned by your Alibaba Cloud account into various resource groups. This facilitates resource management among multiple projects or applications within your Alibaba Cloud account and simplifies permission management.
    *
    * @param request ChangeResourceGroupRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ChangeResourceGroupResponse
   */
  async changeResourceGroupWithOptions(request: ChangeResourceGroupRequest, runtime: $Util.RuntimeOptions): Promise<ChangeResourceGroupResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.newResourceGroupId)) {
      body["NewResourceGroupId"] = request.newResourceGroupId;
    }

    if (!Util.isUnset(request.resourceId)) {
      body["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ChangeResourceGroup",
      version: "2017-09-08",
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
    * *   In the Hybrid Backup Recovery (HBR), you can use resource groups to manage resources such as backup vaults, backup clients, and SAP HANA instances.
    * *   A resource is a cloud service entity that you create on Alibaba Cloud, such as an ECS instance, a backup vault, or an SAP HANA instance.
    * *   You can sort resources owned by your Alibaba Cloud account into various resource groups. This facilitates resource management among multiple projects or applications within your Alibaba Cloud account and simplifies permission management.
    *
    * @param request ChangeResourceGroupRequest
    * @return ChangeResourceGroupResponse
   */
  async changeResourceGroup(request: ChangeResourceGroupRequest): Promise<ChangeResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.changeResourceGroupWithOptions(request, runtime);
  }

  async checkRoleWithOptions(request: CheckRoleRequest, runtime: $Util.RuntimeOptions): Promise<CheckRoleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.checkRoleType)) {
      query["CheckRoleType"] = request.checkRoleType;
    }

    if (!Util.isUnset(request.crossAccountRoleName)) {
      query["CrossAccountRoleName"] = request.crossAccountRoleName;
    }

    if (!Util.isUnset(request.crossAccountUserId)) {
      query["CrossAccountUserId"] = request.crossAccountUserId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CheckRole",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckRoleResponse>(await this.callApi(params, req, runtime), new CheckRoleResponse({}));
  }

  async checkRole(request: CheckRoleRequest): Promise<CheckRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkRoleWithOptions(request, runtime);
  }

  async createBackupJobWithOptions(tmpReq: CreateBackupJobRequest, runtime: $Util.RuntimeOptions): Promise<CreateBackupJobResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateBackupJobShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.detail)) {
      request.detailShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.detail, "Detail", "json");
    }

    let query = { };
    if (!Util.isUnset(request.backupType)) {
      query["BackupType"] = request.backupType;
    }

    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.containerClusterId)) {
      query["ContainerClusterId"] = request.containerClusterId;
    }

    if (!Util.isUnset(request.containerResources)) {
      query["ContainerResources"] = request.containerResources;
    }

    if (!Util.isUnset(request.crossAccountRoleName)) {
      query["CrossAccountRoleName"] = request.crossAccountRoleName;
    }

    if (!Util.isUnset(request.crossAccountType)) {
      query["CrossAccountType"] = request.crossAccountType;
    }

    if (!Util.isUnset(request.crossAccountUserId)) {
      query["CrossAccountUserId"] = request.crossAccountUserId;
    }

    if (!Util.isUnset(request.detailShrink)) {
      query["Detail"] = request.detailShrink;
    }

    if (!Util.isUnset(request.exclude)) {
      query["Exclude"] = request.exclude;
    }

    if (!Util.isUnset(request.include)) {
      query["Include"] = request.include;
    }

    if (!Util.isUnset(request.initiatedByAck)) {
      query["InitiatedByAck"] = request.initiatedByAck;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.jobName)) {
      query["JobName"] = request.jobName;
    }

    if (!Util.isUnset(request.options)) {
      query["Options"] = request.options;
    }

    if (!Util.isUnset(request.retention)) {
      query["Retention"] = request.retention;
    }

    if (!Util.isUnset(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    if (!Util.isUnset(request.speedLimit)) {
      query["SpeedLimit"] = request.speedLimit;
    }

    if (!Util.isUnset(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateBackupJob",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateBackupJobResponse>(await this.callApi(params, req, runtime), new CreateBackupJobResponse({}));
  }

  async createBackupJob(request: CreateBackupJobRequest): Promise<CreateBackupJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createBackupJobWithOptions(request, runtime);
  }

  /**
    * *   A backup schedule defines the data source, backup policy, and other configurations. After you execute a backup schedule, a backup job is generated to record the backup progress and the backup result. If a backup job is complete, a backup snapshot is generated. You can use a backup snapshot to create a restore job.
    * *   You can specify only one type of data source in a backup schedule.
    * *   You can specify only one interval as a backup cycle in a backup schedule.
    * *   Each backup schedule allows you to back up data to only one backup vault.
    *
    * @param tmpReq CreateBackupPlanRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateBackupPlanResponse
   */
  async createBackupPlanWithOptions(tmpReq: CreateBackupPlanRequest, runtime: $Util.RuntimeOptions): Promise<CreateBackupPlanResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateBackupPlanShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.destDataSourceDetail)) {
      request.destDataSourceDetailShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.destDataSourceDetail, "DestDataSourceDetail", "json");
    }

    if (!Util.isUnset(tmpReq.detail)) {
      request.detailShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.detail, "Detail", "json");
    }

    if (!Util.isUnset(tmpReq.otsDetail)) {
      request.otsDetailShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.otsDetail, "OtsDetail", "json");
    }

    let query = { };
    if (!Util.isUnset(request.backupType)) {
      query["BackupType"] = request.backupType;
    }

    if (!Util.isUnset(request.bucket)) {
      query["Bucket"] = request.bucket;
    }

    if (!Util.isUnset(request.changeListPath)) {
      query["ChangeListPath"] = request.changeListPath;
    }

    if (!Util.isUnset(request.createTime)) {
      query["CreateTime"] = request.createTime;
    }

    if (!Util.isUnset(request.crossAccountRoleName)) {
      query["CrossAccountRoleName"] = request.crossAccountRoleName;
    }

    if (!Util.isUnset(request.crossAccountType)) {
      query["CrossAccountType"] = request.crossAccountType;
    }

    if (!Util.isUnset(request.crossAccountUserId)) {
      query["CrossAccountUserId"] = request.crossAccountUserId;
    }

    if (!Util.isUnset(request.destDataSourceDetailShrink)) {
      query["DestDataSourceDetail"] = request.destDataSourceDetailShrink;
    }

    if (!Util.isUnset(request.destDataSourceId)) {
      query["DestDataSourceId"] = request.destDataSourceId;
    }

    if (!Util.isUnset(request.destSourceType)) {
      query["DestSourceType"] = request.destSourceType;
    }

    if (!Util.isUnset(request.detailShrink)) {
      query["Detail"] = request.detailShrink;
    }

    if (!Util.isUnset(request.disabled)) {
      query["Disabled"] = request.disabled;
    }

    if (!Util.isUnset(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!Util.isUnset(request.keepLatestSnapshots)) {
      query["KeepLatestSnapshots"] = request.keepLatestSnapshots;
    }

    if (!Util.isUnset(request.planName)) {
      query["PlanName"] = request.planName;
    }

    if (!Util.isUnset(request.prefix)) {
      query["Prefix"] = request.prefix;
    }

    if (!Util.isUnset(request.retention)) {
      query["Retention"] = request.retention;
    }

    if (!Util.isUnset(request.schedule)) {
      query["Schedule"] = request.schedule;
    }

    if (!Util.isUnset(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    if (!Util.isUnset(request.udmRegionId)) {
      query["UdmRegionId"] = request.udmRegionId;
    }

    if (!Util.isUnset(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.exclude)) {
      body["Exclude"] = request.exclude;
    }

    if (!Util.isUnset(request.include)) {
      body["Include"] = request.include;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.instanceName)) {
      body["InstanceName"] = request.instanceName;
    }

    if (!Util.isUnset(request.options)) {
      body["Options"] = request.options;
    }

    if (!Util.isUnset(request.otsDetailShrink)) {
      body["OtsDetail"] = request.otsDetailShrink;
    }

    if (!Util.isUnset(request.path)) {
      body["Path"] = request.path;
    }

    if (!Util.isUnset(request.rule)) {
      body["Rule"] = request.rule;
    }

    if (!Util.isUnset(request.speedLimit)) {
      body["SpeedLimit"] = request.speedLimit;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateBackupPlan",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateBackupPlanResponse>(await this.callApi(params, req, runtime), new CreateBackupPlanResponse({}));
  }

  /**
    * *   A backup schedule defines the data source, backup policy, and other configurations. After you execute a backup schedule, a backup job is generated to record the backup progress and the backup result. If a backup job is complete, a backup snapshot is generated. You can use a backup snapshot to create a restore job.
    * *   You can specify only one type of data source in a backup schedule.
    * *   You can specify only one interval as a backup cycle in a backup schedule.
    * *   Each backup schedule allows you to back up data to only one backup vault.
    *
    * @param request CreateBackupPlanRequest
    * @return CreateBackupPlanResponse
   */
  async createBackupPlan(request: CreateBackupPlanRequest): Promise<CreateBackupPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createBackupPlanWithOptions(request, runtime);
  }

  /**
    * Before you call this operation, make sure that you fully understand the billing methods and pricing of Hybrid Backup Recovery (HBR). For more information, see [Billable items and billing methods](~~89062~~).
    *
    * @param request CreateClientsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateClientsResponse
   */
  async createClientsWithOptions(request: CreateClientsRequest, runtime: $Util.RuntimeOptions): Promise<CreateClientsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.alertSetting)) {
      query["AlertSetting"] = request.alertSetting;
    }

    if (!Util.isUnset(request.clientInfo)) {
      query["ClientInfo"] = request.clientInfo;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.useHttps)) {
      query["UseHttps"] = request.useHttps;
    }

    if (!Util.isUnset(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateClients",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateClientsResponse>(await this.callApi(params, req, runtime), new CreateClientsResponse({}));
  }

  /**
    * Before you call this operation, make sure that you fully understand the billing methods and pricing of Hybrid Backup Recovery (HBR). For more information, see [Billable items and billing methods](~~89062~~).
    *
    * @param request CreateClientsRequest
    * @return CreateClientsResponse
   */
  async createClients(request: CreateClientsRequest): Promise<CreateClientsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createClientsWithOptions(request, runtime);
  }

  /**
    * *   A backup plan defines the data source, backup policy, and other configurations. After you execute a backup plan, a backup job is generated to record the backup progress and the backup result. If a backup job is completed, a backup snapshot is generated. You can use a backup snapshot to create a restore job.
    * *   You can specify only one type of data source in a backup plan.
    * *   You can specify only one interval as a backup cycle in a backup plan.
    * *   Each backup plan allows you to back up data to only one backup vault.
    *
    * @param request CreateHanaBackupPlanRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateHanaBackupPlanResponse
   */
  async createHanaBackupPlanWithOptions(request: CreateHanaBackupPlanRequest, runtime: $Util.RuntimeOptions): Promise<CreateHanaBackupPlanResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backupPrefix)) {
      query["BackupPrefix"] = request.backupPrefix;
    }

    if (!Util.isUnset(request.backupType)) {
      query["BackupType"] = request.backupType;
    }

    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.databaseName)) {
      query["DatabaseName"] = request.databaseName;
    }

    if (!Util.isUnset(request.planName)) {
      query["PlanName"] = request.planName;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.schedule)) {
      query["Schedule"] = request.schedule;
    }

    if (!Util.isUnset(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateHanaBackupPlan",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateHanaBackupPlanResponse>(await this.callApi(params, req, runtime), new CreateHanaBackupPlanResponse({}));
  }

  /**
    * *   A backup plan defines the data source, backup policy, and other configurations. After you execute a backup plan, a backup job is generated to record the backup progress and the backup result. If a backup job is completed, a backup snapshot is generated. You can use a backup snapshot to create a restore job.
    * *   You can specify only one type of data source in a backup plan.
    * *   You can specify only one interval as a backup cycle in a backup plan.
    * *   Each backup plan allows you to back up data to only one backup vault.
    *
    * @param request CreateHanaBackupPlanRequest
    * @return CreateHanaBackupPlanResponse
   */
  async createHanaBackupPlan(request: CreateHanaBackupPlanRequest): Promise<CreateHanaBackupPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createHanaBackupPlanWithOptions(request, runtime);
  }

  /**
    * To register an SAP HANA instance, you must configure the connection parameters of the SAP HANA instance. After the SAP HANA instance is registered, HBR installs an HBR client on the ECS instance that hosts the SAP HANA instance.
    *
    * @param request CreateHanaInstanceRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateHanaInstanceResponse
   */
  async createHanaInstanceWithOptions(request: CreateHanaInstanceRequest, runtime: $Util.RuntimeOptions): Promise<CreateHanaInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.alertSetting)) {
      query["AlertSetting"] = request.alertSetting;
    }

    if (!Util.isUnset(request.ecsInstanceId)) {
      query["EcsInstanceId"] = request.ecsInstanceId;
    }

    if (!Util.isUnset(request.hanaName)) {
      query["HanaName"] = request.hanaName;
    }

    if (!Util.isUnset(request.host)) {
      query["Host"] = request.host;
    }

    if (!Util.isUnset(request.instanceNumber)) {
      query["InstanceNumber"] = request.instanceNumber;
    }

    if (!Util.isUnset(request.password)) {
      query["Password"] = request.password;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.sid)) {
      query["Sid"] = request.sid;
    }

    if (!Util.isUnset(request.useSsl)) {
      query["UseSsl"] = request.useSsl;
    }

    if (!Util.isUnset(request.userName)) {
      query["UserName"] = request.userName;
    }

    if (!Util.isUnset(request.validateCertificate)) {
      query["ValidateCertificate"] = request.validateCertificate;
    }

    if (!Util.isUnset(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateHanaInstance",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateHanaInstanceResponse>(await this.callApi(params, req, runtime), new CreateHanaInstanceResponse({}));
  }

  /**
    * To register an SAP HANA instance, you must configure the connection parameters of the SAP HANA instance. After the SAP HANA instance is registered, HBR installs an HBR client on the ECS instance that hosts the SAP HANA instance.
    *
    * @param request CreateHanaInstanceRequest
    * @return CreateHanaInstanceResponse
   */
  async createHanaInstance(request: CreateHanaInstanceRequest): Promise<CreateHanaInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createHanaInstanceWithOptions(request, runtime);
  }

  /**
    * If you call this operation to restore a database, the database is restored to a specified state. Proceed with caution. For more information, see [Restore databases to an SAP HANA instance](~~101178~~).
    *
    * @param request CreateHanaRestoreRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateHanaRestoreResponse
   */
  async createHanaRestoreWithOptions(request: CreateHanaRestoreRequest, runtime: $Util.RuntimeOptions): Promise<CreateHanaRestoreResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backupId)) {
      query["BackupId"] = request.backupId;
    }

    if (!Util.isUnset(request.backupPrefix)) {
      query["BackupPrefix"] = request.backupPrefix;
    }

    if (!Util.isUnset(request.checkAccess)) {
      query["CheckAccess"] = request.checkAccess;
    }

    if (!Util.isUnset(request.clearLog)) {
      query["ClearLog"] = request.clearLog;
    }

    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.databaseName)) {
      query["DatabaseName"] = request.databaseName;
    }

    if (!Util.isUnset(request.logPosition)) {
      query["LogPosition"] = request.logPosition;
    }

    if (!Util.isUnset(request.masterClientId)) {
      query["MasterClientId"] = request.masterClientId;
    }

    if (!Util.isUnset(request.mode)) {
      query["Mode"] = request.mode;
    }

    if (!Util.isUnset(request.recoveryPointInTime)) {
      query["RecoveryPointInTime"] = request.recoveryPointInTime;
    }

    if (!Util.isUnset(request.sidAdmin)) {
      query["SidAdmin"] = request.sidAdmin;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    if (!Util.isUnset(request.sourceClusterId)) {
      query["SourceClusterId"] = request.sourceClusterId;
    }

    if (!Util.isUnset(request.systemCopy)) {
      query["SystemCopy"] = request.systemCopy;
    }

    if (!Util.isUnset(request.useCatalog)) {
      query["UseCatalog"] = request.useCatalog;
    }

    if (!Util.isUnset(request.useDelta)) {
      query["UseDelta"] = request.useDelta;
    }

    if (!Util.isUnset(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    if (!Util.isUnset(request.volumeId)) {
      query["VolumeId"] = request.volumeId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateHanaRestore",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateHanaRestoreResponse>(await this.callApi(params, req, runtime), new CreateHanaRestoreResponse({}));
  }

  /**
    * If you call this operation to restore a database, the database is restored to a specified state. Proceed with caution. For more information, see [Restore databases to an SAP HANA instance](~~101178~~).
    *
    * @param request CreateHanaRestoreRequest
    * @return CreateHanaRestoreResponse
   */
  async createHanaRestore(request: CreateHanaRestoreRequest): Promise<CreateHanaRestoreResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createHanaRestoreWithOptions(request, runtime);
  }

  /**
    * *   You can bind data sources to only one policy in each request.
    * *   Elastic Compute Service (ECS) instances can be bound to only one policy.
    *
    * @param tmpReq CreatePolicyBindingsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreatePolicyBindingsResponse
   */
  async createPolicyBindingsWithOptions(tmpReq: CreatePolicyBindingsRequest, runtime: $Util.RuntimeOptions): Promise<CreatePolicyBindingsResponse> {
    Util.validateModel(tmpReq);
    let request = new CreatePolicyBindingsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.policyBindingList)) {
      request.policyBindingListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.policyBindingList, "PolicyBindingList", "json");
    }

    let query = { };
    if (!Util.isUnset(request.policyBindingListShrink)) {
      query["PolicyBindingList"] = request.policyBindingListShrink;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.policyId)) {
      body["PolicyId"] = request.policyId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreatePolicyBindings",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreatePolicyBindingsResponse>(await this.callApi(params, req, runtime), new CreatePolicyBindingsResponse({}));
  }

  /**
    * *   You can bind data sources to only one policy in each request.
    * *   Elastic Compute Service (ECS) instances can be bound to only one policy.
    *
    * @param request CreatePolicyBindingsRequest
    * @return CreatePolicyBindingsResponse
   */
  async createPolicyBindings(request: CreatePolicyBindingsRequest): Promise<CreatePolicyBindingsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createPolicyBindingsWithOptions(request, runtime);
  }

  /**
    * A backup policy records the information required for backup. After you execute a backup policy, a backup job is generated to record the backup progress and the backup result. If a backup job is completed, a backup snapshot is generated. You can use a backup snapshot to create a restore job.
    * *   A backup policy supports multiple data sources. The data sources can be only Elastic Compute Service (ECS) instances.
    * *   You can specify only one interval as a backup cycle in a backup policy.
    * *   Each backup policy allows you to back up data to only one backup vault.
    *
    * @param tmpReq CreatePolicyV2Request
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreatePolicyV2Response
   */
  async createPolicyV2WithOptions(tmpReq: CreatePolicyV2Request, runtime: $Util.RuntimeOptions): Promise<CreatePolicyV2Response> {
    Util.validateModel(tmpReq);
    let request = new CreatePolicyV2ShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.rules)) {
      request.rulesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.rules, "Rules", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.policyDescription)) {
      body["PolicyDescription"] = request.policyDescription;
    }

    if (!Util.isUnset(request.policyName)) {
      body["PolicyName"] = request.policyName;
    }

    if (!Util.isUnset(request.rulesShrink)) {
      body["Rules"] = request.rulesShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreatePolicyV2",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreatePolicyV2Response>(await this.callApi(params, req, runtime), new CreatePolicyV2Response({}));
  }

  /**
    * A backup policy records the information required for backup. After you execute a backup policy, a backup job is generated to record the backup progress and the backup result. If a backup job is completed, a backup snapshot is generated. You can use a backup snapshot to create a restore job.
    * *   A backup policy supports multiple data sources. The data sources can be only Elastic Compute Service (ECS) instances.
    * *   You can specify only one interval as a backup cycle in a backup policy.
    * *   Each backup policy allows you to back up data to only one backup vault.
    *
    * @param request CreatePolicyV2Request
    * @return CreatePolicyV2Response
   */
  async createPolicyV2(request: CreatePolicyV2Request): Promise<CreatePolicyV2Response> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createPolicyV2WithOptions(request, runtime);
  }

  /**
    * After a backup vault is created, the backup vault is in the INITIALIZING state, and the system automatically runs an initialization task to initialize the backup vault. After the initialization task is completed, the backup vault is in the CREATED state.
    *
    * @param request CreateReplicationVaultRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateReplicationVaultResponse
   */
  async createReplicationVaultWithOptions(request: CreateReplicationVaultRequest, runtime: $Util.RuntimeOptions): Promise<CreateReplicationVaultResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.redundancyType)) {
      query["RedundancyType"] = request.redundancyType;
    }

    if (!Util.isUnset(request.replicationSourceRegionId)) {
      query["ReplicationSourceRegionId"] = request.replicationSourceRegionId;
    }

    if (!Util.isUnset(request.replicationSourceVaultId)) {
      query["ReplicationSourceVaultId"] = request.replicationSourceVaultId;
    }

    if (!Util.isUnset(request.vaultName)) {
      query["VaultName"] = request.vaultName;
    }

    if (!Util.isUnset(request.vaultRegionId)) {
      query["VaultRegionId"] = request.vaultRegionId;
    }

    if (!Util.isUnset(request.vaultStorageClass)) {
      query["VaultStorageClass"] = request.vaultStorageClass;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateReplicationVault",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateReplicationVaultResponse>(await this.callApi(params, req, runtime), new CreateReplicationVaultResponse({}));
  }

  /**
    * After a backup vault is created, the backup vault is in the INITIALIZING state, and the system automatically runs an initialization task to initialize the backup vault. After the initialization task is completed, the backup vault is in the CREATED state.
    *
    * @param request CreateReplicationVaultRequest
    * @return CreateReplicationVaultResponse
   */
  async createReplicationVault(request: CreateReplicationVaultRequest): Promise<CreateReplicationVaultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createReplicationVaultWithOptions(request, runtime);
  }

  /**
    * *   You must create a restore job based on the specified backup snapshot and restore destination.
    * *   The type of the data source from which you restore data must be the same as the type of the restore destination.
    *
    * @param tmpReq CreateRestoreJobRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateRestoreJobResponse
   */
  async createRestoreJobWithOptions(tmpReq: CreateRestoreJobRequest, runtime: $Util.RuntimeOptions): Promise<CreateRestoreJobResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateRestoreJobShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.failbackDetail)) {
      request.failbackDetailShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.failbackDetail, "FailbackDetail", "json");
    }

    if (!Util.isUnset(tmpReq.otsDetail)) {
      request.otsDetailShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.otsDetail, "OtsDetail", "json");
    }

    if (!Util.isUnset(tmpReq.udmDetail)) {
      request.udmDetailShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.udmDetail, "UdmDetail", "json");
    }

    let query = { };
    if (!Util.isUnset(request.crossAccountRoleName)) {
      query["CrossAccountRoleName"] = request.crossAccountRoleName;
    }

    if (!Util.isUnset(request.crossAccountType)) {
      query["CrossAccountType"] = request.crossAccountType;
    }

    if (!Util.isUnset(request.crossAccountUserId)) {
      query["CrossAccountUserId"] = request.crossAccountUserId;
    }

    if (!Util.isUnset(request.failbackDetailShrink)) {
      query["FailbackDetail"] = request.failbackDetailShrink;
    }

    if (!Util.isUnset(request.initiatedByAck)) {
      query["InitiatedByAck"] = request.initiatedByAck;
    }

    if (!Util.isUnset(request.options)) {
      query["Options"] = request.options;
    }

    if (!Util.isUnset(request.restoreType)) {
      query["RestoreType"] = request.restoreType;
    }

    if (!Util.isUnset(request.snapshotHash)) {
      query["SnapshotHash"] = request.snapshotHash;
    }

    if (!Util.isUnset(request.snapshotId)) {
      query["SnapshotId"] = request.snapshotId;
    }

    if (!Util.isUnset(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    if (!Util.isUnset(request.targetBucket)) {
      query["TargetBucket"] = request.targetBucket;
    }

    if (!Util.isUnset(request.targetContainer)) {
      query["TargetContainer"] = request.targetContainer;
    }

    if (!Util.isUnset(request.targetContainerClusterId)) {
      query["TargetContainerClusterId"] = request.targetContainerClusterId;
    }

    if (!Util.isUnset(request.targetCreateTime)) {
      query["TargetCreateTime"] = request.targetCreateTime;
    }

    if (!Util.isUnset(request.targetFileSystemId)) {
      query["TargetFileSystemId"] = request.targetFileSystemId;
    }

    if (!Util.isUnset(request.targetInstanceName)) {
      query["TargetInstanceName"] = request.targetInstanceName;
    }

    if (!Util.isUnset(request.targetPrefix)) {
      query["TargetPrefix"] = request.targetPrefix;
    }

    if (!Util.isUnset(request.targetTableName)) {
      query["TargetTableName"] = request.targetTableName;
    }

    if (!Util.isUnset(request.targetTime)) {
      query["TargetTime"] = request.targetTime;
    }

    if (!Util.isUnset(request.udmDetailShrink)) {
      query["UdmDetail"] = request.udmDetailShrink;
    }

    if (!Util.isUnset(request.udmRegionId)) {
      query["UdmRegionId"] = request.udmRegionId;
    }

    if (!Util.isUnset(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.exclude)) {
      body["Exclude"] = request.exclude;
    }

    if (!Util.isUnset(request.include)) {
      body["Include"] = request.include;
    }

    if (!Util.isUnset(request.otsDetailShrink)) {
      body["OtsDetail"] = request.otsDetailShrink;
    }

    if (!Util.isUnset(request.targetInstanceId)) {
      body["TargetInstanceId"] = request.targetInstanceId;
    }

    if (!Util.isUnset(request.targetPath)) {
      body["TargetPath"] = request.targetPath;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateRestoreJob",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateRestoreJobResponse>(await this.callApi(params, req, runtime), new CreateRestoreJobResponse({}));
  }

  /**
    * *   You must create a restore job based on the specified backup snapshot and restore destination.
    * *   The type of the data source from which you restore data must be the same as the type of the restore destination.
    *
    * @param request CreateRestoreJobRequest
    * @return CreateRestoreJobResponse
   */
  async createRestoreJob(request: CreateRestoreJobRequest): Promise<CreateRestoreJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRestoreJobWithOptions(request, runtime);
  }

  /**
    * 1.  You can directly upload a file to Object Storage Service (OSS) by using a form based on the returned value of this operation.
    * 2.  For more information about how to upload a file to OSS by using a form, see OSS documentation.
    * 3.  The system periodically deletes files that are uploaded to OSS.
    *
    * @param request CreateTempFileUploadUrlRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateTempFileUploadUrlResponse
   */
  async createTempFileUploadUrlWithOptions(request: CreateTempFileUploadUrlRequest, runtime: $Util.RuntimeOptions): Promise<CreateTempFileUploadUrlResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateTempFileUploadUrl",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateTempFileUploadUrlResponse>(await this.callApi(params, req, runtime), new CreateTempFileUploadUrlResponse({}));
  }

  /**
    * 1.  You can directly upload a file to Object Storage Service (OSS) by using a form based on the returned value of this operation.
    * 2.  For more information about how to upload a file to OSS by using a form, see OSS documentation.
    * 3.  The system periodically deletes files that are uploaded to OSS.
    *
    * @param request CreateTempFileUploadUrlRequest
    * @return CreateTempFileUploadUrlResponse
   */
  async createTempFileUploadUrl(request: CreateTempFileUploadUrlRequest): Promise<CreateTempFileUploadUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTempFileUploadUrlWithOptions(request, runtime);
  }

  /**
    * *   Each Alibaba Cloud account can create up to 100 backup vaults.
    * *   After a backup vault is created, the backup vault is in the INITIALIZING state, and the system automatically runs an initialization task to initialize the backup vault. After the initialization task is completed, the backup vault is in the CREATED state. A backup job can use a backup vault to store backup data only if the backup vault is in the CREATED state.
    *
    * @param request CreateVaultRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateVaultResponse
   */
  async createVaultWithOptions(request: CreateVaultRequest, runtime: $Util.RuntimeOptions): Promise<CreateVaultResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.encryptType)) {
      query["EncryptType"] = request.encryptType;
    }

    if (!Util.isUnset(request.kmsKeyId)) {
      query["KmsKeyId"] = request.kmsKeyId;
    }

    if (!Util.isUnset(request.vaultName)) {
      query["VaultName"] = request.vaultName;
    }

    if (!Util.isUnset(request.vaultRegionId)) {
      query["VaultRegionId"] = request.vaultRegionId;
    }

    if (!Util.isUnset(request.vaultStorageClass)) {
      query["VaultStorageClass"] = request.vaultStorageClass;
    }

    if (!Util.isUnset(request.vaultType)) {
      query["VaultType"] = request.vaultType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateVault",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateVaultResponse>(await this.callApi(params, req, runtime), new CreateVaultResponse({}));
  }

  /**
    * *   Each Alibaba Cloud account can create up to 100 backup vaults.
    * *   After a backup vault is created, the backup vault is in the INITIALIZING state, and the system automatically runs an initialization task to initialize the backup vault. After the initialization task is completed, the backup vault is in the CREATED state. A backup job can use a backup vault to store backup data only if the backup vault is in the CREATED state.
    *
    * @param request CreateVaultRequest
    * @return CreateVaultResponse
   */
  async createVault(request: CreateVaultRequest): Promise<CreateVaultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createVaultWithOptions(request, runtime);
  }

  /**
    * *   You cannot delete an active backup client from which a heartbeat packet is received within the previous hour. After you call the UninstallBackupClients operation to uninstall a backup client, the status of the backup client changes to inactive.
    * *   This operation deletes the resources that are related to the backup client. The following resources are included:
    *     *   Backup plans
    *     *   Backup jobs
    *     *   Backup files
    *
    * @param request DeleteBackupClientRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteBackupClientResponse
   */
  async deleteBackupClientWithOptions(request: DeleteBackupClientRequest, runtime: $Util.RuntimeOptions): Promise<DeleteBackupClientResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteBackupClient",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteBackupClientResponse>(await this.callApi(params, req, runtime), new DeleteBackupClientResponse({}));
  }

  /**
    * *   You cannot delete an active backup client from which a heartbeat packet is received within the previous hour. After you call the UninstallBackupClients operation to uninstall a backup client, the status of the backup client changes to inactive.
    * *   This operation deletes the resources that are related to the backup client. The following resources are included:
    *     *   Backup plans
    *     *   Backup jobs
    *     *   Backup files
    *
    * @param request DeleteBackupClientRequest
    * @return DeleteBackupClientResponse
   */
  async deleteBackupClient(request: DeleteBackupClientRequest): Promise<DeleteBackupClientResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteBackupClientWithOptions(request, runtime);
  }

  /**
    * This operation deletes only the resources that are related to HBR clients. The resources include backup plans, backup jobs, and backup snapshots. The operation does not delete HBR clients.
    *
    * @param tmpReq DeleteBackupClientResourceRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteBackupClientResourceResponse
   */
  async deleteBackupClientResourceWithOptions(tmpReq: DeleteBackupClientResourceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteBackupClientResourceResponse> {
    Util.validateModel(tmpReq);
    let request = new DeleteBackupClientResourceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.clientIds)) {
      request.clientIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.clientIds, "ClientIds", "json");
    }

    let query = { };
    if (!Util.isUnset(request.clientIdsShrink)) {
      query["ClientIds"] = request.clientIdsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteBackupClientResource",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteBackupClientResourceResponse>(await this.callApi(params, req, runtime), new DeleteBackupClientResourceResponse({}));
  }

  /**
    * This operation deletes only the resources that are related to HBR clients. The resources include backup plans, backup jobs, and backup snapshots. The operation does not delete HBR clients.
    *
    * @param request DeleteBackupClientResourceRequest
    * @return DeleteBackupClientResourceResponse
   */
  async deleteBackupClientResource(request: DeleteBackupClientResourceRequest): Promise<DeleteBackupClientResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteBackupClientResourceWithOptions(request, runtime);
  }

  /**
    * *   If you delete a backup plan, the backup jobs are also deleted.
    * *   If you delete a backup plan, the created snapshot files are not deleted.
    *
    * @param request DeleteBackupPlanRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteBackupPlanResponse
   */
  async deleteBackupPlanWithOptions(request: DeleteBackupPlanRequest, runtime: $Util.RuntimeOptions): Promise<DeleteBackupPlanResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.planId)) {
      query["PlanId"] = request.planId;
    }

    if (!Util.isUnset(request.requireNoRunningJobs)) {
      query["RequireNoRunningJobs"] = request.requireNoRunningJobs;
    }

    if (!Util.isUnset(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    if (!Util.isUnset(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteBackupPlan",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteBackupPlanResponse>(await this.callApi(params, req, runtime), new DeleteBackupPlanResponse({}));
  }

  /**
    * *   If you delete a backup plan, the backup jobs are also deleted.
    * *   If you delete a backup plan, the created snapshot files are not deleted.
    *
    * @param request DeleteBackupPlanRequest
    * @return DeleteBackupPlanResponse
   */
  async deleteBackupPlan(request: DeleteBackupPlanRequest): Promise<DeleteBackupPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteBackupPlanWithOptions(request, runtime);
  }

  async deleteClientWithOptions(request: DeleteClientRequest, runtime: $Util.RuntimeOptions): Promise<DeleteClientResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteClient",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteClientResponse>(await this.callApi(params, req, runtime), new DeleteClientResponse({}));
  }

  async deleteClient(request: DeleteClientRequest): Promise<DeleteClientResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteClientWithOptions(request, runtime);
  }

  async deleteHanaBackupPlanWithOptions(request: DeleteHanaBackupPlanRequest, runtime: $Util.RuntimeOptions): Promise<DeleteHanaBackupPlanResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.planId)) {
      query["PlanId"] = request.planId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteHanaBackupPlan",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteHanaBackupPlanResponse>(await this.callApi(params, req, runtime), new DeleteHanaBackupPlanResponse({}));
  }

  async deleteHanaBackupPlan(request: DeleteHanaBackupPlanRequest): Promise<DeleteHanaBackupPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteHanaBackupPlanWithOptions(request, runtime);
  }

  /**
    * If you delete an SAP HANA instance, the existing backup data is also deleted and the running backup and restore jobs fail to be completed. Before you delete the SAP HANA instance, make sure that you no longer need the data in the HBR client of the instance and no backup or restore jobs are running for the instance. To delete an SAP HANA instance, you must specify the security identifier (SID) of the instance. The SID is three characters in length and starts with a letter. For more information, see [How to find sid user and instance number of HANA db?](https://answers.sap.com/questions/555192/how-to-find-sid-user-and-instance-number-of-hana-d.html?)
    *
    * @param request DeleteHanaInstanceRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteHanaInstanceResponse
   */
  async deleteHanaInstanceWithOptions(request: DeleteHanaInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteHanaInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.sid)) {
      query["Sid"] = request.sid;
    }

    if (!Util.isUnset(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteHanaInstance",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteHanaInstanceResponse>(await this.callApi(params, req, runtime), new DeleteHanaInstanceResponse({}));
  }

  /**
    * If you delete an SAP HANA instance, the existing backup data is also deleted and the running backup and restore jobs fail to be completed. Before you delete the SAP HANA instance, make sure that you no longer need the data in the HBR client of the instance and no backup or restore jobs are running for the instance. To delete an SAP HANA instance, you must specify the security identifier (SID) of the instance. The SID is three characters in length and starts with a letter. For more information, see [How to find sid user and instance number of HANA db?](https://answers.sap.com/questions/555192/how-to-find-sid-user-and-instance-number-of-hana-d.html?)
    *
    * @param request DeleteHanaInstanceRequest
    * @return DeleteHanaInstanceResponse
   */
  async deleteHanaInstance(request: DeleteHanaInstanceRequest): Promise<DeleteHanaInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteHanaInstanceWithOptions(request, runtime);
  }

  async deletePolicyBindingWithOptions(tmpReq: DeletePolicyBindingRequest, runtime: $Util.RuntimeOptions): Promise<DeletePolicyBindingResponse> {
    Util.validateModel(tmpReq);
    let request = new DeletePolicyBindingShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.dataSourceIds)) {
      request.dataSourceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.dataSourceIds, "DataSourceIds", "json");
    }

    let query = { };
    if (!Util.isUnset(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dataSourceIdsShrink)) {
      body["DataSourceIds"] = request.dataSourceIdsShrink;
    }

    if (!Util.isUnset(request.policyId)) {
      body["PolicyId"] = request.policyId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeletePolicyBinding",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeletePolicyBindingResponse>(await this.callApi(params, req, runtime), new DeletePolicyBindingResponse({}));
  }

  async deletePolicyBinding(request: DeletePolicyBindingRequest): Promise<DeletePolicyBindingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deletePolicyBindingWithOptions(request, runtime);
  }

  /**
    * If you delete a backup policy, the backup policy is disassociated with all data sources. Proceed with caution.
    *
    * @param request DeletePolicyV2Request
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeletePolicyV2Response
   */
  async deletePolicyV2WithOptions(request: DeletePolicyV2Request, runtime: $Util.RuntimeOptions): Promise<DeletePolicyV2Response> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.policyId)) {
      body["PolicyId"] = request.policyId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeletePolicyV2",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeletePolicyV2Response>(await this.callApi(params, req, runtime), new DeletePolicyV2Response({}));
  }

  /**
    * If you delete a backup policy, the backup policy is disassociated with all data sources. Proceed with caution.
    *
    * @param request DeletePolicyV2Request
    * @return DeletePolicyV2Response
   */
  async deletePolicyV2(request: DeletePolicyV2Request): Promise<DeletePolicyV2Response> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deletePolicyV2WithOptions(request, runtime);
  }

  /**
    * If you delete the most recent backup file for a data source, you must set the `Force parameter to true`. Otherwise, an error occurs.
    *
    * @param request DeleteSnapshotRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteSnapshotResponse
   */
  async deleteSnapshotWithOptions(request: DeleteSnapshotRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSnapshotResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!Util.isUnset(request.force)) {
      query["Force"] = request.force;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.snapshotId)) {
      query["SnapshotId"] = request.snapshotId;
    }

    if (!Util.isUnset(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    if (!Util.isUnset(request.token)) {
      query["Token"] = request.token;
    }

    if (!Util.isUnset(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteSnapshot",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteSnapshotResponse>(await this.callApi(params, req, runtime), new DeleteSnapshotResponse({}));
  }

  /**
    * If you delete the most recent backup file for a data source, you must set the `Force parameter to true`. Otherwise, an error occurs.
    *
    * @param request DeleteSnapshotRequest
    * @return DeleteSnapshotResponse
   */
  async deleteSnapshot(request: DeleteSnapshotRequest): Promise<DeleteSnapshotResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSnapshotWithOptions(request, runtime);
  }

  /**
    * *   You cannot delete a backup vault within 2 hours after the backup vault is created or a backup vault that is in the INITIALIZING state.
    * *   After you delete a backup vault, all resources that are associated with the backup vault are deleted. The resources include backup clients of earlier versions, backup plans, backup jobs, snapshots, and restore jobs.
    *
    * @param request DeleteVaultRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteVaultResponse
   */
  async deleteVaultWithOptions(request: DeleteVaultRequest, runtime: $Util.RuntimeOptions): Promise<DeleteVaultResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.token)) {
      query["Token"] = request.token;
    }

    if (!Util.isUnset(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteVault",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteVaultResponse>(await this.callApi(params, req, runtime), new DeleteVaultResponse({}));
  }

  /**
    * *   You cannot delete a backup vault within 2 hours after the backup vault is created or a backup vault that is in the INITIALIZING state.
    * *   After you delete a backup vault, all resources that are associated with the backup vault are deleted. The resources include backup clients of earlier versions, backup plans, backup jobs, snapshots, and restore jobs.
    *
    * @param request DeleteVaultRequest
    * @return DeleteVaultResponse
   */
  async deleteVault(request: DeleteVaultRequest): Promise<DeleteVaultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteVaultWithOptions(request, runtime);
  }

  async describeBackupClientsWithOptions(tmpReq: DescribeBackupClientsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBackupClientsResponse> {
    Util.validateModel(tmpReq);
    let request = new DescribeBackupClientsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.clientIds)) {
      request.clientIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.clientIds, "ClientIds", "json");
    }

    if (!Util.isUnset(tmpReq.instanceIds)) {
      request.instanceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.instanceIds, "InstanceIds", "json");
    }

    let query = { };
    if (!Util.isUnset(request.clientType)) {
      query["ClientType"] = request.clientType;
    }

    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.crossAccountRoleName)) {
      query["CrossAccountRoleName"] = request.crossAccountRoleName;
    }

    if (!Util.isUnset(request.crossAccountType)) {
      query["CrossAccountType"] = request.crossAccountType;
    }

    if (!Util.isUnset(request.crossAccountUserId)) {
      query["CrossAccountUserId"] = request.crossAccountUserId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientIdsShrink)) {
      body["ClientIds"] = request.clientIdsShrink;
    }

    if (!Util.isUnset(request.instanceIdsShrink)) {
      body["InstanceIds"] = request.instanceIdsShrink;
    }

    if (!Util.isUnset(request.tag)) {
      body["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeBackupClients",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeBackupClientsResponse>(await this.callApi(params, req, runtime), new DescribeBackupClientsResponse({}));
  }

  async describeBackupClients(request: DescribeBackupClientsRequest): Promise<DescribeBackupClientsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBackupClientsWithOptions(request, runtime);
  }

  async describeBackupJobs2WithOptions(request: DescribeBackupJobs2Request, runtime: $Util.RuntimeOptions): Promise<DescribeBackupJobs2Response> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.filters)) {
      query["Filters"] = request.filters;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.sortDirection)) {
      query["SortDirection"] = request.sortDirection;
    }

    if (!Util.isUnset(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeBackupJobs2",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeBackupJobs2Response>(await this.callApi(params, req, runtime), new DescribeBackupJobs2Response({}));
  }

  async describeBackupJobs2(request: DescribeBackupJobs2Request): Promise<DescribeBackupJobs2Response> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBackupJobs2WithOptions(request, runtime);
  }

  async describeBackupPlansWithOptions(request: DescribeBackupPlansRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBackupPlansResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.filters)) {
      query["Filters"] = request.filters;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeBackupPlans",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeBackupPlansResponse>(await this.callApi(params, req, runtime), new DescribeBackupPlansResponse({}));
  }

  async describeBackupPlans(request: DescribeBackupPlansRequest): Promise<DescribeBackupPlansResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBackupPlansWithOptions(request, runtime);
  }

  /**
    * This operation is applicable only to SAP HANA backup. For backup clients of other data sources, call the DescribeBackupClients operation.
    *
    * @param request DescribeClientsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeClientsResponse
   */
  async describeClientsWithOptions(request: DescribeClientsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeClientsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!Util.isUnset(request.clientType)) {
      query["ClientType"] = request.clientType;
    }

    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
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

    if (!Util.isUnset(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    if (!Util.isUnset(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeClients",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeClientsResponse>(await this.callApi(params, req, runtime), new DescribeClientsResponse({}));
  }

  /**
    * This operation is applicable only to SAP HANA backup. For backup clients of other data sources, call the DescribeBackupClients operation.
    *
    * @param request DescribeClientsRequest
    * @return DescribeClientsResponse
   */
  async describeClients(request: DescribeClientsRequest): Promise<DescribeClientsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeClientsWithOptions(request, runtime);
  }

  /**
    * You can call this operation to query only Container Service for Kubernetes (ACK) clusters.
    *
    * @param request DescribeContainerClusterRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeContainerClusterResponse
   */
  async describeContainerClusterWithOptions(request: DescribeContainerClusterRequest, runtime: $Util.RuntimeOptions): Promise<DescribeContainerClusterResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.identifier)) {
      query["Identifier"] = request.identifier;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeContainerCluster",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeContainerClusterResponse>(await this.callApi(params, req, runtime), new DescribeContainerClusterResponse({}));
  }

  /**
    * You can call this operation to query only Container Service for Kubernetes (ACK) clusters.
    *
    * @param request DescribeContainerClusterRequest
    * @return DescribeContainerClusterResponse
   */
  async describeContainerCluster(request: DescribeContainerClusterRequest): Promise<DescribeContainerClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeContainerClusterWithOptions(request, runtime);
  }

  async describeCrossAccountsWithOptions(request: DescribeCrossAccountsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCrossAccountsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCrossAccounts",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCrossAccountsResponse>(await this.callApi(params, req, runtime), new DescribeCrossAccountsResponse({}));
  }

  async describeCrossAccounts(request: DescribeCrossAccountsRequest): Promise<DescribeCrossAccountsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCrossAccountsWithOptions(request, runtime);
  }

  async describeHanaBackupPlansWithOptions(request: DescribeHanaBackupPlansRequest, runtime: $Util.RuntimeOptions): Promise<DescribeHanaBackupPlansResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.databaseName)) {
      query["DatabaseName"] = request.databaseName;
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

    if (!Util.isUnset(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeHanaBackupPlans",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeHanaBackupPlansResponse>(await this.callApi(params, req, runtime), new DescribeHanaBackupPlansResponse({}));
  }

  async describeHanaBackupPlans(request: DescribeHanaBackupPlansRequest): Promise<DescribeHanaBackupPlansResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeHanaBackupPlansWithOptions(request, runtime);
  }

  /**
    * If you want to query the backup retention period of a database, you can call the DescribeHanaRetentionSetting operation.
    *
    * @param request DescribeHanaBackupSettingRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeHanaBackupSettingResponse
   */
  async describeHanaBackupSettingWithOptions(request: DescribeHanaBackupSettingRequest, runtime: $Util.RuntimeOptions): Promise<DescribeHanaBackupSettingResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.databaseName)) {
      query["DatabaseName"] = request.databaseName;
    }

    if (!Util.isUnset(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeHanaBackupSetting",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeHanaBackupSettingResponse>(await this.callApi(params, req, runtime), new DescribeHanaBackupSettingResponse({}));
  }

  /**
    * If you want to query the backup retention period of a database, you can call the DescribeHanaRetentionSetting operation.
    *
    * @param request DescribeHanaBackupSettingRequest
    * @return DescribeHanaBackupSettingResponse
   */
  async describeHanaBackupSetting(request: DescribeHanaBackupSettingRequest): Promise<DescribeHanaBackupSettingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeHanaBackupSettingWithOptions(request, runtime);
  }

  /**
    * After you call the DescribeHanaBackupsAsync operation to query the SAP HANA backups that meet the specified conditions, call the DescribeTask operation to query the execution result of the asynchronous job.
    *
    * @param request DescribeHanaBackupsAsyncRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeHanaBackupsAsyncResponse
   */
  async describeHanaBackupsAsyncWithOptions(request: DescribeHanaBackupsAsyncRequest, runtime: $Util.RuntimeOptions): Promise<DescribeHanaBackupsAsyncResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.databaseName)) {
      query["DatabaseName"] = request.databaseName;
    }

    if (!Util.isUnset(request.includeDifferential)) {
      query["IncludeDifferential"] = request.includeDifferential;
    }

    if (!Util.isUnset(request.includeIncremental)) {
      query["IncludeIncremental"] = request.includeIncremental;
    }

    if (!Util.isUnset(request.includeLog)) {
      query["IncludeLog"] = request.includeLog;
    }

    if (!Util.isUnset(request.logPosition)) {
      query["LogPosition"] = request.logPosition;
    }

    if (!Util.isUnset(request.mode)) {
      query["Mode"] = request.mode;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.recoveryPointInTime)) {
      query["RecoveryPointInTime"] = request.recoveryPointInTime;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    if (!Util.isUnset(request.sourceClusterId)) {
      query["SourceClusterId"] = request.sourceClusterId;
    }

    if (!Util.isUnset(request.systemCopy)) {
      query["SystemCopy"] = request.systemCopy;
    }

    if (!Util.isUnset(request.useBackint)) {
      query["UseBackint"] = request.useBackint;
    }

    if (!Util.isUnset(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    if (!Util.isUnset(request.volumeId)) {
      query["VolumeId"] = request.volumeId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeHanaBackupsAsync",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeHanaBackupsAsyncResponse>(await this.callApi(params, req, runtime), new DescribeHanaBackupsAsyncResponse({}));
  }

  /**
    * After you call the DescribeHanaBackupsAsync operation to query the SAP HANA backups that meet the specified conditions, call the DescribeTask operation to query the execution result of the asynchronous job.
    *
    * @param request DescribeHanaBackupsAsyncRequest
    * @return DescribeHanaBackupsAsyncResponse
   */
  async describeHanaBackupsAsync(request: DescribeHanaBackupsAsyncRequest): Promise<DescribeHanaBackupsAsyncResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeHanaBackupsAsyncWithOptions(request, runtime);
  }

  /**
    * After you register an SAP HANA instance and install a backup client on the instance, you can call this operation to query the information about SAP HANA databases. You can call the StartHanaDatabaseAsync operation to start a database and call the StopHanaDatabaseAsync operation to stop a database.
    *
    * @param request DescribeHanaDatabasesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeHanaDatabasesResponse
   */
  async describeHanaDatabasesWithOptions(request: DescribeHanaDatabasesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeHanaDatabasesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
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

    if (!Util.isUnset(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeHanaDatabases",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeHanaDatabasesResponse>(await this.callApi(params, req, runtime), new DescribeHanaDatabasesResponse({}));
  }

  /**
    * After you register an SAP HANA instance and install a backup client on the instance, you can call this operation to query the information about SAP HANA databases. You can call the StartHanaDatabaseAsync operation to start a database and call the StopHanaDatabaseAsync operation to stop a database.
    *
    * @param request DescribeHanaDatabasesRequest
    * @return DescribeHanaDatabasesResponse
   */
  async describeHanaDatabases(request: DescribeHanaDatabasesRequest): Promise<DescribeHanaDatabasesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeHanaDatabasesWithOptions(request, runtime);
  }

  async describeHanaInstancesWithOptions(request: DescribeHanaInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeHanaInstancesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
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

    if (!Util.isUnset(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.tag)) {
      body["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeHanaInstances",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeHanaInstancesResponse>(await this.callApi(params, req, runtime), new DescribeHanaInstancesResponse({}));
  }

  async describeHanaInstances(request: DescribeHanaInstancesRequest): Promise<DescribeHanaInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeHanaInstancesWithOptions(request, runtime);
  }

  async describeHanaRestoresWithOptions(request: DescribeHanaRestoresRequest, runtime: $Util.RuntimeOptions): Promise<DescribeHanaRestoresResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backupId)) {
      query["BackupId"] = request.backupId;
    }

    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.databaseName)) {
      query["DatabaseName"] = request.databaseName;
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

    if (!Util.isUnset(request.restoreId)) {
      query["RestoreId"] = request.restoreId;
    }

    if (!Util.isUnset(request.restoreStatus)) {
      query["RestoreStatus"] = request.restoreStatus;
    }

    if (!Util.isUnset(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeHanaRestores",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeHanaRestoresResponse>(await this.callApi(params, req, runtime), new DescribeHanaRestoresResponse({}));
  }

  async describeHanaRestores(request: DescribeHanaRestoresRequest): Promise<DescribeHanaRestoresResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeHanaRestoresWithOptions(request, runtime);
  }

  /**
    * *   If you want to query the backup parameters of a database, you can call the DescribeHanaBackupSetting operation.
    * *   HBR deletes the expired catalogs and data that are related to Backint and file backup. The deleted catalogs and data cannot be restored. We recommend that you set the retention period based on your business requirements.
    *
    * @param request DescribeHanaRetentionSettingRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeHanaRetentionSettingResponse
   */
  async describeHanaRetentionSettingWithOptions(request: DescribeHanaRetentionSettingRequest, runtime: $Util.RuntimeOptions): Promise<DescribeHanaRetentionSettingResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.databaseName)) {
      query["DatabaseName"] = request.databaseName;
    }

    if (!Util.isUnset(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeHanaRetentionSetting",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeHanaRetentionSettingResponse>(await this.callApi(params, req, runtime), new DescribeHanaRetentionSettingResponse({}));
  }

  /**
    * *   If you want to query the backup parameters of a database, you can call the DescribeHanaBackupSetting operation.
    * *   HBR deletes the expired catalogs and data that are related to Backint and file backup. The deleted catalogs and data cannot be restored. We recommend that you set the retention period based on your business requirements.
    *
    * @param request DescribeHanaRetentionSettingRequest
    * @return DescribeHanaRetentionSettingResponse
   */
  async describeHanaRetentionSetting(request: DescribeHanaRetentionSettingRequest): Promise<DescribeHanaRetentionSettingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeHanaRetentionSettingWithOptions(request, runtime);
  }

  async describeOtsTableSnapshotsWithOptions(request: DescribeOtsTableSnapshotsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeOtsTableSnapshotsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.crossAccountRoleName)) {
      query["CrossAccountRoleName"] = request.crossAccountRoleName;
    }

    if (!Util.isUnset(request.crossAccountType)) {
      query["CrossAccountType"] = request.crossAccountType;
    }

    if (!Util.isUnset(request.crossAccountUserId)) {
      query["CrossAccountUserId"] = request.crossAccountUserId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.limit)) {
      body["Limit"] = request.limit;
    }

    if (!Util.isUnset(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!Util.isUnset(request.otsInstances)) {
      bodyFlat["OtsInstances"] = request.otsInstances;
    }

    if (!Util.isUnset(request.snapshotIds)) {
      bodyFlat["SnapshotIds"] = request.snapshotIds;
    }

    if (!Util.isUnset(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeOtsTableSnapshots",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeOtsTableSnapshotsResponse>(await this.callApi(params, req, runtime), new DescribeOtsTableSnapshotsResponse({}));
  }

  async describeOtsTableSnapshots(request: DescribeOtsTableSnapshotsRequest): Promise<DescribeOtsTableSnapshotsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeOtsTableSnapshotsWithOptions(request, runtime);
  }

  async describePoliciesV2WithOptions(request: DescribePoliciesV2Request, runtime: $Util.RuntimeOptions): Promise<DescribePoliciesV2Response> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.policyId)) {
      body["PolicyId"] = request.policyId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribePoliciesV2",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePoliciesV2Response>(await this.callApi(params, req, runtime), new DescribePoliciesV2Response({}));
  }

  async describePoliciesV2(request: DescribePoliciesV2Request): Promise<DescribePoliciesV2Response> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePoliciesV2WithOptions(request, runtime);
  }

  async describePolicyBindingsWithOptions(tmpReq: DescribePolicyBindingsRequest, runtime: $Util.RuntimeOptions): Promise<DescribePolicyBindingsResponse> {
    Util.validateModel(tmpReq);
    let request = new DescribePolicyBindingsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.dataSourceIds)) {
      request.dataSourceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.dataSourceIds, "DataSourceIds", "json");
    }

    let query = { };
    if (!Util.isUnset(request.filters)) {
      query["Filters"] = request.filters;
    }

    if (!Util.isUnset(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dataSourceIdsShrink)) {
      body["DataSourceIds"] = request.dataSourceIdsShrink;
    }

    if (!Util.isUnset(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.policyId)) {
      body["PolicyId"] = request.policyId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribePolicyBindings",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePolicyBindingsResponse>(await this.callApi(params, req, runtime), new DescribePolicyBindingsResponse({}));
  }

  async describePolicyBindings(request: DescribePolicyBindingsRequest): Promise<DescribePolicyBindingsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePolicyBindingsWithOptions(request, runtime);
  }

  async describeRecoverableOtsInstancesWithOptions(request: DescribeRecoverableOtsInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRecoverableOtsInstancesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.crossAccountRoleName)) {
      query["CrossAccountRoleName"] = request.crossAccountRoleName;
    }

    if (!Util.isUnset(request.crossAccountType)) {
      query["CrossAccountType"] = request.crossAccountType;
    }

    if (!Util.isUnset(request.crossAccountUserId)) {
      query["CrossAccountUserId"] = request.crossAccountUserId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRecoverableOtsInstances",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRecoverableOtsInstancesResponse>(await this.callApi(params, req, runtime), new DescribeRecoverableOtsInstancesResponse({}));
  }

  async describeRecoverableOtsInstances(request: DescribeRecoverableOtsInstancesRequest): Promise<DescribeRecoverableOtsInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRecoverableOtsInstancesWithOptions(request, runtime);
  }

  async describeRegionsWithOptions(request: DescribeRegionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.needVaultCount)) {
      query["NeedVaultCount"] = request.needVaultCount;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRegions",
      version: "2017-09-08",
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

  async describeRestoreJobs2WithOptions(request: DescribeRestoreJobs2Request, runtime: $Util.RuntimeOptions): Promise<DescribeRestoreJobs2Response> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.filters)) {
      query["Filters"] = request.filters;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.restoreType)) {
      query["RestoreType"] = request.restoreType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRestoreJobs2",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRestoreJobs2Response>(await this.callApi(params, req, runtime), new DescribeRestoreJobs2Response({}));
  }

  async describeRestoreJobs2(request: DescribeRestoreJobs2Request): Promise<DescribeRestoreJobs2Response> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRestoreJobs2WithOptions(request, runtime);
  }

  async describeTaskWithOptions(request: DescribeTaskRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!Util.isUnset(request.token)) {
      query["Token"] = request.token;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeTask",
      version: "2017-09-08",
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

  async describeTask(request: DescribeTaskRequest): Promise<DescribeTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTaskWithOptions(request, runtime);
  }

  async describeUdmSnapshotsWithOptions(tmpReq: DescribeUdmSnapshotsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUdmSnapshotsResponse> {
    Util.validateModel(tmpReq);
    let request = new DescribeUdmSnapshotsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.snapshotIds)) {
      request.snapshotIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.snapshotIds, "SnapshotIds", "json");
    }

    let query = { };
    if (!Util.isUnset(request.diskId)) {
      query["DiskId"] = request.diskId;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!Util.isUnset(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.udmRegionId)) {
      query["UdmRegionId"] = request.udmRegionId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.snapshotIdsShrink)) {
      body["SnapshotIds"] = request.snapshotIdsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeUdmSnapshots",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeUdmSnapshotsResponse>(await this.callApi(params, req, runtime), new DescribeUdmSnapshotsResponse({}));
  }

  async describeUdmSnapshots(request: DescribeUdmSnapshotsRequest): Promise<DescribeUdmSnapshotsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUdmSnapshotsWithOptions(request, runtime);
  }

  async describeVaultReplicationRegionsWithOptions(request: DescribeVaultReplicationRegionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVaultReplicationRegionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.token)) {
      query["Token"] = request.token;
    }

    if (!Util.isUnset(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeVaultReplicationRegions",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeVaultReplicationRegionsResponse>(await this.callApi(params, req, runtime), new DescribeVaultReplicationRegionsResponse({}));
  }

  async describeVaultReplicationRegions(request: DescribeVaultReplicationRegionsRequest): Promise<DescribeVaultReplicationRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVaultReplicationRegionsWithOptions(request, runtime);
  }

  async describeVaultsWithOptions(request: DescribeVaultsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVaultsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    if (!Util.isUnset(request.vaultRegionId)) {
      query["VaultRegionId"] = request.vaultRegionId;
    }

    if (!Util.isUnset(request.vaultType)) {
      query["VaultType"] = request.vaultType;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.tag)) {
      body["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeVaults",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeVaultsResponse>(await this.callApi(params, req, runtime), new DescribeVaultsResponse({}));
  }

  async describeVaults(request: DescribeVaultsRequest): Promise<DescribeVaultsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVaultsWithOptions(request, runtime);
  }

  /**
    * *   If the request is successful, the mount target is deleted.
    * *   After you create a backup plan for an Apsara File Storage NAS file system, HBR automatically creates a mount target for the file system. You can call this operation to delete the mount target. In the **Status** column of the mount target of the NAS file system, the following information is displayed: **This mount target is created by an Alibaba Cloud internal service and cannot be operated. Service name: HBR**.
    *
    * @param request DetachNasFileSystemRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DetachNasFileSystemResponse
   */
  async detachNasFileSystemWithOptions(request: DetachNasFileSystemRequest, runtime: $Util.RuntimeOptions): Promise<DetachNasFileSystemResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.createTime)) {
      query["CreateTime"] = request.createTime;
    }

    if (!Util.isUnset(request.crossAccountRoleName)) {
      query["CrossAccountRoleName"] = request.crossAccountRoleName;
    }

    if (!Util.isUnset(request.crossAccountType)) {
      query["CrossAccountType"] = request.crossAccountType;
    }

    if (!Util.isUnset(request.crossAccountUserId)) {
      query["CrossAccountUserId"] = request.crossAccountUserId;
    }

    if (!Util.isUnset(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DetachNasFileSystem",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DetachNasFileSystemResponse>(await this.callApi(params, req, runtime), new DetachNasFileSystemResponse({}));
  }

  /**
    * *   If the request is successful, the mount target is deleted.
    * *   After you create a backup plan for an Apsara File Storage NAS file system, HBR automatically creates a mount target for the file system. You can call this operation to delete the mount target. In the **Status** column of the mount target of the NAS file system, the following information is displayed: **This mount target is created by an Alibaba Cloud internal service and cannot be operated. Service name: HBR**.
    *
    * @param request DetachNasFileSystemRequest
    * @return DetachNasFileSystemResponse
   */
  async detachNasFileSystem(request: DetachNasFileSystemRequest): Promise<DetachNasFileSystemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detachNasFileSystemWithOptions(request, runtime);
  }

  /**
    * If the request is successful, the specified backup plan is disabled. If you call the DescribeBackupPlans operation to query backup plans, the Disabled parameter is set to true for the backup plan.
    *
    * @param request DisableBackupPlanRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DisableBackupPlanResponse
   */
  async disableBackupPlanWithOptions(request: DisableBackupPlanRequest, runtime: $Util.RuntimeOptions): Promise<DisableBackupPlanResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.planId)) {
      query["PlanId"] = request.planId;
    }

    if (!Util.isUnset(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    if (!Util.isUnset(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DisableBackupPlan",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DisableBackupPlanResponse>(await this.callApi(params, req, runtime), new DisableBackupPlanResponse({}));
  }

  /**
    * If the request is successful, the specified backup plan is disabled. If you call the DescribeBackupPlans operation to query backup plans, the Disabled parameter is set to true for the backup plan.
    *
    * @param request DisableBackupPlanRequest
    * @return DisableBackupPlanResponse
   */
  async disableBackupPlan(request: DisableBackupPlanRequest): Promise<DisableBackupPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableBackupPlanWithOptions(request, runtime);
  }

  /**
    * To enable the backup plan again, call the EnableHanaBackupPlan operation.
    *
    * @param request DisableHanaBackupPlanRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DisableHanaBackupPlanResponse
   */
  async disableHanaBackupPlanWithOptions(request: DisableHanaBackupPlanRequest, runtime: $Util.RuntimeOptions): Promise<DisableHanaBackupPlanResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.planId)) {
      query["PlanId"] = request.planId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DisableHanaBackupPlan",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DisableHanaBackupPlanResponse>(await this.callApi(params, req, runtime), new DisableHanaBackupPlanResponse({}));
  }

  /**
    * To enable the backup plan again, call the EnableHanaBackupPlan operation.
    *
    * @param request DisableHanaBackupPlanRequest
    * @return DisableHanaBackupPlanResponse
   */
  async disableHanaBackupPlan(request: DisableHanaBackupPlanRequest): Promise<DisableHanaBackupPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableHanaBackupPlanWithOptions(request, runtime);
  }

  /**
    * If the request is successful, the system enables the backup plan and backs up data based on the polices that are specified in the backup plan. If you call the DescribeBackupPlans operation to query backup plans, the Disabled parameter is automatically set to false for the backup plan.
    *
    * @param request EnableBackupPlanRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return EnableBackupPlanResponse
   */
  async enableBackupPlanWithOptions(request: EnableBackupPlanRequest, runtime: $Util.RuntimeOptions): Promise<EnableBackupPlanResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.planId)) {
      query["PlanId"] = request.planId;
    }

    if (!Util.isUnset(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    if (!Util.isUnset(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "EnableBackupPlan",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EnableBackupPlanResponse>(await this.callApi(params, req, runtime), new EnableBackupPlanResponse({}));
  }

  /**
    * If the request is successful, the system enables the backup plan and backs up data based on the polices that are specified in the backup plan. If you call the DescribeBackupPlans operation to query backup plans, the Disabled parameter is automatically set to false for the backup plan.
    *
    * @param request EnableBackupPlanRequest
    * @return EnableBackupPlanResponse
   */
  async enableBackupPlan(request: EnableBackupPlanRequest): Promise<EnableBackupPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableBackupPlanWithOptions(request, runtime);
  }

  /**
    * To disable the backup plan again, call the DisableHanaBackupPlan operation.
    *
    * @param request EnableHanaBackupPlanRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return EnableHanaBackupPlanResponse
   */
  async enableHanaBackupPlanWithOptions(request: EnableHanaBackupPlanRequest, runtime: $Util.RuntimeOptions): Promise<EnableHanaBackupPlanResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.planId)) {
      query["PlanId"] = request.planId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "EnableHanaBackupPlan",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EnableHanaBackupPlanResponse>(await this.callApi(params, req, runtime), new EnableHanaBackupPlanResponse({}));
  }

  /**
    * To disable the backup plan again, call the DisableHanaBackupPlan operation.
    *
    * @param request EnableHanaBackupPlanRequest
    * @return EnableHanaBackupPlanResponse
   */
  async enableHanaBackupPlan(request: EnableHanaBackupPlanRequest): Promise<EnableHanaBackupPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableHanaBackupPlanWithOptions(request, runtime);
  }

  async executeBackupPlanWithOptions(request: ExecuteBackupPlanRequest, runtime: $Util.RuntimeOptions): Promise<ExecuteBackupPlanResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.planId)) {
      query["PlanId"] = request.planId;
    }

    if (!Util.isUnset(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!Util.isUnset(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    if (!Util.isUnset(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ExecuteBackupPlan",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ExecuteBackupPlanResponse>(await this.callApi(params, req, runtime), new ExecuteBackupPlanResponse({}));
  }

  async executeBackupPlan(request: ExecuteBackupPlanRequest): Promise<ExecuteBackupPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.executeBackupPlanWithOptions(request, runtime);
  }

  async executePolicyV2WithOptions(request: ExecutePolicyV2Request, runtime: $Util.RuntimeOptions): Promise<ExecutePolicyV2Response> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!Util.isUnset(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dataSourceId)) {
      body["DataSourceId"] = request.dataSourceId;
    }

    if (!Util.isUnset(request.policyId)) {
      body["PolicyId"] = request.policyId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ExecutePolicyV2",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ExecutePolicyV2Response>(await this.callApi(params, req, runtime), new ExecutePolicyV2Response({}));
  }

  async executePolicyV2(request: ExecutePolicyV2Request): Promise<ExecutePolicyV2Response> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.executePolicyV2WithOptions(request, runtime);
  }

  async generateRamPolicyWithOptions(request: GenerateRamPolicyRequest, runtime: $Util.RuntimeOptions): Promise<GenerateRamPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.actionType)) {
      query["ActionType"] = request.actionType;
    }

    if (!Util.isUnset(request.requireBasePolicy)) {
      query["RequireBasePolicy"] = request.requireBasePolicy;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GenerateRamPolicy",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GenerateRamPolicyResponse>(await this.callApi(params, req, runtime), new GenerateRamPolicyResponse({}));
  }

  async generateRamPolicy(request: GenerateRamPolicyRequest): Promise<GenerateRamPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.generateRamPolicyWithOptions(request, runtime);
  }

  async getTempFileDownloadLinkWithOptions(request: GetTempFileDownloadLinkRequest, runtime: $Util.RuntimeOptions): Promise<GetTempFileDownloadLinkResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.tempFileKey)) {
      query["TempFileKey"] = request.tempFileKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetTempFileDownloadLink",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetTempFileDownloadLinkResponse>(await this.callApi(params, req, runtime), new GetTempFileDownloadLinkResponse({}));
  }

  async getTempFileDownloadLink(request: GetTempFileDownloadLinkRequest): Promise<GetTempFileDownloadLinkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTempFileDownloadLinkWithOptions(request, runtime);
  }

  /**
    * *   This operation creates an asynchronous job at the backend and calls Cloud Assistant to install an HBR client on an ECS instance.
    * *   You can call the [DescribeTask](~~431265~~) operation to query the execution result of an asynchronous job.
    * *   The timeout period of an asynchronous job is 15 minutes. We recommend that you call the DescribeTask operation to run the first query 60 seconds after you call the InstallBackupClients operation to install HBR clients. Then, run the next queries at an interval of 30 seconds.
    *
    * @param tmpReq InstallBackupClientsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return InstallBackupClientsResponse
   */
  async installBackupClientsWithOptions(tmpReq: InstallBackupClientsRequest, runtime: $Util.RuntimeOptions): Promise<InstallBackupClientsResponse> {
    Util.validateModel(tmpReq);
    let request = new InstallBackupClientsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.instanceIds)) {
      request.instanceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.instanceIds, "InstanceIds", "json");
    }

    let query = { };
    if (!Util.isUnset(request.crossAccountRoleName)) {
      query["CrossAccountRoleName"] = request.crossAccountRoleName;
    }

    if (!Util.isUnset(request.crossAccountType)) {
      query["CrossAccountType"] = request.crossAccountType;
    }

    if (!Util.isUnset(request.crossAccountUserId)) {
      query["CrossAccountUserId"] = request.crossAccountUserId;
    }

    if (!Util.isUnset(request.instanceIdsShrink)) {
      query["InstanceIds"] = request.instanceIdsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "InstallBackupClients",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<InstallBackupClientsResponse>(await this.callApi(params, req, runtime), new InstallBackupClientsResponse({}));
  }

  /**
    * *   This operation creates an asynchronous job at the backend and calls Cloud Assistant to install an HBR client on an ECS instance.
    * *   You can call the [DescribeTask](~~431265~~) operation to query the execution result of an asynchronous job.
    * *   The timeout period of an asynchronous job is 15 minutes. We recommend that you call the DescribeTask operation to run the first query 60 seconds after you call the InstallBackupClients operation to install HBR clients. Then, run the next queries at an interval of 30 seconds.
    *
    * @param request InstallBackupClientsRequest
    * @return InstallBackupClientsResponse
   */
  async installBackupClients(request: InstallBackupClientsRequest): Promise<InstallBackupClientsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.installBackupClientsWithOptions(request, runtime);
  }

  async openHbrServiceWithOptions(runtime: $Util.RuntimeOptions): Promise<OpenHbrServiceResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "OpenHbrService",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OpenHbrServiceResponse>(await this.callApi(params, req, runtime), new OpenHbrServiceResponse({}));
  }

  async openHbrService(): Promise<OpenHbrServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.openHbrServiceWithOptions(runtime);
  }

  async searchHistoricalSnapshotsWithOptions(tmpReq: SearchHistoricalSnapshotsRequest, runtime: $Util.RuntimeOptions): Promise<SearchHistoricalSnapshotsResponse> {
    Util.validateModel(tmpReq);
    let request = new SearchHistoricalSnapshotsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.query)) {
      request.queryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.query, "Query", "json");
    }

    let query = { };
    if (!Util.isUnset(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.order)) {
      query["Order"] = request.order;
    }

    if (!Util.isUnset(request.queryShrink)) {
      query["Query"] = request.queryShrink;
    }

    if (!Util.isUnset(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!Util.isUnset(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SearchHistoricalSnapshots",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SearchHistoricalSnapshotsResponse>(await this.callApi(params, req, runtime), new SearchHistoricalSnapshotsResponse({}));
  }

  async searchHistoricalSnapshots(request: SearchHistoricalSnapshotsRequest): Promise<SearchHistoricalSnapshotsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchHistoricalSnapshotsWithOptions(request, runtime);
  }

  /**
    * To stop the database again, call the StopHanaDatabaseAsync operation.
    *
    * @param request StartHanaDatabaseAsyncRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return StartHanaDatabaseAsyncResponse
   */
  async startHanaDatabaseAsyncWithOptions(request: StartHanaDatabaseAsyncRequest, runtime: $Util.RuntimeOptions): Promise<StartHanaDatabaseAsyncResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.databaseName)) {
      query["DatabaseName"] = request.databaseName;
    }

    if (!Util.isUnset(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StartHanaDatabaseAsync",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StartHanaDatabaseAsyncResponse>(await this.callApi(params, req, runtime), new StartHanaDatabaseAsyncResponse({}));
  }

  /**
    * To stop the database again, call the StopHanaDatabaseAsync operation.
    *
    * @param request StartHanaDatabaseAsyncRequest
    * @return StartHanaDatabaseAsyncResponse
   */
  async startHanaDatabaseAsync(request: StartHanaDatabaseAsyncRequest): Promise<StartHanaDatabaseAsyncResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startHanaDatabaseAsyncWithOptions(request, runtime);
  }

  /**
    * To start the database again, call the StartHanaDatabaseAsync operation.
    *
    * @param request StopHanaDatabaseAsyncRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return StopHanaDatabaseAsyncResponse
   */
  async stopHanaDatabaseAsyncWithOptions(request: StopHanaDatabaseAsyncRequest, runtime: $Util.RuntimeOptions): Promise<StopHanaDatabaseAsyncResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.databaseName)) {
      query["DatabaseName"] = request.databaseName;
    }

    if (!Util.isUnset(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StopHanaDatabaseAsync",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StopHanaDatabaseAsyncResponse>(await this.callApi(params, req, runtime), new StopHanaDatabaseAsyncResponse({}));
  }

  /**
    * To start the database again, call the StartHanaDatabaseAsync operation.
    *
    * @param request StopHanaDatabaseAsyncRequest
    * @return StopHanaDatabaseAsyncResponse
   */
  async stopHanaDatabaseAsync(request: StopHanaDatabaseAsyncRequest): Promise<StopHanaDatabaseAsyncResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopHanaDatabaseAsyncWithOptions(request, runtime);
  }

  /**
    * *   This operation creates an asynchronous job at the backend and calls Cloud Assistant to uninstall a backup client from an ECS instance.
    * *   You can call the DescribeTask operation to query the execution result of an asynchronous job.
    * *   The timeout period of an asynchronous job is 15 minutes. We recommend that you call the DescribeTask operation to run the first query 30 seconds after you call the UninstallBackupClients operation to uninstall backup clients. Then, run the next queries at an interval of 30 seconds.
    *
    * @param tmpReq UninstallBackupClientsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return UninstallBackupClientsResponse
   */
  async uninstallBackupClientsWithOptions(tmpReq: UninstallBackupClientsRequest, runtime: $Util.RuntimeOptions): Promise<UninstallBackupClientsResponse> {
    Util.validateModel(tmpReq);
    let request = new UninstallBackupClientsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.clientIds)) {
      request.clientIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.clientIds, "ClientIds", "json");
    }

    if (!Util.isUnset(tmpReq.instanceIds)) {
      request.instanceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.instanceIds, "InstanceIds", "json");
    }

    let query = { };
    if (!Util.isUnset(request.clientIdsShrink)) {
      query["ClientIds"] = request.clientIdsShrink;
    }

    if (!Util.isUnset(request.crossAccountRoleName)) {
      query["CrossAccountRoleName"] = request.crossAccountRoleName;
    }

    if (!Util.isUnset(request.crossAccountType)) {
      query["CrossAccountType"] = request.crossAccountType;
    }

    if (!Util.isUnset(request.crossAccountUserId)) {
      query["CrossAccountUserId"] = request.crossAccountUserId;
    }

    if (!Util.isUnset(request.instanceIdsShrink)) {
      query["InstanceIds"] = request.instanceIdsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UninstallBackupClients",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UninstallBackupClientsResponse>(await this.callApi(params, req, runtime), new UninstallBackupClientsResponse({}));
  }

  /**
    * *   This operation creates an asynchronous job at the backend and calls Cloud Assistant to uninstall a backup client from an ECS instance.
    * *   You can call the DescribeTask operation to query the execution result of an asynchronous job.
    * *   The timeout period of an asynchronous job is 15 minutes. We recommend that you call the DescribeTask operation to run the first query 30 seconds after you call the UninstallBackupClients operation to uninstall backup clients. Then, run the next queries at an interval of 30 seconds.
    *
    * @param request UninstallBackupClientsRequest
    * @return UninstallBackupClientsResponse
   */
  async uninstallBackupClients(request: UninstallBackupClientsRequest): Promise<UninstallBackupClientsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.uninstallBackupClientsWithOptions(request, runtime);
  }

  /**
    * If you call this operation, the specified HBR client is uninstalled. To reinstall the HBR client, call the CreateClients operation.
    *
    * @param request UninstallClientRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return UninstallClientResponse
   */
  async uninstallClientWithOptions(request: UninstallClientRequest, runtime: $Util.RuntimeOptions): Promise<UninstallClientResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UninstallClient",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UninstallClientResponse>(await this.callApi(params, req, runtime), new UninstallClientResponse({}));
  }

  /**
    * If you call this operation, the specified HBR client is uninstalled. To reinstall the HBR client, call the CreateClients operation.
    *
    * @param request UninstallClientRequest
    * @return UninstallClientResponse
   */
  async uninstallClient(request: UninstallClientRequest): Promise<UninstallClientResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.uninstallClientWithOptions(request, runtime);
  }

  async updateBackupPlanWithOptions(tmpReq: UpdateBackupPlanRequest, runtime: $Util.RuntimeOptions): Promise<UpdateBackupPlanResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateBackupPlanShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.detail)) {
      request.detailShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.detail, "Detail", "json");
    }

    if (!Util.isUnset(tmpReq.otsDetail)) {
      request.otsDetailShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.otsDetail, "OtsDetail", "json");
    }

    let query = { };
    if (!Util.isUnset(request.changeListPath)) {
      query["ChangeListPath"] = request.changeListPath;
    }

    if (!Util.isUnset(request.detailShrink)) {
      query["Detail"] = request.detailShrink;
    }

    if (!Util.isUnset(request.keepLatestSnapshots)) {
      query["KeepLatestSnapshots"] = request.keepLatestSnapshots;
    }

    if (!Util.isUnset(request.path)) {
      query["Path"] = request.path;
    }

    if (!Util.isUnset(request.planId)) {
      query["PlanId"] = request.planId;
    }

    if (!Util.isUnset(request.planName)) {
      query["PlanName"] = request.planName;
    }

    if (!Util.isUnset(request.prefix)) {
      query["Prefix"] = request.prefix;
    }

    if (!Util.isUnset(request.retention)) {
      query["Retention"] = request.retention;
    }

    if (!Util.isUnset(request.schedule)) {
      query["Schedule"] = request.schedule;
    }

    if (!Util.isUnset(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    if (!Util.isUnset(request.speedLimit)) {
      query["SpeedLimit"] = request.speedLimit;
    }

    if (!Util.isUnset(request.updatePaths)) {
      query["UpdatePaths"] = request.updatePaths;
    }

    if (!Util.isUnset(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.exclude)) {
      body["Exclude"] = request.exclude;
    }

    if (!Util.isUnset(request.include)) {
      body["Include"] = request.include;
    }

    if (!Util.isUnset(request.options)) {
      body["Options"] = request.options;
    }

    if (!Util.isUnset(request.otsDetailShrink)) {
      body["OtsDetail"] = request.otsDetailShrink;
    }

    if (!Util.isUnset(request.rule)) {
      body["Rule"] = request.rule;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateBackupPlan",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateBackupPlanResponse>(await this.callApi(params, req, runtime), new UpdateBackupPlanResponse({}));
  }

  async updateBackupPlan(request: UpdateBackupPlanRequest): Promise<UpdateBackupPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateBackupPlanWithOptions(request, runtime);
  }

  /**
    * You can call this operation to update the configurations of both the old and new HBR clients.
    *
    * @param request UpdateClientSettingsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return UpdateClientSettingsResponse
   */
  async updateClientSettingsWithOptions(request: UpdateClientSettingsRequest, runtime: $Util.RuntimeOptions): Promise<UpdateClientSettingsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.alertOnPartialComplete)) {
      query["AlertOnPartialComplete"] = request.alertOnPartialComplete;
    }

    if (!Util.isUnset(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!Util.isUnset(request.dataNetworkType)) {
      query["DataNetworkType"] = request.dataNetworkType;
    }

    if (!Util.isUnset(request.dataProxySetting)) {
      query["DataProxySetting"] = request.dataProxySetting;
    }

    if (!Util.isUnset(request.maxCpuCore)) {
      query["MaxCpuCore"] = request.maxCpuCore;
    }

    if (!Util.isUnset(request.maxMemory)) {
      query["MaxMemory"] = request.maxMemory;
    }

    if (!Util.isUnset(request.maxWorker)) {
      query["MaxWorker"] = request.maxWorker;
    }

    if (!Util.isUnset(request.proxyHost)) {
      query["ProxyHost"] = request.proxyHost;
    }

    if (!Util.isUnset(request.proxyPassword)) {
      query["ProxyPassword"] = request.proxyPassword;
    }

    if (!Util.isUnset(request.proxyPort)) {
      query["ProxyPort"] = request.proxyPort;
    }

    if (!Util.isUnset(request.proxyUser)) {
      query["ProxyUser"] = request.proxyUser;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.useHttps)) {
      query["UseHttps"] = request.useHttps;
    }

    if (!Util.isUnset(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateClientSettings",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateClientSettingsResponse>(await this.callApi(params, req, runtime), new UpdateClientSettingsResponse({}));
  }

  /**
    * You can call this operation to update the configurations of both the old and new HBR clients.
    *
    * @param request UpdateClientSettingsRequest
    * @return UpdateClientSettingsResponse
   */
  async updateClientSettings(request: UpdateClientSettingsRequest): Promise<UpdateClientSettingsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateClientSettingsWithOptions(request, runtime);
  }

  async updateContainerClusterWithOptions(request: UpdateContainerClusterRequest, runtime: $Util.RuntimeOptions): Promise<UpdateContainerClusterResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.networkType)) {
      query["NetworkType"] = request.networkType;
    }

    if (!Util.isUnset(request.renewToken)) {
      query["RenewToken"] = request.renewToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateContainerCluster",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateContainerClusterResponse>(await this.callApi(params, req, runtime), new UpdateContainerClusterResponse({}));
  }

  async updateContainerCluster(request: UpdateContainerClusterRequest): Promise<UpdateContainerClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateContainerClusterWithOptions(request, runtime);
  }

  /**
    * *   A backup plan defines the data source, backup policy, and other configurations. After you execute a backup plan, a backup job is generated to record the backup progress and the backup result. If a backup job is completed, a backup snapshot is generated. You can use a backup snapshot to create a restore job.
    * *   You can specify only one type of data source in a backup plan.
    * *   You can specify only one interval as a backup cycle in a backup plan.
    * *   Each backup plan allows you to back up data to only one backup vault.
    *
    * @param request UpdateHanaBackupPlanRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return UpdateHanaBackupPlanResponse
   */
  async updateHanaBackupPlanWithOptions(request: UpdateHanaBackupPlanRequest, runtime: $Util.RuntimeOptions): Promise<UpdateHanaBackupPlanResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backupPrefix)) {
      query["BackupPrefix"] = request.backupPrefix;
    }

    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.planId)) {
      query["PlanId"] = request.planId;
    }

    if (!Util.isUnset(request.planName)) {
      query["PlanName"] = request.planName;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.schedule)) {
      query["Schedule"] = request.schedule;
    }

    if (!Util.isUnset(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateHanaBackupPlan",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateHanaBackupPlanResponse>(await this.callApi(params, req, runtime), new UpdateHanaBackupPlanResponse({}));
  }

  /**
    * *   A backup plan defines the data source, backup policy, and other configurations. After you execute a backup plan, a backup job is generated to record the backup progress and the backup result. If a backup job is completed, a backup snapshot is generated. You can use a backup snapshot to create a restore job.
    * *   You can specify only one type of data source in a backup plan.
    * *   You can specify only one interval as a backup cycle in a backup plan.
    * *   Each backup plan allows you to back up data to only one backup vault.
    *
    * @param request UpdateHanaBackupPlanRequest
    * @return UpdateHanaBackupPlanResponse
   */
  async updateHanaBackupPlan(request: UpdateHanaBackupPlanRequest): Promise<UpdateHanaBackupPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateHanaBackupPlanWithOptions(request, runtime);
  }

  /**
    * You can call the UpdateHanaRetentionSetting operation to update the backup retention period of a database.
    *
    * @param request UpdateHanaBackupSettingRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return UpdateHanaBackupSettingResponse
   */
  async updateHanaBackupSettingWithOptions(request: UpdateHanaBackupSettingRequest, runtime: $Util.RuntimeOptions): Promise<UpdateHanaBackupSettingResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.catalogBackupParameterFile)) {
      query["CatalogBackupParameterFile"] = request.catalogBackupParameterFile;
    }

    if (!Util.isUnset(request.catalogBackupUsingBackint)) {
      query["CatalogBackupUsingBackint"] = request.catalogBackupUsingBackint;
    }

    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.dataBackupParameterFile)) {
      query["DataBackupParameterFile"] = request.dataBackupParameterFile;
    }

    if (!Util.isUnset(request.databaseName)) {
      query["DatabaseName"] = request.databaseName;
    }

    if (!Util.isUnset(request.enableAutoLogBackup)) {
      query["EnableAutoLogBackup"] = request.enableAutoLogBackup;
    }

    if (!Util.isUnset(request.logBackupParameterFile)) {
      query["LogBackupParameterFile"] = request.logBackupParameterFile;
    }

    if (!Util.isUnset(request.logBackupTimeout)) {
      query["LogBackupTimeout"] = request.logBackupTimeout;
    }

    if (!Util.isUnset(request.logBackupUsingBackint)) {
      query["LogBackupUsingBackint"] = request.logBackupUsingBackint;
    }

    if (!Util.isUnset(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateHanaBackupSetting",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateHanaBackupSettingResponse>(await this.callApi(params, req, runtime), new UpdateHanaBackupSettingResponse({}));
  }

  /**
    * You can call the UpdateHanaRetentionSetting operation to update the backup retention period of a database.
    *
    * @param request UpdateHanaBackupSettingRequest
    * @return UpdateHanaBackupSettingResponse
   */
  async updateHanaBackupSetting(request: UpdateHanaBackupSettingRequest): Promise<UpdateHanaBackupSettingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateHanaBackupSettingWithOptions(request, runtime);
  }

  async updateHanaInstanceWithOptions(request: UpdateHanaInstanceRequest, runtime: $Util.RuntimeOptions): Promise<UpdateHanaInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.alertSetting)) {
      query["AlertSetting"] = request.alertSetting;
    }

    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.hanaName)) {
      query["HanaName"] = request.hanaName;
    }

    if (!Util.isUnset(request.host)) {
      query["Host"] = request.host;
    }

    if (!Util.isUnset(request.instanceNumber)) {
      query["InstanceNumber"] = request.instanceNumber;
    }

    if (!Util.isUnset(request.password)) {
      query["Password"] = request.password;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.useSsl)) {
      query["UseSsl"] = request.useSsl;
    }

    if (!Util.isUnset(request.userName)) {
      query["UserName"] = request.userName;
    }

    if (!Util.isUnset(request.validateCertificate)) {
      query["ValidateCertificate"] = request.validateCertificate;
    }

    if (!Util.isUnset(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateHanaInstance",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateHanaInstanceResponse>(await this.callApi(params, req, runtime), new UpdateHanaInstanceResponse({}));
  }

  async updateHanaInstance(request: UpdateHanaInstanceRequest): Promise<UpdateHanaInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateHanaInstanceWithOptions(request, runtime);
  }

  /**
    * *   If you want to update the backup parameters of a database, you can call the UpdateHanaBackupSetting operation.
    * *   HBR deletes the expired catalogs and data that are related to Backint and file backup. The deleted catalogs and data cannot be restored. We recommend that you set the retention period based on your business requirements.
    *
    * @param request UpdateHanaRetentionSettingRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return UpdateHanaRetentionSettingResponse
   */
  async updateHanaRetentionSettingWithOptions(request: UpdateHanaRetentionSettingRequest, runtime: $Util.RuntimeOptions): Promise<UpdateHanaRetentionSettingResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.databaseName)) {
      query["DatabaseName"] = request.databaseName;
    }

    if (!Util.isUnset(request.disabled)) {
      query["Disabled"] = request.disabled;
    }

    if (!Util.isUnset(request.retentionDays)) {
      query["RetentionDays"] = request.retentionDays;
    }

    if (!Util.isUnset(request.schedule)) {
      query["Schedule"] = request.schedule;
    }

    if (!Util.isUnset(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateHanaRetentionSetting",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateHanaRetentionSettingResponse>(await this.callApi(params, req, runtime), new UpdateHanaRetentionSettingResponse({}));
  }

  /**
    * *   If you want to update the backup parameters of a database, you can call the UpdateHanaBackupSetting operation.
    * *   HBR deletes the expired catalogs and data that are related to Backint and file backup. The deleted catalogs and data cannot be restored. We recommend that you set the retention period based on your business requirements.
    *
    * @param request UpdateHanaRetentionSettingRequest
    * @return UpdateHanaRetentionSettingResponse
   */
  async updateHanaRetentionSetting(request: UpdateHanaRetentionSettingRequest): Promise<UpdateHanaRetentionSettingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateHanaRetentionSettingWithOptions(request, runtime);
  }

  async updatePolicyBindingWithOptions(tmpReq: UpdatePolicyBindingRequest, runtime: $Util.RuntimeOptions): Promise<UpdatePolicyBindingResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdatePolicyBindingShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.advancedOptions)) {
      request.advancedOptionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.advancedOptions, "AdvancedOptions", "json");
    }

    let query = { };
    if (!Util.isUnset(request.advancedOptionsShrink)) {
      query["AdvancedOptions"] = request.advancedOptionsShrink;
    }

    if (!Util.isUnset(request.disabled)) {
      query["Disabled"] = request.disabled;
    }

    if (!Util.isUnset(request.policyBindingDescription)) {
      query["PolicyBindingDescription"] = request.policyBindingDescription;
    }

    if (!Util.isUnset(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dataSourceId)) {
      body["DataSourceId"] = request.dataSourceId;
    }

    if (!Util.isUnset(request.policyId)) {
      body["PolicyId"] = request.policyId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdatePolicyBinding",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdatePolicyBindingResponse>(await this.callApi(params, req, runtime), new UpdatePolicyBindingResponse({}));
  }

  async updatePolicyBinding(request: UpdatePolicyBindingRequest): Promise<UpdatePolicyBindingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updatePolicyBindingWithOptions(request, runtime);
  }

  /**
    * If you modify a backup policy, the modification takes effect on all data sources that are bound to the backup policy. Proceed with caution.
    *
    * @param tmpReq UpdatePolicyV2Request
    * @param runtime runtime options for this request RuntimeOptions
    * @return UpdatePolicyV2Response
   */
  async updatePolicyV2WithOptions(tmpReq: UpdatePolicyV2Request, runtime: $Util.RuntimeOptions): Promise<UpdatePolicyV2Response> {
    Util.validateModel(tmpReq);
    let request = new UpdatePolicyV2ShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.rules)) {
      request.rulesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.rules, "Rules", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.policyDescription)) {
      body["PolicyDescription"] = request.policyDescription;
    }

    if (!Util.isUnset(request.policyId)) {
      body["PolicyId"] = request.policyId;
    }

    if (!Util.isUnset(request.policyName)) {
      body["PolicyName"] = request.policyName;
    }

    if (!Util.isUnset(request.rulesShrink)) {
      body["Rules"] = request.rulesShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdatePolicyV2",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdatePolicyV2Response>(await this.callApi(params, req, runtime), new UpdatePolicyV2Response({}));
  }

  /**
    * If you modify a backup policy, the modification takes effect on all data sources that are bound to the backup policy. Proceed with caution.
    *
    * @param request UpdatePolicyV2Request
    * @return UpdatePolicyV2Response
   */
  async updatePolicyV2(request: UpdatePolicyV2Request): Promise<UpdatePolicyV2Response> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updatePolicyV2WithOptions(request, runtime);
  }

  async updateVaultWithOptions(request: UpdateVaultRequest, runtime: $Util.RuntimeOptions): Promise<UpdateVaultResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    if (!Util.isUnset(request.vaultName)) {
      query["VaultName"] = request.vaultName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateVault",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateVaultResponse>(await this.callApi(params, req, runtime), new UpdateVaultResponse({}));
  }

  async updateVault(request: UpdateVaultRequest): Promise<UpdateVaultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateVaultWithOptions(request, runtime);
  }

  /**
    * *   This operation creates an asynchronous job at the backend and calls Cloud Assistant to upgrade an HBR client that is installed on an ECS instance.
    * *   You can call the DescribeTask operation to query the execution result of an asynchronous job.
    * *   The timeout period of an asynchronous job is 15 minutes.
    *
    * @param tmpReq UpgradeBackupClientsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return UpgradeBackupClientsResponse
   */
  async upgradeBackupClientsWithOptions(tmpReq: UpgradeBackupClientsRequest, runtime: $Util.RuntimeOptions): Promise<UpgradeBackupClientsResponse> {
    Util.validateModel(tmpReq);
    let request = new UpgradeBackupClientsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.clientIds)) {
      request.clientIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.clientIds, "ClientIds", "json");
    }

    if (!Util.isUnset(tmpReq.instanceIds)) {
      request.instanceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.instanceIds, "InstanceIds", "json");
    }

    let query = { };
    if (!Util.isUnset(request.clientIdsShrink)) {
      query["ClientIds"] = request.clientIdsShrink;
    }

    if (!Util.isUnset(request.crossAccountRoleName)) {
      query["CrossAccountRoleName"] = request.crossAccountRoleName;
    }

    if (!Util.isUnset(request.crossAccountType)) {
      query["CrossAccountType"] = request.crossAccountType;
    }

    if (!Util.isUnset(request.crossAccountUserId)) {
      query["CrossAccountUserId"] = request.crossAccountUserId;
    }

    if (!Util.isUnset(request.instanceIdsShrink)) {
      query["InstanceIds"] = request.instanceIdsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpgradeBackupClients",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpgradeBackupClientsResponse>(await this.callApi(params, req, runtime), new UpgradeBackupClientsResponse({}));
  }

  /**
    * *   This operation creates an asynchronous job at the backend and calls Cloud Assistant to upgrade an HBR client that is installed on an ECS instance.
    * *   You can call the DescribeTask operation to query the execution result of an asynchronous job.
    * *   The timeout period of an asynchronous job is 15 minutes.
    *
    * @param request UpgradeBackupClientsRequest
    * @return UpgradeBackupClientsResponse
   */
  async upgradeBackupClients(request: UpgradeBackupClientsRequest): Promise<UpgradeBackupClientsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.upgradeBackupClientsWithOptions(request, runtime);
  }

  /**
    * You can call this operation to upgrade a backup client to the latest version. After the backup client is upgraded, the version of the backup client cannot be rolled back.
    *
    * @param request UpgradeClientRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return UpgradeClientResponse
   */
  async upgradeClientWithOptions(request: UpgradeClientRequest, runtime: $Util.RuntimeOptions): Promise<UpgradeClientResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpgradeClient",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpgradeClientResponse>(await this.callApi(params, req, runtime), new UpgradeClientResponse({}));
  }

  /**
    * You can call this operation to upgrade a backup client to the latest version. After the backup client is upgraded, the version of the backup client cannot be rolled back.
    *
    * @param request UpgradeClientRequest
    * @return UpgradeClientResponse
   */
  async upgradeClient(request: UpgradeClientRequest): Promise<UpgradeClientResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.upgradeClientWithOptions(request, runtime);
  }

}
