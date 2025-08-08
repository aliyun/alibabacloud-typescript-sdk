// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAiOutboundTaskProgressResponseBodyDataCalloutProgress extends $dara.Model {
  /**
   * @example
   * 1
   */
  callLossCount?: number;
  /**
   * @example
   * 0.01
   */
  callLossRate?: number;
  /**
   * @example
   * 5
   */
  callOutConnectCount?: number;
  /**
   * @example
   * 0.5
   */
  callOutConnectRate?: number;
  /**
   * @example
   * 10
   */
  callOutCount?: number;
  /**
   * @example
   * 4
   */
  callOutServicerPickupCount?: number;
  /**
   * @example
   * 0.4
   */
  callOutServicerPickupRate?: number;
  /**
   * @example
   * 5
   */
  callOutUserPickupCount?: number;
  /**
   * @example
   * 0.5
   */
  callOutUserPickupRate?: number;
  static names(): { [key: string]: string } {
    return {
      callLossCount: 'CallLossCount',
      callLossRate: 'CallLossRate',
      callOutConnectCount: 'CallOutConnectCount',
      callOutConnectRate: 'CallOutConnectRate',
      callOutCount: 'CallOutCount',
      callOutServicerPickupCount: 'CallOutServicerPickupCount',
      callOutServicerPickupRate: 'CallOutServicerPickupRate',
      callOutUserPickupCount: 'CallOutUserPickupCount',
      callOutUserPickupRate: 'CallOutUserPickupRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callLossCount: 'number',
      callLossRate: 'number',
      callOutConnectCount: 'number',
      callOutConnectRate: 'number',
      callOutCount: 'number',
      callOutServicerPickupCount: 'number',
      callOutServicerPickupRate: 'number',
      callOutUserPickupCount: 'number',
      callOutUserPickupRate: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAiOutboundTaskProgressResponseBodyDataTaskProgress extends $dara.Model {
  /**
   * @example
   * 2
   */
  callingCount?: number;
  /**
   * @example
   * 2
   */
  connectCount?: number;
  /**
   * @example
   * 0.2
   */
  connectRate?: number;
  /**
   * @example
   * 2
   */
  finishCount?: number;
  /**
   * @example
   * 0.20
   */
  finishRate?: number;
  /**
   * @example
   * 2
   */
  servicerPickupCount?: number;
  /**
   * @example
   * 0.2
   */
  servicerPickupRate?: number;
  /**
   * @example
   * 2
   */
  terminateCount?: number;
  /**
   * @example
   * 10
   */
  totalCount?: number;
  /**
   * @example
   * 2
   */
  userPickupCount?: number;
  /**
   * @example
   * 0.2
   */
  userPickupRate?: number;
  /**
   * @example
   * 2
   */
  waitingCallCount?: number;
  /**
   * @example
   * 2
   */
  waitingRecallCount?: number;
  static names(): { [key: string]: string } {
    return {
      callingCount: 'CallingCount',
      connectCount: 'ConnectCount',
      connectRate: 'ConnectRate',
      finishCount: 'FinishCount',
      finishRate: 'FinishRate',
      servicerPickupCount: 'ServicerPickupCount',
      servicerPickupRate: 'ServicerPickupRate',
      terminateCount: 'TerminateCount',
      totalCount: 'TotalCount',
      userPickupCount: 'UserPickupCount',
      userPickupRate: 'UserPickupRate',
      waitingCallCount: 'WaitingCallCount',
      waitingRecallCount: 'WaitingRecallCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callingCount: 'number',
      connectCount: 'number',
      connectRate: 'number',
      finishCount: 'number',
      finishRate: 'number',
      servicerPickupCount: 'number',
      servicerPickupRate: 'number',
      terminateCount: 'number',
      totalCount: 'number',
      userPickupCount: 'number',
      userPickupRate: 'number',
      waitingCallCount: 'number',
      waitingRecallCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAiOutboundTaskProgressResponseBodyData extends $dara.Model {
  calloutProgress?: GetAiOutboundTaskProgressResponseBodyDataCalloutProgress;
  /**
   * @example
   * 123456
   */
  taskId?: number;
  taskProgress?: GetAiOutboundTaskProgressResponseBodyDataTaskProgress;
  /**
   * @example
   * 2
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      calloutProgress: 'CalloutProgress',
      taskId: 'TaskId',
      taskProgress: 'TaskProgress',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calloutProgress: GetAiOutboundTaskProgressResponseBodyDataCalloutProgress,
      taskId: 'number',
      taskProgress: GetAiOutboundTaskProgressResponseBodyDataTaskProgress,
      type: 'number',
    };
  }

  validate() {
    if(this.calloutProgress && typeof (this.calloutProgress as any).validate === 'function') {
      (this.calloutProgress as any).validate();
    }
    if(this.taskProgress && typeof (this.taskProgress as any).validate === 'function') {
      (this.taskProgress as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAiOutboundTaskProgressResponseBody extends $dara.Model {
  /**
   * @example
   * ok
   */
  code?: string;
  data?: GetAiOutboundTaskProgressResponseBodyData;
  /**
   * @example
   * ok
   */
  message?: string;
  /**
   * @example
   * D9CB3933-9FE3-4870-BA8E-2BEE91B69D23
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetAiOutboundTaskProgressResponseBodyData,
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

