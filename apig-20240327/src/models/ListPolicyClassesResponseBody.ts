// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListPolicyClassesResponseBodyData } from "./ListPolicyClassesResponseBodyData";


export class ListPolicyClassesResponseBody extends $dara.Model {
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
   * Policy template information.
   */
  data?: ListPolicyClassesResponseBodyData;
  /**
   * @remarks
   * ResponseMessage
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 23B45FA9-7208-5E55-B5CE-B6B2567DD822
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
      data: ListPolicyClassesResponseBodyData,
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

