// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CorpAuthLinkInfoQueryResponseBodyModule } from "./CorpAuthLinkInfoQueryResponseBodyModule";


export class CorpAuthLinkInfoQueryResponseBody extends $dara.Model {
  code?: string;
  message?: string;
  module?: CorpAuthLinkInfoQueryResponseBodyModule;
  requestId?: string;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      module: 'module',
      requestId: 'requestId',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      module: CorpAuthLinkInfoQueryResponseBodyModule,
      requestId: 'string',
      traceId: 'string',
    };
  }

  validate() {
    if(this.module && typeof (this.module as any).validate === 'function') {
      (this.module as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

