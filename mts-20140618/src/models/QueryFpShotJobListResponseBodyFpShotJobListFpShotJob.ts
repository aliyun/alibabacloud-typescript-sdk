// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotConfig } from "./QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotConfig";
import { QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResult } from "./QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResult";
import { QueryFpShotJobListResponseBodyFpShotJobListFpShotJobInputFile } from "./QueryFpShotJobListResponseBodyFpShotJobListFpShotJobInputFile";


export class QueryFpShotJobListResponseBodyFpShotJobListFpShotJob extends $dara.Model {
  /**
   * @remarks
   * The error code returned if the job fails.
   * 
   * @example
   * InvalidParameter.UUIDFormatInvalid
   */
  code?: string;
  /**
   * @remarks
   * The time when the job was created.
   * 
   * @example
   * 2017-01-10T12:00:00Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The length of the input file.
   * Unit: seconds.
   * 
   * @example
   * 5
   */
  duration?: number;
  /**
   * @remarks
   * The ID of the uploaded file.
   * 
   * @example
   * ebb51ee30f0b49aba959823fa991****
   */
  fileId?: string;
  /**
   * @remarks
   * The time when the job was complete.
   * 
   * @example
   * 0
   */
  finishTime?: string;
  /**
   * @remarks
   * The configurations of the job.
   */
  fpShotConfig?: QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotConfig;
  /**
   * @remarks
   * The results of the media fingerprint analysis job.
   */
  fpShotResult?: QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResult;
  /**
   * @remarks
   * The ID of the job.
   * 
   * @example
   * 88c6ca184c0e47098a5b665e2a12****
   */
  id?: string;
  /**
   * @remarks
   * The information about the job input.
   * 
   * @example
   * {"Bucket":"oss-test","Location":"oss-cn-beijing","Object":"test.mp4"}
   */
  input?: string;
  /**
   * @remarks
   * The information about the job input.
   */
  inputFile?: QueryFpShotJobListResponseBodyFpShotJobListFpShotJobInputFile;
  /**
   * @remarks
   * The error message returned if the job fails. This parameter is not returned if the job is successful.
   * 
   * @example
   * The parameter \\"Id\\" is invalid.A uuid must:1)be comprised of chracters[a-f],numbers[0-9];2)be 32 characters long
   */
  message?: string;
  /**
   * @remarks
   * The ID of the MPS queue to which the analysis job is submitted.
   * 
   * @example
   * 88c6ca184c0e47098a5b665e2a12****
   */
  pipelineId?: string;
  /**
   * @remarks
   * The status of the job. Valid values:
   * 
   * *   **Queuing**: The job is waiting in the queue.
   * *   **Analysing**: The job is in progress.
   * *   **Success**: The job is successful.
   * *   **Fail**: The job fails.
   * 
   * @example
   * Success
   */
  state?: string;
  /**
   * @remarks
   * The custom data.
   * 
   * @example
   * testid-001
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      creationTime: 'CreationTime',
      duration: 'Duration',
      fileId: 'FileId',
      finishTime: 'FinishTime',
      fpShotConfig: 'FpShotConfig',
      fpShotResult: 'FpShotResult',
      id: 'Id',
      input: 'Input',
      inputFile: 'InputFile',
      message: 'Message',
      pipelineId: 'PipelineId',
      state: 'State',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      creationTime: 'string',
      duration: 'number',
      fileId: 'string',
      finishTime: 'string',
      fpShotConfig: QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotConfig,
      fpShotResult: QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResult,
      id: 'string',
      input: 'string',
      inputFile: QueryFpShotJobListResponseBodyFpShotJobListFpShotJobInputFile,
      message: 'string',
      pipelineId: 'string',
      state: 'string',
      userData: 'string',
    };
  }

  validate() {
    if(this.fpShotConfig && typeof (this.fpShotConfig as any).validate === 'function') {
      (this.fpShotConfig as any).validate();
    }
    if(this.fpShotResult && typeof (this.fpShotResult as any).validate === 'function') {
      (this.fpShotResult as any).validate();
    }
    if(this.inputFile && typeof (this.inputFile as any).validate === 'function') {
      (this.inputFile as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

