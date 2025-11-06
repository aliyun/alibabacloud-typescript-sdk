// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQueueRateResponseBodyData extends $dara.Model {
  inQps?: number;
  instanceId?: string;
  outQps?: number;
  queueName?: string;
  vhostName?: string;
  static names(): { [key: string]: string } {
    return {
      inQps: 'InQps',
      instanceId: 'InstanceId',
      outQps: 'OutQps',
      queueName: 'QueueName',
      vhostName: 'VhostName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inQps: 'number',
      instanceId: 'string',
      outQps: 'number',
      queueName: 'string',
      vhostName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueueRateResponseBody extends $dara.Model {
  code?: number;
  data?: GetQueueRateResponseBodyData[];
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': GetQueueRateResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

