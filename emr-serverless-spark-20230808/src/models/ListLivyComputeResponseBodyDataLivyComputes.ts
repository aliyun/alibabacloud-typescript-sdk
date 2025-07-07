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

