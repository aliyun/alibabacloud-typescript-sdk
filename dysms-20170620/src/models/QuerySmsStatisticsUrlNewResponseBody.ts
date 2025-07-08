// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySmsStatisticsUrlNewResponseBody extends $dara.Model {
  downloadUrl?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      downloadUrl: 'DownloadUrl',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadUrl: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

