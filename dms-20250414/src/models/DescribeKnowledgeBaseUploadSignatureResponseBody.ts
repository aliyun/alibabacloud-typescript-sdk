// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeKnowledgeBaseUploadSignatureResponseBodyData extends $dara.Model {
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
   * eyJjb25kaXRpb25zIjpbeyJ4LW9zcy1jcmVkZW50aWFsIjoiU1RTLk5aRmR2RDJRWlFSeWlwZmpkS295NEYxb2ovMjAyNjA1MTQvY24taGFuZ3pob3Uvb3NzL2FsaXl1bl92NF9yZXF1ZXN0In0seyJ4LW9zcy1kYXRlIjoiMjAyNjA1MTRUMDMzMjI3WiJ9LHsieC1vc3Mtc2VjdXJpdHktdG9rZW4iOiJDQUlTMmdKMXE2RnQ1QjJ5ZlNqSXI1bnpMOHp3MzQ1NzVwQ1NhMWJYam1RZVkvWVlxZlRFaUR6MklIaE1**
   */
  policy?: string;
  uploadDir?: string;
  /**
   * @example
   * https://onemeta-kb-staging.oss-cn-hangzhou.aliyuncs.com
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

export class DescribeKnowledgeBaseUploadSignatureResponseBody extends $dara.Model {
  data?: DescribeKnowledgeBaseUploadSignatureResponseBodyData;
  /**
   * @example
   * KnowledgeBaseNotFound
   */
  errorCode?: string;
  /**
   * @example
   * Resource not found xxx
   */
  errorMessage?: string;
  /**
   * @example
   * 67E910F2-4B62-5B0C-ACA3-7547695C****
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
      data: DescribeKnowledgeBaseUploadSignatureResponseBodyData,
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

