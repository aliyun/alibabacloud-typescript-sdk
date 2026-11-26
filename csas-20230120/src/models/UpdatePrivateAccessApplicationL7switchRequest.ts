// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePrivateAccessApplicationL7SwitchRequestPortRanges extends $dara.Model {
  /**
   * @remarks
   * The start port. The value must be less than or equal to the end port.
   * 
   * @example
   * 80
   */
  begin?: number;
  /**
   * @remarks
   * The end port. The value must be greater than or equal to the start port.
   * 
   * @example
   * 81
   */
  end?: number;
  static names(): { [key: string]: string } {
    return {
      begin: 'Begin',
      end: 'End',
    };
  }

  static types(): { [key: string]: any } {
    return {
      begin: 'number',
      end: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePrivateAccessApplicationL7SwitchRequestUrlAccessPaths extends $dara.Model {
  /**
   * @remarks
   * The list of HTTP request methods allowed for the paths in this group. You can specify up to 7 methods. If this parameter is not specified or an empty array is specified, the request methods are not restricted.
   */
  allowMethods?: string[];
  /**
   * @remarks
   * The list of URL paths allowed for access in this group. You must specify at least 1 path and up to 20 paths. The paths match the path part in the request, excluding the protocol, domain name, and query parameters.
   */
  urls?: string[];
  static names(): { [key: string]: string } {
    return {
      allowMethods: 'AllowMethods',
      urls: 'Urls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowMethods: { 'type': 'array', 'itemType': 'string' },
      urls: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.allowMethods)) {
      $dara.Model.validateArray(this.allowMethods);
    }
    if(Array.isArray(this.urls)) {
      $dara.Model.validateArray(this.urls);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePrivateAccessApplicationL7SwitchRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the internal access application. Required.
   * 
   * @example
   * pa-application-e12860ef6c48****
   */
  applicationId?: string;
  /**
   * @remarks
   * The device tag marking switch. Required. Valid values:
   * - **Enabled**: Enabled.
   * - **Disabled**: Disabled.
   * 
   * @example
   * Disabled
   */
  devTagMarkStatus?: string;
  /**
   * @remarks
   * The download audit switch for sensitive applications. Optional. Valid values:
   * - **Enabled**: Enabled.
   * - **Disabled**: Disabled.
   * 
   * @example
   * Disabled
   */
  downloadAuditStatus?: string;
  /**
   * @remarks
   * The port ranges for the internal access application. Multiple port ranges cannot be duplicate or overlap. You can specify up to 50 port ranges. This parameter takes effect and is verified only when Status is set to **Enabled**. If this parameter is not specified or an empty set is specified, the default ports 80, 443, 8080, and 465 are used. The effective ports are the intersection of the ports specified in this request and the port ranges already configured for the internal access application.
   */
  portRanges?: UpdatePrivateAccessApplicationL7SwitchRequestPortRanges[];
  /**
   * @remarks
   * The source IP marking switch. Required. Valid values:
   * - **Enabled**: Enabled.
   * - **Disabled**: Disabled.
   * 
   * @example
   * Disabled
   */
  srcIpMarkStatus?: string;
  /**
   * @remarks
   * The master switch for the Layer 7 access switch of the internal access application. Required. Valid values:
   * - **Enabled**: Enabled.
   * - **Disabled**: Disabled.
   * 
   * When the value is **Disabled**, PortRanges is neither verified nor saved.
   * 
   * @example
   * Enabled
   */
  status?: string;
  /**
   * @remarks
   * The request timeout period in seconds. Valid values: 1 to 3600. Default value: 60. If this parameter is not specified or an invalid value is specified, the default value 60 is used.
   * 
   * @example
   * 60
   */
  timeoutSec?: number;
  /**
   * @remarks
   * The URL access whitelist rules for the application. You can specify up to 20 rule groups. The size cannot exceed 2,048 bytes after JSON serialization. This parameter takes effect only when Status is set to Enabled. A request passes the URL check only when its path and method meet any group of rules at the same time; otherwise, the request is blocked. Requests that are already blocked by access policies are not allowed even if they pass the URL check. If this parameter is not specified or an empty array is specified, the original rules are cleared. The rules are also cleared when Status is set to Disabled.
   */
  urlAccessPaths?: UpdatePrivateAccessApplicationL7SwitchRequestUrlAccessPaths[];
  /**
   * @remarks
   * The user marking switch. Required. Valid values:
   * - **Enabled**: Enabled.
   * - **Disabled**: Disabled.
   * 
   * @example
   * Enabled
   */
  userMarkStatus?: string;
  /**
   * @remarks
   * The host bypass prevention switch. Required. Valid values:
   * - **Enabled**: Enabled.
   * - **Disabled**: Disabled.
   * 
   * @example
   * Enabled
   */
  zeroTrustStatus?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      devTagMarkStatus: 'DevTagMarkStatus',
      downloadAuditStatus: 'DownloadAuditStatus',
      portRanges: 'PortRanges',
      srcIpMarkStatus: 'SrcIpMarkStatus',
      status: 'Status',
      timeoutSec: 'TimeoutSec',
      urlAccessPaths: 'UrlAccessPaths',
      userMarkStatus: 'UserMarkStatus',
      zeroTrustStatus: 'ZeroTrustStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      devTagMarkStatus: 'string',
      downloadAuditStatus: 'string',
      portRanges: { 'type': 'array', 'itemType': UpdatePrivateAccessApplicationL7SwitchRequestPortRanges },
      srcIpMarkStatus: 'string',
      status: 'string',
      timeoutSec: 'number',
      urlAccessPaths: { 'type': 'array', 'itemType': UpdatePrivateAccessApplicationL7SwitchRequestUrlAccessPaths },
      userMarkStatus: 'string',
      zeroTrustStatus: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.portRanges)) {
      $dara.Model.validateArray(this.portRanges);
    }
    if(Array.isArray(this.urlAccessPaths)) {
      $dara.Model.validateArray(this.urlAccessPaths);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

