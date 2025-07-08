// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryOpencFlagNewResponseBody extends $dara.Model {
  isOpen?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      isOpen: 'IsOpen',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isOpen: 'number',
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

