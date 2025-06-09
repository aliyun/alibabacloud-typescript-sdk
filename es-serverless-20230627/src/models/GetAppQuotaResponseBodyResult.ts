// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetAppQuotaResponseBodyResultLimiterInfo } from "./GetAppQuotaResponseBodyResultLimiterInfo";


export class GetAppQuotaResponseBodyResult extends $dara.Model {
  limiterInfo?: GetAppQuotaResponseBodyResultLimiterInfo;
  quotaInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      limiterInfo: 'limiterInfo',
      quotaInfo: 'quotaInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limiterInfo: GetAppQuotaResponseBodyResultLimiterInfo,
      quotaInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.limiterInfo && typeof (this.limiterInfo as any).validate === 'function') {
      (this.limiterInfo as any).validate();
    }
    if(this.quotaInfo) {
      $dara.Model.validateMap(this.quotaInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

