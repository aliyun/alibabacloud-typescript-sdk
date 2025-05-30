// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListMmsDbsResponseBodyData } from "./ListMmsDbsResponseBodyData";


export class ListMmsDbsResponseBody extends $dara.Model {
  data?: ListMmsDbsResponseBodyData;
  /**
   * @example
   * CF3F9978-260F-5204-94BE-30A4E6B54443
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
      data: ListMmsDbsResponseBodyData,
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

