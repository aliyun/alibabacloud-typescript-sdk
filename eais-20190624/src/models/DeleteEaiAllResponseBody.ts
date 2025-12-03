// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteEaiAllResponseBody extends $dara.Model {
  /**
   * @example
   * AD4EA714-A35B-4710-BF92-8275BCDDB69F
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

