// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDataLimitSetResponseBodyDataLimitSet } from "./DescribeDataLimitSetResponseBodyDataLimitSet";


export class DescribeDataLimitSetResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the data asset.
   */
  dataLimitSet?: DescribeDataLimitSetResponseBodyDataLimitSet;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 769FB3C1-F4C9-42DF-9B72-7077A8989C13
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dataLimitSet: 'DataLimitSet',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataLimitSet: DescribeDataLimitSetResponseBodyDataLimitSet,
      requestId: 'string',
    };
  }

  validate() {
    if(this.dataLimitSet && typeof (this.dataLimitSet as any).validate === 'function') {
      (this.dataLimitSet as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

