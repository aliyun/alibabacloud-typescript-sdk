// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AttachKeyPairRequest extends $tea.Model {
  instanceIds?: string[];
  keyPairId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
      keyPairId: 'KeyPairId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      keyPairId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachKeyPairResponseBody extends $tea.Model {
  data?: AttachKeyPairResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: AttachKeyPairResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachKeyPairResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AttachKeyPairResponseBody;
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
      body: AttachKeyPairResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthorizeAndroidInstanceRequest extends $tea.Model {
  androidInstanceIds?: string[];
  authorizeUserId?: string;
  unAuthorizeUserId?: string;
  static names(): { [key: string]: string } {
    return {
      androidInstanceIds: 'AndroidInstanceIds',
      authorizeUserId: 'AuthorizeUserId',
      unAuthorizeUserId: 'UnAuthorizeUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      androidInstanceIds: { 'type': 'array', 'itemType': 'string' },
      authorizeUserId: 'string',
      unAuthorizeUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthorizeAndroidInstanceResponseBody extends $tea.Model {
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

export class AuthorizeAndroidInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AuthorizeAndroidInstanceResponseBody;
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
      body: AuthorizeAndroidInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BackupFileRequest extends $tea.Model {
  androidInstanceIdList?: string[];
  backupFilePath?: string;
  description?: string;
  sourceFilePathList?: string[];
  uploadEndpoint?: string;
  uploadType?: string;
  static names(): { [key: string]: string } {
    return {
      androidInstanceIdList: 'AndroidInstanceIdList',
      backupFilePath: 'BackupFilePath',
      description: 'Description',
      sourceFilePathList: 'SourceFilePathList',
      uploadEndpoint: 'UploadEndpoint',
      uploadType: 'UploadType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      androidInstanceIdList: { 'type': 'array', 'itemType': 'string' },
      backupFilePath: 'string',
      description: 'string',
      sourceFilePathList: { 'type': 'array', 'itemType': 'string' },
      uploadEndpoint: 'string',
      uploadType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BackupFileResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BackupFileResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BackupFileResponseBody;
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
      body: BackupFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckResourceStockRequest extends $tea.Model {
  acpSpecId?: string;
  bizRegionId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      acpSpecId: 'AcpSpecId',
      bizRegionId: 'BizRegionId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acpSpecId: 'string',
      bizRegionId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckResourceStockResponseBody extends $tea.Model {
  requestId?: string;
  resourceStockModels?: CheckResourceStockResponseBodyResourceStockModels[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceStockModels: 'ResourceStockModels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceStockModels: { 'type': 'array', 'itemType': CheckResourceStockResponseBodyResourceStockModels },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckResourceStockResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CheckResourceStockResponseBody;
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
      body: CheckResourceStockResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomImageRequest extends $tea.Model {
  description?: string;
  imageName?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      imageName: 'ImageName',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      imageName: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomImageResponseBody extends $tea.Model {
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

export class CreateCustomImageResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateCustomImageResponseBody;
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
      body: CreateCustomImageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateKeyPairRequest extends $tea.Model {
  keyPairName?: string;
  static names(): { [key: string]: string } {
    return {
      keyPairName: 'KeyPairName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPairName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateKeyPairResponseBody extends $tea.Model {
  data?: CreateKeyPairResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateKeyPairResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateKeyPairResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateKeyPairResponseBody;
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
      body: CreateKeyPairResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyGroupRequest extends $tea.Model {
  cameraRedirect?: string;
  clipboard?: string;
  html5FileTransfer?: string;
  localDrive?: string;
  policyGroupName?: string;
  resolutionHeight?: number;
  resolutionWidth?: number;
  static names(): { [key: string]: string } {
    return {
      cameraRedirect: 'CameraRedirect',
      clipboard: 'Clipboard',
      html5FileTransfer: 'Html5FileTransfer',
      localDrive: 'LocalDrive',
      policyGroupName: 'PolicyGroupName',
      resolutionHeight: 'ResolutionHeight',
      resolutionWidth: 'ResolutionWidth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cameraRedirect: 'string',
      clipboard: 'string',
      html5FileTransfer: 'string',
      localDrive: 'string',
      policyGroupName: 'string',
      resolutionHeight: 'number',
      resolutionWidth: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyGroupResponseBody extends $tea.Model {
  policyGroupId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      policyGroupId: 'PolicyGroupId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyGroupId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreatePolicyGroupResponseBody;
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
      body: CreatePolicyGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAndroidInstanceGroupRequest extends $tea.Model {
  instanceGroupIds?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceGroupIds: 'InstanceGroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceGroupIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAndroidInstanceGroupResponseBody extends $tea.Model {
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

export class DeleteAndroidInstanceGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteAndroidInstanceGroupResponseBody;
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
      body: DeleteAndroidInstanceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppsRequest extends $tea.Model {
  appIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      appIdList: 'AppIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppsResponseBody extends $tea.Model {
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

export class DeleteAppsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteAppsResponseBody;
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
      body: DeleteAppsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteImagesRequest extends $tea.Model {
  imageIds?: string[];
  static names(): { [key: string]: string } {
    return {
      imageIds: 'ImageIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteImagesShrinkRequest extends $tea.Model {
  imageIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      imageIdsShrink: 'ImageIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageIdsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteImagesResponseBody extends $tea.Model {
  data?: DeleteImagesResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DeleteImagesResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteImagesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteImagesResponseBody;
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
      body: DeleteImagesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteKeyPairsRequest extends $tea.Model {
  keyPairIds?: string[];
  static names(): { [key: string]: string } {
    return {
      keyPairIds: 'KeyPairIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPairIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteKeyPairsResponseBody extends $tea.Model {
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

export class DeleteKeyPairsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteKeyPairsResponseBody;
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
      body: DeleteKeyPairsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePolicyGroupRequest extends $tea.Model {
  policyGroupIds?: string[];
  static names(): { [key: string]: string } {
    return {
      policyGroupIds: 'PolicyGroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyGroupIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePolicyGroupResponseBody extends $tea.Model {
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

export class DeletePolicyGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeletePolicyGroupResponseBody;
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
      body: DeletePolicyGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAndroidInstanceGroupsRequest extends $tea.Model {
  bizRegionId?: string;
  chargeType?: string;
  instanceGroupIds?: string[];
  instanceGroupName?: string;
  keyPairId?: string;
  maxResults?: number;
  nextToken?: string;
  policyGroupId?: string;
  saleMode?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      bizRegionId: 'BizRegionId',
      chargeType: 'ChargeType',
      instanceGroupIds: 'InstanceGroupIds',
      instanceGroupName: 'InstanceGroupName',
      keyPairId: 'KeyPairId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      policyGroupId: 'PolicyGroupId',
      saleMode: 'SaleMode',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizRegionId: 'string',
      chargeType: 'string',
      instanceGroupIds: { 'type': 'array', 'itemType': 'string' },
      instanceGroupName: 'string',
      keyPairId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      policyGroupId: 'string',
      saleMode: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAndroidInstanceGroupsResponseBody extends $tea.Model {
  instanceGroupModel?: DescribeAndroidInstanceGroupsResponseBodyInstanceGroupModel[];
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      instanceGroupModel: 'InstanceGroupModel',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceGroupModel: { 'type': 'array', 'itemType': DescribeAndroidInstanceGroupsResponseBodyInstanceGroupModel },
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAndroidInstanceGroupsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAndroidInstanceGroupsResponseBody;
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
      body: DescribeAndroidInstanceGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAndroidInstancesRequest extends $tea.Model {
  androidInstanceIds?: string[];
  androidInstanceName?: string;
  instanceGroupId?: string;
  keyPairId?: string;
  maxResults?: number;
  nextToken?: string;
  saleMode?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      androidInstanceIds: 'AndroidInstanceIds',
      androidInstanceName: 'AndroidInstanceName',
      instanceGroupId: 'InstanceGroupId',
      keyPairId: 'KeyPairId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      saleMode: 'SaleMode',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      androidInstanceIds: { 'type': 'array', 'itemType': 'string' },
      androidInstanceName: 'string',
      instanceGroupId: 'string',
      keyPairId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      saleMode: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAndroidInstancesResponseBody extends $tea.Model {
  instanceModel?: DescribeAndroidInstancesResponseBodyInstanceModel[];
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      instanceModel: 'InstanceModel',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceModel: { 'type': 'array', 'itemType': DescribeAndroidInstancesResponseBodyInstanceModel },
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAndroidInstancesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAndroidInstancesResponseBody;
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
      body: DescribeAndroidInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupFilesRequest extends $tea.Model {
  androidInstanceId?: string;
  androidInstanceName?: string;
  backupFileId?: string;
  backupFileName?: string;
  description?: string;
  endTime?: string;
  endUserId?: string;
  instanceGroupId?: string;
  maxResults?: number;
  nextToken?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      androidInstanceId: 'AndroidInstanceId',
      androidInstanceName: 'AndroidInstanceName',
      backupFileId: 'BackupFileId',
      backupFileName: 'BackupFileName',
      description: 'Description',
      endTime: 'EndTime',
      endUserId: 'EndUserId',
      instanceGroupId: 'InstanceGroupId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      androidInstanceId: 'string',
      androidInstanceName: 'string',
      backupFileId: 'string',
      backupFileName: 'string',
      description: 'string',
      endTime: 'string',
      endUserId: 'string',
      instanceGroupId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupFilesResponseBody extends $tea.Model {
  data?: DescribeBackupFilesResponseBodyData[];
  maxResults?: string;
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeBackupFilesResponseBodyData },
      maxResults: 'string',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupFilesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeBackupFilesResponseBody;
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
      body: DescribeBackupFilesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvocationsRequest extends $tea.Model {
  instanceIds?: string[];
  invocationId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
      invocationId: 'InvocationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      invocationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvocationsResponseBody extends $tea.Model {
  data?: DescribeInvocationsResponseBodyData[];
  requestId?: string;
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeInvocationsResponseBodyData },
      requestId: 'string',
      totalCount: 'string',
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

export class DescribeKeyPairsRequest extends $tea.Model {
  keyPairIds?: string[];
  keyPairName?: string;
  maxResults?: number;
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      keyPairIds: 'KeyPairIds',
      keyPairName: 'KeyPairName',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPairIds: { 'type': 'array', 'itemType': 'string' },
      keyPairName: 'string',
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeKeyPairsResponseBody extends $tea.Model {
  data?: DescribeKeyPairsResponseBodyData[];
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeKeyPairsResponseBodyData },
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeKeyPairsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeKeyPairsResponseBody;
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
      body: DescribeKeyPairsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBody extends $tea.Model {
  regionModels?: DescribeRegionsResponseBodyRegionModels[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      regionModels: 'RegionModels',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionModels: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyRegionModels },
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

export class DescribeSpecRequest extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  specIds?: string[];
  specStatus?: string;
  specType?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      specIds: 'SpecIds',
      specStatus: 'SpecStatus',
      specType: 'SpecType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      specIds: { 'type': 'array', 'itemType': 'string' },
      specStatus: 'string',
      specType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSpecResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
  specInfoModel?: DescribeSpecResponseBodySpecInfoModel[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      specInfoModel: 'SpecInfoModel',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      specInfoModel: { 'type': 'array', 'itemType': DescribeSpecResponseBodySpecInfoModel },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSpecResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSpecResponseBody;
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
      body: DescribeSpecResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachKeyPairRequest extends $tea.Model {
  instanceIds?: string[];
  keyPairId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
      keyPairId: 'KeyPairId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      keyPairId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachKeyPairResponseBody extends $tea.Model {
  data?: DetachKeyPairResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DetachKeyPairResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachKeyPairResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DetachKeyPairResponseBody;
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
      body: DetachKeyPairResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DistributeImageRequest extends $tea.Model {
  distributeRegionList?: string[];
  imageId?: string;
  static names(): { [key: string]: string } {
    return {
      distributeRegionList: 'DistributeRegionList',
      imageId: 'ImageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      distributeRegionList: { 'type': 'array', 'itemType': 'string' },
      imageId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DistributeImageResponseBody extends $tea.Model {
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

export class DistributeImageResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DistributeImageResponseBody;
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
      body: DistributeImageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DowngradeAndroidInstanceGroupRequest extends $tea.Model {
  androidInstanceIds?: string[];
  autoPay?: boolean;
  instanceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      androidInstanceIds: 'AndroidInstanceIds',
      autoPay: 'AutoPay',
      instanceGroupId: 'InstanceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      androidInstanceIds: { 'type': 'array', 'itemType': 'string' },
      autoPay: 'boolean',
      instanceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DowngradeAndroidInstanceGroupResponseBody extends $tea.Model {
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

export class DowngradeAndroidInstanceGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DowngradeAndroidInstanceGroupResponseBody;
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
      body: DowngradeAndroidInstanceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FetchFileRequest extends $tea.Model {
  androidInstanceIdList?: string[];
  sourceFilePath?: string;
  uploadEndpoint?: string;
  uploadType?: string;
  uploadUrl?: string;
  static names(): { [key: string]: string } {
    return {
      androidInstanceIdList: 'AndroidInstanceIdList',
      sourceFilePath: 'SourceFilePath',
      uploadEndpoint: 'UploadEndpoint',
      uploadType: 'UploadType',
      uploadUrl: 'UploadUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      androidInstanceIdList: { 'type': 'array', 'itemType': 'string' },
      sourceFilePath: 'string',
      uploadEndpoint: 'string',
      uploadType: 'string',
      uploadUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FetchFileResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FetchFileResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: FetchFileResponseBody;
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
      body: FetchFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAdbSecureRequest extends $tea.Model {
  instanceIds?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAdbSecureResponseBody extends $tea.Model {
  data?: GetAdbSecureResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetAdbSecureResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAdbSecureResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAdbSecureResponseBody;
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
      body: GetAdbSecureResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportKeyPairRequest extends $tea.Model {
  keyPairName?: string;
  publicKeyBody?: string;
  static names(): { [key: string]: string } {
    return {
      keyPairName: 'KeyPairName',
      publicKeyBody: 'PublicKeyBody',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPairName: 'string',
      publicKeyBody: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportKeyPairResponseBody extends $tea.Model {
  data?: ImportKeyPairResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ImportKeyPairResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportKeyPairResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ImportKeyPairResponseBody;
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
      body: ImportKeyPairResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallAppRequest extends $tea.Model {
  appIdList?: string[];
  instanceGroupIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      appIdList: 'AppIdList',
      instanceGroupIdList: 'InstanceGroupIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appIdList: { 'type': 'array', 'itemType': 'string' },
      instanceGroupIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallAppResponseBody extends $tea.Model {
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

export class InstallAppResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: InstallAppResponseBody;
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
      body: InstallAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicyGroupsRequest extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  policyGroupIds?: string[];
  policyGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      policyGroupIds: 'PolicyGroupIds',
      policyGroupName: 'PolicyGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      policyGroupIds: { 'type': 'array', 'itemType': 'string' },
      policyGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicyGroupsResponseBody extends $tea.Model {
  nextToken?: string;
  policyGroupModel?: ListPolicyGroupsResponseBodyPolicyGroupModel[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      policyGroupModel: 'PolicyGroupModel',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      policyGroupModel: { 'type': 'array', 'itemType': ListPolicyGroupsResponseBodyPolicyGroupModel },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicyGroupsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListPolicyGroupsResponseBody;
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
      body: ListPolicyGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAndroidInstanceRequest extends $tea.Model {
  androidInstanceId?: string;
  newAndroidInstanceName?: string;
  static names(): { [key: string]: string } {
    return {
      androidInstanceId: 'AndroidInstanceId',
      newAndroidInstanceName: 'NewAndroidInstanceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      androidInstanceId: 'string',
      newAndroidInstanceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAndroidInstanceResponseBody extends $tea.Model {
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

export class ModifyAndroidInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyAndroidInstanceResponseBody;
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
      body: ModifyAndroidInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAndroidInstanceGroupRequest extends $tea.Model {
  instanceGroupId?: string;
  newInstanceGroupName?: string;
  policyGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceGroupId: 'InstanceGroupId',
      newInstanceGroupName: 'NewInstanceGroupName',
      policyGroupId: 'PolicyGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceGroupId: 'string',
      newInstanceGroupName: 'string',
      policyGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAndroidInstanceGroupResponseBody extends $tea.Model {
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

export class ModifyAndroidInstanceGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyAndroidInstanceGroupResponseBody;
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
      body: ModifyAndroidInstanceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAppRequest extends $tea.Model {
  appId?: number;
  appName?: string;
  description?: string;
  iconUrl?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      description: 'Description',
      iconUrl: 'IconUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      appName: 'string',
      description: 'string',
      iconUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAppResponseBody extends $tea.Model {
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

export class ModifyAppResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyAppResponseBody;
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
      body: ModifyAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyKeyPairNameRequest extends $tea.Model {
  keyPairId?: string;
  newKeyPairName?: string;
  static names(): { [key: string]: string } {
    return {
      keyPairId: 'KeyPairId',
      newKeyPairName: 'NewKeyPairName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPairId: 'string',
      newKeyPairName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyKeyPairNameResponseBody extends $tea.Model {
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

export class ModifyKeyPairNameResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyKeyPairNameResponseBody;
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
      body: ModifyKeyPairNameResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPolicyGroupRequest extends $tea.Model {
  cameraRedirect?: string;
  clipboard?: string;
  html5FileTransfer?: string;
  localDrive?: string;
  policyGroupId?: string;
  policyGroupName?: string;
  resolutionHeight?: number;
  resolutionWidth?: number;
  static names(): { [key: string]: string } {
    return {
      cameraRedirect: 'CameraRedirect',
      clipboard: 'Clipboard',
      html5FileTransfer: 'Html5FileTransfer',
      localDrive: 'LocalDrive',
      policyGroupId: 'PolicyGroupId',
      policyGroupName: 'PolicyGroupName',
      resolutionHeight: 'ResolutionHeight',
      resolutionWidth: 'ResolutionWidth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cameraRedirect: 'string',
      clipboard: 'string',
      html5FileTransfer: 'string',
      localDrive: 'string',
      policyGroupId: 'string',
      policyGroupName: 'string',
      resolutionHeight: 'number',
      resolutionWidth: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPolicyGroupResponseBody extends $tea.Model {
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

export class ModifyPolicyGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyPolicyGroupResponseBody;
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
      body: ModifyPolicyGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecoveryFileRequest extends $tea.Model {
  androidInstanceIdList?: string[];
  backupFileId?: string;
  backupFilePath?: string;
  uploadEndpoint?: string;
  uploadType?: string;
  static names(): { [key: string]: string } {
    return {
      androidInstanceIdList: 'AndroidInstanceIdList',
      backupFileId: 'BackupFileId',
      backupFilePath: 'BackupFilePath',
      uploadEndpoint: 'UploadEndpoint',
      uploadType: 'UploadType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      androidInstanceIdList: { 'type': 'array', 'itemType': 'string' },
      backupFileId: 'string',
      backupFilePath: 'string',
      uploadEndpoint: 'string',
      uploadType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecoveryFileResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecoveryFileResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecoveryFileResponseBody;
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
      body: RecoveryFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewAndroidInstanceGroupsRequest extends $tea.Model {
  autoPay?: boolean;
  instanceGroupIds?: string[];
  period?: number;
  periodUnit?: string;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      instanceGroupIds: 'InstanceGroupIds',
      period: 'Period',
      periodUnit: 'PeriodUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      instanceGroupIds: { 'type': 'array', 'itemType': 'string' },
      period: 'number',
      periodUnit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewAndroidInstanceGroupsResponseBody extends $tea.Model {
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

export class RenewAndroidInstanceGroupsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RenewAndroidInstanceGroupsResponseBody;
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
      body: RenewAndroidInstanceGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetAndroidInstancesInGroupRequest extends $tea.Model {
  androidInstanceIds?: string[];
  static names(): { [key: string]: string } {
    return {
      androidInstanceIds: 'AndroidInstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      androidInstanceIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetAndroidInstancesInGroupResponseBody extends $tea.Model {
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

export class ResetAndroidInstancesInGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ResetAndroidInstancesInGroupResponseBody;
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
      body: ResetAndroidInstancesInGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunCommandRequest extends $tea.Model {
  commandContent?: string;
  instanceIds?: string[];
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      commandContent: 'CommandContent',
      instanceIds: 'InstanceIds',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandContent: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      timeout: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunCommandResponseBody extends $tea.Model {
  invokeId?: string;
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
  androidInstanceIdList?: string[];
  sourceFilePath?: string;
  uploadEndpoint?: string;
  uploadType?: string;
  uploadUrl?: string;
  static names(): { [key: string]: string } {
    return {
      androidInstanceIdList: 'AndroidInstanceIdList',
      sourceFilePath: 'SourceFilePath',
      uploadEndpoint: 'UploadEndpoint',
      uploadType: 'UploadType',
      uploadUrl: 'UploadUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      androidInstanceIdList: { 'type': 'array', 'itemType': 'string' },
      sourceFilePath: 'string',
      uploadEndpoint: 'string',
      uploadType: 'string',
      uploadUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendFileResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
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

export class SetAdbSecureRequest extends $tea.Model {
  instanceIds?: string[];
  status?: number;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetAdbSecureResponseBody extends $tea.Model {
  data?: SetAdbSecureResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: SetAdbSecureResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetAdbSecureResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetAdbSecureResponseBody;
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
      body: SetAdbSecureResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartAndroidInstanceRequest extends $tea.Model {
  androidInstanceIds?: string[];
  static names(): { [key: string]: string } {
    return {
      androidInstanceIds: 'AndroidInstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      androidInstanceIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartAndroidInstanceResponseBody extends $tea.Model {
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

export class StartAndroidInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartAndroidInstanceResponseBody;
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
      body: StartAndroidInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UninstallAppRequest extends $tea.Model {
  appIdList?: string[];
  instanceGroupIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      appIdList: 'AppIdList',
      instanceGroupIdList: 'InstanceGroupIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appIdList: { 'type': 'array', 'itemType': 'string' },
      instanceGroupIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UninstallAppResponseBody extends $tea.Model {
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

export class UninstallAppResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UninstallAppResponseBody;
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
      body: UninstallAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCustomImageNameRequest extends $tea.Model {
  imageId?: string;
  imageName?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      imageName: 'ImageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      imageName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCustomImageNameResponseBody extends $tea.Model {
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

export class UpdateCustomImageNameResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateCustomImageNameResponseBody;
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
      body: UpdateCustomImageNameResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceGroupImageRequest extends $tea.Model {
  imageId?: string;
  instanceGroupIds?: string[];
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      instanceGroupIds: 'InstanceGroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      instanceGroupIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceGroupImageResponseBody extends $tea.Model {
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

export class UpdateInstanceGroupImageResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateInstanceGroupImageResponseBody;
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
      body: UpdateInstanceGroupImageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeAndroidInstanceGroupRequest extends $tea.Model {
  autoPay?: boolean;
  increaseNumberOfInstance?: number;
  instanceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      increaseNumberOfInstance: 'IncreaseNumberOfInstance',
      instanceGroupId: 'InstanceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      increaseNumberOfInstance: 'number',
      instanceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeAndroidInstanceGroupResponseBody extends $tea.Model {
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

export class UpgradeAndroidInstanceGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpgradeAndroidInstanceGroupResponseBody;
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
      body: UpgradeAndroidInstanceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachKeyPairResponseBodyData extends $tea.Model {
  attachedInstanceIds?: string[];
  failCount?: number;
  keyPairId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      attachedInstanceIds: 'AttachedInstanceIds',
      failCount: 'FailCount',
      keyPairId: 'KeyPairId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachedInstanceIds: { 'type': 'array', 'itemType': 'string' },
      failCount: 'number',
      keyPairId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckResourceStockResponseBodyResourceStockModels extends $tea.Model {
  regionId?: string;
  stockStatus?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      stockStatus: 'StockStatus',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      stockStatus: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateKeyPairResponseBodyData extends $tea.Model {
  gmtCreated?: string;
  keyPairId?: string;
  keyPairName?: string;
  privateKeyBody?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreated: 'GmtCreated',
      keyPairId: 'KeyPairId',
      keyPairName: 'KeyPairName',
      privateKeyBody: 'PrivateKeyBody',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreated: 'string',
      keyPairId: 'string',
      keyPairName: 'string',
      privateKeyBody: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteImagesResponseBodyData extends $tea.Model {
  failDeleteImageIds?: string[];
  successDeleteImageIds?: string[];
  static names(): { [key: string]: string } {
    return {
      failDeleteImageIds: 'FailDeleteImageIds',
      successDeleteImageIds: 'SuccessDeleteImageIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failDeleteImageIds: { 'type': 'array', 'itemType': 'string' },
      successDeleteImageIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAndroidInstanceGroupsResponseBodyInstanceGroupModelDisks extends $tea.Model {
  diskSize?: number;
  diskType?: string;
  static names(): { [key: string]: string } {
    return {
      diskSize: 'DiskSize',
      diskType: 'DiskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskSize: 'number',
      diskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAndroidInstanceGroupsResponseBodyInstanceGroupModel extends $tea.Model {
  appInstanceGroupId?: string;
  architectureType?: string;
  chargeType?: string;
  cpu?: string;
  disks?: DescribeAndroidInstanceGroupsResponseBodyInstanceGroupModelDisks[];
  gmtCreate?: string;
  gmtExpired?: string;
  gmtModified?: string;
  imageId?: string;
  installedAppList?: string;
  instanceGroupId?: string;
  instanceGroupName?: string;
  instanceGroupSpec?: string;
  instanceGroupSpecDescribe?: string;
  instanceGroupStatus?: string;
  memory?: number;
  numberOfInstances?: string;
  officeSiteId?: string;
  policyGroupId?: string;
  regionId?: string;
  resolutionHeight?: number;
  resolutionWidth?: number;
  saleMode?: string;
  systemVersion?: string;
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      appInstanceGroupId: 'AppInstanceGroupId',
      architectureType: 'ArchitectureType',
      chargeType: 'ChargeType',
      cpu: 'Cpu',
      disks: 'Disks',
      gmtCreate: 'GmtCreate',
      gmtExpired: 'GmtExpired',
      gmtModified: 'GmtModified',
      imageId: 'ImageId',
      installedAppList: 'InstalledAppList',
      instanceGroupId: 'InstanceGroupId',
      instanceGroupName: 'InstanceGroupName',
      instanceGroupSpec: 'InstanceGroupSpec',
      instanceGroupSpecDescribe: 'InstanceGroupSpecDescribe',
      instanceGroupStatus: 'InstanceGroupStatus',
      memory: 'Memory',
      numberOfInstances: 'NumberOfInstances',
      officeSiteId: 'OfficeSiteId',
      policyGroupId: 'PolicyGroupId',
      regionId: 'RegionId',
      resolutionHeight: 'ResolutionHeight',
      resolutionWidth: 'ResolutionWidth',
      saleMode: 'SaleMode',
      systemVersion: 'SystemVersion',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceGroupId: 'string',
      architectureType: 'string',
      chargeType: 'string',
      cpu: 'string',
      disks: { 'type': 'array', 'itemType': DescribeAndroidInstanceGroupsResponseBodyInstanceGroupModelDisks },
      gmtCreate: 'string',
      gmtExpired: 'string',
      gmtModified: 'string',
      imageId: 'string',
      installedAppList: 'string',
      instanceGroupId: 'string',
      instanceGroupName: 'string',
      instanceGroupSpec: 'string',
      instanceGroupSpecDescribe: 'string',
      instanceGroupStatus: 'string',
      memory: 'number',
      numberOfInstances: 'string',
      officeSiteId: 'string',
      policyGroupId: 'string',
      regionId: 'string',
      resolutionHeight: 'number',
      resolutionWidth: 'number',
      saleMode: 'string',
      systemVersion: 'string',
      vSwitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAndroidInstancesResponseBodyInstanceModel extends $tea.Model {
  androidInstanceGroupId?: string;
  androidInstanceId?: string;
  androidInstanceName?: string;
  androidInstanceStatus?: string;
  appInstanceGroupId?: string;
  appInstanceId?: string;
  authorizedUserId?: string;
  bindUserId?: string;
  errorCode?: string;
  gmtCreate?: string;
  gmtModified?: string;
  keyPairId?: string;
  networkInterfaceIp?: string;
  persistentAppInstanceId?: string;
  rate?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      androidInstanceGroupId: 'AndroidInstanceGroupId',
      androidInstanceId: 'AndroidInstanceId',
      androidInstanceName: 'AndroidInstanceName',
      androidInstanceStatus: 'AndroidInstanceStatus',
      appInstanceGroupId: 'AppInstanceGroupId',
      appInstanceId: 'AppInstanceId',
      authorizedUserId: 'AuthorizedUserId',
      bindUserId: 'BindUserId',
      errorCode: 'ErrorCode',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      keyPairId: 'KeyPairId',
      networkInterfaceIp: 'NetworkInterfaceIp',
      persistentAppInstanceId: 'PersistentAppInstanceId',
      rate: 'Rate',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      androidInstanceGroupId: 'string',
      androidInstanceId: 'string',
      androidInstanceName: 'string',
      androidInstanceStatus: 'string',
      appInstanceGroupId: 'string',
      appInstanceId: 'string',
      authorizedUserId: 'string',
      bindUserId: 'string',
      errorCode: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      keyPairId: 'string',
      networkInterfaceIp: 'string',
      persistentAppInstanceId: 'string',
      rate: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupFilesResponseBodyData extends $tea.Model {
  androidInstanceId?: string;
  androidInstanceName?: string;
  backupFileId?: string;
  backupFileName?: string;
  backupFilePath?: string;
  description?: string;
  endUserId?: string;
  fileSize?: number;
  gmtCreated?: string;
  gmtModified?: string;
  instanceGroupId?: string;
  sourceFilePathList?: string[];
  status?: string;
  uploadEndpoint?: string;
  uploadType?: string;
  static names(): { [key: string]: string } {
    return {
      androidInstanceId: 'AndroidInstanceId',
      androidInstanceName: 'AndroidInstanceName',
      backupFileId: 'BackupFileId',
      backupFileName: 'BackupFileName',
      backupFilePath: 'BackupFilePath',
      description: 'Description',
      endUserId: 'EndUserId',
      fileSize: 'FileSize',
      gmtCreated: 'GmtCreated',
      gmtModified: 'GmtModified',
      instanceGroupId: 'InstanceGroupId',
      sourceFilePathList: 'SourceFilePathList',
      status: 'Status',
      uploadEndpoint: 'UploadEndpoint',
      uploadType: 'UploadType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      androidInstanceId: 'string',
      androidInstanceName: 'string',
      backupFileId: 'string',
      backupFileName: 'string',
      backupFilePath: 'string',
      description: 'string',
      endUserId: 'string',
      fileSize: 'number',
      gmtCreated: 'string',
      gmtModified: 'string',
      instanceGroupId: 'string',
      sourceFilePathList: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
      uploadEndpoint: 'string',
      uploadType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvocationsResponseBodyData extends $tea.Model {
  finishTime?: string;
  instanceId?: string;
  invocationId?: string;
  invocationStatus?: string;
  output?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      finishTime: 'FinishTime',
      instanceId: 'InstanceId',
      invocationId: 'InvocationId',
      invocationStatus: 'InvocationStatus',
      output: 'Output',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      finishTime: 'string',
      instanceId: 'string',
      invocationId: 'string',
      invocationStatus: 'string',
      output: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeKeyPairsResponseBodyData extends $tea.Model {
  gmtCreated?: string;
  keyPairId?: string;
  keyPairName?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreated: 'GmtCreated',
      keyPairId: 'KeyPairId',
      keyPairName: 'KeyPairName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreated: 'string',
      keyPairId: 'string',
      keyPairName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegionModels extends $tea.Model {
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSpecResponseBodySpecInfoModel extends $tea.Model {
  core?: number;
  memory?: number;
  specId?: string;
  specStatus?: string;
  specType?: string;
  systemDiskSize?: number;
  static names(): { [key: string]: string } {
    return {
      core: 'Core',
      memory: 'Memory',
      specId: 'SpecId',
      specStatus: 'SpecStatus',
      specType: 'SpecType',
      systemDiskSize: 'SystemDiskSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      core: 'number',
      memory: 'number',
      specId: 'string',
      specStatus: 'string',
      specType: 'string',
      systemDiskSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachKeyPairResponseBodyData extends $tea.Model {
  detachedInstanceIds?: string[];
  failCount?: number;
  keyPairId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      detachedInstanceIds: 'DetachedInstanceIds',
      failCount: 'FailCount',
      keyPairId: 'KeyPairId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detachedInstanceIds: { 'type': 'array', 'itemType': 'string' },
      failCount: 'number',
      keyPairId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAdbSecureResponseBodyDataAdbSecureList extends $tea.Model {
  instanceId?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAdbSecureResponseBodyData extends $tea.Model {
  adbSecureList?: GetAdbSecureResponseBodyDataAdbSecureList[];
  static names(): { [key: string]: string } {
    return {
      adbSecureList: 'AdbSecureList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adbSecureList: { 'type': 'array', 'itemType': GetAdbSecureResponseBodyDataAdbSecureList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportKeyPairResponseBodyData extends $tea.Model {
  gmtCreated?: string;
  keyPairId?: string;
  keyPairName?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreated: 'GmtCreated',
      keyPairId: 'KeyPairId',
      keyPairName: 'KeyPairName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreated: 'string',
      keyPairId: 'string',
      keyPairName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicyGroupsResponseBodyPolicyGroupModel extends $tea.Model {
  cameraRedirect?: string;
  clipboard?: string;
  gmtCreate?: string;
  html5FileTransfer?: string;
  localDrive?: string;
  policyGroupId?: string;
  policyGroupName?: string;
  sessionResolutionHeight?: string;
  sessionResolutionWidth?: string;
  static names(): { [key: string]: string } {
    return {
      cameraRedirect: 'CameraRedirect',
      clipboard: 'Clipboard',
      gmtCreate: 'GmtCreate',
      html5FileTransfer: 'Html5FileTransfer',
      localDrive: 'LocalDrive',
      policyGroupId: 'PolicyGroupId',
      policyGroupName: 'PolicyGroupName',
      sessionResolutionHeight: 'SessionResolutionHeight',
      sessionResolutionWidth: 'SessionResolutionWidth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cameraRedirect: 'string',
      clipboard: 'string',
      gmtCreate: 'string',
      html5FileTransfer: 'string',
      localDrive: 'string',
      policyGroupId: 'string',
      policyGroupName: 'string',
      sessionResolutionHeight: 'string',
      sessionResolutionWidth: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetAdbSecureResponseBodyData extends $tea.Model {
  failCount?: number;
  instanceIds?: string[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      failCount: 'FailCount',
      instanceIds: 'InstanceIds',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failCount: 'number',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._signatureAlgorithm = "v2";
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("eds-aic", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * @summary 绑定密钥对
   *
   * @param request AttachKeyPairRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return AttachKeyPairResponse
   */
  async attachKeyPairWithOptions(request: AttachKeyPairRequest, runtime: $Util.RuntimeOptions): Promise<AttachKeyPairResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!Util.isUnset(request.keyPairId)) {
      query["KeyPairId"] = request.keyPairId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AttachKeyPair",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AttachKeyPairResponse>(await this.callApi(params, req, runtime), new AttachKeyPairResponse({}));
  }

  /**
   * @summary 绑定密钥对
   *
   * @param request AttachKeyPairRequest
   * @return AttachKeyPairResponse
   */
  async attachKeyPair(request: AttachKeyPairRequest): Promise<AttachKeyPairResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.attachKeyPairWithOptions(request, runtime);
  }

  /**
   * @summary 为用户授权/解授权安卓实例
   *
   * @param request AuthorizeAndroidInstanceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return AuthorizeAndroidInstanceResponse
   */
  async authorizeAndroidInstanceWithOptions(request: AuthorizeAndroidInstanceRequest, runtime: $Util.RuntimeOptions): Promise<AuthorizeAndroidInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.androidInstanceIds)) {
      query["AndroidInstanceIds"] = request.androidInstanceIds;
    }

    if (!Util.isUnset(request.authorizeUserId)) {
      query["AuthorizeUserId"] = request.authorizeUserId;
    }

    if (!Util.isUnset(request.unAuthorizeUserId)) {
      query["UnAuthorizeUserId"] = request.unAuthorizeUserId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AuthorizeAndroidInstance",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AuthorizeAndroidInstanceResponse>(await this.callApi(params, req, runtime), new AuthorizeAndroidInstanceResponse({}));
  }

  /**
   * @summary 为用户授权/解授权安卓实例
   *
   * @param request AuthorizeAndroidInstanceRequest
   * @return AuthorizeAndroidInstanceResponse
   */
  async authorizeAndroidInstance(request: AuthorizeAndroidInstanceRequest): Promise<AuthorizeAndroidInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.authorizeAndroidInstanceWithOptions(request, runtime);
  }

  /**
   * @param request BackupFileRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return BackupFileResponse
   */
  async backupFileWithOptions(request: BackupFileRequest, runtime: $Util.RuntimeOptions): Promise<BackupFileResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.androidInstanceIdList)) {
      query["AndroidInstanceIdList"] = request.androidInstanceIdList;
    }

    if (!Util.isUnset(request.backupFilePath)) {
      query["BackupFilePath"] = request.backupFilePath;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.sourceFilePathList)) {
      query["SourceFilePathList"] = request.sourceFilePathList;
    }

    if (!Util.isUnset(request.uploadEndpoint)) {
      query["UploadEndpoint"] = request.uploadEndpoint;
    }

    if (!Util.isUnset(request.uploadType)) {
      query["UploadType"] = request.uploadType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BackupFile",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BackupFileResponse>(await this.callApi(params, req, runtime), new BackupFileResponse({}));
  }

  /**
   * @param request BackupFileRequest
   * @return BackupFileResponse
   */
  async backupFile(request: BackupFileRequest): Promise<BackupFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.backupFileWithOptions(request, runtime);
  }

  /**
   * @summary 检查资源库存
   *
   * @param request CheckResourceStockRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CheckResourceStockResponse
   */
  async checkResourceStockWithOptions(request: CheckResourceStockRequest, runtime: $Util.RuntimeOptions): Promise<CheckResourceStockResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acpSpecId)) {
      query["AcpSpecId"] = request.acpSpecId;
    }

    if (!Util.isUnset(request.bizRegionId)) {
      query["BizRegionId"] = request.bizRegionId;
    }

    if (!Util.isUnset(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CheckResourceStock",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckResourceStockResponse>(await this.callApi(params, req, runtime), new CheckResourceStockResponse({}));
  }

  /**
   * @summary 检查资源库存
   *
   * @param request CheckResourceStockRequest
   * @return CheckResourceStockResponse
   */
  async checkResourceStock(request: CheckResourceStockRequest): Promise<CheckResourceStockResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkResourceStockWithOptions(request, runtime);
  }

  /**
   * @summary 创建自定义镜像
   *
   * @param request CreateCustomImageRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateCustomImageResponse
   */
  async createCustomImageWithOptions(request: CreateCustomImageRequest, runtime: $Util.RuntimeOptions): Promise<CreateCustomImageResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.imageName)) {
      body["ImageName"] = request.imageName;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateCustomImage",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateCustomImageResponse>(await this.callApi(params, req, runtime), new CreateCustomImageResponse({}));
  }

  /**
   * @summary 创建自定义镜像
   *
   * @param request CreateCustomImageRequest
   * @return CreateCustomImageResponse
   */
  async createCustomImage(request: CreateCustomImageRequest): Promise<CreateCustomImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCustomImageWithOptions(request, runtime);
  }

  /**
   * @summary 创建密钥对
   *
   * @param request CreateKeyPairRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateKeyPairResponse
   */
  async createKeyPairWithOptions(request: CreateKeyPairRequest, runtime: $Util.RuntimeOptions): Promise<CreateKeyPairResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.keyPairName)) {
      query["KeyPairName"] = request.keyPairName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateKeyPair",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateKeyPairResponse>(await this.callApi(params, req, runtime), new CreateKeyPairResponse({}));
  }

  /**
   * @summary 创建密钥对
   *
   * @param request CreateKeyPairRequest
   * @return CreateKeyPairResponse
   */
  async createKeyPair(request: CreateKeyPairRequest): Promise<CreateKeyPairResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createKeyPairWithOptions(request, runtime);
  }

  /**
   * @summary 创建策略
   *
   * @param request CreatePolicyGroupRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreatePolicyGroupResponse
   */
  async createPolicyGroupWithOptions(request: CreatePolicyGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreatePolicyGroupResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.cameraRedirect)) {
      body["CameraRedirect"] = request.cameraRedirect;
    }

    if (!Util.isUnset(request.clipboard)) {
      body["Clipboard"] = request.clipboard;
    }

    if (!Util.isUnset(request.html5FileTransfer)) {
      body["Html5FileTransfer"] = request.html5FileTransfer;
    }

    if (!Util.isUnset(request.localDrive)) {
      body["LocalDrive"] = request.localDrive;
    }

    if (!Util.isUnset(request.policyGroupName)) {
      body["PolicyGroupName"] = request.policyGroupName;
    }

    if (!Util.isUnset(request.resolutionHeight)) {
      body["ResolutionHeight"] = request.resolutionHeight;
    }

    if (!Util.isUnset(request.resolutionWidth)) {
      body["ResolutionWidth"] = request.resolutionWidth;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreatePolicyGroup",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreatePolicyGroupResponse>(await this.callApi(params, req, runtime), new CreatePolicyGroupResponse({}));
  }

  /**
   * @summary 创建策略
   *
   * @param request CreatePolicyGroupRequest
   * @return CreatePolicyGroupResponse
   */
  async createPolicyGroup(request: CreatePolicyGroupRequest): Promise<CreatePolicyGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createPolicyGroupWithOptions(request, runtime);
  }

  /**
   * @summary 删除安卓实例组
   *
   * @param request DeleteAndroidInstanceGroupRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteAndroidInstanceGroupResponse
   */
  async deleteAndroidInstanceGroupWithOptions(request: DeleteAndroidInstanceGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAndroidInstanceGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceGroupIds)) {
      query["InstanceGroupIds"] = request.instanceGroupIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteAndroidInstanceGroup",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteAndroidInstanceGroupResponse>(await this.callApi(params, req, runtime), new DeleteAndroidInstanceGroupResponse({}));
  }

  /**
   * @summary 删除安卓实例组
   *
   * @param request DeleteAndroidInstanceGroupRequest
   * @return DeleteAndroidInstanceGroupResponse
   */
  async deleteAndroidInstanceGroup(request: DeleteAndroidInstanceGroupRequest): Promise<DeleteAndroidInstanceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAndroidInstanceGroupWithOptions(request, runtime);
  }

  /**
   * @summary 删除app
   *
   * @param request DeleteAppsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteAppsResponse
   */
  async deleteAppsWithOptions(request: DeleteAppsRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAppsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appIdList)) {
      query["AppIdList"] = request.appIdList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteApps",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteAppsResponse>(await this.callApi(params, req, runtime), new DeleteAppsResponse({}));
  }

  /**
   * @summary 删除app
   *
   * @param request DeleteAppsRequest
   * @return DeleteAppsResponse
   */
  async deleteApps(request: DeleteAppsRequest): Promise<DeleteAppsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAppsWithOptions(request, runtime);
  }

  /**
   * @param tmpReq DeleteImagesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteImagesResponse
   */
  async deleteImagesWithOptions(tmpReq: DeleteImagesRequest, runtime: $Util.RuntimeOptions): Promise<DeleteImagesResponse> {
    Util.validateModel(tmpReq);
    let request = new DeleteImagesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.imageIds)) {
      request.imageIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.imageIds, "ImageIds", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.imageIdsShrink)) {
      body["ImageIds"] = request.imageIdsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteImages",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteImagesResponse>(await this.callApi(params, req, runtime), new DeleteImagesResponse({}));
  }

  /**
   * @param request DeleteImagesRequest
   * @return DeleteImagesResponse
   */
  async deleteImages(request: DeleteImagesRequest): Promise<DeleteImagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteImagesWithOptions(request, runtime);
  }

  /**
   * @summary 删除密钥对
   *
   * @param request DeleteKeyPairsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteKeyPairsResponse
   */
  async deleteKeyPairsWithOptions(request: DeleteKeyPairsRequest, runtime: $Util.RuntimeOptions): Promise<DeleteKeyPairsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.keyPairIds)) {
      query["KeyPairIds"] = request.keyPairIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteKeyPairs",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteKeyPairsResponse>(await this.callApi(params, req, runtime), new DeleteKeyPairsResponse({}));
  }

  /**
   * @summary 删除密钥对
   *
   * @param request DeleteKeyPairsRequest
   * @return DeleteKeyPairsResponse
   */
  async deleteKeyPairs(request: DeleteKeyPairsRequest): Promise<DeleteKeyPairsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteKeyPairsWithOptions(request, runtime);
  }

  /**
   * @summary 删除策略
   *
   * @param request DeletePolicyGroupRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeletePolicyGroupResponse
   */
  async deletePolicyGroupWithOptions(request: DeletePolicyGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeletePolicyGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.policyGroupIds)) {
      query["PolicyGroupIds"] = request.policyGroupIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeletePolicyGroup",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeletePolicyGroupResponse>(await this.callApi(params, req, runtime), new DeletePolicyGroupResponse({}));
  }

  /**
   * @summary 删除策略
   *
   * @param request DeletePolicyGroupRequest
   * @return DeletePolicyGroupResponse
   */
  async deletePolicyGroup(request: DeletePolicyGroupRequest): Promise<DeletePolicyGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deletePolicyGroupWithOptions(request, runtime);
  }

  /**
   * @summary 查询安卓实例组
   *
   * @param request DescribeAndroidInstanceGroupsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeAndroidInstanceGroupsResponse
   */
  async describeAndroidInstanceGroupsWithOptions(request: DescribeAndroidInstanceGroupsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAndroidInstanceGroupsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizRegionId)) {
      query["BizRegionId"] = request.bizRegionId;
    }

    if (!Util.isUnset(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
    }

    if (!Util.isUnset(request.instanceGroupIds)) {
      query["InstanceGroupIds"] = request.instanceGroupIds;
    }

    if (!Util.isUnset(request.instanceGroupName)) {
      query["InstanceGroupName"] = request.instanceGroupName;
    }

    if (!Util.isUnset(request.keyPairId)) {
      query["KeyPairId"] = request.keyPairId;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.policyGroupId)) {
      query["PolicyGroupId"] = request.policyGroupId;
    }

    if (!Util.isUnset(request.saleMode)) {
      query["SaleMode"] = request.saleMode;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAndroidInstanceGroups",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAndroidInstanceGroupsResponse>(await this.callApi(params, req, runtime), new DescribeAndroidInstanceGroupsResponse({}));
  }

  /**
   * @summary 查询安卓实例组
   *
   * @param request DescribeAndroidInstanceGroupsRequest
   * @return DescribeAndroidInstanceGroupsResponse
   */
  async describeAndroidInstanceGroups(request: DescribeAndroidInstanceGroupsRequest): Promise<DescribeAndroidInstanceGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAndroidInstanceGroupsWithOptions(request, runtime);
  }

  /**
   * @summary 查询安卓实例列表
   *
   * @param request DescribeAndroidInstancesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeAndroidInstancesResponse
   */
  async describeAndroidInstancesWithOptions(request: DescribeAndroidInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAndroidInstancesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.androidInstanceIds)) {
      query["AndroidInstanceIds"] = request.androidInstanceIds;
    }

    if (!Util.isUnset(request.androidInstanceName)) {
      query["AndroidInstanceName"] = request.androidInstanceName;
    }

    if (!Util.isUnset(request.instanceGroupId)) {
      query["InstanceGroupId"] = request.instanceGroupId;
    }

    if (!Util.isUnset(request.keyPairId)) {
      query["KeyPairId"] = request.keyPairId;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.saleMode)) {
      query["SaleMode"] = request.saleMode;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAndroidInstances",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAndroidInstancesResponse>(await this.callApi(params, req, runtime), new DescribeAndroidInstancesResponse({}));
  }

  /**
   * @summary 查询安卓实例列表
   *
   * @param request DescribeAndroidInstancesRequest
   * @return DescribeAndroidInstancesResponse
   */
  async describeAndroidInstances(request: DescribeAndroidInstancesRequest): Promise<DescribeAndroidInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAndroidInstancesWithOptions(request, runtime);
  }

  /**
   * @param request DescribeBackupFilesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeBackupFilesResponse
   */
  async describeBackupFilesWithOptions(request: DescribeBackupFilesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBackupFilesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.androidInstanceId)) {
      query["AndroidInstanceId"] = request.androidInstanceId;
    }

    if (!Util.isUnset(request.androidInstanceName)) {
      query["AndroidInstanceName"] = request.androidInstanceName;
    }

    if (!Util.isUnset(request.backupFileId)) {
      query["BackupFileId"] = request.backupFileId;
    }

    if (!Util.isUnset(request.backupFileName)) {
      query["BackupFileName"] = request.backupFileName;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!Util.isUnset(request.instanceGroupId)) {
      query["InstanceGroupId"] = request.instanceGroupId;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeBackupFiles",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeBackupFilesResponse>(await this.callApi(params, req, runtime), new DescribeBackupFilesResponse({}));
  }

  /**
   * @param request DescribeBackupFilesRequest
   * @return DescribeBackupFilesResponse
   */
  async describeBackupFiles(request: DescribeBackupFilesRequest): Promise<DescribeBackupFilesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBackupFilesWithOptions(request, runtime);
  }

  /**
   * @summary 查询命令结果
   *
   * @param request DescribeInvocationsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeInvocationsResponse
   */
  async describeInvocationsWithOptions(request: DescribeInvocationsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInvocationsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!Util.isUnset(request.invocationId)) {
      query["InvocationId"] = request.invocationId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeInvocations",
      version: "2023-09-30",
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
   * @summary 查询命令结果
   *
   * @param request DescribeInvocationsRequest
   * @return DescribeInvocationsResponse
   */
  async describeInvocations(request: DescribeInvocationsRequest): Promise<DescribeInvocationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInvocationsWithOptions(request, runtime);
  }

  /**
   * @summary 查询密钥对
   *
   * @param request DescribeKeyPairsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeKeyPairsResponse
   */
  async describeKeyPairsWithOptions(request: DescribeKeyPairsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeKeyPairsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.keyPairIds)) {
      query["KeyPairIds"] = request.keyPairIds;
    }

    if (!Util.isUnset(request.keyPairName)) {
      query["KeyPairName"] = request.keyPairName;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeKeyPairs",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeKeyPairsResponse>(await this.callApi(params, req, runtime), new DescribeKeyPairsResponse({}));
  }

  /**
   * @summary 查询密钥对
   *
   * @param request DescribeKeyPairsRequest
   * @return DescribeKeyPairsResponse
   */
  async describeKeyPairs(request: DescribeKeyPairsRequest): Promise<DescribeKeyPairsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeKeyPairsWithOptions(request, runtime);
  }

  /**
   * @summary 查询地域
   *
   * @param request DescribeRegionsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeRegionsResponse
   */
  async describeRegionsWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "DescribeRegions",
      version: "2023-09-30",
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
   * @summary 查询地域
   *
   * @return DescribeRegionsResponse
   */
  async describeRegions(): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(runtime);
  }

  /**
   * @summary 查询规格
   *
   * @param request DescribeSpecRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeSpecResponse
   */
  async describeSpecWithOptions(request: DescribeSpecRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSpecResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.specIds)) {
      query["SpecIds"] = request.specIds;
    }

    if (!Util.isUnset(request.specStatus)) {
      query["SpecStatus"] = request.specStatus;
    }

    if (!Util.isUnset(request.specType)) {
      query["SpecType"] = request.specType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSpec",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSpecResponse>(await this.callApi(params, req, runtime), new DescribeSpecResponse({}));
  }

  /**
   * @summary 查询规格
   *
   * @param request DescribeSpecRequest
   * @return DescribeSpecResponse
   */
  async describeSpec(request: DescribeSpecRequest): Promise<DescribeSpecResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSpecWithOptions(request, runtime);
  }

  /**
   * @summary 解绑密钥对
   *
   * @param request DetachKeyPairRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DetachKeyPairResponse
   */
  async detachKeyPairWithOptions(request: DetachKeyPairRequest, runtime: $Util.RuntimeOptions): Promise<DetachKeyPairResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!Util.isUnset(request.keyPairId)) {
      query["KeyPairId"] = request.keyPairId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DetachKeyPair",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DetachKeyPairResponse>(await this.callApi(params, req, runtime), new DetachKeyPairResponse({}));
  }

  /**
   * @summary 解绑密钥对
   *
   * @param request DetachKeyPairRequest
   * @return DetachKeyPairResponse
   */
  async detachKeyPair(request: DetachKeyPairRequest): Promise<DetachKeyPairResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detachKeyPairWithOptions(request, runtime);
  }

  /**
   * @summary 自定义镜像分发
   *
   * @param request DistributeImageRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DistributeImageResponse
   */
  async distributeImageWithOptions(request: DistributeImageRequest, runtime: $Util.RuntimeOptions): Promise<DistributeImageResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.distributeRegionList)) {
      body["DistributeRegionList"] = request.distributeRegionList;
    }

    if (!Util.isUnset(request.imageId)) {
      body["ImageId"] = request.imageId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DistributeImage",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DistributeImageResponse>(await this.callApi(params, req, runtime), new DistributeImageResponse({}));
  }

  /**
   * @summary 自定义镜像分发
   *
   * @param request DistributeImageRequest
   * @return DistributeImageResponse
   */
  async distributeImage(request: DistributeImageRequest): Promise<DistributeImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.distributeImageWithOptions(request, runtime);
  }

  /**
   * @summary 实例组缩容
   *
   * @param request DowngradeAndroidInstanceGroupRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DowngradeAndroidInstanceGroupResponse
   */
  async downgradeAndroidInstanceGroupWithOptions(request: DowngradeAndroidInstanceGroupRequest, runtime: $Util.RuntimeOptions): Promise<DowngradeAndroidInstanceGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.androidInstanceIds)) {
      query["AndroidInstanceIds"] = request.androidInstanceIds;
    }

    if (!Util.isUnset(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!Util.isUnset(request.instanceGroupId)) {
      query["InstanceGroupId"] = request.instanceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DowngradeAndroidInstanceGroup",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DowngradeAndroidInstanceGroupResponse>(await this.callApi(params, req, runtime), new DowngradeAndroidInstanceGroupResponse({}));
  }

  /**
   * @summary 实例组缩容
   *
   * @param request DowngradeAndroidInstanceGroupRequest
   * @return DowngradeAndroidInstanceGroupResponse
   */
  async downgradeAndroidInstanceGroup(request: DowngradeAndroidInstanceGroupRequest): Promise<DowngradeAndroidInstanceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.downgradeAndroidInstanceGroupWithOptions(request, runtime);
  }

  /**
   * @summary 云手机拉取文件到OSS
   *
   * @param request FetchFileRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return FetchFileResponse
   */
  async fetchFileWithOptions(request: FetchFileRequest, runtime: $Util.RuntimeOptions): Promise<FetchFileResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.androidInstanceIdList)) {
      query["AndroidInstanceIdList"] = request.androidInstanceIdList;
    }

    if (!Util.isUnset(request.sourceFilePath)) {
      query["SourceFilePath"] = request.sourceFilePath;
    }

    if (!Util.isUnset(request.uploadEndpoint)) {
      query["UploadEndpoint"] = request.uploadEndpoint;
    }

    if (!Util.isUnset(request.uploadType)) {
      query["UploadType"] = request.uploadType;
    }

    if (!Util.isUnset(request.uploadUrl)) {
      query["UploadUrl"] = request.uploadUrl;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "FetchFile",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<FetchFileResponse>(await this.callApi(params, req, runtime), new FetchFileResponse({}));
  }

  /**
   * @summary 云手机拉取文件到OSS
   *
   * @param request FetchFileRequest
   * @return FetchFileResponse
   */
  async fetchFile(request: FetchFileRequest): Promise<FetchFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.fetchFileWithOptions(request, runtime);
  }

  /**
   * @param request GetAdbSecureRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetAdbSecureResponse
   */
  async getAdbSecureWithOptions(request: GetAdbSecureRequest, runtime: $Util.RuntimeOptions): Promise<GetAdbSecureResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAdbSecure",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAdbSecureResponse>(await this.callApi(params, req, runtime), new GetAdbSecureResponse({}));
  }

  /**
   * @param request GetAdbSecureRequest
   * @return GetAdbSecureResponse
   */
  async getAdbSecure(request: GetAdbSecureRequest): Promise<GetAdbSecureResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAdbSecureWithOptions(request, runtime);
  }

  /**
   * @param request ImportKeyPairRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ImportKeyPairResponse
   */
  async importKeyPairWithOptions(request: ImportKeyPairRequest, runtime: $Util.RuntimeOptions): Promise<ImportKeyPairResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.keyPairName)) {
      query["KeyPairName"] = request.keyPairName;
    }

    if (!Util.isUnset(request.publicKeyBody)) {
      query["PublicKeyBody"] = request.publicKeyBody;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ImportKeyPair",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ImportKeyPairResponse>(await this.callApi(params, req, runtime), new ImportKeyPairResponse({}));
  }

  /**
   * @param request ImportKeyPairRequest
   * @return ImportKeyPairResponse
   */
  async importKeyPair(request: ImportKeyPairRequest): Promise<ImportKeyPairResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.importKeyPairWithOptions(request, runtime);
  }

  /**
   * @summary 安装app到实例组
   *
   * @param request InstallAppRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return InstallAppResponse
   */
  async installAppWithOptions(request: InstallAppRequest, runtime: $Util.RuntimeOptions): Promise<InstallAppResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appIdList)) {
      query["AppIdList"] = request.appIdList;
    }

    if (!Util.isUnset(request.instanceGroupIdList)) {
      query["InstanceGroupIdList"] = request.instanceGroupIdList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "InstallApp",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<InstallAppResponse>(await this.callApi(params, req, runtime), new InstallAppResponse({}));
  }

  /**
   * @summary 安装app到实例组
   *
   * @param request InstallAppRequest
   * @return InstallAppResponse
   */
  async installApp(request: InstallAppRequest): Promise<InstallAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.installAppWithOptions(request, runtime);
  }

  /**
   * @summary 查询Policy列表
   *
   * @param request ListPolicyGroupsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListPolicyGroupsResponse
   */
  async listPolicyGroupsWithOptions(request: ListPolicyGroupsRequest, runtime: $Util.RuntimeOptions): Promise<ListPolicyGroupsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.policyGroupIds)) {
      body["PolicyGroupIds"] = request.policyGroupIds;
    }

    if (!Util.isUnset(request.policyGroupName)) {
      body["PolicyGroupName"] = request.policyGroupName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListPolicyGroups",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListPolicyGroupsResponse>(await this.callApi(params, req, runtime), new ListPolicyGroupsResponse({}));
  }

  /**
   * @summary 查询Policy列表
   *
   * @param request ListPolicyGroupsRequest
   * @return ListPolicyGroupsResponse
   */
  async listPolicyGroups(request: ListPolicyGroupsRequest): Promise<ListPolicyGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPolicyGroupsWithOptions(request, runtime);
  }

  /**
   * @summary 修改安卓实例信息
   *
   * @param request ModifyAndroidInstanceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyAndroidInstanceResponse
   */
  async modifyAndroidInstanceWithOptions(request: ModifyAndroidInstanceRequest, runtime: $Util.RuntimeOptions): Promise<ModifyAndroidInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.androidInstanceId)) {
      query["AndroidInstanceId"] = request.androidInstanceId;
    }

    if (!Util.isUnset(request.newAndroidInstanceName)) {
      query["NewAndroidInstanceName"] = request.newAndroidInstanceName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyAndroidInstance",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyAndroidInstanceResponse>(await this.callApi(params, req, runtime), new ModifyAndroidInstanceResponse({}));
  }

  /**
   * @summary 修改安卓实例信息
   *
   * @param request ModifyAndroidInstanceRequest
   * @return ModifyAndroidInstanceResponse
   */
  async modifyAndroidInstance(request: ModifyAndroidInstanceRequest): Promise<ModifyAndroidInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyAndroidInstanceWithOptions(request, runtime);
  }

  /**
   * @summary 修改安卓实例组
   *
   * @param request ModifyAndroidInstanceGroupRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyAndroidInstanceGroupResponse
   */
  async modifyAndroidInstanceGroupWithOptions(request: ModifyAndroidInstanceGroupRequest, runtime: $Util.RuntimeOptions): Promise<ModifyAndroidInstanceGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceGroupId)) {
      query["InstanceGroupId"] = request.instanceGroupId;
    }

    if (!Util.isUnset(request.newInstanceGroupName)) {
      query["NewInstanceGroupName"] = request.newInstanceGroupName;
    }

    if (!Util.isUnset(request.policyGroupId)) {
      query["PolicyGroupId"] = request.policyGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyAndroidInstanceGroup",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyAndroidInstanceGroupResponse>(await this.callApi(params, req, runtime), new ModifyAndroidInstanceGroupResponse({}));
  }

  /**
   * @summary 修改安卓实例组
   *
   * @param request ModifyAndroidInstanceGroupRequest
   * @return ModifyAndroidInstanceGroupResponse
   */
  async modifyAndroidInstanceGroup(request: ModifyAndroidInstanceGroupRequest): Promise<ModifyAndroidInstanceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyAndroidInstanceGroupWithOptions(request, runtime);
  }

  /**
   * @summary 修改app
   *
   * @param request ModifyAppRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyAppResponse
   */
  async modifyAppWithOptions(request: ModifyAppRequest, runtime: $Util.RuntimeOptions): Promise<ModifyAppResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.iconUrl)) {
      query["IconUrl"] = request.iconUrl;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyApp",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyAppResponse>(await this.callApi(params, req, runtime), new ModifyAppResponse({}));
  }

  /**
   * @summary 修改app
   *
   * @param request ModifyAppRequest
   * @return ModifyAppResponse
   */
  async modifyApp(request: ModifyAppRequest): Promise<ModifyAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyAppWithOptions(request, runtime);
  }

  /**
   * @summary 修改密钥对名称
   *
   * @param request ModifyKeyPairNameRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyKeyPairNameResponse
   */
  async modifyKeyPairNameWithOptions(request: ModifyKeyPairNameRequest, runtime: $Util.RuntimeOptions): Promise<ModifyKeyPairNameResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.keyPairId)) {
      query["KeyPairId"] = request.keyPairId;
    }

    if (!Util.isUnset(request.newKeyPairName)) {
      query["NewKeyPairName"] = request.newKeyPairName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyKeyPairName",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyKeyPairNameResponse>(await this.callApi(params, req, runtime), new ModifyKeyPairNameResponse({}));
  }

  /**
   * @summary 修改密钥对名称
   *
   * @param request ModifyKeyPairNameRequest
   * @return ModifyKeyPairNameResponse
   */
  async modifyKeyPairName(request: ModifyKeyPairNameRequest): Promise<ModifyKeyPairNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyKeyPairNameWithOptions(request, runtime);
  }

  /**
   * @summary 修改policy
   *
   * @param request ModifyPolicyGroupRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyPolicyGroupResponse
   */
  async modifyPolicyGroupWithOptions(request: ModifyPolicyGroupRequest, runtime: $Util.RuntimeOptions): Promise<ModifyPolicyGroupResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.cameraRedirect)) {
      body["CameraRedirect"] = request.cameraRedirect;
    }

    if (!Util.isUnset(request.clipboard)) {
      body["Clipboard"] = request.clipboard;
    }

    if (!Util.isUnset(request.html5FileTransfer)) {
      body["Html5FileTransfer"] = request.html5FileTransfer;
    }

    if (!Util.isUnset(request.localDrive)) {
      body["LocalDrive"] = request.localDrive;
    }

    if (!Util.isUnset(request.policyGroupId)) {
      body["PolicyGroupId"] = request.policyGroupId;
    }

    if (!Util.isUnset(request.policyGroupName)) {
      body["PolicyGroupName"] = request.policyGroupName;
    }

    if (!Util.isUnset(request.resolutionHeight)) {
      body["ResolutionHeight"] = request.resolutionHeight;
    }

    if (!Util.isUnset(request.resolutionWidth)) {
      body["ResolutionWidth"] = request.resolutionWidth;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ModifyPolicyGroup",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyPolicyGroupResponse>(await this.callApi(params, req, runtime), new ModifyPolicyGroupResponse({}));
  }

  /**
   * @summary 修改policy
   *
   * @param request ModifyPolicyGroupRequest
   * @return ModifyPolicyGroupResponse
   */
  async modifyPolicyGroup(request: ModifyPolicyGroupRequest): Promise<ModifyPolicyGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyPolicyGroupWithOptions(request, runtime);
  }

  /**
   * @param request RecoveryFileRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return RecoveryFileResponse
   */
  async recoveryFileWithOptions(request: RecoveryFileRequest, runtime: $Util.RuntimeOptions): Promise<RecoveryFileResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.androidInstanceIdList)) {
      query["AndroidInstanceIdList"] = request.androidInstanceIdList;
    }

    if (!Util.isUnset(request.backupFileId)) {
      query["BackupFileId"] = request.backupFileId;
    }

    if (!Util.isUnset(request.backupFilePath)) {
      query["BackupFilePath"] = request.backupFilePath;
    }

    if (!Util.isUnset(request.uploadEndpoint)) {
      query["UploadEndpoint"] = request.uploadEndpoint;
    }

    if (!Util.isUnset(request.uploadType)) {
      query["UploadType"] = request.uploadType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RecoveryFile",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecoveryFileResponse>(await this.callApi(params, req, runtime), new RecoveryFileResponse({}));
  }

  /**
   * @param request RecoveryFileRequest
   * @return RecoveryFileResponse
   */
  async recoveryFile(request: RecoveryFileRequest): Promise<RecoveryFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recoveryFileWithOptions(request, runtime);
  }

  /**
   * @summary 续费安卓实例组
   *
   * @param request RenewAndroidInstanceGroupsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return RenewAndroidInstanceGroupsResponse
   */
  async renewAndroidInstanceGroupsWithOptions(request: RenewAndroidInstanceGroupsRequest, runtime: $Util.RuntimeOptions): Promise<RenewAndroidInstanceGroupsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!Util.isUnset(request.instanceGroupIds)) {
      query["InstanceGroupIds"] = request.instanceGroupIds;
    }

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.periodUnit)) {
      query["PeriodUnit"] = request.periodUnit;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RenewAndroidInstanceGroups",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RenewAndroidInstanceGroupsResponse>(await this.callApi(params, req, runtime), new RenewAndroidInstanceGroupsResponse({}));
  }

  /**
   * @summary 续费安卓实例组
   *
   * @param request RenewAndroidInstanceGroupsRequest
   * @return RenewAndroidInstanceGroupsResponse
   */
  async renewAndroidInstanceGroups(request: RenewAndroidInstanceGroupsRequest): Promise<RenewAndroidInstanceGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.renewAndroidInstanceGroupsWithOptions(request, runtime);
  }

  /**
   * @summary 重置安卓实例
   *
   * @param request ResetAndroidInstancesInGroupRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ResetAndroidInstancesInGroupResponse
   */
  async resetAndroidInstancesInGroupWithOptions(request: ResetAndroidInstancesInGroupRequest, runtime: $Util.RuntimeOptions): Promise<ResetAndroidInstancesInGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.androidInstanceIds)) {
      query["AndroidInstanceIds"] = request.androidInstanceIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ResetAndroidInstancesInGroup",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ResetAndroidInstancesInGroupResponse>(await this.callApi(params, req, runtime), new ResetAndroidInstancesInGroupResponse({}));
  }

  /**
   * @summary 重置安卓实例
   *
   * @param request ResetAndroidInstancesInGroupRequest
   * @return ResetAndroidInstancesInGroupResponse
   */
  async resetAndroidInstancesInGroup(request: ResetAndroidInstancesInGroupRequest): Promise<ResetAndroidInstancesInGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resetAndroidInstancesInGroupWithOptions(request, runtime);
  }

  /**
   * @summary 通过eds agent通道下发命令
   *
   * @param request RunCommandRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return RunCommandResponse
   */
  async runCommandWithOptions(request: RunCommandRequest, runtime: $Util.RuntimeOptions): Promise<RunCommandResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.commandContent)) {
      query["CommandContent"] = request.commandContent;
    }

    if (!Util.isUnset(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!Util.isUnset(request.timeout)) {
      query["Timeout"] = request.timeout;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RunCommand",
      version: "2023-09-30",
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
   * @summary 通过eds agent通道下发命令
   *
   * @param request RunCommandRequest
   * @return RunCommandResponse
   */
  async runCommand(request: RunCommandRequest): Promise<RunCommandResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.runCommandWithOptions(request, runtime);
  }

  /**
   * @summary 推送文件到云手机
   *
   * @param request SendFileRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return SendFileResponse
   */
  async sendFileWithOptions(request: SendFileRequest, runtime: $Util.RuntimeOptions): Promise<SendFileResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.androidInstanceIdList)) {
      query["AndroidInstanceIdList"] = request.androidInstanceIdList;
    }

    if (!Util.isUnset(request.sourceFilePath)) {
      query["SourceFilePath"] = request.sourceFilePath;
    }

    if (!Util.isUnset(request.uploadEndpoint)) {
      query["UploadEndpoint"] = request.uploadEndpoint;
    }

    if (!Util.isUnset(request.uploadType)) {
      query["UploadType"] = request.uploadType;
    }

    if (!Util.isUnset(request.uploadUrl)) {
      query["UploadUrl"] = request.uploadUrl;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SendFile",
      version: "2023-09-30",
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
   * @summary 推送文件到云手机
   *
   * @param request SendFileRequest
   * @return SendFileResponse
   */
  async sendFile(request: SendFileRequest): Promise<SendFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.sendFileWithOptions(request, runtime);
  }

  /**
   * @param request SetAdbSecureRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return SetAdbSecureResponse
   */
  async setAdbSecureWithOptions(request: SetAdbSecureRequest, runtime: $Util.RuntimeOptions): Promise<SetAdbSecureResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetAdbSecure",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetAdbSecureResponse>(await this.callApi(params, req, runtime), new SetAdbSecureResponse({}));
  }

  /**
   * @param request SetAdbSecureRequest
   * @return SetAdbSecureResponse
   */
  async setAdbSecure(request: SetAdbSecureRequest): Promise<SetAdbSecureResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setAdbSecureWithOptions(request, runtime);
  }

  /**
   * @summary 实例开机
   *
   * @param request StartAndroidInstanceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return StartAndroidInstanceResponse
   */
  async startAndroidInstanceWithOptions(request: StartAndroidInstanceRequest, runtime: $Util.RuntimeOptions): Promise<StartAndroidInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.androidInstanceIds)) {
      query["AndroidInstanceIds"] = request.androidInstanceIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StartAndroidInstance",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StartAndroidInstanceResponse>(await this.callApi(params, req, runtime), new StartAndroidInstanceResponse({}));
  }

  /**
   * @summary 实例开机
   *
   * @param request StartAndroidInstanceRequest
   * @return StartAndroidInstanceResponse
   */
  async startAndroidInstance(request: StartAndroidInstanceRequest): Promise<StartAndroidInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startAndroidInstanceWithOptions(request, runtime);
  }

  /**
   * @summary 卸载app
   *
   * @param request UninstallAppRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UninstallAppResponse
   */
  async uninstallAppWithOptions(request: UninstallAppRequest, runtime: $Util.RuntimeOptions): Promise<UninstallAppResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appIdList)) {
      query["AppIdList"] = request.appIdList;
    }

    if (!Util.isUnset(request.instanceGroupIdList)) {
      query["InstanceGroupIdList"] = request.instanceGroupIdList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UninstallApp",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UninstallAppResponse>(await this.callApi(params, req, runtime), new UninstallAppResponse({}));
  }

  /**
   * @summary 卸载app
   *
   * @param request UninstallAppRequest
   * @return UninstallAppResponse
   */
  async uninstallApp(request: UninstallAppRequest): Promise<UninstallAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.uninstallAppWithOptions(request, runtime);
  }

  /**
   * @summary 修改自定义镜像名称
   *
   * @param request UpdateCustomImageNameRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateCustomImageNameResponse
   */
  async updateCustomImageNameWithOptions(request: UpdateCustomImageNameRequest, runtime: $Util.RuntimeOptions): Promise<UpdateCustomImageNameResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.imageId)) {
      body["ImageId"] = request.imageId;
    }

    if (!Util.isUnset(request.imageName)) {
      body["ImageName"] = request.imageName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateCustomImageName",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateCustomImageNameResponse>(await this.callApi(params, req, runtime), new UpdateCustomImageNameResponse({}));
  }

  /**
   * @summary 修改自定义镜像名称
   *
   * @param request UpdateCustomImageNameRequest
   * @return UpdateCustomImageNameResponse
   */
  async updateCustomImageName(request: UpdateCustomImageNameRequest): Promise<UpdateCustomImageNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateCustomImageNameWithOptions(request, runtime);
  }

  /**
   * @summary 实例组变更镜像
   *
   * @param request UpdateInstanceGroupImageRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateInstanceGroupImageResponse
   */
  async updateInstanceGroupImageWithOptions(request: UpdateInstanceGroupImageRequest, runtime: $Util.RuntimeOptions): Promise<UpdateInstanceGroupImageResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.imageId)) {
      body["ImageId"] = request.imageId;
    }

    if (!Util.isUnset(request.instanceGroupIds)) {
      body["InstanceGroupIds"] = request.instanceGroupIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateInstanceGroupImage",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateInstanceGroupImageResponse>(await this.callApi(params, req, runtime), new UpdateInstanceGroupImageResponse({}));
  }

  /**
   * @summary 实例组变更镜像
   *
   * @param request UpdateInstanceGroupImageRequest
   * @return UpdateInstanceGroupImageResponse
   */
  async updateInstanceGroupImage(request: UpdateInstanceGroupImageRequest): Promise<UpdateInstanceGroupImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateInstanceGroupImageWithOptions(request, runtime);
  }

  /**
   * @summary 安卓实例组扩容
   *
   * @param request UpgradeAndroidInstanceGroupRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpgradeAndroidInstanceGroupResponse
   */
  async upgradeAndroidInstanceGroupWithOptions(request: UpgradeAndroidInstanceGroupRequest, runtime: $Util.RuntimeOptions): Promise<UpgradeAndroidInstanceGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!Util.isUnset(request.increaseNumberOfInstance)) {
      query["IncreaseNumberOfInstance"] = request.increaseNumberOfInstance;
    }

    if (!Util.isUnset(request.instanceGroupId)) {
      query["InstanceGroupId"] = request.instanceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpgradeAndroidInstanceGroup",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpgradeAndroidInstanceGroupResponse>(await this.callApi(params, req, runtime), new UpgradeAndroidInstanceGroupResponse({}));
  }

  /**
   * @summary 安卓实例组扩容
   *
   * @param request UpgradeAndroidInstanceGroupRequest
   * @return UpgradeAndroidInstanceGroupResponse
   */
  async upgradeAndroidInstanceGroup(request: UpgradeAndroidInstanceGroupRequest): Promise<UpgradeAndroidInstanceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.upgradeAndroidInstanceGroupWithOptions(request, runtime);
  }

}
