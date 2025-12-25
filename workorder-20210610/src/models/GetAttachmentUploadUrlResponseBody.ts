// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAttachmentUploadUrlResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Query the signed URL of an OSS object
   * 
   * @example
   * https://gts-workorder-pre.oss-cn-beijing.aliyuncs.com
   * /20220314/cabb80c3-430b-4079-a9f2-d2a0d1c2a587.png?Expires=1647328689&OSSAccessKeyId=LTAI****************&Signature=AbSEh26G3oYrJ8ivr4B0xzF89zk%3D
   */
  getSignedUrl?: string;
  /**
   * @remarks
   * Uploaded file identifier
   * 
   * @example
   * cdb5d174-c282-4b2d-9048-e74ea2223127.jpg
   */
  objectKey?: string;
  /**
   * @remarks
   * The signed URL used to upload the object to OSS.
   * 
   * @example
   * https://gts-workorder-pre.oss-cn-beijing.aliyuncs.com
   * /20220314/cabb80c3-430b-4079-a9f2-d2a0d1c2a587.png?Expires=1647328689&OSSAccessKeyId=LTAI****************&Signature=AbSEh26G3oYrJ8ivr4B0xzF89zk%3D
   */
  putSignedUrl?: string;
  static names(): { [key: string]: string } {
    return {
      getSignedUrl: 'GetSignedUrl',
      objectKey: 'ObjectKey',
      putSignedUrl: 'PutSignedUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      getSignedUrl: 'string',
      objectKey: 'string',
      putSignedUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAttachmentUploadUrlResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The data returned after the call succeeds.
   */
  data?: GetAttachmentUploadUrlResponseBodyData;
  /**
   * @remarks
   * The error message. If success is set to false, the message is returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ED195C2C-787F-511C-8204-714456781861
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. A value of true indicates that the call is normal.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetAttachmentUploadUrlResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

