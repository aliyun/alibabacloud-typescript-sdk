// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMultiDimTableRecordsRequestFilterConditions extends $dara.Model {
  /**
   * @example
   * Sandbox
   */
  field?: string;
  /**
   * @example
   * equal
   */
  operator?: string;
  value?: any[];
  static names(): { [key: string]: string } {
    return {
      field: 'Field',
      operator: 'Operator',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      field: 'string',
      operator: 'string',
      value: { 'type': 'array', 'itemType': 'any' },
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

