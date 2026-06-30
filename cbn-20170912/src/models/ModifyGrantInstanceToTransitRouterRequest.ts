// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyGrantInstanceToTransitRouterRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the CEN instance.
   * 
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
   * @remarks
   * A token used to ensure the idempotence of the request.
   * 
   * You can generate this token from your client, but you must ensure it is unique for each request. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system uses the request\\"s **RequestId** as the **ClientToken**. The **RequestId** is unique for each API request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the network instance.
   * 
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
   * The payer for the network instance.
   * 
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

