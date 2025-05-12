// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCustomizedListHeadersResponseBodyHeaders } from "./DescribeCustomizedListHeadersResponseBodyHeaders";


export class DescribeCustomizedListHeadersResponseBody extends $dara.Model {
  headers?: DescribeCustomizedListHeadersResponseBodyHeaders[];
  /**
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      headers: 'Headers',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'array', 'itemType': DescribeCustomizedListHeadersResponseBodyHeaders },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.headers)) {
      $dara.Model.validateArray(this.headers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

