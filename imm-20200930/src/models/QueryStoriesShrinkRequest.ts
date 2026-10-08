// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryStoriesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The creation time range of the story.
   */
  createTimeRangeShrink?: string;
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
  figureClusterIdsShrink?: string;
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
  storyEndTimeRangeShrink?: string;
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
  storyStartTimeRangeShrink?: string;
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
      createTimeRangeShrink: 'CreateTimeRange',
      customLabels: 'CustomLabels',
      datasetName: 'DatasetName',
      figureClusterIdsShrink: 'FigureClusterIds',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      objectId: 'ObjectId',
      order: 'Order',
      projectName: 'ProjectName',
      sort: 'Sort',
      storyEndTimeRangeShrink: 'StoryEndTimeRange',
      storyName: 'StoryName',
      storyStartTimeRangeShrink: 'StoryStartTimeRange',
      storySubType: 'StorySubType',
      storyType: 'StoryType',
      withEmptyStories: 'WithEmptyStories',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTimeRangeShrink: 'string',
      customLabels: 'string',
      datasetName: 'string',
      figureClusterIdsShrink: 'string',
      maxResults: 'number',
      nextToken: 'string',
      objectId: 'string',
      order: 'string',
      projectName: 'string',
      sort: 'string',
      storyEndTimeRangeShrink: 'string',
      storyName: 'string',
      storyStartTimeRangeShrink: 'string',
      storySubType: 'string',
      storyType: 'string',
      withEmptyStories: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

