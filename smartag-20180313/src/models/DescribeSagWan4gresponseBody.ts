// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSagWan4GResponseBody extends $dara.Model {
  /**
   * @remarks
   * The IP address of the 4G SIM card.
   * 
   * @example
   * 192.XX.XX.1
   */
  ip?: string;
  /**
   * @remarks
   * The MAC address of the 4G SIM card.
   * 
   * @example
   * c4:00:ad:a2:f5:****
   */
  mac?: string;
  /**
   * @remarks
   * The priority of the 4G SIM card. The default value is **99**, which indicates the lowest priority and cannot be modified.
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
   * The status of the 4G SIM card. Valid value:
   * 
   * *   **Normal**: The 4G SIM card is available.
   * *   **Abnormal**: The 4G SIM card encountered an error.
   * *   **Unavailable**: No 4G SIM card is inserted.
   * 
   * @example
   * Normal
   */
  status?: string;
  /**
   * @remarks
   * The signal strength of the 4G network. Valid values:
   * 
   * *   **High**: strong signals.
   * *   **Middle**: medium-strength signals.
   * *   **Low**: weak signals.
   * *   **Unavailable**: no signal.
   * 
   * @example
   * High
   */
  strength?: string;
  /**
   * @remarks
   * The network status of the 4G SIM card. Valid values:
   * 
   * *   **active**: The 4G SIM card is used to establish the active connection. Network traffic is transmitted over the 4G SIM card first.
   * *   **standby**: The 4G SIM card is used to establish a standby connection. Network traffic is not transmitted over the 4G SIM card unless the active connection fails.
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

