// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BatchForbidVsStreamResponseBodyForbidResultForbidResultInfo } from "./BatchForbidVsStreamResponseBodyForbidResultForbidResultInfo";


export class BatchForbidVsStreamResponseBodyForbidResult extends $dara.Model {
  forbidResultInfo?: BatchForbidVsStreamResponseBodyForbidResultForbidResultInfo[];
  static names(): { [key: string]: string } {
    return {
      forbidResultInfo: 'ForbidResultInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forbidResultInfo: { 'type': 'array', 'itemType': BatchForbidVsStreamResponseBodyForbidResultForbidResultInfo },
    };
  }

  validate() {
    if(Array.isArray(this.forbidResultInfo)) {
      $dara.Model.validateArray(this.forbidResultInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

