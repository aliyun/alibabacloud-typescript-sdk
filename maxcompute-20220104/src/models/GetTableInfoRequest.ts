// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTableInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the schema to which the table or view belongs.
   * 
   * @example
   * default
   */
  schemaName?: string;
  /**
   * @remarks
   * The type of the table or view that you want to view. Valid values:
   * 
   * *   **internal**: internal table
   * *   **external**: external table
   * *   **view**: view
   * *   **materializedView**: [materialize view](https://www.alibabacloud.com/help/maxcompute/user-guide/materialized-view-operations)
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

