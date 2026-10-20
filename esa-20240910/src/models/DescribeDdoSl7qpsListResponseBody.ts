// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDDoSL7QpsListResponseBodyDataModule extends $dara.Model {
  /**
   * @remarks
   * The attack QPS.
   * 
   * @example
   * 5
   */
  attack?: number;
  /**
   * @remarks
   * The normal QPS.
   * 
   * @example
   * 4
   */
  normal?: number;
  /**
   * @remarks
   * The data timestamp. The time is displayed in UTC and formatted based on ISO 8601 in the yyyy-MM-ddTHH:mm:ssZ format.
   * 
   * @example
   * 2023-04-19T16:00:00Z
   */
  timeStamp?: string;
  /**
   * @remarks
   * The total QPS.
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
   * The time granularity of the queried data. Unit: seconds.
   * 
   * @example
   * 300
   */
  dataInterval?: number;
  /**
   * @remarks
   * The list of application-layer time-series data.
   */
  dataModule?: DescribeDDoSL7QpsListResponseBodyDataModule[];
  /**
   * @remarks
   * The end time of the query. The time is displayed in UTC and formatted based on ISO 8601 in the yyyy-MM-ddTHH:mm:ssZ format.
   * 
   * @example
   * 2023-04-19T19:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The record ID.
   * 
   * @example
   * 86510927836942****
   */
  recordId?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 156A6B-677B1A-4297B7-9187B7-2B44792
   */
  requestId?: string;
  /**
   * @remarks
   * The site ID.
   * 
   * @example
   * 123456****
   */
  siteId?: number;
  /**
   * @remarks
   * The start time of the query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
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

