// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDdosEventResponseBodyEvents extends $dara.Model {
  /**
   * @remarks
   * The end time of the attack. The time is a UNIX timestamp in seconds.
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
   * The traffic volume at the start of the attack. Unit: Mbit/s.
   * 
   * @example
   * 0
   */
  mbps?: number;
  /**
   * @remarks
   * The packet rate at the start of the attack. Unit: pps.
   * 
   * @example
   * 456
   */
  pps?: number;
  /**
   * @remarks
   * The end time of the attack. The time is a UNIX timestamp in seconds.
   * 
   * @example
   * 1637554034
   */
  startTime?: number;
  /**
   * @remarks
   * The current status of the attack event. Valid values:
   * 
   * - **hole_begin**: Indicates that the attacked IP address is in the blackhole filtering status.
   * - **hole_end**: Indicates that the attacked IP address is removed from the blackhole filtering status.
   * - **defense_begin**: Indicates that the system scrubs traffic.
   * - **defense_end**: Indicates that the attack ends and the system scrubs traffic no more.
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
   * The details of the DDoS attack events.
   */
  events?: DescribeDdosEventResponseBodyEvents[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F3B6C3F9-6B21-519D-B976-A1E14166F909
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of DDoS attack events returned.
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

