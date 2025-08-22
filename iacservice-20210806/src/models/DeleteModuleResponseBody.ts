// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteModuleResponseBody extends $dara.Model {
  /**
   * @example
   * 49DA6457-E545-5095-A930-EB8F0BCD4DAA
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

