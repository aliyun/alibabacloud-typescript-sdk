// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetValidationQuotaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * xxxx-xxxx-xxxx-xxxx
   */
  requestId?: string;
  /**
   * @remarks
   * The total available quota.
   * 
   * @example
   * 10
   */
  totalQuota?: number;
  /**
   * @remarks
   * The used quota.
   * 
   * @example
   * 1
   */
  usedQuota?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalQuota: 'TotalQuota',
      usedQuota: 'UsedQuota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalQuota: 'number',
      usedQuota: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

