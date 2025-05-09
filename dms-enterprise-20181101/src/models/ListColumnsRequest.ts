// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListColumnsRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the database is a logical database. Valid values:
   * 
   * *   **true**: The database is a logical database.
   * *   **false**: The database is a physical database.
   * 
   * @example
   * false
   */
  logic?: boolean;
  /**
   * @remarks
   * The ID of the table. You can call the [ListTables](https://help.aliyun.com/document_detail/141878.html) operation to obtain the table ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 39281****
   */
  tableId?: string;
  /**
   * @remarks
   * The ID of the tenant. You can call the [GetUserActiveTenant](https://help.aliyun.com/document_detail/198073.html) operation to obtain the tenant ID.
   * 
   * @example
   * 3***
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      logic: 'Logic',
      tableId: 'TableId',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logic: 'boolean',
      tableId: 'string',
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

