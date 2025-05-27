// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeUserBuyStatusResponseBodyData } from "./DescribeUserBuyStatusResponseBodyData";


export class DescribeUserBuyStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: DescribeUserBuyStatusResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 81D8EC0C-0804-51AD-8C38-17ED0BC74892
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
      data: DescribeUserBuyStatusResponseBodyData,
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

