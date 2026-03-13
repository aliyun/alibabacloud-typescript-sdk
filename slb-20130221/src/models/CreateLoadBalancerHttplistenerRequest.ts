// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLoadBalancerHTTPListenerRequest extends $dara.Model {
  backendServerPort?: number;
  bandwidth?: number;
  cookie?: string;
  cookieTimeout?: number;
  domain?: string;
  healthCheck?: string;
  healthCheckTimeout?: number;
  healthyThreshold?: number;
  hostId?: string;
  interval?: number;
  listenerPort?: number;
  listenerStatus?: string;
  loadBalancerId?: string;
  ownerAccount?: string;
  ownerId?: string;
  resourceOwnerId?: number;
  scheduler?: string;
  stickySession?: string;
  stickySessionType?: string;
  URI?: string;
  unhealthyThreshold?: number;
  XForwardedFor?: string;
  static names(): { [key: string]: string } {
    return {
      backendServerPort: 'BackendServerPort',
      bandwidth: 'Bandwidth',
      cookie: 'Cookie',
      cookieTimeout: 'CookieTimeout',
      domain: 'Domain',
      healthCheck: 'HealthCheck',
      healthCheckTimeout: 'HealthCheckTimeout',
      healthyThreshold: 'HealthyThreshold',
      hostId: 'HostId',
      interval: 'Interval',
      listenerPort: 'ListenerPort',
      listenerStatus: 'ListenerStatus',
      loadBalancerId: 'LoadBalancerId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerId: 'ResourceOwnerId',
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
      backendServerPort: 'number',
      bandwidth: 'number',
      cookie: 'string',
      cookieTimeout: 'number',
      domain: 'string',
      healthCheck: 'string',
      healthCheckTimeout: 'number',
      healthyThreshold: 'number',
      hostId: 'string',
      interval: 'number',
      listenerPort: 'number',
      listenerStatus: 'string',
      loadBalancerId: 'string',
      ownerAccount: 'string',
      ownerId: 'string',
      resourceOwnerId: 'number',
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

