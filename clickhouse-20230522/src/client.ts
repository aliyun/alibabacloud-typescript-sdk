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
      'ap-northeast-2-pop': "clickhouse.aliyuncs.com",
      'ap-southeast-1': "clickhouse.aliyuncs.com",
      'cn-beijing': "clickhouse.aliyuncs.com",
      'cn-beijing-finance-1': "clickhouse.aliyuncs.com",
      'cn-beijing-finance-pop': "clickhouse.aliyuncs.com",
      'cn-beijing-gov-1': "clickhouse.aliyuncs.com",
      'cn-beijing-nu16-b01': "clickhouse.aliyuncs.com",
      'cn-edge-1': "clickhouse.aliyuncs.com",
      'cn-fujian': "clickhouse.aliyuncs.com",
      'cn-haidian-cm12-c01': "clickhouse.aliyuncs.com",
      'cn-hangzhou': "clickhouse.aliyuncs.com",
      'cn-hangzhou-bj-b01': "clickhouse.aliyuncs.com",
      'cn-hangzhou-finance': "clickhouse.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "clickhouse.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "clickhouse.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "clickhouse.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "clickhouse.aliyuncs.com",
      'cn-hangzhou-test-306': "clickhouse.aliyuncs.com",
      'cn-hongkong': "clickhouse.aliyuncs.com",
      'cn-hongkong-finance-pop': "clickhouse.aliyuncs.com",
      'cn-north-2-gov-1': "clickhouse.aliyuncs.com",
      'cn-qingdao': "clickhouse.aliyuncs.com",
      'cn-qingdao-nebula': "clickhouse.aliyuncs.com",
      'cn-shanghai': "clickhouse.aliyuncs.com",
      'cn-shanghai-et15-b01': "clickhouse.aliyuncs.com",
      'cn-shanghai-et2-b01': "clickhouse.aliyuncs.com",
      'cn-shanghai-finance-1': "clickhouse.aliyuncs.com",
      'cn-shanghai-inner': "clickhouse.aliyuncs.com",
      'cn-shanghai-internal-test-1': "clickhouse.aliyuncs.com",
      'cn-shenzhen': "clickhouse.aliyuncs.com",
      'cn-shenzhen-finance-1': "clickhouse.aliyuncs.com",
      'cn-shenzhen-inner': "clickhouse.aliyuncs.com",
      'cn-shenzhen-st4-d01': "clickhouse.aliyuncs.com",
      'cn-shenzhen-su18-b01': "clickhouse.aliyuncs.com",
      'cn-wuhan': "clickhouse.aliyuncs.com",
      'cn-yushanfang': "clickhouse.aliyuncs.com",
      'cn-zhangbei-na61-b01': "clickhouse.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "clickhouse.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "clickhouse.aliyuncs.com",
      'eu-west-1-oxs': "clickhouse.aliyuncs.com",
      'me-east-1': "clickhouse.aliyuncs.com",
      'rus-west-1-pop': "clickhouse.aliyuncs.com",
      'us-east-1': "clickhouse.aliyuncs.com",
      'us-west-1': "clickhouse.aliyuncs.com",
      'me-central-1': "clickhouse.me-central-1.aliyuncs.com",
      'eu-west-1': "clickhouse.eu-west-1.aliyuncs.com",
      'eu-central-1': "clickhouse.eu-central-1.aliyuncs.com",
      'cn-zhangjiakou': "clickhouse.cn-zhangjiakou.aliyuncs.com",
      'cn-wulanchabu': "clickhouse.aliyuncs.com",
      'cn-huhehaote': "clickhouse.cn-huhehaote.aliyuncs.com",
      'cn-guangzhou': "clickhouse.cn-guangzhou.aliyuncs.com",
      'cn-chengdu': "clickhouse.cn-chengdu.aliyuncs.com",
      'ap-southeast-6': "clickhouse.ap-southeast-6.aliyuncs.com",
      'ap-southeast-5': "clickhouse.ap-southeast-5.aliyuncs.com",
      'ap-southeast-3': "clickhouse.aliyuncs.com",
      'ap-northeast-1': "clickhouse.ap-northeast-1.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("clickhouse", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Attaches a whitelist template to instances.
   * 
   * @param request - AttachWhitelistTemplateToInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AttachWhitelistTemplateToInstanceResponse
   */
  async attachWhitelistTemplateToInstanceWithOptions(request: $_model.AttachWhitelistTemplateToInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AttachWhitelistTemplateToInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AttachWhitelistTemplateToInstance",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AttachWhitelistTemplateToInstanceResponse>(await this.callApi(params, req, runtime), new $_model.AttachWhitelistTemplateToInstanceResponse({}));
  }

  /**
   * Attaches a whitelist template to instances.
   * 
   * @param request - AttachWhitelistTemplateToInstanceRequest
   * @returns AttachWhitelistTemplateToInstanceResponse
   */
  async attachWhitelistTemplateToInstance(request: $_model.AttachWhitelistTemplateToInstanceRequest): Promise<$_model.AttachWhitelistTemplateToInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.attachWhitelistTemplateToInstanceWithOptions(request, runtime);
  }

  /**
   * Changes the resource group of a ClickHouse Enterprise instance.
   * 
   * @param request - ChangeResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroupWithOptions(request: $_model.ChangeResourceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChangeResourceGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceRegionId)) {
      query["ResourceRegionId"] = request.resourceRegionId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChangeResourceGroup",
      version: "2023-05-22",
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
   * Changes the resource group of a ClickHouse Enterprise instance.
   * 
   * @param request - ChangeResourceGroupRequest
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroup(request: $_model.ChangeResourceGroupRequest): Promise<$_model.ChangeResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.changeResourceGroupWithOptions(request, runtime);
  }

  /**
   * Creates a database account for an ApsaraDB for ClickHouse Enterprise Edition cluster.
   * 
   * @param tmpReq - CreateAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAccountResponse
   */
  async createAccountWithOptions(tmpReq: $_model.CreateAccountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAccountResponse> {
    tmpReq.validate();
    let request = new $_model.CreateAccountShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.dmlAuthSetting)) {
      request.dmlAuthSettingShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.dmlAuthSetting, "DmlAuthSetting", "json");
    }

    let query = { };
    if (!$dara.isNull(request.account)) {
      query["Account"] = request.account;
    }

    if (!$dara.isNull(request.accountType)) {
      query["AccountType"] = request.accountType;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.dmlAuthSettingShrink)) {
      query["DmlAuthSetting"] = request.dmlAuthSettingShrink;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.product)) {
      query["Product"] = request.product;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAccount",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAccountResponse>(await this.callApi(params, req, runtime), new $_model.CreateAccountResponse({}));
  }

  /**
   * Creates a database account for an ApsaraDB for ClickHouse Enterprise Edition cluster.
   * 
   * @param request - CreateAccountRequest
   * @returns CreateAccountResponse
   */
  async createAccount(request: $_model.CreateAccountRequest): Promise<$_model.CreateAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAccountWithOptions(request, runtime);
  }

  /**
   * Creates a backup policy for a specified ClickHouse Enterprise Edition cluster.
   * 
   * @param request - CreateBackupPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateBackupPolicyResponse
   */
  async createBackupPolicyWithOptions(request: $_model.CreateBackupPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateBackupPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupRetentionPeriod)) {
      query["BackupRetentionPeriod"] = request.backupRetentionPeriod;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.preferredBackupPeriod)) {
      query["PreferredBackupPeriod"] = request.preferredBackupPeriod;
    }

    if (!$dara.isNull(request.preferredBackupTime)) {
      query["PreferredBackupTime"] = request.preferredBackupTime;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateBackupPolicy",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateBackupPolicyResponse>(await this.callApi(params, req, runtime), new $_model.CreateBackupPolicyResponse({}));
  }

  /**
   * Creates a backup policy for a specified ClickHouse Enterprise Edition cluster.
   * 
   * @param request - CreateBackupPolicyRequest
   * @returns CreateBackupPolicyResponse
   */
  async createBackupPolicy(request: $_model.CreateBackupPolicyRequest): Promise<$_model.CreateBackupPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createBackupPolicyWithOptions(request, runtime);
  }

  /**
   * Creates a database.
   * 
   * @param request - CreateDBRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDBResponse
   */
  async createDBWithOptions(request: $_model.CreateDBRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDBResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.comment)) {
      query["Comment"] = request.comment;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.DBName)) {
      query["DBName"] = request.DBName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDB",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDBResponse>(await this.callApi(params, req, runtime), new $_model.CreateDBResponse({}));
  }

  /**
   * Creates a database.
   * 
   * @param request - CreateDBRequest
   * @returns CreateDBResponse
   */
  async createDB(request: $_model.CreateDBRequest): Promise<$_model.CreateDBResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDBWithOptions(request, runtime);
  }

  /**
   * To create a ClickHouse Enterprise Edition cluster, call the `CreateDBInstance` API.
   * 
   * @param tmpReq - CreateDBInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDBInstanceResponse
   */
  async createDBInstanceWithOptions(tmpReq: $_model.CreateDBInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDBInstanceResponse> {
    tmpReq.validate();
    let request = new $_model.CreateDBInstanceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.multiZone)) {
      request.multiZoneShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.multiZone, "MultiZone", "json");
    }

    let query = { };
    if (!$dara.isNull(request.backupSetId)) {
      query["BackupSetId"] = request.backupSetId;
    }

    if (!$dara.isNull(request.category)) {
      query["Category"] = request.category;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.DBInstanceDescription)) {
      query["DBInstanceDescription"] = request.DBInstanceDescription;
    }

    if (!$dara.isNull(request.DBTimeZone)) {
      query["DBTimeZone"] = request.DBTimeZone;
    }

    if (!$dara.isNull(request.deploySchema)) {
      query["DeploySchema"] = request.deploySchema;
    }

    if (!$dara.isNull(request.engine)) {
      query["Engine"] = request.engine;
    }

    if (!$dara.isNull(request.engineVersion)) {
      query["EngineVersion"] = request.engineVersion;
    }

    if (!$dara.isNull(request.multiZoneShrink)) {
      query["MultiZone"] = request.multiZoneShrink;
    }

    if (!$dara.isNull(request.nodeCount)) {
      query["NodeCount"] = request.nodeCount;
    }

    if (!$dara.isNull(request.nodeScaleMax)) {
      query["NodeScaleMax"] = request.nodeScaleMax;
    }

    if (!$dara.isNull(request.nodeScaleMin)) {
      query["NodeScaleMin"] = request.nodeScaleMin;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.scaleMax)) {
      query["ScaleMax"] = request.scaleMax;
    }

    if (!$dara.isNull(request.scaleMin)) {
      query["ScaleMin"] = request.scaleMin;
    }

    if (!$dara.isNull(request.sourceDBInstanceId)) {
      query["SourceDBInstanceId"] = request.sourceDBInstanceId;
    }

    if (!$dara.isNull(request.storageQuota)) {
      query["StorageQuota"] = request.storageQuota;
    }

    if (!$dara.isNull(request.storageType)) {
      query["StorageType"] = request.storageType;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    if (!$dara.isNull(request.vswitchId)) {
      query["VswitchId"] = request.vswitchId;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDBInstance",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDBInstanceResponse>(await this.callApi(params, req, runtime), new $_model.CreateDBInstanceResponse({}));
  }

  /**
   * To create a ClickHouse Enterprise Edition cluster, call the `CreateDBInstance` API.
   * 
   * @param request - CreateDBInstanceRequest
   * @returns CreateDBInstanceResponse
   */
  async createDBInstance(request: $_model.CreateDBInstanceRequest): Promise<$_model.CreateDBInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDBInstanceWithOptions(request, runtime);
  }

  /**
   * Creates a public endpoint that provides a public address to access a cluster.
   * 
   * @param request - CreateEndpointRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateEndpointResponse
   */
  async createEndpointWithOptions(request: $_model.CreateEndpointRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateEndpointResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.computingGroupId)) {
      query["ComputingGroupId"] = request.computingGroupId;
    }

    if (!$dara.isNull(request.connectionPrefix)) {
      query["ConnectionPrefix"] = request.connectionPrefix;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.DBInstanceNetType)) {
      query["DBInstanceNetType"] = request.DBInstanceNetType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateEndpoint",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateEndpointResponse>(await this.callApi(params, req, runtime), new $_model.CreateEndpointResponse({}));
  }

  /**
   * Creates a public endpoint that provides a public address to access a cluster.
   * 
   * @param request - CreateEndpointRequest
   * @returns CreateEndpointResponse
   */
  async createEndpoint(request: $_model.CreateEndpointRequest): Promise<$_model.CreateEndpointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createEndpointWithOptions(request, runtime);
  }

  /**
   * Creates a Langfuse organization.
   * 
   * @param request - CreateLangfuseOrgRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateLangfuseOrgResponse
   */
  async createLangfuseOrgWithOptions(request: $_model.CreateLangfuseOrgRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateLangfuseOrgResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.ownerEmail)) {
      query["OwnerEmail"] = request.ownerEmail;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateLangfuseOrg",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateLangfuseOrgResponse>(await this.callApi(params, req, runtime), new $_model.CreateLangfuseOrgResponse({}));
  }

  /**
   * Creates a Langfuse organization.
   * 
   * @param request - CreateLangfuseOrgRequest
   * @returns CreateLangfuseOrgResponse
   */
  async createLangfuseOrg(request: $_model.CreateLangfuseOrgRequest): Promise<$_model.CreateLangfuseOrgResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createLangfuseOrgWithOptions(request, runtime);
  }

  /**
   * Adds a user to a Langfuse organization.
   * 
   * @param request - CreateLangfuseOrgMemberRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateLangfuseOrgMemberResponse
   */
  async createLangfuseOrgMemberWithOptions(request: $_model.CreateLangfuseOrgMemberRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateLangfuseOrgMemberResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.email)) {
      query["Email"] = request.email;
    }

    if (!$dara.isNull(request.organizationId)) {
      query["OrganizationId"] = request.organizationId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.role)) {
      query["Role"] = request.role;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateLangfuseOrgMember",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateLangfuseOrgMemberResponse>(await this.callApi(params, req, runtime), new $_model.CreateLangfuseOrgMemberResponse({}));
  }

  /**
   * Adds a user to a Langfuse organization.
   * 
   * @param request - CreateLangfuseOrgMemberRequest
   * @returns CreateLangfuseOrgMemberResponse
   */
  async createLangfuseOrgMember(request: $_model.CreateLangfuseOrgMemberRequest): Promise<$_model.CreateLangfuseOrgMemberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createLangfuseOrgMemberWithOptions(request, runtime);
  }

  /**
   * Creates a Langfuse project.
   * 
   * @param request - CreateLangfuseProjectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateLangfuseProjectResponse
   */
  async createLangfuseProjectWithOptions(request: $_model.CreateLangfuseProjectRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateLangfuseProjectResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.organizationId)) {
      query["OrganizationId"] = request.organizationId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateLangfuseProject",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateLangfuseProjectResponse>(await this.callApi(params, req, runtime), new $_model.CreateLangfuseProjectResponse({}));
  }

  /**
   * Creates a Langfuse project.
   * 
   * @param request - CreateLangfuseProjectRequest
   * @returns CreateLangfuseProjectResponse
   */
  async createLangfuseProject(request: $_model.CreateLangfuseProjectRequest): Promise<$_model.CreateLangfuseProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createLangfuseProjectWithOptions(request, runtime);
  }

  /**
   * Creates a Langfuse user.
   * 
   * @param request - CreateLangfuseUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateLangfuseUserResponse
   */
  async createLangfuseUserWithOptions(request: $_model.CreateLangfuseUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateLangfuseUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.email)) {
      query["Email"] = request.email;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.orgRole)) {
      query["OrgRole"] = request.orgRole;
    }

    if (!$dara.isNull(request.organizationId)) {
      query["OrganizationId"] = request.organizationId;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateLangfuseUser",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateLangfuseUserResponse>(await this.callApi(params, req, runtime), new $_model.CreateLangfuseUserResponse({}));
  }

  /**
   * Creates a Langfuse user.
   * 
   * @param request - CreateLangfuseUserRequest
   * @returns CreateLangfuseUserResponse
   */
  async createLangfuseUser(request: $_model.CreateLangfuseUserRequest): Promise<$_model.CreateLangfuseUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createLangfuseUserWithOptions(request, runtime);
  }

  /**
   * Creates a whitelist template.
   * 
   * @param request - CreateWhitelistTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateWhitelistTemplateResponse
   */
  async createWhitelistTemplateWithOptions(request: $_model.CreateWhitelistTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateWhitelistTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.securityIPList)) {
      body["SecurityIPList"] = request.securityIPList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateWhitelistTemplate",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateWhitelistTemplateResponse>(await this.callApi(params, req, runtime), new $_model.CreateWhitelistTemplateResponse({}));
  }

  /**
   * Creates a whitelist template.
   * 
   * @param request - CreateWhitelistTemplateRequest
   * @returns CreateWhitelistTemplateResponse
   */
  async createWhitelistTemplate(request: $_model.CreateWhitelistTemplateRequest): Promise<$_model.CreateWhitelistTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createWhitelistTemplateWithOptions(request, runtime);
  }

  /**
   * Deletes a database account from an ApsaraDB for ClickHouse cluster.
   * 
   * @param request - DeleteAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAccountResponse
   */
  async deleteAccountWithOptions(request: $_model.DeleteAccountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAccountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.account)) {
      query["Account"] = request.account;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.product)) {
      query["Product"] = request.product;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAccount",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAccountResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAccountResponse({}));
  }

  /**
   * Deletes a database account from an ApsaraDB for ClickHouse cluster.
   * 
   * @param request - DeleteAccountRequest
   * @returns DeleteAccountResponse
   */
  async deleteAccount(request: $_model.DeleteAccountRequest): Promise<$_model.DeleteAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAccountWithOptions(request, runtime);
  }

  /**
   * Deletes the backup policy for a ClickHouse Enterprise Edition cluster.
   * 
   * @param request - DeleteBackupPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteBackupPolicyResponse
   */
  async deleteBackupPolicyWithOptions(request: $_model.DeleteBackupPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteBackupPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteBackupPolicy",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteBackupPolicyResponse>(await this.callApi(params, req, runtime), new $_model.DeleteBackupPolicyResponse({}));
  }

  /**
   * Deletes the backup policy for a ClickHouse Enterprise Edition cluster.
   * 
   * @param request - DeleteBackupPolicyRequest
   * @returns DeleteBackupPolicyResponse
   */
  async deleteBackupPolicy(request: $_model.DeleteBackupPolicyRequest): Promise<$_model.DeleteBackupPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteBackupPolicyWithOptions(request, runtime);
  }

  /**
   * Call this operation to delete a database.
   * 
   * @param request - DeleteDBRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDBResponse
   */
  async deleteDBWithOptions(request: $_model.DeleteDBRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDBResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.DBName)) {
      query["DBName"] = request.DBName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDB",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDBResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDBResponse({}));
  }

  /**
   * Call this operation to delete a database.
   * 
   * @param request - DeleteDBRequest
   * @returns DeleteDBResponse
   */
  async deleteDB(request: $_model.DeleteDBRequest): Promise<$_model.DeleteDBResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDBWithOptions(request, runtime);
  }

  /**
   * The DeleteDBInstance operation releases an ApsaraDB for ClickHouse Enterprise Edition cluster.
   * 
   * @param request - DeleteDBInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDBInstanceResponse
   */
  async deleteDBInstanceWithOptions(request: $_model.DeleteDBInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDBInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDBInstance",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDBInstanceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDBInstanceResponse({}));
  }

  /**
   * The DeleteDBInstance operation releases an ApsaraDB for ClickHouse Enterprise Edition cluster.
   * 
   * @param request - DeleteDBInstanceRequest
   * @returns DeleteDBInstanceResponse
   */
  async deleteDBInstance(request: $_model.DeleteDBInstanceRequest): Promise<$_model.DeleteDBInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDBInstanceWithOptions(request, runtime);
  }

  /**
   * Deletes a public endpoint.
   * 
   * @param request - DeleteEndpointRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteEndpointResponse
   */
  async deleteEndpointWithOptions(request: $_model.DeleteEndpointRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteEndpointResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.computingGroupId)) {
      query["ComputingGroupId"] = request.computingGroupId;
    }

    if (!$dara.isNull(request.connectionString)) {
      query["ConnectionString"] = request.connectionString;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.DBInstanceNetType)) {
      query["DBInstanceNetType"] = request.DBInstanceNetType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteEndpoint",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteEndpointResponse>(await this.callApi(params, req, runtime), new $_model.DeleteEndpointResponse({}));
  }

  /**
   * Deletes a public endpoint.
   * 
   * @param request - DeleteEndpointRequest
   * @returns DeleteEndpointResponse
   */
  async deleteEndpoint(request: $_model.DeleteEndpointRequest): Promise<$_model.DeleteEndpointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteEndpointWithOptions(request, runtime);
  }

  /**
   * Releases a Langfuse instance.
   * 
   * @param request - DeleteLangfuseInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteLangfuseInstanceResponse
   */
  async deleteLangfuseInstanceWithOptions(request: $_model.DeleteLangfuseInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteLangfuseInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteLangfuseInstance",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteLangfuseInstanceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteLangfuseInstanceResponse({}));
  }

  /**
   * Releases a Langfuse instance.
   * 
   * @param request - DeleteLangfuseInstanceRequest
   * @returns DeleteLangfuseInstanceResponse
   */
  async deleteLangfuseInstance(request: $_model.DeleteLangfuseInstanceRequest): Promise<$_model.DeleteLangfuseInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteLangfuseInstanceWithOptions(request, runtime);
  }

  /**
   * Deletes a Langfuse organization.
   * 
   * @param request - DeleteLangfuseOrgRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteLangfuseOrgResponse
   */
  async deleteLangfuseOrgWithOptions(request: $_model.DeleteLangfuseOrgRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteLangfuseOrgResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.organizationId)) {
      query["OrganizationId"] = request.organizationId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteLangfuseOrg",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteLangfuseOrgResponse>(await this.callApi(params, req, runtime), new $_model.DeleteLangfuseOrgResponse({}));
  }

  /**
   * Deletes a Langfuse organization.
   * 
   * @param request - DeleteLangfuseOrgRequest
   * @returns DeleteLangfuseOrgResponse
   */
  async deleteLangfuseOrg(request: $_model.DeleteLangfuseOrgRequest): Promise<$_model.DeleteLangfuseOrgResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteLangfuseOrgWithOptions(request, runtime);
  }

  /**
   * Removes a user from a Langfuse organization.
   * 
   * @param request - DeleteLangfuseOrgMembershipRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteLangfuseOrgMembershipResponse
   */
  async deleteLangfuseOrgMembershipWithOptions(request: $_model.DeleteLangfuseOrgMembershipRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteLangfuseOrgMembershipResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.email)) {
      query["Email"] = request.email;
    }

    if (!$dara.isNull(request.organizationId)) {
      query["OrganizationId"] = request.organizationId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteLangfuseOrgMembership",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteLangfuseOrgMembershipResponse>(await this.callApi(params, req, runtime), new $_model.DeleteLangfuseOrgMembershipResponse({}));
  }

  /**
   * Removes a user from a Langfuse organization.
   * 
   * @param request - DeleteLangfuseOrgMembershipRequest
   * @returns DeleteLangfuseOrgMembershipResponse
   */
  async deleteLangfuseOrgMembership(request: $_model.DeleteLangfuseOrgMembershipRequest): Promise<$_model.DeleteLangfuseOrgMembershipResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteLangfuseOrgMembershipWithOptions(request, runtime);
  }

  /**
   * Deletes a Langfuse project.
   * 
   * @param request - DeleteLangfuseProjectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteLangfuseProjectResponse
   */
  async deleteLangfuseProjectWithOptions(request: $_model.DeleteLangfuseProjectRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteLangfuseProjectResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.organizationId)) {
      query["OrganizationId"] = request.organizationId;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteLangfuseProject",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteLangfuseProjectResponse>(await this.callApi(params, req, runtime), new $_model.DeleteLangfuseProjectResponse({}));
  }

  /**
   * Deletes a Langfuse project.
   * 
   * @param request - DeleteLangfuseProjectRequest
   * @returns DeleteLangfuseProjectResponse
   */
  async deleteLangfuseProject(request: $_model.DeleteLangfuseProjectRequest): Promise<$_model.DeleteLangfuseProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteLangfuseProjectWithOptions(request, runtime);
  }

  /**
   * Deletes a Langfuse user.
   * 
   * @param request - DeleteLangfuseUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteLangfuseUserResponse
   */
  async deleteLangfuseUserWithOptions(request: $_model.DeleteLangfuseUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteLangfuseUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.email)) {
      query["Email"] = request.email;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteLangfuseUser",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteLangfuseUserResponse>(await this.callApi(params, req, runtime), new $_model.DeleteLangfuseUserResponse({}));
  }

  /**
   * Deletes a Langfuse user.
   * 
   * @param request - DeleteLangfuseUserRequest
   * @returns DeleteLangfuseUserResponse
   */
  async deleteLangfuseUser(request: $_model.DeleteLangfuseUserRequest): Promise<$_model.DeleteLangfuseUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteLangfuseUserWithOptions(request, runtime);
  }

  /**
   * Deletes a whitelist template.
   * 
   * @param request - DeleteWhitelistTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteWhitelistTemplateResponse
   */
  async deleteWhitelistTemplateWithOptions(request: $_model.DeleteWhitelistTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteWhitelistTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteWhitelistTemplate",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteWhitelistTemplateResponse>(await this.callApi(params, req, runtime), new $_model.DeleteWhitelistTemplateResponse({}));
  }

  /**
   * Deletes a whitelist template.
   * 
   * @param request - DeleteWhitelistTemplateRequest
   * @returns DeleteWhitelistTemplateResponse
   */
  async deleteWhitelistTemplate(request: $_model.DeleteWhitelistTemplateRequest): Promise<$_model.DeleteWhitelistTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteWhitelistTemplateWithOptions(request, runtime);
  }

  /**
   * Call the DescribeAccountAuthority operation to query the permissions of an account.
   * 
   * @param request - DescribeAccountAuthorityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAccountAuthorityResponse
   */
  async describeAccountAuthorityWithOptions(request: $_model.DescribeAccountAuthorityRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAccountAuthorityResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.account)) {
      query["Account"] = request.account;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAccountAuthority",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAccountAuthorityResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAccountAuthorityResponse({}));
  }

  /**
   * Call the DescribeAccountAuthority operation to query the permissions of an account.
   * 
   * @param request - DescribeAccountAuthorityRequest
   * @returns DescribeAccountAuthorityResponse
   */
  async describeAccountAuthority(request: $_model.DescribeAccountAuthorityRequest): Promise<$_model.DescribeAccountAuthorityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAccountAuthorityWithOptions(request, runtime);
  }

  /**
   * Queries database accounts for an ApsaraDB for ClickHouse cluster.
   * 
   * @param request - DescribeAccountsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAccountsResponse
   */
  async describeAccountsWithOptions(request: $_model.DescribeAccountsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAccountsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.product)) {
      query["Product"] = request.product;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAccounts",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAccountsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAccountsResponse({}));
  }

  /**
   * Queries database accounts for an ApsaraDB for ClickHouse cluster.
   * 
   * @param request - DescribeAccountsRequest
   * @returns DescribeAccountsResponse
   */
  async describeAccounts(request: $_model.DescribeAccountsRequest): Promise<$_model.DescribeAccountsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAccountsWithOptions(request, runtime);
  }

  /**
   * Queries the backup policy of a ClickHouse Enterprise Edition cluster.
   * 
   * @param request - DescribeBackupPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBackupPolicyResponse
   */
  async describeBackupPolicyWithOptions(request: $_model.DescribeBackupPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeBackupPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeBackupPolicy",
      version: "2023-05-22",
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
   * Queries the backup policy of a ClickHouse Enterprise Edition cluster.
   * 
   * @param request - DescribeBackupPolicyRequest
   * @returns DescribeBackupPolicyResponse
   */
  async describeBackupPolicy(request: $_model.DescribeBackupPolicyRequest): Promise<$_model.DescribeBackupPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeBackupPolicyWithOptions(request, runtime);
  }

  /**
   * Queries the backup sets of a ClickHouse Enterprise Edition cluster.
   * 
   * @param request - DescribeBackupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBackupsResponse
   */
  async describeBackupsWithOptions(request: $_model.DescribeBackupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeBackupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupId)) {
      query["BackupId"] = request.backupId;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeBackups",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeBackupsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeBackupsResponse({}));
  }

  /**
   * Queries the backup sets of a ClickHouse Enterprise Edition cluster.
   * 
   * @param request - DescribeBackupsRequest
   * @returns DescribeBackupsResponse
   */
  async describeBackups(request: $_model.DescribeBackupsRequest): Promise<$_model.DescribeBackupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeBackupsWithOptions(request, runtime);
  }

  /**
   * Call DescribeDBInstanceAttribute to query the details of an ApsaraDB for ClickHouse enterprise edition cluster.
   * 
   * @param request - DescribeDBInstanceAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBInstanceAttributeResponse
   */
  async describeDBInstanceAttributeWithOptions(request: $_model.DescribeDBInstanceAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBInstanceAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDBInstanceAttribute",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDBInstanceAttributeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDBInstanceAttributeResponse({}));
  }

  /**
   * Call DescribeDBInstanceAttribute to query the details of an ApsaraDB for ClickHouse enterprise edition cluster.
   * 
   * @param request - DescribeDBInstanceAttributeRequest
   * @returns DescribeDBInstanceAttributeResponse
   */
  async describeDBInstanceAttribute(request: $_model.DescribeDBInstanceAttributeRequest): Promise<$_model.DescribeDBInstanceAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBInstanceAttributeWithOptions(request, runtime);
  }

  /**
   * Queries the parameter configuration of an instance
   * 
   * @param request - DescribeDBInstanceConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBInstanceConfigResponse
   */
  async describeDBInstanceConfigWithOptions(request: $_model.DescribeDBInstanceConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBInstanceConfigResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDBInstanceConfig",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDBInstanceConfigResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDBInstanceConfigResponse({}));
  }

  /**
   * Queries the parameter configuration of an instance
   * 
   * @param request - DescribeDBInstanceConfigRequest
   * @returns DescribeDBInstanceConfigResponse
   */
  async describeDBInstanceConfig(request: $_model.DescribeDBInstanceConfigRequest): Promise<$_model.DescribeDBInstanceConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBInstanceConfigWithOptions(request, runtime);
  }

  /**
   * Queries the parameter configuration records of an instance
   * 
   * @param request - DescribeDBInstanceConfigChangeLogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBInstanceConfigChangeLogResponse
   */
  async describeDBInstanceConfigChangeLogWithOptions(request: $_model.DescribeDBInstanceConfigChangeLogRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBInstanceConfigChangeLogResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDBInstanceConfigChangeLog",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDBInstanceConfigChangeLogResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDBInstanceConfigChangeLogResponse({}));
  }

  /**
   * Queries the parameter configuration records of an instance
   * 
   * @param request - DescribeDBInstanceConfigChangeLogRequest
   * @returns DescribeDBInstanceConfigChangeLogResponse
   */
  async describeDBInstanceConfigChangeLog(request: $_model.DescribeDBInstanceConfigChangeLogRequest): Promise<$_model.DescribeDBInstanceConfigChangeLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBInstanceConfigChangeLogWithOptions(request, runtime);
  }

  /**
   * Queries the schema of a database or a table.
   * 
   * @param request - DescribeDBInstanceDataSourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBInstanceDataSourcesResponse
   */
  async describeDBInstanceDataSourcesWithOptions(request: $_model.DescribeDBInstanceDataSourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBInstanceDataSourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.DBName)) {
      query["DBName"] = request.DBName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDBInstanceDataSources",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDBInstanceDataSourcesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDBInstanceDataSourcesResponse({}));
  }

  /**
   * Queries the schema of a database or a table.
   * 
   * @param request - DescribeDBInstanceDataSourcesRequest
   * @returns DescribeDBInstanceDataSourcesResponse
   */
  async describeDBInstanceDataSources(request: $_model.DescribeDBInstanceDataSourcesRequest): Promise<$_model.DescribeDBInstanceDataSourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBInstanceDataSourcesWithOptions(request, runtime);
  }

  /**
   * Call the DescribeDBInstances API to query a list of DB instances.
   * 
   * @param request - DescribeDBInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBInstancesResponse
   */
  async describeDBInstancesWithOptions(request: $_model.DescribeDBInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceIds)) {
      query["DBInstanceIds"] = request.DBInstanceIds;
    }

    if (!$dara.isNull(request.DBInstanceStatus)) {
      query["DBInstanceStatus"] = request.DBInstanceStatus;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!$dara.isNull(request.vpcIds)) {
      query["VpcIds"] = request.vpcIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDBInstances",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDBInstancesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDBInstancesResponse({}));
  }

  /**
   * Call the DescribeDBInstances API to query a list of DB instances.
   * 
   * @param request - DescribeDBInstancesRequest
   * @returns DescribeDBInstancesResponse
   */
  async describeDBInstances(request: $_model.DescribeDBInstancesRequest): Promise<$_model.DescribeDBInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBInstancesWithOptions(request, runtime);
  }

  /**
   * To retrieve the cluster endpoints, call DescribeEndpoints.
   * 
   * @param request - DescribeEndpointsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEndpointsResponse
   */
  async describeEndpointsWithOptions(request: $_model.DescribeEndpointsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeEndpointsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.computingGroupId)) {
      query["ComputingGroupId"] = request.computingGroupId;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeEndpoints",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeEndpointsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeEndpointsResponse({}));
  }

  /**
   * To retrieve the cluster endpoints, call DescribeEndpoints.
   * 
   * @param request - DescribeEndpointsRequest
   * @returns DescribeEndpointsResponse
   */
  async describeEndpoints(request: $_model.DescribeEndpointsRequest): Promise<$_model.DescribeEndpointsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeEndpointsWithOptions(request, runtime);
  }

  /**
   * Queries the access endpoint of a Langfuse instance.
   * 
   * @param request - DescribeLangfuseEndpointsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeLangfuseEndpointsResponse
   */
  async describeLangfuseEndpointsWithOptions(request: $_model.DescribeLangfuseEndpointsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeLangfuseEndpointsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeLangfuseEndpoints",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeLangfuseEndpointsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeLangfuseEndpointsResponse({}));
  }

  /**
   * Queries the access endpoint of a Langfuse instance.
   * 
   * @param request - DescribeLangfuseEndpointsRequest
   * @returns DescribeLangfuseEndpointsResponse
   */
  async describeLangfuseEndpoints(request: $_model.DescribeLangfuseEndpointsRequest): Promise<$_model.DescribeLangfuseEndpointsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeLangfuseEndpointsWithOptions(request, runtime);
  }

  /**
   * Queries the member information of a Langfuse organization.
   * 
   * @param request - DescribeLangfuseOrgMembershipsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeLangfuseOrgMembershipsResponse
   */
  async describeLangfuseOrgMembershipsWithOptions(request: $_model.DescribeLangfuseOrgMembershipsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeLangfuseOrgMembershipsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.organizationId)) {
      query["OrganizationId"] = request.organizationId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeLangfuseOrgMemberships",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeLangfuseOrgMembershipsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeLangfuseOrgMembershipsResponse({}));
  }

  /**
   * Queries the member information of a Langfuse organization.
   * 
   * @param request - DescribeLangfuseOrgMembershipsRequest
   * @returns DescribeLangfuseOrgMembershipsResponse
   */
  async describeLangfuseOrgMemberships(request: $_model.DescribeLangfuseOrgMembershipsRequest): Promise<$_model.DescribeLangfuseOrgMembershipsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeLangfuseOrgMembershipsWithOptions(request, runtime);
  }

  /**
   * 查询Langfuse实例组织列表
   * 
   * @param request - DescribeLangfuseOrgsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeLangfuseOrgsResponse
   */
  async describeLangfuseOrgsWithOptions(request: $_model.DescribeLangfuseOrgsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeLangfuseOrgsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeLangfuseOrgs",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeLangfuseOrgsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeLangfuseOrgsResponse({}));
  }

  /**
   * 查询Langfuse实例组织列表
   * 
   * @param request - DescribeLangfuseOrgsRequest
   * @returns DescribeLangfuseOrgsResponse
   */
  async describeLangfuseOrgs(request: $_model.DescribeLangfuseOrgsRequest): Promise<$_model.DescribeLangfuseOrgsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeLangfuseOrgsWithOptions(request, runtime);
  }

  /**
   * Queries user roles in a Langfuse project.
   * 
   * @param request - DescribeLangfuseProjectMembershipsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeLangfuseProjectMembershipsResponse
   */
  async describeLangfuseProjectMembershipsWithOptions(request: $_model.DescribeLangfuseProjectMembershipsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeLangfuseProjectMembershipsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.organizationId)) {
      query["OrganizationId"] = request.organizationId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeLangfuseProjectMemberships",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeLangfuseProjectMembershipsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeLangfuseProjectMembershipsResponse({}));
  }

  /**
   * Queries user roles in a Langfuse project.
   * 
   * @param request - DescribeLangfuseProjectMembershipsRequest
   * @returns DescribeLangfuseProjectMembershipsResponse
   */
  async describeLangfuseProjectMemberships(request: $_model.DescribeLangfuseProjectMembershipsRequest): Promise<$_model.DescribeLangfuseProjectMembershipsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeLangfuseProjectMembershipsWithOptions(request, runtime);
  }

  /**
   * Queries the list of Langfuse projects.
   * 
   * @param request - DescribeLangfuseProjectsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeLangfuseProjectsResponse
   */
  async describeLangfuseProjectsWithOptions(request: $_model.DescribeLangfuseProjectsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeLangfuseProjectsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.organizationId)) {
      query["OrganizationId"] = request.organizationId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeLangfuseProjects",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeLangfuseProjectsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeLangfuseProjectsResponse({}));
  }

  /**
   * Queries the list of Langfuse projects.
   * 
   * @param request - DescribeLangfuseProjectsRequest
   * @returns DescribeLangfuseProjectsResponse
   */
  async describeLangfuseProjects(request: $_model.DescribeLangfuseProjectsRequest): Promise<$_model.DescribeLangfuseProjectsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeLangfuseProjectsWithOptions(request, runtime);
  }

  /**
   * Queries the Langfuse whitelist.
   * 
   * @param request - DescribeLangfuseSecurityIPListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeLangfuseSecurityIPListResponse
   */
  async describeLangfuseSecurityIPListWithOptions(request: $_model.DescribeLangfuseSecurityIPListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeLangfuseSecurityIPListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeLangfuseSecurityIPList",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeLangfuseSecurityIPListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeLangfuseSecurityIPListResponse({}));
  }

  /**
   * Queries the Langfuse whitelist.
   * 
   * @param request - DescribeLangfuseSecurityIPListRequest
   * @returns DescribeLangfuseSecurityIPListResponse
   */
  async describeLangfuseSecurityIPList(request: $_model.DescribeLangfuseSecurityIPListRequest): Promise<$_model.DescribeLangfuseSecurityIPListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeLangfuseSecurityIPListWithOptions(request, runtime);
  }

  /**
   * Queries the details of a Langfuse user.
   * 
   * @param request - DescribeLangfuseUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeLangfuseUserResponse
   */
  async describeLangfuseUserWithOptions(request: $_model.DescribeLangfuseUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeLangfuseUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.email)) {
      query["Email"] = request.email;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeLangfuseUser",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeLangfuseUserResponse>(await this.callApi(params, req, runtime), new $_model.DescribeLangfuseUserResponse({}));
  }

  /**
   * Queries the details of a Langfuse user.
   * 
   * @param request - DescribeLangfuseUserRequest
   * @returns DescribeLangfuseUserResponse
   */
  async describeLangfuseUser(request: $_model.DescribeLangfuseUserRequest): Promise<$_model.DescribeLangfuseUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeLangfuseUserWithOptions(request, runtime);
  }

  /**
   * Queries the list of Langfuse users.
   * 
   * @param request - DescribeLangfuseUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeLangfuseUsersResponse
   */
  async describeLangfuseUsersWithOptions(request: $_model.DescribeLangfuseUsersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeLangfuseUsersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.email)) {
      query["Email"] = request.email;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeLangfuseUsers",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeLangfuseUsersResponse>(await this.callApi(params, req, runtime), new $_model.DescribeLangfuseUsersResponse({}));
  }

  /**
   * Queries the list of Langfuse users.
   * 
   * @param request - DescribeLangfuseUsersRequest
   * @returns DescribeLangfuseUsersResponse
   */
  async describeLangfuseUsers(request: $_model.DescribeLangfuseUsersRequest): Promise<$_model.DescribeLangfuseUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeLangfuseUsersWithOptions(request, runtime);
  }

  /**
   * Describes currently running queries.
   * 
   * @param request - DescribeProcessListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeProcessListResponse
   */
  async describeProcessListWithOptions(request: $_model.DescribeProcessListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeProcessListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.computingGroupId)) {
      query["ComputingGroupId"] = request.computingGroupId;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.initialQueryId)) {
      query["InitialQueryId"] = request.initialQueryId;
    }

    if (!$dara.isNull(request.initialUser)) {
      query["InitialUser"] = request.initialUser;
    }

    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.queryDurationMs)) {
      query["QueryDurationMs"] = request.queryDurationMs;
    }

    if (!$dara.isNull(request.queryOrder)) {
      query["QueryOrder"] = request.queryOrder;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeProcessList",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeProcessListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeProcessListResponse({}));
  }

  /**
   * Describes currently running queries.
   * 
   * @param request - DescribeProcessListRequest
   * @returns DescribeProcessListResponse
   */
  async describeProcessList(request: $_model.DescribeProcessListRequest): Promise<$_model.DescribeProcessListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeProcessListWithOptions(request, runtime);
  }

  /**
   * Returns information about the available regions and zones for ApsaraDB for ClickHouse.
   * 
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRegionsResponse
   */
  async describeRegionsWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRegionsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRegions",
      version: "2023-05-22",
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
   * Returns information about the available regions and zones for ApsaraDB for ClickHouse.
   * @returns DescribeRegionsResponse
   */
  async describeRegions(): Promise<$_model.DescribeRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(runtime);
  }

  /**
   * Queries a whitelist.
   * 
   * @param request - DescribeSecurityIPListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSecurityIPListResponse
   */
  async describeSecurityIPListWithOptions(request: $_model.DescribeSecurityIPListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSecurityIPListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSecurityIPList",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSecurityIPListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSecurityIPListResponse({}));
  }

  /**
   * Queries a whitelist.
   * 
   * @param request - DescribeSecurityIPListRequest
   * @returns DescribeSecurityIPListResponse
   */
  async describeSecurityIPList(request: $_model.DescribeSecurityIPListRequest): Promise<$_model.DescribeSecurityIPListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSecurityIPListWithOptions(request, runtime);
  }

  /**
   * Call DescribeSlowLogRecords to query slow log records.
   * 
   * @param request - DescribeSlowLogRecordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSlowLogRecordsResponse
   */
  async describeSlowLogRecordsWithOptions(request: $_model.DescribeSlowLogRecordsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSlowLogRecordsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.computingGroupId)) {
      query["ComputingGroupId"] = request.computingGroupId;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.queryDurationMs)) {
      query["QueryDurationMs"] = request.queryDurationMs;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSlowLogRecords",
      version: "2023-05-22",
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
   * Call DescribeSlowLogRecords to query slow log records.
   * 
   * @param request - DescribeSlowLogRecordsRequest
   * @returns DescribeSlowLogRecordsResponse
   */
  async describeSlowLogRecords(request: $_model.DescribeSlowLogRecordsRequest): Promise<$_model.DescribeSlowLogRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSlowLogRecordsWithOptions(request, runtime);
  }

  /**
   * Queries the slow log trend.
   * 
   * @param request - DescribeSlowLogTrendRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSlowLogTrendResponse
   */
  async describeSlowLogTrendWithOptions(request: $_model.DescribeSlowLogTrendRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSlowLogTrendResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.computingGroupId)) {
      query["ComputingGroupId"] = request.computingGroupId;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.product)) {
      query["Product"] = request.product;
    }

    if (!$dara.isNull(request.queryDurationMs)) {
      query["QueryDurationMs"] = request.queryDurationMs;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSlowLogTrend",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSlowLogTrendResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSlowLogTrendResponse({}));
  }

  /**
   * Queries the slow log trend.
   * 
   * @param request - DescribeSlowLogTrendRequest
   * @returns DescribeSlowLogTrendResponse
   */
  async describeSlowLogTrend(request: $_model.DescribeSlowLogTrendRequest): Promise<$_model.DescribeSlowLogTrendResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSlowLogTrendWithOptions(request, runtime);
  }

  /**
   * Disassociate a whitelist template from an instance.
   * 
   * @param request - DetachWhitelistTemplateToInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetachWhitelistTemplateToInstanceResponse
   */
  async detachWhitelistTemplateToInstanceWithOptions(request: $_model.DetachWhitelistTemplateToInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetachWhitelistTemplateToInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetachWhitelistTemplateToInstance",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DetachWhitelistTemplateToInstanceResponse>(await this.callApi(params, req, runtime), new $_model.DetachWhitelistTemplateToInstanceResponse({}));
  }

  /**
   * Disassociate a whitelist template from an instance.
   * 
   * @param request - DetachWhitelistTemplateToInstanceRequest
   * @returns DetachWhitelistTemplateToInstanceResponse
   */
  async detachWhitelistTemplateToInstance(request: $_model.DetachWhitelistTemplateToInstanceRequest): Promise<$_model.DetachWhitelistTemplateToInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detachWhitelistTemplateToInstanceWithOptions(request, runtime);
  }

  /**
   * Queries the details of a whitelist template.
   * 
   * @param request - GetWhitelistTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetWhitelistTemplateResponse
   */
  async getWhitelistTemplateWithOptions(request: $_model.GetWhitelistTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetWhitelistTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetWhitelistTemplate",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetWhitelistTemplateResponse>(await this.callApi(params, req, runtime), new $_model.GetWhitelistTemplateResponse({}));
  }

  /**
   * Queries the details of a whitelist template.
   * 
   * @param request - GetWhitelistTemplateRequest
   * @returns GetWhitelistTemplateResponse
   */
  async getWhitelistTemplate(request: $_model.GetWhitelistTemplateRequest): Promise<$_model.GetWhitelistTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getWhitelistTemplateWithOptions(request, runtime);
  }

  /**
   * Terminates a running task.
   * 
   * @param request - KillProcessRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns KillProcessResponse
   */
  async killProcessWithOptions(request: $_model.KillProcessRequest, runtime: $dara.RuntimeOptions): Promise<$_model.KillProcessResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.computingGroupId)) {
      query["ComputingGroupId"] = request.computingGroupId;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.initialQueryId)) {
      query["InitialQueryId"] = request.initialQueryId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "KillProcess",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.KillProcessResponse>(await this.callApi(params, req, runtime), new $_model.KillProcessResponse({}));
  }

  /**
   * Terminates a running task.
   * 
   * @param request - KillProcessRequest
   * @returns KillProcessResponse
   */
  async killProcess(request: $_model.KillProcessRequest): Promise<$_model.KillProcessResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.killProcessWithOptions(request, runtime);
  }

  /**
   * Lists the available time zones for ClickHouse.
   * 
   * @param request - ListClickHouseDBTimezonesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListClickHouseDBTimezonesResponse
   */
  async listClickHouseDBTimezonesWithOptions(request: $_model.ListClickHouseDBTimezonesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListClickHouseDBTimezonesResponse> {
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
      action: "ListClickHouseDBTimezones",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListClickHouseDBTimezonesResponse>(await this.callApi(params, req, runtime), new $_model.ListClickHouseDBTimezonesResponse({}));
  }

  /**
   * Lists the available time zones for ClickHouse.
   * 
   * @param request - ListClickHouseDBTimezonesRequest
   * @returns ListClickHouseDBTimezonesResponse
   */
  async listClickHouseDBTimezones(request: $_model.ListClickHouseDBTimezonesRequest): Promise<$_model.ListClickHouseDBTimezonesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listClickHouseDBTimezonesWithOptions(request, runtime);
  }

  /**
   * Lists the IP address whitelist templates linked to an instance.
   * 
   * @param request - ListInstanceLinkedWhitelistTemplatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstanceLinkedWhitelistTemplatesResponse
   */
  async listInstanceLinkedWhitelistTemplatesWithOptions(request: $_model.ListInstanceLinkedWhitelistTemplatesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListInstanceLinkedWhitelistTemplatesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInstanceLinkedWhitelistTemplates",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListInstanceLinkedWhitelistTemplatesResponse>(await this.callApi(params, req, runtime), new $_model.ListInstanceLinkedWhitelistTemplatesResponse({}));
  }

  /**
   * Lists the IP address whitelist templates linked to an instance.
   * 
   * @param request - ListInstanceLinkedWhitelistTemplatesRequest
   * @returns ListInstanceLinkedWhitelistTemplatesResponse
   */
  async listInstanceLinkedWhitelistTemplates(request: $_model.ListInstanceLinkedWhitelistTemplatesRequest): Promise<$_model.ListInstanceLinkedWhitelistTemplatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listInstanceLinkedWhitelistTemplatesWithOptions(request, runtime);
  }

  /**
   * Queries the whitelist templates associated with an instance.
   * 
   * @param request - ListWhitelistTemplatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListWhitelistTemplatesResponse
   */
  async listWhitelistTemplatesWithOptions(request: $_model.ListWhitelistTemplatesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListWhitelistTemplatesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListWhitelistTemplates",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListWhitelistTemplatesResponse>(await this.callApi(params, req, runtime), new $_model.ListWhitelistTemplatesResponse({}));
  }

  /**
   * Queries the whitelist templates associated with an instance.
   * 
   * @param request - ListWhitelistTemplatesRequest
   * @returns ListWhitelistTemplatesResponse
   */
  async listWhitelistTemplates(request: $_model.ListWhitelistTemplatesRequest): Promise<$_model.ListWhitelistTemplatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listWhitelistTemplatesWithOptions(request, runtime);
  }

  /**
   * Modifies the permissions of a database account.
   * 
   * @param tmpReq - ModifyAccountAuthorityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAccountAuthorityResponse
   */
  async modifyAccountAuthorityWithOptions(tmpReq: $_model.ModifyAccountAuthorityRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyAccountAuthorityResponse> {
    tmpReq.validate();
    let request = new $_model.ModifyAccountAuthorityShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.dmlAuthSetting)) {
      request.dmlAuthSettingShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.dmlAuthSetting, "DmlAuthSetting", "json");
    }

    let query = { };
    if (!$dara.isNull(request.account)) {
      query["Account"] = request.account;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.dmlAuthSettingShrink)) {
      query["DmlAuthSetting"] = request.dmlAuthSettingShrink;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyAccountAuthority",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyAccountAuthorityResponse>(await this.callApi(params, req, runtime), new $_model.ModifyAccountAuthorityResponse({}));
  }

  /**
   * Modifies the permissions of a database account.
   * 
   * @param request - ModifyAccountAuthorityRequest
   * @returns ModifyAccountAuthorityResponse
   */
  async modifyAccountAuthority(request: $_model.ModifyAccountAuthorityRequest): Promise<$_model.ModifyAccountAuthorityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyAccountAuthorityWithOptions(request, runtime);
  }

  /**
   * Modifies the description of a database account.
   * 
   * @param request - ModifyAccountDescriptionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAccountDescriptionResponse
   */
  async modifyAccountDescriptionWithOptions(request: $_model.ModifyAccountDescriptionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyAccountDescriptionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.account)) {
      query["Account"] = request.account;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyAccountDescription",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyAccountDescriptionResponse>(await this.callApi(params, req, runtime), new $_model.ModifyAccountDescriptionResponse({}));
  }

  /**
   * Modifies the description of a database account.
   * 
   * @param request - ModifyAccountDescriptionRequest
   * @returns ModifyAccountDescriptionResponse
   */
  async modifyAccountDescription(request: $_model.ModifyAccountDescriptionRequest): Promise<$_model.ModifyAccountDescriptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyAccountDescriptionWithOptions(request, runtime);
  }

  /**
   * Modifies the backup policy of an ApsaraDB for ClickHouse cluster.
   * 
   * @remarks
   * > Data backup is supported only for ApsaraDB for ClickHouse clusters that run version 20.3, 20.8, or 21.8.
   * 
   * @param request - ModifyBackupPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyBackupPolicyResponse
   */
  async modifyBackupPolicyWithOptions(request: $_model.ModifyBackupPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyBackupPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupRetentionPeriod)) {
      query["BackupRetentionPeriod"] = request.backupRetentionPeriod;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.preferredBackupPeriod)) {
      query["PreferredBackupPeriod"] = request.preferredBackupPeriod;
    }

    if (!$dara.isNull(request.preferredBackupTime)) {
      query["PreferredBackupTime"] = request.preferredBackupTime;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyBackupPolicy",
      version: "2023-05-22",
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
   * Modifies the backup policy of an ApsaraDB for ClickHouse cluster.
   * 
   * @remarks
   * > Data backup is supported only for ApsaraDB for ClickHouse clusters that run version 20.3, 20.8, or 21.8.
   * 
   * @param request - ModifyBackupPolicyRequest
   * @returns ModifyBackupPolicyResponse
   */
  async modifyBackupPolicy(request: $_model.ModifyBackupPolicyRequest): Promise<$_model.ModifyBackupPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyBackupPolicyWithOptions(request, runtime);
  }

  /**
   * You can call the ModifyDBInstanceAttribute operation to modify the configuration of a cluster.
   * 
   * @param request - ModifyDBInstanceAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBInstanceAttributeResponse
   */
  async modifyDBInstanceAttributeWithOptions(request: $_model.ModifyDBInstanceAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBInstanceAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.attributeType)) {
      query["AttributeType"] = request.attributeType;
    }

    if (!$dara.isNull(request.attributeValue)) {
      query["AttributeValue"] = request.attributeValue;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.product)) {
      query["Product"] = request.product;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDBInstanceAttribute",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDBInstanceAttributeResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDBInstanceAttributeResponse({}));
  }

  /**
   * You can call the ModifyDBInstanceAttribute operation to modify the configuration of a cluster.
   * 
   * @param request - ModifyDBInstanceAttributeRequest
   * @returns ModifyDBInstanceAttributeResponse
   */
  async modifyDBInstanceAttribute(request: $_model.ModifyDBInstanceAttributeRequest): Promise<$_model.ModifyDBInstanceAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBInstanceAttributeWithOptions(request, runtime);
  }

  /**
   * Use `ModifyDBInstanceClass` to modify the scaling configuration of a cluster.
   * 
   * @remarks
   * Before you call this API, make sure that you understand the billing method and [pricing](https://help.aliyun.com/document_detail/167450.html) of ApsaraDB for ClickHouse.
   * 
   * @param tmpReq - ModifyDBInstanceClassRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBInstanceClassResponse
   */
  async modifyDBInstanceClassWithOptions(tmpReq: $_model.ModifyDBInstanceClassRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBInstanceClassResponse> {
    tmpReq.validate();
    let request = new $_model.ModifyDBInstanceClassShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.autoScaleConfig)) {
      request.autoScaleConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.autoScaleConfig, "AutoScaleConfig", "json");
    }

    let query = { };
    if (!$dara.isNull(request.autoScaleConfigShrink)) {
      query["AutoScaleConfig"] = request.autoScaleConfigShrink;
    }

    if (!$dara.isNull(request.computingGroupId)) {
      query["ComputingGroupId"] = request.computingGroupId;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.nodeCount)) {
      query["NodeCount"] = request.nodeCount;
    }

    if (!$dara.isNull(request.nodeScaleMax)) {
      query["NodeScaleMax"] = request.nodeScaleMax;
    }

    if (!$dara.isNull(request.nodeScaleMin)) {
      query["NodeScaleMin"] = request.nodeScaleMin;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.scaleMax)) {
      query["ScaleMax"] = request.scaleMax;
    }

    if (!$dara.isNull(request.scaleMin)) {
      query["ScaleMin"] = request.scaleMin;
    }

    if (!$dara.isNull(request.storageQuota)) {
      query["StorageQuota"] = request.storageQuota;
    }

    if (!$dara.isNull(request.storageType)) {
      query["StorageType"] = request.storageType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDBInstanceClass",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDBInstanceClassResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDBInstanceClassResponse({}));
  }

  /**
   * Use `ModifyDBInstanceClass` to modify the scaling configuration of a cluster.
   * 
   * @remarks
   * Before you call this API, make sure that you understand the billing method and [pricing](https://help.aliyun.com/document_detail/167450.html) of ApsaraDB for ClickHouse.
   * 
   * @param request - ModifyDBInstanceClassRequest
   * @returns ModifyDBInstanceClassResponse
   */
  async modifyDBInstanceClass(request: $_model.ModifyDBInstanceClassRequest): Promise<$_model.ModifyDBInstanceClassResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBInstanceClassWithOptions(request, runtime);
  }

  /**
   * Modifies the parameter settings for a DB instance.
   * 
   * @param request - ModifyDBInstanceConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBInstanceConfigResponse
   */
  async modifyDBInstanceConfigWithOptions(request: $_model.ModifyDBInstanceConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBInstanceConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.parameters)) {
      query["Parameters"] = request.parameters;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDBInstanceConfig",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDBInstanceConfigResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDBInstanceConfigResponse({}));
  }

  /**
   * Modifies the parameter settings for a DB instance.
   * 
   * @param request - ModifyDBInstanceConfigRequest
   * @returns ModifyDBInstanceConfigResponse
   */
  async modifyDBInstanceConfig(request: $_model.ModifyDBInstanceConfigRequest): Promise<$_model.ModifyDBInstanceConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBInstanceConfigWithOptions(request, runtime);
  }

  /**
   * Modifies the connection string of a cluster.
   * 
   * @param request - ModifyDBInstanceConnectionStringRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBInstanceConnectionStringResponse
   */
  async modifyDBInstanceConnectionStringWithOptions(request: $_model.ModifyDBInstanceConnectionStringRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBInstanceConnectionStringResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.computingGroupId)) {
      query["ComputingGroupId"] = request.computingGroupId;
    }

    if (!$dara.isNull(request.connectionString)) {
      query["ConnectionString"] = request.connectionString;
    }

    if (!$dara.isNull(request.connectionStringPrefix)) {
      query["ConnectionStringPrefix"] = request.connectionStringPrefix;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.DBInstanceNetType)) {
      query["DBInstanceNetType"] = request.DBInstanceNetType;
    }

    if (!$dara.isNull(request.disablePorts)) {
      query["DisablePorts"] = request.disablePorts;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDBInstanceConnectionString",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDBInstanceConnectionStringResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDBInstanceConnectionStringResponse({}));
  }

  /**
   * Modifies the connection string of a cluster.
   * 
   * @param request - ModifyDBInstanceConnectionStringRequest
   * @returns ModifyDBInstanceConnectionStringResponse
   */
  async modifyDBInstanceConnectionString(request: $_model.ModifyDBInstanceConnectionStringRequest): Promise<$_model.ModifyDBInstanceConnectionStringResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBInstanceConnectionStringWithOptions(request, runtime);
  }

  /**
   * Modifies the permissions of a user in a Langfuse organization.
   * 
   * @param request - ModifyLangfuseOrgMembershipRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyLangfuseOrgMembershipResponse
   */
  async modifyLangfuseOrgMembershipWithOptions(request: $_model.ModifyLangfuseOrgMembershipRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyLangfuseOrgMembershipResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.email)) {
      query["Email"] = request.email;
    }

    if (!$dara.isNull(request.organizationId)) {
      query["OrganizationId"] = request.organizationId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.role)) {
      query["Role"] = request.role;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyLangfuseOrgMembership",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyLangfuseOrgMembershipResponse>(await this.callApi(params, req, runtime), new $_model.ModifyLangfuseOrgMembershipResponse({}));
  }

  /**
   * Modifies the permissions of a user in a Langfuse organization.
   * 
   * @param request - ModifyLangfuseOrgMembershipRequest
   * @returns ModifyLangfuseOrgMembershipResponse
   */
  async modifyLangfuseOrgMembership(request: $_model.ModifyLangfuseOrgMembershipRequest): Promise<$_model.ModifyLangfuseOrgMembershipResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyLangfuseOrgMembershipWithOptions(request, runtime);
  }

  /**
   * Modifies the permissions of a user in a Langfuse project.
   * 
   * @param request - ModifyLangfuseProjectMembershipRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyLangfuseProjectMembershipResponse
   */
  async modifyLangfuseProjectMembershipWithOptions(request: $_model.ModifyLangfuseProjectMembershipRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyLangfuseProjectMembershipResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.email)) {
      query["Email"] = request.email;
    }

    if (!$dara.isNull(request.organizationId)) {
      query["OrganizationId"] = request.organizationId;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.role)) {
      query["Role"] = request.role;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyLangfuseProjectMembership",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyLangfuseProjectMembershipResponse>(await this.callApi(params, req, runtime), new $_model.ModifyLangfuseProjectMembershipResponse({}));
  }

  /**
   * Modifies the permissions of a user in a Langfuse project.
   * 
   * @param request - ModifyLangfuseProjectMembershipRequest
   * @returns ModifyLangfuseProjectMembershipResponse
   */
  async modifyLangfuseProjectMembership(request: $_model.ModifyLangfuseProjectMembershipRequest): Promise<$_model.ModifyLangfuseProjectMembershipResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyLangfuseProjectMembershipWithOptions(request, runtime);
  }

  /**
   * Modifies the whitelist settings of an ApsaraDB for ClickHouse cluster.
   * 
   * @param request - ModifySecurityIPListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifySecurityIPListResponse
   */
  async modifySecurityIPListWithOptions(request: $_model.ModifySecurityIPListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifySecurityIPListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.modifyMode)) {
      query["ModifyMode"] = request.modifyMode;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.securityIPList)) {
      query["SecurityIPList"] = request.securityIPList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifySecurityIPList",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifySecurityIPListResponse>(await this.callApi(params, req, runtime), new $_model.ModifySecurityIPListResponse({}));
  }

  /**
   * Modifies the whitelist settings of an ApsaraDB for ClickHouse cluster.
   * 
   * @param request - ModifySecurityIPListRequest
   * @returns ModifySecurityIPListResponse
   */
  async modifySecurityIPList(request: $_model.ModifySecurityIPListRequest): Promise<$_model.ModifySecurityIPListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifySecurityIPListWithOptions(request, runtime);
  }

  /**
   * Resets the password of a database account for an ApsaraDB for ClickHouse Enterprise Edition cluster.
   * 
   * @param request - ResetAccountPasswordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResetAccountPasswordResponse
   */
  async resetAccountPasswordWithOptions(request: $_model.ResetAccountPasswordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ResetAccountPasswordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.account)) {
      query["Account"] = request.account;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.product)) {
      query["Product"] = request.product;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResetAccountPassword",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResetAccountPasswordResponse>(await this.callApi(params, req, runtime), new $_model.ResetAccountPasswordResponse({}));
  }

  /**
   * Resets the password of a database account for an ApsaraDB for ClickHouse Enterprise Edition cluster.
   * 
   * @param request - ResetAccountPasswordRequest
   * @returns ResetAccountPasswordResponse
   */
  async resetAccountPassword(request: $_model.ResetAccountPasswordRequest): Promise<$_model.ResetAccountPasswordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resetAccountPasswordWithOptions(request, runtime);
  }

  /**
   * Resets the password of a Langfuse user.
   * 
   * @param request - ResetLangfuseUserPasswordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResetLangfuseUserPasswordResponse
   */
  async resetLangfuseUserPasswordWithOptions(request: $_model.ResetLangfuseUserPasswordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ResetLangfuseUserPasswordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.email)) {
      query["Email"] = request.email;
    }

    if (!$dara.isNull(request.newPassword)) {
      query["NewPassword"] = request.newPassword;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResetLangfuseUserPassword",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResetLangfuseUserPasswordResponse>(await this.callApi(params, req, runtime), new $_model.ResetLangfuseUserPasswordResponse({}));
  }

  /**
   * Resets the password of a Langfuse user.
   * 
   * @param request - ResetLangfuseUserPasswordRequest
   * @returns ResetLangfuseUserPasswordResponse
   */
  async resetLangfuseUserPassword(request: $_model.ResetLangfuseUserPasswordRequest): Promise<$_model.ResetLangfuseUserPasswordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resetLangfuseUserPasswordWithOptions(request, runtime);
  }

  /**
   * Restarts an ApsaraDB for ClickHouse Enterprise Edition cluster.
   * 
   * @param request - RestartDBInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RestartDBInstanceResponse
   */
  async restartDBInstanceWithOptions(request: $_model.RestartDBInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RestartDBInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RestartDBInstance",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RestartDBInstanceResponse>(await this.callApi(params, req, runtime), new $_model.RestartDBInstanceResponse({}));
  }

  /**
   * Restarts an ApsaraDB for ClickHouse Enterprise Edition cluster.
   * 
   * @param request - RestartDBInstanceRequest
   * @returns RestartDBInstanceResponse
   */
  async restartDBInstance(request: $_model.RestartDBInstanceRequest): Promise<$_model.RestartDBInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.restartDBInstanceWithOptions(request, runtime);
  }

  /**
   * Starts an ApsaraDB for ClickHouse Enterprise Edition cluster.
   * 
   * @param request - StartDBInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartDBInstanceResponse
   */
  async startDBInstanceWithOptions(request: $_model.StartDBInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartDBInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartDBInstance",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartDBInstanceResponse>(await this.callApi(params, req, runtime), new $_model.StartDBInstanceResponse({}));
  }

  /**
   * Starts an ApsaraDB for ClickHouse Enterprise Edition cluster.
   * 
   * @param request - StartDBInstanceRequest
   * @returns StartDBInstanceResponse
   */
  async startDBInstance(request: $_model.StartDBInstanceRequest): Promise<$_model.StartDBInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startDBInstanceWithOptions(request, runtime);
  }

  /**
   * Stops an ApsaraDB for ClickHouse Enterprise Edition cluster.
   * 
   * @param request - StopDBInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopDBInstanceResponse
   */
  async stopDBInstanceWithOptions(request: $_model.StopDBInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopDBInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopDBInstance",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopDBInstanceResponse>(await this.callApi(params, req, runtime), new $_model.StopDBInstanceResponse({}));
  }

  /**
   * Stops an ApsaraDB for ClickHouse Enterprise Edition cluster.
   * 
   * @param request - StopDBInstanceRequest
   * @returns StopDBInstanceResponse
   */
  async stopDBInstance(request: $_model.StopDBInstanceRequest): Promise<$_model.StopDBInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopDBInstanceWithOptions(request, runtime);
  }

  /**
   * Updates a whitelist template.
   * 
   * @param request - UpdateWhitelistTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateWhitelistTemplateResponse
   */
  async updateWhitelistTemplateWithOptions(request: $_model.UpdateWhitelistTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateWhitelistTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.securityIPList)) {
      query["SecurityIPList"] = request.securityIPList;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateWhitelistTemplate",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateWhitelistTemplateResponse>(await this.callApi(params, req, runtime), new $_model.UpdateWhitelistTemplateResponse({}));
  }

  /**
   * Updates a whitelist template.
   * 
   * @param request - UpdateWhitelistTemplateRequest
   * @returns UpdateWhitelistTemplateResponse
   */
  async updateWhitelistTemplate(request: $_model.UpdateWhitelistTemplateRequest): Promise<$_model.UpdateWhitelistTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateWhitelistTemplateWithOptions(request, runtime);
  }

  /**
   * Updates the minor engine version of an ApsaraDB for ClickHouse cluster that runs Enterprise Edition.
   * 
   * @param request - UpgradeMinorVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpgradeMinorVersionResponse
   */
  async upgradeMinorVersionWithOptions(request: $_model.UpgradeMinorVersionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpgradeMinorVersionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.switchTime)) {
      query["SwitchTime"] = request.switchTime;
    }

    if (!$dara.isNull(request.switchTimeMode)) {
      query["SwitchTimeMode"] = request.switchTimeMode;
    }

    if (!$dara.isNull(request.targetMinorVersion)) {
      query["TargetMinorVersion"] = request.targetMinorVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpgradeMinorVersion",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpgradeMinorVersionResponse>(await this.callApi(params, req, runtime), new $_model.UpgradeMinorVersionResponse({}));
  }

  /**
   * Updates the minor engine version of an ApsaraDB for ClickHouse cluster that runs Enterprise Edition.
   * 
   * @param request - UpgradeMinorVersionRequest
   * @returns UpgradeMinorVersionResponse
   */
  async upgradeMinorVersion(request: $_model.UpgradeMinorVersionRequest): Promise<$_model.UpgradeMinorVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.upgradeMinorVersionWithOptions(request, runtime);
  }

}
