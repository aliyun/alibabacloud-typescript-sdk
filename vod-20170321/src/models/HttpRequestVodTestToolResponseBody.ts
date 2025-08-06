// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HttpRequestVodTestToolResponseBody extends $dara.Model {
  body?: string;
  header?: string;
  requestId?: string;
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      body: 'Body',
      header: 'Header',
      requestId: 'RequestId',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
      header: 'string',
      requestId: 'string',
      statusCode: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

