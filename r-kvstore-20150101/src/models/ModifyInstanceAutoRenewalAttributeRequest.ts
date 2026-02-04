// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceAutoRenewalAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable auto-renewal. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * >  The default value is **false**.
   * 
   * @example
   * true
   */
  autoRenew?: string;
  /**
   * @remarks
   * The ID of the instance. Separate multiple instance IDs with commas (,).
   * 
   * > You can specify up to 30 instance IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * r-bp1zxszhcgatnx****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The auto-renewal period. Valid values: **1** to **12**. Unit: months. When the instance is about to expire, the instance is automatically renewed based on the number of months specified by this parameter.
   * 
   * > This parameter is available and required only if the **AutoRenew** parameter is set to **true**.
   * 
   * @example
   * 3
   */
  duration?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The service. Set the value to kvstore.
   * 
   * @example
   * kvstore
   */
  product?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'AutoRenew',
      DBInstanceId: 'DBInstanceId',
      duration: 'Duration',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      product: 'Product',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'string',
      DBInstanceId: 'string',
      duration: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      product: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

