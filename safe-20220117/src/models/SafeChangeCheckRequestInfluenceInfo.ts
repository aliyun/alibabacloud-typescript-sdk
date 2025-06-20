// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SafeChangeCheckRequestInfluenceInfoNoticeInfos } from "./SafeChangeCheckRequestInfluenceInfoNoticeInfos";
import { SafeChangeCheckRequestInfluenceInfoSensitiveCustomers } from "./SafeChangeCheckRequestInfluenceInfoSensitiveCustomers";


export class SafeChangeCheckRequestInfluenceInfo extends $dara.Model {
  noticeInfos?: SafeChangeCheckRequestInfluenceInfoNoticeInfos[];
  sensitiveCustomers?: SafeChangeCheckRequestInfluenceInfoSensitiveCustomers[];
  static names(): { [key: string]: string } {
    return {
      noticeInfos: 'NoticeInfos',
      sensitiveCustomers: 'SensitiveCustomers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      noticeInfos: { 'type': 'array', 'itemType': SafeChangeCheckRequestInfluenceInfoNoticeInfos },
      sensitiveCustomers: { 'type': 'array', 'itemType': SafeChangeCheckRequestInfluenceInfoSensitiveCustomers },
    };
  }

  validate() {
    if(Array.isArray(this.noticeInfos)) {
      $dara.Model.validateArray(this.noticeInfos);
    }
    if(Array.isArray(this.sensitiveCustomers)) {
      $dara.Model.validateArray(this.sensitiveCustomers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

