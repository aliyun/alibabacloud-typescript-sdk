// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyVpnAttachmentAttributeResponseBodyVcoHealthCheck extends $dara.Model {
  /**
   * @remarks
   * The destination IP address that is used for health checks.
   * 
   * @example
   * 192.168.1.1
   */
  dip?: string;
  /**
   * @remarks
   * Indicates whether the health check feature is enabled for the IPsec-VPN connection. Valid values:
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
   * The interval between two consecutive health check retries. Unit: seconds.
   * 
   * @example
   * 3
   */
  interval?: number;
  /**
   * @remarks
   * Indicates whether advertised routes are withdrawn when the health check fails. Valid values:
   * 
   * *   **revoke_route**: Advertised routes are withdrawn.
   * *   **reserve_route**: Advertised routes are not withdrawn.
   * 
   * @example
   * revoke_route
   */
  policy?: string;
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
      policy: 'Policy',
      retry: 'Retry',
      sip: 'Sip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dip: 'string',
      enable: 'string',
      interval: 'number',
      policy: 'string',
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

