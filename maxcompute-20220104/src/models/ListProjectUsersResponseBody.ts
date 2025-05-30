// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListProjectUsersResponseBodyData } from "./ListProjectUsersResponseBodyData";


export class ListProjectUsersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: ListProjectUsersResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0b87b7b316643495896551555e855b
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListProjectUsersResponseBodyData,
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

