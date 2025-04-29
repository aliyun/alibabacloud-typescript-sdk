// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeUpdateVpcInfoTaskResponseBodyApiUpdateVpcInfoResults } from "./DescribeUpdateVpcInfoTaskResponseBodyApiUpdateVpcInfoResults";


export class DescribeUpdateVpcInfoTaskResponseBody extends $dara.Model {
  apiUpdateVpcInfoResults?: DescribeUpdateVpcInfoTaskResponseBodyApiUpdateVpcInfoResults;
  /**
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876FF7BZ015
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      apiUpdateVpcInfoResults: 'ApiUpdateVpcInfoResults',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiUpdateVpcInfoResults: DescribeUpdateVpcInfoTaskResponseBodyApiUpdateVpcInfoResults,
      requestId: 'string',
    };
  }

  validate() {
    if(this.apiUpdateVpcInfoResults && typeof (this.apiUpdateVpcInfoResults as any).validate === 'function') {
      (this.apiUpdateVpcInfoResults as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

