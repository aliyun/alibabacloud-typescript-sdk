// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SkuSpec extends $dara.Model {
  key?: string;
  /**
   * @example
   * 1000
   */
  keyId?: number;
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
      key: 'key',
      keyId: 'keyId',
      value: 'value',
      valueAlias: 'valueAlias',
      valueId: 'valueId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      keyId: 'number',
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

