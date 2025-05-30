// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetTableInfoResponseBodyData } from "./GetTableInfoResponseBodyData";


export class GetTableInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: GetTableInfoResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0a06dd4516687375802853481ec9fd
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
      data: GetTableInfoResponseBodyData,
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

