// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AdaptCreateServiceRequest extends $tea.Model {
  adaptTarget?: AdaptCreateServiceRequestAdaptTarget;
  appVersionId?: string;
  appVersionName?: string;
  requestApp?: string;
  static names(): { [key: string]: string } {
    return {
      adaptTarget: 'AdaptTarget',
      appVersionId: 'AppVersionId',
      appVersionName: 'AppVersionName',
      requestApp: 'RequestApp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adaptTarget: AdaptCreateServiceRequestAdaptTarget,
      appVersionId: 'string',
      appVersionName: 'string',
      requestApp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AdaptCreateServiceShrinkRequest extends $tea.Model {
  adaptTargetShrink?: string;
  appVersionId?: string;
  appVersionName?: string;
  requestApp?: string;
  static names(): { [key: string]: string } {
    return {
      adaptTargetShrink: 'AdaptTarget',
      appVersionId: 'AppVersionId',
      appVersionName: 'AppVersionName',
      requestApp: 'RequestApp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adaptTargetShrink: 'string',
      appVersionId: 'string',
      appVersionName: 'string',
      requestApp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AdaptCreateServiceResponseBody extends $tea.Model {
  code?: string;
  data?: AdaptCreateServiceResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: AdaptCreateServiceResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AdaptCreateServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AdaptCreateServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AdaptCreateServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AdaptGetServiceRequest extends $tea.Model {
  appVersionId?: string;
  requestApp?: string;
  static names(): { [key: string]: string } {
    return {
      appVersionId: 'AppVersionId',
      requestApp: 'RequestApp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appVersionId: 'string',
      requestApp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AdaptGetServiceResponseBody extends $tea.Model {
  code?: string;
  data?: AdaptGetServiceResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: AdaptGetServiceResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AdaptGetServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AdaptGetServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AdaptGetServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppCreateServiceRequest extends $tea.Model {
  appName?: string;
  appType?: string;
  requestApp?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      appType: 'AppType',
      requestApp: 'RequestApp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      appType: 'string',
      requestApp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppCreateServiceResponseBody extends $tea.Model {
  code?: string;
  data?: AppCreateServiceResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: AppCreateServiceResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppCreateServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AppCreateServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AppCreateServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppDeleteServiceRequest extends $tea.Model {
  appId?: string;
  requestApp?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestApp: 'RequestApp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestApp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppDeleteServiceResponseBody extends $tea.Model {
  code?: string;
  data?: AppDeleteServiceResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: AppDeleteServiceResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppDeleteServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AppDeleteServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AppDeleteServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppGetServiceRequest extends $tea.Model {
  appId?: string;
  requestApp?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestApp: 'RequestApp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestApp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppGetServiceResponseBody extends $tea.Model {
  code?: string;
  data?: AppGetServiceResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: AppGetServiceResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppGetServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AppGetServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AppGetServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppListServiceRequest extends $tea.Model {
  keySearch?: string;
  pageNumber?: number;
  pageSize?: number;
  requestApp?: string;
  static names(): { [key: string]: string } {
    return {
      keySearch: 'KeySearch',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestApp: 'RequestApp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keySearch: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestApp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppListServiceResponseBody extends $tea.Model {
  code?: string;
  data?: AppListServiceResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: AppListServiceResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppListServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AppListServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AppListServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppModifyServiceRequest extends $tea.Model {
  appId?: string;
  appName?: string;
  requestApp?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      requestApp: 'RequestApp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      requestApp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppModifyServiceResponseBody extends $tea.Model {
  code?: string;
  data?: AppModifyServiceResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: AppModifyServiceResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppModifyServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AppModifyServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AppModifyServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppVersionCreateServiceRequest extends $tea.Model {
  appId?: string;
  appVersionName?: string;
  fileAddress?: string;
  fileSize?: number;
  fileUploadType?: string;
  requestApp?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appVersionName: 'AppVersionName',
      fileAddress: 'FileAddress',
      fileSize: 'FileSize',
      fileUploadType: 'FileUploadType',
      requestApp: 'RequestApp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appVersionName: 'string',
      fileAddress: 'string',
      fileSize: 'number',
      fileUploadType: 'string',
      requestApp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppVersionCreateServiceResponseBody extends $tea.Model {
  code?: string;
  data?: AppVersionCreateServiceResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: AppVersionCreateServiceResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppVersionCreateServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AppVersionCreateServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AppVersionCreateServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppVersionDeleteServiceRequest extends $tea.Model {
  appVersionId?: string;
  requestApp?: string;
  static names(): { [key: string]: string } {
    return {
      appVersionId: 'AppVersionId',
      requestApp: 'RequestApp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appVersionId: 'string',
      requestApp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppVersionDeleteServiceResponseBody extends $tea.Model {
  code?: string;
  data?: AppVersionDeleteServiceResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: AppVersionDeleteServiceResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppVersionDeleteServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AppVersionDeleteServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AppVersionDeleteServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppVersionGetServiceRequest extends $tea.Model {
  appVersionId?: string;
  requestApp?: string;
  static names(): { [key: string]: string } {
    return {
      appVersionId: 'AppVersionId',
      requestApp: 'RequestApp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appVersionId: 'string',
      requestApp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppVersionGetServiceResponseBody extends $tea.Model {
  code?: string;
  data?: AppVersionGetServiceResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: AppVersionGetServiceResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppVersionGetServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AppVersionGetServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AppVersionGetServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppVersionListServiceRequest extends $tea.Model {
  appId?: string;
  pageNumber?: number;
  pageSize?: number;
  requestApp?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestApp: 'RequestApp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestApp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppVersionListServiceResponseBody extends $tea.Model {
  code?: string;
  data?: AppVersionListServiceResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: AppVersionListServiceResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppVersionListServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AppVersionListServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AppVersionListServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppVersionModifyServiceRequest extends $tea.Model {
  appVersionId?: string;
  appVersionName?: string;
  requestApp?: string;
  static names(): { [key: string]: string } {
    return {
      appVersionId: 'AppVersionId',
      appVersionName: 'AppVersionName',
      requestApp: 'RequestApp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appVersionId: 'string',
      appVersionName: 'string',
      requestApp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppVersionModifyServiceResponseBody extends $tea.Model {
  code?: string;
  data?: AppVersionModifyServiceResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: AppVersionModifyServiceResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppVersionModifyServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AppVersionModifyServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AppVersionModifyServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppVersionQueryServiceRequest extends $tea.Model {
  keySearch?: string;
  pageNumber?: number;
  pageSize?: number;
  requestApp?: string;
  static names(): { [key: string]: string } {
    return {
      keySearch: 'KeySearch',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestApp: 'RequestApp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keySearch: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestApp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppVersionQueryServiceResponseBody extends $tea.Model {
  code?: string;
  data?: AppVersionQueryServiceResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: AppVersionQueryServiceResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppVersionQueryServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AppVersionQueryServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AppVersionQueryServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppliedConsumStatRequest extends $tea.Model {
  appliedId?: string[];
  operatorId?: string;
  operatorType?: string;
  packageType?: string;
  queryEndDate?: string;
  queryStartDate?: string;
  static names(): { [key: string]: string } {
    return {
      appliedId: 'AppliedId',
      operatorId: 'OperatorId',
      operatorType: 'OperatorType',
      packageType: 'PackageType',
      queryEndDate: 'QueryEndDate',
      queryStartDate: 'QueryStartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appliedId: { 'type': 'array', 'itemType': 'string' },
      operatorId: 'string',
      operatorType: 'string',
      packageType: 'string',
      queryEndDate: 'string',
      queryStartDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppliedConsumStatShrinkRequest extends $tea.Model {
  appliedIdShrink?: string;
  operatorId?: string;
  operatorType?: string;
  packageType?: string;
  queryEndDate?: string;
  queryStartDate?: string;
  static names(): { [key: string]: string } {
    return {
      appliedIdShrink: 'AppliedId',
      operatorId: 'OperatorId',
      operatorType: 'OperatorType',
      packageType: 'PackageType',
      queryEndDate: 'QueryEndDate',
      queryStartDate: 'QueryStartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appliedIdShrink: 'string',
      operatorId: 'string',
      operatorType: 'string',
      packageType: 'string',
      queryEndDate: 'string',
      queryStartDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppliedConsumStatResponseBody extends $tea.Model {
  code?: string;
  data?: AppliedConsumStatResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
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
      data: AppliedConsumStatResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppliedConsumStatResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AppliedConsumStatResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AppliedConsumStatResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppliedNearRealStatRequest extends $tea.Model {
  appliedVersionId?: string[];
  operatorId?: string;
  operatorType?: string;
  orderBy?: string;
  packageType?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      appliedVersionId: 'AppliedVersionId',
      operatorId: 'OperatorId',
      operatorType: 'OperatorType',
      orderBy: 'OrderBy',
      packageType: 'PackageType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appliedVersionId: { 'type': 'array', 'itemType': 'string' },
      operatorId: 'string',
      operatorType: 'string',
      orderBy: 'string',
      packageType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppliedNearRealStatShrinkRequest extends $tea.Model {
  appliedVersionIdShrink?: string;
  operatorId?: string;
  operatorType?: string;
  orderBy?: string;
  packageType?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      appliedVersionIdShrink: 'AppliedVersionId',
      operatorId: 'OperatorId',
      operatorType: 'OperatorType',
      orderBy: 'OrderBy',
      packageType: 'PackageType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appliedVersionIdShrink: 'string',
      operatorId: 'string',
      operatorType: 'string',
      orderBy: 'string',
      packageType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppliedNearRealStatResponseBody extends $tea.Model {
  code?: string;
  data?: AppliedNearRealStatResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
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
      data: AppliedNearRealStatResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppliedNearRealStatResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AppliedNearRealStatResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AppliedNearRealStatResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppliedStatRequest extends $tea.Model {
  operatorId?: string;
  operatorType?: string;
  queryEndDate?: string;
  queryStartDate?: string;
  static names(): { [key: string]: string } {
    return {
      operatorId: 'OperatorId',
      operatorType: 'OperatorType',
      queryEndDate: 'QueryEndDate',
      queryStartDate: 'QueryStartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operatorId: 'string',
      operatorType: 'string',
      queryEndDate: 'string',
      queryStartDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppliedStatResponseBody extends $tea.Model {
  code?: string;
  data?: AppliedStatResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
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
      data: AppliedStatResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppliedStatResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AppliedStatResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AppliedStatResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppSessionRequest extends $tea.Model {
  appId?: string;
  appVersion?: string;
  clientIp?: string;
  customSessionId?: string;
  customUserId?: string;
  startParameters?: CreateAppSessionRequestStartParameters[];
  systemInfo?: CreateAppSessionRequestSystemInfo[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appVersion: 'AppVersion',
      clientIp: 'ClientIp',
      customSessionId: 'CustomSessionId',
      customUserId: 'CustomUserId',
      startParameters: 'StartParameters',
      systemInfo: 'SystemInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appVersion: 'string',
      clientIp: 'string',
      customSessionId: 'string',
      customUserId: 'string',
      startParameters: { 'type': 'array', 'itemType': CreateAppSessionRequestStartParameters },
      systemInfo: { 'type': 'array', 'itemType': CreateAppSessionRequestSystemInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppSessionResponseBody extends $tea.Model {
  appId?: string;
  appVersion?: string;
  customSessionId?: string;
  platformSessionId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appVersion: 'AppVersion',
      customSessionId: 'CustomSessionId',
      platformSessionId: 'PlatformSessionId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appVersion: 'string',
      customSessionId: 'string',
      platformSessionId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppSessionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateAppSessionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateAppSessionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppSessionBatchRequest extends $tea.Model {
  appInfos?: CreateAppSessionBatchRequestAppInfos[];
  customTaskId?: string;
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      appInfos: 'AppInfos',
      customTaskId: 'CustomTaskId',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInfos: { 'type': 'array', 'itemType': CreateAppSessionBatchRequestAppInfos },
      customTaskId: 'string',
      timeout: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppSessionBatchShrinkRequest extends $tea.Model {
  appInfosShrink?: string;
  customTaskId?: string;
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      appInfosShrink: 'AppInfos',
      customTaskId: 'CustomTaskId',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInfosShrink: 'string',
      customTaskId: 'string',
      timeout: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppSessionBatchResponseBody extends $tea.Model {
  customTaskId?: string;
  platformTaskId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      customTaskId: 'CustomTaskId',
      platformTaskId: 'PlatformTaskId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customTaskId: 'string',
      platformTaskId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppSessionBatchResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateAppSessionBatchResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateAppSessionBatchResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUploadTaskRequest extends $tea.Model {
  appId?: string;
  appType?: string;
  bucketName?: string;
  env?: string;
  fileAddress?: string;
  fileSize?: number;
  fileType?: string;
  progress?: number;
  region?: string;
  status?: string;
  uploadToolVersion?: string;
  uploadType?: string;
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appType: 'AppType',
      bucketName: 'BucketName',
      env: 'Env',
      fileAddress: 'FileAddress',
      fileSize: 'FileSize',
      fileType: 'FileType',
      progress: 'Progress',
      region: 'Region',
      status: 'Status',
      uploadToolVersion: 'UploadToolVersion',
      uploadType: 'UploadType',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appType: 'string',
      bucketName: 'string',
      env: 'string',
      fileAddress: 'string',
      fileSize: 'number',
      fileType: 'string',
      progress: 'number',
      region: 'string',
      status: 'string',
      uploadToolVersion: 'string',
      uploadType: 'string',
      versionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUploadTaskResponseBody extends $tea.Model {
  code?: string;
  data?: boolean;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUploadTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateUploadTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateUploadTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppListResponseBody extends $tea.Model {
  code?: string;
  data?: GetAppListResponseBodyData[];
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetAppListResponseBodyData },
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAppListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAppListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppSessionRequest extends $tea.Model {
  customSessionId?: string;
  platformSessionId?: string;
  static names(): { [key: string]: string } {
    return {
      customSessionId: 'CustomSessionId',
      platformSessionId: 'PlatformSessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customSessionId: 'string',
      platformSessionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppSessionResponseBody extends $tea.Model {
  appId?: string;
  appVersion?: string;
  customSessionId?: string;
  platformSessionId?: string;
  requestId?: string;
  scheduleInfo?: GetAppSessionResponseBodyScheduleInfo[];
  status?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appVersion: 'AppVersion',
      customSessionId: 'CustomSessionId',
      platformSessionId: 'PlatformSessionId',
      requestId: 'RequestId',
      scheduleInfo: 'ScheduleInfo',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appVersion: 'string',
      customSessionId: 'string',
      platformSessionId: 'string',
      requestId: 'string',
      scheduleInfo: { 'type': 'array', 'itemType': GetAppSessionResponseBodyScheduleInfo },
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppSessionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAppSessionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAppSessionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNeedUploadFileListRequest extends $tea.Model {
  appId?: string;
  env?: string;
  hashList?: string[];
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      env: 'Env',
      hashList: 'HashList',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      env: 'string',
      hashList: { 'type': 'array', 'itemType': 'string' },
      versionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNeedUploadFileListResponseBody extends $tea.Model {
  code?: string;
  data?: GetNeedUploadFileListResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetNeedUploadFileListResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNeedUploadFileListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetNeedUploadFileListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetNeedUploadFileListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOssInfoResponseBody extends $tea.Model {
  code?: string;
  data?: GetOssInfoResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetOssInfoResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOssInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetOssInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetOssInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTenantIdResponseBody extends $tea.Model {
  code?: string;
  data?: number;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTenantIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetTenantIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetTenantIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTokenRequest extends $tea.Model {
  appId?: string;
  bucket?: string;
  env?: string;
  region?: string;
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      bucket: 'Bucket',
      env: 'Env',
      region: 'Region',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      bucket: 'string',
      env: 'string',
      region: 'string',
      versionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTokenResponseBody extends $tea.Model {
  code?: string;
  data?: GetTokenResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetTokenResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTokenResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetTokenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetTokenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUploadToolUrlResponseBody extends $tea.Model {
  code?: string;
  data?: { [key: string]: string };
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUploadToolUrlResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetUploadToolUrlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetUploadToolUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HasActivateResponseBody extends $tea.Model {
  code?: string;
  data?: HasActivateResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
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
      data: HasActivateResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HasActivateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: HasActivateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: HasActivateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppSessionsRequest extends $tea.Model {
  appId?: string;
  customSessionIds?: string[];
  pageNumber?: number;
  pageSize?: number;
  platformSessionIds?: string[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      customSessionIds: 'CustomSessionIds',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      platformSessionIds: 'PlatformSessionIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      customSessionIds: { 'type': 'array', 'itemType': 'string' },
      pageNumber: 'number',
      pageSize: 'number',
      platformSessionIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppSessionsResponseBody extends $tea.Model {
  appSessions?: ListAppSessionsResponseBodyAppSessions[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appSessions: 'AppSessions',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appSessions: { 'type': 'array', 'itemType': ListAppSessionsResponseBodyAppSessions },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppSessionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListAppSessionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListAppSessionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PageQueryResourcePackageListRequest extends $tea.Model {
  operatorId?: string;
  operatorType?: string;
  packageType?: string;
  pageNumber?: number;
  pageSize?: number;
  queryValidType?: string;
  static names(): { [key: string]: string } {
    return {
      operatorId: 'OperatorId',
      operatorType: 'OperatorType',
      packageType: 'PackageType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      queryValidType: 'QueryValidType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operatorId: 'string',
      operatorType: 'string',
      packageType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      queryValidType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PageQueryResourcePackageListResponseBody extends $tea.Model {
  code?: string;
  data?: PageQueryResourcePackageListResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
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
      data: PageQueryResourcePackageListResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PageQueryResourcePackageListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PageQueryResourcePackageListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PageQueryResourcePackageListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAdaptRecordsRequest extends $tea.Model {
  appVersionId?: string;
  requestApp?: string;
  static names(): { [key: string]: string } {
    return {
      appVersionId: 'AppVersionId',
      requestApp: 'RequestApp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appVersionId: 'string',
      requestApp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAdaptRecordsResponseBody extends $tea.Model {
  code?: string;
  data?: QueryAdaptRecordsResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryAdaptRecordsResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAdaptRecordsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryAdaptRecordsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryAdaptRecordsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUploadProgressRequest extends $tea.Model {
  queryUploadProgressRequests?: string;
  static names(): { [key: string]: string } {
    return {
      queryUploadProgressRequests: 'QueryUploadProgressRequests',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queryUploadProgressRequests: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUploadProgressResponseBody extends $tea.Model {
  code?: string;
  data?: QueryUploadProgressResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryUploadProgressResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUploadProgressResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryUploadProgressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryUploadProgressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecordFinishedFileRequest extends $tea.Model {
  appId?: string;
  bucketName?: string;
  env?: string;
  fileFingerprintDTOList?: RecordFinishedFileRequestFileFingerprintDTOList[];
  fileSize?: number;
  fileType?: string;
  region?: string;
  toolVersion?: string;
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      bucketName: 'BucketName',
      env: 'Env',
      fileFingerprintDTOList: 'FileFingerprintDTOList',
      fileSize: 'FileSize',
      fileType: 'FileType',
      region: 'Region',
      toolVersion: 'ToolVersion',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      bucketName: 'string',
      env: 'string',
      fileFingerprintDTOList: { 'type': 'array', 'itemType': RecordFinishedFileRequestFileFingerprintDTOList },
      fileSize: 'number',
      fileType: 'string',
      region: 'string',
      toolVersion: 'string',
      versionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecordFinishedFileResponseBody extends $tea.Model {
  code?: string;
  data?: boolean;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecordFinishedFileResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RecordFinishedFileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RecordFinishedFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReplicateVersionRequest extends $tea.Model {
  appId?: string;
  sourceVersionId?: string;
  targetVersionId?: string;
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      sourceVersionId: 'SourceVersionId',
      targetVersionId: 'TargetVersionId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      sourceVersionId: 'string',
      targetVersionId: 'string',
      tenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReplicateVersionResponseBody extends $tea.Model {
  code?: string;
  data?: ReplicateVersionResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ReplicateVersionResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReplicateVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ReplicateVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ReplicateVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportUploadProgressRequest extends $tea.Model {
  appId?: string;
  env?: string;
  progress?: number;
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      env: 'Env',
      progress: 'Progress',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      env: 'string',
      progress: 'number',
      versionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportUploadProgressResponseBody extends $tea.Model {
  code?: string;
  data?: boolean;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportUploadProgressResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ReportUploadProgressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ReportUploadProgressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportUploadResultRequest extends $tea.Model {
  appId?: string;
  bucketName?: string;
  env?: string;
  fileFingerprintDTOList?: ReportUploadResultRequestFileFingerprintDTOList[];
  fileSize?: number;
  fileType?: string;
  region?: string;
  toolVersion?: string;
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      bucketName: 'BucketName',
      env: 'Env',
      fileFingerprintDTOList: 'FileFingerprintDTOList',
      fileSize: 'FileSize',
      fileType: 'FileType',
      region: 'Region',
      toolVersion: 'ToolVersion',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      bucketName: 'string',
      env: 'string',
      fileFingerprintDTOList: { 'type': 'array', 'itemType': ReportUploadResultRequestFileFingerprintDTOList },
      fileSize: 'number',
      fileType: 'string',
      region: 'string',
      toolVersion: 'string',
      versionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportUploadResultResponseBody extends $tea.Model {
  code?: string;
  data?: boolean;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportUploadResultResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ReportUploadResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ReportUploadResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportUploadStatusRequest extends $tea.Model {
  appId?: string;
  env?: string;
  memo?: string;
  status?: string;
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      env: 'Env',
      memo: 'Memo',
      status: 'Status',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      env: 'string',
      memo: 'string',
      status: 'string',
      versionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportUploadStatusResponseBody extends $tea.Model {
  code?: string;
  data?: boolean;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportUploadStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ReportUploadStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ReportUploadStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopAppSessionRequest extends $tea.Model {
  customSessionId?: string;
  platformSessionId?: string;
  static names(): { [key: string]: string } {
    return {
      customSessionId: 'CustomSessionId',
      platformSessionId: 'PlatformSessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customSessionId: 'string',
      platformSessionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopAppSessionResponseBody extends $tea.Model {
  appId?: string;
  appVersion?: string;
  customSessionId?: string;
  platformSessionId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appVersion: 'AppVersion',
      customSessionId: 'CustomSessionId',
      platformSessionId: 'PlatformSessionId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appVersion: 'string',
      customSessionId: 'string',
      platformSessionId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopAppSessionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StopAppSessionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StopAppSessionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TotalAppliedConsumStatRequest extends $tea.Model {
  operatorId?: string;
  operatorType?: string;
  packageType?: string;
  queryEndDate?: string;
  queryStartDate?: string;
  static names(): { [key: string]: string } {
    return {
      operatorId: 'OperatorId',
      operatorType: 'OperatorType',
      packageType: 'PackageType',
      queryEndDate: 'QueryEndDate',
      queryStartDate: 'QueryStartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operatorId: 'string',
      operatorType: 'string',
      packageType: 'string',
      queryEndDate: 'string',
      queryStartDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TotalAppliedConsumStatResponseBody extends $tea.Model {
  code?: string;
  data?: TotalAppliedConsumStatResponseBodyData[];
  message?: string;
  requestId?: string;
  success?: boolean;
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
      data: { 'type': 'array', 'itemType': TotalAppliedConsumStatResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TotalAppliedConsumStatResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: TotalAppliedConsumStatResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: TotalAppliedConsumStatResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TotalAppliedNearRealStatRequest extends $tea.Model {
  operatorId?: string;
  operatorType?: string;
  orderBy?: string;
  packageType?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      operatorId: 'OperatorId',
      operatorType: 'OperatorType',
      orderBy: 'OrderBy',
      packageType: 'PackageType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operatorId: 'string',
      operatorType: 'string',
      orderBy: 'string',
      packageType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TotalAppliedNearRealStatResponseBody extends $tea.Model {
  code?: string;
  data?: TotalAppliedNearRealStatResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
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
      data: TotalAppliedNearRealStatResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TotalAppliedNearRealStatResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: TotalAppliedNearRealStatResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: TotalAppliedNearRealStatResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TotalQueryResourcePackageRequest extends $tea.Model {
  operatorId?: string;
  operatorType?: string;
  packageType?: string;
  static names(): { [key: string]: string } {
    return {
      operatorId: 'OperatorId',
      operatorType: 'OperatorType',
      packageType: 'PackageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operatorId: 'string',
      operatorType: 'string',
      packageType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TotalQueryResourcePackageResponseBody extends $tea.Model {
  code?: string;
  data?: TotalQueryResourcePackageResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
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
      data: TotalQueryResourcePackageResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TotalQueryResourcePackageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: TotalQueryResourcePackageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: TotalQueryResourcePackageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataAppliedConsumptionMapValue extends $tea.Model {
  appliedId?: string;
  statDate?: string;
  consumptionCu?: number;
  static names(): { [key: string]: string } {
    return {
      appliedId: 'AppliedId',
      statDate: 'StatDate',
      consumptionCu: 'ConsumptionCu',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appliedId: 'string',
      statDate: 'string',
      consumptionCu: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AdaptCreateServiceRequestAdaptTarget extends $tea.Model {
  bitRate?: number;
  frameRate?: number;
  resolution?: string;
  startProgram?: string;
  static names(): { [key: string]: string } {
    return {
      bitRate: 'BitRate',
      frameRate: 'FrameRate',
      resolution: 'Resolution',
      startProgram: 'StartProgram',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitRate: 'number',
      frameRate: 'number',
      resolution: 'string',
      startProgram: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AdaptCreateServiceResponseBodyData extends $tea.Model {
  adaptApplyId?: number;
  static names(): { [key: string]: string } {
    return {
      adaptApplyId: 'AdaptApplyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adaptApplyId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AdaptGetServiceResponseBodyDataAdaptTarget extends $tea.Model {
  bitRate?: number;
  frameRate?: number;
  resolution?: string;
  startProgram?: string;
  static names(): { [key: string]: string } {
    return {
      bitRate: 'BitRate',
      frameRate: 'FrameRate',
      resolution: 'Resolution',
      startProgram: 'StartProgram',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitRate: 'number',
      frameRate: 'number',
      resolution: 'string',
      startProgram: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AdaptGetServiceResponseBodyData extends $tea.Model {
  adaptStatus?: string;
  adaptTarget?: AdaptGetServiceResponseBodyDataAdaptTarget;
  appId?: string;
  appVersionId?: string;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      adaptStatus: 'AdaptStatus',
      adaptTarget: 'AdaptTarget',
      appId: 'AppId',
      appVersionId: 'AppVersionId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adaptStatus: 'string',
      adaptTarget: AdaptGetServiceResponseBodyDataAdaptTarget,
      appId: 'string',
      appVersionId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      tenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppCreateServiceResponseBodyData extends $tea.Model {
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppDeleteServiceResponseBodyData extends $tea.Model {
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppGetServiceResponseBodyData extends $tea.Model {
  appId?: string;
  appName?: string;
  appType?: string;
  bizType?: string;
  gmtCreate?: string;
  gmtModified?: string;
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      appType: 'AppType',
      bizType: 'BizType',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      appType: 'string',
      bizType: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      tenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppListServiceResponseBodyDataApps extends $tea.Model {
  appId?: string;
  appName?: string;
  appType?: string;
  gmtCreate?: string;
  gmtModified?: string;
  tenantId?: number;
  versionAdaptNum?: number;
  versionTotalNum?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      appType: 'AppType',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      tenantId: 'TenantId',
      versionAdaptNum: 'VersionAdaptNum',
      versionTotalNum: 'VersionTotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      appType: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      tenantId: 'number',
      versionAdaptNum: 'number',
      versionTotalNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppListServiceResponseBodyData extends $tea.Model {
  apps?: AppListServiceResponseBodyDataApps[];
  total?: number;
  static names(): { [key: string]: string } {
    return {
      apps: 'Apps',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apps: { 'type': 'array', 'itemType': AppListServiceResponseBodyDataApps },
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppModifyServiceResponseBodyData extends $tea.Model {
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppVersionCreateServiceResponseBodyData extends $tea.Model {
  appVersionId?: string;
  static names(): { [key: string]: string } {
    return {
      appVersionId: 'AppVersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appVersionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppVersionDeleteServiceResponseBodyData extends $tea.Model {
  appVersionId?: string;
  static names(): { [key: string]: string } {
    return {
      appVersionId: 'AppVersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appVersionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppVersionGetServiceResponseBodyData extends $tea.Model {
  appId?: string;
  appVersionId?: string;
  appVersionName?: string;
  appVersionStatus?: string;
  appVersionStatusMemo?: string;
  consumeCu?: number;
  fileAddress?: string;
  fileSize?: number;
  fileUploadFinishTime?: string;
  fileUploadType?: string;
  gmtCreate?: string;
  gmtModified?: string;
  sourceVersionId?: string;
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appVersionId: 'AppVersionId',
      appVersionName: 'AppVersionName',
      appVersionStatus: 'AppVersionStatus',
      appVersionStatusMemo: 'AppVersionStatusMemo',
      consumeCu: 'ConsumeCu',
      fileAddress: 'FileAddress',
      fileSize: 'FileSize',
      fileUploadFinishTime: 'FileUploadFinishTime',
      fileUploadType: 'FileUploadType',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      sourceVersionId: 'SourceVersionId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appVersionId: 'string',
      appVersionName: 'string',
      appVersionStatus: 'string',
      appVersionStatusMemo: 'string',
      consumeCu: 'number',
      fileAddress: 'string',
      fileSize: 'number',
      fileUploadFinishTime: 'string',
      fileUploadType: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      sourceVersionId: 'string',
      tenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppVersionListServiceResponseBodyDataVersions extends $tea.Model {
  appId?: string;
  appVersionId?: string;
  appVersionName?: string;
  appVersionStatus?: string;
  appVersionStatusMemo?: string;
  consumeCu?: number;
  fileAddress?: string;
  fileSize?: number;
  fileUploadFinishTime?: string;
  fileUploadType?: string;
  gmtCreate?: string;
  gmtModified?: string;
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appVersionId: 'AppVersionId',
      appVersionName: 'AppVersionName',
      appVersionStatus: 'AppVersionStatus',
      appVersionStatusMemo: 'AppVersionStatusMemo',
      consumeCu: 'ConsumeCu',
      fileAddress: 'FileAddress',
      fileSize: 'FileSize',
      fileUploadFinishTime: 'FileUploadFinishTime',
      fileUploadType: 'FileUploadType',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appVersionId: 'string',
      appVersionName: 'string',
      appVersionStatus: 'string',
      appVersionStatusMemo: 'string',
      consumeCu: 'number',
      fileAddress: 'string',
      fileSize: 'number',
      fileUploadFinishTime: 'string',
      fileUploadType: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      tenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppVersionListServiceResponseBodyData extends $tea.Model {
  total?: number;
  versions?: AppVersionListServiceResponseBodyDataVersions[];
  static names(): { [key: string]: string } {
    return {
      total: 'Total',
      versions: 'Versions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      total: 'number',
      versions: { 'type': 'array', 'itemType': AppVersionListServiceResponseBodyDataVersions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppVersionModifyServiceResponseBodyData extends $tea.Model {
  appVersionId?: string;
  static names(): { [key: string]: string } {
    return {
      appVersionId: 'AppVersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appVersionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppVersionQueryServiceResponseBodyDataVersions extends $tea.Model {
  appId?: string;
  appName?: string;
  appVersionId?: string;
  appVersionName?: string;
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      appVersionId: 'AppVersionId',
      appVersionName: 'AppVersionName',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      appVersionId: 'string',
      appVersionName: 'string',
      tenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppVersionQueryServiceResponseBodyData extends $tea.Model {
  total?: number;
  versions?: AppVersionQueryServiceResponseBodyDataVersions[];
  static names(): { [key: string]: string } {
    return {
      total: 'Total',
      versions: 'Versions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      total: 'number',
      versions: { 'type': 'array', 'itemType': AppVersionQueryServiceResponseBodyDataVersions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppliedConsumStatResponseBodyData extends $tea.Model {
  appliedConsumptionMap?: { [key: string]: DataAppliedConsumptionMapValue[] };
  static names(): { [key: string]: string } {
    return {
      appliedConsumptionMap: 'AppliedConsumptionMap',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appliedConsumptionMap: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': DataAppliedConsumptionMapValue } },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppliedNearRealStatResponseBodyDataRecords extends $tea.Model {
  appliedId?: string;
  appliedName?: string;
  appliedVersionId?: string;
  appliedVersionName?: string;
  concurrency?: number;
  consumptionCu?: number;
  static names(): { [key: string]: string } {
    return {
      appliedId: 'AppliedId',
      appliedName: 'AppliedName',
      appliedVersionId: 'AppliedVersionId',
      appliedVersionName: 'AppliedVersionName',
      concurrency: 'Concurrency',
      consumptionCu: 'ConsumptionCu',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appliedId: 'string',
      appliedName: 'string',
      appliedVersionId: 'string',
      appliedVersionName: 'string',
      concurrency: 'number',
      consumptionCu: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppliedNearRealStatResponseBodyData extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  pages?: number;
  records?: AppliedNearRealStatResponseBodyDataRecords[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      pages: 'Pages',
      records: 'Records',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      pages: 'number',
      records: { 'type': 'array', 'itemType': AppliedNearRealStatResponseBodyDataRecords },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppliedStatResponseBodyData extends $tea.Model {
  activeApplications?: number;
  averageDailyRuntime?: number;
  peakConcurrency?: number;
  secondaryAverageTime?: number;
  static names(): { [key: string]: string } {
    return {
      activeApplications: 'ActiveApplications',
      averageDailyRuntime: 'AverageDailyRuntime',
      peakConcurrency: 'PeakConcurrency',
      secondaryAverageTime: 'SecondaryAverageTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeApplications: 'number',
      averageDailyRuntime: 'number',
      peakConcurrency: 'number',
      secondaryAverageTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppSessionRequestStartParameters extends $tea.Model {
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

export class CreateAppSessionRequestSystemInfo extends $tea.Model {
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

export class CreateAppSessionBatchRequestAppInfosStartParameters extends $tea.Model {
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

export class CreateAppSessionBatchRequestAppInfosSystemInfo extends $tea.Model {
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

export class CreateAppSessionBatchRequestAppInfos extends $tea.Model {
  appId?: string;
  appVersion?: string;
  clientIp?: string;
  customUserId?: string;
  customerSessionId?: string;
  startParameters?: CreateAppSessionBatchRequestAppInfosStartParameters[];
  systemInfo?: CreateAppSessionBatchRequestAppInfosSystemInfo[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appVersion: 'AppVersion',
      clientIp: 'ClientIp',
      customUserId: 'CustomUserId',
      customerSessionId: 'CustomerSessionId',
      startParameters: 'StartParameters',
      systemInfo: 'SystemInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appVersion: 'string',
      clientIp: 'string',
      customUserId: 'string',
      customerSessionId: 'string',
      startParameters: { 'type': 'array', 'itemType': CreateAppSessionBatchRequestAppInfosStartParameters },
      systemInfo: { 'type': 'array', 'itemType': CreateAppSessionBatchRequestAppInfosSystemInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppListResponseBodyData extends $tea.Model {
  appId?: string;
  appName?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppSessionResponseBodyScheduleInfo extends $tea.Model {
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

export class GetNeedUploadFileListResponseBodyData extends $tea.Model {
  err?: string;
  needUploadFileList?: string[];
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      err: 'Err',
      needUploadFileList: 'NeedUploadFileList',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      err: 'string',
      needUploadFileList: { 'type': 'array', 'itemType': 'string' },
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOssInfoResponseBodyData extends $tea.Model {
  first?: string;
  second?: string;
  static names(): { [key: string]: string } {
    return {
      first: 'First',
      second: 'Second',
    };
  }

  static types(): { [key: string]: any } {
    return {
      first: 'string',
      second: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTokenResponseBodyData extends $tea.Model {
  accessKeyId?: string;
  accessKeySecret?: string;
  endpoint?: string;
  expiration?: string;
  internalEndpoint?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
      accessKeySecret: 'AccessKeySecret',
      endpoint: 'Endpoint',
      expiration: 'Expiration',
      internalEndpoint: 'InternalEndpoint',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      accessKeySecret: 'string',
      endpoint: 'string',
      expiration: 'string',
      internalEndpoint: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HasActivateResponseBodyData extends $tea.Model {
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppSessionsResponseBodyAppSessions extends $tea.Model {
  appId?: string;
  appVersion?: string;
  customSessionId?: string;
  platformSessionId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appVersion: 'AppVersion',
      customSessionId: 'CustomSessionId',
      platformSessionId: 'PlatformSessionId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appVersion: 'string',
      customSessionId: 'string',
      platformSessionId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PageQueryResourcePackageListResponseBodyDataRecords extends $tea.Model {
  currentAmount?: number;
  gmtValidBegin?: string;
  gmtValidEnd?: string;
  initAmount?: number;
  packageInstanceId?: string;
  packageType?: string;
  static names(): { [key: string]: string } {
    return {
      currentAmount: 'CurrentAmount',
      gmtValidBegin: 'GmtValidBegin',
      gmtValidEnd: 'GmtValidEnd',
      initAmount: 'InitAmount',
      packageInstanceId: 'PackageInstanceId',
      packageType: 'PackageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentAmount: 'number',
      gmtValidBegin: 'string',
      gmtValidEnd: 'string',
      initAmount: 'number',
      packageInstanceId: 'string',
      packageType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PageQueryResourcePackageListResponseBodyData extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  pages?: number;
  records?: PageQueryResourcePackageListResponseBodyDataRecords[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      pages: 'Pages',
      records: 'Records',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      pages: 'number',
      records: { 'type': 'array', 'itemType': PageQueryResourcePackageListResponseBodyDataRecords },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAdaptRecordsResponseBodyDataAdaptRecordsAdaptTarget extends $tea.Model {
  bitRate?: number;
  frameRate?: number;
  resolution?: string;
  startProgram?: string;
  static names(): { [key: string]: string } {
    return {
      bitRate: 'BitRate',
      frameRate: 'FrameRate',
      resolution: 'Resolution',
      startProgram: 'StartProgram',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitRate: 'number',
      frameRate: 'number',
      resolution: 'string',
      startProgram: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAdaptRecordsResponseBodyDataAdaptRecordsCalculationEvaluationInfoCpu extends $tea.Model {
  average?: number;
  maximum?: number;
  minimum?: number;
  numberOfCores?: number;
  quantile80?: number;
  static names(): { [key: string]: string } {
    return {
      average: 'Average',
      maximum: 'Maximum',
      minimum: 'Minimum',
      numberOfCores: 'NumberOfCores',
      quantile80: 'Quantile80',
    };
  }

  static types(): { [key: string]: any } {
    return {
      average: 'number',
      maximum: 'number',
      minimum: 'number',
      numberOfCores: 'number',
      quantile80: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAdaptRecordsResponseBodyDataAdaptRecordsCalculationEvaluationInfoGpuGpuUsedutilization extends $tea.Model {
  average?: number;
  maximum?: number;
  minimum?: number;
  numberOfCores?: number;
  quantile80?: number;
  static names(): { [key: string]: string } {
    return {
      average: 'Average',
      maximum: 'Maximum',
      minimum: 'Minimum',
      numberOfCores: 'NumberOfCores',
      quantile80: 'Quantile80',
    };
  }

  static types(): { [key: string]: any } {
    return {
      average: 'number',
      maximum: 'number',
      minimum: 'number',
      numberOfCores: 'number',
      quantile80: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAdaptRecordsResponseBodyDataAdaptRecordsCalculationEvaluationInfoGpuMemUsedutilization extends $tea.Model {
  average?: number;
  maximum?: number;
  minimum?: number;
  quantile80?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      average: 'Average',
      maximum: 'Maximum',
      minimum: 'Minimum',
      quantile80: 'Quantile80',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      average: 'number',
      maximum: 'number',
      minimum: 'number',
      quantile80: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAdaptRecordsResponseBodyDataAdaptRecordsCalculationEvaluationInfoGpu extends $tea.Model {
  gpuUsedutilization?: QueryAdaptRecordsResponseBodyDataAdaptRecordsCalculationEvaluationInfoGpuGpuUsedutilization;
  memUsedutilization?: QueryAdaptRecordsResponseBodyDataAdaptRecordsCalculationEvaluationInfoGpuMemUsedutilization;
  static names(): { [key: string]: string } {
    return {
      gpuUsedutilization: 'GpuUsedutilization',
      memUsedutilization: 'MemUsedutilization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gpuUsedutilization: QueryAdaptRecordsResponseBodyDataAdaptRecordsCalculationEvaluationInfoGpuGpuUsedutilization,
      memUsedutilization: QueryAdaptRecordsResponseBodyDataAdaptRecordsCalculationEvaluationInfoGpuMemUsedutilization,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAdaptRecordsResponseBodyDataAdaptRecordsCalculationEvaluationInfoMem extends $tea.Model {
  average?: number;
  maximum?: number;
  minimum?: number;
  quantile80?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      average: 'Average',
      maximum: 'Maximum',
      minimum: 'Minimum',
      quantile80: 'Quantile80',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      average: 'number',
      maximum: 'number',
      minimum: 'number',
      quantile80: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAdaptRecordsResponseBodyDataAdaptRecordsCalculationEvaluationInfo extends $tea.Model {
  cpu?: QueryAdaptRecordsResponseBodyDataAdaptRecordsCalculationEvaluationInfoCpu;
  gpu?: QueryAdaptRecordsResponseBodyDataAdaptRecordsCalculationEvaluationInfoGpu;
  mem?: QueryAdaptRecordsResponseBodyDataAdaptRecordsCalculationEvaluationInfoMem;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      gpu: 'Gpu',
      mem: 'Mem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: QueryAdaptRecordsResponseBodyDataAdaptRecordsCalculationEvaluationInfoCpu,
      gpu: QueryAdaptRecordsResponseBodyDataAdaptRecordsCalculationEvaluationInfoGpu,
      mem: QueryAdaptRecordsResponseBodyDataAdaptRecordsCalculationEvaluationInfoMem,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAdaptRecordsResponseBodyDataAdaptRecordsServerInfo extends $tea.Model {
  cpuType?: string;
  gpuType?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      cpuType: 'CpuType',
      gpuType: 'GpuType',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuType: 'string',
      gpuType: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAdaptRecordsResponseBodyDataAdaptRecords extends $tea.Model {
  adaptApplyId?: number;
  adaptRecordId?: number;
  adaptStatus?: string;
  adaptTarget?: QueryAdaptRecordsResponseBodyDataAdaptRecordsAdaptTarget;
  appId?: string;
  appVersionId?: string;
  calculationEvaluationInfo?: QueryAdaptRecordsResponseBodyDataAdaptRecordsCalculationEvaluationInfo;
  consumeCu?: number;
  containerType?: string;
  fileDownloadPath?: string;
  gmtCreate?: string;
  gmtModified?: string;
  imageType?: string;
  isMustSelect?: boolean;
  isv?: string;
  maxConcurrency?: number;
  memo?: string;
  priority?: number;
  serverInfo?: QueryAdaptRecordsResponseBodyDataAdaptRecordsServerInfo;
  tenantId?: number;
  vmType?: string;
  static names(): { [key: string]: string } {
    return {
      adaptApplyId: 'AdaptApplyId',
      adaptRecordId: 'AdaptRecordId',
      adaptStatus: 'AdaptStatus',
      adaptTarget: 'AdaptTarget',
      appId: 'AppId',
      appVersionId: 'AppVersionId',
      calculationEvaluationInfo: 'CalculationEvaluationInfo',
      consumeCu: 'ConsumeCu',
      containerType: 'ContainerType',
      fileDownloadPath: 'FileDownloadPath',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      imageType: 'ImageType',
      isMustSelect: 'IsMustSelect',
      isv: 'Isv',
      maxConcurrency: 'MaxConcurrency',
      memo: 'Memo',
      priority: 'Priority',
      serverInfo: 'ServerInfo',
      tenantId: 'TenantId',
      vmType: 'VmType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adaptApplyId: 'number',
      adaptRecordId: 'number',
      adaptStatus: 'string',
      adaptTarget: QueryAdaptRecordsResponseBodyDataAdaptRecordsAdaptTarget,
      appId: 'string',
      appVersionId: 'string',
      calculationEvaluationInfo: QueryAdaptRecordsResponseBodyDataAdaptRecordsCalculationEvaluationInfo,
      consumeCu: 'number',
      containerType: 'string',
      fileDownloadPath: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      imageType: 'string',
      isMustSelect: 'boolean',
      isv: 'string',
      maxConcurrency: 'number',
      memo: 'string',
      priority: 'number',
      serverInfo: QueryAdaptRecordsResponseBodyDataAdaptRecordsServerInfo,
      tenantId: 'number',
      vmType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAdaptRecordsResponseBodyData extends $tea.Model {
  adaptApplyId?: number;
  adaptRecords?: QueryAdaptRecordsResponseBodyDataAdaptRecords[];
  appId?: string;
  appName?: string;
  appType?: string;
  appVersionId?: string;
  appVersionName?: string;
  appVersionServiceype?: string;
  tenantId?: number;
  tenantName?: string;
  static names(): { [key: string]: string } {
    return {
      adaptApplyId: 'AdaptApplyId',
      adaptRecords: 'AdaptRecords',
      appId: 'AppId',
      appName: 'AppName',
      appType: 'AppType',
      appVersionId: 'AppVersionId',
      appVersionName: 'AppVersionName',
      appVersionServiceype: 'AppVersionServiceype',
      tenantId: 'TenantId',
      tenantName: 'TenantName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adaptApplyId: 'number',
      adaptRecords: { 'type': 'array', 'itemType': QueryAdaptRecordsResponseBodyDataAdaptRecords },
      appId: 'string',
      appName: 'string',
      appType: 'string',
      appVersionId: 'string',
      appVersionName: 'string',
      appVersionServiceype: 'string',
      tenantId: 'number',
      tenantName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUploadProgressResponseBodyDataContentVersions extends $tea.Model {
  appId?: string;
  progress?: number;
  tenantId?: number;
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      progress: 'Progress',
      tenantId: 'TenantId',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      progress: 'number',
      tenantId: 'number',
      versionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUploadProgressResponseBodyDataContent extends $tea.Model {
  versions?: QueryUploadProgressResponseBodyDataContentVersions[];
  static names(): { [key: string]: string } {
    return {
      versions: 'Versions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      versions: { 'type': 'array', 'itemType': QueryUploadProgressResponseBodyDataContentVersions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUploadProgressResponseBodyData extends $tea.Model {
  code?: string;
  content?: QueryUploadProgressResponseBodyDataContent;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      content: 'Content',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      content: QueryUploadProgressResponseBodyDataContent,
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecordFinishedFileRequestFileFingerprintDTOList extends $tea.Model {
  fileHash?: string;
  fileSize?: number;
  static names(): { [key: string]: string } {
    return {
      fileHash: 'FileHash',
      fileSize: 'FileSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileHash: 'string',
      fileSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReplicateVersionResponseBodyData extends $tea.Model {
  code?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportUploadResultRequestFileFingerprintDTOList extends $tea.Model {
  fileHash?: string;
  fileSize?: number;
  static names(): { [key: string]: string } {
    return {
      fileHash: 'FileHash',
      fileSize: 'FileSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileHash: 'string',
      fileSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TotalAppliedConsumStatResponseBodyData extends $tea.Model {
  appliedId?: string;
  consumptionCu?: number;
  statDate?: string;
  static names(): { [key: string]: string } {
    return {
      appliedId: 'AppliedId',
      consumptionCu: 'ConsumptionCu',
      statDate: 'StatDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appliedId: 'string',
      consumptionCu: 'number',
      statDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TotalAppliedNearRealStatResponseBodyData extends $tea.Model {
  totalConcurrency?: number;
  totalConsumptionCu?: number;
  static names(): { [key: string]: string } {
    return {
      totalConcurrency: 'TotalConcurrency',
      totalConsumptionCu: 'TotalConsumptionCu',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalConcurrency: 'number',
      totalConsumptionCu: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TotalQueryResourcePackageResponseBodyData extends $tea.Model {
  tenantUid?: string;
  totalAmount?: number;
  totalDate?: string;
  static names(): { [key: string]: string } {
    return {
      tenantUid: 'TenantUid',
      totalAmount: 'TotalAmount',
      totalDate: 'TotalDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantUid: 'string',
      totalAmount: 'number',
      totalDate: 'string',
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
    this._endpoint = this.getEndpoint("cgcs", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async adaptCreateServiceWithOptions(tmpReq: AdaptCreateServiceRequest, runtime: $Util.RuntimeOptions): Promise<AdaptCreateServiceResponse> {
    Util.validateModel(tmpReq);
    let request = new AdaptCreateServiceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.adaptTarget))) {
      request.adaptTargetShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.adaptTarget), "AdaptTarget", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.adaptTargetShrink)) {
      body["AdaptTarget"] = request.adaptTargetShrink;
    }

    if (!Util.isUnset(request.appVersionId)) {
      body["AppVersionId"] = request.appVersionId;
    }

    if (!Util.isUnset(request.appVersionName)) {
      body["AppVersionName"] = request.appVersionName;
    }

    if (!Util.isUnset(request.requestApp)) {
      body["RequestApp"] = request.requestApp;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AdaptCreateService",
      version: "2021-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AdaptCreateServiceResponse>(await this.callApi(params, req, runtime), new AdaptCreateServiceResponse({}));
  }

  async adaptCreateService(request: AdaptCreateServiceRequest): Promise<AdaptCreateServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.adaptCreateServiceWithOptions(request, runtime);
  }

  async adaptGetServiceWithOptions(request: AdaptGetServiceRequest, runtime: $Util.RuntimeOptions): Promise<AdaptGetServiceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appVersionId)) {
      body["AppVersionId"] = request.appVersionId;
    }

    if (!Util.isUnset(request.requestApp)) {
      body["RequestApp"] = request.requestApp;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AdaptGetService",
      version: "2021-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AdaptGetServiceResponse>(await this.callApi(params, req, runtime), new AdaptGetServiceResponse({}));
  }

  async adaptGetService(request: AdaptGetServiceRequest): Promise<AdaptGetServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.adaptGetServiceWithOptions(request, runtime);
  }

  async appCreateServiceWithOptions(request: AppCreateServiceRequest, runtime: $Util.RuntimeOptions): Promise<AppCreateServiceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appName)) {
      body["AppName"] = request.appName;
    }

    if (!Util.isUnset(request.appType)) {
      body["AppType"] = request.appType;
    }

    if (!Util.isUnset(request.requestApp)) {
      body["RequestApp"] = request.requestApp;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AppCreateService",
      version: "2021-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AppCreateServiceResponse>(await this.callApi(params, req, runtime), new AppCreateServiceResponse({}));
  }

  async appCreateService(request: AppCreateServiceRequest): Promise<AppCreateServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.appCreateServiceWithOptions(request, runtime);
  }

  async appDeleteServiceWithOptions(request: AppDeleteServiceRequest, runtime: $Util.RuntimeOptions): Promise<AppDeleteServiceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.requestApp)) {
      body["RequestApp"] = request.requestApp;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AppDeleteService",
      version: "2021-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AppDeleteServiceResponse>(await this.callApi(params, req, runtime), new AppDeleteServiceResponse({}));
  }

  async appDeleteService(request: AppDeleteServiceRequest): Promise<AppDeleteServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.appDeleteServiceWithOptions(request, runtime);
  }

  async appGetServiceWithOptions(request: AppGetServiceRequest, runtime: $Util.RuntimeOptions): Promise<AppGetServiceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.requestApp)) {
      body["RequestApp"] = request.requestApp;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AppGetService",
      version: "2021-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AppGetServiceResponse>(await this.callApi(params, req, runtime), new AppGetServiceResponse({}));
  }

  async appGetService(request: AppGetServiceRequest): Promise<AppGetServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.appGetServiceWithOptions(request, runtime);
  }

  async appListServiceWithOptions(request: AppListServiceRequest, runtime: $Util.RuntimeOptions): Promise<AppListServiceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.keySearch)) {
      body["KeySearch"] = request.keySearch;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.requestApp)) {
      body["RequestApp"] = request.requestApp;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AppListService",
      version: "2021-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AppListServiceResponse>(await this.callApi(params, req, runtime), new AppListServiceResponse({}));
  }

  async appListService(request: AppListServiceRequest): Promise<AppListServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.appListServiceWithOptions(request, runtime);
  }

  async appModifyServiceWithOptions(request: AppModifyServiceRequest, runtime: $Util.RuntimeOptions): Promise<AppModifyServiceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.appName)) {
      body["AppName"] = request.appName;
    }

    if (!Util.isUnset(request.requestApp)) {
      body["RequestApp"] = request.requestApp;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AppModifyService",
      version: "2021-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AppModifyServiceResponse>(await this.callApi(params, req, runtime), new AppModifyServiceResponse({}));
  }

  async appModifyService(request: AppModifyServiceRequest): Promise<AppModifyServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.appModifyServiceWithOptions(request, runtime);
  }

  async appVersionCreateServiceWithOptions(request: AppVersionCreateServiceRequest, runtime: $Util.RuntimeOptions): Promise<AppVersionCreateServiceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.appVersionName)) {
      body["AppVersionName"] = request.appVersionName;
    }

    if (!Util.isUnset(request.fileAddress)) {
      body["FileAddress"] = request.fileAddress;
    }

    if (!Util.isUnset(request.fileSize)) {
      body["FileSize"] = request.fileSize;
    }

    if (!Util.isUnset(request.fileUploadType)) {
      body["FileUploadType"] = request.fileUploadType;
    }

    if (!Util.isUnset(request.requestApp)) {
      body["RequestApp"] = request.requestApp;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AppVersionCreateService",
      version: "2021-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AppVersionCreateServiceResponse>(await this.callApi(params, req, runtime), new AppVersionCreateServiceResponse({}));
  }

  async appVersionCreateService(request: AppVersionCreateServiceRequest): Promise<AppVersionCreateServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.appVersionCreateServiceWithOptions(request, runtime);
  }

  async appVersionDeleteServiceWithOptions(request: AppVersionDeleteServiceRequest, runtime: $Util.RuntimeOptions): Promise<AppVersionDeleteServiceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appVersionId)) {
      body["AppVersionId"] = request.appVersionId;
    }

    if (!Util.isUnset(request.requestApp)) {
      body["RequestApp"] = request.requestApp;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AppVersionDeleteService",
      version: "2021-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AppVersionDeleteServiceResponse>(await this.callApi(params, req, runtime), new AppVersionDeleteServiceResponse({}));
  }

  async appVersionDeleteService(request: AppVersionDeleteServiceRequest): Promise<AppVersionDeleteServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.appVersionDeleteServiceWithOptions(request, runtime);
  }

  async appVersionGetServiceWithOptions(request: AppVersionGetServiceRequest, runtime: $Util.RuntimeOptions): Promise<AppVersionGetServiceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appVersionId)) {
      body["AppVersionId"] = request.appVersionId;
    }

    if (!Util.isUnset(request.requestApp)) {
      body["RequestApp"] = request.requestApp;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AppVersionGetService",
      version: "2021-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AppVersionGetServiceResponse>(await this.callApi(params, req, runtime), new AppVersionGetServiceResponse({}));
  }

  async appVersionGetService(request: AppVersionGetServiceRequest): Promise<AppVersionGetServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.appVersionGetServiceWithOptions(request, runtime);
  }

  async appVersionListServiceWithOptions(request: AppVersionListServiceRequest, runtime: $Util.RuntimeOptions): Promise<AppVersionListServiceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.requestApp)) {
      body["RequestApp"] = request.requestApp;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AppVersionListService",
      version: "2021-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AppVersionListServiceResponse>(await this.callApi(params, req, runtime), new AppVersionListServiceResponse({}));
  }

  async appVersionListService(request: AppVersionListServiceRequest): Promise<AppVersionListServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.appVersionListServiceWithOptions(request, runtime);
  }

  async appVersionModifyServiceWithOptions(request: AppVersionModifyServiceRequest, runtime: $Util.RuntimeOptions): Promise<AppVersionModifyServiceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appVersionId)) {
      body["AppVersionId"] = request.appVersionId;
    }

    if (!Util.isUnset(request.appVersionName)) {
      body["AppVersionName"] = request.appVersionName;
    }

    if (!Util.isUnset(request.requestApp)) {
      body["RequestApp"] = request.requestApp;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AppVersionModifyService",
      version: "2021-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AppVersionModifyServiceResponse>(await this.callApi(params, req, runtime), new AppVersionModifyServiceResponse({}));
  }

  async appVersionModifyService(request: AppVersionModifyServiceRequest): Promise<AppVersionModifyServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.appVersionModifyServiceWithOptions(request, runtime);
  }

  async appVersionQueryServiceWithOptions(request: AppVersionQueryServiceRequest, runtime: $Util.RuntimeOptions): Promise<AppVersionQueryServiceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.keySearch)) {
      body["KeySearch"] = request.keySearch;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.requestApp)) {
      body["RequestApp"] = request.requestApp;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AppVersionQueryService",
      version: "2021-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AppVersionQueryServiceResponse>(await this.callApi(params, req, runtime), new AppVersionQueryServiceResponse({}));
  }

  async appVersionQueryService(request: AppVersionQueryServiceRequest): Promise<AppVersionQueryServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.appVersionQueryServiceWithOptions(request, runtime);
  }

  async appliedConsumStatWithOptions(tmpReq: AppliedConsumStatRequest, runtime: $Util.RuntimeOptions): Promise<AppliedConsumStatResponse> {
    Util.validateModel(tmpReq);
    let request = new AppliedConsumStatShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.appliedId)) {
      request.appliedIdShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.appliedId, "AppliedId", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appliedIdShrink)) {
      body["AppliedId"] = request.appliedIdShrink;
    }

    if (!Util.isUnset(request.operatorId)) {
      body["OperatorId"] = request.operatorId;
    }

    if (!Util.isUnset(request.operatorType)) {
      body["OperatorType"] = request.operatorType;
    }

    if (!Util.isUnset(request.packageType)) {
      body["PackageType"] = request.packageType;
    }

    if (!Util.isUnset(request.queryEndDate)) {
      body["QueryEndDate"] = request.queryEndDate;
    }

    if (!Util.isUnset(request.queryStartDate)) {
      body["QueryStartDate"] = request.queryStartDate;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AppliedConsumStat",
      version: "2021-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AppliedConsumStatResponse>(await this.callApi(params, req, runtime), new AppliedConsumStatResponse({}));
  }

  async appliedConsumStat(request: AppliedConsumStatRequest): Promise<AppliedConsumStatResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.appliedConsumStatWithOptions(request, runtime);
  }

  async appliedNearRealStatWithOptions(tmpReq: AppliedNearRealStatRequest, runtime: $Util.RuntimeOptions): Promise<AppliedNearRealStatResponse> {
    Util.validateModel(tmpReq);
    let request = new AppliedNearRealStatShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.appliedVersionId)) {
      request.appliedVersionIdShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.appliedVersionId, "AppliedVersionId", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appliedVersionIdShrink)) {
      body["AppliedVersionId"] = request.appliedVersionIdShrink;
    }

    if (!Util.isUnset(request.operatorId)) {
      body["OperatorId"] = request.operatorId;
    }

    if (!Util.isUnset(request.operatorType)) {
      body["OperatorType"] = request.operatorType;
    }

    if (!Util.isUnset(request.orderBy)) {
      body["OrderBy"] = request.orderBy;
    }

    if (!Util.isUnset(request.packageType)) {
      body["PackageType"] = request.packageType;
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
      action: "AppliedNearRealStat",
      version: "2021-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AppliedNearRealStatResponse>(await this.callApi(params, req, runtime), new AppliedNearRealStatResponse({}));
  }

  async appliedNearRealStat(request: AppliedNearRealStatRequest): Promise<AppliedNearRealStatResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.appliedNearRealStatWithOptions(request, runtime);
  }

  async appliedStatWithOptions(request: AppliedStatRequest, runtime: $Util.RuntimeOptions): Promise<AppliedStatResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.operatorId)) {
      body["OperatorId"] = request.operatorId;
    }

    if (!Util.isUnset(request.operatorType)) {
      body["OperatorType"] = request.operatorType;
    }

    if (!Util.isUnset(request.queryEndDate)) {
      body["QueryEndDate"] = request.queryEndDate;
    }

    if (!Util.isUnset(request.queryStartDate)) {
      body["QueryStartDate"] = request.queryStartDate;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AppliedStat",
      version: "2021-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AppliedStatResponse>(await this.callApi(params, req, runtime), new AppliedStatResponse({}));
  }

  async appliedStat(request: AppliedStatRequest): Promise<AppliedStatResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.appliedStatWithOptions(request, runtime);
  }

  async createAppSessionWithOptions(request: CreateAppSessionRequest, runtime: $Util.RuntimeOptions): Promise<CreateAppSessionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.appVersion)) {
      query["AppVersion"] = request.appVersion;
    }

    if (!Util.isUnset(request.clientIp)) {
      query["ClientIp"] = request.clientIp;
    }

    if (!Util.isUnset(request.customSessionId)) {
      query["CustomSessionId"] = request.customSessionId;
    }

    if (!Util.isUnset(request.customUserId)) {
      query["CustomUserId"] = request.customUserId;
    }

    if (!Util.isUnset(request.startParameters)) {
      query["StartParameters"] = request.startParameters;
    }

    if (!Util.isUnset(request.systemInfo)) {
      query["SystemInfo"] = request.systemInfo;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateAppSession",
      version: "2021-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAppSessionResponse>(await this.callApi(params, req, runtime), new CreateAppSessionResponse({}));
  }

  async createAppSession(request: CreateAppSessionRequest): Promise<CreateAppSessionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAppSessionWithOptions(request, runtime);
  }

  async createAppSessionBatchWithOptions(tmpReq: CreateAppSessionBatchRequest, runtime: $Util.RuntimeOptions): Promise<CreateAppSessionBatchResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateAppSessionBatchShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.appInfos)) {
      request.appInfosShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.appInfos, "AppInfos", "json");
    }

    let query = { };
    if (!Util.isUnset(request.appInfosShrink)) {
      query["AppInfos"] = request.appInfosShrink;
    }

    if (!Util.isUnset(request.customTaskId)) {
      query["CustomTaskId"] = request.customTaskId;
    }

    if (!Util.isUnset(request.timeout)) {
      query["Timeout"] = request.timeout;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateAppSessionBatch",
      version: "2021-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAppSessionBatchResponse>(await this.callApi(params, req, runtime), new CreateAppSessionBatchResponse({}));
  }

  async createAppSessionBatch(request: CreateAppSessionBatchRequest): Promise<CreateAppSessionBatchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAppSessionBatchWithOptions(request, runtime);
  }

  async createUploadTaskWithOptions(request: CreateUploadTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateUploadTaskResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.appType)) {
      body["AppType"] = request.appType;
    }

    if (!Util.isUnset(request.bucketName)) {
      body["BucketName"] = request.bucketName;
    }

    if (!Util.isUnset(request.env)) {
      body["Env"] = request.env;
    }

    if (!Util.isUnset(request.fileAddress)) {
      body["FileAddress"] = request.fileAddress;
    }

    if (!Util.isUnset(request.fileSize)) {
      body["FileSize"] = request.fileSize;
    }

    if (!Util.isUnset(request.fileType)) {
      body["FileType"] = request.fileType;
    }

    if (!Util.isUnset(request.progress)) {
      body["Progress"] = request.progress;
    }

    if (!Util.isUnset(request.region)) {
      body["Region"] = request.region;
    }

    if (!Util.isUnset(request.status)) {
      body["Status"] = request.status;
    }

    if (!Util.isUnset(request.uploadToolVersion)) {
      body["UploadToolVersion"] = request.uploadToolVersion;
    }

    if (!Util.isUnset(request.uploadType)) {
      body["UploadType"] = request.uploadType;
    }

    if (!Util.isUnset(request.versionId)) {
      body["VersionId"] = request.versionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateUploadTask",
      version: "2021-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateUploadTaskResponse>(await this.callApi(params, req, runtime), new CreateUploadTaskResponse({}));
  }

  async createUploadTask(request: CreateUploadTaskRequest): Promise<CreateUploadTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createUploadTaskWithOptions(request, runtime);
  }

  async getAppListWithOptions(runtime: $Util.RuntimeOptions): Promise<GetAppListResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "GetAppList",
      version: "2021-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAppListResponse>(await this.callApi(params, req, runtime), new GetAppListResponse({}));
  }

  async getAppList(): Promise<GetAppListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAppListWithOptions(runtime);
  }

  async getAppSessionWithOptions(request: GetAppSessionRequest, runtime: $Util.RuntimeOptions): Promise<GetAppSessionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.customSessionId)) {
      query["CustomSessionId"] = request.customSessionId;
    }

    if (!Util.isUnset(request.platformSessionId)) {
      query["PlatformSessionId"] = request.platformSessionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAppSession",
      version: "2021-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAppSessionResponse>(await this.callApi(params, req, runtime), new GetAppSessionResponse({}));
  }

  async getAppSession(request: GetAppSessionRequest): Promise<GetAppSessionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAppSessionWithOptions(request, runtime);
  }

  async getNeedUploadFileListWithOptions(request: GetNeedUploadFileListRequest, runtime: $Util.RuntimeOptions): Promise<GetNeedUploadFileListResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.env)) {
      body["Env"] = request.env;
    }

    if (!Util.isUnset(request.hashList)) {
      body["HashList"] = request.hashList;
    }

    if (!Util.isUnset(request.versionId)) {
      body["VersionId"] = request.versionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetNeedUploadFileList",
      version: "2021-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetNeedUploadFileListResponse>(await this.callApi(params, req, runtime), new GetNeedUploadFileListResponse({}));
  }

  async getNeedUploadFileList(request: GetNeedUploadFileListRequest): Promise<GetNeedUploadFileListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getNeedUploadFileListWithOptions(request, runtime);
  }

  async getOssInfoWithOptions(runtime: $Util.RuntimeOptions): Promise<GetOssInfoResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "GetOssInfo",
      version: "2021-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetOssInfoResponse>(await this.callApi(params, req, runtime), new GetOssInfoResponse({}));
  }

  async getOssInfo(): Promise<GetOssInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOssInfoWithOptions(runtime);
  }

  async getTenantIdWithOptions(runtime: $Util.RuntimeOptions): Promise<GetTenantIdResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "GetTenantId",
      version: "2021-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetTenantIdResponse>(await this.callApi(params, req, runtime), new GetTenantIdResponse({}));
  }

  async getTenantId(): Promise<GetTenantIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTenantIdWithOptions(runtime);
  }

  async getTokenWithOptions(request: GetTokenRequest, runtime: $Util.RuntimeOptions): Promise<GetTokenResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.bucket)) {
      body["Bucket"] = request.bucket;
    }

    if (!Util.isUnset(request.env)) {
      body["Env"] = request.env;
    }

    if (!Util.isUnset(request.region)) {
      body["Region"] = request.region;
    }

    if (!Util.isUnset(request.versionId)) {
      body["VersionId"] = request.versionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetToken",
      version: "2021-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetTokenResponse>(await this.callApi(params, req, runtime), new GetTokenResponse({}));
  }

  async getToken(request: GetTokenRequest): Promise<GetTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTokenWithOptions(request, runtime);
  }

  async getUploadToolUrlWithOptions(runtime: $Util.RuntimeOptions): Promise<GetUploadToolUrlResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "GetUploadToolUrl",
      version: "2021-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetUploadToolUrlResponse>(await this.callApi(params, req, runtime), new GetUploadToolUrlResponse({}));
  }

  async getUploadToolUrl(): Promise<GetUploadToolUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUploadToolUrlWithOptions(runtime);
  }

  async hasActivateWithOptions(runtime: $Util.RuntimeOptions): Promise<HasActivateResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "HasActivate",
      version: "2021-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<HasActivateResponse>(await this.callApi(params, req, runtime), new HasActivateResponse({}));
  }

  async hasActivate(): Promise<HasActivateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.hasActivateWithOptions(runtime);
  }

  async listAppSessionsWithOptions(request: ListAppSessionsRequest, runtime: $Util.RuntimeOptions): Promise<ListAppSessionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.customSessionIds)) {
      query["CustomSessionIds"] = request.customSessionIds;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.platformSessionIds)) {
      query["PlatformSessionIds"] = request.platformSessionIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAppSessions",
      version: "2021-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAppSessionsResponse>(await this.callApi(params, req, runtime), new ListAppSessionsResponse({}));
  }

  async listAppSessions(request: ListAppSessionsRequest): Promise<ListAppSessionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAppSessionsWithOptions(request, runtime);
  }

  async pageQueryResourcePackageListWithOptions(request: PageQueryResourcePackageListRequest, runtime: $Util.RuntimeOptions): Promise<PageQueryResourcePackageListResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.operatorId)) {
      body["OperatorId"] = request.operatorId;
    }

    if (!Util.isUnset(request.operatorType)) {
      body["OperatorType"] = request.operatorType;
    }

    if (!Util.isUnset(request.packageType)) {
      body["PackageType"] = request.packageType;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.queryValidType)) {
      body["QueryValidType"] = request.queryValidType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PageQueryResourcePackageList",
      version: "2021-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PageQueryResourcePackageListResponse>(await this.callApi(params, req, runtime), new PageQueryResourcePackageListResponse({}));
  }

  async pageQueryResourcePackageList(request: PageQueryResourcePackageListRequest): Promise<PageQueryResourcePackageListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.pageQueryResourcePackageListWithOptions(request, runtime);
  }

  async queryAdaptRecordsWithOptions(request: QueryAdaptRecordsRequest, runtime: $Util.RuntimeOptions): Promise<QueryAdaptRecordsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appVersionId)) {
      body["AppVersionId"] = request.appVersionId;
    }

    if (!Util.isUnset(request.requestApp)) {
      body["RequestApp"] = request.requestApp;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "QueryAdaptRecords",
      version: "2021-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryAdaptRecordsResponse>(await this.callApi(params, req, runtime), new QueryAdaptRecordsResponse({}));
  }

  async queryAdaptRecords(request: QueryAdaptRecordsRequest): Promise<QueryAdaptRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryAdaptRecordsWithOptions(request, runtime);
  }

  async queryUploadProgressWithOptions(request: QueryUploadProgressRequest, runtime: $Util.RuntimeOptions): Promise<QueryUploadProgressResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.queryUploadProgressRequests)) {
      body["QueryUploadProgressRequests"] = request.queryUploadProgressRequests;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "QueryUploadProgress",
      version: "2021-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryUploadProgressResponse>(await this.callApi(params, req, runtime), new QueryUploadProgressResponse({}));
  }

  async queryUploadProgress(request: QueryUploadProgressRequest): Promise<QueryUploadProgressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryUploadProgressWithOptions(request, runtime);
  }

  async recordFinishedFileWithOptions(request: RecordFinishedFileRequest, runtime: $Util.RuntimeOptions): Promise<RecordFinishedFileResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.bucketName)) {
      body["BucketName"] = request.bucketName;
    }

    if (!Util.isUnset(request.env)) {
      body["Env"] = request.env;
    }

    if (!Util.isUnset(request.fileFingerprintDTOList)) {
      body["FileFingerprintDTOList"] = request.fileFingerprintDTOList;
    }

    if (!Util.isUnset(request.fileSize)) {
      body["FileSize"] = request.fileSize;
    }

    if (!Util.isUnset(request.fileType)) {
      body["FileType"] = request.fileType;
    }

    if (!Util.isUnset(request.region)) {
      body["Region"] = request.region;
    }

    if (!Util.isUnset(request.toolVersion)) {
      body["ToolVersion"] = request.toolVersion;
    }

    if (!Util.isUnset(request.versionId)) {
      body["VersionId"] = request.versionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RecordFinishedFile",
      version: "2021-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecordFinishedFileResponse>(await this.callApi(params, req, runtime), new RecordFinishedFileResponse({}));
  }

  async recordFinishedFile(request: RecordFinishedFileRequest): Promise<RecordFinishedFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recordFinishedFileWithOptions(request, runtime);
  }

  async replicateVersionWithOptions(request: ReplicateVersionRequest, runtime: $Util.RuntimeOptions): Promise<ReplicateVersionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.sourceVersionId)) {
      body["SourceVersionId"] = request.sourceVersionId;
    }

    if (!Util.isUnset(request.targetVersionId)) {
      body["TargetVersionId"] = request.targetVersionId;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ReplicateVersion",
      version: "2021-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ReplicateVersionResponse>(await this.callApi(params, req, runtime), new ReplicateVersionResponse({}));
  }

  async replicateVersion(request: ReplicateVersionRequest): Promise<ReplicateVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.replicateVersionWithOptions(request, runtime);
  }

  async reportUploadProgressWithOptions(request: ReportUploadProgressRequest, runtime: $Util.RuntimeOptions): Promise<ReportUploadProgressResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.env)) {
      body["Env"] = request.env;
    }

    if (!Util.isUnset(request.progress)) {
      body["Progress"] = request.progress;
    }

    if (!Util.isUnset(request.versionId)) {
      body["VersionId"] = request.versionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ReportUploadProgress",
      version: "2021-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ReportUploadProgressResponse>(await this.callApi(params, req, runtime), new ReportUploadProgressResponse({}));
  }

  async reportUploadProgress(request: ReportUploadProgressRequest): Promise<ReportUploadProgressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.reportUploadProgressWithOptions(request, runtime);
  }

  async reportUploadResultWithOptions(request: ReportUploadResultRequest, runtime: $Util.RuntimeOptions): Promise<ReportUploadResultResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.bucketName)) {
      body["BucketName"] = request.bucketName;
    }

    if (!Util.isUnset(request.env)) {
      body["Env"] = request.env;
    }

    if (!Util.isUnset(request.fileFingerprintDTOList)) {
      body["FileFingerprintDTOList"] = request.fileFingerprintDTOList;
    }

    if (!Util.isUnset(request.fileSize)) {
      body["FileSize"] = request.fileSize;
    }

    if (!Util.isUnset(request.fileType)) {
      body["FileType"] = request.fileType;
    }

    if (!Util.isUnset(request.region)) {
      body["Region"] = request.region;
    }

    if (!Util.isUnset(request.toolVersion)) {
      body["ToolVersion"] = request.toolVersion;
    }

    if (!Util.isUnset(request.versionId)) {
      body["VersionId"] = request.versionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ReportUploadResult",
      version: "2021-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ReportUploadResultResponse>(await this.callApi(params, req, runtime), new ReportUploadResultResponse({}));
  }

  async reportUploadResult(request: ReportUploadResultRequest): Promise<ReportUploadResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.reportUploadResultWithOptions(request, runtime);
  }

  async reportUploadStatusWithOptions(request: ReportUploadStatusRequest, runtime: $Util.RuntimeOptions): Promise<ReportUploadStatusResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.env)) {
      body["Env"] = request.env;
    }

    if (!Util.isUnset(request.memo)) {
      body["Memo"] = request.memo;
    }

    if (!Util.isUnset(request.status)) {
      body["Status"] = request.status;
    }

    if (!Util.isUnset(request.versionId)) {
      body["VersionId"] = request.versionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ReportUploadStatus",
      version: "2021-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ReportUploadStatusResponse>(await this.callApi(params, req, runtime), new ReportUploadStatusResponse({}));
  }

  async reportUploadStatus(request: ReportUploadStatusRequest): Promise<ReportUploadStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.reportUploadStatusWithOptions(request, runtime);
  }

  async stopAppSessionWithOptions(request: StopAppSessionRequest, runtime: $Util.RuntimeOptions): Promise<StopAppSessionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.customSessionId)) {
      query["CustomSessionId"] = request.customSessionId;
    }

    if (!Util.isUnset(request.platformSessionId)) {
      query["PlatformSessionId"] = request.platformSessionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StopAppSession",
      version: "2021-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StopAppSessionResponse>(await this.callApi(params, req, runtime), new StopAppSessionResponse({}));
  }

  async stopAppSession(request: StopAppSessionRequest): Promise<StopAppSessionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopAppSessionWithOptions(request, runtime);
  }

  async totalAppliedConsumStatWithOptions(request: TotalAppliedConsumStatRequest, runtime: $Util.RuntimeOptions): Promise<TotalAppliedConsumStatResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.operatorId)) {
      body["OperatorId"] = request.operatorId;
    }

    if (!Util.isUnset(request.operatorType)) {
      body["OperatorType"] = request.operatorType;
    }

    if (!Util.isUnset(request.packageType)) {
      body["PackageType"] = request.packageType;
    }

    if (!Util.isUnset(request.queryEndDate)) {
      body["QueryEndDate"] = request.queryEndDate;
    }

    if (!Util.isUnset(request.queryStartDate)) {
      body["QueryStartDate"] = request.queryStartDate;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "TotalAppliedConsumStat",
      version: "2021-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TotalAppliedConsumStatResponse>(await this.callApi(params, req, runtime), new TotalAppliedConsumStatResponse({}));
  }

  async totalAppliedConsumStat(request: TotalAppliedConsumStatRequest): Promise<TotalAppliedConsumStatResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.totalAppliedConsumStatWithOptions(request, runtime);
  }

  async totalAppliedNearRealStatWithOptions(request: TotalAppliedNearRealStatRequest, runtime: $Util.RuntimeOptions): Promise<TotalAppliedNearRealStatResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.operatorId)) {
      body["OperatorId"] = request.operatorId;
    }

    if (!Util.isUnset(request.operatorType)) {
      body["OperatorType"] = request.operatorType;
    }

    if (!Util.isUnset(request.orderBy)) {
      body["OrderBy"] = request.orderBy;
    }

    if (!Util.isUnset(request.packageType)) {
      body["PackageType"] = request.packageType;
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
      action: "TotalAppliedNearRealStat",
      version: "2021-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TotalAppliedNearRealStatResponse>(await this.callApi(params, req, runtime), new TotalAppliedNearRealStatResponse({}));
  }

  async totalAppliedNearRealStat(request: TotalAppliedNearRealStatRequest): Promise<TotalAppliedNearRealStatResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.totalAppliedNearRealStatWithOptions(request, runtime);
  }

  async totalQueryResourcePackageWithOptions(request: TotalQueryResourcePackageRequest, runtime: $Util.RuntimeOptions): Promise<TotalQueryResourcePackageResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.operatorId)) {
      body["OperatorId"] = request.operatorId;
    }

    if (!Util.isUnset(request.operatorType)) {
      body["OperatorType"] = request.operatorType;
    }

    if (!Util.isUnset(request.packageType)) {
      body["PackageType"] = request.packageType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "TotalQueryResourcePackage",
      version: "2021-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TotalQueryResourcePackageResponse>(await this.callApi(params, req, runtime), new TotalQueryResourcePackageResponse({}));
  }

  async totalQueryResourcePackage(request: TotalQueryResourcePackageRequest): Promise<TotalQueryResourcePackageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.totalQueryResourcePackageWithOptions(request, runtime);
  }

}
