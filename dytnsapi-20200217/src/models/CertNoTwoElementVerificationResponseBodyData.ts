// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CertNoTwoElementVerificationResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1
   */
  isConsistent?: string;
  static names(): { [key: string]: string } {
    return {
      isConsistent: 'IsConsistent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isConsistent: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

