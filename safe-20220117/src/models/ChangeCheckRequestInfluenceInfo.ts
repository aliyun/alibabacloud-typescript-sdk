// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ChangeCheckRequestInfluenceInfoNoticeInfos } from "./ChangeCheckRequestInfluenceInfoNoticeInfos";
import { ChangeCheckRequestInfluenceInfoSensitiveCustomers } from "./ChangeCheckRequestInfluenceInfoSensitiveCustomers";


export class ChangeCheckRequestInfluenceInfo extends $dara.Model {
  noticeInfos?: ChangeCheckRequestInfluenceInfoNoticeInfos[];
  sensitiveCustomers?: ChangeCheckRequestInfluenceInfoSensitiveCustomers[];
  static names(): { [key: string]: string } {
    return {
      noticeInfos: 'NoticeInfos',
      sensitiveCustomers: 'SensitiveCustomers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      noticeInfos: { 'type': 'array', 'itemType': ChangeCheckRequestInfluenceInfoNoticeInfos },
      sensitiveCustomers: { 'type': 'array', 'itemType': ChangeCheckRequestInfluenceInfoSensitiveCustomers },
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

