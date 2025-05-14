// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SubmitTranscodeJobRequestOutputGroupOutput } from "./SubmitTranscodeJobRequestOutputGroupOutput";
import { SubmitTranscodeJobRequestOutputGroupProcessConfig } from "./SubmitTranscodeJobRequestOutputGroupProcessConfig";


export class SubmitTranscodeJobRequestOutputGroup extends $dara.Model {
  /**
   * @remarks
   * The output file configuration.
   * 
   * This parameter is required.
   */
  output?: SubmitTranscodeJobRequestOutputGroupOutput;
  /**
   * @remarks
   * The job processing configuration.
   * 
   * This parameter is required.
   */
  processConfig?: SubmitTranscodeJobRequestOutputGroupProcessConfig;
  static names(): { [key: string]: string } {
    return {
      output: 'Output',
      processConfig: 'ProcessConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: SubmitTranscodeJobRequestOutputGroupOutput,
      processConfig: SubmitTranscodeJobRequestOutputGroupProcessConfig,
    };
  }

  validate() {
    if(this.output && typeof (this.output as any).validate === 'function') {
      (this.output as any).validate();
    }
    if(this.processConfig && typeof (this.processConfig as any).validate === 'function') {
      (this.processConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

