// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetKvResponseBody extends $dara.Model {
  requestId?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

