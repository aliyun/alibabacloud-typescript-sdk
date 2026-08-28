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
    this._endpointMap = {
      'cn-shanghai': "das.cn-shanghai.aliyuncs.com",
      'cn-north-2-gov-1': "das.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("das", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Adds a database instance to Database Autonomy Service (DAS).
   * 
   * @remarks
   * Before you call this operation, take note of the following items:
   * - If you use an Alibaba Cloud SDK or a DAS SDK to call this operation, we recommend that you use the latest version of the SDK.
   * - If you use an SDK to call DAS, you must set the region to cn-shanghai.
   * 
   * @param request - AddHDMInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddHDMInstanceResponse
   */
  async addHDMInstanceWithOptions(request: $_model.AddHDMInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddHDMInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.engine)) {
      query["Engine"] = request.engine;
    }

    if (!$dara.isNull(request.flushAccount)) {
      query["FlushAccount"] = request.flushAccount;
    }

    if (!$dara.isNull(request.instanceAlias)) {
      query["InstanceAlias"] = request.instanceAlias;
    }

    if (!$dara.isNull(request.instanceArea)) {
      query["InstanceArea"] = request.instanceArea;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!$dara.isNull(request.networkType)) {
      query["NetworkType"] = request.networkType;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.port)) {
      query["Port"] = request.port;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    if (!$dara.isNull(request.username)) {
      query["Username"] = request.username;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    if (!$dara.isNull(request.context)) {
      query["__context"] = request.context;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddHDMInstance",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddHDMInstanceResponse>(await this.callApi(params, req, runtime), new $_model.AddHDMInstanceResponse({}));
  }

  /**
   * Adds a database instance to Database Autonomy Service (DAS).
   * 
   * @remarks
   * Before you call this operation, take note of the following items:
   * - If you use an Alibaba Cloud SDK or a DAS SDK to call this operation, we recommend that you use the latest version of the SDK.
   * - If you use an SDK to call DAS, you must set the region to cn-shanghai.
   * 
   * @param request - AddHDMInstanceRequest
   * @returns AddHDMInstanceResponse
   */
  async addHDMInstance(request: $_model.AddHDMInstanceRequest): Promise<$_model.AddHDMInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addHDMInstanceWithOptions(request, runtime);
  }

  /**
   * Provides an asynchronous interface for interacting with DAS Agent powered by large language model capabilities.
   * 
   * @remarks
   * Before you begin:
   * - Use the latest version of the Alibaba Cloud or DAS SDK.
   * - When calling DAS by using the SDK, set the region to cn-shanghai.
   * - Only database instances with DAS Enterprise Edition activated support creating batch tasks. For databases and regions supported by each DAS Enterprise Edition version, see [DAS editions and supported features](https://help.aliyun.com/document_detail/156204.html).
   * For more methods and examples of interacting with DAS Agent by using the Chat API, see [Best practices for DAS Agent interaction (integrating Chat API)](https://www.alibabacloud.com/help/en/das/developer-reference/chat-api-best-practice).
   * 
   * @param request - ChatRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChatResponse
   */
  async *chatWithSSE(request: $_model.ChatRequest, runtime: $dara.RuntimeOptions): AsyncGenerator<$_model.ChatResponse, any, unknown> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentId)) {
      query["AgentId"] = request.agentId;
    }

    if (!$dara.isNull(request.message)) {
      query["Message"] = request.message;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.summary)) {
      query["Summary"] = request.summary;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "Chat",
      version: "2020-01-16",
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
      if (!$dara.isNull(resp.event) && !$dara.isNull(resp.event.data)) {
        let data = JSON.parse(resp.event.data);
        yield $dara.cast<$_model.ChatResponse>({
          statusCode: resp.statusCode,
          headers: resp.headers,
          id: resp.event.id,
          event: resp.event.event,
          body: data,
        }, new $_model.ChatResponse({}));
      }

    }
  }

  /**
   * Provides an asynchronous interface for interacting with DAS Agent powered by large language model capabilities.
   * 
   * @remarks
   * Before you begin:
   * - Use the latest version of the Alibaba Cloud or DAS SDK.
   * - When calling DAS by using the SDK, set the region to cn-shanghai.
   * - Only database instances with DAS Enterprise Edition activated support creating batch tasks. For databases and regions supported by each DAS Enterprise Edition version, see [DAS editions and supported features](https://help.aliyun.com/document_detail/156204.html).
   * For more methods and examples of interacting with DAS Agent by using the Chat API, see [Best practices for DAS Agent interaction (integrating Chat API)](https://www.alibabacloud.com/help/en/das/developer-reference/chat-api-best-practice).
   * 
   * @param request - ChatRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChatResponse
   */
  async chatWithOptions(request: $_model.ChatRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChatResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentId)) {
      query["AgentId"] = request.agentId;
    }

    if (!$dara.isNull(request.message)) {
      query["Message"] = request.message;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.summary)) {
      query["Summary"] = request.summary;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "Chat",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChatResponse>(await this.callApi(params, req, runtime), new $_model.ChatResponse({}));
  }

  /**
   * Provides an asynchronous interface for interacting with DAS Agent powered by large language model capabilities.
   * 
   * @remarks
   * Before you begin:
   * - Use the latest version of the Alibaba Cloud or DAS SDK.
   * - When calling DAS by using the SDK, set the region to cn-shanghai.
   * - Only database instances with DAS Enterprise Edition activated support creating batch tasks. For databases and regions supported by each DAS Enterprise Edition version, see [DAS editions and supported features](https://help.aliyun.com/document_detail/156204.html).
   * For more methods and examples of interacting with DAS Agent by using the Chat API, see [Best practices for DAS Agent interaction (integrating Chat API)](https://www.alibabacloud.com/help/en/das/developer-reference/chat-api-best-practice).
   * 
   * @param request - ChatRequest
   * @returns ChatResponse
   */
  async chat(request: $_model.ChatRequest): Promise<$_model.ChatResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.chatWithOptions(request, runtime);
  }

  /**
   * Creates a cache analysis task by calling the CreateCacheAnalysisJob operation.
   * 
   * @remarks
   * Before you begin:
   * - Use the latest version of the Alibaba Cloud or DAS SDK.
   * - When calling DAS by using the SDK, set the region to cn-shanghai.
   * - Only Redis data structures and the following Tair-developed data structures are supported for analysis: TairString, TairHash, TairGIS, TairBloom, TairDoc, TairCpc, and TairZset. Other Tair-developed data structures are not supported.
   * - If the specifications of the target instance have been changed, backup files generated before the change cannot be analyzed.
   * - Tair ESSD-based instances are not supported.
   * 
   * @param request - CreateCacheAnalysisJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCacheAnalysisJobResponse
   */
  async createCacheAnalysisJobWithOptions(request: $_model.CreateCacheAnalysisJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCacheAnalysisJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupSetId)) {
      query["BackupSetId"] = request.backupSetId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.nodeId)) {
      query["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.separators)) {
      query["Separators"] = request.separators;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCacheAnalysisJob",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCacheAnalysisJobResponse>(await this.callApi(params, req, runtime), new $_model.CreateCacheAnalysisJobResponse({}));
  }

  /**
   * Creates a cache analysis task by calling the CreateCacheAnalysisJob operation.
   * 
   * @remarks
   * Before you begin:
   * - Use the latest version of the Alibaba Cloud or DAS SDK.
   * - When calling DAS by using the SDK, set the region to cn-shanghai.
   * - Only Redis data structures and the following Tair-developed data structures are supported for analysis: TairString, TairHash, TairGIS, TairBloom, TairDoc, TairCpc, and TairZset. Other Tair-developed data structures are not supported.
   * - If the specifications of the target instance have been changed, backup files generated before the change cannot be analyzed.
   * - Tair ESSD-based instances are not supported.
   * 
   * @param request - CreateCacheAnalysisJobRequest
   * @returns CreateCacheAnalysisJobResponse
   */
  async createCacheAnalysisJob(request: $_model.CreateCacheAnalysisJobRequest): Promise<$_model.CreateCacheAnalysisJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCacheAnalysisJobWithOptions(request, runtime);
  }

  /**
   * You can call the CreateCloudBenchTasks operation to create a stress testing task.
   * 
   * @remarks
   * Database Autonomy Service (DAS) provides intelligent stress testing to help you verify whether your instance type needs to be scaled out to effectively handle service traffic peaks. For more information, see [Intelligent stress testing](https://help.aliyun.com/document_detail/155068.html). The database must meet the following prerequisites:
   * - The source database only supports RDS MySQL High Availability Edition or RDS Enterprise Edition, and PolarDB MySQL cluster edition.
   * - The target database instance is RDS MySQL or PolarDB MySQL.
   * - The instance is connected to DAS. For more information, see [Connect to Alibaba Cloud database instances](https://help.aliyun.com/document_detail/65405.html).
   * - DAS Enterprise Edition must be enabled. For more information, see [DAS Enterprise Edition](https://help.aliyun.com/document_detail/190912.html).
   * 
   * @param request - CreateCloudBenchTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCloudBenchTasksResponse
   */
  async createCloudBenchTasksWithOptions(request: $_model.CreateCloudBenchTasksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCloudBenchTasksResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.amount)) {
      query["Amount"] = request.amount;
    }

    if (!$dara.isNull(request.backupId)) {
      query["BackupId"] = request.backupId;
    }

    if (!$dara.isNull(request.backupTime)) {
      query["BackupTime"] = request.backupTime;
    }

    if (!$dara.isNull(request.clientType)) {
      query["ClientType"] = request.clientType;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.dstConnectionString)) {
      query["DstConnectionString"] = request.dstConnectionString;
    }

    if (!$dara.isNull(request.dstInstanceId)) {
      query["DstInstanceId"] = request.dstInstanceId;
    }

    if (!$dara.isNull(request.dstPort)) {
      query["DstPort"] = request.dstPort;
    }

    if (!$dara.isNull(request.dstSuperAccount)) {
      query["DstSuperAccount"] = request.dstSuperAccount;
    }

    if (!$dara.isNull(request.dstSuperPassword)) {
      query["DstSuperPassword"] = request.dstSuperPassword;
    }

    if (!$dara.isNull(request.dstType)) {
      query["DstType"] = request.dstType;
    }

    if (!$dara.isNull(request.dtsJobClass)) {
      query["DtsJobClass"] = request.dtsJobClass;
    }

    if (!$dara.isNull(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!$dara.isNull(request.endState)) {
      query["EndState"] = request.endState;
    }

    if (!$dara.isNull(request.gatewayVpcId)) {
      query["GatewayVpcId"] = request.gatewayVpcId;
    }

    if (!$dara.isNull(request.gatewayVpcIp)) {
      query["GatewayVpcIp"] = request.gatewayVpcIp;
    }

    if (!$dara.isNull(request.rate)) {
      query["Rate"] = request.rate;
    }

    if (!$dara.isNull(request.requestDuration)) {
      query["RequestDuration"] = request.requestDuration;
    }

    if (!$dara.isNull(request.requestEndTime)) {
      query["RequestEndTime"] = request.requestEndTime;
    }

    if (!$dara.isNull(request.requestStartTime)) {
      query["RequestStartTime"] = request.requestStartTime;
    }

    if (!$dara.isNull(request.smartPressureTime)) {
      query["SmartPressureTime"] = request.smartPressureTime;
    }

    if (!$dara.isNull(request.srcInstanceId)) {
      query["SrcInstanceId"] = request.srcInstanceId;
    }

    if (!$dara.isNull(request.srcPublicIp)) {
      query["SrcPublicIp"] = request.srcPublicIp;
    }

    if (!$dara.isNull(request.srcSuperAccount)) {
      query["SrcSuperAccount"] = request.srcSuperAccount;
    }

    if (!$dara.isNull(request.srcSuperPassword)) {
      query["SrcSuperPassword"] = request.srcSuperPassword;
    }

    if (!$dara.isNull(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    if (!$dara.isNull(request.workDir)) {
      query["WorkDir"] = request.workDir;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCloudBenchTasks",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCloudBenchTasksResponse>(await this.callApi(params, req, runtime), new $_model.CreateCloudBenchTasksResponse({}));
  }

  /**
   * You can call the CreateCloudBenchTasks operation to create a stress testing task.
   * 
   * @remarks
   * Database Autonomy Service (DAS) provides intelligent stress testing to help you verify whether your instance type needs to be scaled out to effectively handle service traffic peaks. For more information, see [Intelligent stress testing](https://help.aliyun.com/document_detail/155068.html). The database must meet the following prerequisites:
   * - The source database only supports RDS MySQL High Availability Edition or RDS Enterprise Edition, and PolarDB MySQL cluster edition.
   * - The target database instance is RDS MySQL or PolarDB MySQL.
   * - The instance is connected to DAS. For more information, see [Connect to Alibaba Cloud database instances](https://help.aliyun.com/document_detail/65405.html).
   * - DAS Enterprise Edition must be enabled. For more information, see [DAS Enterprise Edition](https://help.aliyun.com/document_detail/190912.html).
   * 
   * @param request - CreateCloudBenchTasksRequest
   * @returns CreateCloudBenchTasksResponse
   */
  async createCloudBenchTasks(request: $_model.CreateCloudBenchTasksRequest): Promise<$_model.CreateCloudBenchTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCloudBenchTasksWithOptions(request, runtime);
  }

  /**
   * Creates a diagnostic report.
   * 
   * @remarks
   * Before you call this operation, take note of the following items:
   * - If you use an Alibaba Cloud SDK, make sure that the aliyun-sdk-core version is later than 4.3.3. We recommend that you use the latest version.
   * - The version of Database Autonomy Service (DAS) SDK must be 1.0.3 or later.
   * - If you use an SDK to call DAS, you must set the region to cn-shanghai.
   * - This operation supports the following database engines:
   *   - RDS MySQL
   *   - PolarDB for MySQL
   *   - Redis
   * 
   * @param request - CreateDiagnosticReportRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDiagnosticReportResponse
   */
  async createDiagnosticReportWithOptions(request: $_model.CreateDiagnosticReportRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDiagnosticReportResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDiagnosticReport",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDiagnosticReportResponse>(await this.callApi(params, req, runtime), new $_model.CreateDiagnosticReportResponse({}));
  }

  /**
   * Creates a diagnostic report.
   * 
   * @remarks
   * Before you call this operation, take note of the following items:
   * - If you use an Alibaba Cloud SDK, make sure that the aliyun-sdk-core version is later than 4.3.3. We recommend that you use the latest version.
   * - The version of Database Autonomy Service (DAS) SDK must be 1.0.3 or later.
   * - If you use an SDK to call DAS, you must set the region to cn-shanghai.
   * - This operation supports the following database engines:
   *   - RDS MySQL
   *   - PolarDB for MySQL
   *   - Redis
   * 
   * @param request - CreateDiagnosticReportRequest
   * @returns CreateDiagnosticReportResponse
   */
  async createDiagnosticReport(request: $_model.CreateDiagnosticReportRequest): Promise<$_model.CreateDiagnosticReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDiagnosticReportWithOptions(request, runtime);
  }

  /**
   * Calls the CreateKillInstanceSessionTask operation to create a task that terminates sessions.
   * 
   * @remarks
   * - This operation is applicable only to ApsaraDB RDS for MySQL and PolarDB for MySQL instances.
   * - When using the Alibaba Cloud or DAS SDK, use the latest version.
   * - When calling DAS by using the SDK, set the region to cn-shanghai.
   * 
   * @param request - CreateKillInstanceSessionTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateKillInstanceSessionTaskResponse
   */
  async createKillInstanceSessionTaskWithOptions(request: $_model.CreateKillInstanceSessionTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateKillInstanceSessionTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbUser)) {
      query["DbUser"] = request.dbUser;
    }

    if (!$dara.isNull(request.dbUserPassword)) {
      query["DbUserPassword"] = request.dbUserPassword;
    }

    if (!$dara.isNull(request.ignoredUsers)) {
      query["IgnoredUsers"] = request.ignoredUsers;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.killAllSessions)) {
      query["KillAllSessions"] = request.killAllSessions;
    }

    if (!$dara.isNull(request.nodeId)) {
      query["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.sessionIds)) {
      query["SessionIds"] = request.sessionIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateKillInstanceSessionTask",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateKillInstanceSessionTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateKillInstanceSessionTaskResponse({}));
  }

  /**
   * Calls the CreateKillInstanceSessionTask operation to create a task that terminates sessions.
   * 
   * @remarks
   * - This operation is applicable only to ApsaraDB RDS for MySQL and PolarDB for MySQL instances.
   * - When using the Alibaba Cloud or DAS SDK, use the latest version.
   * - When calling DAS by using the SDK, set the region to cn-shanghai.
   * 
   * @param request - CreateKillInstanceSessionTaskRequest
   * @returns CreateKillInstanceSessionTaskResponse
   */
  async createKillInstanceSessionTask(request: $_model.CreateKillInstanceSessionTaskRequest): Promise<$_model.CreateKillInstanceSessionTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createKillInstanceSessionTaskWithOptions(request, runtime);
  }

  /**
   * 创建结束会话的任务
   * 
   * @param request - CreateKillInstanceSessionTaskWithMaintainUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateKillInstanceSessionTaskWithMaintainUserResponse
   */
  async createKillInstanceSessionTaskWithMaintainUserWithOptions(request: $_model.CreateKillInstanceSessionTaskWithMaintainUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateKillInstanceSessionTaskWithMaintainUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ignoredUsers)) {
      query["IgnoredUsers"] = request.ignoredUsers;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.killAllSessions)) {
      query["KillAllSessions"] = request.killAllSessions;
    }

    if (!$dara.isNull(request.nodeId)) {
      query["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.sessionIds)) {
      query["SessionIds"] = request.sessionIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateKillInstanceSessionTaskWithMaintainUser",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateKillInstanceSessionTaskWithMaintainUserResponse>(await this.callApi(params, req, runtime), new $_model.CreateKillInstanceSessionTaskWithMaintainUserResponse({}));
  }

  /**
   * 创建结束会话的任务
   * 
   * @param request - CreateKillInstanceSessionTaskWithMaintainUserRequest
   * @returns CreateKillInstanceSessionTaskWithMaintainUserResponse
   */
  async createKillInstanceSessionTaskWithMaintainUser(request: $_model.CreateKillInstanceSessionTaskWithMaintainUserRequest): Promise<$_model.CreateKillInstanceSessionTaskWithMaintainUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createKillInstanceSessionTaskWithMaintainUserWithOptions(request, runtime);
  }

  /**
   * Creates a recent deadlock analysis task.
   * 
   * @remarks
   * This operation creates a recent deadlock analysis task. Database Autonomy Service (DAS) analyzes the most recent deadlock log returned by SHOW ENGINE INNODB STATUS. If multiple deadlocks have occurred, DAS analyzes only the most recent one. For more information, see [Recent deadlock analysis](https://help.aliyun.com/document_detail/2858236.html).
   * Before you begin, make sure the following prerequisites are met:
   * - The database engine is one of the following: ApsaraDB RDS for MySQL, self-managed MySQL, PolarDB for MySQL, or PolarDB-X 2.0.
   * - If you use the China site (Chinese) or DAS SDK, use the latest version.
   * - When you call DAS by using the SDK, set the region to cn-shanghai.
   * 
   * @param request - CreateLatestDeadLockAnalysisRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateLatestDeadLockAnalysisResponse
   */
  async createLatestDeadLockAnalysisWithOptions(request: $_model.CreateLatestDeadLockAnalysisRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateLatestDeadLockAnalysisResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.nodeId)) {
      body["NodeId"] = request.nodeId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateLatestDeadLockAnalysis",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateLatestDeadLockAnalysisResponse>(await this.callApi(params, req, runtime), new $_model.CreateLatestDeadLockAnalysisResponse({}));
  }

  /**
   * Creates a recent deadlock analysis task.
   * 
   * @remarks
   * This operation creates a recent deadlock analysis task. Database Autonomy Service (DAS) analyzes the most recent deadlock log returned by SHOW ENGINE INNODB STATUS. If multiple deadlocks have occurred, DAS analyzes only the most recent one. For more information, see [Recent deadlock analysis](https://help.aliyun.com/document_detail/2858236.html).
   * Before you begin, make sure the following prerequisites are met:
   * - The database engine is one of the following: ApsaraDB RDS for MySQL, self-managed MySQL, PolarDB for MySQL, or PolarDB-X 2.0.
   * - If you use the China site (Chinese) or DAS SDK, use the latest version.
   * - When you call DAS by using the SDK, set the region to cn-shanghai.
   * 
   * @param request - CreateLatestDeadLockAnalysisRequest
   * @returns CreateLatestDeadLockAnalysisResponse
   */
  async createLatestDeadLockAnalysis(request: $_model.CreateLatestDeadLockAnalysisRequest): Promise<$_model.CreateLatestDeadLockAnalysisResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createLatestDeadLockAnalysisWithOptions(request, runtime);
  }

  /**
   * Adds a tag to a SQL template.
   * 
   * @remarks
   * - If you use Alibaba Cloud SDK or Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
   * - If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
   * - This operation supports the following database engines:
   *   - ApsaraDB RDS for MySQL
   *   - PolarDB for MySQL
   *   - ApsaraDB RDS for PostgreSQL
   * 
   * @param request - CreateQueryOptimizeTagRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateQueryOptimizeTagResponse
   */
  async createQueryOptimizeTagWithOptions(request: $_model.CreateQueryOptimizeTagRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateQueryOptimizeTagResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.comments)) {
      query["Comments"] = request.comments;
    }

    if (!$dara.isNull(request.engine)) {
      query["Engine"] = request.engine;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.sqlIds)) {
      query["SqlIds"] = request.sqlIds;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateQueryOptimizeTag",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateQueryOptimizeTagResponse>(await this.callApi(params, req, runtime), new $_model.CreateQueryOptimizeTagResponse({}));
  }

  /**
   * Adds a tag to a SQL template.
   * 
   * @remarks
   * - If you use Alibaba Cloud SDK or Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
   * - If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
   * - This operation supports the following database engines:
   *   - ApsaraDB RDS for MySQL
   *   - PolarDB for MySQL
   *   - ApsaraDB RDS for PostgreSQL
   * 
   * @param request - CreateQueryOptimizeTagRequest
   * @returns CreateQueryOptimizeTagResponse
   */
  async createQueryOptimizeTag(request: $_model.CreateQueryOptimizeTagRequest): Promise<$_model.CreateQueryOptimizeTagResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createQueryOptimizeTagWithOptions(request, runtime);
  }

  /**
   * Initiates an SQL statement diagnostics request.
   * 
   * @remarks
   * Before you call this operation, take note of the following items:
   * - If you use an SDK to call Database Autonomy Service (DAS), you must set the region to cn-shanghai.
   * - This operation supports the following database engines:
   *   - ApsaraDB RDS for MySQL
   *   - ApsaraDB RDS for PostgreSQL
   *   - ApsaraDB RDS for SQL Server
   *   - PolarDB for MySQL
   *   - PolarDB for PostgreSQL (compatible with Oracle)
   *   - ApsaraDB for MongoDB
   * > The minor engine version of ApsaraDB RDS for PostgreSQL instances must be 20221230 or later. For more information about how to check and update the minor engine version of an ApsaraDB RDS for PostgreSQL instance, see [Update the minor engine version of an ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/146895.html).
   * 
   * @param request - CreateRequestDiagnosisRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRequestDiagnosisResponse
   */
  async createRequestDiagnosisWithOptions(request: $_model.CreateRequestDiagnosisRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateRequestDiagnosisResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.database)) {
      query["Database"] = request.database;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.nodeId)) {
      query["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.sql)) {
      query["Sql"] = request.sql;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRequestDiagnosis",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateRequestDiagnosisResponse>(await this.callApi(params, req, runtime), new $_model.CreateRequestDiagnosisResponse({}));
  }

  /**
   * Initiates an SQL statement diagnostics request.
   * 
   * @remarks
   * Before you call this operation, take note of the following items:
   * - If you use an SDK to call Database Autonomy Service (DAS), you must set the region to cn-shanghai.
   * - This operation supports the following database engines:
   *   - ApsaraDB RDS for MySQL
   *   - ApsaraDB RDS for PostgreSQL
   *   - ApsaraDB RDS for SQL Server
   *   - PolarDB for MySQL
   *   - PolarDB for PostgreSQL (compatible with Oracle)
   *   - ApsaraDB for MongoDB
   * > The minor engine version of ApsaraDB RDS for PostgreSQL instances must be 20221230 or later. For more information about how to check and update the minor engine version of an ApsaraDB RDS for PostgreSQL instance, see [Update the minor engine version of an ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/146895.html).
   * 
   * @param request - CreateRequestDiagnosisRequest
   * @returns CreateRequestDiagnosisResponse
   */
  async createRequestDiagnosis(request: $_model.CreateRequestDiagnosisRequest): Promise<$_model.CreateRequestDiagnosisResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createRequestDiagnosisWithOptions(request, runtime);
  }

  /**
   * Creates a cross-service whitelist template for a user.
   * 
   * @remarks
   * Before you begin:
   * - If you use the Alibaba Cloud or DAS SDK, use the latest version.
   * - When you call DAS by using the SDK, set the region to cn-shanghai.
   * - Only database instances with DAS Enterprise Edition activated support creating batch tasks. For information about the databases and regions supported by each DAS Enterprise Edition version, see [DAS editions and supported features](https://help.aliyun.com/document_detail/156204.html).
   * Limits:
   * The maximum number of concurrent executions is 10.
   * 
   * @param request - CreateSecurityIPGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSecurityIPGroupResponse
   */
  async createSecurityIPGroupWithOptions(request: $_model.CreateSecurityIPGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSecurityIPGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.GIpList)) {
      query["GIpList"] = request.GIpList;
    }

    if (!$dara.isNull(request.globalIgName)) {
      query["GlobalIgName"] = request.globalIgName;
    }

    if (!$dara.isNull(request.regionName)) {
      query["RegionName"] = request.regionName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSecurityIPGroup",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSecurityIPGroupResponse>(await this.callApi(params, req, runtime), new $_model.CreateSecurityIPGroupResponse({}));
  }

  /**
   * Creates a cross-service whitelist template for a user.
   * 
   * @remarks
   * Before you begin:
   * - If you use the Alibaba Cloud or DAS SDK, use the latest version.
   * - When you call DAS by using the SDK, set the region to cn-shanghai.
   * - Only database instances with DAS Enterprise Edition activated support creating batch tasks. For information about the databases and regions supported by each DAS Enterprise Edition version, see [DAS editions and supported features](https://help.aliyun.com/document_detail/156204.html).
   * Limits:
   * The maximum number of concurrent executions is 10.
   * 
   * @param request - CreateSecurityIPGroupRequest
   * @returns CreateSecurityIPGroupResponse
   */
  async createSecurityIPGroup(request: $_model.CreateSecurityIPGroupRequest): Promise<$_model.CreateSecurityIPGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSecurityIPGroupWithOptions(request, runtime);
  }

  /**
   * Creates an asynchronous task for detailed data.
   * 
   * @remarks
   * Before you begin:
   * - Use the latest version of the Alibaba Cloud or DAS SDK.
   * - When you call DAS operations by using the SDK, set the region to cn-shanghai.
   * - Only database instances with DAS Enterprise Edition enabled support creating batch tasks. For information about the databases and regions supported by each DAS Enterprise Edition version, see [DAS editions and supported features](https://help.aliyun.com/document_detail/156204.html).
   * Rate limit:
   * The maximum number of concurrent tasks is 10.
   * 
   * @param request - CreateSqlLogTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSqlLogTaskResponse
   */
  async createSqlLogTaskWithOptions(request: $_model.CreateSqlLogTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSqlLogTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.filters)) {
      query["Filters"] = request.filters;
    }

    if (!$dara.isNull(request.role)) {
      query["Role"] = request.role;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.nodeId)) {
      body["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSqlLogTask",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSqlLogTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateSqlLogTaskResponse({}));
  }

  /**
   * Creates an asynchronous task for detailed data.
   * 
   * @remarks
   * Before you begin:
   * - Use the latest version of the Alibaba Cloud or DAS SDK.
   * - When you call DAS operations by using the SDK, set the region to cn-shanghai.
   * - Only database instances with DAS Enterprise Edition enabled support creating batch tasks. For information about the databases and regions supported by each DAS Enterprise Edition version, see [DAS editions and supported features](https://help.aliyun.com/document_detail/156204.html).
   * Rate limit:
   * The maximum number of concurrent tasks is 10.
   * 
   * @param request - CreateSqlLogTaskRequest
   * @returns CreateSqlLogTaskResponse
   */
  async createSqlLogTask(request: $_model.CreateSqlLogTaskRequest): Promise<$_model.CreateSqlLogTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSqlLogTaskWithOptions(request, runtime);
  }

  /**
   * Creates a storage analysis task to query the usage details of one or more databases and tables.
   * 
   * @remarks
   * - This operation is applicable only to ApsaraDB RDS for MySQL instances, PolarDB for MySQL clusters, and ApsaraDB for MongoDB instances.
   * - For ApsaraDB RDS for MySQL instances and PolarDB for MySQL clusters, this operation works the same as the storage analysis feature of the previous version. Tasks generated by this operation cannot be viewed on the Storage Analysis page of the new version in the Database Autonomy Service (DAS) console. If you want to view the tasks and results, call the related API operation to obtain data and save data to your computer.
   * - If you use an Alibaba Cloud SDK or DAS SDK to call this operation, we recommend that you use the latest version of the SDK.
   * - If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
   * 
   * @param request - CreateStorageAnalysisTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateStorageAnalysisTaskResponse
   */
  async createStorageAnalysisTaskWithOptions(request: $_model.CreateStorageAnalysisTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateStorageAnalysisTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.nodeId)) {
      query["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateStorageAnalysisTask",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateStorageAnalysisTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateStorageAnalysisTaskResponse({}));
  }

  /**
   * Creates a storage analysis task to query the usage details of one or more databases and tables.
   * 
   * @remarks
   * - This operation is applicable only to ApsaraDB RDS for MySQL instances, PolarDB for MySQL clusters, and ApsaraDB for MongoDB instances.
   * - For ApsaraDB RDS for MySQL instances and PolarDB for MySQL clusters, this operation works the same as the storage analysis feature of the previous version. Tasks generated by this operation cannot be viewed on the Storage Analysis page of the new version in the Database Autonomy Service (DAS) console. If you want to view the tasks and results, call the related API operation to obtain data and save data to your computer.
   * - If you use an Alibaba Cloud SDK or DAS SDK to call this operation, we recommend that you use the latest version of the SDK.
   * - If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
   * 
   * @param request - CreateStorageAnalysisTaskRequest
   * @returns CreateStorageAnalysisTaskResponse
   */
  async createStorageAnalysisTask(request: $_model.CreateStorageAnalysisTaskRequest): Promise<$_model.CreateStorageAnalysisTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createStorageAnalysisTaskWithOptions(request, runtime);
  }

  /**
   * Deletes a stress testing task.
   * 
   * @remarks
   * Call this API to delete a stress testing task. For more information, see [Intelligent stress testing](https://help.aliyun.com/document_detail/155068.html).
   * 
   * @param request - DeleteCloudBenchTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCloudBenchTaskResponse
   */
  async deleteCloudBenchTaskWithOptions(request: $_model.DeleteCloudBenchTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCloudBenchTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCloudBenchTask",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteCloudBenchTaskResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCloudBenchTaskResponse({}));
  }

  /**
   * Deletes a stress testing task.
   * 
   * @remarks
   * Call this API to delete a stress testing task. For more information, see [Intelligent stress testing](https://help.aliyun.com/document_detail/155068.html).
   * 
   * @param request - DeleteCloudBenchTaskRequest
   * @returns DeleteCloudBenchTaskResponse
   */
  async deleteCloudBenchTask(request: $_model.DeleteCloudBenchTaskRequest): Promise<$_model.DeleteCloudBenchTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCloudBenchTaskWithOptions(request, runtime);
  }

  /**
   * Deletes a cross-product whitelist template for a user.
   * 
   * @remarks
   * - This operation is used to delete the released DBgateway metadata from intelligent stress testing tasks created by the [CreateCloudBenchTasks](https://help.aliyun.com/document_detail/230665.html) operation.
   * - When using the SDK to call DAS, specify the region as cn-shanghai.
   * > When a DBGateway has no heartbeat with the access point for more than 20 seconds, the DBGateway is in the stopped state.
   * 
   * @param request - DeleteSecurityIPGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSecurityIPGroupResponse
   */
  async deleteSecurityIPGroupWithOptions(request: $_model.DeleteSecurityIPGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSecurityIPGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.globalSecurityGroupId)) {
      query["GlobalSecurityGroupId"] = request.globalSecurityGroupId;
    }

    if (!$dara.isNull(request.regionName)) {
      query["RegionName"] = request.regionName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSecurityIPGroup",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSecurityIPGroupResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSecurityIPGroupResponse({}));
  }

  /**
   * Deletes a cross-product whitelist template for a user.
   * 
   * @remarks
   * - This operation is used to delete the released DBgateway metadata from intelligent stress testing tasks created by the [CreateCloudBenchTasks](https://help.aliyun.com/document_detail/230665.html) operation.
   * - When using the SDK to call DAS, specify the region as cn-shanghai.
   * > When a DBGateway has no heartbeat with the access point for more than 20 seconds, the DBGateway is in the stopped state.
   * 
   * @param request - DeleteSecurityIPGroupRequest
   * @returns DeleteSecurityIPGroupResponse
   */
  async deleteSecurityIPGroup(request: $_model.DeleteSecurityIPGroupRequest): Promise<$_model.DeleteSecurityIPGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSecurityIPGroupWithOptions(request, runtime);
  }

  /**
   * Deletes the metadata of a stopped database gateway.
   * 
   * @remarks
   * Call this API to delete metadata for inactive database gateway instances that were created during stress testing created by the [CreateCloudBenchTasks](https://help.aliyun.com/document_detail/230665.html) operation.
   * When you use an SDK to call the DAS service, you must specify the region as `cn-shanghai`.
   * > A database gateway is considered "stopped" if it has not sent a heartbeat to the DAS service for more than 20 seconds.
   * 
   * @param request - DeleteStopGatewayRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteStopGatewayResponse
   */
  async deleteStopGatewayWithOptions(request: $_model.DeleteStopGatewayRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteStopGatewayResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteStopGateway",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteStopGatewayResponse>(await this.callApi(params, req, runtime), new $_model.DeleteStopGatewayResponse({}));
  }

  /**
   * Deletes the metadata of a stopped database gateway.
   * 
   * @remarks
   * Call this API to delete metadata for inactive database gateway instances that were created during stress testing created by the [CreateCloudBenchTasks](https://help.aliyun.com/document_detail/230665.html) operation.
   * When you use an SDK to call the DAS service, you must specify the region as `cn-shanghai`.
   * > A database gateway is considered "stopped" if it has not sent a heartbeat to the DAS service for more than 20 seconds.
   * 
   * @param request - DeleteStopGatewayRequest
   * @returns DeleteStopGatewayResponse
   */
  async deleteStopGateway(request: $_model.DeleteStopGatewayRequest): Promise<$_model.DeleteStopGatewayResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteStopGatewayWithOptions(request, runtime);
  }

  /**
   * Queries the list of audit alert logs for alert search and alert handling.
   * 
   * @remarks
   * Before you begin:
   * - Use the latest version of the Alibaba Cloud or DAS SDK.
   * - When calling DAS by using the SDK, set the region to cn-shanghai.
   * 
   * @param request - DescribeAuditLogsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAuditLogsResponse
   */
  async describeAuditLogsWithOptions(request: $_model.DescribeAuditLogsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAuditLogsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.asyncRequestId)) {
      query["AsyncRequestId"] = request.asyncRequestId;
    }

    if (!$dara.isNull(request.clientIp)) {
      query["ClientIp"] = request.clientIp;
    }

    if (!$dara.isNull(request.clientUa)) {
      query["ClientUa"] = request.clientUa;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.databaseName)) {
      query["DatabaseName"] = request.databaseName;
    }

    if (!$dara.isNull(request.effectRowRange)) {
      query["EffectRowRange"] = request.effectRowRange;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.executeTimeRange)) {
      query["ExecuteTimeRange"] = request.executeTimeRange;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.ipType)) {
      query["IpType"] = request.ipType;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.loadWhiteList)) {
      query["LoadWhiteList"] = request.loadWhiteList;
    }

    if (!$dara.isNull(request.logQueryOpJson)) {
      query["LogQueryOpJson"] = request.logQueryOpJson;
    }

    if (!$dara.isNull(request.logSource)) {
      query["LogSource"] = request.logSource;
    }

    if (!$dara.isNull(request.operateType)) {
      query["OperateType"] = request.operateType;
    }

    if (!$dara.isNull(request.ossObjectKey)) {
      query["OssObjectKey"] = request.ossObjectKey;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.productId)) {
      query["ProductId"] = request.productId;
    }

    if (!$dara.isNull(request.ruleAggQuery)) {
      query["RuleAggQuery"] = request.ruleAggQuery;
    }

    if (!$dara.isNull(request.ruleCategory)) {
      query["RuleCategory"] = request.ruleCategory;
    }

    if (!$dara.isNull(request.ruleID)) {
      query["RuleID"] = request.ruleID;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!$dara.isNull(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    if (!$dara.isNull(request.sqlText)) {
      query["SqlText"] = request.sqlText;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAuditLogs",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAuditLogsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAuditLogsResponse({}));
  }

  /**
   * Queries the list of audit alert logs for alert search and alert handling.
   * 
   * @remarks
   * Before you begin:
   * - Use the latest version of the Alibaba Cloud or DAS SDK.
   * - When calling DAS by using the SDK, set the region to cn-shanghai.
   * 
   * @param request - DescribeAuditLogsRequest
   * @returns DescribeAuditLogsResponse
   */
  async describeAuditLogs(request: $_model.DescribeAuditLogsRequest): Promise<$_model.DescribeAuditLogsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAuditLogsWithOptions(request, runtime);
  }

  /**
   * Invokes the DescribeAutoScalingConfig operation to query the elastic scaling feature configuration of an instance.
   * 
   * @remarks
   * Before you begin:
   * - Use the latest version of the Alibaba Cloud or DAS SDK.
   * - When calling DAS by using the SDK, set the region to cn-shanghai.
   * 
   * @param request - DescribeAutoScalingConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAutoScalingConfigResponse
   */
  async describeAutoScalingConfigWithOptions(request: $_model.DescribeAutoScalingConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAutoScalingConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAutoScalingConfig",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAutoScalingConfigResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAutoScalingConfigResponse({}));
  }

  /**
   * Invokes the DescribeAutoScalingConfig operation to query the elastic scaling feature configuration of an instance.
   * 
   * @remarks
   * Before you begin:
   * - Use the latest version of the Alibaba Cloud or DAS SDK.
   * - When calling DAS by using the SDK, set the region to cn-shanghai.
   * 
   * @param request - DescribeAutoScalingConfigRequest
   * @returns DescribeAutoScalingConfigResponse
   */
  async describeAutoScalingConfig(request: $_model.DescribeAutoScalingConfigRequest): Promise<$_model.DescribeAutoScalingConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAutoScalingConfigWithOptions(request, runtime);
  }

  /**
   * Queries the elastic scaling history of an instance.
   * 
   * @remarks
   * - Currently, only the automatic performance scaling history of ApsaraDB RDS for MySQL instances in the high-availability series with cloud disks is supported.
   * - When using the Alibaba Cloud or DAS SDK, use the latest version.
   * - When you invoke DAS by using the SDK, set the region to cn-shanghai.
   * 
   * @param request - DescribeAutoScalingHistoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAutoScalingHistoryResponse
   */
  async describeAutoScalingHistoryWithOptions(request: $_model.DescribeAutoScalingHistoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAutoScalingHistoryResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAutoScalingHistory",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAutoScalingHistoryResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAutoScalingHistoryResponse({}));
  }

  /**
   * Queries the elastic scaling history of an instance.
   * 
   * @remarks
   * - Currently, only the automatic performance scaling history of ApsaraDB RDS for MySQL instances in the high-availability series with cloud disks is supported.
   * - When using the Alibaba Cloud or DAS SDK, use the latest version.
   * - When you invoke DAS by using the SDK, set the region to cn-shanghai.
   * 
   * @param request - DescribeAutoScalingHistoryRequest
   * @returns DescribeAutoScalingHistoryResponse
   */
  async describeAutoScalingHistory(request: $_model.DescribeAutoScalingHistoryRequest): Promise<$_model.DescribeAutoScalingHistoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAutoScalingHistoryWithOptions(request, runtime);
  }

  /**
   * Returns details of a cache analysis task.
   * 
   * @remarks
   * Before you call this operation, take note of the following items:
   * - If you use an Alibaba Cloud SDK or a Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
   * - If you use an SDK to call the API operations of DAS, you must set the region ID to cn-shanghai.
   * - This operation is applicable only to ApsaraDB for Redis.
   * > Returns the top 500 keys in a cache analysis task.
   * 
   * @param request - DescribeCacheAnalysisJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCacheAnalysisJobResponse
   */
  async describeCacheAnalysisJobWithOptions(request: $_model.DescribeCacheAnalysisJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCacheAnalysisJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCacheAnalysisJob",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCacheAnalysisJobResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCacheAnalysisJobResponse({}));
  }

  /**
   * Returns details of a cache analysis task.
   * 
   * @remarks
   * Before you call this operation, take note of the following items:
   * - If you use an Alibaba Cloud SDK or a Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
   * - If you use an SDK to call the API operations of DAS, you must set the region ID to cn-shanghai.
   * - This operation is applicable only to ApsaraDB for Redis.
   * > Returns the top 500 keys in a cache analysis task.
   * 
   * @param request - DescribeCacheAnalysisJobRequest
   * @returns DescribeCacheAnalysisJobResponse
   */
  async describeCacheAnalysisJob(request: $_model.DescribeCacheAnalysisJobRequest): Promise<$_model.DescribeCacheAnalysisJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCacheAnalysisJobWithOptions(request, runtime);
  }

  /**
   * Queries a list of cache analysis tasks.
   * 
   * @remarks
   * Before you call this operation, take note of the following items:
   * - If you use an Alibaba Cloud SDK or a Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
   * - If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
   * - This operation is applicable only to ApsaraDB for Redis.
   * 
   * @param request - DescribeCacheAnalysisJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCacheAnalysisJobsResponse
   */
  async describeCacheAnalysisJobsWithOptions(request: $_model.DescribeCacheAnalysisJobsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCacheAnalysisJobsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
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

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCacheAnalysisJobs",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCacheAnalysisJobsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCacheAnalysisJobsResponse({}));
  }

  /**
   * Queries a list of cache analysis tasks.
   * 
   * @remarks
   * Before you call this operation, take note of the following items:
   * - If you use an Alibaba Cloud SDK or a Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
   * - If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
   * - This operation is applicable only to ApsaraDB for Redis.
   * 
   * @param request - DescribeCacheAnalysisJobsRequest
   * @returns DescribeCacheAnalysisJobsResponse
   */
  async describeCacheAnalysisJobs(request: $_model.DescribeCacheAnalysisJobsRequest): Promise<$_model.DescribeCacheAnalysisJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCacheAnalysisJobsWithOptions(request, runtime);
  }

  /**
   * Queries the list of stress testing tasks.
   * 
   * @remarks
   * Database Autonomy Service (DAS) provides intelligent stress testing features to help you verify whether your instance specifications need to be scaled up to effectively handle service traffic peaks. For more information, see [Intelligent stress testing](https://help.aliyun.com/document_detail/155068.html).
   * 
   * @param request - DescribeCloudBenchTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCloudBenchTasksResponse
   */
  async describeCloudBenchTasksWithOptions(request: $_model.DescribeCloudBenchTasksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCloudBenchTasksResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
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

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCloudBenchTasks",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCloudBenchTasksResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCloudBenchTasksResponse({}));
  }

  /**
   * Queries the list of stress testing tasks.
   * 
   * @remarks
   * Database Autonomy Service (DAS) provides intelligent stress testing features to help you verify whether your instance specifications need to be scaled up to effectively handle service traffic peaks. For more information, see [Intelligent stress testing](https://help.aliyun.com/document_detail/155068.html).
   * 
   * @param request - DescribeCloudBenchTasksRequest
   * @returns DescribeCloudBenchTasksResponse
   */
  async describeCloudBenchTasks(request: $_model.DescribeCloudBenchTasksRequest): Promise<$_model.DescribeCloudBenchTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCloudBenchTasksWithOptions(request, runtime);
  }

  /**
   * Queries a stress testing task.
   * 
   * @remarks
   * Database Autonomy Service (DAS) provides stress testing features to help you verify whether your instance specifications need to be scaled up to effectively handle service traffic peaks. For more information, see [Intelligent stress testing](https://help.aliyun.com/document_detail/155068.html).
   * 
   * @param request - DescribeCloudbenchTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCloudbenchTaskResponse
   */
  async describeCloudbenchTaskWithOptions(request: $_model.DescribeCloudbenchTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCloudbenchTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCloudbenchTask",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCloudbenchTaskResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCloudbenchTaskResponse({}));
  }

  /**
   * Queries a stress testing task.
   * 
   * @remarks
   * Database Autonomy Service (DAS) provides stress testing features to help you verify whether your instance specifications need to be scaled up to effectively handle service traffic peaks. For more information, see [Intelligent stress testing](https://help.aliyun.com/document_detail/155068.html).
   * 
   * @param request - DescribeCloudbenchTaskRequest
   * @returns DescribeCloudbenchTaskResponse
   */
  async describeCloudbenchTask(request: $_model.DescribeCloudbenchTaskRequest): Promise<$_model.DescribeCloudbenchTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCloudbenchTaskWithOptions(request, runtime);
  }

  /**
   * Retrieves the detailed configuration, file paths, and execution commands for a specific stress test task.
   * 
   * @remarks
   * Call this API to get the configuration details of a stress testing task for advanced debugging, or to understand how the Database Autonomy Service (DAS) stress testing feature operates. For more information, see [Intelligent stress testing](https://help.aliyun.com/document_detail/155068.html).
   * 
   * @param request - DescribeCloudbenchTaskConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCloudbenchTaskConfigResponse
   */
  async describeCloudbenchTaskConfigWithOptions(request: $_model.DescribeCloudbenchTaskConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCloudbenchTaskConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCloudbenchTaskConfig",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCloudbenchTaskConfigResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCloudbenchTaskConfigResponse({}));
  }

  /**
   * Retrieves the detailed configuration, file paths, and execution commands for a specific stress test task.
   * 
   * @remarks
   * Call this API to get the configuration details of a stress testing task for advanced debugging, or to understand how the Database Autonomy Service (DAS) stress testing feature operates. For more information, see [Intelligent stress testing](https://help.aliyun.com/document_detail/155068.html).
   * 
   * @param request - DescribeCloudbenchTaskConfigRequest
   * @returns DescribeCloudbenchTaskConfigResponse
   */
  async describeCloudbenchTaskConfig(request: $_model.DescribeCloudbenchTaskConfigRequest): Promise<$_model.DescribeCloudbenchTaskConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCloudbenchTaskConfigWithOptions(request, runtime);
  }

  /**
   * Queries the enabled items of the Alibaba Cloud Managed Services.
   * 
   * @remarks
   * Before you call this operation, take note of the following prerequisites:
   * - If you use the China site (aliyun.com) or China site International (Chinese) SDK, use the latest version.
   * - When you call a DAS operation by using the SDK, set the region to cn-shanghai.
   * 
   * @param request - DescribeDasOpsConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDasOpsConfigResponse
   */
  async describeDasOpsConfigWithOptions(request: $_model.DescribeDasOpsConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDasOpsConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDasOpsConfig",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDasOpsConfigResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDasOpsConfigResponse({}));
  }

  /**
   * Queries the enabled items of the Alibaba Cloud Managed Services.
   * 
   * @remarks
   * Before you call this operation, take note of the following prerequisites:
   * - If you use the China site (aliyun.com) or China site International (Chinese) SDK, use the latest version.
   * - When you call a DAS operation by using the SDK, set the region to cn-shanghai.
   * 
   * @param request - DescribeDasOpsConfigRequest
   * @returns DescribeDasOpsConfigResponse
   */
  async describeDasOpsConfig(request: $_model.DescribeDasOpsConfigRequest): Promise<$_model.DescribeDasOpsConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDasOpsConfigWithOptions(request, runtime);
  }

  /**
   * Queries diagnostics reports.
   * 
   * @remarks
   * Before you call this operation, take note of the following items:
   * - If you use an Alibaba Cloud SDK or a Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
   * - If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
   * - This operation is applicable to the following database engines:
   *   - ApsaraDB RDS for MySQL
   *   - PolarDB for MySQL
   *   - ApsaraDB for Redis
   * 
   * @param request - DescribeDiagnosticReportListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDiagnosticReportListResponse
   */
  async describeDiagnosticReportListWithOptions(request: $_model.DescribeDiagnosticReportListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDiagnosticReportListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDiagnosticReportList",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDiagnosticReportListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDiagnosticReportListResponse({}));
  }

  /**
   * Queries diagnostics reports.
   * 
   * @remarks
   * Before you call this operation, take note of the following items:
   * - If you use an Alibaba Cloud SDK or a Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
   * - If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
   * - This operation is applicable to the following database engines:
   *   - ApsaraDB RDS for MySQL
   *   - PolarDB for MySQL
   *   - ApsaraDB for Redis
   * 
   * @param request - DescribeDiagnosticReportListRequest
   * @returns DescribeDiagnosticReportListResponse
   */
  async describeDiagnosticReportList(request: $_model.DescribeDiagnosticReportListRequest): Promise<$_model.DescribeDiagnosticReportListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDiagnosticReportListWithOptions(request, runtime);
  }

  /**
   * Queries the error log details of an instance within a specified time range.
   * 
   * @remarks
   * This operation queries the error log details of an instance within a specified time range.
   * Before you begin:
   * - The target database engine must be one of the following: ApsaraDB RDS for MySQL, ApsaraDB RDS for PostgreSQL, PolarDB for MySQL, PolarDB for PostgreSQL, PolarDB for PostgreSQL (Compatible with Oracle), or ApsaraDB for MongoDB.
   * - If you use the Alibaba Cloud or DAS SDK, use the latest version.
   * - When you call DAS operations by using the SDK, set the region to cn-shanghai.
   * 
   * @param request - DescribeErrorLogRecordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeErrorLogRecordsResponse
   */
  async describeErrorLogRecordsWithOptions(request: $_model.DescribeErrorLogRecordsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeErrorLogRecordsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.filters)) {
      body["Filters"] = request.filters;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.nodeId)) {
      body["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.role)) {
      body["Role"] = request.role;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeErrorLogRecords",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeErrorLogRecordsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeErrorLogRecordsResponse({}));
  }

  /**
   * Queries the error log details of an instance within a specified time range.
   * 
   * @remarks
   * This operation queries the error log details of an instance within a specified time range.
   * Before you begin:
   * - The target database engine must be one of the following: ApsaraDB RDS for MySQL, ApsaraDB RDS for PostgreSQL, PolarDB for MySQL, PolarDB for PostgreSQL, PolarDB for PostgreSQL (Compatible with Oracle), or ApsaraDB for MongoDB.
   * - If you use the Alibaba Cloud or DAS SDK, use the latest version.
   * - When you call DAS operations by using the SDK, set the region to cn-shanghai.
   * 
   * @param request - DescribeErrorLogRecordsRequest
   * @returns DescribeErrorLogRecordsResponse
   */
  async describeErrorLogRecords(request: $_model.DescribeErrorLogRecordsRequest): Promise<$_model.DescribeErrorLogRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeErrorLogRecordsWithOptions(request, runtime);
  }

  /**
   * Calls the DescribeHotBigKeys operation to retrieve the hot keys and big keys in the current memory in real time.
   * 
   * @remarks
   * For keys with data structures of List, Hash, Set, or Zset, the top 3 keys are sorted and displayed by the number of elements in the key, and are recorded as big keys. If the QPS of a key exceeds 5,000, the key is recorded as a hot key. For more information about the definitions of big keys and hot keys, see [Top Key statistics](https://www.alibabacloud.com/help/en/das/user-guide/key-analysis).
   * >
   * > - For instances running Redis Community Edition 7.0.18, 6.0.2.9, 5.5.2.9, or earlier versions, or Tair (Enhanced Edition) in-memory instances running version 5.0.50, 25.2.0.0, or earlier versions, a key with a QPS greater than 3,000 is recorded as a hot key. This threshold cannot be adjusted.
   * - When using the Alibaba Cloud SDK, make sure the version of aliyun-sdk-core is later than 4.3.3. We recommend that you use the latest version.
   * - Use DAS SDK 1.0.2 or later.
   * - When calling DAS by using the SDK, set the region to cn-shanghai.
   * - This operation applies only to the following Redis instances:
   *     - The instance is Redis Community Edition or Tair (Redis® OSS-Compatible) in-memory.
   *     - The minor version of the instance is the latest.
   * 
   * @param request - DescribeHotBigKeysRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeHotBigKeysResponse
   */
  async describeHotBigKeysWithOptions(request: $_model.DescribeHotBigKeysRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeHotBigKeysResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.consoleContext)) {
      query["ConsoleContext"] = request.consoleContext;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.nodeId)) {
      query["NodeId"] = request.nodeId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeHotBigKeys",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeHotBigKeysResponse>(await this.callApi(params, req, runtime), new $_model.DescribeHotBigKeysResponse({}));
  }

  /**
   * Calls the DescribeHotBigKeys operation to retrieve the hot keys and big keys in the current memory in real time.
   * 
   * @remarks
   * For keys with data structures of List, Hash, Set, or Zset, the top 3 keys are sorted and displayed by the number of elements in the key, and are recorded as big keys. If the QPS of a key exceeds 5,000, the key is recorded as a hot key. For more information about the definitions of big keys and hot keys, see [Top Key statistics](https://www.alibabacloud.com/help/en/das/user-guide/key-analysis).
   * >
   * > - For instances running Redis Community Edition 7.0.18, 6.0.2.9, 5.5.2.9, or earlier versions, or Tair (Enhanced Edition) in-memory instances running version 5.0.50, 25.2.0.0, or earlier versions, a key with a QPS greater than 3,000 is recorded as a hot key. This threshold cannot be adjusted.
   * - When using the Alibaba Cloud SDK, make sure the version of aliyun-sdk-core is later than 4.3.3. We recommend that you use the latest version.
   * - Use DAS SDK 1.0.2 or later.
   * - When calling DAS by using the SDK, set the region to cn-shanghai.
   * - This operation applies only to the following Redis instances:
   *     - The instance is Redis Community Edition or Tair (Redis® OSS-Compatible) in-memory.
   *     - The minor version of the instance is the latest.
   * 
   * @param request - DescribeHotBigKeysRequest
   * @returns DescribeHotBigKeysResponse
   */
  async describeHotBigKeys(request: $_model.DescribeHotBigKeysRequest): Promise<$_model.DescribeHotBigKeysResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeHotBigKeysWithOptions(request, runtime);
  }

  /**
   * Queries the hot keys of a Redis instance by calling the DescribeHotKeys operation.
   * 
   * @remarks
   * Before you begin:
   * - When using the Alibaba Cloud SDK, make sure the version of aliyun-sdk-core is later than 4.3.3. Use the latest version.
   * - The version of the DAS SDK must be 1.0.2 or later.
   * - When calling DAS by using the SDK, set the region to cn-shanghai.
   * - This operation applies only to the following Redis instances:
   *     - The instance is a Redis Community Edition instance or a Tair (Redis® OSS-Compatible) memory-optimized instance.
   *     - The minor engine version of the instance is the latest.
   * 
   * @param request - DescribeHotKeysRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeHotKeysResponse
   */
  async describeHotKeysWithOptions(request: $_model.DescribeHotKeysRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeHotKeysResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.nodeId)) {
      query["NodeId"] = request.nodeId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeHotKeys",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeHotKeysResponse>(await this.callApi(params, req, runtime), new $_model.DescribeHotKeysResponse({}));
  }

  /**
   * Queries the hot keys of a Redis instance by calling the DescribeHotKeys operation.
   * 
   * @remarks
   * Before you begin:
   * - When using the Alibaba Cloud SDK, make sure the version of aliyun-sdk-core is later than 4.3.3. Use the latest version.
   * - The version of the DAS SDK must be 1.0.2 or later.
   * - When calling DAS by using the SDK, set the region to cn-shanghai.
   * - This operation applies only to the following Redis instances:
   *     - The instance is a Redis Community Edition instance or a Tair (Redis® OSS-Compatible) memory-optimized instance.
   *     - The minor engine version of the instance is the latest.
   * 
   * @param request - DescribeHotKeysRequest
   * @returns DescribeHotKeysResponse
   */
  async describeHotKeys(request: $_model.DescribeHotKeysRequest): Promise<$_model.DescribeHotKeysResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeHotKeysWithOptions(request, runtime);
  }

  /**
   * Queries whether Database Autonomy Service (DAS) Enterprise Edition V1 or V2 is enabled for a database instance.
   * 
   * @remarks
   * - For more information about the database instances that support DAS Enterprise Edition, see [Overview of DAS Enterprise Edition](https://help.aliyun.com/document_detail/190912.html).
   * - If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
   * - This operation is applicable only to DAS Enterprise Edition V1 and V2.
   * > We recommend that you call the [DescribeSqlLogConfig](https://help.aliyun.com/document_detail/2778837.html) operation to query the DAS Enterprise Edition configurations of a database instance.
   * 
   * @param request - DescribeInstanceDasProRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceDasProResponse
   */
  async describeInstanceDasProWithOptions(request: $_model.DescribeInstanceDasProRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceDasProResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstanceDasPro",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstanceDasProResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstanceDasProResponse({}));
  }

  /**
   * Queries whether Database Autonomy Service (DAS) Enterprise Edition V1 or V2 is enabled for a database instance.
   * 
   * @remarks
   * - For more information about the database instances that support DAS Enterprise Edition, see [Overview of DAS Enterprise Edition](https://help.aliyun.com/document_detail/190912.html).
   * - If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
   * - This operation is applicable only to DAS Enterprise Edition V1 and V2.
   * > We recommend that you call the [DescribeSqlLogConfig](https://help.aliyun.com/document_detail/2778837.html) operation to query the DAS Enterprise Edition configurations of a database instance.
   * 
   * @param request - DescribeInstanceDasProRequest
   * @returns DescribeInstanceDasProResponse
   */
  async describeInstanceDasPro(request: $_model.DescribeInstanceDasProRequest): Promise<$_model.DescribeInstanceDasProResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceDasProWithOptions(request, runtime);
  }

  /**
   * Obtain the execution plan for an SQL statement.
   * 
   * @remarks
   * - This operation supports only ApsaraDB RDS for MySQL and PolarDB for MySQL instances.
   * - When using the Alibaba Cloud or DAS SDK, use the latest version.
   * - When calling the DAS service with the SDK, set the region to cn-shanghai.
   * 
   * @param request - DescribeQueryExplainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeQueryExplainResponse
   */
  async describeQueryExplainWithOptions(request: $_model.DescribeQueryExplainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeQueryExplainResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dbName)) {
      body["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.nodeId)) {
      body["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.schema)) {
      body["Schema"] = request.schema;
    }

    if (!$dara.isNull(request.sql)) {
      body["Sql"] = request.sql;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeQueryExplain",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeQueryExplainResponse>(await this.callApi(params, req, runtime), new $_model.DescribeQueryExplainResponse({}));
  }

  /**
   * Obtain the execution plan for an SQL statement.
   * 
   * @remarks
   * - This operation supports only ApsaraDB RDS for MySQL and PolarDB for MySQL instances.
   * - When using the Alibaba Cloud or DAS SDK, use the latest version.
   * - When calling the DAS service with the SDK, set the region to cn-shanghai.
   * 
   * @param request - DescribeQueryExplainRequest
   * @returns DescribeQueryExplainResponse
   */
  async describeQueryExplain(request: $_model.DescribeQueryExplainRequest): Promise<$_model.DescribeQueryExplainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeQueryExplainWithOptions(request, runtime);
  }

  /**
   * Displays the details of a cross-engine whitelist template for a user.
   * 
   * @remarks
   * Before you begin:
   * - Use the latest version of the Alibaba Cloud or DAS SDK.
   * - When calling DAS by using the SDK, set the region to cn-shanghai.
   * 
   * @param request - DescribeSecurityIPGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSecurityIPGroupResponse
   */
  async describeSecurityIPGroupWithOptions(request: $_model.DescribeSecurityIPGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSecurityIPGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionName)) {
      query["RegionName"] = request.regionName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSecurityIPGroup",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSecurityIPGroupResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSecurityIPGroupResponse({}));
  }

  /**
   * Displays the details of a cross-engine whitelist template for a user.
   * 
   * @remarks
   * Before you begin:
   * - Use the latest version of the Alibaba Cloud or DAS SDK.
   * - When calling DAS by using the SDK, set the region to cn-shanghai.
   * 
   * @param request - DescribeSecurityIPGroupRequest
   * @returns DescribeSecurityIPGroupResponse
   */
  async describeSecurityIPGroup(request: $_model.DescribeSecurityIPGroupRequest): Promise<$_model.DescribeSecurityIPGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSecurityIPGroupWithOptions(request, runtime);
  }

  /**
   * Displays the binding information between a cross-engine whitelist template and instances for a user.
   * 
   * @remarks
   * Before you begin:
   * - Use the latest version of the Alibaba Cloud or DAS SDK.
   * - When calling DAS by using the SDK, set the region to cn-shanghai.
   * 
   * @param request - DescribeSecurityIPGroupRelationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSecurityIPGroupRelationResponse
   */
  async describeSecurityIPGroupRelationWithOptions(request: $_model.DescribeSecurityIPGroupRelationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSecurityIPGroupRelationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionName)) {
      query["RegionName"] = request.regionName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSecurityIPGroupRelation",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSecurityIPGroupRelationResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSecurityIPGroupRelationResponse({}));
  }

  /**
   * Displays the binding information between a cross-engine whitelist template and instances for a user.
   * 
   * @remarks
   * Before you begin:
   * - Use the latest version of the Alibaba Cloud or DAS SDK.
   * - When calling DAS by using the SDK, set the region to cn-shanghai.
   * 
   * @param request - DescribeSecurityIPGroupRelationRequest
   * @returns DescribeSecurityIPGroupRelationResponse
   */
  async describeSecurityIPGroupRelation(request: $_model.DescribeSecurityIPGroupRelationRequest): Promise<$_model.DescribeSecurityIPGroupRelationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSecurityIPGroupRelationWithOptions(request, runtime);
  }

  /**
   * Asynchronously retrieves slow log trends data for an instance.
   * 
   * @remarks
   * *Before using this operation, make sure that you fully understand the [billing methods and pricing](https://help.aliyun.com/document_detail/156195.html) of DAS.**
   * Before you begin:
   * - DAS Enterprise Edition or the Alibaba Cloud Managed Services (not yet online) is enabled for the requested instance.
   * - If you use the Alibaba Cloud SDK or DAS SDK, use the latest version.
   * - When you invoke DAS by using the SDK, set the region to cn-shanghai.
   * This operation uses asynchronous calls and does not immediately return complete results. If the value of isFinish in the response is false, wait 1 second and invoke the operation again until the value of isFinish is true, which indicates that complete results are returned.
   * 
   * @param request - DescribeSlowLogHistogramAsyncRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSlowLogHistogramAsyncResponse
   */
  async describeSlowLogHistogramAsyncWithOptions(request: $_model.DescribeSlowLogHistogramAsyncRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSlowLogHistogramAsyncResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.filters)) {
      body["Filters"] = request.filters;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.nodeId)) {
      body["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSlowLogHistogramAsync",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSlowLogHistogramAsyncResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSlowLogHistogramAsyncResponse({}));
  }

  /**
   * Asynchronously retrieves slow log trends data for an instance.
   * 
   * @remarks
   * *Before using this operation, make sure that you fully understand the [billing methods and pricing](https://help.aliyun.com/document_detail/156195.html) of DAS.**
   * Before you begin:
   * - DAS Enterprise Edition or the Alibaba Cloud Managed Services (not yet online) is enabled for the requested instance.
   * - If you use the Alibaba Cloud SDK or DAS SDK, use the latest version.
   * - When you invoke DAS by using the SDK, set the region to cn-shanghai.
   * This operation uses asynchronous calls and does not immediately return complete results. If the value of isFinish in the response is false, wait 1 second and invoke the operation again until the value of isFinish is true, which indicates that complete results are returned.
   * 
   * @param request - DescribeSlowLogHistogramAsyncRequest
   * @returns DescribeSlowLogHistogramAsyncResponse
   */
  async describeSlowLogHistogramAsync(request: $_model.DescribeSlowLogHistogramAsyncRequest): Promise<$_model.DescribeSlowLogHistogramAsyncResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSlowLogHistogramAsyncWithOptions(request, runtime);
  }

  /**
   * Queries slow query log records of a database instance with support for filtering and sorting by multiple conditions.
   * 
   * @remarks
   * - `InstanceId` specifies the instance ID. This parameter is required.
   * - `StartTime` and `EndTime` specify the time range for the query. These parameters are required.
   * - Set `PageNumber` and `PageSize` to retrieve results by paging.
   * - Use the `OrderBy` parameter to sort results. For sortable fields, refer to the References.
   * - Use the `Filters` parameter to further refine query conditions, such as filtering by host address or SQL ID.
   * <notice>Certain database types (such as PostgreSQL and PolarDB for PostgreSQL) do not support specific sorting methods. Settings appropriate parameters as needed.</notice>
   * 
   * @param request - DescribeSlowLogRecordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSlowLogRecordsResponse
   */
  async describeSlowLogRecordsWithOptions(request: $_model.DescribeSlowLogRecordsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSlowLogRecordsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.asc)) {
      query["Asc"] = request.asc;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.filters)) {
      body["Filters"] = request.filters;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.nodeId)) {
      body["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSlowLogRecords",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSlowLogRecordsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSlowLogRecordsResponse({}));
  }

  /**
   * Queries slow query log records of a database instance with support for filtering and sorting by multiple conditions.
   * 
   * @remarks
   * - `InstanceId` specifies the instance ID. This parameter is required.
   * - `StartTime` and `EndTime` specify the time range for the query. These parameters are required.
   * - Set `PageNumber` and `PageSize` to retrieve results by paging.
   * - Use the `OrderBy` parameter to sort results. For sortable fields, refer to the References.
   * - Use the `Filters` parameter to further refine query conditions, such as filtering by host address or SQL ID.
   * <notice>Certain database types (such as PostgreSQL and PolarDB for PostgreSQL) do not support specific sorting methods. Settings appropriate parameters as needed.</notice>
   * 
   * @param request - DescribeSlowLogRecordsRequest
   * @returns DescribeSlowLogRecordsResponse
   */
  async describeSlowLogRecords(request: $_model.DescribeSlowLogRecordsRequest): Promise<$_model.DescribeSlowLogRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSlowLogRecordsWithOptions(request, runtime);
  }

  /**
   * Queries slow query log statistics information.
   * 
   * @remarks
   * *Before you use this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/156195.html) of DAS.**
   * Before you invoke this operation, make sure that the following requirements are met:
   * - Alibaba Cloud Managed Services is enabled for the instance.
   * - Use the latest version of the Alibaba Cloud or DAS SDK.
   * - When you invoke DAS operations by using the SDK, set the region to cn-shanghai.
   * This is an asynchronous operation. After a call is made, the complete result is not immediately returned. If the value of isFinish in the response is false, wait 1 second and invoke the operation again. The complete result is returned only when the value of isFinish is true.
   * 
   * @param request - DescribeSlowLogStatisticRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSlowLogStatisticResponse
   */
  async describeSlowLogStatisticWithOptions(request: $_model.DescribeSlowLogStatisticRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSlowLogStatisticResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.asc)) {
      body["Asc"] = request.asc;
    }

    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.filters)) {
      body["Filters"] = request.filters;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.nodeId)) {
      body["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.orderBy)) {
      body["OrderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.templateId)) {
      body["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSlowLogStatistic",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSlowLogStatisticResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSlowLogStatisticResponse({}));
  }

  /**
   * Queries slow query log statistics information.
   * 
   * @remarks
   * *Before you use this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/156195.html) of DAS.**
   * Before you invoke this operation, make sure that the following requirements are met:
   * - Alibaba Cloud Managed Services is enabled for the instance.
   * - Use the latest version of the Alibaba Cloud or DAS SDK.
   * - When you invoke DAS operations by using the SDK, set the region to cn-shanghai.
   * This is an asynchronous operation. After a call is made, the complete result is not immediately returned. If the value of isFinish in the response is false, wait 1 second and invoke the operation again. The complete result is returned only when the value of isFinish is true.
   * 
   * @param request - DescribeSlowLogStatisticRequest
   * @returns DescribeSlowLogStatisticResponse
   */
  async describeSlowLogStatistic(request: $_model.DescribeSlowLogStatisticRequest): Promise<$_model.DescribeSlowLogStatisticResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSlowLogStatisticWithOptions(request, runtime);
  }

  /**
   * Queries the DAS Enterprise Edition configuration of a database instance.
   * 
   * @remarks
   * Before you begin:
   * - Use the latest version of the Alibaba Cloud or DAS SDK.
   * - When calling DAS by using the SDK, set the region to cn-shanghai.
   * 
   * @param request - DescribeSqlLogConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSqlLogConfigResponse
   */
  async describeSqlLogConfigWithOptions(request: $_model.DescribeSqlLogConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSqlLogConfigResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSqlLogConfig",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSqlLogConfigResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSqlLogConfigResponse({}));
  }

  /**
   * Queries the DAS Enterprise Edition configuration of a database instance.
   * 
   * @remarks
   * Before you begin:
   * - Use the latest version of the Alibaba Cloud or DAS SDK.
   * - When calling DAS by using the SDK, set the region to cn-shanghai.
   * 
   * @param request - DescribeSqlLogConfigRequest
   * @returns DescribeSqlLogConfigResponse
   */
  async describeSqlLogConfig(request: $_model.DescribeSqlLogConfigRequest): Promise<$_model.DescribeSqlLogConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSqlLogConfigWithOptions(request, runtime);
  }

  /**
   * Call DescribeSqlLogRecords to query log details in DAS Enterprise Edition.
   * 
   * @remarks
   * Before calling this operation, note the following:
   * - When you use an Alibaba Cloud or Database Autonomy Service (DAS) SDK, we recommend that you use the latest version.
   * - When you call the DAS service by using an SDK, you must set the region to `cn-shanghai`.
   * 
   * @param request - DescribeSqlLogRecordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSqlLogRecordsResponse
   */
  async describeSqlLogRecordsWithOptions(request: $_model.DescribeSqlLogRecordsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSqlLogRecordsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.filters)) {
      query["Filters"] = request.filters;
    }

    if (!$dara.isNull(request.role)) {
      query["Role"] = request.role;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.nodeId)) {
      body["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.pageNo)) {
      body["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSqlLogRecords",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSqlLogRecordsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSqlLogRecordsResponse({}));
  }

  /**
   * Call DescribeSqlLogRecords to query log details in DAS Enterprise Edition.
   * 
   * @remarks
   * Before calling this operation, note the following:
   * - When you use an Alibaba Cloud or Database Autonomy Service (DAS) SDK, we recommend that you use the latest version.
   * - When you call the DAS service by using an SDK, you must set the region to `cn-shanghai`.
   * 
   * @param request - DescribeSqlLogRecordsRequest
   * @returns DescribeSqlLogRecordsResponse
   */
  async describeSqlLogRecords(request: $_model.DescribeSqlLogRecordsRequest): Promise<$_model.DescribeSqlLogRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSqlLogRecordsWithOptions(request, runtime);
  }

  /**
   * Invokes the DescribeSqlLogStatistic operation to query the statistics information of DAS Enterprise Edition.
   * 
   * @remarks
   * Before you begin:
   * - Use the latest version of Alibaba Cloud SDK or DAS SDK.
   * - When calling DAS by using the SDK, set the region to cn-shanghai.
   * 
   * @param request - DescribeSqlLogStatisticRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSqlLogStatisticResponse
   */
  async describeSqlLogStatisticWithOptions(request: $_model.DescribeSqlLogStatisticRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSqlLogStatisticResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSqlLogStatistic",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSqlLogStatisticResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSqlLogStatisticResponse({}));
  }

  /**
   * Invokes the DescribeSqlLogStatistic operation to query the statistics information of DAS Enterprise Edition.
   * 
   * @remarks
   * Before you begin:
   * - Use the latest version of Alibaba Cloud SDK or DAS SDK.
   * - When calling DAS by using the SDK, set the region to cn-shanghai.
   * 
   * @param request - DescribeSqlLogStatisticRequest
   * @returns DescribeSqlLogStatisticResponse
   */
  async describeSqlLogStatistic(request: $_model.DescribeSqlLogStatisticRequest): Promise<$_model.DescribeSqlLogStatisticResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSqlLogStatisticWithOptions(request, runtime);
  }

  /**
   * Queries the details of a DAS Enterprise Edition batch task by calling the DescribeSqlLogTask operation.
   * 
   * @remarks
   * Before you begin:
   * - Use the latest version of the Alibaba Cloud or DAS SDK.
   * - When calling DAS by using the SDK, set the region to cn-shanghai.
   * 
   * @param request - DescribeSqlLogTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSqlLogTaskResponse
   */
  async describeSqlLogTaskWithOptions(request: $_model.DescribeSqlLogTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSqlLogTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageNo)) {
      body["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSqlLogTask",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSqlLogTaskResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSqlLogTaskResponse({}));
  }

  /**
   * Queries the details of a DAS Enterprise Edition batch task by calling the DescribeSqlLogTask operation.
   * 
   * @remarks
   * Before you begin:
   * - Use the latest version of the Alibaba Cloud or DAS SDK.
   * - When calling DAS by using the SDK, set the region to cn-shanghai.
   * 
   * @param request - DescribeSqlLogTaskRequest
   * @returns DescribeSqlLogTaskResponse
   */
  async describeSqlLogTask(request: $_model.DescribeSqlLogTaskRequest): Promise<$_model.DescribeSqlLogTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSqlLogTaskWithOptions(request, runtime);
  }

  /**
   * Queries the list of audit log tasks for an instance.
   * 
   * @remarks
   * Before you begin:
   * - Use the latest version of the Alibaba Cloud or DAS SDK.
   * - When calling DAS by using the SDK, set the region to cn-shanghai.
   * 
   * @param request - DescribeSqlLogTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSqlLogTasksResponse
   */
  async describeSqlLogTasksWithOptions(request: $_model.DescribeSqlLogTasksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSqlLogTasksResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.filters)) {
      body["Filters"] = request.filters;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.nodeId)) {
      body["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.pageNo)) {
      body["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSqlLogTasks",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSqlLogTasksResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSqlLogTasksResponse({}));
  }

  /**
   * Queries the list of audit log tasks for an instance.
   * 
   * @remarks
   * Before you begin:
   * - Use the latest version of the Alibaba Cloud or DAS SDK.
   * - When calling DAS by using the SDK, set the region to cn-shanghai.
   * 
   * @param request - DescribeSqlLogTasksRequest
   * @returns DescribeSqlLogTasksResponse
   */
  async describeSqlLogTasks(request: $_model.DescribeSqlLogTasksRequest): Promise<$_model.DescribeSqlLogTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSqlLogTasksWithOptions(request, runtime);
  }

  /**
   * Queries the top 100 large keys over a period of time.
   * 
   * @remarks
   * The list, hash, set, and zset keys are sorted based on the number of elements in these keys. The top three keys that have the most elements are considered large keys.
   * - If you use an Alibaba Cloud SDK, make sure that the aliyun-sdk-core version is later than 4.3.3. We recommend that you use the latest version.
   * - The version of Database Autonomy Service (DAS) SDK must be 1.0.2 or later.
   * - If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
   * - This operation is available only for an ApsaraDB for Redis instance of one of the following versions:
   *   - The instance is ApsaraDB for Redis Community Edition instances that use a major version of 5.0 or later or a performance-enhanced instance of the ApsaraDB for Redis Enhanced Edition (Tair).
   *   - The ApsaraDB for Redis instance is updated to the latest minor version.
   * 
   * @param request - DescribeTopBigKeysRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTopBigKeysResponse
   */
  async describeTopBigKeysWithOptions(request: $_model.DescribeTopBigKeysRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTopBigKeysResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.consoleContext)) {
      query["ConsoleContext"] = request.consoleContext;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.nodeId)) {
      query["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTopBigKeys",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeTopBigKeysResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTopBigKeysResponse({}));
  }

  /**
   * Queries the top 100 large keys over a period of time.
   * 
   * @remarks
   * The list, hash, set, and zset keys are sorted based on the number of elements in these keys. The top three keys that have the most elements are considered large keys.
   * - If you use an Alibaba Cloud SDK, make sure that the aliyun-sdk-core version is later than 4.3.3. We recommend that you use the latest version.
   * - The version of Database Autonomy Service (DAS) SDK must be 1.0.2 or later.
   * - If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
   * - This operation is available only for an ApsaraDB for Redis instance of one of the following versions:
   *   - The instance is ApsaraDB for Redis Community Edition instances that use a major version of 5.0 or later or a performance-enhanced instance of the ApsaraDB for Redis Enhanced Edition (Tair).
   *   - The ApsaraDB for Redis instance is updated to the latest minor version.
   * 
   * @param request - DescribeTopBigKeysRequest
   * @returns DescribeTopBigKeysResponse
   */
  async describeTopBigKeys(request: $_model.DescribeTopBigKeysRequest): Promise<$_model.DescribeTopBigKeysResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTopBigKeysWithOptions(request, runtime);
  }

  /**
   * Queries the top 100 hot keys within a specified time period.
   * 
   * @remarks
   * A key is identified as a hot key if its QPS exceeds 3,000.
   * - If you use an Alibaba Cloud SDK, ensure that the version of aliyun-sdk-core is 4.3.3 or later. We recommend using the latest version.
   * - The DAS SDK version must be 1.0.2 or later.
   * - When calling the DAS service with an SDK, set the region to cn-shanghai.
   * - This operation applies only to the following Redis instances:
   *   - The instance is an open source Redis instance or a Tair (Enterprise Edition) memory-optimized instance.
   *   - The instance runs on the latest minor version.
   * 
   * @param request - DescribeTopHotKeysRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTopHotKeysResponse
   */
  async describeTopHotKeysWithOptions(request: $_model.DescribeTopHotKeysRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTopHotKeysResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.consoleContext)) {
      query["ConsoleContext"] = request.consoleContext;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.nodeId)) {
      query["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTopHotKeys",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeTopHotKeysResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTopHotKeysResponse({}));
  }

  /**
   * Queries the top 100 hot keys within a specified time period.
   * 
   * @remarks
   * A key is identified as a hot key if its QPS exceeds 3,000.
   * - If you use an Alibaba Cloud SDK, ensure that the version of aliyun-sdk-core is 4.3.3 or later. We recommend using the latest version.
   * - The DAS SDK version must be 1.0.2 or later.
   * - When calling the DAS service with an SDK, set the region to cn-shanghai.
   * - This operation applies only to the following Redis instances:
   *   - The instance is an open source Redis instance or a Tair (Enterprise Edition) memory-optimized instance.
   *   - The instance runs on the latest minor version.
   * 
   * @param request - DescribeTopHotKeysRequest
   * @returns DescribeTopHotKeysResponse
   */
  async describeTopHotKeys(request: $_model.DescribeTopHotKeysRequest): Promise<$_model.DescribeTopHotKeysResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTopHotKeysWithOptions(request, runtime);
  }

  /**
   * Disables all throttling rules that are in effect.
   * 
   * @remarks
   * This operation supports the following database engines:
   * - ApsaraDB RDS for MySQL
   * - PolarDB for MySQL
   * 
   * @param request - DisableAllSqlConcurrencyControlRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableAllSqlConcurrencyControlRulesResponse
   */
  async disableAllSqlConcurrencyControlRulesWithOptions(request: $_model.DisableAllSqlConcurrencyControlRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableAllSqlConcurrencyControlRulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.consoleContext)) {
      query["ConsoleContext"] = request.consoleContext;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableAllSqlConcurrencyControlRules",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableAllSqlConcurrencyControlRulesResponse>(await this.callApi(params, req, runtime), new $_model.DisableAllSqlConcurrencyControlRulesResponse({}));
  }

  /**
   * Disables all throttling rules that are in effect.
   * 
   * @remarks
   * This operation supports the following database engines:
   * - ApsaraDB RDS for MySQL
   * - PolarDB for MySQL
   * 
   * @param request - DisableAllSqlConcurrencyControlRulesRequest
   * @returns DisableAllSqlConcurrencyControlRulesResponse
   */
  async disableAllSqlConcurrencyControlRules(request: $_model.DisableAllSqlConcurrencyControlRulesRequest): Promise<$_model.DisableAllSqlConcurrencyControlRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableAllSqlConcurrencyControlRulesWithOptions(request, runtime);
  }

  /**
   * Disables the automatic tablespace fragment recycling feature for database instances at a time.
   * 
   * @remarks
   * If you use an SDK to call API operations of Database Autonomy Service (DAS), you must set the region ID to cn-shanghai.
   * 
   * @param request - DisableAutoResourceOptimizeRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableAutoResourceOptimizeRulesResponse
   */
  async disableAutoResourceOptimizeRulesWithOptions(request: $_model.DisableAutoResourceOptimizeRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableAutoResourceOptimizeRulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.consoleContext)) {
      query["ConsoleContext"] = request.consoleContext;
    }

    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableAutoResourceOptimizeRules",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableAutoResourceOptimizeRulesResponse>(await this.callApi(params, req, runtime), new $_model.DisableAutoResourceOptimizeRulesResponse({}));
  }

  /**
   * Disables the automatic tablespace fragment recycling feature for database instances at a time.
   * 
   * @remarks
   * If you use an SDK to call API operations of Database Autonomy Service (DAS), you must set the region ID to cn-shanghai.
   * 
   * @param request - DisableAutoResourceOptimizeRulesRequest
   * @returns DisableAutoResourceOptimizeRulesResponse
   */
  async disableAutoResourceOptimizeRules(request: $_model.DisableAutoResourceOptimizeRulesRequest): Promise<$_model.DisableAutoResourceOptimizeRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableAutoResourceOptimizeRulesWithOptions(request, runtime);
  }

  /**
   * Disables the automatic SQL throttling feature for multiple database instances at a time.
   * 
   * @remarks
   * If you use an SDK to call operations of Database Autonomy Service (DAS), you must set the region ID to cn-shanghai.
   * 
   * @param request - DisableAutoThrottleRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableAutoThrottleRulesResponse
   */
  async disableAutoThrottleRulesWithOptions(request: $_model.DisableAutoThrottleRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableAutoThrottleRulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.consoleContext)) {
      query["ConsoleContext"] = request.consoleContext;
    }

    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableAutoThrottleRules",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableAutoThrottleRulesResponse>(await this.callApi(params, req, runtime), new $_model.DisableAutoThrottleRulesResponse({}));
  }

  /**
   * Disables the automatic SQL throttling feature for multiple database instances at a time.
   * 
   * @remarks
   * If you use an SDK to call operations of Database Autonomy Service (DAS), you must set the region ID to cn-shanghai.
   * 
   * @param request - DisableAutoThrottleRulesRequest
   * @returns DisableAutoThrottleRulesResponse
   */
  async disableAutoThrottleRules(request: $_model.DisableAutoThrottleRulesRequest): Promise<$_model.DisableAutoThrottleRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableAutoThrottleRulesWithOptions(request, runtime);
  }

  /**
   * Deactivates Database Autonomy Service (DAS) Professional Edition.
   * 
   * @remarks
   * - For more information about the database instances that support DAS Enterprise Edition, see [Overview](https://help.aliyun.com/document_detail/190912.html).
   * - If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
   * - This operation is applicable only to DAS Enterprise Edition V1.
   * > We recommend that you call the [ModifySqlLogConfig](https://help.aliyun.com/document_detail/2778835.html) operation to enable or disable DAS Enterprise Edition for a database instance. For more information about the databases and regions supported by each version of DAS Enterprise Edition, see [Editions and supported features](https://help.aliyun.com/document_detail/156204.html).
   * 
   * @param request - DisableDasProRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableDasProResponse
   */
  async disableDasProWithOptions(request: $_model.DisableDasProRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableDasProResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableDasPro",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableDasProResponse>(await this.callApi(params, req, runtime), new $_model.DisableDasProResponse({}));
  }

  /**
   * Deactivates Database Autonomy Service (DAS) Professional Edition.
   * 
   * @remarks
   * - For more information about the database instances that support DAS Enterprise Edition, see [Overview](https://help.aliyun.com/document_detail/190912.html).
   * - If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
   * - This operation is applicable only to DAS Enterprise Edition V1.
   * > We recommend that you call the [ModifySqlLogConfig](https://help.aliyun.com/document_detail/2778835.html) operation to enable or disable DAS Enterprise Edition for a database instance. For more information about the databases and regions supported by each version of DAS Enterprise Edition, see [Editions and supported features](https://help.aliyun.com/document_detail/156204.html).
   * 
   * @param request - DisableDasProRequest
   * @returns DisableDasProResponse
   */
  async disableDasPro(request: $_model.DisableDasProRequest): Promise<$_model.DisableDasProResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableDasProWithOptions(request, runtime);
  }

  /**
   * Disables the auto scaling feature for a database instance.
   * 
   * @remarks
   * Before you call this operation, take note of the following items:
   * - If you use Alibaba Cloud SDK or Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
   * - If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
   * - This operation is applicable only to ApsaraDB for Redis instances.
   * 
   * @param request - DisableInstanceDasConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableInstanceDasConfigResponse
   */
  async disableInstanceDasConfigWithOptions(request: $_model.DisableInstanceDasConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableInstanceDasConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.engine)) {
      query["Engine"] = request.engine;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.scaleType)) {
      query["ScaleType"] = request.scaleType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableInstanceDasConfig",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableInstanceDasConfigResponse>(await this.callApi(params, req, runtime), new $_model.DisableInstanceDasConfigResponse({}));
  }

  /**
   * Disables the auto scaling feature for a database instance.
   * 
   * @remarks
   * Before you call this operation, take note of the following items:
   * - If you use Alibaba Cloud SDK or Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
   * - If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
   * - This operation is applicable only to ApsaraDB for Redis instances.
   * 
   * @param request - DisableInstanceDasConfigRequest
   * @returns DisableInstanceDasConfigResponse
   */
  async disableInstanceDasConfig(request: $_model.DisableInstanceDasConfigRequest): Promise<$_model.DisableInstanceDasConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableInstanceDasConfigWithOptions(request, runtime);
  }

  /**
   * Disables a throttling rule.
   * 
   * @remarks
   * This operation is applicable to the following database engines:
   * - ApsaraDB RDS for MySQL
   * - PolarDB for MySQL
   * 
   * @param request - DisableSqlConcurrencyControlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableSqlConcurrencyControlResponse
   */
  async disableSqlConcurrencyControlWithOptions(request: $_model.DisableSqlConcurrencyControlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableSqlConcurrencyControlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.consoleContext)) {
      query["ConsoleContext"] = request.consoleContext;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.itemId)) {
      query["ItemId"] = request.itemId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableSqlConcurrencyControl",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableSqlConcurrencyControlResponse>(await this.callApi(params, req, runtime), new $_model.DisableSqlConcurrencyControlResponse({}));
  }

  /**
   * Disables a throttling rule.
   * 
   * @remarks
   * This operation is applicable to the following database engines:
   * - ApsaraDB RDS for MySQL
   * - PolarDB for MySQL
   * 
   * @param request - DisableSqlConcurrencyControlRequest
   * @returns DisableSqlConcurrencyControlResponse
   */
  async disableSqlConcurrencyControl(request: $_model.DisableSqlConcurrencyControlRequest): Promise<$_model.DisableSqlConcurrencyControlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableSqlConcurrencyControlWithOptions(request, runtime);
  }

  /**
   * Activates Database Autonomy Service (DAS) Professional Edition.
   * 
   * @remarks
   * - If you use an SDK to call the API operations of DAS, you must set the region ID to cn-shanghai.
   * - This operation is applicable only to DAS Enterprise Edition V1.
   * > We recommend that you call the [ModifySqlLogConfig](https://help.aliyun.com/document_detail/2778835.html) operation to activate or deactivate DAS Enterprise Edition for a database instance. For more information about the databases and regions supported by each version of DAS Enterprise Edition, see [DAS editions and supported features](https://help.aliyun.com/document_detail/156204.html).
   * 
   * @param request - EnableDasProRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableDasProResponse
   */
  async enableDasProWithOptions(request: $_model.EnableDasProRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableDasProResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.sqlRetention)) {
      query["SqlRetention"] = request.sqlRetention;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableDasPro",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableDasProResponse>(await this.callApi(params, req, runtime), new $_model.EnableDasProResponse({}));
  }

  /**
   * Activates Database Autonomy Service (DAS) Professional Edition.
   * 
   * @remarks
   * - If you use an SDK to call the API operations of DAS, you must set the region ID to cn-shanghai.
   * - This operation is applicable only to DAS Enterprise Edition V1.
   * > We recommend that you call the [ModifySqlLogConfig](https://help.aliyun.com/document_detail/2778835.html) operation to activate or deactivate DAS Enterprise Edition for a database instance. For more information about the databases and regions supported by each version of DAS Enterprise Edition, see [DAS editions and supported features](https://help.aliyun.com/document_detail/156204.html).
   * 
   * @param request - EnableDasProRequest
   * @returns EnableDasProResponse
   */
  async enableDasPro(request: $_model.EnableDasProRequest): Promise<$_model.EnableDasProResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableDasProWithOptions(request, runtime);
  }

  /**
   * Enables SQL throttling to control the numbers of database access requests and concurrent SQL statements.
   * 
   * @remarks
   * This operation supports the following database engines:
   * - ApsaraDB RDS for MySQL
   * - PolarDB for MySQL
   * 
   * @param request - EnableSqlConcurrencyControlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableSqlConcurrencyControlResponse
   */
  async enableSqlConcurrencyControlWithOptions(request: $_model.EnableSqlConcurrencyControlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableSqlConcurrencyControlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.concurrencyControlTime)) {
      query["ConcurrencyControlTime"] = request.concurrencyControlTime;
    }

    if (!$dara.isNull(request.consoleContext)) {
      query["ConsoleContext"] = request.consoleContext;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.maxConcurrency)) {
      query["MaxConcurrency"] = request.maxConcurrency;
    }

    if (!$dara.isNull(request.sqlKeywords)) {
      query["SqlKeywords"] = request.sqlKeywords;
    }

    if (!$dara.isNull(request.sqlType)) {
      query["SqlType"] = request.sqlType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableSqlConcurrencyControl",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableSqlConcurrencyControlResponse>(await this.callApi(params, req, runtime), new $_model.EnableSqlConcurrencyControlResponse({}));
  }

  /**
   * Enables SQL throttling to control the numbers of database access requests and concurrent SQL statements.
   * 
   * @remarks
   * This operation supports the following database engines:
   * - ApsaraDB RDS for MySQL
   * - PolarDB for MySQL
   * 
   * @param request - EnableSqlConcurrencyControlRequest
   * @returns EnableSqlConcurrencyControlResponse
   */
  async enableSqlConcurrencyControl(request: $_model.EnableSqlConcurrencyControlRequest): Promise<$_model.EnableSqlConcurrencyControlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableSqlConcurrencyControlWithOptions(request, runtime);
  }

  /**
   * Asynchronously queries the IDs of SQL statements that generate a MySQL error code in the SQL Explorer results of a database instance.
   * 
   * @remarks
   * > GetAsyncErrorRequestListByCode is an asynchronous operation. After a request is sent, the complete results are not returned immediately. If the value of the **isFinish** parameter is **false** in the response, wait for 1 second and then send a request again. If the value of the **isFinish** parameter is **true**, the complete results are returned.
   * - This API operation supports only ApsaraDB RDS for MySQL instances and PolarDB for MySQL clusters for which Database Autonomy Service (DAS) Enterprise Edition is enabled. For more information, see [Enable and manage DAS Economy Edition and DAS Enterprise Edition](https://help.aliyun.com/document_detail/163298.html).
   * - If you use an SDK to call the API operations of DAS, you must set the region ID to cn-shanghai.
   * - When you call this operation, the value of the SqlId parameter changes due to the optimization of the SQL template algorithm starting from September 1, 2024. For more information, see [[Notice\\] Optimization of the SQL template algorithm](~~2845725~~).
   * 
   * @param request - GetAsyncErrorRequestListByCodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAsyncErrorRequestListByCodeResponse
   */
  async getAsyncErrorRequestListByCodeWithOptions(request: $_model.GetAsyncErrorRequestListByCodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAsyncErrorRequestListByCodeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.end)) {
      query["End"] = request.end;
    }

    if (!$dara.isNull(request.errorCode)) {
      query["ErrorCode"] = request.errorCode;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.nodeId)) {
      query["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.start)) {
      query["Start"] = request.start;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAsyncErrorRequestListByCode",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAsyncErrorRequestListByCodeResponse>(await this.callApi(params, req, runtime), new $_model.GetAsyncErrorRequestListByCodeResponse({}));
  }

  /**
   * Asynchronously queries the IDs of SQL statements that generate a MySQL error code in the SQL Explorer results of a database instance.
   * 
   * @remarks
   * > GetAsyncErrorRequestListByCode is an asynchronous operation. After a request is sent, the complete results are not returned immediately. If the value of the **isFinish** parameter is **false** in the response, wait for 1 second and then send a request again. If the value of the **isFinish** parameter is **true**, the complete results are returned.
   * - This API operation supports only ApsaraDB RDS for MySQL instances and PolarDB for MySQL clusters for which Database Autonomy Service (DAS) Enterprise Edition is enabled. For more information, see [Enable and manage DAS Economy Edition and DAS Enterprise Edition](https://help.aliyun.com/document_detail/163298.html).
   * - If you use an SDK to call the API operations of DAS, you must set the region ID to cn-shanghai.
   * - When you call this operation, the value of the SqlId parameter changes due to the optimization of the SQL template algorithm starting from September 1, 2024. For more information, see [[Notice\\] Optimization of the SQL template algorithm](~~2845725~~).
   * 
   * @param request - GetAsyncErrorRequestListByCodeRequest
   * @returns GetAsyncErrorRequestListByCodeResponse
   */
  async getAsyncErrorRequestListByCode(request: $_model.GetAsyncErrorRequestListByCodeRequest): Promise<$_model.GetAsyncErrorRequestListByCodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAsyncErrorRequestListByCodeWithOptions(request, runtime);
  }

  /**
   * Asynchronously queries the MySQL error codes in SQL Explorer data and the number of SQL queries corresponding to each error code.
   * 
   * @remarks
   * > GetAsyncErrorRequestStatByCode is an asynchronous operation After a request is sent, the complete results are not returned immediately. If the value of **isFinish** is **false** in the response, wait for 1 second and then send a request again. If the value of **isFinish** is **true**, the complete results are returned.
   * - This API operation supports only ApsaraDB RDS for MySQL instances and PolarDB for MySQL clusters for which Database Autonomy Service (DAS) Enterprise Edition is enabled. For more information, see [Purchase DAS Enterprise Edition](https://help.aliyun.com/document_detail/163298.html).
   * - If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
   * 
   * @param request - GetAsyncErrorRequestStatByCodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAsyncErrorRequestStatByCodeResponse
   */
  async getAsyncErrorRequestStatByCodeWithOptions(request: $_model.GetAsyncErrorRequestStatByCodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAsyncErrorRequestStatByCodeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.end)) {
      query["End"] = request.end;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.nodeId)) {
      query["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.start)) {
      query["Start"] = request.start;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAsyncErrorRequestStatByCode",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAsyncErrorRequestStatByCodeResponse>(await this.callApi(params, req, runtime), new $_model.GetAsyncErrorRequestStatByCodeResponse({}));
  }

  /**
   * Asynchronously queries the MySQL error codes in SQL Explorer data and the number of SQL queries corresponding to each error code.
   * 
   * @remarks
   * > GetAsyncErrorRequestStatByCode is an asynchronous operation After a request is sent, the complete results are not returned immediately. If the value of **isFinish** is **false** in the response, wait for 1 second and then send a request again. If the value of **isFinish** is **true**, the complete results are returned.
   * - This API operation supports only ApsaraDB RDS for MySQL instances and PolarDB for MySQL clusters for which Database Autonomy Service (DAS) Enterprise Edition is enabled. For more information, see [Purchase DAS Enterprise Edition](https://help.aliyun.com/document_detail/163298.html).
   * - If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
   * 
   * @param request - GetAsyncErrorRequestStatByCodeRequest
   * @returns GetAsyncErrorRequestStatByCodeResponse
   */
  async getAsyncErrorRequestStatByCode(request: $_model.GetAsyncErrorRequestStatByCodeRequest): Promise<$_model.GetAsyncErrorRequestStatByCodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAsyncErrorRequestStatByCodeWithOptions(request, runtime);
  }

  /**
   * Call GetAsyncErrorRequestStatResult to asynchronously get the execution error count for a specific SQL statement from the SQL Insight results of a database instance.
   * 
   * @remarks
   * > This is an asynchronous call, so the complete results are not returned immediately. If the **isFinish** field in the response is **false**, wait 1s and retry the call. The complete results are returned when **isFinish** is **true**.
   * - This operation supports only RDS MySQL and PolarDB for MySQL instances. Before you call this operation, ensure that DAS Enterprise Edition is enabled for the instance. For more information, see [Purchase DAS Enterprise Edition](https://help.aliyun.com/document_detail/163298.html).
   * - When you use an SDK to call DAS, you must set the region to cn-shanghai.
   * 
   * @param request - GetAsyncErrorRequestStatResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAsyncErrorRequestStatResultResponse
   */
  async getAsyncErrorRequestStatResultWithOptions(request: $_model.GetAsyncErrorRequestStatResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAsyncErrorRequestStatResultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.end)) {
      query["End"] = request.end;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.nodeId)) {
      query["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.sqlIdList)) {
      query["SqlIdList"] = request.sqlIdList;
    }

    if (!$dara.isNull(request.start)) {
      query["Start"] = request.start;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAsyncErrorRequestStatResult",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAsyncErrorRequestStatResultResponse>(await this.callApi(params, req, runtime), new $_model.GetAsyncErrorRequestStatResultResponse({}));
  }

  /**
   * Call GetAsyncErrorRequestStatResult to asynchronously get the execution error count for a specific SQL statement from the SQL Insight results of a database instance.
   * 
   * @remarks
   * > This is an asynchronous call, so the complete results are not returned immediately. If the **isFinish** field in the response is **false**, wait 1s and retry the call. The complete results are returned when **isFinish** is **true**.
   * - This operation supports only RDS MySQL and PolarDB for MySQL instances. Before you call this operation, ensure that DAS Enterprise Edition is enabled for the instance. For more information, see [Purchase DAS Enterprise Edition](https://help.aliyun.com/document_detail/163298.html).
   * - When you use an SDK to call DAS, you must set the region to cn-shanghai.
   * 
   * @param request - GetAsyncErrorRequestStatResultRequest
   * @returns GetAsyncErrorRequestStatResultResponse
   */
  async getAsyncErrorRequestStatResult(request: $_model.GetAsyncErrorRequestStatResultRequest): Promise<$_model.GetAsyncErrorRequestStatResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAsyncErrorRequestStatResultWithOptions(request, runtime);
  }

  /**
   * Queries the usage of auto-increment table IDs.
   * 
   * @remarks
   * - This operation is applicable only to ApsaraDB RDS for MySQL instances and PolarDB for MySQL clusters.
   * - If you use an Alibaba Cloud SDK or Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
   * - If you use an SDK to call DAS, you must set the region to cn-shanghai.
   * 
   * @param request - GetAutoIncrementUsageStatisticRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAutoIncrementUsageStatisticResponse
   */
  async getAutoIncrementUsageStatisticWithOptions(request: $_model.GetAutoIncrementUsageStatisticRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAutoIncrementUsageStatisticResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbNames)) {
      query["DbNames"] = request.dbNames;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ratioFilter)) {
      query["RatioFilter"] = request.ratioFilter;
    }

    if (!$dara.isNull(request.realTime)) {
      query["RealTime"] = request.realTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAutoIncrementUsageStatistic",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAutoIncrementUsageStatisticResponse>(await this.callApi(params, req, runtime), new $_model.GetAutoIncrementUsageStatisticResponse({}));
  }

  /**
   * Queries the usage of auto-increment table IDs.
   * 
   * @remarks
   * - This operation is applicable only to ApsaraDB RDS for MySQL instances and PolarDB for MySQL clusters.
   * - If you use an Alibaba Cloud SDK or Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
   * - If you use an SDK to call DAS, you must set the region to cn-shanghai.
   * 
   * @param request - GetAutoIncrementUsageStatisticRequest
   * @returns GetAutoIncrementUsageStatisticResponse
   */
  async getAutoIncrementUsageStatistic(request: $_model.GetAutoIncrementUsageStatisticRequest): Promise<$_model.GetAutoIncrementUsageStatisticResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAutoIncrementUsageStatisticWithOptions(request, runtime);
  }

  /**
   * Queries the automatic fragment recycling rules of database instances.
   * 
   * @remarks
   * Before you call this operation, take note of the following items:
   * - If you use an SDK to call API operations of Database Autonomy Service (DAS), you must set the region ID to cn-shanghai.
   * - The database instance is an ApsaraDB RDS for MySQL instance of High-availability Edition.
   * - The database instance has four or more cores, and **innodb_file_per_table** is set to **ON**.
   * 
   * @param request - GetAutoResourceOptimizeRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAutoResourceOptimizeRulesResponse
   */
  async getAutoResourceOptimizeRulesWithOptions(request: $_model.GetAutoResourceOptimizeRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAutoResourceOptimizeRulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.consoleContext)) {
      query["ConsoleContext"] = request.consoleContext;
    }

    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAutoResourceOptimizeRules",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAutoResourceOptimizeRulesResponse>(await this.callApi(params, req, runtime), new $_model.GetAutoResourceOptimizeRulesResponse({}));
  }

  /**
   * Queries the automatic fragment recycling rules of database instances.
   * 
   * @remarks
   * Before you call this operation, take note of the following items:
   * - If you use an SDK to call API operations of Database Autonomy Service (DAS), you must set the region ID to cn-shanghai.
   * - The database instance is an ApsaraDB RDS for MySQL instance of High-availability Edition.
   * - The database instance has four or more cores, and **innodb_file_per_table** is set to **ON**.
   * 
   * @param request - GetAutoResourceOptimizeRulesRequest
   * @returns GetAutoResourceOptimizeRulesResponse
   */
  async getAutoResourceOptimizeRules(request: $_model.GetAutoResourceOptimizeRulesRequest): Promise<$_model.GetAutoResourceOptimizeRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAutoResourceOptimizeRulesWithOptions(request, runtime);
  }

  /**
   * Queries the automatic SQL throttling rules of a database instance.
   * 
   * @remarks
   * Before you call this operation, take note of the following items:
   * - If you use an SDK to call API operations of Database Autonomy Service (DAS), you must set the region ID to cn-shanghai.
   * - The database instance that you want to manage must be of one of the following types:
   *   - ApsaraDB RDS for MySQL High-availability Edition or Enterprise Edition that runs MySQL 5.6, MySQL 5.7, or MySQL 8.0
   *   - PolarDB for MySQL Cluster Edition that runs MySQL 5.6, MySQL 5.7, or MySQL 8.0
   * 
   * @param request - GetAutoThrottleRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAutoThrottleRulesResponse
   */
  async getAutoThrottleRulesWithOptions(request: $_model.GetAutoThrottleRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAutoThrottleRulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.consoleContext)) {
      query["ConsoleContext"] = request.consoleContext;
    }

    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAutoThrottleRules",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAutoThrottleRulesResponse>(await this.callApi(params, req, runtime), new $_model.GetAutoThrottleRulesResponse({}));
  }

  /**
   * Queries the automatic SQL throttling rules of a database instance.
   * 
   * @remarks
   * Before you call this operation, take note of the following items:
   * - If you use an SDK to call API operations of Database Autonomy Service (DAS), you must set the region ID to cn-shanghai.
   * - The database instance that you want to manage must be of one of the following types:
   *   - ApsaraDB RDS for MySQL High-availability Edition or Enterprise Edition that runs MySQL 5.6, MySQL 5.7, or MySQL 8.0
   *   - PolarDB for MySQL Cluster Edition that runs MySQL 5.6, MySQL 5.7, or MySQL 8.0
   * 
   * @param request - GetAutoThrottleRulesRequest
   * @returns GetAutoThrottleRulesResponse
   */
  async getAutoThrottleRules(request: $_model.GetAutoThrottleRulesRequest): Promise<$_model.GetAutoThrottleRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAutoThrottleRulesWithOptions(request, runtime);
  }

  /**
   * Returns details of autonomous notification events for a database instance.
   * 
   * @remarks
   * Before you call this operation, take note of the following items:
   * - If you use Alibaba Cloud SDK or Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
   * - If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
   * - After your instance is connected to DAS, notification events such as snapshot capture are triggered if DAS detects changes to database monitoring metrics during anomaly detection.
   * > You can query the details of notification events only if the autonomy center is enabled. For more information, see [Autonomy center](https://help.aliyun.com/document_detail/152139.html).
   * 
   * @param request - GetAutonomousNotifyEventContentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAutonomousNotifyEventContentResponse
   */
  async getAutonomousNotifyEventContentWithOptions(request: $_model.GetAutonomousNotifyEventContentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAutonomousNotifyEventContentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.spanId)) {
      query["SpanId"] = request.spanId;
    }

    if (!$dara.isNull(request.context)) {
      query["__context"] = request.context;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAutonomousNotifyEventContent",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAutonomousNotifyEventContentResponse>(await this.callApi(params, req, runtime), new $_model.GetAutonomousNotifyEventContentResponse({}));
  }

  /**
   * Returns details of autonomous notification events for a database instance.
   * 
   * @remarks
   * Before you call this operation, take note of the following items:
   * - If you use Alibaba Cloud SDK or Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
   * - If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
   * - After your instance is connected to DAS, notification events such as snapshot capture are triggered if DAS detects changes to database monitoring metrics during anomaly detection.
   * > You can query the details of notification events only if the autonomy center is enabled. For more information, see [Autonomy center](https://help.aliyun.com/document_detail/152139.html).
   * 
   * @param request - GetAutonomousNotifyEventContentRequest
   * @returns GetAutonomousNotifyEventContentResponse
   */
  async getAutonomousNotifyEventContent(request: $_model.GetAutonomousNotifyEventContentRequest): Promise<$_model.GetAutonomousNotifyEventContentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAutonomousNotifyEventContentWithOptions(request, runtime);
  }

  /**
   * Queries the notification events of one or more urgency levels within a period.
   * 
   * @remarks
   * Before you call this operation, take note of the following items:
   * - If you use Alibaba Cloud SDK or Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
   * - If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
   * - After your instance is connected to DAS, notification events such as snapshot capture are triggered if DAS detects changes to database monitoring metrics during anomaly detection.
   * > You can query the details of notification events only if the autonomy center is enabled. For more information, see [Autonomy center](https://help.aliyun.com/document_detail/152139.html).
   * 
   * @param request - GetAutonomousNotifyEventsInRangeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAutonomousNotifyEventsInRangeResponse
   */
  async getAutonomousNotifyEventsInRangeWithOptions(request: $_model.GetAutonomousNotifyEventsInRangeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAutonomousNotifyEventsInRangeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.eventContext)) {
      query["EventContext"] = request.eventContext;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.level)) {
      query["Level"] = request.level;
    }

    if (!$dara.isNull(request.minLevel)) {
      query["MinLevel"] = request.minLevel;
    }

    if (!$dara.isNull(request.nodeId)) {
      query["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.pageOffset)) {
      query["PageOffset"] = request.pageOffset;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.context)) {
      query["__context"] = request.context;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAutonomousNotifyEventsInRange",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAutonomousNotifyEventsInRangeResponse>(await this.callApi(params, req, runtime), new $_model.GetAutonomousNotifyEventsInRangeResponse({}));
  }

  /**
   * Queries the notification events of one or more urgency levels within a period.
   * 
   * @remarks
   * Before you call this operation, take note of the following items:
   * - If you use Alibaba Cloud SDK or Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
   * - If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
   * - After your instance is connected to DAS, notification events such as snapshot capture are triggered if DAS detects changes to database monitoring metrics during anomaly detection.
   * > You can query the details of notification events only if the autonomy center is enabled. For more information, see [Autonomy center](https://help.aliyun.com/document_detail/152139.html).
   * 
   * @param request - GetAutonomousNotifyEventsInRangeRequest
   * @returns GetAutonomousNotifyEventsInRangeResponse
   */
  async getAutonomousNotifyEventsInRange(request: $_model.GetAutonomousNotifyEventsInRangeRequest): Promise<$_model.GetAutonomousNotifyEventsInRangeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAutonomousNotifyEventsInRangeWithOptions(request, runtime);
  }

  /**
   * Queries the blocking data of an ApsaraDB RDS for SQL Server instance.
   * 
   * @remarks
   * - This operation is applicable only to ApsaraDB RDS for SQL Server instances.
   * - If you use an Alibaba Cloud SDK or Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
   * - If you use an SDK to call the API operations of DAS, you must set the region ID to cn-shanghai.
   * 
   * @param request - GetBlockingDetailListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetBlockingDetailListResponse
   */
  async getBlockingDetailListWithOptions(request: $_model.GetBlockingDetailListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetBlockingDetailListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbNameList)) {
      query["DbNameList"] = request.dbNameList;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
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

    if (!$dara.isNull(request.queryHash)) {
      query["QueryHash"] = request.queryHash;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetBlockingDetailList",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetBlockingDetailListResponse>(await this.callApi(params, req, runtime), new $_model.GetBlockingDetailListResponse({}));
  }

  /**
   * Queries the blocking data of an ApsaraDB RDS for SQL Server instance.
   * 
   * @remarks
   * - This operation is applicable only to ApsaraDB RDS for SQL Server instances.
   * - If you use an Alibaba Cloud SDK or Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
   * - If you use an SDK to call the API operations of DAS, you must set the region ID to cn-shanghai.
   * 
   * @param request - GetBlockingDetailListRequest
   * @returns GetBlockingDetailListResponse
   */
  async getBlockingDetailList(request: $_model.GetBlockingDetailListRequest): Promise<$_model.GetBlockingDetailListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getBlockingDetailListWithOptions(request, runtime);
  }

  /**
   * Retrieves the network connectivity diagnosis result from a user-specified IP address to a specified database instance.
   * 
   * @remarks
   * Before you begin:
   * - Use the latest version of Alibaba Cloud SDK or DAS SDK.
   * - When calling DAS by using the SDK, set the region to cn-shanghai.
   * - The database instance is connected to DAS.
   * 
   * @param request - GetDBInstanceConnectivityDiagnosisRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDBInstanceConnectivityDiagnosisResponse
   */
  async getDBInstanceConnectivityDiagnosisWithOptions(request: $_model.GetDBInstanceConnectivityDiagnosisRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDBInstanceConnectivityDiagnosisResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.srcIp)) {
      query["SrcIp"] = request.srcIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDBInstanceConnectivityDiagnosis",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDBInstanceConnectivityDiagnosisResponse>(await this.callApi(params, req, runtime), new $_model.GetDBInstanceConnectivityDiagnosisResponse({}));
  }

  /**
   * Retrieves the network connectivity diagnosis result from a user-specified IP address to a specified database instance.
   * 
   * @remarks
   * Before you begin:
   * - Use the latest version of Alibaba Cloud SDK or DAS SDK.
   * - When calling DAS by using the SDK, set the region to cn-shanghai.
   * - The database instance is connected to DAS.
   * 
   * @param request - GetDBInstanceConnectivityDiagnosisRequest
   * @returns GetDBInstanceConnectivityDiagnosisResponse
   */
  async getDBInstanceConnectivityDiagnosis(request: $_model.GetDBInstanceConnectivityDiagnosisRequest): Promise<$_model.GetDBInstanceConnectivityDiagnosisResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDBInstanceConnectivityDiagnosisWithOptions(request, runtime);
  }

  /**
   * Provides a DAS large model interactive SSE interface. Supports features such as AI chat and performance diagnostics.
   * 
   * @remarks
   * This is a paid API that is billed based on the number of output characters. Before using this API, make sure that you fully understand the billing method and [pricing](https://www.alibabacloud.com/help/en/das/product-overview/billing-details-of-the-previous-version#cad160563fbkd) of the DAS Agent product.
   * 
   * @param request - GetDasAgentSSERequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDasAgentSSEResponse
   */
  async *getDasAgentSSEWithSSE(request: $_model.GetDasAgentSSERequest, runtime: $dara.RuntimeOptions): AsyncGenerator<$_model.GetDasAgentSSEResponse, any, unknown> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentId)) {
      query["AgentId"] = request.agentId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.query)) {
      query["Query"] = request.query;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDasAgentSSE",
      version: "2020-01-16",
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
      if (!$dara.isNull(resp.event) && !$dara.isNull(resp.event.data)) {
        let data = JSON.parse(resp.event.data);
        yield $dara.cast<$_model.GetDasAgentSSEResponse>({
          statusCode: resp.statusCode,
          headers: resp.headers,
          id: resp.event.id,
          event: resp.event.event,
          body: data,
        }, new $_model.GetDasAgentSSEResponse({}));
      }

    }
  }

  /**
   * Provides a DAS large model interactive SSE interface. Supports features such as AI chat and performance diagnostics.
   * 
   * @remarks
   * This is a paid API that is billed based on the number of output characters. Before using this API, make sure that you fully understand the billing method and [pricing](https://www.alibabacloud.com/help/en/das/product-overview/billing-details-of-the-previous-version#cad160563fbkd) of the DAS Agent product.
   * 
   * @param request - GetDasAgentSSERequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDasAgentSSEResponse
   */
  async getDasAgentSSEWithOptions(request: $_model.GetDasAgentSSERequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDasAgentSSEResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentId)) {
      query["AgentId"] = request.agentId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.query)) {
      query["Query"] = request.query;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDasAgentSSE",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDasAgentSSEResponse>(await this.callApi(params, req, runtime), new $_model.GetDasAgentSSEResponse({}));
  }

  /**
   * Provides a DAS large model interactive SSE interface. Supports features such as AI chat and performance diagnostics.
   * 
   * @remarks
   * This is a paid API that is billed based on the number of output characters. Before using this API, make sure that you fully understand the billing method and [pricing](https://www.alibabacloud.com/help/en/das/product-overview/billing-details-of-the-previous-version#cad160563fbkd) of the DAS Agent product.
   * 
   * @param request - GetDasAgentSSERequest
   * @returns GetDasAgentSSEResponse
   */
  async getDasAgentSSE(request: $_model.GetDasAgentSSERequest): Promise<$_model.GetDasAgentSSEResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDasAgentSSEWithOptions(request, runtime);
  }

  /**
   * Queries the storage usage of DAS Enterprise Edition V1 or V2 for a database instance.
   * 
   * @remarks
   * - For information about the supported databases, see [DAS Enterprise Edition](https://help.aliyun.com/document_detail/190912.html).
   * - When using the Alibaba Cloud or DAS SDK, use the latest version.
   * - When invoking DAS by using the SDK, set the region to cn-shanghai.
   * - This operation applies only to DAS Enterprise Edition V1 and V2.
   * >Use the [DescribeSqlLogStatistic](https://help.aliyun.com/document_detail/2778836.html) operation to query the statistics information of DAS Enterprise Edition.
   * 
   * @param request - GetDasProServiceUsageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDasProServiceUsageResponse
   */
  async getDasProServiceUsageWithOptions(request: $_model.GetDasProServiceUsageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDasProServiceUsageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDasProServiceUsage",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDasProServiceUsageResponse>(await this.callApi(params, req, runtime), new $_model.GetDasProServiceUsageResponse({}));
  }

  /**
   * Queries the storage usage of DAS Enterprise Edition V1 or V2 for a database instance.
   * 
   * @remarks
   * - For information about the supported databases, see [DAS Enterprise Edition](https://help.aliyun.com/document_detail/190912.html).
   * - When using the Alibaba Cloud or DAS SDK, use the latest version.
   * - When invoking DAS by using the SDK, set the region to cn-shanghai.
   * - This operation applies only to DAS Enterprise Edition V1 and V2.
   * >Use the [DescribeSqlLogStatistic](https://help.aliyun.com/document_detail/2778836.html) operation to query the statistics information of DAS Enterprise Edition.
   * 
   * @param request - GetDasProServiceUsageRequest
   * @returns GetDasProServiceUsageResponse
   */
  async getDasProServiceUsage(request: $_model.GetDasProServiceUsageRequest): Promise<$_model.GetDasProServiceUsageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDasProServiceUsageWithOptions(request, runtime);
  }

  /**
   * Retrieves hot data from SQL audit logs.
   * 
   * @remarks
   * Before you call this API, ensure that you meet the following requirements:
   * - Use the latest version of the Alibaba Cloud SDK or DAS SDK.
   * - When using an SDK to call the DAS service, specify the region as `cn-shanghai`.
   * - Supported engines: PolarDB MySQL, ApsaraDB RDS for MySQL, ApsaraDB RDS for PostgreSQL, and ApsaraDB RDS for SQLServer.
   * - Enable log indexing for the instance.
   * > The query start time must be within the last 7 days. The query duration cannot exceed 1 day. The API returns up to 10,000 records.
   * 
   * @param request - GetDasSQLLogHotDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDasSQLLogHotDataResponse
   */
  async getDasSQLLogHotDataWithOptions(request: $_model.GetDasSQLLogHotDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDasSQLLogHotDataResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountName)) {
      body["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.childDBInstanceIDs)) {
      body["ChildDBInstanceIDs"] = request.childDBInstanceIDs;
    }

    if (!$dara.isNull(request.DBName)) {
      body["DBName"] = request.DBName;
    }

    if (!$dara.isNull(request.end)) {
      body["End"] = request.end;
    }

    if (!$dara.isNull(request.fail)) {
      body["Fail"] = request.fail;
    }

    if (!$dara.isNull(request.hostAddress)) {
      body["HostAddress"] = request.hostAddress;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.logicalOperator)) {
      body["LogicalOperator"] = request.logicalOperator;
    }

    if (!$dara.isNull(request.maxLatancy)) {
      body["MaxLatancy"] = request.maxLatancy;
    }

    if (!$dara.isNull(request.maxRecordsPerPage)) {
      body["MaxRecordsPerPage"] = request.maxRecordsPerPage;
    }

    if (!$dara.isNull(request.maxRows)) {
      body["MaxRows"] = request.maxRows;
    }

    if (!$dara.isNull(request.maxScanRows)) {
      body["MaxScanRows"] = request.maxScanRows;
    }

    if (!$dara.isNull(request.maxSpillCnt)) {
      body["MaxSpillCnt"] = request.maxSpillCnt;
    }

    if (!$dara.isNull(request.minLatancy)) {
      body["MinLatancy"] = request.minLatancy;
    }

    if (!$dara.isNull(request.minRows)) {
      body["MinRows"] = request.minRows;
    }

    if (!$dara.isNull(request.minScanRows)) {
      body["MinScanRows"] = request.minScanRows;
    }

    if (!$dara.isNull(request.minSpillCnt)) {
      body["MinSpillCnt"] = request.minSpillCnt;
    }

    if (!$dara.isNull(request.pageNumbers)) {
      body["PageNumbers"] = request.pageNumbers;
    }

    if (!$dara.isNull(request.queryKeyword)) {
      body["QueryKeyword"] = request.queryKeyword;
    }

    if (!$dara.isNull(request.role)) {
      body["Role"] = request.role;
    }

    if (!$dara.isNull(request.sortKey)) {
      body["SortKey"] = request.sortKey;
    }

    if (!$dara.isNull(request.sortMethod)) {
      body["SortMethod"] = request.sortMethod;
    }

    if (!$dara.isNull(request.sqlType)) {
      body["SqlType"] = request.sqlType;
    }

    if (!$dara.isNull(request.start)) {
      body["Start"] = request.start;
    }

    if (!$dara.isNull(request.state)) {
      body["State"] = request.state;
    }

    if (!$dara.isNull(request.threadID)) {
      body["ThreadID"] = request.threadID;
    }

    if (!$dara.isNull(request.traceId)) {
      body["TraceId"] = request.traceId;
    }

    if (!$dara.isNull(request.transactionId)) {
      body["TransactionId"] = request.transactionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDasSQLLogHotData",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDasSQLLogHotDataResponse>(await this.callApi(params, req, runtime), new $_model.GetDasSQLLogHotDataResponse({}));
  }

  /**
   * Retrieves hot data from SQL audit logs.
   * 
   * @remarks
   * Before you call this API, ensure that you meet the following requirements:
   * - Use the latest version of the Alibaba Cloud SDK or DAS SDK.
   * - When using an SDK to call the DAS service, specify the region as `cn-shanghai`.
   * - Supported engines: PolarDB MySQL, ApsaraDB RDS for MySQL, ApsaraDB RDS for PostgreSQL, and ApsaraDB RDS for SQLServer.
   * - Enable log indexing for the instance.
   * > The query start time must be within the last 7 days. The query duration cannot exceed 1 day. The API returns up to 10,000 records.
   * 
   * @param request - GetDasSQLLogHotDataRequest
   * @returns GetDasSQLLogHotDataResponse
   */
  async getDasSQLLogHotData(request: $_model.GetDasSQLLogHotDataRequest): Promise<$_model.GetDasSQLLogHotDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDasSQLLogHotDataWithOptions(request, runtime);
  }

  /**
   * Retrieves the detailed information for a single deadlock event.
   * 
   * @remarks
   * This API fetches the full details of a specific deadlock, including the transactions involved, the SQL statements, and the locks held and waited for. The deadlock can be from either a recent analysis or a full historical analysis. For more information, see [Deadlock analysis](https://help.aliyun.com/document_detail/2858236.html).
   * Before you call this operation, ensure the following:
   * - **Supported engines**:
   *   - For recent deadlock analysis: ApsaraDB RDS for MySQL, self-managed MySQL, PolarDB for MySQL, PolarDB-X 2.0.
   *   - For full deadlock analysis: ApsaraDB RDS for MySQL or PolarDB for MySQL with [DAS Economy Edition](https://help.aliyun.com/document_detail/2666482.html) or [DAS Professional Edition](https://help.aliyun.com/document_detail/190912.html) enabled.
   * - **SDK version**: Use the latest version of the Alibaba Cloud SDK.
   * - **Region**: If you call the API via the SDK, set the region ID to `cn-shanghai`.
   * 
   * @param request - GetDeadLockDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDeadLockDetailResponse
   */
  async getDeadLockDetailWithOptions(request: $_model.GetDeadLockDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDeadLockDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.nodeId)) {
      query["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.source)) {
      query["Source"] = request.source;
    }

    if (!$dara.isNull(request.textId)) {
      query["TextId"] = request.textId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDeadLockDetail",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDeadLockDetailResponse>(await this.callApi(params, req, runtime), new $_model.GetDeadLockDetailResponse({}));
  }

  /**
   * Retrieves the detailed information for a single deadlock event.
   * 
   * @remarks
   * This API fetches the full details of a specific deadlock, including the transactions involved, the SQL statements, and the locks held and waited for. The deadlock can be from either a recent analysis or a full historical analysis. For more information, see [Deadlock analysis](https://help.aliyun.com/document_detail/2858236.html).
   * Before you call this operation, ensure the following:
   * - **Supported engines**:
   *   - For recent deadlock analysis: ApsaraDB RDS for MySQL, self-managed MySQL, PolarDB for MySQL, PolarDB-X 2.0.
   *   - For full deadlock analysis: ApsaraDB RDS for MySQL or PolarDB for MySQL with [DAS Economy Edition](https://help.aliyun.com/document_detail/2666482.html) or [DAS Professional Edition](https://help.aliyun.com/document_detail/190912.html) enabled.
   * - **SDK version**: Use the latest version of the Alibaba Cloud SDK.
   * - **Region**: If you call the API via the SDK, set the region ID to `cn-shanghai`.
   * 
   * @param request - GetDeadLockDetailRequest
   * @returns GetDeadLockDetailResponse
   */
  async getDeadLockDetail(request: $_model.GetDeadLockDetailRequest): Promise<$_model.GetDeadLockDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDeadLockDetailWithOptions(request, runtime);
  }

  /**
   * Queries the deadlock details of an ApsaraDB RDS for SQL Server instance.
   * 
   * @remarks
   * - This operation is applicable only to ApsaraDB RDS for SQL Server instances.
   * - If you use an Alibaba Cloud SDK or Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
   * - If you use an SDK to call the API operations of DAS, you must set the region ID to cn-shanghai.
   * 
   * @param request - GetDeadLockDetailListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDeadLockDetailListResponse
   */
  async getDeadLockDetailListWithOptions(request: $_model.GetDeadLockDetailListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDeadLockDetailListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbNameList)) {
      query["DbNameList"] = request.dbNameList;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
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

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDeadLockDetailList",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDeadLockDetailListResponse>(await this.callApi(params, req, runtime), new $_model.GetDeadLockDetailListResponse({}));
  }

  /**
   * Queries the deadlock details of an ApsaraDB RDS for SQL Server instance.
   * 
   * @remarks
   * - This operation is applicable only to ApsaraDB RDS for SQL Server instances.
   * - If you use an Alibaba Cloud SDK or Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
   * - If you use an SDK to call the API operations of DAS, you must set the region ID to cn-shanghai.
   * 
   * @param request - GetDeadLockDetailListRequest
   * @returns GetDeadLockDetailListResponse
   */
  async getDeadLockDetailList(request: $_model.GetDeadLockDetailListRequest): Promise<$_model.GetDeadLockDetailListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDeadLockDetailListWithOptions(request, runtime);
  }

  /**
   * Retrieves the historical analysis tasks for recent and full deadlock analysis.
   * 
   * @remarks
   * Retrieves the historical analysis records for recent and full deadlock analysis. For more information, see [Deadlock analysis](https://help.aliyun.com/document_detail/2858236.html).
   * The following requirements must be met before you call this operation:
   * - To query historical analysis records of recent deadlocks, the destination database engine must be RDS MySQL, self-managed MySQL, PolarDB for MySQL, or PolarDB-X 2.0.
   * - To query historical analysis records of full deadlocks, the destination database engine must be RDS MySQL or PolarDB for MySQL, and [DAS Alibaba Cloud Managed Services (formerly known as Economy Edition)](https://help.aliyun.com/document_detail/2666482.html) must be enabled.
   * - Use the latest version of the Alibaba Cloud SDK or DAS SDK.
   * - When you use an SDK to call the DAS service, set the region to cn-shanghai.
   * 
   * @param request - GetDeadLockHistoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDeadLockHistoryResponse
   */
  async getDeadLockHistoryWithOptions(request: $_model.GetDeadLockHistoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDeadLockHistoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.nodeId)) {
      query["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.source)) {
      query["Source"] = request.source;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDeadLockHistory",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDeadLockHistoryResponse>(await this.callApi(params, req, runtime), new $_model.GetDeadLockHistoryResponse({}));
  }

  /**
   * Retrieves the historical analysis tasks for recent and full deadlock analysis.
   * 
   * @remarks
   * Retrieves the historical analysis records for recent and full deadlock analysis. For more information, see [Deadlock analysis](https://help.aliyun.com/document_detail/2858236.html).
   * The following requirements must be met before you call this operation:
   * - To query historical analysis records of recent deadlocks, the destination database engine must be RDS MySQL, self-managed MySQL, PolarDB for MySQL, or PolarDB-X 2.0.
   * - To query historical analysis records of full deadlocks, the destination database engine must be RDS MySQL or PolarDB for MySQL, and [DAS Alibaba Cloud Managed Services (formerly known as Economy Edition)](https://help.aliyun.com/document_detail/2666482.html) must be enabled.
   * - Use the latest version of the Alibaba Cloud SDK or DAS SDK.
   * - When you use an SDK to call the DAS service, set the region to cn-shanghai.
   * 
   * @param request - GetDeadLockHistoryRequest
   * @returns GetDeadLockHistoryResponse
   */
  async getDeadLockHistory(request: $_model.GetDeadLockHistoryRequest): Promise<$_model.GetDeadLockHistoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDeadLockHistoryWithOptions(request, runtime);
  }

  /**
   * Queries the deadlock count trend based on full deadlock analysis of error logs within a specified time range.
   * 
   * @remarks
   * Invokes this operation to query the deadlock count from full deadlock analysis within a specified time range. DAS periodically analyzes fault logs, parses deadlock information, and collects statistics on deadlock count trends. For details, see [Full deadlock analysis](https://help.aliyun.com/document_detail/2858236.html).
   * Before you begin:
   * - The database DPI engine must be RDS MySQL or PolarDB for MySQL, and [DAS Alibaba Cloud Managed Services (formerly DAS Economy Edition)](https://help.aliyun.com/document_detail/2666482.html) must be enabled.
   * - If you use the China site (aliyun.com) or DAS SDK, use the latest version.
   * - When you invoke DAS by using the SDK, set the region to cn-shanghai.
   * 
   * @param request - GetDeadlockHistogramRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDeadlockHistogramResponse
   */
  async getDeadlockHistogramWithOptions(request: $_model.GetDeadlockHistogramRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDeadlockHistogramResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.nodeId)) {
      body["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDeadlockHistogram",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDeadlockHistogramResponse>(await this.callApi(params, req, runtime), new $_model.GetDeadlockHistogramResponse({}));
  }

  /**
   * Queries the deadlock count trend based on full deadlock analysis of error logs within a specified time range.
   * 
   * @remarks
   * Invokes this operation to query the deadlock count from full deadlock analysis within a specified time range. DAS periodically analyzes fault logs, parses deadlock information, and collects statistics on deadlock count trends. For details, see [Full deadlock analysis](https://help.aliyun.com/document_detail/2858236.html).
   * Before you begin:
   * - The database DPI engine must be RDS MySQL or PolarDB for MySQL, and [DAS Alibaba Cloud Managed Services (formerly DAS Economy Edition)](https://help.aliyun.com/document_detail/2666482.html) must be enabled.
   * - If you use the China site (aliyun.com) or DAS SDK, use the latest version.
   * - When you invoke DAS by using the SDK, set the region to cn-shanghai.
   * 
   * @param request - GetDeadlockHistogramRequest
   * @returns GetDeadlockHistogramResponse
   */
  async getDeadlockHistogram(request: $_model.GetDeadlockHistogramRequest): Promise<$_model.GetDeadlockHistogramResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDeadlockHistogramWithOptions(request, runtime);
  }

  /**
   * Asynchronously queries information about failed SQL queries in SQL Explorer data. You can query up to 20 failed SQL queries within the specific time range.
   * 
   * @remarks
   * > GetErrorRequestSample is an asynchronous operation. After a request is sent, the complete results are not returned immediately. If the value of **isFinish** is **false** in the response, wait for 1 second and then send a request again. If the value of **isFinish** is **true**, the complete results are returned.
   * - This API operation supports only ApsaraDB RDS for MySQL instances and PolarDB for MySQL clusters for which Database Autonomy Service (DAS) Enterprise Edition is enabled. For more information, see [Purchase DAS Enterprise Edition](https://help.aliyun.com/document_detail/163298.html).
   * - If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
   * 
   * @param request - GetErrorRequestSampleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetErrorRequestSampleResponse
   */
  async getErrorRequestSampleWithOptions(request: $_model.GetErrorRequestSampleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetErrorRequestSampleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.end)) {
      query["End"] = request.end;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.nodeId)) {
      query["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.sqlId)) {
      query["SqlId"] = request.sqlId;
    }

    if (!$dara.isNull(request.start)) {
      query["Start"] = request.start;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetErrorRequestSample",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetErrorRequestSampleResponse>(await this.callApi(params, req, runtime), new $_model.GetErrorRequestSampleResponse({}));
  }

  /**
   * Asynchronously queries information about failed SQL queries in SQL Explorer data. You can query up to 20 failed SQL queries within the specific time range.
   * 
   * @remarks
   * > GetErrorRequestSample is an asynchronous operation. After a request is sent, the complete results are not returned immediately. If the value of **isFinish** is **false** in the response, wait for 1 second and then send a request again. If the value of **isFinish** is **true**, the complete results are returned.
   * - This API operation supports only ApsaraDB RDS for MySQL instances and PolarDB for MySQL clusters for which Database Autonomy Service (DAS) Enterprise Edition is enabled. For more information, see [Purchase DAS Enterprise Edition](https://help.aliyun.com/document_detail/163298.html).
   * - If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
   * 
   * @param request - GetErrorRequestSampleRequest
   * @returns GetErrorRequestSampleResponse
   */
  async getErrorRequestSample(request: $_model.GetErrorRequestSampleRequest): Promise<$_model.GetErrorRequestSampleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getErrorRequestSampleWithOptions(request, runtime);
  }

  /**
   * Queries the event subscription settings of a database instance.
   * 
   * @remarks
   * Before you call this operation, take note of the following items:
   * - If you use an Alibaba Cloud SDK or a Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
   * - If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
   * - The database instance that you want to manage is connected to DAS.
   * 
   * @param request - GetEventSubscriptionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetEventSubscriptionResponse
   */
  async getEventSubscriptionWithOptions(request: $_model.GetEventSubscriptionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetEventSubscriptionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetEventSubscription",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetEventSubscriptionResponse>(await this.callApi(params, req, runtime), new $_model.GetEventSubscriptionResponse({}));
  }

  /**
   * Queries the event subscription settings of a database instance.
   * 
   * @remarks
   * Before you call this operation, take note of the following items:
   * - If you use an Alibaba Cloud SDK or a Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
   * - If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
   * - The database instance that you want to manage is connected to DAS.
   * 
   * @param request - GetEventSubscriptionRequest
   * @returns GetEventSubscriptionResponse
   */
  async getEventSubscription(request: $_model.GetEventSubscriptionRequest): Promise<$_model.GetEventSubscriptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getEventSubscriptionWithOptions(request, runtime);
  }

  /**
   * Collects the full request statistics in the SQL Explorer results of a database instance by access source.
   * 
   * @remarks
   * The SQL Explorer feature allows you to check the health status of SQL statements and troubleshoot performance issues. For more information, see [SQL Explorer](https://help.aliyun.com/document_detail/204096.html).
   * - For more information about database instances that support this feature, see [Overview](https://help.aliyun.com/document_detail/190912.html).
   * - If you use an SDK to call API operations of Database Autonomy Service (DAS), you must set the region ID to cn-shanghai.
   * 
   * @param request - GetFullRequestOriginStatByInstanceIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFullRequestOriginStatByInstanceIdResponse
   */
  async getFullRequestOriginStatByInstanceIdWithOptions(request: $_model.GetFullRequestOriginStatByInstanceIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetFullRequestOriginStatByInstanceIdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.asc)) {
      query["Asc"] = request.asc;
    }

    if (!$dara.isNull(request.end)) {
      query["End"] = request.end;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.nodeId)) {
      query["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.role)) {
      query["Role"] = request.role;
    }

    if (!$dara.isNull(request.sqlType)) {
      query["SqlType"] = request.sqlType;
    }

    if (!$dara.isNull(request.start)) {
      query["Start"] = request.start;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetFullRequestOriginStatByInstanceId",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetFullRequestOriginStatByInstanceIdResponse>(await this.callApi(params, req, runtime), new $_model.GetFullRequestOriginStatByInstanceIdResponse({}));
  }

  /**
   * Collects the full request statistics in the SQL Explorer results of a database instance by access source.
   * 
   * @remarks
   * The SQL Explorer feature allows you to check the health status of SQL statements and troubleshoot performance issues. For more information, see [SQL Explorer](https://help.aliyun.com/document_detail/204096.html).
   * - For more information about database instances that support this feature, see [Overview](https://help.aliyun.com/document_detail/190912.html).
   * - If you use an SDK to call API operations of Database Autonomy Service (DAS), you must set the region ID to cn-shanghai.
   * 
   * @param request - GetFullRequestOriginStatByInstanceIdRequest
   * @returns GetFullRequestOriginStatByInstanceIdResponse
   */
  async getFullRequestOriginStatByInstanceId(request: $_model.GetFullRequestOriginStatByInstanceIdRequest): Promise<$_model.GetFullRequestOriginStatByInstanceIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getFullRequestOriginStatByInstanceIdWithOptions(request, runtime);
  }

  /**
   * Queries sample SQL statements in the SQL Explorer data of a database instance by SQL ID. You can query up to 20 sample SQL statements.
   * 
   * @remarks
   * The SQL Explorer feature allows you to check the health status of SQL statements and troubleshoot performance issues. For more information, see [SQL Explorer](https://help.aliyun.com/document_detail/204096.html).
   * - For more information about the database engines that support SQL Explorer, see [SQL Explorer](https://help.aliyun.com/document_detail/204096.html).
   * - If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
   * 
   * @param request - GetFullRequestSampleByInstanceIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFullRequestSampleByInstanceIdResponse
   */
  async getFullRequestSampleByInstanceIdWithOptions(request: $_model.GetFullRequestSampleByInstanceIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetFullRequestSampleByInstanceIdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.role)) {
      query["Role"] = request.role;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.end)) {
      body["End"] = request.end;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.sqlId)) {
      body["SqlId"] = request.sqlId;
    }

    if (!$dara.isNull(request.start)) {
      body["Start"] = request.start;
    }

    if (!$dara.isNull(request.userId)) {
      body["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetFullRequestSampleByInstanceId",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetFullRequestSampleByInstanceIdResponse>(await this.callApi(params, req, runtime), new $_model.GetFullRequestSampleByInstanceIdResponse({}));
  }

  /**
   * Queries sample SQL statements in the SQL Explorer data of a database instance by SQL ID. You can query up to 20 sample SQL statements.
   * 
   * @remarks
   * The SQL Explorer feature allows you to check the health status of SQL statements and troubleshoot performance issues. For more information, see [SQL Explorer](https://help.aliyun.com/document_detail/204096.html).
   * - For more information about the database engines that support SQL Explorer, see [SQL Explorer](https://help.aliyun.com/document_detail/204096.html).
   * - If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
   * 
   * @param request - GetFullRequestSampleByInstanceIdRequest
   * @returns GetFullRequestSampleByInstanceIdResponse
   */
  async getFullRequestSampleByInstanceId(request: $_model.GetFullRequestSampleByInstanceIdRequest): Promise<$_model.GetFullRequestSampleByInstanceIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getFullRequestSampleByInstanceIdWithOptions(request, runtime);
  }

  /**
   * Asynchronously collects the full request statistics in the SQL Explorer results of a database instance by SQL ID.
   * 
   * @remarks
   * > GetFullRequestStatResultByInstanceId is an asynchronous operation. After a request is sent, the complete results are not returned immediately. If the value of the isFinish parameter is **false** in the response, wait for 1 second and then send a request again. If the value of the isFinish parameter is **true**, the complete results are returned.
   * The SQL Explorer feature allows you to check the health status of SQL statements and troubleshoot performance issues. For more information, see [SQL Explorer](https://help.aliyun.com/document_detail/204096.html).
   * - For more information about database instances that support this feature, see [Overview of DAS Enterprise Edition](https://help.aliyun.com/document_detail/190912.html).
   * - If you use an SDK to call the API operations of Database Autonomy Service (DAS), you must set the region ID to cn-shanghai.
   * - When you call this operation, the value of the SqlId parameter changes due to the optimization of the SQL template algorithm starting from September 1, 2024. For more information, see [[Notice\\] Optimization of the SQL template algorithm](~~2845725~~).
   * 
   * @param request - GetFullRequestStatResultByInstanceIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFullRequestStatResultByInstanceIdResponse
   */
  async getFullRequestStatResultByInstanceIdWithOptions(request: $_model.GetFullRequestStatResultByInstanceIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetFullRequestStatResultByInstanceIdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.asc)) {
      query["Asc"] = request.asc;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.end)) {
      query["End"] = request.end;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.nodeId)) {
      query["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.originHost)) {
      query["OriginHost"] = request.originHost;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.role)) {
      query["Role"] = request.role;
    }

    if (!$dara.isNull(request.sqlId)) {
      query["SqlId"] = request.sqlId;
    }

    if (!$dara.isNull(request.sqlType)) {
      query["SqlType"] = request.sqlType;
    }

    if (!$dara.isNull(request.start)) {
      query["Start"] = request.start;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetFullRequestStatResultByInstanceId",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetFullRequestStatResultByInstanceIdResponse>(await this.callApi(params, req, runtime), new $_model.GetFullRequestStatResultByInstanceIdResponse({}));
  }

  /**
   * Asynchronously collects the full request statistics in the SQL Explorer results of a database instance by SQL ID.
   * 
   * @remarks
   * > GetFullRequestStatResultByInstanceId is an asynchronous operation. After a request is sent, the complete results are not returned immediately. If the value of the isFinish parameter is **false** in the response, wait for 1 second and then send a request again. If the value of the isFinish parameter is **true**, the complete results are returned.
   * The SQL Explorer feature allows you to check the health status of SQL statements and troubleshoot performance issues. For more information, see [SQL Explorer](https://help.aliyun.com/document_detail/204096.html).
   * - For more information about database instances that support this feature, see [Overview of DAS Enterprise Edition](https://help.aliyun.com/document_detail/190912.html).
   * - If you use an SDK to call the API operations of Database Autonomy Service (DAS), you must set the region ID to cn-shanghai.
   * - When you call this operation, the value of the SqlId parameter changes due to the optimization of the SQL template algorithm starting from September 1, 2024. For more information, see [[Notice\\] Optimization of the SQL template algorithm](~~2845725~~).
   * 
   * @param request - GetFullRequestStatResultByInstanceIdRequest
   * @returns GetFullRequestStatResultByInstanceIdResponse
   */
  async getFullRequestStatResultByInstanceId(request: $_model.GetFullRequestStatResultByInstanceIdRequest): Promise<$_model.GetFullRequestStatResultByInstanceIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getFullRequestStatResultByInstanceIdWithOptions(request, runtime);
  }

  /**
   * Retrieves the details of a DAS Agent automated operations report.
   * 
   * @remarks
   * Enabling the automated operations report feature for DAS Agent allows the system to perform periodic inspections on target instances and generate reports. Currently, only daily reports are supported. This operation is used to query report details.
   * Before you begin:
   * - Activate DAS Agent and ensure that the agent is still within its validity period.
   * - Enable the daily report feature on the DAS Agent configuration page.
   * - When using the Alibaba Cloud SDK, ensure that the version of aliyun-sdk-core is later than 4.3.3. Use the latest version.
   * - Use DAS SDK 1.0.3 or later.
   * - When calling DAS by using the SDK, set the region to cn-shanghai.
   * 
   * @param request - GetInstanceGroupInspectReportDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceGroupInspectReportDetailResponse
   */
  async getInstanceGroupInspectReportDetailWithOptions(request: $_model.GetInstanceGroupInspectReportDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetInstanceGroupInspectReportDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentId)) {
      query["AgentId"] = request.agentId;
    }

    if (!$dara.isNull(request.reportType)) {
      query["ReportType"] = request.reportType;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.reportId)) {
      body["ReportId"] = request.reportId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInstanceGroupInspectReportDetail",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetInstanceGroupInspectReportDetailResponse>(await this.callApi(params, req, runtime), new $_model.GetInstanceGroupInspectReportDetailResponse({}));
  }

  /**
   * Retrieves the details of a DAS Agent automated operations report.
   * 
   * @remarks
   * Enabling the automated operations report feature for DAS Agent allows the system to perform periodic inspections on target instances and generate reports. Currently, only daily reports are supported. This operation is used to query report details.
   * Before you begin:
   * - Activate DAS Agent and ensure that the agent is still within its validity period.
   * - Enable the daily report feature on the DAS Agent configuration page.
   * - When using the Alibaba Cloud SDK, ensure that the version of aliyun-sdk-core is later than 4.3.3. Use the latest version.
   * - Use DAS SDK 1.0.3 or later.
   * - When calling DAS by using the SDK, set the region to cn-shanghai.
   * 
   * @param request - GetInstanceGroupInspectReportDetailRequest
   * @returns GetInstanceGroupInspectReportDetailResponse
   */
  async getInstanceGroupInspectReportDetail(request: $_model.GetInstanceGroupInspectReportDetailRequest): Promise<$_model.GetInstanceGroupInspectReportDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getInstanceGroupInspectReportDetailWithOptions(request, runtime);
  }

  /**
   * Queries the list of O&M reports generated by DAS Agent.
   * 
   * @remarks
   * Enabling the O&M report feature of DAS Agent allows the system to perform periodic inspections on target instances and generate reports. Currently, only daily reports are supported.
   * Before you begin:
   * - Activate DAS Agent and ensure that the Agent is still within its validity period.
   * - Enable the daily report feature on the DAS Agent configuration page.
   * - When using the Alibaba Cloud SDK, ensure that the version of aliyun-sdk-core is later than 4.3.3. Use the latest version.
   * - Use DAS SDK 1.0.3 or later.
   * - When calling DAS by using the SDK, set the region to ap-southeast-1.
   * 
   * @param request - GetInstanceGroupInspectReportListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceGroupInspectReportListResponse
   */
  async getInstanceGroupInspectReportListWithOptions(request: $_model.GetInstanceGroupInspectReportListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetInstanceGroupInspectReportListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentId)) {
      query["AgentId"] = request.agentId;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.reportType)) {
      query["ReportType"] = request.reportType;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInstanceGroupInspectReportList",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetInstanceGroupInspectReportListResponse>(await this.callApi(params, req, runtime), new $_model.GetInstanceGroupInspectReportListResponse({}));
  }

  /**
   * Queries the list of O&M reports generated by DAS Agent.
   * 
   * @remarks
   * Enabling the O&M report feature of DAS Agent allows the system to perform periodic inspections on target instances and generate reports. Currently, only daily reports are supported.
   * Before you begin:
   * - Activate DAS Agent and ensure that the Agent is still within its validity period.
   * - Enable the daily report feature on the DAS Agent configuration page.
   * - When using the Alibaba Cloud SDK, ensure that the version of aliyun-sdk-core is later than 4.3.3. Use the latest version.
   * - Use DAS SDK 1.0.3 or later.
   * - When calling DAS by using the SDK, set the region to ap-southeast-1.
   * 
   * @param request - GetInstanceGroupInspectReportListRequest
   * @returns GetInstanceGroupInspectReportListResponse
   */
  async getInstanceGroupInspectReportList(request: $_model.GetInstanceGroupInspectReportListRequest): Promise<$_model.GetInstanceGroupInspectReportListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getInstanceGroupInspectReportListWithOptions(request, runtime);
  }

  /**
   * Queries the result of an inspection that is performed on a database instance by using the inspection and scoring feature.
   * 
   * @remarks
   * Database Autonomy Service (DAS) provides the inspection and scoring feature. This feature allows you to inspect and score the health status of your instance on a regular basis. This helps you obtain information about the status of your databases. For more information, see [Inspection and scoring](https://help.aliyun.com/document_detail/205659.html).
   * Before you call this operation, take note of the following items:
   * - This operation is applicable only to ApsaraDB RDS for MySQL databases, self-managed MySQL databases hosted on Elastic Compute Service (ECS) instances, self-managed MySQL databases in data centers, ApsaraDB for Redis databases, and PolarDB for MySQL databases.
   * - If you use an Alibaba Cloud SDK, make sure that the aliyun-sdk-core version is later than V4.3.3. We recommend that you use the latest version.
   * - The version of DAS SDK must be V1.0.3 or later.
   * - If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
   * 
   * @param request - GetInstanceInspectionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceInspectionsResponse
   */
  async getInstanceInspectionsWithOptions(request: $_model.GetInstanceInspectionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetInstanceInspectionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.engine)) {
      query["Engine"] = request.engine;
    }

    if (!$dara.isNull(request.instanceArea)) {
      query["InstanceArea"] = request.instanceArea;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.searchMap)) {
      query["SearchMap"] = request.searchMap;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInstanceInspections",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetInstanceInspectionsResponse>(await this.callApi(params, req, runtime), new $_model.GetInstanceInspectionsResponse({}));
  }

  /**
   * Queries the result of an inspection that is performed on a database instance by using the inspection and scoring feature.
   * 
   * @remarks
   * Database Autonomy Service (DAS) provides the inspection and scoring feature. This feature allows you to inspect and score the health status of your instance on a regular basis. This helps you obtain information about the status of your databases. For more information, see [Inspection and scoring](https://help.aliyun.com/document_detail/205659.html).
   * Before you call this operation, take note of the following items:
   * - This operation is applicable only to ApsaraDB RDS for MySQL databases, self-managed MySQL databases hosted on Elastic Compute Service (ECS) instances, self-managed MySQL databases in data centers, ApsaraDB for Redis databases, and PolarDB for MySQL databases.
   * - If you use an Alibaba Cloud SDK, make sure that the aliyun-sdk-core version is later than V4.3.3. We recommend that you use the latest version.
   * - The version of DAS SDK must be V1.0.3 or later.
   * - If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
   * 
   * @param request - GetInstanceInspectionsRequest
   * @returns GetInstanceInspectionsResponse
   */
  async getInstanceInspections(request: $_model.GetInstanceInspectionsRequest): Promise<$_model.GetInstanceInspectionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getInstanceInspectionsWithOptions(request, runtime);
  }

  /**
   * Returns details of all missing indexes for an instance.
   * 
   * @remarks
   * - This operation is applicable only to ApsaraDB RDS for SQL Server instances.
   * - If you use an Alibaba Cloud SDK or Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
   * - If you use an SDK to call the API operations of DAS, you must set the region ID to cn-shanghai.
   * 
   * @param request - GetInstanceMissingIndexListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceMissingIndexListResponse
   */
  async getInstanceMissingIndexListWithOptions(request: $_model.GetInstanceMissingIndexListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetInstanceMissingIndexListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.avgTotalUserCost)) {
      query["AvgTotalUserCost"] = request.avgTotalUserCost;
    }

    if (!$dara.isNull(request.avgUserImpact)) {
      query["AvgUserImpact"] = request.avgUserImpact;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.indexCount)) {
      query["IndexCount"] = request.indexCount;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.objectName)) {
      query["ObjectName"] = request.objectName;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.reservedPages)) {
      query["ReservedPages"] = request.reservedPages;
    }

    if (!$dara.isNull(request.reservedSize)) {
      query["ReservedSize"] = request.reservedSize;
    }

    if (!$dara.isNull(request.rowCount)) {
      query["RowCount"] = request.rowCount;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.uniqueCompiles)) {
      query["UniqueCompiles"] = request.uniqueCompiles;
    }

    if (!$dara.isNull(request.userScans)) {
      query["UserScans"] = request.userScans;
    }

    if (!$dara.isNull(request.userSeeks)) {
      query["UserSeeks"] = request.userSeeks;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInstanceMissingIndexList",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetInstanceMissingIndexListResponse>(await this.callApi(params, req, runtime), new $_model.GetInstanceMissingIndexListResponse({}));
  }

  /**
   * Returns details of all missing indexes for an instance.
   * 
   * @remarks
   * - This operation is applicable only to ApsaraDB RDS for SQL Server instances.
   * - If you use an Alibaba Cloud SDK or Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
   * - If you use an SDK to call the API operations of DAS, you must set the region ID to cn-shanghai.
   * 
   * @param request - GetInstanceMissingIndexListRequest
   * @returns GetInstanceMissingIndexListResponse
   */
  async getInstanceMissingIndexList(request: $_model.GetInstanceMissingIndexListRequest): Promise<$_model.GetInstanceMissingIndexListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getInstanceMissingIndexListWithOptions(request, runtime);
  }

  /**
   * Queries statistics on automatic SQL optimization events within a period of time, such as the total number of optimization events and the maximum improvement.
   * 
   * @remarks
   * Before you call this operation, take note of the following items:
   * - If you use an Alibaba Cloud SDK or a Database Autonomy Service (DAS) SDK to call this API operation, we recommend that you use the latest version of the SDK.
   * - If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
   * - The database engine is ApsaraDB RDS for MySQL or PolarDB for MySQL.
   * 
   * @param request - GetInstanceSqlOptimizeStatisticRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceSqlOptimizeStatisticResponse
   */
  async getInstanceSqlOptimizeStatisticWithOptions(request: $_model.GetInstanceSqlOptimizeStatisticRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetInstanceSqlOptimizeStatisticResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.filterEnable)) {
      query["FilterEnable"] = request.filterEnable;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.nodeId)) {
      query["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.threshold)) {
      query["Threshold"] = request.threshold;
    }

    if (!$dara.isNull(request.useMerging)) {
      query["UseMerging"] = request.useMerging;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInstanceSqlOptimizeStatistic",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetInstanceSqlOptimizeStatisticResponse>(await this.callApi(params, req, runtime), new $_model.GetInstanceSqlOptimizeStatisticResponse({}));
  }

  /**
   * Queries statistics on automatic SQL optimization events within a period of time, such as the total number of optimization events and the maximum improvement.
   * 
   * @remarks
   * Before you call this operation, take note of the following items:
   * - If you use an Alibaba Cloud SDK or a Database Autonomy Service (DAS) SDK to call this API operation, we recommend that you use the latest version of the SDK.
   * - If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
   * - The database engine is ApsaraDB RDS for MySQL or PolarDB for MySQL.
   * 
   * @param request - GetInstanceSqlOptimizeStatisticRequest
   * @returns GetInstanceSqlOptimizeStatisticResponse
   */
  async getInstanceSqlOptimizeStatistic(request: $_model.GetInstanceSqlOptimizeStatisticRequest): Promise<$_model.GetInstanceSqlOptimizeStatisticResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getInstanceSqlOptimizeStatisticWithOptions(request, runtime);
  }

  /**
   * Queries the results of a task that terminates sessions.
   * 
   * @remarks
   * - This operation is applicable only to ApsaraDB RDS for MySQL instances and PolarDB for MySQL clusters.
   * - If you use an Alibaba Cloud SDK or a Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
   * - If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
   * 
   * @param request - GetKillInstanceSessionTaskResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetKillInstanceSessionTaskResultResponse
   */
  async getKillInstanceSessionTaskResultWithOptions(request: $_model.GetKillInstanceSessionTaskResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetKillInstanceSessionTaskResultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.nodeId)) {
      query["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetKillInstanceSessionTaskResult",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetKillInstanceSessionTaskResultResponse>(await this.callApi(params, req, runtime), new $_model.GetKillInstanceSessionTaskResultResponse({}));
  }

  /**
   * Queries the results of a task that terminates sessions.
   * 
   * @remarks
   * - This operation is applicable only to ApsaraDB RDS for MySQL instances and PolarDB for MySQL clusters.
   * - If you use an Alibaba Cloud SDK or a Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
   * - If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
   * 
   * @param request - GetKillInstanceSessionTaskResultRequest
   * @returns GetKillInstanceSessionTaskResultResponse
   */
  async getKillInstanceSessionTaskResult(request: $_model.GetKillInstanceSessionTaskResultRequest): Promise<$_model.GetKillInstanceSessionTaskResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getKillInstanceSessionTaskResultWithOptions(request, runtime);
  }

  /**
   * Queries the current sessions of an ApsaraDB for MongoDB (MongoDB) instance.
   * 
   * @remarks
   * - This operation is applicable only to MongoDB instances.
   * - If you use an Alibaba Cloud SDK or Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
   * - If you use an SDK to call API operations of DAS, you must set the region to cn-shanghai.
   * 
   * @param request - GetMongoDBCurrentOpRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMongoDBCurrentOpResponse
   */
  async getMongoDBCurrentOpWithOptions(request: $_model.GetMongoDBCurrentOpRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetMongoDBCurrentOpResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.filterDoc)) {
      query["FilterDoc"] = request.filterDoc;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.nodeId)) {
      query["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.role)) {
      query["Role"] = request.role;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMongoDBCurrentOp",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMongoDBCurrentOpResponse>(await this.callApi(params, req, runtime), new $_model.GetMongoDBCurrentOpResponse({}));
  }

  /**
   * Queries the current sessions of an ApsaraDB for MongoDB (MongoDB) instance.
   * 
   * @remarks
   * - This operation is applicable only to MongoDB instances.
   * - If you use an Alibaba Cloud SDK or Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
   * - If you use an SDK to call API operations of DAS, you must set the region to cn-shanghai.
   * 
   * @param request - GetMongoDBCurrentOpRequest
   * @returns GetMongoDBCurrentOpResponse
   */
  async getMongoDBCurrentOp(request: $_model.GetMongoDBCurrentOpRequest): Promise<$_model.GetMongoDBCurrentOpResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMongoDBCurrentOpWithOptions(request, runtime);
  }

  /**
   * Asynchronously queries the sessions of an instance and collects statistics on the sessions based on dimensions.
   * 
   * @remarks
   * > GetMySQLAllSessionAsync is an asynchronous operation. After a request is sent, the system does not return complete results but returns a request ID. You need to use the request ID to initiate requests until the value of the **isFinish** field in the returned results is **true**, the complete results are returned. This indicates that to obtain complete data, you must call this operation at least twice.
   * - This operation is applicable only to ApsaraDB RDS for MySQL instances, PolarDB for MySQL clusters, and PolarDB-X 2.0 instances.
   * - If you use an Alibaba Cloud SDK or Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
   * - If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
   * 
   * @param request - GetMySQLAllSessionAsyncRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMySQLAllSessionAsyncResponse
   */
  async getMySQLAllSessionAsyncWithOptions(request: $_model.GetMySQLAllSessionAsyncRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetMySQLAllSessionAsyncResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.nodeId)) {
      query["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.resultId)) {
      query["ResultId"] = request.resultId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMySQLAllSessionAsync",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMySQLAllSessionAsyncResponse>(await this.callApi(params, req, runtime), new $_model.GetMySQLAllSessionAsyncResponse({}));
  }

  /**
   * Asynchronously queries the sessions of an instance and collects statistics on the sessions based on dimensions.
   * 
   * @remarks
   * > GetMySQLAllSessionAsync is an asynchronous operation. After a request is sent, the system does not return complete results but returns a request ID. You need to use the request ID to initiate requests until the value of the **isFinish** field in the returned results is **true**, the complete results are returned. This indicates that to obtain complete data, you must call this operation at least twice.
   * - This operation is applicable only to ApsaraDB RDS for MySQL instances, PolarDB for MySQL clusters, and PolarDB-X 2.0 instances.
   * - If you use an Alibaba Cloud SDK or Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
   * - If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
   * 
   * @param request - GetMySQLAllSessionAsyncRequest
   * @returns GetMySQLAllSessionAsyncResponse
   */
  async getMySQLAllSessionAsync(request: $_model.GetMySQLAllSessionAsyncRequest): Promise<$_model.GetMySQLAllSessionAsyncResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMySQLAllSessionAsyncWithOptions(request, runtime);
  }

  /**
   * Queries access frequency statistics and hot data on partitions of a PolarDB-X 2.0 instance.
   * 
   * @remarks
   * We recommend that you do not call this operation. The data is returned in a special format and is complex to parse. You can use the [heatmap](https://help.aliyun.com/document_detail/470302.html) feature of Database Autonomy Service (DAS) to query the data.
   * 
   * @param request - GetPartitionsHeatmapRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPartitionsHeatmapResponse
   */
  async getPartitionsHeatmapWithOptions(request: $_model.GetPartitionsHeatmapRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetPartitionsHeatmapResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.consoleContext)) {
      query["ConsoleContext"] = request.consoleContext;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.timeRange)) {
      query["TimeRange"] = request.timeRange;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPartitionsHeatmap",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPartitionsHeatmapResponse>(await this.callApi(params, req, runtime), new $_model.GetPartitionsHeatmapResponse({}));
  }

  /**
   * Queries access frequency statistics and hot data on partitions of a PolarDB-X 2.0 instance.
   * 
   * @remarks
   * We recommend that you do not call this operation. The data is returned in a special format and is complex to parse. You can use the [heatmap](https://help.aliyun.com/document_detail/470302.html) feature of Database Autonomy Service (DAS) to query the data.
   * 
   * @param request - GetPartitionsHeatmapRequest
   * @returns GetPartitionsHeatmapResponse
   */
  async getPartitionsHeatmap(request: $_model.GetPartitionsHeatmapRequest): Promise<$_model.GetPartitionsHeatmapResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPartitionsHeatmapWithOptions(request, runtime);
  }

  /**
   * Queries the trend of a metric for the new version of the performance insight feature of a database instance.
   * 
   * @remarks
   * Before you call this operation, take note of the following items:
   * - If you use an Alibaba Cloud SDK or a Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
   * - If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
   * - An ApsaraDB RDS for MySQL instance or a PolarDB for MySQL cluster is connected to DAS.
   * - The new version of the performance insight feature is enabled for the database instance. For more information, see [Performance insight (new version)](https://help.aliyun.com/document_detail/469117.html).
   * 
   * @param request - GetPfsMetricTrendsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPfsMetricTrendsResponse
   */
  async getPfsMetricTrendsWithOptions(request: $_model.GetPfsMetricTrendsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetPfsMetricTrendsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.metric)) {
      body["Metric"] = request.metric;
    }

    if (!$dara.isNull(request.nodeId)) {
      body["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPfsMetricTrends",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPfsMetricTrendsResponse>(await this.callApi(params, req, runtime), new $_model.GetPfsMetricTrendsResponse({}));
  }

  /**
   * Queries the trend of a metric for the new version of the performance insight feature of a database instance.
   * 
   * @remarks
   * Before you call this operation, take note of the following items:
   * - If you use an Alibaba Cloud SDK or a Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
   * - If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
   * - An ApsaraDB RDS for MySQL instance or a PolarDB for MySQL cluster is connected to DAS.
   * - The new version of the performance insight feature is enabled for the database instance. For more information, see [Performance insight (new version)](https://help.aliyun.com/document_detail/469117.html).
   * 
   * @param request - GetPfsMetricTrendsRequest
   * @returns GetPfsMetricTrendsResponse
   */
  async getPfsMetricTrends(request: $_model.GetPfsMetricTrendsRequest): Promise<$_model.GetPfsMetricTrendsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPfsMetricTrendsWithOptions(request, runtime);
  }

  /**
   * Queries the SQL sample data for the new version of the performance insight feature of a database instance.
   * 
   * @remarks
   * Before you call this operation, take note of the following items:
   * - If you use an Alibaba Cloud SDK or a Database Autonomy Service (DAS) SDK to call this API operation, we recommend that you use the latest version of the SDK.
   * - If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
   * - An ApsaraDB RDS for MySQL instance or a PolarDB for MySQL cluster is connected to DAS.
   * - The new version of the performance insight feature is enabled for the database instance. For more information, see [Performance insight (new version)](https://help.aliyun.com/document_detail/469117.html).
   * 
   * @param request - GetPfsSqlSampleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPfsSqlSampleResponse
   */
  async getPfsSqlSampleWithOptions(request: $_model.GetPfsSqlSampleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetPfsSqlSampleResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.nodeId)) {
      body["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.sqlId)) {
      body["SqlId"] = request.sqlId;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPfsSqlSample",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPfsSqlSampleResponse>(await this.callApi(params, req, runtime), new $_model.GetPfsSqlSampleResponse({}));
  }

  /**
   * Queries the SQL sample data for the new version of the performance insight feature of a database instance.
   * 
   * @remarks
   * Before you call this operation, take note of the following items:
   * - If you use an Alibaba Cloud SDK or a Database Autonomy Service (DAS) SDK to call this API operation, we recommend that you use the latest version of the SDK.
   * - If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
   * - An ApsaraDB RDS for MySQL instance or a PolarDB for MySQL cluster is connected to DAS.
   * - The new version of the performance insight feature is enabled for the database instance. For more information, see [Performance insight (new version)](https://help.aliyun.com/document_detail/469117.html).
   * 
   * @param request - GetPfsSqlSampleRequest
   * @returns GetPfsSqlSampleResponse
   */
  async getPfsSqlSample(request: $_model.GetPfsSqlSampleRequest): Promise<$_model.GetPfsSqlSampleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPfsSqlSampleWithOptions(request, runtime);
  }

  /**
   * Call the GetPfsSqlSummaries API to query all request data using the SQL ID dimension in Performance Insight (New Version) for a database instance.
   * 
   * @remarks
   * Prerequisites for using this API:
   * - Use the latest version of the Alibaba Cloud or DAS SDK.
   * - When calling the DAS service using the SDK, specify the region as cn-shanghai.
   * - The target database instance is RDS MySQL or PolarDB MySQL.
   * - The target database instance has Performance Insight (New Version) enabled. For more information, see [Performance Insight (New Version)](https://help.aliyun.com/document_detail/469117.html).
   * 
   * @param request - GetPfsSqlSummariesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPfsSqlSummariesResponse
   */
  async getPfsSqlSummariesWithOptions(request: $_model.GetPfsSqlSummariesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetPfsSqlSummariesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.asc)) {
      body["Asc"] = request.asc;
    }

    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.keywords)) {
      body["Keywords"] = request.keywords;
    }

    if (!$dara.isNull(request.nodeId)) {
      body["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.orderBy)) {
      body["OrderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.pageNo)) {
      body["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.sqlId)) {
      body["SqlId"] = request.sqlId;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPfsSqlSummaries",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPfsSqlSummariesResponse>(await this.callApi(params, req, runtime), new $_model.GetPfsSqlSummariesResponse({}));
  }

  /**
   * Call the GetPfsSqlSummaries API to query all request data using the SQL ID dimension in Performance Insight (New Version) for a database instance.
   * 
   * @remarks
   * Prerequisites for using this API:
   * - Use the latest version of the Alibaba Cloud or DAS SDK.
   * - When calling the DAS service using the SDK, specify the region as cn-shanghai.
   * - The target database instance is RDS MySQL or PolarDB MySQL.
   * - The target database instance has Performance Insight (New Version) enabled. For more information, see [Performance Insight (New Version)](https://help.aliyun.com/document_detail/469117.html).
   * 
   * @param request - GetPfsSqlSummariesRequest
   * @returns GetPfsSqlSummariesResponse
   */
  async getPfsSqlSummaries(request: $_model.GetPfsSqlSummariesRequest): Promise<$_model.GetPfsSqlSummariesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPfsSqlSummariesWithOptions(request, runtime);
  }

  /**
   * Returns SQL template statistics from query governance data.
   * 
   * @remarks
   * - If you use an Alibaba Cloud SDK, make sure that the aliyun-sdk-core version is later than V2.1.8. We recommend that you use the latest version.
   * - The version of your Database Autonomy Service (DAS) SDK must be V2.1.8 or later.
   * - If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
   * - This operation supports the following database engines:
   *   - ApsaraDB RDS for MySQL
   *   - PolarDB for MySQL
   *   - ApsaraDB RDS for PostgreSQL
   * 
   * @param request - GetQueryOptimizeDataStatsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetQueryOptimizeDataStatsResponse
   */
  async getQueryOptimizeDataStatsWithOptions(request: $_model.GetQueryOptimizeDataStatsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetQueryOptimizeDataStatsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetQueryOptimizeDataStats",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetQueryOptimizeDataStatsResponse>(await this.callApi(params, req, runtime), new $_model.GetQueryOptimizeDataStatsResponse({}));
  }

  /**
   * Returns SQL template statistics from query governance data.
   * 
   * @remarks
   * - If you use an Alibaba Cloud SDK, make sure that the aliyun-sdk-core version is later than V2.1.8. We recommend that you use the latest version.
   * - The version of your Database Autonomy Service (DAS) SDK must be V2.1.8 or later.
   * - If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
   * - This operation supports the following database engines:
   *   - ApsaraDB RDS for MySQL
   *   - PolarDB for MySQL
   *   - ApsaraDB RDS for PostgreSQL
   * 
   * @param request - GetQueryOptimizeDataStatsRequest
   * @returns GetQueryOptimizeDataStatsResponse
   */
  async getQueryOptimizeDataStats(request: $_model.GetQueryOptimizeDataStatsRequest): Promise<$_model.GetQueryOptimizeDataStatsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getQueryOptimizeDataStatsWithOptions(request, runtime);
  }

  /**
   * Returns the best- and worst-performing instances based on query governance data.
   * 
   * @remarks
   * - If you use an Alibaba Cloud SDK, make sure that the aliyun-sdk-core version is later than V2.1.8. We recommend that you use the latest version.
   * - The version of your Database Autonomy Service (DAS) SDK must be V2.1.8 or later.
   * - If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
   * - This operation supports the following database engines:
   *   - ApsaraDB RDS for MySQL
   *   - PolarDB for MySQL
   *   - ApsaraDB RDS for PostgreSQL
   * 
   * @param request - GetQueryOptimizeDataTopRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetQueryOptimizeDataTopResponse
   */
  async getQueryOptimizeDataTopWithOptions(request: $_model.GetQueryOptimizeDataTopRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetQueryOptimizeDataTopResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetQueryOptimizeDataTop",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetQueryOptimizeDataTopResponse>(await this.callApi(params, req, runtime), new $_model.GetQueryOptimizeDataTopResponse({}));
  }

  /**
   * Returns the best- and worst-performing instances based on query governance data.
   * 
   * @remarks
   * - If you use an Alibaba Cloud SDK, make sure that the aliyun-sdk-core version is later than V2.1.8. We recommend that you use the latest version.
   * - The version of your Database Autonomy Service (DAS) SDK must be V2.1.8 or later.
   * - If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
   * - This operation supports the following database engines:
   *   - ApsaraDB RDS for MySQL
   *   - PolarDB for MySQL
   *   - ApsaraDB RDS for PostgreSQL
   * 
   * @param request - GetQueryOptimizeDataTopRequest
   * @returns GetQueryOptimizeDataTopResponse
   */
  async getQueryOptimizeDataTop(request: $_model.GetQueryOptimizeDataTopRequest): Promise<$_model.GetQueryOptimizeDataTopResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getQueryOptimizeDataTopWithOptions(request, runtime);
  }

  /**
   * Queries query governance trend data.
   * 
   * @remarks
   * - If you use Alibaba Cloud SDK, make sure that the aliyun-sdk-core version is later than V2.1.8. We recommend that you use the latest version.
   * - The version of your Database Autonomy Service (DAS) SDK must be V2.1.8 or later.
   * - If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
   * - This operation supports the following database engines:
   *   - ApsaraDB RDS for MySQL
   *   - PolarDB for MySQL
   *   - ApsaraDB RDS for PostgreSQL
   * 
   * @param request - GetQueryOptimizeDataTrendRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetQueryOptimizeDataTrendResponse
   */
  async getQueryOptimizeDataTrendWithOptions(request: $_model.GetQueryOptimizeDataTrendRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetQueryOptimizeDataTrendResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetQueryOptimizeDataTrend",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetQueryOptimizeDataTrendResponse>(await this.callApi(params, req, runtime), new $_model.GetQueryOptimizeDataTrendResponse({}));
  }

  /**
   * Queries query governance trend data.
   * 
   * @remarks
   * - If you use Alibaba Cloud SDK, make sure that the aliyun-sdk-core version is later than V2.1.8. We recommend that you use the latest version.
   * - The version of your Database Autonomy Service (DAS) SDK must be V2.1.8 or later.
   * - If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
   * - This operation supports the following database engines:
   *   - ApsaraDB RDS for MySQL
   *   - PolarDB for MySQL
   *   - ApsaraDB RDS for PostgreSQL
   * 
   * @param request - GetQueryOptimizeDataTrendRequest
   * @returns GetQueryOptimizeDataTrendResponse
   */
  async getQueryOptimizeDataTrend(request: $_model.GetQueryOptimizeDataTrendRequest): Promise<$_model.GetQueryOptimizeDataTrendResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getQueryOptimizeDataTrendWithOptions(request, runtime);
  }

  /**
   * Queries the failed SQL statements under a SQL template.
   * 
   * @remarks
   * - If you use Alibaba Cloud SDK, make sure that the aliyun-sdk-core version is later than V2.1.8. We recommend that you use the latest version.
   * - The version of your Database Autonomy Service (DAS) SDK must be V2.1.8 or later.
   * - If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
   * - This operation supports the following database engines:
   *   - ApsaraDB RDS for MySQL
   *   - PolarDB for MySQL
   *   - ApsaraDB RDS for PostgreSQL
   * 
   * @param request - GetQueryOptimizeExecErrorSampleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetQueryOptimizeExecErrorSampleResponse
   */
  async getQueryOptimizeExecErrorSampleWithOptions(request: $_model.GetQueryOptimizeExecErrorSampleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetQueryOptimizeExecErrorSampleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.engine)) {
      query["Engine"] = request.engine;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.sqlId)) {
      query["SqlId"] = request.sqlId;
    }

    if (!$dara.isNull(request.time)) {
      query["Time"] = request.time;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetQueryOptimizeExecErrorSample",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetQueryOptimizeExecErrorSampleResponse>(await this.callApi(params, req, runtime), new $_model.GetQueryOptimizeExecErrorSampleResponse({}));
  }

  /**
   * Queries the failed SQL statements under a SQL template.
   * 
   * @remarks
   * - If you use Alibaba Cloud SDK, make sure that the aliyun-sdk-core version is later than V2.1.8. We recommend that you use the latest version.
   * - The version of your Database Autonomy Service (DAS) SDK must be V2.1.8 or later.
   * - If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
   * - This operation supports the following database engines:
   *   - ApsaraDB RDS for MySQL
   *   - PolarDB for MySQL
   *   - ApsaraDB RDS for PostgreSQL
   * 
   * @param request - GetQueryOptimizeExecErrorSampleRequest
   * @returns GetQueryOptimizeExecErrorSampleResponse
   */
  async getQueryOptimizeExecErrorSample(request: $_model.GetQueryOptimizeExecErrorSampleRequest): Promise<$_model.GetQueryOptimizeExecErrorSampleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getQueryOptimizeExecErrorSampleWithOptions(request, runtime);
  }

  /**
   * Queries SQL templates that failed to be executed.
   * 
   * @remarks
   * - If you use Alibaba Cloud SDK or Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
   * - If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
   * - This operation supports the following database engines:
   *   - ApsaraDB RDS for MySQL
   *   - PolarDB for MySQL
   *   - ApsaraDB RDS for PostgreSQL
   * 
   * @param request - GetQueryOptimizeExecErrorStatsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetQueryOptimizeExecErrorStatsResponse
   */
  async getQueryOptimizeExecErrorStatsWithOptions(request: $_model.GetQueryOptimizeExecErrorStatsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetQueryOptimizeExecErrorStatsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetQueryOptimizeExecErrorStats",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetQueryOptimizeExecErrorStatsResponse>(await this.callApi(params, req, runtime), new $_model.GetQueryOptimizeExecErrorStatsResponse({}));
  }

  /**
   * Queries SQL templates that failed to be executed.
   * 
   * @remarks
   * - If you use Alibaba Cloud SDK or Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
   * - If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
   * - This operation supports the following database engines:
   *   - ApsaraDB RDS for MySQL
   *   - PolarDB for MySQL
   *   - ApsaraDB RDS for PostgreSQL
   * 
   * @param request - GetQueryOptimizeExecErrorStatsRequest
   * @returns GetQueryOptimizeExecErrorStatsResponse
   */
  async getQueryOptimizeExecErrorStats(request: $_model.GetQueryOptimizeExecErrorStatsRequest): Promise<$_model.GetQueryOptimizeExecErrorStatsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getQueryOptimizeExecErrorStatsWithOptions(request, runtime);
  }

  /**
   * Queries the tags added by the query governance feature to specified database instances.
   * 
   * @remarks
   * - If you use Alibaba Cloud SDK, make sure that the aliyun-sdk-core version is later than V2.1.8. We recommend that you use the latest version.
   * - The version of your Database Autonomy Service (DAS) SDK must be V2.1.8 or later.
   * - If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
   * - This operation supports the following database engines:
   *   - ApsaraDB RDS for MySQL
   *   - PolarDB for MySQL
   *   - ApsaraDB RDS for PostgreSQL
   * 
   * @param request - GetQueryOptimizeRuleListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetQueryOptimizeRuleListResponse
   */
  async getQueryOptimizeRuleListWithOptions(request: $_model.GetQueryOptimizeRuleListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetQueryOptimizeRuleListResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetQueryOptimizeRuleList",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetQueryOptimizeRuleListResponse>(await this.callApi(params, req, runtime), new $_model.GetQueryOptimizeRuleListResponse({}));
  }

  /**
   * Queries the tags added by the query governance feature to specified database instances.
   * 
   * @remarks
   * - If you use Alibaba Cloud SDK, make sure that the aliyun-sdk-core version is later than V2.1.8. We recommend that you use the latest version.
   * - The version of your Database Autonomy Service (DAS) SDK must be V2.1.8 or later.
   * - If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
   * - This operation supports the following database engines:
   *   - ApsaraDB RDS for MySQL
   *   - PolarDB for MySQL
   *   - ApsaraDB RDS for PostgreSQL
   * 
   * @param request - GetQueryOptimizeRuleListRequest
   * @returns GetQueryOptimizeRuleListResponse
   */
  async getQueryOptimizeRuleList(request: $_model.GetQueryOptimizeRuleListRequest): Promise<$_model.GetQueryOptimizeRuleListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getQueryOptimizeRuleListWithOptions(request, runtime);
  }

  /**
   * Queries a share URL provided by the query governance feature.
   * 
   * @remarks
   * - If you use Alibaba Cloud SDK or Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
   * - If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
   * - This operation supports the following database engines:
   *   - ApsaraDB RDS for MySQL
   *   - PolarDB for MySQL
   *   - ApsaraDB RDS for PostgreSQL
   * 
   * @param request - GetQueryOptimizeShareUrlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetQueryOptimizeShareUrlResponse
   */
  async getQueryOptimizeShareUrlWithOptions(request: $_model.GetQueryOptimizeShareUrlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetQueryOptimizeShareUrlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.asc)) {
      query["Asc"] = request.asc;
    }

    if (!$dara.isNull(request.dbNames)) {
      query["DbNames"] = request.dbNames;
    }

    if (!$dara.isNull(request.engine)) {
      query["Engine"] = request.engine;
    }

    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.keywords)) {
      query["Keywords"] = request.keywords;
    }

    if (!$dara.isNull(request.logicalOperator)) {
      query["LogicalOperator"] = request.logicalOperator;
    }

    if (!$dara.isNull(request.onlyOptimizedSql)) {
      query["OnlyOptimizedSql"] = request.onlyOptimizedSql;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    if (!$dara.isNull(request.rules)) {
      query["Rules"] = request.rules;
    }

    if (!$dara.isNull(request.sqlIds)) {
      query["SqlIds"] = request.sqlIds;
    }

    if (!$dara.isNull(request.tagNames)) {
      query["TagNames"] = request.tagNames;
    }

    if (!$dara.isNull(request.time)) {
      query["Time"] = request.time;
    }

    if (!$dara.isNull(request.user)) {
      query["User"] = request.user;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetQueryOptimizeShareUrl",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetQueryOptimizeShareUrlResponse>(await this.callApi(params, req, runtime), new $_model.GetQueryOptimizeShareUrlResponse({}));
  }

  /**
   * Queries a share URL provided by the query governance feature.
   * 
   * @remarks
   * - If you use Alibaba Cloud SDK or Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
   * - If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
   * - This operation supports the following database engines:
   *   - ApsaraDB RDS for MySQL
   *   - PolarDB for MySQL
   *   - ApsaraDB RDS for PostgreSQL
   * 
   * @param request - GetQueryOptimizeShareUrlRequest
   * @returns GetQueryOptimizeShareUrlResponse
   */
  async getQueryOptimizeShareUrl(request: $_model.GetQueryOptimizeShareUrlRequest): Promise<$_model.GetQueryOptimizeShareUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getQueryOptimizeShareUrlWithOptions(request, runtime);
  }

  /**
   * Queries suggestions provided by query governance for optimizing an SQL template.
   * 
   * @remarks
   * - If you use an Alibaba Cloud SDK or a Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
   * - If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
   * - This operation supports the following database engines:
   *   - ApsaraDB RDS for MySQL
   *   - PolarDB for MySQL
   *   - ApsaraDB RDS for PostgreSQL
   * 
   * @param request - GetQueryOptimizeSolutionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetQueryOptimizeSolutionResponse
   */
  async getQueryOptimizeSolutionWithOptions(request: $_model.GetQueryOptimizeSolutionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetQueryOptimizeSolutionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.engine)) {
      query["Engine"] = request.engine;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ruleIds)) {
      query["RuleIds"] = request.ruleIds;
    }

    if (!$dara.isNull(request.sqlId)) {
      query["SqlId"] = request.sqlId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetQueryOptimizeSolution",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetQueryOptimizeSolutionResponse>(await this.callApi(params, req, runtime), new $_model.GetQueryOptimizeSolutionResponse({}));
  }

  /**
   * Queries suggestions provided by query governance for optimizing an SQL template.
   * 
   * @remarks
   * - If you use an Alibaba Cloud SDK or a Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
   * - If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
   * - This operation supports the following database engines:
   *   - ApsaraDB RDS for MySQL
   *   - PolarDB for MySQL
   *   - ApsaraDB RDS for PostgreSQL
   * 
   * @param request - GetQueryOptimizeSolutionRequest
   * @returns GetQueryOptimizeSolutionResponse
   */
  async getQueryOptimizeSolution(request: $_model.GetQueryOptimizeSolutionRequest): Promise<$_model.GetQueryOptimizeSolutionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getQueryOptimizeSolutionWithOptions(request, runtime);
  }

  /**
   * Queries the tags of a specified SQL statement by calling the GetQueryOptimizeTag operation.
   * 
   * @remarks
   * - When using the Alibaba Cloud or DAS SDK, use the latest version.
   * - When calling DAS by using the SDK, set the region to cn-shanghai.
   * - This operation supports the following database engines:
   *     - RDS MySQL
   *     - PolarDB for MySQL
   *     - RDS PostgreSQL
   * 
   * @param request - GetQueryOptimizeTagRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetQueryOptimizeTagResponse
   */
  async getQueryOptimizeTagWithOptions(request: $_model.GetQueryOptimizeTagRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetQueryOptimizeTagResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.engine)) {
      query["Engine"] = request.engine;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.sqlId)) {
      query["SqlId"] = request.sqlId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetQueryOptimizeTag",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetQueryOptimizeTagResponse>(await this.callApi(params, req, runtime), new $_model.GetQueryOptimizeTagResponse({}));
  }

  /**
   * Queries the tags of a specified SQL statement by calling the GetQueryOptimizeTag operation.
   * 
   * @remarks
   * - When using the Alibaba Cloud or DAS SDK, use the latest version.
   * - When calling DAS by using the SDK, set the region to cn-shanghai.
   * - This operation supports the following database engines:
   *     - RDS MySQL
   *     - PolarDB for MySQL
   *     - RDS PostgreSQL
   * 
   * @param request - GetQueryOptimizeTagRequest
   * @returns GetQueryOptimizeTagResponse
   */
  async getQueryOptimizeTag(request: $_model.GetQueryOptimizeTagRequest): Promise<$_model.GetQueryOptimizeTagResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getQueryOptimizeTagWithOptions(request, runtime);
  }

  /**
   * Queries the current session on an ApsaraDB for Redis instance.
   * 
   * @remarks
   * - This operation is applicable only to ApsaraDB for Redis instances.
   * - If you use an SDK to call operations of Database Autonomy Service (DAS), you must set the region ID to cn-shanghai.
   * > This operation cannot be used to query sessions generated in direct connection mode on ApsaraDB for Redis cluster instances.
   * 
   * @param request - GetRedisAllSessionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRedisAllSessionResponse
   */
  async getRedisAllSessionWithOptions(request: $_model.GetRedisAllSessionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetRedisAllSessionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.consoleContext)) {
      query["ConsoleContext"] = request.consoleContext;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRedisAllSession",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRedisAllSessionResponse>(await this.callApi(params, req, runtime), new $_model.GetRedisAllSessionResponse({}));
  }

  /**
   * Queries the current session on an ApsaraDB for Redis instance.
   * 
   * @remarks
   * - This operation is applicable only to ApsaraDB for Redis instances.
   * - If you use an SDK to call operations of Database Autonomy Service (DAS), you must set the region ID to cn-shanghai.
   * > This operation cannot be used to query sessions generated in direct connection mode on ApsaraDB for Redis cluster instances.
   * 
   * @param request - GetRedisAllSessionRequest
   * @returns GetRedisAllSessionResponse
   */
  async getRedisAllSession(request: $_model.GetRedisAllSessionRequest): Promise<$_model.GetRedisAllSessionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRedisAllSessionWithOptions(request, runtime);
  }

  /**
   * Queries SQL diagnostics records by pages.
   * 
   * @remarks
   * Before you call this operation, take note of the following items:
   * - If you use an SDK to call API operations of Database Autonomy Service (DAS), you must set the region ID to cn-shanghai.
   * - This operation supports the following database engines:
   *   - ApsaraDB RDS for MySQL
   *   - ApsaraDB RDS for PostgreSQL
   *   - ApsaraDB RDS for SQL Server
   *   - PolarDB for MySQL
   *   - PolarDB for PostgreSQL (Compatible with Oracle)
   *   - ApsaraDB for MongoDB
   * > The minor engine version of the Apsara RDS for PostgreSQL instance must be 20220130 or later. For more information about how to check and update the minor engine version of an ApsaraDB RDS for PostgreSQL instance, see [Update the minor engine version of an ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/146895.html).
   * 
   * @param request - GetRequestDiagnosisPageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRequestDiagnosisPageResponse
   */
  async getRequestDiagnosisPageWithOptions(request: $_model.GetRequestDiagnosisPageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetRequestDiagnosisPageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.nodeId)) {
      query["NodeId"] = request.nodeId;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRequestDiagnosisPage",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRequestDiagnosisPageResponse>(await this.callApi(params, req, runtime), new $_model.GetRequestDiagnosisPageResponse({}));
  }

  /**
   * Queries SQL diagnostics records by pages.
   * 
   * @remarks
   * Before you call this operation, take note of the following items:
   * - If you use an SDK to call API operations of Database Autonomy Service (DAS), you must set the region ID to cn-shanghai.
   * - This operation supports the following database engines:
   *   - ApsaraDB RDS for MySQL
   *   - ApsaraDB RDS for PostgreSQL
   *   - ApsaraDB RDS for SQL Server
   *   - PolarDB for MySQL
   *   - PolarDB for PostgreSQL (Compatible with Oracle)
   *   - ApsaraDB for MongoDB
   * > The minor engine version of the Apsara RDS for PostgreSQL instance must be 20220130 or later. For more information about how to check and update the minor engine version of an ApsaraDB RDS for PostgreSQL instance, see [Update the minor engine version of an ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/146895.html).
   * 
   * @param request - GetRequestDiagnosisPageRequest
   * @returns GetRequestDiagnosisPageResponse
   */
  async getRequestDiagnosisPage(request: $_model.GetRequestDiagnosisPageRequest): Promise<$_model.GetRequestDiagnosisPageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRequestDiagnosisPageWithOptions(request, runtime);
  }

  /**
   * Call GetRequestDiagnosisResult to retrieve the SQL diagnosis results.
   * 
   * @remarks
   * This API has the following prerequisites:
   * - When you use an SDK to call the DAS service, you must set the region to cn-shanghai.
   * - This API does not support querying diagnosis results for automatic SQL optimization.
   * - This API supports the following database engines:
   *   - RDS MySQL
   *   - RDS PostgreSQL
   *   - RDS SQL Server
   *   - PolarDB for MySQL
   *   - PolarDB for PostgreSQL (Oracle-Compatible)
   *   - ApsaraDB for MongoDB
   * > RDS PostgreSQL instances require minor kernel version 20220130 or later. To view and upgrade the minor kernel version, see [Upgrade the minor kernel version](https://help.aliyun.com/document_detail/146895.html).
   * 
   * @param request - GetRequestDiagnosisResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRequestDiagnosisResultResponse
   */
  async getRequestDiagnosisResultWithOptions(request: $_model.GetRequestDiagnosisResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetRequestDiagnosisResultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.messageId)) {
      query["MessageId"] = request.messageId;
    }

    if (!$dara.isNull(request.nodeId)) {
      query["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.source)) {
      query["Source"] = request.source;
    }

    if (!$dara.isNull(request.sqlId)) {
      query["SqlId"] = request.sqlId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRequestDiagnosisResult",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRequestDiagnosisResultResponse>(await this.callApi(params, req, runtime), new $_model.GetRequestDiagnosisResultResponse({}));
  }

  /**
   * Call GetRequestDiagnosisResult to retrieve the SQL diagnosis results.
   * 
   * @remarks
   * This API has the following prerequisites:
   * - When you use an SDK to call the DAS service, you must set the region to cn-shanghai.
   * - This API does not support querying diagnosis results for automatic SQL optimization.
   * - This API supports the following database engines:
   *   - RDS MySQL
   *   - RDS PostgreSQL
   *   - RDS SQL Server
   *   - PolarDB for MySQL
   *   - PolarDB for PostgreSQL (Oracle-Compatible)
   *   - ApsaraDB for MongoDB
   * > RDS PostgreSQL instances require minor kernel version 20220130 or later. To view and upgrade the minor kernel version, see [Upgrade the minor kernel version](https://help.aliyun.com/document_detail/146895.html).
   * 
   * @param request - GetRequestDiagnosisResultRequest
   * @returns GetRequestDiagnosisResultResponse
   */
  async getRequestDiagnosisResult(request: $_model.GetRequestDiagnosisResultRequest): Promise<$_model.GetRequestDiagnosisResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRequestDiagnosisResultWithOptions(request, runtime);
  }

  /**
   * Queries the throttling rules that are in effect.
   * 
   * @remarks
   * This operation supports the following database engines:
   * - ApsaraDB RDS for MySQL
   * - PolarDB for MySQL
   * 
   * @param request - GetRunningSqlConcurrencyControlRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRunningSqlConcurrencyControlRulesResponse
   */
  async getRunningSqlConcurrencyControlRulesWithOptions(request: $_model.GetRunningSqlConcurrencyControlRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetRunningSqlConcurrencyControlRulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.consoleContext)) {
      query["ConsoleContext"] = request.consoleContext;
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
      action: "GetRunningSqlConcurrencyControlRules",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRunningSqlConcurrencyControlRulesResponse>(await this.callApi(params, req, runtime), new $_model.GetRunningSqlConcurrencyControlRulesResponse({}));
  }

  /**
   * Queries the throttling rules that are in effect.
   * 
   * @remarks
   * This operation supports the following database engines:
   * - ApsaraDB RDS for MySQL
   * - PolarDB for MySQL
   * 
   * @param request - GetRunningSqlConcurrencyControlRulesRequest
   * @returns GetRunningSqlConcurrencyControlRulesResponse
   */
  async getRunningSqlConcurrencyControlRules(request: $_model.GetRunningSqlConcurrencyControlRulesRequest): Promise<$_model.GetRunningSqlConcurrencyControlRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRunningSqlConcurrencyControlRulesWithOptions(request, runtime);
  }

  /**
   * Generates a throttling keyword string based on an SQL statement.
   * 
   * @remarks
   * This operation supports the following database engines:
   * - ApsaraDB RDS for MySQL
   * - PolarDB for MySQL
   * 
   * @param request - GetSqlConcurrencyControlKeywordsFromSqlTextRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSqlConcurrencyControlKeywordsFromSqlTextResponse
   */
  async getSqlConcurrencyControlKeywordsFromSqlTextWithOptions(request: $_model.GetSqlConcurrencyControlKeywordsFromSqlTextRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSqlConcurrencyControlKeywordsFromSqlTextResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.consoleContext)) {
      query["ConsoleContext"] = request.consoleContext;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.sqlText)) {
      query["SqlText"] = request.sqlText;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSqlConcurrencyControlKeywordsFromSqlText",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSqlConcurrencyControlKeywordsFromSqlTextResponse>(await this.callApi(params, req, runtime), new $_model.GetSqlConcurrencyControlKeywordsFromSqlTextResponse({}));
  }

  /**
   * Generates a throttling keyword string based on an SQL statement.
   * 
   * @remarks
   * This operation supports the following database engines:
   * - ApsaraDB RDS for MySQL
   * - PolarDB for MySQL
   * 
   * @param request - GetSqlConcurrencyControlKeywordsFromSqlTextRequest
   * @returns GetSqlConcurrencyControlKeywordsFromSqlTextResponse
   */
  async getSqlConcurrencyControlKeywordsFromSqlText(request: $_model.GetSqlConcurrencyControlKeywordsFromSqlTextRequest): Promise<$_model.GetSqlConcurrencyControlKeywordsFromSqlTextResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSqlConcurrencyControlKeywordsFromSqlTextWithOptions(request, runtime);
  }

  /**
   * Queries the throttling rules that are being executed or have been triggered.
   * 
   * @remarks
   * This operation supports the following database engines:
   * - ApsaraDB RDS for MySQL
   * - PolarDB for MySQL
   * 
   * @param request - GetSqlConcurrencyControlRulesHistoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSqlConcurrencyControlRulesHistoryResponse
   */
  async getSqlConcurrencyControlRulesHistoryWithOptions(request: $_model.GetSqlConcurrencyControlRulesHistoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSqlConcurrencyControlRulesHistoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.consoleContext)) {
      query["ConsoleContext"] = request.consoleContext;
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
      action: "GetSqlConcurrencyControlRulesHistory",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSqlConcurrencyControlRulesHistoryResponse>(await this.callApi(params, req, runtime), new $_model.GetSqlConcurrencyControlRulesHistoryResponse({}));
  }

  /**
   * Queries the throttling rules that are being executed or have been triggered.
   * 
   * @remarks
   * This operation supports the following database engines:
   * - ApsaraDB RDS for MySQL
   * - PolarDB for MySQL
   * 
   * @param request - GetSqlConcurrencyControlRulesHistoryRequest
   * @returns GetSqlConcurrencyControlRulesHistoryResponse
   */
  async getSqlConcurrencyControlRulesHistory(request: $_model.GetSqlConcurrencyControlRulesHistoryRequest): Promise<$_model.GetSqlConcurrencyControlRulesHistoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSqlConcurrencyControlRulesHistoryWithOptions(request, runtime);
  }

  /**
   * Queries the diagnostic suggestions generated by the DAS automatic SQL optimization feature.
   * 
   * @remarks
   * The SQL diagnostics feature provides instance diagnosis suggestions. You can use the suggestions to optimize instance indexes. For details, see [Automatic SQL optimization](https://help.aliyun.com/document_detail/167895.html).
   * > You can invoke this operation only to query diagnostic suggestions generated by the DAS automatic SQL optimization feature.
   * Before you begin:
   * - The database DPI engine is RDS MySQL or PolarDB for MySQL.
   * - If you use the China site (aliyun.com) or DAS SDK, use the latest version.
   * - When you invoke DAS by using the SDK, set the region to cn-shanghai.
   * 
   * @param request - GetSqlOptimizeAdviceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSqlOptimizeAdviceResponse
   */
  async getSqlOptimizeAdviceWithOptions(request: $_model.GetSqlOptimizeAdviceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSqlOptimizeAdviceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.consoleContext)) {
      query["ConsoleContext"] = request.consoleContext;
    }

    if (!$dara.isNull(request.endDt)) {
      query["EndDt"] = request.endDt;
    }

    if (!$dara.isNull(request.engine)) {
      query["Engine"] = request.engine;
    }

    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    if (!$dara.isNull(request.startDt)) {
      query["StartDt"] = request.startDt;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSqlOptimizeAdvice",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSqlOptimizeAdviceResponse>(await this.callApi(params, req, runtime), new $_model.GetSqlOptimizeAdviceResponse({}));
  }

  /**
   * Queries the diagnostic suggestions generated by the DAS automatic SQL optimization feature.
   * 
   * @remarks
   * The SQL diagnostics feature provides instance diagnosis suggestions. You can use the suggestions to optimize instance indexes. For details, see [Automatic SQL optimization](https://help.aliyun.com/document_detail/167895.html).
   * > You can invoke this operation only to query diagnostic suggestions generated by the DAS automatic SQL optimization feature.
   * Before you begin:
   * - The database DPI engine is RDS MySQL or PolarDB for MySQL.
   * - If you use the China site (aliyun.com) or DAS SDK, use the latest version.
   * - When you invoke DAS by using the SDK, set the region to cn-shanghai.
   * 
   * @param request - GetSqlOptimizeAdviceRequest
   * @returns GetSqlOptimizeAdviceResponse
   */
  async getSqlOptimizeAdvice(request: $_model.GetSqlOptimizeAdviceRequest): Promise<$_model.GetSqlOptimizeAdviceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSqlOptimizeAdviceWithOptions(request, runtime);
  }

  /**
   * Queries the status and results of a storage analysis task.
   * 
   * @remarks
   * > The physical file size indicates the actual size of an obtained file. Only specific deployment modes of database instances support the display of physical file sizes. The statistics on tables are obtained from `information_schema.tables`. Statistics in MySQL are not updated in real time. Therefore, the statistics may be different from the physical file sizes. If you want to obtain the latest data, you can execute the `ANALYZE TABLE` statement on the relevant tables during off-peak hours.
   * - This operation is applicable only to ApsaraDB RDS for MySQL instances, PolarDB for MySQL clusters, and ApsaraDB for MongoDB instances.
   * - For ApsaraDB RDS for MySQL instances and PolarDB for MySQL clusters, this operation works the same as the storage analysis feature of the previous version. Tasks generated by this operation cannot be viewed on the Storage Analysis page of the new version in the Database Autonomy Service (DAS) console. If you want to view the tasks and results, call the related API operation to obtain data and save data to your computer.
   * - If you use an Alibaba Cloud SDK or DAS SDK to call this operation, we recommend that you use the latest version of the SDK.
   * - If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
   * 
   * @param request - GetStorageAnalysisResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetStorageAnalysisResultResponse
   */
  async getStorageAnalysisResultWithOptions(request: $_model.GetStorageAnalysisResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetStorageAnalysisResultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.nodeId)) {
      query["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetStorageAnalysisResult",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetStorageAnalysisResultResponse>(await this.callApi(params, req, runtime), new $_model.GetStorageAnalysisResultResponse({}));
  }

  /**
   * Queries the status and results of a storage analysis task.
   * 
   * @remarks
   * > The physical file size indicates the actual size of an obtained file. Only specific deployment modes of database instances support the display of physical file sizes. The statistics on tables are obtained from `information_schema.tables`. Statistics in MySQL are not updated in real time. Therefore, the statistics may be different from the physical file sizes. If you want to obtain the latest data, you can execute the `ANALYZE TABLE` statement on the relevant tables during off-peak hours.
   * - This operation is applicable only to ApsaraDB RDS for MySQL instances, PolarDB for MySQL clusters, and ApsaraDB for MongoDB instances.
   * - For ApsaraDB RDS for MySQL instances and PolarDB for MySQL clusters, this operation works the same as the storage analysis feature of the previous version. Tasks generated by this operation cannot be viewed on the Storage Analysis page of the new version in the Database Autonomy Service (DAS) console. If you want to view the tasks and results, call the related API operation to obtain data and save data to your computer.
   * - If you use an Alibaba Cloud SDK or DAS SDK to call this operation, we recommend that you use the latest version of the SDK.
   * - If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
   * 
   * @param request - GetStorageAnalysisResultRequest
   * @returns GetStorageAnalysisResultResponse
   */
  async getStorageAnalysisResult(request: $_model.GetStorageAnalysisResultRequest): Promise<$_model.GetStorageAnalysisResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getStorageAnalysisResultWithOptions(request, runtime);
  }

  /**
   * Provides the Alibaba Cloud ApsaraDB Agent foundation model capability interface for AI chat, performance diagnostics, and other features.
   * 
   * @param request - GetYaoChiAgentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetYaoChiAgentResponse
   */
  async *getYaoChiAgentWithSSE(request: $_model.GetYaoChiAgentRequest, runtime: $dara.RuntimeOptions): AsyncGenerator<$_model.GetYaoChiAgentResponse, any, unknown> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.extraInfo)) {
      query["ExtraInfo"] = request.extraInfo;
    }

    if (!$dara.isNull(request.imageKeys)) {
      query["ImageKeys"] = request.imageKeys;
    }

    if (!$dara.isNull(request.query)) {
      query["Query"] = request.query;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.source)) {
      query["Source"] = request.source;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetYaoChiAgent",
      version: "2020-01-16",
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
      if (!$dara.isNull(resp.event) && !$dara.isNull(resp.event.data)) {
        let data = JSON.parse(resp.event.data);
        yield $dara.cast<$_model.GetYaoChiAgentResponse>({
          statusCode: resp.statusCode,
          headers: resp.headers,
          id: resp.event.id,
          event: resp.event.event,
          body: data,
        }, new $_model.GetYaoChiAgentResponse({}));
      }

    }
  }

  /**
   * Provides the Alibaba Cloud ApsaraDB Agent foundation model capability interface for AI chat, performance diagnostics, and other features.
   * 
   * @param request - GetYaoChiAgentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetYaoChiAgentResponse
   */
  async getYaoChiAgentWithOptions(request: $_model.GetYaoChiAgentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetYaoChiAgentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.extraInfo)) {
      query["ExtraInfo"] = request.extraInfo;
    }

    if (!$dara.isNull(request.imageKeys)) {
      query["ImageKeys"] = request.imageKeys;
    }

    if (!$dara.isNull(request.query)) {
      query["Query"] = request.query;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.source)) {
      query["Source"] = request.source;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetYaoChiAgent",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetYaoChiAgentResponse>(await this.callApi(params, req, runtime), new $_model.GetYaoChiAgentResponse({}));
  }

  /**
   * Provides the Alibaba Cloud ApsaraDB Agent foundation model capability interface for AI chat, performance diagnostics, and other features.
   * 
   * @param request - GetYaoChiAgentRequest
   * @returns GetYaoChiAgentResponse
   */
  async getYaoChiAgent(request: $_model.GetYaoChiAgentRequest): Promise<$_model.GetYaoChiAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getYaoChiAgentWithOptions(request, runtime);
  }

  /**
   * Calls the KillInstanceAllSession operation to terminate all sessions on a specified instance.
   * 
   * @remarks
   * - This operation is applicable only to the Redis engine.
   * - When using the Alibaba Cloud SDK, ensure that the version of aliyun-sdk-core is later than 4.3.3. Use the latest version.
   * - The version of the DAS SDK must be 1.0.2 or later.
   * - When calling DAS by using the SDK, set the region to cn-shanghai.
   * 
   * @param request - KillInstanceAllSessionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns KillInstanceAllSessionResponse
   */
  async killInstanceAllSessionWithOptions(request: $_model.KillInstanceAllSessionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.KillInstanceAllSessionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.consoleContext)) {
      query["ConsoleContext"] = request.consoleContext;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "KillInstanceAllSession",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.KillInstanceAllSessionResponse>(await this.callApi(params, req, runtime), new $_model.KillInstanceAllSessionResponse({}));
  }

  /**
   * Calls the KillInstanceAllSession operation to terminate all sessions on a specified instance.
   * 
   * @remarks
   * - This operation is applicable only to the Redis engine.
   * - When using the Alibaba Cloud SDK, ensure that the version of aliyun-sdk-core is later than 4.3.3. Use the latest version.
   * - The version of the DAS SDK must be 1.0.2 or later.
   * - When calling DAS by using the SDK, set the region to cn-shanghai.
   * 
   * @param request - KillInstanceAllSessionRequest
   * @returns KillInstanceAllSessionResponse
   */
  async killInstanceAllSession(request: $_model.KillInstanceAllSessionRequest): Promise<$_model.KillInstanceAllSessionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.killInstanceAllSessionWithOptions(request, runtime);
  }

  /**
   * Modifies the auto scaling configurations of an instance.
   * 
   * @remarks
   * Modifies the following auto scaling configurations for an instance: **auto scaling for specifications**, **automatic storage expansion**, **automatic bandwidth adjustment**, and **auto scaling for resources**.
   * - You can modify the configurations of the **auto scaling feature for specifications** for the following types of database instances:
   *   - PolarDB for MySQL Cluster Edition instances. For more information about the feature and the billing rules, see [Automatic performance scaling](https://help.aliyun.com/document_detail/169686.html).
   *   - ApsaraDB RDS for MySQL High-availability Edition instances that use standard SSDs or enhanced SSDs (ESSDs). For more information about the feature and the billing rules, see [Automatic performance scaling](https://help.aliyun.com/document_detail/169686.html).
   * - You can modify the configurations of the **automatic storage expansion** feature for the following types of database instances:
   *   - ApsaraDB RDS for MySQL High-availability Edition instances that use standard SSDs or ESSDs. For more information about the feature and the billing rules, see [Automatic space expansion](https://help.aliyun.com/document_detail/173345.html).
   * - You can modify the configurations of the **automatic bandwidth adjustment** feature for the following types of database instances:
   *   - ApsaraDB for Redis Classic (Local Disk-based) Edition instances. For more information about the feature and the billing rules, see [Automatic bandwidth adjustment](https://help.aliyun.com/document_detail/216312.html).
   * - You can modify the configurations of the **auto scaling feature for resources** for the following types of database instances:
   *   - General-purpose ApsaraDB RDS for MySQL Enterprise Edition instances. For more information about the feature and the billing rules, see [Automatic performance scaling](https://help.aliyun.com/document_detail/169686.html).
   * - If you use an Alibaba Cloud SDK or Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
   * - If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
   * 
   * @param request - ModifyAutoScalingConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAutoScalingConfigResponse
   */
  async modifyAutoScalingConfigWithOptions(request: $_model.ModifyAutoScalingConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyAutoScalingConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bandwidth)) {
      query["Bandwidth"] = request.bandwidth;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.resource)) {
      query["Resource"] = request.resource;
    }

    if (!$dara.isNull(request.shard)) {
      query["Shard"] = request.shard;
    }

    if (!$dara.isNull(request.spec)) {
      query["Spec"] = request.spec;
    }

    if (!$dara.isNull(request.storage)) {
      query["Storage"] = request.storage;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyAutoScalingConfig",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyAutoScalingConfigResponse>(await this.callApi(params, req, runtime), new $_model.ModifyAutoScalingConfigResponse({}));
  }

  /**
   * Modifies the auto scaling configurations of an instance.
   * 
   * @remarks
   * Modifies the following auto scaling configurations for an instance: **auto scaling for specifications**, **automatic storage expansion**, **automatic bandwidth adjustment**, and **auto scaling for resources**.
   * - You can modify the configurations of the **auto scaling feature for specifications** for the following types of database instances:
   *   - PolarDB for MySQL Cluster Edition instances. For more information about the feature and the billing rules, see [Automatic performance scaling](https://help.aliyun.com/document_detail/169686.html).
   *   - ApsaraDB RDS for MySQL High-availability Edition instances that use standard SSDs or enhanced SSDs (ESSDs). For more information about the feature and the billing rules, see [Automatic performance scaling](https://help.aliyun.com/document_detail/169686.html).
   * - You can modify the configurations of the **automatic storage expansion** feature for the following types of database instances:
   *   - ApsaraDB RDS for MySQL High-availability Edition instances that use standard SSDs or ESSDs. For more information about the feature and the billing rules, see [Automatic space expansion](https://help.aliyun.com/document_detail/173345.html).
   * - You can modify the configurations of the **automatic bandwidth adjustment** feature for the following types of database instances:
   *   - ApsaraDB for Redis Classic (Local Disk-based) Edition instances. For more information about the feature and the billing rules, see [Automatic bandwidth adjustment](https://help.aliyun.com/document_detail/216312.html).
   * - You can modify the configurations of the **auto scaling feature for resources** for the following types of database instances:
   *   - General-purpose ApsaraDB RDS for MySQL Enterprise Edition instances. For more information about the feature and the billing rules, see [Automatic performance scaling](https://help.aliyun.com/document_detail/169686.html).
   * - If you use an Alibaba Cloud SDK or Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
   * - If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
   * 
   * @param request - ModifyAutoScalingConfigRequest
   * @returns ModifyAutoScalingConfigResponse
   */
  async modifyAutoScalingConfig(request: $_model.ModifyAutoScalingConfigRequest): Promise<$_model.ModifyAutoScalingConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyAutoScalingConfigWithOptions(request, runtime);
  }

  /**
   * Modifies a configuration item of Alibaba Cloud Managed Services.
   * 
   * @remarks
   * Before you begin:
   * - Use the latest version of Alibaba Cloud SDK or DAS SDK.
   * - When calling DAS by using the SDK, set the region to cn-shanghai.
   * - This operation enables the latest supported version by default. For information about the databases and regions supported by each DAS Enterprise Edition version, see [DAS editions and supported features](https://help.aliyun.com/document_detail/156204.html).
   * 
   * @param request - ModifyDasOpsConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDasOpsConfigResponse
   */
  async modifyDasOpsConfigWithOptions(request: $_model.ModifyDasOpsConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDasOpsConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.filters)) {
      query["Filters"] = request.filters;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.enable)) {
      body["Enable"] = request.enable;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDasOpsConfig",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDasOpsConfigResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDasOpsConfigResponse({}));
  }

  /**
   * Modifies a configuration item of Alibaba Cloud Managed Services.
   * 
   * @remarks
   * Before you begin:
   * - Use the latest version of Alibaba Cloud SDK or DAS SDK.
   * - When calling DAS by using the SDK, set the region to cn-shanghai.
   * - This operation enables the latest supported version by default. For information about the databases and regions supported by each DAS Enterprise Edition version, see [DAS editions and supported features](https://help.aliyun.com/document_detail/156204.html).
   * 
   * @param request - ModifyDasOpsConfigRequest
   * @returns ModifyDasOpsConfigResponse
   */
  async modifyDasOpsConfig(request: $_model.ModifyDasOpsConfigRequest): Promise<$_model.ModifyDasOpsConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDasOpsConfigWithOptions(request, runtime);
  }

  /**
   * Modifies the audit log forwarding configuration.
   * 
   * @remarks
   * Before you call this operation, take note of the following prerequisites:
   * - If you use the Alibaba Cloud SDK or DAS SDK, use the latest version.
   * - When you call DAS by using the SDK, set the region to cn-shanghai.
   * - This operation enables the latest supported version by default. For information about the databases and regions supported by each DAS Enterprise Edition version, see [DAS editions and supported features](https://help.aliyun.com/document_detail/156204.html).
   * 
   * @param request - ModifyForwardSqlLogConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyForwardSqlLogConfigResponse
   */
  async modifyForwardSqlLogConfigWithOptions(request: $_model.ModifyForwardSqlLogConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyForwardSqlLogConfigResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.enable)) {
      body["Enable"] = request.enable;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.service)) {
      body["Service"] = request.service;
    }

    if (!$dara.isNull(request.source)) {
      body["Source"] = request.source;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyForwardSqlLogConfig",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyForwardSqlLogConfigResponse>(await this.callApi(params, req, runtime), new $_model.ModifyForwardSqlLogConfigResponse({}));
  }

  /**
   * Modifies the audit log forwarding configuration.
   * 
   * @remarks
   * Before you call this operation, take note of the following prerequisites:
   * - If you use the Alibaba Cloud SDK or DAS SDK, use the latest version.
   * - When you call DAS by using the SDK, set the region to cn-shanghai.
   * - This operation enables the latest supported version by default. For information about the databases and regions supported by each DAS Enterprise Edition version, see [DAS editions and supported features](https://help.aliyun.com/document_detail/156204.html).
   * 
   * @param request - ModifyForwardSqlLogConfigRequest
   * @returns ModifyForwardSqlLogConfigResponse
   */
  async modifyForwardSqlLogConfig(request: $_model.ModifyForwardSqlLogConfigRequest): Promise<$_model.ModifyForwardSqlLogConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyForwardSqlLogConfigWithOptions(request, runtime);
  }

  /**
   * Modifies a cross-product whitelist template.
   * 
   * @remarks
   * Before you call this operation, note the following:
   * - Use the latest version of the Alibaba Cloud SDK or DAS SDK.
   * - When you use an SDK to call the DAS service, specify the cn-shanghai region.
   * - This operation uses the latest supported version by default. For more information about the databases and regions that are supported by different versions of DAS Enterprise Edition, see [DAS editions and supported features](https://help.aliyun.com/document_detail/156204.html).
   * 
   * @param request - ModifySecurityIPGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifySecurityIPGroupResponse
   */
  async modifySecurityIPGroupWithOptions(request: $_model.ModifySecurityIPGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifySecurityIPGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.GIpList)) {
      query["GIpList"] = request.GIpList;
    }

    if (!$dara.isNull(request.globalIgName)) {
      query["GlobalIgName"] = request.globalIgName;
    }

    if (!$dara.isNull(request.globalSecurityGroupId)) {
      query["GlobalSecurityGroupId"] = request.globalSecurityGroupId;
    }

    if (!$dara.isNull(request.regionName)) {
      query["RegionName"] = request.regionName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifySecurityIPGroup",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifySecurityIPGroupResponse>(await this.callApi(params, req, runtime), new $_model.ModifySecurityIPGroupResponse({}));
  }

  /**
   * Modifies a cross-product whitelist template.
   * 
   * @remarks
   * Before you call this operation, note the following:
   * - Use the latest version of the Alibaba Cloud SDK or DAS SDK.
   * - When you use an SDK to call the DAS service, specify the cn-shanghai region.
   * - This operation uses the latest supported version by default. For more information about the databases and regions that are supported by different versions of DAS Enterprise Edition, see [DAS editions and supported features](https://help.aliyun.com/document_detail/156204.html).
   * 
   * @param request - ModifySecurityIPGroupRequest
   * @returns ModifySecurityIPGroupResponse
   */
  async modifySecurityIPGroup(request: $_model.ModifySecurityIPGroupRequest): Promise<$_model.ModifySecurityIPGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifySecurityIPGroupWithOptions(request, runtime);
  }

  /**
   * Attaches or detaches a cross-engine whitelist template to or from a user.
   * 
   * @remarks
   * - When using the Alibaba Cloud or DAS SDK, use the latest version.
   * - When calling DAS by using the SDK, set the region to cn-shanghai.
   * - For information about the supported database instances, see the [feature overview](https://help.aliyun.com/document_detail/92561.html) of SQL Explorer.
   * - SQL Explorer (original version) must be enabled for the target database instance. For more information, see [Enable SQL Explorer and Audit](https://help.aliyun.com/document_detail/92561.html).
   * 
   * @param request - ModifySecurityIPGroupRelationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifySecurityIPGroupRelationResponse
   */
  async modifySecurityIPGroupRelationWithOptions(request: $_model.ModifySecurityIPGroupRelationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifySecurityIPGroupRelationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.globalSecurityGroupId)) {
      query["GlobalSecurityGroupId"] = request.globalSecurityGroupId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionName)) {
      query["RegionName"] = request.regionName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifySecurityIPGroupRelation",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifySecurityIPGroupRelationResponse>(await this.callApi(params, req, runtime), new $_model.ModifySecurityIPGroupRelationResponse({}));
  }

  /**
   * Attaches or detaches a cross-engine whitelist template to or from a user.
   * 
   * @remarks
   * - When using the Alibaba Cloud or DAS SDK, use the latest version.
   * - When calling DAS by using the SDK, set the region to cn-shanghai.
   * - For information about the supported database instances, see the [feature overview](https://help.aliyun.com/document_detail/92561.html) of SQL Explorer.
   * - SQL Explorer (original version) must be enabled for the target database instance. For more information, see [Enable SQL Explorer and Audit](https://help.aliyun.com/document_detail/92561.html).
   * 
   * @param request - ModifySecurityIPGroupRelationRequest
   * @returns ModifySecurityIPGroupRelationResponse
   */
  async modifySecurityIPGroupRelation(request: $_model.ModifySecurityIPGroupRelationRequest): Promise<$_model.ModifySecurityIPGroupRelationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifySecurityIPGroupRelationWithOptions(request, runtime);
  }

  /**
   * Use the `ModifySqlLogConfig` operation to enable or configure DAS Enterprise Edition for a database instance.
   * 
   * @remarks
   * Before calling this operation, ensure you meet the following requirements:
   * - Use the latest version of the Alibaba Cloud SDK or the DAS SDK.
   * - When calling the DAS service with an SDK, set the region to cn-shanghai.
   * - This operation enables the latest supported version of DAS Enterprise Edition by default. See [DAS editions and supported features](https://help.aliyun.com/document_detail/156204.html) for the databases and regions supported by each version of DAS Enterprise Edition.
   * 
   * @param request - ModifySqlLogConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifySqlLogConfigResponse
   */
  async modifySqlLogConfigWithOptions(request: $_model.ModifySqlLogConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifySqlLogConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.enableAudit)) {
      query["EnableAudit"] = request.enableAudit;
    }

    if (!$dara.isNull(request.filters)) {
      query["Filters"] = request.filters;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.enable)) {
      body["Enable"] = request.enable;
    }

    if (!$dara.isNull(request.hotRetention)) {
      body["HotRetention"] = request.hotRetention;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.requestEnable)) {
      body["RequestEnable"] = request.requestEnable;
    }

    if (!$dara.isNull(request.retention)) {
      body["Retention"] = request.retention;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifySqlLogConfig",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifySqlLogConfigResponse>(await this.callApi(params, req, runtime), new $_model.ModifySqlLogConfigResponse({}));
  }

  /**
   * Use the `ModifySqlLogConfig` operation to enable or configure DAS Enterprise Edition for a database instance.
   * 
   * @remarks
   * Before calling this operation, ensure you meet the following requirements:
   * - Use the latest version of the Alibaba Cloud SDK or the DAS SDK.
   * - When calling the DAS service with an SDK, set the region to cn-shanghai.
   * - This operation enables the latest supported version of DAS Enterprise Edition by default. See [DAS editions and supported features](https://help.aliyun.com/document_detail/156204.html) for the databases and regions supported by each version of DAS Enterprise Edition.
   * 
   * @param request - ModifySqlLogConfigRequest
   * @returns ModifySqlLogConfigResponse
   */
  async modifySqlLogConfig(request: $_model.ModifySqlLogConfigRequest): Promise<$_model.ModifySqlLogConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifySqlLogConfigWithOptions(request, runtime);
  }

  /**
   * Calls the RunCloudBenchTask operation to execute a stress testing task.
   * 
   * @remarks
   * Database Autonomy Service (DAS) provides the intelligent stress testing feature. This feature helps you determine whether your instance type needs to be scaled out to handle peak service traffic. For more information, see [Intelligent stress testing](https://help.aliyun.com/document_detail/155068.html).
   * 
   * @param request - RunCloudBenchTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunCloudBenchTaskResponse
   */
  async runCloudBenchTaskWithOptions(request: $_model.RunCloudBenchTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RunCloudBenchTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunCloudBenchTask",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RunCloudBenchTaskResponse>(await this.callApi(params, req, runtime), new $_model.RunCloudBenchTaskResponse({}));
  }

  /**
   * Calls the RunCloudBenchTask operation to execute a stress testing task.
   * 
   * @remarks
   * Database Autonomy Service (DAS) provides the intelligent stress testing feature. This feature helps you determine whether your instance type needs to be scaled out to handle peak service traffic. For more information, see [Intelligent stress testing](https://help.aliyun.com/document_detail/155068.html).
   * 
   * @param request - RunCloudBenchTaskRequest
   * @returns RunCloudBenchTaskResponse
   */
  async runCloudBenchTask(request: $_model.RunCloudBenchTaskRequest): Promise<$_model.RunCloudBenchTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.runCloudBenchTaskWithOptions(request, runtime);
  }

  /**
   * Configures the event subscription settings for a database instance.
   * 
   * @remarks
   * Before you call this operation, take note of the following items:
   * *   If you use an Alibaba Cloud SDK or a Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
   * *   If you use an SDK to call the API operations of DAS, you must set the region ID to cn-shanghai.
   * *   Make sure that the database instance that you want to manage is connected to DAS.
   * 
   * @param request - SetEventSubscriptionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetEventSubscriptionResponse
   */
  async setEventSubscriptionWithOptions(request: $_model.SetEventSubscriptionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetEventSubscriptionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.active)) {
      query["Active"] = request.active;
    }

    if (!$dara.isNull(request.channelType)) {
      query["ChannelType"] = request.channelType;
    }

    if (!$dara.isNull(request.contactGroupName)) {
      query["ContactGroupName"] = request.contactGroupName;
    }

    if (!$dara.isNull(request.contactName)) {
      query["ContactName"] = request.contactName;
    }

    if (!$dara.isNull(request.dispatchRule)) {
      query["DispatchRule"] = request.dispatchRule;
    }

    if (!$dara.isNull(request.eventContext)) {
      query["EventContext"] = request.eventContext;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.level)) {
      query["Level"] = request.level;
    }

    if (!$dara.isNull(request.minInterval)) {
      query["MinInterval"] = request.minInterval;
    }

    if (!$dara.isNull(request.severity)) {
      query["Severity"] = request.severity;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetEventSubscription",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetEventSubscriptionResponse>(await this.callApi(params, req, runtime), new $_model.SetEventSubscriptionResponse({}));
  }

  /**
   * Configures the event subscription settings for a database instance.
   * 
   * @remarks
   * Before you call this operation, take note of the following items:
   * *   If you use an Alibaba Cloud SDK or a Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
   * *   If you use an SDK to call the API operations of DAS, you must set the region ID to cn-shanghai.
   * *   Make sure that the database instance that you want to manage is connected to DAS.
   * 
   * @param request - SetEventSubscriptionRequest
   * @returns SetEventSubscriptionResponse
   */
  async setEventSubscription(request: $_model.SetEventSubscriptionRequest): Promise<$_model.SetEventSubscriptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setEventSubscriptionWithOptions(request, runtime);
  }

  /**
   * Asynchronously configures parameters related to the automatic fragment recycling feature for multiple database instances at a time.
   * 
   * @remarks
   * > Asynchronous calls do not immediately return the complete results. To obtain the complete results, you must use the value of **ResultId** returned in the response to re-initiate the call until the value of **isFinish** is **true**.\\*\\*\\*\\* In this case, you must call this operation at least twice.
   * Before you call this operation, take note of the following items:
   * - If you use an SDK to call the API operations of Database Autonomy Service (DAS), you must set the region ID to cn-shanghai.
   * - The database instances must be an ApsaraDB RDS for MySQL High-availability Edition instance.
   * - DAS Enterprise Edition must be enabled for the database instance. You can call the call [DescribeInstanceDasPro](https://help.aliyun.com/document_detail/413866.html) operation to query whether DAS Enterprise Edition is enabled.
   * - The database instance has four or more CPU cores, and **innodb_file_per_table** is set to **ON**.
   * 
   * @param request - UpdateAutoResourceOptimizeRulesAsyncRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAutoResourceOptimizeRulesAsyncResponse
   */
  async updateAutoResourceOptimizeRulesAsyncWithOptions(request: $_model.UpdateAutoResourceOptimizeRulesAsyncRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAutoResourceOptimizeRulesAsyncResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.consoleContext)) {
      query["ConsoleContext"] = request.consoleContext;
    }

    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.resultId)) {
      query["ResultId"] = request.resultId;
    }

    if (!$dara.isNull(request.tableFragmentationRatio)) {
      query["TableFragmentationRatio"] = request.tableFragmentationRatio;
    }

    if (!$dara.isNull(request.tableSpaceSize)) {
      query["TableSpaceSize"] = request.tableSpaceSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAutoResourceOptimizeRulesAsync",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAutoResourceOptimizeRulesAsyncResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAutoResourceOptimizeRulesAsyncResponse({}));
  }

  /**
   * Asynchronously configures parameters related to the automatic fragment recycling feature for multiple database instances at a time.
   * 
   * @remarks
   * > Asynchronous calls do not immediately return the complete results. To obtain the complete results, you must use the value of **ResultId** returned in the response to re-initiate the call until the value of **isFinish** is **true**.\\*\\*\\*\\* In this case, you must call this operation at least twice.
   * Before you call this operation, take note of the following items:
   * - If you use an SDK to call the API operations of Database Autonomy Service (DAS), you must set the region ID to cn-shanghai.
   * - The database instances must be an ApsaraDB RDS for MySQL High-availability Edition instance.
   * - DAS Enterprise Edition must be enabled for the database instance. You can call the call [DescribeInstanceDasPro](https://help.aliyun.com/document_detail/413866.html) operation to query whether DAS Enterprise Edition is enabled.
   * - The database instance has four or more CPU cores, and **innodb_file_per_table** is set to **ON**.
   * 
   * @param request - UpdateAutoResourceOptimizeRulesAsyncRequest
   * @returns UpdateAutoResourceOptimizeRulesAsyncResponse
   */
  async updateAutoResourceOptimizeRulesAsync(request: $_model.UpdateAutoResourceOptimizeRulesAsyncRequest): Promise<$_model.UpdateAutoResourceOptimizeRulesAsyncResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAutoResourceOptimizeRulesAsyncWithOptions(request, runtime);
  }

  /**
   * Enables, modifies, or disables the automatic SQL optimization feature for multiple database instances at a time.
   * 
   * @remarks
   * Before you call this operation, take note of the following items:
   * - If you use an SDK to call API operations of Database Autonomy Service (DAS), you must set the region ID to cn-shanghai.
   * - DAS Enterprise Edition must be enabled for the database instance that you want to manage. To enable DAS Enterprise Edition for a database instance, you can call the [EnableDasPro](https://help.aliyun.com/document_detail/411645.html) operation.
   * - The autonomy service must be enabled for the database instance. For more information, see [Autonomy center](https://help.aliyun.com/document_detail/152139.html).
   * - This operation supports the following database engines:
   *   - ApsaraDB RDS for MySQL High-availability Edition or Enterprise Edition
   *   - PolarDB for MySQL Cluster Edition
   * 
   * @param request - UpdateAutoSqlOptimizeStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAutoSqlOptimizeStatusResponse
   */
  async updateAutoSqlOptimizeStatusWithOptions(request: $_model.UpdateAutoSqlOptimizeStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAutoSqlOptimizeStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instances)) {
      query["Instances"] = request.instances;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAutoSqlOptimizeStatus",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAutoSqlOptimizeStatusResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAutoSqlOptimizeStatusResponse({}));
  }

  /**
   * Enables, modifies, or disables the automatic SQL optimization feature for multiple database instances at a time.
   * 
   * @remarks
   * Before you call this operation, take note of the following items:
   * - If you use an SDK to call API operations of Database Autonomy Service (DAS), you must set the region ID to cn-shanghai.
   * - DAS Enterprise Edition must be enabled for the database instance that you want to manage. To enable DAS Enterprise Edition for a database instance, you can call the [EnableDasPro](https://help.aliyun.com/document_detail/411645.html) operation.
   * - The autonomy service must be enabled for the database instance. For more information, see [Autonomy center](https://help.aliyun.com/document_detail/152139.html).
   * - This operation supports the following database engines:
   *   - ApsaraDB RDS for MySQL High-availability Edition or Enterprise Edition
   *   - PolarDB for MySQL Cluster Edition
   * 
   * @param request - UpdateAutoSqlOptimizeStatusRequest
   * @returns UpdateAutoSqlOptimizeStatusResponse
   */
  async updateAutoSqlOptimizeStatus(request: $_model.UpdateAutoSqlOptimizeStatusRequest): Promise<$_model.UpdateAutoSqlOptimizeStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAutoSqlOptimizeStatusWithOptions(request, runtime);
  }

  /**
   * Calls the UpdateAutoThrottleRulesAsync operation to asynchronously configure automatic SQL throttling parameters for specified database instances in batches.
   * 
   * @remarks
   * > An asynchronous call does not immediately return complete results. First, call this operation to obtain the **ResultId**. Then, use the returned **ResultId** to initiate the call again until **isFinish** is **true**, at which point the complete results are returned. This means that you must call this operation at least twice to obtain complete data.
   * Before you begin:
   * - When using the SDK to call DAS, specify the region as cn-shanghai.
   * - The autonomy service is enabled for the target database instance. For more information, see [Autonomy center](https://help.aliyun.com/document_detail/152139.html).
   * - The target database instance is one of the following:
   *     - ApsaraDB RDS for MySQL 5.6, 5.7, or 8.0 high-availability series or RDS Enterprise Edition.
   *     - PolarDB for MySQL 5.6 Cluster Edition, 5.7 Cluster Edition, or 8.0 Cluster Edition.
   * 
   * @param request - UpdateAutoThrottleRulesAsyncRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAutoThrottleRulesAsyncResponse
   */
  async updateAutoThrottleRulesAsyncWithOptions(request: $_model.UpdateAutoThrottleRulesAsyncRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAutoThrottleRulesAsyncResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.abnormalDuration)) {
      query["AbnormalDuration"] = request.abnormalDuration;
    }

    if (!$dara.isNull(request.activeSessions)) {
      query["ActiveSessions"] = request.activeSessions;
    }

    if (!$dara.isNull(request.allowThrottleEndTime)) {
      query["AllowThrottleEndTime"] = request.allowThrottleEndTime;
    }

    if (!$dara.isNull(request.allowThrottleStartTime)) {
      query["AllowThrottleStartTime"] = request.allowThrottleStartTime;
    }

    if (!$dara.isNull(request.autoKillSession)) {
      query["AutoKillSession"] = request.autoKillSession;
    }

    if (!$dara.isNull(request.consoleContext)) {
      query["ConsoleContext"] = request.consoleContext;
    }

    if (!$dara.isNull(request.cpuSessionRelation)) {
      query["CpuSessionRelation"] = request.cpuSessionRelation;
    }

    if (!$dara.isNull(request.cpuUsage)) {
      query["CpuUsage"] = request.cpuUsage;
    }

    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.maxThrottleTime)) {
      query["MaxThrottleTime"] = request.maxThrottleTime;
    }

    if (!$dara.isNull(request.resultId)) {
      query["ResultId"] = request.resultId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAutoThrottleRulesAsync",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAutoThrottleRulesAsyncResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAutoThrottleRulesAsyncResponse({}));
  }

  /**
   * Calls the UpdateAutoThrottleRulesAsync operation to asynchronously configure automatic SQL throttling parameters for specified database instances in batches.
   * 
   * @remarks
   * > An asynchronous call does not immediately return complete results. First, call this operation to obtain the **ResultId**. Then, use the returned **ResultId** to initiate the call again until **isFinish** is **true**, at which point the complete results are returned. This means that you must call this operation at least twice to obtain complete data.
   * Before you begin:
   * - When using the SDK to call DAS, specify the region as cn-shanghai.
   * - The autonomy service is enabled for the target database instance. For more information, see [Autonomy center](https://help.aliyun.com/document_detail/152139.html).
   * - The target database instance is one of the following:
   *     - ApsaraDB RDS for MySQL 5.6, 5.7, or 8.0 high-availability series or RDS Enterprise Edition.
   *     - PolarDB for MySQL 5.6 Cluster Edition, 5.7 Cluster Edition, or 8.0 Cluster Edition.
   * 
   * @param request - UpdateAutoThrottleRulesAsyncRequest
   * @returns UpdateAutoThrottleRulesAsyncResponse
   */
  async updateAutoThrottleRulesAsync(request: $_model.UpdateAutoThrottleRulesAsyncRequest): Promise<$_model.UpdateAutoThrottleRulesAsyncResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAutoThrottleRulesAsyncWithOptions(request, runtime);
  }

}
