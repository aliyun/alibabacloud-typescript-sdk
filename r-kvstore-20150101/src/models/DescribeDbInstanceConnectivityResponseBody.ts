// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDbInstanceConnectivityResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code for connection diagnosis. Valid values:
   * 
   * *   **SRC_IP_NOT_IN_USER_WHITELIST**: The source IP address is not added to the whitelist.
   * *   **CONNECTION_ABNORMAL**: The connection to the instance is normal.
   * 
   * @example
   * SRC_IP_NOT_IN_USER_WHITELIST
   */
  connCheckErrorCode?: string;
  /**
   * @remarks
   * The error message for connection diagnosis.
   * 
   * @example
   * Src ip:172.28.134.96 not in user whitelist
   */
  connCheckErrorMessage?: string;
  /**
   * @remarks
   * The connection check result. Valid values:
   * 
   * *   **Success**
   * *   **Failed**
   * 
   * @example
   * Failed
   */
  connCheckResult?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 2BE6E619-A657-42E3-AD2D-18F8428A****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      connCheckErrorCode: 'ConnCheckErrorCode',
      connCheckErrorMessage: 'ConnCheckErrorMessage',
      connCheckResult: 'ConnCheckResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connCheckErrorCode: 'string',
      connCheckErrorMessage: 'string',
      connCheckResult: 'string',
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

