// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveDomainRecordUsageDataResponseBodyRecordUsageDataDataModule extends $dara.Model {
  /**
   * @remarks
   * The number of peak channels.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * The main streaming domain. This parameter is returned if the value of the request parameter SplitBy contains `domain`.
   * 
   * @example
   * example.com
   */
  domain?: string;
  /**
   * @remarks
   * The recording length. Unit: seconds.
   * 
   * @example
   * 3560
   */
  duration?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  region?: string;
  /**
   * @remarks
   * The time when recording started.
   * 
   * @example
   * 2021-05-10T20:00:00Z
   */
  timeStamp?: string;
  /**
   * @remarks
   * The recording file type. This parameter is returned if the value of the request parameter SplitBy contains `record_fmt`.
   * 
   * @example
   * MP4
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      domain: 'Domain',
      duration: 'Duration',
      region: 'Region',
      timeStamp: 'TimeStamp',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      domain: 'string',
      duration: 'number',
      region: 'string',
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

export class DescribeLiveDomainRecordUsageDataResponseBodyRecordUsageData extends $dara.Model {
  dataModule?: DescribeLiveDomainRecordUsageDataResponseBodyRecordUsageDataDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeLiveDomainRecordUsageDataResponseBodyRecordUsageDataDataModule },
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

export class DescribeLiveDomainRecordUsageDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The end of the time range during which data was queried.
   * 
   * @example
   * 2021-05-10T21:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The recording data that was collected for each interval.
   */
  recordUsageData?: DescribeLiveDomainRecordUsageDataResponseBodyRecordUsageData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4B460F8B-993C-4F48-B98A-910811DEBFEB
   */
  requestId?: string;
  /**
   * @remarks
   * The beginning of the time range during which data was queried.
   * 
   * @example
   * 2021-05-10T20:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      recordUsageData: 'RecordUsageData',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      recordUsageData: DescribeLiveDomainRecordUsageDataResponseBodyRecordUsageData,
      requestId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(this.recordUsageData && typeof (this.recordUsageData as any).validate === 'function') {
      (this.recordUsageData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

