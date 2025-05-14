// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SubmitTraceAbJobRequestInput } from "./SubmitTraceAbJobRequestInput";
import { SubmitTraceAbJobRequestOutput } from "./SubmitTraceAbJobRequestOutput";


export class SubmitTraceAbJobRequest extends $dara.Model {
  /**
   * @example
   * Qh6OdgIMcliQSI1fReOw****
   */
  cipherBase64ed?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  input?: SubmitTraceAbJobRequestInput;
  /**
   * @example
   * 0
   */
  level?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  output?: SubmitTraceAbJobRequestOutput;
  /**
   * @example
   * 0
   */
  startTime?: number;
  /**
   * @example
   * 360
   */
  totalTime?: number;
  /**
   * @example
   * 123
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      cipherBase64ed: 'CipherBase64ed',
      input: 'Input',
      level: 'Level',
      output: 'Output',
      startTime: 'StartTime',
      totalTime: 'TotalTime',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cipherBase64ed: 'string',
      input: SubmitTraceAbJobRequestInput,
      level: 'number',
      output: SubmitTraceAbJobRequestOutput,
      startTime: 'number',
      totalTime: 'number',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

