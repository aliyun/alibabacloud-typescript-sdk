// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobBarrageCensorResult } from "./QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobBarrageCensorResult";
import { QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobCoverImageCensorResults } from "./QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobCoverImageCensorResults";
import { QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobDescCensorResult } from "./QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobDescCensorResult";
import { QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobInput } from "./QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobInput";
import { QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobTitleCensorResult } from "./QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobTitleCensorResult";
import { QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobVensorCensorResult } from "./QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobVensorCensorResult";
import { QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobVideoCensorConfig } from "./QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobVideoCensorConfig";


export class QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJob extends $dara.Model {
  /**
   * @remarks
   * The moderation results of live comments.
   */
  barrageCensorResult?: QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobBarrageCensorResult;
  /**
   * @remarks
   * The error code returned if the job failed. This parameter is not returned if the job is successful.
   * 
   * @example
   * InvalidParameter.ResourceNotFound
   */
  code?: string;
  /**
   * @remarks
   * The moderation results of thumbnails.
   */
  coverImageCensorResults?: QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobCoverImageCensorResults;
  /**
   * @remarks
   * The time when the content moderation job was created.
   * 
   * @example
   * 2021-11-04T07:25:48Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The moderation results of descriptions.
   */
  descCensorResult?: QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobDescCensorResult;
  /**
   * @remarks
   * The time when the content moderation job was complete.
   * 
   * @example
   * 2021-11-04T07:25:50Z
   */
  finishTime?: string;
  /**
   * @remarks
   * The information about the job input.
   */
  input?: QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobInput;
  /**
   * @remarks
   * The ID of the content moderation job.
   * 
   * @example
   * f8f166eea7a44e9bb0a4aecf9543
   */
  jobId?: string;
  /**
   * @remarks
   * The error message returned if the job failed. This parameter is not returned if the job is successful.
   * 
   * @example
   * The resource operated cannot be found
   */
  message?: string;
  /**
   * @remarks
   * The ID of the MPS queue to which the job was submitted.
   * 
   * @example
   * c5b30b7c0d0e4a0abde1d5f9e751****
   */
  pipelineId?: string;
  /**
   * @remarks
   * The job state.
   * 
   * @example
   * Success
   */
  state?: string;
  /**
   * @remarks
   * The recommended subsequent operation. Valid values:
   * 
   * *   **pass**: The content passes the moderation.
   * *   **review**: The content needs to be manually reviewed.
   * *   **block**: The content needs to be blocked.
   * 
   * @example
   * pass
   */
  suggestion?: string;
  /**
   * @remarks
   * The moderation results of titles.
   */
  titleCensorResult?: QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobTitleCensorResult;
  /**
   * @remarks
   * The user-defined data.
   * 
   * @example
   * example userdata ****
   */
  userData?: string;
  /**
   * @remarks
   * The moderation results of videos.
   */
  vensorCensorResult?: QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobVensorCensorResult;
  /**
   * @remarks
   * The video moderation configurations.
   */
  videoCensorConfig?: QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobVideoCensorConfig;
  static names(): { [key: string]: string } {
    return {
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
      barrageCensorResult: QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobBarrageCensorResult,
      code: 'string',
      coverImageCensorResults: QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobCoverImageCensorResults,
      creationTime: 'string',
      descCensorResult: QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobDescCensorResult,
      finishTime: 'string',
      input: QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobInput,
      jobId: 'string',
      message: 'string',
      pipelineId: 'string',
      state: 'string',
      suggestion: 'string',
      titleCensorResult: QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobTitleCensorResult,
      userData: 'string',
      vensorCensorResult: QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobVensorCensorResult,
      videoCensorConfig: QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobVideoCensorConfig,
    };
  }

  validate() {
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

