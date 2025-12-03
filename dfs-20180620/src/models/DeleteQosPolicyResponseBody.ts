// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteQosPolicyResponseBody extends $dara.Model {
  errorMessages?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessages: 'ErrorMessages',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessages: 'string',
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

