// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainAttackEventsResponseBodyDomainAttackEvents extends $dara.Model {
  domain?: string;
  endTime?: number;
  maxQps?: number;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      endTime: 'EndTime',
      maxQps: 'MaxQps',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      endTime: 'number',
      maxQps: 'number',
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

export class DescribeDomainAttackEventsResponseBody extends $dara.Model {
  domainAttackEvents?: DescribeDomainAttackEventsResponseBodyDomainAttackEvents[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      domainAttackEvents: 'DomainAttackEvents',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainAttackEvents: { 'type': 'array', 'itemType': DescribeDomainAttackEventsResponseBodyDomainAttackEvents },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.domainAttackEvents)) {
      $dara.Model.validateArray(this.domainAttackEvents);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

