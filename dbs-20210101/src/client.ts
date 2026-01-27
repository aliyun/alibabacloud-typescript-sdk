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
   * Moves a resource from one resource group to another.
   * 
   * @param request - ChangeResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroupWithOptions(request: $_model.ChangeResourceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChangeResourceGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.newResourceGroupId)) {
      query["NewResourceGroupId"] = request.newResourceGroupId;
    }

    if (!$dara.isNull(request.regionCode)) {
      query["RegionCode"] = request.regionCode;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChangeResourceGroup",
      version: "2021-01-01",
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
   * Moves a resource from one resource group to another.
   * 
   * @param request - ChangeResourceGroupRequest
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroup(request: $_model.ChangeResourceGroupRequest): Promise<$_model.ChangeResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.changeResourceGroupWithOptions(request, runtime);
  }

  /**
   * 配置备份集信息
   * 
   * @param request - ConfigureBackupSetInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConfigureBackupSetInfoResponse
   */
  async configureBackupSetInfoWithOptions(request: $_model.ConfigureBackupSetInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ConfigureBackupSetInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupMethod)) {
      query["BackupMethod"] = request.backupMethod;
    }

    if (!$dara.isNull(request.backupMode)) {
      query["BackupMode"] = request.backupMode;
    }

    if (!$dara.isNull(request.backupSetId)) {
      query["BackupSetId"] = request.backupSetId;
    }

    if (!$dara.isNull(request.backupSetName)) {
      query["BackupSetName"] = request.backupSetName;
    }

    if (!$dara.isNull(request.backupType)) {
      query["BackupType"] = request.backupType;
    }

    if (!$dara.isNull(request.checkSum)) {
      query["CheckSum"] = request.checkSum;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dataSourceId)) {
      query["DataSourceId"] = request.dataSourceId;
    }

    if (!$dara.isNull(request.extraMeta)) {
      query["ExtraMeta"] = request.extraMeta;
    }

    if (!$dara.isNull(request.regionCode)) {
      query["RegionCode"] = request.regionCode;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.uploadStatus)) {
      query["UploadStatus"] = request.uploadStatus;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ConfigureBackupSetInfo",
      version: "2021-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ConfigureBackupSetInfoResponse>(await this.callApi(params, req, runtime), new $_model.ConfigureBackupSetInfoResponse({}));
  }

  /**
   * 配置备份集信息
   * 
   * @param request - ConfigureBackupSetInfoRequest
   * @returns ConfigureBackupSetInfoResponse
   */
  async configureBackupSetInfo(request: $_model.ConfigureBackupSetInfoRequest): Promise<$_model.ConfigureBackupSetInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.configureBackupSetInfoWithOptions(request, runtime);
  }

  /**
   * Enables an advanced backup policy for a PolarDB instance.
   * 
   * @remarks
   * ### [](#)Supported database engines
   * PolarDB for MySQL
   * >  This API operation is available only to specific customers. If you want to call this API operation, join the Database Backup (DBS) DingTalk group (ID 35585947) for customer consultation to request permissions.
   * 
   * @param request - CreateAdvancedPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAdvancedPolicyResponse
   */
  async createAdvancedPolicyWithOptions(request: $_model.CreateAdvancedPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAdvancedPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.regionCode)) {
      query["RegionCode"] = request.regionCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAdvancedPolicy",
      version: "2021-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAdvancedPolicyResponse>(await this.callApi(params, req, runtime), new $_model.CreateAdvancedPolicyResponse({}));
  }

  /**
   * Enables an advanced backup policy for a PolarDB instance.
   * 
   * @remarks
   * ### [](#)Supported database engines
   * PolarDB for MySQL
   * >  This API operation is available only to specific customers. If you want to call this API operation, join the Database Backup (DBS) DingTalk group (ID 35585947) for customer consultation to request permissions.
   * 
   * @param request - CreateAdvancedPolicyRequest
   * @returns CreateAdvancedPolicyResponse
   */
  async createAdvancedPolicy(request: $_model.CreateAdvancedPolicyRequest): Promise<$_model.CreateAdvancedPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAdvancedPolicyWithOptions(request, runtime);
  }

  /**
   * Creates an advanced download task for an ApsaraDB RDS for MySQL instance, an ApsaraDB RDS for PostgreSQL instance, or a PolarDB for MySQL cluster.
   * 
   * @remarks
   * ### [](#)Supported database engines
   * *   ApsaraDB RDS for MySQL
   * *   ApsaraDB RDS for PostgreSQL
   * *   PolarDB for MySQL
   * ### [](#)References
   * For the instances that meet your business requirements, you can create an advanced download task by point in time or backup set. You can set the download destination to a URL or directly upload the downloaded backup set to your Object Storage Service (OSS) bucket to facilitate data analysis and offline archiving.
   * *   [Download the backup files of an ApsaraDB RDS for MySQL instance](https://help.aliyun.com/document_detail/98819.html)
   * *   [Download the backup files of an ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/96774.html)
   * *   [Download the backup files of a PolarDB for MySQL cluster](https://help.aliyun.com/document_detail/2627635.html)
   * 
   * @param request - CreateDownloadRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDownloadResponse
   */
  async createDownloadWithOptions(request: $_model.CreateDownloadRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDownloadResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.adminDatabase)) {
      query["AdminDatabase"] = request.adminDatabase;
    }

    if (!$dara.isNull(request.bakSetId)) {
      query["BakSetId"] = request.bakSetId;
    }

    if (!$dara.isNull(request.bakSetSize)) {
      query["BakSetSize"] = request.bakSetSize;
    }

    if (!$dara.isNull(request.bakSetType)) {
      query["BakSetType"] = request.bakSetType;
    }

    if (!$dara.isNull(request.clusterName)) {
      query["ClusterName"] = request.clusterName;
    }

    if (!$dara.isNull(request.downloadPointInTime)) {
      query["DownloadPointInTime"] = request.downloadPointInTime;
    }

    if (!$dara.isNull(request.formatType)) {
      query["FormatType"] = request.formatType;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.isCluster)) {
      query["IsCluster"] = request.isCluster;
    }

    if (!$dara.isNull(request.isPhysical)) {
      query["IsPhysical"] = request.isPhysical;
    }

    if (!$dara.isNull(request.primaryKeyTypeOnly)) {
      query["PrimaryKeyTypeOnly"] = request.primaryKeyTypeOnly;
    }

    if (!$dara.isNull(request.regionCode)) {
      query["RegionCode"] = request.regionCode;
    }

    if (!$dara.isNull(request.targetBucket)) {
      query["TargetBucket"] = request.targetBucket;
    }

    if (!$dara.isNull(request.targetOssRegion)) {
      query["TargetOssRegion"] = request.targetOssRegion;
    }

    if (!$dara.isNull(request.targetPath)) {
      query["TargetPath"] = request.targetPath;
    }

    if (!$dara.isNull(request.targetType)) {
      query["TargetType"] = request.targetType;
    }

    if (!$dara.isNull(request.useZstd)) {
      query["UseZstd"] = request.useZstd;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDownload",
      version: "2021-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDownloadResponse>(await this.callApi(params, req, runtime), new $_model.CreateDownloadResponse({}));
  }

  /**
   * Creates an advanced download task for an ApsaraDB RDS for MySQL instance, an ApsaraDB RDS for PostgreSQL instance, or a PolarDB for MySQL cluster.
   * 
   * @remarks
   * ### [](#)Supported database engines
   * *   ApsaraDB RDS for MySQL
   * *   ApsaraDB RDS for PostgreSQL
   * *   PolarDB for MySQL
   * ### [](#)References
   * For the instances that meet your business requirements, you can create an advanced download task by point in time or backup set. You can set the download destination to a URL or directly upload the downloaded backup set to your Object Storage Service (OSS) bucket to facilitate data analysis and offline archiving.
   * *   [Download the backup files of an ApsaraDB RDS for MySQL instance](https://help.aliyun.com/document_detail/98819.html)
   * *   [Download the backup files of an ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/96774.html)
   * *   [Download the backup files of a PolarDB for MySQL cluster](https://help.aliyun.com/document_detail/2627635.html)
   * 
   * @param request - CreateDownloadRequest
   * @returns CreateDownloadResponse
   */
  async createDownload(request: $_model.CreateDownloadRequest): Promise<$_model.CreateDownloadResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDownloadWithOptions(request, runtime);
  }

  /**
   * Releases a sandbox instance.
   * 
   * @remarks
   * This operation is available only for the Database Backup (DBS) API of the 2021-01-01 version.
   * 
   * @param request - DeleteSandboxInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSandboxInstanceResponse
   */
  async deleteSandboxInstanceWithOptions(request: $_model.DeleteSandboxInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSandboxInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupPlanId)) {
      query["BackupPlanId"] = request.backupPlanId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSandboxInstance",
      version: "2021-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSandboxInstanceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSandboxInstanceResponse({}));
  }

  /**
   * Releases a sandbox instance.
   * 
   * @remarks
   * This operation is available only for the Database Backup (DBS) API of the 2021-01-01 version.
   * 
   * @param request - DeleteSandboxInstanceRequest
   * @returns DeleteSandboxInstanceResponse
   */
  async deleteSandboxInstance(request: $_model.DeleteSandboxInstanceRequest): Promise<$_model.DeleteSandboxInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSandboxInstanceWithOptions(request, runtime);
  }

  /**
   * Queries the information about the backup data of a PolarDB for MySQL cluster.
   * 
   * @remarks
   * ### [](#)Supported database engine
   * PolarDB for MySQL
   * >  This API operation is available only to specific customers. If you want to call this API operation, join the Database Backup (DBS) DingTalk group (ID: 35585947) for customer consultation to request permissions.
   * ### [](#)References
   * [Back up data of PolarDB for MySQL](https://help.aliyun.com/document_detail/88172.html)
   * 
   * @param request - DescribeBackupDataListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBackupDataListResponse
   */
  async describeBackupDataListWithOptions(request: $_model.DescribeBackupDataListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeBackupDataListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupId)) {
      query["BackupId"] = request.backupId;
    }

    if (!$dara.isNull(request.backupMethod)) {
      query["BackupMethod"] = request.backupMethod;
    }

    if (!$dara.isNull(request.backupMode)) {
      query["BackupMode"] = request.backupMode;
    }

    if (!$dara.isNull(request.backupScale)) {
      query["BackupScale"] = request.backupScale;
    }

    if (!$dara.isNull(request.backupStatus)) {
      query["BackupStatus"] = request.backupStatus;
    }

    if (!$dara.isNull(request.backupType)) {
      query["BackupType"] = request.backupType;
    }

    if (!$dara.isNull(request.dataSourceId)) {
      query["DataSourceId"] = request.dataSourceId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceIsDeleted)) {
      query["InstanceIsDeleted"] = request.instanceIsDeleted;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.instanceRegion)) {
      query["InstanceRegion"] = request.instanceRegion;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionCode)) {
      query["RegionCode"] = request.regionCode;
    }

    if (!$dara.isNull(request.sceneType)) {
      query["SceneType"] = request.sceneType;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeBackupDataList",
      version: "2021-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeBackupDataListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeBackupDataListResponse({}));
  }

  /**
   * Queries the information about the backup data of a PolarDB for MySQL cluster.
   * 
   * @remarks
   * ### [](#)Supported database engine
   * PolarDB for MySQL
   * >  This API operation is available only to specific customers. If you want to call this API operation, join the Database Backup (DBS) DingTalk group (ID: 35585947) for customer consultation to request permissions.
   * ### [](#)References
   * [Back up data of PolarDB for MySQL](https://help.aliyun.com/document_detail/88172.html)
   * 
   * @param request - DescribeBackupDataListRequest
   * @returns DescribeBackupDataListResponse
   */
  async describeBackupDataList(request: $_model.DescribeBackupDataListRequest): Promise<$_model.DescribeBackupDataListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeBackupDataListWithOptions(request, runtime);
  }

  /**
   * Queries the information about the backup policy of a PolarDB for MySQL instance.
   * 
   * @remarks
   * ### [](#)Supported database engine
   * PolarDB for MySQL
   * >  The API operation is available only to specific customers. If you want to call this API operation, request permissions by joining the Database Backup (DBS) DingTalk group (ID 35585947) for customer consultation.
   * ### [](#)References
   * [Topics related to backup policies of PolarDB for MySQL instances](https://help.aliyun.com/document_detail/280422.html)
   * 
   * @param request - DescribeBackupPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBackupPolicyResponse
   */
  async describeBackupPolicyWithOptions(request: $_model.DescribeBackupPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeBackupPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.regionCode)) {
      query["RegionCode"] = request.regionCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeBackupPolicy",
      version: "2021-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeBackupPolicyResponse>(await this.callApi(params, req, runtime), new $_model.DescribeBackupPolicyResponse({}));
  }

  /**
   * Queries the information about the backup policy of a PolarDB for MySQL instance.
   * 
   * @remarks
   * ### [](#)Supported database engine
   * PolarDB for MySQL
   * >  The API operation is available only to specific customers. If you want to call this API operation, request permissions by joining the Database Backup (DBS) DingTalk group (ID 35585947) for customer consultation.
   * ### [](#)References
   * [Topics related to backup policies of PolarDB for MySQL instances](https://help.aliyun.com/document_detail/280422.html)
   * 
   * @param request - DescribeBackupPolicyRequest
   * @returns DescribeBackupPolicyResponse
   */
  async describeBackupPolicy(request: $_model.DescribeBackupPolicyRequest): Promise<$_model.DescribeBackupPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeBackupPolicyWithOptions(request, runtime);
  }

  /**
   * 查询存储介质访问详情
   * 
   * @param request - DescribeBakDataSourceStorageAccessInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBakDataSourceStorageAccessInfoResponse
   */
  async describeBakDataSourceStorageAccessInfoWithOptions(request: $_model.DescribeBakDataSourceStorageAccessInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeBakDataSourceStorageAccessInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupSetId)) {
      query["BackupSetId"] = request.backupSetId;
    }

    if (!$dara.isNull(request.backupType)) {
      query["BackupType"] = request.backupType;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dataSourceId)) {
      query["DataSourceId"] = request.dataSourceId;
    }

    if (!$dara.isNull(request.durationSeconds)) {
      query["DurationSeconds"] = request.durationSeconds;
    }

    if (!$dara.isNull(request.regionCode)) {
      query["RegionCode"] = request.regionCode;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.storageType)) {
      query["StorageType"] = request.storageType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeBakDataSourceStorageAccessInfo",
      version: "2021-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeBakDataSourceStorageAccessInfoResponse>(await this.callApi(params, req, runtime), new $_model.DescribeBakDataSourceStorageAccessInfoResponse({}));
  }

  /**
   * 查询存储介质访问详情
   * 
   * @param request - DescribeBakDataSourceStorageAccessInfoRequest
   * @returns DescribeBakDataSourceStorageAccessInfoResponse
   */
  async describeBakDataSourceStorageAccessInfo(request: $_model.DescribeBakDataSourceStorageAccessInfoRequest): Promise<$_model.DescribeBakDataSourceStorageAccessInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeBakDataSourceStorageAccessInfoWithOptions(request, runtime);
  }

  /**
   * 根据dbs实例id获取费用列表
   * 
   * @param request - DescribeCostInfoByDbsInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCostInfoByDbsInstanceResponse
   */
  async describeCostInfoByDbsInstanceWithOptions(request: $_model.DescribeCostInfoByDbsInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCostInfoByDbsInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupPlanId)) {
      query["BackupPlanId"] = request.backupPlanId;
    }

    if (!$dara.isNull(request.regionCode)) {
      query["RegionCode"] = request.regionCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCostInfoByDbsInstance",
      version: "2021-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCostInfoByDbsInstanceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCostInfoByDbsInstanceResponse({}));
  }

  /**
   * 根据dbs实例id获取费用列表
   * 
   * @param request - DescribeCostInfoByDbsInstanceRequest
   * @returns DescribeCostInfoByDbsInstanceResponse
   */
  async describeCostInfoByDbsInstance(request: $_model.DescribeCostInfoByDbsInstanceRequest): Promise<$_model.DescribeCostInfoByDbsInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCostInfoByDbsInstanceWithOptions(request, runtime);
  }

  /**
   * 查库表恢复可用的备份集
   * 
   * @param request - DescribeDBTablesRecoveryBackupSetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBTablesRecoveryBackupSetResponse
   */
  async describeDBTablesRecoveryBackupSetWithOptions(request: $_model.DescribeDBTablesRecoveryBackupSetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBTablesRecoveryBackupSetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterName)) {
      query["ClusterName"] = request.clusterName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionCode)) {
      query["RegionCode"] = request.regionCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDBTablesRecoveryBackupSet",
      version: "2021-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDBTablesRecoveryBackupSetResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDBTablesRecoveryBackupSetResponse({}));
  }

  /**
   * 查库表恢复可用的备份集
   * 
   * @param request - DescribeDBTablesRecoveryBackupSetRequest
   * @returns DescribeDBTablesRecoveryBackupSetResponse
   */
  async describeDBTablesRecoveryBackupSet(request: $_model.DescribeDBTablesRecoveryBackupSetRequest): Promise<$_model.DescribeDBTablesRecoveryBackupSetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBTablesRecoveryBackupSetWithOptions(request, runtime);
  }

  /**
   * 查库表恢复状态
   * 
   * @param request - DescribeDBTablesRecoveryStateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBTablesRecoveryStateResponse
   */
  async describeDBTablesRecoveryStateWithOptions(request: $_model.DescribeDBTablesRecoveryStateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBTablesRecoveryStateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterName)) {
      query["ClusterName"] = request.clusterName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionCode)) {
      query["RegionCode"] = request.regionCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDBTablesRecoveryState",
      version: "2021-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDBTablesRecoveryStateResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDBTablesRecoveryStateResponse({}));
  }

  /**
   * 查库表恢复状态
   * 
   * @param request - DescribeDBTablesRecoveryStateRequest
   * @returns DescribeDBTablesRecoveryStateResponse
   */
  async describeDBTablesRecoveryState(request: $_model.DescribeDBTablesRecoveryStateRequest): Promise<$_model.DescribeDBTablesRecoveryStateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBTablesRecoveryStateWithOptions(request, runtime);
  }

  /**
   * 查库表恢复可恢复的时间范围
   * 
   * @param request - DescribeDBTablesRecoveryTimeRangeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBTablesRecoveryTimeRangeResponse
   */
  async describeDBTablesRecoveryTimeRangeWithOptions(request: $_model.DescribeDBTablesRecoveryTimeRangeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBTablesRecoveryTimeRangeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterName)) {
      query["ClusterName"] = request.clusterName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionCode)) {
      query["RegionCode"] = request.regionCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDBTablesRecoveryTimeRange",
      version: "2021-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDBTablesRecoveryTimeRangeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDBTablesRecoveryTimeRangeResponse({}));
  }

  /**
   * 查库表恢复可恢复的时间范围
   * 
   * @param request - DescribeDBTablesRecoveryTimeRangeRequest
   * @returns DescribeDBTablesRecoveryTimeRangeResponse
   */
  async describeDBTablesRecoveryTimeRange(request: $_model.DescribeDBTablesRecoveryTimeRangeRequest): Promise<$_model.DescribeDBTablesRecoveryTimeRangeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBTablesRecoveryTimeRangeWithOptions(request, runtime);
  }

  /**
   * Queries the storage information of a downloaded backup set.
   * 
   * @remarks
   * ### [](#)Supported database engines
   * *   ApsaraDB RDS for MySQL that uses Enterprise SSDs (ESSDs)
   * *   RDS PostgreSQL
   * *   PolarDB for MySQL
   * ### [](#)References
   * *   [Download the backup files of an ApsaraDB RDS for MySQL instance](https://help.aliyun.com/document_detail/98819.html)
   * *   [Download the backup files of an ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/96774.html)
   * *   [Download the backup files of a PolarDB for MySQL cluster](https://help.aliyun.com/document_detail/2627635.html)
   * 
   * @param request - DescribeDownloadBackupSetStorageInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDownloadBackupSetStorageInfoResponse
   */
  async describeDownloadBackupSetStorageInfoWithOptions(request: $_model.DescribeDownloadBackupSetStorageInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDownloadBackupSetStorageInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupSetId)) {
      query["BackupSetId"] = request.backupSetId;
    }

    if (!$dara.isNull(request.clusterName)) {
      query["ClusterName"] = request.clusterName;
    }

    if (!$dara.isNull(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.regionCode)) {
      query["RegionCode"] = request.regionCode;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDownloadBackupSetStorageInfo",
      version: "2021-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDownloadBackupSetStorageInfoResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDownloadBackupSetStorageInfoResponse({}));
  }

  /**
   * Queries the storage information of a downloaded backup set.
   * 
   * @remarks
   * ### [](#)Supported database engines
   * *   ApsaraDB RDS for MySQL that uses Enterprise SSDs (ESSDs)
   * *   RDS PostgreSQL
   * *   PolarDB for MySQL
   * ### [](#)References
   * *   [Download the backup files of an ApsaraDB RDS for MySQL instance](https://help.aliyun.com/document_detail/98819.html)
   * *   [Download the backup files of an ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/96774.html)
   * *   [Download the backup files of a PolarDB for MySQL cluster](https://help.aliyun.com/document_detail/2627635.html)
   * 
   * @param request - DescribeDownloadBackupSetStorageInfoRequest
   * @returns DescribeDownloadBackupSetStorageInfoResponse
   */
  async describeDownloadBackupSetStorageInfo(request: $_model.DescribeDownloadBackupSetStorageInfoRequest): Promise<$_model.DescribeDownloadBackupSetStorageInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDownloadBackupSetStorageInfoWithOptions(request, runtime);
  }

  /**
   * Queries whether an instance supports the advanced download feature.
   * 
   * @remarks
   * ### [](#)Supported database engines
   * *   ApsaraDB RDS for MySQL
   * *   ApsaraDB RDS for PostgreSQL
   * *   PolarDB for MySQL
   * ### [](#)References
   * You can create an advanced download task by point in time or backup set. You can set the download destination to a URL or directly upload the downloaded backup set to your Object Storage Service (OSS) bucket to facilitate data analysis and offline archiving.
   * *   [Download the backup files of an ApsaraDB RDS for MySQL instance](https://help.aliyun.com/document_detail/98819.html)
   * *   [Download the backup files of an ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/96774.html)
   * *   [Download the backup files of a PolarDB for MySQL cluster](https://help.aliyun.com/document_detail/2627635.html)
   * 
   * @param request - DescribeDownloadSupportRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDownloadSupportResponse
   */
  async describeDownloadSupportWithOptions(request: $_model.DescribeDownloadSupportRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDownloadSupportResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterName)) {
      query["ClusterName"] = request.clusterName;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.regionCode)) {
      query["RegionCode"] = request.regionCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDownloadSupport",
      version: "2021-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDownloadSupportResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDownloadSupportResponse({}));
  }

  /**
   * Queries whether an instance supports the advanced download feature.
   * 
   * @remarks
   * ### [](#)Supported database engines
   * *   ApsaraDB RDS for MySQL
   * *   ApsaraDB RDS for PostgreSQL
   * *   PolarDB for MySQL
   * ### [](#)References
   * You can create an advanced download task by point in time or backup set. You can set the download destination to a URL or directly upload the downloaded backup set to your Object Storage Service (OSS) bucket to facilitate data analysis and offline archiving.
   * *   [Download the backup files of an ApsaraDB RDS for MySQL instance](https://help.aliyun.com/document_detail/98819.html)
   * *   [Download the backup files of an ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/96774.html)
   * *   [Download the backup files of a PolarDB for MySQL cluster](https://help.aliyun.com/document_detail/2627635.html)
   * 
   * @param request - DescribeDownloadSupportRequest
   * @returns DescribeDownloadSupportResponse
   */
  async describeDownloadSupport(request: $_model.DescribeDownloadSupportRequest): Promise<$_model.DescribeDownloadSupportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDownloadSupportWithOptions(request, runtime);
  }

  /**
   * Queries the advanced download tasks for an ApsaraDB RDS for MySQL instance, an ApsaraDB RDS for PostgreSQL instance, or a PolarDB for MySQL cluster.
   * 
   * @remarks
   * ### [](#)Supported database engines
   * *   ApsaraDB RDS for MySQL
   * *   ApsaraDB RDS for PostgreSQL
   * *   PolarDB for MySQL
   * ### [](#)References
   * *   [Download the backup files of an ApsaraDB RDS for MySQL instance](https://help.aliyun.com/document_detail/98819.html)
   * *   [Download the backup files of an ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/96774.html)
   * *   [Download the backup files of a PolarDB for MySQL cluster](https://help.aliyun.com/document_detail/2627635.html)
   * 
   * @param request - DescribeDownloadTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDownloadTaskResponse
   */
  async describeDownloadTaskWithOptions(request: $_model.DescribeDownloadTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDownloadTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupSetId)) {
      query["BackupSetId"] = request.backupSetId;
    }

    if (!$dara.isNull(request.clusterName)) {
      query["ClusterName"] = request.clusterName;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.datasourceId)) {
      query["DatasourceId"] = request.datasourceId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.orderColumn)) {
      query["OrderColumn"] = request.orderColumn;
    }

    if (!$dara.isNull(request.orderDirect)) {
      query["OrderDirect"] = request.orderDirect;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionCode)) {
      query["RegionCode"] = request.regionCode;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.state)) {
      query["State"] = request.state;
    }

    if (!$dara.isNull(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDownloadTask",
      version: "2021-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDownloadTaskResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDownloadTaskResponse({}));
  }

  /**
   * Queries the advanced download tasks for an ApsaraDB RDS for MySQL instance, an ApsaraDB RDS for PostgreSQL instance, or a PolarDB for MySQL cluster.
   * 
   * @remarks
   * ### [](#)Supported database engines
   * *   ApsaraDB RDS for MySQL
   * *   ApsaraDB RDS for PostgreSQL
   * *   PolarDB for MySQL
   * ### [](#)References
   * *   [Download the backup files of an ApsaraDB RDS for MySQL instance](https://help.aliyun.com/document_detail/98819.html)
   * *   [Download the backup files of an ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/96774.html)
   * *   [Download the backup files of a PolarDB for MySQL cluster](https://help.aliyun.com/document_detail/2627635.html)
   * 
   * @param request - DescribeDownloadTaskRequest
   * @returns DescribeDownloadTaskResponse
   */
  async describeDownloadTask(request: $_model.DescribeDownloadTaskRequest): Promise<$_model.DescribeDownloadTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDownloadTaskWithOptions(request, runtime);
  }

  /**
   * Queries the snapshots of an instance.
   * 
   * @remarks
   * Before you call this operation, you must enable the sandbox feature for the database instance. For more information, see [Use the emergency recovery feature of an ApsaraDB RDS for MySQL instance](https://help.aliyun.com/document_detail/203154.html) or [Create a sandbox instance for emergency disaster recovery of a self-managed MySQL database](https://help.aliyun.com/document_detail/185577.html). This operation is available only for the Database Backup (DBS) API of the 2021-01-01 version.
   * 
   * @param request - DescribeSandboxBackupSetsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSandboxBackupSetsResponse
   */
  async describeSandboxBackupSetsWithOptions(request: $_model.DescribeSandboxBackupSetsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSandboxBackupSetsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupPlanId)) {
      query["BackupPlanId"] = request.backupPlanId;
    }

    if (!$dara.isNull(request.backupSetId)) {
      query["BackupSetId"] = request.backupSetId;
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
      action: "DescribeSandboxBackupSets",
      version: "2021-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSandboxBackupSetsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSandboxBackupSetsResponse({}));
  }

  /**
   * Queries the snapshots of an instance.
   * 
   * @remarks
   * Before you call this operation, you must enable the sandbox feature for the database instance. For more information, see [Use the emergency recovery feature of an ApsaraDB RDS for MySQL instance](https://help.aliyun.com/document_detail/203154.html) or [Create a sandbox instance for emergency disaster recovery of a self-managed MySQL database](https://help.aliyun.com/document_detail/185577.html). This operation is available only for the Database Backup (DBS) API of the 2021-01-01 version.
   * 
   * @param request - DescribeSandboxBackupSetsRequest
   * @returns DescribeSandboxBackupSetsResponse
   */
  async describeSandboxBackupSets(request: $_model.DescribeSandboxBackupSetsRequest): Promise<$_model.DescribeSandboxBackupSetsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSandboxBackupSetsWithOptions(request, runtime);
  }

  /**
   * Queries sandbox instances that are created within an account.
   * 
   * @remarks
   * This operation is available only in Database Backup (DBS) API of the 2021-01-01 version.
   * 
   * @param request - DescribeSandboxInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSandboxInstancesResponse
   */
  async describeSandboxInstancesWithOptions(request: $_model.DescribeSandboxInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSandboxInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupPlanId)) {
      query["BackupPlanId"] = request.backupPlanId;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSandboxInstances",
      version: "2021-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSandboxInstancesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSandboxInstancesResponse({}));
  }

  /**
   * Queries sandbox instances that are created within an account.
   * 
   * @remarks
   * This operation is available only in Database Backup (DBS) API of the 2021-01-01 version.
   * 
   * @param request - DescribeSandboxInstancesRequest
   * @returns DescribeSandboxInstancesResponse
   */
  async describeSandboxInstances(request: $_model.DescribeSandboxInstancesRequest): Promise<$_model.DescribeSandboxInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSandboxInstancesWithOptions(request, runtime);
  }

  /**
   * Queries the recoverable time range of a sandbox instance.
   * 
   * @remarks
   * Before you call this operation, you must enable the sandbox feature for the database instance. For more information, see [Use the emergency recovery feature of an ApsaraDB RDS for MySQL instance](https://help.aliyun.com/document_detail/203154.html) or [Create a sandbox instance for emergency disaster recovery of a self-managed MySQL database](https://help.aliyun.com/document_detail/185577.html). This operation is available only in Database Backup (DBS) API of the 2021-01-01 version.
   * 
   * @param request - DescribeSandboxRecoveryTimeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSandboxRecoveryTimeResponse
   */
  async describeSandboxRecoveryTimeWithOptions(request: $_model.DescribeSandboxRecoveryTimeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSandboxRecoveryTimeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupPlanId)) {
      query["BackupPlanId"] = request.backupPlanId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSandboxRecoveryTime",
      version: "2021-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSandboxRecoveryTimeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSandboxRecoveryTimeResponse({}));
  }

  /**
   * Queries the recoverable time range of a sandbox instance.
   * 
   * @remarks
   * Before you call this operation, you must enable the sandbox feature for the database instance. For more information, see [Use the emergency recovery feature of an ApsaraDB RDS for MySQL instance](https://help.aliyun.com/document_detail/203154.html) or [Create a sandbox instance for emergency disaster recovery of a self-managed MySQL database](https://help.aliyun.com/document_detail/185577.html). This operation is available only in Database Backup (DBS) API of the 2021-01-01 version.
   * 
   * @param request - DescribeSandboxRecoveryTimeRequest
   * @returns DescribeSandboxRecoveryTimeResponse
   */
  async describeSandboxRecoveryTime(request: $_model.DescribeSandboxRecoveryTimeRequest): Promise<$_model.DescribeSandboxRecoveryTimeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSandboxRecoveryTimeWithOptions(request, runtime);
  }

  /**
   * Modifies the backup policy of a PolarDB instance.
   * 
   * @remarks
   * ### [](#)Supported database engines
   * PolarDB for MySQL
   * >  This API operation is available only to specific customers. If you want to call this API operation, join the Database Backup (DBS) DingTalk group (ID 35585947) for customer consultation to request permissions.
   * 
   * @param tmpReq - ModifyBackupPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyBackupPolicyResponse
   */
  async modifyBackupPolicyWithOptions(tmpReq: $_model.ModifyBackupPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyBackupPolicyResponse> {
    tmpReq.validate();
    let request = new $_model.ModifyBackupPolicyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.advanceDataPolicies)) {
      request.advanceDataPoliciesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.advanceDataPolicies, "AdvanceDataPolicies", "json");
    }

    if (!$dara.isNull(tmpReq.advanceIncPolicies)) {
      request.advanceIncPoliciesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.advanceIncPolicies, "AdvanceIncPolicies", "json");
    }

    if (!$dara.isNull(tmpReq.advanceLogPolicies)) {
      request.advanceLogPoliciesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.advanceLogPolicies, "AdvanceLogPolicies", "json");
    }

    let query = { };
    if (!$dara.isNull(request.advanceDataPoliciesShrink)) {
      query["AdvanceDataPolicies"] = request.advanceDataPoliciesShrink;
    }

    if (!$dara.isNull(request.advanceIncPoliciesShrink)) {
      query["AdvanceIncPolicies"] = request.advanceIncPoliciesShrink;
    }

    if (!$dara.isNull(request.advanceLogPoliciesShrink)) {
      query["AdvanceLogPolicies"] = request.advanceLogPoliciesShrink;
    }

    if (!$dara.isNull(request.backupMethod)) {
      query["BackupMethod"] = request.backupMethod;
    }

    if (!$dara.isNull(request.backupPriority)) {
      query["BackupPriority"] = request.backupPriority;
    }

    if (!$dara.isNull(request.backupRetentionPolicyOnClusterDeletion)) {
      query["BackupRetentionPolicyOnClusterDeletion"] = request.backupRetentionPolicyOnClusterDeletion;
    }

    if (!$dara.isNull(request.category)) {
      query["Category"] = request.category;
    }

    if (!$dara.isNull(request.enableIncBackup)) {
      query["EnableIncBackup"] = request.enableIncBackup;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.preferredBackupWindowBegin)) {
      query["PreferredBackupWindowBegin"] = request.preferredBackupWindowBegin;
    }

    if (!$dara.isNull(request.regionCode)) {
      query["RegionCode"] = request.regionCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyBackupPolicy",
      version: "2021-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyBackupPolicyResponse>(await this.callApi(params, req, runtime), new $_model.ModifyBackupPolicyResponse({}));
  }

  /**
   * Modifies the backup policy of a PolarDB instance.
   * 
   * @remarks
   * ### [](#)Supported database engines
   * PolarDB for MySQL
   * >  This API operation is available only to specific customers. If you want to call this API operation, join the Database Backup (DBS) DingTalk group (ID 35585947) for customer consultation to request permissions.
   * 
   * @param request - ModifyBackupPolicyRequest
   * @returns ModifyBackupPolicyResponse
   */
  async modifyBackupPolicy(request: $_model.ModifyBackupPolicyRequest): Promise<$_model.ModifyBackupPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyBackupPolicyWithOptions(request, runtime);
  }

  /**
   * 修改库表恢复状态
   * 
   * @param request - ModifyDBTablesRecoveryStateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBTablesRecoveryStateResponse
   */
  async modifyDBTablesRecoveryStateWithOptions(request: $_model.ModifyDBTablesRecoveryStateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBTablesRecoveryStateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.category)) {
      query["Category"] = request.category;
    }

    if (!$dara.isNull(request.clusterName)) {
      query["ClusterName"] = request.clusterName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionCode)) {
      query["RegionCode"] = request.regionCode;
    }

    if (!$dara.isNull(request.retention)) {
      query["Retention"] = request.retention;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDBTablesRecoveryState",
      version: "2021-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDBTablesRecoveryStateResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDBTablesRecoveryStateResponse({}));
  }

  /**
   * 修改库表恢复状态
   * 
   * @param request - ModifyDBTablesRecoveryStateRequest
   * @returns ModifyDBTablesRecoveryStateResponse
   */
  async modifyDBTablesRecoveryState(request: $_model.ModifyDBTablesRecoveryStateRequest): Promise<$_model.ModifyDBTablesRecoveryStateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBTablesRecoveryStateWithOptions(request, runtime);
  }

  /**
   * 重试高级下载任务
   * 
   * @param request - RetryDownloadTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RetryDownloadTaskResponse
   */
  async retryDownloadTaskWithOptions(request: $_model.RetryDownloadTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RetryDownloadTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterName)) {
      query["ClusterName"] = request.clusterName;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.regionCode)) {
      query["RegionCode"] = request.regionCode;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RetryDownloadTask",
      version: "2021-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RetryDownloadTaskResponse>(await this.callApi(params, req, runtime), new $_model.RetryDownloadTaskResponse({}));
  }

  /**
   * 重试高级下载任务
   * 
   * @param request - RetryDownloadTaskRequest
   * @returns RetryDownloadTaskResponse
   */
  async retryDownloadTask(request: $_model.RetryDownloadTaskRequest): Promise<$_model.RetryDownloadTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.retryDownloadTaskWithOptions(request, runtime);
  }

  /**
   * 查询是否支持库表恢复
   * 
   * @param request - SupportDBTableRecoveryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SupportDBTableRecoveryResponse
   */
  async supportDBTableRecoveryWithOptions(request: $_model.SupportDBTableRecoveryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SupportDBTableRecoveryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterName)) {
      query["ClusterName"] = request.clusterName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionCode)) {
      query["RegionCode"] = request.regionCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SupportDBTableRecovery",
      version: "2021-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SupportDBTableRecoveryResponse>(await this.callApi(params, req, runtime), new $_model.SupportDBTableRecoveryResponse({}));
  }

  /**
   * 查询是否支持库表恢复
   * 
   * @param request - SupportDBTableRecoveryRequest
   * @returns SupportDBTableRecoveryResponse
   */
  async supportDBTableRecovery(request: $_model.SupportDBTableRecoveryRequest): Promise<$_model.SupportDBTableRecoveryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.supportDBTableRecoveryWithOptions(request, runtime);
  }

}
