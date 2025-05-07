// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeApisecAbnormalsResponseBodyData } from "./DescribeApisecAbnormalsResponseBodyData";


export class DescribeApisecAbnormalsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The risks.
   */
  data?: DescribeApisecAbnormalsResponseBodyData[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9469646C-F2CC-5F0F-8401-C53***4F46
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 35
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeApisecAbnormalsResponseBodyData },
      requestId: 'string',
      totalCount: 'number',
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

