// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOpenSearchConnectionInfoResponseBodyAccessDeniedDetail extends $dara.Model {
  /**
   * @remarks
   * The authentication action.
   * 
   * @example
   * xxx
   */
  authAction?: string;
  /**
   * @remarks
   * The display name of the authentication principal.
   * 
   * @example
   * xxx
   */
  authPrincipalDisplayName?: string;
  /**
   * @remarks
   * The owner ID of the authentication principal.
   * 
   * @example
   * 111
   */
  authPrincipalOwnerId?: string;
  /**
   * @remarks
   * The description is the same as above.
   * 
   * @example
   * 222
   */
  authPrincipalType?: string;
  /**
   * @remarks
   * The diagnostic information.
   * 
   * @example
   * AQEAAAAAaKPfwjY0MzMyODRGLUZCQkQtNTA1RS04MUUxLTc5NTkzODk2MUIzMg==
   */
  encodedDiagnosticMessage?: string;
  /**
   * @remarks
   * NoPermissionType
   * 
   * @example
   * ImplicitDeny
   */
  noPermissionType?: string;
  /**
   * @remarks
   * The policy type.
   * 
   * @example
   * PRIORITY
   */
  policyType?: string;
  static names(): { [key: string]: string } {
    return {
      authAction: 'AuthAction',
      authPrincipalDisplayName: 'AuthPrincipalDisplayName',
      authPrincipalOwnerId: 'AuthPrincipalOwnerId',
      authPrincipalType: 'AuthPrincipalType',
      encodedDiagnosticMessage: 'EncodedDiagnosticMessage',
      noPermissionType: 'NoPermissionType',
      policyType: 'PolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authAction: 'string',
      authPrincipalDisplayName: 'string',
      authPrincipalOwnerId: 'string',
      authPrincipalType: 'string',
      encodedDiagnosticMessage: 'string',
      noPermissionType: 'string',
      policyType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOpenSearchConnectionInfoResponseBodyDataDashboardEndpoint extends $dara.Model {
  /**
   * @remarks
   * Specifies whether static frame check is enabled. Default value: false.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The host address.
   * 
   * @example
   * 100.118.102.0/24
   */
  host?: string;
  /**
   * @remarks
   * The port.
   * 
   * @example
   * 3306
   */
  port?: number;
  /**
   * @remarks
   * The URL.
   * 
   * @example
   * https://static.yipigai.cn/timuocr/tmp_c29e30497575a40193a24a7a83654e30e21b951cc6856cdb.jpg
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      host: 'Host',
      port: 'Port',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      host: 'string',
      port: 'number',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOpenSearchConnectionInfoResponseBodyDataDashboardPublicEndpoint extends $dara.Model {
  /**
   * @remarks
   * The service activation status. Valid values:
   * 
   * - **on**: Activated.
   * - **off**: Not activated.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The hostname. Retrieves data under the specified host.
   * 
   * @example
   * https://secnet-defense-vastip.oss-cn-hangzhou.aliyuncs.com
   */
  host?: string;
  /**
   * @remarks
   * The port.
   * 
   * @example
   * 3306
   */
  port?: number;
  /**
   * @remarks
   * The URL.
   * 
   * @example
   * https://static.yipigai.cn/timuocr/tmp_c29e30497575a40193a24a7a83654e30e21b951cc6856cdb.jpg
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      host: 'Host',
      port: 'Port',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      host: 'string',
      port: 'number',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOpenSearchConnectionInfoResponseBodyDataPrivateEndpoint extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the echo feature. This parameter is required. Valid values: true/false.
   * 
   * @example
   * True
   */
  enabled?: boolean;
  /**
   * @remarks
   * The OSS domain name.
   * 
   * @example
   * 100.118.214.0/24
   */
  host?: string;
  /**
   * @remarks
   * The port.
   * 
   * @example
   * 3306
   */
  port?: number;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      host: 'Host',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      host: 'string',
      port: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOpenSearchConnectionInfoResponseBodyDataPublicEndpoint extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable dead-letter message delivery.
   * 
   * @example
   * True
   */
  enabled?: boolean;
  /**
   * @remarks
   * The machine.
   * 
   * @example
   * 100.98.83.0/24
   */
  host?: string;
  /**
   * @remarks
   * The port.
   * 
   * @example
   * 3306
   */
  port?: number;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      host: 'Host',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      host: 'string',
      port: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOpenSearchConnectionInfoResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The internal endpoint of the OpenSearch Dashboard.
   */
  dashboardEndpoint?: DescribeOpenSearchConnectionInfoResponseBodyDataDashboardEndpoint;
  /**
   * @remarks
   * The public network access endpoint of the OpenSearch Dashboard.
   */
  dashboardPublicEndpoint?: DescribeOpenSearchConnectionInfoResponseBodyDataDashboardPublicEndpoint;
  /**
   * @remarks
   * The default account name of OpenSearch.
   * 
   * @example
   * elastic
   */
  defaultUsername?: string;
  /**
   * @remarks
   * The VPC endpoint of the instance.
   */
  privateEndpoint?: DescribeOpenSearchConnectionInfoResponseBodyDataPrivateEndpoint;
  /**
   * @remarks
   * The protocol of the monitoring task. Valid values:
   * 
   * - **ICMP**.
   * - **TCP**.
   * - **HTTP**.
   * 
   * > Private network monitoring supports only the ICMP and TCP protocols.
   * 
   * @example
   * HTTP
   */
  protocol?: string;
  /**
   * @remarks
   * The public endpoint of the instance.
   */
  publicEndpoint?: DescribeOpenSearchConnectionInfoResponseBodyDataPublicEndpoint;
  static names(): { [key: string]: string } {
    return {
      dashboardEndpoint: 'DashboardEndpoint',
      dashboardPublicEndpoint: 'DashboardPublicEndpoint',
      defaultUsername: 'DefaultUsername',
      privateEndpoint: 'PrivateEndpoint',
      protocol: 'Protocol',
      publicEndpoint: 'PublicEndpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dashboardEndpoint: DescribeOpenSearchConnectionInfoResponseBodyDataDashboardEndpoint,
      dashboardPublicEndpoint: DescribeOpenSearchConnectionInfoResponseBodyDataDashboardPublicEndpoint,
      defaultUsername: 'string',
      privateEndpoint: DescribeOpenSearchConnectionInfoResponseBodyDataPrivateEndpoint,
      protocol: 'string',
      publicEndpoint: DescribeOpenSearchConnectionInfoResponseBodyDataPublicEndpoint,
    };
  }

  validate() {
    if(this.dashboardEndpoint && typeof (this.dashboardEndpoint as any).validate === 'function') {
      (this.dashboardEndpoint as any).validate();
    }
    if(this.dashboardPublicEndpoint && typeof (this.dashboardPublicEndpoint as any).validate === 'function') {
      (this.dashboardPublicEndpoint as any).validate();
    }
    if(this.privateEndpoint && typeof (this.privateEndpoint as any).validate === 'function') {
      (this.privateEndpoint as any).validate();
    }
    if(this.publicEndpoint && typeof (this.publicEndpoint as any).validate === 'function') {
      (this.publicEndpoint as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOpenSearchConnectionInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the access denial.
   */
  accessDeniedDetail?: DescribeOpenSearchConnectionInfoResponseBodyAccessDeniedDetail;
  /**
   * @remarks
   * The data struct.
   */
  data?: DescribeOpenSearchConnectionInfoResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 9B2F3840-5C98-475C-B269-2D5C3A31797C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: DescribeOpenSearchConnectionInfoResponseBodyAccessDeniedDetail,
      data: DescribeOpenSearchConnectionInfoResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.accessDeniedDetail && typeof (this.accessDeniedDetail as any).validate === 'function') {
      (this.accessDeniedDetail as any).validate();
    }
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

