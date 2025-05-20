// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetGwpInventorySummaryResponseBodyData } from "./GetGwpInventorySummaryResponseBodyData";


export class GetGwpInventorySummaryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned results.
   */
  data?: GetGwpInventorySummaryResponseBodyData;
  /**
   * @remarks
   * The ID of the request. The value is unique for each request. This facilitates subsequent troubleshooting.
   * 
   * @example
   * 83A5A7DD-8974-5769-952E-590A97BEA34E
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
      data: GetGwpInventorySummaryResponseBodyData,
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

