// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeletePerspectiveResponseBody extends $dara.Model {
  /**
   * @example
   * FC384CE1-8D42-1900-84E1-F33F990F2B5E
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

