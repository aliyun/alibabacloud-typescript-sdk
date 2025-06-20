// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ChangeCheckShrinkRequestInfluenceInfoNoticeInfos } from "./ChangeCheckShrinkRequestInfluenceInfoNoticeInfos";
import { ChangeCheckShrinkRequestInfluenceInfoSensitiveCustomers } from "./ChangeCheckShrinkRequestInfluenceInfoSensitiveCustomers";


export class ChangeCheckShrinkRequestInfluenceInfo extends $dara.Model {
  noticeInfos?: ChangeCheckShrinkRequestInfluenceInfoNoticeInfos[];
  sensitiveCustomers?: ChangeCheckShrinkRequestInfluenceInfoSensitiveCustomers[];
  static names(): { [key: string]: string } {
    return {
      noticeInfos: 'NoticeInfos',
      sensitiveCustomers: 'SensitiveCustomers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      noticeInfos: { 'type': 'array', 'itemType': ChangeCheckShrinkRequestInfluenceInfoNoticeInfos },
      sensitiveCustomers: { 'type': 'array', 'itemType': ChangeCheckShrinkRequestInfluenceInfoSensitiveCustomers },
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

