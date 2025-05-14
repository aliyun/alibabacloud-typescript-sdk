// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRangeResponseBody extends $dara.Model {
  /**
   * @example
   * A1:B2
   */
  a1Notation?: string;
  /**
   * @remarks
   * requestId
   * 
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      a1Notation: 'a1Notation',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      a1Notation: 'string',
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

