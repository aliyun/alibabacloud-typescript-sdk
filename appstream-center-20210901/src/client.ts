// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AccessPageGetAclRequest extends $tea.Model {
  accessPageId?: string;
  static names(): { [key: string]: string } {
    return {
      accessPageId: 'AccessPageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessPageId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AccessPageGetAclResponseBody extends $tea.Model {
  code?: string;
  data?: AccessPageGetAclResponseBodyData[];
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': AccessPageGetAclResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AccessPageGetAclResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AccessPageGetAclResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AccessPageGetAclResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AccessPageSetAclRequest extends $tea.Model {
  accessMode?: string;
  accessPageId?: string;
  accessPageName?: string;
  effectTime?: number;
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      accessMode: 'AccessMode',
      accessPageId: 'AccessPageId',
      accessPageName: 'AccessPageName',
      effectTime: 'EffectTime',
      unit: 'Unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessMode: 'string',
      accessPageId: 'string',
      accessPageName: 'string',
      effectTime: 'number',
      unit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AccessPageSetAclResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: string;
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
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AccessPageSetAclResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AccessPageSetAclResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AccessPageSetAclResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApproveOtaTaskRequest extends $tea.Model {
  appInstanceGroupId?: string;
  bizRegionId?: string;
  otaType?: string;
  startTime?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      appInstanceGroupId: 'AppInstanceGroupId',
      bizRegionId: 'BizRegionId',
      otaType: 'OtaType',
      startTime: 'StartTime',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceGroupId: 'string',
      bizRegionId: 'string',
      otaType: 'string',
      startTime: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApproveOtaTaskResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApproveOtaTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ApproveOtaTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ApproveOtaTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AskSessionPackagePriceRequest extends $tea.Model {
  chargeType?: string;
  maxSessions?: number;
  period?: number;
  periodUnit?: string;
  region?: string;
  sessionPackageType?: string;
  sessionSpec?: string;
  sessionType?: string;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'ChargeType',
      maxSessions: 'MaxSessions',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      region: 'Region',
      sessionPackageType: 'SessionPackageType',
      sessionSpec: 'SessionSpec',
      sessionType: 'SessionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      maxSessions: 'number',
      period: 'number',
      periodUnit: 'string',
      region: 'string',
      sessionPackageType: 'string',
      sessionSpec: 'string',
      sessionType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AskSessionPackagePriceResponseBody extends $tea.Model {
  data?: AskSessionPackagePriceResponseBodyData[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': AskSessionPackagePriceResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AskSessionPackagePriceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AskSessionPackagePriceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AskSessionPackagePriceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AskSessionPackageRenewPriceRequest extends $tea.Model {
  period?: number;
  periodUnit?: string;
  sessionPackageId?: string;
  static names(): { [key: string]: string } {
    return {
      period: 'Period',
      periodUnit: 'PeriodUnit',
      sessionPackageId: 'SessionPackageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      period: 'number',
      periodUnit: 'string',
      sessionPackageId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AskSessionPackageRenewPriceResponseBody extends $tea.Model {
  data?: AskSessionPackageRenewPriceResponseBodyData[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': AskSessionPackageRenewPriceResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AskSessionPackageRenewPriceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AskSessionPackageRenewPriceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AskSessionPackageRenewPriceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthorizeInstanceGroupRequest extends $tea.Model {
  appInstanceGroupId?: string;
  authorizeUserIds?: string[];
  productType?: string;
  unAuthorizeUserIds?: string[];
  static names(): { [key: string]: string } {
    return {
      appInstanceGroupId: 'AppInstanceGroupId',
      authorizeUserIds: 'AuthorizeUserIds',
      productType: 'ProductType',
      unAuthorizeUserIds: 'UnAuthorizeUserIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceGroupId: 'string',
      authorizeUserIds: { 'type': 'array', 'itemType': 'string' },
      productType: 'string',
      unAuthorizeUserIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthorizeInstanceGroupResponseBody extends $tea.Model {
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

export class AuthorizeInstanceGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AuthorizeInstanceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AuthorizeInstanceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BuySessionPackageRequest extends $tea.Model {
  chargeType?: string;
  maxSessions?: number;
  period?: number;
  periodUnit?: string;
  projectId?: string;
  region?: string;
  sessionPackageName?: string;
  sessionPackageType?: string;
  sessionSpec?: string;
  sessionType?: string;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'ChargeType',
      maxSessions: 'MaxSessions',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      projectId: 'ProjectId',
      region: 'Region',
      sessionPackageName: 'SessionPackageName',
      sessionPackageType: 'SessionPackageType',
      sessionSpec: 'SessionSpec',
      sessionType: 'SessionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      maxSessions: 'number',
      period: 'number',
      periodUnit: 'string',
      projectId: 'string',
      region: 'string',
      sessionPackageName: 'string',
      sessionPackageType: 'string',
      sessionSpec: 'string',
      sessionType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BuySessionPackageResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  sessionPackageId?: number;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      sessionPackageId: 'SessionPackageId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      sessionPackageId: 'number',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BuySessionPackageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: BuySessionPackageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BuySessionPackageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelOtaTaskRequest extends $tea.Model {
  appInstanceGroupId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      appInstanceGroupId: 'AppInstanceGroupId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceGroupId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelOtaTaskResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelOtaTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CancelOtaTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CancelOtaTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAccessPageRequest extends $tea.Model {
  accessPageName?: string;
  cloudEnvId?: string;
  effectTime?: number;
  projectId?: string;
  projectName?: string;
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      accessPageName: 'AccessPageName',
      cloudEnvId: 'CloudEnvId',
      effectTime: 'EffectTime',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      unit: 'Unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessPageName: 'string',
      cloudEnvId: 'string',
      effectTime: 'number',
      projectId: 'string',
      projectName: 'string',
      unit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAccessPageResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAccessPageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateAccessPageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateAccessPageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppInstanceGroupRequest extends $tea.Model {
  appCenterImageId?: string;
  appInstanceGroupName?: string;
  autoPay?: boolean;
  autoRenew?: boolean;
  bizRegionId?: string;
  chargeResourceMode?: string;
  chargeType?: string;
  network?: CreateAppInstanceGroupRequestNetwork;
  nodePool?: CreateAppInstanceGroupRequestNodePool;
  period?: number;
  periodUnit?: string;
  preOpenAppId?: string;
  productType?: string;
  promotionId?: string;
  runtimePolicy?: CreateAppInstanceGroupRequestRuntimePolicy;
  securityPolicy?: CreateAppInstanceGroupRequestSecurityPolicy;
  sessionTimeout?: number;
  storagePolicy?: CreateAppInstanceGroupRequestStoragePolicy;
  userInfo?: CreateAppInstanceGroupRequestUserInfo;
  users?: string[];
  static names(): { [key: string]: string } {
    return {
      appCenterImageId: 'AppCenterImageId',
      appInstanceGroupName: 'AppInstanceGroupName',
      autoPay: 'AutoPay',
      autoRenew: 'AutoRenew',
      bizRegionId: 'BizRegionId',
      chargeResourceMode: 'ChargeResourceMode',
      chargeType: 'ChargeType',
      network: 'Network',
      nodePool: 'NodePool',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      preOpenAppId: 'PreOpenAppId',
      productType: 'ProductType',
      promotionId: 'PromotionId',
      runtimePolicy: 'RuntimePolicy',
      securityPolicy: 'SecurityPolicy',
      sessionTimeout: 'SessionTimeout',
      storagePolicy: 'StoragePolicy',
      userInfo: 'UserInfo',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCenterImageId: 'string',
      appInstanceGroupName: 'string',
      autoPay: 'boolean',
      autoRenew: 'boolean',
      bizRegionId: 'string',
      chargeResourceMode: 'string',
      chargeType: 'string',
      network: CreateAppInstanceGroupRequestNetwork,
      nodePool: CreateAppInstanceGroupRequestNodePool,
      period: 'number',
      periodUnit: 'string',
      preOpenAppId: 'string',
      productType: 'string',
      promotionId: 'string',
      runtimePolicy: CreateAppInstanceGroupRequestRuntimePolicy,
      securityPolicy: CreateAppInstanceGroupRequestSecurityPolicy,
      sessionTimeout: 'number',
      storagePolicy: CreateAppInstanceGroupRequestStoragePolicy,
      userInfo: CreateAppInstanceGroupRequestUserInfo,
      users: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppInstanceGroupShrinkRequest extends $tea.Model {
  appCenterImageId?: string;
  appInstanceGroupName?: string;
  autoPay?: boolean;
  autoRenew?: boolean;
  bizRegionId?: string;
  chargeResourceMode?: string;
  chargeType?: string;
  networkShrink?: string;
  nodePoolShrink?: string;
  period?: number;
  periodUnit?: string;
  preOpenAppId?: string;
  productType?: string;
  promotionId?: string;
  runtimePolicyShrink?: string;
  securityPolicyShrink?: string;
  sessionTimeout?: number;
  storagePolicyShrink?: string;
  userInfoShrink?: string;
  users?: string[];
  static names(): { [key: string]: string } {
    return {
      appCenterImageId: 'AppCenterImageId',
      appInstanceGroupName: 'AppInstanceGroupName',
      autoPay: 'AutoPay',
      autoRenew: 'AutoRenew',
      bizRegionId: 'BizRegionId',
      chargeResourceMode: 'ChargeResourceMode',
      chargeType: 'ChargeType',
      networkShrink: 'Network',
      nodePoolShrink: 'NodePool',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      preOpenAppId: 'PreOpenAppId',
      productType: 'ProductType',
      promotionId: 'PromotionId',
      runtimePolicyShrink: 'RuntimePolicy',
      securityPolicyShrink: 'SecurityPolicy',
      sessionTimeout: 'SessionTimeout',
      storagePolicyShrink: 'StoragePolicy',
      userInfoShrink: 'UserInfo',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCenterImageId: 'string',
      appInstanceGroupName: 'string',
      autoPay: 'boolean',
      autoRenew: 'boolean',
      bizRegionId: 'string',
      chargeResourceMode: 'string',
      chargeType: 'string',
      networkShrink: 'string',
      nodePoolShrink: 'string',
      period: 'number',
      periodUnit: 'string',
      preOpenAppId: 'string',
      productType: 'string',
      promotionId: 'string',
      runtimePolicyShrink: 'string',
      securityPolicyShrink: 'string',
      sessionTimeout: 'number',
      storagePolicyShrink: 'string',
      userInfoShrink: 'string',
      users: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppInstanceGroupResponseBody extends $tea.Model {
  appInstanceGroupModel?: CreateAppInstanceGroupResponseBodyAppInstanceGroupModel;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appInstanceGroupModel: 'AppInstanceGroupModel',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceGroupModel: CreateAppInstanceGroupResponseBodyAppInstanceGroupModel,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppInstanceGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateAppInstanceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateAppInstanceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateImageFromAppInstanceGroupRequest extends $tea.Model {
  appCenterImageName?: string;
  appInstanceGroupId?: string;
  productType?: string;
  static names(): { [key: string]: string } {
    return {
      appCenterImageName: 'AppCenterImageName',
      appInstanceGroupId: 'AppInstanceGroupId',
      productType: 'ProductType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCenterImageName: 'string',
      appInstanceGroupId: 'string',
      productType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateImageFromAppInstanceGroupResponseBody extends $tea.Model {
  imageId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateImageFromAppInstanceGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateImageFromAppInstanceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateImageFromAppInstanceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectRequest extends $tea.Model {
  clipboard?: number;
  cloudEnvId?: string;
  contentId?: string;
  description?: string;
  fileTransfer?: number;
  frameRate?: number;
  keepAliveDuration?: number;
  projectName?: string;
  sessionResolutionHeight?: number;
  sessionResolutionWidth?: number;
  sessionSpec?: string;
  streamingMode?: string;
  terminalResolutionAdaptation?: boolean;
  static names(): { [key: string]: string } {
    return {
      clipboard: 'Clipboard',
      cloudEnvId: 'CloudEnvId',
      contentId: 'ContentId',
      description: 'Description',
      fileTransfer: 'FileTransfer',
      frameRate: 'FrameRate',
      keepAliveDuration: 'KeepAliveDuration',
      projectName: 'ProjectName',
      sessionResolutionHeight: 'SessionResolutionHeight',
      sessionResolutionWidth: 'SessionResolutionWidth',
      sessionSpec: 'SessionSpec',
      streamingMode: 'StreamingMode',
      terminalResolutionAdaptation: 'TerminalResolutionAdaptation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clipboard: 'number',
      cloudEnvId: 'string',
      contentId: 'string',
      description: 'string',
      fileTransfer: 'number',
      frameRate: 'number',
      keepAliveDuration: 'number',
      projectName: 'string',
      sessionResolutionHeight: 'number',
      sessionResolutionWidth: 'number',
      sessionSpec: 'string',
      streamingMode: 'string',
      terminalResolutionAdaptation: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAccessPageRequest extends $tea.Model {
  accessPageId?: string;
  static names(): { [key: string]: string } {
    return {
      accessPageId: 'AccessPageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessPageId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAccessPageResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: string;
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
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAccessPageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteAccessPageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteAccessPageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppInstanceGroupRequest extends $tea.Model {
  appInstanceGroupId?: string;
  productType?: string;
  static names(): { [key: string]: string } {
    return {
      appInstanceGroupId: 'AppInstanceGroupId',
      productType: 'ProductType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceGroupId: 'string',
      productType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppInstanceGroupResponseBody extends $tea.Model {
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

export class DeleteAppInstanceGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteAppInstanceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteAppInstanceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppInstancesRequest extends $tea.Model {
  appInstanceGroupId?: string;
  appInstanceIds?: string[];
  productType?: string;
  static names(): { [key: string]: string } {
    return {
      appInstanceGroupId: 'AppInstanceGroupId',
      appInstanceIds: 'AppInstanceIds',
      productType: 'ProductType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceGroupId: 'string',
      appInstanceIds: { 'type': 'array', 'itemType': 'string' },
      productType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppInstancesResponseBody extends $tea.Model {
  deleteAppInstanceModels?: DeleteAppInstancesResponseBodyDeleteAppInstanceModels[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      deleteAppInstanceModels: 'DeleteAppInstanceModels',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteAppInstanceModels: { 'type': 'array', 'itemType': DeleteAppInstancesResponseBodyDeleteAppInstanceModels },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteAppInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteAppInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProjectRequest extends $tea.Model {
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProjectResponseBody extends $tea.Model {
  code?: string;
  data?: boolean;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccessPageSessionRequest extends $tea.Model {
  accessPageId?: string;
  accessPageToken?: string;
  externalUserId?: string;
  static names(): { [key: string]: string } {
    return {
      accessPageId: 'AccessPageId',
      accessPageToken: 'AccessPageToken',
      externalUserId: 'ExternalUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessPageId: 'string',
      accessPageToken: 'string',
      externalUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccessPageSessionResponseBody extends $tea.Model {
  code?: string;
  data?: GetAccessPageSessionResponseBodyData;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetAccessPageSessionResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccessPageSessionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetAccessPageSessionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetAccessPageSessionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppInstanceGroupRequest extends $tea.Model {
  appInstanceGroupId?: string;
  productType?: string;
  static names(): { [key: string]: string } {
    return {
      appInstanceGroupId: 'AppInstanceGroupId',
      productType: 'ProductType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceGroupId: 'string',
      productType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppInstanceGroupResponseBody extends $tea.Model {
  appInstanceGroupModels?: GetAppInstanceGroupResponseBodyAppInstanceGroupModels;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appInstanceGroupModels: 'AppInstanceGroupModels',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceGroupModels: GetAppInstanceGroupResponseBodyAppInstanceGroupModels,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppInstanceGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetAppInstanceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetAppInstanceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConnectionTicketRequest extends $tea.Model {
  appId?: string;
  appInstanceGroupIdList?: string[];
  appInstanceId?: string;
  appInstancePersistentId?: string;
  appStartParam?: string;
  appVersion?: string;
  bizRegionId?: string;
  endUserId?: string;
  productType?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appInstanceGroupIdList: 'AppInstanceGroupIdList',
      appInstanceId: 'AppInstanceId',
      appInstancePersistentId: 'AppInstancePersistentId',
      appStartParam: 'AppStartParam',
      appVersion: 'AppVersion',
      bizRegionId: 'BizRegionId',
      endUserId: 'EndUserId',
      productType: 'ProductType',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appInstanceGroupIdList: { 'type': 'array', 'itemType': 'string' },
      appInstanceId: 'string',
      appInstancePersistentId: 'string',
      appStartParam: 'string',
      appVersion: 'string',
      bizRegionId: 'string',
      endUserId: 'string',
      productType: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConnectionTicketResponseBody extends $tea.Model {
  appInstanceGroupId?: string;
  appInstanceId?: string;
  appInstancePersistentId?: string;
  bizRegionId?: string;
  osType?: string;
  requestId?: string;
  taskId?: string;
  taskStatus?: string;
  tenantId?: number;
  ticket?: string;
  static names(): { [key: string]: string } {
    return {
      appInstanceGroupId: 'AppInstanceGroupId',
      appInstanceId: 'AppInstanceId',
      appInstancePersistentId: 'AppInstancePersistentId',
      bizRegionId: 'BizRegionId',
      osType: 'OsType',
      requestId: 'RequestId',
      taskId: 'TaskId',
      taskStatus: 'TaskStatus',
      tenantId: 'TenantId',
      ticket: 'Ticket',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceGroupId: 'string',
      appInstanceId: 'string',
      appInstancePersistentId: 'string',
      bizRegionId: 'string',
      osType: 'string',
      requestId: 'string',
      taskId: 'string',
      taskStatus: 'string',
      tenantId: 'number',
      ticket: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConnectionTicketResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetConnectionTicketResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetConnectionTicketResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDebugAppInstanceRequest extends $tea.Model {
  appInstanceGroupId?: string;
  productType?: string;
  static names(): { [key: string]: string } {
    return {
      appInstanceGroupId: 'AppInstanceGroupId',
      productType: 'ProductType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceGroupId: 'string',
      productType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDebugAppInstanceResponseBody extends $tea.Model {
  appId?: string;
  appInstanceGroupId?: string;
  appInstanceId?: string;
  appVersion?: string;
  authCode?: string;
  requestId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appInstanceGroupId: 'AppInstanceGroupId',
      appInstanceId: 'AppInstanceId',
      appVersion: 'AppVersion',
      authCode: 'AuthCode',
      requestId: 'RequestId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appInstanceGroupId: 'string',
      appInstanceId: 'string',
      appVersion: 'string',
      authCode: 'string',
      requestId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDebugAppInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetDebugAppInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetDebugAppInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOtaTaskByTaskIdRequest extends $tea.Model {
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

export class GetOtaTaskByTaskIdResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  otaVersion?: string;
  releaseNote?: string;
  requestId?: string;
  taskStartTime?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      otaVersion: 'OtaVersion',
      releaseNote: 'ReleaseNote',
      requestId: 'RequestId',
      taskStartTime: 'TaskStartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      otaVersion: 'string',
      releaseNote: 'string',
      requestId: 'string',
      taskStartTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOtaTaskByTaskIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetOtaTaskByTaskIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetOtaTaskByTaskIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectPoliciesRequest extends $tea.Model {
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectPoliciesResponseBody extends $tea.Model {
  code?: string;
  data?: GetProjectPoliciesResponseBodyData;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetProjectPoliciesResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectPoliciesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetProjectPoliciesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetProjectPoliciesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourcePriceRequest extends $tea.Model {
  amount?: number;
  appInstanceType?: string;
  bizRegionId?: string;
  chargeType?: string;
  nodeInstanceType?: string;
  period?: number;
  periodUnit?: string;
  productType?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      appInstanceType: 'AppInstanceType',
      bizRegionId: 'BizRegionId',
      chargeType: 'ChargeType',
      nodeInstanceType: 'NodeInstanceType',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      productType: 'ProductType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      appInstanceType: 'string',
      bizRegionId: 'string',
      chargeType: 'string',
      nodeInstanceType: 'string',
      period: 'number',
      periodUnit: 'string',
      productType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourcePriceResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  priceList?: GetResourcePriceResponseBodyPriceList[];
  priceModel?: GetResourcePriceResponseBodyPriceModel;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      priceList: 'PriceList',
      priceModel: 'PriceModel',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      priceList: { 'type': 'array', 'itemType': GetResourcePriceResponseBodyPriceList },
      priceModel: GetResourcePriceResponseBodyPriceModel,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourcePriceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetResourcePriceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetResourcePriceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceRenewPriceRequest extends $tea.Model {
  appInstanceGroupId?: string;
  period?: number;
  periodUnit?: string;
  productType?: string;
  static names(): { [key: string]: string } {
    return {
      appInstanceGroupId: 'AppInstanceGroupId',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      productType: 'ProductType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceGroupId: 'string',
      period: 'number',
      periodUnit: 'string',
      productType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceRenewPriceResponseBody extends $tea.Model {
  data?: GetResourceRenewPriceResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetResourceRenewPriceResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceRenewPriceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetResourceRenewPriceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetResourceRenewPriceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccessPagesRequest extends $tea.Model {
  accessPageId?: string;
  accessPageName?: string;
  pageNumber?: number;
  pageSize?: number;
  projectId?: string;
  sortType?: string;
  static names(): { [key: string]: string } {
    return {
      accessPageId: 'AccessPageId',
      accessPageName: 'AccessPageName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      sortType: 'SortType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessPageId: 'string',
      accessPageName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'string',
      sortType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccessPagesResponseBody extends $tea.Model {
  code?: string;
  count?: string;
  data?: ListAccessPagesResponseBodyData[];
  message?: string;
  pageNumber?: string;
  pageSize?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      count: 'Count',
      data: 'Data',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      count: 'string',
      data: { 'type': 'array', 'itemType': ListAccessPagesResponseBodyData },
      message: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccessPagesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListAccessPagesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListAccessPagesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppInstanceGroupRequest extends $tea.Model {
  appCenterImageId?: string;
  appInstanceGroupId?: string;
  appInstanceGroupName?: string;
  bizRegionId?: string;
  nodeInstanceType?: string;
  pageNumber?: number;
  pageSize?: number;
  productType?: string;
  status?: string[];
  static names(): { [key: string]: string } {
    return {
      appCenterImageId: 'AppCenterImageId',
      appInstanceGroupId: 'AppInstanceGroupId',
      appInstanceGroupName: 'AppInstanceGroupName',
      bizRegionId: 'BizRegionId',
      nodeInstanceType: 'NodeInstanceType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      productType: 'ProductType',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCenterImageId: 'string',
      appInstanceGroupId: 'string',
      appInstanceGroupName: 'string',
      bizRegionId: 'string',
      nodeInstanceType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      productType: 'string',
      status: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppInstanceGroupResponseBody extends $tea.Model {
  appInstanceGroupModels?: ListAppInstanceGroupResponseBodyAppInstanceGroupModels[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      appInstanceGroupModels: 'AppInstanceGroupModels',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceGroupModels: { 'type': 'array', 'itemType': ListAppInstanceGroupResponseBodyAppInstanceGroupModels },
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

export class ListAppInstanceGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListAppInstanceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListAppInstanceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppInstancesRequest extends $tea.Model {
  appInstanceGroupId?: string;
  appInstanceId?: string;
  appInstanceIdList?: string[];
  includeDeleted?: boolean;
  pageNumber?: number;
  pageSize?: number;
  status?: string[];
  static names(): { [key: string]: string } {
    return {
      appInstanceGroupId: 'AppInstanceGroupId',
      appInstanceId: 'AppInstanceId',
      appInstanceIdList: 'AppInstanceIdList',
      includeDeleted: 'IncludeDeleted',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceGroupId: 'string',
      appInstanceId: 'string',
      appInstanceIdList: { 'type': 'array', 'itemType': 'string' },
      includeDeleted: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
      status: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppInstancesResponseBody extends $tea.Model {
  appInstanceModels?: ListAppInstancesResponseBodyAppInstanceModels[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      appInstanceModels: 'AppInstanceModels',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceModels: { 'type': 'array', 'itemType': ListAppInstancesResponseBodyAppInstanceModels },
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

export class ListAppInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListAppInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListAppInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeInstanceTypeRequest extends $tea.Model {
  bizRegionId?: string;
  language?: string;
  nodeInstanceType?: string;
  osType?: string;
  pageNumber?: number;
  pageSize?: number;
  productType?: string;
  static names(): { [key: string]: string } {
    return {
      bizRegionId: 'BizRegionId',
      language: 'Language',
      nodeInstanceType: 'NodeInstanceType',
      osType: 'OsType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      productType: 'ProductType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizRegionId: 'string',
      language: 'string',
      nodeInstanceType: 'string',
      osType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      productType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeInstanceTypeResponseBody extends $tea.Model {
  nodeInstanceTypeModels?: ListNodeInstanceTypeResponseBodyNodeInstanceTypeModels[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      nodeInstanceTypeModels: 'NodeInstanceTypeModels',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeInstanceTypeModels: { 'type': 'array', 'itemType': ListNodeInstanceTypeResponseBodyNodeInstanceTypeModels },
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

export class ListNodeInstanceTypeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListNodeInstanceTypeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListNodeInstanceTypeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOtaTaskRequest extends $tea.Model {
  appInstanceGroupId?: string;
  otaType?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      appInstanceGroupId: 'AppInstanceGroupId',
      otaType: 'OtaType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceGroupId: 'string',
      otaType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOtaTaskResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  taskList?: ListOtaTaskResponseBodyTaskList[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      taskList: 'TaskList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      taskList: { 'type': 'array', 'itemType': ListOtaTaskResponseBodyTaskList },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOtaTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListOtaTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListOtaTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  projectId?: string;
  projectName?: string;
  sortType?: string;
  stateList?: number[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      sortType: 'SortType',
      stateList: 'StateList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'string',
      projectName: 'string',
      sortType: 'string',
      stateList: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponseBody extends $tea.Model {
  code?: string;
  data?: ListProjectsResponseBodyData[];
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
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
      data: { 'type': 'array', 'itemType': ListProjectsResponseBodyData },
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListProjectsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListProjectsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRegionsResponseBody extends $tea.Model {
  regionModels?: ListRegionsResponseBodyRegionModels[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      regionModels: 'RegionModels',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionModels: { 'type': 'array', 'itemType': ListRegionsResponseBodyRegionModels },
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

export class ListSessionPackagesRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  projectId?: string;
  sessionPackageId?: string;
  sessionPackageName?: string;
  sortType?: string;
  stateList?: number[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      sessionPackageId: 'SessionPackageId',
      sessionPackageName: 'SessionPackageName',
      sortType: 'SortType',
      stateList: 'StateList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'string',
      sessionPackageId: 'string',
      sessionPackageName: 'string',
      sortType: 'string',
      stateList: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSessionPackagesResponseBody extends $tea.Model {
  data?: ListSessionPackagesResponseBodyData[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListSessionPackagesResponseBodyData },
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

export class ListSessionPackagesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListSessionPackagesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListSessionPackagesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTenantConfigResponseBody extends $tea.Model {
  requestId?: string;
  tenantConfigModel?: ListTenantConfigResponseBodyTenantConfigModel;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tenantConfigModel: 'TenantConfigModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tenantConfigModel: ListTenantConfigResponseBodyTenantConfigModel,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTenantConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListTenantConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListTenantConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LogOffAllSessionsInAppInstanceGroupRequest extends $tea.Model {
  appInstanceGroupId?: string;
  productType?: string;
  static names(): { [key: string]: string } {
    return {
      appInstanceGroupId: 'AppInstanceGroupId',
      productType: 'ProductType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceGroupId: 'string',
      productType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LogOffAllSessionsInAppInstanceGroupResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LogOffAllSessionsInAppInstanceGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: LogOffAllSessionsInAppInstanceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: LogOffAllSessionsInAppInstanceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MigrateSessionPackageRequest extends $tea.Model {
  destProjectId?: string;
  sessionPackageId?: string;
  sourceProjectId?: string;
  static names(): { [key: string]: string } {
    return {
      destProjectId: 'DestProjectId',
      sessionPackageId: 'SessionPackageId',
      sourceProjectId: 'SourceProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destProjectId: 'string',
      sessionPackageId: 'string',
      sourceProjectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MigrateSessionPackageResponseBody extends $tea.Model {
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

export class MigrateSessionPackageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: MigrateSessionPackageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: MigrateSessionPackageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAppInstanceGroupAttributeRequest extends $tea.Model {
  appInstanceGroupId?: string;
  appInstanceGroupName?: string;
  network?: ModifyAppInstanceGroupAttributeRequestNetwork;
  nodePool?: ModifyAppInstanceGroupAttributeRequestNodePool;
  preOpenAppId?: string;
  preOpenMode?: string;
  productType?: string;
  securityPolicy?: ModifyAppInstanceGroupAttributeRequestSecurityPolicy;
  sessionTimeout?: number;
  storagePolicy?: ModifyAppInstanceGroupAttributeRequestStoragePolicy;
  static names(): { [key: string]: string } {
    return {
      appInstanceGroupId: 'AppInstanceGroupId',
      appInstanceGroupName: 'AppInstanceGroupName',
      network: 'Network',
      nodePool: 'NodePool',
      preOpenAppId: 'PreOpenAppId',
      preOpenMode: 'PreOpenMode',
      productType: 'ProductType',
      securityPolicy: 'SecurityPolicy',
      sessionTimeout: 'SessionTimeout',
      storagePolicy: 'StoragePolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceGroupId: 'string',
      appInstanceGroupName: 'string',
      network: ModifyAppInstanceGroupAttributeRequestNetwork,
      nodePool: ModifyAppInstanceGroupAttributeRequestNodePool,
      preOpenAppId: 'string',
      preOpenMode: 'string',
      productType: 'string',
      securityPolicy: ModifyAppInstanceGroupAttributeRequestSecurityPolicy,
      sessionTimeout: 'number',
      storagePolicy: ModifyAppInstanceGroupAttributeRequestStoragePolicy,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAppInstanceGroupAttributeShrinkRequest extends $tea.Model {
  appInstanceGroupId?: string;
  appInstanceGroupName?: string;
  networkShrink?: string;
  nodePoolShrink?: string;
  preOpenAppId?: string;
  preOpenMode?: string;
  productType?: string;
  securityPolicyShrink?: string;
  sessionTimeout?: number;
  storagePolicyShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appInstanceGroupId: 'AppInstanceGroupId',
      appInstanceGroupName: 'AppInstanceGroupName',
      networkShrink: 'Network',
      nodePoolShrink: 'NodePool',
      preOpenAppId: 'PreOpenAppId',
      preOpenMode: 'PreOpenMode',
      productType: 'ProductType',
      securityPolicyShrink: 'SecurityPolicy',
      sessionTimeout: 'SessionTimeout',
      storagePolicyShrink: 'StoragePolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceGroupId: 'string',
      appInstanceGroupName: 'string',
      networkShrink: 'string',
      nodePoolShrink: 'string',
      preOpenAppId: 'string',
      preOpenMode: 'string',
      productType: 'string',
      securityPolicyShrink: 'string',
      sessionTimeout: 'number',
      storagePolicyShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAppInstanceGroupAttributeResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAppInstanceGroupAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyAppInstanceGroupAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyAppInstanceGroupAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyNodePoolAttributeRequest extends $tea.Model {
  bizRegionId?: string;
  nodeCapacity?: number;
  nodePoolStrategy?: ModifyNodePoolAttributeRequestNodePoolStrategy;
  poolId?: string;
  productType?: string;
  static names(): { [key: string]: string } {
    return {
      bizRegionId: 'BizRegionId',
      nodeCapacity: 'NodeCapacity',
      nodePoolStrategy: 'NodePoolStrategy',
      poolId: 'PoolId',
      productType: 'ProductType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizRegionId: 'string',
      nodeCapacity: 'number',
      nodePoolStrategy: ModifyNodePoolAttributeRequestNodePoolStrategy,
      poolId: 'string',
      productType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyNodePoolAttributeShrinkRequest extends $tea.Model {
  bizRegionId?: string;
  nodeCapacity?: number;
  nodePoolStrategyShrink?: string;
  poolId?: string;
  productType?: string;
  static names(): { [key: string]: string } {
    return {
      bizRegionId: 'BizRegionId',
      nodeCapacity: 'NodeCapacity',
      nodePoolStrategyShrink: 'NodePoolStrategy',
      poolId: 'PoolId',
      productType: 'ProductType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizRegionId: 'string',
      nodeCapacity: 'number',
      nodePoolStrategyShrink: 'string',
      poolId: 'string',
      productType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyNodePoolAttributeResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyNodePoolAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyNodePoolAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyNodePoolAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyProjectPolicyRequest extends $tea.Model {
  clipboard?: number;
  fileTransfer?: number;
  frameRate?: number;
  keepAliveDuration?: number;
  projectId?: string;
  sessionResolutionHeight?: number;
  sessionResolutionWidth?: number;
  streamingMode?: string;
  terminalResolutionAdaptation?: boolean;
  static names(): { [key: string]: string } {
    return {
      clipboard: 'Clipboard',
      fileTransfer: 'FileTransfer',
      frameRate: 'FrameRate',
      keepAliveDuration: 'KeepAliveDuration',
      projectId: 'ProjectId',
      sessionResolutionHeight: 'SessionResolutionHeight',
      sessionResolutionWidth: 'SessionResolutionWidth',
      streamingMode: 'StreamingMode',
      terminalResolutionAdaptation: 'TerminalResolutionAdaptation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clipboard: 'number',
      fileTransfer: 'number',
      frameRate: 'number',
      keepAliveDuration: 'number',
      projectId: 'string',
      sessionResolutionHeight: 'number',
      sessionResolutionWidth: 'number',
      streamingMode: 'string',
      terminalResolutionAdaptation: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyProjectPolicyResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyProjectPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyProjectPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyProjectPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTenantConfigRequest extends $tea.Model {
  appInstanceGroupExpireRemind?: boolean;
  static names(): { [key: string]: string } {
    return {
      appInstanceGroupExpireRemind: 'AppInstanceGroupExpireRemind',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceGroupExpireRemind: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTenantConfigResponseBody extends $tea.Model {
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

export class ModifyTenantConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyTenantConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyTenantConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PageListAppInstanceGroupUserRequest extends $tea.Model {
  appInstanceGroupId?: string;
  pageNumber?: number;
  pageSize?: number;
  productType?: string;
  static names(): { [key: string]: string } {
    return {
      appInstanceGroupId: 'AppInstanceGroupId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      productType: 'ProductType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceGroupId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      productType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PageListAppInstanceGroupUserResponseBody extends $tea.Model {
  requestId?: string;
  users?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      users: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PageListAppInstanceGroupUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PageListAppInstanceGroupUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PageListAppInstanceGroupUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshAccessUrlRequest extends $tea.Model {
  accessPageId?: string;
  static names(): { [key: string]: string } {
    return {
      accessPageId: 'AccessPageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessPageId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshAccessUrlResponseBody extends $tea.Model {
  accessUrl?: string;
  code?: string;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      accessUrl: 'AccessUrl',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessUrl: 'string',
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshAccessUrlResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RefreshAccessUrlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RefreshAccessUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewAppInstanceGroupRequest extends $tea.Model {
  appInstanceGroupId?: string;
  autoPay?: boolean;
  period?: number;
  periodUnit?: string;
  productType?: string;
  promotionId?: string;
  static names(): { [key: string]: string } {
    return {
      appInstanceGroupId: 'AppInstanceGroupId',
      autoPay: 'AutoPay',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      productType: 'ProductType',
      promotionId: 'PromotionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceGroupId: 'string',
      autoPay: 'boolean',
      period: 'number',
      periodUnit: 'string',
      productType: 'string',
      promotionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewAppInstanceGroupResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  orderId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      orderId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewAppInstanceGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RenewAppInstanceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RenewAppInstanceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewSessionPackageRequest extends $tea.Model {
  period?: number;
  periodUnit?: string;
  sessionPackageId?: string;
  static names(): { [key: string]: string } {
    return {
      period: 'Period',
      periodUnit: 'PeriodUnit',
      sessionPackageId: 'SessionPackageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      period: 'number',
      periodUnit: 'string',
      sessionPackageId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewSessionPackageResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  sessionPackageId?: number;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      sessionPackageId: 'SessionPackageId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      sessionPackageId: 'number',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewSessionPackageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RenewSessionPackageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RenewSessionPackageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindRequest extends $tea.Model {
  appInstanceGroupId?: string;
  appInstanceId?: string;
  appInstancePersistentId?: string;
  endUserId?: string;
  productType?: string;
  static names(): { [key: string]: string } {
    return {
      appInstanceGroupId: 'AppInstanceGroupId',
      appInstanceId: 'AppInstanceId',
      appInstancePersistentId: 'AppInstancePersistentId',
      endUserId: 'EndUserId',
      productType: 'ProductType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceGroupId: 'string',
      appInstanceId: 'string',
      appInstancePersistentId: 'string',
      endUserId: 'string',
      productType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindResponseBody extends $tea.Model {
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

export class UnbindResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UnbindResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UnbindResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAccessPageStateRequest extends $tea.Model {
  accessPageId?: string;
  accessPageState?: number;
  static names(): { [key: string]: string } {
    return {
      accessPageId: 'AccessPageId',
      accessPageState: 'AccessPageState',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessPageId: 'string',
      accessPageState: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAccessPageStateResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: string;
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
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAccessPageStateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateAccessPageStateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateAccessPageStateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppInstanceGroupImageRequest extends $tea.Model {
  appCenterImageId?: string;
  appInstanceGroupId?: string;
  bizRegionId?: string;
  productType?: string;
  static names(): { [key: string]: string } {
    return {
      appCenterImageId: 'AppCenterImageId',
      appInstanceGroupId: 'AppInstanceGroupId',
      bizRegionId: 'BizRegionId',
      productType: 'ProductType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCenterImageId: 'string',
      appInstanceGroupId: 'string',
      bizRegionId: 'string',
      productType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppInstanceGroupImageResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppInstanceGroupImageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateAppInstanceGroupImageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateAppInstanceGroupImageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AccessPageGetAclResponseBodyData extends $tea.Model {
  accessMode?: string;
  accessUrl?: string;
  effectTime?: number;
  unit?: string;
  urlExpireTime?: string;
  static names(): { [key: string]: string } {
    return {
      accessMode: 'AccessMode',
      accessUrl: 'AccessUrl',
      effectTime: 'EffectTime',
      unit: 'Unit',
      urlExpireTime: 'UrlExpireTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessMode: 'string',
      accessUrl: 'string',
      effectTime: 'number',
      unit: 'string',
      urlExpireTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AskSessionPackagePriceResponseBodyDataPrice extends $tea.Model {
  currency?: string;
  discountPrice?: number;
  originalPrice?: number;
  tradePrice?: number;
  static names(): { [key: string]: string } {
    return {
      currency: 'Currency',
      discountPrice: 'DiscountPrice',
      originalPrice: 'OriginalPrice',
      tradePrice: 'TradePrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currency: 'string',
      discountPrice: 'number',
      originalPrice: 'number',
      tradePrice: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AskSessionPackagePriceResponseBodyData extends $tea.Model {
  price?: AskSessionPackagePriceResponseBodyDataPrice;
  static names(): { [key: string]: string } {
    return {
      price: 'Price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      price: AskSessionPackagePriceResponseBodyDataPrice,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AskSessionPackageRenewPriceResponseBodyDataPrice extends $tea.Model {
  currency?: string;
  discountPrice?: number;
  originalPrice?: number;
  tradePrice?: number;
  static names(): { [key: string]: string } {
    return {
      currency: 'Currency',
      discountPrice: 'DiscountPrice',
      originalPrice: 'OriginalPrice',
      tradePrice: 'TradePrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currency: 'string',
      discountPrice: 'number',
      originalPrice: 'number',
      tradePrice: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AskSessionPackageRenewPriceResponseBodyData extends $tea.Model {
  price?: AskSessionPackageRenewPriceResponseBodyDataPrice;
  static names(): { [key: string]: string } {
    return {
      price: 'Price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      price: AskSessionPackageRenewPriceResponseBodyDataPrice,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppInstanceGroupRequestNetworkDomainRules extends $tea.Model {
  domain?: string;
  policy?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      policy: 'Policy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      policy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppInstanceGroupRequestNetworkRoutes extends $tea.Model {
  destination?: string;
  mode?: string;
  static names(): { [key: string]: string } {
    return {
      destination: 'Destination',
      mode: 'Mode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destination: 'string',
      mode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppInstanceGroupRequestNetwork extends $tea.Model {
  domainRules?: CreateAppInstanceGroupRequestNetworkDomainRules[];
  ipExpireMinutes?: number;
  routes?: CreateAppInstanceGroupRequestNetworkRoutes[];
  strategyType?: string;
  static names(): { [key: string]: string } {
    return {
      domainRules: 'DomainRules',
      ipExpireMinutes: 'IpExpireMinutes',
      routes: 'Routes',
      strategyType: 'StrategyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainRules: { 'type': 'array', 'itemType': CreateAppInstanceGroupRequestNetworkDomainRules },
      ipExpireMinutes: 'number',
      routes: { 'type': 'array', 'itemType': CreateAppInstanceGroupRequestNetworkRoutes },
      strategyType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppInstanceGroupRequestNodePoolRecurrenceSchedulesTimerPeriods extends $tea.Model {
  amount?: number;
  endTime?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      endTime: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppInstanceGroupRequestNodePoolRecurrenceSchedules extends $tea.Model {
  recurrenceType?: string;
  recurrenceValues?: number[];
  timerPeriods?: CreateAppInstanceGroupRequestNodePoolRecurrenceSchedulesTimerPeriods[];
  static names(): { [key: string]: string } {
    return {
      recurrenceType: 'RecurrenceType',
      recurrenceValues: 'RecurrenceValues',
      timerPeriods: 'TimerPeriods',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recurrenceType: 'string',
      recurrenceValues: { 'type': 'array', 'itemType': 'number' },
      timerPeriods: { 'type': 'array', 'itemType': CreateAppInstanceGroupRequestNodePoolRecurrenceSchedulesTimerPeriods },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppInstanceGroupRequestNodePool extends $tea.Model {
  maxScalingAmount?: number;
  nodeAmount?: number;
  nodeCapacity?: number;
  nodeInstanceType?: string;
  recurrenceSchedules?: CreateAppInstanceGroupRequestNodePoolRecurrenceSchedules[];
  scalingDownAfterIdleMinutes?: number;
  scalingStep?: number;
  scalingUsageThreshold?: string;
  strategyDisableDate?: string;
  strategyEnableDate?: string;
  strategyType?: string;
  warmUp?: boolean;
  static names(): { [key: string]: string } {
    return {
      maxScalingAmount: 'MaxScalingAmount',
      nodeAmount: 'NodeAmount',
      nodeCapacity: 'NodeCapacity',
      nodeInstanceType: 'NodeInstanceType',
      recurrenceSchedules: 'RecurrenceSchedules',
      scalingDownAfterIdleMinutes: 'ScalingDownAfterIdleMinutes',
      scalingStep: 'ScalingStep',
      scalingUsageThreshold: 'ScalingUsageThreshold',
      strategyDisableDate: 'StrategyDisableDate',
      strategyEnableDate: 'StrategyEnableDate',
      strategyType: 'StrategyType',
      warmUp: 'WarmUp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxScalingAmount: 'number',
      nodeAmount: 'number',
      nodeCapacity: 'number',
      nodeInstanceType: 'string',
      recurrenceSchedules: { 'type': 'array', 'itemType': CreateAppInstanceGroupRequestNodePoolRecurrenceSchedules },
      scalingDownAfterIdleMinutes: 'number',
      scalingStep: 'number',
      scalingUsageThreshold: 'string',
      strategyDisableDate: 'string',
      strategyEnableDate: 'string',
      strategyType: 'string',
      warmUp: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppInstanceGroupRequestRuntimePolicy extends $tea.Model {
  debugMode?: string;
  sessionType?: string;
  static names(): { [key: string]: string } {
    return {
      debugMode: 'DebugMode',
      sessionType: 'SessionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      debugMode: 'string',
      sessionType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppInstanceGroupRequestSecurityPolicy extends $tea.Model {
  resetAfterUnbind?: boolean;
  skipUserAuthCheck?: boolean;
  static names(): { [key: string]: string } {
    return {
      resetAfterUnbind: 'ResetAfterUnbind',
      skipUserAuthCheck: 'SkipUserAuthCheck',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resetAfterUnbind: 'boolean',
      skipUserAuthCheck: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppInstanceGroupRequestStoragePolicy extends $tea.Model {
  storageTypeList?: string[];
  static names(): { [key: string]: string } {
    return {
      storageTypeList: 'StorageTypeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      storageTypeList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppInstanceGroupRequestUserInfo extends $tea.Model {
  type?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppInstanceGroupResponseBodyAppInstanceGroupModel extends $tea.Model {
  appInstanceGroupId?: string;
  nodePoolId?: string;
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      appInstanceGroupId: 'AppInstanceGroupId',
      nodePoolId: 'NodePoolId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceGroupId: 'string',
      nodePoolId: 'string',
      orderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppInstancesResponseBodyDeleteAppInstanceModels extends $tea.Model {
  appInstanceId?: string;
  code?: string;
  message?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      appInstanceId: 'AppInstanceId',
      code: 'Code',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceId: 'string',
      code: 'string',
      message: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccessPageSessionResponseBodyData extends $tea.Model {
  connectTicket?: string;
  flowId?: string;
  static names(): { [key: string]: string } {
    return {
      connectTicket: 'ConnectTicket',
      flowId: 'FlowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectTicket: 'string',
      flowId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppInstanceGroupResponseBodyAppInstanceGroupModelsApps extends $tea.Model {
  appIcon?: string;
  appId?: string;
  appName?: string;
  appVersion?: string;
  appVersionName?: string;
  static names(): { [key: string]: string } {
    return {
      appIcon: 'AppIcon',
      appId: 'AppId',
      appName: 'AppName',
      appVersion: 'AppVersion',
      appVersionName: 'AppVersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appIcon: 'string',
      appId: 'string',
      appName: 'string',
      appVersion: 'string',
      appVersionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppInstanceGroupResponseBodyAppInstanceGroupModelsNodePoolRecurrenceSchedulesTimerPeriods extends $tea.Model {
  amount?: number;
  endTime?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      endTime: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppInstanceGroupResponseBodyAppInstanceGroupModelsNodePoolRecurrenceSchedules extends $tea.Model {
  recurrenceType?: string;
  recurrenceValues?: number[];
  timerPeriods?: GetAppInstanceGroupResponseBodyAppInstanceGroupModelsNodePoolRecurrenceSchedulesTimerPeriods[];
  static names(): { [key: string]: string } {
    return {
      recurrenceType: 'RecurrenceType',
      recurrenceValues: 'RecurrenceValues',
      timerPeriods: 'TimerPeriods',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recurrenceType: 'string',
      recurrenceValues: { 'type': 'array', 'itemType': 'number' },
      timerPeriods: { 'type': 'array', 'itemType': GetAppInstanceGroupResponseBodyAppInstanceGroupModelsNodePoolRecurrenceSchedulesTimerPeriods },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppInstanceGroupResponseBodyAppInstanceGroupModelsNodePool extends $tea.Model {
  amount?: number;
  maxScalingAmount?: number;
  nodeAmount?: number;
  nodeCapacity?: number;
  nodeInstanceType?: string;
  nodePoolId?: string;
  nodeTypeName?: string;
  nodeUsed?: number;
  recurrenceSchedules?: GetAppInstanceGroupResponseBodyAppInstanceGroupModelsNodePoolRecurrenceSchedules[];
  scalingDownAfterIdleMinutes?: number;
  scalingNodeAmount?: number;
  scalingNodeUsed?: number;
  scalingStep?: number;
  scalingUsageThreshold?: string;
  strategyDisableDate?: string;
  strategyEnableDate?: string;
  strategyType?: string;
  warmUp?: boolean;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      maxScalingAmount: 'MaxScalingAmount',
      nodeAmount: 'NodeAmount',
      nodeCapacity: 'NodeCapacity',
      nodeInstanceType: 'NodeInstanceType',
      nodePoolId: 'NodePoolId',
      nodeTypeName: 'NodeTypeName',
      nodeUsed: 'NodeUsed',
      recurrenceSchedules: 'RecurrenceSchedules',
      scalingDownAfterIdleMinutes: 'ScalingDownAfterIdleMinutes',
      scalingNodeAmount: 'ScalingNodeAmount',
      scalingNodeUsed: 'ScalingNodeUsed',
      scalingStep: 'ScalingStep',
      scalingUsageThreshold: 'ScalingUsageThreshold',
      strategyDisableDate: 'StrategyDisableDate',
      strategyEnableDate: 'StrategyEnableDate',
      strategyType: 'StrategyType',
      warmUp: 'WarmUp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      maxScalingAmount: 'number',
      nodeAmount: 'number',
      nodeCapacity: 'number',
      nodeInstanceType: 'string',
      nodePoolId: 'string',
      nodeTypeName: 'string',
      nodeUsed: 'number',
      recurrenceSchedules: { 'type': 'array', 'itemType': GetAppInstanceGroupResponseBodyAppInstanceGroupModelsNodePoolRecurrenceSchedules },
      scalingDownAfterIdleMinutes: 'number',
      scalingNodeAmount: 'number',
      scalingNodeUsed: 'number',
      scalingStep: 'number',
      scalingUsageThreshold: 'string',
      strategyDisableDate: 'string',
      strategyEnableDate: 'string',
      strategyType: 'string',
      warmUp: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppInstanceGroupResponseBodyAppInstanceGroupModelsOtaInfo extends $tea.Model {
  newOtaVersion?: string;
  otaVersion?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      newOtaVersion: 'NewOtaVersion',
      otaVersion: 'OtaVersion',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newOtaVersion: 'string',
      otaVersion: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppInstanceGroupResponseBodyAppInstanceGroupModels extends $tea.Model {
  amount?: number;
  appCenterImageId?: string;
  appCenterImageName?: string;
  appInstanceGroupId?: string;
  appInstanceGroupName?: string;
  appInstanceType?: string;
  appInstanceTypeName?: string;
  appPolicyId?: string;
  apps?: GetAppInstanceGroupResponseBodyAppInstanceGroupModelsApps[];
  chargeResourceMode?: string;
  chargeType?: string;
  expiredTime?: string;
  gmtCreate?: string;
  maxAmount?: number;
  minAmount?: number;
  nodePool?: GetAppInstanceGroupResponseBodyAppInstanceGroupModelsNodePool[];
  osType?: string;
  otaInfo?: GetAppInstanceGroupResponseBodyAppInstanceGroupModelsOtaInfo;
  productType?: string;
  regionId?: string;
  reserveAmountRatio?: string;
  reserveMaxAmount?: number;
  reserveMinAmount?: number;
  resourceStatus?: string;
  scalingDownAfterIdleMinutes?: number;
  scalingStep?: number;
  scalingUsageThreshold?: string;
  sessionTimeout?: string;
  skipUserAuthCheck?: boolean;
  specId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      appCenterImageId: 'AppCenterImageId',
      appCenterImageName: 'AppCenterImageName',
      appInstanceGroupId: 'AppInstanceGroupId',
      appInstanceGroupName: 'AppInstanceGroupName',
      appInstanceType: 'AppInstanceType',
      appInstanceTypeName: 'AppInstanceTypeName',
      appPolicyId: 'AppPolicyId',
      apps: 'Apps',
      chargeResourceMode: 'ChargeResourceMode',
      chargeType: 'ChargeType',
      expiredTime: 'ExpiredTime',
      gmtCreate: 'GmtCreate',
      maxAmount: 'MaxAmount',
      minAmount: 'MinAmount',
      nodePool: 'NodePool',
      osType: 'OsType',
      otaInfo: 'OtaInfo',
      productType: 'ProductType',
      regionId: 'RegionId',
      reserveAmountRatio: 'ReserveAmountRatio',
      reserveMaxAmount: 'ReserveMaxAmount',
      reserveMinAmount: 'ReserveMinAmount',
      resourceStatus: 'ResourceStatus',
      scalingDownAfterIdleMinutes: 'ScalingDownAfterIdleMinutes',
      scalingStep: 'ScalingStep',
      scalingUsageThreshold: 'ScalingUsageThreshold',
      sessionTimeout: 'SessionTimeout',
      skipUserAuthCheck: 'SkipUserAuthCheck',
      specId: 'SpecId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      appCenterImageId: 'string',
      appCenterImageName: 'string',
      appInstanceGroupId: 'string',
      appInstanceGroupName: 'string',
      appInstanceType: 'string',
      appInstanceTypeName: 'string',
      appPolicyId: 'string',
      apps: { 'type': 'array', 'itemType': GetAppInstanceGroupResponseBodyAppInstanceGroupModelsApps },
      chargeResourceMode: 'string',
      chargeType: 'string',
      expiredTime: 'string',
      gmtCreate: 'string',
      maxAmount: 'number',
      minAmount: 'number',
      nodePool: { 'type': 'array', 'itemType': GetAppInstanceGroupResponseBodyAppInstanceGroupModelsNodePool },
      osType: 'string',
      otaInfo: GetAppInstanceGroupResponseBodyAppInstanceGroupModelsOtaInfo,
      productType: 'string',
      regionId: 'string',
      reserveAmountRatio: 'string',
      reserveMaxAmount: 'number',
      reserveMinAmount: 'number',
      resourceStatus: 'string',
      scalingDownAfterIdleMinutes: 'number',
      scalingStep: 'number',
      scalingUsageThreshold: 'string',
      sessionTimeout: 'string',
      skipUserAuthCheck: 'boolean',
      specId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectPoliciesResponseBodyData extends $tea.Model {
  clipboard?: number;
  fileTransfer?: number;
  frameRate?: string;
  keepAliveDuration?: number;
  maxHours?: number;
  maxSessions?: number;
  projectId?: string;
  sessionResolutionHeight?: number;
  sessionResolutionWidth?: number;
  sessionSpec?: string;
  streamingMode?: string;
  terminalResolutionAdaptation?: boolean;
  static names(): { [key: string]: string } {
    return {
      clipboard: 'Clipboard',
      fileTransfer: 'FileTransfer',
      frameRate: 'FrameRate',
      keepAliveDuration: 'KeepAliveDuration',
      maxHours: 'MaxHours',
      maxSessions: 'MaxSessions',
      projectId: 'ProjectId',
      sessionResolutionHeight: 'SessionResolutionHeight',
      sessionResolutionWidth: 'SessionResolutionWidth',
      sessionSpec: 'SessionSpec',
      streamingMode: 'StreamingMode',
      terminalResolutionAdaptation: 'TerminalResolutionAdaptation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clipboard: 'number',
      fileTransfer: 'number',
      frameRate: 'string',
      keepAliveDuration: 'number',
      maxHours: 'number',
      maxSessions: 'number',
      projectId: 'string',
      sessionResolutionHeight: 'number',
      sessionResolutionWidth: 'number',
      sessionSpec: 'string',
      streamingMode: 'string',
      terminalResolutionAdaptation: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourcePriceResponseBodyPriceListPricePromotions extends $tea.Model {
  optionCode?: string;
  promotionDesc?: string;
  promotionId?: string;
  promotionName?: string;
  selected?: boolean;
  static names(): { [key: string]: string } {
    return {
      optionCode: 'OptionCode',
      promotionDesc: 'PromotionDesc',
      promotionId: 'PromotionId',
      promotionName: 'PromotionName',
      selected: 'Selected',
    };
  }

  static types(): { [key: string]: any } {
    return {
      optionCode: 'string',
      promotionDesc: 'string',
      promotionId: 'string',
      promotionName: 'string',
      selected: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourcePriceResponseBodyPriceListPrice extends $tea.Model {
  currency?: string;
  discountPrice?: string;
  originalPrice?: string;
  promotions?: GetResourcePriceResponseBodyPriceListPricePromotions[];
  tradePrice?: string;
  static names(): { [key: string]: string } {
    return {
      currency: 'Currency',
      discountPrice: 'DiscountPrice',
      originalPrice: 'OriginalPrice',
      promotions: 'Promotions',
      tradePrice: 'TradePrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currency: 'string',
      discountPrice: 'string',
      originalPrice: 'string',
      promotions: { 'type': 'array', 'itemType': GetResourcePriceResponseBodyPriceListPricePromotions },
      tradePrice: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourcePriceResponseBodyPriceListRules extends $tea.Model {
  description?: string;
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      ruleId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourcePriceResponseBodyPriceList extends $tea.Model {
  price?: GetResourcePriceResponseBodyPriceListPrice;
  priceType?: string;
  rules?: GetResourcePriceResponseBodyPriceListRules[];
  static names(): { [key: string]: string } {
    return {
      price: 'Price',
      priceType: 'PriceType',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      price: GetResourcePriceResponseBodyPriceListPrice,
      priceType: 'string',
      rules: { 'type': 'array', 'itemType': GetResourcePriceResponseBodyPriceListRules },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourcePriceResponseBodyPriceModelPricePromotions extends $tea.Model {
  optionCode?: string;
  promotionDesc?: string;
  promotionId?: string;
  promotionName?: string;
  selected?: boolean;
  static names(): { [key: string]: string } {
    return {
      optionCode: 'OptionCode',
      promotionDesc: 'PromotionDesc',
      promotionId: 'PromotionId',
      promotionName: 'PromotionName',
      selected: 'Selected',
    };
  }

  static types(): { [key: string]: any } {
    return {
      optionCode: 'string',
      promotionDesc: 'string',
      promotionId: 'string',
      promotionName: 'string',
      selected: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourcePriceResponseBodyPriceModelPrice extends $tea.Model {
  currency?: string;
  discountPrice?: string;
  originalPrice?: string;
  promotions?: GetResourcePriceResponseBodyPriceModelPricePromotions[];
  tradePrice?: string;
  static names(): { [key: string]: string } {
    return {
      currency: 'Currency',
      discountPrice: 'DiscountPrice',
      originalPrice: 'OriginalPrice',
      promotions: 'Promotions',
      tradePrice: 'TradePrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currency: 'string',
      discountPrice: 'string',
      originalPrice: 'string',
      promotions: { 'type': 'array', 'itemType': GetResourcePriceResponseBodyPriceModelPricePromotions },
      tradePrice: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourcePriceResponseBodyPriceModelRules extends $tea.Model {
  description?: string;
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      ruleId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourcePriceResponseBodyPriceModel extends $tea.Model {
  price?: GetResourcePriceResponseBodyPriceModelPrice;
  rules?: GetResourcePriceResponseBodyPriceModelRules[];
  static names(): { [key: string]: string } {
    return {
      price: 'Price',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      price: GetResourcePriceResponseBodyPriceModelPrice,
      rules: { 'type': 'array', 'itemType': GetResourcePriceResponseBodyPriceModelRules },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceRenewPriceResponseBodyDataPricePromotions extends $tea.Model {
  optionCode?: string;
  promotionDesc?: string;
  promotionId?: string;
  promotionName?: string;
  selected?: boolean;
  static names(): { [key: string]: string } {
    return {
      optionCode: 'OptionCode',
      promotionDesc: 'PromotionDesc',
      promotionId: 'PromotionId',
      promotionName: 'PromotionName',
      selected: 'Selected',
    };
  }

  static types(): { [key: string]: any } {
    return {
      optionCode: 'string',
      promotionDesc: 'string',
      promotionId: 'string',
      promotionName: 'string',
      selected: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceRenewPriceResponseBodyDataPrice extends $tea.Model {
  currency?: string;
  discountPrice?: string;
  originalPrice?: string;
  promotions?: GetResourceRenewPriceResponseBodyDataPricePromotions[];
  tradePrice?: string;
  static names(): { [key: string]: string } {
    return {
      currency: 'Currency',
      discountPrice: 'DiscountPrice',
      originalPrice: 'OriginalPrice',
      promotions: 'Promotions',
      tradePrice: 'TradePrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currency: 'string',
      discountPrice: 'string',
      originalPrice: 'string',
      promotions: { 'type': 'array', 'itemType': GetResourceRenewPriceResponseBodyDataPricePromotions },
      tradePrice: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceRenewPriceResponseBodyDataRules extends $tea.Model {
  description?: string;
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      ruleId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceRenewPriceResponseBodyData extends $tea.Model {
  price?: GetResourceRenewPriceResponseBodyDataPrice;
  rules?: GetResourceRenewPriceResponseBodyDataRules[];
  static names(): { [key: string]: string } {
    return {
      price: 'Price',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      price: GetResourceRenewPriceResponseBodyDataPrice,
      rules: { 'type': 'array', 'itemType': GetResourceRenewPriceResponseBodyDataRules },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccessPagesResponseBodyData extends $tea.Model {
  accessMode?: string;
  accessPageId?: string;
  accessPageName?: string;
  accessPageState?: string;
  accessUrl?: string;
  contentId?: string;
  contentName?: string;
  effectTime?: number;
  gmtCreate?: string;
  projectId?: string;
  projectName?: string;
  unit?: string;
  urlExpireTime?: string;
  static names(): { [key: string]: string } {
    return {
      accessMode: 'AccessMode',
      accessPageId: 'AccessPageId',
      accessPageName: 'AccessPageName',
      accessPageState: 'AccessPageState',
      accessUrl: 'AccessUrl',
      contentId: 'ContentId',
      contentName: 'ContentName',
      effectTime: 'EffectTime',
      gmtCreate: 'GmtCreate',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      unit: 'Unit',
      urlExpireTime: 'UrlExpireTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessMode: 'string',
      accessPageId: 'string',
      accessPageName: 'string',
      accessPageState: 'string',
      accessUrl: 'string',
      contentId: 'string',
      contentName: 'string',
      effectTime: 'number',
      gmtCreate: 'string',
      projectId: 'string',
      projectName: 'string',
      unit: 'string',
      urlExpireTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppInstanceGroupResponseBodyAppInstanceGroupModelsApps extends $tea.Model {
  appIcon?: string;
  appId?: string;
  appName?: string;
  appVersion?: string;
  appVersionName?: string;
  static names(): { [key: string]: string } {
    return {
      appIcon: 'AppIcon',
      appId: 'AppId',
      appName: 'AppName',
      appVersion: 'AppVersion',
      appVersionName: 'AppVersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appIcon: 'string',
      appId: 'string',
      appName: 'string',
      appVersion: 'string',
      appVersionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppInstanceGroupResponseBodyAppInstanceGroupModelsNodePoolRecurrenceSchedulesTimerPeriods extends $tea.Model {
  amount?: number;
  endTime?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      endTime: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppInstanceGroupResponseBodyAppInstanceGroupModelsNodePoolRecurrenceSchedules extends $tea.Model {
  recurrenceType?: string;
  recurrenceValues?: number[];
  timerPeriods?: ListAppInstanceGroupResponseBodyAppInstanceGroupModelsNodePoolRecurrenceSchedulesTimerPeriods[];
  static names(): { [key: string]: string } {
    return {
      recurrenceType: 'RecurrenceType',
      recurrenceValues: 'RecurrenceValues',
      timerPeriods: 'TimerPeriods',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recurrenceType: 'string',
      recurrenceValues: { 'type': 'array', 'itemType': 'number' },
      timerPeriods: { 'type': 'array', 'itemType': ListAppInstanceGroupResponseBodyAppInstanceGroupModelsNodePoolRecurrenceSchedulesTimerPeriods },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppInstanceGroupResponseBodyAppInstanceGroupModelsNodePool extends $tea.Model {
  amount?: number;
  maxScalingAmount?: number;
  nodeAmount?: number;
  nodeCapacity?: number;
  nodeInstanceType?: string;
  nodePoolId?: string;
  nodeTypeName?: string;
  nodeUsed?: number;
  recurrenceSchedules?: ListAppInstanceGroupResponseBodyAppInstanceGroupModelsNodePoolRecurrenceSchedules[];
  scalingDownAfterIdleMinutes?: number;
  scalingNodeAmount?: number;
  scalingNodeUsed?: number;
  scalingStep?: number;
  scalingUsageThreshold?: string;
  strategyDisableDate?: string;
  strategyEnableDate?: string;
  strategyType?: string;
  warmUp?: boolean;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      maxScalingAmount: 'MaxScalingAmount',
      nodeAmount: 'NodeAmount',
      nodeCapacity: 'NodeCapacity',
      nodeInstanceType: 'NodeInstanceType',
      nodePoolId: 'NodePoolId',
      nodeTypeName: 'NodeTypeName',
      nodeUsed: 'NodeUsed',
      recurrenceSchedules: 'RecurrenceSchedules',
      scalingDownAfterIdleMinutes: 'ScalingDownAfterIdleMinutes',
      scalingNodeAmount: 'ScalingNodeAmount',
      scalingNodeUsed: 'ScalingNodeUsed',
      scalingStep: 'ScalingStep',
      scalingUsageThreshold: 'ScalingUsageThreshold',
      strategyDisableDate: 'StrategyDisableDate',
      strategyEnableDate: 'StrategyEnableDate',
      strategyType: 'StrategyType',
      warmUp: 'WarmUp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      maxScalingAmount: 'number',
      nodeAmount: 'number',
      nodeCapacity: 'number',
      nodeInstanceType: 'string',
      nodePoolId: 'string',
      nodeTypeName: 'string',
      nodeUsed: 'number',
      recurrenceSchedules: { 'type': 'array', 'itemType': ListAppInstanceGroupResponseBodyAppInstanceGroupModelsNodePoolRecurrenceSchedules },
      scalingDownAfterIdleMinutes: 'number',
      scalingNodeAmount: 'number',
      scalingNodeUsed: 'number',
      scalingStep: 'number',
      scalingUsageThreshold: 'string',
      strategyDisableDate: 'string',
      strategyEnableDate: 'string',
      strategyType: 'string',
      warmUp: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppInstanceGroupResponseBodyAppInstanceGroupModelsOtaInfo extends $tea.Model {
  newOtaVersion?: string;
  otaVersion?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      newOtaVersion: 'NewOtaVersion',
      otaVersion: 'OtaVersion',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newOtaVersion: 'string',
      otaVersion: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppInstanceGroupResponseBodyAppInstanceGroupModels extends $tea.Model {
  amount?: number;
  appCenterImageId?: string;
  appInstanceGroupId?: string;
  appInstanceGroupName?: string;
  appInstanceType?: string;
  appPolicyId?: string;
  apps?: ListAppInstanceGroupResponseBodyAppInstanceGroupModelsApps[];
  chargeResourceMode?: string;
  chargeType?: string;
  expiredTime?: string;
  gmtCreate?: string;
  maxAmount?: number;
  minAmount?: number;
  nodePool?: ListAppInstanceGroupResponseBodyAppInstanceGroupModelsNodePool[];
  osType?: string;
  otaInfo?: ListAppInstanceGroupResponseBodyAppInstanceGroupModelsOtaInfo;
  productType?: string;
  regionId?: string;
  reserveAmountRatio?: string;
  reserveMaxAmount?: number;
  reserveMinAmount?: number;
  resourceStatus?: string;
  scalingDownAfterIdleMinutes?: number;
  scalingStep?: number;
  scalingUsageThreshold?: string;
  sessionTimeout?: string;
  skipUserAuthCheck?: boolean;
  specId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      appCenterImageId: 'AppCenterImageId',
      appInstanceGroupId: 'AppInstanceGroupId',
      appInstanceGroupName: 'AppInstanceGroupName',
      appInstanceType: 'AppInstanceType',
      appPolicyId: 'AppPolicyId',
      apps: 'Apps',
      chargeResourceMode: 'ChargeResourceMode',
      chargeType: 'ChargeType',
      expiredTime: 'ExpiredTime',
      gmtCreate: 'GmtCreate',
      maxAmount: 'MaxAmount',
      minAmount: 'MinAmount',
      nodePool: 'NodePool',
      osType: 'OsType',
      otaInfo: 'OtaInfo',
      productType: 'ProductType',
      regionId: 'RegionId',
      reserveAmountRatio: 'ReserveAmountRatio',
      reserveMaxAmount: 'ReserveMaxAmount',
      reserveMinAmount: 'ReserveMinAmount',
      resourceStatus: 'ResourceStatus',
      scalingDownAfterIdleMinutes: 'ScalingDownAfterIdleMinutes',
      scalingStep: 'ScalingStep',
      scalingUsageThreshold: 'ScalingUsageThreshold',
      sessionTimeout: 'SessionTimeout',
      skipUserAuthCheck: 'SkipUserAuthCheck',
      specId: 'SpecId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      appCenterImageId: 'string',
      appInstanceGroupId: 'string',
      appInstanceGroupName: 'string',
      appInstanceType: 'string',
      appPolicyId: 'string',
      apps: { 'type': 'array', 'itemType': ListAppInstanceGroupResponseBodyAppInstanceGroupModelsApps },
      chargeResourceMode: 'string',
      chargeType: 'string',
      expiredTime: 'string',
      gmtCreate: 'string',
      maxAmount: 'number',
      minAmount: 'number',
      nodePool: { 'type': 'array', 'itemType': ListAppInstanceGroupResponseBodyAppInstanceGroupModelsNodePool },
      osType: 'string',
      otaInfo: ListAppInstanceGroupResponseBodyAppInstanceGroupModelsOtaInfo,
      productType: 'string',
      regionId: 'string',
      reserveAmountRatio: 'string',
      reserveMaxAmount: 'number',
      reserveMinAmount: 'number',
      resourceStatus: 'string',
      scalingDownAfterIdleMinutes: 'number',
      scalingStep: 'number',
      scalingUsageThreshold: 'string',
      sessionTimeout: 'string',
      skipUserAuthCheck: 'boolean',
      specId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppInstancesResponseBodyAppInstanceModelsBindInfo extends $tea.Model {
  endUserId?: string;
  usageDuration?: number;
  static names(): { [key: string]: string } {
    return {
      endUserId: 'EndUserId',
      usageDuration: 'UsageDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endUserId: 'string',
      usageDuration: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppInstancesResponseBodyAppInstanceModels extends $tea.Model {
  appInstanceGroupId?: string;
  appInstanceId?: string;
  bindInfo?: ListAppInstancesResponseBodyAppInstanceModelsBindInfo;
  gmtCreate?: string;
  gmtModified?: string;
  mainEthPublicIp?: string;
  sessionStatus?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      appInstanceGroupId: 'AppInstanceGroupId',
      appInstanceId: 'AppInstanceId',
      bindInfo: 'BindInfo',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      mainEthPublicIp: 'MainEthPublicIp',
      sessionStatus: 'SessionStatus',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceGroupId: 'string',
      appInstanceId: 'string',
      bindInfo: ListAppInstancesResponseBodyAppInstanceModelsBindInfo,
      gmtCreate: 'string',
      gmtModified: 'string',
      mainEthPublicIp: 'string',
      sessionStatus: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeInstanceTypeResponseBodyNodeInstanceTypeModels extends $tea.Model {
  cpu?: string;
  gpu?: string;
  gpuMemory?: number;
  maxCapacity?: number;
  memory?: number;
  nodeInstanceType?: string;
  nodeInstanceTypeFamily?: string;
  nodeTypeName?: string;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      gpu: 'Gpu',
      gpuMemory: 'GpuMemory',
      maxCapacity: 'MaxCapacity',
      memory: 'Memory',
      nodeInstanceType: 'NodeInstanceType',
      nodeInstanceTypeFamily: 'NodeInstanceTypeFamily',
      nodeTypeName: 'NodeTypeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'string',
      gpu: 'string',
      gpuMemory: 'number',
      maxCapacity: 'number',
      memory: 'number',
      nodeInstanceType: 'string',
      nodeInstanceTypeFamily: 'string',
      nodeTypeName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOtaTaskResponseBodyTaskList extends $tea.Model {
  otaVersion?: string;
  taskDisplayStatus?: string;
  taskId?: string;
  taskStartTime?: string;
  static names(): { [key: string]: string } {
    return {
      otaVersion: 'OtaVersion',
      taskDisplayStatus: 'TaskDisplayStatus',
      taskId: 'TaskId',
      taskStartTime: 'TaskStartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      otaVersion: 'string',
      taskDisplayStatus: 'string',
      taskId: 'string',
      taskStartTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponseBodyData extends $tea.Model {
  accessPageId?: number[];
  availableHours?: number;
  contentId?: string;
  contentName?: string;
  createTime?: string;
  description?: string;
  inUseSessions?: number;
  maxHours?: number;
  maxSessions?: number;
  projectId?: string;
  projectName?: string;
  projectState?: string;
  sessionSpec?: string;
  static names(): { [key: string]: string } {
    return {
      accessPageId: 'AccessPageId',
      availableHours: 'AvailableHours',
      contentId: 'ContentId',
      contentName: 'ContentName',
      createTime: 'CreateTime',
      description: 'Description',
      inUseSessions: 'InUseSessions',
      maxHours: 'MaxHours',
      maxSessions: 'MaxSessions',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      projectState: 'ProjectState',
      sessionSpec: 'SessionSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessPageId: { 'type': 'array', 'itemType': 'number' },
      availableHours: 'number',
      contentId: 'string',
      contentName: 'string',
      createTime: 'string',
      description: 'string',
      inUseSessions: 'number',
      maxHours: 'number',
      maxSessions: 'number',
      projectId: 'string',
      projectName: 'string',
      projectState: 'string',
      sessionSpec: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRegionsResponseBodyRegionModels extends $tea.Model {
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'regionId',
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

export class ListSessionPackagesResponseBodyDataInstanceObject extends $tea.Model {
  expiredTime?: string;
  instanceId?: string;
  instanceType?: string;
  resourceId?: string;
  resourceType?: string;
  startTime?: string;
  totalTime?: number;
  usedTime?: number;
  static names(): { [key: string]: string } {
    return {
      expiredTime: 'ExpiredTime',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      startTime: 'StartTime',
      totalTime: 'TotalTime',
      usedTime: 'UsedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expiredTime: 'string',
      instanceId: 'string',
      instanceType: 'string',
      resourceId: 'string',
      resourceType: 'string',
      startTime: 'string',
      totalTime: 'number',
      usedTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSessionPackagesResponseBodyData extends $tea.Model {
  availableHours?: number;
  chargeType?: string;
  deleteStatus?: number;
  gmtCreate?: string;
  gmtModifiedTime?: string;
  instanceObject?: ListSessionPackagesResponseBodyDataInstanceObject;
  maxHours?: number;
  maxSessions?: number;
  projectId?: string;
  projectName?: string;
  region?: string;
  sessionPackageId?: string;
  sessionPackageName?: string;
  sessionPackageTypeId?: string;
  sessionSpec?: string;
  sessionUsageRate?: number;
  state?: number;
  userIdentification?: number;
  static names(): { [key: string]: string } {
    return {
      availableHours: 'AvailableHours',
      chargeType: 'ChargeType',
      deleteStatus: 'DeleteStatus',
      gmtCreate: 'GmtCreate',
      gmtModifiedTime: 'GmtModifiedTime',
      instanceObject: 'InstanceObject',
      maxHours: 'MaxHours',
      maxSessions: 'MaxSessions',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      region: 'Region',
      sessionPackageId: 'SessionPackageId',
      sessionPackageName: 'SessionPackageName',
      sessionPackageTypeId: 'SessionPackageTypeId',
      sessionSpec: 'SessionSpec',
      sessionUsageRate: 'SessionUsageRate',
      state: 'State',
      userIdentification: 'UserIdentification',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableHours: 'number',
      chargeType: 'string',
      deleteStatus: 'number',
      gmtCreate: 'string',
      gmtModifiedTime: 'string',
      instanceObject: ListSessionPackagesResponseBodyDataInstanceObject,
      maxHours: 'number',
      maxSessions: 'number',
      projectId: 'string',
      projectName: 'string',
      region: 'string',
      sessionPackageId: 'string',
      sessionPackageName: 'string',
      sessionPackageTypeId: 'string',
      sessionSpec: 'string',
      sessionUsageRate: 'number',
      state: 'number',
      userIdentification: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTenantConfigResponseBodyTenantConfigModel extends $tea.Model {
  appInstanceGroupExpireRemind?: boolean;
  static names(): { [key: string]: string } {
    return {
      appInstanceGroupExpireRemind: 'AppInstanceGroupExpireRemind',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceGroupExpireRemind: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAppInstanceGroupAttributeRequestNetworkDomainRules extends $tea.Model {
  domain?: string;
  policy?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      policy: 'Policy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      policy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAppInstanceGroupAttributeRequestNetwork extends $tea.Model {
  domainRules?: ModifyAppInstanceGroupAttributeRequestNetworkDomainRules[];
  static names(): { [key: string]: string } {
    return {
      domainRules: 'DomainRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainRules: { 'type': 'array', 'itemType': ModifyAppInstanceGroupAttributeRequestNetworkDomainRules },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAppInstanceGroupAttributeRequestNodePool extends $tea.Model {
  nodeCapacity?: number;
  nodePoolId?: string;
  static names(): { [key: string]: string } {
    return {
      nodeCapacity: 'NodeCapacity',
      nodePoolId: 'NodePoolId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeCapacity: 'number',
      nodePoolId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAppInstanceGroupAttributeRequestSecurityPolicy extends $tea.Model {
  resetAfterUnbind?: boolean;
  skipUserAuthCheck?: boolean;
  static names(): { [key: string]: string } {
    return {
      resetAfterUnbind: 'ResetAfterUnbind',
      skipUserAuthCheck: 'SkipUserAuthCheck',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resetAfterUnbind: 'boolean',
      skipUserAuthCheck: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAppInstanceGroupAttributeRequestStoragePolicy extends $tea.Model {
  storageTypeList?: string[];
  static names(): { [key: string]: string } {
    return {
      storageTypeList: 'StorageTypeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      storageTypeList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyNodePoolAttributeRequestNodePoolStrategyRecurrenceSchedulesTimerPeriods extends $tea.Model {
  amount?: number;
  endTime?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      endTime: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyNodePoolAttributeRequestNodePoolStrategyRecurrenceSchedules extends $tea.Model {
  recurrenceType?: string;
  recurrenceValues?: number[];
  timerPeriods?: ModifyNodePoolAttributeRequestNodePoolStrategyRecurrenceSchedulesTimerPeriods[];
  static names(): { [key: string]: string } {
    return {
      recurrenceType: 'RecurrenceType',
      recurrenceValues: 'RecurrenceValues',
      timerPeriods: 'TimerPeriods',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recurrenceType: 'string',
      recurrenceValues: { 'type': 'array', 'itemType': 'number' },
      timerPeriods: { 'type': 'array', 'itemType': ModifyNodePoolAttributeRequestNodePoolStrategyRecurrenceSchedulesTimerPeriods },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyNodePoolAttributeRequestNodePoolStrategy extends $tea.Model {
  maxScalingAmount?: number;
  nodeAmount?: number;
  recurrenceSchedules?: ModifyNodePoolAttributeRequestNodePoolStrategyRecurrenceSchedules[];
  scalingDownAfterIdleMinutes?: number;
  scalingStep?: number;
  scalingUsageThreshold?: string;
  strategyDisableDate?: string;
  strategyEnableDate?: string;
  strategyType?: string;
  warmUp?: boolean;
  static names(): { [key: string]: string } {
    return {
      maxScalingAmount: 'MaxScalingAmount',
      nodeAmount: 'NodeAmount',
      recurrenceSchedules: 'RecurrenceSchedules',
      scalingDownAfterIdleMinutes: 'ScalingDownAfterIdleMinutes',
      scalingStep: 'ScalingStep',
      scalingUsageThreshold: 'ScalingUsageThreshold',
      strategyDisableDate: 'StrategyDisableDate',
      strategyEnableDate: 'StrategyEnableDate',
      strategyType: 'StrategyType',
      warmUp: 'WarmUp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxScalingAmount: 'number',
      nodeAmount: 'number',
      recurrenceSchedules: { 'type': 'array', 'itemType': ModifyNodePoolAttributeRequestNodePoolStrategyRecurrenceSchedules },
      scalingDownAfterIdleMinutes: 'number',
      scalingStep: 'number',
      scalingUsageThreshold: 'string',
      strategyDisableDate: 'string',
      strategyEnableDate: 'string',
      strategyType: 'string',
      warmUp: 'boolean',
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
    this._endpoint = this.getEndpoint("appstream-center", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async accessPageGetAclWithOptions(request: AccessPageGetAclRequest, runtime: $Util.RuntimeOptions): Promise<AccessPageGetAclResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accessPageId)) {
      query["AccessPageId"] = request.accessPageId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AccessPageGetAcl",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AccessPageGetAclResponse>(await this.callApi(params, req, runtime), new AccessPageGetAclResponse({}));
  }

  async accessPageGetAcl(request: AccessPageGetAclRequest): Promise<AccessPageGetAclResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.accessPageGetAclWithOptions(request, runtime);
  }

  async accessPageSetAclWithOptions(request: AccessPageSetAclRequest, runtime: $Util.RuntimeOptions): Promise<AccessPageSetAclResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accessMode)) {
      query["AccessMode"] = request.accessMode;
    }

    if (!Util.isUnset(request.accessPageId)) {
      query["AccessPageId"] = request.accessPageId;
    }

    if (!Util.isUnset(request.accessPageName)) {
      query["AccessPageName"] = request.accessPageName;
    }

    if (!Util.isUnset(request.effectTime)) {
      query["EffectTime"] = request.effectTime;
    }

    if (!Util.isUnset(request.unit)) {
      query["Unit"] = request.unit;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AccessPageSetAcl",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AccessPageSetAclResponse>(await this.callApi(params, req, runtime), new AccessPageSetAclResponse({}));
  }

  async accessPageSetAcl(request: AccessPageSetAclRequest): Promise<AccessPageSetAclResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.accessPageSetAclWithOptions(request, runtime);
  }

  async approveOtaTaskWithOptions(request: ApproveOtaTaskRequest, runtime: $Util.RuntimeOptions): Promise<ApproveOtaTaskResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appInstanceGroupId)) {
      body["AppInstanceGroupId"] = request.appInstanceGroupId;
    }

    if (!Util.isUnset(request.bizRegionId)) {
      body["BizRegionId"] = request.bizRegionId;
    }

    if (!Util.isUnset(request.otaType)) {
      body["OtaType"] = request.otaType;
    }

    if (!Util.isUnset(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ApproveOtaTask",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ApproveOtaTaskResponse>(await this.callApi(params, req, runtime), new ApproveOtaTaskResponse({}));
  }

  async approveOtaTask(request: ApproveOtaTaskRequest): Promise<ApproveOtaTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.approveOtaTaskWithOptions(request, runtime);
  }

  async askSessionPackagePriceWithOptions(request: AskSessionPackagePriceRequest, runtime: $Util.RuntimeOptions): Promise<AskSessionPackagePriceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
    }

    if (!Util.isUnset(request.maxSessions)) {
      query["MaxSessions"] = request.maxSessions;
    }

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.periodUnit)) {
      query["PeriodUnit"] = request.periodUnit;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.sessionPackageType)) {
      query["SessionPackageType"] = request.sessionPackageType;
    }

    if (!Util.isUnset(request.sessionSpec)) {
      query["SessionSpec"] = request.sessionSpec;
    }

    if (!Util.isUnset(request.sessionType)) {
      query["SessionType"] = request.sessionType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AskSessionPackagePrice",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AskSessionPackagePriceResponse>(await this.callApi(params, req, runtime), new AskSessionPackagePriceResponse({}));
  }

  async askSessionPackagePrice(request: AskSessionPackagePriceRequest): Promise<AskSessionPackagePriceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.askSessionPackagePriceWithOptions(request, runtime);
  }

  async askSessionPackageRenewPriceWithOptions(request: AskSessionPackageRenewPriceRequest, runtime: $Util.RuntimeOptions): Promise<AskSessionPackageRenewPriceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.periodUnit)) {
      query["PeriodUnit"] = request.periodUnit;
    }

    if (!Util.isUnset(request.sessionPackageId)) {
      query["SessionPackageId"] = request.sessionPackageId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AskSessionPackageRenewPrice",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AskSessionPackageRenewPriceResponse>(await this.callApi(params, req, runtime), new AskSessionPackageRenewPriceResponse({}));
  }

  async askSessionPackageRenewPrice(request: AskSessionPackageRenewPriceRequest): Promise<AskSessionPackageRenewPriceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.askSessionPackageRenewPriceWithOptions(request, runtime);
  }

  async authorizeInstanceGroupWithOptions(request: AuthorizeInstanceGroupRequest, runtime: $Util.RuntimeOptions): Promise<AuthorizeInstanceGroupResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appInstanceGroupId)) {
      body["AppInstanceGroupId"] = request.appInstanceGroupId;
    }

    if (!Util.isUnset(request.authorizeUserIds)) {
      body["AuthorizeUserIds"] = request.authorizeUserIds;
    }

    if (!Util.isUnset(request.productType)) {
      body["ProductType"] = request.productType;
    }

    if (!Util.isUnset(request.unAuthorizeUserIds)) {
      body["UnAuthorizeUserIds"] = request.unAuthorizeUserIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AuthorizeInstanceGroup",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AuthorizeInstanceGroupResponse>(await this.callApi(params, req, runtime), new AuthorizeInstanceGroupResponse({}));
  }

  async authorizeInstanceGroup(request: AuthorizeInstanceGroupRequest): Promise<AuthorizeInstanceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.authorizeInstanceGroupWithOptions(request, runtime);
  }

  async buySessionPackageWithOptions(request: BuySessionPackageRequest, runtime: $Util.RuntimeOptions): Promise<BuySessionPackageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
    }

    if (!Util.isUnset(request.maxSessions)) {
      query["MaxSessions"] = request.maxSessions;
    }

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.periodUnit)) {
      query["PeriodUnit"] = request.periodUnit;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.sessionPackageName)) {
      query["SessionPackageName"] = request.sessionPackageName;
    }

    if (!Util.isUnset(request.sessionPackageType)) {
      query["SessionPackageType"] = request.sessionPackageType;
    }

    if (!Util.isUnset(request.sessionSpec)) {
      query["SessionSpec"] = request.sessionSpec;
    }

    if (!Util.isUnset(request.sessionType)) {
      query["SessionType"] = request.sessionType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BuySessionPackage",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BuySessionPackageResponse>(await this.callApi(params, req, runtime), new BuySessionPackageResponse({}));
  }

  async buySessionPackage(request: BuySessionPackageRequest): Promise<BuySessionPackageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.buySessionPackageWithOptions(request, runtime);
  }

  async cancelOtaTaskWithOptions(request: CancelOtaTaskRequest, runtime: $Util.RuntimeOptions): Promise<CancelOtaTaskResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appInstanceGroupId)) {
      body["AppInstanceGroupId"] = request.appInstanceGroupId;
    }

    if (!Util.isUnset(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CancelOtaTask",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CancelOtaTaskResponse>(await this.callApi(params, req, runtime), new CancelOtaTaskResponse({}));
  }

  async cancelOtaTask(request: CancelOtaTaskRequest): Promise<CancelOtaTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelOtaTaskWithOptions(request, runtime);
  }

  async createAccessPageWithOptions(request: CreateAccessPageRequest, runtime: $Util.RuntimeOptions): Promise<CreateAccessPageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accessPageName)) {
      query["AccessPageName"] = request.accessPageName;
    }

    if (!Util.isUnset(request.cloudEnvId)) {
      query["CloudEnvId"] = request.cloudEnvId;
    }

    if (!Util.isUnset(request.effectTime)) {
      query["EffectTime"] = request.effectTime;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!Util.isUnset(request.unit)) {
      query["Unit"] = request.unit;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateAccessPage",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAccessPageResponse>(await this.callApi(params, req, runtime), new CreateAccessPageResponse({}));
  }

  async createAccessPage(request: CreateAccessPageRequest): Promise<CreateAccessPageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAccessPageWithOptions(request, runtime);
  }

  async createAppInstanceGroupWithOptions(tmpReq: CreateAppInstanceGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateAppInstanceGroupResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateAppInstanceGroupShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.network)) {
      request.networkShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.network, "Network", "json");
    }

    if (!Util.isUnset(tmpReq.nodePool)) {
      request.nodePoolShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.nodePool, "NodePool", "json");
    }

    if (!Util.isUnset(tmpReq.runtimePolicy)) {
      request.runtimePolicyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.runtimePolicy, "RuntimePolicy", "json");
    }

    if (!Util.isUnset(tmpReq.securityPolicy)) {
      request.securityPolicyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.securityPolicy, "SecurityPolicy", "json");
    }

    if (!Util.isUnset(tmpReq.storagePolicy)) {
      request.storagePolicyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.storagePolicy, "StoragePolicy", "json");
    }

    if (!Util.isUnset(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appCenterImageId)) {
      body["AppCenterImageId"] = request.appCenterImageId;
    }

    if (!Util.isUnset(request.appInstanceGroupName)) {
      body["AppInstanceGroupName"] = request.appInstanceGroupName;
    }

    if (!Util.isUnset(request.autoPay)) {
      body["AutoPay"] = request.autoPay;
    }

    if (!Util.isUnset(request.autoRenew)) {
      body["AutoRenew"] = request.autoRenew;
    }

    if (!Util.isUnset(request.bizRegionId)) {
      body["BizRegionId"] = request.bizRegionId;
    }

    if (!Util.isUnset(request.chargeResourceMode)) {
      body["ChargeResourceMode"] = request.chargeResourceMode;
    }

    if (!Util.isUnset(request.chargeType)) {
      body["ChargeType"] = request.chargeType;
    }

    if (!Util.isUnset(request.networkShrink)) {
      body["Network"] = request.networkShrink;
    }

    if (!Util.isUnset(request.nodePoolShrink)) {
      body["NodePool"] = request.nodePoolShrink;
    }

    if (!Util.isUnset(request.period)) {
      body["Period"] = request.period;
    }

    if (!Util.isUnset(request.periodUnit)) {
      body["PeriodUnit"] = request.periodUnit;
    }

    if (!Util.isUnset(request.preOpenAppId)) {
      body["PreOpenAppId"] = request.preOpenAppId;
    }

    if (!Util.isUnset(request.productType)) {
      body["ProductType"] = request.productType;
    }

    if (!Util.isUnset(request.promotionId)) {
      body["PromotionId"] = request.promotionId;
    }

    if (!Util.isUnset(request.runtimePolicyShrink)) {
      body["RuntimePolicy"] = request.runtimePolicyShrink;
    }

    if (!Util.isUnset(request.securityPolicyShrink)) {
      body["SecurityPolicy"] = request.securityPolicyShrink;
    }

    if (!Util.isUnset(request.sessionTimeout)) {
      body["SessionTimeout"] = request.sessionTimeout;
    }

    if (!Util.isUnset(request.storagePolicyShrink)) {
      body["StoragePolicy"] = request.storagePolicyShrink;
    }

    if (!Util.isUnset(request.userInfoShrink)) {
      body["UserInfo"] = request.userInfoShrink;
    }

    if (!Util.isUnset(request.users)) {
      body["Users"] = request.users;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateAppInstanceGroup",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAppInstanceGroupResponse>(await this.callApi(params, req, runtime), new CreateAppInstanceGroupResponse({}));
  }

  async createAppInstanceGroup(request: CreateAppInstanceGroupRequest): Promise<CreateAppInstanceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAppInstanceGroupWithOptions(request, runtime);
  }

  async createImageFromAppInstanceGroupWithOptions(request: CreateImageFromAppInstanceGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateImageFromAppInstanceGroupResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appCenterImageName)) {
      body["AppCenterImageName"] = request.appCenterImageName;
    }

    if (!Util.isUnset(request.appInstanceGroupId)) {
      body["AppInstanceGroupId"] = request.appInstanceGroupId;
    }

    if (!Util.isUnset(request.productType)) {
      body["ProductType"] = request.productType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateImageFromAppInstanceGroup",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateImageFromAppInstanceGroupResponse>(await this.callApi(params, req, runtime), new CreateImageFromAppInstanceGroupResponse({}));
  }

  async createImageFromAppInstanceGroup(request: CreateImageFromAppInstanceGroupRequest): Promise<CreateImageFromAppInstanceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createImageFromAppInstanceGroupWithOptions(request, runtime);
  }

  async createProjectWithOptions(request: CreateProjectRequest, runtime: $Util.RuntimeOptions): Promise<CreateProjectResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clipboard)) {
      query["Clipboard"] = request.clipboard;
    }

    if (!Util.isUnset(request.cloudEnvId)) {
      query["CloudEnvId"] = request.cloudEnvId;
    }

    if (!Util.isUnset(request.contentId)) {
      query["ContentId"] = request.contentId;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.fileTransfer)) {
      query["FileTransfer"] = request.fileTransfer;
    }

    if (!Util.isUnset(request.frameRate)) {
      query["FrameRate"] = request.frameRate;
    }

    if (!Util.isUnset(request.keepAliveDuration)) {
      query["KeepAliveDuration"] = request.keepAliveDuration;
    }

    if (!Util.isUnset(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!Util.isUnset(request.sessionResolutionHeight)) {
      query["SessionResolutionHeight"] = request.sessionResolutionHeight;
    }

    if (!Util.isUnset(request.sessionResolutionWidth)) {
      query["SessionResolutionWidth"] = request.sessionResolutionWidth;
    }

    if (!Util.isUnset(request.sessionSpec)) {
      query["SessionSpec"] = request.sessionSpec;
    }

    if (!Util.isUnset(request.streamingMode)) {
      query["StreamingMode"] = request.streamingMode;
    }

    if (!Util.isUnset(request.terminalResolutionAdaptation)) {
      query["TerminalResolutionAdaptation"] = request.terminalResolutionAdaptation;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateProject",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateProjectResponse>(await this.callApi(params, req, runtime), new CreateProjectResponse({}));
  }

  async createProject(request: CreateProjectRequest): Promise<CreateProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createProjectWithOptions(request, runtime);
  }

  async deleteAccessPageWithOptions(request: DeleteAccessPageRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAccessPageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accessPageId)) {
      query["AccessPageId"] = request.accessPageId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteAccessPage",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteAccessPageResponse>(await this.callApi(params, req, runtime), new DeleteAccessPageResponse({}));
  }

  async deleteAccessPage(request: DeleteAccessPageRequest): Promise<DeleteAccessPageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAccessPageWithOptions(request, runtime);
  }

  async deleteAppInstanceGroupWithOptions(request: DeleteAppInstanceGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAppInstanceGroupResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appInstanceGroupId)) {
      body["AppInstanceGroupId"] = request.appInstanceGroupId;
    }

    if (!Util.isUnset(request.productType)) {
      body["ProductType"] = request.productType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteAppInstanceGroup",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteAppInstanceGroupResponse>(await this.callApi(params, req, runtime), new DeleteAppInstanceGroupResponse({}));
  }

  async deleteAppInstanceGroup(request: DeleteAppInstanceGroupRequest): Promise<DeleteAppInstanceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAppInstanceGroupWithOptions(request, runtime);
  }

  async deleteAppInstancesWithOptions(request: DeleteAppInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAppInstancesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appInstanceGroupId)) {
      body["AppInstanceGroupId"] = request.appInstanceGroupId;
    }

    if (!Util.isUnset(request.appInstanceIds)) {
      body["AppInstanceIds"] = request.appInstanceIds;
    }

    if (!Util.isUnset(request.productType)) {
      body["ProductType"] = request.productType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteAppInstances",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteAppInstancesResponse>(await this.callApi(params, req, runtime), new DeleteAppInstancesResponse({}));
  }

  async deleteAppInstances(request: DeleteAppInstancesRequest): Promise<DeleteAppInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAppInstancesWithOptions(request, runtime);
  }

  async deleteProjectWithOptions(request: DeleteProjectRequest, runtime: $Util.RuntimeOptions): Promise<DeleteProjectResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteProject",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteProjectResponse>(await this.callApi(params, req, runtime), new DeleteProjectResponse({}));
  }

  async deleteProject(request: DeleteProjectRequest): Promise<DeleteProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteProjectWithOptions(request, runtime);
  }

  async getAccessPageSessionWithOptions(request: GetAccessPageSessionRequest, runtime: $Util.RuntimeOptions): Promise<GetAccessPageSessionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accessPageId)) {
      query["AccessPageId"] = request.accessPageId;
    }

    if (!Util.isUnset(request.accessPageToken)) {
      query["AccessPageToken"] = request.accessPageToken;
    }

    if (!Util.isUnset(request.externalUserId)) {
      query["ExternalUserId"] = request.externalUserId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAccessPageSession",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAccessPageSessionResponse>(await this.callApi(params, req, runtime), new GetAccessPageSessionResponse({}));
  }

  async getAccessPageSession(request: GetAccessPageSessionRequest): Promise<GetAccessPageSessionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAccessPageSessionWithOptions(request, runtime);
  }

  async getAppInstanceGroupWithOptions(request: GetAppInstanceGroupRequest, runtime: $Util.RuntimeOptions): Promise<GetAppInstanceGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appInstanceGroupId)) {
      query["AppInstanceGroupId"] = request.appInstanceGroupId;
    }

    if (!Util.isUnset(request.productType)) {
      query["ProductType"] = request.productType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAppInstanceGroup",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAppInstanceGroupResponse>(await this.callApi(params, req, runtime), new GetAppInstanceGroupResponse({}));
  }

  async getAppInstanceGroup(request: GetAppInstanceGroupRequest): Promise<GetAppInstanceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAppInstanceGroupWithOptions(request, runtime);
  }

  async getConnectionTicketWithOptions(request: GetConnectionTicketRequest, runtime: $Util.RuntimeOptions): Promise<GetConnectionTicketResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.appInstanceGroupIdList)) {
      body["AppInstanceGroupIdList"] = request.appInstanceGroupIdList;
    }

    if (!Util.isUnset(request.appInstanceId)) {
      body["AppInstanceId"] = request.appInstanceId;
    }

    if (!Util.isUnset(request.appInstancePersistentId)) {
      body["AppInstancePersistentId"] = request.appInstancePersistentId;
    }

    if (!Util.isUnset(request.appStartParam)) {
      body["AppStartParam"] = request.appStartParam;
    }

    if (!Util.isUnset(request.appVersion)) {
      body["AppVersion"] = request.appVersion;
    }

    if (!Util.isUnset(request.bizRegionId)) {
      body["BizRegionId"] = request.bizRegionId;
    }

    if (!Util.isUnset(request.endUserId)) {
      body["EndUserId"] = request.endUserId;
    }

    if (!Util.isUnset(request.productType)) {
      body["ProductType"] = request.productType;
    }

    if (!Util.isUnset(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetConnectionTicket",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetConnectionTicketResponse>(await this.callApi(params, req, runtime), new GetConnectionTicketResponse({}));
  }

  async getConnectionTicket(request: GetConnectionTicketRequest): Promise<GetConnectionTicketResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getConnectionTicketWithOptions(request, runtime);
  }

  async getDebugAppInstanceWithOptions(request: GetDebugAppInstanceRequest, runtime: $Util.RuntimeOptions): Promise<GetDebugAppInstanceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appInstanceGroupId)) {
      body["AppInstanceGroupId"] = request.appInstanceGroupId;
    }

    if (!Util.isUnset(request.productType)) {
      body["ProductType"] = request.productType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetDebugAppInstance",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDebugAppInstanceResponse>(await this.callApi(params, req, runtime), new GetDebugAppInstanceResponse({}));
  }

  async getDebugAppInstance(request: GetDebugAppInstanceRequest): Promise<GetDebugAppInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDebugAppInstanceWithOptions(request, runtime);
  }

  async getOtaTaskByTaskIdWithOptions(request: GetOtaTaskByTaskIdRequest, runtime: $Util.RuntimeOptions): Promise<GetOtaTaskByTaskIdResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetOtaTaskByTaskId",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetOtaTaskByTaskIdResponse>(await this.callApi(params, req, runtime), new GetOtaTaskByTaskIdResponse({}));
  }

  async getOtaTaskByTaskId(request: GetOtaTaskByTaskIdRequest): Promise<GetOtaTaskByTaskIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOtaTaskByTaskIdWithOptions(request, runtime);
  }

  async getProjectPoliciesWithOptions(request: GetProjectPoliciesRequest, runtime: $Util.RuntimeOptions): Promise<GetProjectPoliciesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetProjectPolicies",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetProjectPoliciesResponse>(await this.callApi(params, req, runtime), new GetProjectPoliciesResponse({}));
  }

  async getProjectPolicies(request: GetProjectPoliciesRequest): Promise<GetProjectPoliciesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getProjectPoliciesWithOptions(request, runtime);
  }

  async getResourcePriceWithOptions(request: GetResourcePriceRequest, runtime: $Util.RuntimeOptions): Promise<GetResourcePriceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.amount)) {
      query["Amount"] = request.amount;
    }

    if (!Util.isUnset(request.appInstanceType)) {
      query["AppInstanceType"] = request.appInstanceType;
    }

    if (!Util.isUnset(request.bizRegionId)) {
      query["BizRegionId"] = request.bizRegionId;
    }

    if (!Util.isUnset(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
    }

    if (!Util.isUnset(request.nodeInstanceType)) {
      query["NodeInstanceType"] = request.nodeInstanceType;
    }

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.periodUnit)) {
      query["PeriodUnit"] = request.periodUnit;
    }

    if (!Util.isUnset(request.productType)) {
      query["ProductType"] = request.productType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetResourcePrice",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetResourcePriceResponse>(await this.callApi(params, req, runtime), new GetResourcePriceResponse({}));
  }

  async getResourcePrice(request: GetResourcePriceRequest): Promise<GetResourcePriceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getResourcePriceWithOptions(request, runtime);
  }

  async getResourceRenewPriceWithOptions(request: GetResourceRenewPriceRequest, runtime: $Util.RuntimeOptions): Promise<GetResourceRenewPriceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appInstanceGroupId)) {
      query["AppInstanceGroupId"] = request.appInstanceGroupId;
    }

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.periodUnit)) {
      query["PeriodUnit"] = request.periodUnit;
    }

    if (!Util.isUnset(request.productType)) {
      query["ProductType"] = request.productType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetResourceRenewPrice",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetResourceRenewPriceResponse>(await this.callApi(params, req, runtime), new GetResourceRenewPriceResponse({}));
  }

  async getResourceRenewPrice(request: GetResourceRenewPriceRequest): Promise<GetResourceRenewPriceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getResourceRenewPriceWithOptions(request, runtime);
  }

  async listAccessPagesWithOptions(request: ListAccessPagesRequest, runtime: $Util.RuntimeOptions): Promise<ListAccessPagesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accessPageId)) {
      query["AccessPageId"] = request.accessPageId;
    }

    if (!Util.isUnset(request.accessPageName)) {
      query["AccessPageName"] = request.accessPageName;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.sortType)) {
      query["SortType"] = request.sortType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAccessPages",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAccessPagesResponse>(await this.callApi(params, req, runtime), new ListAccessPagesResponse({}));
  }

  async listAccessPages(request: ListAccessPagesRequest): Promise<ListAccessPagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAccessPagesWithOptions(request, runtime);
  }

  async listAppInstanceGroupWithOptions(request: ListAppInstanceGroupRequest, runtime: $Util.RuntimeOptions): Promise<ListAppInstanceGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appCenterImageId)) {
      query["AppCenterImageId"] = request.appCenterImageId;
    }

    if (!Util.isUnset(request.appInstanceGroupId)) {
      query["AppInstanceGroupId"] = request.appInstanceGroupId;
    }

    if (!Util.isUnset(request.appInstanceGroupName)) {
      query["AppInstanceGroupName"] = request.appInstanceGroupName;
    }

    if (!Util.isUnset(request.bizRegionId)) {
      query["BizRegionId"] = request.bizRegionId;
    }

    if (!Util.isUnset(request.nodeInstanceType)) {
      query["NodeInstanceType"] = request.nodeInstanceType;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.productType)) {
      query["ProductType"] = request.productType;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.status)) {
      body["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListAppInstanceGroup",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAppInstanceGroupResponse>(await this.callApi(params, req, runtime), new ListAppInstanceGroupResponse({}));
  }

  async listAppInstanceGroup(request: ListAppInstanceGroupRequest): Promise<ListAppInstanceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAppInstanceGroupWithOptions(request, runtime);
  }

  async listAppInstancesWithOptions(request: ListAppInstancesRequest, runtime: $Util.RuntimeOptions): Promise<ListAppInstancesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appInstanceGroupId)) {
      query["AppInstanceGroupId"] = request.appInstanceGroupId;
    }

    if (!Util.isUnset(request.appInstanceId)) {
      query["AppInstanceId"] = request.appInstanceId;
    }

    if (!Util.isUnset(request.includeDeleted)) {
      query["IncludeDeleted"] = request.includeDeleted;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appInstanceIdList)) {
      body["AppInstanceIdList"] = request.appInstanceIdList;
    }

    if (!Util.isUnset(request.status)) {
      body["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListAppInstances",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAppInstancesResponse>(await this.callApi(params, req, runtime), new ListAppInstancesResponse({}));
  }

  async listAppInstances(request: ListAppInstancesRequest): Promise<ListAppInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAppInstancesWithOptions(request, runtime);
  }

  async listNodeInstanceTypeWithOptions(request: ListNodeInstanceTypeRequest, runtime: $Util.RuntimeOptions): Promise<ListNodeInstanceTypeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizRegionId)) {
      query["BizRegionId"] = request.bizRegionId;
    }

    if (!Util.isUnset(request.language)) {
      query["Language"] = request.language;
    }

    if (!Util.isUnset(request.nodeInstanceType)) {
      query["NodeInstanceType"] = request.nodeInstanceType;
    }

    if (!Util.isUnset(request.osType)) {
      query["OsType"] = request.osType;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.productType)) {
      query["ProductType"] = request.productType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListNodeInstanceType",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListNodeInstanceTypeResponse>(await this.callApi(params, req, runtime), new ListNodeInstanceTypeResponse({}));
  }

  async listNodeInstanceType(request: ListNodeInstanceTypeRequest): Promise<ListNodeInstanceTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listNodeInstanceTypeWithOptions(request, runtime);
  }

  async listOtaTaskWithOptions(request: ListOtaTaskRequest, runtime: $Util.RuntimeOptions): Promise<ListOtaTaskResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appInstanceGroupId)) {
      body["AppInstanceGroupId"] = request.appInstanceGroupId;
    }

    if (!Util.isUnset(request.otaType)) {
      body["OtaType"] = request.otaType;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListOtaTask",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListOtaTaskResponse>(await this.callApi(params, req, runtime), new ListOtaTaskResponse({}));
  }

  async listOtaTask(request: ListOtaTaskRequest): Promise<ListOtaTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listOtaTaskWithOptions(request, runtime);
  }

  async listProjectsWithOptions(request: ListProjectsRequest, runtime: $Util.RuntimeOptions): Promise<ListProjectsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!Util.isUnset(request.sortType)) {
      query["SortType"] = request.sortType;
    }

    if (!Util.isUnset(request.stateList)) {
      query["StateList"] = request.stateList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListProjects",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListProjectsResponse>(await this.callApi(params, req, runtime), new ListProjectsResponse({}));
  }

  async listProjects(request: ListProjectsRequest): Promise<ListProjectsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listProjectsWithOptions(request, runtime);
  }

  async listRegionsWithOptions(runtime: $Util.RuntimeOptions): Promise<ListRegionsResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "ListRegions",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
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

  async listSessionPackagesWithOptions(request: ListSessionPackagesRequest, runtime: $Util.RuntimeOptions): Promise<ListSessionPackagesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.sessionPackageId)) {
      query["SessionPackageId"] = request.sessionPackageId;
    }

    if (!Util.isUnset(request.sessionPackageName)) {
      query["SessionPackageName"] = request.sessionPackageName;
    }

    if (!Util.isUnset(request.sortType)) {
      query["SortType"] = request.sortType;
    }

    if (!Util.isUnset(request.stateList)) {
      query["StateList"] = request.stateList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListSessionPackages",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListSessionPackagesResponse>(await this.callApi(params, req, runtime), new ListSessionPackagesResponse({}));
  }

  async listSessionPackages(request: ListSessionPackagesRequest): Promise<ListSessionPackagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSessionPackagesWithOptions(request, runtime);
  }

  async listTenantConfigWithOptions(runtime: $Util.RuntimeOptions): Promise<ListTenantConfigResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "ListTenantConfig",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTenantConfigResponse>(await this.callApi(params, req, runtime), new ListTenantConfigResponse({}));
  }

  async listTenantConfig(): Promise<ListTenantConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTenantConfigWithOptions(runtime);
  }

  async logOffAllSessionsInAppInstanceGroupWithOptions(request: LogOffAllSessionsInAppInstanceGroupRequest, runtime: $Util.RuntimeOptions): Promise<LogOffAllSessionsInAppInstanceGroupResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appInstanceGroupId)) {
      body["AppInstanceGroupId"] = request.appInstanceGroupId;
    }

    if (!Util.isUnset(request.productType)) {
      body["ProductType"] = request.productType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "LogOffAllSessionsInAppInstanceGroup",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<LogOffAllSessionsInAppInstanceGroupResponse>(await this.callApi(params, req, runtime), new LogOffAllSessionsInAppInstanceGroupResponse({}));
  }

  async logOffAllSessionsInAppInstanceGroup(request: LogOffAllSessionsInAppInstanceGroupRequest): Promise<LogOffAllSessionsInAppInstanceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.logOffAllSessionsInAppInstanceGroupWithOptions(request, runtime);
  }

  async migrateSessionPackageWithOptions(request: MigrateSessionPackageRequest, runtime: $Util.RuntimeOptions): Promise<MigrateSessionPackageResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.destProjectId)) {
      body["DestProjectId"] = request.destProjectId;
    }

    if (!Util.isUnset(request.sessionPackageId)) {
      body["SessionPackageId"] = request.sessionPackageId;
    }

    if (!Util.isUnset(request.sourceProjectId)) {
      body["SourceProjectId"] = request.sourceProjectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "MigrateSessionPackage",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<MigrateSessionPackageResponse>(await this.callApi(params, req, runtime), new MigrateSessionPackageResponse({}));
  }

  async migrateSessionPackage(request: MigrateSessionPackageRequest): Promise<MigrateSessionPackageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.migrateSessionPackageWithOptions(request, runtime);
  }

  async modifyAppInstanceGroupAttributeWithOptions(tmpReq: ModifyAppInstanceGroupAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyAppInstanceGroupAttributeResponse> {
    Util.validateModel(tmpReq);
    let request = new ModifyAppInstanceGroupAttributeShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.network)) {
      request.networkShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.network, "Network", "json");
    }

    if (!Util.isUnset(tmpReq.nodePool)) {
      request.nodePoolShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.nodePool, "NodePool", "json");
    }

    if (!Util.isUnset(tmpReq.securityPolicy)) {
      request.securityPolicyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.securityPolicy, "SecurityPolicy", "json");
    }

    if (!Util.isUnset(tmpReq.storagePolicy)) {
      request.storagePolicyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.storagePolicy, "StoragePolicy", "json");
    }

    let query = { };
    if (!Util.isUnset(request.appInstanceGroupId)) {
      query["AppInstanceGroupId"] = request.appInstanceGroupId;
    }

    if (!Util.isUnset(request.appInstanceGroupName)) {
      query["AppInstanceGroupName"] = request.appInstanceGroupName;
    }

    if (!Util.isUnset(request.nodePoolShrink)) {
      query["NodePool"] = request.nodePoolShrink;
    }

    if (!Util.isUnset(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!Util.isUnset(request.sessionTimeout)) {
      query["SessionTimeout"] = request.sessionTimeout;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.networkShrink)) {
      body["Network"] = request.networkShrink;
    }

    if (!Util.isUnset(request.preOpenAppId)) {
      body["PreOpenAppId"] = request.preOpenAppId;
    }

    if (!Util.isUnset(request.preOpenMode)) {
      body["PreOpenMode"] = request.preOpenMode;
    }

    if (!Util.isUnset(request.securityPolicyShrink)) {
      body["SecurityPolicy"] = request.securityPolicyShrink;
    }

    if (!Util.isUnset(request.storagePolicyShrink)) {
      body["StoragePolicy"] = request.storagePolicyShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ModifyAppInstanceGroupAttribute",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyAppInstanceGroupAttributeResponse>(await this.callApi(params, req, runtime), new ModifyAppInstanceGroupAttributeResponse({}));
  }

  async modifyAppInstanceGroupAttribute(request: ModifyAppInstanceGroupAttributeRequest): Promise<ModifyAppInstanceGroupAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyAppInstanceGroupAttributeWithOptions(request, runtime);
  }

  async modifyNodePoolAttributeWithOptions(tmpReq: ModifyNodePoolAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyNodePoolAttributeResponse> {
    Util.validateModel(tmpReq);
    let request = new ModifyNodePoolAttributeShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.nodePoolStrategy)) {
      request.nodePoolStrategyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.nodePoolStrategy, "NodePoolStrategy", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bizRegionId)) {
      body["BizRegionId"] = request.bizRegionId;
    }

    if (!Util.isUnset(request.nodeCapacity)) {
      body["NodeCapacity"] = request.nodeCapacity;
    }

    if (!Util.isUnset(request.nodePoolStrategyShrink)) {
      body["NodePoolStrategy"] = request.nodePoolStrategyShrink;
    }

    if (!Util.isUnset(request.poolId)) {
      body["PoolId"] = request.poolId;
    }

    if (!Util.isUnset(request.productType)) {
      body["ProductType"] = request.productType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ModifyNodePoolAttribute",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyNodePoolAttributeResponse>(await this.callApi(params, req, runtime), new ModifyNodePoolAttributeResponse({}));
  }

  async modifyNodePoolAttribute(request: ModifyNodePoolAttributeRequest): Promise<ModifyNodePoolAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyNodePoolAttributeWithOptions(request, runtime);
  }

  async modifyProjectPolicyWithOptions(request: ModifyProjectPolicyRequest, runtime: $Util.RuntimeOptions): Promise<ModifyProjectPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clipboard)) {
      query["Clipboard"] = request.clipboard;
    }

    if (!Util.isUnset(request.fileTransfer)) {
      query["FileTransfer"] = request.fileTransfer;
    }

    if (!Util.isUnset(request.frameRate)) {
      query["FrameRate"] = request.frameRate;
    }

    if (!Util.isUnset(request.keepAliveDuration)) {
      query["KeepAliveDuration"] = request.keepAliveDuration;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.sessionResolutionHeight)) {
      query["SessionResolutionHeight"] = request.sessionResolutionHeight;
    }

    if (!Util.isUnset(request.sessionResolutionWidth)) {
      query["SessionResolutionWidth"] = request.sessionResolutionWidth;
    }

    if (!Util.isUnset(request.streamingMode)) {
      query["StreamingMode"] = request.streamingMode;
    }

    if (!Util.isUnset(request.terminalResolutionAdaptation)) {
      query["TerminalResolutionAdaptation"] = request.terminalResolutionAdaptation;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyProjectPolicy",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyProjectPolicyResponse>(await this.callApi(params, req, runtime), new ModifyProjectPolicyResponse({}));
  }

  async modifyProjectPolicy(request: ModifyProjectPolicyRequest): Promise<ModifyProjectPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyProjectPolicyWithOptions(request, runtime);
  }

  async modifyTenantConfigWithOptions(request: ModifyTenantConfigRequest, runtime: $Util.RuntimeOptions): Promise<ModifyTenantConfigResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appInstanceGroupExpireRemind)) {
      body["AppInstanceGroupExpireRemind"] = request.appInstanceGroupExpireRemind;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ModifyTenantConfig",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyTenantConfigResponse>(await this.callApi(params, req, runtime), new ModifyTenantConfigResponse({}));
  }

  async modifyTenantConfig(request: ModifyTenantConfigRequest): Promise<ModifyTenantConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyTenantConfigWithOptions(request, runtime);
  }

  async pageListAppInstanceGroupUserWithOptions(request: PageListAppInstanceGroupUserRequest, runtime: $Util.RuntimeOptions): Promise<PageListAppInstanceGroupUserResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appInstanceGroupId)) {
      body["AppInstanceGroupId"] = request.appInstanceGroupId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.productType)) {
      body["ProductType"] = request.productType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PageListAppInstanceGroupUser",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PageListAppInstanceGroupUserResponse>(await this.callApi(params, req, runtime), new PageListAppInstanceGroupUserResponse({}));
  }

  async pageListAppInstanceGroupUser(request: PageListAppInstanceGroupUserRequest): Promise<PageListAppInstanceGroupUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.pageListAppInstanceGroupUserWithOptions(request, runtime);
  }

  async refreshAccessUrlWithOptions(request: RefreshAccessUrlRequest, runtime: $Util.RuntimeOptions): Promise<RefreshAccessUrlResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accessPageId)) {
      query["AccessPageId"] = request.accessPageId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RefreshAccessUrl",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RefreshAccessUrlResponse>(await this.callApi(params, req, runtime), new RefreshAccessUrlResponse({}));
  }

  async refreshAccessUrl(request: RefreshAccessUrlRequest): Promise<RefreshAccessUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.refreshAccessUrlWithOptions(request, runtime);
  }

  async renewAppInstanceGroupWithOptions(request: RenewAppInstanceGroupRequest, runtime: $Util.RuntimeOptions): Promise<RenewAppInstanceGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appInstanceGroupId)) {
      query["AppInstanceGroupId"] = request.appInstanceGroupId;
    }

    if (!Util.isUnset(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.periodUnit)) {
      query["PeriodUnit"] = request.periodUnit;
    }

    if (!Util.isUnset(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!Util.isUnset(request.promotionId)) {
      query["PromotionId"] = request.promotionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RenewAppInstanceGroup",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RenewAppInstanceGroupResponse>(await this.callApi(params, req, runtime), new RenewAppInstanceGroupResponse({}));
  }

  async renewAppInstanceGroup(request: RenewAppInstanceGroupRequest): Promise<RenewAppInstanceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.renewAppInstanceGroupWithOptions(request, runtime);
  }

  async renewSessionPackageWithOptions(request: RenewSessionPackageRequest, runtime: $Util.RuntimeOptions): Promise<RenewSessionPackageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.periodUnit)) {
      query["PeriodUnit"] = request.periodUnit;
    }

    if (!Util.isUnset(request.sessionPackageId)) {
      query["SessionPackageId"] = request.sessionPackageId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RenewSessionPackage",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RenewSessionPackageResponse>(await this.callApi(params, req, runtime), new RenewSessionPackageResponse({}));
  }

  async renewSessionPackage(request: RenewSessionPackageRequest): Promise<RenewSessionPackageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.renewSessionPackageWithOptions(request, runtime);
  }

  async unbindWithOptions(request: UnbindRequest, runtime: $Util.RuntimeOptions): Promise<UnbindResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appInstanceGroupId)) {
      body["AppInstanceGroupId"] = request.appInstanceGroupId;
    }

    if (!Util.isUnset(request.appInstanceId)) {
      body["AppInstanceId"] = request.appInstanceId;
    }

    if (!Util.isUnset(request.appInstancePersistentId)) {
      body["AppInstancePersistentId"] = request.appInstancePersistentId;
    }

    if (!Util.isUnset(request.endUserId)) {
      body["EndUserId"] = request.endUserId;
    }

    if (!Util.isUnset(request.productType)) {
      body["ProductType"] = request.productType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "Unbind",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UnbindResponse>(await this.callApi(params, req, runtime), new UnbindResponse({}));
  }

  async unbind(request: UnbindRequest): Promise<UnbindResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unbindWithOptions(request, runtime);
  }

  async updateAccessPageStateWithOptions(request: UpdateAccessPageStateRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAccessPageStateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accessPageId)) {
      query["AccessPageId"] = request.accessPageId;
    }

    if (!Util.isUnset(request.accessPageState)) {
      query["AccessPageState"] = request.accessPageState;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateAccessPageState",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateAccessPageStateResponse>(await this.callApi(params, req, runtime), new UpdateAccessPageStateResponse({}));
  }

  async updateAccessPageState(request: UpdateAccessPageStateRequest): Promise<UpdateAccessPageStateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAccessPageStateWithOptions(request, runtime);
  }

  async updateAppInstanceGroupImageWithOptions(request: UpdateAppInstanceGroupImageRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAppInstanceGroupImageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appCenterImageId)) {
      query["AppCenterImageId"] = request.appCenterImageId;
    }

    if (!Util.isUnset(request.appInstanceGroupId)) {
      query["AppInstanceGroupId"] = request.appInstanceGroupId;
    }

    if (!Util.isUnset(request.bizRegionId)) {
      query["BizRegionId"] = request.bizRegionId;
    }

    if (!Util.isUnset(request.productType)) {
      query["ProductType"] = request.productType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateAppInstanceGroupImage",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateAppInstanceGroupImageResponse>(await this.callApi(params, req, runtime), new UpdateAppInstanceGroupImageResponse({}));
  }

  async updateAppInstanceGroupImage(request: UpdateAppInstanceGroupImageRequest): Promise<UpdateAppInstanceGroupImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAppInstanceGroupImageWithOptions(request, runtime);
  }

}
