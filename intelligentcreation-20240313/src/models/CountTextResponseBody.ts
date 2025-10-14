// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CountTextResponseBodyCountTextCmdList extends $dara.Model {
  /**
   * @example
   * 4
   */
  count?: number;
  /**
   * @example
   * RED_BOOK
   */
  theme?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'count',
      theme: 'theme',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      theme: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CountTextResponseBody extends $dara.Model {
  /**
   * @example
   * 6C9CB64D-E2D3-5BF2-A9E6-2445F952F178
   */
  requestId?: string;
  countTextCmdList?: CountTextResponseBodyCountTextCmdList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      countTextCmdList: 'countTextCmdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      countTextCmdList: { 'type': 'array', 'itemType': CountTextResponseBodyCountTextCmdList },
    };
  }

  validate() {
    if(Array.isArray(this.countTextCmdList)) {
      $dara.Model.validateArray(this.countTextCmdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

