// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGADInstanceResponseBodyResult extends $dara.Model {
  createMemberCount?: string;
  gadInstanceName?: string;
  taskID?: string;
  static names(): { [key: string]: string } {
    return {
      createMemberCount: 'CreateMemberCount',
      gadInstanceName: 'GadInstanceName',
      taskID: 'TaskID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createMemberCount: 'string',
      gadInstanceName: 'string',
      taskID: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGADInstanceResponseBody extends $dara.Model {
  requestId?: string;
  result?: CreateGADInstanceResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: CreateGADInstanceResponseBodyResult,
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

