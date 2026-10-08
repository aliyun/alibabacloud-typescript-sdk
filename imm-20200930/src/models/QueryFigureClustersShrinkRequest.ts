// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryFigureClustersShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The time range during which the face clusters were created.
   */
  createTimeRangeShrink?: string;
  /**
   * @remarks
   * The query conditions for custom labels.
   * 
   * @example
   * key=value
   */
  customLabels?: string;
  /**
   * @remarks
   * The name of the dataset. For more information about how to obtain the dataset name, see [Create a dataset](https://help.aliyun.com/document_detail/478160.html).
   * 
   * This parameter is required.
   * 
   * @example
   * test-dataset
   */
  datasetName?: string;
  /**
   * @remarks
   * The maximum number of data records to return in this call. Valid values: 0 to 100. If this parameter is not specified or is set to 0, the default value 100 is used.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. If this parameter is left empty or set to None, the query starts from the beginning.
   * 
   * @example
   * CAESEgoQCg4KCkltYWdlQ291bnQQARgBIr0ECgkABAAAAAAAAAAKrwQDKgIAADFTMzEzMDMyMzMzMjMxMzAzMDMyMzQzNjM3MzczOTMzMzQzYTY5NmQ2ZDJkNjk2ZDYxNjc2NTJkNzQ2NTczNzQyZDY4N2E2NDY1NzYyZDMyMzUzMjM0MzIzOTMzMzczMTJkMzY1NDZhNzk3MzU2Njk3MjM0M2E2OTZkNmQyZDc0NjU3Mzc0MmQ3MzY1NzQyZDYzMzYzNjY0MzY2NjYxMzQyZDM1MzMzODM3MmQzMTMxNjU2NjJkNjI2NTM5MzYyZDM5MzgzMDMzMzk2MjMwMzE2NDYzNjMzMjNhNjY2OTY3NzU3MjY1MmQ2MzZjNzU3Mzc0NjU3MjNhNDM2Yzc1NzM3NDY1NzIyZDYxNjUzOTY0MzQzMzMxNjEyZDM3MzQ2NTY2MmQzNDM5Mzc2MjJkMzg2MjMxMzUyZDM0MzUzOTM1MzYzNzYxMzQ2NDM2MzE2Ni5TMzEzMDMyMzMzMjMxMzAzMDMyMzQzNjM3MzczOTMzMzQzYTY5NmQ2ZDJkNjk2ZDYxNjc2NTJkNzQ2NTczNzQyZDY4N2E2NDY1NzYyZDMyMzUzMjM0MzIzOTMzMzczMTJkMzY1NDZhNzk3MzU2Njk3MjM0M2E2OTZkNmQyZDc0NjU3Mzc0MmQ3MzY1NzQyZDYzMzYzNjY0MzY2NjYxMzQyZDM1MzMzODM3MmQzMTMxNjU2NjJkNjI2NTM5MzYyZDM5MzgzMDMzMzk2MjMwMzE2NDYzNjM*****
   */
  nextToken?: string;
  /**
   * @remarks
   * The sort order. Default value: asc.
   * 
   * @example
   * asc
   */
  order?: string;
  /**
   * @remarks
   * The name of the project. For more information about how to obtain the project name, see [Create a project](https://help.aliyun.com/document_detail/478153.html).
   * 
   * This parameter is required.
   * 
   * @example
   * test-project
   */
  projectName?: string;
  /**
   * @remarks
   * The field used for sorting. By default, this parameter is left empty, which indicates that the results are sorted by cluster ID.
   * 
   * @example
   * ImageCount
   */
  sort?: string;
  /**
   * @remarks
   * The time range during which the face clusters were updated.
   */
  updateTimeRangeShrink?: string;
  /**
   * @remarks
   * Specifies whether to return the total number of face clusters that meet the current query conditions. Default value: false, which indicates that the total number of clusters is not returned.
   * 
   * @example
   * false
   */
  withTotalCount?: boolean;
  static names(): { [key: string]: string } {
    return {
      createTimeRangeShrink: 'CreateTimeRange',
      customLabels: 'CustomLabels',
      datasetName: 'DatasetName',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      order: 'Order',
      projectName: 'ProjectName',
      sort: 'Sort',
      updateTimeRangeShrink: 'UpdateTimeRange',
      withTotalCount: 'WithTotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTimeRangeShrink: 'string',
      customLabels: 'string',
      datasetName: 'string',
      maxResults: 'number',
      nextToken: 'string',
      order: 'string',
      projectName: 'string',
      sort: 'string',
      updateTimeRangeShrink: 'string',
      withTotalCount: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

