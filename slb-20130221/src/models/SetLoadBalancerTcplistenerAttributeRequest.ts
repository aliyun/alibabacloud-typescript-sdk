// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetLoadBalancerTCPListenerAttributeRequest extends $dara.Model {
  connectPort?: number;
  connectTimeout?: number;
  healthCheck?: string;
  healthyThreshold?: number;
  hostId?: string;
  interval?: number;
  listenerPort?: number;
  loadBalancerId?: string;
  ownerAccount?: string;
  ownerId?: string;
  persistenceTimeout?: number;
  scheduler?: string;
  unhealthyThreshold?: number;
  static names(): { [key: string]: string } {
    return {
      connectPort: 'ConnectPort',
      connectTimeout: 'ConnectTimeout',
      healthCheck: 'HealthCheck',
      healthyThreshold: 'HealthyThreshold',
      hostId: 'HostId',
      interval: 'Interval',
      listenerPort: 'ListenerPort',
      loadBalancerId: 'LoadBalancerId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      persistenceTimeout: 'PersistenceTimeout',
      scheduler: 'Scheduler',
      unhealthyThreshold: 'UnhealthyThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectPort: 'number',
      connectTimeout: 'number',
      healthCheck: 'string',
      healthyThreshold: 'number',
      hostId: 'string',
      interval: 'number',
      listenerPort: 'number',
      loadBalancerId: 'string',
      ownerAccount: 'string',
      ownerId: 'string',
      persistenceTimeout: 'number',
      scheduler: 'string',
      unhealthyThreshold: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

