// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEnterpriseAcceleratePolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the enterprise acceleration policy.
   * 
   * @example
   * eap-0123456789abcdef
   */
  eapId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 2CABFEBB-0CE7-575E-833A-266F75D46713
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      eapId: 'EapId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eapId: 'string',
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

