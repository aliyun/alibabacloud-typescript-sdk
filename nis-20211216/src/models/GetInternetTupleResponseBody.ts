// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetInternetTupleResponseBodyData } from "./GetInternetTupleResponseBodyData";


export class GetInternetTupleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ranking result of Internet traffic data.
   */
  data?: GetInternetTupleResponseBodyData[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D5E98683-355B-5867-8D3D-A24755F6895B
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
      data: { 'type': 'array', 'itemType': GetInternetTupleResponseBodyData },
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

