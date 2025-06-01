// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRegistrationPolicyRequestPersonalLimitCount extends $dara.Model {
  /**
   * @example
   * 0
   */
  all?: number;
  /**
   * @example
   * 3
   */
  mobile?: number;
  /**
   * @example
   * 2
   */
  PC?: number;
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      mobile: 'Mobile',
      PC: 'PC',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'number',
      mobile: 'number',
      PC: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

