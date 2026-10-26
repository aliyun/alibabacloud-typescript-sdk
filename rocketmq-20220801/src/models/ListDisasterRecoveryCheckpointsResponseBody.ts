// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDisasterRecoveryCheckpointsResponseBodyDataListSourceProgressProgressData extends $dara.Model {
  /**
   * @remarks
   * The latest consumption time.
   * 
   * @example
   * 1740724080343
   */
  consumeTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      consumeTimestamp: 'consumeTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumeTimestamp: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDisasterRecoveryCheckpointsResponseBodyDataListSourceProgress extends $dara.Model {
  /**
   * @remarks
   * The consumer group ID.
   * 
   * @example
   * GID_TEST
   */
  consumerGroupId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rmq-cn-3mp3vblzxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance type. Valid values:
   * - ALIYUN_ROCKETMQ: Alibaba Cloud instance.
   * - EXTERNAL_ROCKETMQ: external instance, open source instance, or open source cluster.
   * 
   * @example
   * ALIYUN_ROCKETMQ
   */
  instanceType?: string;
  /**
   * @remarks
   * The most recent fetch time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1740724080343
   */
  lastFetchTime?: number;
  /**
   * @remarks
   * The consumer offset data.
   */
  progressData?: ListDisasterRecoveryCheckpointsResponseBodyDataListSourceProgressProgressData;
  /**
   * @remarks
   * The region ID.
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
   * TOPIC_TEST
   */
  topicName?: string;
  static names(): { [key: string]: string } {
    return {
      consumerGroupId: 'consumerGroupId',
      instanceId: 'instanceId',
      instanceType: 'instanceType',
      lastFetchTime: 'lastFetchTime',
      progressData: 'progressData',
      regionId: 'regionId',
      topicName: 'topicName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerGroupId: 'string',
      instanceId: 'string',
      instanceType: 'string',
      lastFetchTime: 'number',
      progressData: ListDisasterRecoveryCheckpointsResponseBodyDataListSourceProgressProgressData,
      regionId: 'string',
      topicName: 'string',
    };
  }

  validate() {
    if(this.progressData && typeof (this.progressData as any).validate === 'function') {
      (this.progressData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDisasterRecoveryCheckpointsResponseBodyDataListTargetProgressProgressData extends $dara.Model {
  /**
   * @remarks
   * The latest consumption time.
   * 
   * @example
   * 1740724080343
   */
  consumeTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      consumeTimestamp: 'consumeTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumeTimestamp: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDisasterRecoveryCheckpointsResponseBodyDataListTargetProgress extends $dara.Model {
  /**
   * @remarks
   * The consumer group ID.
   * 
   * @example
   * GID_TEST
   */
  consumerGroupId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rmq-cn-nwy3i065xxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance type. Valid values:
   * - ALIYUN_ROCKETMQ: Alibaba Cloud instance.
   * - EXTERNAL_ROCKETMQ: external instance, open source instance, or open source cluster.
   * 
   * @example
   * ALIYUN_ROCKETMQ
   */
  instanceType?: string;
  /**
   * @remarks
   * The latest fetch time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1740724080343
   */
  lastFetchTime?: number;
  /**
   * @remarks
   * The consumer offset data.
   */
  progressData?: ListDisasterRecoveryCheckpointsResponseBodyDataListTargetProgressProgressData;
  /**
   * @remarks
   * The region ID.
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
   * TOPIC_TEST
   */
  topicName?: string;
  static names(): { [key: string]: string } {
    return {
      consumerGroupId: 'consumerGroupId',
      instanceId: 'instanceId',
      instanceType: 'instanceType',
      lastFetchTime: 'lastFetchTime',
      progressData: 'progressData',
      regionId: 'regionId',
      topicName: 'topicName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerGroupId: 'string',
      instanceId: 'string',
      instanceType: 'string',
      lastFetchTime: 'number',
      progressData: ListDisasterRecoveryCheckpointsResponseBodyDataListTargetProgressProgressData,
      regionId: 'string',
      topicName: 'string',
    };
  }

  validate() {
    if(this.progressData && typeof (this.progressData as any).validate === 'function') {
      (this.progressData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDisasterRecoveryCheckpointsResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The consumer offset checkpoint ID.
   * 
   * @example
   * 10000000xx
   */
  checkpointId?: number;
  /**
   * @remarks
   * The ID of the backup mapping.
   * 
   * @example
   * 10000000xx
   */
  itemId?: number;
  /**
   * @remarks
   * The most recent synchronization time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1740724080343
   */
  lastSyncTime?: number;
  /**
   * @remarks
   * The ID of the backup plan.
   * 
   * @example
   * 13000000xx
   */
  planId?: number;
  /**
   * @remarks
   * The source consumer offset.
   */
  sourceProgress?: ListDisasterRecoveryCheckpointsResponseBodyDataListSourceProgress;
  /**
   * @remarks
   * The target consumer offset.
   */
  targetProgress?: ListDisasterRecoveryCheckpointsResponseBodyDataListTargetProgress;
  static names(): { [key: string]: string } {
    return {
      checkpointId: 'checkpointId',
      itemId: 'itemId',
      lastSyncTime: 'lastSyncTime',
      planId: 'planId',
      sourceProgress: 'sourceProgress',
      targetProgress: 'targetProgress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkpointId: 'number',
      itemId: 'number',
      lastSyncTime: 'number',
      planId: 'number',
      sourceProgress: ListDisasterRecoveryCheckpointsResponseBodyDataListSourceProgress,
      targetProgress: ListDisasterRecoveryCheckpointsResponseBodyDataListTargetProgress,
    };
  }

  validate() {
    if(this.sourceProgress && typeof (this.sourceProgress as any).validate === 'function') {
      (this.sourceProgress as any).validate();
    }
    if(this.targetProgress && typeof (this.targetProgress as any).validate === 'function') {
      (this.targetProgress as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDisasterRecoveryCheckpointsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The paginated data.
   */
  list?: ListDisasterRecoveryCheckpointsResponseBodyDataList[];
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'list',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListDisasterRecoveryCheckpointsResponseBodyDataList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDisasterRecoveryCheckpointsResponseBody extends $dara.Model {
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
   * The returned data.
   */
  data?: ListDisasterRecoveryCheckpointsResponseBodyData;
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
   * The instance cannot be found.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
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
      code: 'string',
      data: ListDisasterRecoveryCheckpointsResponseBodyData,
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

