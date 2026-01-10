// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil }from '@alicloud/openapi-core';


import * as $_model from './models/model';
export * from './models/model';

export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "central";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("dms-enterprise", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Adds instances, databases, and tables to the specified permission template.
   * 
   * @param tmpReq - AddAuthorityTemplateItemsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddAuthorityTemplateItemsResponse
   */
  async addAuthorityTemplateItemsWithOptions(tmpReq: $_model.AddAuthorityTemplateItemsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddAuthorityTemplateItemsResponse> {
    tmpReq.validate();
    let request = new $_model.AddAuthorityTemplateItemsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.items)) {
      request.itemsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.items, "Items", "json");
    }

    let query = { };
    if (!$dara.isNull(request.itemsShrink)) {
      query["Items"] = request.itemsShrink;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddAuthorityTemplateItems",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddAuthorityTemplateItemsResponse>(await this.callApi(params, req, runtime), new $_model.AddAuthorityTemplateItemsResponse({}));
  }

  /**
   * Adds instances, databases, and tables to the specified permission template.
   * 
   * @param request - AddAuthorityTemplateItemsRequest
   * @returns AddAuthorityTemplateItemsResponse
   */
  async addAuthorityTemplateItems(request: $_model.AddAuthorityTemplateItemsRequest): Promise<$_model.AddAuthorityTemplateItemsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addAuthorityTemplateItemsWithOptions(request, runtime);
  }

  /**
   * Adds a masking rule.
   * 
   * @param request - AddDesensitizationRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddDesensitizationRuleResponse
   */
  async addDesensitizationRuleWithOptions(request: $_model.AddDesensitizationRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddDesensitizationRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.functionType)) {
      query["FunctionType"] = request.functionType;
    }

    if (!$dara.isNull(request.ruleDescription)) {
      query["RuleDescription"] = request.ruleDescription;
    }

    if (!$dara.isNull(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    if (!$dara.isNull(request.ruleType)) {
      query["RuleType"] = request.ruleType;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let body : {[key: string ]: any} = { };
    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.functionParams)) {
      bodyFlat["FunctionParams"] = request.functionParams;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddDesensitizationRule",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddDesensitizationRuleResponse>(await this.callApi(params, req, runtime), new $_model.AddDesensitizationRuleResponse({}));
  }

  /**
   * Adds a masking rule.
   * 
   * @param request - AddDesensitizationRuleRequest
   * @returns AddDesensitizationRuleResponse
   */
  async addDesensitizationRule(request: $_model.AddDesensitizationRuleRequest): Promise<$_model.AddDesensitizationRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addDesensitizationRuleWithOptions(request, runtime);
  }

  /**
   * Adds a database instance to Data Management (DMS) and enable security hosting for the instance.
   * 
   * @remarks
   * You must be a database administrator (DBA) or a DMS administrator. For more information, see [View system roles](https://help.aliyun.com/document_detail/324212.html).
   * 
   * @param request - AddInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddInstanceResponse
   */
  async addInstanceWithOptions(request: $_model.AddInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dataLinkName)) {
      query["DataLinkName"] = request.dataLinkName;
    }

    if (!$dara.isNull(request.databasePassword)) {
      query["DatabasePassword"] = request.databasePassword;
    }

    if (!$dara.isNull(request.databaseUser)) {
      query["DatabaseUser"] = request.databaseUser;
    }

    if (!$dara.isNull(request.dbaId)) {
      query["DbaId"] = request.dbaId;
    }

    if (!$dara.isNull(request.ddlOnline)) {
      query["DdlOnline"] = request.ddlOnline;
    }

    if (!$dara.isNull(request.ecsInstanceId)) {
      query["EcsInstanceId"] = request.ecsInstanceId;
    }

    if (!$dara.isNull(request.ecsRegion)) {
      query["EcsRegion"] = request.ecsRegion;
    }

    if (!$dara.isNull(request.enableSellCommon)) {
      query["EnableSellCommon"] = request.enableSellCommon;
    }

    if (!$dara.isNull(request.enableSellSitd)) {
      query["EnableSellSitd"] = request.enableSellSitd;
    }

    if (!$dara.isNull(request.enableSellStable)) {
      query["EnableSellStable"] = request.enableSellStable;
    }

    if (!$dara.isNull(request.enableSellTrust)) {
      query["EnableSellTrust"] = request.enableSellTrust;
    }

    if (!$dara.isNull(request.envType)) {
      query["EnvType"] = request.envType;
    }

    if (!$dara.isNull(request.exportTimeout)) {
      query["ExportTimeout"] = request.exportTimeout;
    }

    if (!$dara.isNull(request.host)) {
      query["Host"] = request.host;
    }

    if (!$dara.isNull(request.instanceAlias)) {
      query["InstanceAlias"] = request.instanceAlias;
    }

    if (!$dara.isNull(request.instanceSource)) {
      query["InstanceSource"] = request.instanceSource;
    }

    if (!$dara.isNull(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!$dara.isNull(request.networkType)) {
      query["NetworkType"] = request.networkType;
    }

    if (!$dara.isNull(request.port)) {
      query["Port"] = request.port;
    }

    if (!$dara.isNull(request.queryTimeout)) {
      query["QueryTimeout"] = request.queryTimeout;
    }

    if (!$dara.isNull(request.safeRule)) {
      query["SafeRule"] = request.safeRule;
    }

    if (!$dara.isNull(request.sid)) {
      query["Sid"] = request.sid;
    }

    if (!$dara.isNull(request.skipTest)) {
      query["SkipTest"] = request.skipTest;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.templateType)) {
      query["TemplateType"] = request.templateType;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.useDsql)) {
      query["UseDsql"] = request.useDsql;
    }

    if (!$dara.isNull(request.useSsl)) {
      query["UseSsl"] = request.useSsl;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddInstance",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddInstanceResponse>(await this.callApi(params, req, runtime), new $_model.AddInstanceResponse({}));
  }

  /**
   * Adds a database instance to Data Management (DMS) and enable security hosting for the instance.
   * 
   * @remarks
   * You must be a database administrator (DBA) or a DMS administrator. For more information, see [View system roles](https://help.aliyun.com/document_detail/324212.html).
   * 
   * @param request - AddInstanceRequest
   * @returns AddInstanceResponse
   */
  async addInstance(request: $_model.AddInstanceRequest): Promise<$_model.AddInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addInstanceWithOptions(request, runtime);
  }

  /**
   * Adds a workspace administrator, a workspace member, or a task flow developer in Data Management (DMS).
   * 
   * @remarks
   * You must call this operation as a DMS administrator, a database administrator (DBA), or a workspace administrator.
   * Usage notes:
   * *   Before you call this operation to add a user as a task flow developer, make sure that you have added the user as a workspace member.
   * *   You cannot call this operation to transfer the ownership of a task flow. To transfer the ownership of a task flow, call the [ChangLhDagOwner](https://help.aliyun.com/document_detail/424761.html) operation.
   * *   For more information about workspace roles and permissions, see [Manage permissions on a workspace](https://help.aliyun.com/document_detail/410893.html).
   * 
   * @param tmpReq - AddLhMembersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddLhMembersResponse
   */
  async addLhMembersWithOptions(tmpReq: $_model.AddLhMembersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddLhMembersResponse> {
    tmpReq.validate();
    let request = new $_model.AddLhMembersShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.members)) {
      request.membersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.members, "Members", "json");
    }

    let query = { };
    if (!$dara.isNull(request.membersShrink)) {
      query["Members"] = request.membersShrink;
    }

    if (!$dara.isNull(request.objectId)) {
      query["ObjectId"] = request.objectId;
    }

    if (!$dara.isNull(request.objectType)) {
      query["ObjectType"] = request.objectType;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddLhMembers",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddLhMembersResponse>(await this.callApi(params, req, runtime), new $_model.AddLhMembersResponse({}));
  }

  /**
   * Adds a workspace administrator, a workspace member, or a task flow developer in Data Management (DMS).
   * 
   * @remarks
   * You must call this operation as a DMS administrator, a database administrator (DBA), or a workspace administrator.
   * Usage notes:
   * *   Before you call this operation to add a user as a task flow developer, make sure that you have added the user as a workspace member.
   * *   You cannot call this operation to transfer the ownership of a task flow. To transfer the ownership of a task flow, call the [ChangLhDagOwner](https://help.aliyun.com/document_detail/424761.html) operation.
   * *   For more information about workspace roles and permissions, see [Manage permissions on a workspace](https://help.aliyun.com/document_detail/410893.html).
   * 
   * @param request - AddLhMembersRequest
   * @returns AddLhMembersResponse
   */
  async addLhMembers(request: $_model.AddLhMembersRequest): Promise<$_model.AddLhMembersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addLhMembersWithOptions(request, runtime);
  }

  /**
   * Adds a routing algorithm to a logical table.
   * 
   * @param request - AddLogicTableRouteConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddLogicTableRouteConfigResponse
   */
  async addLogicTableRouteConfigWithOptions(request: $_model.AddLogicTableRouteConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddLogicTableRouteConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.routeExpr)) {
      query["RouteExpr"] = request.routeExpr;
    }

    if (!$dara.isNull(request.routeKey)) {
      query["RouteKey"] = request.routeKey;
    }

    if (!$dara.isNull(request.tableId)) {
      query["TableId"] = request.tableId;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddLogicTableRouteConfig",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddLogicTableRouteConfigResponse>(await this.callApi(params, req, runtime), new $_model.AddLogicTableRouteConfigResponse({}));
  }

  /**
   * Adds a routing algorithm to a logical table.
   * 
   * @param request - AddLogicTableRouteConfigRequest
   * @returns AddLogicTableRouteConfigResponse
   */
  async addLogicTableRouteConfig(request: $_model.AddLogicTableRouteConfigRequest): Promise<$_model.AddLogicTableRouteConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addLogicTableRouteConfigWithOptions(request, runtime);
  }

  /**
   * Add a table to an asset category.
   * 
   * @param request - AddTableToCategoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddTableToCategoryResponse
   */
  async addTableToCategoryWithOptions(request: $_model.AddTableToCategoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddTableToCategoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.categoryId)) {
      query["CategoryId"] = request.categoryId;
    }

    if (!$dara.isNull(request.dbId)) {
      query["DbId"] = request.dbId;
    }

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    if (!$dara.isNull(request.tableSchemaName)) {
      query["TableSchemaName"] = request.tableSchemaName;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddTableToCategory",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddTableToCategoryResponse>(await this.callApi(params, req, runtime), new $_model.AddTableToCategoryResponse({}));
  }

  /**
   * Add a table to an asset category.
   * 
   * @param request - AddTableToCategoryRequest
   * @returns AddTableToCategoryResponse
   */
  async addTableToCategory(request: $_model.AddTableToCategoryRequest): Promise<$_model.AddTableToCategoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addTableToCategoryWithOptions(request, runtime);
  }

  /**
   * Adds directed edges for an existing task node.
   * 
   * @remarks
   * When you add directed edges for a task node, take note of the following limits:
   * 1. The endpoints of the specified edge exist in the Directed Acyclic Graph (DAG) of the task flow specified by DagId.
   * 2. After a backward edge is added, the DAG does not contain loops.
   * 
   * @param tmpReq - AddTaskFlowEdgesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddTaskFlowEdgesResponse
   */
  async addTaskFlowEdgesWithOptions(tmpReq: $_model.AddTaskFlowEdgesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddTaskFlowEdgesResponse> {
    tmpReq.validate();
    let request = new $_model.AddTaskFlowEdgesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.edges)) {
      request.edgesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.edges, "Edges", "json");
    }

    let query = { };
    if (!$dara.isNull(request.dagId)) {
      query["DagId"] = request.dagId;
    }

    if (!$dara.isNull(request.edgesShrink)) {
      query["Edges"] = request.edgesShrink;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddTaskFlowEdges",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddTaskFlowEdgesResponse>(await this.callApi(params, req, runtime), new $_model.AddTaskFlowEdgesResponse({}));
  }

  /**
   * Adds directed edges for an existing task node.
   * 
   * @remarks
   * When you add directed edges for a task node, take note of the following limits:
   * 1. The endpoints of the specified edge exist in the Directed Acyclic Graph (DAG) of the task flow specified by DagId.
   * 2. After a backward edge is added, the DAG does not contain loops.
   * 
   * @param request - AddTaskFlowEdgesRequest
   * @returns AddTaskFlowEdgesResponse
   */
  async addTaskFlowEdges(request: $_model.AddTaskFlowEdgesRequest): Promise<$_model.AddTaskFlowEdgesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addTaskFlowEdgesWithOptions(request, runtime);
  }

  /**
   * Analyzes the lineage (dependencies and influence) between tables and between fields in SQL statements.
   * 
   * @remarks
   * The following conditions must be met before you call this API operation.
   * *   The database instance is of one of the following types: ApsaraDB RDS for MySQL, PolarDB for MySQL, AnalyticDB for MySQL, ApsaraDB RDS for PostgreSQL, PolarDB for PostgreSQL, AnalyticDB for PostgreSQL, Oracle, and openGauss.
   * *   A database instance is managed in Security Collaboration mode. For more information about control modes, see [Control modes](https://help.aliyun.com/document_detail/151629.html).
   * 
   * @param request - AnalyzeSQLLineageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AnalyzeSQLLineageResponse
   */
  async analyzeSQLLineageWithOptions(request: $_model.AnalyzeSQLLineageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AnalyzeSQLLineageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbId)) {
      query["DbId"] = request.dbId;
    }

    if (!$dara.isNull(request.sqlContent)) {
      query["SqlContent"] = request.sqlContent;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AnalyzeSQLLineage",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AnalyzeSQLLineageResponse>(await this.callApi(params, req, runtime), new $_model.AnalyzeSQLLineageResponse({}));
  }

  /**
   * Analyzes the lineage (dependencies and influence) between tables and between fields in SQL statements.
   * 
   * @remarks
   * The following conditions must be met before you call this API operation.
   * *   The database instance is of one of the following types: ApsaraDB RDS for MySQL, PolarDB for MySQL, AnalyticDB for MySQL, ApsaraDB RDS for PostgreSQL, PolarDB for PostgreSQL, AnalyticDB for PostgreSQL, Oracle, and openGauss.
   * *   A database instance is managed in Security Collaboration mode. For more information about control modes, see [Control modes](https://help.aliyun.com/document_detail/151629.html).
   * 
   * @param request - AnalyzeSQLLineageRequest
   * @returns AnalyzeSQLLineageResponse
   */
  async analyzeSQLLineage(request: $_model.AnalyzeSQLLineageRequest): Promise<$_model.AnalyzeSQLLineageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.analyzeSQLLineageWithOptions(request, runtime);
  }

  /**
   * Answers the syntax questions of the corresponding engine according to the specified database ID.
   * 
   * @remarks
   * You can call this operation to answer the syntax questions of the corresponding engine according to the specified database ID.
   * 
   * @param request - AnswerSqlSyntaxByMetaAgentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AnswerSqlSyntaxByMetaAgentResponse
   */
  async answerSqlSyntaxByMetaAgentWithOptions(request: $_model.AnswerSqlSyntaxByMetaAgentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AnswerSqlSyntaxByMetaAgentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbId)) {
      query["DbId"] = request.dbId;
    }

    if (!$dara.isNull(request.model)) {
      query["Model"] = request.model;
    }

    if (!$dara.isNull(request.query)) {
      query["Query"] = request.query;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AnswerSqlSyntaxByMetaAgent",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AnswerSqlSyntaxByMetaAgentResponse>(await this.callApi(params, req, runtime), new $_model.AnswerSqlSyntaxByMetaAgentResponse({}));
  }

  /**
   * Answers the syntax questions of the corresponding engine according to the specified database ID.
   * 
   * @remarks
   * You can call this operation to answer the syntax questions of the corresponding engine according to the specified database ID.
   * 
   * @param request - AnswerSqlSyntaxByMetaAgentRequest
   * @returns AnswerSqlSyntaxByMetaAgentResponse
   */
  async answerSqlSyntaxByMetaAgent(request: $_model.AnswerSqlSyntaxByMetaAgentRequest): Promise<$_model.AnswerSqlSyntaxByMetaAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.answerSqlSyntaxByMetaAgentWithOptions(request, runtime);
  }

  /**
   * Reviews a ticket.
   * 
   * @param request - ApproveOrderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ApproveOrderResponse
   */
  async approveOrderWithOptions(request: $_model.ApproveOrderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ApproveOrderResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.approvalNodeId)) {
      query["ApprovalNodeId"] = request.approvalNodeId;
    }

    if (!$dara.isNull(request.approvalNodePos)) {
      query["ApprovalNodePos"] = request.approvalNodePos;
    }

    if (!$dara.isNull(request.approvalType)) {
      query["ApprovalType"] = request.approvalType;
    }

    if (!$dara.isNull(request.comment)) {
      query["Comment"] = request.comment;
    }

    if (!$dara.isNull(request.newApprover)) {
      query["NewApprover"] = request.newApprover;
    }

    if (!$dara.isNull(request.newApproverList)) {
      query["NewApproverList"] = request.newApproverList;
    }

    if (!$dara.isNull(request.oldApprover)) {
      query["OldApprover"] = request.oldApprover;
    }

    if (!$dara.isNull(request.realLoginUserUid)) {
      query["RealLoginUserUid"] = request.realLoginUserUid;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.workflowInstanceId)) {
      query["WorkflowInstanceId"] = request.workflowInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ApproveOrder",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ApproveOrderResponse>(await this.callApi(params, req, runtime), new $_model.ApproveOrderResponse({}));
  }

  /**
   * Reviews a ticket.
   * 
   * @param request - ApproveOrderRequest
   * @returns ApproveOrderResponse
   */
  async approveOrder(request: $_model.ApproveOrderRequest): Promise<$_model.ApproveOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.approveOrderWithOptions(request, runtime);
  }

  /**
   * Backfills data for task orchestration.
   * 
   * @remarks
   * During a data backfill, task flows are run in sequence based on their dates. You can specify whether task flows are run in chronological or reverse chronological order. After the data backfill is complete, you can specify a date or date range, and a node range to run task flows.
   * 
   * @param tmpReq - BackFillRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BackFillResponse
   */
  async backFillWithOptions(tmpReq: $_model.BackFillRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BackFillResponse> {
    tmpReq.validate();
    let request = new $_model.BackFillShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.filterNodeIds)) {
      request.filterNodeIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.filterNodeIds, "FilterNodeIds", "json");
    }

    if (!$dara.isNull(tmpReq.startNodeIds)) {
      request.startNodeIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.startNodeIds, "StartNodeIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.asc)) {
      query["Asc"] = request.asc;
    }

    if (!$dara.isNull(request.backFillDate)) {
      query["BackFillDate"] = request.backFillDate;
    }

    if (!$dara.isNull(request.backFillDateBegin)) {
      query["BackFillDateBegin"] = request.backFillDateBegin;
    }

    if (!$dara.isNull(request.backFillDateEnd)) {
      query["BackFillDateEnd"] = request.backFillDateEnd;
    }

    if (!$dara.isNull(request.dagId)) {
      query["DagId"] = request.dagId;
    }

    if (!$dara.isNull(request.filterNodeIdsShrink)) {
      query["FilterNodeIds"] = request.filterNodeIdsShrink;
    }

    if (!$dara.isNull(request.historyDagId)) {
      query["HistoryDagId"] = request.historyDagId;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.isTriggerSubTree)) {
      query["IsTriggerSubTree"] = request.isTriggerSubTree;
    }

    if (!$dara.isNull(request.startNodeIdsShrink)) {
      query["StartNodeIds"] = request.startNodeIdsShrink;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BackFill",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BackFillResponse>(await this.callApi(params, req, runtime), new $_model.BackFillResponse({}));
  }

  /**
   * Backfills data for task orchestration.
   * 
   * @remarks
   * During a data backfill, task flows are run in sequence based on their dates. You can specify whether task flows are run in chronological or reverse chronological order. After the data backfill is complete, you can specify a date or date range, and a node range to run task flows.
   * 
   * @param request - BackFillRequest
   * @returns BackFillResponse
   */
  async backFill(request: $_model.BackFillRequest): Promise<$_model.BackFillResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.backFillWithOptions(request, runtime);
  }

  /**
   * Creates multiple partitions for a table in a data lakehouse at a time.
   * 
   * @param tmpReq - BatchCreateDataLakePartitionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchCreateDataLakePartitionsResponse
   */
  async batchCreateDataLakePartitionsWithOptions(tmpReq: $_model.BatchCreateDataLakePartitionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchCreateDataLakePartitionsResponse> {
    tmpReq.validate();
    let request = new $_model.BatchCreateDataLakePartitionsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.partitionInputs)) {
      request.partitionInputsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.partitionInputs, "PartitionInputs", "json");
    }

    let query = { };
    if (!$dara.isNull(request.catalogName)) {
      query["CatalogName"] = request.catalogName;
    }

    if (!$dara.isNull(request.dataRegion)) {
      query["DataRegion"] = request.dataRegion;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.ifNotExists)) {
      query["IfNotExists"] = request.ifNotExists;
    }

    if (!$dara.isNull(request.needResult)) {
      query["NeedResult"] = request.needResult;
    }

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.partitionInputsShrink)) {
      body["PartitionInputs"] = request.partitionInputsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchCreateDataLakePartitions",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchCreateDataLakePartitionsResponse>(await this.callApi(params, req, runtime), new $_model.BatchCreateDataLakePartitionsResponse({}));
  }

  /**
   * Creates multiple partitions for a table in a data lakehouse at a time.
   * 
   * @param request - BatchCreateDataLakePartitionsRequest
   * @returns BatchCreateDataLakePartitionsResponse
   */
  async batchCreateDataLakePartitions(request: $_model.BatchCreateDataLakePartitionsRequest): Promise<$_model.BatchCreateDataLakePartitionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchCreateDataLakePartitionsWithOptions(request, runtime);
  }

  /**
   * Deletes multiple partitions of a table in a data lakehouse at a time.
   * 
   * @param request - BatchDeleteDataLakePartitionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchDeleteDataLakePartitionsResponse
   */
  async batchDeleteDataLakePartitionsWithOptions(request: $_model.BatchDeleteDataLakePartitionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchDeleteDataLakePartitionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.catalogName)) {
      query["CatalogName"] = request.catalogName;
    }

    if (!$dara.isNull(request.dataRegion)) {
      query["DataRegion"] = request.dataRegion;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.ifExists)) {
      query["IfExists"] = request.ifExists;
    }

    if (!$dara.isNull(request.partitionValuesList)) {
      query["PartitionValuesList"] = request.partitionValuesList;
    }

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchDeleteDataLakePartitions",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchDeleteDataLakePartitionsResponse>(await this.callApi(params, req, runtime), new $_model.BatchDeleteDataLakePartitionsResponse({}));
  }

  /**
   * Deletes multiple partitions of a table in a data lakehouse at a time.
   * 
   * @param request - BatchDeleteDataLakePartitionsRequest
   * @returns BatchDeleteDataLakePartitionsResponse
   */
  async batchDeleteDataLakePartitions(request: $_model.BatchDeleteDataLakePartitionsRequest): Promise<$_model.BatchDeleteDataLakePartitionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchDeleteDataLakePartitionsWithOptions(request, runtime);
  }

  /**
   * Updates multiple partitions of a table in a data lakehouse at a time.
   * 
   * @param tmpReq - BatchUpdateDataLakePartitionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchUpdateDataLakePartitionsResponse
   */
  async batchUpdateDataLakePartitionsWithOptions(tmpReq: $_model.BatchUpdateDataLakePartitionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchUpdateDataLakePartitionsResponse> {
    tmpReq.validate();
    let request = new $_model.BatchUpdateDataLakePartitionsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.partitionInputs)) {
      request.partitionInputsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.partitionInputs, "PartitionInputs", "json");
    }

    let query = { };
    if (!$dara.isNull(request.catalogName)) {
      query["CatalogName"] = request.catalogName;
    }

    if (!$dara.isNull(request.dataRegion)) {
      query["DataRegion"] = request.dataRegion;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.partitionInputsShrink)) {
      body["PartitionInputs"] = request.partitionInputsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchUpdateDataLakePartitions",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchUpdateDataLakePartitionsResponse>(await this.callApi(params, req, runtime), new $_model.BatchUpdateDataLakePartitionsResponse({}));
  }

  /**
   * Updates multiple partitions of a table in a data lakehouse at a time.
   * 
   * @param request - BatchUpdateDataLakePartitionsRequest
   * @returns BatchUpdateDataLakePartitionsResponse
   */
  async batchUpdateDataLakePartitions(request: $_model.BatchUpdateDataLakePartitionsRequest): Promise<$_model.BatchUpdateDataLakePartitionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchUpdateDataLakePartitionsWithOptions(request, runtime);
  }

  /**
   * Purchases a pay-as-you-go Data Management (DMS) resource.
   * 
   * @param request - BuyPayAsYouGoOrderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BuyPayAsYouGoOrderResponse
   */
  async buyPayAsYouGoOrderWithOptions(request: $_model.BuyPayAsYouGoOrderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BuyPayAsYouGoOrderResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.commodityType)) {
      query["CommodityType"] = request.commodityType;
    }

    if (!$dara.isNull(request.insNum)) {
      query["InsNum"] = request.insNum;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.versionType)) {
      query["VersionType"] = request.versionType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BuyPayAsYouGoOrder",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BuyPayAsYouGoOrderResponse>(await this.callApi(params, req, runtime), new $_model.BuyPayAsYouGoOrderResponse({}));
  }

  /**
   * Purchases a pay-as-you-go Data Management (DMS) resource.
   * 
   * @param request - BuyPayAsYouGoOrderRequest
   * @returns BuyPayAsYouGoOrderResponse
   */
  async buyPayAsYouGoOrder(request: $_model.BuyPayAsYouGoOrderRequest): Promise<$_model.BuyPayAsYouGoOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.buyPayAsYouGoOrderWithOptions(request, runtime);
  }

  /**
   * Adjusts the sensitivity level of one or more fields.
   * 
   * @param request - ChangeColumnSecLevelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeColumnSecLevelResponse
   */
  async changeColumnSecLevelWithOptions(request: $_model.ChangeColumnSecLevelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChangeColumnSecLevelResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.columnName)) {
      query["ColumnName"] = request.columnName;
    }

    if (!$dara.isNull(request.dbId)) {
      query["DbId"] = request.dbId;
    }

    if (!$dara.isNull(request.isLogic)) {
      query["IsLogic"] = request.isLogic;
    }

    if (!$dara.isNull(request.newLevel)) {
      query["NewLevel"] = request.newLevel;
    }

    if (!$dara.isNull(request.schemaName)) {
      query["SchemaName"] = request.schemaName;
    }

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChangeColumnSecLevel",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChangeColumnSecLevelResponse>(await this.callApi(params, req, runtime), new $_model.ChangeColumnSecLevelResponse({}));
  }

  /**
   * Adjusts the sensitivity level of one or more fields.
   * 
   * @param request - ChangeColumnSecLevelRequest
   * @returns ChangeColumnSecLevelResponse
   */
  async changeColumnSecLevel(request: $_model.ChangeColumnSecLevelRequest): Promise<$_model.ChangeColumnSecLevelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.changeColumnSecLevelWithOptions(request, runtime);
  }

  /**
   * Changes the security level of a column.
   * 
   * @param request - ChangeColumnSecurityLevelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeColumnSecurityLevelResponse
   */
  async changeColumnSecurityLevelWithOptions(request: $_model.ChangeColumnSecurityLevelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChangeColumnSecurityLevelResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.columnName)) {
      query["ColumnName"] = request.columnName;
    }

    if (!$dara.isNull(request.dbId)) {
      query["DbId"] = request.dbId;
    }

    if (!$dara.isNull(request.isLogic)) {
      query["IsLogic"] = request.isLogic;
    }

    if (!$dara.isNull(request.newSensitivityLevel)) {
      query["NewSensitivityLevel"] = request.newSensitivityLevel;
    }

    if (!$dara.isNull(request.schemaName)) {
      query["SchemaName"] = request.schemaName;
    }

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChangeColumnSecurityLevel",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChangeColumnSecurityLevelResponse>(await this.callApi(params, req, runtime), new $_model.ChangeColumnSecurityLevelResponse({}));
  }

  /**
   * Changes the security level of a column.
   * 
   * @param request - ChangeColumnSecurityLevelRequest
   * @returns ChangeColumnSecurityLevelResponse
   */
  async changeColumnSecurityLevel(request: $_model.ChangeColumnSecurityLevelRequest): Promise<$_model.ChangeColumnSecurityLevelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.changeColumnSecurityLevelWithOptions(request, runtime);
  }

  /**
   * 移交数仓开发任务流
   * 
   * @remarks
   * Usage notes:
   * *   If you call this operation to transfer the ownership of a published task flow, the ownership transfer does not take effect.
   * *   You can call the [ReDeployLhDagVersion](https://help.aliyun.com/document_detail/424712.html) operation to redeploy a published version of a task flow.
   * 
   * @param request - ChangeLhDagOwnerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeLhDagOwnerResponse
   */
  async changeLhDagOwnerWithOptions(request: $_model.ChangeLhDagOwnerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChangeLhDagOwnerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dagId)) {
      query["DagId"] = request.dagId;
    }

    if (!$dara.isNull(request.ownerUserId)) {
      query["OwnerUserId"] = request.ownerUserId;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChangeLhDagOwner",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChangeLhDagOwnerResponse>(await this.callApi(params, req, runtime), new $_model.ChangeLhDagOwnerResponse({}));
  }

  /**
   * 移交数仓开发任务流
   * 
   * @remarks
   * Usage notes:
   * *   If you call this operation to transfer the ownership of a published task flow, the ownership transfer does not take effect.
   * *   You can call the [ReDeployLhDagVersion](https://help.aliyun.com/document_detail/424712.html) operation to redeploy a published version of a task flow.
   * 
   * @param request - ChangeLhDagOwnerRequest
   * @returns ChangeLhDagOwnerResponse
   */
  async changeLhDagOwner(request: $_model.ChangeLhDagOwnerRequest): Promise<$_model.ChangeLhDagOwnerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.changeLhDagOwnerWithOptions(request, runtime);
  }

  /**
   * 带有DMS脱敏能力的聊天API接口
   * 
   * @remarks
   * 带有DMS脱敏能力的聊天API接口
   * 
   * @param tmpReq - ChatWithDesensitizeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChatWithDesensitizeResponse
   */
  async chatWithDesensitizeWithOptions(tmpReq: $_model.ChatWithDesensitizeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChatWithDesensitizeResponse> {
    tmpReq.validate();
    let request = new $_model.ChatWithDesensitizeShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.messages)) {
      request.messagesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.messages, "Messages", "json");
    }

    if (!$dara.isNull(tmpReq.modalitiesList)) {
      request.modalitiesListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.modalitiesList, "ModalitiesList", "json");
    }

    if (!$dara.isNull(tmpReq.searchOptions)) {
      request.searchOptionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.searchOptions, "SearchOptions", "json");
    }

    if (!$dara.isNull(tmpReq.stop)) {
      request.stopShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.stop, "Stop", "json");
    }

    let query = { };
    if (!$dara.isNull(request.audioJson)) {
      query["AudioJson"] = request.audioJson;
    }

    if (!$dara.isNull(request.desensitizationRule)) {
      query["DesensitizationRule"] = request.desensitizationRule;
    }

    if (!$dara.isNull(request.enableCodeInterpreter)) {
      query["EnableCodeInterpreter"] = request.enableCodeInterpreter;
    }

    if (!$dara.isNull(request.enableSearch)) {
      query["EnableSearch"] = request.enableSearch;
    }

    if (!$dara.isNull(request.enableThinking)) {
      query["EnableThinking"] = request.enableThinking;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.logprobs)) {
      query["Logprobs"] = request.logprobs;
    }

    if (!$dara.isNull(request.maxTokens)) {
      query["MaxTokens"] = request.maxTokens;
    }

    if (!$dara.isNull(request.modalitiesListShrink)) {
      query["ModalitiesList"] = request.modalitiesListShrink;
    }

    if (!$dara.isNull(request.model)) {
      query["Model"] = request.model;
    }

    if (!$dara.isNull(request.needDesensitization)) {
      query["NeedDesensitization"] = request.needDesensitization;
    }

    if (!$dara.isNull(request.presencePenalty)) {
      query["PresencePenalty"] = request.presencePenalty;
    }

    if (!$dara.isNull(request.responseFormat)) {
      query["ResponseFormat"] = request.responseFormat;
    }

    if (!$dara.isNull(request.searchOptionsShrink)) {
      query["SearchOptions"] = request.searchOptionsShrink;
    }

    if (!$dara.isNull(request.seed)) {
      query["Seed"] = request.seed;
    }

    if (!$dara.isNull(request.stopShrink)) {
      query["Stop"] = request.stopShrink;
    }

    if (!$dara.isNull(request.temperature)) {
      query["Temperature"] = request.temperature;
    }

    if (!$dara.isNull(request.thinkingBudget)) {
      query["ThinkingBudget"] = request.thinkingBudget;
    }

    if (!$dara.isNull(request.topK)) {
      query["TopK"] = request.topK;
    }

    if (!$dara.isNull(request.topLogprobs)) {
      query["TopLogprobs"] = request.topLogprobs;
    }

    if (!$dara.isNull(request.topP)) {
      query["TopP"] = request.topP;
    }

    if (!$dara.isNull(request.vlHighResolutionImages)) {
      query["VlHighResolutionImages"] = request.vlHighResolutionImages;
    }

    if (!$dara.isNull(request.XDashScopeDataInspection)) {
      query["XDashScopeDataInspection"] = request.XDashScopeDataInspection;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.messagesShrink)) {
      body["Messages"] = request.messagesShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChatWithDesensitize",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChatWithDesensitizeResponse>(await this.callApi(params, req, runtime), new $_model.ChatWithDesensitizeResponse({}));
  }

  /**
   * 带有DMS脱敏能力的聊天API接口
   * 
   * @remarks
   * 带有DMS脱敏能力的聊天API接口
   * 
   * @param request - ChatWithDesensitizeRequest
   * @returns ChatWithDesensitizeResponse
   */
  async chatWithDesensitize(request: $_model.ChatWithDesensitizeRequest): Promise<$_model.ChatWithDesensitizeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.chatWithDesensitizeWithOptions(request, runtime);
  }

  /**
   * 带有DMS脱敏能力的聊天SSE API接口
   * 
   * @remarks
   * 带有DMS脱敏能力的聊天SSE API接口
   * 
   * @param tmpReq - ChatWithDesensitizeSSERequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChatWithDesensitizeSSEResponse
   */
  async *chatWithDesensitizeSSEWithSSE(tmpReq: $_model.ChatWithDesensitizeSSERequest, runtime: $dara.RuntimeOptions): AsyncGenerator<$_model.ChatWithDesensitizeSSEResponse, any, unknown> {
    tmpReq.validate();
    let request = new $_model.ChatWithDesensitizeSSEShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.messages)) {
      request.messagesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.messages, "Messages", "json");
    }

    if (!$dara.isNull(tmpReq.modalitiesList)) {
      request.modalitiesListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.modalitiesList, "ModalitiesList", "json");
    }

    if (!$dara.isNull(tmpReq.searchOptions)) {
      request.searchOptionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.searchOptions, "SearchOptions", "json");
    }

    if (!$dara.isNull(tmpReq.stop)) {
      request.stopShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.stop, "Stop", "json");
    }

    let query = { };
    if (!$dara.isNull(request.audioJson)) {
      query["AudioJson"] = request.audioJson;
    }

    if (!$dara.isNull(request.desensitizationRule)) {
      query["DesensitizationRule"] = request.desensitizationRule;
    }

    if (!$dara.isNull(request.dimensions)) {
      query["Dimensions"] = request.dimensions;
    }

    if (!$dara.isNull(request.enableCodeInterpreter)) {
      query["EnableCodeInterpreter"] = request.enableCodeInterpreter;
    }

    if (!$dara.isNull(request.enableSearch)) {
      query["EnableSearch"] = request.enableSearch;
    }

    if (!$dara.isNull(request.enableThinking)) {
      query["EnableThinking"] = request.enableThinking;
    }

    if (!$dara.isNull(request.includeUsage)) {
      query["IncludeUsage"] = request.includeUsage;
    }

    if (!$dara.isNull(request.input)) {
      query["Input"] = request.input;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.logprobs)) {
      query["Logprobs"] = request.logprobs;
    }

    if (!$dara.isNull(request.maxTokens)) {
      query["MaxTokens"] = request.maxTokens;
    }

    if (!$dara.isNull(request.modalitiesListShrink)) {
      query["ModalitiesList"] = request.modalitiesListShrink;
    }

    if (!$dara.isNull(request.model)) {
      query["Model"] = request.model;
    }

    if (!$dara.isNull(request.needDesensitization)) {
      query["NeedDesensitization"] = request.needDesensitization;
    }

    if (!$dara.isNull(request.parameters)) {
      query["Parameters"] = request.parameters;
    }

    if (!$dara.isNull(request.presencePenalty)) {
      query["PresencePenalty"] = request.presencePenalty;
    }

    if (!$dara.isNull(request.responseFormat)) {
      query["ResponseFormat"] = request.responseFormat;
    }

    if (!$dara.isNull(request.searchOptionsShrink)) {
      query["SearchOptions"] = request.searchOptionsShrink;
    }

    if (!$dara.isNull(request.seed)) {
      query["Seed"] = request.seed;
    }

    if (!$dara.isNull(request.stopShrink)) {
      query["Stop"] = request.stopShrink;
    }

    if (!$dara.isNull(request.stream)) {
      query["Stream"] = request.stream;
    }

    if (!$dara.isNull(request.temperature)) {
      query["Temperature"] = request.temperature;
    }

    if (!$dara.isNull(request.thinkingBudget)) {
      query["ThinkingBudget"] = request.thinkingBudget;
    }

    if (!$dara.isNull(request.topK)) {
      query["TopK"] = request.topK;
    }

    if (!$dara.isNull(request.topLogprobs)) {
      query["TopLogprobs"] = request.topLogprobs;
    }

    if (!$dara.isNull(request.topP)) {
      query["TopP"] = request.topP;
    }

    if (!$dara.isNull(request.vlHighResolutionImages)) {
      query["VlHighResolutionImages"] = request.vlHighResolutionImages;
    }

    if (!$dara.isNull(request.XDashScopeDataInspection)) {
      query["XDashScopeDataInspection"] = request.XDashScopeDataInspection;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.messagesShrink)) {
      body["Messages"] = request.messagesShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChatWithDesensitizeSSE",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    let sseResp = await this.callSSEApi(params, req, runtime);

    for await (let resp of sseResp) {
      let data = JSON.parse(resp.event.data);
      yield $dara.cast<$_model.ChatWithDesensitizeSSEResponse>({
        statusCode: resp.statusCode,
        headers: resp.headers,
        body: {
          ...data,
          RequestId: resp.event.id,
          Message: resp.event.event,
        },
      }, new $_model.ChatWithDesensitizeSSEResponse({}));
    }
  }

  /**
   * 带有DMS脱敏能力的聊天SSE API接口
   * 
   * @remarks
   * 带有DMS脱敏能力的聊天SSE API接口
   * 
   * @param tmpReq - ChatWithDesensitizeSSERequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChatWithDesensitizeSSEResponse
   */
  async chatWithDesensitizeSSEWithOptions(tmpReq: $_model.ChatWithDesensitizeSSERequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChatWithDesensitizeSSEResponse> {
    tmpReq.validate();
    let request = new $_model.ChatWithDesensitizeSSEShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.messages)) {
      request.messagesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.messages, "Messages", "json");
    }

    if (!$dara.isNull(tmpReq.modalitiesList)) {
      request.modalitiesListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.modalitiesList, "ModalitiesList", "json");
    }

    if (!$dara.isNull(tmpReq.searchOptions)) {
      request.searchOptionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.searchOptions, "SearchOptions", "json");
    }

    if (!$dara.isNull(tmpReq.stop)) {
      request.stopShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.stop, "Stop", "json");
    }

    let query = { };
    if (!$dara.isNull(request.audioJson)) {
      query["AudioJson"] = request.audioJson;
    }

    if (!$dara.isNull(request.desensitizationRule)) {
      query["DesensitizationRule"] = request.desensitizationRule;
    }

    if (!$dara.isNull(request.dimensions)) {
      query["Dimensions"] = request.dimensions;
    }

    if (!$dara.isNull(request.enableCodeInterpreter)) {
      query["EnableCodeInterpreter"] = request.enableCodeInterpreter;
    }

    if (!$dara.isNull(request.enableSearch)) {
      query["EnableSearch"] = request.enableSearch;
    }

    if (!$dara.isNull(request.enableThinking)) {
      query["EnableThinking"] = request.enableThinking;
    }

    if (!$dara.isNull(request.includeUsage)) {
      query["IncludeUsage"] = request.includeUsage;
    }

    if (!$dara.isNull(request.input)) {
      query["Input"] = request.input;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.logprobs)) {
      query["Logprobs"] = request.logprobs;
    }

    if (!$dara.isNull(request.maxTokens)) {
      query["MaxTokens"] = request.maxTokens;
    }

    if (!$dara.isNull(request.modalitiesListShrink)) {
      query["ModalitiesList"] = request.modalitiesListShrink;
    }

    if (!$dara.isNull(request.model)) {
      query["Model"] = request.model;
    }

    if (!$dara.isNull(request.needDesensitization)) {
      query["NeedDesensitization"] = request.needDesensitization;
    }

    if (!$dara.isNull(request.parameters)) {
      query["Parameters"] = request.parameters;
    }

    if (!$dara.isNull(request.presencePenalty)) {
      query["PresencePenalty"] = request.presencePenalty;
    }

    if (!$dara.isNull(request.responseFormat)) {
      query["ResponseFormat"] = request.responseFormat;
    }

    if (!$dara.isNull(request.searchOptionsShrink)) {
      query["SearchOptions"] = request.searchOptionsShrink;
    }

    if (!$dara.isNull(request.seed)) {
      query["Seed"] = request.seed;
    }

    if (!$dara.isNull(request.stopShrink)) {
      query["Stop"] = request.stopShrink;
    }

    if (!$dara.isNull(request.stream)) {
      query["Stream"] = request.stream;
    }

    if (!$dara.isNull(request.temperature)) {
      query["Temperature"] = request.temperature;
    }

    if (!$dara.isNull(request.thinkingBudget)) {
      query["ThinkingBudget"] = request.thinkingBudget;
    }

    if (!$dara.isNull(request.topK)) {
      query["TopK"] = request.topK;
    }

    if (!$dara.isNull(request.topLogprobs)) {
      query["TopLogprobs"] = request.topLogprobs;
    }

    if (!$dara.isNull(request.topP)) {
      query["TopP"] = request.topP;
    }

    if (!$dara.isNull(request.vlHighResolutionImages)) {
      query["VlHighResolutionImages"] = request.vlHighResolutionImages;
    }

    if (!$dara.isNull(request.XDashScopeDataInspection)) {
      query["XDashScopeDataInspection"] = request.XDashScopeDataInspection;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.messagesShrink)) {
      body["Messages"] = request.messagesShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChatWithDesensitizeSSE",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChatWithDesensitizeSSEResponse>(await this.callApi(params, req, runtime), new $_model.ChatWithDesensitizeSSEResponse({}));
  }

  /**
   * 带有DMS脱敏能力的聊天SSE API接口
   * 
   * @remarks
   * 带有DMS脱敏能力的聊天SSE API接口
   * 
   * @param request - ChatWithDesensitizeSSERequest
   * @returns ChatWithDesensitizeSSEResponse
   */
  async chatWithDesensitizeSSE(request: $_model.ChatWithDesensitizeSSERequest): Promise<$_model.ChatWithDesensitizeSSEResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.chatWithDesensitizeSSEWithOptions(request, runtime);
  }

  /**
   * 批量校验是否有表访问权限
   * 
   * @param tmpReq - CheckBatchTableAccessPermissionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckBatchTableAccessPermissionResponse
   */
  async checkBatchTableAccessPermissionWithOptions(tmpReq: $_model.CheckBatchTableAccessPermissionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckBatchTableAccessPermissionResponse> {
    tmpReq.validate();
    let request = new $_model.CheckBatchTableAccessPermissionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tableNameList)) {
      request.tableNameListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tableNameList, "TableNameList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.dbId)) {
      query["DbId"] = request.dbId;
    }

    if (!$dara.isNull(request.logic)) {
      query["Logic"] = request.logic;
    }

    if (!$dara.isNull(request.permissionType)) {
      query["PermissionType"] = request.permissionType;
    }

    if (!$dara.isNull(request.tableNameListShrink)) {
      query["TableNameList"] = request.tableNameListShrink;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckBatchTableAccessPermission",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckBatchTableAccessPermissionResponse>(await this.callApi(params, req, runtime), new $_model.CheckBatchTableAccessPermissionResponse({}));
  }

  /**
   * 批量校验是否有表访问权限
   * 
   * @param request - CheckBatchTableAccessPermissionRequest
   * @returns CheckBatchTableAccessPermissionResponse
   */
  async checkBatchTableAccessPermission(request: $_model.CheckBatchTableAccessPermissionRequest): Promise<$_model.CheckBatchTableAccessPermissionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkBatchTableAccessPermissionWithOptions(request, runtime);
  }

  /**
   * Closes a ticket.
   * 
   * @param request - CloseOrderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloseOrderResponse
   */
  async closeOrderWithOptions(request: $_model.CloseOrderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CloseOrderResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.closeReason)) {
      query["CloseReason"] = request.closeReason;
    }

    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CloseOrder",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CloseOrderResponse>(await this.callApi(params, req, runtime), new $_model.CloseOrderResponse({}));
  }

  /**
   * Closes a ticket.
   * 
   * @param request - CloseOrderRequest
   * @returns CloseOrderResponse
   */
  async closeOrder(request: $_model.CloseOrderRequest): Promise<$_model.CloseOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.closeOrderWithOptions(request, runtime);
  }

  /**
   * Attaches a system policy or custom policy to a DMS user or custom role.
   * 
   * @param request - CreateAbacAuthorizationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAbacAuthorizationResponse
   */
  async createAbacAuthorizationWithOptions(request: $_model.CreateAbacAuthorizationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAbacAuthorizationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.identityType)) {
      query["IdentityType"] = request.identityType;
    }

    if (!$dara.isNull(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    if (!$dara.isNull(request.roleId)) {
      query["RoleId"] = request.roleId;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAbacAuthorization",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAbacAuthorizationResponse>(await this.callApi(params, req, runtime), new $_model.CreateAbacAuthorizationResponse({}));
  }

  /**
   * Attaches a system policy or custom policy to a DMS user or custom role.
   * 
   * @param request - CreateAbacAuthorizationRequest
   * @returns CreateAbacAuthorizationResponse
   */
  async createAbacAuthorization(request: $_model.CreateAbacAuthorizationRequest): Promise<$_model.CreateAbacAuthorizationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAbacAuthorizationWithOptions(request, runtime);
  }

  /**
   * Creates a policy to manage the permissions on DMS features and data resources managed in DMS in a fine-grained manner.
   * 
   * @remarks
   * Currently, this feature is in the phased release phase. Only users who have phased out can use this feature and related APIs. For more information about the policy feature, see [Manage policies](https://help.aliyun.com/document_detail/2848565.html).
   * 
   * @param request - CreateAbacPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAbacPolicyResponse
   */
  async createAbacPolicyWithOptions(request: $_model.CreateAbacPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAbacPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.abacPolicyContent)) {
      query["AbacPolicyContent"] = request.abacPolicyContent;
    }

    if (!$dara.isNull(request.abacPolicyDesc)) {
      query["AbacPolicyDesc"] = request.abacPolicyDesc;
    }

    if (!$dara.isNull(request.abacPolicyName)) {
      query["AbacPolicyName"] = request.abacPolicyName;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAbacPolicy",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAbacPolicyResponse>(await this.callApi(params, req, runtime), new $_model.CreateAbacPolicyResponse({}));
  }

  /**
   * Creates a policy to manage the permissions on DMS features and data resources managed in DMS in a fine-grained manner.
   * 
   * @remarks
   * Currently, this feature is in the phased release phase. Only users who have phased out can use this feature and related APIs. For more information about the policy feature, see [Manage policies](https://help.aliyun.com/document_detail/2848565.html).
   * 
   * @param request - CreateAbacPolicyRequest
   * @returns CreateAbacPolicyResponse
   */
  async createAbacPolicy(request: $_model.CreateAbacPolicyRequest): Promise<$_model.CreateAbacPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAbacPolicyWithOptions(request, runtime);
  }

  /**
   * Creates a permission template
   * 
   * @remarks
   * You are a database administrator (DBA) or a Data Management (DMS) administrator. For more information about how to view system roles, see [View system roles](https://help.aliyun.com/document_detail/324212.html).
   * 
   * @param request - CreateAuthorityTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAuthorityTemplateResponse
   */
  async createAuthorityTemplateWithOptions(request: $_model.CreateAuthorityTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAuthorityTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAuthorityTemplate",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAuthorityTemplateResponse>(await this.callApi(params, req, runtime), new $_model.CreateAuthorityTemplateResponse({}));
  }

  /**
   * Creates a permission template
   * 
   * @remarks
   * You are a database administrator (DBA) or a Data Management (DMS) administrator. For more information about how to view system roles, see [View system roles](https://help.aliyun.com/document_detail/324212.html).
   * 
   * @param request - CreateAuthorityTemplateRequest
   * @returns CreateAuthorityTemplateResponse
   */
  async createAuthorityTemplate(request: $_model.CreateAuthorityTemplateRequest): Promise<$_model.CreateAuthorityTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAuthorityTemplateWithOptions(request, runtime);
  }

  /**
   * Creates a data archiving ticket to archive data to destinations such as dedicated storage space or ApsaraDB RDS for MySQL instances.
   * 
   * @remarks
   * You can call this API operation only for database instances that are managed in Security Collaboration mode.
   * 
   * @param tmpReq - CreateDataArchiveOrderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDataArchiveOrderResponse
   */
  async createDataArchiveOrderWithOptions(tmpReq: $_model.CreateDataArchiveOrderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDataArchiveOrderResponse> {
    tmpReq.validate();
    let request = new $_model.CreateDataArchiveOrderShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.param)) {
      request.paramShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.param, "Param", "json");
    }

    if (!$dara.isNull(tmpReq.relatedUserList)) {
      request.relatedUserListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.relatedUserList, "RelatedUserList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.comment)) {
      query["Comment"] = request.comment;
    }

    if (!$dara.isNull(request.paramShrink)) {
      query["Param"] = request.paramShrink;
    }

    if (!$dara.isNull(request.parentId)) {
      query["ParentId"] = request.parentId;
    }

    if (!$dara.isNull(request.pluginType)) {
      query["PluginType"] = request.pluginType;
    }

    if (!$dara.isNull(request.relatedUserListShrink)) {
      query["RelatedUserList"] = request.relatedUserListShrink;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDataArchiveOrder",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDataArchiveOrderResponse>(await this.callApi(params, req, runtime), new $_model.CreateDataArchiveOrderResponse({}));
  }

  /**
   * Creates a data archiving ticket to archive data to destinations such as dedicated storage space or ApsaraDB RDS for MySQL instances.
   * 
   * @remarks
   * You can call this API operation only for database instances that are managed in Security Collaboration mode.
   * 
   * @param request - CreateDataArchiveOrderRequest
   * @returns CreateDataArchiveOrderResponse
   */
  async createDataArchiveOrder(request: $_model.CreateDataArchiveOrderRequest): Promise<$_model.CreateDataArchiveOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDataArchiveOrderWithOptions(request, runtime);
  }

  /**
   * Creates a ticket for changing data in Data Management (DMS).
   * 
   * @remarks
   * For more information about the Normal Data Modify feature, see [Change regular data](https://help.aliyun.com/document_detail/58419.html).
   * 
   * @param tmpReq - CreateDataCorrectOrderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDataCorrectOrderResponse
   */
  async createDataCorrectOrderWithOptions(tmpReq: $_model.CreateDataCorrectOrderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDataCorrectOrderResponse> {
    tmpReq.validate();
    let request = new $_model.CreateDataCorrectOrderShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.param)) {
      request.paramShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.param, "Param", "json");
    }

    if (!$dara.isNull(tmpReq.relatedUserList)) {
      request.relatedUserListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.relatedUserList, "RelatedUserList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.attachmentKey)) {
      query["AttachmentKey"] = request.attachmentKey;
    }

    if (!$dara.isNull(request.comment)) {
      query["Comment"] = request.comment;
    }

    if (!$dara.isNull(request.paramShrink)) {
      query["Param"] = request.paramShrink;
    }

    if (!$dara.isNull(request.realLoginUserUid)) {
      query["RealLoginUserUid"] = request.realLoginUserUid;
    }

    if (!$dara.isNull(request.relatedUserListShrink)) {
      query["RelatedUserList"] = request.relatedUserListShrink;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDataCorrectOrder",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDataCorrectOrderResponse>(await this.callApi(params, req, runtime), new $_model.CreateDataCorrectOrderResponse({}));
  }

  /**
   * Creates a ticket for changing data in Data Management (DMS).
   * 
   * @remarks
   * For more information about the Normal Data Modify feature, see [Change regular data](https://help.aliyun.com/document_detail/58419.html).
   * 
   * @param request - CreateDataCorrectOrderRequest
   * @returns CreateDataCorrectOrderResponse
   */
  async createDataCorrectOrder(request: $_model.CreateDataCorrectOrderRequest): Promise<$_model.CreateDataCorrectOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDataCorrectOrderWithOptions(request, runtime);
  }

  /**
   * Creates a ticket for clearing historical data.
   * 
   * @remarks
   * For more information about the historical data cleaning, see [Clear historical data](https://help.aliyun.com/document_detail/162507.html).
   * This operation can be used only for MySQL databases.
   * 
   * @param tmpReq - CreateDataCronClearOrderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDataCronClearOrderResponse
   */
  async createDataCronClearOrderWithOptions(tmpReq: $_model.CreateDataCronClearOrderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDataCronClearOrderResponse> {
    tmpReq.validate();
    let request = new $_model.CreateDataCronClearOrderShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.param)) {
      request.paramShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.param, "Param", "json");
    }

    if (!$dara.isNull(tmpReq.relatedUserList)) {
      request.relatedUserListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.relatedUserList, "RelatedUserList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.attachmentKey)) {
      query["AttachmentKey"] = request.attachmentKey;
    }

    if (!$dara.isNull(request.comment)) {
      query["Comment"] = request.comment;
    }

    if (!$dara.isNull(request.paramShrink)) {
      query["Param"] = request.paramShrink;
    }

    if (!$dara.isNull(request.relatedUserListShrink)) {
      query["RelatedUserList"] = request.relatedUserListShrink;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDataCronClearOrder",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDataCronClearOrderResponse>(await this.callApi(params, req, runtime), new $_model.CreateDataCronClearOrderResponse({}));
  }

  /**
   * Creates a ticket for clearing historical data.
   * 
   * @remarks
   * For more information about the historical data cleaning, see [Clear historical data](https://help.aliyun.com/document_detail/162507.html).
   * This operation can be used only for MySQL databases.
   * 
   * @param request - CreateDataCronClearOrderRequest
   * @returns CreateDataCronClearOrderResponse
   */
  async createDataCronClearOrder(request: $_model.CreateDataCronClearOrderRequest): Promise<$_model.CreateDataCronClearOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDataCronClearOrderWithOptions(request, runtime);
  }

  /**
   * Creates a ticket to export an SQL result set.
   * 
   * @param tmpReq - CreateDataExportOrderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDataExportOrderResponse
   */
  async createDataExportOrderWithOptions(tmpReq: $_model.CreateDataExportOrderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDataExportOrderResponse> {
    tmpReq.validate();
    let request = new $_model.CreateDataExportOrderShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.pluginParam)) {
      request.pluginParamShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.pluginParam, "PluginParam", "json");
    }

    if (!$dara.isNull(tmpReq.relatedUserList)) {
      request.relatedUserListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.relatedUserList, "RelatedUserList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.attachmentKey)) {
      query["AttachmentKey"] = request.attachmentKey;
    }

    if (!$dara.isNull(request.comment)) {
      query["Comment"] = request.comment;
    }

    if (!$dara.isNull(request.parentId)) {
      query["ParentId"] = request.parentId;
    }

    if (!$dara.isNull(request.pluginParamShrink)) {
      query["PluginParam"] = request.pluginParamShrink;
    }

    if (!$dara.isNull(request.realLoginUserUid)) {
      query["RealLoginUserUid"] = request.realLoginUserUid;
    }

    if (!$dara.isNull(request.relatedUserListShrink)) {
      query["RelatedUserList"] = request.relatedUserListShrink;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDataExportOrder",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDataExportOrderResponse>(await this.callApi(params, req, runtime), new $_model.CreateDataExportOrderResponse({}));
  }

  /**
   * Creates a ticket to export an SQL result set.
   * 
   * @param request - CreateDataExportOrderRequest
   * @returns CreateDataExportOrderResponse
   */
  async createDataExportOrder(request: $_model.CreateDataExportOrderRequest): Promise<$_model.CreateDataExportOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDataExportOrderWithOptions(request, runtime);
  }

  /**
   * Creates a ticket for importing data to Data Management (DMS).
   * 
   * @remarks
   * For more information about the Large Data Import feature, see [Import data](https://help.aliyun.com/document_detail/161439.html).
   * 
   * @param tmpReq - CreateDataImportOrderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDataImportOrderResponse
   */
  async createDataImportOrderWithOptions(tmpReq: $_model.CreateDataImportOrderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDataImportOrderResponse> {
    tmpReq.validate();
    let request = new $_model.CreateDataImportOrderShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.param)) {
      request.paramShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.param, "Param", "json");
    }

    if (!$dara.isNull(tmpReq.relatedUserList)) {
      request.relatedUserListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.relatedUserList, "RelatedUserList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.attachmentKey)) {
      query["AttachmentKey"] = request.attachmentKey;
    }

    if (!$dara.isNull(request.comment)) {
      query["Comment"] = request.comment;
    }

    if (!$dara.isNull(request.paramShrink)) {
      query["Param"] = request.paramShrink;
    }

    if (!$dara.isNull(request.realLoginUserUid)) {
      query["RealLoginUserUid"] = request.realLoginUserUid;
    }

    if (!$dara.isNull(request.relatedUserListShrink)) {
      query["RelatedUserList"] = request.relatedUserListShrink;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDataImportOrder",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDataImportOrderResponse>(await this.callApi(params, req, runtime), new $_model.CreateDataImportOrderResponse({}));
  }

  /**
   * Creates a ticket for importing data to Data Management (DMS).
   * 
   * @remarks
   * For more information about the Large Data Import feature, see [Import data](https://help.aliyun.com/document_detail/161439.html).
   * 
   * @param request - CreateDataImportOrderRequest
   * @returns CreateDataImportOrderResponse
   */
  async createDataImportOrder(request: $_model.CreateDataImportOrderRequest): Promise<$_model.CreateDataImportOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDataImportOrderWithOptions(request, runtime);
  }

  /**
   * Creates a database in a data lakehouse.
   * 
   * @param tmpReq - CreateDataLakeDatabaseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDataLakeDatabaseResponse
   */
  async createDataLakeDatabaseWithOptions(tmpReq: $_model.CreateDataLakeDatabaseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDataLakeDatabaseResponse> {
    tmpReq.validate();
    let request = new $_model.CreateDataLakeDatabaseShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.parameters)) {
      request.parametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.parameters, "Parameters", "json");
    }

    let query = { };
    if (!$dara.isNull(request.catalogName)) {
      query["CatalogName"] = request.catalogName;
    }

    if (!$dara.isNull(request.dataRegion)) {
      query["DataRegion"] = request.dataRegion;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.location)) {
      query["Location"] = request.location;
    }

    if (!$dara.isNull(request.parametersShrink)) {
      query["Parameters"] = request.parametersShrink;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDataLakeDatabase",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDataLakeDatabaseResponse>(await this.callApi(params, req, runtime), new $_model.CreateDataLakeDatabaseResponse({}));
  }

  /**
   * Creates a database in a data lakehouse.
   * 
   * @param request - CreateDataLakeDatabaseRequest
   * @returns CreateDataLakeDatabaseResponse
   */
  async createDataLakeDatabase(request: $_model.CreateDataLakeDatabaseRequest): Promise<$_model.CreateDataLakeDatabaseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDataLakeDatabaseWithOptions(request, runtime);
  }

  /**
   * Creates a custom function in a data lakehouse.
   * 
   * @param tmpReq - CreateDataLakeFunctionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDataLakeFunctionResponse
   */
  async createDataLakeFunctionWithOptions(tmpReq: $_model.CreateDataLakeFunctionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDataLakeFunctionResponse> {
    tmpReq.validate();
    let request = new $_model.CreateDataLakeFunctionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.functionInput)) {
      request.functionInputShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.functionInput, "FunctionInput", "json");
    }

    let query = { };
    if (!$dara.isNull(request.catalogName)) {
      query["CatalogName"] = request.catalogName;
    }

    if (!$dara.isNull(request.dataRegion)) {
      query["DataRegion"] = request.dataRegion;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.functionInputShrink)) {
      body["FunctionInput"] = request.functionInputShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDataLakeFunction",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDataLakeFunctionResponse>(await this.callApi(params, req, runtime), new $_model.CreateDataLakeFunctionResponse({}));
  }

  /**
   * Creates a custom function in a data lakehouse.
   * 
   * @param request - CreateDataLakeFunctionRequest
   * @returns CreateDataLakeFunctionResponse
   */
  async createDataLakeFunction(request: $_model.CreateDataLakeFunctionRequest): Promise<$_model.CreateDataLakeFunctionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDataLakeFunctionWithOptions(request, runtime);
  }

  /**
   * Creates a partition for a table in a data lakehouse.
   * 
   * @param tmpReq - CreateDataLakePartitionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDataLakePartitionResponse
   */
  async createDataLakePartitionWithOptions(tmpReq: $_model.CreateDataLakePartitionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDataLakePartitionResponse> {
    tmpReq.validate();
    let request = new $_model.CreateDataLakePartitionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.partitionInput)) {
      request.partitionInputShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.partitionInput, "PartitionInput", "json");
    }

    let query = { };
    if (!$dara.isNull(request.catalogName)) {
      query["CatalogName"] = request.catalogName;
    }

    if (!$dara.isNull(request.dataRegion)) {
      query["DataRegion"] = request.dataRegion;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.ifNotExists)) {
      query["IfNotExists"] = request.ifNotExists;
    }

    if (!$dara.isNull(request.needResult)) {
      query["NeedResult"] = request.needResult;
    }

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.partitionInputShrink)) {
      body["PartitionInput"] = request.partitionInputShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDataLakePartition",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDataLakePartitionResponse>(await this.callApi(params, req, runtime), new $_model.CreateDataLakePartitionResponse({}));
  }

  /**
   * Creates a partition for a table in a data lakehouse.
   * 
   * @param request - CreateDataLakePartitionRequest
   * @returns CreateDataLakePartitionResponse
   */
  async createDataLakePartition(request: $_model.CreateDataLakePartitionRequest): Promise<$_model.CreateDataLakePartitionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDataLakePartitionWithOptions(request, runtime);
  }

  /**
   * Creates a table in a data lakehouse.
   * 
   * @param tmpReq - CreateDataLakeTableRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDataLakeTableResponse
   */
  async createDataLakeTableWithOptions(tmpReq: $_model.CreateDataLakeTableRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDataLakeTableResponse> {
    tmpReq.validate();
    let request = new $_model.CreateDataLakeTableShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tableInput)) {
      request.tableInputShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tableInput, "TableInput", "json");
    }

    let query = { };
    if (!$dara.isNull(request.catalogName)) {
      query["CatalogName"] = request.catalogName;
    }

    if (!$dara.isNull(request.dataRegion)) {
      query["DataRegion"] = request.dataRegion;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tableInputShrink)) {
      body["TableInput"] = request.tableInputShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDataLakeTable",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDataLakeTableResponse>(await this.callApi(params, req, runtime), new $_model.CreateDataLakeTableResponse({}));
  }

  /**
   * Creates a table in a data lakehouse.
   * 
   * @param request - CreateDataLakeTableRequest
   * @returns CreateDataLakeTableResponse
   */
  async createDataLakeTable(request: $_model.CreateDataLakeTableRequest): Promise<$_model.CreateDataLakeTableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDataLakeTableWithOptions(request, runtime);
  }

  /**
   * Creates a data tracking ticket.
   * 
   * @remarks
   * This operation is available only for instances that are managed in Security Collaboration mode.
   * 
   * @param tmpReq - CreateDataTrackOrderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDataTrackOrderResponse
   */
  async createDataTrackOrderWithOptions(tmpReq: $_model.CreateDataTrackOrderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDataTrackOrderResponse> {
    tmpReq.validate();
    let request = new $_model.CreateDataTrackOrderShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.param)) {
      request.paramShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.param, "Param", "json");
    }

    if (!$dara.isNull(tmpReq.relatedUserList)) {
      request.relatedUserListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.relatedUserList, "RelatedUserList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.comment)) {
      query["Comment"] = request.comment;
    }

    if (!$dara.isNull(request.paramShrink)) {
      query["Param"] = request.paramShrink;
    }

    if (!$dara.isNull(request.relatedUserListShrink)) {
      query["RelatedUserList"] = request.relatedUserListShrink;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDataTrackOrder",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDataTrackOrderResponse>(await this.callApi(params, req, runtime), new $_model.CreateDataTrackOrderResponse({}));
  }

  /**
   * Creates a data tracking ticket.
   * 
   * @remarks
   * This operation is available only for instances that are managed in Security Collaboration mode.
   * 
   * @param request - CreateDataTrackOrderRequest
   * @returns CreateDataTrackOrderResponse
   */
  async createDataTrackOrder(request: $_model.CreateDataTrackOrderRequest): Promise<$_model.CreateDataTrackOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDataTrackOrderWithOptions(request, runtime);
  }

  /**
   * Creates a database export ticket.
   * 
   * @param tmpReq - CreateDatabaseExportOrderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDatabaseExportOrderResponse
   */
  async createDatabaseExportOrderWithOptions(tmpReq: $_model.CreateDatabaseExportOrderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDatabaseExportOrderResponse> {
    tmpReq.validate();
    let request = new $_model.CreateDatabaseExportOrderShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.pluginParam)) {
      request.pluginParamShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.pluginParam, "PluginParam", "json");
    }

    if (!$dara.isNull(tmpReq.relatedUserList)) {
      request.relatedUserListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.relatedUserList, "RelatedUserList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.attachmentKey)) {
      query["AttachmentKey"] = request.attachmentKey;
    }

    if (!$dara.isNull(request.comment)) {
      query["Comment"] = request.comment;
    }

    if (!$dara.isNull(request.parentId)) {
      query["ParentId"] = request.parentId;
    }

    if (!$dara.isNull(request.pluginParamShrink)) {
      query["PluginParam"] = request.pluginParamShrink;
    }

    if (!$dara.isNull(request.relatedUserListShrink)) {
      query["RelatedUserList"] = request.relatedUserListShrink;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDatabaseExportOrder",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDatabaseExportOrderResponse>(await this.callApi(params, req, runtime), new $_model.CreateDatabaseExportOrderResponse({}));
  }

  /**
   * Creates a database export ticket.
   * 
   * @param request - CreateDatabaseExportOrderRequest
   * @returns CreateDatabaseExportOrderResponse
   */
  async createDatabaseExportOrder(request: $_model.CreateDatabaseExportOrderRequest): Promise<$_model.CreateDatabaseExportOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDatabaseExportOrderWithOptions(request, runtime);
  }

  /**
   * 用于创建DIFY实例及相关资源，支持自定义配置。
   * 
   * @remarks
   * ## 请求说明
   * - `workspaceOption` 参数指示是否新建工作空间，默认使用已有工作空间。
   * - 如果选择新建工作空间 (`CreateNewInstance`)，则必须提供 `workspaceName` 和 `workspaceDescription`。
   * - `vpcId`, `VSwitchID`, `zoneId`, `regionCode`, `ResourceQuota`, `Replicas`, `storageType`, `dbInstanceClass`, `dbEngineVersion`, `kvstoreEngineVersion` 是必填项。
   * - 当 `storageType` 为 `oss` 时，需要指定 `ossBucketResourceId` 和 `ossPath`。
   * - 如果需要新建数据库实例，则必须提供 `instanceAccount` 和 `instancePassword`。
   * - 预付费模式下，`PayPeriodType` 和 `PayPeriod` 必须填写。
   * - 可以通过设置 `dryRun` 为 `true` 来执行预检查而不实际创建实例。
   * 
   * @param request - CreateDifyInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDifyInstanceResponse
   */
  async createDifyInstanceWithOptions(request: $_model.CreateDifyInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDifyInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.adbpgInstanceMode)) {
      query["AdbpgInstanceMode"] = request.adbpgInstanceMode;
    }

    if (!$dara.isNull(request.backupVSwitchId)) {
      query["BackupVSwitchId"] = request.backupVSwitchId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dataRegion)) {
      query["DataRegion"] = request.dataRegion;
    }

    if (!$dara.isNull(request.databaseOption)) {
      query["DatabaseOption"] = request.databaseOption;
    }

    if (!$dara.isNull(request.dbEngineType)) {
      query["DbEngineType"] = request.dbEngineType;
    }

    if (!$dara.isNull(request.dbEngineVersion)) {
      query["DbEngineVersion"] = request.dbEngineVersion;
    }

    if (!$dara.isNull(request.dbInstanceAccount)) {
      query["DbInstanceAccount"] = request.dbInstanceAccount;
    }

    if (!$dara.isNull(request.dbInstanceCategory)) {
      query["DbInstanceCategory"] = request.dbInstanceCategory;
    }

    if (!$dara.isNull(request.dbInstanceClass)) {
      query["DbInstanceClass"] = request.dbInstanceClass;
    }

    if (!$dara.isNull(request.dbInstancePassword)) {
      query["DbInstancePassword"] = request.dbInstancePassword;
    }

    if (!$dara.isNull(request.dbResourceId)) {
      query["DbResourceId"] = request.dbResourceId;
    }

    if (!$dara.isNull(request.dbStorageSize)) {
      query["DbStorageSize"] = request.dbStorageSize;
    }

    if (!$dara.isNull(request.dbStorageType)) {
      query["DbStorageType"] = request.dbStorageType;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.edition)) {
      query["Edition"] = request.edition;
    }

    if (!$dara.isNull(request.enableExtraEndpoint)) {
      query["EnableExtraEndpoint"] = request.enableExtraEndpoint;
    }

    if (!$dara.isNull(request.gpuNodeSpec)) {
      query["GpuNodeSpec"] = request.gpuNodeSpec;
    }

    if (!$dara.isNull(request.kvStoreAccount)) {
      query["KvStoreAccount"] = request.kvStoreAccount;
    }

    if (!$dara.isNull(request.kvStoreEngineVersion)) {
      query["KvStoreEngineVersion"] = request.kvStoreEngineVersion;
    }

    if (!$dara.isNull(request.kvStoreInstanceClass)) {
      query["KvStoreInstanceClass"] = request.kvStoreInstanceClass;
    }

    if (!$dara.isNull(request.kvStoreNodeType)) {
      query["KvStoreNodeType"] = request.kvStoreNodeType;
    }

    if (!$dara.isNull(request.kvStoreOption)) {
      query["KvStoreOption"] = request.kvStoreOption;
    }

    if (!$dara.isNull(request.kvStorePassword)) {
      query["KvStorePassword"] = request.kvStorePassword;
    }

    if (!$dara.isNull(request.kvStoreResourceId)) {
      query["KvStoreResourceId"] = request.kvStoreResourceId;
    }

    if (!$dara.isNull(request.kvStoreType)) {
      query["KvStoreType"] = request.kvStoreType;
    }

    if (!$dara.isNull(request.majorVersion)) {
      query["MajorVersion"] = request.majorVersion;
    }

    if (!$dara.isNull(request.modelId)) {
      query["ModelId"] = request.modelId;
    }

    if (!$dara.isNull(request.modelOption)) {
      query["ModelOption"] = request.modelOption;
    }

    if (!$dara.isNull(request.natGatewayOption)) {
      query["NatGatewayOption"] = request.natGatewayOption;
    }

    if (!$dara.isNull(request.onlyIntranet)) {
      query["OnlyIntranet"] = request.onlyIntranet;
    }

    if (!$dara.isNull(request.ossPath)) {
      query["OssPath"] = request.ossPath;
    }

    if (!$dara.isNull(request.ossResourceId)) {
      query["OssResourceId"] = request.ossResourceId;
    }

    if (!$dara.isNull(request.payPeriod)) {
      query["PayPeriod"] = request.payPeriod;
    }

    if (!$dara.isNull(request.payPeriodType)) {
      query["PayPeriodType"] = request.payPeriodType;
    }

    if (!$dara.isNull(request.payType)) {
      query["PayType"] = request.payType;
    }

    if (!$dara.isNull(request.replicas)) {
      query["Replicas"] = request.replicas;
    }

    if (!$dara.isNull(request.resourceQuota)) {
      query["ResourceQuota"] = request.resourceQuota;
    }

    if (!$dara.isNull(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    if (!$dara.isNull(request.segDiskPerformanceLevel)) {
      query["SegDiskPerformanceLevel"] = request.segDiskPerformanceLevel;
    }

    if (!$dara.isNull(request.segNodeNum)) {
      query["SegNodeNum"] = request.segNodeNum;
    }

    if (!$dara.isNull(request.storageType)) {
      query["StorageType"] = request.storageType;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    if (!$dara.isNull(request.vectordbAccount)) {
      query["VectordbAccount"] = request.vectordbAccount;
    }

    if (!$dara.isNull(request.vectordbCategory)) {
      query["VectordbCategory"] = request.vectordbCategory;
    }

    if (!$dara.isNull(request.vectordbEngineVersion)) {
      query["VectordbEngineVersion"] = request.vectordbEngineVersion;
    }

    if (!$dara.isNull(request.vectordbInstanceSpec)) {
      query["VectordbInstanceSpec"] = request.vectordbInstanceSpec;
    }

    if (!$dara.isNull(request.vectordbOption)) {
      query["VectordbOption"] = request.vectordbOption;
    }

    if (!$dara.isNull(request.vectordbPassword)) {
      query["VectordbPassword"] = request.vectordbPassword;
    }

    if (!$dara.isNull(request.vectordbResourceId)) {
      query["VectordbResourceId"] = request.vectordbResourceId;
    }

    if (!$dara.isNull(request.vectordbStorageSize)) {
      query["VectordbStorageSize"] = request.vectordbStorageSize;
    }

    if (!$dara.isNull(request.vectordbStorageType)) {
      query["VectordbStorageType"] = request.vectordbStorageType;
    }

    if (!$dara.isNull(request.vectordbType)) {
      query["VectordbType"] = request.vectordbType;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    if (!$dara.isNull(request.workspaceDescription)) {
      query["WorkspaceDescription"] = request.workspaceDescription;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    if (!$dara.isNull(request.workspaceName)) {
      query["WorkspaceName"] = request.workspaceName;
    }

    if (!$dara.isNull(request.workspaceOption)) {
      query["WorkspaceOption"] = request.workspaceOption;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDifyInstance",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDifyInstanceResponse>(await this.callApi(params, req, runtime), new $_model.CreateDifyInstanceResponse({}));
  }

  /**
   * 用于创建DIFY实例及相关资源，支持自定义配置。
   * 
   * @remarks
   * ## 请求说明
   * - `workspaceOption` 参数指示是否新建工作空间，默认使用已有工作空间。
   * - 如果选择新建工作空间 (`CreateNewInstance`)，则必须提供 `workspaceName` 和 `workspaceDescription`。
   * - `vpcId`, `VSwitchID`, `zoneId`, `regionCode`, `ResourceQuota`, `Replicas`, `storageType`, `dbInstanceClass`, `dbEngineVersion`, `kvstoreEngineVersion` 是必填项。
   * - 当 `storageType` 为 `oss` 时，需要指定 `ossBucketResourceId` 和 `ossPath`。
   * - 如果需要新建数据库实例，则必须提供 `instanceAccount` 和 `instancePassword`。
   * - 预付费模式下，`PayPeriodType` 和 `PayPeriod` 必须填写。
   * - 可以通过设置 `dryRun` 为 `true` 来执行预检查而不实际创建实例。
   * 
   * @param request - CreateDifyInstanceRequest
   * @returns CreateDifyInstanceResponse
   */
  async createDifyInstance(request: $_model.CreateDifyInstanceRequest): Promise<$_model.CreateDifyInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDifyInstanceWithOptions(request, runtime);
  }

  /**
   * 创建无锁变更工单
   * 
   * @remarks
   * For more information about the lock-free change feature, see [Overview](https://help.aliyun.com/document_detail/207847.html).
   * This operation can be used only for instances that are managed in Stable Change or Security Collaboration mode. For more information, see [Change data without the need to lock tables](https://help.aliyun.com/document_detail/96145.html) and [Change schemas without locking tables](https://help.aliyun.com/document_detail/98373.html).
   * 
   * @param tmpReq - CreateFreeLockCorrectOrderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateFreeLockCorrectOrderResponse
   */
  async createFreeLockCorrectOrderWithOptions(tmpReq: $_model.CreateFreeLockCorrectOrderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateFreeLockCorrectOrderResponse> {
    tmpReq.validate();
    let request = new $_model.CreateFreeLockCorrectOrderShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.param)) {
      request.paramShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.param, "Param", "json");
    }

    if (!$dara.isNull(tmpReq.relatedUserList)) {
      request.relatedUserListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.relatedUserList, "RelatedUserList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.attachmentKey)) {
      query["AttachmentKey"] = request.attachmentKey;
    }

    if (!$dara.isNull(request.comment)) {
      query["Comment"] = request.comment;
    }

    if (!$dara.isNull(request.paramShrink)) {
      query["Param"] = request.paramShrink;
    }

    if (!$dara.isNull(request.realLoginUserUid)) {
      query["RealLoginUserUid"] = request.realLoginUserUid;
    }

    if (!$dara.isNull(request.relatedUserListShrink)) {
      query["RelatedUserList"] = request.relatedUserListShrink;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateFreeLockCorrectOrder",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateFreeLockCorrectOrderResponse>(await this.callApi(params, req, runtime), new $_model.CreateFreeLockCorrectOrderResponse({}));
  }

  /**
   * 创建无锁变更工单
   * 
   * @remarks
   * For more information about the lock-free change feature, see [Overview](https://help.aliyun.com/document_detail/207847.html).
   * This operation can be used only for instances that are managed in Stable Change or Security Collaboration mode. For more information, see [Change data without the need to lock tables](https://help.aliyun.com/document_detail/96145.html) and [Change schemas without locking tables](https://help.aliyun.com/document_detail/98373.html).
   * 
   * @param request - CreateFreeLockCorrectOrderRequest
   * @returns CreateFreeLockCorrectOrderResponse
   */
  async createFreeLockCorrectOrder(request: $_model.CreateFreeLockCorrectOrderRequest): Promise<$_model.CreateFreeLockCorrectOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createFreeLockCorrectOrderWithOptions(request, runtime);
  }

  /**
   * Creates a workspace for data warehouse development in Data Management (DMS).
   * 
   * @remarks
   *   The workspace name must be unique within a tenant. If a workspace with the same name already exists within the tenant, the call may fail.
   * *   You can call the [GetLhSpaceByName](https://help.aliyun.com/document_detail/424379.html) operation to query whether a workspace with a specific name already exists as a DMS administrator or database administrator (DBA).
   * 
   * @param request - CreateLakeHouseSpaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateLakeHouseSpaceResponse
   */
  async createLakeHouseSpaceWithOptions(request: $_model.CreateLakeHouseSpaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateLakeHouseSpaceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.devDbId)) {
      query["DevDbId"] = request.devDbId;
    }

    if (!$dara.isNull(request.dwDbType)) {
      query["DwDbType"] = request.dwDbType;
    }

    if (!$dara.isNull(request.mode)) {
      query["Mode"] = request.mode;
    }

    if (!$dara.isNull(request.prodDbId)) {
      query["ProdDbId"] = request.prodDbId;
    }

    if (!$dara.isNull(request.spaceConfig)) {
      query["SpaceConfig"] = request.spaceConfig;
    }

    if (!$dara.isNull(request.spaceName)) {
      query["SpaceName"] = request.spaceName;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateLakeHouseSpace",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateLakeHouseSpaceResponse>(await this.callApi(params, req, runtime), new $_model.CreateLakeHouseSpaceResponse({}));
  }

  /**
   * Creates a workspace for data warehouse development in Data Management (DMS).
   * 
   * @remarks
   *   The workspace name must be unique within a tenant. If a workspace with the same name already exists within the tenant, the call may fail.
   * *   You can call the [GetLhSpaceByName](https://help.aliyun.com/document_detail/424379.html) operation to query whether a workspace with a specific name already exists as a DMS administrator or database administrator (DBA).
   * 
   * @param request - CreateLakeHouseSpaceRequest
   * @returns CreateLakeHouseSpaceResponse
   */
  async createLakeHouseSpace(request: $_model.CreateLakeHouseSpaceRequest): Promise<$_model.CreateLakeHouseSpaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createLakeHouseSpaceWithOptions(request, runtime);
  }

  /**
   * Creates a logical database in Database Management (DMS).
   * 
   * @param tmpReq - CreateLogicDatabaseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateLogicDatabaseResponse
   */
  async createLogicDatabaseWithOptions(tmpReq: $_model.CreateLogicDatabaseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateLogicDatabaseResponse> {
    tmpReq.validate();
    let request = new $_model.CreateLogicDatabaseShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.databaseIds)) {
      request.databaseIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.databaseIds, "DatabaseIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.alias)) {
      query["Alias"] = request.alias;
    }

    if (!$dara.isNull(request.databaseIdsShrink)) {
      query["DatabaseIds"] = request.databaseIdsShrink;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateLogicDatabase",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateLogicDatabaseResponse>(await this.callApi(params, req, runtime), new $_model.CreateLogicDatabaseResponse({}));
  }

  /**
   * Creates a logical database in Database Management (DMS).
   * 
   * @param request - CreateLogicDatabaseRequest
   * @returns CreateLogicDatabaseResponse
   */
  async createLogicDatabase(request: $_model.CreateLogicDatabaseRequest): Promise<$_model.CreateLogicDatabaseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createLogicDatabaseWithOptions(request, runtime);
  }

  /**
   * Create Asset Category
   * 
   * @param tmpReq - CreateMetaCategoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMetaCategoryResponse
   */
  async createMetaCategoryWithOptions(tmpReq: $_model.CreateMetaCategoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMetaCategoryResponse> {
    tmpReq.validate();
    let request = new $_model.CreateMetaCategoryShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.ownerIds)) {
      request.ownerIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ownerIds, "OwnerIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.ownerIdsShrink)) {
      query["OwnerIds"] = request.ownerIdsShrink;
    }

    if (!$dara.isNull(request.parentCategoryId)) {
      query["ParentCategoryId"] = request.parentCategoryId;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateMetaCategory",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateMetaCategoryResponse>(await this.callApi(params, req, runtime), new $_model.CreateMetaCategoryResponse({}));
  }

  /**
   * Create Asset Category
   * 
   * @param request - CreateMetaCategoryRequest
   * @returns CreateMetaCategoryResponse
   */
  async createMetaCategory(request: $_model.CreateMetaCategoryRequest): Promise<$_model.CreateMetaCategoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createMetaCategoryWithOptions(request, runtime);
  }

  /**
   * Creates a ticket in Data Management (DMS).
   * 
   * @remarks
   * To facilitate ticket creation, you can call the following dedicated operations to create some types of tickets:
   * *   [CreateDataCorrectOrder](https://help.aliyun.com/document_detail/208388.html): creates a regular data change ticket.
   * *   [CreateDataCronClearOrder](https://help.aliyun.com/document_detail/208385.html): creates a ticket to clear historical data.
   * *   [CreateDataImportOrder](https://help.aliyun.com/document_detail/208387.html): creates a data import ticket.
   * *   [CreateFreeLockCorrectOrder](https://help.aliyun.com/document_detail/208386.html): creates a lock-free change ticket.
   * 
   * @param tmpReq - CreateOrderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateOrderResponse
   */
  async createOrderWithOptions(tmpReq: $_model.CreateOrderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateOrderResponse> {
    tmpReq.validate();
    let request = new $_model.CreateOrderShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.pluginParam)) {
      request.pluginParamShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.pluginParam, "PluginParam", "json");
    }

    let query = { };
    if (!$dara.isNull(request.attachmentKey)) {
      query["AttachmentKey"] = request.attachmentKey;
    }

    if (!$dara.isNull(request.comment)) {
      query["Comment"] = request.comment;
    }

    if (!$dara.isNull(request.pluginType)) {
      query["PluginType"] = request.pluginType;
    }

    if (!$dara.isNull(request.realLoginUserUid)) {
      query["RealLoginUserUid"] = request.realLoginUserUid;
    }

    if (!$dara.isNull(request.relatedUserList)) {
      query["RelatedUserList"] = request.relatedUserList;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pluginParamShrink)) {
      body["PluginParam"] = request.pluginParamShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateOrder",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateOrderResponse>(await this.callApi(params, req, runtime), new $_model.CreateOrderResponse({}));
  }

  /**
   * Creates a ticket in Data Management (DMS).
   * 
   * @remarks
   * To facilitate ticket creation, you can call the following dedicated operations to create some types of tickets:
   * *   [CreateDataCorrectOrder](https://help.aliyun.com/document_detail/208388.html): creates a regular data change ticket.
   * *   [CreateDataCronClearOrder](https://help.aliyun.com/document_detail/208385.html): creates a ticket to clear historical data.
   * *   [CreateDataImportOrder](https://help.aliyun.com/document_detail/208387.html): creates a data import ticket.
   * *   [CreateFreeLockCorrectOrder](https://help.aliyun.com/document_detail/208386.html): creates a lock-free change ticket.
   * 
   * @param request - CreateOrderRequest
   * @returns CreateOrderResponse
   */
  async createOrder(request: $_model.CreateOrderRequest): Promise<$_model.CreateOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createOrderWithOptions(request, runtime);
  }

  /**
   * Creates a programmable object ticket.
   * 
   * @remarks
   * You can call this API operation only for database instances that are managed in Security Collaboration mode.
   * 
   * @param tmpReq - CreateProcCorrectOrderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateProcCorrectOrderResponse
   */
  async createProcCorrectOrderWithOptions(tmpReq: $_model.CreateProcCorrectOrderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateProcCorrectOrderResponse> {
    tmpReq.validate();
    let request = new $_model.CreateProcCorrectOrderShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.param)) {
      request.paramShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.param, "Param", "json");
    }

    if (!$dara.isNull(tmpReq.relatedUserList)) {
      request.relatedUserListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.relatedUserList, "RelatedUserList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.attachmentKey)) {
      query["AttachmentKey"] = request.attachmentKey;
    }

    if (!$dara.isNull(request.comment)) {
      query["Comment"] = request.comment;
    }

    if (!$dara.isNull(request.paramShrink)) {
      query["Param"] = request.paramShrink;
    }

    if (!$dara.isNull(request.relatedUserListShrink)) {
      query["RelatedUserList"] = request.relatedUserListShrink;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateProcCorrectOrder",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateProcCorrectOrderResponse>(await this.callApi(params, req, runtime), new $_model.CreateProcCorrectOrderResponse({}));
  }

  /**
   * Creates a programmable object ticket.
   * 
   * @remarks
   * You can call this API operation only for database instances that are managed in Security Collaboration mode.
   * 
   * @param request - CreateProcCorrectOrderRequest
   * @returns CreateProcCorrectOrderResponse
   */
  async createProcCorrectOrder(request: $_model.CreateProcCorrectOrderRequest): Promise<$_model.CreateProcCorrectOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createProcCorrectOrderWithOptions(request, runtime);
  }

  /**
   * Enables the secure access proxy feature for a database instance.
   * 
   * @remarks
   * - The database instance runs the MySQL or MariaDB database engine. For example, the database instance can be an ApsaraDB RDS for MySQL instance, a PolarDB for MySQL cluster, a Distributed Relational Database Service (DRDS) cluster, or an AnalyticDB for MySQL cluster. The database instance can also be a self-managed MySQL or MariaDB database, or a MySQL or MariaDB database in a third-party cloud.
   * - The database instance resides in the China (Hangzhou) or China (Beijing) region.
   * - You are a Data Management (DMS) administrator, a database administrator (DBA), or the owner of the database instance.
   * 
   * @param request - CreateProxyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateProxyResponse
   */
  async createProxyWithOptions(request: $_model.CreateProxyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateProxyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.username)) {
      query["Username"] = request.username;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateProxy",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateProxyResponse>(await this.callApi(params, req, runtime), new $_model.CreateProxyResponse({}));
  }

  /**
   * Enables the secure access proxy feature for a database instance.
   * 
   * @remarks
   * - The database instance runs the MySQL or MariaDB database engine. For example, the database instance can be an ApsaraDB RDS for MySQL instance, a PolarDB for MySQL cluster, a Distributed Relational Database Service (DRDS) cluster, or an AnalyticDB for MySQL cluster. The database instance can also be a self-managed MySQL or MariaDB database, or a MySQL or MariaDB database in a third-party cloud.
   * - The database instance resides in the China (Hangzhou) or China (Beijing) region.
   * - You are a Data Management (DMS) administrator, a database administrator (DBA), or the owner of the database instance.
   * 
   * @param request - CreateProxyRequest
   * @returns CreateProxyResponse
   */
  async createProxy(request: $_model.CreateProxyRequest): Promise<$_model.CreateProxyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createProxyWithOptions(request, runtime);
  }

  /**
   * You can call the CreateProxyAccess to authorize users to access the DB instance through the Data Security Protection agent.
   * 
   * @remarks
   * - The data security protection feature is enabled for the instance.
   * - Your user role is the administrator role, DBA role, or the owner of data security protection for the current instance.
   * 
   * @param request - CreateProxyAccessRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateProxyAccessResponse
   */
  async createProxyAccessWithOptions(request: $_model.CreateProxyAccessRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateProxyAccessResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.indepAccount)) {
      query["IndepAccount"] = request.indepAccount;
    }

    if (!$dara.isNull(request.indepPassword)) {
      query["IndepPassword"] = request.indepPassword;
    }

    if (!$dara.isNull(request.proxyId)) {
      query["ProxyId"] = request.proxyId;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateProxyAccess",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateProxyAccessResponse>(await this.callApi(params, req, runtime), new $_model.CreateProxyAccessResponse({}));
  }

  /**
   * You can call the CreateProxyAccess to authorize users to access the DB instance through the Data Security Protection agent.
   * 
   * @remarks
   * - The data security protection feature is enabled for the instance.
   * - Your user role is the administrator role, DBA role, or the owner of data security protection for the current instance.
   * 
   * @param request - CreateProxyAccessRequest
   * @returns CreateProxyAccessResponse
   */
  async createProxyAccess(request: $_model.CreateProxyAccessRequest): Promise<$_model.CreateProxyAccessResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createProxyAccessWithOptions(request, runtime);
  }

  /**
   * Executes a schema design ticket.
   * 
   * @param request - CreatePublishGroupTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePublishGroupTaskResponse
   */
  async createPublishGroupTaskWithOptions(request: $_model.CreatePublishGroupTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePublishGroupTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbId)) {
      query["DbId"] = request.dbId;
    }

    if (!$dara.isNull(request.logic)) {
      query["Logic"] = request.logic;
    }

    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!$dara.isNull(request.planTime)) {
      query["PlanTime"] = request.planTime;
    }

    if (!$dara.isNull(request.publishStrategy)) {
      query["PublishStrategy"] = request.publishStrategy;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePublishGroupTask",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePublishGroupTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreatePublishGroupTaskResponse({}));
  }

  /**
   * Executes a schema design ticket.
   * 
   * @param request - CreatePublishGroupTaskRequest
   * @returns CreatePublishGroupTaskResponse
   */
  async createPublishGroupTask(request: $_model.CreatePublishGroupTaskRequest): Promise<$_model.CreatePublishGroupTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createPublishGroupTaskWithOptions(request, runtime);
  }

  /**
   * Creates a SQL review ticket.
   * 
   * @remarks
   * You can call this operation only for database instances that are managed in Security Collaboration mode.
   * For more information about the SQL review feature, see [SQL review](https://help.aliyun.com/document_detail/60374.html).
   * 
   * @param tmpReq - CreateSQLReviewOrderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSQLReviewOrderResponse
   */
  async createSQLReviewOrderWithOptions(tmpReq: $_model.CreateSQLReviewOrderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSQLReviewOrderResponse> {
    tmpReq.validate();
    let request = new $_model.CreateSQLReviewOrderShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.param)) {
      request.paramShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.param, "Param", "json");
    }

    if (!$dara.isNull(tmpReq.relatedUserList)) {
      request.relatedUserListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.relatedUserList, "RelatedUserList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.comment)) {
      query["Comment"] = request.comment;
    }

    if (!$dara.isNull(request.paramShrink)) {
      query["Param"] = request.paramShrink;
    }

    if (!$dara.isNull(request.relatedUserListShrink)) {
      query["RelatedUserList"] = request.relatedUserListShrink;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSQLReviewOrder",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSQLReviewOrderResponse>(await this.callApi(params, req, runtime), new $_model.CreateSQLReviewOrderResponse({}));
  }

  /**
   * Creates a SQL review ticket.
   * 
   * @remarks
   * You can call this operation only for database instances that are managed in Security Collaboration mode.
   * For more information about the SQL review feature, see [SQL review](https://help.aliyun.com/document_detail/60374.html).
   * 
   * @param request - CreateSQLReviewOrderRequest
   * @returns CreateSQLReviewOrderResponse
   */
  async createSQLReviewOrder(request: $_model.CreateSQLReviewOrderRequest): Promise<$_model.CreateSQLReviewOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSQLReviewOrderWithOptions(request, runtime);
  }

  /**
   * Creates a business scenario to group task flows by business scenario.
   * 
   * @param request - CreateScenarioRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateScenarioResponse
   */
  async createScenarioWithOptions(request: $_model.CreateScenarioRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateScenarioResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.scenarioName)) {
      query["ScenarioName"] = request.scenarioName;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateScenario",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateScenarioResponse>(await this.callApi(params, req, runtime), new $_model.CreateScenarioResponse({}));
  }

  /**
   * Creates a business scenario to group task flows by business scenario.
   * 
   * @param request - CreateScenarioRequest
   * @returns CreateScenarioResponse
   */
  async createScenario(request: $_model.CreateScenarioRequest): Promise<$_model.CreateScenarioResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createScenarioWithOptions(request, runtime);
  }

  /**
   * Creates a security rule set.
   * 
   * @param request - CreateStandardGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateStandardGroupResponse
   */
  async createStandardGroupWithOptions(request: $_model.CreateStandardGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateStandardGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbType)) {
      query["DbType"] = request.dbType;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateStandardGroup",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateStandardGroupResponse>(await this.callApi(params, req, runtime), new $_model.CreateStandardGroupResponse({}));
  }

  /**
   * Creates a security rule set.
   * 
   * @param request - CreateStandardGroupRequest
   * @returns CreateStandardGroupResponse
   */
  async createStandardGroup(request: $_model.CreateStandardGroupRequest): Promise<$_model.CreateStandardGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createStandardGroupWithOptions(request, runtime);
  }

  /**
   * Creates a schema synchronization ticket.
   * 
   * @param tmpReq - CreateStructSyncOrderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateStructSyncOrderResponse
   */
  async createStructSyncOrderWithOptions(tmpReq: $_model.CreateStructSyncOrderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateStructSyncOrderResponse> {
    tmpReq.validate();
    let request = new $_model.CreateStructSyncOrderShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.param)) {
      request.paramShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.param, "Param", "json");
    }

    if (!$dara.isNull(tmpReq.relatedUserList)) {
      request.relatedUserListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.relatedUserList, "RelatedUserList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.attachmentKey)) {
      query["AttachmentKey"] = request.attachmentKey;
    }

    if (!$dara.isNull(request.comment)) {
      query["Comment"] = request.comment;
    }

    if (!$dara.isNull(request.paramShrink)) {
      query["Param"] = request.paramShrink;
    }

    if (!$dara.isNull(request.relatedUserListShrink)) {
      query["RelatedUserList"] = request.relatedUserListShrink;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateStructSyncOrder",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateStructSyncOrderResponse>(await this.callApi(params, req, runtime), new $_model.CreateStructSyncOrderResponse({}));
  }

  /**
   * Creates a schema synchronization ticket.
   * 
   * @param request - CreateStructSyncOrderRequest
   * @returns CreateStructSyncOrderResponse
   */
  async createStructSyncOrder(request: $_model.CreateStructSyncOrderRequest): Promise<$_model.CreateStructSyncOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createStructSyncOrderWithOptions(request, runtime);
  }

  /**
   * Creates a task node for a task flow.
   * 
   * @param request - CreateTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTaskResponse
   */
  async createTaskWithOptions(request: $_model.CreateTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dagId)) {
      query["DagId"] = request.dagId;
    }

    if (!$dara.isNull(request.graphParam)) {
      query["GraphParam"] = request.graphParam;
    }

    if (!$dara.isNull(request.nodeContent)) {
      query["NodeContent"] = request.nodeContent;
    }

    if (!$dara.isNull(request.nodeName)) {
      query["NodeName"] = request.nodeName;
    }

    if (!$dara.isNull(request.nodeOutput)) {
      query["NodeOutput"] = request.nodeOutput;
    }

    if (!$dara.isNull(request.nodeType)) {
      query["NodeType"] = request.nodeType;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.timeVariables)) {
      query["TimeVariables"] = request.timeVariables;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTask",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateTaskResponse({}));
  }

  /**
   * Creates a task node for a task flow.
   * 
   * @param request - CreateTaskRequest
   * @returns CreateTaskResponse
   */
  async createTask(request: $_model.CreateTaskRequest): Promise<$_model.CreateTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createTaskWithOptions(request, runtime);
  }

  /**
   * Creates a task flow.
   * 
   * @param request - CreateTaskFlowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTaskFlowResponse
   */
  async createTaskFlowWithOptions(request: $_model.CreateTaskFlowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTaskFlowResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dagName)) {
      query["DagName"] = request.dagName;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.scenarioId)) {
      query["ScenarioId"] = request.scenarioId;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTaskFlow",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateTaskFlowResponse>(await this.callApi(params, req, runtime), new $_model.CreateTaskFlowResponse({}));
  }

  /**
   * Creates a task flow.
   * 
   * @param request - CreateTaskFlowRequest
   * @returns CreateTaskFlowResponse
   */
  async createTaskFlow(request: $_model.CreateTaskFlowRequest): Promise<$_model.CreateTaskFlowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createTaskFlowWithOptions(request, runtime);
  }

  /**
   * 创建上传附件任务
   * 
   * @param request - CreateUploadFileJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateUploadFileJobResponse
   */
  async createUploadFileJobWithOptions(request: $_model.CreateUploadFileJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateUploadFileJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!$dara.isNull(request.fileSource)) {
      query["FileSource"] = request.fileSource;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.uploadURL)) {
      query["UploadURL"] = request.uploadURL;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateUploadFileJob",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateUploadFileJobResponse>(await this.callApi(params, req, runtime), new $_model.CreateUploadFileJobResponse({}));
  }

  /**
   * 创建上传附件任务
   * 
   * @param request - CreateUploadFileJobRequest
   * @returns CreateUploadFileJobResponse
   */
  async createUploadFileJob(request: $_model.CreateUploadFileJobRequest): Promise<$_model.CreateUploadFileJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createUploadFileJobWithOptions(request, runtime);
  }

  /**
   * Creates a task to upload an Object Storage Service (OSS) file and obtain the key of the task.
   * 
   * @param tmpReq - CreateUploadOSSFileJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateUploadOSSFileJobResponse
   */
  async createUploadOSSFileJobWithOptions(tmpReq: $_model.CreateUploadOSSFileJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateUploadOSSFileJobResponse> {
    tmpReq.validate();
    let request = new $_model.CreateUploadOSSFileJobShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.uploadTarget)) {
      request.uploadTargetShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.uploadTarget, "UploadTarget", "json");
    }

    let query = { };
    if (!$dara.isNull(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!$dara.isNull(request.fileSource)) {
      query["FileSource"] = request.fileSource;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.uploadTargetShrink)) {
      query["UploadTarget"] = request.uploadTargetShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateUploadOSSFileJob",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateUploadOSSFileJobResponse>(await this.callApi(params, req, runtime), new $_model.CreateUploadOSSFileJobResponse({}));
  }

  /**
   * Creates a task to upload an Object Storage Service (OSS) file and obtain the key of the task.
   * 
   * @param request - CreateUploadOSSFileJobRequest
   * @returns CreateUploadOSSFileJobResponse
   */
  async createUploadOSSFileJob(request: $_model.CreateUploadOSSFileJobRequest): Promise<$_model.CreateUploadOSSFileJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createUploadOSSFileJobWithOptions(request, runtime);
  }

  /**
   * Creates a workspace.
   * 
   * @remarks
   * ## [](#)Prerequisites
   * *   A virtual private cloud (VPC) is created.
   * *   Log on to the DMS console by using an Alibaba Cloud account or a RAM user that has high permissions, and grant DMS the permissions to access cloud resources (AliyunDMSProcessingDataRolePolicy).
   * 
   * @param request - CreateWorkspaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateWorkspaceResponse
   */
  async createWorkspaceWithOptions(request: $_model.CreateWorkspaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateWorkspaceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    if (!$dara.isNull(request.workspaceName)) {
      query["WorkspaceName"] = request.workspaceName;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateWorkspace",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateWorkspaceResponse>(await this.callApi(params, req, runtime), new $_model.CreateWorkspaceResponse({}));
  }

  /**
   * Creates a workspace.
   * 
   * @remarks
   * ## [](#)Prerequisites
   * *   A virtual private cloud (VPC) is created.
   * *   Log on to the DMS console by using an Alibaba Cloud account or a RAM user that has high permissions, and grant DMS the permissions to access cloud resources (AliyunDMSProcessingDataRolePolicy).
   * 
   * @param request - CreateWorkspaceRequest
   * @returns CreateWorkspaceResponse
   */
  async createWorkspace(request: $_model.CreateWorkspaceRequest): Promise<$_model.CreateWorkspaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createWorkspaceWithOptions(request, runtime);
  }

  /**
   * Detaches a policy from a user or role.
   * 
   * @param request - DeleteAbacAuthorizationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAbacAuthorizationResponse
   */
  async deleteAbacAuthorizationWithOptions(request: $_model.DeleteAbacAuthorizationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAbacAuthorizationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authorizationId)) {
      query["AuthorizationId"] = request.authorizationId;
    }

    if (!$dara.isNull(request.identityType)) {
      query["IdentityType"] = request.identityType;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAbacAuthorization",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAbacAuthorizationResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAbacAuthorizationResponse({}));
  }

  /**
   * Detaches a policy from a user or role.
   * 
   * @param request - DeleteAbacAuthorizationRequest
   * @returns DeleteAbacAuthorizationResponse
   */
  async deleteAbacAuthorization(request: $_model.DeleteAbacAuthorizationRequest): Promise<$_model.DeleteAbacAuthorizationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAbacAuthorizationWithOptions(request, runtime);
  }

  /**
   * Deletes a created permission policy.
   * 
   * @param request - DeleteAbacPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAbacPolicyResponse
   */
  async deleteAbacPolicyWithOptions(request: $_model.DeleteAbacPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAbacPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.abacPolicyId)) {
      query["AbacPolicyId"] = request.abacPolicyId;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAbacPolicy",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAbacPolicyResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAbacPolicyResponse({}));
  }

  /**
   * Deletes a created permission policy.
   * 
   * @param request - DeleteAbacPolicyRequest
   * @returns DeleteAbacPolicyResponse
   */
  async deleteAbacPolicy(request: $_model.DeleteAbacPolicyRequest): Promise<$_model.DeleteAbacPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAbacPolicyWithOptions(request, runtime);
  }

  /**
   * Deletes a permission template.
   * 
   * @param request - DeleteAuthorityTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAuthorityTemplateResponse
   */
  async deleteAuthorityTemplateWithOptions(request: $_model.DeleteAuthorityTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAuthorityTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAuthorityTemplate",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAuthorityTemplateResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAuthorityTemplateResponse({}));
  }

  /**
   * Deletes a permission template.
   * 
   * @param request - DeleteAuthorityTemplateRequest
   * @returns DeleteAuthorityTemplateResponse
   */
  async deleteAuthorityTemplate(request: $_model.DeleteAuthorityTemplateRequest): Promise<$_model.DeleteAuthorityTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAuthorityTemplateWithOptions(request, runtime);
  }

  /**
   * Deletes a database from a data lakehouse.
   * 
   * @param request - DeleteDataLakeDatabaseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDataLakeDatabaseResponse
   */
  async deleteDataLakeDatabaseWithOptions(request: $_model.DeleteDataLakeDatabaseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDataLakeDatabaseResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.catalogName)) {
      query["CatalogName"] = request.catalogName;
    }

    if (!$dara.isNull(request.dataRegion)) {
      query["DataRegion"] = request.dataRegion;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDataLakeDatabase",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDataLakeDatabaseResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDataLakeDatabaseResponse({}));
  }

  /**
   * Deletes a database from a data lakehouse.
   * 
   * @param request - DeleteDataLakeDatabaseRequest
   * @returns DeleteDataLakeDatabaseResponse
   */
  async deleteDataLakeDatabase(request: $_model.DeleteDataLakeDatabaseRequest): Promise<$_model.DeleteDataLakeDatabaseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDataLakeDatabaseWithOptions(request, runtime);
  }

  /**
   * Deletes a user-defined function in a data lakehouse.
   * 
   * @param request - DeleteDataLakeFunctionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDataLakeFunctionResponse
   */
  async deleteDataLakeFunctionWithOptions(request: $_model.DeleteDataLakeFunctionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDataLakeFunctionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.catalogName)) {
      query["CatalogName"] = request.catalogName;
    }

    if (!$dara.isNull(request.dataRegion)) {
      query["DataRegion"] = request.dataRegion;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.functionName)) {
      query["FunctionName"] = request.functionName;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDataLakeFunction",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDataLakeFunctionResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDataLakeFunctionResponse({}));
  }

  /**
   * Deletes a user-defined function in a data lakehouse.
   * 
   * @param request - DeleteDataLakeFunctionRequest
   * @returns DeleteDataLakeFunctionResponse
   */
  async deleteDataLakeFunction(request: $_model.DeleteDataLakeFunctionRequest): Promise<$_model.DeleteDataLakeFunctionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDataLakeFunctionWithOptions(request, runtime);
  }

  /**
   * Deletes a partition from a table in a data lakehouse.
   * 
   * @param tmpReq - DeleteDataLakePartitionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDataLakePartitionResponse
   */
  async deleteDataLakePartitionWithOptions(tmpReq: $_model.DeleteDataLakePartitionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDataLakePartitionResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteDataLakePartitionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.partitionValues)) {
      request.partitionValuesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.partitionValues, "PartitionValues", "simple");
    }

    let query = { };
    if (!$dara.isNull(request.catalogName)) {
      query["CatalogName"] = request.catalogName;
    }

    if (!$dara.isNull(request.dataRegion)) {
      query["DataRegion"] = request.dataRegion;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.ifExists)) {
      query["IfExists"] = request.ifExists;
    }

    if (!$dara.isNull(request.partitionValuesShrink)) {
      query["PartitionValues"] = request.partitionValuesShrink;
    }

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDataLakePartition",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDataLakePartitionResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDataLakePartitionResponse({}));
  }

  /**
   * Deletes a partition from a table in a data lakehouse.
   * 
   * @param request - DeleteDataLakePartitionRequest
   * @returns DeleteDataLakePartitionResponse
   */
  async deleteDataLakePartition(request: $_model.DeleteDataLakePartitionRequest): Promise<$_model.DeleteDataLakePartitionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDataLakePartitionWithOptions(request, runtime);
  }

  /**
   * Deletes a table from a data lakehouse.
   * 
   * @param request - DeleteDataLakeTableRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDataLakeTableResponse
   */
  async deleteDataLakeTableWithOptions(request: $_model.DeleteDataLakeTableRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDataLakeTableResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.catalogName)) {
      query["CatalogName"] = request.catalogName;
    }

    if (!$dara.isNull(request.dataRegion)) {
      query["DataRegion"] = request.dataRegion;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDataLakeTable",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDataLakeTableResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDataLakeTableResponse({}));
  }

  /**
   * Deletes a table from a data lakehouse.
   * 
   * @param request - DeleteDataLakeTableRequest
   * @returns DeleteDataLakeTableResponse
   */
  async deleteDataLakeTable(request: $_model.DeleteDataLakeTableRequest): Promise<$_model.DeleteDataLakeTableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDataLakeTableWithOptions(request, runtime);
  }

  /**
   * Removes a database instance from Data Management (DMS).
   * 
   * @remarks
   * Note: You can call this operation only to remove a database instance from the instance list of DMS. The instance is not deleted or shut down.
   * 
   * @param request - DeleteInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteInstanceResponse
   */
  async deleteInstanceWithOptions(request: $_model.DeleteInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.host)) {
      query["Host"] = request.host;
    }

    if (!$dara.isNull(request.port)) {
      query["Port"] = request.port;
    }

    if (!$dara.isNull(request.sid)) {
      query["Sid"] = request.sid;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteInstance",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteInstanceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteInstanceResponse({}));
  }

  /**
   * Removes a database instance from Data Management (DMS).
   * 
   * @remarks
   * Note: You can call this operation only to remove a database instance from the instance list of DMS. The instance is not deleted or shut down.
   * 
   * @param request - DeleteInstanceRequest
   * @returns DeleteInstanceResponse
   */
  async deleteInstance(request: $_model.DeleteInstanceRequest): Promise<$_model.DeleteInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteInstanceWithOptions(request, runtime);
  }

  /**
   * Deletes a workspace.
   * 
   * @param request - DeleteLakeHouseSpaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteLakeHouseSpaceResponse
   */
  async deleteLakeHouseSpaceWithOptions(request: $_model.DeleteLakeHouseSpaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteLakeHouseSpaceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.spaceId)) {
      query["SpaceId"] = request.spaceId;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteLakeHouseSpace",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteLakeHouseSpaceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteLakeHouseSpaceResponse({}));
  }

  /**
   * Deletes a workspace.
   * 
   * @param request - DeleteLakeHouseSpaceRequest
   * @returns DeleteLakeHouseSpaceResponse
   */
  async deleteLakeHouseSpace(request: $_model.DeleteLakeHouseSpaceRequest): Promise<$_model.DeleteLakeHouseSpaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteLakeHouseSpaceWithOptions(request, runtime);
  }

  /**
   * 删除数仓空间成员
   * 
   * @remarks
   * You must call this operation as a DMS administrator, a database administrator (DBA), or a workspace administrator.
   * You cannot call this operation to transfer the ownership of a task flow. To transfer the ownership of a task flow, call the [ChangLhDagOwner](https://help.aliyun.com/document_detail/424761.html) operation.
   * 
   * @param tmpReq - DeleteLhMembersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteLhMembersResponse
   */
  async deleteLhMembersWithOptions(tmpReq: $_model.DeleteLhMembersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteLhMembersResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteLhMembersShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.memberIds)) {
      request.memberIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.memberIds, "MemberIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.memberIdsShrink)) {
      query["MemberIds"] = request.memberIdsShrink;
    }

    if (!$dara.isNull(request.objectId)) {
      query["ObjectId"] = request.objectId;
    }

    if (!$dara.isNull(request.objectType)) {
      query["ObjectType"] = request.objectType;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteLhMembers",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteLhMembersResponse>(await this.callApi(params, req, runtime), new $_model.DeleteLhMembersResponse({}));
  }

  /**
   * 删除数仓空间成员
   * 
   * @remarks
   * You must call this operation as a DMS administrator, a database administrator (DBA), or a workspace administrator.
   * You cannot call this operation to transfer the ownership of a task flow. To transfer the ownership of a task flow, call the [ChangLhDagOwner](https://help.aliyun.com/document_detail/424761.html) operation.
   * 
   * @param request - DeleteLhMembersRequest
   * @returns DeleteLhMembersResponse
   */
  async deleteLhMembers(request: $_model.DeleteLhMembersRequest): Promise<$_model.DeleteLhMembersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteLhMembersWithOptions(request, runtime);
  }

  /**
   * Deletes a logical database in Database Management (DMS). This operation only deletes the specified logical database but does not delete physical databases.
   * 
   * @param request - DeleteLogicDatabaseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteLogicDatabaseResponse
   */
  async deleteLogicDatabaseWithOptions(request: $_model.DeleteLogicDatabaseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteLogicDatabaseResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.logicDbId)) {
      query["LogicDbId"] = request.logicDbId;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteLogicDatabase",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteLogicDatabaseResponse>(await this.callApi(params, req, runtime), new $_model.DeleteLogicDatabaseResponse({}));
  }

  /**
   * Deletes a logical database in Database Management (DMS). This operation only deletes the specified logical database but does not delete physical databases.
   * 
   * @param request - DeleteLogicDatabaseRequest
   * @returns DeleteLogicDatabaseResponse
   */
  async deleteLogicDatabase(request: $_model.DeleteLogicDatabaseRequest): Promise<$_model.DeleteLogicDatabaseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteLogicDatabaseWithOptions(request, runtime);
  }

  /**
   * Deletes the routing algorithm of a logical table.
   * 
   * @param request - DeleteLogicTableRouteConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteLogicTableRouteConfigResponse
   */
  async deleteLogicTableRouteConfigWithOptions(request: $_model.DeleteLogicTableRouteConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteLogicTableRouteConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.routeKey)) {
      query["RouteKey"] = request.routeKey;
    }

    if (!$dara.isNull(request.tableId)) {
      query["TableId"] = request.tableId;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteLogicTableRouteConfig",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteLogicTableRouteConfigResponse>(await this.callApi(params, req, runtime), new $_model.DeleteLogicTableRouteConfigResponse({}));
  }

  /**
   * Deletes the routing algorithm of a logical table.
   * 
   * @param request - DeleteLogicTableRouteConfigRequest
   * @returns DeleteLogicTableRouteConfigResponse
   */
  async deleteLogicTableRouteConfig(request: $_model.DeleteLogicTableRouteConfigRequest): Promise<$_model.DeleteLogicTableRouteConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteLogicTableRouteConfigWithOptions(request, runtime);
  }

  /**
   * Deletes an asset category.
   * 
   * @param request - DeleteMetaCategoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMetaCategoryResponse
   */
  async deleteMetaCategoryWithOptions(request: $_model.DeleteMetaCategoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMetaCategoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.categoryId)) {
      query["CategoryId"] = request.categoryId;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMetaCategory",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteMetaCategoryResponse>(await this.callApi(params, req, runtime), new $_model.DeleteMetaCategoryResponse({}));
  }

  /**
   * Deletes an asset category.
   * 
   * @param request - DeleteMetaCategoryRequest
   * @returns DeleteMetaCategoryResponse
   */
  async deleteMetaCategory(request: $_model.DeleteMetaCategoryRequest): Promise<$_model.DeleteMetaCategoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteMetaCategoryWithOptions(request, runtime);
  }

  /**
   * You can call this operation to disable the data security protection proxy of a DB instance.
   * 
   * @remarks
   * After you disable this feature, your DB instance loses the JDBC protocol. All authorization information is recycled.
   * 
   * @param request - DeleteProxyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteProxyResponse
   */
  async deleteProxyWithOptions(request: $_model.DeleteProxyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteProxyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.proxyId)) {
      query["ProxyId"] = request.proxyId;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteProxy",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteProxyResponse>(await this.callApi(params, req, runtime), new $_model.DeleteProxyResponse({}));
  }

  /**
   * You can call this operation to disable the data security protection proxy of a DB instance.
   * 
   * @remarks
   * After you disable this feature, your DB instance loses the JDBC protocol. All authorization information is recycled.
   * 
   * @param request - DeleteProxyRequest
   * @returns DeleteProxyResponse
   */
  async deleteProxy(request: $_model.DeleteProxyRequest): Promise<$_model.DeleteProxyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteProxyWithOptions(request, runtime);
  }

  /**
   * You can call this operation to DeleteProxyAccess reclaim the data security protection authorization of the target user.
   * 
   * @param request - DeleteProxyAccessRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteProxyAccessResponse
   */
  async deleteProxyAccessWithOptions(request: $_model.DeleteProxyAccessRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteProxyAccessResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.proxyAccessId)) {
      query["ProxyAccessId"] = request.proxyAccessId;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteProxyAccess",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteProxyAccessResponse>(await this.callApi(params, req, runtime), new $_model.DeleteProxyAccessResponse({}));
  }

  /**
   * You can call this operation to DeleteProxyAccess reclaim the data security protection authorization of the target user.
   * 
   * @param request - DeleteProxyAccessRequest
   * @returns DeleteProxyAccessResponse
   */
  async deleteProxyAccess(request: $_model.DeleteProxyAccessRequest): Promise<$_model.DeleteProxyAccessResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteProxyAccessWithOptions(request, runtime);
  }

  /**
   * Deletes a business scenario.
   * 
   * @remarks
   * When you call this operation, make sure that no task flow is specified in the business scenario.
   * 
   * @param request - DeleteScenarioRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteScenarioResponse
   */
  async deleteScenarioWithOptions(request: $_model.DeleteScenarioRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteScenarioResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.scenarioId)) {
      query["ScenarioId"] = request.scenarioId;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteScenario",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteScenarioResponse>(await this.callApi(params, req, runtime), new $_model.DeleteScenarioResponse({}));
  }

  /**
   * Deletes a business scenario.
   * 
   * @remarks
   * When you call this operation, make sure that no task flow is specified in the business scenario.
   * 
   * @param request - DeleteScenarioRequest
   * @returns DeleteScenarioResponse
   */
  async deleteScenario(request: $_model.DeleteScenarioRequest): Promise<$_model.DeleteScenarioResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteScenarioWithOptions(request, runtime);
  }

  /**
   * Deletes a security rule set.
   * 
   * @remarks
   * Before you call this API operation, make sure that the security rule set is not associated with an instance.
   * 
   * @param request - DeleteStandardGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteStandardGroupResponse
   */
  async deleteStandardGroupWithOptions(request: $_model.DeleteStandardGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteStandardGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteStandardGroup",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteStandardGroupResponse>(await this.callApi(params, req, runtime), new $_model.DeleteStandardGroupResponse({}));
  }

  /**
   * Deletes a security rule set.
   * 
   * @remarks
   * Before you call this API operation, make sure that the security rule set is not associated with an instance.
   * 
   * @param request - DeleteStandardGroupRequest
   * @returns DeleteStandardGroupResponse
   */
  async deleteStandardGroup(request: $_model.DeleteStandardGroupRequest): Promise<$_model.DeleteStandardGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteStandardGroupWithOptions(request, runtime);
  }

  /**
   * Deletes a task in a specified task flow.
   * 
   * @param request - DeleteTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTaskResponse
   */
  async deleteTaskWithOptions(request: $_model.DeleteTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.nodeId)) {
      query["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteTask",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteTaskResponse>(await this.callApi(params, req, runtime), new $_model.DeleteTaskResponse({}));
  }

  /**
   * Deletes a task in a specified task flow.
   * 
   * @param request - DeleteTaskRequest
   * @returns DeleteTaskResponse
   */
  async deleteTask(request: $_model.DeleteTaskRequest): Promise<$_model.DeleteTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteTaskWithOptions(request, runtime);
  }

  /**
   * Deletes a task flow.
   * 
   * @param request - DeleteTaskFlowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTaskFlowResponse
   */
  async deleteTaskFlowWithOptions(request: $_model.DeleteTaskFlowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteTaskFlowResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dagId)) {
      query["DagId"] = request.dagId;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteTaskFlow",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteTaskFlowResponse>(await this.callApi(params, req, runtime), new $_model.DeleteTaskFlowResponse({}));
  }

  /**
   * Deletes a task flow.
   * 
   * @param request - DeleteTaskFlowRequest
   * @returns DeleteTaskFlowResponse
   */
  async deleteTaskFlow(request: $_model.DeleteTaskFlowRequest): Promise<$_model.DeleteTaskFlowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteTaskFlowWithOptions(request, runtime);
  }

  /**
   * Deletes task flow edges based on multiple conditions.
   * 
   * @remarks
   * This operation is used for multi-condition query. You can call it to delete the edges of a specified task flow that meet all specified conditions.
   * 
   * @param request - DeleteTaskFlowEdgesByConditionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTaskFlowEdgesByConditionResponse
   */
  async deleteTaskFlowEdgesByConditionWithOptions(request: $_model.DeleteTaskFlowEdgesByConditionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteTaskFlowEdgesByConditionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dagId)) {
      query["DagId"] = request.dagId;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.nodeEnd)) {
      query["NodeEnd"] = request.nodeEnd;
    }

    if (!$dara.isNull(request.nodeFrom)) {
      query["NodeFrom"] = request.nodeFrom;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteTaskFlowEdgesByCondition",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteTaskFlowEdgesByConditionResponse>(await this.callApi(params, req, runtime), new $_model.DeleteTaskFlowEdgesByConditionResponse({}));
  }

  /**
   * Deletes task flow edges based on multiple conditions.
   * 
   * @remarks
   * This operation is used for multi-condition query. You can call it to delete the edges of a specified task flow that meet all specified conditions.
   * 
   * @param request - DeleteTaskFlowEdgesByConditionRequest
   * @returns DeleteTaskFlowEdgesByConditionResponse
   */
  async deleteTaskFlowEdgesByCondition(request: $_model.DeleteTaskFlowEdgesByConditionRequest): Promise<$_model.DeleteTaskFlowEdgesByConditionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteTaskFlowEdgesByConditionWithOptions(request, runtime);
  }

  /**
   * Deletes an Alibaba Cloud account that is no longer used.
   * 
   * @remarks
   * The effect of deleting a user by calling this operation is the same as that of deleting a user by choosing System Management > User Management in the DMS Enterprise console. The administrator of DMS Enterprise can call this operation to delete a user that is no longer used from DMS Enterprise. After the user is deleted, the data source permission, data owner configuration, and database administrator (DBA) configuration of the corresponding Alibaba Cloud account or Resource Access Management (RAM) user are revoked and become invalid.
   * >  This operation only removes the association of the Alibaba Cloud account or RAM user with DMS Enterprise of the enterprise, rather than actually deleting the Alibaba Cloud account or RAM user. After the user is deleted, the Alibaba Cloud account or RAM user cannot log on to DMS Enterprise, unless the user is added to DMS Enterprise again.
   * 
   * @param request - DeleteUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteUserResponse
   */
  async deleteUserWithOptions(request: $_model.DeleteUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.uid)) {
      query["Uid"] = request.uid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteUser",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteUserResponse>(await this.callApi(params, req, runtime), new $_model.DeleteUserResponse({}));
  }

  /**
   * Deletes an Alibaba Cloud account that is no longer used.
   * 
   * @remarks
   * The effect of deleting a user by calling this operation is the same as that of deleting a user by choosing System Management > User Management in the DMS Enterprise console. The administrator of DMS Enterprise can call this operation to delete a user that is no longer used from DMS Enterprise. After the user is deleted, the data source permission, data owner configuration, and database administrator (DBA) configuration of the corresponding Alibaba Cloud account or Resource Access Management (RAM) user are revoked and become invalid.
   * >  This operation only removes the association of the Alibaba Cloud account or RAM user with DMS Enterprise of the enterprise, rather than actually deleting the Alibaba Cloud account or RAM user. After the user is deleted, the Alibaba Cloud account or RAM user cannot log on to DMS Enterprise, unless the user is added to DMS Enterprise again.
   * 
   * @param request - DeleteUserRequest
   * @returns DeleteUserResponse
   */
  async deleteUser(request: $_model.DeleteUserRequest): Promise<$_model.DeleteUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteUserWithOptions(request, runtime);
  }

  /**
   * Deletes a workspace.
   * 
   * @param request - DeleteWorkspaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteWorkspaceResponse
   */
  async deleteWorkspaceWithOptions(request: $_model.DeleteWorkspaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteWorkspaceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteWorkspace",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteWorkspaceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteWorkspaceResponse({}));
  }

  /**
   * Deletes a workspace.
   * 
   * @param request - DeleteWorkspaceRequest
   * @returns DeleteWorkspaceResponse
   */
  async deleteWorkspace(request: $_model.DeleteWorkspaceRequest): Promise<$_model.DeleteWorkspaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteWorkspaceWithOptions(request, runtime);
  }

  /**
   * 用于创建DIFY实例及相关资源，支持自定义配置。
   * 
   * @remarks
   * ## 请求说明
   * - `workspaceOption` 参数指示是否新建工作空间，默认使用已有工作空间。
   * - 如果选择新建工作空间 (`CreateNewInstance`)，则必须提供 `workspaceName` 和 `workspaceDescription`。
   * - `vpcId`, `VSwitchID`, `zoneId`, `regionCode`, `ResourceQuota`, `Replicas`, `storageType`, `dbInstanceClass`, `dbEngineVersion`, `kvstoreEngineVersion` 是必填项。
   * - 当 `storageType` 为 `oss` 时，需要指定 `ossBucketResourceId` 和 `ossPath`。
   * - 如果需要新建数据库实例，则必须提供 `instanceAccount` 和 `instancePassword`。
   * - 预付费模式下，`PayPeriodType` 和 `PayPeriod` 必须填写。
   * - 可以通过设置 `dryRun` 为 `true` 来执行预检查而不实际创建实例。
   * 
   * @param request - DescribeDifyAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDifyAttributeResponse
   */
  async describeDifyAttributeWithOptions(request: $_model.DescribeDifyAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDifyAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appUuid)) {
      query["AppUuid"] = request.appUuid;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dataRegion)) {
      query["DataRegion"] = request.dataRegion;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDifyAttribute",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDifyAttributeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDifyAttributeResponse({}));
  }

  /**
   * 用于创建DIFY实例及相关资源，支持自定义配置。
   * 
   * @remarks
   * ## 请求说明
   * - `workspaceOption` 参数指示是否新建工作空间，默认使用已有工作空间。
   * - 如果选择新建工作空间 (`CreateNewInstance`)，则必须提供 `workspaceName` 和 `workspaceDescription`。
   * - `vpcId`, `VSwitchID`, `zoneId`, `regionCode`, `ResourceQuota`, `Replicas`, `storageType`, `dbInstanceClass`, `dbEngineVersion`, `kvstoreEngineVersion` 是必填项。
   * - 当 `storageType` 为 `oss` 时，需要指定 `ossBucketResourceId` 和 `ossPath`。
   * - 如果需要新建数据库实例，则必须提供 `instanceAccount` 和 `instancePassword`。
   * - 预付费模式下，`PayPeriodType` 和 `PayPeriod` 必须填写。
   * - 可以通过设置 `dryRun` 为 `true` 来执行预检查而不实际创建实例。
   * 
   * @param request - DescribeDifyAttributeRequest
   * @returns DescribeDifyAttributeResponse
   */
  async describeDifyAttribute(request: $_model.DescribeDifyAttributeRequest): Promise<$_model.DescribeDifyAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDifyAttributeWithOptions(request, runtime);
  }

  /**
   * 用于创建DIFY实例及相关资源，支持自定义配置。
   * 
   * @remarks
   * ## 请求说明
   * - `workspaceOption` 参数指示是否新建工作空间，默认使用已有工作空间。
   * - 如果选择新建工作空间 (`CreateNewInstance`)，则必须提供 `workspaceName` 和 `workspaceDescription`。
   * - `vpcId`, `VSwitchID`, `zoneId`, `regionCode`, `ResourceQuota`, `Replicas`, `storageType`, `dbInstanceClass`, `dbEngineVersion`, `kvstoreEngineVersion` 是必填项。
   * - 当 `storageType` 为 `oss` 时，需要指定 `ossBucketResourceId` 和 `ossPath`。
   * - 如果需要新建数据库实例，则必须提供 `instanceAccount` 和 `instancePassword`。
   * - 预付费模式下，`PayPeriodType` 和 `PayPeriod` 必须填写。
   * - 可以通过设置 `dryRun` 为 `true` 来执行预检查而不实际创建实例。
   * 
   * @param request - DescribeDifyDefaultVpcRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDifyDefaultVpcResponse
   */
  async describeDifyDefaultVpcWithOptions(request: $_model.DescribeDifyDefaultVpcRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDifyDefaultVpcResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dataRegion)) {
      query["DataRegion"] = request.dataRegion;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDifyDefaultVpc",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDifyDefaultVpcResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDifyDefaultVpcResponse({}));
  }

  /**
   * 用于创建DIFY实例及相关资源，支持自定义配置。
   * 
   * @remarks
   * ## 请求说明
   * - `workspaceOption` 参数指示是否新建工作空间，默认使用已有工作空间。
   * - 如果选择新建工作空间 (`CreateNewInstance`)，则必须提供 `workspaceName` 和 `workspaceDescription`。
   * - `vpcId`, `VSwitchID`, `zoneId`, `regionCode`, `ResourceQuota`, `Replicas`, `storageType`, `dbInstanceClass`, `dbEngineVersion`, `kvstoreEngineVersion` 是必填项。
   * - 当 `storageType` 为 `oss` 时，需要指定 `ossBucketResourceId` 和 `ossPath`。
   * - 如果需要新建数据库实例，则必须提供 `instanceAccount` 和 `instancePassword`。
   * - 预付费模式下，`PayPeriodType` 和 `PayPeriod` 必须填写。
   * - 可以通过设置 `dryRun` 为 `true` 来执行预检查而不实际创建实例。
   * 
   * @param request - DescribeDifyDefaultVpcRequest
   * @returns DescribeDifyDefaultVpcResponse
   */
  async describeDifyDefaultVpc(request: $_model.DescribeDifyDefaultVpcRequest): Promise<$_model.DescribeDifyDefaultVpcResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDifyDefaultVpcWithOptions(request, runtime);
  }

  /**
   * 用于获取Dify当前支持的版本信息
   * 
   * @remarks
   * ## 请求说明
   * - `workspaceOption` 参数指示是否新建工作空间，默认使用已有工作空间。
   * - 如果选择新建工作空间 (`CreateNewInstance`)，则必须提供 `workspaceName` 和 `workspaceDescription`。
   * - `vpcId`, `VSwitchID`, `zoneId`, `regionCode`, `ResourceQuota`, `Replicas`, `storageType`, `dbInstanceClass`, `dbEngineVersion`, `kvstoreEngineVersion` 是必填项。
   * - 当 `storageType` 为 `oss` 时，需要指定 `ossBucketResourceId` 和 `ossPath`。
   * - 如果需要新建数据库实例，则必须提供 `instanceAccount` 和 `instancePassword`。
   * - 预付费模式下，`PayPeriodType` 和 `PayPeriod` 必须填写。
   * - 可以通过设置 `dryRun` 为 `true` 来执行预检查而不实际创建实例。
   * 
   * @param request - DescribeDifyEditionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDifyEditionsResponse
   */
  async describeDifyEditionsWithOptions(request: $_model.DescribeDifyEditionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDifyEditionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dataRegion)) {
      query["DataRegion"] = request.dataRegion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDifyEditions",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDifyEditionsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDifyEditionsResponse({}));
  }

  /**
   * 用于获取Dify当前支持的版本信息
   * 
   * @remarks
   * ## 请求说明
   * - `workspaceOption` 参数指示是否新建工作空间，默认使用已有工作空间。
   * - 如果选择新建工作空间 (`CreateNewInstance`)，则必须提供 `workspaceName` 和 `workspaceDescription`。
   * - `vpcId`, `VSwitchID`, `zoneId`, `regionCode`, `ResourceQuota`, `Replicas`, `storageType`, `dbInstanceClass`, `dbEngineVersion`, `kvstoreEngineVersion` 是必填项。
   * - 当 `storageType` 为 `oss` 时，需要指定 `ossBucketResourceId` 和 `ossPath`。
   * - 如果需要新建数据库实例，则必须提供 `instanceAccount` 和 `instancePassword`。
   * - 预付费模式下，`PayPeriodType` 和 `PayPeriod` 必须填写。
   * - 可以通过设置 `dryRun` 为 `true` 来执行预检查而不实际创建实例。
   * 
   * @param request - DescribeDifyEditionsRequest
   * @returns DescribeDifyEditionsResponse
   */
  async describeDifyEditions(request: $_model.DescribeDifyEditionsRequest): Promise<$_model.DescribeDifyEditionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDifyEditionsWithOptions(request, runtime);
  }

  /**
   * 用于创建DIFY实例及相关资源，支持自定义配置。
   * 
   * @remarks
   * ## 请求说明
   * - `workspaceOption` 参数指示是否新建工作空间，默认使用已有工作空间。
   * - 如果选择新建工作空间 (`CreateNewInstance`)，则必须提供 `workspaceName` 和 `workspaceDescription`。
   * - `vpcId`, `VSwitchID`, `zoneId`, `regionCode`, `ResourceQuota`, `Replicas`, `storageType`, `dbInstanceClass`, `dbEngineVersion`, `kvstoreEngineVersion` 是必填项。
   * - 当 `storageType` 为 `oss` 时，需要指定 `ossBucketResourceId` 和 `ossPath`。
   * - 如果需要新建数据库实例，则必须提供 `instanceAccount` 和 `instancePassword`。
   * - 预付费模式下，`PayPeriodType` 和 `PayPeriod` 必须填写。
   * - 可以通过设置 `dryRun` 为 `true` 来执行预检查而不实际创建实例。
   * 
   * @param request - DescribeDifyRegionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDifyRegionsResponse
   */
  async describeDifyRegionsWithOptions(request: $_model.DescribeDifyRegionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDifyRegionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dataRegion)) {
      query["DataRegion"] = request.dataRegion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDifyRegions",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDifyRegionsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDifyRegionsResponse({}));
  }

  /**
   * 用于创建DIFY实例及相关资源，支持自定义配置。
   * 
   * @remarks
   * ## 请求说明
   * - `workspaceOption` 参数指示是否新建工作空间，默认使用已有工作空间。
   * - 如果选择新建工作空间 (`CreateNewInstance`)，则必须提供 `workspaceName` 和 `workspaceDescription`。
   * - `vpcId`, `VSwitchID`, `zoneId`, `regionCode`, `ResourceQuota`, `Replicas`, `storageType`, `dbInstanceClass`, `dbEngineVersion`, `kvstoreEngineVersion` 是必填项。
   * - 当 `storageType` 为 `oss` 时，需要指定 `ossBucketResourceId` 和 `ossPath`。
   * - 如果需要新建数据库实例，则必须提供 `instanceAccount` 和 `instancePassword`。
   * - 预付费模式下，`PayPeriodType` 和 `PayPeriod` 必须填写。
   * - 可以通过设置 `dryRun` 为 `true` 来执行预检查而不实际创建实例。
   * 
   * @param request - DescribeDifyRegionsRequest
   * @returns DescribeDifyRegionsResponse
   */
  async describeDifyRegions(request: $_model.DescribeDifyRegionsRequest): Promise<$_model.DescribeDifyRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDifyRegionsWithOptions(request, runtime);
  }

  /**
   * You can call this operation to disable a user that is temporarily not used in Data Management (DMS) Enterprise.
   * 
   * @remarks
   * The effect of disabling a user by calling this operation is the same as that of disabling a user by choosing System Management > User Management in the DMS Enterprise console. The administrator of DMS Enterprise can call this operation to disable a user that is temporarily not used in DMS Enterprise. After the user is disabled, the data source permission, data owner configuration, and database administrator (DBA) configuration of the corresponding Alibaba Cloud account or Resource Access Management (RAM) user are revoked and become invalid.
   * >  This operation only stops the Alibaba Cloud account or RAM user from logging on to DMS Enterprise of the enterprise, rather than actually disabling the Alibaba Cloud account or RAM user. After the user is disabled, the Alibaba Cloud account or RAM user cannot log on to DMS Enterprise, unless the user is enabled again. The disabled user, however, still exists in DMS Enterprise.
   * 
   * @param request - DisableUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableUserResponse
   */
  async disableUserWithOptions(request: $_model.DisableUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.uid)) {
      query["Uid"] = request.uid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableUser",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableUserResponse>(await this.callApi(params, req, runtime), new $_model.DisableUserResponse({}));
  }

  /**
   * You can call this operation to disable a user that is temporarily not used in Data Management (DMS) Enterprise.
   * 
   * @remarks
   * The effect of disabling a user by calling this operation is the same as that of disabling a user by choosing System Management > User Management in the DMS Enterprise console. The administrator of DMS Enterprise can call this operation to disable a user that is temporarily not used in DMS Enterprise. After the user is disabled, the data source permission, data owner configuration, and database administrator (DBA) configuration of the corresponding Alibaba Cloud account or Resource Access Management (RAM) user are revoked and become invalid.
   * >  This operation only stops the Alibaba Cloud account or RAM user from logging on to DMS Enterprise of the enterprise, rather than actually disabling the Alibaba Cloud account or RAM user. After the user is disabled, the Alibaba Cloud account or RAM user cannot log on to DMS Enterprise, unless the user is enabled again. The disabled user, however, still exists in DMS Enterprise.
   * 
   * @param request - DisableUserRequest
   * @returns DisableUserResponse
   */
  async disableUser(request: $_model.DisableUserRequest): Promise<$_model.DisableUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableUserWithOptions(request, runtime);
  }

  /**
   * Downloads the parsing result of a data tracking task.
   * 
   * @param tmpReq - DownloadDataTrackResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DownloadDataTrackResultResponse
   */
  async downloadDataTrackResultWithOptions(tmpReq: $_model.DownloadDataTrackResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DownloadDataTrackResultResponse> {
    tmpReq.validate();
    let request = new $_model.DownloadDataTrackResultShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.columnFilter)) {
      request.columnFilterShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.columnFilter, "ColumnFilter", "json");
    }

    if (!$dara.isNull(tmpReq.eventIdList)) {
      request.eventIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.eventIdList, "EventIdList", "json");
    }

    if (!$dara.isNull(tmpReq.filterTableList)) {
      request.filterTableListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.filterTableList, "FilterTableList", "json");
    }

    if (!$dara.isNull(tmpReq.filterTypeList)) {
      request.filterTypeListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.filterTypeList, "FilterTypeList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.columnFilterShrink)) {
      query["ColumnFilter"] = request.columnFilterShrink;
    }

    if (!$dara.isNull(request.eventIdListShrink)) {
      query["EventIdList"] = request.eventIdListShrink;
    }

    if (!$dara.isNull(request.filterEndTime)) {
      query["FilterEndTime"] = request.filterEndTime;
    }

    if (!$dara.isNull(request.filterStartTime)) {
      query["FilterStartTime"] = request.filterStartTime;
    }

    if (!$dara.isNull(request.filterTableListShrink)) {
      query["FilterTableList"] = request.filterTableListShrink;
    }

    if (!$dara.isNull(request.filterTypeListShrink)) {
      query["FilterTypeList"] = request.filterTypeListShrink;
    }

    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!$dara.isNull(request.rollbackSQLType)) {
      query["RollbackSQLType"] = request.rollbackSQLType;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DownloadDataTrackResult",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DownloadDataTrackResultResponse>(await this.callApi(params, req, runtime), new $_model.DownloadDataTrackResultResponse({}));
  }

  /**
   * Downloads the parsing result of a data tracking task.
   * 
   * @param request - DownloadDataTrackResultRequest
   * @returns DownloadDataTrackResultResponse
   */
  async downloadDataTrackResult(request: $_model.DownloadDataTrackResultRequest): Promise<$_model.DownloadDataTrackResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.downloadDataTrackResultWithOptions(request, runtime);
  }

  /**
   * Modifies the information about a logical database.
   * 
   * @param tmpReq - EditLogicDatabaseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EditLogicDatabaseResponse
   */
  async editLogicDatabaseWithOptions(tmpReq: $_model.EditLogicDatabaseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EditLogicDatabaseResponse> {
    tmpReq.validate();
    let request = new $_model.EditLogicDatabaseShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.databaseIds)) {
      request.databaseIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.databaseIds, "DatabaseIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.alias)) {
      query["Alias"] = request.alias;
    }

    if (!$dara.isNull(request.databaseIdsShrink)) {
      query["DatabaseIds"] = request.databaseIdsShrink;
    }

    if (!$dara.isNull(request.logicDbId)) {
      query["LogicDbId"] = request.logicDbId;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EditLogicDatabase",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EditLogicDatabaseResponse>(await this.callApi(params, req, runtime), new $_model.EditLogicDatabaseResponse({}));
  }

  /**
   * Modifies the information about a logical database.
   * 
   * @param request - EditLogicDatabaseRequest
   * @returns EditLogicDatabaseResponse
   */
  async editLogicDatabase(request: $_model.EditLogicDatabaseRequest): Promise<$_model.EditLogicDatabaseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.editLogicDatabaseWithOptions(request, runtime);
  }

  /**
   * Edits the metadata business knowledge for specified GUIDs.
   * 
   * @remarks
   * Edits the business knowledge of the metadata represented by the specified GUID.
   * 
   * @param request - EditMetaKnowledgeAssetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EditMetaKnowledgeAssetResponse
   */
  async editMetaKnowledgeAssetWithOptions(request: $_model.EditMetaKnowledgeAssetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EditMetaKnowledgeAssetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.assetDescription)) {
      query["AssetDescription"] = request.assetDescription;
    }

    if (!$dara.isNull(request.columnName)) {
      query["ColumnName"] = request.columnName;
    }

    if (!$dara.isNull(request.dbId)) {
      query["DbId"] = request.dbId;
    }

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    if (!$dara.isNull(request.tableSchemaName)) {
      query["TableSchemaName"] = request.tableSchemaName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EditMetaKnowledgeAsset",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EditMetaKnowledgeAssetResponse>(await this.callApi(params, req, runtime), new $_model.EditMetaKnowledgeAssetResponse({}));
  }

  /**
   * Edits the metadata business knowledge for specified GUIDs.
   * 
   * @remarks
   * Edits the business knowledge of the metadata represented by the specified GUID.
   * 
   * @param request - EditMetaKnowledgeAssetRequest
   * @returns EditMetaKnowledgeAssetResponse
   */
  async editMetaKnowledgeAsset(request: $_model.EditMetaKnowledgeAssetRequest): Promise<$_model.EditMetaKnowledgeAssetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.editMetaKnowledgeAssetWithOptions(request, runtime);
  }

  /**
   * You can call this operation to enable a user that has been disabled in Data Management (DMS) Enterprise.
   * 
   * @remarks
   * The effect of enabling a user by calling this operation is the same as that of enabling a user by choosing System Management > User Management in the DMS Enterprise console. The administrator of DMS Enterprise can call this operation to enable a user that has been disabled in DMS Enterprise. After the user is enabled, the corresponding Alibaba Cloud account or Resource Access Management (RAM) user can continue to log on to DMS Enterprise and perform relevant operations.
   * >  This operation only enables the Alibaba Cloud account or RAM user to log on to DMS Enterprise of the enterprise and perform relevant operations, rather than granting other permissions to the Alibaba Cloud account or RAM user.
   * 
   * @param request - EnableUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableUserResponse
   */
  async enableUserWithOptions(request: $_model.EnableUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.uid)) {
      query["Uid"] = request.uid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableUser",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableUserResponse>(await this.callApi(params, req, runtime), new $_model.EnableUserResponse({}));
  }

  /**
   * You can call this operation to enable a user that has been disabled in Data Management (DMS) Enterprise.
   * 
   * @remarks
   * The effect of enabling a user by calling this operation is the same as that of enabling a user by choosing System Management > User Management in the DMS Enterprise console. The administrator of DMS Enterprise can call this operation to enable a user that has been disabled in DMS Enterprise. After the user is enabled, the corresponding Alibaba Cloud account or Resource Access Management (RAM) user can continue to log on to DMS Enterprise and perform relevant operations.
   * >  This operation only enables the Alibaba Cloud account or RAM user to log on to DMS Enterprise of the enterprise and perform relevant operations, rather than granting other permissions to the Alibaba Cloud account or RAM user.
   * 
   * @param request - EnableUserRequest
   * @returns EnableUserResponse
   */
  async enableUser(request: $_model.EnableUserRequest): Promise<$_model.EnableUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableUserWithOptions(request, runtime);
  }

  /**
   * Submits a ticket for data change.
   * 
   * @param tmpReq - ExecuteDataCorrectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecuteDataCorrectResponse
   */
  async executeDataCorrectWithOptions(tmpReq: $_model.ExecuteDataCorrectRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ExecuteDataCorrectResponse> {
    tmpReq.validate();
    let request = new $_model.ExecuteDataCorrectShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.actionDetail)) {
      request.actionDetailShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.actionDetail, "ActionDetail", "json");
    }

    let query = { };
    if (!$dara.isNull(request.actionDetailShrink)) {
      query["ActionDetail"] = request.actionDetailShrink;
    }

    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!$dara.isNull(request.realLoginUserUid)) {
      query["RealLoginUserUid"] = request.realLoginUserUid;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExecuteDataCorrect",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExecuteDataCorrectResponse>(await this.callApi(params, req, runtime), new $_model.ExecuteDataCorrectResponse({}));
  }

  /**
   * Submits a ticket for data change.
   * 
   * @param request - ExecuteDataCorrectRequest
   * @returns ExecuteDataCorrectResponse
   */
  async executeDataCorrect(request: $_model.ExecuteDataCorrectRequest): Promise<$_model.ExecuteDataCorrectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.executeDataCorrectWithOptions(request, runtime);
  }

  /**
   * Executes a data export ticket.
   * 
   * @param tmpReq - ExecuteDataExportRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecuteDataExportResponse
   */
  async executeDataExportWithOptions(tmpReq: $_model.ExecuteDataExportRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ExecuteDataExportResponse> {
    tmpReq.validate();
    let request = new $_model.ExecuteDataExportShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.actionDetail)) {
      request.actionDetailShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.actionDetail, "ActionDetail", "json");
    }

    let query = { };
    if (!$dara.isNull(request.actionDetailShrink)) {
      query["ActionDetail"] = request.actionDetailShrink;
    }

    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!$dara.isNull(request.realLoginUserUid)) {
      query["RealLoginUserUid"] = request.realLoginUserUid;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExecuteDataExport",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExecuteDataExportResponse>(await this.callApi(params, req, runtime), new $_model.ExecuteDataExportResponse({}));
  }

  /**
   * Executes a data export ticket.
   * 
   * @param request - ExecuteDataExportRequest
   * @returns ExecuteDataExportResponse
   */
  async executeDataExport(request: $_model.ExecuteDataExportRequest): Promise<$_model.ExecuteDataExportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.executeDataExportWithOptions(request, runtime);
  }

  /**
   * Executes SQL statements.
   * 
   * @remarks
   * You can call this operation only for instances that are managed in Security Collaboration mode.
   * 
   * @param request - ExecuteScriptRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecuteScriptResponse
   */
  async executeScriptWithOptions(request: $_model.ExecuteScriptRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ExecuteScriptResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbId)) {
      query["DbId"] = request.dbId;
    }

    if (!$dara.isNull(request.logic)) {
      query["Logic"] = request.logic;
    }

    if (!$dara.isNull(request.realLoginUserUid)) {
      query["RealLoginUserUid"] = request.realLoginUserUid;
    }

    if (!$dara.isNull(request.script)) {
      query["Script"] = request.script;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExecuteScript",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExecuteScriptResponse>(await this.callApi(params, req, runtime), new $_model.ExecuteScriptResponse({}));
  }

  /**
   * Executes SQL statements.
   * 
   * @remarks
   * You can call this operation only for instances that are managed in Security Collaboration mode.
   * 
   * @param request - ExecuteScriptRequest
   * @returns ExecuteScriptResponse
   */
  async executeScript(request: $_model.ExecuteScriptRequest): Promise<$_model.ExecuteScriptResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.executeScriptWithOptions(request, runtime);
  }

  /**
   * Executes a schema synchronization task.
   * 
   * @remarks
   * If the security rules of an instance indicate that a ticket must be approved before you perform schema synchronization, you can call the [SubmitStructSyncOrderApproval](https://help.aliyun.com/document_detail/206166.html) operation to submit the ticket for approval.
   * >  You can call the [GetStructSyncJobDetail](https://help.aliyun.com/document_detail/206160.html) operation to query whether you need to submit a ticket for approval.
   * 
   * @param request - ExecuteStructSyncRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecuteStructSyncResponse
   */
  async executeStructSyncWithOptions(request: $_model.ExecuteStructSyncRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ExecuteStructSyncResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExecuteStructSync",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExecuteStructSyncResponse>(await this.callApi(params, req, runtime), new $_model.ExecuteStructSyncResponse({}));
  }

  /**
   * Executes a schema synchronization task.
   * 
   * @remarks
   * If the security rules of an instance indicate that a ticket must be approved before you perform schema synchronization, you can call the [SubmitStructSyncOrderApproval](https://help.aliyun.com/document_detail/206166.html) operation to submit the ticket for approval.
   * >  You can call the [GetStructSyncJobDetail](https://help.aliyun.com/document_detail/206160.html) operation to query whether you need to submit a ticket for approval.
   * 
   * @param request - ExecuteStructSyncRequest
   * @returns ExecuteStructSyncResponse
   */
  async executeStructSync(request: $_model.ExecuteStructSyncRequest): Promise<$_model.ExecuteStructSyncResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.executeStructSyncWithOptions(request, runtime);
  }

  /**
   * Uses the specified SQL statement, error message, and database ID to analyze and fix the SQL error.
   * 
   * @remarks
   * You can call this operation to analyze and fix SQL errors based on the specified SQL statement, error message, and database ID.
   * 
   * @param request - FixSqlByMetaAgentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FixSqlByMetaAgentResponse
   */
  async fixSqlByMetaAgentWithOptions(request: $_model.FixSqlByMetaAgentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.FixSqlByMetaAgentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbId)) {
      query["DbId"] = request.dbId;
    }

    if (!$dara.isNull(request.error)) {
      query["Error"] = request.error;
    }

    if (!$dara.isNull(request.model)) {
      query["Model"] = request.model;
    }

    if (!$dara.isNull(request.query)) {
      query["Query"] = request.query;
    }

    if (!$dara.isNull(request.sql)) {
      query["Sql"] = request.sql;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "FixSqlByMetaAgent",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.FixSqlByMetaAgentResponse>(await this.callApi(params, req, runtime), new $_model.FixSqlByMetaAgentResponse({}));
  }

  /**
   * Uses the specified SQL statement, error message, and database ID to analyze and fix the SQL error.
   * 
   * @remarks
   * You can call this operation to analyze and fix SQL errors based on the specified SQL statement, error message, and database ID.
   * 
   * @param request - FixSqlByMetaAgentRequest
   * @returns FixSqlByMetaAgentResponse
   */
  async fixSqlByMetaAgent(request: $_model.FixSqlByMetaAgentRequest): Promise<$_model.FixSqlByMetaAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.fixSqlByMetaAgentWithOptions(request, runtime);
  }

  /**
   * 数据库知识库补数据接口
   * 
   * @param request - GenMetaKnowledgeAssetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenMetaKnowledgeAssetResponse
   */
  async genMetaKnowledgeAssetWithOptions(request: $_model.GenMetaKnowledgeAssetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GenMetaKnowledgeAssetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbId)) {
      query["DbId"] = request.dbId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GenMetaKnowledgeAsset",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GenMetaKnowledgeAssetResponse>(await this.callApi(params, req, runtime), new $_model.GenMetaKnowledgeAssetResponse({}));
  }

  /**
   * 数据库知识库补数据接口
   * 
   * @param request - GenMetaKnowledgeAssetRequest
   * @returns GenMetaKnowledgeAssetResponse
   */
  async genMetaKnowledgeAsset(request: $_model.GenMetaKnowledgeAssetRequest): Promise<$_model.GenMetaKnowledgeAssetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.genMetaKnowledgeAssetWithOptions(request, runtime);
  }

  /**
   * 根据用户提供的自然语言描述和数据库信息生成对应的SQL语句。
   * 
   * @remarks
   * ## 请求说明
   * - 该API用于将用户的自然语言问题转换为可执行的SQL查询语句。
   * - 用户需要提供数据库ID (`dbId`) 和实例ID (`instanceId`)，以及想要查询的问题描述 (`question`)。
   * - 可选参数包括业务知识 (`knowledge`)、数据库方言 (`dialect`)、历史消息 (`history`)、算法级别 (`level`) 和指定模型名称 (`model`)。
   * - `dialect` 默认值为 "SQL"，表示生成标准SQL语句；`level` 默认值为 "base"，代表基础级别的处理。
   * - 如果请求中包含多个表且这些表不属于同一个数据库，则返回的 `dbId` 将为0，表明这是一个跨库查询。
   * - 返回结果中除了生成的SQL语句外，还包括了求解时用到的表、引用的知识点、展示用的SQL等信息，方便进一步理解和使用。
   * 
   * @param request - GenerateSqlFromNLRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateSqlFromNLResponse
   */
  async generateSqlFromNLWithOptions(request: $_model.GenerateSqlFromNLRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GenerateSqlFromNLResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbId)) {
      query["DbId"] = request.dbId;
    }

    if (!$dara.isNull(request.dialect)) {
      query["Dialect"] = request.dialect;
    }

    if (!$dara.isNull(request.knowledge)) {
      query["Knowledge"] = request.knowledge;
    }

    if (!$dara.isNull(request.level)) {
      query["Level"] = request.level;
    }

    if (!$dara.isNull(request.model)) {
      query["Model"] = request.model;
    }

    if (!$dara.isNull(request.question)) {
      query["Question"] = request.question;
    }

    if (!$dara.isNull(request.realLoginUserUid)) {
      query["RealLoginUserUid"] = request.realLoginUserUid;
    }

    if (!$dara.isNull(request.tableNames)) {
      query["TableNames"] = request.tableNames;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GenerateSqlFromNL",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GenerateSqlFromNLResponse>(await this.callApi(params, req, runtime), new $_model.GenerateSqlFromNLResponse({}));
  }

  /**
   * 根据用户提供的自然语言描述和数据库信息生成对应的SQL语句。
   * 
   * @remarks
   * ## 请求说明
   * - 该API用于将用户的自然语言问题转换为可执行的SQL查询语句。
   * - 用户需要提供数据库ID (`dbId`) 和实例ID (`instanceId`)，以及想要查询的问题描述 (`question`)。
   * - 可选参数包括业务知识 (`knowledge`)、数据库方言 (`dialect`)、历史消息 (`history`)、算法级别 (`level`) 和指定模型名称 (`model`)。
   * - `dialect` 默认值为 "SQL"，表示生成标准SQL语句；`level` 默认值为 "base"，代表基础级别的处理。
   * - 如果请求中包含多个表且这些表不属于同一个数据库，则返回的 `dbId` 将为0，表明这是一个跨库查询。
   * - 返回结果中除了生成的SQL语句外，还包括了求解时用到的表、引用的知识点、展示用的SQL等信息，方便进一步理解和使用。
   * 
   * @param request - GenerateSqlFromNLRequest
   * @returns GenerateSqlFromNLResponse
   */
  async generateSqlFromNL(request: $_model.GenerateSqlFromNLRequest): Promise<$_model.GenerateSqlFromNLResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.generateSqlFromNLWithOptions(request, runtime);
  }

  /**
   * Queries the details of a policy, including the name, content, and the user who created the policy.
   * 
   * @param request - GetAbacPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAbacPolicyResponse
   */
  async getAbacPolicyWithOptions(request: $_model.GetAbacPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAbacPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.abacPolicyId)) {
      query["AbacPolicyId"] = request.abacPolicyId;
    }

    if (!$dara.isNull(request.abacPolicyName)) {
      query["AbacPolicyName"] = request.abacPolicyName;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAbacPolicy",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAbacPolicyResponse>(await this.callApi(params, req, runtime), new $_model.GetAbacPolicyResponse({}));
  }

  /**
   * Queries the details of a policy, including the name, content, and the user who created the policy.
   * 
   * @param request - GetAbacPolicyRequest
   * @returns GetAbacPolicyResponse
   */
  async getAbacPolicy(request: $_model.GetAbacPolicyRequest): Promise<$_model.GetAbacPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAbacPolicyWithOptions(request, runtime);
  }

  /**
   * Queries the approval details of a ticket.
   * 
   * @param request - GetApprovalDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetApprovalDetailResponse
   */
  async getApprovalDetailWithOptions(request: $_model.GetApprovalDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetApprovalDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.workflowInstanceId)) {
      query["WorkflowInstanceId"] = request.workflowInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetApprovalDetail",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetApprovalDetailResponse>(await this.callApi(params, req, runtime), new $_model.GetApprovalDetailResponse({}));
  }

  /**
   * Queries the approval details of a ticket.
   * 
   * @param request - GetApprovalDetailRequest
   * @returns GetApprovalDetailResponse
   */
  async getApprovalDetail(request: $_model.GetApprovalDetailRequest): Promise<$_model.GetApprovalDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getApprovalDetailWithOptions(request, runtime);
  }

  /**
   * Queries the information about a permission template.
   * 
   * @remarks
   * You must be a Data Management (DMS) administrator or a database administrator (DBA). For more information about how to view system roles, see [View system roles](https://help.aliyun.com/document_detail/324212.html).
   * 
   * @param request - GetAuthorityTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAuthorityTemplateResponse
   */
  async getAuthorityTemplateWithOptions(request: $_model.GetAuthorityTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAuthorityTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAuthorityTemplate",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAuthorityTemplateResponse>(await this.callApi(params, req, runtime), new $_model.GetAuthorityTemplateResponse({}));
  }

  /**
   * Queries the information about a permission template.
   * 
   * @remarks
   * You must be a Data Management (DMS) administrator or a database administrator (DBA). For more information about how to view system roles, see [View system roles](https://help.aliyun.com/document_detail/324212.html).
   * 
   * @param request - GetAuthorityTemplateRequest
   * @returns GetAuthorityTemplateResponse
   */
  async getAuthorityTemplate(request: $_model.GetAuthorityTemplateRequest): Promise<$_model.GetAuthorityTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAuthorityTemplateWithOptions(request, runtime);
  }

  /**
   * Queries the resources in a permission template.
   * 
   * @remarks
   * You are a database administrator (DBA) or a Data Management (DMS) administrator. For more information about how to view system roles, see [View system roles](https://help.aliyun.com/document_detail/324212.html).
   * 
   * @param request - GetAuthorityTemplateItemRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAuthorityTemplateItemResponse
   */
  async getAuthorityTemplateItemWithOptions(request: $_model.GetAuthorityTemplateItemRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAuthorityTemplateItemResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAuthorityTemplateItem",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAuthorityTemplateItemResponse>(await this.callApi(params, req, runtime), new $_model.GetAuthorityTemplateItemResponse({}));
  }

  /**
   * Queries the resources in a permission template.
   * 
   * @remarks
   * You are a database administrator (DBA) or a Data Management (DMS) administrator. For more information about how to view system roles, see [View system roles](https://help.aliyun.com/document_detail/324212.html).
   * 
   * @param request - GetAuthorityTemplateItemRequest
   * @returns GetAuthorityTemplateItemResponse
   */
  async getAuthorityTemplateItem(request: $_model.GetAuthorityTemplateItemRequest): Promise<$_model.GetAuthorityTemplateItemResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAuthorityTemplateItemWithOptions(request, runtime);
  }

  /**
   * Queries the information about the classification and grading template associated with an instance.
   * 
   * @param request - GetClassificationTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetClassificationTemplateResponse
   */
  async getClassificationTemplateWithOptions(request: $_model.GetClassificationTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetClassificationTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetClassificationTemplate",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetClassificationTemplateResponse>(await this.callApi(params, req, runtime), new $_model.GetClassificationTemplateResponse({}));
  }

  /**
   * Queries the information about the classification and grading template associated with an instance.
   * 
   * @param request - GetClassificationTemplateRequest
   * @returns GetClassificationTemplateResponse
   */
  async getClassificationTemplate(request: $_model.GetClassificationTemplateRequest): Promise<$_model.GetClassificationTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getClassificationTemplateWithOptions(request, runtime);
  }

  /**
   * Queries the log that records the scheduling details of an SQL task.
   * 
   * @param request - GetDBTaskSQLJobLogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDBTaskSQLJobLogResponse
   */
  async getDBTaskSQLJobLogWithOptions(request: $_model.GetDBTaskSQLJobLogRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDBTaskSQLJobLogResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDBTaskSQLJobLog",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDBTaskSQLJobLogResponse>(await this.callApi(params, req, runtime), new $_model.GetDBTaskSQLJobLogResponse({}));
  }

  /**
   * Queries the log that records the scheduling details of an SQL task.
   * 
   * @param request - GetDBTaskSQLJobLogRequest
   * @returns GetDBTaskSQLJobLogResponse
   */
  async getDBTaskSQLJobLog(request: $_model.GetDBTaskSQLJobLogRequest): Promise<$_model.GetDBTaskSQLJobLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDBTaskSQLJobLogWithOptions(request, runtime);
  }

  /**
   * Queries the topologies of a logical database and its physical database shards.
   * 
   * @param request - GetDBTopologyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDBTopologyResponse
   */
  async getDBTopologyWithOptions(request: $_model.GetDBTopologyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDBTopologyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.logicDbId)) {
      query["LogicDbId"] = request.logicDbId;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDBTopology",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDBTopologyResponse>(await this.callApi(params, req, runtime), new $_model.GetDBTopologyResponse({}));
  }

  /**
   * Queries the topologies of a logical database and its physical database shards.
   * 
   * @param request - GetDBTopologyRequest
   * @returns GetDBTopologyResponse
   */
  async getDBTopology(request: $_model.GetDBTopologyRequest): Promise<$_model.GetDBTopologyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDBTopologyWithOptions(request, runtime);
  }

  /**
   * Queries the statistics on the number of data archiving tickets, including the number of tickets of successful data archiving, failed data archiving,and in-progress data archiving, and the total number of data archiving tickets.
   * 
   * @param request - GetDataArchiveCountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDataArchiveCountResponse
   */
  async getDataArchiveCountWithOptions(request: $_model.GetDataArchiveCountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDataArchiveCountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.orderResultType)) {
      query["OrderResultType"] = request.orderResultType;
    }

    if (!$dara.isNull(request.pluginType)) {
      query["PluginType"] = request.pluginType;
    }

    if (!$dara.isNull(request.searchDateType)) {
      query["SearchDateType"] = request.searchDateType;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDataArchiveCount",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDataArchiveCountResponse>(await this.callApi(params, req, runtime), new $_model.GetDataArchiveCountResponse({}));
  }

  /**
   * Queries the statistics on the number of data archiving tickets, including the number of tickets of successful data archiving, failed data archiving,and in-progress data archiving, and the total number of data archiving tickets.
   * 
   * @param request - GetDataArchiveCountRequest
   * @returns GetDataArchiveCountResponse
   */
  async getDataArchiveCount(request: $_model.GetDataArchiveCountRequest): Promise<$_model.GetDataArchiveCountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDataArchiveCountWithOptions(request, runtime);
  }

  /**
   * Queries the details of a data archiving ticket, including the time when the ticket was created, the scheduling information of the data archiving task, the logs of the data archiving task, and the database to which data is archived.
   * 
   * @param request - GetDataArchiveOrderDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDataArchiveOrderDetailResponse
   */
  async getDataArchiveOrderDetailWithOptions(request: $_model.GetDataArchiveOrderDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDataArchiveOrderDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDataArchiveOrderDetail",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDataArchiveOrderDetailResponse>(await this.callApi(params, req, runtime), new $_model.GetDataArchiveOrderDetailResponse({}));
  }

  /**
   * Queries the details of a data archiving ticket, including the time when the ticket was created, the scheduling information of the data archiving task, the logs of the data archiving task, and the database to which data is archived.
   * 
   * @param request - GetDataArchiveOrderDetailRequest
   * @returns GetDataArchiveOrderDetailResponse
   */
  async getDataArchiveOrderDetail(request: $_model.GetDataArchiveOrderDetailRequest): Promise<$_model.GetDataArchiveOrderDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDataArchiveOrderDetailWithOptions(request, runtime);
  }

  /**
   * Queries the download URL of the backup file for a data change ticket in Data Management (DMS).
   * 
   * @param tmpReq - GetDataCorrectBackupFilesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDataCorrectBackupFilesResponse
   */
  async getDataCorrectBackupFilesWithOptions(tmpReq: $_model.GetDataCorrectBackupFilesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDataCorrectBackupFilesResponse> {
    tmpReq.validate();
    let request = new $_model.GetDataCorrectBackupFilesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.actionDetail)) {
      request.actionDetailShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.actionDetail, "ActionDetail", "json");
    }

    let query = { };
    if (!$dara.isNull(request.actionDetailShrink)) {
      query["ActionDetail"] = request.actionDetailShrink;
    }

    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDataCorrectBackupFiles",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDataCorrectBackupFilesResponse>(await this.callApi(params, req, runtime), new $_model.GetDataCorrectBackupFilesResponse({}));
  }

  /**
   * Queries the download URL of the backup file for a data change ticket in Data Management (DMS).
   * 
   * @param request - GetDataCorrectBackupFilesRequest
   * @returns GetDataCorrectBackupFilesResponse
   */
  async getDataCorrectBackupFiles(request: $_model.GetDataCorrectBackupFilesRequest): Promise<$_model.GetDataCorrectBackupFilesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDataCorrectBackupFilesWithOptions(request, runtime);
  }

  /**
   * Queries the information about a data change ticket in Data Management (DMS).
   * 
   * @param request - GetDataCorrectOrderDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDataCorrectOrderDetailResponse
   */
  async getDataCorrectOrderDetailWithOptions(request: $_model.GetDataCorrectOrderDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDataCorrectOrderDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDataCorrectOrderDetail",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDataCorrectOrderDetailResponse>(await this.callApi(params, req, runtime), new $_model.GetDataCorrectOrderDetailResponse({}));
  }

  /**
   * Queries the information about a data change ticket in Data Management (DMS).
   * 
   * @param request - GetDataCorrectOrderDetailRequest
   * @returns GetDataCorrectOrderDetailResponse
   */
  async getDataCorrectOrderDetail(request: $_model.GetDataCorrectOrderDetailRequest): Promise<$_model.GetDataCorrectOrderDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDataCorrectOrderDetailWithOptions(request, runtime);
  }

  /**
   * Queries the download URL of the rollback attachment submitted along with a data change ticket.
   * 
   * @param request - GetDataCorrectRollbackFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDataCorrectRollbackFileResponse
   */
  async getDataCorrectRollbackFileWithOptions(request: $_model.GetDataCorrectRollbackFileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDataCorrectRollbackFileResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDataCorrectRollbackFile",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDataCorrectRollbackFileResponse>(await this.callApi(params, req, runtime), new $_model.GetDataCorrectRollbackFileResponse({}));
  }

  /**
   * Queries the download URL of the rollback attachment submitted along with a data change ticket.
   * 
   * @param request - GetDataCorrectRollbackFileRequest
   * @returns GetDataCorrectRollbackFileResponse
   */
  async getDataCorrectRollbackFile(request: $_model.GetDataCorrectRollbackFileRequest): Promise<$_model.GetDataCorrectRollbackFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDataCorrectRollbackFileWithOptions(request, runtime);
  }

  /**
   * Queries the download URL of the SQL script for a data change task.
   * 
   * @remarks
   * This operation applies to [regular data change](https://help.aliyun.com/document_detail/58419.html) and [batch data import](https://help.aliyun.com/document_detail/144643.html).
   * 
   * @param request - GetDataCorrectSQLFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDataCorrectSQLFileResponse
   */
  async getDataCorrectSQLFileWithOptions(request: $_model.GetDataCorrectSQLFileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDataCorrectSQLFileResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDataCorrectSQLFile",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDataCorrectSQLFileResponse>(await this.callApi(params, req, runtime), new $_model.GetDataCorrectSQLFileResponse({}));
  }

  /**
   * Queries the download URL of the SQL script for a data change task.
   * 
   * @remarks
   * This operation applies to [regular data change](https://help.aliyun.com/document_detail/58419.html) and [batch data import](https://help.aliyun.com/document_detail/144643.html).
   * 
   * @param request - GetDataCorrectSQLFileRequest
   * @returns GetDataCorrectSQLFileResponse
   */
  async getDataCorrectSQLFile(request: $_model.GetDataCorrectSQLFileRequest): Promise<$_model.GetDataCorrectSQLFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDataCorrectSQLFileWithOptions(request, runtime);
  }

  /**
   * Queries the information about a data change, lock-free data change, or data import task.
   * 
   * @param request - GetDataCorrectTaskDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDataCorrectTaskDetailResponse
   */
  async getDataCorrectTaskDetailWithOptions(request: $_model.GetDataCorrectTaskDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDataCorrectTaskDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDataCorrectTaskDetail",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDataCorrectTaskDetailResponse>(await this.callApi(params, req, runtime), new $_model.GetDataCorrectTaskDetailResponse({}));
  }

  /**
   * Queries the information about a data change, lock-free data change, or data import task.
   * 
   * @param request - GetDataCorrectTaskDetailRequest
   * @returns GetDataCorrectTaskDetailResponse
   */
  async getDataCorrectTaskDetail(request: $_model.GetDataCorrectTaskDetailRequest): Promise<$_model.GetDataCorrectTaskDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDataCorrectTaskDetailWithOptions(request, runtime);
  }

  /**
   * Queries the scheduling configuration of a ticket for cleaning up historical data.
   * 
   * @param request - GetDataCronClearConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDataCronClearConfigResponse
   */
  async getDataCronClearConfigWithOptions(request: $_model.GetDataCronClearConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDataCronClearConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDataCronClearConfig",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDataCronClearConfigResponse>(await this.callApi(params, req, runtime), new $_model.GetDataCronClearConfigResponse({}));
  }

  /**
   * Queries the scheduling configuration of a ticket for cleaning up historical data.
   * 
   * @param request - GetDataCronClearConfigRequest
   * @returns GetDataCronClearConfigResponse
   */
  async getDataCronClearConfig(request: $_model.GetDataCronClearConfigRequest): Promise<$_model.GetDataCronClearConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDataCronClearConfigWithOptions(request, runtime);
  }

  /**
   * Queries the details of a historical data cleansing ticket.
   * 
   * @param request - GetDataCronClearTaskDetailListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDataCronClearTaskDetailListResponse
   */
  async getDataCronClearTaskDetailListWithOptions(request: $_model.GetDataCronClearTaskDetailListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDataCronClearTaskDetailListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDataCronClearTaskDetailList",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDataCronClearTaskDetailListResponse>(await this.callApi(params, req, runtime), new $_model.GetDataCronClearTaskDetailListResponse({}));
  }

  /**
   * Queries the details of a historical data cleansing ticket.
   * 
   * @param request - GetDataCronClearTaskDetailListRequest
   * @returns GetDataCronClearTaskDetailListResponse
   */
  async getDataCronClearTaskDetailList(request: $_model.GetDataCronClearTaskDetailListRequest): Promise<$_model.GetDataCronClearTaskDetailListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDataCronClearTaskDetailListWithOptions(request, runtime);
  }

  /**
   * Queries the download URL of export results for a data export ticket.
   * 
   * @param request - GetDataExportDownloadURLRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDataExportDownloadURLResponse
   */
  async getDataExportDownloadURLWithOptions(request: $_model.GetDataExportDownloadURLRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDataExportDownloadURLResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!$dara.isNull(request.realLoginUserUid)) {
      query["RealLoginUserUid"] = request.realLoginUserUid;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDataExportDownloadURL",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDataExportDownloadURLResponse>(await this.callApi(params, req, runtime), new $_model.GetDataExportDownloadURLResponse({}));
  }

  /**
   * Queries the download URL of export results for a data export ticket.
   * 
   * @param request - GetDataExportDownloadURLRequest
   * @returns GetDataExportDownloadURLResponse
   */
  async getDataExportDownloadURL(request: $_model.GetDataExportDownloadURLRequest): Promise<$_model.GetDataExportDownloadURLResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDataExportDownloadURLWithOptions(request, runtime);
  }

  /**
   * Queries the information about a data export ticket.
   * 
   * @param request - GetDataExportOrderDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDataExportOrderDetailResponse
   */
  async getDataExportOrderDetailWithOptions(request: $_model.GetDataExportOrderDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDataExportOrderDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.orderId)) {
      body["OrderId"] = request.orderId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDataExportOrderDetail",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDataExportOrderDetailResponse>(await this.callApi(params, req, runtime), new $_model.GetDataExportOrderDetailResponse({}));
  }

  /**
   * Queries the information about a data export ticket.
   * 
   * @param request - GetDataExportOrderDetailRequest
   * @returns GetDataExportOrderDetailResponse
   */
  async getDataExportOrderDetail(request: $_model.GetDataExportOrderDetailRequest): Promise<$_model.GetDataExportOrderDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDataExportOrderDetailWithOptions(request, runtime);
  }

  /**
   * Queries the precheck details of an SQL result set export ticket.
   * 
   * @param request - GetDataExportPreCheckDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDataExportPreCheckDetailResponse
   */
  async getDataExportPreCheckDetailWithOptions(request: $_model.GetDataExportPreCheckDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDataExportPreCheckDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDataExportPreCheckDetail",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDataExportPreCheckDetailResponse>(await this.callApi(params, req, runtime), new $_model.GetDataExportPreCheckDetailResponse({}));
  }

  /**
   * Queries the precheck details of an SQL result set export ticket.
   * 
   * @param request - GetDataExportPreCheckDetailRequest
   * @returns GetDataExportPreCheckDetailResponse
   */
  async getDataExportPreCheckDetail(request: $_model.GetDataExportPreCheckDetailRequest): Promise<$_model.GetDataExportPreCheckDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDataExportPreCheckDetailWithOptions(request, runtime);
  }

  /**
   * Queries the SQL statements used for data import in a ticket.
   * 
   * @remarks
   * You can call this operation only if the data is imported in security mode in your data import ticket.
   * 
   * @param request - GetDataImportSQLRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDataImportSQLResponse
   */
  async getDataImportSQLWithOptions(request: $_model.GetDataImportSQLRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDataImportSQLResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!$dara.isNull(request.sqlId)) {
      query["SqlId"] = request.sqlId;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDataImportSQL",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDataImportSQLResponse>(await this.callApi(params, req, runtime), new $_model.GetDataImportSQLResponse({}));
  }

  /**
   * Queries the SQL statements used for data import in a ticket.
   * 
   * @remarks
   * You can call this operation only if the data is imported in security mode in your data import ticket.
   * 
   * @param request - GetDataImportSQLRequest
   * @returns GetDataImportSQLResponse
   */
  async getDataImportSQL(request: $_model.GetDataImportSQLRequest): Promise<$_model.GetDataImportSQLResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDataImportSQLWithOptions(request, runtime);
  }

  /**
   * Queries the data catalog of the data lake.
   * 
   * @param request - GetDataLakeCatalogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDataLakeCatalogResponse
   */
  async getDataLakeCatalogWithOptions(request: $_model.GetDataLakeCatalogRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDataLakeCatalogResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.catalogName)) {
      query["CatalogName"] = request.catalogName;
    }

    if (!$dara.isNull(request.dataRegion)) {
      query["DataRegion"] = request.dataRegion;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDataLakeCatalog",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDataLakeCatalogResponse>(await this.callApi(params, req, runtime), new $_model.GetDataLakeCatalogResponse({}));
  }

  /**
   * Queries the data catalog of the data lake.
   * 
   * @param request - GetDataLakeCatalogRequest
   * @returns GetDataLakeCatalogResponse
   */
  async getDataLakeCatalog(request: $_model.GetDataLakeCatalogRequest): Promise<$_model.GetDataLakeCatalogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDataLakeCatalogWithOptions(request, runtime);
  }

  /**
   * Queries the information about the database in the data lake.
   * 
   * @param request - GetDataLakeDatabaseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDataLakeDatabaseResponse
   */
  async getDataLakeDatabaseWithOptions(request: $_model.GetDataLakeDatabaseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDataLakeDatabaseResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.catalogName)) {
      query["CatalogName"] = request.catalogName;
    }

    if (!$dara.isNull(request.dataRegion)) {
      query["DataRegion"] = request.dataRegion;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDataLakeDatabase",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDataLakeDatabaseResponse>(await this.callApi(params, req, runtime), new $_model.GetDataLakeDatabaseResponse({}));
  }

  /**
   * Queries the information about the database in the data lake.
   * 
   * @param request - GetDataLakeDatabaseRequest
   * @returns GetDataLakeDatabaseResponse
   */
  async getDataLakeDatabase(request: $_model.GetDataLakeDatabaseRequest): Promise<$_model.GetDataLakeDatabaseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDataLakeDatabaseWithOptions(request, runtime);
  }

  /**
   * Obtains the details about a user-defined function in a data lakehouse.
   * 
   * @param request - GetDataLakeFunctionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDataLakeFunctionResponse
   */
  async getDataLakeFunctionWithOptions(request: $_model.GetDataLakeFunctionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDataLakeFunctionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.catalogName)) {
      query["CatalogName"] = request.catalogName;
    }

    if (!$dara.isNull(request.dataRegion)) {
      query["DataRegion"] = request.dataRegion;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.functionName)) {
      query["FunctionName"] = request.functionName;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDataLakeFunction",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDataLakeFunctionResponse>(await this.callApi(params, req, runtime), new $_model.GetDataLakeFunctionResponse({}));
  }

  /**
   * Obtains the details about a user-defined function in a data lakehouse.
   * 
   * @param request - GetDataLakeFunctionRequest
   * @returns GetDataLakeFunctionResponse
   */
  async getDataLakeFunction(request: $_model.GetDataLakeFunctionRequest): Promise<$_model.GetDataLakeFunctionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDataLakeFunctionWithOptions(request, runtime);
  }

  /**
   * Queries the information about a partition of a table in a data lakehouse.
   * 
   * @param tmpReq - GetDataLakePartitionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDataLakePartitionResponse
   */
  async getDataLakePartitionWithOptions(tmpReq: $_model.GetDataLakePartitionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDataLakePartitionResponse> {
    tmpReq.validate();
    let request = new $_model.GetDataLakePartitionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.partitionValues)) {
      request.partitionValuesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.partitionValues, "PartitionValues", "simple");
    }

    let query = { };
    if (!$dara.isNull(request.catalogName)) {
      query["CatalogName"] = request.catalogName;
    }

    if (!$dara.isNull(request.dataRegion)) {
      query["DataRegion"] = request.dataRegion;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.partitionValuesShrink)) {
      query["PartitionValues"] = request.partitionValuesShrink;
    }

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDataLakePartition",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDataLakePartitionResponse>(await this.callApi(params, req, runtime), new $_model.GetDataLakePartitionResponse({}));
  }

  /**
   * Queries the information about a partition of a table in a data lakehouse.
   * 
   * @param request - GetDataLakePartitionRequest
   * @returns GetDataLakePartitionResponse
   */
  async getDataLakePartition(request: $_model.GetDataLakePartitionRequest): Promise<$_model.GetDataLakePartitionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDataLakePartitionWithOptions(request, runtime);
  }

  /**
   * Queries basic information about tables in the data lake.
   * 
   * @param request - GetDataLakeTableRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDataLakeTableResponse
   */
  async getDataLakeTableWithOptions(request: $_model.GetDataLakeTableRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDataLakeTableResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.catalogName)) {
      query["CatalogName"] = request.catalogName;
    }

    if (!$dara.isNull(request.dataRegion)) {
      query["DataRegion"] = request.dataRegion;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDataLakeTable",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDataLakeTableResponse>(await this.callApi(params, req, runtime), new $_model.GetDataLakeTableResponse({}));
  }

  /**
   * Queries basic information about tables in the data lake.
   * 
   * @param request - GetDataLakeTableRequest
   * @returns GetDataLakeTableResponse
   */
  async getDataLakeTable(request: $_model.GetDataLakeTableRequest): Promise<$_model.GetDataLakeTableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDataLakeTableWithOptions(request, runtime);
  }

  /**
   * Queries the progress of a data tracking task.
   * 
   * @param request - GetDataTrackJobDegreeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDataTrackJobDegreeResponse
   */
  async getDataTrackJobDegreeWithOptions(request: $_model.GetDataTrackJobDegreeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDataTrackJobDegreeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDataTrackJobDegree",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDataTrackJobDegreeResponse>(await this.callApi(params, req, runtime), new $_model.GetDataTrackJobDegreeResponse({}));
  }

  /**
   * Queries the progress of a data tracking task.
   * 
   * @param request - GetDataTrackJobDegreeRequest
   * @returns GetDataTrackJobDegreeResponse
   */
  async getDataTrackJobDegree(request: $_model.GetDataTrackJobDegreeRequest): Promise<$_model.GetDataTrackJobDegreeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDataTrackJobDegreeWithOptions(request, runtime);
  }

  /**
   * Queries the metadata of tables involved in a data tracking task.
   * 
   * @param request - GetDataTrackJobTableMetaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDataTrackJobTableMetaResponse
   */
  async getDataTrackJobTableMetaWithOptions(request: $_model.GetDataTrackJobTableMetaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDataTrackJobTableMetaResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDataTrackJobTableMeta",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDataTrackJobTableMetaResponse>(await this.callApi(params, req, runtime), new $_model.GetDataTrackJobTableMetaResponse({}));
  }

  /**
   * Queries the metadata of tables involved in a data tracking task.
   * 
   * @param request - GetDataTrackJobTableMetaRequest
   * @returns GetDataTrackJobTableMetaResponse
   */
  async getDataTrackJobTableMeta(request: $_model.GetDataTrackJobTableMetaRequest): Promise<$_model.GetDataTrackJobTableMetaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDataTrackJobTableMetaWithOptions(request, runtime);
  }

  /**
   * Queries the details of a data tracking ticket.
   * 
   * @param request - GetDataTrackOrderDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDataTrackOrderDetailResponse
   */
  async getDataTrackOrderDetailWithOptions(request: $_model.GetDataTrackOrderDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDataTrackOrderDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDataTrackOrderDetail",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDataTrackOrderDetailResponse>(await this.callApi(params, req, runtime), new $_model.GetDataTrackOrderDetailResponse({}));
  }

  /**
   * Queries the details of a data tracking ticket.
   * 
   * @param request - GetDataTrackOrderDetailRequest
   * @returns GetDataTrackOrderDetailResponse
   */
  async getDataTrackOrderDetail(request: $_model.GetDataTrackOrderDetailRequest): Promise<$_model.GetDataTrackOrderDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDataTrackOrderDetailWithOptions(request, runtime);
  }

  /**
   * Queries details of a specific database.
   * 
   * @param request - GetDatabaseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDatabaseResponse
   */
  async getDatabaseWithOptions(request: $_model.GetDatabaseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDatabaseResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.host)) {
      query["Host"] = request.host;
    }

    if (!$dara.isNull(request.port)) {
      query["Port"] = request.port;
    }

    if (!$dara.isNull(request.realLoginUserUid)) {
      query["RealLoginUserUid"] = request.realLoginUserUid;
    }

    if (!$dara.isNull(request.schemaName)) {
      query["SchemaName"] = request.schemaName;
    }

    if (!$dara.isNull(request.sid)) {
      query["Sid"] = request.sid;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDatabase",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDatabaseResponse>(await this.callApi(params, req, runtime), new $_model.GetDatabaseResponse({}));
  }

  /**
   * Queries details of a specific database.
   * 
   * @param request - GetDatabaseRequest
   * @returns GetDatabaseResponse
   */
  async getDatabase(request: $_model.GetDatabaseRequest): Promise<$_model.GetDatabaseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDatabaseWithOptions(request, runtime);
  }

  /**
   * Queries the details of a database export ticket.
   * 
   * @param request - GetDatabaseExportOrderDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDatabaseExportOrderDetailResponse
   */
  async getDatabaseExportOrderDetailWithOptions(request: $_model.GetDatabaseExportOrderDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDatabaseExportOrderDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.orderId)) {
      body["OrderId"] = request.orderId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDatabaseExportOrderDetail",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDatabaseExportOrderDetailResponse>(await this.callApi(params, req, runtime), new $_model.GetDatabaseExportOrderDetailResponse({}));
  }

  /**
   * Queries the details of a database export ticket.
   * 
   * @param request - GetDatabaseExportOrderDetailRequest
   * @returns GetDatabaseExportOrderDetailResponse
   */
  async getDatabaseExportOrderDetail(request: $_model.GetDatabaseExportOrderDetailRequest): Promise<$_model.GetDatabaseExportOrderDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDatabaseExportOrderDetailWithOptions(request, runtime);
  }

  /**
   * Queries the download URL of the results of a database export ticket.
   * 
   * @param request - GetDbExportDownloadURLRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDbExportDownloadURLResponse
   */
  async getDbExportDownloadURLWithOptions(request: $_model.GetDbExportDownloadURLRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDbExportDownloadURLResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDbExportDownloadURL",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDbExportDownloadURLResponse>(await this.callApi(params, req, runtime), new $_model.GetDbExportDownloadURLResponse({}));
  }

  /**
   * Queries the download URL of the results of a database export ticket.
   * 
   * @param request - GetDbExportDownloadURLRequest
   * @returns GetDbExportDownloadURLResponse
   */
  async getDbExportDownloadURL(request: $_model.GetDbExportDownloadURLRequest): Promise<$_model.GetDbExportDownloadURLResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDbExportDownloadURLWithOptions(request, runtime);
  }

  /**
   * Queries the details of a database instance.
   * 
   * @param request - GetInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceResponse
   */
  async getInstanceWithOptions(request: $_model.GetInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.host)) {
      query["Host"] = request.host;
    }

    if (!$dara.isNull(request.port)) {
      query["Port"] = request.port;
    }

    if (!$dara.isNull(request.realLoginUserUid)) {
      query["RealLoginUserUid"] = request.realLoginUserUid;
    }

    if (!$dara.isNull(request.sid)) {
      query["Sid"] = request.sid;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInstance",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetInstanceResponse>(await this.callApi(params, req, runtime), new $_model.GetInstanceResponse({}));
  }

  /**
   * Queries the details of a database instance.
   * 
   * @param request - GetInstanceRequest
   * @returns GetInstanceResponse
   */
  async getInstance(request: $_model.GetInstanceRequest): Promise<$_model.GetInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getInstanceWithOptions(request, runtime);
  }

  /**
   * Queries the minimum scheduling cycle of a task flow when a service level agreement (SLA) timeout rule is configured for the task flow.
   * 
   * @remarks
   * The scheduling cycle of a task flow must be greater than the minimum scheduling cycle configured in the SLA rule for the task flow.
   * 
   * @param request - GetIntervalLimitOfSLARequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetIntervalLimitOfSLAResponse
   */
  async getIntervalLimitOfSLAWithOptions(request: $_model.GetIntervalLimitOfSLARequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetIntervalLimitOfSLAResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dagId)) {
      query["DagId"] = request.dagId;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetIntervalLimitOfSLA",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetIntervalLimitOfSLAResponse>(await this.callApi(params, req, runtime), new $_model.GetIntervalLimitOfSLAResponse({}));
  }

  /**
   * Queries the minimum scheduling cycle of a task flow when a service level agreement (SLA) timeout rule is configured for the task flow.
   * 
   * @remarks
   * The scheduling cycle of a task flow must be greater than the minimum scheduling cycle configured in the SLA rule for the task flow.
   * 
   * @param request - GetIntervalLimitOfSLARequest
   * @returns GetIntervalLimitOfSLAResponse
   */
  async getIntervalLimitOfSLA(request: $_model.GetIntervalLimitOfSLARequest): Promise<$_model.GetIntervalLimitOfSLAResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getIntervalLimitOfSLAWithOptions(request, runtime);
  }

  /**
   * Queries the information about a workspace based on the workspace name in Data Management (DMS).
   * 
   * @remarks
   * You are a DMS administrator or a database administrator (DBA).
   * 
   * @param request - GetLhSpaceByNameRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLhSpaceByNameResponse
   */
  async getLhSpaceByNameWithOptions(request: $_model.GetLhSpaceByNameRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetLhSpaceByNameResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.spaceName)) {
      query["SpaceName"] = request.spaceName;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetLhSpaceByName",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetLhSpaceByNameResponse>(await this.callApi(params, req, runtime), new $_model.GetLhSpaceByNameResponse({}));
  }

  /**
   * Queries the information about a workspace based on the workspace name in Data Management (DMS).
   * 
   * @remarks
   * You are a DMS administrator or a database administrator (DBA).
   * 
   * @param request - GetLhSpaceByNameRequest
   * @returns GetLhSpaceByNameResponse
   */
  async getLhSpaceByName(request: $_model.GetLhSpaceByNameRequest): Promise<$_model.GetLhSpaceByNameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getLhSpaceByNameWithOptions(request, runtime);
  }

  /**
   * Queries the details of a logical database.
   * 
   * @param request - GetLogicDatabaseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLogicDatabaseResponse
   */
  async getLogicDatabaseWithOptions(request: $_model.GetLogicDatabaseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetLogicDatabaseResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbId)) {
      query["DbId"] = request.dbId;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetLogicDatabase",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetLogicDatabaseResponse>(await this.callApi(params, req, runtime), new $_model.GetLogicDatabaseResponse({}));
  }

  /**
   * Queries the details of a logical database.
   * 
   * @param request - GetLogicDatabaseRequest
   * @returns GetLogicDatabaseResponse
   */
  async getLogicDatabase(request: $_model.GetLogicDatabaseRequest): Promise<$_model.GetLogicDatabaseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getLogicDatabaseWithOptions(request, runtime);
  }

  /**
   * Queries the details of columns in a table.
   * 
   * @remarks
   * You can call this operation only for database instances whose control mode is Security Collaboration.
   * 
   * @param request - GetMetaTableColumnRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMetaTableColumnResponse
   */
  async getMetaTableColumnWithOptions(request: $_model.GetMetaTableColumnRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetMetaTableColumnResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.tableGuid)) {
      query["TableGuid"] = request.tableGuid;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMetaTableColumn",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMetaTableColumnResponse>(await this.callApi(params, req, runtime), new $_model.GetMetaTableColumnResponse({}));
  }

  /**
   * Queries the details of columns in a table.
   * 
   * @remarks
   * You can call this operation only for database instances whose control mode is Security Collaboration.
   * 
   * @param request - GetMetaTableColumnRequest
   * @returns GetMetaTableColumnResponse
   */
  async getMetaTableColumn(request: $_model.GetMetaTableColumnRequest): Promise<$_model.GetMetaTableColumnResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMetaTableColumnWithOptions(request, runtime);
  }

  /**
   * Queries the details of columns and indexes in a table.
   * 
   * @remarks
   * You can call this operation only for database instances whose control mode is Security Collaboration.
   * 
   * @param request - GetMetaTableDetailInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMetaTableDetailInfoResponse
   */
  async getMetaTableDetailInfoWithOptions(request: $_model.GetMetaTableDetailInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetMetaTableDetailInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.realLoginUserUid)) {
      query["RealLoginUserUid"] = request.realLoginUserUid;
    }

    if (!$dara.isNull(request.tableGuid)) {
      query["TableGuid"] = request.tableGuid;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMetaTableDetailInfo",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMetaTableDetailInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetMetaTableDetailInfoResponse({}));
  }

  /**
   * Queries the details of columns and indexes in a table.
   * 
   * @remarks
   * You can call this operation only for database instances whose control mode is Security Collaboration.
   * 
   * @param request - GetMetaTableDetailInfoRequest
   * @returns GetMetaTableDetailInfoResponse
   */
  async getMetaTableDetailInfo(request: $_model.GetMetaTableDetailInfoRequest): Promise<$_model.GetMetaTableDetailInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMetaTableDetailInfoWithOptions(request, runtime);
  }

  /**
   * Queries the details and progress of an OnlineDDL task.
   * 
   * @param request - GetOnlineDDLProgressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetOnlineDDLProgressResponse
   */
  async getOnlineDDLProgressWithOptions(request: $_model.GetOnlineDDLProgressRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetOnlineDDLProgressResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobDetailId)) {
      query["JobDetailId"] = request.jobDetailId;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetOnlineDDLProgress",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetOnlineDDLProgressResponse>(await this.callApi(params, req, runtime), new $_model.GetOnlineDDLProgressResponse({}));
  }

  /**
   * Queries the details and progress of an OnlineDDL task.
   * 
   * @param request - GetOnlineDDLProgressRequest
   * @returns GetOnlineDDLProgressResponse
   */
  async getOnlineDDLProgress(request: $_model.GetOnlineDDLProgressRequest): Promise<$_model.GetOnlineDDLProgressResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getOnlineDDLProgressWithOptions(request, runtime);
  }

  /**
   * Queries the details of operation logs that are generated in a specified period of time.
   * 
   * @remarks
   * Prerequisites: You are an administrator of Data Management (DMS) or a security administrator. You can call the [ListUsers](https://help.aliyun.com/document_detail/141938.html) or [GetUser](https://help.aliyun.com/document_detail/147098.html) operation to obtain your user role from the RoleIdList parameter that is returned.
   * 
   * @param request - GetOpLogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetOpLogResponse
   */
  async getOpLogWithOptions(request: $_model.GetOpLogRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetOpLogResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.databaseName)) {
      query["DatabaseName"] = request.databaseName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.module)) {
      query["Module"] = request.module;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.userNick)) {
      query["UserNick"] = request.userNick;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetOpLog",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetOpLogResponse>(await this.callApi(params, req, runtime), new $_model.GetOpLogResponse({}));
  }

  /**
   * Queries the details of operation logs that are generated in a specified period of time.
   * 
   * @remarks
   * Prerequisites: You are an administrator of Data Management (DMS) or a security administrator. You can call the [ListUsers](https://help.aliyun.com/document_detail/141938.html) or [GetUser](https://help.aliyun.com/document_detail/147098.html) operation to obtain your user role from the RoleIdList parameter that is returned.
   * 
   * @param request - GetOpLogRequest
   * @returns GetOpLogResponse
   */
  async getOpLog(request: $_model.GetOpLogRequest): Promise<$_model.GetOpLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getOpLogWithOptions(request, runtime);
  }

  /**
   * Queries the download URL of the attachment of a ticket.
   * 
   * @param request - GetOrderAttachmentFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetOrderAttachmentFileResponse
   */
  async getOrderAttachmentFileWithOptions(request: $_model.GetOrderAttachmentFileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetOrderAttachmentFileResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetOrderAttachmentFile",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetOrderAttachmentFileResponse>(await this.callApi(params, req, runtime), new $_model.GetOrderAttachmentFileResponse({}));
  }

  /**
   * Queries the download URL of the attachment of a ticket.
   * 
   * @param request - GetOrderAttachmentFileRequest
   * @returns GetOrderAttachmentFileResponse
   */
  async getOrderAttachmentFile(request: $_model.GetOrderAttachmentFileRequest): Promise<$_model.GetOrderAttachmentFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getOrderAttachmentFileWithOptions(request, runtime);
  }

  /**
   * Queries the basic information about a ticket.
   * 
   * @param request - GetOrderBaseInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetOrderBaseInfoResponse
   */
  async getOrderBaseInfoWithOptions(request: $_model.GetOrderBaseInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetOrderBaseInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetOrderBaseInfo",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetOrderBaseInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetOrderBaseInfoResponse({}));
  }

  /**
   * Queries the basic information about a ticket.
   * 
   * @param request - GetOrderBaseInfoRequest
   * @returns GetOrderBaseInfoResponse
   */
  async getOrderBaseInfo(request: $_model.GetOrderBaseInfoRequest): Promise<$_model.GetOrderBaseInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getOrderBaseInfoWithOptions(request, runtime);
  }

  /**
   * Queries the details of the Database-OWNER, Table-OWNER, and Instance-OWNER tickets.
   * 
   * @param request - GetOwnerApplyOrderDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetOwnerApplyOrderDetailResponse
   */
  async getOwnerApplyOrderDetailWithOptions(request: $_model.GetOwnerApplyOrderDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetOwnerApplyOrderDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetOwnerApplyOrderDetail",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetOwnerApplyOrderDetailResponse>(await this.callApi(params, req, runtime), new $_model.GetOwnerApplyOrderDetailResponse({}));
  }

  /**
   * Queries the details of the Database-OWNER, Table-OWNER, and Instance-OWNER tickets.
   * 
   * @param request - GetOwnerApplyOrderDetailRequest
   * @returns GetOwnerApplyOrderDetailResponse
   */
  async getOwnerApplyOrderDetail(request: $_model.GetOwnerApplyOrderDetailRequest): Promise<$_model.GetOwnerApplyOrderDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getOwnerApplyOrderDetailWithOptions(request, runtime);
  }

  /**
   * Queries the task information about a ticket.
   * 
   * @param request - GetPagedInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPagedInstanceResponse
   */
  async getPagedInstanceWithOptions(request: $_model.GetPagedInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetPagedInstanceResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPagedInstance",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPagedInstanceResponse>(await this.callApi(params, req, runtime), new $_model.GetPagedInstanceResponse({}));
  }

  /**
   * Queries the task information about a ticket.
   * 
   * @param request - GetPagedInstanceRequest
   * @returns GetPagedInstanceResponse
   */
  async getPagedInstance(request: $_model.GetPagedInstanceRequest): Promise<$_model.GetPagedInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPagedInstanceWithOptions(request, runtime);
  }

  /**
   * Queries the details of a ticket that applies for permissions.
   * 
   * @remarks
   * You can call this operation to query the information about tickets that apply for permissions on databases, tables, and sensitive columns.
   * 
   * @param request - GetPermApplyOrderDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPermApplyOrderDetailResponse
   */
  async getPermApplyOrderDetailWithOptions(request: $_model.GetPermApplyOrderDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetPermApplyOrderDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPermApplyOrderDetail",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPermApplyOrderDetailResponse>(await this.callApi(params, req, runtime), new $_model.GetPermApplyOrderDetailResponse({}));
  }

  /**
   * Queries the details of a ticket that applies for permissions.
   * 
   * @remarks
   * You can call this operation to query the information about tickets that apply for permissions on databases, tables, and sensitive columns.
   * 
   * @param request - GetPermApplyOrderDetailRequest
   * @returns GetPermApplyOrderDetailResponse
   */
  async getPermApplyOrderDetail(request: $_model.GetPermApplyOrderDetailRequest): Promise<$_model.GetPermApplyOrderDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPermApplyOrderDetailWithOptions(request, runtime);
  }

  /**
   * Queries the details of a physical database.
   * 
   * @param request - GetPhysicalDatabaseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPhysicalDatabaseResponse
   */
  async getPhysicalDatabaseWithOptions(request: $_model.GetPhysicalDatabaseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetPhysicalDatabaseResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbId)) {
      query["DbId"] = request.dbId;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPhysicalDatabase",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPhysicalDatabaseResponse>(await this.callApi(params, req, runtime), new $_model.GetPhysicalDatabaseResponse({}));
  }

  /**
   * Queries the details of a physical database.
   * 
   * @param request - GetPhysicalDatabaseRequest
   * @returns GetPhysicalDatabaseResponse
   */
  async getPhysicalDatabase(request: $_model.GetPhysicalDatabaseRequest): Promise<$_model.GetPhysicalDatabaseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPhysicalDatabaseWithOptions(request, runtime);
  }

  /**
   * Queries the details of a secure access proxy.
   * 
   * @param request - GetProxyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetProxyResponse
   */
  async getProxyWithOptions(request: $_model.GetProxyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetProxyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.proxyId)) {
      query["ProxyId"] = request.proxyId;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetProxy",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetProxyResponse>(await this.callApi(params, req, runtime), new $_model.GetProxyResponse({}));
  }

  /**
   * Queries the details of a secure access proxy.
   * 
   * @param request - GetProxyRequest
   * @returns GetProxyResponse
   */
  async getProxy(request: $_model.GetProxyRequest): Promise<$_model.GetProxyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getProxyWithOptions(request, runtime);
  }

  /**
   * Queries the authorization information about the secure access proxy feature.
   * 
   * @param request - GetProxyAccessRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetProxyAccessResponse
   */
  async getProxyAccessWithOptions(request: $_model.GetProxyAccessRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetProxyAccessResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.proxyAccessId)) {
      query["ProxyAccessId"] = request.proxyAccessId;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetProxyAccess",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetProxyAccessResponse>(await this.callApi(params, req, runtime), new $_model.GetProxyAccessResponse({}));
  }

  /**
   * Queries the authorization information about the secure access proxy feature.
   * 
   * @param request - GetProxyAccessRequest
   * @returns GetProxyAccessResponse
   */
  async getProxyAccess(request: $_model.GetProxyAccessRequest): Promise<$_model.GetProxyAccessResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getProxyAccessWithOptions(request, runtime);
  }

  /**
   * Queries the maximum number of custom service-level agreement (SLA) rules for task orchestration.
   * 
   * @param request - GetRuleNumLimitOfSLARequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRuleNumLimitOfSLAResponse
   */
  async getRuleNumLimitOfSLAWithOptions(request: $_model.GetRuleNumLimitOfSLARequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetRuleNumLimitOfSLAResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dagId)) {
      query["DagId"] = request.dagId;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRuleNumLimitOfSLA",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRuleNumLimitOfSLAResponse>(await this.callApi(params, req, runtime), new $_model.GetRuleNumLimitOfSLAResponse({}));
  }

  /**
   * Queries the maximum number of custom service-level agreement (SLA) rules for task orchestration.
   * 
   * @param request - GetRuleNumLimitOfSLARequest
   * @returns GetRuleNumLimitOfSLAResponse
   */
  async getRuleNumLimitOfSLA(request: $_model.GetRuleNumLimitOfSLARequest): Promise<$_model.GetRuleNumLimitOfSLAResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRuleNumLimitOfSLAWithOptions(request, runtime);
  }

  /**
   * Queries the result of an SQL review.
   * 
   * @remarks
   * For more information about the SQL review feature, see [SQL review](https://help.aliyun.com/document_detail/60374.html).
   * 
   * @param request - GetSQLReviewCheckResultStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSQLReviewCheckResultStatusResponse
   */
  async getSQLReviewCheckResultStatusWithOptions(request: $_model.GetSQLReviewCheckResultStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSQLReviewCheckResultStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSQLReviewCheckResultStatus",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSQLReviewCheckResultStatusResponse>(await this.callApi(params, req, runtime), new $_model.GetSQLReviewCheckResultStatusResponse({}));
  }

  /**
   * Queries the result of an SQL review.
   * 
   * @remarks
   * For more information about the SQL review feature, see [SQL review](https://help.aliyun.com/document_detail/60374.html).
   * 
   * @param request - GetSQLReviewCheckResultStatusRequest
   * @returns GetSQLReviewCheckResultStatusResponse
   */
  async getSQLReviewCheckResultStatus(request: $_model.GetSQLReviewCheckResultStatusRequest): Promise<$_model.GetSQLReviewCheckResultStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSQLReviewCheckResultStatusWithOptions(request, runtime);
  }

  /**
   * Queries the details of optimization suggestions. The operation applies only to the tickets for the data changes and SQL review.
   * 
   * @remarks
   * For more information about the SQL review feature, see [SQL review](https://help.aliyun.com/document_detail/60374.html).
   * 
   * @param request - GetSQLReviewOptimizeDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSQLReviewOptimizeDetailResponse
   */
  async getSQLReviewOptimizeDetailWithOptions(request: $_model.GetSQLReviewOptimizeDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSQLReviewOptimizeDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.SQLReviewQueryKey)) {
      query["SQLReviewQueryKey"] = request.SQLReviewQueryKey;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSQLReviewOptimizeDetail",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSQLReviewOptimizeDetailResponse>(await this.callApi(params, req, runtime), new $_model.GetSQLReviewOptimizeDetailResponse({}));
  }

  /**
   * Queries the details of optimization suggestions. The operation applies only to the tickets for the data changes and SQL review.
   * 
   * @remarks
   * For more information about the SQL review feature, see [SQL review](https://help.aliyun.com/document_detail/60374.html).
   * 
   * @param request - GetSQLReviewOptimizeDetailRequest
   * @returns GetSQLReviewOptimizeDetailResponse
   */
  async getSQLReviewOptimizeDetail(request: $_model.GetSQLReviewOptimizeDetailRequest): Promise<$_model.GetSQLReviewOptimizeDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSQLReviewOptimizeDetailWithOptions(request, runtime);
  }

  /**
   * Queries the information about security rule sets of a tenant. The information includes the name and description of security rules, and instances associated with security rules.
   * 
   * @param request - GetStandardGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetStandardGroupResponse
   */
  async getStandardGroupWithOptions(request: $_model.GetStandardGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetStandardGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetStandardGroup",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetStandardGroupResponse>(await this.callApi(params, req, runtime), new $_model.GetStandardGroupResponse({}));
  }

  /**
   * Queries the information about security rule sets of a tenant. The information includes the name and description of security rules, and instances associated with security rules.
   * 
   * @param request - GetStandardGroupRequest
   * @returns GetStandardGroupResponse
   */
  async getStandardGroup(request: $_model.GetStandardGroupRequest): Promise<$_model.GetStandardGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getStandardGroupWithOptions(request, runtime);
  }

  /**
   * Queries the SQL statements that are involved in a schema synchronization ticket.
   * 
   * @param request - GetStructSyncExecSqlDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetStructSyncExecSqlDetailResponse
   */
  async getStructSyncExecSqlDetailWithOptions(request: $_model.GetStructSyncExecSqlDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetStructSyncExecSqlDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetStructSyncExecSqlDetail",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetStructSyncExecSqlDetailResponse>(await this.callApi(params, req, runtime), new $_model.GetStructSyncExecSqlDetailResponse({}));
  }

  /**
   * Queries the SQL statements that are involved in a schema synchronization ticket.
   * 
   * @param request - GetStructSyncExecSqlDetailRequest
   * @returns GetStructSyncExecSqlDetailResponse
   */
  async getStructSyncExecSqlDetail(request: $_model.GetStructSyncExecSqlDetailRequest): Promise<$_model.GetStructSyncExecSqlDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getStructSyncExecSqlDetailWithOptions(request, runtime);
  }

  /**
   * Queries the analysis result of a schema synchronization task.
   * 
   * @param request - GetStructSyncJobAnalyzeResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetStructSyncJobAnalyzeResultResponse
   */
  async getStructSyncJobAnalyzeResultWithOptions(request: $_model.GetStructSyncJobAnalyzeResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetStructSyncJobAnalyzeResultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.compareType)) {
      query["CompareType"] = request.compareType;
    }

    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetStructSyncJobAnalyzeResult",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetStructSyncJobAnalyzeResultResponse>(await this.callApi(params, req, runtime), new $_model.GetStructSyncJobAnalyzeResultResponse({}));
  }

  /**
   * Queries the analysis result of a schema synchronization task.
   * 
   * @param request - GetStructSyncJobAnalyzeResultRequest
   * @returns GetStructSyncJobAnalyzeResultResponse
   */
  async getStructSyncJobAnalyzeResult(request: $_model.GetStructSyncJobAnalyzeResultRequest): Promise<$_model.GetStructSyncJobAnalyzeResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getStructSyncJobAnalyzeResultWithOptions(request, runtime);
  }

  /**
   * Queries the information of a schema synchronization task.
   * 
   * @param request - GetStructSyncJobDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetStructSyncJobDetailResponse
   */
  async getStructSyncJobDetailWithOptions(request: $_model.GetStructSyncJobDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetStructSyncJobDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetStructSyncJobDetail",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetStructSyncJobDetailResponse>(await this.callApi(params, req, runtime), new $_model.GetStructSyncJobDetailResponse({}));
  }

  /**
   * Queries the information of a schema synchronization task.
   * 
   * @param request - GetStructSyncJobDetailRequest
   * @returns GetStructSyncJobDetailResponse
   */
  async getStructSyncJobDetail(request: $_model.GetStructSyncJobDetailRequest): Promise<$_model.GetStructSyncJobDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getStructSyncJobDetailWithOptions(request, runtime);
  }

  /**
   * Queries the details of a schema synchronization ticket.
   * 
   * @param request - GetStructSyncOrderDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetStructSyncOrderDetailResponse
   */
  async getStructSyncOrderDetailWithOptions(request: $_model.GetStructSyncOrderDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetStructSyncOrderDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetStructSyncOrderDetail",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetStructSyncOrderDetailResponse>(await this.callApi(params, req, runtime), new $_model.GetStructSyncOrderDetailResponse({}));
  }

  /**
   * Queries the details of a schema synchronization ticket.
   * 
   * @param request - GetStructSyncOrderDetailRequest
   * @returns GetStructSyncOrderDetailResponse
   */
  async getStructSyncOrderDetail(request: $_model.GetStructSyncOrderDetailRequest): Promise<$_model.GetStructSyncOrderDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getStructSyncOrderDetailWithOptions(request, runtime);
  }

  /**
   * Queries the topology of a data table.
   * 
   * @param request - GetTableDBTopologyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTableDBTopologyResponse
   */
  async getTableDBTopologyWithOptions(request: $_model.GetTableDBTopologyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTableDBTopologyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.tableGuid)) {
      query["TableGuid"] = request.tableGuid;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTableDBTopology",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTableDBTopologyResponse>(await this.callApi(params, req, runtime), new $_model.GetTableDBTopologyResponse({}));
  }

  /**
   * Queries the topology of a data table.
   * 
   * @param request - GetTableDBTopologyRequest
   * @returns GetTableDBTopologyResponse
   */
  async getTableDBTopology(request: $_model.GetTableDBTopologyRequest): Promise<$_model.GetTableDBTopologyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTableDBTopologyWithOptions(request, runtime);
  }

  /**
   * Queries the information about a schema design ticket, such as the current node of the ticket, whether the ticket can be returned to the schema design node, and the publishing strategy.
   * 
   * @param request - GetTableDesignProjectFlowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTableDesignProjectFlowResponse
   */
  async getTableDesignProjectFlowWithOptions(request: $_model.GetTableDesignProjectFlowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTableDesignProjectFlowResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTableDesignProjectFlow",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTableDesignProjectFlowResponse>(await this.callApi(params, req, runtime), new $_model.GetTableDesignProjectFlowResponse({}));
  }

  /**
   * Queries the information about a schema design ticket, such as the current node of the ticket, whether the ticket can be returned to the schema design node, and the publishing strategy.
   * 
   * @param request - GetTableDesignProjectFlowRequest
   * @returns GetTableDesignProjectFlowResponse
   */
  async getTableDesignProjectFlow(request: $_model.GetTableDesignProjectFlowRequest): Promise<$_model.GetTableDesignProjectFlowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTableDesignProjectFlowWithOptions(request, runtime);
  }

  /**
   * Queries the information about the project and change base database of a schema design ticket, such as the state of the ticket, the ID of the user who created the ticket, and the name and ID of the change base database.
   * 
   * @param request - GetTableDesignProjectInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTableDesignProjectInfoResponse
   */
  async getTableDesignProjectInfoWithOptions(request: $_model.GetTableDesignProjectInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTableDesignProjectInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTableDesignProjectInfo",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTableDesignProjectInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetTableDesignProjectInfoResponse({}));
  }

  /**
   * Queries the information about the project and change base database of a schema design ticket, such as the state of the ticket, the ID of the user who created the ticket, and the name and ID of the change base database.
   * 
   * @param request - GetTableDesignProjectInfoRequest
   * @returns GetTableDesignProjectInfoResponse
   */
  async getTableDesignProjectInfo(request: $_model.GetTableDesignProjectInfoRequest): Promise<$_model.GetTableDesignProjectInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTableDesignProjectInfoWithOptions(request, runtime);
  }

  /**
   * Gets metadata knowledge for a specified GUID.
   * 
   * @remarks
   * This API can be called only for database instances that are enabled for security hosting.
   * 
   * @param request - GetTableKnowledgeInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTableKnowledgeInfoResponse
   */
  async getTableKnowledgeInfoWithOptions(request: $_model.GetTableKnowledgeInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTableKnowledgeInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbId)) {
      query["DbId"] = request.dbId;
    }

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    if (!$dara.isNull(request.tableSchemaName)) {
      query["TableSchemaName"] = request.tableSchemaName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTableKnowledgeInfo",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTableKnowledgeInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetTableKnowledgeInfoResponse({}));
  }

  /**
   * Gets metadata knowledge for a specified GUID.
   * 
   * @remarks
   * This API can be called only for database instances that are enabled for security hosting.
   * 
   * @param request - GetTableKnowledgeInfoRequest
   * @returns GetTableKnowledgeInfoResponse
   */
  async getTableKnowledgeInfo(request: $_model.GetTableKnowledgeInfoRequest): Promise<$_model.GetTableKnowledgeInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTableKnowledgeInfoWithOptions(request, runtime);
  }

  /**
   * Queries the topology of a table.
   * 
   * @param request - GetTableTopologyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTableTopologyResponse
   */
  async getTableTopologyWithOptions(request: $_model.GetTableTopologyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTableTopologyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.tableGuid)) {
      query["TableGuid"] = request.tableGuid;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTableTopology",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTableTopologyResponse>(await this.callApi(params, req, runtime), new $_model.GetTableTopologyResponse({}));
  }

  /**
   * Queries the topology of a table.
   * 
   * @param request - GetTableTopologyRequest
   * @returns GetTableTopologyResponse
   */
  async getTableTopology(request: $_model.GetTableTopologyRequest): Promise<$_model.GetTableTopologyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTableTopologyWithOptions(request, runtime);
  }

  /**
   * Queries the configurations, including time variables, of a specified task node based on the task node ID.
   * 
   * @param request - GetTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTaskResponse
   */
  async getTaskWithOptions(request: $_model.GetTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.nodeId)) {
      query["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTask",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTaskResponse>(await this.callApi(params, req, runtime), new $_model.GetTaskResponse({}));
  }

  /**
   * Queries the configurations, including time variables, of a specified task node based on the task node ID.
   * 
   * @param request - GetTaskRequest
   * @returns GetTaskResponse
   */
  async getTask(request: $_model.GetTaskRequest): Promise<$_model.GetTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTaskWithOptions(request, runtime);
  }

  /**
   * Queries the Directed Acyclic Graph (DAG) of a task flow.
   * 
   * @param request - GetTaskFlowGraphRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTaskFlowGraphResponse
   */
  async getTaskFlowGraphWithOptions(request: $_model.GetTaskFlowGraphRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTaskFlowGraphResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dagId)) {
      query["DagId"] = request.dagId;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTaskFlowGraph",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTaskFlowGraphResponse>(await this.callApi(params, req, runtime), new $_model.GetTaskFlowGraphResponse({}));
  }

  /**
   * Queries the Directed Acyclic Graph (DAG) of a task flow.
   * 
   * @param request - GetTaskFlowGraphRequest
   * @returns GetTaskFlowGraphResponse
   */
  async getTaskFlowGraph(request: $_model.GetTaskFlowGraphRequest): Promise<$_model.GetTaskFlowGraphResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTaskFlowGraphWithOptions(request, runtime);
  }

  /**
   * Queries the notification settings for task flows.
   * 
   * @param request - GetTaskFlowNotificationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTaskFlowNotificationResponse
   */
  async getTaskFlowNotificationWithOptions(request: $_model.GetTaskFlowNotificationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTaskFlowNotificationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dagId)) {
      query["DagId"] = request.dagId;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTaskFlowNotification",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTaskFlowNotificationResponse>(await this.callApi(params, req, runtime), new $_model.GetTaskFlowNotificationResponse({}));
  }

  /**
   * Queries the notification settings for task flows.
   * 
   * @param request - GetTaskFlowNotificationRequest
   * @returns GetTaskFlowNotificationResponse
   */
  async getTaskFlowNotification(request: $_model.GetTaskFlowNotificationRequest): Promise<$_model.GetTaskFlowNotificationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTaskFlowNotificationWithOptions(request, runtime);
  }

  /**
   * Queries the information about the nodes in an execution record of a task flow.
   * 
   * @param request - GetTaskInstanceRelationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTaskInstanceRelationResponse
   */
  async getTaskInstanceRelationWithOptions(request: $_model.GetTaskInstanceRelationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTaskInstanceRelationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dagId)) {
      query["DagId"] = request.dagId;
    }

    if (!$dara.isNull(request.dagInstanceId)) {
      query["DagInstanceId"] = request.dagInstanceId;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTaskInstanceRelation",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTaskInstanceRelationResponse>(await this.callApi(params, req, runtime), new $_model.GetTaskInstanceRelationResponse({}));
  }

  /**
   * Queries the information about the nodes in an execution record of a task flow.
   * 
   * @param request - GetTaskInstanceRelationRequest
   * @returns GetTaskInstanceRelationResponse
   */
  async getTaskInstanceRelation(request: $_model.GetTaskInstanceRelationRequest): Promise<$_model.GetTaskInstanceRelationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTaskInstanceRelationWithOptions(request, runtime);
  }

  /**
   * Queries the information about a user.
   * 
   * @param request - GetUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserResponse
   */
  async getUserWithOptions(request: $_model.GetUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.uid)) {
      query["Uid"] = request.uid;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUser",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetUserResponse>(await this.callApi(params, req, runtime), new $_model.GetUserResponse({}));
  }

  /**
   * Queries the information about a user.
   * 
   * @param request - GetUserRequest
   * @returns GetUserResponse
   */
  async getUser(request: $_model.GetUserRequest): Promise<$_model.GetUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getUserWithOptions(request, runtime);
  }

  /**
   * Queries details of the active tenant.
   * 
   * @param request - GetUserActiveTenantRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserActiveTenantResponse
   */
  async getUserActiveTenantWithOptions(request: $_model.GetUserActiveTenantRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetUserActiveTenantResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUserActiveTenant",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetUserActiveTenantResponse>(await this.callApi(params, req, runtime), new $_model.GetUserActiveTenantResponse({}));
  }

  /**
   * Queries details of the active tenant.
   * 
   * @param request - GetUserActiveTenantRequest
   * @returns GetUserActiveTenantResponse
   */
  async getUserActiveTenant(request: $_model.GetUserActiveTenantRequest): Promise<$_model.GetUserActiveTenantResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getUserActiveTenantWithOptions(request, runtime);
  }

  /**
   * Obtains the information of a file upload task.
   * 
   * @param request - GetUserUploadFileJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserUploadFileJobResponse
   */
  async getUserUploadFileJobWithOptions(request: $_model.GetUserUploadFileJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetUserUploadFileJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobKey)) {
      query["JobKey"] = request.jobKey;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUserUploadFileJob",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetUserUploadFileJobResponse>(await this.callApi(params, req, runtime), new $_model.GetUserUploadFileJobResponse({}));
  }

  /**
   * Obtains the information of a file upload task.
   * 
   * @param request - GetUserUploadFileJobRequest
   * @returns GetUserUploadFileJobResponse
   */
  async getUserUploadFileJob(request: $_model.GetUserUploadFileJobRequest): Promise<$_model.GetUserUploadFileJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getUserUploadFileJobWithOptions(request, runtime);
  }

  /**
   * Queries the details of a workspace.
   * 
   * @param request - GetWorkspaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetWorkspaceResponse
   */
  async getWorkspaceWithOptions(request: $_model.GetWorkspaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetWorkspaceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetWorkspace",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetWorkspaceResponse>(await this.callApi(params, req, runtime), new $_model.GetWorkspaceResponse({}));
  }

  /**
   * Queries the details of a workspace.
   * 
   * @param request - GetWorkspaceRequest
   * @returns GetWorkspaceResponse
   */
  async getWorkspace(request: $_model.GetWorkspaceRequest): Promise<$_model.GetWorkspaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getWorkspaceWithOptions(request, runtime);
  }

  /**
   * Grants permissions on resources to users by using a permission template.
   * 
   * @remarks
   * You must be a database administrator (DBA) or a Data Management (DMS) administrator. For more information about how to view system roles, see [View system roles](https://help.aliyun.com/document_detail/324212.html).
   * 
   * @param request - GrantTemplateAuthorityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GrantTemplateAuthorityResponse
   */
  async grantTemplateAuthorityWithOptions(request: $_model.GrantTemplateAuthorityRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GrantTemplateAuthorityResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.comment)) {
      query["Comment"] = request.comment;
    }

    if (!$dara.isNull(request.expireDate)) {
      query["ExpireDate"] = request.expireDate;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.userIds)) {
      query["UserIds"] = request.userIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GrantTemplateAuthority",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GrantTemplateAuthorityResponse>(await this.callApi(params, req, runtime), new $_model.GrantTemplateAuthorityResponse({}));
  }

  /**
   * Grants permissions on resources to users by using a permission template.
   * 
   * @remarks
   * You must be a database administrator (DBA) or a Data Management (DMS) administrator. For more information about how to view system roles, see [View system roles](https://help.aliyun.com/document_detail/324212.html).
   * 
   * @param request - GrantTemplateAuthorityRequest
   * @returns GrantTemplateAuthorityResponse
   */
  async grantTemplateAuthority(request: $_model.GrantTemplateAuthorityRequest): Promise<$_model.GrantTemplateAuthorityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.grantTemplateAuthorityWithOptions(request, runtime);
  }

  /**
   * Grants permissions on an instance, a database, or a table to a user.
   * 
   * @param request - GrantUserPermissionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GrantUserPermissionResponse
   */
  async grantUserPermissionWithOptions(request: $_model.GrantUserPermissionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GrantUserPermissionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbId)) {
      query["DbId"] = request.dbId;
    }

    if (!$dara.isNull(request.dsType)) {
      query["DsType"] = request.dsType;
    }

    if (!$dara.isNull(request.expireDate)) {
      query["ExpireDate"] = request.expireDate;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.logic)) {
      query["Logic"] = request.logic;
    }

    if (!$dara.isNull(request.permTypes)) {
      query["PermTypes"] = request.permTypes;
    }

    if (!$dara.isNull(request.tableId)) {
      query["TableId"] = request.tableId;
    }

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GrantUserPermission",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GrantUserPermissionResponse>(await this.callApi(params, req, runtime), new $_model.GrantUserPermissionResponse({}));
  }

  /**
   * Grants permissions on an instance, a database, or a table to a user.
   * 
   * @param request - GrantUserPermissionRequest
   * @returns GrantUserPermissionResponse
   */
  async grantUserPermission(request: $_model.GrantUserPermissionRequest): Promise<$_model.GrantUserPermissionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.grantUserPermissionWithOptions(request, runtime);
  }

  /**
   * You can call this operation to obtain the authorization password of the security protection agent InspectProxyAccessSecret.
   * 
   * @param request - InspectProxyAccessSecretRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InspectProxyAccessSecretResponse
   */
  async inspectProxyAccessSecretWithOptions(request: $_model.InspectProxyAccessSecretRequest, runtime: $dara.RuntimeOptions): Promise<$_model.InspectProxyAccessSecretResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.proxyAccessId)) {
      query["ProxyAccessId"] = request.proxyAccessId;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "InspectProxyAccessSecret",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.InspectProxyAccessSecretResponse>(await this.callApi(params, req, runtime), new $_model.InspectProxyAccessSecretResponse({}));
  }

  /**
   * You can call this operation to obtain the authorization password of the security protection agent InspectProxyAccessSecret.
   * 
   * @param request - InspectProxyAccessSecretRequest
   * @returns InspectProxyAccessSecretResponse
   */
  async inspectProxyAccessSecret(request: $_model.InspectProxyAccessSecretRequest): Promise<$_model.InspectProxyAccessSecretResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.inspectProxyAccessSecretWithOptions(request, runtime);
  }

  /**
   * Queries a list of users to which the specified policy is attached and the number of the users.
   * 
   * @param request - ListAbacAuthorizationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAbacAuthorizationsResponse
   */
  async listAbacAuthorizationsWithOptions(request: $_model.ListAbacAuthorizationsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAbacAuthorizationsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    if (!$dara.isNull(request.policySource)) {
      query["PolicySource"] = request.policySource;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAbacAuthorizations",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAbacAuthorizationsResponse>(await this.callApi(params, req, runtime), new $_model.ListAbacAuthorizationsResponse({}));
  }

  /**
   * Queries a list of users to which the specified policy is attached and the number of the users.
   * 
   * @param request - ListAbacAuthorizationsRequest
   * @returns ListAbacAuthorizationsResponse
   */
  async listAbacAuthorizations(request: $_model.ListAbacAuthorizationsRequest): Promise<$_model.ListAbacAuthorizationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAbacAuthorizationsWithOptions(request, runtime);
  }

  /**
   * Queries a list of policies that are created by a user.
   * 
   * @param request - ListAbacPoliciesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAbacPoliciesResponse
   */
  async listAbacPoliciesWithOptions(request: $_model.ListAbacPoliciesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAbacPoliciesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.searchKey)) {
      query["SearchKey"] = request.searchKey;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAbacPolicies",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAbacPoliciesResponse>(await this.callApi(params, req, runtime), new $_model.ListAbacPoliciesResponse({}));
  }

  /**
   * Queries a list of policies that are created by a user.
   * 
   * @param request - ListAbacPoliciesRequest
   * @returns ListAbacPoliciesResponse
   */
  async listAbacPolicies(request: $_model.ListAbacPoliciesRequest): Promise<$_model.ListAbacPoliciesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAbacPoliciesWithOptions(request, runtime);
  }

  /**
   * Queries the information about permission templates, including the template creator, template name, and total number of templates.
   * 
   * @param request - ListAuthorityTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAuthorityTemplateResponse
   */
  async listAuthorityTemplateWithOptions(request: $_model.ListAuthorityTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAuthorityTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.searchKey)) {
      query["SearchKey"] = request.searchKey;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAuthorityTemplate",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAuthorityTemplateResponse>(await this.callApi(params, req, runtime), new $_model.ListAuthorityTemplateResponse({}));
  }

  /**
   * Queries the information about permission templates, including the template creator, template name, and total number of templates.
   * 
   * @param request - ListAuthorityTemplateRequest
   * @returns ListAuthorityTemplateResponse
   */
  async listAuthorityTemplate(request: $_model.ListAuthorityTemplateRequest): Promise<$_model.ListAuthorityTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAuthorityTemplateWithOptions(request, runtime);
  }

  /**
   * Queries the databases on which the specified user has permissions.
   * 
   * @param request - ListAuthorizedDatabasesForUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAuthorizedDatabasesForUserResponse
   */
  async listAuthorizedDatabasesForUserWithOptions(request: $_model.ListAuthorizedDatabasesForUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAuthorizedDatabasesForUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbType)) {
      query["DbType"] = request.dbType;
    }

    if (!$dara.isNull(request.envType)) {
      query["EnvType"] = request.envType;
    }

    if (!$dara.isNull(request.logic)) {
      query["Logic"] = request.logic;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.searchKey)) {
      query["SearchKey"] = request.searchKey;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAuthorizedDatabasesForUser",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAuthorizedDatabasesForUserResponse>(await this.callApi(params, req, runtime), new $_model.ListAuthorizedDatabasesForUserResponse({}));
  }

  /**
   * Queries the databases on which the specified user has permissions.
   * 
   * @param request - ListAuthorizedDatabasesForUserRequest
   * @returns ListAuthorizedDatabasesForUserResponse
   */
  async listAuthorizedDatabasesForUser(request: $_model.ListAuthorizedDatabasesForUserRequest): Promise<$_model.ListAuthorizedDatabasesForUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAuthorizedDatabasesForUserWithOptions(request, runtime);
  }

  /**
   * Queries the instances on which the specified user has permissions.
   * 
   * @param request - ListAuthorizedInstancesForUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAuthorizedInstancesForUserResponse
   */
  async listAuthorizedInstancesForUserWithOptions(request: $_model.ListAuthorizedInstancesForUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAuthorizedInstancesForUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbType)) {
      query["DbType"] = request.dbType;
    }

    if (!$dara.isNull(request.envType)) {
      query["EnvType"] = request.envType;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.searchKey)) {
      query["SearchKey"] = request.searchKey;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAuthorizedInstancesForUser",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAuthorizedInstancesForUserResponse>(await this.callApi(params, req, runtime), new $_model.ListAuthorizedInstancesForUserResponse({}));
  }

  /**
   * Queries the instances on which the specified user has permissions.
   * 
   * @param request - ListAuthorizedInstancesForUserRequest
   * @returns ListAuthorizedInstancesForUserResponse
   */
  async listAuthorizedInstancesForUser(request: $_model.ListAuthorizedInstancesForUserRequest): Promise<$_model.ListAuthorizedInstancesForUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAuthorizedInstancesForUserWithOptions(request, runtime);
  }

  /**
   * Queries a list of users that have permissions on the specified database.
   * 
   * @param request - ListAuthorizedUsersForDatabaseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAuthorizedUsersForDatabaseResponse
   */
  async listAuthorizedUsersForDatabaseWithOptions(request: $_model.ListAuthorizedUsersForDatabaseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAuthorizedUsersForDatabaseResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbId)) {
      query["DbId"] = request.dbId;
    }

    if (!$dara.isNull(request.logic)) {
      query["Logic"] = request.logic;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.searchKey)) {
      query["SearchKey"] = request.searchKey;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAuthorizedUsersForDatabase",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAuthorizedUsersForDatabaseResponse>(await this.callApi(params, req, runtime), new $_model.ListAuthorizedUsersForDatabaseResponse({}));
  }

  /**
   * Queries a list of users that have permissions on the specified database.
   * 
   * @param request - ListAuthorizedUsersForDatabaseRequest
   * @returns ListAuthorizedUsersForDatabaseResponse
   */
  async listAuthorizedUsersForDatabase(request: $_model.ListAuthorizedUsersForDatabaseRequest): Promise<$_model.ListAuthorizedUsersForDatabaseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAuthorizedUsersForDatabaseWithOptions(request, runtime);
  }

  /**
   * Queries a list of users that have permissions on the specified instance.
   * 
   * @param request - ListAuthorizedUsersForInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAuthorizedUsersForInstanceResponse
   */
  async listAuthorizedUsersForInstanceWithOptions(request: $_model.ListAuthorizedUsersForInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAuthorizedUsersForInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.searchKey)) {
      query["SearchKey"] = request.searchKey;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAuthorizedUsersForInstance",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAuthorizedUsersForInstanceResponse>(await this.callApi(params, req, runtime), new $_model.ListAuthorizedUsersForInstanceResponse({}));
  }

  /**
   * Queries a list of users that have permissions on the specified instance.
   * 
   * @param request - ListAuthorizedUsersForInstanceRequest
   * @returns ListAuthorizedUsersForInstanceResponse
   */
  async listAuthorizedUsersForInstance(request: $_model.ListAuthorizedUsersForInstanceRequest): Promise<$_model.ListAuthorizedUsersForInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAuthorizedUsersForInstanceWithOptions(request, runtime);
  }

  /**
   * Queries the classification templates.
   * 
   * @param request - ListClassificationTemplatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListClassificationTemplatesResponse
   */
  async listClassificationTemplatesWithOptions(request: $_model.ListClassificationTemplatesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListClassificationTemplatesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListClassificationTemplates",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListClassificationTemplatesResponse>(await this.callApi(params, req, runtime), new $_model.ListClassificationTemplatesResponse({}));
  }

  /**
   * Queries the classification templates.
   * 
   * @param request - ListClassificationTemplatesRequest
   * @returns ListClassificationTemplatesResponse
   */
  async listClassificationTemplates(request: $_model.ListClassificationTemplatesRequest): Promise<$_model.ListClassificationTemplatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listClassificationTemplatesWithOptions(request, runtime);
  }

  /**
   * Returns the column information of a table.
   * 
   * @remarks
   * You can call this operation only for database instances whose control mode is Security Collaboration.
   * 
   * @param request - ListColumnsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListColumnsResponse
   */
  async listColumnsWithOptions(request: $_model.ListColumnsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListColumnsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.logic)) {
      query["Logic"] = request.logic;
    }

    if (!$dara.isNull(request.tableId)) {
      query["TableId"] = request.tableId;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListColumns",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListColumnsResponse>(await this.callApi(params, req, runtime), new $_model.ListColumnsResponse({}));
  }

  /**
   * Returns the column information of a table.
   * 
   * @remarks
   * You can call this operation only for database instances whose control mode is Security Collaboration.
   * 
   * @param request - ListColumnsRequest
   * @returns ListColumnsResponse
   */
  async listColumns(request: $_model.ListColumnsRequest): Promise<$_model.ListColumnsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listColumnsWithOptions(request, runtime);
  }

  /**
   * Queries the published versions of a task flow.
   * 
   * @param request - ListDAGVersionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDAGVersionsResponse
   */
  async listDAGVersionsWithOptions(request: $_model.ListDAGVersionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDAGVersionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dagId)) {
      query["DagId"] = request.dagId;
    }

    if (!$dara.isNull(request.pageIndex)) {
      query["PageIndex"] = request.pageIndex;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDAGVersions",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDAGVersionsResponse>(await this.callApi(params, req, runtime), new $_model.ListDAGVersionsResponse({}));
  }

  /**
   * Queries the published versions of a task flow.
   * 
   * @param request - ListDAGVersionsRequest
   * @returns ListDAGVersionsResponse
   */
  async listDAGVersions(request: $_model.ListDAGVersionsRequest): Promise<$_model.ListDAGVersionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDAGVersionsWithOptions(request, runtime);
  }

  /**
   * Queries a list of SQL tasks.
   * 
   * @param request - ListDBTaskSQLJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDBTaskSQLJobResponse
   */
  async listDBTaskSQLJobWithOptions(request: $_model.ListDBTaskSQLJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDBTaskSQLJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBTaskGroupId)) {
      query["DBTaskGroupId"] = request.DBTaskGroupId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDBTaskSQLJob",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDBTaskSQLJobResponse>(await this.callApi(params, req, runtime), new $_model.ListDBTaskSQLJobResponse({}));
  }

  /**
   * Queries a list of SQL tasks.
   * 
   * @param request - ListDBTaskSQLJobRequest
   * @returns ListDBTaskSQLJobResponse
   */
  async listDBTaskSQLJob(request: $_model.ListDBTaskSQLJobRequest): Promise<$_model.ListDBTaskSQLJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDBTaskSQLJobWithOptions(request, runtime);
  }

  /**
   * Queries the details of an SQL task.
   * 
   * @param request - ListDBTaskSQLJobDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDBTaskSQLJobDetailResponse
   */
  async listDBTaskSQLJobDetailWithOptions(request: $_model.ListDBTaskSQLJobDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDBTaskSQLJobDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDBTaskSQLJobDetail",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDBTaskSQLJobDetailResponse>(await this.callApi(params, req, runtime), new $_model.ListDBTaskSQLJobDetailResponse({}));
  }

  /**
   * Queries the details of an SQL task.
   * 
   * @param request - ListDBTaskSQLJobDetailRequest
   * @returns ListDBTaskSQLJobDetailResponse
   */
  async listDBTaskSQLJobDetail(request: $_model.ListDBTaskSQLJobDetailRequest): Promise<$_model.ListDBTaskSQLJobDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDBTaskSQLJobDetailWithOptions(request, runtime);
  }

  /**
   * Queries the publishing details of a schema design ticket.
   * 
   * @param request - ListDDLPublishRecordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDDLPublishRecordsResponse
   */
  async listDDLPublishRecordsWithOptions(request: $_model.ListDDLPublishRecordsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDDLPublishRecordsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDDLPublishRecords",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDDLPublishRecordsResponse>(await this.callApi(params, req, runtime), new $_model.ListDDLPublishRecordsResponse({}));
  }

  /**
   * Queries the publishing details of a schema design ticket.
   * 
   * @param request - ListDDLPublishRecordsRequest
   * @returns ListDDLPublishRecordsResponse
   */
  async listDDLPublishRecords(request: $_model.ListDDLPublishRecordsRequest): Promise<$_model.ListDDLPublishRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDDLPublishRecordsWithOptions(request, runtime);
  }

  /**
   * Queries the databases that are involved in the precheck of a data change ticket.
   * 
   * @remarks
   * For more information about the Normal Data Modify feature, see [Change regular data](https://help.aliyun.com/document_detail/58419.html).
   * 
   * @param request - ListDataCorrectPreCheckDBRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataCorrectPreCheckDBResponse
   */
  async listDataCorrectPreCheckDBWithOptions(request: $_model.ListDataCorrectPreCheckDBRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDataCorrectPreCheckDBResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDataCorrectPreCheckDB",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDataCorrectPreCheckDBResponse>(await this.callApi(params, req, runtime), new $_model.ListDataCorrectPreCheckDBResponse({}));
  }

  /**
   * Queries the databases that are involved in the precheck of a data change ticket.
   * 
   * @remarks
   * For more information about the Normal Data Modify feature, see [Change regular data](https://help.aliyun.com/document_detail/58419.html).
   * 
   * @param request - ListDataCorrectPreCheckDBRequest
   * @returns ListDataCorrectPreCheckDBResponse
   */
  async listDataCorrectPreCheckDB(request: $_model.ListDataCorrectPreCheckDBRequest): Promise<$_model.ListDataCorrectPreCheckDBResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDataCorrectPreCheckDBWithOptions(request, runtime);
  }

  /**
   * Queries the precheck information about an SQL statement that is specified in a data change ticket.
   * 
   * @remarks
   * For more information about the Normal Data Modify feature, see [Change regular data](https://help.aliyun.com/document_detail/58419.html).
   * 
   * @param request - ListDataCorrectPreCheckSQLRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataCorrectPreCheckSQLResponse
   */
  async listDataCorrectPreCheckSQLWithOptions(request: $_model.ListDataCorrectPreCheckSQLRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDataCorrectPreCheckSQLResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbId)) {
      query["DbId"] = request.dbId;
    }

    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDataCorrectPreCheckSQL",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDataCorrectPreCheckSQLResponse>(await this.callApi(params, req, runtime), new $_model.ListDataCorrectPreCheckSQLResponse({}));
  }

  /**
   * Queries the precheck information about an SQL statement that is specified in a data change ticket.
   * 
   * @remarks
   * For more information about the Normal Data Modify feature, see [Change regular data](https://help.aliyun.com/document_detail/58419.html).
   * 
   * @param request - ListDataCorrectPreCheckSQLRequest
   * @returns ListDataCorrectPreCheckSQLResponse
   */
  async listDataCorrectPreCheckSQL(request: $_model.ListDataCorrectPreCheckSQLRequest): Promise<$_model.ListDataCorrectPreCheckSQLResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDataCorrectPreCheckSQLWithOptions(request, runtime);
  }

  /**
   * Queries the precheck information of SQL statements used for data import in a ticket.
   * 
   * @remarks
   * You can call this operation only if the data is imported in security mode in your data import ticket.
   * 
   * @param request - ListDataImportSQLPreCheckDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataImportSQLPreCheckDetailResponse
   */
  async listDataImportSQLPreCheckDetailWithOptions(request: $_model.ListDataImportSQLPreCheckDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDataImportSQLPreCheckDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!$dara.isNull(request.pageNumer)) {
      query["PageNumer"] = request.pageNumer;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.sqlType)) {
      query["SqlType"] = request.sqlType;
    }

    if (!$dara.isNull(request.statusCode)) {
      query["StatusCode"] = request.statusCode;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDataImportSQLPreCheckDetail",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDataImportSQLPreCheckDetailResponse>(await this.callApi(params, req, runtime), new $_model.ListDataImportSQLPreCheckDetailResponse({}));
  }

  /**
   * Queries the precheck information of SQL statements used for data import in a ticket.
   * 
   * @remarks
   * You can call this operation only if the data is imported in security mode in your data import ticket.
   * 
   * @param request - ListDataImportSQLPreCheckDetailRequest
   * @returns ListDataImportSQLPreCheckDetailResponse
   */
  async listDataImportSQLPreCheckDetail(request: $_model.ListDataImportSQLPreCheckDetailRequest): Promise<$_model.ListDataImportSQLPreCheckDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDataImportSQLPreCheckDetailWithOptions(request, runtime);
  }

  /**
   * Queries the types of SQL statements used for data import in a ticket.
   * 
   * @remarks
   * You can call this operation only if the data is imported in security mode in your data import ticket.
   * 
   * @param request - ListDataImportSQLTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataImportSQLTypeResponse
   */
  async listDataImportSQLTypeWithOptions(request: $_model.ListDataImportSQLTypeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDataImportSQLTypeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDataImportSQLType",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDataImportSQLTypeResponse>(await this.callApi(params, req, runtime), new $_model.ListDataImportSQLTypeResponse({}));
  }

  /**
   * Queries the types of SQL statements used for data import in a ticket.
   * 
   * @remarks
   * You can call this operation only if the data is imported in security mode in your data import ticket.
   * 
   * @param request - ListDataImportSQLTypeRequest
   * @returns ListDataImportSQLTypeResponse
   */
  async listDataImportSQLType(request: $_model.ListDataImportSQLTypeRequest): Promise<$_model.ListDataImportSQLTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDataImportSQLTypeWithOptions(request, runtime);
  }

  /**
   * Queries a list of data catalogs in a data lake.
   * 
   * @param request - ListDataLakeCatalogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataLakeCatalogResponse
   */
  async listDataLakeCatalogWithOptions(request: $_model.ListDataLakeCatalogRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDataLakeCatalogResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dataRegion)) {
      query["DataRegion"] = request.dataRegion;
    }

    if (!$dara.isNull(request.searchKey)) {
      query["SearchKey"] = request.searchKey;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDataLakeCatalog",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDataLakeCatalogResponse>(await this.callApi(params, req, runtime), new $_model.ListDataLakeCatalogResponse({}));
  }

  /**
   * Queries a list of data catalogs in a data lake.
   * 
   * @param request - ListDataLakeCatalogRequest
   * @returns ListDataLakeCatalogResponse
   */
  async listDataLakeCatalog(request: $_model.ListDataLakeCatalogRequest): Promise<$_model.ListDataLakeCatalogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDataLakeCatalogWithOptions(request, runtime);
  }

  /**
   * Queries the list of databases in the data lake.
   * 
   * @param request - ListDataLakeDatabaseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataLakeDatabaseResponse
   */
  async listDataLakeDatabaseWithOptions(request: $_model.ListDataLakeDatabaseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDataLakeDatabaseResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.catalogName)) {
      query["CatalogName"] = request.catalogName;
    }

    if (!$dara.isNull(request.dataRegion)) {
      query["DataRegion"] = request.dataRegion;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.searchKey)) {
      query["SearchKey"] = request.searchKey;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDataLakeDatabase",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDataLakeDatabaseResponse>(await this.callApi(params, req, runtime), new $_model.ListDataLakeDatabaseResponse({}));
  }

  /**
   * Queries the list of databases in the data lake.
   * 
   * @param request - ListDataLakeDatabaseRequest
   * @returns ListDataLakeDatabaseResponse
   */
  async listDataLakeDatabase(request: $_model.ListDataLakeDatabaseRequest): Promise<$_model.ListDataLakeDatabaseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDataLakeDatabaseWithOptions(request, runtime);
  }

  /**
   * Queries a list of functions in a data lake.
   * 
   * @param request - ListDataLakeFunctionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataLakeFunctionResponse
   */
  async listDataLakeFunctionWithOptions(request: $_model.ListDataLakeFunctionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDataLakeFunctionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.catalogName)) {
      query["CatalogName"] = request.catalogName;
    }

    if (!$dara.isNull(request.dataRegion)) {
      query["DataRegion"] = request.dataRegion;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.functionNamePattern)) {
      query["FunctionNamePattern"] = request.functionNamePattern;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDataLakeFunction",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDataLakeFunctionResponse>(await this.callApi(params, req, runtime), new $_model.ListDataLakeFunctionResponse({}));
  }

  /**
   * Queries a list of functions in a data lake.
   * 
   * @param request - ListDataLakeFunctionRequest
   * @returns ListDataLakeFunctionResponse
   */
  async listDataLakeFunction(request: $_model.ListDataLakeFunctionRequest): Promise<$_model.ListDataLakeFunctionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDataLakeFunctionWithOptions(request, runtime);
  }

  /**
   * Gets a list of data lake function names.
   * 
   * @param request - ListDataLakeFunctionNameRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataLakeFunctionNameResponse
   */
  async listDataLakeFunctionNameWithOptions(request: $_model.ListDataLakeFunctionNameRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDataLakeFunctionNameResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.catalogName)) {
      query["CatalogName"] = request.catalogName;
    }

    if (!$dara.isNull(request.dataRegion)) {
      query["DataRegion"] = request.dataRegion;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.functionNamePattern)) {
      query["FunctionNamePattern"] = request.functionNamePattern;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDataLakeFunctionName",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDataLakeFunctionNameResponse>(await this.callApi(params, req, runtime), new $_model.ListDataLakeFunctionNameResponse({}));
  }

  /**
   * Gets a list of data lake function names.
   * 
   * @param request - ListDataLakeFunctionNameRequest
   * @returns ListDataLakeFunctionNameResponse
   */
  async listDataLakeFunctionName(request: $_model.ListDataLakeFunctionNameRequest): Promise<$_model.ListDataLakeFunctionNameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDataLakeFunctionNameWithOptions(request, runtime);
  }

  /**
   * Queries a list of partitions of a table in a data lake.
   * 
   * @param tmpReq - ListDataLakePartitionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataLakePartitionResponse
   */
  async listDataLakePartitionWithOptions(tmpReq: $_model.ListDataLakePartitionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDataLakePartitionResponse> {
    tmpReq.validate();
    let request = new $_model.ListDataLakePartitionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.partNames)) {
      request.partNamesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.partNames, "PartNames", "json");
    }

    let query = { };
    if (!$dara.isNull(request.catalogName)) {
      query["CatalogName"] = request.catalogName;
    }

    if (!$dara.isNull(request.dataRegion)) {
      query["DataRegion"] = request.dataRegion;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.partNamesShrink)) {
      body["PartNames"] = request.partNamesShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDataLakePartition",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDataLakePartitionResponse>(await this.callApi(params, req, runtime), new $_model.ListDataLakePartitionResponse({}));
  }

  /**
   * Queries a list of partitions of a table in a data lake.
   * 
   * @param request - ListDataLakePartitionRequest
   * @returns ListDataLakePartitionResponse
   */
  async listDataLakePartition(request: $_model.ListDataLakePartitionRequest): Promise<$_model.ListDataLakePartitionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDataLakePartitionWithOptions(request, runtime);
  }

  /**
   * Queries a list of partitions of a table in a data lake based on filter conditions.
   * 
   * @param request - ListDataLakePartitionByFilterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataLakePartitionByFilterResponse
   */
  async listDataLakePartitionByFilterWithOptions(request: $_model.ListDataLakePartitionByFilterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDataLakePartitionByFilterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.catalogName)) {
      query["CatalogName"] = request.catalogName;
    }

    if (!$dara.isNull(request.dataRegion)) {
      query["DataRegion"] = request.dataRegion;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.filter)) {
      body["Filter"] = request.filter;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDataLakePartitionByFilter",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDataLakePartitionByFilterResponse>(await this.callApi(params, req, runtime), new $_model.ListDataLakePartitionByFilterResponse({}));
  }

  /**
   * Queries a list of partitions of a table in a data lake based on filter conditions.
   * 
   * @param request - ListDataLakePartitionByFilterRequest
   * @returns ListDataLakePartitionByFilterResponse
   */
  async listDataLakePartitionByFilter(request: $_model.ListDataLakePartitionByFilterRequest): Promise<$_model.ListDataLakePartitionByFilterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDataLakePartitionByFilterWithOptions(request, runtime);
  }

  /**
   * Queries a list of partition names of a table in a data lake.
   * 
   * @param request - ListDataLakePartitionNameRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataLakePartitionNameResponse
   */
  async listDataLakePartitionNameWithOptions(request: $_model.ListDataLakePartitionNameRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDataLakePartitionNameResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.catalogName)) {
      query["CatalogName"] = request.catalogName;
    }

    if (!$dara.isNull(request.dataRegion)) {
      query["DataRegion"] = request.dataRegion;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDataLakePartitionName",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDataLakePartitionNameResponse>(await this.callApi(params, req, runtime), new $_model.ListDataLakePartitionNameResponse({}));
  }

  /**
   * Queries a list of partition names of a table in a data lake.
   * 
   * @param request - ListDataLakePartitionNameRequest
   * @returns ListDataLakePartitionNameResponse
   */
  async listDataLakePartitionName(request: $_model.ListDataLakePartitionNameRequest): Promise<$_model.ListDataLakePartitionNameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDataLakePartitionNameWithOptions(request, runtime);
  }

  /**
   * Queries a list of tables in a data lake.
   * 
   * @param request - ListDataLakeTableRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataLakeTableResponse
   */
  async listDataLakeTableWithOptions(request: $_model.ListDataLakeTableRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDataLakeTableResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.catalogName)) {
      query["CatalogName"] = request.catalogName;
    }

    if (!$dara.isNull(request.dataRegion)) {
      query["DataRegion"] = request.dataRegion;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.tableNamePattern)) {
      query["TableNamePattern"] = request.tableNamePattern;
    }

    if (!$dara.isNull(request.tableType)) {
      query["TableType"] = request.tableType;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDataLakeTable",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDataLakeTableResponse>(await this.callApi(params, req, runtime), new $_model.ListDataLakeTableResponse({}));
  }

  /**
   * Queries a list of tables in a data lake.
   * 
   * @param request - ListDataLakeTableRequest
   * @returns ListDataLakeTableResponse
   */
  async listDataLakeTable(request: $_model.ListDataLakeTableRequest): Promise<$_model.ListDataLakeTableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDataLakeTableWithOptions(request, runtime);
  }

  /**
   * Queries a list of names of tables in a data lake.
   * 
   * @param request - ListDataLakeTableNameRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataLakeTableNameResponse
   */
  async listDataLakeTableNameWithOptions(request: $_model.ListDataLakeTableNameRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDataLakeTableNameResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.catalogName)) {
      query["CatalogName"] = request.catalogName;
    }

    if (!$dara.isNull(request.dataRegion)) {
      query["DataRegion"] = request.dataRegion;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.tableNamePattern)) {
      query["TableNamePattern"] = request.tableNamePattern;
    }

    if (!$dara.isNull(request.tableType)) {
      query["TableType"] = request.tableType;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDataLakeTableName",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDataLakeTableNameResponse>(await this.callApi(params, req, runtime), new $_model.ListDataLakeTableNameResponse({}));
  }

  /**
   * Queries a list of names of tables in a data lake.
   * 
   * @param request - ListDataLakeTableNameRequest
   * @returns ListDataLakeTableNameResponse
   */
  async listDataLakeTableName(request: $_model.ListDataLakeTableNameRequest): Promise<$_model.ListDataLakeTableNameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDataLakeTableNameWithOptions(request, runtime);
  }

  /**
   * Queries basic information about tables in the data lake.
   * 
   * @param request - ListDataLakeTablebaseInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataLakeTablebaseInfoResponse
   */
  async listDataLakeTablebaseInfoWithOptions(request: $_model.ListDataLakeTablebaseInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDataLakeTablebaseInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.catalogName)) {
      query["CatalogName"] = request.catalogName;
    }

    if (!$dara.isNull(request.dataRegion)) {
      query["DataRegion"] = request.dataRegion;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.page)) {
      query["Page"] = request.page;
    }

    if (!$dara.isNull(request.rows)) {
      query["Rows"] = request.rows;
    }

    if (!$dara.isNull(request.searchKey)) {
      query["SearchKey"] = request.searchKey;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDataLakeTablebaseInfo",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDataLakeTablebaseInfoResponse>(await this.callApi(params, req, runtime), new $_model.ListDataLakeTablebaseInfoResponse({}));
  }

  /**
   * Queries basic information about tables in the data lake.
   * 
   * @param request - ListDataLakeTablebaseInfoRequest
   * @returns ListDataLakeTablebaseInfoResponse
   */
  async listDataLakeTablebaseInfo(request: $_model.ListDataLakeTablebaseInfoRequest): Promise<$_model.ListDataLakeTablebaseInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDataLakeTablebaseInfoWithOptions(request, runtime);
  }

  /**
   * Queries the permissions of users on a database.
   * 
   * @param request - ListDatabaseUserPermssionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDatabaseUserPermssionsResponse
   */
  async listDatabaseUserPermssionsWithOptions(request: $_model.ListDatabaseUserPermssionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDatabaseUserPermssionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbId)) {
      query["DbId"] = request.dbId;
    }

    if (!$dara.isNull(request.logic)) {
      query["Logic"] = request.logic;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.permType)) {
      query["PermType"] = request.permType;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDatabaseUserPermssions",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDatabaseUserPermssionsResponse>(await this.callApi(params, req, runtime), new $_model.ListDatabaseUserPermssionsResponse({}));
  }

  /**
   * Queries the permissions of users on a database.
   * 
   * @param request - ListDatabaseUserPermssionsRequest
   * @returns ListDatabaseUserPermssionsResponse
   */
  async listDatabaseUserPermssions(request: $_model.ListDatabaseUserPermssionsRequest): Promise<$_model.ListDatabaseUserPermssionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDatabaseUserPermssionsWithOptions(request, runtime);
  }

  /**
   * Queries the databases in a database instance.
   * 
   * @param request - ListDatabasesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDatabasesResponse
   */
  async listDatabasesWithOptions(request: $_model.ListDatabasesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDatabasesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDatabases",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDatabasesResponse>(await this.callApi(params, req, runtime), new $_model.ListDatabasesResponse({}));
  }

  /**
   * Queries the databases in a database instance.
   * 
   * @param request - ListDatabasesRequest
   * @returns ListDatabasesResponse
   */
  async listDatabases(request: $_model.ListDatabasesRequest): Promise<$_model.ListDatabasesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDatabasesWithOptions(request, runtime);
  }

  /**
   * Queries the default service level agreement (SLA) timeout rules.
   * 
   * @param request - ListDefaultSLARulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDefaultSLARulesResponse
   */
  async listDefaultSLARulesWithOptions(request: $_model.ListDefaultSLARulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDefaultSLARulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dagId)) {
      query["DagId"] = request.dagId;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDefaultSLARules",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDefaultSLARulesResponse>(await this.callApi(params, req, runtime), new $_model.ListDefaultSLARulesResponse({}));
  }

  /**
   * Queries the default service level agreement (SLA) timeout rules.
   * 
   * @param request - ListDefaultSLARulesRequest
   * @returns ListDefaultSLARulesResponse
   */
  async listDefaultSLARules(request: $_model.ListDefaultSLARulesRequest): Promise<$_model.ListDefaultSLARulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDefaultSLARulesWithOptions(request, runtime);
  }

  /**
   * Queries masking rules.
   * 
   * @param request - ListDesensitizationRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDesensitizationRuleResponse
   */
  async listDesensitizationRuleWithOptions(request: $_model.ListDesensitizationRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDesensitizationRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.funcType)) {
      query["FuncType"] = request.funcType;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!$dara.isNull(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    if (!$dara.isNull(request.ruleType)) {
      query["RuleType"] = request.ruleType;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDesensitizationRule",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDesensitizationRuleResponse>(await this.callApi(params, req, runtime), new $_model.ListDesensitizationRuleResponse({}));
  }

  /**
   * Queries masking rules.
   * 
   * @param request - ListDesensitizationRuleRequest
   * @returns ListDesensitizationRuleResponse
   */
  async listDesensitizationRule(request: $_model.ListDesensitizationRuleRequest): Promise<$_model.ListDesensitizationRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDesensitizationRuleWithOptions(request, runtime);
  }

  /**
   * 用于创建DIFY实例及相关资源，支持自定义配置。
   * 
   * @remarks
   * ## 请求说明
   * - `workspaceOption` 参数指示是否新建工作空间，默认使用已有工作空间。
   * - 如果选择新建工作空间 (`CreateNewInstance`)，则必须提供 `workspaceName` 和 `workspaceDescription`。
   * - `vpcId`, `VSwitchID`, `zoneId`, `regionCode`, `ResourceQuota`, `Replicas`, `storageType`, `dbInstanceClass`, `dbEngineVersion`, `kvstoreEngineVersion` 是必填项。
   * - 当 `storageType` 为 `oss` 时，需要指定 `ossBucketResourceId` 和 `ossPath`。
   * - 如果需要新建数据库实例，则必须提供 `instanceAccount` 和 `instancePassword`。
   * - 预付费模式下，`PayPeriodType` 和 `PayPeriod` 必须填写。
   * - 可以通过设置 `dryRun` 为 `true` 来执行预检查而不实际创建实例。
   * 
   * @param request - ListDifyInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDifyInstancesResponse
   */
  async listDifyInstancesWithOptions(request: $_model.ListDifyInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDifyInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dataRegion)) {
      query["DataRegion"] = request.dataRegion;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDifyInstances",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDifyInstancesResponse>(await this.callApi(params, req, runtime), new $_model.ListDifyInstancesResponse({}));
  }

  /**
   * 用于创建DIFY实例及相关资源，支持自定义配置。
   * 
   * @remarks
   * ## 请求说明
   * - `workspaceOption` 参数指示是否新建工作空间，默认使用已有工作空间。
   * - 如果选择新建工作空间 (`CreateNewInstance`)，则必须提供 `workspaceName` 和 `workspaceDescription`。
   * - `vpcId`, `VSwitchID`, `zoneId`, `regionCode`, `ResourceQuota`, `Replicas`, `storageType`, `dbInstanceClass`, `dbEngineVersion`, `kvstoreEngineVersion` 是必填项。
   * - 当 `storageType` 为 `oss` 时，需要指定 `ossBucketResourceId` 和 `ossPath`。
   * - 如果需要新建数据库实例，则必须提供 `instanceAccount` 和 `instancePassword`。
   * - 预付费模式下，`PayPeriodType` 和 `PayPeriod` 必须填写。
   * - 可以通过设置 `dryRun` 为 `true` 来执行预检查而不实际创建实例。
   * 
   * @param request - ListDifyInstancesRequest
   * @returns ListDifyInstancesResponse
   */
  async listDifyInstances(request: $_model.ListDifyInstancesRequest): Promise<$_model.ListDifyInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDifyInstancesWithOptions(request, runtime);
  }

  /**
   * Queries valid orders.
   * 
   * @param request - ListEffectiveOrdersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEffectiveOrdersResponse
   */
  async listEffectiveOrdersWithOptions(request: $_model.ListEffectiveOrdersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListEffectiveOrdersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListEffectiveOrders",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListEffectiveOrdersResponse>(await this.callApi(params, req, runtime), new $_model.ListEffectiveOrdersResponse({}));
  }

  /**
   * Queries valid orders.
   * 
   * @param request - ListEffectiveOrdersRequest
   * @returns ListEffectiveOrdersResponse
   */
  async listEffectiveOrders(request: $_model.ListEffectiveOrdersRequest): Promise<$_model.ListEffectiveOrdersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listEffectiveOrdersWithOptions(request, runtime);
  }

  /**
   * Queries the indexes of a table.
   * 
   * @param request - ListIndexesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListIndexesResponse
   */
  async listIndexesWithOptions(request: $_model.ListIndexesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListIndexesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.logic)) {
      query["Logic"] = request.logic;
    }

    if (!$dara.isNull(request.tableId)) {
      query["TableId"] = request.tableId;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListIndexes",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListIndexesResponse>(await this.callApi(params, req, runtime), new $_model.ListIndexesResponse({}));
  }

  /**
   * Queries the indexes of a table.
   * 
   * @param request - ListIndexesRequest
   * @returns ListIndexesResponse
   */
  async listIndexes(request: $_model.ListIndexesRequest): Promise<$_model.ListIndexesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listIndexesWithOptions(request, runtime);
  }

  /**
   * Queries the logon records of an instance.
   * 
   * @param request - ListInstanceLoginAuditLogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstanceLoginAuditLogResponse
   */
  async listInstanceLoginAuditLogWithOptions(request: $_model.ListInstanceLoginAuditLogRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListInstanceLoginAuditLogResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.opUserName)) {
      query["OpUserName"] = request.opUserName;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.searchName)) {
      query["SearchName"] = request.searchName;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInstanceLoginAuditLog",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListInstanceLoginAuditLogResponse>(await this.callApi(params, req, runtime), new $_model.ListInstanceLoginAuditLogResponse({}));
  }

  /**
   * Queries the logon records of an instance.
   * 
   * @param request - ListInstanceLoginAuditLogRequest
   * @returns ListInstanceLoginAuditLogResponse
   */
  async listInstanceLoginAuditLog(request: $_model.ListInstanceLoginAuditLogRequest): Promise<$_model.ListInstanceLoginAuditLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listInstanceLoginAuditLogWithOptions(request, runtime);
  }

  /**
   * Queries the permissions of a user on a specific instance.
   * 
   * @param request - ListInstanceUserPermissionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstanceUserPermissionsResponse
   */
  async listInstanceUserPermissionsWithOptions(request: $_model.ListInstanceUserPermissionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListInstanceUserPermissionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInstanceUserPermissions",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListInstanceUserPermissionsResponse>(await this.callApi(params, req, runtime), new $_model.ListInstanceUserPermissionsResponse({}));
  }

  /**
   * Queries the permissions of a user on a specific instance.
   * 
   * @param request - ListInstanceUserPermissionsRequest
   * @returns ListInstanceUserPermissionsResponse
   */
  async listInstanceUserPermissions(request: $_model.ListInstanceUserPermissionsRequest): Promise<$_model.ListInstanceUserPermissionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listInstanceUserPermissionsWithOptions(request, runtime);
  }

  /**
   * Queries the information about database instances.
   * 
   * @param request - ListInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstancesResponse
   */
  async listInstancesWithOptions(request: $_model.ListInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbType)) {
      query["DbType"] = request.dbType;
    }

    if (!$dara.isNull(request.envType)) {
      query["EnvType"] = request.envType;
    }

    if (!$dara.isNull(request.instanceSource)) {
      query["InstanceSource"] = request.instanceSource;
    }

    if (!$dara.isNull(request.instanceState)) {
      query["InstanceState"] = request.instanceState;
    }

    if (!$dara.isNull(request.netType)) {
      query["NetType"] = request.netType;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.realLoginUserUid)) {
      query["RealLoginUserUid"] = request.realLoginUserUid;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    if (!$dara.isNull(request.searchKey)) {
      query["SearchKey"] = request.searchKey;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInstances",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListInstancesResponse>(await this.callApi(params, req, runtime), new $_model.ListInstancesResponse({}));
  }

  /**
   * Queries the information about database instances.
   * 
   * @param request - ListInstancesRequest
   * @returns ListInstancesResponse
   */
  async listInstances(request: $_model.ListInstancesRequest): Promise<$_model.ListInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listInstancesWithOptions(request, runtime);
  }

  /**
   * Queries the task flows corresponding to a specific business scenario in a workspace in Data Management (DMS).
   * 
   * @remarks
   *   Before you call this operation, make sure that you have the access permissions on the workspace. If you do not have the access permissions on the workspace, you can contact a DMS administrator, database administrator (DBA), or workspace administrator to add you as a member of the workspace. The [AddLhMembers](https://help.aliyun.com/document_detail/424759.html) operation can be called to add a workspace member.
   * *   If you are a DMS administrator or a workspace administrator, you can query the business scenarios and task flows related to a user in a workspace based on the user ID.
   * 
   * @param request - ListLhTaskFlowAndScenarioRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListLhTaskFlowAndScenarioResponse
   */
  async listLhTaskFlowAndScenarioWithOptions(request: $_model.ListLhTaskFlowAndScenarioRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListLhTaskFlowAndScenarioResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.spaceId)) {
      query["SpaceId"] = request.spaceId;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListLhTaskFlowAndScenario",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListLhTaskFlowAndScenarioResponse>(await this.callApi(params, req, runtime), new $_model.ListLhTaskFlowAndScenarioResponse({}));
  }

  /**
   * Queries the task flows corresponding to a specific business scenario in a workspace in Data Management (DMS).
   * 
   * @remarks
   *   Before you call this operation, make sure that you have the access permissions on the workspace. If you do not have the access permissions on the workspace, you can contact a DMS administrator, database administrator (DBA), or workspace administrator to add you as a member of the workspace. The [AddLhMembers](https://help.aliyun.com/document_detail/424759.html) operation can be called to add a workspace member.
   * *   If you are a DMS administrator or a workspace administrator, you can query the business scenarios and task flows related to a user in a workspace based on the user ID.
   * 
   * @param request - ListLhTaskFlowAndScenarioRequest
   * @returns ListLhTaskFlowAndScenarioResponse
   */
  async listLhTaskFlowAndScenario(request: $_model.ListLhTaskFlowAndScenarioRequest): Promise<$_model.ListLhTaskFlowAndScenarioResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listLhTaskFlowAndScenarioWithOptions(request, runtime);
  }

  /**
   * Queries the details of logical databases.
   * 
   * @param request - ListLogicDatabasesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListLogicDatabasesResponse
   */
  async listLogicDatabasesWithOptions(request: $_model.ListLogicDatabasesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListLogicDatabasesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListLogicDatabases",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListLogicDatabasesResponse>(await this.callApi(params, req, runtime), new $_model.ListLogicDatabasesResponse({}));
  }

  /**
   * Queries the details of logical databases.
   * 
   * @param request - ListLogicDatabasesRequest
   * @returns ListLogicDatabasesResponse
   */
  async listLogicDatabases(request: $_model.ListLogicDatabasesRequest): Promise<$_model.ListLogicDatabasesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listLogicDatabasesWithOptions(request, runtime);
  }

  /**
   * Queries the routing algorithms of a logical table.
   * 
   * @param request - ListLogicTableRouteConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListLogicTableRouteConfigResponse
   */
  async listLogicTableRouteConfigWithOptions(request: $_model.ListLogicTableRouteConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListLogicTableRouteConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.tableId)) {
      query["TableId"] = request.tableId;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListLogicTableRouteConfig",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListLogicTableRouteConfigResponse>(await this.callApi(params, req, runtime), new $_model.ListLogicTableRouteConfigResponse({}));
  }

  /**
   * Queries the routing algorithms of a logical table.
   * 
   * @param request - ListLogicTableRouteConfigRequest
   * @returns ListLogicTableRouteConfigResponse
   */
  async listLogicTableRouteConfig(request: $_model.ListLogicTableRouteConfigRequest): Promise<$_model.ListLogicTableRouteConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listLogicTableRouteConfigWithOptions(request, runtime);
  }

  /**
   * Queries the details of the logical tables in a logical database.
   * 
   * @param request - ListLogicTablesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListLogicTablesResponse
   */
  async listLogicTablesWithOptions(request: $_model.ListLogicTablesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListLogicTablesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.databaseId)) {
      query["DatabaseId"] = request.databaseId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.returnGuid)) {
      query["ReturnGuid"] = request.returnGuid;
    }

    if (!$dara.isNull(request.searchName)) {
      query["SearchName"] = request.searchName;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListLogicTables",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListLogicTablesResponse>(await this.callApi(params, req, runtime), new $_model.ListLogicTablesResponse({}));
  }

  /**
   * Queries the details of the logical tables in a logical database.
   * 
   * @param request - ListLogicTablesRequest
   * @returns ListLogicTablesResponse
   */
  async listLogicTables(request: $_model.ListLogicTablesRequest): Promise<$_model.ListLogicTablesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listLogicTablesWithOptions(request, runtime);
  }

  /**
   * Queries a list of categories
   * 
   * @param request - ListMetaCategoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMetaCategoryResponse
   */
  async listMetaCategoryWithOptions(request: $_model.ListMetaCategoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListMetaCategoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.parentCategoryId)) {
      query["ParentCategoryId"] = request.parentCategoryId;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMetaCategory",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMetaCategoryResponse>(await this.callApi(params, req, runtime), new $_model.ListMetaCategoryResponse({}));
  }

  /**
   * Queries a list of categories
   * 
   * @param request - ListMetaCategoryRequest
   * @returns ListMetaCategoryResponse
   */
  async listMetaCategory(request: $_model.ListMetaCategoryRequest): Promise<$_model.ListMetaCategoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listMetaCategoryWithOptions(request, runtime);
  }

  /**
   * Queries tickets in Data Management (DMS).
   * 
   * @param request - ListOrdersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListOrdersResponse
   */
  async listOrdersWithOptions(request: $_model.ListOrdersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListOrdersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.orderResultType)) {
      query["OrderResultType"] = request.orderResultType;
    }

    if (!$dara.isNull(request.orderStatus)) {
      query["OrderStatus"] = request.orderStatus;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.pluginType)) {
      query["PluginType"] = request.pluginType;
    }

    if (!$dara.isNull(request.searchContent)) {
      query["SearchContent"] = request.searchContent;
    }

    if (!$dara.isNull(request.searchDateType)) {
      query["SearchDateType"] = request.searchDateType;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListOrders",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListOrdersResponse>(await this.callApi(params, req, runtime), new $_model.ListOrdersResponse({}));
  }

  /**
   * Queries tickets in Data Management (DMS).
   * 
   * @param request - ListOrdersRequest
   * @returns ListOrdersResponse
   */
  async listOrders(request: $_model.ListOrdersRequest): Promise<$_model.ListOrdersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listOrdersWithOptions(request, runtime);
  }

  /**
   * Queries the proxies that are generated by the secure access proxy feature.
   * 
   * @param request - ListProxiesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListProxiesResponse
   */
  async listProxiesWithOptions(request: $_model.ListProxiesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListProxiesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListProxies",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListProxiesResponse>(await this.callApi(params, req, runtime), new $_model.ListProxiesResponse({}));
  }

  /**
   * Queries the proxies that are generated by the secure access proxy feature.
   * 
   * @param request - ListProxiesRequest
   * @returns ListProxiesResponse
   */
  async listProxies(request: $_model.ListProxiesRequest): Promise<$_model.ListProxiesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listProxiesWithOptions(request, runtime);
  }

  /**
   * Queries information about users that are authorized to access a database instance by using the secure access proxy feature.
   * 
   * @param request - ListProxyAccessesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListProxyAccessesResponse
   */
  async listProxyAccessesWithOptions(request: $_model.ListProxyAccessesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListProxyAccessesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.proxyId)) {
      query["ProxyId"] = request.proxyId;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListProxyAccesses",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListProxyAccessesResponse>(await this.callApi(params, req, runtime), new $_model.ListProxyAccessesResponse({}));
  }

  /**
   * Queries information about users that are authorized to access a database instance by using the secure access proxy feature.
   * 
   * @param request - ListProxyAccessesRequest
   * @returns ListProxyAccessesResponse
   */
  async listProxyAccesses(request: $_model.ListProxyAccessesRequest): Promise<$_model.ListProxyAccessesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listProxyAccessesWithOptions(request, runtime);
  }

  /**
   * 操作审计-数据安全代理SQL执行列表
   * 
   * @param request - ListProxySQLExecAuditLogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListProxySQLExecAuditLogResponse
   */
  async listProxySQLExecAuditLogWithOptions(request: $_model.ListProxySQLExecAuditLogRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListProxySQLExecAuditLogResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.execState)) {
      query["ExecState"] = request.execState;
    }

    if (!$dara.isNull(request.opUserName)) {
      query["OpUserName"] = request.opUserName;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.SQLType)) {
      query["SQLType"] = request.SQLType;
    }

    if (!$dara.isNull(request.searchName)) {
      query["SearchName"] = request.searchName;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListProxySQLExecAuditLog",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListProxySQLExecAuditLogResponse>(await this.callApi(params, req, runtime), new $_model.ListProxySQLExecAuditLogResponse({}));
  }

  /**
   * 操作审计-数据安全代理SQL执行列表
   * 
   * @param request - ListProxySQLExecAuditLogRequest
   * @returns ListProxySQLExecAuditLogResponse
   */
  async listProxySQLExecAuditLog(request: $_model.ListProxySQLExecAuditLogRequest): Promise<$_model.ListProxySQLExecAuditLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listProxySQLExecAuditLogWithOptions(request, runtime);
  }

  /**
   * Queries the custom service level agreement (SLA) rules.
   * 
   * @param request - ListSLARulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSLARulesResponse
   */
  async listSLARulesWithOptions(request: $_model.ListSLARulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSLARulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dagId)) {
      query["DagId"] = request.dagId;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSLARules",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSLARulesResponse>(await this.callApi(params, req, runtime), new $_model.ListSLARulesResponse({}));
  }

  /**
   * Queries the custom service level agreement (SLA) rules.
   * 
   * @param request - ListSLARulesRequest
   * @returns ListSLARulesResponse
   */
  async listSLARules(request: $_model.ListSLARulesRequest): Promise<$_model.ListSLARulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSLARulesWithOptions(request, runtime);
  }

  /**
   * Queries SQL statements that were written on the SQLConsole tab.
   * 
   * @param request - ListSQLExecAuditLogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSQLExecAuditLogResponse
   */
  async listSQLExecAuditLogWithOptions(request: $_model.ListSQLExecAuditLogRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSQLExecAuditLogResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.execState)) {
      query["ExecState"] = request.execState;
    }

    if (!$dara.isNull(request.opUserName)) {
      query["OpUserName"] = request.opUserName;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.searchName)) {
      query["SearchName"] = request.searchName;
    }

    if (!$dara.isNull(request.sqlType)) {
      query["SqlType"] = request.sqlType;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSQLExecAuditLog",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSQLExecAuditLogResponse>(await this.callApi(params, req, runtime), new $_model.ListSQLExecAuditLogResponse({}));
  }

  /**
   * Queries SQL statements that were written on the SQLConsole tab.
   * 
   * @param request - ListSQLExecAuditLogRequest
   * @returns ListSQLExecAuditLogResponse
   */
  async listSQLExecAuditLog(request: $_model.ListSQLExecAuditLogRequest): Promise<$_model.ListSQLExecAuditLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSQLExecAuditLogWithOptions(request, runtime);
  }

  /**
   * Queries the details of the SQL statements that are involved in an SQL review ticket.
   * 
   * @remarks
   * For more information about the SQL review feature, see [SQL review](https://help.aliyun.com/document_detail/60374.html).
   * 
   * @param tmpReq - ListSQLReviewOriginSQLRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSQLReviewOriginSQLResponse
   */
  async listSQLReviewOriginSQLWithOptions(tmpReq: $_model.ListSQLReviewOriginSQLRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSQLReviewOriginSQLResponse> {
    tmpReq.validate();
    let request = new $_model.ListSQLReviewOriginSQLShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.orderActionDetail)) {
      request.orderActionDetailShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.orderActionDetail, "OrderActionDetail", "json");
    }

    let query = { };
    if (!$dara.isNull(request.orderActionDetailShrink)) {
      query["OrderActionDetail"] = request.orderActionDetailShrink;
    }

    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSQLReviewOriginSQL",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSQLReviewOriginSQLResponse>(await this.callApi(params, req, runtime), new $_model.ListSQLReviewOriginSQLResponse({}));
  }

  /**
   * Queries the details of the SQL statements that are involved in an SQL review ticket.
   * 
   * @remarks
   * For more information about the SQL review feature, see [SQL review](https://help.aliyun.com/document_detail/60374.html).
   * 
   * @param request - ListSQLReviewOriginSQLRequest
   * @returns ListSQLReviewOriginSQLResponse
   */
  async listSQLReviewOriginSQL(request: $_model.ListSQLReviewOriginSQLRequest): Promise<$_model.ListSQLReviewOriginSQLResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSQLReviewOriginSQLWithOptions(request, runtime);
  }

  /**
   * Queries business scenarios.
   * 
   * @param request - ListScenariosRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListScenariosResponse
   */
  async listScenariosWithOptions(request: $_model.ListScenariosRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListScenariosResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListScenarios",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListScenariosResponse>(await this.callApi(params, req, runtime), new $_model.ListScenariosResponse({}));
  }

  /**
   * Queries business scenarios.
   * 
   * @param request - ListScenariosRequest
   * @returns ListScenariosResponse
   */
  async listScenarios(request: $_model.ListScenariosRequest): Promise<$_model.ListScenariosResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listScenariosWithOptions(request, runtime);
  }

  /**
   * Queries the information about a sensitive field. The information includes the masking algorithm ID, masking algorithm name, and field security level.
   * 
   * @param request - ListSensitiveColumnInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSensitiveColumnInfoResponse
   */
  async listSensitiveColumnInfoWithOptions(request: $_model.ListSensitiveColumnInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSensitiveColumnInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.columnName)) {
      query["ColumnName"] = request.columnName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.schemaName)) {
      query["SchemaName"] = request.schemaName;
    }

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSensitiveColumnInfo",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSensitiveColumnInfoResponse>(await this.callApi(params, req, runtime), new $_model.ListSensitiveColumnInfoResponse({}));
  }

  /**
   * Queries the information about a sensitive field. The information includes the masking algorithm ID, masking algorithm name, and field security level.
   * 
   * @param request - ListSensitiveColumnInfoRequest
   * @returns ListSensitiveColumnInfoResponse
   */
  async listSensitiveColumnInfo(request: $_model.ListSensitiveColumnInfoRequest): Promise<$_model.ListSensitiveColumnInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSensitiveColumnInfoWithOptions(request, runtime);
  }

  /**
   * Queries sensitive fields in a table of a database.
   * 
   * @param request - ListSensitiveColumnsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSensitiveColumnsResponse
   */
  async listSensitiveColumnsWithOptions(request: $_model.ListSensitiveColumnsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSensitiveColumnsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.columnName)) {
      query["ColumnName"] = request.columnName;
    }

    if (!$dara.isNull(request.dbId)) {
      query["DbId"] = request.dbId;
    }

    if (!$dara.isNull(request.logic)) {
      query["Logic"] = request.logic;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.schemaName)) {
      query["SchemaName"] = request.schemaName;
    }

    if (!$dara.isNull(request.securityLevel)) {
      query["SecurityLevel"] = request.securityLevel;
    }

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSensitiveColumns",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSensitiveColumnsResponse>(await this.callApi(params, req, runtime), new $_model.ListSensitiveColumnsResponse({}));
  }

  /**
   * Queries sensitive fields in a table of a database.
   * 
   * @param request - ListSensitiveColumnsRequest
   * @returns ListSensitiveColumnsResponse
   */
  async listSensitiveColumns(request: $_model.ListSensitiveColumnsRequest): Promise<$_model.ListSensitiveColumnsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSensitiveColumnsWithOptions(request, runtime);
  }

  /**
   * Queries the details of a sensitive field.
   * 
   * @param request - ListSensitiveColumnsDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSensitiveColumnsDetailResponse
   */
  async listSensitiveColumnsDetailWithOptions(request: $_model.ListSensitiveColumnsDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSensitiveColumnsDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.columnName)) {
      query["ColumnName"] = request.columnName;
    }

    if (!$dara.isNull(request.dbId)) {
      query["DbId"] = request.dbId;
    }

    if (!$dara.isNull(request.logic)) {
      query["Logic"] = request.logic;
    }

    if (!$dara.isNull(request.schemaName)) {
      query["SchemaName"] = request.schemaName;
    }

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSensitiveColumnsDetail",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSensitiveColumnsDetailResponse>(await this.callApi(params, req, runtime), new $_model.ListSensitiveColumnsDetailResponse({}));
  }

  /**
   * Queries the details of a sensitive field.
   * 
   * @param request - ListSensitiveColumnsDetailRequest
   * @returns ListSensitiveColumnsDetailResponse
   */
  async listSensitiveColumnsDetail(request: $_model.ListSensitiveColumnsDetailRequest): Promise<$_model.ListSensitiveColumnsDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSensitiveColumnsDetailWithOptions(request, runtime);
  }

  /**
   * Queries the audit logs for sensitive information.
   * 
   * @param request - ListSensitiveDataAuditLogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSensitiveDataAuditLogResponse
   */
  async listSensitiveDataAuditLogWithOptions(request: $_model.ListSensitiveDataAuditLogRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSensitiveDataAuditLogResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.columnName)) {
      query["ColumnName"] = request.columnName;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.moduleName)) {
      query["ModuleName"] = request.moduleName;
    }

    if (!$dara.isNull(request.opUserName)) {
      query["OpUserName"] = request.opUserName;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSensitiveDataAuditLog",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSensitiveDataAuditLogResponse>(await this.callApi(params, req, runtime), new $_model.ListSensitiveDataAuditLogResponse({}));
  }

  /**
   * Queries the audit logs for sensitive information.
   * 
   * @param request - ListSensitiveDataAuditLogRequest
   * @returns ListSensitiveDataAuditLogResponse
   */
  async listSensitiveDataAuditLog(request: $_model.ListSensitiveDataAuditLogRequest): Promise<$_model.ListSensitiveDataAuditLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSensitiveDataAuditLogWithOptions(request, runtime);
  }

  /**
   * Queries the sensitivity levels of a classification template.
   * 
   * @param request - ListSensitivityLevelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSensitivityLevelResponse
   */
  async listSensitivityLevelWithOptions(request: $_model.ListSensitivityLevelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSensitivityLevelResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSensitivityLevel",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSensitivityLevelResponse>(await this.callApi(params, req, runtime), new $_model.ListSensitivityLevelResponse({}));
  }

  /**
   * Queries the sensitivity levels of a classification template.
   * 
   * @param request - ListSensitivityLevelRequest
   * @returns ListSensitivityLevelResponse
   */
  async listSensitivityLevel(request: $_model.ListSensitivityLevelRequest): Promise<$_model.ListSensitivityLevelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSensitivityLevelWithOptions(request, runtime);
  }

  /**
   * Queries security rule sets.
   * 
   * @param request - ListStandardGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListStandardGroupsResponse
   */
  async listStandardGroupsWithOptions(request: $_model.ListStandardGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListStandardGroupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListStandardGroups",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListStandardGroupsResponse>(await this.callApi(params, req, runtime), new $_model.ListStandardGroupsResponse({}));
  }

  /**
   * Queries security rule sets.
   * 
   * @param request - ListStandardGroupsRequest
   * @returns ListStandardGroupsResponse
   */
  async listStandardGroups(request: $_model.ListStandardGroupsRequest): Promise<$_model.ListStandardGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listStandardGroupsWithOptions(request, runtime);
  }

  /**
   * Queries the details about fields in a table.
   * 
   * @param request - ListTableColumnsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTableColumnsResponse
   */
  async listTableColumnsWithOptions(request: $_model.ListTableColumnsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTableColumnsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbId)) {
      query["DbId"] = request.dbId;
    }

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    if (!$dara.isNull(request.tableSchemaName)) {
      query["TableSchemaName"] = request.tableSchemaName;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTableColumns",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTableColumnsResponse>(await this.callApi(params, req, runtime), new $_model.ListTableColumnsResponse({}));
  }

  /**
   * Queries the details about fields in a table.
   * 
   * @param request - ListTableColumnsRequest
   * @returns ListTableColumnsResponse
   */
  async listTableColumns(request: $_model.ListTableColumnsRequest): Promise<$_model.ListTableColumnsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTableColumnsWithOptions(request, runtime);
  }

  /**
   * Queries the tables in a database.
   * 
   * @remarks
   * You can call this operation only for database instances whose control mode is Security Collaboration.
   * 
   * @param request - ListTablesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTablesResponse
   */
  async listTablesWithOptions(request: $_model.ListTablesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTablesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.databaseId)) {
      query["DatabaseId"] = request.databaseId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.realLoginUserUid)) {
      query["RealLoginUserUid"] = request.realLoginUserUid;
    }

    if (!$dara.isNull(request.returnGuid)) {
      query["ReturnGuid"] = request.returnGuid;
    }

    if (!$dara.isNull(request.searchName)) {
      query["SearchName"] = request.searchName;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTables",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTablesResponse>(await this.callApi(params, req, runtime), new $_model.ListTablesResponse({}));
  }

  /**
   * Queries the tables in a database.
   * 
   * @remarks
   * You can call this operation only for database instances whose control mode is Security Collaboration.
   * 
   * @param request - ListTablesRequest
   * @returns ListTablesResponse
   */
  async listTables(request: $_model.ListTablesRequest): Promise<$_model.ListTablesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTablesWithOptions(request, runtime);
  }

  /**
   * Obtains the list of tables in a category.
   * 
   * @param request - ListTablesInCategoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTablesInCategoryResponse
   */
  async listTablesInCategoryWithOptions(request: $_model.ListTablesInCategoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTablesInCategoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.categoryId)) {
      query["CategoryId"] = request.categoryId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTablesInCategory",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTablesInCategoryResponse>(await this.callApi(params, req, runtime), new $_model.ListTablesInCategoryResponse({}));
  }

  /**
   * Obtains the list of tables in a category.
   * 
   * @param request - ListTablesInCategoryRequest
   * @returns ListTablesInCategoryResponse
   */
  async listTablesInCategory(request: $_model.ListTablesInCategoryRequest): Promise<$_model.ListTablesInCategoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTablesInCategoryWithOptions(request, runtime);
  }

  /**
   * 任务编排获取任务流列表
   * 
   * @param request - ListTaskFlowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTaskFlowResponse
   */
  async listTaskFlowWithOptions(request: $_model.ListTaskFlowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTaskFlowResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTaskFlow",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTaskFlowResponse>(await this.callApi(params, req, runtime), new $_model.ListTaskFlowResponse({}));
  }

  /**
   * 任务编排获取任务流列表
   * 
   * @param request - ListTaskFlowRequest
   * @returns ListTaskFlowResponse
   */
  async listTaskFlow(request: $_model.ListTaskFlowRequest): Promise<$_model.ListTaskFlowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTaskFlowWithOptions(request, runtime);
  }

  /**
   * Queries the constants for a task flow.
   * 
   * @param request - ListTaskFlowConstantsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTaskFlowConstantsResponse
   */
  async listTaskFlowConstantsWithOptions(request: $_model.ListTaskFlowConstantsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTaskFlowConstantsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dagId)) {
      query["DagId"] = request.dagId;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTaskFlowConstants",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTaskFlowConstantsResponse>(await this.callApi(params, req, runtime), new $_model.ListTaskFlowConstantsResponse({}));
  }

  /**
   * Queries the constants for a task flow.
   * 
   * @param request - ListTaskFlowConstantsRequest
   * @returns ListTaskFlowConstantsResponse
   */
  async listTaskFlowConstants(request: $_model.ListTaskFlowConstantsRequest): Promise<$_model.ListTaskFlowConstantsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTaskFlowConstantsWithOptions(request, runtime);
  }

  /**
   * Queries the users that are involved in a specified task flow.
   * 
   * @param request - ListTaskFlowCooperatorsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTaskFlowCooperatorsResponse
   */
  async listTaskFlowCooperatorsWithOptions(request: $_model.ListTaskFlowCooperatorsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTaskFlowCooperatorsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dagId)) {
      query["DagId"] = request.dagId;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTaskFlowCooperators",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTaskFlowCooperatorsResponse>(await this.callApi(params, req, runtime), new $_model.ListTaskFlowCooperatorsResponse({}));
  }

  /**
   * Queries the users that are involved in a specified task flow.
   * 
   * @param request - ListTaskFlowCooperatorsRequest
   * @returns ListTaskFlowCooperatorsResponse
   */
  async listTaskFlowCooperators(request: $_model.ListTaskFlowCooperatorsRequest): Promise<$_model.ListTaskFlowCooperatorsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTaskFlowCooperatorsWithOptions(request, runtime);
  }

  /**
   * Queries the edges of the directed acyclic graph (DAG) for a specified task flow based on multiple conditions.
   * 
   * @remarks
   * This operation is used for multi-condition query. You can call this operation to query the edges of a specified task flow that meet all specified conditions.
   * 
   * @param request - ListTaskFlowEdgesByConditionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTaskFlowEdgesByConditionResponse
   */
  async listTaskFlowEdgesByConditionWithOptions(request: $_model.ListTaskFlowEdgesByConditionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTaskFlowEdgesByConditionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dagId)) {
      query["DagId"] = request.dagId;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.nodeEnd)) {
      query["NodeEnd"] = request.nodeEnd;
    }

    if (!$dara.isNull(request.nodeFrom)) {
      query["NodeFrom"] = request.nodeFrom;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTaskFlowEdgesByCondition",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTaskFlowEdgesByConditionResponse>(await this.callApi(params, req, runtime), new $_model.ListTaskFlowEdgesByConditionResponse({}));
  }

  /**
   * Queries the edges of the directed acyclic graph (DAG) for a specified task flow based on multiple conditions.
   * 
   * @remarks
   * This operation is used for multi-condition query. You can call this operation to query the edges of a specified task flow that meet all specified conditions.
   * 
   * @param request - ListTaskFlowEdgesByConditionRequest
   * @returns ListTaskFlowEdgesByConditionResponse
   */
  async listTaskFlowEdgesByCondition(request: $_model.ListTaskFlowEdgesByConditionRequest): Promise<$_model.ListTaskFlowEdgesByConditionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTaskFlowEdgesByConditionWithOptions(request, runtime);
  }

  /**
   * Queries the execution records of a task flow.
   * 
   * @param request - ListTaskFlowInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTaskFlowInstanceResponse
   */
  async listTaskFlowInstanceWithOptions(request: $_model.ListTaskFlowInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTaskFlowInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dagId)) {
      query["DagId"] = request.dagId;
    }

    if (!$dara.isNull(request.pageIndex)) {
      query["PageIndex"] = request.pageIndex;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.startTimeBegin)) {
      query["StartTimeBegin"] = request.startTimeBegin;
    }

    if (!$dara.isNull(request.startTimeEnd)) {
      query["StartTimeEnd"] = request.startTimeEnd;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.triggerType)) {
      query["TriggerType"] = request.triggerType;
    }

    if (!$dara.isNull(request.useBizDate)) {
      query["UseBizDate"] = request.useBizDate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTaskFlowInstance",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTaskFlowInstanceResponse>(await this.callApi(params, req, runtime), new $_model.ListTaskFlowInstanceResponse({}));
  }

  /**
   * Queries the execution records of a task flow.
   * 
   * @param request - ListTaskFlowInstanceRequest
   * @returns ListTaskFlowInstanceResponse
   */
  async listTaskFlowInstance(request: $_model.ListTaskFlowInstanceRequest): Promise<$_model.ListTaskFlowInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTaskFlowInstanceWithOptions(request, runtime);
  }

  /**
   * Queries the time variables for a task flow.
   * 
   * @param request - ListTaskFlowTimeVariablesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTaskFlowTimeVariablesResponse
   */
  async listTaskFlowTimeVariablesWithOptions(request: $_model.ListTaskFlowTimeVariablesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTaskFlowTimeVariablesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dagId)) {
      query["DagId"] = request.dagId;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTaskFlowTimeVariables",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTaskFlowTimeVariablesResponse>(await this.callApi(params, req, runtime), new $_model.ListTaskFlowTimeVariablesResponse({}));
  }

  /**
   * Queries the time variables for a task flow.
   * 
   * @param request - ListTaskFlowTimeVariablesRequest
   * @returns ListTaskFlowTimeVariablesResponse
   */
  async listTaskFlowTimeVariables(request: $_model.ListTaskFlowTimeVariablesRequest): Promise<$_model.ListTaskFlowTimeVariablesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTaskFlowTimeVariablesWithOptions(request, runtime);
  }

  /**
   * Queries task flows by page.
   * 
   * @param tmpReq - ListTaskFlowsByPageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTaskFlowsByPageResponse
   */
  async listTaskFlowsByPageWithOptions(tmpReq: $_model.ListTaskFlowsByPageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTaskFlowsByPageResponse> {
    tmpReq.validate();
    let request = new $_model.ListTaskFlowsByPageShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.dagIdList)) {
      request.dagIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.dagIdList, "DagIdList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.dagIdListShrink)) {
      query["DagIdList"] = request.dagIdListShrink;
    }

    if (!$dara.isNull(request.pageIndex)) {
      query["PageIndex"] = request.pageIndex;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.scenarioId)) {
      query["ScenarioId"] = request.scenarioId;
    }

    if (!$dara.isNull(request.searchKey)) {
      query["SearchKey"] = request.searchKey;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTaskFlowsByPage",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTaskFlowsByPageResponse>(await this.callApi(params, req, runtime), new $_model.ListTaskFlowsByPageResponse({}));
  }

  /**
   * Queries task flows by page.
   * 
   * @param request - ListTaskFlowsByPageRequest
   * @returns ListTaskFlowsByPageResponse
   */
  async listTaskFlowsByPage(request: $_model.ListTaskFlowsByPageRequest): Promise<$_model.ListTaskFlowsByPageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTaskFlowsByPageWithOptions(request, runtime);
  }

  /**
   * Queries the tasks in a specified task flow.
   * 
   * @param request - ListTasksInTaskFlowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTasksInTaskFlowResponse
   */
  async listTasksInTaskFlowWithOptions(request: $_model.ListTasksInTaskFlowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTasksInTaskFlowResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dagId)) {
      query["DagId"] = request.dagId;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTasksInTaskFlow",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTasksInTaskFlowResponse>(await this.callApi(params, req, runtime), new $_model.ListTasksInTaskFlowResponse({}));
  }

  /**
   * Queries the tasks in a specified task flow.
   * 
   * @param request - ListTasksInTaskFlowRequest
   * @returns ListTasksInTaskFlowResponse
   */
  async listTasksInTaskFlow(request: $_model.ListTasksInTaskFlowRequest): Promise<$_model.ListTasksInTaskFlowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTasksInTaskFlowWithOptions(request, runtime);
  }

  /**
   * Obtains
   * 
   * @param request - ListUserOwnedResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUserOwnedResourcesResponse
   */
  async listUserOwnedResourcesWithOptions(request: $_model.ListUserOwnedResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListUserOwnedResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.databaseName)) {
      query["DatabaseName"] = request.databaseName;
    }

    if (!$dara.isNull(request.dbType)) {
      query["DbType"] = request.dbType;
    }

    if (!$dara.isNull(request.envType)) {
      query["EnvType"] = request.envType;
    }

    if (!$dara.isNull(request.logic)) {
      query["Logic"] = request.logic;
    }

    if (!$dara.isNull(request.ownerType)) {
      query["OwnerType"] = request.ownerType;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUserOwnedResources",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListUserOwnedResourcesResponse>(await this.callApi(params, req, runtime), new $_model.ListUserOwnedResourcesResponse({}));
  }

  /**
   * Obtains
   * 
   * @param request - ListUserOwnedResourcesRequest
   * @returns ListUserOwnedResourcesResponse
   */
  async listUserOwnedResources(request: $_model.ListUserOwnedResourcesRequest): Promise<$_model.ListUserOwnedResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listUserOwnedResourcesWithOptions(request, runtime);
  }

  /**
   * Queries the permissions of a specific user on a database or a table.
   * 
   * @param request - ListUserPermissionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUserPermissionsResponse
   */
  async listUserPermissionsWithOptions(request: $_model.ListUserPermissionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListUserPermissionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.databaseName)) {
      query["DatabaseName"] = request.databaseName;
    }

    if (!$dara.isNull(request.dbType)) {
      query["DbType"] = request.dbType;
    }

    if (!$dara.isNull(request.envType)) {
      query["EnvType"] = request.envType;
    }

    if (!$dara.isNull(request.logic)) {
      query["Logic"] = request.logic;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.permType)) {
      query["PermType"] = request.permType;
    }

    if (!$dara.isNull(request.searchKey)) {
      query["SearchKey"] = request.searchKey;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUserPermissions",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListUserPermissionsResponse>(await this.callApi(params, req, runtime), new $_model.ListUserPermissionsResponse({}));
  }

  /**
   * Queries the permissions of a specific user on a database or a table.
   * 
   * @param request - ListUserPermissionsRequest
   * @returns ListUserPermissionsResponse
   */
  async listUserPermissions(request: $_model.ListUserPermissionsRequest): Promise<$_model.ListUserPermissionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listUserPermissionsWithOptions(request, runtime);
  }

  /**
   * 获取用户租户列表
   * 
   * @param request - ListUserTenantsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUserTenantsResponse
   */
  async listUserTenantsWithOptions(request: $_model.ListUserTenantsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListUserTenantsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUserTenants",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListUserTenantsResponse>(await this.callApi(params, req, runtime), new $_model.ListUserTenantsResponse({}));
  }

  /**
   * 获取用户租户列表
   * 
   * @param request - ListUserTenantsRequest
   * @returns ListUserTenantsResponse
   */
  async listUserTenants(request: $_model.ListUserTenantsRequest): Promise<$_model.ListUserTenantsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listUserTenantsWithOptions(request, runtime);
  }

  /**
   * Queries the details of users.
   * 
   * @param request - ListUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUsersResponse
   */
  async listUsersWithOptions(request: $_model.ListUsersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListUsersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.role)) {
      query["Role"] = request.role;
    }

    if (!$dara.isNull(request.searchKey)) {
      query["SearchKey"] = request.searchKey;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.userState)) {
      query["UserState"] = request.userState;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUsers",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListUsersResponse>(await this.callApi(params, req, runtime), new $_model.ListUsersResponse({}));
  }

  /**
   * Queries the details of users.
   * 
   * @param request - ListUsersRequest
   * @returns ListUsersResponse
   */
  async listUsers(request: $_model.ListUsersRequest): Promise<$_model.ListUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listUsersWithOptions(request, runtime);
  }

  /**
   * Queries approval nodes.
   * 
   * @param request - ListWorkFlowNodesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListWorkFlowNodesResponse
   */
  async listWorkFlowNodesWithOptions(request: $_model.ListWorkFlowNodesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListWorkFlowNodesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.searchName)) {
      query["SearchName"] = request.searchName;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListWorkFlowNodes",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListWorkFlowNodesResponse>(await this.callApi(params, req, runtime), new $_model.ListWorkFlowNodesResponse({}));
  }

  /**
   * Queries approval nodes.
   * 
   * @param request - ListWorkFlowNodesRequest
   * @returns ListWorkFlowNodesResponse
   */
  async listWorkFlowNodes(request: $_model.ListWorkFlowNodesRequest): Promise<$_model.ListWorkFlowNodesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listWorkFlowNodesWithOptions(request, runtime);
  }

  /**
   * Queries approval templates.
   * 
   * @param request - ListWorkFlowTemplatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListWorkFlowTemplatesResponse
   */
  async listWorkFlowTemplatesWithOptions(request: $_model.ListWorkFlowTemplatesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListWorkFlowTemplatesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.searchName)) {
      query["SearchName"] = request.searchName;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListWorkFlowTemplates",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListWorkFlowTemplatesResponse>(await this.callApi(params, req, runtime), new $_model.ListWorkFlowTemplatesResponse({}));
  }

  /**
   * Queries approval templates.
   * 
   * @param request - ListWorkFlowTemplatesRequest
   * @returns ListWorkFlowTemplatesResponse
   */
  async listWorkFlowTemplates(request: $_model.ListWorkFlowTemplatesRequest): Promise<$_model.ListWorkFlowTemplatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listWorkFlowTemplatesWithOptions(request, runtime);
  }

  /**
   * Queries a list of workspaces of the tenant.
   * 
   * @param request - ListWorkspacesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListWorkspacesResponse
   */
  async listWorkspacesWithOptions(request: $_model.ListWorkspacesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListWorkspacesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.alreadyJoined)) {
      query["AlreadyJoined"] = request.alreadyJoined;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    if (!$dara.isNull(request.searchKey)) {
      query["SearchKey"] = request.searchKey;
    }

    if (!$dara.isNull(request.serviceAccountId)) {
      query["ServiceAccountId"] = request.serviceAccountId;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListWorkspaces",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListWorkspacesResponse>(await this.callApi(params, req, runtime), new $_model.ListWorkspacesResponse({}));
  }

  /**
   * Queries a list of workspaces of the tenant.
   * 
   * @param request - ListWorkspacesRequest
   * @returns ListWorkspacesResponse
   */
  async listWorkspaces(request: $_model.ListWorkspacesRequest): Promise<$_model.ListWorkspacesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listWorkspacesWithOptions(request, runtime);
  }

  /**
   * Sets the status of a task flow to "Successful".
   * 
   * @param request - MakeTaskFlowInstanceSuccessRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MakeTaskFlowInstanceSuccessResponse
   */
  async makeTaskFlowInstanceSuccessWithOptions(request: $_model.MakeTaskFlowInstanceSuccessRequest, runtime: $dara.RuntimeOptions): Promise<$_model.MakeTaskFlowInstanceSuccessResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dagId)) {
      query["DagId"] = request.dagId;
    }

    if (!$dara.isNull(request.dagInstanceId)) {
      query["DagInstanceId"] = request.dagInstanceId;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "MakeTaskFlowInstanceSuccess",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.MakeTaskFlowInstanceSuccessResponse>(await this.callApi(params, req, runtime), new $_model.MakeTaskFlowInstanceSuccessResponse({}));
  }

  /**
   * Sets the status of a task flow to "Successful".
   * 
   * @param request - MakeTaskFlowInstanceSuccessRequest
   * @returns MakeTaskFlowInstanceSuccessResponse
   */
  async makeTaskFlowInstanceSuccess(request: $_model.MakeTaskFlowInstanceSuccessRequest): Promise<$_model.MakeTaskFlowInstanceSuccessResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.makeTaskFlowInstanceSuccessWithOptions(request, runtime);
  }

  /**
   * Modifies the SQL script that is submitted by using a data change ticket.
   * 
   * @param request - ModifyDataCorrectExecSQLRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDataCorrectExecSQLResponse
   */
  async modifyDataCorrectExecSQLWithOptions(request: $_model.ModifyDataCorrectExecSQLRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDataCorrectExecSQLResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.execSQL)) {
      query["ExecSQL"] = request.execSQL;
    }

    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!$dara.isNull(request.realLoginUserUid)) {
      query["RealLoginUserUid"] = request.realLoginUserUid;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDataCorrectExecSQL",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDataCorrectExecSQLResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDataCorrectExecSQLResponse({}));
  }

  /**
   * Modifies the SQL script that is submitted by using a data change ticket.
   * 
   * @param request - ModifyDataCorrectExecSQLRequest
   * @returns ModifyDataCorrectExecSQLResponse
   */
  async modifyDataCorrectExecSQL(request: $_model.ModifyDataCorrectExecSQLRequest): Promise<$_model.ModifyDataCorrectExecSQLResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDataCorrectExecSQLWithOptions(request, runtime);
  }

  /**
   * Modifies the masking rule bound to a specified field.
   * 
   * @param request - ModifyDesensitizationStrategyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDesensitizationStrategyResponse
   */
  async modifyDesensitizationStrategyWithOptions(request: $_model.ModifyDesensitizationStrategyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDesensitizationStrategyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.columnName)) {
      query["ColumnName"] = request.columnName;
    }

    if (!$dara.isNull(request.dbId)) {
      query["DbId"] = request.dbId;
    }

    if (!$dara.isNull(request.isDefault)) {
      query["IsDefault"] = request.isDefault;
    }

    if (!$dara.isNull(request.isLogic)) {
      query["IsLogic"] = request.isLogic;
    }

    if (!$dara.isNull(request.isReset)) {
      query["IsReset"] = request.isReset;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!$dara.isNull(request.schemaName)) {
      query["SchemaName"] = request.schemaName;
    }

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDesensitizationStrategy",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDesensitizationStrategyResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDesensitizationStrategyResponse({}));
  }

  /**
   * Modifies the masking rule bound to a specified field.
   * 
   * @param request - ModifyDesensitizationStrategyRequest
   * @returns ModifyDesensitizationStrategyResponse
   */
  async modifyDesensitizationStrategy(request: $_model.ModifyDesensitizationStrategyRequest): Promise<$_model.ModifyDesensitizationStrategyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDesensitizationStrategyWithOptions(request, runtime);
  }

  /**
   * Modifies the basic and advanced information about a database instance in Data Management (DMS). The basic information includes the hosting mode of the instance, the instance account username and password, and features that are enabled for the instance. The advanced information includes the environment type, the instance name in DMS, and the timeout period for querying and exporting data.
   * 
   * @param request - ModifyInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyInstanceResponse
   */
  async modifyInstanceWithOptions(request: $_model.ModifyInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dataLinkName)) {
      query["DataLinkName"] = request.dataLinkName;
    }

    if (!$dara.isNull(request.databasePassword)) {
      query["DatabasePassword"] = request.databasePassword;
    }

    if (!$dara.isNull(request.databaseUser)) {
      query["DatabaseUser"] = request.databaseUser;
    }

    if (!$dara.isNull(request.dbaId)) {
      query["DbaId"] = request.dbaId;
    }

    if (!$dara.isNull(request.ddlOnline)) {
      query["DdlOnline"] = request.ddlOnline;
    }

    if (!$dara.isNull(request.ecsInstanceId)) {
      query["EcsInstanceId"] = request.ecsInstanceId;
    }

    if (!$dara.isNull(request.ecsRegion)) {
      query["EcsRegion"] = request.ecsRegion;
    }

    if (!$dara.isNull(request.enableSellCommon)) {
      query["EnableSellCommon"] = request.enableSellCommon;
    }

    if (!$dara.isNull(request.enableSellSitd)) {
      query["EnableSellSitd"] = request.enableSellSitd;
    }

    if (!$dara.isNull(request.enableSellStable)) {
      query["EnableSellStable"] = request.enableSellStable;
    }

    if (!$dara.isNull(request.enableSellTrust)) {
      query["EnableSellTrust"] = request.enableSellTrust;
    }

    if (!$dara.isNull(request.envType)) {
      query["EnvType"] = request.envType;
    }

    if (!$dara.isNull(request.exportTimeout)) {
      query["ExportTimeout"] = request.exportTimeout;
    }

    if (!$dara.isNull(request.host)) {
      query["Host"] = request.host;
    }

    if (!$dara.isNull(request.instanceAlias)) {
      query["InstanceAlias"] = request.instanceAlias;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceSource)) {
      query["InstanceSource"] = request.instanceSource;
    }

    if (!$dara.isNull(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!$dara.isNull(request.networkType)) {
      query["NetworkType"] = request.networkType;
    }

    if (!$dara.isNull(request.port)) {
      query["Port"] = request.port;
    }

    if (!$dara.isNull(request.queryTimeout)) {
      query["QueryTimeout"] = request.queryTimeout;
    }

    if (!$dara.isNull(request.safeRule)) {
      query["SafeRule"] = request.safeRule;
    }

    if (!$dara.isNull(request.sid)) {
      query["Sid"] = request.sid;
    }

    if (!$dara.isNull(request.skipTest)) {
      query["SkipTest"] = request.skipTest;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.templateType)) {
      query["TemplateType"] = request.templateType;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.useDsql)) {
      query["UseDsql"] = request.useDsql;
    }

    if (!$dara.isNull(request.useSsl)) {
      query["UseSsl"] = request.useSsl;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyInstance",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyInstanceResponse>(await this.callApi(params, req, runtime), new $_model.ModifyInstanceResponse({}));
  }

  /**
   * Modifies the basic and advanced information about a database instance in Data Management (DMS). The basic information includes the hosting mode of the instance, the instance account username and password, and features that are enabled for the instance. The advanced information includes the environment type, the instance name in DMS, and the timeout period for querying and exporting data.
   * 
   * @param request - ModifyInstanceRequest
   * @returns ModifyInstanceResponse
   */
  async modifyInstance(request: $_model.ModifyInstanceRequest): Promise<$_model.ModifyInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyInstanceWithOptions(request, runtime);
  }

  /**
   * Migrates a task flow to a specified business scenario.
   * 
   * @param request - MoveTaskFlowToScenarioRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MoveTaskFlowToScenarioResponse
   */
  async moveTaskFlowToScenarioWithOptions(request: $_model.MoveTaskFlowToScenarioRequest, runtime: $dara.RuntimeOptions): Promise<$_model.MoveTaskFlowToScenarioResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dagId)) {
      query["DagId"] = request.dagId;
    }

    if (!$dara.isNull(request.scenarioId)) {
      query["ScenarioId"] = request.scenarioId;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "MoveTaskFlowToScenario",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.MoveTaskFlowToScenarioResponse>(await this.callApi(params, req, runtime), new $_model.MoveTaskFlowToScenarioResponse({}));
  }

  /**
   * Migrates a task flow to a specified business scenario.
   * 
   * @param request - MoveTaskFlowToScenarioRequest
   * @returns MoveTaskFlowToScenarioResponse
   */
  async moveTaskFlowToScenario(request: $_model.MoveTaskFlowToScenarioRequest): Promise<$_model.MoveTaskFlowToScenarioResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.moveTaskFlowToScenarioWithOptions(request, runtime);
  }

  /**
   * Unpublishes a published task flow.
   * 
   * @param request - OfflineTaskFlowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OfflineTaskFlowResponse
   */
  async offlineTaskFlowWithOptions(request: $_model.OfflineTaskFlowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OfflineTaskFlowResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dagId)) {
      query["DagId"] = request.dagId;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "OfflineTaskFlow",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OfflineTaskFlowResponse>(await this.callApi(params, req, runtime), new $_model.OfflineTaskFlowResponse({}));
  }

  /**
   * Unpublishes a published task flow.
   * 
   * @param request - OfflineTaskFlowRequest
   * @returns OfflineTaskFlowResponse
   */
  async offlineTaskFlow(request: $_model.OfflineTaskFlowRequest): Promise<$_model.OfflineTaskFlowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.offlineTaskFlowWithOptions(request, runtime);
  }

  /**
   * Analyzes and optimizes the SQL statements in the specified database.
   * 
   * @remarks
   * You can call this operation to analyze and optimize the SQL statements in the specified database.
   * 
   * @param request - OptimizeSqlByMetaAgentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OptimizeSqlByMetaAgentResponse
   */
  async optimizeSqlByMetaAgentWithOptions(request: $_model.OptimizeSqlByMetaAgentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OptimizeSqlByMetaAgentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbId)) {
      query["DbId"] = request.dbId;
    }

    if (!$dara.isNull(request.model)) {
      query["Model"] = request.model;
    }

    if (!$dara.isNull(request.query)) {
      query["Query"] = request.query;
    }

    if (!$dara.isNull(request.sql)) {
      query["Sql"] = request.sql;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "OptimizeSqlByMetaAgent",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OptimizeSqlByMetaAgentResponse>(await this.callApi(params, req, runtime), new $_model.OptimizeSqlByMetaAgentResponse({}));
  }

  /**
   * Analyzes and optimizes the SQL statements in the specified database.
   * 
   * @remarks
   * You can call this operation to analyze and optimize the SQL statements in the specified database.
   * 
   * @param request - OptimizeSqlByMetaAgentRequest
   * @returns OptimizeSqlByMetaAgentResponse
   */
  async optimizeSqlByMetaAgent(request: $_model.OptimizeSqlByMetaAgentRequest): Promise<$_model.OptimizeSqlByMetaAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.optimizeSqlByMetaAgentWithOptions(request, runtime);
  }

  /**
   * Pauses a SQL task for data change.
   * 
   * @remarks
   * You can call this operation only for database instances that are managed in Security Collaboration mode.
   * 
   * @param request - PauseDataCorrectSQLJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PauseDataCorrectSQLJobResponse
   */
  async pauseDataCorrectSQLJobWithOptions(request: $_model.PauseDataCorrectSQLJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PauseDataCorrectSQLJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PauseDataCorrectSQLJob",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PauseDataCorrectSQLJobResponse>(await this.callApi(params, req, runtime), new $_model.PauseDataCorrectSQLJobResponse({}));
  }

  /**
   * Pauses a SQL task for data change.
   * 
   * @remarks
   * You can call this operation only for database instances that are managed in Security Collaboration mode.
   * 
   * @param request - PauseDataCorrectSQLJobRequest
   * @returns PauseDataCorrectSQLJobResponse
   */
  async pauseDataCorrectSQLJob(request: $_model.PauseDataCorrectSQLJobRequest): Promise<$_model.PauseDataCorrectSQLJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.pauseDataCorrectSQLJobWithOptions(request, runtime);
  }

  /**
   * Terminates a SQL result set export task.
   * 
   * @param request - PauseDataExportJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PauseDataExportJobResponse
   */
  async pauseDataExportJobWithOptions(request: $_model.PauseDataExportJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PauseDataExportJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PauseDataExportJob",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PauseDataExportJobResponse>(await this.callApi(params, req, runtime), new $_model.PauseDataExportJobResponse({}));
  }

  /**
   * Terminates a SQL result set export task.
   * 
   * @param request - PauseDataExportJobRequest
   * @returns PauseDataExportJobResponse
   */
  async pauseDataExportJob(request: $_model.PauseDataExportJobRequest): Promise<$_model.PauseDataExportJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.pauseDataExportJobWithOptions(request, runtime);
  }

  /**
   * Previews the approval process of a ticket before the ticket is submitted.
   * 
   * @param request - PreviewWorkflowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PreviewWorkflowResponse
   */
  async previewWorkflowWithOptions(request: $_model.PreviewWorkflowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PreviewWorkflowResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PreviewWorkflow",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PreviewWorkflowResponse>(await this.callApi(params, req, runtime), new $_model.PreviewWorkflowResponse({}));
  }

  /**
   * Previews the approval process of a ticket before the ticket is submitted.
   * 
   * @param request - PreviewWorkflowRequest
   * @returns PreviewWorkflowResponse
   */
  async previewWorkflow(request: $_model.PreviewWorkflowRequest): Promise<$_model.PreviewWorkflowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.previewWorkflowWithOptions(request, runtime);
  }

  /**
   * Publishes and deploys a task flow.
   * 
   * @param request - PublishAndDeployTaskFlowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PublishAndDeployTaskFlowResponse
   */
  async publishAndDeployTaskFlowWithOptions(request: $_model.PublishAndDeployTaskFlowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PublishAndDeployTaskFlowResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dagId)) {
      query["DagId"] = request.dagId;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.versionComments)) {
      query["VersionComments"] = request.versionComments;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PublishAndDeployTaskFlow",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PublishAndDeployTaskFlowResponse>(await this.callApi(params, req, runtime), new $_model.PublishAndDeployTaskFlowResponse({}));
  }

  /**
   * Publishes and deploys a task flow.
   * 
   * @param request - PublishAndDeployTaskFlowRequest
   * @returns PublishAndDeployTaskFlowResponse
   */
  async publishAndDeployTaskFlow(request: $_model.PublishAndDeployTaskFlowRequest): Promise<$_model.PublishAndDeployTaskFlowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.publishAndDeployTaskFlowWithOptions(request, runtime);
  }

  /**
   * Queries the download and parsing progress of data tracking logs.
   * 
   * @param request - QueryDataTrackResultDownloadStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryDataTrackResultDownloadStatusResponse
   */
  async queryDataTrackResultDownloadStatusWithOptions(request: $_model.QueryDataTrackResultDownloadStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryDataTrackResultDownloadStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.downloadKeyId)) {
      query["DownloadKeyId"] = request.downloadKeyId;
    }

    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryDataTrackResultDownloadStatus",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryDataTrackResultDownloadStatusResponse>(await this.callApi(params, req, runtime), new $_model.QueryDataTrackResultDownloadStatusResponse({}));
  }

  /**
   * Queries the download and parsing progress of data tracking logs.
   * 
   * @param request - QueryDataTrackResultDownloadStatusRequest
   * @returns QueryDataTrackResultDownloadStatusResponse
   */
  async queryDataTrackResultDownloadStatus(request: $_model.QueryDataTrackResultDownloadStatusRequest): Promise<$_model.QueryDataTrackResultDownloadStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryDataTrackResultDownloadStatusWithOptions(request, runtime);
  }

  /**
   * 部署任务流的历史版本
   * 
   * @param request - ReDeployLhDagVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReDeployLhDagVersionResponse
   */
  async reDeployLhDagVersionWithOptions(request: $_model.ReDeployLhDagVersionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReDeployLhDagVersionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dagId)) {
      query["DagId"] = request.dagId;
    }

    if (!$dara.isNull(request.dagVersion)) {
      query["DagVersion"] = request.dagVersion;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReDeployLhDagVersion",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReDeployLhDagVersionResponse>(await this.callApi(params, req, runtime), new $_model.ReDeployLhDagVersionResponse({}));
  }

  /**
   * 部署任务流的历史版本
   * 
   * @param request - ReDeployLhDagVersionRequest
   * @returns ReDeployLhDagVersionResponse
   */
  async reDeployLhDagVersion(request: $_model.ReDeployLhDagVersionRequest): Promise<$_model.ReDeployLhDagVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.reDeployLhDagVersionWithOptions(request, runtime);
  }

  /**
   * Reruns a task flow instance.
   * 
   * @param request - ReRunTaskFlowInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReRunTaskFlowInstanceResponse
   */
  async reRunTaskFlowInstanceWithOptions(request: $_model.ReRunTaskFlowInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReRunTaskFlowInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dagId)) {
      query["DagId"] = request.dagId;
    }

    if (!$dara.isNull(request.dagInstanceId)) {
      query["DagInstanceId"] = request.dagInstanceId;
    }

    if (!$dara.isNull(request.dagVersion)) {
      query["DagVersion"] = request.dagVersion;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReRunTaskFlowInstance",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReRunTaskFlowInstanceResponse>(await this.callApi(params, req, runtime), new $_model.ReRunTaskFlowInstanceResponse({}));
  }

  /**
   * Reruns a task flow instance.
   * 
   * @param request - ReRunTaskFlowInstanceRequest
   * @returns ReRunTaskFlowInstanceResponse
   */
  async reRunTaskFlowInstance(request: $_model.ReRunTaskFlowInstanceRequest): Promise<$_model.ReRunTaskFlowInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.reRunTaskFlowInstanceWithOptions(request, runtime);
  }

  /**
   * 用于重新部署DIFY实例。
   * 
   * @remarks
   * ## 请求说明
   * - `workspaceOption` 参数指示是否新建工作空间，默认使用已有工作空间。
   * - 如果选择新建工作空间 (`CreateNewInstance`)，则必须提供 `workspaceName` 和 `workspaceDescription`。
   * - `vpcId`, `VSwitchID`, `zoneId`, `regionCode`, `ResourceQuota`, `Replicas`, `storageType`, `dbInstanceClass`, `dbEngineVersion`, `kvstoreEngineVersion` 是必填项。
   * - 当 `storageType` 为 `oss` 时，需要指定 `ossBucketResourceId` 和 `ossPath`。
   * - 如果需要新建数据库实例，则必须提供 `instanceAccount` 和 `instancePassword`。
   * - 预付费模式下，`PayPeriodType` 和 `PayPeriod` 必须填写。
   * - 可以通过设置 `dryRun` 为 `true` 来执行预检查而不实际创建实例。
   * 
   * @param request - RedeployDifyInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RedeployDifyInstanceResponse
   */
  async redeployDifyInstanceWithOptions(request: $_model.RedeployDifyInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RedeployDifyInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dataRegion)) {
      query["DataRegion"] = request.dataRegion;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RedeployDifyInstance",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RedeployDifyInstanceResponse>(await this.callApi(params, req, runtime), new $_model.RedeployDifyInstanceResponse({}));
  }

  /**
   * 用于重新部署DIFY实例。
   * 
   * @remarks
   * ## 请求说明
   * - `workspaceOption` 参数指示是否新建工作空间，默认使用已有工作空间。
   * - 如果选择新建工作空间 (`CreateNewInstance`)，则必须提供 `workspaceName` 和 `workspaceDescription`。
   * - `vpcId`, `VSwitchID`, `zoneId`, `regionCode`, `ResourceQuota`, `Replicas`, `storageType`, `dbInstanceClass`, `dbEngineVersion`, `kvstoreEngineVersion` 是必填项。
   * - 当 `storageType` 为 `oss` 时，需要指定 `ossBucketResourceId` 和 `ossPath`。
   * - 如果需要新建数据库实例，则必须提供 `instanceAccount` 和 `instancePassword`。
   * - 预付费模式下，`PayPeriodType` 和 `PayPeriod` 必须填写。
   * - 可以通过设置 `dryRun` 为 `true` 来执行预检查而不实际创建实例。
   * 
   * @param request - RedeployDifyInstanceRequest
   * @returns RedeployDifyInstanceResponse
   */
  async redeployDifyInstance(request: $_model.RedeployDifyInstanceRequest): Promise<$_model.RedeployDifyInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.redeployDifyInstanceWithOptions(request, runtime);
  }

  /**
   * Unsubscribes from a pay-as-you-go Data Management (DMS) resource.
   * 
   * @param request - RefundPayAsYouGoOrderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RefundPayAsYouGoOrderResponse
   */
  async refundPayAsYouGoOrderWithOptions(request: $_model.RefundPayAsYouGoOrderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RefundPayAsYouGoOrderResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RefundPayAsYouGoOrder",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RefundPayAsYouGoOrderResponse>(await this.callApi(params, req, runtime), new $_model.RefundPayAsYouGoOrderResponse({}));
  }

  /**
   * Unsubscribes from a pay-as-you-go Data Management (DMS) resource.
   * 
   * @param request - RefundPayAsYouGoOrderRequest
   * @returns RefundPayAsYouGoOrderResponse
   */
  async refundPayAsYouGoOrder(request: $_model.RefundPayAsYouGoOrderRequest): Promise<$_model.RefundPayAsYouGoOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.refundPayAsYouGoOrderWithOptions(request, runtime);
  }

  /**
   * Registers a database instance in Data Management (DMS).
   * 
   * @remarks
   * Prerequisites: You are a DMS administrator or a database administrator (DBA). You can call the [ListUsers](https://help.aliyun.com/document_detail/141938.html) or [GetUser](https://help.aliyun.com/document_detail/147098.html) operation to query your user role from the RoleIdList parameter that is returned.
   * 
   * @param request - RegisterInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RegisterInstanceResponse
   */
  async registerInstanceWithOptions(request: $_model.RegisterInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RegisterInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dataLinkName)) {
      query["DataLinkName"] = request.dataLinkName;
    }

    if (!$dara.isNull(request.databasePassword)) {
      query["DatabasePassword"] = request.databasePassword;
    }

    if (!$dara.isNull(request.databaseUser)) {
      query["DatabaseUser"] = request.databaseUser;
    }

    if (!$dara.isNull(request.dbaUid)) {
      query["DbaUid"] = request.dbaUid;
    }

    if (!$dara.isNull(request.dbaUidByString)) {
      query["DbaUidByString"] = request.dbaUidByString;
    }

    if (!$dara.isNull(request.ddlOnline)) {
      query["DdlOnline"] = request.ddlOnline;
    }

    if (!$dara.isNull(request.ecsInstanceId)) {
      query["EcsInstanceId"] = request.ecsInstanceId;
    }

    if (!$dara.isNull(request.ecsRegion)) {
      query["EcsRegion"] = request.ecsRegion;
    }

    if (!$dara.isNull(request.enableSellSitd)) {
      query["EnableSellSitd"] = request.enableSellSitd;
    }

    if (!$dara.isNull(request.envType)) {
      query["EnvType"] = request.envType;
    }

    if (!$dara.isNull(request.exportTimeout)) {
      query["ExportTimeout"] = request.exportTimeout;
    }

    if (!$dara.isNull(request.host)) {
      query["Host"] = request.host;
    }

    if (!$dara.isNull(request.instanceAlias)) {
      query["InstanceAlias"] = request.instanceAlias;
    }

    if (!$dara.isNull(request.instanceSource)) {
      query["InstanceSource"] = request.instanceSource;
    }

    if (!$dara.isNull(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!$dara.isNull(request.networkType)) {
      query["NetworkType"] = request.networkType;
    }

    if (!$dara.isNull(request.port)) {
      query["Port"] = request.port;
    }

    if (!$dara.isNull(request.queryTimeout)) {
      query["QueryTimeout"] = request.queryTimeout;
    }

    if (!$dara.isNull(request.resourceGroup)) {
      query["ResourceGroup"] = request.resourceGroup;
    }

    if (!$dara.isNull(request.safeRule)) {
      query["SafeRule"] = request.safeRule;
    }

    if (!$dara.isNull(request.sid)) {
      query["Sid"] = request.sid;
    }

    if (!$dara.isNull(request.skipTest)) {
      query["SkipTest"] = request.skipTest;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.templateType)) {
      query["TemplateType"] = request.templateType;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.useDsql)) {
      query["UseDsql"] = request.useDsql;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RegisterInstance",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RegisterInstanceResponse>(await this.callApi(params, req, runtime), new $_model.RegisterInstanceResponse({}));
  }

  /**
   * Registers a database instance in Data Management (DMS).
   * 
   * @remarks
   * Prerequisites: You are a DMS administrator or a database administrator (DBA). You can call the [ListUsers](https://help.aliyun.com/document_detail/141938.html) or [GetUser](https://help.aliyun.com/document_detail/147098.html) operation to query your user role from the RoleIdList parameter that is returned.
   * 
   * @param request - RegisterInstanceRequest
   * @returns RegisterInstanceResponse
   */
  async registerInstance(request: $_model.RegisterInstanceRequest): Promise<$_model.RegisterInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.registerInstanceWithOptions(request, runtime);
  }

  /**
   * Registers a user for your enterprise.
   * 
   * @remarks
   * If you are an **administrator** in Data Management (DMS), you can call this operation to register a user for your enterprise. To view users that are assigned the administrator role, perform the following steps: Log on to the DMS console. In the top navigation bar, click O&M. In the left-side navigation pane, click User.
   * 
   * @param request - RegisterUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RegisterUserResponse
   */
  async registerUserWithOptions(request: $_model.RegisterUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RegisterUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.mobile)) {
      query["Mobile"] = request.mobile;
    }

    if (!$dara.isNull(request.roleNames)) {
      query["RoleNames"] = request.roleNames;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.uid)) {
      query["Uid"] = request.uid;
    }

    if (!$dara.isNull(request.userNick)) {
      query["UserNick"] = request.userNick;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RegisterUser",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RegisterUserResponse>(await this.callApi(params, req, runtime), new $_model.RegisterUserResponse({}));
  }

  /**
   * Registers a user for your enterprise.
   * 
   * @remarks
   * If you are an **administrator** in Data Management (DMS), you can call this operation to register a user for your enterprise. To view users that are assigned the administrator role, perform the following steps: Log on to the DMS console. In the top navigation bar, click O&M. In the left-side navigation pane, click User.
   * 
   * @param request - RegisterUserRequest
   * @returns RegisterUserResponse
   */
  async registerUser(request: $_model.RegisterUserRequest): Promise<$_model.RegisterUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.registerUserWithOptions(request, runtime);
  }

  /**
   * Deletes a data export task.
   * 
   * @param request - RemoveDataExportJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveDataExportJobResponse
   */
  async removeDataExportJobWithOptions(request: $_model.RemoveDataExportJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveDataExportJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveDataExportJob",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveDataExportJobResponse>(await this.callApi(params, req, runtime), new $_model.RemoveDataExportJobResponse({}));
  }

  /**
   * Deletes a data export task.
   * 
   * @param request - RemoveDataExportJobRequest
   * @returns RemoveDataExportJobResponse
   */
  async removeDataExportJob(request: $_model.RemoveDataExportJobRequest): Promise<$_model.RemoveDataExportJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeDataExportJobWithOptions(request, runtime);
  }

  /**
   * Removes table from the asset category.
   * 
   * @param request - RemoveTableFromCategoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveTableFromCategoryResponse
   */
  async removeTableFromCategoryWithOptions(request: $_model.RemoveTableFromCategoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveTableFromCategoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.categoryId)) {
      query["CategoryId"] = request.categoryId;
    }

    if (!$dara.isNull(request.dbId)) {
      query["DbId"] = request.dbId;
    }

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    if (!$dara.isNull(request.tableSchemaName)) {
      query["TableSchemaName"] = request.tableSchemaName;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveTableFromCategory",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveTableFromCategoryResponse>(await this.callApi(params, req, runtime), new $_model.RemoveTableFromCategoryResponse({}));
  }

  /**
   * Removes table from the asset category.
   * 
   * @param request - RemoveTableFromCategoryRequest
   * @returns RemoveTableFromCategoryResponse
   */
  async removeTableFromCategory(request: $_model.RemoveTableFromCategoryRequest): Promise<$_model.RemoveTableFromCategoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeTableFromCategoryWithOptions(request, runtime);
  }

  /**
   * Reruns a failed SQL task for data change.
   * 
   * @param request - RestartDataCorrectSQLJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RestartDataCorrectSQLJobResponse
   */
  async restartDataCorrectSQLJobWithOptions(request: $_model.RestartDataCorrectSQLJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RestartDataCorrectSQLJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!$dara.isNull(request.realLoginUserUid)) {
      query["RealLoginUserUid"] = request.realLoginUserUid;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RestartDataCorrectSQLJob",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RestartDataCorrectSQLJobResponse>(await this.callApi(params, req, runtime), new $_model.RestartDataCorrectSQLJobResponse({}));
  }

  /**
   * Reruns a failed SQL task for data change.
   * 
   * @param request - RestartDataCorrectSQLJobRequest
   * @returns RestartDataCorrectSQLJobResponse
   */
  async restartDataCorrectSQLJob(request: $_model.RestartDataCorrectSQLJobRequest): Promise<$_model.RestartDataCorrectSQLJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.restartDataCorrectSQLJobWithOptions(request, runtime);
  }

  /**
   * Restarts a SQL result set export task.
   * 
   * @param request - RestartDataExportJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RestartDataExportJobResponse
   */
  async restartDataExportJobWithOptions(request: $_model.RestartDataExportJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RestartDataExportJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RestartDataExportJob",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RestartDataExportJobResponse>(await this.callApi(params, req, runtime), new $_model.RestartDataExportJobResponse({}));
  }

  /**
   * Restarts a SQL result set export task.
   * 
   * @param request - RestartDataExportJobRequest
   * @returns RestartDataExportJobResponse
   */
  async restartDataExportJob(request: $_model.RestartDataExportJobRequest): Promise<$_model.RestartDataExportJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.restartDataExportJobWithOptions(request, runtime);
  }

  /**
   * Resumes a suspended task flow.
   * 
   * @remarks
   * You can call this operation only for task flows that are suspended.
   * 
   * @param request - ResumeTaskFlowInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResumeTaskFlowInstanceResponse
   */
  async resumeTaskFlowInstanceWithOptions(request: $_model.ResumeTaskFlowInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ResumeTaskFlowInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dagId)) {
      query["DagId"] = request.dagId;
    }

    if (!$dara.isNull(request.dagInstanceId)) {
      query["DagInstanceId"] = request.dagInstanceId;
    }

    if (!$dara.isNull(request.dagVersion)) {
      query["DagVersion"] = request.dagVersion;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResumeTaskFlowInstance",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResumeTaskFlowInstanceResponse>(await this.callApi(params, req, runtime), new $_model.ResumeTaskFlowInstanceResponse({}));
  }

  /**
   * Resumes a suspended task flow.
   * 
   * @remarks
   * You can call this operation only for task flows that are suspended.
   * 
   * @param request - ResumeTaskFlowInstanceRequest
   * @returns ResumeTaskFlowInstanceResponse
   */
  async resumeTaskFlowInstance(request: $_model.ResumeTaskFlowInstanceRequest): Promise<$_model.ResumeTaskFlowInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resumeTaskFlowInstanceWithOptions(request, runtime);
  }

  /**
   * Reruns the precheck for a data change ticket.
   * 
   * @param request - RetryDataCorrectPreCheckRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RetryDataCorrectPreCheckResponse
   */
  async retryDataCorrectPreCheckWithOptions(request: $_model.RetryDataCorrectPreCheckRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RetryDataCorrectPreCheckResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!$dara.isNull(request.realLoginUserUid)) {
      query["RealLoginUserUid"] = request.realLoginUserUid;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RetryDataCorrectPreCheck",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RetryDataCorrectPreCheckResponse>(await this.callApi(params, req, runtime), new $_model.RetryDataCorrectPreCheckResponse({}));
  }

  /**
   * Reruns the precheck for a data change ticket.
   * 
   * @param request - RetryDataCorrectPreCheckRequest
   * @returns RetryDataCorrectPreCheckResponse
   */
  async retryDataCorrectPreCheck(request: $_model.RetryDataCorrectPreCheckRequest): Promise<$_model.RetryDataCorrectPreCheckResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.retryDataCorrectPreCheckWithOptions(request, runtime);
  }

  /**
   * Revokes permissions on resources from Data Management (DMS) users by using a permission template.
   * 
   * @remarks
   * You must be a database administrator (DBA) or a DMS administrator. For more information about how to view system roles, see [View system roles](https://help.aliyun.com/document_detail/324212.html).
   * 
   * @param request - RevokeTemplateAuthorityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RevokeTemplateAuthorityResponse
   */
  async revokeTemplateAuthorityWithOptions(request: $_model.RevokeTemplateAuthorityRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RevokeTemplateAuthorityResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.userIds)) {
      query["UserIds"] = request.userIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RevokeTemplateAuthority",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RevokeTemplateAuthorityResponse>(await this.callApi(params, req, runtime), new $_model.RevokeTemplateAuthorityResponse({}));
  }

  /**
   * Revokes permissions on resources from Data Management (DMS) users by using a permission template.
   * 
   * @remarks
   * You must be a database administrator (DBA) or a DMS administrator. For more information about how to view system roles, see [View system roles](https://help.aliyun.com/document_detail/324212.html).
   * 
   * @param request - RevokeTemplateAuthorityRequest
   * @returns RevokeTemplateAuthorityResponse
   */
  async revokeTemplateAuthority(request: $_model.RevokeTemplateAuthorityRequest): Promise<$_model.RevokeTemplateAuthorityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.revokeTemplateAuthorityWithOptions(request, runtime);
  }

  /**
   * Revokes the permissions on instances, databases, and tables from a user.
   * 
   * @param request - RevokeUserPermissionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RevokeUserPermissionResponse
   */
  async revokeUserPermissionWithOptions(request: $_model.RevokeUserPermissionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RevokeUserPermissionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbId)) {
      query["DbId"] = request.dbId;
    }

    if (!$dara.isNull(request.dsType)) {
      query["DsType"] = request.dsType;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.logic)) {
      query["Logic"] = request.logic;
    }

    if (!$dara.isNull(request.permTypes)) {
      query["PermTypes"] = request.permTypes;
    }

    if (!$dara.isNull(request.tableId)) {
      query["TableId"] = request.tableId;
    }

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.userAccessId)) {
      query["UserAccessId"] = request.userAccessId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RevokeUserPermission",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RevokeUserPermissionResponse>(await this.callApi(params, req, runtime), new $_model.RevokeUserPermissionResponse({}));
  }

  /**
   * Revokes the permissions on instances, databases, and tables from a user.
   * 
   * @param request - RevokeUserPermissionRequest
   * @returns RevokeUserPermissionResponse
   */
  async revokeUserPermission(request: $_model.RevokeUserPermissionRequest): Promise<$_model.RevokeUserPermissionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.revokeUserPermissionWithOptions(request, runtime);
  }

  /**
   * Searches for the parsing result of a data tracking task.
   * 
   * @param tmpReq - SearchDataTrackResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchDataTrackResultResponse
   */
  async searchDataTrackResultWithOptions(tmpReq: $_model.SearchDataTrackResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SearchDataTrackResultResponse> {
    tmpReq.validate();
    let request = new $_model.SearchDataTrackResultShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.columnFilter)) {
      request.columnFilterShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.columnFilter, "ColumnFilter", "json");
    }

    if (!$dara.isNull(tmpReq.filterTableList)) {
      request.filterTableListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.filterTableList, "FilterTableList", "json");
    }

    if (!$dara.isNull(tmpReq.filterTypeList)) {
      request.filterTypeListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.filterTypeList, "FilterTypeList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.columnFilterShrink)) {
      query["ColumnFilter"] = request.columnFilterShrink;
    }

    if (!$dara.isNull(request.filterEndTime)) {
      query["FilterEndTime"] = request.filterEndTime;
    }

    if (!$dara.isNull(request.filterStartTime)) {
      query["FilterStartTime"] = request.filterStartTime;
    }

    if (!$dara.isNull(request.filterTableListShrink)) {
      query["FilterTableList"] = request.filterTableListShrink;
    }

    if (!$dara.isNull(request.filterTypeListShrink)) {
      query["FilterTypeList"] = request.filterTypeListShrink;
    }

    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SearchDataTrackResult",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SearchDataTrackResultResponse>(await this.callApi(params, req, runtime), new $_model.SearchDataTrackResultResponse({}));
  }

  /**
   * Searches for the parsing result of a data tracking task.
   * 
   * @param request - SearchDataTrackResultRequest
   * @returns SearchDataTrackResultResponse
   */
  async searchDataTrackResult(request: $_model.SearchDataTrackResultRequest): Promise<$_model.SearchDataTrackResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.searchDataTrackResultWithOptions(request, runtime);
  }

  /**
   * Queries the details of the databases.
   * 
   * @param request - SearchDatabaseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchDatabaseResponse
   */
  async searchDatabaseWithOptions(request: $_model.SearchDatabaseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SearchDatabaseResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbType)) {
      query["DbType"] = request.dbType;
    }

    if (!$dara.isNull(request.envType)) {
      query["EnvType"] = request.envType;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.realLoginUserUid)) {
      query["RealLoginUserUid"] = request.realLoginUserUid;
    }

    if (!$dara.isNull(request.searchKey)) {
      query["SearchKey"] = request.searchKey;
    }

    if (!$dara.isNull(request.searchRange)) {
      query["SearchRange"] = request.searchRange;
    }

    if (!$dara.isNull(request.searchTarget)) {
      query["SearchTarget"] = request.searchTarget;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SearchDatabase",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SearchDatabaseResponse>(await this.callApi(params, req, runtime), new $_model.SearchDatabaseResponse({}));
  }

  /**
   * Queries the details of the databases.
   * 
   * @param request - SearchDatabaseRequest
   * @returns SearchDatabaseResponse
   */
  async searchDatabase(request: $_model.SearchDatabaseRequest): Promise<$_model.SearchDatabaseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.searchDatabaseWithOptions(request, runtime);
  }

  /**
   * Queries detailed information about tables.
   * 
   * @remarks
   * You can call this operation only for database instances that are managed in Security Collaboration mode.
   * 
   * @param request - SearchTableRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchTableResponse
   */
  async searchTableWithOptions(request: $_model.SearchTableRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SearchTableResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbType)) {
      query["DbType"] = request.dbType;
    }

    if (!$dara.isNull(request.envType)) {
      query["EnvType"] = request.envType;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.returnGuid)) {
      query["ReturnGuid"] = request.returnGuid;
    }

    if (!$dara.isNull(request.searchKey)) {
      query["SearchKey"] = request.searchKey;
    }

    if (!$dara.isNull(request.searchRange)) {
      query["SearchRange"] = request.searchRange;
    }

    if (!$dara.isNull(request.searchTarget)) {
      query["SearchTarget"] = request.searchTarget;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SearchTable",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SearchTableResponse>(await this.callApi(params, req, runtime), new $_model.SearchTableResponse({}));
  }

  /**
   * Queries detailed information about tables.
   * 
   * @remarks
   * You can call this operation only for database instances that are managed in Security Collaboration mode.
   * 
   * @param request - SearchTableRequest
   * @returns SearchTableResponse
   */
  async searchTable(request: $_model.SearchTableRequest): Promise<$_model.SearchTableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.searchTableWithOptions(request, runtime);
  }

  /**
   * Configures the owner of an instance, a database, or a table.
   * 
   * @param request - SetOwnersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetOwnersResponse
   */
  async setOwnersWithOptions(request: $_model.SetOwnersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetOwnersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerIds)) {
      query["OwnerIds"] = request.ownerIds;
    }

    if (!$dara.isNull(request.ownerType)) {
      query["OwnerType"] = request.ownerType;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetOwners",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetOwnersResponse>(await this.callApi(params, req, runtime), new $_model.SetOwnersResponse({}));
  }

  /**
   * Configures the owner of an instance, a database, or a table.
   * 
   * @param request - SetOwnersRequest
   * @returns SetOwnersResponse
   */
  async setOwners(request: $_model.SetOwnersRequest): Promise<$_model.SetOwnersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setOwnersWithOptions(request, runtime);
  }

  /**
   * Configures whether the operation buttons, such as Agree, Revoke, and Sign, are displayed in the ticket approval section of the DMS console.
   * 
   * @param request - SetWorkflowExtraInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetWorkflowExtraInfoResponse
   */
  async setWorkflowExtraInfoWithOptions(request: $_model.SetWorkflowExtraInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetWorkflowExtraInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.renderAddApprovalNode)) {
      query["RenderAddApprovalNode"] = request.renderAddApprovalNode;
    }

    if (!$dara.isNull(request.renderAgree)) {
      query["RenderAgree"] = request.renderAgree;
    }

    if (!$dara.isNull(request.renderCancel)) {
      query["RenderCancel"] = request.renderCancel;
    }

    if (!$dara.isNull(request.renderReject)) {
      query["RenderReject"] = request.renderReject;
    }

    if (!$dara.isNull(request.renderTransfer)) {
      query["RenderTransfer"] = request.renderTransfer;
    }

    if (!$dara.isNull(request.thirdpartyWorkflowComment)) {
      query["ThirdpartyWorkflowComment"] = request.thirdpartyWorkflowComment;
    }

    if (!$dara.isNull(request.thirdpartyWorkflowUrl)) {
      query["ThirdpartyWorkflowUrl"] = request.thirdpartyWorkflowUrl;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.workflowInstanceId)) {
      query["WorkflowInstanceId"] = request.workflowInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetWorkflowExtraInfo",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetWorkflowExtraInfoResponse>(await this.callApi(params, req, runtime), new $_model.SetWorkflowExtraInfoResponse({}));
  }

  /**
   * Configures whether the operation buttons, such as Agree, Revoke, and Sign, are displayed in the ticket approval section of the DMS console.
   * 
   * @param request - SetWorkflowExtraInfoRequest
   * @returns SetWorkflowExtraInfoResponse
   */
  async setWorkflowExtraInfo(request: $_model.SetWorkflowExtraInfoRequest): Promise<$_model.SetWorkflowExtraInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setWorkflowExtraInfoWithOptions(request, runtime);
  }

  /**
   * 添加实例
   * 
   * @param request - SimplyAddInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SimplyAddInstanceResponse
   */
  async simplyAddInstanceWithOptions(request: $_model.SimplyAddInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SimplyAddInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.databasePassword)) {
      query["DatabasePassword"] = request.databasePassword;
    }

    if (!$dara.isNull(request.databaseUser)) {
      query["DatabaseUser"] = request.databaseUser;
    }

    if (!$dara.isNull(request.host)) {
      query["Host"] = request.host;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceRegion)) {
      query["InstanceRegion"] = request.instanceRegion;
    }

    if (!$dara.isNull(request.port)) {
      query["Port"] = request.port;
    }

    if (!$dara.isNull(request.realLoginUserUid)) {
      query["RealLoginUserUid"] = request.realLoginUserUid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SimplyAddInstance",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SimplyAddInstanceResponse>(await this.callApi(params, req, runtime), new $_model.SimplyAddInstanceResponse({}));
  }

  /**
   * 添加实例
   * 
   * @param request - SimplyAddInstanceRequest
   * @returns SimplyAddInstanceResponse
   */
  async simplyAddInstance(request: $_model.SimplyAddInstanceRequest): Promise<$_model.SimplyAddInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.simplyAddInstanceWithOptions(request, runtime);
  }

  /**
   * Skips the verification on the number of rows in the precheck for data change.
   * 
   * @param request - SkipDataCorrectRowCheckRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SkipDataCorrectRowCheckResponse
   */
  async skipDataCorrectRowCheckWithOptions(request: $_model.SkipDataCorrectRowCheckRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SkipDataCorrectRowCheckResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!$dara.isNull(request.realLoginUserUid)) {
      query["RealLoginUserUid"] = request.realLoginUserUid;
    }

    if (!$dara.isNull(request.reason)) {
      query["Reason"] = request.reason;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SkipDataCorrectRowCheck",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SkipDataCorrectRowCheckResponse>(await this.callApi(params, req, runtime), new $_model.SkipDataCorrectRowCheckResponse({}));
  }

  /**
   * Skips the verification on the number of rows in the precheck for data change.
   * 
   * @param request - SkipDataCorrectRowCheckRequest
   * @returns SkipDataCorrectRowCheckResponse
   */
  async skipDataCorrectRowCheck(request: $_model.SkipDataCorrectRowCheckRequest): Promise<$_model.SkipDataCorrectRowCheckResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.skipDataCorrectRowCheckWithOptions(request, runtime);
  }

  /**
   * Stops a task flow instance.
   * 
   * @param request - StopTaskFlowInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopTaskFlowInstanceResponse
   */
  async stopTaskFlowInstanceWithOptions(request: $_model.StopTaskFlowInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopTaskFlowInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dagId)) {
      query["DagId"] = request.dagId;
    }

    if (!$dara.isNull(request.dagInstanceId)) {
      query["DagInstanceId"] = request.dagInstanceId;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopTaskFlowInstance",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopTaskFlowInstanceResponse>(await this.callApi(params, req, runtime), new $_model.StopTaskFlowInstanceResponse({}));
  }

  /**
   * Stops a task flow instance.
   * 
   * @param request - StopTaskFlowInstanceRequest
   * @returns StopTaskFlowInstanceResponse
   */
  async stopTaskFlowInstance(request: $_model.StopTaskFlowInstanceRequest): Promise<$_model.StopTaskFlowInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopTaskFlowInstanceWithOptions(request, runtime);
  }

  /**
   * Submits a ticket for approval.
   * 
   * @param request - SubmitOrderApprovalRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitOrderApprovalResponse
   */
  async submitOrderApprovalWithOptions(request: $_model.SubmitOrderApprovalRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitOrderApprovalResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!$dara.isNull(request.realLoginUserUid)) {
      query["RealLoginUserUid"] = request.realLoginUserUid;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitOrderApproval",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitOrderApprovalResponse>(await this.callApi(params, req, runtime), new $_model.SubmitOrderApprovalResponse({}));
  }

  /**
   * Submits a ticket for approval.
   * 
   * @param request - SubmitOrderApprovalRequest
   * @returns SubmitOrderApprovalResponse
   */
  async submitOrderApproval(request: $_model.SubmitOrderApprovalRequest): Promise<$_model.SubmitOrderApprovalResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitOrderApprovalWithOptions(request, runtime);
  }

  /**
   * Submits a schema synchronization ticket for approval.
   * 
   * @param request - SubmitStructSyncOrderApprovalRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitStructSyncOrderApprovalResponse
   */
  async submitStructSyncOrderApprovalWithOptions(request: $_model.SubmitStructSyncOrderApprovalRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitStructSyncOrderApprovalResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitStructSyncOrderApproval",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitStructSyncOrderApprovalResponse>(await this.callApi(params, req, runtime), new $_model.SubmitStructSyncOrderApprovalResponse({}));
  }

  /**
   * Submits a schema synchronization ticket for approval.
   * 
   * @param request - SubmitStructSyncOrderApprovalRequest
   * @returns SubmitStructSyncOrderApprovalResponse
   */
  async submitStructSyncOrderApproval(request: $_model.SubmitStructSyncOrderApprovalRequest): Promise<$_model.SubmitStructSyncOrderApprovalResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitStructSyncOrderApprovalWithOptions(request, runtime);
  }

  /**
   * Suspends an ongoing or scheduled SQL result set export task.
   * 
   * @param request - SuspendDataExportJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SuspendDataExportJobResponse
   */
  async suspendDataExportJobWithOptions(request: $_model.SuspendDataExportJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SuspendDataExportJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SuspendDataExportJob",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SuspendDataExportJobResponse>(await this.callApi(params, req, runtime), new $_model.SuspendDataExportJobResponse({}));
  }

  /**
   * Suspends an ongoing or scheduled SQL result set export task.
   * 
   * @param request - SuspendDataExportJobRequest
   * @returns SuspendDataExportJobResponse
   */
  async suspendDataExportJob(request: $_model.SuspendDataExportJobRequest): Promise<$_model.SuspendDataExportJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.suspendDataExportJobWithOptions(request, runtime);
  }

  /**
   * Suspends a task flow instance.
   * 
   * @param request - SuspendTaskFlowInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SuspendTaskFlowInstanceResponse
   */
  async suspendTaskFlowInstanceWithOptions(request: $_model.SuspendTaskFlowInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SuspendTaskFlowInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dagId)) {
      query["DagId"] = request.dagId;
    }

    if (!$dara.isNull(request.dagInstanceId)) {
      query["DagInstanceId"] = request.dagInstanceId;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SuspendTaskFlowInstance",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SuspendTaskFlowInstanceResponse>(await this.callApi(params, req, runtime), new $_model.SuspendTaskFlowInstanceResponse({}));
  }

  /**
   * Suspends a task flow instance.
   * 
   * @param request - SuspendTaskFlowInstanceRequest
   * @returns SuspendTaskFlowInstanceResponse
   */
  async suspendTaskFlowInstance(request: $_model.SuspendTaskFlowInstanceRequest): Promise<$_model.SuspendTaskFlowInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.suspendTaskFlowInstanceWithOptions(request, runtime);
  }

  /**
   * Synchronizes the metadata of a database.
   * 
   * @param request - SyncDatabaseMetaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SyncDatabaseMetaResponse
   */
  async syncDatabaseMetaWithOptions(request: $_model.SyncDatabaseMetaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SyncDatabaseMetaResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbId)) {
      query["DbId"] = request.dbId;
    }

    if (!$dara.isNull(request.logic)) {
      query["Logic"] = request.logic;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SyncDatabaseMeta",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SyncDatabaseMetaResponse>(await this.callApi(params, req, runtime), new $_model.SyncDatabaseMetaResponse({}));
  }

  /**
   * Synchronizes the metadata of a database.
   * 
   * @param request - SyncDatabaseMetaRequest
   * @returns SyncDatabaseMetaResponse
   */
  async syncDatabaseMeta(request: $_model.SyncDatabaseMetaRequest): Promise<$_model.SyncDatabaseMetaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.syncDatabaseMetaWithOptions(request, runtime);
  }

  /**
   * Synchronizes the metadata of all databases in a database instance.
   * 
   * @remarks
   * You can call this operation only for database instances whose control mode is Security Collaboration.
   * 
   * @param request - SyncInstanceMetaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SyncInstanceMetaResponse
   */
  async syncInstanceMetaWithOptions(request: $_model.SyncInstanceMetaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SyncInstanceMetaResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ignoreTable)) {
      query["IgnoreTable"] = request.ignoreTable;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SyncInstanceMeta",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SyncInstanceMetaResponse>(await this.callApi(params, req, runtime), new $_model.SyncInstanceMetaResponse({}));
  }

  /**
   * Synchronizes the metadata of all databases in a database instance.
   * 
   * @remarks
   * You can call this operation only for database instances whose control mode is Security Collaboration.
   * 
   * @param request - SyncInstanceMetaRequest
   * @returns SyncInstanceMetaResponse
   */
  async syncInstanceMeta(request: $_model.SyncInstanceMetaRequest): Promise<$_model.SyncInstanceMetaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.syncInstanceMetaWithOptions(request, runtime);
  }

  /**
   * Tests the task flow of task orchestration.
   * 
   * @remarks
   * ### [](#)Usage notes
   * An edge can be created only when the following conditions are met:
   * 1.  The start and end nodes of the edge exist in the directed acyclic graph (DAG) of the task flow specified by DagId.
   * 2.  After the edge is created, the DAG does not contain loops.
   * 
   * @param request - TryRunTaskFlowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TryRunTaskFlowResponse
   */
  async tryRunTaskFlowWithOptions(request: $_model.TryRunTaskFlowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TryRunTaskFlowResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dagId)) {
      query["DagId"] = request.dagId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TryRunTaskFlow",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TryRunTaskFlowResponse>(await this.callApi(params, req, runtime), new $_model.TryRunTaskFlowResponse({}));
  }

  /**
   * Tests the task flow of task orchestration.
   * 
   * @remarks
   * ### [](#)Usage notes
   * An edge can be created only when the following conditions are met:
   * 1.  The start and end nodes of the edge exist in the directed acyclic graph (DAG) of the task flow specified by DagId.
   * 2.  After the edge is created, the DAG does not contain loops.
   * 
   * @param request - TryRunTaskFlowRequest
   * @returns TryRunTaskFlowResponse
   */
  async tryRunTaskFlow(request: $_model.TryRunTaskFlowRequest): Promise<$_model.TryRunTaskFlowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tryRunTaskFlowWithOptions(request, runtime);
  }

  /**
   * Updates the name, description, or content of a policy.
   * 
   * @param request - UpdateAbacPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAbacPolicyResponse
   */
  async updateAbacPolicyWithOptions(request: $_model.UpdateAbacPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAbacPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.abacPolicyContent)) {
      query["AbacPolicyContent"] = request.abacPolicyContent;
    }

    if (!$dara.isNull(request.abacPolicyDesc)) {
      query["AbacPolicyDesc"] = request.abacPolicyDesc;
    }

    if (!$dara.isNull(request.abacPolicyId)) {
      query["AbacPolicyId"] = request.abacPolicyId;
    }

    if (!$dara.isNull(request.abacPolicyName)) {
      query["AbacPolicyName"] = request.abacPolicyName;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAbacPolicy",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAbacPolicyResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAbacPolicyResponse({}));
  }

  /**
   * Updates the name, description, or content of a policy.
   * 
   * @param request - UpdateAbacPolicyRequest
   * @returns UpdateAbacPolicyResponse
   */
  async updateAbacPolicy(request: $_model.UpdateAbacPolicyRequest): Promise<$_model.UpdateAbacPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAbacPolicyWithOptions(request, runtime);
  }

  /**
   * Modifies a permission template.
   * 
   * @remarks
   * You are a database administrator (DBA) or a Data Management (DMS) administrator. For more information about how to view system roles, see [View system roles](https://help.aliyun.com/document_detail/324212.html).
   * 
   * @param request - UpdateAuthorityTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAuthorityTemplateResponse
   */
  async updateAuthorityTemplateWithOptions(request: $_model.UpdateAuthorityTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAuthorityTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAuthorityTemplate",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAuthorityTemplateResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAuthorityTemplateResponse({}));
  }

  /**
   * Modifies a permission template.
   * 
   * @remarks
   * You are a database administrator (DBA) or a Data Management (DMS) administrator. For more information about how to view system roles, see [View system roles](https://help.aliyun.com/document_detail/324212.html).
   * 
   * @param request - UpdateAuthorityTemplateRequest
   * @returns UpdateAuthorityTemplateResponse
   */
  async updateAuthorityTemplate(request: $_model.UpdateAuthorityTemplateRequest): Promise<$_model.UpdateAuthorityTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAuthorityTemplateWithOptions(request, runtime);
  }

  /**
   * Updates the information about a database in a data lakehouse.
   * 
   * @param tmpReq - UpdateDataLakeDatabaseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDataLakeDatabaseResponse
   */
  async updateDataLakeDatabaseWithOptions(tmpReq: $_model.UpdateDataLakeDatabaseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDataLakeDatabaseResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateDataLakeDatabaseShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.parameters)) {
      request.parametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.parameters, "Parameters", "json");
    }

    let query = { };
    if (!$dara.isNull(request.catalogName)) {
      query["CatalogName"] = request.catalogName;
    }

    if (!$dara.isNull(request.dataRegion)) {
      query["DataRegion"] = request.dataRegion;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.location)) {
      query["Location"] = request.location;
    }

    if (!$dara.isNull(request.parametersShrink)) {
      query["Parameters"] = request.parametersShrink;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDataLakeDatabase",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDataLakeDatabaseResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDataLakeDatabaseResponse({}));
  }

  /**
   * Updates the information about a database in a data lakehouse.
   * 
   * @param request - UpdateDataLakeDatabaseRequest
   * @returns UpdateDataLakeDatabaseResponse
   */
  async updateDataLakeDatabase(request: $_model.UpdateDataLakeDatabaseRequest): Promise<$_model.UpdateDataLakeDatabaseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDataLakeDatabaseWithOptions(request, runtime);
  }

  /**
   * Updates a user-defined function in a data lakehouse.
   * 
   * @param tmpReq - UpdateDataLakeFunctionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDataLakeFunctionResponse
   */
  async updateDataLakeFunctionWithOptions(tmpReq: $_model.UpdateDataLakeFunctionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDataLakeFunctionResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateDataLakeFunctionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.functionInput)) {
      request.functionInputShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.functionInput, "FunctionInput", "json");
    }

    let query = { };
    if (!$dara.isNull(request.catalogName)) {
      query["CatalogName"] = request.catalogName;
    }

    if (!$dara.isNull(request.dataRegion)) {
      query["DataRegion"] = request.dataRegion;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.functionName)) {
      query["FunctionName"] = request.functionName;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.functionInputShrink)) {
      body["FunctionInput"] = request.functionInputShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDataLakeFunction",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDataLakeFunctionResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDataLakeFunctionResponse({}));
  }

  /**
   * Updates a user-defined function in a data lakehouse.
   * 
   * @param request - UpdateDataLakeFunctionRequest
   * @returns UpdateDataLakeFunctionResponse
   */
  async updateDataLakeFunction(request: $_model.UpdateDataLakeFunctionRequest): Promise<$_model.UpdateDataLakeFunctionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDataLakeFunctionWithOptions(request, runtime);
  }

  /**
   * Updates the partition information of a table in a data lakehouse.
   * 
   * @param tmpReq - UpdateDataLakePartitionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDataLakePartitionResponse
   */
  async updateDataLakePartitionWithOptions(tmpReq: $_model.UpdateDataLakePartitionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDataLakePartitionResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateDataLakePartitionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.partitionInput)) {
      request.partitionInputShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.partitionInput, "PartitionInput", "json");
    }

    let query = { };
    if (!$dara.isNull(request.catalogName)) {
      query["CatalogName"] = request.catalogName;
    }

    if (!$dara.isNull(request.dataRegion)) {
      query["DataRegion"] = request.dataRegion;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.partitionInputShrink)) {
      body["PartitionInput"] = request.partitionInputShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDataLakePartition",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDataLakePartitionResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDataLakePartitionResponse({}));
  }

  /**
   * Updates the partition information of a table in a data lakehouse.
   * 
   * @param request - UpdateDataLakePartitionRequest
   * @returns UpdateDataLakePartitionResponse
   */
  async updateDataLakePartition(request: $_model.UpdateDataLakePartitionRequest): Promise<$_model.UpdateDataLakePartitionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDataLakePartitionWithOptions(request, runtime);
  }

  /**
   * Updates the information about a table in a data lakehouse.
   * 
   * @param tmpReq - UpdateDataLakeTableRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDataLakeTableResponse
   */
  async updateDataLakeTableWithOptions(tmpReq: $_model.UpdateDataLakeTableRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDataLakeTableResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateDataLakeTableShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tableInput)) {
      request.tableInputShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tableInput, "TableInput", "json");
    }

    let query = { };
    if (!$dara.isNull(request.catalogName)) {
      query["CatalogName"] = request.catalogName;
    }

    if (!$dara.isNull(request.dataRegion)) {
      query["DataRegion"] = request.dataRegion;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tableInputShrink)) {
      body["TableInput"] = request.tableInputShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDataLakeTable",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDataLakeTableResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDataLakeTableResponse({}));
  }

  /**
   * Updates the information about a table in a data lakehouse.
   * 
   * @param request - UpdateDataLakeTableRequest
   * @returns UpdateDataLakeTableResponse
   */
  async updateDataLakeTable(request: $_model.UpdateDataLakeTableRequest): Promise<$_model.UpdateDataLakeTableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDataLakeTableWithOptions(request, runtime);
  }

  /**
   * Updates the information about a database instance and checks the connectivity of the database instance.
   * 
   * @remarks
   * Before you call the UpdateInstance operation, call the [GetInstance](https://help.aliyun.com/document_detail/141567.html) or [ListInstances](https://help.aliyun.com/document_detail/141936.html) operation to obtain the complete information about the instance.
   * 
   * @param request - UpdateInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateInstanceResponse
   */
  async updateInstanceWithOptions(request: $_model.UpdateInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dataLinkName)) {
      query["DataLinkName"] = request.dataLinkName;
    }

    if (!$dara.isNull(request.databasePassword)) {
      query["DatabasePassword"] = request.databasePassword;
    }

    if (!$dara.isNull(request.databaseUser)) {
      query["DatabaseUser"] = request.databaseUser;
    }

    if (!$dara.isNull(request.dbaId)) {
      query["DbaId"] = request.dbaId;
    }

    if (!$dara.isNull(request.ddlOnline)) {
      query["DdlOnline"] = request.ddlOnline;
    }

    if (!$dara.isNull(request.ecsInstanceId)) {
      query["EcsInstanceId"] = request.ecsInstanceId;
    }

    if (!$dara.isNull(request.ecsRegion)) {
      query["EcsRegion"] = request.ecsRegion;
    }

    if (!$dara.isNull(request.enableSellSitd)) {
      query["EnableSellSitd"] = request.enableSellSitd;
    }

    if (!$dara.isNull(request.envType)) {
      query["EnvType"] = request.envType;
    }

    if (!$dara.isNull(request.exportTimeout)) {
      query["ExportTimeout"] = request.exportTimeout;
    }

    if (!$dara.isNull(request.host)) {
      query["Host"] = request.host;
    }

    if (!$dara.isNull(request.instanceAlias)) {
      query["InstanceAlias"] = request.instanceAlias;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceSource)) {
      query["InstanceSource"] = request.instanceSource;
    }

    if (!$dara.isNull(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!$dara.isNull(request.port)) {
      query["Port"] = request.port;
    }

    if (!$dara.isNull(request.queryTimeout)) {
      query["QueryTimeout"] = request.queryTimeout;
    }

    if (!$dara.isNull(request.safeRuleId)) {
      query["SafeRuleId"] = request.safeRuleId;
    }

    if (!$dara.isNull(request.sid)) {
      query["Sid"] = request.sid;
    }

    if (!$dara.isNull(request.skipTest)) {
      query["SkipTest"] = request.skipTest;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.templateType)) {
      query["TemplateType"] = request.templateType;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.useDsql)) {
      query["UseDsql"] = request.useDsql;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateInstance",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateInstanceResponse>(await this.callApi(params, req, runtime), new $_model.UpdateInstanceResponse({}));
  }

  /**
   * Updates the information about a database instance and checks the connectivity of the database instance.
   * 
   * @remarks
   * Before you call the UpdateInstance operation, call the [GetInstance](https://help.aliyun.com/document_detail/141567.html) or [ListInstances](https://help.aliyun.com/document_detail/141936.html) operation to obtain the complete information about the instance.
   * 
   * @param request - UpdateInstanceRequest
   * @returns UpdateInstanceResponse
   */
  async updateInstance(request: $_model.UpdateInstanceRequest): Promise<$_model.UpdateInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateInstanceWithOptions(request, runtime);
  }

  /**
   * Updates asset category information.
   * 
   * @param tmpReq - UpdateMetaCategoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateMetaCategoryResponse
   */
  async updateMetaCategoryWithOptions(tmpReq: $_model.UpdateMetaCategoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateMetaCategoryResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateMetaCategoryShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.ownerIds)) {
      request.ownerIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ownerIds, "OwnerIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.categoryId)) {
      query["CategoryId"] = request.categoryId;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.ownerIdsShrink)) {
      query["OwnerIds"] = request.ownerIdsShrink;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateMetaCategory",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateMetaCategoryResponse>(await this.callApi(params, req, runtime), new $_model.UpdateMetaCategoryResponse({}));
  }

  /**
   * Updates asset category information.
   * 
   * @param request - UpdateMetaCategoryRequest
   * @returns UpdateMetaCategoryResponse
   */
  async updateMetaCategory(request: $_model.UpdateMetaCategoryRequest): Promise<$_model.UpdateMetaCategoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateMetaCategoryWithOptions(request, runtime);
  }

  /**
   * Updates the service level agreement (SLA) timeout reminder for a task flow.
   * 
   * @remarks
   * SLA rules take effect after task flows are deployed and published.
   * 
   * @param tmpReq - UpdateSLARulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSLARulesResponse
   */
  async updateSLARulesWithOptions(tmpReq: $_model.UpdateSLARulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSLARulesResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateSLARulesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.slaRuleList)) {
      request.slaRuleListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.slaRuleList, "SlaRuleList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.dagId)) {
      query["DagId"] = request.dagId;
    }

    if (!$dara.isNull(request.slaRuleListShrink)) {
      query["SlaRuleList"] = request.slaRuleListShrink;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateSLARules",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateSLARulesResponse>(await this.callApi(params, req, runtime), new $_model.UpdateSLARulesResponse({}));
  }

  /**
   * Updates the service level agreement (SLA) timeout reminder for a task flow.
   * 
   * @remarks
   * SLA rules take effect after task flows are deployed and published.
   * 
   * @param request - UpdateSLARulesRequest
   * @returns UpdateSLARulesResponse
   */
  async updateSLARules(request: $_model.UpdateSLARulesRequest): Promise<$_model.UpdateSLARulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateSLARulesWithOptions(request, runtime);
  }

  /**
   * Updates the name and description of the business scenario for a specified task flow.
   * 
   * @param request - UpdateScenarioRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateScenarioResponse
   */
  async updateScenarioWithOptions(request: $_model.UpdateScenarioRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateScenarioResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.scenarioId)) {
      query["ScenarioId"] = request.scenarioId;
    }

    if (!$dara.isNull(request.scenarioName)) {
      query["ScenarioName"] = request.scenarioName;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateScenario",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateScenarioResponse>(await this.callApi(params, req, runtime), new $_model.UpdateScenarioResponse({}));
  }

  /**
   * Updates the name and description of the business scenario for a specified task flow.
   * 
   * @param request - UpdateScenarioRequest
   * @returns UpdateScenarioResponse
   */
  async updateScenario(request: $_model.UpdateScenarioRequest): Promise<$_model.UpdateScenarioResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateScenarioWithOptions(request, runtime);
  }

  /**
   * Modifies the name and description of a specific security rule set.
   * 
   * @param request - UpdateStandardGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateStandardGroupResponse
   */
  async updateStandardGroupWithOptions(request: $_model.UpdateStandardGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateStandardGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateStandardGroup",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateStandardGroupResponse>(await this.callApi(params, req, runtime), new $_model.UpdateStandardGroupResponse({}));
  }

  /**
   * Modifies the name and description of a specific security rule set.
   * 
   * @param request - UpdateStandardGroupRequest
   * @returns UpdateStandardGroupResponse
   */
  async updateStandardGroup(request: $_model.UpdateStandardGroupRequest): Promise<$_model.UpdateStandardGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateStandardGroupWithOptions(request, runtime);
  }

  /**
   * Updates the advanced configuration of a task node.
   * 
   * @remarks
   * You can call this operation to configure a failed task or rerun a task.
   * 
   * @param request - UpdateTaskConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTaskConfigResponse
   */
  async updateTaskConfigWithOptions(request: $_model.UpdateTaskConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateTaskConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.nodeConfig)) {
      query["NodeConfig"] = request.nodeConfig;
    }

    if (!$dara.isNull(request.nodeId)) {
      query["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateTaskConfig",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateTaskConfigResponse>(await this.callApi(params, req, runtime), new $_model.UpdateTaskConfigResponse({}));
  }

  /**
   * Updates the advanced configuration of a task node.
   * 
   * @remarks
   * You can call this operation to configure a failed task or rerun a task.
   * 
   * @param request - UpdateTaskConfigRequest
   * @returns UpdateTaskConfigResponse
   */
  async updateTaskConfig(request: $_model.UpdateTaskConfigRequest): Promise<$_model.UpdateTaskConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateTaskConfigWithOptions(request, runtime);
  }

  /**
   * Updates tasks in a task flow.
   * 
   * @remarks
   * You can call this operation to modify node configurations.
   * 
   * @param request - UpdateTaskContentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTaskContentResponse
   */
  async updateTaskContentWithOptions(request: $_model.UpdateTaskContentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateTaskContentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.nodeContent)) {
      query["NodeContent"] = request.nodeContent;
    }

    if (!$dara.isNull(request.nodeId)) {
      query["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateTaskContent",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateTaskContentResponse>(await this.callApi(params, req, runtime), new $_model.UpdateTaskContentResponse({}));
  }

  /**
   * Updates tasks in a task flow.
   * 
   * @remarks
   * You can call this operation to modify node configurations.
   * 
   * @param request - UpdateTaskContentRequest
   * @returns UpdateTaskContentResponse
   */
  async updateTaskContent(request: $_model.UpdateTaskContentRequest): Promise<$_model.UpdateTaskContentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateTaskContentWithOptions(request, runtime);
  }

  /**
   * Updates the node content in large SQL files.
   * 
   * @remarks
   * You can call this operation to modify node configurations.
   * 
   * @param request - UpdateTaskContentV2Request
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTaskContentV2Response
   */
  async updateTaskContentV2WithOptions(request: $_model.UpdateTaskContentV2Request, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateTaskContentV2Response> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.nodeId)) {
      query["NodeId"] = request.nodeId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.nodeContent)) {
      body["NodeContent"] = request.nodeContent;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateTaskContentV2",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateTaskContentV2Response>(await this.callApi(params, req, runtime), new $_model.UpdateTaskContentV2Response({}));
  }

  /**
   * Updates the node content in large SQL files.
   * 
   * @remarks
   * You can call this operation to modify node configurations.
   * 
   * @param request - UpdateTaskContentV2Request
   * @returns UpdateTaskContentV2Response
   */
  async updateTaskContentV2(request: $_model.UpdateTaskContentV2Request): Promise<$_model.UpdateTaskContentV2Response> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateTaskContentV2WithOptions(request, runtime);
  }

  /**
   * Updates the constants for a specified task flow.
   * 
   * @param tmpReq - UpdateTaskFlowConstantsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTaskFlowConstantsResponse
   */
  async updateTaskFlowConstantsWithOptions(tmpReq: $_model.UpdateTaskFlowConstantsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateTaskFlowConstantsResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateTaskFlowConstantsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.dagConstants)) {
      request.dagConstantsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.dagConstants, "DagConstants", "json");
    }

    let query = { };
    if (!$dara.isNull(request.dagConstantsShrink)) {
      query["DagConstants"] = request.dagConstantsShrink;
    }

    if (!$dara.isNull(request.dagId)) {
      query["DagId"] = request.dagId;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateTaskFlowConstants",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateTaskFlowConstantsResponse>(await this.callApi(params, req, runtime), new $_model.UpdateTaskFlowConstantsResponse({}));
  }

  /**
   * Updates the constants for a specified task flow.
   * 
   * @param request - UpdateTaskFlowConstantsRequest
   * @returns UpdateTaskFlowConstantsResponse
   */
  async updateTaskFlowConstants(request: $_model.UpdateTaskFlowConstantsRequest): Promise<$_model.UpdateTaskFlowConstantsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateTaskFlowConstantsWithOptions(request, runtime);
  }

  /**
   * Updates the IDs of the users who are involved in the task flow.
   * 
   * @param tmpReq - UpdateTaskFlowCooperatorsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTaskFlowCooperatorsResponse
   */
  async updateTaskFlowCooperatorsWithOptions(tmpReq: $_model.UpdateTaskFlowCooperatorsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateTaskFlowCooperatorsResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateTaskFlowCooperatorsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.cooperatorIds)) {
      request.cooperatorIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.cooperatorIds, "CooperatorIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.cooperatorIdsShrink)) {
      query["CooperatorIds"] = request.cooperatorIdsShrink;
    }

    if (!$dara.isNull(request.dagId)) {
      query["DagId"] = request.dagId;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateTaskFlowCooperators",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateTaskFlowCooperatorsResponse>(await this.callApi(params, req, runtime), new $_model.UpdateTaskFlowCooperatorsResponse({}));
  }

  /**
   * Updates the IDs of the users who are involved in the task flow.
   * 
   * @param request - UpdateTaskFlowCooperatorsRequest
   * @returns UpdateTaskFlowCooperatorsResponse
   */
  async updateTaskFlowCooperators(request: $_model.UpdateTaskFlowCooperatorsRequest): Promise<$_model.UpdateTaskFlowCooperatorsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateTaskFlowCooperatorsWithOptions(request, runtime);
  }

  /**
   * Updates the start node and end node of multiple edges at a time for a task flow.
   * 
   * @remarks
   * ###
   * The edges can be updated only when the following conditions are met:
   * 1.  The specified edge exists in the directed acyclic graph (DAG) of the task flow specified by DagId.
   * 2.  The specified edge nodes exist in the DAG of the task flow specified by DagId.
   * 3.  After the update, rings do not exist in the DAG.
   * 
   * @param tmpReq - UpdateTaskFlowEdgesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTaskFlowEdgesResponse
   */
  async updateTaskFlowEdgesWithOptions(tmpReq: $_model.UpdateTaskFlowEdgesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateTaskFlowEdgesResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateTaskFlowEdgesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.edges)) {
      request.edgesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.edges, "Edges", "json");
    }

    let query = { };
    if (!$dara.isNull(request.dagId)) {
      query["DagId"] = request.dagId;
    }

    if (!$dara.isNull(request.edgesShrink)) {
      query["Edges"] = request.edgesShrink;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateTaskFlowEdges",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateTaskFlowEdgesResponse>(await this.callApi(params, req, runtime), new $_model.UpdateTaskFlowEdgesResponse({}));
  }

  /**
   * Updates the start node and end node of multiple edges at a time for a task flow.
   * 
   * @remarks
   * ###
   * The edges can be updated only when the following conditions are met:
   * 1.  The specified edge exists in the directed acyclic graph (DAG) of the task flow specified by DagId.
   * 2.  The specified edge nodes exist in the DAG of the task flow specified by DagId.
   * 3.  After the update, rings do not exist in the DAG.
   * 
   * @param request - UpdateTaskFlowEdgesRequest
   * @returns UpdateTaskFlowEdgesResponse
   */
  async updateTaskFlowEdges(request: $_model.UpdateTaskFlowEdgesRequest): Promise<$_model.UpdateTaskFlowEdgesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateTaskFlowEdgesWithOptions(request, runtime);
  }

  /**
   * Updates the name and description of a task flow.
   * 
   * @param request - UpdateTaskFlowNameAndDescRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTaskFlowNameAndDescResponse
   */
  async updateTaskFlowNameAndDescWithOptions(request: $_model.UpdateTaskFlowNameAndDescRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateTaskFlowNameAndDescResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dagId)) {
      query["DagId"] = request.dagId;
    }

    if (!$dara.isNull(request.dagName)) {
      query["DagName"] = request.dagName;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateTaskFlowNameAndDesc",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateTaskFlowNameAndDescResponse>(await this.callApi(params, req, runtime), new $_model.UpdateTaskFlowNameAndDescResponse({}));
  }

  /**
   * Updates the name and description of a task flow.
   * 
   * @param request - UpdateTaskFlowNameAndDescRequest
   * @returns UpdateTaskFlowNameAndDescResponse
   */
  async updateTaskFlowNameAndDesc(request: $_model.UpdateTaskFlowNameAndDescRequest): Promise<$_model.UpdateTaskFlowNameAndDescResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateTaskFlowNameAndDescWithOptions(request, runtime);
  }

  /**
   * Updates the notification settings for task flows.
   * 
   * @param request - UpdateTaskFlowNotificationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTaskFlowNotificationResponse
   */
  async updateTaskFlowNotificationWithOptions(request: $_model.UpdateTaskFlowNotificationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateTaskFlowNotificationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dagId)) {
      query["DagId"] = request.dagId;
    }

    if (!$dara.isNull(request.dagNotificationFail)) {
      query["DagNotificationFail"] = request.dagNotificationFail;
    }

    if (!$dara.isNull(request.dagNotificationSla)) {
      query["DagNotificationSla"] = request.dagNotificationSla;
    }

    if (!$dara.isNull(request.dagNotificationSuccess)) {
      query["DagNotificationSuccess"] = request.dagNotificationSuccess;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateTaskFlowNotification",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateTaskFlowNotificationResponse>(await this.callApi(params, req, runtime), new $_model.UpdateTaskFlowNotificationResponse({}));
  }

  /**
   * Updates the notification settings for task flows.
   * 
   * @param request - UpdateTaskFlowNotificationRequest
   * @returns UpdateTaskFlowNotificationResponse
   */
  async updateTaskFlowNotification(request: $_model.UpdateTaskFlowNotificationRequest): Promise<$_model.UpdateTaskFlowNotificationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateTaskFlowNotificationWithOptions(request, runtime);
  }

  /**
   * Changes the owner of a task flow.
   * 
   * @remarks
   * Note: The new owner of the task flow must belong to the same tenant as the previous owner.
   * 
   * @param request - UpdateTaskFlowOwnerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTaskFlowOwnerResponse
   */
  async updateTaskFlowOwnerWithOptions(request: $_model.UpdateTaskFlowOwnerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateTaskFlowOwnerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dagId)) {
      query["DagId"] = request.dagId;
    }

    if (!$dara.isNull(request.newOwnerId)) {
      query["NewOwnerId"] = request.newOwnerId;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateTaskFlowOwner",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateTaskFlowOwnerResponse>(await this.callApi(params, req, runtime), new $_model.UpdateTaskFlowOwnerResponse({}));
  }

  /**
   * Changes the owner of a task flow.
   * 
   * @remarks
   * Note: The new owner of the task flow must belong to the same tenant as the previous owner.
   * 
   * @param request - UpdateTaskFlowOwnerRequest
   * @returns UpdateTaskFlowOwnerResponse
   */
  async updateTaskFlowOwner(request: $_model.UpdateTaskFlowOwnerRequest): Promise<$_model.UpdateTaskFlowOwnerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateTaskFlowOwnerWithOptions(request, runtime);
  }

  /**
   * Fully updates the edges of a task flow.
   * 
   * @remarks
   * You can call this operation to perform a full update. For incremental updates, see AddTaskFlowEdges, UpdateTaskFlowEdges, and DeleteTaskFlowEdgesByMultiCondition.
   * 
   * @param tmpReq - UpdateTaskFlowRelationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTaskFlowRelationsResponse
   */
  async updateTaskFlowRelationsWithOptions(tmpReq: $_model.UpdateTaskFlowRelationsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateTaskFlowRelationsResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateTaskFlowRelationsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.edges)) {
      request.edgesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.edges, "Edges", "json");
    }

    let query = { };
    if (!$dara.isNull(request.dagId)) {
      query["DagId"] = request.dagId;
    }

    if (!$dara.isNull(request.edgesShrink)) {
      query["Edges"] = request.edgesShrink;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateTaskFlowRelations",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateTaskFlowRelationsResponse>(await this.callApi(params, req, runtime), new $_model.UpdateTaskFlowRelationsResponse({}));
  }

  /**
   * Fully updates the edges of a task flow.
   * 
   * @remarks
   * You can call this operation to perform a full update. For incremental updates, see AddTaskFlowEdges, UpdateTaskFlowEdges, and DeleteTaskFlowEdgesByMultiCondition.
   * 
   * @param request - UpdateTaskFlowRelationsRequest
   * @returns UpdateTaskFlowRelationsResponse
   */
  async updateTaskFlowRelations(request: $_model.UpdateTaskFlowRelationsRequest): Promise<$_model.UpdateTaskFlowRelationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateTaskFlowRelationsWithOptions(request, runtime);
  }

  /**
   * Updates the scheduling properties for a task flow.
   * 
   * @remarks
   * You can call this operation to update the scheduling properties for a task flow in the editing state. You can configure a **timed scheduling** task flow or an **event scheduling** task flow. When you configure a **timed scheduling** task flow, you can choose from one-time scheduling or periodic scheduling. When you configure an **event scheduling** task flow, you can subscribe to task flows or task flow nodes.****\\
   * After you update the scheduling properties, you need to publish and deploy the task flow again. The new task flow instance will run based on the updated scheduling properties.
   * 
   * @param request - UpdateTaskFlowScheduleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTaskFlowScheduleResponse
   */
  async updateTaskFlowScheduleWithOptions(request: $_model.UpdateTaskFlowScheduleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateTaskFlowScheduleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cronBeginDate)) {
      query["CronBeginDate"] = request.cronBeginDate;
    }

    if (!$dara.isNull(request.cronEndDate)) {
      query["CronEndDate"] = request.cronEndDate;
    }

    if (!$dara.isNull(request.cronStr)) {
      query["CronStr"] = request.cronStr;
    }

    if (!$dara.isNull(request.cronType)) {
      query["CronType"] = request.cronType;
    }

    if (!$dara.isNull(request.dagId)) {
      query["DagId"] = request.dagId;
    }

    if (!$dara.isNull(request.scheduleParam)) {
      query["ScheduleParam"] = request.scheduleParam;
    }

    if (!$dara.isNull(request.scheduleSwitch)) {
      query["ScheduleSwitch"] = request.scheduleSwitch;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.timeZoneId)) {
      query["TimeZoneId"] = request.timeZoneId;
    }

    if (!$dara.isNull(request.triggerType)) {
      query["TriggerType"] = request.triggerType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateTaskFlowSchedule",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateTaskFlowScheduleResponse>(await this.callApi(params, req, runtime), new $_model.UpdateTaskFlowScheduleResponse({}));
  }

  /**
   * Updates the scheduling properties for a task flow.
   * 
   * @remarks
   * You can call this operation to update the scheduling properties for a task flow in the editing state. You can configure a **timed scheduling** task flow or an **event scheduling** task flow. When you configure a **timed scheduling** task flow, you can choose from one-time scheduling or periodic scheduling. When you configure an **event scheduling** task flow, you can subscribe to task flows or task flow nodes.****\\
   * After you update the scheduling properties, you need to publish and deploy the task flow again. The new task flow instance will run based on the updated scheduling properties.
   * 
   * @param request - UpdateTaskFlowScheduleRequest
   * @returns UpdateTaskFlowScheduleResponse
   */
  async updateTaskFlowSchedule(request: $_model.UpdateTaskFlowScheduleRequest): Promise<$_model.UpdateTaskFlowScheduleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateTaskFlowScheduleWithOptions(request, runtime);
  }

  /**
   * Updates the time variables for a task flow.
   * 
   * @param request - UpdateTaskFlowTimeVariablesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTaskFlowTimeVariablesResponse
   */
  async updateTaskFlowTimeVariablesWithOptions(request: $_model.UpdateTaskFlowTimeVariablesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateTaskFlowTimeVariablesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dagId)) {
      query["DagId"] = request.dagId;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.timeVariables)) {
      query["TimeVariables"] = request.timeVariables;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateTaskFlowTimeVariables",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateTaskFlowTimeVariablesResponse>(await this.callApi(params, req, runtime), new $_model.UpdateTaskFlowTimeVariablesResponse({}));
  }

  /**
   * Updates the time variables for a task flow.
   * 
   * @param request - UpdateTaskFlowTimeVariablesRequest
   * @returns UpdateTaskFlowTimeVariablesResponse
   */
  async updateTaskFlowTimeVariables(request: $_model.UpdateTaskFlowTimeVariablesRequest): Promise<$_model.UpdateTaskFlowTimeVariablesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateTaskFlowTimeVariablesWithOptions(request, runtime);
  }

  /**
   * Updates the name of a specified task.
   * 
   * @param request - UpdateTaskNameRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTaskNameResponse
   */
  async updateTaskNameWithOptions(request: $_model.UpdateTaskNameRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateTaskNameResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.nodeId)) {
      query["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.nodeName)) {
      query["NodeName"] = request.nodeName;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateTaskName",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateTaskNameResponse>(await this.callApi(params, req, runtime), new $_model.UpdateTaskNameResponse({}));
  }

  /**
   * Updates the name of a specified task.
   * 
   * @param request - UpdateTaskNameRequest
   * @returns UpdateTaskNameResponse
   */
  async updateTaskName(request: $_model.UpdateTaskNameRequest): Promise<$_model.UpdateTaskNameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateTaskNameWithOptions(request, runtime);
  }

  /**
   * Updates the output variables for a specified task node.
   * 
   * @remarks
   * Only nodes of single-instance SQL assignment, script code, and ECS remote command have output variables.
   * 
   * @param request - UpdateTaskOutputRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTaskOutputResponse
   */
  async updateTaskOutputWithOptions(request: $_model.UpdateTaskOutputRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateTaskOutputResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.nodeId)) {
      query["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.nodeOutput)) {
      query["NodeOutput"] = request.nodeOutput;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateTaskOutput",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateTaskOutputResponse>(await this.callApi(params, req, runtime), new $_model.UpdateTaskOutputResponse({}));
  }

  /**
   * Updates the output variables for a specified task node.
   * 
   * @remarks
   * Only nodes of single-instance SQL assignment, script code, and ECS remote command have output variables.
   * 
   * @param request - UpdateTaskOutputRequest
   * @returns UpdateTaskOutputResponse
   */
  async updateTaskOutput(request: $_model.UpdateTaskOutputRequest): Promise<$_model.UpdateTaskOutputResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateTaskOutputWithOptions(request, runtime);
  }

  /**
   * Updates time variables for a task.
   * 
   * @param request - UpdateTaskTimeVariablesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTaskTimeVariablesResponse
   */
  async updateTaskTimeVariablesWithOptions(request: $_model.UpdateTaskTimeVariablesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateTaskTimeVariablesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.nodeId)) {
      query["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.timeVariables)) {
      query["TimeVariables"] = request.timeVariables;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateTaskTimeVariables",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateTaskTimeVariablesResponse>(await this.callApi(params, req, runtime), new $_model.UpdateTaskTimeVariablesResponse({}));
  }

  /**
   * Updates time variables for a task.
   * 
   * @param request - UpdateTaskTimeVariablesRequest
   * @returns UpdateTaskTimeVariablesResponse
   */
  async updateTaskTimeVariables(request: $_model.UpdateTaskTimeVariablesRequest): Promise<$_model.UpdateTaskTimeVariablesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateTaskTimeVariablesWithOptions(request, runtime);
  }

  /**
   * Updates user information.
   * 
   * @param request - UpdateUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateUserResponse
   */
  async updateUserWithOptions(request: $_model.UpdateUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxExecuteCount)) {
      query["MaxExecuteCount"] = request.maxExecuteCount;
    }

    if (!$dara.isNull(request.maxResultCount)) {
      query["MaxResultCount"] = request.maxResultCount;
    }

    if (!$dara.isNull(request.mobile)) {
      query["Mobile"] = request.mobile;
    }

    if (!$dara.isNull(request.roleNames)) {
      query["RoleNames"] = request.roleNames;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.uid)) {
      query["Uid"] = request.uid;
    }

    if (!$dara.isNull(request.uidString)) {
      query["UidString"] = request.uidString;
    }

    if (!$dara.isNull(request.userNick)) {
      query["UserNick"] = request.userNick;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateUser",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateUserResponse>(await this.callApi(params, req, runtime), new $_model.UpdateUserResponse({}));
  }

  /**
   * Updates user information.
   * 
   * @param request - UpdateUserRequest
   * @returns UpdateUserResponse
   */
  async updateUser(request: $_model.UpdateUserRequest): Promise<$_model.UpdateUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateUserWithOptions(request, runtime);
  }

  /**
   * Updates the information about a workspace.
   * 
   * @param request - UpdateWorkspaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateWorkspaceResponse
   */
  async updateWorkspaceWithOptions(request: $_model.UpdateWorkspaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateWorkspaceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    if (!$dara.isNull(request.workspaceName)) {
      query["WorkspaceName"] = request.workspaceName;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateWorkspace",
      version: "2018-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateWorkspaceResponse>(await this.callApi(params, req, runtime), new $_model.UpdateWorkspaceResponse({}));
  }

  /**
   * Updates the information about a workspace.
   * 
   * @param request - UpdateWorkspaceRequest
   * @returns UpdateWorkspaceResponse
   */
  async updateWorkspace(request: $_model.UpdateWorkspaceRequest): Promise<$_model.UpdateWorkspaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateWorkspaceWithOptions(request, runtime);
  }

}
