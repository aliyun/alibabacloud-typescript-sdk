// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateAppRequestLimiterInfoLimiters } from "./UpdateAppRequestLimiterInfoLimiters";


export class UpdateAppRequestLimiterInfo extends $dara.Model {
  limiters?: UpdateAppRequestLimiterInfoLimiters[];
  static names(): { [key: string]: string } {
    return {
      limiters: 'limiters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limiters: { 'type': 'array', 'itemType': UpdateAppRequestLimiterInfoLimiters },
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

