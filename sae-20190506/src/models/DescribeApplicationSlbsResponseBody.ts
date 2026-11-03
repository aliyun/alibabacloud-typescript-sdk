// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApplicationSlbsResponseBodyDataInternet extends $dara.Model {
  /**
   * @example
   * 100
   */
  connectionDrainTimeout?: number;
  /**
   * @remarks
   * The cookie configured on the server.
   * 
   * The cookie must be 1 to 200 characters in length and can contain only ASCII letters and digits. It cannot contain commas (,), semicolons (;), or spaces, and cannot start with a dollar sign ($).
   * 
   * > This parameter is required and valid only when **StickySession** is set to **on** and **StickySessionType** is set to **server**.
   * 
   * @example
   * wwe
   */
  cookie?: string;
  /**
   * @remarks
   * The cookie timeout period. Unit: seconds. Valid values: **1** to **86400**.
   * 
   * > This parameter is required and valid only when **StickySession** is set to **on** and **StickySessionType** is set to **insert**.
   * 
   * @example
   * 56
   */
  cookieTimeout?: number;
  /**
   * @remarks
   * The timestamp when the rule was created.
   * 
   * @example
   * 1741247308294
   */
  createTime?: number;
  enableConnectionDrain?: boolean;
  /**
   * @remarks
   * The ID of the Alibaba Cloud CA certificate for the HTTPS protocol.
   * 
   * @example
   * 1513561019707729_16f37aae5f3_-375882821_-169099****
   */
  httpsCaCertId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud certificate for the HTTPS protocol.
   * 
   * @example
   * 1513561019707729_16f37aae5f3_-375882821_-169099****
   */
  httpsCertId?: string;
  /**
   * @remarks
   * The SLB listener port.
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
   * The cookie processing method. Valid values:
   * 
   * - **insert**: Inserts a cookie. When a client accesses the service for the first time, load balancing inserts a cookie into the response. The next time the client accesses the service with this cookie, the load balancing service forwards the request to the previously recorded backend server.
   * 
   * - **server**: Rewrites a cookie. When load balancing detects a user-defined cookie, it rewrites the original cookie. The next time the client accesses the service with the new cookie, the load balancing service forwards the request to the previously recorded backend server.
   * 
   * > This parameter is required and valid only when **StickySession** is set to **on**.
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
  /**
   * @example
   * 100
   */
  connectionDrainTimeout?: number;
  /**
   * @remarks
   * The cookie configured on the server.
   * 
   * The cookie must be 1 to 200 characters in length and can contain only ASCII letters and digits. It cannot contain commas (,), semicolons (;), or spaces, and cannot start with a dollar sign ($).
   * 
   * > This parameter is required and valid only when **StickySession** is set to **on** and **StickySessionType** is set to **server**.
   * 
   * @example
   * wwe
   */
  cookie?: string;
  /**
   * @remarks
   * The cookie timeout period. Unit: seconds. Valid values: **1** to **86400**.
   * 
   * > This parameter is required and valid only when **StickySession** is set to **on** and **StickySessionType** is set to **insert**.
   * 
   * @example
   * 56
   */
  cookieTimeout?: number;
  /**
   * @remarks
   * The timestamp when the rule was created.
   * 
   * @example
   * 1741247308294
   */
  createTime?: number;
  enableConnectionDrain?: boolean;
  /**
   * @remarks
   * The ID of the Alibaba Cloud CA certificate for the HTTPS protocol.
   * 
   * @example
   * 1513561019707729_16f37aae5f3_-375882821_-169099****
   */
  httpsCaCertId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud certificate for the HTTPS protocol.
   * 
   * @example
   * 1513561019707729_16f37aae5f3_-375882821_-169099****
   */
  httpsCertId?: string;
  /**
   * @remarks
   * The SLB listener port.
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
   * The cookie processing method. Valid values:
   * 
   * - **insert**: Inserts a cookie. When a client accesses the service for the first time, load balancing inserts a cookie into the response. The next time the client accesses the service with this cookie, the load balancing service forwards the request to the previously recorded backend server.
   * 
   * - **server**: Rewrites a cookie. When load balancing detects a user-defined cookie, it rewrites the original cookie. The next time the client accesses the service with the new cookie, the load balancing service forwards the request to the previously recorded backend server.
   * 
   * > This parameter is required and valid only when **StickySession** is set to **on**.
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
   * The ID of the application.
   * 
   * @example
   * 7171a6ca-d1cd-4928-8642-7d5cfe69****
   */
  appId?: string;
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * demo-app
   */
  appName?: string;
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * @example
   * 495fc79c-ae61-4600-866d-a09d68******
   */
  clusterId?: string;
  /**
   * @remarks
   * The Internet-facing SLB configuration.
   */
  internet?: DescribeApplicationSlbsResponseBodyDataInternet[];
  /**
   * @remarks
   * The Internet-facing SLB address.
   * 
   * @example
   * ``59.74.**.**``
   */
  internetIp?: string;
  /**
   * @remarks
   * The billing method of Internet-facing load balancing.
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
   * The internal SLB configuration.
   */
  intranet?: DescribeApplicationSlbsResponseBodyDataIntranet[];
  /**
   * @remarks
   * The internal IP address of the SLB instance.
   * 
   * @example
   * 192.168.XX.XX
   */
  intranetIp?: string;
  /**
   * @remarks
   * The billing method of internal load balancing.
   * 
   * @example
   * PayBySpec
   */
  intranetSlbChargeType?: string;
  /**
   * @remarks
   * Indicates whether the internal SLB instance has expired.
   * 
   * @example
   * false
   */
  intranetSlbExpired?: boolean;
  /**
   * @remarks
   * The ID of the internal SLB instance.
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
   * The API status code or POP error code. Valid values:
   * 
   * - **2xx**: Success.
   * - **3xx**: Redirection.
   * - **4xx**: Client error.
   * - **5xx**: Server error.
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
   * The error code. Description:
   * 
   * - If the request is successful, the **ErrorCode** parameter is not returned.
   * - If the request fails, the **ErrorCode** parameter is returned. For more information, see the **Error codes** section in this topic.
   * 
   * @example
   * InvalidApplication.NotFound
   */
  errorCode?: string;
  /**
   * @remarks
   * The additional information. Valid values:
   * 
   * - **success**: The request is successful.
   * - Specific error code: The request failed.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 91F93257-7A4A-4BD3-9A7E-2F6EAE6D****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the SLB configuration of the application was successfully retrieved. Valid values:
   * 
   * - **true**: The configuration was successfully retrieved.
   * 
   * - **false**: The configuration failed to be retrieved.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The trace ID used to precisely query call information.
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

