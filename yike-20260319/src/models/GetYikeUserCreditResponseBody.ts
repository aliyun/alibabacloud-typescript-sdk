// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetYikeUserCreditResponseBody extends $dara.Model {
  /**
   * @example
   * 10417.0
   */
  creditTotal?: string;
  /**
   * @example
   * 165.0
   */
  creditUsage?: string;
  /**
   * @remarks
   * RequestId
   * 
   * @example
   * ****63E8B7C7-4812-46AD-0FA56029AC86****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      creditTotal: 'CreditTotal',
      creditUsage: 'CreditUsage',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creditTotal: 'string',
      creditUsage: 'string',
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

