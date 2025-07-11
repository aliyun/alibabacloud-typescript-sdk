// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDefenseResourceResponseBodyResourceResponseHeaders extends $dara.Model {
  /**
   * @remarks
   * Specifies the key for a custom response header.
   * 
   * @example
   * Header-Key
   */
  key?: string;
  /**
   * @remarks
   * Specifies the value for a custom response header.
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
   * The status of the tracking cookie.
   * 
   * *   **0**: disabled.
   * *   **1**: enabled.
   * 
   * @example
   * 0
   */
  acwCookieStatus?: number;
  /**
   * @remarks
   * The status of the secure attribute of the tracking cookie.
   * 
   * *   **0**: disabled.
   * *   **1**: enabled.
   * 
   * @example
   * 0
   */
  acwSecureStatus?: number;
  /**
   * @remarks
   * The status of the secure attribute of the slider CAPTCHA cookie.
   * 
   * *   **0**: disabled.
   * *   **1**: enabled.
   * 
   * @example
   * 0
   */
  acwV3SecureStatus?: number;
  /**
   * @remarks
   * The custom header fields.
   * 
   * >  If the value of XffStatus is 1, the first IP address in the specified header field is used as the originating IP address of the client to prevent X-Forwarded-For (XFF) forgery. If you specify multiple header fields, WAF reads the values of the header fields in sequence until the originating IP address is obtained. If the originating IP address cannot be obtained, the first IP address in the XFF header field is used as the originating IP address of the client.
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
   * The details of the protected object. Different key-value pairs indicate different attributes of the protected object.
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
   * The user ID (UID) of the Alibaba Cloud account to which the protected object belongs.
   * 
   * @example
   * 170457******9107
   */
  ownerUserId?: string;
  /**
   * @remarks
   * The pattern used for the protected object.
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
   * *   **custom**
   * *   **access**
   * 
   * @example
   * custom
   */
  resourceOrigin?: string;
  /**
   * @remarks
   * The response header.
   */
  responseHeaders?: DescribeDefenseResourceResponseBodyResourceResponseHeaders[];
  /**
   * @remarks
   * Indicates whether a Layer 7 proxy is deployed in front of WAF, such as Anti-DDoS Proxy and Alibaba Cloud CDN. Valid values:
   * 
   * *   **0**: No Layer 7 proxy is deployed.
   * *   **1**: A Layer 7 proxy is deployed.
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
   * The request ID.
   * 
   * @example
   * 439AADF2-368C-5E98-B14E-3086****0573
   */
  requestId?: string;
  /**
   * @remarks
   * The protected object.
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

