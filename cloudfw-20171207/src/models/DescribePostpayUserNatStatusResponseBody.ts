// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePostpayUserNatStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 6B780BD6-282C-51A9-A8E6-59F636******
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the NAT border firewall. Valid values:
   * 
   * - **open**: The feature is enabled.
   * 
   * - **init**: The feature is being enabled.
   * 
   * - **closed**: The feature is disabled.
   * 
   * @example
   * open
   */
  status?: string;
  /**
   * @remarks
   * The number of days that protection was disabled. This parameter is returned only when the NAT border firewall is enabled.
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

