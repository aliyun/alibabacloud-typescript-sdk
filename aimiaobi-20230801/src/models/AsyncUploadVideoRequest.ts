// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AsyncUploadVideoRequestReferenceVideo extends $dara.Model {
  videoExtraInfo?: string;
  videoName?: string;
  videoUrl?: string;
  static names(): { [key: string]: string } {
    return {
      videoExtraInfo: 'VideoExtraInfo',
      videoName: 'VideoName',
      videoUrl: 'VideoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoExtraInfo: 'string',
      videoName: 'string',
      videoUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AsyncUploadVideoRequestSourceVideos extends $dara.Model {
  videoExtraInfo?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123.mp4
   */
  videoName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  videoUrl?: string;
  static names(): { [key: string]: string } {
    return {
      videoExtraInfo: 'VideoExtraInfo',
      videoName: 'VideoName',
      videoUrl: 'VideoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoExtraInfo: 'string',
      videoName: 'string',
      videoUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AsyncUploadVideoRequest extends $dara.Model {
  anlysisPrompt?: string;
  referenceVideo?: AsyncUploadVideoRequestReferenceVideo;
  /**
   * @remarks
   * This parameter is required.
   */
  sourceVideos?: AsyncUploadVideoRequestSourceVideos[];
  splitInterval?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-xxxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      anlysisPrompt: 'AnlysisPrompt',
      referenceVideo: 'ReferenceVideo',
      sourceVideos: 'SourceVideos',
      splitInterval: 'SplitInterval',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anlysisPrompt: 'string',
      referenceVideo: AsyncUploadVideoRequestReferenceVideo,
      sourceVideos: { 'type': 'array', 'itemType': AsyncUploadVideoRequestSourceVideos },
      splitInterval: 'number',
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.referenceVideo && typeof (this.referenceVideo as any).validate === 'function') {
      (this.referenceVideo as any).validate();
    }
    if(Array.isArray(this.sourceVideos)) {
      $dara.Model.validateArray(this.sourceVideos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

