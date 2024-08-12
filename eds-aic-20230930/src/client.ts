// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class DataImageRegionDistributeMapValue extends $tea.Model {
  /**
   * @example
   * AVAILABLE
   */
  distributeStatus?: string;
  /**
   * @example
   * 100%
   */
  progress?: string;
  static names(): { [key: string]: string } {
    return {
      distributeStatus: 'DistributeStatus',
      progress: 'Progress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      distributeStatus: 'string',
      progress: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachKeyPairRequest extends $tea.Model {
  instanceIds?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * kp-6v2q33ae4tw3a****
   */
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
  /**
   * @example
   * 69BCBBE4-FCF2-59B8-AD9D-531EB422****
   */
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
  /**
   * @example
   * test
   */
  authorizeUserId?: string;
  /**
   * @example
   * test
   */
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
  /**
   * @example
   * 1A923337-44D9-5CAD-9A53-95084BD4****
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
  /**
   * @remarks
   * This parameter is required.
   */
  androidInstanceIdList?: string[];
  /**
   * @remarks
   * This parameter is required.
   */
  backupFilePath?: string;
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  sourceFilePathList?: string[];
  /**
   * @example
   * oss-cn-shanghai-internal.aliyuncs.com
   */
  uploadEndpoint?: string;
  /**
   * @example
   * OSS
   */
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
  /**
   * @example
   * 6C8439B9-7DBF-57F4-92AE-55A9B9D3****
   */
  data?: string;
  /**
   * @example
   * 6C8439B9-7DBF-57F4-92AE-55A9B9D3****
   */
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
  /**
   * @example
   * acp.basic.small
   */
  acpSpecId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  gpuAcceleration?: boolean;
  /**
   * @example
   * cn-hangzhou-i
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      acpSpecId: 'AcpSpecId',
      bizRegionId: 'BizRegionId',
      gpuAcceleration: 'GpuAcceleration',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acpSpecId: 'string',
      bizRegionId: 'string',
      gpuAcceleration: 'boolean',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckResourceStockResponseBody extends $tea.Model {
  /**
   * @example
   * 805D8FB6-512A-531C-9E4D-2A807D3C****
   */
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

export class CreateAndroidInstanceGroupRequest extends $tea.Model {
  amount?: number;
  /**
   * @example
   * false
   */
  autoPay?: boolean;
  /**
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  /**
   * @example
   * PostPaid
   */
  chargeType?: string;
  gpuAcceleration?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * imgc-06zyt9m93zwax****
   */
  imageId?: string;
  instanceGroupName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * acp.basic.small
   */
  instanceGroupSpec?: string;
  /**
   * @example
   * 1
   */
  numberOfInstances?: number;
  /**
   * @example
   * cn-hangzhou+dir-745976****
   */
  officeSiteId?: string;
  /**
   * @example
   * 1
   */
  period?: number;
  /**
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pg-b7bxrrwxkijjh****
   */
  policyGroupId?: string;
  /**
   * @example
   * vsw-uf61uvzhz8ejaw776****
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      autoPay: 'AutoPay',
      autoRenew: 'AutoRenew',
      bizRegionId: 'BizRegionId',
      chargeType: 'ChargeType',
      gpuAcceleration: 'GpuAcceleration',
      imageId: 'ImageId',
      instanceGroupName: 'InstanceGroupName',
      instanceGroupSpec: 'InstanceGroupSpec',
      numberOfInstances: 'NumberOfInstances',
      officeSiteId: 'OfficeSiteId',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      policyGroupId: 'PolicyGroupId',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      autoPay: 'boolean',
      autoRenew: 'boolean',
      bizRegionId: 'string',
      chargeType: 'string',
      gpuAcceleration: 'boolean',
      imageId: 'string',
      instanceGroupName: 'string',
      instanceGroupSpec: 'string',
      numberOfInstances: 'number',
      officeSiteId: 'string',
      period: 'number',
      periodUnit: 'string',
      policyGroupId: 'string',
      vSwitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAndroidInstanceGroupResponseBody extends $tea.Model {
  instanceGroupIds?: string[];
  /**
   * @example
   * 22365781890****
   */
  orderId?: string;
  /**
   * @example
   * 1A923337-44D9-5CAD-9A53-95084BD4****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceGroupIds: 'InstanceGroupIds',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceGroupIds: { 'type': 'array', 'itemType': 'string' },
      orderId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAndroidInstanceGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAndroidInstanceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateAndroidInstanceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  appName?: string;
  bizRegionId?: string;
  description?: string;
  /**
   * @example
   * testApp.apk
   */
  fileName?: string;
  filePath?: string;
  /**
   * @example
   * https://test.png
   */
  iconUrl?: string;
  /**
   * @example
   * -d
   */
  installParam?: string;
  /**
   * @example
   * http://testApp.apk
   */
  ossAppUrl?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      bizRegionId: 'BizRegionId',
      description: 'Description',
      fileName: 'FileName',
      filePath: 'FilePath',
      iconUrl: 'IconUrl',
      installParam: 'InstallParam',
      ossAppUrl: 'OssAppUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      bizRegionId: 'string',
      description: 'string',
      fileName: 'string',
      filePath: 'string',
      iconUrl: 'string',
      installParam: 'string',
      ossAppUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppResponseBody extends $tea.Model {
  /**
   * @example
   * 1234
   */
  appId?: number;
  /**
   * @example
   * E5138F7E-46B5-526A-8C99-82DEAE6B****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAppResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomImageRequest extends $tea.Model {
  /**
   * @example
   * create for cc5g group auth rules test
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * custom image name
   */
  imageName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * acp-2zecay9ponatdc4m****
   */
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
  /**
   * @example
   * 20393E53-8FF1-524C-B494-B478A5369733
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testKeyPairName
   */
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
  /**
   * @example
   * 69BCBBE4-FCF2-59B8-AD9D-531EB422****
   */
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
  /**
   * @example
   * off
   */
  cameraRedirect?: string;
  /**
   * @example
   * readwrite
   */
  clipboard?: string;
  /**
   * @example
   * off
   */
  html5FileTransfer?: string;
  /**
   * @example
   * off
   */
  localDrive?: string;
  policyGroupName?: string;
  /**
   * @example
   * 1280
   */
  resolutionHeight?: number;
  /**
   * @example
   * 720
   */
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
  /**
   * @example
   * pg-exbuu6yrpvb******
   */
  policyGroupId?: string;
  /**
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC******
   */
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
  /**
   * @example
   * CB95E410-FD1D-53C5-9F7D-93CC44D7****
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
  /**
   * @example
   * 310A783E-CC46-5452-A8A3-71AE5DB5****
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
  /**
   * @remarks
   * This parameter is required.
   */
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
  /**
   * @remarks
   * This parameter is required.
   */
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
  /**
   * @example
   * 4610632D-D661-5982-B3D7-5D3FD183F595
   */
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
  /**
   * @example
   * 5C5CEF0A-D6E1-58D3-8750-67DB4F82****
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
  /**
   * @remarks
   * This parameter is required.
   */
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
  /**
   * @example
   * 17C731AB-AAEE-5844-A352-D8D0352D3F0B
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
  /**
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  /**
   * @example
   * PostPaid
   */
  chargeType?: string;
  instanceGroupIds?: string[];
  instanceGroupName?: string;
  /**
   * @example
   * kp-5htf0ymsrnb7q****
   */
  keyPairId?: string;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6l5V9uONHqPtDLM2U8s****
   */
  nextToken?: string;
  /**
   * @example
   * pg-1b77w6xrqfubi****
   */
  policyGroupId?: string;
  /**
   * @example
   * standard
   */
  saleMode?: string;
  /**
   * @example
   * CREATING
   */
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
  /**
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6l5V9uONHqPtDLM2U8s****
   */
  nextToken?: string;
  /**
   * @example
   * F07A1DA1-E1EB-5CCA-8EED-12F85D32****
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
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
  /**
   * @example
   * name
   */
  androidInstanceName?: string;
  /**
   * @example
   * ag-25nt4kk9whjh****
   */
  instanceGroupId?: string;
  /**
   * @example
   * kp-5hh431emkpuoi****
   */
  keyPairId?: string;
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6kw9dGL5jves2FS9RLq****
   */
  nextToken?: string;
  /**
   * @example
   * standard
   */
  saleMode?: string;
  /**
   * @example
   * RUNNING
   */
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
  /**
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6kmma/xxE9WtwL/ADvZ****
   */
  nextToken?: string;
  /**
   * @example
   * F07A1DA1-E1EB-5CCA-8EED-12F85D32****
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
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

export class DescribeAppsRequest extends $tea.Model {
  appIdList?: string[];
  appName?: string;
  bizRegionId?: string;
  /**
   * @example
   * INSTALLING
   */
  installationStatus?: string;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6kU+SQXzm0H9mu/FiSc****
   */
  nextToken?: string;
  /**
   * @example
   * NORMAL
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      appIdList: 'AppIdList',
      appName: 'AppName',
      bizRegionId: 'BizRegionId',
      installationStatus: 'InstallationStatus',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appIdList: { 'type': 'array', 'itemType': 'string' },
      appName: 'string',
      bizRegionId: 'string',
      installationStatus: 'string',
      maxResults: 'number',
      nextToken: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppsResponseBody extends $tea.Model {
  data?: DescribeAppsResponseBodyData[];
  /**
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6l5V9uON****
   */
  nextToken?: string;
  /**
   * @example
   * CB95E410-FD1D-53C5-9F7D-93CC44D7****
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  totalCount?: string;
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
      data: { 'type': 'array', 'itemType': DescribeAppsResponseBodyData },
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAppsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeAppsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupFilesRequest extends $tea.Model {
  /**
   * @example
   * acp-34pqe4r0kd9kn****
   */
  androidInstanceId?: string;
  /**
   * @example
   * acp-34pqe4r0kd9kn****
   */
  androidInstanceName?: string;
  /**
   * @example
   * bf-dxrh5jrv0zpb8****
   */
  backupFileId?: string;
  backupFileName?: string;
  description?: string;
  /**
   * @example
   * 2024-05-20 10:00:00
   */
  endTime?: string;
  /**
   * @example
   * test1
   */
  endUserId?: string;
  /**
   * @example
   * ag-fxdx91jsfyiy3****
   */
  instanceGroupId?: string;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6l5V9uON****
   */
  nextToken?: string;
  /**
   * @example
   * 2024-05-23 10:00:00
   */
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
  /**
   * @example
   * 10
   */
  maxResults?: string;
  /**
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6l5V9uON****
   */
  nextToken?: string;
  /**
   * @example
   * 425F351C-3F8E-5218-A520-B6311D0D****
   */
  requestId?: string;
  /**
   * @example
   * 91
   */
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

export class DescribeImageListRequest extends $tea.Model {
  /**
   * @example
   * imgc-075cllfeuazh0****
   */
  imageId?: string;
  imageName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * System
   */
  imageType?: string;
  /**
   * @example
   * 20
   * 
   * **if can be null:**
   * true
   */
  maxResults?: number;
  /**
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6kw9dGL5jves2FS9RLq****
   */
  nextToken?: string;
  /**
   * @example
   * AVAILABLE
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      imageName: 'ImageName',
      imageType: 'ImageType',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      imageName: 'string',
      imageType: 'string',
      maxResults: 'number',
      nextToken: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageListResponseBody extends $tea.Model {
  data?: DescribeImageListResponseBodyData[];
  /**
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6l5V9uON****
   */
  nextToken?: string;
  /**
   * @example
   * 620740FF-492F-5956-B1BA-361E966C0269
   */
  requestId?: string;
  /**
   * @example
   * 30
   */
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
      data: { 'type': 'array', 'itemType': DescribeImageListResponseBodyData },
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeImageListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeImageListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvocationsRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * t-4e98eeb5****
   */
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
  /**
   * @example
   * 440D7342-5E7C-B2DB-D0B4EAC2BDF1****
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
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
  /**
   * @example
   * testKeyPairName
   */
  keyPairName?: string;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * AAAAAYRHtOLVQzCYj17y+OP7LZQBUVVbi0GTu8g5****
   */
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
  /**
   * @example
   * FFbc8N4E1iOlcSxC+8boa0HHH2LKWbggYUinyrZWvtS1oTrMYCg1HuMLGuftj0****
   */
  nextToken?: string;
  /**
   * @example
   * 565FB06A-AE04-5AD0-8A32-5BA92CA5****
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
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
  /**
   * @example
   * A87B3769-0D05-5383-B236-5798B455****
   */
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
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6l5V9uONHqPtDLM2U8s****
   */
  nextToken?: string;
  specIds?: string[];
  /**
   * @example
   * Available
   */
  specStatus?: string;
  /**
   * @example
   * ARM
   */
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
  /**
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6kw9dGL5jves2FS9RLq****
   */
  nextToken?: string;
  /**
   * @example
   * D9888DAD-331E-5FBC-B5A0-F2445115****
   */
  requestId?: string;
  specInfoModel?: DescribeSpecResponseBodySpecInfoModel[];
  /**
   * @example
   * 4
   */
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

export class DescribeTasksRequest extends $tea.Model {
  /**
   * @example
   * B8ED2BA9-0C6A-5643-818F-B5D60A64****
   */
  invokeId?: string;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * FFbc8N4E1iOlcSxC+8boa0HHH2LKWbggYUinyrZWvtS1oTrMYCg1HuMLGuftj0****
   */
  nextToken?: string;
  resourceIds?: string[];
  taskIds?: string[];
  /**
   * @example
   * Processing
   */
  taskStatus?: string;
  /**
   * @example
   * StartInstance
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      invokeId: 'InvokeId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      resourceIds: 'ResourceIds',
      taskIds: 'TaskIds',
      taskStatus: 'TaskStatus',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invokeId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      resourceIds: { 'type': 'array', 'itemType': 'string' },
      taskIds: { 'type': 'array', 'itemType': 'string' },
      taskStatus: 'string',
      taskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTasksResponseBody extends $tea.Model {
  data?: DescribeTasksResponseBodyData[];
  /**
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6kU+SQXzm0H9mu/FiSc****
   */
  nextToken?: string;
  /**
   * @example
   * B8ED2BA9-0C6A-5643-818F-B5D60A64****
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
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
      data: { 'type': 'array', 'itemType': DescribeTasksResponseBodyData },
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTasksResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeTasksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachKeyPairRequest extends $tea.Model {
  instanceIds?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * kp-6v2q33ae4tw3a****
   */
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
  /**
   * @example
   * 69BCBBE4-FCF2-59B8-AD9D-531EB422****
   */
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
  /**
   * @remarks
   * This parameter is required.
   */
  distributeRegionList?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * imgc-075cllfeuazh0****
   */
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
  /**
   * @example
   * 440D7342-5FC2-5E7C-B2DB-D0B4EAC2BDF1
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
  /**
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ag-cuv4scs4obxhs****
   */
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
  /**
   * @example
   * 22326560487****
   */
  orderId?: string;
  /**
   * @example
   * 3AF82CE1-2801-52CE-BF64-B491DD7C****
   */
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
  /**
   * @remarks
   * This parameter is required.
   */
  androidInstanceIdList?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * /data/a.txt
   */
  sourceFilePath?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * oss-cn-hangzhou.aliyuncs.com
   */
  uploadEndpoint?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * OSS
   */
  uploadType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
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
  /**
   * @example
   * 425F351C-3F8E-5218-A520-B6311D0D****
   */
  data?: string;
  /**
   * @example
   * 425F351C-3F8E-5218-A520-B6311D0D****
   */
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
  /**
   * @example
   * 1A923337-44D9-5CAD-9A53-95084BD4****
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * TestKeyPairName
   */
  keyPairName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ABC1234567*****
   */
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
  /**
   * @example
   * 69BCBBE4-FCF2-59B8-AD9D-531EB422****
   */
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
  /**
   * @example
   * E5138F7E-46B5-526A-8C99-82DEAE6B****
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
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6kU+SQXzm0H9mu/FiSc****
   */
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
  /**
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6l5V9uON****
   */
  nextToken?: string;
  policyGroupModel?: ListPolicyGroupsResponseBodyPolicyGroupModel[];
  /**
   * @example
   * 7B9EFA4F-4305-5968-BAEE-BD8B8DE5****
   */
  requestId?: string;
  /**
   * @example
   * 31
   */
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
  /**
   * @example
   * acp-8v5bjld0r7tkl****
   */
  androidInstanceId?: string;
  /**
   * @example
   * new_name
   */
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
  /**
   * @example
   * E5138F7E-46B5-526A-8C99-82DEAE6B****
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
  /**
   * @example
   * ag-cuv4scs4obxhs****
   */
  instanceGroupId?: string;
  /**
   * @example
   * newName
   */
  newInstanceGroupName?: string;
  /**
   * @example
   * pg-2w97kp89gnsif****
   */
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
  /**
   * @example
   * 6C83EBE3-F267-5F11-ABF8-4E7B90B****
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
  /**
   * @example
   * 1234
   */
  appId?: number;
  appName?: string;
  description?: string;
  /**
   * @example
   * https://defaultIcon.png
   */
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
  /**
   * @example
   * 83418504-5A82-5896-A24C-B2D468F0****
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * kp-6v2q33ae4tw3a****
   */
  keyPairId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * newKeyPairName
   */
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
  /**
   * @example
   * 69BCBBE4-FCF2-59B8-AD9D-531EB422****
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
  /**
   * @example
   * off
   */
  cameraRedirect?: string;
  /**
   * @example
   * readwrite
   */
  clipboard?: string;
  /**
   * @example
   * off
   */
  html5FileTransfer?: string;
  /**
   * @example
   * off
   */
  localDrive?: string;
  /**
   * @example
   * pg-4bi18ebi9tfjh****
   */
  policyGroupId?: string;
  policyGroupName?: string;
  /**
   * @example
   * 1280
   */
  resolutionHeight?: number;
  /**
   * @example
   * 720
   */
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
  /**
   * @example
   * 552B7EED-D434-511F-B838-29EA4E906034
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

export class RebootAndroidInstancesInGroupRequest extends $tea.Model {
  androidInstanceIds?: string[];
  forceStop?: boolean;
  static names(): { [key: string]: string } {
    return {
      androidInstanceIds: 'AndroidInstanceIds',
      forceStop: 'ForceStop',
    };
  }

  static types(): { [key: string]: any } {
    return {
      androidInstanceIds: { 'type': 'array', 'itemType': 'string' },
      forceStop: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RebootAndroidInstancesInGroupResponseBody extends $tea.Model {
  /**
   * @example
   * 227CBB4C-F5DC-589D-A667-C5CA3D52****
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

export class RebootAndroidInstancesInGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RebootAndroidInstancesInGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RebootAndroidInstancesInGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecoveryFileRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  androidInstanceIdList?: string[];
  /**
   * @example
   * bf-azhps4rdyi2th****
   */
  backupFileId?: string;
  backupFilePath?: string;
  /**
   * @example
   * oss-cn-hangzhou-internal.aliyuncs.com
   */
  uploadEndpoint?: string;
  /**
   * @example
   * OSS
   */
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
  /**
   * @example
   * 6AD56E39-430B-5401-AB4A-7B086454****
   */
  data?: string;
  /**
   * @example
   * 6AD56E39-430B-5401-AB4A-7B086454****
   */
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
  /**
   * @example
   * true
   */
  autoPay?: boolean;
  instanceGroupIds?: string[];
  /**
   * @example
   * 6
   */
  period?: number;
  /**
   * @example
   * Month
   */
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
  /**
   * @example
   * 22326560487****
   */
  orderId?: string;
  /**
   * @example
   * 4B886792-2051-5DB4-8AE6-C8E45D3B4****
   */
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
  /**
   * @example
   * 69BCBBE4-FCF2-59B8-AD9D-531EB422****
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
  /**
   * @example
   * ls
   */
  commandContent?: string;
  instanceIds?: string[];
  /**
   * @example
   * 60
   */
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
  /**
   * @example
   * t-gov2ujrk32v4****
   */
  invokeId?: string;
  /**
   * @example
   * 440D7342-5E7C-B2DB-D0B4EAC2BDF1****
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
   */
  androidInstanceIdList?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * /data
   */
  sourceFilePath?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * oss-cn-hangzhou.aliyuncs.com
   */
  uploadEndpoint?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * OSS
   */
  uploadType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
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
  /**
   * @example
   * 425F351C-3F8E-5218-A520-B6311D0D****
   */
  data?: string;
  /**
   * @example
   * 425F351C-3F8E-5218-A520-B6311D0D****
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
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
  /**
   * @example
   * 69BCBBE4-FCF2-59B8-AD9D-531EB422****
   */
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
  /**
   * @example
   * 17C731AB-AAEE-5844-A352-D8D0352D****
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

export class StopAndroidInstanceRequest extends $tea.Model {
  androidInstanceIds?: string[];
  forceStop?: boolean;
  static names(): { [key: string]: string } {
    return {
      androidInstanceIds: 'AndroidInstanceIds',
      forceStop: 'ForceStop',
    };
  }

  static types(): { [key: string]: any } {
    return {
      androidInstanceIds: { 'type': 'array', 'itemType': 'string' },
      forceStop: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopAndroidInstanceResponseBody extends $tea.Model {
  /**
   * @example
   * E38B41A8-8E00-5AE4-A957-6636ACB8****
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

export class StopAndroidInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopAndroidInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StopAndroidInstanceResponseBody,
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
  /**
   * @example
   * E5138F7E-46B5-526A-8C99-82DEAE6B****
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
  /**
   * @example
   * imgc-075cllfeuazh0****
   */
  imageId?: string;
  /**
   * @example
   * imagename
   */
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
  /**
   * @example
   * 552B7EED-D434-511F-B838-29EA4E906034
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * imgc-075cllfeuazh****
   */
  imageId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
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
  /**
   * @example
   * 55726272-E40B-530D-914F-5126B19C79B3
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
  /**
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @example
   * 10
   */
  increaseNumberOfInstance?: number;
  /**
   * @example
   * ag-asguicdjh****
   */
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
  instanceIds?: string;
  /**
   * @example
   * 223684716098****
   */
  orderId?: string;
  /**
   * @example
   * 310A783E-CC46-5452-A8A3-71AE5DB59****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: 'string',
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
  /**
   * @example
   * 0
   */
  failCount?: number;
  /**
   * @example
   * kp-6v2q33ae4tw3a****
   */
  keyPairId?: string;
  /**
   * @example
   * 100
   */
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
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * Available
   */
  stockStatus?: string;
  /**
   * @example
   * cn-shanghai-b
   */
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
  /**
   * @example
   * 2024-06-30 08:45:09.0
   */
  gmtCreated?: string;
  /**
   * @example
   * kp-6v2q33ae4tw3*****
   */
  keyPairId?: string;
  /**
   * @example
   * testKeyPairName
   */
  keyPairName?: string;
  /**
   * @example
   * MIIEpAIBAAKCAQEAtReyMzLIcBH78EV2zj****
   */
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
  /**
   * @example
   * 32
   */
  diskSize?: number;
  /**
   * @example
   * SYSTEM
   */
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
  /**
   * @example
   * aig-48xr63m4dybjk****
   */
  appInstanceGroupId?: string;
  /**
   * @example
   * ARM
   */
  architectureType?: string;
  /**
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @example
   * 8
   */
  cpu?: string;
  disks?: DescribeAndroidInstanceGroupsResponseBodyInstanceGroupModelDisks[];
  errorCode?: string;
  /**
   * @example
   * 2024-02-01 10:56:36
   */
  gmtCreate?: string;
  /**
   * @example
   * 2027-06-29 07:25:31
   */
  gmtExpired?: string;
  /**
   * @example
   * 2024-02-01 10:56:36
   */
  gmtModified?: string;
  /**
   * @example
   * imgc-06zyt9m93zwax****
   */
  imageId?: string;
  installedAppList?: string;
  /**
   * @example
   * ag-h67a2cs0zprfdh****
   */
  instanceGroupId?: string;
  instanceGroupName?: string;
  /**
   * @example
   * acp.basic.small
   */
  instanceGroupSpec?: string;
  /**
   * @example
   * ARM-2vCPU4GiB 32GiB
   */
  instanceGroupSpecDescribe?: string;
  /**
   * @example
   * RUNNING
   */
  instanceGroupStatus?: string;
  /**
   * @example
   * 8
   */
  memory?: number;
  /**
   * @example
   * 10
   */
  numberOfInstances?: string;
  /**
   * @example
   * cn-shanghai+dir-030598****
   */
  officeSiteId?: string;
  /**
   * @example
   * pg-c6n38xucps8kl****
   */
  policyGroupId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  renderingType?: string;
  /**
   * @example
   * 1280
   */
  resolutionHeight?: number;
  /**
   * @example
   * 720
   */
  resolutionWidth?: number;
  /**
   * @example
   * standard
   */
  saleMode?: string;
  /**
   * @example
   * Android 12
   */
  systemVersion?: string;
  /**
   * @example
   * vsw-t4n0yqs009ho024wt****
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      appInstanceGroupId: 'AppInstanceGroupId',
      architectureType: 'ArchitectureType',
      chargeType: 'ChargeType',
      cpu: 'Cpu',
      disks: 'Disks',
      errorCode: 'ErrorCode',
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
      renderingType: 'RenderingType',
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
      errorCode: 'string',
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
      renderingType: 'string',
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
  /**
   * @example
   * ag-ayyhomlal7po****
   */
  androidInstanceGroupId?: string;
  /**
   * @example
   * acp-8at8h6ejkadjh****
   */
  androidInstanceId?: string;
  /**
   * @example
   * name
   */
  androidInstanceName?: string;
  /**
   * @example
   * RUNNING
   */
  androidInstanceStatus?: string;
  /**
   * @example
   * aig-i7yv6tkn7kh8dv****
   */
  appInstanceGroupId?: string;
  /**
   * @example
   * ai-9ey6io0q58rcd****
   */
  appInstanceId?: string;
  /**
   * @example
   * test
   */
  authorizedUserId?: string;
  /**
   * @example
   * test
   */
  bindUserId?: string;
  /**
   * @example
   * FilePathNotFound
   */
  errorCode?: string;
  /**
   * @example
   * 2023-05-06 10:42:10
   */
  gmtCreate?: string;
  /**
   * @example
   * 2023-05-06 10:42:10
   */
  gmtModified?: string;
  /**
   * @example
   * kp-5hh431emkpucs****
   */
  keyPairId?: string;
  /**
   * @example
   * 192.168.22.48
   */
  networkInterfaceIp?: string;
  /**
   * @example
   * p-0btrd5zj8epo****
   */
  persistentAppInstanceId?: string;
  /**
   * @example
   * 100
   */
  rate?: number;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  renderingType?: string;
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
      renderingType: 'RenderingType',
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
      renderingType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppsResponseBodyData extends $tea.Model {
  /**
   * @example
   * 1.0.0
   */
  androidAppVersion?: string;
  /**
   * @example
   * 10404
   */
  appId?: number;
  /**
   * @example
   * testapp
   */
  appName?: string;
  bizRegionId?: string;
  description?: string;
  /**
   * @example
   * 2022-08-11 17:45:03
   */
  gmtCreate?: string;
  /**
   * @example
   * 2022-08-11 17:45:03
   */
  gmtModified?: string;
  /**
   * @example
   * https://test.png
   */
  iconUrl?: string;
  /**
   * @example
   * INSTALLING
   */
  installationStatus?: string;
  instanceGroupList?: string[];
  /**
   * @example
   * NORMAL
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      androidAppVersion: 'AndroidAppVersion',
      appId: 'AppId',
      appName: 'AppName',
      bizRegionId: 'BizRegionId',
      description: 'Description',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      iconUrl: 'IconUrl',
      installationStatus: 'InstallationStatus',
      instanceGroupList: 'InstanceGroupList',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      androidAppVersion: 'string',
      appId: 'number',
      appName: 'string',
      bizRegionId: 'string',
      description: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      iconUrl: 'string',
      installationStatus: 'string',
      instanceGroupList: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupFilesResponseBodyData extends $tea.Model {
  /**
   * @example
   * acp-34pqe4r0kd9kn****
   */
  androidInstanceId?: string;
  androidInstanceName?: string;
  /**
   * @example
   * bf-b0qbg3pbpjkn7****
   */
  backupFileId?: string;
  /**
   * @example
   * a-58ftsoo90p0qa****.ab
   */
  backupFileName?: string;
  /**
   * @example
   * oss://cloudphone-saved-bucket-cn-shanghai/backup/aic-58ftsoo90p0qa****.ab
   */
  backupFilePath?: string;
  description?: string;
  /**
   * @example
   * test
   */
  endUserId?: string;
  /**
   * @example
   * 10227168
   */
  fileSize?: number;
  /**
   * @example
   * 2024-05-15 17:33:59
   */
  gmtCreated?: string;
  /**
   * @example
   * 2024-05-15 17:33:59
   */
  gmtModified?: string;
  /**
   * @example
   * ag-58ftsoo90p0qi****
   */
  instanceGroupId?: string;
  sourceFilePathList?: string[];
  /**
   * @example
   * AVAILABLE
   */
  status?: string;
  /**
   * @example
   * oss-cn-hangzhou.aliyuncs.com
   */
  uploadEndpoint?: string;
  /**
   * @example
   * OSS
   */
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

export class DescribeImageListResponseBodyData extends $tea.Model {
  /**
   * @example
   * 117819727354****
   */
  aliUid?: number;
  /**
   * @example
   * description
   */
  description?: string;
  /**
   * @example
   * 2024-02-01 10:56:36
   */
  gmtCreate?: string;
  /**
   * @example
   * 2024-02-01 10:56:36
   */
  gmtModified?: string;
  /**
   * @example
   * imgc-075cllfeuazh****
   */
  imageId?: string;
  /**
   * @example
   * IMAGE
   */
  imageName?: string;
  imageRegionDistributeMap?: { [key: string]: DataImageRegionDistributeMapValue };
  imageRegionList?: string[];
  /**
   * @example
   * System
   */
  imageType?: string;
  /**
   * @example
   * zh
   */
  language?: string;
  releaseTime?: string;
  renderingType?: string;
  /**
   * @example
   * AVAILABLE
   */
  status?: string;
  /**
   * @example
   * Android 12
   */
  systemType?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      description: 'Description',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      imageId: 'ImageId',
      imageName: 'ImageName',
      imageRegionDistributeMap: 'ImageRegionDistributeMap',
      imageRegionList: 'ImageRegionList',
      imageType: 'ImageType',
      language: 'Language',
      releaseTime: 'ReleaseTime',
      renderingType: 'RenderingType',
      status: 'Status',
      systemType: 'SystemType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      description: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      imageId: 'string',
      imageName: 'string',
      imageRegionDistributeMap: { 'type': 'map', 'keyType': 'string', 'valueType': DataImageRegionDistributeMapValue },
      imageRegionList: { 'type': 'array', 'itemType': 'string' },
      imageType: 'string',
      language: 'string',
      releaseTime: 'string',
      renderingType: 'string',
      status: 'string',
      systemType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvocationsResponseBodyData extends $tea.Model {
  /**
   * @example
   * 2022-08-11 17:45:03
   */
  finishTime?: string;
  /**
   * @example
   * acp-uto81vfd8t8z****
   */
  instanceId?: string;
  /**
   * @example
   * t-15775dc8****
   */
  invocationId?: string;
  /**
   * @example
   * RUNNING
   */
  invocationStatus?: string;
  /**
   * @example
   * success
   */
  output?: string;
  /**
   * @example
   * 2022-08-11 17:45:03
   */
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
  /**
   * @example
   * 2022-10-11T08:53:32Z
   */
  gmtCreated?: string;
  /**
   * @example
   * kp-6v2q33ae4tw3*****
   */
  keyPairId?: string;
  /**
   * @example
   * testKeyPairName
   */
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
  /**
   * @example
   * cn-hangzhou
   */
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
  /**
   * @example
   * 8
   */
  core?: number;
  /**
   * @example
   * 16
   */
  memory?: number;
  /**
   * @example
   * acp.basic.small
   */
  specId?: string;
  /**
   * @example
   * Available
   */
  specStatus?: string;
  /**
   * @example
   * ARM
   */
  specType?: string;
  /**
   * @example
   * 32
   */
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

export class DescribeTasksResponseBodyData extends $tea.Model {
  /**
   * @example
   * 2022-10-11T08:53:32Z
   */
  finishTime?: string;
  /**
   * @example
   * B8ED2BA9-0C6A-5643-818F-B5D60A64****
   */
  invokeId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * acp-25nt4kk9whhok****
   */
  resourceId?: string;
  /**
   * @example
   * 2022-10-11T08:53:32Z
   */
  startTime?: string;
  /**
   * @example
   * t-bp67acfmxazb4p****
   */
  taskId?: string;
  /**
   * @example
   * Processing
   */
  taskStatus?: string;
  /**
   * @example
   * StartInstance
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      finishTime: 'FinishTime',
      invokeId: 'InvokeId',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      startTime: 'StartTime',
      taskId: 'TaskId',
      taskStatus: 'TaskStatus',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      finishTime: 'string',
      invokeId: 'string',
      regionId: 'string',
      resourceId: 'string',
      startTime: 'string',
      taskId: 'string',
      taskStatus: 'string',
      taskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachKeyPairResponseBodyData extends $tea.Model {
  detachedInstanceIds?: string[];
  /**
   * @example
   * 0
   */
  failCount?: number;
  /**
   * @example
   * kp-6v2q33ae4tw3a****
   */
  keyPairId?: string;
  /**
   * @example
   * 10
   */
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
  /**
   * @example
   * acp-5hh431emkt6u*****
   */
  instanceId?: string;
  /**
   * @example
   * 1
   */
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
  /**
   * @example
   * 2023-03-05T10:29:22Z
   */
  gmtCreated?: string;
  /**
   * @example
   * kp-6v2q33ae4tw3*****
   */
  keyPairId?: string;
  /**
   * @example
   * TestKeyPairName
   */
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
  /**
   * @example
   * on
   */
  cameraRedirect?: string;
  /**
   * @example
   * readwrite
   */
  clipboard?: string;
  /**
   * @example
   * 2024-06-04 10:28:54
   */
  gmtCreate?: string;
  /**
   * @example
   * download
   */
  html5FileTransfer?: string;
  /**
   * @example
   * off
   */
  localDrive?: string;
  /**
   * @example
   * pg-9q6o8qpiy8opkj****
   */
  policyGroupId?: string;
  policyGroupName?: string;
  /**
   * @example
   * 1080
   */
  sessionResolutionHeight?: string;
  /**
   * @example
   * 1920
   */
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
  /**
   * @example
   * 0
   */
  failCount?: number;
  instanceIds?: string[];
  /**
   * @example
   * 100
   */
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
   * 绑定密钥对
   * 
   * @param request - AttachKeyPairRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AttachKeyPairResponse
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
   * 绑定密钥对
   * 
   * @param request - AttachKeyPairRequest
   * @returns AttachKeyPairResponse
   */
  async attachKeyPair(request: AttachKeyPairRequest): Promise<AttachKeyPairResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.attachKeyPairWithOptions(request, runtime);
  }

  /**
   * 为用户授权/解授权安卓实例
   * 
   * @param request - AuthorizeAndroidInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AuthorizeAndroidInstanceResponse
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
   * 为用户授权/解授权安卓实例
   * 
   * @param request - AuthorizeAndroidInstanceRequest
   * @returns AuthorizeAndroidInstanceResponse
   */
  async authorizeAndroidInstance(request: AuthorizeAndroidInstanceRequest): Promise<AuthorizeAndroidInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.authorizeAndroidInstanceWithOptions(request, runtime);
  }

  /**
   * @param request - BackupFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BackupFileResponse
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
   * @param request - BackupFileRequest
   * @returns BackupFileResponse
   */
  async backupFile(request: BackupFileRequest): Promise<BackupFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.backupFileWithOptions(request, runtime);
  }

  /**
   * 检查资源库存
   * 
   * @param request - CheckResourceStockRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckResourceStockResponse
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

    if (!Util.isUnset(request.gpuAcceleration)) {
      query["GpuAcceleration"] = request.gpuAcceleration;
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
   * 检查资源库存
   * 
   * @param request - CheckResourceStockRequest
   * @returns CheckResourceStockResponse
   */
  async checkResourceStock(request: CheckResourceStockRequest): Promise<CheckResourceStockResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkResourceStockWithOptions(request, runtime);
  }

  /**
   * 创建安卓实例组
   * 
   * @param request - CreateAndroidInstanceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAndroidInstanceGroupResponse
   */
  async createAndroidInstanceGroupWithOptions(request: CreateAndroidInstanceGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateAndroidInstanceGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.amount)) {
      query["Amount"] = request.amount;
    }

    if (!Util.isUnset(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!Util.isUnset(request.autoRenew)) {
      query["AutoRenew"] = request.autoRenew;
    }

    if (!Util.isUnset(request.bizRegionId)) {
      query["BizRegionId"] = request.bizRegionId;
    }

    if (!Util.isUnset(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
    }

    if (!Util.isUnset(request.gpuAcceleration)) {
      query["GpuAcceleration"] = request.gpuAcceleration;
    }

    if (!Util.isUnset(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!Util.isUnset(request.instanceGroupName)) {
      query["InstanceGroupName"] = request.instanceGroupName;
    }

    if (!Util.isUnset(request.instanceGroupSpec)) {
      query["InstanceGroupSpec"] = request.instanceGroupSpec;
    }

    if (!Util.isUnset(request.numberOfInstances)) {
      query["NumberOfInstances"] = request.numberOfInstances;
    }

    if (!Util.isUnset(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.periodUnit)) {
      query["PeriodUnit"] = request.periodUnit;
    }

    if (!Util.isUnset(request.policyGroupId)) {
      query["PolicyGroupId"] = request.policyGroupId;
    }

    if (!Util.isUnset(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateAndroidInstanceGroup",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAndroidInstanceGroupResponse>(await this.callApi(params, req, runtime), new CreateAndroidInstanceGroupResponse({}));
  }

  /**
   * 创建安卓实例组
   * 
   * @param request - CreateAndroidInstanceGroupRequest
   * @returns CreateAndroidInstanceGroupResponse
   */
  async createAndroidInstanceGroup(request: CreateAndroidInstanceGroupRequest): Promise<CreateAndroidInstanceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAndroidInstanceGroupWithOptions(request, runtime);
  }

  /**
   * @param request - CreateAppRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAppResponse
   */
  async createAppWithOptions(request: CreateAppRequest, runtime: $Util.RuntimeOptions): Promise<CreateAppResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!Util.isUnset(request.bizRegionId)) {
      query["BizRegionId"] = request.bizRegionId;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!Util.isUnset(request.filePath)) {
      query["FilePath"] = request.filePath;
    }

    if (!Util.isUnset(request.iconUrl)) {
      query["IconUrl"] = request.iconUrl;
    }

    if (!Util.isUnset(request.installParam)) {
      query["InstallParam"] = request.installParam;
    }

    if (!Util.isUnset(request.ossAppUrl)) {
      query["OssAppUrl"] = request.ossAppUrl;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateApp",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAppResponse>(await this.callApi(params, req, runtime), new CreateAppResponse({}));
  }

  /**
   * @param request - CreateAppRequest
   * @returns CreateAppResponse
   */
  async createApp(request: CreateAppRequest): Promise<CreateAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAppWithOptions(request, runtime);
  }

  /**
   * 创建自定义镜像
   * 
   * @param request - CreateCustomImageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCustomImageResponse
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
   * 创建自定义镜像
   * 
   * @param request - CreateCustomImageRequest
   * @returns CreateCustomImageResponse
   */
  async createCustomImage(request: CreateCustomImageRequest): Promise<CreateCustomImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCustomImageWithOptions(request, runtime);
  }

  /**
   * 创建密钥对
   * 
   * @param request - CreateKeyPairRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateKeyPairResponse
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
   * 创建密钥对
   * 
   * @param request - CreateKeyPairRequest
   * @returns CreateKeyPairResponse
   */
  async createKeyPair(request: CreateKeyPairRequest): Promise<CreateKeyPairResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createKeyPairWithOptions(request, runtime);
  }

  /**
   * 创建策略
   * 
   * @param request - CreatePolicyGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePolicyGroupResponse
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
   * 创建策略
   * 
   * @param request - CreatePolicyGroupRequest
   * @returns CreatePolicyGroupResponse
   */
  async createPolicyGroup(request: CreatePolicyGroupRequest): Promise<CreatePolicyGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createPolicyGroupWithOptions(request, runtime);
  }

  /**
   * 删除安卓实例组
   * 
   * @param request - DeleteAndroidInstanceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAndroidInstanceGroupResponse
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
   * 删除安卓实例组
   * 
   * @param request - DeleteAndroidInstanceGroupRequest
   * @returns DeleteAndroidInstanceGroupResponse
   */
  async deleteAndroidInstanceGroup(request: DeleteAndroidInstanceGroupRequest): Promise<DeleteAndroidInstanceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAndroidInstanceGroupWithOptions(request, runtime);
  }

  /**
   * 删除app
   * 
   * @param request - DeleteAppsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAppsResponse
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
   * 删除app
   * 
   * @param request - DeleteAppsRequest
   * @returns DeleteAppsResponse
   */
  async deleteApps(request: DeleteAppsRequest): Promise<DeleteAppsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAppsWithOptions(request, runtime);
  }

  /**
   * @param tmpReq - DeleteImagesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteImagesResponse
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
   * @param request - DeleteImagesRequest
   * @returns DeleteImagesResponse
   */
  async deleteImages(request: DeleteImagesRequest): Promise<DeleteImagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteImagesWithOptions(request, runtime);
  }

  /**
   * 删除密钥对
   * 
   * @param request - DeleteKeyPairsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteKeyPairsResponse
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
   * 删除密钥对
   * 
   * @param request - DeleteKeyPairsRequest
   * @returns DeleteKeyPairsResponse
   */
  async deleteKeyPairs(request: DeleteKeyPairsRequest): Promise<DeleteKeyPairsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteKeyPairsWithOptions(request, runtime);
  }

  /**
   * 删除策略
   * 
   * @param request - DeletePolicyGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePolicyGroupResponse
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
   * 删除策略
   * 
   * @param request - DeletePolicyGroupRequest
   * @returns DeletePolicyGroupResponse
   */
  async deletePolicyGroup(request: DeletePolicyGroupRequest): Promise<DeletePolicyGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deletePolicyGroupWithOptions(request, runtime);
  }

  /**
   * 查询实例组
   * 
   * @param request - DescribeAndroidInstanceGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAndroidInstanceGroupsResponse
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
   * 查询实例组
   * 
   * @param request - DescribeAndroidInstanceGroupsRequest
   * @returns DescribeAndroidInstanceGroupsResponse
   */
  async describeAndroidInstanceGroups(request: DescribeAndroidInstanceGroupsRequest): Promise<DescribeAndroidInstanceGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAndroidInstanceGroupsWithOptions(request, runtime);
  }

  /**
   * 查询安卓实例列表
   * 
   * @param request - DescribeAndroidInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAndroidInstancesResponse
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
   * 查询安卓实例列表
   * 
   * @param request - DescribeAndroidInstancesRequest
   * @returns DescribeAndroidInstancesResponse
   */
  async describeAndroidInstances(request: DescribeAndroidInstancesRequest): Promise<DescribeAndroidInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAndroidInstancesWithOptions(request, runtime);
  }

  /**
   * 查询app
   * 
   * @param request - DescribeAppsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAppsResponse
   */
  async describeAppsWithOptions(request: DescribeAppsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAppsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appIdList)) {
      query["AppIdList"] = request.appIdList;
    }

    if (!Util.isUnset(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!Util.isUnset(request.bizRegionId)) {
      query["BizRegionId"] = request.bizRegionId;
    }

    if (!Util.isUnset(request.installationStatus)) {
      query["InstallationStatus"] = request.installationStatus;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeApps",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAppsResponse>(await this.callApi(params, req, runtime), new DescribeAppsResponse({}));
  }

  /**
   * 查询app
   * 
   * @param request - DescribeAppsRequest
   * @returns DescribeAppsResponse
   */
  async describeApps(request: DescribeAppsRequest): Promise<DescribeAppsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAppsWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeBackupFilesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBackupFilesResponse
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
   * @param request - DescribeBackupFilesRequest
   * @returns DescribeBackupFilesResponse
   */
  async describeBackupFiles(request: DescribeBackupFilesRequest): Promise<DescribeBackupFilesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBackupFilesWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeImageListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeImageListResponse
   */
  async describeImageListWithOptions(request: DescribeImageListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeImageListResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.imageId)) {
      body["ImageId"] = request.imageId;
    }

    if (!Util.isUnset(request.imageName)) {
      body["ImageName"] = request.imageName;
    }

    if (!Util.isUnset(request.imageType)) {
      body["ImageType"] = request.imageType;
    }

    if (!Util.isUnset(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.status)) {
      body["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeImageList",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeImageListResponse>(await this.callApi(params, req, runtime), new DescribeImageListResponse({}));
  }

  /**
   * @param request - DescribeImageListRequest
   * @returns DescribeImageListResponse
   */
  async describeImageList(request: DescribeImageListRequest): Promise<DescribeImageListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeImageListWithOptions(request, runtime);
  }

  /**
   * 查询命令结果
   * 
   * @param request - DescribeInvocationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInvocationsResponse
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
   * 查询命令结果
   * 
   * @param request - DescribeInvocationsRequest
   * @returns DescribeInvocationsResponse
   */
  async describeInvocations(request: DescribeInvocationsRequest): Promise<DescribeInvocationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInvocationsWithOptions(request, runtime);
  }

  /**
   * 查询密钥对
   * 
   * @param request - DescribeKeyPairsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeKeyPairsResponse
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
   * 查询密钥对
   * 
   * @param request - DescribeKeyPairsRequest
   * @returns DescribeKeyPairsResponse
   */
  async describeKeyPairs(request: DescribeKeyPairsRequest): Promise<DescribeKeyPairsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeKeyPairsWithOptions(request, runtime);
  }

  /**
   * 查询地域
   * 
   * @param request - DescribeRegionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRegionsResponse
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
   * 查询地域
   * @returns DescribeRegionsResponse
   */
  async describeRegions(): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(runtime);
  }

  /**
   * 查询规格
   * 
   * @param request - DescribeSpecRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSpecResponse
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
   * 查询规格
   * 
   * @param request - DescribeSpecRequest
   * @returns DescribeSpecResponse
   */
  async describeSpec(request: DescribeSpecRequest): Promise<DescribeSpecResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSpecWithOptions(request, runtime);
  }

  /**
   * 查询异步任务
   * 
   * @param request - DescribeTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTasksResponse
   */
  async describeTasksWithOptions(request: DescribeTasksRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTasksResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.invokeId)) {
      query["InvokeId"] = request.invokeId;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.resourceIds)) {
      query["ResourceIds"] = request.resourceIds;
    }

    if (!Util.isUnset(request.taskIds)) {
      query["TaskIds"] = request.taskIds;
    }

    if (!Util.isUnset(request.taskStatus)) {
      query["TaskStatus"] = request.taskStatus;
    }

    if (!Util.isUnset(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeTasks",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeTasksResponse>(await this.callApi(params, req, runtime), new DescribeTasksResponse({}));
  }

  /**
   * 查询异步任务
   * 
   * @param request - DescribeTasksRequest
   * @returns DescribeTasksResponse
   */
  async describeTasks(request: DescribeTasksRequest): Promise<DescribeTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTasksWithOptions(request, runtime);
  }

  /**
   * 解绑密钥对
   * 
   * @param request - DetachKeyPairRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetachKeyPairResponse
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
   * 解绑密钥对
   * 
   * @param request - DetachKeyPairRequest
   * @returns DetachKeyPairResponse
   */
  async detachKeyPair(request: DetachKeyPairRequest): Promise<DetachKeyPairResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detachKeyPairWithOptions(request, runtime);
  }

  /**
   * 自定义镜像分发
   * 
   * @param request - DistributeImageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DistributeImageResponse
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
   * 自定义镜像分发
   * 
   * @param request - DistributeImageRequest
   * @returns DistributeImageResponse
   */
  async distributeImage(request: DistributeImageRequest): Promise<DistributeImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.distributeImageWithOptions(request, runtime);
  }

  /**
   * 实例组缩容
   * 
   * @param request - DowngradeAndroidInstanceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DowngradeAndroidInstanceGroupResponse
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
   * 实例组缩容
   * 
   * @param request - DowngradeAndroidInstanceGroupRequest
   * @returns DowngradeAndroidInstanceGroupResponse
   */
  async downgradeAndroidInstanceGroup(request: DowngradeAndroidInstanceGroupRequest): Promise<DowngradeAndroidInstanceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.downgradeAndroidInstanceGroupWithOptions(request, runtime);
  }

  /**
   * 云手机拉取文件到OSS
   * 
   * @param request - FetchFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FetchFileResponse
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
   * 云手机拉取文件到OSS
   * 
   * @param request - FetchFileRequest
   * @returns FetchFileResponse
   */
  async fetchFile(request: FetchFileRequest): Promise<FetchFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.fetchFileWithOptions(request, runtime);
  }

  /**
   * @param request - GetAdbSecureRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAdbSecureResponse
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
   * @param request - GetAdbSecureRequest
   * @returns GetAdbSecureResponse
   */
  async getAdbSecure(request: GetAdbSecureRequest): Promise<GetAdbSecureResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAdbSecureWithOptions(request, runtime);
  }

  /**
   * @param request - ImportKeyPairRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ImportKeyPairResponse
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
   * @param request - ImportKeyPairRequest
   * @returns ImportKeyPairResponse
   */
  async importKeyPair(request: ImportKeyPairRequest): Promise<ImportKeyPairResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.importKeyPairWithOptions(request, runtime);
  }

  /**
   * 安装app到实例组
   * 
   * @param request - InstallAppRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InstallAppResponse
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
   * 安装app到实例组
   * 
   * @param request - InstallAppRequest
   * @returns InstallAppResponse
   */
  async installApp(request: InstallAppRequest): Promise<InstallAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.installAppWithOptions(request, runtime);
  }

  /**
   * 查询Policy列表
   * 
   * @param request - ListPolicyGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPolicyGroupsResponse
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
   * 查询Policy列表
   * 
   * @param request - ListPolicyGroupsRequest
   * @returns ListPolicyGroupsResponse
   */
  async listPolicyGroups(request: ListPolicyGroupsRequest): Promise<ListPolicyGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPolicyGroupsWithOptions(request, runtime);
  }

  /**
   * 修改安卓实例信息
   * 
   * @param request - ModifyAndroidInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAndroidInstanceResponse
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
   * 修改安卓实例信息
   * 
   * @param request - ModifyAndroidInstanceRequest
   * @returns ModifyAndroidInstanceResponse
   */
  async modifyAndroidInstance(request: ModifyAndroidInstanceRequest): Promise<ModifyAndroidInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyAndroidInstanceWithOptions(request, runtime);
  }

  /**
   * 修改安卓实例组
   * 
   * @param request - ModifyAndroidInstanceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAndroidInstanceGroupResponse
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
   * 修改安卓实例组
   * 
   * @param request - ModifyAndroidInstanceGroupRequest
   * @returns ModifyAndroidInstanceGroupResponse
   */
  async modifyAndroidInstanceGroup(request: ModifyAndroidInstanceGroupRequest): Promise<ModifyAndroidInstanceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyAndroidInstanceGroupWithOptions(request, runtime);
  }

  /**
   * 修改app
   * 
   * @param request - ModifyAppRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAppResponse
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
   * 修改app
   * 
   * @param request - ModifyAppRequest
   * @returns ModifyAppResponse
   */
  async modifyApp(request: ModifyAppRequest): Promise<ModifyAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyAppWithOptions(request, runtime);
  }

  /**
   * 修改密钥对名称
   * 
   * @param request - ModifyKeyPairNameRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyKeyPairNameResponse
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
   * 修改密钥对名称
   * 
   * @param request - ModifyKeyPairNameRequest
   * @returns ModifyKeyPairNameResponse
   */
  async modifyKeyPairName(request: ModifyKeyPairNameRequest): Promise<ModifyKeyPairNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyKeyPairNameWithOptions(request, runtime);
  }

  /**
   * 修改policy
   * 
   * @param request - ModifyPolicyGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyPolicyGroupResponse
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
   * 修改policy
   * 
   * @param request - ModifyPolicyGroupRequest
   * @returns ModifyPolicyGroupResponse
   */
  async modifyPolicyGroup(request: ModifyPolicyGroupRequest): Promise<ModifyPolicyGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyPolicyGroupWithOptions(request, runtime);
  }

  /**
   * 重启安卓实例
   * 
   * @param request - RebootAndroidInstancesInGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RebootAndroidInstancesInGroupResponse
   */
  async rebootAndroidInstancesInGroupWithOptions(request: RebootAndroidInstancesInGroupRequest, runtime: $Util.RuntimeOptions): Promise<RebootAndroidInstancesInGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.androidInstanceIds)) {
      query["AndroidInstanceIds"] = request.androidInstanceIds;
    }

    if (!Util.isUnset(request.forceStop)) {
      query["ForceStop"] = request.forceStop;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RebootAndroidInstancesInGroup",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RebootAndroidInstancesInGroupResponse>(await this.callApi(params, req, runtime), new RebootAndroidInstancesInGroupResponse({}));
  }

  /**
   * 重启安卓实例
   * 
   * @param request - RebootAndroidInstancesInGroupRequest
   * @returns RebootAndroidInstancesInGroupResponse
   */
  async rebootAndroidInstancesInGroup(request: RebootAndroidInstancesInGroupRequest): Promise<RebootAndroidInstancesInGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.rebootAndroidInstancesInGroupWithOptions(request, runtime);
  }

  /**
   * 文件恢复
   * 
   * @param request - RecoveryFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecoveryFileResponse
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
   * 文件恢复
   * 
   * @param request - RecoveryFileRequest
   * @returns RecoveryFileResponse
   */
  async recoveryFile(request: RecoveryFileRequest): Promise<RecoveryFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recoveryFileWithOptions(request, runtime);
  }

  /**
   * 续费安卓实例组
   * 
   * @param request - RenewAndroidInstanceGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RenewAndroidInstanceGroupsResponse
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
   * 续费安卓实例组
   * 
   * @param request - RenewAndroidInstanceGroupsRequest
   * @returns RenewAndroidInstanceGroupsResponse
   */
  async renewAndroidInstanceGroups(request: RenewAndroidInstanceGroupsRequest): Promise<RenewAndroidInstanceGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.renewAndroidInstanceGroupsWithOptions(request, runtime);
  }

  /**
   * 重置安卓实例
   * 
   * @param request - ResetAndroidInstancesInGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResetAndroidInstancesInGroupResponse
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
   * 重置安卓实例
   * 
   * @param request - ResetAndroidInstancesInGroupRequest
   * @returns ResetAndroidInstancesInGroupResponse
   */
  async resetAndroidInstancesInGroup(request: ResetAndroidInstancesInGroupRequest): Promise<ResetAndroidInstancesInGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resetAndroidInstancesInGroupWithOptions(request, runtime);
  }

  /**
   * 通过eds agent通道下发命令
   * 
   * @param request - RunCommandRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunCommandResponse
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
   * 通过eds agent通道下发命令
   * 
   * @param request - RunCommandRequest
   * @returns RunCommandResponse
   */
  async runCommand(request: RunCommandRequest): Promise<RunCommandResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.runCommandWithOptions(request, runtime);
  }

  /**
   * 推送文件到云手机
   * 
   * @param request - SendFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SendFileResponse
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
   * 推送文件到云手机
   * 
   * @param request - SendFileRequest
   * @returns SendFileResponse
   */
  async sendFile(request: SendFileRequest): Promise<SendFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.sendFileWithOptions(request, runtime);
  }

  /**
   * @param request - SetAdbSecureRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetAdbSecureResponse
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
   * @param request - SetAdbSecureRequest
   * @returns SetAdbSecureResponse
   */
  async setAdbSecure(request: SetAdbSecureRequest): Promise<SetAdbSecureResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setAdbSecureWithOptions(request, runtime);
  }

  /**
   * 实例开机
   * 
   * @param request - StartAndroidInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartAndroidInstanceResponse
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
   * 实例开机
   * 
   * @param request - StartAndroidInstanceRequest
   * @returns StartAndroidInstanceResponse
   */
  async startAndroidInstance(request: StartAndroidInstanceRequest): Promise<StartAndroidInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startAndroidInstanceWithOptions(request, runtime);
  }

  /**
   * 实例关机
   * 
   * @param request - StopAndroidInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopAndroidInstanceResponse
   */
  async stopAndroidInstanceWithOptions(request: StopAndroidInstanceRequest, runtime: $Util.RuntimeOptions): Promise<StopAndroidInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.androidInstanceIds)) {
      query["AndroidInstanceIds"] = request.androidInstanceIds;
    }

    if (!Util.isUnset(request.forceStop)) {
      query["ForceStop"] = request.forceStop;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StopAndroidInstance",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StopAndroidInstanceResponse>(await this.callApi(params, req, runtime), new StopAndroidInstanceResponse({}));
  }

  /**
   * 实例关机
   * 
   * @param request - StopAndroidInstanceRequest
   * @returns StopAndroidInstanceResponse
   */
  async stopAndroidInstance(request: StopAndroidInstanceRequest): Promise<StopAndroidInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopAndroidInstanceWithOptions(request, runtime);
  }

  /**
   * 卸载app
   * 
   * @param request - UninstallAppRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UninstallAppResponse
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
   * 卸载app
   * 
   * @param request - UninstallAppRequest
   * @returns UninstallAppResponse
   */
  async uninstallApp(request: UninstallAppRequest): Promise<UninstallAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.uninstallAppWithOptions(request, runtime);
  }

  /**
   * 修改自定义镜像名称
   * 
   * @param request - UpdateCustomImageNameRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateCustomImageNameResponse
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
   * 修改自定义镜像名称
   * 
   * @param request - UpdateCustomImageNameRequest
   * @returns UpdateCustomImageNameResponse
   */
  async updateCustomImageName(request: UpdateCustomImageNameRequest): Promise<UpdateCustomImageNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateCustomImageNameWithOptions(request, runtime);
  }

  /**
   * 实例组变更镜像
   * 
   * @param request - UpdateInstanceGroupImageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateInstanceGroupImageResponse
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
   * 实例组变更镜像
   * 
   * @param request - UpdateInstanceGroupImageRequest
   * @returns UpdateInstanceGroupImageResponse
   */
  async updateInstanceGroupImage(request: UpdateInstanceGroupImageRequest): Promise<UpdateInstanceGroupImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateInstanceGroupImageWithOptions(request, runtime);
  }

  /**
   * 安卓实例组扩容
   * 
   * @param request - UpgradeAndroidInstanceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpgradeAndroidInstanceGroupResponse
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
   * 安卓实例组扩容
   * 
   * @param request - UpgradeAndroidInstanceGroupRequest
   * @returns UpgradeAndroidInstanceGroupResponse
   */
  async upgradeAndroidInstanceGroup(request: UpgradeAndroidInstanceGroupRequest): Promise<UpgradeAndroidInstanceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.upgradeAndroidInstanceGroupWithOptions(request, runtime);
  }

}
