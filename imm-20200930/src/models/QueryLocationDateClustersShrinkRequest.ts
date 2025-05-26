// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryLocationDateClustersShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The address information.
   */
  addressShrink?: string;
  /**
   * @remarks
   * The time range during which the spatiotemporal clusters were generated.
   */
  createTimeRangeShrink?: string;
  /**
   * @remarks
   * The custom labels, which can be used as query conditions.
   * 
   * @example
   * key=value
   */
  customLabels?: string;
  /**
   * @remarks
   * The name of the dataset. For more information, see [Create a dataset](https://help.aliyun.com/document_detail/478160.html).
   * 
   * This parameter is required.
   * 
   * @example
   * test-dataset
   */
  datasetName?: string;
  /**
   * @remarks
   * The time range during which the latest photo in a cluster was taken.
   */
  locationDateClusterEndTimeRangeShrink?: string;
  /**
   * @remarks
   * The administrative level of the spatiotemporal clustering groups to be queried.
   */
  locationDateClusterLevelsShrink?: string;
  /**
   * @remarks
   * The time range during which the earliest photo in a cluster was taken.
   */
  locationDateClusterStartTimeRangeShrink?: string;
  /**
   * @remarks
   * The number of entries per page. Valid values: [1,100]. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token.
   * 
   * @example
   * MzQNjmY2MzYxNhNjk2ZNjEu****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the group that you want to query. Specify this parameter if you want to obtain the information about a specific spatiotemporal clustering group. Otherwise, leave this parameter empty and use other parameters to query the groups that meet the matching conditions.
   * 
   * @example
   * location-date-cluster-71dd4f32-9597-4085-a2ab-3a7b0fd0aff9
   */
  objectId?: string;
  /**
   * @remarks
   * The sorting order.
   * 
   * Default value: asc. Valid values:
   * 
   * *   asc: ascending order.
   * *   desc: descending order.
   * 
   * @example
   * asc
   */
  order?: string;
  /**
   * @remarks
   * The name of the project. For more information, see [CreateProject](https://help.aliyun.com/document_detail/478153.html).
   * 
   * This parameter is required.
   * 
   * @example
   * test-project
   */
  projectName?: string;
  /**
   * @remarks
   * The condition by which the results are sorted.
   * 
   * Valid values:
   * 
   * *   LocationDateClusterEndTime: by the end time of the spatiotemporal clustering groups.
   * *   CreateTime: by the creation time of the spatiotemporal clustering groups.
   * *   UpdateTime: by the update time of the spatiotemporal clustering groups.
   * *   LocationDateClusterStartTime: by the start time of the spatiotemporal clustering groups. This is the default value.
   * 
   * @example
   * LocationDateClusterStartTime
   */
  sort?: string;
  /**
   * @remarks
   * The title of spatiotemporal clustering. Fuzzy matching is performed.
   */
  title?: string;
  /**
   * @remarks
   * The time range during which the spatiotemporal clusters were updated.
   */
  updateTimeRangeShrink?: string;
  static names(): { [key: string]: string } {
    return {
      addressShrink: 'Address',
      createTimeRangeShrink: 'CreateTimeRange',
      customLabels: 'CustomLabels',
      datasetName: 'DatasetName',
      locationDateClusterEndTimeRangeShrink: 'LocationDateClusterEndTimeRange',
      locationDateClusterLevelsShrink: 'LocationDateClusterLevels',
      locationDateClusterStartTimeRangeShrink: 'LocationDateClusterStartTimeRange',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      objectId: 'ObjectId',
      order: 'Order',
      projectName: 'ProjectName',
      sort: 'Sort',
      title: 'Title',
      updateTimeRangeShrink: 'UpdateTimeRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressShrink: 'string',
      createTimeRangeShrink: 'string',
      customLabels: 'string',
      datasetName: 'string',
      locationDateClusterEndTimeRangeShrink: 'string',
      locationDateClusterLevelsShrink: 'string',
      locationDateClusterStartTimeRangeShrink: 'string',
      maxResults: 'number',
      nextToken: 'string',
      objectId: 'string',
      order: 'string',
      projectName: 'string',
      sort: 'string',
      title: 'string',
      updateTimeRangeShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

