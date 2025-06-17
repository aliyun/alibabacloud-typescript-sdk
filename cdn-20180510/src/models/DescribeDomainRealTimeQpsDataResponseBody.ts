// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDomainRealTimeQpsDataResponseBodyData } from "./DescribeDomainRealTimeQpsDataResponseBodyData";


export class DescribeDomainRealTimeQpsDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data entries returned.
   */
  data?: DescribeDomainRealTimeQpsDataResponseBodyData;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 32DC9806-E9F9-4490-BBDC-B3A9E32FCC1D
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
      data: DescribeDomainRealTimeQpsDataResponseBodyData,
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

