// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CheckSmsVerifyCodeRequest extends $tea.Model {
  /**
   * @remarks
   * The verification policy for uppercase and lowercase letters of the verification code. Valid values:
   * 
   * *   1: The verification policy does not distinguish uppercase and lowercase letters.
   * *   2: The verification policy distinguishes uppercase and lowercase letters.
   * 
   * @example
   * 1
   */
  caseAuthPolicy?: number;
  /**
   * @remarks
   * The country code of the phone number. Default value: 86.
   * 
   * @example
   * 86
   */
  countryCode?: string;
  /**
   * @remarks
   * The external ID.
   * 
   * @example
   * 12123231
   */
  outId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The phone number.
   * 
   * This parameter is required.
   * 
   * @example
   * 18653529399
   */
  phoneNumber?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The verification service name. If this parameter is not specified, the default service is used. The name can be up to 20 characters in length.
   * 
   * @example
   * Aliyun
   */
  schemeName?: string;
  /**
   * @remarks
   * The verification code.
   * 
   * This parameter is required.
   * 
   * @example
   * 1231
   */
  verifyCode?: string;
  static names(): { [key: string]: string } {
    return {
      caseAuthPolicy: 'CaseAuthPolicy',
      countryCode: 'CountryCode',
      outId: 'OutId',
      ownerId: 'OwnerId',
      phoneNumber: 'PhoneNumber',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      schemeName: 'SchemeName',
      verifyCode: 'VerifyCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caseAuthPolicy: 'number',
      countryCode: 'string',
      outId: 'string',
      ownerId: 'number',
      phoneNumber: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      schemeName: 'string',
      verifyCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckSmsVerifyCodeResponseBody extends $tea.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response code.
   * 
   * *   If OK is returned, the request is successful.
   * *   For more information about other error codes, see [Response codes](https://help.aliyun.com/zh/pnvs/developer-reference/api-return-code?spm=a2c4g.11174283.0.0.70c5616bkj38Wa).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The returned data.
   */
  model?: CheckSmsVerifyCodeResponseBodyModel;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      message: 'Message',
      model: 'Model',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      message: 'string',
      model: CheckSmsVerifyCodeResponseBodyModel,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckSmsVerifyCodeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CheckSmsVerifyCodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CheckSmsVerifyCodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSchemeConfigRequest extends $tea.Model {
  /**
   * @remarks
   * The package name. This parameter is required when Platform is set to Android. The name must be 1 to 128 characters in length and can contain digits, letters, hyphens (-), underscores (_), and periods (.).
   * 
   * @example
   * com.aliyun.android
   */
  androidPackageName?: string;
  /**
   * @remarks
   * The package signature. This parameter is required when Platform is set to Android. The signature must be 32 characters in length and can contain digits and letters.
   * 
   * @example
   * dfsfaawklll1****olkweklk***
   */
  androidPackageSign?: string;
  /**
   * @remarks
   * The app name, which can be up to 20 characters in length and can contain letters.
   * 
   * @example
   * Alibaba Cloud Communications
   */
  appName?: string;
  /**
   * @remarks
   * The reserved field. HTML5 apps are not supported.
   * 
   * @example
   * -
   */
  h5Origin?: string;
  /**
   * @remarks
   * The reserved field. HTML5 apps are not supported.
   * 
   * @example
   * -
   */
  h5Url?: string;
  /**
   * @remarks
   * The bundle ID. This parameter is required when OsType is set to iOS. The bundle ID must be 1 to 128 characters in length and can contain digits, letters, hyphens (-), underscores (_), and periods (.).
   * 
   * @example
   * com.aliyun.ios
   */
  iosBundleId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The app platform.
   * 
   * Valid values:
   * 
   * *   Android
   * *   iOS
   * 
   * This parameter is required.
   * 
   * @example
   * Android
   */
  platform?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The service name, which can be up to 10 characters in length and can contain letters.
   * 
   * This parameter is required.
   * 
   * @example
   * Aliyun
   */
  schemeName?: string;
  static names(): { [key: string]: string } {
    return {
      androidPackageName: 'AndroidPackageName',
      androidPackageSign: 'AndroidPackageSign',
      appName: 'AppName',
      h5Origin: 'H5Origin',
      h5Url: 'H5Url',
      iosBundleId: 'IosBundleId',
      ownerId: 'OwnerId',
      platform: 'Platform',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      schemeName: 'SchemeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      androidPackageName: 'string',
      androidPackageSign: 'string',
      appName: 'string',
      h5Origin: 'string',
      h5Url: 'string',
      iosBundleId: 'string',
      ownerId: 'number',
      platform: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      schemeName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSchemeConfigResponseBody extends $tea.Model {
  /**
   * @remarks
   * The response code.
   * 
   * *   If OK is returned, the request is successful.
   * *   For more information about other error codes, see [API response codes](https://help.aliyun.com/zh/pnvs/developer-reference/api-return-code?spm=a2c4g.11186623.0.0.5c3a662fbgeAuk).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The returned results.
   */
  model?: CreateSchemeConfigResponseBodyModel;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B95B36EC-8108-4479-D3AA-2BB27F9B155A
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      model: 'Model',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      model: CreateSchemeConfigResponseBodyModel,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSchemeConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateSchemeConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateSchemeConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVerifySchemeRequest extends $tea.Model {
  /**
   * @remarks
   * The app name.
   * 
   * This parameter is required.
   * 
   * @example
   * Alibaba Cloud Communications
   */
  appName?: string;
  /**
   * @remarks
   * The verification type. You can select multiple types only when the phone number verification is supported. Separate multiple types with commas (,).
   * 
   * *   **1**: phone number verification
   * *   **2**: SMS verification
   * 
   * @example
   * 1,2
   */
  authType?: string;
  /**
   * @remarks
   * The bundle ID. This parameter is required when OsType is set to iOS. The bundle ID must be 1 to 128 characters in length and can contain digits, letters, hyphens (-), underscores (_), and periods (.).
   * 
   * @example
   * example.aliyundoc.com
   */
  bundleId?: string;
  /**
   * @remarks
   * The channel code of China Mobile.
   * 
   * @example
   * 1
   */
  cmApiCode?: number;
  /**
   * @remarks
   * The channel code of China Telecom.
   * 
   * @example
   * 3
   */
  ctApiCode?: number;
  /**
   * @remarks
   * The channel code of China Unicom.
   * 
   * @example
   * 2
   */
  cuApiCode?: number;
  /**
   * @remarks
   * The email address that receives the key.
   * 
   * @example
   * username@aliyundoc.com
   */
  email?: string;
  hmAppIdentifier?: string;
  hmPackageName?: string;
  hmSignName?: string;
  /**
   * @remarks
   * The IP address whitelist.
   * 
   * @example
   * 139.9.167.181
   * 122.112.210.205
   * 139.9.172.0/24
   */
  ipWhiteList?: string;
  /**
   * @remarks
   * The source URL of the HTML5 app page. We recommend that you specify this parameter as a domain name.
   * 
   * @example
   * https://h5.minexiot.com
   */
  origin?: string;
  /**
   * @remarks
   * The type of the operating system for the terminal. Valid values: iOS and Android.
   * 
   * This parameter is required.
   * 
   * @example
   * iOS
   */
  osType?: string;
  ownerId?: number;
  /**
   * @remarks
   * The package name. This parameter is required when OsType is set to Android. The name must be 1 to 128 characters in length and can contain digits, letters, hyphens (-), underscores (_), and periods (.).
   * 
   * @example
   * com.aliyun
   */
  packName?: string;
  /**
   * @remarks
   * The package signature. This parameter is required when OsType is set to Android. The signature must be 32 characters in length and can contain digits and letters.
   * 
   * @example
   * 123aliyun
   */
  packSign?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The service type.
   * 
   * @example
   * 0
   */
  sceneType?: string;
  /**
   * @remarks
   * The service name.
   * 
   * This parameter is required.
   * 
   * @example
   * Aliyun
   */
  schemeName?: string;
  /**
   * @remarks
   * The bound SMS signature. This parameter is valid only when AuthType is set to 2. The signature must be approved.
   * 
   * @example
   * Aliyun Test
   */
  smsSignName?: string;
  /**
   * @remarks
   * The URL of the HTML5 app page.
   * 
   * @example
   * https://h5.minexiot.com/index.html
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      authType: 'AuthType',
      bundleId: 'BundleId',
      cmApiCode: 'CmApiCode',
      ctApiCode: 'CtApiCode',
      cuApiCode: 'CuApiCode',
      email: 'Email',
      hmAppIdentifier: 'HmAppIdentifier',
      hmPackageName: 'HmPackageName',
      hmSignName: 'HmSignName',
      ipWhiteList: 'IpWhiteList',
      origin: 'Origin',
      osType: 'OsType',
      ownerId: 'OwnerId',
      packName: 'PackName',
      packSign: 'PackSign',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sceneType: 'SceneType',
      schemeName: 'SchemeName',
      smsSignName: 'SmsSignName',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      authType: 'string',
      bundleId: 'string',
      cmApiCode: 'number',
      ctApiCode: 'number',
      cuApiCode: 'number',
      email: 'string',
      hmAppIdentifier: 'string',
      hmPackageName: 'string',
      hmSignName: 'string',
      ipWhiteList: 'string',
      origin: 'string',
      osType: 'string',
      ownerId: 'number',
      packName: 'string',
      packSign: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sceneType: 'string',
      schemeName: 'string',
      smsSignName: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVerifySchemeResponseBody extends $tea.Model {
  /**
   * @remarks
   * The response code.
   * 
   * *   If OK is returned, the request is successful.
   * *   For more information about other error codes, see [API response codes](https://help.aliyun.com/document_detail/85198.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The response parameters.
   */
  gateVerifySchemeDTO?: CreateVerifySchemeResponseBodyGateVerifySchemeDTO;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A1E75E69-3049-5FDB-A376-D745837CD2B1
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      gateVerifySchemeDTO: 'GateVerifySchemeDTO',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      gateVerifySchemeDTO: CreateVerifySchemeResponseBodyGateVerifySchemeDTO,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVerifySchemeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateVerifySchemeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateVerifySchemeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVerifySchemeRequest extends $tea.Model {
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 12345678
   */
  customerId?: number;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The service code.
   * 
   * This parameter is required.
   * 
   * @example
   * FC10000014164****
   */
  schemeCode?: string;
  static names(): { [key: string]: string } {
    return {
      customerId: 'CustomerId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      schemeCode: 'SchemeCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customerId: 'number',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      schemeCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVerifySchemeResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request is successful. For more information about other error codes, see [API response codes](https://help.aliyun.com/document_detail/85198.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E3754956-D0B1-5947-962A-AE767D354F01
   */
  requestId?: string;
  /**
   * @remarks
   * The result of the operation. Valid values:
   * 
   * *   **true**: The verification service is deleted.
   * *   **false**: The verification service failed to be deleted.
   * 
   * @example
   * true
   */
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVerifySchemeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteVerifySchemeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteVerifySchemeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVerifySchemeRequest extends $tea.Model {
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 1234****
   */
  customerId?: number;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The service code.
   * 
   * This parameter is required.
   * 
   * @example
   * FC10000010643****
   */
  schemeCode?: string;
  static names(): { [key: string]: string } {
    return {
      customerId: 'CustomerId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      schemeCode: 'SchemeCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customerId: 'number',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      schemeCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVerifySchemeResponseBody extends $tea.Model {
  /**
   * @remarks
   * The response code. OK indicates that the request is successful. For more information about other error codes, see [API response codes](https://help.aliyun.com/document_detail/85198.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0C5380A7-2032-5F7D-9614-1BF8B54D16CB
   */
  requestId?: string;
  /**
   * @remarks
   * The response parameters.
   */
  schemeQueryResultDTO?: DescribeVerifySchemeResponseBodySchemeQueryResultDTO;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      schemeQueryResultDTO: 'SchemeQueryResultDTO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      schemeQueryResultDTO: DescribeVerifySchemeResponseBodySchemeQueryResultDTO,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVerifySchemeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeVerifySchemeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeVerifySchemeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAuthTokenRequest extends $tea.Model {
  bizType?: number;
  cmApiCode?: number;
  ctApiCode?: number;
  cuApiCode?: number;
  /**
   * @remarks
   * The requested domain name.
   * 
   * This parameter is required.
   * 
   * @example
   * https://www.aliyundoc.com
   */
  origin?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  sceneCode?: string;
  /**
   * @remarks
   * The URL of the requested web page.
   * 
   * This parameter is required.
   * 
   * @example
   * https://www.aliyundoc.com/
   */
  url?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      cmApiCode: 'CmApiCode',
      ctApiCode: 'CtApiCode',
      cuApiCode: 'CuApiCode',
      origin: 'Origin',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sceneCode: 'SceneCode',
      url: 'Url',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'number',
      cmApiCode: 'number',
      ctApiCode: 'number',
      cuApiCode: 'number',
      origin: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sceneCode: 'string',
      url: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAuthTokenResponseBody extends $tea.Model {
  /**
   * @remarks
   * The response code.
   * 
   * *   If OK is returned, the request is successful.
   * *   For more information about other error codes, see [API response codes](https://help.aliyun.com/document_detail/85198.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8906582E-6722
   */
  requestId?: string;
  /**
   * @remarks
   * The response parameters.
   */
  tokenInfo?: GetAuthTokenResponseBodyTokenInfo;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      tokenInfo: 'TokenInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      tokenInfo: GetAuthTokenResponseBodyTokenInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAuthTokenResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAuthTokenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetAuthTokenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAuthorizationUrlRequest extends $tea.Model {
  /**
   * @remarks
   * The authorization end date, which is in the yyyy-MM-dd format. This parameter is required for services of contract type.
   * 
   * @example
   * 2020–12–28
   */
  endDate?: string;
  ownerId?: number;
  /**
   * @remarks
   * The phone number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1390000****
   */
  phoneNo?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the authorization scenario. You can view the ID of the authorization scenario on the **Authorization Scenario Management** page in the **Phone Number Verification Service console**.
   * 
   * This parameter is required.
   * 
   * @example
   * 234****
   */
  schemeId?: number;
  static names(): { [key: string]: string } {
    return {
      endDate: 'EndDate',
      ownerId: 'OwnerId',
      phoneNo: 'PhoneNo',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      schemeId: 'SchemeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'string',
      ownerId: 'number',
      phoneNo: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      schemeId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAuthorizationUrlResponseBody extends $tea.Model {
  /**
   * @remarks
   * The response code.
   * 
   * *   If OK is returned, the request is successful.
   * *   For more information about other error codes, see [API response codes](https://help.aliyun.com/document_detail/85198.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The response parameters.
   */
  data?: GetAuthorizationUrlResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8906582E-6722
   */
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
      data: GetAuthorizationUrlResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAuthorizationUrlResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAuthorizationUrlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetAuthorizationUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFusionAuthTokenRequest extends $tea.Model {
  /**
   * @remarks
   * The bundle ID of the app. This parameter is required when Platform is set to iOS.
   * 
   * @example
   * com.example.test
   */
  bundleId?: string;
  /**
   * @remarks
   * The validity period of the token. Unit: seconds. Valid values: 900 to 43200.
   * 
   * This parameter is required.
   * 
   * @example
   * 900
   */
  durationSeconds?: number;
  ownerId?: number;
  /**
   * @remarks
   * The package name of the app. This parameter is required when Platform is set to Android.
   * 
   * @example
   * com.example.test
   */
  packageName?: string;
  /**
   * @remarks
   * The package signature of the app. This parameter is required when Platform is set to Android.
   * 
   * @example
   * 47fcc************************278
   */
  packageSign?: string;
  /**
   * @remarks
   * The platform type. Valid values: Android and iOS.
   * 
   * This parameter is required.
   * 
   * @example
   * Android
   */
  platform?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The service code.
   * 
   * This parameter is required.
   * 
   * @example
   * FA1000*************201
   */
  schemeCode?: string;
  static names(): { [key: string]: string } {
    return {
      bundleId: 'BundleId',
      durationSeconds: 'DurationSeconds',
      ownerId: 'OwnerId',
      packageName: 'PackageName',
      packageSign: 'PackageSign',
      platform: 'Platform',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      schemeCode: 'SchemeCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bundleId: 'string',
      durationSeconds: 'number',
      ownerId: 'number',
      packageName: 'string',
      packageSign: 'string',
      platform: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      schemeCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFusionAuthTokenResponseBody extends $tea.Model {
  /**
   * @remarks
   * The response code. If OK is returned, the request is successful. Other values indicate that the request failed. For more information, see Error codes.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The authentication code. The value of this parameter is a string.
   * 
   * @example
   * FKcksloqk***********jalEc+
   */
  model?: string;
  /**
   * @remarks
   * The request ID, which is used to locate and troubleshoot issues.
   * 
   * @example
   * CC3BB6D2-2FDF-4321-9DCE-B38165CE4C47
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values: true false
   * 
   * @example
   * false
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      model: 'Model',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      model: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFusionAuthTokenResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetFusionAuthTokenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetFusionAuthTokenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMobileRequest extends $tea.Model {
  /**
   * @remarks
   * The logon token obtained by the SDK for your app.
   * 
   * This parameter is required.
   * 
   * @example
   * Dfafdafad5422****
   */
  accessToken?: string;
  /**
   * @remarks
   * The external ID.
   * 
   * @example
   * 22345****
   */
  outId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      outId: 'OutId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      outId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMobileResponseBody extends $tea.Model {
  /**
   * @remarks
   * The response code.
   * 
   * *   If OK is returned, the request is successful.
   * *   For more information about other error codes, see [API response codes](https://help.aliyun.com/document_detail/85198.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The response parameters.
   */
  getMobileResultDTO?: GetMobileResponseBodyGetMobileResultDTO;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8906582E-6722
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      getMobileResultDTO: 'GetMobileResultDTO',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      getMobileResultDTO: GetMobileResponseBodyGetMobileResultDTO,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMobileResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetMobileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetMobileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPhoneWithTokenRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The token for phone number verification that is obtained by the JavaScript SDK. The validity period of the token is 10 minutes for China Telecom, 30 minutes for China Unicom, and 2 minutes for China Mobile. The token can be used only once.
   * 
   * This parameter is required.
   * 
   * @example
   * Dfafdafad542****
   */
  spToken?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      spToken: 'SpToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      spToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPhoneWithTokenResponseBody extends $tea.Model {
  /**
   * @remarks
   * The response code.
   * 
   * *   If OK is returned, the request is successful.
   * *   For more information about other error codes, see [API response codes](https://help.aliyun.com/document_detail/85198.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The response parameters.
   */
  data?: GetPhoneWithTokenResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0F335F48-****-****-****-CA7914FE5D77
   */
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
      data: GetPhoneWithTokenResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPhoneWithTokenResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetPhoneWithTokenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetPhoneWithTokenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSmsAuthTokensRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the iOS application. This parameter is required if OsType is set to **iOS**.
   * 
   * @example
   * 12345****
   */
  bundleId?: string;
  /**
   * @remarks
   * The validity period of the token. Unit: seconds. Valid values: 900 to 43200.
   * 
   * This parameter is required.
   * 
   * @example
   * 900
   */
  expire?: number;
  /**
   * @remarks
   * The type of the operating system. Valid values: **Android** and **iOS**.
   * 
   * This parameter is required.
   * 
   * @example
   * Android
   */
  osType?: string;
  ownerId?: number;
  /**
   * @remarks
   * The package name. This parameter is required if OsType is set to **Android**.
   * 
   * @example
   * com.aliqin.mytel.test
   */
  packageName?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The service code.
   * 
   * This parameter is required.
   * 
   * @example
   * FC100000134840112
   */
  sceneCode?: string;
  /**
   * @remarks
   * The signature. This parameter is required if OsType is set to **Android**.
   * 
   * @example
   * 47fcc6615485e83b4100433****
   */
  signName?: string;
  /**
   * @remarks
   * The validity period of the SMS verification code. Unit: seconds. Default value: 180.
   * 
   * @example
   * 60
   */
  smsCodeExpire?: number;
  /**
   * @remarks
   * The code of the text message template.
   * 
   * This parameter is required.
   * 
   * @example
   * SMS_13987****
   */
  smsTemplateCode?: string;
  static names(): { [key: string]: string } {
    return {
      bundleId: 'BundleId',
      expire: 'Expire',
      osType: 'OsType',
      ownerId: 'OwnerId',
      packageName: 'PackageName',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sceneCode: 'SceneCode',
      signName: 'SignName',
      smsCodeExpire: 'SmsCodeExpire',
      smsTemplateCode: 'SmsTemplateCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bundleId: 'string',
      expire: 'number',
      osType: 'string',
      ownerId: 'number',
      packageName: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sceneCode: 'string',
      signName: 'string',
      smsCodeExpire: 'number',
      smsTemplateCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSmsAuthTokensResponseBody extends $tea.Model {
  /**
   * @remarks
   * The response code.
   * 
   * *   If OK is returned, the request is successful.
   * *   For more information about other error codes, see [API response codes](https://help.aliyun.com/document_detail/85198.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The response parameters.
   */
  data?: GetSmsAuthTokensResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8906582E-6722
   */
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
      data: GetSmsAuthTokensResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSmsAuthTokensResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSmsAuthTokensResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetSmsAuthTokensResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JyCreateVerifySchemeRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  appName?: string;
  bundleId?: string;
  /**
   * @example
   * 1
   */
  cmApiCode?: number;
  /**
   * @example
   * 3
   */
  ctApiCode?: number;
  /**
   * @example
   * 2
   */
  cuApiCode?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  osType?: string;
  ownerId?: number;
  packName?: string;
  packSign?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  schemeName?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      bundleId: 'BundleId',
      cmApiCode: 'CmApiCode',
      ctApiCode: 'CtApiCode',
      cuApiCode: 'CuApiCode',
      osType: 'OsType',
      ownerId: 'OwnerId',
      packName: 'PackName',
      packSign: 'PackSign',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      schemeName: 'SchemeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      bundleId: 'string',
      cmApiCode: 'number',
      ctApiCode: 'number',
      cuApiCode: 'number',
      osType: 'string',
      ownerId: 'number',
      packName: 'string',
      packSign: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      schemeName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JyCreateVerifySchemeResponseBody extends $tea.Model {
  code?: string;
  gateVerifySchemeData?: JyCreateVerifySchemeResponseBodyGateVerifySchemeData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      gateVerifySchemeData: 'GateVerifySchemeData',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      gateVerifySchemeData: JyCreateVerifySchemeResponseBodyGateVerifySchemeData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JyCreateVerifySchemeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: JyCreateVerifySchemeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: JyCreateVerifySchemeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JyQueryAppInfoBySceneCodeRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  sceneCode?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sceneCode: 'SceneCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sceneCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JyQueryAppInfoBySceneCodeResponseBody extends $tea.Model {
  code?: string;
  data?: JyQueryAppInfoBySceneCodeResponseBodyData;
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
      data: JyQueryAppInfoBySceneCodeResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JyQueryAppInfoBySceneCodeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: JyQueryAppInfoBySceneCodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: JyQueryAppInfoBySceneCodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryGateVerifyBillingPublicRequest extends $tea.Model {
  /**
   * @remarks
   * The verification method. Valid values:
   * 
   * *   **0**: phone number verification
   * *   **1**: one-click logon
   * *   **2**: all
   * *   **3**: facial recognition
   * *   **4**: SMS verification
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  authenticationType?: number;
  /**
   * @remarks
   * The month in which the bill is generated. Specify this parameter in the YYYYMM format. Example: 202111.
   * 
   * This parameter is required.
   * 
   * @example
   * 202111
   */
  month?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      authenticationType: 'AuthenticationType',
      month: 'Month',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authenticationType: 'number',
      month: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryGateVerifyBillingPublicResponseBody extends $tea.Model {
  /**
   * @remarks
   * The response code. Valid values:
   * 
   * *   If OK is returned, the request is successful.
   * *   For more information about other error codes, see [API response codes](https://help.aliyun.com/document_detail/85198.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The billing information about each verification service.
   */
  data?: QueryGateVerifyBillingPublicResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8906582E-6722
   */
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
      data: QueryGateVerifyBillingPublicResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryGateVerifyBillingPublicResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryGateVerifyBillingPublicResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryGateVerifyBillingPublicResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryGateVerifyStatisticPublicRequest extends $tea.Model {
  /**
   * @remarks
   * The verification method. Valid values:
   * 
   * *   **1**: one-click logon
   * *   **2**: phone number verification, including the verification of the phone number used in HTML5 pages
   * *   **3**: SMS verification
   * *   **4**: facial recognition
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  authenticationType?: number;
  /**
   * @remarks
   * The end date. Specify this parameter in the YYYYMMDD format. Example: 20220106.
   * 
   * This parameter is required.
   * 
   * @example
   * 20220106
   */
  endDate?: string;
  /**
   * @remarks
   * The type of the operating system. Valid values:
   * 
   * *   **Android**
   * *   **iOS**
   * 
   * @example
   * Android
   */
  osType?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  /**
   * @remarks
   * The service code.
   * 
   * @example
   * FC100000038194004
   */
  sceneCode?: string;
  /**
   * @remarks
   * The start date. Specify this parameter in the YYYYMMDD format. Example: 20220101.
   * 
   * This parameter is required.
   * 
   * @example
   * 20220101
   */
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      authenticationType: 'AuthenticationType',
      endDate: 'EndDate',
      osType: 'OsType',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      sceneCode: 'SceneCode',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authenticationType: 'number',
      endDate: 'string',
      osType: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      sceneCode: 'string',
      startDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryGateVerifyStatisticPublicResponseBody extends $tea.Model {
  /**
   * @remarks
   * The response code. Valid values:
   * 
   * *   If OK is returned, the request is successful.
   * *   For more information about other error codes, see [API response codes](https://help.aliyun.com/document_detail/85198.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The information about the calls of Phone Number Verification Service, including the total calls, the successful calls, failed calls, unknown calls, and daily calls within the statistical date range.
   */
  data?: QueryGateVerifyStatisticPublicResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8906582E-6722
   */
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
      data: QueryGateVerifyStatisticPublicResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryGateVerifyStatisticPublicResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryGateVerifyStatisticPublicResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryGateVerifyStatisticPublicResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySendDetailsRequest extends $tea.Model {
  /**
   * @remarks
   * The unique ID of the business, which is provided by Alibaba Cloud.
   * 
   * @example
   * 1231891289318923^12
   */
  bizId?: string;
  /**
   * @remarks
   * The number of the page on which you are reading the text message. Pages start from page 1. The value of this parameter cannot exceed the maximum page number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  ownerId?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * This parameter is required.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The phone number.
   * 
   * This parameter is required.
   * 
   * @example
   * 186****9399
   */
  phoneNumber?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The date when the text message was sent. You can query text messages that were sent within the last 30 days.
   * 
   * Specify the date in the yyyyMMdd format. Example: 20181225.
   * 
   * This parameter is required.
   * 
   * @example
   * 20181225
   */
  sendDate?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      currentPage: 'CurrentPage',
      ownerId: 'OwnerId',
      pageSize: 'PageSize',
      phoneNumber: 'PhoneNumber',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sendDate: 'SendDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      currentPage: 'number',
      ownerId: 'number',
      pageSize: 'number',
      phoneNumber: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sendDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySendDetailsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * none
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response code.
   * 
   * If OK is returned, the request is successful. Other values indicate that the request failed. For more information, see [Error codes](https://help.aliyun.com/document_detail/101346.html?spm=a2c4g.419277.0.i11).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The returned data.
   */
  model?: QuerySendDetailsResponseBodyModel[];
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of entries in the list.
   * 
   * @example
   * 42
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      message: 'Message',
      model: 'Model',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      message: 'string',
      model: { 'type': 'array', 'itemType': QuerySendDetailsResponseBodyModel },
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySendDetailsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QuerySendDetailsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QuerySendDetailsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendSmsVerifyCodeRequest extends $tea.Model {
  /**
   * @remarks
   * The length of the verification code. Default value: 4. Valid values: 4 to 8.
   * 
   * @example
   * 4
   */
  codeLength?: number;
  /**
   * @remarks
   * The type of the generated verification code. Default value: 1. Valid values:
   * 
   * *   1: digits only
   * *   2: uppercase letters only
   * *   3: lowercase letters only
   * *   4: uppercase and lowercase letters
   * *   5: digits and uppercase letters
   * *   6: digits and lowercase letters
   * *   7: digits and uppercase and lowercase letters
   * 
   * @example
   * 1
   */
  codeType?: number;
  /**
   * @remarks
   * The country code of the phone number. SMS verification codes can be sent only by using phone numbers in the Chinese mainland. Default value: 86.
   * 
   * @example
   * 86
   */
  countryCode?: string;
  /**
   * @remarks
   * Specifies how to handle the verification codes received earlier in a case where verification codes are sent to the same phone number for the same scenario within the validity period.
   * 
   * *   1 (default): The latest verification code overwrites the verification codes received earlier. In this case, verification codes received earlier expire.
   * *   2: Verification codes within their validity period are valid and can be used for verification.
   * 
   * @example
   * 1
   */
  duplicatePolicy?: number;
  /**
   * @remarks
   * The time interval. Unit: seconds. Default value: 60. This parameter specifies how often you can send a verification code.
   * 
   * @example
   * 60
   */
  interval?: number;
  /**
   * @remarks
   * The external ID.
   * 
   * @example
   * 12358794Aqzaq
   */
  outId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The phone number.
   * 
   * This parameter is required.
   * 
   * @example
   * 86130****0000
   */
  phoneNumber?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Specifies whether to return a verification code.
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  returnVerifyCode?: boolean;
  /**
   * @remarks
   * The verification service name. If this parameter is not specified, the default service is used. The name can be up to 20 characters in length.
   * 
   * @example
   * Aliyun
   */
  schemeName?: string;
  /**
   * @remarks
   * The signature.
   * 
   * This parameter is required.
   * 
   * @example
   * Aliyun Test
   */
  signName?: string;
  /**
   * @remarks
   * The extension code of the upstream text message. Upstream text messages are text messages sent to the communication service provider. Upstream text messages are used to customize a service, complete an inquiry, or send a request. You are charged for sending upstream text messages based on the billing standards of the service provider.
   * 
   * >  The extension code is automatically generated by the system when the signature is generated. You do not need to specify the extension code. You can skip this parameter based on your business requirements. If you want to use custom extension codes, contact your account manager.
   * 
   * @example
   * 1213123
   */
  smsUpExtendCode?: string;
  /**
   * @remarks
   * The code of the text message template.
   * 
   * Log on to the [SMS console](https://dysms.console.aliyun.com/dysms.htm?spm=5176.12818093.categories-n-products.ddysms.3b2816d0xml2NA#/overview). In the left-side navigation pane, click **Go China** or **Go Globe**. You can view the text message template code in the **Template Code** column on the **Message Templates** tab.
   * 
   * >  The text message templates must be created on the Go Globe page and approved.
   * 
   * This parameter is required.
   * 
   * @example
   * azsq_*****
   */
  templateCode?: string;
  /**
   * @remarks
   * The value of the variable in the text message template. The verification code is replaced with "##code##".
   * 
   * Example 1: For a system-defined template that contains variables, if the template content is "Your verification code is ${code} and valid for 5 minutes. Do not disclose the verification code to others.", specify the value of this parameter as {"code":"##code##"}
   * 
   * Example 2: For a custom template, if the template content is ${content}, specify the value of this parameter as {"content":"Your verification code is ##code## and must be used within 5 minutes."}.
   * 
   * > 
   * 
   * *   If line breaks are required in JSON-formatted data, they must meet the relevant requirements that are specified in the standard JSON protocol.
   * 
   * *   For more information about template variables, see [SMS template specifications](https://help.aliyun.com/document_detail/108253.html).
   * 
   * This parameter is required.
   * 
   * @example
   * {"code":"##code##"}
   */
  templateParam?: string;
  /**
   * @remarks
   * The validity period of the verification code. Unit: seconds. Default value: 300.
   * 
   * @example
   * 300
   */
  validTime?: number;
  static names(): { [key: string]: string } {
    return {
      codeLength: 'CodeLength',
      codeType: 'CodeType',
      countryCode: 'CountryCode',
      duplicatePolicy: 'DuplicatePolicy',
      interval: 'Interval',
      outId: 'OutId',
      ownerId: 'OwnerId',
      phoneNumber: 'PhoneNumber',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      returnVerifyCode: 'ReturnVerifyCode',
      schemeName: 'SchemeName',
      signName: 'SignName',
      smsUpExtendCode: 'SmsUpExtendCode',
      templateCode: 'TemplateCode',
      templateParam: 'TemplateParam',
      validTime: 'ValidTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeLength: 'number',
      codeType: 'number',
      countryCode: 'string',
      duplicatePolicy: 'number',
      interval: 'number',
      outId: 'string',
      ownerId: 'number',
      phoneNumber: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      returnVerifyCode: 'boolean',
      schemeName: 'string',
      signName: 'string',
      smsUpExtendCode: 'string',
      templateCode: 'string',
      templateParam: 'string',
      validTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendSmsVerifyCodeResponseBody extends $tea.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response code. If OK is returned, the request is successful. For more information, see [Response codes](https://help.aliyun.com/zh/pnvs/developer-reference/api-return-code?spm=a2c4g.11174283.0.0.70c5616bkj38Wa).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The returned data.
   */
  model?: SendSmsVerifyCodeResponseBodyModel;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      message: 'Message',
      model: 'Model',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      message: 'string',
      model: SendSmsVerifyCodeResponseBodyModel,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendSmsVerifyCodeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SendSmsVerifyCodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SendSmsVerifyCodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyMobileRequest extends $tea.Model {
  /**
   * @remarks
   * The token obtained by the SDK for your app.
   * 
   * This parameter is required.
   * 
   * @example
   * Dfafdafad542****
   */
  accessCode?: string;
  /**
   * @remarks
   * The external ID.
   * 
   * @example
   * 123456
   */
  outId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The phone number.
   * 
   * This parameter is required.
   * 
   * @example
   * 13800****00
   */
  phoneNumber?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      accessCode: 'AccessCode',
      outId: 'OutId',
      ownerId: 'OwnerId',
      phoneNumber: 'PhoneNumber',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessCode: 'string',
      outId: 'string',
      ownerId: 'number',
      phoneNumber: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyMobileResponseBody extends $tea.Model {
  /**
   * @remarks
   * The response code.
   * 
   * *   If OK is returned, the request is successful.
   * *   For more information about other error codes, see [API response codes](https://help.aliyun.com/document_detail/85198.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The response parameters.
   */
  gateVerifyResultDTO?: VerifyMobileResponseBodyGateVerifyResultDTO;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8906582E-6722
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      gateVerifyResultDTO: 'GateVerifyResultDTO',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      gateVerifyResultDTO: VerifyMobileResponseBodyGateVerifyResultDTO,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyMobileResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: VerifyMobileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: VerifyMobileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyPhoneWithTokenRequest extends $tea.Model {
  ownerId?: number;
  /**
   * @remarks
   * The phone number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1380000****
   */
  phoneNumber?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The token for phone number verification that is obtained by the JavaScript SDK.
   * 
   * This parameter is required.
   * 
   * @example
   * Dfafdafad542****
   */
  spToken?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      phoneNumber: 'PhoneNumber',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      spToken: 'SpToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      phoneNumber: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      spToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyPhoneWithTokenResponseBody extends $tea.Model {
  /**
   * @remarks
   * The response code.
   * 
   * *   If OK is returned, the request is successful.
   * *   For more information about other error codes, see [API response codes](https://help.aliyun.com/document_detail/85198.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The response parameters.
   */
  gateVerify?: VerifyPhoneWithTokenResponseBodyGateVerify;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8906582E-6722
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      gateVerify: 'GateVerify',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      gateVerify: VerifyPhoneWithTokenResponseBodyGateVerify,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyPhoneWithTokenResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: VerifyPhoneWithTokenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: VerifyPhoneWithTokenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifySmsCodeRequest extends $tea.Model {
  /**
   * @remarks
   * The phone number, which is used to receive SMS verification codes.
   * 
   * This parameter is required.
   * 
   * @example
   * 1321111****
   */
  phoneNumber?: string;
  /**
   * @remarks
   * The SMS verification code.
   * 
   * This parameter is required.
   * 
   * @example
   * 12****
   */
  smsCode?: string;
  /**
   * @remarks
   * The text message verification code. After you successfully call the corresponding API operation to send the SMS verification code, the end users receive the SMS verification code. SmsToken is returned by the SDK for SMS verification for you to verify the text message verification code. For an Android client, sendVerifyCode is called to send the verification code. For an iOS client, sendVerifyCodeWithTimeout is called to send the verification code. For more information, see [Overview](https://help.aliyun.com/document_detail/400434.html).
   * 
   * This parameter is required.
   * 
   * @example
   * sddsbvdbvjd****
   */
  smsToken?: string;
  static names(): { [key: string]: string } {
    return {
      phoneNumber: 'PhoneNumber',
      smsCode: 'SmsCode',
      smsToken: 'SmsToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      phoneNumber: 'string',
      smsCode: 'string',
      smsToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifySmsCodeResponseBody extends $tea.Model {
  /**
   * @remarks
   * The response code.
   * 
   * *   If OK is returned, the request is successful.
   * *   For more information about other error codes, see [API response codes](https://help.aliyun.com/document_detail/85198.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8906582E-6722
   */
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

export class VerifySmsCodeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: VerifySmsCodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: VerifySmsCodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyWithFusionAuthTokenRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The unified verification token that is returned by the client SDKs.
   * 
   * This parameter is required.
   * 
   * @example
   * LD108enNdlsl*******sFLKCks1==
   */
  verifyToken?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      verifyToken: 'VerifyToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      verifyToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyWithFusionAuthTokenResponseBody extends $tea.Model {
  /**
   * @remarks
   * The response code. If OK is returned, the request is successful. Other values indicate that the request failed. For more information, see Error codes.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The returned data.
   */
  model?: VerifyWithFusionAuthTokenResponseBodyModel;
  /**
   * @remarks
   * The request ID, which is used to troubleshoot issues.
   * 
   * @example
   * CC3BB6D2-2FDF-4321-9DCE-B38165CE4C47
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values: true false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      model: 'Model',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      model: VerifyWithFusionAuthTokenResponseBodyModel,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyWithFusionAuthTokenResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: VerifyWithFusionAuthTokenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: VerifyWithFusionAuthTokenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckSmsVerifyCodeResponseBodyModel extends $tea.Model {
  /**
   * @remarks
   * The external ID.
   * 
   * @example
   * 1212312
   */
  outId?: string;
  /**
   * @remarks
   * The verification results. Valid values:
   * 
   * *   PASS: The verification is successful.
   * *   UNKNOWN: The verification failed.
   * 
   * @example
   * PASS
   */
  verifyResult?: string;
  static names(): { [key: string]: string } {
    return {
      outId: 'OutId',
      verifyResult: 'VerifyResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outId: 'string',
      verifyResult: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSchemeConfigResponseBodyModel extends $tea.Model {
  /**
   * @remarks
   * The service code.
   * 
   * @example
   * FA100000168468035
   */
  schemeCode?: string;
  static names(): { [key: string]: string } {
    return {
      schemeCode: 'SchemeCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      schemeCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVerifySchemeResponseBodyGateVerifySchemeDTO extends $tea.Model {
  /**
   * @remarks
   * The service code.
   * 
   * @example
   * FC10001287****
   */
  schemeCode?: string;
  static names(): { [key: string]: string } {
    return {
      schemeCode: 'SchemeCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      schemeCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVerifySchemeResponseBodySchemeQueryResultDTO extends $tea.Model {
  /**
   * @remarks
   * The key generated when you create a service in the console.
   * 
   * @example
   * ZDMARqPkyQzWVJjB/sB/+fCp5TA4lNsRnY7rEC+HfGsOIOk1Brj8UyXFW2RBYIWqLieCSo8ZypEaEj+h9rLd3FgpXAjGYDfmOperod6jPUUwFHhBObxK+HuKVoi2jOqN7aDOlyPyGcATyq3BDdlf922JmnFLT8Hvnu4qgzzCZk0LXWTb0XVPnm5/fHUGHEA2Q+aTrGkaWcHjmTDqQ7BtvrAIIcJJkCJu4i1aeU++/0EzGWap4mcb2VhKROBs****
   */
  appEncryptInfo?: string;
  static names(): { [key: string]: string } {
    return {
      appEncryptInfo: 'AppEncryptInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appEncryptInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAuthTokenResponseBodyTokenInfo extends $tea.Model {
  /**
   * @remarks
   * The business authentication token.
   * 
   * >  AccessToken is valid for 10 minutes and can be used repeatedly within its validity period.
   * 
   * @example
   * agag****
   */
  accessToken?: string;
  /**
   * @remarks
   * The API authentication token.
   * 
   * >  JwtToken is valid for 1 hour and can be used repeatedly within its validity period.
   * 
   * @example
   * aweghd****
   */
  jwtToken?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      jwtToken: 'JwtToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      jwtToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAuthorizationUrlResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The authorization URL.
   * 
   * @example
   * https://render.****.com/p/s/web-call-minapp/auth-bao?page=commauth/index&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJiaXpUeXBlIjoiQ29tbUF1dGgiLCJiaXpJZCI6IjVmNWZjNjAzZDQzMTQ0MWZiYTZiNjYzM2QyMjIyNzU0IiwiZXhwIjoxNjA4MTkxODQxfQ.5IvBj2nKgr60APtotaIB13vtPVrdsPQ6avIfWxte1pA&_env=prod
   */
  authorizationUrl?: string;
  static names(): { [key: string]: string } {
    return {
      authorizationUrl: 'AuthorizationUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMobileResponseBodyGetMobileResultDTO extends $tea.Model {
  /**
   * @remarks
   * The phone number,
   * 
   * @example
   * 13900001234
   */
  mobile?: string;
  static names(): { [key: string]: string } {
    return {
      mobile: 'Mobile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mobile: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPhoneWithTokenResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The phone number.
   * 
   * @example
   * 13900001234
   */
  mobile?: string;
  static names(): { [key: string]: string } {
    return {
      mobile: 'Mobile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mobile: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSmsAuthTokensResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The business token.
   * 
   * @example
   * FZSMeRbLCiapIBo65NXNHvGbkGDmhs23XWTZDOtZN0g5n/kqSc2FU27Gc9YhGb6dNn9/L9ZXSYiIB6C6LMLQJjyXjRzt5v6pzZXqnjO4cSuPWYUxJvdc8l8OpucEYe8Mx17HxsHDzj0VC4D5+atcrTpJE6jQ7e2QVNjZIPMwsfxELjQS7c****
   */
  bizToken?: string;
  /**
   * @remarks
   * The time when the token expired. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1631526326000
   */
  expireTime?: number;
  /**
   * @remarks
   * The AccessKey ID.
   * 
   * @example
   * STS.NSqC****
   */
  stsAccessKeyId?: string;
  /**
   * @remarks
   * The AccessKey secret.
   * 
   * @example
   * VboZ4xbZ****
   */
  stsAccessKeySecret?: string;
  /**
   * @remarks
   * The security token.
   * 
   * @example
   * CAISiQJ1q6Ft5B2yfSjIr5DEDP/BurtW9PemMEfBrEpsOr5K17XjuDz2IHtLfXFsBusYt/U2nWpX5v4clrxIToR7SFbFY9pb6ZhazBisebDGv8HtR3TcFEjiSwapEBfe8JL4QYeQFaHwGJqEb1TDiVUAo9/TfimjWFqIKICAjYUdAP0cQgi/a0gtZr4UXHwAzvUXLnzML/2gHwf3i27LdipStxF7lHl05NbUoKTeyGKH3AGqlLVF9tite8f9NpczBvolDYfpht4RX7HazStd5yJN8KpLl6Fe8V/FxIrGXAAJv0rdbbOFq4Q1c18hOLJHAKtfsvXmlPNpsevfmpnsx****
   */
  stsToken?: string;
  static names(): { [key: string]: string } {
    return {
      bizToken: 'BizToken',
      expireTime: 'ExpireTime',
      stsAccessKeyId: 'StsAccessKeyId',
      stsAccessKeySecret: 'StsAccessKeySecret',
      stsToken: 'StsToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizToken: 'string',
      expireTime: 'number',
      stsAccessKeyId: 'string',
      stsAccessKeySecret: 'string',
      stsToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JyCreateVerifySchemeResponseBodyGateVerifySchemeData extends $tea.Model {
  schemeCode?: string;
  static names(): { [key: string]: string } {
    return {
      schemeCode: 'SchemeCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      schemeCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JyQueryAppInfoBySceneCodeResponseBodyData extends $tea.Model {
  cmAppId?: string;
  cmAppKey?: string;
  ctAppId?: string;
  ctAppKey?: string;
  static names(): { [key: string]: string } {
    return {
      cmAppId: 'CmAppId',
      cmAppKey: 'CmAppKey',
      ctAppId: 'CtAppId',
      ctAppKey: 'CtAppKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cmAppId: 'string',
      cmAppKey: 'string',
      ctAppId: 'string',
      ctAppKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryGateVerifyBillingPublicResponseBodyDataSceneBillingList extends $tea.Model {
  /**
   * @remarks
   * The billable items.
   * 
   * @example
   * 74
   */
  add?: string;
  /**
   * @remarks
   * The fees generated for the verification service. Unitrogen: CNY.
   * 
   * @example
   * 1.48
   */
  amount?: string;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * Aliyun
   */
  appName?: string;
  /**
   * @remarks
   * The verification method.
   * 
   * @example
   * Verification of local phone number
   */
  itemName?: string;
  /**
   * @remarks
   * The service code.
   * 
   * @example
   * FC100000038194004
   */
  sceneCode?: string;
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * Alibaba Cloud Communications
   */
  sceneName?: string;
  /**
   * @remarks
   * The unit price. Unit: CNY.
   * 
   * @example
   * 0.02
   */
  singlePrice?: string;
  static names(): { [key: string]: string } {
    return {
      add: 'Add',
      amount: 'Amount',
      appName: 'AppName',
      itemName: 'ItemName',
      sceneCode: 'SceneCode',
      sceneName: 'SceneName',
      singlePrice: 'SinglePrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      add: 'string',
      amount: 'string',
      appName: 'string',
      itemName: 'string',
      sceneCode: 'string',
      sceneName: 'string',
      singlePrice: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryGateVerifyBillingPublicResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The fees generated for all verification services. Unitrogen: CNY.
   * 
   * @example
   * 1234
   */
  amountSum?: string;
  /**
   * @remarks
   * The details of fees.
   */
  sceneBillingList?: QueryGateVerifyBillingPublicResponseBodyDataSceneBillingList[];
  static names(): { [key: string]: string } {
    return {
      amountSum: 'AmountSum',
      sceneBillingList: 'SceneBillingList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amountSum: 'string',
      sceneBillingList: { 'type': 'array', 'itemType': QueryGateVerifyBillingPublicResponseBodyDataSceneBillingList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryGateVerifyStatisticPublicResponseBodyDataDayStatistic extends $tea.Model {
  /**
   * @remarks
   * The date. This field is accurate to the day. The value of this field is in the YYYYMMDD format. Example: 20220103.
   * 
   * @example
   * 20220103
   */
  statisticDateStr?: string;
  /**
   * @remarks
   * The failed calls on the day.
   * 
   * @example
   * 20
   */
  totalFail?: number;
  /**
   * @remarks
   * The successful calls on the day.
   * 
   * @example
   * 0
   */
  totalSuccess?: number;
  /**
   * @remarks
   * The unknown calls on the day.
   * 
   * @example
   * 0
   */
  totalUnknown?: number;
  static names(): { [key: string]: string } {
    return {
      statisticDateStr: 'StatisticDateStr',
      totalFail: 'TotalFail',
      totalSuccess: 'TotalSuccess',
      totalUnknown: 'TotalUnknown',
    };
  }

  static types(): { [key: string]: any } {
    return {
      statisticDateStr: 'string',
      totalFail: 'number',
      totalSuccess: 'number',
      totalUnknown: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryGateVerifyStatisticPublicResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The information about the daily calls.
   */
  dayStatistic?: QueryGateVerifyStatisticPublicResponseBodyDataDayStatistic[];
  /**
   * @remarks
   * The total calls.
   * 
   * @example
   * 20
   */
  total?: number;
  /**
   * @remarks
   * The failed calls.
   * 
   * @example
   * 20
   */
  totalFail?: number;
  /**
   * @remarks
   * The successful calls.
   * 
   * @example
   * 0
   */
  totalSuccess?: number;
  /**
   * @remarks
   * The unknown calls.
   * 
   * @example
   * 0
   */
  totalUnknown?: number;
  static names(): { [key: string]: string } {
    return {
      dayStatistic: 'DayStatistic',
      total: 'Total',
      totalFail: 'TotalFail',
      totalSuccess: 'TotalSuccess',
      totalUnknown: 'TotalUnknown',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dayStatistic: { 'type': 'array', 'itemType': QueryGateVerifyStatisticPublicResponseBodyDataDayStatistic },
      total: 'number',
      totalFail: 'number',
      totalSuccess: 'number',
      totalUnknown: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySendDetailsResponseBodyModel extends $tea.Model {
  /**
   * @remarks
   * The content of the text message.
   * 
   * @example
   * 203160
   */
  content?: string;
  /**
   * @remarks
   * The status code returned by the carrier.
   * 
   * *   If the text message was delivered, "DELIVERED" is returned.
   * *   If the text message failed to be sent, see [Error codes](https://help.aliyun.com/document_detail/101347.html?spm=a2c4g.419277.0.i8) for more information.
   * 
   * @example
   * DELIVERED
   */
  errCode?: string;
  /**
   * @remarks
   * The extension field.
   * 
   * @example
   * 12131231
   */
  outId?: string;
  /**
   * @remarks
   * The phone number.
   * 
   * @example
   * 1390000****
   */
  phoneNum?: string;
  /**
   * @remarks
   * The date and time when the text message was received.
   * 
   * @example
   * 2019-01-08 16:44:13
   */
  receiveDate?: string;
  /**
   * @remarks
   * The date when the text message was sent. You can query text messages that were sent within the last 30 days.
   * 
   * The date is in the yyyyMMdd format. Example: 20181225.
   * 
   * @example
   * 2019-01-08 16:44:13
   */
  sendDate?: string;
  /**
   * @remarks
   * The delivery status of the text message.
   * 
   * *   1: A delivery receipt is to be sent.
   * *   2: The text message failed to be sent.
   * *   3: The text message was sent.
   * 
   * @example
   * 3
   */
  sendStatus?: number;
  /**
   * @remarks
   * The code of the text message template.
   * 
   * Log on to the SMS console. In the left-side navigation pane, click **Go China** or **Go Globe**. You can view the text message template code in the **Template Code** column on the **Message Templates** tab.
   * 
   * >  The text message templates must be created on the Go Globe page and approved.
   * 
   * @example
   * SMS_12231****
   */
  templateCode?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      errCode: 'ErrCode',
      outId: 'OutId',
      phoneNum: 'PhoneNum',
      receiveDate: 'ReceiveDate',
      sendDate: 'SendDate',
      sendStatus: 'SendStatus',
      templateCode: 'TemplateCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      errCode: 'string',
      outId: 'string',
      phoneNum: 'string',
      receiveDate: 'string',
      sendDate: 'string',
      sendStatus: 'number',
      templateCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendSmsVerifyCodeResponseBodyModel extends $tea.Model {
  /**
   * @remarks
   * The business ID.
   * 
   * @example
   * 112231421412414124123^4
   */
  bizId?: string;
  /**
   * @remarks
   * The external ID.
   * 
   * @example
   * 1231231313
   */
  outId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * API-reqelekrqkllkkewrlwrjlsdfsdf
   */
  requestId?: string;
  /**
   * @remarks
   * The verification code.
   * 
   * @example
   * 42324
   */
  verifyCode?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      outId: 'OutId',
      requestId: 'RequestId',
      verifyCode: 'VerifyCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      outId: 'string',
      requestId: 'string',
      verifyCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyMobileResponseBodyGateVerifyResultDTO extends $tea.Model {
  /**
   * @remarks
   * The verification ID.
   * 
   * @example
   * 121343241
   */
  verifyId?: string;
  /**
   * @remarks
   * The verification results. Valid values:
   * 
   * *   **PASS: The input phone number is consistent with the phone number that you use.**
   * *   **REJECT: The input phone number is different from the phone number that you use.**
   * *   **UNKNOWN: The system cannot judge whether the input phone number is consistent with the phone number that you use.
   * 
   * @example
   * PASS
   */
  verifyResult?: string;
  static names(): { [key: string]: string } {
    return {
      verifyId: 'VerifyId',
      verifyResult: 'VerifyResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      verifyId: 'string',
      verifyResult: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyPhoneWithTokenResponseBodyGateVerify extends $tea.Model {
  /**
   * @remarks
   * The external ID.
   * 
   * @example
   * 12134****
   */
  verifyId?: string;
  /**
   * @remarks
   * The verification results. Valid values:
   * 
   * *   PASS: The input phone number is consistent with the phone number used in HTML5 pages.
   * *   REJECT: The input phone number is different from the phone number used in HTML5 pages.
   * *   UNKNOWN: The system cannot judge whether the input phone number is consistent with the phone number used in HTML5 pages.
   * 
   * @example
   * PASS
   */
  verifyResult?: string;
  static names(): { [key: string]: string } {
    return {
      verifyId: 'VerifyId',
      verifyResult: 'VerifyResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      verifyId: 'string',
      verifyResult: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyWithFusionAuthTokenResponseBodyModel extends $tea.Model {
  /**
   * @remarks
   * The phone number, which is returned when the verification is successful.
   * 
   * @example
   * 180********
   */
  phoneNumber?: string;
  /**
   * @remarks
   * The phone number score, which is generated only after the phone number scoring node is enabled and the verification is successful. The higher the score, the more risky the phone number. Valid values: 0 to 100.
   * 
   * @example
   * 20
   */
  phoneScore?: number;
  /**
   * @remarks
   * The verification result. Valid values: PASS and UNKNOWN.
   * 
   * @example
   * PASS
   */
  verifyResult?: string;
  static names(): { [key: string]: string } {
    return {
      phoneNumber: 'PhoneNumber',
      phoneScore: 'PhoneScore',
      verifyResult: 'VerifyResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      phoneNumber: 'string',
      phoneScore: 'number',
      verifyResult: 'string',
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
    this._endpointRule = "central";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("dypnsapi", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Verifies SMS verification codes.
   * 
   * @param request - CheckSmsVerifyCodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckSmsVerifyCodeResponse
   */
  async checkSmsVerifyCodeWithOptions(request: CheckSmsVerifyCodeRequest, runtime: $Util.RuntimeOptions): Promise<CheckSmsVerifyCodeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.caseAuthPolicy)) {
      query["CaseAuthPolicy"] = request.caseAuthPolicy;
    }

    if (!Util.isUnset(request.countryCode)) {
      query["CountryCode"] = request.countryCode;
    }

    if (!Util.isUnset(request.outId)) {
      query["OutId"] = request.outId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.phoneNumber)) {
      query["PhoneNumber"] = request.phoneNumber;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.schemeName)) {
      query["SchemeName"] = request.schemeName;
    }

    if (!Util.isUnset(request.verifyCode)) {
      query["VerifyCode"] = request.verifyCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CheckSmsVerifyCode",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckSmsVerifyCodeResponse>(await this.callApi(params, req, runtime), new CheckSmsVerifyCodeResponse({}));
  }

  /**
   * Verifies SMS verification codes.
   * 
   * @param request - CheckSmsVerifyCodeRequest
   * @returns CheckSmsVerifyCodeResponse
   */
  async checkSmsVerifyCode(request: CheckSmsVerifyCodeRequest): Promise<CheckSmsVerifyCodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkSmsVerifyCodeWithOptions(request, runtime);
  }

  /**
   * Creates a code for a converged communication authentication service.
   * 
   * @param request - CreateSchemeConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSchemeConfigResponse
   */
  async createSchemeConfigWithOptions(request: CreateSchemeConfigRequest, runtime: $Util.RuntimeOptions): Promise<CreateSchemeConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.androidPackageName)) {
      query["AndroidPackageName"] = request.androidPackageName;
    }

    if (!Util.isUnset(request.androidPackageSign)) {
      query["AndroidPackageSign"] = request.androidPackageSign;
    }

    if (!Util.isUnset(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!Util.isUnset(request.h5Origin)) {
      query["H5Origin"] = request.h5Origin;
    }

    if (!Util.isUnset(request.h5Url)) {
      query["H5Url"] = request.h5Url;
    }

    if (!Util.isUnset(request.iosBundleId)) {
      query["IosBundleId"] = request.iosBundleId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.platform)) {
      query["Platform"] = request.platform;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.schemeName)) {
      query["SchemeName"] = request.schemeName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateSchemeConfig",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateSchemeConfigResponse>(await this.callApi(params, req, runtime), new CreateSchemeConfigResponse({}));
  }

  /**
   * Creates a code for a converged communication authentication service.
   * 
   * @param request - CreateSchemeConfigRequest
   * @returns CreateSchemeConfigResponse
   */
  async createSchemeConfig(request: CreateSchemeConfigRequest): Promise<CreateSchemeConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSchemeConfigWithOptions(request, runtime);
  }

  /**
   * Creates a verification service.
   * 
   * @remarks
   * ### [](#qps)QPS limits
   * You can call this operation up to 100 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - CreateVerifySchemeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateVerifySchemeResponse
   */
  async createVerifySchemeWithOptions(request: CreateVerifySchemeRequest, runtime: $Util.RuntimeOptions): Promise<CreateVerifySchemeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!Util.isUnset(request.authType)) {
      query["AuthType"] = request.authType;
    }

    if (!Util.isUnset(request.bundleId)) {
      query["BundleId"] = request.bundleId;
    }

    if (!Util.isUnset(request.cmApiCode)) {
      query["CmApiCode"] = request.cmApiCode;
    }

    if (!Util.isUnset(request.ctApiCode)) {
      query["CtApiCode"] = request.ctApiCode;
    }

    if (!Util.isUnset(request.cuApiCode)) {
      query["CuApiCode"] = request.cuApiCode;
    }

    if (!Util.isUnset(request.email)) {
      query["Email"] = request.email;
    }

    if (!Util.isUnset(request.hmAppIdentifier)) {
      query["HmAppIdentifier"] = request.hmAppIdentifier;
    }

    if (!Util.isUnset(request.hmPackageName)) {
      query["HmPackageName"] = request.hmPackageName;
    }

    if (!Util.isUnset(request.hmSignName)) {
      query["HmSignName"] = request.hmSignName;
    }

    if (!Util.isUnset(request.ipWhiteList)) {
      query["IpWhiteList"] = request.ipWhiteList;
    }

    if (!Util.isUnset(request.origin)) {
      query["Origin"] = request.origin;
    }

    if (!Util.isUnset(request.osType)) {
      query["OsType"] = request.osType;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.packName)) {
      query["PackName"] = request.packName;
    }

    if (!Util.isUnset(request.packSign)) {
      query["PackSign"] = request.packSign;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.sceneType)) {
      query["SceneType"] = request.sceneType;
    }

    if (!Util.isUnset(request.schemeName)) {
      query["SchemeName"] = request.schemeName;
    }

    if (!Util.isUnset(request.smsSignName)) {
      query["SmsSignName"] = request.smsSignName;
    }

    if (!Util.isUnset(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateVerifyScheme",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateVerifySchemeResponse>(await this.callApi(params, req, runtime), new CreateVerifySchemeResponse({}));
  }

  /**
   * Creates a verification service.
   * 
   * @remarks
   * ### [](#qps)QPS limits
   * You can call this operation up to 100 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - CreateVerifySchemeRequest
   * @returns CreateVerifySchemeResponse
   */
  async createVerifyScheme(request: CreateVerifySchemeRequest): Promise<CreateVerifySchemeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createVerifySchemeWithOptions(request, runtime);
  }

  /**
   * Deletes a verification service.
   * 
   * @remarks
   * ### [](#qps)QPS limits
   * You can call this operation up to 100 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DeleteVerifySchemeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteVerifySchemeResponse
   */
  async deleteVerifySchemeWithOptions(request: DeleteVerifySchemeRequest, runtime: $Util.RuntimeOptions): Promise<DeleteVerifySchemeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.customerId)) {
      query["CustomerId"] = request.customerId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.schemeCode)) {
      query["SchemeCode"] = request.schemeCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteVerifyScheme",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteVerifySchemeResponse>(await this.callApi(params, req, runtime), new DeleteVerifySchemeResponse({}));
  }

  /**
   * Deletes a verification service.
   * 
   * @remarks
   * ### [](#qps)QPS limits
   * You can call this operation up to 100 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DeleteVerifySchemeRequest
   * @returns DeleteVerifySchemeResponse
   */
  async deleteVerifyScheme(request: DeleteVerifySchemeRequest): Promise<DeleteVerifySchemeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteVerifySchemeWithOptions(request, runtime);
  }

  /**
   * Queries the details of a verification service.
   * 
   * @remarks
   * ### [](#qps)QPS limits
   * You can call this operation up to 100 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeVerifySchemeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVerifySchemeResponse
   */
  async describeVerifySchemeWithOptions(request: DescribeVerifySchemeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVerifySchemeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.customerId)) {
      query["CustomerId"] = request.customerId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.schemeCode)) {
      query["SchemeCode"] = request.schemeCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeVerifyScheme",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeVerifySchemeResponse>(await this.callApi(params, req, runtime), new DescribeVerifySchemeResponse({}));
  }

  /**
   * Queries the details of a verification service.
   * 
   * @remarks
   * ### [](#qps)QPS limits
   * You can call this operation up to 100 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeVerifySchemeRequest
   * @returns DescribeVerifySchemeResponse
   */
  async describeVerifyScheme(request: DescribeVerifySchemeRequest): Promise<DescribeVerifySchemeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVerifySchemeWithOptions(request, runtime);
  }

  /**
   * Obtains the authorization token used for the authentication of the phone number verification for HTML5 pages. You can obtain AccessToken and JwtToken after a successful call.
   * 
   * @remarks
   * ### [](#)Preparations
   * You must register an Alibaba Cloud account, obtain an Alibaba Cloud AccessKey pair, and create a verification service. For more information, see [Use the phone number verification feature for HTML5 pages](https://help.aliyun.com/document_detail/169786.html).
   * ### [](#qps)QPS limits
   * You can call this operation up to 1,000 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - GetAuthTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAuthTokenResponse
   */
  async getAuthTokenWithOptions(request: GetAuthTokenRequest, runtime: $Util.RuntimeOptions): Promise<GetAuthTokenResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!Util.isUnset(request.cmApiCode)) {
      query["CmApiCode"] = request.cmApiCode;
    }

    if (!Util.isUnset(request.ctApiCode)) {
      query["CtApiCode"] = request.ctApiCode;
    }

    if (!Util.isUnset(request.cuApiCode)) {
      query["CuApiCode"] = request.cuApiCode;
    }

    if (!Util.isUnset(request.origin)) {
      query["Origin"] = request.origin;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.sceneCode)) {
      query["SceneCode"] = request.sceneCode;
    }

    if (!Util.isUnset(request.url)) {
      query["Url"] = request.url;
    }

    if (!Util.isUnset(request.version)) {
      query["Version"] = request.version;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAuthToken",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAuthTokenResponse>(await this.callApi(params, req, runtime), new GetAuthTokenResponse({}));
  }

  /**
   * Obtains the authorization token used for the authentication of the phone number verification for HTML5 pages. You can obtain AccessToken and JwtToken after a successful call.
   * 
   * @remarks
   * ### [](#)Preparations
   * You must register an Alibaba Cloud account, obtain an Alibaba Cloud AccessKey pair, and create a verification service. For more information, see [Use the phone number verification feature for HTML5 pages](https://help.aliyun.com/document_detail/169786.html).
   * ### [](#qps)QPS limits
   * You can call this operation up to 1,000 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - GetAuthTokenRequest
   * @returns GetAuthTokenResponse
   */
  async getAuthToken(request: GetAuthTokenRequest): Promise<GetAuthTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAuthTokenWithOptions(request, runtime);
  }

  /**
   * Obtains the URL for the Alipay account authorization.
   * 
   * @remarks
   * ### [](#)Preparations
   * You must register an Alibaba Cloud account and obtain an Alibaba Cloud AccessKey pair. For more information, see [Process of communication authorization](https://help.aliyun.com/document_detail/196922.html).
   * ### [](#qps)QPS limits
   * You can call this operation up to 1,000 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - GetAuthorizationUrlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAuthorizationUrlResponse
   */
  async getAuthorizationUrlWithOptions(request: GetAuthorizationUrlRequest, runtime: $Util.RuntimeOptions): Promise<GetAuthorizationUrlResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.phoneNo)) {
      query["PhoneNo"] = request.phoneNo;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.schemeId)) {
      query["SchemeId"] = request.schemeId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAuthorizationUrl",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAuthorizationUrlResponse>(await this.callApi(params, req, runtime), new GetAuthorizationUrlResponse({}));
  }

  /**
   * Obtains the URL for the Alipay account authorization.
   * 
   * @remarks
   * ### [](#)Preparations
   * You must register an Alibaba Cloud account and obtain an Alibaba Cloud AccessKey pair. For more information, see [Process of communication authorization](https://help.aliyun.com/document_detail/196922.html).
   * ### [](#qps)QPS limits
   * You can call this operation up to 1,000 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - GetAuthorizationUrlRequest
   * @returns GetAuthorizationUrlResponse
   */
  async getAuthorizationUrl(request: GetAuthorizationUrlRequest): Promise<GetAuthorizationUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAuthorizationUrlWithOptions(request, runtime);
  }

  /**
   * Obtains the verification results by using the token that is obtained from the client SDKs.
   * 
   * @param request - GetFusionAuthTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFusionAuthTokenResponse
   */
  async getFusionAuthTokenWithOptions(request: GetFusionAuthTokenRequest, runtime: $Util.RuntimeOptions): Promise<GetFusionAuthTokenResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bundleId)) {
      query["BundleId"] = request.bundleId;
    }

    if (!Util.isUnset(request.durationSeconds)) {
      query["DurationSeconds"] = request.durationSeconds;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.packageName)) {
      query["PackageName"] = request.packageName;
    }

    if (!Util.isUnset(request.packageSign)) {
      query["PackageSign"] = request.packageSign;
    }

    if (!Util.isUnset(request.platform)) {
      query["Platform"] = request.platform;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.schemeCode)) {
      query["SchemeCode"] = request.schemeCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetFusionAuthToken",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetFusionAuthTokenResponse>(await this.callApi(params, req, runtime), new GetFusionAuthTokenResponse({}));
  }

  /**
   * Obtains the verification results by using the token that is obtained from the client SDKs.
   * 
   * @param request - GetFusionAuthTokenRequest
   * @returns GetFusionAuthTokenResponse
   */
  async getFusionAuthToken(request: GetFusionAuthTokenRequest): Promise<GetFusionAuthTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getFusionAuthTokenWithOptions(request, runtime);
  }

  /**
   * Obtains a phone number for one-click logon.
   * 
   * @remarks
   * ### [](#)Preparations
   * You must register an Alibaba Cloud account, obtain an Alibaba Cloud AccessKey pair, and create a verification service. For more information, see [Getting Started](https://help.aliyun.com/document_detail/84541.html).
   * >  This operation is applicable only to one-click logon or registration. You can call this operation only after you confirm the authorization on the authorization page provided by the SDK for one-click logon. You are prohibited from simulating or bypassing the authorization process. Alibaba Cloud reserves the right to terminate our services and take legal actions against such violations.
   * ### [](#qps)QPS limits
   * You can call this operation up to 5,000 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - GetMobileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMobileResponse
   */
  async getMobileWithOptions(request: GetMobileRequest, runtime: $Util.RuntimeOptions): Promise<GetMobileResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accessToken)) {
      query["AccessToken"] = request.accessToken;
    }

    if (!Util.isUnset(request.outId)) {
      query["OutId"] = request.outId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetMobile",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetMobileResponse>(await this.callApi(params, req, runtime), new GetMobileResponse({}));
  }

  /**
   * Obtains a phone number for one-click logon.
   * 
   * @remarks
   * ### [](#)Preparations
   * You must register an Alibaba Cloud account, obtain an Alibaba Cloud AccessKey pair, and create a verification service. For more information, see [Getting Started](https://help.aliyun.com/document_detail/84541.html).
   * >  This operation is applicable only to one-click logon or registration. You can call this operation only after you confirm the authorization on the authorization page provided by the SDK for one-click logon. You are prohibited from simulating or bypassing the authorization process. Alibaba Cloud reserves the right to terminate our services and take legal actions against such violations.
   * ### [](#qps)QPS limits
   * You can call this operation up to 5,000 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - GetMobileRequest
   * @returns GetMobileResponse
   */
  async getMobile(request: GetMobileRequest): Promise<GetMobileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMobileWithOptions(request, runtime);
  }

  /**
   * Obtains a phone number for one-click logon. This operation is exclusive to HTML5 pages.
   * 
   * @remarks
   * ### [](#)Preparations
   * You must register an Alibaba Cloud account, obtain an Alibaba Cloud AccessKey pair, and create a verification service. For more information, see [Getting Started](https://help.aliyun.com/document_detail/84541.html).
   * >  This operation is applicable only to one-click logon or registration in HTML5 pages. You can call this operation only after you confirm the authorization on the authorization page provided by the JavaScript SDK. You are prohibited from simulating or bypassing the authorization process. Alibaba Cloud reserves the right to terminate our services and take legal actions against such violations.
   * ### [](#qps)QPS limits
   * You can call this operation up to 500 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - GetPhoneWithTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPhoneWithTokenResponse
   */
  async getPhoneWithTokenWithOptions(request: GetPhoneWithTokenRequest, runtime: $Util.RuntimeOptions): Promise<GetPhoneWithTokenResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.spToken)) {
      query["SpToken"] = request.spToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetPhoneWithToken",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetPhoneWithTokenResponse>(await this.callApi(params, req, runtime), new GetPhoneWithTokenResponse({}));
  }

  /**
   * Obtains a phone number for one-click logon. This operation is exclusive to HTML5 pages.
   * 
   * @remarks
   * ### [](#)Preparations
   * You must register an Alibaba Cloud account, obtain an Alibaba Cloud AccessKey pair, and create a verification service. For more information, see [Getting Started](https://help.aliyun.com/document_detail/84541.html).
   * >  This operation is applicable only to one-click logon or registration in HTML5 pages. You can call this operation only after you confirm the authorization on the authorization page provided by the JavaScript SDK. You are prohibited from simulating or bypassing the authorization process. Alibaba Cloud reserves the right to terminate our services and take legal actions against such violations.
   * ### [](#qps)QPS limits
   * You can call this operation up to 500 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - GetPhoneWithTokenRequest
   * @returns GetPhoneWithTokenResponse
   */
  async getPhoneWithToken(request: GetPhoneWithTokenRequest): Promise<GetPhoneWithTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPhoneWithTokenWithOptions(request, runtime);
  }

  /**
   * Obtains the authorization token for an SMS verification code.
   * 
   * @remarks
   * ### [](#)Preparations
   * You must register an Alibaba Cloud account, obtain an Alibaba Cloud AccessKey pair, and create a verification service. For more information, see [Use the SMS verification feature](https://help.aliyun.com/document_detail/313209.html).
   * ### [](#qps)QPS limits
   * You can call this operation up to 5,000 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - GetSmsAuthTokensRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSmsAuthTokensResponse
   */
  async getSmsAuthTokensWithOptions(request: GetSmsAuthTokensRequest, runtime: $Util.RuntimeOptions): Promise<GetSmsAuthTokensResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bundleId)) {
      query["BundleId"] = request.bundleId;
    }

    if (!Util.isUnset(request.expire)) {
      query["Expire"] = request.expire;
    }

    if (!Util.isUnset(request.osType)) {
      query["OsType"] = request.osType;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.packageName)) {
      query["PackageName"] = request.packageName;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.sceneCode)) {
      query["SceneCode"] = request.sceneCode;
    }

    if (!Util.isUnset(request.signName)) {
      query["SignName"] = request.signName;
    }

    if (!Util.isUnset(request.smsCodeExpire)) {
      query["SmsCodeExpire"] = request.smsCodeExpire;
    }

    if (!Util.isUnset(request.smsTemplateCode)) {
      query["SmsTemplateCode"] = request.smsTemplateCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetSmsAuthTokens",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetSmsAuthTokensResponse>(await this.callApi(params, req, runtime), new GetSmsAuthTokensResponse({}));
  }

  /**
   * Obtains the authorization token for an SMS verification code.
   * 
   * @remarks
   * ### [](#)Preparations
   * You must register an Alibaba Cloud account, obtain an Alibaba Cloud AccessKey pair, and create a verification service. For more information, see [Use the SMS verification feature](https://help.aliyun.com/document_detail/313209.html).
   * ### [](#qps)QPS limits
   * You can call this operation up to 5,000 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - GetSmsAuthTokensRequest
   * @returns GetSmsAuthTokensResponse
   */
  async getSmsAuthTokens(request: GetSmsAuthTokensRequest): Promise<GetSmsAuthTokensResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSmsAuthTokensWithOptions(request, runtime);
  }

  /**
   * 创建方案号（为极意临时定制）
   * 
   * @deprecated OpenAPI JyCreateVerifyScheme is deprecated, please use Dypnsapi::2017-05-25::CreateVerifyScheme instead.
   * 
   * @param request - JyCreateVerifySchemeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns JyCreateVerifySchemeResponse
   */
  // Deprecated
  async jyCreateVerifySchemeWithOptions(request: JyCreateVerifySchemeRequest, runtime: $Util.RuntimeOptions): Promise<JyCreateVerifySchemeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!Util.isUnset(request.bundleId)) {
      query["BundleId"] = request.bundleId;
    }

    if (!Util.isUnset(request.cmApiCode)) {
      query["CmApiCode"] = request.cmApiCode;
    }

    if (!Util.isUnset(request.ctApiCode)) {
      query["CtApiCode"] = request.ctApiCode;
    }

    if (!Util.isUnset(request.cuApiCode)) {
      query["CuApiCode"] = request.cuApiCode;
    }

    if (!Util.isUnset(request.osType)) {
      query["OsType"] = request.osType;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.packName)) {
      query["PackName"] = request.packName;
    }

    if (!Util.isUnset(request.packSign)) {
      query["PackSign"] = request.packSign;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.schemeName)) {
      query["SchemeName"] = request.schemeName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "JyCreateVerifyScheme",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<JyCreateVerifySchemeResponse>(await this.callApi(params, req, runtime), new JyCreateVerifySchemeResponse({}));
  }

  /**
   * 创建方案号（为极意临时定制）
   * 
   * @deprecated OpenAPI JyCreateVerifyScheme is deprecated, please use Dypnsapi::2017-05-25::CreateVerifyScheme instead.
   * 
   * @param request - JyCreateVerifySchemeRequest
   * @returns JyCreateVerifySchemeResponse
   */
  // Deprecated
  async jyCreateVerifyScheme(request: JyCreateVerifySchemeRequest): Promise<JyCreateVerifySchemeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.jyCreateVerifySchemeWithOptions(request, runtime);
  }

  /**
   * 根据方案号查询运营商APP信（为极意临时定制）
   * 
   * @deprecated OpenAPI JyQueryAppInfoBySceneCode is deprecated, please use Dypnsapi::2017-05-25::QueryAppInfoBySceneCode instead.
   * 
   * @param request - JyQueryAppInfoBySceneCodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns JyQueryAppInfoBySceneCodeResponse
   */
  // Deprecated
  async jyQueryAppInfoBySceneCodeWithOptions(request: JyQueryAppInfoBySceneCodeRequest, runtime: $Util.RuntimeOptions): Promise<JyQueryAppInfoBySceneCodeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.sceneCode)) {
      query["SceneCode"] = request.sceneCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "JyQueryAppInfoBySceneCode",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<JyQueryAppInfoBySceneCodeResponse>(await this.callApi(params, req, runtime), new JyQueryAppInfoBySceneCodeResponse({}));
  }

  /**
   * 根据方案号查询运营商APP信（为极意临时定制）
   * 
   * @deprecated OpenAPI JyQueryAppInfoBySceneCode is deprecated, please use Dypnsapi::2017-05-25::QueryAppInfoBySceneCode instead.
   * 
   * @param request - JyQueryAppInfoBySceneCodeRequest
   * @returns JyQueryAppInfoBySceneCodeResponse
   */
  // Deprecated
  async jyQueryAppInfoBySceneCode(request: JyQueryAppInfoBySceneCodeRequest): Promise<JyQueryAppInfoBySceneCodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.jyQueryAppInfoBySceneCodeWithOptions(request, runtime);
  }

  /**
   * Queries the fees generated by a verification service.
   * 
   * @remarks
   * ### [](#qps)QPS limits
   * You can call this operation up to 500 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - QueryGateVerifyBillingPublicRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryGateVerifyBillingPublicResponse
   */
  async queryGateVerifyBillingPublicWithOptions(request: QueryGateVerifyBillingPublicRequest, runtime: $Util.RuntimeOptions): Promise<QueryGateVerifyBillingPublicResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.authenticationType)) {
      query["AuthenticationType"] = request.authenticationType;
    }

    if (!Util.isUnset(request.month)) {
      query["Month"] = request.month;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryGateVerifyBillingPublic",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryGateVerifyBillingPublicResponse>(await this.callApi(params, req, runtime), new QueryGateVerifyBillingPublicResponse({}));
  }

  /**
   * Queries the fees generated by a verification service.
   * 
   * @remarks
   * ### [](#qps)QPS limits
   * You can call this operation up to 500 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - QueryGateVerifyBillingPublicRequest
   * @returns QueryGateVerifyBillingPublicResponse
   */
  async queryGateVerifyBillingPublic(request: QueryGateVerifyBillingPublicRequest): Promise<QueryGateVerifyBillingPublicResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryGateVerifyBillingPublicWithOptions(request, runtime);
  }

  /**
   * Queries the calls of Phone Number Verification Service.
   * 
   * @remarks
   * ### [](#qps)QPS limits
   * You can call this operation up to 500 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - QueryGateVerifyStatisticPublicRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryGateVerifyStatisticPublicResponse
   */
  async queryGateVerifyStatisticPublicWithOptions(request: QueryGateVerifyStatisticPublicRequest, runtime: $Util.RuntimeOptions): Promise<QueryGateVerifyStatisticPublicResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.authenticationType)) {
      query["AuthenticationType"] = request.authenticationType;
    }

    if (!Util.isUnset(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.osType)) {
      query["OsType"] = request.osType;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.sceneCode)) {
      query["SceneCode"] = request.sceneCode;
    }

    if (!Util.isUnset(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryGateVerifyStatisticPublic",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryGateVerifyStatisticPublicResponse>(await this.callApi(params, req, runtime), new QueryGateVerifyStatisticPublicResponse({}));
  }

  /**
   * Queries the calls of Phone Number Verification Service.
   * 
   * @remarks
   * ### [](#qps)QPS limits
   * You can call this operation up to 500 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - QueryGateVerifyStatisticPublicRequest
   * @returns QueryGateVerifyStatisticPublicResponse
   */
  async queryGateVerifyStatisticPublic(request: QueryGateVerifyStatisticPublicRequest): Promise<QueryGateVerifyStatisticPublicResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryGateVerifyStatisticPublicWithOptions(request, runtime);
  }

  /**
   * Queries the delivery status of the SMS verification code. You can query only the delivery status of the SMS verification code that is sent by calling corresponding API operations.
   * 
   * @deprecated OpenAPI QuerySendDetails is deprecated
   * 
   * @param request - QuerySendDetailsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySendDetailsResponse
   */
  // Deprecated
  async querySendDetailsWithOptions(request: QuerySendDetailsRequest, runtime: $Util.RuntimeOptions): Promise<QuerySendDetailsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.phoneNumber)) {
      query["PhoneNumber"] = request.phoneNumber;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.sendDate)) {
      query["SendDate"] = request.sendDate;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QuerySendDetails",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QuerySendDetailsResponse>(await this.callApi(params, req, runtime), new QuerySendDetailsResponse({}));
  }

  /**
   * Queries the delivery status of the SMS verification code. You can query only the delivery status of the SMS verification code that is sent by calling corresponding API operations.
   * 
   * @deprecated OpenAPI QuerySendDetails is deprecated
   * 
   * @param request - QuerySendDetailsRequest
   * @returns QuerySendDetailsResponse
   */
  // Deprecated
  async querySendDetails(request: QuerySendDetailsRequest): Promise<QuerySendDetailsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.querySendDetailsWithOptions(request, runtime);
  }

  /**
   * Sends SMS verification codes.
   * 
   * @param request - SendSmsVerifyCodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SendSmsVerifyCodeResponse
   */
  async sendSmsVerifyCodeWithOptions(request: SendSmsVerifyCodeRequest, runtime: $Util.RuntimeOptions): Promise<SendSmsVerifyCodeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.codeLength)) {
      query["CodeLength"] = request.codeLength;
    }

    if (!Util.isUnset(request.codeType)) {
      query["CodeType"] = request.codeType;
    }

    if (!Util.isUnset(request.countryCode)) {
      query["CountryCode"] = request.countryCode;
    }

    if (!Util.isUnset(request.duplicatePolicy)) {
      query["DuplicatePolicy"] = request.duplicatePolicy;
    }

    if (!Util.isUnset(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!Util.isUnset(request.outId)) {
      query["OutId"] = request.outId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.phoneNumber)) {
      query["PhoneNumber"] = request.phoneNumber;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.returnVerifyCode)) {
      query["ReturnVerifyCode"] = request.returnVerifyCode;
    }

    if (!Util.isUnset(request.schemeName)) {
      query["SchemeName"] = request.schemeName;
    }

    if (!Util.isUnset(request.signName)) {
      query["SignName"] = request.signName;
    }

    if (!Util.isUnset(request.smsUpExtendCode)) {
      query["SmsUpExtendCode"] = request.smsUpExtendCode;
    }

    if (!Util.isUnset(request.templateCode)) {
      query["TemplateCode"] = request.templateCode;
    }

    if (!Util.isUnset(request.templateParam)) {
      query["TemplateParam"] = request.templateParam;
    }

    if (!Util.isUnset(request.validTime)) {
      query["ValidTime"] = request.validTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SendSmsVerifyCode",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SendSmsVerifyCodeResponse>(await this.callApi(params, req, runtime), new SendSmsVerifyCodeResponse({}));
  }

  /**
   * Sends SMS verification codes.
   * 
   * @param request - SendSmsVerifyCodeRequest
   * @returns SendSmsVerifyCodeResponse
   */
  async sendSmsVerifyCode(request: SendSmsVerifyCodeRequest): Promise<SendSmsVerifyCodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.sendSmsVerifyCodeWithOptions(request, runtime);
  }

  /**
   * Verifies the phone number that you use.
   * 
   * @remarks
   * ### [](#)Preparations
   * You must register an Alibaba Cloud account, obtain an Alibaba Cloud AccessKey pair, and create a verification service. For more information, see [Getting Started](https://help.aliyun.com/document_detail/84541.html).
   * >  This operation is applicable to only the verification of thephone number that you use. To obtain a phone number for one-click logon, call [GetMobile](https://help.aliyun.com/document_detail/189865.html).
   * ### [](#qps)QPS limits
   * You can call this operation up to 5,000 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - VerifyMobileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VerifyMobileResponse
   */
  async verifyMobileWithOptions(request: VerifyMobileRequest, runtime: $Util.RuntimeOptions): Promise<VerifyMobileResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accessCode)) {
      query["AccessCode"] = request.accessCode;
    }

    if (!Util.isUnset(request.outId)) {
      query["OutId"] = request.outId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.phoneNumber)) {
      query["PhoneNumber"] = request.phoneNumber;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "VerifyMobile",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<VerifyMobileResponse>(await this.callApi(params, req, runtime), new VerifyMobileResponse({}));
  }

  /**
   * Verifies the phone number that you use.
   * 
   * @remarks
   * ### [](#)Preparations
   * You must register an Alibaba Cloud account, obtain an Alibaba Cloud AccessKey pair, and create a verification service. For more information, see [Getting Started](https://help.aliyun.com/document_detail/84541.html).
   * >  This operation is applicable to only the verification of thephone number that you use. To obtain a phone number for one-click logon, call [GetMobile](https://help.aliyun.com/document_detail/189865.html).
   * ### [](#qps)QPS limits
   * You can call this operation up to 5,000 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - VerifyMobileRequest
   * @returns VerifyMobileResponse
   */
  async verifyMobile(request: VerifyMobileRequest): Promise<VerifyMobileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.verifyMobileWithOptions(request, runtime);
  }

  /**
   * Verifies the phone number used in HTML5 pages.
   * 
   * @remarks
   * ### [](#)Preparations
   * You must register an Alibaba Cloud account, obtain an Alibaba Cloud AccessKey pair, and create a verification service. For more information, see [Use the phone number verification feature for HTML5 pages](https://help.aliyun.com/document_detail/169786.html).
   * ### [](#qps)QPS limits
   * You can call this operation up to 1,000 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - VerifyPhoneWithTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VerifyPhoneWithTokenResponse
   */
  async verifyPhoneWithTokenWithOptions(request: VerifyPhoneWithTokenRequest, runtime: $Util.RuntimeOptions): Promise<VerifyPhoneWithTokenResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.phoneNumber)) {
      query["PhoneNumber"] = request.phoneNumber;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.spToken)) {
      query["SpToken"] = request.spToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "VerifyPhoneWithToken",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<VerifyPhoneWithTokenResponse>(await this.callApi(params, req, runtime), new VerifyPhoneWithTokenResponse({}));
  }

  /**
   * Verifies the phone number used in HTML5 pages.
   * 
   * @remarks
   * ### [](#)Preparations
   * You must register an Alibaba Cloud account, obtain an Alibaba Cloud AccessKey pair, and create a verification service. For more information, see [Use the phone number verification feature for HTML5 pages](https://help.aliyun.com/document_detail/169786.html).
   * ### [](#qps)QPS limits
   * You can call this operation up to 1,000 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - VerifyPhoneWithTokenRequest
   * @returns VerifyPhoneWithTokenResponse
   */
  async verifyPhoneWithToken(request: VerifyPhoneWithTokenRequest): Promise<VerifyPhoneWithTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.verifyPhoneWithTokenWithOptions(request, runtime);
  }

  /**
   * Verifies SMS verification codes.
   * 
   * @remarks
   * ### [](#)Preparations
   * You must register an Alibaba Cloud account, obtain an Alibaba Cloud AccessKey pair, and create a verification service. For more information, see [Use the SMS verification feature](https://help.aliyun.com/document_detail/313209.html).
   * ### [](#qps)QPS limits
   * You can call this operation up to 500 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - VerifySmsCodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VerifySmsCodeResponse
   */
  async verifySmsCodeWithOptions(request: VerifySmsCodeRequest, runtime: $Util.RuntimeOptions): Promise<VerifySmsCodeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.phoneNumber)) {
      query["PhoneNumber"] = request.phoneNumber;
    }

    if (!Util.isUnset(request.smsCode)) {
      query["SmsCode"] = request.smsCode;
    }

    if (!Util.isUnset(request.smsToken)) {
      query["SmsToken"] = request.smsToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "VerifySmsCode",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<VerifySmsCodeResponse>(await this.callApi(params, req, runtime), new VerifySmsCodeResponse({}));
  }

  /**
   * Verifies SMS verification codes.
   * 
   * @remarks
   * ### [](#)Preparations
   * You must register an Alibaba Cloud account, obtain an Alibaba Cloud AccessKey pair, and create a verification service. For more information, see [Use the SMS verification feature](https://help.aliyun.com/document_detail/313209.html).
   * ### [](#qps)QPS limits
   * You can call this operation up to 500 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - VerifySmsCodeRequest
   * @returns VerifySmsCodeResponse
   */
  async verifySmsCode(request: VerifySmsCodeRequest): Promise<VerifySmsCodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.verifySmsCodeWithOptions(request, runtime);
  }

  /**
   * Obtains the verification results by using the verification token that is obtained by using the authentication token.
   * 
   * @param request - VerifyWithFusionAuthTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VerifyWithFusionAuthTokenResponse
   */
  async verifyWithFusionAuthTokenWithOptions(request: VerifyWithFusionAuthTokenRequest, runtime: $Util.RuntimeOptions): Promise<VerifyWithFusionAuthTokenResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.verifyToken)) {
      query["VerifyToken"] = request.verifyToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "VerifyWithFusionAuthToken",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<VerifyWithFusionAuthTokenResponse>(await this.callApi(params, req, runtime), new VerifyWithFusionAuthTokenResponse({}));
  }

  /**
   * Obtains the verification results by using the verification token that is obtained by using the authentication token.
   * 
   * @param request - VerifyWithFusionAuthTokenRequest
   * @returns VerifyWithFusionAuthTokenResponse
   */
  async verifyWithFusionAuthToken(request: VerifyWithFusionAuthTokenRequest): Promise<VerifyWithFusionAuthTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.verifyWithFusionAuthTokenWithOptions(request, runtime);
  }

}
