// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeOutgoingDestinationIPResponseBodyDstIPList } from "./DescribeOutgoingDestinationIpresponseBodyDstIplist";


export class DescribeOutgoingDestinationIPResponseBody extends $dara.Model {
  /**
   * @remarks
   * The IP addresses in outbound connections.
   */
  dstIPList?: DescribeOutgoingDestinationIPResponseBodyDstIPList[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F0F82705-CFC7-5F83-86C8-A063892F****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of destination IP addresses in outbound connections.
   * 
   * @example
   * 50
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dstIPList: 'DstIPList',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dstIPList: { 'type': 'array', 'itemType': DescribeOutgoingDestinationIPResponseBodyDstIPList },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dstIPList)) {
      $dara.Model.validateArray(this.dstIPList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

