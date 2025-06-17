// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCdnReportRequest extends $dara.Model {
  /**
   * @remarks
   * The region. You can call the [DescribeCdnRegionAndIsp](https://help.aliyun.com/document_detail/91077.html) operation to query regions.
   * 
   * *   If you do not specify a region, data in all regions is queried.
   * *   If you specify a region, data in the specified region is queried. You can specify one or more regions. If you specify multiple regions, separate the regions with commas (,).
   * 
   * @example
   * shanghai
   */
  area?: string;
  /**
   * @remarks
   * The domain name that you want to query. Separate domain names with commas (,).
   * 
   * @example
   * www.example1.com,example2.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2020-09-17T01:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The HTTP status code. Valid values:
   * 
   * *   **2xx**
   * *   **3xx**
   * *   **4xx**
   * *   **5xx**
   * 
   * If you do not specify this parameter, all HTTP status codes are queried.
   * 
   * @example
   * 2xx
   */
  httpCode?: string;
  /**
   * @remarks
   * Specifies whether the region is outside the Chinese mainland. Valid values:
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
   * The ID of the operations report that you want to query. You can specify only one ID in each request. You can call the [DescribeCdnSubList](https://help.aliyun.com/document_detail/271655.html) operation to query report IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  reportId?: number;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2020-09-17T00:00:00Z
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

