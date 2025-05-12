// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailAudioCensorResult } from "./QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailAudioCensorResult";
import { QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailBarrageCensorResult } from "./QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailBarrageCensorResult";
import { QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailCoverImageCensorResults } from "./QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailCoverImageCensorResults";
import { QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailDescCensorResult } from "./QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailDescCensorResult";
import { QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailInput } from "./QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailInput";
import { QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailTitleCensorResult } from "./QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailTitleCensorResult";
import { QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailVensorCensorResult } from "./QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailVensorCensorResult";
import { QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailVideoCensorConfig } from "./QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailVideoCensorConfig";


export class QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetail extends $dara.Model {
  audioCensorResult?: QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailAudioCensorResult;
  /**
   * @remarks
   * The moderation result of live comments.
   */
  barrageCensorResult?: QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailBarrageCensorResult;
  /**
   * @remarks
   * The error code returned if the job fails. This parameter is not returned if the job is successful.
   * 
   * @example
   * InvalidParameter.ResourceNotFound
   */
  code?: string;
  /**
   * @remarks
   * The moderation results of thumbnails.
   */
  coverImageCensorResults?: QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailCoverImageCensorResults;
  /**
   * @remarks
   * The time when the job was created.
   * 
   * @example
   * 2018-09-13T16:32:24Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The moderation result of the description.
   */
  descCensorResult?: QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailDescCensorResult;
  /**
   * @remarks
   * The time when the job was complete.
   * 
   * @example
   * 2018-09-21
   */
  finishTime?: string;
  /**
   * @remarks
   * The information about the job input.
   */
  input?: QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailInput;
  /**
   * @remarks
   * The ID of the content moderation job.
   * 
   * @example
   * f8f166eea7a44e9bb0a4aecf9543****
   */
  jobId?: string;
  /**
   * @remarks
   * The error message returned if the job fails. This parameter is not returned if the job is successful.
   * 
   * @example
   * The resource operated cannot be found
   */
  message?: string;
  /**
   * @remarks
   * The ID of the ApsaraVideo Media Processing (MPS) queue to which the content moderation job is submitted.
   * 
   * @example
   * c5b30b7c0d0e4a0abde1d5f9e751****
   */
  pipelineId?: string;
  /**
   * @remarks
   * The status of the job. Valid values:
   * 
   * @example
   * Success
   */
  state?: string;
  /**
   * @remarks
   * The overall result of the job. Valid values:
   * 
   * *   **pass**: The content passes the moderation.
   * *   **review**: The content needs to be manually reviewed again.
   * *   **block**: The content needs to be blocked.
   * 
   * If the moderation result of one type of the moderated content is review, the overall result is review. If the moderation result of one type of the moderated content is block, the overall result is block.
   * 
   * @example
   * block
   */
  suggestion?: string;
  /**
   * @remarks
   * The moderation result of the title.
   */
  titleCensorResult?: QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailTitleCensorResult;
  /**
   * @remarks
   * The custom data.
   * 
   * @example
   * example userdata ****
   */
  userData?: string;
  /**
   * @remarks
   * The moderation results of the video.
   */
  vensorCensorResult?: QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailVensorCensorResult;
  /**
   * @remarks
   * The video moderation configurations.
   */
  videoCensorConfig?: QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailVideoCensorConfig;
  static names(): { [key: string]: string } {
    return {
      audioCensorResult: 'AudioCensorResult',
      barrageCensorResult: 'BarrageCensorResult',
      code: 'Code',
      coverImageCensorResults: 'CoverImageCensorResults',
      creationTime: 'CreationTime',
      descCensorResult: 'DescCensorResult',
      finishTime: 'FinishTime',
      input: 'Input',
      jobId: 'JobId',
      message: 'Message',
      pipelineId: 'PipelineId',
      state: 'State',
      suggestion: 'Suggestion',
      titleCensorResult: 'TitleCensorResult',
      userData: 'UserData',
      vensorCensorResult: 'VensorCensorResult',
      videoCensorConfig: 'VideoCensorConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioCensorResult: QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailAudioCensorResult,
      barrageCensorResult: QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailBarrageCensorResult,
      code: 'string',
      coverImageCensorResults: QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailCoverImageCensorResults,
      creationTime: 'string',
      descCensorResult: QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailDescCensorResult,
      finishTime: 'string',
      input: QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailInput,
      jobId: 'string',
      message: 'string',
      pipelineId: 'string',
      state: 'string',
      suggestion: 'string',
      titleCensorResult: QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailTitleCensorResult,
      userData: 'string',
      vensorCensorResult: QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailVensorCensorResult,
      videoCensorConfig: QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailVideoCensorConfig,
    };
  }

  validate() {
    if(this.audioCensorResult && typeof (this.audioCensorResult as any).validate === 'function') {
      (this.audioCensorResult as any).validate();
    }
    if(this.barrageCensorResult && typeof (this.barrageCensorResult as any).validate === 'function') {
      (this.barrageCensorResult as any).validate();
    }
    if(this.coverImageCensorResults && typeof (this.coverImageCensorResults as any).validate === 'function') {
      (this.coverImageCensorResults as any).validate();
    }
    if(this.descCensorResult && typeof (this.descCensorResult as any).validate === 'function') {
      (this.descCensorResult as any).validate();
    }
    if(this.input && typeof (this.input as any).validate === 'function') {
      (this.input as any).validate();
    }
    if(this.titleCensorResult && typeof (this.titleCensorResult as any).validate === 'function') {
      (this.titleCensorResult as any).validate();
    }
    if(this.vensorCensorResult && typeof (this.vensorCensorResult as any).validate === 'function') {
      (this.vensorCensorResult as any).validate();
    }
    if(this.videoCensorConfig && typeof (this.videoCensorConfig as any).validate === 'function') {
      (this.videoCensorConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

