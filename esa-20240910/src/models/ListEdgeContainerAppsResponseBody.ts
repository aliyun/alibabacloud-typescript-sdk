// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEdgeContainerAppsResponseBodyAppsHealthCheck extends $dara.Model {
  /**
   * @remarks
   * The number of consecutive failed health checks for an application to be considered unhealthy.
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
   * http_2XX
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
   * The HTTP method used for health checks.
   * 
   * @example
   * GET
   */
  method?: string;
  /**
   * @remarks
   * The health check port.
   * 
   * @example
   * 8080
   */
  port?: number;
  /**
   * @remarks
   * The number of consecutive successful health checks for an application to be considered healthy.
   * 
   * @example
   * 1
   */
  succTimes?: number;
  /**
   * @remarks
   * The timeout period of health checks. Unit: seconds.
   * 
   * @example
   * 60
   */
  timeout?: number;
  /**
   * @remarks
   * The type of health checks. Valid values:
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

export class ListEdgeContainerAppsResponseBodyApps extends $dara.Model {
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
   * The time when the version was created.
   * 
   * @example
   * 2022-12-01T16:16:27.418298794+08:00
   */
  createTime?: string;
  /**
   * @remarks
   * The domain name associated with the application.
   * 
   * @example
   * test.com
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
  healthCheck?: ListEdgeContainerAppsResponseBodyAppsHealthCheck;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * app-test
   */
  name?: string;
  /**
   * @remarks
   * The progress of the application creation task in percentage.
   * 
   * @example
   * 100
   */
  percentage?: number;
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
   * The remarks.
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
   * 2023-11-15T12:11:02Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The number of versions of the application.
   * 
   * @example
   * 10
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
      percentage: 'Percentage',
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
      healthCheck: ListEdgeContainerAppsResponseBodyAppsHealthCheck,
      name: 'string',
      percentage: 'number',
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

export class ListEdgeContainerAppsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried applications.
   */
  apps?: ListEdgeContainerAppsResponseBodyApps[];
  /**
   * @remarks
   * The page number. Default value: **1**. Valid values: 1 to 65535.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 500.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2430E05E-1340-5773-B5E1-B743929F46F2
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      apps: 'Apps',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apps: { 'type': 'array', 'itemType': ListEdgeContainerAppsResponseBodyApps },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.apps)) {
      $dara.Model.validateArray(this.apps);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

