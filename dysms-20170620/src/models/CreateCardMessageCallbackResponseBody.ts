// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCardMessageCallbackResponseBody extends $dara.Model {
  requestId?: string;
  testFailCode?: string;
  testResponse?: string;
  testSuccess?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      testFailCode: 'TestFailCode',
      testResponse: 'TestResponse',
      testSuccess: 'TestSuccess',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      testFailCode: 'string',
      testResponse: 'string',
      testSuccess: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

