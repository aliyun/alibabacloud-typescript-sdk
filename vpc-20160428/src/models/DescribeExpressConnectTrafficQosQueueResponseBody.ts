// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeExpressConnectTrafficQosQueueResponseBodyQueueList } from "./DescribeExpressConnectTrafficQosQueueResponseBodyQueueList";


export class DescribeExpressConnectTrafficQosQueueResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the QoS queues.
   */
  queueList?: DescribeExpressConnectTrafficQosQueueResponseBodyQueueList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 606998F0-B94D-48FE-8316-ACA81BB230DA
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      queueList: 'QueueList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queueList: { 'type': 'array', 'itemType': DescribeExpressConnectTrafficQosQueueResponseBodyQueueList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.queueList)) {
      $dara.Model.validateArray(this.queueList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

