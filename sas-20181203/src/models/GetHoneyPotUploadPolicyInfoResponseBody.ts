// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHoneyPotUploadPolicyInfoResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The key ID that is required for the file upload.
   * 
   * @example
   * yourAccessKeyID
   */
  accessid?: string;
  /**
   * @remarks
   * The expiration time of the URL. The value is a timestamp. You can use the value to determine whether the URL expires. If the expiration time arrives, you can no longer use the URL to upload files.
   * 
   * @example
   * 1661443200000
   */
  expire?: string;
  /**
   * @remarks
   * The request URL during the upload.
   * 
   * @example
   * https://aegis-update-static-file.oss-cn-hangzhou.aliyuncs.com
   */
  host?: string;
  /**
   * @remarks
   * The full path of the file in OSS. The file is uploaded by calling the OSS PostObject operation.
   * 
   * @example
   * HONEYPOT_FILE/1766185894104675_169********
   */
  key?: string;
  /**
   * @remarks
   * The limits that are imposed on the file upload. The limits include the file size.
   * 
   * @example
   * eyJleHBpcmF0aW9uIjoiMjAyMy0wOS0wMVQwMzoyNTozNS44MzZaIiwiY29uZGl0aW9ucyI6W1siY29udGVudC1sZW5ndGgtcmFuZ2UiLDAsMTA0ODU3NjAwXSxbInN0YXJ0cy13aXRoIiwiJGtleSIsIkhPTkVZUE9UX0ZJTEUvMTc2NjE4NTg5NDEwNDY3NV8xNjkzNTM4NDM1N*****************
   */
  policy?: string;
  /**
   * @remarks
   * The security token.
   * 
   * @example
   * ***
   */
  securityToken?: string;
  /**
   * @remarks
   * The signature that is calculated based on **AccessKeySecret** and **Policy**. When you call an Object Storage Service (OSS) API operation, OSS uses the signature information to verify the POST request.
   * 
   * @example
   * wKPqlFneNTZPn52k2Rz9GTY*****
   */
  signature?: string;
  static names(): { [key: string]: string } {
    return {
      accessid: 'Accessid',
      expire: 'Expire',
      host: 'Host',
      key: 'Key',
      policy: 'Policy',
      securityToken: 'SecurityToken',
      signature: 'Signature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessid: 'string',
      expire: 'string',
      host: 'string',
      key: 'string',
      policy: 'string',
      securityToken: 'string',
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

export class GetHoneyPotUploadPolicyInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: GetHoneyPotUploadPolicyInfoResponseBodyData;
  /**
   * @remarks
   * The HTTP status code that is returned.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8C177095-A734-59B2-9409-7D4F26FF****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetHoneyPotUploadPolicyInfoResponseBodyData,
      httpStatusCode: 'number',
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

