// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SubmitSnapshotJobRequestInput } from "./SubmitSnapshotJobRequestInput";
import { SubmitSnapshotJobRequestOutput } from "./SubmitSnapshotJobRequestOutput";
import { SubmitSnapshotJobRequestScheduleConfig } from "./SubmitSnapshotJobRequestScheduleConfig";
import { SubmitSnapshotJobRequestTemplateConfig } from "./SubmitSnapshotJobRequestTemplateConfig";


export class SubmitSnapshotJobRequest extends $dara.Model {
  /**
   * @remarks
   * The snapshot input.
   * 
   * This parameter is required.
   */
  input?: SubmitSnapshotJobRequestInput;
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
   * The snapshot output.
   * 
   * This parameter is required.
   */
  output?: SubmitSnapshotJobRequestOutput;
  /**
   * @remarks
   * The scheduling settings.
   */
  scheduleConfig?: SubmitSnapshotJobRequestScheduleConfig;
  /**
   * @remarks
   * The snapshot template configuration.
   * 
   * This parameter is required.
   */
  templateConfig?: SubmitSnapshotJobRequestTemplateConfig;
  /**
   * @remarks
   * The user-defined data.
   * 
   * @example
   * {"test parameter": "test value"}
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
      input: SubmitSnapshotJobRequestInput,
      name: 'string',
      output: SubmitSnapshotJobRequestOutput,
      scheduleConfig: SubmitSnapshotJobRequestScheduleConfig,
      templateConfig: SubmitSnapshotJobRequestTemplateConfig,
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

