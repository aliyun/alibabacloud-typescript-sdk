// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitAvatarVideoJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * ****20b48fb04483915d4f2cd8ac****
   */
  jobId?: string;
  /**
   * @remarks
   * The media asset ID of the output file.
   * 
   * @example
   * ******70dcc471edaf00e6f6f4******
   */
  mediaId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * ******11-DB8D-4A9A-875B-275798******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      mediaId: 'MediaId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      mediaId: 'string',
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

