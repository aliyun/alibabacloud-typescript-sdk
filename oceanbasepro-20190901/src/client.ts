// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil }from '@alicloud/openapi-core';


import * as $_model from './models/model';
export * from './models/model';

export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "regional";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("oceanbasepro", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * You can call this operation to close sessions in batches. Please note that this operation is executed asynchronously. After calling this operation, you need to verify it by calling DescribeProcessStatsComposition.
   * 
   * @param request - BatchKillProcessListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchKillProcessListResponse
   */
  async batchKillProcessListWithOptions(request: $_model.BatchKillProcessListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchKillProcessListResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.byObSessionId)) {
      body["ByObSessionId"] = request.byObSessionId;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.sessionList)) {
      body["SessionList"] = request.sessionList;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchKillProcessList",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchKillProcessListResponse>(await this.callApi(params, req, runtime), new $_model.BatchKillProcessListResponse({}));
  }

  /**
   * You can call this operation to close sessions in batches. Please note that this operation is executed asynchronously. After calling this operation, you need to verify it by calling DescribeProcessStatsComposition.
   * 
   * @param request - BatchKillProcessListRequest
   * @returns BatchKillProcessListResponse
   */
  async batchKillProcessList(request: $_model.BatchKillProcessListRequest): Promise<$_model.BatchKillProcessListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchKillProcessListWithOptions(request, runtime);
  }

  /**
   * You can call this operation to close sessions between the ApsaraDB for OceanBase and the application in batches. Please note that this operation is executed asynchronously. After calling this operation, you need to verify it by calling DescribeSessionList.
   * 
   * @param request - BatchKillSessionListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchKillSessionListResponse
   */
  async batchKillSessionListWithOptions(request: $_model.BatchKillSessionListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchKillSessionListResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.sessionList)) {
      body["SessionList"] = request.sessionList;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchKillSessionList",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchKillSessionListResponse>(await this.callApi(params, req, runtime), new $_model.BatchKillSessionListResponse({}));
  }

  /**
   * You can call this operation to close sessions between the ApsaraDB for OceanBase and the application in batches. Please note that this operation is executed asynchronously. After calling this operation, you need to verify it by calling DescribeSessionList.
   * 
   * @param request - BatchKillSessionListRequest
   * @returns BatchKillSessionListResponse
   */
  async batchKillSessionList(request: $_model.BatchKillSessionListRequest): Promise<$_model.BatchKillSessionListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchKillSessionListWithOptions(request, runtime);
  }

  /**
   * 根据记录id取消修改操作 （仅支持处于 PENDING 状态的修改记录）
   * 
   * @param request - CancelProjectModifyRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelProjectModifyRecordResponse
   */
  async cancelProjectModifyRecordWithOptions(request: $_model.CancelProjectModifyRecordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CancelProjectModifyRecordResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelProjectModifyRecord",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelProjectModifyRecordResponse>(await this.callApi(params, req, runtime), new $_model.CancelProjectModifyRecordResponse({}));
  }

  /**
   * 根据记录id取消修改操作 （仅支持处于 PENDING 状态的修改记录）
   * 
   * @param request - CancelProjectModifyRecordRequest
   * @returns CancelProjectModifyRecordResponse
   */
  async cancelProjectModifyRecord(request: $_model.CancelProjectModifyRecordRequest): Promise<$_model.CancelProjectModifyRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelProjectModifyRecordWithOptions(request, runtime);
  }

  /**
   * 创建备份任务下载链接
   * 
   * @param request - CreateBackupSetDownloadLinkRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateBackupSetDownloadLinkResponse
   */
  async createBackupSetDownloadLinkWithOptions(request: $_model.CreateBackupSetDownloadLinkRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateBackupSetDownloadLinkResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.backupSetId)) {
      body["BackupSetId"] = request.backupSetId;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateBackupSetDownloadLink",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateBackupSetDownloadLinkResponse>(await this.callApi(params, req, runtime), new $_model.CreateBackupSetDownloadLinkResponse({}));
  }

  /**
   * 创建备份任务下载链接
   * 
   * @param request - CreateBackupSetDownloadLinkRequest
   * @returns CreateBackupSetDownloadLinkResponse
   */
  async createBackupSetDownloadLink(request: $_model.CreateBackupSetDownloadLinkRequest): Promise<$_model.CreateBackupSetDownloadLinkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createBackupSetDownloadLinkWithOptions(request, runtime);
  }

  /**
   * The request ID.
   * 
   * @param request - CreateDatabaseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDatabaseResponse
   */
  async createDatabaseWithOptions(request: $_model.CreateDatabaseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDatabaseResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.collation)) {
      body["Collation"] = request.collation;
    }

    if (!$dara.isNull(request.databaseName)) {
      body["DatabaseName"] = request.databaseName;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.encoding)) {
      body["Encoding"] = request.encoding;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDatabase",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDatabaseResponse>(await this.callApi(params, req, runtime), new $_model.CreateDatabaseResponse({}));
  }

  /**
   * The request ID.
   * 
   * @param request - CreateDatabaseRequest
   * @returns CreateDatabaseResponse
   */
  async createDatabase(request: $_model.CreateDatabaseRequest): Promise<$_model.CreateDatabaseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDatabaseWithOptions(request, runtime);
  }

  /**
   * You can call this operation to create an OceanBase cluster.
   * 
   * @param request - CreateInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateInstanceResponse
   */
  async createInstanceWithOptions(request: $_model.CreateInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateInstanceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.autoRenew)) {
      body["AutoRenew"] = request.autoRenew;
    }

    if (!$dara.isNull(request.autoRenewPeriod)) {
      body["AutoRenewPeriod"] = request.autoRenewPeriod;
    }

    if (!$dara.isNull(request.chargeType)) {
      body["ChargeType"] = request.chargeType;
    }

    if (!$dara.isNull(request.cpuArch)) {
      body["CpuArch"] = request.cpuArch;
    }

    if (!$dara.isNull(request.diskSize)) {
      body["DiskSize"] = request.diskSize;
    }

    if (!$dara.isNull(request.diskType)) {
      body["DiskType"] = request.diskType;
    }

    if (!$dara.isNull(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.instanceClass)) {
      body["InstanceClass"] = request.instanceClass;
    }

    if (!$dara.isNull(request.instanceName)) {
      body["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.isolationOptimization)) {
      body["IsolationOptimization"] = request.isolationOptimization;
    }

    if (!$dara.isNull(request.obVersion)) {
      body["ObVersion"] = request.obVersion;
    }

    if (!$dara.isNull(request.period)) {
      body["Period"] = request.period;
    }

    if (!$dara.isNull(request.periodUnit)) {
      body["PeriodUnit"] = request.periodUnit;
    }

    if (!$dara.isNull(request.primaryInstance)) {
      body["PrimaryInstance"] = request.primaryInstance;
    }

    if (!$dara.isNull(request.primaryRegion)) {
      body["PrimaryRegion"] = request.primaryRegion;
    }

    if (!$dara.isNull(request.replicaMode)) {
      body["ReplicaMode"] = request.replicaMode;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.series)) {
      body["Series"] = request.series;
    }

    if (!$dara.isNull(request.zones)) {
      body["Zones"] = request.zones;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateInstance",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateInstanceResponse>(await this.callApi(params, req, runtime), new $_model.CreateInstanceResponse({}));
  }

  /**
   * You can call this operation to create an OceanBase cluster.
   * 
   * @param request - CreateInstanceRequest
   * @returns CreateInstanceResponse
   */
  async createInstance(request: $_model.CreateInstanceRequest): Promise<$_model.CreateInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createInstanceWithOptions(request, runtime);
  }

  /**
   * 创建标签
   * 
   * @param request - CreateLabelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateLabelResponse
   */
  async createLabelWithOptions(request: $_model.CreateLabelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateLabelResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateLabel",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateLabelResponse>(await this.callApi(params, req, runtime), new $_model.CreateLabelResponse({}));
  }

  /**
   * 创建标签
   * 
   * @param request - CreateLabelRequest
   * @returns CreateLabelResponse
   */
  async createLabel(request: $_model.CreateLabelRequest): Promise<$_model.CreateLabelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createLabelWithOptions(request, runtime);
  }

  /**
   * 创建 MySQL 数据源
   * 
   * @param request - CreateMySqlDataSourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMySqlDataSourceResponse
   */
  async createMySqlDataSourceWithOptions(request: $_model.CreateMySqlDataSourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMySqlDataSourceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.dgInstanceId)) {
      body["DgInstanceId"] = request.dgInstanceId;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ip)) {
      body["Ip"] = request.ip;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.password)) {
      body["Password"] = request.password;
    }

    if (!$dara.isNull(request.port)) {
      body["Port"] = request.port;
    }

    if (!$dara.isNull(request.schema)) {
      body["Schema"] = request.schema;
    }

    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
    }

    if (!$dara.isNull(request.useSsl)) {
      body["UseSsl"] = request.useSsl;
    }

    if (!$dara.isNull(request.userName)) {
      body["UserName"] = request.userName;
    }

    if (!$dara.isNull(request.vpcId)) {
      body["VpcId"] = request.vpcId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateMySqlDataSource",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateMySqlDataSourceResponse>(await this.callApi(params, req, runtime), new $_model.CreateMySqlDataSourceResponse({}));
  }

  /**
   * 创建 MySQL 数据源
   * 
   * @param request - CreateMySqlDataSourceRequest
   * @returns CreateMySqlDataSourceResponse
   */
  async createMySqlDataSource(request: $_model.CreateMySqlDataSourceRequest): Promise<$_model.CreateMySqlDataSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createMySqlDataSourceWithOptions(request, runtime);
  }

  /**
   * CreateOasOutlineTask
   * 
   * @param request - CreateOasOutlineTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateOasOutlineTaskResponse
   */
  async createOasOutlineTaskWithOptions(request: $_model.CreateOasOutlineTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateOasOutlineTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bySqlId)) {
      body["BySqlId"] = request.bySqlId;
    }

    if (!$dara.isNull(request.databaseName)) {
      body["DatabaseName"] = request.databaseName;
    }

    if (!$dara.isNull(request.dynamicSql)) {
      body["DynamicSql"] = request.dynamicSql;
    }

    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.indexName)) {
      body["IndexName"] = request.indexName;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.isConcurrentLimit)) {
      body["IsConcurrentLimit"] = request.isConcurrentLimit;
    }

    if (!$dara.isNull(request.maxConcurrent)) {
      body["MaxConcurrent"] = request.maxConcurrent;
    }

    if (!$dara.isNull(request.planData)) {
      body["PlanData"] = request.planData;
    }

    if (!$dara.isNull(request.sqlId)) {
      body["SqlId"] = request.sqlId;
    }

    if (!$dara.isNull(request.sqlText)) {
      body["SqlText"] = request.sqlText;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.statementId)) {
      body["StatementId"] = request.statementId;
    }

    if (!$dara.isNull(request.tableName)) {
      body["TableName"] = request.tableName;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.UId)) {
      body["UId"] = request.UId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateOasOutlineTask",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateOasOutlineTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateOasOutlineTaskResponse({}));
  }

  /**
   * CreateOasOutlineTask
   * 
   * @param request - CreateOasOutlineTaskRequest
   * @returns CreateOasOutlineTaskResponse
   */
  async createOasOutlineTask(request: $_model.CreateOasOutlineTaskRequest): Promise<$_model.CreateOasOutlineTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createOasOutlineTaskWithOptions(request, runtime);
  }

  /**
   * 创建 OceanBase 数据源
   * 
   * @param request - CreateOceanBaseDataSourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateOceanBaseDataSourceResponse
   */
  async createOceanBaseDataSourceWithOptions(request: $_model.CreateOceanBaseDataSourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateOceanBaseDataSourceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.cluster)) {
      body["Cluster"] = request.cluster;
    }

    if (!$dara.isNull(request.configUrl)) {
      body["ConfigUrl"] = request.configUrl;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.drcPassword)) {
      body["DrcPassword"] = request.drcPassword;
    }

    if (!$dara.isNull(request.drcUserName)) {
      body["DrcUserName"] = request.drcUserName;
    }

    if (!$dara.isNull(request.innerDrcPassword)) {
      body["InnerDrcPassword"] = request.innerDrcPassword;
    }

    if (!$dara.isNull(request.ip)) {
      body["Ip"] = request.ip;
    }

    if (!$dara.isNull(request.logProxyIp)) {
      body["LogProxyIp"] = request.logProxyIp;
    }

    if (!$dara.isNull(request.logProxyPort)) {
      body["LogProxyPort"] = request.logProxyPort;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.password)) {
      body["Password"] = request.password;
    }

    if (!$dara.isNull(request.port)) {
      body["Port"] = request.port;
    }

    if (!$dara.isNull(request.tenant)) {
      body["Tenant"] = request.tenant;
    }

    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
    }

    if (!$dara.isNull(request.userName)) {
      body["UserName"] = request.userName;
    }

    if (!$dara.isNull(request.vpcId)) {
      body["VpcId"] = request.vpcId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateOceanBaseDataSource",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateOceanBaseDataSourceResponse>(await this.callApi(params, req, runtime), new $_model.CreateOceanBaseDataSourceResponse({}));
  }

  /**
   * 创建 OceanBase 数据源
   * 
   * @param request - CreateOceanBaseDataSourceRequest
   * @returns CreateOceanBaseDataSourceResponse
   */
  async createOceanBaseDataSource(request: $_model.CreateOceanBaseDataSourceRequest): Promise<$_model.CreateOceanBaseDataSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createOceanBaseDataSourceWithOptions(request, runtime);
  }

  /**
   * You can call this operation to create a MySQL data source.
   * 
   * @remarks
   * To call this operation, you must add the IP address of the OceanBase Migration Service (OMS) server to the whitelist of the Alibaba Cloud database instance, the security rules of the ECS instance, or the security settings of your self-managed database (usually the firewall of your self-managed database) to ensure that OMS can successfully access your database instance. To obtain the IP address of the OMS server, go to the OMS data source management page in the OMS console.
   * 
   * @param request - CreateOmsMysqlDataSourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateOmsMysqlDataSourceResponse
   */
  async createOmsMysqlDataSourceWithOptions(request: $_model.CreateOmsMysqlDataSourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateOmsMysqlDataSourceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.dgDatabaseId)) {
      body["DgDatabaseId"] = request.dgDatabaseId;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ip)) {
      body["Ip"] = request.ip;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.password)) {
      body["Password"] = request.password;
    }

    if (!$dara.isNull(request.port)) {
      body["Port"] = request.port;
    }

    if (!$dara.isNull(request.schema)) {
      body["Schema"] = request.schema;
    }

    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
    }

    if (!$dara.isNull(request.username)) {
      body["Username"] = request.username;
    }

    if (!$dara.isNull(request.vpcId)) {
      body["VpcId"] = request.vpcId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateOmsMysqlDataSource",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateOmsMysqlDataSourceResponse>(await this.callApi(params, req, runtime), new $_model.CreateOmsMysqlDataSourceResponse({}));
  }

  /**
   * You can call this operation to create a MySQL data source.
   * 
   * @remarks
   * To call this operation, you must add the IP address of the OceanBase Migration Service (OMS) server to the whitelist of the Alibaba Cloud database instance, the security rules of the ECS instance, or the security settings of your self-managed database (usually the firewall of your self-managed database) to ensure that OMS can successfully access your database instance. To obtain the IP address of the OMS server, go to the OMS data source management page in the OMS console.
   * 
   * @param request - CreateOmsMysqlDataSourceRequest
   * @returns CreateOmsMysqlDataSourceResponse
   */
  async createOmsMysqlDataSource(request: $_model.CreateOmsMysqlDataSourceRequest): Promise<$_model.CreateOmsMysqlDataSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createOmsMysqlDataSourceWithOptions(request, runtime);
  }

  /**
   * 创建项目
   * 
   * @param tmpReq - CreateProjectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateProjectResponse
   */
  async createProjectWithOptions(tmpReq: $_model.CreateProjectRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateProjectResponse> {
    tmpReq.validate();
    let request = new $_model.CreateProjectShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.commonTransferConfig)) {
      request.commonTransferConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.commonTransferConfig, "CommonTransferConfig", "json");
    }

    if (!$dara.isNull(tmpReq.fullTransferConfig)) {
      request.fullTransferConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.fullTransferConfig, "FullTransferConfig", "json");
    }

    if (!$dara.isNull(tmpReq.incrTransferConfig)) {
      request.incrTransferConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.incrTransferConfig, "IncrTransferConfig", "json");
    }

    if (!$dara.isNull(tmpReq.labelIds)) {
      request.labelIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.labelIds, "LabelIds", "json");
    }

    if (!$dara.isNull(tmpReq.reverseIncrTransferConfig)) {
      request.reverseIncrTransferConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.reverseIncrTransferConfig, "ReverseIncrTransferConfig", "json");
    }

    if (!$dara.isNull(tmpReq.structTransferConfig)) {
      request.structTransferConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.structTransferConfig, "StructTransferConfig", "json");
    }

    if (!$dara.isNull(tmpReq.transferMapping)) {
      request.transferMappingShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.transferMapping, "TransferMapping", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.commonTransferConfigShrink)) {
      body["CommonTransferConfig"] = request.commonTransferConfigShrink;
    }

    if (!$dara.isNull(request.enableFullTransfer)) {
      body["EnableFullTransfer"] = request.enableFullTransfer;
    }

    if (!$dara.isNull(request.enableFullVerify)) {
      body["EnableFullVerify"] = request.enableFullVerify;
    }

    if (!$dara.isNull(request.enableIncrTransfer)) {
      body["EnableIncrTransfer"] = request.enableIncrTransfer;
    }

    if (!$dara.isNull(request.enableReverseIncrTransfer)) {
      body["EnableReverseIncrTransfer"] = request.enableReverseIncrTransfer;
    }

    if (!$dara.isNull(request.enableStructTransfer)) {
      body["EnableStructTransfer"] = request.enableStructTransfer;
    }

    if (!$dara.isNull(request.fullTransferConfigShrink)) {
      body["FullTransferConfig"] = request.fullTransferConfigShrink;
    }

    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.incrTransferConfigShrink)) {
      body["IncrTransferConfig"] = request.incrTransferConfigShrink;
    }

    if (!$dara.isNull(request.labelIdsShrink)) {
      body["LabelIds"] = request.labelIdsShrink;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.ossKey)) {
      body["OssKey"] = request.ossKey;
    }

    if (!$dara.isNull(request.reverseIncrTransferConfigShrink)) {
      body["ReverseIncrTransferConfig"] = request.reverseIncrTransferConfigShrink;
    }

    if (!$dara.isNull(request.sinkEndpointId)) {
      body["SinkEndpointId"] = request.sinkEndpointId;
    }

    if (!$dara.isNull(request.sourceEndpointId)) {
      body["SourceEndpointId"] = request.sourceEndpointId;
    }

    if (!$dara.isNull(request.structTransferConfigShrink)) {
      body["StructTransferConfig"] = request.structTransferConfigShrink;
    }

    if (!$dara.isNull(request.transferMappingShrink)) {
      body["TransferMapping"] = request.transferMappingShrink;
    }

    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
    }

    if (!$dara.isNull(request.useOss)) {
      body["UseOss"] = request.useOss;
    }

    if (!$dara.isNull(request.workerGradeId)) {
      body["WorkerGradeId"] = request.workerGradeId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateProject",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateProjectResponse>(await this.callApi(params, req, runtime), new $_model.CreateProjectResponse({}));
  }

  /**
   * 创建项目
   * 
   * @param request - CreateProjectRequest
   * @returns CreateProjectResponse
   */
  async createProject(request: $_model.CreateProjectRequest): Promise<$_model.CreateProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createProjectWithOptions(request, runtime);
  }

  /**
   * 修改传输对象（加减表）(仅支持处于 RUNNING/FAILED/SUSPEND 状态的项目)
   * 
   * @param tmpReq - CreateProjectModifyRecordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateProjectModifyRecordsResponse
   */
  async createProjectModifyRecordsWithOptions(tmpReq: $_model.CreateProjectModifyRecordsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateProjectModifyRecordsResponse> {
    tmpReq.validate();
    let request = new $_model.CreateProjectModifyRecordsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.databases)) {
      request.databasesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.databases, "Databases", "json");
    }

    if (!$dara.isNull(tmpReq.transferMapping)) {
      request.transferMappingShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.transferMapping, "TransferMapping", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.databasesShrink)) {
      body["Databases"] = request.databasesShrink;
    }

    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.transferMappingShrink)) {
      body["TransferMapping"] = request.transferMappingShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateProjectModifyRecords",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateProjectModifyRecordsResponse>(await this.callApi(params, req, runtime), new $_model.CreateProjectModifyRecordsResponse({}));
  }

  /**
   * 修改传输对象（加减表）(仅支持处于 RUNNING/FAILED/SUSPEND 状态的项目)
   * 
   * @param request - CreateProjectModifyRecordsRequest
   * @returns CreateProjectModifyRecordsResponse
   */
  async createProjectModifyRecords(request: $_model.CreateProjectModifyRecordsRequest): Promise<$_model.CreateProjectModifyRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createProjectModifyRecordsWithOptions(request, runtime);
  }

  /**
   * 创建RDS PG 数据源
   * 
   * @param request - CreateRdsPostgreSQLDataSourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRdsPostgreSQLDataSourceResponse
   */
  async createRdsPostgreSQLDataSourceWithOptions(request: $_model.CreateRdsPostgreSQLDataSourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateRdsPostgreSQLDataSourceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.databaseName)) {
      body["DatabaseName"] = request.databaseName;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.password)) {
      body["Password"] = request.password;
    }

    if (!$dara.isNull(request.userName)) {
      body["UserName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRdsPostgreSQLDataSource",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateRdsPostgreSQLDataSourceResponse>(await this.callApi(params, req, runtime), new $_model.CreateRdsPostgreSQLDataSourceResponse({}));
  }

  /**
   * 创建RDS PG 数据源
   * 
   * @param request - CreateRdsPostgreSQLDataSourceRequest
   * @returns CreateRdsPostgreSQLDataSourceResponse
   */
  async createRdsPostgreSQLDataSource(request: $_model.CreateRdsPostgreSQLDataSourceRequest): Promise<$_model.CreateRdsPostgreSQLDataSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createRdsPostgreSQLDataSourceWithOptions(request, runtime);
  }

  /**
   * The name of the whitelist group.
   * 
   * @param request - CreateSecurityIpGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSecurityIpGroupResponse
   */
  async createSecurityIpGroupWithOptions(request: $_model.CreateSecurityIpGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSecurityIpGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.securityIpGroupName)) {
      body["SecurityIpGroupName"] = request.securityIpGroupName;
    }

    if (!$dara.isNull(request.securityIps)) {
      body["SecurityIps"] = request.securityIps;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSecurityIpGroup",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSecurityIpGroupResponse>(await this.callApi(params, req, runtime), new $_model.CreateSecurityIpGroupResponse({}));
  }

  /**
   * The name of the whitelist group.
   * 
   * @param request - CreateSecurityIpGroupRequest
   * @returns CreateSecurityIpGroupResponse
   */
  async createSecurityIpGroup(request: $_model.CreateSecurityIpGroupRequest): Promise<$_model.CreateSecurityIpGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSecurityIpGroupWithOptions(request, runtime);
  }

  /**
   * You can call this operation to create a tag group.
   * 
   * @param request - CreateTagRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTagResponse
   */
  async createTagWithOptions(request: $_model.CreateTagRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTagResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.key)) {
      body["Key"] = request.key;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTag",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateTagResponse>(await this.callApi(params, req, runtime), new $_model.CreateTagResponse({}));
  }

  /**
   * You can call this operation to create a tag group.
   * 
   * @param request - CreateTagRequest
   * @returns CreateTagResponse
   */
  async createTag(request: $_model.CreateTagRequest): Promise<$_model.CreateTagResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createTagWithOptions(request, runtime);
  }

  /**
   * You can call this operation to create a tag.
   * 
   * @param request - CreateTagValueRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTagValueResponse
   */
  async createTagValueWithOptions(request: $_model.CreateTagValueRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTagValueResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.key)) {
      body["Key"] = request.key;
    }

    if (!$dara.isNull(request.value)) {
      body["Value"] = request.value;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTagValue",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateTagValueResponse>(await this.callApi(params, req, runtime), new $_model.CreateTagValueResponse({}));
  }

  /**
   * You can call this operation to create a tag.
   * 
   * @param request - CreateTagValueRequest
   * @returns CreateTagValueResponse
   */
  async createTagValue(request: $_model.CreateTagValueRequest): Promise<$_model.CreateTagValueResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createTagValueWithOptions(request, runtime);
  }

  /**
   * You can call this operation to create a tenant.
   * 
   * @param tmpReq - CreateTenantRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTenantResponse
   */
  async createTenantWithOptions(tmpReq: $_model.CreateTenantRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTenantResponse> {
    tmpReq.validate();
    let request = new $_model.CreateTenantShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.createParams)) {
      request.createParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.createParams, "CreateParams", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.charset)) {
      body["Charset"] = request.charset;
    }

    if (!$dara.isNull(request.cpu)) {
      body["Cpu"] = request.cpu;
    }

    if (!$dara.isNull(request.createParamsShrink)) {
      body["CreateParams"] = request.createParamsShrink;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.logDisk)) {
      body["LogDisk"] = request.logDisk;
    }

    if (!$dara.isNull(request.memory)) {
      body["Memory"] = request.memory;
    }

    if (!$dara.isNull(request.primaryZone)) {
      body["PrimaryZone"] = request.primaryZone;
    }

    if (!$dara.isNull(request.readOnlyZoneList)) {
      body["ReadOnlyZoneList"] = request.readOnlyZoneList;
    }

    if (!$dara.isNull(request.tenantMode)) {
      body["TenantMode"] = request.tenantMode;
    }

    if (!$dara.isNull(request.tenantName)) {
      body["TenantName"] = request.tenantName;
    }

    if (!$dara.isNull(request.timeZone)) {
      body["TimeZone"] = request.timeZone;
    }

    if (!$dara.isNull(request.unitNum)) {
      body["UnitNum"] = request.unitNum;
    }

    if (!$dara.isNull(request.userVSwitchId)) {
      body["UserVSwitchId"] = request.userVSwitchId;
    }

    if (!$dara.isNull(request.userVpcId)) {
      body["UserVpcId"] = request.userVpcId;
    }

    if (!$dara.isNull(request.userVpcOwnerId)) {
      body["UserVpcOwnerId"] = request.userVpcOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTenant",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateTenantResponse>(await this.callApi(params, req, runtime), new $_model.CreateTenantResponse({}));
  }

  /**
   * You can call this operation to create a tenant.
   * 
   * @param request - CreateTenantRequest
   * @returns CreateTenantResponse
   */
  async createTenant(request: $_model.CreateTenantRequest): Promise<$_model.CreateTenantResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createTenantWithOptions(request, runtime);
  }

  /**
   * The request ID.
   * 
   * @param request - CreateTenantReadOnlyConnectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTenantReadOnlyConnectionResponse
   */
  async createTenantReadOnlyConnectionWithOptions(request: $_model.CreateTenantReadOnlyConnectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTenantReadOnlyConnectionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      body["VSwitchId"] = request.vSwitchId;
    }

    if (!$dara.isNull(request.vpcId)) {
      body["VpcId"] = request.vpcId;
    }

    if (!$dara.isNull(request.zoneId)) {
      body["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTenantReadOnlyConnection",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateTenantReadOnlyConnectionResponse>(await this.callApi(params, req, runtime), new $_model.CreateTenantReadOnlyConnectionResponse({}));
  }

  /**
   * The request ID.
   * 
   * @param request - CreateTenantReadOnlyConnectionRequest
   * @returns CreateTenantReadOnlyConnectionResponse
   */
  async createTenantReadOnlyConnection(request: $_model.CreateTenantReadOnlyConnectionRequest): Promise<$_model.CreateTenantReadOnlyConnectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createTenantReadOnlyConnectionWithOptions(request, runtime);
  }

  /**
   * You can call this operation to create the security whitelist for the tenant.
   * 
   * @param request - CreateTenantSecurityIpGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTenantSecurityIpGroupResponse
   */
  async createTenantSecurityIpGroupWithOptions(request: $_model.CreateTenantSecurityIpGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTenantSecurityIpGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.securityIpGroupName)) {
      body["SecurityIpGroupName"] = request.securityIpGroupName;
    }

    if (!$dara.isNull(request.securityIps)) {
      body["SecurityIps"] = request.securityIps;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTenantSecurityIpGroup",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateTenantSecurityIpGroupResponse>(await this.callApi(params, req, runtime), new $_model.CreateTenantSecurityIpGroupResponse({}));
  }

  /**
   * You can call this operation to create the security whitelist for the tenant.
   * 
   * @param request - CreateTenantSecurityIpGroupRequest
   * @returns CreateTenantSecurityIpGroupResponse
   */
  async createTenantSecurityIpGroup(request: $_model.CreateTenantSecurityIpGroupRequest): Promise<$_model.CreateTenantSecurityIpGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createTenantSecurityIpGroupWithOptions(request, runtime);
  }

  /**
   * CreateTenantUser
   * 
   * @param request - CreateTenantUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTenantUserResponse
   */
  async createTenantUserWithOptions(request: $_model.CreateTenantUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTenantUserResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.encryptionType)) {
      body["EncryptionType"] = request.encryptionType;
    }

    if (!$dara.isNull(request.globalPermissions)) {
      body["GlobalPermissions"] = request.globalPermissions;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.roles)) {
      body["Roles"] = request.roles;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.userName)) {
      body["UserName"] = request.userName;
    }

    if (!$dara.isNull(request.userPassword)) {
      body["UserPassword"] = request.userPassword;
    }

    if (!$dara.isNull(request.userType)) {
      body["UserType"] = request.userType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTenantUser",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateTenantUserResponse>(await this.callApi(params, req, runtime), new $_model.CreateTenantUserResponse({}));
  }

  /**
   * CreateTenantUser
   * 
   * @param request - CreateTenantUserRequest
   * @returns CreateTenantUserResponse
   */
  async createTenantUser(request: $_model.CreateTenantUserRequest): Promise<$_model.CreateTenantUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createTenantUserWithOptions(request, runtime);
  }

  /**
   * 删除数据源
   * 
   * @param request - DeleteDataSourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDataSourceResponse
   */
  async deleteDataSourceWithOptions(request: $_model.DeleteDataSourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDataSourceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDataSource",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDataSourceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDataSourceResponse({}));
  }

  /**
   * 删除数据源
   * 
   * @param request - DeleteDataSourceRequest
   * @returns DeleteDataSourceResponse
   */
  async deleteDataSource(request: $_model.DeleteDataSourceRequest): Promise<$_model.DeleteDataSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDataSourceWithOptions(request, runtime);
  }

  /**
   * The request ID.
   * 
   * @param request - DeleteDatabasesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDatabasesResponse
   */
  async deleteDatabasesWithOptions(request: $_model.DeleteDatabasesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDatabasesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.databaseNames)) {
      body["DatabaseNames"] = request.databaseNames;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDatabases",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDatabasesResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDatabasesResponse({}));
  }

  /**
   * The request ID.
   * 
   * @param request - DeleteDatabasesRequest
   * @returns DeleteDatabasesResponse
   */
  async deleteDatabases(request: $_model.DeleteDatabasesRequest): Promise<$_model.DeleteDatabasesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDatabasesWithOptions(request, runtime);
  }

  /**
   * You can call this operation to release an OceanBase cluster.
   * 
   * @remarks
   * Before you call this operation, ensure that the following requirements are met:
   * - The cluster is in the Running state.
   * - The cluster is a primary cluster and the billing method is pay-as-you-go.
   * 
   * @param request - DeleteInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteInstancesResponse
   */
  async deleteInstancesWithOptions(request: $_model.DeleteInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteInstancesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.backupRetainMode)) {
      body["BackupRetainMode"] = request.backupRetainMode;
    }

    if (!$dara.isNull(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.instanceIds)) {
      body["InstanceIds"] = request.instanceIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteInstances",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteInstancesResponse>(await this.callApi(params, req, runtime), new $_model.DeleteInstancesResponse({}));
  }

  /**
   * You can call this operation to release an OceanBase cluster.
   * 
   * @remarks
   * Before you call this operation, ensure that the following requirements are met:
   * - The cluster is in the Running state.
   * - The cluster is a primary cluster and the billing method is pay-as-you-go.
   * 
   * @param request - DeleteInstancesRequest
   * @returns DeleteInstancesResponse
   */
  async deleteInstances(request: $_model.DeleteInstancesRequest): Promise<$_model.DeleteInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteInstancesWithOptions(request, runtime);
  }

  /**
   * 删除项目
   * 
   * @param request - DeleteProjectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteProjectResponse
   */
  async deleteProjectWithOptions(request: $_model.DeleteProjectRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteProjectResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteProject",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteProjectResponse>(await this.callApi(params, req, runtime), new $_model.DeleteProjectResponse({}));
  }

  /**
   * 删除项目
   * 
   * @param request - DeleteProjectRequest
   * @returns DeleteProjectResponse
   */
  async deleteProject(request: $_model.DeleteProjectRequest): Promise<$_model.DeleteProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteProjectWithOptions(request, runtime);
  }

  /**
   * The name of the deleted IP address whitelist group.
   * 
   * @param request - DeleteSecurityIpGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSecurityIpGroupResponse
   */
  async deleteSecurityIpGroupWithOptions(request: $_model.DeleteSecurityIpGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSecurityIpGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.securityIpGroupName)) {
      body["SecurityIpGroupName"] = request.securityIpGroupName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSecurityIpGroup",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSecurityIpGroupResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSecurityIpGroupResponse({}));
  }

  /**
   * The name of the deleted IP address whitelist group.
   * 
   * @param request - DeleteSecurityIpGroupRequest
   * @returns DeleteSecurityIpGroupResponse
   */
  async deleteSecurityIpGroup(request: $_model.DeleteSecurityIpGroupRequest): Promise<$_model.DeleteSecurityIpGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSecurityIpGroupWithOptions(request, runtime);
  }

  /**
   * You can call this operation to delete a tag group.
   * 
   * @param request - DeleteTagRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTagResponse
   */
  async deleteTagWithOptions(request: $_model.DeleteTagRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteTagResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.key)) {
      body["Key"] = request.key;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteTag",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteTagResponse>(await this.callApi(params, req, runtime), new $_model.DeleteTagResponse({}));
  }

  /**
   * You can call this operation to delete a tag group.
   * 
   * @param request - DeleteTagRequest
   * @returns DeleteTagResponse
   */
  async deleteTag(request: $_model.DeleteTagRequest): Promise<$_model.DeleteTagResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteTagWithOptions(request, runtime);
  }

  /**
   * You can call this operation to delete a tag from a tag group.
   * 
   * @param request - DeleteTagValueRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTagValueResponse
   */
  async deleteTagValueWithOptions(request: $_model.DeleteTagValueRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteTagValueResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.key)) {
      body["Key"] = request.key;
    }

    if (!$dara.isNull(request.value)) {
      body["Value"] = request.value;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteTagValue",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteTagValueResponse>(await this.callApi(params, req, runtime), new $_model.DeleteTagValueResponse({}));
  }

  /**
   * You can call this operation to delete a tag from a tag group.
   * 
   * @param request - DeleteTagValueRequest
   * @returns DeleteTagValueResponse
   */
  async deleteTagValue(request: $_model.DeleteTagValueRequest): Promise<$_model.DeleteTagValueResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteTagValueWithOptions(request, runtime);
  }

  /**
   * You can call this operation to delete the information on the whitelist group of the tenant.
   * 
   * @param request - DeleteTenantSecurityIpGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTenantSecurityIpGroupResponse
   */
  async deleteTenantSecurityIpGroupWithOptions(request: $_model.DeleteTenantSecurityIpGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteTenantSecurityIpGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.securityIpGroupName)) {
      body["SecurityIpGroupName"] = request.securityIpGroupName;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteTenantSecurityIpGroup",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteTenantSecurityIpGroupResponse>(await this.callApi(params, req, runtime), new $_model.DeleteTenantSecurityIpGroupResponse({}));
  }

  /**
   * You can call this operation to delete the information on the whitelist group of the tenant.
   * 
   * @param request - DeleteTenantSecurityIpGroupRequest
   * @returns DeleteTenantSecurityIpGroupResponse
   */
  async deleteTenantSecurityIpGroup(request: $_model.DeleteTenantSecurityIpGroupRequest): Promise<$_model.DeleteTenantSecurityIpGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteTenantSecurityIpGroupWithOptions(request, runtime);
  }

  /**
   * You can call this operation to delete one or more database accounts.
   * 
   * @param request - DeleteTenantUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTenantUsersResponse
   */
  async deleteTenantUsersWithOptions(request: $_model.DeleteTenantUsersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteTenantUsersResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.users)) {
      body["Users"] = request.users;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteTenantUsers",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteTenantUsersResponse>(await this.callApi(params, req, runtime), new $_model.DeleteTenantUsersResponse({}));
  }

  /**
   * You can call this operation to delete one or more database accounts.
   * 
   * @param request - DeleteTenantUsersRequest
   * @returns DeleteTenantUsersResponse
   */
  async deleteTenantUsers(request: $_model.DeleteTenantUsersRequest): Promise<$_model.DeleteTenantUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteTenantUsersWithOptions(request, runtime);
  }

  /**
   * The return result of the request.
   * 
   * @param request - DeleteTenantsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTenantsResponse
   */
  async deleteTenantsWithOptions(request: $_model.DeleteTenantsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteTenantsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.tenantIds)) {
      body["TenantIds"] = request.tenantIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteTenants",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteTenantsResponse>(await this.callApi(params, req, runtime), new $_model.DeleteTenantsResponse({}));
  }

  /**
   * The return result of the request.
   * 
   * @param request - DeleteTenantsRequest
   * @returns DeleteTenantsResponse
   */
  async deleteTenants(request: $_model.DeleteTenantsRequest): Promise<$_model.DeleteTenantsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteTenantsWithOptions(request, runtime);
  }

  /**
   * You can call this operation to obtain the list of SQL statements that may have performance problems according to the diagnostic system.
   * 
   * @param tmpReq - DescribeAnomalySQLListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAnomalySQLListResponse
   */
  async describeAnomalySQLListWithOptions(tmpReq: $_model.DescribeAnomalySQLListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAnomalySQLListResponse> {
    tmpReq.validate();
    let request = new $_model.DescribeAnomalySQLListShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.filterCondition)) {
      request.filterConditionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.filterCondition, "FilterCondition", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      body["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.dbName)) {
      body["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.filterConditionShrink)) {
      body["FilterCondition"] = request.filterConditionShrink;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.nodeIp)) {
      body["NodeIp"] = request.nodeIp;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.SQLId)) {
      body["SQLId"] = request.SQLId;
    }

    if (!$dara.isNull(request.searchKeyWord)) {
      body["SearchKeyWord"] = request.searchKeyWord;
    }

    if (!$dara.isNull(request.searchParameter)) {
      body["SearchParameter"] = request.searchParameter;
    }

    if (!$dara.isNull(request.searchRule)) {
      body["SearchRule"] = request.searchRule;
    }

    if (!$dara.isNull(request.searchValue)) {
      body["SearchValue"] = request.searchValue;
    }

    if (!$dara.isNull(request.sortColumn)) {
      body["SortColumn"] = request.sortColumn;
    }

    if (!$dara.isNull(request.sortOrder)) {
      body["SortOrder"] = request.sortOrder;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAnomalySQLList",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAnomalySQLListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAnomalySQLListResponse({}));
  }

  /**
   * You can call this operation to obtain the list of SQL statements that may have performance problems according to the diagnostic system.
   * 
   * @param request - DescribeAnomalySQLListRequest
   * @returns DescribeAnomalySQLListResponse
   */
  async describeAnomalySQLList(request: $_model.DescribeAnomalySQLListRequest): Promise<$_model.DescribeAnomalySQLListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAnomalySQLListWithOptions(request, runtime);
  }

  /**
   * The maximum number of CPU cores per resource unit.
   * 
   * @param request - DescribeAvailableCpuResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAvailableCpuResourceResponse
   */
  async describeAvailableCpuResourceWithOptions(request: $_model.DescribeAvailableCpuResourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAvailableCpuResourceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.modifyType)) {
      body["ModifyType"] = request.modifyType;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAvailableCpuResource",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAvailableCpuResourceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAvailableCpuResourceResponse({}));
  }

  /**
   * The maximum number of CPU cores per resource unit.
   * 
   * @param request - DescribeAvailableCpuResourceRequest
   * @returns DescribeAvailableCpuResourceResponse
   */
  async describeAvailableCpuResource(request: $_model.DescribeAvailableCpuResourceRequest): Promise<$_model.DescribeAvailableCpuResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAvailableCpuResourceWithOptions(request, runtime);
  }

  /**
   * You can call this operation to query the available memory resource of an OceanBase Database tenant.
   * 
   * @param request - DescribeAvailableMemResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAvailableMemResourceResponse
   */
  async describeAvailableMemResourceWithOptions(request: $_model.DescribeAvailableMemResourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAvailableMemResourceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.cpuNum)) {
      body["CpuNum"] = request.cpuNum;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.unitNum)) {
      body["UnitNum"] = request.unitNum;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAvailableMemResource",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAvailableMemResourceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAvailableMemResourceResponse({}));
  }

  /**
   * You can call this operation to query the available memory resource of an OceanBase Database tenant.
   * 
   * @param request - DescribeAvailableMemResourceRequest
   * @returns DescribeAvailableMemResourceResponse
   */
  async describeAvailableMemResource(request: $_model.DescribeAvailableMemResourceRequest): Promise<$_model.DescribeAvailableMemResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAvailableMemResourceWithOptions(request, runtime);
  }

  /**
   * 获取集群变配页可选配置
   * 
   * @param request - DescribeAvailableSpecRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAvailableSpecResponse
   */
  async describeAvailableSpecWithOptions(request: $_model.DescribeAvailableSpecRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAvailableSpecResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.spec)) {
      body["Spec"] = request.spec;
    }

    if (!$dara.isNull(request.upgradeType)) {
      body["UpgradeType"] = request.upgradeType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAvailableSpec",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAvailableSpecResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAvailableSpecResponse({}));
  }

  /**
   * 获取集群变配页可选配置
   * 
   * @param request - DescribeAvailableSpecRequest
   * @returns DescribeAvailableSpecResponse
   */
  async describeAvailableSpec(request: $_model.DescribeAvailableSpecRequest): Promise<$_model.DescribeAvailableSpecResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAvailableSpecWithOptions(request, runtime);
  }

  /**
   * 获取集群售卖页可选配置
   * 
   * @param request - DescribeAvailableZoneRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAvailableZoneResponse
   */
  async describeAvailableZoneWithOptions(request: $_model.DescribeAvailableZoneRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAvailableZoneResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.cpuArch)) {
      body["CpuArch"] = request.cpuArch;
    }

    if (!$dara.isNull(request.deployType)) {
      body["DeployType"] = request.deployType;
    }

    if (!$dara.isNull(request.instanceType)) {
      body["InstanceType"] = request.instanceType;
    }

    if (!$dara.isNull(request.obVersion)) {
      body["ObVersion"] = request.obVersion;
    }

    if (!$dara.isNull(request.series)) {
      body["Series"] = request.series;
    }

    if (!$dara.isNull(request.spec)) {
      body["Spec"] = request.spec;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAvailableZone",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAvailableZoneResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAvailableZoneResponse({}));
  }

  /**
   * 获取集群售卖页可选配置
   * 
   * @param request - DescribeAvailableZoneRequest
   * @returns DescribeAvailableZoneResponse
   */
  async describeAvailableZone(request: $_model.DescribeAvailableZoneRequest): Promise<$_model.DescribeAvailableZoneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAvailableZoneWithOptions(request, runtime);
  }

  /**
   * DescribeBackupEncryptedString
   * 
   * @param request - DescribeBackupEncryptedStringRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBackupEncryptedStringResponse
   */
  async describeBackupEncryptedStringWithOptions(request: $_model.DescribeBackupEncryptedStringRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeBackupEncryptedStringResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeBackupEncryptedString",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeBackupEncryptedStringResponse>(await this.callApi(params, req, runtime), new $_model.DescribeBackupEncryptedStringResponse({}));
  }

  /**
   * DescribeBackupEncryptedString
   * 
   * @param request - DescribeBackupEncryptedStringRequest
   * @returns DescribeBackupEncryptedStringResponse
   */
  async describeBackupEncryptedString(request: $_model.DescribeBackupEncryptedStringRequest): Promise<$_model.DescribeBackupEncryptedStringResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeBackupEncryptedStringWithOptions(request, runtime);
  }

  /**
   * You can call this operation to query the link for downloading a backup set of OceanBase Database.
   * 
   * @param request - DescribeBackupSetDownloadLinkRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBackupSetDownloadLinkResponse
   */
  async describeBackupSetDownloadLinkWithOptions(request: $_model.DescribeBackupSetDownloadLinkRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeBackupSetDownloadLinkResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.downloadTaskId)) {
      body["DownloadTaskId"] = request.downloadTaskId;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeBackupSetDownloadLink",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeBackupSetDownloadLinkResponse>(await this.callApi(params, req, runtime), new $_model.DescribeBackupSetDownloadLinkResponse({}));
  }

  /**
   * You can call this operation to query the link for downloading a backup set of OceanBase Database.
   * 
   * @param request - DescribeBackupSetDownloadLinkRequest
   * @returns DescribeBackupSetDownloadLinkResponse
   */
  async describeBackupSetDownloadLink(request: $_model.DescribeBackupSetDownloadLinkRequest): Promise<$_model.DescribeBackupSetDownloadLinkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeBackupSetDownloadLinkWithOptions(request, runtime);
  }

  /**
   * You can call this operation to query the character sets of an OceanBase Database tenant.
   * 
   * @param request - DescribeCharsetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCharsetResponse
   */
  async describeCharsetWithOptions(request: $_model.DescribeCharsetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCharsetResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.series)) {
      body["Series"] = request.series;
    }

    if (!$dara.isNull(request.tenantMode)) {
      body["TenantMode"] = request.tenantMode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCharset",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCharsetResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCharsetResponse({}));
  }

  /**
   * You can call this operation to query the character sets of an OceanBase Database tenant.
   * 
   * @param request - DescribeCharsetRequest
   * @returns DescribeCharsetResponse
   */
  async describeCharset(request: $_model.DescribeCharsetRequest): Promise<$_model.DescribeCharsetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCharsetWithOptions(request, runtime);
  }

  /**
   * 查询备份集信息
   * 
   * @param request - DescribeDataBackupSetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDataBackupSetResponse
   */
  async describeDataBackupSetWithOptions(request: $_model.DescribeDataBackupSetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDataBackupSetResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.backupObjectType)) {
      body["BackupObjectType"] = request.backupObjectType;
    }

    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
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

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDataBackupSet",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDataBackupSetResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDataBackupSetResponse({}));
  }

  /**
   * 查询备份集信息
   * 
   * @param request - DescribeDataBackupSetRequest
   * @returns DescribeDataBackupSetResponse
   */
  async describeDataBackupSet(request: $_model.DescribeDataBackupSetRequest): Promise<$_model.DescribeDataBackupSetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDataBackupSetWithOptions(request, runtime);
  }

  /**
   * You can call this operation to query databases in a tenant.
   * 
   * @param request - DescribeDatabasesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDatabasesResponse
   */
  async describeDatabasesWithOptions(request: $_model.DescribeDatabasesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDatabasesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.databaseName)) {
      body["DatabaseName"] = request.databaseName;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.searchKey)) {
      body["SearchKey"] = request.searchKey;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.withTables)) {
      body["WithTables"] = request.withTables;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDatabases",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDatabasesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDatabasesResponse({}));
  }

  /**
   * You can call this operation to query databases in a tenant.
   * 
   * @param request - DescribeDatabasesRequest
   * @returns DescribeDatabasesResponse
   */
  async describeDatabases(request: $_model.DescribeDatabasesRequest): Promise<$_model.DescribeDatabasesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDatabasesWithOptions(request, runtime);
  }

  /**
   * You can call this operation to query the detailed information of an OceanBase cluster.
   * 
   * @param request - DescribeInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceResponse
   */
  async describeInstanceWithOptions(request: $_model.DescribeInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstance",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstanceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstanceResponse({}));
  }

  /**
   * You can call this operation to query the detailed information of an OceanBase cluster.
   * 
   * @param request - DescribeInstanceRequest
   * @returns DescribeInstanceResponse
   */
  async describeInstance(request: $_model.DescribeInstanceRequest): Promise<$_model.DescribeInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceWithOptions(request, runtime);
  }

  /**
   * DescribeInstanceAvailableZones
   * 
   * @param request - DescribeInstanceAvailableZonesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceAvailableZonesResponse
   */
  async describeInstanceAvailableZonesWithOptions(request: $_model.DescribeInstanceAvailableZonesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceAvailableZonesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstanceAvailableZones",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstanceAvailableZonesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstanceAvailableZonesResponse({}));
  }

  /**
   * DescribeInstanceAvailableZones
   * 
   * @param request - DescribeInstanceAvailableZonesRequest
   * @returns DescribeInstanceAvailableZonesResponse
   */
  async describeInstanceAvailableZones(request: $_model.DescribeInstanceAvailableZonesRequest): Promise<$_model.DescribeInstanceAvailableZonesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceAvailableZonesWithOptions(request, runtime);
  }

  /**
   * The ID of the zone.
   * 
   * @param request - DescribeInstanceCreatableZoneRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceCreatableZoneResponse
   */
  async describeInstanceCreatableZoneWithOptions(request: $_model.DescribeInstanceCreatableZoneRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceCreatableZoneResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstanceCreatableZone",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstanceCreatableZoneResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstanceCreatableZoneResponse({}));
  }

  /**
   * The ID of the zone.
   * 
   * @param request - DescribeInstanceCreatableZoneRequest
   * @returns DescribeInstanceCreatableZoneResponse
   */
  async describeInstanceCreatableZone(request: $_model.DescribeInstanceCreatableZoneRequest): Promise<$_model.DescribeInstanceCreatableZoneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceCreatableZoneWithOptions(request, runtime);
  }

  /**
   * 查询集群SSL配置
   * 
   * @param request - DescribeInstanceSSLRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceSSLResponse
   */
  async describeInstanceSSLWithOptions(request: $_model.DescribeInstanceSSLRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceSSLResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstanceSSL",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstanceSSLResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstanceSSLResponse({}));
  }

  /**
   * 查询集群SSL配置
   * 
   * @param request - DescribeInstanceSSLRequest
   * @returns DescribeInstanceSSLResponse
   */
  async describeInstanceSSL(request: $_model.DescribeInstanceSSLRequest): Promise<$_model.DescribeInstanceSSLResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceSSLWithOptions(request, runtime);
  }

  /**
   * You can call this operation to query security check items of an OceanBase cluster.
   * 
   * @param request - DescribeInstanceSecurityConfigsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceSecurityConfigsResponse
   */
  async describeInstanceSecurityConfigsWithOptions(request: $_model.DescribeInstanceSecurityConfigsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceSecurityConfigsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.checkId)) {
      body["CheckId"] = request.checkId;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstanceSecurityConfigs",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstanceSecurityConfigsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstanceSecurityConfigsResponse({}));
  }

  /**
   * You can call this operation to query security check items of an OceanBase cluster.
   * 
   * @param request - DescribeInstanceSecurityConfigsRequest
   * @returns DescribeInstanceSecurityConfigsResponse
   */
  async describeInstanceSecurityConfigs(request: $_model.DescribeInstanceSecurityConfigsRequest): Promise<$_model.DescribeInstanceSecurityConfigsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceSecurityConfigsWithOptions(request, runtime);
  }

  /**
   * Obtains the overview information about OceanBase instances.
   * 
   * @param request - DescribeInstanceSummaryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceSummaryResponse
   */
  async describeInstanceSummaryWithOptions(request: $_model.DescribeInstanceSummaryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceSummaryResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
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
      action: "DescribeInstanceSummary",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstanceSummaryResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstanceSummaryResponse({}));
  }

  /**
   * Obtains the overview information about OceanBase instances.
   * 
   * @param request - DescribeInstanceSummaryRequest
   * @returns DescribeInstanceSummaryResponse
   */
  async describeInstanceSummary(request: $_model.DescribeInstanceSummaryRequest): Promise<$_model.DescribeInstanceSummaryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceSummaryWithOptions(request, runtime);
  }

  /**
   * You can call this operation to query the tags of clusters.
   * 
   * @param request - DescribeInstanceTagsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceTagsResponse
   */
  async describeInstanceTagsWithOptions(request: $_model.DescribeInstanceTagsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceTagsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceIds)) {
      body["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.tags)) {
      body["Tags"] = request.tags;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstanceTags",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstanceTagsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstanceTagsResponse({}));
  }

  /**
   * You can call this operation to query the tags of clusters.
   * 
   * @param request - DescribeInstanceTagsRequest
   * @returns DescribeInstanceTagsResponse
   */
  async describeInstanceTags(request: $_model.DescribeInstanceTagsRequest): Promise<$_model.DescribeInstanceTagsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceTagsWithOptions(request, runtime);
  }

  /**
   * The return result of the request.
   * 
   * @param request - DescribeInstanceTenantModesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceTenantModesResponse
   */
  async describeInstanceTenantModesWithOptions(request: $_model.DescribeInstanceTenantModesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceTenantModesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstanceTenantModes",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstanceTenantModesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstanceTenantModesResponse({}));
  }

  /**
   * The return result of the request.
   * 
   * @param request - DescribeInstanceTenantModesRequest
   * @returns DescribeInstanceTenantModesResponse
   */
  async describeInstanceTenantModes(request: $_model.DescribeInstanceTenantModesRequest): Promise<$_model.DescribeInstanceTenantModesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceTenantModesWithOptions(request, runtime);
  }

  /**
   * You can call this operation to query the topology of an OceanBase cluster.
   * 
   * @param request - DescribeInstanceTopologyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceTopologyResponse
   */
  async describeInstanceTopologyWithOptions(request: $_model.DescribeInstanceTopologyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceTopologyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstanceTopology",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstanceTopologyResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstanceTopologyResponse({}));
  }

  /**
   * You can call this operation to query the topology of an OceanBase cluster.
   * 
   * @param request - DescribeInstanceTopologyRequest
   * @returns DescribeInstanceTopologyResponse
   */
  async describeInstanceTopology(request: $_model.DescribeInstanceTopologyRequest): Promise<$_model.DescribeInstanceTopologyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceTopologyWithOptions(request, runtime);
  }

  /**
   * You can call this operation to obtain the list of OceanBase clusters.
   * 
   * @param request - DescribeInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstancesResponse
   */
  async describeInstancesWithOptions(request: $_model.DescribeInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstancesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceName)) {
      body["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.searchKey)) {
      body["SearchKey"] = request.searchKey;
    }

    if (!$dara.isNull(request.withOBCloudInstances)) {
      body["WithOBCloudInstances"] = request.withOBCloudInstances;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstances",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstancesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstancesResponse({}));
  }

  /**
   * You can call this operation to obtain the list of OceanBase clusters.
   * 
   * @param request - DescribeInstancesRequest
   * @returns DescribeInstancesResponse
   */
  async describeInstances(request: $_model.DescribeInstancesRequest): Promise<$_model.DescribeInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstancesWithOptions(request, runtime);
  }

  /**
   * 查询监控指标数据
   * 
   * @param request - DescribeMetricsDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMetricsDataResponse
   */
  async describeMetricsDataWithOptions(request: $_model.DescribeMetricsDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeMetricsDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.groupByLabels)) {
      query["GroupByLabels"] = request.groupByLabels;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.labels)) {
      query["Labels"] = request.labels;
    }

    if (!$dara.isNull(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!$dara.isNull(request.metrics)) {
      query["Metrics"] = request.metrics;
    }

    if (!$dara.isNull(request.sortMetricKey)) {
      query["SortMetricKey"] = request.sortMetricKey;
    }

    if (!$dara.isNull(request.sortOrder)) {
      query["SortOrder"] = request.sortOrder;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.replicaType)) {
      body["ReplicaType"] = request.replicaType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeMetricsData",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeMetricsDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeMetricsDataResponse({}));
  }

  /**
   * 查询监控指标数据
   * 
   * @param request - DescribeMetricsDataRequest
   * @returns DescribeMetricsDataResponse
   */
  async describeMetricsData(request: $_model.DescribeMetricsDataRequest): Promise<$_model.DescribeMetricsDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeMetricsDataWithOptions(request, runtime);
  }

  /**
   * The list of nodes.
   * 
   * @param request - DescribeNodeMetricsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeNodeMetricsResponse
   */
  async describeNodeMetricsWithOptions(request: $_model.DescribeNodeMetricsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeNodeMetricsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.metrics)) {
      body["Metrics"] = request.metrics;
    }

    if (!$dara.isNull(request.nodeIdList)) {
      body["NodeIdList"] = request.nodeIdList;
    }

    if (!$dara.isNull(request.nodeName)) {
      body["NodeName"] = request.nodeName;
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

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeNodeMetrics",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeNodeMetricsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeNodeMetricsResponse({}));
  }

  /**
   * The list of nodes.
   * 
   * @param request - DescribeNodeMetricsRequest
   * @returns DescribeNodeMetricsResponse
   */
  async describeNodeMetrics(request: $_model.DescribeNodeMetricsRequest): Promise<$_model.DescribeNodeMetricsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeNodeMetricsWithOptions(request, runtime);
  }

  /**
   * You can call this API to view the list of SQL statements that are identified as having performance issues by the diagnostic system.
   * 
   * @param request - DescribeOasAnomalySQLListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeOasAnomalySQLListResponse
   */
  async describeOasAnomalySQLListWithOptions(request: $_model.DescribeOasAnomalySQLListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeOasAnomalySQLListResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      body["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.current)) {
      body["Current"] = request.current;
    }

    if (!$dara.isNull(request.dbName)) {
      body["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.dynamicSql)) {
      body["DynamicSql"] = request.dynamicSql;
    }

    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.filterCondition)) {
      body["FilterCondition"] = request.filterCondition;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.mergeDynamicSql)) {
      body["MergeDynamicSql"] = request.mergeDynamicSql;
    }

    if (!$dara.isNull(request.nodeIp)) {
      body["NodeIp"] = request.nodeIp;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.searchKeyWord)) {
      body["SearchKeyWord"] = request.searchKeyWord;
    }

    if (!$dara.isNull(request.searchParam)) {
      body["SearchParam"] = request.searchParam;
    }

    if (!$dara.isNull(request.searchRule)) {
      body["SearchRule"] = request.searchRule;
    }

    if (!$dara.isNull(request.searchValue)) {
      body["SearchValue"] = request.searchValue;
    }

    if (!$dara.isNull(request.sqlId)) {
      body["SqlId"] = request.sqlId;
    }

    if (!$dara.isNull(request.sqlTextLength)) {
      body["SqlTextLength"] = request.sqlTextLength;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeOasAnomalySQLList",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeOasAnomalySQLListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeOasAnomalySQLListResponse({}));
  }

  /**
   * You can call this API to view the list of SQL statements that are identified as having performance issues by the diagnostic system.
   * 
   * @param request - DescribeOasAnomalySQLListRequest
   * @returns DescribeOasAnomalySQLListResponse
   */
  async describeOasAnomalySQLList(request: $_model.DescribeOasAnomalySQLListRequest): Promise<$_model.DescribeOasAnomalySQLListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeOasAnomalySQLListWithOptions(request, runtime);
  }

  /**
   * You can call this API to query detailed information about the SQL, including the SQL text, related table names, and so on.
   * 
   * @param request - DescribeOasSQLDetailsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeOasSQLDetailsResponse
   */
  async describeOasSQLDetailsWithOptions(request: $_model.DescribeOasSQLDetailsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeOasSQLDetailsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dbName)) {
      body["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.dynamicSql)) {
      body["DynamicSql"] = request.dynamicSql;
    }

    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.parseTable)) {
      body["ParseTable"] = request.parseTable;
    }

    if (!$dara.isNull(request.sqlId)) {
      body["SqlId"] = request.sqlId;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeOasSQLDetails",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeOasSQLDetailsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeOasSQLDetailsResponse({}));
  }

  /**
   * You can call this API to query detailed information about the SQL, including the SQL text, related table names, and so on.
   * 
   * @param request - DescribeOasSQLDetailsRequest
   * @returns DescribeOasSQLDetailsResponse
   */
  async describeOasSQLDetails(request: $_model.DescribeOasSQLDetailsRequest): Promise<$_model.DescribeOasSQLDetailsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeOasSQLDetailsWithOptions(request, runtime);
  }

  /**
   * You can call this API to view the SQL execution history.
   * 
   * @param request - DescribeOasSQLHistoryListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeOasSQLHistoryListResponse
   */
  async describeOasSQLHistoryListWithOptions(request: $_model.DescribeOasSQLHistoryListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeOasSQLHistoryListResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      body["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.dbName)) {
      body["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.dynamicSql)) {
      body["DynamicSql"] = request.dynamicSql;
    }

    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.nodeIp)) {
      body["NodeIp"] = request.nodeIp;
    }

    if (!$dara.isNull(request.sqlId)) {
      body["SqlId"] = request.sqlId;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeOasSQLHistoryList",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeOasSQLHistoryListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeOasSQLHistoryListResponse({}));
  }

  /**
   * You can call this API to view the SQL execution history.
   * 
   * @param request - DescribeOasSQLHistoryListRequest
   * @returns DescribeOasSQLHistoryListResponse
   */
  async describeOasSQLHistoryList(request: $_model.DescribeOasSQLHistoryListRequest): Promise<$_model.DescribeOasSQLHistoryListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeOasSQLHistoryListWithOptions(request, runtime);
  }

  /**
   * You can call this API to retrieve information about the SQL execution plan stored in the diagnostic system based on the SQL ID.
   * 
   * @param request - DescribeOasSQLPlansRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeOasSQLPlansResponse
   */
  async describeOasSQLPlansWithOptions(request: $_model.DescribeOasSQLPlansRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeOasSQLPlansResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      body["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.dbName)) {
      body["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.dynamicSql)) {
      body["DynamicSql"] = request.dynamicSql;
    }

    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.planUnionHash)) {
      body["PlanUnionHash"] = request.planUnionHash;
    }

    if (!$dara.isNull(request.returnBriefInfo)) {
      body["ReturnBriefInfo"] = request.returnBriefInfo;
    }

    if (!$dara.isNull(request.sqlId)) {
      body["SqlId"] = request.sqlId;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeOasSQLPlans",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeOasSQLPlansResponse>(await this.callApi(params, req, runtime), new $_model.DescribeOasSQLPlansResponse({}));
  }

  /**
   * You can call this API to retrieve information about the SQL execution plan stored in the diagnostic system based on the SQL ID.
   * 
   * @param request - DescribeOasSQLPlansRequest
   * @returns DescribeOasSQLPlansResponse
   */
  async describeOasSQLPlans(request: $_model.DescribeOasSQLPlansRequest): Promise<$_model.DescribeOasSQLPlansResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeOasSQLPlansWithOptions(request, runtime);
  }

  /**
   * You can call this API to view a list of slow queries.
   * 
   * @param request - DescribeOasSlowSQLListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeOasSlowSQLListResponse
   */
  async describeOasSlowSQLListWithOptions(request: $_model.DescribeOasSlowSQLListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeOasSlowSQLListResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      body["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.dbName)) {
      body["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.dynamicSql)) {
      body["DynamicSql"] = request.dynamicSql;
    }

    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.filterCondition)) {
      body["FilterCondition"] = request.filterCondition;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.mergeDynamicSql)) {
      body["MergeDynamicSql"] = request.mergeDynamicSql;
    }

    if (!$dara.isNull(request.nodeIp)) {
      body["NodeIp"] = request.nodeIp;
    }

    if (!$dara.isNull(request.searchKeyWord)) {
      body["SearchKeyWord"] = request.searchKeyWord;
    }

    if (!$dara.isNull(request.searchParam)) {
      body["SearchParam"] = request.searchParam;
    }

    if (!$dara.isNull(request.searchRule)) {
      body["SearchRule"] = request.searchRule;
    }

    if (!$dara.isNull(request.searchValue)) {
      body["SearchValue"] = request.searchValue;
    }

    if (!$dara.isNull(request.sqlId)) {
      body["SqlId"] = request.sqlId;
    }

    if (!$dara.isNull(request.sqlTextLength)) {
      body["SqlTextLength"] = request.sqlTextLength;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeOasSlowSQLList",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeOasSlowSQLListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeOasSlowSQLListResponse({}));
  }

  /**
   * You can call this API to view a list of slow queries.
   * 
   * @param request - DescribeOasSlowSQLListRequest
   * @returns DescribeOasSlowSQLListResponse
   */
  async describeOasSlowSQLList(request: $_model.DescribeOasSlowSQLListRequest): Promise<$_model.DescribeOasSlowSQLListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeOasSlowSQLListWithOptions(request, runtime);
  }

  /**
   * You can call this API to retrieve the list of data on the SQL execution performance collected by the diagnostic system.
   * 
   * @param request - DescribeOasTopSQLListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeOasTopSQLListResponse
   */
  async describeOasTopSQLListWithOptions(request: $_model.DescribeOasTopSQLListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeOasTopSQLListResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      body["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.customColumns)) {
      body["CustomColumns"] = request.customColumns;
    }

    if (!$dara.isNull(request.dbName)) {
      body["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.dynamicSql)) {
      body["DynamicSql"] = request.dynamicSql;
    }

    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.filterCondition)) {
      body["FilterCondition"] = request.filterCondition;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.mergeDynamicSql)) {
      body["MergeDynamicSql"] = request.mergeDynamicSql;
    }

    if (!$dara.isNull(request.nodeIp)) {
      body["NodeIp"] = request.nodeIp;
    }

    if (!$dara.isNull(request.searchKeyWord)) {
      body["SearchKeyWord"] = request.searchKeyWord;
    }

    if (!$dara.isNull(request.searchParam)) {
      body["SearchParam"] = request.searchParam;
    }

    if (!$dara.isNull(request.searchRule)) {
      body["SearchRule"] = request.searchRule;
    }

    if (!$dara.isNull(request.searchValue)) {
      body["SearchValue"] = request.searchValue;
    }

    if (!$dara.isNull(request.sqlId)) {
      body["SqlId"] = request.sqlId;
    }

    if (!$dara.isNull(request.sqlTextLength)) {
      body["SqlTextLength"] = request.sqlTextLength;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeOasTopSQLList",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeOasTopSQLListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeOasTopSQLListResponse({}));
  }

  /**
   * You can call this API to retrieve the list of data on the SQL execution performance collected by the diagnostic system.
   * 
   * @param request - DescribeOasTopSQLListRequest
   * @returns DescribeOasTopSQLListResponse
   */
  async describeOasTopSQLList(request: $_model.DescribeOasTopSQLListRequest): Promise<$_model.DescribeOasTopSQLListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeOasTopSQLListWithOptions(request, runtime);
  }

  /**
   * You can call this operation to query the outline binding information or throttling information of an SQL statement in the database based on an SQLID.
   * 
   * @param request - DescribeOutlineBindingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeOutlineBindingResponse
   */
  async describeOutlineBindingWithOptions(request: $_model.DescribeOutlineBindingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeOutlineBindingResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.databaseName)) {
      body["DatabaseName"] = request.databaseName;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.isConcurrentLimit)) {
      body["IsConcurrentLimit"] = request.isConcurrentLimit;
    }

    if (!$dara.isNull(request.SQLId)) {
      body["SQLId"] = request.SQLId;
    }

    if (!$dara.isNull(request.tableName)) {
      body["TableName"] = request.tableName;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeOutlineBinding",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeOutlineBindingResponse>(await this.callApi(params, req, runtime), new $_model.DescribeOutlineBindingResponse({}));
  }

  /**
   * You can call this operation to query the outline binding information or throttling information of an SQL statement in the database based on an SQLID.
   * 
   * @param request - DescribeOutlineBindingRequest
   * @returns DescribeOutlineBindingResponse
   */
  async describeOutlineBinding(request: $_model.DescribeOutlineBindingRequest): Promise<$_model.DescribeOutlineBindingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeOutlineBindingWithOptions(request, runtime);
  }

  /**
   * Indicates whether a restart is required for changes to the parameter to take effect. Valid values: - true: A restart is required. - false: A restart is not required.
   * 
   * @param request - DescribeParametersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeParametersResponse
   */
  async describeParametersWithOptions(request: $_model.DescribeParametersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeParametersResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dimension)) {
      body["Dimension"] = request.dimension;
    }

    if (!$dara.isNull(request.dimensionValue)) {
      body["DimensionValue"] = request.dimensionValue;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeParameters",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeParametersResponse>(await this.callApi(params, req, runtime), new $_model.DescribeParametersResponse({}));
  }

  /**
   * Indicates whether a restart is required for changes to the parameter to take effect. Valid values: - true: A restart is required. - false: A restart is not required.
   * 
   * @param request - DescribeParametersRequest
   * @returns DescribeParametersResponse
   */
  async describeParameters(request: $_model.DescribeParametersRequest): Promise<$_model.DescribeParametersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeParametersWithOptions(request, runtime);
  }

  /**
   * You can call this operation to query the modification history of cluster or tenant parameters.
   * 
   * @param request - DescribeParametersHistoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeParametersHistoryResponse
   */
  async describeParametersHistoryWithOptions(request: $_model.DescribeParametersHistoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeParametersHistoryResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dimension)) {
      body["Dimension"] = request.dimension;
    }

    if (!$dara.isNull(request.dimensionValue)) {
      body["DimensionValue"] = request.dimensionValue;
    }

    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
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
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeParametersHistory",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeParametersHistoryResponse>(await this.callApi(params, req, runtime), new $_model.DescribeParametersHistoryResponse({}));
  }

  /**
   * You can call this operation to query the modification history of cluster or tenant parameters.
   * 
   * @param request - DescribeParametersHistoryRequest
   * @returns DescribeParametersHistoryResponse
   */
  async describeParametersHistory(request: $_model.DescribeParametersHistoryRequest): Promise<$_model.DescribeParametersHistoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeParametersHistoryWithOptions(request, runtime);
  }

  /**
   * You can call this operation to query session information.
   * 
   * @param request - DescribeProcessStatsCompositionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeProcessStatsCompositionResponse
   */
  async describeProcessStatsCompositionWithOptions(request: $_model.DescribeProcessStatsCompositionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeProcessStatsCompositionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientIp)) {
      body["ClientIp"] = request.clientIp;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.mergeDynamicSql)) {
      body["MergeDynamicSql"] = request.mergeDynamicSql;
    }

    if (!$dara.isNull(request.serverIp)) {
      body["ServerIp"] = request.serverIp;
    }

    if (!$dara.isNull(request.sqlText)) {
      body["SqlText"] = request.sqlText;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.UId)) {
      body["UId"] = request.UId;
    }

    if (!$dara.isNull(request.users)) {
      body["Users"] = request.users;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeProcessStatsComposition",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeProcessStatsCompositionResponse>(await this.callApi(params, req, runtime), new $_model.DescribeProcessStatsCompositionResponse({}));
  }

  /**
   * You can call this operation to query session information.
   * 
   * @param request - DescribeProcessStatsCompositionRequest
   * @returns DescribeProcessStatsCompositionResponse
   */
  async describeProcessStatsComposition(request: $_model.DescribeProcessStatsCompositionRequest): Promise<$_model.DescribeProcessStatsCompositionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeProcessStatsCompositionWithOptions(request, runtime);
  }

  /**
   * 查询项目详情
   * 
   * @param request - DescribeProjectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeProjectResponse
   */
  async describeProjectWithOptions(request: $_model.DescribeProjectRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeProjectResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeProject",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeProjectResponse>(await this.callApi(params, req, runtime), new $_model.DescribeProjectResponse({}));
  }

  /**
   * 查询项目详情
   * 
   * @param request - DescribeProjectRequest
   * @returns DescribeProjectResponse
   */
  async describeProject(request: $_model.DescribeProjectRequest): Promise<$_model.DescribeProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeProjectWithOptions(request, runtime);
  }

  /**
   * 获取项目的组件信息
   * 
   * @param request - DescribeProjectComponentsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeProjectComponentsResponse
   */
  async describeProjectComponentsWithOptions(request: $_model.DescribeProjectComponentsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeProjectComponentsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeProjectComponents",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeProjectComponentsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeProjectComponentsResponse({}));
  }

  /**
   * 获取项目的组件信息
   * 
   * @param request - DescribeProjectComponentsRequest
   * @returns DescribeProjectComponentsResponse
   */
  async describeProjectComponents(request: $_model.DescribeProjectComponentsRequest): Promise<$_model.DescribeProjectComponentsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeProjectComponentsWithOptions(request, runtime);
  }

  /**
   * 获取迁移/同步项目 Progress 信息
   * 
   * @param request - DescribeProjectProgressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeProjectProgressResponse
   */
  async describeProjectProgressWithOptions(request: $_model.DescribeProjectProgressRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeProjectProgressResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeProjectProgress",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeProjectProgressResponse>(await this.callApi(params, req, runtime), new $_model.DescribeProjectProgressResponse({}));
  }

  /**
   * 获取迁移/同步项目 Progress 信息
   * 
   * @param request - DescribeProjectProgressRequest
   * @returns DescribeProjectProgressResponse
   */
  async describeProjectProgress(request: $_model.DescribeProjectProgressRequest): Promise<$_model.DescribeProjectProgressResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeProjectProgressWithOptions(request, runtime);
  }

  /**
   * 查询项目步骤指标
   * 
   * @param request - DescribeProjectStepMetricRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeProjectStepMetricResponse
   */
  async describeProjectStepMetricWithOptions(request: $_model.DescribeProjectStepMetricRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeProjectStepMetricResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.aggregator)) {
      body["Aggregator"] = request.aggregator;
    }

    if (!$dara.isNull(request.beginTimestamp)) {
      body["BeginTimestamp"] = request.beginTimestamp;
    }

    if (!$dara.isNull(request.endTimestamp)) {
      body["EndTimestamp"] = request.endTimestamp;
    }

    if (!$dara.isNull(request.maxPointNum)) {
      body["MaxPointNum"] = request.maxPointNum;
    }

    if (!$dara.isNull(request.metricType)) {
      body["MetricType"] = request.metricType;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.stepName)) {
      body["StepName"] = request.stepName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeProjectStepMetric",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeProjectStepMetricResponse>(await this.callApi(params, req, runtime), new $_model.DescribeProjectStepMetricResponse({}));
  }

  /**
   * 查询项目步骤指标
   * 
   * @param request - DescribeProjectStepMetricRequest
   * @returns DescribeProjectStepMetricResponse
   */
  async describeProjectStepMetric(request: $_model.DescribeProjectStepMetricRequest): Promise<$_model.DescribeProjectStepMetricResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeProjectStepMetricWithOptions(request, runtime);
  }

  /**
   * 查询项目步骤
   * 
   * @param request - DescribeProjectStepsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeProjectStepsResponse
   */
  async describeProjectStepsWithOptions(request: $_model.DescribeProjectStepsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeProjectStepsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeProjectSteps",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeProjectStepsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeProjectStepsResponse({}));
  }

  /**
   * 查询项目步骤
   * 
   * @param request - DescribeProjectStepsRequest
   * @returns DescribeProjectStepsResponse
   */
  async describeProjectSteps(request: $_model.DescribeProjectStepsRequest): Promise<$_model.DescribeProjectStepsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeProjectStepsWithOptions(request, runtime);
  }

  /**
   * 查询代理服务信息
   * 
   * @param request - DescribeProxyServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeProxyServiceResponse
   */
  async describeProxyServiceWithOptions(request: $_model.DescribeProxyServiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeProxyServiceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeProxyService",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeProxyServiceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeProxyServiceResponse({}));
  }

  /**
   * 查询代理服务信息
   * 
   * @param request - DescribeProxyServiceRequest
   * @returns DescribeProxyServiceResponse
   */
  async describeProxyService(request: $_model.DescribeProxyServiceRequest): Promise<$_model.DescribeProxyServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeProxyServiceWithOptions(request, runtime);
  }

  /**
   * The tenant mode.   Valid values:  
   * Oracle   
   * MySQL
   * 
   * @param request - DescribeRecommendIndexRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRecommendIndexResponse
   */
  async describeRecommendIndexWithOptions(request: $_model.DescribeRecommendIndexRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRecommendIndexResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.SQLId)) {
      body["SQLId"] = request.SQLId;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRecommendIndex",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRecommendIndexResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRecommendIndexResponse({}));
  }

  /**
   * The tenant mode.   Valid values:  
   * Oracle   
   * MySQL
   * 
   * @param request - DescribeRecommendIndexRequest
   * @returns DescribeRecommendIndexResponse
   */
  async describeRecommendIndex(request: $_model.DescribeRecommendIndexRequest): Promise<$_model.DescribeRecommendIndexResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRecommendIndexWithOptions(request, runtime);
  }

  /**
   * Queries information about restorable OceanBase Database tenants.
   * 
   * @param request - DescribeRestorableTenantsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRestorableTenantsResponse
   */
  async describeRestorableTenantsWithOptions(request: $_model.DescribeRestorableTenantsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRestorableTenantsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.isOnline)) {
      body["IsOnline"] = request.isOnline;
    }

    if (!$dara.isNull(request.isRemote)) {
      body["IsRemote"] = request.isRemote;
    }

    if (!$dara.isNull(request.method)) {
      body["Method"] = request.method;
    }

    if (!$dara.isNull(request.restoreMode)) {
      body["RestoreMode"] = request.restoreMode;
    }

    if (!$dara.isNull(request.restoreObjectType)) {
      body["RestoreObjectType"] = request.restoreObjectType;
    }

    if (!$dara.isNull(request.setId)) {
      body["SetId"] = request.setId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRestorableTenants",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRestorableTenantsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRestorableTenantsResponse({}));
  }

  /**
   * Queries information about restorable OceanBase Database tenants.
   * 
   * @param request - DescribeRestorableTenantsRequest
   * @returns DescribeRestorableTenantsResponse
   */
  async describeRestorableTenants(request: $_model.DescribeRestorableTenantsRequest): Promise<$_model.DescribeRestorableTenantsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRestorableTenantsWithOptions(request, runtime);
  }

  /**
   * The username.
   * 
   * @param request - DescribeSQLDetailsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSQLDetailsResponse
   */
  async describeSQLDetailsWithOptions(request: $_model.DescribeSQLDetailsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSQLDetailsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.SQLId)) {
      body["SQLId"] = request.SQLId;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSQLDetails",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSQLDetailsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSQLDetailsResponse({}));
  }

  /**
   * The username.
   * 
   * @param request - DescribeSQLDetailsRequest
   * @returns DescribeSQLDetailsResponse
   */
  async describeSQLDetails(request: $_model.DescribeSQLDetailsRequest): Promise<$_model.DescribeSQLDetailsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSQLDetailsWithOptions(request, runtime);
  }

  /**
   * You can call this operation to query the execution history of an SQL statement in a specified period based on an SQL ID.
   * 
   * @param request - DescribeSQLHistoryListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSQLHistoryListResponse
   */
  async describeSQLHistoryListWithOptions(request: $_model.DescribeSQLHistoryListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSQLHistoryListResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.SQLId)) {
      body["SQLId"] = request.SQLId;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSQLHistoryList",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSQLHistoryListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSQLHistoryListResponse({}));
  }

  /**
   * You can call this operation to query the execution history of an SQL statement in a specified period based on an SQL ID.
   * 
   * @param request - DescribeSQLHistoryListRequest
   * @returns DescribeSQLHistoryListResponse
   */
  async describeSQLHistoryList(request: $_model.DescribeSQLHistoryListRequest): Promise<$_model.DescribeSQLHistoryListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSQLHistoryListWithOptions(request, runtime);
  }

  /**
   * You can call this operation to query the information about the SQL execution plans stored in the diagnostic system based on an SQL ID.
   * 
   * @param request - DescribeSQLPlansRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSQLPlansResponse
   */
  async describeSQLPlansWithOptions(request: $_model.DescribeSQLPlansRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSQLPlansResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.SQLId)) {
      body["SQLId"] = request.SQLId;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSQLPlans",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSQLPlansResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSQLPlansResponse({}));
  }

  /**
   * You can call this operation to query the information about the SQL execution plans stored in the diagnostic system based on an SQL ID.
   * 
   * @param request - DescribeSQLPlansRequest
   * @returns DescribeSQLPlansResponse
   */
  async describeSQLPlans(request: $_model.DescribeSQLPlansRequest): Promise<$_model.DescribeSQLPlansResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSQLPlansWithOptions(request, runtime);
  }

  /**
   * You can call this API to view the sample data of the execution details of the slow queries.
   * 
   * @param request - DescribeSQLSamplesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSQLSamplesResponse
   */
  async describeSQLSamplesWithOptions(request: $_model.DescribeSQLSamplesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSQLSamplesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dbName)) {
      body["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.returnSqlText)) {
      body["ReturnSqlText"] = request.returnSqlText;
    }

    if (!$dara.isNull(request.sqlId)) {
      body["SqlId"] = request.sqlId;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSQLSamples",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSQLSamplesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSQLSamplesResponse({}));
  }

  /**
   * You can call this API to view the sample data of the execution details of the slow queries.
   * 
   * @param request - DescribeSQLSamplesRequest
   * @returns DescribeSQLSamplesResponse
   */
  async describeSQLSamples(request: $_model.DescribeSQLSamplesRequest): Promise<$_model.DescribeSQLSamplesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSQLSamplesWithOptions(request, runtime);
  }

  /**
   * 获取单个 SQL 的调优建议，包括计划推荐和索引推荐
   * 
   * @param request - DescribeSQLTuningAdvicesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSQLTuningAdvicesResponse
   */
  async describeSQLTuningAdvicesWithOptions(request: $_model.DescribeSQLTuningAdvicesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSQLTuningAdvicesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      body["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.dbName)) {
      body["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.sqlId)) {
      body["SqlId"] = request.sqlId;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSQLTuningAdvices",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSQLTuningAdvicesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSQLTuningAdvicesResponse({}));
  }

  /**
   * 获取单个 SQL 的调优建议，包括计划推荐和索引推荐
   * 
   * @param request - DescribeSQLTuningAdvicesRequest
   * @returns DescribeSQLTuningAdvicesResponse
   */
  async describeSQLTuningAdvices(request: $_model.DescribeSQLTuningAdvicesRequest): Promise<$_model.DescribeSQLTuningAdvicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSQLTuningAdvicesWithOptions(request, runtime);
  }

  /**
   * 查询采样SQL的原始文本
   * 
   * @param request - DescribeSampleSqlRawTextsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSampleSqlRawTextsResponse
   */
  async describeSampleSqlRawTextsWithOptions(request: $_model.DescribeSampleSqlRawTextsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSampleSqlRawTextsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dbName)) {
      body["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.dynamicSql)) {
      body["DynamicSql"] = request.dynamicSql;
    }

    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.limit)) {
      body["Limit"] = request.limit;
    }

    if (!$dara.isNull(request.sqlId)) {
      body["SqlId"] = request.sqlId;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.traceId)) {
      body["TraceId"] = request.traceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSampleSqlRawTexts",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSampleSqlRawTextsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSampleSqlRawTextsResponse({}));
  }

  /**
   * 查询采样SQL的原始文本
   * 
   * @param request - DescribeSampleSqlRawTextsRequest
   * @returns DescribeSampleSqlRawTextsResponse
   */
  async describeSampleSqlRawTexts(request: $_model.DescribeSampleSqlRawTextsRequest): Promise<$_model.DescribeSampleSqlRawTextsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSampleSqlRawTextsWithOptions(request, runtime);
  }

  /**
   * The name of the security group.
   * 
   * @param request - DescribeSecurityIpGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSecurityIpGroupsResponse
   */
  async describeSecurityIpGroupsWithOptions(request: $_model.DescribeSecurityIpGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSecurityIpGroupsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSecurityIpGroups",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSecurityIpGroupsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSecurityIpGroupsResponse({}));
  }

  /**
   * The name of the security group.
   * 
   * @param request - DescribeSecurityIpGroupsRequest
   * @returns DescribeSecurityIpGroupsResponse
   */
  async describeSecurityIpGroups(request: $_model.DescribeSecurityIpGroupsRequest): Promise<$_model.DescribeSecurityIpGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSecurityIpGroupsWithOptions(request, runtime);
  }

  /**
   * You can call this operation to query sessions between the ApsaraDB for OceanBase and the application.
   * 
   * @param request - DescribeSessionListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSessionListResponse
   */
  async describeSessionListWithOptions(request: $_model.DescribeSessionListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSessionListResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSessionList",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSessionListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSessionListResponse({}));
  }

  /**
   * You can call this operation to query sessions between the ApsaraDB for OceanBase and the application.
   * 
   * @param request - DescribeSessionListRequest
   * @returns DescribeSessionListResponse
   */
  async describeSessionList(request: $_model.DescribeSessionListRequest): Promise<$_model.DescribeSessionListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSessionListWithOptions(request, runtime);
  }

  /**
   * You can call this operation to query the execution history of an SQL statement by SQL ID that is determined as a slow SQL statement during a specified period of time.
   * 
   * @param request - DescribeSlowSQLHistoryListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSlowSQLHistoryListResponse
   */
  async describeSlowSQLHistoryListWithOptions(request: $_model.DescribeSlowSQLHistoryListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSlowSQLHistoryListResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.SQLId)) {
      body["SQLId"] = request.SQLId;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSlowSQLHistoryList",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSlowSQLHistoryListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSlowSQLHistoryListResponse({}));
  }

  /**
   * You can call this operation to query the execution history of an SQL statement by SQL ID that is determined as a slow SQL statement during a specified period of time.
   * 
   * @param request - DescribeSlowSQLHistoryListRequest
   * @returns DescribeSlowSQLHistoryListResponse
   */
  async describeSlowSQLHistoryList(request: $_model.DescribeSlowSQLHistoryListRequest): Promise<$_model.DescribeSlowSQLHistoryListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSlowSQLHistoryListWithOptions(request, runtime);
  }

  /**
   * You can call this operation to query the list of slow SQL statements
   * 
   * @param tmpReq - DescribeSlowSQLListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSlowSQLListResponse
   */
  async describeSlowSQLListWithOptions(tmpReq: $_model.DescribeSlowSQLListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSlowSQLListResponse> {
    tmpReq.validate();
    let request = new $_model.DescribeSlowSQLListShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.filterCondition)) {
      request.filterConditionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.filterCondition, "FilterCondition", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dbName)) {
      body["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.filterConditionShrink)) {
      body["FilterCondition"] = request.filterConditionShrink;
    }

    if (!$dara.isNull(request.nodeIp)) {
      body["NodeIp"] = request.nodeIp;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.SQLId)) {
      body["SQLId"] = request.SQLId;
    }

    if (!$dara.isNull(request.searchKeyWord)) {
      body["SearchKeyWord"] = request.searchKeyWord;
    }

    if (!$dara.isNull(request.searchParameter)) {
      body["SearchParameter"] = request.searchParameter;
    }

    if (!$dara.isNull(request.searchRule)) {
      body["SearchRule"] = request.searchRule;
    }

    if (!$dara.isNull(request.searchValue)) {
      body["SearchValue"] = request.searchValue;
    }

    if (!$dara.isNull(request.sortColumn)) {
      body["SortColumn"] = request.sortColumn;
    }

    if (!$dara.isNull(request.sortOrder)) {
      body["SortOrder"] = request.sortOrder;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSlowSQLList",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSlowSQLListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSlowSQLListResponse({}));
  }

  /**
   * You can call this operation to query the list of slow SQL statements
   * 
   * @param request - DescribeSlowSQLListRequest
   * @returns DescribeSlowSQLListResponse
   */
  async describeSlowSQLList(request: $_model.DescribeSlowSQLListRequest): Promise<$_model.DescribeSlowSQLListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSlowSQLListWithOptions(request, runtime);
  }

  /**
   * 按照客户端IP、用户、SQLID的维度统计SQL数据执行情况
   * 
   * @param request - DescribeSqlAuditStatRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSqlAuditStatResponse
   */
  async describeSqlAuditStatWithOptions(request: $_model.DescribeSqlAuditStatRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSqlAuditStatResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
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

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSqlAuditStat",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSqlAuditStatResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSqlAuditStatResponse({}));
  }

  /**
   * 按照客户端IP、用户、SQLID的维度统计SQL数据执行情况
   * 
   * @param request - DescribeSqlAuditStatRequest
   * @returns DescribeSqlAuditStatResponse
   */
  async describeSqlAuditStat(request: $_model.DescribeSqlAuditStatRequest): Promise<$_model.DescribeSqlAuditStatResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSqlAuditStatWithOptions(request, runtime);
  }

  /**
   * DescribeStandbyCreateMode
   * 
   * @param request - DescribeStandbyCreateModeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeStandbyCreateModeResponse
   */
  async describeStandbyCreateModeWithOptions(request: $_model.DescribeStandbyCreateModeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeStandbyCreateModeResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeStandbyCreateMode",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeStandbyCreateModeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeStandbyCreateModeResponse({}));
  }

  /**
   * DescribeStandbyCreateMode
   * 
   * @param request - DescribeStandbyCreateModeRequest
   * @returns DescribeStandbyCreateModeResponse
   */
  async describeStandbyCreateMode(request: $_model.DescribeStandbyCreateModeRequest): Promise<$_model.DescribeStandbyCreateModeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeStandbyCreateModeWithOptions(request, runtime);
  }

  /**
   * You can call this operation to query tags.
   * 
   * @param request - DescribeTagValuesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTagValuesResponse
   */
  async describeTagValuesWithOptions(request: $_model.DescribeTagValuesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTagValuesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTagValues",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeTagValuesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTagValuesResponse({}));
  }

  /**
   * You can call this operation to query tags.
   * 
   * @param request - DescribeTagValuesRequest
   * @returns DescribeTagValuesResponse
   */
  async describeTagValues(request: $_model.DescribeTagValuesRequest): Promise<$_model.DescribeTagValuesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTagValuesWithOptions(request, runtime);
  }

  /**
   * You can call this operation to query the information of a specific tenant in a specific cluster.
   * 
   * @param request - DescribeTenantRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTenantResponse
   */
  async describeTenantWithOptions(request: $_model.DescribeTenantRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTenantResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTenant",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeTenantResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTenantResponse({}));
  }

  /**
   * You can call this operation to query the information of a specific tenant in a specific cluster.
   * 
   * @param request - DescribeTenantRequest
   * @returns DescribeTenantResponse
   */
  async describeTenant(request: $_model.DescribeTenantRequest): Promise<$_model.DescribeTenantResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTenantWithOptions(request, runtime);
  }

  /**
   * 查询租户加密信息
   * 
   * @param request - DescribeTenantEncryptionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTenantEncryptionResponse
   */
  async describeTenantEncryptionWithOptions(request: $_model.DescribeTenantEncryptionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTenantEncryptionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.tenantName)) {
      body["TenantName"] = request.tenantName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTenantEncryption",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeTenantEncryptionResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTenantEncryptionResponse({}));
  }

  /**
   * 查询租户加密信息
   * 
   * @param request - DescribeTenantEncryptionRequest
   * @returns DescribeTenantEncryptionResponse
   */
  async describeTenantEncryption(request: $_model.DescribeTenantEncryptionRequest): Promise<$_model.DescribeTenantEncryptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTenantEncryptionWithOptions(request, runtime);
  }

  /**
   * The list of tenant IDs.
   * 
   * @param request - DescribeTenantMetricsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTenantMetricsResponse
   */
  async describeTenantMetricsWithOptions(request: $_model.DescribeTenantMetricsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTenantMetricsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.metrics)) {
      body["Metrics"] = request.metrics;
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

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.tenantIdList)) {
      body["TenantIdList"] = request.tenantIdList;
    }

    if (!$dara.isNull(request.tenantName)) {
      body["TenantName"] = request.tenantName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTenantMetrics",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeTenantMetricsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTenantMetricsResponse({}));
  }

  /**
   * The list of tenant IDs.
   * 
   * @param request - DescribeTenantMetricsRequest
   * @returns DescribeTenantMetricsResponse
   */
  async describeTenantMetrics(request: $_model.DescribeTenantMetricsRequest): Promise<$_model.DescribeTenantMetricsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTenantMetricsWithOptions(request, runtime);
  }

  /**
   * You can call this operation to query the maximum readable timestamp of a tenant.
   * 
   * @param request - DescribeTenantReadableScnRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTenantReadableScnResponse
   */
  async describeTenantReadableScnWithOptions(request: $_model.DescribeTenantReadableScnRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTenantReadableScnResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTenantReadableScn",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeTenantReadableScnResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTenantReadableScnResponse({}));
  }

  /**
   * You can call this operation to query the maximum readable timestamp of a tenant.
   * 
   * @param request - DescribeTenantReadableScnRequest
   * @returns DescribeTenantReadableScnResponse
   */
  async describeTenantReadableScn(request: $_model.DescribeTenantReadableScnRequest): Promise<$_model.DescribeTenantReadableScnResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTenantReadableScnWithOptions(request, runtime);
  }

  /**
   * You can call this operation to query security check items of an OceanBase Database tenant.
   * 
   * @param request - DescribeTenantSecurityConfigsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTenantSecurityConfigsResponse
   */
  async describeTenantSecurityConfigsWithOptions(request: $_model.DescribeTenantSecurityConfigsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTenantSecurityConfigsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.checkId)) {
      body["CheckId"] = request.checkId;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTenantSecurityConfigs",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeTenantSecurityConfigsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTenantSecurityConfigsResponse({}));
  }

  /**
   * You can call this operation to query security check items of an OceanBase Database tenant.
   * 
   * @param request - DescribeTenantSecurityConfigsRequest
   * @returns DescribeTenantSecurityConfigsResponse
   */
  async describeTenantSecurityConfigs(request: $_model.DescribeTenantSecurityConfigsRequest): Promise<$_model.DescribeTenantSecurityConfigsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTenantSecurityConfigsWithOptions(request, runtime);
  }

  /**
   * You can call this operation to view the list of whitelist groups of the tenant.
   * 
   * @param request - DescribeTenantSecurityIpGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTenantSecurityIpGroupsResponse
   */
  async describeTenantSecurityIpGroupsWithOptions(request: $_model.DescribeTenantSecurityIpGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTenantSecurityIpGroupsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTenantSecurityIpGroups",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeTenantSecurityIpGroupsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTenantSecurityIpGroupsResponse({}));
  }

  /**
   * You can call this operation to view the list of whitelist groups of the tenant.
   * 
   * @param request - DescribeTenantSecurityIpGroupsRequest
   * @returns DescribeTenantSecurityIpGroupsResponse
   */
  async describeTenantSecurityIpGroups(request: $_model.DescribeTenantSecurityIpGroupsRequest): Promise<$_model.DescribeTenantSecurityIpGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTenantSecurityIpGroupsWithOptions(request, runtime);
  }

  /**
   * You can call this operation to query the tags of tenants in a cluster.
   * 
   * @param request - DescribeTenantTagsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTenantTagsResponse
   */
  async describeTenantTagsWithOptions(request: $_model.DescribeTenantTagsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTenantTagsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.tags)) {
      body["Tags"] = request.tags;
    }

    if (!$dara.isNull(request.tenantIds)) {
      body["TenantIds"] = request.tenantIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTenantTags",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeTenantTagsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTenantTagsResponse({}));
  }

  /**
   * You can call this operation to query the tags of tenants in a cluster.
   * 
   * @param request - DescribeTenantTagsRequest
   * @returns DescribeTenantTagsResponse
   */
  async describeTenantTags(request: $_model.DescribeTenantTagsRequest): Promise<$_model.DescribeTenantTagsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTenantTagsWithOptions(request, runtime);
  }

  /**
   * You can call this operation to obtain the account authorization information of the tenant.
   * 
   * @param request - DescribeTenantUserRolesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTenantUserRolesResponse
   */
  async describeTenantUserRolesWithOptions(request: $_model.DescribeTenantUserRolesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTenantUserRolesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTenantUserRoles",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeTenantUserRolesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTenantUserRolesResponse({}));
  }

  /**
   * You can call this operation to obtain the account authorization information of the tenant.
   * 
   * @param request - DescribeTenantUserRolesRequest
   * @returns DescribeTenantUserRolesResponse
   */
  async describeTenantUserRoles(request: $_model.DescribeTenantUserRolesRequest): Promise<$_model.DescribeTenantUserRolesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTenantUserRolesWithOptions(request, runtime);
  }

  /**
   * The return result of the request.
   * 
   * @param request - DescribeTenantUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTenantUsersResponse
   */
  async describeTenantUsersWithOptions(request: $_model.DescribeTenantUsersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTenantUsersResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.searchKey)) {
      body["SearchKey"] = request.searchKey;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.userName)) {
      body["UserName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTenantUsers",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeTenantUsersResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTenantUsersResponse({}));
  }

  /**
   * The return result of the request.
   * 
   * @param request - DescribeTenantUsersRequest
   * @returns DescribeTenantUsersResponse
   */
  async describeTenantUsers(request: $_model.DescribeTenantUsersRequest): Promise<$_model.DescribeTenantUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTenantUsersWithOptions(request, runtime);
  }

  /**
   * Indicates whether a read-only connection has been created.
   * 
   * @param request - DescribeTenantZonesReadRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTenantZonesReadResponse
   */
  async describeTenantZonesReadWithOptions(request: $_model.DescribeTenantZonesReadRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTenantZonesReadResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTenantZonesRead",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeTenantZonesReadResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTenantZonesReadResponse({}));
  }

  /**
   * Indicates whether a read-only connection has been created.
   * 
   * @param request - DescribeTenantZonesReadRequest
   * @returns DescribeTenantZonesReadResponse
   */
  async describeTenantZonesRead(request: $_model.DescribeTenantZonesReadRequest): Promise<$_model.DescribeTenantZonesReadResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTenantZonesReadWithOptions(request, runtime);
  }

  /**
   * You can call this operation to query the tenants in an OceanBase cluster.
   * 
   * @param request - DescribeTenantsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTenantsResponse
   */
  async describeTenantsWithOptions(request: $_model.DescribeTenantsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTenantsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.searchKey)) {
      body["SearchKey"] = request.searchKey;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.tenantName)) {
      body["TenantName"] = request.tenantName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTenants",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeTenantsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTenantsResponse({}));
  }

  /**
   * You can call this operation to query the tenants in an OceanBase cluster.
   * 
   * @param request - DescribeTenantsRequest
   * @returns DescribeTenantsResponse
   */
  async describeTenants(request: $_model.DescribeTenantsRequest): Promise<$_model.DescribeTenantsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTenantsWithOptions(request, runtime);
  }

  /**
   * The time zones supported by the tenant.
   * 
   * @param request - DescribeTimeZonesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTimeZonesResponse
   */
  async describeTimeZonesWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTimeZonesResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTimeZones",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeTimeZonesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTimeZonesResponse({}));
  }

  /**
   * The time zones supported by the tenant.
   * @returns DescribeTimeZonesResponse
   */
  async describeTimeZones(): Promise<$_model.DescribeTimeZonesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTimeZonesWithOptions(runtime);
  }

  /**
   * The name of the database.
   * 
   * @param tmpReq - DescribeTopSQLListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTopSQLListResponse
   */
  async describeTopSQLListWithOptions(tmpReq: $_model.DescribeTopSQLListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTopSQLListResponse> {
    tmpReq.validate();
    let request = new $_model.DescribeTopSQLListShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.filterCondition)) {
      request.filterConditionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.filterCondition, "FilterCondition", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dbName)) {
      body["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.filterConditionShrink)) {
      body["FilterCondition"] = request.filterConditionShrink;
    }

    if (!$dara.isNull(request.nodeIp)) {
      body["NodeIp"] = request.nodeIp;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.SQLId)) {
      body["SQLId"] = request.SQLId;
    }

    if (!$dara.isNull(request.searchKeyWord)) {
      body["SearchKeyWord"] = request.searchKeyWord;
    }

    if (!$dara.isNull(request.searchParameter)) {
      body["SearchParameter"] = request.searchParameter;
    }

    if (!$dara.isNull(request.searchRule)) {
      body["SearchRule"] = request.searchRule;
    }

    if (!$dara.isNull(request.searchValue)) {
      body["SearchValue"] = request.searchValue;
    }

    if (!$dara.isNull(request.sortColumn)) {
      body["SortColumn"] = request.sortColumn;
    }

    if (!$dara.isNull(request.sortOrder)) {
      body["SortOrder"] = request.sortOrder;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTopSQLList",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeTopSQLListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTopSQLListResponse({}));
  }

  /**
   * The name of the database.
   * 
   * @param request - DescribeTopSQLListRequest
   * @returns DescribeTopSQLListResponse
   */
  async describeTopSQLList(request: $_model.DescribeTopSQLListRequest): Promise<$_model.DescribeTopSQLListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTopSQLListWithOptions(request, runtime);
  }

  /**
   * The deployment mode.
   * 
   * @param request - DescribeZonesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeZonesResponse
   */
  async describeZonesWithOptions(request: $_model.DescribeZonesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeZonesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.cpuArch)) {
      body["CpuArch"] = request.cpuArch;
    }

    if (!$dara.isNull(request.deployType)) {
      body["DeployType"] = request.deployType;
    }

    if (!$dara.isNull(request.series)) {
      body["Series"] = request.series;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeZones",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeZonesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeZonesResponse({}));
  }

  /**
   * The deployment mode.
   * 
   * @param request - DescribeZonesRequest
   * @returns DescribeZonesResponse
   */
  async describeZones(request: $_model.DescribeZonesRequest): Promise<$_model.DescribeZonesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeZonesWithOptions(request, runtime);
  }

  /**
   * 公有云上传OSS 获取一个临时上传url
   * 
   * @param request - GetUploadOssUrlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUploadOssUrlResponse
   */
  async getUploadOssUrlWithOptions(request: $_model.GetUploadOssUrlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetUploadOssUrlResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.effectiveTimeMinutes)) {
      body["EffectiveTimeMinutes"] = request.effectiveTimeMinutes;
    }

    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUploadOssUrl",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetUploadOssUrlResponse>(await this.callApi(params, req, runtime), new $_model.GetUploadOssUrlResponse({}));
  }

  /**
   * 公有云上传OSS 获取一个临时上传url
   * 
   * @param request - GetUploadOssUrlRequest
   * @returns GetUploadOssUrlResponse
   */
  async getUploadOssUrl(request: $_model.GetUploadOssUrlRequest): Promise<$_model.GetUploadOssUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getUploadOssUrlWithOptions(request, runtime);
  }

  /**
   * You can call this operation to close a session.
   * 
   * @param request - KillProcessListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns KillProcessListResponse
   */
  async killProcessListWithOptions(request: $_model.KillProcessListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.KillProcessListResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.sessionList)) {
      body["SessionList"] = request.sessionList;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "KillProcessList",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.KillProcessListResponse>(await this.callApi(params, req, runtime), new $_model.KillProcessListResponse({}));
  }

  /**
   * You can call this operation to close a session.
   * 
   * @param request - KillProcessListRequest
   * @returns KillProcessListResponse
   */
  async killProcessList(request: $_model.KillProcessListRequest): Promise<$_model.KillProcessListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.killProcessListWithOptions(request, runtime);
  }

  /**
   * 查询标签列表
   * 
   * @param request - ListAllLabelsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAllLabelsResponse
   */
  async listAllLabelsWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.ListAllLabelsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "ListAllLabels",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAllLabelsResponse>(await this.callApi(params, req, runtime), new $_model.ListAllLabelsResponse({}));
  }

  /**
   * 查询标签列表
   * @returns ListAllLabelsResponse
   */
  async listAllLabels(): Promise<$_model.ListAllLabelsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAllLabelsWithOptions(runtime);
  }

  /**
   * 查询数据源列表 (MySql、OB_MYSQL、OB_ORACLE)
   * 
   * @param tmpReq - ListDataSourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataSourceResponse
   */
  async listDataSourceWithOptions(tmpReq: $_model.ListDataSourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDataSourceResponse> {
    tmpReq.validate();
    let request = new $_model.ListDataSourceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.types)) {
      request.typesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.types, "Types", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.order)) {
      body["Order"] = request.order;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.searchKey)) {
      body["SearchKey"] = request.searchKey;
    }

    if (!$dara.isNull(request.sortField)) {
      body["SortField"] = request.sortField;
    }

    if (!$dara.isNull(request.typesShrink)) {
      body["Types"] = request.typesShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDataSource",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDataSourceResponse>(await this.callApi(params, req, runtime), new $_model.ListDataSourceResponse({}));
  }

  /**
   * 查询数据源列表 (MySql、OB_MYSQL、OB_ORACLE)
   * 
   * @param request - ListDataSourceRequest
   * @returns ListDataSourceResponse
   */
  async listDataSource(request: $_model.ListDataSourceRequest): Promise<$_model.ListDataSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDataSourceWithOptions(request, runtime);
  }

  /**
   * 查询项目的全量校验结果
   * 
   * @param tmpReq - ListProjectFullVerifyResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListProjectFullVerifyResultResponse
   */
  async listProjectFullVerifyResultWithOptions(tmpReq: $_model.ListProjectFullVerifyResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListProjectFullVerifyResultResponse> {
    tmpReq.validate();
    let request = new $_model.ListProjectFullVerifyResultShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.destSchemas)) {
      request.destSchemasShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.destSchemas, "DestSchemas", "json");
    }

    if (!$dara.isNull(tmpReq.sourceSchemas)) {
      request.sourceSchemasShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sourceSchemas, "SourceSchemas", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.destSchemasShrink)) {
      body["DestSchemas"] = request.destSchemasShrink;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.sourceSchemasShrink)) {
      body["SourceSchemas"] = request.sourceSchemasShrink;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListProjectFullVerifyResult",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListProjectFullVerifyResultResponse>(await this.callApi(params, req, runtime), new $_model.ListProjectFullVerifyResultResponse({}));
  }

  /**
   * 查询项目的全量校验结果
   * 
   * @param request - ListProjectFullVerifyResultRequest
   * @returns ListProjectFullVerifyResultResponse
   */
  async listProjectFullVerifyResult(request: $_model.ListProjectFullVerifyResultRequest): Promise<$_model.ListProjectFullVerifyResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listProjectFullVerifyResultWithOptions(request, runtime);
  }

  /**
   * 根据项目 ID 查询项目的修改记录
   * 
   * @param request - ListProjectModifyRecordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListProjectModifyRecordsResponse
   */
  async listProjectModifyRecordsWithOptions(request: $_model.ListProjectModifyRecordsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListProjectModifyRecordsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListProjectModifyRecords",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListProjectModifyRecordsResponse>(await this.callApi(params, req, runtime), new $_model.ListProjectModifyRecordsResponse({}));
  }

  /**
   * 根据项目 ID 查询项目的修改记录
   * 
   * @param request - ListProjectModifyRecordsRequest
   * @returns ListProjectModifyRecordsResponse
   */
  async listProjectModifyRecords(request: $_model.ListProjectModifyRecordsRequest): Promise<$_model.ListProjectModifyRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listProjectModifyRecordsWithOptions(request, runtime);
  }

  /**
   * 查询项目列表
   * 
   * @param tmpReq - ListProjectsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListProjectsResponse
   */
  async listProjectsWithOptions(tmpReq: $_model.ListProjectsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListProjectsResponse> {
    tmpReq.validate();
    let request = new $_model.ListProjectsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.labelIds)) {
      request.labelIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.labelIds, "LabelIds", "json");
    }

    if (!$dara.isNull(tmpReq.sinkEndpointTypes)) {
      request.sinkEndpointTypesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sinkEndpointTypes, "SinkEndpointTypes", "json");
    }

    if (!$dara.isNull(tmpReq.sourceEndpointTypes)) {
      request.sourceEndpointTypesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sourceEndpointTypes, "SourceEndpointTypes", "json");
    }

    if (!$dara.isNull(tmpReq.status)) {
      request.statusShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.status, "Status", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.labelIdsShrink)) {
      body["LabelIds"] = request.labelIdsShrink;
    }

    if (!$dara.isNull(request.needRelatedInfo)) {
      body["NeedRelatedInfo"] = request.needRelatedInfo;
    }

    if (!$dara.isNull(request.order)) {
      body["Order"] = request.order;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.searchKey)) {
      body["SearchKey"] = request.searchKey;
    }

    if (!$dara.isNull(request.sinkEndpointTypesShrink)) {
      body["SinkEndpointTypes"] = request.sinkEndpointTypesShrink;
    }

    if (!$dara.isNull(request.sortField)) {
      body["SortField"] = request.sortField;
    }

    if (!$dara.isNull(request.sourceEndpointTypesShrink)) {
      body["SourceEndpointTypes"] = request.sourceEndpointTypesShrink;
    }

    if (!$dara.isNull(request.statusShrink)) {
      body["Status"] = request.statusShrink;
    }

    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
    }

    if (!$dara.isNull(request.visibleSubProject)) {
      body["VisibleSubProject"] = request.visibleSubProject;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListProjects",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListProjectsResponse>(await this.callApi(params, req, runtime), new $_model.ListProjectsResponse({}));
  }

  /**
   * 查询项目列表
   * 
   * @param request - ListProjectsRequest
   * @returns ListProjectsResponse
   */
  async listProjects(request: $_model.ListProjectsRequest): Promise<$_model.ListProjectsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listProjectsWithOptions(request, runtime);
  }

  /**
   * 查询传输实例列表
   * 
   * @param tmpReq - ListWorkerInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListWorkerInstancesResponse
   */
  async listWorkerInstancesWithOptions(tmpReq: $_model.ListWorkerInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListWorkerInstancesResponse> {
    tmpReq.validate();
    let request = new $_model.ListWorkerInstancesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.specs)) {
      request.specsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.specs, "Specs", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.destType)) {
      body["DestType"] = request.destType;
    }

    if (!$dara.isNull(request.instanceName)) {
      body["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.onlyBindable)) {
      body["OnlyBindable"] = request.onlyBindable;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.sourceType)) {
      body["SourceType"] = request.sourceType;
    }

    if (!$dara.isNull(request.specsShrink)) {
      body["Specs"] = request.specsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListWorkerInstances",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListWorkerInstancesResponse>(await this.callApi(params, req, runtime), new $_model.ListWorkerInstancesResponse({}));
  }

  /**
   * 查询传输实例列表
   * 
   * @param request - ListWorkerInstancesRequest
   * @returns ListWorkerInstancesResponse
   */
  async listWorkerInstances(request: $_model.ListWorkerInstancesRequest): Promise<$_model.ListWorkerInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listWorkerInstancesWithOptions(request, runtime);
  }

  /**
   * The request ID.
   * 
   * @param request - ModifyDatabaseDescriptionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDatabaseDescriptionResponse
   */
  async modifyDatabaseDescriptionWithOptions(request: $_model.ModifyDatabaseDescriptionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDatabaseDescriptionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.databaseName)) {
      body["DatabaseName"] = request.databaseName;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDatabaseDescription",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDatabaseDescriptionResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDatabaseDescriptionResponse({}));
  }

  /**
   * The request ID.
   * 
   * @param request - ModifyDatabaseDescriptionRequest
   * @returns ModifyDatabaseDescriptionResponse
   */
  async modifyDatabaseDescription(request: $_model.ModifyDatabaseDescriptionRequest): Promise<$_model.ModifyDatabaseDescriptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDatabaseDescriptionWithOptions(request, runtime);
  }

  /**
   * The accounts that have privileges on the database.
   * 
   * @param request - ModifyDatabaseUserRolesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDatabaseUserRolesResponse
   */
  async modifyDatabaseUserRolesWithOptions(request: $_model.ModifyDatabaseUserRolesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDatabaseUserRolesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.databaseName)) {
      body["DatabaseName"] = request.databaseName;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.users)) {
      body["Users"] = request.users;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDatabaseUserRoles",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDatabaseUserRolesResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDatabaseUserRolesResponse({}));
  }

  /**
   * The accounts that have privileges on the database.
   * 
   * @param request - ModifyDatabaseUserRolesRequest
   * @returns ModifyDatabaseUserRolesResponse
   */
  async modifyDatabaseUserRoles(request: $_model.ModifyDatabaseUserRolesRequest): Promise<$_model.ModifyDatabaseUserRolesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDatabaseUserRolesWithOptions(request, runtime);
  }

  /**
   * The name of the OceanBase cluster.
   * 
   * @param request - ModifyInstanceNameRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyInstanceNameResponse
   */
  async modifyInstanceNameWithOptions(request: $_model.ModifyInstanceNameRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyInstanceNameResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceName)) {
      body["InstanceName"] = request.instanceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyInstanceName",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyInstanceNameResponse>(await this.callApi(params, req, runtime), new $_model.ModifyInstanceNameResponse({}));
  }

  /**
   * The name of the OceanBase cluster.
   * 
   * @param request - ModifyInstanceNameRequest
   * @returns ModifyInstanceNameResponse
   */
  async modifyInstanceName(request: $_model.ModifyInstanceNameRequest): Promise<$_model.ModifyInstanceNameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyInstanceNameWithOptions(request, runtime);
  }

  /**
   * You can call this operation to modify the number of nodes in a cluster.
   * 
   * @param request - ModifyInstanceNodeNumRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyInstanceNodeNumResponse
   */
  async modifyInstanceNodeNumWithOptions(request: $_model.ModifyInstanceNodeNumRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyInstanceNodeNumResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.nodeNum)) {
      body["NodeNum"] = request.nodeNum;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyInstanceNodeNum",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyInstanceNodeNumResponse>(await this.callApi(params, req, runtime), new $_model.ModifyInstanceNodeNumResponse({}));
  }

  /**
   * You can call this operation to modify the number of nodes in a cluster.
   * 
   * @param request - ModifyInstanceNodeNumRequest
   * @returns ModifyInstanceNodeNumResponse
   */
  async modifyInstanceNodeNum(request: $_model.ModifyInstanceNodeNumRequest): Promise<$_model.ModifyInstanceNodeNumResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyInstanceNodeNumWithOptions(request, runtime);
  }

  /**
   * You can call this operation to modify the Secure Sockets Layer (SSL) setting for an OceanBase cluster instance.
   * 
   * @remarks
   * There is currently no authorization information disclosed in the API.
   * 
   * @param request - ModifyInstanceSSLRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyInstanceSSLResponse
   */
  async modifyInstanceSSLWithOptions(request: $_model.ModifyInstanceSSLRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyInstanceSSLResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.enableSSL)) {
      body["EnableSSL"] = request.enableSSL;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyInstanceSSL",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyInstanceSSLResponse>(await this.callApi(params, req, runtime), new $_model.ModifyInstanceSSLResponse({}));
  }

  /**
   * You can call this operation to modify the Secure Sockets Layer (SSL) setting for an OceanBase cluster instance.
   * 
   * @remarks
   * There is currently no authorization information disclosed in the API.
   * 
   * @param request - ModifyInstanceSSLRequest
   * @returns ModifyInstanceSSLResponse
   */
  async modifyInstanceSSL(request: $_model.ModifyInstanceSSLRequest): Promise<$_model.ModifyInstanceSSLResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyInstanceSSLWithOptions(request, runtime);
  }

  /**
   * You can call this operation to modify the cluster specifications and storage space.
   * 
   * @param request - ModifyInstanceSpecRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyInstanceSpecResponse
   */
  async modifyInstanceSpecWithOptions(request: $_model.ModifyInstanceSpecRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyInstanceSpecResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.diskSize)) {
      body["DiskSize"] = request.diskSize;
    }

    if (!$dara.isNull(request.diskType)) {
      body["DiskType"] = request.diskType;
    }

    if (!$dara.isNull(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.instanceClass)) {
      body["InstanceClass"] = request.instanceClass;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.upgradeSpecNative)) {
      body["UpgradeSpecNative"] = request.upgradeSpecNative;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyInstanceSpec",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyInstanceSpecResponse>(await this.callApi(params, req, runtime), new $_model.ModifyInstanceSpecResponse({}));
  }

  /**
   * You can call this operation to modify the cluster specifications and storage space.
   * 
   * @param request - ModifyInstanceSpecRequest
   * @returns ModifyInstanceSpecResponse
   */
  async modifyInstanceSpec(request: $_model.ModifyInstanceSpecRequest): Promise<$_model.ModifyInstanceSpecResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyInstanceSpecWithOptions(request, runtime);
  }

  /**
   * You can call this operation to modify the tags of a cluster.
   * 
   * @param request - ModifyInstanceTagsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyInstanceTagsResponse
   */
  async modifyInstanceTagsWithOptions(request: $_model.ModifyInstanceTagsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyInstanceTagsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.tags)) {
      body["Tags"] = request.tags;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyInstanceTags",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyInstanceTagsResponse>(await this.callApi(params, req, runtime), new $_model.ModifyInstanceTagsResponse({}));
  }

  /**
   * You can call this operation to modify the tags of a cluster.
   * 
   * @param request - ModifyInstanceTagsRequest
   * @returns ModifyInstanceTagsResponse
   */
  async modifyInstanceTags(request: $_model.ModifyInstanceTagsRequest): Promise<$_model.ModifyInstanceTagsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyInstanceTagsWithOptions(request, runtime);
  }

  /**
   * You can call this operation to modify the temporary capacity of the OceanBase cluster.
   * 
   * @param request - ModifyInstanceTemporaryCapacityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyInstanceTemporaryCapacityResponse
   */
  async modifyInstanceTemporaryCapacityWithOptions(request: $_model.ModifyInstanceTemporaryCapacityRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyInstanceTemporaryCapacityResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      body["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.diskSize)) {
      body["DiskSize"] = request.diskSize;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.spec)) {
      body["Spec"] = request.spec;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyInstanceTemporaryCapacity",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyInstanceTemporaryCapacityResponse>(await this.callApi(params, req, runtime), new $_model.ModifyInstanceTemporaryCapacityResponse({}));
  }

  /**
   * You can call this operation to modify the temporary capacity of the OceanBase cluster.
   * 
   * @param request - ModifyInstanceTemporaryCapacityRequest
   * @returns ModifyInstanceTemporaryCapacityResponse
   */
  async modifyInstanceTemporaryCapacity(request: $_model.ModifyInstanceTemporaryCapacityRequest): Promise<$_model.ModifyInstanceTemporaryCapacityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyInstanceTemporaryCapacityWithOptions(request, runtime);
  }

  /**
   * The modification results.
   * 
   * @param request - ModifyParametersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyParametersResponse
   */
  async modifyParametersWithOptions(request: $_model.ModifyParametersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyParametersResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dimension)) {
      body["Dimension"] = request.dimension;
    }

    if (!$dara.isNull(request.dimensionValue)) {
      body["DimensionValue"] = request.dimensionValue;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.parameters)) {
      body["Parameters"] = request.parameters;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyParameters",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyParametersResponse>(await this.callApi(params, req, runtime), new $_model.ModifyParametersResponse({}));
  }

  /**
   * The modification results.
   * 
   * @param request - ModifyParametersRequest
   * @returns ModifyParametersResponse
   */
  async modifyParameters(request: $_model.ModifyParametersRequest): Promise<$_model.ModifyParametersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyParametersWithOptions(request, runtime);
  }

  /**
   * The name of the security group.
   * 
   * @param request - ModifySecurityIpsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifySecurityIpsResponse
   */
  async modifySecurityIpsWithOptions(request: $_model.ModifySecurityIpsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifySecurityIpsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.securityIpGroupName)) {
      body["SecurityIpGroupName"] = request.securityIpGroupName;
    }

    if (!$dara.isNull(request.securityIps)) {
      body["SecurityIps"] = request.securityIps;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifySecurityIps",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifySecurityIpsResponse>(await this.callApi(params, req, runtime), new $_model.ModifySecurityIpsResponse({}));
  }

  /**
   * The name of the security group.
   * 
   * @param request - ModifySecurityIpsRequest
   * @returns ModifySecurityIpsResponse
   */
  async modifySecurityIps(request: $_model.ModifySecurityIpsRequest): Promise<$_model.ModifySecurityIpsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifySecurityIpsWithOptions(request, runtime);
  }

  /**
   * @param request - ModifyTagNameRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyTagNameResponse
   */
  async modifyTagNameWithOptions(request: $_model.ModifyTagNameRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyTagNameResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.key)) {
      body["Key"] = request.key;
    }

    if (!$dara.isNull(request.newKey)) {
      body["NewKey"] = request.newKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyTagName",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyTagNameResponse>(await this.callApi(params, req, runtime), new $_model.ModifyTagNameResponse({}));
  }

  /**
   * @param request - ModifyTagNameRequest
   * @returns ModifyTagNameResponse
   */
  async modifyTagName(request: $_model.ModifyTagNameRequest): Promise<$_model.ModifyTagNameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyTagNameWithOptions(request, runtime);
  }

  /**
   * You can call this operation to rename a tag.
   * 
   * @param request - ModifyTagValueNameRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyTagValueNameResponse
   */
  async modifyTagValueNameWithOptions(request: $_model.ModifyTagValueNameRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyTagValueNameResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.key)) {
      body["Key"] = request.key;
    }

    if (!$dara.isNull(request.newValue)) {
      body["NewValue"] = request.newValue;
    }

    if (!$dara.isNull(request.value)) {
      body["Value"] = request.value;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyTagValueName",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyTagValueNameResponse>(await this.callApi(params, req, runtime), new $_model.ModifyTagValueNameResponse({}));
  }

  /**
   * You can call this operation to rename a tag.
   * 
   * @param request - ModifyTagValueNameRequest
   * @returns ModifyTagValueNameResponse
   */
  async modifyTagValueName(request: $_model.ModifyTagValueNameRequest): Promise<$_model.ModifyTagValueNameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyTagValueNameWithOptions(request, runtime);
  }

  /**
   * 租户加密变更
   * 
   * @param request - ModifyTenantEncryptionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyTenantEncryptionResponse
   */
  async modifyTenantEncryptionWithOptions(request: $_model.ModifyTenantEncryptionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyTenantEncryptionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.encryptionKeyId)) {
      body["EncryptionKeyId"] = request.encryptionKeyId;
    }

    if (!$dara.isNull(request.encryptionType)) {
      body["EncryptionType"] = request.encryptionType;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyTenantEncryption",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyTenantEncryptionResponse>(await this.callApi(params, req, runtime), new $_model.ModifyTenantEncryptionResponse({}));
  }

  /**
   * 租户加密变更
   * 
   * @param request - ModifyTenantEncryptionRequest
   * @returns ModifyTenantEncryptionResponse
   */
  async modifyTenantEncryption(request: $_model.ModifyTenantEncryptionRequest): Promise<$_model.ModifyTenantEncryptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyTenantEncryptionWithOptions(request, runtime);
  }

  /**
   * The return result of the request.
   * 
   * @param request - ModifyTenantPrimaryZoneRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyTenantPrimaryZoneResponse
   */
  async modifyTenantPrimaryZoneWithOptions(request: $_model.ModifyTenantPrimaryZoneRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyTenantPrimaryZoneResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.masterIntranetAddressZone)) {
      body["MasterIntranetAddressZone"] = request.masterIntranetAddressZone;
    }

    if (!$dara.isNull(request.primaryZone)) {
      body["PrimaryZone"] = request.primaryZone;
    }

    if (!$dara.isNull(request.tenantEndpointDirectId)) {
      body["TenantEndpointDirectId"] = request.tenantEndpointDirectId;
    }

    if (!$dara.isNull(request.tenantEndpointId)) {
      body["TenantEndpointId"] = request.tenantEndpointId;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.userDirectVSwitchId)) {
      body["UserDirectVSwitchId"] = request.userDirectVSwitchId;
    }

    if (!$dara.isNull(request.userVSwitchId)) {
      body["UserVSwitchId"] = request.userVSwitchId;
    }

    if (!$dara.isNull(request.userVpcOwnerId)) {
      body["UserVpcOwnerId"] = request.userVpcOwnerId;
    }

    if (!$dara.isNull(request.vpcId)) {
      body["VpcId"] = request.vpcId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyTenantPrimaryZone",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyTenantPrimaryZoneResponse>(await this.callApi(params, req, runtime), new $_model.ModifyTenantPrimaryZoneResponse({}));
  }

  /**
   * The return result of the request.
   * 
   * @param request - ModifyTenantPrimaryZoneRequest
   * @returns ModifyTenantPrimaryZoneResponse
   */
  async modifyTenantPrimaryZone(request: $_model.ModifyTenantPrimaryZoneRequest): Promise<$_model.ModifyTenantPrimaryZoneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyTenantPrimaryZoneWithOptions(request, runtime);
  }

  /**
   * You can call this operation to modify the specifications of a tenant in an OceanBase cluster.
   * 
   * @param request - ModifyTenantResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyTenantResourceResponse
   */
  async modifyTenantResourceWithOptions(request: $_model.ModifyTenantResourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyTenantResourceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.cpu)) {
      body["Cpu"] = request.cpu;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.logDisk)) {
      body["LogDisk"] = request.logDisk;
    }

    if (!$dara.isNull(request.memory)) {
      body["Memory"] = request.memory;
    }

    if (!$dara.isNull(request.readOnlyZoneList)) {
      body["ReadOnlyZoneList"] = request.readOnlyZoneList;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyTenantResource",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyTenantResourceResponse>(await this.callApi(params, req, runtime), new $_model.ModifyTenantResourceResponse({}));
  }

  /**
   * You can call this operation to modify the specifications of a tenant in an OceanBase cluster.
   * 
   * @param request - ModifyTenantResourceRequest
   * @returns ModifyTenantResourceResponse
   */
  async modifyTenantResource(request: $_model.ModifyTenantResourceRequest): Promise<$_model.ModifyTenantResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyTenantResourceWithOptions(request, runtime);
  }

  /**
   * You can call this operation to modify the information on the whitelist group of the tenant.
   * 
   * @param request - ModifyTenantSecurityIpGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyTenantSecurityIpGroupResponse
   */
  async modifyTenantSecurityIpGroupWithOptions(request: $_model.ModifyTenantSecurityIpGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyTenantSecurityIpGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.securityIpGroupName)) {
      body["SecurityIpGroupName"] = request.securityIpGroupName;
    }

    if (!$dara.isNull(request.securityIps)) {
      body["SecurityIps"] = request.securityIps;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyTenantSecurityIpGroup",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyTenantSecurityIpGroupResponse>(await this.callApi(params, req, runtime), new $_model.ModifyTenantSecurityIpGroupResponse({}));
  }

  /**
   * You can call this operation to modify the information on the whitelist group of the tenant.
   * 
   * @param request - ModifyTenantSecurityIpGroupRequest
   * @returns ModifyTenantSecurityIpGroupResponse
   */
  async modifyTenantSecurityIpGroup(request: $_model.ModifyTenantSecurityIpGroupRequest): Promise<$_model.ModifyTenantSecurityIpGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyTenantSecurityIpGroupWithOptions(request, runtime);
  }

  /**
   * You can call this operation to modify the tags of a tenant.
   * 
   * @param request - ModifyTenantTagsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyTenantTagsResponse
   */
  async modifyTenantTagsWithOptions(request: $_model.ModifyTenantTagsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyTenantTagsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.tags)) {
      body["Tags"] = request.tags;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyTenantTags",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyTenantTagsResponse>(await this.callApi(params, req, runtime), new $_model.ModifyTenantTagsResponse({}));
  }

  /**
   * You can call this operation to modify the tags of a tenant.
   * 
   * @param request - ModifyTenantTagsRequest
   * @returns ModifyTenantTagsResponse
   */
  async modifyTenantTags(request: $_model.ModifyTenantTagsRequest): Promise<$_model.ModifyTenantTagsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyTenantTagsWithOptions(request, runtime);
  }

  /**
   * The description of the database.
   * 
   * @param request - ModifyTenantUserDescriptionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyTenantUserDescriptionResponse
   */
  async modifyTenantUserDescriptionWithOptions(request: $_model.ModifyTenantUserDescriptionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyTenantUserDescriptionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.userName)) {
      body["UserName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyTenantUserDescription",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyTenantUserDescriptionResponse>(await this.callApi(params, req, runtime), new $_model.ModifyTenantUserDescriptionResponse({}));
  }

  /**
   * The description of the database.
   * 
   * @param request - ModifyTenantUserDescriptionRequest
   * @returns ModifyTenantUserDescriptionResponse
   */
  async modifyTenantUserDescription(request: $_model.ModifyTenantUserDescriptionRequest): Promise<$_model.ModifyTenantUserDescriptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyTenantUserDescriptionWithOptions(request, runtime);
  }

  /**
   * The request ID.
   * 
   * @param request - ModifyTenantUserPasswordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyTenantUserPasswordResponse
   */
  async modifyTenantUserPasswordWithOptions(request: $_model.ModifyTenantUserPasswordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyTenantUserPasswordResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.encryptionType)) {
      body["EncryptionType"] = request.encryptionType;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.userName)) {
      body["UserName"] = request.userName;
    }

    if (!$dara.isNull(request.userPassword)) {
      body["UserPassword"] = request.userPassword;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyTenantUserPassword",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyTenantUserPasswordResponse>(await this.callApi(params, req, runtime), new $_model.ModifyTenantUserPasswordResponse({}));
  }

  /**
   * The request ID.
   * 
   * @param request - ModifyTenantUserPasswordRequest
   * @returns ModifyTenantUserPasswordResponse
   */
  async modifyTenantUserPassword(request: $_model.ModifyTenantUserPasswordRequest): Promise<$_model.ModifyTenantUserPasswordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyTenantUserPasswordWithOptions(request, runtime);
  }

  /**
   * Indicates whether the privilege was granted to the role.
   * 
   * @param request - ModifyTenantUserRolesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyTenantUserRolesResponse
   */
  async modifyTenantUserRolesWithOptions(request: $_model.ModifyTenantUserRolesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyTenantUserRolesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.globalPermissions)) {
      body["GlobalPermissions"] = request.globalPermissions;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.modifyType)) {
      body["ModifyType"] = request.modifyType;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.userName)) {
      body["UserName"] = request.userName;
    }

    if (!$dara.isNull(request.userRole)) {
      body["UserRole"] = request.userRole;
    }

    if (!$dara.isNull(request.userType)) {
      body["UserType"] = request.userType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyTenantUserRoles",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyTenantUserRolesResponse>(await this.callApi(params, req, runtime), new $_model.ModifyTenantUserRolesResponse({}));
  }

  /**
   * Indicates whether the privilege was granted to the role.
   * 
   * @param request - ModifyTenantUserRolesRequest
   * @returns ModifyTenantUserRolesResponse
   */
  async modifyTenantUserRoles(request: $_model.ModifyTenantUserRolesRequest): Promise<$_model.ModifyTenantUserRolesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyTenantUserRolesWithOptions(request, runtime);
  }

  /**
   * The ID of the tenant.
   * 
   * @param request - ModifyTenantUserStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyTenantUserStatusResponse
   */
  async modifyTenantUserStatusWithOptions(request: $_model.ModifyTenantUserStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyTenantUserStatusResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.userName)) {
      body["UserName"] = request.userName;
    }

    if (!$dara.isNull(request.userStatus)) {
      body["UserStatus"] = request.userStatus;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyTenantUserStatus",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyTenantUserStatusResponse>(await this.callApi(params, req, runtime), new $_model.ModifyTenantUserStatusResponse({}));
  }

  /**
   * The ID of the tenant.
   * 
   * @param request - ModifyTenantUserStatusRequest
   * @returns ModifyTenantUserStatusResponse
   */
  async modifyTenantUserStatus(request: $_model.ModifyTenantUserStatusRequest): Promise<$_model.ModifyTenantUserStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyTenantUserStatusWithOptions(request, runtime);
  }

  /**
   * 释放项目
   * 
   * @param request - ReleaseProjectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReleaseProjectResponse
   */
  async releaseProjectWithOptions(request: $_model.ReleaseProjectRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReleaseProjectResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReleaseProject",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReleaseProjectResponse>(await this.callApi(params, req, runtime), new $_model.ReleaseProjectResponse({}));
  }

  /**
   * 释放项目
   * 
   * @param request - ReleaseProjectRequest
   * @returns ReleaseProjectResponse
   */
  async releaseProject(request: $_model.ReleaseProjectRequest): Promise<$_model.ReleaseProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.releaseProjectWithOptions(request, runtime);
  }

  /**
   * 释放传输实例 （未绑定项目时才可以释放）
   * 
   * @param request - ReleaseWorkerInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReleaseWorkerInstanceResponse
   */
  async releaseWorkerInstanceWithOptions(request: $_model.ReleaseWorkerInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReleaseWorkerInstanceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReleaseWorkerInstance",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReleaseWorkerInstanceResponse>(await this.callApi(params, req, runtime), new $_model.ReleaseWorkerInstanceResponse({}));
  }

  /**
   * 释放传输实例 （未绑定项目时才可以释放）
   * 
   * @param request - ReleaseWorkerInstanceRequest
   * @returns ReleaseWorkerInstanceResponse
   */
  async releaseWorkerInstance(request: $_model.ReleaseWorkerInstanceRequest): Promise<$_model.ReleaseWorkerInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.releaseWorkerInstanceWithOptions(request, runtime);
  }

  /**
   * 备实例解耦
   * 
   * @param request - RemoveStandbyInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveStandbyInstanceResponse
   */
  async removeStandbyInstanceWithOptions(request: $_model.RemoveStandbyInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveStandbyInstanceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.forced)) {
      body["Forced"] = request.forced;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.targetInstanceId)) {
      body["TargetInstanceId"] = request.targetInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveStandbyInstance",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveStandbyInstanceResponse>(await this.callApi(params, req, runtime), new $_model.RemoveStandbyInstanceResponse({}));
  }

  /**
   * 备实例解耦
   * 
   * @param request - RemoveStandbyInstanceRequest
   * @returns RemoveStandbyInstanceResponse
   */
  async removeStandbyInstance(request: $_model.RemoveStandbyInstanceRequest): Promise<$_model.RemoveStandbyInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeStandbyInstanceWithOptions(request, runtime);
  }

  /**
   * 恢复项目
   * 
   * @param request - ResumeProjectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResumeProjectResponse
   */
  async resumeProjectWithOptions(request: $_model.ResumeProjectRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ResumeProjectResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResumeProject",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResumeProjectResponse>(await this.callApi(params, req, runtime), new $_model.ResumeProjectResponse({}));
  }

  /**
   * 恢复项目
   * 
   * @param request - ResumeProjectRequest
   * @returns ResumeProjectResponse
   */
  async resumeProject(request: $_model.ResumeProjectRequest): Promise<$_model.ResumeProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resumeProjectWithOptions(request, runtime);
  }

  /**
   * 根据修改记录 ID 重试修改操作（仅支持处于 FAILED 状态的修改记录）
   * 
   * @param request - RetryProjectModifyRecordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RetryProjectModifyRecordsResponse
   */
  async retryProjectModifyRecordsWithOptions(request: $_model.RetryProjectModifyRecordsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RetryProjectModifyRecordsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RetryProjectModifyRecords",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RetryProjectModifyRecordsResponse>(await this.callApi(params, req, runtime), new $_model.RetryProjectModifyRecordsResponse({}));
  }

  /**
   * 根据修改记录 ID 重试修改操作（仅支持处于 FAILED 状态的修改记录）
   * 
   * @param request - RetryProjectModifyRecordsRequest
   * @returns RetryProjectModifyRecordsResponse
   */
  async retryProjectModifyRecords(request: $_model.RetryProjectModifyRecordsRequest): Promise<$_model.RetryProjectModifyRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.retryProjectModifyRecordsWithOptions(request, runtime);
  }

  /**
   * 启动项目
   * 
   * @param request - StartProjectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartProjectResponse
   */
  async startProjectWithOptions(request: $_model.StartProjectRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartProjectResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartProject",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartProjectResponse>(await this.callApi(params, req, runtime), new $_model.StartProjectResponse({}));
  }

  /**
   * 启动项目
   * 
   * @param request - StartProjectRequest
   * @returns StartProjectResponse
   */
  async startProject(request: $_model.StartProjectRequest): Promise<$_model.StartProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startProjectWithOptions(request, runtime);
  }

  /**
   * 启动该label下的所有未启动项目
   * 
   * @param request - StartProjectsByLabelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartProjectsByLabelResponse
   */
  async startProjectsByLabelWithOptions(request: $_model.StartProjectsByLabelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartProjectsByLabelResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartProjectsByLabel",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartProjectsByLabelResponse>(await this.callApi(params, req, runtime), new $_model.StartProjectsByLabelResponse({}));
  }

  /**
   * 启动该label下的所有未启动项目
   * 
   * @param request - StartProjectsByLabelRequest
   * @returns StartProjectsByLabelResponse
   */
  async startProjectsByLabel(request: $_model.StartProjectsByLabelRequest): Promise<$_model.StartProjectsByLabelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startProjectsByLabelWithOptions(request, runtime);
  }

  /**
   * 暂停项目
   * 
   * @param request - StopProjectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopProjectResponse
   */
  async stopProjectWithOptions(request: $_model.StopProjectRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopProjectResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopProject",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopProjectResponse>(await this.callApi(params, req, runtime), new $_model.StopProjectResponse({}));
  }

  /**
   * 暂停项目
   * 
   * @param request - StopProjectRequest
   * @returns StopProjectResponse
   */
  async stopProject(request: $_model.StopProjectRequest): Promise<$_model.StopProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopProjectWithOptions(request, runtime);
  }

  /**
   * 根据修改记录 ID 终止修改操作，不可恢复（仅支持处于 RUNNING / FAILED 状态的修改记录）
   * 
   * @param request - StopProjectModifyRecordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopProjectModifyRecordsResponse
   */
  async stopProjectModifyRecordsWithOptions(request: $_model.StopProjectModifyRecordsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopProjectModifyRecordsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopProjectModifyRecords",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopProjectModifyRecordsResponse>(await this.callApi(params, req, runtime), new $_model.StopProjectModifyRecordsResponse({}));
  }

  /**
   * 根据修改记录 ID 终止修改操作，不可恢复（仅支持处于 RUNNING / FAILED 状态的修改记录）
   * 
   * @param request - StopProjectModifyRecordsRequest
   * @returns StopProjectModifyRecordsResponse
   */
  async stopProjectModifyRecords(request: $_model.StopProjectModifyRecordsRequest): Promise<$_model.StopProjectModifyRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopProjectModifyRecordsWithOptions(request, runtime);
  }

  /**
   * 暂停该label下的所有运行中项目
   * 
   * @param request - StopProjectsByLabelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopProjectsByLabelResponse
   */
  async stopProjectsByLabelWithOptions(request: $_model.StopProjectsByLabelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopProjectsByLabelResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopProjectsByLabel",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopProjectsByLabelResponse>(await this.callApi(params, req, runtime), new $_model.StopProjectsByLabelResponse({}));
  }

  /**
   * 暂停该label下的所有运行中项目
   * 
   * @param request - StopProjectsByLabelRequest
   * @returns StopProjectsByLabelResponse
   */
  async stopProjectsByLabel(request: $_model.StopProjectsByLabelRequest): Promise<$_model.StopProjectsByLabelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopProjectsByLabelWithOptions(request, runtime);
  }

  /**
   * You can call this operation to switch between the primary and standby instances of OceanBase.
   * 
   * @param request - SwitchoverInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SwitchoverInstanceResponse
   */
  async switchoverInstanceWithOptions(request: $_model.SwitchoverInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SwitchoverInstanceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.forced)) {
      body["Forced"] = request.forced;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.targetInstanceId)) {
      body["TargetInstanceId"] = request.targetInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SwitchoverInstance",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SwitchoverInstanceResponse>(await this.callApi(params, req, runtime), new $_model.SwitchoverInstanceResponse({}));
  }

  /**
   * You can call this operation to switch between the primary and standby instances of OceanBase.
   * 
   * @param request - SwitchoverInstanceRequest
   * @returns SwitchoverInstanceResponse
   */
  async switchoverInstance(request: $_model.SwitchoverInstanceRequest): Promise<$_model.SwitchoverInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.switchoverInstanceWithOptions(request, runtime);
  }

  /**
   * 更新项目配置 Action=UpdateProjectConfig
   * 
   * @param tmpReq - UpdateProjectConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateProjectConfigResponse
   */
  async updateProjectConfigWithOptions(tmpReq: $_model.UpdateProjectConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateProjectConfigResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateProjectConfigShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.commonTransferConfig)) {
      request.commonTransferConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.commonTransferConfig, "CommonTransferConfig", "json");
    }

    if (!$dara.isNull(tmpReq.fullTransferConfig)) {
      request.fullTransferConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.fullTransferConfig, "FullTransferConfig", "json");
    }

    if (!$dara.isNull(tmpReq.incrTransferConfig)) {
      request.incrTransferConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.incrTransferConfig, "IncrTransferConfig", "json");
    }

    if (!$dara.isNull(tmpReq.reverseIncrTransferConfig)) {
      request.reverseIncrTransferConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.reverseIncrTransferConfig, "ReverseIncrTransferConfig", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.commonTransferConfigShrink)) {
      body["CommonTransferConfig"] = request.commonTransferConfigShrink;
    }

    if (!$dara.isNull(request.fullTransferConfigShrink)) {
      body["FullTransferConfig"] = request.fullTransferConfigShrink;
    }

    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.incrTransferConfigShrink)) {
      body["IncrTransferConfig"] = request.incrTransferConfigShrink;
    }

    if (!$dara.isNull(request.reverseIncrTransferConfigShrink)) {
      body["ReverseIncrTransferConfig"] = request.reverseIncrTransferConfigShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateProjectConfig",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateProjectConfigResponse>(await this.callApi(params, req, runtime), new $_model.UpdateProjectConfigResponse({}));
  }

  /**
   * 更新项目配置 Action=UpdateProjectConfig
   * 
   * @param request - UpdateProjectConfigRequest
   * @returns UpdateProjectConfigResponse
   */
  async updateProjectConfig(request: $_model.UpdateProjectConfigRequest): Promise<$_model.UpdateProjectConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateProjectConfigWithOptions(request, runtime);
  }

}
