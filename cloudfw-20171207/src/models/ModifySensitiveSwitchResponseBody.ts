// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySensitiveSwitchResponseBody extends $dara.Model {
  /**
   * @example
   * 6169C0A4-B91A-5D48-AE4D-B9432D15****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

