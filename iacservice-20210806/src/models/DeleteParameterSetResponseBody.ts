// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteParameterSetResponseBody extends $dara.Model {
  /**
   * @example
   * 708D670B-67C4-5653-9F88-8F7800429EE1
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

