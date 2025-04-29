// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BaseCityInfoSearchRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  keyword?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
   * 
   * **if can be null:**
   * false
   */
  region?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'keyword',
      region: 'region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      region: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

