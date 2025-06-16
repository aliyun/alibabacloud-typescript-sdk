// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyVpnConnectionAttributeResponseBodyVcoHealthCheck extends $dara.Model {
  /**
   * @remarks
   * The destination IP address.
   * 
   * @example
   * 192.168.1.1
   */
  dip?: string;
  /**
   * @remarks
   * Indicates whether the health check feature is enabled for the IPsec-VPN connection.
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  enable?: string;
  /**
   * @remarks
   * The interval between two consecutive health checks. Unit: seconds.
   * 
   * @example
   * 3
   */
  interval?: number;
  /**
   * @remarks
   * The maximum number of health check retries.
   * 
   * @example
   * 3
   */
  retry?: number;
  /**
   * @remarks
   * The source IP address that is used for health checks.
   * 
   * @example
   * 10.1.1.1
   */
  sip?: string;
  static names(): { [key: string]: string } {
    return {
      dip: 'Dip',
      enable: 'Enable',
      interval: 'Interval',
      retry: 'Retry',
      sip: 'Sip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dip: 'string',
      enable: 'string',
      interval: 'number',
      retry: 'number',
      sip: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

