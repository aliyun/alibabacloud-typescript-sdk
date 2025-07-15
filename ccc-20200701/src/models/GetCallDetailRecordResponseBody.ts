// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCallDetailRecordResponseBodyDataAgentEventsEventSequence extends $dara.Model {
  /**
   * @example
   * 3
   */
  duration?: number;
  /**
   * @example
   * Dialing
   */
  event?: string;
  /**
   * @example
   * 1604639129000
   */
  eventTime?: number;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      event: 'Event',
      eventTime: 'EventTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      event: 'string',
      eventTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCallDetailRecordResponseBodyDataAgentEvents extends $dara.Model {
  /**
   * @example
   * agent@ccc-test
   */
  agentId?: string;
  agentName?: string;
  eventSequence?: GetCallDetailRecordResponseBodyDataAgentEventsEventSequence[];
  /**
   * @example
   * skillgroup@ccc-test
   */
  skillGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      agentName: 'AgentName',
      eventSequence: 'EventSequence',
      skillGroupId: 'SkillGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      agentName: 'string',
      eventSequence: { 'type': 'array', 'itemType': GetCallDetailRecordResponseBodyDataAgentEventsEventSequence },
      skillGroupId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.eventSequence)) {
      $dara.Model.validateArray(this.eventSequence);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCallDetailRecordResponseBodyDataAnalyticsReportEmotion extends $dara.Model {
  confidence?: number;
  remark?: string;
  success?: boolean;
  taskId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      confidence: 'Confidence',
      remark: 'Remark',
      success: 'Success',
      taskId: 'TaskId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confidence: 'number',
      remark: 'string',
      success: 'boolean',
      taskId: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCallDetailRecordResponseBodyDataAnalyticsReportProblemSolving extends $dara.Model {
  problem?: string;
  solution?: string;
  solved?: boolean;
  success?: boolean;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      problem: 'Problem',
      solution: 'Solution',
      solved: 'Solved',
      success: 'Success',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      problem: 'string',
      solution: 'string',
      solved: 'boolean',
      success: 'boolean',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCallDetailRecordResponseBodyDataAnalyticsReportSatisfaction extends $dara.Model {
  remark?: string;
  satisfactionDescription?: string;
  success?: boolean;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      remark: 'Remark',
      satisfactionDescription: 'SatisfactionDescription',
      success: 'Success',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remark: 'string',
      satisfactionDescription: 'string',
      success: 'boolean',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCallDetailRecordResponseBodyDataAnalyticsReportTodoList extends $dara.Model {
  success?: boolean;
  taskId?: string;
  tasks?: string[];
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
      taskId: 'TaskId',
      tasks: 'Tasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
      taskId: 'string',
      tasks: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.tasks)) {
      $dara.Model.validateArray(this.tasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCallDetailRecordResponseBodyDataAnalyticsReport extends $dara.Model {
  emotion?: GetCallDetailRecordResponseBodyDataAnalyticsReportEmotion;
  problemSolving?: GetCallDetailRecordResponseBodyDataAnalyticsReportProblemSolving;
  satisfaction?: GetCallDetailRecordResponseBodyDataAnalyticsReportSatisfaction;
  todoList?: GetCallDetailRecordResponseBodyDataAnalyticsReportTodoList;
  static names(): { [key: string]: string } {
    return {
      emotion: 'Emotion',
      problemSolving: 'ProblemSolving',
      satisfaction: 'Satisfaction',
      todoList: 'TodoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      emotion: GetCallDetailRecordResponseBodyDataAnalyticsReportEmotion,
      problemSolving: GetCallDetailRecordResponseBodyDataAnalyticsReportProblemSolving,
      satisfaction: GetCallDetailRecordResponseBodyDataAnalyticsReportSatisfaction,
      todoList: GetCallDetailRecordResponseBodyDataAnalyticsReportTodoList,
    };
  }

  validate() {
    if(this.emotion && typeof (this.emotion as any).validate === 'function') {
      (this.emotion as any).validate();
    }
    if(this.problemSolving && typeof (this.problemSolving as any).validate === 'function') {
      (this.problemSolving as any).validate();
    }
    if(this.satisfaction && typeof (this.satisfaction as any).validate === 'function') {
      (this.satisfaction as any).validate();
    }
    if(this.todoList && typeof (this.todoList as any).validate === 'function') {
      (this.todoList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCallDetailRecordResponseBodyDataCustomerEventsEventSequence extends $dara.Model {
  /**
   * @example
   * Released
   */
  event?: string;
  /**
   * @example
   * 1532458000000
   */
  eventTime?: number;
  static names(): { [key: string]: string } {
    return {
      event: 'Event',
      eventTime: 'EventTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      event: 'string',
      eventTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCallDetailRecordResponseBodyDataCustomerEvents extends $dara.Model {
  /**
   * @example
   * 1332315****
   */
  customerId?: string;
  eventSequence?: GetCallDetailRecordResponseBodyDataCustomerEventsEventSequence[];
  static names(): { [key: string]: string } {
    return {
      customerId: 'CustomerId',
      eventSequence: 'EventSequence',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customerId: 'string',
      eventSequence: { 'type': 'array', 'itemType': GetCallDetailRecordResponseBodyDataCustomerEventsEventSequence },
    };
  }

  validate() {
    if(Array.isArray(this.eventSequence)) {
      $dara.Model.validateArray(this.eventSequence);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCallDetailRecordResponseBodyDataIvrEventsEventSequence extends $dara.Model {
  /**
   * @example
   * Route2IVR
   */
  event?: string;
  /**
   * @example
   * 1604639129000
   */
  eventTime?: number;
  static names(): { [key: string]: string } {
    return {
      event: 'Event',
      eventTime: 'EventTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      event: 'string',
      eventTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCallDetailRecordResponseBodyDataIvrEvents extends $dara.Model {
  eventSequence?: GetCallDetailRecordResponseBodyDataIvrEventsEventSequence[];
  /**
   * @example
   * edaf2eaa-8f88-44ca-812e-41b3cd2b7a90
   */
  flowId?: string;
  /**
   * @example
   * MAIN_FLOW
   */
  flowType?: string;
  static names(): { [key: string]: string } {
    return {
      eventSequence: 'EventSequence',
      flowId: 'FlowId',
      flowType: 'FlowType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventSequence: { 'type': 'array', 'itemType': GetCallDetailRecordResponseBodyDataIvrEventsEventSequence },
      flowId: 'string',
      flowType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.eventSequence)) {
      $dara.Model.validateArray(this.eventSequence);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCallDetailRecordResponseBodyDataQueueEventsEventSequence extends $dara.Model {
  /**
   * @example
   * Enqueue
   */
  event?: string;
  /**
   * @example
   * 1604639129000
   */
  eventTime?: number;
  static names(): { [key: string]: string } {
    return {
      event: 'Event',
      eventTime: 'EventTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      event: 'string',
      eventTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCallDetailRecordResponseBodyDataQueueEvents extends $dara.Model {
  eventSequence?: GetCallDetailRecordResponseBodyDataQueueEventsEventSequence[];
  /**
   * @example
   * edaf2eaa-8f88-44ca-812e-41b3cd2b7a90
   */
  flowId?: string;
  /**
   * @example
   * skillgroup@ccc-test
   */
  queueId?: string;
  queueName?: string;
  /**
   * @example
   * 1
   */
  queueType?: number;
  static names(): { [key: string]: string } {
    return {
      eventSequence: 'EventSequence',
      flowId: 'FlowId',
      queueId: 'QueueId',
      queueName: 'QueueName',
      queueType: 'QueueType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventSequence: { 'type': 'array', 'itemType': GetCallDetailRecordResponseBodyDataQueueEventsEventSequence },
      flowId: 'string',
      queueId: 'string',
      queueName: 'string',
      queueType: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.eventSequence)) {
      $dara.Model.validateArray(this.eventSequence);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCallDetailRecordResponseBodyData extends $dara.Model {
  agentEvents?: GetCallDetailRecordResponseBodyDataAgentEvents[];
  /**
   * @example
   * agent1@ccc-test,agent2@ccc-test
   */
  agentIds?: string;
  /**
   * @example
   * agent1,agent2
   */
  agentNames?: string;
  analyticsReport?: GetCallDetailRecordResponseBodyDataAnalyticsReport;
  analyticsReportReady?: boolean;
  /**
   * @example
   * 50
   */
  callDuration?: number;
  /**
   * @example
   * 1332315****
   */
  calledNumber?: string;
  calleeLocation?: string;
  callerLocation?: string;
  /**
   * @example
   * 0533128****
   */
  callingNumber?: string;
  /**
   * @example
   * Success
   */
  contactDisposition?: string;
  /**
   * @example
   * job-10963442671187****
   */
  contactId?: string;
  contactType?: string;
  customerEvents?: GetCallDetailRecordResponseBodyDataCustomerEvents[];
  /**
   * @example
   * NotConnected
   */
  earlyMediaState?: string;
  /**
   * @example
   * 1532458000000
   */
  establishedTime?: number;
  /**
   * @example
   * ccc-test
   */
  instanceId?: string;
  ivrEvents?: GetCallDetailRecordResponseBodyDataIvrEvents[];
  outsideNumberReleaseReason?: string;
  queueEvents?: GetCallDetailRecordResponseBodyDataQueueEvents[];
  /**
   * @example
   * true
   */
  recordingReady?: boolean;
  /**
   * @example
   * customer
   */
  releaseInitiator?: string;
  /**
   * @example
   * 200 - OK
   */
  releaseReason?: string;
  /**
   * @example
   * 1532458000000
   */
  releaseTime?: number;
  /**
   * @example
   * 1
   */
  satisfaction?: number;
  /**
   * @example
   * IVR
   */
  satisfactionSurveyChannel?: string;
  /**
   * @example
   * true
   */
  satisfactionSurveyOffered?: boolean;
  /**
   * @example
   * skillgroup@ccc-test
   */
  skillGroupIds?: string;
  skillGroupNames?: string;
  /**
   * @example
   * 1532458000000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      agentEvents: 'AgentEvents',
      agentIds: 'AgentIds',
      agentNames: 'AgentNames',
      analyticsReport: 'AnalyticsReport',
      analyticsReportReady: 'AnalyticsReportReady',
      callDuration: 'CallDuration',
      calledNumber: 'CalledNumber',
      calleeLocation: 'CalleeLocation',
      callerLocation: 'CallerLocation',
      callingNumber: 'CallingNumber',
      contactDisposition: 'ContactDisposition',
      contactId: 'ContactId',
      contactType: 'ContactType',
      customerEvents: 'CustomerEvents',
      earlyMediaState: 'EarlyMediaState',
      establishedTime: 'EstablishedTime',
      instanceId: 'InstanceId',
      ivrEvents: 'IvrEvents',
      outsideNumberReleaseReason: 'OutsideNumberReleaseReason',
      queueEvents: 'QueueEvents',
      recordingReady: 'RecordingReady',
      releaseInitiator: 'ReleaseInitiator',
      releaseReason: 'ReleaseReason',
      releaseTime: 'ReleaseTime',
      satisfaction: 'Satisfaction',
      satisfactionSurveyChannel: 'SatisfactionSurveyChannel',
      satisfactionSurveyOffered: 'SatisfactionSurveyOffered',
      skillGroupIds: 'SkillGroupIds',
      skillGroupNames: 'SkillGroupNames',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentEvents: { 'type': 'array', 'itemType': GetCallDetailRecordResponseBodyDataAgentEvents },
      agentIds: 'string',
      agentNames: 'string',
      analyticsReport: GetCallDetailRecordResponseBodyDataAnalyticsReport,
      analyticsReportReady: 'boolean',
      callDuration: 'number',
      calledNumber: 'string',
      calleeLocation: 'string',
      callerLocation: 'string',
      callingNumber: 'string',
      contactDisposition: 'string',
      contactId: 'string',
      contactType: 'string',
      customerEvents: { 'type': 'array', 'itemType': GetCallDetailRecordResponseBodyDataCustomerEvents },
      earlyMediaState: 'string',
      establishedTime: 'number',
      instanceId: 'string',
      ivrEvents: { 'type': 'array', 'itemType': GetCallDetailRecordResponseBodyDataIvrEvents },
      outsideNumberReleaseReason: 'string',
      queueEvents: { 'type': 'array', 'itemType': GetCallDetailRecordResponseBodyDataQueueEvents },
      recordingReady: 'boolean',
      releaseInitiator: 'string',
      releaseReason: 'string',
      releaseTime: 'number',
      satisfaction: 'number',
      satisfactionSurveyChannel: 'string',
      satisfactionSurveyOffered: 'boolean',
      skillGroupIds: 'string',
      skillGroupNames: 'string',
      startTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.agentEvents)) {
      $dara.Model.validateArray(this.agentEvents);
    }
    if(this.analyticsReport && typeof (this.analyticsReport as any).validate === 'function') {
      (this.analyticsReport as any).validate();
    }
    if(Array.isArray(this.customerEvents)) {
      $dara.Model.validateArray(this.customerEvents);
    }
    if(Array.isArray(this.ivrEvents)) {
      $dara.Model.validateArray(this.ivrEvents);
    }
    if(Array.isArray(this.queueEvents)) {
      $dara.Model.validateArray(this.queueEvents);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCallDetailRecordResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  data?: GetCallDetailRecordResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  message?: string;
  /**
   * @example
   * 7BEEA660-A45A-45E3-98CC-AFC65E715C23
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetCallDetailRecordResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
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

