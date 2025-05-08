// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetWafQuotaResponseBodyQuota } from "./GetWafQuotaResponseBodyQuota";


export class GetWafQuotaResponseBody extends $dara.Model {
  /**
   * @remarks
   * Returned quota information.
   */
  quota?: GetWafQuotaResponseBodyQuota;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 36af3fcc-43d0-441c-86b1-428951dc8225
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
      quota: GetWafQuotaResponseBodyQuota,
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

