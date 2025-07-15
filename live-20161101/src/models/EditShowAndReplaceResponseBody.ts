// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EditShowAndReplaceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the editing task. The following fields are included:
   * 
   * *   **vodId**: the ID of the VOD file.
   * *   **mediaid**: the ID of the media file.
   * *   **jobId**: the ID of the editing task.
   * 
   * @example
   * {         "vodId": "3e34733b40b9a96ccf5c1ff6f69****",         "mediaid": "eb1861d2c9a842340e989dd56****",         "jobId": "7d2fbc380b0e08e55fe98733764****"     }
   */
  jobInfo?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CD8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobInfo: 'JobInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobInfo: 'string',
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

