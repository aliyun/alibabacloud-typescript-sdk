// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDcdnSecFuncInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The language. Valid values: en and zh. Default value: en.
   * 
   * This parameter is required.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The type of the drop-down list. Valid values: RobotRuleName and RobotObject.
   * 
   * This parameter is required.
   * 
   * @example
   * RobotRuleName
   */
  secFuncType?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      secFuncType: 'SecFuncType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      secFuncType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

