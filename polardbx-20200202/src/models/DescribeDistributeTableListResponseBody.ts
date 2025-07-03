// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDistributeTableListResponseBodyData } from "./DescribeDistributeTableListResponseBodyData";


export class DescribeDistributeTableListResponseBody extends $dara.Model {
  data?: DescribeDistributeTableListResponseBodyData;
  /**
   * @example
   * Success
   */
  message?: string;
  /**
   * @example
   * C458B1E8-1683-3645-B154-6BA32080EEA
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeDistributeTableListResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

