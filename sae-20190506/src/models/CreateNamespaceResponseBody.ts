// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateNamespaceResponseBodyData } from "./CreateNamespaceResponseBodyData";


export class CreateNamespaceResponseBody extends $dara.Model {
  /**
   * @remarks
   * bucketPath
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The information about a namespace.
   */
  data?: CreateNamespaceResponseBodyData;
  /**
   * @remarks
   * http://sae_pop_pre/#vpc
   * 
   * @example
   * bucketName
   */
  errorCode?: string;
  /**
   * @remarks
   * The ID of the namespace.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The description of the custom namespace.
   * 
   * @example
   * 91F93257-7A4A-4BD3-9A7E-2F6EAE6D****
   */
  requestId?: string;
  /**
   * @remarks
   * mountDir
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The name of the namespace.
   * 
   * @example
   * 0a981dd515966966104121683d****
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateNamespaceResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
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

