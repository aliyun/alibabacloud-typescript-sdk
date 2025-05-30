// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListInputGroup } from "./GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListInputGroup";
import { GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListOutFileMeta } from "./GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListOutFileMeta";
import { GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListOutput } from "./GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListOutput";
import { GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfig } from "./GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfig";
import { GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListScheduleConfig } from "./GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListScheduleConfig";


export class GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobList extends $dara.Model {
  /**
   * @remarks
   * The time when the job was created.
   * 
   * @example
   * 2022-01-12T08:49:41Z
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the job was complete.
   * 
   * @example
   * 2022-01-12T08:49:41Z
   */
  finishTime?: string;
  /**
   * @remarks
   * The input group of the job. An input of a single file indicates a transcoding job. An input of multiple files indicates an audio and video stream merge job.
   */
  inputGroup?: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListInputGroup[];
  /**
   * @remarks
   * The subjob ID.
   * 
   * @example
   * 7d6a7e0d4db2457a8d45ff5d43e1bf0a
   */
  jobId?: string;
  /**
   * @remarks
   * The index number of the subjob in the entire job.
   * 
   * @example
   * 0
   */
  jobIndex?: number;
  /**
   * @remarks
   * The job name.
   * 
   * @example
   * transcode-job
   */
  name?: string;
  /**
   * @remarks
   * The media information about the video generated by the job.
   */
  outFileMeta?: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListOutFileMeta;
  /**
   * @remarks
   * The output file configuration.
   */
  output?: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListOutput;
  /**
   * @remarks
   * The main job ID.
   * 
   * @example
   * 8b2198504dd340b7b3c9842a74fc9baa
   */
  parentJobId?: string;
  /**
   * @remarks
   * The transcoding configuration.
   */
  processConfig?: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfig;
  /**
   * @remarks
   * The ID of the request that submitted the job.
   * 
   * @example
   * 31E30781-9495-5E2D-A84D-759B0A01E262
   */
  requestId?: string;
  /**
   * @remarks
   * The scheduling information about the job.
   */
  scheduleConfig?: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListScheduleConfig;
  /**
   * @remarks
   * The state of the transcoding job. Valid values: Init (the job is submitted), Success (the job is successful), Fail (the job failed), and Deleted (the job is deleted).
   * 
   * @example
   * Init
   */
  status?: string;
  /**
   * @remarks
   * The job submission result.
   * 
   * @example
   * {}
   */
  submitResultJson?: { [key: string]: any };
  /**
   * @remarks
   * The time when the job was submitted.
   * 
   * @example
   * 2022-01-12T08:49:41Z
   */
  submitTime?: string;
  /**
   * @remarks
   * The user data.
   * 
   * @example
   * user-data
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      finishTime: 'FinishTime',
      inputGroup: 'InputGroup',
      jobId: 'JobId',
      jobIndex: 'JobIndex',
      name: 'Name',
      outFileMeta: 'OutFileMeta',
      output: 'Output',
      parentJobId: 'ParentJobId',
      processConfig: 'ProcessConfig',
      requestId: 'RequestId',
      scheduleConfig: 'ScheduleConfig',
      status: 'Status',
      submitResultJson: 'SubmitResultJson',
      submitTime: 'SubmitTime',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      finishTime: 'string',
      inputGroup: { 'type': 'array', 'itemType': GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListInputGroup },
      jobId: 'string',
      jobIndex: 'number',
      name: 'string',
      outFileMeta: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListOutFileMeta,
      output: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListOutput,
      parentJobId: 'string',
      processConfig: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListProcessConfig,
      requestId: 'string',
      scheduleConfig: GetTranscodeJobResponseBodyTranscodeParentJobTranscodeJobListScheduleConfig,
      status: 'string',
      submitResultJson: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      submitTime: 'string',
      userData: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.inputGroup)) {
      $dara.Model.validateArray(this.inputGroup);
    }
    if(this.outFileMeta && typeof (this.outFileMeta as any).validate === 'function') {
      (this.outFileMeta as any).validate();
    }
    if(this.output && typeof (this.output as any).validate === 'function') {
      (this.output as any).validate();
    }
    if(this.processConfig && typeof (this.processConfig as any).validate === 'function') {
      (this.processConfig as any).validate();
    }
    if(this.scheduleConfig && typeof (this.scheduleConfig as any).validate === 'function') {
      (this.scheduleConfig as any).validate();
    }
    if(this.submitResultJson) {
      $dara.Model.validateMap(this.submitResultJson);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

