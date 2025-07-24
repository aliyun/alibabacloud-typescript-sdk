// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLivyComputeResponseBodyDataLivyComputes extends $dara.Model {
  /**
   * @example
   * lc-xxxxxxxxxxxx
   */
  computeId?: string;
  /**
   * @example
   * alice
   */
  createdBy?: string;
  /**
   * @example
   * emr-spark-livy-gateway-cn-hangzhou.data.aliyun.com/api/v1/workspace/w-xxxxxxxxx/livycompute/lc-xxxxxxxxxxx
   */
  endpoint?: string;
  /**
   * @example
   * emr-spark-livy-gateway-cn-hangzhou-internal.aliyun.com/api/v1/workspace/w-xxxxxxxxx/livycompute/lc-xxxxxxxxxxx
   */
  endpointInner?: string;
  /**
   * @example
   * 1749456094000
   */
  gmtCreate?: number;
  /**
   * @example
   * test
   */
  name?: string;
  /**
   * @example
   * root_queue
   */
  queueName?: string;
  /**
   * @example
   * 1749456094000
   */
  startTime?: number;
  /**
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
   * @example
   * 1000000
   */
  code?: string;
  data?: ListLivyComputeResponseBodyData;
  /**
   * @example
   * ok
   */
  message?: string;
  /**
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

