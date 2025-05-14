// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SubmitMediaInfoJobResponseBodyMediaInfoJobInput } from "./SubmitMediaInfoJobResponseBodyMediaInfoJobInput";
import { SubmitMediaInfoJobResponseBodyMediaInfoJobMediaInfoProperty } from "./SubmitMediaInfoJobResponseBodyMediaInfoJobMediaInfoProperty";
import { SubmitMediaInfoJobResponseBodyMediaInfoJobScheduleConfig } from "./SubmitMediaInfoJobResponseBodyMediaInfoJobScheduleConfig";


export class SubmitMediaInfoJobResponseBodyMediaInfoJob extends $dara.Model {
  /**
   * @remarks
   * Indicates whether asynchronous processing was performed.
   * 
   * @example
   * true
   */
  async?: boolean;
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
   * The input of the job.
   */
  input?: SubmitMediaInfoJobResponseBodyMediaInfoJobInput;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * ab4802364a2e49208c99efab82dfa8e8
   */
  jobId?: string;
  /**
   * @remarks
   * The details of the media information.
   */
  mediaInfoProperty?: SubmitMediaInfoJobResponseBodyMediaInfoJobMediaInfoProperty;
  /**
   * @remarks
   * The job name.
   * 
   * @example
   * job-name
   */
  name?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4879B9DE-E4B6-19DC-91F5-9D5F4DCE4168
   */
  requestId?: string;
  /**
   * @remarks
   * The scheduling information.
   */
  scheduleConfig?: SubmitMediaInfoJobResponseBodyMediaInfoJobScheduleConfig;
  /**
   * @remarks
   * The state of the job. Valid values: Init (the job is submitted), Success (the job is successful), and Fail (the job failed).
   * 
   * @example
   * Init
   */
  status?: string;
  /**
   * @remarks
   * The job submission information.
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
   * The source of the job. Valid values: API, WorkFlow, and Console.
   * 
   * @example
   * API
   */
  triggerSource?: string;
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
      async: 'Async',
      finishTime: 'FinishTime',
      input: 'Input',
      jobId: 'JobId',
      mediaInfoProperty: 'MediaInfoProperty',
      name: 'Name',
      requestId: 'RequestId',
      scheduleConfig: 'ScheduleConfig',
      status: 'Status',
      submitResultJson: 'SubmitResultJson',
      submitTime: 'SubmitTime',
      triggerSource: 'TriggerSource',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      async: 'boolean',
      finishTime: 'string',
      input: SubmitMediaInfoJobResponseBodyMediaInfoJobInput,
      jobId: 'string',
      mediaInfoProperty: SubmitMediaInfoJobResponseBodyMediaInfoJobMediaInfoProperty,
      name: 'string',
      requestId: 'string',
      scheduleConfig: SubmitMediaInfoJobResponseBodyMediaInfoJobScheduleConfig,
      status: 'string',
      submitResultJson: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      submitTime: 'string',
      triggerSource: 'string',
      userData: 'string',
    };
  }

  validate() {
    if(this.input && typeof (this.input as any).validate === 'function') {
      (this.input as any).validate();
    }
    if(this.mediaInfoProperty && typeof (this.mediaInfoProperty as any).validate === 'function') {
      (this.mediaInfoProperty as any).validate();
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

