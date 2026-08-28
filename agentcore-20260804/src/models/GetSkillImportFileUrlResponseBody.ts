// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSkillImportFileUrlResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The Content-Type of the upload file.
   * 
   * @example
   * application/zip
   */
  contentType?: string;
  /**
   * @remarks
   * The maximum file size allowed for upload, in bytes.
   * 
   * @example
   * 10485760
   */
  maxSize?: string;
  /**
   * @remarks
   * The OSS object name.
   * 
   * @example
   * imports/example.zip
   */
  ossObjectName?: string;
  /**
   * @remarks
   * The OSS pre-signed upload URL.
   * 
   * @example
   * https://example.com/artifacts/example.zip
   */
  uploadUrl?: string;
  static names(): { [key: string]: string } {
    return {
      contentType: 'contentType',
      maxSize: 'maxSize',
      ossObjectName: 'ossObjectName',
      uploadUrl: 'uploadUrl',
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
   * The response data.
   */
  data?: GetSkillImportFileUrlResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A1B2C3D4-E5F6-47A8-90AB-CDEF12345678
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
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

