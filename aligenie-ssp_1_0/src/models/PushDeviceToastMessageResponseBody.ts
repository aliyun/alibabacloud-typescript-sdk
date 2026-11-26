// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PushDeviceToastMessageResponseBodyResult extends $dara.Model {
  accepted?: boolean;
  failCode?: string;
  static names(): { [key: string]: string } {
    return {
      accepted: 'Accepted',
      failCode: 'FailCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accepted: 'boolean',
      failCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushDeviceToastMessageResponseBody extends $dara.Model {
  code?: number;
  message?: string;
  requestId?: string;
  result?: PushDeviceToastMessageResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: PushDeviceToastMessageResponseBodyResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

