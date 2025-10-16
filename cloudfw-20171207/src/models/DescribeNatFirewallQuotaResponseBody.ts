// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNatFirewallQuotaResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  exceptionCount?: number;
  /**
   * @example
   * F98BAA59-5863-5B61-8FD4-C5E96813****
   */
  requestId?: string;
  /**
   * @example
   * 6
   */
  totalCount?: number;
  /**
   * @example
   * 20
   */
  unprotectedCount?: number;
  /**
   * @example
   * 10
   */
  usedCount?: number;
  static names(): { [key: string]: string } {
    return {
      exceptionCount: 'ExceptionCount',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      unprotectedCount: 'UnprotectedCount',
      usedCount: 'UsedCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exceptionCount: 'number',
      requestId: 'string',
      totalCount: 'number',
      unprotectedCount: 'number',
      usedCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

