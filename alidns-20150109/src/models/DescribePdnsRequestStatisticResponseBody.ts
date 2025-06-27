// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribePdnsRequestStatisticResponseBodyData } from "./DescribePdnsRequestStatisticResponseBodyData";


export class DescribePdnsRequestStatisticResponseBody extends $dara.Model {
  /**
   * @remarks
   * The statistics on the DNS requests.
   */
  data?: DescribePdnsRequestStatisticResponseBodyData[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 536E9CAD-DB30-4647-AC87-AA5CC38C5382
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
      data: { 'type': 'array', 'itemType': DescribePdnsRequestStatisticResponseBodyData },
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

