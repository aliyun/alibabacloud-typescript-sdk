// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHotwordLibrariesRequest extends $dara.Model {
  /**
   * @example
   * 2020-12-26T04:11:10Z
   */
  endTime?: string;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * 热词库使用名称
   */
  name?: string;
  /**
   * @example
   * ****73f33c91-d59383e8280b****
   */
  nextToken?: string;
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * CreationTime:Desc
   */
  sortBy?: string;
  /**
   * @example
   * 2020-12-26T04:11:10Z
   */
  startTime?: string;
  /**
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

