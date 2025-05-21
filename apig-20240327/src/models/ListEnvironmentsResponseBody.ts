// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListEnvironmentsResponseBodyData } from "./ListEnvironmentsResponseBodyData";


export class ListEnvironmentsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response code.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * Paged query environment list response.
   */
  data?: ListEnvironmentsResponseBodyData;
  /**
   * @remarks
   * Response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID, used for tracing the call chain.
   * 
   * @example
   * CE857A85-251D-5018-8103-A38957D71E20
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListEnvironmentsResponseBodyData,
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

