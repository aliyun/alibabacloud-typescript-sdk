// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { EventCenterQueryEventsRequestBodyParametersFiltersNestedFilters } from "./EventCenterQueryEventsRequestBodyParametersFiltersNestedFilters";


export class EventCenterQueryEventsRequestBodyParametersFilters extends $dara.Model {
  /**
   * @remarks
   * The column name.
   * 
   * @example
   * source
   */
  column?: string;
  /**
   * @example
   * AND
   */
  nestedFilterCombination?: string;
  nestedFilters?: EventCenterQueryEventsRequestBodyParametersFiltersNestedFilters[];
  /**
   * @remarks
   * The operator.
   * 
   * @example
   * =
   */
  op?: string;
  /**
   * @remarks
   * The values that are used together with the operator.
   */
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      column: 'Column',
      nestedFilterCombination: 'NestedFilterCombination',
      nestedFilters: 'NestedFilters',
      op: 'Op',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      column: 'string',
      nestedFilterCombination: 'string',
      nestedFilters: { 'type': 'array', 'itemType': EventCenterQueryEventsRequestBodyParametersFiltersNestedFilters },
      op: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.nestedFilters)) {
      $dara.Model.validateArray(this.nestedFilters);
    }
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

