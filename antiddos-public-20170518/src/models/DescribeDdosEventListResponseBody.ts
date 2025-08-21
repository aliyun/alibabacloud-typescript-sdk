// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDdosEventListResponseBodyDdosEventListDdosEvent extends $dara.Model {
  /**
   * @remarks
   * The status of the DDoS attack event. Valid values:
   * 
   * *   **mitigating**: indicates that traffic scrubbing is in progress.
   * *   **blackholed**: indicates that blackhole filtering is triggered for the asset.
   * *   **normal**: indicates that the DDoS attack event ends.
   * 
   * @example
   * normal
   */
  ddosStatus?: string;
  /**
   * @remarks
   * The type of the DDoS attack event. Valid values:
   * 
   * *   **defense**: an attack event that triggers traffic scrubbing
   * *   **blackhole**: an attack event that triggers blackhole filtering
   * 
   * @example
   * blackhole
   */
  ddosType?: string;
  /**
   * @remarks
   * The time of the last attack. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * > This parameter is returned only when the asset is attacked multiple times within a DDoS attack event.
   * 
   * @example
   * 1637817679000
   */
  delayTime?: number;
  /**
   * @remarks
   * The end time of the DDoS attack event. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1637817679000
   */
  endTime?: number;
  /**
   * @remarks
   * The start time of the DDoS attack event. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1637812279000
   */
  startTime?: number;
  /**
   * @remarks
   * The time when blackhole filtering is deactivated. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * > This parameter is returned only when the value of the **DdosType** parameter is **blackhole**.
   * 
   * @example
   * 1637814079000
   */
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
  /**
   * @remarks
   * The details of the DDoS attack events.
   */
  ddosEventList?: DescribeDdosEventListResponseBodyDdosEventList;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * BC0907F8-A9F3-5E11-977B-D59CD98C64ED
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of DDoS attack events.
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

