// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSensitiveOutboundDistributionResponseBodyData } from "./DescribeSensitiveOutboundDistributionResponseBodyData";


export class DescribeSensitiveOutboundDistributionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The traffic distribution of personal information records involved in cross-border data transfer.
   */
  data?: DescribeSensitiveOutboundDistributionResponseBodyData[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D7861F61-5B61-46CE-A47C-6B19160D5EB0
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
      data: { 'type': 'array', 'itemType': DescribeSensitiveOutboundDistributionResponseBodyData },
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

