// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { EnterpriseRegisterAccountResponseBodyAccountInfo } from "./EnterpriseRegisterAccountResponseBodyAccountInfo";


export class EnterpriseRegisterAccountResponseBody extends $dara.Model {
  accountInfo?: EnterpriseRegisterAccountResponseBodyAccountInfo;
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * The operation is not allowed. Channel state (RELEASED) does not meet expectations (ANSWERED).
   */
  message?: string;
  /**
   * @example
   * BDFCF081-7BCD-52D5-9D82-0F58D96EFD92
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accountInfo: 'AccountInfo',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountInfo: EnterpriseRegisterAccountResponseBodyAccountInfo,
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.accountInfo && typeof (this.accountInfo as any).validate === 'function') {
      (this.accountInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

