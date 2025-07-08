// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QuerySmsSignLastRangeNewResponseBodyListSmsSignSignSceneDetailListSignSceneDetail } from "./QuerySmsSignLastRangeNewResponseBodyListSmsSignSignSceneDetailListSignSceneDetail";


export class QuerySmsSignLastRangeNewResponseBodyListSmsSignSignSceneDetailList extends $dara.Model {
  signSceneDetail?: QuerySmsSignLastRangeNewResponseBodyListSmsSignSignSceneDetailListSignSceneDetail[];
  static names(): { [key: string]: string } {
    return {
      signSceneDetail: 'SignSceneDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      signSceneDetail: { 'type': 'array', 'itemType': QuerySmsSignLastRangeNewResponseBodyListSmsSignSignSceneDetailListSignSceneDetail },
    };
  }

  validate() {
    if(Array.isArray(this.signSceneDetail)) {
      $dara.Model.validateArray(this.signSceneDetail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

