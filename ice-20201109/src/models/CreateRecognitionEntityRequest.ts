// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRecognitionEntityRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * landmark
   */
  algorithm?: string;
  entityInfo?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  entityName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * *************24b47865c6**************
   */
  libId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      entityInfo: 'EntityInfo',
      entityName: 'EntityName',
      libId: 'LibId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      entityInfo: 'string',
      entityName: 'string',
      libId: 'string',
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

