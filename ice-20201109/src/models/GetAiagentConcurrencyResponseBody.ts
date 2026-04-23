// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAIAgentConcurrencyResponseBody extends $dara.Model {
  /**
   * @example
   * 39
   */
  activeCount?: number;
  /**
   * @example
   * ****63E8B7C7-4812-46AD-0FA56029AC86****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      activeCount: 'ActiveCount',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeCount: 'number',
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

