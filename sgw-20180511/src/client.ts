// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class ActivateAllInOneGatewayRequest extends $tea.Model {
  clientUUID?: string;
  deviceNumber?: string;
  gatewayId?: string;
  model?: string;
  securityToken?: string;
  serialNumber?: string;
  static names(): { [key: string]: string } {
    return {
      clientUUID: 'ClientUUID',
      deviceNumber: 'DeviceNumber',
      gatewayId: 'GatewayId',
      model: 'Model',
      securityToken: 'SecurityToken',
      serialNumber: 'SerialNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientUUID: 'string',
      deviceNumber: 'string',
      gatewayId: 'string',
      model: 'string',
      securityToken: 'string',
      serialNumber: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ActivateAllInOneGatewayResponseBody extends $tea.Model {
  code?: string;
  gatewayId?: string;
  licenseContent?: string;
  message?: string;
  regionId?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      gatewayId: 'GatewayId',
      licenseContent: 'LicenseContent',
      message: 'Message',
      regionId: 'RegionId',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      gatewayId: 'string',
      licenseContent: 'string',
      message: 'string',
      regionId: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ActivateAllInOneGatewayResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ActivateAllInOneGatewayResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ActivateAllInOneGatewayResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ActivateGatewayRequest extends $tea.Model {
  category?: string;
  clientUUID?: string;
  model?: string;
  securityToken?: string;
  serialNumber?: string;
  token?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      clientUUID: 'ClientUUID',
      model: 'Model',
      securityToken: 'SecurityToken',
      serialNumber: 'SerialNumber',
      token: 'Token',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      clientUUID: 'string',
      model: 'string',
      securityToken: 'string',
      serialNumber: 'string',
      token: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ActivateGatewayResponseBody extends $tea.Model {
  code?: string;
  gatewayId?: string;
  message?: string;
  regionId?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      gatewayId: 'GatewayId',
      message: 'Message',
      regionId: 'RegionId',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      gatewayId: 'string',
      message: 'string',
      regionId: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ActivateGatewayResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ActivateGatewayResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ActivateGatewayResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSharesToExpressSyncRequest extends $tea.Model {
  expressSyncId?: string;
  gatewayShares?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      expressSyncId: 'ExpressSyncId',
      gatewayShares: 'GatewayShares',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expressSyncId: 'string',
      gatewayShares: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSharesToExpressSyncResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  mnsFullSyncDelay?: number;
  mnsInnerEndpoint?: string;
  mnsPublicEndpoint?: string;
  mnsQueues?: string;
  mnsTopic?: string;
  requestId?: string;
  success?: boolean;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      mnsFullSyncDelay: 'MnsFullSyncDelay',
      mnsInnerEndpoint: 'MnsInnerEndpoint',
      mnsPublicEndpoint: 'MnsPublicEndpoint',
      mnsQueues: 'MnsQueues',
      mnsTopic: 'MnsTopic',
      requestId: 'RequestId',
      success: 'Success',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      mnsFullSyncDelay: 'number',
      mnsInnerEndpoint: 'string',
      mnsPublicEndpoint: 'string',
      mnsQueues: 'string',
      mnsTopic: 'string',
      requestId: 'string',
      success: 'boolean',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSharesToExpressSyncResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddSharesToExpressSyncResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddSharesToExpressSyncResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddTagsToGatewayRequest extends $tea.Model {
  gatewayId?: string;
  securityToken?: string;
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'GatewayId',
      securityToken: 'SecurityToken',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      securityToken: 'string',
      tags: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddTagsToGatewayResponseBody extends $tea.Model {
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

export class AddTagsToGatewayResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddTagsToGatewayResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddTagsToGatewayResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckActivationKeyRequest extends $tea.Model {
  cryptKey?: string;
  cryptText?: string;
  gatewayId?: string;
  securityToken?: string;
  token?: string;
  static names(): { [key: string]: string } {
    return {
      cryptKey: 'CryptKey',
      cryptText: 'CryptText',
      gatewayId: 'GatewayId',
      securityToken: 'SecurityToken',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cryptKey: 'string',
      cryptText: 'string',
      gatewayId: 'string',
      securityToken: 'string',
      token: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckActivationKeyResponseBody extends $tea.Model {
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

export class CheckActivationKeyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CheckActivationKeyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CheckActivationKeyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckBlockVolumeNameRequest extends $tea.Model {
  bucketEndpoint?: string;
  bucketName?: string;
  securityToken?: string;
  volumeName?: string;
  static names(): { [key: string]: string } {
    return {
      bucketEndpoint: 'BucketEndpoint',
      bucketName: 'BucketName',
      securityToken: 'SecurityToken',
      volumeName: 'VolumeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketEndpoint: 'string',
      bucketName: 'string',
      securityToken: 'string',
      volumeName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckBlockVolumeNameResponseBody extends $tea.Model {
  code?: string;
  isAlreadyExist?: boolean;
  isRequireRecovery?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isAlreadyExist: 'IsAlreadyExist',
      isRequireRecovery: 'IsRequireRecovery',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isAlreadyExist: 'boolean',
      isRequireRecovery: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckBlockVolumeNameResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CheckBlockVolumeNameResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CheckBlockVolumeNameResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckGatewayEssdSupportRequest extends $tea.Model {
  gatewayId?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'GatewayId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckGatewayEssdSupportResponseBody extends $tea.Model {
  code?: string;
  isServiceAffect?: boolean;
  isSupportEssd?: boolean;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isServiceAffect: 'IsServiceAffect',
      isSupportEssd: 'IsSupportEssd',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isServiceAffect: 'boolean',
      isSupportEssd: 'boolean',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckGatewayEssdSupportResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CheckGatewayEssdSupportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CheckGatewayEssdSupportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckMnsServiceRequest extends $tea.Model {
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckMnsServiceResponseBody extends $tea.Model {
  checkMessage?: string;
  code?: string;
  isEnabled?: boolean;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      checkMessage: 'CheckMessage',
      code: 'Code',
      isEnabled: 'IsEnabled',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkMessage: 'string',
      code: 'string',
      isEnabled: 'boolean',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckMnsServiceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CheckMnsServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CheckMnsServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckRoleRequest extends $tea.Model {
  roleType?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      roleType: 'RoleType',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleType: 'string',
      securityToken: 'string',
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

export class CheckSlrRoleRequest extends $tea.Model {
  createIfNotExist?: boolean;
  roleName?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      createIfNotExist: 'CreateIfNotExist',
      roleName: 'RoleName',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createIfNotExist: 'boolean',
      roleName: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckSlrRoleResponseBody extends $tea.Model {
  code?: string;
  exist?: boolean;
  message?: string;
  requestId?: string;
  requireOldWayCheck?: boolean;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      exist: 'Exist',
      message: 'Message',
      requestId: 'RequestId',
      requireOldWayCheck: 'RequireOldWayCheck',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      exist: 'boolean',
      message: 'string',
      requestId: 'string',
      requireOldWayCheck: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckSlrRoleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CheckSlrRoleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CheckSlrRoleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckUpgradeVersionRequest extends $tea.Model {
  clientUUID?: string;
  gatewayId?: string;
  gatewayVersion?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      clientUUID: 'ClientUUID',
      gatewayId: 'GatewayId',
      gatewayVersion: 'GatewayVersion',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientUUID: 'string',
      gatewayId: 'string',
      gatewayVersion: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckUpgradeVersionResponseBody extends $tea.Model {
  code?: string;
  latestVersion?: string;
  message?: string;
  option?: string;
  patches?: CheckUpgradeVersionResponseBodyPatches;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      latestVersion: 'LatestVersion',
      message: 'Message',
      option: 'Option',
      patches: 'Patches',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      latestVersion: 'string',
      message: 'string',
      option: 'string',
      patches: CheckUpgradeVersionResponseBodyPatches,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckUpgradeVersionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CheckUpgradeVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CheckUpgradeVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCacheRequest extends $tea.Model {
  category?: string;
  gatewayId?: string;
  securityToken?: string;
  sizeInGB?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      gatewayId: 'GatewayId',
      securityToken: 'SecurityToken',
      sizeInGB: 'SizeInGB',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      gatewayId: 'string',
      securityToken: 'string',
      sizeInGB: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCacheResponseBody extends $tea.Model {
  buyURL?: string;
  cacheId?: string;
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      buyURL: 'BuyURL',
      cacheId: 'CacheId',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buyURL: 'string',
      cacheId: 'string',
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

export class CreateCacheResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateCacheResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateCacheResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateElasticGatewayPrivateZoneRequest extends $tea.Model {
  gatewayId?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'GatewayId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateElasticGatewayPrivateZoneResponseBody extends $tea.Model {
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

export class CreateElasticGatewayPrivateZoneResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateElasticGatewayPrivateZoneResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateElasticGatewayPrivateZoneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateExpressSyncRequest extends $tea.Model {
  bucketName?: string;
  bucketPrefix?: string;
  bucketRegion?: string;
  description?: string;
  name?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'BucketName',
      bucketPrefix: 'BucketPrefix',
      bucketRegion: 'BucketRegion',
      description: 'Description',
      name: 'Name',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      bucketPrefix: 'string',
      bucketRegion: 'string',
      description: 'string',
      name: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateExpressSyncResponseBody extends $tea.Model {
  code?: string;
  expressSyncId?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      expressSyncId: 'ExpressSyncId',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      expressSyncId: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateExpressSyncResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateExpressSyncResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateExpressSyncResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGatewayRequest extends $tea.Model {
  description?: string;
  gatewayClass?: string;
  location?: string;
  name?: string;
  postPaid?: boolean;
  publicNetworkBandwidth?: number;
  releaseAfterExpiration?: boolean;
  resourceRegionId?: string;
  secondaryVSwitchId?: string;
  securityToken?: string;
  storageBundleId?: string;
  type?: string;
  untrustedEnvId?: string;
  untrustedEnvInstanceType?: string;
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      gatewayClass: 'GatewayClass',
      location: 'Location',
      name: 'Name',
      postPaid: 'PostPaid',
      publicNetworkBandwidth: 'PublicNetworkBandwidth',
      releaseAfterExpiration: 'ReleaseAfterExpiration',
      resourceRegionId: 'ResourceRegionId',
      secondaryVSwitchId: 'SecondaryVSwitchId',
      securityToken: 'SecurityToken',
      storageBundleId: 'StorageBundleId',
      type: 'Type',
      untrustedEnvId: 'UntrustedEnvId',
      untrustedEnvInstanceType: 'UntrustedEnvInstanceType',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      gatewayClass: 'string',
      location: 'string',
      name: 'string',
      postPaid: 'boolean',
      publicNetworkBandwidth: 'number',
      releaseAfterExpiration: 'boolean',
      resourceRegionId: 'string',
      secondaryVSwitchId: 'string',
      securityToken: 'string',
      storageBundleId: 'string',
      type: 'string',
      untrustedEnvId: 'string',
      untrustedEnvInstanceType: 'string',
      vSwitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGatewayResponseBody extends $tea.Model {
  buyURL?: string;
  code?: string;
  gatewayId?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      buyURL: 'BuyURL',
      code: 'Code',
      gatewayId: 'GatewayId',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buyURL: 'string',
      code: 'string',
      gatewayId: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGatewayResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateGatewayResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateGatewayResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGatewayBlockVolumeRequest extends $tea.Model {
  cacheMode?: string;
  chapEnabled?: boolean;
  chapInPassword?: string;
  chapInUser?: string;
  chunkSize?: number;
  gatewayId?: string;
  localFilePath?: string;
  name?: string;
  ossBucketName?: string;
  ossBucketSsl?: boolean;
  ossEndpoint?: string;
  recovery?: boolean;
  securityToken?: string;
  size?: number;
  volumeProtocol?: string;
  static names(): { [key: string]: string } {
    return {
      cacheMode: 'CacheMode',
      chapEnabled: 'ChapEnabled',
      chapInPassword: 'ChapInPassword',
      chapInUser: 'ChapInUser',
      chunkSize: 'ChunkSize',
      gatewayId: 'GatewayId',
      localFilePath: 'LocalFilePath',
      name: 'Name',
      ossBucketName: 'OssBucketName',
      ossBucketSsl: 'OssBucketSsl',
      ossEndpoint: 'OssEndpoint',
      recovery: 'Recovery',
      securityToken: 'SecurityToken',
      size: 'Size',
      volumeProtocol: 'VolumeProtocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cacheMode: 'string',
      chapEnabled: 'boolean',
      chapInPassword: 'string',
      chapInUser: 'string',
      chunkSize: 'number',
      gatewayId: 'string',
      localFilePath: 'string',
      name: 'string',
      ossBucketName: 'string',
      ossBucketSsl: 'boolean',
      ossEndpoint: 'string',
      recovery: 'boolean',
      securityToken: 'string',
      size: 'number',
      volumeProtocol: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGatewayBlockVolumeResponseBody extends $tea.Model {
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

export class CreateGatewayBlockVolumeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateGatewayBlockVolumeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateGatewayBlockVolumeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGatewayCacheDiskRequest extends $tea.Model {
  cacheDiskCategory?: string;
  cacheDiskSizeInGB?: number;
  gatewayId?: string;
  performanceLevel?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      cacheDiskCategory: 'CacheDiskCategory',
      cacheDiskSizeInGB: 'CacheDiskSizeInGB',
      gatewayId: 'GatewayId',
      performanceLevel: 'PerformanceLevel',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cacheDiskCategory: 'string',
      cacheDiskSizeInGB: 'number',
      gatewayId: 'string',
      performanceLevel: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGatewayCacheDiskResponseBody extends $tea.Model {
  buyURL?: string;
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      buyURL: 'BuyURL',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buyURL: 'string',
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

export class CreateGatewayCacheDiskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateGatewayCacheDiskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateGatewayCacheDiskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGatewayFileShareRequest extends $tea.Model {
  accessBasedEnumeration?: boolean;
  backendLimit?: number;
  browsable?: boolean;
  bypassCacheRead?: boolean;
  cacheMode?: string;
  clientSideCmk?: string;
  clientSideEncryption?: boolean;
  directIO?: boolean;
  downloadLimit?: number;
  fastReclaim?: boolean;
  frontendLimit?: number;
  gatewayId?: string;
  ignoreDelete?: boolean;
  inPlace?: boolean;
  kmsRotatePeriod?: number;
  lagPeriod?: number;
  localFilePath?: string;
  name?: string;
  nfsV4Optimization?: boolean;
  ossBucketName?: string;
  ossBucketSsl?: boolean;
  ossEndpoint?: string;
  partialSyncPaths?: string;
  pathPrefix?: string;
  pollingInterval?: number;
  readOnlyClientList?: string;
  readOnlyUserList?: string;
  readWriteClientList?: string;
  readWriteUserList?: string;
  remoteSync?: boolean;
  remoteSyncDownload?: boolean;
  securityToken?: string;
  serverSideAlgorithm?: string;
  serverSideCmk?: string;
  serverSideEncryption?: boolean;
  shareProtocol?: string;
  squash?: string;
  supportArchive?: boolean;
  transferAcceleration?: boolean;
  windowsAcl?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessBasedEnumeration: 'AccessBasedEnumeration',
      backendLimit: 'BackendLimit',
      browsable: 'Browsable',
      bypassCacheRead: 'BypassCacheRead',
      cacheMode: 'CacheMode',
      clientSideCmk: 'ClientSideCmk',
      clientSideEncryption: 'ClientSideEncryption',
      directIO: 'DirectIO',
      downloadLimit: 'DownloadLimit',
      fastReclaim: 'FastReclaim',
      frontendLimit: 'FrontendLimit',
      gatewayId: 'GatewayId',
      ignoreDelete: 'IgnoreDelete',
      inPlace: 'InPlace',
      kmsRotatePeriod: 'KmsRotatePeriod',
      lagPeriod: 'LagPeriod',
      localFilePath: 'LocalFilePath',
      name: 'Name',
      nfsV4Optimization: 'NfsV4Optimization',
      ossBucketName: 'OssBucketName',
      ossBucketSsl: 'OssBucketSsl',
      ossEndpoint: 'OssEndpoint',
      partialSyncPaths: 'PartialSyncPaths',
      pathPrefix: 'PathPrefix',
      pollingInterval: 'PollingInterval',
      readOnlyClientList: 'ReadOnlyClientList',
      readOnlyUserList: 'ReadOnlyUserList',
      readWriteClientList: 'ReadWriteClientList',
      readWriteUserList: 'ReadWriteUserList',
      remoteSync: 'RemoteSync',
      remoteSyncDownload: 'RemoteSyncDownload',
      securityToken: 'SecurityToken',
      serverSideAlgorithm: 'ServerSideAlgorithm',
      serverSideCmk: 'ServerSideCmk',
      serverSideEncryption: 'ServerSideEncryption',
      shareProtocol: 'ShareProtocol',
      squash: 'Squash',
      supportArchive: 'SupportArchive',
      transferAcceleration: 'TransferAcceleration',
      windowsAcl: 'WindowsAcl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessBasedEnumeration: 'boolean',
      backendLimit: 'number',
      browsable: 'boolean',
      bypassCacheRead: 'boolean',
      cacheMode: 'string',
      clientSideCmk: 'string',
      clientSideEncryption: 'boolean',
      directIO: 'boolean',
      downloadLimit: 'number',
      fastReclaim: 'boolean',
      frontendLimit: 'number',
      gatewayId: 'string',
      ignoreDelete: 'boolean',
      inPlace: 'boolean',
      kmsRotatePeriod: 'number',
      lagPeriod: 'number',
      localFilePath: 'string',
      name: 'string',
      nfsV4Optimization: 'boolean',
      ossBucketName: 'string',
      ossBucketSsl: 'boolean',
      ossEndpoint: 'string',
      partialSyncPaths: 'string',
      pathPrefix: 'string',
      pollingInterval: 'number',
      readOnlyClientList: 'string',
      readOnlyUserList: 'string',
      readWriteClientList: 'string',
      readWriteUserList: 'string',
      remoteSync: 'boolean',
      remoteSyncDownload: 'boolean',
      securityToken: 'string',
      serverSideAlgorithm: 'string',
      serverSideCmk: 'string',
      serverSideEncryption: 'boolean',
      shareProtocol: 'string',
      squash: 'string',
      supportArchive: 'boolean',
      transferAcceleration: 'boolean',
      windowsAcl: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGatewayFileShareResponseBody extends $tea.Model {
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

export class CreateGatewayFileShareResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateGatewayFileShareResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateGatewayFileShareResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGatewayLoggingRequest extends $tea.Model {
  gatewayId?: string;
  securityToken?: string;
  slsLogstore?: string;
  slsProject?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'GatewayId',
      securityToken: 'SecurityToken',
      slsLogstore: 'SlsLogstore',
      slsProject: 'SlsProject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      securityToken: 'string',
      slsLogstore: 'string',
      slsProject: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGatewayLoggingResponseBody extends $tea.Model {
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

export class CreateGatewayLoggingResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateGatewayLoggingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateGatewayLoggingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGatewaySMBUserRequest extends $tea.Model {
  gatewayId?: string;
  password?: string;
  securityToken?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'GatewayId',
      password: 'Password',
      securityToken: 'SecurityToken',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      password: 'string',
      securityToken: 'string',
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGatewaySMBUserResponseBody extends $tea.Model {
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

export class CreateGatewaySMBUserResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateGatewaySMBUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateGatewaySMBUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStorageBundleRequest extends $tea.Model {
  backendBucketRegionId?: string;
  description?: string;
  name?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      backendBucketRegionId: 'BackendBucketRegionId',
      description: 'Description',
      name: 'Name',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendBucketRegionId: 'string',
      description: 'string',
      name: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStorageBundleResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  storageBundleId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      storageBundleId: 'StorageBundleId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      storageBundleId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStorageBundleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateStorageBundleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateStorageBundleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCSGClientsRequest extends $tea.Model {
  clientIds?: string[];
  clientRegionId?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      clientIds: 'ClientIds',
      clientRegionId: 'ClientRegionId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIds: { 'type': 'array', 'itemType': 'string' },
      clientRegionId: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCSGClientsShrinkRequest extends $tea.Model {
  clientIdsShrink?: string;
  clientRegionId?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      clientIdsShrink: 'ClientIds',
      clientRegionId: 'ClientRegionId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIdsShrink: 'string',
      clientRegionId: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCSGClientsResponseBody extends $tea.Model {
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

export class DeleteCSGClientsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteCSGClientsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteCSGClientsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteElasticGatewayPrivateZoneRequest extends $tea.Model {
  gatewayId?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'GatewayId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteElasticGatewayPrivateZoneResponseBody extends $tea.Model {
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

export class DeleteElasticGatewayPrivateZoneResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteElasticGatewayPrivateZoneResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteElasticGatewayPrivateZoneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteExpressSyncRequest extends $tea.Model {
  expressSyncId?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      expressSyncId: 'ExpressSyncId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expressSyncId: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteExpressSyncResponseBody extends $tea.Model {
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

export class DeleteExpressSyncResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteExpressSyncResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteExpressSyncResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGatewayRequest extends $tea.Model {
  gatewayId?: string;
  reasonDetail?: string;
  reasonType?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'GatewayId',
      reasonDetail: 'ReasonDetail',
      reasonType: 'ReasonType',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      reasonDetail: 'string',
      reasonType: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGatewayResponseBody extends $tea.Model {
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

export class DeleteGatewayResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteGatewayResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteGatewayResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGatewayBlockVolumesRequest extends $tea.Model {
  gatewayId?: string;
  indexId?: string;
  isSourceDeletion?: boolean;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'GatewayId',
      indexId: 'IndexId',
      isSourceDeletion: 'IsSourceDeletion',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      indexId: 'string',
      isSourceDeletion: 'boolean',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGatewayBlockVolumesResponseBody extends $tea.Model {
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

export class DeleteGatewayBlockVolumesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteGatewayBlockVolumesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteGatewayBlockVolumesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGatewayCacheDiskRequest extends $tea.Model {
  cacheId?: string;
  gatewayId?: string;
  localFilePath?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      cacheId: 'CacheId',
      gatewayId: 'GatewayId',
      localFilePath: 'LocalFilePath',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cacheId: 'string',
      gatewayId: 'string',
      localFilePath: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGatewayCacheDiskResponseBody extends $tea.Model {
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

export class DeleteGatewayCacheDiskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteGatewayCacheDiskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteGatewayCacheDiskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGatewayFileSharesRequest extends $tea.Model {
  force?: boolean;
  gatewayId?: string;
  indexId?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      force: 'Force',
      gatewayId: 'GatewayId',
      indexId: 'IndexId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      force: 'boolean',
      gatewayId: 'string',
      indexId: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGatewayFileSharesResponseBody extends $tea.Model {
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

export class DeleteGatewayFileSharesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteGatewayFileSharesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteGatewayFileSharesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGatewayLoggingRequest extends $tea.Model {
  gatewayId?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'GatewayId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGatewayLoggingResponseBody extends $tea.Model {
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

export class DeleteGatewayLoggingResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteGatewayLoggingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteGatewayLoggingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGatewaySMBUserRequest extends $tea.Model {
  gatewayId?: string;
  securityToken?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'GatewayId',
      securityToken: 'SecurityToken',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      securityToken: 'string',
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGatewaySMBUserResponseBody extends $tea.Model {
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

export class DeleteGatewaySMBUserResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteGatewaySMBUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteGatewaySMBUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteStorageBundleRequest extends $tea.Model {
  securityToken?: string;
  storageBundleId?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      storageBundleId: 'StorageBundleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      storageBundleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteStorageBundleResponseBody extends $tea.Model {
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

export class DeleteStorageBundleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteStorageBundleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteStorageBundleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployCSGClientsRequest extends $tea.Model {
  clientRegionId?: string;
  ecsInstanceIds?: string[];
  securityToken?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      clientRegionId: 'ClientRegionId',
      ecsInstanceIds: 'EcsInstanceIds',
      securityToken: 'SecurityToken',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientRegionId: 'string',
      ecsInstanceIds: { 'type': 'array', 'itemType': 'string' },
      securityToken: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployCSGClientsShrinkRequest extends $tea.Model {
  clientRegionId?: string;
  ecsInstanceIdsShrink?: string;
  securityToken?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      clientRegionId: 'ClientRegionId',
      ecsInstanceIdsShrink: 'EcsInstanceIds',
      securityToken: 'SecurityToken',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientRegionId: 'string',
      ecsInstanceIdsShrink: 'string',
      securityToken: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployCSGClientsResponseBody extends $tea.Model {
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

export class DeployCSGClientsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeployCSGClientsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeployCSGClientsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployCacheDiskRequest extends $tea.Model {
  cacheConfig?: string;
  diskCategory?: string;
  gatewayId?: string;
  securityToken?: string;
  sizeInGB?: number;
  static names(): { [key: string]: string } {
    return {
      cacheConfig: 'CacheConfig',
      diskCategory: 'DiskCategory',
      gatewayId: 'GatewayId',
      securityToken: 'SecurityToken',
      sizeInGB: 'SizeInGB',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cacheConfig: 'string',
      diskCategory: 'string',
      gatewayId: 'string',
      securityToken: 'string',
      sizeInGB: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployCacheDiskResponseBody extends $tea.Model {
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

export class DeployCacheDiskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeployCacheDiskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeployCacheDiskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployGatewayRequest extends $tea.Model {
  gatewayClass?: string;
  gatewayId?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayClass: 'GatewayClass',
      gatewayId: 'GatewayId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayClass: 'string',
      gatewayId: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployGatewayResponseBody extends $tea.Model {
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

export class DeployGatewayResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeployGatewayResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeployGatewayResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountConfigRequest extends $tea.Model {
  gatewayId?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'GatewayId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountConfigResponseBody extends $tea.Model {
  code?: string;
  isSupportClientSideEncryption?: boolean;
  isSupportElasticGatewayBeta?: boolean;
  isSupportGatewayLogging?: boolean;
  isSupportServerSideEncryption?: boolean;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSupportClientSideEncryption: 'IsSupportClientSideEncryption',
      isSupportElasticGatewayBeta: 'IsSupportElasticGatewayBeta',
      isSupportGatewayLogging: 'IsSupportGatewayLogging',
      isSupportServerSideEncryption: 'IsSupportServerSideEncryption',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSupportClientSideEncryption: 'boolean',
      isSupportElasticGatewayBeta: 'boolean',
      isSupportGatewayLogging: 'boolean',
      isSupportServerSideEncryption: 'boolean',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAccountConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeAccountConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBlockVolumeSnapshotsRequest extends $tea.Model {
  gatewayId?: string;
  indexId?: string;
  pageNumber?: number;
  pageSize?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'GatewayId',
      indexId: 'IndexId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      indexId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBlockVolumeSnapshotsResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  snapshots?: DescribeBlockVolumeSnapshotsResponseBodySnapshots;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
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
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      snapshots: DescribeBlockVolumeSnapshotsResponseBodySnapshots,
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBlockVolumeSnapshotsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeBlockVolumeSnapshotsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeBlockVolumeSnapshotsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCSGClientTasksRequest extends $tea.Model {
  clientId?: string;
  clientRegionId?: string;
  pageNumber?: number;
  pageSize?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      clientRegionId: 'ClientRegionId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      clientRegionId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCSGClientTasksResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  tasks?: DescribeCSGClientTasksResponseBodyTasks[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      tasks: 'Tasks',
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
      success: 'boolean',
      tasks: { 'type': 'array', 'itemType': DescribeCSGClientTasksResponseBodyTasks },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCSGClientTasksResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeCSGClientTasksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeCSGClientTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCSGClientsRequest extends $tea.Model {
  clientRegionId?: string;
  pageNumber?: number;
  pageSize?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      clientRegionId: 'ClientRegionId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientRegionId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCSGClientsResponseBody extends $tea.Model {
  clients?: DescribeCSGClientsResponseBodyClients[];
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
      clients: { 'type': 'array', 'itemType': DescribeCSGClientsResponseBodyClients },
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

export class DescribeCSGClientsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeCSGClientsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeCSGClientsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDashboardRequest extends $tea.Model {
  backendBucketRegionId?: string;
  resourceGroupId?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      backendBucketRegionId: 'BackendBucketRegionId',
      resourceGroupId: 'ResourceGroupId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendBucketRegionId: 'string',
      resourceGroupId: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDashboardResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  overview?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      overview: 'Overview',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      overview: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDashboardResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDashboardResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDashboardResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExpireCachesRequest extends $tea.Model {
  gatewayId?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'GatewayId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExpireCachesResponseBody extends $tea.Model {
  cacheFilePaths?: string;
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      cacheFilePaths: 'CacheFilePaths',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cacheFilePaths: 'string',
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

export class DescribeExpireCachesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeExpireCachesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeExpireCachesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExpressSyncSharesRequest extends $tea.Model {
  expressSyncIds?: string;
  isExternal?: boolean;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      expressSyncIds: 'ExpressSyncIds',
      isExternal: 'IsExternal',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expressSyncIds: 'string',
      isExternal: 'boolean',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExpressSyncSharesResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  shares?: DescribeExpressSyncSharesResponseBodyShares;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      shares: 'Shares',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      shares: DescribeExpressSyncSharesResponseBodyShares,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExpressSyncSharesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeExpressSyncSharesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeExpressSyncSharesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExpressSyncsRequest extends $tea.Model {
  bucketName?: string;
  bucketPrefix?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'BucketName',
      bucketPrefix: 'BucketPrefix',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      bucketPrefix: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExpressSyncsResponseBody extends $tea.Model {
  code?: string;
  expressSyncs?: DescribeExpressSyncsResponseBodyExpressSyncs;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      expressSyncs: 'ExpressSyncs',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      expressSyncs: DescribeExpressSyncsResponseBodyExpressSyncs,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExpressSyncsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeExpressSyncsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeExpressSyncsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewayRequest extends $tea.Model {
  gatewayId?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'GatewayId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewayResponseBody extends $tea.Model {
  activatedTime?: number;
  buyURL?: string;
  capacity?: number;
  category?: string;
  code?: string;
  commonBuyInstanceId?: string;
  createdTime?: number;
  dataLoadInterval?: number;
  dataLoadType?: string;
  description?: string;
  ecsInstanceId?: string;
  elasticGateway?: boolean;
  elasticNodes?: DescribeGatewayResponseBodyElasticNodes;
  expireStatus?: number;
  expiredTime?: number;
  gatewayClass?: string;
  gatewayId?: string;
  gatewayRegionId?: string;
  gatewayType?: string;
  gatewayVersion?: string;
  highAvailability?: boolean;
  innerIp?: string;
  innerIpv6Ip?: string;
  ip?: string;
  isPostPaid?: boolean;
  isReleaseAfterExpiration?: boolean;
  lastErrorKey?: string;
  location?: string;
  maxThroughput?: number;
  message?: string;
  name?: string;
  publicNetworkBandwidth?: number;
  renewURL?: string;
  requestId?: string;
  status?: string;
  storageBundleId?: string;
  success?: boolean;
  taskId?: string;
  type?: string;
  untrustedEnvInstanceType?: string;
  untrustedEnvOssEndpoint?: string;
  vSwitchId?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      activatedTime: 'ActivatedTime',
      buyURL: 'BuyURL',
      capacity: 'Capacity',
      category: 'Category',
      code: 'Code',
      commonBuyInstanceId: 'CommonBuyInstanceId',
      createdTime: 'CreatedTime',
      dataLoadInterval: 'DataLoadInterval',
      dataLoadType: 'DataLoadType',
      description: 'Description',
      ecsInstanceId: 'EcsInstanceId',
      elasticGateway: 'ElasticGateway',
      elasticNodes: 'ElasticNodes',
      expireStatus: 'ExpireStatus',
      expiredTime: 'ExpiredTime',
      gatewayClass: 'GatewayClass',
      gatewayId: 'GatewayId',
      gatewayRegionId: 'GatewayRegionId',
      gatewayType: 'GatewayType',
      gatewayVersion: 'GatewayVersion',
      highAvailability: 'HighAvailability',
      innerIp: 'InnerIp',
      innerIpv6Ip: 'InnerIpv6Ip',
      ip: 'Ip',
      isPostPaid: 'IsPostPaid',
      isReleaseAfterExpiration: 'IsReleaseAfterExpiration',
      lastErrorKey: 'LastErrorKey',
      location: 'Location',
      maxThroughput: 'MaxThroughput',
      message: 'Message',
      name: 'Name',
      publicNetworkBandwidth: 'PublicNetworkBandwidth',
      renewURL: 'RenewURL',
      requestId: 'RequestId',
      status: 'Status',
      storageBundleId: 'StorageBundleId',
      success: 'Success',
      taskId: 'TaskId',
      type: 'Type',
      untrustedEnvInstanceType: 'UntrustedEnvInstanceType',
      untrustedEnvOssEndpoint: 'UntrustedEnvOssEndpoint',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activatedTime: 'number',
      buyURL: 'string',
      capacity: 'number',
      category: 'string',
      code: 'string',
      commonBuyInstanceId: 'string',
      createdTime: 'number',
      dataLoadInterval: 'number',
      dataLoadType: 'string',
      description: 'string',
      ecsInstanceId: 'string',
      elasticGateway: 'boolean',
      elasticNodes: DescribeGatewayResponseBodyElasticNodes,
      expireStatus: 'number',
      expiredTime: 'number',
      gatewayClass: 'string',
      gatewayId: 'string',
      gatewayRegionId: 'string',
      gatewayType: 'string',
      gatewayVersion: 'string',
      highAvailability: 'boolean',
      innerIp: 'string',
      innerIpv6Ip: 'string',
      ip: 'string',
      isPostPaid: 'boolean',
      isReleaseAfterExpiration: 'boolean',
      lastErrorKey: 'string',
      location: 'string',
      maxThroughput: 'number',
      message: 'string',
      name: 'string',
      publicNetworkBandwidth: 'number',
      renewURL: 'string',
      requestId: 'string',
      status: 'string',
      storageBundleId: 'string',
      success: 'boolean',
      taskId: 'string',
      type: 'string',
      untrustedEnvInstanceType: 'string',
      untrustedEnvOssEndpoint: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewayResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeGatewayResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeGatewayResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewayADInfoRequest extends $tea.Model {
  gatewayId?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'GatewayId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewayADInfoResponseBody extends $tea.Model {
  code?: string;
  domainName?: string;
  isEnabled?: boolean;
  message?: string;
  requestId?: string;
  serverIp?: string;
  success?: boolean;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      domainName: 'DomainName',
      isEnabled: 'IsEnabled',
      message: 'Message',
      requestId: 'RequestId',
      serverIp: 'ServerIp',
      success: 'Success',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      domainName: 'string',
      isEnabled: 'boolean',
      message: 'string',
      requestId: 'string',
      serverIp: 'string',
      success: 'boolean',
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewayADInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeGatewayADInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeGatewayADInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewayActionsRequest extends $tea.Model {
  gatewayId?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'GatewayId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewayActionsResponseBody extends $tea.Model {
  actions?: DescribeGatewayActionsResponseBodyActions;
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      actions: 'Actions',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: DescribeGatewayActionsResponseBodyActions,
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

export class DescribeGatewayActionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeGatewayActionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeGatewayActionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewayAuthInfoRequest extends $tea.Model {
  gatewayId?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'GatewayId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewayAuthInfoResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  password?: string;
  publicIp?: string;
  requestId?: string;
  success?: boolean;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      password: 'Password',
      publicIp: 'PublicIp',
      requestId: 'RequestId',
      success: 'Success',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      password: 'string',
      publicIp: 'string',
      requestId: 'string',
      success: 'boolean',
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewayAuthInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeGatewayAuthInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeGatewayAuthInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewayAutoPlansRequest extends $tea.Model {
  gatewayId?: string;
  pageNumber?: number;
  pageSize?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'GatewayId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewayAutoPlansResponseBody extends $tea.Model {
  autoPlans?: DescribeGatewayAutoPlansResponseBodyAutoPlans[];
  code?: string;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      autoPlans: 'AutoPlans',
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
      autoPlans: { 'type': 'array', 'itemType': DescribeGatewayAutoPlansResponseBodyAutoPlans },
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

export class DescribeGatewayAutoPlansResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeGatewayAutoPlansResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeGatewayAutoPlansResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewayAutoUpgradeConfigurationRequest extends $tea.Model {
  gatewayId?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'GatewayId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewayAutoUpgradeConfigurationResponseBody extends $tea.Model {
  autoUpgradeEndHour?: number;
  autoUpgradeStartHour?: number;
  code?: string;
  isAutoUpgrade?: boolean;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      autoUpgradeEndHour: 'AutoUpgradeEndHour',
      autoUpgradeStartHour: 'AutoUpgradeStartHour',
      code: 'Code',
      isAutoUpgrade: 'IsAutoUpgrade',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoUpgradeEndHour: 'number',
      autoUpgradeStartHour: 'number',
      code: 'string',
      isAutoUpgrade: 'boolean',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewayAutoUpgradeConfigurationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeGatewayAutoUpgradeConfigurationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeGatewayAutoUpgradeConfigurationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewayBlockVolumesRequest extends $tea.Model {
  gatewayId?: string;
  indexId?: string;
  refresh?: boolean;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'GatewayId',
      indexId: 'IndexId',
      refresh: 'Refresh',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      indexId: 'string',
      refresh: 'boolean',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewayBlockVolumesResponseBody extends $tea.Model {
  blockVolumes?: DescribeGatewayBlockVolumesResponseBodyBlockVolumes;
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      blockVolumes: 'BlockVolumes',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockVolumes: DescribeGatewayBlockVolumesResponseBodyBlockVolumes,
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

export class DescribeGatewayBlockVolumesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeGatewayBlockVolumesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeGatewayBlockVolumesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewayBucketCachesRequest extends $tea.Model {
  bucketName?: string;
  pageNumber?: number;
  pageSize?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'BucketName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewayBucketCachesResponseBody extends $tea.Model {
  bucketCaches?: DescribeGatewayBucketCachesResponseBodyBucketCaches;
  code?: string;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      bucketCaches: 'BucketCaches',
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
      bucketCaches: DescribeGatewayBucketCachesResponseBodyBucketCaches,
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

export class DescribeGatewayBucketCachesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeGatewayBucketCachesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeGatewayBucketCachesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewayCachesRequest extends $tea.Model {
  gatewayId?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'GatewayId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewayCachesResponseBody extends $tea.Model {
  caches?: DescribeGatewayCachesResponseBodyCaches;
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      caches: 'Caches',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caches: DescribeGatewayCachesResponseBodyCaches,
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

export class DescribeGatewayCachesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeGatewayCachesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeGatewayCachesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewayCapacityLimitRequest extends $tea.Model {
  gatewayId?: string;
  securityToken?: string;
  sizeInGB?: number;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'GatewayId',
      securityToken: 'SecurityToken',
      sizeInGB: 'SizeInGB',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      securityToken: 'string',
      sizeInGB: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewayCapacityLimitResponseBody extends $tea.Model {
  code?: string;
  fileNumber?: number;
  fileSystemSizeInTB?: number;
  isMetadataSeparate?: boolean;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      fileNumber: 'FileNumber',
      fileSystemSizeInTB: 'FileSystemSizeInTB',
      isMetadataSeparate: 'IsMetadataSeparate',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      fileNumber: 'number',
      fileSystemSizeInTB: 'number',
      isMetadataSeparate: 'boolean',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewayCapacityLimitResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeGatewayCapacityLimitResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeGatewayCapacityLimitResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewayCategoriesRequest extends $tea.Model {
  gatewayLocation?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayLocation: 'GatewayLocation',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayLocation: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewayCategoriesResponseBody extends $tea.Model {
  categories?: string;
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      categories: 'Categories',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categories: 'string',
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

export class DescribeGatewayCategoriesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeGatewayCategoriesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeGatewayCategoriesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewayClassesRequest extends $tea.Model {
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewayClassesResponseBody extends $tea.Model {
  classes?: string;
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      classes: 'Classes',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classes: 'string',
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

export class DescribeGatewayClassesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeGatewayClassesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeGatewayClassesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewayCredentialRequest extends $tea.Model {
  gatewayId?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'GatewayId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewayCredentialResponseBody extends $tea.Model {
  code?: string;
  consolePassword?: string;
  consoleUsername?: string;
  ecsIp?: string;
  ecsPassword?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  vSwitchId?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      consolePassword: 'ConsolePassword',
      consoleUsername: 'ConsoleUsername',
      ecsIp: 'EcsIp',
      ecsPassword: 'EcsPassword',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      consolePassword: 'string',
      consoleUsername: 'string',
      ecsIp: 'string',
      ecsPassword: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewayCredentialResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeGatewayCredentialResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeGatewayCredentialResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewayDNSRequest extends $tea.Model {
  gatewayId?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'GatewayId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewayDNSResponseBody extends $tea.Model {
  code?: string;
  dnsServer?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      dnsServer: 'DnsServer',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dnsServer: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewayDNSResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeGatewayDNSResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeGatewayDNSResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewayFileSharesRequest extends $tea.Model {
  gatewayId?: string;
  indexId?: string;
  refresh?: boolean;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'GatewayId',
      indexId: 'IndexId',
      refresh: 'Refresh',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      indexId: 'string',
      refresh: 'boolean',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewayFileSharesResponseBody extends $tea.Model {
  code?: string;
  fileShares?: DescribeGatewayFileSharesResponseBodyFileShares;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      fileShares: 'FileShares',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      fileShares: DescribeGatewayFileSharesResponseBodyFileShares,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewayFileSharesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeGatewayFileSharesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeGatewayFileSharesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewayFileStatusRequest extends $tea.Model {
  filePath?: string;
  gatewayId?: string;
  indexId?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      filePath: 'FilePath',
      gatewayId: 'GatewayId',
      indexId: 'IndexId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filePath: 'string',
      gatewayId: 'string',
      indexId: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewayFileStatusResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  status?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      status: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewayFileStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeGatewayFileStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeGatewayFileStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewayImagesRequest extends $tea.Model {
  securityToken?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewayImagesResponseBody extends $tea.Model {
  code?: string;
  images?: DescribeGatewayImagesResponseBodyImages;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      images: 'Images',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      images: DescribeGatewayImagesResponseBodyImages,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewayImagesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeGatewayImagesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeGatewayImagesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewayInfoRequest extends $tea.Model {
  gatewayId?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'GatewayId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewayInfoResponseBody extends $tea.Model {
  code?: string;
  gatewayInfos?: DescribeGatewayInfoResponseBodyGatewayInfos;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      gatewayInfos: 'GatewayInfos',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      gatewayInfos: DescribeGatewayInfoResponseBodyGatewayInfos,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewayInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeGatewayInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeGatewayInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewayLDAPInfoRequest extends $tea.Model {
  gatewayId?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'GatewayId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewayLDAPInfoResponseBody extends $tea.Model {
  baseDN?: string;
  code?: string;
  isEnabled?: boolean;
  isTls?: boolean;
  message?: string;
  requestId?: string;
  rootDN?: string;
  serverIp?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      baseDN: 'BaseDN',
      code: 'Code',
      isEnabled: 'IsEnabled',
      isTls: 'IsTls',
      message: 'Message',
      requestId: 'RequestId',
      rootDN: 'RootDN',
      serverIp: 'ServerIp',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseDN: 'string',
      code: 'string',
      isEnabled: 'boolean',
      isTls: 'boolean',
      message: 'string',
      requestId: 'string',
      rootDN: 'string',
      serverIp: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewayLDAPInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeGatewayLDAPInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeGatewayLDAPInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewayLocationsRequest extends $tea.Model {
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewayLocationsResponseBody extends $tea.Model {
  code?: string;
  locations?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      locations: 'Locations',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      locations: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewayLocationsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeGatewayLocationsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeGatewayLocationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewayLoggingRequest extends $tea.Model {
  gatewayId?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'GatewayId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewayLoggingResponseBody extends $tea.Model {
  code?: string;
  gatewayLoggingStatus?: string;
  message?: string;
  requestId?: string;
  slsLogstore?: string;
  slsProject?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      gatewayLoggingStatus: 'GatewayLoggingStatus',
      message: 'Message',
      requestId: 'RequestId',
      slsLogstore: 'SlsLogstore',
      slsProject: 'SlsProject',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      gatewayLoggingStatus: 'string',
      message: 'string',
      requestId: 'string',
      slsLogstore: 'string',
      slsProject: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewayLoggingResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeGatewayLoggingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeGatewayLoggingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewayLogsRequest extends $tea.Model {
  gatewayId?: string;
  logFilePath?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'GatewayId',
      logFilePath: 'LogFilePath',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      logFilePath: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewayLogsResponseBody extends $tea.Model {
  code?: string;
  logFilePaths?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      logFilePaths: 'LogFilePaths',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      logFilePaths: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewayLogsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeGatewayLogsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeGatewayLogsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewayModificationClassesRequest extends $tea.Model {
  gatewayId?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'GatewayId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewayModificationClassesResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  targetGatewayClasses?: DescribeGatewayModificationClassesResponseBodyTargetGatewayClasses;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      targetGatewayClasses: 'TargetGatewayClasses',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      targetGatewayClasses: DescribeGatewayModificationClassesResponseBodyTargetGatewayClasses,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewayModificationClassesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeGatewayModificationClassesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeGatewayModificationClassesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewayNFSClientsRequest extends $tea.Model {
  gatewayId?: string;
  pageNumber?: number;
  pageSize?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'GatewayId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewayNFSClientsResponseBody extends $tea.Model {
  clientInfoList?: DescribeGatewayNFSClientsResponseBodyClientInfoList;
  code?: string;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  version3Enabled?: boolean;
  version40Enabled?: boolean;
  version41Enabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      clientInfoList: 'ClientInfoList',
      code: 'Code',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
      version3Enabled: 'Version3Enabled',
      version40Enabled: 'Version40Enabled',
      version41Enabled: 'Version41Enabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientInfoList: DescribeGatewayNFSClientsResponseBodyClientInfoList,
      code: 'string',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
      version3Enabled: 'boolean',
      version40Enabled: 'boolean',
      version41Enabled: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewayNFSClientsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeGatewayNFSClientsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeGatewayNFSClientsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewaySMBUsersRequest extends $tea.Model {
  gatewayId?: string;
  pageNumber?: number;
  pageSize?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'GatewayId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewaySMBUsersResponseBody extends $tea.Model {
  activeDirectory?: boolean;
  code?: string;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  users?: DescribeGatewaySMBUsersResponseBodyUsers;
  static names(): { [key: string]: string } {
    return {
      activeDirectory: 'ActiveDirectory',
      code: 'Code',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeDirectory: 'boolean',
      code: 'string',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
      users: DescribeGatewaySMBUsersResponseBodyUsers,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewaySMBUsersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeGatewaySMBUsersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeGatewaySMBUsersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewayStatisticsRequest extends $tea.Model {
  endTimestamp?: number;
  gatewayCategory?: string;
  gatewayLocation?: string;
  securityToken?: string;
  startTimestamp?: number;
  targetAccountId?: string;
  static names(): { [key: string]: string } {
    return {
      endTimestamp: 'EndTimestamp',
      gatewayCategory: 'GatewayCategory',
      gatewayLocation: 'GatewayLocation',
      securityToken: 'SecurityToken',
      startTimestamp: 'StartTimestamp',
      targetAccountId: 'TargetAccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTimestamp: 'number',
      gatewayCategory: 'string',
      gatewayLocation: 'string',
      securityToken: 'string',
      startTimestamp: 'number',
      targetAccountId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewayStatisticsResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  result?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewayStatisticsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeGatewayStatisticsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeGatewayStatisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewayStockRequest extends $tea.Model {
  gatewayRegionId?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayRegionId: 'GatewayRegionId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayRegionId: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewayStockResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  stocks?: DescribeGatewayStockResponseBodyStocks;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      stocks: 'Stocks',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      stocks: DescribeGatewayStockResponseBodyStocks,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewayStockResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeGatewayStockResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeGatewayStockResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewayTypesRequest extends $tea.Model {
  gatewayLocation?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayLocation: 'GatewayLocation',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayLocation: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewayTypesResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  types?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      types: 'Types',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      types: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewayTypesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeGatewayTypesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeGatewayTypesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewaysRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  securityToken?: string;
  storageBundleId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      securityToken: 'SecurityToken',
      storageBundleId: 'StorageBundleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      securityToken: 'string',
      storageBundleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewaysResponseBody extends $tea.Model {
  code?: string;
  gateways?: DescribeGatewaysResponseBodyGateways;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      gateways: 'Gateways',
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
      gateways: DescribeGatewaysResponseBodyGateways,
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

export class DescribeGatewaysResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeGatewaysResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeGatewaysResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewaysForCmsRequest extends $tea.Model {
  gatewayRegionId?: string;
  pageNumber?: number;
  pageSize?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayRegionId: 'GatewayRegionId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayRegionId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewaysForCmsResponseBody extends $tea.Model {
  code?: string;
  gateways?: DescribeGatewaysForCmsResponseBodyGateways;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      gateways: 'Gateways',
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
      gateways: DescribeGatewaysForCmsResponseBodyGateways,
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

export class DescribeGatewaysForCmsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeGatewaysForCmsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeGatewaysForCmsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewaysTagsRequest extends $tea.Model {
  gatewayIds?: string;
  securityToken?: string;
  storageBundleId?: string;
  tagCategory?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayIds: 'GatewayIds',
      securityToken: 'SecurityToken',
      storageBundleId: 'StorageBundleId',
      tagCategory: 'TagCategory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayIds: 'string',
      securityToken: 'string',
      storageBundleId: 'string',
      tagCategory: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewaysTagsResponseBody extends $tea.Model {
  code?: string;
  gatewayTags?: DescribeGatewaysTagsResponseBodyGatewayTags;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      gatewayTags: 'GatewayTags',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      gatewayTags: DescribeGatewaysTagsResponseBodyGatewayTags,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewaysTagsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeGatewaysTagsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeGatewaysTagsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeKmsKeyRequest extends $tea.Model {
  gatewayId?: string;
  kmsKey?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'GatewayId',
      kmsKey: 'KmsKey',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      kmsKey: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeKmsKeyResponseBody extends $tea.Model {
  code?: string;
  isValid?: boolean;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isValid: 'IsValid',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isValid: 'boolean',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeKmsKeyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeKmsKeyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeKmsKeyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMqttConfigRequest extends $tea.Model {
  gatewayId?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'GatewayId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMqttConfigResponseBody extends $tea.Model {
  authType?: string;
  brokerUrl?: string;
  code?: string;
  groupId?: string;
  internalBrokerUrl?: string;
  isEnabled?: boolean;
  message?: string;
  mqttInstanceId?: string;
  password?: string;
  publishTopic?: string;
  requestId?: string;
  subscribeTopic?: string;
  success?: boolean;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      authType: 'AuthType',
      brokerUrl: 'BrokerUrl',
      code: 'Code',
      groupId: 'GroupId',
      internalBrokerUrl: 'InternalBrokerUrl',
      isEnabled: 'IsEnabled',
      message: 'Message',
      mqttInstanceId: 'MqttInstanceId',
      password: 'Password',
      publishTopic: 'PublishTopic',
      requestId: 'RequestId',
      subscribeTopic: 'SubscribeTopic',
      success: 'Success',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authType: 'string',
      brokerUrl: 'string',
      code: 'string',
      groupId: 'string',
      internalBrokerUrl: 'string',
      isEnabled: 'boolean',
      message: 'string',
      mqttInstanceId: 'string',
      password: 'string',
      publishTopic: 'string',
      requestId: 'string',
      subscribeTopic: 'string',
      success: 'boolean',
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMqttConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeMqttConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeMqttConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOssBucketInfoRequest extends $tea.Model {
  bucketEndpoint?: string;
  bucketName?: string;
  gatewayId?: string;
  securityToken?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bucketEndpoint: 'BucketEndpoint',
      bucketName: 'BucketName',
      gatewayId: 'GatewayId',
      securityToken: 'SecurityToken',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketEndpoint: 'string',
      bucketName: 'string',
      gatewayId: 'string',
      securityToken: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOssBucketInfoResponseBody extends $tea.Model {
  code?: string;
  isArchive?: boolean;
  isBackToResource?: boolean;
  isColdArchive?: boolean;
  isFresh?: boolean;
  isSupportServerSideEncryption?: boolean;
  isVersioning?: boolean;
  message?: string;
  pollingInterval?: number;
  requestId?: string;
  storageSize?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isArchive: 'IsArchive',
      isBackToResource: 'IsBackToResource',
      isColdArchive: 'IsColdArchive',
      isFresh: 'IsFresh',
      isSupportServerSideEncryption: 'IsSupportServerSideEncryption',
      isVersioning: 'IsVersioning',
      message: 'Message',
      pollingInterval: 'PollingInterval',
      requestId: 'RequestId',
      storageSize: 'StorageSize',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isArchive: 'boolean',
      isBackToResource: 'boolean',
      isColdArchive: 'boolean',
      isFresh: 'boolean',
      isSupportServerSideEncryption: 'boolean',
      isVersioning: 'boolean',
      message: 'string',
      pollingInterval: 'number',
      requestId: 'string',
      storageSize: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOssBucketInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeOssBucketInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeOssBucketInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOssBucketsRequest extends $tea.Model {
  bucketEndpoint?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      bucketEndpoint: 'BucketEndpoint',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketEndpoint: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOssBucketsResponseBody extends $tea.Model {
  buckets?: DescribeOssBucketsResponseBodyBuckets;
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      buckets: 'Buckets',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buckets: DescribeOssBucketsResponseBodyBuckets,
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

export class DescribeOssBucketsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeOssBucketsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeOssBucketsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePayAsYouGoPriceRequest extends $tea.Model {
  gatewayClass?: string;
  regionId?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayClass: 'GatewayClass',
      regionId: 'RegionId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayClass: 'string',
      regionId: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePayAsYouGoPriceResponseBody extends $tea.Model {
  cacheCloudEfficiencySizePrice?: number;
  cacheCloudSSDSizePrice?: number;
  cacheESSDPl1SizePrice?: number;
  code?: string;
  currency?: string;
  gatewayClassPrice?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      cacheCloudEfficiencySizePrice: 'CacheCloudEfficiencySizePrice',
      cacheCloudSSDSizePrice: 'CacheCloudSSDSizePrice',
      cacheESSDPl1SizePrice: 'CacheESSDPl1SizePrice',
      code: 'Code',
      currency: 'Currency',
      gatewayClassPrice: 'GatewayClassPrice',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cacheCloudEfficiencySizePrice: 'number',
      cacheCloudSSDSizePrice: 'number',
      cacheESSDPl1SizePrice: 'number',
      code: 'string',
      currency: 'string',
      gatewayClassPrice: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePayAsYouGoPriceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribePayAsYouGoPriceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribePayAsYouGoPriceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsRequest extends $tea.Model {
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
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

export class DescribeSharesBucketInfoForExpressSyncRequest extends $tea.Model {
  bucketName?: string;
  bucketRegion?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'BucketName',
      bucketRegion: 'BucketRegion',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      bucketRegion: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSharesBucketInfoForExpressSyncResponseBody extends $tea.Model {
  bucketInfos?: DescribeSharesBucketInfoForExpressSyncResponseBodyBucketInfos;
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      bucketInfos: 'BucketInfos',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketInfos: DescribeSharesBucketInfoForExpressSyncResponseBodyBucketInfos,
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

export class DescribeSharesBucketInfoForExpressSyncResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSharesBucketInfoForExpressSyncResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeSharesBucketInfoForExpressSyncResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStorageBundleRequest extends $tea.Model {
  securityToken?: string;
  storageBundleId?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      storageBundleId: 'StorageBundleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      storageBundleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStorageBundleResponseBody extends $tea.Model {
  backendBucketRegionId?: string;
  code?: string;
  createdTime?: number;
  description?: string;
  message?: string;
  name?: string;
  requestId?: string;
  storageBundleId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      backendBucketRegionId: 'BackendBucketRegionId',
      code: 'Code',
      createdTime: 'CreatedTime',
      description: 'Description',
      message: 'Message',
      name: 'Name',
      requestId: 'RequestId',
      storageBundleId: 'StorageBundleId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendBucketRegionId: 'string',
      code: 'string',
      createdTime: 'number',
      description: 'string',
      message: 'string',
      name: 'string',
      requestId: 'string',
      storageBundleId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStorageBundleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeStorageBundleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeStorageBundleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStorageBundlesRequest extends $tea.Model {
  backendBucketRegionId?: string;
  pageNumber?: number;
  pageSize?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      backendBucketRegionId: 'BackendBucketRegionId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendBucketRegionId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStorageBundlesResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  storageBundles?: DescribeStorageBundlesResponseBodyStorageBundles;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      storageBundles: 'StorageBundles',
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
      storageBundles: DescribeStorageBundlesResponseBodyStorageBundles,
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStorageBundlesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeStorageBundlesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeStorageBundlesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSubscriptionPriceRequest extends $tea.Model {
  cacheCloudEfficiencySize?: number;
  cacheESSDPl1Size?: number;
  cacheSSDSize?: number;
  gatewayClass?: string;
  periodQuantity?: number;
  periodUnit?: string;
  regionId?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      cacheCloudEfficiencySize: 'CacheCloudEfficiencySize',
      cacheESSDPl1Size: 'CacheESSDPl1Size',
      cacheSSDSize: 'CacheSSDSize',
      gatewayClass: 'GatewayClass',
      periodQuantity: 'PeriodQuantity',
      periodUnit: 'PeriodUnit',
      regionId: 'RegionId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cacheCloudEfficiencySize: 'number',
      cacheESSDPl1Size: 'number',
      cacheSSDSize: 'number',
      gatewayClass: 'string',
      periodQuantity: 'number',
      periodUnit: 'string',
      regionId: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSubscriptionPriceResponseBody extends $tea.Model {
  code?: string;
  currency?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  tradePrice?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      currency: 'Currency',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      tradePrice: 'TradePrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      currency: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      tradePrice: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSubscriptionPriceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSubscriptionPriceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeSubscriptionPriceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTasksRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  securityToken?: string;
  targetId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      securityToken: 'SecurityToken',
      targetId: 'TargetId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      securityToken: 'string',
      targetId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTasksResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  tasks?: DescribeTasksResponseBodyTasks;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      tasks: 'Tasks',
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
      success: 'boolean',
      tasks: DescribeTasksResponseBodyTasks,
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

export class DescribeUserBusinessStatusRequest extends $tea.Model {
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserBusinessStatusResponseBody extends $tea.Model {
  code?: string;
  isEnabled?: boolean;
  isIndebted?: boolean;
  isIndebtedOverdue?: boolean;
  isRiskControl?: boolean;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isEnabled: 'IsEnabled',
      isIndebted: 'IsIndebted',
      isIndebtedOverdue: 'IsIndebtedOverdue',
      isRiskControl: 'IsRiskControl',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isEnabled: 'boolean',
      isIndebted: 'boolean',
      isIndebtedOverdue: 'boolean',
      isRiskControl: 'boolean',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserBusinessStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeUserBusinessStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeUserBusinessStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVSwitchesRequest extends $tea.Model {
  name?: string;
  pageNumber?: number;
  pageSize?: number;
  resourceRegionId?: string;
  securityToken?: string;
  storageBundleId?: string;
  vSwitchId?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceRegionId: 'ResourceRegionId',
      securityToken: 'SecurityToken',
      storageBundleId: 'StorageBundleId',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceRegionId: 'string',
      securityToken: 'string',
      storageBundleId: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVSwitchesResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  vSwitches?: DescribeVSwitchesResponseBodyVSwitches;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
      vSwitches: 'VSwitches',
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
      vSwitches: DescribeVSwitchesResponseBodyVSwitches,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVSwitchesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeVSwitchesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeVSwitchesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcsRequest extends $tea.Model {
  name?: string;
  pageNumber?: number;
  pageSize?: number;
  resourceRegionId?: string;
  securityToken?: string;
  storageBundleId?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceRegionId: 'ResourceRegionId',
      securityToken: 'SecurityToken',
      storageBundleId: 'StorageBundleId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceRegionId: 'string',
      securityToken: 'string',
      storageBundleId: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcsResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  vpcs?: DescribeVpcsResponseBodyVpcs;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
      vpcs: 'Vpcs',
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
      vpcs: DescribeVpcsResponseBodyVpcs,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeVpcsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeVpcsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesRequest extends $tea.Model {
  regionId?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  zones?: DescribeZonesResponseBodyZones;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      zones: 'Zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      zones: DescribeZonesResponseBodyZones,
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

export class DisableGatewayLoggingRequest extends $tea.Model {
  gatewayId?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'GatewayId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableGatewayLoggingResponseBody extends $tea.Model {
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

export class DisableGatewayLoggingResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DisableGatewayLoggingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DisableGatewayLoggingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableGatewayNFSVersionRequest extends $tea.Model {
  gatewayId?: string;
  NFSVersion?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'GatewayId',
      NFSVersion: 'NFSVersion',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      NFSVersion: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableGatewayNFSVersionResponseBody extends $tea.Model {
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

export class DisableGatewayNFSVersionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DisableGatewayNFSVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DisableGatewayNFSVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableGatewayIpv6Request extends $tea.Model {
  gatewayId?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'GatewayId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableGatewayIpv6ResponseBody extends $tea.Model {
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

export class EnableGatewayIpv6Response extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EnableGatewayIpv6ResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: EnableGatewayIpv6ResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableGatewayLoggingRequest extends $tea.Model {
  gatewayId?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'GatewayId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableGatewayLoggingResponseBody extends $tea.Model {
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

export class EnableGatewayLoggingResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EnableGatewayLoggingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: EnableGatewayLoggingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExpandCacheDiskRequest extends $tea.Model {
  gatewayId?: string;
  localFilePath?: string;
  newSizeInGB?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'GatewayId',
      localFilePath: 'LocalFilePath',
      newSizeInGB: 'NewSizeInGB',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      localFilePath: 'string',
      newSizeInGB: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExpandCacheDiskResponseBody extends $tea.Model {
  buyURL?: string;
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      buyURL: 'BuyURL',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buyURL: 'string',
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

export class ExpandCacheDiskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ExpandCacheDiskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ExpandCacheDiskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExpandGatewayFileShareRequest extends $tea.Model {
  gatewayId?: string;
  indexId?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'GatewayId',
      indexId: 'IndexId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      indexId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExpandGatewayFileShareResponseBody extends $tea.Model {
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

export class ExpandGatewayFileShareResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ExpandGatewayFileShareResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ExpandGatewayFileShareResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExpandGatewayNetworkBandwidthRequest extends $tea.Model {
  gatewayId?: string;
  newNetworkBandwidth?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'GatewayId',
      newNetworkBandwidth: 'NewNetworkBandwidth',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      newNetworkBandwidth: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExpandGatewayNetworkBandwidthResponseBody extends $tea.Model {
  buyURL?: string;
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      buyURL: 'BuyURL',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buyURL: 'string',
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

export class ExpandGatewayNetworkBandwidthResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ExpandGatewayNetworkBandwidthResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ExpandGatewayNetworkBandwidthResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateGatewayTokenRequest extends $tea.Model {
  gatewayId?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'GatewayId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateGatewayTokenResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  token?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class GenerateGatewayTokenResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GenerateGatewayTokenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GenerateGatewayTokenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateMqttTokenRequest extends $tea.Model {
  clientUUID?: string;
  gatewayId?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      clientUUID: 'ClientUUID',
      gatewayId: 'GatewayId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientUUID: 'string',
      gatewayId: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateMqttTokenResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  mqttToken?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      mqttToken: 'MqttToken',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      mqttToken: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateMqttTokenResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GenerateMqttTokenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GenerateMqttTokenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateStsTokenRequest extends $tea.Model {
  expireInSeconds?: number;
  gatewayId?: string;
  securityToken?: string;
  tokenType?: string;
  static names(): { [key: string]: string } {
    return {
      expireInSeconds: 'ExpireInSeconds',
      gatewayId: 'GatewayId',
      securityToken: 'SecurityToken',
      tokenType: 'TokenType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expireInSeconds: 'number',
      gatewayId: 'string',
      securityToken: 'string',
      tokenType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateStsTokenResponseBody extends $tea.Model {
  accessKeyId?: string;
  accessKeySecret?: string;
  code?: string;
  environment?: string;
  expiration?: string;
  message?: string;
  requestId?: string;
  securityToken?: string;
  success?: boolean;
  supportBundleTarget?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
      accessKeySecret: 'AccessKeySecret',
      code: 'Code',
      environment: 'Environment',
      expiration: 'Expiration',
      message: 'Message',
      requestId: 'RequestId',
      securityToken: 'SecurityToken',
      success: 'Success',
      supportBundleTarget: 'SupportBundleTarget',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      accessKeySecret: 'string',
      code: 'string',
      environment: 'string',
      expiration: 'string',
      message: 'string',
      requestId: 'string',
      securityToken: 'string',
      success: 'boolean',
      supportBundleTarget: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateStsTokenResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GenerateStsTokenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GenerateStsTokenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HandleGatewayAutoPlanRequest extends $tea.Model {
  cancel?: boolean;
  delayHours?: number;
  gatewayId?: string;
  planId?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      cancel: 'Cancel',
      delayHours: 'DelayHours',
      gatewayId: 'GatewayId',
      planId: 'PlanId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cancel: 'boolean',
      delayHours: 'number',
      gatewayId: 'string',
      planId: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HandleGatewayAutoPlanResponseBody extends $tea.Model {
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

export class HandleGatewayAutoPlanResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: HandleGatewayAutoPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: HandleGatewayAutoPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequest extends $tea.Model {
  nextToken?: string;
  regionId?: string;
  resourceId?: string[];
  resourceRegionId?: string;
  resourceType?: string;
  securityToken?: string;
  tag?: ListTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceRegionId: 'ResourceRegionId',
      resourceType: 'ResourceType',
      securityToken: 'SecurityToken',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceRegionId: 'string',
      resourceType: 'string',
      securityToken: 'string',
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

export class ModifyGatewayRequest extends $tea.Model {
  description?: string;
  gatewayId?: string;
  name?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      gatewayId: 'GatewayId',
      name: 'Name',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      gatewayId: 'string',
      name: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyGatewayResponseBody extends $tea.Model {
  code?: string;
  gatewayId?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      gatewayId: 'GatewayId',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      gatewayId: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyGatewayResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyGatewayResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyGatewayResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyGatewayBlockVolumeRequest extends $tea.Model {
  cacheConfig?: string;
  gatewayId?: string;
  indexId?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      cacheConfig: 'CacheConfig',
      gatewayId: 'GatewayId',
      indexId: 'IndexId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cacheConfig: 'string',
      gatewayId: 'string',
      indexId: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyGatewayBlockVolumeResponseBody extends $tea.Model {
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

export class ModifyGatewayBlockVolumeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyGatewayBlockVolumeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyGatewayBlockVolumeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyGatewayClassRequest extends $tea.Model {
  gatewayClass?: string;
  gatewayId?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayClass: 'GatewayClass',
      gatewayId: 'GatewayId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayClass: 'string',
      gatewayId: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyGatewayClassResponseBody extends $tea.Model {
  buyURL?: string;
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      buyURL: 'BuyURL',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buyURL: 'string',
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

export class ModifyGatewayClassResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyGatewayClassResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyGatewayClassResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyGatewayFileShareRequest extends $tea.Model {
  cacheConfig?: string;
  gatewayId?: string;
  indexId?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      cacheConfig: 'CacheConfig',
      gatewayId: 'GatewayId',
      indexId: 'IndexId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cacheConfig: 'string',
      gatewayId: 'string',
      indexId: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyGatewayFileShareResponseBody extends $tea.Model {
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

export class ModifyGatewayFileShareResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyGatewayFileShareResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyGatewayFileShareResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyGatewayFileShareWatermarkRequest extends $tea.Model {
  gatewayId?: string;
  indexId?: string;
  securityToken?: string;
  watermark?: number;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'GatewayId',
      indexId: 'IndexId',
      securityToken: 'SecurityToken',
      watermark: 'Watermark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      indexId: 'string',
      securityToken: 'string',
      watermark: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyGatewayFileShareWatermarkResponseBody extends $tea.Model {
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

export class ModifyGatewayFileShareWatermarkResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyGatewayFileShareWatermarkResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyGatewayFileShareWatermarkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyStorageBundleRequest extends $tea.Model {
  description?: string;
  name?: string;
  securityToken?: string;
  storageBundleId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      securityToken: 'SecurityToken',
      storageBundleId: 'StorageBundleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      securityToken: 'string',
      storageBundleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyStorageBundleResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  storageBundleId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      storageBundleId: 'StorageBundleId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      storageBundleId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyStorageBundleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyStorageBundleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyStorageBundleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenSgwServiceResponseBody extends $tea.Model {
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

export class OpenSgwServiceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: OpenSgwServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: OpenSgwServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OperateGatewayRequest extends $tea.Model {
  gatewayId?: string;
  operateAction?: string;
  params?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'GatewayId',
      operateAction: 'OperateAction',
      params: 'Params',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      operateAction: 'string',
      params: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OperateGatewayResponseBody extends $tea.Model {
  buyURL?: string;
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      buyURL: 'BuyURL',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buyURL: 'string',
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

export class OperateGatewayResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: OperateGatewayResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: OperateGatewayResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseServiceRequest extends $tea.Model {
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseServiceResponseBody extends $tea.Model {
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

export class ReleaseServiceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ReleaseServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ReleaseServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveSharesFromExpressSyncRequest extends $tea.Model {
  expressSyncId?: string;
  gatewayShares?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      expressSyncId: 'ExpressSyncId',
      gatewayShares: 'GatewayShares',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expressSyncId: 'string',
      gatewayShares: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveSharesFromExpressSyncResponseBody extends $tea.Model {
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

export class RemoveSharesFromExpressSyncResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RemoveSharesFromExpressSyncResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RemoveSharesFromExpressSyncResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveTagsFromGatewayRequest extends $tea.Model {
  gatewayId?: string;
  securityToken?: string;
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'GatewayId',
      securityToken: 'SecurityToken',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      securityToken: 'string',
      tags: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveTagsFromGatewayResponseBody extends $tea.Model {
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

export class RemoveTagsFromGatewayResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RemoveTagsFromGatewayResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RemoveTagsFromGatewayResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportBlockVolumesRequest extends $tea.Model {
  clientUUID?: string;
  gatewayId?: string;
  info?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      clientUUID: 'ClientUUID',
      gatewayId: 'GatewayId',
      info: 'Info',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientUUID: 'string',
      gatewayId: 'string',
      info: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportBlockVolumesResponseBody extends $tea.Model {
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

export class ReportBlockVolumesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ReportBlockVolumesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ReportBlockVolumesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportFileSharesRequest extends $tea.Model {
  clientUUID?: string;
  gatewayId?: string;
  info?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      clientUUID: 'ClientUUID',
      gatewayId: 'GatewayId',
      info: 'Info',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientUUID: 'string',
      gatewayId: 'string',
      info: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportFileSharesResponseBody extends $tea.Model {
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

export class ReportFileSharesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ReportFileSharesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ReportFileSharesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportGatewayInfoRequest extends $tea.Model {
  clientUUID?: string;
  gatewayId?: string;
  gatewayStatus?: string;
  info?: string;
  securityToken?: string;
  time?: number;
  static names(): { [key: string]: string } {
    return {
      clientUUID: 'ClientUUID',
      gatewayId: 'GatewayId',
      gatewayStatus: 'GatewayStatus',
      info: 'Info',
      securityToken: 'SecurityToken',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientUUID: 'string',
      gatewayId: 'string',
      gatewayStatus: 'string',
      info: 'string',
      securityToken: 'string',
      time: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportGatewayInfoResponseBody extends $tea.Model {
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

export class ReportGatewayInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ReportGatewayInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ReportGatewayInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportGatewayUsageRequest extends $tea.Model {
  clientUUID?: string;
  gatewayId?: string;
  securityToken?: string;
  usage?: string;
  static names(): { [key: string]: string } {
    return {
      clientUUID: 'ClientUUID',
      gatewayId: 'GatewayId',
      securityToken: 'SecurityToken',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientUUID: 'string',
      gatewayId: 'string',
      securityToken: 'string',
      usage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportGatewayUsageResponseBody extends $tea.Model {
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

export class ReportGatewayUsageResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ReportGatewayUsageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ReportGatewayUsageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetGatewayPasswordRequest extends $tea.Model {
  gatewayId?: string;
  password?: string;
  securityToken?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'GatewayId',
      password: 'Password',
      securityToken: 'SecurityToken',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      password: 'string',
      securityToken: 'string',
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetGatewayPasswordResponseBody extends $tea.Model {
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

export class ResetGatewayPasswordResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ResetGatewayPasswordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ResetGatewayPasswordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartFileSharesRequest extends $tea.Model {
  gatewayId?: string;
  securityToken?: string;
  shareProtocol?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'GatewayId',
      securityToken: 'SecurityToken',
      shareProtocol: 'ShareProtocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      securityToken: 'string',
      shareProtocol: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartFileSharesResponseBody extends $tea.Model {
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

export class RestartFileSharesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RestartFileSharesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RestartFileSharesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetGatewayADInfoRequest extends $tea.Model {
  gatewayId?: string;
  isEnabled?: boolean;
  password?: string;
  securityToken?: string;
  serverIp?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'GatewayId',
      isEnabled: 'IsEnabled',
      password: 'Password',
      securityToken: 'SecurityToken',
      serverIp: 'ServerIp',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      isEnabled: 'boolean',
      password: 'string',
      securityToken: 'string',
      serverIp: 'string',
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetGatewayADInfoResponseBody extends $tea.Model {
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

export class SetGatewayADInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetGatewayADInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SetGatewayADInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetGatewayAutoUpgradeConfigurationRequest extends $tea.Model {
  autoUpgradeEndHour?: number;
  autoUpgradeStartHour?: number;
  gatewayId?: string;
  isAutoUpgrade?: boolean;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      autoUpgradeEndHour: 'AutoUpgradeEndHour',
      autoUpgradeStartHour: 'AutoUpgradeStartHour',
      gatewayId: 'GatewayId',
      isAutoUpgrade: 'IsAutoUpgrade',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoUpgradeEndHour: 'number',
      autoUpgradeStartHour: 'number',
      gatewayId: 'string',
      isAutoUpgrade: 'boolean',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetGatewayAutoUpgradeConfigurationResponseBody extends $tea.Model {
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

export class SetGatewayAutoUpgradeConfigurationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetGatewayAutoUpgradeConfigurationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SetGatewayAutoUpgradeConfigurationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetGatewayDNSRequest extends $tea.Model {
  dnsServer?: string;
  gatewayId?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      dnsServer: 'DnsServer',
      gatewayId: 'GatewayId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dnsServer: 'string',
      gatewayId: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetGatewayDNSResponseBody extends $tea.Model {
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

export class SetGatewayDNSResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetGatewayDNSResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SetGatewayDNSResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetGatewayLDAPInfoRequest extends $tea.Model {
  baseDN?: string;
  gatewayId?: string;
  isEnabled?: boolean;
  isTls?: boolean;
  password?: string;
  rootDN?: string;
  securityToken?: string;
  serverIp?: string;
  static names(): { [key: string]: string } {
    return {
      baseDN: 'BaseDN',
      gatewayId: 'GatewayId',
      isEnabled: 'IsEnabled',
      isTls: 'IsTls',
      password: 'Password',
      rootDN: 'RootDN',
      securityToken: 'SecurityToken',
      serverIp: 'ServerIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseDN: 'string',
      gatewayId: 'string',
      isEnabled: 'boolean',
      isTls: 'boolean',
      password: 'string',
      rootDN: 'string',
      securityToken: 'string',
      serverIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetGatewayLDAPInfoResponseBody extends $tea.Model {
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

export class SetGatewayLDAPInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetGatewayLDAPInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SetGatewayLDAPInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SwitchCSGClientsReverseSyncConfigurationRequest extends $tea.Model {
  clientIds?: string[];
  clientRegionId?: string;
  isReverseSync?: boolean;
  reverseSyncInternalSecond?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      clientIds: 'ClientIds',
      clientRegionId: 'ClientRegionId',
      isReverseSync: 'IsReverseSync',
      reverseSyncInternalSecond: 'ReverseSyncInternalSecond',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIds: { 'type': 'array', 'itemType': 'string' },
      clientRegionId: 'string',
      isReverseSync: 'boolean',
      reverseSyncInternalSecond: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SwitchCSGClientsReverseSyncConfigurationShrinkRequest extends $tea.Model {
  clientIdsShrink?: string;
  clientRegionId?: string;
  isReverseSync?: boolean;
  reverseSyncInternalSecond?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      clientIdsShrink: 'ClientIds',
      clientRegionId: 'ClientRegionId',
      isReverseSync: 'IsReverseSync',
      reverseSyncInternalSecond: 'ReverseSyncInternalSecond',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIdsShrink: 'string',
      clientRegionId: 'string',
      isReverseSync: 'boolean',
      reverseSyncInternalSecond: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SwitchCSGClientsReverseSyncConfigurationResponseBody extends $tea.Model {
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

export class SwitchCSGClientsReverseSyncConfigurationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SwitchCSGClientsReverseSyncConfigurationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SwitchCSGClientsReverseSyncConfigurationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SwitchGatewayExpirationPolicyRequest extends $tea.Model {
  gatewayId?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'GatewayId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SwitchGatewayExpirationPolicyResponseBody extends $tea.Model {
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

export class SwitchGatewayExpirationPolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SwitchGatewayExpirationPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SwitchGatewayExpirationPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SwitchToSubscriptionRequest extends $tea.Model {
  gatewayId?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'GatewayId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SwitchToSubscriptionResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  subscriptionURL?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      subscriptionURL: 'SubscriptionURL',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      subscriptionURL: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SwitchToSubscriptionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SwitchToSubscriptionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SwitchToSubscriptionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequest extends $tea.Model {
  regionId?: string;
  resourceId?: string[];
  resourceRegionId?: string;
  resourceType?: string;
  securityToken?: string;
  tag?: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceRegionId: 'ResourceRegionId',
      resourceType: 'ResourceType',
      securityToken: 'SecurityToken',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceRegionId: 'string',
      resourceType: 'string',
      securityToken: 'string',
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

export class TriggerGatewayRemoteSyncRequest extends $tea.Model {
  gatewayId?: string;
  indexId?: string;
  path?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'GatewayId',
      indexId: 'IndexId',
      path: 'Path',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      indexId: 'string',
      path: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TriggerGatewayRemoteSyncResponseBody extends $tea.Model {
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

export class TriggerGatewayRemoteSyncResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TriggerGatewayRemoteSyncResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: TriggerGatewayRemoteSyncResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesRequest extends $tea.Model {
  all?: boolean;
  regionId?: string;
  resourceId?: string[];
  resourceRegionId?: string;
  resourceType?: string;
  securityToken?: string;
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceRegionId: 'ResourceRegionId',
      resourceType: 'ResourceType',
      securityToken: 'SecurityToken',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceRegionId: 'string',
      resourceType: 'string',
      securityToken: 'string',
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

export class UpdateGatewayBlockVolumeRequest extends $tea.Model {
  chapEnabled?: boolean;
  chapInPassword?: string;
  chapInUser?: string;
  gatewayId?: string;
  indexId?: string;
  securityToken?: string;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      chapEnabled: 'ChapEnabled',
      chapInPassword: 'ChapInPassword',
      chapInUser: 'ChapInUser',
      gatewayId: 'GatewayId',
      indexId: 'IndexId',
      securityToken: 'SecurityToken',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chapEnabled: 'boolean',
      chapInPassword: 'string',
      chapInUser: 'string',
      gatewayId: 'string',
      indexId: 'string',
      securityToken: 'string',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayBlockVolumeResponseBody extends $tea.Model {
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

export class UpdateGatewayBlockVolumeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateGatewayBlockVolumeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateGatewayBlockVolumeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayFileShareRequest extends $tea.Model {
  accessBasedEnumeration?: boolean;
  backendLimit?: number;
  browsable?: boolean;
  bypassCacheRead?: boolean;
  cacheMode?: string;
  clientSideCmk?: string;
  clientSideEncryption?: boolean;
  directIO?: boolean;
  downloadLimit?: number;
  fastReclaim?: boolean;
  frontendLimit?: number;
  gatewayId?: string;
  ignoreDelete?: boolean;
  inPlace?: boolean;
  indexId?: string;
  kmsRotatePeriod?: number;
  lagPeriod?: number;
  name?: string;
  nfsV4Optimization?: boolean;
  pollingInterval?: number;
  readOnlyClientList?: string;
  readOnlyUserList?: string;
  readWriteClientList?: string;
  readWriteUserList?: string;
  remoteSync?: boolean;
  remoteSyncDownload?: boolean;
  securityToken?: string;
  serverSideCmk?: string;
  serverSideEncryption?: boolean;
  squash?: string;
  transferAcceleration?: boolean;
  windowsAcl?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessBasedEnumeration: 'AccessBasedEnumeration',
      backendLimit: 'BackendLimit',
      browsable: 'Browsable',
      bypassCacheRead: 'BypassCacheRead',
      cacheMode: 'CacheMode',
      clientSideCmk: 'ClientSideCmk',
      clientSideEncryption: 'ClientSideEncryption',
      directIO: 'DirectIO',
      downloadLimit: 'DownloadLimit',
      fastReclaim: 'FastReclaim',
      frontendLimit: 'FrontendLimit',
      gatewayId: 'GatewayId',
      ignoreDelete: 'IgnoreDelete',
      inPlace: 'InPlace',
      indexId: 'IndexId',
      kmsRotatePeriod: 'KmsRotatePeriod',
      lagPeriod: 'LagPeriod',
      name: 'Name',
      nfsV4Optimization: 'NfsV4Optimization',
      pollingInterval: 'PollingInterval',
      readOnlyClientList: 'ReadOnlyClientList',
      readOnlyUserList: 'ReadOnlyUserList',
      readWriteClientList: 'ReadWriteClientList',
      readWriteUserList: 'ReadWriteUserList',
      remoteSync: 'RemoteSync',
      remoteSyncDownload: 'RemoteSyncDownload',
      securityToken: 'SecurityToken',
      serverSideCmk: 'ServerSideCmk',
      serverSideEncryption: 'ServerSideEncryption',
      squash: 'Squash',
      transferAcceleration: 'TransferAcceleration',
      windowsAcl: 'WindowsAcl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessBasedEnumeration: 'boolean',
      backendLimit: 'number',
      browsable: 'boolean',
      bypassCacheRead: 'boolean',
      cacheMode: 'string',
      clientSideCmk: 'string',
      clientSideEncryption: 'boolean',
      directIO: 'boolean',
      downloadLimit: 'number',
      fastReclaim: 'boolean',
      frontendLimit: 'number',
      gatewayId: 'string',
      ignoreDelete: 'boolean',
      inPlace: 'boolean',
      indexId: 'string',
      kmsRotatePeriod: 'number',
      lagPeriod: 'number',
      name: 'string',
      nfsV4Optimization: 'boolean',
      pollingInterval: 'number',
      readOnlyClientList: 'string',
      readOnlyUserList: 'string',
      readWriteClientList: 'string',
      readWriteUserList: 'string',
      remoteSync: 'boolean',
      remoteSyncDownload: 'boolean',
      securityToken: 'string',
      serverSideCmk: 'string',
      serverSideEncryption: 'boolean',
      squash: 'string',
      transferAcceleration: 'boolean',
      windowsAcl: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayFileShareResponseBody extends $tea.Model {
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

export class UpdateGatewayFileShareResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateGatewayFileShareResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateGatewayFileShareResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeGatewayRequest extends $tea.Model {
  gatewayId?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'GatewayId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeGatewayResponseBody extends $tea.Model {
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

export class UpgradeGatewayResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpgradeGatewayResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpgradeGatewayResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadCSGClientLogRequest extends $tea.Model {
  clientId?: string;
  clientRegionId?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      clientRegionId: 'ClientRegionId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      clientRegionId: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadCSGClientLogResponseBody extends $tea.Model {
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

export class UploadCSGClientLogResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UploadCSGClientLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UploadCSGClientLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadGatewayLogRequest extends $tea.Model {
  gatewayId?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'GatewayId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadGatewayLogResponseBody extends $tea.Model {
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

export class UploadGatewayLogResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UploadGatewayLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UploadGatewayLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateExpressSyncConfigRequest extends $tea.Model {
  bucketName?: string;
  bucketPrefix?: string;
  bucketRegion?: string;
  name?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'BucketName',
      bucketPrefix: 'BucketPrefix',
      bucketRegion: 'BucketRegion',
      name: 'Name',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      bucketPrefix: 'string',
      bucketRegion: 'string',
      name: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateExpressSyncConfigResponseBody extends $tea.Model {
  code?: string;
  isValid?: boolean;
  message?: string;
  requestId?: string;
  success?: boolean;
  validateMessage?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isValid: 'IsValid',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      validateMessage: 'ValidateMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isValid: 'boolean',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      validateMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateExpressSyncConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ValidateExpressSyncConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ValidateExpressSyncConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateGatewayNameRequest extends $tea.Model {
  name?: string;
  storageBundleId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      storageBundleId: 'StorageBundleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      storageBundleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateGatewayNameResponseBody extends $tea.Model {
  code?: string;
  isValid?: boolean;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isValid: 'IsValid',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isValid: 'boolean',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateGatewayNameResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ValidateGatewayNameResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ValidateGatewayNameResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckUpgradeVersionResponseBodyPatchesPatch extends $tea.Model {
  internalUrl?: string;
  MD5?: string;
  name?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      internalUrl: 'InternalUrl',
      MD5: 'MD5',
      name: 'Name',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      internalUrl: 'string',
      MD5: 'string',
      name: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckUpgradeVersionResponseBodyPatches extends $tea.Model {
  patch?: CheckUpgradeVersionResponseBodyPatchesPatch[];
  static names(): { [key: string]: string } {
    return {
      patch: 'Patch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      patch: { 'type': 'array', 'itemType': CheckUpgradeVersionResponseBodyPatchesPatch },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBlockVolumeSnapshotsResponseBodySnapshotsSnapshot extends $tea.Model {
  createTime?: number;
  size?: number;
  snapshotName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      size: 'Size',
      snapshotName: 'SnapshotName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      size: 'number',
      snapshotName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBlockVolumeSnapshotsResponseBodySnapshots extends $tea.Model {
  snapshot?: DescribeBlockVolumeSnapshotsResponseBodySnapshotsSnapshot[];
  static names(): { [key: string]: string } {
    return {
      snapshot: 'Snapshot',
    };
  }

  static types(): { [key: string]: any } {
    return {
      snapshot: { 'type': 'array', 'itemType': DescribeBlockVolumeSnapshotsResponseBodySnapshotsSnapshot },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCSGClientTasksResponseBodyTasks extends $tea.Model {
  createdTime?: number;
  messageKey?: string;
  messageParams?: string;
  name?: string;
  progress?: number;
  stateCode?: string;
  taskId?: string;
  updatedTime?: number;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      messageKey: 'MessageKey',
      messageParams: 'MessageParams',
      name: 'Name',
      progress: 'Progress',
      stateCode: 'StateCode',
      taskId: 'TaskId',
      updatedTime: 'UpdatedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'number',
      messageKey: 'string',
      messageParams: 'string',
      name: 'string',
      progress: 'number',
      stateCode: 'string',
      taskId: 'string',
      updatedTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCSGClientsResponseBodyClients extends $tea.Model {
  clientDeletionCommand?: string;
  clientId?: string;
  clientInstallationCommand?: string;
  clientVersion?: string;
  ecsInstanceId?: string;
  hostInstanceId?: string;
  lastHeartbeatTime?: number;
  status?: string;
  vpcId?: string;
  workDirectory?: string;
  static names(): { [key: string]: string } {
    return {
      clientDeletionCommand: 'ClientDeletionCommand',
      clientId: 'ClientId',
      clientInstallationCommand: 'ClientInstallationCommand',
      clientVersion: 'ClientVersion',
      ecsInstanceId: 'EcsInstanceId',
      hostInstanceId: 'HostInstanceId',
      lastHeartbeatTime: 'LastHeartbeatTime',
      status: 'Status',
      vpcId: 'VpcId',
      workDirectory: 'WorkDirectory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientDeletionCommand: 'string',
      clientId: 'string',
      clientInstallationCommand: 'string',
      clientVersion: 'string',
      ecsInstanceId: 'string',
      hostInstanceId: 'string',
      lastHeartbeatTime: 'number',
      status: 'string',
      vpcId: 'string',
      workDirectory: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExpressSyncSharesResponseBodySharesShare extends $tea.Model {
  expressSyncId?: string;
  expressSyncState?: string;
  gatewayId?: string;
  gatewayName?: string;
  gatewayRegion?: string;
  mnsQueue?: string;
  shareName?: string;
  storageBundleId?: string;
  syncProgress?: number;
  static names(): { [key: string]: string } {
    return {
      expressSyncId: 'ExpressSyncId',
      expressSyncState: 'ExpressSyncState',
      gatewayId: 'GatewayId',
      gatewayName: 'GatewayName',
      gatewayRegion: 'GatewayRegion',
      mnsQueue: 'MnsQueue',
      shareName: 'ShareName',
      storageBundleId: 'StorageBundleId',
      syncProgress: 'SyncProgress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expressSyncId: 'string',
      expressSyncState: 'string',
      gatewayId: 'string',
      gatewayName: 'string',
      gatewayRegion: 'string',
      mnsQueue: 'string',
      shareName: 'string',
      storageBundleId: 'string',
      syncProgress: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExpressSyncSharesResponseBodyShares extends $tea.Model {
  share?: DescribeExpressSyncSharesResponseBodySharesShare[];
  static names(): { [key: string]: string } {
    return {
      share: 'Share',
    };
  }

  static types(): { [key: string]: any } {
    return {
      share: { 'type': 'array', 'itemType': DescribeExpressSyncSharesResponseBodySharesShare },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExpressSyncsResponseBodyExpressSyncsExpressSync extends $tea.Model {
  bucketName?: string;
  bucketPrefix?: string;
  bucketRegion?: string;
  description?: string;
  expressSyncId?: string;
  mnsTopic?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'BucketName',
      bucketPrefix: 'BucketPrefix',
      bucketRegion: 'BucketRegion',
      description: 'Description',
      expressSyncId: 'ExpressSyncId',
      mnsTopic: 'MnsTopic',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      bucketPrefix: 'string',
      bucketRegion: 'string',
      description: 'string',
      expressSyncId: 'string',
      mnsTopic: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExpressSyncsResponseBodyExpressSyncs extends $tea.Model {
  expressSync?: DescribeExpressSyncsResponseBodyExpressSyncsExpressSync[];
  static names(): { [key: string]: string } {
    return {
      expressSync: 'ExpressSync',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expressSync: { 'type': 'array', 'itemType': DescribeExpressSyncsResponseBodyExpressSyncsExpressSync },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewayResponseBodyElasticNodes extends $tea.Model {
  elasticNode?: string[];
  static names(): { [key: string]: string } {
    return {
      elasticNode: 'ElasticNode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticNode: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewayActionsResponseBodyActionsAction extends $tea.Model {
  adLdap?: string;
  cache?: string;
  disk?: string;
  gatewayId?: string;
  monitor?: string;
  self?: string;
  smbUser?: string;
  target?: string;
  static names(): { [key: string]: string } {
    return {
      adLdap: 'AdLdap',
      cache: 'Cache',
      disk: 'Disk',
      gatewayId: 'GatewayId',
      monitor: 'Monitor',
      self: 'Self',
      smbUser: 'SmbUser',
      target: 'Target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adLdap: 'string',
      cache: 'string',
      disk: 'string',
      gatewayId: 'string',
      monitor: 'string',
      self: 'string',
      smbUser: 'string',
      target: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewayActionsResponseBodyActions extends $tea.Model {
  action?: DescribeGatewayActionsResponseBodyActionsAction[];
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: { 'type': 'array', 'itemType': DescribeGatewayActionsResponseBodyActionsAction },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewayAutoPlansResponseBodyAutoPlans extends $tea.Model {
  detail?: string;
  endTime?: number;
  event?: string;
  planId?: string;
  startTime?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      detail: 'Detail',
      endTime: 'EndTime',
      event: 'Event',
      planId: 'PlanId',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: 'string',
      endTime: 'number',
      event: 'string',
      planId: 'string',
      startTime: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewayBlockVolumesResponseBodyBlockVolumesBlockVolume extends $tea.Model {
  address?: string;
  cacheMode?: string;
  chapEnabled?: boolean;
  chapInUser?: string;
  chunkSize?: number;
  diskId?: string;
  diskType?: string;
  enabled?: boolean;
  indexId?: string;
  localPath?: string;
  lunId?: number;
  name?: string;
  ossBucketName?: string;
  ossBucketSsl?: boolean;
  ossEndpoint?: string;
  port?: number;
  protocol?: string;
  size?: number;
  state?: string;
  status?: number;
  target?: string;
  totalDownload?: number;
  totalUpload?: number;
  volumeState?: number;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      cacheMode: 'CacheMode',
      chapEnabled: 'ChapEnabled',
      chapInUser: 'ChapInUser',
      chunkSize: 'ChunkSize',
      diskId: 'DiskId',
      diskType: 'DiskType',
      enabled: 'Enabled',
      indexId: 'IndexId',
      localPath: 'LocalPath',
      lunId: 'LunId',
      name: 'Name',
      ossBucketName: 'OssBucketName',
      ossBucketSsl: 'OssBucketSsl',
      ossEndpoint: 'OssEndpoint',
      port: 'Port',
      protocol: 'Protocol',
      size: 'Size',
      state: 'State',
      status: 'Status',
      target: 'Target',
      totalDownload: 'TotalDownload',
      totalUpload: 'TotalUpload',
      volumeState: 'VolumeState',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      cacheMode: 'string',
      chapEnabled: 'boolean',
      chapInUser: 'string',
      chunkSize: 'number',
      diskId: 'string',
      diskType: 'string',
      enabled: 'boolean',
      indexId: 'string',
      localPath: 'string',
      lunId: 'number',
      name: 'string',
      ossBucketName: 'string',
      ossBucketSsl: 'boolean',
      ossEndpoint: 'string',
      port: 'number',
      protocol: 'string',
      size: 'number',
      state: 'string',
      status: 'number',
      target: 'string',
      totalDownload: 'number',
      totalUpload: 'number',
      volumeState: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewayBlockVolumesResponseBodyBlockVolumes extends $tea.Model {
  blockVolume?: DescribeGatewayBlockVolumesResponseBodyBlockVolumesBlockVolume[];
  static names(): { [key: string]: string } {
    return {
      blockVolume: 'BlockVolume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockVolume: { 'type': 'array', 'itemType': DescribeGatewayBlockVolumesResponseBodyBlockVolumesBlockVolume },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewayBucketCachesResponseBodyBucketCachesBucketCache extends $tea.Model {
  bucketName?: string;
  cacheMode?: string;
  cacheStats?: string;
  category?: string;
  gatewayId?: string;
  gatewayName?: string;
  location?: string;
  mountPoint?: string;
  protocol?: string;
  regionId?: string;
  shareName?: string;
  type?: string;
  vpcCidr?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'BucketName',
      cacheMode: 'CacheMode',
      cacheStats: 'CacheStats',
      category: 'Category',
      gatewayId: 'GatewayId',
      gatewayName: 'GatewayName',
      location: 'Location',
      mountPoint: 'MountPoint',
      protocol: 'Protocol',
      regionId: 'RegionId',
      shareName: 'ShareName',
      type: 'Type',
      vpcCidr: 'VpcCidr',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      cacheMode: 'string',
      cacheStats: 'string',
      category: 'string',
      gatewayId: 'string',
      gatewayName: 'string',
      location: 'string',
      mountPoint: 'string',
      protocol: 'string',
      regionId: 'string',
      shareName: 'string',
      type: 'string',
      vpcCidr: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewayBucketCachesResponseBodyBucketCaches extends $tea.Model {
  bucketCache?: DescribeGatewayBucketCachesResponseBodyBucketCachesBucketCache[];
  static names(): { [key: string]: string } {
    return {
      bucketCache: 'BucketCache',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketCache: { 'type': 'array', 'itemType': DescribeGatewayBucketCachesResponseBodyBucketCachesBucketCache },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewayCachesResponseBodyCachesCache extends $tea.Model {
  buyURL?: string;
  cacheId?: string;
  cacheType?: string;
  expireStatus?: number;
  expiredTime?: number;
  iops?: number;
  isDirectExpand?: string;
  isNoPartition?: boolean;
  isUsed?: boolean;
  localFilePath?: string;
  performanceLevel?: string;
  renewURL?: string;
  sizeInGB?: number;
  subscriptionInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      buyURL: 'BuyURL',
      cacheId: 'CacheId',
      cacheType: 'CacheType',
      expireStatus: 'ExpireStatus',
      expiredTime: 'ExpiredTime',
      iops: 'Iops',
      isDirectExpand: 'IsDirectExpand',
      isNoPartition: 'IsNoPartition',
      isUsed: 'IsUsed',
      localFilePath: 'LocalFilePath',
      performanceLevel: 'PerformanceLevel',
      renewURL: 'RenewURL',
      sizeInGB: 'SizeInGB',
      subscriptionInstanceId: 'SubscriptionInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buyURL: 'string',
      cacheId: 'string',
      cacheType: 'string',
      expireStatus: 'number',
      expiredTime: 'number',
      iops: 'number',
      isDirectExpand: 'string',
      isNoPartition: 'boolean',
      isUsed: 'boolean',
      localFilePath: 'string',
      performanceLevel: 'string',
      renewURL: 'string',
      sizeInGB: 'number',
      subscriptionInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewayCachesResponseBodyCaches extends $tea.Model {
  cache?: DescribeGatewayCachesResponseBodyCachesCache[];
  static names(): { [key: string]: string } {
    return {
      cache: 'Cache',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cache: { 'type': 'array', 'itemType': DescribeGatewayCachesResponseBodyCachesCache },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewayFileSharesResponseBodyFileSharesFileShare extends $tea.Model {
  accessBasedEnumeration?: boolean;
  activeMessages?: number;
  address?: string;
  beLimit?: number;
  browsable?: boolean;
  bucketInfos?: string;
  bucketsStub?: boolean;
  bypassCacheRead?: boolean;
  cacheMode?: string;
  clientSideCmk?: string;
  clientSideEncryption?: boolean;
  directIO?: boolean;
  diskId?: string;
  diskType?: string;
  downloadLimit?: number;
  downloadQueue?: number;
  downloadRate?: number;
  enabled?: boolean;
  expressSyncId?: string;
  fastReclaim?: boolean;
  feLimit?: number;
  fileNumLimit?: number;
  fsSizeLimit?: number;
  highWatermark?: number;
  ignoreDelete?: boolean;
  inPlace?: boolean;
  inRate?: number;
  indexId?: string;
  kmsRotatePeriod?: string;
  lagPeriod?: number;
  localPath?: string;
  lowWatermark?: number;
  mnsHealth?: string;
  name?: string;
  nfsV4Optimization?: boolean;
  noPartition?: boolean;
  obsoleteBuckets?: string;
  ossBucketName?: string;
  ossBucketSsl?: boolean;
  ossEndpoint?: string;
  ossHealth?: string;
  ossUsed?: number;
  outRate?: number;
  partialSyncPaths?: string;
  pathPrefix?: string;
  pollingInterval?: number;
  protocol?: string;
  remainingMetaSpace?: number;
  remoteSync?: boolean;
  remoteSyncDownload?: boolean;
  roClientList?: string;
  roUserList?: string;
  rwClientList?: string;
  rwUserList?: string;
  serverSideAlgorithm?: string;
  serverSideCmk?: string;
  serverSideEncryption?: boolean;
  size?: number;
  squash?: string;
  state?: string;
  status?: string;
  supportArchive?: boolean;
  syncProgress?: number;
  throttling?: boolean;
  totalDownload?: number;
  totalUpload?: number;
  transferAcceleration?: boolean;
  uploadQueue?: number;
  used?: number;
  windowsAcl?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessBasedEnumeration: 'AccessBasedEnumeration',
      activeMessages: 'ActiveMessages',
      address: 'Address',
      beLimit: 'BeLimit',
      browsable: 'Browsable',
      bucketInfos: 'BucketInfos',
      bucketsStub: 'BucketsStub',
      bypassCacheRead: 'BypassCacheRead',
      cacheMode: 'CacheMode',
      clientSideCmk: 'ClientSideCmk',
      clientSideEncryption: 'ClientSideEncryption',
      directIO: 'DirectIO',
      diskId: 'DiskId',
      diskType: 'DiskType',
      downloadLimit: 'DownloadLimit',
      downloadQueue: 'DownloadQueue',
      downloadRate: 'DownloadRate',
      enabled: 'Enabled',
      expressSyncId: 'ExpressSyncId',
      fastReclaim: 'FastReclaim',
      feLimit: 'FeLimit',
      fileNumLimit: 'FileNumLimit',
      fsSizeLimit: 'FsSizeLimit',
      highWatermark: 'HighWatermark',
      ignoreDelete: 'IgnoreDelete',
      inPlace: 'InPlace',
      inRate: 'InRate',
      indexId: 'IndexId',
      kmsRotatePeriod: 'KmsRotatePeriod',
      lagPeriod: 'LagPeriod',
      localPath: 'LocalPath',
      lowWatermark: 'LowWatermark',
      mnsHealth: 'MnsHealth',
      name: 'Name',
      nfsV4Optimization: 'NfsV4Optimization',
      noPartition: 'NoPartition',
      obsoleteBuckets: 'ObsoleteBuckets',
      ossBucketName: 'OssBucketName',
      ossBucketSsl: 'OssBucketSsl',
      ossEndpoint: 'OssEndpoint',
      ossHealth: 'OssHealth',
      ossUsed: 'OssUsed',
      outRate: 'OutRate',
      partialSyncPaths: 'PartialSyncPaths',
      pathPrefix: 'PathPrefix',
      pollingInterval: 'PollingInterval',
      protocol: 'Protocol',
      remainingMetaSpace: 'RemainingMetaSpace',
      remoteSync: 'RemoteSync',
      remoteSyncDownload: 'RemoteSyncDownload',
      roClientList: 'RoClientList',
      roUserList: 'RoUserList',
      rwClientList: 'RwClientList',
      rwUserList: 'RwUserList',
      serverSideAlgorithm: 'ServerSideAlgorithm',
      serverSideCmk: 'ServerSideCmk',
      serverSideEncryption: 'ServerSideEncryption',
      size: 'Size',
      squash: 'Squash',
      state: 'State',
      status: 'Status',
      supportArchive: 'SupportArchive',
      syncProgress: 'SyncProgress',
      throttling: 'Throttling',
      totalDownload: 'TotalDownload',
      totalUpload: 'TotalUpload',
      transferAcceleration: 'TransferAcceleration',
      uploadQueue: 'UploadQueue',
      used: 'Used',
      windowsAcl: 'WindowsAcl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessBasedEnumeration: 'boolean',
      activeMessages: 'number',
      address: 'string',
      beLimit: 'number',
      browsable: 'boolean',
      bucketInfos: 'string',
      bucketsStub: 'boolean',
      bypassCacheRead: 'boolean',
      cacheMode: 'string',
      clientSideCmk: 'string',
      clientSideEncryption: 'boolean',
      directIO: 'boolean',
      diskId: 'string',
      diskType: 'string',
      downloadLimit: 'number',
      downloadQueue: 'number',
      downloadRate: 'number',
      enabled: 'boolean',
      expressSyncId: 'string',
      fastReclaim: 'boolean',
      feLimit: 'number',
      fileNumLimit: 'number',
      fsSizeLimit: 'number',
      highWatermark: 'number',
      ignoreDelete: 'boolean',
      inPlace: 'boolean',
      inRate: 'number',
      indexId: 'string',
      kmsRotatePeriod: 'string',
      lagPeriod: 'number',
      localPath: 'string',
      lowWatermark: 'number',
      mnsHealth: 'string',
      name: 'string',
      nfsV4Optimization: 'boolean',
      noPartition: 'boolean',
      obsoleteBuckets: 'string',
      ossBucketName: 'string',
      ossBucketSsl: 'boolean',
      ossEndpoint: 'string',
      ossHealth: 'string',
      ossUsed: 'number',
      outRate: 'number',
      partialSyncPaths: 'string',
      pathPrefix: 'string',
      pollingInterval: 'number',
      protocol: 'string',
      remainingMetaSpace: 'number',
      remoteSync: 'boolean',
      remoteSyncDownload: 'boolean',
      roClientList: 'string',
      roUserList: 'string',
      rwClientList: 'string',
      rwUserList: 'string',
      serverSideAlgorithm: 'string',
      serverSideCmk: 'string',
      serverSideEncryption: 'boolean',
      size: 'number',
      squash: 'string',
      state: 'string',
      status: 'string',
      supportArchive: 'boolean',
      syncProgress: 'number',
      throttling: 'boolean',
      totalDownload: 'number',
      totalUpload: 'number',
      transferAcceleration: 'boolean',
      uploadQueue: 'number',
      used: 'number',
      windowsAcl: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewayFileSharesResponseBodyFileShares extends $tea.Model {
  fileShare?: DescribeGatewayFileSharesResponseBodyFileSharesFileShare[];
  static names(): { [key: string]: string } {
    return {
      fileShare: 'FileShare',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileShare: { 'type': 'array', 'itemType': DescribeGatewayFileSharesResponseBodyFileSharesFileShare },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewayImagesResponseBodyImagesImage extends $tea.Model {
  description?: string;
  MD5?: string;
  modifiedDate?: string;
  name?: string;
  size?: number;
  title?: string;
  type?: string;
  url?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      MD5: 'MD5',
      modifiedDate: 'ModifiedDate',
      name: 'Name',
      size: 'Size',
      title: 'Title',
      type: 'Type',
      url: 'Url',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      MD5: 'string',
      modifiedDate: 'string',
      name: 'string',
      size: 'number',
      title: 'string',
      type: 'string',
      url: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewayImagesResponseBodyImages extends $tea.Model {
  image?: DescribeGatewayImagesResponseBodyImagesImage[];
  static names(): { [key: string]: string } {
    return {
      image: 'Image',
    };
  }

  static types(): { [key: string]: any } {
    return {
      image: { 'type': 'array', 'itemType': DescribeGatewayImagesResponseBodyImagesImage },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewayInfoResponseBodyGatewayInfosGatewayInfo extends $tea.Model {
  info?: string;
  time?: number;
  static names(): { [key: string]: string } {
    return {
      info: 'Info',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      info: 'string',
      time: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewayInfoResponseBodyGatewayInfos extends $tea.Model {
  gatewayInfo?: DescribeGatewayInfoResponseBodyGatewayInfosGatewayInfo[];
  static names(): { [key: string]: string } {
    return {
      gatewayInfo: 'GatewayInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayInfo: { 'type': 'array', 'itemType': DescribeGatewayInfoResponseBodyGatewayInfosGatewayInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewayModificationClassesResponseBodyTargetGatewayClassesTargetGatewayClass extends $tea.Model {
  gatewayClass?: string;
  isAvailable?: boolean;
  static names(): { [key: string]: string } {
    return {
      gatewayClass: 'GatewayClass',
      isAvailable: 'IsAvailable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayClass: 'string',
      isAvailable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewayModificationClassesResponseBodyTargetGatewayClasses extends $tea.Model {
  targetGatewayClass?: DescribeGatewayModificationClassesResponseBodyTargetGatewayClassesTargetGatewayClass[];
  static names(): { [key: string]: string } {
    return {
      targetGatewayClass: 'TargetGatewayClass',
    };
  }

  static types(): { [key: string]: any } {
    return {
      targetGatewayClass: { 'type': 'array', 'itemType': DescribeGatewayModificationClassesResponseBodyTargetGatewayClassesTargetGatewayClass },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewayNFSClientsResponseBodyClientInfoListClientInfo extends $tea.Model {
  clientIpAddr?: string;
  hasNFSv3?: boolean;
  hasNFSv40?: boolean;
  hasNFSv41?: boolean;
  static names(): { [key: string]: string } {
    return {
      clientIpAddr: 'ClientIpAddr',
      hasNFSv3: 'HasNFSv3',
      hasNFSv40: 'HasNFSv40',
      hasNFSv41: 'HasNFSv41',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIpAddr: 'string',
      hasNFSv3: 'boolean',
      hasNFSv40: 'boolean',
      hasNFSv41: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewayNFSClientsResponseBodyClientInfoList extends $tea.Model {
  clientInfo?: DescribeGatewayNFSClientsResponseBodyClientInfoListClientInfo[];
  static names(): { [key: string]: string } {
    return {
      clientInfo: 'ClientInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientInfo: { 'type': 'array', 'itemType': DescribeGatewayNFSClientsResponseBodyClientInfoListClientInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewaySMBUsersResponseBodyUsersUser extends $tea.Model {
  username?: string;
  static names(): { [key: string]: string } {
    return {
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewaySMBUsersResponseBodyUsers extends $tea.Model {
  user?: DescribeGatewaySMBUsersResponseBodyUsersUser[];
  static names(): { [key: string]: string } {
    return {
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      user: { 'type': 'array', 'itemType': DescribeGatewaySMBUsersResponseBodyUsersUser },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewayStockResponseBodyStocksStock extends $tea.Model {
  stockInfo?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      stockInfo: 'StockInfo',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stockInfo: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewayStockResponseBodyStocks extends $tea.Model {
  stock?: DescribeGatewayStockResponseBodyStocksStock[];
  static names(): { [key: string]: string } {
    return {
      stock: 'Stock',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stock: { 'type': 'array', 'itemType': DescribeGatewayStockResponseBodyStocksStock },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewaysResponseBodyGatewaysGatewayElasticNodes extends $tea.Model {
  elasticNode?: string[];
  static names(): { [key: string]: string } {
    return {
      elasticNode: 'ElasticNode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticNode: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewaysResponseBodyGatewaysGateway extends $tea.Model {
  activatedTime?: number;
  buyURL?: string;
  capacity?: number;
  category?: string;
  commonBuyInstanceId?: string;
  createdTime?: number;
  dataLoadInterval?: number;
  dataLoadType?: string;
  description?: string;
  ecsInstanceId?: string;
  elasticGateway?: boolean;
  elasticNodes?: DescribeGatewaysResponseBodyGatewaysGatewayElasticNodes;
  expireStatus?: number;
  expiredTime?: number;
  gatewayClass?: string;
  gatewayId?: string;
  gatewayRegionId?: string;
  gatewayType?: string;
  gatewayVersion?: string;
  highAvailability?: boolean;
  innerIp?: string;
  innerIpv6Ip?: string;
  ip?: string;
  isPostPaid?: boolean;
  isReleaseAfterExpiration?: boolean;
  lastErrorKey?: string;
  location?: string;
  maxThroughput?: number;
  name?: string;
  publicNetworkBandwidth?: number;
  renewURL?: string;
  status?: string;
  storageBundleId?: string;
  taskId?: string;
  type?: string;
  untrustedEnvInstanceType?: string;
  vSwitchId?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      activatedTime: 'ActivatedTime',
      buyURL: 'BuyURL',
      capacity: 'Capacity',
      category: 'Category',
      commonBuyInstanceId: 'CommonBuyInstanceId',
      createdTime: 'CreatedTime',
      dataLoadInterval: 'DataLoadInterval',
      dataLoadType: 'DataLoadType',
      description: 'Description',
      ecsInstanceId: 'EcsInstanceId',
      elasticGateway: 'ElasticGateway',
      elasticNodes: 'ElasticNodes',
      expireStatus: 'ExpireStatus',
      expiredTime: 'ExpiredTime',
      gatewayClass: 'GatewayClass',
      gatewayId: 'GatewayId',
      gatewayRegionId: 'GatewayRegionId',
      gatewayType: 'GatewayType',
      gatewayVersion: 'GatewayVersion',
      highAvailability: 'HighAvailability',
      innerIp: 'InnerIp',
      innerIpv6Ip: 'InnerIpv6Ip',
      ip: 'Ip',
      isPostPaid: 'IsPostPaid',
      isReleaseAfterExpiration: 'IsReleaseAfterExpiration',
      lastErrorKey: 'LastErrorKey',
      location: 'Location',
      maxThroughput: 'MaxThroughput',
      name: 'Name',
      publicNetworkBandwidth: 'PublicNetworkBandwidth',
      renewURL: 'RenewURL',
      status: 'Status',
      storageBundleId: 'StorageBundleId',
      taskId: 'TaskId',
      type: 'Type',
      untrustedEnvInstanceType: 'UntrustedEnvInstanceType',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activatedTime: 'number',
      buyURL: 'string',
      capacity: 'number',
      category: 'string',
      commonBuyInstanceId: 'string',
      createdTime: 'number',
      dataLoadInterval: 'number',
      dataLoadType: 'string',
      description: 'string',
      ecsInstanceId: 'string',
      elasticGateway: 'boolean',
      elasticNodes: DescribeGatewaysResponseBodyGatewaysGatewayElasticNodes,
      expireStatus: 'number',
      expiredTime: 'number',
      gatewayClass: 'string',
      gatewayId: 'string',
      gatewayRegionId: 'string',
      gatewayType: 'string',
      gatewayVersion: 'string',
      highAvailability: 'boolean',
      innerIp: 'string',
      innerIpv6Ip: 'string',
      ip: 'string',
      isPostPaid: 'boolean',
      isReleaseAfterExpiration: 'boolean',
      lastErrorKey: 'string',
      location: 'string',
      maxThroughput: 'number',
      name: 'string',
      publicNetworkBandwidth: 'number',
      renewURL: 'string',
      status: 'string',
      storageBundleId: 'string',
      taskId: 'string',
      type: 'string',
      untrustedEnvInstanceType: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewaysResponseBodyGateways extends $tea.Model {
  gateway?: DescribeGatewaysResponseBodyGatewaysGateway[];
  static names(): { [key: string]: string } {
    return {
      gateway: 'Gateway',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gateway: { 'type': 'array', 'itemType': DescribeGatewaysResponseBodyGatewaysGateway },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewaysForCmsResponseBodyGatewaysGateway extends $tea.Model {
  description?: string;
  gatewayId?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      gatewayId: 'GatewayId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      gatewayId: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewaysForCmsResponseBodyGateways extends $tea.Model {
  gateway?: DescribeGatewaysForCmsResponseBodyGatewaysGateway[];
  static names(): { [key: string]: string } {
    return {
      gateway: 'Gateway',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gateway: { 'type': 'array', 'itemType': DescribeGatewaysForCmsResponseBodyGatewaysGateway },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewaysTagsResponseBodyGatewayTagsGatewayTagTagsTag extends $tea.Model {
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewaysTagsResponseBodyGatewayTagsGatewayTagTags extends $tea.Model {
  tag?: DescribeGatewaysTagsResponseBodyGatewayTagsGatewayTagTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeGatewaysTagsResponseBodyGatewayTagsGatewayTagTagsTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewaysTagsResponseBodyGatewayTagsGatewayTag extends $tea.Model {
  gatewayId?: string;
  tags?: DescribeGatewaysTagsResponseBodyGatewayTagsGatewayTagTags;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'GatewayId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      tags: DescribeGatewaysTagsResponseBodyGatewayTagsGatewayTagTags,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewaysTagsResponseBodyGatewayTags extends $tea.Model {
  gatewayTag?: DescribeGatewaysTagsResponseBodyGatewayTagsGatewayTag[];
  static names(): { [key: string]: string } {
    return {
      gatewayTag: 'GatewayTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayTag: { 'type': 'array', 'itemType': DescribeGatewaysTagsResponseBodyGatewayTagsGatewayTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOssBucketsResponseBodyBucketsBucket extends $tea.Model {
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

export class DescribeOssBucketsResponseBodyBuckets extends $tea.Model {
  bucket?: DescribeOssBucketsResponseBodyBucketsBucket[];
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: { 'type': 'array', 'itemType': DescribeOssBucketsResponseBodyBucketsBucket },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegionsRegion extends $tea.Model {
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

export class DescribeSharesBucketInfoForExpressSyncResponseBodyBucketInfosBucketInfo extends $tea.Model {
  bucketName?: string;
  bucketPrefix?: string;
  bucketRegion?: string;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'BucketName',
      bucketPrefix: 'BucketPrefix',
      bucketRegion: 'BucketRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      bucketPrefix: 'string',
      bucketRegion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSharesBucketInfoForExpressSyncResponseBodyBucketInfos extends $tea.Model {
  bucketInfo?: DescribeSharesBucketInfoForExpressSyncResponseBodyBucketInfosBucketInfo[];
  static names(): { [key: string]: string } {
    return {
      bucketInfo: 'BucketInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketInfo: { 'type': 'array', 'itemType': DescribeSharesBucketInfoForExpressSyncResponseBodyBucketInfosBucketInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStorageBundlesResponseBodyStorageBundlesStorageBundle extends $tea.Model {
  backendBucketRegionId?: string;
  createdTime?: number;
  description?: string;
  name?: string;
  storageBundleId?: string;
  static names(): { [key: string]: string } {
    return {
      backendBucketRegionId: 'BackendBucketRegionId',
      createdTime: 'CreatedTime',
      description: 'Description',
      name: 'Name',
      storageBundleId: 'StorageBundleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendBucketRegionId: 'string',
      createdTime: 'number',
      description: 'string',
      name: 'string',
      storageBundleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStorageBundlesResponseBodyStorageBundles extends $tea.Model {
  storageBundle?: DescribeStorageBundlesResponseBodyStorageBundlesStorageBundle[];
  static names(): { [key: string]: string } {
    return {
      storageBundle: 'StorageBundle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      storageBundle: { 'type': 'array', 'itemType': DescribeStorageBundlesResponseBodyStorageBundlesStorageBundle },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTasksResponseBodyTasksSimpleTask extends $tea.Model {
  createdTime?: number;
  messageKey?: string;
  name?: string;
  progress?: number;
  relatedResourceId?: string;
  stateCode?: string;
  taskId?: string;
  updatedTime?: number;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      messageKey: 'MessageKey',
      name: 'Name',
      progress: 'Progress',
      relatedResourceId: 'RelatedResourceId',
      stateCode: 'StateCode',
      taskId: 'TaskId',
      updatedTime: 'UpdatedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'number',
      messageKey: 'string',
      name: 'string',
      progress: 'number',
      relatedResourceId: 'string',
      stateCode: 'string',
      taskId: 'string',
      updatedTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTasksResponseBodyTasks extends $tea.Model {
  simpleTask?: DescribeTasksResponseBodyTasksSimpleTask[];
  static names(): { [key: string]: string } {
    return {
      simpleTask: 'SimpleTask',
    };
  }

  static types(): { [key: string]: any } {
    return {
      simpleTask: { 'type': 'array', 'itemType': DescribeTasksResponseBodyTasksSimpleTask },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVSwitchesResponseBodyVSwitchesVSwitch extends $tea.Model {
  availableSelectionInfo?: string;
  id?: string;
  isDefault?: boolean;
  name?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      availableSelectionInfo: 'AvailableSelectionInfo',
      id: 'Id',
      isDefault: 'IsDefault',
      name: 'Name',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableSelectionInfo: 'string',
      id: 'string',
      isDefault: 'boolean',
      name: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVSwitchesResponseBodyVSwitches extends $tea.Model {
  vSwitch?: DescribeVSwitchesResponseBodyVSwitchesVSwitch[];
  static names(): { [key: string]: string } {
    return {
      vSwitch: 'VSwitch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vSwitch: { 'type': 'array', 'itemType': DescribeVSwitchesResponseBodyVSwitchesVSwitch },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcsResponseBodyVpcsVpc extends $tea.Model {
  cidrBlock?: string;
  id?: string;
  isDefault?: boolean;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      cidrBlock: 'CidrBlock',
      id: 'Id',
      isDefault: 'IsDefault',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrBlock: 'string',
      id: 'string',
      isDefault: 'boolean',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcsResponseBodyVpcs extends $tea.Model {
  vpc?: DescribeVpcsResponseBodyVpcsVpc[];
  static names(): { [key: string]: string } {
    return {
      vpc: 'Vpc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpc: { 'type': 'array', 'itemType': DescribeVpcsResponseBodyVpcsVpc },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponseBodyZonesZone extends $tea.Model {
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponseBodyZones extends $tea.Model {
  zone?: DescribeZonesResponseBodyZonesZone[];
  static names(): { [key: string]: string } {
    return {
      zone: 'Zone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zone: { 'type': 'array', 'itemType': DescribeZonesResponseBodyZonesZone },
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
    this._endpointRule = "regional";
    this._endpointMap = {
      'cn-qingdao': "sgw.cn-shanghai.aliyuncs.com",
      'cn-beijing': "sgw.cn-shanghai.aliyuncs.com",
      'cn-chengdu': "sgw.cn-shanghai.aliyuncs.com",
      'cn-zhangjiakou': "sgw.cn-shanghai.aliyuncs.com",
      'cn-huhehaote': "sgw.cn-shanghai.aliyuncs.com",
      'cn-hangzhou': "sgw.cn-shanghai.aliyuncs.com",
      'cn-shenzhen': "sgw.cn-shanghai.aliyuncs.com",
      'cn-hongkong': "sgw.cn-shanghai.aliyuncs.com",
      'us-east-1': "sgw.us-west-1.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("sgw", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async activateAllInOneGatewayWithOptions(request: ActivateAllInOneGatewayRequest, runtime: $Util.RuntimeOptions): Promise<ActivateAllInOneGatewayResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientUUID)) {
      query["ClientUUID"] = request.clientUUID;
    }

    if (!Util.isUnset(request.deviceNumber)) {
      query["DeviceNumber"] = request.deviceNumber;
    }

    if (!Util.isUnset(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!Util.isUnset(request.model)) {
      query["Model"] = request.model;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.serialNumber)) {
      query["SerialNumber"] = request.serialNumber;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ActivateAllInOneGateway",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ActivateAllInOneGatewayResponse>(await this.callApi(params, req, runtime), new ActivateAllInOneGatewayResponse({}));
  }

  async activateAllInOneGateway(request: ActivateAllInOneGatewayRequest): Promise<ActivateAllInOneGatewayResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.activateAllInOneGatewayWithOptions(request, runtime);
  }

  async activateGatewayWithOptions(request: ActivateGatewayRequest, runtime: $Util.RuntimeOptions): Promise<ActivateGatewayResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.category)) {
      query["Category"] = request.category;
    }

    if (!Util.isUnset(request.clientUUID)) {
      query["ClientUUID"] = request.clientUUID;
    }

    if (!Util.isUnset(request.model)) {
      query["Model"] = request.model;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.serialNumber)) {
      query["SerialNumber"] = request.serialNumber;
    }

    if (!Util.isUnset(request.token)) {
      query["Token"] = request.token;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ActivateGateway",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ActivateGatewayResponse>(await this.callApi(params, req, runtime), new ActivateGatewayResponse({}));
  }

  async activateGateway(request: ActivateGatewayRequest): Promise<ActivateGatewayResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.activateGatewayWithOptions(request, runtime);
  }

  async addSharesToExpressSyncWithOptions(request: AddSharesToExpressSyncRequest, runtime: $Util.RuntimeOptions): Promise<AddSharesToExpressSyncResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.expressSyncId)) {
      query["ExpressSyncId"] = request.expressSyncId;
    }

    if (!Util.isUnset(request.gatewayShares)) {
      query["GatewayShares"] = request.gatewayShares;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddSharesToExpressSync",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddSharesToExpressSyncResponse>(await this.callApi(params, req, runtime), new AddSharesToExpressSyncResponse({}));
  }

  async addSharesToExpressSync(request: AddSharesToExpressSyncRequest): Promise<AddSharesToExpressSyncResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addSharesToExpressSyncWithOptions(request, runtime);
  }

  async addTagsToGatewayWithOptions(request: AddTagsToGatewayRequest, runtime: $Util.RuntimeOptions): Promise<AddTagsToGatewayResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.tags)) {
      query["Tags"] = request.tags;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddTagsToGateway",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddTagsToGatewayResponse>(await this.callApi(params, req, runtime), new AddTagsToGatewayResponse({}));
  }

  async addTagsToGateway(request: AddTagsToGatewayRequest): Promise<AddTagsToGatewayResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addTagsToGatewayWithOptions(request, runtime);
  }

  async checkActivationKeyWithOptions(request: CheckActivationKeyRequest, runtime: $Util.RuntimeOptions): Promise<CheckActivationKeyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cryptKey)) {
      query["CryptKey"] = request.cryptKey;
    }

    if (!Util.isUnset(request.cryptText)) {
      query["CryptText"] = request.cryptText;
    }

    if (!Util.isUnset(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.token)) {
      query["Token"] = request.token;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CheckActivationKey",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckActivationKeyResponse>(await this.callApi(params, req, runtime), new CheckActivationKeyResponse({}));
  }

  async checkActivationKey(request: CheckActivationKeyRequest): Promise<CheckActivationKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkActivationKeyWithOptions(request, runtime);
  }

  async checkBlockVolumeNameWithOptions(request: CheckBlockVolumeNameRequest, runtime: $Util.RuntimeOptions): Promise<CheckBlockVolumeNameResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bucketEndpoint)) {
      query["BucketEndpoint"] = request.bucketEndpoint;
    }

    if (!Util.isUnset(request.bucketName)) {
      query["BucketName"] = request.bucketName;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.volumeName)) {
      query["VolumeName"] = request.volumeName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CheckBlockVolumeName",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckBlockVolumeNameResponse>(await this.callApi(params, req, runtime), new CheckBlockVolumeNameResponse({}));
  }

  async checkBlockVolumeName(request: CheckBlockVolumeNameRequest): Promise<CheckBlockVolumeNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkBlockVolumeNameWithOptions(request, runtime);
  }

  async checkGatewayEssdSupportWithOptions(request: CheckGatewayEssdSupportRequest, runtime: $Util.RuntimeOptions): Promise<CheckGatewayEssdSupportResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CheckGatewayEssdSupport",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckGatewayEssdSupportResponse>(await this.callApi(params, req, runtime), new CheckGatewayEssdSupportResponse({}));
  }

  async checkGatewayEssdSupport(request: CheckGatewayEssdSupportRequest): Promise<CheckGatewayEssdSupportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkGatewayEssdSupportWithOptions(request, runtime);
  }

  async checkMnsServiceWithOptions(request: CheckMnsServiceRequest, runtime: $Util.RuntimeOptions): Promise<CheckMnsServiceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CheckMnsService",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckMnsServiceResponse>(await this.callApi(params, req, runtime), new CheckMnsServiceResponse({}));
  }

  async checkMnsService(request: CheckMnsServiceRequest): Promise<CheckMnsServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkMnsServiceWithOptions(request, runtime);
  }

  async checkRoleWithOptions(request: CheckRoleRequest, runtime: $Util.RuntimeOptions): Promise<CheckRoleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.roleType)) {
      query["RoleType"] = request.roleType;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CheckRole",
      version: "2018-05-11",
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

  async checkSlrRoleWithOptions(request: CheckSlrRoleRequest, runtime: $Util.RuntimeOptions): Promise<CheckSlrRoleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.createIfNotExist)) {
      query["CreateIfNotExist"] = request.createIfNotExist;
    }

    if (!Util.isUnset(request.roleName)) {
      query["RoleName"] = request.roleName;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CheckSlrRole",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckSlrRoleResponse>(await this.callApi(params, req, runtime), new CheckSlrRoleResponse({}));
  }

  async checkSlrRole(request: CheckSlrRoleRequest): Promise<CheckSlrRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkSlrRoleWithOptions(request, runtime);
  }

  async checkUpgradeVersionWithOptions(request: CheckUpgradeVersionRequest, runtime: $Util.RuntimeOptions): Promise<CheckUpgradeVersionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientUUID)) {
      query["ClientUUID"] = request.clientUUID;
    }

    if (!Util.isUnset(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!Util.isUnset(request.gatewayVersion)) {
      query["GatewayVersion"] = request.gatewayVersion;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CheckUpgradeVersion",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckUpgradeVersionResponse>(await this.callApi(params, req, runtime), new CheckUpgradeVersionResponse({}));
  }

  async checkUpgradeVersion(request: CheckUpgradeVersionRequest): Promise<CheckUpgradeVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkUpgradeVersionWithOptions(request, runtime);
  }

  async createCacheWithOptions(request: CreateCacheRequest, runtime: $Util.RuntimeOptions): Promise<CreateCacheResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.category)) {
      query["Category"] = request.category;
    }

    if (!Util.isUnset(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.sizeInGB)) {
      query["SizeInGB"] = request.sizeInGB;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateCache",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateCacheResponse>(await this.callApi(params, req, runtime), new CreateCacheResponse({}));
  }

  async createCache(request: CreateCacheRequest): Promise<CreateCacheResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCacheWithOptions(request, runtime);
  }

  async createElasticGatewayPrivateZoneWithOptions(request: CreateElasticGatewayPrivateZoneRequest, runtime: $Util.RuntimeOptions): Promise<CreateElasticGatewayPrivateZoneResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateElasticGatewayPrivateZone",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateElasticGatewayPrivateZoneResponse>(await this.callApi(params, req, runtime), new CreateElasticGatewayPrivateZoneResponse({}));
  }

  async createElasticGatewayPrivateZone(request: CreateElasticGatewayPrivateZoneRequest): Promise<CreateElasticGatewayPrivateZoneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createElasticGatewayPrivateZoneWithOptions(request, runtime);
  }

  async createExpressSyncWithOptions(request: CreateExpressSyncRequest, runtime: $Util.RuntimeOptions): Promise<CreateExpressSyncResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bucketName)) {
      query["BucketName"] = request.bucketName;
    }

    if (!Util.isUnset(request.bucketPrefix)) {
      query["BucketPrefix"] = request.bucketPrefix;
    }

    if (!Util.isUnset(request.bucketRegion)) {
      query["BucketRegion"] = request.bucketRegion;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateExpressSync",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateExpressSyncResponse>(await this.callApi(params, req, runtime), new CreateExpressSyncResponse({}));
  }

  async createExpressSync(request: CreateExpressSyncRequest): Promise<CreateExpressSyncResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createExpressSyncWithOptions(request, runtime);
  }

  async createGatewayWithOptions(request: CreateGatewayRequest, runtime: $Util.RuntimeOptions): Promise<CreateGatewayResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.gatewayClass)) {
      query["GatewayClass"] = request.gatewayClass;
    }

    if (!Util.isUnset(request.location)) {
      query["Location"] = request.location;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.postPaid)) {
      query["PostPaid"] = request.postPaid;
    }

    if (!Util.isUnset(request.publicNetworkBandwidth)) {
      query["PublicNetworkBandwidth"] = request.publicNetworkBandwidth;
    }

    if (!Util.isUnset(request.releaseAfterExpiration)) {
      query["ReleaseAfterExpiration"] = request.releaseAfterExpiration;
    }

    if (!Util.isUnset(request.resourceRegionId)) {
      query["ResourceRegionId"] = request.resourceRegionId;
    }

    if (!Util.isUnset(request.secondaryVSwitchId)) {
      query["SecondaryVSwitchId"] = request.secondaryVSwitchId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.storageBundleId)) {
      query["StorageBundleId"] = request.storageBundleId;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    if (!Util.isUnset(request.untrustedEnvId)) {
      query["UntrustedEnvId"] = request.untrustedEnvId;
    }

    if (!Util.isUnset(request.untrustedEnvInstanceType)) {
      query["UntrustedEnvInstanceType"] = request.untrustedEnvInstanceType;
    }

    if (!Util.isUnset(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateGateway",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateGatewayResponse>(await this.callApi(params, req, runtime), new CreateGatewayResponse({}));
  }

  async createGateway(request: CreateGatewayRequest): Promise<CreateGatewayResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createGatewayWithOptions(request, runtime);
  }

  async createGatewayBlockVolumeWithOptions(request: CreateGatewayBlockVolumeRequest, runtime: $Util.RuntimeOptions): Promise<CreateGatewayBlockVolumeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cacheMode)) {
      query["CacheMode"] = request.cacheMode;
    }

    if (!Util.isUnset(request.chapEnabled)) {
      query["ChapEnabled"] = request.chapEnabled;
    }

    if (!Util.isUnset(request.chapInPassword)) {
      query["ChapInPassword"] = request.chapInPassword;
    }

    if (!Util.isUnset(request.chapInUser)) {
      query["ChapInUser"] = request.chapInUser;
    }

    if (!Util.isUnset(request.chunkSize)) {
      query["ChunkSize"] = request.chunkSize;
    }

    if (!Util.isUnset(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!Util.isUnset(request.localFilePath)) {
      query["LocalFilePath"] = request.localFilePath;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.ossBucketName)) {
      query["OssBucketName"] = request.ossBucketName;
    }

    if (!Util.isUnset(request.ossBucketSsl)) {
      query["OssBucketSsl"] = request.ossBucketSsl;
    }

    if (!Util.isUnset(request.ossEndpoint)) {
      query["OssEndpoint"] = request.ossEndpoint;
    }

    if (!Util.isUnset(request.recovery)) {
      query["Recovery"] = request.recovery;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.size)) {
      query["Size"] = request.size;
    }

    if (!Util.isUnset(request.volumeProtocol)) {
      query["VolumeProtocol"] = request.volumeProtocol;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateGatewayBlockVolume",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateGatewayBlockVolumeResponse>(await this.callApi(params, req, runtime), new CreateGatewayBlockVolumeResponse({}));
  }

  async createGatewayBlockVolume(request: CreateGatewayBlockVolumeRequest): Promise<CreateGatewayBlockVolumeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createGatewayBlockVolumeWithOptions(request, runtime);
  }

  async createGatewayCacheDiskWithOptions(request: CreateGatewayCacheDiskRequest, runtime: $Util.RuntimeOptions): Promise<CreateGatewayCacheDiskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cacheDiskCategory)) {
      query["CacheDiskCategory"] = request.cacheDiskCategory;
    }

    if (!Util.isUnset(request.cacheDiskSizeInGB)) {
      query["CacheDiskSizeInGB"] = request.cacheDiskSizeInGB;
    }

    if (!Util.isUnset(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!Util.isUnset(request.performanceLevel)) {
      query["PerformanceLevel"] = request.performanceLevel;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateGatewayCacheDisk",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateGatewayCacheDiskResponse>(await this.callApi(params, req, runtime), new CreateGatewayCacheDiskResponse({}));
  }

  async createGatewayCacheDisk(request: CreateGatewayCacheDiskRequest): Promise<CreateGatewayCacheDiskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createGatewayCacheDiskWithOptions(request, runtime);
  }

  async createGatewayFileShareWithOptions(request: CreateGatewayFileShareRequest, runtime: $Util.RuntimeOptions): Promise<CreateGatewayFileShareResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accessBasedEnumeration)) {
      query["AccessBasedEnumeration"] = request.accessBasedEnumeration;
    }

    if (!Util.isUnset(request.backendLimit)) {
      query["BackendLimit"] = request.backendLimit;
    }

    if (!Util.isUnset(request.browsable)) {
      query["Browsable"] = request.browsable;
    }

    if (!Util.isUnset(request.bypassCacheRead)) {
      query["BypassCacheRead"] = request.bypassCacheRead;
    }

    if (!Util.isUnset(request.cacheMode)) {
      query["CacheMode"] = request.cacheMode;
    }

    if (!Util.isUnset(request.clientSideCmk)) {
      query["ClientSideCmk"] = request.clientSideCmk;
    }

    if (!Util.isUnset(request.clientSideEncryption)) {
      query["ClientSideEncryption"] = request.clientSideEncryption;
    }

    if (!Util.isUnset(request.directIO)) {
      query["DirectIO"] = request.directIO;
    }

    if (!Util.isUnset(request.downloadLimit)) {
      query["DownloadLimit"] = request.downloadLimit;
    }

    if (!Util.isUnset(request.fastReclaim)) {
      query["FastReclaim"] = request.fastReclaim;
    }

    if (!Util.isUnset(request.frontendLimit)) {
      query["FrontendLimit"] = request.frontendLimit;
    }

    if (!Util.isUnset(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!Util.isUnset(request.ignoreDelete)) {
      query["IgnoreDelete"] = request.ignoreDelete;
    }

    if (!Util.isUnset(request.inPlace)) {
      query["InPlace"] = request.inPlace;
    }

    if (!Util.isUnset(request.kmsRotatePeriod)) {
      query["KmsRotatePeriod"] = request.kmsRotatePeriod;
    }

    if (!Util.isUnset(request.lagPeriod)) {
      query["LagPeriod"] = request.lagPeriod;
    }

    if (!Util.isUnset(request.localFilePath)) {
      query["LocalFilePath"] = request.localFilePath;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.nfsV4Optimization)) {
      query["NfsV4Optimization"] = request.nfsV4Optimization;
    }

    if (!Util.isUnset(request.ossBucketName)) {
      query["OssBucketName"] = request.ossBucketName;
    }

    if (!Util.isUnset(request.ossBucketSsl)) {
      query["OssBucketSsl"] = request.ossBucketSsl;
    }

    if (!Util.isUnset(request.ossEndpoint)) {
      query["OssEndpoint"] = request.ossEndpoint;
    }

    if (!Util.isUnset(request.partialSyncPaths)) {
      query["PartialSyncPaths"] = request.partialSyncPaths;
    }

    if (!Util.isUnset(request.pathPrefix)) {
      query["PathPrefix"] = request.pathPrefix;
    }

    if (!Util.isUnset(request.pollingInterval)) {
      query["PollingInterval"] = request.pollingInterval;
    }

    if (!Util.isUnset(request.readOnlyClientList)) {
      query["ReadOnlyClientList"] = request.readOnlyClientList;
    }

    if (!Util.isUnset(request.readOnlyUserList)) {
      query["ReadOnlyUserList"] = request.readOnlyUserList;
    }

    if (!Util.isUnset(request.readWriteClientList)) {
      query["ReadWriteClientList"] = request.readWriteClientList;
    }

    if (!Util.isUnset(request.readWriteUserList)) {
      query["ReadWriteUserList"] = request.readWriteUserList;
    }

    if (!Util.isUnset(request.remoteSync)) {
      query["RemoteSync"] = request.remoteSync;
    }

    if (!Util.isUnset(request.remoteSyncDownload)) {
      query["RemoteSyncDownload"] = request.remoteSyncDownload;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.serverSideAlgorithm)) {
      query["ServerSideAlgorithm"] = request.serverSideAlgorithm;
    }

    if (!Util.isUnset(request.serverSideCmk)) {
      query["ServerSideCmk"] = request.serverSideCmk;
    }

    if (!Util.isUnset(request.serverSideEncryption)) {
      query["ServerSideEncryption"] = request.serverSideEncryption;
    }

    if (!Util.isUnset(request.shareProtocol)) {
      query["ShareProtocol"] = request.shareProtocol;
    }

    if (!Util.isUnset(request.squash)) {
      query["Squash"] = request.squash;
    }

    if (!Util.isUnset(request.supportArchive)) {
      query["SupportArchive"] = request.supportArchive;
    }

    if (!Util.isUnset(request.transferAcceleration)) {
      query["TransferAcceleration"] = request.transferAcceleration;
    }

    if (!Util.isUnset(request.windowsAcl)) {
      query["WindowsAcl"] = request.windowsAcl;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateGatewayFileShare",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateGatewayFileShareResponse>(await this.callApi(params, req, runtime), new CreateGatewayFileShareResponse({}));
  }

  async createGatewayFileShare(request: CreateGatewayFileShareRequest): Promise<CreateGatewayFileShareResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createGatewayFileShareWithOptions(request, runtime);
  }

  async createGatewayLoggingWithOptions(request: CreateGatewayLoggingRequest, runtime: $Util.RuntimeOptions): Promise<CreateGatewayLoggingResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.slsLogstore)) {
      query["SlsLogstore"] = request.slsLogstore;
    }

    if (!Util.isUnset(request.slsProject)) {
      query["SlsProject"] = request.slsProject;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateGatewayLogging",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateGatewayLoggingResponse>(await this.callApi(params, req, runtime), new CreateGatewayLoggingResponse({}));
  }

  async createGatewayLogging(request: CreateGatewayLoggingRequest): Promise<CreateGatewayLoggingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createGatewayLoggingWithOptions(request, runtime);
  }

  async createGatewaySMBUserWithOptions(request: CreateGatewaySMBUserRequest, runtime: $Util.RuntimeOptions): Promise<CreateGatewaySMBUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!Util.isUnset(request.password)) {
      query["Password"] = request.password;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.username)) {
      query["Username"] = request.username;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateGatewaySMBUser",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateGatewaySMBUserResponse>(await this.callApi(params, req, runtime), new CreateGatewaySMBUserResponse({}));
  }

  async createGatewaySMBUser(request: CreateGatewaySMBUserRequest): Promise<CreateGatewaySMBUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createGatewaySMBUserWithOptions(request, runtime);
  }

  async createStorageBundleWithOptions(request: CreateStorageBundleRequest, runtime: $Util.RuntimeOptions): Promise<CreateStorageBundleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backendBucketRegionId)) {
      query["BackendBucketRegionId"] = request.backendBucketRegionId;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateStorageBundle",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateStorageBundleResponse>(await this.callApi(params, req, runtime), new CreateStorageBundleResponse({}));
  }

  async createStorageBundle(request: CreateStorageBundleRequest): Promise<CreateStorageBundleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createStorageBundleWithOptions(request, runtime);
  }

  async deleteCSGClientsWithOptions(tmpReq: DeleteCSGClientsRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCSGClientsResponse> {
    Util.validateModel(tmpReq);
    let request = new DeleteCSGClientsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.clientIds)) {
      request.clientIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.clientIds, "ClientIds", "json");
    }

    let query = { };
    if (!Util.isUnset(request.clientIdsShrink)) {
      query["ClientIds"] = request.clientIdsShrink;
    }

    if (!Util.isUnset(request.clientRegionId)) {
      query["ClientRegionId"] = request.clientRegionId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteCSGClients",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteCSGClientsResponse>(await this.callApi(params, req, runtime), new DeleteCSGClientsResponse({}));
  }

  async deleteCSGClients(request: DeleteCSGClientsRequest): Promise<DeleteCSGClientsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCSGClientsWithOptions(request, runtime);
  }

  async deleteElasticGatewayPrivateZoneWithOptions(request: DeleteElasticGatewayPrivateZoneRequest, runtime: $Util.RuntimeOptions): Promise<DeleteElasticGatewayPrivateZoneResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteElasticGatewayPrivateZone",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteElasticGatewayPrivateZoneResponse>(await this.callApi(params, req, runtime), new DeleteElasticGatewayPrivateZoneResponse({}));
  }

  async deleteElasticGatewayPrivateZone(request: DeleteElasticGatewayPrivateZoneRequest): Promise<DeleteElasticGatewayPrivateZoneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteElasticGatewayPrivateZoneWithOptions(request, runtime);
  }

  async deleteExpressSyncWithOptions(request: DeleteExpressSyncRequest, runtime: $Util.RuntimeOptions): Promise<DeleteExpressSyncResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.expressSyncId)) {
      query["ExpressSyncId"] = request.expressSyncId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteExpressSync",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteExpressSyncResponse>(await this.callApi(params, req, runtime), new DeleteExpressSyncResponse({}));
  }

  async deleteExpressSync(request: DeleteExpressSyncRequest): Promise<DeleteExpressSyncResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteExpressSyncWithOptions(request, runtime);
  }

  async deleteGatewayWithOptions(request: DeleteGatewayRequest, runtime: $Util.RuntimeOptions): Promise<DeleteGatewayResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!Util.isUnset(request.reasonDetail)) {
      query["ReasonDetail"] = request.reasonDetail;
    }

    if (!Util.isUnset(request.reasonType)) {
      query["ReasonType"] = request.reasonType;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteGateway",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteGatewayResponse>(await this.callApi(params, req, runtime), new DeleteGatewayResponse({}));
  }

  async deleteGateway(request: DeleteGatewayRequest): Promise<DeleteGatewayResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteGatewayWithOptions(request, runtime);
  }

  async deleteGatewayBlockVolumesWithOptions(request: DeleteGatewayBlockVolumesRequest, runtime: $Util.RuntimeOptions): Promise<DeleteGatewayBlockVolumesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!Util.isUnset(request.indexId)) {
      query["IndexId"] = request.indexId;
    }

    if (!Util.isUnset(request.isSourceDeletion)) {
      query["IsSourceDeletion"] = request.isSourceDeletion;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteGatewayBlockVolumes",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteGatewayBlockVolumesResponse>(await this.callApi(params, req, runtime), new DeleteGatewayBlockVolumesResponse({}));
  }

  async deleteGatewayBlockVolumes(request: DeleteGatewayBlockVolumesRequest): Promise<DeleteGatewayBlockVolumesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteGatewayBlockVolumesWithOptions(request, runtime);
  }

  async deleteGatewayCacheDiskWithOptions(request: DeleteGatewayCacheDiskRequest, runtime: $Util.RuntimeOptions): Promise<DeleteGatewayCacheDiskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cacheId)) {
      query["CacheId"] = request.cacheId;
    }

    if (!Util.isUnset(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!Util.isUnset(request.localFilePath)) {
      query["LocalFilePath"] = request.localFilePath;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteGatewayCacheDisk",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteGatewayCacheDiskResponse>(await this.callApi(params, req, runtime), new DeleteGatewayCacheDiskResponse({}));
  }

  async deleteGatewayCacheDisk(request: DeleteGatewayCacheDiskRequest): Promise<DeleteGatewayCacheDiskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteGatewayCacheDiskWithOptions(request, runtime);
  }

  async deleteGatewayFileSharesWithOptions(request: DeleteGatewayFileSharesRequest, runtime: $Util.RuntimeOptions): Promise<DeleteGatewayFileSharesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.force)) {
      query["Force"] = request.force;
    }

    if (!Util.isUnset(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!Util.isUnset(request.indexId)) {
      query["IndexId"] = request.indexId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteGatewayFileShares",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteGatewayFileSharesResponse>(await this.callApi(params, req, runtime), new DeleteGatewayFileSharesResponse({}));
  }

  async deleteGatewayFileShares(request: DeleteGatewayFileSharesRequest): Promise<DeleteGatewayFileSharesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteGatewayFileSharesWithOptions(request, runtime);
  }

  async deleteGatewayLoggingWithOptions(request: DeleteGatewayLoggingRequest, runtime: $Util.RuntimeOptions): Promise<DeleteGatewayLoggingResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteGatewayLogging",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteGatewayLoggingResponse>(await this.callApi(params, req, runtime), new DeleteGatewayLoggingResponse({}));
  }

  async deleteGatewayLogging(request: DeleteGatewayLoggingRequest): Promise<DeleteGatewayLoggingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteGatewayLoggingWithOptions(request, runtime);
  }

  async deleteGatewaySMBUserWithOptions(request: DeleteGatewaySMBUserRequest, runtime: $Util.RuntimeOptions): Promise<DeleteGatewaySMBUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.username)) {
      query["Username"] = request.username;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteGatewaySMBUser",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteGatewaySMBUserResponse>(await this.callApi(params, req, runtime), new DeleteGatewaySMBUserResponse({}));
  }

  async deleteGatewaySMBUser(request: DeleteGatewaySMBUserRequest): Promise<DeleteGatewaySMBUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteGatewaySMBUserWithOptions(request, runtime);
  }

  async deleteStorageBundleWithOptions(request: DeleteStorageBundleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteStorageBundleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.storageBundleId)) {
      query["StorageBundleId"] = request.storageBundleId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteStorageBundle",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteStorageBundleResponse>(await this.callApi(params, req, runtime), new DeleteStorageBundleResponse({}));
  }

  async deleteStorageBundle(request: DeleteStorageBundleRequest): Promise<DeleteStorageBundleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteStorageBundleWithOptions(request, runtime);
  }

  async deployCSGClientsWithOptions(tmpReq: DeployCSGClientsRequest, runtime: $Util.RuntimeOptions): Promise<DeployCSGClientsResponse> {
    Util.validateModel(tmpReq);
    let request = new DeployCSGClientsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.ecsInstanceIds)) {
      request.ecsInstanceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ecsInstanceIds, "EcsInstanceIds", "json");
    }

    let query = { };
    if (!Util.isUnset(request.clientRegionId)) {
      query["ClientRegionId"] = request.clientRegionId;
    }

    if (!Util.isUnset(request.ecsInstanceIdsShrink)) {
      query["EcsInstanceIds"] = request.ecsInstanceIdsShrink;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeployCSGClients",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeployCSGClientsResponse>(await this.callApi(params, req, runtime), new DeployCSGClientsResponse({}));
  }

  async deployCSGClients(request: DeployCSGClientsRequest): Promise<DeployCSGClientsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deployCSGClientsWithOptions(request, runtime);
  }

  async deployCacheDiskWithOptions(request: DeployCacheDiskRequest, runtime: $Util.RuntimeOptions): Promise<DeployCacheDiskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cacheConfig)) {
      query["CacheConfig"] = request.cacheConfig;
    }

    if (!Util.isUnset(request.diskCategory)) {
      query["DiskCategory"] = request.diskCategory;
    }

    if (!Util.isUnset(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.sizeInGB)) {
      query["SizeInGB"] = request.sizeInGB;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeployCacheDisk",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeployCacheDiskResponse>(await this.callApi(params, req, runtime), new DeployCacheDiskResponse({}));
  }

  async deployCacheDisk(request: DeployCacheDiskRequest): Promise<DeployCacheDiskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deployCacheDiskWithOptions(request, runtime);
  }

  async deployGatewayWithOptions(request: DeployGatewayRequest, runtime: $Util.RuntimeOptions): Promise<DeployGatewayResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.gatewayClass)) {
      query["GatewayClass"] = request.gatewayClass;
    }

    if (!Util.isUnset(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeployGateway",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeployGatewayResponse>(await this.callApi(params, req, runtime), new DeployGatewayResponse({}));
  }

  async deployGateway(request: DeployGatewayRequest): Promise<DeployGatewayResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deployGatewayWithOptions(request, runtime);
  }

  async describeAccountConfigWithOptions(request: DescribeAccountConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAccountConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAccountConfig",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAccountConfigResponse>(await this.callApi(params, req, runtime), new DescribeAccountConfigResponse({}));
  }

  async describeAccountConfig(request: DescribeAccountConfigRequest): Promise<DescribeAccountConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAccountConfigWithOptions(request, runtime);
  }

  async describeBlockVolumeSnapshotsWithOptions(request: DescribeBlockVolumeSnapshotsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBlockVolumeSnapshotsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!Util.isUnset(request.indexId)) {
      query["IndexId"] = request.indexId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeBlockVolumeSnapshots",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeBlockVolumeSnapshotsResponse>(await this.callApi(params, req, runtime), new DescribeBlockVolumeSnapshotsResponse({}));
  }

  async describeBlockVolumeSnapshots(request: DescribeBlockVolumeSnapshotsRequest): Promise<DescribeBlockVolumeSnapshotsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBlockVolumeSnapshotsWithOptions(request, runtime);
  }

  async describeCSGClientTasksWithOptions(request: DescribeCSGClientTasksRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCSGClientTasksResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!Util.isUnset(request.clientRegionId)) {
      query["ClientRegionId"] = request.clientRegionId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCSGClientTasks",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCSGClientTasksResponse>(await this.callApi(params, req, runtime), new DescribeCSGClientTasksResponse({}));
  }

  async describeCSGClientTasks(request: DescribeCSGClientTasksRequest): Promise<DescribeCSGClientTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCSGClientTasksWithOptions(request, runtime);
  }

  async describeCSGClientsWithOptions(request: DescribeCSGClientsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCSGClientsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientRegionId)) {
      query["ClientRegionId"] = request.clientRegionId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCSGClients",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCSGClientsResponse>(await this.callApi(params, req, runtime), new DescribeCSGClientsResponse({}));
  }

  async describeCSGClients(request: DescribeCSGClientsRequest): Promise<DescribeCSGClientsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCSGClientsWithOptions(request, runtime);
  }

  async describeDashboardWithOptions(request: DescribeDashboardRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDashboardResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backendBucketRegionId)) {
      query["BackendBucketRegionId"] = request.backendBucketRegionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDashboard",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDashboardResponse>(await this.callApi(params, req, runtime), new DescribeDashboardResponse({}));
  }

  async describeDashboard(request: DescribeDashboardRequest): Promise<DescribeDashboardResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDashboardWithOptions(request, runtime);
  }

  async describeExpireCachesWithOptions(request: DescribeExpireCachesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeExpireCachesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeExpireCaches",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeExpireCachesResponse>(await this.callApi(params, req, runtime), new DescribeExpireCachesResponse({}));
  }

  async describeExpireCaches(request: DescribeExpireCachesRequest): Promise<DescribeExpireCachesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeExpireCachesWithOptions(request, runtime);
  }

  async describeExpressSyncSharesWithOptions(request: DescribeExpressSyncSharesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeExpressSyncSharesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.expressSyncIds)) {
      query["ExpressSyncIds"] = request.expressSyncIds;
    }

    if (!Util.isUnset(request.isExternal)) {
      query["IsExternal"] = request.isExternal;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeExpressSyncShares",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeExpressSyncSharesResponse>(await this.callApi(params, req, runtime), new DescribeExpressSyncSharesResponse({}));
  }

  async describeExpressSyncShares(request: DescribeExpressSyncSharesRequest): Promise<DescribeExpressSyncSharesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeExpressSyncSharesWithOptions(request, runtime);
  }

  async describeExpressSyncsWithOptions(request: DescribeExpressSyncsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeExpressSyncsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bucketName)) {
      query["BucketName"] = request.bucketName;
    }

    if (!Util.isUnset(request.bucketPrefix)) {
      query["BucketPrefix"] = request.bucketPrefix;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeExpressSyncs",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeExpressSyncsResponse>(await this.callApi(params, req, runtime), new DescribeExpressSyncsResponse({}));
  }

  async describeExpressSyncs(request: DescribeExpressSyncsRequest): Promise<DescribeExpressSyncsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeExpressSyncsWithOptions(request, runtime);
  }

  async describeGatewayWithOptions(request: DescribeGatewayRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGatewayResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeGateway",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeGatewayResponse>(await this.callApi(params, req, runtime), new DescribeGatewayResponse({}));
  }

  async describeGateway(request: DescribeGatewayRequest): Promise<DescribeGatewayResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGatewayWithOptions(request, runtime);
  }

  async describeGatewayADInfoWithOptions(request: DescribeGatewayADInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGatewayADInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeGatewayADInfo",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeGatewayADInfoResponse>(await this.callApi(params, req, runtime), new DescribeGatewayADInfoResponse({}));
  }

  async describeGatewayADInfo(request: DescribeGatewayADInfoRequest): Promise<DescribeGatewayADInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGatewayADInfoWithOptions(request, runtime);
  }

  async describeGatewayActionsWithOptions(request: DescribeGatewayActionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGatewayActionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeGatewayActions",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeGatewayActionsResponse>(await this.callApi(params, req, runtime), new DescribeGatewayActionsResponse({}));
  }

  async describeGatewayActions(request: DescribeGatewayActionsRequest): Promise<DescribeGatewayActionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGatewayActionsWithOptions(request, runtime);
  }

  async describeGatewayAuthInfoWithOptions(request: DescribeGatewayAuthInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGatewayAuthInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeGatewayAuthInfo",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeGatewayAuthInfoResponse>(await this.callApi(params, req, runtime), new DescribeGatewayAuthInfoResponse({}));
  }

  async describeGatewayAuthInfo(request: DescribeGatewayAuthInfoRequest): Promise<DescribeGatewayAuthInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGatewayAuthInfoWithOptions(request, runtime);
  }

  async describeGatewayAutoPlansWithOptions(request: DescribeGatewayAutoPlansRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGatewayAutoPlansResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeGatewayAutoPlans",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeGatewayAutoPlansResponse>(await this.callApi(params, req, runtime), new DescribeGatewayAutoPlansResponse({}));
  }

  async describeGatewayAutoPlans(request: DescribeGatewayAutoPlansRequest): Promise<DescribeGatewayAutoPlansResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGatewayAutoPlansWithOptions(request, runtime);
  }

  async describeGatewayAutoUpgradeConfigurationWithOptions(request: DescribeGatewayAutoUpgradeConfigurationRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGatewayAutoUpgradeConfigurationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeGatewayAutoUpgradeConfiguration",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeGatewayAutoUpgradeConfigurationResponse>(await this.callApi(params, req, runtime), new DescribeGatewayAutoUpgradeConfigurationResponse({}));
  }

  async describeGatewayAutoUpgradeConfiguration(request: DescribeGatewayAutoUpgradeConfigurationRequest): Promise<DescribeGatewayAutoUpgradeConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGatewayAutoUpgradeConfigurationWithOptions(request, runtime);
  }

  /**
    * ****
    *
    * @param request DescribeGatewayBlockVolumesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeGatewayBlockVolumesResponse
   */
  async describeGatewayBlockVolumesWithOptions(request: DescribeGatewayBlockVolumesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGatewayBlockVolumesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!Util.isUnset(request.indexId)) {
      query["IndexId"] = request.indexId;
    }

    if (!Util.isUnset(request.refresh)) {
      query["Refresh"] = request.refresh;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeGatewayBlockVolumes",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeGatewayBlockVolumesResponse>(await this.callApi(params, req, runtime), new DescribeGatewayBlockVolumesResponse({}));
  }

  /**
    * ****
    *
    * @param request DescribeGatewayBlockVolumesRequest
    * @return DescribeGatewayBlockVolumesResponse
   */
  async describeGatewayBlockVolumes(request: DescribeGatewayBlockVolumesRequest): Promise<DescribeGatewayBlockVolumesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGatewayBlockVolumesWithOptions(request, runtime);
  }

  async describeGatewayBucketCachesWithOptions(request: DescribeGatewayBucketCachesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGatewayBucketCachesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bucketName)) {
      query["BucketName"] = request.bucketName;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeGatewayBucketCaches",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeGatewayBucketCachesResponse>(await this.callApi(params, req, runtime), new DescribeGatewayBucketCachesResponse({}));
  }

  async describeGatewayBucketCaches(request: DescribeGatewayBucketCachesRequest): Promise<DescribeGatewayBucketCachesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGatewayBucketCachesWithOptions(request, runtime);
  }

  async describeGatewayCachesWithOptions(request: DescribeGatewayCachesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGatewayCachesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeGatewayCaches",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeGatewayCachesResponse>(await this.callApi(params, req, runtime), new DescribeGatewayCachesResponse({}));
  }

  async describeGatewayCaches(request: DescribeGatewayCachesRequest): Promise<DescribeGatewayCachesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGatewayCachesWithOptions(request, runtime);
  }

  async describeGatewayCapacityLimitWithOptions(request: DescribeGatewayCapacityLimitRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGatewayCapacityLimitResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.sizeInGB)) {
      query["SizeInGB"] = request.sizeInGB;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeGatewayCapacityLimit",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeGatewayCapacityLimitResponse>(await this.callApi(params, req, runtime), new DescribeGatewayCapacityLimitResponse({}));
  }

  async describeGatewayCapacityLimit(request: DescribeGatewayCapacityLimitRequest): Promise<DescribeGatewayCapacityLimitResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGatewayCapacityLimitWithOptions(request, runtime);
  }

  async describeGatewayCategoriesWithOptions(request: DescribeGatewayCategoriesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGatewayCategoriesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.gatewayLocation)) {
      query["GatewayLocation"] = request.gatewayLocation;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeGatewayCategories",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeGatewayCategoriesResponse>(await this.callApi(params, req, runtime), new DescribeGatewayCategoriesResponse({}));
  }

  async describeGatewayCategories(request: DescribeGatewayCategoriesRequest): Promise<DescribeGatewayCategoriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGatewayCategoriesWithOptions(request, runtime);
  }

  async describeGatewayClassesWithOptions(request: DescribeGatewayClassesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGatewayClassesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeGatewayClasses",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeGatewayClassesResponse>(await this.callApi(params, req, runtime), new DescribeGatewayClassesResponse({}));
  }

  async describeGatewayClasses(request: DescribeGatewayClassesRequest): Promise<DescribeGatewayClassesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGatewayClassesWithOptions(request, runtime);
  }

  async describeGatewayCredentialWithOptions(request: DescribeGatewayCredentialRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGatewayCredentialResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeGatewayCredential",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeGatewayCredentialResponse>(await this.callApi(params, req, runtime), new DescribeGatewayCredentialResponse({}));
  }

  async describeGatewayCredential(request: DescribeGatewayCredentialRequest): Promise<DescribeGatewayCredentialResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGatewayCredentialWithOptions(request, runtime);
  }

  async describeGatewayDNSWithOptions(request: DescribeGatewayDNSRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGatewayDNSResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeGatewayDNS",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeGatewayDNSResponse>(await this.callApi(params, req, runtime), new DescribeGatewayDNSResponse({}));
  }

  async describeGatewayDNS(request: DescribeGatewayDNSRequest): Promise<DescribeGatewayDNSResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGatewayDNSWithOptions(request, runtime);
  }

  async describeGatewayFileSharesWithOptions(request: DescribeGatewayFileSharesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGatewayFileSharesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!Util.isUnset(request.indexId)) {
      query["IndexId"] = request.indexId;
    }

    if (!Util.isUnset(request.refresh)) {
      query["Refresh"] = request.refresh;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeGatewayFileShares",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeGatewayFileSharesResponse>(await this.callApi(params, req, runtime), new DescribeGatewayFileSharesResponse({}));
  }

  async describeGatewayFileShares(request: DescribeGatewayFileSharesRequest): Promise<DescribeGatewayFileSharesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGatewayFileSharesWithOptions(request, runtime);
  }

  async describeGatewayFileStatusWithOptions(request: DescribeGatewayFileStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGatewayFileStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.filePath)) {
      query["FilePath"] = request.filePath;
    }

    if (!Util.isUnset(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!Util.isUnset(request.indexId)) {
      query["IndexId"] = request.indexId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeGatewayFileStatus",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeGatewayFileStatusResponse>(await this.callApi(params, req, runtime), new DescribeGatewayFileStatusResponse({}));
  }

  async describeGatewayFileStatus(request: DescribeGatewayFileStatusRequest): Promise<DescribeGatewayFileStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGatewayFileStatusWithOptions(request, runtime);
  }

  async describeGatewayImagesWithOptions(request: DescribeGatewayImagesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGatewayImagesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeGatewayImages",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeGatewayImagesResponse>(await this.callApi(params, req, runtime), new DescribeGatewayImagesResponse({}));
  }

  async describeGatewayImages(request: DescribeGatewayImagesRequest): Promise<DescribeGatewayImagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGatewayImagesWithOptions(request, runtime);
  }

  async describeGatewayInfoWithOptions(request: DescribeGatewayInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGatewayInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeGatewayInfo",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeGatewayInfoResponse>(await this.callApi(params, req, runtime), new DescribeGatewayInfoResponse({}));
  }

  async describeGatewayInfo(request: DescribeGatewayInfoRequest): Promise<DescribeGatewayInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGatewayInfoWithOptions(request, runtime);
  }

  async describeGatewayLDAPInfoWithOptions(request: DescribeGatewayLDAPInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGatewayLDAPInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeGatewayLDAPInfo",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeGatewayLDAPInfoResponse>(await this.callApi(params, req, runtime), new DescribeGatewayLDAPInfoResponse({}));
  }

  async describeGatewayLDAPInfo(request: DescribeGatewayLDAPInfoRequest): Promise<DescribeGatewayLDAPInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGatewayLDAPInfoWithOptions(request, runtime);
  }

  async describeGatewayLocationsWithOptions(request: DescribeGatewayLocationsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGatewayLocationsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeGatewayLocations",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeGatewayLocationsResponse>(await this.callApi(params, req, runtime), new DescribeGatewayLocationsResponse({}));
  }

  async describeGatewayLocations(request: DescribeGatewayLocationsRequest): Promise<DescribeGatewayLocationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGatewayLocationsWithOptions(request, runtime);
  }

  async describeGatewayLoggingWithOptions(request: DescribeGatewayLoggingRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGatewayLoggingResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeGatewayLogging",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeGatewayLoggingResponse>(await this.callApi(params, req, runtime), new DescribeGatewayLoggingResponse({}));
  }

  async describeGatewayLogging(request: DescribeGatewayLoggingRequest): Promise<DescribeGatewayLoggingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGatewayLoggingWithOptions(request, runtime);
  }

  async describeGatewayLogsWithOptions(request: DescribeGatewayLogsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGatewayLogsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!Util.isUnset(request.logFilePath)) {
      query["LogFilePath"] = request.logFilePath;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeGatewayLogs",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeGatewayLogsResponse>(await this.callApi(params, req, runtime), new DescribeGatewayLogsResponse({}));
  }

  async describeGatewayLogs(request: DescribeGatewayLogsRequest): Promise<DescribeGatewayLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGatewayLogsWithOptions(request, runtime);
  }

  async describeGatewayModificationClassesWithOptions(request: DescribeGatewayModificationClassesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGatewayModificationClassesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeGatewayModificationClasses",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeGatewayModificationClassesResponse>(await this.callApi(params, req, runtime), new DescribeGatewayModificationClassesResponse({}));
  }

  async describeGatewayModificationClasses(request: DescribeGatewayModificationClassesRequest): Promise<DescribeGatewayModificationClassesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGatewayModificationClassesWithOptions(request, runtime);
  }

  async describeGatewayNFSClientsWithOptions(request: DescribeGatewayNFSClientsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGatewayNFSClientsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeGatewayNFSClients",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeGatewayNFSClientsResponse>(await this.callApi(params, req, runtime), new DescribeGatewayNFSClientsResponse({}));
  }

  async describeGatewayNFSClients(request: DescribeGatewayNFSClientsRequest): Promise<DescribeGatewayNFSClientsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGatewayNFSClientsWithOptions(request, runtime);
  }

  async describeGatewaySMBUsersWithOptions(request: DescribeGatewaySMBUsersRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGatewaySMBUsersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeGatewaySMBUsers",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeGatewaySMBUsersResponse>(await this.callApi(params, req, runtime), new DescribeGatewaySMBUsersResponse({}));
  }

  async describeGatewaySMBUsers(request: DescribeGatewaySMBUsersRequest): Promise<DescribeGatewaySMBUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGatewaySMBUsersWithOptions(request, runtime);
  }

  async describeGatewayStatisticsWithOptions(request: DescribeGatewayStatisticsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGatewayStatisticsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTimestamp)) {
      query["EndTimestamp"] = request.endTimestamp;
    }

    if (!Util.isUnset(request.gatewayCategory)) {
      query["GatewayCategory"] = request.gatewayCategory;
    }

    if (!Util.isUnset(request.gatewayLocation)) {
      query["GatewayLocation"] = request.gatewayLocation;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.startTimestamp)) {
      query["StartTimestamp"] = request.startTimestamp;
    }

    if (!Util.isUnset(request.targetAccountId)) {
      query["TargetAccountId"] = request.targetAccountId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeGatewayStatistics",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeGatewayStatisticsResponse>(await this.callApi(params, req, runtime), new DescribeGatewayStatisticsResponse({}));
  }

  async describeGatewayStatistics(request: DescribeGatewayStatisticsRequest): Promise<DescribeGatewayStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGatewayStatisticsWithOptions(request, runtime);
  }

  async describeGatewayStockWithOptions(request: DescribeGatewayStockRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGatewayStockResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.gatewayRegionId)) {
      query["GatewayRegionId"] = request.gatewayRegionId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeGatewayStock",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeGatewayStockResponse>(await this.callApi(params, req, runtime), new DescribeGatewayStockResponse({}));
  }

  async describeGatewayStock(request: DescribeGatewayStockRequest): Promise<DescribeGatewayStockResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGatewayStockWithOptions(request, runtime);
  }

  async describeGatewayTypesWithOptions(request: DescribeGatewayTypesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGatewayTypesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.gatewayLocation)) {
      query["GatewayLocation"] = request.gatewayLocation;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeGatewayTypes",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeGatewayTypesResponse>(await this.callApi(params, req, runtime), new DescribeGatewayTypesResponse({}));
  }

  async describeGatewayTypes(request: DescribeGatewayTypesRequest): Promise<DescribeGatewayTypesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGatewayTypesWithOptions(request, runtime);
  }

  async describeGatewaysWithOptions(request: DescribeGatewaysRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGatewaysResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.storageBundleId)) {
      query["StorageBundleId"] = request.storageBundleId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeGateways",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeGatewaysResponse>(await this.callApi(params, req, runtime), new DescribeGatewaysResponse({}));
  }

  async describeGateways(request: DescribeGatewaysRequest): Promise<DescribeGatewaysResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGatewaysWithOptions(request, runtime);
  }

  async describeGatewaysForCmsWithOptions(request: DescribeGatewaysForCmsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGatewaysForCmsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.gatewayRegionId)) {
      query["GatewayRegionId"] = request.gatewayRegionId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeGatewaysForCms",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeGatewaysForCmsResponse>(await this.callApi(params, req, runtime), new DescribeGatewaysForCmsResponse({}));
  }

  async describeGatewaysForCms(request: DescribeGatewaysForCmsRequest): Promise<DescribeGatewaysForCmsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGatewaysForCmsWithOptions(request, runtime);
  }

  async describeGatewaysTagsWithOptions(request: DescribeGatewaysTagsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGatewaysTagsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.gatewayIds)) {
      query["GatewayIds"] = request.gatewayIds;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.storageBundleId)) {
      query["StorageBundleId"] = request.storageBundleId;
    }

    if (!Util.isUnset(request.tagCategory)) {
      query["TagCategory"] = request.tagCategory;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeGatewaysTags",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeGatewaysTagsResponse>(await this.callApi(params, req, runtime), new DescribeGatewaysTagsResponse({}));
  }

  async describeGatewaysTags(request: DescribeGatewaysTagsRequest): Promise<DescribeGatewaysTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGatewaysTagsWithOptions(request, runtime);
  }

  async describeKmsKeyWithOptions(request: DescribeKmsKeyRequest, runtime: $Util.RuntimeOptions): Promise<DescribeKmsKeyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!Util.isUnset(request.kmsKey)) {
      query["KmsKey"] = request.kmsKey;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeKmsKey",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeKmsKeyResponse>(await this.callApi(params, req, runtime), new DescribeKmsKeyResponse({}));
  }

  async describeKmsKey(request: DescribeKmsKeyRequest): Promise<DescribeKmsKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeKmsKeyWithOptions(request, runtime);
  }

  async describeMqttConfigWithOptions(request: DescribeMqttConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMqttConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeMqttConfig",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeMqttConfigResponse>(await this.callApi(params, req, runtime), new DescribeMqttConfigResponse({}));
  }

  async describeMqttConfig(request: DescribeMqttConfigRequest): Promise<DescribeMqttConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMqttConfigWithOptions(request, runtime);
  }

  async describeOssBucketInfoWithOptions(request: DescribeOssBucketInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeOssBucketInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bucketEndpoint)) {
      query["BucketEndpoint"] = request.bucketEndpoint;
    }

    if (!Util.isUnset(request.bucketName)) {
      query["BucketName"] = request.bucketName;
    }

    if (!Util.isUnset(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeOssBucketInfo",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeOssBucketInfoResponse>(await this.callApi(params, req, runtime), new DescribeOssBucketInfoResponse({}));
  }

  async describeOssBucketInfo(request: DescribeOssBucketInfoRequest): Promise<DescribeOssBucketInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeOssBucketInfoWithOptions(request, runtime);
  }

  async describeOssBucketsWithOptions(request: DescribeOssBucketsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeOssBucketsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bucketEndpoint)) {
      query["BucketEndpoint"] = request.bucketEndpoint;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeOssBuckets",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeOssBucketsResponse>(await this.callApi(params, req, runtime), new DescribeOssBucketsResponse({}));
  }

  async describeOssBuckets(request: DescribeOssBucketsRequest): Promise<DescribeOssBucketsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeOssBucketsWithOptions(request, runtime);
  }

  async describePayAsYouGoPriceWithOptions(request: DescribePayAsYouGoPriceRequest, runtime: $Util.RuntimeOptions): Promise<DescribePayAsYouGoPriceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.gatewayClass)) {
      query["GatewayClass"] = request.gatewayClass;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePayAsYouGoPrice",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePayAsYouGoPriceResponse>(await this.callApi(params, req, runtime), new DescribePayAsYouGoPriceResponse({}));
  }

  async describePayAsYouGoPrice(request: DescribePayAsYouGoPriceRequest): Promise<DescribePayAsYouGoPriceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePayAsYouGoPriceWithOptions(request, runtime);
  }

  async describeRegionsWithOptions(request: DescribeRegionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRegions",
      version: "2018-05-11",
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

  async describeSharesBucketInfoForExpressSyncWithOptions(request: DescribeSharesBucketInfoForExpressSyncRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSharesBucketInfoForExpressSyncResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bucketName)) {
      query["BucketName"] = request.bucketName;
    }

    if (!Util.isUnset(request.bucketRegion)) {
      query["BucketRegion"] = request.bucketRegion;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSharesBucketInfoForExpressSync",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSharesBucketInfoForExpressSyncResponse>(await this.callApi(params, req, runtime), new DescribeSharesBucketInfoForExpressSyncResponse({}));
  }

  async describeSharesBucketInfoForExpressSync(request: DescribeSharesBucketInfoForExpressSyncRequest): Promise<DescribeSharesBucketInfoForExpressSyncResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSharesBucketInfoForExpressSyncWithOptions(request, runtime);
  }

  async describeStorageBundleWithOptions(request: DescribeStorageBundleRequest, runtime: $Util.RuntimeOptions): Promise<DescribeStorageBundleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.storageBundleId)) {
      query["StorageBundleId"] = request.storageBundleId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeStorageBundle",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeStorageBundleResponse>(await this.callApi(params, req, runtime), new DescribeStorageBundleResponse({}));
  }

  async describeStorageBundle(request: DescribeStorageBundleRequest): Promise<DescribeStorageBundleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeStorageBundleWithOptions(request, runtime);
  }

  async describeStorageBundlesWithOptions(request: DescribeStorageBundlesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeStorageBundlesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backendBucketRegionId)) {
      query["BackendBucketRegionId"] = request.backendBucketRegionId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeStorageBundles",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeStorageBundlesResponse>(await this.callApi(params, req, runtime), new DescribeStorageBundlesResponse({}));
  }

  async describeStorageBundles(request: DescribeStorageBundlesRequest): Promise<DescribeStorageBundlesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeStorageBundlesWithOptions(request, runtime);
  }

  async describeSubscriptionPriceWithOptions(request: DescribeSubscriptionPriceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSubscriptionPriceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cacheCloudEfficiencySize)) {
      query["CacheCloudEfficiencySize"] = request.cacheCloudEfficiencySize;
    }

    if (!Util.isUnset(request.cacheESSDPl1Size)) {
      query["CacheESSDPl1Size"] = request.cacheESSDPl1Size;
    }

    if (!Util.isUnset(request.cacheSSDSize)) {
      query["CacheSSDSize"] = request.cacheSSDSize;
    }

    if (!Util.isUnset(request.gatewayClass)) {
      query["GatewayClass"] = request.gatewayClass;
    }

    if (!Util.isUnset(request.periodQuantity)) {
      query["PeriodQuantity"] = request.periodQuantity;
    }

    if (!Util.isUnset(request.periodUnit)) {
      query["PeriodUnit"] = request.periodUnit;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSubscriptionPrice",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSubscriptionPriceResponse>(await this.callApi(params, req, runtime), new DescribeSubscriptionPriceResponse({}));
  }

  async describeSubscriptionPrice(request: DescribeSubscriptionPriceRequest): Promise<DescribeSubscriptionPriceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSubscriptionPriceWithOptions(request, runtime);
  }

  async describeTasksWithOptions(request: DescribeTasksRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTasksResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.targetId)) {
      query["TargetId"] = request.targetId;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeTasks",
      version: "2018-05-11",
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

  async describeTasks(request: DescribeTasksRequest): Promise<DescribeTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTasksWithOptions(request, runtime);
  }

  async describeUserBusinessStatusWithOptions(request: DescribeUserBusinessStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUserBusinessStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeUserBusinessStatus",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeUserBusinessStatusResponse>(await this.callApi(params, req, runtime), new DescribeUserBusinessStatusResponse({}));
  }

  async describeUserBusinessStatus(request: DescribeUserBusinessStatusRequest): Promise<DescribeUserBusinessStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUserBusinessStatusWithOptions(request, runtime);
  }

  async describeVSwitchesWithOptions(request: DescribeVSwitchesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVSwitchesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.resourceRegionId)) {
      query["ResourceRegionId"] = request.resourceRegionId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.storageBundleId)) {
      query["StorageBundleId"] = request.storageBundleId;
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
      action: "DescribeVSwitches",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeVSwitchesResponse>(await this.callApi(params, req, runtime), new DescribeVSwitchesResponse({}));
  }

  async describeVSwitches(request: DescribeVSwitchesRequest): Promise<DescribeVSwitchesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVSwitchesWithOptions(request, runtime);
  }

  async describeVpcsWithOptions(request: DescribeVpcsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVpcsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.resourceRegionId)) {
      query["ResourceRegionId"] = request.resourceRegionId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.storageBundleId)) {
      query["StorageBundleId"] = request.storageBundleId;
    }

    if (!Util.isUnset(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeVpcs",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeVpcsResponse>(await this.callApi(params, req, runtime), new DescribeVpcsResponse({}));
  }

  async describeVpcs(request: DescribeVpcsRequest): Promise<DescribeVpcsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVpcsWithOptions(request, runtime);
  }

  async describeZonesWithOptions(request: DescribeZonesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeZonesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeZones",
      version: "2018-05-11",
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

  async describeZones(request: DescribeZonesRequest): Promise<DescribeZonesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeZonesWithOptions(request, runtime);
  }

  async disableGatewayLoggingWithOptions(request: DisableGatewayLoggingRequest, runtime: $Util.RuntimeOptions): Promise<DisableGatewayLoggingResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DisableGatewayLogging",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DisableGatewayLoggingResponse>(await this.callApi(params, req, runtime), new DisableGatewayLoggingResponse({}));
  }

  async disableGatewayLogging(request: DisableGatewayLoggingRequest): Promise<DisableGatewayLoggingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableGatewayLoggingWithOptions(request, runtime);
  }

  async disableGatewayNFSVersionWithOptions(request: DisableGatewayNFSVersionRequest, runtime: $Util.RuntimeOptions): Promise<DisableGatewayNFSVersionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!Util.isUnset(request.NFSVersion)) {
      query["NFSVersion"] = request.NFSVersion;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DisableGatewayNFSVersion",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DisableGatewayNFSVersionResponse>(await this.callApi(params, req, runtime), new DisableGatewayNFSVersionResponse({}));
  }

  async disableGatewayNFSVersion(request: DisableGatewayNFSVersionRequest): Promise<DisableGatewayNFSVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableGatewayNFSVersionWithOptions(request, runtime);
  }

  async enableGatewayIpv6WithOptions(request: EnableGatewayIpv6Request, runtime: $Util.RuntimeOptions): Promise<EnableGatewayIpv6Response> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "EnableGatewayIpv6",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EnableGatewayIpv6Response>(await this.callApi(params, req, runtime), new EnableGatewayIpv6Response({}));
  }

  async enableGatewayIpv6(request: EnableGatewayIpv6Request): Promise<EnableGatewayIpv6Response> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableGatewayIpv6WithOptions(request, runtime);
  }

  async enableGatewayLoggingWithOptions(request: EnableGatewayLoggingRequest, runtime: $Util.RuntimeOptions): Promise<EnableGatewayLoggingResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "EnableGatewayLogging",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EnableGatewayLoggingResponse>(await this.callApi(params, req, runtime), new EnableGatewayLoggingResponse({}));
  }

  async enableGatewayLogging(request: EnableGatewayLoggingRequest): Promise<EnableGatewayLoggingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableGatewayLoggingWithOptions(request, runtime);
  }

  async expandCacheDiskWithOptions(request: ExpandCacheDiskRequest, runtime: $Util.RuntimeOptions): Promise<ExpandCacheDiskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!Util.isUnset(request.localFilePath)) {
      query["LocalFilePath"] = request.localFilePath;
    }

    if (!Util.isUnset(request.newSizeInGB)) {
      query["NewSizeInGB"] = request.newSizeInGB;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ExpandCacheDisk",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ExpandCacheDiskResponse>(await this.callApi(params, req, runtime), new ExpandCacheDiskResponse({}));
  }

  async expandCacheDisk(request: ExpandCacheDiskRequest): Promise<ExpandCacheDiskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.expandCacheDiskWithOptions(request, runtime);
  }

  async expandGatewayFileShareWithOptions(request: ExpandGatewayFileShareRequest, runtime: $Util.RuntimeOptions): Promise<ExpandGatewayFileShareResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!Util.isUnset(request.indexId)) {
      query["IndexId"] = request.indexId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ExpandGatewayFileShare",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ExpandGatewayFileShareResponse>(await this.callApi(params, req, runtime), new ExpandGatewayFileShareResponse({}));
  }

  async expandGatewayFileShare(request: ExpandGatewayFileShareRequest): Promise<ExpandGatewayFileShareResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.expandGatewayFileShareWithOptions(request, runtime);
  }

  async expandGatewayNetworkBandwidthWithOptions(request: ExpandGatewayNetworkBandwidthRequest, runtime: $Util.RuntimeOptions): Promise<ExpandGatewayNetworkBandwidthResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!Util.isUnset(request.newNetworkBandwidth)) {
      query["NewNetworkBandwidth"] = request.newNetworkBandwidth;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ExpandGatewayNetworkBandwidth",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ExpandGatewayNetworkBandwidthResponse>(await this.callApi(params, req, runtime), new ExpandGatewayNetworkBandwidthResponse({}));
  }

  async expandGatewayNetworkBandwidth(request: ExpandGatewayNetworkBandwidthRequest): Promise<ExpandGatewayNetworkBandwidthResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.expandGatewayNetworkBandwidthWithOptions(request, runtime);
  }

  async generateGatewayTokenWithOptions(request: GenerateGatewayTokenRequest, runtime: $Util.RuntimeOptions): Promise<GenerateGatewayTokenResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GenerateGatewayToken",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GenerateGatewayTokenResponse>(await this.callApi(params, req, runtime), new GenerateGatewayTokenResponse({}));
  }

  async generateGatewayToken(request: GenerateGatewayTokenRequest): Promise<GenerateGatewayTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.generateGatewayTokenWithOptions(request, runtime);
  }

  async generateMqttTokenWithOptions(request: GenerateMqttTokenRequest, runtime: $Util.RuntimeOptions): Promise<GenerateMqttTokenResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientUUID)) {
      query["ClientUUID"] = request.clientUUID;
    }

    if (!Util.isUnset(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GenerateMqttToken",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GenerateMqttTokenResponse>(await this.callApi(params, req, runtime), new GenerateMqttTokenResponse({}));
  }

  async generateMqttToken(request: GenerateMqttTokenRequest): Promise<GenerateMqttTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.generateMqttTokenWithOptions(request, runtime);
  }

  async generateStsTokenWithOptions(request: GenerateStsTokenRequest, runtime: $Util.RuntimeOptions): Promise<GenerateStsTokenResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.expireInSeconds)) {
      query["ExpireInSeconds"] = request.expireInSeconds;
    }

    if (!Util.isUnset(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.tokenType)) {
      query["TokenType"] = request.tokenType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GenerateStsToken",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GenerateStsTokenResponse>(await this.callApi(params, req, runtime), new GenerateStsTokenResponse({}));
  }

  async generateStsToken(request: GenerateStsTokenRequest): Promise<GenerateStsTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.generateStsTokenWithOptions(request, runtime);
  }

  async handleGatewayAutoPlanWithOptions(request: HandleGatewayAutoPlanRequest, runtime: $Util.RuntimeOptions): Promise<HandleGatewayAutoPlanResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cancel)) {
      query["Cancel"] = request.cancel;
    }

    if (!Util.isUnset(request.delayHours)) {
      query["DelayHours"] = request.delayHours;
    }

    if (!Util.isUnset(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!Util.isUnset(request.planId)) {
      query["PlanId"] = request.planId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "HandleGatewayAutoPlan",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<HandleGatewayAutoPlanResponse>(await this.callApi(params, req, runtime), new HandleGatewayAutoPlanResponse({}));
  }

  async handleGatewayAutoPlan(request: HandleGatewayAutoPlanRequest): Promise<HandleGatewayAutoPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.handleGatewayAutoPlanWithOptions(request, runtime);
  }

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

    if (!Util.isUnset(request.resourceRegionId)) {
      query["ResourceRegionId"] = request.resourceRegionId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTagResources",
      version: "2018-05-11",
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

  async modifyGatewayWithOptions(request: ModifyGatewayRequest, runtime: $Util.RuntimeOptions): Promise<ModifyGatewayResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyGateway",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyGatewayResponse>(await this.callApi(params, req, runtime), new ModifyGatewayResponse({}));
  }

  async modifyGateway(request: ModifyGatewayRequest): Promise<ModifyGatewayResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyGatewayWithOptions(request, runtime);
  }

  async modifyGatewayBlockVolumeWithOptions(request: ModifyGatewayBlockVolumeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyGatewayBlockVolumeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cacheConfig)) {
      query["CacheConfig"] = request.cacheConfig;
    }

    if (!Util.isUnset(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!Util.isUnset(request.indexId)) {
      query["IndexId"] = request.indexId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyGatewayBlockVolume",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyGatewayBlockVolumeResponse>(await this.callApi(params, req, runtime), new ModifyGatewayBlockVolumeResponse({}));
  }

  async modifyGatewayBlockVolume(request: ModifyGatewayBlockVolumeRequest): Promise<ModifyGatewayBlockVolumeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyGatewayBlockVolumeWithOptions(request, runtime);
  }

  async modifyGatewayClassWithOptions(request: ModifyGatewayClassRequest, runtime: $Util.RuntimeOptions): Promise<ModifyGatewayClassResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.gatewayClass)) {
      query["GatewayClass"] = request.gatewayClass;
    }

    if (!Util.isUnset(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyGatewayClass",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyGatewayClassResponse>(await this.callApi(params, req, runtime), new ModifyGatewayClassResponse({}));
  }

  async modifyGatewayClass(request: ModifyGatewayClassRequest): Promise<ModifyGatewayClassResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyGatewayClassWithOptions(request, runtime);
  }

  async modifyGatewayFileShareWithOptions(request: ModifyGatewayFileShareRequest, runtime: $Util.RuntimeOptions): Promise<ModifyGatewayFileShareResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cacheConfig)) {
      query["CacheConfig"] = request.cacheConfig;
    }

    if (!Util.isUnset(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!Util.isUnset(request.indexId)) {
      query["IndexId"] = request.indexId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyGatewayFileShare",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyGatewayFileShareResponse>(await this.callApi(params, req, runtime), new ModifyGatewayFileShareResponse({}));
  }

  async modifyGatewayFileShare(request: ModifyGatewayFileShareRequest): Promise<ModifyGatewayFileShareResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyGatewayFileShareWithOptions(request, runtime);
  }

  async modifyGatewayFileShareWatermarkWithOptions(request: ModifyGatewayFileShareWatermarkRequest, runtime: $Util.RuntimeOptions): Promise<ModifyGatewayFileShareWatermarkResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!Util.isUnset(request.indexId)) {
      query["IndexId"] = request.indexId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.watermark)) {
      query["Watermark"] = request.watermark;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyGatewayFileShareWatermark",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyGatewayFileShareWatermarkResponse>(await this.callApi(params, req, runtime), new ModifyGatewayFileShareWatermarkResponse({}));
  }

  async modifyGatewayFileShareWatermark(request: ModifyGatewayFileShareWatermarkRequest): Promise<ModifyGatewayFileShareWatermarkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyGatewayFileShareWatermarkWithOptions(request, runtime);
  }

  async modifyStorageBundleWithOptions(request: ModifyStorageBundleRequest, runtime: $Util.RuntimeOptions): Promise<ModifyStorageBundleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.storageBundleId)) {
      query["StorageBundleId"] = request.storageBundleId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyStorageBundle",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyStorageBundleResponse>(await this.callApi(params, req, runtime), new ModifyStorageBundleResponse({}));
  }

  async modifyStorageBundle(request: ModifyStorageBundleRequest): Promise<ModifyStorageBundleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyStorageBundleWithOptions(request, runtime);
  }

  async openSgwServiceWithOptions(runtime: $Util.RuntimeOptions): Promise<OpenSgwServiceResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "OpenSgwService",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OpenSgwServiceResponse>(await this.callApi(params, req, runtime), new OpenSgwServiceResponse({}));
  }

  async openSgwService(): Promise<OpenSgwServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.openSgwServiceWithOptions(runtime);
  }

  async operateGatewayWithOptions(request: OperateGatewayRequest, runtime: $Util.RuntimeOptions): Promise<OperateGatewayResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!Util.isUnset(request.operateAction)) {
      query["OperateAction"] = request.operateAction;
    }

    if (!Util.isUnset(request.params)) {
      query["Params"] = request.params;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "OperateGateway",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OperateGatewayResponse>(await this.callApi(params, req, runtime), new OperateGatewayResponse({}));
  }

  async operateGateway(request: OperateGatewayRequest): Promise<OperateGatewayResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.operateGatewayWithOptions(request, runtime);
  }

  async releaseServiceWithOptions(request: ReleaseServiceRequest, runtime: $Util.RuntimeOptions): Promise<ReleaseServiceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ReleaseService",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ReleaseServiceResponse>(await this.callApi(params, req, runtime), new ReleaseServiceResponse({}));
  }

  async releaseService(request: ReleaseServiceRequest): Promise<ReleaseServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.releaseServiceWithOptions(request, runtime);
  }

  async removeSharesFromExpressSyncWithOptions(request: RemoveSharesFromExpressSyncRequest, runtime: $Util.RuntimeOptions): Promise<RemoveSharesFromExpressSyncResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.expressSyncId)) {
      query["ExpressSyncId"] = request.expressSyncId;
    }

    if (!Util.isUnset(request.gatewayShares)) {
      query["GatewayShares"] = request.gatewayShares;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RemoveSharesFromExpressSync",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RemoveSharesFromExpressSyncResponse>(await this.callApi(params, req, runtime), new RemoveSharesFromExpressSyncResponse({}));
  }

  async removeSharesFromExpressSync(request: RemoveSharesFromExpressSyncRequest): Promise<RemoveSharesFromExpressSyncResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeSharesFromExpressSyncWithOptions(request, runtime);
  }

  async removeTagsFromGatewayWithOptions(request: RemoveTagsFromGatewayRequest, runtime: $Util.RuntimeOptions): Promise<RemoveTagsFromGatewayResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.tags)) {
      query["Tags"] = request.tags;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RemoveTagsFromGateway",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RemoveTagsFromGatewayResponse>(await this.callApi(params, req, runtime), new RemoveTagsFromGatewayResponse({}));
  }

  async removeTagsFromGateway(request: RemoveTagsFromGatewayRequest): Promise<RemoveTagsFromGatewayResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeTagsFromGatewayWithOptions(request, runtime);
  }

  async reportBlockVolumesWithOptions(request: ReportBlockVolumesRequest, runtime: $Util.RuntimeOptions): Promise<ReportBlockVolumesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientUUID)) {
      query["ClientUUID"] = request.clientUUID;
    }

    if (!Util.isUnset(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!Util.isUnset(request.info)) {
      query["Info"] = request.info;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ReportBlockVolumes",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ReportBlockVolumesResponse>(await this.callApi(params, req, runtime), new ReportBlockVolumesResponse({}));
  }

  async reportBlockVolumes(request: ReportBlockVolumesRequest): Promise<ReportBlockVolumesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.reportBlockVolumesWithOptions(request, runtime);
  }

  async reportFileSharesWithOptions(request: ReportFileSharesRequest, runtime: $Util.RuntimeOptions): Promise<ReportFileSharesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientUUID)) {
      query["ClientUUID"] = request.clientUUID;
    }

    if (!Util.isUnset(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!Util.isUnset(request.info)) {
      query["Info"] = request.info;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ReportFileShares",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ReportFileSharesResponse>(await this.callApi(params, req, runtime), new ReportFileSharesResponse({}));
  }

  async reportFileShares(request: ReportFileSharesRequest): Promise<ReportFileSharesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.reportFileSharesWithOptions(request, runtime);
  }

  async reportGatewayInfoWithOptions(request: ReportGatewayInfoRequest, runtime: $Util.RuntimeOptions): Promise<ReportGatewayInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientUUID)) {
      query["ClientUUID"] = request.clientUUID;
    }

    if (!Util.isUnset(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!Util.isUnset(request.gatewayStatus)) {
      query["GatewayStatus"] = request.gatewayStatus;
    }

    if (!Util.isUnset(request.info)) {
      query["Info"] = request.info;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.time)) {
      query["Time"] = request.time;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ReportGatewayInfo",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ReportGatewayInfoResponse>(await this.callApi(params, req, runtime), new ReportGatewayInfoResponse({}));
  }

  async reportGatewayInfo(request: ReportGatewayInfoRequest): Promise<ReportGatewayInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.reportGatewayInfoWithOptions(request, runtime);
  }

  async reportGatewayUsageWithOptions(request: ReportGatewayUsageRequest, runtime: $Util.RuntimeOptions): Promise<ReportGatewayUsageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientUUID)) {
      query["ClientUUID"] = request.clientUUID;
    }

    if (!Util.isUnset(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.usage)) {
      query["Usage"] = request.usage;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ReportGatewayUsage",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ReportGatewayUsageResponse>(await this.callApi(params, req, runtime), new ReportGatewayUsageResponse({}));
  }

  async reportGatewayUsage(request: ReportGatewayUsageRequest): Promise<ReportGatewayUsageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.reportGatewayUsageWithOptions(request, runtime);
  }

  async resetGatewayPasswordWithOptions(request: ResetGatewayPasswordRequest, runtime: $Util.RuntimeOptions): Promise<ResetGatewayPasswordResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!Util.isUnset(request.password)) {
      query["Password"] = request.password;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.username)) {
      query["Username"] = request.username;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ResetGatewayPassword",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ResetGatewayPasswordResponse>(await this.callApi(params, req, runtime), new ResetGatewayPasswordResponse({}));
  }

  async resetGatewayPassword(request: ResetGatewayPasswordRequest): Promise<ResetGatewayPasswordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resetGatewayPasswordWithOptions(request, runtime);
  }

  async restartFileSharesWithOptions(request: RestartFileSharesRequest, runtime: $Util.RuntimeOptions): Promise<RestartFileSharesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.shareProtocol)) {
      query["ShareProtocol"] = request.shareProtocol;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RestartFileShares",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RestartFileSharesResponse>(await this.callApi(params, req, runtime), new RestartFileSharesResponse({}));
  }

  async restartFileShares(request: RestartFileSharesRequest): Promise<RestartFileSharesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.restartFileSharesWithOptions(request, runtime);
  }

  async setGatewayADInfoWithOptions(request: SetGatewayADInfoRequest, runtime: $Util.RuntimeOptions): Promise<SetGatewayADInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!Util.isUnset(request.isEnabled)) {
      query["IsEnabled"] = request.isEnabled;
    }

    if (!Util.isUnset(request.password)) {
      query["Password"] = request.password;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.serverIp)) {
      query["ServerIp"] = request.serverIp;
    }

    if (!Util.isUnset(request.username)) {
      query["Username"] = request.username;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetGatewayADInfo",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetGatewayADInfoResponse>(await this.callApi(params, req, runtime), new SetGatewayADInfoResponse({}));
  }

  async setGatewayADInfo(request: SetGatewayADInfoRequest): Promise<SetGatewayADInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setGatewayADInfoWithOptions(request, runtime);
  }

  async setGatewayAutoUpgradeConfigurationWithOptions(request: SetGatewayAutoUpgradeConfigurationRequest, runtime: $Util.RuntimeOptions): Promise<SetGatewayAutoUpgradeConfigurationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.autoUpgradeEndHour)) {
      query["AutoUpgradeEndHour"] = request.autoUpgradeEndHour;
    }

    if (!Util.isUnset(request.autoUpgradeStartHour)) {
      query["AutoUpgradeStartHour"] = request.autoUpgradeStartHour;
    }

    if (!Util.isUnset(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!Util.isUnset(request.isAutoUpgrade)) {
      query["IsAutoUpgrade"] = request.isAutoUpgrade;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetGatewayAutoUpgradeConfiguration",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetGatewayAutoUpgradeConfigurationResponse>(await this.callApi(params, req, runtime), new SetGatewayAutoUpgradeConfigurationResponse({}));
  }

  async setGatewayAutoUpgradeConfiguration(request: SetGatewayAutoUpgradeConfigurationRequest): Promise<SetGatewayAutoUpgradeConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setGatewayAutoUpgradeConfigurationWithOptions(request, runtime);
  }

  async setGatewayDNSWithOptions(request: SetGatewayDNSRequest, runtime: $Util.RuntimeOptions): Promise<SetGatewayDNSResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dnsServer)) {
      query["DnsServer"] = request.dnsServer;
    }

    if (!Util.isUnset(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetGatewayDNS",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetGatewayDNSResponse>(await this.callApi(params, req, runtime), new SetGatewayDNSResponse({}));
  }

  async setGatewayDNS(request: SetGatewayDNSRequest): Promise<SetGatewayDNSResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setGatewayDNSWithOptions(request, runtime);
  }

  async setGatewayLDAPInfoWithOptions(request: SetGatewayLDAPInfoRequest, runtime: $Util.RuntimeOptions): Promise<SetGatewayLDAPInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.baseDN)) {
      query["BaseDN"] = request.baseDN;
    }

    if (!Util.isUnset(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!Util.isUnset(request.isEnabled)) {
      query["IsEnabled"] = request.isEnabled;
    }

    if (!Util.isUnset(request.isTls)) {
      query["IsTls"] = request.isTls;
    }

    if (!Util.isUnset(request.password)) {
      query["Password"] = request.password;
    }

    if (!Util.isUnset(request.rootDN)) {
      query["RootDN"] = request.rootDN;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.serverIp)) {
      query["ServerIp"] = request.serverIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetGatewayLDAPInfo",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetGatewayLDAPInfoResponse>(await this.callApi(params, req, runtime), new SetGatewayLDAPInfoResponse({}));
  }

  async setGatewayLDAPInfo(request: SetGatewayLDAPInfoRequest): Promise<SetGatewayLDAPInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setGatewayLDAPInfoWithOptions(request, runtime);
  }

  async switchCSGClientsReverseSyncConfigurationWithOptions(tmpReq: SwitchCSGClientsReverseSyncConfigurationRequest, runtime: $Util.RuntimeOptions): Promise<SwitchCSGClientsReverseSyncConfigurationResponse> {
    Util.validateModel(tmpReq);
    let request = new SwitchCSGClientsReverseSyncConfigurationShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.clientIds)) {
      request.clientIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.clientIds, "ClientIds", "simple");
    }

    let query = { };
    if (!Util.isUnset(request.clientIdsShrink)) {
      query["ClientIds"] = request.clientIdsShrink;
    }

    if (!Util.isUnset(request.clientRegionId)) {
      query["ClientRegionId"] = request.clientRegionId;
    }

    if (!Util.isUnset(request.isReverseSync)) {
      query["IsReverseSync"] = request.isReverseSync;
    }

    if (!Util.isUnset(request.reverseSyncInternalSecond)) {
      query["ReverseSyncInternalSecond"] = request.reverseSyncInternalSecond;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SwitchCSGClientsReverseSyncConfiguration",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SwitchCSGClientsReverseSyncConfigurationResponse>(await this.callApi(params, req, runtime), new SwitchCSGClientsReverseSyncConfigurationResponse({}));
  }

  async switchCSGClientsReverseSyncConfiguration(request: SwitchCSGClientsReverseSyncConfigurationRequest): Promise<SwitchCSGClientsReverseSyncConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.switchCSGClientsReverseSyncConfigurationWithOptions(request, runtime);
  }

  async switchGatewayExpirationPolicyWithOptions(request: SwitchGatewayExpirationPolicyRequest, runtime: $Util.RuntimeOptions): Promise<SwitchGatewayExpirationPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SwitchGatewayExpirationPolicy",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SwitchGatewayExpirationPolicyResponse>(await this.callApi(params, req, runtime), new SwitchGatewayExpirationPolicyResponse({}));
  }

  async switchGatewayExpirationPolicy(request: SwitchGatewayExpirationPolicyRequest): Promise<SwitchGatewayExpirationPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.switchGatewayExpirationPolicyWithOptions(request, runtime);
  }

  async switchToSubscriptionWithOptions(request: SwitchToSubscriptionRequest, runtime: $Util.RuntimeOptions): Promise<SwitchToSubscriptionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SwitchToSubscription",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SwitchToSubscriptionResponse>(await this.callApi(params, req, runtime), new SwitchToSubscriptionResponse({}));
  }

  async switchToSubscription(request: SwitchToSubscriptionRequest): Promise<SwitchToSubscriptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.switchToSubscriptionWithOptions(request, runtime);
  }

  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<TagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceRegionId)) {
      query["ResourceRegionId"] = request.resourceRegionId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TagResources",
      version: "2018-05-11",
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

  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  async triggerGatewayRemoteSyncWithOptions(request: TriggerGatewayRemoteSyncRequest, runtime: $Util.RuntimeOptions): Promise<TriggerGatewayRemoteSyncResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!Util.isUnset(request.indexId)) {
      query["IndexId"] = request.indexId;
    }

    if (!Util.isUnset(request.path)) {
      query["Path"] = request.path;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TriggerGatewayRemoteSync",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TriggerGatewayRemoteSyncResponse>(await this.callApi(params, req, runtime), new TriggerGatewayRemoteSyncResponse({}));
  }

  async triggerGatewayRemoteSync(request: TriggerGatewayRemoteSyncRequest): Promise<TriggerGatewayRemoteSyncResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.triggerGatewayRemoteSyncWithOptions(request, runtime);
  }

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

    if (!Util.isUnset(request.resourceRegionId)) {
      query["ResourceRegionId"] = request.resourceRegionId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.tagKey)) {
      query["TagKey"] = request.tagKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UntagResources",
      version: "2018-05-11",
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

  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  async updateGatewayBlockVolumeWithOptions(request: UpdateGatewayBlockVolumeRequest, runtime: $Util.RuntimeOptions): Promise<UpdateGatewayBlockVolumeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.chapEnabled)) {
      query["ChapEnabled"] = request.chapEnabled;
    }

    if (!Util.isUnset(request.chapInPassword)) {
      query["ChapInPassword"] = request.chapInPassword;
    }

    if (!Util.isUnset(request.chapInUser)) {
      query["ChapInUser"] = request.chapInUser;
    }

    if (!Util.isUnset(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!Util.isUnset(request.indexId)) {
      query["IndexId"] = request.indexId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.size)) {
      query["Size"] = request.size;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateGatewayBlockVolume",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateGatewayBlockVolumeResponse>(await this.callApi(params, req, runtime), new UpdateGatewayBlockVolumeResponse({}));
  }

  async updateGatewayBlockVolume(request: UpdateGatewayBlockVolumeRequest): Promise<UpdateGatewayBlockVolumeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateGatewayBlockVolumeWithOptions(request, runtime);
  }

  async updateGatewayFileShareWithOptions(request: UpdateGatewayFileShareRequest, runtime: $Util.RuntimeOptions): Promise<UpdateGatewayFileShareResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accessBasedEnumeration)) {
      query["AccessBasedEnumeration"] = request.accessBasedEnumeration;
    }

    if (!Util.isUnset(request.backendLimit)) {
      query["BackendLimit"] = request.backendLimit;
    }

    if (!Util.isUnset(request.browsable)) {
      query["Browsable"] = request.browsable;
    }

    if (!Util.isUnset(request.bypassCacheRead)) {
      query["BypassCacheRead"] = request.bypassCacheRead;
    }

    if (!Util.isUnset(request.cacheMode)) {
      query["CacheMode"] = request.cacheMode;
    }

    if (!Util.isUnset(request.clientSideCmk)) {
      query["ClientSideCmk"] = request.clientSideCmk;
    }

    if (!Util.isUnset(request.clientSideEncryption)) {
      query["ClientSideEncryption"] = request.clientSideEncryption;
    }

    if (!Util.isUnset(request.directIO)) {
      query["DirectIO"] = request.directIO;
    }

    if (!Util.isUnset(request.downloadLimit)) {
      query["DownloadLimit"] = request.downloadLimit;
    }

    if (!Util.isUnset(request.fastReclaim)) {
      query["FastReclaim"] = request.fastReclaim;
    }

    if (!Util.isUnset(request.frontendLimit)) {
      query["FrontendLimit"] = request.frontendLimit;
    }

    if (!Util.isUnset(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!Util.isUnset(request.ignoreDelete)) {
      query["IgnoreDelete"] = request.ignoreDelete;
    }

    if (!Util.isUnset(request.inPlace)) {
      query["InPlace"] = request.inPlace;
    }

    if (!Util.isUnset(request.indexId)) {
      query["IndexId"] = request.indexId;
    }

    if (!Util.isUnset(request.kmsRotatePeriod)) {
      query["KmsRotatePeriod"] = request.kmsRotatePeriod;
    }

    if (!Util.isUnset(request.lagPeriod)) {
      query["LagPeriod"] = request.lagPeriod;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.nfsV4Optimization)) {
      query["NfsV4Optimization"] = request.nfsV4Optimization;
    }

    if (!Util.isUnset(request.pollingInterval)) {
      query["PollingInterval"] = request.pollingInterval;
    }

    if (!Util.isUnset(request.readOnlyClientList)) {
      query["ReadOnlyClientList"] = request.readOnlyClientList;
    }

    if (!Util.isUnset(request.readOnlyUserList)) {
      query["ReadOnlyUserList"] = request.readOnlyUserList;
    }

    if (!Util.isUnset(request.readWriteClientList)) {
      query["ReadWriteClientList"] = request.readWriteClientList;
    }

    if (!Util.isUnset(request.readWriteUserList)) {
      query["ReadWriteUserList"] = request.readWriteUserList;
    }

    if (!Util.isUnset(request.remoteSync)) {
      query["RemoteSync"] = request.remoteSync;
    }

    if (!Util.isUnset(request.remoteSyncDownload)) {
      query["RemoteSyncDownload"] = request.remoteSyncDownload;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.serverSideCmk)) {
      query["ServerSideCmk"] = request.serverSideCmk;
    }

    if (!Util.isUnset(request.serverSideEncryption)) {
      query["ServerSideEncryption"] = request.serverSideEncryption;
    }

    if (!Util.isUnset(request.squash)) {
      query["Squash"] = request.squash;
    }

    if (!Util.isUnset(request.transferAcceleration)) {
      query["TransferAcceleration"] = request.transferAcceleration;
    }

    if (!Util.isUnset(request.windowsAcl)) {
      query["WindowsAcl"] = request.windowsAcl;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateGatewayFileShare",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateGatewayFileShareResponse>(await this.callApi(params, req, runtime), new UpdateGatewayFileShareResponse({}));
  }

  async updateGatewayFileShare(request: UpdateGatewayFileShareRequest): Promise<UpdateGatewayFileShareResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateGatewayFileShareWithOptions(request, runtime);
  }

  async upgradeGatewayWithOptions(request: UpgradeGatewayRequest, runtime: $Util.RuntimeOptions): Promise<UpgradeGatewayResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpgradeGateway",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpgradeGatewayResponse>(await this.callApi(params, req, runtime), new UpgradeGatewayResponse({}));
  }

  async upgradeGateway(request: UpgradeGatewayRequest): Promise<UpgradeGatewayResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.upgradeGatewayWithOptions(request, runtime);
  }

  async uploadCSGClientLogWithOptions(request: UploadCSGClientLogRequest, runtime: $Util.RuntimeOptions): Promise<UploadCSGClientLogResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!Util.isUnset(request.clientRegionId)) {
      query["ClientRegionId"] = request.clientRegionId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UploadCSGClientLog",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UploadCSGClientLogResponse>(await this.callApi(params, req, runtime), new UploadCSGClientLogResponse({}));
  }

  async uploadCSGClientLog(request: UploadCSGClientLogRequest): Promise<UploadCSGClientLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.uploadCSGClientLogWithOptions(request, runtime);
  }

  async uploadGatewayLogWithOptions(request: UploadGatewayLogRequest, runtime: $Util.RuntimeOptions): Promise<UploadGatewayLogResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UploadGatewayLog",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UploadGatewayLogResponse>(await this.callApi(params, req, runtime), new UploadGatewayLogResponse({}));
  }

  async uploadGatewayLog(request: UploadGatewayLogRequest): Promise<UploadGatewayLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.uploadGatewayLogWithOptions(request, runtime);
  }

  async validateExpressSyncConfigWithOptions(request: ValidateExpressSyncConfigRequest, runtime: $Util.RuntimeOptions): Promise<ValidateExpressSyncConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bucketName)) {
      query["BucketName"] = request.bucketName;
    }

    if (!Util.isUnset(request.bucketPrefix)) {
      query["BucketPrefix"] = request.bucketPrefix;
    }

    if (!Util.isUnset(request.bucketRegion)) {
      query["BucketRegion"] = request.bucketRegion;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ValidateExpressSyncConfig",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ValidateExpressSyncConfigResponse>(await this.callApi(params, req, runtime), new ValidateExpressSyncConfigResponse({}));
  }

  async validateExpressSyncConfig(request: ValidateExpressSyncConfigRequest): Promise<ValidateExpressSyncConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.validateExpressSyncConfigWithOptions(request, runtime);
  }

  async validateGatewayNameWithOptions(request: ValidateGatewayNameRequest, runtime: $Util.RuntimeOptions): Promise<ValidateGatewayNameResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.storageBundleId)) {
      query["StorageBundleId"] = request.storageBundleId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ValidateGatewayName",
      version: "2018-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ValidateGatewayNameResponse>(await this.callApi(params, req, runtime), new ValidateGatewayNameResponse({}));
  }

  async validateGatewayName(request: ValidateGatewayNameRequest): Promise<ValidateGatewayNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.validateGatewayNameWithOptions(request, runtime);
  }

}
