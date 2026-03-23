// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSecretRequest extends $dara.Model {
  clientToken?: string;
  dbInstanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  engine?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  secretArn?: string;
  secretName?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dbInstanceId: 'DbInstanceId',
      engine: 'Engine',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      secretArn: 'SecretArn',
      secretName: 'SecretName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dbInstanceId: 'string',
      engine: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      secretArn: 'string',
      secretName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

