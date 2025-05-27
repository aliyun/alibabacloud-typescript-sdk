// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetCapacityResponseBodyData } from "./GetCapacityResponseBodyData";


export class GetCapacityResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the storage capacity.
   */
  data?: GetCapacityResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 27D27DCB-D76B-5064-8B3B-0900DEF7****
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
      data: GetCapacityResponseBodyData,
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

