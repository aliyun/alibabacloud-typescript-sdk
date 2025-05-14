// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryTraceAbJobListResponseBodyDataInput } from "./QueryTraceAbJobListResponseBodyDataInput";
import { QueryTraceAbJobListResponseBodyDataOutput } from "./QueryTraceAbJobListResponseBodyDataOutput";


export class QueryTraceAbJobListResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1627357322
   */
  gmtCreate?: number;
  /**
   * @example
   * 1627357322
   */
  gmtModified?: number;
  input?: QueryTraceAbJobListResponseBodyDataInput;
  /**
   * @example
   * bfb786c639894f4d80648792021eff90
   */
  jobId?: string;
  /**
   * @example
   * 2
   */
  level?: number;
  output?: QueryTraceAbJobListResponseBodyDataOutput;
  /**
   * @example
   * {"Code":"success","Message":"ok"}
   */
  result?: string;
  /**
   * @example
   * success
   */
  status?: string;
  /**
   * @example
   * ****437bd2b51105d07b12a9****
   */
  traceMediaId?: string;
  /**
   * @example
   * 123
   */
  userData?: string;
  /**
   * @example
   * 13466932****
   */
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      input: 'Input',
      jobId: 'JobId',
      level: 'Level',
      output: 'Output',
      result: 'Result',
      status: 'Status',
      traceMediaId: 'TraceMediaId',
      userData: 'UserData',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'number',
      gmtModified: 'number',
      input: QueryTraceAbJobListResponseBodyDataInput,
      jobId: 'string',
      level: 'number',
      output: QueryTraceAbJobListResponseBodyDataOutput,
      result: 'string',
      status: 'string',
      traceMediaId: 'string',
      userData: 'string',
      userId: 'number',
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

