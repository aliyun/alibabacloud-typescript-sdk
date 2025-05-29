// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartRenderingSessionResponseBodyLocation extends $dara.Model {
  /**
   * @example
   * 610000
   */
  provinceCode?: string;
  static names(): { [key: string]: string } {
    return {
      provinceCode: 'ProvinceCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      provinceCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

