// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


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
  /**
   * @remarks
   * This parameter is required.
   */
  sourceVideos?: AsyncUploadVideoRequestSourceVideos[];
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
      sourceVideos: 'SourceVideos',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anlysisPrompt: 'string',
      sourceVideos: { 'type': 'array', 'itemType': AsyncUploadVideoRequestSourceVideos },
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.sourceVideos)) {
      $dara.Model.validateArray(this.sourceVideos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

