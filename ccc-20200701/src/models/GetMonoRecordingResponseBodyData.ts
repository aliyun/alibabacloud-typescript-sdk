// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMonoRecordingResponseBodyData extends $dara.Model {
  duration?: number;
  /**
   * @example
   * job-6538214103689****.wav
   */
  fileName?: string;
  /**
   * @example
   * http://ccc-v2-online.oss-cn-shanghai.aliyuncs.com/ccc-record/job-6538214103689****.wav?Expires=1610910578&OSSAccessKeyId=****&Signature=****
   */
  fileUrl?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      fileName: 'FileName',
      fileUrl: 'FileUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      fileName: 'string',
      fileUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

