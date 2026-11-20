// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDefenseResourceXffRequestCookieConfig extends $dara.Model {
  /**
   * @remarks
   * The SameSite policy of the slider cookie. Valid values:
   * 
   * - **None**: None.
   * 
   * - **Lax**: Lax.
   * 
   * - **Strict**: Strict.
   * 
   * > An empty string indicates that the SameSite attribute is not configured.   
   * If the SameSite policy is set to None, the Secure attribute must be enabled for the cookie.
   * 
   * @example
   * None
   */
  acwScV3SameSite?: string;
  /**
   * @remarks
   * The SameSite policy of the tracking cookie. Valid values:
   * 
   * - **None**: None.
   * 
   * - **Lax**: Lax.
   * 
   * - **Strict**: Strict.
   * 
   * > An empty string indicates that the SameSite attribute is not configured.  
   * If the SameSite policy is set to None, the Secure attribute must be enabled for the cookie.
   * 
   * @example
   * Lax
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

export class ModifyDefenseResourceXffRequestResponseHeaders extends $dara.Model {
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

export class ModifyDefenseResourceXffRequest extends $dara.Model {
  /**
   * @remarks
   * The status of the tracking cookie switch. Valid values:
   * 
   * - **0**: Disabled.
   * 
   * - **1** (default): Enabled.
   * 
   * @example
   * 0
   */
  acwCookieStatus?: number;
  /**
   * @remarks
   * The status of the Secure attribute for the tracking cookie. Valid values:
   * 
   * - **0** (default): Disabled.
   * 
   * - **1**: Enabled.
   * 
   * @example
   * 0
   */
  acwSecureStatus?: number;
  /**
   * @remarks
   * The status of the Secure attribute for the slider cookie. Valid values:
   * 
   * - **0** (default): Disabled.
   * 
   * - **1**: Enabled.
   * 
   * @example
   * 0
   */
  acwV3SecureStatus?: number;
  /**
   * @remarks
   * The aggregated configuration of cookie attributes.
   */
  cookieConfig?: ModifyDefenseResourceXffRequestCookieConfig;
  /**
   * @remarks
   * The list of specified header fields.
   * 
   * > The first IP address in the specified header field is used as the source IP address of the client to prevent X-Forwarded-For (XFF) spoofing. If multiple headers are specified, the system attempts to obtain the source IP address in sequence. If the first header does not contain an IP address, the system checks the second header, and so on. If no IP address is found in any of the specified headers, the first IP address in the X-Forwarded-For header is used.
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
   * The region where the WAF instance resides. Valid values:
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
   * > The protected object must be added to WAF. You can call the [DescribeDefenseResources](https://help.aliyun.com/document_detail/461612.html) operation to query the name of the protected object.
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
   * Specifies whether a Layer 7 proxy, such as Anti-DDoS or CDN, is enabled before WAF. Valid values:
   * 
   * - **0** (default): The proxy is disabled.
   * 
   * - **1**: The proxy is enabled.
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
      cookieConfig: 'CookieConfig',
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
      cookieConfig: ModifyDefenseResourceXffRequestCookieConfig,
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
    if(this.cookieConfig && typeof (this.cookieConfig as any).validate === 'function') {
      (this.cookieConfig as any).validate();
    }
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

