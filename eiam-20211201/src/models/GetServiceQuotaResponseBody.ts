// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceQuotaResponseBodyServiceQuota extends $dara.Model {
  /**
   * @remarks
   * Quota 配额的唯一标识。
   * 
   * @example
   * instanceTrialNumber
   */
  quotaType?: string;
  /**
   * @remarks
   * Quota 配额的值。
   * 
   * @example
   * 5
   */
  quotaValue?: number;
  /**
   * @remarks
   * Quota 配额的当前用量。
   * 
   * @example
   * 1
   */
  usedQuotaValue?: number;
  static names(): { [key: string]: string } {
    return {
      quotaType: 'QuotaType',
      quotaValue: 'QuotaValue',
      usedQuotaValue: 'UsedQuotaValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quotaType: 'string',
      quotaValue: 'number',
      usedQuotaValue: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceQuotaResponseBody extends $dara.Model {
  /**
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  serviceQuota?: GetServiceQuotaResponseBodyServiceQuota;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      serviceQuota: 'ServiceQuota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      serviceQuota: GetServiceQuotaResponseBodyServiceQuota,
    };
  }

  validate() {
    if(this.serviceQuota && typeof (this.serviceQuota as any).validate === 'function') {
      (this.serviceQuota as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

