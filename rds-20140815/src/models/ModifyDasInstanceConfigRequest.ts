// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDasInstanceConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request and prevent duplicate submissions. You can generate the value of this parameter on the client side. The value must be unique across different requests and can be up to 64 ASCII characters in length. The value cannot contain non-ASCII characters.
   * 
   * @example
   * ETnLKlblzczshOTUbOCz****
   */
  clientToken?: string;
  /**
   * @remarks
   * Instance ID of the instance. You can call the DescribeDBInstances operation to query instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-uf6wjk5****
   */
  DBInstanceId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Specifies whether to enable automatic storage expansion. Valid values:
   * 
   * * **Enable**: Enables automatic storage expansion.
   * * **Disable**: Disables automatic storage expansion.
   * 
   * This parameter is required.
   * 
   * @example
   * Enable
   */
  storageAutoScale?: string;
  /**
   * @remarks
   * The threshold percentage that triggers automatic storage expansion. When the percentage of remaining storage space reaches the specified threshold, automatic storage expansion is triggered. Valid values:
   * * **10**
   * * **20**
   * * **30**
   * * **40**
   * * **50**
   * 
   * >This parameter is required when **StorageAutoScale** is set to **Enable**.
   * 
   * @example
   * 50
   */
  storageThreshold?: number;
  /**
   * @remarks
   * The upper limit for automatic storage expansion. The value must be greater than or equal to the current total storage capacity of the instance.
   * 
   * - Upper limit for ESSDs: 32,000 GB
   * - Upper limit for standard SSDs: 6,000 GB
   * >This parameter is required when **StorageAutoScale** is set to **Enable**.
   * 
   * @example
   * 1000
   */
  storageUpperBound?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      DBInstanceId: 'DBInstanceId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      storageAutoScale: 'StorageAutoScale',
      storageThreshold: 'StorageThreshold',
      storageUpperBound: 'StorageUpperBound',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      DBInstanceId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      storageAutoScale: 'string',
      storageThreshold: 'number',
      storageUpperBound: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

