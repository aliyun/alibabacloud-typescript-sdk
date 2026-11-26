// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePrivateAccessApplicationL7SwitchResponseBodyL7SwitchPortRanges extends $dara.Model {
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

export class UpdatePrivateAccessApplicationL7SwitchResponseBodyL7SwitchUrlAccessPaths extends $dara.Model {
  /**
   * @remarks
   * The list of HTTP request methods allowed for the paths in this group. An empty value indicates that request methods are not restricted.
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

export class UpdatePrivateAccessApplicationL7SwitchResponseBodyL7Switch extends $dara.Model {
  /**
   * @remarks
   * The ID of the internal access application.
   * 
   * @example
   * pa-application-e12860ef6c48****
   */
  applicationId?: string;
  /**
   * @remarks
   * The device tag marking switch. Valid values:
   * - **Enabled**: Enabled.
   * - **Disabled**: Disabled.
   * 
   * @example
   * Disabled
   */
  devTagMarkStatus?: string;
  /**
   * @remarks
   * The download audit switch for sensitive applications. Valid values:
   * - **Enabled**: Enabled.
   * - **Disabled**: Disabled.
   * 
   * @example
   * Disabled
   */
  downloadAuditStatus?: string;
  /**
   * @remarks
   * The effective port ranges for Layer 7 access, which are the intersection of the ports specified in this request and the port ranges already configured for the internal access application. An empty set is returned when Status is set to **Disabled**.
   */
  portRanges?: UpdatePrivateAccessApplicationL7SwitchResponseBodyL7SwitchPortRanges[];
  /**
   * @remarks
   * The source IP marking switch. Valid values:
   * - **Enabled**: Enabled.
   * - **Disabled**: Disabled.
   * 
   * @example
   * Disabled
   */
  srcIpMarkStatus?: string;
  /**
   * @remarks
   * The master switch for the Layer 7 access switch of the internal access application. Valid values:
   * - **Enabled**: Enabled.
   * - **Disabled**: Disabled.
   * 
   * @example
   * Enabled
   */
  status?: string;
  /**
   * @remarks
   * The request timeout period in seconds.
   * 
   * @example
   * 60
   */
  timeoutSec?: number;
  /**
   * @remarks
   * The URL access whitelist rules for the application. This parameter takes effect only when Status is set to Enabled. An empty value indicates that URLs and request methods are not restricted. A request passes the URL check only when the request path and the method meet any group of rules at the same time. Otherwise, the request is blocked. Passing the URL check does not allow requests that are already blocked by an access policy.
   */
  urlAccessPaths?: UpdatePrivateAccessApplicationL7SwitchResponseBodyL7SwitchUrlAccessPaths[];
  /**
   * @remarks
   * The user marking switch. Valid values:
   * - **Enabled**: Enabled.
   * - **Disabled**: Disabled.
   * 
   * @example
   * Enabled
   */
  userMarkStatus?: string;
  /**
   * @remarks
   * The host bypass prevention switch. Valid values:
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
      portRanges: { 'type': 'array', 'itemType': UpdatePrivateAccessApplicationL7SwitchResponseBodyL7SwitchPortRanges },
      srcIpMarkStatus: 'string',
      status: 'string',
      timeoutSec: 'number',
      urlAccessPaths: { 'type': 'array', 'itemType': UpdatePrivateAccessApplicationL7SwitchResponseBodyL7SwitchUrlAccessPaths },
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

export class UpdatePrivateAccessApplicationL7SwitchResponseBody extends $dara.Model {
  /**
   * @remarks
   * The Layer 7 access switch configuration of the internal access application after this update.
   */
  l7Switch?: UpdatePrivateAccessApplicationL7SwitchResponseBodyL7Switch;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * BE4FB974-11BC-5453-9BE1-1606A73EACA6
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      l7Switch: 'L7Switch',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      l7Switch: UpdatePrivateAccessApplicationL7SwitchResponseBodyL7Switch,
      requestId: 'string',
    };
  }

  validate() {
    if(this.l7Switch && typeof (this.l7Switch as any).validate === 'function') {
      (this.l7Switch as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

