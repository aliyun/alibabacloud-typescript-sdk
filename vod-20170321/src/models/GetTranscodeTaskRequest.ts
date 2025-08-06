// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTranscodeTaskRequest extends $dara.Model {
  /**
   * @remarks
   * Transcoding job ID. Supports up to 10 IDs, and multiple IDs should be separated by a comma (,). You can obtain this value in the following ways:
   * 
   * When initiating a transcoding task through the [SubmitTranscodeJobs](https://help.aliyun.com/document_detail/454920.html) interface, it is the value of the returned parameter JobId.
   * 
   * @example
   * 86c1925fba0****,7afb201e7fa****,2cc4997378****
   */
  jobIds?: string;
  /**
   * @remarks
   * The ID of the transcoding task. You can use one of the following methods to obtain the ID:
   * 
   * *   Obtain the value of TranscodeTaskId from the response to the [SubmitTranscodeJobs](https://help.aliyun.com/document_detail/68570.html) operation.
   * *   Obtain the value of TranscodeTaskId from the response to the [ListTranscodeTask](https://help.aliyun.com/document_detail/109120.html) operation.
   * 
   * @example
   * b1b65ab107e14*****3dbb900f6c1fe0
   */
  transcodeTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      jobIds: 'JobIds',
      transcodeTaskId: 'TranscodeTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobIds: 'string',
      transcodeTaskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

