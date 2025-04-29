// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BaseCityInfoSearchResponseBodyModule extends $dara.Model {
  /**
   * @example
   * 330100
   */
  code?: string;
  name?: string;
  nameTree?: string;
  /**
   * @example
   * 0
   */
  region?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      name: 'name',
      nameTree: 'nameTree',
      region: 'region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      name: 'string',
      nameTree: 'string',
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

