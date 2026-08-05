// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetYikeJobCreditResponseBody extends $dara.Model {
  /**
   * @remarks
   * The credit deduction status.
   * 
   * @example
   * success
   */
  creditStatus?: string;
  /**
   * @remarks
   * The actual credits consumed.
   * 
   * @example
   * 20
   */
  jobCreditCost?: number;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * ag_12412424****
   */
  jobId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ******3B-0E1A-586A-AC29-742247******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      creditStatus: 'CreditStatus',
      jobCreditCost: 'JobCreditCost',
      jobId: 'JobId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creditStatus: 'string',
      jobCreditCost: 'number',
      jobId: 'string',
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

