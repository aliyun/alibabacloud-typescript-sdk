// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDefenseResourceXffRequestResponseHeaders extends $dara.Model {
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

export class ModifyDefenseResourceXffRequest extends $dara.Model {
  /**
   * @remarks
   * The status of the tracking cookie switch.
   * 
   * - **0**: disabled.
   * 
   * - **1 (default)**: enabled.
   * 
   * @example
   * 0
   */
  acwCookieStatus?: number;
  /**
   * @remarks
   * The status of the secure attribute of the tracking cookie.
   * 
   * - **0 (default)**: disabled.
   * 
   * - **1**: enabled.
   * 
   * @example
   * 0
   */
  acwSecureStatus?: number;
  /**
   * @remarks
   * The status of the secure attribute of the slider cookie.
   * 
   * - **0 (default)**: disabled.
   * 
   * - **1**: enabled.
   * 
   * @example
   * 0
   */
  acwV3SecureStatus?: number;
  /**
   * @remarks
   * The list of specified header fields.
   * 
   * > The first IP address in the specified header field is used as the client source IP address to prevent XFF spoofing. If multiple headers are specified, the system attempts to obtain the source IP address from the headers in order. If the first header does not contain an IP address, the system tries the second header, and so on. If none of the specified headers contain an IP address, the first IP address in the X-Forwarded-For header is used.
   */
  customHeaders?: string[];
  /**
   * @remarks
   * Instance ID of the WAF instance.
   * 
   * > You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query instance ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_v2_public_cn-wwo****ek07
   */
  instanceId?: string;
  /**
   * @remarks
   * The region where the WAF instance is deployed. Valid values:
   * 
   * - **cn-hangzhou**: the Chinese mainland.
   * 
   * - **ap-southeast-1**: outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the protected object.
   * 
   * > The protected object must have been added to WAF. You can call the [DescribeDefenseResources](https://help.aliyun.com/document_detail/461612.html) operation to query the name of the protected object.
   * 
   * This parameter is required.
   * 
   * @example
   * alb-4pxu81fgagx3h6y****-alb
   */
  resource?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-acfm2ki****miwq
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The response header parameters.
   */
  responseHeaders?: ModifyDefenseResourceXffRequestResponseHeaders[];
  /**
   * @remarks
   * Specifies whether a Layer 7 proxy (Anti-DDoS Pro, CDN, or similar) is deployed in front of WAF. Valid values:
   * 
   * - **0 (default)**: No Layer 7 proxy is deployed.
   * 
   * - **1**: A Layer 7 proxy is deployed.
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

