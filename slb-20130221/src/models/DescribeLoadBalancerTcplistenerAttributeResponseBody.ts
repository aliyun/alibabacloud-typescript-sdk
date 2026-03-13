// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLoadBalancerTCPListenerAttributeResponseBody extends $dara.Model {
  backendServerPort?: number;
  bandwidth?: number;
  connectPort?: number;
  connectTimeout?: number;
  establishedTimeout?: number;
  healthCheck?: string;
  healthCheckDomain?: string;
  healthCheckHttpCode?: string;
  healthCheckType?: string;
  healthCheckURI?: string;
  healthyThreshold?: number;
  interval?: number;
  listenerPort?: number;
  masterSlaveServerGroupId?: string;
  maxConnection?: number;
  persistenceTimeout?: number;
  requestId?: string;
  scheduler?: string;
  status?: string;
  synProxy?: string;
  unhealthyThreshold?: number;
  VServerGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      backendServerPort: 'BackendServerPort',
      bandwidth: 'Bandwidth',
      connectPort: 'ConnectPort',
      connectTimeout: 'ConnectTimeout',
      establishedTimeout: 'EstablishedTimeout',
      healthCheck: 'HealthCheck',
      healthCheckDomain: 'HealthCheckDomain',
      healthCheckHttpCode: 'HealthCheckHttpCode',
      healthCheckType: 'HealthCheckType',
      healthCheckURI: 'HealthCheckURI',
      healthyThreshold: 'HealthyThreshold',
      interval: 'Interval',
      listenerPort: 'ListenerPort',
      masterSlaveServerGroupId: 'MasterSlaveServerGroupId',
      maxConnection: 'MaxConnection',
      persistenceTimeout: 'PersistenceTimeout',
      requestId: 'RequestId',
      scheduler: 'Scheduler',
      status: 'Status',
      synProxy: 'SynProxy',
      unhealthyThreshold: 'UnhealthyThreshold',
      VServerGroupId: 'VServerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendServerPort: 'number',
      bandwidth: 'number',
      connectPort: 'number',
      connectTimeout: 'number',
      establishedTimeout: 'number',
      healthCheck: 'string',
      healthCheckDomain: 'string',
      healthCheckHttpCode: 'string',
      healthCheckType: 'string',
      healthCheckURI: 'string',
      healthyThreshold: 'number',
      interval: 'number',
      listenerPort: 'number',
      masterSlaveServerGroupId: 'string',
      maxConnection: 'number',
      persistenceTimeout: 'number',
      requestId: 'string',
      scheduler: 'string',
      status: 'string',
      synProxy: 'string',
      unhealthyThreshold: 'number',
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

