// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSlaEventListResponseBodySlaEvent extends $dara.Model {
  endTime?: number;
  ip?: string;
  region?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      ip: 'Ip',
      region: 'Region',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      ip: 'string',
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

export class DescribeSlaEventListResponseBody extends $dara.Model {
  requestId?: string;
  slaEvent?: DescribeSlaEventListResponseBodySlaEvent[];
  total?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      slaEvent: 'SlaEvent',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      slaEvent: { 'type': 'array', 'itemType': DescribeSlaEventListResponseBodySlaEvent },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.slaEvent)) {
      $dara.Model.validateArray(this.slaEvent);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

