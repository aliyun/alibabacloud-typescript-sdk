// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInventoryEntriesRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The name of the component property. Valid values of N: 1 to 5.
   * 
   * @example
   * PlatformName
   */
  name?: string;
  /**
   * @remarks
   * The comparison operator that is used to filter property values. Valid values of N: 1 to 5. Valid values:
   * 
   * *   Equal
   * *   NotEqual
   * *   BeginWith
   * *   LessThan
   * *   GreaterThan
   * 
   * @example
   * Equal
   */
  operator?: string;
  /**
   * @remarks
   * The values of properties. Valid values of the first N: 1 to 5. Valid values of the second N: 1 to 20.
   * 
   * @example
   * test
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

