// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePostpayUserVpcStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 7447795A-39AB-52CB-8F92-128DF******
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the VPC firewall switch module in Cloud Firewall. Valid values:
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
   * The number of days that protection is disabled. This parameter is valid only when the module is enabled.
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

