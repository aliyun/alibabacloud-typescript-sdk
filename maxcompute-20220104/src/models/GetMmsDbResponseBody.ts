// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetMmsDbResponseBodyData } from "./GetMmsDbResponseBodyData";


export class GetMmsDbResponseBody extends $dara.Model {
  data?: GetMmsDbResponseBodyData;
  /**
   * @example
   * 90D64EB6-2962-5B1C-A039-BC41C8176C7F
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
      data: GetMmsDbResponseBodyData,
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

