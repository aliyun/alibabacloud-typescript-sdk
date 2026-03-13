// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLoadBalancerTCPListenerRequest extends $dara.Model {
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
  /**
   * @remarks
   * This parameter is required.
   */
  listenerPort?: number;
  listenerStatus?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  loadBalancerId?: string;
  masterSlaveServerGroupId?: string;
  maxConnection?: number;
  ownerAccount?: string;
  ownerId?: number;
  persistenceTimeout?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  scheduler?: string;
  tags?: string;
  unhealthyThreshold?: number;
  VServerGroupId?: string;
  accessKeyId?: string;
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
      listenerStatus: 'ListenerStatus',
      loadBalancerId: 'LoadBalancerId',
      masterSlaveServerGroupId: 'MasterSlaveServerGroupId',
      maxConnection: 'MaxConnection',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      persistenceTimeout: 'PersistenceTimeout',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      scheduler: 'Scheduler',
      tags: 'Tags',
      unhealthyThreshold: 'UnhealthyThreshold',
      VServerGroupId: 'VServerGroupId',
      accessKeyId: 'access_key_id',
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
      listenerStatus: 'string',
      loadBalancerId: 'string',
      masterSlaveServerGroupId: 'string',
      maxConnection: 'number',
      ownerAccount: 'string',
      ownerId: 'number',
      persistenceTimeout: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      scheduler: 'string',
      tags: 'string',
      unhealthyThreshold: 'number',
      VServerGroupId: 'string',
      accessKeyId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

