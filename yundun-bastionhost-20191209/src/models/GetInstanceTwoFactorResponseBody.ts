// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetInstanceTwoFactorResponseBodyConfig } from "./GetInstanceTwoFactorResponseBodyConfig";


export class GetInstanceTwoFactorResponseBody extends $dara.Model {
  /**
   * @remarks
   * The settings of two-factor authentication.
   */
  config?: GetInstanceTwoFactorResponseBodyConfig;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * EC9BF0F4-8983-491A-BC8C-1B4DD94976DE
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: GetInstanceTwoFactorResponseBodyConfig,
      requestId: 'string',
    };
  }

  validate() {
    if(this.config && typeof (this.config as any).validate === 'function') {
      (this.config as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

