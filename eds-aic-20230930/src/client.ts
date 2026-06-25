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
      'cn-shanghai': "eds-aic.cn-shanghai.aliyuncs.com",
      'ap-southeast-1': "eds-aic.ap-southeast-1.aliyuncs.com",
    };
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
   * - You can attach to an ADB key pair only to cloud phone instances in the Running state.
   * - After you attach an ADB key pair, make sure the private key of the ADB key pair is copied to the \\~/.android directory (macOS or Linux operating systems) or the C:\\Users\\Username.android directory (Windows operating systems). In addition, you must run the adb kill-server command to restart the ADB process to ensure correct ADB connection. Otherwise, ADB connection may fail due to authentication exceptions.
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
   * - You can attach to an ADB key pair only to cloud phone instances in the Running state.
   * - After you attach an ADB key pair, make sure the private key of the ADB key pair is copied to the \\~/.android directory (macOS or Linux operating systems) or the C:\\Users\\Username.android directory (Windows operating systems). In addition, you must run the adb kill-server command to restart the ADB process to ensure correct ADB connection. Otherwise, ADB connection may fail due to authentication exceptions.
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
   * Creates a full backup of a Cloud Phone instance. The backup includes installed applications and properties.
   * 
   * @remarks
   * 1. To ensure that the backup is successful, shut down the instance before you start the data backup. The operation may fail if the cloud phone instance is used during the backup process.
   * 2. You should test the backup file to ensure that you can restore the instance from it. After the restoration is complete, verify that your data is complete and that all features function correctly. Do not delete the original backup file or reset the source instance until this verification is complete. Otherwise, you may lose your data.
   * 3. You cannot back up and restore data between different image versions, between custom images and public images, or across different architectures, such as cpm.gx7.10xlarge and cpm.gx8.16xlarge.
   * 
   * @param request - BackupAndroidInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BackupAndroidInstanceResponse
   */
  async backupAndroidInstanceWithOptions(request: $_model.BackupAndroidInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BackupAndroidInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.androidInstanceIdList)) {
      query["AndroidInstanceIdList"] = request.androidInstanceIdList;
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

    if (!$dara.isNull(request.uploadEndpoint)) {
      query["UploadEndpoint"] = request.uploadEndpoint;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BackupAndroidInstance",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BackupAndroidInstanceResponse>(await this.callApi(params, req, runtime), new $_model.BackupAndroidInstanceResponse({}));
  }

  /**
   * Creates a full backup of a Cloud Phone instance. The backup includes installed applications and properties.
   * 
   * @remarks
   * 1. To ensure that the backup is successful, shut down the instance before you start the data backup. The operation may fail if the cloud phone instance is used during the backup process.
   * 2. You should test the backup file to ensure that you can restore the instance from it. After the restoration is complete, verify that your data is complete and that all features function correctly. Do not delete the original backup file or reset the source instance until this verification is complete. Otherwise, you may lose your data.
   * 3. You cannot back up and restore data between different image versions, between custom images and public images, or across different architectures, such as cpm.gx7.10xlarge and cpm.gx8.16xlarge.
   * 
   * @param request - BackupAndroidInstanceRequest
   * @returns BackupAndroidInstanceResponse
   */
  async backupAndroidInstance(request: $_model.BackupAndroidInstanceRequest): Promise<$_model.BackupAndroidInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.backupAndroidInstanceWithOptions(request, runtime);
  }

  /**
   * Backs up specified applications on a cloud phone instance. The backup includes the application and its cache.
   * 
   * @remarks
   * 1. Shut down the cloud phone instance before you back up data to ensure that the operation succeeds. Using the cloud phone during a backup may cause the operation to fail.
   * 2. Ensure that the backup file can be used to restore the instance successfully. After you restore from a backup, verify that your data is complete and that all features are working correctly. Do not delete the original backup file or reset the source instance until you complete this verification. Failure to do so may result in data loss.
   * 3. Backup and restore operations are not suppported across different image versions, between custom images and public images, or across different architectures, such as cpm.gx7.10xlarge and cpm.gx8.16xlarge.
   * 
   * @param request - BackupAppRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BackupAppResponse
   */
  async backupAppWithOptions(request: $_model.BackupAppRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BackupAppResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.androidInstanceIdList)) {
      query["AndroidInstanceIdList"] = request.androidInstanceIdList;
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

    if (!$dara.isNull(request.uploadEndpoint)) {
      query["UploadEndpoint"] = request.uploadEndpoint;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BackupApp",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BackupAppResponse>(await this.callApi(params, req, runtime), new $_model.BackupAppResponse({}));
  }

  /**
   * Backs up specified applications on a cloud phone instance. The backup includes the application and its cache.
   * 
   * @remarks
   * 1. Shut down the cloud phone instance before you back up data to ensure that the operation succeeds. Using the cloud phone during a backup may cause the operation to fail.
   * 2. Ensure that the backup file can be used to restore the instance successfully. After you restore from a backup, verify that your data is complete and that all features are working correctly. Do not delete the original backup file or reset the source instance until you complete this verification. Failure to do so may result in data loss.
   * 3. Backup and restore operations are not suppported across different image versions, between custom images and public images, or across different architectures, such as cpm.gx7.10xlarge and cpm.gx8.16xlarge.
   * 
   * @param request - BackupAppRequest
   * @returns BackupAppResponse
   */
  async backupApp(request: $_model.BackupAppRequest): Promise<$_model.BackupAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.backupAppWithOptions(request, runtime);
  }

  /**
   * Generates a backup file and uploads it to remote storage. You can use this operation for regular data backups. You can also back up files from one instance and restore them to multiple instances, a process similar to data replication or migration.
   * 
   * @remarks
   * You can save backup files generated by cloud phones only to Object Storage Service (OSS).
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

    if (!$dara.isNull(request.excludeSourceFilePathList)) {
      query["ExcludeSourceFilePathList"] = request.excludeSourceFilePathList;
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
   * Generates a backup file and uploads it to remote storage. You can use this operation for regular data backups. You can also back up files from one instance and restore them to multiple instances, a process similar to data replication or migration.
   * 
   * @remarks
   * You can save backup files generated by cloud phones only to Object Storage Service (OSS).
   * 
   * @param request - BackupFileRequest
   * @returns BackupFileResponse
   */
  async backupFile(request: $_model.BackupFileRequest): Promise<$_model.BackupFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.backupFileWithOptions(request, runtime);
  }

  /**
   * Retrieves connection tickets in batch. This operation generates connection tickets asynchronously. In most cases, the tickets are returned directly in the response of the first call. However, in some situations, the initial response will contain a `TaskId`. You must then poll this endpoint with the `TaskId` until the generation is complete and the tickets are returned.
   * 
   * @remarks
   * <props="china">
   * 本接口的作用因云手机产品版本和实例串流模式而异：
   * - 云手机实例版或云手机矩阵版（抢占模式）：只能通过同一个`EnduserId`获取`Ticket`。
   * - 云手机矩阵版（协同模式）：可通过传入不同的`EnduserId`来为不同的用户（至多 5 个）同时获取`Ticket`并串流。每次只能传入 1 个`EnduserId`。
   * > 实例串流模式可通过 [ModifyCloudPhoneNode](https://help.aliyun.com/document_detail/2878539.html) 接口的`StreamMode`参数来定义。
   * 
   * @param request - BatchGetAcpConnectionTicketRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchGetAcpConnectionTicketResponse
   */
  async batchGetAcpConnectionTicketWithOptions(request: $_model.BatchGetAcpConnectionTicketRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchGetAcpConnectionTicketResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.connectionMode)) {
      query["ConnectionMode"] = request.connectionMode;
    }

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

    if (!$dara.isNull(request.ports)) {
      query["Ports"] = request.ports;
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
   * Retrieves connection tickets in batch. This operation generates connection tickets asynchronously. In most cases, the tickets are returned directly in the response of the first call. However, in some situations, the initial response will contain a `TaskId`. You must then poll this endpoint with the `TaskId` until the generation is complete and the tickets are returned.
   * 
   * @remarks
   * <props="china">
   * 本接口的作用因云手机产品版本和实例串流模式而异：
   * - 云手机实例版或云手机矩阵版（抢占模式）：只能通过同一个`EnduserId`获取`Ticket`。
   * - 云手机矩阵版（协同模式）：可通过传入不同的`EnduserId`来为不同的用户（至多 5 个）同时获取`Ticket`并串流。每次只能传入 1 个`EnduserId`。
   * > 实例串流模式可通过 [ModifyCloudPhoneNode](https://help.aliyun.com/document_detail/2878539.html) 接口的`StreamMode`参数来定义。
   * 
   * @param request - BatchGetAcpConnectionTicketRequest
   * @returns BatchGetAcpConnectionTicketResponse
   */
  async batchGetAcpConnectionTicket(request: $_model.BatchGetAcpConnectionTicketRequest): Promise<$_model.BatchGetAcpConnectionTicketResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchGetAcpConnectionTicketWithOptions(request, runtime);
  }

  /**
   * Cancels running agent tasks on a mobile node.
   * 
   * @param request - CancelAgentTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelAgentTaskResponse
   */
  async cancelAgentTaskWithOptions(request: $_model.CancelAgentTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CancelAgentTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.taskIds)) {
      query["TaskIds"] = request.taskIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelAgentTask",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelAgentTaskResponse>(await this.callApi(params, req, runtime), new $_model.CancelAgentTaskResponse({}));
  }

  /**
   * Cancels running agent tasks on a mobile node.
   * 
   * @param request - CancelAgentTaskRequest
   * @returns CancelAgentTaskResponse
   */
  async cancelAgentTask(request: $_model.CancelAgentTaskRequest): Promise<$_model.CancelAgentTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelAgentTaskWithOptions(request, runtime);
  }

  /**
   * Modifies the configuration of a cloud phone matrix, including the instance type and the number of cloud phone instances.
   * 
   * @param request - ChangeCloudPhoneNodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeCloudPhoneNodeResponse
   */
  async changeCloudPhoneNodeWithOptions(request: $_model.ChangeCloudPhoneNodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChangeCloudPhoneNodeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!$dara.isNull(request.displayConfig)) {
      query["DisplayConfig"] = request.displayConfig;
    }

    if (!$dara.isNull(request.downBandwidthLimit)) {
      query["DownBandwidthLimit"] = request.downBandwidthLimit;
    }

    if (!$dara.isNull(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!$dara.isNull(request.nodeId)) {
      query["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.phoneCount)) {
      query["PhoneCount"] = request.phoneCount;
    }

    if (!$dara.isNull(request.phoneDataVolume)) {
      query["PhoneDataVolume"] = request.phoneDataVolume;
    }

    if (!$dara.isNull(request.promotionId)) {
      query["PromotionId"] = request.promotionId;
    }

    if (!$dara.isNull(request.shareDataVolume)) {
      query["ShareDataVolume"] = request.shareDataVolume;
    }

    if (!$dara.isNull(request.swapSize)) {
      query["SwapSize"] = request.swapSize;
    }

    if (!$dara.isNull(request.upBandwidthLimit)) {
      query["UpBandwidthLimit"] = request.upBandwidthLimit;
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
   * Modifies the configuration of a cloud phone matrix, including the instance type and the number of cloud phone instances.
   * 
   * @param request - ChangeCloudPhoneNodeRequest
   * @returns ChangeCloudPhoneNodeResponse
   */
  async changeCloudPhoneNode(request: $_model.ChangeCloudPhoneNodeRequest): Promise<$_model.ChangeCloudPhoneNodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.changeCloudPhoneNodeWithOptions(request, runtime);
  }

  /**
   * Checks the inventory of Cloud Phone resources. Before you create an instance, call this operation to check whether resources are available in the target region. Create the instance only after you confirm that resources are available.
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
   * Checks the inventory of Cloud Phone resources. Before you create an instance, call this operation to check whether resources are available in the target region. Create the instance only after you confirm that resources are available.
   * 
   * @param request - CheckResourceStockRequest
   * @returns CheckResourceStockResponse
   */
  async checkResourceStock(request: $_model.CheckResourceStockRequest): Promise<$_model.CheckResourceStockResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkResourceStockWithOptions(request, runtime);
  }

  /**
   * Create pay-as-you-go or subscription cloud phone instance groups. An instance group can manage multiple instances. You can group instances with similar functions into an instance group to manage them as a single unit.
   * 
   * @remarks
   * <props="china">
   * Before you create a cloud phone instance group, you must complete identity verification. For more information, see [Individual identity verification](https://help.aliyun.com/document_detail/48263.html).
   * Note that creating a cloud phone instance group incurs charges. Before you proceed, make sure that you understand the [billing method](https://help.aliyun.com/document_detail/2807121.html).
   * - If the billing method for the instance group is subscription (PrePaid), AutoPay is set to false by default. After you call the API, go to <props="china">[Alibaba Cloud Expenses and Costs](https://usercenter2.aliyun.com/order/list)<props="intl">[Alibaba Cloud Expenses and Costs](https://usercenter2-intl.aliyun.com/order/list) to manually pay for the order.
   * - To enable automatic payments, set AutoPay to true.
   * 
   * @param tmpReq - CreateAndroidInstanceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAndroidInstanceGroupResponse
   */
  async createAndroidInstanceGroupWithOptions(tmpReq: $_model.CreateAndroidInstanceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAndroidInstanceGroupResponse> {
    tmpReq.validate();
    let request = new $_model.CreateAndroidInstanceGroupShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.networkInfo)) {
      request.networkInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.networkInfo, "NetworkInfo", "json");
    }

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

    if (!$dara.isNull(request.bandwidthPackageId)) {
      query["BandwidthPackageId"] = request.bandwidthPackageId;
    }

    if (!$dara.isNull(request.bandwidthPackageType)) {
      query["BandwidthPackageType"] = request.bandwidthPackageType;
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

    if (!$dara.isNull(request.instanceVersion)) {
      query["InstanceVersion"] = request.instanceVersion;
    }

    if (!$dara.isNull(request.ipv6Bandwidth)) {
      query["Ipv6Bandwidth"] = request.ipv6Bandwidth;
    }

    if (!$dara.isNull(request.keyPairId)) {
      query["KeyPairId"] = request.keyPairId;
    }

    if (!$dara.isNull(request.networkInfoShrink)) {
      query["NetworkInfo"] = request.networkInfoShrink;
    }

    if (!$dara.isNull(request.networkType)) {
      query["NetworkType"] = request.networkType;
    }

    if (!$dara.isNull(request.numberOfInstances)) {
      query["NumberOfInstances"] = request.numberOfInstances;
    }

    if (!$dara.isNull(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!$dara.isNull(request.paidCallBackUrl)) {
      query["PaidCallBackUrl"] = request.paidCallBackUrl;
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

    if (!$dara.isNull(request.promotionId)) {
      query["PromotionId"] = request.promotionId;
    }

    if (!$dara.isNull(request.saleMode)) {
      query["SaleMode"] = request.saleMode;
    }

    if (!$dara.isNull(request.streamMode)) {
      query["StreamMode"] = request.streamMode;
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
   * Create pay-as-you-go or subscription cloud phone instance groups. An instance group can manage multiple instances. You can group instances with similar functions into an instance group to manage them as a single unit.
   * 
   * @remarks
   * <props="china">
   * Before you create a cloud phone instance group, you must complete identity verification. For more information, see [Individual identity verification](https://help.aliyun.com/document_detail/48263.html).
   * Note that creating a cloud phone instance group incurs charges. Before you proceed, make sure that you understand the [billing method](https://help.aliyun.com/document_detail/2807121.html).
   * - If the billing method for the instance group is subscription (PrePaid), AutoPay is set to false by default. After you call the API, go to <props="china">[Alibaba Cloud Expenses and Costs](https://usercenter2.aliyun.com/order/list)<props="intl">[Alibaba Cloud Expenses and Costs](https://usercenter2-intl.aliyun.com/order/list) to manually pay for the order.
   * - To enable automatic payments, set AutoPay to true.
   * 
   * @param request - CreateAndroidInstanceGroupRequest
   * @returns CreateAndroidInstanceGroupResponse
   */
  async createAndroidInstanceGroup(request: $_model.CreateAndroidInstanceGroupRequest): Promise<$_model.CreateAndroidInstanceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAndroidInstanceGroupWithOptions(request, runtime);
  }

  /**
   * Creates an Android application. Before you can install an application, you must use this API operation to create it. The application is not downloaded when it is created. It is downloaded only during installation. Ensure that the cloud phone can access the download URL.
   * 
   * @remarks
   * When you create an application, you can pass the application information in one of the following two ways:
   * - Method 1: Pass an application from the WUYING Workspace app center.
   *   - Supported methods:
   *     - Method 1: Pass `FileName` and `FilePath`. Both parameters are required.
   *     - Method 2: Pass `OssAppUrl`.
   *   - Rule: If you pass an application from the WUYING Workspace app center, you must use at least one of the two methods. If you use both, Method 1 takes precedence.
   *   - Prerequisite: Log on to the [Elastic Desktop Service Enterprise console](https://eds.console.aliyun.com/osshelp). Follow the on-screen instructions to upload your application file to the WUYING Workspace app center. You can then obtain the required request parameters for this operation: `FileName` and `FilePath`, or `OssAppUrl`.
   * - Method 2: Pass a custom application.
   *   - Supported method: Pass `CustomAppInfo`.
   *   - Rule: If you pass `CustomAppInfo`, all six fields in this object parameter are required.
   * > If you use both Method 1 and Method 2, the information passed in Method 2 takes precedence.
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
   * Creates an Android application. Before you can install an application, you must use this API operation to create it. The application is not downloaded when it is created. It is downloaded only during installation. Ensure that the cloud phone can access the download URL.
   * 
   * @remarks
   * When you create an application, you can pass the application information in one of the following two ways:
   * - Method 1: Pass an application from the WUYING Workspace app center.
   *   - Supported methods:
   *     - Method 1: Pass `FileName` and `FilePath`. Both parameters are required.
   *     - Method 2: Pass `OssAppUrl`.
   *   - Rule: If you pass an application from the WUYING Workspace app center, you must use at least one of the two methods. If you use both, Method 1 takes precedence.
   *   - Prerequisite: Log on to the [Elastic Desktop Service Enterprise console](https://eds.console.aliyun.com/osshelp). Follow the on-screen instructions to upload your application file to the WUYING Workspace app center. You can then obtain the required request parameters for this operation: `FileName` and `FilePath`, or `OssAppUrl`.
   * - Method 2: Pass a custom application.
   *   - Supported method: Pass `CustomAppInfo`.
   *   - Rule: If you pass `CustomAppInfo`, all six fields in this object parameter are required.
   * > If you use both Method 1 and Method 2, the information passed in Method 2 takes precedence.
   * 
   * @param request - CreateAppRequest
   * @returns CreateAppResponse
   */
  async createApp(request: $_model.CreateAppRequest): Promise<$_model.CreateAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAppWithOptions(request, runtime);
  }

  /**
   * In Cloud Phone, a matrix is a logical resource management unit that represents a physical server instance. Creating a matrix provisions a physical server, which you can then partition into multiple independent Cloud Phone instances. These instances share the compute, storage, and network resources of the matrix. The matrix configuration determines how many instances you can create.
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

    if (!$dara.isNull(tmpReq.networkInfo)) {
      request.networkInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.networkInfo, "NetworkInfo", "json");
    }

    let query = { };
    if (!$dara.isNull(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!$dara.isNull(request.autoRenew)) {
      query["AutoRenew"] = request.autoRenew;
    }

    if (!$dara.isNull(request.bandwidthPackageId)) {
      query["BandwidthPackageId"] = request.bandwidthPackageId;
    }

    if (!$dara.isNull(request.bandwidthPackageType)) {
      query["BandwidthPackageType"] = request.bandwidthPackageType;
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

    if (!$dara.isNull(request.downBandwidthLimit)) {
      query["DownBandwidthLimit"] = request.downBandwidthLimit;
    }

    if (!$dara.isNull(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!$dara.isNull(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!$dara.isNull(request.isSingleImgDisk)) {
      query["IsSingleImgDisk"] = request.isSingleImgDisk;
    }

    if (!$dara.isNull(request.networkId)) {
      query["NetworkId"] = request.networkId;
    }

    if (!$dara.isNull(request.networkInfoShrink)) {
      query["NetworkInfo"] = request.networkInfoShrink;
    }

    if (!$dara.isNull(request.networkType)) {
      query["NetworkType"] = request.networkType;
    }

    if (!$dara.isNull(request.nodeName)) {
      query["NodeName"] = request.nodeName;
    }

    if (!$dara.isNull(request.paidCallBackUrl)) {
      query["PaidCallBackUrl"] = request.paidCallBackUrl;
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

    if (!$dara.isNull(request.phoneDataVolume)) {
      query["PhoneDataVolume"] = request.phoneDataVolume;
    }

    if (!$dara.isNull(request.promotionId)) {
      query["PromotionId"] = request.promotionId;
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

    if (!$dara.isNull(request.streamMode)) {
      query["StreamMode"] = request.streamMode;
    }

    if (!$dara.isNull(request.swapSize)) {
      query["SwapSize"] = request.swapSize;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.upBandwidthLimit)) {
      query["UpBandwidthLimit"] = request.upBandwidthLimit;
    }

    if (!$dara.isNull(request.useTemplate)) {
      query["UseTemplate"] = request.useTemplate;
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
   * In Cloud Phone, a matrix is a logical resource management unit that represents a physical server instance. Creating a matrix provisions a physical server, which you can then partition into multiple independent Cloud Phone instances. These instances share the compute, storage, and network resources of the matrix. The matrix configuration determines how many instances you can create.
   * 
   * @param request - CreateCloudPhoneNodeRequest
   * @returns CreateCloudPhoneNodeResponse
   */
  async createCloudPhoneNode(request: $_model.CreateCloudPhoneNodeRequest): Promise<$_model.CreateCloudPhoneNodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCloudPhoneNodeWithOptions(request, runtime);
  }

  /**
   * Creates an order for a credit package.
   * 
   * @remarks
   * This is a billable operation. Before calling this operation, ensure that you understand the [billing methods and pricing](https://help.aliyun.com/zh/ecp/jvs-mobile-billing-instructions?spm=a2c4g.11186623.help-menu-254658.d_0_1_1.78bc5732j49PWP) of Wuying Cloud Phone.
   * 
   * @param request - CreateCreditPackageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCreditPackageResponse
   */
  async createCreditPackageWithOptions(request: $_model.CreateCreditPackageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCreditPackageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!$dara.isNull(request.creditAmount)) {
      query["CreditAmount"] = request.creditAmount;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.periodUnit)) {
      query["PeriodUnit"] = request.periodUnit;
    }

    if (!$dara.isNull(request.promotionId)) {
      query["PromotionId"] = request.promotionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCreditPackage",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCreditPackageResponse>(await this.callApi(params, req, runtime), new $_model.CreateCreditPackageResponse({}));
  }

  /**
   * Creates an order for a credit package.
   * 
   * @remarks
   * This is a billable operation. Before calling this operation, ensure that you understand the [billing methods and pricing](https://help.aliyun.com/zh/ecp/jvs-mobile-billing-instructions?spm=a2c4g.11186623.help-menu-254658.d_0_1_1.78bc5732j49PWP) of Wuying Cloud Phone.
   * 
   * @param request - CreateCreditPackageRequest
   * @returns CreateCreditPackageResponse
   */
  async createCreditPackage(request: $_model.CreateCreditPackageRequest): Promise<$_model.CreateCreditPackageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCreditPackageWithOptions(request, runtime);
  }

  /**
   * Creates a custom image from a cloud phone instance. Then, you can use the image to create more cloud phones with the same configuration.
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
   * Creates a custom image from a cloud phone instance. Then, you can use the image to create more cloud phones with the same configuration.
   * 
   * @param request - CreateCustomImageRequest
   * @returns CreateCustomImageResponse
   */
  async createCustomImage(request: $_model.CreateCustomImageRequest): Promise<$_model.CreateCustomImageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCustomImageWithOptions(request, runtime);
  }

  /**
   * You can connect to Cloud Phones using the Android Debug Bridge (ADB). ADB lets you manage devices and applications, and transfer files. These operations require high permissions. Because Cloud Phones do not have physical interfaces, you cannot use a USB connection to trigger an authorization dialog box on the device. Therefore, you must configure a key pair before you connect to a Cloud Phone with ADB over a network. This key pair ensures that the device trusts the client and that all operations are secure. You can call the CreateKeyPair operation to create an ADB key pair. The system stores the public key and returns the private key. The private key is in PEM-encoded PKCS#8 format and complies with ADB connection standards. You must securely store the private key.
   * 
   * @remarks
   * You can also use the Android Debug Bridge (ADB) tool to create a key pair and then upload it to the Cloud Phone console by calling the [](t2729840.xdita#)operation. This key pair can be used in the same way as a key pair created by the system.
   * Each tenant can have a maximum of 500 key pairs.
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
   * You can connect to Cloud Phones using the Android Debug Bridge (ADB). ADB lets you manage devices and applications, and transfer files. These operations require high permissions. Because Cloud Phones do not have physical interfaces, you cannot use a USB connection to trigger an authorization dialog box on the device. Therefore, you must configure a key pair before you connect to a Cloud Phone with ADB over a network. This key pair ensures that the device trusts the client and that all operations are secure. You can call the CreateKeyPair operation to create an ADB key pair. The system stores the public key and returns the private key. The private key is in PEM-encoded PKCS#8 format and complies with ADB connection standards. You must securely store the private key.
   * 
   * @remarks
   * You can also use the Android Debug Bridge (ADB) tool to create a key pair and then upload it to the Cloud Phone console by calling the [](t2729840.xdita#)operation. This key pair can be used in the same way as a key pair created by the system.
   * Each tenant can have a maximum of 500 key pairs.
   * 
   * @param request - CreateKeyPairRequest
   * @returns CreateKeyPairResponse
   */
  async createKeyPair(request: $_model.CreateKeyPairRequest): Promise<$_model.CreateKeyPairResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createKeyPairWithOptions(request, runtime);
  }

  /**
   * Places an order for a package.
   * 
   * @remarks
   * This is a billable operation. Before you call this operation, review the [billing methods and pricing](https://help.aliyun.com/zh/ecp/jvs-mobile-billing-instructions?spm=a2c4g.11174283.help-menu-254658.d_0_1_1.23695732Cpmwbs) of Wuying Cloud Phone.
   * 
   * @param request - CreateMobileAgentPackageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMobileAgentPackageResponse
   */
  async createMobileAgentPackageWithOptions(request: $_model.CreateMobileAgentPackageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMobileAgentPackageResponse> {
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

    if (!$dara.isNull(request.creditAmount)) {
      query["CreditAmount"] = request.creditAmount;
    }

    if (!$dara.isNull(request.creditConfig)) {
      query["CreditConfig"] = request.creditConfig;
    }

    if (!$dara.isNull(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.mobileAgentPackageSpec)) {
      query["MobileAgentPackageSpec"] = request.mobileAgentPackageSpec;
    }

    if (!$dara.isNull(request.packageSpecId)) {
      query["PackageSpecId"] = request.packageSpecId;
    }

    if (!$dara.isNull(request.paidCallbackUrl)) {
      query["PaidCallbackUrl"] = request.paidCallbackUrl;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.periodUnit)) {
      query["PeriodUnit"] = request.periodUnit;
    }

    if (!$dara.isNull(request.promotionId)) {
      query["PromotionId"] = request.promotionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateMobileAgentPackage",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateMobileAgentPackageResponse>(await this.callApi(params, req, runtime), new $_model.CreateMobileAgentPackageResponse({}));
  }

  /**
   * Places an order for a package.
   * 
   * @remarks
   * This is a billable operation. Before you call this operation, review the [billing methods and pricing](https://help.aliyun.com/zh/ecp/jvs-mobile-billing-instructions?spm=a2c4g.11174283.help-menu-254658.d_0_1_1.23695732Cpmwbs) of Wuying Cloud Phone.
   * 
   * @param request - CreateMobileAgentPackageRequest
   * @returns CreateMobileAgentPackageResponse
   */
  async createMobileAgentPackage(request: $_model.CreateMobileAgentPackageRequest): Promise<$_model.CreateMobileAgentPackageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createMobileAgentPackageWithOptions(request, runtime);
  }

  /**
   * Creates a policy that applies unified settings to cloud phones. These settings include features such as network redirection, watermarks, resolution, and the clipboard.
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
   * Creates a policy that applies unified settings to cloud phones. These settings include features such as network redirection, watermarks, resolution, and the clipboard.
   * 
   * @param request - CreatePolicyGroupRequest
   * @returns CreatePolicyGroupResponse
   */
  async createPolicyGroup(request: $_model.CreatePolicyGroupRequest): Promise<$_model.CreatePolicyGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createPolicyGroupWithOptions(request, runtime);
  }

  /**
   * This asynchronous API operation generates a screenshot of a cloud phone.
   * 
   * @remarks
   * This operation creates a screenshot of a cloud phone and uploads it to the default Object Storage Service (OSS) bucket. The operation returns a task ID. You can then call the DescribeTasks operation to retrieve the download link for the screenshot.
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

    if (!$dara.isNull(request.screenshotId)) {
      query["ScreenshotId"] = request.screenshotId;
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
   * This asynchronous API operation generates a screenshot of a cloud phone.
   * 
   * @remarks
   * This operation creates a screenshot of a cloud phone and uploads it to the default Object Storage Service (OSS) bucket. The operation returns a task ID. You can then call the DescribeTasks operation to retrieve the download link for the screenshot.
   * 
   * @param request - CreateScreenshotRequest
   * @returns CreateScreenshotResponse
   */
  async createScreenshot(request: $_model.CreateScreenshotRequest): Promise<$_model.CreateScreenshotResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createScreenshotWithOptions(request, runtime);
  }

  /**
   * Creates a system property template. The key-value pairs defined in the template are sent to cloud phones and set as properties in their Android systems using the setprop command. APKs or related programs can then read these property values.
   * 
   * @param tmpReq - CreateSystemPropertyTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSystemPropertyTemplateResponse
   */
  async createSystemPropertyTemplateWithOptions(tmpReq: $_model.CreateSystemPropertyTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSystemPropertyTemplateResponse> {
    tmpReq.validate();
    let request = new $_model.CreateSystemPropertyTemplateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.systemPropertyInfo)) {
      request.systemPropertyInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.systemPropertyInfo, "SystemPropertyInfo", "json");
    }

    let query = { };
    if (!$dara.isNull(request.enableAuto)) {
      query["EnableAuto"] = request.enableAuto;
    }

    if (!$dara.isNull(request.filePath)) {
      query["FilePath"] = request.filePath;
    }

    if (!$dara.isNull(request.systemPropertyInfoShrink)) {
      query["SystemPropertyInfo"] = request.systemPropertyInfoShrink;
    }

    if (!$dara.isNull(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSystemPropertyTemplate",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSystemPropertyTemplateResponse>(await this.callApi(params, req, runtime), new $_model.CreateSystemPropertyTemplateResponse({}));
  }

  /**
   * Creates a system property template. The key-value pairs defined in the template are sent to cloud phones and set as properties in their Android systems using the setprop command. APKs or related programs can then read these property values.
   * 
   * @param request - CreateSystemPropertyTemplateRequest
   * @returns CreateSystemPropertyTemplateResponse
   */
  async createSystemPropertyTemplate(request: $_model.CreateSystemPropertyTemplateRequest): Promise<$_model.CreateSystemPropertyTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSystemPropertyTemplateWithOptions(request, runtime);
  }

  /**
   * Deletes an Android instance group. All instances in the group are also deleted. This operation cannot be undone. Proceed with caution.
   * 
   * @remarks
   * Pay-as-you-go instance groups can be deleted at any time.
   * Subscription instance groups can be deleted only after they expire.
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
   * Deletes an Android instance group. All instances in the group are also deleted. This operation cannot be undone. Proceed with caution.
   * 
   * @remarks
   * Pay-as-you-go instance groups can be deleted at any time.
   * Subscription instance groups can be deleted only after they expire.
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
   * Deletes a batch of backup files.
   * 
   * @param request - DeleteBackupFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteBackupFileResponse
   */
  async deleteBackupFileWithOptions(request: $_model.DeleteBackupFileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteBackupFileResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupFileIdList)) {
      query["BackupFileIdList"] = request.backupFileIdList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteBackupFile",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteBackupFileResponse>(await this.callApi(params, req, runtime), new $_model.DeleteBackupFileResponse({}));
  }

  /**
   * Deletes a batch of backup files.
   * 
   * @param request - DeleteBackupFileRequest
   * @returns DeleteBackupFileResponse
   */
  async deleteBackupFile(request: $_model.DeleteBackupFileRequest): Promise<$_model.DeleteBackupFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteBackupFileWithOptions(request, runtime);
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
   * Deletes a node package.
   * 
   * @param request - DeleteMobileAgentPackageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMobileAgentPackageResponse
   */
  async deleteMobileAgentPackageWithOptions(request: $_model.DeleteMobileAgentPackageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMobileAgentPackageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.packageIds)) {
      query["PackageIds"] = request.packageIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMobileAgentPackage",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteMobileAgentPackageResponse>(await this.callApi(params, req, runtime), new $_model.DeleteMobileAgentPackageResponse({}));
  }

  /**
   * Deletes a node package.
   * 
   * @param request - DeleteMobileAgentPackageRequest
   * @returns DeleteMobileAgentPackageResponse
   */
  async deleteMobileAgentPackage(request: $_model.DeleteMobileAgentPackageRequest): Promise<$_model.DeleteMobileAgentPackageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteMobileAgentPackageWithOptions(request, runtime);
  }

  /**
   * Deletes one or more policy groups.
   * 
   * @remarks
   * A policy group cannot be deleted if it is associated with an instance group.
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
   * Deletes one or more policy groups.
   * 
   * @remarks
   * A policy group cannot be deleted if it is associated with an instance group.
   * 
   * @param request - DeletePolicyGroupRequest
   * @returns DeletePolicyGroupResponse
   */
  async deletePolicyGroup(request: $_model.DeletePolicyGroupRequest): Promise<$_model.DeletePolicyGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deletePolicyGroupWithOptions(request, runtime);
  }

  /**
   * Deletes system property templates.
   * 
   * @remarks
   * Deleting property templates does not affect instances for which you have already called the [](t3010125.xdita#)operation to send templates.
   * 
   * @param request - DeleteSystemPropertyTemplatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSystemPropertyTemplatesResponse
   */
  async deleteSystemPropertyTemplatesWithOptions(request: $_model.DeleteSystemPropertyTemplatesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSystemPropertyTemplatesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.templateIds)) {
      query["TemplateIds"] = request.templateIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSystemPropertyTemplates",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSystemPropertyTemplatesResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSystemPropertyTemplatesResponse({}));
  }

  /**
   * Deletes system property templates.
   * 
   * @remarks
   * Deleting property templates does not affect instances for which you have already called the [](t3010125.xdita#)operation to send templates.
   * 
   * @param request - DeleteSystemPropertyTemplatesRequest
   * @returns DeleteSystemPropertyTemplatesResponse
   */
  async deleteSystemPropertyTemplates(request: $_model.DeleteSystemPropertyTemplatesRequest): Promise<$_model.DeleteSystemPropertyTemplatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSystemPropertyTemplatesWithOptions(request, runtime);
  }

  /**
   * Retrieves details of specified Agent Tasks.
   * 
   * @param request - DescribeAgentTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAgentTaskResponse
   */
  async describeAgentTaskWithOptions(request: $_model.DescribeAgentTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAgentTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.taskIds)) {
      query["TaskIds"] = request.taskIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAgentTask",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAgentTaskResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAgentTaskResponse({}));
  }

  /**
   * Retrieves details of specified Agent Tasks.
   * 
   * @param request - DescribeAgentTaskRequest
   * @returns DescribeAgentTaskResponse
   */
  async describeAgentTask(request: $_model.DescribeAgentTaskRequest): Promise<$_model.DescribeAgentTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAgentTaskWithOptions(request, runtime);
  }

  /**
   * Queries the details of a cloud phone instance group.
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

    if (!$dara.isNull(request.instanceVersion)) {
      query["InstanceVersion"] = request.instanceVersion;
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

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
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
   * Queries the details of a cloud phone instance group.
   * 
   * @param request - DescribeAndroidInstanceGroupsRequest
   * @returns DescribeAndroidInstanceGroupsResponse
   */
  async describeAndroidInstanceGroups(request: $_model.DescribeAndroidInstanceGroupsRequest): Promise<$_model.DescribeAndroidInstanceGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAndroidInstanceGroupsWithOptions(request, runtime);
  }

  /**
   * Queries the details of cloud phone instances.
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

    if (!$dara.isNull(request.appManagePolicyId)) {
      query["AppManagePolicyId"] = request.appManagePolicyId;
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

    if (!$dara.isNull(request.instanceVersion)) {
      query["InstanceVersion"] = request.instanceVersion;
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

    if (!$dara.isNull(request.privateIpAddress)) {
      query["PrivateIpAddress"] = request.privateIpAddress;
    }

    if (!$dara.isNull(request.qosRuleIds)) {
      query["QosRuleIds"] = request.qosRuleIds;
    }

    if (!$dara.isNull(request.saleMode)) {
      query["SaleMode"] = request.saleMode;
    }

    if (!$dara.isNull(request.sortKey)) {
      query["SortKey"] = request.sortKey;
    }

    if (!$dara.isNull(request.sortType)) {
      query["SortType"] = request.sortType;
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
   * Queries the details of cloud phone instances.
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
   * Queries a list of backup files.
   * 
   * @remarks
   * Currently, only backup files generated by cloud phones can be stored in Object Storage Service (OSS).
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

    if (!$dara.isNull(request.saleMode)) {
      query["SaleMode"] = request.saleMode;
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
   * Queries a list of backup files.
   * 
   * @remarks
   * Currently, only backup files generated by cloud phones can be stored in Object Storage Service (OSS).
   * 
   * @param request - DescribeBackupFilesRequest
   * @returns DescribeBackupFilesResponse
   */
  async describeBackupFiles(request: $_model.DescribeBackupFilesRequest): Promise<$_model.DescribeBackupFilesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeBackupFilesWithOptions(request, runtime);
  }

  /**
   * Queries information about buckets. This operation returns only the buckets whose names start with `cloudphone-saved-bucket-`.
   * 
   * @remarks
   * Currently, you can save backup files generated by Cloud Phone only to Object Storage Service (OSS).
   * 
   * @param request - DescribeBucketsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBucketsResponse
   */
  async describeBucketsWithOptions(request: $_model.DescribeBucketsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeBucketsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileType)) {
      query["FileType"] = request.fileType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeBuckets",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeBucketsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeBucketsResponse({}));
  }

  /**
   * Queries information about buckets. This operation returns only the buckets whose names start with `cloudphone-saved-bucket-`.
   * 
   * @remarks
   * Currently, you can save backup files generated by Cloud Phone only to Object Storage Service (OSS).
   * 
   * @param request - DescribeBucketsRequest
   * @returns DescribeBucketsResponse
   */
  async describeBuckets(request: $_model.DescribeBucketsRequest): Promise<$_model.DescribeBucketsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeBucketsWithOptions(request, runtime);
  }

  /**
   * Queries the details of Cloud Phone matrices.
   * In the Cloud Phone service, a matrix (Cloud Phone Server) is a logical resource management unit that represents a physical server instance. This physical server can be partitioned into multiple independent Cloud Phone instances that share the underlying computing, storage, and network resources of the matrix. Creating a matrix is equivalent to provisioning a physical server on which you can create Cloud Phone instances. The number of instances that you can create varies depending on the configuration.
   * 
   * @param request - DescribeCloudPhoneNodesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCloudPhoneNodesResponse
   */
  async describeCloudPhoneNodesWithOptions(request: $_model.DescribeCloudPhoneNodesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCloudPhoneNodesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bandwidthPackageId)) {
      query["BandwidthPackageId"] = request.bandwidthPackageId;
    }

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

    if (!$dara.isNull(request.nodeNameList)) {
      query["NodeNameList"] = request.nodeNameList;
    }

    if (!$dara.isNull(request.serverType)) {
      query["ServerType"] = request.serverType;
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
   * Queries the details of Cloud Phone matrices.
   * In the Cloud Phone service, a matrix (Cloud Phone Server) is a logical resource management unit that represents a physical server instance. This physical server can be partitioned into multiple independent Cloud Phone instances that share the underlying computing, storage, and network resources of the matrix. Creating a matrix is equivalent to provisioning a physical server on which you can create Cloud Phone instances. The number of instances that you can create varies depending on the configuration.
   * 
   * @param request - DescribeCloudPhoneNodesRequest
   * @returns DescribeCloudPhoneNodesResponse
   */
  async describeCloudPhoneNodes(request: $_model.DescribeCloudPhoneNodesRequest): Promise<$_model.DescribeCloudPhoneNodesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCloudPhoneNodesWithOptions(request, runtime);
  }

  /**
   * Retrieves the details of one or more credit packages.
   * 
   * @param request - DescribeCreditPackageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCreditPackageResponse
   */
  async describeCreditPackageWithOptions(request: $_model.DescribeCreditPackageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCreditPackageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.creditPackageId)) {
      query["CreditPackageId"] = request.creditPackageId;
    }

    if (!$dara.isNull(request.creditPackageStatus)) {
      query["CreditPackageStatus"] = request.creditPackageStatus;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCreditPackage",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCreditPackageResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCreditPackageResponse({}));
  }

  /**
   * Retrieves the details of one or more credit packages.
   * 
   * @param request - DescribeCreditPackageRequest
   * @returns DescribeCreditPackageResponse
   */
  async describeCreditPackage(request: $_model.DescribeCreditPackageRequest): Promise<$_model.DescribeCreditPackageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCreditPackageWithOptions(request, runtime);
  }

  /**
   * Queries the display settings.
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
   * Queries the display settings.
   * 
   * @param request - DescribeDisplayConfigRequest
   * @returns DescribeDisplayConfigResponse
   */
  async describeDisplayConfig(request: $_model.DescribeDisplayConfigRequest): Promise<$_model.DescribeDisplayConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDisplayConfigWithOptions(request, runtime);
  }

  /**
   * Queries a list of available images.
   * 
   * @param request - DescribeImageListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeImageListResponse
   */
  async describeImageListWithOptions(request: $_model.DescribeImageListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeImageListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.imageBizTags)) {
      query["ImageBizTags"] = request.imageBizTags;
    }

    if (!$dara.isNull(request.imagePackageType)) {
      query["ImagePackageType"] = request.imagePackageType;
    }

    if (!$dara.isNull(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!$dara.isNull(request.systemType)) {
      query["SystemType"] = request.systemType;
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
   * Queries a list of available images.
   * 
   * @param request - DescribeImageListRequest
   * @returns DescribeImageListResponse
   */
  async describeImageList(request: $_model.DescribeImageListRequest): Promise<$_model.DescribeImageListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeImageListWithOptions(request, runtime);
  }

  /**
   * Queries the execution results of a command run by calling the RunCommand operation.
   * 
   * @remarks
   * This operation is being deprecated. Use the [](t2740507.xdita#)operation to query the progress and results of a command execution.
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
   * Queries the execution results of a command run by calling the RunCommand operation.
   * 
   * @remarks
   * This operation is being deprecated. Use the [](t2740507.xdita#)operation to query the progress and results of a command execution.
   * 
   * @param request - DescribeInvocationsRequest
   * @returns DescribeInvocationsResponse
   */
  async describeInvocations(request: $_model.DescribeInvocationsRequest): Promise<$_model.DescribeInvocationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInvocationsWithOptions(request, runtime);
  }

  /**
   * Retrieves details of JVS instances.
   * 
   * @param request - DescribeJVSInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeJVSInstanceResponse
   */
  async describeJVSInstanceWithOptions(request: $_model.DescribeJVSInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeJVSInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
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
      action: "DescribeJVSInstance",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeJVSInstanceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeJVSInstanceResponse({}));
  }

  /**
   * Retrieves details of JVS instances.
   * 
   * @param request - DescribeJVSInstanceRequest
   * @returns DescribeJVSInstanceResponse
   */
  async describeJVSInstance(request: $_model.DescribeJVSInstanceRequest): Promise<$_model.DescribeJVSInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeJVSInstanceWithOptions(request, runtime);
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
   * Queries the latest monitoring data for an instance or a matrix. You can query metrics such as CPU, memory, disk, and network.
   * 
   * @param request - DescribeMetricLastRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMetricLastResponse
   */
  async describeMetricLastWithOptions(request: $_model.DescribeMetricLastRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeMetricLastResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.androidInstanceIds)) {
      body["AndroidInstanceIds"] = request.androidInstanceIds;
    }

    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.length)) {
      body["Length"] = request.length;
    }

    if (!$dara.isNull(request.metricNames)) {
      body["MetricNames"] = request.metricNames;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
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
      action: "DescribeMetricLast",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeMetricLastResponse>(await this.callApi(params, req, runtime), new $_model.DescribeMetricLastResponse({}));
  }

  /**
   * Queries the latest monitoring data for an instance or a matrix. You can query metrics such as CPU, memory, disk, and network.
   * 
   * @param request - DescribeMetricLastRequest
   * @returns DescribeMetricLastResponse
   */
  async describeMetricLast(request: $_model.DescribeMetricLastRequest): Promise<$_model.DescribeMetricLastResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeMetricLastWithOptions(request, runtime);
  }

  /**
   * Queries monitoring data for specified metrics, such as network bandwidth.
   * 
   * @param request - DescribeMetricListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMetricListResponse
   */
  async describeMetricListWithOptions(request: $_model.DescribeMetricListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeMetricListResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.androidInstanceIds)) {
      body["AndroidInstanceIds"] = request.androidInstanceIds;
    }

    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceIds)) {
      body["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.length)) {
      body["Length"] = request.length;
    }

    if (!$dara.isNull(request.metricNames)) {
      body["MetricNames"] = request.metricNames;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.period)) {
      body["Period"] = request.period;
    }

    if (!$dara.isNull(request.processInfos)) {
      body["ProcessInfos"] = request.processInfos;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeMetricList",
      version: "2023-09-30",
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
   * Queries monitoring data for specified metrics, such as network bandwidth.
   * 
   * @param request - DescribeMetricListRequest
   * @returns DescribeMetricListResponse
   */
  async describeMetricList(request: $_model.DescribeMetricListRequest): Promise<$_model.DescribeMetricListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeMetricListWithOptions(request, runtime);
  }

  /**
   * Queries the latest monitoring data for metrics such as instance network bandwidth and returns the results in a sorted list.
   * 
   * @param request - DescribeMetricTopRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMetricTopResponse
   */
  async describeMetricTopWithOptions(request: $_model.DescribeMetricTopRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeMetricTopResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.androidInstanceIds)) {
      body["AndroidInstanceIds"] = request.androidInstanceIds;
    }

    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceIds)) {
      body["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.length)) {
      body["Length"] = request.length;
    }

    if (!$dara.isNull(request.metricNames)) {
      body["MetricNames"] = request.metricNames;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.period)) {
      body["Period"] = request.period;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeMetricTop",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeMetricTopResponse>(await this.callApi(params, req, runtime), new $_model.DescribeMetricTopResponse({}));
  }

  /**
   * Queries the latest monitoring data for metrics such as instance network bandwidth and returns the results in a sorted list.
   * 
   * @param request - DescribeMetricTopRequest
   * @returns DescribeMetricTopResponse
   */
  async describeMetricTop(request: $_model.DescribeMetricTopRequest): Promise<$_model.DescribeMetricTopResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeMetricTopWithOptions(request, runtime);
  }

  /**
   * Retrieves the details of one or more node packages.
   * 
   * @param request - DescribeMobileAgentPackageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMobileAgentPackageResponse
   */
  async describeMobileAgentPackageWithOptions(request: $_model.DescribeMobileAgentPackageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeMobileAgentPackageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.packageIds)) {
      query["PackageIds"] = request.packageIds;
    }

    if (!$dara.isNull(request.packageSpec)) {
      query["PackageSpec"] = request.packageSpec;
    }

    if (!$dara.isNull(request.packageStatus)) {
      query["PackageStatus"] = request.packageStatus;
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
      action: "DescribeMobileAgentPackage",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeMobileAgentPackageResponse>(await this.callApi(params, req, runtime), new $_model.DescribeMobileAgentPackageResponse({}));
  }

  /**
   * Retrieves the details of one or more node packages.
   * 
   * @param request - DescribeMobileAgentPackageRequest
   * @returns DescribeMobileAgentPackageResponse
   */
  async describeMobileAgentPackage(request: $_model.DescribeMobileAgentPackageRequest): Promise<$_model.DescribeMobileAgentPackageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeMobileAgentPackageWithOptions(request, runtime);
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
   * Queries the available specifications for cloud phones. This information is required to create an instance. For the cloud phone matrix mode, this operation also returns the minimum and maximum number of instances allowed per matrix.
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

    if (!$dara.isNull(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
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
   * Queries the available specifications for cloud phones. This information is required to create an instance. For the cloud phone matrix mode, this operation also returns the minimum and maximum number of instances allowed per matrix.
   * 
   * @param request - DescribeSpecRequest
   * @returns DescribeSpecResponse
   */
  async describeSpec(request: $_model.DescribeSpecRequest): Promise<$_model.DescribeSpecResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSpecWithOptions(request, runtime);
  }

  /**
   * Describes system property templates.
   * 
   * @param request - DescribeSystemPropertyTemplatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSystemPropertyTemplatesResponse
   */
  async describeSystemPropertyTemplatesWithOptions(request: $_model.DescribeSystemPropertyTemplatesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSystemPropertyTemplatesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.templateIds)) {
      query["TemplateIds"] = request.templateIds;
    }

    if (!$dara.isNull(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSystemPropertyTemplates",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSystemPropertyTemplatesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSystemPropertyTemplatesResponse({}));
  }

  /**
   * Describes system property templates.
   * 
   * @param request - DescribeSystemPropertyTemplatesRequest
   * @returns DescribeSystemPropertyTemplatesResponse
   */
  async describeSystemPropertyTemplates(request: $_model.DescribeSystemPropertyTemplatesRequest): Promise<$_model.DescribeSystemPropertyTemplatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSystemPropertyTemplatesWithOptions(request, runtime);
  }

  /**
   * Queries tasks created for a cloud phone instance. Many operations on cloud phones—such as creating, starting, or stopping them—are asynchronous. When you initiate an operation, the system returns a `Task ID` that you can use to track its progress and final result. You can call this API to retrieve a list of all tasks and their execution statuses.
   * 
   * @remarks
   * - You can call the DescribeTasks operation to query the tasks created for one or more cloud phone instances.
   * - The system currently supports various tasks, including starting, stopping, restarting, and resetting cloud phone instances; backing up and restoring data; installing apps; and executing remote commands.
   * - You can use the Level field to specify the type of task. If Level is set to 1, it represents a batch task. If Level is set to 2, it represents an instance-level task.
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
   * Queries tasks created for a cloud phone instance. Many operations on cloud phones—such as creating, starting, or stopping them—are asynchronous. When you initiate an operation, the system returns a `Task ID` that you can use to track its progress and final result. You can call this API to retrieve a list of all tasks and their execution statuses.
   * 
   * @remarks
   * - You can call the DescribeTasks operation to query the tasks created for one or more cloud phone instances.
   * - The system currently supports various tasks, including starting, stopping, restarting, and resetting cloud phone instances; backing up and restoring data; installing apps; and executing remote commands.
   * - You can use the Level field to specify the type of task. If Level is set to 1, it represents a batch task. If Level is set to 2, it represents an instance-level task.
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
   * - After a key pair is detached, the cloud phone no longer stores a valid ADB public key. As a result, ADB connections may fail to authenticate.
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
   * - After a key pair is detached, the cloud phone no longer stores a valid ADB public key. As a result, ADB connections may fail to authenticate.
   * 
   * @param request - DetachKeyPairRequest
   * @returns DetachKeyPairResponse
   */
  async detachKeyPair(request: $_model.DetachKeyPairRequest): Promise<$_model.DetachKeyPairResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detachKeyPairWithOptions(request, runtime);
  }

  /**
   * Disconnects a connected instance or disassociates an instance that is associated with another user.
   * 
   * @remarks
   * Connections to instances are established using the [](t2848888.xdita#). After a connection is closed with `session.stop()`, the system maintains the user-instance association for 5 minutes. During this time, other users cannot connect. The `DisconnectAndroidInstance` operation lets you disassociate the instance immediately.
   * <props="china">If you use the Cloud Phone Matrix Edition and the instance stream pattern is collaborative mode, you can specify `EndUserId` to disconnect a specific user and invalidate the corresponding ticket.
   * 
   * @param request - DisconnectAndroidInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisconnectAndroidInstanceResponse
   */
  async disconnectAndroidInstanceWithOptions(request: $_model.DisconnectAndroidInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisconnectAndroidInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

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
   * Disconnects a connected instance or disassociates an instance that is associated with another user.
   * 
   * @remarks
   * Connections to instances are established using the [](t2848888.xdita#). After a connection is closed with `session.stop()`, the system maintains the user-instance association for 5 minutes. During this time, other users cannot connect. The `DisconnectAndroidInstance` operation lets you disassociate the instance immediately.
   * <props="china">If you use the Cloud Phone Matrix Edition and the instance stream pattern is collaborative mode, you can specify `EndUserId` to disconnect a specific user and invalidate the corresponding ticket.
   * 
   * @param request - DisconnectAndroidInstanceRequest
   * @returns DisconnectAndroidInstanceResponse
   */
  async disconnectAndroidInstance(request: $_model.DisconnectAndroidInstanceRequest): Promise<$_model.DisconnectAndroidInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disconnectAndroidInstanceWithOptions(request, runtime);
  }

  /**
   * Distributes an image to one or more regions. This lets you use the image to create cloud phones in regions other than its source region.
   * 
   * @remarks
   * You cannot cancel the distribution of an image to a region after the image is distributed.
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
   * Distributes an image to one or more regions. This lets you use the image to create cloud phones in regions other than its source region.
   * 
   * @remarks
   * You cannot cancel the distribution of an image to a region after the image is distributed.
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
   * Ends all coordination tasks for a cloud phone instance and invalidates the coordination code.
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
   * Ends all coordination tasks for a cloud phone instance and invalidates the coordination code.
   * 
   * @param request - EndCoordinationRequest
   * @returns EndCoordinationResponse
   */
  async endCoordination(request: $_model.EndCoordinationRequest): Promise<$_model.EndCoordinationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.endCoordinationWithOptions(request, runtime);
  }

  /**
   * Expands the storage of a cloud phone matrix. You can expand shared storage for matrix-level files such as images, and instance storage. Expanding the storage incurs new fees, and the API response returns an order ID.
   * 
   * @remarks
   * This operation is only available on the china site (aliyun.com).
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

    if (!$dara.isNull(request.paidCallBackUrl)) {
      query["PaidCallBackUrl"] = request.paidCallBackUrl;
    }

    if (!$dara.isNull(request.phoneDataVolume)) {
      query["PhoneDataVolume"] = request.phoneDataVolume;
    }

    if (!$dara.isNull(request.promotionId)) {
      query["PromotionId"] = request.promotionId;
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
   * Expands the storage of a cloud phone matrix. You can expand shared storage for matrix-level files such as images, and instance storage. Expanding the storage incurs new fees, and the API response returns an order ID.
   * 
   * @remarks
   * This operation is only available on the china site (aliyun.com).
   * 
   * @param request - ExpandDataVolumeRequest
   * @returns ExpandDataVolumeResponse
   */
  async expandDataVolume(request: $_model.ExpandDataVolumeRequest): Promise<$_model.ExpandDataVolumeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.expandDataVolumeWithOptions(request, runtime);
  }

  /**
   * Expands the phone storage for one or more matrix instances.
   * 
   * @param request - ExpandPhoneDataVolumeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExpandPhoneDataVolumeResponse
   */
  async expandPhoneDataVolumeWithOptions(request: $_model.ExpandPhoneDataVolumeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ExpandPhoneDataVolumeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!$dara.isNull(request.bizRegionId)) {
      query["BizRegionId"] = request.bizRegionId;
    }

    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.paidCallBackUrl)) {
      query["PaidCallBackUrl"] = request.paidCallBackUrl;
    }

    if (!$dara.isNull(request.phoneDataVolume)) {
      query["PhoneDataVolume"] = request.phoneDataVolume;
    }

    if (!$dara.isNull(request.promotionId)) {
      query["PromotionId"] = request.promotionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExpandPhoneDataVolume",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExpandPhoneDataVolumeResponse>(await this.callApi(params, req, runtime), new $_model.ExpandPhoneDataVolumeResponse({}));
  }

  /**
   * Expands the phone storage for one or more matrix instances.
   * 
   * @param request - ExpandPhoneDataVolumeRequest
   * @returns ExpandPhoneDataVolumeResponse
   */
  async expandPhoneDataVolume(request: $_model.ExpandPhoneDataVolumeRequest): Promise<$_model.ExpandPhoneDataVolumeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.expandPhoneDataVolumeWithOptions(request, runtime);
  }

  /**
   * Fetches files from a cloud phone to Object Storage Service (OSS).
   * 
   * @remarks
   * This operation fetches only files or folders from a cloud phone to Object Storage Service.
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

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
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
   * Fetches files from a cloud phone to Object Storage Service (OSS).
   * 
   * @remarks
   * This operation fetches only files or folders from a cloud phone to Object Storage Service.
   * 
   * @param request - FetchFileRequest
   * @returns FetchFileResponse
   */
  async fetchFile(request: $_model.FetchFileRequest): Promise<$_model.FetchFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.fetchFileWithOptions(request, runtime);
  }

  /**
   * By default, you can only use the BatchGetAcpConnectionTicket operation to get the ticket for a connection to a cloud phone, and a cloud phone supports only one connected user at a time. To allow multiple users to connect to a cloud phone at the same time, connect to the cloud phone with a convenience account, use this operation to generate a collaboration code by using the current account, and share this code with other convenience accounts to allow them to access the same cloud phone.
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
   * By default, you can only use the BatchGetAcpConnectionTicket operation to get the ticket for a connection to a cloud phone, and a cloud phone supports only one connected user at a time. To allow multiple users to connect to a cloud phone at the same time, connect to the cloud phone with a convenience account, use this operation to generate a collaboration code by using the current account, and share this code with other convenience accounts to allow them to access the same cloud phone.
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
   * Retrieves the properties of an instance. This operation runs the android getprop command to retrieve all properties of the cloud phone.
   * 
   * @param request - GetInstancePropertiesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstancePropertiesResponse
   */
  async getInstancePropertiesWithOptions(request: $_model.GetInstancePropertiesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetInstancePropertiesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInstanceProperties",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetInstancePropertiesResponse>(await this.callApi(params, req, runtime), new $_model.GetInstancePropertiesResponse({}));
  }

  /**
   * Retrieves the properties of an instance. This operation runs the android getprop command to retrieve all properties of the cloud phone.
   * 
   * @param request - GetInstancePropertiesRequest
   * @returns GetInstancePropertiesResponse
   */
  async getInstanceProperties(request: $_model.GetInstancePropertiesRequest): Promise<$_model.GetInstancePropertiesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getInstancePropertiesWithOptions(request, runtime);
  }

  /**
   * Queries the network access blacklist for IP addresses and domain names.
   * 
   * @remarks
   * - This operation requires image version 26.01 or later.
   * - This operation queries the network access blacklist for your account. The blacklist includes IP addresses and domain names.
   * 
   * @param request - GetNetworkBlacklistRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetNetworkBlacklistResponse
   */
  async getNetworkBlacklistWithOptions(request: $_model.GetNetworkBlacklistRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetNetworkBlacklistResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetNetworkBlacklist",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetNetworkBlacklistResponse>(await this.callApi(params, req, runtime), new $_model.GetNetworkBlacklistResponse({}));
  }

  /**
   * Queries the network access blacklist for IP addresses and domain names.
   * 
   * @remarks
   * - This operation requires image version 26.01 or later.
   * - This operation queries the network access blacklist for your account. The blacklist includes IP addresses and domain names.
   * 
   * @param request - GetNetworkBlacklistRequest
   * @returns GetNetworkBlacklistResponse
   */
  async getNetworkBlacklist(request: $_model.GetNetworkBlacklistRequest): Promise<$_model.GetNetworkBlacklistResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getNetworkBlacklistWithOptions(request, runtime);
  }

  /**
   * Imports a custom image.
   * 
   * @remarks
   * 1. You can import a custom image to develop custom features or services.
   * 2. First, obtain the required Android Open Source Project (AOSP) image baseline from the platform. Then, create a custom build. After the build is complete, import the image to the platform. For detailed instructions, contact Wuying technical support.
   * 3. Ensure the image tar package is smaller than 2 GB. Otherwise, image parsing may fail.
   * 4. Ensure the Object Storage Service (OSS) address is in mainland China. If the address is outside mainland China or in the Hong Kong region, the image file download may time out.
   * 
   * @param request - ImportImageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ImportImageResponse
   */
  async importImageWithOptions(request: $_model.ImportImageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ImportImageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.imageDescription)) {
      query["ImageDescription"] = request.imageDescription;
    }

    if (!$dara.isNull(request.imageFileURL)) {
      query["ImageFileURL"] = request.imageFileURL;
    }

    if (!$dara.isNull(request.imageName)) {
      query["ImageName"] = request.imageName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ImportImage",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ImportImageResponse>(await this.callApi(params, req, runtime), new $_model.ImportImageResponse({}));
  }

  /**
   * Imports a custom image.
   * 
   * @remarks
   * 1. You can import a custom image to develop custom features or services.
   * 2. First, obtain the required Android Open Source Project (AOSP) image baseline from the platform. Then, create a custom build. After the build is complete, import the image to the platform. For detailed instructions, contact Wuying technical support.
   * 3. Ensure the image tar package is smaller than 2 GB. Otherwise, image parsing may fail.
   * 4. Ensure the Object Storage Service (OSS) address is in mainland China. If the address is outside mainland China or in the Hong Kong region, the image file download may time out.
   * 
   * @param request - ImportImageRequest
   * @returns ImportImageResponse
   */
  async importImage(request: $_model.ImportImageRequest): Promise<$_model.ImportImageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.importImageWithOptions(request, runtime);
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
   * Installs applications in batches on Cloud Phone instances.
   * 
   * @remarks
   * Before you can install an application, you must create it by calling the [CreateApp](https://help.aliyun.com/document_detail/2807330.html) operation. This is an asynchronous operation. You can call the [DescribeTasks](~~DescribeTasks~~) operation to query the task status.
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
   * Installs applications in batches on Cloud Phone instances.
   * 
   * @remarks
   * Before you can install an application, you must create it by calling the [CreateApp](https://help.aliyun.com/document_detail/2807330.html) operation. This is an asynchronous operation. You can call the [DescribeTasks](~~DescribeTasks~~) operation to query the task status.
   * 
   * @param request - InstallAppRequest
   * @returns InstallAppResponse
   */
  async installApp(request: $_model.InstallAppRequest): Promise<$_model.InstallAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.installAppWithOptions(request, runtime);
  }

  /**
   * Installs the monitoring plugin in a single step. An instance can generate monitoring data only after the plugin is installed.
   * 
   * @param request - InstallMonitorAgentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InstallMonitorAgentResponse
   */
  async installMonitorAgentWithOptions(request: $_model.InstallMonitorAgentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.InstallMonitorAgentResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.androidInstanceIds)) {
      body["AndroidInstanceIds"] = request.androidInstanceIds;
    }

    if (!$dara.isNull(request.saleMode)) {
      body["SaleMode"] = request.saleMode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "InstallMonitorAgent",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.InstallMonitorAgentResponse>(await this.callApi(params, req, runtime), new $_model.InstallMonitorAgentResponse({}));
  }

  /**
   * Installs the monitoring plugin in a single step. An instance can generate monitoring data only after the plugin is installed.
   * 
   * @param request - InstallMonitorAgentRequest
   * @returns InstallMonitorAgentResponse
   */
  async installMonitorAgent(request: $_model.InstallMonitorAgentRequest): Promise<$_model.InstallMonitorAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.installMonitorAgentWithOptions(request, runtime);
  }

  /**
   * Diagnoses and recovers cloud phone matrix instances. This operation clears the system log files of an instance to prevent the instance from becoming unrecoverable due to a full disk.
   * 
   * @param request - InstanceHealerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InstanceHealerResponse
   */
  async instanceHealerWithOptions(request: $_model.InstanceHealerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.InstanceHealerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceIdList)) {
      query["InstanceIdList"] = request.instanceIdList;
    }

    if (!$dara.isNull(request.strategy)) {
      query["Strategy"] = request.strategy;
    }

    if (!$dara.isNull(request.timeout)) {
      query["Timeout"] = request.timeout;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "InstanceHealer",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.InstanceHealerResponse>(await this.callApi(params, req, runtime), new $_model.InstanceHealerResponse({}));
  }

  /**
   * Diagnoses and recovers cloud phone matrix instances. This operation clears the system log files of an instance to prevent the instance from becoming unrecoverable due to a full disk.
   * 
   * @param request - InstanceHealerRequest
   * @returns InstanceHealerResponse
   */
  async instanceHealer(request: $_model.InstanceHealerRequest): Promise<$_model.InstanceHealerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.instanceHealerWithOptions(request, runtime);
  }

  /**
   * Queries the Android Debug Bridge (ADB) connection information for instances. This operation is available only to standard networks.
   * 
   * @param request - ListInstanceAdbAttributesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstanceAdbAttributesResponse
   */
  async listInstanceAdbAttributesWithOptions(request: $_model.ListInstanceAdbAttributesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListInstanceAdbAttributesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.externalIp)) {
      query["ExternalIp"] = request.externalIp;
    }

    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.internalIp)) {
      query["InternalIp"] = request.internalIp;
    }

    if (!$dara.isNull(request.internalPort)) {
      query["InternalPort"] = request.internalPort;
    }

    if (!$dara.isNull(request.ipProtocol)) {
      query["IpProtocol"] = request.ipProtocol;
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
      action: "ListInstanceAdbAttributes",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListInstanceAdbAttributesResponse>(await this.callApi(params, req, runtime), new $_model.ListInstanceAdbAttributesResponse({}));
  }

  /**
   * Queries the Android Debug Bridge (ADB) connection information for instances. This operation is available only to standard networks.
   * 
   * @param request - ListInstanceAdbAttributesRequest
   * @returns ListInstanceAdbAttributesResponse
   */
  async listInstanceAdbAttributes(request: $_model.ListInstanceAdbAttributesRequest): Promise<$_model.ListInstanceAdbAttributesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listInstanceAdbAttributesWithOptions(request, runtime);
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
   * Queries the tags that are associated with Cloud Phone instances.
   * 
   * @remarks
   * Specify at least one of the following parameters in the request to determine the queried object: `ResourceId.N`, `Tag.N.Key`, or `Tag.N.Value`.
   * 
   * @param request - ListTagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagResourcesResponse
   */
  async listTagResourcesWithOptions(request: $_model.ListTagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
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
      version: "2023-09-30",
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
   * Queries the tags that are associated with Cloud Phone instances.
   * 
   * @remarks
   * Specify at least one of the following parameters in the request to determine the queried object: `ResourceId.N`, `Tag.N.Key`, or `Tag.N.Value`.
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: $_model.ListTagResourcesRequest): Promise<$_model.ListTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * Modifies the information of an Android instance. Currently, this operation can be used to modify only the instance name and the upstream and downstream bandwidth limits.
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

    if (!$dara.isNull(request.downBandwidthLimit)) {
      query["DownBandwidthLimit"] = request.downBandwidthLimit;
    }

    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.newAndroidInstanceName)) {
      query["NewAndroidInstanceName"] = request.newAndroidInstanceName;
    }

    if (!$dara.isNull(request.upBandwidthLimit)) {
      query["UpBandwidthLimit"] = request.upBandwidthLimit;
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
   * Modifies the information of an Android instance. Currently, this operation can be used to modify only the instance name and the upstream and downstream bandwidth limits.
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

    if (!$dara.isNull(request.streamMode)) {
      query["StreamMode"] = request.streamMode;
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
   * Modifies a cloud phone matrix. Currently, you can only modify the name of a cloud phone matrix. Note: In the Cloud Phone system, a Matrix (Cloud Phone Server) is a logical resource management unit that represents a single physical server instance. This physical server can be partitioned into multiple, independently running cloud phone instances. These instances share the Matrix\\"s underlying compute, storage, and network resources. Creating a Matrix is equivalent to leasing a dedicated physical server. On this server, you can then create your cloud phone instances. The number of instances you can create depends on their configuration.
   * 
   * @remarks
   * Changing the streaming mode is an asynchronous operation. Please do not perform this action frequently.
   * 
   * @param request - ModifyCloudPhoneNodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyCloudPhoneNodeResponse
   */
  async modifyCloudPhoneNodeWithOptions(request: $_model.ModifyCloudPhoneNodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyCloudPhoneNodeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.newNodeName)) {
      query["NewNodeName"] = request.newNodeName;
    }

    if (!$dara.isNull(request.nodeId)) {
      query["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.streamMode)) {
      query["StreamMode"] = request.streamMode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyCloudPhoneNode",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyCloudPhoneNodeResponse>(await this.callApi(params, req, runtime), new $_model.ModifyCloudPhoneNodeResponse({}));
  }

  /**
   * Modifies a cloud phone matrix. Currently, you can only modify the name of a cloud phone matrix. Note: In the Cloud Phone system, a Matrix (Cloud Phone Server) is a logical resource management unit that represents a single physical server instance. This physical server can be partitioned into multiple, independently running cloud phone instances. These instances share the Matrix\\"s underlying compute, storage, and network resources. Creating a Matrix is equivalent to leasing a dedicated physical server. On this server, you can then create your cloud phone instances. The number of instances you can create depends on their configuration.
   * 
   * @remarks
   * Changing the streaming mode is an asynchronous operation. Please do not perform this action frequently.
   * 
   * @param request - ModifyCloudPhoneNodeRequest
   * @returns ModifyCloudPhoneNodeResponse
   */
  async modifyCloudPhoneNode(request: $_model.ModifyCloudPhoneNodeRequest): Promise<$_model.ModifyCloudPhoneNodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyCloudPhoneNodeWithOptions(request, runtime);
  }

  /**
   * Modifies display settings.
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
   * Modifies display settings.
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

    if (!$dara.isNull(request.promotionId)) {
      query["PromotionId"] = request.promotionId;
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
   * Modifies the configuration of a JVS instance.
   * 
   * @param request - ModifyJVSInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyJVSInstanceResponse
   */
  async modifyJVSInstanceWithOptions(request: $_model.ModifyJVSInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyJVSInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applyToAll)) {
      query["ApplyToAll"] = request.applyToAll;
    }

    if (!$dara.isNull(request.creditConfig)) {
      query["CreditConfig"] = request.creditConfig;
    }

    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyJVSInstance",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyJVSInstanceResponse>(await this.callApi(params, req, runtime), new $_model.ModifyJVSInstanceResponse({}));
  }

  /**
   * Modifies the configuration of a JVS instance.
   * 
   * @param request - ModifyJVSInstanceRequest
   * @returns ModifyJVSInstanceResponse
   */
  async modifyJVSInstance(request: $_model.ModifyJVSInstanceRequest): Promise<$_model.ModifyJVSInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyJVSInstanceWithOptions(request, runtime);
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
   * Modifies the information of a policy group.
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
   * Modifies the information of a policy group.
   * 
   * @param request - ModifyPolicyGroupRequest
   * @returns ModifyPolicyGroupResponse
   */
  async modifyPolicyGroup(request: $_model.ModifyPolicyGroupRequest): Promise<$_model.ModifyPolicyGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyPolicyGroupWithOptions(request, runtime);
  }

  /**
   * Modifies a property template.
   * 
   * @remarks
   * When you modify a property template, the [](t3010125.xdita#)operation is not triggered. To apply the changes to cloud phones, you must call the [](t3010125.xdita#)operation separately.
   * 
   * @param tmpReq - ModifySystemPropertyTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifySystemPropertyTemplateResponse
   */
  async modifySystemPropertyTemplateWithOptions(tmpReq: $_model.ModifySystemPropertyTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifySystemPropertyTemplateResponse> {
    tmpReq.validate();
    let request = new $_model.ModifySystemPropertyTemplateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.systemPropertyInfo)) {
      request.systemPropertyInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.systemPropertyInfo, "SystemPropertyInfo", "json");
    }

    let query = { };
    if (!$dara.isNull(request.enableAuto)) {
      query["EnableAuto"] = request.enableAuto;
    }

    if (!$dara.isNull(request.filePath)) {
      query["FilePath"] = request.filePath;
    }

    if (!$dara.isNull(request.systemPropertyInfoShrink)) {
      query["SystemPropertyInfo"] = request.systemPropertyInfoShrink;
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
      action: "ModifySystemPropertyTemplate",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifySystemPropertyTemplateResponse>(await this.callApi(params, req, runtime), new $_model.ModifySystemPropertyTemplateResponse({}));
  }

  /**
   * Modifies a property template.
   * 
   * @remarks
   * When you modify a property template, the [](t3010125.xdita#)operation is not triggered. To apply the changes to cloud phones, you must call the [](t3010125.xdita#)operation separately.
   * 
   * @param request - ModifySystemPropertyTemplateRequest
   * @returns ModifySystemPropertyTemplateResponse
   */
  async modifySystemPropertyTemplate(request: $_model.ModifySystemPropertyTemplateRequest): Promise<$_model.ModifySystemPropertyTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifySystemPropertyTemplateWithOptions(request, runtime);
  }

  /**
   * Operates apps in a cloud phone, such as opening, closing, and reopening apps.
   * 
   * @remarks
   * This operation runs asynchronously. To check the operation result, visit the Task Center. To retrieve task details, call the [](t2740507.xdita#)operation.
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
   * This operation runs asynchronously. To check the operation result, visit the Task Center. To retrieve task details, call the [](t2740507.xdita#)operation.
   * 
   * @param request - OperateAppRequest
   * @returns OperateAppResponse
   */
  async operateApp(request: $_model.OperateAppRequest): Promise<$_model.OperateAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.operateAppWithOptions(request, runtime);
  }

  /**
   * Pauses running agent tasks on Mobile nodes.
   * 
   * @param request - PauseAgentTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PauseAgentTaskResponse
   */
  async pauseAgentTaskWithOptions(request: $_model.PauseAgentTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PauseAgentTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.taskIds)) {
      query["TaskIds"] = request.taskIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PauseAgentTask",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PauseAgentTaskResponse>(await this.callApi(params, req, runtime), new $_model.PauseAgentTaskResponse({}));
  }

  /**
   * Pauses running agent tasks on Mobile nodes.
   * 
   * @param request - PauseAgentTaskRequest
   * @returns PauseAgentTaskResponse
   */
  async pauseAgentTask(request: $_model.PauseAgentTaskRequest): Promise<$_model.PauseAgentTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.pauseAgentTaskWithOptions(request, runtime);
  }

  /**
   * Reboots (shuts down and then starts) Cloud Phone instances.
   * 
   * @remarks
   * You can reboot an instance only if its status is Active, Abnormal, Backup failed, or **Recover failed**.
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

    if (!$dara.isNull(request.ignoreParamValidation)) {
      query["IgnoreParamValidation"] = request.ignoreParamValidation;
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
   * Reboots (shuts down and then starts) Cloud Phone instances.
   * 
   * @remarks
   * You can reboot an instance only if its status is Active, Abnormal, Backup failed, or **Recover failed**.
   * 
   * @param request - RebootAndroidInstancesInGroupRequest
   * @returns RebootAndroidInstancesInGroupResponse
   */
  async rebootAndroidInstancesInGroup(request: $_model.RebootAndroidInstancesInGroupRequest): Promise<$_model.RebootAndroidInstancesInGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.rebootAndroidInstancesInGroupWithOptions(request, runtime);
  }

  /**
   * Restores a full instance backup to another cloud phone instance.
   * 
   * @remarks
   * 1. When you restore a full instance, the system restarts the instance to ensure a successful restoration. A restart is not required if you restore only applications and data. Make sure the instance is in an active state. Do not perform any operations on the instance during the restoration process. Otherwise, the restoration may fail.
   * 2. Ensure that the backup file can be used to restore the instance properly. After a restoration is complete, check that all your data is complete and all features are working properly. Do not delete the original backup file or reset the source instance until you have verified the restored data. Otherwise, you may lose your data.
   * 
   * @param request - RecoverAndroidInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecoverAndroidInstanceResponse
   */
  async recoverAndroidInstanceWithOptions(request: $_model.RecoverAndroidInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RecoverAndroidInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.androidInstanceIdList)) {
      query["AndroidInstanceIdList"] = request.androidInstanceIdList;
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
      action: "RecoverAndroidInstance",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RecoverAndroidInstanceResponse>(await this.callApi(params, req, runtime), new $_model.RecoverAndroidInstanceResponse({}));
  }

  /**
   * Restores a full instance backup to another cloud phone instance.
   * 
   * @remarks
   * 1. When you restore a full instance, the system restarts the instance to ensure a successful restoration. A restart is not required if you restore only applications and data. Make sure the instance is in an active state. Do not perform any operations on the instance during the restoration process. Otherwise, the restoration may fail.
   * 2. Ensure that the backup file can be used to restore the instance properly. After a restoration is complete, check that all your data is complete and all features are working properly. Do not delete the original backup file or reset the source instance until you have verified the restored data. Otherwise, you may lose your data.
   * 
   * @param request - RecoverAndroidInstanceRequest
   * @returns RecoverAndroidInstanceResponse
   */
  async recoverAndroidInstance(request: $_model.RecoverAndroidInstanceRequest): Promise<$_model.RecoverAndroidInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recoverAndroidInstanceWithOptions(request, runtime);
  }

  /**
   * Recovers an application from a backup file to another cloud phone instance.
   * 
   * @remarks
   * 1. A full instance recovery restarts the cloud phone. An application and data recovery does not require a restart. To ensure a successful recovery, make sure your cloud phone is in the active state. Do not perform any operations on the cloud phone during the recovery process. Otherwise, the recovery operation may fail.
   * 2. If the application being recovered already exists on the target cloud phone, the existing application is uninstalled before the backup version is installed. This prevents version conflicts.
   * 3. Ensure that your backup file can be used to recover the instance or application properly. After a recovery is complete, verify that your data is complete and all features work correctly. Do not delete the original backup file or reset the source instance until you have verified that the recovery was successful. Otherwise, there is risks that you lose some data.
   * 
   * @param request - RecoverAppRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecoverAppResponse
   */
  async recoverAppWithOptions(request: $_model.RecoverAppRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RecoverAppResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.androidInstanceIdList)) {
      query["AndroidInstanceIdList"] = request.androidInstanceIdList;
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
      action: "RecoverApp",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RecoverAppResponse>(await this.callApi(params, req, runtime), new $_model.RecoverAppResponse({}));
  }

  /**
   * Recovers an application from a backup file to another cloud phone instance.
   * 
   * @remarks
   * 1. A full instance recovery restarts the cloud phone. An application and data recovery does not require a restart. To ensure a successful recovery, make sure your cloud phone is in the active state. Do not perform any operations on the cloud phone during the recovery process. Otherwise, the recovery operation may fail.
   * 2. If the application being recovered already exists on the target cloud phone, the existing application is uninstalled before the backup version is installed. This prevents version conflicts.
   * 3. Ensure that your backup file can be used to recover the instance or application properly. After a recovery is complete, verify that your data is complete and all features work correctly. Do not delete the original backup file or reset the source instance until you have verified that the recovery was successful. Otherwise, there is risks that you lose some data.
   * 
   * @param request - RecoverAppRequest
   * @returns RecoverAppResponse
   */
  async recoverApp(request: $_model.RecoverAppRequest): Promise<$_model.RecoverAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recoverAppWithOptions(request, runtime);
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
   * Renews subscription Cloud Phone instance groups. If a subscription instance group expires, the system automatically deletes the instance group and its instances after 15 days. You cannot recover deleted resources. Renew your instance groups promptly to prevent resource loss.
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

    if (!$dara.isNull(request.paidCallBackUrl)) {
      query["PaidCallBackUrl"] = request.paidCallBackUrl;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.periodUnit)) {
      query["PeriodUnit"] = request.periodUnit;
    }

    if (!$dara.isNull(request.promotionId)) {
      query["PromotionId"] = request.promotionId;
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
   * Renews subscription Cloud Phone instance groups. If a subscription instance group expires, the system automatically deletes the instance group and its instances after 15 days. You cannot recover deleted resources. Renew your instance groups promptly to prevent resource loss.
   * 
   * @param request - RenewAndroidInstanceGroupsRequest
   * @returns RenewAndroidInstanceGroupsResponse
   */
  async renewAndroidInstanceGroups(request: $_model.RenewAndroidInstanceGroupsRequest): Promise<$_model.RenewAndroidInstanceGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.renewAndroidInstanceGroupsWithOptions(request, runtime);
  }

  /**
   * Renews the specified cloud phone matrices.
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

    if (!$dara.isNull(request.paidCallBackUrl)) {
      query["PaidCallBackUrl"] = request.paidCallBackUrl;
    }

    if (!$dara.isNull(request.promotionId)) {
      query["PromotionId"] = request.promotionId;
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
   * Renews the specified cloud phone matrices.
   * 
   * @param request - RenewCloudPhoneNodesRequest
   * @returns RenewCloudPhoneNodesResponse
   */
  async renewCloudPhoneNodes(request: $_model.RenewCloudPhoneNodesRequest): Promise<$_model.RenewCloudPhoneNodesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.renewCloudPhoneNodesWithOptions(request, runtime);
  }

  /**
   * Renews a mobile agent package.
   * 
   * @param request - RenewMobileAgentPackageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RenewMobileAgentPackageResponse
   */
  async renewMobileAgentPackageWithOptions(request: $_model.RenewMobileAgentPackageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RenewMobileAgentPackageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!$dara.isNull(request.autoRenew)) {
      query["AutoRenew"] = request.autoRenew;
    }

    if (!$dara.isNull(request.mobileAgentPackageIds)) {
      query["MobileAgentPackageIds"] = request.mobileAgentPackageIds;
    }

    if (!$dara.isNull(request.paidCallbackUrl)) {
      query["PaidCallbackUrl"] = request.paidCallbackUrl;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.periodUnit)) {
      query["PeriodUnit"] = request.periodUnit;
    }

    if (!$dara.isNull(request.promotionId)) {
      query["PromotionId"] = request.promotionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RenewMobileAgentPackage",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RenewMobileAgentPackageResponse>(await this.callApi(params, req, runtime), new $_model.RenewMobileAgentPackageResponse({}));
  }

  /**
   * Renews a mobile agent package.
   * 
   * @param request - RenewMobileAgentPackageRequest
   * @returns RenewMobileAgentPackageResponse
   */
  async renewMobileAgentPackage(request: $_model.RenewMobileAgentPackageRequest): Promise<$_model.RenewMobileAgentPackageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.renewMobileAgentPackageWithOptions(request, runtime);
  }

  /**
   * Resets the instance by reinstalling the operating system using its original image. Note: The reset operation will fail if the image that was used to create the Cloud Phone has since been deleted.
   * 
   * @remarks
   * You can reset an instance (initialize its system) only when the instance is Active, Stopped, Abnormal, Backup Failed, or **Recover Failed**.
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

    if (!$dara.isNull(request.ignoreParamValidation)) {
      query["IgnoreParamValidation"] = request.ignoreParamValidation;
    }

    if (!$dara.isNull(request.saleMode)) {
      query["SaleMode"] = request.saleMode;
    }

    if (!$dara.isNull(request.settingResetType)) {
      query["SettingResetType"] = request.settingResetType;
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
   * Resets the instance by reinstalling the operating system using its original image. Note: The reset operation will fail if the image that was used to create the Cloud Phone has since been deleted.
   * 
   * @remarks
   * You can reset an instance (initialize its system) only when the instance is Active, Stopped, Abnormal, Backup Failed, or **Recover Failed**.
   * 
   * @param request - ResetAndroidInstancesInGroupRequest
   * @returns ResetAndroidInstancesInGroupResponse
   */
  async resetAndroidInstancesInGroup(request: $_model.ResetAndroidInstancesInGroupRequest): Promise<$_model.ResetAndroidInstancesInGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resetAndroidInstancesInGroupWithOptions(request, runtime);
  }

  /**
   * Resumes paused agent automation tasks on a mobile instance.
   * 
   * @param request - ResumeAgentTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResumeAgentTaskResponse
   */
  async resumeAgentTaskWithOptions(request: $_model.ResumeAgentTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ResumeAgentTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.additionalPrompt)) {
      query["AdditionalPrompt"] = request.additionalPrompt;
    }

    if (!$dara.isNull(request.taskIds)) {
      query["TaskIds"] = request.taskIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResumeAgentTask",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResumeAgentTaskResponse>(await this.callApi(params, req, runtime), new $_model.ResumeAgentTaskResponse({}));
  }

  /**
   * Resumes paused agent automation tasks on a mobile instance.
   * 
   * @param request - ResumeAgentTaskRequest
   * @returns ResumeAgentTaskResponse
   */
  async resumeAgentTask(request: $_model.ResumeAgentTaskRequest): Promise<$_model.ResumeAgentTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resumeAgentTaskWithOptions(request, runtime);
  }

  /**
   * Triggers an Agent on a mobile node to run an AI-powered automation task.
   * 
   * @param request - RunAgentTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunAgentTaskResponse
   */
  async runAgentTaskWithOptions(request: $_model.RunAgentTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RunAgentTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizRegionId)) {
      query["BizRegionId"] = request.bizRegionId;
    }

    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.maxSteps)) {
      query["MaxSteps"] = request.maxSteps;
    }

    if (!$dara.isNull(request.timeoutSeconds)) {
      query["TimeoutSeconds"] = request.timeoutSeconds;
    }

    if (!$dara.isNull(request.userPrompt)) {
      query["UserPrompt"] = request.userPrompt;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunAgentTask",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RunAgentTaskResponse>(await this.callApi(params, req, runtime), new $_model.RunAgentTaskResponse({}));
  }

  /**
   * Triggers an Agent on a mobile node to run an AI-powered automation task.
   * 
   * @param request - RunAgentTaskRequest
   * @returns RunAgentTaskResponse
   */
  async runAgentTask(request: $_model.RunAgentTaskRequest): Promise<$_model.RunAgentTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.runAgentTaskWithOptions(request, runtime);
  }

  /**
   * Runs a command on one or more cloud phone instances.
   * 
   * @param request - RunCommandRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunCommandResponse
   */
  async runCommandWithOptions(request: $_model.RunCommandRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RunCommandResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentType)) {
      query["AgentType"] = request.agentType;
    }

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
   * Runs a command on one or more cloud phone instances.
   * 
   * @param request - RunCommandRequest
   * @returns RunCommandResponse
   */
  async runCommand(request: $_model.RunCommandRequest): Promise<$_model.RunCommandResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.runCommandWithOptions(request, runtime);
  }

  /**
   * Runs a synchronous command on one or more Cloud Phone instances and returns the execution result.
   * 
   * @remarks
   * The `RunSyncCommand` operation is designed for commands that return a result quickly, typically within milliseconds. For longer-running commands that may take several seconds, we recommend using the asynchronous [](t2729835.xdita#)operation.
   * 
   * @param request - RunSyncCommandRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunSyncCommandResponse
   */
  async runSyncCommandWithOptions(request: $_model.RunSyncCommandRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RunSyncCommandResponse> {
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

    if (!$dara.isNull(request.waitTime)) {
      query["WaitTime"] = request.waitTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunSyncCommand",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RunSyncCommandResponse>(await this.callApi(params, req, runtime), new $_model.RunSyncCommandResponse({}));
  }

  /**
   * Runs a synchronous command on one or more Cloud Phone instances and returns the execution result.
   * 
   * @remarks
   * The `RunSyncCommand` operation is designed for commands that return a result quickly, typically within milliseconds. For longer-running commands that may take several seconds, we recommend using the asynchronous [](t2729835.xdita#)operation.
   * 
   * @param request - RunSyncCommandRequest
   * @returns RunSyncCommandResponse
   */
  async runSyncCommand(request: $_model.RunSyncCommandRequest): Promise<$_model.RunSyncCommandResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.runSyncCommandWithOptions(request, runtime);
  }

  /**
   * Pushes files from Object Storage Service (OSS) or a public download link to one or more cloud phones.
   * 
   * @remarks
   * Use this operation to send files or folders from Object Storage Service (OSS) to cloud phones.
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

    if (!$dara.isNull(request.autoInstall)) {
      query["AutoInstall"] = request.autoInstall;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.fileMd5)) {
      query["FileMd5"] = request.fileMd5;
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
   * Pushes files from Object Storage Service (OSS) or a public download link to one or more cloud phones.
   * 
   * @remarks
   * Use this operation to send files or folders from Object Storage Service (OSS) to cloud phones.
   * 
   * @param request - SendFileRequest
   * @returns SendFileResponse
   */
  async sendFile(request: $_model.SendFileRequest): Promise<$_model.SendFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.sendFileWithOptions(request, runtime);
  }

  /**
   * Sends a property template to cloud phone instances and, based on the template, sets properties in the Android system using the setprop command. An APK or a related program can read these property values. If you specify multiple template IDs, the property templates are randomly sent to the cloud phone instances.
   * 
   * @param request - SendSystemPropertyTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SendSystemPropertyTemplateResponse
   */
  async sendSystemPropertyTemplateWithOptions(request: $_model.SendSystemPropertyTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SendSystemPropertyTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.templateIds)) {
      query["TemplateIds"] = request.templateIds;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.androidInstanceIds)) {
      body["AndroidInstanceIds"] = request.androidInstanceIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SendSystemPropertyTemplate",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SendSystemPropertyTemplateResponse>(await this.callApi(params, req, runtime), new $_model.SendSystemPropertyTemplateResponse({}));
  }

  /**
   * Sends a property template to cloud phone instances and, based on the template, sets properties in the Android system using the setprop command. An APK or a related program can read these property values. If you specify multiple template IDs, the property templates are randomly sent to the cloud phone instances.
   * 
   * @param request - SendSystemPropertyTemplateRequest
   * @returns SendSystemPropertyTemplateResponse
   */
  async sendSystemPropertyTemplate(request: $_model.SendSystemPropertyTemplateRequest): Promise<$_model.SendSystemPropertyTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.sendSystemPropertyTemplateWithOptions(request, runtime);
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
   * Adds or purges IP addresses and domain names from the network access blacklist.
   * 
   * @remarks
   * - This operation requires image version 26.01 or later.
   * - This API call synchronously updates the IP address blacklist and the domain name blacklist.
   * - The IP address blacklist supports individual IP addresses and IP address segments. The update overwrites the existing configuration. If you pass an empty string (""), all configured IP blacklist entries are purged.
   * - The domain name blacklist supports only exact matches and does not support regular expressions. If you pass an empty string (""), all configured domain name blacklist entries are purged.
   * - After you change the configuration, restart the cloud phone to apply the new blacklist rules. Note that these rules may not take effect if you use an agent.
   * 
   * @param request - SetNetworkBlacklistRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetNetworkBlacklistResponse
   */
  async setNetworkBlacklistWithOptions(request: $_model.SetNetworkBlacklistRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetNetworkBlacklistResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainBlacklist)) {
      query["DomainBlacklist"] = request.domainBlacklist;
    }

    if (!$dara.isNull(request.ipBlacklist)) {
      query["IpBlacklist"] = request.ipBlacklist;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetNetworkBlacklist",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetNetworkBlacklistResponse>(await this.callApi(params, req, runtime), new $_model.SetNetworkBlacklistResponse({}));
  }

  /**
   * Adds or purges IP addresses and domain names from the network access blacklist.
   * 
   * @remarks
   * - This operation requires image version 26.01 or later.
   * - This API call synchronously updates the IP address blacklist and the domain name blacklist.
   * - The IP address blacklist supports individual IP addresses and IP address segments. The update overwrites the existing configuration. If you pass an empty string (""), all configured IP blacklist entries are purged.
   * - The domain name blacklist supports only exact matches and does not support regular expressions. If you pass an empty string (""), all configured domain name blacklist entries are purged.
   * - After you change the configuration, restart the cloud phone to apply the new blacklist rules. Note that these rules may not take effect if you use an agent.
   * 
   * @param request - SetNetworkBlacklistRequest
   * @returns SetNetworkBlacklistResponse
   */
  async setNetworkBlacklist(request: $_model.SetNetworkBlacklistRequest): Promise<$_model.SetNetworkBlacklistResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setNetworkBlacklistWithOptions(request, runtime);
  }

  /**
   * Start cloud phone instances.
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
   * Start cloud phone instances.
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
   * Enables the Android Debug Bridge (ADB) connection for an instance and creates an Internet mapping rule for its ADB port. This feature is available only for standard networks.
   * 
   * @remarks
   * This feature can be enabled when the instance is not in the **UNAVAILABLE** state and has a **private IP address** assigned.
   * 
   * @param request - StartInstanceAdbRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartInstanceAdbResponse
   */
  async startInstanceAdbWithOptions(request: $_model.StartInstanceAdbRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartInstanceAdbResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartInstanceAdb",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartInstanceAdbResponse>(await this.callApi(params, req, runtime), new $_model.StartInstanceAdbResponse({}));
  }

  /**
   * Enables the Android Debug Bridge (ADB) connection for an instance and creates an Internet mapping rule for its ADB port. This feature is available only for standard networks.
   * 
   * @remarks
   * This feature can be enabled when the instance is not in the **UNAVAILABLE** state and has a **private IP address** assigned.
   * 
   * @param request - StartInstanceAdbRequest
   * @returns StartInstanceAdbResponse
   */
  async startInstanceAdb(request: $_model.StartInstanceAdbRequest): Promise<$_model.StartInstanceAdbResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startInstanceAdbWithOptions(request, runtime);
  }

  /**
   * Stops (shuts down) an Android instance.
   * 
   * @remarks
   * An instance can be stopped only if it is in the Active, Backup Failed, or **Recover Failed** status.
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
   * Stops (shuts down) an Android instance.
   * 
   * @remarks
   * An instance can be stopped only if it is in the Active, Backup Failed, or **Recover Failed** status.
   * 
   * @param request - StopAndroidInstanceRequest
   * @returns StopAndroidInstanceResponse
   */
  async stopAndroidInstance(request: $_model.StopAndroidInstanceRequest): Promise<$_model.StopAndroidInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopAndroidInstanceWithOptions(request, runtime);
  }

  /**
   * Disables the ADB connection for an Android instance and deletes its ADB port forwarding rules. This operation applies only to standard networks.
   * 
   * @param request - StopInstanceAdbRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopInstanceAdbResponse
   */
  async stopInstanceAdbWithOptions(request: $_model.StopInstanceAdbRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopInstanceAdbResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopInstanceAdb",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopInstanceAdbResponse>(await this.callApi(params, req, runtime), new $_model.StopInstanceAdbResponse({}));
  }

  /**
   * Disables the ADB connection for an Android instance and deletes its ADB port forwarding rules. This operation applies only to standard networks.
   * 
   * @param request - StopInstanceAdbRequest
   * @returns StopInstanceAdbResponse
   */
  async stopInstanceAdb(request: $_model.StopInstanceAdbRequest): Promise<$_model.StopInstanceAdbResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopInstanceAdbWithOptions(request, runtime);
  }

  /**
   * Adds tags to one or more cloud phones.
   * 
   * @param request - TagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagResourcesResponse
   */
  async tagResourcesWithOptions(request: $_model.TagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TagResourcesResponse> {
    request.validate();
    let query = { };
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
      version: "2023-09-30",
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
   * Adds tags to one or more cloud phones.
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: $_model.TagResourcesRequest): Promise<$_model.TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * Uninstalls applications from one or more Cloud Phone instances.
   * 
   * @remarks
   * This is an asynchronous operation. You can query the task status in the Task Hub by calling [DescribeTasks](~~DescribeTasks~~).
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
   * Uninstalls applications from one or more Cloud Phone instances.
   * 
   * @remarks
   * This is an asynchronous operation. You can query the task status in the Task Hub by calling [DescribeTasks](~~DescribeTasks~~).
   * 
   * @param request - UninstallAppRequest
   * @returns UninstallAppResponse
   */
  async uninstallApp(request: $_model.UninstallAppRequest): Promise<$_model.UninstallAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.uninstallAppWithOptions(request, runtime);
  }

  /**
   * Uninstalls the monitoring plugin.
   * 
   * @param request - UninstallMonitorAgentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UninstallMonitorAgentResponse
   */
  async uninstallMonitorAgentWithOptions(request: $_model.UninstallMonitorAgentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UninstallMonitorAgentResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.androidInstanceIds)) {
      body["AndroidInstanceIds"] = request.androidInstanceIds;
    }

    if (!$dara.isNull(request.saleMode)) {
      body["SaleMode"] = request.saleMode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UninstallMonitorAgent",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UninstallMonitorAgentResponse>(await this.callApi(params, req, runtime), new $_model.UninstallMonitorAgentResponse({}));
  }

  /**
   * Uninstalls the monitoring plugin.
   * 
   * @param request - UninstallMonitorAgentRequest
   * @returns UninstallMonitorAgentResponse
   */
  async uninstallMonitorAgent(request: $_model.UninstallMonitorAgentRequest): Promise<$_model.UninstallMonitorAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.uninstallMonitorAgentWithOptions(request, runtime);
  }

  /**
   * Removes tags from cloud phones. If a tag is no longer associated with any cloud phone after it is removed, the tag is automatically deleted.
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
      version: "2023-09-30",
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
   * Removes tags from cloud phones. If a tag is no longer associated with any cloud phone after it is removed, the tag is automatically deleted.
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: $_model.UntagResourcesRequest): Promise<$_model.UntagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
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
   * Updates the image of an instance group. This update affects all instances in the group.
   * 
   * @remarks
   * The image and the instance group must be in the active state. The image must be available in the same region as the instance group.
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
   * Updates the image of an instance group. This update affects all instances in the group.
   * 
   * @remarks
   * The image and the instance group must be in the active state. The image must be available in the same region as the instance group.
   * 
   * @param request - UpdateInstanceGroupImageRequest
   * @returns UpdateInstanceGroupImageResponse
   */
  async updateInstanceGroupImage(request: $_model.UpdateInstanceGroupImageRequest): Promise<$_model.UpdateInstanceGroupImageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateInstanceGroupImageWithOptions(request, runtime);
  }

  /**
   * Changes the image of an instance in a cloud phone matrix. You can change the image for an instance only when the instance is in the Running, Stopped, or Failed to change the image state. The GPU vendor of the target image must match the GPU vendor of the server where the instance runs. If you change the image across major versions, such as from Android 10 to Android 12, the system clears all data. This operation is equivalent to changing the image and then resetting the instance.
   * 
   * @remarks
   * <props="china">You can change images only for cloud phone matrix instances. Other instance types are not supported.<props="intl">This feature is not available on the Alibaba Cloud international site (www\\.alibabacloud.com).
   * 
   * @param request - UpdateInstanceImageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateInstanceImageResponse
   */
  async updateInstanceImageWithOptions(request: $_model.UpdateInstanceImageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateInstanceImageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ignoreParamValidation)) {
      query["IgnoreParamValidation"] = request.ignoreParamValidation;
    }

    if (!$dara.isNull(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!$dara.isNull(request.instanceIdList)) {
      query["InstanceIdList"] = request.instanceIdList;
    }

    if (!$dara.isNull(request.reset)) {
      query["Reset"] = request.reset;
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
   * Changes the image of an instance in a cloud phone matrix. You can change the image for an instance only when the instance is in the Running, Stopped, or Failed to change the image state. The GPU vendor of the target image must match the GPU vendor of the server where the instance runs. If you change the image across major versions, such as from Android 10 to Android 12, the system clears all data. This operation is equivalent to changing the image and then resetting the instance.
   * 
   * @remarks
   * <props="china">You can change images only for cloud phone matrix instances. Other instance types are not supported.<props="intl">This feature is not available on the Alibaba Cloud international site (www\\.alibabacloud.com).
   * 
   * @param request - UpdateInstanceImageRequest
   * @returns UpdateInstanceImageResponse
   */
  async updateInstanceImage(request: $_model.UpdateInstanceImageRequest): Promise<$_model.UpdateInstanceImageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateInstanceImageWithOptions(request, runtime);
  }

  /**
   * Upgrades an instance group. This operation only supports scaling out an instance group, which increases the number of instances.
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

    if (!$dara.isNull(request.paidCallBackUrl)) {
      query["PaidCallBackUrl"] = request.paidCallBackUrl;
    }

    if (!$dara.isNull(request.promotionId)) {
      query["PromotionId"] = request.promotionId;
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
   * Upgrades an instance group. This operation only supports scaling out an instance group, which increases the number of instances.
   * 
   * @param request - UpgradeAndroidInstanceGroupRequest
   * @returns UpgradeAndroidInstanceGroupResponse
   */
  async upgradeAndroidInstanceGroup(request: $_model.UpgradeAndroidInstanceGroupRequest): Promise<$_model.UpgradeAndroidInstanceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.upgradeAndroidInstanceGroupWithOptions(request, runtime);
  }

}
