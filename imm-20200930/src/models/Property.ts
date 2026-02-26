// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Property extends $dara.Model {
  /**
   * @remarks
   * If you set the ValueType field to array, you must specify the type of the elements within the array. The enumerated values include float, integer, and string.
   * 
   * @example
   * float
   */
  itemsType?: string;
  /**
   * @remarks
   * The property name.
   * 
   * @example
   * channels
   */
  name?: string;
  /**
   * @remarks
   * The value.
   * 
   * @example
   * [40, 80, 160, 320]
   */
  value?: string;
  /**
   * @remarks
   * The type of the property. Supported enumerated values: float, integer, string, and array.
   * 
   * @example
   * array
   */
  valueType?: string;
  static names(): { [key: string]: string } {
    return {
      itemsType: 'ItemsType',
      name: 'Name',
      value: 'Value',
      valueType: 'ValueType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemsType: 'string',
      name: 'string',
      value: 'string',
      valueType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

