// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Catalog extends $dara.Model {
  /**
   * @remarks
   * The time when the catalog was created.
   * 
   * @example
   * 1744970111419
   */
  createdAt?: number;
  /**
   * @remarks
   * The user who created the catalog.
   * 
   * @example
   * acs:ram::[accountId]:root
   */
  createdBy?: string;
  /**
   * @remarks
   * The ID of the catalog.
   * 
   * @example
   * clg-paimon-xxxx
   */
  id?: string;
  /**
   * @remarks
   * Whether the data catalog is shared.
   * 
   * @example
   * false
   */
  isShared?: boolean;
  /**
   * @remarks
   * The name of the catalog.
   * 
   * @example
   * test_catalog
   */
  name?: string;
  /**
   * @remarks
   * The extension options.
   */
  options?: { [key: string]: string };
  /**
   * @remarks
   * The catalog owner.
   * 
   * @example
   * acs:ram::[accountId]:root
   */
  owner?: string;
  /**
   * @remarks
   * Share ID.
   * 
   * @example
   * share-xxxx
   */
  shareId?: string;
  /**
   * @remarks
   * The status of the catalog.
   * 
   * @example
   * NEW
   * INITIALIZING
   * INITIALIZE_FAILED
   * RUNNING
   * TERMINATED
   * DELETING
   * DELETE_FAILED 
   * DELETED
   * STORAGE_RESTRICTED
   */
  status?: string;
  /**
   * @remarks
   * Type.
   * 
   * @example
   * PAIMON
   */
  type?: string;
  /**
   * @remarks
   * The time when the catalog was last modified.
   * 
   * @example
   * 1744970111419
   */
  updatedAt?: number;
  /**
   * @remarks
   * The user who last modified the catalog.
   * 
   * @example
   * acs:ram::[accountId]:root
   */
  updatedBy?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'createdAt',
      createdBy: 'createdBy',
      id: 'id',
      isShared: 'isShared',
      name: 'name',
      options: 'options',
      owner: 'owner',
      shareId: 'shareId',
      status: 'status',
      type: 'type',
      updatedAt: 'updatedAt',
      updatedBy: 'updatedBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'number',
      createdBy: 'string',
      id: 'string',
      isShared: 'boolean',
      name: 'string',
      options: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      owner: 'string',
      shareId: 'string',
      status: 'string',
      type: 'string',
      updatedAt: 'number',
      updatedBy: 'string',
    };
  }

  validate() {
    if(this.options) {
      $dara.Model.validateMap(this.options);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

