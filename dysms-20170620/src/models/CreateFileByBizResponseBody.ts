// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFileByBizResponseBody extends $dara.Model {
  requestId?: string;
  code?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

