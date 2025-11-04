// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCopyrightExtractJobRequest extends $dara.Model {
  /**
   * @remarks
   * The job ID. You can obtain the value of this parameter from the response of the SubmitCopyrightExtractJob operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 2288c6ca184c0e47098a5b665e2a12****
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

