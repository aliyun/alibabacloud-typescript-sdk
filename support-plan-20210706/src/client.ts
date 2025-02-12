// This file is auto-generated, don't edit it
/**
 */
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import * as $dara from '@darabonba/typescript';

export class ListEnterpriseDingtalkGroupCustomerMembersResponseBodyData extends $dara.Model {
  isAdmin?: boolean;
  name?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      isAdmin: 'IsAdmin',
      name: 'Name',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isAdmin: 'boolean',
      name: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnterpriseDingtalkGroupsResponseBodyData extends $dara.Model {
  /**
   * @example
   * A公司服务群
   */
  groupName?: string;
  /**
   * @example
   * 123
   */
  openGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      openGroupId: 'OpenGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      openGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnterpriseDingtalkGroupMember extends $dara.Model {
  /**
   * @remarks
   * 代表资源名称的资源属性字段
   * 
   * @example
   * true
   */
  isAdmin?: boolean;
  /**
   * @remarks
   * 代表资源组的资源属性字段
   * 
   * @example
   * 130xxxxxxxx
   */
  mobile?: string;
  /**
   * @remarks
   * 代表创建时间的资源属性字段
   * 
   * @example
   * 张三
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      isAdmin: 'IsAdmin',
      mobile: 'Mobile',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isAdmin: 'boolean',
      mobile: 'string',
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

export class AddEnterpriseGroupMemberToTaskGroupRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * E240815B72K5D3
   */
  taskOrderId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PtWoW82DJI1zcTwsT98kLIgAj7kfASzfC6StcpV7hKs=
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      taskOrderId: 'TaskOrderId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskOrderId: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddEnterpriseGroupMemberToTaskGroupResponseBody extends $dara.Model {
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
   * ok
   */
  message?: string;
  /**
   * @example
   * 43135C31-E47A-5AD7-A693-6DC635201CE4
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

export class AddEnterpriseGroupMemberToTaskGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddEnterpriseGroupMemberToTaskGroupResponseBody;
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
      body: AddEnterpriseGroupMemberToTaskGroupResponseBody,
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

export class CreateTaskOrderRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123
   */
  createUserId?: string;
  isUrgent?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cid+lUpHxTIXt7DYqJDcpVxlA==
   */
  openGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 任务单标题：必填
   */
  overview?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ecs
   */
  productCode?: string;
  /**
   * @example
   * 重要性描述
   */
  urgentDescription?: string;
  static names(): { [key: string]: string } {
    return {
      createUserId: 'CreateUserId',
      isUrgent: 'IsUrgent',
      openGroupId: 'OpenGroupId',
      overview: 'Overview',
      productCode: 'ProductCode',
      urgentDescription: 'UrgentDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createUserId: 'string',
      isUrgent: 'boolean',
      openGroupId: 'string',
      overview: 'string',
      productCode: 'string',
      urgentDescription: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskOrderResponseBody extends $dara.Model {
  /**
   * @remarks
   * code
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * E21111796147LE
   */
  data?: string;
  /**
   * @remarks
   * msg
   * 
   * @example
   * ok
   */
  message?: string;
  /**
   * @remarks
   * requestId
   * 
   * @example
   * 123
   */
  requestId?: string;
  /**
   * @remarks
   * success
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

export class CreateTaskOrderResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateTaskOrderResponseBody;
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
      body: CreateTaskOrderResponseBody,
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

export class ListDdTaskOrderRequest extends $dara.Model {
  /**
   * @remarks
   * createRealName
   * 
   * @example
   * Tom
   */
  createRealName?: string;
  /**
   * @remarks
   * endTime
   * 
   * @example
   * 2024-08-20 14:09:16
   */
  endTime?: string;
  isUrgent?: boolean;
  /**
   * @remarks
   * openGroupId
   * 
   * This parameter is required.
   * 
   * @example
   * DAWNN14N
   */
  openGroupId?: string;
  /**
   * @remarks
   * pageNo
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * pageSize
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * startTime
   * 
   * @example
   * 2024-08-01 14:09:11
   */
  startTime?: string;
  /**
   * @remarks
   * taskStatus
   * 
   * @example
   * dealingNode
   */
  taskStatus?: string;
  static names(): { [key: string]: string } {
    return {
      createRealName: 'CreateRealName',
      endTime: 'EndTime',
      isUrgent: 'IsUrgent',
      openGroupId: 'OpenGroupId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      startTime: 'StartTime',
      taskStatus: 'TaskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createRealName: 'string',
      endTime: 'string',
      isUrgent: 'boolean',
      openGroupId: 'string',
      pageNo: 'number',
      pageSize: 'number',
      startTime: 'string',
      taskStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDdTaskOrderResponseBody extends $dara.Model {
  /**
   * @remarks
   * code
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * data
   * 
   * @example
   * {   "msg": "请求成功",   "code": "200",   "data": [     {       "wfNodeId": "dealingNode",//任务单状态       "createEmpId": null,//创建人工号，可以忽略       "createTime": 1637571435000,//任务单创建时间       "orderId": "E2111221H1UKCZ",//任务单号       "isImportant": "normal",//是否紧急       "closeTime": null,//任务单关单时间       "taskTitle": "测试单16点44",//标题       "productType": "3270"//问题分类     },     {       "wfNodeId": "dealingNode",       "createEmpId": null,       "createTime": 1637820497000,       "orderId": "E211125CG111EM",       "isImportant": "normal",       "closeTime": null,       "taskTitle": "测试单14",       "class": "com.aliyun.dingtalklanding.dto.OpenTaskOrderDTO",       "productType": "3270"     }   ],   "success": true,   "requestId": "123",   "class": "com.aliyun.dingtalklanding.pop.dto.PopResultDTO" }
   */
  data?: string;
  /**
   * @remarks
   * msg
   * 
   * @example
   * 请求成功
   */
  message?: string;
  /**
   * @remarks
   * requestId
   * 
   * @example
   * 2F8557E4-742B-1CF7-8E83-28CD0C1F7B48
   */
  requestId?: string;
  /**
   * @remarks
   * success
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

export class ListDdTaskOrderResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDdTaskOrderResponseBody;
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
      body: ListDdTaskOrderResponseBody,
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

export class ListEnterpriseDingtalkGroupCustomerMembersRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * DAWNN14N
   */
  openGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      openGroupId: 'OpenGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      openGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnterpriseDingtalkGroupCustomerMembersResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: ListEnterpriseDingtalkGroupCustomerMembersResponseBodyData[];
  /**
   * @example
   * Invalid data
   */
  message?: string;
  /**
   * @example
   * 123
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
      data: { 'type': 'array', 'itemType': ListEnterpriseDingtalkGroupCustomerMembersResponseBodyData },
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

export class ListEnterpriseDingtalkGroupCustomerMembersResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListEnterpriseDingtalkGroupCustomerMembersResponseBody;
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
      body: ListEnterpriseDingtalkGroupCustomerMembersResponseBody,
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

export class ListEnterpriseDingtalkGroupsResponseBody extends $dara.Model {
  /**
   * @example
   * true
   */
  code?: string;
  data?: ListEnterpriseDingtalkGroupsResponseBodyData[];
  /**
   * @example
   * Data Invalid
   */
  message?: string;
  /**
   * @example
   * 12xxxxx
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
      data: { 'type': 'array', 'itemType': ListEnterpriseDingtalkGroupsResponseBodyData },
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

export class ListEnterpriseDingtalkGroupsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListEnterpriseDingtalkGroupsResponseBody;
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
      body: ListEnterpriseDingtalkGroupsResponseBody,
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

export class ListProductByGroupRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cidXcezGVQJjiWy2PzXylGwvg==
   */
  openGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      openGroupId: 'OpenGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      openGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductByGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * code
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * data
   * 
   * @example
   * [     {       "wfNodeId": "dealingNode",//任务单状态       "createEmpId": null,//创建人工号，可以忽略       "createTime": 1637571435000,//任务单创建时间       "orderId": "E2111221H1UKCZ",//任务单号       "isImportant": "normal",//是否紧急       "closeTime": null,//任务单关单时间       "taskTitle": "测试单16点44",//标题       "productType": "3270"//问题分类     },     {       "wfNodeId": "dealingNode",       "createEmpId": null,       "createTime": 1637820497000,       "orderId": "E211125CG111EM",       "isImportant": "normal",       "closeTime": null,       "taskTitle": "测试单14",       "class": "com.aliyun.dingtalklanding.dto.OpenTaskOrderDTO",       "productType": "3270"     }   ]
   */
  data?: string;
  /**
   * @remarks
   * msg
   * 
   * @example
   * 请求成功
   */
  message?: string;
  /**
   * @remarks
   * requestId
   * 
   * @example
   * 123
   */
  requestId?: string;
  /**
   * @remarks
   * success
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

export class ListProductByGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListProductByGroupResponseBody;
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
      body: ListProductByGroupResponseBody,
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
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("support-plan", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 添加客户服务主群人员进子群
   * 
   * @param request - AddEnterpriseGroupMemberToTaskGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddEnterpriseGroupMemberToTaskGroupResponse
   */
  async addEnterpriseGroupMemberToTaskGroupWithOptions(request: AddEnterpriseGroupMemberToTaskGroupRequest, runtime: $dara.RuntimeOptions): Promise<AddEnterpriseGroupMemberToTaskGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.taskOrderId)) {
      query["TaskOrderId"] = request.taskOrderId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddEnterpriseGroupMemberToTaskGroup",
      version: "2021-07-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<AddEnterpriseGroupMemberToTaskGroupResponse>(await this.callApi(params, req, runtime), new AddEnterpriseGroupMemberToTaskGroupResponse({}));
    } else {
      return $dara.cast<AddEnterpriseGroupMemberToTaskGroupResponse>(await this.execute(params, req, runtime), new AddEnterpriseGroupMemberToTaskGroupResponse({}));
    }

  }

  /**
   * 添加客户服务主群人员进子群
   * 
   * @param request - AddEnterpriseGroupMemberToTaskGroupRequest
   * @returns AddEnterpriseGroupMemberToTaskGroupResponse
   */
  async addEnterpriseGroupMemberToTaskGroup(request: AddEnterpriseGroupMemberToTaskGroupRequest): Promise<AddEnterpriseGroupMemberToTaskGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addEnterpriseGroupMemberToTaskGroupWithOptions(request, runtime);
  }

  /**
   * 创建工单
   * 
   * @param request - CreateTaskOrderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTaskOrderResponse
   */
  async createTaskOrderWithOptions(request: CreateTaskOrderRequest, runtime: $dara.RuntimeOptions): Promise<CreateTaskOrderResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.createUserId)) {
      query["CreateUserId"] = request.createUserId;
    }

    if (!$dara.isNull(request.isUrgent)) {
      query["IsUrgent"] = request.isUrgent;
    }

    if (!$dara.isNull(request.openGroupId)) {
      query["OpenGroupId"] = request.openGroupId;
    }

    if (!$dara.isNull(request.overview)) {
      query["Overview"] = request.overview;
    }

    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.urgentDescription)) {
      query["UrgentDescription"] = request.urgentDescription;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTaskOrder",
      version: "2021-07-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateTaskOrderResponse>(await this.callApi(params, req, runtime), new CreateTaskOrderResponse({}));
    } else {
      return $dara.cast<CreateTaskOrderResponse>(await this.execute(params, req, runtime), new CreateTaskOrderResponse({}));
    }

  }

  /**
   * 创建工单
   * 
   * @param request - CreateTaskOrderRequest
   * @returns CreateTaskOrderResponse
   */
  async createTaskOrder(request: CreateTaskOrderRequest): Promise<CreateTaskOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createTaskOrderWithOptions(request, runtime);
  }

  /**
   * ListDdTaskOrder
   * 
   * @param request - ListDdTaskOrderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDdTaskOrderResponse
   */
  async listDdTaskOrderWithOptions(request: ListDdTaskOrderRequest, runtime: $dara.RuntimeOptions): Promise<ListDdTaskOrderResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.createRealName)) {
      query["CreateRealName"] = request.createRealName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.isUrgent)) {
      query["IsUrgent"] = request.isUrgent;
    }

    if (!$dara.isNull(request.openGroupId)) {
      query["OpenGroupId"] = request.openGroupId;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.taskStatus)) {
      query["TaskStatus"] = request.taskStatus;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDdTaskOrder",
      version: "2021-07-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListDdTaskOrderResponse>(await this.callApi(params, req, runtime), new ListDdTaskOrderResponse({}));
    } else {
      return $dara.cast<ListDdTaskOrderResponse>(await this.execute(params, req, runtime), new ListDdTaskOrderResponse({}));
    }

  }

  /**
   * ListDdTaskOrder
   * 
   * @param request - ListDdTaskOrderRequest
   * @returns ListDdTaskOrderResponse
   */
  async listDdTaskOrder(request: ListDdTaskOrderRequest): Promise<ListDdTaskOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDdTaskOrderWithOptions(request, runtime);
  }

  /**
   * 获取钉群中所有客户侧人员信息
   * 
   * @param request - ListEnterpriseDingtalkGroupCustomerMembersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEnterpriseDingtalkGroupCustomerMembersResponse
   */
  async listEnterpriseDingtalkGroupCustomerMembersWithOptions(request: ListEnterpriseDingtalkGroupCustomerMembersRequest, runtime: $dara.RuntimeOptions): Promise<ListEnterpriseDingtalkGroupCustomerMembersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.openGroupId)) {
      query["OpenGroupId"] = request.openGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListEnterpriseDingtalkGroupCustomerMembers",
      version: "2021-07-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListEnterpriseDingtalkGroupCustomerMembersResponse>(await this.callApi(params, req, runtime), new ListEnterpriseDingtalkGroupCustomerMembersResponse({}));
    } else {
      return $dara.cast<ListEnterpriseDingtalkGroupCustomerMembersResponse>(await this.execute(params, req, runtime), new ListEnterpriseDingtalkGroupCustomerMembersResponse({}));
    }

  }

  /**
   * 获取钉群中所有客户侧人员信息
   * 
   * @param request - ListEnterpriseDingtalkGroupCustomerMembersRequest
   * @returns ListEnterpriseDingtalkGroupCustomerMembersResponse
   */
  async listEnterpriseDingtalkGroupCustomerMembers(request: ListEnterpriseDingtalkGroupCustomerMembersRequest): Promise<ListEnterpriseDingtalkGroupCustomerMembersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listEnterpriseDingtalkGroupCustomerMembersWithOptions(request, runtime);
  }

  /**
   * 查询所有企业钉群成员
   * 
   * @param request - ListEnterpriseDingtalkGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEnterpriseDingtalkGroupsResponse
   */
  async listEnterpriseDingtalkGroupsWithOptions(runtime: $dara.RuntimeOptions): Promise<ListEnterpriseDingtalkGroupsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "ListEnterpriseDingtalkGroups",
      version: "2021-07-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListEnterpriseDingtalkGroupsResponse>(await this.callApi(params, req, runtime), new ListEnterpriseDingtalkGroupsResponse({}));
    } else {
      return $dara.cast<ListEnterpriseDingtalkGroupsResponse>(await this.execute(params, req, runtime), new ListEnterpriseDingtalkGroupsResponse({}));
    }

  }

  /**
   * 查询所有企业钉群成员
   * @returns ListEnterpriseDingtalkGroupsResponse
   */
  async listEnterpriseDingtalkGroups(): Promise<ListEnterpriseDingtalkGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listEnterpriseDingtalkGroupsWithOptions(runtime);
  }

  /**
   * 获取问题分类
   * 
   * @param request - ListProductByGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListProductByGroupResponse
   */
  async listProductByGroupWithOptions(request: ListProductByGroupRequest, runtime: $dara.RuntimeOptions): Promise<ListProductByGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.openGroupId)) {
      query["OpenGroupId"] = request.openGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListProductByGroup",
      version: "2021-07-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListProductByGroupResponse>(await this.callApi(params, req, runtime), new ListProductByGroupResponse({}));
    } else {
      return $dara.cast<ListProductByGroupResponse>(await this.execute(params, req, runtime), new ListProductByGroupResponse({}));
    }

  }

  /**
   * 获取问题分类
   * 
   * @param request - ListProductByGroupRequest
   * @returns ListProductByGroupResponse
   */
  async listProductByGroup(request: ListProductByGroupRequest): Promise<ListProductByGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listProductByGroupWithOptions(request, runtime);
  }

}
