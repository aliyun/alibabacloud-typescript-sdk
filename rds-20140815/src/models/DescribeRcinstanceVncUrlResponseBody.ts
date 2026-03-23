// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRCInstanceVncUrlResponseBody extends $dara.Model {
  loginUrl?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      loginUrl: 'LoginUrl',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loginUrl: 'string',
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

