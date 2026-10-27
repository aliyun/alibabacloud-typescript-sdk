// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CuaChatCompletionStreamResponseBody extends $dara.Model {
  /**
   * @example
   * request-20260918-001
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

