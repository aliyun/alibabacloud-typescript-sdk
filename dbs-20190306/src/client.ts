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
    this._endpointMap = {
      'cn-qingdao': "dbs-api.cn-hangzhou.aliyuncs.com",
      'cn-beijing': "dbs-api.cn-hangzhou.aliyuncs.com",
      'cn-chengdu': "dbs-api.cn-chengdu.aliyuncs.com",
      'cn-zhangjiakou': "dbs-api.cn-hangzhou.aliyuncs.com",
      'cn-huhehaote': "dbs-api.cn-huhehaote.aliyuncs.com",
      'cn-hangzhou': "dbs-api.cn-hangzhou.aliyuncs.com",
      'cn-shanghai': "dbs-api.cn-hangzhou.aliyuncs.com",
      'cn-shenzhen': "dbs-api.cn-hangzhou.aliyuncs.com",
      'cn-hongkong': "dbs-api.cn-hangzhou.aliyuncs.com",
      'ap-southeast-1': "dbs-api.ap-southeast-1.aliyuncs.com",
      'ap-southeast-2': "dbs-api.ap-southeast-2.aliyuncs.com",
      'ap-southeast-3': "dbs-api.ap-southeast-3.aliyuncs.com",
      'ap-southeast-5': "dbs-api.ap-southeast-5.aliyuncs.com",
      'ap-northeast-1': "dbs-api.ap-northeast-1.aliyuncs.com",
      'us-west-1': "dbs-api.cn-hangzhou.aliyuncs.com",
      'us-east-1': "dbs-api.cn-hangzhou.aliyuncs.com",
      'eu-central-1': "dbs-api.eu-central-1.aliyuncs.com",
      'cn-hangzhou-finance': "dbs-api.cn-hangzhou.aliyuncs.com",
      'cn-shanghai-finance-1': "dbs-api.cn-hangzhou.aliyuncs.com",
      'cn-shenzhen-finance-1': "dbs-api.cn-hangzhou.aliyuncs.com",
      'ap-south-1': "dbs-api.ap-south-1.aliyuncs.com",
      'eu-west-1': "dbs-api.eu-west-1.aliyuncs.com",
      'me-east-1': "dbs-api.me-east-1.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("dbs", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * This API is used to configure a DBS backup plan.
   * 
   * @param request - ConfigureBackupPlanRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConfigureBackupPlanResponse
   */
  async configureBackupPlanWithOptions(request: $_model.ConfigureBackupPlanRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ConfigureBackupPlanResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoStartBackup)) {
      query["AutoStartBackup"] = request.autoStartBackup;
    }

    if (!$dara.isNull(request.backupGatewayId)) {
      query["BackupGatewayId"] = request.backupGatewayId;
    }

    if (!$dara.isNull(request.backupLogIntervalSeconds)) {
      query["BackupLogIntervalSeconds"] = request.backupLogIntervalSeconds;
    }

    if (!$dara.isNull(request.backupObjects)) {
      query["BackupObjects"] = request.backupObjects;
    }

    if (!$dara.isNull(request.backupPeriod)) {
      query["BackupPeriod"] = request.backupPeriod;
    }

    if (!$dara.isNull(request.backupPlanId)) {
      query["BackupPlanId"] = request.backupPlanId;
    }

    if (!$dara.isNull(request.backupPlanName)) {
      query["BackupPlanName"] = request.backupPlanName;
    }

    if (!$dara.isNull(request.backupRateLimit)) {
      query["BackupRateLimit"] = request.backupRateLimit;
    }

    if (!$dara.isNull(request.backupRetentionPeriod)) {
      query["BackupRetentionPeriod"] = request.backupRetentionPeriod;
    }

    if (!$dara.isNull(request.backupSpeedLimit)) {
      query["BackupSpeedLimit"] = request.backupSpeedLimit;
    }

    if (!$dara.isNull(request.backupStartTime)) {
      query["BackupStartTime"] = request.backupStartTime;
    }

    if (!$dara.isNull(request.backupStorageEncryptMethod)) {
      query["BackupStorageEncryptMethod"] = request.backupStorageEncryptMethod;
    }

    if (!$dara.isNull(request.backupStorageType)) {
      query["BackupStorageType"] = request.backupStorageType;
    }

    if (!$dara.isNull(request.backupStrategyType)) {
      query["BackupStrategyType"] = request.backupStrategyType;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.crossAliyunId)) {
      query["CrossAliyunId"] = request.crossAliyunId;
    }

    if (!$dara.isNull(request.crossRoleName)) {
      query["CrossRoleName"] = request.crossRoleName;
    }

    if (!$dara.isNull(request.duplicationArchivePeriod)) {
      query["DuplicationArchivePeriod"] = request.duplicationArchivePeriod;
    }

    if (!$dara.isNull(request.duplicationInfrequentAccessPeriod)) {
      query["DuplicationInfrequentAccessPeriod"] = request.duplicationInfrequentAccessPeriod;
    }

    if (!$dara.isNull(request.enableBackupLog)) {
      query["EnableBackupLog"] = request.enableBackupLog;
    }

    if (!$dara.isNull(request.enableMysqlPhysicalBackupBinlog)) {
      query["EnableMysqlPhysicalBackupBinlog"] = request.enableMysqlPhysicalBackupBinlog;
    }

    if (!$dara.isNull(request.enableSourceEndpointSsl)) {
      query["EnableSourceEndpointSsl"] = request.enableSourceEndpointSsl;
    }

    if (!$dara.isNull(request.OSSBucketName)) {
      query["OSSBucketName"] = request.OSSBucketName;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.sourceEndpointDatabaseName)) {
      query["SourceEndpointDatabaseName"] = request.sourceEndpointDatabaseName;
    }

    if (!$dara.isNull(request.sourceEndpointIP)) {
      query["SourceEndpointIP"] = request.sourceEndpointIP;
    }

    if (!$dara.isNull(request.sourceEndpointInstanceID)) {
      query["SourceEndpointInstanceID"] = request.sourceEndpointInstanceID;
    }

    if (!$dara.isNull(request.sourceEndpointInstanceType)) {
      query["SourceEndpointInstanceType"] = request.sourceEndpointInstanceType;
    }

    if (!$dara.isNull(request.sourceEndpointOracleHome)) {
      query["SourceEndpointOracleHome"] = request.sourceEndpointOracleHome;
    }

    if (!$dara.isNull(request.sourceEndpointOracleSID)) {
      query["SourceEndpointOracleSID"] = request.sourceEndpointOracleSID;
    }

    if (!$dara.isNull(request.sourceEndpointPassword)) {
      query["SourceEndpointPassword"] = request.sourceEndpointPassword;
    }

    if (!$dara.isNull(request.sourceEndpointPort)) {
      query["SourceEndpointPort"] = request.sourceEndpointPort;
    }

    if (!$dara.isNull(request.sourceEndpointRegion)) {
      query["SourceEndpointRegion"] = request.sourceEndpointRegion;
    }

    if (!$dara.isNull(request.sourceEndpointUserName)) {
      query["SourceEndpointUserName"] = request.sourceEndpointUserName;
    }

    if (!$dara.isNull(request.sslCaPem)) {
      query["SslCaPem"] = request.sslCaPem;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ConfigureBackupPlan",
      version: "2019-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ConfigureBackupPlanResponse>(await this.callApi(params, req, runtime), new $_model.ConfigureBackupPlanResponse({}));
  }

  /**
   * This API is used to configure a DBS backup plan.
   * 
   * @param request - ConfigureBackupPlanRequest
   * @returns ConfigureBackupPlanResponse
   */
  async configureBackupPlan(request: $_model.ConfigureBackupPlanRequest): Promise<$_model.ConfigureBackupPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.configureBackupPlanWithOptions(request, runtime);
  }

  /**
   * Creates, configures, and starts a backup plan.
   * 
   * @remarks
   * Before you call this operation, ensure that you understand the [billing methods and pricing](https://help.aliyun.com/document_detail/70005.html) of Database Backup (DBS).
   * 
   * @param request - CreateAndStartBackupPlanRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAndStartBackupPlanResponse
   */
  async createAndStartBackupPlanWithOptions(request: $_model.CreateAndStartBackupPlanRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAndStartBackupPlanResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupGatewayId)) {
      query["BackupGatewayId"] = request.backupGatewayId;
    }

    if (!$dara.isNull(request.backupLogIntervalSeconds)) {
      query["BackupLogIntervalSeconds"] = request.backupLogIntervalSeconds;
    }

    if (!$dara.isNull(request.backupMethod)) {
      query["BackupMethod"] = request.backupMethod;
    }

    if (!$dara.isNull(request.backupObjects)) {
      query["BackupObjects"] = request.backupObjects;
    }

    if (!$dara.isNull(request.backupPeriod)) {
      query["BackupPeriod"] = request.backupPeriod;
    }

    if (!$dara.isNull(request.backupPlanId)) {
      query["BackupPlanId"] = request.backupPlanId;
    }

    if (!$dara.isNull(request.backupPlanName)) {
      query["BackupPlanName"] = request.backupPlanName;
    }

    if (!$dara.isNull(request.backupRateLimit)) {
      query["BackupRateLimit"] = request.backupRateLimit;
    }

    if (!$dara.isNull(request.backupRetentionPeriod)) {
      query["BackupRetentionPeriod"] = request.backupRetentionPeriod;
    }

    if (!$dara.isNull(request.backupSpeedLimit)) {
      query["BackupSpeedLimit"] = request.backupSpeedLimit;
    }

    if (!$dara.isNull(request.backupStartTime)) {
      query["BackupStartTime"] = request.backupStartTime;
    }

    if (!$dara.isNull(request.backupStorageType)) {
      query["BackupStorageType"] = request.backupStorageType;
    }

    if (!$dara.isNull(request.backupStrategyType)) {
      query["BackupStrategyType"] = request.backupStrategyType;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.crossAliyunId)) {
      query["CrossAliyunId"] = request.crossAliyunId;
    }

    if (!$dara.isNull(request.crossRoleName)) {
      query["CrossRoleName"] = request.crossRoleName;
    }

    if (!$dara.isNull(request.databaseRegion)) {
      query["DatabaseRegion"] = request.databaseRegion;
    }

    if (!$dara.isNull(request.databaseType)) {
      query["DatabaseType"] = request.databaseType;
    }

    if (!$dara.isNull(request.duplicationArchivePeriod)) {
      query["DuplicationArchivePeriod"] = request.duplicationArchivePeriod;
    }

    if (!$dara.isNull(request.duplicationInfrequentAccessPeriod)) {
      query["DuplicationInfrequentAccessPeriod"] = request.duplicationInfrequentAccessPeriod;
    }

    if (!$dara.isNull(request.enableBackupLog)) {
      query["EnableBackupLog"] = request.enableBackupLog;
    }

    if (!$dara.isNull(request.fromApp)) {
      query["FromApp"] = request.fromApp;
    }

    if (!$dara.isNull(request.instanceClass)) {
      query["InstanceClass"] = request.instanceClass;
    }

    if (!$dara.isNull(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!$dara.isNull(request.OSSBucketName)) {
      query["OSSBucketName"] = request.OSSBucketName;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.payType)) {
      query["PayType"] = request.payType;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.sourceEndpointDatabaseName)) {
      query["SourceEndpointDatabaseName"] = request.sourceEndpointDatabaseName;
    }

    if (!$dara.isNull(request.sourceEndpointIP)) {
      query["SourceEndpointIP"] = request.sourceEndpointIP;
    }

    if (!$dara.isNull(request.sourceEndpointInstanceID)) {
      query["SourceEndpointInstanceID"] = request.sourceEndpointInstanceID;
    }

    if (!$dara.isNull(request.sourceEndpointInstanceType)) {
      query["SourceEndpointInstanceType"] = request.sourceEndpointInstanceType;
    }

    if (!$dara.isNull(request.sourceEndpointOracleSID)) {
      query["SourceEndpointOracleSID"] = request.sourceEndpointOracleSID;
    }

    if (!$dara.isNull(request.sourceEndpointPassword)) {
      query["SourceEndpointPassword"] = request.sourceEndpointPassword;
    }

    if (!$dara.isNull(request.sourceEndpointPort)) {
      query["SourceEndpointPort"] = request.sourceEndpointPort;
    }

    if (!$dara.isNull(request.sourceEndpointRegion)) {
      query["SourceEndpointRegion"] = request.sourceEndpointRegion;
    }

    if (!$dara.isNull(request.sourceEndpointUserName)) {
      query["SourceEndpointUserName"] = request.sourceEndpointUserName;
    }

    if (!$dara.isNull(request.storageRegion)) {
      query["StorageRegion"] = request.storageRegion;
    }

    if (!$dara.isNull(request.storageType)) {
      query["StorageType"] = request.storageType;
    }

    if (!$dara.isNull(request.usedTime)) {
      query["UsedTime"] = request.usedTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAndStartBackupPlan",
      version: "2019-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAndStartBackupPlanResponse>(await this.callApi(params, req, runtime), new $_model.CreateAndStartBackupPlanResponse({}));
  }

  /**
   * Creates, configures, and starts a backup plan.
   * 
   * @remarks
   * Before you call this operation, ensure that you understand the [billing methods and pricing](https://help.aliyun.com/document_detail/70005.html) of Database Backup (DBS).
   * 
   * @param request - CreateAndStartBackupPlanRequest
   * @returns CreateAndStartBackupPlanResponse
   */
  async createAndStartBackupPlan(request: $_model.CreateAndStartBackupPlanRequest): Promise<$_model.CreateAndStartBackupPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAndStartBackupPlanWithOptions(request, runtime);
  }

  /**
   * Creates a Database Backup Service (DBS) backup plan.
   * 
   * @remarks
   * To perform this operation in the console, see [Purchase a backup plan](https://help.aliyun.com/document_detail/65909.html).
   * 
   * @param request - CreateBackupPlanRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateBackupPlanResponse
   */
  async createBackupPlanWithOptions(request: $_model.CreateBackupPlanRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateBackupPlanResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupMethod)) {
      query["BackupMethod"] = request.backupMethod;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.databaseRegion)) {
      query["DatabaseRegion"] = request.databaseRegion;
    }

    if (!$dara.isNull(request.databaseType)) {
      query["DatabaseType"] = request.databaseType;
    }

    if (!$dara.isNull(request.fromApp)) {
      query["FromApp"] = request.fromApp;
    }

    if (!$dara.isNull(request.instanceClass)) {
      query["InstanceClass"] = request.instanceClass;
    }

    if (!$dara.isNull(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.payType)) {
      query["PayType"] = request.payType;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.storageRegion)) {
      query["StorageRegion"] = request.storageRegion;
    }

    if (!$dara.isNull(request.storageType)) {
      query["StorageType"] = request.storageType;
    }

    if (!$dara.isNull(request.usedTime)) {
      query["UsedTime"] = request.usedTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateBackupPlan",
      version: "2019-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateBackupPlanResponse>(await this.callApi(params, req, runtime), new $_model.CreateBackupPlanResponse({}));
  }

  /**
   * Creates a Database Backup Service (DBS) backup plan.
   * 
   * @remarks
   * To perform this operation in the console, see [Purchase a backup plan](https://help.aliyun.com/document_detail/65909.html).
   * 
   * @param request - CreateBackupPlanRequest
   * @returns CreateBackupPlanResponse
   */
  async createBackupPlan(request: $_model.CreateBackupPlanRequest): Promise<$_model.CreateBackupPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createBackupPlanWithOptions(request, runtime);
  }

  /**
   * This operation creates a task to download a full backup set.
   * 
   * @param request - CreateFullBackupSetDownloadRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateFullBackupSetDownloadResponse
   */
  async createFullBackupSetDownloadWithOptions(request: $_model.CreateFullBackupSetDownloadRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateFullBackupSetDownloadResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupSetDataFormat)) {
      query["BackupSetDataFormat"] = request.backupSetDataFormat;
    }

    if (!$dara.isNull(request.backupSetId)) {
      query["BackupSetId"] = request.backupSetId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateFullBackupSetDownload",
      version: "2019-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateFullBackupSetDownloadResponse>(await this.callApi(params, req, runtime), new $_model.CreateFullBackupSetDownloadResponse({}));
  }

  /**
   * This operation creates a task to download a full backup set.
   * 
   * @param request - CreateFullBackupSetDownloadRequest
   * @returns CreateFullBackupSetDownloadResponse
   */
  async createFullBackupSetDownload(request: $_model.CreateFullBackupSetDownloadRequest): Promise<$_model.CreateFullBackupSetDownloadResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createFullBackupSetDownloadWithOptions(request, runtime);
  }

  /**
   * Creates a task to obtain a database list by using a backup gateway.
   * 
   * @remarks
   * This API operation returns a task ID. You can call the [GetDBListFromAgent](https://help.aliyun.com/document_detail/2869852.html) operation to query the task result based on the task ID.
   * 
   * @param request - CreateGetDBListFromAgentTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateGetDBListFromAgentTaskResponse
   */
  async createGetDBListFromAgentTaskWithOptions(request: $_model.CreateGetDBListFromAgentTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateGetDBListFromAgentTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupGatewayId)) {
      query["BackupGatewayId"] = request.backupGatewayId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.databaseType)) {
      query["DatabaseType"] = request.databaseType;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.sourceEndpointIP)) {
      query["SourceEndpointIP"] = request.sourceEndpointIP;
    }

    if (!$dara.isNull(request.sourceEndpointPort)) {
      query["SourceEndpointPort"] = request.sourceEndpointPort;
    }

    if (!$dara.isNull(request.sourceEndpointRegion)) {
      query["SourceEndpointRegion"] = request.sourceEndpointRegion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateGetDBListFromAgentTask",
      version: "2019-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateGetDBListFromAgentTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateGetDBListFromAgentTaskResponse({}));
  }

  /**
   * Creates a task to obtain a database list by using a backup gateway.
   * 
   * @remarks
   * This API operation returns a task ID. You can call the [GetDBListFromAgent](https://help.aliyun.com/document_detail/2869852.html) operation to query the task result based on the task ID.
   * 
   * @param request - CreateGetDBListFromAgentTaskRequest
   * @returns CreateGetDBListFromAgentTaskResponse
   */
  async createGetDBListFromAgentTask(request: $_model.CreateGetDBListFromAgentTaskRequest): Promise<$_model.CreateGetDBListFromAgentTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createGetDBListFromAgentTaskWithOptions(request, runtime);
  }

  /**
   * Creates and starts an incremental backup set download task.
   * 
   * @param request - CreateIncrementBackupSetDownloadRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateIncrementBackupSetDownloadResponse
   */
  async createIncrementBackupSetDownloadWithOptions(request: $_model.CreateIncrementBackupSetDownloadRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateIncrementBackupSetDownloadResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupSetDataFormat)) {
      query["BackupSetDataFormat"] = request.backupSetDataFormat;
    }

    if (!$dara.isNull(request.backupSetId)) {
      query["BackupSetId"] = request.backupSetId;
    }

    if (!$dara.isNull(request.backupSetName)) {
      query["BackupSetName"] = request.backupSetName;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateIncrementBackupSetDownload",
      version: "2019-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateIncrementBackupSetDownloadResponse>(await this.callApi(params, req, runtime), new $_model.CreateIncrementBackupSetDownloadResponse({}));
  }

  /**
   * Creates and starts an incremental backup set download task.
   * 
   * @param request - CreateIncrementBackupSetDownloadRequest
   * @returns CreateIncrementBackupSetDownloadResponse
   */
  async createIncrementBackupSetDownload(request: $_model.CreateIncrementBackupSetDownloadRequest): Promise<$_model.CreateIncrementBackupSetDownloadResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createIncrementBackupSetDownloadWithOptions(request, runtime);
  }

  /**
   * This interface creates DBS restore jobs.
   * 
   * @remarks
   * ### Related operations
   * - [Recover databases](https://help.aliyun.com/document_detail/85543.html)
   * - [Tutorials for various database restore configurations](https://help.aliyun.com/document_detail/197144.html)
   * 
   * @param request - CreateRestoreTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRestoreTaskResponse
   */
  async createRestoreTaskWithOptions(request: $_model.CreateRestoreTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateRestoreTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoOpenDatabase)) {
      query["AutoOpenDatabase"] = request.autoOpenDatabase;
    }

    if (!$dara.isNull(request.autoShutdownDatabase)) {
      query["AutoShutdownDatabase"] = request.autoShutdownDatabase;
    }

    if (!$dara.isNull(request.backupGatewayId)) {
      query["BackupGatewayId"] = request.backupGatewayId;
    }

    if (!$dara.isNull(request.backupPlanId)) {
      query["BackupPlanId"] = request.backupPlanId;
    }

    if (!$dara.isNull(request.backupSetId)) {
      query["BackupSetId"] = request.backupSetId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.crossAliyunId)) {
      query["CrossAliyunId"] = request.crossAliyunId;
    }

    if (!$dara.isNull(request.crossRoleName)) {
      query["CrossRoleName"] = request.crossRoleName;
    }

    if (!$dara.isNull(request.destDatabaseInstanceClass)) {
      query["DestDatabaseInstanceClass"] = request.destDatabaseInstanceClass;
    }

    if (!$dara.isNull(request.destDatabaseInstanceDatabaseVersion)) {
      query["DestDatabaseInstanceDatabaseVersion"] = request.destDatabaseInstanceDatabaseVersion;
    }

    if (!$dara.isNull(request.destDatabaseInstanceRegion)) {
      query["DestDatabaseInstanceRegion"] = request.destDatabaseInstanceRegion;
    }

    if (!$dara.isNull(request.destDatabaseInstanceStorageSize)) {
      query["DestDatabaseInstanceStorageSize"] = request.destDatabaseInstanceStorageSize;
    }

    if (!$dara.isNull(request.destDatabaseInstanceType)) {
      query["DestDatabaseInstanceType"] = request.destDatabaseInstanceType;
    }

    if (!$dara.isNull(request.destDatabaseInstanceVSwitch)) {
      query["DestDatabaseInstanceVSwitch"] = request.destDatabaseInstanceVSwitch;
    }

    if (!$dara.isNull(request.destDatabaseInstanceVpc)) {
      query["DestDatabaseInstanceVpc"] = request.destDatabaseInstanceVpc;
    }

    if (!$dara.isNull(request.destinationEndpointDatabaseName)) {
      query["DestinationEndpointDatabaseName"] = request.destinationEndpointDatabaseName;
    }

    if (!$dara.isNull(request.destinationEndpointIP)) {
      query["DestinationEndpointIP"] = request.destinationEndpointIP;
    }

    if (!$dara.isNull(request.destinationEndpointInstanceID)) {
      query["DestinationEndpointInstanceID"] = request.destinationEndpointInstanceID;
    }

    if (!$dara.isNull(request.destinationEndpointInstanceType)) {
      query["DestinationEndpointInstanceType"] = request.destinationEndpointInstanceType;
    }

    if (!$dara.isNull(request.destinationEndpointOracleSID)) {
      query["DestinationEndpointOracleSID"] = request.destinationEndpointOracleSID;
    }

    if (!$dara.isNull(request.destinationEndpointPassword)) {
      query["DestinationEndpointPassword"] = request.destinationEndpointPassword;
    }

    if (!$dara.isNull(request.destinationEndpointPort)) {
      query["DestinationEndpointPort"] = request.destinationEndpointPort;
    }

    if (!$dara.isNull(request.destinationEndpointRegion)) {
      query["DestinationEndpointRegion"] = request.destinationEndpointRegion;
    }

    if (!$dara.isNull(request.destinationEndpointUserName)) {
      query["DestinationEndpointUserName"] = request.destinationEndpointUserName;
    }

    if (!$dara.isNull(request.duplicateConflict)) {
      query["DuplicateConflict"] = request.duplicateConflict;
    }

    if (!$dara.isNull(request.enableDestinationEndpointSsl)) {
      query["EnableDestinationEndpointSsl"] = request.enableDestinationEndpointSsl;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.restoreDestinationMode)) {
      query["RestoreDestinationMode"] = request.restoreDestinationMode;
    }

    if (!$dara.isNull(request.restoreDir)) {
      query["RestoreDir"] = request.restoreDir;
    }

    if (!$dara.isNull(request.restoreHome)) {
      query["RestoreHome"] = request.restoreHome;
    }

    if (!$dara.isNull(request.restoreObjects)) {
      query["RestoreObjects"] = request.restoreObjects;
    }

    if (!$dara.isNull(request.restoreTaskName)) {
      query["RestoreTaskName"] = request.restoreTaskName;
    }

    if (!$dara.isNull(request.restoreTime)) {
      query["RestoreTime"] = request.restoreTime;
    }

    if (!$dara.isNull(request.sslCaPem)) {
      query["SslCaPem"] = request.sslCaPem;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRestoreTask",
      version: "2019-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateRestoreTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateRestoreTaskResponse({}));
  }

  /**
   * This interface creates DBS restore jobs.
   * 
   * @remarks
   * ### Related operations
   * - [Recover databases](https://help.aliyun.com/document_detail/85543.html)
   * - [Tutorials for various database restore configurations](https://help.aliyun.com/document_detail/197144.html)
   * 
   * @param request - CreateRestoreTaskRequest
   * @returns CreateRestoreTaskResponse
   */
  async createRestoreTask(request: $_model.CreateRestoreTaskRequest): Promise<$_model.CreateRestoreTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createRestoreTaskWithOptions(request, runtime);
  }

  /**
   * Queries a list of backup gateways in Database Backup Service (DBS).
   * 
   * @param request - DescribeBackupGatewayListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBackupGatewayListResponse
   */
  async describeBackupGatewayListWithOptions(request: $_model.DescribeBackupGatewayListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeBackupGatewayListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.identifier)) {
      query["Identifier"] = request.identifier;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeBackupGatewayList",
      version: "2019-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeBackupGatewayListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeBackupGatewayListResponse({}));
  }

  /**
   * Queries a list of backup gateways in Database Backup Service (DBS).
   * 
   * @param request - DescribeBackupGatewayListRequest
   * @returns DescribeBackupGatewayListResponse
   */
  async describeBackupGatewayList(request: $_model.DescribeBackupGatewayListRequest): Promise<$_model.DescribeBackupGatewayListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeBackupGatewayListWithOptions(request, runtime);
  }

  /**
   * This operation queries the billing information of a backup plan.
   * 
   * @param request - DescribeBackupPlanBillingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBackupPlanBillingResponse
   */
  async describeBackupPlanBillingWithOptions(request: $_model.DescribeBackupPlanBillingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeBackupPlanBillingResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupPlanId)) {
      query["BackupPlanId"] = request.backupPlanId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.showStorageType)) {
      query["ShowStorageType"] = request.showStorageType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeBackupPlanBilling",
      version: "2019-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeBackupPlanBillingResponse>(await this.callApi(params, req, runtime), new $_model.DescribeBackupPlanBillingResponse({}));
  }

  /**
   * This operation queries the billing information of a backup plan.
   * 
   * @param request - DescribeBackupPlanBillingRequest
   * @returns DescribeBackupPlanBillingResponse
   */
  async describeBackupPlanBilling(request: $_model.DescribeBackupPlanBillingRequest): Promise<$_model.DescribeBackupPlanBillingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeBackupPlanBillingWithOptions(request, runtime);
  }

  /**
   * This operation lets you view a DBS backup plan.
   * 
   * @remarks
   * Before you use this operation, ensure that Object Storage Service (OSS) is enabled. For more information, see [Object Storage Service](https://help.aliyun.com/document_detail/31817.html).
   * 
   * @param request - DescribeBackupPlanListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBackupPlanListResponse
   */
  async describeBackupPlanListWithOptions(request: $_model.DescribeBackupPlanListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeBackupPlanListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupMethod)) {
      query["BackupMethod"] = request.backupMethod;
    }

    if (!$dara.isNull(request.backupPlanId)) {
      query["BackupPlanId"] = request.backupPlanId;
    }

    if (!$dara.isNull(request.backupPlanName)) {
      query["BackupPlanName"] = request.backupPlanName;
    }

    if (!$dara.isNull(request.backupPlanStatus)) {
      query["BackupPlanStatus"] = request.backupPlanStatus;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.showBackupStrategyInfo)) {
      query["ShowBackupStrategyInfo"] = request.showBackupStrategyInfo;
    }

    if (!$dara.isNull(request.showRecoverTimeRange)) {
      query["ShowRecoverTimeRange"] = request.showRecoverTimeRange;
    }

    if (!$dara.isNull(request.showStorageStrategyInfo)) {
      query["ShowStorageStrategyInfo"] = request.showStorageStrategyInfo;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeBackupPlanList",
      version: "2019-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeBackupPlanListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeBackupPlanListResponse({}));
  }

  /**
   * This operation lets you view a DBS backup plan.
   * 
   * @remarks
   * Before you use this operation, ensure that Object Storage Service (OSS) is enabled. For more information, see [Object Storage Service](https://help.aliyun.com/document_detail/31817.html).
   * 
   * @param request - DescribeBackupPlanListRequest
   * @returns DescribeBackupPlanListResponse
   */
  async describeBackupPlanList(request: $_model.DescribeBackupPlanListRequest): Promise<$_model.DescribeBackupPlanListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeBackupPlanListWithOptions(request, runtime);
  }

  /**
   * Queries the list of download tasks for backup sets in Database Backup Service (DBS).
   * 
   * @param request - DescribeBackupSetDownloadTaskListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBackupSetDownloadTaskListResponse
   */
  async describeBackupSetDownloadTaskListWithOptions(request: $_model.DescribeBackupSetDownloadTaskListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeBackupSetDownloadTaskListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupPlanId)) {
      query["BackupPlanId"] = request.backupPlanId;
    }

    if (!$dara.isNull(request.backupSetDownloadTaskId)) {
      query["BackupSetDownloadTaskId"] = request.backupSetDownloadTaskId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeBackupSetDownloadTaskList",
      version: "2019-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeBackupSetDownloadTaskListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeBackupSetDownloadTaskListResponse({}));
  }

  /**
   * Queries the list of download tasks for backup sets in Database Backup Service (DBS).
   * 
   * @param request - DescribeBackupSetDownloadTaskListRequest
   * @returns DescribeBackupSetDownloadTaskListResponse
   */
  async describeBackupSetDownloadTaskList(request: $_model.DescribeBackupSetDownloadTaskListRequest): Promise<$_model.DescribeBackupSetDownloadTaskListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeBackupSetDownloadTaskListWithOptions(request, runtime);
  }

  /**
   * Queries the status of the Data Lake Analytics (DLA) service for a backup schedule.
   * 
   * @param request - DescribeDLAServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDLAServiceResponse
   */
  async describeDLAServiceWithOptions(request: $_model.DescribeDLAServiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDLAServiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupPlanId)) {
      query["BackupPlanId"] = request.backupPlanId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDLAService",
      version: "2019-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDLAServiceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDLAServiceResponse({}));
  }

  /**
   * Queries the status of the Data Lake Analytics (DLA) service for a backup schedule.
   * 
   * @param request - DescribeDLAServiceRequest
   * @returns DescribeDLAServiceResponse
   */
  async describeDLAService(request: $_model.DescribeDLAServiceRequest): Promise<$_model.DescribeDLAServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDLAServiceWithOptions(request, runtime);
  }

  /**
   * You can call this operation to list full backup jobs in Database Backup Service (DBS).
   * 
   * @param request - DescribeFullBackupListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeFullBackupListResponse
   */
  async describeFullBackupListWithOptions(request: $_model.DescribeFullBackupListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeFullBackupListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupPlanId)) {
      query["BackupPlanId"] = request.backupPlanId;
    }

    if (!$dara.isNull(request.backupSetId)) {
      query["BackupSetId"] = request.backupSetId;
    }

    if (!$dara.isNull(request.backupSetStatus)) {
      query["BackupSetStatus"] = request.backupSetStatus;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.endTimestamp)) {
      query["EndTimestamp"] = request.endTimestamp;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.showProgress)) {
      query["ShowProgress"] = request.showProgress;
    }

    if (!$dara.isNull(request.showStorageType)) {
      query["ShowStorageType"] = request.showStorageType;
    }

    if (!$dara.isNull(request.startTimestamp)) {
      query["StartTimestamp"] = request.startTimestamp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeFullBackupList",
      version: "2019-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeFullBackupListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeFullBackupListResponse({}));
  }

  /**
   * You can call this operation to list full backup jobs in Database Backup Service (DBS).
   * 
   * @param request - DescribeFullBackupListRequest
   * @returns DescribeFullBackupListResponse
   */
  async describeFullBackupList(request: $_model.DescribeFullBackupListRequest): Promise<$_model.DescribeFullBackupListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeFullBackupListWithOptions(request, runtime);
  }

  /**
   * This operation queries the list of incremental backup tasks for DBS.
   * 
   * @param request - DescribeIncrementBackupListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeIncrementBackupListResponse
   */
  async describeIncrementBackupListWithOptions(request: $_model.DescribeIncrementBackupListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeIncrementBackupListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupPlanId)) {
      query["BackupPlanId"] = request.backupPlanId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.endTimestamp)) {
      query["EndTimestamp"] = request.endTimestamp;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.showStorageType)) {
      query["ShowStorageType"] = request.showStorageType;
    }

    if (!$dara.isNull(request.startTimestamp)) {
      query["StartTimestamp"] = request.startTimestamp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeIncrementBackupList",
      version: "2019-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeIncrementBackupListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeIncrementBackupListResponse({}));
  }

  /**
   * This operation queries the list of incremental backup tasks for DBS.
   * 
   * @param request - DescribeIncrementBackupListRequest
   * @returns DescribeIncrementBackupListResponse
   */
  async describeIncrementBackupList(request: $_model.DescribeIncrementBackupListRequest): Promise<$_model.DescribeIncrementBackupListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeIncrementBackupListWithOptions(request, runtime);
  }

  /**
   * Queries the error code of a Database Backup Service (DBS) job.
   * 
   * @param request - DescribeJobErrorCodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeJobErrorCodeResponse
   */
  async describeJobErrorCodeWithOptions(request: $_model.DescribeJobErrorCodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeJobErrorCodeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.language)) {
      query["Language"] = request.language;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeJobErrorCode",
      version: "2019-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeJobErrorCodeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeJobErrorCodeResponse({}));
  }

  /**
   * Queries the error code of a Database Backup Service (DBS) job.
   * 
   * @param request - DescribeJobErrorCodeRequest
   * @returns DescribeJobErrorCodeResponse
   */
  async describeJobErrorCode(request: $_model.DescribeJobErrorCodeRequest): Promise<$_model.DescribeJobErrorCodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeJobErrorCodeWithOptions(request, runtime);
  }

  /**
   * Queries the CIDR blocks of nodes on which Database Backup (DBS) is running.
   * 
   * @param request - DescribeNodeCidrListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeNodeCidrListResponse
   */
  async describeNodeCidrListWithOptions(request: $_model.DescribeNodeCidrListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeNodeCidrListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeNodeCidrList",
      version: "2019-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeNodeCidrListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeNodeCidrListResponse({}));
  }

  /**
   * Queries the CIDR blocks of nodes on which Database Backup (DBS) is running.
   * 
   * @param request - DescribeNodeCidrListRequest
   * @returns DescribeNodeCidrListResponse
   */
  async describeNodeCidrList(request: $_model.DescribeNodeCidrListRequest): Promise<$_model.DescribeNodeCidrListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeNodeCidrListWithOptions(request, runtime);
  }

  /**
   * This operation queries the precheck progress for a backup plan or a restore job.
   * 
   * @param request - DescribePreCheckProgressListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePreCheckProgressListResponse
   */
  async describePreCheckProgressListWithOptions(request: $_model.DescribePreCheckProgressListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePreCheckProgressListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupPlanId)) {
      query["BackupPlanId"] = request.backupPlanId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.restoreTaskId)) {
      query["RestoreTaskId"] = request.restoreTaskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePreCheckProgressList",
      version: "2019-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePreCheckProgressListResponse>(await this.callApi(params, req, runtime), new $_model.DescribePreCheckProgressListResponse({}));
  }

  /**
   * This operation queries the precheck progress for a backup plan or a restore job.
   * 
   * @param request - DescribePreCheckProgressListRequest
   * @returns DescribePreCheckProgressListResponse
   */
  async describePreCheckProgressList(request: $_model.DescribePreCheckProgressListRequest): Promise<$_model.DescribePreCheckProgressListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePreCheckProgressListWithOptions(request, runtime);
  }

  /**
   * Queries the regions where DBS is available.
   * 
   * @param request - DescribeRegionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRegionsResponse
   */
  async describeRegionsWithOptions(request: $_model.DescribeRegionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRegionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRegions",
      version: "2019-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRegionsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRegionsResponse({}));
  }

  /**
   * Queries the regions where DBS is available.
   * 
   * @param request - DescribeRegionsRequest
   * @returns DescribeRegionsResponse
   */
  async describeRegions(request: $_model.DescribeRegionsRequest): Promise<$_model.DescribeRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  /**
   * This operation returns the time ranges available for restoring data from a backup plan.
   * 
   * @param request - DescribeRestoreRangeInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRestoreRangeInfoResponse
   */
  async describeRestoreRangeInfoWithOptions(request: $_model.DescribeRestoreRangeInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRestoreRangeInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupPlanId)) {
      query["BackupPlanId"] = request.backupPlanId;
    }

    if (!$dara.isNull(request.beginTimestampForRestore)) {
      query["BeginTimestampForRestore"] = request.beginTimestampForRestore;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.endTimestampForRestore)) {
      query["EndTimestampForRestore"] = request.endTimestampForRestore;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.recentlyRestore)) {
      query["RecentlyRestore"] = request.recentlyRestore;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRestoreRangeInfo",
      version: "2019-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRestoreRangeInfoResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRestoreRangeInfoResponse({}));
  }

  /**
   * This operation returns the time ranges available for restoring data from a backup plan.
   * 
   * @param request - DescribeRestoreRangeInfoRequest
   * @returns DescribeRestoreRangeInfoResponse
   */
  async describeRestoreRangeInfo(request: $_model.DescribeRestoreRangeInfoRequest): Promise<$_model.DescribeRestoreRangeInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRestoreRangeInfoWithOptions(request, runtime);
  }

  /**
   * Queries restore jobs in Database Backup Service (DBS).
   * 
   * @param request - DescribeRestoreTaskListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRestoreTaskListResponse
   */
  async describeRestoreTaskListWithOptions(request: $_model.DescribeRestoreTaskListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRestoreTaskListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupPlanId)) {
      query["BackupPlanId"] = request.backupPlanId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.endTimestamp)) {
      query["EndTimestamp"] = request.endTimestamp;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.restoreTaskId)) {
      query["RestoreTaskId"] = request.restoreTaskId;
    }

    if (!$dara.isNull(request.startTimestamp)) {
      query["StartTimestamp"] = request.startTimestamp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRestoreTaskList",
      version: "2019-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRestoreTaskListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRestoreTaskListResponse({}));
  }

  /**
   * Queries restore jobs in Database Backup Service (DBS).
   * 
   * @param request - DescribeRestoreTaskListRequest
   * @returns DescribeRestoreTaskListResponse
   */
  async describeRestoreTaskList(request: $_model.DescribeRestoreTaskListRequest): Promise<$_model.DescribeRestoreTaskListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRestoreTaskListWithOptions(request, runtime);
  }

  /**
   * Disable incremental backup for a backup plan.
   * 
   * @remarks
   * ## Impact
   * After you disable incremental backup, the backup plan no longer performs incremental backups.
   * 
   * @param request - DisableBackupLogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableBackupLogResponse
   */
  async disableBackupLogWithOptions(request: $_model.DisableBackupLogRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableBackupLogResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupPlanId)) {
      query["BackupPlanId"] = request.backupPlanId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.disableMysqlPhysicalBackupBinlogOnly)) {
      query["DisableMysqlPhysicalBackupBinlogOnly"] = request.disableMysqlPhysicalBackupBinlogOnly;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableBackupLog",
      version: "2019-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableBackupLogResponse>(await this.callApi(params, req, runtime), new $_model.DisableBackupLogResponse({}));
  }

  /**
   * Disable incremental backup for a backup plan.
   * 
   * @remarks
   * ## Impact
   * After you disable incremental backup, the backup plan no longer performs incremental backups.
   * 
   * @param request - DisableBackupLogRequest
   * @returns DisableBackupLogResponse
   */
  async disableBackupLog(request: $_model.DisableBackupLogRequest): Promise<$_model.DisableBackupLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableBackupLogWithOptions(request, runtime);
  }

  /**
   * This operation enables incremental backup for a backup plan.
   * 
   * @remarks
   * ## Impact
   * Enabling incremental backup incurs no additional charge. However, this operation generates backup traffic and consumes storage space. The fees for the traffic and storage are the same as those for a full backup. You can use the free quota from a backup plan or a storage plan to cover these costs.
   * 
   * @param request - EnableBackupLogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableBackupLogResponse
   */
  async enableBackupLogWithOptions(request: $_model.EnableBackupLogRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableBackupLogResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupPlanId)) {
      query["BackupPlanId"] = request.backupPlanId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.enableMysqlPhysicalBackupBinlog)) {
      query["EnableMysqlPhysicalBackupBinlog"] = request.enableMysqlPhysicalBackupBinlog;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableBackupLog",
      version: "2019-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableBackupLogResponse>(await this.callApi(params, req, runtime), new $_model.EnableBackupLogResponse({}));
  }

  /**
   * This operation enables incremental backup for a backup plan.
   * 
   * @remarks
   * ## Impact
   * Enabling incremental backup incurs no additional charge. However, this operation generates backup traffic and consumes storage space. The fees for the traffic and storage are the same as those for a full backup. You can use the free quota from a backup plan or a storage plan to cover these costs.
   * 
   * @param request - EnableBackupLogRequest
   * @returns EnableBackupLogResponse
   */
  async enableBackupLog(request: $_model.EnableBackupLogRequest): Promise<$_model.EnableBackupLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableBackupLogWithOptions(request, runtime);
  }

  /**
   * Queries the result of a task that is used to query a database list by using a backup gateway based on the ID of the task.
   * 
   * @remarks
   * 您需要调用 [CreateGetDBListFromAgentTask](https://help.aliyun.com/document_detail/2869847.html) 接口创建一个异步任务获取 TaskId（异步任务 ID）。将 TaskId 传入 GetDBListFromAgent 接口后，即可获取物理备份库表数据。
   * 
   * @param request - GetDBListFromAgentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDBListFromAgentResponse
   */
  async getDBListFromAgentWithOptions(request: $_model.GetDBListFromAgentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDBListFromAgentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupGatewayId)) {
      query["BackupGatewayId"] = request.backupGatewayId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.sourceEndpointRegion)) {
      query["SourceEndpointRegion"] = request.sourceEndpointRegion;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDBListFromAgent",
      version: "2019-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDBListFromAgentResponse>(await this.callApi(params, req, runtime), new $_model.GetDBListFromAgentResponse({}));
  }

  /**
   * Queries the result of a task that is used to query a database list by using a backup gateway based on the ID of the task.
   * 
   * @remarks
   * 您需要调用 [CreateGetDBListFromAgentTask](https://help.aliyun.com/document_detail/2869847.html) 接口创建一个异步任务获取 TaskId（异步任务 ID）。将 TaskId 传入 GetDBListFromAgent 接口后，即可获取物理备份库表数据。
   * 
   * @param request - GetDBListFromAgentRequest
   * @returns GetDBListFromAgentResponse
   */
  async getDBListFromAgent(request: $_model.GetDBListFromAgentRequest): Promise<$_model.GetDBListFromAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDBListFromAgentWithOptions(request, runtime);
  }

  /**
   * Grants the service-linked role (AliyunServiceRoleForDBS) to Database Backup (DBS).
   * 
   * @remarks
   * DBS uses the service-linked role (AliyunServiceRoleForDBS) to obtain the required access permissions to connect to ApsaraDB databases, such as RDS, MongoDB, Redis, and PolarDB, or self-managed databases on ECS instances. For more information, see [Activate the Database Backup service](https://help.aliyun.com/document_detail/162603.html).
   * 
   * @param request - InitializeDbsServiceLinkedRoleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InitializeDbsServiceLinkedRoleResponse
   */
  async initializeDbsServiceLinkedRoleWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.InitializeDbsServiceLinkedRoleResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "InitializeDbsServiceLinkedRole",
      version: "2019-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.InitializeDbsServiceLinkedRoleResponse>(await this.callApi(params, req, runtime), new $_model.InitializeDbsServiceLinkedRoleResponse({}));
  }

  /**
   * Grants the service-linked role (AliyunServiceRoleForDBS) to Database Backup (DBS).
   * 
   * @remarks
   * DBS uses the service-linked role (AliyunServiceRoleForDBS) to obtain the required access permissions to connect to ApsaraDB databases, such as RDS, MongoDB, Redis, and PolarDB, or self-managed databases on ECS instances. For more information, see [Activate the Database Backup service](https://help.aliyun.com/document_detail/162603.html).
   * @returns InitializeDbsServiceLinkedRoleResponse
   */
  async initializeDbsServiceLinkedRole(): Promise<$_model.InitializeDbsServiceLinkedRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.initializeDbsServiceLinkedRoleWithOptions(runtime);
  }

  /**
   * Modifies the objects included in a Database Backup Service (DBS) backup plan.
   * 
   * @param request - ModifyBackupObjectsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyBackupObjectsResponse
   */
  async modifyBackupObjectsWithOptions(request: $_model.ModifyBackupObjectsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyBackupObjectsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupObjects)) {
      query["BackupObjects"] = request.backupObjects;
    }

    if (!$dara.isNull(request.backupPlanId)) {
      query["BackupPlanId"] = request.backupPlanId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyBackupObjects",
      version: "2019-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyBackupObjectsResponse>(await this.callApi(params, req, runtime), new $_model.ModifyBackupObjectsResponse({}));
  }

  /**
   * Modifies the objects included in a Database Backup Service (DBS) backup plan.
   * 
   * @param request - ModifyBackupObjectsRequest
   * @returns ModifyBackupObjectsResponse
   */
  async modifyBackupObjects(request: $_model.ModifyBackupObjectsRequest): Promise<$_model.ModifyBackupObjectsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyBackupObjectsWithOptions(request, runtime);
  }

  /**
   * Modifies the name of a backup plan.
   * 
   * @param request - ModifyBackupPlanNameRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyBackupPlanNameResponse
   */
  async modifyBackupPlanNameWithOptions(request: $_model.ModifyBackupPlanNameRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyBackupPlanNameResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupPlanId)) {
      query["BackupPlanId"] = request.backupPlanId;
    }

    if (!$dara.isNull(request.backupPlanName)) {
      query["BackupPlanName"] = request.backupPlanName;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyBackupPlanName",
      version: "2019-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyBackupPlanNameResponse>(await this.callApi(params, req, runtime), new $_model.ModifyBackupPlanNameResponse({}));
  }

  /**
   * Modifies the name of a backup plan.
   * 
   * @param request - ModifyBackupPlanNameRequest
   * @returns ModifyBackupPlanNameResponse
   */
  async modifyBackupPlanName(request: $_model.ModifyBackupPlanNameRequest): Promise<$_model.ModifyBackupPlanNameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyBackupPlanNameWithOptions(request, runtime);
  }

  /**
   * Enables, configures, or disables the automatic download feature.
   * 
   * @remarks
   * 使用本接口前请先确认备份数据是否存储在 DBS 的内置 OSS 上，您可通过调用 [DescribeBackupPlanList](https://help.aliyun.com/document_detail/2869825.html) 接口查看 BackupStorageType 取值情况。
   * 
   * @param request - ModifyBackupSetDownloadRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyBackupSetDownloadRulesResponse
   */
  async modifyBackupSetDownloadRulesWithOptions(request: $_model.ModifyBackupSetDownloadRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyBackupSetDownloadRulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupGatewayId)) {
      query["BackupGatewayId"] = request.backupGatewayId;
    }

    if (!$dara.isNull(request.backupPlanId)) {
      query["BackupPlanId"] = request.backupPlanId;
    }

    if (!$dara.isNull(request.backupSetDownloadDir)) {
      query["BackupSetDownloadDir"] = request.backupSetDownloadDir;
    }

    if (!$dara.isNull(request.backupSetDownloadTargetType)) {
      query["BackupSetDownloadTargetType"] = request.backupSetDownloadTargetType;
    }

    if (!$dara.isNull(request.backupSetDownloadTargetTypeLocation)) {
      query["BackupSetDownloadTargetTypeLocation"] = request.backupSetDownloadTargetTypeLocation;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.fullDataFormat)) {
      query["FullDataFormat"] = request.fullDataFormat;
    }

    if (!$dara.isNull(request.incrementDataFormat)) {
      query["IncrementDataFormat"] = request.incrementDataFormat;
    }

    if (!$dara.isNull(request.openAutoDownload)) {
      query["OpenAutoDownload"] = request.openAutoDownload;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyBackupSetDownloadRules",
      version: "2019-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyBackupSetDownloadRulesResponse>(await this.callApi(params, req, runtime), new $_model.ModifyBackupSetDownloadRulesResponse({}));
  }

  /**
   * Enables, configures, or disables the automatic download feature.
   * 
   * @remarks
   * 使用本接口前请先确认备份数据是否存储在 DBS 的内置 OSS 上，您可通过调用 [DescribeBackupPlanList](https://help.aliyun.com/document_detail/2869825.html) 接口查看 BackupStorageType 取值情况。
   * 
   * @param request - ModifyBackupSetDownloadRulesRequest
   * @returns ModifyBackupSetDownloadRulesResponse
   */
  async modifyBackupSetDownloadRules(request: $_model.ModifyBackupSetDownloadRulesRequest): Promise<$_model.ModifyBackupSetDownloadRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyBackupSetDownloadRulesWithOptions(request, runtime);
  }

  /**
   * This operation modifies a Database Backup source endpoint.
   * 
   * @param request - ModifyBackupSourceEndpointRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyBackupSourceEndpointResponse
   */
  async modifyBackupSourceEndpointWithOptions(request: $_model.ModifyBackupSourceEndpointRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyBackupSourceEndpointResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupGatewayId)) {
      query["BackupGatewayId"] = request.backupGatewayId;
    }

    if (!$dara.isNull(request.backupObjects)) {
      query["BackupObjects"] = request.backupObjects;
    }

    if (!$dara.isNull(request.backupPlanId)) {
      query["BackupPlanId"] = request.backupPlanId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.crossAliyunId)) {
      query["CrossAliyunId"] = request.crossAliyunId;
    }

    if (!$dara.isNull(request.crossRoleName)) {
      query["CrossRoleName"] = request.crossRoleName;
    }

    if (!$dara.isNull(request.enableSourceEndpointSsl)) {
      query["EnableSourceEndpointSsl"] = request.enableSourceEndpointSsl;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.sourceEndpointDatabaseName)) {
      query["SourceEndpointDatabaseName"] = request.sourceEndpointDatabaseName;
    }

    if (!$dara.isNull(request.sourceEndpointIP)) {
      query["SourceEndpointIP"] = request.sourceEndpointIP;
    }

    if (!$dara.isNull(request.sourceEndpointInstanceID)) {
      query["SourceEndpointInstanceID"] = request.sourceEndpointInstanceID;
    }

    if (!$dara.isNull(request.sourceEndpointInstanceType)) {
      query["SourceEndpointInstanceType"] = request.sourceEndpointInstanceType;
    }

    if (!$dara.isNull(request.sourceEndpointOracleHome)) {
      query["SourceEndpointOracleHome"] = request.sourceEndpointOracleHome;
    }

    if (!$dara.isNull(request.sourceEndpointOracleSID)) {
      query["SourceEndpointOracleSID"] = request.sourceEndpointOracleSID;
    }

    if (!$dara.isNull(request.sourceEndpointPassword)) {
      query["SourceEndpointPassword"] = request.sourceEndpointPassword;
    }

    if (!$dara.isNull(request.sourceEndpointPort)) {
      query["SourceEndpointPort"] = request.sourceEndpointPort;
    }

    if (!$dara.isNull(request.sourceEndpointRegion)) {
      query["SourceEndpointRegion"] = request.sourceEndpointRegion;
    }

    if (!$dara.isNull(request.sourceEndpointUserName)) {
      query["SourceEndpointUserName"] = request.sourceEndpointUserName;
    }

    if (!$dara.isNull(request.sslCaPem)) {
      query["SslCaPem"] = request.sslCaPem;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyBackupSourceEndpoint",
      version: "2019-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyBackupSourceEndpointResponse>(await this.callApi(params, req, runtime), new $_model.ModifyBackupSourceEndpointResponse({}));
  }

  /**
   * This operation modifies a Database Backup source endpoint.
   * 
   * @param request - ModifyBackupSourceEndpointRequest
   * @returns ModifyBackupSourceEndpointResponse
   */
  async modifyBackupSourceEndpoint(request: $_model.ModifyBackupSourceEndpointRequest): Promise<$_model.ModifyBackupSourceEndpointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyBackupSourceEndpointWithOptions(request, runtime);
  }

  /**
   * Modifies the backup time of a backup schedule.
   * 
   * @param request - ModifyBackupStrategyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyBackupStrategyResponse
   */
  async modifyBackupStrategyWithOptions(request: $_model.ModifyBackupStrategyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyBackupStrategyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupLogIntervalSeconds)) {
      query["BackupLogIntervalSeconds"] = request.backupLogIntervalSeconds;
    }

    if (!$dara.isNull(request.backupPeriod)) {
      query["BackupPeriod"] = request.backupPeriod;
    }

    if (!$dara.isNull(request.backupPlanId)) {
      query["BackupPlanId"] = request.backupPlanId;
    }

    if (!$dara.isNull(request.backupStartTime)) {
      query["BackupStartTime"] = request.backupStartTime;
    }

    if (!$dara.isNull(request.backupStrategyType)) {
      query["BackupStrategyType"] = request.backupStrategyType;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyBackupStrategy",
      version: "2019-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyBackupStrategyResponse>(await this.callApi(params, req, runtime), new $_model.ModifyBackupStrategyResponse({}));
  }

  /**
   * Modifies the backup time of a backup schedule.
   * 
   * @param request - ModifyBackupStrategyRequest
   * @returns ModifyBackupStrategyResponse
   */
  async modifyBackupStrategy(request: $_model.ModifyBackupStrategyRequest): Promise<$_model.ModifyBackupStrategyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyBackupStrategyWithOptions(request, runtime);
  }

  /**
   * Modify the lifecycle of stored data in a backup plan.
   * 
   * @param request - ModifyStorageStrategyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyStorageStrategyResponse
   */
  async modifyStorageStrategyWithOptions(request: $_model.ModifyStorageStrategyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyStorageStrategyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupPlanId)) {
      query["BackupPlanId"] = request.backupPlanId;
    }

    if (!$dara.isNull(request.backupRetentionPeriod)) {
      query["BackupRetentionPeriod"] = request.backupRetentionPeriod;
    }

    if (!$dara.isNull(request.backupStorageEncryptMethod)) {
      query["BackupStorageEncryptMethod"] = request.backupStorageEncryptMethod;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.duplicationArchivePeriod)) {
      query["DuplicationArchivePeriod"] = request.duplicationArchivePeriod;
    }

    if (!$dara.isNull(request.duplicationInfrequentAccessPeriod)) {
      query["DuplicationInfrequentAccessPeriod"] = request.duplicationInfrequentAccessPeriod;
    }

    if (!$dara.isNull(request.incrementBackupRetentionPeriod)) {
      query["IncrementBackupRetentionPeriod"] = request.incrementBackupRetentionPeriod;
    }

    if (!$dara.isNull(request.incrementDuplicationArchivePeriod)) {
      query["IncrementDuplicationArchivePeriod"] = request.incrementDuplicationArchivePeriod;
    }

    if (!$dara.isNull(request.incrementDuplicationInfrequentAccessPeriod)) {
      query["IncrementDuplicationInfrequentAccessPeriod"] = request.incrementDuplicationInfrequentAccessPeriod;
    }

    if (!$dara.isNull(request.logBackupRetentionPeriod)) {
      query["LogBackupRetentionPeriod"] = request.logBackupRetentionPeriod;
    }

    if (!$dara.isNull(request.logDuplicationArchivePeriod)) {
      query["LogDuplicationArchivePeriod"] = request.logDuplicationArchivePeriod;
    }

    if (!$dara.isNull(request.logDuplicationInfrequentAccessPeriod)) {
      query["LogDuplicationInfrequentAccessPeriod"] = request.logDuplicationInfrequentAccessPeriod;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyStorageStrategy",
      version: "2019-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyStorageStrategyResponse>(await this.callApi(params, req, runtime), new $_model.ModifyStorageStrategyResponse({}));
  }

  /**
   * Modify the lifecycle of stored data in a backup plan.
   * 
   * @param request - ModifyStorageStrategyRequest
   * @returns ModifyStorageStrategyResponse
   */
  async modifyStorageStrategy(request: $_model.ModifyStorageStrategyRequest): Promise<$_model.ModifyStorageStrategyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyStorageStrategyWithOptions(request, runtime);
  }

  /**
   * This operation releases a pay-as-you-go backup plan.
   * 
   * @remarks
   * ## Impact
   * After you release a backup plan, the service for the backup instance is stopped and you are no longer charged for the instance.
   * 
   * @param request - ReleaseBackupPlanRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReleaseBackupPlanResponse
   */
  async releaseBackupPlanWithOptions(request: $_model.ReleaseBackupPlanRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReleaseBackupPlanResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupPlanId)) {
      query["BackupPlanId"] = request.backupPlanId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReleaseBackupPlan",
      version: "2019-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReleaseBackupPlanResponse>(await this.callApi(params, req, runtime), new $_model.ReleaseBackupPlanResponse({}));
  }

  /**
   * This operation releases a pay-as-you-go backup plan.
   * 
   * @remarks
   * ## Impact
   * After you release a backup plan, the service for the backup instance is stopped and you are no longer charged for the instance.
   * 
   * @param request - ReleaseBackupPlanRequest
   * @returns ReleaseBackupPlanResponse
   */
  async releaseBackupPlan(request: $_model.ReleaseBackupPlanRequest): Promise<$_model.ReleaseBackupPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.releaseBackupPlanWithOptions(request, runtime);
  }

  /**
   * Renews a backup schedule.
   * 
   * @param request - RenewBackupPlanRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RenewBackupPlanResponse
   */
  async renewBackupPlanWithOptions(request: $_model.RenewBackupPlanRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RenewBackupPlanResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupPlanId)) {
      query["BackupPlanId"] = request.backupPlanId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.usedTime)) {
      query["UsedTime"] = request.usedTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RenewBackupPlan",
      version: "2019-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RenewBackupPlanResponse>(await this.callApi(params, req, runtime), new $_model.RenewBackupPlanResponse({}));
  }

  /**
   * Renews a backup schedule.
   * 
   * @param request - RenewBackupPlanRequest
   * @returns RenewBackupPlanResponse
   */
  async renewBackupPlan(request: $_model.RenewBackupPlanRequest): Promise<$_model.RenewBackupPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.renewBackupPlanWithOptions(request, runtime);
  }

  /**
   * This operation starts a DBS backup plan.
   * 
   * @param request - StartBackupPlanRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartBackupPlanResponse
   */
  async startBackupPlanWithOptions(request: $_model.StartBackupPlanRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartBackupPlanResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupPlanId)) {
      query["BackupPlanId"] = request.backupPlanId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartBackupPlan",
      version: "2019-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartBackupPlanResponse>(await this.callApi(params, req, runtime), new $_model.StartBackupPlanResponse({}));
  }

  /**
   * This operation starts a DBS backup plan.
   * 
   * @param request - StartBackupPlanRequest
   * @returns StartBackupPlanResponse
   */
  async startBackupPlan(request: $_model.StartBackupPlanRequest): Promise<$_model.StartBackupPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startBackupPlanWithOptions(request, runtime);
  }

  /**
   * Starts a DBS restore job.
   * 
   * @param request - StartRestoreTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartRestoreTaskResponse
   */
  async startRestoreTaskWithOptions(request: $_model.StartRestoreTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartRestoreTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.restoreTaskId)) {
      query["RestoreTaskId"] = request.restoreTaskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartRestoreTask",
      version: "2019-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartRestoreTaskResponse>(await this.callApi(params, req, runtime), new $_model.StartRestoreTaskResponse({}));
  }

  /**
   * Starts a DBS restore job.
   * 
   * @param request - StartRestoreTaskRequest
   * @returns StartRestoreTaskResponse
   */
  async startRestoreTask(request: $_model.StartRestoreTaskRequest): Promise<$_model.StartRestoreTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startRestoreTaskWithOptions(request, runtime);
  }

  /**
   * This operation pauses a DBS backup plan.
   * 
   * @param request - StopBackupPlanRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopBackupPlanResponse
   */
  async stopBackupPlanWithOptions(request: $_model.StopBackupPlanRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopBackupPlanResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupPlanId)) {
      query["BackupPlanId"] = request.backupPlanId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.stopMethod)) {
      query["StopMethod"] = request.stopMethod;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopBackupPlan",
      version: "2019-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopBackupPlanResponse>(await this.callApi(params, req, runtime), new $_model.StopBackupPlanResponse({}));
  }

  /**
   * This operation pauses a DBS backup plan.
   * 
   * @param request - StopBackupPlanRequest
   * @returns StopBackupPlanResponse
   */
  async stopBackupPlan(request: $_model.StopBackupPlanRequest): Promise<$_model.StopBackupPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopBackupPlanWithOptions(request, runtime);
  }

  /**
   * Upgrades a backup schedule.
   * 
   * @param request - UpgradeBackupPlanRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpgradeBackupPlanResponse
   */
  async upgradeBackupPlanWithOptions(request: $_model.UpgradeBackupPlanRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpgradeBackupPlanResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupPlanId)) {
      query["BackupPlanId"] = request.backupPlanId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.instanceClass)) {
      query["InstanceClass"] = request.instanceClass;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpgradeBackupPlan",
      version: "2019-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpgradeBackupPlanResponse>(await this.callApi(params, req, runtime), new $_model.UpgradeBackupPlanResponse({}));
  }

  /**
   * Upgrades a backup schedule.
   * 
   * @param request - UpgradeBackupPlanRequest
   * @returns UpgradeBackupPlanResponse
   */
  async upgradeBackupPlan(request: $_model.UpgradeBackupPlanRequest): Promise<$_model.UpgradeBackupPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.upgradeBackupPlanWithOptions(request, runtime);
  }

}
