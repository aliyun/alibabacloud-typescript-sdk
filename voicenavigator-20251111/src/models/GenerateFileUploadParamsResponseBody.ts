// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateFileUploadParamsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The AccessKey ID used to generate the signature.
   * 
   * @example
   * STS.NYGg9ejEjYqySx3EsuRutagbd
   */
  accessKeyId?: string;
  /**
   * @remarks
   * The AccessKey Secret used to authorize the OSS file upload.
   * 
   * @example
   * DGhwedF4SsbsqUMfzNBCjZFLJZSAdhiSE4hFPbKMm6JE
   */
  accessKeySecret?: string;
  /**
   * @remarks
   * The name of the OSS bucket.
   * 
   * @example
   * cab
   */
  bucket?: string;
  /**
   * @remarks
   * The expiration time of the upload credentials.
   * 
   * @example
   * 1774794266093
   */
  expirationTime?: number;
  /**
   * @remarks
   * The object key for the uploaded file.
   * 
   * @example
   * vocabulary/B678CA67-C8CB-150C-AD7F-6FA7F0A811BA_热词导入模版 (7).zip
   */
  fileKey?: string;
  /**
   * @remarks
   * The OSS endpoint.
   * 
   * @example
   * http://cab.oss-cn-hangzhou.aliyuncs.com
   */
  host?: string;
  /**
   * @remarks
   * The policy used to validate the request form fields.
   * 
   * @example
   * eyJleHBpcmF0aW9uIjoiMjAyNi0wMy0yOVQxMzoyNDoyNi4yMDNaIiwiY29uZGl0aW9ucyI6W239
   */
  policy?: string;
  /**
   * @remarks
   * The region.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The security token.
   * 
   * @example
   * CAISzwJ1q6Ft5B2yfSjIr5ryLIjRh5pL7rOSUV6CoXMgXvpYjqLJhjz2IHhMfnlvB+gYsfU2m2xR5/Yclrp6SJtIXleCZtF94oxN9h2gb4fb42Jqag+/08/LI3OaLjKm9u2wCryLYbGwU/OpbE++5U0X6LDmdDKkckW4OJmS8/BOZcgWWQ/KBlgvRq0hRG1YpdQdKGHaONu0LxfumRCwNkdzvRdmgm4NgsbWgO/ks0GG3ASmlrFF+9mufMb5M/MBZskvD42Hu8VtbbfE3SJq7BxHybx7lqQs+02c5onHUwYPu0vZYrOLroQ+fFFjHKMzDdtPq/7ylPI9ofDamIXxxAarin3kufQeLmrJ4LwneIvBXr5RHd5wa2rbWAEsmLNBEhL2EJMKtT476hcbIAuUI3bC5F+kxOHp9i6ErImtRWbLssUUla4R5TGOWbLJWzkTH93xuRqAAapuIRuRt0d2Odr1hsaYukMd42UkNapdTrehzmXeR6lyv1jlLmkAHve9Cbl9N5bO3A96FSlEfjHksQBWG0CEXRm3jLW41bpR00dgnM6gpOj7lRW2z33L0dTtaRw79X3+Uqz3gv9md5QvoaVi1jnr/cFRNxbjl7DI39pdcGlTI2lqIAA=
   */
  securityToken?: string;
  /**
   * @remarks
   * The signature calculated from the **AccessKey Secret** and **policy**. OSS uses this signature to authenticate the request.
   * 
   * @example
   * 6oETypl+gbYHwbgcwnQiyDYoQbA=
   */
  signature?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
      accessKeySecret: 'AccessKeySecret',
      bucket: 'Bucket',
      expirationTime: 'ExpirationTime',
      fileKey: 'FileKey',
      host: 'Host',
      policy: 'Policy',
      region: 'Region',
      securityToken: 'SecurityToken',
      signature: 'Signature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      accessKeySecret: 'string',
      bucket: 'string',
      expirationTime: 'number',
      fileKey: 'string',
      host: 'string',
      policy: 'string',
      region: 'string',
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

export class GenerateFileUploadParamsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The parameters for uploading the file.
   */
  data?: GenerateFileUploadParamsResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * Instance af81a389-91f0-4157-8d82-720edd02b66a
   *  does not exist.
   */
  message?: string;
  /**
   * @remarks
   * A list of parameters for the error message.
   */
  params?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F132DDBA-66C4-5BD3-BF7E-9642FE877158
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      params: 'Params',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GenerateFileUploadParamsResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      params: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    if(Array.isArray(this.params)) {
      $dara.Model.validateArray(this.params);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

