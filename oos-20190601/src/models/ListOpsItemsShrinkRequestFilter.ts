// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOpsItemsShrinkRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The parameter name of the filter.
   * 
   * @example
   * Status
   */
  name?: string;
  /**
   * @remarks
   * The comparison operator that is used to filter property values.
   * 
   * @example
   * Equal
   */
  operator?: string;
  /**
   * @remarks
   * The parameter values of the filter.
   */
  value?: string[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      operator: 'Operator',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      operator: 'string',
      value: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.value)) {
      $dara.Model.validateArray(this.value);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

