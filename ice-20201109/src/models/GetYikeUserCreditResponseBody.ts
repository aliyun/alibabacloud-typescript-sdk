// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetYikeUserCreditResponseBody extends $dara.Model {
  /**
   * @remarks
   * The total allocated credit.
   * 
   * @example
   * 400
   */
  creditTotal?: string;
  /**
   * @remarks
   * The remaining credit.
   * 
   * @example
   * 100
   */
  creditUsage?: string;
  /**
   * @remarks
   * The request ID.
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

