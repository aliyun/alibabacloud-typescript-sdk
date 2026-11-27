// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFaultDiagnosisUserDetailResponseBodyCallInfo extends $dara.Model {
  /**
   * @remarks
   * App ID。
   * 
   * @example
   * 0rbd****
   */
  appId?: string;
  /**
   * @remarks
   * Call status. Valid values:
   * - **IN**: In progress.
   * - **OUT**: Ended.
   * 
   * @example
   * IN
   */
  callStatus?: string;
  /**
   * @remarks
   * Channel ID.
   * 
   * @example
   * 311
   */
  channelId?: string;
  /**
   * @remarks
   * The time when the call was created, represented as a UNIX timestamp in seconds.
   * 
   * @example
   * 1620957905
   */
  createdTs?: number;
  /**
   * @remarks
   * The time when the call was released, represented as a UNIX timestamp in seconds.
   * 
   * @example
   * 1620958150
   */
  destroyedTs?: number;
  /**
   * @remarks
   * Call duration in seconds.
   * 
   * @example
   * 100
   */
  duration?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      callStatus: 'CallStatus',
      channelId: 'ChannelId',
      createdTs: 'CreatedTs',
      destroyedTs: 'DestroyedTs',
      duration: 'Duration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      callStatus: 'string',
      channelId: 'string',
      createdTs: 'number',
      destroyedTs: 'number',
      duration: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisUserDetailResponseBodyFactorListRelatedEventDatasEventDataItemsEventList extends $dara.Model {
  /**
   * @remarks
   * Event Name.
   * 
   * @example
   * 开始发布
   */
  eventName?: string;
  /**
   * @remarks
   * Event Type. Valid values:
   * - **USER**: User event.
   * - **SYSTEM**: System event.
   * 
   * @example
   * USER
   */
  eventType?: string;
  /**
   * @remarks
   * The time of the first management event occurrence, represented as a UNIX timestamp in seconds.
   * 
   * @example
   * 1614936817
   */
  ts?: number;
  static names(): { [key: string]: string } {
    return {
      eventName: 'EventName',
      eventType: 'EventType',
      ts: 'Ts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventName: 'string',
      eventType: 'string',
      ts: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisUserDetailResponseBodyFactorListRelatedEventDatasEventDataItems extends $dara.Model {
  /**
   * @remarks
   * Event List.
   */
  eventList?: DescribeFaultDiagnosisUserDetailResponseBodyFactorListRelatedEventDatasEventDataItemsEventList[];
  /**
   * @remarks
   * [responses_200_schema_properties_FaultMetricData_properties_Nodes_description]List of metric coordinate points.
   * 
   * @example
   * 1614936817
   */
  ts?: number;
  static names(): { [key: string]: string } {
    return {
      eventList: 'EventList',
      ts: 'Ts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventList: { 'type': 'array', 'itemType': DescribeFaultDiagnosisUserDetailResponseBodyFactorListRelatedEventDatasEventDataItemsEventList },
      ts: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.eventList)) {
      $dara.Model.validateArray(this.eventList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisUserDetailResponseBodyFactorListRelatedEventDatas extends $dara.Model {
  /**
   * @remarks
   * List of event data.
   */
  eventDataItems?: DescribeFaultDiagnosisUserDetailResponseBodyFactorListRelatedEventDatasEventDataItems[];
  /**
   * @remarks
   * Source role. Valid values:
   * - **SENDER**: Publisher (upstream).
   * - **RECEIVER**: Subscriber (downstream).
   * 
   * @example
   * SENDER
   */
  role?: string;
  /**
   * @remarks
   * User ID
   * 
   * @example
   * 0a497933****
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      eventDataItems: 'EventDataItems',
      role: 'Role',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventDataItems: { 'type': 'array', 'itemType': DescribeFaultDiagnosisUserDetailResponseBodyFactorListRelatedEventDatasEventDataItems },
      role: 'string',
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.eventDataItems)) {
      $dara.Model.validateArray(this.eventDataItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisUserDetailResponseBodyFactorListRelatedMetricDatasNodes extends $dara.Model {
  /**
   * @remarks
   * [responses_200_schema_properties_FactorList_items_properties_RelatedEventDatas_items_properties_EventDataItems_items_properties_EventList_items_properties_Ts_title]The time of the first management event occurrence, represented as a UNIX timestamp in seconds.
   */
  ext?: { [key: string]: any };
  /**
   * @remarks
   * [responses_200_schema_properties_FactorList_items_properties_FactorId_title]Factor ID: 1: Poor publisher-side Network; 2: Poor subscriber-side Network; 3: Poor publisher-side device Performance; 4: Publisher-side camera shutdown; 5: Publisher-side app moved to background Run
   * 
   * @example
   * 1615892596
   */
  x?: string;
  /**
   * @remarks
   * [responses_200_schema_properties_RequestId_title]The Request ID.
   * 
   * @example
   * 20
   */
  y?: string;
  static names(): { [key: string]: string } {
    return {
      ext: 'Ext',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      x: 'string',
      y: 'string',
    };
  }

  validate() {
    if(this.ext) {
      $dara.Model.validateMap(this.ext);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisUserDetailResponseBodyFactorListRelatedMetricDatas extends $dara.Model {
  /**
   * @remarks
   * [responses_200_schema_properties_FactorList_items_properties_RelatedEventDatas_items_properties_EventDataItems_items_properties_EventList_items_properties_EventName_type]string
   */
  nodes?: DescribeFaultDiagnosisUserDetailResponseBodyFactorListRelatedMetricDatasNodes[];
  /**
   * @remarks
   * Source role. Valid values:
   * - **SENDER**: Publisher.
   * - **RECEIVER**: Subscriber.
   * 
   * @example
   * SENDER
   */
  role?: string;
  /**
   * @remarks
   * Metric type, consistent with the metric types defined in the end-to-end metrics API.
   * 
   * @example
   * AUDIO_STUCK
   */
  type?: string;
  /**
   * @remarks
   * User ID of the publisher from which the data originates.
   * 
   * @example
   * 0a497933****
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      nodes: 'Nodes',
      role: 'Role',
      type: 'Type',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: { 'type': 'array', 'itemType': DescribeFaultDiagnosisUserDetailResponseBodyFactorListRelatedMetricDatasNodes },
      role: 'string',
      type: 'string',
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.nodes)) {
      $dara.Model.validateArray(this.nodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisUserDetailResponseBodyFactorList extends $dara.Model {
  /**
   * @remarks
   * The factor ID. For details, see the factor ID values below.
   * 
   * @example
   * 1
   */
  factorId?: string;
  /**
   * @remarks
   * Abnormal source: LOCAL indicates the local end; REMOTE indicates the remote end.
   * 
   * @example
   * LOCAL
   */
  faultSource?: string;
  /**
   * @remarks
   * Associated management events, grouped by time. Coordinate data is returned when FaultType is AUDIO_STUCK, VIDEO_STUCK, VIDEO_VAGUE, or HIGH_DELAY.
   */
  relatedEventDatas?: DescribeFaultDiagnosisUserDetailResponseBodyFactorListRelatedEventDatas[];
  /**
   * @remarks
   * Associated metrics and coordinate data, returned when FaultType is AUDIO_STUCK, VIDEO_STUCK, VIDEO_VAGUE, or HIGH_DELAY.
   */
  relatedMetricDatas?: DescribeFaultDiagnosisUserDetailResponseBodyFactorListRelatedMetricDatas[];
  static names(): { [key: string]: string } {
    return {
      factorId: 'FactorId',
      faultSource: 'FaultSource',
      relatedEventDatas: 'RelatedEventDatas',
      relatedMetricDatas: 'RelatedMetricDatas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      factorId: 'string',
      faultSource: 'string',
      relatedEventDatas: { 'type': 'array', 'itemType': DescribeFaultDiagnosisUserDetailResponseBodyFactorListRelatedEventDatas },
      relatedMetricDatas: { 'type': 'array', 'itemType': DescribeFaultDiagnosisUserDetailResponseBodyFactorListRelatedMetricDatas },
    };
  }

  validate() {
    if(Array.isArray(this.relatedEventDatas)) {
      $dara.Model.validateArray(this.relatedEventDatas);
    }
    if(Array.isArray(this.relatedMetricDatas)) {
      $dara.Model.validateArray(this.relatedMetricDatas);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisUserDetailResponseBodyFaultMetricDataNodes extends $dara.Model {
  /**
   * @remarks
   * 指标趋势图中x轴横坐标，单位时间为1分钟。
   * 
   * @example
   * 1620957900
   */
  x?: string;
  /**
   * @remarks
   * 指标趋势图中y轴纵坐标。
   * 
   * @example
   * 0.4540
   */
  y?: string;
  static names(): { [key: string]: string } {
    return {
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      x: 'string',
      y: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisUserDetailResponseBodyFaultMetricData extends $dara.Model {
  /**
   * @remarks
   * List of metric coordinate points.
   */
  nodes?: DescribeFaultDiagnosisUserDetailResponseBodyFaultMetricDataNodes[];
  static names(): { [key: string]: string } {
    return {
      nodes: 'Nodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: { 'type': 'array', 'itemType': DescribeFaultDiagnosisUserDetailResponseBodyFaultMetricDataNodes },
    };
  }

  validate() {
    if(Array.isArray(this.nodes)) {
      $dara.Model.validateArray(this.nodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisUserDetailResponseBodyUserDetailOnlinePeriods extends $dara.Model {
  /**
   * @remarks
   * Time of joining the call, represented as a UNIX timestamp in seconds.
   * 
   * @example
   * 1620957919
   */
  joinTs?: number;
  /**
   * @remarks
   * Time of leaving the call, represented as a UNIX timestamp in seconds.
   * 
   * @example
   * 1620958150
   */
  leaveTs?: number;
  static names(): { [key: string]: string } {
    return {
      joinTs: 'JoinTs',
      leaveTs: 'LeaveTs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      joinTs: 'number',
      leaveTs: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisUserDetailResponseBodyUserDetail extends $dara.Model {
  /**
   * @remarks
   * Call creation time, represented as a UNIX timestamp in seconds.
   * 
   * @example
   * 1620957919
   */
  createdTs?: number;
  /**
   * @remarks
   * [responses_200_schema_properties_UserDetail_properties_OnlineDuration_type]integer
   * 
   * @example
   * 1620958150
   */
  destroyedTs?: number;
  /**
   * @remarks
   * [responses_200_schema_properties_FactorList_title]List of impact factors. An empty value indicates that the impact factors are unknown.
   * 
   * @example
   * 231
   */
  duration?: number;
  /**
   * @remarks
   * Geographic location information, such as: Beijing City - Beijing Municipality.
   * 
   * @example
   * 浙江省-杭州市
   */
  location?: string;
  /**
   * @remarks
   * [responses_200_schema_properties_UserDetail_properties_OnlinePeriods_items_properties_JoinTs_title]Time of joining the call, represented as a UNIX timestamp in seconds.
   * 
   * @example
   * 4G
   */
  network?: string;
  /**
   * @remarks
   * Online duration, in seconds.
   * 
   * @example
   * 231
   */
  onlineDuration?: number;
  /**
   * @remarks
   * Online period information.
   */
  onlinePeriods?: DescribeFaultDiagnosisUserDetailResponseBodyUserDetailOnlinePeriods[];
  /**
   * @remarks
   * [responses_200_schema_properties_UserDetail_properties_OnlinePeriods_type]array
   * 
   * @example
   * iOS
   */
  os?: string;
  /**
   * @remarks
   * [responses_200_schema_properties_UserDetail_properties_Location_title]Geographic location information, such as: Beijing City - Beijing Municipality
   * 
   * @example
   * 1.0.0
   */
  sdkVersion?: string;
  /**
   * @remarks
   * [responses_200_schema_properties_UserDetail_properties_OnlinePeriods_items_properties_LeaveTs_title]Time of leaving the call, represented as a UNIX timestamp in seconds.
   * 
   * @example
   * 0a497933****
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      createdTs: 'CreatedTs',
      destroyedTs: 'DestroyedTs',
      duration: 'Duration',
      location: 'Location',
      network: 'Network',
      onlineDuration: 'OnlineDuration',
      onlinePeriods: 'OnlinePeriods',
      os: 'Os',
      sdkVersion: 'SdkVersion',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTs: 'number',
      destroyedTs: 'number',
      duration: 'number',
      location: 'string',
      network: 'string',
      onlineDuration: 'number',
      onlinePeriods: { 'type': 'array', 'itemType': DescribeFaultDiagnosisUserDetailResponseBodyUserDetailOnlinePeriods },
      os: 'string',
      sdkVersion: 'string',
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.onlinePeriods)) {
      $dara.Model.validateArray(this.onlinePeriods);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisUserDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * Basic call information, returned when QueryCallUserInfo=false.
   */
  callInfo?: DescribeFaultDiagnosisUserDetailResponseBodyCallInfo;
  /**
   * @remarks
   * List of impact factors. An empty list indicates that the impact factors are unknown.
   */
  factorList?: DescribeFaultDiagnosisUserDetailResponseBodyFactorList[];
  /**
   * @remarks
   * Abnormal metrics.
   */
  faultMetricData?: DescribeFaultDiagnosisUserDetailResponseBodyFaultMetricData;
  /**
   * @remarks
   * List of Network carriers
   */
  networkOperators?: string[];
  /**
   * @remarks
   * The Request ID.
   * 
   * @example
   * 231470C1-ACFB-4C9F-844F-4CFE1E3804C5
   */
  requestId?: string;
  /**
   * @remarks
   * [responses_200_schema_properties_UserDetail_properties_CreatedTs_type]integer
   */
  userDetail?: DescribeFaultDiagnosisUserDetailResponseBodyUserDetail;
  static names(): { [key: string]: string } {
    return {
      callInfo: 'CallInfo',
      factorList: 'FactorList',
      faultMetricData: 'FaultMetricData',
      networkOperators: 'NetworkOperators',
      requestId: 'RequestId',
      userDetail: 'UserDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callInfo: DescribeFaultDiagnosisUserDetailResponseBodyCallInfo,
      factorList: { 'type': 'array', 'itemType': DescribeFaultDiagnosisUserDetailResponseBodyFactorList },
      faultMetricData: DescribeFaultDiagnosisUserDetailResponseBodyFaultMetricData,
      networkOperators: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      userDetail: DescribeFaultDiagnosisUserDetailResponseBodyUserDetail,
    };
  }

  validate() {
    if(this.callInfo && typeof (this.callInfo as any).validate === 'function') {
      (this.callInfo as any).validate();
    }
    if(Array.isArray(this.factorList)) {
      $dara.Model.validateArray(this.factorList);
    }
    if(this.faultMetricData && typeof (this.faultMetricData as any).validate === 'function') {
      (this.faultMetricData as any).validate();
    }
    if(Array.isArray(this.networkOperators)) {
      $dara.Model.validateArray(this.networkOperators);
    }
    if(this.userDetail && typeof (this.userDetail as any).validate === 'function') {
      (this.userDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

