// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableEnterpriseAcceleratePolicyResponseBody extends $dara.Model {
  /**
   * @example
   * 09D9F396-29C5-5F0F-9C12-83308062CA2F
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

