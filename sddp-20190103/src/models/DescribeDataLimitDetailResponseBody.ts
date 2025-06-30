// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDataLimitDetailResponseBodyDataLimit } from "./DescribeDataLimitDetailResponseBodyDataLimit";


export class DescribeDataLimitDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the data asset.
   */
  dataLimit?: DescribeDataLimitDetailResponseBodyDataLimit;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 769FB3C1-F4C9-42DF-9B72-7077A8989C13
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dataLimit: 'DataLimit',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataLimit: DescribeDataLimitDetailResponseBodyDataLimit,
      requestId: 'string',
    };
  }

  validate() {
    if(this.dataLimit && typeof (this.dataLimit as any).validate === 'function') {
      (this.dataLimit as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

