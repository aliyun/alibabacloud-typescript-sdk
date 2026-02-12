// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OnsConsumerAccumulateResponseBodyDataDetailInTopicListDetailInTopicDo extends $dara.Model {
  delayTime?: number;
  lastTimestamp?: number;
  topic?: string;
  totalDiff?: number;
  static names(): { [key: string]: string } {
    return {
      delayTime: 'DelayTime',
      lastTimestamp: 'LastTimestamp',
      topic: 'Topic',
      totalDiff: 'TotalDiff',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delayTime: 'number',
      lastTimestamp: 'number',
      topic: 'string',
      totalDiff: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsConsumerAccumulateResponseBodyDataDetailInTopicList extends $dara.Model {
  detailInTopicDo?: OnsConsumerAccumulateResponseBodyDataDetailInTopicListDetailInTopicDo[];
  static names(): { [key: string]: string } {
    return {
      detailInTopicDo: 'DetailInTopicDo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detailInTopicDo: { 'type': 'array', 'itemType': OnsConsumerAccumulateResponseBodyDataDetailInTopicListDetailInTopicDo },
    };
  }

  validate() {
    if(Array.isArray(this.detailInTopicDo)) {
      $dara.Model.validateArray(this.detailInTopicDo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsConsumerAccumulateResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The transactions per second (TPS) for message consumption performed by consumers in the group.
   * 
   * @example
   * 10
   */
  consumeTps?: number;
  /**
   * @remarks
   * The consumption latency.
   * 
   * @example
   * 10000
   */
  delayTime?: number;
  detailInTopicList?: OnsConsumerAccumulateResponseBodyDataDetailInTopicList;
  /**
   * @remarks
   * The point in time when the latest message consumed by a consumer in the consumer group was produced.
   * 
   * @example
   * 1566231000000
   */
  lastTimestamp?: number;
  /**
   * @remarks
   * Indicates whether the consumer group is online. The consumer group is online if one of the consumers in the group is online. Valid values:
   * 
   * *   **true**: The consumer group is online.
   * *   **false**: The consumer group is offline.
   * 
   * @example
   * true
   */
  online?: boolean;
  /**
   * @remarks
   * The total number of accumulated messages in all topics to which the consumer group subscribes.
   * 
   * @example
   * 100
   */
  totalDiff?: number;
  static names(): { [key: string]: string } {
    return {
      consumeTps: 'ConsumeTps',
      delayTime: 'DelayTime',
      detailInTopicList: 'DetailInTopicList',
      lastTimestamp: 'LastTimestamp',
      online: 'Online',
      totalDiff: 'TotalDiff',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumeTps: 'number',
      delayTime: 'number',
      detailInTopicList: OnsConsumerAccumulateResponseBodyDataDetailInTopicList,
      lastTimestamp: 'number',
      online: 'boolean',
      totalDiff: 'number',
    };
  }

  validate() {
    if(this.detailInTopicList && typeof (this.detailInTopicList as any).validate === 'function') {
      (this.detailInTopicList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsConsumerAccumulateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The message accumulation information about topics to which the specified consumer subscribes.
   */
  data?: OnsConsumerAccumulateResponseBodyData;
  /**
   * @remarks
   * The ID of the request. This parameter is a common parameter. Each request has a unique ID. You can use this ID to troubleshoot issues.
   * 
   * @example
   * CE817BFF-B389-43CD-9419-95011AC9****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: OnsConsumerAccumulateResponseBodyData,
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

