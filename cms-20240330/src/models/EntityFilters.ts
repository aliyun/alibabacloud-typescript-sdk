// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EntityFilters extends $dara.Model {
  /**
   * @remarks
   * The name of the filter field.
   * 
   * @example
   * region
   */
  field?: string;
  /**
   * @remarks
   * The filter operator. Only = or != is supported.
   * 
   * @example
   * =
   */
  operator?: string;
  /**
   * @remarks
   * The filter value.
   * 
   * @example
   * cn-hangzhou
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      field: 'field',
      operator: 'operator',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      field: 'string',
      operator: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

