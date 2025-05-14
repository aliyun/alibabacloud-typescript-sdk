// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitAudioProduceJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * ****20b48fb04483915d4f2cd8ac****
   */
  jobId?: string;
  /**
   * @remarks
   * The ID of the media asset.
   * 
   * @example
   * ****2bcbfcfa30fccb36f72dca22****
   */
  mediaId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ******11-DB8D-4A9A-875B-275798******
   */
  requestId?: string;
  /**
   * @remarks
   * The job state. Valid values:
   * 
   * *   Created
   * *   Executing
   * *   Finished
   * *   Failed
   * 
   * @example
   * Created
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      mediaId: 'MediaId',
      requestId: 'RequestId',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      mediaId: 'string',
      requestId: 'string',
      state: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

