// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SubmitPackageJobRequestInputs } from "./SubmitPackageJobRequestInputs";
import { SubmitPackageJobRequestOutput } from "./SubmitPackageJobRequestOutput";
import { SubmitPackageJobRequestScheduleConfig } from "./SubmitPackageJobRequestScheduleConfig";


export class SubmitPackageJobRequest extends $dara.Model {
  /**
   * @remarks
   * The input of the job.
   * 
   * This parameter is required.
   */
  inputs?: SubmitPackageJobRequestInputs[];
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
   * The output of the job.
   * 
   * This parameter is required.
   */
  output?: SubmitPackageJobRequestOutput;
  /**
   * @remarks
   * The scheduling settings.
   */
  scheduleConfig?: SubmitPackageJobRequestScheduleConfig;
  /**
   * @remarks
   * The user-defined data.
   * 
   * @example
   * {"param": "value"}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      inputs: 'Inputs',
      name: 'Name',
      output: 'Output',
      scheduleConfig: 'ScheduleConfig',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputs: { 'type': 'array', 'itemType': SubmitPackageJobRequestInputs },
      name: 'string',
      output: SubmitPackageJobRequestOutput,
      scheduleConfig: SubmitPackageJobRequestScheduleConfig,
      userData: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.inputs)) {
      $dara.Model.validateArray(this.inputs);
    }
    if(this.output && typeof (this.output as any).validate === 'function') {
      (this.output as any).validate();
    }
    if(this.scheduleConfig && typeof (this.scheduleConfig as any).validate === 'function') {
      (this.scheduleConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

