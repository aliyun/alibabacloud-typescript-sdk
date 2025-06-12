// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMultiChannelRecordingResponseBodyData extends $dara.Model {
  /**
   * @example
   * job-6538214103689****.mkv
   */
  fileName?: string;
  /**
   * @example
   * https://ccc-v2-online.oss-cn-shanghai.aliyuncs.com/ccc-record-mixed/ccc-test/2021/04/job-6538214103689****.mkv?Expires=1617435462&OSSAccessKeyId=****&Signature=****
   */
  fileUrl?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      fileUrl: 'FileUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

