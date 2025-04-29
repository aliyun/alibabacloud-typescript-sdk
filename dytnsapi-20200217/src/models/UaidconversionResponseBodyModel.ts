// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UAIDConversionResponseBodyModel extends $dara.Model {
  /**
   * @example
   * 示例值示例值示例值
   */
  phoneList?: string;
  static names(): { [key: string]: string } {
    return {
      phoneList: 'PhoneList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      phoneList: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

