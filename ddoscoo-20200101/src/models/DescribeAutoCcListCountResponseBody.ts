// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAutoCcListCountResponseBody extends $dara.Model {
  blackCount?: number;
  requestId?: string;
  whiteCount?: number;
  static names(): { [key: string]: string } {
    return {
      blackCount: 'BlackCount',
      requestId: 'RequestId',
      whiteCount: 'WhiteCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blackCount: 'number',
      requestId: 'string',
      whiteCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

