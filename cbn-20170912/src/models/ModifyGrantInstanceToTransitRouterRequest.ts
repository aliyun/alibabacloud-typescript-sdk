// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyGrantInstanceToTransitRouterRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cen-dc4vwznpwbobrl****
   * 
   * **if can be null:**
   * false
   */
  cenId?: string;
  /**
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vpc-bp1h8vbrbcgohcju5****
   * 
   * **if can be null:**
   * false
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PayByCenOwner
   */
  orderType?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      orderType: 'OrderType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      clientToken: 'string',
      instanceId: 'string',
      orderType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
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

