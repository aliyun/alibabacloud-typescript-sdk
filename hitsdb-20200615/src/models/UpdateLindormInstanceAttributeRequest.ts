// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLindormInstanceAttributeRequest extends $dara.Model {
  /**
   * @example
   * true
   */
  deletionProtection?: boolean;
  /**
   * @example
   * lindorm-test
   */
  instanceAlias?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ld-bp1z3506imz2f****
   */
  instanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      deletionProtection: 'DeletionProtection',
      instanceAlias: 'InstanceAlias',
      instanceId: 'InstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deletionProtection: 'boolean',
      instanceAlias: 'string',
      instanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
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

