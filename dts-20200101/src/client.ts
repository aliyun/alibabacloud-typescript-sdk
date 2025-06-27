// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import OSS, * as $OSS from '@alicloud/oss-client';
import OpenPlatform, * as $OpenPlatform from '@alicloud/openplatform20191219';
import * as $OSSUtil from '@alicloud/oss-util';
import * as $FileForm from '@alicloud/tea-fileform';
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil }from '@alicloud/openapi-core';


import * as $_model from './models/model';
export * from './models/model';

export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "regional";
    this._endpointMap = {
      'cn-qingdao': "dts.aliyuncs.com",
      'cn-beijing': "dts.aliyuncs.com",
      'cn-zhangjiakou': "dts.aliyuncs.com",
      'cn-huhehaote': "dts.aliyuncs.com",
      'cn-hangzhou': "dts.aliyuncs.com",
      'cn-shanghai': "dts.aliyuncs.com",
      'cn-shenzhen': "dts.aliyuncs.com",
      'cn-hongkong': "dts.aliyuncs.com",
      'ap-southeast-1': "dts.aliyuncs.com",
      'ap-southeast-2': "dts.aliyuncs.com",
      'ap-southeast-3': "dts.aliyuncs.com",
      'ap-southeast-5': "dts.aliyuncs.com",
      'eu-west-1': "dts.aliyuncs.com",
      'us-west-1': "dts.aliyuncs.com",
      'us-east-1': "dts.aliyuncs.com",
      'eu-central-1': "dts.aliyuncs.com",
      'me-east-1': "dts.aliyuncs.com",
      'ap-south-1': "dts.aliyuncs.com",
      'cn-hangzhou-finance': "dts.aliyuncs.com",
      'cn-shanghai-finance-1': "dts.aliyuncs.com",
      'cn-shenzhen-finance-1': "dts.aliyuncs.com",
      'cn-north-2-gov-1': "dts.aliyuncs.com",
      'ap-northeast-2-pop': "dts.aliyuncs.com",
      'cn-beijing-finance-1': "dts.aliyuncs.com",
      'cn-beijing-finance-pop': "dts.aliyuncs.com",
      'cn-beijing-gov-1': "dts.aliyuncs.com",
      'cn-beijing-nu16-b01': "dts.aliyuncs.com",
      'cn-chengdu': "dts.aliyuncs.com",
      'cn-edge-1': "dts.aliyuncs.com",
      'cn-fujian': "dts.aliyuncs.com",
      'cn-haidian-cm12-c01': "dts.aliyuncs.com",
      'cn-hangzhou-bj-b01': "dts.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "dts.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "dts.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "dts.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "dts.aliyuncs.com",
      'cn-hangzhou-test-306': "dts.aliyuncs.com",
      'cn-hongkong-finance-pop': "dts.aliyuncs.com",
      'cn-huhehaote-nebula-1': "dts.aliyuncs.com",
      'cn-qingdao-nebula': "dts.aliyuncs.com",
      'cn-shanghai-et15-b01': "dts.aliyuncs.com",
      'cn-shanghai-et2-b01': "dts.aliyuncs.com",
      'cn-shanghai-inner': "dts.aliyuncs.com",
      'cn-shanghai-internal-test-1': "dts.aliyuncs.com",
      'cn-shenzhen-inner': "dts.aliyuncs.com",
      'cn-shenzhen-st4-d01': "dts.aliyuncs.com",
      'cn-shenzhen-su18-b01': "dts.aliyuncs.com",
      'cn-wuhan': "dts.aliyuncs.com",
      'cn-wulanchabu': "dts.aliyuncs.com",
      'cn-yushanfang': "dts.aliyuncs.com",
      'cn-zhangbei-na61-b01': "dts.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "dts.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "dts.aliyuncs.com",
      'eu-west-1-oxs': "dts.aliyuncs.com",
      'rus-west-1-pop': "dts.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("dts", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Configures a data migration or synchronization task.
   * 
   * @param request - ConfigureDtsJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConfigureDtsJobResponse
   */
  async configureDtsJobWithOptions(request: $_model.ConfigureDtsJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ConfigureDtsJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.checkpoint)) {
      query["Checkpoint"] = request.checkpoint;
    }

    if (!$dara.isNull(request.dataCheckConfigure)) {
      query["DataCheckConfigure"] = request.dataCheckConfigure;
    }

    if (!$dara.isNull(request.dataInitialization)) {
      query["DataInitialization"] = request.dataInitialization;
    }

    if (!$dara.isNull(request.dataSynchronization)) {
      query["DataSynchronization"] = request.dataSynchronization;
    }

    if (!$dara.isNull(request.dedicatedClusterId)) {
      query["DedicatedClusterId"] = request.dedicatedClusterId;
    }

    if (!$dara.isNull(request.delayNotice)) {
      query["DelayNotice"] = request.delayNotice;
    }

    if (!$dara.isNull(request.delayPhone)) {
      query["DelayPhone"] = request.delayPhone;
    }

    if (!$dara.isNull(request.delayRuleTime)) {
      query["DelayRuleTime"] = request.delayRuleTime;
    }

    if (!$dara.isNull(request.destCaCertificateOssUrl)) {
      query["DestCaCertificateOssUrl"] = request.destCaCertificateOssUrl;
    }

    if (!$dara.isNull(request.destCaCertificatePassword)) {
      query["DestCaCertificatePassword"] = request.destCaCertificatePassword;
    }

    if (!$dara.isNull(request.destClientCertOssUrl)) {
      query["DestClientCertOssUrl"] = request.destClientCertOssUrl;
    }

    if (!$dara.isNull(request.destClientKeyOssUrl)) {
      query["DestClientKeyOssUrl"] = request.destClientKeyOssUrl;
    }

    if (!$dara.isNull(request.destClientPassword)) {
      query["DestClientPassword"] = request.destClientPassword;
    }

    if (!$dara.isNull(request.destPrimaryVswId)) {
      query["DestPrimaryVswId"] = request.destPrimaryVswId;
    }

    if (!$dara.isNull(request.destSecondaryVswId)) {
      query["DestSecondaryVswId"] = request.destSecondaryVswId;
    }

    if (!$dara.isNull(request.destinationEndpointDataBaseName)) {
      query["DestinationEndpointDataBaseName"] = request.destinationEndpointDataBaseName;
    }

    if (!$dara.isNull(request.destinationEndpointEngineName)) {
      query["DestinationEndpointEngineName"] = request.destinationEndpointEngineName;
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

    if (!$dara.isNull(request.destinationEndpointOwnerID)) {
      query["DestinationEndpointOwnerID"] = request.destinationEndpointOwnerID;
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

    if (!$dara.isNull(request.destinationEndpointRole)) {
      query["DestinationEndpointRole"] = request.destinationEndpointRole;
    }

    if (!$dara.isNull(request.destinationEndpointUserName)) {
      query["DestinationEndpointUserName"] = request.destinationEndpointUserName;
    }

    if (!$dara.isNull(request.disasterRecoveryJob)) {
      query["DisasterRecoveryJob"] = request.disasterRecoveryJob;
    }

    if (!$dara.isNull(request.dtsBisLabel)) {
      query["DtsBisLabel"] = request.dtsBisLabel;
    }

    if (!$dara.isNull(request.dtsInstanceId)) {
      query["DtsInstanceId"] = request.dtsInstanceId;
    }

    if (!$dara.isNull(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!$dara.isNull(request.dtsJobName)) {
      query["DtsJobName"] = request.dtsJobName;
    }

    if (!$dara.isNull(request.errorNotice)) {
      query["ErrorNotice"] = request.errorNotice;
    }

    if (!$dara.isNull(request.errorPhone)) {
      query["ErrorPhone"] = request.errorPhone;
    }

    if (!$dara.isNull(request.fileOssUrl)) {
      query["FileOssUrl"] = request.fileOssUrl;
    }

    if (!$dara.isNull(request.jobType)) {
      query["JobType"] = request.jobType;
    }

    if (!$dara.isNull(request.maxDu)) {
      query["MaxDu"] = request.maxDu;
    }

    if (!$dara.isNull(request.minDu)) {
      query["MinDu"] = request.minDu;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.sourceEndpointDatabaseName)) {
      query["SourceEndpointDatabaseName"] = request.sourceEndpointDatabaseName;
    }

    if (!$dara.isNull(request.sourceEndpointEngineName)) {
      query["SourceEndpointEngineName"] = request.sourceEndpointEngineName;
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

    if (!$dara.isNull(request.sourceEndpointOwnerID)) {
      query["SourceEndpointOwnerID"] = request.sourceEndpointOwnerID;
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

    if (!$dara.isNull(request.sourceEndpointRole)) {
      query["SourceEndpointRole"] = request.sourceEndpointRole;
    }

    if (!$dara.isNull(request.sourceEndpointUserName)) {
      query["SourceEndpointUserName"] = request.sourceEndpointUserName;
    }

    if (!$dara.isNull(request.sourceEndpointVSwitchID)) {
      query["SourceEndpointVSwitchID"] = request.sourceEndpointVSwitchID;
    }

    if (!$dara.isNull(request.srcCaCertificateOssUrl)) {
      query["SrcCaCertificateOssUrl"] = request.srcCaCertificateOssUrl;
    }

    if (!$dara.isNull(request.srcCaCertificatePassword)) {
      query["SrcCaCertificatePassword"] = request.srcCaCertificatePassword;
    }

    if (!$dara.isNull(request.srcClientCertOssUrl)) {
      query["SrcClientCertOssUrl"] = request.srcClientCertOssUrl;
    }

    if (!$dara.isNull(request.srcClientKeyOssUrl)) {
      query["SrcClientKeyOssUrl"] = request.srcClientKeyOssUrl;
    }

    if (!$dara.isNull(request.srcClientPassword)) {
      query["SrcClientPassword"] = request.srcClientPassword;
    }

    if (!$dara.isNull(request.srcPrimaryVswId)) {
      query["SrcPrimaryVswId"] = request.srcPrimaryVswId;
    }

    if (!$dara.isNull(request.srcSecondaryVswId)) {
      query["SrcSecondaryVswId"] = request.srcSecondaryVswId;
    }

    if (!$dara.isNull(request.structureInitialization)) {
      query["StructureInitialization"] = request.structureInitialization;
    }

    if (!$dara.isNull(request.synchronizationDirection)) {
      query["SynchronizationDirection"] = request.synchronizationDirection;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dbList)) {
      body["DbList"] = request.dbList;
    }

    if (!$dara.isNull(request.reserve)) {
      body["Reserve"] = request.reserve;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ConfigureDtsJob",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ConfigureDtsJobResponse>(await this.callApi(params, req, runtime), new $_model.ConfigureDtsJobResponse({}));
  }

  /**
   * Configures a data migration or synchronization task.
   * 
   * @param request - ConfigureDtsJobRequest
   * @returns ConfigureDtsJobResponse
   */
  async configureDtsJob(request: $_model.ConfigureDtsJobRequest): Promise<$_model.ConfigureDtsJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.configureDtsJobWithOptions(request, runtime);
  }

  async configureDtsJobAdvance(request: $_model.ConfigureDtsJobAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ConfigureDtsJobResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let securityToken = await this._credential.getSecurityToken();
    let credentialType = this._credential.getType();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if ($dara.isNull(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    if ($dara.isNull(credentialType)) {
      credentialType = "access_key";
    }

    let authConfig = new $OpenApiUtil.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      securityToken: securityToken,
      type: credentialType,
      endpoint: openPlatformEndpoint,
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "Dts",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = new OSS(ossConfig);
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let configureDtsJobReq = new $_model.ConfigureDtsJobRequest({ });
    OpenApiUtil.convert(request, configureDtsJobReq);
    if (!$dara.isNull(request.fileOssUrlObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.fileOssUrlObject,
        contentType: "",
      });
      ossHeader = new $OSS.PostObjectRequestHeader({
        accessKeyId: authResponse.body.accessKeyId,
        policy: authResponse.body.encodedPolicy,
        signature: authResponse.body.signature,
        key: authResponse.body.objectKey,
        file: fileObj,
        successActionStatus: "201",
      });
      uploadRequest = new $OSS.PostObjectRequest({
        bucketName: authResponse.body.bucket,
        header: ossHeader,
      });
      await ossClient.postObject(uploadRequest, ossRuntime);
      configureDtsJobReq.fileOssUrl = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let configureDtsJobResp = await this.configureDtsJobWithOptions(configureDtsJobReq, runtime);
    return configureDtsJobResp;
  }

  /**
   * Configures a data migration task.
   * 
   * @param request - ConfigureMigrationJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConfigureMigrationJobResponse
   */
  async configureMigrationJobWithOptions(request: $_model.ConfigureMigrationJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ConfigureMigrationJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.checkpoint)) {
      query["Checkpoint"] = request.checkpoint;
    }

    if (!$dara.isNull(request.migrationJobId)) {
      query["MigrationJobId"] = request.migrationJobId;
    }

    if (!$dara.isNull(request.migrationJobName)) {
      query["MigrationJobName"] = request.migrationJobName;
    }

    if (!$dara.isNull(request.migrationReserved)) {
      query["MigrationReserved"] = request.migrationReserved;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.destinationEndpoint)) {
      query["DestinationEndpoint"] = request.destinationEndpoint;
    }

    if (!$dara.isNull(request.migrationMode)) {
      query["MigrationMode"] = request.migrationMode;
    }

    if (!$dara.isNull(request.sourceEndpoint)) {
      query["SourceEndpoint"] = request.sourceEndpoint;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.migrationObject)) {
      body["MigrationObject"] = request.migrationObject;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ConfigureMigrationJob",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ConfigureMigrationJobResponse>(await this.callApi(params, req, runtime), new $_model.ConfigureMigrationJobResponse({}));
  }

  /**
   * Configures a data migration task.
   * 
   * @param request - ConfigureMigrationJobRequest
   * @returns ConfigureMigrationJobResponse
   */
  async configureMigrationJob(request: $_model.ConfigureMigrationJobRequest): Promise<$_model.ConfigureMigrationJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.configureMigrationJobWithOptions(request, runtime);
  }

  /**
   * Configures alert settings to monitor a data migration instance.
   * 
   * @param request - ConfigureMigrationJobAlertRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConfigureMigrationJobAlertResponse
   */
  async configureMigrationJobAlertWithOptions(request: $_model.ConfigureMigrationJobAlertRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ConfigureMigrationJobAlertResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.delayAlertPhone)) {
      query["DelayAlertPhone"] = request.delayAlertPhone;
    }

    if (!$dara.isNull(request.delayAlertStatus)) {
      query["DelayAlertStatus"] = request.delayAlertStatus;
    }

    if (!$dara.isNull(request.delayOverSeconds)) {
      query["DelayOverSeconds"] = request.delayOverSeconds;
    }

    if (!$dara.isNull(request.errorAlertPhone)) {
      query["ErrorAlertPhone"] = request.errorAlertPhone;
    }

    if (!$dara.isNull(request.errorAlertStatus)) {
      query["ErrorAlertStatus"] = request.errorAlertStatus;
    }

    if (!$dara.isNull(request.migrationJobId)) {
      query["MigrationJobId"] = request.migrationJobId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ConfigureMigrationJobAlert",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ConfigureMigrationJobAlertResponse>(await this.callApi(params, req, runtime), new $_model.ConfigureMigrationJobAlertResponse({}));
  }

  /**
   * Configures alert settings to monitor a data migration instance.
   * 
   * @param request - ConfigureMigrationJobAlertRequest
   * @returns ConfigureMigrationJobAlertResponse
   */
  async configureMigrationJobAlert(request: $_model.ConfigureMigrationJobAlertRequest): Promise<$_model.ConfigureMigrationJobAlertResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.configureMigrationJobAlertWithOptions(request, runtime);
  }

  /**
   * Configures a change tracking task.
   * 
   * @remarks
   * >  You can preview related API operation parameters when you configure a change tracking task in the Data Transmission Service (DTS) console. This helps you configure the request parameters of this API operation. For more information, see [Preview the request parameters of API operations](https://help.aliyun.com/document_detail/2851612.html).
   * 
   * @param request - ConfigureSubscriptionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConfigureSubscriptionResponse
   */
  async configureSubscriptionWithOptions(request: $_model.ConfigureSubscriptionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ConfigureSubscriptionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.checkpoint)) {
      query["Checkpoint"] = request.checkpoint;
    }

    if (!$dara.isNull(request.dbList)) {
      query["DbList"] = request.dbList;
    }

    if (!$dara.isNull(request.dedicatedClusterId)) {
      query["DedicatedClusterId"] = request.dedicatedClusterId;
    }

    if (!$dara.isNull(request.delayNotice)) {
      query["DelayNotice"] = request.delayNotice;
    }

    if (!$dara.isNull(request.delayPhone)) {
      query["DelayPhone"] = request.delayPhone;
    }

    if (!$dara.isNull(request.delayRuleTime)) {
      query["DelayRuleTime"] = request.delayRuleTime;
    }

    if (!$dara.isNull(request.dtsBisLabel)) {
      query["DtsBisLabel"] = request.dtsBisLabel;
    }

    if (!$dara.isNull(request.dtsInstanceId)) {
      query["DtsInstanceId"] = request.dtsInstanceId;
    }

    if (!$dara.isNull(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!$dara.isNull(request.dtsJobName)) {
      query["DtsJobName"] = request.dtsJobName;
    }

    if (!$dara.isNull(request.errorNotice)) {
      query["ErrorNotice"] = request.errorNotice;
    }

    if (!$dara.isNull(request.errorPhone)) {
      query["ErrorPhone"] = request.errorPhone;
    }

    if (!$dara.isNull(request.maxDu)) {
      query["MaxDu"] = request.maxDu;
    }

    if (!$dara.isNull(request.minDu)) {
      query["MinDu"] = request.minDu;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.reserve)) {
      query["Reserve"] = request.reserve;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.sourceEndpointDatabaseName)) {
      query["SourceEndpointDatabaseName"] = request.sourceEndpointDatabaseName;
    }

    if (!$dara.isNull(request.sourceEndpointEngineName)) {
      query["SourceEndpointEngineName"] = request.sourceEndpointEngineName;
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

    if (!$dara.isNull(request.sourceEndpointOwnerID)) {
      query["SourceEndpointOwnerID"] = request.sourceEndpointOwnerID;
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

    if (!$dara.isNull(request.sourceEndpointRole)) {
      query["SourceEndpointRole"] = request.sourceEndpointRole;
    }

    if (!$dara.isNull(request.sourceEndpointUserName)) {
      query["SourceEndpointUserName"] = request.sourceEndpointUserName;
    }

    if (!$dara.isNull(request.srcCaCertificateOssUrl)) {
      query["SrcCaCertificateOssUrl"] = request.srcCaCertificateOssUrl;
    }

    if (!$dara.isNull(request.srcCaCertificatePassword)) {
      query["SrcCaCertificatePassword"] = request.srcCaCertificatePassword;
    }

    if (!$dara.isNull(request.srcClientCertOssUrl)) {
      query["SrcClientCertOssUrl"] = request.srcClientCertOssUrl;
    }

    if (!$dara.isNull(request.srcClientKeyOssUrl)) {
      query["SrcClientKeyOssUrl"] = request.srcClientKeyOssUrl;
    }

    if (!$dara.isNull(request.srcClientPassword)) {
      query["SrcClientPassword"] = request.srcClientPassword;
    }

    if (!$dara.isNull(request.subscriptionDataTypeDDL)) {
      query["SubscriptionDataTypeDDL"] = request.subscriptionDataTypeDDL;
    }

    if (!$dara.isNull(request.subscriptionDataTypeDML)) {
      query["SubscriptionDataTypeDML"] = request.subscriptionDataTypeDML;
    }

    if (!$dara.isNull(request.subscriptionInstanceNetworkType)) {
      query["SubscriptionInstanceNetworkType"] = request.subscriptionInstanceNetworkType;
    }

    if (!$dara.isNull(request.subscriptionInstanceVPCId)) {
      query["SubscriptionInstanceVPCId"] = request.subscriptionInstanceVPCId;
    }

    if (!$dara.isNull(request.subscriptionInstanceVSwitchId)) {
      query["SubscriptionInstanceVSwitchId"] = request.subscriptionInstanceVSwitchId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ConfigureSubscription",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ConfigureSubscriptionResponse>(await this.callApi(params, req, runtime), new $_model.ConfigureSubscriptionResponse({}));
  }

  /**
   * Configures a change tracking task.
   * 
   * @remarks
   * >  You can preview related API operation parameters when you configure a change tracking task in the Data Transmission Service (DTS) console. This helps you configure the request parameters of this API operation. For more information, see [Preview the request parameters of API operations](https://help.aliyun.com/document_detail/2851612.html).
   * 
   * @param request - ConfigureSubscriptionRequest
   * @returns ConfigureSubscriptionResponse
   */
  async configureSubscription(request: $_model.ConfigureSubscriptionRequest): Promise<$_model.ConfigureSubscriptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.configureSubscriptionWithOptions(request, runtime);
  }

  /**
   * Configures a change tracking instance of the previous version.
   * 
   * @remarks
   * Before you call this operation, you must call the [CreateSubscriptionInstance](https://help.aliyun.com/document_detail/49436.html) operation to create a change tracking instance.
   * 
   * @param request - ConfigureSubscriptionInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConfigureSubscriptionInstanceResponse
   */
  async configureSubscriptionInstanceWithOptions(request: $_model.ConfigureSubscriptionInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ConfigureSubscriptionInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.subscriptionInstanceId)) {
      query["SubscriptionInstanceId"] = request.subscriptionInstanceId;
    }

    if (!$dara.isNull(request.subscriptionInstanceName)) {
      query["SubscriptionInstanceName"] = request.subscriptionInstanceName;
    }

    if (!$dara.isNull(request.subscriptionInstanceNetworkType)) {
      query["SubscriptionInstanceNetworkType"] = request.subscriptionInstanceNetworkType;
    }

    if (!$dara.isNull(request.sourceEndpoint)) {
      query["SourceEndpoint"] = request.sourceEndpoint;
    }

    if (!$dara.isNull(request.subscriptionDataType)) {
      query["SubscriptionDataType"] = request.subscriptionDataType;
    }

    if (!$dara.isNull(request.subscriptionInstance)) {
      query["SubscriptionInstance"] = request.subscriptionInstance;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.subscriptionObject)) {
      body["SubscriptionObject"] = request.subscriptionObject;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ConfigureSubscriptionInstance",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ConfigureSubscriptionInstanceResponse>(await this.callApi(params, req, runtime), new $_model.ConfigureSubscriptionInstanceResponse({}));
  }

  /**
   * Configures a change tracking instance of the previous version.
   * 
   * @remarks
   * Before you call this operation, you must call the [CreateSubscriptionInstance](https://help.aliyun.com/document_detail/49436.html) operation to create a change tracking instance.
   * 
   * @param request - ConfigureSubscriptionInstanceRequest
   * @returns ConfigureSubscriptionInstanceResponse
   */
  async configureSubscriptionInstance(request: $_model.ConfigureSubscriptionInstanceRequest): Promise<$_model.ConfigureSubscriptionInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.configureSubscriptionInstanceWithOptions(request, runtime);
  }

  /**
   * Configures alert settings to monitor a change tracking instance.
   * 
   * @param request - ConfigureSubscriptionInstanceAlertRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConfigureSubscriptionInstanceAlertResponse
   */
  async configureSubscriptionInstanceAlertWithOptions(request: $_model.ConfigureSubscriptionInstanceAlertRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ConfigureSubscriptionInstanceAlertResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.delayAlertPhone)) {
      query["DelayAlertPhone"] = request.delayAlertPhone;
    }

    if (!$dara.isNull(request.delayAlertStatus)) {
      query["DelayAlertStatus"] = request.delayAlertStatus;
    }

    if (!$dara.isNull(request.delayOverSeconds)) {
      query["DelayOverSeconds"] = request.delayOverSeconds;
    }

    if (!$dara.isNull(request.errorAlertPhone)) {
      query["ErrorAlertPhone"] = request.errorAlertPhone;
    }

    if (!$dara.isNull(request.errorAlertStatus)) {
      query["ErrorAlertStatus"] = request.errorAlertStatus;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.subscriptionInstanceId)) {
      query["SubscriptionInstanceId"] = request.subscriptionInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ConfigureSubscriptionInstanceAlert",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ConfigureSubscriptionInstanceAlertResponse>(await this.callApi(params, req, runtime), new $_model.ConfigureSubscriptionInstanceAlertResponse({}));
  }

  /**
   * Configures alert settings to monitor a change tracking instance.
   * 
   * @param request - ConfigureSubscriptionInstanceAlertRequest
   * @returns ConfigureSubscriptionInstanceAlertResponse
   */
  async configureSubscriptionInstanceAlert(request: $_model.ConfigureSubscriptionInstanceAlertRequest): Promise<$_model.ConfigureSubscriptionInstanceAlertResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.configureSubscriptionInstanceAlertWithOptions(request, runtime);
  }

  /**
   * Configures a data synchronization task.
   * 
   * @remarks
   * Before you call this operation, you must call the [CreateSynchronizationJob](https://help.aliyun.com/document_detail/49446.html) operation to create a data synchronization instance.
   * > 
   * *   After you call this operation to configure a data synchronization task, the task will be automatically started and prechecked. You do not need to call the [StartSynchronizationJob](https://help.aliyun.com/document_detail/49448.html) operation to start the task.
   * *   A data synchronization task may fail to be started due to precheck failures. You can call the [DescribeSynchronizationJobStatus](https://help.aliyun.com/document_detail/49453.html) operation to query the status of the task. Then, you can change parameter settings based on the error messages about the precheck failures. After you fix the issue, you must call the [StartSynchronizationJob](https://help.aliyun.com/document_detail/49448.html) operation to restart the data synchronization task.
   * 
   * @param request - ConfigureSynchronizationJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConfigureSynchronizationJobResponse
   */
  async configureSynchronizationJobWithOptions(request: $_model.ConfigureSynchronizationJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ConfigureSynchronizationJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.checkpoint)) {
      query["Checkpoint"] = request.checkpoint;
    }

    if (!$dara.isNull(request.dataInitialization)) {
      query["DataInitialization"] = request.dataInitialization;
    }

    if (!$dara.isNull(request.migrationReserved)) {
      query["MigrationReserved"] = request.migrationReserved;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.structureInitialization)) {
      query["StructureInitialization"] = request.structureInitialization;
    }

    if (!$dara.isNull(request.synchronizationDirection)) {
      query["SynchronizationDirection"] = request.synchronizationDirection;
    }

    if (!$dara.isNull(request.synchronizationJobId)) {
      query["SynchronizationJobId"] = request.synchronizationJobId;
    }

    if (!$dara.isNull(request.synchronizationJobName)) {
      query["SynchronizationJobName"] = request.synchronizationJobName;
    }

    if (!$dara.isNull(request.destinationEndpoint)) {
      query["DestinationEndpoint"] = request.destinationEndpoint;
    }

    if (!$dara.isNull(request.partitionKey)) {
      query["PartitionKey"] = request.partitionKey;
    }

    if (!$dara.isNull(request.sourceEndpoint)) {
      query["SourceEndpoint"] = request.sourceEndpoint;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.synchronizationObjects)) {
      body["SynchronizationObjects"] = request.synchronizationObjects;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ConfigureSynchronizationJob",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ConfigureSynchronizationJobResponse>(await this.callApi(params, req, runtime), new $_model.ConfigureSynchronizationJobResponse({}));
  }

  /**
   * Configures a data synchronization task.
   * 
   * @remarks
   * Before you call this operation, you must call the [CreateSynchronizationJob](https://help.aliyun.com/document_detail/49446.html) operation to create a data synchronization instance.
   * > 
   * *   After you call this operation to configure a data synchronization task, the task will be automatically started and prechecked. You do not need to call the [StartSynchronizationJob](https://help.aliyun.com/document_detail/49448.html) operation to start the task.
   * *   A data synchronization task may fail to be started due to precheck failures. You can call the [DescribeSynchronizationJobStatus](https://help.aliyun.com/document_detail/49453.html) operation to query the status of the task. Then, you can change parameter settings based on the error messages about the precheck failures. After you fix the issue, you must call the [StartSynchronizationJob](https://help.aliyun.com/document_detail/49448.html) operation to restart the data synchronization task.
   * 
   * @param request - ConfigureSynchronizationJobRequest
   * @returns ConfigureSynchronizationJobResponse
   */
  async configureSynchronizationJob(request: $_model.ConfigureSynchronizationJobRequest): Promise<$_model.ConfigureSynchronizationJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.configureSynchronizationJobWithOptions(request, runtime);
  }

  /**
   * Configures alert settings to monitor a data synchronization instance.
   * 
   * @param request - ConfigureSynchronizationJobAlertRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConfigureSynchronizationJobAlertResponse
   */
  async configureSynchronizationJobAlertWithOptions(request: $_model.ConfigureSynchronizationJobAlertRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ConfigureSynchronizationJobAlertResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.delayAlertPhone)) {
      query["DelayAlertPhone"] = request.delayAlertPhone;
    }

    if (!$dara.isNull(request.delayAlertStatus)) {
      query["DelayAlertStatus"] = request.delayAlertStatus;
    }

    if (!$dara.isNull(request.delayOverSeconds)) {
      query["DelayOverSeconds"] = request.delayOverSeconds;
    }

    if (!$dara.isNull(request.errorAlertPhone)) {
      query["ErrorAlertPhone"] = request.errorAlertPhone;
    }

    if (!$dara.isNull(request.errorAlertStatus)) {
      query["ErrorAlertStatus"] = request.errorAlertStatus;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.synchronizationDirection)) {
      query["SynchronizationDirection"] = request.synchronizationDirection;
    }

    if (!$dara.isNull(request.synchronizationJobId)) {
      query["SynchronizationJobId"] = request.synchronizationJobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ConfigureSynchronizationJobAlert",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ConfigureSynchronizationJobAlertResponse>(await this.callApi(params, req, runtime), new $_model.ConfigureSynchronizationJobAlertResponse({}));
  }

  /**
   * Configures alert settings to monitor a data synchronization instance.
   * 
   * @param request - ConfigureSynchronizationJobAlertRequest
   * @returns ConfigureSynchronizationJobAlertResponse
   */
  async configureSynchronizationJobAlert(request: $_model.ConfigureSynchronizationJobAlertRequest): Promise<$_model.ConfigureSynchronizationJobAlertResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.configureSynchronizationJobAlertWithOptions(request, runtime);
  }

  /**
   * Enables or disables image matching for a data synchronization instance.
   * 
   * @param request - ConfigureSynchronizationJobReplicatorCompareRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConfigureSynchronizationJobReplicatorCompareResponse
   */
  async configureSynchronizationJobReplicatorCompareWithOptions(request: $_model.ConfigureSynchronizationJobReplicatorCompareRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ConfigureSynchronizationJobReplicatorCompareResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.synchronizationDirection)) {
      query["SynchronizationDirection"] = request.synchronizationDirection;
    }

    if (!$dara.isNull(request.synchronizationJobId)) {
      query["SynchronizationJobId"] = request.synchronizationJobId;
    }

    if (!$dara.isNull(request.synchronizationReplicatorCompareEnable)) {
      query["SynchronizationReplicatorCompareEnable"] = request.synchronizationReplicatorCompareEnable;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ConfigureSynchronizationJobReplicatorCompare",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ConfigureSynchronizationJobReplicatorCompareResponse>(await this.callApi(params, req, runtime), new $_model.ConfigureSynchronizationJobReplicatorCompareResponse({}));
  }

  /**
   * Enables or disables image matching for a data synchronization instance.
   * 
   * @param request - ConfigureSynchronizationJobReplicatorCompareRequest
   * @returns ConfigureSynchronizationJobReplicatorCompareResponse
   */
  async configureSynchronizationJobReplicatorCompare(request: $_model.ConfigureSynchronizationJobReplicatorCompareRequest): Promise<$_model.ConfigureSynchronizationJobReplicatorCompareResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.configureSynchronizationJobReplicatorCompareWithOptions(request, runtime);
  }

  /**
   * Transfers resource groups of instance resources.
   * 
   * @param request - ConvertInstanceResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConvertInstanceResourceGroupResponse
   */
  async convertInstanceResourceGroupWithOptions(request: $_model.ConvertInstanceResourceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ConvertInstanceResourceGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!$dara.isNull(request.newResourceGroupId)) {
      query["NewResourceGroupId"] = request.newResourceGroupId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.zeroEtlJob)) {
      query["ZeroEtlJob"] = request.zeroEtlJob;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ConvertInstanceResourceGroup",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ConvertInstanceResourceGroupResponse>(await this.callApi(params, req, runtime), new $_model.ConvertInstanceResourceGroupResponse({}));
  }

  /**
   * Transfers resource groups of instance resources.
   * 
   * @param request - ConvertInstanceResourceGroupRequest
   * @returns ConvertInstanceResourceGroupResponse
   */
  async convertInstanceResourceGroup(request: $_model.ConvertInstanceResourceGroupRequest): Promise<$_model.ConvertInstanceResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.convertInstanceResourceGroupWithOptions(request, runtime);
  }

  /**
   * Counts tasks by condition.
   * 
   * @param request - CountJobByConditionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CountJobByConditionResponse
   */
  async countJobByConditionWithOptions(request: $_model.CountJobByConditionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CountJobByConditionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.destDbType)) {
      query["DestDbType"] = request.destDbType;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.jobType)) {
      query["JobType"] = request.jobType;
    }

    if (!$dara.isNull(request.params)) {
      query["Params"] = request.params;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.srcDbType)) {
      query["SrcDbType"] = request.srcDbType;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CountJobByCondition",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CountJobByConditionResponse>(await this.callApi(params, req, runtime), new $_model.CountJobByConditionResponse({}));
  }

  /**
   * Counts tasks by condition.
   * 
   * @param request - CountJobByConditionRequest
   * @returns CountJobByConditionResponse
   */
  async countJobByCondition(request: $_model.CountJobByConditionRequest): Promise<$_model.CountJobByConditionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.countJobByConditionWithOptions(request, runtime);
  }

  /**
   * Creates a consumer group for a change tracking task. Downstream clients can use the consumer group to consume tracked data.
   * 
   * @param request - CreateConsumerChannelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateConsumerChannelResponse
   */
  async createConsumerChannelWithOptions(request: $_model.CreateConsumerChannelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateConsumerChannelResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.consumerGroupName)) {
      query["ConsumerGroupName"] = request.consumerGroupName;
    }

    if (!$dara.isNull(request.consumerGroupPassword)) {
      query["ConsumerGroupPassword"] = request.consumerGroupPassword;
    }

    if (!$dara.isNull(request.consumerGroupUserName)) {
      query["ConsumerGroupUserName"] = request.consumerGroupUserName;
    }

    if (!$dara.isNull(request.dtsInstanceId)) {
      query["DtsInstanceId"] = request.dtsInstanceId;
    }

    if (!$dara.isNull(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateConsumerChannel",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateConsumerChannelResponse>(await this.callApi(params, req, runtime), new $_model.CreateConsumerChannelResponse({}));
  }

  /**
   * Creates a consumer group for a change tracking task. Downstream clients can use the consumer group to consume tracked data.
   * 
   * @param request - CreateConsumerChannelRequest
   * @returns CreateConsumerChannelResponse
   */
  async createConsumerChannel(request: $_model.CreateConsumerChannelRequest): Promise<$_model.CreateConsumerChannelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createConsumerChannelWithOptions(request, runtime);
  }

  /**
   * Creates a consumer group for a change tracking instance.
   * 
   * @param request - CreateConsumerGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateConsumerGroupResponse
   */
  async createConsumerGroupWithOptions(request: $_model.CreateConsumerGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateConsumerGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.consumerGroupName)) {
      query["ConsumerGroupName"] = request.consumerGroupName;
    }

    if (!$dara.isNull(request.consumerGroupPassword)) {
      query["ConsumerGroupPassword"] = request.consumerGroupPassword;
    }

    if (!$dara.isNull(request.consumerGroupUserName)) {
      query["ConsumerGroupUserName"] = request.consumerGroupUserName;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.subscriptionInstanceId)) {
      query["SubscriptionInstanceId"] = request.subscriptionInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateConsumerGroup",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateConsumerGroupResponse>(await this.callApi(params, req, runtime), new $_model.CreateConsumerGroupResponse({}));
  }

  /**
   * Creates a consumer group for a change tracking instance.
   * 
   * @param request - CreateConsumerGroupRequest
   * @returns CreateConsumerGroupResponse
   */
  async createConsumerGroup(request: $_model.CreateConsumerGroupRequest): Promise<$_model.CreateConsumerGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createConsumerGroupWithOptions(request, runtime);
  }

  /**
   * Creates an alert rule.
   * 
   * @param request - CreateDedicatedClusterMonitorRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDedicatedClusterMonitorRuleResponse
   */
  async createDedicatedClusterMonitorRuleWithOptions(request: $_model.CreateDedicatedClusterMonitorRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDedicatedClusterMonitorRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cpuAlarmThreshold)) {
      query["CpuAlarmThreshold"] = request.cpuAlarmThreshold;
    }

    if (!$dara.isNull(request.dedicatedClusterId)) {
      query["DedicatedClusterId"] = request.dedicatedClusterId;
    }

    if (!$dara.isNull(request.diskAlarmThreshold)) {
      query["DiskAlarmThreshold"] = request.diskAlarmThreshold;
    }

    if (!$dara.isNull(request.duAlarmThreshold)) {
      query["DuAlarmThreshold"] = request.duAlarmThreshold;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.memAlarmThreshold)) {
      query["MemAlarmThreshold"] = request.memAlarmThreshold;
    }

    if (!$dara.isNull(request.noticeSwitch)) {
      query["NoticeSwitch"] = request.noticeSwitch;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.phones)) {
      query["Phones"] = request.phones;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDedicatedClusterMonitorRule",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDedicatedClusterMonitorRuleResponse>(await this.callApi(params, req, runtime), new $_model.CreateDedicatedClusterMonitorRuleResponse({}));
  }

  /**
   * Creates an alert rule.
   * 
   * @param request - CreateDedicatedClusterMonitorRuleRequest
   * @returns CreateDedicatedClusterMonitorRuleResponse
   */
  async createDedicatedClusterMonitorRule(request: $_model.CreateDedicatedClusterMonitorRuleRequest): Promise<$_model.CreateDedicatedClusterMonitorRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDedicatedClusterMonitorRuleWithOptions(request, runtime);
  }

  /**
   * Purchases a Data Transmission Service (DTS) instance.
   * 
   * @remarks
   *   Before you call this operation, make sure that you fully understand the billing methods and [pricing](https://www.alibabacloud.com/zh/product/apsaradb-for-mongodb/pricing) of DTS.
   * *   If you want to run a DTS task on a DTS dedicated cluster, you must configure the task before you purchase a DTS instance. You can call the [ConfigureDtsJob](https://help.aliyun.com/document_detail/208399.html) operation to configure a DTS task.
   * 
   * @param request - CreateDtsInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDtsInstanceResponse
   */
  async createDtsInstanceWithOptions(request: $_model.CreateDtsInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDtsInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!$dara.isNull(request.autoStart)) {
      query["AutoStart"] = request.autoStart;
    }

    if (!$dara.isNull(request.computeUnit)) {
      query["ComputeUnit"] = request.computeUnit;
    }

    if (!$dara.isNull(request.databaseCount)) {
      query["DatabaseCount"] = request.databaseCount;
    }

    if (!$dara.isNull(request.destinationEndpointEngineName)) {
      query["DestinationEndpointEngineName"] = request.destinationEndpointEngineName;
    }

    if (!$dara.isNull(request.destinationRegion)) {
      query["DestinationRegion"] = request.destinationRegion;
    }

    if (!$dara.isNull(request.dtsRegion)) {
      query["DtsRegion"] = request.dtsRegion;
    }

    if (!$dara.isNull(request.du)) {
      query["Du"] = request.du;
    }

    if (!$dara.isNull(request.feeType)) {
      query["FeeType"] = request.feeType;
    }

    if (!$dara.isNull(request.instanceClass)) {
      query["InstanceClass"] = request.instanceClass;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.maxDu)) {
      query["MaxDu"] = request.maxDu;
    }

    if (!$dara.isNull(request.minDu)) {
      query["MinDu"] = request.minDu;
    }

    if (!$dara.isNull(request.payType)) {
      query["PayType"] = request.payType;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.quantity)) {
      query["Quantity"] = request.quantity;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.sourceEndpointEngineName)) {
      query["SourceEndpointEngineName"] = request.sourceEndpointEngineName;
    }

    if (!$dara.isNull(request.sourceRegion)) {
      query["SourceRegion"] = request.sourceRegion;
    }

    if (!$dara.isNull(request.syncArchitecture)) {
      query["SyncArchitecture"] = request.syncArchitecture;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    if (!$dara.isNull(request.usedTime)) {
      query["UsedTime"] = request.usedTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDtsInstance",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDtsInstanceResponse>(await this.callApi(params, req, runtime), new $_model.CreateDtsInstanceResponse({}));
  }

  /**
   * Purchases a Data Transmission Service (DTS) instance.
   * 
   * @remarks
   *   Before you call this operation, make sure that you fully understand the billing methods and [pricing](https://www.alibabacloud.com/zh/product/apsaradb-for-mongodb/pricing) of DTS.
   * *   If you want to run a DTS task on a DTS dedicated cluster, you must configure the task before you purchase a DTS instance. You can call the [ConfigureDtsJob](https://help.aliyun.com/document_detail/208399.html) operation to configure a DTS task.
   * 
   * @param request - CreateDtsInstanceRequest
   * @returns CreateDtsInstanceResponse
   */
  async createDtsInstance(request: $_model.CreateDtsInstanceRequest): Promise<$_model.CreateDtsInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDtsInstanceWithOptions(request, runtime);
  }

  /**
   * Creates or modifies an alert rule for a Data Transmission Service (DTS) task.
   * 
   * @remarks
   * DTS provides the following metrics for DTS tasks:************
   * *   **Latency**: DTS monitors the latency of a DTS task. If the latency of the task exceeds the specified threshold, an alert is triggered. The threshold is specified in units of seconds.
   * *   **Status**: DTS monitors the status of a DTS task. If the state of the task changes to **Error** or **Restore**, an alert is triggered.
   * *   **Full Timeout**: DTS monitors the duration of a DTS task. If the duration of the task exceeds the specified threshold, an alert is triggered. The threshold is specified in units of hours.
   * 
   * @param request - CreateJobMonitorRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateJobMonitorRuleResponse
   */
  async createJobMonitorRuleWithOptions(request: $_model.CreateJobMonitorRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateJobMonitorRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.delayRuleTime)) {
      query["DelayRuleTime"] = request.delayRuleTime;
    }

    if (!$dara.isNull(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!$dara.isNull(request.noticeValue)) {
      query["NoticeValue"] = request.noticeValue;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.phone)) {
      query["Phone"] = request.phone;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.state)) {
      query["State"] = request.state;
    }

    if (!$dara.isNull(request.times)) {
      query["Times"] = request.times;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateJobMonitorRule",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateJobMonitorRuleResponse>(await this.callApi(params, req, runtime), new $_model.CreateJobMonitorRuleResponse({}));
  }

  /**
   * Creates or modifies an alert rule for a Data Transmission Service (DTS) task.
   * 
   * @remarks
   * DTS provides the following metrics for DTS tasks:************
   * *   **Latency**: DTS monitors the latency of a DTS task. If the latency of the task exceeds the specified threshold, an alert is triggered. The threshold is specified in units of seconds.
   * *   **Status**: DTS monitors the status of a DTS task. If the state of the task changes to **Error** or **Restore**, an alert is triggered.
   * *   **Full Timeout**: DTS monitors the duration of a DTS task. If the duration of the task exceeds the specified threshold, an alert is triggered. The threshold is specified in units of hours.
   * 
   * @param request - CreateJobMonitorRuleRequest
   * @returns CreateJobMonitorRuleResponse
   */
  async createJobMonitorRule(request: $_model.CreateJobMonitorRuleRequest): Promise<$_model.CreateJobMonitorRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createJobMonitorRuleWithOptions(request, runtime);
  }

  /**
   * Purchases a data migration instance.
   * 
   * @param request - CreateMigrationJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMigrationJobResponse
   */
  async createMigrationJobWithOptions(request: $_model.CreateMigrationJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMigrationJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.migrationJobClass)) {
      query["MigrationJobClass"] = request.migrationJobClass;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateMigrationJob",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateMigrationJobResponse>(await this.callApi(params, req, runtime), new $_model.CreateMigrationJobResponse({}));
  }

  /**
   * Purchases a data migration instance.
   * 
   * @param request - CreateMigrationJobRequest
   * @returns CreateMigrationJobResponse
   */
  async createMigrationJob(request: $_model.CreateMigrationJobRequest): Promise<$_model.CreateMigrationJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createMigrationJobWithOptions(request, runtime);
  }

  /**
   * Creates a reverse task for a data synchronization or migration task.
   * 
   * @remarks
   * 调用接口创建的反向任务会立即进行预检查，预检查通过后会进行增量数据采集，增量数据写入模块不会运行（需要调用**StartReverseWriter**接口运行）。
   * > 创建的反向任务固定为同步任务，且只有增量写入模块。
   * 
   * @param request - CreateReverseDtsJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateReverseDtsJobResponse
   */
  async createReverseDtsJobWithOptions(request: $_model.CreateReverseDtsJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateReverseDtsJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.shardPassword)) {
      query["ShardPassword"] = request.shardPassword;
    }

    if (!$dara.isNull(request.shardUsername)) {
      query["ShardUsername"] = request.shardUsername;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateReverseDtsJob",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateReverseDtsJobResponse>(await this.callApi(params, req, runtime), new $_model.CreateReverseDtsJobResponse({}));
  }

  /**
   * Creates a reverse task for a data synchronization or migration task.
   * 
   * @remarks
   * 调用接口创建的反向任务会立即进行预检查，预检查通过后会进行增量数据采集，增量数据写入模块不会运行（需要调用**StartReverseWriter**接口运行）。
   * > 创建的反向任务固定为同步任务，且只有增量写入模块。
   * 
   * @param request - CreateReverseDtsJobRequest
   * @returns CreateReverseDtsJobResponse
   */
  async createReverseDtsJob(request: $_model.CreateReverseDtsJobRequest): Promise<$_model.CreateReverseDtsJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createReverseDtsJobWithOptions(request, runtime);
  }

  /**
   * Purchases a change tracking instance.
   * 
   * @param request - CreateSubscriptionInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSubscriptionInstanceResponse
   */
  async createSubscriptionInstanceWithOptions(request: $_model.CreateSubscriptionInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSubscriptionInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.usedTime)) {
      query["UsedTime"] = request.usedTime;
    }

    if (!$dara.isNull(request.sourceEndpoint)) {
      query["SourceEndpoint"] = request.sourceEndpoint;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSubscriptionInstance",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSubscriptionInstanceResponse>(await this.callApi(params, req, runtime), new $_model.CreateSubscriptionInstanceResponse({}));
  }

  /**
   * Purchases a change tracking instance.
   * 
   * @param request - CreateSubscriptionInstanceRequest
   * @returns CreateSubscriptionInstanceResponse
   */
  async createSubscriptionInstance(request: $_model.CreateSubscriptionInstanceRequest): Promise<$_model.CreateSubscriptionInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSubscriptionInstanceWithOptions(request, runtime);
  }

  /**
   * Creates a data synchronization instance.
   * 
   * @param request - CreateSynchronizationJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSynchronizationJobResponse
   */
  async createSynchronizationJobWithOptions(request: $_model.CreateSynchronizationJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSynchronizationJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.DBInstanceCount)) {
      query["DBInstanceCount"] = request.DBInstanceCount;
    }

    if (!$dara.isNull(request.destRegion)) {
      query["DestRegion"] = request.destRegion;
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.sourceRegion)) {
      query["SourceRegion"] = request.sourceRegion;
    }

    if (!$dara.isNull(request.synchronizationJobClass)) {
      query["SynchronizationJobClass"] = request.synchronizationJobClass;
    }

    if (!$dara.isNull(request.topology)) {
      query["Topology"] = request.topology;
    }

    if (!$dara.isNull(request.usedTime)) {
      query["UsedTime"] = request.usedTime;
    }

    if (!$dara.isNull(request.networkType)) {
      query["networkType"] = request.networkType;
    }

    if (!$dara.isNull(request.destinationEndpoint)) {
      query["DestinationEndpoint"] = request.destinationEndpoint;
    }

    if (!$dara.isNull(request.sourceEndpoint)) {
      query["SourceEndpoint"] = request.sourceEndpoint;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSynchronizationJob",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSynchronizationJobResponse>(await this.callApi(params, req, runtime), new $_model.CreateSynchronizationJobResponse({}));
  }

  /**
   * Creates a data synchronization instance.
   * 
   * @param request - CreateSynchronizationJobRequest
   * @returns CreateSynchronizationJobResponse
   */
  async createSynchronizationJob(request: $_model.CreateSynchronizationJobRequest): Promise<$_model.CreateSynchronizationJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSynchronizationJobWithOptions(request, runtime);
  }

  /**
   * Deletes a consumer group.
   * 
   * @param request - DeleteConsumerChannelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteConsumerChannelResponse
   */
  async deleteConsumerChannelWithOptions(request: $_model.DeleteConsumerChannelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteConsumerChannelResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.consumerGroupId)) {
      query["ConsumerGroupId"] = request.consumerGroupId;
    }

    if (!$dara.isNull(request.dtsInstanceId)) {
      query["DtsInstanceId"] = request.dtsInstanceId;
    }

    if (!$dara.isNull(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteConsumerChannel",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteConsumerChannelResponse>(await this.callApi(params, req, runtime), new $_model.DeleteConsumerChannelResponse({}));
  }

  /**
   * Deletes a consumer group.
   * 
   * @param request - DeleteConsumerChannelRequest
   * @returns DeleteConsumerChannelResponse
   */
  async deleteConsumerChannel(request: $_model.DeleteConsumerChannelRequest): Promise<$_model.DeleteConsumerChannelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteConsumerChannelWithOptions(request, runtime);
  }

  /**
   * Deletes a consumer group.
   * 
   * @param request - DeleteConsumerGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteConsumerGroupResponse
   */
  async deleteConsumerGroupWithOptions(request: $_model.DeleteConsumerGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteConsumerGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.consumerGroupID)) {
      query["ConsumerGroupID"] = request.consumerGroupID;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.subscriptionInstanceId)) {
      query["SubscriptionInstanceId"] = request.subscriptionInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteConsumerGroup",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteConsumerGroupResponse>(await this.callApi(params, req, runtime), new $_model.DeleteConsumerGroupResponse({}));
  }

  /**
   * Deletes a consumer group.
   * 
   * @param request - DeleteConsumerGroupRequest
   * @returns DeleteConsumerGroupResponse
   */
  async deleteConsumerGroup(request: $_model.DeleteConsumerGroupRequest): Promise<$_model.DeleteConsumerGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteConsumerGroupWithOptions(request, runtime);
  }

  /**
   * Deletes a data migration, data synchronization, or change tracking task.
   * 
   * @param request - DeleteDtsJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDtsJobResponse
   */
  async deleteDtsJobWithOptions(request: $_model.DeleteDtsJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDtsJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dtsInstanceId)) {
      query["DtsInstanceId"] = request.dtsInstanceId;
    }

    if (!$dara.isNull(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!$dara.isNull(request.jobType)) {
      query["JobType"] = request.jobType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.synchronizationDirection)) {
      query["SynchronizationDirection"] = request.synchronizationDirection;
    }

    if (!$dara.isNull(request.zeroEtlJob)) {
      query["ZeroEtlJob"] = request.zeroEtlJob;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDtsJob",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDtsJobResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDtsJobResponse({}));
  }

  /**
   * Deletes a data migration, data synchronization, or change tracking task.
   * 
   * @param request - DeleteDtsJobRequest
   * @returns DeleteDtsJobResponse
   */
  async deleteDtsJob(request: $_model.DeleteDtsJobRequest): Promise<$_model.DeleteDtsJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDtsJobWithOptions(request, runtime);
  }

  /**
   * Deletes multiple data migration, data synchronization, or change tracking tasks.
   * 
   * @param request - DeleteDtsJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDtsJobsResponse
   */
  async deleteDtsJobsWithOptions(request: $_model.DeleteDtsJobsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDtsJobsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dtsJobIds)) {
      query["DtsJobIds"] = request.dtsJobIds;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.zeroEtlJob)) {
      query["ZeroEtlJob"] = request.zeroEtlJob;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDtsJobs",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDtsJobsResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDtsJobsResponse({}));
  }

  /**
   * Deletes multiple data migration, data synchronization, or change tracking tasks.
   * 
   * @param request - DeleteDtsJobsRequest
   * @returns DeleteDtsJobsResponse
   */
  async deleteDtsJobs(request: $_model.DeleteDtsJobsRequest): Promise<$_model.DeleteDtsJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDtsJobsWithOptions(request, runtime);
  }

  /**
   * Releases a data migration instance.
   * 
   * @param request - DeleteMigrationJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMigrationJobResponse
   */
  async deleteMigrationJobWithOptions(request: $_model.DeleteMigrationJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMigrationJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.migrationJobId)) {
      query["MigrationJobId"] = request.migrationJobId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMigrationJob",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteMigrationJobResponse>(await this.callApi(params, req, runtime), new $_model.DeleteMigrationJobResponse({}));
  }

  /**
   * Releases a data migration instance.
   * 
   * @param request - DeleteMigrationJobRequest
   * @returns DeleteMigrationJobResponse
   */
  async deleteMigrationJob(request: $_model.DeleteMigrationJobRequest): Promise<$_model.DeleteMigrationJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteMigrationJobWithOptions(request, runtime);
  }

  /**
   * Releases a change tracking instance.
   * 
   * @param request - DeleteSubscriptionInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSubscriptionInstanceResponse
   */
  async deleteSubscriptionInstanceWithOptions(request: $_model.DeleteSubscriptionInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSubscriptionInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.subscriptionInstanceId)) {
      query["SubscriptionInstanceId"] = request.subscriptionInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSubscriptionInstance",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSubscriptionInstanceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSubscriptionInstanceResponse({}));
  }

  /**
   * Releases a change tracking instance.
   * 
   * @param request - DeleteSubscriptionInstanceRequest
   * @returns DeleteSubscriptionInstanceResponse
   */
  async deleteSubscriptionInstance(request: $_model.DeleteSubscriptionInstanceRequest): Promise<$_model.DeleteSubscriptionInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSubscriptionInstanceWithOptions(request, runtime);
  }

  /**
   * Releases a data synchronization instance.
   * 
   * @param request - DeleteSynchronizationJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSynchronizationJobResponse
   */
  async deleteSynchronizationJobWithOptions(request: $_model.DeleteSynchronizationJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSynchronizationJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.synchronizationJobId)) {
      query["SynchronizationJobId"] = request.synchronizationJobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSynchronizationJob",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSynchronizationJobResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSynchronizationJobResponse({}));
  }

  /**
   * Releases a data synchronization instance.
   * 
   * @param request - DeleteSynchronizationJobRequest
   * @returns DeleteSynchronizationJobResponse
   */
  async deleteSynchronizationJob(request: $_model.DeleteSynchronizationJobRequest): Promise<$_model.DeleteSynchronizationJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSynchronizationJobWithOptions(request, runtime);
  }

  /**
   * 查询数据投递链路store账号
   * 
   * @param request - DescribeChannelAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeChannelAccountResponse
   */
  async describeChannelAccountWithOptions(request: $_model.DescribeChannelAccountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeChannelAccountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
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

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeChannelAccount",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeChannelAccountResponse>(await this.callApi(params, req, runtime), new $_model.DescribeChannelAccountResponse({}));
  }

  /**
   * 查询数据投递链路store账号
   * 
   * @param request - DescribeChannelAccountRequest
   * @returns DescribeChannelAccountResponse
   */
  async describeChannelAccount(request: $_model.DescribeChannelAccountRequest): Promise<$_model.DescribeChannelAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeChannelAccountWithOptions(request, runtime);
  }

  /**
   * 请求所有数据校验任务数据
   * 
   * @param request - DescribeCheckJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCheckJobsResponse
   */
  async describeCheckJobsWithOptions(request: $_model.DescribeCheckJobsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCheckJobsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.checkJobId)) {
      query["CheckJobId"] = request.checkJobId;
    }

    if (!$dara.isNull(request.checkType)) {
      query["CheckType"] = request.checkType;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.jobName)) {
      query["JobName"] = request.jobName;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCheckJobs",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCheckJobsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCheckJobsResponse({}));
  }

  /**
   * 请求所有数据校验任务数据
   * 
   * @param request - DescribeCheckJobsRequest
   * @returns DescribeCheckJobsResponse
   */
  async describeCheckJobs(request: $_model.DescribeCheckJobsRequest): Promise<$_model.DescribeCheckJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCheckJobsWithOptions(request, runtime);
  }

  /**
   * Queries operation logs of a Data Transmission Service (DTS) dedicated cluster.
   * 
   * @param request - DescribeClusterOperateLogsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeClusterOperateLogsResponse
   */
  async describeClusterOperateLogsWithOptions(request: $_model.DescribeClusterOperateLogsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeClusterOperateLogsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountId)) {
      body["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dedicatedClusterId)) {
      body["DedicatedClusterId"] = request.dedicatedClusterId;
    }

    if (!$dara.isNull(request.dtsJobId)) {
      body["DtsJobId"] = request.dtsJobId;
    }

    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.ownerID)) {
      body["OwnerID"] = request.ownerID;
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
      action: "DescribeClusterOperateLogs",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeClusterOperateLogsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeClusterOperateLogsResponse({}));
  }

  /**
   * Queries operation logs of a Data Transmission Service (DTS) dedicated cluster.
   * 
   * @param request - DescribeClusterOperateLogsRequest
   * @returns DescribeClusterOperateLogsResponse
   */
  async describeClusterOperateLogs(request: $_model.DescribeClusterOperateLogsRequest): Promise<$_model.DescribeClusterOperateLogsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeClusterOperateLogsWithOptions(request, runtime);
  }

  /**
   * Queries the resource usage of a cluster.
   * 
   * @param request - DescribeClusterUsedUtilizationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeClusterUsedUtilizationResponse
   */
  async describeClusterUsedUtilizationWithOptions(request: $_model.DescribeClusterUsedUtilizationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeClusterUsedUtilizationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountId)) {
      body["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dedicatedClusterId)) {
      body["DedicatedClusterId"] = request.dedicatedClusterId;
    }

    if (!$dara.isNull(request.dtsJobId)) {
      body["DtsJobId"] = request.dtsJobId;
    }

    if (!$dara.isNull(request.env)) {
      body["Env"] = request.env;
    }

    if (!$dara.isNull(request.metricType)) {
      body["MetricType"] = request.metricType;
    }

    if (!$dara.isNull(request.ownerID)) {
      body["OwnerID"] = request.ownerID;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.securityToken)) {
      body["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeClusterUsedUtilization",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeClusterUsedUtilizationResponse>(await this.callApi(params, req, runtime), new $_model.DescribeClusterUsedUtilizationResponse({}));
  }

  /**
   * Queries the resource usage of a cluster.
   * 
   * @param request - DescribeClusterUsedUtilizationRequest
   * @returns DescribeClusterUsedUtilizationResponse
   */
  async describeClusterUsedUtilization(request: $_model.DescribeClusterUsedUtilizationRequest): Promise<$_model.DescribeClusterUsedUtilizationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeClusterUsedUtilizationWithOptions(request, runtime);
  }

  /**
   * Queries the connectivity of Data Transmission Service (DTS) servers to the source and destination databases.
   * 
   * @param request - DescribeConnectionStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeConnectionStatusResponse
   */
  async describeConnectionStatusWithOptions(request: $_model.DescribeConnectionStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeConnectionStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.destinationEndpointArchitecture)) {
      query["DestinationEndpointArchitecture"] = request.destinationEndpointArchitecture;
    }

    if (!$dara.isNull(request.destinationEndpointDatabaseName)) {
      query["DestinationEndpointDatabaseName"] = request.destinationEndpointDatabaseName;
    }

    if (!$dara.isNull(request.destinationEndpointEngineName)) {
      query["DestinationEndpointEngineName"] = request.destinationEndpointEngineName;
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.sourceEndpointArchitecture)) {
      query["SourceEndpointArchitecture"] = request.sourceEndpointArchitecture;
    }

    if (!$dara.isNull(request.sourceEndpointDatabaseName)) {
      query["SourceEndpointDatabaseName"] = request.sourceEndpointDatabaseName;
    }

    if (!$dara.isNull(request.sourceEndpointEngineName)) {
      query["SourceEndpointEngineName"] = request.sourceEndpointEngineName;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeConnectionStatus",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeConnectionStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribeConnectionStatusResponse({}));
  }

  /**
   * Queries the connectivity of Data Transmission Service (DTS) servers to the source and destination databases.
   * 
   * @param request - DescribeConnectionStatusRequest
   * @returns DescribeConnectionStatusResponse
   */
  async describeConnectionStatus(request: $_model.DescribeConnectionStatusRequest): Promise<$_model.DescribeConnectionStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeConnectionStatusWithOptions(request, runtime);
  }

  /**
   * Queries the information of a consumer group, including the consumer group ID, consumer group name, username, and message latency.
   * 
   * @param request - DescribeConsumerChannelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeConsumerChannelResponse
   */
  async describeConsumerChannelWithOptions(request: $_model.DescribeConsumerChannelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeConsumerChannelResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dtsInstanceId)) {
      query["DtsInstanceId"] = request.dtsInstanceId;
    }

    if (!$dara.isNull(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.parentChannelId)) {
      query["ParentChannelId"] = request.parentChannelId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeConsumerChannel",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeConsumerChannelResponse>(await this.callApi(params, req, runtime), new $_model.DescribeConsumerChannelResponse({}));
  }

  /**
   * Queries the information of a consumer group, including the consumer group ID, consumer group name, username, and message latency.
   * 
   * @param request - DescribeConsumerChannelRequest
   * @returns DescribeConsumerChannelResponse
   */
  async describeConsumerChannel(request: $_model.DescribeConsumerChannelRequest): Promise<$_model.DescribeConsumerChannelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeConsumerChannelWithOptions(request, runtime);
  }

  /**
   * Queries the details of consumer groups in a change tracking instance.
   * 
   * @param request - DescribeConsumerGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeConsumerGroupResponse
   */
  async describeConsumerGroupWithOptions(request: $_model.DescribeConsumerGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeConsumerGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.subscriptionInstanceId)) {
      query["SubscriptionInstanceId"] = request.subscriptionInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeConsumerGroup",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeConsumerGroupResponse>(await this.callApi(params, req, runtime), new $_model.DescribeConsumerGroupResponse({}));
  }

  /**
   * Queries the details of consumer groups in a change tracking instance.
   * 
   * @param request - DescribeConsumerGroupRequest
   * @returns DescribeConsumerGroupResponse
   */
  async describeConsumerGroup(request: $_model.DescribeConsumerGroupRequest): Promise<$_model.DescribeConsumerGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeConsumerGroupWithOptions(request, runtime);
  }

  /**
   * Queries the CIDR blocks of DTS servers.
   * 
   * @param request - DescribeDTSIPRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDTSIPResponse
   */
  async describeDTSIPWithOptions(request: $_model.DescribeDTSIPRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDTSIPResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.destinationEndpointRegion)) {
      query["DestinationEndpointRegion"] = request.destinationEndpointRegion;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.sourceEndpointRegion)) {
      query["SourceEndpointRegion"] = request.sourceEndpointRegion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDTSIP",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDTSIPResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDTSIPResponse({}));
  }

  /**
   * Queries the CIDR blocks of DTS servers.
   * 
   * @param request - DescribeDTSIPRequest
   * @returns DescribeDTSIPResponse
   */
  async describeDTSIP(request: $_model.DescribeDTSIPRequest): Promise<$_model.DescribeDTSIPResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDTSIPWithOptions(request, runtime);
  }

  /**
   * Queries the download URL of the data consistency verification report.
   * 
   * @param request - DescribeDataCheckReportUrlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDataCheckReportUrlResponse
   */
  async describeDataCheckReportUrlWithOptions(request: $_model.DescribeDataCheckReportUrlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDataCheckReportUrlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.checkType)) {
      query["CheckType"] = request.checkType;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.tbName)) {
      query["TbName"] = request.tbName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDataCheckReportUrl",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDataCheckReportUrlResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDataCheckReportUrlResponse({}));
  }

  /**
   * Queries the download URL of the data consistency verification report.
   * 
   * @param request - DescribeDataCheckReportUrlRequest
   * @returns DescribeDataCheckReportUrlResponse
   */
  async describeDataCheckReportUrl(request: $_model.DescribeDataCheckReportUrlRequest): Promise<$_model.DescribeDataCheckReportUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDataCheckReportUrlWithOptions(request, runtime);
  }

  /**
   * Queries the details of a data verification task.
   * 
   * @param request - DescribeDataCheckTableDetailsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDataCheckTableDetailsResponse
   */
  async describeDataCheckTableDetailsWithOptions(request: $_model.DescribeDataCheckTableDetailsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDataCheckTableDetailsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.checkType)) {
      query["CheckType"] = request.checkType;
    }

    if (!$dara.isNull(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
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

    if (!$dara.isNull(request.schemaName)) {
      query["SchemaName"] = request.schemaName;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDataCheckTableDetails",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDataCheckTableDetailsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDataCheckTableDetailsResponse({}));
  }

  /**
   * Queries the details of a data verification task.
   * 
   * @param request - DescribeDataCheckTableDetailsRequest
   * @returns DescribeDataCheckTableDetailsResponse
   */
  async describeDataCheckTableDetails(request: $_model.DescribeDataCheckTableDetailsRequest): Promise<$_model.DescribeDataCheckTableDetailsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDataCheckTableDetailsWithOptions(request, runtime);
  }

  /**
   * Queries the information about inconsistent data in the data verification task.
   * 
   * @param request - DescribeDataCheckTableDiffDetailsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDataCheckTableDiffDetailsResponse
   */
  async describeDataCheckTableDiffDetailsWithOptions(request: $_model.DescribeDataCheckTableDiffDetailsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDataCheckTableDiffDetailsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.checkType)) {
      query["CheckType"] = request.checkType;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
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

    if (!$dara.isNull(request.tbName)) {
      query["TbName"] = request.tbName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDataCheckTableDiffDetails",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDataCheckTableDiffDetailsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDataCheckTableDiffDetailsResponse({}));
  }

  /**
   * Queries the information about inconsistent data in the data verification task.
   * 
   * @param request - DescribeDataCheckTableDiffDetailsRequest
   * @returns DescribeDataCheckTableDiffDetailsResponse
   */
  async describeDataCheckTableDiffDetails(request: $_model.DescribeDataCheckTableDiffDetailsRequest): Promise<$_model.DescribeDataCheckTableDiffDetailsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDataCheckTableDiffDetailsWithOptions(request, runtime);
  }

  /**
   * Queries the information about a dedicated cluster.
   * 
   * @param request - DescribeDedicatedClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDedicatedClusterResponse
   */
  async describeDedicatedClusterWithOptions(request: $_model.DescribeDedicatedClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDedicatedClusterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dedicatedClusterId)) {
      query["DedicatedClusterId"] = request.dedicatedClusterId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDedicatedCluster",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDedicatedClusterResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDedicatedClusterResponse({}));
  }

  /**
   * Queries the information about a dedicated cluster.
   * 
   * @param request - DescribeDedicatedClusterRequest
   * @returns DescribeDedicatedClusterResponse
   */
  async describeDedicatedCluster(request: $_model.DescribeDedicatedClusterRequest): Promise<$_model.DescribeDedicatedClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDedicatedClusterWithOptions(request, runtime);
  }

  /**
   * Queries the information about an alert rule.
   * 
   * @param request - DescribeDedicatedClusterMonitorRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDedicatedClusterMonitorRuleResponse
   */
  async describeDedicatedClusterMonitorRuleWithOptions(request: $_model.DescribeDedicatedClusterMonitorRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDedicatedClusterMonitorRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dedicatedClusterId)) {
      query["DedicatedClusterId"] = request.dedicatedClusterId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDedicatedClusterMonitorRule",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDedicatedClusterMonitorRuleResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDedicatedClusterMonitorRuleResponse({}));
  }

  /**
   * Queries the information about an alert rule.
   * 
   * @param request - DescribeDedicatedClusterMonitorRuleRequest
   * @returns DescribeDedicatedClusterMonitorRuleResponse
   */
  async describeDedicatedClusterMonitorRule(request: $_model.DescribeDedicatedClusterMonitorRuleRequest): Promise<$_model.DescribeDedicatedClusterMonitorRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDedicatedClusterMonitorRuleWithOptions(request, runtime);
  }

  /**
   * Queries the details of extract, transform, and load (ETL) tasks.
   * 
   * @param request - DescribeDtsEtlJobVersionInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDtsEtlJobVersionInfoResponse
   */
  async describeDtsEtlJobVersionInfoWithOptions(request: $_model.DescribeDtsEtlJobVersionInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDtsEtlJobVersionInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dtsInstanceId)) {
      query["DtsInstanceId"] = request.dtsInstanceId;
    }

    if (!$dara.isNull(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDtsEtlJobVersionInfo",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDtsEtlJobVersionInfoResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDtsEtlJobVersionInfoResponse({}));
  }

  /**
   * Queries the details of extract, transform, and load (ETL) tasks.
   * 
   * @param request - DescribeDtsEtlJobVersionInfoRequest
   * @returns DescribeDtsEtlJobVersionInfoResponse
   */
  async describeDtsEtlJobVersionInfo(request: $_model.DescribeDtsEtlJobVersionInfoRequest): Promise<$_model.DescribeDtsEtlJobVersionInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDtsEtlJobVersionInfoWithOptions(request, runtime);
  }

  /**
   * 查询DTS任务配置
   * 
   * @param request - DescribeDtsJobConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDtsJobConfigResponse
   */
  async describeDtsJobConfigWithOptions(request: $_model.DescribeDtsJobConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDtsJobConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!$dara.isNull(request.forAcceleration)) {
      query["ForAcceleration"] = request.forAcceleration;
    }

    if (!$dara.isNull(request.module)) {
      query["Module"] = request.module;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDtsJobConfig",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDtsJobConfigResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDtsJobConfigResponse({}));
  }

  /**
   * 查询DTS任务配置
   * 
   * @param request - DescribeDtsJobConfigRequest
   * @returns DescribeDtsJobConfigResponse
   */
  async describeDtsJobConfig(request: $_model.DescribeDtsJobConfigRequest): Promise<$_model.DescribeDtsJobConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDtsJobConfigWithOptions(request, runtime);
  }

  /**
   * The latency of incremental data migration or synchronization.
   * \\\\\\\\\\>  If you query data migration tasks, the unit of this parameter is milliseconds. If you query data synchronization tasks, the unit of this parameter is seconds.
   * 
   * @param request - DescribeDtsJobDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDtsJobDetailResponse
   */
  async describeDtsJobDetailWithOptions(request: $_model.DescribeDtsJobDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDtsJobDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dtsInstanceID)) {
      query["DtsInstanceID"] = request.dtsInstanceID;
    }

    if (!$dara.isNull(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.syncSubJobHistory)) {
      query["SyncSubJobHistory"] = request.syncSubJobHistory;
    }

    if (!$dara.isNull(request.synchronizationDirection)) {
      query["SynchronizationDirection"] = request.synchronizationDirection;
    }

    if (!$dara.isNull(request.zeroEtlJob)) {
      query["ZeroEtlJob"] = request.zeroEtlJob;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDtsJobDetail",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDtsJobDetailResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDtsJobDetailResponse({}));
  }

  /**
   * The latency of incremental data migration or synchronization.
   * \\\\\\\\\\>  If you query data migration tasks, the unit of this parameter is milliseconds. If you query data synchronization tasks, the unit of this parameter is seconds.
   * 
   * @param request - DescribeDtsJobDetailRequest
   * @returns DescribeDtsJobDetailResponse
   */
  async describeDtsJobDetail(request: $_model.DescribeDtsJobDetailRequest): Promise<$_model.DescribeDtsJobDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDtsJobDetailWithOptions(request, runtime);
  }

  /**
   * Queries the list of Data Transmission Service (DTS) tasks and the details of each task.
   * 
   * @remarks
   * ## Debugging
   * [OpenAPI Explorer automatically calculates the signature value. For your convenience, we recommend that you call this operation in OpenAPI Explorer. OpenAPI Explorer dynamically generates the sample code of the operation for different SDKs.](https://api.aliyun.com/#product=Dts\\&api=DescribeDtsJobs\\&type=RPC\\&version=2020-01-01)
   * 
   * @param request - DescribeDtsJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDtsJobsResponse
   */
  async describeDtsJobsWithOptions(request: $_model.DescribeDtsJobsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDtsJobsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dedicatedClusterId)) {
      query["DedicatedClusterId"] = request.dedicatedClusterId;
    }

    if (!$dara.isNull(request.destProductType)) {
      query["DestProductType"] = request.destProductType;
    }

    if (!$dara.isNull(request.dtsBisLabel)) {
      query["DtsBisLabel"] = request.dtsBisLabel;
    }

    if (!$dara.isNull(request.dtsInstanceId)) {
      query["DtsInstanceId"] = request.dtsInstanceId;
    }

    if (!$dara.isNull(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!$dara.isNull(request.jobType)) {
      query["JobType"] = request.jobType;
    }

    if (!$dara.isNull(request.orderColumn)) {
      query["OrderColumn"] = request.orderColumn;
    }

    if (!$dara.isNull(request.orderDirection)) {
      query["OrderDirection"] = request.orderDirection;
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

    if (!$dara.isNull(request.params)) {
      query["Params"] = request.params;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.srcProductType)) {
      query["SrcProductType"] = request.srcProductType;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    if (!$dara.isNull(request.withoutDbList)) {
      query["WithoutDbList"] = request.withoutDbList;
    }

    if (!$dara.isNull(request.zeroEtlJob)) {
      query["ZeroEtlJob"] = request.zeroEtlJob;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDtsJobs",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDtsJobsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDtsJobsResponse({}));
  }

  /**
   * Queries the list of Data Transmission Service (DTS) tasks and the details of each task.
   * 
   * @remarks
   * ## Debugging
   * [OpenAPI Explorer automatically calculates the signature value. For your convenience, we recommend that you call this operation in OpenAPI Explorer. OpenAPI Explorer dynamically generates the sample code of the operation for different SDKs.](https://api.aliyun.com/#product=Dts\\&api=DescribeDtsJobs\\&type=RPC\\&version=2020-01-01)
   * 
   * @param request - DescribeDtsJobsRequest
   * @returns DescribeDtsJobsResponse
   */
  async describeDtsJobs(request: $_model.DescribeDtsJobsRequest): Promise<$_model.DescribeDtsJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDtsJobsWithOptions(request, runtime);
  }

  /**
   * Queries the logs of a data migration or synchronization task.
   * 
   * @param request - DescribeDtsServiceLogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDtsServiceLogResponse
   */
  async describeDtsServiceLogWithOptions(request: $_model.DescribeDtsServiceLogRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDtsServiceLogResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.subJobType)) {
      query["SubJobType"] = request.subJobType;
    }

    if (!$dara.isNull(request.zeroEtlJob)) {
      query["ZeroEtlJob"] = request.zeroEtlJob;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDtsServiceLog",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDtsServiceLogResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDtsServiceLogResponse({}));
  }

  /**
   * Queries the logs of a data migration or synchronization task.
   * 
   * @param request - DescribeDtsServiceLogRequest
   * @returns DescribeDtsServiceLogResponse
   */
  async describeDtsServiceLog(request: $_model.DescribeDtsServiceLogRequest): Promise<$_model.DescribeDtsServiceLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDtsServiceLogWithOptions(request, runtime);
  }

  /**
   * Queries the status of the task that changes the database connection settings.
   * 
   * @param request - DescribeEndpointSwitchStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEndpointSwitchStatusResponse
   */
  async describeEndpointSwitchStatusWithOptions(request: $_model.DescribeEndpointSwitchStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeEndpointSwitchStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeEndpointSwitchStatus",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeEndpointSwitchStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribeEndpointSwitchStatusResponse({}));
  }

  /**
   * Queries the status of the task that changes the database connection settings.
   * 
   * @param request - DescribeEndpointSwitchStatusRequest
   * @returns DescribeEndpointSwitchStatusResponse
   */
  async describeEndpointSwitchStatus(request: $_model.DescribeEndpointSwitchStatusRequest): Promise<$_model.DescribeEndpointSwitchStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeEndpointSwitchStatusWithOptions(request, runtime);
  }

  /**
   * Queries the logs of extract, transform, and load (ETL) tasks.
   * 
   * @param request - DescribeEtlJobLogsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEtlJobLogsResponse
   */
  async describeEtlJobLogsWithOptions(request: $_model.DescribeEtlJobLogsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeEtlJobLogsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeEtlJobLogs",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeEtlJobLogsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeEtlJobLogsResponse({}));
  }

  /**
   * Queries the logs of extract, transform, and load (ETL) tasks.
   * 
   * @param request - DescribeEtlJobLogsRequest
   * @returns DescribeEtlJobLogsResponse
   */
  async describeEtlJobLogs(request: $_model.DescribeEtlJobLogsRequest): Promise<$_model.DescribeEtlJobLogsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeEtlJobLogsWithOptions(request, runtime);
  }

  /**
   * Queries full data migration tasks.
   * 
   * @param request - DescribeFullProcessListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeFullProcessListResponse
   */
  async describeFullProcessListWithOptions(request: $_model.DescribeFullProcessListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeFullProcessListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.zeroEtlJob)) {
      query["ZeroEtlJob"] = request.zeroEtlJob;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeFullProcessList",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeFullProcessListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeFullProcessListResponse({}));
  }

  /**
   * Queries full data migration tasks.
   * 
   * @param request - DescribeFullProcessListRequest
   * @returns DescribeFullProcessListResponse
   */
  async describeFullProcessList(request: $_model.DescribeFullProcessListRequest): Promise<$_model.DescribeFullProcessListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeFullProcessListWithOptions(request, runtime);
  }

  /**
   * 查询GAD实例列表
   * 
   * @param request - DescribeGadInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeGadInstancesResponse
   */
  async describeGadInstancesWithOptions(request: $_model.DescribeGadInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeGadInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.masterDbInstanceId)) {
      query["MasterDbInstanceId"] = request.masterDbInstanceId;
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.slaveDbInstanceId)) {
      query["SlaveDbInstanceId"] = request.slaveDbInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeGadInstances",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeGadInstancesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeGadInstancesResponse({}));
  }

  /**
   * 查询GAD实例列表
   * 
   * @param request - DescribeGadInstancesRequest
   * @returns DescribeGadInstancesResponse
   */
  async describeGadInstances(request: $_model.DescribeGadInstancesRequest): Promise<$_model.DescribeGadInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeGadInstancesWithOptions(request, runtime);
  }

  /**
   * Queries the details of initial data synchronization, including the information about the schemas and historical data of the object to be synchronized.
   * 
   * @param request - DescribeInitializationStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInitializationStatusResponse
   */
  async describeInitializationStatusWithOptions(request: $_model.DescribeInitializationStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInitializationStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.synchronizationJobId)) {
      query["SynchronizationJobId"] = request.synchronizationJobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInitializationStatus",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInitializationStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInitializationStatusResponse({}));
  }

  /**
   * Queries the details of initial data synchronization, including the information about the schemas and historical data of the object to be synchronized.
   * 
   * @param request - DescribeInitializationStatusRequest
   * @returns DescribeInitializationStatusResponse
   */
  async describeInitializationStatus(request: $_model.DescribeInitializationStatusRequest): Promise<$_model.DescribeInitializationStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInitializationStatusWithOptions(request, runtime);
  }

  /**
   * Queries the monitoring rules of a Data Transmission Service (DTS) task.
   * 
   * @param request - DescribeJobMonitorRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeJobMonitorRuleResponse
   */
  async describeJobMonitorRuleWithOptions(request: $_model.DescribeJobMonitorRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeJobMonitorRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeJobMonitorRule",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeJobMonitorRuleResponse>(await this.callApi(params, req, runtime), new $_model.DescribeJobMonitorRuleResponse({}));
  }

  /**
   * Queries the monitoring rules of a Data Transmission Service (DTS) task.
   * 
   * @param request - DescribeJobMonitorRuleRequest
   * @returns DescribeJobMonitorRuleResponse
   */
  async describeJobMonitorRule(request: $_model.DescribeJobMonitorRuleRequest): Promise<$_model.DescribeJobMonitorRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeJobMonitorRuleWithOptions(request, runtime);
  }

  /**
   * Queries the metrics of a cluster.
   * 
   * @param request - DescribeMetricListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMetricListResponse
   */
  async describeMetricListWithOptions(request: $_model.DescribeMetricListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeMetricListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountId)) {
      body["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dtsJobId)) {
      body["DtsJobId"] = request.dtsJobId;
    }

    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.env)) {
      body["Env"] = request.env;
    }

    if (!$dara.isNull(request.metricName)) {
      body["MetricName"] = request.metricName;
    }

    if (!$dara.isNull(request.metricType)) {
      body["MetricType"] = request.metricType;
    }

    if (!$dara.isNull(request.ownerID)) {
      body["OwnerID"] = request.ownerID;
    }

    if (!$dara.isNull(request.param)) {
      body["Param"] = request.param;
    }

    if (!$dara.isNull(request.period)) {
      body["Period"] = request.period;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeMetricList",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeMetricListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeMetricListResponse({}));
  }

  /**
   * Queries the metrics of a cluster.
   * 
   * @param request - DescribeMetricListRequest
   * @returns DescribeMetricListResponse
   */
  async describeMetricList(request: $_model.DescribeMetricListRequest): Promise<$_model.DescribeMetricListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeMetricListWithOptions(request, runtime);
  }

  /**
   * Queries the alert settings of a data migration instance.
   * 
   * @param request - DescribeMigrationJobAlertRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMigrationJobAlertResponse
   */
  async describeMigrationJobAlertWithOptions(request: $_model.DescribeMigrationJobAlertRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeMigrationJobAlertResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.migrationJobId)) {
      query["MigrationJobId"] = request.migrationJobId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeMigrationJobAlert",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeMigrationJobAlertResponse>(await this.callApi(params, req, runtime), new $_model.DescribeMigrationJobAlertResponse({}));
  }

  /**
   * Queries the alert settings of a data migration instance.
   * 
   * @param request - DescribeMigrationJobAlertRequest
   * @returns DescribeMigrationJobAlertResponse
   */
  async describeMigrationJobAlert(request: $_model.DescribeMigrationJobAlertRequest): Promise<$_model.DescribeMigrationJobAlertResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeMigrationJobAlertWithOptions(request, runtime);
  }

  /**
   * Queries the details of a data migration task.
   * 
   * @param request - DescribeMigrationJobDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMigrationJobDetailResponse
   */
  async describeMigrationJobDetailWithOptions(request: $_model.DescribeMigrationJobDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeMigrationJobDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.migrationJobId)) {
      query["MigrationJobId"] = request.migrationJobId;
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.migrationMode)) {
      query["MigrationMode"] = request.migrationMode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeMigrationJobDetail",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeMigrationJobDetailResponse>(await this.callApi(params, req, runtime), new $_model.DescribeMigrationJobDetailResponse({}));
  }

  /**
   * Queries the details of a data migration task.
   * 
   * @param request - DescribeMigrationJobDetailRequest
   * @returns DescribeMigrationJobDetailResponse
   */
  async describeMigrationJobDetail(request: $_model.DescribeMigrationJobDetailRequest): Promise<$_model.DescribeMigrationJobDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeMigrationJobDetailWithOptions(request, runtime);
  }

  /**
   * Queries the status of a data migration task.
   * 
   * @param request - DescribeMigrationJobStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMigrationJobStatusResponse
   */
  async describeMigrationJobStatusWithOptions(request: $_model.DescribeMigrationJobStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeMigrationJobStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.migrationJobId)) {
      query["MigrationJobId"] = request.migrationJobId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeMigrationJobStatus",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeMigrationJobStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribeMigrationJobStatusResponse({}));
  }

  /**
   * Queries the status of a data migration task.
   * 
   * @param request - DescribeMigrationJobStatusRequest
   * @returns DescribeMigrationJobStatusResponse
   */
  async describeMigrationJobStatus(request: $_model.DescribeMigrationJobStatusRequest): Promise<$_model.DescribeMigrationJobStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeMigrationJobStatusWithOptions(request, runtime);
  }

  /**
   * Queries the list of data migration instances and the details of each instance.
   * 
   * @param request - DescribeMigrationJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMigrationJobsResponse
   */
  async describeMigrationJobsWithOptions(request: $_model.DescribeMigrationJobsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeMigrationJobsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.migrationJobName)) {
      query["MigrationJobName"] = request.migrationJobName;
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeMigrationJobs",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeMigrationJobsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeMigrationJobsResponse({}));
  }

  /**
   * Queries the list of data migration instances and the details of each instance.
   * 
   * @param request - DescribeMigrationJobsRequest
   * @returns DescribeMigrationJobsResponse
   */
  async describeMigrationJobs(request: $_model.DescribeMigrationJobsRequest): Promise<$_model.DescribeMigrationJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeMigrationJobsWithOptions(request, runtime);
  }

  /**
   * 查询预检查创建GAD订单任务结果
   * 
   * @param request - DescribePreCheckCreateGadOrderResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePreCheckCreateGadOrderResultResponse
   */
  async describePreCheckCreateGadOrderResultWithOptions(request: $_model.DescribePreCheckCreateGadOrderResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePreCheckCreateGadOrderResultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePreCheckCreateGadOrderResult",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePreCheckCreateGadOrderResultResponse>(await this.callApi(params, req, runtime), new $_model.DescribePreCheckCreateGadOrderResultResponse({}));
  }

  /**
   * 查询预检查创建GAD订单任务结果
   * 
   * @param request - DescribePreCheckCreateGadOrderResultRequest
   * @returns DescribePreCheckCreateGadOrderResultResponse
   */
  async describePreCheckCreateGadOrderResult(request: $_model.DescribePreCheckCreateGadOrderResultRequest): Promise<$_model.DescribePreCheckCreateGadOrderResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePreCheckCreateGadOrderResultWithOptions(request, runtime);
  }

  /**
   * Queries the status of a Data Transmission Service (DTS) subtask that performs precheck, schema migration, initial schema synchronization, full data migration, initial full data synchronization, incremental data migration, or incremental data synchronization.
   * 
   * @param request - DescribePreCheckStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePreCheckStatusResponse
   */
  async describePreCheckStatusWithOptions(request: $_model.DescribePreCheckStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePreCheckStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!$dara.isNull(request.jobCode)) {
      query["JobCode"] = request.jobCode;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
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

    if (!$dara.isNull(request.structPhase)) {
      query["StructPhase"] = request.structPhase;
    }

    if (!$dara.isNull(request.structType)) {
      query["StructType"] = request.structType;
    }

    if (!$dara.isNull(request.zeroEtlJob)) {
      query["ZeroEtlJob"] = request.zeroEtlJob;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePreCheckStatus",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePreCheckStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribePreCheckStatusResponse({}));
  }

  /**
   * Queries the status of a Data Transmission Service (DTS) subtask that performs precheck, schema migration, initial schema synchronization, full data migration, initial full data synchronization, incremental data migration, or incremental data synchronization.
   * 
   * @param request - DescribePreCheckStatusRequest
   * @returns DescribePreCheckStatusResponse
   */
  async describePreCheckStatus(request: $_model.DescribePreCheckStatusRequest): Promise<$_model.DescribePreCheckStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePreCheckStatusWithOptions(request, runtime);
  }

  /**
   * Queries the alert settings of a change tracking instance.
   * 
   * @param request - DescribeSubscriptionInstanceAlertRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSubscriptionInstanceAlertResponse
   */
  async describeSubscriptionInstanceAlertWithOptions(request: $_model.DescribeSubscriptionInstanceAlertRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSubscriptionInstanceAlertResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.subscriptionInstanceId)) {
      query["SubscriptionInstanceId"] = request.subscriptionInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSubscriptionInstanceAlert",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSubscriptionInstanceAlertResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSubscriptionInstanceAlertResponse({}));
  }

  /**
   * Queries the alert settings of a change tracking instance.
   * 
   * @param request - DescribeSubscriptionInstanceAlertRequest
   * @returns DescribeSubscriptionInstanceAlertResponse
   */
  async describeSubscriptionInstanceAlert(request: $_model.DescribeSubscriptionInstanceAlertRequest): Promise<$_model.DescribeSubscriptionInstanceAlertResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSubscriptionInstanceAlertWithOptions(request, runtime);
  }

  /**
   * Queries the status of a change tracking instance.
   * 
   * @param request - DescribeSubscriptionInstanceStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSubscriptionInstanceStatusResponse
   */
  async describeSubscriptionInstanceStatusWithOptions(request: $_model.DescribeSubscriptionInstanceStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSubscriptionInstanceStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.subscriptionInstanceId)) {
      query["SubscriptionInstanceId"] = request.subscriptionInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSubscriptionInstanceStatus",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSubscriptionInstanceStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSubscriptionInstanceStatusResponse({}));
  }

  /**
   * Queries the status of a change tracking instance.
   * 
   * @param request - DescribeSubscriptionInstanceStatusRequest
   * @returns DescribeSubscriptionInstanceStatusResponse
   */
  async describeSubscriptionInstanceStatus(request: $_model.DescribeSubscriptionInstanceStatusRequest): Promise<$_model.DescribeSubscriptionInstanceStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSubscriptionInstanceStatusWithOptions(request, runtime);
  }

  /**
   * Queries the list of change tracking instances and the details of each instance.
   * 
   * @param request - DescribeSubscriptionInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSubscriptionInstancesResponse
   */
  async describeSubscriptionInstancesWithOptions(request: $_model.DescribeSubscriptionInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSubscriptionInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.subscriptionInstanceName)) {
      query["SubscriptionInstanceName"] = request.subscriptionInstanceName;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSubscriptionInstances",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSubscriptionInstancesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSubscriptionInstancesResponse({}));
  }

  /**
   * Queries the list of change tracking instances and the details of each instance.
   * 
   * @param request - DescribeSubscriptionInstancesRequest
   * @returns DescribeSubscriptionInstancesResponse
   */
  async describeSubscriptionInstances(request: $_model.DescribeSubscriptionInstancesRequest): Promise<$_model.DescribeSubscriptionInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSubscriptionInstancesWithOptions(request, runtime);
  }

  /**
   * Queries the details of the subtasks in a distributed change tracking task for a PolarDB-X 1.0 instance.
   * 
   * @remarks
   *   When Data Transmission Service (DTS) tracks data changes from a PolarDB-X 1.0 instance, data is distributed across the attached ApsaraDB RDS for MySQL instances. DTS runs a subtask for each ApsaraDB RDS for MySQL instance. You can call this operation to query the details of the subtasks in a distributed change tracking task.
   * *   You can call the [DescribeDtsJobs](https://help.aliyun.com/document_detail/209702.html) operation to query the ID of the change tracking instance and the ID of the consumer group.
   * 
   * @param tmpReq - DescribeSubscriptionMetaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSubscriptionMetaResponse
   */
  async describeSubscriptionMetaWithOptions(tmpReq: $_model.DescribeSubscriptionMetaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSubscriptionMetaResponse> {
    tmpReq.validate();
    let request = new $_model.DescribeSubscriptionMetaShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.subMigrationJobIds)) {
      request.subMigrationJobIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.subMigrationJobIds, "SubMigrationJobIds", "json");
    }

    if (!$dara.isNull(tmpReq.topics)) {
      request.topicsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.topics, "Topics", "json");
    }

    let query = { };
    if (!$dara.isNull(request.dtsInstanceId)) {
      query["DtsInstanceId"] = request.dtsInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.sid)) {
      query["Sid"] = request.sid;
    }

    if (!$dara.isNull(request.subMigrationJobIdsShrink)) {
      query["SubMigrationJobIds"] = request.subMigrationJobIdsShrink;
    }

    if (!$dara.isNull(request.topicsShrink)) {
      query["Topics"] = request.topicsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSubscriptionMeta",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSubscriptionMetaResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSubscriptionMetaResponse({}));
  }

  /**
   * Queries the details of the subtasks in a distributed change tracking task for a PolarDB-X 1.0 instance.
   * 
   * @remarks
   *   When Data Transmission Service (DTS) tracks data changes from a PolarDB-X 1.0 instance, data is distributed across the attached ApsaraDB RDS for MySQL instances. DTS runs a subtask for each ApsaraDB RDS for MySQL instance. You can call this operation to query the details of the subtasks in a distributed change tracking task.
   * *   You can call the [DescribeDtsJobs](https://help.aliyun.com/document_detail/209702.html) operation to query the ID of the change tracking instance and the ID of the consumer group.
   * 
   * @param request - DescribeSubscriptionMetaRequest
   * @returns DescribeSubscriptionMetaResponse
   */
  async describeSubscriptionMeta(request: $_model.DescribeSubscriptionMetaRequest): Promise<$_model.DescribeSubscriptionMetaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSubscriptionMetaWithOptions(request, runtime);
  }

  /**
   * 查看同步和迁移任务的增量写入延迟信息
   * 
   * @param request - DescribeSyncStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSyncStatusResponse
   */
  async describeSyncStatusWithOptions(request: $_model.DescribeSyncStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSyncStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.direction)) {
      query["Direction"] = request.direction;
    }

    if (!$dara.isNull(request.dtsInstanceId)) {
      query["DtsInstanceId"] = request.dtsInstanceId;
    }

    if (!$dara.isNull(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSyncStatus",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSyncStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSyncStatusResponse({}));
  }

  /**
   * 查看同步和迁移任务的增量写入延迟信息
   * 
   * @param request - DescribeSyncStatusRequest
   * @returns DescribeSyncStatusResponse
   */
  async describeSyncStatus(request: $_model.DescribeSyncStatusRequest): Promise<$_model.DescribeSyncStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSyncStatusWithOptions(request, runtime);
  }

  /**
   * Queries the alert settings of a data synchronization instance.
   * 
   * @param request - DescribeSynchronizationJobAlertRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSynchronizationJobAlertResponse
   */
  async describeSynchronizationJobAlertWithOptions(request: $_model.DescribeSynchronizationJobAlertRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSynchronizationJobAlertResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.synchronizationDirection)) {
      query["SynchronizationDirection"] = request.synchronizationDirection;
    }

    if (!$dara.isNull(request.synchronizationJobId)) {
      query["SynchronizationJobId"] = request.synchronizationJobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSynchronizationJobAlert",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSynchronizationJobAlertResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSynchronizationJobAlertResponse({}));
  }

  /**
   * Queries the alert settings of a data synchronization instance.
   * 
   * @param request - DescribeSynchronizationJobAlertRequest
   * @returns DescribeSynchronizationJobAlertResponse
   */
  async describeSynchronizationJobAlert(request: $_model.DescribeSynchronizationJobAlertRequest): Promise<$_model.DescribeSynchronizationJobAlertResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSynchronizationJobAlertWithOptions(request, runtime);
  }

  /**
   * Queries whether image matching is enabled for a data synchronization instance.
   * 
   * @param request - DescribeSynchronizationJobReplicatorCompareRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSynchronizationJobReplicatorCompareResponse
   */
  async describeSynchronizationJobReplicatorCompareWithOptions(request: $_model.DescribeSynchronizationJobReplicatorCompareRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSynchronizationJobReplicatorCompareResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.synchronizationDirection)) {
      query["SynchronizationDirection"] = request.synchronizationDirection;
    }

    if (!$dara.isNull(request.synchronizationJobId)) {
      query["SynchronizationJobId"] = request.synchronizationJobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSynchronizationJobReplicatorCompare",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSynchronizationJobReplicatorCompareResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSynchronizationJobReplicatorCompareResponse({}));
  }

  /**
   * Queries whether image matching is enabled for a data synchronization instance.
   * 
   * @param request - DescribeSynchronizationJobReplicatorCompareRequest
   * @returns DescribeSynchronizationJobReplicatorCompareResponse
   */
  async describeSynchronizationJobReplicatorCompare(request: $_model.DescribeSynchronizationJobReplicatorCompareRequest): Promise<$_model.DescribeSynchronizationJobReplicatorCompareResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSynchronizationJobReplicatorCompareWithOptions(request, runtime);
  }

  /**
   * Queries the status of a data synchronization instance.
   * 
   * @param request - DescribeSynchronizationJobStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSynchronizationJobStatusResponse
   */
  async describeSynchronizationJobStatusWithOptions(request: $_model.DescribeSynchronizationJobStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSynchronizationJobStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.synchronizationDirection)) {
      query["SynchronizationDirection"] = request.synchronizationDirection;
    }

    if (!$dara.isNull(request.synchronizationJobId)) {
      query["SynchronizationJobId"] = request.synchronizationJobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSynchronizationJobStatus",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSynchronizationJobStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSynchronizationJobStatusResponse({}));
  }

  /**
   * Queries the status of a data synchronization instance.
   * 
   * @param request - DescribeSynchronizationJobStatusRequest
   * @returns DescribeSynchronizationJobStatusResponse
   */
  async describeSynchronizationJobStatus(request: $_model.DescribeSynchronizationJobStatusRequest): Promise<$_model.DescribeSynchronizationJobStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSynchronizationJobStatusWithOptions(request, runtime);
  }

  /**
   * Queries the status of one or more data synchronization instances.
   * 
   * @param request - DescribeSynchronizationJobStatusListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSynchronizationJobStatusListResponse
   */
  async describeSynchronizationJobStatusListWithOptions(request: $_model.DescribeSynchronizationJobStatusListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSynchronizationJobStatusListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.synchronizationJobIdListJsonStr)) {
      query["SynchronizationJobIdListJsonStr"] = request.synchronizationJobIdListJsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSynchronizationJobStatusList",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSynchronizationJobStatusListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSynchronizationJobStatusListResponse({}));
  }

  /**
   * Queries the status of one or more data synchronization instances.
   * 
   * @param request - DescribeSynchronizationJobStatusListRequest
   * @returns DescribeSynchronizationJobStatusListResponse
   */
  async describeSynchronizationJobStatusList(request: $_model.DescribeSynchronizationJobStatusListRequest): Promise<$_model.DescribeSynchronizationJobStatusListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSynchronizationJobStatusListWithOptions(request, runtime);
  }

  /**
   * Queries the list of data synchronization instances and the details of each instance.
   * 
   * @param request - DescribeSynchronizationJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSynchronizationJobsResponse
   */
  async describeSynchronizationJobsWithOptions(request: $_model.DescribeSynchronizationJobsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSynchronizationJobsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.synchronizationJobName)) {
      query["SynchronizationJobName"] = request.synchronizationJobName;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSynchronizationJobs",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSynchronizationJobsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSynchronizationJobsResponse({}));
  }

  /**
   * Queries the list of data synchronization instances and the details of each instance.
   * 
   * @param request - DescribeSynchronizationJobsRequest
   * @returns DescribeSynchronizationJobsResponse
   */
  async describeSynchronizationJobs(request: $_model.DescribeSynchronizationJobsRequest): Promise<$_model.DescribeSynchronizationJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSynchronizationJobsWithOptions(request, runtime);
  }

  /**
   * Queries the status of the task that changes the objects to be synchronized.
   * 
   * @param request - DescribeSynchronizationObjectModifyStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSynchronizationObjectModifyStatusResponse
   */
  async describeSynchronizationObjectModifyStatusWithOptions(request: $_model.DescribeSynchronizationObjectModifyStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSynchronizationObjectModifyStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSynchronizationObjectModifyStatus",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSynchronizationObjectModifyStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSynchronizationObjectModifyStatusResponse({}));
  }

  /**
   * Queries the status of the task that changes the objects to be synchronized.
   * 
   * @param request - DescribeSynchronizationObjectModifyStatusRequest
   * @returns DescribeSynchronizationObjectModifyStatusResponse
   */
  async describeSynchronizationObjectModifyStatus(request: $_model.DescribeSynchronizationObjectModifyStatusRequest): Promise<$_model.DescribeSynchronizationObjectModifyStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSynchronizationObjectModifyStatusWithOptions(request, runtime);
  }

  /**
   * Queries all the tags added to a data migration, data synchronization, or change tracking instance.
   * 
   * @param request - DescribeTagKeysRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTagKeysResponse
   */
  async describeTagKeysWithOptions(request: $_model.DescribeTagKeysRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTagKeysResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.category)) {
      query["Category"] = request.category;
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
      action: "DescribeTagKeys",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeTagKeysResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTagKeysResponse({}));
  }

  /**
   * Queries all the tags added to a data migration, data synchronization, or change tracking instance.
   * 
   * @param request - DescribeTagKeysRequest
   * @returns DescribeTagKeysResponse
   */
  async describeTagKeys(request: $_model.DescribeTagKeysRequest): Promise<$_model.DescribeTagKeysResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTagKeysWithOptions(request, runtime);
  }

  /**
   * Queries all the tag values of a tag bound to a data migration, data synchronization, or change tracking instance.
   * 
   * @param request - DescribeTagValuesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTagValuesResponse
   */
  async describeTagValuesWithOptions(request: $_model.DescribeTagValuesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTagValuesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.category)) {
      query["Category"] = request.category;
    }

    if (!$dara.isNull(request.key)) {
      query["Key"] = request.key;
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
      action: "DescribeTagValues",
      version: "2020-01-01",
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
   * Queries all the tag values of a tag bound to a data migration, data synchronization, or change tracking instance.
   * 
   * @param request - DescribeTagValuesRequest
   * @returns DescribeTagValuesResponse
   */
  async describeTagValues(request: $_model.DescribeTagValuesRequest): Promise<$_model.DescribeTagValuesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTagValuesWithOptions(request, runtime);
  }

  /**
   * 移除从角色
   * 
   * @param request - DetachGadInstanceDbMemberRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetachGadInstanceDbMemberResponse
   */
  async detachGadInstanceDbMemberWithOptions(request: $_model.DetachGadInstanceDbMemberRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetachGadInstanceDbMemberResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.slaveDbInstanceId)) {
      query["SlaveDbInstanceId"] = request.slaveDbInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetachGadInstanceDbMember",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DetachGadInstanceDbMemberResponse>(await this.callApi(params, req, runtime), new $_model.DetachGadInstanceDbMemberResponse({}));
  }

  /**
   * 移除从角色
   * 
   * @param request - DetachGadInstanceDbMemberRequest
   * @returns DetachGadInstanceDbMemberResponse
   */
  async detachGadInstanceDbMember(request: $_model.DetachGadInstanceDbMemberRequest): Promise<$_model.DetachGadInstanceDbMemberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detachGadInstanceDbMemberWithOptions(request, runtime);
  }

  /**
   * Initializes a built-in account on a node of an active geo-redundancy database cluster. Data Transmission Service (DTS) uses the built-in account to connect to the node and perform data synchronization tasks.
   * 
   * @remarks
   *   The node must be an ApsaraDB RDS for MySQL instance or a self-managed MySQL database that is connected over Cloud Enterprise Network (CEN).
   * *   This operation is used to initialize the built-in account named rdsdt_dtsacct on a node of an active geo-redundancy database cluster. DTS uses this account to connect to the node and perform data synchronization tasks.
   * 
   * @param request - InitDtsRdsInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InitDtsRdsInstanceResponse
   */
  async initDtsRdsInstanceWithOptions(request: $_model.InitDtsRdsInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.InitDtsRdsInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dtsInstanceId)) {
      query["DtsInstanceId"] = request.dtsInstanceId;
    }

    if (!$dara.isNull(request.endpointCenId)) {
      query["EndpointCenId"] = request.endpointCenId;
    }

    if (!$dara.isNull(request.endpointInstanceId)) {
      query["EndpointInstanceId"] = request.endpointInstanceId;
    }

    if (!$dara.isNull(request.endpointInstanceType)) {
      query["EndpointInstanceType"] = request.endpointInstanceType;
    }

    if (!$dara.isNull(request.endpointRegion)) {
      query["EndpointRegion"] = request.endpointRegion;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "InitDtsRdsInstance",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.InitDtsRdsInstanceResponse>(await this.callApi(params, req, runtime), new $_model.InitDtsRdsInstanceResponse({}));
  }

  /**
   * Initializes a built-in account on a node of an active geo-redundancy database cluster. Data Transmission Service (DTS) uses the built-in account to connect to the node and perform data synchronization tasks.
   * 
   * @remarks
   *   The node must be an ApsaraDB RDS for MySQL instance or a self-managed MySQL database that is connected over Cloud Enterprise Network (CEN).
   * *   This operation is used to initialize the built-in account named rdsdt_dtsacct on a node of an active geo-redundancy database cluster. DTS uses this account to connect to the node and perform data synchronization tasks.
   * 
   * @param request - InitDtsRdsInstanceRequest
   * @returns InitDtsRdsInstanceResponse
   */
  async initDtsRdsInstance(request: $_model.InitDtsRdsInstanceRequest): Promise<$_model.InitDtsRdsInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.initDtsRdsInstanceWithOptions(request, runtime);
  }

  /**
   * Queries all clusters that are created within an Alibaba Cloud account. You can also query clusters based on the specified conditions.
   * 
   * @param request - ListDedicatedClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDedicatedClusterResponse
   */
  async listDedicatedClusterWithOptions(request: $_model.ListDedicatedClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDedicatedClusterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.orderColumn)) {
      query["OrderColumn"] = request.orderColumn;
    }

    if (!$dara.isNull(request.orderDirection)) {
      query["OrderDirection"] = request.orderDirection;
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

    if (!$dara.isNull(request.params)) {
      query["Params"] = request.params;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.state)) {
      query["State"] = request.state;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDedicatedCluster",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDedicatedClusterResponse>(await this.callApi(params, req, runtime), new $_model.ListDedicatedClusterResponse({}));
  }

  /**
   * Queries all clusters that are created within an Alibaba Cloud account. You can also query clusters based on the specified conditions.
   * 
   * @param request - ListDedicatedClusterRequest
   * @returns ListDedicatedClusterResponse
   */
  async listDedicatedCluster(request: $_model.ListDedicatedClusterRequest): Promise<$_model.ListDedicatedClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDedicatedClusterWithOptions(request, runtime);
  }

  /**
   * Queries the tags that are bound to specific data migration, data synchronization, or change tracking instances, or queries the instances to which specific tags are bound.
   * 
   * @remarks
   * ***
   * 
   * @param request - ListTagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagResourcesResponse
   */
  async listTagResourcesWithOptions(request: $_model.ListTagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTagResources",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTagResourcesResponse>(await this.callApi(params, req, runtime), new $_model.ListTagResourcesResponse({}));
  }

  /**
   * Queries the tags that are bound to specific data migration, data synchronization, or change tracking instances, or queries the instances to which specific tags are bound.
   * 
   * @remarks
   * ***
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: $_model.ListTagResourcesRequest): Promise<$_model.ListTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * Modifies the information of a consumer group, including the consumer group name, username, and password.
   * 
   * @param request - ModifyConsumerChannelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyConsumerChannelResponse
   */
  async modifyConsumerChannelWithOptions(request: $_model.ModifyConsumerChannelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyConsumerChannelResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.consumerGroupId)) {
      query["ConsumerGroupId"] = request.consumerGroupId;
    }

    if (!$dara.isNull(request.consumerGroupName)) {
      query["ConsumerGroupName"] = request.consumerGroupName;
    }

    if (!$dara.isNull(request.consumerGroupPassword)) {
      query["ConsumerGroupPassword"] = request.consumerGroupPassword;
    }

    if (!$dara.isNull(request.consumerGroupUserName)) {
      query["ConsumerGroupUserName"] = request.consumerGroupUserName;
    }

    if (!$dara.isNull(request.dtsInstanceId)) {
      query["DtsInstanceId"] = request.dtsInstanceId;
    }

    if (!$dara.isNull(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyConsumerChannel",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyConsumerChannelResponse>(await this.callApi(params, req, runtime), new $_model.ModifyConsumerChannelResponse({}));
  }

  /**
   * Modifies the information of a consumer group, including the consumer group name, username, and password.
   * 
   * @param request - ModifyConsumerChannelRequest
   * @returns ModifyConsumerChannelResponse
   */
  async modifyConsumerChannel(request: $_model.ModifyConsumerChannelRequest): Promise<$_model.ModifyConsumerChannelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyConsumerChannelWithOptions(request, runtime);
  }

  /**
   * Modifies the password of a consumer group
   * 
   * @param request - ModifyConsumerGroupPasswordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyConsumerGroupPasswordResponse
   */
  async modifyConsumerGroupPasswordWithOptions(request: $_model.ModifyConsumerGroupPasswordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyConsumerGroupPasswordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.consumerGroupID)) {
      query["ConsumerGroupID"] = request.consumerGroupID;
    }

    if (!$dara.isNull(request.consumerGroupName)) {
      query["ConsumerGroupName"] = request.consumerGroupName;
    }

    if (!$dara.isNull(request.consumerGroupPassword)) {
      query["ConsumerGroupPassword"] = request.consumerGroupPassword;
    }

    if (!$dara.isNull(request.consumerGroupUserName)) {
      query["ConsumerGroupUserName"] = request.consumerGroupUserName;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.subscriptionInstanceId)) {
      query["SubscriptionInstanceId"] = request.subscriptionInstanceId;
    }

    if (!$dara.isNull(request.consumerGroupNewPassword)) {
      query["consumerGroupNewPassword"] = request.consumerGroupNewPassword;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyConsumerGroupPassword",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyConsumerGroupPasswordResponse>(await this.callApi(params, req, runtime), new $_model.ModifyConsumerGroupPasswordResponse({}));
  }

  /**
   * Modifies the password of a consumer group
   * 
   * @param request - ModifyConsumerGroupPasswordRequest
   * @returns ModifyConsumerGroupPasswordResponse
   */
  async modifyConsumerGroupPassword(request: $_model.ModifyConsumerGroupPasswordRequest): Promise<$_model.ModifyConsumerGroupPasswordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyConsumerGroupPasswordWithOptions(request, runtime);
  }

  /**
   * Modifies the consumption checkpoint of a change tracking instance.
   * 
   * @param request - ModifyConsumptionTimestampRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyConsumptionTimestampResponse
   */
  async modifyConsumptionTimestampWithOptions(request: $_model.ModifyConsumptionTimestampRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyConsumptionTimestampResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.consumptionTimestamp)) {
      query["ConsumptionTimestamp"] = request.consumptionTimestamp;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.subscriptionInstanceId)) {
      query["SubscriptionInstanceId"] = request.subscriptionInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyConsumptionTimestamp",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyConsumptionTimestampResponse>(await this.callApi(params, req, runtime), new $_model.ModifyConsumptionTimestampResponse({}));
  }

  /**
   * Modifies the consumption checkpoint of a change tracking instance.
   * 
   * @param request - ModifyConsumptionTimestampRequest
   * @returns ModifyConsumptionTimestampResponse
   */
  async modifyConsumptionTimestamp(request: $_model.ModifyConsumptionTimestampRequest): Promise<$_model.ModifyConsumptionTimestampResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyConsumptionTimestampWithOptions(request, runtime);
  }

  /**
   * Modifies the configuration of a cluster.
   * 
   * @remarks
   * You can modify only the overcommit ratio.
   * 
   * @param request - ModifyDedicatedClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDedicatedClusterResponse
   */
  async modifyDedicatedClusterWithOptions(request: $_model.ModifyDedicatedClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDedicatedClusterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dedicatedClusterId)) {
      query["DedicatedClusterId"] = request.dedicatedClusterId;
    }

    if (!$dara.isNull(request.dedicatedClusterName)) {
      query["DedicatedClusterName"] = request.dedicatedClusterName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.oversoldRatio)) {
      query["OversoldRatio"] = request.oversoldRatio;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDedicatedCluster",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDedicatedClusterResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDedicatedClusterResponse({}));
  }

  /**
   * Modifies the configuration of a cluster.
   * 
   * @remarks
   * You can modify only the overcommit ratio.
   * 
   * @param request - ModifyDedicatedClusterRequest
   * @returns ModifyDedicatedClusterResponse
   */
  async modifyDedicatedCluster(request: $_model.ModifyDedicatedClusterRequest): Promise<$_model.ModifyDedicatedClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDedicatedClusterWithOptions(request, runtime);
  }

  /**
   * Modifies the configurations of a data synchronization task.
   * 
   * @remarks
   * When you configure a data synchronization task in the Data Transmission Service (DTS) console, you can move the pointer over **Next: Save Task Settings and Precheck** in the **Advanced Settings** step and click **Preview OpenAPI parameters** to view the parameters that are used to configure the task by calling an API operation.
   * 
   * @param tmpReq - ModifyDtsJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDtsJobResponse
   */
  async modifyDtsJobWithOptions(tmpReq: $_model.ModifyDtsJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDtsJobResponse> {
    tmpReq.validate();
    let request = new $_model.ModifyDtsJobShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.dbList)) {
      request.dbListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.dbList, "DbList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dataInitialization)) {
      query["DataInitialization"] = request.dataInitialization;
    }

    if (!$dara.isNull(request.dataSynchronization)) {
      query["DataSynchronization"] = request.dataSynchronization;
    }

    if (!$dara.isNull(request.dtsInstanceId)) {
      query["DtsInstanceId"] = request.dtsInstanceId;
    }

    if (!$dara.isNull(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!$dara.isNull(request.fileOssUrl)) {
      query["FileOssUrl"] = request.fileOssUrl;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.structureInitialization)) {
      query["StructureInitialization"] = request.structureInitialization;
    }

    if (!$dara.isNull(request.synchronizationDirection)) {
      query["SynchronizationDirection"] = request.synchronizationDirection;
    }

    if (!$dara.isNull(request.zeroEtlJob)) {
      query["ZeroEtlJob"] = request.zeroEtlJob;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dbListShrink)) {
      body["DbList"] = request.dbListShrink;
    }

    if (!$dara.isNull(request.etlOperatorColumnReference)) {
      body["EtlOperatorColumnReference"] = request.etlOperatorColumnReference;
    }

    if (!$dara.isNull(request.filterTableName)) {
      body["FilterTableName"] = request.filterTableName;
    }

    if (!$dara.isNull(request.modifyTypeEnum)) {
      body["ModifyTypeEnum"] = request.modifyTypeEnum;
    }

    if (!$dara.isNull(request.reserved)) {
      body["Reserved"] = request.reserved;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDtsJob",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDtsJobResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDtsJobResponse({}));
  }

  /**
   * Modifies the configurations of a data synchronization task.
   * 
   * @remarks
   * When you configure a data synchronization task in the Data Transmission Service (DTS) console, you can move the pointer over **Next: Save Task Settings and Precheck** in the **Advanced Settings** step and click **Preview OpenAPI parameters** to view the parameters that are used to configure the task by calling an API operation.
   * 
   * @param request - ModifyDtsJobRequest
   * @returns ModifyDtsJobResponse
   */
  async modifyDtsJob(request: $_model.ModifyDtsJobRequest): Promise<$_model.ModifyDtsJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDtsJobWithOptions(request, runtime);
  }

  async modifyDtsJobAdvance(request: $_model.ModifyDtsJobAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDtsJobResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let securityToken = await this._credential.getSecurityToken();
    let credentialType = this._credential.getType();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if ($dara.isNull(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    if ($dara.isNull(credentialType)) {
      credentialType = "access_key";
    }

    let authConfig = new $OpenApiUtil.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      securityToken: securityToken,
      type: credentialType,
      endpoint: openPlatformEndpoint,
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "Dts",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = new OSS(ossConfig);
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let modifyDtsJobReq = new $_model.ModifyDtsJobRequest({ });
    OpenApiUtil.convert(request, modifyDtsJobReq);
    if (!$dara.isNull(request.fileOssUrlObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.fileOssUrlObject,
        contentType: "",
      });
      ossHeader = new $OSS.PostObjectRequestHeader({
        accessKeyId: authResponse.body.accessKeyId,
        policy: authResponse.body.encodedPolicy,
        signature: authResponse.body.signature,
        key: authResponse.body.objectKey,
        file: fileObj,
        successActionStatus: "201",
      });
      uploadRequest = new $OSS.PostObjectRequest({
        bucketName: authResponse.body.bucket,
        header: ossHeader,
      });
      await ossClient.postObject(uploadRequest, ossRuntime);
      modifyDtsJobReq.fileOssUrl = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let modifyDtsJobResp = await this.modifyDtsJobWithOptions(modifyDtsJobReq, runtime);
    return modifyDtsJobResp;
  }

  /**
   * Modifies the parameters of a Data Transmission Service (DTS) task.
   * 
   * @param request - ModifyDtsJobConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDtsJobConfigResponse
   */
  async modifyDtsJobConfigWithOptions(request: $_model.ModifyDtsJobConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDtsJobConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.parameters)) {
      query["Parameters"] = request.parameters;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDtsJobConfig",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDtsJobConfigResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDtsJobConfigResponse({}));
  }

  /**
   * Modifies the parameters of a Data Transmission Service (DTS) task.
   * 
   * @param request - ModifyDtsJobConfigRequest
   * @returns ModifyDtsJobConfigResponse
   */
  async modifyDtsJobConfig(request: $_model.ModifyDtsJobConfigRequest): Promise<$_model.ModifyDtsJobConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDtsJobConfigWithOptions(request, runtime);
  }

  /**
   * Changes the dedicated cluster on which a Data Transmission Service (DTS) task runs.
   * 
   * @remarks
   * > After a DTS task is migrated from a dedicated cluster to a shared cluster, the task is billed on a pay-as-you-go basis.
   * 
   * @param request - ModifyDtsJobDedicatedClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDtsJobDedicatedClusterResponse
   */
  async modifyDtsJobDedicatedClusterWithOptions(request: $_model.ModifyDtsJobDedicatedClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDtsJobDedicatedClusterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dedicatedClusterId)) {
      query["DedicatedClusterId"] = request.dedicatedClusterId;
    }

    if (!$dara.isNull(request.dtsJobIds)) {
      query["DtsJobIds"] = request.dtsJobIds;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDtsJobDedicatedCluster",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDtsJobDedicatedClusterResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDtsJobDedicatedClusterResponse({}));
  }

  /**
   * Changes the dedicated cluster on which a Data Transmission Service (DTS) task runs.
   * 
   * @remarks
   * > After a DTS task is migrated from a dedicated cluster to a shared cluster, the task is billed on a pay-as-you-go basis.
   * 
   * @param request - ModifyDtsJobDedicatedClusterRequest
   * @returns ModifyDtsJobDedicatedClusterResponse
   */
  async modifyDtsJobDedicatedCluster(request: $_model.ModifyDtsJobDedicatedClusterRequest): Promise<$_model.ModifyDtsJobDedicatedClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDtsJobDedicatedClusterWithOptions(request, runtime);
  }

  /**
   * Modifies the upper limit of DTS units (DUs) for a Data Transmission Service (DTS) task.
   * 
   * @remarks
   *   DTS allows you to upgrade or downgrade the configurations of DTS instances in a dedicated cluster. You can adjust the resources that are occupied for task execution to dynamically adjust the number of tasks that can be scheduled in the cluster. This way, you can reduce the total number of DUs required for the cluster or release DUs.
   * *   Before you modify the upper limit of DUs for a DTS task, make sure that sufficient DUs are available.
   * 
   * @param request - ModifyDtsJobDuLimitRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDtsJobDuLimitResponse
   */
  async modifyDtsJobDuLimitWithOptions(request: $_model.ModifyDtsJobDuLimitRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDtsJobDuLimitResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!$dara.isNull(request.duLimit)) {
      query["DuLimit"] = request.duLimit;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDtsJobDuLimit",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDtsJobDuLimitResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDtsJobDuLimitResponse({}));
  }

  /**
   * Modifies the upper limit of DTS units (DUs) for a Data Transmission Service (DTS) task.
   * 
   * @remarks
   *   DTS allows you to upgrade or downgrade the configurations of DTS instances in a dedicated cluster. You can adjust the resources that are occupied for task execution to dynamically adjust the number of tasks that can be scheduled in the cluster. This way, you can reduce the total number of DUs required for the cluster or release DUs.
   * *   Before you modify the upper limit of DUs for a DTS task, make sure that sufficient DUs are available.
   * 
   * @param request - ModifyDtsJobDuLimitRequest
   * @returns ModifyDtsJobDuLimitResponse
   */
  async modifyDtsJobDuLimit(request: $_model.ModifyDtsJobDuLimitRequest): Promise<$_model.ModifyDtsJobDuLimitResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDtsJobDuLimitWithOptions(request, runtime);
  }

  /**
   * Changes the source or destination database instance of a data synchronization or migration task in Data Transmission Service (DTS).
   * 
   * @remarks
   * >  After the database is changed, Data Transmission Service (DTS) rolls back the incremental write offset for 10 seconds. If the synchronized or migrated data does not have a primary key, make sure that no data is written to the source database while the source or destination database is being replaced. Otherwise, duplicate data may exist.
   * 
   * @param request - ModifyDtsJobEndpointRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDtsJobEndpointResponse
   */
  async modifyDtsJobEndpointWithOptions(request: $_model.ModifyDtsJobEndpointRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDtsJobEndpointResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aliyunUid)) {
      query["AliyunUid"] = request.aliyunUid;
    }

    if (!$dara.isNull(request.database)) {
      query["Database"] = request.database;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.dtsInstanceId)) {
      query["DtsInstanceId"] = request.dtsInstanceId;
    }

    if (!$dara.isNull(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!$dara.isNull(request.endpoint)) {
      query["Endpoint"] = request.endpoint;
    }

    if (!$dara.isNull(request.endpointInstanceId)) {
      query["EndpointInstanceId"] = request.endpointInstanceId;
    }

    if (!$dara.isNull(request.endpointInstanceType)) {
      query["EndpointInstanceType"] = request.endpointInstanceType;
    }

    if (!$dara.isNull(request.endpointIp)) {
      query["EndpointIp"] = request.endpointIp;
    }

    if (!$dara.isNull(request.endpointPort)) {
      query["EndpointPort"] = request.endpointPort;
    }

    if (!$dara.isNull(request.endpointRegionId)) {
      query["EndpointRegionId"] = request.endpointRegionId;
    }

    if (!$dara.isNull(request.modifyAccount)) {
      query["ModifyAccount"] = request.modifyAccount;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.roleName)) {
      query["RoleName"] = request.roleName;
    }

    if (!$dara.isNull(request.shardPassword)) {
      query["ShardPassword"] = request.shardPassword;
    }

    if (!$dara.isNull(request.shardUsername)) {
      query["ShardUsername"] = request.shardUsername;
    }

    if (!$dara.isNull(request.synchronizationDirection)) {
      query["SynchronizationDirection"] = request.synchronizationDirection;
    }

    if (!$dara.isNull(request.username)) {
      query["Username"] = request.username;
    }

    if (!$dara.isNull(request.zeroEtlJob)) {
      query["ZeroEtlJob"] = request.zeroEtlJob;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDtsJobEndpoint",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDtsJobEndpointResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDtsJobEndpointResponse({}));
  }

  /**
   * Changes the source or destination database instance of a data synchronization or migration task in Data Transmission Service (DTS).
   * 
   * @remarks
   * >  After the database is changed, Data Transmission Service (DTS) rolls back the incremental write offset for 10 seconds. If the synchronized or migrated data does not have a primary key, make sure that no data is written to the source database while the source or destination database is being replaced. Otherwise, duplicate data may exist.
   * 
   * @param request - ModifyDtsJobEndpointRequest
   * @returns ModifyDtsJobEndpointResponse
   */
  async modifyDtsJobEndpoint(request: $_model.ModifyDtsJobEndpointRequest): Promise<$_model.ModifyDtsJobEndpointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDtsJobEndpointWithOptions(request, runtime);
  }

  /**
   * Changes the name of a Data Transmission Service (DTS) task.
   * 
   * @param request - ModifyDtsJobNameRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDtsJobNameResponse
   */
  async modifyDtsJobNameWithOptions(request: $_model.ModifyDtsJobNameRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDtsJobNameResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!$dara.isNull(request.dtsJobName)) {
      query["DtsJobName"] = request.dtsJobName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.zeroEtlJob)) {
      query["ZeroEtlJob"] = request.zeroEtlJob;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDtsJobName",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDtsJobNameResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDtsJobNameResponse({}));
  }

  /**
   * Changes the name of a Data Transmission Service (DTS) task.
   * 
   * @param request - ModifyDtsJobNameRequest
   * @returns ModifyDtsJobNameResponse
   */
  async modifyDtsJobName(request: $_model.ModifyDtsJobNameRequest): Promise<$_model.ModifyDtsJobNameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDtsJobNameWithOptions(request, runtime);
  }

  /**
   * Changes the password of the account used to log on to the source or destination database in a Data Transmission Service (DTS) task.
   * 
   * @param request - ModifyDtsJobPasswordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDtsJobPasswordResponse
   */
  async modifyDtsJobPasswordWithOptions(request: $_model.ModifyDtsJobPasswordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDtsJobPasswordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dtsInstanceId)) {
      query["DtsInstanceId"] = request.dtsInstanceId;
    }

    if (!$dara.isNull(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!$dara.isNull(request.endpoint)) {
      query["Endpoint"] = request.endpoint;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.synchronizationDirection)) {
      query["SynchronizationDirection"] = request.synchronizationDirection;
    }

    if (!$dara.isNull(request.userName)) {
      query["UserName"] = request.userName;
    }

    if (!$dara.isNull(request.zeroEtlJob)) {
      query["ZeroEtlJob"] = request.zeroEtlJob;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDtsJobPassword",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDtsJobPasswordResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDtsJobPasswordResponse({}));
  }

  /**
   * Changes the password of the account used to log on to the source or destination database in a Data Transmission Service (DTS) task.
   * 
   * @param request - ModifyDtsJobPasswordRequest
   * @returns ModifyDtsJobPasswordResponse
   */
  async modifyDtsJobPassword(request: $_model.ModifyDtsJobPasswordRequest): Promise<$_model.ModifyDtsJobPasswordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDtsJobPasswordWithOptions(request, runtime);
  }

  /**
   * Enables throttling for data synchronization and data migration.
   * 
   * @param request - ModifyDynamicConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDynamicConfigResponse
   */
  async modifyDynamicConfigWithOptions(request: $_model.ModifyDynamicConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDynamicConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.configList)) {
      query["ConfigList"] = request.configList;
    }

    if (!$dara.isNull(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!$dara.isNull(request.enableLimit)) {
      query["EnableLimit"] = request.enableLimit;
    }

    if (!$dara.isNull(request.jobCode)) {
      query["JobCode"] = request.jobCode;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDynamicConfig",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDynamicConfigResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDynamicConfigResponse({}));
  }

  /**
   * Enables throttling for data synchronization and data migration.
   * 
   * @param request - ModifyDynamicConfigRequest
   * @returns ModifyDynamicConfigResponse
   */
  async modifyDynamicConfig(request: $_model.ModifyDynamicConfigRequest): Promise<$_model.ModifyDynamicConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDynamicConfigWithOptions(request, runtime);
  }

  /**
   * 修改GAD实例名称
   * 
   * @param request - ModifyGadInstanceNameRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyGadInstanceNameResponse
   */
  async modifyGadInstanceNameWithOptions(request: $_model.ModifyGadInstanceNameRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyGadInstanceNameResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyGadInstanceName",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyGadInstanceNameResponse>(await this.callApi(params, req, runtime), new $_model.ModifyGadInstanceNameResponse({}));
  }

  /**
   * 修改GAD实例名称
   * 
   * @param request - ModifyGadInstanceNameRequest
   * @returns ModifyGadInstanceNameResponse
   */
  async modifyGadInstanceName(request: $_model.ModifyGadInstanceNameRequest): Promise<$_model.ModifyGadInstanceNameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyGadInstanceNameWithOptions(request, runtime);
  }

  /**
   * Modifies the information about a change tracking task.
   * 
   * @remarks
   * >  You can preview related API operation parameters when you modify the information about a change tracking task in the Data Transmission Service (DTS) console. This helps you configure the request parameters of this API operation. For more information, see [Preview the request parameters of API operations](https://help.aliyun.com/document_detail/2851612.html).
   * 
   * @param request - ModifySubscriptionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifySubscriptionResponse
   */
  async modifySubscriptionWithOptions(request: $_model.ModifySubscriptionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifySubscriptionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbList)) {
      query["DbList"] = request.dbList;
    }

    if (!$dara.isNull(request.dtsInstanceId)) {
      query["DtsInstanceId"] = request.dtsInstanceId;
    }

    if (!$dara.isNull(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!$dara.isNull(request.modifyType)) {
      query["ModifyType"] = request.modifyType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.reserved)) {
      query["Reserved"] = request.reserved;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.subscriptionDataTypeDDL)) {
      query["SubscriptionDataTypeDDL"] = request.subscriptionDataTypeDDL;
    }

    if (!$dara.isNull(request.subscriptionDataTypeDML)) {
      query["SubscriptionDataTypeDML"] = request.subscriptionDataTypeDML;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifySubscription",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifySubscriptionResponse>(await this.callApi(params, req, runtime), new $_model.ModifySubscriptionResponse({}));
  }

  /**
   * Modifies the information about a change tracking task.
   * 
   * @remarks
   * >  You can preview related API operation parameters when you modify the information about a change tracking task in the Data Transmission Service (DTS) console. This helps you configure the request parameters of this API operation. For more information, see [Preview the request parameters of API operations](https://help.aliyun.com/document_detail/2851612.html).
   * 
   * @param request - ModifySubscriptionRequest
   * @returns ModifySubscriptionResponse
   */
  async modifySubscription(request: $_model.ModifySubscriptionRequest): Promise<$_model.ModifySubscriptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifySubscriptionWithOptions(request, runtime);
  }

  /**
   * Modifies the objects for change tracking.
   * 
   * @param request - ModifySubscriptionObjectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifySubscriptionObjectResponse
   */
  async modifySubscriptionObjectWithOptions(request: $_model.ModifySubscriptionObjectRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifySubscriptionObjectResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.subscriptionInstanceId)) {
      query["SubscriptionInstanceId"] = request.subscriptionInstanceId;
    }

    if (!$dara.isNull(request.subscriptionObject)) {
      query["SubscriptionObject"] = request.subscriptionObject;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifySubscriptionObject",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifySubscriptionObjectResponse>(await this.callApi(params, req, runtime), new $_model.ModifySubscriptionObjectResponse({}));
  }

  /**
   * Modifies the objects for change tracking.
   * 
   * @param request - ModifySubscriptionObjectRequest
   * @returns ModifySubscriptionObjectResponse
   */
  async modifySubscriptionObject(request: $_model.ModifySubscriptionObjectRequest): Promise<$_model.ModifySubscriptionObjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifySubscriptionObjectWithOptions(request, runtime);
  }

  /**
   * Modifies the objects to be synchronized.
   * 
   * @param request - ModifySynchronizationObjectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifySynchronizationObjectResponse
   */
  async modifySynchronizationObjectWithOptions(request: $_model.ModifySynchronizationObjectRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifySynchronizationObjectResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.synchronizationDirection)) {
      query["SynchronizationDirection"] = request.synchronizationDirection;
    }

    if (!$dara.isNull(request.synchronizationJobId)) {
      query["SynchronizationJobId"] = request.synchronizationJobId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.synchronizationObjects)) {
      body["SynchronizationObjects"] = request.synchronizationObjects;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifySynchronizationObject",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifySynchronizationObjectResponse>(await this.callApi(params, req, runtime), new $_model.ModifySynchronizationObjectResponse({}));
  }

  /**
   * Modifies the objects to be synchronized.
   * 
   * @param request - ModifySynchronizationObjectRequest
   * @returns ModifySynchronizationObjectResponse
   */
  async modifySynchronizationObject(request: $_model.ModifySynchronizationObjectRequest): Promise<$_model.ModifySynchronizationObjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifySynchronizationObjectWithOptions(request, runtime);
  }

  /**
   * 预检查创建GAD订单
   * 
   * @param request - PreCheckCreateGadOrderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PreCheckCreateGadOrderResponse
   */
  async preCheckCreateGadOrderWithOptions(request: $_model.PreCheckCreateGadOrderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PreCheckCreateGadOrderResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.slaveDbInstanceId)) {
      query["SlaveDbInstanceId"] = request.slaveDbInstanceId;
    }

    if (!$dara.isNull(request.slaveDbInstanceRegion)) {
      query["SlaveDbInstanceRegion"] = request.slaveDbInstanceRegion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PreCheckCreateGadOrder",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PreCheckCreateGadOrderResponse>(await this.callApi(params, req, runtime), new $_model.PreCheckCreateGadOrderResponse({}));
  }

  /**
   * 预检查创建GAD订单
   * 
   * @param request - PreCheckCreateGadOrderRequest
   * @returns PreCheckCreateGadOrderResponse
   */
  async preCheckCreateGadOrder(request: $_model.PreCheckCreateGadOrderRequest): Promise<$_model.PreCheckCreateGadOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.preCheckCreateGadOrderWithOptions(request, runtime);
  }

  /**
   * Renews a Data Transmission Service (DTS) instance. This API operation is available only for subscription instances.
   * 
   * @param request - RenewInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RenewInstanceResponse
   */
  async renewInstanceWithOptions(request: $_model.RenewInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RenewInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.buyCount)) {
      query["BuyCount"] = request.buyCount;
    }

    if (!$dara.isNull(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
    }

    if (!$dara.isNull(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RenewInstance",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RenewInstanceResponse>(await this.callApi(params, req, runtime), new $_model.RenewInstanceResponse({}));
  }

  /**
   * Renews a Data Transmission Service (DTS) instance. This API operation is available only for subscription instances.
   * 
   * @param request - RenewInstanceRequest
   * @returns RenewInstanceResponse
   */
  async renewInstance(request: $_model.RenewInstanceRequest): Promise<$_model.RenewInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.renewInstanceWithOptions(request, runtime);
  }

  /**
   * Resets a data synchronization or change tracking task.
   * 
   * @remarks
   * >  If you clear the configurations of a data synchronization or change tracking task, DTS deletes the task. Then, DTS creates another task. The task is in the Not Configured state. You must call the [ConfigureDtsJob](https://help.aliyun.com/document_detail/208399.html) operation reconfigure the task.
   * 
   * @param request - ResetDtsJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResetDtsJobResponse
   */
  async resetDtsJobWithOptions(request: $_model.ResetDtsJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ResetDtsJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dtsInstanceId)) {
      query["DtsInstanceId"] = request.dtsInstanceId;
    }

    if (!$dara.isNull(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.synchronizationDirection)) {
      query["SynchronizationDirection"] = request.synchronizationDirection;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResetDtsJob",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResetDtsJobResponse>(await this.callApi(params, req, runtime), new $_model.ResetDtsJobResponse({}));
  }

  /**
   * Resets a data synchronization or change tracking task.
   * 
   * @remarks
   * >  If you clear the configurations of a data synchronization or change tracking task, DTS deletes the task. Then, DTS creates another task. The task is in the Not Configured state. You must call the [ConfigureDtsJob](https://help.aliyun.com/document_detail/208399.html) operation reconfigure the task.
   * 
   * @param request - ResetDtsJobRequest
   * @returns ResetDtsJobResponse
   */
  async resetDtsJob(request: $_model.ResetDtsJobRequest): Promise<$_model.ResetDtsJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resetDtsJobWithOptions(request, runtime);
  }

  /**
   * Clears the configurations of a data synchronization task.
   * 
   * @remarks
   * >  If you clear the configurations of a data synchronization task, the task will be released. To start the task again, you must call the **ConfigureSynchronizationJob** operation to reconfigure the task.
   * 
   * @param request - ResetSynchronizationJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResetSynchronizationJobResponse
   */
  async resetSynchronizationJobWithOptions(request: $_model.ResetSynchronizationJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ResetSynchronizationJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.synchronizationDirection)) {
      query["SynchronizationDirection"] = request.synchronizationDirection;
    }

    if (!$dara.isNull(request.synchronizationJobId)) {
      query["SynchronizationJobId"] = request.synchronizationJobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResetSynchronizationJob",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResetSynchronizationJobResponse>(await this.callApi(params, req, runtime), new $_model.ResetSynchronizationJobResponse({}));
  }

  /**
   * Clears the configurations of a data synchronization task.
   * 
   * @remarks
   * >  If you clear the configurations of a data synchronization task, the task will be released. To start the task again, you must call the **ConfigureSynchronizationJob** operation to reconfigure the task.
   * 
   * @param request - ResetSynchronizationJobRequest
   * @returns ResetSynchronizationJobResponse
   */
  async resetSynchronizationJob(request: $_model.ResetSynchronizationJobRequest): Promise<$_model.ResetSynchronizationJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resetSynchronizationJobWithOptions(request, runtime);
  }

  /**
   * 调转双向任务的方向
   * 
   * @param request - ReverseTwoWayDirectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReverseTwoWayDirectionResponse
   */
  async reverseTwoWayDirectionWithOptions(request: $_model.ReverseTwoWayDirectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReverseTwoWayDirectionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dtsInstanceId)) {
      query["DtsInstanceId"] = request.dtsInstanceId;
    }

    if (!$dara.isNull(request.ignoreErrorSubJob)) {
      query["IgnoreErrorSubJob"] = request.ignoreErrorSubJob;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReverseTwoWayDirection",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReverseTwoWayDirectionResponse>(await this.callApi(params, req, runtime), new $_model.ReverseTwoWayDirectionResponse({}));
  }

  /**
   * 调转双向任务的方向
   * 
   * @param request - ReverseTwoWayDirectionRequest
   * @returns ReverseTwoWayDirectionResponse
   */
  async reverseTwoWayDirection(request: $_model.ReverseTwoWayDirectionRequest): Promise<$_model.ReverseTwoWayDirectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.reverseTwoWayDirectionWithOptions(request, runtime);
  }

  /**
   * Ignores the precheck items that a data migration or synchronization task may fail to pass.
   * 
   * @param request - ShieldPrecheckRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ShieldPrecheckResponse
   */
  async shieldPrecheckWithOptions(request: $_model.ShieldPrecheckRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ShieldPrecheckResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dtsInstanceId)) {
      query["DtsInstanceId"] = request.dtsInstanceId;
    }

    if (!$dara.isNull(request.precheckItems)) {
      query["PrecheckItems"] = request.precheckItems;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ShieldPrecheck",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ShieldPrecheckResponse>(await this.callApi(params, req, runtime), new $_model.ShieldPrecheckResponse({}));
  }

  /**
   * Ignores the precheck items that a data migration or synchronization task may fail to pass.
   * 
   * @param request - ShieldPrecheckRequest
   * @returns ShieldPrecheckResponse
   */
  async shieldPrecheck(request: $_model.ShieldPrecheckRequest): Promise<$_model.ShieldPrecheckResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.shieldPrecheckWithOptions(request, runtime);
  }

  /**
   * The tables that do not need to be synchronized in a full data synchronization are skipped.
   * 
   * @param request - SkipFullJobTableRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SkipFullJobTableResponse
   */
  async skipFullJobTableWithOptions(request: $_model.SkipFullJobTableRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SkipFullJobTableResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!$dara.isNull(request.jobProgressId)) {
      query["JobProgressId"] = request.jobProgressId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.zeroEtlJob)) {
      query["ZeroEtlJob"] = request.zeroEtlJob;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SkipFullJobTable",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SkipFullJobTableResponse>(await this.callApi(params, req, runtime), new $_model.SkipFullJobTableResponse({}));
  }

  /**
   * The tables that do not need to be synchronized in a full data synchronization are skipped.
   * 
   * @param request - SkipFullJobTableRequest
   * @returns SkipFullJobTableResponse
   */
  async skipFullJobTable(request: $_model.SkipFullJobTableRequest): Promise<$_model.SkipFullJobTableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.skipFullJobTableWithOptions(request, runtime);
  }

  /**
   * Skips one or more precheck items.
   * 
   * @param request - SkipPreCheckRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SkipPreCheckResponse
   */
  async skipPreCheckWithOptions(request: $_model.SkipPreCheckRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SkipPreCheckResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.skip)) {
      query["Skip"] = request.skip;
    }

    if (!$dara.isNull(request.skipPreCheckItems)) {
      query["SkipPreCheckItems"] = request.skipPreCheckItems;
    }

    if (!$dara.isNull(request.skipPreCheckNames)) {
      query["SkipPreCheckNames"] = request.skipPreCheckNames;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SkipPreCheck",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SkipPreCheckResponse>(await this.callApi(params, req, runtime), new $_model.SkipPreCheckResponse({}));
  }

  /**
   * Skips one or more precheck items.
   * 
   * @param request - SkipPreCheckRequest
   * @returns SkipPreCheckResponse
   */
  async skipPreCheck(request: $_model.SkipPreCheckRequest): Promise<$_model.SkipPreCheckResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.skipPreCheckWithOptions(request, runtime);
  }

  /**
   * Starts a data migration, data synchronization, or change tracking task.
   * 
   * @param request - StartDtsJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartDtsJobResponse
   */
  async startDtsJobWithOptions(request: $_model.StartDtsJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartDtsJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dtsInstanceId)) {
      query["DtsInstanceId"] = request.dtsInstanceId;
    }

    if (!$dara.isNull(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.synchronizationDirection)) {
      query["SynchronizationDirection"] = request.synchronizationDirection;
    }

    if (!$dara.isNull(request.zeroEtlJob)) {
      query["ZeroEtlJob"] = request.zeroEtlJob;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartDtsJob",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartDtsJobResponse>(await this.callApi(params, req, runtime), new $_model.StartDtsJobResponse({}));
  }

  /**
   * Starts a data migration, data synchronization, or change tracking task.
   * 
   * @param request - StartDtsJobRequest
   * @returns StartDtsJobResponse
   */
  async startDtsJob(request: $_model.StartDtsJobRequest): Promise<$_model.StartDtsJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startDtsJobWithOptions(request, runtime);
  }

  /**
   * Starts multiple data migration or data synchronization tasks.
   * 
   * @param request - StartDtsJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartDtsJobsResponse
   */
  async startDtsJobsWithOptions(request: $_model.StartDtsJobsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartDtsJobsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dtsJobIds)) {
      query["DtsJobIds"] = request.dtsJobIds;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.zeroEtlJob)) {
      query["ZeroEtlJob"] = request.zeroEtlJob;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartDtsJobs",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartDtsJobsResponse>(await this.callApi(params, req, runtime), new $_model.StartDtsJobsResponse({}));
  }

  /**
   * Starts multiple data migration or data synchronization tasks.
   * 
   * @param request - StartDtsJobsRequest
   * @returns StartDtsJobsResponse
   */
  async startDtsJobs(request: $_model.StartDtsJobsRequest): Promise<$_model.StartDtsJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startDtsJobsWithOptions(request, runtime);
  }

  /**
   * Starts a data migration task.
   * 
   * @param request - StartMigrationJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartMigrationJobResponse
   */
  async startMigrationJobWithOptions(request: $_model.StartMigrationJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartMigrationJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.migrationJobId)) {
      query["MigrationJobId"] = request.migrationJobId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartMigrationJob",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartMigrationJobResponse>(await this.callApi(params, req, runtime), new $_model.StartMigrationJobResponse({}));
  }

  /**
   * Starts a data migration task.
   * 
   * @param request - StartMigrationJobRequest
   * @returns StartMigrationJobResponse
   */
  async startMigrationJob(request: $_model.StartMigrationJobRequest): Promise<$_model.StartMigrationJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startMigrationJobWithOptions(request, runtime);
  }

  /**
   * Starts the reverse task that is created by calling the CreateReverseDtsJob operation.
   * 
   * @remarks
   * Before you call this operation, make sure that your instance is not released and is paused. You can check the status of the instance in the Data Transmission Service (DTS) console or by calling the [DescribeDtsJobDetail](https://help.aliyun.com/document_detail/208925.html) operation.
   * 
   * @param request - StartReverseWriterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartReverseWriterResponse
   */
  async startReverseWriterWithOptions(request: $_model.StartReverseWriterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartReverseWriterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.checkPoint)) {
      query["CheckPoint"] = request.checkPoint;
    }

    if (!$dara.isNull(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartReverseWriter",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartReverseWriterResponse>(await this.callApi(params, req, runtime), new $_model.StartReverseWriterResponse({}));
  }

  /**
   * Starts the reverse task that is created by calling the CreateReverseDtsJob operation.
   * 
   * @remarks
   * Before you call this operation, make sure that your instance is not released and is paused. You can check the status of the instance in the Data Transmission Service (DTS) console or by calling the [DescribeDtsJobDetail](https://help.aliyun.com/document_detail/208925.html) operation.
   * 
   * @param request - StartReverseWriterRequest
   * @returns StartReverseWriterResponse
   */
  async startReverseWriter(request: $_model.StartReverseWriterRequest): Promise<$_model.StartReverseWriterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startReverseWriterWithOptions(request, runtime);
  }

  /**
   * Starts a change tracking task.
   * 
   * @param request - StartSubscriptionInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartSubscriptionInstanceResponse
   */
  async startSubscriptionInstanceWithOptions(request: $_model.StartSubscriptionInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartSubscriptionInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.subscriptionInstanceId)) {
      query["SubscriptionInstanceId"] = request.subscriptionInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartSubscriptionInstance",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartSubscriptionInstanceResponse>(await this.callApi(params, req, runtime), new $_model.StartSubscriptionInstanceResponse({}));
  }

  /**
   * Starts a change tracking task.
   * 
   * @param request - StartSubscriptionInstanceRequest
   * @returns StartSubscriptionInstanceResponse
   */
  async startSubscriptionInstance(request: $_model.StartSubscriptionInstanceRequest): Promise<$_model.StartSubscriptionInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startSubscriptionInstanceWithOptions(request, runtime);
  }

  /**
   * Starts a data synchronization task.
   * 
   * @param request - StartSynchronizationJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartSynchronizationJobResponse
   */
  async startSynchronizationJobWithOptions(request: $_model.StartSynchronizationJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartSynchronizationJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.synchronizationDirection)) {
      query["SynchronizationDirection"] = request.synchronizationDirection;
    }

    if (!$dara.isNull(request.synchronizationJobId)) {
      query["SynchronizationJobId"] = request.synchronizationJobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartSynchronizationJob",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartSynchronizationJobResponse>(await this.callApi(params, req, runtime), new $_model.StartSynchronizationJobResponse({}));
  }

  /**
   * Starts a data synchronization task.
   * 
   * @param request - StartSynchronizationJobRequest
   * @returns StartSynchronizationJobResponse
   */
  async startSynchronizationJob(request: $_model.StartSynchronizationJobRequest): Promise<$_model.StartSynchronizationJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startSynchronizationJobWithOptions(request, runtime);
  }

  /**
   * Releases a cluster.
   * 
   * @param request - StopDedicatedClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopDedicatedClusterResponse
   */
  async stopDedicatedClusterWithOptions(request: $_model.StopDedicatedClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopDedicatedClusterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dedicatedClusterId)) {
      query["DedicatedClusterId"] = request.dedicatedClusterId;
    }

    if (!$dara.isNull(request.dedicatedClusterName)) {
      query["DedicatedClusterName"] = request.dedicatedClusterName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopDedicatedCluster",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopDedicatedClusterResponse>(await this.callApi(params, req, runtime), new $_model.StopDedicatedClusterResponse({}));
  }

  /**
   * Releases a cluster.
   * 
   * @param request - StopDedicatedClusterRequest
   * @returns StopDedicatedClusterResponse
   */
  async stopDedicatedCluster(request: $_model.StopDedicatedClusterRequest): Promise<$_model.StopDedicatedClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopDedicatedClusterWithOptions(request, runtime);
  }

  /**
   * Stops a data migration, data synchronization, or change tracking task.
   * 
   * @param request - StopDtsJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopDtsJobResponse
   */
  async stopDtsJobWithOptions(request: $_model.StopDtsJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopDtsJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dtsInstanceId)) {
      query["DtsInstanceId"] = request.dtsInstanceId;
    }

    if (!$dara.isNull(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.synchronizationDirection)) {
      query["SynchronizationDirection"] = request.synchronizationDirection;
    }

    if (!$dara.isNull(request.zeroEtlJob)) {
      query["ZeroEtlJob"] = request.zeroEtlJob;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopDtsJob",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopDtsJobResponse>(await this.callApi(params, req, runtime), new $_model.StopDtsJobResponse({}));
  }

  /**
   * Stops a data migration, data synchronization, or change tracking task.
   * 
   * @param request - StopDtsJobRequest
   * @returns StopDtsJobResponse
   */
  async stopDtsJob(request: $_model.StopDtsJobRequest): Promise<$_model.StopDtsJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopDtsJobWithOptions(request, runtime);
  }

  /**
   * Stops multiple data migration or data synchronization tasks.
   * 
   * @param request - StopDtsJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopDtsJobsResponse
   */
  async stopDtsJobsWithOptions(request: $_model.StopDtsJobsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopDtsJobsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dtsJobIds)) {
      query["DtsJobIds"] = request.dtsJobIds;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.zeroEtlJob)) {
      query["ZeroEtlJob"] = request.zeroEtlJob;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopDtsJobs",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopDtsJobsResponse>(await this.callApi(params, req, runtime), new $_model.StopDtsJobsResponse({}));
  }

  /**
   * Stops multiple data migration or data synchronization tasks.
   * 
   * @param request - StopDtsJobsRequest
   * @returns StopDtsJobsResponse
   */
  async stopDtsJobs(request: $_model.StopDtsJobsRequest): Promise<$_model.StopDtsJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopDtsJobsWithOptions(request, runtime);
  }

  /**
   * Stops a data migration task that is in the Migrating state.
   * 
   * @param request - StopMigrationJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopMigrationJobResponse
   */
  async stopMigrationJobWithOptions(request: $_model.StopMigrationJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopMigrationJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.migrationJobId)) {
      query["MigrationJobId"] = request.migrationJobId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopMigrationJob",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopMigrationJobResponse>(await this.callApi(params, req, runtime), new $_model.StopMigrationJobResponse({}));
  }

  /**
   * Stops a data migration task that is in the Migrating state.
   * 
   * @param request - StopMigrationJobRequest
   * @returns StopMigrationJobResponse
   */
  async stopMigrationJob(request: $_model.StopMigrationJobRequest): Promise<$_model.StopMigrationJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopMigrationJobWithOptions(request, runtime);
  }

  /**
   * Queries the number of migrated or synchronized objects in a Data Transmission Service (DTS) task.
   * 
   * @param request - SummaryJobDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SummaryJobDetailResponse
   */
  async summaryJobDetailWithOptions(request: $_model.SummaryJobDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SummaryJobDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dtsInstanceId)) {
      query["DtsInstanceId"] = request.dtsInstanceId;
    }

    if (!$dara.isNull(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!$dara.isNull(request.jobCode)) {
      query["JobCode"] = request.jobCode;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.structType)) {
      query["StructType"] = request.structType;
    }

    if (!$dara.isNull(request.synchronizationDirection)) {
      query["SynchronizationDirection"] = request.synchronizationDirection;
    }

    if (!$dara.isNull(request.zeroEtlJob)) {
      query["ZeroEtlJob"] = request.zeroEtlJob;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SummaryJobDetail",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SummaryJobDetailResponse>(await this.callApi(params, req, runtime), new $_model.SummaryJobDetailResponse({}));
  }

  /**
   * Queries the number of migrated or synchronized objects in a Data Transmission Service (DTS) task.
   * 
   * @param request - SummaryJobDetailRequest
   * @returns SummaryJobDetailResponse
   */
  async summaryJobDetail(request: $_model.SummaryJobDetailRequest): Promise<$_model.SummaryJobDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.summaryJobDetailWithOptions(request, runtime);
  }

  /**
   * Pauses a data migration, data synchronization, or change tracking task.
   * 
   * @remarks
   * ***
   * 
   * @param request - SuspendDtsJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SuspendDtsJobResponse
   */
  async suspendDtsJobWithOptions(request: $_model.SuspendDtsJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SuspendDtsJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dtsInstanceId)) {
      query["DtsInstanceId"] = request.dtsInstanceId;
    }

    if (!$dara.isNull(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.synchronizationDirection)) {
      query["SynchronizationDirection"] = request.synchronizationDirection;
    }

    if (!$dara.isNull(request.zeroEtlJob)) {
      query["ZeroEtlJob"] = request.zeroEtlJob;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SuspendDtsJob",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SuspendDtsJobResponse>(await this.callApi(params, req, runtime), new $_model.SuspendDtsJobResponse({}));
  }

  /**
   * Pauses a data migration, data synchronization, or change tracking task.
   * 
   * @remarks
   * ***
   * 
   * @param request - SuspendDtsJobRequest
   * @returns SuspendDtsJobResponse
   */
  async suspendDtsJob(request: $_model.SuspendDtsJobRequest): Promise<$_model.SuspendDtsJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.suspendDtsJobWithOptions(request, runtime);
  }

  /**
   * Suspends multiple Data Transmission Service (DTS) tasks.
   * 
   * @param request - SuspendDtsJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SuspendDtsJobsResponse
   */
  async suspendDtsJobsWithOptions(request: $_model.SuspendDtsJobsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SuspendDtsJobsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dtsJobIds)) {
      query["DtsJobIds"] = request.dtsJobIds;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.zeroEtlJob)) {
      query["ZeroEtlJob"] = request.zeroEtlJob;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SuspendDtsJobs",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SuspendDtsJobsResponse>(await this.callApi(params, req, runtime), new $_model.SuspendDtsJobsResponse({}));
  }

  /**
   * Suspends multiple Data Transmission Service (DTS) tasks.
   * 
   * @param request - SuspendDtsJobsRequest
   * @returns SuspendDtsJobsResponse
   */
  async suspendDtsJobs(request: $_model.SuspendDtsJobsRequest): Promise<$_model.SuspendDtsJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.suspendDtsJobsWithOptions(request, runtime);
  }

  /**
   * Pauses a data migration task.
   * 
   * @param request - SuspendMigrationJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SuspendMigrationJobResponse
   */
  async suspendMigrationJobWithOptions(request: $_model.SuspendMigrationJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SuspendMigrationJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.migrationJobId)) {
      query["MigrationJobId"] = request.migrationJobId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SuspendMigrationJob",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SuspendMigrationJobResponse>(await this.callApi(params, req, runtime), new $_model.SuspendMigrationJobResponse({}));
  }

  /**
   * Pauses a data migration task.
   * 
   * @param request - SuspendMigrationJobRequest
   * @returns SuspendMigrationJobResponse
   */
  async suspendMigrationJob(request: $_model.SuspendMigrationJobRequest): Promise<$_model.SuspendMigrationJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.suspendMigrationJobWithOptions(request, runtime);
  }

  /**
   * Pauses a data synchronization task.
   * 
   * @remarks
   * > 
   * *   When you call this operation, the data synchronization task must be in the Synchronizing state.
   * *   We recommend that you do not pause a data synchronization task for more than 6 hours. Otherwise, the task cannot be started again.
   * *   If the billing method is pay-as-you-go, DTS charges a fee even when the task is paused. This is because DTS only stops writing data to the destination database. DTS continues to pull the logs of the source database so that the task can resume quickly after it is restarted. Therefore, data synchronization consumes resources such as the bandwidth of the source database.
   * 
   * @param request - SuspendSynchronizationJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SuspendSynchronizationJobResponse
   */
  async suspendSynchronizationJobWithOptions(request: $_model.SuspendSynchronizationJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SuspendSynchronizationJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.synchronizationDirection)) {
      query["SynchronizationDirection"] = request.synchronizationDirection;
    }

    if (!$dara.isNull(request.synchronizationJobId)) {
      query["SynchronizationJobId"] = request.synchronizationJobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SuspendSynchronizationJob",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SuspendSynchronizationJobResponse>(await this.callApi(params, req, runtime), new $_model.SuspendSynchronizationJobResponse({}));
  }

  /**
   * Pauses a data synchronization task.
   * 
   * @remarks
   * > 
   * *   When you call this operation, the data synchronization task must be in the Synchronizing state.
   * *   We recommend that you do not pause a data synchronization task for more than 6 hours. Otherwise, the task cannot be started again.
   * *   If the billing method is pay-as-you-go, DTS charges a fee even when the task is paused. This is because DTS only stops writing data to the destination database. DTS continues to pull the logs of the source database so that the task can resume quickly after it is restarted. Therefore, data synchronization consumes resources such as the bandwidth of the source database.
   * 
   * @param request - SuspendSynchronizationJobRequest
   * @returns SuspendSynchronizationJobResponse
   */
  async suspendSynchronizationJob(request: $_model.SuspendSynchronizationJobRequest): Promise<$_model.SuspendSynchronizationJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.suspendSynchronizationJobWithOptions(request, runtime);
  }

  /**
   * 物理迁移任务切换上云
   * 
   * @param request - SwitchPhysicalDtsJobToCloudRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SwitchPhysicalDtsJobToCloudResponse
   */
  async switchPhysicalDtsJobToCloudWithOptions(request: $_model.SwitchPhysicalDtsJobToCloudRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SwitchPhysicalDtsJobToCloudResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dtsInstanceId)) {
      query["DtsInstanceId"] = request.dtsInstanceId;
    }

    if (!$dara.isNull(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.synchronizationDirection)) {
      query["SynchronizationDirection"] = request.synchronizationDirection;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SwitchPhysicalDtsJobToCloud",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SwitchPhysicalDtsJobToCloudResponse>(await this.callApi(params, req, runtime), new $_model.SwitchPhysicalDtsJobToCloudResponse({}));
  }

  /**
   * 物理迁移任务切换上云
   * 
   * @param request - SwitchPhysicalDtsJobToCloudRequest
   * @returns SwitchPhysicalDtsJobToCloudResponse
   */
  async switchPhysicalDtsJobToCloud(request: $_model.SwitchPhysicalDtsJobToCloudRequest): Promise<$_model.SwitchPhysicalDtsJobToCloudResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.switchPhysicalDtsJobToCloudWithOptions(request, runtime);
  }

  /**
   * After you perform a primary/secondary switchover on the source or destination database, you can call the SwitchSynchronizationEndpoint operation to transfer the connection settings to Data Transmission Service (DTS). DTS will restart the data synchronization task from the breakpoint.
   * 
   * @param request - SwitchSynchronizationEndpointRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SwitchSynchronizationEndpointResponse
   */
  async switchSynchronizationEndpointWithOptions(request: $_model.SwitchSynchronizationEndpointRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SwitchSynchronizationEndpointResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.synchronizationDirection)) {
      query["SynchronizationDirection"] = request.synchronizationDirection;
    }

    if (!$dara.isNull(request.synchronizationJobId)) {
      query["SynchronizationJobId"] = request.synchronizationJobId;
    }

    if (!$dara.isNull(request.endpoint)) {
      query["Endpoint"] = request.endpoint;
    }

    if (!$dara.isNull(request.sourceEndpoint)) {
      query["SourceEndpoint"] = request.sourceEndpoint;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SwitchSynchronizationEndpoint",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SwitchSynchronizationEndpointResponse>(await this.callApi(params, req, runtime), new $_model.SwitchSynchronizationEndpointResponse({}));
  }

  /**
   * After you perform a primary/secondary switchover on the source or destination database, you can call the SwitchSynchronizationEndpoint operation to transfer the connection settings to Data Transmission Service (DTS). DTS will restart the data synchronization task from the breakpoint.
   * 
   * @param request - SwitchSynchronizationEndpointRequest
   * @returns SwitchSynchronizationEndpointResponse
   */
  async switchSynchronizationEndpoint(request: $_model.SwitchSynchronizationEndpointRequest): Promise<$_model.SwitchSynchronizationEndpointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.switchSynchronizationEndpointWithOptions(request, runtime);
  }

  /**
   * Adds tags to data migration, data synchronization, or change tracking instances.
   * 
   * @remarks
   * If you have a large number of instances, you can create multiple tags and add these tags to the instances. Then, you can query instances by tag.
   * *   A tag consists of a key and a value. Each key must be unique in a region within an Alibaba Cloud account. Different keys can be mapped to the same value.
   * *   If the tag that you specify does not exist, this tag is automatically created and added to the specified instance.
   * *   If the key of the specified tag is the same as that of an existing tag, the specified tag overwrites the existing tag.
   * *   You can add up to 20 tags to an instance.
   * *   You can add tags to up to 50 instances in each request.
   * 
   * @param request - TagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagResourcesResponse
   */
  async tagResourcesWithOptions(request: $_model.TagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TagResources",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TagResourcesResponse>(await this.callApi(params, req, runtime), new $_model.TagResourcesResponse({}));
  }

  /**
   * Adds tags to data migration, data synchronization, or change tracking instances.
   * 
   * @remarks
   * If you have a large number of instances, you can create multiple tags and add these tags to the instances. Then, you can query instances by tag.
   * *   A tag consists of a key and a value. Each key must be unique in a region within an Alibaba Cloud account. Different keys can be mapped to the same value.
   * *   If the tag that you specify does not exist, this tag is automatically created and added to the specified instance.
   * *   If the key of the specified tag is the same as that of an existing tag, the specified tag overwrites the existing tag.
   * *   You can add up to 20 tags to an instance.
   * *   You can add tags to up to 50 instances in each request.
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: $_model.TagResourcesRequest): Promise<$_model.TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * Upgrades or downgrades a Data Transmission Service (DTS) instance.
   * 
   * @param request - TransferInstanceClassRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TransferInstanceClassResponse
   */
  async transferInstanceClassWithOptions(request: $_model.TransferInstanceClassRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TransferInstanceClassResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!$dara.isNull(request.instanceClass)) {
      query["InstanceClass"] = request.instanceClass;
    }

    if (!$dara.isNull(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TransferInstanceClass",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TransferInstanceClassResponse>(await this.callApi(params, req, runtime), new $_model.TransferInstanceClassResponse({}));
  }

  /**
   * Upgrades or downgrades a Data Transmission Service (DTS) instance.
   * 
   * @param request - TransferInstanceClassRequest
   * @returns TransferInstanceClassResponse
   */
  async transferInstanceClass(request: $_model.TransferInstanceClassRequest): Promise<$_model.TransferInstanceClassResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.transferInstanceClassWithOptions(request, runtime);
  }

  /**
   * Changes the billing method of a Data Transmission Service (DTS) instance.
   * 
   * @remarks
   * Before you call this operation, make sure that you fully understand the [billing](https://www.alibabacloud.com/zh/product/data-transmission-service/pricing) of DTS.
   * *   To prevent resource waste, make sure that the billing method of your DTS instances has to be changed.
   * *   Data migration instances only support the pay-as-you-go billing method.
   * 
   * @param request - TransferPayTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TransferPayTypeResponse
   */
  async transferPayTypeWithOptions(request: $_model.TransferPayTypeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TransferPayTypeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!$dara.isNull(request.buyCount)) {
      query["BuyCount"] = request.buyCount;
    }

    if (!$dara.isNull(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
    }

    if (!$dara.isNull(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!$dara.isNull(request.instanceClass)) {
      query["InstanceClass"] = request.instanceClass;
    }

    if (!$dara.isNull(request.maxDu)) {
      query["MaxDu"] = request.maxDu;
    }

    if (!$dara.isNull(request.minDu)) {
      query["MinDu"] = request.minDu;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TransferPayType",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TransferPayTypeResponse>(await this.callApi(params, req, runtime), new $_model.TransferPayTypeResponse({}));
  }

  /**
   * Changes the billing method of a Data Transmission Service (DTS) instance.
   * 
   * @remarks
   * Before you call this operation, make sure that you fully understand the [billing](https://www.alibabacloud.com/zh/product/data-transmission-service/pricing) of DTS.
   * *   To prevent resource waste, make sure that the billing method of your DTS instances has to be changed.
   * *   Data migration instances only support the pay-as-you-go billing method.
   * 
   * @param request - TransferPayTypeRequest
   * @returns TransferPayTypeResponse
   */
  async transferPayType(request: $_model.TransferPayTypeRequest): Promise<$_model.TransferPayTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.transferPayTypeWithOptions(request, runtime);
  }

  /**
   * Unbinds tags from one or more data migration, data synchronization, or change tracking instances.
   * 
   * @remarks
   * >  If a tag is unbound from an instance and is not bound to other instances, the tag is deleted.
   * 
   * @param request - UntagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UntagResourcesResponse
   */
  async untagResourcesWithOptions(request: $_model.UntagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UntagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.all)) {
      query["All"] = request.all;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tagKey)) {
      query["TagKey"] = request.tagKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UntagResources",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UntagResourcesResponse>(await this.callApi(params, req, runtime), new $_model.UntagResourcesResponse({}));
  }

  /**
   * Unbinds tags from one or more data migration, data synchronization, or change tracking instances.
   * 
   * @remarks
   * >  If a tag is unbound from an instance and is not bound to other instances, the tag is deleted.
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: $_model.UntagResourcesRequest): Promise<$_model.UntagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  /**
   * Upgrades the synchronization topology of a data synchronization instance from one-way synchronization to two-way synchronization. This operation is supported only for pay-as-you-go synchronization instances.
   * 
   * @remarks
   * Before you call this operation, make sure that you fully understand the billing methods and [pricing](https://www.alibabacloud.com/zh/product/data-transmission-service/pricing) of Data Transmission Service (DTS)
   * When you call this operation, take note of the following information:
   * *   The source and destination databases of the data synchronization task are both **MySQL** databases.
   * *   The synchronization topology of the data synchronization task is **one-way synchronization**.
   * *   The data synchronization task is in the **Synchronizing** state.
   * *   The upgrade operation causes data synchronization latency of about 5 seconds. We recommend that you perform this operation during off-peak hours.
   * 
   * @param request - UpgradeTwoWayRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpgradeTwoWayResponse
   */
  async upgradeTwoWayWithOptions(request: $_model.UpgradeTwoWayRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpgradeTwoWayResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceClass)) {
      query["InstanceClass"] = request.instanceClass;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpgradeTwoWay",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpgradeTwoWayResponse>(await this.callApi(params, req, runtime), new $_model.UpgradeTwoWayResponse({}));
  }

  /**
   * Upgrades the synchronization topology of a data synchronization instance from one-way synchronization to two-way synchronization. This operation is supported only for pay-as-you-go synchronization instances.
   * 
   * @remarks
   * Before you call this operation, make sure that you fully understand the billing methods and [pricing](https://www.alibabacloud.com/zh/product/data-transmission-service/pricing) of Data Transmission Service (DTS)
   * When you call this operation, take note of the following information:
   * *   The source and destination databases of the data synchronization task are both **MySQL** databases.
   * *   The synchronization topology of the data synchronization task is **one-way synchronization**.
   * *   The data synchronization task is in the **Synchronizing** state.
   * *   The upgrade operation causes data synchronization latency of about 5 seconds. We recommend that you perform this operation during off-peak hours.
   * 
   * @param request - UpgradeTwoWayRequest
   * @returns UpgradeTwoWayResponse
   */
  async upgradeTwoWay(request: $_model.UpgradeTwoWayRequest): Promise<$_model.UpgradeTwoWayResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.upgradeTwoWayWithOptions(request, runtime);
  }

  /**
   * If the \\\\*\\\\*source or destination instance\\\\*\\\\* is a \\\\*\\\\*self-managed database\\\\*\\\\* or a \\\\*\\\\*third-party cloud database\\\\*\\\\*, you need to call this operation to query the CIDR blocks of DTS servers. Then, you need to add the CIDR blocks of DTS servers to the security settings of the source or destination instance, for example, the firewall of your database. For more information, see \\[Add the CIDR blocks of DTS servers to the security settings of on-premises databases]\\\\(~~176627~~).
   * \\\\>  If the \\\\*\\\\*source or destination database\\\\*\\\\* is an \\\\*\\\\*ApsaraDB database instance\\\\*\\\\* (such as RDS instance and ApsaraDB for MongoDB instance) or a \\\\*\\\\*self-managed database hosted on Elastic Compute Service (ECS)\\\\*\\\\*, you do not need to add the CIDR blocks. When you click \\\\*\\\\*Set Whitelist and Next\\\\*\\\\* in the DTS console, DTS automatically adds the CIDR blocks of DTS servers to the security settings of the source or destination instance.
   * 
   * @remarks
   * The operation that you want to perform. Set the value to **WhiteIpList**.
   * 
   * @param request - WhiteIpListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns WhiteIpListResponse
   */
  async whiteIpListWithOptions(request: $_model.WhiteIpListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.WhiteIpListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.destAliyunUid)) {
      query["DestAliyunUid"] = request.destAliyunUid;
    }

    if (!$dara.isNull(request.destPrimaryVswId)) {
      query["DestPrimaryVswId"] = request.destPrimaryVswId;
    }

    if (!$dara.isNull(request.destRoleName)) {
      query["DestRoleName"] = request.destRoleName;
    }

    if (!$dara.isNull(request.destSecondaryVswId)) {
      query["DestSecondaryVswId"] = request.destSecondaryVswId;
    }

    if (!$dara.isNull(request.destVpcId)) {
      query["DestVpcId"] = request.destVpcId;
    }

    if (!$dara.isNull(request.destinationRegion)) {
      query["DestinationRegion"] = request.destinationRegion;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.srcAliyunUid)) {
      query["SrcAliyunUid"] = request.srcAliyunUid;
    }

    if (!$dara.isNull(request.srcPrimaryVswId)) {
      query["SrcPrimaryVswId"] = request.srcPrimaryVswId;
    }

    if (!$dara.isNull(request.srcRoleName)) {
      query["SrcRoleName"] = request.srcRoleName;
    }

    if (!$dara.isNull(request.srcSecondaryVswId)) {
      query["SrcSecondaryVswId"] = request.srcSecondaryVswId;
    }

    if (!$dara.isNull(request.srcVpcId)) {
      query["SrcVpcId"] = request.srcVpcId;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    if (!$dara.isNull(request.zeroEtlJob)) {
      query["ZeroEtlJob"] = request.zeroEtlJob;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "WhiteIpList",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.WhiteIpListResponse>(await this.callApi(params, req, runtime), new $_model.WhiteIpListResponse({}));
  }

  /**
   * If the \\\\*\\\\*source or destination instance\\\\*\\\\* is a \\\\*\\\\*self-managed database\\\\*\\\\* or a \\\\*\\\\*third-party cloud database\\\\*\\\\*, you need to call this operation to query the CIDR blocks of DTS servers. Then, you need to add the CIDR blocks of DTS servers to the security settings of the source or destination instance, for example, the firewall of your database. For more information, see \\[Add the CIDR blocks of DTS servers to the security settings of on-premises databases]\\\\(~~176627~~).
   * \\\\>  If the \\\\*\\\\*source or destination database\\\\*\\\\* is an \\\\*\\\\*ApsaraDB database instance\\\\*\\\\* (such as RDS instance and ApsaraDB for MongoDB instance) or a \\\\*\\\\*self-managed database hosted on Elastic Compute Service (ECS)\\\\*\\\\*, you do not need to add the CIDR blocks. When you click \\\\*\\\\*Set Whitelist and Next\\\\*\\\\* in the DTS console, DTS automatically adds the CIDR blocks of DTS servers to the security settings of the source or destination instance.
   * 
   * @remarks
   * The operation that you want to perform. Set the value to **WhiteIpList**.
   * 
   * @param request - WhiteIpListRequest
   * @returns WhiteIpListResponse
   */
  async whiteIpList(request: $_model.WhiteIpListRequest): Promise<$_model.WhiteIpListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.whiteIpListWithOptions(request, runtime);
  }

}
