// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAttemptsResponseBodyDataList extends $dara.Model {
  agentEstablishedTime?: number;
  agentId?: string;
  agentRingDuration?: number;
  assignAgentTime?: number;
  attemptId?: string;
  callee?: string;
  caller?: string;
  campaignId?: string;
  caseId?: string;
  contactId?: string;
  customerEstablishedTime?: number;
  customerReleasedTime?: number;
  dialDuration?: number;
  dialTime?: number;
  enqueueTime?: number;
  enterIvrTime?: number;
  instanceId?: string;
  ivrDuration?: number;
  queueDuration?: number;
  queueId?: string;
  static names(): { [key: string]: string } {
    return {
      agentEstablishedTime: 'AgentEstablishedTime',
      agentId: 'AgentId',
      agentRingDuration: 'AgentRingDuration',
      assignAgentTime: 'AssignAgentTime',
      attemptId: 'AttemptId',
      callee: 'Callee',
      caller: 'Caller',
      campaignId: 'CampaignId',
      caseId: 'CaseId',
      contactId: 'ContactId',
      customerEstablishedTime: 'CustomerEstablishedTime',
      customerReleasedTime: 'CustomerReleasedTime',
      dialDuration: 'DialDuration',
      dialTime: 'DialTime',
      enqueueTime: 'EnqueueTime',
      enterIvrTime: 'EnterIvrTime',
      instanceId: 'InstanceId',
      ivrDuration: 'IvrDuration',
      queueDuration: 'QueueDuration',
      queueId: 'QueueId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentEstablishedTime: 'number',
      agentId: 'string',
      agentRingDuration: 'number',
      assignAgentTime: 'number',
      attemptId: 'string',
      callee: 'string',
      caller: 'string',
      campaignId: 'string',
      caseId: 'string',
      contactId: 'string',
      customerEstablishedTime: 'number',
      customerReleasedTime: 'number',
      dialDuration: 'number',
      dialTime: 'number',
      enqueueTime: 'number',
      enterIvrTime: 'number',
      instanceId: 'string',
      ivrDuration: 'number',
      queueDuration: 'number',
      queueId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAttemptsResponseBodyData extends $dara.Model {
  list?: ListAttemptsResponseBodyDataList[];
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListAttemptsResponseBodyDataList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAttemptsResponseBody extends $dara.Model {
  code?: string;
  data?: ListAttemptsResponseBodyData;
  httpStatusCode?: number;
  message?: string;
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
      data: ListAttemptsResponseBodyData,
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

