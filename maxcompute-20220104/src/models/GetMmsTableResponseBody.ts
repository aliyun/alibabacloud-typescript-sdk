// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetMmsTableResponseBodyData } from "./GetMmsTableResponseBodyData";


export class GetMmsTableResponseBody extends $dara.Model {
  data?: GetMmsTableResponseBodyData;
  /**
   * @example
   * E7FB14F1-4ACD-5C73-A755-B302D70AB9AD
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
      data: GetMmsTableResponseBodyData,
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

