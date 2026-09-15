// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListComputeJobsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   * 
   * @example
   * 2026-09-02T16:00:00Z
   */
  createTime?: string;
  /**
   * @example
   * 2.0
   */
  cuLimit?: number;
  /**
   * @example
   * 1.0
   */
  cuReserved?: number;
  /**
   * @example
   * 1.5
   */
  cuUsed?: number;
  /**
   * @example
   * 0
   */
  debugMode?: number;
  /**
   * @example
   * alikafka_streaming-cn-a1b2c3d4
   */
  instanceId?: string;
  /**
   * @example
   * order_enrichment
   */
  jobName?: string;
  /**
   * @example
   * 1234567890123456
   */
  owner?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * 订单流实时清洗
   */
  remark?: string;
  /**
   * @example
   * RUNNING
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      cuLimit: 'CuLimit',
      cuReserved: 'CuReserved',
      cuUsed: 'CuUsed',
      debugMode: 'DebugMode',
      instanceId: 'InstanceId',
      jobName: 'JobName',
      owner: 'Owner',
      regionId: 'RegionId',
      remark: 'Remark',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      cuLimit: 'number',
      cuReserved: 'number',
      cuUsed: 'number',
      debugMode: 'number',
      instanceId: 'string',
      jobName: 'string',
      owner: 'string',
      regionId: 'string',
      remark: 'string',
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

export class ListComputeJobsResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  data?: ListComputeJobsResponseBodyData[];
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * eyJvZmZzZXQiOjIwfQ==
   */
  nextToken?: string;
  /**
   * @example
   * 062D8E8B-8D47-5DCC-BB12-5A1D93C3A66B
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 3
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': ListComputeJobsResponseBodyData },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
      total: 'number',
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

