// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitDocumentAnalyzeJobResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * adkc-kk2k41-kk2ol-222424
   */
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'jobId',
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

