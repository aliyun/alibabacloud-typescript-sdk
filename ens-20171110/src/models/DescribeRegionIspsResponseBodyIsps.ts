// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRegionIspsResponseBodyIsps extends $dara.Model {
  /**
   * @remarks
   * The code of the ISP.
   * 
   * @example
   * cmcc
   */
  code?: string;
  /**
   * @remarks
   * The name of the ISP.
   * 
   * @example
   * move
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

