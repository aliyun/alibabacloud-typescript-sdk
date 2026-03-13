// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetLoadBalancerListenerStatusRequest extends $dara.Model {
  hostId?: string;
  listenerPort?: number;
  listenerStatus?: string;
  loadBalancerId?: string;
  ownerAccount?: string;
  ownerId?: string;
  static names(): { [key: string]: string } {
    return {
      hostId: 'HostId',
      listenerPort: 'ListenerPort',
      listenerStatus: 'ListenerStatus',
      loadBalancerId: 'LoadBalancerId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostId: 'string',
      listenerPort: 'number',
      listenerStatus: 'string',
      loadBalancerId: 'string',
      ownerAccount: 'string',
      ownerId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

