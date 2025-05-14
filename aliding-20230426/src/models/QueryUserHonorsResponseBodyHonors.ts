// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryUserHonorsResponseBodyHonorsGrantHistory } from "./QueryUserHonorsResponseBodyHonorsGrantHistory";


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

