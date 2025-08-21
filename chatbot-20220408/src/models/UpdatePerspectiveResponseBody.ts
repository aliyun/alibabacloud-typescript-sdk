// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePerspectiveResponseBody extends $dara.Model {
  /**
   * @example
   * FC384CE1-8D42-1900-84E1-F33F990F2B5E
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

