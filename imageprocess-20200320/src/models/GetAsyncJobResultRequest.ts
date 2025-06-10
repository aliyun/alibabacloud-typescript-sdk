// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAsyncJobResultRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 7CB9B663-3EF8-4C9C-A464-FDA2B5F1E3A4
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

