// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAppLayoutsResponseBodyLayouts } from "./DescribeAppLayoutsResponseBodyLayouts";


export class DescribeAppLayoutsResponseBody extends $dara.Model {
  layouts?: DescribeAppLayoutsResponseBodyLayouts[];
  /**
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CD8
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  totalNum?: number;
  /**
   * @example
   * 1
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      layouts: 'Layouts',
      requestId: 'RequestId',
      totalNum: 'TotalNum',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      layouts: { 'type': 'array', 'itemType': DescribeAppLayoutsResponseBodyLayouts },
      requestId: 'string',
      totalNum: 'number',
      totalPage: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.layouts)) {
      $dara.Model.validateArray(this.layouts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

