// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCdsFileResponseBodyFileModel extends $dara.Model {
  /**
   * @remarks
   * File ID.
   * 
   * @example
   * 646ec2f662b1e08f7a2b4d648982f906****
   */
  fileId?: string;
  /**
   * @remarks
   * File upload task ID.
   * 
   * @example
   * 20BE155AC20943BE9D405B0997A9****
   */
  uploadId?: string;
  /**
   * @remarks
   * File upload URL. Valid for 15 minutes by default.
   * 
   * @example
   * https://data.aliyunpds.com/xxx/xxx?Expires=xxx&OSSAccessKeyId=xxx&Signature=xxx&partNumber=1&uploadId=0CC175B9C0F1B6A831C399E26977****
   */
  uploadUrl?: string;
  static names(): { [key: string]: string } {
    return {
      fileId: 'FileId',
      uploadId: 'UploadId',
      uploadUrl: 'UploadUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'string',
      uploadId: 'string',
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

export class CreateCdsFileResponseBody extends $dara.Model {
  /**
   * @remarks
   * File upload response object.
   */
  fileModel?: CreateCdsFileResponseBodyFileModel;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 2BAFE05D-FFB9-5938-96D0-08017DB9****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      fileModel: 'FileModel',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileModel: CreateCdsFileResponseBodyFileModel,
      requestId: 'string',
    };
  }

  validate() {
    if(this.fileModel && typeof (this.fileModel as any).validate === 'function') {
      (this.fileModel as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

