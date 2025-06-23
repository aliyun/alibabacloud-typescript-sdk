// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNetworkRuleAttributesResponseBodyNetworkRuleAttributesConfigSla extends $dara.Model {
  /**
   * @remarks
   * The maximum number of new connections per second that can be established over the port of the destination instance. Valid values: **100** to **100000**.
   * 
   * @example
   * 100000
   */
  cps?: number;
  /**
   * @remarks
   * The status of the Destination New Connection Rate Limit switch. Valid values:
   * 
   * *   **0**: The switch is turned off.
   * *   **1**: The switch is turned on.
   * 
   * @example
   * 1
   */
  cpsEnable?: number;
  /**
   * @remarks
   * The maximum number of concurrent connections that can be established over the port of the destination instance. Valid values: **1000** to **1000000**.
   * 
   * @example
   * 1000000
   */
  maxconn?: number;
  /**
   * @remarks
   * The status of the Destination Concurrent Connection Rate Limit switch. Valid values:
   * 
   * *   **0**: The switch is turned off.
   * *   **1**: The switch is turned on.
   * 
   * @example
   * 0
   */
  maxconnEnable?: number;
  static names(): { [key: string]: string } {
    return {
      cps: 'Cps',
      cpsEnable: 'CpsEnable',
      maxconn: 'Maxconn',
      maxconnEnable: 'MaxconnEnable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cps: 'number',
      cpsEnable: 'number',
      maxconn: 'number',
      maxconnEnable: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

