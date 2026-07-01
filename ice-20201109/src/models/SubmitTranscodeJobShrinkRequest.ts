// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitTranscodeJobShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The idempotence key. Ensures request idempotence.
   * 
   * @example
   * ****12e8864746a0a398****
   */
  clientToken?: string;
  /**
   * @remarks
   * The input group for the job. A single input creates a transcoding job. Multiple inputs create a media merging job.
   * 
   * This parameter is required.
   * 
   * @example
   * job-name
   */
  inputGroupShrink?: string;
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
   * The output group for the job.
   * 
   * This parameter is required.
   * 
   * @example
   * user-data
   */
  outputGroupShrink?: string;
  /**
   * @remarks
   * The job scheduling information.
   * 
   * @example
   * job-name
   */
  scheduleConfigShrink?: string;
  /**
   * @remarks
   * Custom settings in JSON format. The length is limited to 512 bytes. Supports [custom webhook address configuration](https://help.aliyun.com/document_detail/451631.html).
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

