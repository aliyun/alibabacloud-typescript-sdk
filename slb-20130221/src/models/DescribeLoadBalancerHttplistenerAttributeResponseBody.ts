// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLoadBalancerHTTPListenerAttributeResponseBody extends $dara.Model {
  backendServerPort?: number;
  bandwidth?: number;
  cookie?: string;
  cookieTimeout?: number;
  domain?: string;
  gzip?: string;
  healthCheck?: string;
  healthCheckConnectPort?: number;
  healthCheckHttpCode?: string;
  healthCheckTimeout?: number;
  healthyThreshold?: number;
  interval?: number;
  listenerPort?: number;
  maxConnection?: number;
  requestId?: string;
  scheduler?: string;
  securityStatus?: string;
  status?: string;
  stickySession?: string;
  stickySessionType?: string;
  URI?: string;
  unhealthyThreshold?: number;
  VServerGroupId?: string;
  XForwardedFor?: string;
  XForwardedFor_SLBID?: string;
  XForwardedFor_SLBIP?: string;
  XForwardedFor_proto?: string;
  static names(): { [key: string]: string } {
    return {
      backendServerPort: 'BackendServerPort',
      bandwidth: 'Bandwidth',
      cookie: 'Cookie',
      cookieTimeout: 'CookieTimeout',
      domain: 'Domain',
      gzip: 'Gzip',
      healthCheck: 'HealthCheck',
      healthCheckConnectPort: 'HealthCheckConnectPort',
      healthCheckHttpCode: 'HealthCheckHttpCode',
      healthCheckTimeout: 'HealthCheckTimeout',
      healthyThreshold: 'HealthyThreshold',
      interval: 'Interval',
      listenerPort: 'ListenerPort',
      maxConnection: 'MaxConnection',
      requestId: 'RequestId',
      scheduler: 'Scheduler',
      securityStatus: 'SecurityStatus',
      status: 'Status',
      stickySession: 'StickySession',
      stickySessionType: 'StickySessionType',
      URI: 'URI',
      unhealthyThreshold: 'UnhealthyThreshold',
      VServerGroupId: 'VServerGroupId',
      XForwardedFor: 'XForwardedFor',
      XForwardedFor_SLBID: 'XForwardedFor_SLBID',
      XForwardedFor_SLBIP: 'XForwardedFor_SLBIP',
      XForwardedFor_proto: 'XForwardedFor_proto',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendServerPort: 'number',
      bandwidth: 'number',
      cookie: 'string',
      cookieTimeout: 'number',
      domain: 'string',
      gzip: 'string',
      healthCheck: 'string',
      healthCheckConnectPort: 'number',
      healthCheckHttpCode: 'string',
      healthCheckTimeout: 'number',
      healthyThreshold: 'number',
      interval: 'number',
      listenerPort: 'number',
      maxConnection: 'number',
      requestId: 'string',
      scheduler: 'string',
      securityStatus: 'string',
      status: 'string',
      stickySession: 'string',
      stickySessionType: 'string',
      URI: 'string',
      unhealthyThreshold: 'number',
      VServerGroupId: 'string',
      XForwardedFor: 'string',
      XForwardedFor_SLBID: 'string',
      XForwardedFor_SLBIP: 'string',
      XForwardedFor_proto: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

