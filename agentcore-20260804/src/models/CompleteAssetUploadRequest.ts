// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CompleteAssetUploadRequestBody extends $dara.Model {
  /**
   * @remarks
   * The uploadId returned by BeginAssetUpload. It must match the current upload session and the current upload target generation of the asset.
   * 
   * This parameter is required.
   * 
   * @example
   * upload-001
   */
  uploadId?: string;
  static names(): { [key: string]: string } {
    return {
      uploadId: 'uploadId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uploadId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompleteAssetUploadRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies the upload session returned by BeginAssetUpload to prevent delayed confirmations from affecting subsequent uploads.
   * 
   * This parameter is required.
   */
  body?: CompleteAssetUploadRequestBody;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: CompleteAssetUploadRequestBody,
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

