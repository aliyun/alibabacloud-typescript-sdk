// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TriggerNetworkResponseBody extends $dara.Model {
  /**
   * @example
   * 5A5D8E74-565C-43DC-B031-29289FA****
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

