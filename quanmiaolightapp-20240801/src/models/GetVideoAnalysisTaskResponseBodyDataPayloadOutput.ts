// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoAnalysisResult } from "./GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoAnalysisResult";
import { GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoCaptionResult } from "./GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoCaptionResult";
import { GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoGenerateResult } from "./GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoGenerateResult";
import { GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoGenerateResults } from "./GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoGenerateResults";
import { GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoMindMappingGenerateResult } from "./GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoMindMappingGenerateResult";
import { GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoTitleGenerateResult } from "./GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoTitleGenerateResult";


export class GetVideoAnalysisTaskResponseBodyDataPayloadOutput extends $dara.Model {
  resultJsonFileUrl?: string;
  videoAnalysisResult?: GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoAnalysisResult;
  videoCaptionResult?: GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoCaptionResult;
  videoGenerateResult?: GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoGenerateResult;
  videoGenerateResults?: GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoGenerateResults[];
  videoMindMappingGenerateResult?: GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoMindMappingGenerateResult;
  videoTitleGenerateResult?: GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoTitleGenerateResult;
  static names(): { [key: string]: string } {
    return {
      resultJsonFileUrl: 'resultJsonFileUrl',
      videoAnalysisResult: 'videoAnalysisResult',
      videoCaptionResult: 'videoCaptionResult',
      videoGenerateResult: 'videoGenerateResult',
      videoGenerateResults: 'videoGenerateResults',
      videoMindMappingGenerateResult: 'videoMindMappingGenerateResult',
      videoTitleGenerateResult: 'videoTitleGenerateResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resultJsonFileUrl: 'string',
      videoAnalysisResult: GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoAnalysisResult,
      videoCaptionResult: GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoCaptionResult,
      videoGenerateResult: GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoGenerateResult,
      videoGenerateResults: { 'type': 'array', 'itemType': GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoGenerateResults },
      videoMindMappingGenerateResult: GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoMindMappingGenerateResult,
      videoTitleGenerateResult: GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoTitleGenerateResult,
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
    if(this.videoTitleGenerateResult && typeof (this.videoTitleGenerateResult as any).validate === 'function') {
      (this.videoTitleGenerateResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

