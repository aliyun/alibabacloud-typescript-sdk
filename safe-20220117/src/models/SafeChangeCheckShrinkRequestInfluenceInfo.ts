// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SafeChangeCheckShrinkRequestInfluenceInfoNoticeInfos } from "./SafeChangeCheckShrinkRequestInfluenceInfoNoticeInfos";
import { SafeChangeCheckShrinkRequestInfluenceInfoSensitiveCustomers } from "./SafeChangeCheckShrinkRequestInfluenceInfoSensitiveCustomers";


export class SafeChangeCheckShrinkRequestInfluenceInfo extends $dara.Model {
  noticeInfos?: SafeChangeCheckShrinkRequestInfluenceInfoNoticeInfos[];
  sensitiveCustomers?: SafeChangeCheckShrinkRequestInfluenceInfoSensitiveCustomers[];
  static names(): { [key: string]: string } {
    return {
      noticeInfos: 'NoticeInfos',
      sensitiveCustomers: 'SensitiveCustomers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      noticeInfos: { 'type': 'array', 'itemType': SafeChangeCheckShrinkRequestInfluenceInfoNoticeInfos },
      sensitiveCustomers: { 'type': 'array', 'itemType': SafeChangeCheckShrinkRequestInfluenceInfoSensitiveCustomers },
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

