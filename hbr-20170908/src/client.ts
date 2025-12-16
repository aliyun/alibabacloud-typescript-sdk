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
      'ap-northeast-2-pop': "hbr.aliyuncs.com",
      'cn-beijing-finance-pop': "hbr.aliyuncs.com",
      'cn-beijing-gov-1': "hbr.aliyuncs.com",
      'cn-beijing-nu16-b01': "hbr.aliyuncs.com",
      'cn-edge-1': "hbr.aliyuncs.com",
      'cn-fujian': "hbr.aliyuncs.com",
      'cn-haidian-cm12-c01': "hbr.aliyuncs.com",
      'cn-hangzhou-bj-b01': "hbr.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "hbr.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "hbr.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "hbr.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "hbr.aliyuncs.com",
      'cn-hangzhou-test-306': "hbr.aliyuncs.com",
      'cn-hongkong-finance-pop': "hbr.aliyuncs.com",
      'cn-huhehaote-nebula-1': "hbr.aliyuncs.com",
      'cn-qingdao-nebula': "hbr.aliyuncs.com",
      'cn-shanghai-et15-b01': "hbr.aliyuncs.com",
      'cn-shanghai-et2-b01': "hbr.aliyuncs.com",
      'cn-shanghai-inner': "hbr.aliyuncs.com",
      'cn-shanghai-internal-test-1': "hbr.aliyuncs.com",
      'cn-shenzhen-inner': "hbr.aliyuncs.com",
      'cn-shenzhen-st4-d01': "hbr.aliyuncs.com",
      'cn-shenzhen-su18-b01': "hbr.aliyuncs.com",
      'cn-wuhan': "hbr.aliyuncs.com",
      'cn-yushanfang': "hbr.aliyuncs.com",
      'cn-zhangbei': "hbr.aliyuncs.com",
      'cn-zhangbei-na61-b01': "hbr.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "hbr.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "hbr.aliyuncs.com",
      'eu-west-1-oxs': "hbr.aliyuncs.com",
      'rus-west-1-pop': "hbr.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("hbr", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Registers a Container Service for Kubernetes (ACK) cluster.
   * 
   * @param request - AddContainerClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddContainerClusterResponse
   */
  async addContainerClusterWithOptions(request: $_model.AddContainerClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddContainerClusterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterType)) {
      query["ClusterType"] = request.clusterType;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.identifier)) {
      query["Identifier"] = request.identifier;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.networkType)) {
      query["NetworkType"] = request.networkType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddContainerCluster",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddContainerClusterResponse>(await this.callApi(params, req, runtime), new $_model.AddContainerClusterResponse({}));
  }

  /**
   * Registers a Container Service for Kubernetes (ACK) cluster.
   * 
   * @param request - AddContainerClusterRequest
   * @returns AddContainerClusterResponse
   */
  async addContainerCluster(request: $_model.AddContainerClusterRequest): Promise<$_model.AddContainerClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addContainerClusterWithOptions(request, runtime);
  }

  /**
   * Cancels a backup job.
   * 
   * @param request - CancelBackupJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelBackupJobResponse
   */
  async cancelBackupJobWithOptions(request: $_model.CancelBackupJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CancelBackupJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.edition)) {
      query["Edition"] = request.edition;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelBackupJob",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelBackupJobResponse>(await this.callApi(params, req, runtime), new $_model.CancelBackupJobResponse({}));
  }

  /**
   * Cancels a backup job.
   * 
   * @param request - CancelBackupJobRequest
   * @returns CancelBackupJobResponse
   */
  async cancelBackupJob(request: $_model.CancelBackupJobRequest): Promise<$_model.CancelBackupJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelBackupJobWithOptions(request, runtime);
  }

  /**
   * Cancels a restore job.
   * 
   * @param request - CancelRestoreJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelRestoreJobResponse
   */
  async cancelRestoreJobWithOptions(request: $_model.CancelRestoreJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CancelRestoreJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.edition)) {
      query["Edition"] = request.edition;
    }

    if (!$dara.isNull(request.restoreId)) {
      query["RestoreId"] = request.restoreId;
    }

    if (!$dara.isNull(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelRestoreJob",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelRestoreJobResponse>(await this.callApi(params, req, runtime), new $_model.CancelRestoreJobResponse({}));
  }

  /**
   * Cancels a restore job.
   * 
   * @param request - CancelRestoreJobRequest
   * @returns CancelRestoreJobResponse
   */
  async cancelRestoreJob(request: $_model.CancelRestoreJobRequest): Promise<$_model.CancelRestoreJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelRestoreJobWithOptions(request, runtime);
  }

  /**
   * Changes the resource group to which an instance belongs.
   * 
   * @remarks
   *   In the Cloud Backup console, you can use resource groups to manage resources such as backup vaults, Cloud Backup clients, and SAP HANA instances.
   * *   A resource is a cloud service entity that you create on Alibaba Cloud, such as an Elastic Compute Service (ECS) instance, a backup vault, or an SAP HANA instance.
   * *   You can sort resources owned by your Alibaba Cloud account into various resource groups. Resource groups facilitate resource management among multiple projects or applications within your Alibaba Cloud account and simplify permission management.
   * 
   * @param request - ChangeResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroupWithOptions(request: $_model.ChangeResourceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChangeResourceGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.newResourceGroupId)) {
      body["NewResourceGroupId"] = request.newResourceGroupId;
    }

    if (!$dara.isNull(request.resourceId)) {
      body["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChangeResourceGroup",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChangeResourceGroupResponse>(await this.callApi(params, req, runtime), new $_model.ChangeResourceGroupResponse({}));
  }

  /**
   * Changes the resource group to which an instance belongs.
   * 
   * @remarks
   *   In the Cloud Backup console, you can use resource groups to manage resources such as backup vaults, Cloud Backup clients, and SAP HANA instances.
   * *   A resource is a cloud service entity that you create on Alibaba Cloud, such as an Elastic Compute Service (ECS) instance, a backup vault, or an SAP HANA instance.
   * *   You can sort resources owned by your Alibaba Cloud account into various resource groups. Resource groups facilitate resource management among multiple projects or applications within your Alibaba Cloud account and simplify permission management.
   * 
   * @param request - ChangeResourceGroupRequest
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroup(request: $_model.ChangeResourceGroupRequest): Promise<$_model.ChangeResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.changeResourceGroupWithOptions(request, runtime);
  }

  /**
   * Checks whether the user has permissions to access the current resource or page.
   * 
   * @param request - CheckRoleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckRoleResponse
   */
  async checkRoleWithOptions(request: $_model.CheckRoleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckRoleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.checkRoleType)) {
      query["CheckRoleType"] = request.checkRoleType;
    }

    if (!$dara.isNull(request.crossAccountRoleName)) {
      query["CrossAccountRoleName"] = request.crossAccountRoleName;
    }

    if (!$dara.isNull(request.crossAccountUserId)) {
      query["CrossAccountUserId"] = request.crossAccountUserId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckRole",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckRoleResponse>(await this.callApi(params, req, runtime), new $_model.CheckRoleResponse({}));
  }

  /**
   * Checks whether the user has permissions to access the current resource or page.
   * 
   * @param request - CheckRoleRequest
   * @returns CheckRoleResponse
   */
  async checkRole(request: $_model.CheckRoleRequest): Promise<$_model.CheckRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkRoleWithOptions(request, runtime);
  }

  /**
   * Creates a backup job.
   * 
   * @param tmpReq - CreateBackupJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateBackupJobResponse
   */
  async createBackupJobWithOptions(tmpReq: $_model.CreateBackupJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateBackupJobResponse> {
    tmpReq.validate();
    let request = new $_model.CreateBackupJobShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.detail)) {
      request.detailShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.detail, "Detail", "json");
    }

    let query = { };
    if (!$dara.isNull(request.backupType)) {
      query["BackupType"] = request.backupType;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.containerClusterId)) {
      query["ContainerClusterId"] = request.containerClusterId;
    }

    if (!$dara.isNull(request.containerResources)) {
      query["ContainerResources"] = request.containerResources;
    }

    if (!$dara.isNull(request.crossAccountRoleName)) {
      query["CrossAccountRoleName"] = request.crossAccountRoleName;
    }

    if (!$dara.isNull(request.crossAccountType)) {
      query["CrossAccountType"] = request.crossAccountType;
    }

    if (!$dara.isNull(request.crossAccountUserId)) {
      query["CrossAccountUserId"] = request.crossAccountUserId;
    }

    if (!$dara.isNull(request.detailShrink)) {
      query["Detail"] = request.detailShrink;
    }

    if (!$dara.isNull(request.exclude)) {
      query["Exclude"] = request.exclude;
    }

    if (!$dara.isNull(request.include)) {
      query["Include"] = request.include;
    }

    if (!$dara.isNull(request.initiatedByAck)) {
      query["InitiatedByAck"] = request.initiatedByAck;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.jobName)) {
      query["JobName"] = request.jobName;
    }

    if (!$dara.isNull(request.options)) {
      query["Options"] = request.options;
    }

    if (!$dara.isNull(request.retention)) {
      query["Retention"] = request.retention;
    }

    if (!$dara.isNull(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    if (!$dara.isNull(request.speedLimit)) {
      query["SpeedLimit"] = request.speedLimit;
    }

    if (!$dara.isNull(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateBackupJob",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateBackupJobResponse>(await this.callApi(params, req, runtime), new $_model.CreateBackupJobResponse({}));
  }

  /**
   * Creates a backup job.
   * 
   * @param request - CreateBackupJobRequest
   * @returns CreateBackupJobResponse
   */
  async createBackupJob(request: $_model.CreateBackupJobRequest): Promise<$_model.CreateBackupJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createBackupJobWithOptions(request, runtime);
  }

  /**
   * Create a backup plan.
   * 
   * @remarks
   * - A backup plan associates data sources with backup policies and other necessary information for backups. After the execution of a backup plan, it generates a backup task that records the progress and results of the backup. If the backup task is successful, a backup snapshot is created. You can use the backup snapshot to create a recovery task.
   * - A backup plan supports only one type of data source.
   * - A backup plan supports only a single fixed interval backup cycle strategy.
   * - A backup plan can back up to only one backup vault.
   * 
   * @param tmpReq - CreateBackupPlanRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateBackupPlanResponse
   */
  async createBackupPlanWithOptions(tmpReq: $_model.CreateBackupPlanRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateBackupPlanResponse> {
    tmpReq.validate();
    let request = new $_model.CreateBackupPlanShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.destDataSourceDetail)) {
      request.destDataSourceDetailShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.destDataSourceDetail, "DestDataSourceDetail", "json");
    }

    if (!$dara.isNull(tmpReq.detail)) {
      request.detailShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.detail, "Detail", "json");
    }

    if (!$dara.isNull(tmpReq.otsDetail)) {
      request.otsDetailShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.otsDetail, "OtsDetail", "json");
    }

    let query = { };
    if (!$dara.isNull(request.backupType)) {
      query["BackupType"] = request.backupType;
    }

    if (!$dara.isNull(request.bucket)) {
      query["Bucket"] = request.bucket;
    }

    if (!$dara.isNull(request.changeListPath)) {
      query["ChangeListPath"] = request.changeListPath;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.createTime)) {
      query["CreateTime"] = request.createTime;
    }

    if (!$dara.isNull(request.crossAccountRoleName)) {
      query["CrossAccountRoleName"] = request.crossAccountRoleName;
    }

    if (!$dara.isNull(request.crossAccountType)) {
      query["CrossAccountType"] = request.crossAccountType;
    }

    if (!$dara.isNull(request.crossAccountUserId)) {
      query["CrossAccountUserId"] = request.crossAccountUserId;
    }

    if (!$dara.isNull(request.destDataSourceDetailShrink)) {
      query["DestDataSourceDetail"] = request.destDataSourceDetailShrink;
    }

    if (!$dara.isNull(request.destDataSourceId)) {
      query["DestDataSourceId"] = request.destDataSourceId;
    }

    if (!$dara.isNull(request.destSourceType)) {
      query["DestSourceType"] = request.destSourceType;
    }

    if (!$dara.isNull(request.detailShrink)) {
      query["Detail"] = request.detailShrink;
    }

    if (!$dara.isNull(request.disabled)) {
      query["Disabled"] = request.disabled;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.keepLatestSnapshots)) {
      query["KeepLatestSnapshots"] = request.keepLatestSnapshots;
    }

    if (!$dara.isNull(request.planName)) {
      query["PlanName"] = request.planName;
    }

    if (!$dara.isNull(request.prefix)) {
      query["Prefix"] = request.prefix;
    }

    if (!$dara.isNull(request.retention)) {
      query["Retention"] = request.retention;
    }

    if (!$dara.isNull(request.schedule)) {
      query["Schedule"] = request.schedule;
    }

    if (!$dara.isNull(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    if (!$dara.isNull(request.udmRegionId)) {
      query["UdmRegionId"] = request.udmRegionId;
    }

    if (!$dara.isNull(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dataSourceId)) {
      body["DataSourceId"] = request.dataSourceId;
    }

    if (!$dara.isNull(request.exclude)) {
      body["Exclude"] = request.exclude;
    }

    if (!$dara.isNull(request.include)) {
      body["Include"] = request.include;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceName)) {
      body["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.options)) {
      body["Options"] = request.options;
    }

    if (!$dara.isNull(request.otsDetailShrink)) {
      body["OtsDetail"] = request.otsDetailShrink;
    }

    if (!$dara.isNull(request.path)) {
      body["Path"] = request.path;
    }

    if (!$dara.isNull(request.rule)) {
      body["Rule"] = request.rule;
    }

    if (!$dara.isNull(request.speedLimit)) {
      body["SpeedLimit"] = request.speedLimit;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateBackupPlan",
      version: "2017-09-08",
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
   * Create a backup plan.
   * 
   * @remarks
   * - A backup plan associates data sources with backup policies and other necessary information for backups. After the execution of a backup plan, it generates a backup task that records the progress and results of the backup. If the backup task is successful, a backup snapshot is created. You can use the backup snapshot to create a recovery task.
   * - A backup plan supports only one type of data source.
   * - A backup plan supports only a single fixed interval backup cycle strategy.
   * - A backup plan can back up to only one backup vault.
   * 
   * @param request - CreateBackupPlanRequest
   * @returns CreateBackupPlanResponse
   */
  async createBackupPlan(request: $_model.CreateBackupPlanRequest): Promise<$_model.CreateBackupPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createBackupPlanWithOptions(request, runtime);
  }

  /**
   * Installs one or more Cloud Backup clients on specified instances.
   * 
   * @remarks
   * Before you call this operation, make sure that you fully understand the billing methods and pricing of Cloud Backup. For more information, see [Billing methods and billable items](https://help.aliyun.com/document_detail/89062.html).
   * 
   * @param request - CreateClientsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateClientsResponse
   */
  async createClientsWithOptions(request: $_model.CreateClientsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateClientsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.alertSetting)) {
      query["AlertSetting"] = request.alertSetting;
    }

    if (!$dara.isNull(request.clientInfo)) {
      query["ClientInfo"] = request.clientInfo;
    }

    if (!$dara.isNull(request.crossAccountRoleName)) {
      query["CrossAccountRoleName"] = request.crossAccountRoleName;
    }

    if (!$dara.isNull(request.crossAccountType)) {
      query["CrossAccountType"] = request.crossAccountType;
    }

    if (!$dara.isNull(request.crossAccountUserId)) {
      query["CrossAccountUserId"] = request.crossAccountUserId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.useHttps)) {
      query["UseHttps"] = request.useHttps;
    }

    if (!$dara.isNull(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateClients",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateClientsResponse>(await this.callApi(params, req, runtime), new $_model.CreateClientsResponse({}));
  }

  /**
   * Installs one or more Cloud Backup clients on specified instances.
   * 
   * @remarks
   * Before you call this operation, make sure that you fully understand the billing methods and pricing of Cloud Backup. For more information, see [Billing methods and billable items](https://help.aliyun.com/document_detail/89062.html).
   * 
   * @param request - CreateClientsRequest
   * @returns CreateClientsResponse
   */
  async createClients(request: $_model.CreateClientsRequest): Promise<$_model.CreateClientsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createClientsWithOptions(request, runtime);
  }

  /**
   * Creates a backup plan for an SAP HANA instance.
   * 
   * @remarks
   *   A backup plan defines the data source, backup policy, and other configurations. After you execute a backup plan, a backup job is generated to record the backup progress and the backup result. If a backup job is completed, a backup snapshot is generated. You can use a backup snapshot to create a restore job.
   * *   You can specify only one type of data source in a backup plan.
   * *   You can specify only one interval as a backup cycle in a backup plan.
   * *   Each backup plan allows you to back up data to only one backup vault.
   * 
   * @param request - CreateHanaBackupPlanRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateHanaBackupPlanResponse
   */
  async createHanaBackupPlanWithOptions(request: $_model.CreateHanaBackupPlanRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateHanaBackupPlanResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupPrefix)) {
      query["BackupPrefix"] = request.backupPrefix;
    }

    if (!$dara.isNull(request.backupType)) {
      query["BackupType"] = request.backupType;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.databaseName)) {
      query["DatabaseName"] = request.databaseName;
    }

    if (!$dara.isNull(request.planName)) {
      query["PlanName"] = request.planName;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.schedule)) {
      query["Schedule"] = request.schedule;
    }

    if (!$dara.isNull(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateHanaBackupPlan",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateHanaBackupPlanResponse>(await this.callApi(params, req, runtime), new $_model.CreateHanaBackupPlanResponse({}));
  }

  /**
   * Creates a backup plan for an SAP HANA instance.
   * 
   * @remarks
   *   A backup plan defines the data source, backup policy, and other configurations. After you execute a backup plan, a backup job is generated to record the backup progress and the backup result. If a backup job is completed, a backup snapshot is generated. You can use a backup snapshot to create a restore job.
   * *   You can specify only one type of data source in a backup plan.
   * *   You can specify only one interval as a backup cycle in a backup plan.
   * *   Each backup plan allows you to back up data to only one backup vault.
   * 
   * @param request - CreateHanaBackupPlanRequest
   * @returns CreateHanaBackupPlanResponse
   */
  async createHanaBackupPlan(request: $_model.CreateHanaBackupPlanRequest): Promise<$_model.CreateHanaBackupPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createHanaBackupPlanWithOptions(request, runtime);
  }

  /**
   * Registers an SAP HANA instance.
   * 
   * @remarks
   * To register an SAP HANA instance, you must configure the SAP HANA connection information. After the SAP HANA instance is registered, Cloud Backup installs a backup client on the node of the SAP HANA instance.
   * 
   * @param request - CreateHanaInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateHanaInstanceResponse
   */
  async createHanaInstanceWithOptions(request: $_model.CreateHanaInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateHanaInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.alertSetting)) {
      query["AlertSetting"] = request.alertSetting;
    }

    if (!$dara.isNull(request.crossAccountRoleName)) {
      query["CrossAccountRoleName"] = request.crossAccountRoleName;
    }

    if (!$dara.isNull(request.crossAccountType)) {
      query["CrossAccountType"] = request.crossAccountType;
    }

    if (!$dara.isNull(request.crossAccountUserId)) {
      query["CrossAccountUserId"] = request.crossAccountUserId;
    }

    if (!$dara.isNull(request.ecsInstanceId)) {
      query["EcsInstanceId"] = request.ecsInstanceId;
    }

    if (!$dara.isNull(request.hanaName)) {
      query["HanaName"] = request.hanaName;
    }

    if (!$dara.isNull(request.host)) {
      query["Host"] = request.host;
    }

    if (!$dara.isNull(request.instanceNumber)) {
      query["InstanceNumber"] = request.instanceNumber;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.sid)) {
      query["Sid"] = request.sid;
    }

    if (!$dara.isNull(request.useSsl)) {
      query["UseSsl"] = request.useSsl;
    }

    if (!$dara.isNull(request.userName)) {
      query["UserName"] = request.userName;
    }

    if (!$dara.isNull(request.validateCertificate)) {
      query["ValidateCertificate"] = request.validateCertificate;
    }

    if (!$dara.isNull(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateHanaInstance",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateHanaInstanceResponse>(await this.callApi(params, req, runtime), new $_model.CreateHanaInstanceResponse({}));
  }

  /**
   * Registers an SAP HANA instance.
   * 
   * @remarks
   * To register an SAP HANA instance, you must configure the SAP HANA connection information. After the SAP HANA instance is registered, Cloud Backup installs a backup client on the node of the SAP HANA instance.
   * 
   * @param request - CreateHanaInstanceRequest
   * @returns CreateHanaInstanceResponse
   */
  async createHanaInstance(request: $_model.CreateHanaInstanceRequest): Promise<$_model.CreateHanaInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createHanaInstanceWithOptions(request, runtime);
  }

  /**
   * Creates a restore job for an SAP HANA database.
   * 
   * @remarks
   * If you call this operation to restore a database, the database is restored to a specified state. Proceed with caution. For more information, see [Restore databases to an SAP HANA instance](https://help.aliyun.com/document_detail/101178.html).
   * 
   * @param request - CreateHanaRestoreRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateHanaRestoreResponse
   */
  async createHanaRestoreWithOptions(request: $_model.CreateHanaRestoreRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateHanaRestoreResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupId)) {
      query["BackupId"] = request.backupId;
    }

    if (!$dara.isNull(request.backupPrefix)) {
      query["BackupPrefix"] = request.backupPrefix;
    }

    if (!$dara.isNull(request.checkAccess)) {
      query["CheckAccess"] = request.checkAccess;
    }

    if (!$dara.isNull(request.clearLog)) {
      query["ClearLog"] = request.clearLog;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.databaseName)) {
      query["DatabaseName"] = request.databaseName;
    }

    if (!$dara.isNull(request.logPosition)) {
      query["LogPosition"] = request.logPosition;
    }

    if (!$dara.isNull(request.masterClientId)) {
      query["MasterClientId"] = request.masterClientId;
    }

    if (!$dara.isNull(request.mode)) {
      query["Mode"] = request.mode;
    }

    if (!$dara.isNull(request.recoveryPointInTime)) {
      query["RecoveryPointInTime"] = request.recoveryPointInTime;
    }

    if (!$dara.isNull(request.sidAdmin)) {
      query["SidAdmin"] = request.sidAdmin;
    }

    if (!$dara.isNull(request.source)) {
      query["Source"] = request.source;
    }

    if (!$dara.isNull(request.sourceClusterId)) {
      query["SourceClusterId"] = request.sourceClusterId;
    }

    if (!$dara.isNull(request.systemCopy)) {
      query["SystemCopy"] = request.systemCopy;
    }

    if (!$dara.isNull(request.useCatalog)) {
      query["UseCatalog"] = request.useCatalog;
    }

    if (!$dara.isNull(request.useDelta)) {
      query["UseDelta"] = request.useDelta;
    }

    if (!$dara.isNull(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    if (!$dara.isNull(request.volumeId)) {
      query["VolumeId"] = request.volumeId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateHanaRestore",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateHanaRestoreResponse>(await this.callApi(params, req, runtime), new $_model.CreateHanaRestoreResponse({}));
  }

  /**
   * Creates a restore job for an SAP HANA database.
   * 
   * @remarks
   * If you call this operation to restore a database, the database is restored to a specified state. Proceed with caution. For more information, see [Restore databases to an SAP HANA instance](https://help.aliyun.com/document_detail/101178.html).
   * 
   * @param request - CreateHanaRestoreRequest
   * @returns CreateHanaRestoreResponse
   */
  async createHanaRestore(request: $_model.CreateHanaRestoreRequest): Promise<$_model.CreateHanaRestoreResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createHanaRestoreWithOptions(request, runtime);
  }

  /**
   * Binds one or more data sources to a backup policy.
   * 
   * @remarks
   *   You can bind data sources to only one policy in each request.
   * *   Elastic Compute Service (ECS) instances can be bound to only one policy.
   * 
   * @param tmpReq - CreatePolicyBindingsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePolicyBindingsResponse
   */
  async createPolicyBindingsWithOptions(tmpReq: $_model.CreatePolicyBindingsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePolicyBindingsResponse> {
    tmpReq.validate();
    let request = new $_model.CreatePolicyBindingsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.policyBindingList)) {
      request.policyBindingListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.policyBindingList, "PolicyBindingList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.policyBindingListShrink)) {
      query["PolicyBindingList"] = request.policyBindingListShrink;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.policyId)) {
      body["PolicyId"] = request.policyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePolicyBindings",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePolicyBindingsResponse>(await this.callApi(params, req, runtime), new $_model.CreatePolicyBindingsResponse({}));
  }

  /**
   * Binds one or more data sources to a backup policy.
   * 
   * @remarks
   *   You can bind data sources to only one policy in each request.
   * *   Elastic Compute Service (ECS) instances can be bound to only one policy.
   * 
   * @param request - CreatePolicyBindingsRequest
   * @returns CreatePolicyBindingsResponse
   */
  async createPolicyBindings(request: $_model.CreatePolicyBindingsRequest): Promise<$_model.CreatePolicyBindingsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createPolicyBindingsWithOptions(request, runtime);
  }

  /**
   * Creates a backup policy.
   * 
   * @remarks
   * A backup policy records the information required for backup. After you execute a backup policy, a backup job is generated to record the backup progress and the backup result. If a backup job is completed, a backup snapshot is generated. You can use a backup snapshot to create a restore job.
   * *   A backup policy supports multiple data sources. The data sources can be only Elastic Compute Service (ECS) instances.
   * *   You can specify only one interval as a backup cycle in a backup policy.
   * *   Each backup policy allows you to back up data to only one backup vault.
   * 
   * @param tmpReq - CreatePolicyV2Request
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePolicyV2Response
   */
  async createPolicyV2WithOptions(tmpReq: $_model.CreatePolicyV2Request, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePolicyV2Response> {
    tmpReq.validate();
    let request = new $_model.CreatePolicyV2ShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.rules)) {
      request.rulesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.rules, "Rules", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.policyDescription)) {
      body["PolicyDescription"] = request.policyDescription;
    }

    if (!$dara.isNull(request.policyName)) {
      body["PolicyName"] = request.policyName;
    }

    if (!$dara.isNull(request.policyType)) {
      body["PolicyType"] = request.policyType;
    }

    if (!$dara.isNull(request.rulesShrink)) {
      body["Rules"] = request.rulesShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePolicyV2",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePolicyV2Response>(await this.callApi(params, req, runtime), new $_model.CreatePolicyV2Response({}));
  }

  /**
   * Creates a backup policy.
   * 
   * @remarks
   * A backup policy records the information required for backup. After you execute a backup policy, a backup job is generated to record the backup progress and the backup result. If a backup job is completed, a backup snapshot is generated. You can use a backup snapshot to create a restore job.
   * *   A backup policy supports multiple data sources. The data sources can be only Elastic Compute Service (ECS) instances.
   * *   You can specify only one interval as a backup cycle in a backup policy.
   * *   Each backup policy allows you to back up data to only one backup vault.
   * 
   * @param request - CreatePolicyV2Request
   * @returns CreatePolicyV2Response
   */
  async createPolicyV2(request: $_model.CreatePolicyV2Request): Promise<$_model.CreatePolicyV2Response> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createPolicyV2WithOptions(request, runtime);
  }

  /**
   * Creates a mirror vault.
   * 
   * @remarks
   * After a backup vault is created, the backup vault is in the INITIALIZING state, and the system automatically runs an initialization task to initialize the backup vault. After the initialization task is completed, the backup vault is in the CREATED state.Call this operation in the region where the mirror vault resides, which is specified by the VaultRegionId parameter.
   * 
   * @param request - CreateReplicationVaultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateReplicationVaultResponse
   */
  async createReplicationVaultWithOptions(request: $_model.CreateReplicationVaultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateReplicationVaultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.encryptType)) {
      query["EncryptType"] = request.encryptType;
    }

    if (!$dara.isNull(request.kmsKeyId)) {
      query["KmsKeyId"] = request.kmsKeyId;
    }

    if (!$dara.isNull(request.redundancyType)) {
      query["RedundancyType"] = request.redundancyType;
    }

    if (!$dara.isNull(request.replicationSourceRegionId)) {
      query["ReplicationSourceRegionId"] = request.replicationSourceRegionId;
    }

    if (!$dara.isNull(request.replicationSourceVaultId)) {
      query["ReplicationSourceVaultId"] = request.replicationSourceVaultId;
    }

    if (!$dara.isNull(request.vaultName)) {
      query["VaultName"] = request.vaultName;
    }

    if (!$dara.isNull(request.vaultRegionId)) {
      query["VaultRegionId"] = request.vaultRegionId;
    }

    if (!$dara.isNull(request.vaultStorageClass)) {
      query["VaultStorageClass"] = request.vaultStorageClass;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateReplicationVault",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateReplicationVaultResponse>(await this.callApi(params, req, runtime), new $_model.CreateReplicationVaultResponse({}));
  }

  /**
   * Creates a mirror vault.
   * 
   * @remarks
   * After a backup vault is created, the backup vault is in the INITIALIZING state, and the system automatically runs an initialization task to initialize the backup vault. After the initialization task is completed, the backup vault is in the CREATED state.Call this operation in the region where the mirror vault resides, which is specified by the VaultRegionId parameter.
   * 
   * @param request - CreateReplicationVaultRequest
   * @returns CreateReplicationVaultResponse
   */
  async createReplicationVault(request: $_model.CreateReplicationVaultRequest): Promise<$_model.CreateReplicationVaultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createReplicationVaultWithOptions(request, runtime);
  }

  /**
   * Create a restore job.
   * 
   * @remarks
   * - Create a restore job based on the selected snapshot and the restore destination.
   * - Currently, the data source type must match the restore destination data source type.
   * 
   * @param tmpReq - CreateRestoreJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRestoreJobResponse
   */
  async createRestoreJobWithOptions(tmpReq: $_model.CreateRestoreJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateRestoreJobResponse> {
    tmpReq.validate();
    let request = new $_model.CreateRestoreJobShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.failbackDetail)) {
      request.failbackDetailShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.failbackDetail, "FailbackDetail", "json");
    }

    if (!$dara.isNull(tmpReq.otsDetail)) {
      request.otsDetailShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.otsDetail, "OtsDetail", "json");
    }

    if (!$dara.isNull(tmpReq.udmDetail)) {
      request.udmDetailShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.udmDetail, "UdmDetail", "json");
    }

    let query = { };
    if (!$dara.isNull(request.crossAccountRoleName)) {
      query["CrossAccountRoleName"] = request.crossAccountRoleName;
    }

    if (!$dara.isNull(request.crossAccountType)) {
      query["CrossAccountType"] = request.crossAccountType;
    }

    if (!$dara.isNull(request.crossAccountUserId)) {
      query["CrossAccountUserId"] = request.crossAccountUserId;
    }

    if (!$dara.isNull(request.edition)) {
      query["Edition"] = request.edition;
    }

    if (!$dara.isNull(request.failbackDetailShrink)) {
      query["FailbackDetail"] = request.failbackDetailShrink;
    }

    if (!$dara.isNull(request.initiatedByAck)) {
      query["InitiatedByAck"] = request.initiatedByAck;
    }

    if (!$dara.isNull(request.options)) {
      query["Options"] = request.options;
    }

    if (!$dara.isNull(request.restoreType)) {
      query["RestoreType"] = request.restoreType;
    }

    if (!$dara.isNull(request.snapshotHash)) {
      query["SnapshotHash"] = request.snapshotHash;
    }

    if (!$dara.isNull(request.snapshotId)) {
      query["SnapshotId"] = request.snapshotId;
    }

    if (!$dara.isNull(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    if (!$dara.isNull(request.targetBucket)) {
      query["TargetBucket"] = request.targetBucket;
    }

    if (!$dara.isNull(request.targetContainer)) {
      query["TargetContainer"] = request.targetContainer;
    }

    if (!$dara.isNull(request.targetContainerClusterId)) {
      query["TargetContainerClusterId"] = request.targetContainerClusterId;
    }

    if (!$dara.isNull(request.targetCreateTime)) {
      query["TargetCreateTime"] = request.targetCreateTime;
    }

    if (!$dara.isNull(request.targetFileSystemId)) {
      query["TargetFileSystemId"] = request.targetFileSystemId;
    }

    if (!$dara.isNull(request.targetInstanceName)) {
      query["TargetInstanceName"] = request.targetInstanceName;
    }

    if (!$dara.isNull(request.targetPrefix)) {
      query["TargetPrefix"] = request.targetPrefix;
    }

    if (!$dara.isNull(request.targetTableName)) {
      query["TargetTableName"] = request.targetTableName;
    }

    if (!$dara.isNull(request.targetTime)) {
      query["TargetTime"] = request.targetTime;
    }

    if (!$dara.isNull(request.udmDetailShrink)) {
      query["UdmDetail"] = request.udmDetailShrink;
    }

    if (!$dara.isNull(request.udmRegionId)) {
      query["UdmRegionId"] = request.udmRegionId;
    }

    if (!$dara.isNull(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.exclude)) {
      body["Exclude"] = request.exclude;
    }

    if (!$dara.isNull(request.include)) {
      body["Include"] = request.include;
    }

    if (!$dara.isNull(request.otsDetailShrink)) {
      body["OtsDetail"] = request.otsDetailShrink;
    }

    if (!$dara.isNull(request.targetInstanceId)) {
      body["TargetInstanceId"] = request.targetInstanceId;
    }

    if (!$dara.isNull(request.targetPath)) {
      body["TargetPath"] = request.targetPath;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRestoreJob",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateRestoreJobResponse>(await this.callApi(params, req, runtime), new $_model.CreateRestoreJobResponse({}));
  }

  /**
   * Create a restore job.
   * 
   * @remarks
   * - Create a restore job based on the selected snapshot and the restore destination.
   * - Currently, the data source type must match the restore destination data source type.
   * 
   * @param request - CreateRestoreJobRequest
   * @returns CreateRestoreJobResponse
   */
  async createRestoreJob(request: $_model.CreateRestoreJobRequest): Promise<$_model.CreateRestoreJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createRestoreJobWithOptions(request, runtime);
  }

  /**
   * Generates the parameters and signature required for a file upload URL.
   * 
   * @remarks
   * 1.  You can directly upload a file to Object Storage Service (OSS) by using a form based on the returned value of this operation.
   * 2.  For more information about how to upload a file to OSS by using a form, see OSS documentation.
   * 3.  The system periodically deletes files that are uploaded to OSS.
   * 
   * @param request - CreateTempFileUploadUrlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTempFileUploadUrlResponse
   */
  async createTempFileUploadUrlWithOptions(request: $_model.CreateTempFileUploadUrlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTempFileUploadUrlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTempFileUploadUrl",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateTempFileUploadUrlResponse>(await this.callApi(params, req, runtime), new $_model.CreateTempFileUploadUrlResponse({}));
  }

  /**
   * Generates the parameters and signature required for a file upload URL.
   * 
   * @remarks
   * 1.  You can directly upload a file to Object Storage Service (OSS) by using a form based on the returned value of this operation.
   * 2.  For more information about how to upload a file to OSS by using a form, see OSS documentation.
   * 3.  The system periodically deletes files that are uploaded to OSS.
   * 
   * @param request - CreateTempFileUploadUrlRequest
   * @returns CreateTempFileUploadUrlResponse
   */
  async createTempFileUploadUrl(request: $_model.CreateTempFileUploadUrlRequest): Promise<$_model.CreateTempFileUploadUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createTempFileUploadUrlWithOptions(request, runtime);
  }

  /**
   * Creates a backup vault.
   * 
   * @remarks
   *   Each Alibaba Cloud account can create up to 100 backup vaults.
   * *   After a backup vault is created, the backup vault is in the INITIALIZING state, and the system automatically runs an initialization task to initialize the backup vault. After the initialization task is completed, the backup vault is in the CREATED state. A backup job can use a backup vault to store backup data only if the backup vault is in the CREATED state.
   *     **
   *     **Note** Before you call this operation, make sure that you fully understand the billing of Cloud Backup.
   * 
   * @param request - CreateVaultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateVaultResponse
   */
  async createVaultWithOptions(request: $_model.CreateVaultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateVaultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.encryptType)) {
      query["EncryptType"] = request.encryptType;
    }

    if (!$dara.isNull(request.kmsKeyId)) {
      query["KmsKeyId"] = request.kmsKeyId;
    }

    if (!$dara.isNull(request.replication)) {
      query["Replication"] = request.replication;
    }

    if (!$dara.isNull(request.vaultName)) {
      query["VaultName"] = request.vaultName;
    }

    if (!$dara.isNull(request.vaultRegionId)) {
      query["VaultRegionId"] = request.vaultRegionId;
    }

    if (!$dara.isNull(request.vaultStorageClass)) {
      query["VaultStorageClass"] = request.vaultStorageClass;
    }

    if (!$dara.isNull(request.vaultType)) {
      query["VaultType"] = request.vaultType;
    }

    if (!$dara.isNull(request.wormEnabled)) {
      query["WormEnabled"] = request.wormEnabled;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateVault",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateVaultResponse>(await this.callApi(params, req, runtime), new $_model.CreateVaultResponse({}));
  }

  /**
   * Creates a backup vault.
   * 
   * @remarks
   *   Each Alibaba Cloud account can create up to 100 backup vaults.
   * *   After a backup vault is created, the backup vault is in the INITIALIZING state, and the system automatically runs an initialization task to initialize the backup vault. After the initialization task is completed, the backup vault is in the CREATED state. A backup job can use a backup vault to store backup data only if the backup vault is in the CREATED state.
   *     **
   *     **Note** Before you call this operation, make sure that you fully understand the billing of Cloud Backup.
   * 
   * @param request - CreateVaultRequest
   * @returns CreateVaultResponse
   */
  async createVault(request: $_model.CreateVaultRequest): Promise<$_model.CreateVaultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createVaultWithOptions(request, runtime);
  }

  /**
   * 创建备份库复制
   * 
   * @param request - CreateVaultReplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateVaultReplicationResponse
   */
  async createVaultReplicationWithOptions(request: $_model.CreateVaultReplicationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateVaultReplicationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.replicationSourceRegionId)) {
      query["ReplicationSourceRegionId"] = request.replicationSourceRegionId;
    }

    if (!$dara.isNull(request.replicationSourceVaultId)) {
      query["ReplicationSourceVaultId"] = request.replicationSourceVaultId;
    }

    if (!$dara.isNull(request.replicationTargetVaultId)) {
      query["ReplicationTargetVaultId"] = request.replicationTargetVaultId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateVaultReplication",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateVaultReplicationResponse>(await this.callApi(params, req, runtime), new $_model.CreateVaultReplicationResponse({}));
  }

  /**
   * 创建备份库复制
   * 
   * @param request - CreateVaultReplicationRequest
   * @returns CreateVaultReplicationResponse
   */
  async createVaultReplication(request: $_model.CreateVaultReplicationRequest): Promise<$_model.CreateVaultReplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createVaultReplicationWithOptions(request, runtime);
  }

  /**
   * Removes the Elastic Compute Service (ECS) instance that is used for restoration only in ECS Backup Essential Edition.
   * 
   * @param tmpReq - DeleteAirEcsInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAirEcsInstanceResponse
   */
  async deleteAirEcsInstanceWithOptions(tmpReq: $_model.DeleteAirEcsInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAirEcsInstanceResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteAirEcsInstanceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.uninstallClientSourceTypes)) {
      request.uninstallClientSourceTypesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.uninstallClientSourceTypes, "UninstallClientSourceTypes", "json");
    }

    let query = { };
    if (!$dara.isNull(request.ecsInstanceId)) {
      query["EcsInstanceId"] = request.ecsInstanceId;
    }

    if (!$dara.isNull(request.uninstallClientSourceTypesShrink)) {
      query["UninstallClientSourceTypes"] = request.uninstallClientSourceTypesShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAirEcsInstance",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAirEcsInstanceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAirEcsInstanceResponse({}));
  }

  /**
   * Removes the Elastic Compute Service (ECS) instance that is used for restoration only in ECS Backup Essential Edition.
   * 
   * @param request - DeleteAirEcsInstanceRequest
   * @returns DeleteAirEcsInstanceResponse
   */
  async deleteAirEcsInstance(request: $_model.DeleteAirEcsInstanceRequest): Promise<$_model.DeleteAirEcsInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAirEcsInstanceWithOptions(request, runtime);
  }

  /**
   * Deletes a Cloud Backup client.
   * 
   * @remarks
   *   You cannot delete the active Cloud Backup clients that receive heartbeat packets within 1 hour. You can call the UninstallBackupClients operation to uninstall a Cloud Backup client. Then, the client becomes inactive.
   * *   When you perform this operation, resources that are associated with the client are also deleted, including:
   *     *   Backup plans
   *     *   Backup jobs
   *     *   Snapshots
   * 
   * @param request - DeleteBackupClientRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteBackupClientResponse
   */
  async deleteBackupClientWithOptions(request: $_model.DeleteBackupClientRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteBackupClientResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteBackupClient",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteBackupClientResponse>(await this.callApi(params, req, runtime), new $_model.DeleteBackupClientResponse({}));
  }

  /**
   * Deletes a Cloud Backup client.
   * 
   * @remarks
   *   You cannot delete the active Cloud Backup clients that receive heartbeat packets within 1 hour. You can call the UninstallBackupClients operation to uninstall a Cloud Backup client. Then, the client becomes inactive.
   * *   When you perform this operation, resources that are associated with the client are also deleted, including:
   *     *   Backup plans
   *     *   Backup jobs
   *     *   Snapshots
   * 
   * @param request - DeleteBackupClientRequest
   * @returns DeleteBackupClientResponse
   */
  async deleteBackupClient(request: $_model.DeleteBackupClientRequest): Promise<$_model.DeleteBackupClientResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteBackupClientWithOptions(request, runtime);
  }

  /**
   * Deletes the resources that are related to one or more HBR clients.
   * 
   * @remarks
   * This operation deletes only the resources that are related to HBR clients. The resources include backup plans, backup jobs, and backup snapshots. The operation does not delete HBR clients.
   * 
   * @param tmpReq - DeleteBackupClientResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteBackupClientResourceResponse
   */
  async deleteBackupClientResourceWithOptions(tmpReq: $_model.DeleteBackupClientResourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteBackupClientResourceResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteBackupClientResourceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.clientIds)) {
      request.clientIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.clientIds, "ClientIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clientIdsShrink)) {
      query["ClientIds"] = request.clientIdsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteBackupClientResource",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteBackupClientResourceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteBackupClientResourceResponse({}));
  }

  /**
   * Deletes the resources that are related to one or more HBR clients.
   * 
   * @remarks
   * This operation deletes only the resources that are related to HBR clients. The resources include backup plans, backup jobs, and backup snapshots. The operation does not delete HBR clients.
   * 
   * @param request - DeleteBackupClientResourceRequest
   * @returns DeleteBackupClientResourceResponse
   */
  async deleteBackupClientResource(request: $_model.DeleteBackupClientResourceRequest): Promise<$_model.DeleteBackupClientResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteBackupClientResourceWithOptions(request, runtime);
  }

  /**
   * Deletes a backup plan.
   * 
   * @remarks
   *   If you delete a backup plan, the backup jobs are also deleted.
   * *   If you delete a backup plan, the created snapshot files are not deleted.
   * 
   * @param request - DeleteBackupPlanRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteBackupPlanResponse
   */
  async deleteBackupPlanWithOptions(request: $_model.DeleteBackupPlanRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteBackupPlanResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.edition)) {
      query["Edition"] = request.edition;
    }

    if (!$dara.isNull(request.planId)) {
      query["PlanId"] = request.planId;
    }

    if (!$dara.isNull(request.requireNoRunningJobs)) {
      query["RequireNoRunningJobs"] = request.requireNoRunningJobs;
    }

    if (!$dara.isNull(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    if (!$dara.isNull(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteBackupPlan",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteBackupPlanResponse>(await this.callApi(params, req, runtime), new $_model.DeleteBackupPlanResponse({}));
  }

  /**
   * Deletes a backup plan.
   * 
   * @remarks
   *   If you delete a backup plan, the backup jobs are also deleted.
   * *   If you delete a backup plan, the created snapshot files are not deleted.
   * 
   * @param request - DeleteBackupPlanRequest
   * @returns DeleteBackupPlanResponse
   */
  async deleteBackupPlan(request: $_model.DeleteBackupPlanRequest): Promise<$_model.DeleteBackupPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteBackupPlanWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteClientRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteClientResponse
   */
  async deleteClientWithOptions(request: $_model.DeleteClientRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteClientResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteClient",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteClientResponse>(await this.callApi(params, req, runtime), new $_model.DeleteClientResponse({}));
  }

  /**
   * @param request - DeleteClientRequest
   * @returns DeleteClientResponse
   */
  async deleteClient(request: $_model.DeleteClientRequest): Promise<$_model.DeleteClientResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteClientWithOptions(request, runtime);
  }

  /**
   * Deletes an SAP HANA backup plan.
   * 
   * @param request - DeleteHanaBackupPlanRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteHanaBackupPlanResponse
   */
  async deleteHanaBackupPlanWithOptions(request: $_model.DeleteHanaBackupPlanRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteHanaBackupPlanResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.planId)) {
      query["PlanId"] = request.planId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteHanaBackupPlan",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteHanaBackupPlanResponse>(await this.callApi(params, req, runtime), new $_model.DeleteHanaBackupPlanResponse({}));
  }

  /**
   * Deletes an SAP HANA backup plan.
   * 
   * @param request - DeleteHanaBackupPlanRequest
   * @returns DeleteHanaBackupPlanResponse
   */
  async deleteHanaBackupPlan(request: $_model.DeleteHanaBackupPlanRequest): Promise<$_model.DeleteHanaBackupPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteHanaBackupPlanWithOptions(request, runtime);
  }

  /**
   * Deletes an SAP HANA instance.
   * 
   * @remarks
   * If you delete an SAP HANA instance, the existing backup data is also deleted and the running backup and restore jobs fail to be completed. Before you delete the SAP HANA instance, make sure that you no longer need the backup data of the instance and no backup or restore jobs are running for the instance. To delete an SAP HANA instance, you must specify the security identifier (SID) of the instance. The SID is three characters in length and starts with a letter. For more information, see [How to find sid user and instance number of HANA db?](https://answers.sap.com/questions/555192/how-to-find-sid-user-and-instance-number-of-hana-d.html?)
   * 
   * @param request - DeleteHanaInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteHanaInstanceResponse
   */
  async deleteHanaInstanceWithOptions(request: $_model.DeleteHanaInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteHanaInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.sid)) {
      query["Sid"] = request.sid;
    }

    if (!$dara.isNull(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteHanaInstance",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteHanaInstanceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteHanaInstanceResponse({}));
  }

  /**
   * Deletes an SAP HANA instance.
   * 
   * @remarks
   * If you delete an SAP HANA instance, the existing backup data is also deleted and the running backup and restore jobs fail to be completed. Before you delete the SAP HANA instance, make sure that you no longer need the backup data of the instance and no backup or restore jobs are running for the instance. To delete an SAP HANA instance, you must specify the security identifier (SID) of the instance. The SID is three characters in length and starts with a letter. For more information, see [How to find sid user and instance number of HANA db?](https://answers.sap.com/questions/555192/how-to-find-sid-user-and-instance-number-of-hana-d.html?)
   * 
   * @param request - DeleteHanaInstanceRequest
   * @returns DeleteHanaInstanceResponse
   */
  async deleteHanaInstance(request: $_model.DeleteHanaInstanceRequest): Promise<$_model.DeleteHanaInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteHanaInstanceWithOptions(request, runtime);
  }

  /**
   * Disassociates one or more data sources from a backup policy. After you disassociate the data sources from the backup policy, the backup policy no longer protects the data sources. Proceed with caution.
   * 
   * @param tmpReq - DeletePolicyBindingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePolicyBindingResponse
   */
  async deletePolicyBindingWithOptions(tmpReq: $_model.DeletePolicyBindingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeletePolicyBindingResponse> {
    tmpReq.validate();
    let request = new $_model.DeletePolicyBindingShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.dataSourceIds)) {
      request.dataSourceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.dataSourceIds, "DataSourceIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dataSourceIdsShrink)) {
      body["DataSourceIds"] = request.dataSourceIdsShrink;
    }

    if (!$dara.isNull(request.policyId)) {
      body["PolicyId"] = request.policyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeletePolicyBinding",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeletePolicyBindingResponse>(await this.callApi(params, req, runtime), new $_model.DeletePolicyBindingResponse({}));
  }

  /**
   * Disassociates one or more data sources from a backup policy. After you disassociate the data sources from the backup policy, the backup policy no longer protects the data sources. Proceed with caution.
   * 
   * @param request - DeletePolicyBindingRequest
   * @returns DeletePolicyBindingResponse
   */
  async deletePolicyBinding(request: $_model.DeletePolicyBindingRequest): Promise<$_model.DeletePolicyBindingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deletePolicyBindingWithOptions(request, runtime);
  }

  /**
   * Deletes a backup policy.
   * 
   * @remarks
   * If you delete a backup policy, the backup policy is disassociated with all data sources. Proceed with caution.
   * 
   * @param request - DeletePolicyV2Request
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePolicyV2Response
   */
  async deletePolicyV2WithOptions(request: $_model.DeletePolicyV2Request, runtime: $dara.RuntimeOptions): Promise<$_model.DeletePolicyV2Response> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.policyId)) {
      body["PolicyId"] = request.policyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeletePolicyV2",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeletePolicyV2Response>(await this.callApi(params, req, runtime), new $_model.DeletePolicyV2Response({}));
  }

  /**
   * Deletes a backup policy.
   * 
   * @remarks
   * If you delete a backup policy, the backup policy is disassociated with all data sources. Proceed with caution.
   * 
   * @param request - DeletePolicyV2Request
   * @returns DeletePolicyV2Response
   */
  async deletePolicyV2(request: $_model.DeletePolicyV2Request): Promise<$_model.DeletePolicyV2Response> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deletePolicyV2WithOptions(request, runtime);
  }

  /**
   * Deletes a backup snapshot.
   * 
   * @param request - DeleteSnapshotRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSnapshotResponse
   */
  async deleteSnapshotWithOptions(request: $_model.DeleteSnapshotRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSnapshotResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.force)) {
      query["Force"] = request.force;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.snapshotId)) {
      query["SnapshotId"] = request.snapshotId;
    }

    if (!$dara.isNull(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    if (!$dara.isNull(request.token)) {
      query["Token"] = request.token;
    }

    if (!$dara.isNull(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSnapshot",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSnapshotResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSnapshotResponse({}));
  }

  /**
   * Deletes a backup snapshot.
   * 
   * @param request - DeleteSnapshotRequest
   * @returns DeleteSnapshotResponse
   */
  async deleteSnapshot(request: $_model.DeleteSnapshotRequest): Promise<$_model.DeleteSnapshotResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSnapshotWithOptions(request, runtime);
  }

  /**
   * Cancels a protected disk.
   * 
   * @param request - DeleteUdmDiskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteUdmDiskResponse
   */
  async deleteUdmDiskWithOptions(request: $_model.DeleteUdmDiskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteUdmDiskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.diskId)) {
      query["DiskId"] = request.diskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteUdmDisk",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteUdmDiskResponse>(await this.callApi(params, req, runtime), new $_model.DeleteUdmDiskResponse({}));
  }

  /**
   * Cancels a protected disk.
   * 
   * @param request - DeleteUdmDiskRequest
   * @returns DeleteUdmDiskResponse
   */
  async deleteUdmDisk(request: $_model.DeleteUdmDiskRequest): Promise<$_model.DeleteUdmDiskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteUdmDiskWithOptions(request, runtime);
  }

  /**
   * Stops protection for Elastic Compute Service (ECS) instance backup.
   * 
   * @param request - DeleteUdmEcsInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteUdmEcsInstanceResponse
   */
  async deleteUdmEcsInstanceWithOptions(request: $_model.DeleteUdmEcsInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteUdmEcsInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteUdmEcsInstance",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteUdmEcsInstanceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteUdmEcsInstanceResponse({}));
  }

  /**
   * Stops protection for Elastic Compute Service (ECS) instance backup.
   * 
   * @param request - DeleteUdmEcsInstanceRequest
   * @returns DeleteUdmEcsInstanceResponse
   */
  async deleteUdmEcsInstance(request: $_model.DeleteUdmEcsInstanceRequest): Promise<$_model.DeleteUdmEcsInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteUdmEcsInstanceWithOptions(request, runtime);
  }

  /**
   * Deletes a backup vault.
   * 
   * @remarks
   *   You cannot delete a backup vault within 2 hours after the backup vault is created or a backup vault that is in the INITIALIZING state.
   * *   After you delete a backup vault, all resources that are associated with the backup vault are deleted. The resources include the Cloud Backup client of the old version, backup plans, backup jobs, snapshots, and restore jobs.
   * 
   * @param request - DeleteVaultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteVaultResponse
   */
  async deleteVaultWithOptions(request: $_model.DeleteVaultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteVaultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.token)) {
      query["Token"] = request.token;
    }

    if (!$dara.isNull(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteVault",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteVaultResponse>(await this.callApi(params, req, runtime), new $_model.DeleteVaultResponse({}));
  }

  /**
   * Deletes a backup vault.
   * 
   * @remarks
   *   You cannot delete a backup vault within 2 hours after the backup vault is created or a backup vault that is in the INITIALIZING state.
   * *   After you delete a backup vault, all resources that are associated with the backup vault are deleted. The resources include the Cloud Backup client of the old version, backup plans, backup jobs, snapshots, and restore jobs.
   * 
   * @param request - DeleteVaultRequest
   * @returns DeleteVaultResponse
   */
  async deleteVault(request: $_model.DeleteVaultRequest): Promise<$_model.DeleteVaultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteVaultWithOptions(request, runtime);
  }

  /**
   * 关闭备份库复制
   * 
   * @param request - DeleteVaultReplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteVaultReplicationResponse
   */
  async deleteVaultReplicationWithOptions(request: $_model.DeleteVaultReplicationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteVaultReplicationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.replicationSourceRegionId)) {
      query["ReplicationSourceRegionId"] = request.replicationSourceRegionId;
    }

    if (!$dara.isNull(request.replicationSourceVaultId)) {
      query["ReplicationSourceVaultId"] = request.replicationSourceVaultId;
    }

    if (!$dara.isNull(request.replicationTargetVaultId)) {
      query["ReplicationTargetVaultId"] = request.replicationTargetVaultId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteVaultReplication",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteVaultReplicationResponse>(await this.callApi(params, req, runtime), new $_model.DeleteVaultReplicationResponse({}));
  }

  /**
   * 关闭备份库复制
   * 
   * @param request - DeleteVaultReplicationRequest
   * @returns DeleteVaultReplicationResponse
   */
  async deleteVaultReplication(request: $_model.DeleteVaultReplicationRequest): Promise<$_model.DeleteVaultReplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteVaultReplicationWithOptions(request, runtime);
  }

  /**
   * Queries the information about one or more HBR clients that meet the specified conditions.
   * 
   * @param tmpReq - DescribeBackupClientsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBackupClientsResponse
   */
  async describeBackupClientsWithOptions(tmpReq: $_model.DescribeBackupClientsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeBackupClientsResponse> {
    tmpReq.validate();
    let request = new $_model.DescribeBackupClientsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.clientIds)) {
      request.clientIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.clientIds, "ClientIds", "json");
    }

    if (!$dara.isNull(tmpReq.instanceIds)) {
      request.instanceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.instanceIds, "InstanceIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clientType)) {
      query["ClientType"] = request.clientType;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.crossAccountRoleName)) {
      query["CrossAccountRoleName"] = request.crossAccountRoleName;
    }

    if (!$dara.isNull(request.crossAccountType)) {
      query["CrossAccountType"] = request.crossAccountType;
    }

    if (!$dara.isNull(request.crossAccountUserId)) {
      query["CrossAccountUserId"] = request.crossAccountUserId;
    }

    if (!$dara.isNull(request.filters)) {
      query["Filters"] = request.filters;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientIdsShrink)) {
      body["ClientIds"] = request.clientIdsShrink;
    }

    if (!$dara.isNull(request.instanceIdsShrink)) {
      body["InstanceIds"] = request.instanceIdsShrink;
    }

    if (!$dara.isNull(request.tag)) {
      body["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeBackupClients",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeBackupClientsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeBackupClientsResponse({}));
  }

  /**
   * Queries the information about one or more HBR clients that meet the specified conditions.
   * 
   * @param request - DescribeBackupClientsRequest
   * @returns DescribeBackupClientsResponse
   */
  async describeBackupClients(request: $_model.DescribeBackupClientsRequest): Promise<$_model.DescribeBackupClientsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeBackupClientsWithOptions(request, runtime);
  }

  /**
   * Queries the information about one or more backup jobs that meet the specified conditions.
   * 
   * @param request - DescribeBackupJobs2Request
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBackupJobs2Response
   */
  async describeBackupJobs2WithOptions(request: $_model.DescribeBackupJobs2Request, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeBackupJobs2Response> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.edition)) {
      query["Edition"] = request.edition;
    }

    if (!$dara.isNull(request.filters)) {
      query["Filters"] = request.filters;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.sortDirection)) {
      query["SortDirection"] = request.sortDirection;
    }

    if (!$dara.isNull(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeBackupJobs2",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeBackupJobs2Response>(await this.callApi(params, req, runtime), new $_model.DescribeBackupJobs2Response({}));
  }

  /**
   * Queries the information about one or more backup jobs that meet the specified conditions.
   * 
   * @param request - DescribeBackupJobs2Request
   * @returns DescribeBackupJobs2Response
   */
  async describeBackupJobs2(request: $_model.DescribeBackupJobs2Request): Promise<$_model.DescribeBackupJobs2Response> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeBackupJobs2WithOptions(request, runtime);
  }

  /**
   * Queries the information about one or more backup plans that meet the specified conditions.
   * 
   * @param request - DescribeBackupPlansRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBackupPlansResponse
   */
  async describeBackupPlansWithOptions(request: $_model.DescribeBackupPlansRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeBackupPlansResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.edition)) {
      query["Edition"] = request.edition;
    }

    if (!$dara.isNull(request.filters)) {
      query["Filters"] = request.filters;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeBackupPlans",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeBackupPlansResponse>(await this.callApi(params, req, runtime), new $_model.DescribeBackupPlansResponse({}));
  }

  /**
   * Queries the information about one or more backup plans that meet the specified conditions.
   * 
   * @param request - DescribeBackupPlansRequest
   * @returns DescribeBackupPlansResponse
   */
  async describeBackupPlans(request: $_model.DescribeBackupPlansRequest): Promise<$_model.DescribeBackupPlansResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeBackupPlansWithOptions(request, runtime);
  }

  /**
   * Queries one or more Cloud Backup clients that meet the specified conditions.
   * 
   * @remarks
   * This operation is applicable only to SAP HANA backup. For Cloud Backup clients of other data sources, call the DescribeBackupClients operation.
   * 
   * @param request - DescribeClientsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeClientsResponse
   */
  async describeClientsWithOptions(request: $_model.DescribeClientsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeClientsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.clientType)) {
      query["ClientType"] = request.clientType;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    if (!$dara.isNull(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeClients",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeClientsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeClientsResponse({}));
  }

  /**
   * Queries one or more Cloud Backup clients that meet the specified conditions.
   * 
   * @remarks
   * This operation is applicable only to SAP HANA backup. For Cloud Backup clients of other data sources, call the DescribeBackupClients operation.
   * 
   * @param request - DescribeClientsRequest
   * @returns DescribeClientsResponse
   */
  async describeClients(request: $_model.DescribeClientsRequest): Promise<$_model.DescribeClientsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeClientsWithOptions(request, runtime);
  }

  /**
   * Queries one or more container clusters that meet the specified conditions.
   * 
   * @remarks
   * You can call this operation to query only Container Service for Kubernetes (ACK) clusters.
   * 
   * @param request - DescribeContainerClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeContainerClusterResponse
   */
  async describeContainerClusterWithOptions(request: $_model.DescribeContainerClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeContainerClusterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.identifier)) {
      query["Identifier"] = request.identifier;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeContainerCluster",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeContainerClusterResponse>(await this.callApi(params, req, runtime), new $_model.DescribeContainerClusterResponse({}));
  }

  /**
   * Queries one or more container clusters that meet the specified conditions.
   * 
   * @remarks
   * You can call this operation to query only Container Service for Kubernetes (ACK) clusters.
   * 
   * @param request - DescribeContainerClusterRequest
   * @returns DescribeContainerClusterResponse
   */
  async describeContainerCluster(request: $_model.DescribeContainerClusterRequest): Promise<$_model.DescribeContainerClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeContainerClusterWithOptions(request, runtime);
  }

  /**
   * Queries the information about the accounts used in cross-account backup.
   * 
   * @param request - DescribeCrossAccountsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCrossAccountsResponse
   */
  async describeCrossAccountsWithOptions(request: $_model.DescribeCrossAccountsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCrossAccountsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCrossAccounts",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCrossAccountsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCrossAccountsResponse({}));
  }

  /**
   * Queries the information about the accounts used in cross-account backup.
   * 
   * @param request - DescribeCrossAccountsRequest
   * @returns DescribeCrossAccountsResponse
   */
  async describeCrossAccounts(request: $_model.DescribeCrossAccountsRequest): Promise<$_model.DescribeCrossAccountsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCrossAccountsWithOptions(request, runtime);
  }

  /**
   * Queries one or more SAP HANA backup plans that meet the specified conditions.
   * 
   * @param request - DescribeHanaBackupPlansRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeHanaBackupPlansResponse
   */
  async describeHanaBackupPlansWithOptions(request: $_model.DescribeHanaBackupPlansRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeHanaBackupPlansResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.databaseName)) {
      query["DatabaseName"] = request.databaseName;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeHanaBackupPlans",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeHanaBackupPlansResponse>(await this.callApi(params, req, runtime), new $_model.DescribeHanaBackupPlansResponse({}));
  }

  /**
   * Queries one or more SAP HANA backup plans that meet the specified conditions.
   * 
   * @param request - DescribeHanaBackupPlansRequest
   * @returns DescribeHanaBackupPlansResponse
   */
  async describeHanaBackupPlans(request: $_model.DescribeHanaBackupPlansRequest): Promise<$_model.DescribeHanaBackupPlansResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeHanaBackupPlansWithOptions(request, runtime);
  }

  /**
   * Queries the backup parameters of an SAP HANA database.
   * 
   * @remarks
   * If you want to query the backup retention period of a database, you can call the DescribeHanaRetentionSetting operation.
   * 
   * @param request - DescribeHanaBackupSettingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeHanaBackupSettingResponse
   */
  async describeHanaBackupSettingWithOptions(request: $_model.DescribeHanaBackupSettingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeHanaBackupSettingResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.databaseName)) {
      query["DatabaseName"] = request.databaseName;
    }

    if (!$dara.isNull(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeHanaBackupSetting",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeHanaBackupSettingResponse>(await this.callApi(params, req, runtime), new $_model.DescribeHanaBackupSettingResponse({}));
  }

  /**
   * Queries the backup parameters of an SAP HANA database.
   * 
   * @remarks
   * If you want to query the backup retention period of a database, you can call the DescribeHanaRetentionSetting operation.
   * 
   * @param request - DescribeHanaBackupSettingRequest
   * @returns DescribeHanaBackupSettingResponse
   */
  async describeHanaBackupSetting(request: $_model.DescribeHanaBackupSettingRequest): Promise<$_model.DescribeHanaBackupSettingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeHanaBackupSettingWithOptions(request, runtime);
  }

  /**
   * Queries one or more SAP HANA backups that meet the specified conditions.
   * 
   * @remarks
   * After you call the DescribeHanaBackupsAsync operation to query the SAP HANA backups that meet the specified conditions, call the DescribeTask operation to query the final result.
   * 
   * @param request - DescribeHanaBackupsAsyncRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeHanaBackupsAsyncResponse
   */
  async describeHanaBackupsAsyncWithOptions(request: $_model.DescribeHanaBackupsAsyncRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeHanaBackupsAsyncResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.databaseName)) {
      query["DatabaseName"] = request.databaseName;
    }

    if (!$dara.isNull(request.includeDifferential)) {
      query["IncludeDifferential"] = request.includeDifferential;
    }

    if (!$dara.isNull(request.includeIncremental)) {
      query["IncludeIncremental"] = request.includeIncremental;
    }

    if (!$dara.isNull(request.includeLog)) {
      query["IncludeLog"] = request.includeLog;
    }

    if (!$dara.isNull(request.logPosition)) {
      query["LogPosition"] = request.logPosition;
    }

    if (!$dara.isNull(request.mode)) {
      query["Mode"] = request.mode;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.recoveryPointInTime)) {
      query["RecoveryPointInTime"] = request.recoveryPointInTime;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.source)) {
      query["Source"] = request.source;
    }

    if (!$dara.isNull(request.sourceClusterId)) {
      query["SourceClusterId"] = request.sourceClusterId;
    }

    if (!$dara.isNull(request.systemCopy)) {
      query["SystemCopy"] = request.systemCopy;
    }

    if (!$dara.isNull(request.useBackint)) {
      query["UseBackint"] = request.useBackint;
    }

    if (!$dara.isNull(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    if (!$dara.isNull(request.volumeId)) {
      query["VolumeId"] = request.volumeId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeHanaBackupsAsync",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeHanaBackupsAsyncResponse>(await this.callApi(params, req, runtime), new $_model.DescribeHanaBackupsAsyncResponse({}));
  }

  /**
   * Queries one or more SAP HANA backups that meet the specified conditions.
   * 
   * @remarks
   * After you call the DescribeHanaBackupsAsync operation to query the SAP HANA backups that meet the specified conditions, call the DescribeTask operation to query the final result.
   * 
   * @param request - DescribeHanaBackupsAsyncRequest
   * @returns DescribeHanaBackupsAsyncResponse
   */
  async describeHanaBackupsAsync(request: $_model.DescribeHanaBackupsAsyncRequest): Promise<$_model.DescribeHanaBackupsAsyncResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeHanaBackupsAsyncWithOptions(request, runtime);
  }

  /**
   * Queries the information about SAP HANA databases.
   * 
   * @remarks
   * After you register an SAP HANA instance and install a Cloud Backup client on the instance, you can call this operation to query the information about SAP HANA databases. You can call the StartHanaDatabaseAsync operation to start a database and call the StopHanaDatabaseAsync operation to stop a database.
   * 
   * @param request - DescribeHanaDatabasesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeHanaDatabasesResponse
   */
  async describeHanaDatabasesWithOptions(request: $_model.DescribeHanaDatabasesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeHanaDatabasesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeHanaDatabases",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeHanaDatabasesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeHanaDatabasesResponse({}));
  }

  /**
   * Queries the information about SAP HANA databases.
   * 
   * @remarks
   * After you register an SAP HANA instance and install a Cloud Backup client on the instance, you can call this operation to query the information about SAP HANA databases. You can call the StartHanaDatabaseAsync operation to start a database and call the StopHanaDatabaseAsync operation to stop a database.
   * 
   * @param request - DescribeHanaDatabasesRequest
   * @returns DescribeHanaDatabasesResponse
   */
  async describeHanaDatabases(request: $_model.DescribeHanaDatabasesRequest): Promise<$_model.DescribeHanaDatabasesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeHanaDatabasesWithOptions(request, runtime);
  }

  /**
   * Queries one or more SAP HANA instances that meet the specified conditions.
   * 
   * @param request - DescribeHanaInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeHanaInstancesResponse
   */
  async describeHanaInstancesWithOptions(request: $_model.DescribeHanaInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeHanaInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tag)) {
      body["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeHanaInstances",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeHanaInstancesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeHanaInstancesResponse({}));
  }

  /**
   * Queries one or more SAP HANA instances that meet the specified conditions.
   * 
   * @param request - DescribeHanaInstancesRequest
   * @returns DescribeHanaInstancesResponse
   */
  async describeHanaInstances(request: $_model.DescribeHanaInstancesRequest): Promise<$_model.DescribeHanaInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeHanaInstancesWithOptions(request, runtime);
  }

  /**
   * Queries one or more SAP HANA restore jobs that meet the specified conditions.
   * 
   * @param request - DescribeHanaRestoresRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeHanaRestoresResponse
   */
  async describeHanaRestoresWithOptions(request: $_model.DescribeHanaRestoresRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeHanaRestoresResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupId)) {
      query["BackupId"] = request.backupId;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.databaseName)) {
      query["DatabaseName"] = request.databaseName;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.restoreId)) {
      query["RestoreId"] = request.restoreId;
    }

    if (!$dara.isNull(request.restoreStatus)) {
      query["RestoreStatus"] = request.restoreStatus;
    }

    if (!$dara.isNull(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeHanaRestores",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeHanaRestoresResponse>(await this.callApi(params, req, runtime), new $_model.DescribeHanaRestoresResponse({}));
  }

  /**
   * Queries one or more SAP HANA restore jobs that meet the specified conditions.
   * 
   * @param request - DescribeHanaRestoresRequest
   * @returns DescribeHanaRestoresResponse
   */
  async describeHanaRestores(request: $_model.DescribeHanaRestoresRequest): Promise<$_model.DescribeHanaRestoresResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeHanaRestoresWithOptions(request, runtime);
  }

  /**
   * Queries the backup retention period of an SAP HANA database.
   * 
   * @remarks
   *   If you want to query the backup parameters of a database, you can call the DescribeHanaBackupSetting operation.
   * *   Cloud Backup deletes the expired catalogs and data that are related to Backint and file backup. The deleted catalogs and data cannot be restored. We recommend that you set the retention period based on your business requirements.
   * 
   * @param request - DescribeHanaRetentionSettingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeHanaRetentionSettingResponse
   */
  async describeHanaRetentionSettingWithOptions(request: $_model.DescribeHanaRetentionSettingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeHanaRetentionSettingResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.databaseName)) {
      query["DatabaseName"] = request.databaseName;
    }

    if (!$dara.isNull(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeHanaRetentionSetting",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeHanaRetentionSettingResponse>(await this.callApi(params, req, runtime), new $_model.DescribeHanaRetentionSettingResponse({}));
  }

  /**
   * Queries the backup retention period of an SAP HANA database.
   * 
   * @remarks
   *   If you want to query the backup parameters of a database, you can call the DescribeHanaBackupSetting operation.
   * *   Cloud Backup deletes the expired catalogs and data that are related to Backint and file backup. The deleted catalogs and data cannot be restored. We recommend that you set the retention period based on your business requirements.
   * 
   * @param request - DescribeHanaRetentionSettingRequest
   * @returns DescribeHanaRetentionSettingResponse
   */
  async describeHanaRetentionSetting(request: $_model.DescribeHanaRetentionSettingRequest): Promise<$_model.DescribeHanaRetentionSettingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeHanaRetentionSettingWithOptions(request, runtime);
  }

  /**
   * Queries the details about Tablestore instances that are backed up.
   * 
   * @param request - DescribeOtsTableSnapshotsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeOtsTableSnapshotsResponse
   */
  async describeOtsTableSnapshotsWithOptions(request: $_model.DescribeOtsTableSnapshotsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeOtsTableSnapshotsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.crossAccountRoleName)) {
      query["CrossAccountRoleName"] = request.crossAccountRoleName;
    }

    if (!$dara.isNull(request.crossAccountType)) {
      query["CrossAccountType"] = request.crossAccountType;
    }

    if (!$dara.isNull(request.crossAccountUserId)) {
      query["CrossAccountUserId"] = request.crossAccountUserId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.limit)) {
      body["Limit"] = request.limit;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.otsInstances)) {
      bodyFlat["OtsInstances"] = request.otsInstances;
    }

    if (!$dara.isNull(request.snapshotIds)) {
      bodyFlat["SnapshotIds"] = request.snapshotIds;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
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
      action: "DescribeOtsTableSnapshots",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeOtsTableSnapshotsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeOtsTableSnapshotsResponse({}));
  }

  /**
   * Queries the details about Tablestore instances that are backed up.
   * 
   * @param request - DescribeOtsTableSnapshotsRequest
   * @returns DescribeOtsTableSnapshotsResponse
   */
  async describeOtsTableSnapshots(request: $_model.DescribeOtsTableSnapshotsRequest): Promise<$_model.DescribeOtsTableSnapshotsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeOtsTableSnapshotsWithOptions(request, runtime);
  }

  /**
   * Queries one or more backup policies.
   * 
   * @param request - DescribePoliciesV2Request
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePoliciesV2Response
   */
  async describePoliciesV2WithOptions(request: $_model.DescribePoliciesV2Request, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePoliciesV2Response> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.policyId)) {
      body["PolicyId"] = request.policyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePoliciesV2",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePoliciesV2Response>(await this.callApi(params, req, runtime), new $_model.DescribePoliciesV2Response({}));
  }

  /**
   * Queries one or more backup policies.
   * 
   * @param request - DescribePoliciesV2Request
   * @returns DescribePoliciesV2Response
   */
  async describePoliciesV2(request: $_model.DescribePoliciesV2Request): Promise<$_model.DescribePoliciesV2Response> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePoliciesV2WithOptions(request, runtime);
  }

  /**
   * Query one or more data sources bound to a policy, or query one or more policies bound to a data source.
   * 
   * @param tmpReq - DescribePolicyBindingsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePolicyBindingsResponse
   */
  async describePolicyBindingsWithOptions(tmpReq: $_model.DescribePolicyBindingsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePolicyBindingsResponse> {
    tmpReq.validate();
    let request = new $_model.DescribePolicyBindingsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.dataSourceIds)) {
      request.dataSourceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.dataSourceIds, "DataSourceIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.filters)) {
      query["Filters"] = request.filters;
    }

    if (!$dara.isNull(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dataSourceIdsShrink)) {
      body["DataSourceIds"] = request.dataSourceIdsShrink;
    }

    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.policyId)) {
      body["PolicyId"] = request.policyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePolicyBindings",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePolicyBindingsResponse>(await this.callApi(params, req, runtime), new $_model.DescribePolicyBindingsResponse({}));
  }

  /**
   * Query one or more data sources bound to a policy, or query one or more policies bound to a data source.
   * 
   * @param request - DescribePolicyBindingsRequest
   * @returns DescribePolicyBindingsResponse
   */
  async describePolicyBindings(request: $_model.DescribePolicyBindingsRequest): Promise<$_model.DescribePolicyBindingsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePolicyBindingsWithOptions(request, runtime);
  }

  /**
   * Queries the tables of a restorable Tablestore instance.
   * 
   * @param request - DescribeRecoverableOtsInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRecoverableOtsInstancesResponse
   */
  async describeRecoverableOtsInstancesWithOptions(request: $_model.DescribeRecoverableOtsInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRecoverableOtsInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.crossAccountRoleName)) {
      query["CrossAccountRoleName"] = request.crossAccountRoleName;
    }

    if (!$dara.isNull(request.crossAccountType)) {
      query["CrossAccountType"] = request.crossAccountType;
    }

    if (!$dara.isNull(request.crossAccountUserId)) {
      query["CrossAccountUserId"] = request.crossAccountUserId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRecoverableOtsInstances",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRecoverableOtsInstancesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRecoverableOtsInstancesResponse({}));
  }

  /**
   * Queries the tables of a restorable Tablestore instance.
   * 
   * @param request - DescribeRecoverableOtsInstancesRequest
   * @returns DescribeRecoverableOtsInstancesResponse
   */
  async describeRecoverableOtsInstances(request: $_model.DescribeRecoverableOtsInstancesRequest): Promise<$_model.DescribeRecoverableOtsInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRecoverableOtsInstancesWithOptions(request, runtime);
  }

  /**
   * Queries available regions.
   * 
   * @param request - DescribeRegionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRegionsResponse
   */
  async describeRegionsWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRegionsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRegions",
      version: "2017-09-08",
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
   * Queries available regions.
   * @returns DescribeRegionsResponse
   */
  async describeRegions(): Promise<$_model.DescribeRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(runtime);
  }

  /**
   * Queries one or more restore jobs that meet the specified conditions.
   * 
   * @param request - DescribeRestoreJobs2Request
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRestoreJobs2Response
   */
  async describeRestoreJobs2WithOptions(request: $_model.DescribeRestoreJobs2Request, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRestoreJobs2Response> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.edition)) {
      query["Edition"] = request.edition;
    }

    if (!$dara.isNull(request.filters)) {
      query["Filters"] = request.filters;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.restoreType)) {
      query["RestoreType"] = request.restoreType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRestoreJobs2",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRestoreJobs2Response>(await this.callApi(params, req, runtime), new $_model.DescribeRestoreJobs2Response({}));
  }

  /**
   * Queries one or more restore jobs that meet the specified conditions.
   * 
   * @param request - DescribeRestoreJobs2Request
   * @returns DescribeRestoreJobs2Response
   */
  async describeRestoreJobs2(request: $_model.DescribeRestoreJobs2Request): Promise<$_model.DescribeRestoreJobs2Response> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRestoreJobs2WithOptions(request, runtime);
  }

  /**
   * Queries an asynchronous job.
   * 
   * @param request - DescribeTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTaskResponse
   */
  async describeTaskWithOptions(request: $_model.DescribeTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.token)) {
      query["Token"] = request.token;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTask",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeTaskResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTaskResponse({}));
  }

  /**
   * Queries an asynchronous job.
   * 
   * @param request - DescribeTaskRequest
   * @returns DescribeTaskResponse
   */
  async describeTask(request: $_model.DescribeTaskRequest): Promise<$_model.DescribeTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTaskWithOptions(request, runtime);
  }

  /**
   * Queries the backup snapshots of an Elastic Compute Service (ECS) instance.
   * 
   * @param tmpReq - DescribeUdmSnapshotsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUdmSnapshotsResponse
   */
  async describeUdmSnapshotsWithOptions(tmpReq: $_model.DescribeUdmSnapshotsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeUdmSnapshotsResponse> {
    tmpReq.validate();
    let request = new $_model.DescribeUdmSnapshotsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.snapshotIds)) {
      request.snapshotIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.snapshotIds, "SnapshotIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.diskId)) {
      query["DiskId"] = request.diskId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.udmRegionId)) {
      query["UdmRegionId"] = request.udmRegionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.snapshotIdsShrink)) {
      body["SnapshotIds"] = request.snapshotIdsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeUdmSnapshots",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeUdmSnapshotsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeUdmSnapshotsResponse({}));
  }

  /**
   * Queries the backup snapshots of an Elastic Compute Service (ECS) instance.
   * 
   * @param request - DescribeUdmSnapshotsRequest
   * @returns DescribeUdmSnapshotsResponse
   */
  async describeUdmSnapshots(request: $_model.DescribeUdmSnapshotsRequest): Promise<$_model.DescribeUdmSnapshotsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeUdmSnapshotsWithOptions(request, runtime);
  }

  /**
   * Queries the regions that support cross-region replication.
   * 
   * @param request - DescribeVaultReplicationRegionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVaultReplicationRegionsResponse
   */
  async describeVaultReplicationRegionsWithOptions(request: $_model.DescribeVaultReplicationRegionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVaultReplicationRegionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.token)) {
      query["Token"] = request.token;
    }

    if (!$dara.isNull(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVaultReplicationRegions",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVaultReplicationRegionsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVaultReplicationRegionsResponse({}));
  }

  /**
   * Queries the regions that support cross-region replication.
   * 
   * @param request - DescribeVaultReplicationRegionsRequest
   * @returns DescribeVaultReplicationRegionsResponse
   */
  async describeVaultReplicationRegions(request: $_model.DescribeVaultReplicationRegionsRequest): Promise<$_model.DescribeVaultReplicationRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVaultReplicationRegionsWithOptions(request, runtime);
  }

  /**
   * Queries the information about one or more backup vaults that meet the specified conditions.
   * 
   * @param request - DescribeVaultsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVaultsResponse
   */
  async describeVaultsWithOptions(request: $_model.DescribeVaultsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVaultsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.replication)) {
      query["Replication"] = request.replication;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    if (!$dara.isNull(request.vaultName)) {
      query["VaultName"] = request.vaultName;
    }

    if (!$dara.isNull(request.vaultOwnerId)) {
      query["VaultOwnerId"] = request.vaultOwnerId;
    }

    if (!$dara.isNull(request.vaultRegionId)) {
      query["VaultRegionId"] = request.vaultRegionId;
    }

    if (!$dara.isNull(request.vaultType)) {
      query["VaultType"] = request.vaultType;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tag)) {
      body["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVaults",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVaultsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVaultsResponse({}));
  }

  /**
   * Queries the information about one or more backup vaults that meet the specified conditions.
   * 
   * @param request - DescribeVaultsRequest
   * @returns DescribeVaultsResponse
   */
  async describeVaults(request: $_model.DescribeVaultsRequest): Promise<$_model.DescribeVaultsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVaultsWithOptions(request, runtime);
  }

  /**
   * Deletes an internal mount target created by Cloud Backup.
   * 
   * @remarks
   *   If the request is successful, the mount target is deleted.
   * *   After you create a backup plan for an Apsara File Storage NAS file system, HBR automatically creates a mount target for the file system. You can call this operation to delete the mount target. In the **Status** column of the mount target of the NAS file system, the following information is displayed: **This mount target is created by an Alibaba Cloud internal service and cannot be operated. Service name: HBR**.
   * 
   * @param request - DetachNasFileSystemRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetachNasFileSystemResponse
   */
  async detachNasFileSystemWithOptions(request: $_model.DetachNasFileSystemRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetachNasFileSystemResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.createTime)) {
      query["CreateTime"] = request.createTime;
    }

    if (!$dara.isNull(request.crossAccountRoleName)) {
      query["CrossAccountRoleName"] = request.crossAccountRoleName;
    }

    if (!$dara.isNull(request.crossAccountType)) {
      query["CrossAccountType"] = request.crossAccountType;
    }

    if (!$dara.isNull(request.crossAccountUserId)) {
      query["CrossAccountUserId"] = request.crossAccountUserId;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetachNasFileSystem",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DetachNasFileSystemResponse>(await this.callApi(params, req, runtime), new $_model.DetachNasFileSystemResponse({}));
  }

  /**
   * Deletes an internal mount target created by Cloud Backup.
   * 
   * @remarks
   *   If the request is successful, the mount target is deleted.
   * *   After you create a backup plan for an Apsara File Storage NAS file system, HBR automatically creates a mount target for the file system. You can call this operation to delete the mount target. In the **Status** column of the mount target of the NAS file system, the following information is displayed: **This mount target is created by an Alibaba Cloud internal service and cannot be operated. Service name: HBR**.
   * 
   * @param request - DetachNasFileSystemRequest
   * @returns DetachNasFileSystemResponse
   */
  async detachNasFileSystem(request: $_model.DetachNasFileSystemRequest): Promise<$_model.DetachNasFileSystemResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detachNasFileSystemWithOptions(request, runtime);
  }

  /**
   * Disables a backup plan.
   * 
   * @remarks
   * After you call this operation, the backup plan is suspended. In the DescribeBackupPlans operation, the Disabled parameter is set to true.
   * 
   * @param request - DisableBackupPlanRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableBackupPlanResponse
   */
  async disableBackupPlanWithOptions(request: $_model.DisableBackupPlanRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableBackupPlanResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.edition)) {
      query["Edition"] = request.edition;
    }

    if (!$dara.isNull(request.planId)) {
      query["PlanId"] = request.planId;
    }

    if (!$dara.isNull(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    if (!$dara.isNull(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableBackupPlan",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableBackupPlanResponse>(await this.callApi(params, req, runtime), new $_model.DisableBackupPlanResponse({}));
  }

  /**
   * Disables a backup plan.
   * 
   * @remarks
   * After you call this operation, the backup plan is suspended. In the DescribeBackupPlans operation, the Disabled parameter is set to true.
   * 
   * @param request - DisableBackupPlanRequest
   * @returns DisableBackupPlanResponse
   */
  async disableBackupPlan(request: $_model.DisableBackupPlanRequest): Promise<$_model.DisableBackupPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableBackupPlanWithOptions(request, runtime);
  }

  /**
   * Disables an SAP HANA backup plan.
   * 
   * @remarks
   * To enable the backup plan again, call the EnableHanaBackupPlan operation.
   * 
   * @param request - DisableHanaBackupPlanRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableHanaBackupPlanResponse
   */
  async disableHanaBackupPlanWithOptions(request: $_model.DisableHanaBackupPlanRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableHanaBackupPlanResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.planId)) {
      query["PlanId"] = request.planId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableHanaBackupPlan",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableHanaBackupPlanResponse>(await this.callApi(params, req, runtime), new $_model.DisableHanaBackupPlanResponse({}));
  }

  /**
   * Disables an SAP HANA backup plan.
   * 
   * @remarks
   * To enable the backup plan again, call the EnableHanaBackupPlan operation.
   * 
   * @param request - DisableHanaBackupPlanRequest
   * @returns DisableHanaBackupPlanResponse
   */
  async disableHanaBackupPlan(request: $_model.DisableHanaBackupPlanRequest): Promise<$_model.DisableHanaBackupPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableHanaBackupPlanWithOptions(request, runtime);
  }

  /**
   * Enables a backup plan.
   * 
   * @remarks
   * After you call this operation, the backup plan is restarted (Disabled is set to false in the DescribeBackupPlans operation). Cloud Backup continues to perform backups based on the policy specified in the backup plan.
   * 
   * @param request - EnableBackupPlanRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableBackupPlanResponse
   */
  async enableBackupPlanWithOptions(request: $_model.EnableBackupPlanRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableBackupPlanResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.edition)) {
      query["Edition"] = request.edition;
    }

    if (!$dara.isNull(request.planId)) {
      query["PlanId"] = request.planId;
    }

    if (!$dara.isNull(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    if (!$dara.isNull(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableBackupPlan",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableBackupPlanResponse>(await this.callApi(params, req, runtime), new $_model.EnableBackupPlanResponse({}));
  }

  /**
   * Enables a backup plan.
   * 
   * @remarks
   * After you call this operation, the backup plan is restarted (Disabled is set to false in the DescribeBackupPlans operation). Cloud Backup continues to perform backups based on the policy specified in the backup plan.
   * 
   * @param request - EnableBackupPlanRequest
   * @returns EnableBackupPlanResponse
   */
  async enableBackupPlan(request: $_model.EnableBackupPlanRequest): Promise<$_model.EnableBackupPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableBackupPlanWithOptions(request, runtime);
  }

  /**
   * Enables an SAP HANA backup plan.
   * 
   * @remarks
   * To disable the backup plan again, call the DisableHanaBackupPlan operation.
   * 
   * @param request - EnableHanaBackupPlanRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableHanaBackupPlanResponse
   */
  async enableHanaBackupPlanWithOptions(request: $_model.EnableHanaBackupPlanRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableHanaBackupPlanResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.planId)) {
      query["PlanId"] = request.planId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableHanaBackupPlan",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableHanaBackupPlanResponse>(await this.callApi(params, req, runtime), new $_model.EnableHanaBackupPlanResponse({}));
  }

  /**
   * Enables an SAP HANA backup plan.
   * 
   * @remarks
   * To disable the backup plan again, call the DisableHanaBackupPlan operation.
   * 
   * @param request - EnableHanaBackupPlanRequest
   * @returns EnableHanaBackupPlanResponse
   */
  async enableHanaBackupPlan(request: $_model.EnableHanaBackupPlanRequest): Promise<$_model.EnableHanaBackupPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableHanaBackupPlanWithOptions(request, runtime);
  }

  /**
   * Executes a backup plan.
   * 
   * @param request - ExecuteBackupPlanRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecuteBackupPlanResponse
   */
  async executeBackupPlanWithOptions(request: $_model.ExecuteBackupPlanRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ExecuteBackupPlanResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.edition)) {
      query["Edition"] = request.edition;
    }

    if (!$dara.isNull(request.planId)) {
      query["PlanId"] = request.planId;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!$dara.isNull(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    if (!$dara.isNull(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExecuteBackupPlan",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExecuteBackupPlanResponse>(await this.callApi(params, req, runtime), new $_model.ExecuteBackupPlanResponse({}));
  }

  /**
   * Executes a backup plan.
   * 
   * @param request - ExecuteBackupPlanRequest
   * @returns ExecuteBackupPlanResponse
   */
  async executeBackupPlan(request: $_model.ExecuteBackupPlanRequest): Promise<$_model.ExecuteBackupPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.executeBackupPlanWithOptions(request, runtime);
  }

  /**
   * Execute a policy for one or all bound data sources.
   * 
   * @param request - ExecutePolicyV2Request
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecutePolicyV2Response
   */
  async executePolicyV2WithOptions(request: $_model.ExecutePolicyV2Request, runtime: $dara.RuntimeOptions): Promise<$_model.ExecutePolicyV2Response> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!$dara.isNull(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dataSourceId)) {
      body["DataSourceId"] = request.dataSourceId;
    }

    if (!$dara.isNull(request.policyId)) {
      body["PolicyId"] = request.policyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExecutePolicyV2",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExecutePolicyV2Response>(await this.callApi(params, req, runtime), new $_model.ExecutePolicyV2Response({}));
  }

  /**
   * Execute a policy for one or all bound data sources.
   * 
   * @param request - ExecutePolicyV2Request
   * @returns ExecutePolicyV2Response
   */
  async executePolicyV2(request: $_model.ExecutePolicyV2Request): Promise<$_model.ExecutePolicyV2Response> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.executePolicyV2WithOptions(request, runtime);
  }

  /**
   * Generates a Resource Access Management (RAM) policy.
   * 
   * @param request - GenerateRamPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateRamPolicyResponse
   */
  async generateRamPolicyWithOptions(request: $_model.GenerateRamPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GenerateRamPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.actionType)) {
      query["ActionType"] = request.actionType;
    }

    if (!$dara.isNull(request.requireBasePolicy)) {
      query["RequireBasePolicy"] = request.requireBasePolicy;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GenerateRamPolicy",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GenerateRamPolicyResponse>(await this.callApi(params, req, runtime), new $_model.GenerateRamPolicyResponse({}));
  }

  /**
   * Generates a Resource Access Management (RAM) policy.
   * 
   * @param request - GenerateRamPolicyRequest
   * @returns GenerateRamPolicyResponse
   */
  async generateRamPolicy(request: $_model.GenerateRamPolicyRequest): Promise<$_model.GenerateRamPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.generateRamPolicyWithOptions(request, runtime);
  }

  /**
   * Obtains download links of files such as job reports.
   * 
   * @param request - GetTempFileDownloadLinkRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTempFileDownloadLinkResponse
   */
  async getTempFileDownloadLinkWithOptions(request: $_model.GetTempFileDownloadLinkRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTempFileDownloadLinkResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.tempFileKey)) {
      query["TempFileKey"] = request.tempFileKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTempFileDownloadLink",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTempFileDownloadLinkResponse>(await this.callApi(params, req, runtime), new $_model.GetTempFileDownloadLinkResponse({}));
  }

  /**
   * Obtains download links of files such as job reports.
   * 
   * @param request - GetTempFileDownloadLinkRequest
   * @returns GetTempFileDownloadLinkResponse
   */
  async getTempFileDownloadLink(request: $_model.GetTempFileDownloadLinkRequest): Promise<$_model.GetTempFileDownloadLinkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTempFileDownloadLinkWithOptions(request, runtime);
  }

  /**
   * Installs an HBR client on one or more Elastic Compute Service (ECS) instances.
   * 
   * @remarks
   *   This operation creates an asynchronous job at the backend and calls Cloud Assistant to install an HBR client on an ECS instance.
   * *   You can call the [DescribeTask](https://help.aliyun.com/document_detail/431265.html) operation to query the execution result of an asynchronous job.
   * *   The timeout period of an asynchronous job is 15 minutes. We recommend that you call the DescribeTask operation to run the first query 60 seconds after you call the InstallBackupClients operation to install HBR clients. Then, run the next queries at an interval of 30 seconds.
   * 
   * @param tmpReq - InstallBackupClientsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InstallBackupClientsResponse
   */
  async installBackupClientsWithOptions(tmpReq: $_model.InstallBackupClientsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.InstallBackupClientsResponse> {
    tmpReq.validate();
    let request = new $_model.InstallBackupClientsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.instanceIds)) {
      request.instanceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.instanceIds, "InstanceIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.crossAccountRoleName)) {
      query["CrossAccountRoleName"] = request.crossAccountRoleName;
    }

    if (!$dara.isNull(request.crossAccountType)) {
      query["CrossAccountType"] = request.crossAccountType;
    }

    if (!$dara.isNull(request.crossAccountUserId)) {
      query["CrossAccountUserId"] = request.crossAccountUserId;
    }

    if (!$dara.isNull(request.instanceIdsShrink)) {
      query["InstanceIds"] = request.instanceIdsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "InstallBackupClients",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.InstallBackupClientsResponse>(await this.callApi(params, req, runtime), new $_model.InstallBackupClientsResponse({}));
  }

  /**
   * Installs an HBR client on one or more Elastic Compute Service (ECS) instances.
   * 
   * @remarks
   *   This operation creates an asynchronous job at the backend and calls Cloud Assistant to install an HBR client on an ECS instance.
   * *   You can call the [DescribeTask](https://help.aliyun.com/document_detail/431265.html) operation to query the execution result of an asynchronous job.
   * *   The timeout period of an asynchronous job is 15 minutes. We recommend that you call the DescribeTask operation to run the first query 60 seconds after you call the InstallBackupClients operation to install HBR clients. Then, run the next queries at an interval of 30 seconds.
   * 
   * @param request - InstallBackupClientsRequest
   * @returns InstallBackupClientsResponse
   */
  async installBackupClients(request: $_model.InstallBackupClientsRequest): Promise<$_model.InstallBackupClientsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.installBackupClientsWithOptions(request, runtime);
  }

  /**
   * 查询已保护的资源列表
   * 
   * @param request - ListProtectedResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListProtectedResourcesResponse
   */
  async listProtectedResourcesWithOptions(request: $_model.ListProtectedResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListProtectedResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.createdByProduct)) {
      query["CreatedByProduct"] = request.createdByProduct;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.skip)) {
      query["Skip"] = request.skip;
    }

    if (!$dara.isNull(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListProtectedResources",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListProtectedResourcesResponse>(await this.callApi(params, req, runtime), new $_model.ListProtectedResourcesResponse({}));
  }

  /**
   * 查询已保护的资源列表
   * 
   * @param request - ListProtectedResourcesRequest
   * @returns ListProtectedResourcesResponse
   */
  async listProtectedResources(request: $_model.ListProtectedResourcesRequest): Promise<$_model.ListProtectedResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listProtectedResourcesWithOptions(request, runtime);
  }

  /**
   * Activates Cloud Backup.
   * 
   * @param request - OpenHbrServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OpenHbrServiceResponse
   */
  async openHbrServiceWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.OpenHbrServiceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "OpenHbrService",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OpenHbrServiceResponse>(await this.callApi(params, req, runtime), new $_model.OpenHbrServiceResponse({}));
  }

  /**
   * Activates Cloud Backup.
   * @returns OpenHbrServiceResponse
   */
  async openHbrService(): Promise<$_model.OpenHbrServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.openHbrServiceWithOptions(runtime);
  }

  /**
   * Queries the information about one or more backup snapshots that meet the specified conditions.
   * 
   * @param tmpReq - SearchHistoricalSnapshotsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchHistoricalSnapshotsResponse
   */
  async searchHistoricalSnapshotsWithOptions(tmpReq: $_model.SearchHistoricalSnapshotsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SearchHistoricalSnapshotsResponse> {
    tmpReq.validate();
    let request = new $_model.SearchHistoricalSnapshotsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.query)) {
      request.queryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.query, "Query", "json");
    }

    let query = { };
    if (!$dara.isNull(request.edition)) {
      query["Edition"] = request.edition;
    }

    if (!$dara.isNull(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.queryShrink)) {
      query["Query"] = request.queryShrink;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SearchHistoricalSnapshots",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SearchHistoricalSnapshotsResponse>(await this.callApi(params, req, runtime), new $_model.SearchHistoricalSnapshotsResponse({}));
  }

  /**
   * Queries the information about one or more backup snapshots that meet the specified conditions.
   * 
   * @param request - SearchHistoricalSnapshotsRequest
   * @returns SearchHistoricalSnapshotsResponse
   */
  async searchHistoricalSnapshots(request: $_model.SearchHistoricalSnapshotsRequest): Promise<$_model.SearchHistoricalSnapshotsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.searchHistoricalSnapshotsWithOptions(request, runtime);
  }

  /**
   * Starts an SAP HANA database.
   * 
   * @remarks
   * To stop the database again, call the StopHanaDatabaseAsync operation.
   * 
   * @param request - StartHanaDatabaseAsyncRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartHanaDatabaseAsyncResponse
   */
  async startHanaDatabaseAsyncWithOptions(request: $_model.StartHanaDatabaseAsyncRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartHanaDatabaseAsyncResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.databaseName)) {
      query["DatabaseName"] = request.databaseName;
    }

    if (!$dara.isNull(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartHanaDatabaseAsync",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartHanaDatabaseAsyncResponse>(await this.callApi(params, req, runtime), new $_model.StartHanaDatabaseAsyncResponse({}));
  }

  /**
   * Starts an SAP HANA database.
   * 
   * @remarks
   * To stop the database again, call the StopHanaDatabaseAsync operation.
   * 
   * @param request - StartHanaDatabaseAsyncRequest
   * @returns StartHanaDatabaseAsyncResponse
   */
  async startHanaDatabaseAsync(request: $_model.StartHanaDatabaseAsyncRequest): Promise<$_model.StartHanaDatabaseAsyncResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startHanaDatabaseAsyncWithOptions(request, runtime);
  }

  /**
   * Stops an SAP HANA database.
   * 
   * @remarks
   * To start the database again, call the StartHanaDatabaseAsync operation.
   * 
   * @param request - StopHanaDatabaseAsyncRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopHanaDatabaseAsyncResponse
   */
  async stopHanaDatabaseAsyncWithOptions(request: $_model.StopHanaDatabaseAsyncRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopHanaDatabaseAsyncResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.databaseName)) {
      query["DatabaseName"] = request.databaseName;
    }

    if (!$dara.isNull(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopHanaDatabaseAsync",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopHanaDatabaseAsyncResponse>(await this.callApi(params, req, runtime), new $_model.StopHanaDatabaseAsyncResponse({}));
  }

  /**
   * Stops an SAP HANA database.
   * 
   * @remarks
   * To start the database again, call the StartHanaDatabaseAsync operation.
   * 
   * @param request - StopHanaDatabaseAsyncRequest
   * @returns StopHanaDatabaseAsyncResponse
   */
  async stopHanaDatabaseAsync(request: $_model.StopHanaDatabaseAsyncRequest): Promise<$_model.StopHanaDatabaseAsyncResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopHanaDatabaseAsyncWithOptions(request, runtime);
  }

  /**
   * Uninstalls a Cloud Backup client from one or more Elastic Compute Service (ECS) instance.
   * 
   * @remarks
   *   This operation creates an asynchronous job at the backend and calls Cloud Assistant to uninstall a backup client from an ECS instance.
   * *   You can call the DescribeTask operation to query the execution result of an asynchronous job.
   * *   The timeout period of an asynchronous job is 15 minutes. We recommend that you call the DescribeTask operation to run the first query 30 seconds after you call the UninstallBackupClients operation to uninstall backup clients. Then, run the next queries at an interval of 30 seconds.
   * 
   * @param tmpReq - UninstallBackupClientsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UninstallBackupClientsResponse
   */
  async uninstallBackupClientsWithOptions(tmpReq: $_model.UninstallBackupClientsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UninstallBackupClientsResponse> {
    tmpReq.validate();
    let request = new $_model.UninstallBackupClientsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.clientIds)) {
      request.clientIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.clientIds, "ClientIds", "json");
    }

    if (!$dara.isNull(tmpReq.instanceIds)) {
      request.instanceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.instanceIds, "InstanceIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clientIdsShrink)) {
      query["ClientIds"] = request.clientIdsShrink;
    }

    if (!$dara.isNull(request.crossAccountRoleName)) {
      query["CrossAccountRoleName"] = request.crossAccountRoleName;
    }

    if (!$dara.isNull(request.crossAccountType)) {
      query["CrossAccountType"] = request.crossAccountType;
    }

    if (!$dara.isNull(request.crossAccountUserId)) {
      query["CrossAccountUserId"] = request.crossAccountUserId;
    }

    if (!$dara.isNull(request.instanceIdsShrink)) {
      query["InstanceIds"] = request.instanceIdsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UninstallBackupClients",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UninstallBackupClientsResponse>(await this.callApi(params, req, runtime), new $_model.UninstallBackupClientsResponse({}));
  }

  /**
   * Uninstalls a Cloud Backup client from one or more Elastic Compute Service (ECS) instance.
   * 
   * @remarks
   *   This operation creates an asynchronous job at the backend and calls Cloud Assistant to uninstall a backup client from an ECS instance.
   * *   You can call the DescribeTask operation to query the execution result of an asynchronous job.
   * *   The timeout period of an asynchronous job is 15 minutes. We recommend that you call the DescribeTask operation to run the first query 30 seconds after you call the UninstallBackupClients operation to uninstall backup clients. Then, run the next queries at an interval of 30 seconds.
   * 
   * @param request - UninstallBackupClientsRequest
   * @returns UninstallBackupClientsResponse
   */
  async uninstallBackupClients(request: $_model.UninstallBackupClientsRequest): Promise<$_model.UninstallBackupClientsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.uninstallBackupClientsWithOptions(request, runtime);
  }

  /**
   * Uninstalls an HBR client.
   * 
   * @remarks
   * If you call this operation, the specified HBR client is uninstalled. To reinstall the HBR client, call the CreateClients operation.
   * 
   * @param request - UninstallClientRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UninstallClientResponse
   */
  async uninstallClientWithOptions(request: $_model.UninstallClientRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UninstallClientResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UninstallClient",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UninstallClientResponse>(await this.callApi(params, req, runtime), new $_model.UninstallClientResponse({}));
  }

  /**
   * Uninstalls an HBR client.
   * 
   * @remarks
   * If you call this operation, the specified HBR client is uninstalled. To reinstall the HBR client, call the CreateClients operation.
   * 
   * @param request - UninstallClientRequest
   * @returns UninstallClientResponse
   */
  async uninstallClient(request: $_model.UninstallClientRequest): Promise<$_model.UninstallClientResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.uninstallClientWithOptions(request, runtime);
  }

  /**
   * Updates a backup plan.
   * 
   * @param tmpReq - UpdateBackupPlanRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateBackupPlanResponse
   */
  async updateBackupPlanWithOptions(tmpReq: $_model.UpdateBackupPlanRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateBackupPlanResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateBackupPlanShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.detail)) {
      request.detailShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.detail, "Detail", "json");
    }

    if (!$dara.isNull(tmpReq.otsDetail)) {
      request.otsDetailShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.otsDetail, "OtsDetail", "json");
    }

    let query = { };
    if (!$dara.isNull(request.changeListPath)) {
      query["ChangeListPath"] = request.changeListPath;
    }

    if (!$dara.isNull(request.detailShrink)) {
      query["Detail"] = request.detailShrink;
    }

    if (!$dara.isNull(request.edition)) {
      query["Edition"] = request.edition;
    }

    if (!$dara.isNull(request.keepLatestSnapshots)) {
      query["KeepLatestSnapshots"] = request.keepLatestSnapshots;
    }

    if (!$dara.isNull(request.path)) {
      query["Path"] = request.path;
    }

    if (!$dara.isNull(request.planId)) {
      query["PlanId"] = request.planId;
    }

    if (!$dara.isNull(request.planName)) {
      query["PlanName"] = request.planName;
    }

    if (!$dara.isNull(request.prefix)) {
      query["Prefix"] = request.prefix;
    }

    if (!$dara.isNull(request.retention)) {
      query["Retention"] = request.retention;
    }

    if (!$dara.isNull(request.schedule)) {
      query["Schedule"] = request.schedule;
    }

    if (!$dara.isNull(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    if (!$dara.isNull(request.speedLimit)) {
      query["SpeedLimit"] = request.speedLimit;
    }

    if (!$dara.isNull(request.updatePaths)) {
      query["UpdatePaths"] = request.updatePaths;
    }

    if (!$dara.isNull(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.exclude)) {
      body["Exclude"] = request.exclude;
    }

    if (!$dara.isNull(request.include)) {
      body["Include"] = request.include;
    }

    if (!$dara.isNull(request.options)) {
      body["Options"] = request.options;
    }

    if (!$dara.isNull(request.otsDetailShrink)) {
      body["OtsDetail"] = request.otsDetailShrink;
    }

    if (!$dara.isNull(request.rule)) {
      body["Rule"] = request.rule;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateBackupPlan",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateBackupPlanResponse>(await this.callApi(params, req, runtime), new $_model.UpdateBackupPlanResponse({}));
  }

  /**
   * Updates a backup plan.
   * 
   * @param request - UpdateBackupPlanRequest
   * @returns UpdateBackupPlanResponse
   */
  async updateBackupPlan(request: $_model.UpdateBackupPlanRequest): Promise<$_model.UpdateBackupPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateBackupPlanWithOptions(request, runtime);
  }

  /**
   * Updates the configurations of an HBR client.
   * 
   * @remarks
   * You can call this operation to update the configurations of both the old and new HBR clients.
   * 
   * @param request - UpdateClientSettingsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateClientSettingsResponse
   */
  async updateClientSettingsWithOptions(request: $_model.UpdateClientSettingsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateClientSettingsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.alertOnPartialComplete)) {
      query["AlertOnPartialComplete"] = request.alertOnPartialComplete;
    }

    if (!$dara.isNull(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.dataNetworkType)) {
      query["DataNetworkType"] = request.dataNetworkType;
    }

    if (!$dara.isNull(request.dataProxySetting)) {
      query["DataProxySetting"] = request.dataProxySetting;
    }

    if (!$dara.isNull(request.maxCpuCore)) {
      query["MaxCpuCore"] = request.maxCpuCore;
    }

    if (!$dara.isNull(request.maxMemory)) {
      query["MaxMemory"] = request.maxMemory;
    }

    if (!$dara.isNull(request.maxWorker)) {
      query["MaxWorker"] = request.maxWorker;
    }

    if (!$dara.isNull(request.proxyHost)) {
      query["ProxyHost"] = request.proxyHost;
    }

    if (!$dara.isNull(request.proxyPassword)) {
      query["ProxyPassword"] = request.proxyPassword;
    }

    if (!$dara.isNull(request.proxyPort)) {
      query["ProxyPort"] = request.proxyPort;
    }

    if (!$dara.isNull(request.proxyUser)) {
      query["ProxyUser"] = request.proxyUser;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.useHttps)) {
      query["UseHttps"] = request.useHttps;
    }

    if (!$dara.isNull(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateClientSettings",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateClientSettingsResponse>(await this.callApi(params, req, runtime), new $_model.UpdateClientSettingsResponse({}));
  }

  /**
   * Updates the configurations of an HBR client.
   * 
   * @remarks
   * You can call this operation to update the configurations of both the old and new HBR clients.
   * 
   * @param request - UpdateClientSettingsRequest
   * @returns UpdateClientSettingsResponse
   */
  async updateClientSettings(request: $_model.UpdateClientSettingsRequest): Promise<$_model.UpdateClientSettingsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateClientSettingsWithOptions(request, runtime);
  }

  /**
   * Update container cluster information, including the container cluster name, network type, etc.
   * 
   * @param request - UpdateContainerClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateContainerClusterResponse
   */
  async updateContainerClusterWithOptions(request: $_model.UpdateContainerClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateContainerClusterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.networkType)) {
      query["NetworkType"] = request.networkType;
    }

    if (!$dara.isNull(request.renewToken)) {
      query["RenewToken"] = request.renewToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateContainerCluster",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateContainerClusterResponse>(await this.callApi(params, req, runtime), new $_model.UpdateContainerClusterResponse({}));
  }

  /**
   * Update container cluster information, including the container cluster name, network type, etc.
   * 
   * @param request - UpdateContainerClusterRequest
   * @returns UpdateContainerClusterResponse
   */
  async updateContainerCluster(request: $_model.UpdateContainerClusterRequest): Promise<$_model.UpdateContainerClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateContainerClusterWithOptions(request, runtime);
  }

  /**
   * Updates an SAP HANA backup plan.
   * 
   * @remarks
   *   A backup plan defines the data source, backup policy, and other configurations. After you execute a backup plan, a backup job is generated to record the backup progress and the backup result. If a backup job is completed, a backup snapshot is generated. You can use a backup snapshot to create a restore job.
   * *   You can specify only one type of data source in a backup plan.
   * *   You can specify only one interval as a backup cycle in a backup plan.
   * *   Each backup plan allows you to back up data to only one backup vault.
   * 
   * @param request - UpdateHanaBackupPlanRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateHanaBackupPlanResponse
   */
  async updateHanaBackupPlanWithOptions(request: $_model.UpdateHanaBackupPlanRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateHanaBackupPlanResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupPrefix)) {
      query["BackupPrefix"] = request.backupPrefix;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.planId)) {
      query["PlanId"] = request.planId;
    }

    if (!$dara.isNull(request.planName)) {
      query["PlanName"] = request.planName;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.schedule)) {
      query["Schedule"] = request.schedule;
    }

    if (!$dara.isNull(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateHanaBackupPlan",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateHanaBackupPlanResponse>(await this.callApi(params, req, runtime), new $_model.UpdateHanaBackupPlanResponse({}));
  }

  /**
   * Updates an SAP HANA backup plan.
   * 
   * @remarks
   *   A backup plan defines the data source, backup policy, and other configurations. After you execute a backup plan, a backup job is generated to record the backup progress and the backup result. If a backup job is completed, a backup snapshot is generated. You can use a backup snapshot to create a restore job.
   * *   You can specify only one type of data source in a backup plan.
   * *   You can specify only one interval as a backup cycle in a backup plan.
   * *   Each backup plan allows you to back up data to only one backup vault.
   * 
   * @param request - UpdateHanaBackupPlanRequest
   * @returns UpdateHanaBackupPlanResponse
   */
  async updateHanaBackupPlan(request: $_model.UpdateHanaBackupPlanRequest): Promise<$_model.UpdateHanaBackupPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateHanaBackupPlanWithOptions(request, runtime);
  }

  /**
   * Updates the backup parameters of an SAP HANA database.
   * 
   * @remarks
   * You can call the UpdateHanaRetentionSetting operation to update the backup retention period of a database.
   * 
   * @param request - UpdateHanaBackupSettingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateHanaBackupSettingResponse
   */
  async updateHanaBackupSettingWithOptions(request: $_model.UpdateHanaBackupSettingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateHanaBackupSettingResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.catalogBackupParameterFile)) {
      query["CatalogBackupParameterFile"] = request.catalogBackupParameterFile;
    }

    if (!$dara.isNull(request.catalogBackupUsingBackint)) {
      query["CatalogBackupUsingBackint"] = request.catalogBackupUsingBackint;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.dataBackupParameterFile)) {
      query["DataBackupParameterFile"] = request.dataBackupParameterFile;
    }

    if (!$dara.isNull(request.databaseName)) {
      query["DatabaseName"] = request.databaseName;
    }

    if (!$dara.isNull(request.enableAutoLogBackup)) {
      query["EnableAutoLogBackup"] = request.enableAutoLogBackup;
    }

    if (!$dara.isNull(request.logBackupParameterFile)) {
      query["LogBackupParameterFile"] = request.logBackupParameterFile;
    }

    if (!$dara.isNull(request.logBackupTimeout)) {
      query["LogBackupTimeout"] = request.logBackupTimeout;
    }

    if (!$dara.isNull(request.logBackupUsingBackint)) {
      query["LogBackupUsingBackint"] = request.logBackupUsingBackint;
    }

    if (!$dara.isNull(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateHanaBackupSetting",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateHanaBackupSettingResponse>(await this.callApi(params, req, runtime), new $_model.UpdateHanaBackupSettingResponse({}));
  }

  /**
   * Updates the backup parameters of an SAP HANA database.
   * 
   * @remarks
   * You can call the UpdateHanaRetentionSetting operation to update the backup retention period of a database.
   * 
   * @param request - UpdateHanaBackupSettingRequest
   * @returns UpdateHanaBackupSettingResponse
   */
  async updateHanaBackupSetting(request: $_model.UpdateHanaBackupSettingRequest): Promise<$_model.UpdateHanaBackupSettingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateHanaBackupSettingWithOptions(request, runtime);
  }

  /**
   * Updates an SAP HANA instance.
   * 
   * @param request - UpdateHanaInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateHanaInstanceResponse
   */
  async updateHanaInstanceWithOptions(request: $_model.UpdateHanaInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateHanaInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.alertSetting)) {
      query["AlertSetting"] = request.alertSetting;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.hanaName)) {
      query["HanaName"] = request.hanaName;
    }

    if (!$dara.isNull(request.host)) {
      query["Host"] = request.host;
    }

    if (!$dara.isNull(request.instanceNumber)) {
      query["InstanceNumber"] = request.instanceNumber;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.useSsl)) {
      query["UseSsl"] = request.useSsl;
    }

    if (!$dara.isNull(request.userName)) {
      query["UserName"] = request.userName;
    }

    if (!$dara.isNull(request.validateCertificate)) {
      query["ValidateCertificate"] = request.validateCertificate;
    }

    if (!$dara.isNull(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateHanaInstance",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateHanaInstanceResponse>(await this.callApi(params, req, runtime), new $_model.UpdateHanaInstanceResponse({}));
  }

  /**
   * Updates an SAP HANA instance.
   * 
   * @param request - UpdateHanaInstanceRequest
   * @returns UpdateHanaInstanceResponse
   */
  async updateHanaInstance(request: $_model.UpdateHanaInstanceRequest): Promise<$_model.UpdateHanaInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateHanaInstanceWithOptions(request, runtime);
  }

  /**
   * Updates the backup retention period of an SAP HANA database.
   * 
   * @remarks
   *   If you want to update the backup parameters of a database, you can call the UpdateHanaBackupSetting operation.
   * *   Cloud Backup deletes the expired catalogs and data that are related to Backint and file backup. The deleted catalogs and data cannot be restored. We recommend that you set the retention period based on your business requirements.
   * 
   * @param request - UpdateHanaRetentionSettingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateHanaRetentionSettingResponse
   */
  async updateHanaRetentionSettingWithOptions(request: $_model.UpdateHanaRetentionSettingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateHanaRetentionSettingResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.databaseName)) {
      query["DatabaseName"] = request.databaseName;
    }

    if (!$dara.isNull(request.disabled)) {
      query["Disabled"] = request.disabled;
    }

    if (!$dara.isNull(request.retentionDays)) {
      query["RetentionDays"] = request.retentionDays;
    }

    if (!$dara.isNull(request.schedule)) {
      query["Schedule"] = request.schedule;
    }

    if (!$dara.isNull(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateHanaRetentionSetting",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateHanaRetentionSettingResponse>(await this.callApi(params, req, runtime), new $_model.UpdateHanaRetentionSettingResponse({}));
  }

  /**
   * Updates the backup retention period of an SAP HANA database.
   * 
   * @remarks
   *   If you want to update the backup parameters of a database, you can call the UpdateHanaBackupSetting operation.
   * *   Cloud Backup deletes the expired catalogs and data that are related to Backint and file backup. The deleted catalogs and data cannot be restored. We recommend that you set the retention period based on your business requirements.
   * 
   * @param request - UpdateHanaRetentionSettingRequest
   * @returns UpdateHanaRetentionSettingResponse
   */
  async updateHanaRetentionSetting(request: $_model.UpdateHanaRetentionSettingRequest): Promise<$_model.UpdateHanaRetentionSettingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateHanaRetentionSettingWithOptions(request, runtime);
  }

  /**
   * Modifies the association between a backup policy and a data source.
   * 
   * @param tmpReq - UpdatePolicyBindingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdatePolicyBindingResponse
   */
  async updatePolicyBindingWithOptions(tmpReq: $_model.UpdatePolicyBindingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdatePolicyBindingResponse> {
    tmpReq.validate();
    let request = new $_model.UpdatePolicyBindingShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.advancedOptions)) {
      request.advancedOptionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.advancedOptions, "AdvancedOptions", "json");
    }

    let query = { };
    if (!$dara.isNull(request.advancedOptionsShrink)) {
      query["AdvancedOptions"] = request.advancedOptionsShrink;
    }

    if (!$dara.isNull(request.disabled)) {
      query["Disabled"] = request.disabled;
    }

    if (!$dara.isNull(request.exclude)) {
      query["Exclude"] = request.exclude;
    }

    if (!$dara.isNull(request.include)) {
      query["Include"] = request.include;
    }

    if (!$dara.isNull(request.policyBindingDescription)) {
      query["PolicyBindingDescription"] = request.policyBindingDescription;
    }

    if (!$dara.isNull(request.source)) {
      query["Source"] = request.source;
    }

    if (!$dara.isNull(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    if (!$dara.isNull(request.speedLimit)) {
      query["SpeedLimit"] = request.speedLimit;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dataSourceId)) {
      body["DataSourceId"] = request.dataSourceId;
    }

    if (!$dara.isNull(request.policyId)) {
      body["PolicyId"] = request.policyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdatePolicyBinding",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdatePolicyBindingResponse>(await this.callApi(params, req, runtime), new $_model.UpdatePolicyBindingResponse({}));
  }

  /**
   * Modifies the association between a backup policy and a data source.
   * 
   * @param request - UpdatePolicyBindingRequest
   * @returns UpdatePolicyBindingResponse
   */
  async updatePolicyBinding(request: $_model.UpdatePolicyBindingRequest): Promise<$_model.UpdatePolicyBindingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updatePolicyBindingWithOptions(request, runtime);
  }

  /**
   * Modifies a backup policy.
   * 
   * @remarks
   * If you modify a backup policy, the modification takes effect on all data sources that are bound to the backup policy. Proceed with caution.
   * 
   * @param tmpReq - UpdatePolicyV2Request
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdatePolicyV2Response
   */
  async updatePolicyV2WithOptions(tmpReq: $_model.UpdatePolicyV2Request, runtime: $dara.RuntimeOptions): Promise<$_model.UpdatePolicyV2Response> {
    tmpReq.validate();
    let request = new $_model.UpdatePolicyV2ShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.rules)) {
      request.rulesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.rules, "Rules", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.policyDescription)) {
      body["PolicyDescription"] = request.policyDescription;
    }

    if (!$dara.isNull(request.policyId)) {
      body["PolicyId"] = request.policyId;
    }

    if (!$dara.isNull(request.policyName)) {
      body["PolicyName"] = request.policyName;
    }

    if (!$dara.isNull(request.rulesShrink)) {
      body["Rules"] = request.rulesShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdatePolicyV2",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdatePolicyV2Response>(await this.callApi(params, req, runtime), new $_model.UpdatePolicyV2Response({}));
  }

  /**
   * Modifies a backup policy.
   * 
   * @remarks
   * If you modify a backup policy, the modification takes effect on all data sources that are bound to the backup policy. Proceed with caution.
   * 
   * @param request - UpdatePolicyV2Request
   * @returns UpdatePolicyV2Response
   */
  async updatePolicyV2(request: $_model.UpdatePolicyV2Request): Promise<$_model.UpdatePolicyV2Response> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updatePolicyV2WithOptions(request, runtime);
  }

  /**
   * Updates the configuration information about the backup vault.
   * 
   * @param request - UpdateVaultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateVaultResponse
   */
  async updateVaultWithOptions(request: $_model.UpdateVaultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateVaultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    if (!$dara.isNull(request.vaultName)) {
      query["VaultName"] = request.vaultName;
    }

    if (!$dara.isNull(request.wormEnabled)) {
      query["WormEnabled"] = request.wormEnabled;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateVault",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateVaultResponse>(await this.callApi(params, req, runtime), new $_model.UpdateVaultResponse({}));
  }

  /**
   * Updates the configuration information about the backup vault.
   * 
   * @param request - UpdateVaultRequest
   * @returns UpdateVaultResponse
   */
  async updateVault(request: $_model.UpdateVaultRequest): Promise<$_model.UpdateVaultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateVaultWithOptions(request, runtime);
  }

  /**
   * Upgrades an HBR client on one or more Elastic Compute Service (ECS) instances.
   * 
   * @remarks
   *   This operation creates an asynchronous job at the backend and calls Cloud Assistant to upgrade an HBR client that is installed on an ECS instance.
   * *   You can call the DescribeTask operation to query the execution result of an asynchronous job.
   * *   The timeout period of an asynchronous job is 15 minutes.
   * 
   * @param tmpReq - UpgradeBackupClientsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpgradeBackupClientsResponse
   */
  async upgradeBackupClientsWithOptions(tmpReq: $_model.UpgradeBackupClientsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpgradeBackupClientsResponse> {
    tmpReq.validate();
    let request = new $_model.UpgradeBackupClientsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.clientIds)) {
      request.clientIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.clientIds, "ClientIds", "json");
    }

    if (!$dara.isNull(tmpReq.instanceIds)) {
      request.instanceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.instanceIds, "InstanceIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clientIdsShrink)) {
      query["ClientIds"] = request.clientIdsShrink;
    }

    if (!$dara.isNull(request.crossAccountRoleName)) {
      query["CrossAccountRoleName"] = request.crossAccountRoleName;
    }

    if (!$dara.isNull(request.crossAccountType)) {
      query["CrossAccountType"] = request.crossAccountType;
    }

    if (!$dara.isNull(request.crossAccountUserId)) {
      query["CrossAccountUserId"] = request.crossAccountUserId;
    }

    if (!$dara.isNull(request.instanceIdsShrink)) {
      query["InstanceIds"] = request.instanceIdsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpgradeBackupClients",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpgradeBackupClientsResponse>(await this.callApi(params, req, runtime), new $_model.UpgradeBackupClientsResponse({}));
  }

  /**
   * Upgrades an HBR client on one or more Elastic Compute Service (ECS) instances.
   * 
   * @remarks
   *   This operation creates an asynchronous job at the backend and calls Cloud Assistant to upgrade an HBR client that is installed on an ECS instance.
   * *   You can call the DescribeTask operation to query the execution result of an asynchronous job.
   * *   The timeout period of an asynchronous job is 15 minutes.
   * 
   * @param request - UpgradeBackupClientsRequest
   * @returns UpgradeBackupClientsResponse
   */
  async upgradeBackupClients(request: $_model.UpgradeBackupClientsRequest): Promise<$_model.UpgradeBackupClientsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.upgradeBackupClientsWithOptions(request, runtime);
  }

  /**
   * Upgrades the Cloud Backup client.
   * 
   * @remarks
   * You can call this operation to upgrade a Cloud Backup client to the latest version. After the Cloud Backup client is upgraded, the version of the client cannot be rolled back.
   * 
   * @param request - UpgradeClientRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpgradeClientResponse
   */
  async upgradeClientWithOptions(request: $_model.UpgradeClientRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpgradeClientResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpgradeClient",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpgradeClientResponse>(await this.callApi(params, req, runtime), new $_model.UpgradeClientResponse({}));
  }

  /**
   * Upgrades the Cloud Backup client.
   * 
   * @remarks
   * You can call this operation to upgrade a Cloud Backup client to the latest version. After the Cloud Backup client is upgraded, the version of the client cannot be rolled back.
   * 
   * @param request - UpgradeClientRequest
   * @returns UpgradeClientResponse
   */
  async upgradeClient(request: $_model.UpgradeClientRequest): Promise<$_model.UpgradeClientResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.upgradeClientWithOptions(request, runtime);
  }

}
