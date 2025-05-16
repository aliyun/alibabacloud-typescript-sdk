// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CheckSelectedDomainStatusResponseBodyModule } from "./CheckSelectedDomainStatusResponseBodyModule";


export class CheckSelectedDomainStatusResponseBody extends $dara.Model {
  /**
   * @example
   * OssFileNotFound
   */
  errorCode?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  module?: CheckSelectedDomainStatusResponseBodyModule;
  /**
   * @example
   * E2598CAF-DBFE-494E-95EF-B42A33C178AA
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      httpStatusCode: 'HttpStatusCode',
      module: 'Module',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      httpStatusCode: 'number',
      module: CheckSelectedDomainStatusResponseBodyModule,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.module && typeof (this.module as any).validate === 'function') {
      (this.module as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

