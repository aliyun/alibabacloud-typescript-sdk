// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListResourcesResponseBodyData } from "./ListResourcesResponseBodyData";


export class ListResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: ListResourcesResponseBodyData;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0bc3b4ae16685836687916212e7850
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
      data: ListResourcesResponseBodyData,
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

