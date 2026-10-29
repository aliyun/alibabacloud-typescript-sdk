// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SdnsGetRuleCategoryRequest extends $dara.Model {
  /**
   * @example
   * 123456789012345678
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

