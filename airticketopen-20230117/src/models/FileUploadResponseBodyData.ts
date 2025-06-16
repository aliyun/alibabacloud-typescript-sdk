// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FileUploadResponseBodyData extends $dara.Model {
  /**
   * @example
   * https://fliggy-flight-jinghang-bucket.oss-cn-zhangjiakou.aliyuncs.com/suez/flight_suez_9a634376****47.jpeg
   */
  uploadedFileUrl?: string;
  static names(): { [key: string]: string } {
    return {
      uploadedFileUrl: 'uploaded_file_url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uploadedFileUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

