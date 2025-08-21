// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDDoSEventsResponseBodyDDoSEvents extends $dara.Model {
  /**
   * @remarks
   * The bandwidth of attack traffic. Unit: bit/s.
   * 
   * @example
   * 0
   */
  bps?: number;
  /**
   * @remarks
   * The time when the DDoS attack stopped. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1583933330
   */
  endTime?: number;
  /**
   * @remarks
   * The type of the attack event. Valid values:
   * 
   * *   **defense**: traffic scrubbing events
   * *   **blackhole**: blackhole filtering events
   * 
   * @example
   * blackhole
   */
  eventType?: string;
  /**
   * @remarks
   * The attacked IP address.
   * 
   * @example
   * 203.***.***.132
   */
  ip?: string;
  /**
   * @remarks
   * The attacked port.
   * 
   * @example
   * 80
   */
  port?: string;
  /**
   * @remarks
   * The packet forwarding rate of attack traffic. Unit: packets per second (pps).
   * 
   * @example
   * 0
   */
  pps?: number;
  /**
   * @remarks
   * The region from which the attack was launched. Valid values:
   * 
   * *   **cn**: a region in the Chinese mainland
   * *   **alb-ap-northeast-1-gf-x**: Japan (Tokyo)
   * *   **alb-ap-southeast-gf-x**: Singapore
   * *   **alb-cn-hongkong-gf-x**: Hong Kong (China)
   * *   **alb-eu-central-1-gf-x**: Germany (Frankfurt)
   * *   **alb-us-west-1-gf-x**: US (Silicon Valley)
   * 
   * > The values except **cn** are returned only when **RegionId** is set to **ap-southeast-1**.
   * 
   * @example
   * cn
   */
  region?: string;
  /**
   * @remarks
   * The time when the DDoS attack started. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1583933277
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      bps: 'Bps',
      endTime: 'EndTime',
      eventType: 'EventType',
      ip: 'Ip',
      port: 'Port',
      pps: 'Pps',
      region: 'Region',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bps: 'number',
      endTime: 'number',
      eventType: 'string',
      ip: 'string',
      port: 'string',
      pps: 'number',
      region: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDDoSEventsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The DDoS attack events.
   */
  DDoSEvents?: DescribeDDoSEventsResponseBodyDDoSEvents[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0CA72AF5-1795-4350-8C77-50A448A2F334
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned attack events.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      DDoSEvents: 'DDoSEvents',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DDoSEvents: { 'type': 'array', 'itemType': DescribeDDoSEventsResponseBodyDDoSEvents },
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.DDoSEvents)) {
      $dara.Model.validateArray(this.DDoSEvents);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

