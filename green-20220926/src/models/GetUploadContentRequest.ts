// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUploadContentRequest extends $dara.Model {
  /**
   * @remarks
   * The OSS URL of the uploaded file.
   * 
   * @example
   * https://oss-cip-shanghai.oss-cn-shanghai.aliyuncs.com/image/upload/test_text.txt
   */
  uploadUrl?: string;
  static names(): { [key: string]: string } {
    return {
      uploadUrl: 'UploadUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uploadUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

