// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEdgeContainerAppResponseBodyAppHealthCheck extends $dara.Model {
  failTimes?: number;
  host?: string;
  httpCode?: string;
  interval?: number;
  method?: string;
  port?: number;
  succTimes?: number;
  timeout?: number;
  type?: string;
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
  appId?: string;
  createTime?: string;
  domainName?: string;
  gatewayType?: string;
  healthCheck?: GetEdgeContainerAppResponseBodyAppHealthCheck;
  name?: string;
  quicCid?: string;
  remarks?: string;
  servicePort?: number;
  status?: string;
  targetPort?: number;
  updateTime?: string;
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
  app?: GetEdgeContainerAppResponseBodyApp;
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

