// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePoolRequestResourceLimits extends $dara.Model {
  /**
   * @example
   * 2000
   */
  maxExectorNum?: number;
  static names(): { [key: string]: string } {
    return {
      maxExectorNum: 'MaxExectorNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxExectorNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

