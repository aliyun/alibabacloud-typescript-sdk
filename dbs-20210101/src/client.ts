// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class ChangeResourceGroupRequest extends $tea.Model {
  clientToken?: string;
  newResourceGroupId?: string;
  resourceId?: string;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      newResourceGroupId: 'NewResourceGroupId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
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
  data?: string;
  errCode?: string;
  errMessage?: string;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      errCode: 'string',
      errMessage: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeResourceGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ChangeResourceGroupResponseBody;
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

export class CreateDownloadRequest extends $tea.Model {
  bakSetId?: string;
  bakSetSize?: string;
  bakSetType?: string;
  downloadPointInTime?: string;
  formatType?: string;
  instanceName?: string;
  regionCode?: string;
  targetBucket?: string;
  targetOssRegion?: string;
  targetPath?: string;
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      bakSetId: 'BakSetId',
      bakSetSize: 'BakSetSize',
      bakSetType: 'BakSetType',
      downloadPointInTime: 'DownloadPointInTime',
      formatType: 'FormatType',
      instanceName: 'InstanceName',
      regionCode: 'RegionCode',
      targetBucket: 'TargetBucket',
      targetOssRegion: 'TargetOssRegion',
      targetPath: 'TargetPath',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bakSetId: 'string',
      bakSetSize: 'string',
      bakSetType: 'string',
      downloadPointInTime: 'string',
      formatType: 'string',
      instanceName: 'string',
      regionCode: 'string',
      targetBucket: 'string',
      targetOssRegion: 'string',
      targetPath: 'string',
      targetType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDownloadResponseBody extends $tea.Model {
  code?: string;
  data?: CreateDownloadResponseBodyData;
  errCode?: string;
  errMessage?: string;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateDownloadResponseBodyData,
      errCode: 'string',
      errMessage: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDownloadResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateDownloadResponseBody;
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
      body: CreateDownloadResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSandboxInstanceRequest extends $tea.Model {
  backupPlanId?: string;
  backupSetId?: string;
  restoreTime?: string;
  sandboxInstanceName?: string;
  sandboxPassword?: string;
  sandboxSpecification?: string;
  sandboxType?: string;
  sandboxUser?: string;
  vpcId?: string;
  vpcSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      backupPlanId: 'BackupPlanId',
      backupSetId: 'BackupSetId',
      restoreTime: 'RestoreTime',
      sandboxInstanceName: 'SandboxInstanceName',
      sandboxPassword: 'SandboxPassword',
      sandboxSpecification: 'SandboxSpecification',
      sandboxType: 'SandboxType',
      sandboxUser: 'SandboxUser',
      vpcId: 'VpcId',
      vpcSwitchId: 'VpcSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPlanId: 'string',
      backupSetId: 'string',
      restoreTime: 'string',
      sandboxInstanceName: 'string',
      sandboxPassword: 'string',
      sandboxSpecification: 'string',
      sandboxType: 'string',
      sandboxUser: 'string',
      vpcId: 'string',
      vpcSwitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSandboxInstanceResponseBody extends $tea.Model {
  code?: string;
  data?: CreateSandboxInstanceResponseBodyData;
  errCode?: string;
  errMessage?: string;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateSandboxInstanceResponseBodyData,
      errCode: 'string',
      errMessage: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSandboxInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateSandboxInstanceResponseBody;
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
      body: CreateSandboxInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSandboxInstanceRequest extends $tea.Model {
  backupPlanId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      backupPlanId: 'BackupPlanId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPlanId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSandboxInstanceResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  errCode?: string;
  errMessage?: string;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      errCode: 'string',
      errMessage: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSandboxInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteSandboxInstanceResponseBody;
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
      body: DeleteSandboxInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBTablesRecoveryBackupSetRequest extends $tea.Model {
  instanceId?: string;
  regionCode?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionCode: 'RegionCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBTablesRecoveryBackupSetResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  errCode?: string;
  errMessage?: string;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      errCode: 'string',
      errMessage: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBTablesRecoveryBackupSetResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDBTablesRecoveryBackupSetResponseBody;
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
      body: DescribeDBTablesRecoveryBackupSetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBTablesRecoveryStateRequest extends $tea.Model {
  instanceId?: string;
  regionCode?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionCode: 'RegionCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBTablesRecoveryStateResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  errCode?: string;
  errMessage?: string;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      errCode: 'string',
      errMessage: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBTablesRecoveryStateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDBTablesRecoveryStateResponseBody;
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
      body: DescribeDBTablesRecoveryStateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBTablesRecoveryTimeRangeRequest extends $tea.Model {
  instanceId?: string;
  regionCode?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionCode: 'RegionCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBTablesRecoveryTimeRangeResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  errCode?: string;
  errMessage?: string;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      errCode: 'string',
      errMessage: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBTablesRecoveryTimeRangeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDBTablesRecoveryTimeRangeResponseBody;
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
      body: DescribeDBTablesRecoveryTimeRangeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDownloadBackupSetStorageInfoRequest extends $tea.Model {
  backupSetId?: string;
  duration?: string;
  instanceName?: string;
  regionCode?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      backupSetId: 'BackupSetId',
      duration: 'Duration',
      instanceName: 'InstanceName',
      regionCode: 'RegionCode',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupSetId: 'string',
      duration: 'string',
      instanceName: 'string',
      regionCode: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDownloadBackupSetStorageInfoResponseBody extends $tea.Model {
  code?: string;
  data?: DescribeDownloadBackupSetStorageInfoResponseBodyData;
  errCode?: string;
  errMessage?: string;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DescribeDownloadBackupSetStorageInfoResponseBodyData,
      errCode: 'string',
      errMessage: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDownloadBackupSetStorageInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDownloadBackupSetStorageInfoResponseBody;
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
      body: DescribeDownloadBackupSetStorageInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDownloadSupportRequest extends $tea.Model {
  instanceName?: string;
  regionCode?: string;
  static names(): { [key: string]: string } {
    return {
      instanceName: 'InstanceName',
      regionCode: 'RegionCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceName: 'string',
      regionCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDownloadSupportResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  errCode?: string;
  errMessage?: string;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      errCode: 'string',
      errMessage: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDownloadSupportResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDownloadSupportResponseBody;
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
      body: DescribeDownloadSupportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDownloadTaskRequest extends $tea.Model {
  backupSetId?: string;
  currentPage?: string;
  datasourceId?: string;
  endTime?: string;
  instanceName?: string;
  orderColumn?: string;
  orderDirect?: string;
  pageSize?: string;
  regionCode?: string;
  startTime?: string;
  state?: string;
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      backupSetId: 'BackupSetId',
      currentPage: 'CurrentPage',
      datasourceId: 'DatasourceId',
      endTime: 'EndTime',
      instanceName: 'InstanceName',
      orderColumn: 'OrderColumn',
      orderDirect: 'OrderDirect',
      pageSize: 'PageSize',
      regionCode: 'RegionCode',
      startTime: 'StartTime',
      state: 'State',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupSetId: 'string',
      currentPage: 'string',
      datasourceId: 'string',
      endTime: 'string',
      instanceName: 'string',
      orderColumn: 'string',
      orderDirect: 'string',
      pageSize: 'string',
      regionCode: 'string',
      startTime: 'string',
      state: 'string',
      taskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDownloadTaskResponseBody extends $tea.Model {
  code?: string;
  data?: DescribeDownloadTaskResponseBodyData;
  errCode?: string;
  errMessage?: string;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DescribeDownloadTaskResponseBodyData,
      errCode: 'string',
      errMessage: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDownloadTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDownloadTaskResponseBody;
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
      body: DescribeDownloadTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSandboxBackupSetsRequest extends $tea.Model {
  backupPlanId?: string;
  backupSetId?: string;
  pageNumber?: string;
  pageSize?: string;
  static names(): { [key: string]: string } {
    return {
      backupPlanId: 'BackupPlanId',
      backupSetId: 'BackupSetId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPlanId: 'string',
      backupSetId: 'string',
      pageNumber: 'string',
      pageSize: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSandboxBackupSetsResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  errCode?: string;
  errMessage?: string;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      errCode: 'string',
      errMessage: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSandboxBackupSetsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeSandboxBackupSetsResponseBody;
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
      body: DescribeSandboxBackupSetsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSandboxInstancesRequest extends $tea.Model {
  backupPlanId?: string;
  instanceId?: string;
  pageNumber?: string;
  pageSize?: string;
  static names(): { [key: string]: string } {
    return {
      backupPlanId: 'BackupPlanId',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPlanId: 'string',
      instanceId: 'string',
      pageNumber: 'string',
      pageSize: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSandboxInstancesResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  errCode?: string;
  errMessage?: string;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      errCode: 'string',
      errMessage: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSandboxInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeSandboxInstancesResponseBody;
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
      body: DescribeSandboxInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSandboxRecoveryTimeRequest extends $tea.Model {
  backupPlanId?: string;
  static names(): { [key: string]: string } {
    return {
      backupPlanId: 'BackupPlanId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPlanId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSandboxRecoveryTimeResponseBody extends $tea.Model {
  code?: string;
  data?: DescribeSandboxRecoveryTimeResponseBodyData;
  errCode?: string;
  errMessage?: string;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DescribeSandboxRecoveryTimeResponseBodyData,
      errCode: 'string',
      errMessage: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSandboxRecoveryTimeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeSandboxRecoveryTimeResponseBody;
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
      body: DescribeSandboxRecoveryTimeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBTablesRecoveryStateRequest extends $tea.Model {
  category?: string;
  instanceId?: string;
  regionCode?: string;
  retention?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      instanceId: 'InstanceId',
      regionCode: 'RegionCode',
      retention: 'Retention',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      instanceId: 'string',
      regionCode: 'string',
      retention: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBTablesRecoveryStateResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  errCode?: string;
  errMessage?: string;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      errCode: 'string',
      errMessage: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBTablesRecoveryStateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyDBTablesRecoveryStateResponseBody;
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
      body: ModifyDBTablesRecoveryStateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SupportDBTableRecoveryRequest extends $tea.Model {
  instanceId?: string;
  regionCode?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionCode: 'RegionCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SupportDBTableRecoveryResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  errCode?: string;
  errMessage?: string;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      errCode: 'string',
      errMessage: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SupportDBTableRecoveryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SupportDBTableRecoveryResponseBody;
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
      body: SupportDBTableRecoveryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDownloadResponseBodyData extends $tea.Model {
  backupSetTime?: number;
  bakSetId?: string;
  dbList?: string;
  downloadStatus?: string;
  exportDataSize?: number;
  format?: string;
  gmtCreate?: number;
  importDataSize?: number;
  progress?: string;
  regionCode?: string;
  targetPath?: string;
  targetType?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      backupSetTime: 'BackupSetTime',
      bakSetId: 'BakSetId',
      dbList: 'DbList',
      downloadStatus: 'DownloadStatus',
      exportDataSize: 'ExportDataSize',
      format: 'Format',
      gmtCreate: 'GmtCreate',
      importDataSize: 'ImportDataSize',
      progress: 'Progress',
      regionCode: 'RegionCode',
      targetPath: 'TargetPath',
      targetType: 'TargetType',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupSetTime: 'number',
      bakSetId: 'string',
      dbList: 'string',
      downloadStatus: 'string',
      exportDataSize: 'number',
      format: 'string',
      gmtCreate: 'number',
      importDataSize: 'number',
      progress: 'string',
      regionCode: 'string',
      targetPath: 'string',
      targetType: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSandboxInstanceResponseBodyData extends $tea.Model {
  backupPlanId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      backupPlanId: 'BackupPlanId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPlanId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDownloadBackupSetStorageInfoResponseBodyData extends $tea.Model {
  expirationTime?: number;
  privateUrl?: string;
  publicUrl?: string;
  static names(): { [key: string]: string } {
    return {
      expirationTime: 'ExpirationTime',
      privateUrl: 'PrivateUrl',
      publicUrl: 'PublicUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expirationTime: 'number',
      privateUrl: 'string',
      publicUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDownloadTaskResponseBodyDataContentList extends $tea.Model {
  backupSetTime?: string;
  bakSetId?: string;
  dbList?: string;
  downloadStatus?: string;
  exportDataSize?: string;
  format?: string;
  gmtCreate?: string;
  importDataSize?: string;
  progress?: string;
  regionCode?: string;
  targetPath?: string;
  targetType?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      backupSetTime: 'BackupSetTime',
      bakSetId: 'BakSetId',
      dbList: 'DbList',
      downloadStatus: 'DownloadStatus',
      exportDataSize: 'ExportDataSize',
      format: 'Format',
      gmtCreate: 'GmtCreate',
      importDataSize: 'ImportDataSize',
      progress: 'Progress',
      regionCode: 'RegionCode',
      targetPath: 'TargetPath',
      targetType: 'TargetType',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupSetTime: 'string',
      bakSetId: 'string',
      dbList: 'string',
      downloadStatus: 'string',
      exportDataSize: 'string',
      format: 'string',
      gmtCreate: 'string',
      importDataSize: 'string',
      progress: 'string',
      regionCode: 'string',
      targetPath: 'string',
      targetType: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDownloadTaskResponseBodyDataContent extends $tea.Model {
  list?: DescribeDownloadTaskResponseBodyDataContentList[];
  static names(): { [key: string]: string } {
    return {
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': DescribeDownloadTaskResponseBodyDataContentList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDownloadTaskResponseBodyData extends $tea.Model {
  content?: DescribeDownloadTaskResponseBodyDataContent;
  extra?: string;
  pageNumber?: number;
  pageSize?: number;
  totalElements?: number;
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      extra: 'Extra',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalElements: 'TotalElements',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: DescribeDownloadTaskResponseBodyDataContent,
      extra: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      totalElements: 'number',
      totalPages: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSandboxRecoveryTimeResponseBodyData extends $tea.Model {
  backupPlanId?: string;
  recoveryBeginTime?: string;
  recoveryEndTime?: string;
  static names(): { [key: string]: string } {
    return {
      backupPlanId: 'BackupPlanId',
      recoveryBeginTime: 'RecoveryBeginTime',
      recoveryEndTime: 'RecoveryEndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPlanId: 'string',
      recoveryBeginTime: 'string',
      recoveryEndTime: 'string',
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
      'cn-qingdao': "dbs-api.cn-hangzhou.aliyuncs.com",
      'cn-beijing': "dbs-api.cn-hangzhou.aliyuncs.com",
      'cn-chengdu': "dbs-api.cn-chengdu.aliyuncs.com",
      'cn-zhangjiakou': "dbs-api.cn-hangzhou.aliyuncs.com",
      'cn-huhehaote': "dbs-api.cn-huhehaote.aliyuncs.com",
      'cn-hangzhou': "dbs-api.cn-hangzhou.aliyuncs.com",
      'cn-shanghai': "dbs-api.cn-hangzhou.aliyuncs.com",
      'cn-shenzhen': "dbs-api.cn-hangzhou.aliyuncs.com",
      'cn-hongkong': "dbs-api.cn-hangzhou.aliyuncs.com",
      'ap-southeast-1': "dbs-api.ap-southeast-1.aliyuncs.com",
      'ap-southeast-2': "dbs-api.ap-southeast-2.aliyuncs.com",
      'ap-southeast-3': "dbs-api.ap-southeast-3.aliyuncs.com",
      'ap-southeast-5': "dbs-api.ap-southeast-5.aliyuncs.com",
      'ap-northeast-1': "dbs-api.ap-northeast-1.aliyuncs.com",
      'us-west-1': "dbs-api.cn-hangzhou.aliyuncs.com",
      'us-east-1': "dbs-api.cn-hangzhou.aliyuncs.com",
      'eu-central-1': "dbs-api.eu-central-1.aliyuncs.com",
      'cn-hangzhou-finance': "dbs-api.cn-hangzhou.aliyuncs.com",
      'cn-shanghai-finance-1': "dbs-api.cn-hangzhou.aliyuncs.com",
      'cn-shenzhen-finance-1': "dbs-api.cn-hangzhou.aliyuncs.com",
      'ap-south-1': "dbs-api.ap-south-1.aliyuncs.com",
      'eu-west-1': "dbs-api.eu-west-1.aliyuncs.com",
      'me-east-1': "dbs-api.me-east-1.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("dbs", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async changeResourceGroupWithOptions(request: ChangeResourceGroupRequest, runtime: $Util.RuntimeOptions): Promise<ChangeResourceGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

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
      version: "2021-01-01",
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

  async changeResourceGroup(request: ChangeResourceGroupRequest): Promise<ChangeResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.changeResourceGroupWithOptions(request, runtime);
  }

  /**
    * For ApsaraDB RDS for MySQL instances that use standard SSDs or enhanced SSDs (ESSDs) and meet your business requirements, you can create an advanced download task by point in time or backup set. You can set the download destination to an URL or directly upload the downloaded data to your Object Storage Service (OSS) bucket to facilitate data analysis and offline archiving. For more information, see [Download the backup files of an ApsaraDB RDS for MySQL instance](~~98819~~).
    *
    * @param request CreateDownloadRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateDownloadResponse
   */
  async createDownloadWithOptions(request: CreateDownloadRequest, runtime: $Util.RuntimeOptions): Promise<CreateDownloadResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bakSetId)) {
      query["BakSetId"] = request.bakSetId;
    }

    if (!Util.isUnset(request.bakSetSize)) {
      query["BakSetSize"] = request.bakSetSize;
    }

    if (!Util.isUnset(request.bakSetType)) {
      query["BakSetType"] = request.bakSetType;
    }

    if (!Util.isUnset(request.downloadPointInTime)) {
      query["DownloadPointInTime"] = request.downloadPointInTime;
    }

    if (!Util.isUnset(request.formatType)) {
      query["FormatType"] = request.formatType;
    }

    if (!Util.isUnset(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!Util.isUnset(request.regionCode)) {
      query["RegionCode"] = request.regionCode;
    }

    if (!Util.isUnset(request.targetBucket)) {
      query["TargetBucket"] = request.targetBucket;
    }

    if (!Util.isUnset(request.targetOssRegion)) {
      query["TargetOssRegion"] = request.targetOssRegion;
    }

    if (!Util.isUnset(request.targetPath)) {
      query["TargetPath"] = request.targetPath;
    }

    if (!Util.isUnset(request.targetType)) {
      query["TargetType"] = request.targetType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateDownload",
      version: "2021-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDownloadResponse>(await this.callApi(params, req, runtime), new CreateDownloadResponse({}));
  }

  /**
    * For ApsaraDB RDS for MySQL instances that use standard SSDs or enhanced SSDs (ESSDs) and meet your business requirements, you can create an advanced download task by point in time or backup set. You can set the download destination to an URL or directly upload the downloaded data to your Object Storage Service (OSS) bucket to facilitate data analysis and offline archiving. For more information, see [Download the backup files of an ApsaraDB RDS for MySQL instance](~~98819~~).
    *
    * @param request CreateDownloadRequest
    * @return CreateDownloadResponse
   */
  async createDownload(request: CreateDownloadRequest): Promise<CreateDownloadResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDownloadWithOptions(request, runtime);
  }

  /**
    * Before you call this operation, you must enable the sandbox feature for the database instance. For more information, see [Use the emergency recovery feature of an ApsaraDB RDS for MySQL instance](~~203154~~) or [Create a sandbox instance for emergency disaster recovery of a self-managed MySQL database](~~185577~~). This operation is available only in Database Backup (DBS) API of the 2021-01-01 version.
    *
    * @param request CreateSandboxInstanceRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateSandboxInstanceResponse
   */
  async createSandboxInstanceWithOptions(request: CreateSandboxInstanceRequest, runtime: $Util.RuntimeOptions): Promise<CreateSandboxInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backupPlanId)) {
      query["BackupPlanId"] = request.backupPlanId;
    }

    if (!Util.isUnset(request.backupSetId)) {
      query["BackupSetId"] = request.backupSetId;
    }

    if (!Util.isUnset(request.restoreTime)) {
      query["RestoreTime"] = request.restoreTime;
    }

    if (!Util.isUnset(request.sandboxInstanceName)) {
      query["SandboxInstanceName"] = request.sandboxInstanceName;
    }

    if (!Util.isUnset(request.sandboxPassword)) {
      query["SandboxPassword"] = request.sandboxPassword;
    }

    if (!Util.isUnset(request.sandboxSpecification)) {
      query["SandboxSpecification"] = request.sandboxSpecification;
    }

    if (!Util.isUnset(request.sandboxType)) {
      query["SandboxType"] = request.sandboxType;
    }

    if (!Util.isUnset(request.sandboxUser)) {
      query["SandboxUser"] = request.sandboxUser;
    }

    if (!Util.isUnset(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    if (!Util.isUnset(request.vpcSwitchId)) {
      query["VpcSwitchId"] = request.vpcSwitchId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateSandboxInstance",
      version: "2021-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateSandboxInstanceResponse>(await this.callApi(params, req, runtime), new CreateSandboxInstanceResponse({}));
  }

  /**
    * Before you call this operation, you must enable the sandbox feature for the database instance. For more information, see [Use the emergency recovery feature of an ApsaraDB RDS for MySQL instance](~~203154~~) or [Create a sandbox instance for emergency disaster recovery of a self-managed MySQL database](~~185577~~). This operation is available only in Database Backup (DBS) API of the 2021-01-01 version.
    *
    * @param request CreateSandboxInstanceRequest
    * @return CreateSandboxInstanceResponse
   */
  async createSandboxInstance(request: CreateSandboxInstanceRequest): Promise<CreateSandboxInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSandboxInstanceWithOptions(request, runtime);
  }

  /**
    * This operation is available only for the Database Backup (DBS) API of the 2021-01-01 version.
    *
    * @param request DeleteSandboxInstanceRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteSandboxInstanceResponse
   */
  async deleteSandboxInstanceWithOptions(request: DeleteSandboxInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSandboxInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backupPlanId)) {
      query["BackupPlanId"] = request.backupPlanId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteSandboxInstance",
      version: "2021-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteSandboxInstanceResponse>(await this.callApi(params, req, runtime), new DeleteSandboxInstanceResponse({}));
  }

  /**
    * This operation is available only for the Database Backup (DBS) API of the 2021-01-01 version.
    *
    * @param request DeleteSandboxInstanceRequest
    * @return DeleteSandboxInstanceResponse
   */
  async deleteSandboxInstance(request: DeleteSandboxInstanceRequest): Promise<DeleteSandboxInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSandboxInstanceWithOptions(request, runtime);
  }

  async describeDBTablesRecoveryBackupSetWithOptions(request: DescribeDBTablesRecoveryBackupSetRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBTablesRecoveryBackupSetResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionCode)) {
      query["RegionCode"] = request.regionCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDBTablesRecoveryBackupSet",
      version: "2021-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDBTablesRecoveryBackupSetResponse>(await this.callApi(params, req, runtime), new DescribeDBTablesRecoveryBackupSetResponse({}));
  }

  async describeDBTablesRecoveryBackupSet(request: DescribeDBTablesRecoveryBackupSetRequest): Promise<DescribeDBTablesRecoveryBackupSetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBTablesRecoveryBackupSetWithOptions(request, runtime);
  }

  async describeDBTablesRecoveryStateWithOptions(request: DescribeDBTablesRecoveryStateRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBTablesRecoveryStateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionCode)) {
      query["RegionCode"] = request.regionCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDBTablesRecoveryState",
      version: "2021-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDBTablesRecoveryStateResponse>(await this.callApi(params, req, runtime), new DescribeDBTablesRecoveryStateResponse({}));
  }

  async describeDBTablesRecoveryState(request: DescribeDBTablesRecoveryStateRequest): Promise<DescribeDBTablesRecoveryStateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBTablesRecoveryStateWithOptions(request, runtime);
  }

  async describeDBTablesRecoveryTimeRangeWithOptions(request: DescribeDBTablesRecoveryTimeRangeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBTablesRecoveryTimeRangeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionCode)) {
      query["RegionCode"] = request.regionCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDBTablesRecoveryTimeRange",
      version: "2021-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDBTablesRecoveryTimeRangeResponse>(await this.callApi(params, req, runtime), new DescribeDBTablesRecoveryTimeRangeResponse({}));
  }

  async describeDBTablesRecoveryTimeRange(request: DescribeDBTablesRecoveryTimeRangeRequest): Promise<DescribeDBTablesRecoveryTimeRangeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBTablesRecoveryTimeRangeWithOptions(request, runtime);
  }

  /**
    * You can create an advanced download task by point in time or backup set. You can set the download destination to an URL or directly upload the downloaded data to your Object Storage Service (OSS) bucket to facilitate data analysis and offline archiving. For more information, see [Download the backup files of an ApsaraDB RDS for MySQL instance](~~98819~~).
    *
    * @param request DescribeDownloadBackupSetStorageInfoRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDownloadBackupSetStorageInfoResponse
   */
  async describeDownloadBackupSetStorageInfoWithOptions(request: DescribeDownloadBackupSetStorageInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDownloadBackupSetStorageInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backupSetId)) {
      query["BackupSetId"] = request.backupSetId;
    }

    if (!Util.isUnset(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!Util.isUnset(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!Util.isUnset(request.regionCode)) {
      query["RegionCode"] = request.regionCode;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDownloadBackupSetStorageInfo",
      version: "2021-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDownloadBackupSetStorageInfoResponse>(await this.callApi(params, req, runtime), new DescribeDownloadBackupSetStorageInfoResponse({}));
  }

  /**
    * You can create an advanced download task by point in time or backup set. You can set the download destination to an URL or directly upload the downloaded data to your Object Storage Service (OSS) bucket to facilitate data analysis and offline archiving. For more information, see [Download the backup files of an ApsaraDB RDS for MySQL instance](~~98819~~).
    *
    * @param request DescribeDownloadBackupSetStorageInfoRequest
    * @return DescribeDownloadBackupSetStorageInfoResponse
   */
  async describeDownloadBackupSetStorageInfo(request: DescribeDownloadBackupSetStorageInfoRequest): Promise<DescribeDownloadBackupSetStorageInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDownloadBackupSetStorageInfoWithOptions(request, runtime);
  }

  /**
    * You can create an advanced download task by point in time or backup set. You can set the download destination to an URL or directly upload the downloaded data to your Object Storage Service (OSS) bucket to facilitate data analysis and offline archiving. For more information, see [Download the backup files of an ApsaraDB RDS for MySQL instance](~~98819~~).
    *
    * @param request DescribeDownloadSupportRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDownloadSupportResponse
   */
  async describeDownloadSupportWithOptions(request: DescribeDownloadSupportRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDownloadSupportResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!Util.isUnset(request.regionCode)) {
      query["RegionCode"] = request.regionCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDownloadSupport",
      version: "2021-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDownloadSupportResponse>(await this.callApi(params, req, runtime), new DescribeDownloadSupportResponse({}));
  }

  /**
    * You can create an advanced download task by point in time or backup set. You can set the download destination to an URL or directly upload the downloaded data to your Object Storage Service (OSS) bucket to facilitate data analysis and offline archiving. For more information, see [Download the backup files of an ApsaraDB RDS for MySQL instance](~~98819~~).
    *
    * @param request DescribeDownloadSupportRequest
    * @return DescribeDownloadSupportResponse
   */
  async describeDownloadSupport(request: DescribeDownloadSupportRequest): Promise<DescribeDownloadSupportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDownloadSupportWithOptions(request, runtime);
  }

  /**
    * You can create an advanced download task by point in time or backup set. You can set the Download Destination parameter to URL or directly upload the downloaded data to your Object Storage Service (OSS) bucket to facilitate data analysis and offline archiving. For more information, see [Download the backup files of an ApsaraDB RDS for MySQL instance](~~98819~~).
    *
    * @param request DescribeDownloadTaskRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDownloadTaskResponse
   */
  async describeDownloadTaskWithOptions(request: DescribeDownloadTaskRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDownloadTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backupSetId)) {
      query["BackupSetId"] = request.backupSetId;
    }

    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.datasourceId)) {
      query["DatasourceId"] = request.datasourceId;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!Util.isUnset(request.orderColumn)) {
      query["OrderColumn"] = request.orderColumn;
    }

    if (!Util.isUnset(request.orderDirect)) {
      query["OrderDirect"] = request.orderDirect;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionCode)) {
      query["RegionCode"] = request.regionCode;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.state)) {
      query["State"] = request.state;
    }

    if (!Util.isUnset(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDownloadTask",
      version: "2021-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDownloadTaskResponse>(await this.callApi(params, req, runtime), new DescribeDownloadTaskResponse({}));
  }

  /**
    * You can create an advanced download task by point in time or backup set. You can set the Download Destination parameter to URL or directly upload the downloaded data to your Object Storage Service (OSS) bucket to facilitate data analysis and offline archiving. For more information, see [Download the backup files of an ApsaraDB RDS for MySQL instance](~~98819~~).
    *
    * @param request DescribeDownloadTaskRequest
    * @return DescribeDownloadTaskResponse
   */
  async describeDownloadTask(request: DescribeDownloadTaskRequest): Promise<DescribeDownloadTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDownloadTaskWithOptions(request, runtime);
  }

  /**
    * Before you call this operation, you must enable the sandbox feature for the database instance. For more information, see [Use the emergency recovery feature of an ApsaraDB RDS for MySQL instance](~~203154~~) or [Create a sandbox instance for emergency disaster recovery of a self-managed MySQL database](~~185577~~). This operation is available only for the Database Backup (DBS) API of the 2021-01-01 version.
    *
    * @param request DescribeSandboxBackupSetsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeSandboxBackupSetsResponse
   */
  async describeSandboxBackupSetsWithOptions(request: DescribeSandboxBackupSetsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSandboxBackupSetsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backupPlanId)) {
      query["BackupPlanId"] = request.backupPlanId;
    }

    if (!Util.isUnset(request.backupSetId)) {
      query["BackupSetId"] = request.backupSetId;
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
      action: "DescribeSandboxBackupSets",
      version: "2021-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSandboxBackupSetsResponse>(await this.callApi(params, req, runtime), new DescribeSandboxBackupSetsResponse({}));
  }

  /**
    * Before you call this operation, you must enable the sandbox feature for the database instance. For more information, see [Use the emergency recovery feature of an ApsaraDB RDS for MySQL instance](~~203154~~) or [Create a sandbox instance for emergency disaster recovery of a self-managed MySQL database](~~185577~~). This operation is available only for the Database Backup (DBS) API of the 2021-01-01 version.
    *
    * @param request DescribeSandboxBackupSetsRequest
    * @return DescribeSandboxBackupSetsResponse
   */
  async describeSandboxBackupSets(request: DescribeSandboxBackupSetsRequest): Promise<DescribeSandboxBackupSetsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSandboxBackupSetsWithOptions(request, runtime);
  }

  /**
    * This operation is available only in Database Backup (DBS) API of the 2021-01-01 version.
    *
    * @param request DescribeSandboxInstancesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeSandboxInstancesResponse
   */
  async describeSandboxInstancesWithOptions(request: DescribeSandboxInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSandboxInstancesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backupPlanId)) {
      query["BackupPlanId"] = request.backupPlanId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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
      action: "DescribeSandboxInstances",
      version: "2021-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSandboxInstancesResponse>(await this.callApi(params, req, runtime), new DescribeSandboxInstancesResponse({}));
  }

  /**
    * This operation is available only in Database Backup (DBS) API of the 2021-01-01 version.
    *
    * @param request DescribeSandboxInstancesRequest
    * @return DescribeSandboxInstancesResponse
   */
  async describeSandboxInstances(request: DescribeSandboxInstancesRequest): Promise<DescribeSandboxInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSandboxInstancesWithOptions(request, runtime);
  }

  /**
    * Before you call this operation, you must enable the sandbox feature for the database instance. For more information, see [Use the emergency recovery feature of an ApsaraDB RDS for MySQL instance](~~203154~~) or [Create a sandbox instance for emergency disaster recovery of a self-managed MySQL database](~~185577~~). This operation is available only in Database Backup (DBS) API of the 2021-01-01 version.
    *
    * @param request DescribeSandboxRecoveryTimeRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeSandboxRecoveryTimeResponse
   */
  async describeSandboxRecoveryTimeWithOptions(request: DescribeSandboxRecoveryTimeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSandboxRecoveryTimeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backupPlanId)) {
      query["BackupPlanId"] = request.backupPlanId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSandboxRecoveryTime",
      version: "2021-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSandboxRecoveryTimeResponse>(await this.callApi(params, req, runtime), new DescribeSandboxRecoveryTimeResponse({}));
  }

  /**
    * Before you call this operation, you must enable the sandbox feature for the database instance. For more information, see [Use the emergency recovery feature of an ApsaraDB RDS for MySQL instance](~~203154~~) or [Create a sandbox instance for emergency disaster recovery of a self-managed MySQL database](~~185577~~). This operation is available only in Database Backup (DBS) API of the 2021-01-01 version.
    *
    * @param request DescribeSandboxRecoveryTimeRequest
    * @return DescribeSandboxRecoveryTimeResponse
   */
  async describeSandboxRecoveryTime(request: DescribeSandboxRecoveryTimeRequest): Promise<DescribeSandboxRecoveryTimeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSandboxRecoveryTimeWithOptions(request, runtime);
  }

  async modifyDBTablesRecoveryStateWithOptions(request: ModifyDBTablesRecoveryStateRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBTablesRecoveryStateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.category)) {
      query["Category"] = request.category;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionCode)) {
      query["RegionCode"] = request.regionCode;
    }

    if (!Util.isUnset(request.retention)) {
      query["Retention"] = request.retention;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDBTablesRecoveryState",
      version: "2021-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDBTablesRecoveryStateResponse>(await this.callApi(params, req, runtime), new ModifyDBTablesRecoveryStateResponse({}));
  }

  async modifyDBTablesRecoveryState(request: ModifyDBTablesRecoveryStateRequest): Promise<ModifyDBTablesRecoveryStateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBTablesRecoveryStateWithOptions(request, runtime);
  }

  async supportDBTableRecoveryWithOptions(request: SupportDBTableRecoveryRequest, runtime: $Util.RuntimeOptions): Promise<SupportDBTableRecoveryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionCode)) {
      query["RegionCode"] = request.regionCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SupportDBTableRecovery",
      version: "2021-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SupportDBTableRecoveryResponse>(await this.callApi(params, req, runtime), new SupportDBTableRecoveryResponse({}));
  }

  async supportDBTableRecovery(request: SupportDBTableRecoveryRequest): Promise<SupportDBTableRecoveryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.supportDBTableRecoveryWithOptions(request, runtime);
  }

}
