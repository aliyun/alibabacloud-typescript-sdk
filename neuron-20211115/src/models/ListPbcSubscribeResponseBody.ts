// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PbcListResult } from "./PbcListResult";


export class ListPbcSubscribeResponseBody extends $dara.Model {
  pbcListResult?: PbcListResult;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pbcListResult: 'pbcListResult',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pbcListResult: PbcListResult,
      requestId: 'string',
    };
  }

  validate() {
    if(this.pbcListResult && typeof (this.pbcListResult as any).validate === 'function') {
      (this.pbcListResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

