// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTranscodeTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the transcoding jobs. You can specify up to 10 IDs. Separate multiple IDs with commas (,). You can obtain the IDs by using the following method:
   * - Call the [SubmitTranscodeJobs](https://help.aliyun.com/document_detail/68570.html) operation to initiate a transcoding task. The ID is the value of the JobId response parameter.
   * 
   * @example
   * 86c1925fba0****,7afb201e7fa****,2cc4997378****
   */
  jobIds?: string;
  /**
   * @remarks
   * The transcoding task ID. You can obtain the ID by using one of the following methods:
   * - Call the [SubmitTranscodeJobs](https://help.aliyun.com/document_detail/68570.html) operation to initiate a transcoding task. The ID is the value of the TranscodeTaskId response parameter.
   * - Call the [ListTranscodeTask](https://help.aliyun.com/document_detail/109120.html) operation to query transcoding tasks. The ID is the value of the TranscodeTaskId response parameter.
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

