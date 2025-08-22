// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDcdnReportRequest extends $dara.Model {
  /**
   * @remarks
   * The region. You can call the [DescribeDcdnRegionAndIsp](https://help.aliyun.com/document_detail/207199.html) operation to query regions.
   * 
   * *   If you do not specify a region, data in all regions is queried.
   * *   If you specify a region, data in the specified region is returned. You can specify one or more regions. Separate regions with commas (,).
   * 
   * @example
   * shanghai
   */
  area?: string;
  /**
   * @remarks
   * The domain names that you want to query. Separate domain names with commas (,).
   * 
   * @example
   * www.example.com,www.example.org
   */
  domainName?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-07-02T01:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The HTTP status code. Valid values:
   * 
   * *   **2xx**: HTTP 2xx status codes
   * *   **3xx**: HTTP 3xx status codes
   * *   **4xx**: HTTP 4xx status codes
   * *   **5xx**: HTTP 5xx status codes
   * 
   * If you do not specify an HTTP status code, data for all preceding HTTP status codes is queried.
   * 
   * @example
   * 2xx
   */
  httpCode?: string;
  /**
   * @remarks
   * Specify whether the region is outside the Chinese mainland. Valid values:
   * 
   * *   **1**: outside the Chinese mainland
   * *   **0**: inside the Chinese mainland
   * 
   * @example
   * 0
   */
  isOverseas?: string;
  /**
   * @remarks
   * The ID of the operations report that you want to query. You can enter only one ID in each call. You can call the [DescribeDcdnSubList](https://help.aliyun.com/document_detail/270075.html) operation to query report IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  reportId?: number;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-07-02T00:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      area: 'Area',
      domainName: 'DomainName',
      endTime: 'EndTime',
      httpCode: 'HttpCode',
      isOverseas: 'IsOverseas',
      reportId: 'ReportId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      area: 'string',
      domainName: 'string',
      endTime: 'string',
      httpCode: 'string',
      isOverseas: 'string',
      reportId: 'number',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

