// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTextbookAssistantBooksResponseBodyData } from "./ListTextbookAssistantBooksResponseBodyData";


export class ListTextbookAssistantBooksResponseBody extends $dara.Model {
  data?: ListTextbookAssistantBooksResponseBodyData;
  /**
   * @example
   * B_USER_NOT_FOUND_EXCEPTION
   */
  errCode?: string;
  errMessage?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * B695B377-7029-5805-9DE2-1AAE06C1BF6B
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errCode: 'errCode',
      errMessage: 'errMessage',
      httpStatusCode: 'httpStatusCode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListTextbookAssistantBooksResponseBodyData,
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
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

