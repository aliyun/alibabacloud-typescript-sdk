// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetAIServiceResponseBody extends $dara.Model {
  failedTypes?: string;
  requestId?: string;
  successTypes?: string;
  static names(): { [key: string]: string } {
    return {
      failedTypes: 'FailedTypes',
      requestId: 'RequestId',
      successTypes: 'SuccessTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedTypes: 'string',
      requestId: 'string',
      successTypes: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

