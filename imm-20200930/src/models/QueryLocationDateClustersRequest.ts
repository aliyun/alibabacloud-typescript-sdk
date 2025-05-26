// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Address } from "./Address";
import { TimeRange } from "./TimeRange";


export class QueryLocationDateClustersRequest extends $dara.Model {
  /**
   * @remarks
   * The address information.
   */
  address?: Address;
  /**
   * @remarks
   * The time range during which the spatiotemporal clusters were generated.
   */
  createTimeRange?: TimeRange;
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
  locationDateClusterEndTimeRange?: TimeRange;
  /**
   * @remarks
   * The administrative level of the spatiotemporal clustering groups to be queried.
   */
  locationDateClusterLevels?: string[];
  /**
   * @remarks
   * The time range during which the earliest photo in a cluster was taken.
   */
  locationDateClusterStartTimeRange?: TimeRange;
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
  updateTimeRange?: TimeRange;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      createTimeRange: 'CreateTimeRange',
      customLabels: 'CustomLabels',
      datasetName: 'DatasetName',
      locationDateClusterEndTimeRange: 'LocationDateClusterEndTimeRange',
      locationDateClusterLevels: 'LocationDateClusterLevels',
      locationDateClusterStartTimeRange: 'LocationDateClusterStartTimeRange',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      objectId: 'ObjectId',
      order: 'Order',
      projectName: 'ProjectName',
      sort: 'Sort',
      title: 'Title',
      updateTimeRange: 'UpdateTimeRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: Address,
      createTimeRange: TimeRange,
      customLabels: 'string',
      datasetName: 'string',
      locationDateClusterEndTimeRange: TimeRange,
      locationDateClusterLevels: { 'type': 'array', 'itemType': 'string' },
      locationDateClusterStartTimeRange: TimeRange,
      maxResults: 'number',
      nextToken: 'string',
      objectId: 'string',
      order: 'string',
      projectName: 'string',
      sort: 'string',
      title: 'string',
      updateTimeRange: TimeRange,
    };
  }

  validate() {
    if(this.address && typeof (this.address as any).validate === 'function') {
      (this.address as any).validate();
    }
    if(this.createTimeRange && typeof (this.createTimeRange as any).validate === 'function') {
      (this.createTimeRange as any).validate();
    }
    if(this.locationDateClusterEndTimeRange && typeof (this.locationDateClusterEndTimeRange as any).validate === 'function') {
      (this.locationDateClusterEndTimeRange as any).validate();
    }
    if(Array.isArray(this.locationDateClusterLevels)) {
      $dara.Model.validateArray(this.locationDateClusterLevels);
    }
    if(this.locationDateClusterStartTimeRange && typeof (this.locationDateClusterStartTimeRange as any).validate === 'function') {
      (this.locationDateClusterStartTimeRange as any).validate();
    }
    if(this.updateTimeRange && typeof (this.updateTimeRange as any).validate === 'function') {
      (this.updateTimeRange as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

