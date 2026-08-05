// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitTranscodeJobShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The idempotency key that is used to ensure the idempotence of the request.
   * 
   * @example
   * ****12e8864746a0a398****
   */
  clientToken?: string;
  /**
   * @remarks
   * The job input group. A single input creates a transcoding job. Multiple inputs create an audio and video stream merging job.
   * 
   * This parameter is required.
   * 
   * @example
   * job-name
   */
  inputGroupShrink?: string;
  /**
   * @remarks
   * The name of the job.
   * 
   * @example
   * job-name
   */
  name?: string;
  /**
   * @remarks
   * The task output group.
   * 
   * This parameter is required.
   * 
   * @example
   * user-data
   */
  outputGroupShrink?: string;
  /**
   * @remarks
   * The task scheduling information.
   * 
   * @example
   * job-name
   */
  scheduleConfigShrink?: string;
  /**
   * @remarks
   * Custom settings in JSON format. The value can be up to 512 bytes in length. [Custom callback URL configuration](https://help.aliyun.com/document_detail/451631.html) is supported.
   * 
   * @example
   * user-data
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      inputGroupShrink: 'InputGroup',
      name: 'Name',
      outputGroupShrink: 'OutputGroup',
      scheduleConfigShrink: 'ScheduleConfig',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      inputGroupShrink: 'string',
      name: 'string',
      outputGroupShrink: 'string',
      scheduleConfigShrink: 'string',
      userData: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

