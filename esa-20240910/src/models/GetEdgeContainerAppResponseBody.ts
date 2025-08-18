// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEdgeContainerAppResponseBodyAppHealthCheck extends $dara.Model {
  /**
   * @remarks
   * The number of consecutive failed health checks required for an application to be considered as unhealthy.
   * 
   * @example
   * 5
   */
  failTimes?: number;
  /**
   * @remarks
   * The domain name that is used for health checks.
   * 
   * @example
   * test.com
   */
  host?: string;
  /**
   * @remarks
   * The range of health check status codes that indicate successful health checks.
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
   * The HTTP method that the health check request uses.
   * 
   * @example
   * HEAD
   */
  method?: string;
  /**
   * @remarks
   * The health check port.
   * 
   * @example
   * 80
   */
  port?: number;
  /**
   * @remarks
   * The number of consecutive successful health checks required for an application to be considered as healthy.
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
   * 
   * *   l7
   * *   l4
   * 
   * @example
   * l7
   */
  type?: string;
  /**
   * @remarks
   * The health check URL.
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
   * The time when the application was created.
   * 
   * @example
   * 2023-07-25T05:58:05Z
   */
  createTime?: string;
  /**
   * @remarks
   * The domain name that is associated with the application. If no domain name is associated with the application, the value is an empty string.
   * 
   * @example
   * www.1feel.cn
   */
  domainName?: string;
  /**
   * @remarks
   * The type of the gateway. Valid values:
   * 
   * *   l7: Layer 7 gateway.
   * *   l4: Layer 4 gateway.
   * 
   * @example
   * l7
   */
  gatewayType?: string;
  /**
   * @remarks
   * The information about health checks.
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
   * Indicates whether QUIC is enabled.
   * 
   * @example
   * false
   */
  quicCid?: string;
  /**
   * @remarks
   * The remarks about the application.
   * 
   * @example
   * test app
   */
  remarks?: string;
  /**
   * @remarks
   * The server port. Valid values: 1 to 65535.
   * 
   * @example
   * 80
   */
  servicePort?: number;
  /**
   * @remarks
   * The status of the application. Valid values:
   * 
   * *   creating: The application is being created.
   * *   failed: The application failed to be created.
   * *   created: The application is created.
   * 
   * @example
   * created
   */
  status?: string;
  /**
   * @remarks
   * The backend port, which is also the service port of the application. Valid values: 1 to 65535.
   * 
   * @example
   * 80
   */
  targetPort?: number;
  /**
   * @remarks
   * The time when the application was last modified. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format. The time is displayed in UTC.
   * 
   * @example
   * 2023-03-26T02:35:58Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The number of versions of the application.
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
   * The basic information about the application.
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

