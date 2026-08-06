// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Database extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1744970111419
   */
  createdAt?: number;
  /**
   * @remarks
   * The creator.
   * 
   * @example
   * acs:ram::[accountId]:root
   */
  createdBy?: string;
  /**
   * @remarks
   * The UUID of the database.
   * 
   * @example
   * 1
   */
  id?: string;
  /**
   * @remarks
   * The storage path of the database.
   * 
   * @example
   * oss://clg-paimon-xxx/db-xxx
   */
  location?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * test_database
   */
  name?: string;
  /**
   * @remarks
   * The extension options.
   */
  options?: { [key: string]: string };
  /**
   * @remarks
   * The owner of the database.
   * 
   * @example
   * acs:ram::[accountId]:root
   */
  owner?: string;
  status?: string;
  tableCount?: number;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 1744970111419
   */
  updatedAt?: number;
  /**
   * @remarks
   * The updater.
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
      location: 'location',
      name: 'name',
      options: 'options',
      owner: 'owner',
      status: 'status',
      tableCount: 'tableCount',
      updatedAt: 'updatedAt',
      updatedBy: 'updatedBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'number',
      createdBy: 'string',
      id: 'string',
      location: 'string',
      name: 'string',
      options: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      owner: 'string',
      status: 'string',
      tableCount: 'number',
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

