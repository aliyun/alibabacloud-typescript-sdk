// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisableEnterpriseAcceleratePolicyResponseBody extends $dara.Model {
  /**
   * @example
   * E4C3E4CA-87CC-5EF6-91DD-D400A812EB43
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

