// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResumeYikeStoryboardJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The task ID. You can obtain this value from the response of [SubmitPackageJob](https://help.aliyun.com/document_detail/461964.html).
   * 
   * @example
   * ****a046-263c-3560-978a-fb287782****
   */
  jobId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ******3B-0E1A-586A-AC29-742247******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

