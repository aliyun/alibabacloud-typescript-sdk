// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSecretRequest extends $dara.Model {
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  dbInstanceId?: string;
  dbNames?: string;
  description?: string;
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
  password?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  secretName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dbInstanceId: 'DbInstanceId',
      dbNames: 'DbNames',
      description: 'Description',
      engine: 'Engine',
      ownerId: 'OwnerId',
      password: 'Password',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      secretName: 'SecretName',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dbInstanceId: 'string',
      dbNames: 'string',
      description: 'string',
      engine: 'string',
      ownerId: 'number',
      password: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      secretName: 'string',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

