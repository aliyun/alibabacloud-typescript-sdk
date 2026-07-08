// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AsyncEditTimelineRequestTimelinesClips extends $dara.Model {
  /**
   * @remarks
   * Clip ID
   * 
   * @example
   * 123jjdax
   * 新增可为空
   */
  clipId?: string;
  /**
   * @remarks
   * Segmented voice-over script
   * 
   * @example
   * 口播文案分段
   * 不可为空
   */
  contentInner?: string;
  /**
   * @remarks
   * Start time, in seconds. Deprecated.
   * 
   * @example
   * 0
   * 不可为空
   */
  in?: number;
  /**
   * @remarks
   * Clip start time, in milliseconds
   * 
   * @example
   * 0.45
   */
  inEx?: number;
  /**
   * @remarks
   * End time, in seconds. Deprecated.
   * 
   * @example
   * 5
   * 不可为空
   */
  out?: number;
  /**
   * @remarks
   * Clip end time, in milliseconds
   * 
   * @example
   * 3.66
   */
  outEx?: number;
  /**
   * @remarks
   * Video ID
   * 
   * @example
   * 7036227ae3ab71efbb4a6733a68f0102
   * 不可为空
   */
  videoId?: string;
  /**
   * @remarks
   * Video name
   * 
   * @example
   * 123.mp4
   * 不可为空
   */
  videoName?: string;
  static names(): { [key: string]: string } {
    return {
      clipId: 'ClipId',
      contentInner: 'ContentInner',
      in: 'In',
      inEx: 'InEx',
      out: 'Out',
      outEx: 'OutEx',
      videoId: 'VideoId',
      videoName: 'VideoName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clipId: 'string',
      contentInner: 'string',
      in: 'number',
      inEx: 'number',
      out: 'number',
      outEx: 'number',
      videoId: 'string',
      videoName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AsyncEditTimelineRequestTimelines extends $dara.Model {
  /**
   * @remarks
   * Array of video clips
   * 
   * This parameter is required.
   */
  clips?: AsyncEditTimelineRequestTimelinesClips[];
  /**
   * @remarks
   * Timeline ID
   * 
   * @example
   * sdfjhks
   * 新增可为空
   */
  timelineId?: string;
  static names(): { [key: string]: string } {
    return {
      clips: 'Clips',
      timelineId: 'TimelineId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clips: { 'type': 'array', 'itemType': AsyncEditTimelineRequestTimelinesClips },
      timelineId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.clips)) {
      $dara.Model.validateArray(this.clips);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AsyncEditTimelineRequest extends $dara.Model {
  /**
   * @remarks
   * Enable automatic clip adjustment
   * 
   * @example
   * false
   */
  autoClips?: boolean;
  /**
   * @remarks
   * Unique identifier of the task
   * 
   * This parameter is required.
   * 
   * @example
   * 0dbf1055f8a2475d99904c3b76a0ffba
   */
  taskId?: string;
  /**
   * @remarks
   * Array structure of video editing timelines
   * 
   * This parameter is required.
   */
  timelines?: AsyncEditTimelineRequestTimelines[];
  /**
   * @remarks
   * [Model Studio workspace ID](https://help.aliyun.com/document_detail/2782167.html)
   * 
   * This parameter is required.
   * 
   * @example
   * llm-az2gglkjauwnnhpq
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      autoClips: 'AutoClips',
      taskId: 'TaskId',
      timelines: 'Timelines',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoClips: 'boolean',
      taskId: 'string',
      timelines: { 'type': 'array', 'itemType': AsyncEditTimelineRequestTimelines },
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.timelines)) {
      $dara.Model.validateArray(this.timelines);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

