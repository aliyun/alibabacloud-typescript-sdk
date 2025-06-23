// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHealthCheckStatusResponseBodyHealthCheckStatusRealServerStatusList extends $dara.Model {
  /**
   * @remarks
   * The IP address of the origin server.
   * 
   * @example
   * 192.0.XX.XX
   */
  address?: string;
  /**
   * @remarks
   * The health state of the IP address. Valid values:
   * 
   * *   **normal**: healthy
   * *   **abnormal**: unhealthy
   * 
   * @example
   * abnormal
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

