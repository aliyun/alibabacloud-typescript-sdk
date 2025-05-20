// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Id2MetaPeriodVerifyIntlResponseBodyResult extends $dara.Model {
  /**
   * @example
   * Y
   */
  passed?: string;
  /**
   * @example
   * 200
   */
  subCode?: string;
  static names(): { [key: string]: string } {
    return {
      passed: 'Passed',
      subCode: 'SubCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      passed: 'string',
      subCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

