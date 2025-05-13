// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteUmodelResponseBody extends $dara.Model {
  /**
   * @example
   * 123123-3213-345-9941-345345345
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

