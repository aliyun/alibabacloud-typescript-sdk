// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWorkitemAttachmentsResponseBodyAttachments extends $dara.Model {
  /**
   * @example
   * 237109
   */
  creator?: string;
  /**
   * @example
   * dflkjlsdddsdl234lkjfg
   */
  fileIdentifier?: string;
  /**
   * @example
   * Artifacts_1565193_1.tgz
   */
  fileName?: string;
  /**
   * @example
   * tgz
   */
  fileSuffix?: string;
  /**
   * @example
   * 1545726028000
   */
  gmtCreate?: number;
  /**
   * @example
   * 50
   */
  size?: string;
  /**
   * @example
   * http://grace-share.oss-cn-hangzhou.aliyuncs.com/qf%2Fheap.bin?Expires=1675750082&OSSAccessKeyId=LTAI5t8irN2Wu3BGrBpffZue&Signature=RqRUEuHiwW8wuahYz6CenHaWWs4%3D
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      creator: 'creator',
      fileIdentifier: 'fileIdentifier',
      fileName: 'fileName',
      fileSuffix: 'fileSuffix',
      gmtCreate: 'gmtCreate',
      size: 'size',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creator: 'string',
      fileIdentifier: 'string',
      fileName: 'string',
      fileSuffix: 'string',
      gmtCreate: 'number',
      size: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkitemAttachmentsResponseBody extends $dara.Model {
  attachments?: ListWorkitemAttachmentsResponseBodyAttachments[];
  /**
   * @example
   * SYSTEM_UNKNOWN_ERROR
   */
  errorCode?: string;
  /**
   * @example
   * error
   */
  errorMsg?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * F7B85D1B-D1C2-140F-A039-341859F130B9
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      attachments: 'attachments',
      errorCode: 'errorCode',
      errorMsg: 'errorMsg',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachments: { 'type': 'array', 'itemType': ListWorkitemAttachmentsResponseBodyAttachments },
      errorCode: 'string',
      errorMsg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.attachments)) {
      $dara.Model.validateArray(this.attachments);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

