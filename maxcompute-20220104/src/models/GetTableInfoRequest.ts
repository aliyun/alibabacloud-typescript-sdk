// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTableInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the schema to which the table or view to be queried belongs.
   * 
   * @example
   * default
   */
  schemaName?: string;
  /**
   * @remarks
   * The type of the table or view to be queried. Valid values:
   * - **internal**: Internal table.
   * - **external**: External table.
   * - **view**: View.
   * - **materializedView**: <props="china">[Materialized view](https://www.alibabacloud.com/help/en/maxcompute/user-guide/materialized-view-operations)
   * <props="intl">[Materialized view](https://www.alibabacloud.com/help/maxcompute/user-guide/materialized-view-operations).
   * 
   * @example
   * internal
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      schemaName: 'schemaName',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      schemaName: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

