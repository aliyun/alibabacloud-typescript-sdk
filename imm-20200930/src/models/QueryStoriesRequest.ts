// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TimeRange } from "./TimeRange";


export class QueryStoriesRequest extends $dara.Model {
  /**
   * @remarks
   * The creation time range of the story.
   */
  createTimeRange?: TimeRange;
  /**
   * @remarks
   * The custom label key-value pairs. Only stories that match the specified label pairs are returned.
   * 
   * @example
   * key=value
   */
  customLabels?: string;
  /**
   * @remarks
   * The name of the dataset. For more information about how to obtain the name, see [Create a dataset](https://help.aliyun.com/document_detail/478160.html).
   * 
   * This parameter is required.
   * 
   * @example
   * test-dataset
   */
  datasetName?: string;
  /**
   * @remarks
   * The IDs of the figure clusters.
   */
  figureClusterIds?: string[];
  /**
   * @remarks
   * The maximum number of entries to return in a single call. Valid values: 1 to 100. Default value: 100.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. If this parameter is left empty, the query starts from the beginning. To query the next page, set this parameter to the NextToken value returned in the previous call.
   * 
   * @example
   * MTIzNDU2Nzg6aW1tdGVzdDpleGFtcGxlYnVja2V0OmRhdGFzZXQwMDE6b3NzOi8vZXhhbXBsZWJ1Y2tldC9zYW1wbGVvYmplY3QxLmpw****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the story object.
   * 
   * @example
   * id1
   */
  objectId?: string;
  /**
   * @remarks
   * The sorting order. Valid values:
   * 
   * - asc: Ascending order.
   * 
   * - desc: Descending order.
   * 
   * @example
   * asc
   */
  order?: string;
  /**
   * @remarks
   * The name of the project. For more information about how to obtain the name, see [Create a project](https://help.aliyun.com/document_detail/478153.html).
   * 
   * This parameter is required.
   * 
   * @example
   * test-project
   */
  projectName?: string;
  /**
   * @remarks
   * The field used for sorting. Valid values:
   * 
   * - CreateTime: Sorts by story creation time.
   * 
   * - StoryName: Sorts by story name.
   * 
   * - StoryStartTime: Sorts by story start time.
   * 
   * - StoryEndTime: Sorts by story end time.
   * 
   * @example
   * CreateTime
   */
  sort?: string;
  /**
   * @remarks
   * The end time range of the photos or videos in the story.
   */
  storyEndTimeRange?: TimeRange;
  /**
   * @remarks
   * The name of the story.
   * 
   * @example
   * name1
   */
  storyName?: string;
  /**
   * @remarks
   * The start time range of the photos or videos in the story.
   */
  storyStartTimeRange?: TimeRange;
  /**
   * @remarks
   * The subtype of the story. For valid values, see [Story types and subtypes](https://help.aliyun.com/document_detail/2743998.html).
   * 
   * @example
   * SeasonHighlights
   */
  storySubType?: string;
  /**
   * @remarks
   * The type of the story. For valid values, see [Story types and subtypes](https://help.aliyun.com/document_detail/2743998.html).
   * 
   * @example
   * TimeMemory
   */
  storyType?: string;
  /**
   * @remarks
   * Specifies whether to return empty stories. Valid values:
   * 
   * - true: Returns empty stories. This is the default value.
   * 
   * - false: Does not return empty stories.
   * 
   * @example
   * true
   */
  withEmptyStories?: boolean;
  static names(): { [key: string]: string } {
    return {
      createTimeRange: 'CreateTimeRange',
      customLabels: 'CustomLabels',
      datasetName: 'DatasetName',
      figureClusterIds: 'FigureClusterIds',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      objectId: 'ObjectId',
      order: 'Order',
      projectName: 'ProjectName',
      sort: 'Sort',
      storyEndTimeRange: 'StoryEndTimeRange',
      storyName: 'StoryName',
      storyStartTimeRange: 'StoryStartTimeRange',
      storySubType: 'StorySubType',
      storyType: 'StoryType',
      withEmptyStories: 'WithEmptyStories',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTimeRange: TimeRange,
      customLabels: 'string',
      datasetName: 'string',
      figureClusterIds: { 'type': 'array', 'itemType': 'string' },
      maxResults: 'number',
      nextToken: 'string',
      objectId: 'string',
      order: 'string',
      projectName: 'string',
      sort: 'string',
      storyEndTimeRange: TimeRange,
      storyName: 'string',
      storyStartTimeRange: TimeRange,
      storySubType: 'string',
      storyType: 'string',
      withEmptyStories: 'boolean',
    };
  }

  validate() {
    if(this.createTimeRange && typeof (this.createTimeRange as any).validate === 'function') {
      (this.createTimeRange as any).validate();
    }
    if(Array.isArray(this.figureClusterIds)) {
      $dara.Model.validateArray(this.figureClusterIds);
    }
    if(this.storyEndTimeRange && typeof (this.storyEndTimeRange as any).validate === 'function') {
      (this.storyEndTimeRange as any).validate();
    }
    if(this.storyStartTimeRange && typeof (this.storyStartTimeRange as any).validate === 'function') {
      (this.storyStartTimeRange as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

