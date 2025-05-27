// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetStorageResponseBodyData } from "./GetStorageResponseBodyData";


export class GetStorageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the storage.
   */
  data?: GetStorageResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 97A31C3A-3F9F-5866-8979-5159E3DC****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetStorageResponseBodyData,
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

