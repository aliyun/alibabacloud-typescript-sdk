// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AccessPageGetAclRequest extends $tea.Model {
  /**
   * @example
   * a-075nu7bcqim2wvxli
   */
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
  /**
   * @example
   * 200
   */
  code?: string;
  data?: AccessPageGetAclResponseBodyData[];
  /**
   * @example
   * The parameter ProductType is invalid.
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AccessPageGetAclResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * FREE_ACCESS
   */
  accessMode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a-062wec3cwmayw****
   */
  accessPageId?: string;
  /**
   * @example
   * notepad_test
   */
  accessPageName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 7
   */
  effectTime?: number;
  /**
   * @example
   * Day
   */
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
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * InternalError
   */
  message?: string;
  /**
   * @example
   * E25FC620-6B6F-12D2-A992-AD8727DC****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AccessPageSetAclResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * aig-9ciijz60n4xsv****
   */
  appInstanceGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Fota
   */
  otaType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2022-08-04T14:36:00+08:00
   */
  startTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ota-be7jzm29wrrz5****
   */
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
  /**
   * @example
   * OtaTask.Running
   */
  code?: string;
  /**
   * @example
   * The task is running and cannot be sumitted.
   */
  message?: string;
  /**
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ApproveOtaTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @example
   * 0
   */
  sessionPackageType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * appstreaming.general.entry
   */
  sessionSpec?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Windows
   */
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
  /**
   * @example
   * 2C64D9E5-DFCD-10A5-A911-xxxxxxx
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
      data: { 'type': 'array', 'itemType': AskSessionPackagePriceResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AskSessionPackagePriceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AskSessionPackagePriceResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * tp-***********
   */
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
  /**
   * @example
   * 50158E8B-992E-1286-B174-**********
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
      data: { 'type': 'array', 'itemType': AskSessionPackageRenewPriceResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AskSessionPackageRenewPriceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AskSessionPackageRenewPriceResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * aig-9ciijz60n4xsv****
   */
  appInstanceGroupId?: string;
  authorizeUserIds?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CloudApp
   */
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
  /**
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
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

export class AuthorizeInstanceGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AuthorizeInstanceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  autoPay?: boolean;
  chargeType?: string;
  maxSessions?: number;
  period?: number;
  periodUnit?: string;
  /**
   * @example
   * p-xxxxxxxxxxxxx
   */
  projectId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  sessionPackageName?: string;
  /**
   * @example
   * 0
   */
  sessionPackageType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * appstreaming.general.entry
   */
  sessionSpec?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Windows
   */
  sessionType?: string;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
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
      autoPay: 'boolean',
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
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * There is a missing parameter.
   */
  message?: string;
  /**
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5Fxxxxxxxx
   */
  requestId?: string;
  /**
   * @example
   * tp-xxxxxxxxxx
   */
  sessionPackageId?: number;
  /**
   * @example
   * false
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BuySessionPackageResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * aig-53fvrq1oanz6c****
   */
  appInstanceGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ota-be7jzm29wrrz5****
   */
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
  /**
   * @example
   * OtaTask.Running
   */
  code?: string;
  /**
   * @example
   * The task is running and cannot be sumitted.
   */
  message?: string;
  /**
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CancelOtaTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * This parameter is required.
   */
  accessPageName?: string;
  /**
   * @example
   * c-e-06gdesdaxez****
   */
  cloudEnvId?: string;
  /**
   * @example
   * 7
   */
  effectTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * p-065zdecaer07h****
   */
  projectId?: string;
  projectName?: string;
  /**
   * @example
   * Day
   */
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
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * a-06xnr5lyp77e7****
   */
  data?: string;
  message?: string;
  /**
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAccessPageResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * img-8z4nztpaqvay4****
   */
  appCenterImageId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  appInstanceGroupName?: string;
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
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Node
   */
  chargeResourceMode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  network?: CreateAppInstanceGroupRequestNetwork;
  nodePool?: CreateAppInstanceGroupRequestNodePool;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  periodUnit?: string;
  /**
   * @example
   * cag-b2ron*******
   */
  preOpenAppId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CloudApp
   */
  productType?: string;
  /**
   * @example
   * 17440009****
   */
  promotionId?: string;
  runtimePolicy?: CreateAppInstanceGroupRequestRuntimePolicy;
  securityPolicy?: CreateAppInstanceGroupRequestSecurityPolicy;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 15
   */
  sessionTimeout?: number;
  storagePolicy?: CreateAppInstanceGroupRequestStoragePolicy;
  userDefinePolicy?: CreateAppInstanceGroupRequestUserDefinePolicy;
  userInfo?: CreateAppInstanceGroupRequestUserInfo;
  users?: string[];
  videoPolicy?: CreateAppInstanceGroupRequestVideoPolicy;
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
      userDefinePolicy: 'UserDefinePolicy',
      userInfo: 'UserInfo',
      users: 'Users',
      videoPolicy: 'VideoPolicy',
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
      userDefinePolicy: CreateAppInstanceGroupRequestUserDefinePolicy,
      userInfo: CreateAppInstanceGroupRequestUserInfo,
      users: { 'type': 'array', 'itemType': 'string' },
      videoPolicy: CreateAppInstanceGroupRequestVideoPolicy,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppInstanceGroupShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * img-8z4nztpaqvay4****
   */
  appCenterImageId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  appInstanceGroupName?: string;
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
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Node
   */
  chargeResourceMode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  networkShrink?: string;
  nodePoolShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  periodUnit?: string;
  /**
   * @example
   * cag-b2ron*******
   */
  preOpenAppId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CloudApp
   */
  productType?: string;
  /**
   * @example
   * 17440009****
   */
  promotionId?: string;
  runtimePolicyShrink?: string;
  securityPolicyShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 15
   */
  sessionTimeout?: number;
  storagePolicyShrink?: string;
  userDefinePolicyShrink?: string;
  userInfoShrink?: string;
  users?: string[];
  videoPolicyShrink?: string;
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
      userDefinePolicyShrink: 'UserDefinePolicy',
      userInfoShrink: 'UserInfo',
      users: 'Users',
      videoPolicyShrink: 'VideoPolicy',
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
      userDefinePolicyShrink: 'string',
      userInfoShrink: 'string',
      users: { 'type': 'array', 'itemType': 'string' },
      videoPolicyShrink: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAppInstanceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test_name
   */
  appCenterImageName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * aig-9ciijz60n4xsv****
   */
  appInstanceGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CloudApp
   */
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
  /**
   * @example
   * img-bp13mu****
   */
  imageId?: string;
  /**
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateImageFromAppInstanceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @example
   * 0
   */
  clipboard?: number;
  /**
   * @example
   * c-xxxxxxx
   */
  cloudEnvId?: string;
  /**
   * @example
   * c-06vcpamarryyq****
   */
  contentId?: string;
  /**
   * @example
   * xxx
   */
  description?: string;
  /**
   * @example
   * 0
   */
  fileTransfer?: number;
  /**
   * @example
   * 30
   */
  frameRate?: number;
  /**
   * @example
   * 15
   */
  keepAliveDuration?: number;
  /**
   * @example
   * notepad++xxxxx
   */
  projectName?: string;
  /**
   * @example
   * 4096
   */
  sessionResolutionHeight?: number;
  /**
   * @example
   * 4096
   */
  sessionResolutionWidth?: number;
  sessionSpec?: string;
  /**
   * @example
   * mix
   */
  streamingMode?: string;
  /**
   * @example
   * true
   */
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
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * p-xxxxxxxxxxx
   */
  data?: string;
  /**
   * @example
   * There is a missing parameter.
   */
  message?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 50158E8B-992E-1286-B174-XXXXXXXXXXXX
   */
  requestId?: string;
  /**
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @example
   * a-075nu7bcqim2wvxli
   */
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
  /**
   * @example
   * 200
   */
  code?: string;
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteAccessPageResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * aig-9ciijz60n4xsv****
   */
  appInstanceGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CloudApp
   */
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
  /**
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
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

export class DeleteAppInstanceGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteAppInstanceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * aig-9ciijz60n4xsv****
   */
  appInstanceGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * **if can be null:**
   * false
   */
  appInstanceIds?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CloudApp
   */
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
  /**
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteAppInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @example
   * p-065z4tu9ak07h****
   */
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
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * None
   */
  data?: boolean;
  /**
   * @example
   * The parameter PoolId is invalid.
   */
  message?: string;
  /**
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a-062wec3cwmayw****
   */
  accessPageId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 8141B1A674D48ACB8E5D2D6CE53FDB2F3CF8710A5F8F78578D5254BC6F******
   */
  accessPageToken?: string;
  /**
   * @example
   * Banca******
   */
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
  /**
   * @example
   * 200
   */
  code?: string;
  data?: GetAccessPageSessionResponseBodyData;
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAccessPageSessionResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * aig-9ciijz60n4xsv****
   */
  appInstanceGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CloudApp
   */
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
  /**
   * @remarks
   * AppInstanceGroupModels
   */
  appInstanceGroupModels?: GetAppInstanceGroupResponseBodyAppInstanceGroupModels;
  /**
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAppInstanceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @example
   * ca-e4s0puhmwi7v****
   */
  appId?: string;
  appInstanceGroupIdList?: string[];
  /**
   * @example
   * ai-1rznfnrvsa99d****
   */
  appInstanceId?: string;
  appInstancePersistentId?: string;
  /**
   * @example
   * /q /n
   */
  appStartParam?: string;
  /**
   * @example
   * 1.0.0
   */
  appVersion?: string;
  /**
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * alice
   */
  endUserId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CloudApp
   */
  productType?: string;
  /**
   * @example
   * 28778acb-a469-4bc0-8e0f****
   */
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
  /**
   * @example
   * aig-53fvrq1oan****
   */
  appInstanceGroupId?: string;
  /**
   * @example
   * ai-7ybdeiyoeh5e****
   */
  appInstanceId?: string;
  appInstancePersistentId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  /**
   * @example
   * Windows
   */
  osType?: string;
  /**
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
   * @example
   * f3d1b31c-605e-4d04-a896****
   */
  taskId?: string;
  /**
   * @example
   * Running
   */
  taskStatus?: string;
  tenantId?: number;
  /**
   * @example
   * DQpbRGVza3RvcF0NCkZvcmNlVGxzVHlwZT0xDQpHV1Rva2VuUGFydDE9MDAva09ROW1FUTU3dU****
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetConnectionTicketResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * aig-9ciijz60n4xsv****
   */
  appInstanceGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CloudApp
   */
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
  /**
   * @example
   * aig-9ciijz60n4xsv****
   */
  appInstanceGroupId?: string;
  /**
   * @example
   * ai-7ybdeiyoeh5e****
   */
  appInstanceId?: string;
  /**
   * @example
   * 1.1
   */
  appVersion?: string;
  /**
   * @example
   * e4e169bea1cc48e8afac53**********
   */
  authCode?: string;
  /**
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDebugAppInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ota-be7jzm29wrrz5****
   */
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
  /**
   * @example
   * OtaTask.Running
   */
  code?: string;
  /**
   * @example
   * The task is running and cannot be sumitted.
   */
  message?: string;
  /**
   * @example
   * 0.0.1-R-20220708.110604
   */
  otaVersion?: string;
  releaseNote?: string;
  /**
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2022-08-04T14:36:00+08:00
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetOtaTaskByTaskIdResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @example
   * p-xxxxxxxxxxxxxxx
   */
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
  /**
   * @example
   * 200
   */
  code?: string;
  data?: GetProjectPoliciesResponseBodyData;
  /**
   * @example
   * The parameter ProductType is invalid.
   */
  message?: string;
  /**
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetProjectPoliciesResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  amount?: number;
  /**
   * @example
   * appstreaming.general
   */
  appInstanceType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @example
   * appstreaming.vgpu.4c8g.2g
   */
  nodeInstanceType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  periodUnit?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CloudApp
   */
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
  /**
   * @example
   * InvalidParameter.ProductType
   */
  code?: string;
  /**
   * @example
   * The parameter ProductType is invalid.
   */
  message?: string;
  priceList?: GetResourcePriceResponseBodyPriceList[];
  priceModel?: GetResourcePriceResponseBodyPriceModel;
  /**
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetResourcePriceResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * aig-9ciijz60n4xsv****
   */
  appInstanceGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Week
   */
  periodUnit?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CloudApp
   */
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
  /**
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
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
      data: GetResourceRenewPriceResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceRenewPriceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetResourceRenewPriceResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @example
   * a-062wec3cwmayw****
   */
  accessPageId?: string;
  accessPageName?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @example
   * p-065zdecaer07h****
   */
  projectId?: string;
  /**
   * @example
   * ASC
   */
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
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * 22
   */
  count?: string;
  data?: ListAccessPagesResponseBodyData[];
  /**
   * @example
   * InternalError
   */
  message?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @example
   * 20
   */
  pageSize?: string;
  /**
   * @example
   * AF8361BD-5ECB-139A-B019-2E0350CC****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAccessPagesResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @example
   * img-8z4nztpaqvay4****
   */
  appCenterImageId?: string;
  /**
   * @example
   * aig-9ciijz60n4xsv****
   */
  appInstanceGroupId?: string;
  appInstanceGroupName?: string;
  bizRegionId?: string;
  /**
   * @example
   * appstreaming.vgpu.4c8g.2g
   */
  nodeInstanceType?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CloudApp
   */
  productType?: string;
  /**
   * @example
   * cn-hangzhou
   * 
   * @deprecated
   */
  regionId?: string;
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
      regionId: 'RegionId',
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
      regionId: 'string',
      status: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppInstanceGroupResponseBody extends $tea.Model {
  appInstanceGroupModels?: ListAppInstanceGroupResponseBodyAppInstanceGroupModels[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
   * @example
   * 15
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAppInstanceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * aig-4p5f8tj16yb8b****
   */
  appInstanceGroupId?: string;
  /**
   * @example
   * ai-azn3kmwruh1vl****
   */
  appInstanceId?: string;
  /**
   * **if can be null:**
   * false
   */
  appInstanceIdList?: string[];
  /**
   * @example
   * true
   */
  includeDeleted?: boolean;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * **if can be null:**
   * false
   */
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
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
   * @example
   * 18
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAppInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * 资源所属的地域ID。关于支持的地域详情，请参见[使用限制](https://help.aliyun.com/document_detail/426036.html)。
   * 
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  /**
   * @remarks
   * 语言类型。
   * 
   * @example
   * zh-CN
   */
  language?: string;
  /**
   * @example
   * appstreaming.vgpu.4c8g.2g
   */
  nodeInstanceType?: string;
  /**
   * @remarks
   * 支持的操作系统类型。
   * 
   * @example
   * Windows
   */
  osType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CloudApp
   */
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
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  requestId?: string;
  /**
   * @example
   * 6
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListNodeInstanceTypeResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * aig-53fvrq1oanz6c****
   */
  appInstanceGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Fota
   */
  otaType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
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
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  taskList?: ListOtaTaskResponseBodyTaskList[];
  /**
   * @example
   * 6
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListOtaTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * p-065z4tu9ak07h****
   */
  projectId?: string;
  /**
   * @example
   * notepad++***
   */
  projectName?: string;
  /**
   * @example
   * ASC
   */
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
  /**
   * @example
   * 200
   */
  code?: string;
  data?: ListProjectsResponseBodyData[];
  /**
   * @example
   * There is a missing parameter.
   */
  message?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: string;
  /**
   * @example
   * 6
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListProjectsResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class ListRegionsRequest extends $tea.Model {
  bizSource?: string;
  productType?: string;
  static names(): { [key: string]: string } {
    return {
      bizSource: 'BizSource',
      productType: 'ProductType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizSource: 'string',
      productType: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListRegionsResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @example
   * p-xxxxxxxxxxxx
   */
  projectId?: string;
  /**
   * @example
   * tp-xxxxxxxx
   */
  sessionPackageId?: string;
  sessionPackageName?: string;
  /**
   * @example
   * ASC
   */
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
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5Fxxxxxxxx
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListSessionPackagesResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTenantConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * aig-9ciijz60n4xsv****
   */
  appInstanceGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CloudApp
   */
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
  /**
   * @example
   * InvalidParameter.ProductType
   */
  code?: string;
  /**
   * @example
   * The parameter ProductType is invalid.
   */
  message?: string;
  /**
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: LogOffAllSessionsInAppInstanceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @example
   * p-xxxxxx123x4312367
   */
  destProjectId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * tp-xxxxxxxxxxxxxxxxx
   */
  sessionPackageId?: string;
  /**
   * @example
   * p-xxxxxx123x4312345
   */
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
  /**
   * @example
   * NO_DATA
   */
  code?: string;
  message?: string;
  /**
   * @example
   * E25FC620-6B6F-12D2-A992-AD8727DC****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: MigrateSessionPackageResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * aig-9ciijz60n4xsv****
   */
  appInstanceGroupId?: string;
  appInstanceGroupName?: string;
  network?: ModifyAppInstanceGroupAttributeRequestNetwork;
  nodePool?: ModifyAppInstanceGroupAttributeRequestNodePool;
  preOpenAppId?: string;
  preOpenMode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CloudApp
   */
  productType?: string;
  securityPolicy?: ModifyAppInstanceGroupAttributeRequestSecurityPolicy;
  /**
   * @example
   * 15
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * aig-9ciijz60n4xsv****
   */
  appInstanceGroupId?: string;
  appInstanceGroupName?: string;
  networkShrink?: string;
  nodePoolShrink?: string;
  preOpenAppId?: string;
  preOpenMode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CloudApp
   */
  productType?: string;
  securityPolicyShrink?: string;
  /**
   * @example
   * 15
   */
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
  /**
   * @example
   * InvalidParameter.ProductType
   */
  code?: string;
  /**
   * @example
   * The parameter ProductType is invalid.
   */
  message?: string;
  /**
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyAppInstanceGroupAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class ModifyAppPolicyRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pg-ee2znjktwgxu2****
   */
  appPolicyId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CloudApp
   */
  productType?: string;
  videoPolicy?: ModifyAppPolicyRequestVideoPolicy;
  static names(): { [key: string]: string } {
    return {
      appPolicyId: 'AppPolicyId',
      productType: 'ProductType',
      videoPolicy: 'VideoPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appPolicyId: 'string',
      productType: 'string',
      videoPolicy: ModifyAppPolicyRequestVideoPolicy,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAppPolicyShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pg-ee2znjktwgxu2****
   */
  appPolicyId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CloudApp
   */
  productType?: string;
  videoPolicyShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appPolicyId: 'AppPolicyId',
      productType: 'ProductType',
      videoPolicyShrink: 'VideoPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appPolicyId: 'string',
      productType: 'string',
      videoPolicyShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAppPolicyResponseBody extends $tea.Model {
  /**
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
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

export class ModifyAppPolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyAppPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyAppPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyNodePoolAttributeRequest extends $tea.Model {
  /**
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  /**
   * @example
   * 2
   */
  nodeCapacity?: number;
  nodePoolStrategy?: ModifyNodePoolAttributeRequestNodePoolStrategy;
  /**
   * @example
   * rg-ew7va2g1wl3vm****
   */
  poolId?: string;
  /**
   * @remarks
   * 产品类型。
   * 
   * @example
   * CloudApp
   */
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
  /**
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  /**
   * @example
   * 2
   */
  nodeCapacity?: number;
  nodePoolStrategyShrink?: string;
  /**
   * @example
   * rg-ew7va2g1wl3vm****
   */
  poolId?: string;
  /**
   * @remarks
   * 产品类型。
   * 
   * @example
   * CloudApp
   */
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
  /**
   * @example
   * InvalidParameter.PoolId
   */
  code?: string;
  /**
   * @example
   * The parameter PoolId is invalid.
   */
  message?: string;
  /**
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyNodePoolAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @example
   * 0
   */
  clipboard?: number;
  /**
   * @example
   * 0
   */
  fileTransfer?: number;
  /**
   * @example
   * 30
   */
  frameRate?: number;
  /**
   * @example
   * 15
   */
  keepAliveDuration?: number;
  /**
   * @example
   * p-065z4tu9ak07h****
   */
  projectId?: string;
  /**
   * @example
   * 4096
   */
  sessionResolutionHeight?: number;
  /**
   * @example
   * 4096
   */
  sessionResolutionWidth?: number;
  /**
   * @example
   * video
   */
  streamingMode?: string;
  /**
   * @example
   * true
   */
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
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * None
   */
  data?: string;
  /**
   * @example
   * There is a missing parameter.
   */
  message?: string;
  /**
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyProjectPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @example
   * true
   */
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
  /**
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
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

export class ModifyTenantConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyTenantConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * aig-9ciijz60n4xsv****
   */
  appInstanceGroupId?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CloudApp
   */
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
  /**
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PageListAppInstanceGroupUserResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @example
   * a-062wec3cwmayw****
   */
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
  /**
   * @example
   * https://wuying.aliyun.com/native-solution/cloud-flow/view?id=a-075nu7b9ynrpugvbm&token=67C7557D25540A9130B1ED81E806D4772A7DE693E6F377E3594179772B******
   */
  accessUrl?: string;
  /**
   * @example
   * 200
   */
  code?: string;
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RefreshAccessUrlResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * aig-9ciijz60n4xsv****
   */
  appInstanceGroupId?: string;
  /**
   * @example
   * false
   */
  autoPay?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  periodUnit?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CloudApp
   */
  productType?: string;
  /**
   * @example
   * 17440009****
   */
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
  /**
   * @example
   * InvalidParameter.ProductType
   */
  code?: string;
  /**
   * @example
   * The parameter ProductType is invalid.
   */
  message?: string;
  /**
   * @example
   * 123456****
   */
  orderId?: string;
  /**
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RenewAppInstanceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * tp-****
   */
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
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * There is a missing parameter.
   */
  message?: string;
  /**
   * @example
   * 50158E8B-992E-1286-B174-**********
   */
  requestId?: string;
  /**
   * @example
   * 22983172******
   */
  sessionPackageId?: number;
  /**
   * @example
   * success
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RenewSessionPackageResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * aig-9ciijz60n4xsv****
   */
  appInstanceGroupId?: string;
  /**
   * @example
   * ai-d297eyf83g5ni****
   */
  appInstanceId?: string;
  appInstancePersistentId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * alice
   */
  endUserId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CloudApp
   */
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
  /**
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
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

export class UnbindResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UnbindResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @example
   * a-06xnr5lyp77e7****
   */
  accessPageId?: string;
  /**
   * @example
   * 1
   */
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
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * InternalError
   */
  message?: string;
  /**
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateAccessPageStateResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * img-8z4nztpaqvay4****
   */
  appCenterImageId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * aig-9ciijz60n4xsv****
   */
  appInstanceGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CloudApp
   */
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
  /**
   * @example
   * InvalidParameter.ProductType
   */
  code?: string;
  /**
   * @example
   * The parameter ProductType is invalid.
   */
  message?: string;
  /**
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateAppInstanceGroupImageResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @example
   * FREE_ACCESS
   */
  accessMode?: string;
  /**
   * @example
   * https://wuying.aliyun.com/native-solution/cloud-flow/view?id=a-075nu7bcqim2wvxli&token=8141B1A674D48ACB8E5D2D6CE53FDB2F3CF8710A5F8F78578D5254BC6F******
   */
  accessUrl?: string;
  /**
   * @example
   * 2023-02-08T03:52Z
   */
  effectTime?: number;
  /**
   * @example
   * hour
   */
  unit?: string;
  /**
   * @example
   * 2023-12-05 14:28:20
   */
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
  /**
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @example
   * 0.0
   */
  discountPrice?: number;
  /**
   * @example
   * 2000.0
   */
  originalPrice?: number;
  /**
   * @example
   * 2000.0
   */
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
  /**
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @example
   * 0.0
   */
  discountPrice?: number;
  /**
   * @example
   * 2000.0
   */
  originalPrice?: number;
  /**
   * @example
   * 2000.0
   */
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
  /**
   * @example
   * 139.196.XX.XX/32
   */
  destination?: string;
  /**
   * @example
   * Shared
   */
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
  /**
   * @example
   * 60
   */
  ipExpireMinutes?: number;
  routes?: CreateAppInstanceGroupRequestNetworkRoutes[];
  /**
   * @example
   * Shared
   */
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
  /**
   * @example
   * 2
   */
  amount?: number;
  /**
   * @example
   * 15:00
   */
  endTime?: string;
  /**
   * @example
   * 12:00
   */
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
  /**
   * @example
   * weekly
   */
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
  /**
   * @example
   * 10
   */
  maxScalingAmount?: number;
  /**
   * @example
   * 1
   */
  nodeAmount?: number;
  /**
   * @example
   * 2
   */
  nodeCapacity?: number;
  nodeInstanceType?: string;
  recurrenceSchedules?: CreateAppInstanceGroupRequestNodePoolRecurrenceSchedules[];
  /**
   * @example
   * 5
   */
  scalingDownAfterIdleMinutes?: number;
  /**
   * @example
   * 2
   */
  scalingStep?: number;
  /**
   * @example
   * 85
   */
  scalingUsageThreshold?: string;
  /**
   * @example
   * 2022-09-08
   */
  strategyDisableDate?: string;
  /**
   * @example
   * 2022-08-01
   */
  strategyEnableDate?: string;
  /**
   * @example
   * NODE_FIXED
   */
  strategyType?: string;
  /**
   * @example
   * false
   */
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
  /**
   * @remarks
   * 会话类型。
   * 
   * @example
   * NORMAL
   */
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
  /**
   * @example
   * true
   */
  resetAfterUnbind?: boolean;
  /**
   * @example
   * false
   */
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

export class CreateAppInstanceGroupRequestUserDefinePolicy extends $tea.Model {
  customConfig?: string;
  static names(): { [key: string]: string } {
    return {
      customConfig: 'CustomConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customConfig: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppInstanceGroupRequestUserInfo extends $tea.Model {
  /**
   * @example
   * Simple
   */
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

export class CreateAppInstanceGroupRequestVideoPolicy extends $tea.Model {
  frameRate?: number;
  sessionResolutionHeight?: number;
  sessionResolutionWidth?: number;
  streamingMode?: string;
  terminalResolutionAdaptive?: boolean;
  webrtc?: boolean;
  static names(): { [key: string]: string } {
    return {
      frameRate: 'FrameRate',
      sessionResolutionHeight: 'SessionResolutionHeight',
      sessionResolutionWidth: 'SessionResolutionWidth',
      streamingMode: 'StreamingMode',
      terminalResolutionAdaptive: 'TerminalResolutionAdaptive',
      webrtc: 'Webrtc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      frameRate: 'number',
      sessionResolutionHeight: 'number',
      sessionResolutionWidth: 'number',
      streamingMode: 'string',
      terminalResolutionAdaptive: 'boolean',
      webrtc: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppInstanceGroupResponseBodyAppInstanceGroupModel extends $tea.Model {
  /**
   * @example
   * aig-9ciijz60n4xsv****
   */
  appInstanceGroupId?: string;
  /**
   * @example
   * rg-ew7va2g1wl3vm****
   */
  nodePoolId?: string;
  /**
   * @example
   * 12345****
   */
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
  /**
   * @example
   * ai-gbuea*****
   */
  appInstanceId?: string;
  /**
   * @example
   * InvalidParameter.ProductType
   */
  code?: string;
  /**
   * @example
   * The parameter ProductType is invalid.
   */
  message?: string;
  /**
   * @example
   * true
   */
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
  /**
   * @example
   * DQpbRGVza3RvcF0NCkZvcmNlVGxzVHlwZT0xDQpHV1Rva2VuUGFydDE9MDBzQU5DTGVsZ0RqMnAyMGpZdUNkRDMrNTlLekpzUTRXNElPWVdjWGIwZ2QrUkNyais0ZGM3WUJGM1NBdVFJWWl2ejhaWDlvakh1cDJ4c0Vpc3lrQ1I4RVEzeDhIYXdCb2pRRDJReklaQTZIbU52VjdrRlNlWkxQTXV3Y0hNTEZTTkxKaDNOY1BtU0tVYTNqWVVUMFUyKzNqWDBRMXdLM29ZQnJaOFVoL2RWY0xpem5tWEhHTmE0THVGRCtrajloSWlFT0w3b2w4OHY1cjBPelpHZnh4aXlVbk1yQURnRHhoK1F6K3UvdXYxaFYyQ3UwVlduTHJ3cDNRM3hYWWtORW81N00xYWZ4cTJBdWplVmx3aGVxOHd4dDl2Y3NGVGMxNFpPL2hudWdoeGJkaz0NCkdXVG9rZW5QYXJ0Mj0NCkFzcEF1dGhUb2tlbj0wME5LTnlLZXE3UGpzNzNzeURrdEs2NUlaenpYb05WNWxnY3BjVTJMd2NKUEoyMk53WmlrSGNaaDdNVGk2azlLazNyeHFCd2FHZTlmc2NUbFljUDJ0MEVldXRha2paUklMM0x3a0RsT1BZZTZxYmtsay9STHFrajg4dWg0ZFZNTHE2QkF0WVRSeW9ZTC9WUHhaVWxyZEZOQT09DQpBZXNLZXlWZXJzaW9uPTE3MDEyMzk1ODc4NzcNCkdhdGV3YXlEb21haW5BZGRyZXNzPWd3LWFwcC1jbi1oYW5nemhvdS1pLWFwcC10ZXN0MC13aW4ud3V5aW5nLmFsaXl1bmNzLmNvbQ0KR2F0ZXdheUFkZHJlc3M9NDcuOTkuMjIzLjE0OQ0KR2F0ZXdheVBvcnQ9NTkxMg0KR2F0ZXdheVdzc1BvcnQ9ODAwOA0KU3RyZWFtVHlwZT0wDQpSdGNHd1Rva2VuPVAwMFJkc013dVdQVkt4MGtRYUNkSlY3MUc2OC9iaWFhSEJwVn******
   */
  connectTicket?: string;
  /**
   * @remarks
   * flow ID
   * 
   * @example
   * e4fa0b4c18c5437a8b1746e7c228172e
   */
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
  /**
   * @example
   * ca-i87mycyn419nu****
   */
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
  /**
   * @example
   * 5
   */
  amount?: number;
  /**
   * @example
   * 11:00
   */
  endTime?: string;
  /**
   * @example
   * 09:30
   */
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
  /**
   * @example
   * Weekly
   */
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
  /**
   * @example
   * 2
   */
  amount?: number;
  /**
   * @example
   * 8
   */
  maxScalingAmount?: number;
  /**
   * @example
   * 1
   */
  nodeAmount?: number;
  /**
   * @example
   * 2
   */
  nodeCapacity?: number;
  /**
   * @example
   * appstreaming.vgpu.4c8g.2g
   */
  nodeInstanceType?: string;
  /**
   * @example
   * rg-g6922kced36hx****
   */
  nodePoolId?: string;
  nodeTypeName?: string;
  /**
   * @example
   * 1
   */
  nodeUsed?: number;
  recurrenceSchedules?: GetAppInstanceGroupResponseBodyAppInstanceGroupModelsNodePoolRecurrenceSchedules[];
  /**
   * @example
   * 5
   */
  scalingDownAfterIdleMinutes?: number;
  /**
   * @example
   * 8
   */
  scalingNodeAmount?: number;
  /**
   * @example
   * 4
   */
  scalingNodeUsed?: number;
  /**
   * @example
   * 2
   */
  scalingStep?: number;
  /**
   * @example
   * 85
   */
  scalingUsageThreshold?: string;
  /**
   * @example
   * 2022-09-08
   */
  strategyDisableDate?: string;
  /**
   * @example
   * 2022-08-01
   */
  strategyEnableDate?: string;
  /**
   * @example
   * NODE_FIXED
   */
  strategyType?: string;
  /**
   * @example
   * false
   */
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
  /**
   * @example
   * 0.0.1-D-20220630.11****
   */
  newOtaVersion?: string;
  /**
   * @example
   * 0.0.1-D-20220615.11****
   */
  otaVersion?: string;
  /**
   * @example
   * ota-e49929gv8acz5****
   */
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
  /**
   * @example
   * img-8z4nztpaqvay4****
   */
  appCenterImageId?: string;
  /**
   * @example
   * OfficeApps
   */
  appCenterImageName?: string;
  /**
   * @example
   * aig-9ciijz60n4xsv****
   */
  appInstanceGroupId?: string;
  appInstanceGroupName?: string;
  /**
   * @example
   * __dynamic__
   */
  appInstanceType?: string;
  /**
   * @example
   * test001
   */
  appInstanceTypeName?: string;
  /**
   * @example
   * pg-g3k5wa2ms2****
   */
  appPolicyId?: string;
  apps?: GetAppInstanceGroupResponseBodyAppInstanceGroupModelsApps[];
  /**
   * @example
   * Node
   */
  chargeResourceMode?: string;
  /**
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @example
   * 2022-04-27T16:00:00.000+00:00
   */
  expiredTime?: string;
  /**
   * @example
   * 2022-04-26T15:06:16.000+00:00
   */
  gmtCreate?: string;
  /**
   * @example
   * 10
   */
  maxAmount?: number;
  /**
   * @example
   * 1
   */
  minAmount?: number;
  nodePool?: GetAppInstanceGroupResponseBodyAppInstanceGroupModelsNodePool[];
  /**
   * @example
   * Windows
   */
  osType?: string;
  otaInfo?: GetAppInstanceGroupResponseBodyAppInstanceGroupModelsOtaInfo;
  /**
   * @example
   * CloudApp
   */
  productType?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * 20
   */
  reserveAmountRatio?: string;
  /**
   * @example
   * 5
   */
  reserveMaxAmount?: number;
  /**
   * @example
   * 1
   */
  reserveMinAmount?: number;
  /**
   * @example
   * AVAILABLE
   */
  resourceStatus?: string;
  /**
   * @example
   * 5
   */
  scalingDownAfterIdleMinutes?: number;
  /**
   * @example
   * 10
   */
  scalingStep?: number;
  /**
   * @example
   * 85
   */
  scalingUsageThreshold?: string;
  /**
   * @example
   * 15
   */
  sessionTimeout?: string;
  /**
   * @example
   * false
   */
  skipUserAuthCheck?: boolean;
  /**
   * @example
   * spec-8o18t8uc31qib0****
   */
  specId?: string;
  /**
   * @example
   * PUBLISHED
   */
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
  /**
   * @example
   * 0
   */
  clipboard?: number;
  /**
   * @example
   * 0
   */
  fileTransfer?: number;
  /**
   * @example
   * 30
   */
  frameRate?: string;
  /**
   * @example
   * 15
   */
  keepAliveDuration?: number;
  /**
   * @example
   * 1000
   */
  maxHours?: number;
  /**
   * @example
   * 60
   */
  maxSessions?: number;
  /**
   * @example
   * p-xxxxxxxxxxx
   */
  projectId?: string;
  /**
   * @example
   * 1080
   */
  sessionResolutionHeight?: number;
  /**
   * @example
   * 1920
   */
  sessionResolutionWidth?: number;
  sessionSpec?: string;
  /**
   * @example
   * mix
   */
  streamingMode?: string;
  /**
   * @example
   * true
   */
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
  /**
   * @example
   * coupon****
   */
  optionCode?: string;
  promotionDesc?: string;
  /**
   * @example
   * 1847709****
   */
  promotionId?: string;
  promotionName?: string;
  /**
   * @example
   * true
   */
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
  /**
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @example
   * 999.0
   */
  discountPrice?: string;
  /**
   * @example
   * 6700
   */
  originalPrice?: string;
  promotions?: GetResourcePriceResponseBodyPriceListPricePromotions[];
  /**
   * @example
   * 5278.0
   */
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
  /**
   * @example
   * 260904273633****
   */
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
  /**
   * @example
   * Standby
   */
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
  /**
   * @example
   * coupon****
   */
  optionCode?: string;
  promotionDesc?: string;
  /**
   * @example
   * 17440009****
   */
  promotionId?: string;
  promotionName?: string;
  /**
   * @example
   * true
   */
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
  /**
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @example
   * 1.00
   */
  discountPrice?: string;
  /**
   * @example
   * 11.00
   */
  originalPrice?: string;
  promotions?: GetResourcePriceResponseBodyPriceModelPricePromotions[];
  /**
   * @example
   * 10.00
   */
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
  /**
   * @example
   * 102002100393****
   */
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
  /**
   * @example
   * coupon****
   */
  optionCode?: string;
  promotionDesc?: string;
  /**
   * @example
   * 139965*****
   */
  promotionId?: string;
  promotionName?: string;
  /**
   * @example
   * true
   */
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
  /**
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @example
   * 1
   */
  discountPrice?: string;
  /**
   * @example
   * 11
   */
  originalPrice?: string;
  promotions?: GetResourceRenewPriceResponseBodyDataPricePromotions[];
  /**
   * @example
   * 10
   */
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
  /**
   * @example
   * 20002****
   */
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
  /**
   * @example
   * a-062wec3cwmayw****
   */
  accessPageId?: string;
  /**
   * @example
   * notepad_test
   */
  accessPageName?: string;
  /**
   * @example
   * 1
   */
  accessPageState?: string;
  /**
   * @example
   * id=a-062wec3cwmayw****&token=9E9A62937B0E41F4AEFE5EC9B238156CCDFB682954003AEE940A05FB2568****
   */
  accessUrl?: string;
  /**
   * @example
   * c-05to6wm3w5d53****
   */
  contentId?: string;
  contentName?: string;
  /**
   * @example
   * 168
   */
  effectTime?: number;
  /**
   * @example
   * 2023-11-16T08:48:15.000+00:00
   */
  gmtCreate?: string;
  /**
   * @example
   * p-062wec3cwmayu****
   */
  projectId?: string;
  /**
   * @example
   * notepad_demo
   */
  projectName?: string;
  /**
   * @example
   * Hour
   */
  unit?: string;
  /**
   * @example
   * 2023-11-23T08:48:15.000+00:00
   */
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
  /**
   * @remarks
   * 应用图标。
   * 
   * @example
   * https://app-center-icon-****.png
   */
  appIcon?: string;
  /**
   * @example
   * ca-i87mycyn419nu****
   */
  appId?: string;
  appName?: string;
  /**
   * @remarks
   * 应用版本。
   * 
   * @example
   * 1.0.0
   */
  appVersion?: string;
  /**
   * @remarks
   * 应用版本名称。
   * 
   * @example
   * 初始版本
   */
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
  /**
   * @example
   * 5
   */
  amount?: number;
  /**
   * @example
   * 11:00
   */
  endTime?: string;
  /**
   * @example
   * 09:30
   */
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
  /**
   * @example
   * Weekly
   */
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
  /**
   * @example
   * 2
   */
  amount?: number;
  /**
   * @example
   * 8
   */
  maxScalingAmount?: number;
  /**
   * @example
   * 1
   */
  nodeAmount?: number;
  /**
   * @example
   * 2
   */
  nodeCapacity?: number;
  /**
   * @example
   * appstreaming.vgpu.4c8g.2g
   */
  nodeInstanceType?: string;
  /**
   * @example
   * rg-g6922kced36hx****
   */
  nodePoolId?: string;
  nodeTypeName?: string;
  /**
   * @example
   * 1
   */
  nodeUsed?: number;
  recurrenceSchedules?: ListAppInstanceGroupResponseBodyAppInstanceGroupModelsNodePoolRecurrenceSchedules[];
  /**
   * @example
   * 5
   */
  scalingDownAfterIdleMinutes?: number;
  /**
   * @example
   * 8
   */
  scalingNodeAmount?: number;
  /**
   * @example
   * 4
   */
  scalingNodeUsed?: number;
  /**
   * @example
   * 2
   */
  scalingStep?: number;
  /**
   * @example
   * 85
   */
  scalingUsageThreshold?: string;
  /**
   * @example
   * 2022-09-08
   */
  strategyDisableDate?: string;
  /**
   * @example
   * 2022-08-01
   */
  strategyEnableDate?: string;
  /**
   * @example
   * NODE_FIXED
   */
  strategyType?: string;
  /**
   * @example
   * false
   */
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
  /**
   * @example
   * 0.0.1-D-20220630.11****
   */
  newOtaVersion?: string;
  /**
   * @example
   * 0.0.1-D-20220615.11****
   */
  otaVersion?: string;
  /**
   * @example
   * ota-e49929gv8acz5****
   */
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
  /**
   * @example
   * 1
   */
  amount?: number;
  /**
   * @example
   * img-8z4nztpaqvay4****
   */
  appCenterImageId?: string;
  /**
   * @example
   * aig-9ciijz60n4xsv****
   */
  appInstanceGroupId?: string;
  appInstanceGroupName?: string;
  /**
   * @example
   * __dynamic__
   */
  appInstanceType?: string;
  /**
   * @remarks
   * 策略ID。
   * 
   * @example
   * pg-g3k5wa2ms2****
   */
  appPolicyId?: string;
  apps?: ListAppInstanceGroupResponseBodyAppInstanceGroupModelsApps[];
  /**
   * @remarks
   * 售卖模式。
   * 
   * @example
   * Node
   */
  chargeResourceMode?: string;
  /**
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @example
   * 2022-04-27T16:00:00.000+00:00
   */
  expiredTime?: string;
  /**
   * @example
   * 2022-04-26T15:06:16.000+00:00
   */
  gmtCreate?: string;
  /**
   * @example
   * 10
   */
  maxAmount?: number;
  /**
   * @example
   * 1
   */
  minAmount?: number;
  nodePool?: ListAppInstanceGroupResponseBodyAppInstanceGroupModelsNodePool[];
  /**
   * @example
   * Windows
   */
  osType?: string;
  otaInfo?: ListAppInstanceGroupResponseBodyAppInstanceGroupModelsOtaInfo;
  /**
   * @example
   * CloudApp
   */
  productType?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * 20
   */
  reserveAmountRatio?: string;
  /**
   * @example
   * 5
   */
  reserveMaxAmount?: number;
  /**
   * @example
   * 1
   */
  reserveMinAmount?: number;
  /**
   * @example
   * AVAILABLE
   */
  resourceStatus?: string;
  /**
   * @example
   * 5
   */
  scalingDownAfterIdleMinutes?: number;
  /**
   * @example
   * 10
   */
  scalingStep?: number;
  /**
   * @example
   * 85
   */
  scalingUsageThreshold?: string;
  /**
   * @example
   * 15
   */
  sessionTimeout?: string;
  /**
   * @example
   * false
   */
  skipUserAuthCheck?: boolean;
  /**
   * @example
   * spec-8o18t8uc31qib0****
   */
  specId?: string;
  /**
   * @example
   * PUBLISHED
   */
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
  /**
   * @example
   * app.test
   */
  endUserId?: string;
  /**
   * @example
   * 2000
   */
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
  /**
   * @example
   * aig-dk8p95irqfst9****
   */
  appInstanceGroupId?: string;
  /**
   * @example
   * ai-8dl7dzchklmka****
   */
  appInstanceId?: string;
  bindInfo?: ListAppInstancesResponseBodyAppInstanceModelsBindInfo;
  /**
   * @example
   * 2023-03-07T20:29:19.000+08:00
   */
  gmtCreate?: string;
  /**
   * @example
   * 2023-03-07T20:29:19.000+08:00
   */
  gmtModified?: string;
  /**
   * @example
   * 10.13.13.211
   */
  mainEthPublicIp?: string;
  /**
   * @example
   * connect
   */
  sessionStatus?: string;
  /**
   * @example
   * BOUND
   */
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
  /**
   * @example
   * 4
   */
  cpu?: string;
  /**
   * @example
   * 2
   */
  gpu?: string;
  /**
   * @remarks
   * 显卡内存大小，单位为MB。
   * 
   * @example
   * 8192
   */
  gpuMemory?: number;
  /**
   * @remarks
   * 最大并发会话数，即单个资源可同时连接的会话数。如果同时连接的会话数过多，可能导致应用的使用体验下降。取值范围因资源规格不同而不同。各资源规格对应的取值范围分别是：
   * 
   * - appstreaming.general.4c8g：1\\~2；
   * - appstreaming.general.8c16g：1\\~4；
   * - appstreaming.vgpu.8c16g.4g：1\\~4；
   * - appstreaming.vgpu.8c31g.16g：1\\~4；
   * - appstreaming.vgpu.14c93g.12g：1\\~6；
   * 
   * @example
   * 4
   */
  maxCapacity?: number;
  /**
   * @example
   * 8192
   */
  memory?: number;
  /**
   * @example
   * appstreaming.vgpu.4c8g.2g
   */
  nodeInstanceType?: string;
  /**
   * @example
   * appstreaming.vgpu
   */
  nodeInstanceTypeFamily?: string;
  /**
   * @remarks
   * 资源规格名称。
   * 
   * @example
   * 无影-通用型_4核8G
   */
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
  /**
   * @example
   * 0.0.1-R-20220708.110604
   */
  otaVersion?: string;
  /**
   * @example
   * RUNNING
   */
  taskDisplayStatus?: string;
  /**
   * @example
   * ota-be7jzm29wrrz5****
   */
  taskId?: string;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2022-08-04T14:36:00+08:00
   */
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
  /**
   * @example
   * 3174301
   */
  availableHours?: number;
  /**
   * @example
   * c-06vcpamarryyq****
   */
  contentId?: string;
  /**
   * @example
   * notepad++***
   */
  contentName?: string;
  /**
   * @example
   * 1701141509000
   */
  createTime?: string;
  /**
   * @example
   * xxx
   */
  description?: string;
  inUseSessions?: number;
  /**
   * @example
   * 1000
   */
  maxHours?: number;
  /**
   * @example
   * 100
   */
  maxSessions?: number;
  /**
   * @example
   * p-065z4tu9ak07h****
   */
  projectId?: string;
  /**
   * @example
   * notepad++***
   */
  projectName?: string;
  /**
   * @example
   * 0
   */
  projectState?: string;
  /**
   * @example
   * appstreaming.general.basic
   */
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
  /**
   * @example
   * 2024-05-28T16:00:00Z
   */
  expiredTime?: string;
  /**
   * @example
   * tp-xxxxxxxxxxx
   */
  instanceId?: string;
  /**
   * @example
   * appstreaming.general.entry
   */
  instanceType?: string;
  /**
   * @example
   * p-xxxxxxxxxx
   */
  resourceId?: string;
  /**
   * @example
   * AppSessionPackage
   */
  resourceType?: string;
  /**
   * @example
   * 2023-11-28T04:14:07Z
   */
  startTime?: string;
  /**
   * @example
   * 3600000
   */
  totalTime?: number;
  /**
   * @example
   * 1021
   */
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
  /**
   * @example
   * 500
   */
  availableHours?: number;
  chargeType?: string;
  /**
   * @example
   * 0
   */
  deleteStatus?: number;
  /**
   * @example
   * 1701170196000
   */
  gmtCreate?: string;
  /**
   * @example
   * 1701170203000
   */
  gmtModifiedTime?: string;
  instanceObject?: ListSessionPackagesResponseBodyDataInstanceObject;
  /**
   * @example
   * 1000
   */
  maxHours?: number;
  /**
   * @example
   * 100
   */
  maxSessions?: number;
  /**
   * @example
   * p-xxxxxxxxxxxx
   */
  projectId?: string;
  projectName?: string;
  /**
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @example
   * tp-xxxxxxxxx
   */
  sessionPackageId?: string;
  sessionPackageName?: string;
  /**
   * @example
   * 0
   */
  sessionPackageTypeId?: string;
  /**
   * @example
   * appstreaming.general.entry
   */
  sessionSpec?: string;
  /**
   * @example
   * 60
   */
  sessionUsageRate?: number;
  /**
   * @example
   * 4
   */
  state?: number;
  /**
   * @example
   * 156xxxxxxxxxx
   */
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
  /**
   * @example
   * true
   */
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
  /**
   * @example
   * 2
   */
  nodeCapacity?: number;
  /**
   * @example
   * rg-ew7va2g1wl3vm****
   */
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
  /**
   * @example
   * true
   */
  resetAfterUnbind?: boolean;
  /**
   * @example
   * false
   */
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

export class ModifyAppPolicyRequestVideoPolicy extends $tea.Model {
  /**
   * @example
   * 60
   */
  frameRate?: number;
  /**
   * @example
   * 1080
   */
  sessionResolutionHeight?: number;
  /**
   * @example
   * 1920
   */
  sessionResolutionWidth?: number;
  /**
   * @example
   * video
   */
  streamingMode?: string;
  /**
   * @example
   * false
   */
  terminalResolutionAdaptive?: boolean;
  visualQualityStrategy?: string;
  /**
   * @example
   * true
   */
  webrtc?: boolean;
  static names(): { [key: string]: string } {
    return {
      frameRate: 'FrameRate',
      sessionResolutionHeight: 'SessionResolutionHeight',
      sessionResolutionWidth: 'SessionResolutionWidth',
      streamingMode: 'StreamingMode',
      terminalResolutionAdaptive: 'TerminalResolutionAdaptive',
      visualQualityStrategy: 'VisualQualityStrategy',
      webrtc: 'Webrtc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      frameRate: 'number',
      sessionResolutionHeight: 'number',
      sessionResolutionWidth: 'number',
      streamingMode: 'string',
      terminalResolutionAdaptive: 'boolean',
      visualQualityStrategy: 'string',
      webrtc: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyNodePoolAttributeRequestNodePoolStrategyRecurrenceSchedulesTimerPeriods extends $tea.Model {
  /**
   * @remarks
   * 资源数量。
   * 
   * @example
   * 2
   */
  amount?: number;
  /**
   * @remarks
   * 结束时间。格式为HH:mm。
   * 
   * @example
   * 15:00
   */
  endTime?: string;
  /**
   * @remarks
   * 开始时间。格式为HH:mm。
   * 
   * @example
   * 12:00
   */
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
  /**
   * @remarks
   * 策略执行周期的类型。必须同时指定`RecurrenceType`和`RecurrenceValues`。
   * 
   * @example
   * weekly
   */
  recurrenceType?: string;
  /**
   * @remarks
   * 策略执行周期的数值列表。
   */
  recurrenceValues?: number[];
  /**
   * @remarks
   * 策略执行周期的时间段列表。时间段设置要求：
   * 
   * - 最多可添加3个时间段。
   * - 时间段之间不重叠。
   * - 时间段之间的间隔大于或等于5分钟。
   * - 单个时间段的时长大于或等于15分钟。
   * - 所有时间段累计不跨天。
   */
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
  /**
   * @example
   * 10
   */
  maxScalingAmount?: number;
  /**
   * @remarks
   * 购买资源的数量。取值范围：1~100。
   * 
   * > 
   * - 若为包年包月资源，则该参数不可修改。
   * - 若为按量付费资源，则当弹性模式（`StrategyType`）为固定数量（`NODE_FIXED`）或自动扩缩容（`NODE_SCALING_BY_USAGE`）时该参数可修改。
   * 
   * @example
   * 1
   */
  nodeAmount?: number;
  /**
   * @remarks
   * 策略执行周期列表。`StrategyType`（弹性模式）设为`NODE_SCALING_BY_SCHEDULE`（定时扩缩容）时，该字段必填。
   */
  recurrenceSchedules?: ModifyNodePoolAttributeRequestNodePoolStrategyRecurrenceSchedules[];
  /**
   * @example
   * 5
   */
  scalingDownAfterIdleMinutes?: number;
  /**
   * @example
   * 2
   */
  scalingStep?: number;
  /**
   * @example
   * 85
   */
  scalingUsageThreshold?: string;
  /**
   * @remarks
   * 策略失效日期。格式为：yyyy-MM-dd。失效日期与生效日期的间隔必须介于7天到1年之间（含7天和1年）。`StrategyType`（弹性模式）设为`NODE_SCALING_BY_SCHEDULE`（定时扩缩容）时，该字段必填。
   * 
   * @example
   * 2023-01-19
   */
  strategyDisableDate?: string;
  /**
   * @remarks
   * 策略生效日期。格式为：yyyy-MM-dd。该日期必须大于或等于当前日期。`StrategyType`（弹性模式）设为`NODE_SCALING_BY_SCHEDULE`（定时扩缩容）时，该字段必填。
   * 
   * @example
   * 2023-01-05
   */
  strategyEnableDate?: string;
  strategyType?: string;
  /**
   * @remarks
   * 是否开启资源预热策略。`StrategyType`（弹性模式）设为`NODE_SCALING_BY_SCHEDULE`（定时扩缩容）时，该字段必填。
   * 
   * @example
   * false
   */
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

  /**
   * 获取访问管理页配置
   * 
   * @param request - AccessPageGetAclRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AccessPageGetAclResponse
   */
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

  /**
   * 获取访问管理页配置
   * 
   * @param request - AccessPageGetAclRequest
   * @returns AccessPageGetAclResponse
   */
  async accessPageGetAcl(request: AccessPageGetAclRequest): Promise<AccessPageGetAclResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.accessPageGetAclWithOptions(request, runtime);
  }

  /**
   * 更新访问管理
   * 
   * @param request - AccessPageSetAclRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AccessPageSetAclResponse
   */
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

  /**
   * 更新访问管理
   * 
   * @param request - AccessPageSetAclRequest
   * @returns AccessPageSetAclResponse
   */
  async accessPageSetAcl(request: AccessPageSetAclRequest): Promise<AccessPageSetAclResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.accessPageSetAclWithOptions(request, runtime);
  }

  /**
   * 同意Ota升级
   * 
   * @param request - ApproveOtaTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ApproveOtaTaskResponse
   */
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

  /**
   * 同意Ota升级
   * 
   * @param request - ApproveOtaTaskRequest
   * @returns ApproveOtaTaskResponse
   */
  async approveOtaTask(request: ApproveOtaTaskRequest): Promise<ApproveOtaTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.approveOtaTaskWithOptions(request, runtime);
  }

  /**
   * 会话包收费查询
   * 
   * @param request - AskSessionPackagePriceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AskSessionPackagePriceResponse
   */
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

  /**
   * 会话包收费查询
   * 
   * @param request - AskSessionPackagePriceRequest
   * @returns AskSessionPackagePriceResponse
   */
  async askSessionPackagePrice(request: AskSessionPackagePriceRequest): Promise<AskSessionPackagePriceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.askSessionPackagePriceWithOptions(request, runtime);
  }

  /**
   * 会话包续费询价
   * 
   * @param request - AskSessionPackageRenewPriceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AskSessionPackageRenewPriceResponse
   */
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

  /**
   * 会话包续费询价
   * 
   * @param request - AskSessionPackageRenewPriceRequest
   * @returns AskSessionPackageRenewPriceResponse
   */
  async askSessionPackageRenewPrice(request: AskSessionPackageRenewPriceRequest): Promise<AskSessionPackageRenewPriceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.askSessionPackageRenewPriceWithOptions(request, runtime);
  }

  /**
   * 授权用户
   * 
   * @param request - AuthorizeInstanceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AuthorizeInstanceGroupResponse
   */
  async authorizeInstanceGroupWithOptions(request: AuthorizeInstanceGroupRequest, runtime: $Util.RuntimeOptions): Promise<AuthorizeInstanceGroupResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appInstanceGroupId)) {
      body["AppInstanceGroupId"] = request.appInstanceGroupId;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!Util.isUnset(request.authorizeUserIds)) {
      bodyFlat["AuthorizeUserIds"] = request.authorizeUserIds;
    }

    if (!Util.isUnset(request.productType)) {
      body["ProductType"] = request.productType;
    }

    if (!Util.isUnset(request.unAuthorizeUserIds)) {
      bodyFlat["UnAuthorizeUserIds"] = request.unAuthorizeUserIds;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
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

  /**
   * 授权用户
   * 
   * @param request - AuthorizeInstanceGroupRequest
   * @returns AuthorizeInstanceGroupResponse
   */
  async authorizeInstanceGroup(request: AuthorizeInstanceGroupRequest): Promise<AuthorizeInstanceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.authorizeInstanceGroupWithOptions(request, runtime);
  }

  /**
   * 配置会话包
   * 
   * @param request - BuySessionPackageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BuySessionPackageResponse
   */
  async buySessionPackageWithOptions(request: BuySessionPackageRequest, runtime: $Util.RuntimeOptions): Promise<BuySessionPackageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

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

  /**
   * 配置会话包
   * 
   * @param request - BuySessionPackageRequest
   * @returns BuySessionPackageResponse
   */
  async buySessionPackage(request: BuySessionPackageRequest): Promise<BuySessionPackageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.buySessionPackageWithOptions(request, runtime);
  }

  /**
   * 取消Ota升级
   * 
   * @param request - CancelOtaTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelOtaTaskResponse
   */
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

  /**
   * 取消Ota升级
   * 
   * @param request - CancelOtaTaskRequest
   * @returns CancelOtaTaskResponse
   */
  async cancelOtaTask(request: CancelOtaTaskRequest): Promise<CancelOtaTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelOtaTaskWithOptions(request, runtime);
  }

  /**
   * 创建访问页面
   * 
   * @param request - CreateAccessPageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAccessPageResponse
   */
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

  /**
   * 创建访问页面
   * 
   * @param request - CreateAccessPageRequest
   * @returns CreateAccessPageResponse
   */
  async createAccessPage(request: CreateAccessPageRequest): Promise<CreateAccessPageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAccessPageWithOptions(request, runtime);
  }

  /**
   * 创建云应用交付组
   * 
   * @param tmpReq - CreateAppInstanceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAppInstanceGroupResponse
   */
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

    if (!Util.isUnset(tmpReq.userDefinePolicy)) {
      request.userDefinePolicyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userDefinePolicy, "UserDefinePolicy", "json");
    }

    if (!Util.isUnset(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    if (!Util.isUnset(tmpReq.videoPolicy)) {
      request.videoPolicyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.videoPolicy, "VideoPolicy", "json");
    }

    let query = { };
    if (!Util.isUnset(request.userDefinePolicyShrink)) {
      query["UserDefinePolicy"] = request.userDefinePolicyShrink;
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

    if (!Util.isUnset(request.videoPolicyShrink)) {
      body["VideoPolicy"] = request.videoPolicyShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
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

  /**
   * 创建云应用交付组
   * 
   * @param request - CreateAppInstanceGroupRequest
   * @returns CreateAppInstanceGroupResponse
   */
  async createAppInstanceGroup(request: CreateAppInstanceGroupRequest): Promise<CreateAppInstanceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAppInstanceGroupWithOptions(request, runtime);
  }

  /**
   * CreateImageFromAppInstanceGroup
   * 
   * @param request - CreateImageFromAppInstanceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateImageFromAppInstanceGroupResponse
   */
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

  /**
   * CreateImageFromAppInstanceGroup
   * 
   * @param request - CreateImageFromAppInstanceGroupRequest
   * @returns CreateImageFromAppInstanceGroupResponse
   */
  async createImageFromAppInstanceGroup(request: CreateImageFromAppInstanceGroupRequest): Promise<CreateImageFromAppInstanceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createImageFromAppInstanceGroupWithOptions(request, runtime);
  }

  /**
   * 创建项目
   * 
   * @param request - CreateProjectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateProjectResponse
   */
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

  /**
   * 创建项目
   * 
   * @param request - CreateProjectRequest
   * @returns CreateProjectResponse
   */
  async createProject(request: CreateProjectRequest): Promise<CreateProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createProjectWithOptions(request, runtime);
  }

  /**
   * 删除访问页面
   * 
   * @param request - DeleteAccessPageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAccessPageResponse
   */
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

  /**
   * 删除访问页面
   * 
   * @param request - DeleteAccessPageRequest
   * @returns DeleteAccessPageResponse
   */
  async deleteAccessPage(request: DeleteAccessPageRequest): Promise<DeleteAccessPageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAccessPageWithOptions(request, runtime);
  }

  /**
   * 实例组释放接口
   * 
   * @param request - DeleteAppInstanceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAppInstanceGroupResponse
   */
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

  /**
   * 实例组释放接口
   * 
   * @param request - DeleteAppInstanceGroupRequest
   * @returns DeleteAppInstanceGroupResponse
   */
  async deleteAppInstanceGroup(request: DeleteAppInstanceGroupRequest): Promise<DeleteAppInstanceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAppInstanceGroupWithOptions(request, runtime);
  }

  /**
   * 删除实例
   * 
   * @param request - DeleteAppInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAppInstancesResponse
   */
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

  /**
   * 删除实例
   * 
   * @param request - DeleteAppInstancesRequest
   * @returns DeleteAppInstancesResponse
   */
  async deleteAppInstances(request: DeleteAppInstancesRequest): Promise<DeleteAppInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAppInstancesWithOptions(request, runtime);
  }

  /**
   * 删除项目
   * 
   * @param request - DeleteProjectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteProjectResponse
   */
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

  /**
   * 删除项目
   * 
   * @param request - DeleteProjectRequest
   * @returns DeleteProjectResponse
   */
  async deleteProject(request: DeleteProjectRequest): Promise<DeleteProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteProjectWithOptions(request, runtime);
  }

  /**
   * 访客进入访问页面的匿名api
   * 
   * @param request - GetAccessPageSessionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAccessPageSessionResponse
   */
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

  /**
   * 访客进入访问页面的匿名api
   * 
   * @param request - GetAccessPageSessionRequest
   * @returns GetAccessPageSessionResponse
   */
  async getAccessPageSession(request: GetAccessPageSessionRequest): Promise<GetAccessPageSessionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAccessPageSessionWithOptions(request, runtime);
  }

  /**
   * 获取交付组详情
   * 
   * @param request - GetAppInstanceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAppInstanceGroupResponse
   */
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

  /**
   * 获取交付组详情
   * 
   * @param request - GetAppInstanceGroupRequest
   * @returns GetAppInstanceGroupResponse
   */
  async getAppInstanceGroup(request: GetAppInstanceGroupRequest): Promise<GetAppInstanceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAppInstanceGroupWithOptions(request, runtime);
  }

  /**
   * 获取连接ticket，Open API
   * 
   * @param request - GetConnectionTicketRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetConnectionTicketResponse
   */
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

  /**
   * 获取连接ticket，Open API
   * 
   * @param request - GetConnectionTicketRequest
   * @returns GetConnectionTicketResponse
   */
  async getConnectionTicket(request: GetConnectionTicketRequest): Promise<GetConnectionTicketResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getConnectionTicketWithOptions(request, runtime);
  }

  /**
   * GetDebugAppInstance
   * 
   * @param request - GetDebugAppInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDebugAppInstanceResponse
   */
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

  /**
   * GetDebugAppInstance
   * 
   * @param request - GetDebugAppInstanceRequest
   * @returns GetDebugAppInstanceResponse
   */
  async getDebugAppInstance(request: GetDebugAppInstanceRequest): Promise<GetDebugAppInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDebugAppInstanceWithOptions(request, runtime);
  }

  /**
   * 获取ota任务明细
   * 
   * @param request - GetOtaTaskByTaskIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetOtaTaskByTaskIdResponse
   */
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

  /**
   * 获取ota任务明细
   * 
   * @param request - GetOtaTaskByTaskIdRequest
   * @returns GetOtaTaskByTaskIdResponse
   */
  async getOtaTaskByTaskId(request: GetOtaTaskByTaskIdRequest): Promise<GetOtaTaskByTaskIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOtaTaskByTaskIdWithOptions(request, runtime);
  }

  /**
   * 获取策略配置
   * 
   * @param request - GetProjectPoliciesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetProjectPoliciesResponse
   */
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

  /**
   * 获取策略配置
   * 
   * @param request - GetProjectPoliciesRequest
   * @returns GetProjectPoliciesResponse
   */
  async getProjectPolicies(request: GetProjectPoliciesRequest): Promise<GetProjectPoliciesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getProjectPoliciesWithOptions(request, runtime);
  }

  /**
   * 云应用资源询价接口
   * 
   * @param request - GetResourcePriceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetResourcePriceResponse
   */
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

  /**
   * 云应用资源询价接口
   * 
   * @param request - GetResourcePriceRequest
   * @returns GetResourcePriceResponse
   */
  async getResourcePrice(request: GetResourcePriceRequest): Promise<GetResourcePriceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getResourcePriceWithOptions(request, runtime);
  }

  /**
   * 云应用资源询价接口
   * 
   * @param request - GetResourceRenewPriceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetResourceRenewPriceResponse
   */
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

  /**
   * 云应用资源询价接口
   * 
   * @param request - GetResourceRenewPriceRequest
   * @returns GetResourceRenewPriceResponse
   */
  async getResourceRenewPrice(request: GetResourceRenewPriceRequest): Promise<GetResourceRenewPriceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getResourceRenewPriceWithOptions(request, runtime);
  }

  /**
   * 访问页面分页查询
   * 
   * @param request - ListAccessPagesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAccessPagesResponse
   */
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

  /**
   * 访问页面分页查询
   * 
   * @param request - ListAccessPagesRequest
   * @returns ListAccessPagesResponse
   */
  async listAccessPages(request: ListAccessPagesRequest): Promise<ListAccessPagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAccessPagesWithOptions(request, runtime);
  }

  /**
   * 列表展示云应用交付组
   * 
   * @param request - ListAppInstanceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAppInstanceGroupResponse
   */
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

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
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

  /**
   * 列表展示云应用交付组
   * 
   * @param request - ListAppInstanceGroupRequest
   * @returns ListAppInstanceGroupResponse
   */
  async listAppInstanceGroup(request: ListAppInstanceGroupRequest): Promise<ListAppInstanceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAppInstanceGroupWithOptions(request, runtime);
  }

  /**
   * 查询交付组内实例列表
   * 
   * @param request - ListAppInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAppInstancesResponse
   */
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

  /**
   * 查询交付组内实例列表
   * 
   * @param request - ListAppInstancesRequest
   * @returns ListAppInstancesResponse
   */
  async listAppInstances(request: ListAppInstancesRequest): Promise<ListAppInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAppInstancesWithOptions(request, runtime);
  }

  /**
   * 获取资源规格
   * 
   * @param request - ListNodeInstanceTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListNodeInstanceTypeResponse
   */
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

  /**
   * 获取资源规格
   * 
   * @param request - ListNodeInstanceTypeRequest
   * @returns ListNodeInstanceTypeResponse
   */
  async listNodeInstanceType(request: ListNodeInstanceTypeRequest): Promise<ListNodeInstanceTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listNodeInstanceTypeWithOptions(request, runtime);
  }

  /**
   * 升级历史记录
   * 
   * @param request - ListOtaTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListOtaTaskResponse
   */
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

  /**
   * 升级历史记录
   * 
   * @param request - ListOtaTaskRequest
   * @returns ListOtaTaskResponse
   */
  async listOtaTask(request: ListOtaTaskRequest): Promise<ListOtaTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listOtaTaskWithOptions(request, runtime);
  }

  /**
   * 获取项目列表
   * 
   * @param request - ListProjectsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListProjectsResponse
   */
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

  /**
   * 获取项目列表
   * 
   * @param request - ListProjectsRequest
   * @returns ListProjectsResponse
   */
  async listProjects(request: ListProjectsRequest): Promise<ListProjectsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listProjectsWithOptions(request, runtime);
  }

  /**
   * 云应用支持的地域列表
   * 
   * @param request - ListRegionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRegionsResponse
   */
  async listRegionsWithOptions(request: ListRegionsRequest, runtime: $Util.RuntimeOptions): Promise<ListRegionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizSource)) {
      query["BizSource"] = request.bizSource;
    }

    if (!Util.isUnset(request.productType)) {
      query["ProductType"] = request.productType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
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

  /**
   * 云应用支持的地域列表
   * 
   * @param request - ListRegionsRequest
   * @returns ListRegionsResponse
   */
  async listRegions(request: ListRegionsRequest): Promise<ListRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRegionsWithOptions(request, runtime);
  }

  /**
   * 项目的会话包列表
   * 
   * @param request - ListSessionPackagesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSessionPackagesResponse
   */
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

  /**
   * 项目的会话包列表
   * 
   * @param request - ListSessionPackagesRequest
   * @returns ListSessionPackagesResponse
   */
  async listSessionPackages(request: ListSessionPackagesRequest): Promise<ListSessionPackagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSessionPackagesWithOptions(request, runtime);
  }

  /**
   * @param request - ListTenantConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTenantConfigResponse
   */
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

  /**
   * @returns ListTenantConfigResponse
   */
  async listTenantConfig(): Promise<ListTenantConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTenantConfigWithOptions(runtime);
  }

  /**
   * 注销交付下所有会话
   * 
   * @param request - LogOffAllSessionsInAppInstanceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns LogOffAllSessionsInAppInstanceGroupResponse
   */
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

  /**
   * 注销交付下所有会话
   * 
   * @param request - LogOffAllSessionsInAppInstanceGroupRequest
   * @returns LogOffAllSessionsInAppInstanceGroupResponse
   */
  async logOffAllSessionsInAppInstanceGroup(request: LogOffAllSessionsInAppInstanceGroupRequest): Promise<LogOffAllSessionsInAppInstanceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.logOffAllSessionsInAppInstanceGroupWithOptions(request, runtime);
  }

  /**
   * 会话包 迁移/分配
   * 
   * @param request - MigrateSessionPackageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MigrateSessionPackageResponse
   */
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

  /**
   * 会话包 迁移/分配
   * 
   * @param request - MigrateSessionPackageRequest
   * @returns MigrateSessionPackageResponse
   */
  async migrateSessionPackage(request: MigrateSessionPackageRequest): Promise<MigrateSessionPackageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.migrateSessionPackageWithOptions(request, runtime);
  }

  /**
   * 修改云应用交付组
   * 
   * @param tmpReq - ModifyAppInstanceGroupAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAppInstanceGroupAttributeResponse
   */
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

  /**
   * 修改云应用交付组
   * 
   * @param request - ModifyAppInstanceGroupAttributeRequest
   * @returns ModifyAppInstanceGroupAttributeResponse
   */
  async modifyAppInstanceGroupAttribute(request: ModifyAppInstanceGroupAttributeRequest): Promise<ModifyAppInstanceGroupAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyAppInstanceGroupAttributeWithOptions(request, runtime);
  }

  /**
   * 修改策略信息
   * 
   * @param tmpReq - ModifyAppPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAppPolicyResponse
   */
  async modifyAppPolicyWithOptions(tmpReq: ModifyAppPolicyRequest, runtime: $Util.RuntimeOptions): Promise<ModifyAppPolicyResponse> {
    Util.validateModel(tmpReq);
    let request = new ModifyAppPolicyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.videoPolicy)) {
      request.videoPolicyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.videoPolicy, "VideoPolicy", "json");
    }

    let query = { };
    if (!Util.isUnset(request.appPolicyId)) {
      query["AppPolicyId"] = request.appPolicyId;
    }

    if (!Util.isUnset(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!Util.isUnset(request.videoPolicyShrink)) {
      query["VideoPolicy"] = request.videoPolicyShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyAppPolicy",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyAppPolicyResponse>(await this.callApi(params, req, runtime), new ModifyAppPolicyResponse({}));
  }

  /**
   * 修改策略信息
   * 
   * @param request - ModifyAppPolicyRequest
   * @returns ModifyAppPolicyResponse
   */
  async modifyAppPolicy(request: ModifyAppPolicyRequest): Promise<ModifyAppPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyAppPolicyWithOptions(request, runtime);
  }

  /**
   * @param tmpReq - ModifyNodePoolAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyNodePoolAttributeResponse
   */
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

  /**
   * @param request - ModifyNodePoolAttributeRequest
   * @returns ModifyNodePoolAttributeResponse
   */
  async modifyNodePoolAttribute(request: ModifyNodePoolAttributeRequest): Promise<ModifyNodePoolAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyNodePoolAttributeWithOptions(request, runtime);
  }

  /**
   * 修改项目策略
   * 
   * @param request - ModifyProjectPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyProjectPolicyResponse
   */
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

  /**
   * 修改项目策略
   * 
   * @param request - ModifyProjectPolicyRequest
   * @returns ModifyProjectPolicyResponse
   */
  async modifyProjectPolicy(request: ModifyProjectPolicyRequest): Promise<ModifyProjectPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyProjectPolicyWithOptions(request, runtime);
  }

  /**
   * @param request - ModifyTenantConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyTenantConfigResponse
   */
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

  /**
   * @param request - ModifyTenantConfigRequest
   * @returns ModifyTenantConfigResponse
   */
  async modifyTenantConfig(request: ModifyTenantConfigRequest): Promise<ModifyTenantConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyTenantConfigWithOptions(request, runtime);
  }

  /**
   * 获取授权用户列表
   * 
   * @param request - PageListAppInstanceGroupUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PageListAppInstanceGroupUserResponse
   */
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

  /**
   * 获取授权用户列表
   * 
   * @param request - PageListAppInstanceGroupUserRequest
   * @returns PageListAppInstanceGroupUserResponse
   */
  async pageListAppInstanceGroupUser(request: PageListAppInstanceGroupUserRequest): Promise<PageListAppInstanceGroupUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.pageListAppInstanceGroupUserWithOptions(request, runtime);
  }

  /**
   * 刷新访问url
   * 
   * @param request - RefreshAccessUrlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RefreshAccessUrlResponse
   */
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

  /**
   * 刷新访问url
   * 
   * @param request - RefreshAccessUrlRequest
   * @returns RefreshAccessUrlResponse
   */
  async refreshAccessUrl(request: RefreshAccessUrlRequest): Promise<RefreshAccessUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.refreshAccessUrlWithOptions(request, runtime);
  }

  /**
   * 资源续费接口
   * 
   * @param request - RenewAppInstanceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RenewAppInstanceGroupResponse
   */
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

  /**
   * 资源续费接口
   * 
   * @param request - RenewAppInstanceGroupRequest
   * @returns RenewAppInstanceGroupResponse
   */
  async renewAppInstanceGroup(request: RenewAppInstanceGroupRequest): Promise<RenewAppInstanceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.renewAppInstanceGroupWithOptions(request, runtime);
  }

  /**
   * 会话包续费
   * 
   * @param request - RenewSessionPackageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RenewSessionPackageResponse
   */
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

  /**
   * 会话包续费
   * 
   * @param request - RenewSessionPackageRequest
   * @returns RenewSessionPackageResponse
   */
  async renewSessionPackage(request: RenewSessionPackageRequest): Promise<RenewSessionPackageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.renewSessionPackageWithOptions(request, runtime);
  }

  /**
   * 解除用户绑定
   * 
   * @param request - UnbindRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnbindResponse
   */
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

  /**
   * 解除用户绑定
   * 
   * @param request - UnbindRequest
   * @returns UnbindResponse
   */
  async unbind(request: UnbindRequest): Promise<UnbindResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unbindWithOptions(request, runtime);
  }

  /**
   * 更新访问页面状态
   * 
   * @param request - UpdateAccessPageStateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAccessPageStateResponse
   */
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

  /**
   * 更新访问页面状态
   * 
   * @param request - UpdateAccessPageStateRequest
   * @returns UpdateAccessPageStateResponse
   */
  async updateAccessPageState(request: UpdateAccessPageStateRequest): Promise<UpdateAccessPageStateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAccessPageStateWithOptions(request, runtime);
  }

  /**
   * 更新镜像
   * 
   * @param request - UpdateAppInstanceGroupImageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAppInstanceGroupImageResponse
   */
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

  /**
   * 更新镜像
   * 
   * @param request - UpdateAppInstanceGroupImageRequest
   * @returns UpdateAppInstanceGroupImageResponse
   */
  async updateAppInstanceGroupImage(request: UpdateAppInstanceGroupImageRequest): Promise<UpdateAppInstanceGroupImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAppInstanceGroupImageWithOptions(request, runtime);
  }

}
