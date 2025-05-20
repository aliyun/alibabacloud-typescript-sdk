// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateChatSessionResponseBodyData } from "./CreateChatSessionResponseBodyData";


export class CreateChatSessionResponseBody extends $dara.Model {
  /**
   * @remarks
   * Returned data structure.
   */
  data?: CreateChatSessionResponseBodyData;
  /**
   * @remarks
   * ID of the request
   * 
   * @example
   * 9bc20a5a-b26b-4c28-922a-7cd10b61f96f
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
      data: CreateChatSessionResponseBodyData,
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

