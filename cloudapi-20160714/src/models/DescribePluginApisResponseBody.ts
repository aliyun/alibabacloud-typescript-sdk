// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribePluginApisResponseBodyApiSummarys } from "./DescribePluginApisResponseBodyApiSummarys";


export class DescribePluginApisResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about APIs.
   */
  apiSummarys?: DescribePluginApisResponseBodyApiSummarys;
  /**
   * @remarks
   * The page number of the page to return.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F9C5C4A5-BC6C-57A3-839F-AB08********
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 7
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      apiSummarys: 'ApiSummarys',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiSummarys: DescribePluginApisResponseBodyApiSummarys,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.apiSummarys && typeof (this.apiSummarys as any).validate === 'function') {
      (this.apiSummarys as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

