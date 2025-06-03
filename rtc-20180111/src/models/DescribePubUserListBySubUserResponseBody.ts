// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribePubUserListBySubUserResponseBodyPubUserDetailList } from "./DescribePubUserListBySubUserResponseBodyPubUserDetailList";
import { DescribePubUserListBySubUserResponseBodySubUserDetail } from "./DescribePubUserListBySubUserResponseBodySubUserDetail";


export class DescribePubUserListBySubUserResponseBody extends $dara.Model {
  /**
   * @example
   * IN
   */
  callStatus?: string;
  pubUserDetailList?: DescribePubUserListBySubUserResponseBodyPubUserDetailList[];
  /**
   * @example
   * 231470C1-ACFB-4C9F-844F-4CFE1E3804C5
   */
  requestId?: string;
  subUserDetail?: DescribePubUserListBySubUserResponseBodySubUserDetail;
  static names(): { [key: string]: string } {
    return {
      callStatus: 'CallStatus',
      pubUserDetailList: 'PubUserDetailList',
      requestId: 'RequestId',
      subUserDetail: 'SubUserDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callStatus: 'string',
      pubUserDetailList: { 'type': 'array', 'itemType': DescribePubUserListBySubUserResponseBodyPubUserDetailList },
      requestId: 'string',
      subUserDetail: DescribePubUserListBySubUserResponseBodySubUserDetail,
    };
  }

  validate() {
    if(Array.isArray(this.pubUserDetailList)) {
      $dara.Model.validateArray(this.pubUserDetailList);
    }
    if(this.subUserDetail && typeof (this.subUserDetail as any).validate === 'function') {
      (this.subUserDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

