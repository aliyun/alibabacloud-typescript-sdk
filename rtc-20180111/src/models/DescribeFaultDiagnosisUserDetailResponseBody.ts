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
   * @example
   * IN
   */
  callStatus?: string;
  /**
   * @example
   * 311
   */
  channelId?: string;
  /**
   * @example
   * 1620957905
   */
  createdTs?: number;
  /**
   * @example
   * 1620958150
   */
  destroyedTs?: number;
  /**
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
   * @example
   * 开始发布
   */
  eventName?: string;
  /**
   * @example
   * USER
   */
  eventType?: string;
  /**
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
  eventList?: DescribeFaultDiagnosisUserDetailResponseBodyFactorListRelatedEventDatasEventDataItemsEventList[];
  /**
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
  eventDataItems?: DescribeFaultDiagnosisUserDetailResponseBodyFactorListRelatedEventDatasEventDataItems[];
  /**
   * @example
   * SENDER
   */
  role?: string;
  /**
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
  ext?: { [key: string]: any };
  /**
   * @example
   * 1615892596
   */
  x?: string;
  /**
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
  nodes?: DescribeFaultDiagnosisUserDetailResponseBodyFactorListRelatedMetricDatasNodes[];
  /**
   * @example
   * SENDER
   */
  role?: string;
  /**
   * @example
   * AUDIO_STUCK
   */
  type?: string;
  /**
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
   * @example
   * 1
   */
  factorId?: string;
  /**
   * @example
   * LOCAL
   */
  faultSource?: string;
  relatedEventDatas?: DescribeFaultDiagnosisUserDetailResponseBodyFactorListRelatedEventDatas[];
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
   * @example
   * 1620957900
   */
  x?: string;
  /**
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
   * @example
   * 1620957919
   */
  joinTs?: number;
  /**
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
   * @example
   * 1620957919
   */
  createdTs?: number;
  /**
   * @example
   * 1620958150
   */
  destroyedTs?: number;
  /**
   * @example
   * 231
   */
  duration?: number;
  /**
   * @example
   * 浙江省-杭州市
   */
  location?: string;
  /**
   * @example
   * 4G
   */
  network?: string;
  /**
   * @example
   * 231
   */
  onlineDuration?: number;
  onlinePeriods?: DescribeFaultDiagnosisUserDetailResponseBodyUserDetailOnlinePeriods[];
  /**
   * @example
   * iOS
   */
  os?: string;
  /**
   * @example
   * 1.0.0
   */
  sdkVersion?: string;
  /**
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
  callInfo?: DescribeFaultDiagnosisUserDetailResponseBodyCallInfo;
  factorList?: DescribeFaultDiagnosisUserDetailResponseBodyFactorList[];
  faultMetricData?: DescribeFaultDiagnosisUserDetailResponseBodyFaultMetricData;
  networkOperators?: string[];
  /**
   * @example
   * 231470C1-ACFB-4C9F-844F-4CFE1E3804C5
   */
  requestId?: string;
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

