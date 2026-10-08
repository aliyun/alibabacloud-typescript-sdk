// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDasInstanceConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * ETnLKlblzczshOTUbOCz****
   */
  clientToken?: string;
  /**
   * @remarks
   * The instance ID. You can call [DescribeDBInstances](https://help.aliyun.com/document_detail/26232.html) to query the instance ID.
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
   * * **Enable**
   * * **Disable**
   * 
   * This parameter is required.
   * 
   * @example
   * Enable
   */
  storageAutoScale?: string;
  /**
   * @remarks
   * The threshold in percentage of remaining storage space that triggers automatic storage expansion. Valid values:
   * * **10**
   * * **20**
   * * **30**
   * * **40**
   * * **50**
   * 
   * > This parameter is required when **StorageAutoScale** is set to **Enable**.
   * 
   * @example
   * 50
   */
  storageThreshold?: number;
  /**
   * @remarks
   * The upper limit of automatic storage expansion. The value must be greater than or equal to the current total storage capacity of the instance.
   * 
   * - Upper limit for ESSDs: 32000 GB.
   * - Upper limit for standard SSDs: 6000 GB.
   * > This parameter is required when **StorageAutoScale** is set to **Enable**.
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

