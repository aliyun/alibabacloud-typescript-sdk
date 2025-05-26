// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TimeRange } from "./TimeRange";


export class QueryFigureClustersRequest extends $dara.Model {
  /**
   * @remarks
   * The time range within which the face group was created.
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
   * The name of the dataset. You can obtain the name of the dataset from the response of the [CreateDataset](https://help.aliyun.com/document_detail/478160.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * test-dataset
   */
  datasetName?: string;
  /**
   * @remarks
   * The maximum number of entries to return. Valid values: 0 to 100. Default value: 100.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of NextToken.
   * 
   * @example
   * 10
   */
  nextToken?: string;
  /**
   * @remarks
   * The sort order. Default value: asc.
   * 
   * Valid values:
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
   * The sort field. If you leave this parameter empty, the group ID is used as the sort field.
   * 
   * Valid values:
   * 
   * *   ImageCount: the number of images.
   * *   VideoCount: the number of videos.
   * *   ProjectName: the name of the project.
   * *   DatasetName: the name of the dataset.
   * *   CreateTime: the point in time when the group is created.
   * *   UpdateTime: the most recent point in time when the group is updated.
   * *   Gender: the gender.
   * *   FaceCount: the number of faces.
   * *   GroupName: the name of the group.
   * 
   * @example
   * ImageCount
   */
  sort?: string;
  /**
   * @remarks
   * The time range within which the face group was last updated.
   */
  updateTimeRange?: TimeRange;
  /**
   * @remarks
   * Specifies whether to return the total number of face groups that match the current query conditions. Default value: false.
   * 
   * @example
   * false
   */
  withTotalCount?: boolean;
  static names(): { [key: string]: string } {
    return {
      createTimeRange: 'CreateTimeRange',
      customLabels: 'CustomLabels',
      datasetName: 'DatasetName',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      order: 'Order',
      projectName: 'ProjectName',
      sort: 'Sort',
      updateTimeRange: 'UpdateTimeRange',
      withTotalCount: 'WithTotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTimeRange: TimeRange,
      customLabels: 'string',
      datasetName: 'string',
      maxResults: 'number',
      nextToken: 'string',
      order: 'string',
      projectName: 'string',
      sort: 'string',
      updateTimeRange: TimeRange,
      withTotalCount: 'boolean',
    };
  }

  validate() {
    if(this.createTimeRange && typeof (this.createTimeRange as any).validate === 'function') {
      (this.createTimeRange as any).validate();
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

