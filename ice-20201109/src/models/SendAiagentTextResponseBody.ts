// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendAIAgentTextResponseBody extends $dara.Model {
  /**
   * @example
   * DB488837-3****
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

