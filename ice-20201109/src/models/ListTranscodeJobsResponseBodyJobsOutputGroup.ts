// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTranscodeJobsResponseBodyJobsOutputGroupOutput } from "./ListTranscodeJobsResponseBodyJobsOutputGroupOutput";
import { ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfig } from "./ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfig";


export class ListTranscodeJobsResponseBodyJobsOutputGroup extends $dara.Model {
  /**
   * @remarks
   * The output file configuration.
   */
  output?: ListTranscodeJobsResponseBodyJobsOutputGroupOutput;
  /**
   * @remarks
   * The job processing configuration.
   */
  processConfig?: ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfig;
  static names(): { [key: string]: string } {
    return {
      output: 'Output',
      processConfig: 'ProcessConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: ListTranscodeJobsResponseBodyJobsOutputGroupOutput,
      processConfig: ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfig,
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

