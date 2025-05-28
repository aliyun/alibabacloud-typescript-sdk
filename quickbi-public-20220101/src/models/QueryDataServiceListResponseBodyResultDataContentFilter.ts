// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDataServiceListResponseBodyResultDataContentFilter extends $dara.Model {
  /**
   * @remarks
   * Combined conditions.
   */
  filters?: { [key: string]: any }[];
  /**
   * @remarks
   * Logical relationship between multiple SQL text keywords.
   * 
   * - **or**: or
   * - **and**: and
   * 
   * @example
   * and
   */
  logicalOperator?: string;
  /**
   * @remarks
   * Type.
   * 
   * - basic: basic
   * - combined: complex
   * 
   * @example
   * basic
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      filters: 'Filters',
      logicalOperator: 'LogicalOperator',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filters: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      logicalOperator: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.filters)) {
      $dara.Model.validateArray(this.filters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

