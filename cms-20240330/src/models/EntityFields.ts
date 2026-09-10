// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EntityFields extends $dara.Model {
  /**
   * @remarks
   * The entity field name.
   * 
   * @example
   * region
   */
  field?: string;
  /**
   * @remarks
   * The field alias or display value.
   * 
   * @example
   * cn-hangzhou
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      field: 'field',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      field: 'string',
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

