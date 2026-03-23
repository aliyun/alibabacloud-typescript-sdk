// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGadInstanceMemberResponseBodyResult extends $dara.Model {
  createCount?: string;
  gadInstanceName?: string;
  static names(): { [key: string]: string } {
    return {
      createCount: 'CreateCount',
      gadInstanceName: 'GadInstanceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createCount: 'string',
      gadInstanceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGadInstanceMemberResponseBody extends $dara.Model {
  requestId?: string;
  result?: CreateGadInstanceMemberResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: CreateGadInstanceMemberResponseBodyResult,
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

