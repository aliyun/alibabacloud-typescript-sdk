// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VerifyCustomHostnameResponseBody extends $dara.Model {
  passed?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      passed: 'Passed',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      passed: 'boolean',
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

