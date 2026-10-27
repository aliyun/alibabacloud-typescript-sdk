// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SasInstallCodeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B256A525-7E42-4BB9-A27C-9017FDDFF1A2
   */
  requestId?: string;
  /**
   * @remarks
   * The installation verification code that is used to run the installation command when you manually install the Security Center agent.
   * 
   * @example
   * eD****
   */
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

