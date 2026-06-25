// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApplicationSlbsResponseBodyDataInternet extends $dara.Model {
  connectionDrainTimeout?: number;
  /**
   * @remarks
   * The cookie that is configured on the server.
   * 
   * The cookie must be 1 to 200 characters in length and can contain only ASCII letters and digits. It cannot contain commas (,), semicolons (;), or spaces. It cannot start with a dollar sign ($).
   * 
   * > This parameter is required when `StickySession` is set to `true` and `StickySessionType` is set to `server`.
   * 
   * @example
   * wwe
   */
  cookie?: string;
  /**
   * @remarks
   * The cookie timeout period. Unit: seconds. Valid values: `1` to `86400`.
   * 
   * > This parameter is required when `StickySession` is set to `true` and `StickySessionType` is set to `insert`.
   * 
   * @example
   * 56
   */
  cookieTimeout?: number;
  /**
   * @remarks
   * The time when the rule was created. This value is a UNIX timestamp.
   * 
   * @example
   * 1741247308294
   */
  createTime?: number;
  enableConnectionDrain?: boolean;
  /**
   * @remarks
   * The ID of the CA certificate for the HTTPS protocol.
   * 
   * @example
   * 1513561019707729_16f37aae5f3_-375882821_-169099****
   */
  httpsCaCertId?: string;
  /**
   * @remarks
   * The ID of the certificate for the HTTPS protocol.
   * 
   * @example
   * 1513561019707729_16f37aae5f3_-375882821_-169099****
   */
  httpsCertId?: string;
  /**
   * @remarks
   * The listening port of the SLB instance.
   * 
   * @example
   * 80
   */
  port?: number;
  /**
   * @remarks
   * The supported protocol.
   * 
   * @example
   * TCP
   */
  protocol?: string;
  /**
   * @remarks
   * Indicates whether session persistence is enabled.
   * 
   * @example
   * false
   */
  stickySession?: boolean;
  /**
   * @remarks
   * The cookie handling method. Valid values:
   * 
   * - `insert`: inserts a cookie. When a client makes the first request, the SLB instance inserts a cookie into the response. The next request from the client contains the cookie, and the SLB instance forwards the request to the same backend server.
   * 
   * - `server`: rewrites a cookie. When the SLB instance detects a user-defined cookie, it rewrites the cookie. The next request from the client contains the new cookie, and the SLB instance forwards the request to the same backend server.
   * 
   * > This parameter is required when `StickySession` is set to `true`.
   * 
   * @example
   * insert
   */
  stickySessionType?: string;
  /**
   * @remarks
   * The container port.
   * 
   * @example
   * 8080
   */
  targetPort?: number;
  VServerGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      connectionDrainTimeout: 'ConnectionDrainTimeout',
      cookie: 'Cookie',
      cookieTimeout: 'CookieTimeout',
      createTime: 'CreateTime',
      enableConnectionDrain: 'EnableConnectionDrain',
      httpsCaCertId: 'HttpsCaCertId',
      httpsCertId: 'HttpsCertId',
      port: 'Port',
      protocol: 'Protocol',
      stickySession: 'StickySession',
      stickySessionType: 'StickySessionType',
      targetPort: 'TargetPort',
      VServerGroupId: 'VServerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionDrainTimeout: 'number',
      cookie: 'string',
      cookieTimeout: 'number',
      createTime: 'number',
      enableConnectionDrain: 'boolean',
      httpsCaCertId: 'string',
      httpsCertId: 'string',
      port: 'number',
      protocol: 'string',
      stickySession: 'boolean',
      stickySessionType: 'string',
      targetPort: 'number',
      VServerGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationSlbsResponseBodyDataIntranet extends $dara.Model {
  connectionDrainTimeout?: number;
  /**
   * @remarks
   * The cookie that is configured on the server.
   * 
   * The cookie must be 1 to 200 characters in length and can contain only ASCII letters and digits. It cannot contain commas (,), semicolons (;), or spaces. It cannot start with a dollar sign ($).
   * 
   * > This parameter is required when `StickySession` is set to `true` and `StickySessionType` is set to `server`.
   * 
   * @example
   * wwe
   */
  cookie?: string;
  /**
   * @remarks
   * The cookie timeout period. Unit: seconds. Valid values: `1` to `86400`.
   * 
   * > This parameter is required when `StickySession` is set to `true` and `StickySessionType` is set to `insert`.
   * 
   * @example
   * 56
   */
  cookieTimeout?: number;
  /**
   * @remarks
   * The time when the rule was created. This value is a UNIX timestamp.
   * 
   * @example
   * 1741247308294
   */
  createTime?: number;
  enableConnectionDrain?: boolean;
  /**
   * @remarks
   * The ID of the CA certificate for the HTTPS protocol.
   * 
   * @example
   * 1513561019707729_16f37aae5f3_-375882821_-169099****
   */
  httpsCaCertId?: string;
  /**
   * @remarks
   * The ID of the certificate for the HTTPS protocol.
   * 
   * @example
   * 1513561019707729_16f37aae5f3_-375882821_-169099****
   */
  httpsCertId?: string;
  /**
   * @remarks
   * The listening port of the SLB instance.
   * 
   * @example
   * 80
   */
  port?: number;
  /**
   * @remarks
   * The supported protocol.
   * 
   * @example
   * TCP
   */
  protocol?: string;
  /**
   * @remarks
   * Indicates whether session persistence is enabled.
   * 
   * @example
   * false
   */
  stickySession?: boolean;
  /**
   * @remarks
   * The cookie handling method. Valid values:
   * 
   * - `insert`: inserts a cookie. When a client makes the first request, the SLB instance inserts a cookie into the response. The next request from the client contains the cookie, and the SLB instance forwards the request to the same backend server.
   * 
   * - `server`: rewrites a cookie. When the SLB instance detects a user-defined cookie, it rewrites the cookie. The next request from the client contains the new cookie, and the SLB instance forwards the request to the same backend server.
   * 
   * > This parameter is required when `StickySession` is set to `true`.
   * 
   * @example
   * insert
   */
  stickySessionType?: string;
  /**
   * @remarks
   * The container port.
   * 
   * @example
   * 8080
   */
  targetPort?: number;
  VServerGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      connectionDrainTimeout: 'ConnectionDrainTimeout',
      cookie: 'Cookie',
      cookieTimeout: 'CookieTimeout',
      createTime: 'CreateTime',
      enableConnectionDrain: 'EnableConnectionDrain',
      httpsCaCertId: 'HttpsCaCertId',
      httpsCertId: 'HttpsCertId',
      port: 'Port',
      protocol: 'Protocol',
      stickySession: 'StickySession',
      stickySessionType: 'StickySessionType',
      targetPort: 'TargetPort',
      VServerGroupId: 'VServerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionDrainTimeout: 'number',
      cookie: 'string',
      cookieTimeout: 'number',
      createTime: 'number',
      enableConnectionDrain: 'boolean',
      httpsCaCertId: 'string',
      httpsCertId: 'string',
      port: 'number',
      protocol: 'string',
      stickySession: 'boolean',
      stickySessionType: 'string',
      targetPort: 'number',
      VServerGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationSlbsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   */
  appId?: string;
  /**
   * @remarks
   * The application name.
   */
  appName?: string;
  /**
   * @remarks
   * The cluster ID.
   */
  clusterId?: string;
  /**
   * @remarks
   * The configurations of the Internet-facing SLB instance.
   */
  internet?: DescribeApplicationSlbsResponseBodyDataInternet[];
  /**
   * @remarks
   * The public IP address.
   * 
   * @example
   * ``59.74.**.**``
   */
  internetIp?: string;
  /**
   * @remarks
   * The billing method of the Internet-facing SLB instance.
   * 
   * @example
   * PayBySpec
   */
  internetSlbChargeType?: string;
  /**
   * @remarks
   * Indicates whether the Internet-facing SLB instance has expired.
   * 
   * @example
   * false
   */
  internetSlbExpired?: boolean;
  /**
   * @remarks
   * The ID of the Internet-facing SLB instance.
   * 
   * @example
   * lb-uf6xc7wybefehnv45****
   */
  internetSlbId?: string;
  /**
   * @remarks
   * The configurations of the internal-facing SLB instance.
   */
  intranet?: DescribeApplicationSlbsResponseBodyDataIntranet[];
  /**
   * @remarks
   * The private IP address.
   * 
   * @example
   * 192.168.XX.XX
   */
  intranetIp?: string;
  /**
   * @remarks
   * The billing method of the internal-facing SLB instance.
   * 
   * @example
   * PayBySpec
   */
  intranetSlbChargeType?: string;
  /**
   * @remarks
   * Indicates whether the internal-facing SLB instance has expired.
   * 
   * @example
   * false
   */
  intranetSlbExpired?: boolean;
  /**
   * @remarks
   * The ID of the internal-facing SLB instance.
   * 
   * @example
   * lb-uf6xc7wybefehnv45****
   */
  intranetSlbId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      clusterId: 'ClusterId',
      internet: 'Internet',
      internetIp: 'InternetIp',
      internetSlbChargeType: 'InternetSlbChargeType',
      internetSlbExpired: 'InternetSlbExpired',
      internetSlbId: 'InternetSlbId',
      intranet: 'Intranet',
      intranetIp: 'IntranetIp',
      intranetSlbChargeType: 'IntranetSlbChargeType',
      intranetSlbExpired: 'IntranetSlbExpired',
      intranetSlbId: 'IntranetSlbId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      clusterId: 'string',
      internet: { 'type': 'array', 'itemType': DescribeApplicationSlbsResponseBodyDataInternet },
      internetIp: 'string',
      internetSlbChargeType: 'string',
      internetSlbExpired: 'boolean',
      internetSlbId: 'string',
      intranet: { 'type': 'array', 'itemType': DescribeApplicationSlbsResponseBodyDataIntranet },
      intranetIp: 'string',
      intranetSlbChargeType: 'string',
      intranetSlbExpired: 'boolean',
      intranetSlbId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.internet)) {
      $dara.Model.validateArray(this.internet);
    }
    if(Array.isArray(this.intranet)) {
      $dara.Model.validateArray(this.intranet);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationSlbsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code. Valid values:
   * 
   * - `2xx`: The request is successful.
   * 
   * - `3xx`: The request is redirected.
   * 
   * - `4xx`: A client error occurs.
   * 
   * - `5xx`: A server error occurs.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned result.
   */
  data?: DescribeApplicationSlbsResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * - This parameter is not returned if the request is successful.
   * 
   * - This parameter is returned if the request fails. For more information, see the **Error codes** section in this topic.
   */
  errorCode?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * - If the request is successful, `success` is returned.
   * 
   * - If the request fails, a specific error code is returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 91F93257-7A4A-4BD3-9A7E-2F6EAE6D****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the configuration of the SLB instance was obtained. Valid values:
   * 
   * - `true`: The configuration was obtained.
   * 
   * - `false`: The configuration failed to be obtained.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The trace ID that is used to query the details of a request.
   * 
   * @example
   * 0a98a02315955564772843261e****
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DescribeApplicationSlbsResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

