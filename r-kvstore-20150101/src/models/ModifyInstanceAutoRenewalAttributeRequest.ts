// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceAutoRenewalAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable auto-renewal. Valid values:
   * * **true**: Enabled.
   * * **false**: Disabled.
   * 
   * > Default value: **false**.
   * 
   * @example
   * true
   */
  autoRenew?: string;
  /**
   * @remarks
   * The instance ID. Separate multiple instance IDs with commas (,).
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
   * The auto-renewal cycle. Valid values: **1** to **12**. Unit: months. When the instance is about to expire, the system automatically renews the instance for the specified duration.
   * > This parameter is available and required only when **AutoRenew** is set to **true**.
   * 
   * @example
   * 3
   */
  duration?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The product. Set the value to kvstore.
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

