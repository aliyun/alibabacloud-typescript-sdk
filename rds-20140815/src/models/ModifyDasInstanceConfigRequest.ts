// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDasInstanceConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the generated token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * ETnLKlblzczshOTUbOCz*****
   */
  clientToken?: string;
  /**
   * @remarks
   * The instance ID. You can call the DescribeDBInstances operation to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-uf6wjk5*****
   */
  DBInstanceId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Specifies whether to enable automatic storage expansion. Valid values:
   * 
   * *   **Enable**
   * *   **Disable**
   * 
   * This parameter is required.
   * 
   * @example
   * Enable
   */
  storageAutoScale?: string;
  /**
   * @remarks
   * The threshold in percentage based on which an automatic storage expansion is triggered. If the available storage reaches the threshold, ApsaraDB RDS increases the storage capacity of the instance. Valid values:
   * 
   * *   **10**
   * *   **20**
   * *   **30**
   * *   **40**
   * *   **50**
   * 
   * >  If you set the StorageAutoScale parameter to **Enable**, you must specify this parameter.
   * 
   * @example
   * 50
   */
  storageThreshold?: number;
  /**
   * @remarks
   * The maximum storage capacity that is allowed for an automatic storage expansion. The value of this parameter must be greater than or equal to the current storage capacity of the RDS instance.
   * 
   * *   If the RDS instance uses ESSDs, the maximum value of this parameter can be set to 32000 GB.
   * *   If the RDS instance uses standard SSDs, the maximum value of this parameter can be set to 6000 GB.
   * 
   * >  If you set the **StorageAutoScale** parameter to **Enable**, you must specify this parameter.
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

