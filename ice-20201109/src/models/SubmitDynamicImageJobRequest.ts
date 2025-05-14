// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SubmitDynamicImageJobRequestInput } from "./SubmitDynamicImageJobRequestInput";
import { SubmitDynamicImageJobRequestOutput } from "./SubmitDynamicImageJobRequestOutput";
import { SubmitDynamicImageJobRequestScheduleConfig } from "./SubmitDynamicImageJobRequestScheduleConfig";
import { SubmitDynamicImageJobRequestTemplateConfig } from "./SubmitDynamicImageJobRequestTemplateConfig";


export class SubmitDynamicImageJobRequest extends $dara.Model {
  /**
   * @remarks
   * The input of the job.
   * 
   * This parameter is required.
   */
  input?: SubmitDynamicImageJobRequestInput;
  /**
   * @remarks
   * The name of the job.
   * 
   * @example
   * SampleJob
   */
  name?: string;
  /**
   * @remarks
   * The output of the job.
   * 
   * This parameter is required.
   */
  output?: SubmitDynamicImageJobRequestOutput;
  /**
   * @remarks
   * The scheduling settings.
   */
  scheduleConfig?: SubmitDynamicImageJobRequestScheduleConfig;
  /**
   * @remarks
   * The snapshot template configuration.
   * 
   * This parameter is required.
   */
  templateConfig?: SubmitDynamicImageJobRequestTemplateConfig;
  /**
   * @remarks
   * The user-defined data.
   * 
   * @example
   * {"SampleKey": "SampleValue"}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      input: 'Input',
      name: 'Name',
      output: 'Output',
      scheduleConfig: 'ScheduleConfig',
      templateConfig: 'TemplateConfig',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      input: SubmitDynamicImageJobRequestInput,
      name: 'string',
      output: SubmitDynamicImageJobRequestOutput,
      scheduleConfig: SubmitDynamicImageJobRequestScheduleConfig,
      templateConfig: SubmitDynamicImageJobRequestTemplateConfig,
      userData: 'string',
    };
  }

  validate() {
    if(this.input && typeof (this.input as any).validate === 'function') {
      (this.input as any).validate();
    }
    if(this.output && typeof (this.output as any).validate === 'function') {
      (this.output as any).validate();
    }
    if(this.scheduleConfig && typeof (this.scheduleConfig as any).validate === 'function') {
      (this.scheduleConfig as any).validate();
    }
    if(this.templateConfig && typeof (this.templateConfig as any).validate === 'function') {
      (this.templateConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

