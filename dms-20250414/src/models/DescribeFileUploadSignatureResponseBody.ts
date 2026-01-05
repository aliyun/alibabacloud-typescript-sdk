// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFileUploadSignatureResponseBodyData extends $dara.Model {
  ossCredential?: string;
  /**
   * @example
   * 20260101T135341Z
   */
  ossDate?: string;
  /**
   * @example
   * CAIS4gJ1q6Ft5B2yfSjIr5vPHMj4p+lHx/utUUjg13ptZ+5u3oDzkzz2IHhMdXlrCOgYt/8xnG1V6f8flrJ/ToQAX0HfatZq5ZkS9AqnaoXM/te496IFg5D9y7dIs8GgjqHoeOzcYI73WJXEMiLp9EJaxb/9ak/RPTiMOoGIjphKd8keWhLCAxNNGNZRIHkJyqZYTwyzU8ygKRn3mGHdIVN1sw5n8wNF5L+439eX52i17jS46JdM/9ysesH5NpQxbMwkDYnk5oEsKPqdihw3wgNR6aJ7gJZD/Tr6pdyHCzFTmU7ea7uEqYw3clYiOPBnRvEd8eKPnPl5q/HVm4Hs0wxKNuxOSCXZS4yp3MLeH+ekJgOGwWFHz9qnOLmtQXqV22tMCRpzXIj6Zlmz+/reI6iNW+Ory74mxSFbrz3ZP4yv+o+Yv3QbMVumcySkKVbBbVvnv0R8GNsIC2lMUbp+rfShhfFuG2QagAECCyigwAlSAryrFmteD+EVuvxvi0NE7zDJLbUkhek6dcY+/u5V5jcmvL67CQ7bTNk+9lV8WDCvtoCD9ucqTaHweJEd8fS2DaFedAMDf8BfZa2C1CTLhVXdSgE2WORYbMqidelRm7dH3fTbZVvryWKDaveDRLt5J/Qfs**********
   */
  ossSecurityToken?: string;
  /**
   * @example
   * 9bebe0900716bdefaab899781c7bdfd614ec6ed711e0de5ddf6f5a**********
   */
  ossSignature?: string;
  /**
   * @example
   * OSS4-HMAC-SHA256
   */
  ossSignatureVersion?: string;
  /**
   * @example
   * eyJjb25kaXRpb25zIjpbeyJ4LW9zcy1jcmVkZW50aWFsIjoiU1RTLk5YeldyTEo2ZnA5RlNuUTN6OGthQjFFWH**********
   */
  policy?: string;
  uploadDir?: string;
  /**
   * @example
   * https://**********.oss-cn-hangzhou.aliyuncs.com
   */
  uploadHost?: string;
  static names(): { [key: string]: string } {
    return {
      ossCredential: 'OssCredential',
      ossDate: 'OssDate',
      ossSecurityToken: 'OssSecurityToken',
      ossSignature: 'OssSignature',
      ossSignatureVersion: 'OssSignatureVersion',
      policy: 'Policy',
      uploadDir: 'UploadDir',
      uploadHost: 'UploadHost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ossCredential: 'string',
      ossDate: 'string',
      ossSecurityToken: 'string',
      ossSignature: 'string',
      ossSignatureVersion: 'string',
      policy: 'string',
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

export class DescribeFileUploadSignatureResponseBody extends $dara.Model {
  data?: DescribeFileUploadSignatureResponseBodyData;
  /**
   * @example
   * success
   */
  errorCode?: string;
  /**
   * @example
   * Specified parameter Tid is not valid.
   */
  errorMessage?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 0FEE5834-C55A-5995-A6A3-B443304965BD
   */
  requestId?: string;
  /**
   * @example
   * true
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
      data: DescribeFileUploadSignatureResponseBodyData,
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

