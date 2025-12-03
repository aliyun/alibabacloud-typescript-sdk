// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHealthStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The frontend port that is used by the SLB instance. Valid values: **1 to 65535**.
   * 
   * >  If you do not specify this parameter, the health status of all ports is returned.
   * 
   * @example
   * 80
   */
  listenerPort?: number;
  /**
   * @remarks
   * The frontend protocol that is used by the SLB instance.
   * 
   * @example
   * https
   */
  listenerProtocol?: string;
  /**
   * @remarks
   * The ID of the Classic Load Balancer (CLB) instance.
   * 
   * This parameter is required.
   * 
   * @example
   * lb-bp1qjwo61pqz3ah****
   */
  loadBalancerId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the SLB instance.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      listenerPort: 'ListenerPort',
      listenerProtocol: 'ListenerProtocol',
      loadBalancerId: 'LoadBalancerId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listenerPort: 'number',
      listenerProtocol: 'string',
      loadBalancerId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

