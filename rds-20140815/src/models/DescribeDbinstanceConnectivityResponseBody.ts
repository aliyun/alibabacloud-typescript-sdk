// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceConnectivityResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code of the connection diagnostics. Valid values:
   * * **SRC_IP_NOT_IN_USER_WHITELIST**: The source IP address is not added to the whitelist.
   * * **CONNECTION_ABNORMAL**: The connection is normal.
   * 
   * @example
   * SRC_IP_NOT_IN_USER_WHITELIST
   */
  connCheckErrorCode?: string;
  /**
   * @remarks
   * The error message of the connection diagnostics.
   * 
   * @example
   * Src ip:39.106.64.59 not in user whitelist
   */
  connCheckErrorMessage?: string;
  /**
   * @remarks
   * The result of the connection diagnostics. Valid values:
   * * **Success**
   * * **Failed**
   * 
   * @example
   * Failed
   */
  connCheckResult?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rm-2ze2za3is7baay1w4
   */
  dbInstanceName?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * D880212A-F21F-5722-8422-BD06B2874CC3
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      connCheckErrorCode: 'ConnCheckErrorCode',
      connCheckErrorMessage: 'ConnCheckErrorMessage',
      connCheckResult: 'ConnCheckResult',
      dbInstanceName: 'DbInstanceName',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connCheckErrorCode: 'string',
      connCheckErrorMessage: 'string',
      connCheckResult: 'string',
      dbInstanceName: 'string',
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

