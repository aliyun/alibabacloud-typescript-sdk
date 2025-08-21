// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateBlackIpsResponseBodyResult extends $dara.Model {
  esIPBlacklist?: string[];
  static names(): { [key: string]: string } {
    return {
      esIPBlacklist: 'esIPBlacklist',
    };
  }

  static types(): { [key: string]: any } {
    return {
      esIPBlacklist: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.esIPBlacklist)) {
      $dara.Model.validateArray(this.esIPBlacklist);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBlackIpsResponseBody extends $dara.Model {
  requestId?: string;
  result?: UpdateBlackIpsResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: UpdateBlackIpsResponseBodyResult,
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

