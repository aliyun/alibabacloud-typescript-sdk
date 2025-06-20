// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SafeChangeCheckRequestDamagedChangeNoticesSensitiveCustomers } from "./SafeChangeCheckRequestDamagedChangeNoticesSensitiveCustomers";


export class SafeChangeCheckRequestDamagedChangeNotices extends $dara.Model {
  bgCancelNoticeContent?: string;
  bgCancelNoticeEventId?: string;
  channel?: string[];
  content?: string;
  eventId?: string;
  sensitiveCustomers?: SafeChangeCheckRequestDamagedChangeNoticesSensitiveCustomers[];
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bgCancelNoticeContent: 'BgCancelNoticeContent',
      bgCancelNoticeEventId: 'BgCancelNoticeEventId',
      channel: 'Channel',
      content: 'Content',
      eventId: 'EventId',
      sensitiveCustomers: 'SensitiveCustomers',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bgCancelNoticeContent: 'string',
      bgCancelNoticeEventId: 'string',
      channel: { 'type': 'array', 'itemType': 'string' },
      content: 'string',
      eventId: 'string',
      sensitiveCustomers: { 'type': 'array', 'itemType': SafeChangeCheckRequestDamagedChangeNoticesSensitiveCustomers },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.channel)) {
      $dara.Model.validateArray(this.channel);
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

