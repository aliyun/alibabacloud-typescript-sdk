// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopApmResponseBody extends $dara.Model {
  /**
   * @example
   * FEC32FE6-4697-5110-9668-C6016EAEB5DE
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

