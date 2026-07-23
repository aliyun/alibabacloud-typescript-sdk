// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Column extends $dara.Model {
  /**
   * @remarks
   * Whether the value is NULL. When true, it should be treated as NULL.
   * 
   * @example
   * false
   */
  isNull?: boolean;
  /**
   * @remarks
   * Column name.
   * 
   * @example
   * index
   */
  name?: string;
  /**
   * @remarks
   * Column type.
   * 
   * @example
   * text
   */
  type?: string;
  /**
   * @remarks
   * Column value.
   * 
   * @example
   * product_info
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      isNull: 'IsNull',
      name: 'Name',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isNull: 'boolean',
      name: 'string',
      type: 'string',
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

