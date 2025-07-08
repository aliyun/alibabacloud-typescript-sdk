// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateShortUrlNewResponseBody extends $dara.Model {
  eventName?: string;
  gmtCreateTime?: string;
  gmtInvalidTime?: string;
  id?: string;
  requestId?: string;
  shortUrl?: string;
  sourceUrl?: string;
  static names(): { [key: string]: string } {
    return {
      eventName: 'EventName',
      gmtCreateTime: 'GmtCreateTime',
      gmtInvalidTime: 'GmtInvalidTime',
      id: 'Id',
      requestId: 'RequestId',
      shortUrl: 'ShortUrl',
      sourceUrl: 'SourceUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventName: 'string',
      gmtCreateTime: 'string',
      gmtInvalidTime: 'string',
      id: 'string',
      requestId: 'string',
      shortUrl: 'string',
      sourceUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

