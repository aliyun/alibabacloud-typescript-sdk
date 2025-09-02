// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAlertMessagesResponseBodyDataAlertMessagesInstances extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * 12345
   */
  instanceId?: number;
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * 1234
   */
  nodeId?: number;
  /**
   * @remarks
   * The name of the node.
   * 
   * @example
   * Node name
   */
  nodeName?: string;
  /**
   * @remarks
   * The ID of the workspace to which the node belongs.
   * 
   * @example
   * 1234
   */
  projectId?: number;
  /**
   * @remarks
   * The status of the instance. Valid values: NOT_RUN, WAIT_TIME, WAIT_RESOURCE, RUNNING, CHECKING, CHECKING_CONDITION, FAILURE, and SUCCESS. The value NOT_RUN indicates that the instance is not run. The value WAIT_TIME indicates that the instance is waiting to be run. The value WAIT_RESOURCE indicates that the instance is waiting for resources. The value RUNNING indicates that the instance is running. The value CHECKING indicates that data quality is being checked for the node for which the instance is generated. The value CHECKING_CONDITION indicates that branch conditions are being checked for the node for which the instance is generated. The value FAILURE indicates that the instance fails to run. The value SUCCESS indicates that the instance is successfully run.
   * 
   * @example
   * NOT_RUN
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      projectId: 'ProjectId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'number',
      nodeId: 'number',
      nodeName: 'string',
      projectId: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertMessagesResponseBodyDataAlertMessagesNodes extends $dara.Model {
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * 1234
   */
  nodeId?: number;
  /**
   * @remarks
   * The name of the node.
   * 
   * @example
   * Node name
   */
  nodeName?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account used by the node owner.
   * 
   * @example
   * 95279527952****
   */
  owner?: string;
  /**
   * @remarks
   * The ID of the workspace to which the node belongs.
   * 
   * @example
   * 1234
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      owner: 'Owner',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeId: 'number',
      nodeName: 'string',
      owner: 'string',
      projectId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertMessagesResponseBodyDataAlertMessagesSlaAlert extends $dara.Model {
  /**
   * @remarks
   * The baseline ID.
   * 
   * @example
   * 1234
   */
  baselineId?: number;
  /**
   * @remarks
   * The name of the baseline.
   * 
   * @example
   * Baseline name
   */
  baselineName?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account used by the baseline owner. Multiple IDs are separated by commas (,).
   * 
   * @example
   * 952795279****
   */
  baselineOwner?: string;
  /**
   * @remarks
   * The data timestamp of the baseline instance.
   * 
   * @example
   * 1553443200000
   */
  bizdate?: number;
  /**
   * @remarks
   * The ID of the cycle of the baseline instance. Valid values of the ID of an hour-level cycle: [1,24]. The ID of a day-level cycle is 1.
   * 
   * @example
   * 1
   */
  inGroupId?: number;
  /**
   * @remarks
   * The ID of the workspace to which the baseline belongs.
   * 
   * @example
   * 1234
   */
  projectId?: number;
  /**
   * @remarks
   * The status of the baseline. Valid values: ERROR, SAFE, DANGEROUS, and OVER. The value ERROR indicates that no nodes are associated with the baseline, or all nodes associated with the baseline are suspended. The value SAFE indicates that nodes are run before the alert duration begins. The value DANGEROUS indicates that nodes are still running after the alert duration ends but the committed completion time does not arrive. The value OVER indicates that nodes are still running after the committed completion time.
   * 
   * @example
   * SAFE
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      baselineId: 'BaselineId',
      baselineName: 'BaselineName',
      baselineOwner: 'BaselineOwner',
      bizdate: 'Bizdate',
      inGroupId: 'InGroupId',
      projectId: 'ProjectId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baselineId: 'number',
      baselineName: 'string',
      baselineOwner: 'string',
      bizdate: 'number',
      inGroupId: 'number',
      projectId: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertMessagesResponseBodyDataAlertMessagesTopics extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance that triggered the event.
   * 
   * @example
   * 12345
   */
  instanceId?: number;
  /**
   * @remarks
   * The ID of the node that triggered the event.
   * 
   * @example
   * 1234
   */
  nodeId?: number;
  /**
   * @remarks
   * The event ID.
   * 
   * @example
   * 1234
   */
  topicId?: number;
  /**
   * @remarks
   * The name of the event.
   * 
   * @example
   * 9527 error
   */
  topicName?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account used by the event owner.
   * 
   * @example
   * 9527952795****
   */
  topicOwner?: string;
  /**
   * @remarks
   * The status of the event. Valid values: IGNORE, NEW, FIXING, and RECOVER. The value IGNORE indicates that the event is ignored. The value NEW indicates that the event is a new event. The value FIXING indicates that the event is being handled. The value RECOVER indicates that the event is handled.
   * 
   * @example
   * FIXING
   */
  topicStatus?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      nodeId: 'NodeId',
      topicId: 'TopicId',
      topicName: 'TopicName',
      topicOwner: 'TopicOwner',
      topicStatus: 'TopicStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'number',
      nodeId: 'number',
      topicId: 'number',
      topicName: 'string',
      topicOwner: 'string',
      topicStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertMessagesResponseBodyDataAlertMessages extends $dara.Model {
  /**
   * @remarks
   * The alert ID.
   * 
   * @example
   * 1234
   */
  alertId?: number;
  /**
   * @remarks
   * The sending status of the notification. Valid values: READY_TO_SEND, SEND_FAIL, SEND_SUCCESS, and SEND_OVERLIMIT. The value READY_TO_SEND indicates that the notification is waiting to be sent. The value SEND_FAIL indicates that the notification fails to be sent. The value SEND_SUCCESS indicates that the notification is sent. The value SEND_OVERLIMIT indicates that the number of notifications that are sent exceeds the upper limit.
   * 
   * @example
   * READY_TO_SEND
   */
  alertMessageStatus?: string;
  /**
   * @remarks
   * The notification method. Valid values: MAIL, SMS, and PHONE. Only DataWorks Professional Edition and more advanced editions support the PHONE notification method.
   * 
   * @example
   * SMS
   */
  alertMethod?: string;
  /**
   * @remarks
   * The timestamp when the alert was reported.
   * 
   * @example
   * 1553531401000
   */
  alertTime?: number;
  /**
   * @remarks
   * The ID of the Alibaba Cloud used by the alert recipient.
   * 
   * @example
   * 9527952795****
   */
  alertUser?: string;
  /**
   * @remarks
   * The content of the alert.
   * 
   * @example
   * Node error
   */
  content?: string;
  /**
   * @remarks
   * The instances that triggered the custom alert rule. This parameter is returned if the value of the Source parameter is REMIND_ALERT. This parameter is left empty if the value of the Source parameter is not REMIND_ALERT.
   */
  instances?: ListAlertMessagesResponseBodyDataAlertMessagesInstances[];
  /**
   * @remarks
   * The nodes returned for different alert sources.
   * 
   * *   The nodes that form a loop are returned if the value of the Source parameter is NODE_CYCLE_ALERT.
   * *   The nodes that are isolated are returned if the value of the Source parameter is NODE_LONELY_ALERT.
   */
  nodes?: ListAlertMessagesResponseBodyDataAlertMessagesNodes[];
  /**
   * @remarks
   * The ID of the custom alert rule that was triggered. This parameter is returned if the value of the Source parameter is REMIND_ALERT.
   * 
   * @example
   * 1234
   */
  remindId?: number;
  /**
   * @remarks
   * The name of the custom alert rule that was triggered. This parameter is returned if the value of the Source parameter is REMIND_ALERT.
   * 
   * @example
   * Custom monitoring rule name
   */
  remindName?: string;
  /**
   * @remarks
   * The basic information about the baseline instance that triggered an alert. This parameter is returned if the value of the Source parameter is SLA_ALERT. This parameter is left empty if the value of the Source parameter is not SLA_ALERT.
   */
  slaAlert?: ListAlertMessagesResponseBodyDataAlertMessagesSlaAlert;
  /**
   * @remarks
   * The type of the alert. Valid values: REMIND_ALERT, TOPIC_ALERT, SLA_ALERT, NODE_CYCLE_ALERT, and NODE_LONELY_ALERT. The value REMIND_ALERT indicates that the alert is a custom alert. The value TOPIC_ALERT indicates that the alert is an event alert. The value SLA_ALERT indicates that the alert is a baseline alert. The value NODE_CYCLE_ALERT indicates that the alert is reported for a node dependency loop. The value NODE_LONELY_ALERT indicates that the alert is reported for isolated nodes.
   * 
   * @example
   * REMIND_ALERT
   */
  source?: string;
  /**
   * @remarks
   * The events that triggered alerts. This parameter is returned if the value of the Source parameter is TOPIC_ALERT. This parameter is left empty if the value of the Source parameter is not TOPIC_ALERT.
   */
  topics?: ListAlertMessagesResponseBodyDataAlertMessagesTopics[];
  static names(): { [key: string]: string } {
    return {
      alertId: 'AlertId',
      alertMessageStatus: 'AlertMessageStatus',
      alertMethod: 'AlertMethod',
      alertTime: 'AlertTime',
      alertUser: 'AlertUser',
      content: 'Content',
      instances: 'Instances',
      nodes: 'Nodes',
      remindId: 'RemindId',
      remindName: 'RemindName',
      slaAlert: 'SlaAlert',
      source: 'Source',
      topics: 'Topics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertId: 'number',
      alertMessageStatus: 'string',
      alertMethod: 'string',
      alertTime: 'number',
      alertUser: 'string',
      content: 'string',
      instances: { 'type': 'array', 'itemType': ListAlertMessagesResponseBodyDataAlertMessagesInstances },
      nodes: { 'type': 'array', 'itemType': ListAlertMessagesResponseBodyDataAlertMessagesNodes },
      remindId: 'number',
      remindName: 'string',
      slaAlert: ListAlertMessagesResponseBodyDataAlertMessagesSlaAlert,
      source: 'string',
      topics: { 'type': 'array', 'itemType': ListAlertMessagesResponseBodyDataAlertMessagesTopics },
    };
  }

  validate() {
    if(Array.isArray(this.instances)) {
      $dara.Model.validateArray(this.instances);
    }
    if(Array.isArray(this.nodes)) {
      $dara.Model.validateArray(this.nodes);
    }
    if(this.slaAlert && typeof (this.slaAlert as any).validate === 'function') {
      (this.slaAlert as any).validate();
    }
    if(Array.isArray(this.topics)) {
      $dara.Model.validateArray(this.topics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertMessagesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The alerts.
   */
  alertMessages?: ListAlertMessagesResponseBodyDataAlertMessages[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The total number of alerts returned.
   * 
   * @example
   * 100
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      alertMessages: 'AlertMessages',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertMessages: { 'type': 'array', 'itemType': ListAlertMessagesResponseBodyDataAlertMessages },
      pageNumber: 'string',
      pageSize: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.alertMessages)) {
      $dara.Model.validateArray(this.alertMessages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertMessagesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about returned alerts.
   */
  data?: ListAlertMessagesResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * Invalid.Tenant.ConnectionNotExists
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The specified parameters are invalid.
   */
  errorMessage?: string;
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
   * The request ID.
   * 
   * @example
   * 0000-ABCD-EFG****
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
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListAlertMessagesResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
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

