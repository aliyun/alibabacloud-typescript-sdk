// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TimeRange } from "./TimeRange";


export class QueryStoriesRequest extends $dara.Model {
  /**
   * @remarks
   * The time range in which stories were created.
   */
  createTimeRange?: TimeRange;
  /**
   * @remarks
   * The custom labels in key-value pairs.
   * 
   * @example
   * key=value
   */
  customLabels?: string;
  /**
   * @remarks
   * The name of the dataset.[](~~478160~~)
   * 
   * This parameter is required.
   * 
   * @example
   * test-dataset
   */
  datasetName?: string;
  /**
   * @remarks
   * The IDs of the face clusters.
   */
  figureClusterIds?: string[];
  /**
   * @remarks
   * The maximum number of entries to return. Valid values: 1 to 100. Default value: 100.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. If you do not specify this token in the next request, results are returned from the beginning.
   * 
   * @example
   * MTIzNDU2Nzg6aW1tdGVzdDpleGFtcGxlYnVja2V0OmRhdGFzZXQwMDE6b3NzOi8vZXhhbXBsZWJ1Y2tldC9zYW1wbGVvYmplY3QxLmpw****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the story.
   * 
   * @example
   * id1
   */
  objectId?: string;
  /**
   * @remarks
   * The sort order. Valid values:
   * 
   * *   asc: in ascending order.
   * *   desc: in descending order.
   * 
   * @example
   * asc
   */
  order?: string;
  /**
   * @remarks
   * The name of the project.[](~~478153~~)
   * 
   * This parameter is required.
   * 
   * @example
   * test-project
   */
  projectName?: string;
  /**
   * @remarks
   * The sort field. Valid values:
   * 
   * *   CreateTime: sorts by story creation time.
   * *   StoryName: sorts by story name.
   * *   StoryStartTime: sorts by story start time.
   * *   StoryEndTime: sorts by story end time.
   * 
   * @example
   * CreateTime
   */
  sort?: string;
  /**
   * @remarks
   * The time range for the creation time of the last photo or video in the story.
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
   * The time range for the creation time of the first photo or video in the story.
   */
  storyStartTimeRange?: TimeRange;
  /**
   * @remarks
   * The subtype of the story. For a list of valid values, see [Story types and subtypes](https://help.aliyun.com/document_detail/2743998.html).
   * 
   * @example
   * SeasonHighlights
   */
  storySubType?: string;
  /**
   * @remarks
   * The type of the story. For a list of valid values, see [Story types and subtypes](https://help.aliyun.com/document_detail/2743998.html).
   * 
   * @example
   * TimeMemory
   */
  storyType?: string;
  /**
   * @remarks
   * Specifies whether to return empty stories. Valid values:
   * 
   * *   true (The default value)
   * *   false
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

