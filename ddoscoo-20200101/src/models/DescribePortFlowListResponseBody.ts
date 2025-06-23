// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribePortFlowListResponseBodyPortFlowList } from "./DescribePortFlowListResponseBodyPortFlowList";


export class DescribePortFlowListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned traffic data.
   */
  portFlowList?: DescribePortFlowListResponseBodyPortFlowList[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * FFC77501-BDF8-4BC8-9BF5-B295FBC3189B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      portFlowList: 'PortFlowList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      portFlowList: { 'type': 'array', 'itemType': DescribePortFlowListResponseBodyPortFlowList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.portFlowList)) {
      $dara.Model.validateArray(this.portFlowList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

