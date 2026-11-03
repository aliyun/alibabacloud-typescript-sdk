// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePostpayUserInternetStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 0DC783F1-B3A7-578D-8A63-*****
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the Internet Border switch module in Cloud Firewall. Valid values:
   * 
   * - **open**: The module is enabled.
   * - **init**: The module is being enabled.
   * - **closed**: The module is disabled.
   * 
   * @example
   * open
   */
  status?: string;
  /**
   * @remarks
   * The number of days that protection is not enabled. This parameter is valid only when the module is enabled.
   * 
   * @example
   * 20
   */
  unprotectedDate?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      status: 'Status',
      unprotectedDate: 'UnprotectedDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      status: 'string',
      unprotectedDate: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

