// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryIProductionJobResponseBody extends $dara.Model {
  /**
   * @example
   * ImageCartoonize
   */
  functionName?: string;
  /**
   * @example
   * oss://example-****.oss-cn-hangzhou.aliyuncs.com/example.mp4
   */
  input?: string;
  /**
   * @example
   * 88c6ca184c0e432bbf5b665e2a15****
   */
  jobId?: string;
  /**
   * @example
   * {mode:"gif"}
   */
  jobParams?: string;
  /**
   * @example
   * oss://example-****.oss-cn-hangzhou.aliyuncs.com/iproduction/{source}-{timestamp}-{sequenceId}.srt
   */
  output?: string;
  /**
   * @example
   * 39f8e0bc005e4f309379701645f4****
   */
  pipelineId?: string;
  /**
   * @example
   * D127C68E-F1A1-4CE5-A874-8FF724881A12
   */
  requestId?: string;
  /**
   * @example
   * {"Code":"Success","Data":"{\\"result\\":[{\\"file\\":\\"iproduction/test-result.jpg\\"},{\\"file\\":\\"iproduction/test-origin.jpg\\"}]}","Message":"Successful."}
   */
  result?: string;
  /**
   * @example
   * Success
   */
  state?: string;
  /**
   * @example
   * null
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      functionName: 'FunctionName',
      input: 'Input',
      jobId: 'JobId',
      jobParams: 'JobParams',
      output: 'Output',
      pipelineId: 'PipelineId',
      requestId: 'RequestId',
      result: 'Result',
      state: 'State',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      functionName: 'string',
      input: 'string',
      jobId: 'string',
      jobParams: 'string',
      output: 'string',
      pipelineId: 'string',
      requestId: 'string',
      result: 'string',
      state: 'string',
      userData: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

