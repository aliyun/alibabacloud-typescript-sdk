// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryRecordMinutesUrlResponseBodyRecordMinutesUrls extends $dara.Model {
  /**
   * @example
   * url
   */
  recordMinutesUrl?: string;
  static names(): { [key: string]: string } {
    return {
      recordMinutesUrl: 'RecordMinutesUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordMinutesUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

