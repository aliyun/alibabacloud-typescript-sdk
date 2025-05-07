// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeFreeUserEventTypesResponseBodyData } from "./DescribeFreeUserEventTypesResponseBodyData";


export class DescribeFreeUserEventTypesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The types of security events on which basic detection is performed.
   */
  data?: DescribeFreeUserEventTypesResponseBodyData[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B9D6AD11-DD3D-5A27-B1D9-8A37F7777196
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
      data: { 'type': 'array', 'itemType': DescribeFreeUserEventTypesResponseBodyData },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

