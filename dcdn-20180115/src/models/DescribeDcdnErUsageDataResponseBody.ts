// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDcdnErUsageDataResponseBodyErAccDataErAccItem extends $dara.Model {
  /**
   * @remarks
   * The number of requests.
   * 
   * @example
   * 125
   */
  erAcc?: number;
  /**
   * @remarks
   * The ID of the routine. This parameter is returned only when SplitBy is set to routine.
   * 
   * @example
   * routine1.test
   */
  routine?: string;
  /**
   * @remarks
   * The specification of the routine. This parameter is returned only when SplitBy is set to spec.
   * 
   * @example
   * 50ms
   */
  spec?: string;
  /**
   * @remarks
   * The timestamp of the returned data.
   * 
   * @example
   * 2018-10-30T13:00:00Z
   */
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      erAcc: 'ErAcc',
      routine: 'Routine',
      spec: 'Spec',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      erAcc: 'number',
      routine: 'string',
      spec: 'string',
      timeStamp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnErUsageDataResponseBodyErAccData extends $dara.Model {
  erAccItem?: DescribeDcdnErUsageDataResponseBodyErAccDataErAccItem[];
  static names(): { [key: string]: string } {
    return {
      erAccItem: 'ErAccItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      erAccItem: { 'type': 'array', 'itemType': DescribeDcdnErUsageDataResponseBodyErAccDataErAccItem },
    };
  }

  validate() {
    if(Array.isArray(this.erAccItem)) {
      $dara.Model.validateArray(this.erAccItem);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnErUsageDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The end of the time range during which data was queried.
   * 
   * @example
   * 2018-10-31T16:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The list of the data returned.
   */
  erAccData?: DescribeDcdnErUsageDataResponseBodyErAccData;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C370DAF1-C838-4288-A1A0-9A87633D248E
   */
  requestId?: string;
  /**
   * @remarks
   * The start of the time range during which data was queried.
   * 
   * @example
   * 2018-10-30T16:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      erAccData: 'ErAccData',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      erAccData: DescribeDcdnErUsageDataResponseBodyErAccData,
      requestId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(this.erAccData && typeof (this.erAccData as any).validate === 'function') {
      (this.erAccData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

