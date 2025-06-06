// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SubmitTraceM3u8JobRequestOutput } from "./SubmitTraceM3u8jobRequestOutput";


export class SubmitTraceM3u8JobRequest extends $dara.Model {
  /**
   * @example
   * https://cipher.abc.com
   */
  keyUri?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  output?: SubmitTraceM3u8JobRequestOutput;
  /**
   * @example
   * {"m3u8Type":"v1"}
   */
  params?: string;
  trace?: string;
  /**
   * @example
   * 437bd2b516ffda105d07b12a9a82****
   */
  traceMediaId?: string;
  static names(): { [key: string]: string } {
    return {
      keyUri: 'KeyUri',
      output: 'Output',
      params: 'Params',
      trace: 'Trace',
      traceMediaId: 'TraceMediaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyUri: 'string',
      output: SubmitTraceM3u8JobRequestOutput,
      params: 'string',
      trace: 'string',
      traceMediaId: 'string',
    };
  }

  validate() {
    if(this.output && typeof (this.output as any).validate === 'function') {
      (this.output as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

