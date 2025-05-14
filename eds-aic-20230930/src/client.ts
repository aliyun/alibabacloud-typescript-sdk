// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil }from '@alicloud/openapi-core';


import * as $_model from './models/model';
export * from './models/model';

export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._signatureAlgorithm = "v2";
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("eds-aic", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Attaches an Android Debug Bridge (ADB) key pair to one or more cloud phone instances.
   * 
   * @remarks
   *   You can attach to an ADB key pair only to cloud phone instances in the Running state.
   * *   After you attach an ADB key pair, make sure the private key of the ADB key pair is copied to the ~/.android directory (macOS or Linux operating systems) or the C:\\Users\\Username.android directory (Windows operating systems). In addition, you must run the adb kill-server command to restart the ADB process to ensure correct ADB connection. Otherwise, ADB connection may fail due to authentication exceptions.
   * 
   * @param request - AttachKeyPairRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AttachKeyPairResponse
   */
  async attachKeyPairWithOptions(request: $_model.AttachKeyPairRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AttachKeyPairResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.keyPairId)) {
      query["KeyPairId"] = request.keyPairId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AttachKeyPair",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AttachKeyPairResponse>(await this.callApi(params, req, runtime), new $_model.AttachKeyPairResponse({}));
  }

  /**
   * Attaches an Android Debug Bridge (ADB) key pair to one or more cloud phone instances.
   * 
   * @remarks
   *   You can attach to an ADB key pair only to cloud phone instances in the Running state.
   * *   After you attach an ADB key pair, make sure the private key of the ADB key pair is copied to the ~/.android directory (macOS or Linux operating systems) or the C:\\Users\\Username.android directory (Windows operating systems). In addition, you must run the adb kill-server command to restart the ADB process to ensure correct ADB connection. Otherwise, ADB connection may fail due to authentication exceptions.
   * 
   * @param request - AttachKeyPairRequest
   * @returns AttachKeyPairResponse
   */
  async attachKeyPair(request: $_model.AttachKeyPairRequest): Promise<$_model.AttachKeyPairResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.attachKeyPairWithOptions(request, runtime);
  }

  /**
   * Authorize/unauthorize Android instances for users.
   * 
   * @remarks
   * Instance states that support user assignment: Available, Shutting Down, Stopped, Starting, Backing Up, Restoring, Backup Failed, Restore Failed.
   * Instance states that support unassignment: Available, Shutting Down, Stopped, Starting, Backing Up, Restoring, Backup Failed, Restore Failed, Expired, Overdue, Deleted.
   * 
   * @param request - AuthorizeAndroidInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AuthorizeAndroidInstanceResponse
   */
  async authorizeAndroidInstanceWithOptions(request: $_model.AuthorizeAndroidInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AuthorizeAndroidInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.androidInstanceIds)) {
      query["AndroidInstanceIds"] = request.androidInstanceIds;
    }

    if (!$dara.isNull(request.authorizeUserId)) {
      query["AuthorizeUserId"] = request.authorizeUserId;
    }

    if (!$dara.isNull(request.unAuthorizeUserId)) {
      query["UnAuthorizeUserId"] = request.unAuthorizeUserId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AuthorizeAndroidInstance",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AuthorizeAndroidInstanceResponse>(await this.callApi(params, req, runtime), new $_model.AuthorizeAndroidInstanceResponse({}));
  }

  /**
   * Authorize/unauthorize Android instances for users.
   * 
   * @remarks
   * Instance states that support user assignment: Available, Shutting Down, Stopped, Starting, Backing Up, Restoring, Backup Failed, Restore Failed.
   * Instance states that support unassignment: Available, Shutting Down, Stopped, Starting, Backing Up, Restoring, Backup Failed, Restore Failed, Expired, Overdue, Deleted.
   * 
   * @param request - AuthorizeAndroidInstanceRequest
   * @returns AuthorizeAndroidInstanceResponse
   */
  async authorizeAndroidInstance(request: $_model.AuthorizeAndroidInstanceRequest): Promise<$_model.AuthorizeAndroidInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.authorizeAndroidInstanceWithOptions(request, runtime);
  }

  /**
   * Generates and uploads backup files.
   * 
   * @remarks
   * Currently, this operation allows you to upload only backup files generated by cloud phones to Object Storage Service (OSS) buckets.
   * 
   * @param request - BackupFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BackupFileResponse
   */
  async backupFileWithOptions(request: $_model.BackupFileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BackupFileResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.androidInstanceIdList)) {
      query["AndroidInstanceIdList"] = request.androidInstanceIdList;
    }

    if (!$dara.isNull(request.backupAll)) {
      query["BackupAll"] = request.backupAll;
    }

    if (!$dara.isNull(request.backupFileName)) {
      query["BackupFileName"] = request.backupFileName;
    }

    if (!$dara.isNull(request.backupFilePath)) {
      query["BackupFilePath"] = request.backupFilePath;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.sourceAppList)) {
      query["SourceAppList"] = request.sourceAppList;
    }

    if (!$dara.isNull(request.sourceFilePathList)) {
      query["SourceFilePathList"] = request.sourceFilePathList;
    }

    if (!$dara.isNull(request.uploadEndpoint)) {
      query["UploadEndpoint"] = request.uploadEndpoint;
    }

    if (!$dara.isNull(request.uploadType)) {
      query["UploadType"] = request.uploadType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BackupFile",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BackupFileResponse>(await this.callApi(params, req, runtime), new $_model.BackupFileResponse({}));
  }

  /**
   * Generates and uploads backup files.
   * 
   * @remarks
   * Currently, this operation allows you to upload only backup files generated by cloud phones to Object Storage Service (OSS) buckets.
   * 
   * @param request - BackupFileRequest
   * @returns BackupFileResponse
   */
  async backupFile(request: $_model.BackupFileRequest): Promise<$_model.BackupFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.backupFileWithOptions(request, runtime);
  }

  /**
   * Retrieves connection tickets in batch.
   * 
   * @param request - BatchGetAcpConnectionTicketRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchGetAcpConnectionTicketResponse
   */
  async batchGetAcpConnectionTicketWithOptions(request: $_model.BatchGetAcpConnectionTicketRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchGetAcpConnectionTicketResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!$dara.isNull(request.instanceGroupId)) {
      query["InstanceGroupId"] = request.instanceGroupId;
    }

    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.instanceTasks)) {
      query["InstanceTasks"] = request.instanceTasks;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchGetAcpConnectionTicket",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchGetAcpConnectionTicketResponse>(await this.callApi(params, req, runtime), new $_model.BatchGetAcpConnectionTicketResponse({}));
  }

  /**
   * Retrieves connection tickets in batch.
   * 
   * @param request - BatchGetAcpConnectionTicketRequest
   * @returns BatchGetAcpConnectionTicketResponse
   */
  async batchGetAcpConnectionTicket(request: $_model.BatchGetAcpConnectionTicketRequest): Promise<$_model.BatchGetAcpConnectionTicketResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchGetAcpConnectionTicketWithOptions(request, runtime);
  }

  /**
   * 修改云手机矩阵的配置
   * 
   * @param request - ChangeCloudPhoneNodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeCloudPhoneNodeResponse
   */
  async changeCloudPhoneNodeWithOptions(request: $_model.ChangeCloudPhoneNodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChangeCloudPhoneNodeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!$dara.isNull(request.nodeId)) {
      query["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.phoneCount)) {
      query["PhoneCount"] = request.phoneCount;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChangeCloudPhoneNode",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChangeCloudPhoneNodeResponse>(await this.callApi(params, req, runtime), new $_model.ChangeCloudPhoneNodeResponse({}));
  }

  /**
   * 修改云手机矩阵的配置
   * 
   * @param request - ChangeCloudPhoneNodeRequest
   * @returns ChangeCloudPhoneNodeResponse
   */
  async changeCloudPhoneNode(request: $_model.ChangeCloudPhoneNodeRequest): Promise<$_model.ChangeCloudPhoneNodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.changeCloudPhoneNodeWithOptions(request, runtime);
  }

  /**
   * Check the resource inventory.
   * 
   * @param request - CheckResourceStockRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckResourceStockResponse
   */
  async checkResourceStockWithOptions(request: $_model.CheckResourceStockRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckResourceStockResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acpSpecId)) {
      query["AcpSpecId"] = request.acpSpecId;
    }

    if (!$dara.isNull(request.amount)) {
      query["Amount"] = request.amount;
    }

    if (!$dara.isNull(request.bizRegionId)) {
      query["BizRegionId"] = request.bizRegionId;
    }

    if (!$dara.isNull(request.gpuAcceleration)) {
      query["GpuAcceleration"] = request.gpuAcceleration;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckResourceStock",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckResourceStockResponse>(await this.callApi(params, req, runtime), new $_model.CheckResourceStockResponse({}));
  }

  /**
   * Check the resource inventory.
   * 
   * @param request - CheckResourceStockRequest
   * @returns CheckResourceStockResponse
   */
  async checkResourceStock(request: $_model.CheckResourceStockRequest): Promise<$_model.CheckResourceStockResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkResourceStockWithOptions(request, runtime);
  }

  /**
   * Creates pay-as-you-go or subscription instance groups.
   * 
   * @remarks
   * Before creating an instance group, ensure you understand the [billing methods](https://help.aliyun.com/document_detail/2807121.html) supported by Cloud Phone.
   * *   If the billing method of an instance group is PrePaid, AutoPay is set to false by default. In this case, you need to go to [Expenses and Costs](https://usercenter2-intl.aliyun.com/order/list) to manually complete the payment.
   * *   You can also set AutoPay to true based on your business requirements.
   * 
   * @param request - CreateAndroidInstanceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAndroidInstanceGroupResponse
   */
  async createAndroidInstanceGroupWithOptions(request: $_model.CreateAndroidInstanceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAndroidInstanceGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.amount)) {
      query["Amount"] = request.amount;
    }

    if (!$dara.isNull(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!$dara.isNull(request.autoRenew)) {
      query["AutoRenew"] = request.autoRenew;
    }

    if (!$dara.isNull(request.bizRegionId)) {
      query["BizRegionId"] = request.bizRegionId;
    }

    if (!$dara.isNull(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.enableIpv6)) {
      query["EnableIpv6"] = request.enableIpv6;
    }

    if (!$dara.isNull(request.gpuAcceleration)) {
      query["GpuAcceleration"] = request.gpuAcceleration;
    }

    if (!$dara.isNull(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!$dara.isNull(request.instanceGroupName)) {
      query["InstanceGroupName"] = request.instanceGroupName;
    }

    if (!$dara.isNull(request.instanceGroupSpec)) {
      query["InstanceGroupSpec"] = request.instanceGroupSpec;
    }

    if (!$dara.isNull(request.ipv6Bandwidth)) {
      query["Ipv6Bandwidth"] = request.ipv6Bandwidth;
    }

    if (!$dara.isNull(request.keyPairId)) {
      query["KeyPairId"] = request.keyPairId;
    }

    if (!$dara.isNull(request.numberOfInstances)) {
      query["NumberOfInstances"] = request.numberOfInstances;
    }

    if (!$dara.isNull(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.periodUnit)) {
      query["PeriodUnit"] = request.periodUnit;
    }

    if (!$dara.isNull(request.policyGroupId)) {
      query["PolicyGroupId"] = request.policyGroupId;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAndroidInstanceGroup",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAndroidInstanceGroupResponse>(await this.callApi(params, req, runtime), new $_model.CreateAndroidInstanceGroupResponse({}));
  }

  /**
   * Creates pay-as-you-go or subscription instance groups.
   * 
   * @remarks
   * Before creating an instance group, ensure you understand the [billing methods](https://help.aliyun.com/document_detail/2807121.html) supported by Cloud Phone.
   * *   If the billing method of an instance group is PrePaid, AutoPay is set to false by default. In this case, you need to go to [Expenses and Costs](https://usercenter2-intl.aliyun.com/order/list) to manually complete the payment.
   * *   You can also set AutoPay to true based on your business requirements.
   * 
   * @param request - CreateAndroidInstanceGroupRequest
   * @returns CreateAndroidInstanceGroupResponse
   */
  async createAndroidInstanceGroup(request: $_model.CreateAndroidInstanceGroupRequest): Promise<$_model.CreateAndroidInstanceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAndroidInstanceGroupWithOptions(request, runtime);
  }

  /**
   * Creates an Android application.
   * 
   * @remarks
   * When creating an app, you can provide app information to the system in one of the following ways:
   * *   Way 1: Apps from the Application Center
   *     *   You can use one of the following methods:
   *         *   Method 1: Pass in the `FileName` and `FilePath` parameters at the same time.
   *         *   Method 2: Pass in the `OssAppUrl` parameter
   *     *   Rule: If your app is from the Alibaba Cloud Workspace Application Center, you must use either Method 1 or Method 2. If both are used, Method 1 takes priority.
   *     *   Condition: Before you proceed, log on to the [Elastic Desktop Service (EDS) Enterprise console](https://eds.console.aliyun.com/osshelp) and follow the on-screen instructions to upload the app file to the Application Center to obtain the values of the `FileName`, `FilePath`, and `OssAppUrl` parameters.
   * *   Way 2: Custom apps
   *     *   Pass in the `CustomAppInfo` parameter.
   *     *   Rule: If you pass in the `CustomAppInfo` parameter, all six fields within it are required.
   * >  If Way 1 and Way 2 are adopted simultaneously, the information from Way 2 takes priority.
   * 
   * @param tmpReq - CreateAppRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAppResponse
   */
  async createAppWithOptions(tmpReq: $_model.CreateAppRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAppResponse> {
    tmpReq.validate();
    let request = new $_model.CreateAppShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.customAppInfo)) {
      request.customAppInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.customAppInfo, "CustomAppInfo", "json");
    }

    let query = { };
    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.bizRegionId)) {
      query["BizRegionId"] = request.bizRegionId;
    }

    if (!$dara.isNull(request.customAppInfoShrink)) {
      query["CustomAppInfo"] = request.customAppInfoShrink;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!$dara.isNull(request.filePath)) {
      query["FilePath"] = request.filePath;
    }

    if (!$dara.isNull(request.iconUrl)) {
      query["IconUrl"] = request.iconUrl;
    }

    if (!$dara.isNull(request.installParam)) {
      query["InstallParam"] = request.installParam;
    }

    if (!$dara.isNull(request.ossAppUrl)) {
      query["OssAppUrl"] = request.ossAppUrl;
    }

    if (!$dara.isNull(request.signApk)) {
      query["SignApk"] = request.signApk;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateApp",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAppResponse>(await this.callApi(params, req, runtime), new $_model.CreateAppResponse({}));
  }

  /**
   * Creates an Android application.
   * 
   * @remarks
   * When creating an app, you can provide app information to the system in one of the following ways:
   * *   Way 1: Apps from the Application Center
   *     *   You can use one of the following methods:
   *         *   Method 1: Pass in the `FileName` and `FilePath` parameters at the same time.
   *         *   Method 2: Pass in the `OssAppUrl` parameter
   *     *   Rule: If your app is from the Alibaba Cloud Workspace Application Center, you must use either Method 1 or Method 2. If both are used, Method 1 takes priority.
   *     *   Condition: Before you proceed, log on to the [Elastic Desktop Service (EDS) Enterprise console](https://eds.console.aliyun.com/osshelp) and follow the on-screen instructions to upload the app file to the Application Center to obtain the values of the `FileName`, `FilePath`, and `OssAppUrl` parameters.
   * *   Way 2: Custom apps
   *     *   Pass in the `CustomAppInfo` parameter.
   *     *   Rule: If you pass in the `CustomAppInfo` parameter, all six fields within it are required.
   * >  If Way 1 and Way 2 are adopted simultaneously, the information from Way 2 takes priority.
   * 
   * @param request - CreateAppRequest
   * @returns CreateAppResponse
   */
  async createApp(request: $_model.CreateAppRequest): Promise<$_model.CreateAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAppWithOptions(request, runtime);
  }

  /**
   * Creates a cloud phone matrix.
   * 
   * @param tmpReq - CreateCloudPhoneNodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCloudPhoneNodeResponse
   */
  async createCloudPhoneNodeWithOptions(tmpReq: $_model.CreateCloudPhoneNodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCloudPhoneNodeResponse> {
    tmpReq.validate();
    let request = new $_model.CreateCloudPhoneNodeShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.displayConfig)) {
      request.displayConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.displayConfig, "DisplayConfig", "json");
    }

    let query = { };
    if (!$dara.isNull(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!$dara.isNull(request.autoRenew)) {
      query["AutoRenew"] = request.autoRenew;
    }

    if (!$dara.isNull(request.bizRegionId)) {
      query["BizRegionId"] = request.bizRegionId;
    }

    if (!$dara.isNull(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
    }

    if (!$dara.isNull(request.count)) {
      query["Count"] = request.count;
    }

    if (!$dara.isNull(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!$dara.isNull(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!$dara.isNull(request.networkId)) {
      query["NetworkId"] = request.networkId;
    }

    if (!$dara.isNull(request.nodeName)) {
      query["NodeName"] = request.nodeName;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.periodUnit)) {
      query["PeriodUnit"] = request.periodUnit;
    }

    if (!$dara.isNull(request.phoneCount)) {
      query["PhoneCount"] = request.phoneCount;
    }

    if (!$dara.isNull(request.resolutionHeight)) {
      query["ResolutionHeight"] = request.resolutionHeight;
    }

    if (!$dara.isNull(request.resolutionWidth)) {
      query["ResolutionWidth"] = request.resolutionWidth;
    }

    if (!$dara.isNull(request.serverShareDataVolume)) {
      query["ServerShareDataVolume"] = request.serverShareDataVolume;
    }

    if (!$dara.isNull(request.serverType)) {
      query["ServerType"] = request.serverType;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.displayConfigShrink)) {
      body["DisplayConfig"] = request.displayConfigShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCloudPhoneNode",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCloudPhoneNodeResponse>(await this.callApi(params, req, runtime), new $_model.CreateCloudPhoneNodeResponse({}));
  }

  /**
   * Creates a cloud phone matrix.
   * 
   * @param request - CreateCloudPhoneNodeRequest
   * @returns CreateCloudPhoneNodeResponse
   */
  async createCloudPhoneNode(request: $_model.CreateCloudPhoneNodeRequest): Promise<$_model.CreateCloudPhoneNodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCloudPhoneNodeWithOptions(request, runtime);
  }

  /**
   * Creates a custom image from a cloud phone instance.
   * 
   * @param request - CreateCustomImageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCustomImageResponse
   */
  async createCustomImageWithOptions(request: $_model.CreateCustomImageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCustomImageResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.imageName)) {
      body["ImageName"] = request.imageName;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCustomImage",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCustomImageResponse>(await this.callApi(params, req, runtime), new $_model.CreateCustomImageResponse({}));
  }

  /**
   * Creates a custom image from a cloud phone instance.
   * 
   * @param request - CreateCustomImageRequest
   * @returns CreateCustomImageResponse
   */
  async createCustomImage(request: $_model.CreateCustomImageRequest): Promise<$_model.CreateCustomImageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCustomImageWithOptions(request, runtime);
  }

  /**
   * Creates an Android Debug Bridge (ADB) key pair. The system retains the public key and provides a PEM-encoded private key in PKCS#8 format, adhering to the ADB connection specification. You must securely store the private key.
   * 
   * @remarks
   * In addition to using the CreateKeyPair operation to generate a key pair, you can also create one by using the ADB tool and upload it to the Cloud Phone console. The usage of this key pair is identical to that of a system-generated key pair.
   * Each tenant can create up to 500 key pairs.
   * 
   * @param request - CreateKeyPairRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateKeyPairResponse
   */
  async createKeyPairWithOptions(request: $_model.CreateKeyPairRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateKeyPairResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.keyPairName)) {
      query["KeyPairName"] = request.keyPairName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateKeyPair",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateKeyPairResponse>(await this.callApi(params, req, runtime), new $_model.CreateKeyPairResponse({}));
  }

  /**
   * Creates an Android Debug Bridge (ADB) key pair. The system retains the public key and provides a PEM-encoded private key in PKCS#8 format, adhering to the ADB connection specification. You must securely store the private key.
   * 
   * @remarks
   * In addition to using the CreateKeyPair operation to generate a key pair, you can also create one by using the ADB tool and upload it to the Cloud Phone console. The usage of this key pair is identical to that of a system-generated key pair.
   * Each tenant can create up to 500 key pairs.
   * 
   * @param request - CreateKeyPairRequest
   * @returns CreateKeyPairResponse
   */
  async createKeyPair(request: $_model.CreateKeyPairRequest): Promise<$_model.CreateKeyPairResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createKeyPairWithOptions(request, runtime);
  }

  /**
   * Creates a policy.
   * 
   * @param tmpReq - CreatePolicyGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePolicyGroupResponse
   */
  async createPolicyGroupWithOptions(tmpReq: $_model.CreatePolicyGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePolicyGroupResponse> {
    tmpReq.validate();
    let request = new $_model.CreatePolicyGroupShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.netRedirectPolicy)) {
      request.netRedirectPolicyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.netRedirectPolicy, "NetRedirectPolicy", "json");
    }

    if (!$dara.isNull(tmpReq.watermark)) {
      request.watermarkShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.watermark, "Watermark", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.cameraRedirect)) {
      body["CameraRedirect"] = request.cameraRedirect;
    }

    if (!$dara.isNull(request.clipboard)) {
      body["Clipboard"] = request.clipboard;
    }

    if (!$dara.isNull(request.html5FileTransfer)) {
      body["Html5FileTransfer"] = request.html5FileTransfer;
    }

    if (!$dara.isNull(request.localDrive)) {
      body["LocalDrive"] = request.localDrive;
    }

    if (!$dara.isNull(request.lockResolution)) {
      body["LockResolution"] = request.lockResolution;
    }

    if (!$dara.isNull(request.netRedirectPolicyShrink)) {
      body["NetRedirectPolicy"] = request.netRedirectPolicyShrink;
    }

    if (!$dara.isNull(request.policyGroupName)) {
      body["PolicyGroupName"] = request.policyGroupName;
    }

    if (!$dara.isNull(request.policyType)) {
      body["PolicyType"] = request.policyType;
    }

    if (!$dara.isNull(request.resolutionHeight)) {
      body["ResolutionHeight"] = request.resolutionHeight;
    }

    if (!$dara.isNull(request.resolutionWidth)) {
      body["ResolutionWidth"] = request.resolutionWidth;
    }

    if (!$dara.isNull(request.watermarkShrink)) {
      body["Watermark"] = request.watermarkShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePolicyGroup",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePolicyGroupResponse>(await this.callApi(params, req, runtime), new $_model.CreatePolicyGroupResponse({}));
  }

  /**
   * Creates a policy.
   * 
   * @param request - CreatePolicyGroupRequest
   * @returns CreatePolicyGroupResponse
   */
  async createPolicyGroup(request: $_model.CreatePolicyGroupRequest): Promise<$_model.CreatePolicyGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createPolicyGroupWithOptions(request, runtime);
  }

  /**
   * Creates a screenshot of a cloud phone instance.
   * 
   * @remarks
   * You can call this operation to create a screenshot of a cloud phone instance and upload it to the default Object Storage Service (OSS) bucket. The operation returns a task ID, which you can use with the DescribeTasks operation to get the download link for the screenshot.
   * 
   * @param request - CreateScreenshotRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateScreenshotResponse
   */
  async createScreenshotWithOptions(request: $_model.CreateScreenshotRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateScreenshotResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.androidInstanceIdList)) {
      query["AndroidInstanceIdList"] = request.androidInstanceIdList;
    }

    if (!$dara.isNull(request.ossBucketName)) {
      query["OssBucketName"] = request.ossBucketName;
    }

    if (!$dara.isNull(request.skipCheckPolicyConfig)) {
      query["SkipCheckPolicyConfig"] = request.skipCheckPolicyConfig;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateScreenshot",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateScreenshotResponse>(await this.callApi(params, req, runtime), new $_model.CreateScreenshotResponse({}));
  }

  /**
   * Creates a screenshot of a cloud phone instance.
   * 
   * @remarks
   * You can call this operation to create a screenshot of a cloud phone instance and upload it to the default Object Storage Service (OSS) bucket. The operation returns a task ID, which you can use with the DescribeTasks operation to get the download link for the screenshot.
   * 
   * @param request - CreateScreenshotRequest
   * @returns CreateScreenshotResponse
   */
  async createScreenshot(request: $_model.CreateScreenshotRequest): Promise<$_model.CreateScreenshotResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createScreenshotWithOptions(request, runtime);
  }

  /**
   * Delete an instance group.
   * 
   * @remarks
   * You can delete only pay-as-you-go instance groups.
   * You can delete subscription instance groups only after they expire.
   * 
   * @param request - DeleteAndroidInstanceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAndroidInstanceGroupResponse
   */
  async deleteAndroidInstanceGroupWithOptions(request: $_model.DeleteAndroidInstanceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAndroidInstanceGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceGroupIds)) {
      query["InstanceGroupIds"] = request.instanceGroupIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAndroidInstanceGroup",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAndroidInstanceGroupResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAndroidInstanceGroupResponse({}));
  }

  /**
   * Delete an instance group.
   * 
   * @remarks
   * You can delete only pay-as-you-go instance groups.
   * You can delete subscription instance groups only after they expire.
   * 
   * @param request - DeleteAndroidInstanceGroupRequest
   * @returns DeleteAndroidInstanceGroupResponse
   */
  async deleteAndroidInstanceGroup(request: $_model.DeleteAndroidInstanceGroupRequest): Promise<$_model.DeleteAndroidInstanceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAndroidInstanceGroupWithOptions(request, runtime);
  }

  /**
   * Deletes an application. Before you delete an application, make sure that the application is not installed on any instances.
   * 
   * @param request - DeleteAppsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAppsResponse
   */
  async deleteAppsWithOptions(request: $_model.DeleteAppsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAppsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appIdList)) {
      query["AppIdList"] = request.appIdList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteApps",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAppsResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAppsResponse({}));
  }

  /**
   * Deletes an application. Before you delete an application, make sure that the application is not installed on any instances.
   * 
   * @param request - DeleteAppsRequest
   * @returns DeleteAppsResponse
   */
  async deleteApps(request: $_model.DeleteAppsRequest): Promise<$_model.DeleteAppsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAppsWithOptions(request, runtime);
  }

  /**
   * Deletes a cloud phone matrix.
   * 
   * @remarks
   * Before you proceed, make sure that the cloud phone matrix that you want to delete expired.
   * 
   * @param request - DeleteCloudPhoneNodesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCloudPhoneNodesResponse
   */
  async deleteCloudPhoneNodesWithOptions(request: $_model.DeleteCloudPhoneNodesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCloudPhoneNodesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.nodeIds)) {
      body["NodeIds"] = request.nodeIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCloudPhoneNodes",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteCloudPhoneNodesResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCloudPhoneNodesResponse({}));
  }

  /**
   * Deletes a cloud phone matrix.
   * 
   * @remarks
   * Before you proceed, make sure that the cloud phone matrix that you want to delete expired.
   * 
   * @param request - DeleteCloudPhoneNodesRequest
   * @returns DeleteCloudPhoneNodesResponse
   */
  async deleteCloudPhoneNodes(request: $_model.DeleteCloudPhoneNodesRequest): Promise<$_model.DeleteCloudPhoneNodesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCloudPhoneNodesWithOptions(request, runtime);
  }

  /**
   * Deletes a custom image.
   * 
   * @remarks
   * You cannot delete an image that is currently in use by an instance group.
   * 
   * @param tmpReq - DeleteImagesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteImagesResponse
   */
  async deleteImagesWithOptions(tmpReq: $_model.DeleteImagesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteImagesResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteImagesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.imageIds)) {
      request.imageIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.imageIds, "ImageIds", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.imageIdsShrink)) {
      body["ImageIds"] = request.imageIdsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteImages",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteImagesResponse>(await this.callApi(params, req, runtime), new $_model.DeleteImagesResponse({}));
  }

  /**
   * Deletes a custom image.
   * 
   * @remarks
   * You cannot delete an image that is currently in use by an instance group.
   * 
   * @param request - DeleteImagesRequest
   * @returns DeleteImagesResponse
   */
  async deleteImages(request: $_model.DeleteImagesRequest): Promise<$_model.DeleteImagesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteImagesWithOptions(request, runtime);
  }

  /**
   * Deletes Android Debug Bridge (ADB) key pairs.
   * 
   * @remarks
   *   If a cloud phone instance is currently associated with the ADB key pair you intend to delete, the ADB key pair cannot be deleted.
   * *   Once an ADB key pair is deleted, it cannot be retrieved or queried by using the DescribeKeyPairs operation.
   * 
   * @param request - DeleteKeyPairsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteKeyPairsResponse
   */
  async deleteKeyPairsWithOptions(request: $_model.DeleteKeyPairsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteKeyPairsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.keyPairIds)) {
      query["KeyPairIds"] = request.keyPairIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteKeyPairs",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteKeyPairsResponse>(await this.callApi(params, req, runtime), new $_model.DeleteKeyPairsResponse({}));
  }

  /**
   * Deletes Android Debug Bridge (ADB) key pairs.
   * 
   * @remarks
   *   If a cloud phone instance is currently associated with the ADB key pair you intend to delete, the ADB key pair cannot be deleted.
   * *   Once an ADB key pair is deleted, it cannot be retrieved or queried by using the DescribeKeyPairs operation.
   * 
   * @param request - DeleteKeyPairsRequest
   * @returns DeleteKeyPairsResponse
   */
  async deleteKeyPairs(request: $_model.DeleteKeyPairsRequest): Promise<$_model.DeleteKeyPairsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteKeyPairsWithOptions(request, runtime);
  }

  /**
   * Deletes a policy.
   * 
   * @param request - DeletePolicyGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePolicyGroupResponse
   */
  async deletePolicyGroupWithOptions(request: $_model.DeletePolicyGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeletePolicyGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.policyGroupIds)) {
      query["PolicyGroupIds"] = request.policyGroupIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeletePolicyGroup",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeletePolicyGroupResponse>(await this.callApi(params, req, runtime), new $_model.DeletePolicyGroupResponse({}));
  }

  /**
   * Deletes a policy.
   * 
   * @param request - DeletePolicyGroupRequest
   * @returns DeletePolicyGroupResponse
   */
  async deletePolicyGroup(request: $_model.DeletePolicyGroupRequest): Promise<$_model.DeletePolicyGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deletePolicyGroupWithOptions(request, runtime);
  }

  /**
   * Queries the details of an instance group.
   * 
   * @param request - DescribeAndroidInstanceGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAndroidInstanceGroupsResponse
   */
  async describeAndroidInstanceGroupsWithOptions(request: $_model.DescribeAndroidInstanceGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAndroidInstanceGroupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizRegionId)) {
      query["BizRegionId"] = request.bizRegionId;
    }

    if (!$dara.isNull(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
    }

    if (!$dara.isNull(request.instanceGroupIds)) {
      query["InstanceGroupIds"] = request.instanceGroupIds;
    }

    if (!$dara.isNull(request.instanceGroupName)) {
      query["InstanceGroupName"] = request.instanceGroupName;
    }

    if (!$dara.isNull(request.keyPairId)) {
      query["KeyPairId"] = request.keyPairId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.policyGroupId)) {
      query["PolicyGroupId"] = request.policyGroupId;
    }

    if (!$dara.isNull(request.saleMode)) {
      query["SaleMode"] = request.saleMode;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAndroidInstanceGroups",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAndroidInstanceGroupsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAndroidInstanceGroupsResponse({}));
  }

  /**
   * Queries the details of an instance group.
   * 
   * @param request - DescribeAndroidInstanceGroupsRequest
   * @returns DescribeAndroidInstanceGroupsResponse
   */
  async describeAndroidInstanceGroups(request: $_model.DescribeAndroidInstanceGroupsRequest): Promise<$_model.DescribeAndroidInstanceGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAndroidInstanceGroupsWithOptions(request, runtime);
  }

  /**
   * Queries cloud phone instances.
   * 
   * @param request - DescribeAndroidInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAndroidInstancesResponse
   */
  async describeAndroidInstancesWithOptions(request: $_model.DescribeAndroidInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAndroidInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.androidInstanceIds)) {
      query["AndroidInstanceIds"] = request.androidInstanceIds;
    }

    if (!$dara.isNull(request.androidInstanceName)) {
      query["AndroidInstanceName"] = request.androidInstanceName;
    }

    if (!$dara.isNull(request.authorizedUserId)) {
      query["AuthorizedUserId"] = request.authorizedUserId;
    }

    if (!$dara.isNull(request.bizRegionId)) {
      query["BizRegionId"] = request.bizRegionId;
    }

    if (!$dara.isNull(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
    }

    if (!$dara.isNull(request.instanceGroupId)) {
      query["InstanceGroupId"] = request.instanceGroupId;
    }

    if (!$dara.isNull(request.instanceGroupIds)) {
      query["InstanceGroupIds"] = request.instanceGroupIds;
    }

    if (!$dara.isNull(request.instanceGroupName)) {
      query["InstanceGroupName"] = request.instanceGroupName;
    }

    if (!$dara.isNull(request.keyPairId)) {
      query["KeyPairId"] = request.keyPairId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.nodeId)) {
      query["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.nodeName)) {
      query["NodeName"] = request.nodeName;
    }

    if (!$dara.isNull(request.officeSiteIds)) {
      query["OfficeSiteIds"] = request.officeSiteIds;
    }

    if (!$dara.isNull(request.qosRuleIds)) {
      query["QosRuleIds"] = request.qosRuleIds;
    }

    if (!$dara.isNull(request.saleMode)) {
      query["SaleMode"] = request.saleMode;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAndroidInstances",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAndroidInstancesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAndroidInstancesResponse({}));
  }

  /**
   * Queries cloud phone instances.
   * 
   * @param request - DescribeAndroidInstancesRequest
   * @returns DescribeAndroidInstancesResponse
   */
  async describeAndroidInstances(request: $_model.DescribeAndroidInstancesRequest): Promise<$_model.DescribeAndroidInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAndroidInstancesWithOptions(request, runtime);
  }

  /**
   * Queries applications.
   * 
   * @param request - DescribeAppsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAppsResponse
   */
  async describeAppsWithOptions(request: $_model.DescribeAppsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAppsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appIdList)) {
      query["AppIdList"] = request.appIdList;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.appType)) {
      query["AppType"] = request.appType;
    }

    if (!$dara.isNull(request.bizRegionId)) {
      query["BizRegionId"] = request.bizRegionId;
    }

    if (!$dara.isNull(request.installationStatus)) {
      query["InstallationStatus"] = request.installationStatus;
    }

    if (!$dara.isNull(request.MD5)) {
      query["MD5"] = request.MD5;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeApps",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAppsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAppsResponse({}));
  }

  /**
   * Queries applications.
   * 
   * @param request - DescribeAppsRequest
   * @returns DescribeAppsResponse
   */
  async describeApps(request: $_model.DescribeAppsRequest): Promise<$_model.DescribeAppsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAppsWithOptions(request, runtime);
  }

  /**
   * Queries backup files.
   * 
   * @remarks
   * Currently, this operation allows you to query only backup files generated by cloud phones that are stored in Object Storage Service (OSS) buckets.
   * 
   * @param request - DescribeBackupFilesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBackupFilesResponse
   */
  async describeBackupFilesWithOptions(request: $_model.DescribeBackupFilesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeBackupFilesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.androidInstanceId)) {
      query["AndroidInstanceId"] = request.androidInstanceId;
    }

    if (!$dara.isNull(request.androidInstanceName)) {
      query["AndroidInstanceName"] = request.androidInstanceName;
    }

    if (!$dara.isNull(request.backupAll)) {
      query["BackupAll"] = request.backupAll;
    }

    if (!$dara.isNull(request.backupFileId)) {
      query["BackupFileId"] = request.backupFileId;
    }

    if (!$dara.isNull(request.backupFileName)) {
      query["BackupFileName"] = request.backupFileName;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!$dara.isNull(request.instanceGroupId)) {
      query["InstanceGroupId"] = request.instanceGroupId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.statusList)) {
      query["StatusList"] = request.statusList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeBackupFiles",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeBackupFilesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeBackupFilesResponse({}));
  }

  /**
   * Queries backup files.
   * 
   * @remarks
   * Currently, this operation allows you to query only backup files generated by cloud phones that are stored in Object Storage Service (OSS) buckets.
   * 
   * @param request - DescribeBackupFilesRequest
   * @returns DescribeBackupFilesResponse
   */
  async describeBackupFiles(request: $_model.DescribeBackupFilesRequest): Promise<$_model.DescribeBackupFilesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeBackupFilesWithOptions(request, runtime);
  }

  /**
   * Queries the details of a cloud phone matrix.
   * 
   * @param request - DescribeCloudPhoneNodesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCloudPhoneNodesResponse
   */
  async describeCloudPhoneNodesWithOptions(request: $_model.DescribeCloudPhoneNodesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCloudPhoneNodesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizRegionId)) {
      query["BizRegionId"] = request.bizRegionId;
    }

    if (!$dara.isNull(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.nodeIds)) {
      query["NodeIds"] = request.nodeIds;
    }

    if (!$dara.isNull(request.nodeName)) {
      query["NodeName"] = request.nodeName;
    }

    if (!$dara.isNull(request.serverType)) {
      query["ServerType"] = request.serverType;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCloudPhoneNodes",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCloudPhoneNodesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCloudPhoneNodesResponse({}));
  }

  /**
   * Queries the details of a cloud phone matrix.
   * 
   * @param request - DescribeCloudPhoneNodesRequest
   * @returns DescribeCloudPhoneNodesResponse
   */
  async describeCloudPhoneNodes(request: $_model.DescribeCloudPhoneNodesRequest): Promise<$_model.DescribeCloudPhoneNodesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCloudPhoneNodesWithOptions(request, runtime);
  }

  /**
   * 查询显示设置
   * 
   * @param request - DescribeDisplayConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDisplayConfigResponse
   */
  async describeDisplayConfigWithOptions(request: $_model.DescribeDisplayConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDisplayConfigResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.androidInstanceIds)) {
      body["AndroidInstanceIds"] = request.androidInstanceIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDisplayConfig",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDisplayConfigResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDisplayConfigResponse({}));
  }

  /**
   * 查询显示设置
   * 
   * @param request - DescribeDisplayConfigRequest
   * @returns DescribeDisplayConfigResponse
   */
  async describeDisplayConfig(request: $_model.DescribeDisplayConfigRequest): Promise<$_model.DescribeDisplayConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDisplayConfigWithOptions(request, runtime);
  }

  /**
   * Queries images.
   * 
   * @param request - DescribeImageListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeImageListResponse
   */
  async describeImageListWithOptions(request: $_model.DescribeImageListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeImageListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.imagePackageType)) {
      query["ImagePackageType"] = request.imagePackageType;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.imageId)) {
      body["ImageId"] = request.imageId;
    }

    if (!$dara.isNull(request.imageName)) {
      body["ImageName"] = request.imageName;
    }

    if (!$dara.isNull(request.imageType)) {
      body["ImageType"] = request.imageType;
    }

    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeImageList",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeImageListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeImageListResponse({}));
  }

  /**
   * Queries images.
   * 
   * @param request - DescribeImageListRequest
   * @returns DescribeImageListResponse
   */
  async describeImageList(request: $_model.DescribeImageListRequest): Promise<$_model.DescribeImageListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeImageListWithOptions(request, runtime);
  }

  /**
   * Queries the execution results of commands.
   * 
   * @param request - DescribeInvocationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInvocationsResponse
   */
  async describeInvocationsWithOptions(request: $_model.DescribeInvocationsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInvocationsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.invocationId)) {
      query["InvocationId"] = request.invocationId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInvocations",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInvocationsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInvocationsResponse({}));
  }

  /**
   * Queries the execution results of commands.
   * 
   * @param request - DescribeInvocationsRequest
   * @returns DescribeInvocationsResponse
   */
  async describeInvocations(request: $_model.DescribeInvocationsRequest): Promise<$_model.DescribeInvocationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInvocationsWithOptions(request, runtime);
  }

  /**
   * Queries one or more key pairs.
   * 
   * @param request - DescribeKeyPairsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeKeyPairsResponse
   */
  async describeKeyPairsWithOptions(request: $_model.DescribeKeyPairsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeKeyPairsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.keyPairIds)) {
      query["KeyPairIds"] = request.keyPairIds;
    }

    if (!$dara.isNull(request.keyPairName)) {
      query["KeyPairName"] = request.keyPairName;
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
      action: "DescribeKeyPairs",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeKeyPairsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeKeyPairsResponse({}));
  }

  /**
   * Queries one or more key pairs.
   * 
   * @param request - DescribeKeyPairsRequest
   * @returns DescribeKeyPairsResponse
   */
  async describeKeyPairs(request: $_model.DescribeKeyPairsRequest): Promise<$_model.DescribeKeyPairsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeKeyPairsWithOptions(request, runtime);
  }

  /**
   * Query available regions.
   * 
   * @param request - DescribeRegionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRegionsResponse
   */
  async describeRegionsWithOptions(request: $_model.DescribeRegionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRegionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.saleMode)) {
      query["SaleMode"] = request.saleMode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRegions",
      version: "2023-09-30",
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
   * Query available regions.
   * 
   * @param request - DescribeRegionsRequest
   * @returns DescribeRegionsResponse
   */
  async describeRegions(request: $_model.DescribeRegionsRequest): Promise<$_model.DescribeRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  /**
   * Query available specifications.
   * 
   * @param request - DescribeSpecRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSpecResponse
   */
  async describeSpecWithOptions(request: $_model.DescribeSpecRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSpecResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizRegionId)) {
      query["BizRegionId"] = request.bizRegionId;
    }

    if (!$dara.isNull(request.matrixSpec)) {
      query["MatrixSpec"] = request.matrixSpec;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.saleMode)) {
      query["SaleMode"] = request.saleMode;
    }

    if (!$dara.isNull(request.specIds)) {
      query["SpecIds"] = request.specIds;
    }

    if (!$dara.isNull(request.specStatus)) {
      query["SpecStatus"] = request.specStatus;
    }

    if (!$dara.isNull(request.specType)) {
      query["SpecType"] = request.specType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSpec",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSpecResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSpecResponse({}));
  }

  /**
   * Query available specifications.
   * 
   * @param request - DescribeSpecRequest
   * @returns DescribeSpecResponse
   */
  async describeSpec(request: $_model.DescribeSpecRequest): Promise<$_model.DescribeSpecResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSpecWithOptions(request, runtime);
  }

  /**
   * Queries tasks created for a cloud phone instance.
   * 
   * @remarks
   *   You can call the DescribeTasks operation to query the tasks created for one or more cloud phone instances.
   * *   The system currently supports various tasks, including starting, stopping, restarting, and resetting cloud phone instances; backing up and restoring data; installing apps; and executing remote commands.
   * *   You can use the Level field to specify the type of task. If Level is set to 1, it represents a batch task. If Level is set to 2, it represents an instance-level task.
   * **Example**
   * Assume you restart two cloud phone instances with the instance IDs acp-25nt4kk9whhok\\*\\*\\*\\* and acp-j2taq887orj8l\\*\\*\\*\\*, and the returned request ID is B8ED2BA9-0C6A-5643-818F-B5D60A64\\*\\*\\*\\*. If you want to check the operation outcomes of the two cloud phone instances, you can call the DescribeTasks operation. You need to set the InvokeId request parameter to B8ED2BA9-0C6A-5643-818F-B5D60A64\\*\\*\\*\\*. If you only want to check the cloud phone instance with the ID acp-25nt4kk9whhok\\*\\*\\*\\*, you must set the ParentTaskId request parameter to the ID of the batch task and the AndroidInstanceId request parameter to acp-25nt4kk9whhok\\*\\*\\*\\* when calling the DescribeTasks operation.
   * 
   * @param request - DescribeTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTasksResponse
   */
  async describeTasksWithOptions(request: $_model.DescribeTasksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTasksResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.invokeId)) {
      query["InvokeId"] = request.invokeId;
    }

    if (!$dara.isNull(request.level)) {
      query["Level"] = request.level;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.param)) {
      query["Param"] = request.param;
    }

    if (!$dara.isNull(request.parentTaskId)) {
      query["ParentTaskId"] = request.parentTaskId;
    }

    if (!$dara.isNull(request.resourceIds)) {
      query["ResourceIds"] = request.resourceIds;
    }

    if (!$dara.isNull(request.taskIds)) {
      query["TaskIds"] = request.taskIds;
    }

    if (!$dara.isNull(request.taskStatus)) {
      query["TaskStatus"] = request.taskStatus;
    }

    if (!$dara.isNull(request.taskStatuses)) {
      query["TaskStatuses"] = request.taskStatuses;
    }

    if (!$dara.isNull(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    if (!$dara.isNull(request.taskTypes)) {
      query["TaskTypes"] = request.taskTypes;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTasks",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeTasksResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTasksResponse({}));
  }

  /**
   * Queries tasks created for a cloud phone instance.
   * 
   * @remarks
   *   You can call the DescribeTasks operation to query the tasks created for one or more cloud phone instances.
   * *   The system currently supports various tasks, including starting, stopping, restarting, and resetting cloud phone instances; backing up and restoring data; installing apps; and executing remote commands.
   * *   You can use the Level field to specify the type of task. If Level is set to 1, it represents a batch task. If Level is set to 2, it represents an instance-level task.
   * **Example**
   * Assume you restart two cloud phone instances with the instance IDs acp-25nt4kk9whhok\\*\\*\\*\\* and acp-j2taq887orj8l\\*\\*\\*\\*, and the returned request ID is B8ED2BA9-0C6A-5643-818F-B5D60A64\\*\\*\\*\\*. If you want to check the operation outcomes of the two cloud phone instances, you can call the DescribeTasks operation. You need to set the InvokeId request parameter to B8ED2BA9-0C6A-5643-818F-B5D60A64\\*\\*\\*\\*. If you only want to check the cloud phone instance with the ID acp-25nt4kk9whhok\\*\\*\\*\\*, you must set the ParentTaskId request parameter to the ID of the batch task and the AndroidInstanceId request parameter to acp-25nt4kk9whhok\\*\\*\\*\\* when calling the DescribeTasks operation.
   * 
   * @param request - DescribeTasksRequest
   * @returns DescribeTasksResponse
   */
  async describeTasks(request: $_model.DescribeTasksRequest): Promise<$_model.DescribeTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTasksWithOptions(request, runtime);
  }

  /**
   * Detaches an Android Debug Bridge (ADB) key pair from one or more cloud phone instances.
   * 
   * @remarks
   *   After you detach an ADB key pair from a cloud phone instance, the ADB connection will fail. This occurs because the system can no longer authenticate using a valid ADB public key, leading to authentication errors.
   * 
   * @param request - DetachKeyPairRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetachKeyPairResponse
   */
  async detachKeyPairWithOptions(request: $_model.DetachKeyPairRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetachKeyPairResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.keyPairId)) {
      query["KeyPairId"] = request.keyPairId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetachKeyPair",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DetachKeyPairResponse>(await this.callApi(params, req, runtime), new $_model.DetachKeyPairResponse({}));
  }

  /**
   * Detaches an Android Debug Bridge (ADB) key pair from one or more cloud phone instances.
   * 
   * @remarks
   *   After you detach an ADB key pair from a cloud phone instance, the ADB connection will fail. This occurs because the system can no longer authenticate using a valid ADB public key, leading to authentication errors.
   * 
   * @param request - DetachKeyPairRequest
   * @returns DetachKeyPairResponse
   */
  async detachKeyPair(request: $_model.DetachKeyPairRequest): Promise<$_model.DetachKeyPairResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detachKeyPairWithOptions(request, runtime);
  }

  /**
   * 实例断开连接
   * 
   * @param request - DisconnectAndroidInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisconnectAndroidInstanceResponse
   */
  async disconnectAndroidInstanceWithOptions(request: $_model.DisconnectAndroidInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisconnectAndroidInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisconnectAndroidInstance",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisconnectAndroidInstanceResponse>(await this.callApi(params, req, runtime), new $_model.DisconnectAndroidInstanceResponse({}));
  }

  /**
   * 实例断开连接
   * 
   * @param request - DisconnectAndroidInstanceRequest
   * @returns DisconnectAndroidInstanceResponse
   */
  async disconnectAndroidInstance(request: $_model.DisconnectAndroidInstanceRequest): Promise<$_model.DisconnectAndroidInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disconnectAndroidInstanceWithOptions(request, runtime);
  }

  /**
   * Distributes an image.
   * 
   * @remarks
   * After you distribute an image in supported regions, the distribution cannot be canceled.
   * 
   * @param request - DistributeImageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DistributeImageResponse
   */
  async distributeImageWithOptions(request: $_model.DistributeImageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DistributeImageResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.distributeRegionList)) {
      body["DistributeRegionList"] = request.distributeRegionList;
    }

    if (!$dara.isNull(request.imageId)) {
      body["ImageId"] = request.imageId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DistributeImage",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DistributeImageResponse>(await this.callApi(params, req, runtime), new $_model.DistributeImageResponse({}));
  }

  /**
   * Distributes an image.
   * 
   * @remarks
   * After you distribute an image in supported regions, the distribution cannot be canceled.
   * 
   * @param request - DistributeImageRequest
   * @returns DistributeImageResponse
   */
  async distributeImage(request: $_model.DistributeImageRequest): Promise<$_model.DistributeImageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.distributeImageWithOptions(request, runtime);
  }

  /**
   * Downgrades an instance group. Currently, this operation allows you to only delete specific cloud phone instances from an instance group.
   * 
   * @remarks
   * This operation only allows you to scale down an instance group.
   * 
   * @param request - DowngradeAndroidInstanceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DowngradeAndroidInstanceGroupResponse
   */
  async downgradeAndroidInstanceGroupWithOptions(request: $_model.DowngradeAndroidInstanceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DowngradeAndroidInstanceGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.androidInstanceIds)) {
      query["AndroidInstanceIds"] = request.androidInstanceIds;
    }

    if (!$dara.isNull(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!$dara.isNull(request.instanceGroupId)) {
      query["InstanceGroupId"] = request.instanceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DowngradeAndroidInstanceGroup",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DowngradeAndroidInstanceGroupResponse>(await this.callApi(params, req, runtime), new $_model.DowngradeAndroidInstanceGroupResponse({}));
  }

  /**
   * Downgrades an instance group. Currently, this operation allows you to only delete specific cloud phone instances from an instance group.
   * 
   * @remarks
   * This operation only allows you to scale down an instance group.
   * 
   * @param request - DowngradeAndroidInstanceGroupRequest
   * @returns DowngradeAndroidInstanceGroupResponse
   */
  async downgradeAndroidInstanceGroup(request: $_model.DowngradeAndroidInstanceGroupRequest): Promise<$_model.DowngradeAndroidInstanceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.downgradeAndroidInstanceGroupWithOptions(request, runtime);
  }

  /**
   * 结束协同
   * 
   * @param request - EndCoordinationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EndCoordinationResponse
   */
  async endCoordinationWithOptions(request: $_model.EndCoordinationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EndCoordinationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.coordinatorUserId)) {
      query["CoordinatorUserId"] = request.coordinatorUserId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ownerUserId)) {
      query["OwnerUserId"] = request.ownerUserId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EndCoordination",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EndCoordinationResponse>(await this.callApi(params, req, runtime), new $_model.EndCoordinationResponse({}));
  }

  /**
   * 结束协同
   * 
   * @param request - EndCoordinationRequest
   * @returns EndCoordinationResponse
   */
  async endCoordination(request: $_model.EndCoordinationRequest): Promise<$_model.EndCoordinationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.endCoordinationWithOptions(request, runtime);
  }

  /**
   * 存储扩容
   * 
   * @param request - ExpandDataVolumeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExpandDataVolumeResponse
   */
  async expandDataVolumeWithOptions(request: $_model.ExpandDataVolumeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ExpandDataVolumeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!$dara.isNull(request.bizRegionId)) {
      query["BizRegionId"] = request.bizRegionId;
    }

    if (!$dara.isNull(request.nodeIds)) {
      query["NodeIds"] = request.nodeIds;
    }

    if (!$dara.isNull(request.shareDataVolume)) {
      query["ShareDataVolume"] = request.shareDataVolume;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExpandDataVolume",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExpandDataVolumeResponse>(await this.callApi(params, req, runtime), new $_model.ExpandDataVolumeResponse({}));
  }

  /**
   * 存储扩容
   * 
   * @param request - ExpandDataVolumeRequest
   * @returns ExpandDataVolumeResponse
   */
  async expandDataVolume(request: $_model.ExpandDataVolumeRequest): Promise<$_model.ExpandDataVolumeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.expandDataVolumeWithOptions(request, runtime);
  }

  /**
   * Pulls a file from a cloud phone instance and stores it in Object Storage Service (OSS).
   * 
   * @remarks
   * Currently, this operation allows you to retrieve files or folders from cloud phone instances and save them directly to OSS.
   * 
   * @param request - FetchFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FetchFileResponse
   */
  async fetchFileWithOptions(request: $_model.FetchFileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.FetchFileResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.androidInstanceIdList)) {
      query["AndroidInstanceIdList"] = request.androidInstanceIdList;
    }

    if (!$dara.isNull(request.sourceFilePath)) {
      query["SourceFilePath"] = request.sourceFilePath;
    }

    if (!$dara.isNull(request.uploadEndpoint)) {
      query["UploadEndpoint"] = request.uploadEndpoint;
    }

    if (!$dara.isNull(request.uploadType)) {
      query["UploadType"] = request.uploadType;
    }

    if (!$dara.isNull(request.uploadUrl)) {
      query["UploadUrl"] = request.uploadUrl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "FetchFile",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.FetchFileResponse>(await this.callApi(params, req, runtime), new $_model.FetchFileResponse({}));
  }

  /**
   * Pulls a file from a cloud phone instance and stores it in Object Storage Service (OSS).
   * 
   * @remarks
   * Currently, this operation allows you to retrieve files or folders from cloud phone instances and save them directly to OSS.
   * 
   * @param request - FetchFileRequest
   * @returns FetchFileResponse
   */
  async fetchFile(request: $_model.FetchFileRequest): Promise<$_model.FetchFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.fetchFileWithOptions(request, runtime);
  }

  /**
   * Generates a collaboration code for the cloud phone being accessed by using the current convenience account, and shares this code with other convenience accounts to allow them to access the same cloud phone.
   * 
   * @remarks
   * You can call this operation to generate a collaboration code for a cloud phone accessed by your current account and share this code with other convenience users to allow them to access the same cloud phone over the desktop, mobile, or web client.
   * 
   * @param request - GenerateCoordinationCodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateCoordinationCodeResponse
   */
  async generateCoordinationCodeWithOptions(request: $_model.GenerateCoordinationCodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GenerateCoordinationCodeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ownerUserId)) {
      query["OwnerUserId"] = request.ownerUserId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GenerateCoordinationCode",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GenerateCoordinationCodeResponse>(await this.callApi(params, req, runtime), new $_model.GenerateCoordinationCodeResponse({}));
  }

  /**
   * Generates a collaboration code for the cloud phone being accessed by using the current convenience account, and shares this code with other convenience accounts to allow them to access the same cloud phone.
   * 
   * @remarks
   * You can call this operation to generate a collaboration code for a cloud phone accessed by your current account and share this code with other convenience users to allow them to access the same cloud phone over the desktop, mobile, or web client.
   * 
   * @param request - GenerateCoordinationCodeRequest
   * @returns GenerateCoordinationCodeResponse
   */
  async generateCoordinationCode(request: $_model.GenerateCoordinationCodeRequest): Promise<$_model.GenerateCoordinationCodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.generateCoordinationCodeWithOptions(request, runtime);
  }

  /**
   * Imports the public key of an Android Debug Bridge (ADB) key pair.
   * 
   * @remarks
   * To avoid authorization errors that could cause ADB connection failures, you must import the public key of an ADB key pair.
   * 
   * @param request - ImportKeyPairRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ImportKeyPairResponse
   */
  async importKeyPairWithOptions(request: $_model.ImportKeyPairRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ImportKeyPairResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.keyPairName)) {
      query["KeyPairName"] = request.keyPairName;
    }

    if (!$dara.isNull(request.publicKeyBody)) {
      query["PublicKeyBody"] = request.publicKeyBody;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ImportKeyPair",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ImportKeyPairResponse>(await this.callApi(params, req, runtime), new $_model.ImportKeyPairResponse({}));
  }

  /**
   * Imports the public key of an Android Debug Bridge (ADB) key pair.
   * 
   * @remarks
   * To avoid authorization errors that could cause ADB connection failures, you must import the public key of an ADB key pair.
   * 
   * @param request - ImportKeyPairRequest
   * @returns ImportKeyPairResponse
   */
  async importKeyPair(request: $_model.ImportKeyPairRequest): Promise<$_model.ImportKeyPairResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.importKeyPairWithOptions(request, runtime);
  }

  /**
   * Installs an app on multiple cloud phone instances at the same time.
   * 
   * @remarks
   * This operation runs asynchronously. To check the operation result, visit the Task Center. To retrieve task details, call the [DescribeTasks](~~DescribeTasks~~) operation.
   * 
   * @param request - InstallAppRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InstallAppResponse
   */
  async installAppWithOptions(request: $_model.InstallAppRequest, runtime: $dara.RuntimeOptions): Promise<$_model.InstallAppResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appIdList)) {
      query["AppIdList"] = request.appIdList;
    }

    if (!$dara.isNull(request.instanceGroupIdList)) {
      query["InstanceGroupIdList"] = request.instanceGroupIdList;
    }

    if (!$dara.isNull(request.instanceIdList)) {
      query["InstanceIdList"] = request.instanceIdList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "InstallApp",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.InstallAppResponse>(await this.callApi(params, req, runtime), new $_model.InstallAppResponse({}));
  }

  /**
   * Installs an app on multiple cloud phone instances at the same time.
   * 
   * @remarks
   * This operation runs asynchronously. To check the operation result, visit the Task Center. To retrieve task details, call the [DescribeTasks](~~DescribeTasks~~) operation.
   * 
   * @param request - InstallAppRequest
   * @returns InstallAppResponse
   */
  async installApp(request: $_model.InstallAppRequest): Promise<$_model.InstallAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.installAppWithOptions(request, runtime);
  }

  /**
   * Queries policies.
   * 
   * @param request - ListPolicyGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPolicyGroupsResponse
   */
  async listPolicyGroupsWithOptions(request: $_model.ListPolicyGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListPolicyGroupsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.policyGroupIds)) {
      body["PolicyGroupIds"] = request.policyGroupIds;
    }

    if (!$dara.isNull(request.policyGroupName)) {
      body["PolicyGroupName"] = request.policyGroupName;
    }

    if (!$dara.isNull(request.policyType)) {
      body["PolicyType"] = request.policyType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPolicyGroups",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPolicyGroupsResponse>(await this.callApi(params, req, runtime), new $_model.ListPolicyGroupsResponse({}));
  }

  /**
   * Queries policies.
   * 
   * @param request - ListPolicyGroupsRequest
   * @returns ListPolicyGroupsResponse
   */
  async listPolicyGroups(request: $_model.ListPolicyGroupsRequest): Promise<$_model.ListPolicyGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPolicyGroupsWithOptions(request, runtime);
  }

  /**
   * Modifies attributes of a cloud phone instance. Currently, this operation allows you to modify only the name of a cloud phone instance.
   * 
   * @param request - ModifyAndroidInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAndroidInstanceResponse
   */
  async modifyAndroidInstanceWithOptions(request: $_model.ModifyAndroidInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyAndroidInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.androidInstanceId)) {
      query["AndroidInstanceId"] = request.androidInstanceId;
    }

    if (!$dara.isNull(request.newAndroidInstanceName)) {
      query["NewAndroidInstanceName"] = request.newAndroidInstanceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyAndroidInstance",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyAndroidInstanceResponse>(await this.callApi(params, req, runtime), new $_model.ModifyAndroidInstanceResponse({}));
  }

  /**
   * Modifies attributes of a cloud phone instance. Currently, this operation allows you to modify only the name of a cloud phone instance.
   * 
   * @param request - ModifyAndroidInstanceRequest
   * @returns ModifyAndroidInstanceResponse
   */
  async modifyAndroidInstance(request: $_model.ModifyAndroidInstanceRequest): Promise<$_model.ModifyAndroidInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyAndroidInstanceWithOptions(request, runtime);
  }

  /**
   * Modifies attributes of an instance group.
   * 
   * @param request - ModifyAndroidInstanceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAndroidInstanceGroupResponse
   */
  async modifyAndroidInstanceGroupWithOptions(request: $_model.ModifyAndroidInstanceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyAndroidInstanceGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceGroupId)) {
      query["InstanceGroupId"] = request.instanceGroupId;
    }

    if (!$dara.isNull(request.newInstanceGroupName)) {
      query["NewInstanceGroupName"] = request.newInstanceGroupName;
    }

    if (!$dara.isNull(request.policyGroupId)) {
      query["PolicyGroupId"] = request.policyGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyAndroidInstanceGroup",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyAndroidInstanceGroupResponse>(await this.callApi(params, req, runtime), new $_model.ModifyAndroidInstanceGroupResponse({}));
  }

  /**
   * Modifies attributes of an instance group.
   * 
   * @param request - ModifyAndroidInstanceGroupRequest
   * @returns ModifyAndroidInstanceGroupResponse
   */
  async modifyAndroidInstanceGroup(request: $_model.ModifyAndroidInstanceGroupRequest): Promise<$_model.ModifyAndroidInstanceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyAndroidInstanceGroupWithOptions(request, runtime);
  }

  /**
   * Modify attributes of an application.
   * 
   * @param request - ModifyAppRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAppResponse
   */
  async modifyAppWithOptions(request: $_model.ModifyAppRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyAppResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.iconUrl)) {
      query["IconUrl"] = request.iconUrl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyApp",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyAppResponse>(await this.callApi(params, req, runtime), new $_model.ModifyAppResponse({}));
  }

  /**
   * Modify attributes of an application.
   * 
   * @param request - ModifyAppRequest
   * @returns ModifyAppResponse
   */
  async modifyApp(request: $_model.ModifyAppRequest): Promise<$_model.ModifyAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyAppWithOptions(request, runtime);
  }

  /**
   * Modifies a cloud phone matrix. Currently, you can only modify the name of a cloud phone matrix.
   * 
   * @param request - ModifyCloudPhoneNodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyCloudPhoneNodeResponse
   */
  async modifyCloudPhoneNodeWithOptions(request: $_model.ModifyCloudPhoneNodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyCloudPhoneNodeResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyCloudPhoneNode",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyCloudPhoneNodeResponse>(await this.callApi(params, req, runtime), new $_model.ModifyCloudPhoneNodeResponse({}));
  }

  /**
   * Modifies a cloud phone matrix. Currently, you can only modify the name of a cloud phone matrix.
   * 
   * @param request - ModifyCloudPhoneNodeRequest
   * @returns ModifyCloudPhoneNodeResponse
   */
  async modifyCloudPhoneNode(request: $_model.ModifyCloudPhoneNodeRequest): Promise<$_model.ModifyCloudPhoneNodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyCloudPhoneNodeWithOptions(request, runtime);
  }

  /**
   * 修改显示设置
   * 
   * @param tmpReq - ModifyDisplayConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDisplayConfigResponse
   */
  async modifyDisplayConfigWithOptions(tmpReq: $_model.ModifyDisplayConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDisplayConfigResponse> {
    tmpReq.validate();
    let request = new $_model.ModifyDisplayConfigShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.displayConfig)) {
      request.displayConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.displayConfig, "DisplayConfig", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.androidInstanceIds)) {
      body["AndroidInstanceIds"] = request.androidInstanceIds;
    }

    if (!$dara.isNull(request.displayConfigShrink)) {
      body["DisplayConfig"] = request.displayConfigShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDisplayConfig",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDisplayConfigResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDisplayConfigResponse({}));
  }

  /**
   * 修改显示设置
   * 
   * @param request - ModifyDisplayConfigRequest
   * @returns ModifyDisplayConfigResponse
   */
  async modifyDisplayConfig(request: $_model.ModifyDisplayConfigRequest): Promise<$_model.ModifyDisplayConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDisplayConfigWithOptions(request, runtime);
  }

  /**
   * Modifies the billing method. Currently, this operation only allows you to change the billing method from pay-as-you-go to subscription.
   * 
   * @param request - ModifyInstanceChargeTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyInstanceChargeTypeResponse
   */
  async modifyInstanceChargeTypeWithOptions(request: $_model.ModifyInstanceChargeTypeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyInstanceChargeTypeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!$dara.isNull(request.autoRenew)) {
      query["AutoRenew"] = request.autoRenew;
    }

    if (!$dara.isNull(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
    }

    if (!$dara.isNull(request.instanceGroupIds)) {
      query["InstanceGroupIds"] = request.instanceGroupIds;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.periodUnit)) {
      query["PeriodUnit"] = request.periodUnit;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyInstanceChargeType",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyInstanceChargeTypeResponse>(await this.callApi(params, req, runtime), new $_model.ModifyInstanceChargeTypeResponse({}));
  }

  /**
   * Modifies the billing method. Currently, this operation only allows you to change the billing method from pay-as-you-go to subscription.
   * 
   * @param request - ModifyInstanceChargeTypeRequest
   * @returns ModifyInstanceChargeTypeResponse
   */
  async modifyInstanceChargeType(request: $_model.ModifyInstanceChargeTypeRequest): Promise<$_model.ModifyInstanceChargeTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyInstanceChargeTypeWithOptions(request, runtime);
  }

  /**
   * Modifies Android Debug Bridge (ADB) key pairs.
   * 
   * @param request - ModifyKeyPairNameRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyKeyPairNameResponse
   */
  async modifyKeyPairNameWithOptions(request: $_model.ModifyKeyPairNameRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyKeyPairNameResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.keyPairId)) {
      query["KeyPairId"] = request.keyPairId;
    }

    if (!$dara.isNull(request.newKeyPairName)) {
      query["NewKeyPairName"] = request.newKeyPairName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyKeyPairName",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyKeyPairNameResponse>(await this.callApi(params, req, runtime), new $_model.ModifyKeyPairNameResponse({}));
  }

  /**
   * Modifies Android Debug Bridge (ADB) key pairs.
   * 
   * @param request - ModifyKeyPairNameRequest
   * @returns ModifyKeyPairNameResponse
   */
  async modifyKeyPairName(request: $_model.ModifyKeyPairNameRequest): Promise<$_model.ModifyKeyPairNameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyKeyPairNameWithOptions(request, runtime);
  }

  /**
   * Modifies a policy.
   * 
   * @param tmpReq - ModifyPolicyGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyPolicyGroupResponse
   */
  async modifyPolicyGroupWithOptions(tmpReq: $_model.ModifyPolicyGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyPolicyGroupResponse> {
    tmpReq.validate();
    let request = new $_model.ModifyPolicyGroupShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.netRedirectPolicy)) {
      request.netRedirectPolicyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.netRedirectPolicy, "NetRedirectPolicy", "json");
    }

    if (!$dara.isNull(tmpReq.watermark)) {
      request.watermarkShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.watermark, "Watermark", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.cameraRedirect)) {
      body["CameraRedirect"] = request.cameraRedirect;
    }

    if (!$dara.isNull(request.clipboard)) {
      body["Clipboard"] = request.clipboard;
    }

    if (!$dara.isNull(request.html5FileTransfer)) {
      body["Html5FileTransfer"] = request.html5FileTransfer;
    }

    if (!$dara.isNull(request.localDrive)) {
      body["LocalDrive"] = request.localDrive;
    }

    if (!$dara.isNull(request.lockResolution)) {
      body["LockResolution"] = request.lockResolution;
    }

    if (!$dara.isNull(request.netRedirectPolicyShrink)) {
      body["NetRedirectPolicy"] = request.netRedirectPolicyShrink;
    }

    if (!$dara.isNull(request.policyGroupId)) {
      body["PolicyGroupId"] = request.policyGroupId;
    }

    if (!$dara.isNull(request.policyGroupName)) {
      body["PolicyGroupName"] = request.policyGroupName;
    }

    if (!$dara.isNull(request.resolutionHeight)) {
      body["ResolutionHeight"] = request.resolutionHeight;
    }

    if (!$dara.isNull(request.resolutionWidth)) {
      body["ResolutionWidth"] = request.resolutionWidth;
    }

    if (!$dara.isNull(request.watermarkShrink)) {
      body["Watermark"] = request.watermarkShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyPolicyGroup",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyPolicyGroupResponse>(await this.callApi(params, req, runtime), new $_model.ModifyPolicyGroupResponse({}));
  }

  /**
   * Modifies a policy.
   * 
   * @param request - ModifyPolicyGroupRequest
   * @returns ModifyPolicyGroupResponse
   */
  async modifyPolicyGroup(request: $_model.ModifyPolicyGroupRequest): Promise<$_model.ModifyPolicyGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyPolicyGroupWithOptions(request, runtime);
  }

  /**
   * Operates apps in a cloud phone, such as opening, closing, and reopening apps.
   * 
   * @remarks
   * This operation runs asynchronously. To check the operation result, visit the Task Center. To retrieve task details, call the [DescribeTasks](~~DescribeTasks~~) operation.
   * 
   * @param request - OperateAppRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OperateAppResponse
   */
  async operateAppWithOptions(request: $_model.OperateAppRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OperateAppResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.instanceIdList)) {
      query["InstanceIdList"] = request.instanceIdList;
    }

    if (!$dara.isNull(request.operateType)) {
      query["OperateType"] = request.operateType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "OperateApp",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OperateAppResponse>(await this.callApi(params, req, runtime), new $_model.OperateAppResponse({}));
  }

  /**
   * Operates apps in a cloud phone, such as opening, closing, and reopening apps.
   * 
   * @remarks
   * This operation runs asynchronously. To check the operation result, visit the Task Center. To retrieve task details, call the [DescribeTasks](~~DescribeTasks~~) operation.
   * 
   * @param request - OperateAppRequest
   * @returns OperateAppResponse
   */
  async operateApp(request: $_model.OperateAppRequest): Promise<$_model.OperateAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.operateAppWithOptions(request, runtime);
  }

  /**
   * Restarts one or more cloud phone instances.
   * 
   * @remarks
   * Before you restart a cloud phone instance, make sure it is in one of the following states: **Available, Abnormal, Backup failure, and Restoration failure**.
   * 
   * @param request - RebootAndroidInstancesInGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RebootAndroidInstancesInGroupResponse
   */
  async rebootAndroidInstancesInGroupWithOptions(request: $_model.RebootAndroidInstancesInGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RebootAndroidInstancesInGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.androidInstanceIds)) {
      query["AndroidInstanceIds"] = request.androidInstanceIds;
    }

    if (!$dara.isNull(request.forceStop)) {
      query["ForceStop"] = request.forceStop;
    }

    if (!$dara.isNull(request.saleMode)) {
      query["SaleMode"] = request.saleMode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RebootAndroidInstancesInGroup",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RebootAndroidInstancesInGroupResponse>(await this.callApi(params, req, runtime), new $_model.RebootAndroidInstancesInGroupResponse({}));
  }

  /**
   * Restarts one or more cloud phone instances.
   * 
   * @remarks
   * Before you restart a cloud phone instance, make sure it is in one of the following states: **Available, Abnormal, Backup failure, and Restoration failure**.
   * 
   * @param request - RebootAndroidInstancesInGroupRequest
   * @returns RebootAndroidInstancesInGroupResponse
   */
  async rebootAndroidInstancesInGroup(request: $_model.RebootAndroidInstancesInGroupRequest): Promise<$_model.RebootAndroidInstancesInGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.rebootAndroidInstancesInGroupWithOptions(request, runtime);
  }

  /**
   * Restores backup files.
   * 
   * @remarks
   * Currently, this operation allows you to restore only backup files generated by cloud phones that are stored in Object Storage Service (OSS) buckets.
   * 
   * @param request - RecoveryFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecoveryFileResponse
   */
  async recoveryFileWithOptions(request: $_model.RecoveryFileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RecoveryFileResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.androidInstanceIdList)) {
      query["AndroidInstanceIdList"] = request.androidInstanceIdList;
    }

    if (!$dara.isNull(request.backupAll)) {
      query["BackupAll"] = request.backupAll;
    }

    if (!$dara.isNull(request.backupFileId)) {
      query["BackupFileId"] = request.backupFileId;
    }

    if (!$dara.isNull(request.backupFilePath)) {
      query["BackupFilePath"] = request.backupFilePath;
    }

    if (!$dara.isNull(request.uploadEndpoint)) {
      query["UploadEndpoint"] = request.uploadEndpoint;
    }

    if (!$dara.isNull(request.uploadType)) {
      query["UploadType"] = request.uploadType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RecoveryFile",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RecoveryFileResponse>(await this.callApi(params, req, runtime), new $_model.RecoveryFileResponse({}));
  }

  /**
   * Restores backup files.
   * 
   * @remarks
   * Currently, this operation allows you to restore only backup files generated by cloud phones that are stored in Object Storage Service (OSS) buckets.
   * 
   * @param request - RecoveryFileRequest
   * @returns RecoveryFileResponse
   */
  async recoveryFile(request: $_model.RecoveryFileRequest): Promise<$_model.RecoveryFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recoveryFileWithOptions(request, runtime);
  }

  /**
   * Renews instance groups.
   * 
   * @param request - RenewAndroidInstanceGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RenewAndroidInstanceGroupsResponse
   */
  async renewAndroidInstanceGroupsWithOptions(request: $_model.RenewAndroidInstanceGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RenewAndroidInstanceGroupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!$dara.isNull(request.instanceGroupIds)) {
      query["InstanceGroupIds"] = request.instanceGroupIds;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.periodUnit)) {
      query["PeriodUnit"] = request.periodUnit;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RenewAndroidInstanceGroups",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RenewAndroidInstanceGroupsResponse>(await this.callApi(params, req, runtime), new $_model.RenewAndroidInstanceGroupsResponse({}));
  }

  /**
   * Renews instance groups.
   * 
   * @param request - RenewAndroidInstanceGroupsRequest
   * @returns RenewAndroidInstanceGroupsResponse
   */
  async renewAndroidInstanceGroups(request: $_model.RenewAndroidInstanceGroupsRequest): Promise<$_model.RenewAndroidInstanceGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.renewAndroidInstanceGroupsWithOptions(request, runtime);
  }

  /**
   * Renews a cloud mobile matrix.
   * 
   * @param request - RenewCloudPhoneNodesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RenewCloudPhoneNodesResponse
   */
  async renewCloudPhoneNodesWithOptions(request: $_model.RenewCloudPhoneNodesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RenewCloudPhoneNodesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.autoRenew)) {
      body["AutoRenew"] = request.autoRenew;
    }

    if (!$dara.isNull(request.nodeIds)) {
      body["NodeIds"] = request.nodeIds;
    }

    if (!$dara.isNull(request.period)) {
      body["Period"] = request.period;
    }

    if (!$dara.isNull(request.periodUnit)) {
      body["PeriodUnit"] = request.periodUnit;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RenewCloudPhoneNodes",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RenewCloudPhoneNodesResponse>(await this.callApi(params, req, runtime), new $_model.RenewCloudPhoneNodesResponse({}));
  }

  /**
   * Renews a cloud mobile matrix.
   * 
   * @param request - RenewCloudPhoneNodesRequest
   * @returns RenewCloudPhoneNodesResponse
   */
  async renewCloudPhoneNodes(request: $_model.RenewCloudPhoneNodesRequest): Promise<$_model.RenewCloudPhoneNodesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.renewCloudPhoneNodesWithOptions(request, runtime);
  }

  /**
   * Resets one or more cloud phone instances.
   * 
   * @remarks
   * Before you reset a cloud phone instance, make sure it is in one of the following states: **Available, Stopped, Abnormal, Backup failure, and Restoration failure**.
   * 
   * @param request - ResetAndroidInstancesInGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResetAndroidInstancesInGroupResponse
   */
  async resetAndroidInstancesInGroupWithOptions(request: $_model.ResetAndroidInstancesInGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ResetAndroidInstancesInGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.androidInstanceIds)) {
      query["AndroidInstanceIds"] = request.androidInstanceIds;
    }

    if (!$dara.isNull(request.saleMode)) {
      query["SaleMode"] = request.saleMode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResetAndroidInstancesInGroup",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResetAndroidInstancesInGroupResponse>(await this.callApi(params, req, runtime), new $_model.ResetAndroidInstancesInGroupResponse({}));
  }

  /**
   * Resets one or more cloud phone instances.
   * 
   * @remarks
   * Before you reset a cloud phone instance, make sure it is in one of the following states: **Available, Stopped, Abnormal, Backup failure, and Restoration failure**.
   * 
   * @param request - ResetAndroidInstancesInGroupRequest
   * @returns ResetAndroidInstancesInGroupResponse
   */
  async resetAndroidInstancesInGroup(request: $_model.ResetAndroidInstancesInGroupRequest): Promise<$_model.ResetAndroidInstancesInGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resetAndroidInstancesInGroupWithOptions(request, runtime);
  }

  /**
   * Executes a command on a cloud phone instance.
   * 
   * @param request - RunCommandRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunCommandResponse
   */
  async runCommandWithOptions(request: $_model.RunCommandRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RunCommandResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.commandContent)) {
      query["CommandContent"] = request.commandContent;
    }

    if (!$dara.isNull(request.contentEncoding)) {
      query["ContentEncoding"] = request.contentEncoding;
    }

    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.timeout)) {
      query["Timeout"] = request.timeout;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunCommand",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RunCommandResponse>(await this.callApi(params, req, runtime), new $_model.RunCommandResponse({}));
  }

  /**
   * Executes a command on a cloud phone instance.
   * 
   * @param request - RunCommandRequest
   * @returns RunCommandResponse
   */
  async runCommand(request: $_model.RunCommandRequest): Promise<$_model.RunCommandResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.runCommandWithOptions(request, runtime);
  }

  /**
   * Pushes files from Object Storage Service (OSS) buckets to cloud phone instances.
   * 
   * @remarks
   * Currently, this operation allows you to only push files or folders from OSS buckets to cloud phone instances.
   * 
   * @param request - SendFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SendFileResponse
   */
  async sendFileWithOptions(request: $_model.SendFileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SendFileResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.androidInstanceIdList)) {
      query["AndroidInstanceIdList"] = request.androidInstanceIdList;
    }

    if (!$dara.isNull(request.sourceFilePath)) {
      query["SourceFilePath"] = request.sourceFilePath;
    }

    if (!$dara.isNull(request.targetFileName)) {
      query["TargetFileName"] = request.targetFileName;
    }

    if (!$dara.isNull(request.uploadEndpoint)) {
      query["UploadEndpoint"] = request.uploadEndpoint;
    }

    if (!$dara.isNull(request.uploadType)) {
      query["UploadType"] = request.uploadType;
    }

    if (!$dara.isNull(request.uploadUrl)) {
      query["UploadUrl"] = request.uploadUrl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SendFile",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SendFileResponse>(await this.callApi(params, req, runtime), new $_model.SendFileResponse({}));
  }

  /**
   * Pushes files from Object Storage Service (OSS) buckets to cloud phone instances.
   * 
   * @remarks
   * Currently, this operation allows you to only push files or folders from OSS buckets to cloud phone instances.
   * 
   * @param request - SendFileRequest
   * @returns SendFileResponse
   */
  async sendFile(request: $_model.SendFileRequest): Promise<$_model.SendFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.sendFileWithOptions(request, runtime);
  }

  /**
   * Sets the authentication status for cloud phone instances. If you enable Android Debug Bridge (ADB) authentication for cloud phone instances, the system will verify the validity of the ADB key pairs provided by end users when they connect to the instances over ADB. To ensure successful authentication and a proper connection, we recommend that you attach ADB key pairs to cloud phone instances. If you disable ADB authentication for cloud phone instances, the system will no longer verify the validity of any ADB key pairs. As a result, end users can connect to the cloud phone instances over ADB without authentication, provided the network connection is functioning properly.
   * 
   * @remarks
   * Before you call this operation, make sure that the desired cloud phone instance is in the Running state.
   * 
   * @param request - SetAdbSecureRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetAdbSecureResponse
   */
  async setAdbSecureWithOptions(request: $_model.SetAdbSecureRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetAdbSecureResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetAdbSecure",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetAdbSecureResponse>(await this.callApi(params, req, runtime), new $_model.SetAdbSecureResponse({}));
  }

  /**
   * Sets the authentication status for cloud phone instances. If you enable Android Debug Bridge (ADB) authentication for cloud phone instances, the system will verify the validity of the ADB key pairs provided by end users when they connect to the instances over ADB. To ensure successful authentication and a proper connection, we recommend that you attach ADB key pairs to cloud phone instances. If you disable ADB authentication for cloud phone instances, the system will no longer verify the validity of any ADB key pairs. As a result, end users can connect to the cloud phone instances over ADB without authentication, provided the network connection is functioning properly.
   * 
   * @remarks
   * Before you call this operation, make sure that the desired cloud phone instance is in the Running state.
   * 
   * @param request - SetAdbSecureRequest
   * @returns SetAdbSecureResponse
   */
  async setAdbSecure(request: $_model.SetAdbSecureRequest): Promise<$_model.SetAdbSecureResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setAdbSecureWithOptions(request, runtime);
  }

  /**
   * Start instances.
   * 
   * @remarks
   * Only supports starting when the instance is in the **Stopped, Backup Failed, or Recovery Failed** state.
   * 
   * @param request - StartAndroidInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartAndroidInstanceResponse
   */
  async startAndroidInstanceWithOptions(request: $_model.StartAndroidInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartAndroidInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.androidInstanceIds)) {
      query["AndroidInstanceIds"] = request.androidInstanceIds;
    }

    if (!$dara.isNull(request.saleMode)) {
      query["SaleMode"] = request.saleMode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartAndroidInstance",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartAndroidInstanceResponse>(await this.callApi(params, req, runtime), new $_model.StartAndroidInstanceResponse({}));
  }

  /**
   * Start instances.
   * 
   * @remarks
   * Only supports starting when the instance is in the **Stopped, Backup Failed, or Recovery Failed** state.
   * 
   * @param request - StartAndroidInstanceRequest
   * @returns StartAndroidInstanceResponse
   */
  async startAndroidInstance(request: $_model.StartAndroidInstanceRequest): Promise<$_model.StartAndroidInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startAndroidInstanceWithOptions(request, runtime);
  }

  /**
   * Stops a cloud phone instance.
   * 
   * @remarks
   * Before you stop a cloud phone instance, make sure it is in one of the following states: **Available, Backup failure, and Restoration failure**.
   * 
   * @param request - StopAndroidInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopAndroidInstanceResponse
   */
  async stopAndroidInstanceWithOptions(request: $_model.StopAndroidInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopAndroidInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.androidInstanceIds)) {
      query["AndroidInstanceIds"] = request.androidInstanceIds;
    }

    if (!$dara.isNull(request.forceStop)) {
      query["ForceStop"] = request.forceStop;
    }

    if (!$dara.isNull(request.saleMode)) {
      query["SaleMode"] = request.saleMode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopAndroidInstance",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopAndroidInstanceResponse>(await this.callApi(params, req, runtime), new $_model.StopAndroidInstanceResponse({}));
  }

  /**
   * Stops a cloud phone instance.
   * 
   * @remarks
   * Before you stop a cloud phone instance, make sure it is in one of the following states: **Available, Backup failure, and Restoration failure**.
   * 
   * @param request - StopAndroidInstanceRequest
   * @returns StopAndroidInstanceResponse
   */
  async stopAndroidInstance(request: $_model.StopAndroidInstanceRequest): Promise<$_model.StopAndroidInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopAndroidInstanceWithOptions(request, runtime);
  }

  /**
   * Uninstalls an app from multiple cloud phone instances.
   * 
   * @remarks
   * This operation runs asynchronously. To check the operation result, you can visit the Task Center. To retrieve task details, call the [DescribeTasks](~~DescribeTasks~~) operation.
   * 
   * @param request - UninstallAppRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UninstallAppResponse
   */
  async uninstallAppWithOptions(request: $_model.UninstallAppRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UninstallAppResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appIdList)) {
      query["AppIdList"] = request.appIdList;
    }

    if (!$dara.isNull(request.instanceGroupIdList)) {
      query["InstanceGroupIdList"] = request.instanceGroupIdList;
    }

    if (!$dara.isNull(request.instanceIdList)) {
      query["InstanceIdList"] = request.instanceIdList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UninstallApp",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UninstallAppResponse>(await this.callApi(params, req, runtime), new $_model.UninstallAppResponse({}));
  }

  /**
   * Uninstalls an app from multiple cloud phone instances.
   * 
   * @remarks
   * This operation runs asynchronously. To check the operation result, you can visit the Task Center. To retrieve task details, call the [DescribeTasks](~~DescribeTasks~~) operation.
   * 
   * @param request - UninstallAppRequest
   * @returns UninstallAppResponse
   */
  async uninstallApp(request: $_model.UninstallAppRequest): Promise<$_model.UninstallAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.uninstallAppWithOptions(request, runtime);
  }

  /**
   * Updates the name of a custom image.
   * 
   * @param request - UpdateCustomImageNameRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateCustomImageNameResponse
   */
  async updateCustomImageNameWithOptions(request: $_model.UpdateCustomImageNameRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateCustomImageNameResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.imageId)) {
      body["ImageId"] = request.imageId;
    }

    if (!$dara.isNull(request.imageName)) {
      body["ImageName"] = request.imageName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateCustomImageName",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateCustomImageNameResponse>(await this.callApi(params, req, runtime), new $_model.UpdateCustomImageNameResponse({}));
  }

  /**
   * Updates the name of a custom image.
   * 
   * @param request - UpdateCustomImageNameRequest
   * @returns UpdateCustomImageNameResponse
   */
  async updateCustomImageName(request: $_model.UpdateCustomImageNameRequest): Promise<$_model.UpdateCustomImageNameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateCustomImageNameWithOptions(request, runtime);
  }

  /**
   * Changes the image of an instance group.
   * 
   * @remarks
   * Before you call this operation, make sure the image is in the Available state and the region of the image is included in the region list of the desired instance group. In addition, the instance group itself is available.
   * 
   * @param request - UpdateInstanceGroupImageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateInstanceGroupImageResponse
   */
  async updateInstanceGroupImageWithOptions(request: $_model.UpdateInstanceGroupImageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateInstanceGroupImageResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.imageId)) {
      body["ImageId"] = request.imageId;
    }

    if (!$dara.isNull(request.instanceGroupIds)) {
      body["InstanceGroupIds"] = request.instanceGroupIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateInstanceGroupImage",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateInstanceGroupImageResponse>(await this.callApi(params, req, runtime), new $_model.UpdateInstanceGroupImageResponse({}));
  }

  /**
   * Changes the image of an instance group.
   * 
   * @remarks
   * Before you call this operation, make sure the image is in the Available state and the region of the image is included in the region list of the desired instance group. In addition, the instance group itself is available.
   * 
   * @param request - UpdateInstanceGroupImageRequest
   * @returns UpdateInstanceGroupImageResponse
   */
  async updateInstanceGroupImage(request: $_model.UpdateInstanceGroupImageRequest): Promise<$_model.UpdateInstanceGroupImageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateInstanceGroupImageWithOptions(request, runtime);
  }

  /**
   * 更新实例镜像
   * 
   * @param request - UpdateInstanceImageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateInstanceImageResponse
   */
  async updateInstanceImageWithOptions(request: $_model.UpdateInstanceImageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateInstanceImageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!$dara.isNull(request.instanceIdList)) {
      query["InstanceIdList"] = request.instanceIdList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateInstanceImage",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateInstanceImageResponse>(await this.callApi(params, req, runtime), new $_model.UpdateInstanceImageResponse({}));
  }

  /**
   * 更新实例镜像
   * 
   * @param request - UpdateInstanceImageRequest
   * @returns UpdateInstanceImageResponse
   */
  async updateInstanceImage(request: $_model.UpdateInstanceImageRequest): Promise<$_model.UpdateInstanceImageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateInstanceImageWithOptions(request, runtime);
  }

  /**
   * Upgrades an instance group. Currently, this operation allows you to only increase the number of instances in an instance group.
   * 
   * @remarks
   * Currently, this operation allows you to only increase the size of an instance group.
   * 
   * @param request - UpgradeAndroidInstanceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpgradeAndroidInstanceGroupResponse
   */
  async upgradeAndroidInstanceGroupWithOptions(request: $_model.UpgradeAndroidInstanceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpgradeAndroidInstanceGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!$dara.isNull(request.increaseNumberOfInstance)) {
      query["IncreaseNumberOfInstance"] = request.increaseNumberOfInstance;
    }

    if (!$dara.isNull(request.instanceGroupId)) {
      query["InstanceGroupId"] = request.instanceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpgradeAndroidInstanceGroup",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpgradeAndroidInstanceGroupResponse>(await this.callApi(params, req, runtime), new $_model.UpgradeAndroidInstanceGroupResponse({}));
  }

  /**
   * Upgrades an instance group. Currently, this operation allows you to only increase the number of instances in an instance group.
   * 
   * @remarks
   * Currently, this operation allows you to only increase the size of an instance group.
   * 
   * @param request - UpgradeAndroidInstanceGroupRequest
   * @returns UpgradeAndroidInstanceGroupResponse
   */
  async upgradeAndroidInstanceGroup(request: $_model.UpgradeAndroidInstanceGroupRequest): Promise<$_model.UpgradeAndroidInstanceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.upgradeAndroidInstanceGroupWithOptions(request, runtime);
  }

}
