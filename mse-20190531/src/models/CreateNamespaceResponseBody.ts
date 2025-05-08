// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateNamespaceResponseBodyData } from "./CreateNamespaceResponseBodyData";


export class CreateNamespaceResponseBody extends $dara.Model {
  data?: CreateNamespaceResponseBodyData;
  /**
   * @example
   * mse-100-000
   */
  errorCode?: string;
  message?: string;
  /**
   * @example
   * D1F1A6F3-7E03-5EAD-B3F1-123456789ABC
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
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateNamespaceResponseBodyData,
      errorCode: 'string',
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

