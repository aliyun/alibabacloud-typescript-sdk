// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BatchAddFeishuUsersResponseBodyResultFailResults } from "./BatchAddFeishuUsersResponseBodyResultFailResults";


export class BatchAddFeishuUsersResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 10
   */
  failCount?: number;
  failResults?: BatchAddFeishuUsersResponseBodyResultFailResults[];
  /**
   * @example
   * 1
   */
  okCount?: number;
  static names(): { [key: string]: string } {
    return {
      failCount: 'FailCount',
      failResults: 'FailResults',
      okCount: 'OkCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failCount: 'number',
      failResults: { 'type': 'array', 'itemType': BatchAddFeishuUsersResponseBodyResultFailResults },
      okCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.failResults)) {
      $dara.Model.validateArray(this.failResults);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

