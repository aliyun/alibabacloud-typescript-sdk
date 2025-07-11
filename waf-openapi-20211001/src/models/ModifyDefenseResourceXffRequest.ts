// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDefenseResourceXffRequestResponseHeaders extends $dara.Model {
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

export class ModifyDefenseResourceXffRequest extends $dara.Model {
  /**
   * @remarks
   * The status of the tracking cookie.
   * 
   * *   **0**: disabled
   * *   **1**: enabled. This is the default value.
   * 
   * @example
   * 0
   */
  acwCookieStatus?: number;
  /**
   * @remarks
   * The status of the secure attribute of the tracking cookie.
   * 
   * *   **0**: disabled. This is the default value.
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
   * *   **0**: disabled. This is the default value.
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
   * >  The first IP address in the specified custom header field is used as the originating IP address of the client to prevent X-Forwarded-For forgery. If you specify multiple header fields, WAF reads the values of the header fields in sequence until the originating IP address is obtained. If the originating IP address cannot be obtained, the first IP address in the X-Forwarded-For header is used as the originating IP address of the client.
   */
  customHeaders?: string[];
  /**
   * @remarks
   * The ID of the Web Application Firewall (WAF) instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_v2_public_cn-wwo3c****07
   */
  instanceId?: string;
  /**
   * @remarks
   * The region in which the WAF instance is deployed. Valid values:
   * 
   * *   **cn-hangzhou**: Chinese mainland.
   * *   **ap-southeast-1**: outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the protected object.
   * 
   * This parameter is required.
   * 
   * @example
   * alb-4pxu81fgagx3****mz-alb
   */
  resource?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-acfm2kie2****wq
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The response header.
   */
  responseHeaders?: ModifyDefenseResourceXffRequestResponseHeaders[];
  /**
   * @remarks
   * Specifies whether a Layer 7 proxy is deployed in front of WAF. Layer 7 proxies include Anti-DDoS Proxy and Alibaba Cloud CDN. Valid values:
   * 
   * *   **0**: No Layer 7 proxies are deployed. This is the default value.
   * *   **1**: A Layer 7 proxy is deployed.
   * 
   * This parameter is required.
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
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resource: 'Resource',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
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
      instanceId: 'string',
      regionId: 'string',
      resource: 'string',
      resourceManagerResourceGroupId: 'string',
      responseHeaders: { 'type': 'array', 'itemType': ModifyDefenseResourceXffRequestResponseHeaders },
      xffStatus: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.customHeaders)) {
      $dara.Model.validateArray(this.customHeaders);
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

