// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryCopyrightJobListResponseBodyDataInput } from "./QueryCopyrightJobListResponseBodyDataInput";
import { QueryCopyrightJobListResponseBodyDataOutput } from "./QueryCopyrightJobListResponseBodyDataOutput";


export class QueryCopyrightJobListResponseBodyData extends $dara.Model {
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
  input?: QueryCopyrightJobListResponseBodyDataInput;
  /**
   * @example
   * bfb786c639894f4d80648792021****
   */
  jobId?: string;
  /**
   * @example
   * 2
   */
  level?: number;
  /**
   * @example
   * test
   */
  message?: string;
  output?: QueryCopyrightJobListResponseBodyDataOutput;
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
   * 123
   */
  userData?: string;
  /**
   * @example
   * 1346693***
   */
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      input: 'Input',
      jobId: 'JobId',
      level: 'Level',
      message: 'Message',
      output: 'Output',
      result: 'Result',
      status: 'Status',
      userData: 'UserData',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'number',
      gmtModified: 'number',
      input: QueryCopyrightJobListResponseBodyDataInput,
      jobId: 'string',
      level: 'number',
      message: 'string',
      output: QueryCopyrightJobListResponseBodyDataOutput,
      result: 'string',
      status: 'string',
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

