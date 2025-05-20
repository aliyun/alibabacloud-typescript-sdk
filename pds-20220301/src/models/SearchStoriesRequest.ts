// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SearchStoriesRequestCreateTimeRange } from "./SearchStoriesRequestCreateTimeRange";
import { SearchStoriesRequestStoryEndTimeRange } from "./SearchStoriesRequestStoryEndTimeRange";
import { SearchStoriesRequestStoryStartTimeRange } from "./SearchStoriesRequestStoryStartTimeRange";


export class SearchStoriesRequest extends $dara.Model {
  /**
   * @example
   * image/resize,m_fill,h_128,w_128,limit_0/format,jpg
   * 
   * @deprecated
   */
  coverImageThumbnailProcess?: string;
  /**
   * @example
   * video/snapshot,t_1000,f_jpg,w_0,h_0,m_fast,ar_auto
   * 
   * @deprecated
   */
  coverVideoThumbnailProcess?: string;
  /**
   * **if can be null:**
   * true
   */
  createTimeRange?: SearchStoriesRequestCreateTimeRange;
  /**
   * @example
   * key1=value1,key2!=value2
   * 
   * @deprecated
   */
  customLabels?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  driveId?: string;
  faceGroupIds?: string[];
  /**
   * @example
   * 100
   */
  limit?: number;
  /**
   * @example
   * NWQ1Yjk4YmI1ZDODBhNDQ2Nzhl***
   */
  marker?: string;
  /**
   * @example
   * desc
   */
  order?: string;
  /**
   * @example
   * CreateTime
   */
  sort?: string;
  /**
   * **if can be null:**
   * true
   */
  storyEndTimeRange?: SearchStoriesRequestStoryEndTimeRange;
  /**
   * @example
   * 9132e0d8-fe92-4e56-86c3-f5f112308003
   */
  storyId?: string;
  storyName?: string;
  /**
   * **if can be null:**
   * true
   */
  storyStartTimeRange?: SearchStoriesRequestStoryStartTimeRange;
  /**
   * @example
   * PeopleMemory
   */
  storyType?: string;
  /**
   * @example
   * 900
   * 
   * @deprecated
   */
  urlExpireSec?: number;
  /**
   * @example
   * false
   * 
   * **if can be null:**
   * true
   */
  withEmptyStories?: boolean;
  static names(): { [key: string]: string } {
    return {
      coverImageThumbnailProcess: 'cover_image_thumbnail_process',
      coverVideoThumbnailProcess: 'cover_video_thumbnail_process',
      createTimeRange: 'create_time_range',
      customLabels: 'custom_labels',
      driveId: 'drive_id',
      faceGroupIds: 'face_group_ids',
      limit: 'limit',
      marker: 'marker',
      order: 'order',
      sort: 'sort',
      storyEndTimeRange: 'story_end_time_range',
      storyId: 'story_id',
      storyName: 'story_name',
      storyStartTimeRange: 'story_start_time_range',
      storyType: 'story_type',
      urlExpireSec: 'url_expire_sec',
      withEmptyStories: 'with_empty_stories',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coverImageThumbnailProcess: 'string',
      coverVideoThumbnailProcess: 'string',
      createTimeRange: SearchStoriesRequestCreateTimeRange,
      customLabels: 'string',
      driveId: 'string',
      faceGroupIds: { 'type': 'array', 'itemType': 'string' },
      limit: 'number',
      marker: 'string',
      order: 'string',
      sort: 'string',
      storyEndTimeRange: SearchStoriesRequestStoryEndTimeRange,
      storyId: 'string',
      storyName: 'string',
      storyStartTimeRange: SearchStoriesRequestStoryStartTimeRange,
      storyType: 'string',
      urlExpireSec: 'number',
      withEmptyStories: 'boolean',
    };
  }

  validate() {
    if(this.createTimeRange && typeof (this.createTimeRange as any).validate === 'function') {
      (this.createTimeRange as any).validate();
    }
    if(Array.isArray(this.faceGroupIds)) {
      $dara.Model.validateArray(this.faceGroupIds);
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

