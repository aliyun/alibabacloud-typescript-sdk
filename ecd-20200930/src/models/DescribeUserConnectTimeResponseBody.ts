// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeUserConnectTimeResponseBodyData } from "./DescribeUserConnectTimeResponseBodyData";


export class DescribeUserConnectTimeResponseBody extends $dara.Model {
  count?: number;
  data?: DescribeUserConnectTimeResponseBodyData[];
  nextToken?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      data: 'Data',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      data: { 'type': 'array', 'itemType': DescribeUserConnectTimeResponseBodyData },
      nextToken: 'string',
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

