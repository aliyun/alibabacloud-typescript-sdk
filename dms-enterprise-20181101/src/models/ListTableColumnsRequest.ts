// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTableColumnsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123
   */
  dbId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 100g_customer
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
      dbId: 'DbId',
      tableName: 'TableName',
      tableSchemaName: 'TableSchemaName',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

