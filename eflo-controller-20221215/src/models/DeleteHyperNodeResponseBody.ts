// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteHyperNodeResponseBody extends $dara.Model {
  /**
   * @example
   * 041724FC-2BD7-58B1-863B-B42022D4B351
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

