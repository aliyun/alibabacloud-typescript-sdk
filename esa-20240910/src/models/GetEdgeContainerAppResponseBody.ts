// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEdgeContainerAppResponseBodyAppHealthCheck extends $dara.Model {
  /**
   * @remarks
   * The number of consecutive failed health checks required.
   * 
   * @example
   * 5
   */
  failTimes?: number;
  /**
   * @remarks
   * The domain name used for the health check.
   * 
   * @example
   * test.com
   */
  host?: string;
  /**
   * @remarks
   * The range of HTTP status codes that indicate a successful health check.
   * 
   * @example
   * http_2xx
   */
  httpCode?: string;
  /**
   * @remarks
   * The interval between health checks. Unit: seconds.
   * 
   * @example
   * 5
   */
  interval?: number;
  /**
   * @remarks
   * The method used for the health check.
   * 
   * @example
   * HEAD
   */
  method?: string;
  /**
   * @remarks
   * The Health Check Port of the application.
   * 
   * @example
   * 80
   */
  port?: number;
  /**
   * @remarks
   * The number of consecutive successful health checks required.
   * 
   * @example
   * 3
   */
  succTimes?: number;
  /**
   * @remarks
   * The timeout period of the health check. Unit: seconds.
   * 
   * @example
   * 60
   */
  timeout?: number;
  /**
   * @remarks
   * The health check type. Valid values:
   * - **l7**: Layer 7 gateway.
   * - **l4**: Layer 4 gateway.
   * 
   * @example
   * l7
   */
  type?: string;
  /**
   * @remarks
   * The path used for the health check.
   * 
   * @example
   * /health_check
   */
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      failTimes: 'FailTimes',
      host: 'Host',
      httpCode: 'HttpCode',
      interval: 'Interval',
      method: 'Method',
      port: 'Port',
      succTimes: 'SuccTimes',
      timeout: 'Timeout',
      type: 'Type',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failTimes: 'number',
      host: 'string',
      httpCode: 'string',
      interval: 'number',
      method: 'string',
      port: 'number',
      succTimes: 'number',
      timeout: 'number',
      type: 'string',
      uri: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEdgeContainerAppResponseBodyApp extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * app-88068867578379****
   */
  appId?: string;
  /**
   * @remarks
   * The creation time. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2023-07-25T05:58:05Z
   */
  createTime?: string;
  /**
   * @remarks
   * The domain name bound to the application. If no domain name is bound, an empty string is returned.
   * 
   * @example
   * www.1feel.cn
   */
  domainName?: string;
  /**
   * @remarks
   * The gateway type. Valid values:
   * - **l7**: Layer 7 gateway.
   * - **l4**: Layer 4 gateway.
   * 
   * @example
   * l7
   */
  gatewayType?: string;
  /**
   * @remarks
   * The health check information.
   */
  healthCheck?: GetEdgeContainerAppResponseBodyAppHealthCheck;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * test-app1
   */
  name?: string;
  /**
   * @remarks
   * Indicates whether QUIC support is enabled.
   * 
   * @example
   * false
   */
  quicCid?: string;
  /**
   * @remarks
   * The remarks of the application.
   * 
   * @example
   * test app
   */
  remarks?: string;
  /**
   * @remarks
   * The service port number. Valid values: **1 to 65535**.
   * 
   * @example
   * 80
   */
  servicePort?: number;
  /**
   * @remarks
   * The status of the application. Valid values:
   * - **creating**: Being created.
   * - **failed**: Creation failed.
   * - **created**: Created.
   * 
   * @example
   * created
   */
  status?: string;
  /**
   * @remarks
   * The backend port, which is also the service port of the application. Valid values: **1 to 65535**.
   * 
   * @example
   * 80
   */
  targetPort?: number;
  /**
   * @remarks
   * The last modification time of the application. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2023-03-26T02:35:58Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The number of application versions.
   * 
   * @example
   * 1
   */
  versionCount?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      createTime: 'CreateTime',
      domainName: 'DomainName',
      gatewayType: 'GatewayType',
      healthCheck: 'HealthCheck',
      name: 'Name',
      quicCid: 'QuicCid',
      remarks: 'Remarks',
      servicePort: 'ServicePort',
      status: 'Status',
      targetPort: 'TargetPort',
      updateTime: 'UpdateTime',
      versionCount: 'VersionCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      createTime: 'string',
      domainName: 'string',
      gatewayType: 'string',
      healthCheck: GetEdgeContainerAppResponseBodyAppHealthCheck,
      name: 'string',
      quicCid: 'string',
      remarks: 'string',
      servicePort: 'number',
      status: 'string',
      targetPort: 'number',
      updateTime: 'string',
      versionCount: 'number',
    };
  }

  validate() {
    if(this.healthCheck && typeof (this.healthCheck as any).validate === 'function') {
      (this.healthCheck as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEdgeContainerAppResponseBody extends $dara.Model {
  /**
   * @remarks
   * The basic application information.
   */
  app?: GetEdgeContainerAppResponseBodyApp;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 156A6B-677B1A-4297B7-9187B7-2B44792
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      app: 'App',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      app: GetEdgeContainerAppResponseBodyApp,
      requestId: 'string',
    };
  }

  validate() {
    if(this.app && typeof (this.app as any).validate === 'function') {
      (this.app as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

