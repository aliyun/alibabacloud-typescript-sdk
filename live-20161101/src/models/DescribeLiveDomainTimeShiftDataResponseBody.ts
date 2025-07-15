// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveDomainTimeShiftDataResponseBodyTimeShiftDataDataModule extends $dara.Model {
  /**
   * @remarks
   * The storage used for time shifting. Unit: bytes.
   * 
   * @example
   * 1664165660
   */
  size?: string;
  /**
   * @remarks
   * The timestamp of the data returned.
   * 
   * @example
   * 2021-03-03T00:00:00Z
   */
  timeStamp?: string;
  /**
   * @remarks
   * The type of time shifting. Examples: HLS_D1 and HLS_D7.
   * 
   * @example
   * HLS_D7
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      size: 'Size',
      timeStamp: 'TimeStamp',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      size: 'string',
      timeStamp: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainTimeShiftDataResponseBodyTimeShiftData extends $dara.Model {
  dataModule?: DescribeLiveDomainTimeShiftDataResponseBodyTimeShiftDataDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeLiveDomainTimeShiftDataResponseBodyTimeShiftDataDataModule },
    };
  }

  validate() {
    if(Array.isArray(this.dataModule)) {
      $dara.Model.validateArray(this.dataModule);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainTimeShiftDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8AE1CB3A-6510-442E-A6B9-EF03D05B3E09
   */
  requestId?: string;
  /**
   * @remarks
   * The time shifting usage data that was collected for each time interval.
   */
  timeShiftData?: DescribeLiveDomainTimeShiftDataResponseBodyTimeShiftData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      timeShiftData: 'TimeShiftData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      timeShiftData: DescribeLiveDomainTimeShiftDataResponseBodyTimeShiftData,
    };
  }

  validate() {
    if(this.timeShiftData && typeof (this.timeShiftData as any).validate === 'function') {
      (this.timeShiftData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

