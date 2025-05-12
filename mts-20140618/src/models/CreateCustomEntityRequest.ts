// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCustomEntityRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * landmark
   */
  algorithm?: string;
  /**
   * @example
   * { "finegrainName":"examplName" }
   */
  customEntityInfo?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  customEntityName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  customGroupId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      customEntityInfo: 'CustomEntityInfo',
      customEntityName: 'CustomEntityName',
      customGroupId: 'CustomGroupId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      customEntityInfo: 'string',
      customEntityName: 'string',
      customGroupId: 'string',
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

