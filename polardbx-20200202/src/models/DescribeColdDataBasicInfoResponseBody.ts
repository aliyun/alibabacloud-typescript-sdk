// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeColdDataBasicInfoResponseBodyData } from "./DescribeColdDataBasicInfoResponseBodyData";


export class DescribeColdDataBasicInfoResponseBody extends $dara.Model {
  data?: DescribeColdDataBasicInfoResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeColdDataBasicInfoResponseBodyData,
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

