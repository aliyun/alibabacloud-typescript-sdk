// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeApisecUserOperationsResponseBodyData } from "./DescribeApisecUserOperationsResponseBodyData";


export class DescribeApisecUserOperationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The operation records.
   */
  data?: DescribeApisecUserOperationsResponseBodyData[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C9825654-327B-5156-A570-847054B4CF10
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
      data: { 'type': 'array', 'itemType': DescribeApisecUserOperationsResponseBodyData },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

