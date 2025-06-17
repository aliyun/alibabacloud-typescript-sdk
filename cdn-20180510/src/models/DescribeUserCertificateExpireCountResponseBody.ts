// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserCertificateExpireCountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of domain names whose SSL certificates are about to expires within 30 days.
   * 
   * @example
   * 0
   */
  expireWithin30DaysCount?: number;
  /**
   * @remarks
   * The number of domain names whose SSL certificates have already expired.
   * 
   * @example
   * 6
   */
  expiredCount?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F5E8DF64-7175-4186-9B06-F002C0BBD0C5
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      expireWithin30DaysCount: 'ExpireWithin30DaysCount',
      expiredCount: 'ExpiredCount',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expireWithin30DaysCount: 'number',
      expiredCount: 'number',
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

