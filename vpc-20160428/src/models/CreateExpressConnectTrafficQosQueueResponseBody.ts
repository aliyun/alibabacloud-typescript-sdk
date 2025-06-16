// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateExpressConnectTrafficQosQueueResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the QoS policy.
   * 
   * @example
   * qos-2giu0a6vd5x0mv4700
   */
  qosId?: string;
  /**
   * @remarks
   * The ID of the QoS queue.
   * 
   * @example
   * qos-queue-9nyx2u7n71s2rcy4n5
   */
  queueId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4CF20CC7-D1FC-425B-A15B-DF7C8E2131A7
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      qosId: 'QosId',
      queueId: 'QueueId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qosId: 'string',
      queueId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

