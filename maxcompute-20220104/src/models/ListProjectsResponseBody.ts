// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListProjectsResponseBodyData } from "./ListProjectsResponseBodyData";


export class ListProjectsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: ListProjectsResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0b16399216671970335563173e2340
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
      data: ListProjectsResponseBodyData,
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

