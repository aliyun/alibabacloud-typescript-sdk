// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyEnterpriseAcceleratePolicyResponseBody extends $dara.Model {
  /**
   * @example
   * 2CABFEBB-0CE7-575E-833A-266F75D46713
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

