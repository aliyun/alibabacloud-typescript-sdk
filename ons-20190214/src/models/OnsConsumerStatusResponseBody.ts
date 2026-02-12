// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OnsConsumerStatusResponseBodyDataConnectionSetConnectionDo extends $dara.Model {
  clientAddr?: string;
  clientId?: string;
  /**
   * @example
   * 100
   */
  diff?: number;
  language?: string;
  remoteIP?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      clientAddr: 'ClientAddr',
      clientId: 'ClientId',
      diff: 'Diff',
      language: 'Language',
      remoteIP: 'RemoteIP',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientAddr: 'string',
      clientId: 'string',
      diff: 'number',
      language: 'string',
      remoteIP: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsConsumerStatusResponseBodyDataConnectionSet extends $dara.Model {
  connectionDo?: OnsConsumerStatusResponseBodyDataConnectionSetConnectionDo[];
  static names(): { [key: string]: string } {
    return {
      connectionDo: 'ConnectionDo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionDo: { 'type': 'array', 'itemType': OnsConsumerStatusResponseBodyDataConnectionSetConnectionDo },
    };
  }

  validate() {
    if(Array.isArray(this.connectionDo)) {
      $dara.Model.validateArray(this.connectionDo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsConsumerStatusResponseBodyDataConsumerConnectionInfoListConsumerConnectionInfoDoJstackThreadTrackDoTrackList extends $dara.Model {
  track?: string[];
  static names(): { [key: string]: string } {
    return {
      track: 'Track',
    };
  }

  static types(): { [key: string]: any } {
    return {
      track: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.track)) {
      $dara.Model.validateArray(this.track);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsConsumerStatusResponseBodyDataConsumerConnectionInfoListConsumerConnectionInfoDoJstackThreadTrackDo extends $dara.Model {
  thread?: string;
  trackList?: OnsConsumerStatusResponseBodyDataConsumerConnectionInfoListConsumerConnectionInfoDoJstackThreadTrackDoTrackList;
  static names(): { [key: string]: string } {
    return {
      thread: 'Thread',
      trackList: 'TrackList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      thread: 'string',
      trackList: OnsConsumerStatusResponseBodyDataConsumerConnectionInfoListConsumerConnectionInfoDoJstackThreadTrackDoTrackList,
    };
  }

  validate() {
    if(this.trackList && typeof (this.trackList as any).validate === 'function') {
      (this.trackList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsConsumerStatusResponseBodyDataConsumerConnectionInfoListConsumerConnectionInfoDoJstack extends $dara.Model {
  threadTrackDo?: OnsConsumerStatusResponseBodyDataConsumerConnectionInfoListConsumerConnectionInfoDoJstackThreadTrackDo[];
  static names(): { [key: string]: string } {
    return {
      threadTrackDo: 'ThreadTrackDo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      threadTrackDo: { 'type': 'array', 'itemType': OnsConsumerStatusResponseBodyDataConsumerConnectionInfoListConsumerConnectionInfoDoJstackThreadTrackDo },
    };
  }

  validate() {
    if(Array.isArray(this.threadTrackDo)) {
      $dara.Model.validateArray(this.threadTrackDo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsConsumerStatusResponseBodyDataConsumerConnectionInfoListConsumerConnectionInfoDoRunningDataListConsumerRunningDataDo extends $dara.Model {
  failedCountPerHour?: number;
  failedTps?: number;
  okTps?: number;
  rt?: number;
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      failedCountPerHour: 'FailedCountPerHour',
      failedTps: 'FailedTps',
      okTps: 'OkTps',
      rt: 'Rt',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedCountPerHour: 'number',
      failedTps: 'number',
      okTps: 'number',
      rt: 'number',
      topic: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsConsumerStatusResponseBodyDataConsumerConnectionInfoListConsumerConnectionInfoDoRunningDataList extends $dara.Model {
  consumerRunningDataDo?: OnsConsumerStatusResponseBodyDataConsumerConnectionInfoListConsumerConnectionInfoDoRunningDataListConsumerRunningDataDo[];
  static names(): { [key: string]: string } {
    return {
      consumerRunningDataDo: 'ConsumerRunningDataDo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerRunningDataDo: { 'type': 'array', 'itemType': OnsConsumerStatusResponseBodyDataConsumerConnectionInfoListConsumerConnectionInfoDoRunningDataListConsumerRunningDataDo },
    };
  }

  validate() {
    if(Array.isArray(this.consumerRunningDataDo)) {
      $dara.Model.validateArray(this.consumerRunningDataDo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsConsumerStatusResponseBodyDataConsumerConnectionInfoListConsumerConnectionInfoDoSubscriptionSetSubscriptionDataTagsSet extends $dara.Model {
  tag?: string[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsConsumerStatusResponseBodyDataConsumerConnectionInfoListConsumerConnectionInfoDoSubscriptionSetSubscriptionData extends $dara.Model {
  subString?: string;
  subVersion?: number;
  tagsSet?: OnsConsumerStatusResponseBodyDataConsumerConnectionInfoListConsumerConnectionInfoDoSubscriptionSetSubscriptionDataTagsSet;
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      subString: 'SubString',
      subVersion: 'SubVersion',
      tagsSet: 'TagsSet',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subString: 'string',
      subVersion: 'number',
      tagsSet: OnsConsumerStatusResponseBodyDataConsumerConnectionInfoListConsumerConnectionInfoDoSubscriptionSetSubscriptionDataTagsSet,
      topic: 'string',
    };
  }

  validate() {
    if(this.tagsSet && typeof (this.tagsSet as any).validate === 'function') {
      (this.tagsSet as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsConsumerStatusResponseBodyDataConsumerConnectionInfoListConsumerConnectionInfoDoSubscriptionSet extends $dara.Model {
  subscriptionData?: OnsConsumerStatusResponseBodyDataConsumerConnectionInfoListConsumerConnectionInfoDoSubscriptionSetSubscriptionData[];
  static names(): { [key: string]: string } {
    return {
      subscriptionData: 'SubscriptionData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subscriptionData: { 'type': 'array', 'itemType': OnsConsumerStatusResponseBodyDataConsumerConnectionInfoListConsumerConnectionInfoDoSubscriptionSetSubscriptionData },
    };
  }

  validate() {
    if(Array.isArray(this.subscriptionData)) {
      $dara.Model.validateArray(this.subscriptionData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsConsumerStatusResponseBodyDataConsumerConnectionInfoListConsumerConnectionInfoDo extends $dara.Model {
  clientId?: string;
  connection?: string;
  consumeModel?: string;
  consumeType?: string;
  jstack?: OnsConsumerStatusResponseBodyDataConsumerConnectionInfoListConsumerConnectionInfoDoJstack;
  language?: string;
  lastTimeStamp?: number;
  runningDataList?: OnsConsumerStatusResponseBodyDataConsumerConnectionInfoListConsumerConnectionInfoDoRunningDataList;
  startTimeStamp?: number;
  subscriptionSet?: OnsConsumerStatusResponseBodyDataConsumerConnectionInfoListConsumerConnectionInfoDoSubscriptionSet;
  threadCount?: number;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      connection: 'Connection',
      consumeModel: 'ConsumeModel',
      consumeType: 'ConsumeType',
      jstack: 'Jstack',
      language: 'Language',
      lastTimeStamp: 'LastTimeStamp',
      runningDataList: 'RunningDataList',
      startTimeStamp: 'StartTimeStamp',
      subscriptionSet: 'SubscriptionSet',
      threadCount: 'ThreadCount',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      connection: 'string',
      consumeModel: 'string',
      consumeType: 'string',
      jstack: OnsConsumerStatusResponseBodyDataConsumerConnectionInfoListConsumerConnectionInfoDoJstack,
      language: 'string',
      lastTimeStamp: 'number',
      runningDataList: OnsConsumerStatusResponseBodyDataConsumerConnectionInfoListConsumerConnectionInfoDoRunningDataList,
      startTimeStamp: 'number',
      subscriptionSet: OnsConsumerStatusResponseBodyDataConsumerConnectionInfoListConsumerConnectionInfoDoSubscriptionSet,
      threadCount: 'number',
      version: 'string',
    };
  }

  validate() {
    if(this.jstack && typeof (this.jstack as any).validate === 'function') {
      (this.jstack as any).validate();
    }
    if(this.runningDataList && typeof (this.runningDataList as any).validate === 'function') {
      (this.runningDataList as any).validate();
    }
    if(this.subscriptionSet && typeof (this.subscriptionSet as any).validate === 'function') {
      (this.subscriptionSet as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsConsumerStatusResponseBodyDataConsumerConnectionInfoList extends $dara.Model {
  consumerConnectionInfoDo?: OnsConsumerStatusResponseBodyDataConsumerConnectionInfoListConsumerConnectionInfoDo[];
  static names(): { [key: string]: string } {
    return {
      consumerConnectionInfoDo: 'ConsumerConnectionInfoDo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerConnectionInfoDo: { 'type': 'array', 'itemType': OnsConsumerStatusResponseBodyDataConsumerConnectionInfoListConsumerConnectionInfoDo },
    };
  }

  validate() {
    if(Array.isArray(this.consumerConnectionInfoDo)) {
      $dara.Model.validateArray(this.consumerConnectionInfoDo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsConsumerStatusResponseBodyDataDetailInTopicListDetailInTopicDo extends $dara.Model {
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

export class OnsConsumerStatusResponseBodyDataDetailInTopicList extends $dara.Model {
  detailInTopicDo?: OnsConsumerStatusResponseBodyDataDetailInTopicListDetailInTopicDo[];
  static names(): { [key: string]: string } {
    return {
      detailInTopicDo: 'DetailInTopicDo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detailInTopicDo: { 'type': 'array', 'itemType': OnsConsumerStatusResponseBodyDataDetailInTopicListDetailInTopicDo },
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

export class OnsConsumerStatusResponseBodyData extends $dara.Model {
  connectionSet?: OnsConsumerStatusResponseBodyDataConnectionSet;
  /**
   * @remarks
   * The consumption mode. Valid values:
   * 
   * *   **CLUSTERING**: the clustering consumption mode
   * *   **BROADCASTING**: the broadcasting consumption mode
   * 
   * For more information about consumption modes, see [Clustering consumption and broadcasting consumption](https://help.aliyun.com/document_detail/43163.html).
   * 
   * @example
   * CLUSTERING
   */
  consumeModel?: string;
  /**
   * @remarks
   * The TPS for message consumption.
   * 
   * @example
   * 0
   */
  consumeTps?: number;
  consumerConnectionInfoList?: OnsConsumerStatusResponseBodyDataConsumerConnectionInfoList;
  /**
   * @remarks
   * The maximum latency of message consumption in all topics to which the consumer group subscribes. Unit: milliseconds.
   * 
   * @example
   * 100857
   */
  delayTime?: number;
  detailInTopicList?: OnsConsumerStatusResponseBodyDataDetailInTopicList;
  /**
   * @remarks
   * The ID of the instance
   * 
   * @example
   * MQ_INST_111111111111_DOxxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The most recent point in time when a message was consumed.
   * 
   * The value of this parameter is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1566883844954
   */
  lastTimestamp?: number;
  /**
   * @remarks
   * Indicates whether the consumer group is online.
   * 
   * @example
   * true
   */
  online?: boolean;
  /**
   * @remarks
   * Indicates whether load balancing is performed as expected. Valid values:
   * 
   * *   **true**: Load balancing is performed as expected.
   * *   **false**: Load balancing is not performed as expected.
   * 
   * @example
   * true
   */
  rebalanceOK?: boolean;
  /**
   * @remarks
   * Indicates whether all consumers in the consumer group subscribe to the same topics and tags.
   * 
   * @example
   * true
   */
  subscriptionSame?: boolean;
  /**
   * @remarks
   * The total number of accumulated messages.
   * 
   * @example
   * 197
   */
  totalDiff?: number;
  static names(): { [key: string]: string } {
    return {
      connectionSet: 'ConnectionSet',
      consumeModel: 'ConsumeModel',
      consumeTps: 'ConsumeTps',
      consumerConnectionInfoList: 'ConsumerConnectionInfoList',
      delayTime: 'DelayTime',
      detailInTopicList: 'DetailInTopicList',
      instanceId: 'InstanceId',
      lastTimestamp: 'LastTimestamp',
      online: 'Online',
      rebalanceOK: 'RebalanceOK',
      subscriptionSame: 'SubscriptionSame',
      totalDiff: 'TotalDiff',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionSet: OnsConsumerStatusResponseBodyDataConnectionSet,
      consumeModel: 'string',
      consumeTps: 'number',
      consumerConnectionInfoList: OnsConsumerStatusResponseBodyDataConsumerConnectionInfoList,
      delayTime: 'number',
      detailInTopicList: OnsConsumerStatusResponseBodyDataDetailInTopicList,
      instanceId: 'string',
      lastTimestamp: 'number',
      online: 'boolean',
      rebalanceOK: 'boolean',
      subscriptionSame: 'boolean',
      totalDiff: 'number',
    };
  }

  validate() {
    if(this.connectionSet && typeof (this.connectionSet as any).validate === 'function') {
      (this.connectionSet as any).validate();
    }
    if(this.consumerConnectionInfoList && typeof (this.consumerConnectionInfoList as any).validate === 'function') {
      (this.consumerConnectionInfoList as any).validate();
    }
    if(this.detailInTopicList && typeof (this.detailInTopicList as any).validate === 'function') {
      (this.detailInTopicList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsConsumerStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: OnsConsumerStatusResponseBodyData;
  /**
   * @remarks
   * The ID of the request. This parameter is a common parameter. Each request has a unique ID. You can use this ID to troubleshoot issues.
   * 
   * @example
   * 10EDC518-10E7-4B34-92FB-171235FA****
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
      data: OnsConsumerStatusResponseBodyData,
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

