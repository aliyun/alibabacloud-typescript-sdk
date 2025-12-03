// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainExtensionsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the additional certificate.
   * 
   * @example
   * de-bp1rp7ta1****
   */
  domainExtensionId?: string;
  /**
   * @remarks
   * The frontend port of the HTTPS listener that is configured for the SLB instance. Valid values: **1 to 65535**.
   * 
   * This parameter is required.
   * 
   * @example
   * 443
   */
  listenerPort?: number;
  /**
   * @remarks
   * The SLB instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * lb-bp1b6c719dfa08ex****
   */
  loadBalancerId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the Server Load Balancer (SLB) instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      domainExtensionId: 'DomainExtensionId',
      listenerPort: 'ListenerPort',
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
      domainExtensionId: 'string',
      listenerPort: 'number',
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

