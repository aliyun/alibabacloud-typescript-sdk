// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateMmsDataSourceResponseBodyData } from "./UpdateMmsDataSourceResponseBodyData";


export class UpdateMmsDataSourceResponseBody extends $dara.Model {
  data?: UpdateMmsDataSourceResponseBodyData;
  /**
   * @example
   * 76CE80C8-7392-5591-BCC8-610AFBF78ADF
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
      data: UpdateMmsDataSourceResponseBodyData,
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

