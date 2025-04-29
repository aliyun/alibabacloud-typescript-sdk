// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunVideoAnalysisResponseBodyPayloadOutputVideoAnalysisResult } from "./RunVideoAnalysisResponseBodyPayloadOutputVideoAnalysisResult";
import { RunVideoAnalysisResponseBodyPayloadOutputVideoCaptionResult } from "./RunVideoAnalysisResponseBodyPayloadOutputVideoCaptionResult";
import { RunVideoAnalysisResponseBodyPayloadOutputVideoGenerateResult } from "./RunVideoAnalysisResponseBodyPayloadOutputVideoGenerateResult";
import { RunVideoAnalysisResponseBodyPayloadOutputVideoGenerateResults } from "./RunVideoAnalysisResponseBodyPayloadOutputVideoGenerateResults";
import { RunVideoAnalysisResponseBodyPayloadOutputVideoMindMappingGenerateResult } from "./RunVideoAnalysisResponseBodyPayloadOutputVideoMindMappingGenerateResult";
import { RunVideoAnalysisResponseBodyPayloadOutputVideoShotSnapshotResult } from "./RunVideoAnalysisResponseBodyPayloadOutputVideoShotSnapshotResult";
import { RunVideoAnalysisResponseBodyPayloadOutputVideoTitleGenerateResult } from "./RunVideoAnalysisResponseBodyPayloadOutputVideoTitleGenerateResult";


export class RunVideoAnalysisResponseBodyPayloadOutput extends $dara.Model {
  /**
   * @example
   * http://
   */
  resultJsonFileUrl?: string;
  videoAnalysisResult?: RunVideoAnalysisResponseBodyPayloadOutputVideoAnalysisResult;
  videoCaptionResult?: RunVideoAnalysisResponseBodyPayloadOutputVideoCaptionResult;
  videoGenerateResult?: RunVideoAnalysisResponseBodyPayloadOutputVideoGenerateResult;
  videoGenerateResults?: RunVideoAnalysisResponseBodyPayloadOutputVideoGenerateResults[];
  videoMindMappingGenerateResult?: RunVideoAnalysisResponseBodyPayloadOutputVideoMindMappingGenerateResult;
  videoShotSnapshotResult?: RunVideoAnalysisResponseBodyPayloadOutputVideoShotSnapshotResult;
  videoTitleGenerateResult?: RunVideoAnalysisResponseBodyPayloadOutputVideoTitleGenerateResult;
  static names(): { [key: string]: string } {
    return {
      resultJsonFileUrl: 'resultJsonFileUrl',
      videoAnalysisResult: 'videoAnalysisResult',
      videoCaptionResult: 'videoCaptionResult',
      videoGenerateResult: 'videoGenerateResult',
      videoGenerateResults: 'videoGenerateResults',
      videoMindMappingGenerateResult: 'videoMindMappingGenerateResult',
      videoShotSnapshotResult: 'videoShotSnapshotResult',
      videoTitleGenerateResult: 'videoTitleGenerateResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resultJsonFileUrl: 'string',
      videoAnalysisResult: RunVideoAnalysisResponseBodyPayloadOutputVideoAnalysisResult,
      videoCaptionResult: RunVideoAnalysisResponseBodyPayloadOutputVideoCaptionResult,
      videoGenerateResult: RunVideoAnalysisResponseBodyPayloadOutputVideoGenerateResult,
      videoGenerateResults: { 'type': 'array', 'itemType': RunVideoAnalysisResponseBodyPayloadOutputVideoGenerateResults },
      videoMindMappingGenerateResult: RunVideoAnalysisResponseBodyPayloadOutputVideoMindMappingGenerateResult,
      videoShotSnapshotResult: RunVideoAnalysisResponseBodyPayloadOutputVideoShotSnapshotResult,
      videoTitleGenerateResult: RunVideoAnalysisResponseBodyPayloadOutputVideoTitleGenerateResult,
    };
  }

  validate() {
    if(this.videoAnalysisResult && typeof (this.videoAnalysisResult as any).validate === 'function') {
      (this.videoAnalysisResult as any).validate();
    }
    if(this.videoCaptionResult && typeof (this.videoCaptionResult as any).validate === 'function') {
      (this.videoCaptionResult as any).validate();
    }
    if(this.videoGenerateResult && typeof (this.videoGenerateResult as any).validate === 'function') {
      (this.videoGenerateResult as any).validate();
    }
    if(Array.isArray(this.videoGenerateResults)) {
      $dara.Model.validateArray(this.videoGenerateResults);
    }
    if(this.videoMindMappingGenerateResult && typeof (this.videoMindMappingGenerateResult as any).validate === 'function') {
      (this.videoMindMappingGenerateResult as any).validate();
    }
    if(this.videoShotSnapshotResult && typeof (this.videoShotSnapshotResult as any).validate === 'function') {
      (this.videoShotSnapshotResult as any).validate();
    }
    if(this.videoTitleGenerateResult && typeof (this.videoTitleGenerateResult as any).validate === 'function') {
      (this.videoTitleGenerateResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

