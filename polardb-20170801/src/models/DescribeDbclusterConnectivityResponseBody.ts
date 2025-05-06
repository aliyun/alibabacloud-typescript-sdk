// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBClusterConnectivityResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code for connection diagnosis. Valid values:
   * 
   * *   **SRC_IP_NOT_IN_USER_WHITELIST**: The source IP address is not added to the whitelist.
   * *   **CONNECTION_ABNORMAL**: The connection to the cluster is normal.
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
   * Src ip:192.***.***.1 not in user whitelist
   */
  connCheckErrorMessage?: string;
  /**
   * @remarks
   * The connection diagnosis result. Valid values:
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
   * The cluster ID.
   * 
   * @example
   * pc-xxxxxxxxxxxxx
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 73A85BAF-1039-4CDE-A83F-1A140F******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      connCheckErrorCode: 'ConnCheckErrorCode',
      connCheckErrorMessage: 'ConnCheckErrorMessage',
      connCheckResult: 'ConnCheckResult',
      DBClusterId: 'DBClusterId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connCheckErrorCode: 'string',
      connCheckErrorMessage: 'string',
      connCheckResult: 'string',
      DBClusterId: 'string',
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

