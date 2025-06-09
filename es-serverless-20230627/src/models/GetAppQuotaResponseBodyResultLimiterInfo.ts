// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetAppQuotaResponseBodyResultLimiterInfoLimiters } from "./GetAppQuotaResponseBodyResultLimiterInfoLimiters";


export class GetAppQuotaResponseBodyResultLimiterInfo extends $dara.Model {
  limiters?: GetAppQuotaResponseBodyResultLimiterInfoLimiters[];
  static names(): { [key: string]: string } {
    return {
      limiters: 'limiters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limiters: { 'type': 'array', 'itemType': GetAppQuotaResponseBodyResultLimiterInfoLimiters },
    };
  }

  validate() {
    if(Array.isArray(this.limiters)) {
      $dara.Model.validateArray(this.limiters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

