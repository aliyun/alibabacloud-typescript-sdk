// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitIProductionJobResponseBody extends $dara.Model {
  /**
   * @example
   * 39f8e0bc005e4f309379701645f4****
   */
  jobId?: string;
  /**
   * @example
   * 5210DBB0-E327-4D45-ADBC-0B83C8796E26
   */
  requestId?: string;
  /**
   * @example
   * { "Code":"Success", "Details":[], "FunctionName":"ImageCartoonize", "JobId":"39f8e0bc005e4f309379701645f4****", "Message":"success", "State":"Success", "Type":"IProduction" }
   */
  result?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestId: 'string',
      result: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

