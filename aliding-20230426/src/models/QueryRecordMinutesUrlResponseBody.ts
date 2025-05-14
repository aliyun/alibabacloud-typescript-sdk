// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryRecordMinutesUrlResponseBodyRecordMinutesUrls } from "./QueryRecordMinutesUrlResponseBodyRecordMinutesUrls";


export class QueryRecordMinutesUrlResponseBody extends $dara.Model {
  recordMinutesUrls?: QueryRecordMinutesUrlResponseBodyRecordMinutesUrls[];
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  vendorRequestId?: string;
  /**
   * @example
   * dingtalk
   */
  vendorType?: string;
  static names(): { [key: string]: string } {
    return {
      recordMinutesUrls: 'recordMinutesUrls',
      requestId: 'requestId',
      vendorRequestId: 'vendorRequestId',
      vendorType: 'vendorType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordMinutesUrls: { 'type': 'array', 'itemType': QueryRecordMinutesUrlResponseBodyRecordMinutesUrls },
      requestId: 'string',
      vendorRequestId: 'string',
      vendorType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.recordMinutesUrls)) {
      $dara.Model.validateArray(this.recordMinutesUrls);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

