// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LuggageDirectResponseBodyData extends $dara.Model {
  /**
   * @example
   * BJS
   */
  cityCode?: string;
  /**
   * @example
   * 1
   */
  directType?: number;
  static names(): { [key: string]: string } {
    return {
      cityCode: 'city_code',
      directType: 'direct_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cityCode: 'string',
      directType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

