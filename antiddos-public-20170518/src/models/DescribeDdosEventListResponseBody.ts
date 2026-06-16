// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDdosEventListResponseBodyDdosEventListDdosEvent extends $dara.Model {
  ddosStatus?: string;
  ddosType?: string;
  delayTime?: number;
  endTime?: number;
  startTime?: number;
  unBlackholeTime?: number;
  static names(): { [key: string]: string } {
    return {
      ddosStatus: 'DdosStatus',
      ddosType: 'DdosType',
      delayTime: 'DelayTime',
      endTime: 'EndTime',
      startTime: 'StartTime',
      unBlackholeTime: 'UnBlackholeTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ddosStatus: 'string',
      ddosType: 'string',
      delayTime: 'number',
      endTime: 'number',
      startTime: 'number',
      unBlackholeTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDdosEventListResponseBodyDdosEventList extends $dara.Model {
  ddosEvent?: DescribeDdosEventListResponseBodyDdosEventListDdosEvent[];
  static names(): { [key: string]: string } {
    return {
      ddosEvent: 'DdosEvent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ddosEvent: { 'type': 'array', 'itemType': DescribeDdosEventListResponseBodyDdosEventListDdosEvent },
    };
  }

  validate() {
    if(Array.isArray(this.ddosEvent)) {
      $dara.Model.validateArray(this.ddosEvent);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDdosEventListResponseBody extends $dara.Model {
  ddosEventList?: DescribeDdosEventListResponseBodyDdosEventList;
  /**
   * @remarks
   * The ID of the request. Alibaba Cloud generates a unique ID for each request. You can use the ID to troubleshoot issues.
   * 
   * @example
   * BC0907F8-A9F3-5E11-977B-D59CD98C64ED
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of DDoS attack events found.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      ddosEventList: 'DdosEventList',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ddosEventList: DescribeDdosEventListResponseBodyDdosEventList,
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(this.ddosEventList && typeof (this.ddosEventList as any).validate === 'function') {
      (this.ddosEventList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

