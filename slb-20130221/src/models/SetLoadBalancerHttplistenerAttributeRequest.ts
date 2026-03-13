// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetLoadBalancerHTTPListenerAttributeRequest extends $dara.Model {
  cookie?: string;
  cookieTimeout?: number;
  domain?: string;
  healthCheck?: string;
  healthCheckTimeout?: number;
  healthyThreshold?: number;
  hostId?: string;
  interval?: number;
  listenerPort?: number;
  loadBalancerId?: string;
  ownerAccount?: string;
  ownerId?: string;
  scheduler?: string;
  stickySession?: string;
  stickySessionType?: string;
  URI?: string;
  unhealthyThreshold?: number;
  XForwardedFor?: string;
  static names(): { [key: string]: string } {
    return {
      cookie: 'Cookie',
      cookieTimeout: 'CookieTimeout',
      domain: 'Domain',
      healthCheck: 'HealthCheck',
      healthCheckTimeout: 'HealthCheckTimeout',
      healthyThreshold: 'HealthyThreshold',
      hostId: 'HostId',
      interval: 'Interval',
      listenerPort: 'ListenerPort',
      loadBalancerId: 'LoadBalancerId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      scheduler: 'Scheduler',
      stickySession: 'StickySession',
      stickySessionType: 'StickySessionType',
      URI: 'URI',
      unhealthyThreshold: 'UnhealthyThreshold',
      XForwardedFor: 'XForwardedFor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cookie: 'string',
      cookieTimeout: 'number',
      domain: 'string',
      healthCheck: 'string',
      healthCheckTimeout: 'number',
      healthyThreshold: 'number',
      hostId: 'string',
      interval: 'number',
      listenerPort: 'number',
      loadBalancerId: 'string',
      ownerAccount: 'string',
      ownerId: 'string',
      scheduler: 'string',
      stickySession: 'string',
      stickySessionType: 'string',
      URI: 'string',
      unhealthyThreshold: 'number',
      XForwardedFor: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

