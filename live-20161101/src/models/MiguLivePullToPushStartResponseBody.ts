// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MiguLivePullToPushStartResponseBody extends $dara.Model {
  code?: string;
  message?: string;
  requestId?: string;
  timestamp?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      timestamp: 'timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      timestamp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

