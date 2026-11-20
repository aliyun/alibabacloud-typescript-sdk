// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDefenseResourceResponseBodyResourceCookieConfig extends $dara.Model {
  /**
   * @remarks
   * The SameSite policy for the slider cookie. Valid values:
   * - **None**: None.
   * - **Lax**: Lax.
   * - **Strict**: Strict.
   * > An empty string indicates that the SameSite attribute is not set.
   * 
   * @example
   * Lax
   */
  acwScV3SameSite?: string;
  /**
   * @remarks
   * The SameSite policy for the tracking cookie. Valid values:
   * - **None**: None.
   * - **Lax**: Lax.
   * - **Strict**: Strict.
   * > An empty string indicates that the SameSite attribute is not set.
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

export class DescribeDefenseResourceResponseBodyResourceResponseHeaders extends $dara.Model {
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

export class DescribeDefenseResourceResponseBodyResource extends $dara.Model {
  /**
   * @remarks
   * The enabling status of the tracking cookie.
   * 
   * - **0**: disabled.
   * 
   * - **1**: enabled.
   * 
   * @example
   * 0
   */
  acwCookieStatus?: number;
  /**
   * @remarks
   * The status of the Secure attribute for the tracking cookie.
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
   * The status of the Secure attribute for the slider cookie.
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
  cookieConfig?: DescribeDefenseResourceResponseBodyResourceCookieConfig;
  /**
   * @remarks
   * The list of specified header fields.
   * > When XffStatus is set to 1, the first IP address in the specified header field is used as the originating IP address of the client to prevent XFF spoofing. If multiple headers are specified, the system attempts to obtain the originating IP address in sequence. If the first header does not contain an IP address, the system checks the second header, and so on. If no IP address is found in any of the specified headers, the first IP address in the X-Forwarded-For header is used. When XffStatus is set to 1, the first IP address is extracted.
   */
  customHeaders?: string[];
  /**
   * @remarks
   * The description.
   * 
   * @example
   * This is Description
   */
  description?: string;
  /**
   * @remarks
   * The detailed description of the protected object. Different key-value pairs in the map represent different attributes of the protected object.
   * 
   * @example
   * {
   * "product": "waf",
   *  "domain": "demo.aliyundoc****.com"
   * }
   */
  detail?: { [key: string]: any };
  /**
   * @remarks
   * The time when the protected object was created. Unit: milliseconds.
   * 
   * @example
   * 1607493144000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The time when the protected object was modified. Unit: milliseconds.
   * 
   * @example
   * 1691720010000
   */
  gmtModified?: number;
  /**
   * @remarks
   * The WAF instance ID.
   * 
   * @example
   * waf_v2_public_cn-wwo****
   */
  instanceId?: string;
  /**
   * @remarks
   * The owner UID of the protected object.
   * 
   * @example
   * 170457******9107
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
   * The name of the protected object group to which the protected object is added.
   * 
   * @example
   * example_resource_group
   */
  resourceGroup?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-acfmoiy****p2oq
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The source of the protected object. Valid values:
   * 
   * - **custom**: the protected object created from the Provisioning page.
   * 
   * - **access**: the protected object created by the user.
   * 
   * @example
   * custom
   */
  resourceOrigin?: string;
  /**
   * @remarks
   * The status of the protected object. Valid values:
   * 
   * - **initializing**: default protection is being initialized.
   * 
   * - **active**: running normally.
   * 
   * - **init_failed**: default protection initialization failed.
   * 
   * @example
   * active
   */
  resourceStatus?: string;
  /**
   * @remarks
   * The response header parameters.
   */
  responseHeaders?: DescribeDefenseResourceResponseBodyResourceResponseHeaders[];
  /**
   * @remarks
   * Specifies whether a Layer 7 proxy, such as Anti-DDoS or CDN, is enabled before WAF. Valid values:
   * 
   * - **0**: disabled.
   * 
   * - **1**: enabled.
   * 
   * @example
   * 0
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
      cookieConfig: DescribeDefenseResourceResponseBodyResourceCookieConfig,
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
      responseHeaders: { 'type': 'array', 'itemType': DescribeDefenseResourceResponseBodyResourceResponseHeaders },
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

export class DescribeDefenseResourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 439AADF2-368C-5E98-B14E-3086****0573
   */
  requestId?: string;
  /**
   * @remarks
   * The protected object information.
   */
  resource?: DescribeDefenseResourceResponseBodyResource;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resource: 'Resource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resource: DescribeDefenseResourceResponseBodyResource,
    };
  }

  validate() {
    if(this.resource && typeof (this.resource as any).validate === 'function') {
      (this.resource as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

