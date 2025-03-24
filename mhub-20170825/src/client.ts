// This file is auto-generated, don't edit it
/**
 */
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import * as $dara from '@darabonba/typescript';

export class CreateAppResponseBodyAppInfo extends $dara.Model {
  /**
   * @example
   * 123456
   */
  appKey?: string;
  /**
   * @example
   * com.test.ios
   */
  bundleId?: string;
  /**
   * @example
   * 2020-12-16T06:25:52Z
   */
  createTime?: string;
  description?: string;
  /**
   * @example
   * 2020-12-16T06:25:52Z
   */
  modifyTime?: string;
  name?: string;
  /**
   * @example
   * com.test.android
   */
  packageName?: string;
  /**
   * @example
   * 123456
   */
  productId?: number;
  /**
   * @example
   * 1
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      bundleId: 'BundleId',
      createTime: 'CreateTime',
      description: 'Description',
      modifyTime: 'ModifyTime',
      name: 'Name',
      packageName: 'PackageName',
      productId: 'ProductId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'string',
      bundleId: 'string',
      createTime: 'string',
      description: 'string',
      modifyTime: 'string',
      name: 'string',
      packageName: 'string',
      productId: 'number',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppsResponseBodyAppInfosAppInfo extends $dara.Model {
  /**
   * @example
   * 123456
   */
  appKey?: string;
  /**
   * @example
   * com.test.ios
   */
  bundleId?: string;
  encodedIcon?: string;
  /**
   * @example
   * 1
   */
  industryId?: number;
  name?: string;
  /**
   * @example
   * com.test.android
   */
  packageName?: string;
  /**
   * @example
   * false
   */
  readonly?: boolean;
  /**
   * @example
   * 1
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      bundleId: 'BundleId',
      encodedIcon: 'EncodedIcon',
      industryId: 'IndustryId',
      name: 'Name',
      packageName: 'PackageName',
      readonly: 'Readonly',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'string',
      bundleId: 'string',
      encodedIcon: 'string',
      industryId: 'number',
      name: 'string',
      packageName: 'string',
      readonly: 'boolean',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppsResponseBodyAppInfos extends $dara.Model {
  appInfo?: ListAppsResponseBodyAppInfosAppInfo[];
  static names(): { [key: string]: string } {
    return {
      appInfo: 'AppInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInfo: { 'type': 'array', 'itemType': ListAppsResponseBodyAppInfosAppInfo },
    };
  }

  validate() {
    if(Array.isArray(this.appInfo)) {
      $dara.Model.validateArray(this.appInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductsResponseBodyProductInfosProductInfo extends $dara.Model {
  /**
   * @example
   * 2020-12-16T06:25:52Z
   */
  createTime?: string;
  /**
   * @example
   * xxxx
   */
  description?: string;
  encodedIcon?: string;
  /**
   * @example
   * 1
   */
  industryId?: number;
  name?: string;
  /**
   * @example
   * iOS
   */
  platforms?: string;
  /**
   * @example
   * 1234
   */
  productId?: number;
  /**
   * @example
   * false
   */
  readonly?: boolean;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      encodedIcon: 'EncodedIcon',
      industryId: 'IndustryId',
      name: 'Name',
      platforms: 'Platforms',
      productId: 'ProductId',
      readonly: 'Readonly',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      encodedIcon: 'string',
      industryId: 'number',
      name: 'string',
      platforms: 'string',
      productId: 'number',
      readonly: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductsResponseBodyProductInfos extends $dara.Model {
  productInfo?: ListProductsResponseBodyProductInfosProductInfo[];
  static names(): { [key: string]: string } {
    return {
      productInfo: 'ProductInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productInfo: { 'type': 'array', 'itemType': ListProductsResponseBodyProductInfosProductInfo },
    };
  }

  validate() {
    if(Array.isArray(this.productInfo)) {
      $dara.Model.validateArray(this.productInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAppInfoResponseBodyAppInfo extends $dara.Model {
  /**
   * @example
   * 123456
   */
  appKey?: string;
  appName?: string;
  /**
   * @example
   * com.test.ios
   */
  bundleId?: string;
  /**
   * @example
   * false
   */
  certDevelopAvail?: boolean;
  /**
   * @example
   * 2020-12-16T06:25:52Z
   */
  certDevelopExpiration?: string;
  /**
   * @example
   * false
   */
  certProductAvail?: boolean;
  /**
   * @example
   * 2020-12-16T06:25:52Z
   */
  certProductExpiration?: string;
  /**
   * @example
   * 2020-12-16T06:25:52Z
   */
  createTime?: string;
  encodedIcon?: string;
  /**
   * @example
   * 1
   */
  industryId?: number;
  /**
   * @example
   * com.test.android
   */
  packageName?: string;
  /**
   * @example
   * 1234
   */
  productId?: number;
  /**
   * @example
   * false
   */
  readonly?: boolean;
  /**
   * @example
   * 0
   */
  status?: number;
  /**
   * @example
   * 1
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      appName: 'AppName',
      bundleId: 'BundleId',
      certDevelopAvail: 'CertDevelopAvail',
      certDevelopExpiration: 'CertDevelopExpiration',
      certProductAvail: 'CertProductAvail',
      certProductExpiration: 'CertProductExpiration',
      createTime: 'CreateTime',
      encodedIcon: 'EncodedIcon',
      industryId: 'IndustryId',
      packageName: 'PackageName',
      productId: 'ProductId',
      readonly: 'Readonly',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'string',
      appName: 'string',
      bundleId: 'string',
      certDevelopAvail: 'boolean',
      certDevelopExpiration: 'string',
      certProductAvail: 'boolean',
      certProductExpiration: 'string',
      createTime: 'string',
      encodedIcon: 'string',
      industryId: 'number',
      packageName: 'string',
      productId: 'number',
      readonly: 'boolean',
      status: 'number',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAppSecurityInfoResponseBodyAppSecurityInfoExtConfig extends $dara.Model {
  tlogRsaSecret?: string;
  static names(): { [key: string]: string } {
    return {
      tlogRsaSecret: 'TlogRsaSecret',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tlogRsaSecret: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAppSecurityInfoResponseBodyAppSecurityInfo extends $dara.Model {
  /**
   * @example
   * 123456
   */
  appKey?: string;
  /**
   * @example
   * abc123abc123
   */
  appSecret?: string;
  extConfig?: QueryAppSecurityInfoResponseBodyAppSecurityInfoExtConfig;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      appSecret: 'AppSecret',
      extConfig: 'ExtConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'string',
      appSecret: 'string',
      extConfig: QueryAppSecurityInfoResponseBodyAppSecurityInfoExtConfig,
    };
  }

  validate() {
    if(this.extConfig && typeof (this.extConfig as any).validate === 'function') {
      (this.extConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryProductInfoResponseBodyProductInfo extends $dara.Model {
  encodedIcon?: string;
  iconName?: string;
  /**
   * @example
   * 1
   */
  industryId?: number;
  name?: string;
  /**
   * @example
   * false
   */
  readonly?: boolean;
  static names(): { [key: string]: string } {
    return {
      encodedIcon: 'EncodedIcon',
      iconName: 'IconName',
      industryId: 'IndustryId',
      name: 'Name',
      readonly: 'Readonly',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodedIcon: 'string',
      iconName: 'string',
      industryId: 'number',
      name: 'string',
      readonly: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppRequest extends $dara.Model {
  /**
   * @example
   * com.test.ios
   */
  bundleId?: string;
  encodedIcon?: string;
  /**
   * @example
   * 1
   */
  industryId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  /**
   * @example
   * com.test.android
   */
  packageName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  productId?: string;
  /**
   * @example
   * 1
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      bundleId: 'BundleId',
      encodedIcon: 'EncodedIcon',
      industryId: 'IndustryId',
      name: 'Name',
      packageName: 'PackageName',
      productId: 'ProductId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bundleId: 'string',
      encodedIcon: 'string',
      industryId: 'string',
      name: 'string',
      packageName: 'string',
      productId: 'string',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppResponseBody extends $dara.Model {
  appInfo?: CreateAppResponseBodyAppInfo;
  /**
   * @example
   * 126D4DDD-05A5-49B1-B18C-39C4A929****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appInfo: 'AppInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInfo: CreateAppResponseBodyAppInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.appInfo && typeof (this.appInfo as any).validate === 'function') {
      (this.appInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProductRequest extends $dara.Model {
  /**
   * @example
   * AAA
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProductResponseBody extends $dara.Model {
  /**
   * @example
   * 123456
   */
  productId?: number;
  /**
   * @example
   * 126D4DDD-05A5-49B1-B18C-39C4A929BFB2
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      productId: 'ProductId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productId: 'number',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProductResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateProductResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateProductResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  appKey?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppResponseBody extends $dara.Model {
  /**
   * @example
   * 126D4DDD-05A5-49B1-B18C-39C4A929BFB2
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteAppResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteAppResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProductRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  productId?: string;
  static names(): { [key: string]: string } {
    return {
      productId: 'ProductId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProductResponseBody extends $dara.Model {
  /**
   * @example
   * PRODUCT_NOT_ALONE
   */
  message?: string;
  /**
   * @example
   * 126D4DDD-05A5-49B1-B18C-39C4A929BFB2
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProductResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteProductResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteProductResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDashboardRequest extends $dara.Model {
  /**
   * @example
   * 29201799
   */
  appKey?: string;
  /**
   * @example
   * 1
   */
  appType?: number;
  /**
   * @example
   * 4.8
   */
  appVersion?: string;
  /**
   * @example
   * 1681985390256
   */
  endTime?: number;
  /**
   * @example
   * 4.8
   */
  keyword?: string;
  /**
   * @example
   * queryAppVersions
   */
  proxyAction?: string;
  /**
   * @example
   * mqc
   */
  serviceName?: string;
  /**
   * @example
   * 1681369984564
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      appType: 'AppType',
      appVersion: 'AppVersion',
      endTime: 'EndTime',
      keyword: 'Keyword',
      proxyAction: 'ProxyAction',
      serviceName: 'ServiceName',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'string',
      appType: 'number',
      appVersion: 'string',
      endTime: 'number',
      keyword: 'string',
      proxyAction: 'string',
      serviceName: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDashboardResponseBody extends $dara.Model {
  /**
   * @example
   * {
   * 	"success":true,
   * 	"model":{
   * 		"perfMonthCount":0,
   * 		"compatibilityMonthCount":0,
   * 		"perfLastMonthCount":0,
   * 		"compatibilityLastMonthCount":0,
   * 		"automationMonthCount":0,
   * 		"automationLastMonthCount":0
   * 	}
   * }
   */
  model?: string;
  /**
   * @example
   * 4CC30A8F-787C-55CA-87A6-7D1BED56067E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      model: 'Model',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      model: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDashboardResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppsRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  osType?: number;
  /**
   * @example
   * 1
   */
  page?: string;
  /**
   * @example
   * 20
   */
  pageSize?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  productId?: string;
  static names(): { [key: string]: string } {
    return {
      osType: 'OsType',
      page: 'Page',
      pageSize: 'PageSize',
      productId: 'ProductId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      osType: 'number',
      page: 'string',
      pageSize: 'string',
      productId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppsResponseBody extends $dara.Model {
  appInfos?: ListAppsResponseBodyAppInfos;
  /**
   * @example
   * 126D4DDD-05A5-49B1-B18C-39C4A929BFB2
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  total?: number;
  /**
   * @example
   * enabled
   */
  ubsmsStatus?: string;
  static names(): { [key: string]: string } {
    return {
      appInfos: 'AppInfos',
      requestId: 'RequestId',
      total: 'Total',
      ubsmsStatus: 'UbsmsStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInfos: ListAppsResponseBodyAppInfos,
      requestId: 'string',
      total: 'number',
      ubsmsStatus: 'string',
    };
  }

  validate() {
    if(this.appInfos && typeof (this.appInfos as any).validate === 'function') {
      (this.appInfos as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAppsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListAppsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductsRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  offset?: number;
  productName?: string;
  /**
   * @example
   * false
   */
  simple?: boolean;
  /**
   * @example
   * 20
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      offset: 'Offset',
      productName: 'ProductName',
      simple: 'Simple',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      offset: 'number',
      productName: 'string',
      simple: 'boolean',
      size: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductsResponseBody extends $dara.Model {
  productInfos?: ListProductsResponseBodyProductInfos;
  /**
   * @example
   * 126D4DDD-05A5-49B1-B18C-39C4A929BFB2
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  total?: number;
  /**
   * @example
   * enabled
   */
  ubsmsStatus?: string;
  static names(): { [key: string]: string } {
    return {
      productInfos: 'ProductInfos',
      requestId: 'RequestId',
      total: 'Total',
      ubsmsStatus: 'UbsmsStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productInfos: ListProductsResponseBodyProductInfos,
      requestId: 'string',
      total: 'number',
      ubsmsStatus: 'string',
    };
  }

  validate() {
    if(this.productInfos && typeof (this.productInfos as any).validate === 'function') {
      (this.productInfos as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListProductsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListProductsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAppRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  appKey?: string;
  /**
   * @example
   * com.test.ios
   */
  bundleId?: string;
  encodedIcon?: string;
  /**
   * @example
   * 1
   */
  industryId?: number;
  name?: string;
  /**
   * @example
   * com.test.android
   */
  packageName?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      bundleId: 'BundleId',
      encodedIcon: 'EncodedIcon',
      industryId: 'IndustryId',
      name: 'Name',
      packageName: 'PackageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'string',
      bundleId: 'string',
      encodedIcon: 'string',
      industryId: 'number',
      name: 'string',
      packageName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAppResponseBody extends $dara.Model {
  /**
   * @example
   * 126D4DDD-05A5-49B1-B18C-39C4A929BFB2
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAppResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyProductRequest extends $dara.Model {
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  productId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      productId: 'ProductId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      productId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyProductResponseBody extends $dara.Model {
  /**
   * @example
   * 126D4DDD-05A5-49B1-B18C-39C4A929BFB2
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyProductResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyProductResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyProductResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenEmasServiceRequest extends $dara.Model {
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenEmasServiceResponseBody extends $dara.Model {
  /**
   * @example
   * 20671870151****
   */
  orderId?: string;
  /**
   * @example
   * 126D4DDD-05A5-49B1-B18C-39C4A929BFB2
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenEmasServiceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: OpenEmasServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: OpenEmasServiceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAppInfoRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  appKey?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAppInfoResponseBody extends $dara.Model {
  appInfo?: QueryAppInfoResponseBodyAppInfo;
  /**
   * @example
   * 126D4DDD-05A5-49B1-B18C-39C4A929BFB2
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appInfo: 'AppInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInfo: QueryAppInfoResponseBodyAppInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.appInfo && typeof (this.appInfo as any).validate === 'function') {
      (this.appInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAppInfoResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryAppInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryAppInfoResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAppSecurityInfoRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  appKey?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAppSecurityInfoResponseBody extends $dara.Model {
  appSecurityInfo?: QueryAppSecurityInfoResponseBodyAppSecurityInfo;
  /**
   * @example
   * 126D4DDD-05A5-49B1-B18C-39C4A929BFB2
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appSecurityInfo: 'AppSecurityInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appSecurityInfo: QueryAppSecurityInfoResponseBodyAppSecurityInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.appSecurityInfo && typeof (this.appSecurityInfo as any).validate === 'function') {
      (this.appSecurityInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAppSecurityInfoResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryAppSecurityInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryAppSecurityInfoResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryProductInfoRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  productId?: string;
  static names(): { [key: string]: string } {
    return {
      productId: 'ProductId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryProductInfoResponseBody extends $dara.Model {
  productInfo?: QueryProductInfoResponseBodyProductInfo;
  /**
   * @example
   * 126D4DDD-05A5-49B1-B18C-39C4A929BFB2
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      productInfo: 'ProductInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productInfo: QueryProductInfoResponseBodyProductInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.productInfo && typeof (this.productInfo as any).validate === 'function') {
      (this.productInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryProductInfoResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryProductInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryProductInfoResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "regional";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("mhub", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!$dara.isNull(endpoint)) {
      return endpoint;
    }

    if (!$dara.isNull(endpointMap) && !$dara.isNull(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return OpenApiUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * @param request - CreateAppRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAppResponse
   */
  async createAppWithOptions(request: CreateAppRequest, runtime: $dara.RuntimeOptions): Promise<CreateAppResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bundleId)) {
      query["BundleId"] = request.bundleId;
    }

    if (!$dara.isNull(request.encodedIcon)) {
      query["EncodedIcon"] = request.encodedIcon;
    }

    if (!$dara.isNull(request.industryId)) {
      query["IndustryId"] = request.industryId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.packageName)) {
      query["PackageName"] = request.packageName;
    }

    if (!$dara.isNull(request.productId)) {
      query["ProductId"] = request.productId;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateApp",
      version: "2017-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateAppResponse>(await this.callApi(params, req, runtime), new CreateAppResponse({}));
    } else {
      return $dara.cast<CreateAppResponse>(await this.execute(params, req, runtime), new CreateAppResponse({}));
    }

  }

  /**
   * @param request - CreateAppRequest
   * @returns CreateAppResponse
   */
  async createApp(request: CreateAppRequest): Promise<CreateAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAppWithOptions(request, runtime);
  }

  /**
   * @param request - CreateProductRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateProductResponse
   */
  async createProductWithOptions(request: CreateProductRequest, runtime: $dara.RuntimeOptions): Promise<CreateProductResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateProduct",
      version: "2017-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateProductResponse>(await this.callApi(params, req, runtime), new CreateProductResponse({}));
    } else {
      return $dara.cast<CreateProductResponse>(await this.execute(params, req, runtime), new CreateProductResponse({}));
    }

  }

  /**
   * @param request - CreateProductRequest
   * @returns CreateProductResponse
   */
  async createProduct(request: CreateProductRequest): Promise<CreateProductResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createProductWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteAppRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAppResponse
   */
  async deleteAppWithOptions(request: DeleteAppRequest, runtime: $dara.RuntimeOptions): Promise<DeleteAppResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteApp",
      version: "2017-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteAppResponse>(await this.callApi(params, req, runtime), new DeleteAppResponse({}));
    } else {
      return $dara.cast<DeleteAppResponse>(await this.execute(params, req, runtime), new DeleteAppResponse({}));
    }

  }

  /**
   * @param request - DeleteAppRequest
   * @returns DeleteAppResponse
   */
  async deleteApp(request: DeleteAppRequest): Promise<DeleteAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAppWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteProductRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteProductResponse
   */
  async deleteProductWithOptions(request: DeleteProductRequest, runtime: $dara.RuntimeOptions): Promise<DeleteProductResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.productId)) {
      query["ProductId"] = request.productId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteProduct",
      version: "2017-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteProductResponse>(await this.callApi(params, req, runtime), new DeleteProductResponse({}));
    } else {
      return $dara.cast<DeleteProductResponse>(await this.execute(params, req, runtime), new DeleteProductResponse({}));
    }

  }

  /**
   * @param request - DeleteProductRequest
   * @returns DeleteProductResponse
   */
  async deleteProduct(request: DeleteProductRequest): Promise<DeleteProductResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteProductWithOptions(request, runtime);
  }

  /**
   * 获取emas dashboard
   * 
   * @param request - DescribeDashboardRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDashboardResponse
   */
  async describeDashboardWithOptions(request: DescribeDashboardRequest, runtime: $dara.RuntimeOptions): Promise<DescribeDashboardResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    if (!$dara.isNull(request.appType)) {
      query["AppType"] = request.appType;
    }

    if (!$dara.isNull(request.appVersion)) {
      query["AppVersion"] = request.appVersion;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.proxyAction)) {
      query["ProxyAction"] = request.proxyAction;
    }

    if (!$dara.isNull(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDashboard",
      version: "2017-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeDashboardResponse>(await this.callApi(params, req, runtime), new DescribeDashboardResponse({}));
    } else {
      return $dara.cast<DescribeDashboardResponse>(await this.execute(params, req, runtime), new DescribeDashboardResponse({}));
    }

  }

  /**
   * 获取emas dashboard
   * 
   * @param request - DescribeDashboardRequest
   * @returns DescribeDashboardResponse
   */
  async describeDashboard(request: DescribeDashboardRequest): Promise<DescribeDashboardResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDashboardWithOptions(request, runtime);
  }

  /**
   * 展示用户应用列表
   * 
   * @param request - ListAppsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAppsResponse
   */
  async listAppsWithOptions(request: ListAppsRequest, runtime: $dara.RuntimeOptions): Promise<ListAppsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.osType)) {
      query["OsType"] = request.osType;
    }

    if (!$dara.isNull(request.page)) {
      query["Page"] = request.page;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.productId)) {
      query["ProductId"] = request.productId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListApps",
      version: "2017-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListAppsResponse>(await this.callApi(params, req, runtime), new ListAppsResponse({}));
    } else {
      return $dara.cast<ListAppsResponse>(await this.execute(params, req, runtime), new ListAppsResponse({}));
    }

  }

  /**
   * 展示用户应用列表
   * 
   * @param request - ListAppsRequest
   * @returns ListAppsResponse
   */
  async listApps(request: ListAppsRequest): Promise<ListAppsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAppsWithOptions(request, runtime);
  }

  /**
   * @param request - ListProductsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListProductsResponse
   */
  async listProductsWithOptions(request: ListProductsRequest, runtime: $dara.RuntimeOptions): Promise<ListProductsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.offset)) {
      query["Offset"] = request.offset;
    }

    if (!$dara.isNull(request.productName)) {
      query["ProductName"] = request.productName;
    }

    if (!$dara.isNull(request.simple)) {
      query["Simple"] = request.simple;
    }

    if (!$dara.isNull(request.size)) {
      query["Size"] = request.size;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListProducts",
      version: "2017-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListProductsResponse>(await this.callApi(params, req, runtime), new ListProductsResponse({}));
    } else {
      return $dara.cast<ListProductsResponse>(await this.execute(params, req, runtime), new ListProductsResponse({}));
    }

  }

  /**
   * @param request - ListProductsRequest
   * @returns ListProductsResponse
   */
  async listProducts(request: ListProductsRequest): Promise<ListProductsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listProductsWithOptions(request, runtime);
  }

  /**
   * @param request - ModifyAppRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAppResponse
   */
  async modifyAppWithOptions(request: ModifyAppRequest, runtime: $dara.RuntimeOptions): Promise<ModifyAppResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    if (!$dara.isNull(request.bundleId)) {
      query["BundleId"] = request.bundleId;
    }

    if (!$dara.isNull(request.encodedIcon)) {
      query["EncodedIcon"] = request.encodedIcon;
    }

    if (!$dara.isNull(request.industryId)) {
      query["IndustryId"] = request.industryId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.packageName)) {
      query["PackageName"] = request.packageName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyApp",
      version: "2017-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ModifyAppResponse>(await this.callApi(params, req, runtime), new ModifyAppResponse({}));
    } else {
      return $dara.cast<ModifyAppResponse>(await this.execute(params, req, runtime), new ModifyAppResponse({}));
    }

  }

  /**
   * @param request - ModifyAppRequest
   * @returns ModifyAppResponse
   */
  async modifyApp(request: ModifyAppRequest): Promise<ModifyAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyAppWithOptions(request, runtime);
  }

  /**
   * @param request - ModifyProductRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyProductResponse
   */
  async modifyProductWithOptions(request: ModifyProductRequest, runtime: $dara.RuntimeOptions): Promise<ModifyProductResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.productId)) {
      query["ProductId"] = request.productId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyProduct",
      version: "2017-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ModifyProductResponse>(await this.callApi(params, req, runtime), new ModifyProductResponse({}));
    } else {
      return $dara.cast<ModifyProductResponse>(await this.execute(params, req, runtime), new ModifyProductResponse({}));
    }

  }

  /**
   * @param request - ModifyProductRequest
   * @returns ModifyProductResponse
   */
  async modifyProduct(request: ModifyProductRequest): Promise<ModifyProductResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyProductWithOptions(request, runtime);
  }

  /**
   * @param request - OpenEmasServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OpenEmasServiceResponse
   */
  async openEmasServiceWithOptions(request: OpenEmasServiceRequest, runtime: $dara.RuntimeOptions): Promise<OpenEmasServiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "OpenEmasService",
      version: "2017-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<OpenEmasServiceResponse>(await this.callApi(params, req, runtime), new OpenEmasServiceResponse({}));
    } else {
      return $dara.cast<OpenEmasServiceResponse>(await this.execute(params, req, runtime), new OpenEmasServiceResponse({}));
    }

  }

  /**
   * @param request - OpenEmasServiceRequest
   * @returns OpenEmasServiceResponse
   */
  async openEmasService(request: OpenEmasServiceRequest): Promise<OpenEmasServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.openEmasServiceWithOptions(request, runtime);
  }

  /**
   * @param request - QueryAppInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryAppInfoResponse
   */
  async queryAppInfoWithOptions(request: QueryAppInfoRequest, runtime: $dara.RuntimeOptions): Promise<QueryAppInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryAppInfo",
      version: "2017-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<QueryAppInfoResponse>(await this.callApi(params, req, runtime), new QueryAppInfoResponse({}));
    } else {
      return $dara.cast<QueryAppInfoResponse>(await this.execute(params, req, runtime), new QueryAppInfoResponse({}));
    }

  }

  /**
   * @param request - QueryAppInfoRequest
   * @returns QueryAppInfoResponse
   */
  async queryAppInfo(request: QueryAppInfoRequest): Promise<QueryAppInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryAppInfoWithOptions(request, runtime);
  }

  /**
   * 查询应用对应的安全字段
   * 
   * @param request - QueryAppSecurityInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryAppSecurityInfoResponse
   */
  async queryAppSecurityInfoWithOptions(request: QueryAppSecurityInfoRequest, runtime: $dara.RuntimeOptions): Promise<QueryAppSecurityInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryAppSecurityInfo",
      version: "2017-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<QueryAppSecurityInfoResponse>(await this.callApi(params, req, runtime), new QueryAppSecurityInfoResponse({}));
    } else {
      return $dara.cast<QueryAppSecurityInfoResponse>(await this.execute(params, req, runtime), new QueryAppSecurityInfoResponse({}));
    }

  }

  /**
   * 查询应用对应的安全字段
   * 
   * @param request - QueryAppSecurityInfoRequest
   * @returns QueryAppSecurityInfoResponse
   */
  async queryAppSecurityInfo(request: QueryAppSecurityInfoRequest): Promise<QueryAppSecurityInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryAppSecurityInfoWithOptions(request, runtime);
  }

  /**
   * @param request - QueryProductInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryProductInfoResponse
   */
  async queryProductInfoWithOptions(request: QueryProductInfoRequest, runtime: $dara.RuntimeOptions): Promise<QueryProductInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.productId)) {
      query["ProductId"] = request.productId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryProductInfo",
      version: "2017-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<QueryProductInfoResponse>(await this.callApi(params, req, runtime), new QueryProductInfoResponse({}));
    } else {
      return $dara.cast<QueryProductInfoResponse>(await this.execute(params, req, runtime), new QueryProductInfoResponse({}));
    }

  }

  /**
   * @param request - QueryProductInfoRequest
   * @returns QueryProductInfoResponse
   */
  async queryProductInfo(request: QueryProductInfoRequest): Promise<QueryProductInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryProductInfoWithOptions(request, runtime);
  }

}
