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
   * *   If you use an Alibaba Cloud SDK or a DAS SDK to call this operation, we recommend that you use the latest version of the SDK.
   * *   If you use an SDK to call DAS, you must set the region to cn-shanghai.
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
   * *   If you use an Alibaba Cloud SDK or a DAS SDK to call this operation, we recommend that you use the latest version of the SDK.
   * *   If you use an SDK to call DAS, you must set the region to cn-shanghai.
   * 
   * @param request - AddHDMInstanceRequest
   * @returns AddHDMInstanceResponse
   */
  async addHDMInstance(request: $_model.AddHDMInstanceRequest): Promise<$_model.AddHDMInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addHDMInstanceWithOptions(request, runtime);
  }

  /**
   * Creates a cache analysis task.
   * 
   * @remarks
   * Before you call this operation, take note of the following items:
   * *   If you use an Alibaba Cloud SDK or Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
   * *   If you use an SDK to call the API operations of DAS, you must set the region ID to cn-shanghai.
   * *   You can call this operation to analyze the data structures of ApsaraDB for Redis and the following self-developed data structures of Tair: TairString, TairHash, TairGIS, TairBloom, TairDoc, TairCpc, and TairZset. Other self-developed Tair data structures are not supported.
   * *   If the specifications of the database instance that you want to analyze are changed, the backup file generated before the specification change cannot be analyzed.
   * *   Tair ESSD/SSD-based instances are not supported.
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
   * Creates a cache analysis task.
   * 
   * @remarks
   * Before you call this operation, take note of the following items:
   * *   If you use an Alibaba Cloud SDK or Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
   * *   If you use an SDK to call the API operations of DAS, you must set the region ID to cn-shanghai.
   * *   You can call this operation to analyze the data structures of ApsaraDB for Redis and the following self-developed data structures of Tair: TairString, TairHash, TairGIS, TairBloom, TairDoc, TairCpc, and TairZset. Other self-developed Tair data structures are not supported.
   * *   If the specifications of the database instance that you want to analyze are changed, the backup file generated before the specification change cannot be analyzed.
   * *   Tair ESSD/SSD-based instances are not supported.
   * 
   * @param request - CreateCacheAnalysisJobRequest
   * @returns CreateCacheAnalysisJobResponse
   */
  async createCacheAnalysisJob(request: $_model.CreateCacheAnalysisJobRequest): Promise<$_model.CreateCacheAnalysisJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCacheAnalysisJobWithOptions(request, runtime);
  }

  /**
   * Creates stress testing tasks.
   * 
   * @remarks
   * Database Autonomy Service (DAS) provides the intelligent stress testing feature. This feature helps you check whether your instance needs to be scaled up to effectively handle traffic spikes. For more information, see [Intelligent stress testing](https://help.aliyun.com/document_detail/155068.html). Before you call this API operation, make sure that your database instances meet the following requirements:
   * *   The source database instance is an ApsaraDB RDS for MySQL High-availability Edition or Enterprise Edition instance, or a PolarDB for MySQL Cluster Edition cluster.
   * *   The destination database instance is an ApsaraDB RDS for MySQL instance or a PolarDB for MySQL cluster.
   * *   The source and destination database instances are connected to DAS. For information about how to connect database instances to DAS, see [Connect an Alibaba Cloud database instance to DAS](https://help.aliyun.com/document_detail/65405.html).
   * *   DAS Enterprise Edition is enabled for the source and destination database instances. For more information, see [Overview](https://help.aliyun.com/document_detail/190912.html).
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
   * Creates stress testing tasks.
   * 
   * @remarks
   * Database Autonomy Service (DAS) provides the intelligent stress testing feature. This feature helps you check whether your instance needs to be scaled up to effectively handle traffic spikes. For more information, see [Intelligent stress testing](https://help.aliyun.com/document_detail/155068.html). Before you call this API operation, make sure that your database instances meet the following requirements:
   * *   The source database instance is an ApsaraDB RDS for MySQL High-availability Edition or Enterprise Edition instance, or a PolarDB for MySQL Cluster Edition cluster.
   * *   The destination database instance is an ApsaraDB RDS for MySQL instance or a PolarDB for MySQL cluster.
   * *   The source and destination database instances are connected to DAS. For information about how to connect database instances to DAS, see [Connect an Alibaba Cloud database instance to DAS](https://help.aliyun.com/document_detail/65405.html).
   * *   DAS Enterprise Edition is enabled for the source and destination database instances. For more information, see [Overview](https://help.aliyun.com/document_detail/190912.html).
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
   * *   If you use an Alibaba Cloud SDK, make sure that the aliyun-sdk-core version is later than 4.3.3. We recommend that you use the latest version.
   * *   The version of Database Autonomy Service (DAS) SDK must be 1.0.3 or later.
   * *   If you use an SDK to call DAS, you must set the region to cn-shanghai.
   * *   This operation supports the following database engines:
   *     *   RDS MySQL
   *     *   PolarDB for MySQL
   *     *   Redis
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
   * *   If you use an Alibaba Cloud SDK, make sure that the aliyun-sdk-core version is later than 4.3.3. We recommend that you use the latest version.
   * *   The version of Database Autonomy Service (DAS) SDK must be 1.0.3 or later.
   * *   If you use an SDK to call DAS, you must set the region to cn-shanghai.
   * *   This operation supports the following database engines:
   *     *   RDS MySQL
   *     *   PolarDB for MySQL
   *     *   Redis
   * 
   * @param request - CreateDiagnosticReportRequest
   * @returns CreateDiagnosticReportResponse
   */
  async createDiagnosticReport(request: $_model.CreateDiagnosticReportRequest): Promise<$_model.CreateDiagnosticReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDiagnosticReportWithOptions(request, runtime);
  }

  /**
   * Creates a task that terminates sessions.
   * 
   * @remarks
   *   This operation is applicable only to ApsaraDB RDS for MySQL instances and PolarDB for MySQL clusters.
   * *   If you use an Alibaba Cloud SDK or a Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
   * *   If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
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
   * Creates a task that terminates sessions.
   * 
   * @remarks
   *   This operation is applicable only to ApsaraDB RDS for MySQL instances and PolarDB for MySQL clusters.
   * *   If you use an Alibaba Cloud SDK or a Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
   * *   If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
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
   * 创建最近死锁分析任务
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
   * 创建最近死锁分析任务
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
   *   If you use Alibaba Cloud SDK or Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
   * *   If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
   * *   This operation supports the following database engines:
   *     *   ApsaraDB RDS for MySQL
   *     *   PolarDB for MySQL
   *     *   ApsaraDB RDS for PostgreSQL
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
   *   If you use Alibaba Cloud SDK or Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
   * *   If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
   * *   This operation supports the following database engines:
   *     *   ApsaraDB RDS for MySQL
   *     *   PolarDB for MySQL
   *     *   ApsaraDB RDS for PostgreSQL
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
   * *   If you use an SDK to call Database Autonomy Service (DAS), you must set the region to cn-shanghai.
   * *   This operation supports the following database engines:
   *     *   ApsaraDB RDS for MySQL
   *     *   ApsaraDB RDS for PostgreSQL
   *     *   ApsaraDB RDS for SQL Server
   *     *   PolarDB for MySQL
   *     *   PolarDB for PostgreSQL (compatible with Oracle)
   *     *   ApsaraDB for MongoDB
   * >  The minor engine version of ApsaraDB RDS for PostgreSQL instances must be 20221230 or later. For more information about how to check and update the minor engine version of an ApsaraDB RDS for PostgreSQL instance, see [Update the minor engine version of an ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/146895.html).
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
   * *   If you use an SDK to call Database Autonomy Service (DAS), you must set the region to cn-shanghai.
   * *   This operation supports the following database engines:
   *     *   ApsaraDB RDS for MySQL
   *     *   ApsaraDB RDS for PostgreSQL
   *     *   ApsaraDB RDS for SQL Server
   *     *   PolarDB for MySQL
   *     *   PolarDB for PostgreSQL (compatible with Oracle)
   *     *   ApsaraDB for MongoDB
   * >  The minor engine version of ApsaraDB RDS for PostgreSQL instances must be 20221230 or later. For more information about how to check and update the minor engine version of an ApsaraDB RDS for PostgreSQL instance, see [Update the minor engine version of an ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/146895.html).
   * 
   * @param request - CreateRequestDiagnosisRequest
   * @returns CreateRequestDiagnosisResponse
   */
  async createRequestDiagnosis(request: $_model.CreateRequestDiagnosisRequest): Promise<$_model.CreateRequestDiagnosisResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createRequestDiagnosisWithOptions(request, runtime);
  }

  /**
   * 创建用户跨产品白名单模板
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
   * 创建用户跨产品白名单模板
   * 
   * @param request - CreateSecurityIPGroupRequest
   * @returns CreateSecurityIPGroupResponse
   */
  async createSecurityIPGroup(request: $_model.CreateSecurityIPGroupRequest): Promise<$_model.CreateSecurityIPGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSecurityIPGroupWithOptions(request, runtime);
  }

  /**
   * Creates an offline task for Database Autonomy Service (DAS) Enterprise Edition.
   * 
   * @remarks
   * Before you call this operation, take note of the following items:
   * *   If you use an Alibaba Cloud SDK or DAS SDK to call this operation, we recommend that you use the latest version of the SDK.
   * *   If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
   * *   You can create an offline task only for database instances for which DAS Enterprise Edition V2 or V3 is enabled. For more information about the databases and regions that are supported by various versions of DAS Enterprise Edition, see [Editions and supported features](https://help.aliyun.com/document_detail/156204.html).
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
   * Creates an offline task for Database Autonomy Service (DAS) Enterprise Edition.
   * 
   * @remarks
   * Before you call this operation, take note of the following items:
   * *   If you use an Alibaba Cloud SDK or DAS SDK to call this operation, we recommend that you use the latest version of the SDK.
   * *   If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
   * *   You can create an offline task only for database instances for which DAS Enterprise Edition V2 or V3 is enabled. For more information about the databases and regions that are supported by various versions of DAS Enterprise Edition, see [Editions and supported features](https://help.aliyun.com/document_detail/156204.html).
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
   *   This operation is applicable only to ApsaraDB RDS for MySQL instances, PolarDB for MySQL clusters, and ApsaraDB for MongoDB instances.
   * *   For ApsaraDB RDS for MySQL instances and PolarDB for MySQL clusters, this operation works the same as the storage analysis feature of the previous version. Tasks generated by this operation cannot be viewed on the Storage Analysis page of the new version in the Database Autonomy Service (DAS) console. If you want to view the tasks and results, call the related API operation to obtain data and save data to your computer.
   * *   If you use an Alibaba Cloud SDK or DAS SDK to call this operation, we recommend that you use the latest version of the SDK.
   * *   If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
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
   *   This operation is applicable only to ApsaraDB RDS for MySQL instances, PolarDB for MySQL clusters, and ApsaraDB for MongoDB instances.
   * *   For ApsaraDB RDS for MySQL instances and PolarDB for MySQL clusters, this operation works the same as the storage analysis feature of the previous version. Tasks generated by this operation cannot be viewed on the Storage Analysis page of the new version in the Database Autonomy Service (DAS) console. If you want to view the tasks and results, call the related API operation to obtain data and save data to your computer.
   * *   If you use an Alibaba Cloud SDK or DAS SDK to call this operation, we recommend that you use the latest version of the SDK.
   * *   If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
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
   * Database Autonomy Service (DAS) provides the intelligent stress testing feature. This feature helps you check whether your instance needs to be scaled up to handle traffic spikes in an effective manner. For more information, see [Intelligent stress testing](https://help.aliyun.com/document_detail/155068.html).
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
   * Database Autonomy Service (DAS) provides the intelligent stress testing feature. This feature helps you check whether your instance needs to be scaled up to handle traffic spikes in an effective manner. For more information, see [Intelligent stress testing](https://help.aliyun.com/document_detail/155068.html).
   * 
   * @param request - DeleteCloudBenchTaskRequest
   * @returns DeleteCloudBenchTaskResponse
   */
  async deleteCloudBenchTask(request: $_model.DeleteCloudBenchTaskRequest): Promise<$_model.DeleteCloudBenchTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCloudBenchTaskWithOptions(request, runtime);
  }

  /**
   * 删除用户跨产品白名单模板
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
   * 删除用户跨产品白名单模板
   * 
   * @param request - DeleteSecurityIPGroupRequest
   * @returns DeleteSecurityIPGroupResponse
   */
  async deleteSecurityIPGroup(request: $_model.DeleteSecurityIPGroupRequest): Promise<$_model.DeleteSecurityIPGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSecurityIPGroupWithOptions(request, runtime);
  }

  /**
   * Deletes the metadata of a stopped DBGateway.
   * 
   * @remarks
   *   This operation is used to delete the metadata of a DBGateway that is released in a stress testing task created by calling the [CreateCloudBenchTasks](https://help.aliyun.com/document_detail/230665.html) operation.
   * *   If you use an SDK to call API operations of Database Autonomy Service (DAS), you must set the region ID to cn-shanghai.
   * >  If the heartbeat is lost between a DBGateway and the access point for more than 20 seconds, the DBGateway is considered stopped.
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
   * Deletes the metadata of a stopped DBGateway.
   * 
   * @remarks
   *   This operation is used to delete the metadata of a DBGateway that is released in a stress testing task created by calling the [CreateCloudBenchTasks](https://help.aliyun.com/document_detail/230665.html) operation.
   * *   If you use an SDK to call API operations of Database Autonomy Service (DAS), you must set the region ID to cn-shanghai.
   * >  If the heartbeat is lost between a DBGateway and the access point for more than 20 seconds, the DBGateway is considered stopped.
   * 
   * @param request - DeleteStopGatewayRequest
   * @returns DeleteStopGatewayResponse
   */
  async deleteStopGateway(request: $_model.DeleteStopGatewayRequest): Promise<$_model.DeleteStopGatewayResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteStopGatewayWithOptions(request, runtime);
  }

  /**
   * Queries the configurations of the auto scaling feature for an instance.
   * 
   * @remarks
   * Before you call this operation, take note of the following items:
   * *   If you use an Alibaba Cloud SDK or a Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
   * *   If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
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
   * Queries the configurations of the auto scaling feature for an instance.
   * 
   * @remarks
   * Before you call this operation, take note of the following items:
   * *   If you use an Alibaba Cloud SDK or a Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
   * *   If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
   * 
   * @param request - DescribeAutoScalingConfigRequest
   * @returns DescribeAutoScalingConfigResponse
   */
  async describeAutoScalingConfig(request: $_model.DescribeAutoScalingConfigRequest): Promise<$_model.DescribeAutoScalingConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAutoScalingConfigWithOptions(request, runtime);
  }

  /**
   * Queries the auto scaling history of an instance.
   * 
   * @remarks
   *   You can call this operation to query the history information about the automatic performance scaling only of ApsaraDB RDS for MySQL High-availability Edition instances.
   * *   If you use an Alibaba Cloud SDK or Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
   * *   If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
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
   * Queries the auto scaling history of an instance.
   * 
   * @remarks
   *   You can call this operation to query the history information about the automatic performance scaling only of ApsaraDB RDS for MySQL High-availability Edition instances.
   * *   If you use an Alibaba Cloud SDK or Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
   * *   If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
   * 
   * @param request - DescribeAutoScalingHistoryRequest
   * @returns DescribeAutoScalingHistoryResponse
   */
  async describeAutoScalingHistory(request: $_model.DescribeAutoScalingHistoryRequest): Promise<$_model.DescribeAutoScalingHistoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAutoScalingHistoryWithOptions(request, runtime);
  }

  /**
   * Queries the details of a cache analysis task.
   * 
   * @remarks
   * Before you call this operation, take note of the following items:
   * *   If you use an Alibaba Cloud SDK or a Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
   * *   If you use an SDK to call the API operations of DAS, you must set the region ID to cn-shanghai.
   * *   This operation is applicable only to ApsaraDB for Redis.
   * >  You can call this operation to query the top 500 keys in a cache analysis task.
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
   * Queries the details of a cache analysis task.
   * 
   * @remarks
   * Before you call this operation, take note of the following items:
   * *   If you use an Alibaba Cloud SDK or a Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
   * *   If you use an SDK to call the API operations of DAS, you must set the region ID to cn-shanghai.
   * *   This operation is applicable only to ApsaraDB for Redis.
   * >  You can call this operation to query the top 500 keys in a cache analysis task.
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
   * *   If you use an Alibaba Cloud SDK or a Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
   * *   If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
   * *   This operation is applicable only to ApsaraDB for Redis.
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
   * *   If you use an Alibaba Cloud SDK or a Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
   * *   If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
   * *   This operation is applicable only to ApsaraDB for Redis.
   * 
   * @param request - DescribeCacheAnalysisJobsRequest
   * @returns DescribeCacheAnalysisJobsResponse
   */
  async describeCacheAnalysisJobs(request: $_model.DescribeCacheAnalysisJobsRequest): Promise<$_model.DescribeCacheAnalysisJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCacheAnalysisJobsWithOptions(request, runtime);
  }

  /**
   * Queries stress testing tasks.
   * 
   * @remarks
   * Database Autonomy Service (DAS) provides the intelligent stress testing feature. This feature helps you check whether your instance needs to be scaled up to effectively handle traffic spikes. For more information, see [Intelligent stress testing](https://help.aliyun.com/document_detail/155068.html).
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
   * Queries stress testing tasks.
   * 
   * @remarks
   * Database Autonomy Service (DAS) provides the intelligent stress testing feature. This feature helps you check whether your instance needs to be scaled up to effectively handle traffic spikes. For more information, see [Intelligent stress testing](https://help.aliyun.com/document_detail/155068.html).
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
   * Database Autonomy Service (DAS) provides the intelligent stress testing feature. This feature helps you check whether you need to scale up your database instance to handle workloads during peak hours. For more information, see [Intelligent stress testing](https://help.aliyun.com/document_detail/155068.html).
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
   * Database Autonomy Service (DAS) provides the intelligent stress testing feature. This feature helps you check whether you need to scale up your database instance to handle workloads during peak hours. For more information, see [Intelligent stress testing](https://help.aliyun.com/document_detail/155068.html).
   * 
   * @param request - DescribeCloudbenchTaskRequest
   * @returns DescribeCloudbenchTaskResponse
   */
  async describeCloudbenchTask(request: $_model.DescribeCloudbenchTaskRequest): Promise<$_model.DescribeCloudbenchTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCloudbenchTaskWithOptions(request, runtime);
  }

  /**
   * Queries the configurations of a stress testing task.
   * 
   * @remarks
   * Database Autonomy Service (DAS) provides the intelligent stress testing feature. This feature helps you check whether your instance needs to be scaled up to effectively handle traffic spikes. For more information, see [Intelligent stress testing](https://help.aliyun.com/document_detail/155068.html).
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
   * Queries the configurations of a stress testing task.
   * 
   * @remarks
   * Database Autonomy Service (DAS) provides the intelligent stress testing feature. This feature helps you check whether your instance needs to be scaled up to effectively handle traffic spikes. For more information, see [Intelligent stress testing](https://help.aliyun.com/document_detail/155068.html).
   * 
   * @param request - DescribeCloudbenchTaskConfigRequest
   * @returns DescribeCloudbenchTaskConfigResponse
   */
  async describeCloudbenchTaskConfig(request: $_model.DescribeCloudbenchTaskConfigRequest): Promise<$_model.DescribeCloudbenchTaskConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCloudbenchTaskConfigWithOptions(request, runtime);
  }

  /**
   * Queries diagnostics reports.
   * 
   * @remarks
   * Before you call this operation, take note of the following items:
   * *   If you use an Alibaba Cloud SDK or a Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
   * *   If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
   * *   This operation is applicable to the following database engines:
   *     *   ApsaraDB RDS for MySQL
   *     *   PolarDB for MySQL
   *     *   ApsaraDB for Redis
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
   * *   If you use an Alibaba Cloud SDK or a Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
   * *   If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
   * *   This operation is applicable to the following database engines:
   *     *   ApsaraDB RDS for MySQL
   *     *   PolarDB for MySQL
   *     *   ApsaraDB for Redis
   * 
   * @param request - DescribeDiagnosticReportListRequest
   * @returns DescribeDiagnosticReportListResponse
   */
  async describeDiagnosticReportList(request: $_model.DescribeDiagnosticReportListRequest): Promise<$_model.DescribeDiagnosticReportListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDiagnosticReportListWithOptions(request, runtime);
  }

  /**
   * 查询实例错误日志
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
   * 查询实例错误日志
   * 
   * @param request - DescribeErrorLogRecordsRequest
   * @returns DescribeErrorLogRecordsResponse
   */
  async describeErrorLogRecords(request: $_model.DescribeErrorLogRecordsRequest): Promise<$_model.DescribeErrorLogRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeErrorLogRecordsWithOptions(request, runtime);
  }

  /**
   * Queries the hot keys and the large keys in the memory in real time.
   * 
   * @remarks
   * This operation sorts list, hash, set, and zset keys based on the number of elements contained in these keys. The top three keys that contain the most elements are considered large keys. If the number of queries per second (QPS) of a key is greater than 3,000, the key is considered a hot key.
   * *   If you use an Alibaba Cloud SDK, make sure that the aliyun-sdk-core version is later than 4.3.3. We recommend that you use the latest version.
   * *   The version of Database Autonomy Service (DAS) SDK must be 1.0.2 or later.
   * *   If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
   * *   This operation is available only for ApsaraDB for Redis instances that meet the following requirements:
   *     *   The instance is a Community Edition instance that uses a major version of 5.0 or later or a performance-enhanced instance of the Enhanced Edition (Tair).
   *     *   The ApsaraDB for Redis instance is updated to the latest minor version.
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
   * Queries the hot keys and the large keys in the memory in real time.
   * 
   * @remarks
   * This operation sorts list, hash, set, and zset keys based on the number of elements contained in these keys. The top three keys that contain the most elements are considered large keys. If the number of queries per second (QPS) of a key is greater than 3,000, the key is considered a hot key.
   * *   If you use an Alibaba Cloud SDK, make sure that the aliyun-sdk-core version is later than 4.3.3. We recommend that you use the latest version.
   * *   The version of Database Autonomy Service (DAS) SDK must be 1.0.2 or later.
   * *   If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
   * *   This operation is available only for ApsaraDB for Redis instances that meet the following requirements:
   *     *   The instance is a Community Edition instance that uses a major version of 5.0 or later or a performance-enhanced instance of the Enhanced Edition (Tair).
   *     *   The ApsaraDB for Redis instance is updated to the latest minor version.
   * 
   * @param request - DescribeHotBigKeysRequest
   * @returns DescribeHotBigKeysResponse
   */
  async describeHotBigKeys(request: $_model.DescribeHotBigKeysRequest): Promise<$_model.DescribeHotBigKeysResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeHotBigKeysWithOptions(request, runtime);
  }

  /**
   * Queries the hot keys of an ApsaraDB for Redis instance.
   * 
   * @remarks
   * Before you call this operation, take note of the following items:
   * *   If you use an Alibaba Cloud SDK, make sure that the aliyun-sdk-core version is later than V4.3.3. We recommend that you use the latest version.
   * *   The version of your Database Autonomy Service (DAS) SDK must be V1.0.2 or later.
   * *   If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
   * *   This operation is applicable only to ApsaraDB for Redis instances that meet the following requirements:
   *     *   The ApsaraDB for Redis instance is a Community Edition instance that uses a major version of 4.0 or later or a performance-enhanced instance of the Enhanced Edition (Tair).
   *     *   The ApsaraDB for Redis instance is updated to the latest minor version.
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
   * Queries the hot keys of an ApsaraDB for Redis instance.
   * 
   * @remarks
   * Before you call this operation, take note of the following items:
   * *   If you use an Alibaba Cloud SDK, make sure that the aliyun-sdk-core version is later than V4.3.3. We recommend that you use the latest version.
   * *   The version of your Database Autonomy Service (DAS) SDK must be V1.0.2 or later.
   * *   If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
   * *   This operation is applicable only to ApsaraDB for Redis instances that meet the following requirements:
   *     *   The ApsaraDB for Redis instance is a Community Edition instance that uses a major version of 4.0 or later or a performance-enhanced instance of the Enhanced Edition (Tair).
   *     *   The ApsaraDB for Redis instance is updated to the latest minor version.
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
   *   For more information about the database instances that support DAS Enterprise Edition, see [Overview of DAS Enterprise Edition](https://help.aliyun.com/document_detail/190912.html).
   * *   If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
   * *   This operation is applicable only to DAS Enterprise Edition V1 and V2.
   * >  We recommend that you call the [DescribeSqlLogConfig](https://help.aliyun.com/document_detail/2778837.html) operation to query the DAS Enterprise Edition configurations of a database instance.
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
   *   For more information about the database instances that support DAS Enterprise Edition, see [Overview of DAS Enterprise Edition](https://help.aliyun.com/document_detail/190912.html).
   * *   If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
   * *   This operation is applicable only to DAS Enterprise Edition V1 and V2.
   * >  We recommend that you call the [DescribeSqlLogConfig](https://help.aliyun.com/document_detail/2778837.html) operation to query the DAS Enterprise Edition configurations of a database instance.
   * 
   * @param request - DescribeInstanceDasProRequest
   * @returns DescribeInstanceDasProResponse
   */
  async describeInstanceDasPro(request: $_model.DescribeInstanceDasProRequest): Promise<$_model.DescribeInstanceDasProResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceDasProWithOptions(request, runtime);
  }

  /**
   * 获取执行计划
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
   * 获取执行计划
   * 
   * @param request - DescribeQueryExplainRequest
   * @returns DescribeQueryExplainResponse
   */
  async describeQueryExplain(request: $_model.DescribeQueryExplainRequest): Promise<$_model.DescribeQueryExplainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeQueryExplainWithOptions(request, runtime);
  }

  /**
   * 展示用户跨产品白名单模板具体信息
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
   * 展示用户跨产品白名单模板具体信息
   * 
   * @param request - DescribeSecurityIPGroupRequest
   * @returns DescribeSecurityIPGroupResponse
   */
  async describeSecurityIPGroup(request: $_model.DescribeSecurityIPGroupRequest): Promise<$_model.DescribeSecurityIPGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSecurityIPGroupWithOptions(request, runtime);
  }

  /**
   * 展示用户跨产品白名单模板与实例绑定信息
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
   * 展示用户跨产品白名单模板与实例绑定信息
   * 
   * @param request - DescribeSecurityIPGroupRelationRequest
   * @returns DescribeSecurityIPGroupRelationResponse
   */
  async describeSecurityIPGroupRelation(request: $_model.DescribeSecurityIPGroupRelationRequest): Promise<$_model.DescribeSecurityIPGroupRelationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSecurityIPGroupRelationWithOptions(request, runtime);
  }

  /**
   * DescribeSlowLogHistogramAsync
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
   * DescribeSlowLogHistogramAsync
   * 
   * @param request - DescribeSlowLogHistogramAsyncRequest
   * @returns DescribeSlowLogHistogramAsyncResponse
   */
  async describeSlowLogHistogramAsync(request: $_model.DescribeSlowLogHistogramAsyncRequest): Promise<$_model.DescribeSlowLogHistogramAsyncResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSlowLogHistogramAsyncWithOptions(request, runtime);
  }

  /**
   * 查看慢日志明细接口
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
   * 查看慢日志明细接口
   * 
   * @param request - DescribeSlowLogRecordsRequest
   * @returns DescribeSlowLogRecordsResponse
   */
  async describeSlowLogRecords(request: $_model.DescribeSlowLogRecordsRequest): Promise<$_model.DescribeSlowLogRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSlowLogRecordsWithOptions(request, runtime);
  }

  /**
   * 慢日志统计信息
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
   * 慢日志统计信息
   * 
   * @param request - DescribeSlowLogStatisticRequest
   * @returns DescribeSlowLogStatisticResponse
   */
  async describeSlowLogStatistic(request: $_model.DescribeSlowLogStatisticRequest): Promise<$_model.DescribeSlowLogStatisticResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSlowLogStatisticWithOptions(request, runtime);
  }

  /**
   * Queries the configurations of Database Autonomy Service (DAS) Enterprise Edition that is enabled for a database instance.
   * 
   * @remarks
   * Before you call this operation, take note of the following items:
   * *   If you use an Alibaba Cloud SDK or a DAS SDK to call this operation, we recommend that you use the latest version of the SDK.
   * *   If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
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
   * Queries the configurations of Database Autonomy Service (DAS) Enterprise Edition that is enabled for a database instance.
   * 
   * @remarks
   * Before you call this operation, take note of the following items:
   * *   If you use an Alibaba Cloud SDK or a DAS SDK to call this operation, we recommend that you use the latest version of the SDK.
   * *   If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
   * 
   * @param request - DescribeSqlLogConfigRequest
   * @returns DescribeSqlLogConfigResponse
   */
  async describeSqlLogConfig(request: $_model.DescribeSqlLogConfigRequest): Promise<$_model.DescribeSqlLogConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSqlLogConfigWithOptions(request, runtime);
  }

  /**
   * Queries the log details of a database instance for which Database Autonomy Service (DAS) Enterprise Edition is enabled.
   * 
   * @remarks
   * Before you call this operation, take note of the following items:
   * *   If you use an Alibaba Cloud SDK or DAS SDK to call this operation, we recommend that you use the latest version of the SDK.
   * *   If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
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
   * Queries the log details of a database instance for which Database Autonomy Service (DAS) Enterprise Edition is enabled.
   * 
   * @remarks
   * Before you call this operation, take note of the following items:
   * *   If you use an Alibaba Cloud SDK or DAS SDK to call this operation, we recommend that you use the latest version of the SDK.
   * *   If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
   * 
   * @param request - DescribeSqlLogRecordsRequest
   * @returns DescribeSqlLogRecordsResponse
   */
  async describeSqlLogRecords(request: $_model.DescribeSqlLogRecordsRequest): Promise<$_model.DescribeSqlLogRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSqlLogRecordsWithOptions(request, runtime);
  }

  /**
   * Queries the statistics of Database Autonomy Service (DAS) Enterprise Edition.
   * 
   * @remarks
   * Before you call this operation, take note of the following items:
   * *   If you use an Alibaba Cloud SDK or a DAS SDK to call this operation, we recommend that you use the latest version of the SDK.
   * *   If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
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
   * Queries the statistics of Database Autonomy Service (DAS) Enterprise Edition.
   * 
   * @remarks
   * Before you call this operation, take note of the following items:
   * *   If you use an Alibaba Cloud SDK or a DAS SDK to call this operation, we recommend that you use the latest version of the SDK.
   * *   If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
   * 
   * @param request - DescribeSqlLogStatisticRequest
   * @returns DescribeSqlLogStatisticResponse
   */
  async describeSqlLogStatistic(request: $_model.DescribeSqlLogStatisticRequest): Promise<$_model.DescribeSqlLogStatisticResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSqlLogStatisticWithOptions(request, runtime);
  }

  /**
   * Queries the details of an offline task in Database Autonomy Service (DAS) Enterprise Edition.
   * 
   * @remarks
   * Before you call this operation, take note of the following items:
   * *   If you use an Alibaba Cloud SDK or a DAS SDK to call this operation, we recommend that you use the latest version of the SDK.
   * *   If you use an SDK to call the API operations of DAS, you must set the region ID to cn-shanghai.
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
   * Queries the details of an offline task in Database Autonomy Service (DAS) Enterprise Edition.
   * 
   * @remarks
   * Before you call this operation, take note of the following items:
   * *   If you use an Alibaba Cloud SDK or a DAS SDK to call this operation, we recommend that you use the latest version of the SDK.
   * *   If you use an SDK to call the API operations of DAS, you must set the region ID to cn-shanghai.
   * 
   * @param request - DescribeSqlLogTaskRequest
   * @returns DescribeSqlLogTaskResponse
   */
  async describeSqlLogTask(request: $_model.DescribeSqlLogTaskRequest): Promise<$_model.DescribeSqlLogTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSqlLogTaskWithOptions(request, runtime);
  }

  /**
   * Queries the audit log tasks of a database instance.
   * 
   * @remarks
   * Before you call this operation, take note of the following items:
   * *   If you use an Alibaba Cloud SDK or a DAS SDK to call this operation, we recommend that you use the latest version of the SDK.
   * *   If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
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
   * Queries the audit log tasks of a database instance.
   * 
   * @remarks
   * Before you call this operation, take note of the following items:
   * *   If you use an Alibaba Cloud SDK or a DAS SDK to call this operation, we recommend that you use the latest version of the SDK.
   * *   If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
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
   * *   If you use an Alibaba Cloud SDK, make sure that the aliyun-sdk-core version is later than 4.3.3. We recommend that you use the latest version.
   * *   The version of Database Autonomy Service (DAS) SDK must be 1.0.2 or later.
   * *   If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
   * *   This operation is available only for an ApsaraDB for Redis instance of one of the following versions:
   *     *   The instance is ApsaraDB for Redis Community Edition instances that use a major version of 5.0 or later or a performance-enhanced instance of the ApsaraDB for Redis Enhanced Edition (Tair).
   *     *   The ApsaraDB for Redis instance is updated to the latest minor version.
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
   * *   If you use an Alibaba Cloud SDK, make sure that the aliyun-sdk-core version is later than 4.3.3. We recommend that you use the latest version.
   * *   The version of Database Autonomy Service (DAS) SDK must be 1.0.2 or later.
   * *   If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
   * *   This operation is available only for an ApsaraDB for Redis instance of one of the following versions:
   *     *   The instance is ApsaraDB for Redis Community Edition instances that use a major version of 5.0 or later or a performance-enhanced instance of the ApsaraDB for Redis Enhanced Edition (Tair).
   *     *   The ApsaraDB for Redis instance is updated to the latest minor version.
   * 
   * @param request - DescribeTopBigKeysRequest
   * @returns DescribeTopBigKeysResponse
   */
  async describeTopBigKeys(request: $_model.DescribeTopBigKeysRequest): Promise<$_model.DescribeTopBigKeysResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTopBigKeysWithOptions(request, runtime);
  }

  /**
   * Queries the top 100 hotkeys over a period of time.
   * 
   * @remarks
   * If the number of queries per second (QPS) of a key is greater than 3,000, the key is considered a hot key.
   * *   If you use an Alibaba Cloud SDK, make sure that the aliyun-sdk-core version is later than 4.3.3. We recommend that you use the latest version.
   * *   The version of Database Autonomy Service (DAS) SDK must be 1.0.2 or later.
   * *   If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
   * *   This operation is available only for an ApsaraDB for Redis instance of one of the following versions:
   *     *   The instance is a Community Edition instance that uses a major version of 4.0 or later or a performance-enhanced instance of the Enhanced Edition (Tair).
   *     *   The ApsaraDB for Redis instance is updated to the latest minor version.
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
   * Queries the top 100 hotkeys over a period of time.
   * 
   * @remarks
   * If the number of queries per second (QPS) of a key is greater than 3,000, the key is considered a hot key.
   * *   If you use an Alibaba Cloud SDK, make sure that the aliyun-sdk-core version is later than 4.3.3. We recommend that you use the latest version.
   * *   The version of Database Autonomy Service (DAS) SDK must be 1.0.2 or later.
   * *   If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
   * *   This operation is available only for an ApsaraDB for Redis instance of one of the following versions:
   *     *   The instance is a Community Edition instance that uses a major version of 4.0 or later or a performance-enhanced instance of the Enhanced Edition (Tair).
   *     *   The ApsaraDB for Redis instance is updated to the latest minor version.
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
   * *   ApsaraDB RDS for MySQL
   * *   PolarDB for MySQL
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
   * *   ApsaraDB RDS for MySQL
   * *   PolarDB for MySQL
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
   *   For more information about the database instances that support DAS Enterprise Edition, see [Overview](https://help.aliyun.com/document_detail/190912.html).
   * *   If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
   * *   This operation is applicable only to DAS Enterprise Edition V1.
   * >  We recommend that you call the [ModifySqlLogConfig](https://help.aliyun.com/document_detail/2778835.html) operation to enable or disable DAS Enterprise Edition for a database instance. For more information about the databases and regions supported by each version of DAS Enterprise Edition, see [Editions and supported features](https://help.aliyun.com/document_detail/156204.html).
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
   *   For more information about the database instances that support DAS Enterprise Edition, see [Overview](https://help.aliyun.com/document_detail/190912.html).
   * *   If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
   * *   This operation is applicable only to DAS Enterprise Edition V1.
   * >  We recommend that you call the [ModifySqlLogConfig](https://help.aliyun.com/document_detail/2778835.html) operation to enable or disable DAS Enterprise Edition for a database instance. For more information about the databases and regions supported by each version of DAS Enterprise Edition, see [Editions and supported features](https://help.aliyun.com/document_detail/156204.html).
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
   * *   If you use Alibaba Cloud SDK or Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
   * *   If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
   * *   This operation is applicable only to ApsaraDB for Redis instances.
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
   * *   If you use Alibaba Cloud SDK or Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
   * *   If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
   * *   This operation is applicable only to ApsaraDB for Redis instances.
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
   * *   ApsaraDB RDS for MySQL
   * *   PolarDB for MySQL
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
   * *   ApsaraDB RDS for MySQL
   * *   PolarDB for MySQL
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
   *   If you use an SDK to call the API operations of DAS, you must set the region ID to cn-shanghai.
   * *   This operation is applicable only to DAS Enterprise Edition V1.
   * >  We recommend that you call the [ModifySqlLogConfig](https://help.aliyun.com/document_detail/2778835.html) operation to activate or deactivate DAS Enterprise Edition for a database instance. For more information about the databases and regions supported by each version of DAS Enterprise Edition, see [DAS editions and supported features](https://help.aliyun.com/document_detail/156204.html).
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
   *   If you use an SDK to call the API operations of DAS, you must set the region ID to cn-shanghai.
   * *   This operation is applicable only to DAS Enterprise Edition V1.
   * >  We recommend that you call the [ModifySqlLogConfig](https://help.aliyun.com/document_detail/2778835.html) operation to activate or deactivate DAS Enterprise Edition for a database instance. For more information about the databases and regions supported by each version of DAS Enterprise Edition, see [DAS editions and supported features](https://help.aliyun.com/document_detail/156204.html).
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
   * *   ApsaraDB RDS for MySQL
   * *   PolarDB for MySQL
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
   * *   ApsaraDB RDS for MySQL
   * *   PolarDB for MySQL
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
   * >  GetAsyncErrorRequestListByCode is an asynchronous operation. After a request is sent, the complete results are not returned immediately. If the value of the **isFinish** parameter is **false** in the response, wait for 1 second and then send a request again. If the value of the **isFinish** parameter is **true**, the complete results are returned.
   * *   This API operation supports only ApsaraDB RDS for MySQL instances and PolarDB for MySQL clusters for which Database Autonomy Service (DAS) Enterprise Edition is enabled. For more information, see [Enable and manage DAS Economy Edition and DAS Enterprise Edition](https://help.aliyun.com/document_detail/163298.html).
   * *   If you use an SDK to call the API operations of DAS, you must set the region ID to cn-shanghai.
   * *   When you call this operation, the value of the SqlId parameter changes due to the optimization of the SQL template algorithm starting from September 1, 2024. For more information, see [[Notice\\] Optimization of the SQL template algorithm](~~2845725~~).
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
   * >  GetAsyncErrorRequestListByCode is an asynchronous operation. After a request is sent, the complete results are not returned immediately. If the value of the **isFinish** parameter is **false** in the response, wait for 1 second and then send a request again. If the value of the **isFinish** parameter is **true**, the complete results are returned.
   * *   This API operation supports only ApsaraDB RDS for MySQL instances and PolarDB for MySQL clusters for which Database Autonomy Service (DAS) Enterprise Edition is enabled. For more information, see [Enable and manage DAS Economy Edition and DAS Enterprise Edition](https://help.aliyun.com/document_detail/163298.html).
   * *   If you use an SDK to call the API operations of DAS, you must set the region ID to cn-shanghai.
   * *   When you call this operation, the value of the SqlId parameter changes due to the optimization of the SQL template algorithm starting from September 1, 2024. For more information, see [[Notice\\] Optimization of the SQL template algorithm](~~2845725~~).
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
   * >  GetAsyncErrorRequestStatByCode is an asynchronous operation After a request is sent, the complete results are not returned immediately. If the value of **isFinish** is **false** in the response, wait for 1 second and then send a request again. If the value of **isFinish** is **true**, the complete results are returned.
   * *   This API operation supports only ApsaraDB RDS for MySQL instances and PolarDB for MySQL clusters for which Database Autonomy Service (DAS) Enterprise Edition is enabled. For more information, see [Purchase DAS Enterprise Edition](https://help.aliyun.com/document_detail/163298.html).
   * *   If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
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
   * >  GetAsyncErrorRequestStatByCode is an asynchronous operation After a request is sent, the complete results are not returned immediately. If the value of **isFinish** is **false** in the response, wait for 1 second and then send a request again. If the value of **isFinish** is **true**, the complete results are returned.
   * *   This API operation supports only ApsaraDB RDS for MySQL instances and PolarDB for MySQL clusters for which Database Autonomy Service (DAS) Enterprise Edition is enabled. For more information, see [Purchase DAS Enterprise Edition](https://help.aliyun.com/document_detail/163298.html).
   * *   If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
   * 
   * @param request - GetAsyncErrorRequestStatByCodeRequest
   * @returns GetAsyncErrorRequestStatByCodeResponse
   */
  async getAsyncErrorRequestStatByCode(request: $_model.GetAsyncErrorRequestStatByCodeRequest): Promise<$_model.GetAsyncErrorRequestStatByCodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAsyncErrorRequestStatByCodeWithOptions(request, runtime);
  }

  /**
   * Asynchronously obtains the number of failed executions of SQL templates based on SQL Explorer data.
   * 
   * @remarks
   * >  GetAsyncErrorRequestStatResult is an asynchronous operation. After a request is sent, the complete results are not returned immediately. If the value of **isFinish** is **false** in the response, wait for 1 second and then send a request again. If the value of **isFinish** is **true**, the complete results are returned.
   * *   This API operation supports only ApsaraDB RDS for MySQL instances and PolarDB for MySQL clusters for which Database Autonomy Service (DAS) Enterprise Edition is enabled. For more information, see [Purchase DAS Enterprise Edition](https://help.aliyun.com/document_detail/163298.html).
   * *   If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
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
   * Asynchronously obtains the number of failed executions of SQL templates based on SQL Explorer data.
   * 
   * @remarks
   * >  GetAsyncErrorRequestStatResult is an asynchronous operation. After a request is sent, the complete results are not returned immediately. If the value of **isFinish** is **false** in the response, wait for 1 second and then send a request again. If the value of **isFinish** is **true**, the complete results are returned.
   * *   This API operation supports only ApsaraDB RDS for MySQL instances and PolarDB for MySQL clusters for which Database Autonomy Service (DAS) Enterprise Edition is enabled. For more information, see [Purchase DAS Enterprise Edition](https://help.aliyun.com/document_detail/163298.html).
   * *   If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
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
   *   This operation is applicable only to ApsaraDB RDS for MySQL instances and PolarDB for MySQL clusters.
   * *   If you use an Alibaba Cloud SDK or Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
   * *   If you use an SDK to call DAS, you must set the region to cn-shanghai.
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
   *   This operation is applicable only to ApsaraDB RDS for MySQL instances and PolarDB for MySQL clusters.
   * *   If you use an Alibaba Cloud SDK or Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
   * *   If you use an SDK to call DAS, you must set the region to cn-shanghai.
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
   * *   If you use an SDK to call API operations of Database Autonomy Service (DAS), you must set the region ID to cn-shanghai.
   * *   The database instance is an ApsaraDB RDS for MySQL instance of High-availability Edition.
   * *   The database instance has four or more cores, and **innodb_file_per_table** is set to **ON**.
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
   * *   If you use an SDK to call API operations of Database Autonomy Service (DAS), you must set the region ID to cn-shanghai.
   * *   The database instance is an ApsaraDB RDS for MySQL instance of High-availability Edition.
   * *   The database instance has four or more cores, and **innodb_file_per_table** is set to **ON**.
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
   * *   If you use an SDK to call API operations of Database Autonomy Service (DAS), you must set the region ID to cn-shanghai.
   * *   The database instance that you want to manage must be of one of the following types:
   *     *   ApsaraDB RDS for MySQL High-availability Edition or Enterprise Edition that runs MySQL 5.6, MySQL 5.7, or MySQL 8.0
   *     *   PolarDB for MySQL Cluster Edition that runs MySQL 5.6, MySQL 5.7, or MySQL 8.0
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
   * *   If you use an SDK to call API operations of Database Autonomy Service (DAS), you must set the region ID to cn-shanghai.
   * *   The database instance that you want to manage must be of one of the following types:
   *     *   ApsaraDB RDS for MySQL High-availability Edition or Enterprise Edition that runs MySQL 5.6, MySQL 5.7, or MySQL 8.0
   *     *   PolarDB for MySQL Cluster Edition that runs MySQL 5.6, MySQL 5.7, or MySQL 8.0
   * 
   * @param request - GetAutoThrottleRulesRequest
   * @returns GetAutoThrottleRulesResponse
   */
  async getAutoThrottleRules(request: $_model.GetAutoThrottleRulesRequest): Promise<$_model.GetAutoThrottleRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAutoThrottleRulesWithOptions(request, runtime);
  }

  /**
   * Queries the details of notification events of a database instance.
   * 
   * @remarks
   * Before you call this operation, take note of the following items:
   * *   If you use Alibaba Cloud SDK or Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
   * *   If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
   * *   After your instance is connected to DAS, notification events such as snapshot capture are triggered if DAS detects changes to database monitoring metrics during anomaly detection.
   * >  You can query the details of notification events only if the autonomy center is enabled. For more information, see [Autonomy center](https://help.aliyun.com/document_detail/152139.html).
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
   * Queries the details of notification events of a database instance.
   * 
   * @remarks
   * Before you call this operation, take note of the following items:
   * *   If you use Alibaba Cloud SDK or Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
   * *   If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
   * *   After your instance is connected to DAS, notification events such as snapshot capture are triggered if DAS detects changes to database monitoring metrics during anomaly detection.
   * >  You can query the details of notification events only if the autonomy center is enabled. For more information, see [Autonomy center](https://help.aliyun.com/document_detail/152139.html).
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
   * *   If you use Alibaba Cloud SDK or Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
   * *   If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
   * *   After your instance is connected to DAS, notification events such as snapshot capture are triggered if DAS detects changes to database monitoring metrics during anomaly detection.
   * >  You can query the details of notification events only if the autonomy center is enabled. For more information, see [Autonomy center](https://help.aliyun.com/document_detail/152139.html).
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
   * *   If you use Alibaba Cloud SDK or Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
   * *   If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
   * *   After your instance is connected to DAS, notification events such as snapshot capture are triggered if DAS detects changes to database monitoring metrics during anomaly detection.
   * >  You can query the details of notification events only if the autonomy center is enabled. For more information, see [Autonomy center](https://help.aliyun.com/document_detail/152139.html).
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
   *   This operation is applicable only to ApsaraDB RDS for SQL Server instances.
   * *   If you use an Alibaba Cloud SDK or Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
   * *   If you use an SDK to call the API operations of DAS, you must set the region ID to cn-shanghai.
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
   *   This operation is applicable only to ApsaraDB RDS for SQL Server instances.
   * *   If you use an Alibaba Cloud SDK or Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
   * *   If you use an SDK to call the API operations of DAS, you must set the region ID to cn-shanghai.
   * 
   * @param request - GetBlockingDetailListRequest
   * @returns GetBlockingDetailListResponse
   */
  async getBlockingDetailList(request: $_model.GetBlockingDetailListRequest): Promise<$_model.GetBlockingDetailListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getBlockingDetailListWithOptions(request, runtime);
  }

  /**
   * Queries the diagnosis of network connectivity when a user accesses a specific database instance by specifying an IP address.
   * 
   * @remarks
   * Before you call this operation, take note of the following items:
   * *   If you use an Alibaba Cloud SDK or Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
   * *   If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
   * *   The database instance that you want to manage is connected to DAS.
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
   * Queries the diagnosis of network connectivity when a user accesses a specific database instance by specifying an IP address.
   * 
   * @remarks
   * Before you call this operation, take note of the following items:
   * *   If you use an Alibaba Cloud SDK or Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
   * *   If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
   * *   The database instance that you want to manage is connected to DAS.
   * 
   * @param request - GetDBInstanceConnectivityDiagnosisRequest
   * @returns GetDBInstanceConnectivityDiagnosisResponse
   */
  async getDBInstanceConnectivityDiagnosis(request: $_model.GetDBInstanceConnectivityDiagnosisRequest): Promise<$_model.GetDBInstanceConnectivityDiagnosisResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDBInstanceConnectivityDiagnosisWithOptions(request, runtime);
  }

  /**
   * DAS大模型能力异步逻辑接口
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
      let data = JSON.parse(resp.event.data);
      yield $dara.cast<$_model.GetDasAgentSSEResponse>({
        statusCode: resp.statusCode,
        headers: resp.headers,
        body: {
          ...data,
          RequestId: resp.event.id,
          Message: resp.event.event,
        },
      }, new $_model.GetDasAgentSSEResponse({}));
    }
  }

  /**
   * DAS大模型能力异步逻辑接口
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
   * DAS大模型能力异步逻辑接口
   * 
   * @param request - GetDasAgentSSERequest
   * @returns GetDasAgentSSEResponse
   */
  async getDasAgentSSE(request: $_model.GetDasAgentSSERequest): Promise<$_model.GetDasAgentSSEResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDasAgentSSEWithOptions(request, runtime);
  }

  /**
   * Queries the storage usage of a database instance for which Database Autonomy Service (DAS) Enterprise Edition V1 or V2 is enabled.
   * 
   * @remarks
   *   For information about the database instances that support this operation, see [Overview of DAS Enterprise Edition](https://help.aliyun.com/document_detail/190912.html).
   * *   If you use an Alibaba Cloud SDK or DAS SDK to call this operation, we recommend that you use the latest version of the SDK.
   * *   If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
   * *   This operation is applicable only to DAS Enterprise Edition V1 and V2.
   * >  We recommend that you call the [DescribeSqlLogStatistic](https://help.aliyun.com/document_detail/2778836.html) operation to query the data statistics of a database instance for which DAS Enterprise Edition is enabled.
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
   * Queries the storage usage of a database instance for which Database Autonomy Service (DAS) Enterprise Edition V1 or V2 is enabled.
   * 
   * @remarks
   *   For information about the database instances that support this operation, see [Overview of DAS Enterprise Edition](https://help.aliyun.com/document_detail/190912.html).
   * *   If you use an Alibaba Cloud SDK or DAS SDK to call this operation, we recommend that you use the latest version of the SDK.
   * *   If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
   * *   This operation is applicable only to DAS Enterprise Edition V1 and V2.
   * >  We recommend that you call the [DescribeSqlLogStatistic](https://help.aliyun.com/document_detail/2778836.html) operation to query the data statistics of a database instance for which DAS Enterprise Edition is enabled.
   * 
   * @param request - GetDasProServiceUsageRequest
   * @returns GetDasProServiceUsageResponse
   */
  async getDasProServiceUsage(request: $_model.GetDasProServiceUsageRequest): Promise<$_model.GetDasProServiceUsageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDasProServiceUsageWithOptions(request, runtime);
  }

  /**
   * Queries the hot data of audit logs.
   * 
   * @remarks
   * Before you call this operation, take note of the following items:
   * *   If you use an Alibaba Cloud SDK or DAS SDK to call this operation, we recommend that you use the latest version of the SDK.
   * *   If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
   * *   This operation is applicable to PolarDB for MySQL, ApsaraDB RDS for MySQL, ApsaraDB RDS for PostgreSQL, and ApsaraDB RDS for SQL Server.
   * >  The beginning of the time range to query can be up to seven days earlier than the current time. The interval between the start time and the end time cannot exceed one day. This operation can return a maximum of 10,000 entries.
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
   * Queries the hot data of audit logs.
   * 
   * @remarks
   * Before you call this operation, take note of the following items:
   * *   If you use an Alibaba Cloud SDK or DAS SDK to call this operation, we recommend that you use the latest version of the SDK.
   * *   If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
   * *   This operation is applicable to PolarDB for MySQL, ApsaraDB RDS for MySQL, ApsaraDB RDS for PostgreSQL, and ApsaraDB RDS for SQL Server.
   * >  The beginning of the time range to query can be up to seven days earlier than the current time. The interval between the start time and the end time cannot exceed one day. This operation can return a maximum of 10,000 entries.
   * 
   * @param request - GetDasSQLLogHotDataRequest
   * @returns GetDasSQLLogHotDataResponse
   */
  async getDasSQLLogHotData(request: $_model.GetDasSQLLogHotDataRequest): Promise<$_model.GetDasSQLLogHotDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDasSQLLogHotDataWithOptions(request, runtime);
  }

  /**
   * 查询单个死锁详情
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
   * 查询单个死锁详情
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
   *   This operation is applicable only to ApsaraDB RDS for SQL Server instances.
   * *   If you use an Alibaba Cloud SDK or Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
   * *   If you use an SDK to call the API operations of DAS, you must set the region ID to cn-shanghai.
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
   *   This operation is applicable only to ApsaraDB RDS for SQL Server instances.
   * *   If you use an Alibaba Cloud SDK or Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
   * *   If you use an SDK to call the API operations of DAS, you must set the region ID to cn-shanghai.
   * 
   * @param request - GetDeadLockDetailListRequest
   * @returns GetDeadLockDetailListResponse
   */
  async getDeadLockDetailList(request: $_model.GetDeadLockDetailListRequest): Promise<$_model.GetDeadLockDetailListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDeadLockDetailListWithOptions(request, runtime);
  }

  /**
   * 获取历史死锁记录
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
   * 获取历史死锁记录
   * 
   * @param request - GetDeadLockHistoryRequest
   * @returns GetDeadLockHistoryResponse
   */
  async getDeadLockHistory(request: $_model.GetDeadLockHistoryRequest): Promise<$_model.GetDeadLockHistoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDeadLockHistoryWithOptions(request, runtime);
  }

  /**
   * 查询时间范围内基于错误日志分析的死锁数量
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
   * 查询时间范围内基于错误日志分析的死锁数量
   * 
   * @param request - GetDeadlockHistogramRequest
   * @returns GetDeadlockHistogramResponse
   */
  async getDeadlockHistogram(request: $_model.GetDeadlockHistogramRequest): Promise<$_model.GetDeadlockHistogramResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDeadlockHistogramWithOptions(request, runtime);
  }

  /**
   * @param request - GetEndpointSwitchTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetEndpointSwitchTaskResponse
   */
  async getEndpointSwitchTaskWithOptions(request: $_model.GetEndpointSwitchTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetEndpointSwitchTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.uid)) {
      query["Uid"] = request.uid;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!$dara.isNull(request.context)) {
      query["__context"] = request.context;
    }

    if (!$dara.isNull(request.accessKey)) {
      query["accessKey"] = request.accessKey;
    }

    if (!$dara.isNull(request.signature)) {
      query["signature"] = request.signature;
    }

    if (!$dara.isNull(request.skipAuth)) {
      query["skipAuth"] = request.skipAuth;
    }

    if (!$dara.isNull(request.timestamp)) {
      query["timestamp"] = request.timestamp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetEndpointSwitchTask",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetEndpointSwitchTaskResponse>(await this.callApi(params, req, runtime), new $_model.GetEndpointSwitchTaskResponse({}));
  }

  /**
   * @param request - GetEndpointSwitchTaskRequest
   * @returns GetEndpointSwitchTaskResponse
   */
  async getEndpointSwitchTask(request: $_model.GetEndpointSwitchTaskRequest): Promise<$_model.GetEndpointSwitchTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getEndpointSwitchTaskWithOptions(request, runtime);
  }

  /**
   * Asynchronously queries information about failed SQL queries in SQL Explorer data. You can query up to 20 failed SQL queries within the specific time range.
   * 
   * @remarks
   * >  GetErrorRequestSample is an asynchronous operation. After a request is sent, the complete results are not returned immediately. If the value of **isFinish** is **false** in the response, wait for 1 second and then send a request again. If the value of **isFinish** is **true**, the complete results are returned.
   * *   This API operation supports only ApsaraDB RDS for MySQL instances and PolarDB for MySQL clusters for which Database Autonomy Service (DAS) Enterprise Edition is enabled. For more information, see [Purchase DAS Enterprise Edition](https://help.aliyun.com/document_detail/163298.html).
   * *   If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
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
   * >  GetErrorRequestSample is an asynchronous operation. After a request is sent, the complete results are not returned immediately. If the value of **isFinish** is **false** in the response, wait for 1 second and then send a request again. If the value of **isFinish** is **true**, the complete results are returned.
   * *   This API operation supports only ApsaraDB RDS for MySQL instances and PolarDB for MySQL clusters for which Database Autonomy Service (DAS) Enterprise Edition is enabled. For more information, see [Purchase DAS Enterprise Edition](https://help.aliyun.com/document_detail/163298.html).
   * *   If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
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
   * *   If you use an Alibaba Cloud SDK or a Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
   * *   If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
   * *   The database instance that you want to manage is connected to DAS.
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
   * *   If you use an Alibaba Cloud SDK or a Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
   * *   If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
   * *   The database instance that you want to manage is connected to DAS.
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
   * *   For more information about database instances that support this feature, see [Overview](https://help.aliyun.com/document_detail/190912.html).
   * *   If you use an SDK to call API operations of Database Autonomy Service (DAS), you must set the region ID to cn-shanghai.
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
   * *   For more information about database instances that support this feature, see [Overview](https://help.aliyun.com/document_detail/190912.html).
   * *   If you use an SDK to call API operations of Database Autonomy Service (DAS), you must set the region ID to cn-shanghai.
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
   * *   For more information about the database engines that support SQL Explorer, see [SQL Explorer](https://help.aliyun.com/document_detail/204096.html).
   * *   If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
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
   * *   For more information about the database engines that support SQL Explorer, see [SQL Explorer](https://help.aliyun.com/document_detail/204096.html).
   * *   If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
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
   * >  GetFullRequestStatResultByInstanceId is an asynchronous operation. After a request is sent, the complete results are not returned immediately. If the value of the isFinish parameter is **false** in the response, wait for 1 second and then send a request again. If the value of the isFinish parameter is **true**, the complete results are returned.
   * The SQL Explorer feature allows you to check the health status of SQL statements and troubleshoot performance issues. For more information, see [SQL Explorer](https://help.aliyun.com/document_detail/204096.html).
   * *   For more information about database instances that support this feature, see [Overview of DAS Enterprise Edition](https://help.aliyun.com/document_detail/190912.html).
   * *   If you use an SDK to call the API operations of Database Autonomy Service (DAS), you must set the region ID to cn-shanghai.
   * *   When you call this operation, the value of the SqlId parameter changes due to the optimization of the SQL template algorithm starting from September 1, 2024. For more information, see [[Notice\\] Optimization of the SQL template algorithm](~~2845725~~).
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
   * >  GetFullRequestStatResultByInstanceId is an asynchronous operation. After a request is sent, the complete results are not returned immediately. If the value of the isFinish parameter is **false** in the response, wait for 1 second and then send a request again. If the value of the isFinish parameter is **true**, the complete results are returned.
   * The SQL Explorer feature allows you to check the health status of SQL statements and troubleshoot performance issues. For more information, see [SQL Explorer](https://help.aliyun.com/document_detail/204096.html).
   * *   For more information about database instances that support this feature, see [Overview of DAS Enterprise Edition](https://help.aliyun.com/document_detail/190912.html).
   * *   If you use an SDK to call the API operations of Database Autonomy Service (DAS), you must set the region ID to cn-shanghai.
   * *   When you call this operation, the value of the SqlId parameter changes due to the optimization of the SQL template algorithm starting from September 1, 2024. For more information, see [[Notice\\] Optimization of the SQL template algorithm](~~2845725~~).
   * 
   * @param request - GetFullRequestStatResultByInstanceIdRequest
   * @returns GetFullRequestStatResultByInstanceIdResponse
   */
  async getFullRequestStatResultByInstanceId(request: $_model.GetFullRequestStatResultByInstanceIdRequest): Promise<$_model.GetFullRequestStatResultByInstanceIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getFullRequestStatResultByInstanceIdWithOptions(request, runtime);
  }

  /**
   * @param request - GetHDMAliyunResourceSyncResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHDMAliyunResourceSyncResultResponse
   */
  async getHDMAliyunResourceSyncResultWithOptions(request: $_model.GetHDMAliyunResourceSyncResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetHDMAliyunResourceSyncResultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.uid)) {
      query["Uid"] = request.uid;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!$dara.isNull(request.context)) {
      query["__context"] = request.context;
    }

    if (!$dara.isNull(request.accessKey)) {
      query["accessKey"] = request.accessKey;
    }

    if (!$dara.isNull(request.signature)) {
      query["signature"] = request.signature;
    }

    if (!$dara.isNull(request.skipAuth)) {
      query["skipAuth"] = request.skipAuth;
    }

    if (!$dara.isNull(request.timestamp)) {
      query["timestamp"] = request.timestamp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetHDMAliyunResourceSyncResult",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetHDMAliyunResourceSyncResultResponse>(await this.callApi(params, req, runtime), new $_model.GetHDMAliyunResourceSyncResultResponse({}));
  }

  /**
   * @param request - GetHDMAliyunResourceSyncResultRequest
   * @returns GetHDMAliyunResourceSyncResultResponse
   */
  async getHDMAliyunResourceSyncResult(request: $_model.GetHDMAliyunResourceSyncResultRequest): Promise<$_model.GetHDMAliyunResourceSyncResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getHDMAliyunResourceSyncResultWithOptions(request, runtime);
  }

  /**
   * @param request - GetHDMLastAliyunResourceSyncResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHDMLastAliyunResourceSyncResultResponse
   */
  async getHDMLastAliyunResourceSyncResultWithOptions(request: $_model.GetHDMLastAliyunResourceSyncResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetHDMLastAliyunResourceSyncResultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.uid)) {
      query["Uid"] = request.uid;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!$dara.isNull(request.context)) {
      query["__context"] = request.context;
    }

    if (!$dara.isNull(request.accessKey)) {
      query["accessKey"] = request.accessKey;
    }

    if (!$dara.isNull(request.signature)) {
      query["signature"] = request.signature;
    }

    if (!$dara.isNull(request.skipAuth)) {
      query["skipAuth"] = request.skipAuth;
    }

    if (!$dara.isNull(request.timestamp)) {
      query["timestamp"] = request.timestamp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetHDMLastAliyunResourceSyncResult",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetHDMLastAliyunResourceSyncResultResponse>(await this.callApi(params, req, runtime), new $_model.GetHDMLastAliyunResourceSyncResultResponse({}));
  }

  /**
   * @param request - GetHDMLastAliyunResourceSyncResultRequest
   * @returns GetHDMLastAliyunResourceSyncResultResponse
   */
  async getHDMLastAliyunResourceSyncResult(request: $_model.GetHDMLastAliyunResourceSyncResultRequest): Promise<$_model.GetHDMLastAliyunResourceSyncResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getHDMLastAliyunResourceSyncResultWithOptions(request, runtime);
  }

  /**
   * 获取实例组日报详情
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
   * 获取实例组日报详情
   * 
   * @param request - GetInstanceGroupInspectReportDetailRequest
   * @returns GetInstanceGroupInspectReportDetailResponse
   */
  async getInstanceGroupInspectReportDetail(request: $_model.GetInstanceGroupInspectReportDetailRequest): Promise<$_model.GetInstanceGroupInspectReportDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getInstanceGroupInspectReportDetailWithOptions(request, runtime);
  }

  /**
   * 查询实例组的报告信息
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
   * 查询实例组的报告信息
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
   * *   This operation is applicable only to ApsaraDB RDS for MySQL databases, self-managed MySQL databases hosted on Elastic Compute Service (ECS) instances, self-managed MySQL databases in data centers, ApsaraDB for Redis databases, and PolarDB for MySQL databases.
   * *   If you use an Alibaba Cloud SDK, make sure that the aliyun-sdk-core version is later than V4.3.3. We recommend that you use the latest version.
   * *   The version of DAS SDK must be V1.0.3 or later.
   * *   If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
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
   * *   This operation is applicable only to ApsaraDB RDS for MySQL databases, self-managed MySQL databases hosted on Elastic Compute Service (ECS) instances, self-managed MySQL databases in data centers, ApsaraDB for Redis databases, and PolarDB for MySQL databases.
   * *   If you use an Alibaba Cloud SDK, make sure that the aliyun-sdk-core version is later than V4.3.3. We recommend that you use the latest version.
   * *   The version of DAS SDK must be V1.0.3 or later.
   * *   If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
   * 
   * @param request - GetInstanceInspectionsRequest
   * @returns GetInstanceInspectionsResponse
   */
  async getInstanceInspections(request: $_model.GetInstanceInspectionsRequest): Promise<$_model.GetInstanceInspectionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getInstanceInspectionsWithOptions(request, runtime);
  }

  /**
   * Queries the details of all missing indexes of an instance.
   * 
   * @remarks
   *   This operation is applicable only to ApsaraDB RDS for SQL Server instances.
   * *   If you use an Alibaba Cloud SDK or Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
   * *   If you use an SDK to call the API operations of DAS, you must set the region ID to cn-shanghai.
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
   * Queries the details of all missing indexes of an instance.
   * 
   * @remarks
   *   This operation is applicable only to ApsaraDB RDS for SQL Server instances.
   * *   If you use an Alibaba Cloud SDK or Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
   * *   If you use an SDK to call the API operations of DAS, you must set the region ID to cn-shanghai.
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
   * *   If you use an Alibaba Cloud SDK or a Database Autonomy Service (DAS) SDK to call this API operation, we recommend that you use the latest version of the SDK.
   * *   If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
   * *   The database engine is ApsaraDB RDS for MySQL or PolarDB for MySQL.
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
   * *   If you use an Alibaba Cloud SDK or a Database Autonomy Service (DAS) SDK to call this API operation, we recommend that you use the latest version of the SDK.
   * *   If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
   * *   The database engine is ApsaraDB RDS for MySQL or PolarDB for MySQL.
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
   *   This operation is applicable only to ApsaraDB RDS for MySQL instances and PolarDB for MySQL clusters.
   * *   If you use an Alibaba Cloud SDK or a Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
   * *   If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
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
   *   This operation is applicable only to ApsaraDB RDS for MySQL instances and PolarDB for MySQL clusters.
   * *   If you use an Alibaba Cloud SDK or a Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
   * *   If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
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
   *   This operation is applicable only to MongoDB instances.
   * *   If you use an Alibaba Cloud SDK or Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
   * *   If you use an SDK to call API operations of DAS, you must set the region to cn-shanghai.
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
   *   This operation is applicable only to MongoDB instances.
   * *   If you use an Alibaba Cloud SDK or Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
   * *   If you use an SDK to call API operations of DAS, you must set the region to cn-shanghai.
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
   * >  GetMySQLAllSessionAsync is an asynchronous operation. After a request is sent, the system does not return complete results but returns a request ID. You need to use the request ID to initiate requests until the value of the **isFinish** field in the returned results is **true**, the complete results are returned. This indicates that to obtain complete data, you must call this operation at least twice.
   * *   This operation is applicable only to ApsaraDB RDS for MySQL instances, PolarDB for MySQL clusters, and PolarDB-X 2.0 instances.
   * *   If you use an Alibaba Cloud SDK or Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
   * *   If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
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
   * >  GetMySQLAllSessionAsync is an asynchronous operation. After a request is sent, the system does not return complete results but returns a request ID. You need to use the request ID to initiate requests until the value of the **isFinish** field in the returned results is **true**, the complete results are returned. This indicates that to obtain complete data, you must call this operation at least twice.
   * *   This operation is applicable only to ApsaraDB RDS for MySQL instances, PolarDB for MySQL clusters, and PolarDB-X 2.0 instances.
   * *   If you use an Alibaba Cloud SDK or Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
   * *   If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
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
   * *   If you use an Alibaba Cloud SDK or a Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
   * *   If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
   * *   An ApsaraDB RDS for MySQL instance or a PolarDB for MySQL cluster is connected to DAS.
   * *   The new version of the performance insight feature is enabled for the database instance. For more information, see [Performance insight (new version)](https://help.aliyun.com/document_detail/469117.html).
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
   * *   If you use an Alibaba Cloud SDK or a Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
   * *   If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
   * *   An ApsaraDB RDS for MySQL instance or a PolarDB for MySQL cluster is connected to DAS.
   * *   The new version of the performance insight feature is enabled for the database instance. For more information, see [Performance insight (new version)](https://help.aliyun.com/document_detail/469117.html).
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
   * *   If you use an Alibaba Cloud SDK or a Database Autonomy Service (DAS) SDK to call this API operation, we recommend that you use the latest version of the SDK.
   * *   If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
   * *   An ApsaraDB RDS for MySQL instance or a PolarDB for MySQL cluster is connected to DAS.
   * *   The new version of the performance insight feature is enabled for the database instance. For more information, see [Performance insight (new version)](https://help.aliyun.com/document_detail/469117.html).
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
   * *   If you use an Alibaba Cloud SDK or a Database Autonomy Service (DAS) SDK to call this API operation, we recommend that you use the latest version of the SDK.
   * *   If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
   * *   An ApsaraDB RDS for MySQL instance or a PolarDB for MySQL cluster is connected to DAS.
   * *   The new version of the performance insight feature is enabled for the database instance. For more information, see [Performance insight (new version)](https://help.aliyun.com/document_detail/469117.html).
   * 
   * @param request - GetPfsSqlSampleRequest
   * @returns GetPfsSqlSampleResponse
   */
  async getPfsSqlSample(request: $_model.GetPfsSqlSampleRequest): Promise<$_model.GetPfsSqlSampleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPfsSqlSampleWithOptions(request, runtime);
  }

  /**
   * Queries the full request data generated by the new version of the performance insight feature of a database instance based on the SQL ID.
   * 
   * @remarks
   * Before you call this operation, take note of the following items:
   * *   If you use an Alibaba Cloud SDK or a Database Autonomy Service (DAS) SDK to call this API operation, we recommend that you use the latest version of the SDK.
   * *   If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
   * *   An ApsaraDB RDS for MySQL instance or a PolarDB for MySQL cluster is connected to DAS.
   * *   The new version of the performance insight feature is enabled for the database instance. For more information, see [Performance insight (new version)](https://help.aliyun.com/document_detail/469117.html).
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
   * Queries the full request data generated by the new version of the performance insight feature of a database instance based on the SQL ID.
   * 
   * @remarks
   * Before you call this operation, take note of the following items:
   * *   If you use an Alibaba Cloud SDK or a Database Autonomy Service (DAS) SDK to call this API operation, we recommend that you use the latest version of the SDK.
   * *   If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
   * *   An ApsaraDB RDS for MySQL instance or a PolarDB for MySQL cluster is connected to DAS.
   * *   The new version of the performance insight feature is enabled for the database instance. For more information, see [Performance insight (new version)](https://help.aliyun.com/document_detail/469117.html).
   * 
   * @param request - GetPfsSqlSummariesRequest
   * @returns GetPfsSqlSummariesResponse
   */
  async getPfsSqlSummaries(request: $_model.GetPfsSqlSummariesRequest): Promise<$_model.GetPfsSqlSummariesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPfsSqlSummariesWithOptions(request, runtime);
  }

  /**
   * Queries information about SQL templates based on query governance data.
   * 
   * @remarks
   *   If you use an Alibaba Cloud SDK, make sure that the aliyun-sdk-core version is later than V2.1.8. We recommend that you use the latest version.
   * *   The version of your Database Autonomy Service (DAS) SDK must be V2.1.8 or later.
   * *   If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
   * *   This operation supports the following database engines:
   *     *   ApsaraDB RDS for MySQL
   *     *   PolarDB for MySQL
   *     *   ApsaraDB RDS for PostgreSQL
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
   * Queries information about SQL templates based on query governance data.
   * 
   * @remarks
   *   If you use an Alibaba Cloud SDK, make sure that the aliyun-sdk-core version is later than V2.1.8. We recommend that you use the latest version.
   * *   The version of your Database Autonomy Service (DAS) SDK must be V2.1.8 or later.
   * *   If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
   * *   This operation supports the following database engines:
   *     *   ApsaraDB RDS for MySQL
   *     *   PolarDB for MySQL
   *     *   ApsaraDB RDS for PostgreSQL
   * 
   * @param request - GetQueryOptimizeDataStatsRequest
   * @returns GetQueryOptimizeDataStatsResponse
   */
  async getQueryOptimizeDataStats(request: $_model.GetQueryOptimizeDataStatsRequest): Promise<$_model.GetQueryOptimizeDataStatsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getQueryOptimizeDataStatsWithOptions(request, runtime);
  }

  /**
   * Queries information about the best-performing and worst-performing instances based on query governance data.
   * 
   * @remarks
   *   If you use an Alibaba Cloud SDK, make sure that the aliyun-sdk-core version is later than V2.1.8. We recommend that you use the latest version.
   * *   The version of your Database Autonomy Service (DAS) SDK must be V2.1.8 or later.
   * *   If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
   * *   This operation supports the following database engines:
   *     *   ApsaraDB RDS for MySQL
   *     *   PolarDB for MySQL
   *     *   ApsaraDB RDS for PostgreSQL
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
   * Queries information about the best-performing and worst-performing instances based on query governance data.
   * 
   * @remarks
   *   If you use an Alibaba Cloud SDK, make sure that the aliyun-sdk-core version is later than V2.1.8. We recommend that you use the latest version.
   * *   The version of your Database Autonomy Service (DAS) SDK must be V2.1.8 or later.
   * *   If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
   * *   This operation supports the following database engines:
   *     *   ApsaraDB RDS for MySQL
   *     *   PolarDB for MySQL
   *     *   ApsaraDB RDS for PostgreSQL
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
   *   If you use Alibaba Cloud SDK, make sure that the aliyun-sdk-core version is later than V2.1.8. We recommend that you use the latest version.
   * *   The version of your Database Autonomy Service (DAS) SDK must be V2.1.8 or later.
   * *   If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
   * *   This operation supports the following database engines:
   *     *   ApsaraDB RDS for MySQL
   *     *   PolarDB for MySQL
   *     *   ApsaraDB RDS for PostgreSQL
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
   *   If you use Alibaba Cloud SDK, make sure that the aliyun-sdk-core version is later than V2.1.8. We recommend that you use the latest version.
   * *   The version of your Database Autonomy Service (DAS) SDK must be V2.1.8 or later.
   * *   If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
   * *   This operation supports the following database engines:
   *     *   ApsaraDB RDS for MySQL
   *     *   PolarDB for MySQL
   *     *   ApsaraDB RDS for PostgreSQL
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
   *   If you use Alibaba Cloud SDK, make sure that the aliyun-sdk-core version is later than V2.1.8. We recommend that you use the latest version.
   * *   The version of your Database Autonomy Service (DAS) SDK must be V2.1.8 or later.
   * *   If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
   * *   This operation supports the following database engines:
   *     *   ApsaraDB RDS for MySQL
   *     *   PolarDB for MySQL
   *     *   ApsaraDB RDS for PostgreSQL
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
   *   If you use Alibaba Cloud SDK, make sure that the aliyun-sdk-core version is later than V2.1.8. We recommend that you use the latest version.
   * *   The version of your Database Autonomy Service (DAS) SDK must be V2.1.8 or later.
   * *   If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
   * *   This operation supports the following database engines:
   *     *   ApsaraDB RDS for MySQL
   *     *   PolarDB for MySQL
   *     *   ApsaraDB RDS for PostgreSQL
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
   *   If you use Alibaba Cloud SDK or Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
   * *   If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
   * *   This operation supports the following database engines:
   *     *   ApsaraDB RDS for MySQL
   *     *   PolarDB for MySQL
   *     *   ApsaraDB RDS for PostgreSQL
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
   *   If you use Alibaba Cloud SDK or Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
   * *   If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
   * *   This operation supports the following database engines:
   *     *   ApsaraDB RDS for MySQL
   *     *   PolarDB for MySQL
   *     *   ApsaraDB RDS for PostgreSQL
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
   *   If you use Alibaba Cloud SDK, make sure that the aliyun-sdk-core version is later than V2.1.8. We recommend that you use the latest version.
   * *   The version of your Database Autonomy Service (DAS) SDK must be V2.1.8 or later.
   * *   If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
   * *   This operation supports the following database engines:
   *     *   ApsaraDB RDS for MySQL
   *     *   PolarDB for MySQL
   *     *   ApsaraDB RDS for PostgreSQL
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
   *   If you use Alibaba Cloud SDK, make sure that the aliyun-sdk-core version is later than V2.1.8. We recommend that you use the latest version.
   * *   The version of your Database Autonomy Service (DAS) SDK must be V2.1.8 or later.
   * *   If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
   * *   This operation supports the following database engines:
   *     *   ApsaraDB RDS for MySQL
   *     *   PolarDB for MySQL
   *     *   ApsaraDB RDS for PostgreSQL
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
   *   If you use Alibaba Cloud SDK or Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
   * *   If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
   * *   This operation supports the following database engines:
   *     *   ApsaraDB RDS for MySQL
   *     *   PolarDB for MySQL
   *     *   ApsaraDB RDS for PostgreSQL
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
   *   If you use Alibaba Cloud SDK or Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
   * *   If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
   * *   This operation supports the following database engines:
   *     *   ApsaraDB RDS for MySQL
   *     *   PolarDB for MySQL
   *     *   ApsaraDB RDS for PostgreSQL
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
   *   If you use an Alibaba Cloud SDK or a Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
   * *   If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
   * *   This operation supports the following database engines:
   *     *   ApsaraDB RDS for MySQL
   *     *   PolarDB for MySQL
   *     *   ApsaraDB RDS for PostgreSQL
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
   *   If you use an Alibaba Cloud SDK or a Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
   * *   If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
   * *   This operation supports the following database engines:
   *     *   ApsaraDB RDS for MySQL
   *     *   PolarDB for MySQL
   *     *   ApsaraDB RDS for PostgreSQL
   * 
   * @param request - GetQueryOptimizeSolutionRequest
   * @returns GetQueryOptimizeSolutionResponse
   */
  async getQueryOptimizeSolution(request: $_model.GetQueryOptimizeSolutionRequest): Promise<$_model.GetQueryOptimizeSolutionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getQueryOptimizeSolutionWithOptions(request, runtime);
  }

  /**
   * Queries the tags of a SQL statement.
   * 
   * @remarks
   *   If you use Alibaba Cloud SDK or Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
   * *   If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
   * *   This operation supports the following database engines:
   *     *   ApsaraDB RDS for MySQL
   *     *   PolarDB for MySQL
   *     *   ApsaraDB RDS for PostgreSQL
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
   * Queries the tags of a SQL statement.
   * 
   * @remarks
   *   If you use Alibaba Cloud SDK or Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
   * *   If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
   * *   This operation supports the following database engines:
   *     *   ApsaraDB RDS for MySQL
   *     *   PolarDB for MySQL
   *     *   ApsaraDB RDS for PostgreSQL
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
   *   This operation is applicable only to ApsaraDB for Redis instances.
   * *   If you use an SDK to call operations of Database Autonomy Service (DAS), you must set the region ID to cn-shanghai.
   * >  This operation cannot be used to query sessions generated in direct connection mode on ApsaraDB for Redis cluster instances.
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
   *   This operation is applicable only to ApsaraDB for Redis instances.
   * *   If you use an SDK to call operations of Database Autonomy Service (DAS), you must set the region ID to cn-shanghai.
   * >  This operation cannot be used to query sessions generated in direct connection mode on ApsaraDB for Redis cluster instances.
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
   * *   If you use an SDK to call API operations of Database Autonomy Service (DAS), you must set the region ID to cn-shanghai.
   * *   This operation supports the following database engines:
   *     *   ApsaraDB RDS for MySQL
   *     *   ApsaraDB RDS for PostgreSQL
   *     *   ApsaraDB RDS for SQL Server
   *     *   PolarDB for MySQL
   *     *   PolarDB for PostgreSQL (Compatible with Oracle)
   *     *   ApsaraDB for MongoDB
   * >  The minor engine version of the Apsara RDS for PostgreSQL instance must be 20220130 or later. For more information about how to check and update the minor engine version of an ApsaraDB RDS for PostgreSQL instance, see [Update the minor engine version of an ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/146895.html).
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
   * *   If you use an SDK to call API operations of Database Autonomy Service (DAS), you must set the region ID to cn-shanghai.
   * *   This operation supports the following database engines:
   *     *   ApsaraDB RDS for MySQL
   *     *   ApsaraDB RDS for PostgreSQL
   *     *   ApsaraDB RDS for SQL Server
   *     *   PolarDB for MySQL
   *     *   PolarDB for PostgreSQL (Compatible with Oracle)
   *     *   ApsaraDB for MongoDB
   * >  The minor engine version of the Apsara RDS for PostgreSQL instance must be 20220130 or later. For more information about how to check and update the minor engine version of an ApsaraDB RDS for PostgreSQL instance, see [Update the minor engine version of an ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/146895.html).
   * 
   * @param request - GetRequestDiagnosisPageRequest
   * @returns GetRequestDiagnosisPageResponse
   */
  async getRequestDiagnosisPage(request: $_model.GetRequestDiagnosisPageRequest): Promise<$_model.GetRequestDiagnosisPageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRequestDiagnosisPageWithOptions(request, runtime);
  }

  /**
   * Queries the results of an SQL diagnostics task.
   * 
   * @remarks
   * Before you call this operation, take note of the following items:
   * *   If you use an SDK to call the API operations of Database Autonomy Service (DAS), you must set the region ID to cn-shanghai.
   * *   You cannot call this operation to query the diagnostic result of the automatic SQL optimization feature.
   * *   This operation is applicable to the following database engines:
   *     *   RDS MySQL
   *     *   RDS PostgreSQL
   *     *   RDS SQL Server
   *     *   PolarDB for MySQL
   *     *   PolarDB for PostgreSQL (Compatible with Oracle)
   *     *   ApsaraDB for MongoDB
   * >  If your instance is an ApsaraDB RDS for PostgreSQL instance, make sure that the minor engine version of your instance is 20220130 or later. For more information about how to check and update the minor engine version of an ApsaraDB RDS for PostgreSQL instance, see [Update the minor engine version of an ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/146895.html).
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
   * Queries the results of an SQL diagnostics task.
   * 
   * @remarks
   * Before you call this operation, take note of the following items:
   * *   If you use an SDK to call the API operations of Database Autonomy Service (DAS), you must set the region ID to cn-shanghai.
   * *   You cannot call this operation to query the diagnostic result of the automatic SQL optimization feature.
   * *   This operation is applicable to the following database engines:
   *     *   RDS MySQL
   *     *   RDS PostgreSQL
   *     *   RDS SQL Server
   *     *   PolarDB for MySQL
   *     *   PolarDB for PostgreSQL (Compatible with Oracle)
   *     *   ApsaraDB for MongoDB
   * >  If your instance is an ApsaraDB RDS for PostgreSQL instance, make sure that the minor engine version of your instance is 20220130 or later. For more information about how to check and update the minor engine version of an ApsaraDB RDS for PostgreSQL instance, see [Update the minor engine version of an ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/146895.html).
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
   * *   ApsaraDB RDS for MySQL
   * *   PolarDB for MySQL
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
   * *   ApsaraDB RDS for MySQL
   * *   PolarDB for MySQL
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
   * *   ApsaraDB RDS for MySQL
   * *   PolarDB for MySQL
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
   * *   ApsaraDB RDS for MySQL
   * *   PolarDB for MySQL
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
   * *   ApsaraDB RDS for MySQL
   * *   PolarDB for MySQL
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
   * *   ApsaraDB RDS for MySQL
   * *   PolarDB for MySQL
   * 
   * @param request - GetSqlConcurrencyControlRulesHistoryRequest
   * @returns GetSqlConcurrencyControlRulesHistoryResponse
   */
  async getSqlConcurrencyControlRulesHistory(request: $_model.GetSqlConcurrencyControlRulesHistoryRequest): Promise<$_model.GetSqlConcurrencyControlRulesHistoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSqlConcurrencyControlRulesHistoryWithOptions(request, runtime);
  }

  /**
   * Queries optimization suggestions that are generated by the SQL diagnostics feature of Database Autonomy Service (DAS).
   * 
   * @remarks
   * The SQL diagnostics feature provides optimization suggestions for instances based on diagnostics results. You can use the optimization suggestions to optimize instance indexes. For more information, see [Automatic SQL optimization](https://help.aliyun.com/document_detail/167895.html).
   * >  You can call this operation to query only the optimization suggestions that are automatically generated by the SQL diagnostics feature.
   * Before you call this operation, take note of the following items:
   * *   This operation is applicable to ApsaraDB RDS for MySQL instances and PolarDB for MySQL clusters.
   * *   If you use an Alibaba Cloud SDK or DAS SDK to call this operation, we recommend that you use the latest version of the SDK.
   * *   If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
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
   * Queries optimization suggestions that are generated by the SQL diagnostics feature of Database Autonomy Service (DAS).
   * 
   * @remarks
   * The SQL diagnostics feature provides optimization suggestions for instances based on diagnostics results. You can use the optimization suggestions to optimize instance indexes. For more information, see [Automatic SQL optimization](https://help.aliyun.com/document_detail/167895.html).
   * >  You can call this operation to query only the optimization suggestions that are automatically generated by the SQL diagnostics feature.
   * Before you call this operation, take note of the following items:
   * *   This operation is applicable to ApsaraDB RDS for MySQL instances and PolarDB for MySQL clusters.
   * *   If you use an Alibaba Cloud SDK or DAS SDK to call this operation, we recommend that you use the latest version of the SDK.
   * *   If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
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
   * >  The physical file size indicates the actual size of an obtained file. Only specific deployment modes of database instances support the display of physical file sizes. The statistics on tables are obtained from `information_schema.tables`. Statistics in MySQL are not updated in real time. Therefore, the statistics may be different from the physical file sizes. If you want to obtain the latest data, you can execute the `ANALYZE TABLE` statement on the relevant tables during off-peak hours.
   * *   This operation is applicable only to ApsaraDB RDS for MySQL instances, PolarDB for MySQL clusters, and ApsaraDB for MongoDB instances.
   * *   For ApsaraDB RDS for MySQL instances and PolarDB for MySQL clusters, this operation works the same as the storage analysis feature of the previous version. Tasks generated by this operation cannot be viewed on the Storage Analysis page of the new version in the Database Autonomy Service (DAS) console. If you want to view the tasks and results, call the related API operation to obtain data and save data to your computer.
   * *   If you use an Alibaba Cloud SDK or DAS SDK to call this operation, we recommend that you use the latest version of the SDK.
   * *   If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
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
   * >  The physical file size indicates the actual size of an obtained file. Only specific deployment modes of database instances support the display of physical file sizes. The statistics on tables are obtained from `information_schema.tables`. Statistics in MySQL are not updated in real time. Therefore, the statistics may be different from the physical file sizes. If you want to obtain the latest data, you can execute the `ANALYZE TABLE` statement on the relevant tables during off-peak hours.
   * *   This operation is applicable only to ApsaraDB RDS for MySQL instances, PolarDB for MySQL clusters, and ApsaraDB for MongoDB instances.
   * *   For ApsaraDB RDS for MySQL instances and PolarDB for MySQL clusters, this operation works the same as the storage analysis feature of the previous version. Tasks generated by this operation cannot be viewed on the Storage Analysis page of the new version in the Database Autonomy Service (DAS) console. If you want to view the tasks and results, call the related API operation to obtain data and save data to your computer.
   * *   If you use an Alibaba Cloud SDK or DAS SDK to call this operation, we recommend that you use the latest version of the SDK.
   * *   If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
   * 
   * @param request - GetStorageAnalysisResultRequest
   * @returns GetStorageAnalysisResultResponse
   */
  async getStorageAnalysisResult(request: $_model.GetStorageAnalysisResultRequest): Promise<$_model.GetStorageAnalysisResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getStorageAnalysisResultWithOptions(request, runtime);
  }

  /**
   * Terminates all sessions on an instance.
   * 
   * @remarks
   *   This operation is applicable only to ApsaraDB for Redis.
   * *   If you use Alibaba Cloud SDK, make sure that the aliyun-sdk-core version is later than V4.3.3. We recommend that you use the latest version.
   * *   The version of your Database Autonomy Service (DAS) SDK must be V1.0.2 or later.
   * *   If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
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
   * Terminates all sessions on an instance.
   * 
   * @remarks
   *   This operation is applicable only to ApsaraDB for Redis.
   * *   If you use Alibaba Cloud SDK, make sure that the aliyun-sdk-core version is later than V4.3.3. We recommend that you use the latest version.
   * *   The version of your Database Autonomy Service (DAS) SDK must be V1.0.2 or later.
   * *   If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
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
   * You can call this operation to modify the following auto scaling configurations of an instance: **auto scaling for specifications**, **automatic storage expansion**, **automatic bandwidth adjustment**, and **auto scaling for resources**.
   * *   You can modify the configurations of the **auto scaling feature for specifications** for the following types of database instances:
   *     *   PolarDB for MySQL Cluster Edition instances. For more information about the feature and the billing rules, see [Automatic performance scaling](https://help.aliyun.com/document_detail/169686.html).
   *     *   ApsaraDB RDS for MySQL High-availability Edition instances that use standard SSDs or enhanced SSDs (ESSDs). For more information about the feature and the billing rules, see [Automatic performance scaling](https://help.aliyun.com/document_detail/169686.html).
   * *   You can modify the configurations of the **automatic storage expansion** feature for the following types of database instances:
   *     *   ApsaraDB RDS for MySQL High-availability Edition instances that use standard SSDs or ESSDs. For more information about the feature and the billing rules, see [Automatic space expansion](https://help.aliyun.com/document_detail/173345.html).
   * *   You can modify the configurations of the **automatic bandwidth adjustment** feature for the following types of database instances:
   *     *   ApsaraDB for Redis Classic (Local Disk-based) Edition instances. For more information about the feature and the billing rules, see [Automatic bandwidth adjustment](https://help.aliyun.com/document_detail/216312.html).
   * *   You can modify the configurations of the **auto scaling feature for resources** for the following types of database instances:
   *     *   General-purpose ApsaraDB RDS for MySQL Enterprise Edition instances. For more information about the feature and the billing rules, see [Automatic performance scaling](https://help.aliyun.com/document_detail/169686.html).
   * *   If you use an Alibaba Cloud SDK or Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
   * *   If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
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
   * You can call this operation to modify the following auto scaling configurations of an instance: **auto scaling for specifications**, **automatic storage expansion**, **automatic bandwidth adjustment**, and **auto scaling for resources**.
   * *   You can modify the configurations of the **auto scaling feature for specifications** for the following types of database instances:
   *     *   PolarDB for MySQL Cluster Edition instances. For more information about the feature and the billing rules, see [Automatic performance scaling](https://help.aliyun.com/document_detail/169686.html).
   *     *   ApsaraDB RDS for MySQL High-availability Edition instances that use standard SSDs or enhanced SSDs (ESSDs). For more information about the feature and the billing rules, see [Automatic performance scaling](https://help.aliyun.com/document_detail/169686.html).
   * *   You can modify the configurations of the **automatic storage expansion** feature for the following types of database instances:
   *     *   ApsaraDB RDS for MySQL High-availability Edition instances that use standard SSDs or ESSDs. For more information about the feature and the billing rules, see [Automatic space expansion](https://help.aliyun.com/document_detail/173345.html).
   * *   You can modify the configurations of the **automatic bandwidth adjustment** feature for the following types of database instances:
   *     *   ApsaraDB for Redis Classic (Local Disk-based) Edition instances. For more information about the feature and the billing rules, see [Automatic bandwidth adjustment](https://help.aliyun.com/document_detail/216312.html).
   * *   You can modify the configurations of the **auto scaling feature for resources** for the following types of database instances:
   *     *   General-purpose ApsaraDB RDS for MySQL Enterprise Edition instances. For more information about the feature and the billing rules, see [Automatic performance scaling](https://help.aliyun.com/document_detail/169686.html).
   * *   If you use an Alibaba Cloud SDK or Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
   * *   If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
   * 
   * @param request - ModifyAutoScalingConfigRequest
   * @returns ModifyAutoScalingConfigResponse
   */
  async modifyAutoScalingConfig(request: $_model.ModifyAutoScalingConfigRequest): Promise<$_model.ModifyAutoScalingConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyAutoScalingConfigWithOptions(request, runtime);
  }

  /**
   * 修改用户跨产品白名单模板
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
   * 修改用户跨产品白名单模板
   * 
   * @param request - ModifySecurityIPGroupRequest
   * @returns ModifySecurityIPGroupResponse
   */
  async modifySecurityIPGroup(request: $_model.ModifySecurityIPGroupRequest): Promise<$_model.ModifySecurityIPGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifySecurityIPGroupWithOptions(request, runtime);
  }

  /**
   * 绑定/解绑用户跨产品白名单模板
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
   * 绑定/解绑用户跨产品白名单模板
   * 
   * @param request - ModifySecurityIPGroupRelationRequest
   * @returns ModifySecurityIPGroupRelationResponse
   */
  async modifySecurityIPGroupRelation(request: $_model.ModifySecurityIPGroupRelationRequest): Promise<$_model.ModifySecurityIPGroupRelationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifySecurityIPGroupRelationWithOptions(request, runtime);
  }

  /**
   * Enables or configures Database Autonomy Service (DAS) Enterprise Edition for a database instance.
   * 
   * @remarks
   * Before you call this operation, take note of the following items:
   * *   If you use an Alibaba Cloud SDK or a DAS SDK to call this operation, we recommend that you use the latest version of the SDK.
   * *   If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
   * *   By default, the latest version of DAS Enterprise Edition that supports the database instance is enabled. For information about the databases and regions that are supported by different versions of DAS Enterprise Edition, see [Editions and supported features](https://help.aliyun.com/document_detail/156204.html).
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
   * Enables or configures Database Autonomy Service (DAS) Enterprise Edition for a database instance.
   * 
   * @remarks
   * Before you call this operation, take note of the following items:
   * *   If you use an Alibaba Cloud SDK or a DAS SDK to call this operation, we recommend that you use the latest version of the SDK.
   * *   If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
   * *   By default, the latest version of DAS Enterprise Edition that supports the database instance is enabled. For information about the databases and regions that are supported by different versions of DAS Enterprise Edition, see [Editions and supported features](https://help.aliyun.com/document_detail/156204.html).
   * 
   * @param request - ModifySqlLogConfigRequest
   * @returns ModifySqlLogConfigResponse
   */
  async modifySqlLogConfig(request: $_model.ModifySqlLogConfigRequest): Promise<$_model.ModifySqlLogConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifySqlLogConfigWithOptions(request, runtime);
  }

  /**
   * Runs a stress testing task.
   * 
   * @remarks
   * Database Autonomy Service (DAS) provides the intelligent stress testing feature. This feature helps you check whether your instance needs to be scaled up to effectively handle traffic spikes. For more information, see [Intelligent stress testing](https://help.aliyun.com/document_detail/155068.html).
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
   * Runs a stress testing task.
   * 
   * @remarks
   * Database Autonomy Service (DAS) provides the intelligent stress testing feature. This feature helps you check whether your instance needs to be scaled up to effectively handle traffic spikes. For more information, see [Intelligent stress testing](https://help.aliyun.com/document_detail/155068.html).
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
   * >  Asynchronous calls do not immediately return the complete results. To obtain the complete results, you must use the value of **ResultId** returned in the response to re-initiate the call until the value of **isFinish** is **true**.**** In this case, you must call this operation at least twice.
   * Before you call this operation, take note of the following items:
   * *   If you use an SDK to call the API operations of Database Autonomy Service (DAS), you must set the region ID to cn-shanghai.
   * *   The database instances must be an ApsaraDB RDS for MySQL High-availability Edition instance.
   * *   DAS Enterprise Edition must be enabled for the database instance. You can call the call [DescribeInstanceDasPro](https://help.aliyun.com/document_detail/413866.html) operation to query whether DAS Enterprise Edition is enabled.
   * *   The database instance has four or more CPU cores, and **innodb_file_per_table** is set to **ON**.
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
   * >  Asynchronous calls do not immediately return the complete results. To obtain the complete results, you must use the value of **ResultId** returned in the response to re-initiate the call until the value of **isFinish** is **true**.**** In this case, you must call this operation at least twice.
   * Before you call this operation, take note of the following items:
   * *   If you use an SDK to call the API operations of Database Autonomy Service (DAS), you must set the region ID to cn-shanghai.
   * *   The database instances must be an ApsaraDB RDS for MySQL High-availability Edition instance.
   * *   DAS Enterprise Edition must be enabled for the database instance. You can call the call [DescribeInstanceDasPro](https://help.aliyun.com/document_detail/413866.html) operation to query whether DAS Enterprise Edition is enabled.
   * *   The database instance has four or more CPU cores, and **innodb_file_per_table** is set to **ON**.
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
   * *   If you use an SDK to call API operations of Database Autonomy Service (DAS), you must set the region ID to cn-shanghai.
   * *   DAS Enterprise Edition must be enabled for the database instance that you want to manage. To enable DAS Enterprise Edition for a database instance, you can call the [EnableDasPro](https://help.aliyun.com/document_detail/411645.html) operation.
   * *   The autonomy service must be enabled for the database instance. For more information, see [Autonomy center](https://help.aliyun.com/document_detail/152139.html).
   * *   This operation supports the following database engines:
   *     *   ApsaraDB RDS for MySQL High-availability Edition or Enterprise Edition
   *     *   PolarDB for MySQL Cluster Edition
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
   * *   If you use an SDK to call API operations of Database Autonomy Service (DAS), you must set the region ID to cn-shanghai.
   * *   DAS Enterprise Edition must be enabled for the database instance that you want to manage. To enable DAS Enterprise Edition for a database instance, you can call the [EnableDasPro](https://help.aliyun.com/document_detail/411645.html) operation.
   * *   The autonomy service must be enabled for the database instance. For more information, see [Autonomy center](https://help.aliyun.com/document_detail/152139.html).
   * *   This operation supports the following database engines:
   *     *   ApsaraDB RDS for MySQL High-availability Edition or Enterprise Edition
   *     *   PolarDB for MySQL Cluster Edition
   * 
   * @param request - UpdateAutoSqlOptimizeStatusRequest
   * @returns UpdateAutoSqlOptimizeStatusResponse
   */
  async updateAutoSqlOptimizeStatus(request: $_model.UpdateAutoSqlOptimizeStatusRequest): Promise<$_model.UpdateAutoSqlOptimizeStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAutoSqlOptimizeStatusWithOptions(request, runtime);
  }

  /**
   * Asynchronously configures parameters related to the automatic SQL throttling feature for multiple database instances at a time.
   * 
   * @remarks
   * >  Asynchronous calls do not immediately return the complete results. To obtain the complete results, you must use the value of **ResultId** returned in the response to re-initiate the call until the value of **isFinish** is **true**.**** In this case, you must call this operation at least twice.
   * Before you call this operation, take note of the following items:
   * *   If you use an SDK to call API operations of Database Autonomy Service (DAS), you must set the region ID to cn-shanghai.
   * *   The autonomy service must be enabled for the database instance that you want to manage. For more information, see [Autonomy center](https://help.aliyun.com/document_detail/152139.html).
   * *   The database instance that you want to manage must be of one of the following types:
   *     *   ApsaraDB RDS for MySQL High-availability Edition or Enterprise Edition that runs MySQL 5.6, MySQL 5.7, or MySQL 8.0
   *     *   PolarDB for MySQL Cluster Edition that runs MySQL 5.6, MySQL 5.7, or MySQL 8.0
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
   * Asynchronously configures parameters related to the automatic SQL throttling feature for multiple database instances at a time.
   * 
   * @remarks
   * >  Asynchronous calls do not immediately return the complete results. To obtain the complete results, you must use the value of **ResultId** returned in the response to re-initiate the call until the value of **isFinish** is **true**.**** In this case, you must call this operation at least twice.
   * Before you call this operation, take note of the following items:
   * *   If you use an SDK to call API operations of Database Autonomy Service (DAS), you must set the region ID to cn-shanghai.
   * *   The autonomy service must be enabled for the database instance that you want to manage. For more information, see [Autonomy center](https://help.aliyun.com/document_detail/152139.html).
   * *   The database instance that you want to manage must be of one of the following types:
   *     *   ApsaraDB RDS for MySQL High-availability Edition or Enterprise Edition that runs MySQL 5.6, MySQL 5.7, or MySQL 8.0
   *     *   PolarDB for MySQL Cluster Edition that runs MySQL 5.6, MySQL 5.7, or MySQL 8.0
   * 
   * @param request - UpdateAutoThrottleRulesAsyncRequest
   * @returns UpdateAutoThrottleRulesAsyncResponse
   */
  async updateAutoThrottleRulesAsync(request: $_model.UpdateAutoThrottleRulesAsyncRequest): Promise<$_model.UpdateAutoThrottleRulesAsyncResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAutoThrottleRulesAsyncWithOptions(request, runtime);
  }

}
