// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitTranscodeJobShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * @example
   * ****12e8864746a0a398****
   */
  clientToken?: string;
  /**
   * @remarks
   * The input group of the job. An input of a single file indicates a transcoding job. An input of multiple files indicates an audio and video stream merge job.
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
   * The output group of the job.
   * 
   * This parameter is required.
   * 
   * @example
   * user-data
   */
  outputGroupShrink?: string;
  /**
   * @remarks
   * The scheduling information about the job.
   * 
   * @example
   * job-name
   */
  scheduleConfigShrink?: string;
  /**
   * @remarks
   * The custom settings. The value must be in the JSON format and can be up to 512 bytes in length. You can specify a [custom callback URL](https://help.aliyun.com/document_detail/451631.html).
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

