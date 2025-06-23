// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNetworkRuleAttributesResponseBodyNetworkRuleAttributesConfigSlimit extends $dara.Model {
  /**
   * @remarks
   * The bandwidth limit for a source IP address. Valid values: **1024** to **268435456**. Unit: bytes/s. Default value: **0**, which indicates that the bandwidth for a source IP address is unlimited.
   * 
   * @example
   * 0
   */
  bps?: number;
  /**
   * @remarks
   * The maximum number of new connections per second that can be initiated from a source IP address. Valid values: **1** to **500000**.
   * 
   * @example
   * 0
   */
  cps?: number;
  /**
   * @remarks
   * The status of the Source New Connection Rate Limit switch. Valid values:
   * 
   * *   **0**: The switch is turned off.
   * *   **1**: The switch is turned on.
   * 
   * @example
   * 0
   */
  cpsEnable?: number;
  /**
   * @remarks
   * The mode of the Source New Connection Rate Limit switch. Valid values:
   * 
   * *   **1**: the manual mode
   * *   **2**: the automatic mode
   * 
   * @example
   * 1
   */
  cpsMode?: number;
  /**
   * @remarks
   * The maximum number of concurrent connections initiated from a source IP address. Valid values: **1** to **500000**.
   * 
   * @example
   * 0
   */
  maxconn?: number;
  /**
   * @remarks
   * The status of the Source Concurrent Connection Rate Limit switch. Valid values:
   * 
   * *   **0**: The switch is turned off.
   * *   **1**: The switch is turned on.
   * 
   * @example
   * 0
   */
  maxconnEnable?: number;
  /**
   * @remarks
   * The packets per second (pps) limit for a source IP address. Valid values: **1** to **100000**. Unit: packets/s. Default value: **0**, which indicates that the pps for a source IP address is unlimited.
   * 
   * @example
   * 0
   */
  pps?: number;
  static names(): { [key: string]: string } {
    return {
      bps: 'Bps',
      cps: 'Cps',
      cpsEnable: 'CpsEnable',
      cpsMode: 'CpsMode',
      maxconn: 'Maxconn',
      maxconnEnable: 'MaxconnEnable',
      pps: 'Pps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bps: 'number',
      cps: 'number',
      cpsEnable: 'number',
      cpsMode: 'number',
      maxconn: 'number',
      maxconnEnable: 'number',
      pps: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

