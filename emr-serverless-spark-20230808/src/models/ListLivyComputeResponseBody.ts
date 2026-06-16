// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLivyComputeResponseBodyDataLivyComputes extends $dara.Model {
  /**
   * @remarks
   * The ID of the Livy Gateway.
   * 
   * @example
   * lc-xxxxxxxxxxxx
   */
  computeId?: string;
  /**
   * @remarks
   * The name of the creator.
   * 
   * @example
   * alice
   */
  createdBy?: string;
  /**
   * @remarks
   * The public endpoint.
   * 
   * @example
   * emr-spark-livy-gateway-cn-hangzhou.data.aliyun.com/api/v1/workspace/w-xxxxxxxxx/livycompute/lc-xxxxxxxxxxx
   */
  endpoint?: string;
  /**
   * @remarks
   * The internal endpoint.
   * 
   * @example
   * emr-spark-livy-gateway-cn-hangzhou-internal.aliyun.com/api/v1/workspace/w-xxxxxxxxx/livycompute/lc-xxxxxxxxxxx
   */
  endpointInner?: string;
  /**
   * @remarks
   * The time when the resource was created.
   * 
   * @example
   * 1749456094000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The queue name.
   * 
   * @example
   * root_queue
   */
  queueName?: string;
  /**
   * @remarks
   * The time when the resource was started.
   * 
   * @example
   * 1749456094000
   */
  startTime?: number;
  /**
   * @remarks
   * The running status.
   * 
   * @example
   * RUNNING
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      computeId: 'computeId',
      createdBy: 'createdBy',
      endpoint: 'endpoint',
      endpointInner: 'endpointInner',
      gmtCreate: 'gmtCreate',
      name: 'name',
      queueName: 'queueName',
      startTime: 'startTime',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      computeId: 'string',
      createdBy: 'string',
      endpoint: 'string',
      endpointInner: 'string',
      gmtCreate: 'number',
      name: 'string',
      queueName: 'string',
      startTime: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLivyComputeResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * A list of Livy Gateways.
   */
  livyComputes?: ListLivyComputeResponseBodyDataLivyComputes[];
  static names(): { [key: string]: string } {
    return {
      livyComputes: 'livyComputes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      livyComputes: { 'type': 'array', 'itemType': ListLivyComputeResponseBodyDataLivyComputes },
    };
  }

  validate() {
    if(Array.isArray(this.livyComputes)) {
      $dara.Model.validateArray(this.livyComputes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLivyComputeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. A value of 1000000 indicates that the request is successful. For other values, see the message parameter for error details.
   * 
   * @example
   * 1000000
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: ListLivyComputeResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * ok
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListLivyComputeResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

