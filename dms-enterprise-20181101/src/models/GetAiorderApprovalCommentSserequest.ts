// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAIOrderApprovalCommentSSERequest extends $dara.Model {
  /**
   * @example
   * 420****
   */
  orderId?: number;
  /**
   * @example
   * 48363552-225c-4c93-aeab-ea9b9d064b96
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'number',
      sessionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

