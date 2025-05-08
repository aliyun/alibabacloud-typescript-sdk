// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryNamespaceResponseBodyData } from "./QueryNamespaceResponseBodyData";


export class QueryNamespaceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: QueryNamespaceResponseBodyData[];
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * Success
   */
  errorCode?: string;
  message?: string;
  /**
   * @example
   * abcde-fg
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
      data: { 'type': 'array', 'itemType': QueryNamespaceResponseBodyData },
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

