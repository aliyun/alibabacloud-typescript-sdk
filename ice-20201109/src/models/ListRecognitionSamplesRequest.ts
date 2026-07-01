// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRecognitionSamplesRequest extends $dara.Model {
  /**
   * @remarks
   * The type of recognition algorithm. Valid values:
   * 
   * - landmark
   * 
   * - object
   * 
   * - logo
   * 
   * - face
   * 
   * This parameter is required.
   * 
   * @example
   * landmark
   */
  algorithm?: string;
  /**
   * @remarks
   * The entity ID. If you set this parameter to ANY, the system queries by EntityName.
   * 
   * This parameter is required.
   * 
   * @example
   * **************544cb84754************
   */
  entityId?: string;
  /**
   * @remarks
   * The entity name.
   * 
   * @example
   * custom_person
   */
  entityName?: string;
  /**
   * @remarks
   * The library ID. If you specify this parameter, the system performs an exact match. You can specify multiple library IDs. Separate them with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * lib1,lib2,lib3
   */
  libId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      entityId: 'EntityId',
      entityName: 'EntityName',
      libId: 'LibId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      entityId: 'string',
      entityName: 'string',
      libId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
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

