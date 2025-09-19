// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEmgUserAgreementResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether Security Center is authorized to scan for urgent vulnerabilities. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * true
   */
  auth?: boolean;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 768BB9F5-8AF3-557F-A489-9BDD64CB3E4C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      auth: 'Auth',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auth: 'boolean',
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

