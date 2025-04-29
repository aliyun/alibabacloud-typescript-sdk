// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribePluginGroupsResponseBodyGroupSummarys } from "./DescribePluginGroupsResponseBodyGroupSummarys";


export class DescribePluginGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Collection of group information
   */
  groupSummarys?: DescribePluginGroupsResponseBodyGroupSummarys;
  /**
   * @remarks
   * Pagination parameter: current page number
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Pagination parameter: number of items per page, default value 10
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 765BC99E-F583-5A80-9A42-42AC125C2CDC
   */
  requestId?: string;
  /**
   * @remarks
   * Total number of returned results
   * 
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      groupSummarys: 'GroupSummarys',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupSummarys: DescribePluginGroupsResponseBodyGroupSummarys,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.groupSummarys && typeof (this.groupSummarys as any).validate === 'function') {
      (this.groupSummarys as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

