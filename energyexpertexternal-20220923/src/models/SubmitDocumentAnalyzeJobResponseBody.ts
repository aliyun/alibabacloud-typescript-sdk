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

export class SubmitDocumentAnalyzeJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: SubmitDocumentAnalyzeJobResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 4A0AEC56-5C9A-5D47-93DF-7227836FFF82
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: SubmitDocumentAnalyzeJobResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

