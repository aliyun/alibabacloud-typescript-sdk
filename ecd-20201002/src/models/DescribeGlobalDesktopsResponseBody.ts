// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeGlobalDesktopsResponseBodyDesktops } from "./DescribeGlobalDesktopsResponseBodyDesktops";


export class DescribeGlobalDesktopsResponseBody extends $dara.Model {
  desktops?: DescribeGlobalDesktopsResponseBodyDesktops[];
  /**
   * @example
   * eyJkZWZhdWx0IjpbIjIwMjItMDgtMTdUM****
   */
  nextToken?: string;
  /**
   * @example
   * 4686A731-D601-548C-83E2-4CB6371E****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      desktops: 'Desktops',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktops: { 'type': 'array', 'itemType': DescribeGlobalDesktopsResponseBodyDesktops },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.desktops)) {
      $dara.Model.validateArray(this.desktops);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

