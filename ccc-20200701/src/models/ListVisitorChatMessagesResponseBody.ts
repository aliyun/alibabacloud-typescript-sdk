// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListVisitorChatMessagesResponseBodyData } from "./ListVisitorChatMessagesResponseBodyData";


export class ListVisitorChatMessagesResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  data?: ListVisitorChatMessagesResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 8707EB29-BAED-4302-B999-40BA61877437
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListVisitorChatMessagesResponseBodyData,
      httpStatusCode: 'number',
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

