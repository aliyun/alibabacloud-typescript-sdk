// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDdosEventResponseBodyEvents extends $dara.Model {
  /**
   * @remarks
   * The time when the DDoS attack stopped. This value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1637554335
   */
  endTime?: number;
  /**
   * @remarks
   * The attacked IP address.
   * 
   * @example
   * 47.89.XX.XX
   */
  ip?: string;
  /**
   * @remarks
   * The volume of the request traffic at the start of the DDoS attack. Unit: Mbit/s.
   * 
   * @example
   * 0
   */
  mbps?: number;
  /**
   * @remarks
   * The number of packets at the start of the DDoS attack. Unit: packets per second (PPS).
   * 
   * @example
   * 456
   */
  pps?: number;
  /**
   * @remarks
   * The time when the DDoS attack started. This value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1637554034
   */
  startTime?: number;
  /**
   * @remarks
   * The status of the DDoS attack event. Valid values:
   * 
   * *   **hole_begin**: indicates that blackhole filtering is triggered for the attacked IP address.
   * *   **hole_end**: indicates that blackhole filtering is deactivated for the attacked IP address.
   * *   **defense_begin**: indicates that attack traffic is being scrubbed.
   * *   **defense_end**: indicates that attack traffic is scrubbed.
   * 
   * @example
   * defense_end
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      ip: 'Ip',
      mbps: 'Mbps',
      pps: 'Pps',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      ip: 'string',
      mbps: 'number',
      pps: 'number',
      startTime: 'number',
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

export class DescribeDdosEventResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the DDoS attack event.
   */
  events?: DescribeDdosEventResponseBodyEvents[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F3B6C3F9-6B21-519D-B976-A1E14166F909
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of DDoS attack events that are returned.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      events: 'Events',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      events: { 'type': 'array', 'itemType': DescribeDdosEventResponseBodyEvents },
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.events)) {
      $dara.Model.validateArray(this.events);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

