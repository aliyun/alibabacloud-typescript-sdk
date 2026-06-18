// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAiOutboundTaskProgressResponseBodyDataCalloutProgress extends $dara.Model {
  /**
   * @remarks
   * Call loss count.  
   * > A parameter specific to predictive outbound calls.
   * 
   * @example
   * 1
   */
  callLossCount?: number;
  /**
   * @remarks
   * Call Loss Rate.  
   * > A parameter exclusive to predictive outbound calls.
   * 
   * @example
   * 0.01
   */
  callLossRate?: number;
  /**
   * @remarks
   * Number of successful outbound call connections.  
   * > This parameter is specific to automatic outbound calls.
   * 
   * @example
   * 5
   */
  callOutConnectCount?: number;
  /**
   * @remarks
   * Outbound Call Connection Rate.  
   * > A parameter exclusive to automated outbound calls.
   * 
   * @example
   * 0.5
   */
  callOutConnectRate?: number;
  /**
   * @remarks
   * Number of outbound calls.
   * 
   * @example
   * 10
   */
  callOutCount?: number;
  /**
   * @remarks
   * Agent Pickup Count.  
   * > A parameter exclusive to predictive outbound calls.
   * 
   * @example
   * 4
   */
  callOutServicerPickupCount?: number;
  /**
   * @remarks
   * Agent pickup rate.  
   * > A parameter specific to predictive outbound calls.
   * 
   * @example
   * 0.4
   */
  callOutServicerPickupRate?: number;
  /**
   * @remarks
   * Customer Pickup Count.  
   * > A parameter exclusive to predictive outbound calls.
   * 
   * @example
   * 5
   */
  callOutUserPickupCount?: number;
  /**
   * @remarks
   * Customer Pickup Rate.  
   * > A parameter exclusive to predictive outbound calls.
   * 
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
   * @remarks
   * Number of jobs in calling status.
   * 
   * @example
   * 2
   */
  callingCount?: number;
  /**
   * @remarks
   * Number of connected jobs.
   * 
   * > Parameter specific to auto dialing.
   * 
   * @example
   * 2
   */
  connectCount?: number;
  /**
   * @remarks
   * Job connection rate.  
   * > A parameter specific to automatic outbound calls.
   * 
   * @example
   * 0.2
   */
  connectRate?: number;
  /**
   * @remarks
   * Number of completed jobs.
   * 
   * @example
   * 2
   */
  finishCount?: number;
  /**
   * @remarks
   * Job completion rate.
   * 
   * @example
   * 0.20
   */
  finishRate?: number;
  /**
   * @remarks
   * Number of agent pickups.
   * 
   * > Parameter specific to predictive dialing.
   * 
   * @example
   * 2
   */
  servicerPickupCount?: number;
  /**
   * @remarks
   * Agent pickup rate.
   * 
   * > Exclusive parameter for predictive outbound calls.
   * 
   * @example
   * 0.2
   */
  servicerPickupRate?: number;
  /**
   * @remarks
   * Number of stopped jobs.
   * 
   * @example
   * 2
   */
  terminateCount?: number;
  /**
   * @remarks
   * Total number of jobs.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  /**
   * @remarks
   * Number of customer pickups.
   * 
   * > Parameter specific to predictive dialing.
   * 
   * @example
   * 2
   */
  userPickupCount?: number;
  /**
   * @remarks
   * Customer pickup rate.
   * 
   * > Exclusive parameter for predictive outbound calls.
   * 
   * @example
   * 0.2
   */
  userPickupRate?: number;
  /**
   * @remarks
   * Number of pending call jobs.
   * 
   * @example
   * 2
   */
  waitingCallCount?: number;
  /**
   * @remarks
   * Number of jobs pending redial.
   * 
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
  /**
   * @remarks
   * Progress by outbound call dimension.
   */
  calloutProgress?: GetAiOutboundTaskProgressResponseBodyDataCalloutProgress;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * 123456
   */
  taskId?: number;
  /**
   * @remarks
   * Job dimension progress.
   */
  taskProgress?: GetAiOutboundTaskProgressResponseBodyDataTaskProgress;
  /**
   * @remarks
   * Task Type. Valid values:  
   * - **2**: Predictive.  
   * - **3**: Automatic.
   * 
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
   * @remarks
   * Status code.
   * 
   * @example
   * ok
   */
  code?: string;
  /**
   * @remarks
   * Job progress.
   */
  data?: GetAiOutboundTaskProgressResponseBodyData;
  /**
   * @remarks
   * Description of the status code.
   * 
   * @example
   * ok
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D9CB3933-9FE3-4870-BA8E-2BEE91B69D23
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the API call succeeded.
   * - **true**: Succeeded.
   * - **false**: Failed.
   * 
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

