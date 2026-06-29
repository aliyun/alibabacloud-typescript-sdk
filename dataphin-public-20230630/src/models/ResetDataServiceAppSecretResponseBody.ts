// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResetDataServiceAppSecretResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The new application key
   * 
   * @example
   * 200000001
   */
  appKey?: string;
  /**
   * @remarks
   * The new application secret
   * 
   * @example
   * abc123456789
   */
  appSecret?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      appSecret: 'AppSecret',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'string',
      appSecret: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetDataServiceAppSecretResponseBody extends $dara.Model {
  /**
   * @remarks
   * Backend response code
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * Reset Data Service application key result
   */
  data?: ResetDataServiceAppSecretResponseBodyData;
  /**
   * @remarks
   * HTTP status code
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Backend exception details
   * 
   * @example
   * internal error
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 82E78D6B-AA8F-1FEF-8AA3-5C9DA2A79140
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful
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
      data: ResetDataServiceAppSecretResponseBodyData,
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

