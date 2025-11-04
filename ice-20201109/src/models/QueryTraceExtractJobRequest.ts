// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryTraceExtractJobRequest extends $dara.Model {
  /**
   * @remarks
   * The job ID. You can obtain the value of this parameter from the response of the SubmitTraceExtractJob operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 31fa3c9ca8134fb4b0b0f7878301****
   */
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

