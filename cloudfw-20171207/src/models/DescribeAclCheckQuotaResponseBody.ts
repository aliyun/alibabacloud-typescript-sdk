// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAclCheckQuotaResponseBodyQuota extends $dara.Model {
  /**
   * @example
   * 500
   */
  availableQuota?: number;
  /**
   * @example
   * 1500
   */
  consumedQuota?: number;
  /**
   * @example
   * 2000
   */
  totalQuota?: number;
  /**
   * @example
   * 1724982259
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      availableQuota: 'AvailableQuota',
      consumedQuota: 'ConsumedQuota',
      totalQuota: 'TotalQuota',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableQuota: 'number',
      consumedQuota: 'number',
      totalQuota: 'number',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAclCheckQuotaResponseBody extends $dara.Model {
  quota?: DescribeAclCheckQuotaResponseBodyQuota;
  /**
   * @example
   * 7D5483BF-2262-586D-8706-BDDB8B42****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      quota: 'Quota',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quota: DescribeAclCheckQuotaResponseBodyQuota,
      requestId: 'string',
    };
  }

  validate() {
    if(this.quota && typeof (this.quota as any).validate === 'function') {
      (this.quota as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

