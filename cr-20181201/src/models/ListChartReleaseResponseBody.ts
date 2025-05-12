// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListChartReleaseResponseBodyChartReleases } from "./ListChartReleaseResponseBodyChartReleases";


export class ListChartReleaseResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of chart versions.
   */
  chartReleases?: ListChartReleaseResponseBodyChartReleases[];
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F68823F6-F1B5-4A4E-8421-A83CAB8F2963
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 1
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      chartReleases: 'ChartReleases',
      code: 'Code',
      isSuccess: 'IsSuccess',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chartReleases: { 'type': 'array', 'itemType': ListChartReleaseResponseBodyChartReleases },
      code: 'string',
      isSuccess: 'boolean',
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.chartReleases)) {
      $dara.Model.validateArray(this.chartReleases);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

