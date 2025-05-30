// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListUsersResponseBodyData } from "./ListUsersResponseBodyData";


export class ListUsersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: ListUsersResponseBodyData;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0a06dd4816687424611405643e3730
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
      data: ListUsersResponseBodyData,
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

