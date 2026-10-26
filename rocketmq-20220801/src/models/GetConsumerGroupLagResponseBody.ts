// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DataLiteTopicLagMapValue } from "./DataLiteTopicLagMapValue";
import { DataTopicLagMapValue } from "./DataTopicLagMapValue";


export class GetConsumerGroupLagResponseBodyDataTotalLag extends $dara.Model {
  /**
   * @remarks
   * The delivery latency. Unit: seconds.
   * 
   * @example
   * 12
   */
  deliveryDuration?: number;
  /**
   * @remarks
   * The number of inflight messages.
   * 
   * @example
   * 1
   */
  inflightCount?: number;
  /**
   * @remarks
   * The timestamp of the last consumption.
   * 
   * @example
   * 1735629607846
   */
  lastConsumeTimestamp?: number;
  /**
   * @remarks
   * The number of ready messages.
   * 
   * @example
   * 1
   */
  readyCount?: number;
  static names(): { [key: string]: string } {
    return {
      deliveryDuration: 'deliveryDuration',
      inflightCount: 'inflightCount',
      lastConsumeTimestamp: 'lastConsumeTimestamp',
      readyCount: 'readyCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliveryDuration: 'number',
      inflightCount: 'number',
      lastConsumeTimestamp: 'number',
      readyCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConsumerGroupLagResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The consumer group ID.
   * 
   * @example
   * CID-TEST
   */
  consumerGroupId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rmq-cn-7e22ody****
   */
  instanceId?: string;
  /**
   * @remarks
   * The message accumulation for lite topics.
   */
  liteTopicLagMap?: { [key: string]: DataLiteTopicLagMapValue };
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
   * The message accumulation for each topic.
   */
  topicLagMap?: { [key: string]: DataTopicLagMapValue };
  /**
   * @remarks
   * The name of the subscribed topic.
   * 
   * @example
   * test1
   */
  topicName?: string;
  /**
   * @remarks
   * The total message accumulation.
   */
  totalLag?: GetConsumerGroupLagResponseBodyDataTotalLag;
  static names(): { [key: string]: string } {
    return {
      consumerGroupId: 'consumerGroupId',
      instanceId: 'instanceId',
      liteTopicLagMap: 'liteTopicLagMap',
      regionId: 'regionId',
      topicLagMap: 'topicLagMap',
      topicName: 'topicName',
      totalLag: 'totalLag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerGroupId: 'string',
      instanceId: 'string',
      liteTopicLagMap: { 'type': 'map', 'keyType': 'string', 'valueType': DataLiteTopicLagMapValue },
      regionId: 'string',
      topicLagMap: { 'type': 'map', 'keyType': 'string', 'valueType': DataTopicLagMapValue },
      topicName: 'string',
      totalLag: GetConsumerGroupLagResponseBodyDataTotalLag,
    };
  }

  validate() {
    if(this.liteTopicLagMap) {
      $dara.Model.validateMap(this.liteTopicLagMap);
    }
    if(this.topicLagMap) {
      $dara.Model.validateMap(this.topicLagMap);
    }
    if(this.totalLag && typeof (this.totalLag as any).validate === 'function') {
      (this.totalLag as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConsumerGroupLagResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * Topic.NotFound
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: GetConsumerGroupLagResponseBodyData;
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
   * Parameter instanceId is mandatory for this action .
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F5764C40-FB8C-53AE-B95D-96AB3D0E9375
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
      data: GetConsumerGroupLagResponseBodyData,
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

