// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSDGsResponseBodySDGs } from "./DescribeSdgsResponseBodySdgs";


export class DescribeSDGsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3703C4AC-9396-458C-8F25-1D701334D309
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the SDGs.
   */
  SDGs?: DescribeSDGsResponseBodySDGs[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      SDGs: 'SDGs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      SDGs: { 'type': 'array', 'itemType': DescribeSDGsResponseBodySDGs },
    };
  }

  validate() {
    if(Array.isArray(this.SDGs)) {
      $dara.Model.validateArray(this.SDGs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

