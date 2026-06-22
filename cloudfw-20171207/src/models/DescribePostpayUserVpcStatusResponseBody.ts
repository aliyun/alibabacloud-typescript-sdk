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
   * The status of the Cloud Firewall VPC firewall switch module. Valid values:
   * 
   * - **open**: The module is enabled.
   * - **init**: The module is being enabled.
   * - **closed**: The module is not enabled.
   * 
   * @example
   * open
   */
  status?: string;
  /**
   * @remarks
   * The number of days during which protection is not enabled. This parameter is valid only when the module is enabled.
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

