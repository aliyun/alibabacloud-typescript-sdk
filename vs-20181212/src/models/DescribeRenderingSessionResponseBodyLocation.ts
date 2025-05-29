// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRenderingSessionResponseBodyLocation extends $dara.Model {
  /**
   * @example
   * 310000
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

