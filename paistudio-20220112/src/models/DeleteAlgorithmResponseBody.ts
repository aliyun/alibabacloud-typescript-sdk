// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAlgorithmResponseBody extends $dara.Model {
  /**
   * @example
   * FFB1D4B4-B253-540A-9B3B-AA711C48A1B7
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
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

