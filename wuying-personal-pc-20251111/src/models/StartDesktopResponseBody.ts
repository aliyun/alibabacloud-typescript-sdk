// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartDesktopResponseBody extends $dara.Model {
  code?: string;
  requestId?: string;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      requestId: 'RequestId',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      requestId: 'string',
      traceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

