// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetYikeAgentJobEstimatedCreditResponseBody extends $dara.Model {
  /**
   * @example
   * 20.1
   */
  estimatedCreditCost?: number;
  /**
   * @example
   * ****63E8B7C7-4812-46AD-0FA56029AC86****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      estimatedCreditCost: 'EstimatedCreditCost',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      estimatedCreditCost: 'number',
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

