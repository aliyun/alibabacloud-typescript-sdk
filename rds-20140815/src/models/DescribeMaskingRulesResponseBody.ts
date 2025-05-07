// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeMaskingRulesResponseBodyData } from "./DescribeMaskingRulesResponseBodyData";


export class DescribeMaskingRulesResponseBody extends $dara.Model {
  data?: DescribeMaskingRulesResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeMaskingRulesResponseBodyData,
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

