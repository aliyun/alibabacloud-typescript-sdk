// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SimpleQueryResponseBodyAggregationsGroups } from "./SimpleQueryResponseBodyAggregationsGroups";


export class SimpleQueryResponseBodyAggregations extends $dara.Model {
  /**
   * @remarks
   * The name of the field.
   * 
   * @example
   * Size
   */
  field?: string;
  /**
   * @remarks
   * The grouped aggregations. This parameter is returned only when the group operator is specified in the Aggregations request parameter.
   */
  groups?: SimpleQueryResponseBodyAggregationsGroups[];
  /**
   * @remarks
   * The operator.
   * 
   * @example
   * sum
   */
  operation?: string;
  /**
   * @remarks
   * The statistical result.
   * 
   * @example
   * 200
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      field: 'Field',
      groups: 'Groups',
      operation: 'Operation',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      field: 'string',
      groups: { 'type': 'array', 'itemType': SimpleQueryResponseBodyAggregationsGroups },
      operation: 'string',
      value: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.groups)) {
      $dara.Model.validateArray(this.groups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

