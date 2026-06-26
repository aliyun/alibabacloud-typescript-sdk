// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ShareResource extends $dara.Model {
  /**
   * @remarks
   * The time when the resource was created.
   * 
   * @example
   * 1744970111419
   */
  createdAt?: number;
  /**
   * @remarks
   * The user who created the resource.
   * 
   * @example
   * acs:ram::[accountId]:root
   */
  createdBy?: string;
  /**
   * @remarks
   * The database name.
   * 
   * @example
   * database_name
   */
  databaseName?: string;
  /**
   * @remarks
   * The shared resource type.
   * 
   * @example
   * TABLE
   */
  shareType?: string;
  /**
   * @remarks
   * The table name.
   * 
   * @example
   * table_name
   */
  tableName?: string;
  /**
   * @remarks
   * The time when the resource was last updated.
   * 
   * @example
   * 1744970111419
   */
  updatedAt?: number;
  /**
   * @remarks
   * The user who last updated the resource.
   * 
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

