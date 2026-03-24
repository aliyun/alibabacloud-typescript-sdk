// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDefenseResourceResponseBodyResourceResponseHeaders extends $dara.Model {
  /**
   * @remarks
   * The key of the custom response header.
   * 
   * @example
   * Header-Key
   */
  key?: string;
  /**
   * @remarks
   * The value of the custom response header.
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
   * Indicates whether the tracking cookie feature is enabled. Valid values:
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
   * Indicates whether the secure attribute of the tracking cookie is enabled. Valid values:
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
   * Indicates whether the secure attribute of the slider CAPTCHA cookie is enabled. Valid values:
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
   * The list of custom header fields used to identify the actual client IP address.
   * 
   * > This parameter takes effect only when XffStatus is set to 1. WAF uses the first IP address in the specified header fields as the client source IP address to prevent X-Forwarded-For (XFF) spoofing. If multiple headers are specified, WAF checks them in order. If the first header does not contain a source IP address, WAF checks the next header. If none of the specified headers contain a source IP address, WAF uses the first IP address in the X-Forwarded-For header.
   */
  customHeaders?: string[];
  /**
   * @remarks
   * The description of the protected object.
   * 
   * @example
   * This is Description
   */
  description?: string;
  /**
   * @remarks
   * The details of the protected object. The fields vary based on the cloud service type.
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
   * The time when the protected object was created. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1607493144000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The time when the protected object was modified. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1691720010000
   */
  gmtModified?: number;
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * @example
   * waf_v2_public_cn-wwo****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the protected object belongs.
   * 
   * @example
   * 170457******9107
   */
  ownerUserId?: string;
  /**
   * @remarks
   * The protection pattern of the protected object.
   * 
   * @example
   * domain
   */
  pattern?: string;
  /**
   * @remarks
   * The type of cloud service to which the protected object belongs.
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
   * The name of the protected object group to which the protected object belongs.
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
   * The origin of the protected object. Valid values:
   * 
   * - **custom**: The protected object is created through provisioning.
   * 
   * - **access**: The protected object is user-defined.
   * 
   * @example
   * custom
   */
  resourceOrigin?: string;
  /**
   * @remarks
   * The custom response headers configured for the protected object.
   */
  responseHeaders?: DescribeDefenseResourceResponseBodyResourceResponseHeaders[];
  /**
   * @remarks
   * Indicates whether a Layer 7 proxy such as Anti-DDoS or CDN is enabled in front of WAF. Valid values:
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
      responseHeaders: 'ResponseHeaders',
      xffStatus: 'XffStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acwCookieStatus: 'number',
      acwSecureStatus: 'number',
      acwV3SecureStatus: 'number',
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
      responseHeaders: { 'type': 'array', 'itemType': DescribeDefenseResourceResponseBodyResourceResponseHeaders },
      xffStatus: 'number',
    };
  }

  validate() {
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
   * The ID of the request.
   * 
   * @example
   * 439AADF2-368C-5E98-B14E-3086****0573
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the protected object.
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

