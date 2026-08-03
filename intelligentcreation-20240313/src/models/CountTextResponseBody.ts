// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CountTextResponseBodyCountTextCmdList extends $dara.Model {
  count?: number;
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

