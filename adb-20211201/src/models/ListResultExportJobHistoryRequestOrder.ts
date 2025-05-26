// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResultExportJobHistoryRequestOrder extends $dara.Model {
  /**
   * @remarks
   * The field that is used to sort the SQL statements. Valid values:
   * 
   * *   CreateTime
   * *   DatabaseUser
   * *   TimeCost
   * *   ResourceGroup
   * *   Status
   * *   Progress
   * *   ExportRows
   * 
   * @example
   * DatabaseUser
   */
  field?: string;
  /**
   * @remarks
   * The sorting order. Valid values (case-insensitive):
   * 
   * *   **Desc**: descending order.
   * *   **Asc**: ascending order.
   * 
   * @example
   * Desc
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      field: 'Field',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      field: 'string',
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

