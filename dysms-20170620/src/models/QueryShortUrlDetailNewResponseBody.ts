// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryShortUrlDetailNewResponseBodyRecord } from "./QueryShortUrlDetailNewResponseBodyRecord";


export class QueryShortUrlDetailNewResponseBody extends $dara.Model {
  eventName?: string;
  gmtCreateTime?: string;
  gmtInvalidTime?: string;
  id?: string;
  record?: QueryShortUrlDetailNewResponseBodyRecord[];
  requestId?: string;
  shortUrl?: string;
  sourceUrl?: string;
  status?: number;
  totalPv?: string;
  totalUv?: string;
  static names(): { [key: string]: string } {
    return {
      eventName: 'EventName',
      gmtCreateTime: 'GmtCreateTime',
      gmtInvalidTime: 'GmtInvalidTime',
      id: 'Id',
      record: 'Record',
      requestId: 'RequestId',
      shortUrl: 'ShortUrl',
      sourceUrl: 'SourceUrl',
      status: 'Status',
      totalPv: 'TotalPv',
      totalUv: 'TotalUv',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventName: 'string',
      gmtCreateTime: 'string',
      gmtInvalidTime: 'string',
      id: 'string',
      record: { 'type': 'array', 'itemType': QueryShortUrlDetailNewResponseBodyRecord },
      requestId: 'string',
      shortUrl: 'string',
      sourceUrl: 'string',
      status: 'number',
      totalPv: 'string',
      totalUv: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.record)) {
      $dara.Model.validateArray(this.record);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

