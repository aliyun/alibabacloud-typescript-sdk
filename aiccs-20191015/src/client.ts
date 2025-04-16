// This file is auto-generated, don't edit it
/**
 */
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import * as $dara from '@darabonba/typescript';

export class AddHotlineNumberRequestOutboundRangeList extends $dara.Model {
  /**
   * @example
   * 123456
   */
  departmentId?: number;
  groupIdList?: number[];
  static names(): { [key: string]: string } {
    return {
      departmentId: 'DepartmentId',
      groupIdList: 'GroupIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      departmentId: 'number',
      groupIdList: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.groupIdList)) {
      $dara.Model.validateArray(this.groupIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchCreateQualityProjectsResponseBodyData extends $dara.Model {
  instanceId?: string;
  projectId?: number;
  version?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      projectId: 'ProjectId',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      projectId: 'number',
      version: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAiOutboundTaskRequestRecallRule extends $dara.Model {
  /**
   * @example
   * 1
   */
  count?: number;
  /**
   * @example
   * 1
   */
  interval?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      interval: 'Interval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      interval: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQualityProjectResponseBodyData extends $dara.Model {
  instanceId?: string;
  projectId?: number;
  version?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      projectId: 'ProjectId',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      projectId: 'number',
      version: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EditQualityProjectResponseBodyData extends $dara.Model {
  instanceId?: string;
  projectId?: number;
  version?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      projectId: 'ProjectId',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      projectId: 'number',
      version: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EditQualityRuleTagRequestAnalysisTypes extends $dara.Model {
  id?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentResponseBodyDataGroupList extends $dara.Model {
  /**
   * @example
   * 1
   */
  channelType?: number;
  description?: string;
  displayName?: string;
  name?: string;
  /**
   * @example
   * 123456
   */
  skillGroupId?: number;
  static names(): { [key: string]: string } {
    return {
      channelType: 'ChannelType',
      description: 'Description',
      displayName: 'DisplayName',
      name: 'Name',
      skillGroupId: 'SkillGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelType: 'number',
      description: 'string',
      displayName: 'string',
      name: 'string',
      skillGroupId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentResponseBodyData extends $dara.Model {
  /**
   * @example
   * 123@123.com
   */
  accountName?: string;
  /**
   * @example
   * 222222
   */
  agentId?: number;
  displayName?: string;
  groupList?: GetAgentResponseBodyDataGroupList[];
  /**
   * @example
   * 0
   */
  status?: number;
  /**
   * @example
   * 0
   */
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      agentId: 'AgentId',
      displayName: 'DisplayName',
      groupList: 'GroupList',
      status: 'Status',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      agentId: 'number',
      displayName: 'string',
      groupList: { 'type': 'array', 'itemType': GetAgentResponseBodyDataGroupList },
      status: 'number',
      tenantId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.groupList)) {
      $dara.Model.validateArray(this.groupList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentBasisStatusResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 2000
   */
  pageSize?: number;
  rows?: string;
  /**
   * @example
   * 4
   */
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      rows: 'Rows',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      rows: 'string',
      totalNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentByIdResponseBodyData extends $dara.Model {
  agentId?: number;
  createUserName?: string;
  foreignKey?: string;
  foreignNick?: string;
  realName?: string;
  servicerType?: number;
  showName?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      createUserName: 'CreateUserName',
      foreignKey: 'ForeignKey',
      foreignNick: 'ForeignNick',
      realName: 'RealName',
      servicerType: 'ServicerType',
      showName: 'ShowName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'number',
      createUserName: 'string',
      foreignKey: 'string',
      foreignNick: 'string',
      realName: 'string',
      servicerType: 'number',
      showName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentDetailReportResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 2000
   */
  pageSize?: number;
  /**
   * @example
   * {"t_wait":379322.0,"hotline_time_outcall_avg":"32.00","n_ringing":0,"t_outbound_40":0.0,"hotline_time_incall_avg":-1,"t_calldialing":0.0,"n_inbound":276,"servicer_id":"-1","call_in_sep_sat_cnt":13,"request_cnt":231,"n_not_ready_99":811,"t_work_outbound":49338.0,"hotline_rate_handle_in_60s":"96%","n_not_ready_login":811,"t_not_ready_login":0.0,"n_work_inbound":176,"}
   */
  rows?: string;
  /**
   * @example
   * 4
   */
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      rows: 'Rows',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      rows: 'string',
      totalNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentIndexRealTimeResponseBodyDataColumns extends $dara.Model {
  key?: string;
  /**
   * @example
   * servicerId
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentIndexRealTimeResponseBodyData extends $dara.Model {
  columns?: GetAgentIndexRealTimeResponseBodyDataColumns[];
  /**
   * @example
   * 1
   */
  page?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  rows?: { [key: string]: any }[];
  /**
   * @example
   * 4
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      columns: 'Columns',
      page: 'Page',
      pageSize: 'PageSize',
      rows: 'Rows',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columns: { 'type': 'array', 'itemType': GetAgentIndexRealTimeResponseBodyDataColumns },
      page: 'number',
      pageSize: 'number',
      rows: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.columns)) {
      $dara.Model.validateArray(this.columns);
    }
    if(Array.isArray(this.rows)) {
      $dara.Model.validateArray(this.rows);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentServiceStatusResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 2000
   */
  pageSize?: number;
  /**
   * @example
   * {"online_40s_transfer_ready_cnt":81,"minute_id":"-1","online_unsatis_cnt":0,"online_simple_cnt":0,"average_queue_time":-1,"service_pickup":"2086","total_waiting_time":"981","online_service_time_len":58208,"online_direct_give_up_len":0,"break_ratio":"2%"}
   */
  rows?: string;
  /**
   * @example
   * 4
   */
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      rows: 'Rows',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      rows: 'string',
      totalNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentStatisticsResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 2000
   */
  pageSize?: number;
  /**
   * @example
   * {"n_resttype_1":15,"t_outcall_speak":829747,"average_incoming_time":"8451.29","n_resttype_3":0,"minute_id":"-1","n_conference_speak":0,"n_resttype_2":0,"n_resttype_5":0,"n_resttype_4":0,"n_resttype_7":0,"n_resttype_6":0,"n_resttype_9":0,"n_resttype_8":0,"n_outcall_dial":25,"total_break_time":"58555","n_internal_speak":0,"n_send_step_transfer":7,"n_consulted_internal_speak":0}
   */
  rows?: string;
  /**
   * @example
   * 4
   */
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      rows: 'Rows',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      rows: 'string',
      totalNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAiOutboundTaskBizDataResponseBodyData extends $dara.Model {
  /**
   * @example
   * {"customer":123}
   */
  bizData?: string;
  /**
   * @example
   * 123
   */
  caseId?: number;
  /**
   * @example
   * 158****0000
   */
  phoneNum?: string;
  /**
   * @example
   * 123456
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      bizData: 'BizData',
      caseId: 'CaseId',
      phoneNum: 'PhoneNum',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizData: 'string',
      caseId: 'number',
      phoneNum: 'string',
      taskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAiOutboundTaskDetailResponseBodyDataRecallRule extends $dara.Model {
  /**
   * @example
   * 2
   */
  count?: number;
  /**
   * @example
   * 2
   */
  interval?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      interval: 'Interval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      interval: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAiOutboundTaskDetailResponseBodyData extends $dara.Model {
  /**
   * @example
   * 10
   */
  concurrentRate?: number;
  description?: string;
  /**
   * @example
   * {"TUESDAY":[{"start":"06:00","end":"06:05"}],"MONDAY":[{"start":"09:00","end":"18:00"},{"start":"20:30","end":"21:45"},{"start":"22:30","end":"22:50"}],"WEDNESDAY":[{"start":"09:00","end":"18:00"}],"THURSDAY":[{"start":"09:00","end":"18:00"}],"FRIDAY":[{"start":"09:00","end":"18:00"}],"SATURDAY":[{"start":"09:00","end":"18:00"}],"SUNDAY":[{"start":"17:00","end":"23:45"}]}
   */
  executionTime?: string;
  /**
   * @example
   * 1.2
   */
  forecastCallRate?: number;
  /**
   * @example
   * 123456
   */
  handlerId?: number;
  /**
   * @example
   * 热线技能组
   */
  handlerName?: string;
  /**
   * @example
   * xx外呼任务
   */
  name?: string;
  /**
   * @example
   * 0
   */
  numRepeated?: number;
  outboundNums?: string[];
  recallRule?: GetAiOutboundTaskDetailResponseBodyDataRecallRule;
  /**
   * @example
   * 1
   */
  status?: number;
  /**
   * @example
   * 未开始
   */
  statusDesc?: string;
  /**
   * @example
   * 123
   */
  taskId?: number;
  /**
   * @example
   * 2
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      concurrentRate: 'ConcurrentRate',
      description: 'Description',
      executionTime: 'ExecutionTime',
      forecastCallRate: 'ForecastCallRate',
      handlerId: 'HandlerId',
      handlerName: 'HandlerName',
      name: 'Name',
      numRepeated: 'NumRepeated',
      outboundNums: 'OutboundNums',
      recallRule: 'RecallRule',
      status: 'Status',
      statusDesc: 'StatusDesc',
      taskId: 'TaskId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      concurrentRate: 'number',
      description: 'string',
      executionTime: 'string',
      forecastCallRate: 'number',
      handlerId: 'number',
      handlerName: 'string',
      name: 'string',
      numRepeated: 'number',
      outboundNums: { 'type': 'array', 'itemType': 'string' },
      recallRule: GetAiOutboundTaskDetailResponseBodyDataRecallRule,
      status: 'number',
      statusDesc: 'string',
      taskId: 'number',
      type: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.outboundNums)) {
      $dara.Model.validateArray(this.outboundNums);
    }
    if(this.recallRule && typeof (this.recallRule as any).validate === 'function') {
      (this.recallRule as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAiOutboundTaskExecDetailResponseBodyDataList extends $dara.Model {
  /**
   * @example
   * 1
   */
  batchVersion?: number;
  /**
   * @example
   * 123
   */
  bizData?: string;
  /**
   * @example
   * 1
   */
  callCount?: number;
  /**
   * @example
   * 123456
   */
  caseId?: number;
  /**
   * @example
   * 1632289999000
   */
  createTime?: number;
  /**
   * @example
   * 未接通
   */
  lastCallResult?: string;
  /**
   * @example
   * 150****0000
   */
  phoneNum?: string;
  /**
   * @example
   * 1
   */
  status?: number;
  /**
   * @example
   * 待呼叫
   */
  statusDesc?: number;
  static names(): { [key: string]: string } {
    return {
      batchVersion: 'BatchVersion',
      bizData: 'BizData',
      callCount: 'CallCount',
      caseId: 'CaseId',
      createTime: 'CreateTime',
      lastCallResult: 'LastCallResult',
      phoneNum: 'PhoneNum',
      status: 'Status',
      statusDesc: 'StatusDesc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchVersion: 'number',
      bizData: 'string',
      callCount: 'number',
      caseId: 'number',
      createTime: 'number',
      lastCallResult: 'string',
      phoneNum: 'string',
      status: 'number',
      statusDesc: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAiOutboundTaskExecDetailResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * true
   */
  hasNextPage?: boolean;
  list?: GetAiOutboundTaskExecDetailResponseBodyDataList[];
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 199
   */
  totalResults?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      hasNextPage: 'HasNextPage',
      list: 'List',
      pageSize: 'PageSize',
      totalResults: 'TotalResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      hasNextPage: 'boolean',
      list: { 'type': 'array', 'itemType': GetAiOutboundTaskExecDetailResponseBodyDataList },
      pageSize: 'number',
      totalResults: 'number',
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

export class GetAiOutboundTaskListResponseBodyDataList extends $dara.Model {
  /**
   * @example
   * 1
   */
  concurrentRate?: number;
  /**
   * @example
   * 1615083365000
   */
  createTime?: number;
  description?: string;
  /**
   * @example
   * 70
   */
  finishCount?: number;
  /**
   * @example
   * 0.7
   */
  finishRate?: number;
  /**
   * @example
   * 2468****
   */
  handlerId?: number;
  /**
   * @example
   * 热线技能组
   */
  handlerName?: string;
  /**
   * @example
   * xx外呼任务
   */
  name?: string;
  /**
   * @example
   * 0
   */
  status?: number;
  /**
   * @example
   * 未开始
   */
  statusDesc?: string;
  /**
   * @example
   * 1763****
   */
  taskId?: number;
  /**
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      concurrentRate: 'ConcurrentRate',
      createTime: 'CreateTime',
      description: 'Description',
      finishCount: 'FinishCount',
      finishRate: 'FinishRate',
      handlerId: 'HandlerId',
      handlerName: 'HandlerName',
      name: 'Name',
      status: 'Status',
      statusDesc: 'StatusDesc',
      taskId: 'TaskId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      concurrentRate: 'number',
      createTime: 'number',
      description: 'string',
      finishCount: 'number',
      finishRate: 'number',
      handlerId: 'number',
      handlerName: 'string',
      name: 'string',
      status: 'number',
      statusDesc: 'string',
      taskId: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAiOutboundTaskListResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * false
   */
  hasNextPage?: boolean;
  list?: GetAiOutboundTaskListResponseBodyDataList[];
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 10
   */
  totalResults?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      hasNextPage: 'HasNextPage',
      list: 'List',
      pageSize: 'PageSize',
      totalResults: 'TotalResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      hasNextPage: 'boolean',
      list: { 'type': 'array', 'itemType': GetAiOutboundTaskListResponseBodyDataList },
      pageSize: 'number',
      totalResults: 'number',
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

export class GetAllDepartmentResponseBodyData extends $dara.Model {
  /**
   * @example
   * 10
   */
  departmentId?: number;
  departmentName?: string;
  static names(): { [key: string]: string } {
    return {
      departmentId: 'DepartmentId',
      departmentName: 'DepartmentName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      departmentId: 'number',
      departmentName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomerInfoResponseBodyData extends $dara.Model {
  customizeFields?: { [key: string]: any };
  nick?: string;
  /**
   * @example
   * 6666666
   */
  outerId?: string;
  /**
   * @example
   * https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLSW7XPFlJDwVunXP8pr84TvltwtLlNqTlOVSFeM3bCgn57mAB4JuZZmvMW0qicqW0PyzyUdZpxiaFQ
   */
  photo?: string;
  realName?: string;
  /**
   * @example
   * 823456789023
   */
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      customizeFields: 'CustomizeFields',
      nick: 'Nick',
      outerId: 'OuterId',
      photo: 'Photo',
      realName: 'RealName',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customizeFields: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      nick: 'string',
      outerId: 'string',
      photo: 'string',
      realName: 'string',
      userId: 'number',
    };
  }

  validate() {
    if(this.customizeFields) {
      $dara.Model.validateMap(this.customizeFields);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDepGroupTreeDataResponseBodyDataGroupDTOS extends $dara.Model {
  name?: string;
  /**
   * @example
   * 555555
   */
  skillGroupId?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      skillGroupId: 'SkillGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      skillGroupId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDepGroupTreeDataResponseBodyData extends $dara.Model {
  /**
   * @example
   * 10
   */
  depGroupId?: string;
  depGroupName?: string;
  groupDTOS?: GetDepGroupTreeDataResponseBodyDataGroupDTOS[];
  static names(): { [key: string]: string } {
    return {
      depGroupId: 'DepGroupId',
      depGroupName: 'DepGroupName',
      groupDTOS: 'GroupDTOS',
    };
  }

  static types(): { [key: string]: any } {
    return {
      depGroupId: 'string',
      depGroupName: 'string',
      groupDTOS: { 'type': 'array', 'itemType': GetDepGroupTreeDataResponseBodyDataGroupDTOS },
    };
  }

  validate() {
    if(Array.isArray(this.groupDTOS)) {
      $dara.Model.validateArray(this.groupDTOS);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDepartmentalLatitudeAgentStatusResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 2000
   */
  pageSize?: number;
  rows?: string;
  /**
   * @example
   * 4
   */
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      rows: 'Rows',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      rows: 'string',
      totalNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineAgentDetailResponseBodyData extends $dara.Model {
  /**
   * @example
   * 2235****
   */
  agentId?: number;
  /**
   * @example
   * 1
   */
  agentStatus?: number;
  /**
   * @example
   * AgentCheckout
   */
  agentStatusCode?: string;
  /**
   * @example
   * false
   */
  assigned?: boolean;
  /**
   * @example
   * 1
   */
  restType?: number;
  /**
   * @example
   * ccc_xp_pre-cn-***
   */
  tenantId?: number;
  /**
   * @example
   * dnthF_oinHg7JMJDmKqex3Ux****
   */
  token?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      agentStatus: 'AgentStatus',
      agentStatusCode: 'AgentStatusCode',
      assigned: 'Assigned',
      restType: 'RestType',
      tenantId: 'TenantId',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'number',
      agentStatus: 'number',
      agentStatusCode: 'string',
      assigned: 'boolean',
      restType: 'number',
      tenantId: 'number',
      token: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineAgentDetailReportResponseBodyDataColumns extends $dara.Model {
  /**
   * @example
   * realName
   */
  key?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineAgentDetailReportResponseBodyData extends $dara.Model {
  columns?: GetHotlineAgentDetailReportResponseBodyDataColumns[];
  /**
   * @example
   * 1
   */
  page?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  rows?: { [key: string]: any }[];
  /**
   * @example
   * 7
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      columns: 'Columns',
      page: 'Page',
      pageSize: 'PageSize',
      rows: 'Rows',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columns: { 'type': 'array', 'itemType': GetHotlineAgentDetailReportResponseBodyDataColumns },
      page: 'number',
      pageSize: 'number',
      rows: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.columns)) {
      $dara.Model.validateArray(this.columns);
    }
    if(Array.isArray(this.rows)) {
      $dara.Model.validateArray(this.rows);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineCallActionResponseBodyData extends $dara.Model {
  /**
   * @example
   * 8999****
   */
  actionId?: number;
  /**
   * @example
   * 2367****
   */
  buId?: number;
  /**
   * @example
   * 1122****
   */
  calloutId?: number;
  calloutName?: string;
  /**
   * @example
   * 1138902****
   */
  caseId?: number;
  /**
   * @example
   * 2377****
   */
  channelId?: string;
  /**
   * @example
   * 2
   */
  channelType?: number;
  /**
   * @example
   * 1223****
   */
  depId?: number;
  /**
   * @example
   * true
   */
  isTransfer?: string;
  /**
   * @example
   * 7856876****
   */
  memberId?: number;
  /**
   * @example
   * 8900****
   */
  memberList?: string;
  memberName?: string;
  /**
   * @example
   * 1332****
   */
  servicerId?: number;
  servicerName?: string;
  /**
   * @example
   * 3423****
   */
  subTouchId?: number;
  /**
   * @example
   * 12345****
   */
  taskId?: number;
  /**
   * @example
   * 2235****
   */
  touchId?: number;
  static names(): { [key: string]: string } {
    return {
      actionId: 'ActionId',
      buId: 'BuId',
      calloutId: 'CalloutId',
      calloutName: 'CalloutName',
      caseId: 'CaseId',
      channelId: 'ChannelId',
      channelType: 'ChannelType',
      depId: 'DepId',
      isTransfer: 'IsTransfer',
      memberId: 'MemberId',
      memberList: 'MemberList',
      memberName: 'MemberName',
      servicerId: 'ServicerId',
      servicerName: 'ServicerName',
      subTouchId: 'SubTouchId',
      taskId: 'TaskId',
      touchId: 'TouchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionId: 'number',
      buId: 'number',
      calloutId: 'number',
      calloutName: 'string',
      caseId: 'number',
      channelId: 'string',
      channelType: 'number',
      depId: 'number',
      isTransfer: 'string',
      memberId: 'number',
      memberList: 'string',
      memberName: 'string',
      servicerId: 'number',
      servicerName: 'string',
      subTouchId: 'number',
      taskId: 'number',
      touchId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineGroupDetailReportResponseBodyDataColumns extends $dara.Model {
  /**
   * @example
   * skillGroupName
   */
  key?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineGroupDetailReportResponseBodyData extends $dara.Model {
  columns?: GetHotlineGroupDetailReportResponseBodyDataColumns[];
  /**
   * @example
   * 1
   */
  page?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  rows?: { [key: string]: any }[];
  /**
   * @example
   * 9
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      columns: 'Columns',
      page: 'Page',
      pageSize: 'PageSize',
      rows: 'Rows',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columns: { 'type': 'array', 'itemType': GetHotlineGroupDetailReportResponseBodyDataColumns },
      page: 'number',
      pageSize: 'number',
      rows: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.columns)) {
      $dara.Model.validateArray(this.columns);
    }
    if(Array.isArray(this.rows)) {
      $dara.Model.validateArray(this.rows);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineMessageLogResponseBodyData extends $dara.Model {
  /**
   * @example
   * 100****2077
   */
  acid?: string;
  content?: string;
  /**
   * @example
   * 1623738027480
   */
  endTime?: number;
  /**
   * @example
   * 11deca999****
   */
  mid?: string;
  /**
   * @example
   * 1
   */
  senderType?: number;
  /**
   * @example
   * 1623738026460
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      acid: 'Acid',
      content: 'Content',
      endTime: 'EndTime',
      mid: 'Mid',
      senderType: 'SenderType',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acid: 'string',
      content: 'string',
      endTime: 'number',
      mid: 'string',
      senderType: 'number',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineServiceStatisticsResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 2000
   */
  pageSize?: number;
  rows?: string;
  /**
   * @example
   * 4
   */
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      rows: 'Rows',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      rows: 'string',
      totalNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceListResponseBodyCommodityInstances extends $dara.Model {
  instanceId?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOnlineSeatInformationResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 2000
   */
  pageSize?: number;
  rows?: string;
  /**
   * @example
   * 4
   */
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      rows: 'Rows',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      rows: 'string',
      totalNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOnlineServiceVolumeResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 2000
   */
  pageSize?: number;
  /**
   * @example
   * {"tenant_id":"905","online_40s_transfer_ready_cnt":109,"minute_id":"-1","wait_time_len":1215,"pickup_rate":"63.09%","thirty_seconds_to_pickUp":"2560","date_id":"-1","online_over_out_cnt":0,"online_20s_transfer_ready_cnt":109,"thirty_seconds_response_rate":"63.09%","abandonment_rate":"63.09%","service_time_len":68378,"service_pickup":"2560","hour_id":"-1","online_10s_transfer_ready_cnt":109}
   */
  rows?: string;
  /**
   * @example
   * 4
   */
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      rows: 'Rows',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      rows: 'string',
      totalNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOutbounNumListResponseBodyDataNum extends $dara.Model {
  description?: string;
  /**
   * @example
   * 1
   */
  type?: number;
  /**
   * @example
   * 07512234****
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      type: 'number',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOutbounNumListResponseBodyDataNumGroup extends $dara.Model {
  /**
   * @example
   * Jella
   */
  description?: string;
  /**
   * @example
   * 2
   */
  type?: number;
  /**
   * @example
   * 7688****
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      type: 'number',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOutbounNumListResponseBodyData extends $dara.Model {
  num?: GetOutbounNumListResponseBodyDataNum[];
  numGroup?: GetOutbounNumListResponseBodyDataNumGroup[];
  static names(): { [key: string]: string } {
    return {
      num: 'Num',
      numGroup: 'NumGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      num: { 'type': 'array', 'itemType': GetOutbounNumListResponseBodyDataNum },
      numGroup: { 'type': 'array', 'itemType': GetOutbounNumListResponseBodyDataNumGroup },
    };
  }

  validate() {
    if(Array.isArray(this.num)) {
      $dara.Model.validateArray(this.num);
    }
    if(Array.isArray(this.numGroup)) {
      $dara.Model.validateArray(this.numGroup);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityProjectDetailResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1
   */
  checkFreqType?: number;
  /**
   * @example
   * 2021-04-07 18:07:18
   */
  createTime?: string;
  depList?: number[];
  groupList?: number[];
  /**
   * @example
   * 15977801
   */
  id?: number;
  /**
   * @example
   * 2021-04-07 18:07:19
   */
  modifyTime?: string;
  projectName?: string;
  qualityRuleIds?: number[];
  /**
   * @example
   * 1
   */
  qualityType?: number;
  servicerList?: number[];
  /**
   * @example
   * 0
   */
  status?: number;
  /**
   * @example
   * 1
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      checkFreqType: 'CheckFreqType',
      createTime: 'CreateTime',
      depList: 'DepList',
      groupList: 'GroupList',
      id: 'Id',
      modifyTime: 'ModifyTime',
      projectName: 'ProjectName',
      qualityRuleIds: 'QualityRuleIds',
      qualityType: 'QualityType',
      servicerList: 'ServicerList',
      status: 'Status',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkFreqType: 'number',
      createTime: 'string',
      depList: { 'type': 'array', 'itemType': 'number' },
      groupList: { 'type': 'array', 'itemType': 'number' },
      id: 'number',
      modifyTime: 'string',
      projectName: 'string',
      qualityRuleIds: { 'type': 'array', 'itemType': 'number' },
      qualityType: 'number',
      servicerList: { 'type': 'array', 'itemType': 'number' },
      status: 'number',
      version: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.depList)) {
      $dara.Model.validateArray(this.depList);
    }
    if(Array.isArray(this.groupList)) {
      $dara.Model.validateArray(this.groupList);
    }
    if(Array.isArray(this.qualityRuleIds)) {
      $dara.Model.validateArray(this.qualityRuleIds);
    }
    if(Array.isArray(this.servicerList)) {
      $dara.Model.validateArray(this.servicerList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityProjectListResponseBodyDataQualityProjectList extends $dara.Model {
  /**
   * @example
   * 1
   */
  checkFreqType?: number;
  /**
   * @example
   * 2021-04-07 18:07:18
   */
  createTime?: string;
  depList?: number[];
  groupList?: number[];
  /**
   * @example
   * 15977801
   */
  id?: number;
  /**
   * @example
   * 2021-04-07 18:07:19
   */
  modifyTime?: string;
  projectName?: string;
  qualityRuleIds?: number[];
  /**
   * @example
   * 1
   */
  qualityType?: number;
  servicerList?: number[];
  /**
   * @example
   * 0
   */
  status?: number;
  /**
   * @example
   * 1
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      checkFreqType: 'CheckFreqType',
      createTime: 'CreateTime',
      depList: 'DepList',
      groupList: 'GroupList',
      id: 'Id',
      modifyTime: 'ModifyTime',
      projectName: 'ProjectName',
      qualityRuleIds: 'QualityRuleIds',
      qualityType: 'QualityType',
      servicerList: 'ServicerList',
      status: 'Status',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkFreqType: 'number',
      createTime: 'string',
      depList: { 'type': 'array', 'itemType': 'number' },
      groupList: { 'type': 'array', 'itemType': 'number' },
      id: 'number',
      modifyTime: 'string',
      projectName: 'string',
      qualityRuleIds: { 'type': 'array', 'itemType': 'number' },
      qualityType: 'number',
      servicerList: { 'type': 'array', 'itemType': 'number' },
      status: 'number',
      version: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.depList)) {
      $dara.Model.validateArray(this.depList);
    }
    if(Array.isArray(this.groupList)) {
      $dara.Model.validateArray(this.groupList);
    }
    if(Array.isArray(this.qualityRuleIds)) {
      $dara.Model.validateArray(this.qualityRuleIds);
    }
    if(Array.isArray(this.servicerList)) {
      $dara.Model.validateArray(this.servicerList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityProjectListResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  qualityProjectList?: GetQualityProjectListResponseBodyDataQualityProjectList[];
  /**
   * @example
   * 35
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      qualityProjectList: 'QualityProjectList',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      qualityProjectList: { 'type': 'array', 'itemType': GetQualityProjectListResponseBodyDataQualityProjectList },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.qualityProjectList)) {
      $dara.Model.validateArray(this.qualityProjectList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityProjectLogResponseBodyData extends $dara.Model {
  actionData?: string;
  actionTime?: string;
  actionType?: string;
  projectCreateTime?: string;
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      actionData: 'ActionData',
      actionTime: 'ActionTime',
      actionType: 'ActionType',
      projectCreateTime: 'ProjectCreateTime',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionData: 'string',
      actionTime: 'string',
      actionType: 'string',
      projectCreateTime: 'string',
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

export class GetQualityResultResponseBodyDataQualityResultResponseList extends $dara.Model {
  channelType?: string;
  channelTypeName?: string;
  groupId?: string;
  groupName?: string;
  hitDetail?: string;
  hitStatus?: boolean;
  instanceName?: string;
  memberName?: string;
  projectId?: string;
  projectName?: string;
  ruleId?: string;
  ruleName?: string;
  servicerId?: string;
  servicerName?: string;
  touchId?: string;
  touchStartTime?: string;
  static names(): { [key: string]: string } {
    return {
      channelType: 'ChannelType',
      channelTypeName: 'ChannelTypeName',
      groupId: 'GroupId',
      groupName: 'GroupName',
      hitDetail: 'HitDetail',
      hitStatus: 'HitStatus',
      instanceName: 'InstanceName',
      memberName: 'MemberName',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      servicerId: 'ServicerId',
      servicerName: 'ServicerName',
      touchId: 'TouchId',
      touchStartTime: 'TouchStartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelType: 'string',
      channelTypeName: 'string',
      groupId: 'string',
      groupName: 'string',
      hitDetail: 'string',
      hitStatus: 'boolean',
      instanceName: 'string',
      memberName: 'string',
      projectId: 'string',
      projectName: 'string',
      ruleId: 'string',
      ruleName: 'string',
      servicerId: 'string',
      servicerName: 'string',
      touchId: 'string',
      touchStartTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityResultResponseBodyData extends $dara.Model {
  pageNo?: number;
  pageSize?: number;
  qualityResultResponseList?: GetQualityResultResponseBodyDataQualityResultResponseList[];
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      qualityResultResponseList: 'QualityResultResponseList',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      qualityResultResponseList: { 'type': 'array', 'itemType': GetQualityResultResponseBodyDataQualityResultResponseList },
      totalNum: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.qualityResultResponseList)) {
      $dara.Model.validateArray(this.qualityResultResponseList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityRuleDetailResponseBodyData extends $dara.Model {
  keyWords?: string[];
  matchType?: number;
  name?: string;
  ruleCreateTime?: string;
  ruleId?: number;
  ruleTag?: number;
  static names(): { [key: string]: string } {
    return {
      keyWords: 'KeyWords',
      matchType: 'MatchType',
      name: 'Name',
      ruleCreateTime: 'RuleCreateTime',
      ruleId: 'RuleId',
      ruleTag: 'RuleTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyWords: { 'type': 'array', 'itemType': 'string' },
      matchType: 'number',
      name: 'string',
      ruleCreateTime: 'string',
      ruleId: 'number',
      ruleTag: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.keyWords)) {
      $dara.Model.validateArray(this.keyWords);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityRuleListResponseBodyDataQualityRuleList extends $dara.Model {
  keyWords?: string[];
  matchType?: number;
  name?: string;
  ruleCreateTime?: string;
  ruleId?: number;
  ruleTag?: number;
  static names(): { [key: string]: string } {
    return {
      keyWords: 'KeyWords',
      matchType: 'MatchType',
      name: 'Name',
      ruleCreateTime: 'RuleCreateTime',
      ruleId: 'RuleId',
      ruleTag: 'RuleTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyWords: { 'type': 'array', 'itemType': 'string' },
      matchType: 'number',
      name: 'string',
      ruleCreateTime: 'string',
      ruleId: 'number',
      ruleTag: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.keyWords)) {
      $dara.Model.validateArray(this.keyWords);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityRuleListResponseBodyData extends $dara.Model {
  pageNo?: number;
  pageSize?: number;
  qualityRuleList?: GetQualityRuleListResponseBodyDataQualityRuleList[];
  total?: number;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      qualityRuleList: 'QualityRuleList',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      qualityRuleList: { 'type': 'array', 'itemType': GetQualityRuleListResponseBodyDataQualityRuleList },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.qualityRuleList)) {
      $dara.Model.validateArray(this.qualityRuleList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityRuleTagListResponseBodyData extends $dara.Model {
  ruleTagId?: number;
  ruleTagName?: string;
  static names(): { [key: string]: string } {
    return {
      ruleTagId: 'RuleTagId',
      ruleTagName: 'RuleTagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleTagId: 'number',
      ruleTagName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueueInformationResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 2000
   */
  pageSize?: number;
  rows?: string;
  /**
   * @example
   * 4
   */
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      rows: 'Rows',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      rows: 'string',
      totalNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRecordDataResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1001067****
   */
  acid?: string;
  /**
   * @example
   * http://aliccrec-shvpc.oss-cn-shanghai.aliyuncs.com/accrec_tmp/10010679716-12-01-56.wav?***
   */
  ossLink?: string;
  static names(): { [key: string]: string } {
    return {
      acid: 'Acid',
      ossLink: 'OssLink',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acid: 'string',
      ossLink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRecordUrlResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1001067****
   */
  acid?: string;
  /**
   * @example
   * http://aliccrec-shvpc.oss-cn-shanghai.aliyuncs.com/accrec_tmp/10010679716-12-01-56.wav?***
   */
  ossLink?: string;
  static names(): { [key: string]: string } {
    return {
      acid: 'Acid',
      ossLink: 'OssLink',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acid: 'string',
      ossLink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRtcTokenResponseBodyData extends $dara.Model {
  /**
   * @example
   * 139000000
   */
  accountName?: string;
  /**
   * @example
   * 200000000*******
   */
  rtcId?: string;
  /**
   * @example
   * {“cleansession”:true,”clientId”:”GID_VOIP@@@ClientId_****”,”conferenceTopic”:”cs_alicom_voip_conference”,”host”:”mqtt-cn-4590mdhb901.mqtt.aliyuncs.com”,”meetingEventKeepAliveInterval”:0,”phoneTopic”:”alicom_voip_phone”,”port”:0,”reconnectTimeout”:2000,”registerTime”:0,”sdkClientPort”:8883,”serverId”:”GID_VOIP@@@MTEuMTMuMTM2LjExOA==”,”sgwServerTopic”:”alicom_voip_server_pre”,”tlsport”:443,”tokenData”:”abcdef”,”useTLS”:false}
   */
  token?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      rtcId: 'RtcId',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      rtcId: 'string',
      token: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSeatInformationResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 2000
   */
  pageSize?: number;
  rowr?: string;
  /**
   * @example
   * 4
   */
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      rowr: 'Rowr',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      rowr: 'string',
      totalNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillGroupAgentStatusDetailsResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 2000
   */
  pageSize?: number;
  rows?: string;
  /**
   * @example
   * 4
   */
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      rows: 'Rows',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      rows: 'string',
      totalNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillGroupAndAgentStatusSummaryResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 2000
   */
  pageSize?: number;
  rows?: string;
  /**
   * @example
   * 4
   */
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      rows: 'Rows',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      rows: 'string',
      totalNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillGroupLatitudeStateResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 2000
   */
  pageSize?: number;
  rows?: string;
  /**
   * @example
   * 4
   */
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      rows: 'Rows',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      rows: 'string',
      totalNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillGroupServiceCapabilityResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 2000
   */
  pageSize?: number;
  rows?: string;
  /**
   * @example
   * 4
   */
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      rows: 'Rows',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      rows: 'string',
      totalNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillGroupServiceStatusResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 2000
   */
  pageSize?: number;
  rows?: string;
  /**
   * @example
   * 4
   */
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      rows: 'Rows',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      rows: 'string',
      totalNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillGroupStatusTotalResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 2000
   */
  pageSize?: number;
  rows?: string;
  /**
   * @example
   * 4
   */
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      rows: 'Rows',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      rows: 'string',
      totalNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotlineSessionQueryResponseBodyDataCallDetailRecord extends $dara.Model {
  /**
   * @example
   * 7719786
   */
  acid?: string;
  /**
   * @example
   * 12
   */
  activeTransferId?: string;
  /**
   * @example
   * 37
   */
  callContinueTime?: number;
  /**
   * @example
   * normal
   */
  callResult?: string;
  /**
   * @example
   * 1
   */
  callType?: number;
  /**
   * @example
   * 135615*****
   */
  calledNumber?: string;
  /**
   * @example
   * 0571773
   */
  callingNumber?: string;
  /**
   * @example
   * 2020-10-02 22:32:55
   */
  createTime?: string;
  /**
   * @example
   * 4
   */
  evaluationLevel?: number;
  /**
   * @example
   * 4
   */
  evaluationScore?: number;
  /**
   * @example
   * 123456
   */
  groupId?: number;
  groupName?: string;
  /**
   * @example
   * 2
   */
  hangUpRole?: string;
  /**
   * @example
   * 2020-10-02 22:33:46
   */
  hangUpTime?: string;
  /**
   * @example
   * acc1c58dab4a4dd280e3813c66
   */
  id?: string;
  /**
   * @example
   * 2020-10-02 22:32:55
   */
  inQueueTime?: string;
  /**
   * @example
   * 7856876
   */
  memberId?: string;
  memberName?: string;
  /**
   * @example
   * 2020-10-02 22:32:59
   */
  outQueueTime?: string;
  /**
   * @example
   * 12
   */
  passiveTransferId?: string;
  /**
   * @example
   * 1
   */
  passiveTransferIdType?: string;
  /**
   * @example
   * 2020-10-02 22:33:09
   */
  pickUpTime?: string;
  /**
   * @example
   * 4
   */
  queueUpContinueTime?: number;
  /**
   * @example
   * 10
   */
  ringContinueTime?: number;
  /**
   * @example
   * 2020-10-02 22:33:09
   */
  ringEndTime?: string;
  /**
   * @example
   * 2020-10-02 22:32:59
   */
  ringStartTime?: string;
  /**
   * @example
   * 555555
   */
  servicerId?: string;
  servicerName?: string;
  /**
   * @example
   * 1861111****
   */
  trunkCall?: string;
  static names(): { [key: string]: string } {
    return {
      acid: 'Acid',
      activeTransferId: 'ActiveTransferId',
      callContinueTime: 'CallContinueTime',
      callResult: 'CallResult',
      callType: 'CallType',
      calledNumber: 'CalledNumber',
      callingNumber: 'CallingNumber',
      createTime: 'CreateTime',
      evaluationLevel: 'EvaluationLevel',
      evaluationScore: 'EvaluationScore',
      groupId: 'GroupId',
      groupName: 'GroupName',
      hangUpRole: 'HangUpRole',
      hangUpTime: 'HangUpTime',
      id: 'Id',
      inQueueTime: 'InQueueTime',
      memberId: 'MemberId',
      memberName: 'MemberName',
      outQueueTime: 'OutQueueTime',
      passiveTransferId: 'PassiveTransferId',
      passiveTransferIdType: 'PassiveTransferIdType',
      pickUpTime: 'PickUpTime',
      queueUpContinueTime: 'QueueUpContinueTime',
      ringContinueTime: 'RingContinueTime',
      ringEndTime: 'RingEndTime',
      ringStartTime: 'RingStartTime',
      servicerId: 'ServicerId',
      servicerName: 'ServicerName',
      trunkCall: 'TrunkCall',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acid: 'string',
      activeTransferId: 'string',
      callContinueTime: 'number',
      callResult: 'string',
      callType: 'number',
      calledNumber: 'string',
      callingNumber: 'string',
      createTime: 'string',
      evaluationLevel: 'number',
      evaluationScore: 'number',
      groupId: 'number',
      groupName: 'string',
      hangUpRole: 'string',
      hangUpTime: 'string',
      id: 'string',
      inQueueTime: 'string',
      memberId: 'string',
      memberName: 'string',
      outQueueTime: 'string',
      passiveTransferId: 'string',
      passiveTransferIdType: 'string',
      pickUpTime: 'string',
      queueUpContinueTime: 'number',
      ringContinueTime: 'number',
      ringEndTime: 'string',
      ringStartTime: 'string',
      servicerId: 'string',
      servicerName: 'string',
      trunkCall: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotlineSessionQueryResponseBodyData extends $dara.Model {
  callDetailRecord?: HotlineSessionQueryResponseBodyDataCallDetailRecord[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 26
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      callDetailRecord: 'CallDetailRecord',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callDetailRecord: { 'type': 'array', 'itemType': HotlineSessionQueryResponseBodyDataCallDetailRecord },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.callDetailRecord)) {
      $dara.Model.validateArray(this.callDetailRecord);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertAiOutboundPhoneNumsRequestDetails extends $dara.Model {
  /**
   * @example
   * xxxx
   */
  bizData?: string;
  /**
   * @example
   * 150****0000
   */
  phoneNum?: string;
  static names(): { [key: string]: string } {
    return {
      bizData: 'BizData',
      phoneNum: 'PhoneNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizData: 'string',
      phoneNum: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertAiOutboundPhoneNumsResponseBodyDataFailInfo extends $dara.Model {
  /**
   * @example
   * xxxx
   */
  bizData?: string;
  /**
   * @example
   * 号码格式异常
   */
  msg?: string;
  /**
   * @example
   * 150****0000
   */
  phoneNum?: string;
  static names(): { [key: string]: string } {
    return {
      bizData: 'BizData',
      msg: 'Msg',
      phoneNum: 'PhoneNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizData: 'string',
      msg: 'string',
      phoneNum: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertAiOutboundPhoneNumsResponseBodyData extends $dara.Model {
  failInfo?: InsertAiOutboundPhoneNumsResponseBodyDataFailInfo[];
  /**
   * @example
   * 7
   */
  successCount?: number;
  /**
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      failInfo: 'FailInfo',
      successCount: 'SuccessCount',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failInfo: { 'type': 'array', 'itemType': InsertAiOutboundPhoneNumsResponseBodyDataFailInfo },
      successCount: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.failInfo)) {
      $dara.Model.validateArray(this.failInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentBySkillGroupIdResponseBodyData extends $dara.Model {
  /**
   * @example
   * username@example.com
   */
  accountName?: string;
  /**
   * @example
   * 666666
   */
  agentId?: number;
  displayName?: string;
  /**
   * @example
   * 0
   */
  status?: number;
  /**
   * @example
   * 0
   */
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      agentId: 'AgentId',
      displayName: 'DisplayName',
      status: 'Status',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      agentId: 'number',
      displayName: 'string',
      status: 'number',
      tenantId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAiccsRobotResponseBodyData extends $dara.Model {
  atProfession?: string;
  atSence?: string;
  /**
   * @example
   * 123456
   */
  id?: number;
  robotName?: string;
  /**
   * @example
   * CUSTOM
   */
  robotType?: string;
  static names(): { [key: string]: string } {
    return {
      atProfession: 'AtProfession',
      atSence: 'AtSence',
      id: 'Id',
      robotName: 'RobotName',
      robotType: 'RobotType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      atProfession: 'string',
      atSence: 'string',
      id: 'number',
      robotName: 'string',
      robotType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChatRecordDetailResponseBodyResultDataDataMessageList extends $dara.Model {
  content?: string;
  /**
   * @example
   * 1614578400000
   */
  createTime?: number;
  /**
   * @example
   * MSG
   */
  msgType?: string;
  /**
   * @example
   * account1
   */
  senderName?: string;
  /**
   * @example
   * 2
   */
  senderType?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      createTime: 'CreateTime',
      msgType: 'MsgType',
      senderName: 'SenderName',
      senderType: 'SenderType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      createTime: 'number',
      msgType: 'string',
      senderName: 'string',
      senderType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChatRecordDetailResponseBodyResultDataData extends $dara.Model {
  /**
   * @example
   * 1614578410000
   */
  endTime?: number;
  messageList?: ListChatRecordDetailResponseBodyResultDataDataMessageList[];
  /**
   * @example
   * 123@123.com
   */
  servicerName?: string;
  /**
   * @example
   * 1614578400000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      messageList: 'MessageList',
      servicerName: 'ServicerName',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      messageList: { 'type': 'array', 'itemType': ListChatRecordDetailResponseBodyResultDataDataMessageList },
      servicerName: 'string',
      startTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.messageList)) {
      $dara.Model.validateArray(this.messageList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChatRecordDetailResponseBodyResultData extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  data?: ListChatRecordDetailResponseBodyResultDataData[];
  /**
   * @example
   * 10
   */
  onePageSize?: number;
  /**
   * @example
   * 10
   */
  totalPage?: number;
  /**
   * @example
   * 100
   */
  totalResults?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      data: 'Data',
      onePageSize: 'OnePageSize',
      totalPage: 'TotalPage',
      totalResults: 'TotalResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      data: { 'type': 'array', 'itemType': ListChatRecordDetailResponseBodyResultDataData },
      onePageSize: 'number',
      totalPage: 'number',
      totalResults: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDialogResponseBodyData extends $dara.Model {
  content?: string;
  /**
   * @example
   * normal
   */
  nodeType?: string;
  /**
   * @example
   * robot
   */
  role?: string;
  tag?: string;
  /**
   * @example
   * 1619763900718
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      nodeType: 'NodeType',
      role: 'Role',
      tag: 'Tag',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      nodeType: 'string',
      role: 'string',
      tag: 'string',
      time: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotlineRecordResponseBodyData extends $dara.Model {
  /**
   * @example
   * 100365558
   */
  callId?: string;
  /**
   * @example
   * 100365548
   */
  connectionId?: string;
  /**
   * @example
   * 16128694810
   */
  endTime?: number;
  /**
   * @example
   * 16128694110
   */
  startTime?: number;
  /**
   * @example
   * http://aliccrec-shvpc.oss-cn-shanghai.aliyuncs.com
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      callId: 'CallId',
      connectionId: 'ConnectionId',
      endTime: 'EndTime',
      startTime: 'StartTime',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callId: 'string',
      connectionId: 'string',
      endTime: 'number',
      startTime: 'number',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotlineRecordDetailResponseBodyResultDataData extends $dara.Model {
  /**
   * @example
   * 1614578410000
   */
  endTime?: number;
  /**
   * @example
   * http://xxx.xxxxx/xx.wav
   */
  ossUrl?: string;
  /**
   * @example
   * 123@123.com
   */
  servicerName?: string;
  /**
   * @example
   * 1614578400000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      ossUrl: 'OssUrl',
      servicerName: 'ServicerName',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      ossUrl: 'string',
      servicerName: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotlineRecordDetailResponseBodyResultData extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  data?: ListHotlineRecordDetailResponseBodyResultDataData[];
  /**
   * @example
   * 100
   */
  onePageSize?: number;
  /**
   * @example
   * 10
   */
  totalPage?: number;
  /**
   * @example
   * 945
   */
  totalResults?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      data: 'Data',
      onePageSize: 'OnePageSize',
      totalPage: 'TotalPage',
      totalResults: 'TotalResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      data: { 'type': 'array', 'itemType': ListHotlineRecordDetailResponseBodyResultDataData },
      onePageSize: 'number',
      totalPage: 'number',
      totalResults: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRobotCallDialogResponseBodyData extends $dara.Model {
  content?: string;
  /**
   * @example
   * normal
   */
  nodeType?: string;
  /**
   * @example
   * robot
   */
  role?: string;
  tag?: string;
  /**
   * @example
   * 1621483557000
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      nodeType: 'NodeType',
      role: 'Role',
      tag: 'Tag',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      nodeType: 'string',
      role: 'string',
      tag: 'string',
      time: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRobotNodeResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1
   */
  isOutput?: number;
  modelName?: string;
  /**
   * @example
   * 123456
   */
  nodeIdentifier?: string;
  nodeName?: string;
  processName?: string;
  static names(): { [key: string]: string } {
    return {
      isOutput: 'IsOutput',
      modelName: 'ModelName',
      nodeIdentifier: 'NodeIdentifier',
      nodeName: 'NodeName',
      processName: 'ProcessName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isOutput: 'number',
      modelName: 'string',
      nodeIdentifier: 'string',
      nodeName: 'string',
      processName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRobotParamsResponseBodyData extends $dara.Model {
  /**
   * @example
   * 0
   */
  isEmpty?: number;
  /**
   * @example
   * name
   */
  paramCode?: string;
  paramName?: string;
  static names(): { [key: string]: string } {
    return {
      isEmpty: 'IsEmpty',
      paramCode: 'ParamCode',
      paramName: 'ParamName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isEmpty: 'number',
      paramCode: 'string',
      paramName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRolesResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1
   */
  buId?: number;
  /**
   * @example
   * admin
   */
  code?: string;
  /**
   * @example
   * 2020-01-03T20:25:33Z
   */
  createTime?: string;
  /**
   * @example
   * Admin
   */
  description?: string;
  /**
   * @example
   * 0
   */
  roleGroupId?: number;
  roleGroupName?: string;
  /**
   * @example
   * 1
   */
  roleId?: number;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      buId: 'BuId',
      code: 'Code',
      createTime: 'CreateTime',
      description: 'Description',
      roleGroupId: 'RoleGroupId',
      roleGroupName: 'RoleGroupName',
      roleId: 'RoleId',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buId: 'number',
      code: 'string',
      createTime: 'string',
      description: 'string',
      roleGroupId: 'number',
      roleGroupName: 'string',
      roleId: 'number',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupResponseBodyData extends $dara.Model {
  /**
   * @example
   * 2
   */
  channelType?: number;
  description?: string;
  displayName?: string;
  name?: string;
  /**
   * @example
   * 123456
   */
  skillGroupId?: number;
  static names(): { [key: string]: string } {
    return {
      channelType: 'ChannelType',
      description: 'Description',
      displayName: 'DisplayName',
      name: 'Name',
      skillGroupId: 'SkillGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelType: 'number',
      description: 'string',
      displayName: 'string',
      name: 'string',
      skillGroupId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskResponseBodyDataRecord extends $dara.Model {
  /**
   * @example
   * 1
   */
  completeCount?: number;
  /**
   * @example
   * 1618477232000
   */
  fireTime?: string;
  /**
   * @example
   * 1618477232000
   */
  gmtCreate?: string;
  /**
   * @example
   * 123456
   */
  id?: number;
  /**
   * @example
   * 123456
   */
  robotId?: number;
  robotName?: string;
  /**
   * @example
   * RELEASE
   */
  status?: string;
  taskName?: string;
  /**
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      completeCount: 'CompleteCount',
      fireTime: 'FireTime',
      gmtCreate: 'GmtCreate',
      id: 'Id',
      robotId: 'RobotId',
      robotName: 'RobotName',
      status: 'Status',
      taskName: 'TaskName',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completeCount: 'number',
      fireTime: 'string',
      gmtCreate: 'string',
      id: 'number',
      robotId: 'number',
      robotName: 'string',
      status: 'string',
      taskName: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  record?: ListTaskResponseBodyDataRecord[];
  /**
   * @example
   * 50
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      record: 'Record',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      record: { 'type': 'array', 'itemType': ListTaskResponseBodyDataRecord },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.record)) {
      $dara.Model.validateArray(this.record);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskDetailResponseBodyDataRecord extends $dara.Model {
  /**
   * @example
   * 186****0000
   */
  called?: string;
  /**
   * @example
   * 136****0000
   */
  caller?: string;
  direction?: string;
  /**
   * @example
   * 30
   */
  duration?: number;
  /**
   * @example
   * 2021-05-20 00:03:00
   */
  endTime?: string;
  /**
   * @example
   * 123456
   */
  id?: number;
  /**
   * @example
   * 1
   */
  retryCurTimes?: number;
  /**
   * @example
   * 1
   */
  retryTimes?: number;
  /**
   * @example
   * 2021-05-20 00:00:00
   */
  startTime?: string;
  /**
   * @example
   * SUCCESS
   */
  status?: string;
  /**
   * @example
   * 00001
   */
  statusCode?: string;
  statusCodeDesc?: string;
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      called: 'Called',
      caller: 'Caller',
      direction: 'Direction',
      duration: 'Duration',
      endTime: 'EndTime',
      id: 'Id',
      retryCurTimes: 'RetryCurTimes',
      retryTimes: 'RetryTimes',
      startTime: 'StartTime',
      status: 'Status',
      statusCode: 'StatusCode',
      statusCodeDesc: 'StatusCodeDesc',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      called: 'string',
      caller: 'string',
      direction: 'string',
      duration: 'number',
      endTime: 'string',
      id: 'number',
      retryCurTimes: 'number',
      retryTimes: 'number',
      startTime: 'string',
      status: 'string',
      statusCode: 'string',
      statusCodeDesc: 'string',
      tags: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskDetailResponseBodyData extends $dara.Model {
  /**
   * @example
   * 20
   */
  pageNo?: number;
  /**
   * @example
   * 1
   */
  pageSize?: number;
  record?: ListTaskDetailResponseBodyDataRecord[];
  /**
   * @example
   * 50
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      record: 'Record',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      record: { 'type': 'array', 'itemType': ListTaskDetailResponseBodyDataRecord },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.record)) {
      $dara.Model.validateArray(this.record);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LlmSmartCallEncryptResponseBodyData extends $dara.Model {
  /**
   * @example
   * 149922088206^136666368206
   */
  callId?: string;
  static names(): { [key: string]: string } {
    return {
      callId: 'CallId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MakeDoubleCallResponseBodyData extends $dara.Model {
  /**
   * @example
   * 68255155365620598
   */
  acid?: string;
  static names(): { [key: string]: string } {
    return {
      acid: 'Acid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHotlineNumberResponseBodyDataHotlineNumListCalloutRangeListGroupDOList extends $dara.Model {
  /**
   * @example
   * 6083****
   */
  groupId?: number;
  groupName?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      groupName: 'GroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'number',
      groupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHotlineNumberResponseBodyDataHotlineNumListCalloutRangeList extends $dara.Model {
  /**
   * @example
   * 2256****
   */
  departmentId?: number;
  departmentName?: string;
  groupDOList?: QueryHotlineNumberResponseBodyDataHotlineNumListCalloutRangeListGroupDOList[];
  static names(): { [key: string]: string } {
    return {
      departmentId: 'DepartmentId',
      departmentName: 'DepartmentName',
      groupDOList: 'GroupDOList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      departmentId: 'number',
      departmentName: 'string',
      groupDOList: { 'type': 'array', 'itemType': QueryHotlineNumberResponseBodyDataHotlineNumListCalloutRangeListGroupDOList },
    };
  }

  validate() {
    if(Array.isArray(this.groupDOList)) {
      $dara.Model.validateArray(this.groupDOList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHotlineNumberResponseBodyDataHotlineNumList extends $dara.Model {
  /**
   * @example
   * true
   */
  calloutAllDepartment?: boolean;
  calloutRangeList?: QueryHotlineNumberResponseBodyDataHotlineNumListCalloutRangeList[];
  /**
   * @example
   * 测试
   */
  description?: string;
  /**
   * @example
   * 0
   */
  evaluationStatus?: number;
  /**
   * @example
   * 12
   */
  flowId?: number;
  /**
   * @example
   * 测试流程
   */
  flowName?: string;
  /**
   * @example
   * 0571****2211
   */
  hotlineNumber?: string;
  /**
   * @example
   * true
   */
  inBoundEnabled?: boolean;
  /**
   * @example
   * 浙江杭州
   */
  location?: string;
  /**
   * @example
   * true
   */
  outboundEnabled?: boolean;
  /**
   * @example
   * 电信
   */
  sp?: string;
  static names(): { [key: string]: string } {
    return {
      calloutAllDepartment: 'CalloutAllDepartment',
      calloutRangeList: 'CalloutRangeList',
      description: 'Description',
      evaluationStatus: 'EvaluationStatus',
      flowId: 'FlowId',
      flowName: 'FlowName',
      hotlineNumber: 'HotlineNumber',
      inBoundEnabled: 'InBoundEnabled',
      location: 'Location',
      outboundEnabled: 'OutboundEnabled',
      sp: 'Sp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calloutAllDepartment: 'boolean',
      calloutRangeList: { 'type': 'array', 'itemType': QueryHotlineNumberResponseBodyDataHotlineNumListCalloutRangeList },
      description: 'string',
      evaluationStatus: 'number',
      flowId: 'number',
      flowName: 'string',
      hotlineNumber: 'string',
      inBoundEnabled: 'boolean',
      location: 'string',
      outboundEnabled: 'boolean',
      sp: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.calloutRangeList)) {
      $dara.Model.validateArray(this.calloutRangeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHotlineNumberResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  hotlineNumList?: QueryHotlineNumberResponseBodyDataHotlineNumList[];
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 123
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      hotlineNumList: 'HotlineNumList',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      hotlineNumList: { 'type': 'array', 'itemType': QueryHotlineNumberResponseBodyDataHotlineNumList },
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.hotlineNumList)) {
      $dara.Model.validateArray(this.hotlineNumList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOutboundTaskResponseBodyDataList extends $dara.Model {
  buId?: number;
  callerNum?: string;
  creator?: string;
  departmentId?: number;
  description?: string;
  endDate?: string;
  endTime?: string;
  extAttrs?: string;
  gmtCreate?: number;
  gmtModified?: number;
  groupName?: string;
  id?: number;
  model?: number;
  modifier?: string;
  name?: string;
  retryInterval?: number;
  retryTime?: number;
  skillGroup?: number;
  startDate?: string;
  startTime?: string;
  status?: number;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      buId: 'BuId',
      callerNum: 'CallerNum',
      creator: 'Creator',
      departmentId: 'DepartmentId',
      description: 'Description',
      endDate: 'EndDate',
      endTime: 'EndTime',
      extAttrs: 'ExtAttrs',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      groupName: 'GroupName',
      id: 'Id',
      model: 'Model',
      modifier: 'Modifier',
      name: 'Name',
      retryInterval: 'RetryInterval',
      retryTime: 'RetryTime',
      skillGroup: 'SkillGroup',
      startDate: 'StartDate',
      startTime: 'StartTime',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buId: 'number',
      callerNum: 'string',
      creator: 'string',
      departmentId: 'number',
      description: 'string',
      endDate: 'string',
      endTime: 'string',
      extAttrs: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      groupName: 'string',
      id: 'number',
      model: 'number',
      modifier: 'string',
      name: 'string',
      retryInterval: 'number',
      retryTime: 'number',
      skillGroup: 'number',
      startDate: 'string',
      startTime: 'string',
      status: 'number',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOutboundTaskResponseBodyData extends $dara.Model {
  currentPage?: string;
  list?: QueryOutboundTaskResponseBodyDataList[];
  pageSize?: string;
  totalResults?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      list: 'List',
      pageSize: 'PageSize',
      totalResults: 'TotalResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'string',
      list: { 'type': 'array', 'itemType': QueryOutboundTaskResponseBodyDataList },
      pageSize: 'string',
      totalResults: 'string',
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

export class QuerySkillGroupsResponseBodyData extends $dara.Model {
  /**
   * @example
   * 2
   */
  channelType?: number;
  description?: string;
  displayName?: string;
  /**
   * @example
   * 123456
   */
  skillGroupId?: number;
  skillGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      channelType: 'ChannelType',
      description: 'Description',
      displayName: 'DisplayName',
      skillGroupId: 'SkillGroupId',
      skillGroupName: 'SkillGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelType: 'number',
      description: 'string',
      displayName: 'string',
      skillGroupId: 'number',
      skillGroupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTaskDetailResponseBodyDataList extends $dara.Model {
  ani?: string;
  buId?: number;
  departmentId?: number;
  dnis?: string;
  endReason?: number;
  extAttrs?: string;
  gmtCreate?: number;
  gmtModified?: number;
  id?: number;
  memberId?: number;
  memberName?: string;
  outboundNum?: number;
  outboundTaskId?: number;
  priority?: number;
  retryTime?: string;
  servicerId?: number;
  servicerName?: string;
  skillGroup?: number;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      ani: 'Ani',
      buId: 'BuId',
      departmentId: 'DepartmentId',
      dnis: 'Dnis',
      endReason: 'EndReason',
      extAttrs: 'ExtAttrs',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      memberId: 'MemberId',
      memberName: 'MemberName',
      outboundNum: 'OutboundNum',
      outboundTaskId: 'OutboundTaskId',
      priority: 'Priority',
      retryTime: 'RetryTime',
      servicerId: 'ServicerId',
      servicerName: 'ServicerName',
      skillGroup: 'SkillGroup',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ani: 'string',
      buId: 'number',
      departmentId: 'number',
      dnis: 'string',
      endReason: 'number',
      extAttrs: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      id: 'number',
      memberId: 'number',
      memberName: 'string',
      outboundNum: 'number',
      outboundTaskId: 'number',
      priority: 'number',
      retryTime: 'string',
      servicerId: 'number',
      servicerName: 'string',
      skillGroup: 'number',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTaskDetailResponseBodyData extends $dara.Model {
  currentPage?: string;
  list?: QueryTaskDetailResponseBodyDataList[];
  pageSize?: string;
  totalResults?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      list: 'List',
      pageSize: 'PageSize',
      totalResults: 'TotalResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'string',
      list: { 'type': 'array', 'itemType': QueryTaskDetailResponseBodyDataList },
      pageSize: 'string',
      totalResults: 'string',
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

export class QueryTouchListResponseBodyResultDataDataExtAttrs extends $dara.Model {
  /**
   * @example
   * 187****0000
   */
  ani?: string;
  /**
   * @example
   * 05712688****
   */
  dnis?: string;
  /**
   * @example
   * 2
   */
  evaluationLevel?: number;
  /**
   * @example
   * 1
   */
  evaluationScore?: number;
  /**
   * @example
   * 0
   */
  evaluationSolution?: number;
  /**
   * @example
   * 1
   */
  evaluationStatus?: number;
  /**
   * @example
   * 1
   */
  onlineJoinRespInterval?: number;
  /**
   * @example
   * 0
   */
  onlineSessionSource?: number;
  /**
   * @example
   * 05712688****
   */
  outCallRouteNumber?: string;
  static names(): { [key: string]: string } {
    return {
      ani: 'Ani',
      dnis: 'Dnis',
      evaluationLevel: 'EvaluationLevel',
      evaluationScore: 'EvaluationScore',
      evaluationSolution: 'EvaluationSolution',
      evaluationStatus: 'EvaluationStatus',
      onlineJoinRespInterval: 'OnlineJoinRespInterval',
      onlineSessionSource: 'OnlineSessionSource',
      outCallRouteNumber: 'OutCallRouteNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ani: 'string',
      dnis: 'string',
      evaluationLevel: 'number',
      evaluationScore: 'number',
      evaluationSolution: 'number',
      evaluationStatus: 'number',
      onlineJoinRespInterval: 'number',
      onlineSessionSource: 'number',
      outCallRouteNumber: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTouchListResponseBodyResultDataData extends $dara.Model {
  /**
   * @example
   * 905
   */
  buId?: number;
  /**
   * @example
   * 4f8807a9de024507a3090b5b66a8****
   */
  channelId?: string;
  /**
   * @example
   * 1
   */
  channelType?: number;
  /**
   * @example
   * 1611207976000
   */
  closeTime?: number;
  commonQueueName?: string;
  /**
   * @example
   * 100
   */
  depId?: number;
  extAttrs?: QueryTouchListResponseBodyResultDataDataExtAttrs;
  extAttrsString?: { [key: string]: any };
  /**
   * @example
   * xxxx
   */
  feedback?: string;
  /**
   * @example
   * 1611209971000
   */
  firstTime?: number;
  /**
   * @example
   * 6400665****
   */
  fromId?: number;
  /**
   * @example
   * 1611209971000
   */
  gmtCreate?: number;
  /**
   * @example
   * 1611207979000
   */
  gmtModified?: number;
  /**
   * @example
   * 6400665****
   */
  memberId?: number;
  memberName?: string;
  /**
   * @example
   * 0
   */
  parentTouchId?: number;
  /**
   * @example
   * 111
   */
  queueId?: number;
  /**
   * @example
   * 67****
   */
  servicerId?: number;
  /**
   * @example
   * 13900001234
   */
  servicerName?: string;
  /**
   * @example
   * 1
   */
  status?: number;
  /**
   * @example
   * null
   */
  switchUser?: string;
  /**
   * @example
   * 678026
   */
  toId?: number;
  /**
   * @example
   * 1
   */
  touchContent?: string;
  /**
   * @example
   * 2
   */
  touchEndReason?: number;
  /**
   * @example
   * 1386****
   */
  touchId?: string;
  /**
   * @example
   * 111
   */
  touchTime?: string;
  /**
   * @example
   * 2
   */
  touchType?: number;
  /**
   * @example
   * 1386****
   */
  userTouchId?: number;
  static names(): { [key: string]: string } {
    return {
      buId: 'BuId',
      channelId: 'ChannelId',
      channelType: 'ChannelType',
      closeTime: 'CloseTime',
      commonQueueName: 'CommonQueueName',
      depId: 'DepId',
      extAttrs: 'ExtAttrs',
      extAttrsString: 'ExtAttrsString',
      feedback: 'Feedback',
      firstTime: 'FirstTime',
      fromId: 'FromId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      memberId: 'MemberId',
      memberName: 'MemberName',
      parentTouchId: 'ParentTouchId',
      queueId: 'QueueId',
      servicerId: 'ServicerId',
      servicerName: 'ServicerName',
      status: 'Status',
      switchUser: 'SwitchUser',
      toId: 'ToId',
      touchContent: 'TouchContent',
      touchEndReason: 'TouchEndReason',
      touchId: 'TouchId',
      touchTime: 'TouchTime',
      touchType: 'TouchType',
      userTouchId: 'UserTouchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buId: 'number',
      channelId: 'string',
      channelType: 'number',
      closeTime: 'number',
      commonQueueName: 'string',
      depId: 'number',
      extAttrs: QueryTouchListResponseBodyResultDataDataExtAttrs,
      extAttrsString: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      feedback: 'string',
      firstTime: 'number',
      fromId: 'number',
      gmtCreate: 'number',
      gmtModified: 'number',
      memberId: 'number',
      memberName: 'string',
      parentTouchId: 'number',
      queueId: 'number',
      servicerId: 'number',
      servicerName: 'string',
      status: 'number',
      switchUser: 'string',
      toId: 'number',
      touchContent: 'string',
      touchEndReason: 'number',
      touchId: 'string',
      touchTime: 'string',
      touchType: 'number',
      userTouchId: 'number',
    };
  }

  validate() {
    if(this.extAttrs && typeof (this.extAttrs as any).validate === 'function') {
      (this.extAttrs as any).validate();
    }
    if(this.extAttrsString) {
      $dara.Model.validateMap(this.extAttrsString);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTouchListResponseBodyResultData extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  data?: QueryTouchListResponseBodyResultDataData[];
  /**
   * @example
   * false
   */
  empty?: boolean;
  /**
   * @example
   * 2
   */
  nextPage?: number;
  /**
   * @example
   * 2
   */
  onePageSize?: number;
  /**
   * @example
   * 2
   */
  previousPage?: number;
  /**
   * @example
   * 4
   */
  totalPage?: number;
  /**
   * @example
   * 100
   */
  totalResults?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      data: 'Data',
      empty: 'Empty',
      nextPage: 'NextPage',
      onePageSize: 'OnePageSize',
      previousPage: 'PreviousPage',
      totalPage: 'TotalPage',
      totalResults: 'TotalResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      data: { 'type': 'array', 'itemType': QueryTouchListResponseBodyResultDataData },
      empty: 'boolean',
      nextPage: 'number',
      onePageSize: 'number',
      previousPage: 'number',
      totalPage: 'number',
      totalResults: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveAgentFromSkillGroupResponseBodyData extends $dara.Model {
  /**
   * @example
   * 2
   */
  successCount?: number;
  static names(): { [key: string]: string } {
    return {
      successCount: 'SuccessCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      successCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetHotlineNumberRequestOutboundRangeList extends $dara.Model {
  /**
   * @example
   * 123456
   */
  departmentId?: number;
  groupIdList?: number[];
  static names(): { [key: string]: string } {
    return {
      departmentId: 'DepartmentId',
      groupIdList: 'GroupIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      departmentId: 'number',
      groupIdList: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.groupIdList)) {
      $dara.Model.validateArray(this.groupIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAiOutboundTaskRequestRecallRule extends $dara.Model {
  /**
   * @example
   * 2
   */
  count?: number;
  /**
   * @example
   * 5
   */
  interval?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      interval: 'Interval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      interval: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddHotlineNumberRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * desc
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  enableInbound?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  enableInboundEvaluation?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  enableOutbound?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  enableOutboundEvaluation?: boolean;
  /**
   * @example
   * 2
   */
  evaluationLevel?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 05710000****
   */
  hotlineNumber?: string;
  /**
   * @example
   * 123456
   */
  inboundFlowId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  outboundAllDepart?: boolean;
  outboundRangeList?: AddHotlineNumberRequestOutboundRangeList[];
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      enableInbound: 'EnableInbound',
      enableInboundEvaluation: 'EnableInboundEvaluation',
      enableOutbound: 'EnableOutbound',
      enableOutboundEvaluation: 'EnableOutboundEvaluation',
      evaluationLevel: 'EvaluationLevel',
      hotlineNumber: 'HotlineNumber',
      inboundFlowId: 'InboundFlowId',
      instanceId: 'InstanceId',
      outboundAllDepart: 'OutboundAllDepart',
      outboundRangeList: 'OutboundRangeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      enableInbound: 'boolean',
      enableInboundEvaluation: 'boolean',
      enableOutbound: 'boolean',
      enableOutboundEvaluation: 'boolean',
      evaluationLevel: 'number',
      hotlineNumber: 'string',
      inboundFlowId: 'number',
      instanceId: 'string',
      outboundAllDepart: 'boolean',
      outboundRangeList: { 'type': 'array', 'itemType': AddHotlineNumberRequestOutboundRangeList },
    };
  }

  validate() {
    if(Array.isArray(this.outboundRangeList)) {
      $dara.Model.validateArray(this.outboundRangeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddHotlineNumberShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * desc
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  enableInbound?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  enableInboundEvaluation?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  enableOutbound?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  enableOutboundEvaluation?: boolean;
  /**
   * @example
   * 2
   */
  evaluationLevel?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 05710000****
   */
  hotlineNumber?: string;
  /**
   * @example
   * 123456
   */
  inboundFlowId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  outboundAllDepart?: boolean;
  outboundRangeListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      enableInbound: 'EnableInbound',
      enableInboundEvaluation: 'EnableInboundEvaluation',
      enableOutbound: 'EnableOutbound',
      enableOutboundEvaluation: 'EnableOutboundEvaluation',
      evaluationLevel: 'EvaluationLevel',
      hotlineNumber: 'HotlineNumber',
      inboundFlowId: 'InboundFlowId',
      instanceId: 'InstanceId',
      outboundAllDepart: 'OutboundAllDepart',
      outboundRangeListShrink: 'OutboundRangeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      enableInbound: 'boolean',
      enableInboundEvaluation: 'boolean',
      enableOutbound: 'boolean',
      enableOutboundEvaluation: 'boolean',
      evaluationLevel: 'number',
      hotlineNumber: 'string',
      inboundFlowId: 'number',
      instanceId: 'string',
      outboundAllDepart: 'boolean',
      outboundRangeListShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddHotlineNumberResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * EE339D98-9BD3-4413-B165
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
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddHotlineNumberResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddHotlineNumberResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddHotlineNumberResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddOuterAccountRequest extends $dara.Model {
  /**
   * @example
   * http://****
   */
  avatar?: string;
  ext?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1212
   */
  outerAccountId?: string;
  outerAccountName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * alipay
   */
  outerAccountType?: string;
  /**
   * @example
   * 3
   */
  outerDepartmentId?: string;
  /**
   * @example
   * type_invalid
   */
  outerDepartmentType?: string;
  /**
   * @example
   * ["222","333","444"]
   */
  outerGroupIds?: string;
  /**
   * @example
   * mybank
   */
  outerGroupType?: string;
  realName?: string;
  static names(): { [key: string]: string } {
    return {
      avatar: 'Avatar',
      ext: 'Ext',
      outerAccountId: 'OuterAccountId',
      outerAccountName: 'OuterAccountName',
      outerAccountType: 'OuterAccountType',
      outerDepartmentId: 'OuterDepartmentId',
      outerDepartmentType: 'OuterDepartmentType',
      outerGroupIds: 'OuterGroupIds',
      outerGroupType: 'OuterGroupType',
      realName: 'RealName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatar: 'string',
      ext: 'string',
      outerAccountId: 'string',
      outerAccountName: 'string',
      outerAccountType: 'string',
      outerDepartmentId: 'string',
      outerDepartmentType: 'string',
      outerGroupIds: 'string',
      outerGroupType: 'string',
      realName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddOuterAccountResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * 123456
   */
  data?: string;
  /**
   * @example
   * xxxx
   */
  message?: string;
  /**
   * @example
   * EE338D98-9BD3-4413-B165
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
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddOuterAccountResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddOuterAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddOuterAccountResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSkillGroupRequest extends $dara.Model {
  /**
   * @example
   * 123456
   */
  outerDepartmentId?: string;
  /**
   * @example
   * type_invalid
   */
  outerDepartmentType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  outerGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  outerGroupName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * mybank
   */
  outerGroupType?: string;
  static names(): { [key: string]: string } {
    return {
      outerDepartmentId: 'OuterDepartmentId',
      outerDepartmentType: 'OuterDepartmentType',
      outerGroupId: 'OuterGroupId',
      outerGroupName: 'OuterGroupName',
      outerGroupType: 'OuterGroupType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outerDepartmentId: 'string',
      outerDepartmentType: 'string',
      outerGroupId: 'string',
      outerGroupName: 'string',
      outerGroupType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSkillGroupResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * 123456
   */
  data?: string;
  /**
   * @example
   * xxxx
   */
  message?: string;
  /**
   * @example
   * EE338D98-9BD3-4413-B165
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
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSkillGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddSkillGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddSkillGroupResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AiccsSmartCallRequest extends $dara.Model {
  /**
   * @example
   * true
   */
  actionCodeBreak?: boolean;
  /**
   * @example
   * 120
   */
  actionCodeTimeBreak?: number;
  /**
   * @example
   * 23387****
   */
  asrAlsAmId?: string;
  /**
   * @example
   * customer_service_8k
   */
  asrBaseId?: string;
  /**
   * @example
   * bf71664d30d2478fb8cb8c39c6b6****
   */
  asrModelId?: string;
  /**
   * @example
   * 6689****
   */
  asrVocabularyId?: string;
  /**
   * @example
   * 2d4c-4e78-8d2a-afbb06cf****.wav
   */
  backgroundFileCode?: string;
  /**
   * @example
   * 1
   */
  backgroundSpeed?: number;
  /**
   * @example
   * 1
   */
  backgroundVolume?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1862222****
   */
  calledNumber?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0571000****
   */
  calledShowNumber?: string;
  /**
   * @example
   * 2234****
   */
  dynamicId?: string;
  /**
   * @example
   * fasle
   */
  earlyMediaAsr?: boolean;
  /**
   * @example
   * true
   */
  enableITN?: boolean;
  /**
   * @example
   * 10000
   */
  muteTime?: number;
  /**
   * @example
   * 222356****
   */
  outId?: string;
  ownerId?: number;
  /**
   * @example
   * 800
   */
  pauseTime?: number;
  /**
   * @example
   * 1
   */
  playTimes?: number;
  /**
   * @example
   * aiccs
   */
  prodCode?: string;
  /**
   * @example
   * true
   */
  recordFlag?: boolean;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @example
   * 120
   */
  sessionTimeout?: number;
  /**
   * @example
   * 1
   */
  speed?: number;
  /**
   * @example
   * true
   */
  ttsConf?: boolean;
  /**
   * @example
   * 100
   */
  ttsSpeed?: number;
  /**
   * @example
   * xiaoyun
   */
  ttsStyle?: string;
  /**
   * @example
   * 10
   */
  ttsVolume?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2d4c-4e78-8d2a-afbb06cf****.wav,$name$
   */
  voiceCode?: string;
  voiceCodeParam?: string;
  /**
   * @example
   * 1
   */
  volume?: number;
  static names(): { [key: string]: string } {
    return {
      actionCodeBreak: 'ActionCodeBreak',
      actionCodeTimeBreak: 'ActionCodeTimeBreak',
      asrAlsAmId: 'AsrAlsAmId',
      asrBaseId: 'AsrBaseId',
      asrModelId: 'AsrModelId',
      asrVocabularyId: 'AsrVocabularyId',
      backgroundFileCode: 'BackgroundFileCode',
      backgroundSpeed: 'BackgroundSpeed',
      backgroundVolume: 'BackgroundVolume',
      calledNumber: 'CalledNumber',
      calledShowNumber: 'CalledShowNumber',
      dynamicId: 'DynamicId',
      earlyMediaAsr: 'EarlyMediaAsr',
      enableITN: 'EnableITN',
      muteTime: 'MuteTime',
      outId: 'OutId',
      ownerId: 'OwnerId',
      pauseTime: 'PauseTime',
      playTimes: 'PlayTimes',
      prodCode: 'ProdCode',
      recordFlag: 'RecordFlag',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sessionTimeout: 'SessionTimeout',
      speed: 'Speed',
      ttsConf: 'TtsConf',
      ttsSpeed: 'TtsSpeed',
      ttsStyle: 'TtsStyle',
      ttsVolume: 'TtsVolume',
      voiceCode: 'VoiceCode',
      voiceCodeParam: 'VoiceCodeParam',
      volume: 'Volume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionCodeBreak: 'boolean',
      actionCodeTimeBreak: 'number',
      asrAlsAmId: 'string',
      asrBaseId: 'string',
      asrModelId: 'string',
      asrVocabularyId: 'string',
      backgroundFileCode: 'string',
      backgroundSpeed: 'number',
      backgroundVolume: 'number',
      calledNumber: 'string',
      calledShowNumber: 'string',
      dynamicId: 'string',
      earlyMediaAsr: 'boolean',
      enableITN: 'boolean',
      muteTime: 'number',
      outId: 'string',
      ownerId: 'number',
      pauseTime: 'number',
      playTimes: 'number',
      prodCode: 'string',
      recordFlag: 'boolean',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sessionTimeout: 'number',
      speed: 'number',
      ttsConf: 'boolean',
      ttsSpeed: 'number',
      ttsStyle: 'string',
      ttsVolume: 'number',
      voiceCode: 'string',
      voiceCodeParam: 'string',
      volume: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AiccsSmartCallResponseBody extends $dara.Model {
  /**
   * @example
   * 116012854210^10281427****
   */
  code?: string;
  /**
   * @example
   * OK
   */
  data?: string;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * A90E4451-FED7-49D2-87C8-00700A8C4D0D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AiccsSmartCallResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AiccsSmartCallResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AiccsSmartCallResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AiccsSmartCallOperateRequest extends $dara.Model {
  /**
   * @example
   * 116012854210^102814279****
   */
  callId?: string;
  /**
   * @example
   * parallelBridge
   */
  command?: string;
  ownerId?: number;
  /**
   * @example
   * Param
   */
  param?: string;
  /**
   * @example
   * aiccs
   */
  prodCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      callId: 'CallId',
      command: 'Command',
      ownerId: 'OwnerId',
      param: 'Param',
      prodCode: 'ProdCode',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callId: 'string',
      command: 'string',
      ownerId: 'number',
      param: 'string',
      prodCode: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AiccsSmartCallOperateResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * true
   */
  data?: string;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * A90E4451-FED7-49D2-87C8-00700A8C4D0D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AiccsSmartCallOperateResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AiccsSmartCallOperateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AiccsSmartCallOperateResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AnswerCallRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123@123.com
   */
  accountName?: string;
  /**
   * @example
   * 7719786
   */
  callId?: string;
  /**
   * @example
   * 46c1341e-2648-447a-9b11-70b6a298d94d
   */
  clientToken?: string;
  /**
   * @example
   * 7719788
   */
  connectionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  /**
   * @example
   * 7719787
   */
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      callId: 'CallId',
      clientToken: 'ClientToken',
      connectionId: 'ConnectionId',
      instanceId: 'InstanceId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      callId: 'string',
      clientToken: 'string',
      connectionId: 'string',
      instanceId: 'string',
      jobId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AnswerCallResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  /**
   * @example
   * xxxx
   */
  message?: string;
  /**
   * @example
   * EE338D98-9BD3-4413-B165
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
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AnswerCallResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AnswerCallResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AnswerCallResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachTaskRequest extends $dara.Model {
  callString?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      callString: 'CallString',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callString: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      taskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachTaskResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 10
   */
  data?: number;
  /**
   * @example
   * OK
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
      data: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AttachTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AttachTaskResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchCreateQualityProjectsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  analysisIds?: number[];
  channelTouchType?: number[];
  /**
   * @remarks
   * This parameter is required.
   */
  checkFreqType?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  instanceList?: string[];
  /**
   * @remarks
   * This parameter is required.
   */
  projectName?: string;
  timeRangeEnd?: string;
  timeRangeStart?: string;
  static names(): { [key: string]: string } {
    return {
      analysisIds: 'AnalysisIds',
      channelTouchType: 'ChannelTouchType',
      checkFreqType: 'CheckFreqType',
      instanceList: 'InstanceList',
      projectName: 'ProjectName',
      timeRangeEnd: 'TimeRangeEnd',
      timeRangeStart: 'TimeRangeStart',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysisIds: { 'type': 'array', 'itemType': 'number' },
      channelTouchType: { 'type': 'array', 'itemType': 'number' },
      checkFreqType: 'number',
      instanceList: { 'type': 'array', 'itemType': 'string' },
      projectName: 'string',
      timeRangeEnd: 'string',
      timeRangeStart: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.analysisIds)) {
      $dara.Model.validateArray(this.analysisIds);
    }
    if(Array.isArray(this.channelTouchType)) {
      $dara.Model.validateArray(this.channelTouchType);
    }
    if(Array.isArray(this.instanceList)) {
      $dara.Model.validateArray(this.instanceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchCreateQualityProjectsResponseBody extends $dara.Model {
  code?: string;
  data?: BatchCreateQualityProjectsResponseBodyData[];
  message?: string;
  requestId?: string;
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
      data: { 'type': 'array', 'itemType': BatchCreateQualityProjectsResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchCreateQualityProjectsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BatchCreateQualityProjectsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BatchCreateQualityProjectsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelTaskRequest extends $dara.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      taskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelTaskResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * true
   */
  data?: boolean;
  /**
   * @example
   * Ok
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
      data: 'boolean',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CancelTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CancelTaskResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeChatAgentStatusRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * account1
   */
  accountName?: string;
  /**
   * @example
   * 46c1341e-2648-447a-9b11-70b6a298d94d
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * requestLogout
   */
  method?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      method: 'Method',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      clientToken: 'string',
      instanceId: 'string',
      method: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeChatAgentStatusResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  /**
   * @example
   * 0
   */
  data?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * DF6A3FB7-A5AA-43BE-A65B
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
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeChatAgentStatusResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ChangeChatAgentStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ChangeChatAgentStatusResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeQualityProjectStatusRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  projectId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      projectId: 'ProjectId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      projectId: 'number',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeQualityProjectStatusResponseBody extends $dara.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
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
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeQualityProjectStatusResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ChangeQualityProjectStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ChangeQualityProjectStatusResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAgentRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * username@example.com
   */
  accountName?: string;
  /**
   * @example
   * 46c1341e-2648-447a-9b11-70b6a298d94d
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  displayName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  skillGroupId?: number[];
  skillGroupIdList?: number[];
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      clientToken: 'ClientToken',
      displayName: 'DisplayName',
      instanceId: 'InstanceId',
      skillGroupId: 'SkillGroupId',
      skillGroupIdList: 'SkillGroupIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      clientToken: 'string',
      displayName: 'string',
      instanceId: 'string',
      skillGroupId: { 'type': 'array', 'itemType': 'number' },
      skillGroupIdList: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.skillGroupId)) {
      $dara.Model.validateArray(this.skillGroupId);
    }
    if(Array.isArray(this.skillGroupIdList)) {
      $dara.Model.validateArray(this.skillGroupIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAgentResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  /**
   * @example
   * 2578****
   */
  data?: number;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * EE338D98-9BD3-4413-B165
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
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'number',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAgentResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAgentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateAgentResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAiOutboundTaskRequest extends $dara.Model {
  /**
   * @example
   * 10
   */
  concurrentRate?: number;
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {"TUESDAY":[{"start":"06:00","end":"06:05"}],"MONDAY":[{"start":"09:00","end":"18:00"},{"start":"20:30","end":"21:45"},{"start":"22:30","end":"22:50"}],"WEDNESDAY":[{"start":"09:00","end":"18:00"}],"THURSDAY":[{"start":"09:00","end":"18:00"}],"FRIDAY":[{"start":"09:00","end":"18:00"}],"SATURDAY":[{"start":"09:00","end":"18:00"}],"SUNDAY":[{"start":"17:00","end":"23:45"}]}
   */
  executionTime?: string;
  /**
   * @example
   * 1.5
   */
  forecastCallRate?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  handlerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cc_xp_pre-cn-***
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xx外呼任务
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  numRepeated?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  outboundNums?: string[];
  recallRule?: CreateAiOutboundTaskRequestRecallRule;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2
   * 
   * **if can be null:**
   * false
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      concurrentRate: 'ConcurrentRate',
      description: 'Description',
      executionTime: 'ExecutionTime',
      forecastCallRate: 'ForecastCallRate',
      handlerId: 'HandlerId',
      instanceId: 'InstanceId',
      name: 'Name',
      numRepeated: 'NumRepeated',
      outboundNums: 'OutboundNums',
      recallRule: 'RecallRule',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      concurrentRate: 'number',
      description: 'string',
      executionTime: 'string',
      forecastCallRate: 'number',
      handlerId: 'number',
      instanceId: 'string',
      name: 'string',
      numRepeated: 'number',
      outboundNums: { 'type': 'array', 'itemType': 'string' },
      recallRule: CreateAiOutboundTaskRequestRecallRule,
      type: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.outboundNums)) {
      $dara.Model.validateArray(this.outboundNums);
    }
    if(this.recallRule && typeof (this.recallRule as any).validate === 'function') {
      (this.recallRule as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAiOutboundTaskShrinkRequest extends $dara.Model {
  /**
   * @example
   * 10
   */
  concurrentRate?: number;
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {"TUESDAY":[{"start":"06:00","end":"06:05"}],"MONDAY":[{"start":"09:00","end":"18:00"},{"start":"20:30","end":"21:45"},{"start":"22:30","end":"22:50"}],"WEDNESDAY":[{"start":"09:00","end":"18:00"}],"THURSDAY":[{"start":"09:00","end":"18:00"}],"FRIDAY":[{"start":"09:00","end":"18:00"}],"SATURDAY":[{"start":"09:00","end":"18:00"}],"SUNDAY":[{"start":"17:00","end":"23:45"}]}
   */
  executionTime?: string;
  /**
   * @example
   * 1.5
   */
  forecastCallRate?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  handlerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cc_xp_pre-cn-***
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xx外呼任务
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  numRepeated?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  outboundNumsShrink?: string;
  recallRuleShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2
   * 
   * **if can be null:**
   * false
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      concurrentRate: 'ConcurrentRate',
      description: 'Description',
      executionTime: 'ExecutionTime',
      forecastCallRate: 'ForecastCallRate',
      handlerId: 'HandlerId',
      instanceId: 'InstanceId',
      name: 'Name',
      numRepeated: 'NumRepeated',
      outboundNumsShrink: 'OutboundNums',
      recallRuleShrink: 'RecallRule',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      concurrentRate: 'number',
      description: 'string',
      executionTime: 'string',
      forecastCallRate: 'number',
      handlerId: 'number',
      instanceId: 'string',
      name: 'string',
      numRepeated: 'number',
      outboundNumsShrink: 'string',
      recallRuleShrink: 'string',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAiOutboundTaskResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 123456
   */
  data?: number;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * EE338D98-9BD3-4413-B165
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
      data: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAiOutboundTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAiOutboundTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateAiOutboundTaskResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAiOutboundTaskBatchRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * agent_***
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      taskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAiOutboundTaskBatchResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 123456
   */
  data?: number;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * EE338D98-9BD3-4413-B165
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
      data: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAiOutboundTaskBatchResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAiOutboundTaskBatchResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateAiOutboundTaskBatchResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDepartmentRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  departmentName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      departmentName: 'DepartmentName',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      departmentName: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDepartmentResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * 123456
   */
  data?: number;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 98B032F5-6473-4EAC-8BA8-C28993513A1F
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
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'number',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDepartmentResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDepartmentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateDepartmentResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOutboundTaskRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  ani?: string;
  callInfos?: string;
  departmentId?: number;
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  endDate?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  endTime?: string;
  extAttrs?: string;
  groupName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  model?: number;
  retryInterval?: number;
  retryTime?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  skillGroup?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  startDate?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  startTime?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  taskName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  taskType?: number;
  static names(): { [key: string]: string } {
    return {
      ani: 'Ani',
      callInfos: 'CallInfos',
      departmentId: 'DepartmentId',
      description: 'Description',
      endDate: 'EndDate',
      endTime: 'EndTime',
      extAttrs: 'ExtAttrs',
      groupName: 'GroupName',
      instanceId: 'InstanceId',
      model: 'Model',
      retryInterval: 'RetryInterval',
      retryTime: 'RetryTime',
      skillGroup: 'SkillGroup',
      startDate: 'StartDate',
      startTime: 'StartTime',
      taskName: 'TaskName',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ani: 'string',
      callInfos: 'string',
      departmentId: 'number',
      description: 'string',
      endDate: 'string',
      endTime: 'string',
      extAttrs: 'string',
      groupName: 'string',
      instanceId: 'string',
      model: 'number',
      retryInterval: 'number',
      retryTime: 'number',
      skillGroup: 'number',
      startDate: 'string',
      startTime: 'string',
      taskName: 'string',
      taskType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOutboundTaskResponseBody extends $dara.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
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
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOutboundTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateOutboundTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateOutboundTaskResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQualityProjectRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  analysisIds?: number[];
  channelTouchType?: number[];
  /**
   * @remarks
   * This parameter is required.
   */
  checkFreqType?: number;
  depList?: number[];
  groupList?: number[];
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  projectName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  scopeType?: number;
  servicerList?: string[];
  timeRangeEnd?: string;
  timeRangeStart?: string;
  static names(): { [key: string]: string } {
    return {
      analysisIds: 'AnalysisIds',
      channelTouchType: 'ChannelTouchType',
      checkFreqType: 'CheckFreqType',
      depList: 'DepList',
      groupList: 'GroupList',
      instanceId: 'InstanceId',
      projectName: 'ProjectName',
      scopeType: 'ScopeType',
      servicerList: 'ServicerList',
      timeRangeEnd: 'TimeRangeEnd',
      timeRangeStart: 'TimeRangeStart',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysisIds: { 'type': 'array', 'itemType': 'number' },
      channelTouchType: { 'type': 'array', 'itemType': 'number' },
      checkFreqType: 'number',
      depList: { 'type': 'array', 'itemType': 'number' },
      groupList: { 'type': 'array', 'itemType': 'number' },
      instanceId: 'string',
      projectName: 'string',
      scopeType: 'number',
      servicerList: { 'type': 'array', 'itemType': 'string' },
      timeRangeEnd: 'string',
      timeRangeStart: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.analysisIds)) {
      $dara.Model.validateArray(this.analysisIds);
    }
    if(Array.isArray(this.channelTouchType)) {
      $dara.Model.validateArray(this.channelTouchType);
    }
    if(Array.isArray(this.depList)) {
      $dara.Model.validateArray(this.depList);
    }
    if(Array.isArray(this.groupList)) {
      $dara.Model.validateArray(this.groupList);
    }
    if(Array.isArray(this.servicerList)) {
      $dara.Model.validateArray(this.servicerList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQualityProjectResponseBody extends $dara.Model {
  code?: string;
  data?: CreateQualityProjectResponseBodyData;
  message?: string;
  requestId?: string;
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
      data: CreateQualityProjectResponseBodyData,
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

export class CreateQualityProjectResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateQualityProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateQualityProjectResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQualityRuleRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  keyWords?: string[];
  /**
   * @remarks
   * This parameter is required.
   */
  matchType?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  ruleTag?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      keyWords: 'KeyWords',
      matchType: 'MatchType',
      name: 'Name',
      ruleTag: 'RuleTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      keyWords: { 'type': 'array', 'itemType': 'string' },
      matchType: 'number',
      name: 'string',
      ruleTag: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.keyWords)) {
      $dara.Model.validateArray(this.keyWords);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQualityRuleResponseBody extends $dara.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQualityRuleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateQualityRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateQualityRuleResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSkillGroupRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2
   */
  channelType?: number;
  /**
   * @example
   * 46c1341e-2648-447a-****-70b6a298d94d
   */
  clientToken?: string;
  /**
   * @example
   * 123
   */
  departmentId?: number;
  description?: string;
  displayName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  skillGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      channelType: 'ChannelType',
      clientToken: 'ClientToken',
      departmentId: 'DepartmentId',
      description: 'Description',
      displayName: 'DisplayName',
      instanceId: 'InstanceId',
      skillGroupName: 'SkillGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelType: 'number',
      clientToken: 'string',
      departmentId: 'number',
      description: 'string',
      displayName: 'string',
      instanceId: 'string',
      skillGroupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSkillGroupResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  /**
   * @example
   * 123456
   */
  data?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * EE338D98-9BD3-4413-B165
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
      data: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSkillGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateSkillGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateSkillGroupResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskRequest extends $dara.Model {
  callString?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * JSON
   */
  callStringType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0571****5678,0571****5679
   */
  caller?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @example
   * 2
   */
  retryCount?: number;
  /**
   * @example
   * 1
   */
  retryFlag?: number;
  /**
   * @example
   * 2
   */
  retryInterval?: number;
  /**
   * @example
   * 200010,200011
   */
  retryStatusCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  robotId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3
   */
  seatCount?: string;
  startNow?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  taskName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  workDay?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10:00-12:00,13:00-14:00
   */
  workTimeList?: string;
  static names(): { [key: string]: string } {
    return {
      callString: 'CallString',
      callStringType: 'CallStringType',
      caller: 'Caller',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      retryCount: 'RetryCount',
      retryFlag: 'RetryFlag',
      retryInterval: 'RetryInterval',
      retryStatusCode: 'RetryStatusCode',
      robotId: 'RobotId',
      seatCount: 'SeatCount',
      startNow: 'StartNow',
      taskName: 'TaskName',
      workDay: 'WorkDay',
      workTimeList: 'WorkTimeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callString: 'string',
      callStringType: 'string',
      caller: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      retryCount: 'number',
      retryFlag: 'number',
      retryInterval: 'number',
      retryStatusCode: 'string',
      robotId: 'string',
      seatCount: 'string',
      startNow: 'boolean',
      taskName: 'string',
      workDay: 'string',
      workTimeList: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 123456
   */
  data?: number;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * EE338D98-9BD3-4413-B165
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
      data: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateTaskResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateThirdSsoAgentRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * accountId1
   */
  accountId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * accountName1
   */
  accountName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 46c1341e-2648-447a-9b11-70b6a298d94d
   */
  clientId?: string;
  /**
   * @example
   * 46c1341e-2648-447a-9b11-70b6a298d94d
   */
  clientToken?: string;
  displayName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre***
   */
  instanceId?: string;
  roleIds?: number[];
  skillGroupIds?: number[];
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      accountName: 'AccountName',
      clientId: 'ClientId',
      clientToken: 'ClientToken',
      displayName: 'DisplayName',
      instanceId: 'InstanceId',
      roleIds: 'RoleIds',
      skillGroupIds: 'SkillGroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      accountName: 'string',
      clientId: 'string',
      clientToken: 'string',
      displayName: 'string',
      instanceId: 'string',
      roleIds: { 'type': 'array', 'itemType': 'number' },
      skillGroupIds: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.roleIds)) {
      $dara.Model.validateArray(this.roleIds);
    }
    if(Array.isArray(this.skillGroupIds)) {
      $dara.Model.validateArray(this.skillGroupIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateThirdSsoAgentResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * 123456
   */
  data?: number;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * requestId
   * 
   * @example
   * EE338D98-9BD3-4413-B165
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
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'number',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateThirdSsoAgentResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateThirdSsoAgentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateThirdSsoAgentResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAgentRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123@****.com
   */
  accountName?: string;
  /**
   * @example
   * 46c1341e-2648-447a-9b11-70b6a298****
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      clientToken: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAgentResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * EE338D98-9BD3-4413-B165
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
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAgentResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteAgentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteAgentResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAiOutboundTaskRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * agent_***
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      taskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAiOutboundTaskResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * EE338D98-9BD3-4413-B165
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
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAiOutboundTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteAiOutboundTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteAiOutboundTaskResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDepartmentRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  departmentId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      departmentId: 'DepartmentId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      departmentId: 'number',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDepartmentResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * true
   */
  data?: boolean;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * seccessful
   */
  message?: string;
  /**
   * @example
   * 98B032F5-6473-4EAC-8BA8-C28993513A1F
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
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDepartmentResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDepartmentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteDepartmentResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHotlineNumberRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 05710000****
   */
  hotlineNumber?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      hotlineNumber: 'HotlineNumber',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotlineNumber: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHotlineNumberResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * 98B032F5-6473-4EAC-8BA8-C28993513A1F
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
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHotlineNumberResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteHotlineNumberResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteHotlineNumberResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteOutboundTaskRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  outboundTaskId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      outboundTaskId: 'OutboundTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      outboundTaskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteOutboundTaskResponseBody extends $dara.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
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
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteOutboundTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteOutboundTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteOutboundTaskResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteOuterAccountRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  outerAccountId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * aliyun
   */
  outerAccountType?: string;
  static names(): { [key: string]: string } {
    return {
      outerAccountId: 'OuterAccountId',
      outerAccountType: 'OuterAccountType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outerAccountId: 'string',
      outerAccountType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteOuterAccountResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * true
   */
  data?: boolean;
  /**
   * @example
   * xxxx
   */
  message?: string;
  /**
   * @example
   * EE338D98-9BD3-4413-B165
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
      data: 'boolean',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteOuterAccountResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteOuterAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteOuterAccountResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteQualityProjectRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
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

export class DeleteQualityProjectResponseBody extends $dara.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
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
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteQualityProjectResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteQualityProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteQualityProjectResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteQualityRuleRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  id?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteQualityRuleResponseBody extends $dara.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
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
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteQualityRuleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteQualityRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteQualityRuleResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSkillGroupRequest extends $dara.Model {
  /**
   * @example
   * 123456
   */
  outerGroupId?: string;
  /**
   * @example
   * 2
   */
  outerGroupType?: string;
  static names(): { [key: string]: string } {
    return {
      outerGroupId: 'OuterGroupId',
      outerGroupType: 'OuterGroupType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outerGroupId: 'string',
      outerGroupType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSkillGroupResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  /**
   * @example
   * true
   */
  data?: boolean;
  /**
   * @example
   * xxxx
   */
  message?: string;
  /**
   * @example
   * EE338D98-9BD3-4413-B165
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
      data: 'boolean',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSkillGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteSkillGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteSkillGroupResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecordDataRequest extends $dara.Model {
  /**
   * @example
   * 2235****
   */
  accountId?: string;
  /**
   * @example
   * BUC_TYPE
   */
  accountType?: string;
  /**
   * @example
   * 1004849****
   */
  acid?: string;
  ownerId?: number;
  /**
   * @example
   * aiccs
   */
  prodCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @example
   * 2
   */
  secLevel?: number;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      accountType: 'AccountType',
      acid: 'Acid',
      ownerId: 'OwnerId',
      prodCode: 'ProdCode',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      secLevel: 'SecLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      accountType: 'string',
      acid: 'string',
      ownerId: 'number',
      prodCode: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      secLevel: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecordDataResponseBody extends $dara.Model {
  /**
   * @example
   * 1004849****
   */
  acid?: string;
  /**
   * @example
   * 1212****
   */
  agentId?: string;
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * https://****
   */
  ossLink?: string;
  /**
   * @example
   * EE338D98-9BD3-4413-B165
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      acid: 'Acid',
      agentId: 'AgentId',
      code: 'Code',
      message: 'Message',
      ossLink: 'OssLink',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acid: 'string',
      agentId: 'string',
      code: 'string',
      message: 'string',
      ossLink: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecordDataResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRecordDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeRecordDataResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EditQualityProjectRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  analysisIds?: number[];
  /**
   * @remarks
   * This parameter is required.
   */
  channelTouchType?: number[];
  /**
   * @remarks
   * This parameter is required.
   */
  checkFreqType?: number;
  depList?: number[];
  groupList?: number[];
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  projectId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  projectName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  projectVersion?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  scopeType?: number;
  servicerList?: string[];
  timeRangeEnd?: string;
  timeRangeStart?: string;
  static names(): { [key: string]: string } {
    return {
      analysisIds: 'AnalysisIds',
      channelTouchType: 'ChannelTouchType',
      checkFreqType: 'CheckFreqType',
      depList: 'DepList',
      groupList: 'GroupList',
      instanceId: 'InstanceId',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      projectVersion: 'ProjectVersion',
      scopeType: 'ScopeType',
      servicerList: 'ServicerList',
      timeRangeEnd: 'TimeRangeEnd',
      timeRangeStart: 'TimeRangeStart',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysisIds: { 'type': 'array', 'itemType': 'number' },
      channelTouchType: { 'type': 'array', 'itemType': 'number' },
      checkFreqType: 'number',
      depList: { 'type': 'array', 'itemType': 'number' },
      groupList: { 'type': 'array', 'itemType': 'number' },
      instanceId: 'string',
      projectId: 'number',
      projectName: 'string',
      projectVersion: 'number',
      scopeType: 'number',
      servicerList: { 'type': 'array', 'itemType': 'string' },
      timeRangeEnd: 'string',
      timeRangeStart: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.analysisIds)) {
      $dara.Model.validateArray(this.analysisIds);
    }
    if(Array.isArray(this.channelTouchType)) {
      $dara.Model.validateArray(this.channelTouchType);
    }
    if(Array.isArray(this.depList)) {
      $dara.Model.validateArray(this.depList);
    }
    if(Array.isArray(this.groupList)) {
      $dara.Model.validateArray(this.groupList);
    }
    if(Array.isArray(this.servicerList)) {
      $dara.Model.validateArray(this.servicerList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EditQualityProjectResponseBody extends $dara.Model {
  code?: string;
  data?: EditQualityProjectResponseBodyData[];
  message?: string;
  requestId?: string;
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
      data: { 'type': 'array', 'itemType': EditQualityProjectResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EditQualityProjectResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EditQualityProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: EditQualityProjectResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EditQualityRuleRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  keyWords?: string[];
  /**
   * @remarks
   * This parameter is required.
   */
  matchType?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  qualityRuleId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  ruleTag?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      keyWords: 'KeyWords',
      matchType: 'MatchType',
      name: 'Name',
      qualityRuleId: 'QualityRuleId',
      ruleTag: 'RuleTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      keyWords: { 'type': 'array', 'itemType': 'string' },
      matchType: 'number',
      name: 'string',
      qualityRuleId: 'number',
      ruleTag: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.keyWords)) {
      $dara.Model.validateArray(this.keyWords);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EditQualityRuleResponseBody extends $dara.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EditQualityRuleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EditQualityRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: EditQualityRuleResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EditQualityRuleTagRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  analysisTypes?: EditQualityRuleTagRequestAnalysisTypes[];
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      analysisTypes: 'AnalysisTypes',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysisTypes: { 'type': 'array', 'itemType': EditQualityRuleTagRequestAnalysisTypes },
      instanceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.analysisTypes)) {
      $dara.Model.validateArray(this.analysisTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EditQualityRuleTagResponseBody extends $dara.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
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
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EditQualityRuleTagResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EditQualityRuleTagResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: EditQualityRuleTagResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EncryptPhoneNumRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre***
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 130****0000
   */
  phoneNum?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      phoneNum: 'PhoneNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      phoneNum: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EncryptPhoneNumResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: string;
  /**
   * @example
   * xxxx
   */
  message?: string;
  /**
   * @example
   * EE338D98-9BD3-4413-B165
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
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EncryptPhoneNumResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EncryptPhoneNumResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: EncryptPhoneNumResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FetchCallRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123@123.com
   */
  accountName?: string;
  /**
   * @example
   * 7719786
   */
  callId?: string;
  /**
   * @example
   * 46c1341e-2648-447a-9b11-70b6a298d94d
   */
  clientToken?: string;
  /**
   * @example
   * 7719788
   */
  connectionId?: string;
  /**
   * @example
   * 0
   */
  holdConnectionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  /**
   * @example
   * 7719787
   */
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      callId: 'CallId',
      clientToken: 'ClientToken',
      connectionId: 'ConnectionId',
      holdConnectionId: 'HoldConnectionId',
      instanceId: 'InstanceId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      callId: 'string',
      clientToken: 'string',
      connectionId: 'string',
      holdConnectionId: 'string',
      instanceId: 'string',
      jobId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FetchCallResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  /**
   * @example
   * xxxx
   */
  message?: string;
  /**
   * @example
   * EE338D98-9BD3-4413-B165
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
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FetchCallResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: FetchCallResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: FetchCallResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FinishHotlineServiceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123@****.com
   */
  accountName?: string;
  /**
   * @example
   * 46c1341e-2648-447a-9b11-70b6a298d94d
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      clientToken: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FinishHotlineServiceResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * EE338D98-9BD3-4413-B165
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
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FinishHotlineServiceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: FinishHotlineServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: FinishHotlineServiceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateWebSocketSignRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123@123.com
   */
  accountName?: string;
  /**
   * @example
   * 46c1341e-2648-447a-9b11-70b6a298d94d
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      clientToken: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateWebSocketSignResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  /**
   * @example
   * dnthF_oinHg7JMJDmKqex3UxDD7
   */
  data?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * EE338D98-9BD3-4413-B165
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
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateWebSocketSignResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GenerateWebSocketSignResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GenerateWebSocketSignResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123@123.com
   */
  accountName?: string;
  /**
   * @example
   * 46c1341e-2648-447a-9b11-70b6a298d94d
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      clientToken: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  data?: GetAgentResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * EE338D98-9BD3-4413-B165
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
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetAgentResponseBodyData,
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

export class GetAgentResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAgentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetAgentResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentBasisStatusRequest extends $dara.Model {
  agentIds?: number[];
  /**
   * @example
   * 1
   */
  currentPage?: number;
  depIds?: number[];
  /**
   * @example
   * 1617761765000
   */
  endDate?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 1615083365000
   */
  startDate?: number;
  static names(): { [key: string]: string } {
    return {
      agentIds: 'AgentIds',
      currentPage: 'CurrentPage',
      depIds: 'DepIds',
      endDate: 'EndDate',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentIds: { 'type': 'array', 'itemType': 'number' },
      currentPage: 'number',
      depIds: { 'type': 'array', 'itemType': 'number' },
      endDate: 'number',
      instanceId: 'string',
      pageSize: 'number',
      startDate: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.agentIds)) {
      $dara.Model.validateArray(this.agentIds);
    }
    if(Array.isArray(this.depIds)) {
      $dara.Model.validateArray(this.depIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentBasisStatusShrinkRequest extends $dara.Model {
  agentIdsShrink?: string;
  /**
   * @example
   * 1
   */
  currentPage?: number;
  depIdsShrink?: string;
  /**
   * @example
   * 1617761765000
   */
  endDate?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 1615083365000
   */
  startDate?: number;
  static names(): { [key: string]: string } {
    return {
      agentIdsShrink: 'AgentIds',
      currentPage: 'CurrentPage',
      depIdsShrink: 'DepIds',
      endDate: 'EndDate',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentIdsShrink: 'string',
      currentPage: 'number',
      depIdsShrink: 'string',
      endDate: 'number',
      instanceId: 'string',
      pageSize: 'number',
      startDate: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentBasisStatusResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: GetAgentBasisStatusResponseBodyData;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * EE338D98-9BD3-4413-B165
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: string;
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
      data: GetAgentBasisStatusResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
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

export class GetAgentBasisStatusResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAgentBasisStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetAgentBasisStatusResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentByIdRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  agentId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'number',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentByIdResponseBody extends $dara.Model {
  code?: string;
  data?: GetAgentByIdResponseBodyData;
  message?: string;
  requestId?: string;
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
      data: GetAgentByIdResponseBodyData,
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

export class GetAgentByIdResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAgentByIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetAgentByIdResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentDetailReportRequest extends $dara.Model {
  agentIds?: number[];
  /**
   * @example
   * 1
   */
  currentPage?: number;
  depIds?: number[];
  /**
   * @example
   * 1617761765000
   */
  endDate?: number;
  /**
   * @example
   * true/false
   */
  existAgentGrouping?: boolean;
  /**
   * @example
   * true/false
   */
  existDepartmentGrouping?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 1615083365000
   */
  startDate?: number;
  /**
   * @example
   * day
   */
  timeLatitudeType?: string;
  static names(): { [key: string]: string } {
    return {
      agentIds: 'AgentIds',
      currentPage: 'CurrentPage',
      depIds: 'DepIds',
      endDate: 'EndDate',
      existAgentGrouping: 'ExistAgentGrouping',
      existDepartmentGrouping: 'ExistDepartmentGrouping',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
      startDate: 'StartDate',
      timeLatitudeType: 'TimeLatitudeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentIds: { 'type': 'array', 'itemType': 'number' },
      currentPage: 'number',
      depIds: { 'type': 'array', 'itemType': 'number' },
      endDate: 'number',
      existAgentGrouping: 'boolean',
      existDepartmentGrouping: 'boolean',
      instanceId: 'string',
      pageSize: 'number',
      startDate: 'number',
      timeLatitudeType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.agentIds)) {
      $dara.Model.validateArray(this.agentIds);
    }
    if(Array.isArray(this.depIds)) {
      $dara.Model.validateArray(this.depIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentDetailReportShrinkRequest extends $dara.Model {
  agentIdsShrink?: string;
  /**
   * @example
   * 1
   */
  currentPage?: number;
  depIdsShrink?: string;
  /**
   * @example
   * 1617761765000
   */
  endDate?: number;
  /**
   * @example
   * true/false
   */
  existAgentGrouping?: boolean;
  /**
   * @example
   * true/false
   */
  existDepartmentGrouping?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 1615083365000
   */
  startDate?: number;
  /**
   * @example
   * day
   */
  timeLatitudeType?: string;
  static names(): { [key: string]: string } {
    return {
      agentIdsShrink: 'AgentIds',
      currentPage: 'CurrentPage',
      depIdsShrink: 'DepIds',
      endDate: 'EndDate',
      existAgentGrouping: 'ExistAgentGrouping',
      existDepartmentGrouping: 'ExistDepartmentGrouping',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
      startDate: 'StartDate',
      timeLatitudeType: 'TimeLatitudeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentIdsShrink: 'string',
      currentPage: 'number',
      depIdsShrink: 'string',
      endDate: 'number',
      existAgentGrouping: 'boolean',
      existDepartmentGrouping: 'boolean',
      instanceId: 'string',
      pageSize: 'number',
      startDate: 'number',
      timeLatitudeType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentDetailReportResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: GetAgentDetailReportResponseBodyData;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * EE338D98-9BD3-4413-B165
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: string;
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
      data: GetAgentDetailReportResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
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

export class GetAgentDetailReportResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAgentDetailReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetAgentDetailReportResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentIndexRealTimeRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  depIds?: number[];
  groupIds?: number[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      depIds: 'DepIds',
      groupIds: 'GroupIds',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      depIds: { 'type': 'array', 'itemType': 'number' },
      groupIds: { 'type': 'array', 'itemType': 'number' },
      instanceId: 'string',
      pageSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.depIds)) {
      $dara.Model.validateArray(this.depIds);
    }
    if(Array.isArray(this.groupIds)) {
      $dara.Model.validateArray(this.groupIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentIndexRealTimeResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: GetAgentIndexRealTimeResponseBodyData;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * EE338D98-9BD3-4413-B165
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
      data: GetAgentIndexRealTimeResponseBodyData,
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

export class GetAgentIndexRealTimeResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAgentIndexRealTimeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetAgentIndexRealTimeResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentServiceStatusRequest extends $dara.Model {
  agentIds?: number[];
  /**
   * @example
   * 1
   */
  currentPage?: number;
  depIds?: number[];
  /**
   * @example
   * 1617761765000
   */
  endDate?: number;
  /**
   * @example
   * true
   */
  existAgentGrouping?: boolean;
  /**
   * @example
   * true
   */
  existDepartmentGrouping?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 1615083365000
   */
  startDate?: number;
  /**
   * @example
   * minute
   */
  timeLatitudeType?: string;
  static names(): { [key: string]: string } {
    return {
      agentIds: 'AgentIds',
      currentPage: 'CurrentPage',
      depIds: 'DepIds',
      endDate: 'EndDate',
      existAgentGrouping: 'ExistAgentGrouping',
      existDepartmentGrouping: 'ExistDepartmentGrouping',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
      startDate: 'StartDate',
      timeLatitudeType: 'TimeLatitudeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentIds: { 'type': 'array', 'itemType': 'number' },
      currentPage: 'number',
      depIds: { 'type': 'array', 'itemType': 'number' },
      endDate: 'number',
      existAgentGrouping: 'boolean',
      existDepartmentGrouping: 'boolean',
      instanceId: 'string',
      pageSize: 'number',
      startDate: 'number',
      timeLatitudeType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.agentIds)) {
      $dara.Model.validateArray(this.agentIds);
    }
    if(Array.isArray(this.depIds)) {
      $dara.Model.validateArray(this.depIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentServiceStatusShrinkRequest extends $dara.Model {
  agentIdsShrink?: string;
  /**
   * @example
   * 1
   */
  currentPage?: number;
  depIdsShrink?: string;
  /**
   * @example
   * 1617761765000
   */
  endDate?: number;
  /**
   * @example
   * true
   */
  existAgentGrouping?: boolean;
  /**
   * @example
   * true
   */
  existDepartmentGrouping?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 1615083365000
   */
  startDate?: number;
  /**
   * @example
   * minute
   */
  timeLatitudeType?: string;
  static names(): { [key: string]: string } {
    return {
      agentIdsShrink: 'AgentIds',
      currentPage: 'CurrentPage',
      depIdsShrink: 'DepIds',
      endDate: 'EndDate',
      existAgentGrouping: 'ExistAgentGrouping',
      existDepartmentGrouping: 'ExistDepartmentGrouping',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
      startDate: 'StartDate',
      timeLatitudeType: 'TimeLatitudeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentIdsShrink: 'string',
      currentPage: 'number',
      depIdsShrink: 'string',
      endDate: 'number',
      existAgentGrouping: 'boolean',
      existDepartmentGrouping: 'boolean',
      instanceId: 'string',
      pageSize: 'number',
      startDate: 'number',
      timeLatitudeType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentServiceStatusResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: GetAgentServiceStatusResponseBodyData;
  /**
   * @example
   * xxxx
   */
  message?: string;
  /**
   * @example
   * EE338D98-9BD3-4413-B165
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
      data: GetAgentServiceStatusResponseBodyData,
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

export class GetAgentServiceStatusResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAgentServiceStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetAgentServiceStatusResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentStatisticsRequest extends $dara.Model {
  agentIds?: number[];
  /**
   * @example
   * 1
   */
  currentPage?: number;
  depIds?: number[];
  /**
   * @example
   * 1617761765000
   */
  endDate?: number;
  /**
   * @example
   * false
   */
  existAgentGrouping?: boolean;
  /**
   * @example
   * false
   */
  existDepartmentGrouping?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 1615083365000
   */
  startDate?: number;
  /**
   * @example
   * minute
   */
  timeLatitudeType?: string;
  static names(): { [key: string]: string } {
    return {
      agentIds: 'AgentIds',
      currentPage: 'CurrentPage',
      depIds: 'DepIds',
      endDate: 'EndDate',
      existAgentGrouping: 'ExistAgentGrouping',
      existDepartmentGrouping: 'ExistDepartmentGrouping',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
      startDate: 'StartDate',
      timeLatitudeType: 'TimeLatitudeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentIds: { 'type': 'array', 'itemType': 'number' },
      currentPage: 'number',
      depIds: { 'type': 'array', 'itemType': 'number' },
      endDate: 'number',
      existAgentGrouping: 'boolean',
      existDepartmentGrouping: 'boolean',
      instanceId: 'string',
      pageSize: 'number',
      startDate: 'number',
      timeLatitudeType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.agentIds)) {
      $dara.Model.validateArray(this.agentIds);
    }
    if(Array.isArray(this.depIds)) {
      $dara.Model.validateArray(this.depIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentStatisticsShrinkRequest extends $dara.Model {
  agentIdsShrink?: string;
  /**
   * @example
   * 1
   */
  currentPage?: number;
  depIdsShrink?: string;
  /**
   * @example
   * 1617761765000
   */
  endDate?: number;
  /**
   * @example
   * false
   */
  existAgentGrouping?: boolean;
  /**
   * @example
   * false
   */
  existDepartmentGrouping?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 1615083365000
   */
  startDate?: number;
  /**
   * @example
   * minute
   */
  timeLatitudeType?: string;
  static names(): { [key: string]: string } {
    return {
      agentIdsShrink: 'AgentIds',
      currentPage: 'CurrentPage',
      depIdsShrink: 'DepIds',
      endDate: 'EndDate',
      existAgentGrouping: 'ExistAgentGrouping',
      existDepartmentGrouping: 'ExistDepartmentGrouping',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
      startDate: 'StartDate',
      timeLatitudeType: 'TimeLatitudeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentIdsShrink: 'string',
      currentPage: 'number',
      depIdsShrink: 'string',
      endDate: 'number',
      existAgentGrouping: 'boolean',
      existDepartmentGrouping: 'boolean',
      instanceId: 'string',
      pageSize: 'number',
      startDate: 'number',
      timeLatitudeType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentStatisticsResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: GetAgentStatisticsResponseBodyData;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * EE338D98-9BD3-4413-B165
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: string;
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
      data: GetAgentStatisticsResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
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

export class GetAgentStatisticsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAgentStatisticsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetAgentStatisticsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAiOutboundTaskBizDataRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  channelId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * agent_***
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      channelId: 'ChannelId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelId: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAiOutboundTaskBizDataResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  data?: GetAiOutboundTaskBizDataResponseBodyData;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * EE338D98-9BD3-4413-B165
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
      data: GetAiOutboundTaskBizDataResponseBodyData,
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

export class GetAiOutboundTaskBizDataResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAiOutboundTaskBizDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetAiOutboundTaskBizDataResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAiOutboundTaskDetailRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * agent_***
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      taskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAiOutboundTaskDetailResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  data?: GetAiOutboundTaskDetailResponseBodyData;
  /**
   * @example
   * OK
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
      data: GetAiOutboundTaskDetailResponseBodyData,
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

export class GetAiOutboundTaskDetailResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAiOutboundTaskDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetAiOutboundTaskDetailResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAiOutboundTaskExecDetailRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  batchVersion?: number;
  /**
   * @example
   * 123456
   */
  caseId?: number;
  /**
   * @example
   * 1
   */
  caseStatus?: number;
  /**
   * @example
   * 1632290119000
   */
  createTimeEnd?: number;
  /**
   * @example
   * 1632289999000
   */
  createTimeStart?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * agent_***
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 150****000
   */
  phoneNum?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      batchVersion: 'BatchVersion',
      caseId: 'CaseId',
      caseStatus: 'CaseStatus',
      createTimeEnd: 'CreateTimeEnd',
      createTimeStart: 'CreateTimeStart',
      currentPage: 'CurrentPage',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
      phoneNum: 'PhoneNum',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchVersion: 'number',
      caseId: 'number',
      caseStatus: 'number',
      createTimeEnd: 'number',
      createTimeStart: 'number',
      currentPage: 'number',
      instanceId: 'string',
      pageSize: 'number',
      phoneNum: 'string',
      taskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAiOutboundTaskExecDetailResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  data?: GetAiOutboundTaskExecDetailResponseBodyData;
  /**
   * @example
   * OK
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
      data: GetAiOutboundTaskExecDetailResponseBodyData,
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

export class GetAiOutboundTaskExecDetailResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAiOutboundTaskExecDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetAiOutboundTaskExecDetailResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAiOutboundTaskListRequest extends $dara.Model {
  /**
   * @example
   * 1617761765000
   */
  createTimeEnd?: number;
  /**
   * @example
   * 1615083365000
   */
  createTimeStart?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * agent_****
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 1763****
   */
  searchKey?: string;
  /**
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      createTimeEnd: 'CreateTimeEnd',
      createTimeStart: 'CreateTimeStart',
      currentPage: 'CurrentPage',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
      searchKey: 'SearchKey',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTimeEnd: 'number',
      createTimeStart: 'number',
      currentPage: 'number',
      instanceId: 'string',
      pageSize: 'number',
      searchKey: 'string',
      status: 'number',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAiOutboundTaskListResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  data?: GetAiOutboundTaskListResponseBodyData;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * EE338D98-9BD3-4413-B165
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
      data: GetAiOutboundTaskListResponseBodyData,
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

export class GetAiOutboundTaskListResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAiOutboundTaskListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetAiOutboundTaskListResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAiOutboundTaskProgressRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  batchVersion?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * agent_***
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      batchVersion: 'BatchVersion',
      instanceId: 'InstanceId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchVersion: 'number',
      instanceId: 'string',
      taskId: 'number',
    };
  }

  validate() {
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

export class GetAiOutboundTaskProgressResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAiOutboundTaskProgressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetAiOutboundTaskProgressResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAllDepartmentRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAllDepartmentResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: GetAllDepartmentResponseBodyData[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 98B032F5-6473-4EAC-8BA8-C28993513A1F
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
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetAllDepartmentResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAllDepartmentResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAllDepartmentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetAllDepartmentResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCallSoundRecordRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 125165515022^11195613****
   */
  callId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2021-10-15 08:56:23
   */
  createTime?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      callId: 'CallId',
      createTime: 'CreateTime',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callId: 'string',
      createTime: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCallSoundRecordResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * http://aliccrec-shvpc.oss-cn-shanghai.aliyuncs.com/accrec_tmp/1001067****.wav
   */
  data?: string;
  /**
   * @example
   * OK
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
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCallSoundRecordResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetCallSoundRecordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetCallSoundRecordResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConfigNumListRequest extends $dara.Model {
  /**
   * @example
   * 123@123.com
   */
  accountName?: string;
  /**
   * @example
   * 12345
   */
  departmentId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      departmentId: 'DepartmentId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      departmentId: 'number',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConfigNumListResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  data?: string[];
  /**
   * @example
   * xxxx
   */
  message?: string;
  /**
   * @example
   * EE339D98-9BD3-4413-B165
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
      data: { 'type': 'array', 'itemType': 'string' },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConfigNumListResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetConfigNumListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetConfigNumListResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomerInfoRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 82345678****
   */
  memberId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      memberId: 'MemberId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      memberId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomerInfoResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: GetCustomerInfoResponseBodyData;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * DF6A3FB7-A5AA-43BE-A65B
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
      data: GetCustomerInfoResponseBodyData,
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

export class GetCustomerInfoResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetCustomerInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetCustomerInfoResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDepGroupTreeDataRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  agentId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'number',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDepGroupTreeDataResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  data?: GetDepGroupTreeDataResponseBodyData[];
  /**
   * @example
   * xxxx
   */
  message?: string;
  /**
   * @example
   * EE338D98-9BD3-4413-B165
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: string;
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
      data: { 'type': 'array', 'itemType': GetDepGroupTreeDataResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDepGroupTreeDataResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDepGroupTreeDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetDepGroupTreeDataResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDepartmentalLatitudeAgentStatusRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  depIds?: number[];
  /**
   * @example
   * 1617761765000
   */
  endDate?: number;
  /**
   * @example
   * true
   */
  existDepartmentGrouping?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 1615083365000
   */
  startDate?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      depIds: 'DepIds',
      endDate: 'EndDate',
      existDepartmentGrouping: 'ExistDepartmentGrouping',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      depIds: { 'type': 'array', 'itemType': 'number' },
      endDate: 'number',
      existDepartmentGrouping: 'boolean',
      instanceId: 'string',
      pageSize: 'number',
      startDate: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.depIds)) {
      $dara.Model.validateArray(this.depIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDepartmentalLatitudeAgentStatusShrinkRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  depIdsShrink?: string;
  /**
   * @example
   * 1617761765000
   */
  endDate?: number;
  /**
   * @example
   * true
   */
  existDepartmentGrouping?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 1615083365000
   */
  startDate?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      depIdsShrink: 'DepIds',
      endDate: 'EndDate',
      existDepartmentGrouping: 'ExistDepartmentGrouping',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      depIdsShrink: 'string',
      endDate: 'number',
      existDepartmentGrouping: 'boolean',
      instanceId: 'string',
      pageSize: 'number',
      startDate: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDepartmentalLatitudeAgentStatusResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: GetDepartmentalLatitudeAgentStatusResponseBodyData;
  /**
   * @example
   * message
   */
  message?: string;
  /**
   * @example
   * EE338D98-9BD3-4413-B165
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
      data: GetDepartmentalLatitudeAgentStatusResponseBodyData,
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

export class GetDepartmentalLatitudeAgentStatusResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDepartmentalLatitudeAgentStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetDepartmentalLatitudeAgentStatusResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineAgentDetailRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123@****.com
   */
  accountName?: string;
  /**
   * @example
   * 46c1341e-2648-447a-9b11-70b6a298d94d****
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      clientToken: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineAgentDetailResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  data?: GetHotlineAgentDetailResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * EE338D98-9BD3-4413-B165
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
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetHotlineAgentDetailResponseBodyData,
      httpStatusCode: 'number',
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

export class GetHotlineAgentDetailResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetHotlineAgentDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetHotlineAgentDetailResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineAgentDetailReportRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  depIds?: number[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1614824972
   */
  endDate?: number;
  groupIds?: number[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1614824872
   */
  startDate?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      depIds: 'DepIds',
      endDate: 'EndDate',
      groupIds: 'GroupIds',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      depIds: { 'type': 'array', 'itemType': 'number' },
      endDate: 'number',
      groupIds: { 'type': 'array', 'itemType': 'number' },
      instanceId: 'string',
      pageSize: 'number',
      startDate: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.depIds)) {
      $dara.Model.validateArray(this.depIds);
    }
    if(Array.isArray(this.groupIds)) {
      $dara.Model.validateArray(this.groupIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineAgentDetailReportResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  data?: GetHotlineAgentDetailReportResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * EE338D98-9BD3-4413-B165
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetHotlineAgentDetailReportResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'string',
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

export class GetHotlineAgentDetailReportResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetHotlineAgentDetailReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetHotlineAgentDetailReportResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineAgentStatusRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123@****.com
   */
  accountName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineAgentStatusResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  data?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * EE338D98-9BD3-4413-B165
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
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineAgentStatusResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetHotlineAgentStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetHotlineAgentStatusResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineCallActionRequest extends $dara.Model {
  /**
   * @example
   * {"time":1}
   */
  acc?: string;
  /**
   * @example
   * username@example.com
   */
  accountName?: string;
  /**
   * @example
   * 1
   */
  act?: number;
  /**
   * @example
   * {"name":123}
   */
  biz?: string;
  /**
   * @example
   * 46c1341e-2648-447a-9b11-70b6a298d9****
   */
  clientToken?: string;
  /**
   * @example
   * hotlinebs_out
   */
  fromSource?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      acc: 'Acc',
      accountName: 'AccountName',
      act: 'Act',
      biz: 'Biz',
      clientToken: 'ClientToken',
      fromSource: 'FromSource',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acc: 'string',
      accountName: 'string',
      act: 'number',
      biz: 'string',
      clientToken: 'string',
      fromSource: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineCallActionResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  data?: GetHotlineCallActionResponseBodyData;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * EE339D98-9BD3-4413-B165
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
      data: GetHotlineCallActionResponseBodyData,
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

export class GetHotlineCallActionResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetHotlineCallActionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetHotlineCallActionResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineGroupDetailReportRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  depIds?: number[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1614824972
   */
  endDate?: number;
  groupIds?: number[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1614824872
   */
  startDate?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      depIds: 'DepIds',
      endDate: 'EndDate',
      groupIds: 'GroupIds',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      depIds: { 'type': 'array', 'itemType': 'number' },
      endDate: 'number',
      groupIds: { 'type': 'array', 'itemType': 'number' },
      instanceId: 'string',
      pageSize: 'number',
      startDate: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.depIds)) {
      $dara.Model.validateArray(this.depIds);
    }
    if(Array.isArray(this.groupIds)) {
      $dara.Model.validateArray(this.groupIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineGroupDetailReportResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  data?: GetHotlineGroupDetailReportResponseBodyData;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * EE338D98-9BD3-4413-B165
   */
  requestId?: string;
  /**
   * @example
   * Public
   */
  success?: string;
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
      data: GetHotlineGroupDetailReportResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
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

export class GetHotlineGroupDetailReportResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetHotlineGroupDetailReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetHotlineGroupDetailReportResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineMessageLogRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 100****2077
   */
  acid?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      acid: 'Acid',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acid: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineMessageLogResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  data?: GetHotlineMessageLogResponseBodyData[];
  /**
   * @example
   * xxxx
   */
  message?: string;
  /**
   * @example
   * EE338D98-9BD3-4413-B165
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
      data: { 'type': 'array', 'itemType': GetHotlineMessageLogResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineMessageLogResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetHotlineMessageLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetHotlineMessageLogResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineRuntimeInfoRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123@****.com
   */
  accountName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineRuntimeInfoResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: { [key: string]: any };
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * EE338D98-9BD3-4413-B165
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
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data) {
      $dara.Model.validateMap(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineRuntimeInfoResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetHotlineRuntimeInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetHotlineRuntimeInfoResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineServiceStatisticsRequest extends $dara.Model {
  agentIds?: number[];
  /**
   * @example
   * 1
   */
  currentPage?: number;
  depIds?: number[];
  /**
   * @example
   * 1617761765000
   */
  endDate?: number;
  /**
   * @example
   * true
   */
  existAgentGrouping?: boolean;
  /**
   * @example
   * true
   */
  existDepartmentGrouping?: boolean;
  /**
   * @example
   * true
   */
  existSkillGroupGrouping?: boolean;
  groupIds?: number[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 1615083365000
   */
  startDate?: number;
  /**
   * @example
   * minute
   */
  timeLatitudeType?: string;
  static names(): { [key: string]: string } {
    return {
      agentIds: 'AgentIds',
      currentPage: 'CurrentPage',
      depIds: 'DepIds',
      endDate: 'EndDate',
      existAgentGrouping: 'ExistAgentGrouping',
      existDepartmentGrouping: 'ExistDepartmentGrouping',
      existSkillGroupGrouping: 'ExistSkillGroupGrouping',
      groupIds: 'GroupIds',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
      startDate: 'StartDate',
      timeLatitudeType: 'TimeLatitudeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentIds: { 'type': 'array', 'itemType': 'number' },
      currentPage: 'number',
      depIds: { 'type': 'array', 'itemType': 'number' },
      endDate: 'number',
      existAgentGrouping: 'boolean',
      existDepartmentGrouping: 'boolean',
      existSkillGroupGrouping: 'boolean',
      groupIds: { 'type': 'array', 'itemType': 'number' },
      instanceId: 'string',
      pageSize: 'number',
      startDate: 'number',
      timeLatitudeType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.agentIds)) {
      $dara.Model.validateArray(this.agentIds);
    }
    if(Array.isArray(this.depIds)) {
      $dara.Model.validateArray(this.depIds);
    }
    if(Array.isArray(this.groupIds)) {
      $dara.Model.validateArray(this.groupIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineServiceStatisticsShrinkRequest extends $dara.Model {
  agentIdsShrink?: string;
  /**
   * @example
   * 1
   */
  currentPage?: number;
  depIdsShrink?: string;
  /**
   * @example
   * 1617761765000
   */
  endDate?: number;
  /**
   * @example
   * true
   */
  existAgentGrouping?: boolean;
  /**
   * @example
   * true
   */
  existDepartmentGrouping?: boolean;
  /**
   * @example
   * true
   */
  existSkillGroupGrouping?: boolean;
  groupIdsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 1615083365000
   */
  startDate?: number;
  /**
   * @example
   * minute
   */
  timeLatitudeType?: string;
  static names(): { [key: string]: string } {
    return {
      agentIdsShrink: 'AgentIds',
      currentPage: 'CurrentPage',
      depIdsShrink: 'DepIds',
      endDate: 'EndDate',
      existAgentGrouping: 'ExistAgentGrouping',
      existDepartmentGrouping: 'ExistDepartmentGrouping',
      existSkillGroupGrouping: 'ExistSkillGroupGrouping',
      groupIdsShrink: 'GroupIds',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
      startDate: 'StartDate',
      timeLatitudeType: 'TimeLatitudeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentIdsShrink: 'string',
      currentPage: 'number',
      depIdsShrink: 'string',
      endDate: 'number',
      existAgentGrouping: 'boolean',
      existDepartmentGrouping: 'boolean',
      existSkillGroupGrouping: 'boolean',
      groupIdsShrink: 'string',
      instanceId: 'string',
      pageSize: 'number',
      startDate: 'number',
      timeLatitudeType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineServiceStatisticsResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: GetHotlineServiceStatisticsResponseBodyData;
  /**
   * @example
   * message
   */
  message?: string;
  /**
   * @example
   * EE338D98-9BD3-4413-B165
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: string;
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
      data: GetHotlineServiceStatisticsResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
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

export class GetHotlineServiceStatisticsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetHotlineServiceStatisticsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetHotlineServiceStatisticsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineWaitingNumberRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123@123.com
   */
  accountName?: string;
  /**
   * @example
   * 46c1341e-2648-447a-9b11-70b6a298d94d
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      clientToken: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineWaitingNumberResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  /**
   * @example
   * 2
   */
  data?: number;
  /**
   * @example
   * xxxx
   */
  message?: string;
  /**
   * @example
   * EE338D98-9BD3-4413-B165
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: string;
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
      data: 'number',
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineWaitingNumberResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetHotlineWaitingNumberResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetHotlineWaitingNumberResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIndexCurrentValueRequest extends $dara.Model {
  /**
   * @example
   * 2332****,2334****
   */
  depIds?: string;
  /**
   * @example
   * 2323****,2324****
   */
  groupIds?: string;
  /**
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      depIds: 'DepIds',
      groupIds: 'GroupIds',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      depIds: 'string',
      groupIds: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIndexCurrentValueResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: { [key: string]: any }[];
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * EE338D98-9BD3-4413-B165
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
      data: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIndexCurrentValueResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetIndexCurrentValueResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetIndexCurrentValueResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceListRequest extends $dara.Model {
  name?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceListResponseBody extends $dara.Model {
  code?: string;
  commodityInstances?: GetInstanceListResponseBodyCommodityInstances[];
  httpStatusCode?: number;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      commodityInstances: 'CommodityInstances',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      commodityInstances: { 'type': 'array', 'itemType': GetInstanceListResponseBodyCommodityInstances },
      httpStatusCode: 'number',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.commodityInstances)) {
      $dara.Model.validateArray(this.commodityInstances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceListResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetInstanceListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetInstanceListResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMcuLvsIpRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre***
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMcuLvsIpResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * { "xmculvs":[ 0:{ "port":00 "ip":"0.0.0.0" "name":"lvs1" } ]}
   */
  data?: string;
  /**
   * @example
   * xxxx
   */
  message?: string;
  /**
   * @example
   * EE338D98-9BD3-4413-B165
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
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMcuLvsIpResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetMcuLvsIpResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetMcuLvsIpResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNumLocationRequest extends $dara.Model {
  /**
   * @example
   * 46c1341e-2648-447a-9b11-70b6a298d94d
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1360987****
   */
  phoneNum?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      phoneNum: 'PhoneNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      phoneNum: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNumLocationResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  data?: string;
  /**
   * @example
   * xxxx
   */
  message?: string;
  /**
   * @example
   * EE338D98-9BD3-4413-B165
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
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNumLocationResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetNumLocationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetNumLocationResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOnlineSeatInformationRequest extends $dara.Model {
  agentIds?: number[];
  /**
   * @example
   * 1
   */
  currentPage?: number;
  depIds?: number[];
  /**
   * @example
   * 1617761765000
   */
  endDate?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 1615083365000
   */
  startDate?: number;
  static names(): { [key: string]: string } {
    return {
      agentIds: 'AgentIds',
      currentPage: 'CurrentPage',
      depIds: 'DepIds',
      endDate: 'EndDate',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentIds: { 'type': 'array', 'itemType': 'number' },
      currentPage: 'number',
      depIds: { 'type': 'array', 'itemType': 'number' },
      endDate: 'number',
      instanceId: 'string',
      pageSize: 'number',
      startDate: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.agentIds)) {
      $dara.Model.validateArray(this.agentIds);
    }
    if(Array.isArray(this.depIds)) {
      $dara.Model.validateArray(this.depIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOnlineSeatInformationShrinkRequest extends $dara.Model {
  agentIdsShrink?: string;
  /**
   * @example
   * 1
   */
  currentPage?: number;
  depIdsShrink?: string;
  /**
   * @example
   * 1617761765000
   */
  endDate?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 1615083365000
   */
  startDate?: number;
  static names(): { [key: string]: string } {
    return {
      agentIdsShrink: 'AgentIds',
      currentPage: 'CurrentPage',
      depIdsShrink: 'DepIds',
      endDate: 'EndDate',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentIdsShrink: 'string',
      currentPage: 'number',
      depIdsShrink: 'string',
      endDate: 'number',
      instanceId: 'string',
      pageSize: 'number',
      startDate: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOnlineSeatInformationResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: GetOnlineSeatInformationResponseBodyData;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * EE338D98-9BD3-4413-B165
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: string;
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
      data: GetOnlineSeatInformationResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
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

export class GetOnlineSeatInformationResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetOnlineSeatInformationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetOnlineSeatInformationResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOnlineServiceVolumeRequest extends $dara.Model {
  agentIds?: number[];
  /**
   * @example
   * 1
   */
  currentPage?: number;
  depIds?: number[];
  /**
   * @example
   * 1617761765000
   */
  endDate?: number;
  /**
   * @example
   * false
   */
  existAgentGrouping?: boolean;
  /**
   * @example
   * false
   */
  existDepartmentGrouping?: boolean;
  /**
   * @example
   * false
   */
  existSkillGroupGrouping?: boolean;
  groupIds?: number[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 1615083365000
   */
  startDate?: number;
  /**
   * @example
   * minute
   */
  timeLatitudeType?: string;
  static names(): { [key: string]: string } {
    return {
      agentIds: 'AgentIds',
      currentPage: 'CurrentPage',
      depIds: 'DepIds',
      endDate: 'EndDate',
      existAgentGrouping: 'ExistAgentGrouping',
      existDepartmentGrouping: 'ExistDepartmentGrouping',
      existSkillGroupGrouping: 'ExistSkillGroupGrouping',
      groupIds: 'GroupIds',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
      startDate: 'StartDate',
      timeLatitudeType: 'TimeLatitudeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentIds: { 'type': 'array', 'itemType': 'number' },
      currentPage: 'number',
      depIds: { 'type': 'array', 'itemType': 'number' },
      endDate: 'number',
      existAgentGrouping: 'boolean',
      existDepartmentGrouping: 'boolean',
      existSkillGroupGrouping: 'boolean',
      groupIds: { 'type': 'array', 'itemType': 'number' },
      instanceId: 'string',
      pageSize: 'number',
      startDate: 'number',
      timeLatitudeType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.agentIds)) {
      $dara.Model.validateArray(this.agentIds);
    }
    if(Array.isArray(this.depIds)) {
      $dara.Model.validateArray(this.depIds);
    }
    if(Array.isArray(this.groupIds)) {
      $dara.Model.validateArray(this.groupIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOnlineServiceVolumeShrinkRequest extends $dara.Model {
  agentIdsShrink?: string;
  /**
   * @example
   * 1
   */
  currentPage?: number;
  depIdsShrink?: string;
  /**
   * @example
   * 1617761765000
   */
  endDate?: number;
  /**
   * @example
   * false
   */
  existAgentGrouping?: boolean;
  /**
   * @example
   * false
   */
  existDepartmentGrouping?: boolean;
  /**
   * @example
   * false
   */
  existSkillGroupGrouping?: boolean;
  groupIdsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 1615083365000
   */
  startDate?: number;
  /**
   * @example
   * minute
   */
  timeLatitudeType?: string;
  static names(): { [key: string]: string } {
    return {
      agentIdsShrink: 'AgentIds',
      currentPage: 'CurrentPage',
      depIdsShrink: 'DepIds',
      endDate: 'EndDate',
      existAgentGrouping: 'ExistAgentGrouping',
      existDepartmentGrouping: 'ExistDepartmentGrouping',
      existSkillGroupGrouping: 'ExistSkillGroupGrouping',
      groupIdsShrink: 'GroupIds',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
      startDate: 'StartDate',
      timeLatitudeType: 'TimeLatitudeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentIdsShrink: 'string',
      currentPage: 'number',
      depIdsShrink: 'string',
      endDate: 'number',
      existAgentGrouping: 'boolean',
      existDepartmentGrouping: 'boolean',
      existSkillGroupGrouping: 'boolean',
      groupIdsShrink: 'string',
      instanceId: 'string',
      pageSize: 'number',
      startDate: 'number',
      timeLatitudeType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOnlineServiceVolumeResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: GetOnlineServiceVolumeResponseBodyData;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * EE338D98-9BD3-4413-B165
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: string;
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
      data: GetOnlineServiceVolumeResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
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

export class GetOnlineServiceVolumeResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetOnlineServiceVolumeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetOnlineServiceVolumeResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOutbounNumListRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123@****.com
   */
  accountName?: string;
  /**
   * @example
   * 46c1341e-2648-447a-9b11-70b6a298d****
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      clientToken: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOutbounNumListResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  data?: GetOutbounNumListResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * EE338D98-9BD3-4413-B165
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
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetOutbounNumListResponseBodyData,
      httpStatusCode: 'number',
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

export class GetOutbounNumListResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetOutbounNumListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetOutbounNumListResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityProjectDetailRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre***
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 15977801
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
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

export class GetQualityProjectDetailResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: GetQualityProjectDetailResponseBodyData;
  /**
   * @example
   * xxxx
   */
  message?: string;
  /**
   * @example
   * EE338D98-9BD3-4413-B165
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: string;
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
      data: GetQualityProjectDetailResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
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

export class GetQualityProjectDetailResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetQualityProjectDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetQualityProjectDetailResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityProjectListRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre***
   */
  instanceId?: string;
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 15
   */
  projectId?: number;
  projectName?: string;
  /**
   * @example
   * 0
   */
  status?: number;
  /**
   * @example
   * 1
   */
  checkFreqType?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      status: 'Status',
      checkFreqType: 'checkFreqType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageNo: 'number',
      pageSize: 'number',
      projectId: 'number',
      projectName: 'string',
      status: 'number',
      checkFreqType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityProjectListResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: GetQualityProjectListResponseBodyData;
  /**
   * @example
   * xxxx
   */
  message?: string;
  /**
   * @example
   * EE338D98-9BD3-4413-B165
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
      data: GetQualityProjectListResponseBodyData,
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

export class GetQualityProjectListResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetQualityProjectListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetQualityProjectListResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityProjectLogRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
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

export class GetQualityProjectLogResponseBody extends $dara.Model {
  code?: string;
  data?: GetQualityProjectLogResponseBodyData[];
  message?: string;
  requestId?: string;
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
      data: { 'type': 'array', 'itemType': GetQualityProjectLogResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityProjectLogResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetQualityProjectLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetQualityProjectLogResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityResultRequest extends $dara.Model {
  channelType?: string;
  groupIds?: number[];
  hitStatus?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  pageNo?: number;
  pageSize?: number;
  projectIds?: number[];
  qualityRuleIds?: number[];
  /**
   * @remarks
   * This parameter is required.
   */
  touchEndTime?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  touchStartTime?: string;
  static names(): { [key: string]: string } {
    return {
      channelType: 'ChannelType',
      groupIds: 'GroupIds',
      hitStatus: 'HitStatus',
      instanceId: 'InstanceId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      projectIds: 'ProjectIds',
      qualityRuleIds: 'QualityRuleIds',
      touchEndTime: 'TouchEndTime',
      touchStartTime: 'TouchStartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelType: 'string',
      groupIds: { 'type': 'array', 'itemType': 'number' },
      hitStatus: 'number',
      instanceId: 'string',
      pageNo: 'number',
      pageSize: 'number',
      projectIds: { 'type': 'array', 'itemType': 'number' },
      qualityRuleIds: { 'type': 'array', 'itemType': 'number' },
      touchEndTime: 'string',
      touchStartTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.groupIds)) {
      $dara.Model.validateArray(this.groupIds);
    }
    if(Array.isArray(this.projectIds)) {
      $dara.Model.validateArray(this.projectIds);
    }
    if(Array.isArray(this.qualityRuleIds)) {
      $dara.Model.validateArray(this.qualityRuleIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityResultResponseBody extends $dara.Model {
  channelTypeName?: string;
  code?: string;
  data?: GetQualityResultResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      channelTypeName: 'ChannelTypeName',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelTypeName: 'string',
      code: 'string',
      data: GetQualityResultResponseBodyData,
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

export class GetQualityResultResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetQualityResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetQualityResultResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityRuleDetailRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  qualityRuleId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      qualityRuleId: 'QualityRuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      qualityRuleId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityRuleDetailResponseBody extends $dara.Model {
  code?: string;
  data?: GetQualityRuleDetailResponseBodyData;
  message?: string;
  requestId?: string;
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
      data: GetQualityRuleDetailResponseBodyData,
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

export class GetQualityRuleDetailResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetQualityRuleDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetQualityRuleDetailResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityRuleListRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  pageNo?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageNo: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityRuleListResponseBody extends $dara.Model {
  code?: string;
  data?: GetQualityRuleListResponseBodyData;
  message?: string;
  requestId?: string;
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
      data: GetQualityRuleListResponseBodyData,
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

export class GetQualityRuleListResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetQualityRuleListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetQualityRuleListResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityRuleTagListRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityRuleTagListResponseBody extends $dara.Model {
  code?: string;
  data?: GetQualityRuleTagListResponseBodyData[];
  message?: string;
  requestId?: string;
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
      data: { 'type': 'array', 'itemType': GetQualityRuleTagListResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityRuleTagListResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetQualityRuleTagListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetQualityRuleTagListResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueueInformationRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  depIds?: number[];
  /**
   * @example
   * 1617761765000
   */
  endDate?: number;
  /**
   * @example
   * false
   */
  existDepartmentGrouping?: boolean;
  /**
   * @example
   * fasle
   */
  existSkillGroupGrouping?: boolean;
  groupIds?: number[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 1615083365000
   */
  startDate?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      depIds: 'DepIds',
      endDate: 'EndDate',
      existDepartmentGrouping: 'ExistDepartmentGrouping',
      existSkillGroupGrouping: 'ExistSkillGroupGrouping',
      groupIds: 'GroupIds',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      depIds: { 'type': 'array', 'itemType': 'number' },
      endDate: 'number',
      existDepartmentGrouping: 'boolean',
      existSkillGroupGrouping: 'boolean',
      groupIds: { 'type': 'array', 'itemType': 'number' },
      instanceId: 'string',
      pageSize: 'number',
      startDate: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.depIds)) {
      $dara.Model.validateArray(this.depIds);
    }
    if(Array.isArray(this.groupIds)) {
      $dara.Model.validateArray(this.groupIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueueInformationShrinkRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  depIdsShrink?: string;
  /**
   * @example
   * 1617761765000
   */
  endDate?: number;
  /**
   * @example
   * false
   */
  existDepartmentGrouping?: boolean;
  /**
   * @example
   * fasle
   */
  existSkillGroupGrouping?: boolean;
  groupIdsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 1615083365000
   */
  startDate?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      depIdsShrink: 'DepIds',
      endDate: 'EndDate',
      existDepartmentGrouping: 'ExistDepartmentGrouping',
      existSkillGroupGrouping: 'ExistSkillGroupGrouping',
      groupIdsShrink: 'GroupIds',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      depIdsShrink: 'string',
      endDate: 'number',
      existDepartmentGrouping: 'boolean',
      existSkillGroupGrouping: 'boolean',
      groupIdsShrink: 'string',
      instanceId: 'string',
      pageSize: 'number',
      startDate: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueueInformationResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: GetQueueInformationResponseBodyData;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * EE338D98-9BD3-4413-B165
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: string;
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
      data: GetQueueInformationResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
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

export class GetQueueInformationResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetQueueInformationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetQueueInformationResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRecordDataRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1001067****
   */
  acid?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      acid: 'Acid',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acid: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRecordDataResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: GetRecordDataResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * EE338D98-9BD3-4413-B165
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
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetRecordDataResponseBodyData,
      httpStatusCode: 'number',
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

export class GetRecordDataResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetRecordDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetRecordDataResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRecordUrlRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1001067****
   */
  acid?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-****
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * DUP_CALL
   */
  recordType?: string;
  static names(): { [key: string]: string } {
    return {
      acid: 'Acid',
      instanceId: 'InstanceId',
      recordType: 'RecordType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acid: 'string',
      instanceId: 'string',
      recordType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRecordUrlResponseBody extends $dara.Model {
  data?: GetRecordUrlResponseBodyData;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * EE338D98-9BD3-4413-B165
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetRecordUrlResponseBodyData,
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

export class GetRecordUrlResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetRecordUrlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetRecordUrlResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRtcTokenRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * username@example.com
   */
  accountName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * agent_***
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRtcTokenResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * {"cleansession":true,"clientId":"GID_VOIP@@@ClientId_2000000001271771_100685295007","conferenceTopic":"cs_alicom_voip_conference_pre","dataTopic":"alicom_voip_data_pre","host":"mqtt-cn-4590mdhb901.mqtt.aliyuncs.com","meetingEventKeepAliveInterval":0,"phoneTopic":"alicom_voip_phone","port":0,"reconnectTimeout":2000,"registerTime":0,"sdkClientPort":8883,"serverId":"GID_VOIP@@@MTEuMjIuMTQ1Ljgy","sgwServerTopic":"alicom_voip_server_pre","tlsport":443,"tokenData":"LzMT+XLFl5s/YWJ/MlDz4t/Lq5HC1iGU1P28HAMaxYzmBSHQsWXgdISJ1ZJ+2cxaU0jwYsoyG8Q8cCIbLZTwwaFHf7gc7pPXbJGYgJWUr5ooKsoHaVvvG34cww7W8woWE1OsmZGFDODvooOIjF1CZSorVrR8OwRdprW99yqhMhkJKh7r5f3HfiQgoJWL8b3A85RrRGCSP057skgQ5rIqVAlx7jDFrOTdLtz+krken8qYvpaVBO9wRfFyWQLvxAgNJNx3Oql/hpzc2o3+xbKGTA/P2siLn6Nee1FYk5ClpXcnvfSTM4BAauuWR+oES10VblKEKTU5R/pfjXj3UKOlZ1+OdGO93WA16BR/l1uRb3cOLqya5pjWM+oSmo0sOR7B0ATLz6K1xA0Pc+p6Mu8hZl+OdGO93WA1kj1L0h9Z6CAZG4ol/BNdIg9z6noy7yFmX450Y73dYDWSPUvSH1noIBkbiiX8E10iT0a6ypXxupQdyyrhh8j1yw6otqnw5AT5Tj5VsVWVfflXeZ8nPt1ydXC9nWeHX7K80O6vtOU9M8Qn5VrhkP0F1umbOoYs3NfM+WYZIQx4pkViQo6qqkxgbEg1l6oHJbmOVzrxYRrDTIxqgE/pb0YVJQ==","useTLS":false,"username":"LTAI27GqAW1VrcQA"}
   */
  data?: GetRtcTokenResponseBodyData;
  /**
   * @example
   * Successful
   */
  message?: string;
  /**
   * @example
   * EE338D98-9BD3-4413-B165
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
      data: GetRtcTokenResponseBodyData,
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

export class GetRtcTokenResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetRtcTokenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetRtcTokenResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSeatInformationRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  /**
   * @example
   * 1
   */
  currentPage?: number;
  depIds?: number[];
  /**
   * @example
   * 1617761765000
   */
  endDate?: number;
  /**
   * @example
   * true
   */
  existDepartmentGrouping?: boolean;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 1615083365000
   */
  startDate?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      currentPage: 'currentPage',
      depIds: 'depIds',
      endDate: 'endDate',
      existDepartmentGrouping: 'existDepartmentGrouping',
      pageSize: 'pageSize',
      startDate: 'startDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      currentPage: 'number',
      depIds: { 'type': 'array', 'itemType': 'number' },
      endDate: 'number',
      existDepartmentGrouping: 'boolean',
      pageSize: 'number',
      startDate: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.depIds)) {
      $dara.Model.validateArray(this.depIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSeatInformationShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  /**
   * @example
   * 1
   */
  currentPage?: number;
  depIdsShrink?: string;
  /**
   * @example
   * 1617761765000
   */
  endDate?: number;
  /**
   * @example
   * true
   */
  existDepartmentGrouping?: boolean;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 1615083365000
   */
  startDate?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      currentPage: 'currentPage',
      depIdsShrink: 'depIds',
      endDate: 'endDate',
      existDepartmentGrouping: 'existDepartmentGrouping',
      pageSize: 'pageSize',
      startDate: 'startDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      currentPage: 'number',
      depIdsShrink: 'string',
      endDate: 'number',
      existDepartmentGrouping: 'boolean',
      pageSize: 'number',
      startDate: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSeatInformationResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: GetSeatInformationResponseBodyData;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * EE338D98-9BD3-4413-B165
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: string;
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
      data: GetSeatInformationResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
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

export class GetSeatInformationResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSeatInformationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetSeatInformationResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillGroupAgentStatusDetailsRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  depIds?: number[];
  /**
   * @example
   * 1614824972
   */
  endDate?: number;
  /**
   * @example
   * true
   */
  existDepartmentGrouping?: boolean;
  /**
   * @example
   * true
   */
  existSkillGroupGrouping?: boolean;
  groupIds?: number[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 1614824872
   */
  startDate?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      depIds: 'DepIds',
      endDate: 'EndDate',
      existDepartmentGrouping: 'ExistDepartmentGrouping',
      existSkillGroupGrouping: 'ExistSkillGroupGrouping',
      groupIds: 'GroupIds',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      depIds: { 'type': 'array', 'itemType': 'number' },
      endDate: 'number',
      existDepartmentGrouping: 'boolean',
      existSkillGroupGrouping: 'boolean',
      groupIds: { 'type': 'array', 'itemType': 'number' },
      instanceId: 'string',
      pageSize: 'number',
      startDate: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.depIds)) {
      $dara.Model.validateArray(this.depIds);
    }
    if(Array.isArray(this.groupIds)) {
      $dara.Model.validateArray(this.groupIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillGroupAgentStatusDetailsShrinkRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  depIdsShrink?: string;
  /**
   * @example
   * 1614824972
   */
  endDate?: number;
  /**
   * @example
   * true
   */
  existDepartmentGrouping?: boolean;
  /**
   * @example
   * true
   */
  existSkillGroupGrouping?: boolean;
  groupIdsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 1614824872
   */
  startDate?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      depIdsShrink: 'DepIds',
      endDate: 'EndDate',
      existDepartmentGrouping: 'ExistDepartmentGrouping',
      existSkillGroupGrouping: 'ExistSkillGroupGrouping',
      groupIdsShrink: 'GroupIds',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      depIdsShrink: 'string',
      endDate: 'number',
      existDepartmentGrouping: 'boolean',
      existSkillGroupGrouping: 'boolean',
      groupIdsShrink: 'string',
      instanceId: 'string',
      pageSize: 'number',
      startDate: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillGroupAgentStatusDetailsResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: GetSkillGroupAgentStatusDetailsResponseBodyData;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * EE338D98-9BD3-4413-B165
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: string;
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
      data: GetSkillGroupAgentStatusDetailsResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
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

export class GetSkillGroupAgentStatusDetailsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSkillGroupAgentStatusDetailsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetSkillGroupAgentStatusDetailsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillGroupAndAgentStatusSummaryRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  depIds?: number[];
  /**
   * @example
   * 1617761765000
   */
  endDate?: number;
  /**
   * @example
   * false
   */
  existDepartmentGrouping?: boolean;
  /**
   * @example
   * false
   */
  existSkillGroupGrouping?: boolean;
  groupIds?: number[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 1615083365000
   */
  startDate?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      depIds: 'DepIds',
      endDate: 'EndDate',
      existDepartmentGrouping: 'ExistDepartmentGrouping',
      existSkillGroupGrouping: 'ExistSkillGroupGrouping',
      groupIds: 'GroupIds',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      depIds: { 'type': 'array', 'itemType': 'number' },
      endDate: 'number',
      existDepartmentGrouping: 'boolean',
      existSkillGroupGrouping: 'boolean',
      groupIds: { 'type': 'array', 'itemType': 'number' },
      instanceId: 'string',
      pageSize: 'number',
      startDate: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.depIds)) {
      $dara.Model.validateArray(this.depIds);
    }
    if(Array.isArray(this.groupIds)) {
      $dara.Model.validateArray(this.groupIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillGroupAndAgentStatusSummaryShrinkRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  depIdsShrink?: string;
  /**
   * @example
   * 1617761765000
   */
  endDate?: number;
  /**
   * @example
   * false
   */
  existDepartmentGrouping?: boolean;
  /**
   * @example
   * false
   */
  existSkillGroupGrouping?: boolean;
  groupIdsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 1615083365000
   */
  startDate?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      depIdsShrink: 'DepIds',
      endDate: 'EndDate',
      existDepartmentGrouping: 'ExistDepartmentGrouping',
      existSkillGroupGrouping: 'ExistSkillGroupGrouping',
      groupIdsShrink: 'GroupIds',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      depIdsShrink: 'string',
      endDate: 'number',
      existDepartmentGrouping: 'boolean',
      existSkillGroupGrouping: 'boolean',
      groupIdsShrink: 'string',
      instanceId: 'string',
      pageSize: 'number',
      startDate: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillGroupAndAgentStatusSummaryResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: GetSkillGroupAndAgentStatusSummaryResponseBodyData;
  /**
   * @example
   * message
   */
  message?: string;
  /**
   * @example
   * EE338D98-9BD3-4413-B165
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: string;
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
      data: GetSkillGroupAndAgentStatusSummaryResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
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

export class GetSkillGroupAndAgentStatusSummaryResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSkillGroupAndAgentStatusSummaryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetSkillGroupAndAgentStatusSummaryResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillGroupLatitudeStateRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  depIds?: number[];
  /**
   * @example
   * 1617761765000
   */
  endDate?: number;
  /**
   * @example
   * true
   */
  existDepartmentGrouping?: boolean;
  /**
   * @example
   * true
   */
  existSkillGroupGrouping?: boolean;
  groupIds?: number[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 1615083365000
   */
  startDate?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      depIds: 'DepIds',
      endDate: 'EndDate',
      existDepartmentGrouping: 'ExistDepartmentGrouping',
      existSkillGroupGrouping: 'ExistSkillGroupGrouping',
      groupIds: 'GroupIds',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      depIds: { 'type': 'array', 'itemType': 'number' },
      endDate: 'number',
      existDepartmentGrouping: 'boolean',
      existSkillGroupGrouping: 'boolean',
      groupIds: { 'type': 'array', 'itemType': 'number' },
      instanceId: 'string',
      pageSize: 'number',
      startDate: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.depIds)) {
      $dara.Model.validateArray(this.depIds);
    }
    if(Array.isArray(this.groupIds)) {
      $dara.Model.validateArray(this.groupIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillGroupLatitudeStateShrinkRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  depIdsShrink?: string;
  /**
   * @example
   * 1617761765000
   */
  endDate?: number;
  /**
   * @example
   * true
   */
  existDepartmentGrouping?: boolean;
  /**
   * @example
   * true
   */
  existSkillGroupGrouping?: boolean;
  groupIdsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 1615083365000
   */
  startDate?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      depIdsShrink: 'DepIds',
      endDate: 'EndDate',
      existDepartmentGrouping: 'ExistDepartmentGrouping',
      existSkillGroupGrouping: 'ExistSkillGroupGrouping',
      groupIdsShrink: 'GroupIds',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      depIdsShrink: 'string',
      endDate: 'number',
      existDepartmentGrouping: 'boolean',
      existSkillGroupGrouping: 'boolean',
      groupIdsShrink: 'string',
      instanceId: 'string',
      pageSize: 'number',
      startDate: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillGroupLatitudeStateResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: GetSkillGroupLatitudeStateResponseBodyData;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * EE338D98-9BD3-4413-B165
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: string;
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
      data: GetSkillGroupLatitudeStateResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
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

export class GetSkillGroupLatitudeStateResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSkillGroupLatitudeStateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetSkillGroupLatitudeStateResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillGroupServiceCapabilityRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  depIds?: number[];
  /**
   * @example
   * 1617761765000
   */
  endDate?: number;
  /**
   * @example
   * true
   */
  existDepartmentGrouping?: boolean;
  /**
   * @example
   * true
   */
  existSkillGroupGrouping?: boolean;
  groupIds?: number[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 1615083365000
   */
  startDate?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      depIds: 'DepIds',
      endDate: 'EndDate',
      existDepartmentGrouping: 'ExistDepartmentGrouping',
      existSkillGroupGrouping: 'ExistSkillGroupGrouping',
      groupIds: 'GroupIds',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      depIds: { 'type': 'array', 'itemType': 'number' },
      endDate: 'number',
      existDepartmentGrouping: 'boolean',
      existSkillGroupGrouping: 'boolean',
      groupIds: { 'type': 'array', 'itemType': 'number' },
      instanceId: 'string',
      pageSize: 'number',
      startDate: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.depIds)) {
      $dara.Model.validateArray(this.depIds);
    }
    if(Array.isArray(this.groupIds)) {
      $dara.Model.validateArray(this.groupIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillGroupServiceCapabilityShrinkRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  depIdsShrink?: string;
  /**
   * @example
   * 1617761765000
   */
  endDate?: number;
  /**
   * @example
   * true
   */
  existDepartmentGrouping?: boolean;
  /**
   * @example
   * true
   */
  existSkillGroupGrouping?: boolean;
  groupIdsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 1615083365000
   */
  startDate?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      depIdsShrink: 'DepIds',
      endDate: 'EndDate',
      existDepartmentGrouping: 'ExistDepartmentGrouping',
      existSkillGroupGrouping: 'ExistSkillGroupGrouping',
      groupIdsShrink: 'GroupIds',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      depIdsShrink: 'string',
      endDate: 'number',
      existDepartmentGrouping: 'boolean',
      existSkillGroupGrouping: 'boolean',
      groupIdsShrink: 'string',
      instanceId: 'string',
      pageSize: 'number',
      startDate: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillGroupServiceCapabilityResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: GetSkillGroupServiceCapabilityResponseBodyData;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * EE338D98-9BD3-4413-B165
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: string;
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
      data: GetSkillGroupServiceCapabilityResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
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

export class GetSkillGroupServiceCapabilityResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSkillGroupServiceCapabilityResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetSkillGroupServiceCapabilityResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillGroupServiceStatusRequest extends $dara.Model {
  agentIds?: number[];
  /**
   * @example
   * 1
   */
  currentPage?: number;
  depIds?: number[];
  /**
   * @example
   * 1617761765000
   */
  endDate?: number;
  /**
   * @example
   * false
   */
  existAgentGrouping?: boolean;
  /**
   * @example
   * false
   */
  existChannelInstanceGrouping?: boolean;
  /**
   * @example
   * false
   */
  existDepartmentGrouping?: boolean;
  /**
   * @example
   * false
   */
  existRobotInstanceGrouping?: boolean;
  /**
   * @example
   * false
   */
  existSkillGroupGrouping?: boolean;
  groupIds?: number[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 1615083365000
   */
  startDate?: number;
  /**
   * @example
   * minute
   */
  timeLatitudeType?: string;
  static names(): { [key: string]: string } {
    return {
      agentIds: 'AgentIds',
      currentPage: 'CurrentPage',
      depIds: 'DepIds',
      endDate: 'EndDate',
      existAgentGrouping: 'ExistAgentGrouping',
      existChannelInstanceGrouping: 'ExistChannelInstanceGrouping',
      existDepartmentGrouping: 'ExistDepartmentGrouping',
      existRobotInstanceGrouping: 'ExistRobotInstanceGrouping',
      existSkillGroupGrouping: 'ExistSkillGroupGrouping',
      groupIds: 'GroupIds',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
      startDate: 'StartDate',
      timeLatitudeType: 'TimeLatitudeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentIds: { 'type': 'array', 'itemType': 'number' },
      currentPage: 'number',
      depIds: { 'type': 'array', 'itemType': 'number' },
      endDate: 'number',
      existAgentGrouping: 'boolean',
      existChannelInstanceGrouping: 'boolean',
      existDepartmentGrouping: 'boolean',
      existRobotInstanceGrouping: 'boolean',
      existSkillGroupGrouping: 'boolean',
      groupIds: { 'type': 'array', 'itemType': 'number' },
      instanceId: 'string',
      pageSize: 'number',
      startDate: 'number',
      timeLatitudeType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.agentIds)) {
      $dara.Model.validateArray(this.agentIds);
    }
    if(Array.isArray(this.depIds)) {
      $dara.Model.validateArray(this.depIds);
    }
    if(Array.isArray(this.groupIds)) {
      $dara.Model.validateArray(this.groupIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillGroupServiceStatusShrinkRequest extends $dara.Model {
  agentIdsShrink?: string;
  /**
   * @example
   * 1
   */
  currentPage?: number;
  depIdsShrink?: string;
  /**
   * @example
   * 1617761765000
   */
  endDate?: number;
  /**
   * @example
   * false
   */
  existAgentGrouping?: boolean;
  /**
   * @example
   * false
   */
  existChannelInstanceGrouping?: boolean;
  /**
   * @example
   * false
   */
  existDepartmentGrouping?: boolean;
  /**
   * @example
   * false
   */
  existRobotInstanceGrouping?: boolean;
  /**
   * @example
   * false
   */
  existSkillGroupGrouping?: boolean;
  groupIdsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 1615083365000
   */
  startDate?: number;
  /**
   * @example
   * minute
   */
  timeLatitudeType?: string;
  static names(): { [key: string]: string } {
    return {
      agentIdsShrink: 'AgentIds',
      currentPage: 'CurrentPage',
      depIdsShrink: 'DepIds',
      endDate: 'EndDate',
      existAgentGrouping: 'ExistAgentGrouping',
      existChannelInstanceGrouping: 'ExistChannelInstanceGrouping',
      existDepartmentGrouping: 'ExistDepartmentGrouping',
      existRobotInstanceGrouping: 'ExistRobotInstanceGrouping',
      existSkillGroupGrouping: 'ExistSkillGroupGrouping',
      groupIdsShrink: 'GroupIds',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
      startDate: 'StartDate',
      timeLatitudeType: 'TimeLatitudeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentIdsShrink: 'string',
      currentPage: 'number',
      depIdsShrink: 'string',
      endDate: 'number',
      existAgentGrouping: 'boolean',
      existChannelInstanceGrouping: 'boolean',
      existDepartmentGrouping: 'boolean',
      existRobotInstanceGrouping: 'boolean',
      existSkillGroupGrouping: 'boolean',
      groupIdsShrink: 'string',
      instanceId: 'string',
      pageSize: 'number',
      startDate: 'number',
      timeLatitudeType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillGroupServiceStatusResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: GetSkillGroupServiceStatusResponseBodyData;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * EE338D98-9BD3-4413-B165
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: string;
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
      data: GetSkillGroupServiceStatusResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
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

export class GetSkillGroupServiceStatusResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSkillGroupServiceStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetSkillGroupServiceStatusResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillGroupStatusTotalRequest extends $dara.Model {
  agentIds?: number[];
  /**
   * @example
   * 1
   */
  currentPage?: number;
  depIds?: number[];
  /**
   * @example
   * 1617761765000
   */
  endDate?: number;
  /**
   * @example
   * false
   */
  existAgentGrouping?: boolean;
  /**
   * @example
   * fasle
   */
  existDepartmentGrouping?: boolean;
  /**
   * @example
   * fasle
   */
  existSkillGroupGrouping?: boolean;
  groupIds?: number[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 1615083365000
   */
  startDate?: number;
  /**
   * @example
   * minute
   */
  timeLatitudeType?: string;
  static names(): { [key: string]: string } {
    return {
      agentIds: 'AgentIds',
      currentPage: 'CurrentPage',
      depIds: 'DepIds',
      endDate: 'EndDate',
      existAgentGrouping: 'ExistAgentGrouping',
      existDepartmentGrouping: 'ExistDepartmentGrouping',
      existSkillGroupGrouping: 'ExistSkillGroupGrouping',
      groupIds: 'GroupIds',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
      startDate: 'StartDate',
      timeLatitudeType: 'TimeLatitudeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentIds: { 'type': 'array', 'itemType': 'number' },
      currentPage: 'number',
      depIds: { 'type': 'array', 'itemType': 'number' },
      endDate: 'number',
      existAgentGrouping: 'boolean',
      existDepartmentGrouping: 'boolean',
      existSkillGroupGrouping: 'boolean',
      groupIds: { 'type': 'array', 'itemType': 'number' },
      instanceId: 'string',
      pageSize: 'number',
      startDate: 'number',
      timeLatitudeType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.agentIds)) {
      $dara.Model.validateArray(this.agentIds);
    }
    if(Array.isArray(this.depIds)) {
      $dara.Model.validateArray(this.depIds);
    }
    if(Array.isArray(this.groupIds)) {
      $dara.Model.validateArray(this.groupIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillGroupStatusTotalShrinkRequest extends $dara.Model {
  agentIdsShrink?: string;
  /**
   * @example
   * 1
   */
  currentPage?: number;
  depIdsShrink?: string;
  /**
   * @example
   * 1617761765000
   */
  endDate?: number;
  /**
   * @example
   * false
   */
  existAgentGrouping?: boolean;
  /**
   * @example
   * fasle
   */
  existDepartmentGrouping?: boolean;
  /**
   * @example
   * fasle
   */
  existSkillGroupGrouping?: boolean;
  groupIdsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 1615083365000
   */
  startDate?: number;
  /**
   * @example
   * minute
   */
  timeLatitudeType?: string;
  static names(): { [key: string]: string } {
    return {
      agentIdsShrink: 'AgentIds',
      currentPage: 'CurrentPage',
      depIdsShrink: 'DepIds',
      endDate: 'EndDate',
      existAgentGrouping: 'ExistAgentGrouping',
      existDepartmentGrouping: 'ExistDepartmentGrouping',
      existSkillGroupGrouping: 'ExistSkillGroupGrouping',
      groupIdsShrink: 'GroupIds',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
      startDate: 'StartDate',
      timeLatitudeType: 'TimeLatitudeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentIdsShrink: 'string',
      currentPage: 'number',
      depIdsShrink: 'string',
      endDate: 'number',
      existAgentGrouping: 'boolean',
      existDepartmentGrouping: 'boolean',
      existSkillGroupGrouping: 'boolean',
      groupIdsShrink: 'string',
      instanceId: 'string',
      pageSize: 'number',
      startDate: 'number',
      timeLatitudeType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillGroupStatusTotalResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: GetSkillGroupStatusTotalResponseBodyData;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * EE338D98-9BD3-4413-B165
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: string;
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
      data: GetSkillGroupStatusTotalResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
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

export class GetSkillGroupStatusTotalResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSkillGroupStatusTotalResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetSkillGroupStatusTotalResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HangUpDoubleCallRequest extends $dara.Model {
  /**
   * @example
   * 68255155****
   */
  acid?: string;
  /**
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      acid: 'Acid',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acid: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HangUpDoubleCallResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * xxxx
   */
  message?: string;
  /**
   * @example
   * EE338D98-9BD3-4413-B165
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
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HangUpDoubleCallResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: HangUpDoubleCallResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: HangUpDoubleCallResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HangupCallRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123@123.com
   */
  accountName?: string;
  /**
   * @example
   * 7719786
   */
  callId?: string;
  /**
   * @example
   * 46c1341e-2648-447a-9b11-70b6a298d94d
   */
  clientToken?: string;
  /**
   * @example
   * 7719788
   */
  connectionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  /**
   * @example
   * 7719787
   */
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      callId: 'CallId',
      clientToken: 'ClientToken',
      connectionId: 'ConnectionId',
      instanceId: 'InstanceId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      callId: 'string',
      clientToken: 'string',
      connectionId: 'string',
      instanceId: 'string',
      jobId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HangupCallResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  /**
   * @example
   * xxxx
   */
  message?: string;
  /**
   * @example
   * EE338D98-9BD3-4413-B165
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
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HangupCallResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: HangupCallResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: HangupCallResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HangupOperateRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 147776727911^134522727911
   */
  callId?: string;
  /**
   * @example
   * true
   */
  immediateHangup?: boolean;
  static names(): { [key: string]: string } {
    return {
      callId: 'CallId',
      immediateHangup: 'ImmediateHangup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callId: 'string',
      immediateHangup: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HangupOperateResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * OK
   */
  mesage?: string;
  /**
   * @example
   * EFD543DD-E087-54A2-AC0B-54E0656511D7
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      mesage: 'Mesage',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      mesage: 'string',
      requestId: 'string',
      result: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HangupOperateResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: HangupOperateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: HangupOperateResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HangupThirdCallRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123@123.com
   */
  accountName?: string;
  /**
   * @example
   * 7719786
   */
  callId?: string;
  /**
   * @example
   * 46c1341e-2648-447a-9b11-70b6a298d94d
   */
  clientToken?: string;
  /**
   * @example
   * 7719788
   */
  connectionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  /**
   * @example
   * 7719787
   */
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      callId: 'CallId',
      clientToken: 'ClientToken',
      connectionId: 'ConnectionId',
      instanceId: 'InstanceId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      callId: 'string',
      clientToken: 'string',
      connectionId: 'string',
      instanceId: 'string',
      jobId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HangupThirdCallResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  /**
   * @example
   * xxxx
   */
  message?: string;
  /**
   * @example
   * EE338D98-9BD3-4413-B165
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
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HangupThirdCallResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: HangupThirdCallResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: HangupThirdCallResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HoldCallRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123@123.com
   */
  accountName?: string;
  /**
   * @example
   * 7719786
   */
  callId?: string;
  /**
   * @example
   * 46c1341e-2648-447a-9b11-70b6a298d94d
   */
  clientToken?: string;
  /**
   * @example
   * 7719788
   */
  connectionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  /**
   * @example
   * 7719787
   */
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      callId: 'CallId',
      clientToken: 'ClientToken',
      connectionId: 'ConnectionId',
      instanceId: 'InstanceId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      callId: 'string',
      clientToken: 'string',
      connectionId: 'string',
      instanceId: 'string',
      jobId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HoldCallResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  /**
   * @example
   * xxxx
   */
  message?: string;
  /**
   * @example
   * EE338D98-9BD3-4413-B165
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
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HoldCallResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: HoldCallResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: HoldCallResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotlineSessionQueryRequest extends $dara.Model {
  /**
   * @example
   * 7719786****
   */
  acid?: string;
  acidList?: string[];
  /**
   * @example
   * normal
   */
  callResult?: string;
  callResultList?: string[];
  /**
   * @example
   * 1
   */
  callType?: number;
  callTypeList?: number[];
  /**
   * @example
   * 135615****
   */
  calledNumber?: string;
  calledNumberList?: string[];
  /**
   * @example
   * 057177****
   */
  callingNumber?: string;
  callingNumberList?: string[];
  /**
   * @example
   * 123456
   */
  groupId?: number;
  groupIdList?: number[];
  groupName?: string;
  /**
   * @example
   * acc1c58dab4a4dd280e3813c66
   */
  id?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  /**
   * @example
   * 7856****
   */
  memberId?: string;
  memberIdList?: string[];
  memberName?: string;
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * xxxx
   */
  params?: string;
  /**
   * @example
   * 161482972
   */
  queryEndTime?: number;
  /**
   * @example
   * 161482872
   */
  queryStartTime?: number;
  /**
   * @example
   * EE338D98-9BD3-4413-B165
   */
  requestId?: string;
  /**
   * @example
   * 555555
   */
  servicerId?: string;
  servicerIdList?: string[];
  servicerName?: string;
  static names(): { [key: string]: string } {
    return {
      acid: 'Acid',
      acidList: 'AcidList',
      callResult: 'CallResult',
      callResultList: 'CallResultList',
      callType: 'CallType',
      callTypeList: 'CallTypeList',
      calledNumber: 'CalledNumber',
      calledNumberList: 'CalledNumberList',
      callingNumber: 'CallingNumber',
      callingNumberList: 'CallingNumberList',
      groupId: 'GroupId',
      groupIdList: 'GroupIdList',
      groupName: 'GroupName',
      id: 'Id',
      instanceId: 'InstanceId',
      memberId: 'MemberId',
      memberIdList: 'MemberIdList',
      memberName: 'MemberName',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      params: 'Params',
      queryEndTime: 'QueryEndTime',
      queryStartTime: 'QueryStartTime',
      requestId: 'RequestId',
      servicerId: 'ServicerId',
      servicerIdList: 'ServicerIdList',
      servicerName: 'ServicerName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acid: 'string',
      acidList: { 'type': 'array', 'itemType': 'string' },
      callResult: 'string',
      callResultList: { 'type': 'array', 'itemType': 'string' },
      callType: 'number',
      callTypeList: { 'type': 'array', 'itemType': 'number' },
      calledNumber: 'string',
      calledNumberList: { 'type': 'array', 'itemType': 'string' },
      callingNumber: 'string',
      callingNumberList: { 'type': 'array', 'itemType': 'string' },
      groupId: 'number',
      groupIdList: { 'type': 'array', 'itemType': 'number' },
      groupName: 'string',
      id: 'string',
      instanceId: 'string',
      memberId: 'string',
      memberIdList: { 'type': 'array', 'itemType': 'string' },
      memberName: 'string',
      pageNo: 'number',
      pageSize: 'number',
      params: 'string',
      queryEndTime: 'number',
      queryStartTime: 'number',
      requestId: 'string',
      servicerId: 'string',
      servicerIdList: { 'type': 'array', 'itemType': 'string' },
      servicerName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.acidList)) {
      $dara.Model.validateArray(this.acidList);
    }
    if(Array.isArray(this.callResultList)) {
      $dara.Model.validateArray(this.callResultList);
    }
    if(Array.isArray(this.callTypeList)) {
      $dara.Model.validateArray(this.callTypeList);
    }
    if(Array.isArray(this.calledNumberList)) {
      $dara.Model.validateArray(this.calledNumberList);
    }
    if(Array.isArray(this.callingNumberList)) {
      $dara.Model.validateArray(this.callingNumberList);
    }
    if(Array.isArray(this.groupIdList)) {
      $dara.Model.validateArray(this.groupIdList);
    }
    if(Array.isArray(this.memberIdList)) {
      $dara.Model.validateArray(this.memberIdList);
    }
    if(Array.isArray(this.servicerIdList)) {
      $dara.Model.validateArray(this.servicerIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotlineSessionQueryResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  data?: HotlineSessionQueryResponseBodyData;
  /**
   * @example
   * xxxx
   */
  message?: string;
  /**
   * @example
   * EE339D98-9BD3-4413-B165
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
      data: HotlineSessionQueryResponseBodyData,
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

export class HotlineSessionQueryResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: HotlineSessionQueryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: HotlineSessionQueryResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertAiOutboundPhoneNumsRequest extends $dara.Model {
  /**
   * @example
   * 2
   */
  batchVersion?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  details?: InsertAiOutboundPhoneNumsRequestDetails[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * agent_***
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      batchVersion: 'BatchVersion',
      details: 'Details',
      instanceId: 'InstanceId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchVersion: 'number',
      details: { 'type': 'array', 'itemType': InsertAiOutboundPhoneNumsRequestDetails },
      instanceId: 'string',
      taskId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.details)) {
      $dara.Model.validateArray(this.details);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertAiOutboundPhoneNumsShrinkRequest extends $dara.Model {
  /**
   * @example
   * 2
   */
  batchVersion?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  detailsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * agent_***
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      batchVersion: 'BatchVersion',
      detailsShrink: 'Details',
      instanceId: 'InstanceId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchVersion: 'number',
      detailsShrink: 'string',
      instanceId: 'string',
      taskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertAiOutboundPhoneNumsResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  data?: InsertAiOutboundPhoneNumsResponseBodyData;
  /**
   * @example
   * OK
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
      data: InsertAiOutboundPhoneNumsResponseBodyData,
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

export class InsertAiOutboundPhoneNumsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: InsertAiOutboundPhoneNumsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: InsertAiOutboundPhoneNumsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertTaskDetailRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  callInfos?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  outboundTaskId?: number;
  static names(): { [key: string]: string } {
    return {
      callInfos: 'CallInfos',
      instanceId: 'InstanceId',
      outboundTaskId: 'OutboundTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callInfos: 'string',
      instanceId: 'string',
      outboundTaskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertTaskDetailResponseBody extends $dara.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
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
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertTaskDetailResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: InsertTaskDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: InsertTaskDetailResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JoinThirdCallRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123@123.com
   */
  accountName?: string;
  /**
   * @example
   * 7719786
   */
  callId?: string;
  /**
   * @example
   * 46c1341e-2648-447a-9b11-70b6a298d94d
   */
  clientToken?: string;
  /**
   * @example
   * 7719788
   */
  connectionId?: string;
  /**
   * @example
   * 0
   */
  holdConnectionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  /**
   * @example
   * 7719787
   */
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      callId: 'CallId',
      clientToken: 'ClientToken',
      connectionId: 'ConnectionId',
      holdConnectionId: 'HoldConnectionId',
      instanceId: 'InstanceId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      callId: 'string',
      clientToken: 'string',
      connectionId: 'string',
      holdConnectionId: 'string',
      instanceId: 'string',
      jobId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JoinThirdCallResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  /**
   * @example
   * xxxx
   */
  message?: string;
  /**
   * @example
   * EE338D98-9BD3-4413-B165
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
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JoinThirdCallResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: JoinThirdCallResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: JoinThirdCallResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentBySkillGroupIdRequest extends $dara.Model {
  /**
   * @example
   * 46c1341e-2648-447a-9b11-70b6a298d94d
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 666666
   */
  skillGroupId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      skillGroupId: 'SkillGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      skillGroupId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentBySkillGroupIdResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  data?: ListAgentBySkillGroupIdResponseBodyData[];
  /**
   * @example
   * xxxx
   */
  message?: string;
  /**
   * @example
   * EE338D98-9BD3-4413-B165
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
      data: { 'type': 'array', 'itemType': ListAgentBySkillGroupIdResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentBySkillGroupIdResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAgentBySkillGroupIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListAgentBySkillGroupIdResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAiccsRobotRequest extends $dara.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  robotName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      robotName: 'RobotName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      robotName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAiccsRobotResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  data?: ListAiccsRobotResponseBodyData[];
  /**
   * @example
   * successful
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
      data: { 'type': 'array', 'itemType': ListAiccsRobotResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAiccsRobotResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAiccsRobotResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListAiccsRobotResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChatRecordDetailRequest extends $dara.Model {
  /**
   * @example
   * 46c1341e-2648-447a-9b11-70b6a298d94d
   */
  clientToken?: string;
  /**
   * @example
   * 1614582000000
   */
  closeTimeEnd?: number;
  /**
   * @example
   * 1614578400000
   */
  closeTimeStart?: number;
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre***
   */
  instanceId?: string;
  /**
   * @example
   * 100
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      closeTimeEnd: 'CloseTimeEnd',
      closeTimeStart: 'CloseTimeStart',
      currentPage: 'CurrentPage',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      closeTimeEnd: 'number',
      closeTimeStart: 'number',
      currentPage: 'number',
      instanceId: 'string',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChatRecordDetailResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * xxxx
   */
  message?: string;
  /**
   * @example
   * EE338D98-9BD3-4413-B165
   */
  requestId?: string;
  resultData?: ListChatRecordDetailResponseBodyResultData;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      resultData: 'ResultData',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      resultData: ListChatRecordDetailResponseBodyResultData,
      success: 'boolean',
    };
  }

  validate() {
    if(this.resultData && typeof (this.resultData as any).validate === 'function') {
      (this.resultData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChatRecordDetailResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListChatRecordDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListChatRecordDetailResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDialogRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 130****0000
   */
  called?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      called: 'Called',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      called: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      taskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDialogResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  data?: ListDialogResponseBodyData[];
  /**
   * @example
   * OK
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
      data: { 'type': 'array', 'itemType': ListDialogResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDialogResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDialogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListDialogResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotlineRecordRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 100365558
   */
  callId?: string;
  /**
   * @example
   * 46c1341e-2648-447a-9b11-70b6a298d94d
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      callId: 'CallId',
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callId: 'string',
      clientToken: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotlineRecordResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  data?: ListHotlineRecordResponseBodyData[];
  /**
   * @example
   * xxxx
   */
  message?: string;
  /**
   * @example
   * EE338D98-9BD3-4413-B165
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
      data: { 'type': 'array', 'itemType': ListHotlineRecordResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotlineRecordResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListHotlineRecordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListHotlineRecordResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotlineRecordDetailRequest extends $dara.Model {
  /**
   * @example
   * 46c1341e-2648-447a-9b11-70b6a298d94d
   */
  clientToken?: string;
  /**
   * @example
   * 1614582000000
   */
  closeTimeEnd?: number;
  /**
   * @example
   * 1614578400000
   */
  closeTimeStart?: number;
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre***
   */
  instanceId?: string;
  /**
   * @example
   * 100
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      closeTimeEnd: 'CloseTimeEnd',
      closeTimeStart: 'CloseTimeStart',
      currentPage: 'CurrentPage',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      closeTimeEnd: 'number',
      closeTimeStart: 'number',
      currentPage: 'number',
      instanceId: 'string',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotlineRecordDetailResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * xxxx
   */
  message?: string;
  /**
   * @example
   * EE338D98-9BD3-4413-B165
   */
  requestId?: string;
  resultData?: ListHotlineRecordDetailResponseBodyResultData;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      resultData: 'ResultData',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      resultData: ListHotlineRecordDetailResponseBodyResultData,
      success: 'boolean',
    };
  }

  validate() {
    if(this.resultData && typeof (this.resultData as any).validate === 'function') {
      (this.resultData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotlineRecordDetailResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListHotlineRecordDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListHotlineRecordDetailResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOutboundPhoneNumberRequest extends $dara.Model {
  /**
   * @example
   * 123@****.com
   */
  accountName?: string;
  /**
   * @example
   * 46c1341e-2648-447a-9b11-70b6a298d****
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      clientToken: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOutboundPhoneNumberResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  data?: string[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * EE338D98-9BD3-4413-B165
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
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': 'string' },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOutboundPhoneNumberResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListOutboundPhoneNumberResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListOutboundPhoneNumberResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRobotCallDialogRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 125165515022^11195613****
   */
  callId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2021-05-20 00:00:00
   */
  createTime?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      callId: 'CallId',
      createTime: 'CreateTime',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callId: 'string',
      createTime: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRobotCallDialogResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  data?: ListRobotCallDialogResponseBodyData[];
  /**
   * @example
   * OK
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
      data: { 'type': 'array', 'itemType': ListRobotCallDialogResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRobotCallDialogResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListRobotCallDialogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListRobotCallDialogResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRobotNodeRequest extends $dara.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 100002674****
   */
  robotId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      robotId: 'RobotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      robotId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRobotNodeResponseBody extends $dara.Model {
  /**
   * @example
   * Ok
   */
  code?: string;
  data?: ListRobotNodeResponseBodyData[];
  /**
   * @example
   * Ok
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
      data: { 'type': 'array', 'itemType': ListRobotNodeResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRobotNodeResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListRobotNodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListRobotNodeResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRobotParamsRequest extends $dara.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  robotId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      robotId: 'RobotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      robotId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRobotParamsResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: ListRobotParamsResponseBodyData[];
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * FF67D4D5-4E90-1DF5-BB8F-060BBFAD72DB
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
      data: { 'type': 'array', 'itemType': ListRobotParamsResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRobotParamsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListRobotParamsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListRobotParamsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRolesRequest extends $dara.Model {
  /**
   * @example
   * 46c1341e-2648-447a-9b11-70b6a298d94d
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRolesResponseBody extends $dara.Model {
  data?: ListRolesResponseBodyData[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * xxxx
   */
  message?: string;
  /**
   * @example
   * EE338D98-9BD3-4413-B165
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListRolesResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRolesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListRolesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListRolesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupRequest extends $dara.Model {
  /**
   * @example
   * 2
   */
  channelType?: number;
  /**
   * @example
   * 46c1341e-2648-447a-9b11-70b6a298d94d
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      channelType: 'ChannelType',
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelType: 'number',
      clientToken: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  data?: ListSkillGroupResponseBodyData[];
  /**
   * @example
   * xxxx
   */
  message?: string;
  /**
   * @example
   * EE338D98-9BD3-4413-B165
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
      data: { 'type': 'array', 'itemType': ListSkillGroupResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListSkillGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListSkillGroupResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskRequest extends $dara.Model {
  ownerId?: number;
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  robotName?: string;
  /**
   * @example
   * STOP
   */
  status?: string;
  taskId?: number;
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      robotName: 'RobotName',
      status: 'Status',
      taskId: 'TaskId',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      pageNo: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      robotName: 'string',
      status: 'string',
      taskId: 'number',
      taskName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  data?: ListTaskResponseBodyData;
  /**
   * @example
   * OK
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
      data: ListTaskResponseBodyData,
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

export class ListTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListTaskResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskDetailRequest extends $dara.Model {
  /**
   * @example
   * 186****0000
   */
  called?: string;
  /**
   * @example
   * 123456
   */
  id?: number;
  ownerId?: number;
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @example
   * SUCCESS
   */
  status?: string;
  /**
   * @example
   * 000001
   */
  statusCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      called: 'Called',
      id: 'Id',
      ownerId: 'OwnerId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      status: 'Status',
      statusCode: 'StatusCode',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      called: 'string',
      id: 'number',
      ownerId: 'number',
      pageNo: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      status: 'string',
      statusCode: 'string',
      taskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskDetailResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  data?: ListTaskDetailResponseBodyData;
  /**
   * @example
   * Ok
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
      data: ListTaskDetailResponseBodyData,
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

export class ListTaskDetailResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTaskDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListTaskDetailResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LlmSmartCallRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * F32XXX2CF9
   */
  applicationCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 137****0000
   */
  calledNumber?: string;
  /**
   * @example
   * 057188040000
   */
  callerNumber?: string;
  /**
   * @example
   * 222356****
   */
  outId?: string;
  promptParam?: { [key: string]: any };
  startWordParam?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      applicationCode: 'ApplicationCode',
      calledNumber: 'CalledNumber',
      callerNumber: 'CallerNumber',
      outId: 'OutId',
      promptParam: 'PromptParam',
      startWordParam: 'StartWordParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationCode: 'string',
      calledNumber: 'string',
      callerNumber: 'string',
      outId: 'string',
      promptParam: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      startWordParam: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.promptParam) {
      $dara.Model.validateMap(this.promptParam);
    }
    if(this.startWordParam) {
      $dara.Model.validateMap(this.startWordParam);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LlmSmartCallShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * F32XXX2CF9
   */
  applicationCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 137****0000
   */
  calledNumber?: string;
  /**
   * @example
   * 057188040000
   */
  callerNumber?: string;
  /**
   * @example
   * 222356****
   */
  outId?: string;
  promptParamShrink?: string;
  startWordParamShrink?: string;
  static names(): { [key: string]: string } {
    return {
      applicationCode: 'ApplicationCode',
      calledNumber: 'CalledNumber',
      callerNumber: 'CallerNumber',
      outId: 'OutId',
      promptParamShrink: 'PromptParam',
      startWordParamShrink: 'StartWordParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationCode: 'string',
      calledNumber: 'string',
      callerNumber: 'string',
      outId: 'string',
      promptParamShrink: 'string',
      startWordParamShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LlmSmartCallResponseBody extends $dara.Model {
  /**
   * @example
   * 125165515***^11195613****
   */
  callId?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * EE338D98-9BD3-XX13-B165
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      callId: 'CallId',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callId: 'string',
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LlmSmartCallResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: LlmSmartCallResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: LlmSmartCallResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LlmSmartCallEncryptRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ADDFA32145
   */
  applicationCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ADDFA32145
   */
  callerNumber?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 140432432432243
   */
  encryptCalledNumber?: string;
  /**
   * @example
   * dsadsaasfdsad
   */
  outId?: string;
  ownerId?: number;
  /**
   * @example
   * {}
   */
  promptParam?: { [key: string]: any };
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  startWordParam?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      applicationCode: 'ApplicationCode',
      callerNumber: 'CallerNumber',
      encryptCalledNumber: 'EncryptCalledNumber',
      outId: 'OutId',
      ownerId: 'OwnerId',
      promptParam: 'PromptParam',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      startWordParam: 'StartWordParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationCode: 'string',
      callerNumber: 'string',
      encryptCalledNumber: 'string',
      outId: 'string',
      ownerId: 'number',
      promptParam: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      startWordParam: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.promptParam) {
      $dara.Model.validateMap(this.promptParam);
    }
    if(this.startWordParam) {
      $dara.Model.validateMap(this.startWordParam);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LlmSmartCallEncryptShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ADDFA32145
   */
  applicationCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ADDFA32145
   */
  callerNumber?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 140432432432243
   */
  encryptCalledNumber?: string;
  /**
   * @example
   * dsadsaasfdsad
   */
  outId?: string;
  ownerId?: number;
  /**
   * @example
   * {}
   */
  promptParamShrink?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  startWordParamShrink?: string;
  static names(): { [key: string]: string } {
    return {
      applicationCode: 'ApplicationCode',
      callerNumber: 'CallerNumber',
      encryptCalledNumber: 'EncryptCalledNumber',
      outId: 'OutId',
      ownerId: 'OwnerId',
      promptParamShrink: 'PromptParam',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      startWordParamShrink: 'StartWordParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationCode: 'string',
      callerNumber: 'string',
      encryptCalledNumber: 'string',
      outId: 'string',
      ownerId: 'number',
      promptParamShrink: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      startWordParamShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LlmSmartCallEncryptResponseBody extends $dara.Model {
  /**
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * ok
   */
  code?: string;
  data?: LlmSmartCallEncryptResponseBodyData;
  message?: string;
  /**
   * @example
   * F92F9749-105E-518F-8B08-CF16EF36A0E2
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: LlmSmartCallEncryptResponseBodyData,
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

export class LlmSmartCallEncryptResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: LlmSmartCallEncryptResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: LlmSmartCallEncryptResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MakeCallRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 130****0000
   */
  calledNumber?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0571456****
   */
  callingNumber?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * outBound_Call
   */
  commandCode?: string;
  /**
   * @example
   * {"bizId": 23323}
   */
  extInfo?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  outerAccountId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ALIPAY
   */
  outerAccountType?: string;
  static names(): { [key: string]: string } {
    return {
      calledNumber: 'CalledNumber',
      callingNumber: 'CallingNumber',
      commandCode: 'CommandCode',
      extInfo: 'ExtInfo',
      outerAccountId: 'OuterAccountId',
      outerAccountType: 'OuterAccountType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calledNumber: 'string',
      callingNumber: 'string',
      commandCode: 'string',
      extInfo: 'string',
      outerAccountId: 'string',
      outerAccountType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MakeCallResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * true
   */
  data?: string;
  /**
   * @example
   * xxxx
   */
  message?: string;
  /**
   * @example
   * EE338D98-9BD3-4413-B165
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
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MakeCallResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: MakeCallResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: MakeCallResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MakeDoubleCallRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  accountName?: string;
  /**
   * @example
   * {"bizId": 123456}
   */
  bizData?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * agent_***
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1502123****
   */
  memberPhone?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0571000****
   */
  outboundCallNumber?: string;
  /**
   * @example
   * 150****1234
   */
  servicerPhone?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      bizData: 'BizData',
      instanceId: 'InstanceId',
      memberPhone: 'MemberPhone',
      outboundCallNumber: 'OutboundCallNumber',
      servicerPhone: 'ServicerPhone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      bizData: 'string',
      instanceId: 'string',
      memberPhone: 'string',
      outboundCallNumber: 'string',
      servicerPhone: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MakeDoubleCallResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: MakeDoubleCallResponseBodyData;
  /**
   * @example
   * Successful
   */
  message?: string;
  /**
   * @example
   * EE338D98-9BD3-4413-B165
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
      data: MakeDoubleCallResponseBodyData,
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

export class MakeDoubleCallResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: MakeDoubleCallResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: MakeDoubleCallResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHotlineInQueueRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  outerGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * mybank
   */
  outerGroupType?: string;
  static names(): { [key: string]: string } {
    return {
      outerGroupId: 'OuterGroupId',
      outerGroupType: 'OuterGroupType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outerGroupId: 'string',
      outerGroupType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHotlineInQueueResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * {"n_online_now":10,"n_idle_now":3,"n_resttype_now":3,"n_acw_now":1}
   */
  data?: string;
  /**
   * @example
   * xxxx
   */
  message?: string;
  /**
   * @example
   * EE338D98-9BD3-4413-B165
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
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHotlineInQueueResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryHotlineInQueueResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryHotlineInQueueResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHotlineNumberRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 2256****
   */
  departmentId?: number;
  groupIds?: number[];
  /**
   * @example
   * 0571****2211
   */
  hotlineNumber?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      departmentId: 'DepartmentId',
      groupIds: 'GroupIds',
      hotlineNumber: 'HotlineNumber',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      departmentId: 'number',
      groupIds: { 'type': 'array', 'itemType': 'number' },
      hotlineNumber: 'string',
      instanceId: 'string',
      pageSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.groupIds)) {
      $dara.Model.validateArray(this.groupIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHotlineNumberShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 2256****
   */
  departmentId?: number;
  groupIdsShrink?: string;
  /**
   * @example
   * 0571****2211
   */
  hotlineNumber?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      departmentId: 'DepartmentId',
      groupIdsShrink: 'GroupIds',
      hotlineNumber: 'HotlineNumber',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      departmentId: 'number',
      groupIdsShrink: 'string',
      hotlineNumber: 'string',
      instanceId: 'string',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHotlineNumberResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  data?: QueryHotlineNumberResponseBodyData;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * EE339D98-9BD3-4413-B165
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
      data: QueryHotlineNumberResponseBodyData,
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

export class QueryHotlineNumberResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryHotlineNumberResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryHotlineNumberResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOutboundTaskRequest extends $dara.Model {
  ani?: string;
  currentPage?: number;
  departmentId?: string;
  endDate?: string;
  endTime?: string;
  groupName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  pageSize?: number;
  skillGroup?: number;
  startDate?: string;
  startTime?: string;
  status?: string;
  taskId?: number;
  taskName?: string;
  taskType?: number;
  static names(): { [key: string]: string } {
    return {
      ani: 'Ani',
      currentPage: 'CurrentPage',
      departmentId: 'DepartmentId',
      endDate: 'EndDate',
      endTime: 'EndTime',
      groupName: 'GroupName',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
      skillGroup: 'SkillGroup',
      startDate: 'StartDate',
      startTime: 'StartTime',
      status: 'Status',
      taskId: 'TaskId',
      taskName: 'TaskName',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ani: 'string',
      currentPage: 'number',
      departmentId: 'string',
      endDate: 'string',
      endTime: 'string',
      groupName: 'string',
      instanceId: 'string',
      pageSize: 'number',
      skillGroup: 'number',
      startDate: 'string',
      startTime: 'string',
      status: 'string',
      taskId: 'number',
      taskName: 'string',
      taskType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOutboundTaskResponseBody extends $dara.Model {
  code?: string;
  data?: QueryOutboundTaskResponseBodyData;
  httpStatusCode?: string;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryOutboundTaskResponseBodyData,
      httpStatusCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
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

export class QueryOutboundTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryOutboundTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryOutboundTaskResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySkillGroupsRequest extends $dara.Model {
  /**
   * @example
   * 2
   */
  channelType?: number;
  /**
   * @example
   * 46c1341e-2648-447a-9b11-70b6a298d94d
   */
  clientToken?: string;
  /**
   * @example
   * 1023****
   */
  departmentId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      channelType: 'ChannelType',
      clientToken: 'ClientToken',
      departmentId: 'DepartmentId',
      instanceId: 'InstanceId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelType: 'number',
      clientToken: 'string',
      departmentId: 'number',
      instanceId: 'string',
      pageNo: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySkillGroupsResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  data?: QuerySkillGroupsResponseBodyData[];
  /**
   * @example
   * 20
   */
  onePageSize?: number;
  /**
   * @example
   * EE338D98-9BD3-4413-B165
   */
  requestId?: string;
  /**
   * @example
   * 4
   */
  totalPage?: number;
  /**
   * @example
   * 76
   */
  totalResults?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      data: 'Data',
      onePageSize: 'OnePageSize',
      requestId: 'RequestId',
      totalPage: 'TotalPage',
      totalResults: 'TotalResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      data: { 'type': 'array', 'itemType': QuerySkillGroupsResponseBodyData },
      onePageSize: 'number',
      requestId: 'string',
      totalPage: 'number',
      totalResults: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySkillGroupsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QuerySkillGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QuerySkillGroupsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTaskDetailRequest extends $dara.Model {
  ani?: string;
  currentPage?: number;
  departmentIdList?: string;
  dnis?: string;
  endReasonList?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  outboundTaskId?: string;
  pageSize?: number;
  priorityList?: string;
  servicerId?: string;
  servicerName?: string;
  sid?: string;
  skillGroup?: string;
  statusList?: string;
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      ani: 'Ani',
      currentPage: 'CurrentPage',
      departmentIdList: 'DepartmentIdList',
      dnis: 'Dnis',
      endReasonList: 'EndReasonList',
      instanceId: 'InstanceId',
      outboundTaskId: 'OutboundTaskId',
      pageSize: 'PageSize',
      priorityList: 'PriorityList',
      servicerId: 'ServicerId',
      servicerName: 'ServicerName',
      sid: 'Sid',
      skillGroup: 'SkillGroup',
      statusList: 'StatusList',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ani: 'string',
      currentPage: 'number',
      departmentIdList: 'string',
      dnis: 'string',
      endReasonList: 'string',
      instanceId: 'string',
      outboundTaskId: 'string',
      pageSize: 'number',
      priorityList: 'string',
      servicerId: 'string',
      servicerName: 'string',
      sid: 'string',
      skillGroup: 'string',
      statusList: 'string',
      taskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTaskDetailResponseBody extends $dara.Model {
  code?: string;
  data?: QueryTaskDetailResponseBodyData;
  httpStatusCode?: string;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryTaskDetailResponseBodyData,
      httpStatusCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
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

export class QueryTaskDetailResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryTaskDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryTaskDetailResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTicketsRequest extends $dara.Model {
  /**
   * @example
   * 223468****
   */
  caseId?: number;
  /**
   * @example
   * 2
   */
  caseStatus?: number;
  /**
   * @example
   * 1223
   */
  caseType?: number;
  /**
   * @example
   * 02acfefd3fa14049826ac1a89e1xxxxx
   */
  channelId?: string;
  /**
   * @example
   * 1
   */
  channelType?: number;
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 123456
   */
  dealId?: number;
  extra?: { [key: string]: any };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 29506
   */
  srType?: number;
  /**
   * @example
   * 3
   */
  taskStatus?: number;
  /**
   * @example
   * 15030609
   */
  touchId?: number;
  static names(): { [key: string]: string } {
    return {
      caseId: 'CaseId',
      caseStatus: 'CaseStatus',
      caseType: 'CaseType',
      channelId: 'ChannelId',
      channelType: 'ChannelType',
      currentPage: 'CurrentPage',
      dealId: 'DealId',
      extra: 'Extra',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
      srType: 'SrType',
      taskStatus: 'TaskStatus',
      touchId: 'TouchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caseId: 'number',
      caseStatus: 'number',
      caseType: 'number',
      channelId: 'string',
      channelType: 'number',
      currentPage: 'number',
      dealId: 'number',
      extra: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      instanceId: 'string',
      pageSize: 'number',
      srType: 'number',
      taskStatus: 'number',
      touchId: 'number',
    };
  }

  validate() {
    if(this.extra) {
      $dara.Model.validateMap(this.extra);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTicketsShrinkRequest extends $dara.Model {
  /**
   * @example
   * 223468****
   */
  caseId?: number;
  /**
   * @example
   * 2
   */
  caseStatus?: number;
  /**
   * @example
   * 1223
   */
  caseType?: number;
  /**
   * @example
   * 02acfefd3fa14049826ac1a89e1xxxxx
   */
  channelId?: string;
  /**
   * @example
   * 1
   */
  channelType?: number;
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 123456
   */
  dealId?: number;
  extraShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 29506
   */
  srType?: number;
  /**
   * @example
   * 3
   */
  taskStatus?: number;
  /**
   * @example
   * 15030609
   */
  touchId?: number;
  static names(): { [key: string]: string } {
    return {
      caseId: 'CaseId',
      caseStatus: 'CaseStatus',
      caseType: 'CaseType',
      channelId: 'ChannelId',
      channelType: 'ChannelType',
      currentPage: 'CurrentPage',
      dealId: 'DealId',
      extraShrink: 'Extra',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
      srType: 'SrType',
      taskStatus: 'TaskStatus',
      touchId: 'TouchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caseId: 'number',
      caseStatus: 'number',
      caseType: 'number',
      channelId: 'string',
      channelType: 'number',
      currentPage: 'number',
      dealId: 'number',
      extraShrink: 'string',
      instanceId: 'string',
      pageSize: 'number',
      srType: 'number',
      taskStatus: 'number',
      touchId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTicketsResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * { "totalResults":1 "previousPage":1 "data":[ 0:{ "serviceType":1 "lastUrgeTime":0 "queueId":0 "sopCateId":252011 "totalUrgeMemo":"" "taskGmtModified":0 "departmentId":10 "groupId":0 "channelType":1 "questionInfo":"" "templateId":0 "deadLine":0 "srType":30701 "caseId":2000000001165962}
   */
  data?: string;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * EE338D98-9BD3-4413-B165
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
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTicketsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryTicketsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryTicketsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTouchListRequest extends $dara.Model {
  channelId?: string[];
  channelType?: number[];
  /**
   * @example
   * 1614600500000
   */
  closeTimeEnd?: number;
  /**
   * @example
   * 1614600400000
   */
  closeTimeStart?: number;
  /**
   * @example
   * 1
   */
  currentPage?: number;
  evaluationLevel?: number[];
  evaluationScore?: number[];
  evaluationStatus?: number[];
  /**
   * @example
   * 1614599400000
   */
  firstTimeEnd?: number;
  /**
   * @example
   * 1614596400000
   */
  firstTimeStart?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  memberId?: number[];
  memberName?: string[];
  /**
   * @example
   * 20
   */
  pageSize?: number;
  queueId?: number[];
  servicerId?: number[];
  servicerName?: string[];
  touchId?: number[];
  touchType?: number[];
  static names(): { [key: string]: string } {
    return {
      channelId: 'ChannelId',
      channelType: 'ChannelType',
      closeTimeEnd: 'CloseTimeEnd',
      closeTimeStart: 'CloseTimeStart',
      currentPage: 'CurrentPage',
      evaluationLevel: 'EvaluationLevel',
      evaluationScore: 'EvaluationScore',
      evaluationStatus: 'EvaluationStatus',
      firstTimeEnd: 'FirstTimeEnd',
      firstTimeStart: 'FirstTimeStart',
      instanceId: 'InstanceId',
      memberId: 'MemberId',
      memberName: 'MemberName',
      pageSize: 'PageSize',
      queueId: 'QueueId',
      servicerId: 'ServicerId',
      servicerName: 'ServicerName',
      touchId: 'TouchId',
      touchType: 'TouchType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelId: { 'type': 'array', 'itemType': 'string' },
      channelType: { 'type': 'array', 'itemType': 'number' },
      closeTimeEnd: 'number',
      closeTimeStart: 'number',
      currentPage: 'number',
      evaluationLevel: { 'type': 'array', 'itemType': 'number' },
      evaluationScore: { 'type': 'array', 'itemType': 'number' },
      evaluationStatus: { 'type': 'array', 'itemType': 'number' },
      firstTimeEnd: 'number',
      firstTimeStart: 'number',
      instanceId: 'string',
      memberId: { 'type': 'array', 'itemType': 'number' },
      memberName: { 'type': 'array', 'itemType': 'string' },
      pageSize: 'number',
      queueId: { 'type': 'array', 'itemType': 'number' },
      servicerId: { 'type': 'array', 'itemType': 'number' },
      servicerName: { 'type': 'array', 'itemType': 'string' },
      touchId: { 'type': 'array', 'itemType': 'number' },
      touchType: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.channelId)) {
      $dara.Model.validateArray(this.channelId);
    }
    if(Array.isArray(this.channelType)) {
      $dara.Model.validateArray(this.channelType);
    }
    if(Array.isArray(this.evaluationLevel)) {
      $dara.Model.validateArray(this.evaluationLevel);
    }
    if(Array.isArray(this.evaluationScore)) {
      $dara.Model.validateArray(this.evaluationScore);
    }
    if(Array.isArray(this.evaluationStatus)) {
      $dara.Model.validateArray(this.evaluationStatus);
    }
    if(Array.isArray(this.memberId)) {
      $dara.Model.validateArray(this.memberId);
    }
    if(Array.isArray(this.memberName)) {
      $dara.Model.validateArray(this.memberName);
    }
    if(Array.isArray(this.queueId)) {
      $dara.Model.validateArray(this.queueId);
    }
    if(Array.isArray(this.servicerId)) {
      $dara.Model.validateArray(this.servicerId);
    }
    if(Array.isArray(this.servicerName)) {
      $dara.Model.validateArray(this.servicerName);
    }
    if(Array.isArray(this.touchId)) {
      $dara.Model.validateArray(this.touchId);
    }
    if(Array.isArray(this.touchType)) {
      $dara.Model.validateArray(this.touchType);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTouchListResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * Success
   */
  message?: string;
  /**
   * @example
   * 865658FD-80DE-5D49-ABEB-F3CC9863F4F1
   */
  requestId?: string;
  resultData?: QueryTouchListResponseBodyResultData;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      resultData: 'ResultData',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      resultData: QueryTouchListResponseBodyResultData,
      success: 'boolean',
    };
  }

  validate() {
    if(this.resultData && typeof (this.resultData as any).validate === 'function') {
      (this.resultData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTouchListResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryTouchListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryTouchListResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveAgentFromSkillGroupRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  agentIds?: number[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * agent_***
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1146****
   */
  skillGroupId?: number;
  static names(): { [key: string]: string } {
    return {
      agentIds: 'AgentIds',
      instanceId: 'InstanceId',
      skillGroupId: 'SkillGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentIds: { 'type': 'array', 'itemType': 'number' },
      instanceId: 'string',
      skillGroupId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.agentIds)) {
      $dara.Model.validateArray(this.agentIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveAgentFromSkillGroupShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  agentIdsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * agent_***
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1146****
   */
  skillGroupId?: number;
  static names(): { [key: string]: string } {
    return {
      agentIdsShrink: 'AgentIds',
      instanceId: 'InstanceId',
      skillGroupId: 'SkillGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentIdsShrink: 'string',
      instanceId: 'string',
      skillGroupId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveAgentFromSkillGroupResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  data?: RemoveAgentFromSkillGroupResponseBodyData;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * EE338D98-9BD3-4413-B165
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
      data: RemoveAgentFromSkillGroupResponseBodyData,
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

export class RemoveAgentFromSkillGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RemoveAgentFromSkillGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RemoveAgentFromSkillGroupResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveSkillGroupRequest extends $dara.Model {
  /**
   * @example
   * 46c1341e-2648-447a-9b11-70b6a298d94d
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  skillGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      skillGroupId: 'SkillGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      skillGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveSkillGroupResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  /**
   * @example
   * xxxx
   */
  message?: string;
  /**
   * @example
   * EE338D98-9BD3-4413-B165
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
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveSkillGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RemoveSkillGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RemoveSkillGroupResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetHotlineNumberRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * desc
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  enableInbound?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  enableInboundEvaluation?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  enableOutbound?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  enableOutboundEvaluation?: boolean;
  /**
   * @example
   * 2
   */
  evaluationLevel?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0571********
   */
  hotlineNumber?: string;
  /**
   * @example
   * 123456
   */
  inboundFlowId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  outboundAllDepart?: boolean;
  outboundRangeList?: ResetHotlineNumberRequestOutboundRangeList[];
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      enableInbound: 'EnableInbound',
      enableInboundEvaluation: 'EnableInboundEvaluation',
      enableOutbound: 'EnableOutbound',
      enableOutboundEvaluation: 'EnableOutboundEvaluation',
      evaluationLevel: 'EvaluationLevel',
      hotlineNumber: 'HotlineNumber',
      inboundFlowId: 'InboundFlowId',
      instanceId: 'InstanceId',
      outboundAllDepart: 'OutboundAllDepart',
      outboundRangeList: 'OutboundRangeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      enableInbound: 'boolean',
      enableInboundEvaluation: 'boolean',
      enableOutbound: 'boolean',
      enableOutboundEvaluation: 'boolean',
      evaluationLevel: 'number',
      hotlineNumber: 'string',
      inboundFlowId: 'number',
      instanceId: 'string',
      outboundAllDepart: 'boolean',
      outboundRangeList: { 'type': 'array', 'itemType': ResetHotlineNumberRequestOutboundRangeList },
    };
  }

  validate() {
    if(Array.isArray(this.outboundRangeList)) {
      $dara.Model.validateArray(this.outboundRangeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetHotlineNumberShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * desc
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  enableInbound?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  enableInboundEvaluation?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  enableOutbound?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  enableOutboundEvaluation?: boolean;
  /**
   * @example
   * 2
   */
  evaluationLevel?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0571********
   */
  hotlineNumber?: string;
  /**
   * @example
   * 123456
   */
  inboundFlowId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  outboundAllDepart?: boolean;
  outboundRangeListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      enableInbound: 'EnableInbound',
      enableInboundEvaluation: 'EnableInboundEvaluation',
      enableOutbound: 'EnableOutbound',
      enableOutboundEvaluation: 'EnableOutboundEvaluation',
      evaluationLevel: 'EvaluationLevel',
      hotlineNumber: 'HotlineNumber',
      inboundFlowId: 'InboundFlowId',
      instanceId: 'InstanceId',
      outboundAllDepart: 'OutboundAllDepart',
      outboundRangeListShrink: 'OutboundRangeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      enableInbound: 'boolean',
      enableInboundEvaluation: 'boolean',
      enableOutbound: 'boolean',
      enableOutboundEvaluation: 'boolean',
      evaluationLevel: 'number',
      hotlineNumber: 'string',
      inboundFlowId: 'number',
      instanceId: 'string',
      outboundAllDepart: 'boolean',
      outboundRangeListShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetHotlineNumberResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * xxx
   */
  message?: string;
  /**
   * @example
   * EE338D98-9BD3-4413-B165
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
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetHotlineNumberResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ResetHotlineNumberResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ResetHotlineNumberResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartOutboundTaskRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  outboundTaskId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      outboundTaskId: 'OutboundTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      outboundTaskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartOutboundTaskResponseBody extends $dara.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
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
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartOutboundTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RestartOutboundTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RestartOutboundTaskResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RobotCallRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 131****2204
   */
  calledNumber?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0571****5678
   */
  calledShowNumber?: string;
  /**
   * @example
   * false
   */
  earlyMediaAsr?: boolean;
  /**
   * @example
   * abcdefgh
   */
  outId?: string;
  ownerId?: number;
  params?: string;
  /**
   * @example
   * true
   */
  recordFlag?: boolean;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 350000****
   */
  robotId?: number;
  static names(): { [key: string]: string } {
    return {
      calledNumber: 'CalledNumber',
      calledShowNumber: 'CalledShowNumber',
      earlyMediaAsr: 'EarlyMediaAsr',
      outId: 'OutId',
      ownerId: 'OwnerId',
      params: 'Params',
      recordFlag: 'RecordFlag',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      robotId: 'RobotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calledNumber: 'string',
      calledShowNumber: 'string',
      earlyMediaAsr: 'boolean',
      outId: 'string',
      ownerId: 'number',
      params: 'string',
      recordFlag: 'boolean',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      robotId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RobotCallResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 116012854210^10281427*****
   */
  data?: string;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * A90E4451-FED7-49D2-87C8-00700A8C4D0D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RobotCallResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RobotCallResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RobotCallResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendCcoSmartCallRequest extends $dara.Model {
  /**
   * @example
   * true
   */
  actionCodeBreak?: boolean;
  /**
   * @example
   * 120
   */
  actionCodeTimeBreak?: number;
  /**
   * @example
   * 123456
   */
  asrAlsAmId?: string;
  /**
   * @example
   * customer_service_8k
   */
  asrBaseId?: string;
  /**
   * @example
   * bf71664d30d2478fb8cb8c39c6b6****
   */
  asrModelId?: string;
  /**
   * @example
   * 123456
   */
  asrVocabularyId?: string;
  /**
   * @example
   * 2d4c-4e78-8d2a-afbb06cf****.wav
   */
  backgroundFileCode?: string;
  /**
   * @example
   * 1
   */
  backgroundSpeed?: number;
  /**
   * @example
   * 1
   */
  backgroundVolume?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 137****0000
   */
  calledNumber?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0571****0000
   */
  calledShowNumber?: string;
  /**
   * @example
   * 123456
   */
  dynamicId?: string;
  /**
   * @example
   * fasle
   */
  earlyMediaAsr?: boolean;
  /**
   * @example
   * true
   */
  enableITN?: boolean;
  /**
   * @example
   * 10000
   */
  muteTime?: number;
  /**
   * @example
   * 222356****
   */
  outId?: string;
  ownerId?: number;
  /**
   * @example
   * 800
   */
  pauseTime?: number;
  /**
   * @example
   * 1
   */
  playTimes?: number;
  /**
   * @example
   * aiccs
   */
  prodCode?: string;
  /**
   * @example
   * true
   */
  recordFlag?: boolean;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @example
   * 120
   */
  sessionTimeout?: number;
  /**
   * @example
   * 1
   */
  speed?: number;
  /**
   * @example
   * true
   */
  ttsConf?: boolean;
  /**
   * @example
   * 100
   */
  ttsSpeed?: number;
  /**
   * @example
   * xiaoyun
   */
  ttsStyle?: string;
  /**
   * @example
   * 10
   */
  ttsVolume?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2d4c-4e78-8d2a-afbb06cf****.wav,$name$
   */
  voiceCode?: string;
  voiceCodeParam?: string;
  /**
   * @example
   * 1
   */
  volume?: number;
  static names(): { [key: string]: string } {
    return {
      actionCodeBreak: 'ActionCodeBreak',
      actionCodeTimeBreak: 'ActionCodeTimeBreak',
      asrAlsAmId: 'AsrAlsAmId',
      asrBaseId: 'AsrBaseId',
      asrModelId: 'AsrModelId',
      asrVocabularyId: 'AsrVocabularyId',
      backgroundFileCode: 'BackgroundFileCode',
      backgroundSpeed: 'BackgroundSpeed',
      backgroundVolume: 'BackgroundVolume',
      calledNumber: 'CalledNumber',
      calledShowNumber: 'CalledShowNumber',
      dynamicId: 'DynamicId',
      earlyMediaAsr: 'EarlyMediaAsr',
      enableITN: 'EnableITN',
      muteTime: 'MuteTime',
      outId: 'OutId',
      ownerId: 'OwnerId',
      pauseTime: 'PauseTime',
      playTimes: 'PlayTimes',
      prodCode: 'ProdCode',
      recordFlag: 'RecordFlag',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sessionTimeout: 'SessionTimeout',
      speed: 'Speed',
      ttsConf: 'TtsConf',
      ttsSpeed: 'TtsSpeed',
      ttsStyle: 'TtsStyle',
      ttsVolume: 'TtsVolume',
      voiceCode: 'VoiceCode',
      voiceCodeParam: 'VoiceCodeParam',
      volume: 'Volume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionCodeBreak: 'boolean',
      actionCodeTimeBreak: 'number',
      asrAlsAmId: 'string',
      asrBaseId: 'string',
      asrModelId: 'string',
      asrVocabularyId: 'string',
      backgroundFileCode: 'string',
      backgroundSpeed: 'number',
      backgroundVolume: 'number',
      calledNumber: 'string',
      calledShowNumber: 'string',
      dynamicId: 'string',
      earlyMediaAsr: 'boolean',
      enableITN: 'boolean',
      muteTime: 'number',
      outId: 'string',
      ownerId: 'number',
      pauseTime: 'number',
      playTimes: 'number',
      prodCode: 'string',
      recordFlag: 'boolean',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sessionTimeout: 'number',
      speed: 'number',
      ttsConf: 'boolean',
      ttsSpeed: 'number',
      ttsStyle: 'string',
      ttsVolume: 'number',
      voiceCode: 'string',
      voiceCodeParam: 'string',
      volume: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendCcoSmartCallResponseBody extends $dara.Model {
  /**
   * @example
   * 16012854210^10281427****
   */
  code?: string;
  /**
   * @example
   * OK
   */
  data?: string;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * A90E4451-FED7-49D2-87C8-00700A8C4D0D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendCcoSmartCallResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SendCcoSmartCallResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SendCcoSmartCallResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendCcoSmartCallOperateRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 116012854210^102814279****
   */
  callId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * parallelBridge
   */
  command?: string;
  ownerId?: number;
  /**
   * @example
   * Param
   */
  param?: string;
  /**
   * @example
   * aiccs
   */
  prodCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      callId: 'CallId',
      command: 'Command',
      ownerId: 'OwnerId',
      param: 'Param',
      prodCode: 'ProdCode',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callId: 'string',
      command: 'string',
      ownerId: 'number',
      param: 'string',
      prodCode: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendCcoSmartCallOperateResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * true
   */
  data?: string;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * A90E4451-FED7-49D2-87C8-00700A8C4D0D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendCcoSmartCallOperateResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SendCcoSmartCallOperateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SendCcoSmartCallOperateResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendHotlineHeartBeatRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123@123.com
   */
  accountName?: string;
  /**
   * @example
   * 46c1341e-2648-447a-9b11-70b6a298d94d
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0079e7a845e373****
   */
  token?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      clientToken: 'string',
      instanceId: 'string',
      token: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendHotlineHeartBeatResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  /**
   * @example
   * xxxx
   */
  message?: string;
  /**
   * @example
   * EE338D98-9BD3-4413-B165
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
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendHotlineHeartBeatResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SendHotlineHeartBeatResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SendHotlineHeartBeatResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartAiOutboundTaskRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * agent_****
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1763****
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      taskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartAiOutboundTaskResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * EE338D98-9BD3-4413-B165
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
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartAiOutboundTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartAiOutboundTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StartAiOutboundTaskResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCallRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123@123.com
   */
  accountName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1360987****
   */
  callee?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 906****
   */
  caller?: string;
  /**
   * @example
   * 46c1341e-2648-447a-9b11-70b6a298d94d
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      callee: 'Callee',
      caller: 'Caller',
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      callee: 'string',
      caller: 'string',
      clientToken: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCallResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  /**
   * @example
   * xxxx
   */
  message?: string;
  /**
   * @example
   * EE338D98-9BD3-4413-B165
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
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCallResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartCallResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StartCallResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCallV2Request extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123@123.com
   */
  accountName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 136****1111
   */
  callee?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 9065****
   */
  caller?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  callerType?: number;
  /**
   * @example
   * 46c1341e-2648-447a-9b11-70b6a298d94d
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      callee: 'Callee',
      caller: 'Caller',
      callerType: 'CallerType',
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      callee: 'string',
      caller: 'string',
      callerType: 'number',
      clientToken: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCallV2ResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  /**
   * @example
   * xxxx
   */
  message?: string;
  /**
   * @example
   * EE338D98-9BD3-4413-B165
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
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCallV2Response extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartCallV2ResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StartCallV2ResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartChatWorkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123@123.com
   */
  accountName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre***
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartChatWorkResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * 1
   */
  data?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * xxxx
   */
  message?: string;
  /**
   * @example
   * EE338D98-9BD3-4413-B165
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
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartChatWorkResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartChatWorkResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StartChatWorkResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartHotlineServiceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * username@example.com
   */
  accountName?: string;
  /**
   * @example
   * 46c1341e-2648-447a-9b11-70b6a298d94d
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      clientToken: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartHotlineServiceResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  /**
   * @example
   * 0079e7a845e37334ff
   */
  data?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * EE338D98-9BD3-4413-B165
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
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartHotlineServiceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartHotlineServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StartHotlineServiceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartMicroOutboundRequest extends $dara.Model {
  /**
   * @example
   * 223457****
   */
  accountId?: string;
  /**
   * @example
   * BUC_TYPE
   */
  accountType?: string;
  /**
   * @example
   * aliyun
   */
  appName?: string;
  /**
   * @example
   * 0571456****
   */
  calledNumber?: string;
  /**
   * @example
   * 1367123****
   */
  callingNumber?: string;
  /**
   * @example
   * outBound_Call
   */
  commandCode?: string;
  /**
   * @example
   * {"caseId":23232****}
   */
  extInfo?: string;
  ownerId?: number;
  /**
   * @example
   * aiccs
   */
  prodCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      accountType: 'AccountType',
      appName: 'AppName',
      calledNumber: 'CalledNumber',
      callingNumber: 'CallingNumber',
      commandCode: 'CommandCode',
      extInfo: 'ExtInfo',
      ownerId: 'OwnerId',
      prodCode: 'ProdCode',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      accountType: 'string',
      appName: 'string',
      calledNumber: 'string',
      callingNumber: 'string',
      commandCode: 'string',
      extInfo: 'string',
      ownerId: 'number',
      prodCode: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartMicroOutboundResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * {\\"caseId\\":2323****}
   */
  customerInfo?: string;
  /**
   * @example
   * 8883f165-4a0d-4da2-a2d2
   */
  invokeCmdId?: string;
  /**
   * @example
   * 2019-05-23 17:30:32.525
   */
  invokeCreateTime?: string;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * EE338D98-9BD3-4413-B165
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      customerInfo: 'CustomerInfo',
      invokeCmdId: 'InvokeCmdId',
      invokeCreateTime: 'InvokeCreateTime',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      customerInfo: 'string',
      invokeCmdId: 'string',
      invokeCreateTime: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartMicroOutboundResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartMicroOutboundResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StartMicroOutboundResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartTaskRequest extends $dara.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @example
   * true
   */
  startNow?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      startNow: 'StartNow',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      startNow: 'boolean',
      taskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartTaskResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * true
   */
  data?: boolean;
  /**
   * @example
   * OK
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
      data: 'boolean',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StartTaskResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopAiOutboundTaskRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * agent_***
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      taskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopAiOutboundTaskResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * EE338D98-9BD3-4413-B165
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
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopAiOutboundTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopAiOutboundTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StopAiOutboundTaskResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopTaskRequest extends $dara.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      taskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopTaskResponseBody extends $dara.Model {
  /**
   * @example
   * Ok
   */
  code?: string;
  /**
   * @example
   * true
   */
  data?: boolean;
  /**
   * @example
   * OK
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
      data: 'boolean',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StopTaskResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SuspendHotlineServiceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123@123.com
   */
  accountName?: string;
  /**
   * @example
   * 46c1341e-2648-447a-9b11-70b6a298d94d
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  /**
   * @example
   * 1
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      clientToken: 'string',
      instanceId: 'string',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SuspendHotlineServiceResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  /**
   * @example
   * xxxx
   */
  message?: string;
  /**
   * @example
   * EE338D98-9BD3-4413-B165
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
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SuspendHotlineServiceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SuspendHotlineServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SuspendHotlineServiceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SuspendOutboundTaskRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  outboundTaskId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      outboundTaskId: 'OutboundTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      outboundTaskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SuspendOutboundTaskResponseBody extends $dara.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
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
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SuspendOutboundTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SuspendOutboundTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SuspendOutboundTaskResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TerminateAiOutboundTaskRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * agent_****
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1763****
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      taskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TerminateAiOutboundTaskResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * EE338D98-9BD3-4413-B165
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
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TerminateAiOutboundTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TerminateAiOutboundTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: TerminateAiOutboundTaskResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransferCallToSkillGroupRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * username@example.com
   */
  accountName?: string;
  /**
   * @example
   * 7719786
   */
  callId?: string;
  /**
   * @example
   * 46c1341e-2648-447a-9b11-70b6a298d94d
   */
  clientToken?: string;
  /**
   * @example
   * 7719788
   */
  connectionId?: string;
  /**
   * @example
   * 0
   */
  holdConnectionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  /**
   * @example
   * true
   */
  isSingleTransfer?: boolean;
  /**
   * @example
   * 7719787
   */
  jobId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 356543
   */
  skillGroupId?: number;
  /**
   * @example
   * 1
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      callId: 'CallId',
      clientToken: 'ClientToken',
      connectionId: 'ConnectionId',
      holdConnectionId: 'HoldConnectionId',
      instanceId: 'InstanceId',
      isSingleTransfer: 'IsSingleTransfer',
      jobId: 'JobId',
      skillGroupId: 'SkillGroupId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      callId: 'string',
      clientToken: 'string',
      connectionId: 'string',
      holdConnectionId: 'string',
      instanceId: 'string',
      isSingleTransfer: 'boolean',
      jobId: 'string',
      skillGroupId: 'number',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransferCallToSkillGroupResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  /**
   * @example
   * xxxx
   */
  message?: string;
  /**
   * @example
   * EE338D98-9BD3-4413-B165
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
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransferCallToSkillGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TransferCallToSkillGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: TransferCallToSkillGroupResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAgentRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123@123.com
   */
  accountName?: string;
  /**
   * @example
   * 46c1341e-2648-447a-9b11-70b6a298d94d
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  displayName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  skillGroupId?: number[];
  skillGroupIdList?: number[];
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      clientToken: 'ClientToken',
      displayName: 'DisplayName',
      instanceId: 'InstanceId',
      skillGroupId: 'SkillGroupId',
      skillGroupIdList: 'SkillGroupIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      clientToken: 'string',
      displayName: 'string',
      instanceId: 'string',
      skillGroupId: { 'type': 'array', 'itemType': 'number' },
      skillGroupIdList: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.skillGroupId)) {
      $dara.Model.validateArray(this.skillGroupId);
    }
    if(Array.isArray(this.skillGroupIdList)) {
      $dara.Model.validateArray(this.skillGroupIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAgentResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * EE338D98-9BD3-4413-B165
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
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAgentResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateAgentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateAgentResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAiOutboundTaskRequest extends $dara.Model {
  /**
   * @example
   * 10
   */
  concurrentRate?: number;
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {"TUESDAY":[{"start":"06:00","end":"06:05"}],"MONDAY":[{"start":"09:00","end":"18:00"},{"start":"20:30","end":"21:45"},{"start":"22:30","end":"22:50"}],"WEDNESDAY":[{"start":"09:00","end":"18:00"}],"THURSDAY":[{"start":"09:00","end":"18:00"}],"FRIDAY":[{"start":"09:00","end":"18:00"}],"SATURDAY":[{"start":"09:00","end":"18:00"}],"SUNDAY":[{"start":"17:00","end":"23:45"}]}
   */
  executionTime?: string;
  /**
   * @example
   * 1.2
   */
  forecastCallRate?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123
   */
  handlerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * agent_***
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xx外呼任务
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  numRepeated?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  outboundNums?: string[];
  recallRule?: UpdateAiOutboundTaskRequestRecallRule;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      concurrentRate: 'ConcurrentRate',
      description: 'Description',
      executionTime: 'ExecutionTime',
      forecastCallRate: 'ForecastCallRate',
      handlerId: 'HandlerId',
      instanceId: 'InstanceId',
      name: 'Name',
      numRepeated: 'NumRepeated',
      outboundNums: 'OutboundNums',
      recallRule: 'RecallRule',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      concurrentRate: 'number',
      description: 'string',
      executionTime: 'string',
      forecastCallRate: 'number',
      handlerId: 'number',
      instanceId: 'string',
      name: 'string',
      numRepeated: 'number',
      outboundNums: { 'type': 'array', 'itemType': 'string' },
      recallRule: UpdateAiOutboundTaskRequestRecallRule,
      taskId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.outboundNums)) {
      $dara.Model.validateArray(this.outboundNums);
    }
    if(this.recallRule && typeof (this.recallRule as any).validate === 'function') {
      (this.recallRule as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAiOutboundTaskShrinkRequest extends $dara.Model {
  /**
   * @example
   * 10
   */
  concurrentRate?: number;
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {"TUESDAY":[{"start":"06:00","end":"06:05"}],"MONDAY":[{"start":"09:00","end":"18:00"},{"start":"20:30","end":"21:45"},{"start":"22:30","end":"22:50"}],"WEDNESDAY":[{"start":"09:00","end":"18:00"}],"THURSDAY":[{"start":"09:00","end":"18:00"}],"FRIDAY":[{"start":"09:00","end":"18:00"}],"SATURDAY":[{"start":"09:00","end":"18:00"}],"SUNDAY":[{"start":"17:00","end":"23:45"}]}
   */
  executionTime?: string;
  /**
   * @example
   * 1.2
   */
  forecastCallRate?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123
   */
  handlerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * agent_***
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xx外呼任务
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  numRepeated?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  outboundNumsShrink?: string;
  recallRuleShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      concurrentRate: 'ConcurrentRate',
      description: 'Description',
      executionTime: 'ExecutionTime',
      forecastCallRate: 'ForecastCallRate',
      handlerId: 'HandlerId',
      instanceId: 'InstanceId',
      name: 'Name',
      numRepeated: 'NumRepeated',
      outboundNumsShrink: 'OutboundNums',
      recallRuleShrink: 'RecallRule',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      concurrentRate: 'number',
      description: 'string',
      executionTime: 'string',
      forecastCallRate: 'number',
      handlerId: 'number',
      instanceId: 'string',
      name: 'string',
      numRepeated: 'number',
      outboundNumsShrink: 'string',
      recallRuleShrink: 'string',
      taskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAiOutboundTaskResponseBody extends $dara.Model {
  /**
   * @example
   * ok
   */
  code?: string;
  /**
   * @example
   * ok
   */
  message?: string;
  /**
   * @example
   * EE338D98-9BD3-4413-B165
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
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAiOutboundTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateAiOutboundTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateAiOutboundTaskResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDepartmentRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  departmentId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  departmentName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      departmentId: 'DepartmentId',
      departmentName: 'DepartmentName',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      departmentId: 'number',
      departmentName: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDepartmentResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * true
   */
  data?: boolean;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 98B032F5-6473-4EAC-8BA8-C28993513A1
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
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDepartmentResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateDepartmentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateDepartmentResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateOuterAccountRequest extends $dara.Model {
  /**
   * @example
   * http://****
   */
  avatar?: string;
  ext?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  outerAccountId?: string;
  outerAccountName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * alipay
   */
  outerAccountType?: string;
  /**
   * @example
   * 3
   */
  outerDepartmentId?: string;
  /**
   * @example
   * type_invalid
   */
  outerDepartmentType?: string;
  /**
   * @example
   * ["222","333","444"]
   */
  outerGroupIds?: string;
  /**
   * @example
   * mybank
   */
  outerGroupType?: string;
  realName?: string;
  static names(): { [key: string]: string } {
    return {
      avatar: 'Avatar',
      ext: 'Ext',
      outerAccountId: 'OuterAccountId',
      outerAccountName: 'OuterAccountName',
      outerAccountType: 'OuterAccountType',
      outerDepartmentId: 'OuterDepartmentId',
      outerDepartmentType: 'OuterDepartmentType',
      outerGroupIds: 'OuterGroupIds',
      outerGroupType: 'OuterGroupType',
      realName: 'RealName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatar: 'string',
      ext: 'string',
      outerAccountId: 'string',
      outerAccountName: 'string',
      outerAccountType: 'string',
      outerDepartmentId: 'string',
      outerDepartmentType: 'string',
      outerGroupIds: 'string',
      outerGroupType: 'string',
      realName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateOuterAccountResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * true
   */
  data?: string;
  /**
   * @example
   * xxxx
   */
  message?: string;
  /**
   * @example
   * EE338D98-9BD3-4413-B165
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
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateOuterAccountResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateOuterAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateOuterAccountResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSkillGroupRequest extends $dara.Model {
  /**
   * @example
   * 46c1341e-2648-447a-9b11-70b6a298d94d
   */
  clientToken?: string;
  description?: string;
  displayName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  skillGroupId?: number;
  skillGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
      displayName: 'DisplayName',
      instanceId: 'InstanceId',
      skillGroupId: 'SkillGroupId',
      skillGroupName: 'SkillGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      displayName: 'string',
      instanceId: 'string',
      skillGroupId: 'number',
      skillGroupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSkillGroupResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  /**
   * @example
   * xxxx
   */
  message?: string;
  /**
   * @example
   * EE338D98-9BD3-4413-B165
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
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSkillGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateSkillGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateSkillGroupResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "central";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("aiccs", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!$dara.isNull(endpoint)) {
      return endpoint;
    }

    if (!$dara.isNull(endpointMap) && !$dara.isNull(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return OpenApiUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * 新增热线号码
   * 
   * @param tmpReq - AddHotlineNumberRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddHotlineNumberResponse
   */
  async addHotlineNumberWithOptions(tmpReq: AddHotlineNumberRequest, runtime: $dara.RuntimeOptions): Promise<AddHotlineNumberResponse> {
    tmpReq.validate();
    let request = new AddHotlineNumberShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.outboundRangeList)) {
      request.outboundRangeListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.outboundRangeList, "OutboundRangeList", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.enableInbound)) {
      body["EnableInbound"] = request.enableInbound;
    }

    if (!$dara.isNull(request.enableInboundEvaluation)) {
      body["EnableInboundEvaluation"] = request.enableInboundEvaluation;
    }

    if (!$dara.isNull(request.enableOutbound)) {
      body["EnableOutbound"] = request.enableOutbound;
    }

    if (!$dara.isNull(request.enableOutboundEvaluation)) {
      body["EnableOutboundEvaluation"] = request.enableOutboundEvaluation;
    }

    if (!$dara.isNull(request.evaluationLevel)) {
      body["EvaluationLevel"] = request.evaluationLevel;
    }

    if (!$dara.isNull(request.hotlineNumber)) {
      body["HotlineNumber"] = request.hotlineNumber;
    }

    if (!$dara.isNull(request.inboundFlowId)) {
      body["InboundFlowId"] = request.inboundFlowId;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.outboundAllDepart)) {
      body["OutboundAllDepart"] = request.outboundAllDepart;
    }

    if (!$dara.isNull(request.outboundRangeListShrink)) {
      body["OutboundRangeList"] = request.outboundRangeListShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddHotlineNumber",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<AddHotlineNumberResponse>(await this.callApi(params, req, runtime), new AddHotlineNumberResponse({}));
  }

  /**
   * 新增热线号码
   * 
   * @param request - AddHotlineNumberRequest
   * @returns AddHotlineNumberResponse
   */
  async addHotlineNumber(request: AddHotlineNumberRequest): Promise<AddHotlineNumberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addHotlineNumberWithOptions(request, runtime);
  }

  /**
   * @param request - AddOuterAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddOuterAccountResponse
   */
  async addOuterAccountWithOptions(request: AddOuterAccountRequest, runtime: $dara.RuntimeOptions): Promise<AddOuterAccountResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddOuterAccount",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<AddOuterAccountResponse>(await this.callApi(params, req, runtime), new AddOuterAccountResponse({}));
  }

  /**
   * @param request - AddOuterAccountRequest
   * @returns AddOuterAccountResponse
   */
  async addOuterAccount(request: AddOuterAccountRequest): Promise<AddOuterAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addOuterAccountWithOptions(request, runtime);
  }

  /**
   * @param request - AddSkillGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddSkillGroupResponse
   */
  async addSkillGroupWithOptions(request: AddSkillGroupRequest, runtime: $dara.RuntimeOptions): Promise<AddSkillGroupResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddSkillGroup",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<AddSkillGroupResponse>(await this.callApi(params, req, runtime), new AddSkillGroupResponse({}));
  }

  /**
   * @param request - AddSkillGroupRequest
   * @returns AddSkillGroupResponse
   */
  async addSkillGroup(request: AddSkillGroupRequest): Promise<AddSkillGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addSkillGroupWithOptions(request, runtime);
  }

  /**
   * @param request - AiccsSmartCallRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AiccsSmartCallResponse
   */
  async aiccsSmartCallWithOptions(request: AiccsSmartCallRequest, runtime: $dara.RuntimeOptions): Promise<AiccsSmartCallResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.actionCodeBreak)) {
      query["ActionCodeBreak"] = request.actionCodeBreak;
    }

    if (!$dara.isNull(request.actionCodeTimeBreak)) {
      query["ActionCodeTimeBreak"] = request.actionCodeTimeBreak;
    }

    if (!$dara.isNull(request.asrAlsAmId)) {
      query["AsrAlsAmId"] = request.asrAlsAmId;
    }

    if (!$dara.isNull(request.asrBaseId)) {
      query["AsrBaseId"] = request.asrBaseId;
    }

    if (!$dara.isNull(request.asrModelId)) {
      query["AsrModelId"] = request.asrModelId;
    }

    if (!$dara.isNull(request.asrVocabularyId)) {
      query["AsrVocabularyId"] = request.asrVocabularyId;
    }

    if (!$dara.isNull(request.backgroundFileCode)) {
      query["BackgroundFileCode"] = request.backgroundFileCode;
    }

    if (!$dara.isNull(request.backgroundSpeed)) {
      query["BackgroundSpeed"] = request.backgroundSpeed;
    }

    if (!$dara.isNull(request.backgroundVolume)) {
      query["BackgroundVolume"] = request.backgroundVolume;
    }

    if (!$dara.isNull(request.calledNumber)) {
      query["CalledNumber"] = request.calledNumber;
    }

    if (!$dara.isNull(request.calledShowNumber)) {
      query["CalledShowNumber"] = request.calledShowNumber;
    }

    if (!$dara.isNull(request.dynamicId)) {
      query["DynamicId"] = request.dynamicId;
    }

    if (!$dara.isNull(request.earlyMediaAsr)) {
      query["EarlyMediaAsr"] = request.earlyMediaAsr;
    }

    if (!$dara.isNull(request.enableITN)) {
      query["EnableITN"] = request.enableITN;
    }

    if (!$dara.isNull(request.muteTime)) {
      query["MuteTime"] = request.muteTime;
    }

    if (!$dara.isNull(request.outId)) {
      query["OutId"] = request.outId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pauseTime)) {
      query["PauseTime"] = request.pauseTime;
    }

    if (!$dara.isNull(request.playTimes)) {
      query["PlayTimes"] = request.playTimes;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.recordFlag)) {
      query["RecordFlag"] = request.recordFlag;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.sessionTimeout)) {
      query["SessionTimeout"] = request.sessionTimeout;
    }

    if (!$dara.isNull(request.speed)) {
      query["Speed"] = request.speed;
    }

    if (!$dara.isNull(request.ttsConf)) {
      query["TtsConf"] = request.ttsConf;
    }

    if (!$dara.isNull(request.ttsSpeed)) {
      query["TtsSpeed"] = request.ttsSpeed;
    }

    if (!$dara.isNull(request.ttsStyle)) {
      query["TtsStyle"] = request.ttsStyle;
    }

    if (!$dara.isNull(request.ttsVolume)) {
      query["TtsVolume"] = request.ttsVolume;
    }

    if (!$dara.isNull(request.voiceCode)) {
      query["VoiceCode"] = request.voiceCode;
    }

    if (!$dara.isNull(request.voiceCodeParam)) {
      query["VoiceCodeParam"] = request.voiceCodeParam;
    }

    if (!$dara.isNull(request.volume)) {
      query["Volume"] = request.volume;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AiccsSmartCall",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<AiccsSmartCallResponse>(await this.callApi(params, req, runtime), new AiccsSmartCallResponse({}));
  }

  /**
   * @param request - AiccsSmartCallRequest
   * @returns AiccsSmartCallResponse
   */
  async aiccsSmartCall(request: AiccsSmartCallRequest): Promise<AiccsSmartCallResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.aiccsSmartCallWithOptions(request, runtime);
  }

  /**
   * @param request - AiccsSmartCallOperateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AiccsSmartCallOperateResponse
   */
  async aiccsSmartCallOperateWithOptions(request: AiccsSmartCallOperateRequest, runtime: $dara.RuntimeOptions): Promise<AiccsSmartCallOperateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.callId)) {
      query["CallId"] = request.callId;
    }

    if (!$dara.isNull(request.command)) {
      query["Command"] = request.command;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.param)) {
      query["Param"] = request.param;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AiccsSmartCallOperate",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<AiccsSmartCallOperateResponse>(await this.callApi(params, req, runtime), new AiccsSmartCallOperateResponse({}));
  }

  /**
   * @param request - AiccsSmartCallOperateRequest
   * @returns AiccsSmartCallOperateResponse
   */
  async aiccsSmartCallOperate(request: AiccsSmartCallOperateRequest): Promise<AiccsSmartCallOperateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.aiccsSmartCallOperateWithOptions(request, runtime);
  }

  /**
   * @param request - AnswerCallRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AnswerCallResponse
   */
  async answerCallWithOptions(request: AnswerCallRequest, runtime: $dara.RuntimeOptions): Promise<AnswerCallResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountName)) {
      body["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.callId)) {
      body["CallId"] = request.callId;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.connectionId)) {
      body["ConnectionId"] = request.connectionId;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.jobId)) {
      body["JobId"] = request.jobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AnswerCall",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<AnswerCallResponse>(await this.callApi(params, req, runtime), new AnswerCallResponse({}));
  }

  /**
   * @param request - AnswerCallRequest
   * @returns AnswerCallResponse
   */
  async answerCall(request: AnswerCallRequest): Promise<AnswerCallResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.answerCallWithOptions(request, runtime);
  }

  /**
   * 追加任务明细
   * 
   * @param request - AttachTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AttachTaskResponse
   */
  async attachTaskWithOptions(request: AttachTaskRequest, runtime: $dara.RuntimeOptions): Promise<AttachTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.callString)) {
      query["CallString"] = request.callString;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AttachTask",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<AttachTaskResponse>(await this.callApi(params, req, runtime), new AttachTaskResponse({}));
  }

  /**
   * 追加任务明细
   * 
   * @param request - AttachTaskRequest
   * @returns AttachTaskResponse
   */
  async attachTask(request: AttachTaskRequest): Promise<AttachTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.attachTaskWithOptions(request, runtime);
  }

  /**
   * @param request - BatchCreateQualityProjectsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchCreateQualityProjectsResponse
   */
  async batchCreateQualityProjectsWithOptions(request: BatchCreateQualityProjectsRequest, runtime: $dara.RuntimeOptions): Promise<BatchCreateQualityProjectsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.analysisIds)) {
      query["AnalysisIds"] = request.analysisIds;
    }

    if (!$dara.isNull(request.channelTouchType)) {
      query["ChannelTouchType"] = request.channelTouchType;
    }

    if (!$dara.isNull(request.checkFreqType)) {
      query["CheckFreqType"] = request.checkFreqType;
    }

    if (!$dara.isNull(request.instanceList)) {
      query["InstanceList"] = request.instanceList;
    }

    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.timeRangeEnd)) {
      query["TimeRangeEnd"] = request.timeRangeEnd;
    }

    if (!$dara.isNull(request.timeRangeStart)) {
      query["TimeRangeStart"] = request.timeRangeStart;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchCreateQualityProjects",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<BatchCreateQualityProjectsResponse>(await this.callApi(params, req, runtime), new BatchCreateQualityProjectsResponse({}));
  }

  /**
   * @param request - BatchCreateQualityProjectsRequest
   * @returns BatchCreateQualityProjectsResponse
   */
  async batchCreateQualityProjects(request: BatchCreateQualityProjectsRequest): Promise<BatchCreateQualityProjectsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchCreateQualityProjectsWithOptions(request, runtime);
  }

  /**
   * 删除智能外呼任务
   * 
   * @param request - CancelTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelTaskResponse
   */
  async cancelTaskWithOptions(request: CancelTaskRequest, runtime: $dara.RuntimeOptions): Promise<CancelTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelTask",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<CancelTaskResponse>(await this.callApi(params, req, runtime), new CancelTaskResponse({}));
  }

  /**
   * 删除智能外呼任务
   * 
   * @param request - CancelTaskRequest
   * @returns CancelTaskResponse
   */
  async cancelTask(request: CancelTaskRequest): Promise<CancelTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelTaskWithOptions(request, runtime);
  }

  /**
   * 修改在线客服状态
   * 
   * @param request - ChangeChatAgentStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeChatAgentStatusResponse
   */
  async changeChatAgentStatusWithOptions(request: ChangeChatAgentStatusRequest, runtime: $dara.RuntimeOptions): Promise<ChangeChatAgentStatusResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountName)) {
      body["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.method)) {
      body["Method"] = request.method;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChangeChatAgentStatus",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ChangeChatAgentStatusResponse>(await this.callApi(params, req, runtime), new ChangeChatAgentStatusResponse({}));
  }

  /**
   * 修改在线客服状态
   * 
   * @param request - ChangeChatAgentStatusRequest
   * @returns ChangeChatAgentStatusResponse
   */
  async changeChatAgentStatus(request: ChangeChatAgentStatusRequest): Promise<ChangeChatAgentStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.changeChatAgentStatusWithOptions(request, runtime);
  }

  /**
   * @param request - ChangeQualityProjectStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeQualityProjectStatusResponse
   */
  async changeQualityProjectStatusWithOptions(request: ChangeQualityProjectStatusRequest, runtime: $dara.RuntimeOptions): Promise<ChangeQualityProjectStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChangeQualityProjectStatus",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ChangeQualityProjectStatusResponse>(await this.callApi(params, req, runtime), new ChangeQualityProjectStatusResponse({}));
  }

  /**
   * @param request - ChangeQualityProjectStatusRequest
   * @returns ChangeQualityProjectStatusResponse
   */
  async changeQualityProjectStatus(request: ChangeQualityProjectStatusRequest): Promise<ChangeQualityProjectStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.changeQualityProjectStatusWithOptions(request, runtime);
  }

  /**
   * @param request - CreateAgentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAgentResponse
   */
  async createAgentWithOptions(request: CreateAgentRequest, runtime: $dara.RuntimeOptions): Promise<CreateAgentResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountName)) {
      body["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.displayName)) {
      body["DisplayName"] = request.displayName;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.skillGroupId)) {
      bodyFlat["SkillGroupId"] = request.skillGroupId;
    }

    if (!$dara.isNull(request.skillGroupIdList)) {
      bodyFlat["SkillGroupIdList"] = request.skillGroupIdList;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAgent",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<CreateAgentResponse>(await this.callApi(params, req, runtime), new CreateAgentResponse({}));
  }

  /**
   * @param request - CreateAgentRequest
   * @returns CreateAgentResponse
   */
  async createAgent(request: CreateAgentRequest): Promise<CreateAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAgentWithOptions(request, runtime);
  }

  /**
   * 创建智能外呼任务（预测式外呼、自动外呼）
   * 
   * @param tmpReq - CreateAiOutboundTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAiOutboundTaskResponse
   */
  async createAiOutboundTaskWithOptions(tmpReq: CreateAiOutboundTaskRequest, runtime: $dara.RuntimeOptions): Promise<CreateAiOutboundTaskResponse> {
    tmpReq.validate();
    let request = new CreateAiOutboundTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.outboundNums)) {
      request.outboundNumsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.outboundNums, "OutboundNums", "json");
    }

    if (!$dara.isNull(tmpReq.recallRule)) {
      request.recallRuleShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.recallRule, "RecallRule", "json");
    }

    let query = { };
    if (!$dara.isNull(request.concurrentRate)) {
      query["ConcurrentRate"] = request.concurrentRate;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.executionTime)) {
      query["ExecutionTime"] = request.executionTime;
    }

    if (!$dara.isNull(request.forecastCallRate)) {
      query["ForecastCallRate"] = request.forecastCallRate;
    }

    if (!$dara.isNull(request.handlerId)) {
      query["HandlerId"] = request.handlerId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.numRepeated)) {
      query["NumRepeated"] = request.numRepeated;
    }

    if (!$dara.isNull(request.outboundNumsShrink)) {
      query["OutboundNums"] = request.outboundNumsShrink;
    }

    if (!$dara.isNull(request.recallRuleShrink)) {
      query["RecallRule"] = request.recallRuleShrink;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAiOutboundTask",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<CreateAiOutboundTaskResponse>(await this.callApi(params, req, runtime), new CreateAiOutboundTaskResponse({}));
  }

  /**
   * 创建智能外呼任务（预测式外呼、自动外呼）
   * 
   * @param request - CreateAiOutboundTaskRequest
   * @returns CreateAiOutboundTaskResponse
   */
  async createAiOutboundTask(request: CreateAiOutboundTaskRequest): Promise<CreateAiOutboundTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAiOutboundTaskWithOptions(request, runtime);
  }

  /**
   * 创建智能外呼任务批次
   * 
   * @param request - CreateAiOutboundTaskBatchRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAiOutboundTaskBatchResponse
   */
  async createAiOutboundTaskBatchWithOptions(request: CreateAiOutboundTaskBatchRequest, runtime: $dara.RuntimeOptions): Promise<CreateAiOutboundTaskBatchResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAiOutboundTaskBatch",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<CreateAiOutboundTaskBatchResponse>(await this.callApi(params, req, runtime), new CreateAiOutboundTaskBatchResponse({}));
  }

  /**
   * 创建智能外呼任务批次
   * 
   * @param request - CreateAiOutboundTaskBatchRequest
   * @returns CreateAiOutboundTaskBatchResponse
   */
  async createAiOutboundTaskBatch(request: CreateAiOutboundTaskBatchRequest): Promise<CreateAiOutboundTaskBatchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAiOutboundTaskBatchWithOptions(request, runtime);
  }

  /**
   * 创建部门信息
   * 
   * @param request - CreateDepartmentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDepartmentResponse
   */
  async createDepartmentWithOptions(request: CreateDepartmentRequest, runtime: $dara.RuntimeOptions): Promise<CreateDepartmentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.departmentName)) {
      query["DepartmentName"] = request.departmentName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDepartment",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<CreateDepartmentResponse>(await this.callApi(params, req, runtime), new CreateDepartmentResponse({}));
  }

  /**
   * 创建部门信息
   * 
   * @param request - CreateDepartmentRequest
   * @returns CreateDepartmentResponse
   */
  async createDepartment(request: CreateDepartmentRequest): Promise<CreateDepartmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDepartmentWithOptions(request, runtime);
  }

  /**
   * @param request - CreateOutboundTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateOutboundTaskResponse
   */
  async createOutboundTaskWithOptions(request: CreateOutboundTaskRequest, runtime: $dara.RuntimeOptions): Promise<CreateOutboundTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ani)) {
      query["Ani"] = request.ani;
    }

    if (!$dara.isNull(request.callInfos)) {
      query["CallInfos"] = request.callInfos;
    }

    if (!$dara.isNull(request.departmentId)) {
      query["DepartmentId"] = request.departmentId;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.extAttrs)) {
      query["ExtAttrs"] = request.extAttrs;
    }

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.model)) {
      query["Model"] = request.model;
    }

    if (!$dara.isNull(request.retryInterval)) {
      query["RetryInterval"] = request.retryInterval;
    }

    if (!$dara.isNull(request.retryTime)) {
      query["RetryTime"] = request.retryTime;
    }

    if (!$dara.isNull(request.skillGroup)) {
      query["SkillGroup"] = request.skillGroup;
    }

    if (!$dara.isNull(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    if (!$dara.isNull(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateOutboundTask",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<CreateOutboundTaskResponse>(await this.callApi(params, req, runtime), new CreateOutboundTaskResponse({}));
  }

  /**
   * @param request - CreateOutboundTaskRequest
   * @returns CreateOutboundTaskResponse
   */
  async createOutboundTask(request: CreateOutboundTaskRequest): Promise<CreateOutboundTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createOutboundTaskWithOptions(request, runtime);
  }

  /**
   * @param request - CreateQualityProjectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateQualityProjectResponse
   */
  async createQualityProjectWithOptions(request: CreateQualityProjectRequest, runtime: $dara.RuntimeOptions): Promise<CreateQualityProjectResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.analysisIds)) {
      body["AnalysisIds"] = request.analysisIds;
    }

    if (!$dara.isNull(request.channelTouchType)) {
      body["ChannelTouchType"] = request.channelTouchType;
    }

    if (!$dara.isNull(request.checkFreqType)) {
      body["CheckFreqType"] = request.checkFreqType;
    }

    if (!$dara.isNull(request.depList)) {
      body["DepList"] = request.depList;
    }

    if (!$dara.isNull(request.groupList)) {
      body["GroupList"] = request.groupList;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.projectName)) {
      body["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.scopeType)) {
      body["ScopeType"] = request.scopeType;
    }

    if (!$dara.isNull(request.servicerList)) {
      body["ServicerList"] = request.servicerList;
    }

    if (!$dara.isNull(request.timeRangeEnd)) {
      body["TimeRangeEnd"] = request.timeRangeEnd;
    }

    if (!$dara.isNull(request.timeRangeStart)) {
      body["TimeRangeStart"] = request.timeRangeStart;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateQualityProject",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<CreateQualityProjectResponse>(await this.callApi(params, req, runtime), new CreateQualityProjectResponse({}));
  }

  /**
   * @param request - CreateQualityProjectRequest
   * @returns CreateQualityProjectResponse
   */
  async createQualityProject(request: CreateQualityProjectRequest): Promise<CreateQualityProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createQualityProjectWithOptions(request, runtime);
  }

  /**
   * @param request - CreateQualityRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateQualityRuleResponse
   */
  async createQualityRuleWithOptions(request: CreateQualityRuleRequest, runtime: $dara.RuntimeOptions): Promise<CreateQualityRuleResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.keyWords)) {
      body["KeyWords"] = request.keyWords;
    }

    if (!$dara.isNull(request.matchType)) {
      body["MatchType"] = request.matchType;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.ruleTag)) {
      body["RuleTag"] = request.ruleTag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateQualityRule",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<CreateQualityRuleResponse>(await this.callApi(params, req, runtime), new CreateQualityRuleResponse({}));
  }

  /**
   * @param request - CreateQualityRuleRequest
   * @returns CreateQualityRuleResponse
   */
  async createQualityRule(request: CreateQualityRuleRequest): Promise<CreateQualityRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createQualityRuleWithOptions(request, runtime);
  }

  /**
   * @param request - CreateSkillGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSkillGroupResponse
   */
  async createSkillGroupWithOptions(request: CreateSkillGroupRequest, runtime: $dara.RuntimeOptions): Promise<CreateSkillGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.channelType)) {
      body["ChannelType"] = request.channelType;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.departmentId)) {
      body["DepartmentId"] = request.departmentId;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.displayName)) {
      body["DisplayName"] = request.displayName;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.skillGroupName)) {
      body["SkillGroupName"] = request.skillGroupName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSkillGroup",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<CreateSkillGroupResponse>(await this.callApi(params, req, runtime), new CreateSkillGroupResponse({}));
  }

  /**
   * @param request - CreateSkillGroupRequest
   * @returns CreateSkillGroupResponse
   */
  async createSkillGroup(request: CreateSkillGroupRequest): Promise<CreateSkillGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSkillGroupWithOptions(request, runtime);
  }

  /**
   * 创建外呼任务
   * 
   * @param request - CreateTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTaskResponse
   */
  async createTaskWithOptions(request: CreateTaskRequest, runtime: $dara.RuntimeOptions): Promise<CreateTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.callString)) {
      query["CallString"] = request.callString;
    }

    if (!$dara.isNull(request.callStringType)) {
      query["CallStringType"] = request.callStringType;
    }

    if (!$dara.isNull(request.caller)) {
      query["Caller"] = request.caller;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.retryCount)) {
      query["RetryCount"] = request.retryCount;
    }

    if (!$dara.isNull(request.retryFlag)) {
      query["RetryFlag"] = request.retryFlag;
    }

    if (!$dara.isNull(request.retryInterval)) {
      query["RetryInterval"] = request.retryInterval;
    }

    if (!$dara.isNull(request.retryStatusCode)) {
      query["RetryStatusCode"] = request.retryStatusCode;
    }

    if (!$dara.isNull(request.robotId)) {
      query["RobotId"] = request.robotId;
    }

    if (!$dara.isNull(request.seatCount)) {
      query["SeatCount"] = request.seatCount;
    }

    if (!$dara.isNull(request.startNow)) {
      query["StartNow"] = request.startNow;
    }

    if (!$dara.isNull(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    if (!$dara.isNull(request.workDay)) {
      query["WorkDay"] = request.workDay;
    }

    if (!$dara.isNull(request.workTimeList)) {
      query["WorkTimeList"] = request.workTimeList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTask",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<CreateTaskResponse>(await this.callApi(params, req, runtime), new CreateTaskResponse({}));
  }

  /**
   * 创建外呼任务
   * 
   * @param request - CreateTaskRequest
   * @returns CreateTaskResponse
   */
  async createTask(request: CreateTaskRequest): Promise<CreateTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createTaskWithOptions(request, runtime);
  }

  /**
   * 创建坐席并开通sso登录能力
   * 
   * @param request - CreateThirdSsoAgentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateThirdSsoAgentResponse
   */
  async createThirdSsoAgentWithOptions(request: CreateThirdSsoAgentRequest, runtime: $dara.RuntimeOptions): Promise<CreateThirdSsoAgentResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountId)) {
      body["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.accountName)) {
      body["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.clientId)) {
      body["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.displayName)) {
      body["DisplayName"] = request.displayName;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.roleIds)) {
      bodyFlat["RoleIds"] = request.roleIds;
    }

    if (!$dara.isNull(request.skillGroupIds)) {
      bodyFlat["SkillGroupIds"] = request.skillGroupIds;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateThirdSsoAgent",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<CreateThirdSsoAgentResponse>(await this.callApi(params, req, runtime), new CreateThirdSsoAgentResponse({}));
  }

  /**
   * 创建坐席并开通sso登录能力
   * 
   * @param request - CreateThirdSsoAgentRequest
   * @returns CreateThirdSsoAgentResponse
   */
  async createThirdSsoAgent(request: CreateThirdSsoAgentRequest): Promise<CreateThirdSsoAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createThirdSsoAgentWithOptions(request, runtime);
  }

  /**
   * 删除坐席账号
   * 
   * @param request - DeleteAgentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAgentResponse
   */
  async deleteAgentWithOptions(request: DeleteAgentRequest, runtime: $dara.RuntimeOptions): Promise<DeleteAgentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAgent",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "DELETE",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DeleteAgentResponse>(await this.callApi(params, req, runtime), new DeleteAgentResponse({}));
  }

  /**
   * 删除坐席账号
   * 
   * @param request - DeleteAgentRequest
   * @returns DeleteAgentResponse
   */
  async deleteAgent(request: DeleteAgentRequest): Promise<DeleteAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAgentWithOptions(request, runtime);
  }

  /**
   * 删除智能外呼任务
   * 
   * @param request - DeleteAiOutboundTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAiOutboundTaskResponse
   */
  async deleteAiOutboundTaskWithOptions(request: DeleteAiOutboundTaskRequest, runtime: $dara.RuntimeOptions): Promise<DeleteAiOutboundTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAiOutboundTask",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DeleteAiOutboundTaskResponse>(await this.callApi(params, req, runtime), new DeleteAiOutboundTaskResponse({}));
  }

  /**
   * 删除智能外呼任务
   * 
   * @param request - DeleteAiOutboundTaskRequest
   * @returns DeleteAiOutboundTaskResponse
   */
  async deleteAiOutboundTask(request: DeleteAiOutboundTaskRequest): Promise<DeleteAiOutboundTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAiOutboundTaskWithOptions(request, runtime);
  }

  /**
   * 删除部门信息
   * 
   * @param request - DeleteDepartmentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDepartmentResponse
   */
  async deleteDepartmentWithOptions(request: DeleteDepartmentRequest, runtime: $dara.RuntimeOptions): Promise<DeleteDepartmentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.departmentId)) {
      query["DepartmentId"] = request.departmentId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDepartment",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DeleteDepartmentResponse>(await this.callApi(params, req, runtime), new DeleteDepartmentResponse({}));
  }

  /**
   * 删除部门信息
   * 
   * @param request - DeleteDepartmentRequest
   * @returns DeleteDepartmentResponse
   */
  async deleteDepartment(request: DeleteDepartmentRequest): Promise<DeleteDepartmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDepartmentWithOptions(request, runtime);
  }

  /**
   * 删除热线号码
   * 
   * @param request - DeleteHotlineNumberRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteHotlineNumberResponse
   */
  async deleteHotlineNumberWithOptions(request: DeleteHotlineNumberRequest, runtime: $dara.RuntimeOptions): Promise<DeleteHotlineNumberResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.hotlineNumber)) {
      body["HotlineNumber"] = request.hotlineNumber;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteHotlineNumber",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DeleteHotlineNumberResponse>(await this.callApi(params, req, runtime), new DeleteHotlineNumberResponse({}));
  }

  /**
   * 删除热线号码
   * 
   * @param request - DeleteHotlineNumberRequest
   * @returns DeleteHotlineNumberResponse
   */
  async deleteHotlineNumber(request: DeleteHotlineNumberRequest): Promise<DeleteHotlineNumberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteHotlineNumberWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteOutboundTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteOutboundTaskResponse
   */
  async deleteOutboundTaskWithOptions(request: DeleteOutboundTaskRequest, runtime: $dara.RuntimeOptions): Promise<DeleteOutboundTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.outboundTaskId)) {
      query["OutboundTaskId"] = request.outboundTaskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteOutboundTask",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DeleteOutboundTaskResponse>(await this.callApi(params, req, runtime), new DeleteOutboundTaskResponse({}));
  }

  /**
   * @param request - DeleteOutboundTaskRequest
   * @returns DeleteOutboundTaskResponse
   */
  async deleteOutboundTask(request: DeleteOutboundTaskRequest): Promise<DeleteOutboundTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteOutboundTaskWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteOuterAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteOuterAccountResponse
   */
  async deleteOuterAccountWithOptions(request: DeleteOuterAccountRequest, runtime: $dara.RuntimeOptions): Promise<DeleteOuterAccountResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteOuterAccount",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DeleteOuterAccountResponse>(await this.callApi(params, req, runtime), new DeleteOuterAccountResponse({}));
  }

  /**
   * @param request - DeleteOuterAccountRequest
   * @returns DeleteOuterAccountResponse
   */
  async deleteOuterAccount(request: DeleteOuterAccountRequest): Promise<DeleteOuterAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteOuterAccountWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteQualityProjectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteQualityProjectResponse
   */
  async deleteQualityProjectWithOptions(request: DeleteQualityProjectRequest, runtime: $dara.RuntimeOptions): Promise<DeleteQualityProjectResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteQualityProject",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DeleteQualityProjectResponse>(await this.callApi(params, req, runtime), new DeleteQualityProjectResponse({}));
  }

  /**
   * @param request - DeleteQualityProjectRequest
   * @returns DeleteQualityProjectResponse
   */
  async deleteQualityProject(request: DeleteQualityProjectRequest): Promise<DeleteQualityProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteQualityProjectWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteQualityRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteQualityRuleResponse
   */
  async deleteQualityRuleWithOptions(request: DeleteQualityRuleRequest, runtime: $dara.RuntimeOptions): Promise<DeleteQualityRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteQualityRule",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DeleteQualityRuleResponse>(await this.callApi(params, req, runtime), new DeleteQualityRuleResponse({}));
  }

  /**
   * @param request - DeleteQualityRuleRequest
   * @returns DeleteQualityRuleResponse
   */
  async deleteQualityRule(request: DeleteQualityRuleRequest): Promise<DeleteQualityRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteQualityRuleWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteSkillGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSkillGroupResponse
   */
  async deleteSkillGroupWithOptions(request: DeleteSkillGroupRequest, runtime: $dara.RuntimeOptions): Promise<DeleteSkillGroupResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSkillGroup",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DeleteSkillGroupResponse>(await this.callApi(params, req, runtime), new DeleteSkillGroupResponse({}));
  }

  /**
   * @param request - DeleteSkillGroupRequest
   * @returns DeleteSkillGroupResponse
   */
  async deleteSkillGroup(request: DeleteSkillGroupRequest): Promise<DeleteSkillGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSkillGroupWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeRecordDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRecordDataResponse
   */
  async describeRecordDataWithOptions(request: DescribeRecordDataRequest, runtime: $dara.RuntimeOptions): Promise<DescribeRecordDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.accountType)) {
      query["AccountType"] = request.accountType;
    }

    if (!$dara.isNull(request.acid)) {
      query["Acid"] = request.acid;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.secLevel)) {
      query["SecLevel"] = request.secLevel;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRecordData",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DescribeRecordDataResponse>(await this.callApi(params, req, runtime), new DescribeRecordDataResponse({}));
  }

  /**
   * @param request - DescribeRecordDataRequest
   * @returns DescribeRecordDataResponse
   */
  async describeRecordData(request: DescribeRecordDataRequest): Promise<DescribeRecordDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRecordDataWithOptions(request, runtime);
  }

  /**
   * @param request - EditQualityProjectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EditQualityProjectResponse
   */
  async editQualityProjectWithOptions(request: EditQualityProjectRequest, runtime: $dara.RuntimeOptions): Promise<EditQualityProjectResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.analysisIds)) {
      query["AnalysisIds"] = request.analysisIds;
    }

    if (!$dara.isNull(request.channelTouchType)) {
      query["ChannelTouchType"] = request.channelTouchType;
    }

    if (!$dara.isNull(request.checkFreqType)) {
      query["CheckFreqType"] = request.checkFreqType;
    }

    if (!$dara.isNull(request.depList)) {
      query["DepList"] = request.depList;
    }

    if (!$dara.isNull(request.groupList)) {
      query["GroupList"] = request.groupList;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.projectVersion)) {
      query["ProjectVersion"] = request.projectVersion;
    }

    if (!$dara.isNull(request.scopeType)) {
      query["ScopeType"] = request.scopeType;
    }

    if (!$dara.isNull(request.servicerList)) {
      query["ServicerList"] = request.servicerList;
    }

    if (!$dara.isNull(request.timeRangeEnd)) {
      query["TimeRangeEnd"] = request.timeRangeEnd;
    }

    if (!$dara.isNull(request.timeRangeStart)) {
      query["TimeRangeStart"] = request.timeRangeStart;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.projectName)) {
      body["ProjectName"] = request.projectName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "EditQualityProject",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<EditQualityProjectResponse>(await this.callApi(params, req, runtime), new EditQualityProjectResponse({}));
  }

  /**
   * @param request - EditQualityProjectRequest
   * @returns EditQualityProjectResponse
   */
  async editQualityProject(request: EditQualityProjectRequest): Promise<EditQualityProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.editQualityProjectWithOptions(request, runtime);
  }

  /**
   * @param request - EditQualityRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EditQualityRuleResponse
   */
  async editQualityRuleWithOptions(request: EditQualityRuleRequest, runtime: $dara.RuntimeOptions): Promise<EditQualityRuleResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.keyWords)) {
      body["KeyWords"] = request.keyWords;
    }

    if (!$dara.isNull(request.matchType)) {
      body["MatchType"] = request.matchType;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.qualityRuleId)) {
      body["QualityRuleId"] = request.qualityRuleId;
    }

    if (!$dara.isNull(request.ruleTag)) {
      body["RuleTag"] = request.ruleTag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "EditQualityRule",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<EditQualityRuleResponse>(await this.callApi(params, req, runtime), new EditQualityRuleResponse({}));
  }

  /**
   * @param request - EditQualityRuleRequest
   * @returns EditQualityRuleResponse
   */
  async editQualityRule(request: EditQualityRuleRequest): Promise<EditQualityRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.editQualityRuleWithOptions(request, runtime);
  }

  /**
   * @param request - EditQualityRuleTagRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EditQualityRuleTagResponse
   */
  async editQualityRuleTagWithOptions(request: EditQualityRuleTagRequest, runtime: $dara.RuntimeOptions): Promise<EditQualityRuleTagResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.analysisTypes)) {
      query["AnalysisTypes"] = request.analysisTypes;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EditQualityRuleTag",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<EditQualityRuleTagResponse>(await this.callApi(params, req, runtime), new EditQualityRuleTagResponse({}));
  }

  /**
   * @param request - EditQualityRuleTagRequest
   * @returns EditQualityRuleTagResponse
   */
  async editQualityRuleTag(request: EditQualityRuleTagRequest): Promise<EditQualityRuleTagResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.editQualityRuleTagWithOptions(request, runtime);
  }

  /**
   * 热线号码加密
   * 
   * @param request - EncryptPhoneNumRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EncryptPhoneNumResponse
   */
  async encryptPhoneNumWithOptions(request: EncryptPhoneNumRequest, runtime: $dara.RuntimeOptions): Promise<EncryptPhoneNumResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EncryptPhoneNum",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<EncryptPhoneNumResponse>(await this.callApi(params, req, runtime), new EncryptPhoneNumResponse({}));
  }

  /**
   * 热线号码加密
   * 
   * @param request - EncryptPhoneNumRequest
   * @returns EncryptPhoneNumResponse
   */
  async encryptPhoneNum(request: EncryptPhoneNumRequest): Promise<EncryptPhoneNumResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.encryptPhoneNumWithOptions(request, runtime);
  }

  /**
   * @param request - FetchCallRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FetchCallResponse
   */
  async fetchCallWithOptions(request: FetchCallRequest, runtime: $dara.RuntimeOptions): Promise<FetchCallResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountName)) {
      body["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.callId)) {
      body["CallId"] = request.callId;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.connectionId)) {
      body["ConnectionId"] = request.connectionId;
    }

    if (!$dara.isNull(request.holdConnectionId)) {
      body["HoldConnectionId"] = request.holdConnectionId;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.jobId)) {
      body["JobId"] = request.jobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "FetchCall",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<FetchCallResponse>(await this.callApi(params, req, runtime), new FetchCallResponse({}));
  }

  /**
   * @param request - FetchCallRequest
   * @returns FetchCallResponse
   */
  async fetchCall(request: FetchCallRequest): Promise<FetchCallResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.fetchCallWithOptions(request, runtime);
  }

  /**
   * @param request - FinishHotlineServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FinishHotlineServiceResponse
   */
  async finishHotlineServiceWithOptions(request: FinishHotlineServiceRequest, runtime: $dara.RuntimeOptions): Promise<FinishHotlineServiceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountName)) {
      body["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "FinishHotlineService",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<FinishHotlineServiceResponse>(await this.callApi(params, req, runtime), new FinishHotlineServiceResponse({}));
  }

  /**
   * @param request - FinishHotlineServiceRequest
   * @returns FinishHotlineServiceResponse
   */
  async finishHotlineService(request: FinishHotlineServiceRequest): Promise<FinishHotlineServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.finishHotlineServiceWithOptions(request, runtime);
  }

  /**
   * @param request - GenerateWebSocketSignRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateWebSocketSignResponse
   */
  async generateWebSocketSignWithOptions(request: GenerateWebSocketSignRequest, runtime: $dara.RuntimeOptions): Promise<GenerateWebSocketSignResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountName)) {
      body["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GenerateWebSocketSign",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GenerateWebSocketSignResponse>(await this.callApi(params, req, runtime), new GenerateWebSocketSignResponse({}));
  }

  /**
   * @param request - GenerateWebSocketSignRequest
   * @returns GenerateWebSocketSignResponse
   */
  async generateWebSocketSign(request: GenerateWebSocketSignRequest): Promise<GenerateWebSocketSignResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.generateWebSocketSignWithOptions(request, runtime);
  }

  /**
   * @param request - GetAgentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAgentResponse
   */
  async getAgentWithOptions(request: GetAgentRequest, runtime: $dara.RuntimeOptions): Promise<GetAgentResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAgent",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetAgentResponse>(await this.callApi(params, req, runtime), new GetAgentResponse({}));
  }

  /**
   * @param request - GetAgentRequest
   * @returns GetAgentResponse
   */
  async getAgent(request: GetAgentRequest): Promise<GetAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAgentWithOptions(request, runtime);
  }

  /**
   * 坐席纬度基础状态量
   * 
   * @param tmpReq - GetAgentBasisStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAgentBasisStatusResponse
   */
  async getAgentBasisStatusWithOptions(tmpReq: GetAgentBasisStatusRequest, runtime: $dara.RuntimeOptions): Promise<GetAgentBasisStatusResponse> {
    tmpReq.validate();
    let request = new GetAgentBasisStatusShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.agentIds)) {
      request.agentIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.agentIds, "AgentIds", "simple");
    }

    if (!$dara.isNull(tmpReq.depIds)) {
      request.depIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.depIds, "DepIds", "simple");
    }

    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAgentBasisStatus",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetAgentBasisStatusResponse>(await this.callApi(params, req, runtime), new GetAgentBasisStatusResponse({}));
  }

  /**
   * 坐席纬度基础状态量
   * 
   * @param request - GetAgentBasisStatusRequest
   * @returns GetAgentBasisStatusResponse
   */
  async getAgentBasisStatus(request: GetAgentBasisStatusRequest): Promise<GetAgentBasisStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAgentBasisStatusWithOptions(request, runtime);
  }

  /**
   * @param request - GetAgentByIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAgentByIdResponse
   */
  async getAgentByIdWithOptions(request: GetAgentByIdRequest, runtime: $dara.RuntimeOptions): Promise<GetAgentByIdResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.agentId)) {
      body["AgentId"] = request.agentId;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAgentById",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetAgentByIdResponse>(await this.callApi(params, req, runtime), new GetAgentByIdResponse({}));
  }

  /**
   * @param request - GetAgentByIdRequest
   * @returns GetAgentByIdResponse
   */
  async getAgentById(request: GetAgentByIdRequest): Promise<GetAgentByIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAgentByIdWithOptions(request, runtime);
  }

  /**
   * 热线坐席纬度详情汇总
   * 
   * @param tmpReq - GetAgentDetailReportRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAgentDetailReportResponse
   */
  async getAgentDetailReportWithOptions(tmpReq: GetAgentDetailReportRequest, runtime: $dara.RuntimeOptions): Promise<GetAgentDetailReportResponse> {
    tmpReq.validate();
    let request = new GetAgentDetailReportShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.agentIds)) {
      request.agentIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.agentIds, "AgentIds", "simple");
    }

    if (!$dara.isNull(tmpReq.depIds)) {
      request.depIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.depIds, "DepIds", "simple");
    }

    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAgentDetailReport",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetAgentDetailReportResponse>(await this.callApi(params, req, runtime), new GetAgentDetailReportResponse({}));
  }

  /**
   * 热线坐席纬度详情汇总
   * 
   * @param request - GetAgentDetailReportRequest
   * @returns GetAgentDetailReportResponse
   */
  async getAgentDetailReport(request: GetAgentDetailReportRequest): Promise<GetAgentDetailReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAgentDetailReportWithOptions(request, runtime);
  }

  /**
   * @param request - GetAgentIndexRealTimeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAgentIndexRealTimeResponse
   */
  async getAgentIndexRealTimeWithOptions(request: GetAgentIndexRealTimeRequest, runtime: $dara.RuntimeOptions): Promise<GetAgentIndexRealTimeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.depIds)) {
      query["DepIds"] = request.depIds;
    }

    if (!$dara.isNull(request.groupIds)) {
      query["GroupIds"] = request.groupIds;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAgentIndexRealTime",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetAgentIndexRealTimeResponse>(await this.callApi(params, req, runtime), new GetAgentIndexRealTimeResponse({}));
  }

  /**
   * @param request - GetAgentIndexRealTimeRequest
   * @returns GetAgentIndexRealTimeResponse
   */
  async getAgentIndexRealTime(request: GetAgentIndexRealTimeRequest): Promise<GetAgentIndexRealTimeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAgentIndexRealTimeWithOptions(request, runtime);
  }

  /**
   * 坐席服务状态量
   * 
   * @param tmpReq - GetAgentServiceStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAgentServiceStatusResponse
   */
  async getAgentServiceStatusWithOptions(tmpReq: GetAgentServiceStatusRequest, runtime: $dara.RuntimeOptions): Promise<GetAgentServiceStatusResponse> {
    tmpReq.validate();
    let request = new GetAgentServiceStatusShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.agentIds)) {
      request.agentIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.agentIds, "AgentIds", "simple");
    }

    if (!$dara.isNull(tmpReq.depIds)) {
      request.depIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.depIds, "DepIds", "simple");
    }

    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAgentServiceStatus",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetAgentServiceStatusResponse>(await this.callApi(params, req, runtime), new GetAgentServiceStatusResponse({}));
  }

  /**
   * 坐席服务状态量
   * 
   * @param request - GetAgentServiceStatusRequest
   * @returns GetAgentServiceStatusResponse
   */
  async getAgentServiceStatus(request: GetAgentServiceStatusRequest): Promise<GetAgentServiceStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAgentServiceStatusWithOptions(request, runtime);
  }

  /**
   * 坐席纬度统计量
   * 
   * @param tmpReq - GetAgentStatisticsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAgentStatisticsResponse
   */
  async getAgentStatisticsWithOptions(tmpReq: GetAgentStatisticsRequest, runtime: $dara.RuntimeOptions): Promise<GetAgentStatisticsResponse> {
    tmpReq.validate();
    let request = new GetAgentStatisticsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.agentIds)) {
      request.agentIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.agentIds, "AgentIds", "simple");
    }

    if (!$dara.isNull(tmpReq.depIds)) {
      request.depIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.depIds, "DepIds", "simple");
    }

    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAgentStatistics",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetAgentStatisticsResponse>(await this.callApi(params, req, runtime), new GetAgentStatisticsResponse({}));
  }

  /**
   * 坐席纬度统计量
   * 
   * @param request - GetAgentStatisticsRequest
   * @returns GetAgentStatisticsResponse
   */
  async getAgentStatistics(request: GetAgentStatisticsRequest): Promise<GetAgentStatisticsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAgentStatisticsWithOptions(request, runtime);
  }

  /**
   * 获取智能外呼任务业务自定义信息
   * 
   * @param request - GetAiOutboundTaskBizDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAiOutboundTaskBizDataResponse
   */
  async getAiOutboundTaskBizDataWithOptions(request: GetAiOutboundTaskBizDataRequest, runtime: $dara.RuntimeOptions): Promise<GetAiOutboundTaskBizDataResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAiOutboundTaskBizData",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetAiOutboundTaskBizDataResponse>(await this.callApi(params, req, runtime), new GetAiOutboundTaskBizDataResponse({}));
  }

  /**
   * 获取智能外呼任务业务自定义信息
   * 
   * @param request - GetAiOutboundTaskBizDataRequest
   * @returns GetAiOutboundTaskBizDataResponse
   */
  async getAiOutboundTaskBizData(request: GetAiOutboundTaskBizDataRequest): Promise<GetAiOutboundTaskBizDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAiOutboundTaskBizDataWithOptions(request, runtime);
  }

  /**
   * 智能外呼任务配置详情查询
   * 
   * @param request - GetAiOutboundTaskDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAiOutboundTaskDetailResponse
   */
  async getAiOutboundTaskDetailWithOptions(request: GetAiOutboundTaskDetailRequest, runtime: $dara.RuntimeOptions): Promise<GetAiOutboundTaskDetailResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAiOutboundTaskDetail",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetAiOutboundTaskDetailResponse>(await this.callApi(params, req, runtime), new GetAiOutboundTaskDetailResponse({}));
  }

  /**
   * 智能外呼任务配置详情查询
   * 
   * @param request - GetAiOutboundTaskDetailRequest
   * @returns GetAiOutboundTaskDetailResponse
   */
  async getAiOutboundTaskDetail(request: GetAiOutboundTaskDetailRequest): Promise<GetAiOutboundTaskDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAiOutboundTaskDetailWithOptions(request, runtime);
  }

  /**
   * 智能外呼任务执行详情
   * 
   * @param request - GetAiOutboundTaskExecDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAiOutboundTaskExecDetailResponse
   */
  async getAiOutboundTaskExecDetailWithOptions(request: GetAiOutboundTaskExecDetailRequest, runtime: $dara.RuntimeOptions): Promise<GetAiOutboundTaskExecDetailResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAiOutboundTaskExecDetail",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetAiOutboundTaskExecDetailResponse>(await this.callApi(params, req, runtime), new GetAiOutboundTaskExecDetailResponse({}));
  }

  /**
   * 智能外呼任务执行详情
   * 
   * @param request - GetAiOutboundTaskExecDetailRequest
   * @returns GetAiOutboundTaskExecDetailResponse
   */
  async getAiOutboundTaskExecDetail(request: GetAiOutboundTaskExecDetailRequest): Promise<GetAiOutboundTaskExecDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAiOutboundTaskExecDetailWithOptions(request, runtime);
  }

  /**
   * 智能外呼任务列表查询
   * 
   * @param request - GetAiOutboundTaskListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAiOutboundTaskListResponse
   */
  async getAiOutboundTaskListWithOptions(request: GetAiOutboundTaskListRequest, runtime: $dara.RuntimeOptions): Promise<GetAiOutboundTaskListResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAiOutboundTaskList",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetAiOutboundTaskListResponse>(await this.callApi(params, req, runtime), new GetAiOutboundTaskListResponse({}));
  }

  /**
   * 智能外呼任务列表查询
   * 
   * @param request - GetAiOutboundTaskListRequest
   * @returns GetAiOutboundTaskListResponse
   */
  async getAiOutboundTaskList(request: GetAiOutboundTaskListRequest): Promise<GetAiOutboundTaskListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAiOutboundTaskListWithOptions(request, runtime);
  }

  /**
   * 智能外呼任务执行进度
   * 
   * @param request - GetAiOutboundTaskProgressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAiOutboundTaskProgressResponse
   */
  async getAiOutboundTaskProgressWithOptions(request: GetAiOutboundTaskProgressRequest, runtime: $dara.RuntimeOptions): Promise<GetAiOutboundTaskProgressResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAiOutboundTaskProgress",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetAiOutboundTaskProgressResponse>(await this.callApi(params, req, runtime), new GetAiOutboundTaskProgressResponse({}));
  }

  /**
   * 智能外呼任务执行进度
   * 
   * @param request - GetAiOutboundTaskProgressRequest
   * @returns GetAiOutboundTaskProgressResponse
   */
  async getAiOutboundTaskProgress(request: GetAiOutboundTaskProgressRequest): Promise<GetAiOutboundTaskProgressResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAiOutboundTaskProgressWithOptions(request, runtime);
  }

  /**
   * getAllDepartment
   * 
   * @param request - GetAllDepartmentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAllDepartmentResponse
   */
  async getAllDepartmentWithOptions(request: GetAllDepartmentRequest, runtime: $dara.RuntimeOptions): Promise<GetAllDepartmentResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAllDepartment",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetAllDepartmentResponse>(await this.callApi(params, req, runtime), new GetAllDepartmentResponse({}));
  }

  /**
   * getAllDepartment
   * 
   * @param request - GetAllDepartmentRequest
   * @returns GetAllDepartmentResponse
   */
  async getAllDepartment(request: GetAllDepartmentRequest): Promise<GetAllDepartmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAllDepartmentWithOptions(request, runtime);
  }

  /**
   * 获取通话录音文件
   * 
   * @param request - GetCallSoundRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCallSoundRecordResponse
   */
  async getCallSoundRecordWithOptions(request: GetCallSoundRecordRequest, runtime: $dara.RuntimeOptions): Promise<GetCallSoundRecordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.callId)) {
      query["CallId"] = request.callId;
    }

    if (!$dara.isNull(request.createTime)) {
      query["CreateTime"] = request.createTime;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCallSoundRecord",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetCallSoundRecordResponse>(await this.callApi(params, req, runtime), new GetCallSoundRecordResponse({}));
  }

  /**
   * 获取通话录音文件
   * 
   * @param request - GetCallSoundRecordRequest
   * @returns GetCallSoundRecordResponse
   */
  async getCallSoundRecord(request: GetCallSoundRecordRequest): Promise<GetCallSoundRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCallSoundRecordWithOptions(request, runtime);
  }

  /**
   * 获取热线配置号码列表
   * 
   * @param request - GetConfigNumListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetConfigNumListResponse
   */
  async getConfigNumListWithOptions(request: GetConfigNumListRequest, runtime: $dara.RuntimeOptions): Promise<GetConfigNumListResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetConfigNumList",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetConfigNumListResponse>(await this.callApi(params, req, runtime), new GetConfigNumListResponse({}));
  }

  /**
   * 获取热线配置号码列表
   * 
   * @param request - GetConfigNumListRequest
   * @returns GetConfigNumListResponse
   */
  async getConfigNumList(request: GetConfigNumListRequest): Promise<GetConfigNumListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getConfigNumListWithOptions(request, runtime);
  }

  /**
   * 获取会员信息
   * 
   * @param request - GetCustomerInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCustomerInfoResponse
   */
  async getCustomerInfoWithOptions(request: GetCustomerInfoRequest, runtime: $dara.RuntimeOptions): Promise<GetCustomerInfoResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCustomerInfo",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetCustomerInfoResponse>(await this.callApi(params, req, runtime), new GetCustomerInfoResponse({}));
  }

  /**
   * 获取会员信息
   * 
   * @param request - GetCustomerInfoRequest
   * @returns GetCustomerInfoResponse
   */
  async getCustomerInfo(request: GetCustomerInfoRequest): Promise<GetCustomerInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCustomerInfoWithOptions(request, runtime);
  }

  /**
   * 获取技能组分组
   * 
   * @param request - GetDepGroupTreeDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDepGroupTreeDataResponse
   */
  async getDepGroupTreeDataWithOptions(request: GetDepGroupTreeDataRequest, runtime: $dara.RuntimeOptions): Promise<GetDepGroupTreeDataResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDepGroupTreeData",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetDepGroupTreeDataResponse>(await this.callApi(params, req, runtime), new GetDepGroupTreeDataResponse({}));
  }

  /**
   * 获取技能组分组
   * 
   * @param request - GetDepGroupTreeDataRequest
   * @returns GetDepGroupTreeDataResponse
   */
  async getDepGroupTreeData(request: GetDepGroupTreeDataRequest): Promise<GetDepGroupTreeDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDepGroupTreeDataWithOptions(request, runtime);
  }

  /**
   * 部门纬度坐席状态量
   * 
   * @param tmpReq - GetDepartmentalLatitudeAgentStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDepartmentalLatitudeAgentStatusResponse
   */
  async getDepartmentalLatitudeAgentStatusWithOptions(tmpReq: GetDepartmentalLatitudeAgentStatusRequest, runtime: $dara.RuntimeOptions): Promise<GetDepartmentalLatitudeAgentStatusResponse> {
    tmpReq.validate();
    let request = new GetDepartmentalLatitudeAgentStatusShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.depIds)) {
      request.depIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.depIds, "DepIds", "simple");
    }

    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDepartmentalLatitudeAgentStatus",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetDepartmentalLatitudeAgentStatusResponse>(await this.callApi(params, req, runtime), new GetDepartmentalLatitudeAgentStatusResponse({}));
  }

  /**
   * 部门纬度坐席状态量
   * 
   * @param request - GetDepartmentalLatitudeAgentStatusRequest
   * @returns GetDepartmentalLatitudeAgentStatusResponse
   */
  async getDepartmentalLatitudeAgentStatus(request: GetDepartmentalLatitudeAgentStatusRequest): Promise<GetDepartmentalLatitudeAgentStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDepartmentalLatitudeAgentStatusWithOptions(request, runtime);
  }

  /**
   * @param request - GetHotlineAgentDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHotlineAgentDetailResponse
   */
  async getHotlineAgentDetailWithOptions(request: GetHotlineAgentDetailRequest, runtime: $dara.RuntimeOptions): Promise<GetHotlineAgentDetailResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetHotlineAgentDetail",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetHotlineAgentDetailResponse>(await this.callApi(params, req, runtime), new GetHotlineAgentDetailResponse({}));
  }

  /**
   * @param request - GetHotlineAgentDetailRequest
   * @returns GetHotlineAgentDetailResponse
   */
  async getHotlineAgentDetail(request: GetHotlineAgentDetailRequest): Promise<GetHotlineAgentDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getHotlineAgentDetailWithOptions(request, runtime);
  }

  /**
   * @param request - GetHotlineAgentDetailReportRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHotlineAgentDetailReportResponse
   */
  async getHotlineAgentDetailReportWithOptions(request: GetHotlineAgentDetailReportRequest, runtime: $dara.RuntimeOptions): Promise<GetHotlineAgentDetailReportResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.depIds)) {
      query["DepIds"] = request.depIds;
    }

    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.groupIds)) {
      query["GroupIds"] = request.groupIds;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetHotlineAgentDetailReport",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetHotlineAgentDetailReportResponse>(await this.callApi(params, req, runtime), new GetHotlineAgentDetailReportResponse({}));
  }

  /**
   * @param request - GetHotlineAgentDetailReportRequest
   * @returns GetHotlineAgentDetailReportResponse
   */
  async getHotlineAgentDetailReport(request: GetHotlineAgentDetailReportRequest): Promise<GetHotlineAgentDetailReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getHotlineAgentDetailReportWithOptions(request, runtime);
  }

  /**
   * @param request - GetHotlineAgentStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHotlineAgentStatusResponse
   */
  async getHotlineAgentStatusWithOptions(request: GetHotlineAgentStatusRequest, runtime: $dara.RuntimeOptions): Promise<GetHotlineAgentStatusResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountName)) {
      body["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetHotlineAgentStatus",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetHotlineAgentStatusResponse>(await this.callApi(params, req, runtime), new GetHotlineAgentStatusResponse({}));
  }

  /**
   * @param request - GetHotlineAgentStatusRequest
   * @returns GetHotlineAgentStatusResponse
   */
  async getHotlineAgentStatus(request: GetHotlineAgentStatusRequest): Promise<GetHotlineAgentStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getHotlineAgentStatusWithOptions(request, runtime);
  }

  /**
   * 查询话务动作结果数据
   * 
   * @param request - GetHotlineCallActionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHotlineCallActionResponse
   */
  async getHotlineCallActionWithOptions(request: GetHotlineCallActionRequest, runtime: $dara.RuntimeOptions): Promise<GetHotlineCallActionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.acc)) {
      body["Acc"] = request.acc;
    }

    if (!$dara.isNull(request.accountName)) {
      body["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.act)) {
      body["Act"] = request.act;
    }

    if (!$dara.isNull(request.biz)) {
      body["Biz"] = request.biz;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.fromSource)) {
      body["FromSource"] = request.fromSource;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetHotlineCallAction",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetHotlineCallActionResponse>(await this.callApi(params, req, runtime), new GetHotlineCallActionResponse({}));
  }

  /**
   * 查询话务动作结果数据
   * 
   * @param request - GetHotlineCallActionRequest
   * @returns GetHotlineCallActionResponse
   */
  async getHotlineCallAction(request: GetHotlineCallActionRequest): Promise<GetHotlineCallActionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getHotlineCallActionWithOptions(request, runtime);
  }

  /**
   * @param request - GetHotlineGroupDetailReportRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHotlineGroupDetailReportResponse
   */
  async getHotlineGroupDetailReportWithOptions(request: GetHotlineGroupDetailReportRequest, runtime: $dara.RuntimeOptions): Promise<GetHotlineGroupDetailReportResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.depIds)) {
      query["DepIds"] = request.depIds;
    }

    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.groupIds)) {
      query["GroupIds"] = request.groupIds;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetHotlineGroupDetailReport",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetHotlineGroupDetailReportResponse>(await this.callApi(params, req, runtime), new GetHotlineGroupDetailReportResponse({}));
  }

  /**
   * @param request - GetHotlineGroupDetailReportRequest
   * @returns GetHotlineGroupDetailReportResponse
   */
  async getHotlineGroupDetailReport(request: GetHotlineGroupDetailReportRequest): Promise<GetHotlineGroupDetailReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getHotlineGroupDetailReportWithOptions(request, runtime);
  }

  /**
   * 获取热线聊天记录
   * 
   * @param request - GetHotlineMessageLogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHotlineMessageLogResponse
   */
  async getHotlineMessageLogWithOptions(request: GetHotlineMessageLogRequest, runtime: $dara.RuntimeOptions): Promise<GetHotlineMessageLogResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetHotlineMessageLog",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetHotlineMessageLogResponse>(await this.callApi(params, req, runtime), new GetHotlineMessageLogResponse({}));
  }

  /**
   * 获取热线聊天记录
   * 
   * @param request - GetHotlineMessageLogRequest
   * @returns GetHotlineMessageLogResponse
   */
  async getHotlineMessageLog(request: GetHotlineMessageLogRequest): Promise<GetHotlineMessageLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getHotlineMessageLogWithOptions(request, runtime);
  }

  /**
   * 获取热线当前信息
   * 
   * @param request - GetHotlineRuntimeInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHotlineRuntimeInfoResponse
   */
  async getHotlineRuntimeInfoWithOptions(request: GetHotlineRuntimeInfoRequest, runtime: $dara.RuntimeOptions): Promise<GetHotlineRuntimeInfoResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetHotlineRuntimeInfo",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetHotlineRuntimeInfoResponse>(await this.callApi(params, req, runtime), new GetHotlineRuntimeInfoResponse({}));
  }

  /**
   * 获取热线当前信息
   * 
   * @param request - GetHotlineRuntimeInfoRequest
   * @returns GetHotlineRuntimeInfoResponse
   */
  async getHotlineRuntimeInfo(request: GetHotlineRuntimeInfoRequest): Promise<GetHotlineRuntimeInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getHotlineRuntimeInfoWithOptions(request, runtime);
  }

  /**
   * 服务统计量数据
   * 
   * @param tmpReq - GetHotlineServiceStatisticsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHotlineServiceStatisticsResponse
   */
  async getHotlineServiceStatisticsWithOptions(tmpReq: GetHotlineServiceStatisticsRequest, runtime: $dara.RuntimeOptions): Promise<GetHotlineServiceStatisticsResponse> {
    tmpReq.validate();
    let request = new GetHotlineServiceStatisticsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.agentIds)) {
      request.agentIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.agentIds, "AgentIds", "simple");
    }

    if (!$dara.isNull(tmpReq.depIds)) {
      request.depIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.depIds, "DepIds", "simple");
    }

    if (!$dara.isNull(tmpReq.groupIds)) {
      request.groupIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.groupIds, "GroupIds", "simple");
    }

    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetHotlineServiceStatistics",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetHotlineServiceStatisticsResponse>(await this.callApi(params, req, runtime), new GetHotlineServiceStatisticsResponse({}));
  }

  /**
   * 服务统计量数据
   * 
   * @param request - GetHotlineServiceStatisticsRequest
   * @returns GetHotlineServiceStatisticsResponse
   */
  async getHotlineServiceStatistics(request: GetHotlineServiceStatisticsRequest): Promise<GetHotlineServiceStatisticsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getHotlineServiceStatisticsWithOptions(request, runtime);
  }

  /**
   * @param request - GetHotlineWaitingNumberRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHotlineWaitingNumberResponse
   */
  async getHotlineWaitingNumberWithOptions(request: GetHotlineWaitingNumberRequest, runtime: $dara.RuntimeOptions): Promise<GetHotlineWaitingNumberResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetHotlineWaitingNumber",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetHotlineWaitingNumberResponse>(await this.callApi(params, req, runtime), new GetHotlineWaitingNumberResponse({}));
  }

  /**
   * @param request - GetHotlineWaitingNumberRequest
   * @returns GetHotlineWaitingNumberResponse
   */
  async getHotlineWaitingNumber(request: GetHotlineWaitingNumberRequest): Promise<GetHotlineWaitingNumberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getHotlineWaitingNumberWithOptions(request, runtime);
  }

  /**
   * @param request - GetIndexCurrentValueRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetIndexCurrentValueResponse
   */
  async getIndexCurrentValueWithOptions(request: GetIndexCurrentValueRequest, runtime: $dara.RuntimeOptions): Promise<GetIndexCurrentValueResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.depIds)) {
      query["DepIds"] = request.depIds;
    }

    if (!$dara.isNull(request.groupIds)) {
      query["GroupIds"] = request.groupIds;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetIndexCurrentValue",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetIndexCurrentValueResponse>(await this.callApi(params, req, runtime), new GetIndexCurrentValueResponse({}));
  }

  /**
   * @param request - GetIndexCurrentValueRequest
   * @returns GetIndexCurrentValueResponse
   */
  async getIndexCurrentValue(request: GetIndexCurrentValueRequest): Promise<GetIndexCurrentValueResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getIndexCurrentValueWithOptions(request, runtime);
  }

  /**
   * @param request - GetInstanceListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceListResponse
   */
  async getInstanceListWithOptions(request: GetInstanceListRequest, runtime: $dara.RuntimeOptions): Promise<GetInstanceListResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInstanceList",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetInstanceListResponse>(await this.callApi(params, req, runtime), new GetInstanceListResponse({}));
  }

  /**
   * @param request - GetInstanceListRequest
   * @returns GetInstanceListResponse
   */
  async getInstanceList(request: GetInstanceListRequest): Promise<GetInstanceListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getInstanceListWithOptions(request, runtime);
  }

  /**
   * 热线检测获取mcu ip地址
   * 
   * @param request - GetMcuLvsIpRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMcuLvsIpResponse
   */
  async getMcuLvsIpWithOptions(request: GetMcuLvsIpRequest, runtime: $dara.RuntimeOptions): Promise<GetMcuLvsIpResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMcuLvsIp",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetMcuLvsIpResponse>(await this.callApi(params, req, runtime), new GetMcuLvsIpResponse({}));
  }

  /**
   * 热线检测获取mcu ip地址
   * 
   * @param request - GetMcuLvsIpRequest
   * @returns GetMcuLvsIpResponse
   */
  async getMcuLvsIp(request: GetMcuLvsIpRequest): Promise<GetMcuLvsIpResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMcuLvsIpWithOptions(request, runtime);
  }

  /**
   * @param request - GetNumLocationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetNumLocationResponse
   */
  async getNumLocationWithOptions(request: GetNumLocationRequest, runtime: $dara.RuntimeOptions): Promise<GetNumLocationResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetNumLocation",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetNumLocationResponse>(await this.callApi(params, req, runtime), new GetNumLocationResponse({}));
  }

  /**
   * @param request - GetNumLocationRequest
   * @returns GetNumLocationResponse
   */
  async getNumLocation(request: GetNumLocationRequest): Promise<GetNumLocationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getNumLocationWithOptions(request, runtime);
  }

  /**
   * 在线坐席信息
   * 
   * @param tmpReq - GetOnlineSeatInformationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetOnlineSeatInformationResponse
   */
  async getOnlineSeatInformationWithOptions(tmpReq: GetOnlineSeatInformationRequest, runtime: $dara.RuntimeOptions): Promise<GetOnlineSeatInformationResponse> {
    tmpReq.validate();
    let request = new GetOnlineSeatInformationShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.agentIds)) {
      request.agentIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.agentIds, "AgentIds", "simple");
    }

    if (!$dara.isNull(tmpReq.depIds)) {
      request.depIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.depIds, "DepIds", "simple");
    }

    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetOnlineSeatInformation",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetOnlineSeatInformationResponse>(await this.callApi(params, req, runtime), new GetOnlineSeatInformationResponse({}));
  }

  /**
   * 在线坐席信息
   * 
   * @param request - GetOnlineSeatInformationRequest
   * @returns GetOnlineSeatInformationResponse
   */
  async getOnlineSeatInformation(request: GetOnlineSeatInformationRequest): Promise<GetOnlineSeatInformationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getOnlineSeatInformationWithOptions(request, runtime);
  }

  /**
   * 在线服务总量
   * 
   * @param tmpReq - GetOnlineServiceVolumeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetOnlineServiceVolumeResponse
   */
  async getOnlineServiceVolumeWithOptions(tmpReq: GetOnlineServiceVolumeRequest, runtime: $dara.RuntimeOptions): Promise<GetOnlineServiceVolumeResponse> {
    tmpReq.validate();
    let request = new GetOnlineServiceVolumeShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.agentIds)) {
      request.agentIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.agentIds, "AgentIds", "simple");
    }

    if (!$dara.isNull(tmpReq.depIds)) {
      request.depIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.depIds, "DepIds", "simple");
    }

    if (!$dara.isNull(tmpReq.groupIds)) {
      request.groupIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.groupIds, "GroupIds", "simple");
    }

    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetOnlineServiceVolume",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetOnlineServiceVolumeResponse>(await this.callApi(params, req, runtime), new GetOnlineServiceVolumeResponse({}));
  }

  /**
   * 在线服务总量
   * 
   * @param request - GetOnlineServiceVolumeRequest
   * @returns GetOnlineServiceVolumeResponse
   */
  async getOnlineServiceVolume(request: GetOnlineServiceVolumeRequest): Promise<GetOnlineServiceVolumeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getOnlineServiceVolumeWithOptions(request, runtime);
  }

  /**
   * @param request - GetOutbounNumListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetOutbounNumListResponse
   */
  async getOutbounNumListWithOptions(request: GetOutbounNumListRequest, runtime: $dara.RuntimeOptions): Promise<GetOutbounNumListResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountName)) {
      body["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetOutbounNumList",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetOutbounNumListResponse>(await this.callApi(params, req, runtime), new GetOutbounNumListResponse({}));
  }

  /**
   * @param request - GetOutbounNumListRequest
   * @returns GetOutbounNumListResponse
   */
  async getOutbounNumList(request: GetOutbounNumListRequest): Promise<GetOutbounNumListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getOutbounNumListWithOptions(request, runtime);
  }

  /**
   * @param request - GetQualityProjectDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetQualityProjectDetailResponse
   */
  async getQualityProjectDetailWithOptions(request: GetQualityProjectDetailRequest, runtime: $dara.RuntimeOptions): Promise<GetQualityProjectDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetQualityProjectDetail",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetQualityProjectDetailResponse>(await this.callApi(params, req, runtime), new GetQualityProjectDetailResponse({}));
  }

  /**
   * @param request - GetQualityProjectDetailRequest
   * @returns GetQualityProjectDetailResponse
   */
  async getQualityProjectDetail(request: GetQualityProjectDetailRequest): Promise<GetQualityProjectDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getQualityProjectDetailWithOptions(request, runtime);
  }

  /**
   * @param request - GetQualityProjectListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetQualityProjectListResponse
   */
  async getQualityProjectListWithOptions(request: GetQualityProjectListRequest, runtime: $dara.RuntimeOptions): Promise<GetQualityProjectListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.checkFreqType)) {
      query["checkFreqType"] = request.checkFreqType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetQualityProjectList",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetQualityProjectListResponse>(await this.callApi(params, req, runtime), new GetQualityProjectListResponse({}));
  }

  /**
   * @param request - GetQualityProjectListRequest
   * @returns GetQualityProjectListResponse
   */
  async getQualityProjectList(request: GetQualityProjectListRequest): Promise<GetQualityProjectListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getQualityProjectListWithOptions(request, runtime);
  }

  /**
   * @param request - GetQualityProjectLogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetQualityProjectLogResponse
   */
  async getQualityProjectLogWithOptions(request: GetQualityProjectLogRequest, runtime: $dara.RuntimeOptions): Promise<GetQualityProjectLogResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetQualityProjectLog",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetQualityProjectLogResponse>(await this.callApi(params, req, runtime), new GetQualityProjectLogResponse({}));
  }

  /**
   * @param request - GetQualityProjectLogRequest
   * @returns GetQualityProjectLogResponse
   */
  async getQualityProjectLog(request: GetQualityProjectLogRequest): Promise<GetQualityProjectLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getQualityProjectLogWithOptions(request, runtime);
  }

  /**
   * @param request - GetQualityResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetQualityResultResponse
   */
  async getQualityResultWithOptions(request: GetQualityResultRequest, runtime: $dara.RuntimeOptions): Promise<GetQualityResultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.channelType)) {
      query["ChannelType"] = request.channelType;
    }

    if (!$dara.isNull(request.groupIds)) {
      query["GroupIds"] = request.groupIds;
    }

    if (!$dara.isNull(request.hitStatus)) {
      query["HitStatus"] = request.hitStatus;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.projectIds)) {
      query["ProjectIds"] = request.projectIds;
    }

    if (!$dara.isNull(request.qualityRuleIds)) {
      query["QualityRuleIds"] = request.qualityRuleIds;
    }

    if (!$dara.isNull(request.touchEndTime)) {
      query["TouchEndTime"] = request.touchEndTime;
    }

    if (!$dara.isNull(request.touchStartTime)) {
      query["TouchStartTime"] = request.touchStartTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetQualityResult",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetQualityResultResponse>(await this.callApi(params, req, runtime), new GetQualityResultResponse({}));
  }

  /**
   * @param request - GetQualityResultRequest
   * @returns GetQualityResultResponse
   */
  async getQualityResult(request: GetQualityResultRequest): Promise<GetQualityResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getQualityResultWithOptions(request, runtime);
  }

  /**
   * @param request - GetQualityRuleDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetQualityRuleDetailResponse
   */
  async getQualityRuleDetailWithOptions(request: GetQualityRuleDetailRequest, runtime: $dara.RuntimeOptions): Promise<GetQualityRuleDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.qualityRuleId)) {
      query["QualityRuleId"] = request.qualityRuleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetQualityRuleDetail",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetQualityRuleDetailResponse>(await this.callApi(params, req, runtime), new GetQualityRuleDetailResponse({}));
  }

  /**
   * @param request - GetQualityRuleDetailRequest
   * @returns GetQualityRuleDetailResponse
   */
  async getQualityRuleDetail(request: GetQualityRuleDetailRequest): Promise<GetQualityRuleDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getQualityRuleDetailWithOptions(request, runtime);
  }

  /**
   * @param request - GetQualityRuleListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetQualityRuleListResponse
   */
  async getQualityRuleListWithOptions(request: GetQualityRuleListRequest, runtime: $dara.RuntimeOptions): Promise<GetQualityRuleListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetQualityRuleList",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetQualityRuleListResponse>(await this.callApi(params, req, runtime), new GetQualityRuleListResponse({}));
  }

  /**
   * @param request - GetQualityRuleListRequest
   * @returns GetQualityRuleListResponse
   */
  async getQualityRuleList(request: GetQualityRuleListRequest): Promise<GetQualityRuleListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getQualityRuleListWithOptions(request, runtime);
  }

  /**
   * @param request - GetQualityRuleTagListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetQualityRuleTagListResponse
   */
  async getQualityRuleTagListWithOptions(request: GetQualityRuleTagListRequest, runtime: $dara.RuntimeOptions): Promise<GetQualityRuleTagListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetQualityRuleTagList",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetQualityRuleTagListResponse>(await this.callApi(params, req, runtime), new GetQualityRuleTagListResponse({}));
  }

  /**
   * @param request - GetQualityRuleTagListRequest
   * @returns GetQualityRuleTagListResponse
   */
  async getQualityRuleTagList(request: GetQualityRuleTagListRequest): Promise<GetQualityRuleTagListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getQualityRuleTagListWithOptions(request, runtime);
  }

  /**
   * 技能组纬度队列信息
   * 
   * @param tmpReq - GetQueueInformationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetQueueInformationResponse
   */
  async getQueueInformationWithOptions(tmpReq: GetQueueInformationRequest, runtime: $dara.RuntimeOptions): Promise<GetQueueInformationResponse> {
    tmpReq.validate();
    let request = new GetQueueInformationShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.depIds)) {
      request.depIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.depIds, "DepIds", "simple");
    }

    if (!$dara.isNull(tmpReq.groupIds)) {
      request.groupIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.groupIds, "GroupIds", "simple");
    }

    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetQueueInformation",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetQueueInformationResponse>(await this.callApi(params, req, runtime), new GetQueueInformationResponse({}));
  }

  /**
   * 技能组纬度队列信息
   * 
   * @param request - GetQueueInformationRequest
   * @returns GetQueueInformationResponse
   */
  async getQueueInformation(request: GetQueueInformationRequest): Promise<GetQueueInformationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getQueueInformationWithOptions(request, runtime);
  }

  /**
   * @param request - GetRecordDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRecordDataResponse
   */
  async getRecordDataWithOptions(request: GetRecordDataRequest, runtime: $dara.RuntimeOptions): Promise<GetRecordDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acid)) {
      query["Acid"] = request.acid;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRecordData",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetRecordDataResponse>(await this.callApi(params, req, runtime), new GetRecordDataResponse({}));
  }

  /**
   * @param request - GetRecordDataRequest
   * @returns GetRecordDataResponse
   */
  async getRecordData(request: GetRecordDataRequest): Promise<GetRecordDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRecordDataWithOptions(request, runtime);
  }

  /**
   * 获取录音链接
   * 
   * @param request - GetRecordUrlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRecordUrlResponse
   */
  async getRecordUrlWithOptions(request: GetRecordUrlRequest, runtime: $dara.RuntimeOptions): Promise<GetRecordUrlResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRecordUrl",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetRecordUrlResponse>(await this.callApi(params, req, runtime), new GetRecordUrlResponse({}));
  }

  /**
   * 获取录音链接
   * 
   * @param request - GetRecordUrlRequest
   * @returns GetRecordUrlResponse
   */
  async getRecordUrl(request: GetRecordUrlRequest): Promise<GetRecordUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRecordUrlWithOptions(request, runtime);
  }

  /**
   * 获取RtcToken
   * 
   * @param request - GetRtcTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRtcTokenResponse
   */
  async getRtcTokenWithOptions(request: GetRtcTokenRequest, runtime: $dara.RuntimeOptions): Promise<GetRtcTokenResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRtcToken",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetRtcTokenResponse>(await this.callApi(params, req, runtime), new GetRtcTokenResponse({}));
  }

  /**
   * 获取RtcToken
   * 
   * @param request - GetRtcTokenRequest
   * @returns GetRtcTokenResponse
   */
  async getRtcToken(request: GetRtcTokenRequest): Promise<GetRtcTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRtcTokenWithOptions(request, runtime);
  }

  /**
   * 部门纬度坐席信息数据
   * 
   * @param tmpReq - GetSeatInformationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSeatInformationResponse
   */
  async getSeatInformationWithOptions(tmpReq: GetSeatInformationRequest, runtime: $dara.RuntimeOptions): Promise<GetSeatInformationResponse> {
    tmpReq.validate();
    let request = new GetSeatInformationShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.depIds)) {
      request.depIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.depIds, "depIds", "simple");
    }

    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSeatInformation",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetSeatInformationResponse>(await this.callApi(params, req, runtime), new GetSeatInformationResponse({}));
  }

  /**
   * 部门纬度坐席信息数据
   * 
   * @param request - GetSeatInformationRequest
   * @returns GetSeatInformationResponse
   */
  async getSeatInformation(request: GetSeatInformationRequest): Promise<GetSeatInformationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSeatInformationWithOptions(request, runtime);
  }

  /**
   * 技能组坐席状态详情
   * 
   * @param tmpReq - GetSkillGroupAgentStatusDetailsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSkillGroupAgentStatusDetailsResponse
   */
  async getSkillGroupAgentStatusDetailsWithOptions(tmpReq: GetSkillGroupAgentStatusDetailsRequest, runtime: $dara.RuntimeOptions): Promise<GetSkillGroupAgentStatusDetailsResponse> {
    tmpReq.validate();
    let request = new GetSkillGroupAgentStatusDetailsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.depIds)) {
      request.depIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.depIds, "DepIds", "simple");
    }

    if (!$dara.isNull(tmpReq.groupIds)) {
      request.groupIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.groupIds, "GroupIds", "simple");
    }

    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSkillGroupAgentStatusDetails",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetSkillGroupAgentStatusDetailsResponse>(await this.callApi(params, req, runtime), new GetSkillGroupAgentStatusDetailsResponse({}));
  }

  /**
   * 技能组坐席状态详情
   * 
   * @param request - GetSkillGroupAgentStatusDetailsRequest
   * @returns GetSkillGroupAgentStatusDetailsResponse
   */
  async getSkillGroupAgentStatusDetails(request: GetSkillGroupAgentStatusDetailsRequest): Promise<GetSkillGroupAgentStatusDetailsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSkillGroupAgentStatusDetailsWithOptions(request, runtime);
  }

  /**
   * 技能组坐席汇总状态量
   * 
   * @param tmpReq - GetSkillGroupAndAgentStatusSummaryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSkillGroupAndAgentStatusSummaryResponse
   */
  async getSkillGroupAndAgentStatusSummaryWithOptions(tmpReq: GetSkillGroupAndAgentStatusSummaryRequest, runtime: $dara.RuntimeOptions): Promise<GetSkillGroupAndAgentStatusSummaryResponse> {
    tmpReq.validate();
    let request = new GetSkillGroupAndAgentStatusSummaryShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.depIds)) {
      request.depIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.depIds, "DepIds", "simple");
    }

    if (!$dara.isNull(tmpReq.groupIds)) {
      request.groupIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.groupIds, "GroupIds", "simple");
    }

    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSkillGroupAndAgentStatusSummary",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetSkillGroupAndAgentStatusSummaryResponse>(await this.callApi(params, req, runtime), new GetSkillGroupAndAgentStatusSummaryResponse({}));
  }

  /**
   * 技能组坐席汇总状态量
   * 
   * @param request - GetSkillGroupAndAgentStatusSummaryRequest
   * @returns GetSkillGroupAndAgentStatusSummaryResponse
   */
  async getSkillGroupAndAgentStatusSummary(request: GetSkillGroupAndAgentStatusSummaryRequest): Promise<GetSkillGroupAndAgentStatusSummaryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSkillGroupAndAgentStatusSummaryWithOptions(request, runtime);
  }

  /**
   * 技能组纬度状态量
   * 
   * @param tmpReq - GetSkillGroupLatitudeStateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSkillGroupLatitudeStateResponse
   */
  async getSkillGroupLatitudeStateWithOptions(tmpReq: GetSkillGroupLatitudeStateRequest, runtime: $dara.RuntimeOptions): Promise<GetSkillGroupLatitudeStateResponse> {
    tmpReq.validate();
    let request = new GetSkillGroupLatitudeStateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.depIds)) {
      request.depIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.depIds, "DepIds", "simple");
    }

    if (!$dara.isNull(tmpReq.groupIds)) {
      request.groupIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.groupIds, "GroupIds", "simple");
    }

    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSkillGroupLatitudeState",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetSkillGroupLatitudeStateResponse>(await this.callApi(params, req, runtime), new GetSkillGroupLatitudeStateResponse({}));
  }

  /**
   * 技能组纬度状态量
   * 
   * @param request - GetSkillGroupLatitudeStateRequest
   * @returns GetSkillGroupLatitudeStateResponse
   */
  async getSkillGroupLatitudeState(request: GetSkillGroupLatitudeStateRequest): Promise<GetSkillGroupLatitudeStateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSkillGroupLatitudeStateWithOptions(request, runtime);
  }

  /**
   * 技能组纬度服务能力
   * 
   * @param tmpReq - GetSkillGroupServiceCapabilityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSkillGroupServiceCapabilityResponse
   */
  async getSkillGroupServiceCapabilityWithOptions(tmpReq: GetSkillGroupServiceCapabilityRequest, runtime: $dara.RuntimeOptions): Promise<GetSkillGroupServiceCapabilityResponse> {
    tmpReq.validate();
    let request = new GetSkillGroupServiceCapabilityShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.depIds)) {
      request.depIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.depIds, "DepIds", "simple");
    }

    if (!$dara.isNull(tmpReq.groupIds)) {
      request.groupIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.groupIds, "GroupIds", "simple");
    }

    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSkillGroupServiceCapability",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetSkillGroupServiceCapabilityResponse>(await this.callApi(params, req, runtime), new GetSkillGroupServiceCapabilityResponse({}));
  }

  /**
   * 技能组纬度服务能力
   * 
   * @param request - GetSkillGroupServiceCapabilityRequest
   * @returns GetSkillGroupServiceCapabilityResponse
   */
  async getSkillGroupServiceCapability(request: GetSkillGroupServiceCapabilityRequest): Promise<GetSkillGroupServiceCapabilityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSkillGroupServiceCapabilityWithOptions(request, runtime);
  }

  /**
   * 技能组服务状态量
   * 
   * @param tmpReq - GetSkillGroupServiceStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSkillGroupServiceStatusResponse
   */
  async getSkillGroupServiceStatusWithOptions(tmpReq: GetSkillGroupServiceStatusRequest, runtime: $dara.RuntimeOptions): Promise<GetSkillGroupServiceStatusResponse> {
    tmpReq.validate();
    let request = new GetSkillGroupServiceStatusShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.agentIds)) {
      request.agentIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.agentIds, "AgentIds", "simple");
    }

    if (!$dara.isNull(tmpReq.depIds)) {
      request.depIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.depIds, "DepIds", "simple");
    }

    if (!$dara.isNull(tmpReq.groupIds)) {
      request.groupIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.groupIds, "GroupIds", "simple");
    }

    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSkillGroupServiceStatus",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetSkillGroupServiceStatusResponse>(await this.callApi(params, req, runtime), new GetSkillGroupServiceStatusResponse({}));
  }

  /**
   * 技能组服务状态量
   * 
   * @param request - GetSkillGroupServiceStatusRequest
   * @returns GetSkillGroupServiceStatusResponse
   */
  async getSkillGroupServiceStatus(request: GetSkillGroupServiceStatusRequest): Promise<GetSkillGroupServiceStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSkillGroupServiceStatusWithOptions(request, runtime);
  }

  /**
   * 技能组状态总量
   * 
   * @param tmpReq - GetSkillGroupStatusTotalRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSkillGroupStatusTotalResponse
   */
  async getSkillGroupStatusTotalWithOptions(tmpReq: GetSkillGroupStatusTotalRequest, runtime: $dara.RuntimeOptions): Promise<GetSkillGroupStatusTotalResponse> {
    tmpReq.validate();
    let request = new GetSkillGroupStatusTotalShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.agentIds)) {
      request.agentIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.agentIds, "AgentIds", "simple");
    }

    if (!$dara.isNull(tmpReq.depIds)) {
      request.depIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.depIds, "DepIds", "simple");
    }

    if (!$dara.isNull(tmpReq.groupIds)) {
      request.groupIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.groupIds, "GroupIds", "simple");
    }

    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSkillGroupStatusTotal",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetSkillGroupStatusTotalResponse>(await this.callApi(params, req, runtime), new GetSkillGroupStatusTotalResponse({}));
  }

  /**
   * 技能组状态总量
   * 
   * @param request - GetSkillGroupStatusTotalRequest
   * @returns GetSkillGroupStatusTotalResponse
   */
  async getSkillGroupStatusTotal(request: GetSkillGroupStatusTotalRequest): Promise<GetSkillGroupStatusTotalResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSkillGroupStatusTotalWithOptions(request, runtime);
  }

  /**
   * 移动端呼叫挂断
   * 
   * @param request - HangUpDoubleCallRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns HangUpDoubleCallResponse
   */
  async hangUpDoubleCallWithOptions(request: HangUpDoubleCallRequest, runtime: $dara.RuntimeOptions): Promise<HangUpDoubleCallResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acid)) {
      query["Acid"] = request.acid;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "HangUpDoubleCall",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<HangUpDoubleCallResponse>(await this.callApi(params, req, runtime), new HangUpDoubleCallResponse({}));
  }

  /**
   * 移动端呼叫挂断
   * 
   * @param request - HangUpDoubleCallRequest
   * @returns HangUpDoubleCallResponse
   */
  async hangUpDoubleCall(request: HangUpDoubleCallRequest): Promise<HangUpDoubleCallResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.hangUpDoubleCallWithOptions(request, runtime);
  }

  /**
   * @param request - HangupCallRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns HangupCallResponse
   */
  async hangupCallWithOptions(request: HangupCallRequest, runtime: $dara.RuntimeOptions): Promise<HangupCallResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountName)) {
      body["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.callId)) {
      body["CallId"] = request.callId;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.connectionId)) {
      body["ConnectionId"] = request.connectionId;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.jobId)) {
      body["JobId"] = request.jobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "HangupCall",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<HangupCallResponse>(await this.callApi(params, req, runtime), new HangupCallResponse({}));
  }

  /**
   * @param request - HangupCallRequest
   * @returns HangupCallResponse
   */
  async hangupCall(request: HangupCallRequest): Promise<HangupCallResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.hangupCallWithOptions(request, runtime);
  }

  /**
   * 通信智能引擎中主动挂断通话
   * 
   * @param request - HangupOperateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns HangupOperateResponse
   */
  async hangupOperateWithOptions(request: HangupOperateRequest, runtime: $dara.RuntimeOptions): Promise<HangupOperateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.callId)) {
      query["CallId"] = request.callId;
    }

    if (!$dara.isNull(request.immediateHangup)) {
      query["ImmediateHangup"] = request.immediateHangup;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "HangupOperate",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<HangupOperateResponse>(await this.callApi(params, req, runtime), new HangupOperateResponse({}));
  }

  /**
   * 通信智能引擎中主动挂断通话
   * 
   * @param request - HangupOperateRequest
   * @returns HangupOperateResponse
   */
  async hangupOperate(request: HangupOperateRequest): Promise<HangupOperateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.hangupOperateWithOptions(request, runtime);
  }

  /**
   * @param request - HangupThirdCallRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns HangupThirdCallResponse
   */
  async hangupThirdCallWithOptions(request: HangupThirdCallRequest, runtime: $dara.RuntimeOptions): Promise<HangupThirdCallResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountName)) {
      body["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.callId)) {
      body["CallId"] = request.callId;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.connectionId)) {
      body["ConnectionId"] = request.connectionId;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.jobId)) {
      body["JobId"] = request.jobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "HangupThirdCall",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<HangupThirdCallResponse>(await this.callApi(params, req, runtime), new HangupThirdCallResponse({}));
  }

  /**
   * @param request - HangupThirdCallRequest
   * @returns HangupThirdCallResponse
   */
  async hangupThirdCall(request: HangupThirdCallRequest): Promise<HangupThirdCallResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.hangupThirdCallWithOptions(request, runtime);
  }

  /**
   * @param request - HoldCallRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns HoldCallResponse
   */
  async holdCallWithOptions(request: HoldCallRequest, runtime: $dara.RuntimeOptions): Promise<HoldCallResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountName)) {
      body["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.callId)) {
      body["CallId"] = request.callId;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.connectionId)) {
      body["ConnectionId"] = request.connectionId;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.jobId)) {
      body["JobId"] = request.jobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "HoldCall",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<HoldCallResponse>(await this.callApi(params, req, runtime), new HoldCallResponse({}));
  }

  /**
   * @param request - HoldCallRequest
   * @returns HoldCallResponse
   */
  async holdCall(request: HoldCallRequest): Promise<HoldCallResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.holdCallWithOptions(request, runtime);
  }

  /**
   * @param request - HotlineSessionQueryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns HotlineSessionQueryResponse
   */
  async hotlineSessionQueryWithOptions(request: HotlineSessionQueryRequest, runtime: $dara.RuntimeOptions): Promise<HotlineSessionQueryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acid)) {
      query["Acid"] = request.acid;
    }

    if (!$dara.isNull(request.acidList)) {
      query["AcidList"] = request.acidList;
    }

    if (!$dara.isNull(request.callResult)) {
      query["CallResult"] = request.callResult;
    }

    if (!$dara.isNull(request.callResultList)) {
      query["CallResultList"] = request.callResultList;
    }

    if (!$dara.isNull(request.callType)) {
      query["CallType"] = request.callType;
    }

    if (!$dara.isNull(request.callTypeList)) {
      query["CallTypeList"] = request.callTypeList;
    }

    if (!$dara.isNull(request.calledNumber)) {
      query["CalledNumber"] = request.calledNumber;
    }

    if (!$dara.isNull(request.calledNumberList)) {
      query["CalledNumberList"] = request.calledNumberList;
    }

    if (!$dara.isNull(request.callingNumber)) {
      query["CallingNumber"] = request.callingNumber;
    }

    if (!$dara.isNull(request.callingNumberList)) {
      query["CallingNumberList"] = request.callingNumberList;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.groupIdList)) {
      query["GroupIdList"] = request.groupIdList;
    }

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.memberId)) {
      query["MemberId"] = request.memberId;
    }

    if (!$dara.isNull(request.memberIdList)) {
      query["MemberIdList"] = request.memberIdList;
    }

    if (!$dara.isNull(request.memberName)) {
      query["MemberName"] = request.memberName;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.params)) {
      query["Params"] = request.params;
    }

    if (!$dara.isNull(request.queryEndTime)) {
      query["QueryEndTime"] = request.queryEndTime;
    }

    if (!$dara.isNull(request.queryStartTime)) {
      query["QueryStartTime"] = request.queryStartTime;
    }

    if (!$dara.isNull(request.requestId)) {
      query["RequestId"] = request.requestId;
    }

    if (!$dara.isNull(request.servicerId)) {
      query["ServicerId"] = request.servicerId;
    }

    if (!$dara.isNull(request.servicerIdList)) {
      query["ServicerIdList"] = request.servicerIdList;
    }

    if (!$dara.isNull(request.servicerName)) {
      query["ServicerName"] = request.servicerName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "HotlineSessionQuery",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<HotlineSessionQueryResponse>(await this.callApi(params, req, runtime), new HotlineSessionQueryResponse({}));
  }

  /**
   * @param request - HotlineSessionQueryRequest
   * @returns HotlineSessionQueryResponse
   */
  async hotlineSessionQuery(request: HotlineSessionQueryRequest): Promise<HotlineSessionQueryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.hotlineSessionQueryWithOptions(request, runtime);
  }

  /**
   * 智能外呼任务导入号码
   * 
   * @param tmpReq - InsertAiOutboundPhoneNumsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InsertAiOutboundPhoneNumsResponse
   */
  async insertAiOutboundPhoneNumsWithOptions(tmpReq: InsertAiOutboundPhoneNumsRequest, runtime: $dara.RuntimeOptions): Promise<InsertAiOutboundPhoneNumsResponse> {
    tmpReq.validate();
    let request = new InsertAiOutboundPhoneNumsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.details)) {
      request.detailsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.details, "Details", "json");
    }

    let query = { };
    if (!$dara.isNull(request.batchVersion)) {
      query["BatchVersion"] = request.batchVersion;
    }

    if (!$dara.isNull(request.detailsShrink)) {
      query["Details"] = request.detailsShrink;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "InsertAiOutboundPhoneNums",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<InsertAiOutboundPhoneNumsResponse>(await this.callApi(params, req, runtime), new InsertAiOutboundPhoneNumsResponse({}));
  }

  /**
   * 智能外呼任务导入号码
   * 
   * @param request - InsertAiOutboundPhoneNumsRequest
   * @returns InsertAiOutboundPhoneNumsResponse
   */
  async insertAiOutboundPhoneNums(request: InsertAiOutboundPhoneNumsRequest): Promise<InsertAiOutboundPhoneNumsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.insertAiOutboundPhoneNumsWithOptions(request, runtime);
  }

  /**
   * @param request - InsertTaskDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InsertTaskDetailResponse
   */
  async insertTaskDetailWithOptions(request: InsertTaskDetailRequest, runtime: $dara.RuntimeOptions): Promise<InsertTaskDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.callInfos)) {
      query["CallInfos"] = request.callInfos;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.outboundTaskId)) {
      query["OutboundTaskId"] = request.outboundTaskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "InsertTaskDetail",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<InsertTaskDetailResponse>(await this.callApi(params, req, runtime), new InsertTaskDetailResponse({}));
  }

  /**
   * @param request - InsertTaskDetailRequest
   * @returns InsertTaskDetailResponse
   */
  async insertTaskDetail(request: InsertTaskDetailRequest): Promise<InsertTaskDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.insertTaskDetailWithOptions(request, runtime);
  }

  /**
   * @param request - JoinThirdCallRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns JoinThirdCallResponse
   */
  async joinThirdCallWithOptions(request: JoinThirdCallRequest, runtime: $dara.RuntimeOptions): Promise<JoinThirdCallResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountName)) {
      body["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.callId)) {
      body["CallId"] = request.callId;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.connectionId)) {
      body["ConnectionId"] = request.connectionId;
    }

    if (!$dara.isNull(request.holdConnectionId)) {
      body["HoldConnectionId"] = request.holdConnectionId;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.jobId)) {
      body["JobId"] = request.jobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "JoinThirdCall",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<JoinThirdCallResponse>(await this.callApi(params, req, runtime), new JoinThirdCallResponse({}));
  }

  /**
   * @param request - JoinThirdCallRequest
   * @returns JoinThirdCallResponse
   */
  async joinThirdCall(request: JoinThirdCallRequest): Promise<JoinThirdCallResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.joinThirdCallWithOptions(request, runtime);
  }

  /**
   * @param request - ListAgentBySkillGroupIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAgentBySkillGroupIdResponse
   */
  async listAgentBySkillGroupIdWithOptions(request: ListAgentBySkillGroupIdRequest, runtime: $dara.RuntimeOptions): Promise<ListAgentBySkillGroupIdResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAgentBySkillGroupId",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListAgentBySkillGroupIdResponse>(await this.callApi(params, req, runtime), new ListAgentBySkillGroupIdResponse({}));
  }

  /**
   * @param request - ListAgentBySkillGroupIdRequest
   * @returns ListAgentBySkillGroupIdResponse
   */
  async listAgentBySkillGroupId(request: ListAgentBySkillGroupIdRequest): Promise<ListAgentBySkillGroupIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAgentBySkillGroupIdWithOptions(request, runtime);
  }

  /**
   * 查询所有机器人列表
   * 
   * @param request - ListAiccsRobotRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAiccsRobotResponse
   */
  async listAiccsRobotWithOptions(request: ListAiccsRobotRequest, runtime: $dara.RuntimeOptions): Promise<ListAiccsRobotResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.robotName)) {
      query["RobotName"] = request.robotName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAiccsRobot",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListAiccsRobotResponse>(await this.callApi(params, req, runtime), new ListAiccsRobotResponse({}));
  }

  /**
   * 查询所有机器人列表
   * 
   * @param request - ListAiccsRobotRequest
   * @returns ListAiccsRobotResponse
   */
  async listAiccsRobot(request: ListAiccsRobotRequest): Promise<ListAiccsRobotResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAiccsRobotWithOptions(request, runtime);
  }

  /**
   * 根据时间段查询在线会话详情，包含会话内容，时间段范围最长不超过1天
   * 
   * @param request - ListChatRecordDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListChatRecordDetailResponse
   */
  async listChatRecordDetailWithOptions(request: ListChatRecordDetailRequest, runtime: $dara.RuntimeOptions): Promise<ListChatRecordDetailResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListChatRecordDetail",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListChatRecordDetailResponse>(await this.callApi(params, req, runtime), new ListChatRecordDetailResponse({}));
  }

  /**
   * 根据时间段查询在线会话详情，包含会话内容，时间段范围最长不超过1天
   * 
   * @param request - ListChatRecordDetailRequest
   * @returns ListChatRecordDetailResponse
   */
  async listChatRecordDetail(request: ListChatRecordDetailRequest): Promise<ListChatRecordDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listChatRecordDetailWithOptions(request, runtime);
  }

  /**
   * 查看对话记录
   * 
   * @param request - ListDialogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDialogResponse
   */
  async listDialogWithOptions(request: ListDialogRequest, runtime: $dara.RuntimeOptions): Promise<ListDialogResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.called)) {
      query["Called"] = request.called;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDialog",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListDialogResponse>(await this.callApi(params, req, runtime), new ListDialogResponse({}));
  }

  /**
   * 查看对话记录
   * 
   * @param request - ListDialogRequest
   * @returns ListDialogResponse
   */
  async listDialog(request: ListDialogRequest): Promise<ListDialogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDialogWithOptions(request, runtime);
  }

  /**
   * @param request - ListHotlineRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListHotlineRecordResponse
   */
  async listHotlineRecordWithOptions(request: ListHotlineRecordRequest, runtime: $dara.RuntimeOptions): Promise<ListHotlineRecordResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListHotlineRecord",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListHotlineRecordResponse>(await this.callApi(params, req, runtime), new ListHotlineRecordResponse({}));
  }

  /**
   * @param request - ListHotlineRecordRequest
   * @returns ListHotlineRecordResponse
   */
  async listHotlineRecord(request: ListHotlineRecordRequest): Promise<ListHotlineRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listHotlineRecordWithOptions(request, runtime);
  }

  /**
   * 根据时间段查询热线详情列表，包含热线通话信息，时间段范围最长不超过1天
   * 
   * @param request - ListHotlineRecordDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListHotlineRecordDetailResponse
   */
  async listHotlineRecordDetailWithOptions(request: ListHotlineRecordDetailRequest, runtime: $dara.RuntimeOptions): Promise<ListHotlineRecordDetailResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListHotlineRecordDetail",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListHotlineRecordDetailResponse>(await this.callApi(params, req, runtime), new ListHotlineRecordDetailResponse({}));
  }

  /**
   * 根据时间段查询热线详情列表，包含热线通话信息，时间段范围最长不超过1天
   * 
   * @param request - ListHotlineRecordDetailRequest
   * @returns ListHotlineRecordDetailResponse
   */
  async listHotlineRecordDetail(request: ListHotlineRecordDetailRequest): Promise<ListHotlineRecordDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listHotlineRecordDetailWithOptions(request, runtime);
  }

  /**
   * @param request - ListOutboundPhoneNumberRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListOutboundPhoneNumberResponse
   */
  async listOutboundPhoneNumberWithOptions(request: ListOutboundPhoneNumberRequest, runtime: $dara.RuntimeOptions): Promise<ListOutboundPhoneNumberResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListOutboundPhoneNumber",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListOutboundPhoneNumberResponse>(await this.callApi(params, req, runtime), new ListOutboundPhoneNumberResponse({}));
  }

  /**
   * @param request - ListOutboundPhoneNumberRequest
   * @returns ListOutboundPhoneNumberResponse
   */
  async listOutboundPhoneNumber(request: ListOutboundPhoneNumberRequest): Promise<ListOutboundPhoneNumberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listOutboundPhoneNumberWithOptions(request, runtime);
  }

  /**
   * 查看对话记录
   * 
   * @param request - ListRobotCallDialogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRobotCallDialogResponse
   */
  async listRobotCallDialogWithOptions(request: ListRobotCallDialogRequest, runtime: $dara.RuntimeOptions): Promise<ListRobotCallDialogResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.callId)) {
      query["CallId"] = request.callId;
    }

    if (!$dara.isNull(request.createTime)) {
      query["CreateTime"] = request.createTime;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRobotCallDialog",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListRobotCallDialogResponse>(await this.callApi(params, req, runtime), new ListRobotCallDialogResponse({}));
  }

  /**
   * 查看对话记录
   * 
   * @param request - ListRobotCallDialogRequest
   * @returns ListRobotCallDialogResponse
   */
  async listRobotCallDialog(request: ListRobotCallDialogRequest): Promise<ListRobotCallDialogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRobotCallDialogWithOptions(request, runtime);
  }

  /**
   * 查询机器人输出列表
   * 
   * @param request - ListRobotNodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRobotNodeResponse
   */
  async listRobotNodeWithOptions(request: ListRobotNodeRequest, runtime: $dara.RuntimeOptions): Promise<ListRobotNodeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.robotId)) {
      query["RobotId"] = request.robotId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRobotNode",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListRobotNodeResponse>(await this.callApi(params, req, runtime), new ListRobotNodeResponse({}));
  }

  /**
   * 查询机器人输出列表
   * 
   * @param request - ListRobotNodeRequest
   * @returns ListRobotNodeResponse
   */
  async listRobotNode(request: ListRobotNodeRequest): Promise<ListRobotNodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRobotNodeWithOptions(request, runtime);
  }

  /**
   * 查询参数列表
   * 
   * @param request - ListRobotParamsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRobotParamsResponse
   */
  async listRobotParamsWithOptions(request: ListRobotParamsRequest, runtime: $dara.RuntimeOptions): Promise<ListRobotParamsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.robotId)) {
      query["RobotId"] = request.robotId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRobotParams",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListRobotParamsResponse>(await this.callApi(params, req, runtime), new ListRobotParamsResponse({}));
  }

  /**
   * 查询参数列表
   * 
   * @param request - ListRobotParamsRequest
   * @returns ListRobotParamsResponse
   */
  async listRobotParams(request: ListRobotParamsRequest): Promise<ListRobotParamsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRobotParamsWithOptions(request, runtime);
  }

  /**
   * 获取租户下的所有角色
   * 
   * @param request - ListRolesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRolesResponse
   */
  async listRolesWithOptions(request: ListRolesRequest, runtime: $dara.RuntimeOptions): Promise<ListRolesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRoles",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListRolesResponse>(await this.callApi(params, req, runtime), new ListRolesResponse({}));
  }

  /**
   * 获取租户下的所有角色
   * 
   * @param request - ListRolesRequest
   * @returns ListRolesResponse
   */
  async listRoles(request: ListRolesRequest): Promise<ListRolesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRolesWithOptions(request, runtime);
  }

  /**
   * @param request - ListSkillGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSkillGroupResponse
   */
  async listSkillGroupWithOptions(request: ListSkillGroupRequest, runtime: $dara.RuntimeOptions): Promise<ListSkillGroupResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSkillGroup",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListSkillGroupResponse>(await this.callApi(params, req, runtime), new ListSkillGroupResponse({}));
  }

  /**
   * @param request - ListSkillGroupRequest
   * @returns ListSkillGroupResponse
   */
  async listSkillGroup(request: ListSkillGroupRequest): Promise<ListSkillGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSkillGroupWithOptions(request, runtime);
  }

  /**
   * 查询任务列表
   * 
   * @param request - ListTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTaskResponse
   */
  async listTaskWithOptions(request: ListTaskRequest, runtime: $dara.RuntimeOptions): Promise<ListTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.robotName)) {
      query["RobotName"] = request.robotName;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTask",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListTaskResponse>(await this.callApi(params, req, runtime), new ListTaskResponse({}));
  }

  /**
   * 查询任务列表
   * 
   * @param request - ListTaskRequest
   * @returns ListTaskResponse
   */
  async listTask(request: ListTaskRequest): Promise<ListTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTaskWithOptions(request, runtime);
  }

  /**
   * 任务详情查看通话列表
   * 
   * @param request - ListTaskDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTaskDetailResponse
   */
  async listTaskDetailWithOptions(request: ListTaskDetailRequest, runtime: $dara.RuntimeOptions): Promise<ListTaskDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.called)) {
      query["Called"] = request.called;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.statusCode)) {
      query["StatusCode"] = request.statusCode;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTaskDetail",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListTaskDetailResponse>(await this.callApi(params, req, runtime), new ListTaskDetailResponse({}));
  }

  /**
   * 任务详情查看通话列表
   * 
   * @param request - ListTaskDetailRequest
   * @returns ListTaskDetailResponse
   */
  async listTaskDetail(request: ListTaskDetailRequest): Promise<ListTaskDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTaskDetailWithOptions(request, runtime);
  }

  /**
   * 基于大模型的智能外呼
   * 
   * @param tmpReq - LlmSmartCallRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns LlmSmartCallResponse
   */
  async llmSmartCallWithOptions(tmpReq: LlmSmartCallRequest, runtime: $dara.RuntimeOptions): Promise<LlmSmartCallResponse> {
    tmpReq.validate();
    let request = new LlmSmartCallShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.promptParam)) {
      request.promptParamShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.promptParam, "PromptParam", "json");
    }

    if (!$dara.isNull(tmpReq.startWordParam)) {
      request.startWordParamShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.startWordParam, "StartWordParam", "json");
    }

    let query = { };
    if (!$dara.isNull(request.applicationCode)) {
      query["ApplicationCode"] = request.applicationCode;
    }

    if (!$dara.isNull(request.calledNumber)) {
      query["CalledNumber"] = request.calledNumber;
    }

    if (!$dara.isNull(request.callerNumber)) {
      query["CallerNumber"] = request.callerNumber;
    }

    if (!$dara.isNull(request.outId)) {
      query["OutId"] = request.outId;
    }

    if (!$dara.isNull(request.promptParamShrink)) {
      query["PromptParam"] = request.promptParamShrink;
    }

    if (!$dara.isNull(request.startWordParamShrink)) {
      query["StartWordParam"] = request.startWordParamShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "LlmSmartCall",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<LlmSmartCallResponse>(await this.callApi(params, req, runtime), new LlmSmartCallResponse({}));
  }

  /**
   * 基于大模型的智能外呼
   * 
   * @param request - LlmSmartCallRequest
   * @returns LlmSmartCallResponse
   */
  async llmSmartCall(request: LlmSmartCallRequest): Promise<LlmSmartCallResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.llmSmartCallWithOptions(request, runtime);
  }

  /**
   * 大模型外呼加密号码接口
   * 
   * @param tmpReq - LlmSmartCallEncryptRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns LlmSmartCallEncryptResponse
   */
  async llmSmartCallEncryptWithOptions(tmpReq: LlmSmartCallEncryptRequest, runtime: $dara.RuntimeOptions): Promise<LlmSmartCallEncryptResponse> {
    tmpReq.validate();
    let request = new LlmSmartCallEncryptShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.promptParam)) {
      request.promptParamShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.promptParam, "PromptParam", "json");
    }

    if (!$dara.isNull(tmpReq.startWordParam)) {
      request.startWordParamShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.startWordParam, "StartWordParam", "json");
    }

    let query = { };
    if (!$dara.isNull(request.applicationCode)) {
      query["ApplicationCode"] = request.applicationCode;
    }

    if (!$dara.isNull(request.callerNumber)) {
      query["CallerNumber"] = request.callerNumber;
    }

    if (!$dara.isNull(request.encryptCalledNumber)) {
      query["EncryptCalledNumber"] = request.encryptCalledNumber;
    }

    if (!$dara.isNull(request.outId)) {
      query["OutId"] = request.outId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.promptParamShrink)) {
      query["PromptParam"] = request.promptParamShrink;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.startWordParamShrink)) {
      query["StartWordParam"] = request.startWordParamShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "LlmSmartCallEncrypt",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<LlmSmartCallEncryptResponse>(await this.callApi(params, req, runtime), new LlmSmartCallEncryptResponse({}));
  }

  /**
   * 大模型外呼加密号码接口
   * 
   * @param request - LlmSmartCallEncryptRequest
   * @returns LlmSmartCallEncryptResponse
   */
  async llmSmartCallEncrypt(request: LlmSmartCallEncryptRequest): Promise<LlmSmartCallEncryptResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.llmSmartCallEncryptWithOptions(request, runtime);
  }

  /**
   * @param request - MakeCallRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MakeCallResponse
   */
  async makeCallWithOptions(request: MakeCallRequest, runtime: $dara.RuntimeOptions): Promise<MakeCallResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.calledNumber)) {
      query["CalledNumber"] = request.calledNumber;
    }

    if (!$dara.isNull(request.callingNumber)) {
      query["CallingNumber"] = request.callingNumber;
    }

    if (!$dara.isNull(request.commandCode)) {
      query["CommandCode"] = request.commandCode;
    }

    if (!$dara.isNull(request.extInfo)) {
      query["ExtInfo"] = request.extInfo;
    }

    if (!$dara.isNull(request.outerAccountId)) {
      query["OuterAccountId"] = request.outerAccountId;
    }

    if (!$dara.isNull(request.outerAccountType)) {
      query["OuterAccountType"] = request.outerAccountType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "MakeCall",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<MakeCallResponse>(await this.callApi(params, req, runtime), new MakeCallResponse({}));
  }

  /**
   * @param request - MakeCallRequest
   * @returns MakeCallResponse
   */
  async makeCall(request: MakeCallRequest): Promise<MakeCallResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.makeCallWithOptions(request, runtime);
  }

  /**
   * 移动端发起呼叫
   * 
   * @param request - MakeDoubleCallRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MakeDoubleCallResponse
   */
  async makeDoubleCallWithOptions(request: MakeDoubleCallRequest, runtime: $dara.RuntimeOptions): Promise<MakeDoubleCallResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.bizData)) {
      query["BizData"] = request.bizData;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.memberPhone)) {
      query["MemberPhone"] = request.memberPhone;
    }

    if (!$dara.isNull(request.outboundCallNumber)) {
      query["OutboundCallNumber"] = request.outboundCallNumber;
    }

    if (!$dara.isNull(request.servicerPhone)) {
      query["ServicerPhone"] = request.servicerPhone;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "MakeDoubleCall",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<MakeDoubleCallResponse>(await this.callApi(params, req, runtime), new MakeDoubleCallResponse({}));
  }

  /**
   * 移动端发起呼叫
   * 
   * @param request - MakeDoubleCallRequest
   * @returns MakeDoubleCallResponse
   */
  async makeDoubleCall(request: MakeDoubleCallRequest): Promise<MakeDoubleCallResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.makeDoubleCallWithOptions(request, runtime);
  }

  /**
   * @param request - QueryHotlineInQueueRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryHotlineInQueueResponse
   */
  async queryHotlineInQueueWithOptions(request: QueryHotlineInQueueRequest, runtime: $dara.RuntimeOptions): Promise<QueryHotlineInQueueResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryHotlineInQueue",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<QueryHotlineInQueueResponse>(await this.callApi(params, req, runtime), new QueryHotlineInQueueResponse({}));
  }

  /**
   * @param request - QueryHotlineInQueueRequest
   * @returns QueryHotlineInQueueResponse
   */
  async queryHotlineInQueue(request: QueryHotlineInQueueRequest): Promise<QueryHotlineInQueueResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryHotlineInQueueWithOptions(request, runtime);
  }

  /**
   * 查询热线号码配置
   * 
   * @param tmpReq - QueryHotlineNumberRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryHotlineNumberResponse
   */
  async queryHotlineNumberWithOptions(tmpReq: QueryHotlineNumberRequest, runtime: $dara.RuntimeOptions): Promise<QueryHotlineNumberResponse> {
    tmpReq.validate();
    let request = new QueryHotlineNumberShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.groupIds)) {
      request.groupIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.groupIds, "GroupIds", "json");
    }

    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryHotlineNumber",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<QueryHotlineNumberResponse>(await this.callApi(params, req, runtime), new QueryHotlineNumberResponse({}));
  }

  /**
   * 查询热线号码配置
   * 
   * @param request - QueryHotlineNumberRequest
   * @returns QueryHotlineNumberResponse
   */
  async queryHotlineNumber(request: QueryHotlineNumberRequest): Promise<QueryHotlineNumberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryHotlineNumberWithOptions(request, runtime);
  }

  /**
   * @param request - QueryOutboundTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryOutboundTaskResponse
   */
  async queryOutboundTaskWithOptions(request: QueryOutboundTaskRequest, runtime: $dara.RuntimeOptions): Promise<QueryOutboundTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ani)) {
      query["Ani"] = request.ani;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.departmentId)) {
      query["DepartmentId"] = request.departmentId;
    }

    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.skillGroup)) {
      query["SkillGroup"] = request.skillGroup;
    }

    if (!$dara.isNull(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    if (!$dara.isNull(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryOutboundTask",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<QueryOutboundTaskResponse>(await this.callApi(params, req, runtime), new QueryOutboundTaskResponse({}));
  }

  /**
   * @param request - QueryOutboundTaskRequest
   * @returns QueryOutboundTaskResponse
   */
  async queryOutboundTask(request: QueryOutboundTaskRequest): Promise<QueryOutboundTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryOutboundTaskWithOptions(request, runtime);
  }

  /**
   * @param request - QuerySkillGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySkillGroupsResponse
   */
  async querySkillGroupsWithOptions(request: QuerySkillGroupsRequest, runtime: $dara.RuntimeOptions): Promise<QuerySkillGroupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.channelType)) {
      query["ChannelType"] = request.channelType;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.departmentId)) {
      query["DepartmentId"] = request.departmentId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QuerySkillGroups",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<QuerySkillGroupsResponse>(await this.callApi(params, req, runtime), new QuerySkillGroupsResponse({}));
  }

  /**
   * @param request - QuerySkillGroupsRequest
   * @returns QuerySkillGroupsResponse
   */
  async querySkillGroups(request: QuerySkillGroupsRequest): Promise<QuerySkillGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySkillGroupsWithOptions(request, runtime);
  }

  /**
   * @param request - QueryTaskDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryTaskDetailResponse
   */
  async queryTaskDetailWithOptions(request: QueryTaskDetailRequest, runtime: $dara.RuntimeOptions): Promise<QueryTaskDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ani)) {
      query["Ani"] = request.ani;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.departmentIdList)) {
      query["DepartmentIdList"] = request.departmentIdList;
    }

    if (!$dara.isNull(request.dnis)) {
      query["Dnis"] = request.dnis;
    }

    if (!$dara.isNull(request.endReasonList)) {
      query["EndReasonList"] = request.endReasonList;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.outboundTaskId)) {
      query["OutboundTaskId"] = request.outboundTaskId;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.priorityList)) {
      query["PriorityList"] = request.priorityList;
    }

    if (!$dara.isNull(request.servicerId)) {
      query["ServicerId"] = request.servicerId;
    }

    if (!$dara.isNull(request.servicerName)) {
      query["ServicerName"] = request.servicerName;
    }

    if (!$dara.isNull(request.sid)) {
      query["Sid"] = request.sid;
    }

    if (!$dara.isNull(request.skillGroup)) {
      query["SkillGroup"] = request.skillGroup;
    }

    if (!$dara.isNull(request.statusList)) {
      query["StatusList"] = request.statusList;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryTaskDetail",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<QueryTaskDetailResponse>(await this.callApi(params, req, runtime), new QueryTaskDetailResponse({}));
  }

  /**
   * @param request - QueryTaskDetailRequest
   * @returns QueryTaskDetailResponse
   */
  async queryTaskDetail(request: QueryTaskDetailRequest): Promise<QueryTaskDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryTaskDetailWithOptions(request, runtime);
  }

  /**
   * @param tmpReq - QueryTicketsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryTicketsResponse
   */
  async queryTicketsWithOptions(tmpReq: QueryTicketsRequest, runtime: $dara.RuntimeOptions): Promise<QueryTicketsResponse> {
    tmpReq.validate();
    let request = new QueryTicketsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.extra)) {
      request.extraShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.extra, "Extra", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.caseId)) {
      body["CaseId"] = request.caseId;
    }

    if (!$dara.isNull(request.caseStatus)) {
      body["CaseStatus"] = request.caseStatus;
    }

    if (!$dara.isNull(request.caseType)) {
      body["CaseType"] = request.caseType;
    }

    if (!$dara.isNull(request.channelId)) {
      body["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.channelType)) {
      body["ChannelType"] = request.channelType;
    }

    if (!$dara.isNull(request.currentPage)) {
      body["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.dealId)) {
      body["DealId"] = request.dealId;
    }

    if (!$dara.isNull(request.extraShrink)) {
      body["Extra"] = request.extraShrink;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.srType)) {
      body["SrType"] = request.srType;
    }

    if (!$dara.isNull(request.taskStatus)) {
      body["TaskStatus"] = request.taskStatus;
    }

    if (!$dara.isNull(request.touchId)) {
      body["TouchId"] = request.touchId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryTickets",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<QueryTicketsResponse>(await this.callApi(params, req, runtime), new QueryTicketsResponse({}));
  }

  /**
   * @param request - QueryTicketsRequest
   * @returns QueryTicketsResponse
   */
  async queryTickets(request: QueryTicketsRequest): Promise<QueryTicketsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryTicketsWithOptions(request, runtime);
  }

  /**
   * @param request - QueryTouchListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryTouchListResponse
   */
  async queryTouchListWithOptions(request: QueryTouchListRequest, runtime: $dara.RuntimeOptions): Promise<QueryTouchListResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.channelId)) {
      body["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.channelType)) {
      body["ChannelType"] = request.channelType;
    }

    if (!$dara.isNull(request.closeTimeEnd)) {
      body["CloseTimeEnd"] = request.closeTimeEnd;
    }

    if (!$dara.isNull(request.closeTimeStart)) {
      body["CloseTimeStart"] = request.closeTimeStart;
    }

    if (!$dara.isNull(request.currentPage)) {
      body["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.evaluationLevel)) {
      body["EvaluationLevel"] = request.evaluationLevel;
    }

    if (!$dara.isNull(request.evaluationScore)) {
      body["EvaluationScore"] = request.evaluationScore;
    }

    if (!$dara.isNull(request.evaluationStatus)) {
      body["EvaluationStatus"] = request.evaluationStatus;
    }

    if (!$dara.isNull(request.firstTimeEnd)) {
      body["FirstTimeEnd"] = request.firstTimeEnd;
    }

    if (!$dara.isNull(request.firstTimeStart)) {
      body["FirstTimeStart"] = request.firstTimeStart;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.memberId)) {
      body["MemberId"] = request.memberId;
    }

    if (!$dara.isNull(request.memberName)) {
      body["MemberName"] = request.memberName;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.queueId)) {
      body["QueueId"] = request.queueId;
    }

    if (!$dara.isNull(request.servicerId)) {
      body["ServicerId"] = request.servicerId;
    }

    if (!$dara.isNull(request.servicerName)) {
      body["ServicerName"] = request.servicerName;
    }

    if (!$dara.isNull(request.touchId)) {
      body["TouchId"] = request.touchId;
    }

    if (!$dara.isNull(request.touchType)) {
      body["TouchType"] = request.touchType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryTouchList",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<QueryTouchListResponse>(await this.callApi(params, req, runtime), new QueryTouchListResponse({}));
  }

  /**
   * @param request - QueryTouchListRequest
   * @returns QueryTouchListResponse
   */
  async queryTouchList(request: QueryTouchListRequest): Promise<QueryTouchListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryTouchListWithOptions(request, runtime);
  }

  /**
   * 从技能组中移除坐席
   * 
   * @param tmpReq - RemoveAgentFromSkillGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveAgentFromSkillGroupResponse
   */
  async removeAgentFromSkillGroupWithOptions(tmpReq: RemoveAgentFromSkillGroupRequest, runtime: $dara.RuntimeOptions): Promise<RemoveAgentFromSkillGroupResponse> {
    tmpReq.validate();
    let request = new RemoveAgentFromSkillGroupShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.agentIds)) {
      request.agentIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.agentIds, "AgentIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.agentIdsShrink)) {
      query["AgentIds"] = request.agentIdsShrink;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.skillGroupId)) {
      query["SkillGroupId"] = request.skillGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveAgentFromSkillGroup",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RemoveAgentFromSkillGroupResponse>(await this.callApi(params, req, runtime), new RemoveAgentFromSkillGroupResponse({}));
  }

  /**
   * 从技能组中移除坐席
   * 
   * @param request - RemoveAgentFromSkillGroupRequest
   * @returns RemoveAgentFromSkillGroupResponse
   */
  async removeAgentFromSkillGroup(request: RemoveAgentFromSkillGroupRequest): Promise<RemoveAgentFromSkillGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeAgentFromSkillGroupWithOptions(request, runtime);
  }

  /**
   * @param request - RemoveSkillGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveSkillGroupResponse
   */
  async removeSkillGroupWithOptions(request: RemoveSkillGroupRequest, runtime: $dara.RuntimeOptions): Promise<RemoveSkillGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.skillGroupId)) {
      body["SkillGroupId"] = request.skillGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveSkillGroup",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RemoveSkillGroupResponse>(await this.callApi(params, req, runtime), new RemoveSkillGroupResponse({}));
  }

  /**
   * @param request - RemoveSkillGroupRequest
   * @returns RemoveSkillGroupResponse
   */
  async removeSkillGroup(request: RemoveSkillGroupRequest): Promise<RemoveSkillGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeSkillGroupWithOptions(request, runtime);
  }

  /**
   * 重置热线号码
   * 
   * @param tmpReq - ResetHotlineNumberRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResetHotlineNumberResponse
   */
  async resetHotlineNumberWithOptions(tmpReq: ResetHotlineNumberRequest, runtime: $dara.RuntimeOptions): Promise<ResetHotlineNumberResponse> {
    tmpReq.validate();
    let request = new ResetHotlineNumberShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.outboundRangeList)) {
      request.outboundRangeListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.outboundRangeList, "OutboundRangeList", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.enableInbound)) {
      body["EnableInbound"] = request.enableInbound;
    }

    if (!$dara.isNull(request.enableInboundEvaluation)) {
      body["EnableInboundEvaluation"] = request.enableInboundEvaluation;
    }

    if (!$dara.isNull(request.enableOutbound)) {
      body["EnableOutbound"] = request.enableOutbound;
    }

    if (!$dara.isNull(request.enableOutboundEvaluation)) {
      body["EnableOutboundEvaluation"] = request.enableOutboundEvaluation;
    }

    if (!$dara.isNull(request.evaluationLevel)) {
      body["EvaluationLevel"] = request.evaluationLevel;
    }

    if (!$dara.isNull(request.hotlineNumber)) {
      body["HotlineNumber"] = request.hotlineNumber;
    }

    if (!$dara.isNull(request.inboundFlowId)) {
      body["InboundFlowId"] = request.inboundFlowId;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.outboundAllDepart)) {
      body["OutboundAllDepart"] = request.outboundAllDepart;
    }

    if (!$dara.isNull(request.outboundRangeListShrink)) {
      body["OutboundRangeList"] = request.outboundRangeListShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResetHotlineNumber",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ResetHotlineNumberResponse>(await this.callApi(params, req, runtime), new ResetHotlineNumberResponse({}));
  }

  /**
   * 重置热线号码
   * 
   * @param request - ResetHotlineNumberRequest
   * @returns ResetHotlineNumberResponse
   */
  async resetHotlineNumber(request: ResetHotlineNumberRequest): Promise<ResetHotlineNumberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resetHotlineNumberWithOptions(request, runtime);
  }

  /**
   * @param request - RestartOutboundTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RestartOutboundTaskResponse
   */
  async restartOutboundTaskWithOptions(request: RestartOutboundTaskRequest, runtime: $dara.RuntimeOptions): Promise<RestartOutboundTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.outboundTaskId)) {
      query["OutboundTaskId"] = request.outboundTaskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RestartOutboundTask",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RestartOutboundTaskResponse>(await this.callApi(params, req, runtime), new RestartOutboundTaskResponse({}));
  }

  /**
   * @param request - RestartOutboundTaskRequest
   * @returns RestartOutboundTaskResponse
   */
  async restartOutboundTask(request: RestartOutboundTaskRequest): Promise<RestartOutboundTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.restartOutboundTaskWithOptions(request, runtime);
  }

  /**
   * @param request - RobotCallRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RobotCallResponse
   */
  async robotCallWithOptions(request: RobotCallRequest, runtime: $dara.RuntimeOptions): Promise<RobotCallResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.calledNumber)) {
      query["CalledNumber"] = request.calledNumber;
    }

    if (!$dara.isNull(request.calledShowNumber)) {
      query["CalledShowNumber"] = request.calledShowNumber;
    }

    if (!$dara.isNull(request.earlyMediaAsr)) {
      query["EarlyMediaAsr"] = request.earlyMediaAsr;
    }

    if (!$dara.isNull(request.outId)) {
      query["OutId"] = request.outId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.params)) {
      query["Params"] = request.params;
    }

    if (!$dara.isNull(request.recordFlag)) {
      query["RecordFlag"] = request.recordFlag;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.robotId)) {
      query["RobotId"] = request.robotId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RobotCall",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RobotCallResponse>(await this.callApi(params, req, runtime), new RobotCallResponse({}));
  }

  /**
   * @param request - RobotCallRequest
   * @returns RobotCallResponse
   */
  async robotCall(request: RobotCallRequest): Promise<RobotCallResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.robotCallWithOptions(request, runtime);
  }

  /**
   * @param request - SendCcoSmartCallRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SendCcoSmartCallResponse
   */
  async sendCcoSmartCallWithOptions(request: SendCcoSmartCallRequest, runtime: $dara.RuntimeOptions): Promise<SendCcoSmartCallResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.actionCodeBreak)) {
      query["ActionCodeBreak"] = request.actionCodeBreak;
    }

    if (!$dara.isNull(request.actionCodeTimeBreak)) {
      query["ActionCodeTimeBreak"] = request.actionCodeTimeBreak;
    }

    if (!$dara.isNull(request.asrAlsAmId)) {
      query["AsrAlsAmId"] = request.asrAlsAmId;
    }

    if (!$dara.isNull(request.asrBaseId)) {
      query["AsrBaseId"] = request.asrBaseId;
    }

    if (!$dara.isNull(request.asrModelId)) {
      query["AsrModelId"] = request.asrModelId;
    }

    if (!$dara.isNull(request.asrVocabularyId)) {
      query["AsrVocabularyId"] = request.asrVocabularyId;
    }

    if (!$dara.isNull(request.backgroundFileCode)) {
      query["BackgroundFileCode"] = request.backgroundFileCode;
    }

    if (!$dara.isNull(request.backgroundSpeed)) {
      query["BackgroundSpeed"] = request.backgroundSpeed;
    }

    if (!$dara.isNull(request.backgroundVolume)) {
      query["BackgroundVolume"] = request.backgroundVolume;
    }

    if (!$dara.isNull(request.calledNumber)) {
      query["CalledNumber"] = request.calledNumber;
    }

    if (!$dara.isNull(request.calledShowNumber)) {
      query["CalledShowNumber"] = request.calledShowNumber;
    }

    if (!$dara.isNull(request.dynamicId)) {
      query["DynamicId"] = request.dynamicId;
    }

    if (!$dara.isNull(request.earlyMediaAsr)) {
      query["EarlyMediaAsr"] = request.earlyMediaAsr;
    }

    if (!$dara.isNull(request.enableITN)) {
      query["EnableITN"] = request.enableITN;
    }

    if (!$dara.isNull(request.muteTime)) {
      query["MuteTime"] = request.muteTime;
    }

    if (!$dara.isNull(request.outId)) {
      query["OutId"] = request.outId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pauseTime)) {
      query["PauseTime"] = request.pauseTime;
    }

    if (!$dara.isNull(request.playTimes)) {
      query["PlayTimes"] = request.playTimes;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.recordFlag)) {
      query["RecordFlag"] = request.recordFlag;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.sessionTimeout)) {
      query["SessionTimeout"] = request.sessionTimeout;
    }

    if (!$dara.isNull(request.speed)) {
      query["Speed"] = request.speed;
    }

    if (!$dara.isNull(request.ttsConf)) {
      query["TtsConf"] = request.ttsConf;
    }

    if (!$dara.isNull(request.ttsSpeed)) {
      query["TtsSpeed"] = request.ttsSpeed;
    }

    if (!$dara.isNull(request.ttsStyle)) {
      query["TtsStyle"] = request.ttsStyle;
    }

    if (!$dara.isNull(request.ttsVolume)) {
      query["TtsVolume"] = request.ttsVolume;
    }

    if (!$dara.isNull(request.voiceCode)) {
      query["VoiceCode"] = request.voiceCode;
    }

    if (!$dara.isNull(request.voiceCodeParam)) {
      query["VoiceCodeParam"] = request.voiceCodeParam;
    }

    if (!$dara.isNull(request.volume)) {
      query["Volume"] = request.volume;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SendCcoSmartCall",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<SendCcoSmartCallResponse>(await this.callApi(params, req, runtime), new SendCcoSmartCallResponse({}));
  }

  /**
   * @param request - SendCcoSmartCallRequest
   * @returns SendCcoSmartCallResponse
   */
  async sendCcoSmartCall(request: SendCcoSmartCallRequest): Promise<SendCcoSmartCallResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.sendCcoSmartCallWithOptions(request, runtime);
  }

  /**
   * @param request - SendCcoSmartCallOperateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SendCcoSmartCallOperateResponse
   */
  async sendCcoSmartCallOperateWithOptions(request: SendCcoSmartCallOperateRequest, runtime: $dara.RuntimeOptions): Promise<SendCcoSmartCallOperateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.callId)) {
      query["CallId"] = request.callId;
    }

    if (!$dara.isNull(request.command)) {
      query["Command"] = request.command;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.param)) {
      query["Param"] = request.param;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SendCcoSmartCallOperate",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<SendCcoSmartCallOperateResponse>(await this.callApi(params, req, runtime), new SendCcoSmartCallOperateResponse({}));
  }

  /**
   * @param request - SendCcoSmartCallOperateRequest
   * @returns SendCcoSmartCallOperateResponse
   */
  async sendCcoSmartCallOperate(request: SendCcoSmartCallOperateRequest): Promise<SendCcoSmartCallOperateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.sendCcoSmartCallOperateWithOptions(request, runtime);
  }

  /**
   * @param request - SendHotlineHeartBeatRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SendHotlineHeartBeatResponse
   */
  async sendHotlineHeartBeatWithOptions(request: SendHotlineHeartBeatRequest, runtime: $dara.RuntimeOptions): Promise<SendHotlineHeartBeatResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountName)) {
      body["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.token)) {
      body["Token"] = request.token;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SendHotlineHeartBeat",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<SendHotlineHeartBeatResponse>(await this.callApi(params, req, runtime), new SendHotlineHeartBeatResponse({}));
  }

  /**
   * @param request - SendHotlineHeartBeatRequest
   * @returns SendHotlineHeartBeatResponse
   */
  async sendHotlineHeartBeat(request: SendHotlineHeartBeatRequest): Promise<SendHotlineHeartBeatResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.sendHotlineHeartBeatWithOptions(request, runtime);
  }

  /**
   * 启动智能外呼任务
   * 
   * @param request - StartAiOutboundTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartAiOutboundTaskResponse
   */
  async startAiOutboundTaskWithOptions(request: StartAiOutboundTaskRequest, runtime: $dara.RuntimeOptions): Promise<StartAiOutboundTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartAiOutboundTask",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<StartAiOutboundTaskResponse>(await this.callApi(params, req, runtime), new StartAiOutboundTaskResponse({}));
  }

  /**
   * 启动智能外呼任务
   * 
   * @param request - StartAiOutboundTaskRequest
   * @returns StartAiOutboundTaskResponse
   */
  async startAiOutboundTask(request: StartAiOutboundTaskRequest): Promise<StartAiOutboundTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startAiOutboundTaskWithOptions(request, runtime);
  }

  /**
   * @param request - StartCallRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartCallResponse
   */
  async startCallWithOptions(request: StartCallRequest, runtime: $dara.RuntimeOptions): Promise<StartCallResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountName)) {
      body["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.callee)) {
      body["Callee"] = request.callee;
    }

    if (!$dara.isNull(request.caller)) {
      body["Caller"] = request.caller;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartCall",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<StartCallResponse>(await this.callApi(params, req, runtime), new StartCallResponse({}));
  }

  /**
   * @param request - StartCallRequest
   * @returns StartCallResponse
   */
  async startCall(request: StartCallRequest): Promise<StartCallResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startCallWithOptions(request, runtime);
  }

  /**
   * @param request - StartCallV2Request
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartCallV2Response
   */
  async startCallV2WithOptions(request: StartCallV2Request, runtime: $dara.RuntimeOptions): Promise<StartCallV2Response> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountName)) {
      body["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.callee)) {
      body["Callee"] = request.callee;
    }

    if (!$dara.isNull(request.caller)) {
      body["Caller"] = request.caller;
    }

    if (!$dara.isNull(request.callerType)) {
      body["CallerType"] = request.callerType;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartCallV2",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<StartCallV2Response>(await this.callApi(params, req, runtime), new StartCallV2Response({}));
  }

  /**
   * @param request - StartCallV2Request
   * @returns StartCallV2Response
   */
  async startCallV2(request: StartCallV2Request): Promise<StartCallV2Response> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startCallV2WithOptions(request, runtime);
  }

  /**
   * 修改在线客服为上班状态
   * 
   * @param request - StartChatWorkRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartChatWorkResponse
   */
  async startChatWorkWithOptions(request: StartChatWorkRequest, runtime: $dara.RuntimeOptions): Promise<StartChatWorkResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountName)) {
      body["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartChatWork",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<StartChatWorkResponse>(await this.callApi(params, req, runtime), new StartChatWorkResponse({}));
  }

  /**
   * 修改在线客服为上班状态
   * 
   * @param request - StartChatWorkRequest
   * @returns StartChatWorkResponse
   */
  async startChatWork(request: StartChatWorkRequest): Promise<StartChatWorkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startChatWorkWithOptions(request, runtime);
  }

  /**
   * @param request - StartHotlineServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartHotlineServiceResponse
   */
  async startHotlineServiceWithOptions(request: StartHotlineServiceRequest, runtime: $dara.RuntimeOptions): Promise<StartHotlineServiceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountName)) {
      body["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartHotlineService",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<StartHotlineServiceResponse>(await this.callApi(params, req, runtime), new StartHotlineServiceResponse({}));
  }

  /**
   * @param request - StartHotlineServiceRequest
   * @returns StartHotlineServiceResponse
   */
  async startHotlineService(request: StartHotlineServiceRequest): Promise<StartHotlineServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startHotlineServiceWithOptions(request, runtime);
  }

  /**
   * @param request - StartMicroOutboundRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartMicroOutboundResponse
   */
  async startMicroOutboundWithOptions(request: StartMicroOutboundRequest, runtime: $dara.RuntimeOptions): Promise<StartMicroOutboundResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.accountType)) {
      query["AccountType"] = request.accountType;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.calledNumber)) {
      query["CalledNumber"] = request.calledNumber;
    }

    if (!$dara.isNull(request.callingNumber)) {
      query["CallingNumber"] = request.callingNumber;
    }

    if (!$dara.isNull(request.commandCode)) {
      query["CommandCode"] = request.commandCode;
    }

    if (!$dara.isNull(request.extInfo)) {
      query["ExtInfo"] = request.extInfo;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartMicroOutbound",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<StartMicroOutboundResponse>(await this.callApi(params, req, runtime), new StartMicroOutboundResponse({}));
  }

  /**
   * @param request - StartMicroOutboundRequest
   * @returns StartMicroOutboundResponse
   */
  async startMicroOutbound(request: StartMicroOutboundRequest): Promise<StartMicroOutboundResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startMicroOutboundWithOptions(request, runtime);
  }

  /**
   * 立即或定时启动智能外呼任务
   * 
   * @param request - StartTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartTaskResponse
   */
  async startTaskWithOptions(request: StartTaskRequest, runtime: $dara.RuntimeOptions): Promise<StartTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.startNow)) {
      query["StartNow"] = request.startNow;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartTask",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<StartTaskResponse>(await this.callApi(params, req, runtime), new StartTaskResponse({}));
  }

  /**
   * 立即或定时启动智能外呼任务
   * 
   * @param request - StartTaskRequest
   * @returns StartTaskResponse
   */
  async startTask(request: StartTaskRequest): Promise<StartTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startTaskWithOptions(request, runtime);
  }

  /**
   * 手动暂停智能外呼任务
   * 
   * @param request - StopAiOutboundTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopAiOutboundTaskResponse
   */
  async stopAiOutboundTaskWithOptions(request: StopAiOutboundTaskRequest, runtime: $dara.RuntimeOptions): Promise<StopAiOutboundTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopAiOutboundTask",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<StopAiOutboundTaskResponse>(await this.callApi(params, req, runtime), new StopAiOutboundTaskResponse({}));
  }

  /**
   * 手动暂停智能外呼任务
   * 
   * @param request - StopAiOutboundTaskRequest
   * @returns StopAiOutboundTaskResponse
   */
  async stopAiOutboundTask(request: StopAiOutboundTaskRequest): Promise<StopAiOutboundTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopAiOutboundTaskWithOptions(request, runtime);
  }

  /**
   * 暂停外呼任务
   * 
   * @param request - StopTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopTaskResponse
   */
  async stopTaskWithOptions(request: StopTaskRequest, runtime: $dara.RuntimeOptions): Promise<StopTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopTask",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<StopTaskResponse>(await this.callApi(params, req, runtime), new StopTaskResponse({}));
  }

  /**
   * 暂停外呼任务
   * 
   * @param request - StopTaskRequest
   * @returns StopTaskResponse
   */
  async stopTask(request: StopTaskRequest): Promise<StopTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopTaskWithOptions(request, runtime);
  }

  /**
   * @param request - SuspendHotlineServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SuspendHotlineServiceResponse
   */
  async suspendHotlineServiceWithOptions(request: SuspendHotlineServiceRequest, runtime: $dara.RuntimeOptions): Promise<SuspendHotlineServiceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountName)) {
      body["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SuspendHotlineService",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<SuspendHotlineServiceResponse>(await this.callApi(params, req, runtime), new SuspendHotlineServiceResponse({}));
  }

  /**
   * @param request - SuspendHotlineServiceRequest
   * @returns SuspendHotlineServiceResponse
   */
  async suspendHotlineService(request: SuspendHotlineServiceRequest): Promise<SuspendHotlineServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.suspendHotlineServiceWithOptions(request, runtime);
  }

  /**
   * @param request - SuspendOutboundTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SuspendOutboundTaskResponse
   */
  async suspendOutboundTaskWithOptions(request: SuspendOutboundTaskRequest, runtime: $dara.RuntimeOptions): Promise<SuspendOutboundTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.outboundTaskId)) {
      query["OutboundTaskId"] = request.outboundTaskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SuspendOutboundTask",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<SuspendOutboundTaskResponse>(await this.callApi(params, req, runtime), new SuspendOutboundTaskResponse({}));
  }

  /**
   * @param request - SuspendOutboundTaskRequest
   * @returns SuspendOutboundTaskResponse
   */
  async suspendOutboundTask(request: SuspendOutboundTaskRequest): Promise<SuspendOutboundTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.suspendOutboundTaskWithOptions(request, runtime);
  }

  /**
   * 终止智能外呼任务
   * 
   * @param request - TerminateAiOutboundTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TerminateAiOutboundTaskResponse
   */
  async terminateAiOutboundTaskWithOptions(request: TerminateAiOutboundTaskRequest, runtime: $dara.RuntimeOptions): Promise<TerminateAiOutboundTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TerminateAiOutboundTask",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<TerminateAiOutboundTaskResponse>(await this.callApi(params, req, runtime), new TerminateAiOutboundTaskResponse({}));
  }

  /**
   * 终止智能外呼任务
   * 
   * @param request - TerminateAiOutboundTaskRequest
   * @returns TerminateAiOutboundTaskResponse
   */
  async terminateAiOutboundTask(request: TerminateAiOutboundTaskRequest): Promise<TerminateAiOutboundTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.terminateAiOutboundTaskWithOptions(request, runtime);
  }

  /**
   * @param request - TransferCallToSkillGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TransferCallToSkillGroupResponse
   */
  async transferCallToSkillGroupWithOptions(request: TransferCallToSkillGroupRequest, runtime: $dara.RuntimeOptions): Promise<TransferCallToSkillGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountName)) {
      body["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.callId)) {
      body["CallId"] = request.callId;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.connectionId)) {
      body["ConnectionId"] = request.connectionId;
    }

    if (!$dara.isNull(request.holdConnectionId)) {
      body["HoldConnectionId"] = request.holdConnectionId;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.isSingleTransfer)) {
      body["IsSingleTransfer"] = request.isSingleTransfer;
    }

    if (!$dara.isNull(request.jobId)) {
      body["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.skillGroupId)) {
      body["SkillGroupId"] = request.skillGroupId;
    }

    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "TransferCallToSkillGroup",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<TransferCallToSkillGroupResponse>(await this.callApi(params, req, runtime), new TransferCallToSkillGroupResponse({}));
  }

  /**
   * @param request - TransferCallToSkillGroupRequest
   * @returns TransferCallToSkillGroupResponse
   */
  async transferCallToSkillGroup(request: TransferCallToSkillGroupRequest): Promise<TransferCallToSkillGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.transferCallToSkillGroupWithOptions(request, runtime);
  }

  /**
   * @param request - UpdateAgentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAgentResponse
   */
  async updateAgentWithOptions(request: UpdateAgentRequest, runtime: $dara.RuntimeOptions): Promise<UpdateAgentResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountName)) {
      body["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.displayName)) {
      body["DisplayName"] = request.displayName;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.skillGroupId)) {
      body["SkillGroupId"] = request.skillGroupId;
    }

    if (!$dara.isNull(request.skillGroupIdList)) {
      body["SkillGroupIdList"] = request.skillGroupIdList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAgent",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "PUT",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<UpdateAgentResponse>(await this.callApi(params, req, runtime), new UpdateAgentResponse({}));
  }

  /**
   * @param request - UpdateAgentRequest
   * @returns UpdateAgentResponse
   */
  async updateAgent(request: UpdateAgentRequest): Promise<UpdateAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAgentWithOptions(request, runtime);
  }

  /**
   * 更新智能外呼任务（预测式外呼、自动外呼）
   * 
   * @param tmpReq - UpdateAiOutboundTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAiOutboundTaskResponse
   */
  async updateAiOutboundTaskWithOptions(tmpReq: UpdateAiOutboundTaskRequest, runtime: $dara.RuntimeOptions): Promise<UpdateAiOutboundTaskResponse> {
    tmpReq.validate();
    let request = new UpdateAiOutboundTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.outboundNums)) {
      request.outboundNumsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.outboundNums, "OutboundNums", "json");
    }

    if (!$dara.isNull(tmpReq.recallRule)) {
      request.recallRuleShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.recallRule, "RecallRule", "json");
    }

    let query = { };
    if (!$dara.isNull(request.concurrentRate)) {
      query["ConcurrentRate"] = request.concurrentRate;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.executionTime)) {
      query["ExecutionTime"] = request.executionTime;
    }

    if (!$dara.isNull(request.forecastCallRate)) {
      query["ForecastCallRate"] = request.forecastCallRate;
    }

    if (!$dara.isNull(request.handlerId)) {
      query["HandlerId"] = request.handlerId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.numRepeated)) {
      query["NumRepeated"] = request.numRepeated;
    }

    if (!$dara.isNull(request.outboundNumsShrink)) {
      query["OutboundNums"] = request.outboundNumsShrink;
    }

    if (!$dara.isNull(request.recallRuleShrink)) {
      query["RecallRule"] = request.recallRuleShrink;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAiOutboundTask",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<UpdateAiOutboundTaskResponse>(await this.callApi(params, req, runtime), new UpdateAiOutboundTaskResponse({}));
  }

  /**
   * 更新智能外呼任务（预测式外呼、自动外呼）
   * 
   * @param request - UpdateAiOutboundTaskRequest
   * @returns UpdateAiOutboundTaskResponse
   */
  async updateAiOutboundTask(request: UpdateAiOutboundTaskRequest): Promise<UpdateAiOutboundTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAiOutboundTaskWithOptions(request, runtime);
  }

  /**
   * 更新部门信息
   * 
   * @param request - UpdateDepartmentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDepartmentResponse
   */
  async updateDepartmentWithOptions(request: UpdateDepartmentRequest, runtime: $dara.RuntimeOptions): Promise<UpdateDepartmentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.departmentId)) {
      query["DepartmentId"] = request.departmentId;
    }

    if (!$dara.isNull(request.departmentName)) {
      query["DepartmentName"] = request.departmentName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDepartment",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<UpdateDepartmentResponse>(await this.callApi(params, req, runtime), new UpdateDepartmentResponse({}));
  }

  /**
   * 更新部门信息
   * 
   * @param request - UpdateDepartmentRequest
   * @returns UpdateDepartmentResponse
   */
  async updateDepartment(request: UpdateDepartmentRequest): Promise<UpdateDepartmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDepartmentWithOptions(request, runtime);
  }

  /**
   * @param request - UpdateOuterAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateOuterAccountResponse
   */
  async updateOuterAccountWithOptions(request: UpdateOuterAccountRequest, runtime: $dara.RuntimeOptions): Promise<UpdateOuterAccountResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateOuterAccount",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<UpdateOuterAccountResponse>(await this.callApi(params, req, runtime), new UpdateOuterAccountResponse({}));
  }

  /**
   * @param request - UpdateOuterAccountRequest
   * @returns UpdateOuterAccountResponse
   */
  async updateOuterAccount(request: UpdateOuterAccountRequest): Promise<UpdateOuterAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateOuterAccountWithOptions(request, runtime);
  }

  /**
   * @param request - UpdateSkillGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSkillGroupResponse
   */
  async updateSkillGroupWithOptions(request: UpdateSkillGroupRequest, runtime: $dara.RuntimeOptions): Promise<UpdateSkillGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.displayName)) {
      query["DisplayName"] = request.displayName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.skillGroupId)) {
      query["SkillGroupId"] = request.skillGroupId;
    }

    if (!$dara.isNull(request.skillGroupName)) {
      query["SkillGroupName"] = request.skillGroupName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateSkillGroup",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<UpdateSkillGroupResponse>(await this.callApi(params, req, runtime), new UpdateSkillGroupResponse({}));
  }

  /**
   * @param request - UpdateSkillGroupRequest
   * @returns UpdateSkillGroupResponse
   */
  async updateSkillGroup(request: UpdateSkillGroupRequest): Promise<UpdateSkillGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateSkillGroupWithOptions(request, runtime);
  }

}
