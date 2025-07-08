// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryShortUrlListNewResponseBodyListRecord } from "./QueryShortUrlListNewResponseBodyListRecord";


export class QueryShortUrlListNewResponseBodyList extends $dara.Model {
  eventName?: string;
  gmtCreateTime?: string;
  gmtInvalidTime?: string;
  id?: string;
  reason?: string;
  record?: QueryShortUrlListNewResponseBodyListRecord[];
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
      reason: 'Reason',
      record: 'Record',
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
      reason: 'string',
      record: { 'type': 'array', 'itemType': QueryShortUrlListNewResponseBodyListRecord },
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

