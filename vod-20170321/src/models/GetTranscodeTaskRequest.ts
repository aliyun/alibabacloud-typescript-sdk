// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTranscodeTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The transcoding job IDs. You can specify a maximum of 10 IDs. Separate multiple IDs with commas (,). You can obtain the IDs by using the following method:
   * - Call the [SubmitTranscodeJobs](https://help.aliyun.com/document_detail/68570.html) operation to submit a transcoding task. The value of JobId in the response is the transcoding job ID.
   * 
   * @example
   * 86c1925fba0****,7afb201e7fa****,2cc4997378****
   */
  jobIds?: string;
  /**
   * @remarks
   * The transcoding task ID. You can obtain the ID by using one of the following methods:
   * - Call the [SubmitTranscodeJobs](https://help.aliyun.com/document_detail/68570.html) operation to submit a transcoding task. The value of TranscodeTaskId in the response is the transcoding task ID.
   * - Call the [ListTranscodeTask](https://help.aliyun.com/document_detail/109120.html) operation. The value of TranscodeTaskId in the response is the transcoding task ID.
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

