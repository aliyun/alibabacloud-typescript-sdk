// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryShortUrlListNewResponseBodyListRecord extends $dara.Model {
  eventName?: string;
  gmtCreateTime?: string;
  gmtInvalidTime?: string;
  id?: string;
  reason?: string;
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
      shortUrl: 'string',
      sourceUrl: 'string',
      status: 'number',
      totalPv: 'string',
      totalUv: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

