// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetPreSignedUrlForObjectResult } from "./GetPreSignedUrlForObjectResult";


export class GetPreSignedUrlForPutObjectResponseBody extends $dara.Model {
  data?: GetPreSignedUrlForObjectResult;
  /**
   * @example
   * 990301
   */
  errorCode?: string;
  /**
   * @example
   * 文件不存在
   */
  errorMessage?: string;
  /**
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @example
   * 1234567890
   */
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      httpCode: 'httpCode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetPreSignedUrlForObjectResult,
      errorCode: 'string',
      errorMessage: 'string',
      httpCode: 'number',
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

