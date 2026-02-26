// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ProductSpecValue extends $dara.Model {
  value?: string;
  /**
   * @example
   * 秘色
   */
  valueAlias?: string;
  /**
   * @example
   * 1000
   */
  valueId?: number;
  static names(): { [key: string]: string } {
    return {
      value: 'value',
      valueAlias: 'valueAlias',
      valueId: 'valueId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      valueAlias: 'string',
      valueId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

