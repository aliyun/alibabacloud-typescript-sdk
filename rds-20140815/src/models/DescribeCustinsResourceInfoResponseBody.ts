// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCustinsResourceInfoResponseBodyData } from "./DescribeCustinsResourceInfoResponseBodyData";


export class DescribeCustinsResourceInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: DescribeCustinsResourceInfoResponseBodyData[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D4D4BE8A-DD46-440A-BFCD-EE31DA81C9DD
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
      data: { 'type': 'array', 'itemType': DescribeCustinsResourceInfoResponseBodyData },
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

