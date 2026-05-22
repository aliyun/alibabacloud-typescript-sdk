// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutKvWithHighCapacityResponseBody extends $dara.Model {
  length?: string;
  requestId?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      length: 'Length',
      requestId: 'RequestId',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      length: 'string',
      requestId: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

