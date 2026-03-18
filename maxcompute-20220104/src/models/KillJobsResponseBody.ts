// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class KillJobsResponseBody extends $dara.Model {
  data?: string;
  httpCode?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      httpCode: 'httpCode',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      httpCode: 'number',
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

