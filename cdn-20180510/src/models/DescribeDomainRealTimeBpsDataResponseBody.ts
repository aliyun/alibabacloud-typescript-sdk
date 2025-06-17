// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDomainRealTimeBpsDataResponseBodyData } from "./DescribeDomainRealTimeBpsDataResponseBodyData";


export class DescribeDomainRealTimeBpsDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: DescribeDomainRealTimeBpsDataResponseBodyData;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B49E6DDA-F413-422B-B58E-2FA23F286726
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
      data: DescribeDomainRealTimeBpsDataResponseBodyData,
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

