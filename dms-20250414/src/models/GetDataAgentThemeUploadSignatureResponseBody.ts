// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataAgentThemeUploadSignatureResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The policy expiration time in ISO 8601 UTC format.
   * 
   * @example
   * 2026-01-01T14:53:41Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The target object key, which is exactly locked by the policy.
   */
  objectKey?: string;
  /**
   * @remarks
   * The parameter set that specifies the derived key.
   */
  ossCredential?: string;
  /**
   * @remarks
   * The signature time in the format of yyyyMMdd\\"T\\"HHmmss\\"Z\\".
   * 
   * @example
   * 20260101T135341Z
   */
  ossDate?: string;
  /**
   * @remarks
   * The STS token used to upload files to OSS. The token is valid for 1 hour.
   * 
   * @example
   * CAIS4gJ1q6Ft5B2yfSjIr5vPHMj4p+lHx/utUUjg13ptZ+5u3oDzkzz2IHhMdXlrCOgYt/8xnG1V6f8flrJ/ToQAX0HfatZq5ZkS9AqnaoXM/te496IFg5D9y7dIs8GgjqHoeOzcYI73WJXEMiLp9EJaxb/9ak/RPTiMOoGIjphKd8keWhLCAxNNGNZRIHkJyqZYTwyzU8ygKRn3mGHdIVN1sw5n8wNF5L+439eX52i17jS46JdM/9ysesH5NpQxbMwkDYnk5oEsKPqdihw3wgNR6aJ7gJZD/Tr6pdyHCzFTmU7ea7uEqYw3clYiOPBnRvEd8eKPnPl5q/HVm2Hs0wxKNuxOSCXZS4yp3MLeH+ekJgOGwWFHz9qnOLmtQXqV22tMCRpzXIj6Zlmz+/reI6iNW+Ory74mxSFbrz3ZP4yv+o+Yv3QbMVumcySkKVbBbVvnv0R8GNsIC2lMUbp+rfShhfFuG2QagAECCyigwAlSAryrFmteD+EVuvxvi0NE7zDJLbUkhek6dcY+/u5V5jcmvL67cQ7bTNk+9lV8WDCvtoCD9ucqTaHweJEd8fS2DaFedAMDf8BfZa2C1CTLhVXdSgE2WORYbMqidelRm7dH3fTbZVvryWKDaveDRLt5J/Qfs**********
   */
  ossSecurityToken?: string;
  /**
   * @remarks
   * The V4 signature value.
   * 
   * @example
   * 9bebe0900716bdefaab899781c7bdfd614ec6ed711e0de5ddf6f5a**********
   */
  ossSignature?: string;
  /**
   * @remarks
   * The signature version. The value is fixed as OSS4-HMAC-SHA256.
   * 
   * @example
   * OSS4-HMAC-SHA256
   */
  ossSignatureVersion?: string;
  /**
   * @remarks
   * The Base64-encoded value of the policy JSON.
   * 
   * @example
   * eyJjb25kaXRpb25zIjpbeyJ4LW9zcy1jcmVkZW50aWFsIjoiU1RTLk5YeldyTEo2ZnA5RlNuUTN6OGthQjFFWH**********
   */
  policy?: string;
  /**
   * @remarks
   * The theme business identifier generated or reused for this request. Pass this identifier to the CreateDataAgentTheme operation after the upload is complete to register the metadata.
   * 
   * @example
   * 0f8b2c1d****a3e5f7b1c2d
   */
  themeId?: string;
  /**
   * @remarks
   * The upload directory prefix.
   */
  uploadDir?: string;
  /**
   * @remarks
   * The PostObject destination address over the public network.
   * 
   * @example
   * https://**********.oss-cn-hangzhou.aliyuncs.com
   */
  uploadHost?: string;
  static names(): { [key: string]: string } {
    return {
      expireTime: 'ExpireTime',
      objectKey: 'ObjectKey',
      ossCredential: 'OssCredential',
      ossDate: 'OssDate',
      ossSecurityToken: 'OssSecurityToken',
      ossSignature: 'OssSignature',
      ossSignatureVersion: 'OssSignatureVersion',
      policy: 'Policy',
      themeId: 'ThemeId',
      uploadDir: 'UploadDir',
      uploadHost: 'UploadHost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expireTime: 'string',
      objectKey: 'string',
      ossCredential: 'string',
      ossDate: 'string',
      ossSecurityToken: 'string',
      ossSignature: 'string',
      ossSignatureVersion: 'string',
      policy: 'string',
      themeId: 'string',
      uploadDir: 'string',
      uploadHost: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataAgentThemeUploadSignatureResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response struct.
   */
  data?: GetDataAgentThemeUploadSignatureResponseBodyData;
  /**
   * @remarks
   * The error code returned when the request fails.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned when the call fails.
   * 
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * The request ID, which is used to locate logs and troubleshoot issues.
   * 
   * @example
   * 67E910F2-4B62-5B0C-ACA3-7547695C****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - **true**: The request was successful.
   * - **false**: The request failed.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetDataAgentThemeUploadSignatureResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
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

