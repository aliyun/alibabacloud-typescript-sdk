// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AcknowledgeTaskResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * Unique request access token.
   * 
   * @example
   * D6CB3623-4726-4947-AC2B-2C6E673B447C
   */
  requestId?: string;
  /**
   * @remarks
   * Quantity of successfully confirmed items.
   * 
   * @example
   * 1
   */
  result?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

