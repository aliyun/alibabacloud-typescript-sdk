// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAccountMFAInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether MFA devices are enabled. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  isMFAEnable?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4BE83135-0B08-467C-B3A2-27B312FD0F57
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      isMFAEnable: 'IsMFAEnable',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isMFAEnable: 'boolean',
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

