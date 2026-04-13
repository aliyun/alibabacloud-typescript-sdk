// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteStackResponseBody extends $dara.Model {
  /**
   * @example
   * C7070EC3-DF66-58BA-A1DD-A8574FF53143
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

