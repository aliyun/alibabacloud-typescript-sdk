// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddTableToCategoryRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30000254257
   */
  categoryId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1930****
   */
  dbId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * table_name
   */
  tableName?: string;
  /**
   * @example
   * dbo
   */
  tableSchemaName?: string;
  /**
   * @example
   * 3***
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      dbId: 'DbId',
      tableName: 'TableName',
      tableSchemaName: 'TableSchemaName',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'number',
      dbId: 'number',
      tableName: 'string',
      tableSchemaName: 'string',
      tid: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

