// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateQosPolicyResponseBody extends $dara.Model {
  errorMessages?: string;
  qosPolicyId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessages: 'ErrorMessages',
      qosPolicyId: 'QosPolicyId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessages: 'string',
      qosPolicyId: 'string',
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

