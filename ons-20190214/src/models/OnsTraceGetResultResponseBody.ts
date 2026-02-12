// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OnsTraceGetResultResponseBodyTraceDataTraceListTraceMapDoSubListSubMapDoClientListSubClientInfoDo extends $dara.Model {
  clientHost?: string;
  costTime?: number;
  reconsumeTimes?: number;
  status?: string;
  subGroupName?: string;
  subTime?: number;
  static names(): { [key: string]: string } {
    return {
      clientHost: 'ClientHost',
      costTime: 'CostTime',
      reconsumeTimes: 'ReconsumeTimes',
      status: 'Status',
      subGroupName: 'SubGroupName',
      subTime: 'SubTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientHost: 'string',
      costTime: 'number',
      reconsumeTimes: 'number',
      status: 'string',
      subGroupName: 'string',
      subTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTraceGetResultResponseBodyTraceDataTraceListTraceMapDoSubListSubMapDoClientList extends $dara.Model {
  subClientInfoDo?: OnsTraceGetResultResponseBodyTraceDataTraceListTraceMapDoSubListSubMapDoClientListSubClientInfoDo[];
  static names(): { [key: string]: string } {
    return {
      subClientInfoDo: 'SubClientInfoDo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subClientInfoDo: { 'type': 'array', 'itemType': OnsTraceGetResultResponseBodyTraceDataTraceListTraceMapDoSubListSubMapDoClientListSubClientInfoDo },
    };
  }

  validate() {
    if(Array.isArray(this.subClientInfoDo)) {
      $dara.Model.validateArray(this.subClientInfoDo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTraceGetResultResponseBodyTraceDataTraceListTraceMapDoSubListSubMapDo extends $dara.Model {
  clientList?: OnsTraceGetResultResponseBodyTraceDataTraceListTraceMapDoSubListSubMapDoClientList;
  failCount?: number;
  subGroupName?: string;
  successCount?: number;
  static names(): { [key: string]: string } {
    return {
      clientList: 'ClientList',
      failCount: 'FailCount',
      subGroupName: 'SubGroupName',
      successCount: 'SuccessCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientList: OnsTraceGetResultResponseBodyTraceDataTraceListTraceMapDoSubListSubMapDoClientList,
      failCount: 'number',
      subGroupName: 'string',
      successCount: 'number',
    };
  }

  validate() {
    if(this.clientList && typeof (this.clientList as any).validate === 'function') {
      (this.clientList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTraceGetResultResponseBodyTraceDataTraceListTraceMapDoSubList extends $dara.Model {
  subMapDo?: OnsTraceGetResultResponseBodyTraceDataTraceListTraceMapDoSubListSubMapDo[];
  static names(): { [key: string]: string } {
    return {
      subMapDo: 'SubMapDo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subMapDo: { 'type': 'array', 'itemType': OnsTraceGetResultResponseBodyTraceDataTraceListTraceMapDoSubListSubMapDo },
    };
  }

  validate() {
    if(Array.isArray(this.subMapDo)) {
      $dara.Model.validateArray(this.subMapDo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTraceGetResultResponseBodyTraceDataTraceListTraceMapDo extends $dara.Model {
  bornHost?: string;
  costTime?: number;
  msgId?: string;
  msgKey?: string;
  pubGroupName?: string;
  pubTime?: number;
  status?: string;
  subList?: OnsTraceGetResultResponseBodyTraceDataTraceListTraceMapDoSubList;
  tag?: string;
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      bornHost: 'BornHost',
      costTime: 'CostTime',
      msgId: 'MsgId',
      msgKey: 'MsgKey',
      pubGroupName: 'PubGroupName',
      pubTime: 'PubTime',
      status: 'Status',
      subList: 'SubList',
      tag: 'Tag',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bornHost: 'string',
      costTime: 'number',
      msgId: 'string',
      msgKey: 'string',
      pubGroupName: 'string',
      pubTime: 'number',
      status: 'string',
      subList: OnsTraceGetResultResponseBodyTraceDataTraceListTraceMapDoSubList,
      tag: 'string',
      topic: 'string',
    };
  }

  validate() {
    if(this.subList && typeof (this.subList as any).validate === 'function') {
      (this.subList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTraceGetResultResponseBodyTraceDataTraceList extends $dara.Model {
  traceMapDo?: OnsTraceGetResultResponseBodyTraceDataTraceListTraceMapDo[];
  static names(): { [key: string]: string } {
    return {
      traceMapDo: 'TraceMapDo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      traceMapDo: { 'type': 'array', 'itemType': OnsTraceGetResultResponseBodyTraceDataTraceListTraceMapDo },
    };
  }

  validate() {
    if(Array.isArray(this.traceMapDo)) {
      $dara.Model.validateArray(this.traceMapDo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTraceGetResultResponseBodyTraceData extends $dara.Model {
  /**
   * @remarks
   * The point in time when the task was created.
   * 
   * @example
   * 1570966857000
   */
  createTime?: number;
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
   * The ID of the message that is queried.
   * 
   * @example
   * 1E05791C117818B4AAC23B1BB0CE****
   */
  msgId?: string;
  /**
   * @remarks
   * The key of the message that is queried.
   * 
   * @example
   * ORDERID_100
   */
  msgKey?: string;
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * 272967562652883649157096685****
   */
  queryId?: string;
  /**
   * @remarks
   * The status of the task. Valid values:
   * 
   * *   **finish**: The task is complete.
   * *   **working**: The task is in progress.
   * *   **removed**: The task is deleted.
   * 
   * @example
   * finish
   */
  status?: string;
  /**
   * @remarks
   * The topic in which the message is stored.
   * 
   * @example
   * test
   */
  topic?: string;
  traceList?: OnsTraceGetResultResponseBodyTraceDataTraceList;
  /**
   * @remarks
   * The most recent point in time when the task was updated.
   * 
   * @example
   * 1570966877000
   */
  updateTime?: number;
  /**
   * @remarks
   * The ID of the user who created the task.
   * 
   * @example
   * 27296756265288****
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      instanceId: 'InstanceId',
      msgId: 'MsgId',
      msgKey: 'MsgKey',
      queryId: 'QueryId',
      status: 'Status',
      topic: 'Topic',
      traceList: 'TraceList',
      updateTime: 'UpdateTime',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      instanceId: 'string',
      msgId: 'string',
      msgKey: 'string',
      queryId: 'string',
      status: 'string',
      topic: 'string',
      traceList: OnsTraceGetResultResponseBodyTraceDataTraceList,
      updateTime: 'number',
      userId: 'string',
    };
  }

  validate() {
    if(this.traceList && typeof (this.traceList as any).validate === 'function') {
      (this.traceList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTraceGetResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request. This parameter is a common parameter. Each request has a unique ID. You can use this ID to troubleshoot issues.
   * 
   * @example
   * 84EE24D2-851F-40D6-B99E-4D6AB909****
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the message trace.
   */
  traceData?: OnsTraceGetResultResponseBodyTraceData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      traceData: 'TraceData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      traceData: OnsTraceGetResultResponseBodyTraceData,
    };
  }

  validate() {
    if(this.traceData && typeof (this.traceData as any).validate === 'function') {
      (this.traceData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

