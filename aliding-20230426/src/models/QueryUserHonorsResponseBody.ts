// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryUserHonorsResponseBodyHonors } from "./QueryUserHonorsResponseBodyHonors";


export class QueryUserHonorsResponseBody extends $dara.Model {
  honors?: QueryUserHonorsResponseBodyHonors[];
  /**
   * @example
   * http-trigger-nodejs10.luoni-old.1431999136518149.cn-hangzhou.fc.devsapp.net
   */
  nextToken?: string;
  /**
   * @remarks
   * requestId
   * 
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      honors: 'honors',
      nextToken: 'nextToken',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      honors: { 'type': 'array', 'itemType': QueryUserHonorsResponseBodyHonors },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.honors)) {
      $dara.Model.validateArray(this.honors);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

