// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ProductSpecValue } from "./ProductSpecValue";


export class ProductSpec extends $dara.Model {
  key?: string;
  /**
   * @example
   * 1000
   */
  keyId?: number;
  values?: ProductSpecValue[];
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      keyId: 'keyId',
      values: 'values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      keyId: 'number',
      values: { 'type': 'array', 'itemType': ProductSpecValue },
    };
  }

  validate() {
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

