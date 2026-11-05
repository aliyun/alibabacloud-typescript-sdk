// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSagWan4GResponseBody extends $dara.Model {
  /**
   * @remarks
   * The IP address of the 4G NIC.
   * 
   * @example
   * 192.XX.XX.1
   */
  ip?: string;
  /**
   * @remarks
   * The MAC address of the 4G NIC.
   * 
   * @example
   * c4:00:ad:a2:f5:****
   */
  mac?: string;
  /**
   * @remarks
   * The priority of the 4G NIC. The default value is **99**, which indicates the lowest priority. The priority cannot be modified.
   * 
   * @example
   * 99
   */
  priority?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CE6642D4-21EB-4168-9BF9-F217953F9892
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the 4G NIC. Valid values:
   * - **Normal**: The status is normal.
   * - **Abnormal**: The status is abnormal.
   * - **Unavailable**: No 4G NIC is available.
   * 
   * @example
   * Normal
   */
  status?: string;
  /**
   * @remarks
   * The 4G signal strength. Valid values:
   * - **High**: Strong.
   * - **Middle**: Medium.
   * - **Low**: Weak.
   * - **Unavailable**: No signal.
   * 
   * @example
   * High
   */
  strength?: string;
  /**
   * @remarks
   * The traffic status of the 4G NIC. Valid values:
   * - **active**: The 4G NIC acts as the active link, and current traffic is transmitted through this 4G NIC.
   * - **standby**: The 4G NIC acts as the standby link and does not forward traffic. If the active link fails, traffic is transmitted through this 4G NIC.
   * 
   * @example
   * active
   */
  trafficState?: string;
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
      mac: 'Mac',
      priority: 'Priority',
      requestId: 'RequestId',
      status: 'Status',
      strength: 'Strength',
      trafficState: 'TrafficState',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: 'string',
      mac: 'string',
      priority: 'number',
      requestId: 'string',
      status: 'string',
      strength: 'string',
      trafficState: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

