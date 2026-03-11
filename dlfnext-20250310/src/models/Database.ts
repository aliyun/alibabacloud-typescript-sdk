// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Database extends $dara.Model {
  /**
   * @example
   * 1744970111419
   */
  createdAt?: number;
  /**
   * @example
   * acs:ram::[accountId]:root
   */
  createdBy?: string;
  /**
   * @example
   * 1
   */
  id?: string;
  /**
   * @example
   * oss://clg-paimon-xxx/db-xxx
   */
  location?: string;
  /**
   * @example
   * test_database
   */
  name?: string;
  options?: { [key: string]: string };
  /**
   * @example
   * acs:ram::[accountId]:root
   */
  owner?: string;
  /**
   * @example
   * 1744970111419
   */
  updatedAt?: number;
  /**
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

