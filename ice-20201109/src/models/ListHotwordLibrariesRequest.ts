// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHotwordLibrariesRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query.
   * 
   * @example
   * 2020-12-26T04:11:10Z
   */
  endTime?: string;
  /**
   * @remarks
   * The maximum number of entries to return.
   * 
   * Default value: 10. Valid values: 1 to 100.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The name of the hotword library.
   * 
   * @example
   * 热词库使用名称
   */
  name?: string;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * @example
   * ****73f33c91-d59383e8280b****
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. Valid values: 1 to 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The sorting order. By default, the query results are sorted by creation time in descending order.
   * 
   * @example
   * CreationTime:Desc
   */
  sortBy?: string;
  /**
   * @remarks
   * The beginning of the time range to query.
   * 
   * @example
   * 2020-12-26T04:11:10Z
   */
  startTime?: string;
  /**
   * @remarks
   * The usage scenario of the hotword library. Valid values:
   * 
   * *   ASR: Automatic Speech Recognition
   * *   StructuredMediaAssets: structured media analysis
   * *   VideoTranslation: Video translation. This field cannot be modified after the hotword library is created.
   * 
   * @example
   * ASR
   */
  usageScenario?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      maxResults: 'MaxResults',
      name: 'Name',
      nextToken: 'NextToken',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
      startTime: 'StartTime',
      usageScenario: 'UsageScenario',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      maxResults: 'number',
      name: 'string',
      nextToken: 'string',
      pageNo: 'number',
      pageSize: 'number',
      sortBy: 'string',
      startTime: 'string',
      usageScenario: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

