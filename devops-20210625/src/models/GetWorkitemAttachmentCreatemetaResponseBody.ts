// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWorkitemAttachmentCreatemetaResponseBodyUploadInfo extends $dara.Model {
  /**
   * @example
   * xxxxxxx
   */
  accessid?: string;
  /**
   * @example
   * ddd/dddd
   */
  dir?: string;
  /**
   * @example
   * xxxxx
   */
  host?: string;
  /**
   * @example
   * xxxxxxx
   */
  policy?: string;
  /**
   * @example
   * xdWcrl/yTmIUA0kE7a3B0Ox4Vu8=
   */
  signature?: string;
  static names(): { [key: string]: string } {
    return {
      accessid: 'accessid',
      dir: 'dir',
      host: 'host',
      policy: 'policy',
      signature: 'signature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessid: 'string',
      dir: 'string',
      host: 'string',
      policy: 'string',
      signature: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkitemAttachmentCreatemetaResponseBody extends $dara.Model {
  /**
   * @example
   * Invalid.IdNotFound
   */
  errorCode?: string;
  /**
   * @example
   * Forbidden.UserNotInCurrentOrganization
   */
  errorMessage?: string;
  /**
   * @example
   * ASSDS-ASSASX-XSAXSA-XSAXSAXS
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: string;
  uploadInfo?: GetWorkitemAttachmentCreatemetaResponseBodyUploadInfo;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      requestId: 'requestId',
      success: 'success',
      uploadInfo: 'uploadInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'string',
      uploadInfo: GetWorkitemAttachmentCreatemetaResponseBodyUploadInfo,
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

