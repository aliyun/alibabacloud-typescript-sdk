// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIndexesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the table is a logical table.
   * 
   * @example
   * false
   */
  logic?: boolean;
  /**
   * @remarks
   * The ID of the table.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  tableId?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * > To view the tenant ID, move the pointer over the profile picture in the upper-right corner of the Data Management (DMS) console. For more information, see [Manage DMS tenants](https://help.aliyun.com/document_detail/181330.html).
   * 
   * @example
   * 0
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

