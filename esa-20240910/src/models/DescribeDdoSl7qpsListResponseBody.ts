// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDDoSL7QpsListResponseBodyDataModule extends $dara.Model {
  /**
   * @remarks
   * Attack QPS.
   * 
   * @example
   * 5
   */
  attack?: number;
  /**
   * @remarks
   * Normal QPS.
   * 
   * @example
   * 4
   */
  normal?: number;
  /**
   * @remarks
   * Data time, following ISO8601 notation and using UTC+0, formatted as yyyy-MM-ddTHH:mm:ssZ.
   * 
   * @example
   * 2023-04-19T16:00:00Z
   */
  timeStamp?: string;
  /**
   * @remarks
   * Total QPS.
   * 
   * @example
   * 9
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      attack: 'Attack',
      normal: 'Normal',
      timeStamp: 'TimeStamp',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attack: 'number',
      normal: 'number',
      timeStamp: 'string',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDDoSL7QpsListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time granularity of the queried data, in seconds.
   * 
   * @example
   * 300
   */
  dataInterval?: number;
  /**
   * @remarks
   * Application layer time trend data list.
   */
  dataModule?: DescribeDDoSL7QpsListResponseBodyDataModule[];
  /**
   * @remarks
   * The end time of the query.
   * 
   * The date format follows ISO8601 notation and uses UTC+0, formatted as yyyy-MM-ddTHH:mm:ssZ.
   * 
   * @example
   * 2023-04-19T19:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * Record ID.
   * 
   * @example
   * 86510927836942****
   */
  recordId?: number;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 156A6B-677B1A-4297B7-9187B7-2B44792
   */
  requestId?: string;
  /**
   * @remarks
   * Site ID.
   * 
   * @example
   * 123456****
   */
  siteId?: number;
  /**
   * @remarks
   * The start time of the query.
   * 
   * The date format follows ISO8601 notation and uses UTC+0, formatted as yyyy-MM-ddTHH:mm:ssZ.
   * 
   * @example
   * 2023-04-19T16:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      dataInterval: 'DataInterval',
      dataModule: 'DataModule',
      endTime: 'EndTime',
      recordId: 'RecordId',
      requestId: 'RequestId',
      siteId: 'SiteId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInterval: 'number',
      dataModule: { 'type': 'array', 'itemType': DescribeDDoSL7QpsListResponseBodyDataModule },
      endTime: 'string',
      recordId: 'number',
      requestId: 'string',
      siteId: 'number',
      startTime: 'string',
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

