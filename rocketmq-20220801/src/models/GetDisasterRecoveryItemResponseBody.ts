// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDisasterRecoveryItemResponseBodyDataTopics extends $dara.Model {
  /**
   * @remarks
   * The consumer group ID.
   * 
   * @example
   * xxx_reserve_group
   * 
   * @deprecated
   */
  consumerGroupId?: string;
  /**
   * @remarks
   * The order in which messages are delivered to the target instance. The parameter values ​​are as follows:
   *   - Concurrently: concurrent delivery
   *   - Orderly: sequential delivery
   * 
   * @example
   * Concurrently
   */
  deliveryOrderType?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rmq-cn-wwo3xxx
   */
  instanceId?: string;
  /**
   * @remarks
   * Instance type
   *   - ALIYUN_ROCKETMQ: Alibaba Cloud instance
   *   - EXTERNAL_ROCKETMQ: External instance, open-source instance, open-source cluster
   * 
   * @example
   * ALIYUN_ROCKETMQ
   */
  instanceType?: string;
  /**
   * @remarks
   * regionId
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The topic name.
   * 
   * @example
   * order_push_xxx
   */
  topicName?: string;
  static names(): { [key: string]: string } {
    return {
      consumerGroupId: 'consumerGroupId',
      deliveryOrderType: 'deliveryOrderType',
      instanceId: 'instanceId',
      instanceType: 'instanceType',
      regionId: 'regionId',
      topicName: 'topicName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerGroupId: 'string',
      deliveryOrderType: 'string',
      instanceId: 'string',
      instanceType: 'string',
      regionId: 'string',
      topicName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDisasterRecoveryItemResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The time when the topic mapping task was created.
   * 
   * @example
   * 2024-06-24 02:57:31
   */
  createTime?: string;
  /**
   * @remarks
   * Additional Information
   */
  extInfo?: { [key: string]: string };
  /**
   * @remarks
   * The ID of the topic mapping
   * 
   * @example
   * 100070284
   */
  itemId?: number;
  /**
   * @remarks
   * The topic mapping task status.
   * 
   * @example
   * RUNNING
   */
  itemStatus?: string;
  /**
   * @remarks
   * The ID of the global message backup plan.
   * 
   * @example
   * 1300000016
   */
  planId?: number;
  /**
   * @remarks
   * Topics included in the backup mapping
   */
  topics?: GetDisasterRecoveryItemResponseBodyDataTopics[];
  /**
   * @remarks
   * The time when the topic mapping task was last updated.
   * 
   * @example
   * 2024-09-26 02:13:10
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      extInfo: 'extInfo',
      itemId: 'itemId',
      itemStatus: 'itemStatus',
      planId: 'planId',
      topics: 'topics',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      extInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      itemId: 'number',
      itemStatus: 'string',
      planId: 'number',
      topics: { 'type': 'array', 'itemType': GetDisasterRecoveryItemResponseBodyDataTopics },
      updateTime: 'string',
    };
  }

  validate() {
    if(this.extInfo) {
      $dara.Model.validateMap(this.extInfo);
    }
    if(Array.isArray(this.topics)) {
      $dara.Model.validateArray(this.topics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDisasterRecoveryItemResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial. This parameter is returned only if the access is denied because the Resource Access Management (RAM) user does not have the required permissions.
   * 
   * @example
   * xxx
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: GetDisasterRecoveryItemResponseBodyData;
  /**
   * @remarks
   * The dynamic error code.
   * 
   * @example
   * InstanceId
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic error message.
   * 
   * @example
   * instanceId
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * xxx
   */
  message?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * AF9A8B10-C426-530F-A0DD-96320B39****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'accessDeniedDetail',
      code: 'code',
      data: 'data',
      dynamicCode: 'dynamicCode',
      dynamicMessage: 'dynamicMessage',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: GetDisasterRecoveryItemResponseBodyData,
      dynamicCode: 'string',
      dynamicMessage: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

