// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UploadInfo } from "./UploadInfo";


export class GetOssUploadTokenResult extends $dara.Model {
  /**
   * @example
   * 3239281273464326823
   */
  requestId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  uploadInfo?: UploadInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      uploadInfo: 'uploadInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      uploadInfo: UploadInfo,
    };
  }

  validate() {
    if(this.uploadInfo && typeof (this.uploadInfo as any).validate === 'function') {
      (this.uploadInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

