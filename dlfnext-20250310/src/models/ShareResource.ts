// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ShareResource extends $dara.Model {
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
   * database_name
   */
  databaseName?: string;
  /**
   * @example
   * TABLE
   */
  shareType?: string;
  /**
   * @example
   * table_name
   */
  tableName?: string;
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
      databaseName: 'databaseName',
      shareType: 'shareType',
      tableName: 'tableName',
      updatedAt: 'updatedAt',
      updatedBy: 'updatedBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'number',
      createdBy: 'string',
      databaseName: 'string',
      shareType: 'string',
      tableName: 'string',
      updatedAt: 'number',
      updatedBy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

