// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ForbidVsStreamResponseBody extends $dara.Model {
  /**
   * @example
   * 119F7639-4646-51A4-B6C1-300D391C0104
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

