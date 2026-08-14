// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDDosAllEventListResponseBodyAttackEvents extends $dara.Model {
  area?: string;
  endTime?: number;
  eventType?: string;
  ip?: string;
  mbps?: number;
  port?: string;
  pps?: number;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      area: 'Area',
      endTime: 'EndTime',
      eventType: 'EventType',
      ip: 'Ip',
      mbps: 'Mbps',
      port: 'Port',
      pps: 'Pps',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      area: 'string',
      endTime: 'number',
      eventType: 'string',
      ip: 'string',
      mbps: 'number',
      port: 'string',
      pps: 'number',
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

export class DescribeDDosAllEventListResponseBody extends $dara.Model {
  attackEvents?: DescribeDDosAllEventListResponseBodyAttackEvents[];
  requestId?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      attackEvents: 'AttackEvents',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attackEvents: { 'type': 'array', 'itemType': DescribeDDosAllEventListResponseBodyAttackEvents },
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.attackEvents)) {
      $dara.Model.validateArray(this.attackEvents);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

