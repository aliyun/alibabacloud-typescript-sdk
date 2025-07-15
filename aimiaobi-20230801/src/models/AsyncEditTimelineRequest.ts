// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AsyncEditTimelineRequestTimelinesClips extends $dara.Model {
  clipId?: string;
  contentInner?: string;
  in?: number;
  out?: number;
  videoId?: string;
  videoName?: string;
  static names(): { [key: string]: string } {
    return {
      clipId: 'ClipId',
      contentInner: 'ContentInner',
      in: 'In',
      out: 'Out',
      videoId: 'VideoId',
      videoName: 'VideoName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clipId: 'string',
      contentInner: 'string',
      in: 'number',
      out: 'number',
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
   * This parameter is required.
   */
  clips?: AsyncEditTimelineRequestTimelinesClips[];
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
  autoClips?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0dbf1055f8a2475d99904c3b76a0ffba
   */
  taskId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  timelines?: AsyncEditTimelineRequestTimelines[];
  /**
   * @remarks
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

