// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAudioNoteUploadUrlResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The AccessKey ID used for signing.
   * 
   * @example
   * STS.NYMxfDw3GkXfvEmZHXXXXXX
   */
  accessKeyId?: string;
  /**
   * @remarks
   * The expiration time of the authorization.
   * 
   * @example
   * 2026-06-13T12:19:13Z
   */
  expire?: string;
  /**
   * @remarks
   * The storage path of the OSS file.
   * 
   * @example
   * audio/file/sample1
   */
  filePath?: string;
  /**
   * @remarks
   * The host address.
   * 
   * @example
   * //alicom-voice-ai-agent-xxxx.oss-cn-xxxx.aliyuncs.com
   */
  host?: string;
  /**
   * @remarks
   * The key of the OSS file.
   * 
   * @example
   * audio/file/sample1
   */
  key?: string;
  /**
   * @remarks
   * The maximum file size.
   * 
   * @example
   * 2560000
   */
  maxFileSize?: number;
  /**
   * @remarks
   * The HTTP method used for upload.
   * 
   * @example
   * POST
   */
  method?: string;
  /**
   * @remarks
   * The upload policy.
   * 
   * @example
   * text
   */
  policy?: string;
  /**
   * @remarks
   * The authorization licensing key.
   * 
   * @example
   * text
   */
  securityToken?: string;
  /**
   * @remarks
   * The signature of the temporary upload credential, used to verify legitimacy during upload.
   * 
   * @example
   * oss sig text
   */
  signature?: string;
  /**
   * @remarks
   * The upload URL.
   * 
   * @example
   * //alicom-voice-ai-agent-xxxx.oss-cn-xxxx.aliyuncs.com
   */
  uploadUrl?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
      expire: 'Expire',
      filePath: 'FilePath',
      host: 'Host',
      key: 'Key',
      maxFileSize: 'MaxFileSize',
      method: 'Method',
      policy: 'Policy',
      securityToken: 'SecurityToken',
      signature: 'Signature',
      uploadUrl: 'UploadUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      expire: 'string',
      filePath: 'string',
      host: 'string',
      key: 'string',
      maxFileSize: 'number',
      method: 'string',
      policy: 'string',
      securityToken: 'string',
      signature: 'string',
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

export class GetAudioNoteUploadUrlResponseBody extends $dara.Model {
  /**
   * @remarks
   * The detailed reason why access is denied.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: GetAudioNoteUploadUrlResponseBodyData;
  /**
   * @remarks
   * The status code description.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EE339D98-9BD3-4413-B165
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the API call is successful.
   * 
   * @example
   * false
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: GetAudioNoteUploadUrlResponseBodyData,
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

