// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryTraceM3u8JobListResponseBodyDataOutput } from "./QueryTraceM3u8jobListResponseBodyDataOutput";


export class QueryTraceM3u8JobListResponseBodyData extends $dara.Model {
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
  /**
   * @example
   * ****d718e2ff4f018ccf419a7b71****
   */
  jobId?: string;
  output?: QueryTraceM3u8JobListResponseBodyDataOutput;
  /**
   * @example
   * success
   */
  status?: string;
  /**
   * @example
   * test
   */
  trace?: string;
  /**
   * @example
   * ****437bd2b105d07b12a9a82****
   */
  traceMediaId?: string;
  /**
   * @example
   * 112
   */
  userData?: string;
  /**
   * @example
   * 1346693276****
   */
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      jobId: 'JobId',
      output: 'Output',
      status: 'Status',
      trace: 'Trace',
      traceMediaId: 'TraceMediaId',
      userData: 'UserData',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'number',
      gmtModified: 'number',
      jobId: 'string',
      output: QueryTraceM3u8JobListResponseBodyDataOutput,
      status: 'string',
      trace: 'string',
      traceMediaId: 'string',
      userData: 'string',
      userId: 'number',
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

