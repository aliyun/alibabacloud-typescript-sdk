// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDDoSEventsResponseBodyDDoSEvents extends $dara.Model {
  bps?: number;
  endTime?: number;
  eventType?: string;
  ip?: string;
  port?: string;
  pps?: number;
  region?: string;
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
  DDoSEvents?: DescribeDDoSEventsResponseBodyDDoSEvents[];
  requestId?: string;
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

