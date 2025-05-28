// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BatchAddFeishuUsersResponseBodyResultFailResultsFailInfos } from "./BatchAddFeishuUsersResponseBodyResultFailResultsFailInfos";


export class BatchAddFeishuUsersResponseBodyResultFailResults extends $dara.Model {
  failInfos?: BatchAddFeishuUsersResponseBodyResultFailResultsFailInfos[];
  static names(): { [key: string]: string } {
    return {
      failInfos: 'FailInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failInfos: { 'type': 'array', 'itemType': BatchAddFeishuUsersResponseBodyResultFailResultsFailInfos },
    };
  }

  validate() {
    if(Array.isArray(this.failInfos)) {
      $dara.Model.validateArray(this.failInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

