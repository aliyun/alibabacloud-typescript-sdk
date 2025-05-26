// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Property extends $dara.Model {
  /**
   * @example
   * float
   */
  itemsType?: string;
  /**
   * @example
   * channels
   */
  name?: string;
  /**
   * @example
   * [40, 80, 160, 320]
   */
  value?: string;
  /**
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

