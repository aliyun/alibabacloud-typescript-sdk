// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApplicationSlbsResponseBodyDataInternet extends $dara.Model {
  /**
   * @example
   * wwe
   */
  cookie?: string;
  /**
   * @example
   * 56
   */
  cookieTimeout?: number;
  /**
   * @remarks
   * The timestamp when the canary release rule was created.
   * 
   * @example
   * 1741247308294
   */
  createTime?: number;
  /**
   * @example
   * 1513561019707729_16f37aae5f3_-375882821_-169099****
   */
  httpsCaCertId?: string;
  /**
   * @remarks
   * The supported protocol.
   * 
   * @example
   * 1513561019707729_16f37aae5f3_-375882821_-169099****
   */
  httpsCertId?: string;
  /**
   * @remarks
   * The ID of the internal-facing SLB instance.
   * 
   * @example
   * 80
   */
  port?: number;
  /**
   * @remarks
   * The container port.
   * 
   * @example
   * TCP
   */
  protocol?: string;
  /**
   * @example
   * false
   */
  stickySession?: boolean;
  /**
   * @example
   * insert
   */
  stickySessionType?: string;
  /**
   * @remarks
   * The port specified for the SLB listener.
   * 
   * @example
   * 8080
   */
  targetPort?: number;
  static names(): { [key: string]: string } {
    return {
      cookie: 'Cookie',
      cookieTimeout: 'CookieTimeout',
      createTime: 'CreateTime',
      httpsCaCertId: 'HttpsCaCertId',
      httpsCertId: 'HttpsCertId',
      port: 'Port',
      protocol: 'Protocol',
      stickySession: 'StickySession',
      stickySessionType: 'StickySessionType',
      targetPort: 'TargetPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cookie: 'string',
      cookieTimeout: 'number',
      createTime: 'number',
      httpsCaCertId: 'string',
      httpsCertId: 'string',
      port: 'number',
      protocol: 'string',
      stickySession: 'boolean',
      stickySessionType: 'string',
      targetPort: 'number',
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
  /**
   * @example
   * wwe
   */
  cookie?: string;
  /**
   * @example
   * 56
   */
  cookieTimeout?: number;
  /**
   * @remarks
   * The timestamp when the canary release rule was created.
   * 
   * @example
   * 1741247308294
   */
  createTime?: number;
  /**
   * @example
   * 1513561019707729_16f37aae5f3_-375882821_-169099****
   */
  httpsCaCertId?: string;
  /**
   * @remarks
   * The supported protocol.
   * 
   * @example
   * 1513561019707729_16f37aae5f3_-375882821_-169099****
   */
  httpsCertId?: string;
  /**
   * @remarks
   * The IP address of the Internet-facing SLB instance.
   * 
   * @example
   * 80
   */
  port?: number;
  /**
   * @remarks
   * The container port.
   * 
   * @example
   * TCP
   */
  protocol?: string;
  /**
   * @example
   * false
   */
  stickySession?: boolean;
  /**
   * @example
   * insert
   */
  stickySessionType?: string;
  /**
   * @remarks
   * The port specified for the SLB listener.
   * 
   * @example
   * 8080
   */
  targetPort?: number;
  static names(): { [key: string]: string } {
    return {
      cookie: 'Cookie',
      cookieTimeout: 'CookieTimeout',
      createTime: 'CreateTime',
      httpsCaCertId: 'HttpsCaCertId',
      httpsCertId: 'HttpsCertId',
      port: 'Port',
      protocol: 'Protocol',
      stickySession: 'StickySession',
      stickySessionType: 'StickySessionType',
      targetPort: 'TargetPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cookie: 'string',
      cookieTimeout: 'number',
      createTime: 'number',
      httpsCaCertId: 'string',
      httpsCertId: 'string',
      port: 'number',
      protocol: 'string',
      stickySession: 'boolean',
      stickySessionType: 'string',
      targetPort: 'number',
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
  appId?: string;
  appName?: string;
  clusterId?: string;
  /**
   * @remarks
   * The configurations of the Internet-facing SLB instance.
   */
  internet?: DescribeApplicationSlbsResponseBodyDataInternet[];
  /**
   * @remarks
   * The ID of the Internet-facing SLB instance.
   * 
   * @example
   * ``59.74.**.**``
   */
  internetIp?: string;
  /**
   * @example
   * PayBySpec
   */
  internetSlbChargeType?: string;
  /**
   * @example
   * false
   */
  internetSlbExpired?: boolean;
  /**
   * @remarks
   * Configurations of Internet-facing SLB instances.
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
   * The error code.
   * 
   * *   The **ErrorCode** parameter is not returned when the request succeeds.
   * *   The **ErrorCode** parameter is returned when the request fails. For more information, see **Error codes** in this topic.
   * 
   * @example
   * 192.168.0.0
   */
  intranetIp?: string;
  /**
   * @example
   * PayBySpec
   */
  intranetSlbChargeType?: string;
  /**
   * @example
   * false
   */
  intranetSlbExpired?: boolean;
  /**
   * @remarks
   * The IP address of the internal-facing SLB instance.
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
   * Indicates whether the information about the SLB instances that are associated with an application was obtained successfully. Valid values:
   * 
   * *   **true**: indicates that the information was obtained successfully.
   * *   **false**: indicates that the information failed to be obtained.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: DescribeApplicationSlbsResponseBodyData;
  /**
   * @remarks
   * The HTTP status code. Valid values:
   * 
   * *   **2xx**: indicates that the request was successful.
   * *   **3xx**: indicates that the request was redirected.
   * *   **4xx**: indicates that the request was invalid.
   * *   **5xx**: indicates that a server error occurred.
   */
  errorCode?: string;
  /**
   * @remarks
   * The ID of the trace. It can be used to query the details of a request.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * *   **success** is returned when the request succeeds.
   * *   An error code is returned when the request fails.
   * 
   * @example
   * 91F93257-7A4A-4BD3-9A7E-2F6EAE6D****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The returned data.
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

