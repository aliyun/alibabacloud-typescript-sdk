// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryOrgHonorsResponseBodyOpenHonors extends $dara.Model {
  honorDesc?: string;
  /**
   * @example
   * 21658579
   */
  honorId?: number;
  /**
   * @example
   * https://xxxx.ali-cdn.com/jfejfi.jpg
   */
  honorImgUrl?: string;
  honorName?: string;
  /**
   * @example
   * https://xxxx.ali-cdn.com/jfejfi.jpg
   */
  honorPendantImgUrl?: string;
  static names(): { [key: string]: string } {
    return {
      honorDesc: 'honorDesc',
      honorId: 'honorId',
      honorImgUrl: 'honorImgUrl',
      honorName: 'honorName',
      honorPendantImgUrl: 'honorPendantImgUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      honorDesc: 'string',
      honorId: 'number',
      honorImgUrl: 'string',
      honorName: 'string',
      honorPendantImgUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrgHonorsResponseBody extends $dara.Model {
  /**
   * @example
   * 15
   */
  nextToken?: string;
  openHonors?: QueryOrgHonorsResponseBodyOpenHonors[];
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
      nextToken: 'nextToken',
      openHonors: 'openHonors',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      openHonors: { 'type': 'array', 'itemType': QueryOrgHonorsResponseBodyOpenHonors },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.openHonors)) {
      $dara.Model.validateArray(this.openHonors);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

