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
   * The custom labels.
   * 
   * @example
   * key=value
   */
  customLabels?: string;
  /**
   * @remarks
   * The name of the dataset. For information about how to create a dataset, see [CreateDataset](https://help.aliyun.com/document_detail/478160.html).
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
   * The container for the administrative division level of the spatiotemporal clusters to be queried.
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
   * The ID of the cluster that you want to query. Specify this parameter if you want to query a specific spatiotemporal cluster. Otherwise, leave this parameter empty to query spatiotemporal clusters that meet the specified conditions.
   * 
   * @example
   * location-date-cluster-71dd4f32-9597-4085-a2ab-3a7b0fd0aff9
   */
  objectId?: string;
  /**
   * @remarks
   * The order that you use to sort the query results.
   * 
   * Valid values:
   * 
   * *   asc: ascending order. This is the default value.
   * *   desc: descending order.
   * 
   * @example
   * asc
   */
  order?: string;
  /**
   * @remarks
   * The name of the project. You can obtain the name of the project from the response of the [CreateProject](https://help.aliyun.com/document_detail/478153.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * test-project
   */
  projectName?: string;
  /**
   * @remarks
   * The field that you use to sort the query results.
   * 
   * Valid values:
   * 
   * *   LocationDateClusterEndTime: by the time at which the latest photo in a cluster was taken.
   * *   CreateTime: by the creation time of a spatiotemporal cluster.
   * *   UpdateTime: by the update time of a spatiotemporal cluster.
   * *   LocationDateClusterStartTime: by the time at which the earliest photo in a cluster was taken. This is the default value.
   * 
   * @example
   * LocationDateClusterStartTime
   */
  sort?: string;
  /**
   * @remarks
   * The characters that are included in the titles of spatiotemporal clusters to be queried. Matches are found by using fuzzy matching.
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

