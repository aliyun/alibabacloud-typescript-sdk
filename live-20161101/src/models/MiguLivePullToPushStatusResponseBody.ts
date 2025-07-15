// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MiguLivePullToPushStatusResponseBodyData extends $dara.Model {
  message?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'message',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MiguLivePullToPushStatusResponseBody extends $dara.Model {
  code?: string;
  data?: MiguLivePullToPushStatusResponseBodyData;
  message?: string;
  requestId?: string;
  timestamp?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
      timestamp: 'timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: MiguLivePullToPushStatusResponseBodyData,
      message: 'string',
      requestId: 'string',
      timestamp: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

