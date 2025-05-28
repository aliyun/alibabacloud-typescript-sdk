// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryDataServiceListResponseBodyResultDataContentReturnFieldsField } from "./QueryDataServiceListResponseBodyResultDataContentReturnFieldsField";


export class QueryDataServiceListResponseBodyResultDataContentReturnFields extends $dara.Model {
  /**
   * @remarks
   * Aggregation operator. For example, SUM, AVG, and MAX.
   * 
   * @example
   * SUM
   */
  aggregator?: string;
  /**
   * @remarks
   * Field parameter name.
   * 
   * @example
   * s_number
   */
  alias?: string;
  /**
   * @remarks
   * Remark for the returned field.
   * 
   * @example
   * Theme Configuration already exists
   */
  desc?: string;
  /**
   * @remarks
   * Corresponding cube field information.
   */
  field?: QueryDataServiceListResponseBodyResultDataContentReturnFieldsField;
  /**
   * @remarks
   * Sorting.
   * 
   * - asc: Ascending
   * - desc: Descending
   * - no: No sorting
   * 
   * @example
   * no
   */
  orderby?: string;
  static names(): { [key: string]: string } {
    return {
      aggregator: 'Aggregator',
      alias: 'Alias',
      desc: 'Desc',
      field: 'Field',
      orderby: 'Orderby',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregator: 'string',
      alias: 'string',
      desc: 'string',
      field: QueryDataServiceListResponseBodyResultDataContentReturnFieldsField,
      orderby: 'string',
    };
  }

  validate() {
    if(this.field && typeof (this.field as any).validate === 'function') {
      (this.field as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

