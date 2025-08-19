// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAppResponseBodyResult extends $dara.Model {
  appId?: string;
  /**
   * @example
   * es-serverless-cn-xxx
   */
  instaneId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'appId',
      instaneId: 'instaneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      instaneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppResponseBody extends $dara.Model {
  /**
   * @example
   * 2C5DAA30-****-5181-9B87-9D6181016197
   */
  requestId?: string;
  result?: CreateAppResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: CreateAppResponseBodyResult,
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

