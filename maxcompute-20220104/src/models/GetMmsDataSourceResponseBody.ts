// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetMmsDataSourceResponseBodyData } from "./GetMmsDataSourceResponseBodyData";


export class GetMmsDataSourceResponseBody extends $dara.Model {
  data?: GetMmsDataSourceResponseBodyData;
  /**
   * @example
   * 98EC8C47-3D6D-560C-808B-84E494220A32
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
      data: GetMmsDataSourceResponseBodyData,
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

