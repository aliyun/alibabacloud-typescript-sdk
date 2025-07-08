// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySendToGlobeStatusResponseBody extends $dara.Model {
  code?: string;
  data?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

