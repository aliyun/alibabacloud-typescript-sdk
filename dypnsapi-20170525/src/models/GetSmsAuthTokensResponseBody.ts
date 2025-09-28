// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSmsAuthTokensResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The business token.
   * 
   * @example
   * FZSMeRbLCiapIBo65NXNHvGbkGDmhs23XWTZDOtZN0g5n/kqSc2FU27Gc9YhGb6dNn9/L9ZXSYiIB6C6LMLQJjyXjRzt5v6pzZXqnjO4cSuPWYUxJvdc8l8OpucEYe8Mx17HxsHDzj0VC4D5+atcrTpJE6jQ7e2QVNjZIPMwsfxELjQS7c****
   */
  bizToken?: string;
  /**
   * @remarks
   * The time when the token expired. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1631526326000
   */
  expireTime?: number;
  /**
   * @remarks
   * The AccessKey ID.
   * 
   * @example
   * STS.NSqC****
   */
  stsAccessKeyId?: string;
  /**
   * @remarks
   * The AccessKey secret.
   * 
   * @example
   * VboZ4xbZ****
   */
  stsAccessKeySecret?: string;
  /**
   * @remarks
   * The security token.
   * 
   * @example
   * CAISiQJ1q6Ft5B2yfSjIr5DEDP/BurtW9PemMEfBrEpsOr5K17XjuDz2IHtLfXFsBusYt/U2nWpX5v4clrxIToR7SFbFY9pb6ZhazBisebDGv8HtR3TcFEjiSwapEBfe8JL4QYeQFaHwGJqEb1TDiVUAo9/TfimjWFqIKICAjYUdAP0cQgi/a0gtZr4UXHwAzvUXLnzML/2gHwf3i27LdipStxF7lHl05NbUoKTeyGKH3AGqlLVF9tite8f9NpczBvolDYfpht4RX7HazStd5yJN8KpLl6Fe8V/FxIrGXAAJv0rdbbOFq4Q1c18hOLJHAKtfsvXmlPNpsevfmpnsx****
   */
  stsToken?: string;
  static names(): { [key: string]: string } {
    return {
      bizToken: 'BizToken',
      expireTime: 'ExpireTime',
      stsAccessKeyId: 'StsAccessKeyId',
      stsAccessKeySecret: 'StsAccessKeySecret',
      stsToken: 'StsToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizToken: 'string',
      expireTime: 'number',
      stsAccessKeyId: 'string',
      stsAccessKeySecret: 'string',
      stsToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSmsAuthTokensResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * *   If OK is returned, the request is successful.
   * *   For more information about other error codes, see [API response codes](https://help.aliyun.com/document_detail/85198.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The response parameters.
   */
  data?: GetSmsAuthTokensResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8906582E-6722
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetSmsAuthTokensResponseBodyData,
      message: 'string',
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

