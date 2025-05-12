// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetCreateBEClusterInquiryResponseBodyData } from "./GetCreateBeclusterInquiryResponseBodyData";


export class GetCreateBEClusterInquiryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information returned.
   */
  data?: GetCreateBEClusterInquiryResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 06758CAB-1204-5852-A471-29C87D5C1D0F
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
      data: GetCreateBEClusterInquiryResponseBodyData,
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

