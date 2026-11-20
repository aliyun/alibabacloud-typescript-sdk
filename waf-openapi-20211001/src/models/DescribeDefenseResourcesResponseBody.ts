// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDefenseResourcesResponseBodyResourcesCookieConfig extends $dara.Model {
  /**
   * @remarks
   * The SameSite policy of the slider cookie. Valid values:
   * - **None**: None.
   * - **Lax**: Lax.
   * - **Strict**: Strict.
   * > An empty string indicates that the SameSite attribute is not configured.
   * 
   * @example
   * Lax
   */
  acwScV3SameSite?: string;
  /**
   * @remarks
   * The SameSite policy of the tracking cookie. Valid values:
   * - **None**: None.
   * - **Lax**: Lax.
   * - **Strict**: Strict.
   * > An empty string indicates that the SameSite attribute is not configured.
   * 
   * @example
   * None
   */
  acwTcSameSite?: string;
  static names(): { [key: string]: string } {
    return {
      acwScV3SameSite: 'AcwScV3SameSite',
      acwTcSameSite: 'AcwTcSameSite',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acwScV3SameSite: 'string',
      acwTcSameSite: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseResourcesResponseBodyResourcesResponseHeaders extends $dara.Model {
  /**
   * @remarks
   * The key of the specified custom response header.
   * 
   * @example
   * Header-Key
   */
  key?: string;
  /**
   * @remarks
   * The value of the specified custom response header.
   * 
   * @example
   * Header-Value
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseResourcesResponseBodyResources extends $dara.Model {
  /**
   * @remarks
   * The status of the tracking cookie. Valid values:
   * 
   * - **0**: disabled.
   * 
   * - **1**: enabled.
   * 
   * @example
   * 1
   */
  acwCookieStatus?: number;
  /**
   * @remarks
   * The status of the Secure attribute for the tracking cookie. Valid values:
   * 
   * - **0**: disabled.
   * 
   * - **1**: enabled.
   * 
   * @example
   * 0
   */
  acwSecureStatus?: number;
  /**
   * @remarks
   * The status of the Secure attribute for the slider cookie. Valid values:
   * 
   * - **0**: disabled.
   * 
   * - **1**: enabled.
   * 
   * @example
   * 0
   */
  acwV3SecureStatus?: number;
  /**
   * @remarks
   * The cookie attribute aggregation configuration.
   */
  cookieConfig?: DescribeDefenseResourcesResponseBodyResourcesCookieConfig;
  /**
   * @remarks
   * The custom X-Forwarded-For (XFF) header used to obtain the actual originating IP address of the client. If XFF is set to 1 and this field is empty, the first IP address in the XFF header is used as the originating IP address of the client.
   */
  customHeaders?: string[];
  /**
   * @remarks
   * The description.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The detailed description of the protected object. Different key-value pairs in the map represent different attributes of the protected object.
   * 
   * @example
   * {"domain":"eou.eleme.cn","uri":"/"}
   */
  detail?: { [key: string]: any };
  /**
   * @remarks
   * The time when the protected object was created. Unit: milliseconds.
   * 
   * @example
   * 1652149203187
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The time when the protected object was modified. Unit: milliseconds.
   * 
   * @example
   * 1665633032000
   */
  gmtModified?: number;
  /**
   * @remarks
   * The instance ID of the WAF instance.
   * 
   * @example
   * waf_v2_public_cn-k*****
   */
  instanceId?: string;
  /**
   * @remarks
   * The account to which the protected object Asset belongs when the multi-account management feature is used.
   * 
   * @example
   * 135*********46
   */
  ownerUserId?: string;
  /**
   * @remarks
   * The protection mode of the protected object.
   * 
   * @example
   * domain
   */
  pattern?: string;
  /**
   * @remarks
   * The name of the cloud service.
   * 
   * @example
   * alb
   */
  product?: string;
  /**
   * @remarks
   * The name of the protected object.
   * 
   * @example
   * alb-rencs***
   */
  resource?: string;
  /**
   * @remarks
   * The name of the protection group to which the protected object is added.
   * 
   * @example
   * test
   */
  resourceGroup?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The source of the protected object.
   * 
   * @example
   * custom
   */
  resourceOrigin?: string;
  /**
   * @remarks
   * The status of the protected object. Valid values:
   * 
   * - **initializing**: The default protection is being initialized.
   * 
   * - **active**: The protected object is running normally.
   * 
   * - **init_failed**: The default protection initialization failed.
   * 
   * @example
   * active
   */
  resourceStatus?: string;
  /**
   * @remarks
   * The response header parameters.
   */
  responseHeaders?: DescribeDefenseResourcesResponseBodyResourcesResponseHeaders[];
  /**
   * @remarks
   * Indicates whether the X-Forwarded-For (XFF) proxy feature is enabled for the protected object.
   * 
   * @example
   * 1
   */
  xffStatus?: number;
  static names(): { [key: string]: string } {
    return {
      acwCookieStatus: 'AcwCookieStatus',
      acwSecureStatus: 'AcwSecureStatus',
      acwV3SecureStatus: 'AcwV3SecureStatus',
      cookieConfig: 'CookieConfig',
      customHeaders: 'CustomHeaders',
      description: 'Description',
      detail: 'Detail',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      instanceId: 'InstanceId',
      ownerUserId: 'OwnerUserId',
      pattern: 'Pattern',
      product: 'Product',
      resource: 'Resource',
      resourceGroup: 'ResourceGroup',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      resourceOrigin: 'ResourceOrigin',
      resourceStatus: 'ResourceStatus',
      responseHeaders: 'ResponseHeaders',
      xffStatus: 'XffStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acwCookieStatus: 'number',
      acwSecureStatus: 'number',
      acwV3SecureStatus: 'number',
      cookieConfig: DescribeDefenseResourcesResponseBodyResourcesCookieConfig,
      customHeaders: { 'type': 'array', 'itemType': 'string' },
      description: 'string',
      detail: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      gmtCreate: 'number',
      gmtModified: 'number',
      instanceId: 'string',
      ownerUserId: 'string',
      pattern: 'string',
      product: 'string',
      resource: 'string',
      resourceGroup: 'string',
      resourceManagerResourceGroupId: 'string',
      resourceOrigin: 'string',
      resourceStatus: 'string',
      responseHeaders: { 'type': 'array', 'itemType': DescribeDefenseResourcesResponseBodyResourcesResponseHeaders },
      xffStatus: 'number',
    };
  }

  validate() {
    if(this.cookieConfig && typeof (this.cookieConfig as any).validate === 'function') {
      (this.cookieConfig as any).validate();
    }
    if(Array.isArray(this.customHeaders)) {
      $dara.Model.validateArray(this.customHeaders);
    }
    if(this.detail) {
      $dara.Model.validateMap(this.detail);
    }
    if(Array.isArray(this.responseHeaders)) {
      $dara.Model.validateArray(this.responseHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 618F2626-DB27-5187-8C6C-4E61A491****
   */
  requestId?: string;
  /**
   * @remarks
   * The list of protected objects.
   */
  resources?: DescribeDefenseResourcesResponseBodyResources[];
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 73
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resources: 'Resources',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resources: { 'type': 'array', 'itemType': DescribeDefenseResourcesResponseBodyResources },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.resources)) {
      $dara.Model.validateArray(this.resources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

