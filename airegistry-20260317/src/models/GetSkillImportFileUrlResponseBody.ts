// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSkillImportFileUrlResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The file type.
   * 
   * @example
   * application/zip
   */
  contentType?: string;
  /**
   * @remarks
   * The maximum allowed file size for upload, in MB.
   * 
   * @example
   * 10
   */
  maxSize?: string;
  /**
   * @remarks
   * The file name in the authorized OSS bucket.
   * 
   * > Among the four image input methods (FaceContrastPicture, FaceContrastPictureUrl, CertifyId, and OSS), select one to use.
   * 
   * @example
   * 1190239587066411/skill/import/5e993afe-f629-4619-9ac2-51b125300cdd/2026/06/09/35059076-5992-4a71-a706-89230e57f2a2/ui-ux-pro-max.zip
   */
  ossObjectName?: string;
  /**
   * @remarks
   * The file upload URL. The client uses this URL to upload the file.
   * 
   * @example
   * https://mse-shared-cn-hangzhou.oss-cn-hangzhou.aliyuncs.com/skill/import/199xxxxxxxx0842/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxx/2026/06/10/xxxx-xxxx-xxxx-xxxx-xxxxxxxxxx/1781082579097.zip?Expires=1781083479&OSSAccessKeyId=STS.NZXGXTD2yoDLd5PfsYxjFrvBJ&Signature=Loyyzzzzzzzz%3D&security-token=CAIStgxxxxxxx
   */
  uploadUrl?: string;
  static names(): { [key: string]: string } {
    return {
      contentType: 'ContentType',
      maxSize: 'MaxSize',
      ossObjectName: 'OssObjectName',
      uploadUrl: 'UploadUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentType: 'string',
      maxSize: 'string',
      ossObjectName: 'string',
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

export class GetSkillImportFileUrlResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned result.
   */
  data?: GetSkillImportFileUrlResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D9E87E66-9EF0-5C10-A5E6-924020A0C9B7
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetSkillImportFileUrlResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

