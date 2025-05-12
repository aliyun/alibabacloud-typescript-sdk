// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitCopyrightExtractJobResponseBodyData extends $dara.Model {
  /**
   * @example
   * ebbfe90c63b54ed4b61acb2f6c44****
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

