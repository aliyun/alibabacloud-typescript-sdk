// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UAIDCollectionResponseBodyModel extends $dara.Model {
  /**
   * @example
   * 示例值
   */
  uaid?: string;
  static names(): { [key: string]: string } {
    return {
      uaid: 'Uaid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uaid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

