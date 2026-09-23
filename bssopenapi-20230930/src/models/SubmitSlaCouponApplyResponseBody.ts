// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitSlaCouponApplyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response struct metadata.
   * 
   * @example
   * {}
   */
  metadata?: any;
  /**
   * @remarks
   * The unique request ID, which is used to identify a request and troubleshoot issues.
   * 
   * @example
   * 79EE7556-0CFD-44EB-9CD6-B3B526E3A85F
   */
  requestId?: string;
  /**
   * @remarks
   * The total claimed amount.
   * 
   * @example
   * 6.4
   */
  sumCoupon?: number;
  /**
   * @remarks
   * The end time.
   * 
   * @example
   * Mon Apr 27 00:00:00 CST 2026
   */
  validEndTime?: string;
  /**
   * @remarks
   * The start time.
   * 
   * @example
   * Tue Oct 27 13:15:58 CST 2026
   */
  validStartTime?: string;
  static names(): { [key: string]: string } {
    return {
      metadata: 'Metadata',
      requestId: 'RequestId',
      sumCoupon: 'SumCoupon',
      validEndTime: 'ValidEndTime',
      validStartTime: 'ValidStartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metadata: 'any',
      requestId: 'string',
      sumCoupon: 'number',
      validEndTime: 'string',
      validStartTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

