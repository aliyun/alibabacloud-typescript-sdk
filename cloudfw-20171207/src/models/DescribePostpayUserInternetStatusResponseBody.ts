// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePostpayUserInternetStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0DC783F1-B3A7-578D-8A63-*****
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the Internet Border firewall. Valid values:
   * 
   * - **open**: The firewall is enabled.
   * 
   * - **init**: The firewall is being enabled.
   * 
   * - **closed**: The firewall is disabled.
   * 
   * @example
   * open
   */
  status?: string;
  /**
   * @remarks
   * The number of days that the firewall was disabled. This parameter is returned only if the value of the Status parameter is open.
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

