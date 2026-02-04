// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceQuotaResponseBodyQuota extends $dara.Model {
  /**
   * @remarks
   * Quota 配额的Key，同请求参数
   * 
   * @example
   * userMaxNumber
   */
  quotaKey?: string;
  /**
   * @remarks
   * Quota 配额的值。
   * 
   * @example
   * 5
   */
  quotaValue?: number;
  static names(): { [key: string]: string } {
    return {
      quotaKey: 'QuotaKey',
      quotaValue: 'QuotaValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quotaKey: 'string',
      quotaValue: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceQuotaResponseBody extends $dara.Model {
  quota?: GetInstanceQuotaResponseBodyQuota;
  /**
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
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
      quota: GetInstanceQuotaResponseBodyQuota,
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

