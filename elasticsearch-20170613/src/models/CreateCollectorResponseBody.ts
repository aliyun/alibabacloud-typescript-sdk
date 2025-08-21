// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCollectorResponseBodyResult extends $dara.Model {
  /**
   * @example
   * ct-cn-4135is2tj194p****
   */
  resId?: string;
  static names(): { [key: string]: string } {
    return {
      resId: 'resId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCollectorResponseBody extends $dara.Model {
  /**
   * @example
   * 8466BDFB-C513-4B8D-B4E3-5AB256AB****
   */
  requestId?: string;
  result?: CreateCollectorResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: CreateCollectorResponseBodyResult,
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

