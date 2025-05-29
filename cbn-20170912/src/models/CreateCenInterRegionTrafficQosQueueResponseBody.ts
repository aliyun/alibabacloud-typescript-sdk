// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCenInterRegionTrafficQosQueueResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the queue.
   * 
   * @example
   * qos-queue-irqhi8k5fdyuu5****
   */
  qosQueueId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 845F66F6-5C27-53A1-9428-B859086237B2
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      qosQueueId: 'QosQueueId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qosQueueId: 'string',
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

