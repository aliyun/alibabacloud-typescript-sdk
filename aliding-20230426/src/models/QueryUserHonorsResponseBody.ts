// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryUserHonorsResponseBodyHonorsGrantHistory extends $dara.Model {
  /**
   * @example
   * 12312312312312312
   */
  grantTime?: number;
  /**
   * @example
   * 363784
   */
  senderUserid?: string;
  static names(): { [key: string]: string } {
    return {
      grantTime: 'grantTime',
      senderUserid: 'senderUserid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      grantTime: 'number',
      senderUserid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserHonorsResponseBodyHonors extends $dara.Model {
  /**
   * @example
   * null
   */
  expirationTime?: number;
  grantHistory?: QueryUserHonorsResponseBodyHonorsGrantHistory[];
  honorDesc?: string;
  /**
   * @example
   * 21659398
   */
  honorId?: string;
  honorName?: string;
  static names(): { [key: string]: string } {
    return {
      expirationTime: 'expirationTime',
      grantHistory: 'grantHistory',
      honorDesc: 'honorDesc',
      honorId: 'honorId',
      honorName: 'honorName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expirationTime: 'number',
      grantHistory: { 'type': 'array', 'itemType': QueryUserHonorsResponseBodyHonorsGrantHistory },
      honorDesc: 'string',
      honorId: 'string',
      honorName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.grantHistory)) {
      $dara.Model.validateArray(this.grantHistory);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

