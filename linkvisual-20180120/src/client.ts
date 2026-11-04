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
      'ap-northeast-1': "linkvisual.aliyuncs.com",
      'ap-northeast-2-pop': "linkvisual.aliyuncs.com",
      'ap-south-1': "linkvisual.aliyuncs.com",
      'ap-southeast-1': "linkvisual.aliyuncs.com",
      'ap-southeast-2': "linkvisual.aliyuncs.com",
      'ap-southeast-3': "linkvisual.aliyuncs.com",
      'ap-southeast-5': "linkvisual.aliyuncs.com",
      'cn-beijing': "linkvisual.aliyuncs.com",
      'cn-beijing-finance-1': "linkvisual.aliyuncs.com",
      'cn-beijing-finance-pop': "linkvisual.aliyuncs.com",
      'cn-beijing-gov-1': "linkvisual.aliyuncs.com",
      'cn-beijing-nu16-b01': "linkvisual.aliyuncs.com",
      'cn-chengdu': "linkvisual.aliyuncs.com",
      'cn-edge-1': "linkvisual.aliyuncs.com",
      'cn-fujian': "linkvisual.aliyuncs.com",
      'cn-haidian-cm12-c01': "linkvisual.aliyuncs.com",
      'cn-hangzhou-bj-b01': "linkvisual.aliyuncs.com",
      'cn-hangzhou-finance': "linkvisual.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "linkvisual.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "linkvisual.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "linkvisual.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "linkvisual.aliyuncs.com",
      'cn-hangzhou-test-306': "linkvisual.aliyuncs.com",
      'cn-hongkong': "linkvisual.aliyuncs.com",
      'cn-hongkong-finance-pop': "linkvisual.aliyuncs.com",
      'cn-huhehaote': "linkvisual.aliyuncs.com",
      'cn-north-2-gov-1': "linkvisual.aliyuncs.com",
      'cn-qingdao': "linkvisual.aliyuncs.com",
      'cn-qingdao-nebula': "linkvisual.aliyuncs.com",
      'cn-shanghai-et15-b01': "linkvisual.aliyuncs.com",
      'cn-shanghai-et2-b01': "linkvisual.aliyuncs.com",
      'cn-shanghai-finance-1': "linkvisual.aliyuncs.com",
      'cn-shanghai-inner': "linkvisual.aliyuncs.com",
      'cn-shanghai-internal-test-1': "linkvisual.aliyuncs.com",
      'cn-shenzhen': "linkvisual.aliyuncs.com",
      'cn-shenzhen-finance-1': "linkvisual.aliyuncs.com",
      'cn-shenzhen-inner': "linkvisual.aliyuncs.com",
      'cn-shenzhen-st4-d01': "linkvisual.aliyuncs.com",
      'cn-shenzhen-su18-b01': "linkvisual.aliyuncs.com",
      'cn-wuhan': "linkvisual.aliyuncs.com",
      'cn-yushanfang': "linkvisual.aliyuncs.com",
      'cn-zhangbei-na61-b01': "linkvisual.aliyuncs.com",
      'cn-zhangjiakou': "linkvisual.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "linkvisual.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "linkvisual.aliyuncs.com",
      'eu-central-1': "linkvisual.aliyuncs.com",
      'eu-west-1': "linkvisual.aliyuncs.com",
      'eu-west-1-oxs': "linkvisual.aliyuncs.com",
      'me-east-1': "linkvisual.aliyuncs.com",
      'rus-west-1-pop': "linkvisual.aliyuncs.com",
      'us-east-1': "linkvisual.aliyuncs.com",
      'us-west-1': "linkvisual.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("linkvisual", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Creates an intelligent alert event recording plan for an IP camera.
   * 
   * @param request - AddEventRecordPlanDeviceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddEventRecordPlanDeviceResponse
   */
  async addEventRecordPlanDeviceWithOptions(request: $_model.AddEventRecordPlanDeviceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddEventRecordPlanDeviceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!$dara.isNull(request.iotId)) {
      query["IotId"] = request.iotId;
    }

    if (!$dara.isNull(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!$dara.isNull(request.planId)) {
      query["PlanId"] = request.planId;
    }

    if (!$dara.isNull(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    if (!$dara.isNull(request.streamType)) {
      query["StreamType"] = request.streamType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddEventRecordPlanDevice",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddEventRecordPlanDeviceResponse>(await this.callApi(params, req, runtime), new $_model.AddEventRecordPlanDeviceResponse({}));
  }

  /**
   * Creates an intelligent alert event recording plan for an IP camera.
   * 
   * @param request - AddEventRecordPlanDeviceRequest
   * @returns AddEventRecordPlanDeviceResponse
   */
  async addEventRecordPlanDevice(request: $_model.AddEventRecordPlanDeviceRequest): Promise<$_model.AddEventRecordPlanDeviceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addEventRecordPlanDeviceWithOptions(request, runtime);
  }

  /**
   * Creates a device group for the face library.
   * 
   * @remarks
   * ## Usage notes
   * - The maximum queries per second (QPS) for a single Alibaba Cloud account to invoke this API operation is 100.
   *     > Resource Access Management (RAM) users share the quota of the Alibaba Cloud account.
   * - After you invoke this API operation, the system returns the ID of the device group (**DeviceGroupId**). Save this value locally for use when invoking other API operations.
   * 
   * @param request - AddFaceDeviceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddFaceDeviceGroupResponse
   */
  async addFaceDeviceGroupWithOptions(request: $_model.AddFaceDeviceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddFaceDeviceGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deviceGroupName)) {
      query["DeviceGroupName"] = request.deviceGroupName;
    }

    if (!$dara.isNull(request.isolationId)) {
      query["IsolationId"] = request.isolationId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddFaceDeviceGroup",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddFaceDeviceGroupResponse>(await this.callApi(params, req, runtime), new $_model.AddFaceDeviceGroupResponse({}));
  }

  /**
   * Creates a device group for the face library.
   * 
   * @remarks
   * ## Usage notes
   * - The maximum queries per second (QPS) for a single Alibaba Cloud account to invoke this API operation is 100.
   *     > Resource Access Management (RAM) users share the quota of the Alibaba Cloud account.
   * - After you invoke this API operation, the system returns the ID of the device group (**DeviceGroupId**). Save this value locally for use when invoking other API operations.
   * 
   * @param request - AddFaceDeviceGroupRequest
   * @returns AddFaceDeviceGroupResponse
   */
  async addFaceDeviceGroup(request: $_model.AddFaceDeviceGroupRequest): Promise<$_model.AddFaceDeviceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addFaceDeviceGroupWithOptions(request, runtime);
  }

  /**
   * Adds a device to a device group.
   * 
   * @param request - AddFaceDeviceToDeviceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddFaceDeviceToDeviceGroupResponse
   */
  async addFaceDeviceToDeviceGroupWithOptions(request: $_model.AddFaceDeviceToDeviceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddFaceDeviceToDeviceGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deviceGroupId)) {
      query["DeviceGroupId"] = request.deviceGroupId;
    }

    if (!$dara.isNull(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!$dara.isNull(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!$dara.isNull(request.isolationId)) {
      query["IsolationId"] = request.isolationId;
    }

    if (!$dara.isNull(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddFaceDeviceToDeviceGroup",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddFaceDeviceToDeviceGroupResponse>(await this.callApi(params, req, runtime), new $_model.AddFaceDeviceToDeviceGroupResponse({}));
  }

  /**
   * Adds a device to a device group.
   * 
   * @param request - AddFaceDeviceToDeviceGroupRequest
   * @returns AddFaceDeviceToDeviceGroupResponse
   */
  async addFaceDeviceToDeviceGroup(request: $_model.AddFaceDeviceToDeviceGroupRequest): Promise<$_model.AddFaceDeviceToDeviceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addFaceDeviceToDeviceGroupWithOptions(request, runtime);
  }

  /**
   * Adds a user to the face database.
   * 
   * @remarks
   * ## Usage notes
   * - The maximum queries per second (QPS) for a single Alibaba Cloud account to invoke this API operation is 100.
   *     > Resource Access Management (RAM) users share the quota of the Alibaba Cloud account.
   * - Configure a URL for downloading the user\\"s face image in advance.
   *     > Only JPEG and JPG image formats are supported, and the image URL cannot contain Chinese characters.
   * - After you invoke this API operation, the system returns a user ID (**UserId**). Save this value locally for use when you invoke other API operations.
   * 
   * @param request - AddFaceUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddFaceUserResponse
   */
  async addFaceUserWithOptions(request: $_model.AddFaceUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddFaceUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.customUserId)) {
      query["CustomUserId"] = request.customUserId;
    }

    if (!$dara.isNull(request.facePicUrl)) {
      query["FacePicUrl"] = request.facePicUrl;
    }

    if (!$dara.isNull(request.isolationId)) {
      query["IsolationId"] = request.isolationId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.params)) {
      query["Params"] = request.params;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddFaceUser",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddFaceUserResponse>(await this.callApi(params, req, runtime), new $_model.AddFaceUserResponse({}));
  }

  /**
   * Adds a user to the face database.
   * 
   * @remarks
   * ## Usage notes
   * - The maximum queries per second (QPS) for a single Alibaba Cloud account to invoke this API operation is 100.
   *     > Resource Access Management (RAM) users share the quota of the Alibaba Cloud account.
   * - Configure a URL for downloading the user\\"s face image in advance.
   *     > Only JPEG and JPG image formats are supported, and the image URL cannot contain Chinese characters.
   * - After you invoke this API operation, the system returns a user ID (**UserId**). Save this value locally for use when you invoke other API operations.
   * 
   * @param request - AddFaceUserRequest
   * @returns AddFaceUserResponse
   */
  async addFaceUser(request: $_model.AddFaceUserRequest): Promise<$_model.AddFaceUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addFaceUserWithOptions(request, runtime);
  }

  /**
   * Creates a user group.
   * 
   * @remarks
   * ## Usage notes
   * - The maximum queries per second (QPS) limit for a single Alibaba Cloud account to invoke this API operation is 100.
   *     > Resource Access Management (RAM) users share the quota of the Alibaba Cloud account.
   * - After you invoke this API operation, the system returns the ID of the user group (**UserGroupId**). Save this value locally for use when you invoke other API operations.
   * 
   * @param request - AddFaceUserGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddFaceUserGroupResponse
   */
  async addFaceUserGroupWithOptions(request: $_model.AddFaceUserGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddFaceUserGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.isolationId)) {
      query["IsolationId"] = request.isolationId;
    }

    if (!$dara.isNull(request.userGroupName)) {
      query["UserGroupName"] = request.userGroupName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddFaceUserGroup",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddFaceUserGroupResponse>(await this.callApi(params, req, runtime), new $_model.AddFaceUserGroupResponse({}));
  }

  /**
   * Creates a user group.
   * 
   * @remarks
   * ## Usage notes
   * - The maximum queries per second (QPS) limit for a single Alibaba Cloud account to invoke this API operation is 100.
   *     > Resource Access Management (RAM) users share the quota of the Alibaba Cloud account.
   * - After you invoke this API operation, the system returns the ID of the user group (**UserGroupId**). Save this value locally for use when you invoke other API operations.
   * 
   * @param request - AddFaceUserGroupRequest
   * @returns AddFaceUserGroupResponse
   */
  async addFaceUserGroup(request: $_model.AddFaceUserGroupRequest): Promise<$_model.AddFaceUserGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addFaceUserGroupWithOptions(request, runtime);
  }

  /**
   * Adds a face synchronization relationship between a user group and a device group.
   * 
   * @param request - AddFaceUserGroupAndDeviceGroupRelationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddFaceUserGroupAndDeviceGroupRelationResponse
   */
  async addFaceUserGroupAndDeviceGroupRelationWithOptions(request: $_model.AddFaceUserGroupAndDeviceGroupRelationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddFaceUserGroupAndDeviceGroupRelationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deviceGroupId)) {
      query["DeviceGroupId"] = request.deviceGroupId;
    }

    if (!$dara.isNull(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!$dara.isNull(request.isolationId)) {
      query["IsolationId"] = request.isolationId;
    }

    if (!$dara.isNull(request.relation)) {
      query["Relation"] = request.relation;
    }

    if (!$dara.isNull(request.userGroupId)) {
      query["UserGroupId"] = request.userGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddFaceUserGroupAndDeviceGroupRelation",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddFaceUserGroupAndDeviceGroupRelationResponse>(await this.callApi(params, req, runtime), new $_model.AddFaceUserGroupAndDeviceGroupRelationResponse({}));
  }

  /**
   * Adds a face synchronization relationship between a user group and a device group.
   * 
   * @param request - AddFaceUserGroupAndDeviceGroupRelationRequest
   * @returns AddFaceUserGroupAndDeviceGroupRelationResponse
   */
  async addFaceUserGroupAndDeviceGroupRelation(request: $_model.AddFaceUserGroupAndDeviceGroupRelationRequest): Promise<$_model.AddFaceUserGroupAndDeviceGroupRelationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addFaceUserGroupAndDeviceGroupRelationWithOptions(request, runtime);
  }

  /**
   * Adds a face image for a user in the face database.
   * 
   * @remarks
   * ## Usage notes
   * - The maximum queries per second (QPS) for a single Alibaba Cloud account to invoke this API operation is 100.
   *     > Resource Access Management (RAM) users share the quota of the Alibaba Cloud account.
   * - Configure a download URL for the user\\"s face image in advance.
   *     > Only images in JPEG and JPG format are supported, and the image URL cannot contain Chinese characters.
   * - After you invoke this API operation, the system returns the unique identity (**Data**) of the user\\"s face image. Save this value locally for use when you invoke other API operations.
   * 
   * @param request - AddFaceUserPictureRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddFaceUserPictureResponse
   */
  async addFaceUserPictureWithOptions(request: $_model.AddFaceUserPictureRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddFaceUserPictureResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.facePicUrl)) {
      query["FacePicUrl"] = request.facePicUrl;
    }

    if (!$dara.isNull(request.isolationId)) {
      query["IsolationId"] = request.isolationId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddFaceUserPicture",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddFaceUserPictureResponse>(await this.callApi(params, req, runtime), new $_model.AddFaceUserPictureResponse({}));
  }

  /**
   * Adds a face image for a user in the face database.
   * 
   * @remarks
   * ## Usage notes
   * - The maximum queries per second (QPS) for a single Alibaba Cloud account to invoke this API operation is 100.
   *     > Resource Access Management (RAM) users share the quota of the Alibaba Cloud account.
   * - Configure a download URL for the user\\"s face image in advance.
   *     > Only images in JPEG and JPG format are supported, and the image URL cannot contain Chinese characters.
   * - After you invoke this API operation, the system returns the unique identity (**Data**) of the user\\"s face image. Save this value locally for use when you invoke other API operations.
   * 
   * @param request - AddFaceUserPictureRequest
   * @returns AddFaceUserPictureResponse
   */
  async addFaceUserPicture(request: $_model.AddFaceUserPictureRequest): Promise<$_model.AddFaceUserPictureResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addFaceUserPictureWithOptions(request, runtime);
  }

  /**
   * Adds a user to a user group.
   * 
   * @remarks
   * ## Limits
   * The maximum queries per second (QPS) for a single Alibaba Cloud account to invoke this operation is 100.
   *     > Resource Access Management (RAM) users share the quota of the Alibaba Cloud account.
   * 
   * @param request - AddFaceUserToUserGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddFaceUserToUserGroupResponse
   */
  async addFaceUserToUserGroupWithOptions(request: $_model.AddFaceUserToUserGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddFaceUserToUserGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.isolationId)) {
      query["IsolationId"] = request.isolationId;
    }

    if (!$dara.isNull(request.userGroupId)) {
      query["UserGroupId"] = request.userGroupId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddFaceUserToUserGroup",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddFaceUserToUserGroupResponse>(await this.callApi(params, req, runtime), new $_model.AddFaceUserToUserGroupResponse({}));
  }

  /**
   * Adds a user to a user group.
   * 
   * @remarks
   * ## Limits
   * The maximum queries per second (QPS) for a single Alibaba Cloud account to invoke this operation is 100.
   *     > Resource Access Management (RAM) users share the quota of the Alibaba Cloud account.
   * 
   * @param request - AddFaceUserToUserGroupRequest
   * @returns AddFaceUserToUserGroupResponse
   */
  async addFaceUserToUserGroup(request: $_model.AddFaceUserToUserGroupRequest): Promise<$_model.AddFaceUserToUserGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addFaceUserToUserGroupWithOptions(request, runtime);
  }

  /**
   * Adds a continuous recording plan for an IPC device.
   * 
   * @param request - AddRecordPlanDeviceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddRecordPlanDeviceResponse
   */
  async addRecordPlanDeviceWithOptions(request: $_model.AddRecordPlanDeviceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddRecordPlanDeviceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!$dara.isNull(request.iotId)) {
      query["IotId"] = request.iotId;
    }

    if (!$dara.isNull(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!$dara.isNull(request.planId)) {
      query["PlanId"] = request.planId;
    }

    if (!$dara.isNull(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    if (!$dara.isNull(request.streamType)) {
      query["StreamType"] = request.streamType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddRecordPlanDevice",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddRecordPlanDeviceResponse>(await this.callApi(params, req, runtime), new $_model.AddRecordPlanDeviceResponse({}));
  }

  /**
   * Adds a continuous recording plan for an IPC device.
   * 
   * @param request - AddRecordPlanDeviceRequest
   * @returns AddRecordPlanDeviceResponse
   */
  async addRecordPlanDevice(request: $_model.AddRecordPlanDeviceRequest): Promise<$_model.AddRecordPlanDeviceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addRecordPlanDeviceWithOptions(request, runtime);
  }

  /**
   * @param request - BatchQueryVisionDeviceInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchQueryVisionDeviceInfoResponse
   */
  async batchQueryVisionDeviceInfoWithOptions(request: $_model.BatchQueryVisionDeviceInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchQueryVisionDeviceInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deviceNameList)) {
      query["DeviceNameList"] = request.deviceNameList;
    }

    if (!$dara.isNull(request.iotIdList)) {
      query["IotIdList"] = request.iotIdList;
    }

    if (!$dara.isNull(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!$dara.isNull(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchQueryVisionDeviceInfo",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchQueryVisionDeviceInfoResponse>(await this.callApi(params, req, runtime), new $_model.BatchQueryVisionDeviceInfoResponse({}));
  }

  /**
   * @param request - BatchQueryVisionDeviceInfoRequest
   * @returns BatchQueryVisionDeviceInfoResponse
   */
  async batchQueryVisionDeviceInfo(request: $_model.BatchQueryVisionDeviceInfoRequest): Promise<$_model.BatchQueryVisionDeviceInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchQueryVisionDeviceInfoWithOptions(request, runtime);
  }

  /**
   * Binds devices to an image search instance in batches.
   * 
   * @remarks
   * ## Limits
   * If you invoke this operation on an Enterprise instance, you must specify the **IotInstanceId** request parameter. Otherwise, the invocation failed.
   * 
   * @param request - BindPictureSearchAppWithDevicesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BindPictureSearchAppWithDevicesResponse
   */
  async bindPictureSearchAppWithDevicesWithOptions(request: $_model.BindPictureSearchAppWithDevicesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BindPictureSearchAppWithDevicesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appInstanceId)) {
      query["AppInstanceId"] = request.appInstanceId;
    }

    if (!$dara.isNull(request.deviceIotIds)) {
      query["DeviceIotIds"] = request.deviceIotIds;
    }

    if (!$dara.isNull(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BindPictureSearchAppWithDevices",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BindPictureSearchAppWithDevicesResponse>(await this.callApi(params, req, runtime), new $_model.BindPictureSearchAppWithDevicesResponse({}));
  }

  /**
   * Binds devices to an image search instance in batches.
   * 
   * @remarks
   * ## Limits
   * If you invoke this operation on an Enterprise instance, you must specify the **IotInstanceId** request parameter. Otherwise, the invocation failed.
   * 
   * @param request - BindPictureSearchAppWithDevicesRequest
   * @returns BindPictureSearchAppWithDevicesResponse
   */
  async bindPictureSearchAppWithDevices(request: $_model.BindPictureSearchAppWithDevicesRequest): Promise<$_model.BindPictureSearchAppWithDevicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.bindPictureSearchAppWithDevicesWithOptions(request, runtime);
  }

  /**
   * Checks whether the face of a specified user is successfully synchronized on the device.
   * 
   * @param request - CheckFaceUserDoExistOnDeviceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckFaceUserDoExistOnDeviceResponse
   */
  async checkFaceUserDoExistOnDeviceWithOptions(request: $_model.CheckFaceUserDoExistOnDeviceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckFaceUserDoExistOnDeviceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!$dara.isNull(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!$dara.isNull(request.isolationId)) {
      query["IsolationId"] = request.isolationId;
    }

    if (!$dara.isNull(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckFaceUserDoExistOnDevice",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckFaceUserDoExistOnDeviceResponse>(await this.callApi(params, req, runtime), new $_model.CheckFaceUserDoExistOnDeviceResponse({}));
  }

  /**
   * Checks whether the face of a specified user is successfully synchronized on the device.
   * 
   * @param request - CheckFaceUserDoExistOnDeviceRequest
   * @returns CheckFaceUserDoExistOnDeviceResponse
   */
  async checkFaceUserDoExistOnDevice(request: $_model.CheckFaceUserDoExistOnDeviceRequest): Promise<$_model.CheckFaceUserDoExistOnDeviceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkFaceUserDoExistOnDeviceWithOptions(request, runtime);
  }

  /**
   * Clears all face databases under a specified business isolation ID for a V-series edge all-in-one machine.
   * 
   * @remarks
   * ## Limits
   * The maximum queries per second (QPS) for a single Alibaba Cloud account to invoke this operation is 100.
   *     > Resource Access Management (RAM) users share the quota of the Alibaba Cloud account.
   * 
   * @param request - ClearFaceDeviceDBRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ClearFaceDeviceDBResponse
   */
  async clearFaceDeviceDBWithOptions(request: $_model.ClearFaceDeviceDBRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ClearFaceDeviceDBResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!$dara.isNull(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!$dara.isNull(request.isolationId)) {
      query["IsolationId"] = request.isolationId;
    }

    if (!$dara.isNull(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ClearFaceDeviceDB",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ClearFaceDeviceDBResponse>(await this.callApi(params, req, runtime), new $_model.ClearFaceDeviceDBResponse({}));
  }

  /**
   * Clears all face databases under a specified business isolation ID for a V-series edge all-in-one machine.
   * 
   * @remarks
   * ## Limits
   * The maximum queries per second (QPS) for a single Alibaba Cloud account to invoke this operation is 100.
   *     > Resource Access Management (RAM) users share the quota of the Alibaba Cloud account.
   * 
   * @param request - ClearFaceDeviceDBRequest
   * @returns ClearFaceDeviceDBResponse
   */
  async clearFaceDeviceDB(request: $_model.ClearFaceDeviceDBRequest): Promise<$_model.ClearFaceDeviceDBResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.clearFaceDeviceDBWithOptions(request, runtime);
  }

  /**
   * Creates a recording plan for intelligent alert events.
   * 
   * @param request - CreateEventRecordPlanRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateEventRecordPlanResponse
   */
  async createEventRecordPlanWithOptions(request: $_model.CreateEventRecordPlanRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateEventRecordPlanResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.eventTypes)) {
      query["EventTypes"] = request.eventTypes;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.preRecordDuration)) {
      query["PreRecordDuration"] = request.preRecordDuration;
    }

    if (!$dara.isNull(request.recordDuration)) {
      query["RecordDuration"] = request.recordDuration;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateEventRecordPlan",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateEventRecordPlanResponse>(await this.callApi(params, req, runtime), new $_model.CreateEventRecordPlanResponse({}));
  }

  /**
   * Creates a recording plan for intelligent alert events.
   * 
   * @param request - CreateEventRecordPlanRequest
   * @returns CreateEventRecordPlanResponse
   */
  async createEventRecordPlan(request: $_model.CreateEventRecordPlanRequest): Promise<$_model.CreateEventRecordPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createEventRecordPlanWithOptions(request, runtime);
  }

  /**
   * @param request - CreateGbDeviceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateGbDeviceResponse
   */
  async createGbDeviceWithOptions(request: $_model.CreateGbDeviceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateGbDeviceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!$dara.isNull(request.deviceType)) {
      query["DeviceType"] = request.deviceType;
    }

    if (!$dara.isNull(request.gbId)) {
      query["GbId"] = request.gbId;
    }

    if (!$dara.isNull(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!$dara.isNull(request.mediaNetProtocol)) {
      query["MediaNetProtocol"] = request.mediaNetProtocol;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    if (!$dara.isNull(request.subProductKey)) {
      query["SubProductKey"] = request.subProductKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateGbDevice",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateGbDeviceResponse>(await this.callApi(params, req, runtime), new $_model.CreateGbDeviceResponse({}));
  }

  /**
   * @param request - CreateGbDeviceRequest
   * @returns CreateGbDeviceResponse
   */
  async createGbDevice(request: $_model.CreateGbDeviceRequest): Promise<$_model.CreateGbDeviceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createGbDeviceWithOptions(request, runtime);
  }

  /**
   * Creates a local video recording upload job.
   * 
   * @remarks
   * A single local video recording upload job supports uploading up to 200 files. The maximum number of items in the TimeSlot list is 200.
   * 
   * @param request - CreateLocalFileUploadJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateLocalFileUploadJobResponse
   */
  async createLocalFileUploadJobWithOptions(request: $_model.CreateLocalFileUploadJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateLocalFileUploadJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!$dara.isNull(request.timeSlot)) {
      query["TimeSlot"] = request.timeSlot;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateLocalFileUploadJob",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateLocalFileUploadJobResponse>(await this.callApi(params, req, runtime), new $_model.CreateLocalFileUploadJobResponse({}));
  }

  /**
   * Creates a local video recording upload job.
   * 
   * @remarks
   * A single local video recording upload job supports uploading up to 200 files. The maximum number of items in the TimeSlot list is 200.
   * 
   * @param request - CreateLocalFileUploadJobRequest
   * @returns CreateLocalFileUploadJobResponse
   */
  async createLocalFileUploadJob(request: $_model.CreateLocalFileUploadJobRequest): Promise<$_model.CreateLocalFileUploadJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createLocalFileUploadJobWithOptions(request, runtime);
  }

  /**
   * Creates a task to download local video recordings by time.
   * 
   * @remarks
   * ## Limits
   * - The maximum duration for a single time-based download is 30 minutes.
   * - Download tasks and files are retained for up to 1 day. You can re-download them after they expire.
   * - A single instance supports up to 10 concurrent downloads. Completed downloads are not counted.
   * - If the audio and video encoding parameters change, the downloaded recording defaults to the first half of the recording.
   * - Due to fluctuations in the device\\"s upstream network, the link may be abnormally disconnected or the device may actively drop data. As a result, the uploaded and downloaded recordings may be incomplete.
   * - The downloaded recording data is determined by the device\\"s stream pushing logic. If the pushed data is abnormal, the duration of the downloaded recording may not match the time period specified in the task settings.
   * ## QPS limits
   * The maximum queries per second (QPS) for a single Alibaba Cloud account to invoke this operation is 50.
   * > All Resource Access Management (RAM) users under a single Alibaba Cloud account share the quota of the Alibaba Cloud account.
   * 
   * @param request - CreateLocalRecordDownloadByTimeJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateLocalRecordDownloadByTimeJobResponse
   */
  async createLocalRecordDownloadByTimeJobWithOptions(request: $_model.CreateLocalRecordDownloadByTimeJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateLocalRecordDownloadByTimeJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.beginTime)) {
      query["BeginTime"] = request.beginTime;
    }

    if (!$dara.isNull(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.iotId)) {
      query["IotId"] = request.iotId;
    }

    if (!$dara.isNull(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!$dara.isNull(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    if (!$dara.isNull(request.speed)) {
      query["Speed"] = request.speed;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateLocalRecordDownloadByTimeJob",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateLocalRecordDownloadByTimeJobResponse>(await this.callApi(params, req, runtime), new $_model.CreateLocalRecordDownloadByTimeJobResponse({}));
  }

  /**
   * Creates a task to download local video recordings by time.
   * 
   * @remarks
   * ## Limits
   * - The maximum duration for a single time-based download is 30 minutes.
   * - Download tasks and files are retained for up to 1 day. You can re-download them after they expire.
   * - A single instance supports up to 10 concurrent downloads. Completed downloads are not counted.
   * - If the audio and video encoding parameters change, the downloaded recording defaults to the first half of the recording.
   * - Due to fluctuations in the device\\"s upstream network, the link may be abnormally disconnected or the device may actively drop data. As a result, the uploaded and downloaded recordings may be incomplete.
   * - The downloaded recording data is determined by the device\\"s stream pushing logic. If the pushed data is abnormal, the duration of the downloaded recording may not match the time period specified in the task settings.
   * ## QPS limits
   * The maximum queries per second (QPS) for a single Alibaba Cloud account to invoke this operation is 50.
   * > All Resource Access Management (RAM) users under a single Alibaba Cloud account share the quota of the Alibaba Cloud account.
   * 
   * @param request - CreateLocalRecordDownloadByTimeJobRequest
   * @returns CreateLocalRecordDownloadByTimeJobResponse
   */
  async createLocalRecordDownloadByTimeJob(request: $_model.CreateLocalRecordDownloadByTimeJobRequest): Promise<$_model.CreateLocalRecordDownloadByTimeJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createLocalRecordDownloadByTimeJobWithOptions(request, runtime);
  }

  /**
   * Creates an image search application instance.
   * 
   * @remarks
   * ## Limits
   * The maximum queries per second (QPS) for a single Alibaba Cloud account to invoke this API operation is 100.
   * > A Resource Access Management (RAM) user shares the quota of the Alibaba Cloud account.
   * 
   * @param request - CreatePictureSearchAppRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePictureSearchAppResponse
   */
  async createPictureSearchAppWithOptions(request: $_model.CreatePictureSearchAppRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePictureSearchAppResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.desc)) {
      query["Desc"] = request.desc;
    }

    if (!$dara.isNull(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePictureSearchApp",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePictureSearchAppResponse>(await this.callApi(params, req, runtime), new $_model.CreatePictureSearchAppResponse({}));
  }

  /**
   * Creates an image search application instance.
   * 
   * @remarks
   * ## Limits
   * The maximum queries per second (QPS) for a single Alibaba Cloud account to invoke this API operation is 100.
   * > A Resource Access Management (RAM) user shares the quota of the Alibaba Cloud account.
   * 
   * @param request - CreatePictureSearchAppRequest
   * @returns CreatePictureSearchAppResponse
   */
  async createPictureSearchApp(request: $_model.CreatePictureSearchAppRequest): Promise<$_model.CreatePictureSearchAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createPictureSearchAppWithOptions(request, runtime);
  }

  /**
   * Creates an integrated image search task.
   * 
   * @remarks
   * Integrated image search retrieves both face and human body features simultaneously during an image search.
   * > This feature requires the deployment of face and human body detection algorithms on V-series edge all-in-one machines.
   * 
   * @param request - CreatePictureSearchJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePictureSearchJobResponse
   */
  async createPictureSearchJobWithOptions(request: $_model.CreatePictureSearchJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePictureSearchJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appInstanceId)) {
      query["AppInstanceId"] = request.appInstanceId;
    }

    if (!$dara.isNull(request.bodyThreshold)) {
      query["BodyThreshold"] = request.bodyThreshold;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.pictureSearchType)) {
      query["PictureSearchType"] = request.pictureSearchType;
    }

    if (!$dara.isNull(request.searchPicUrl)) {
      query["SearchPicUrl"] = request.searchPicUrl;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.threshold)) {
      query["Threshold"] = request.threshold;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePictureSearchJob",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePictureSearchJobResponse>(await this.callApi(params, req, runtime), new $_model.CreatePictureSearchJobResponse({}));
  }

  /**
   * Creates an integrated image search task.
   * 
   * @remarks
   * Integrated image search retrieves both face and human body features simultaneously during an image search.
   * > This feature requires the deployment of face and human body detection algorithms on V-series edge all-in-one machines.
   * 
   * @param request - CreatePictureSearchJobRequest
   * @returns CreatePictureSearchJobResponse
   */
  async createPictureSearchJob(request: $_model.CreatePictureSearchJobRequest): Promise<$_model.CreatePictureSearchJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createPictureSearchJobWithOptions(request, runtime);
  }

  /**
   * Creates a task to download cloud recordings by time.
   * 
   * @remarks
   * ## Limits
   * - Maximum duration for a single time-based download: 30 minutes.
   * - Download time precision: The precision of the download time range is within 10 seconds. For example, if you select a 20-second data segment to download, up to 30 seconds of data may be downloaded.
   * - Maximum number of recording files for a single time-based download: 100.
   * - Download tasks and files are retained for up to 1 day. You can re-download them after they expire.
   * - Maximum concurrent downloads per instance: 10. Completed downloads are not counted.
   * - If the audio and video encoding parameters change, the first half of the recording is downloaded by default.
   * - If the download time ranges of recordings overlap, the cloud deduplicates the overlapping data.
   * ## QPS limits
   * The maximum queries per second (QPS) for a single Alibaba Cloud account to call this API operation is 50.
   * > All Resource Access Management (RAM) users under a single Alibaba Cloud account share the quota of the account.
   * 
   * @param request - CreateRecordDownloadByTimeJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRecordDownloadByTimeJobResponse
   */
  async createRecordDownloadByTimeJobWithOptions(request: $_model.CreateRecordDownloadByTimeJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateRecordDownloadByTimeJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.beginTime)) {
      query["BeginTime"] = request.beginTime;
    }

    if (!$dara.isNull(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.iotId)) {
      query["IotId"] = request.iotId;
    }

    if (!$dara.isNull(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!$dara.isNull(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    if (!$dara.isNull(request.recordType)) {
      query["RecordType"] = request.recordType;
    }

    if (!$dara.isNull(request.streamType)) {
      query["StreamType"] = request.streamType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRecordDownloadByTimeJob",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateRecordDownloadByTimeJobResponse>(await this.callApi(params, req, runtime), new $_model.CreateRecordDownloadByTimeJobResponse({}));
  }

  /**
   * Creates a task to download cloud recordings by time.
   * 
   * @remarks
   * ## Limits
   * - Maximum duration for a single time-based download: 30 minutes.
   * - Download time precision: The precision of the download time range is within 10 seconds. For example, if you select a 20-second data segment to download, up to 30 seconds of data may be downloaded.
   * - Maximum number of recording files for a single time-based download: 100.
   * - Download tasks and files are retained for up to 1 day. You can re-download them after they expire.
   * - Maximum concurrent downloads per instance: 10. Completed downloads are not counted.
   * - If the audio and video encoding parameters change, the first half of the recording is downloaded by default.
   * - If the download time ranges of recordings overlap, the cloud deduplicates the overlapping data.
   * ## QPS limits
   * The maximum queries per second (QPS) for a single Alibaba Cloud account to call this API operation is 50.
   * > All Resource Access Management (RAM) users under a single Alibaba Cloud account share the quota of the account.
   * 
   * @param request - CreateRecordDownloadByTimeJobRequest
   * @returns CreateRecordDownloadByTimeJobResponse
   */
  async createRecordDownloadByTimeJob(request: $_model.CreateRecordDownloadByTimeJobRequest): Promise<$_model.CreateRecordDownloadByTimeJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createRecordDownloadByTimeJobWithOptions(request, runtime);
  }

  /**
   * Creates a recording plan based on a time template.
   * 
   * @param request - CreateRecordPlanRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRecordPlanResponse
   */
  async createRecordPlanWithOptions(request: $_model.CreateRecordPlanRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateRecordPlanResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRecordPlan",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateRecordPlanResponse>(await this.callApi(params, req, runtime), new $_model.CreateRecordPlanResponse({}));
  }

  /**
   * Creates a recording plan based on a time template.
   * 
   * @param request - CreateRecordPlanRequest
   * @returns CreateRecordPlanResponse
   */
  async createRecordPlan(request: $_model.CreateRecordPlanRequest): Promise<$_model.CreateRecordPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createRecordPlanWithOptions(request, runtime);
  }

  /**
   * @param request - CreateRtmpDeviceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRtmpDeviceResponse
   */
  async createRtmpDeviceWithOptions(request: $_model.CreateRtmpDeviceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateRtmpDeviceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!$dara.isNull(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!$dara.isNull(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    if (!$dara.isNull(request.pullAuthKey)) {
      query["PullAuthKey"] = request.pullAuthKey;
    }

    if (!$dara.isNull(request.pullKeyExpireTime)) {
      query["PullKeyExpireTime"] = request.pullKeyExpireTime;
    }

    if (!$dara.isNull(request.pushAuthKey)) {
      query["PushAuthKey"] = request.pushAuthKey;
    }

    if (!$dara.isNull(request.pushKeyExpireTime)) {
      query["PushKeyExpireTime"] = request.pushKeyExpireTime;
    }

    if (!$dara.isNull(request.subStreamName)) {
      query["SubStreamName"] = request.subStreamName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRtmpDevice",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateRtmpDeviceResponse>(await this.callApi(params, req, runtime), new $_model.CreateRtmpDeviceResponse({}));
  }

  /**
   * @param request - CreateRtmpDeviceRequest
   * @returns CreateRtmpDeviceResponse
   */
  async createRtmpDevice(request: $_model.CreateRtmpDeviceRequest): Promise<$_model.CreateRtmpDeviceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createRtmpDeviceWithOptions(request, runtime);
  }

  /**
   * Creates a video stream pushing job.
   * 
   * @remarks
   * ## QPS limits
   * The maximum queries per second (QPS) for a single Alibaba Cloud account to invoke this API operation is 50.
   * > All Resource Access Management (RAM) users under an Alibaba Cloud account share the quota of the account.
   * 
   * @param request - CreateStreamPushJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateStreamPushJobResponse
   */
  async createStreamPushJobWithOptions(request: $_model.CreateStreamPushJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateStreamPushJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!$dara.isNull(request.iotId)) {
      query["IotId"] = request.iotId;
    }

    if (!$dara.isNull(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!$dara.isNull(request.jobType)) {
      query["JobType"] = request.jobType;
    }

    if (!$dara.isNull(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    if (!$dara.isNull(request.pushUrl)) {
      query["PushUrl"] = request.pushUrl;
    }

    if (!$dara.isNull(request.streamType)) {
      query["StreamType"] = request.streamType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateStreamPushJob",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateStreamPushJobResponse>(await this.callApi(params, req, runtime), new $_model.CreateStreamPushJobResponse({}));
  }

  /**
   * Creates a video stream pushing job.
   * 
   * @remarks
   * ## QPS limits
   * The maximum queries per second (QPS) for a single Alibaba Cloud account to invoke this API operation is 50.
   * > All Resource Access Management (RAM) users under an Alibaba Cloud account share the quota of the account.
   * 
   * @param request - CreateStreamPushJobRequest
   * @returns CreateStreamPushJobResponse
   */
  async createStreamPushJob(request: $_model.CreateStreamPushJobRequest): Promise<$_model.CreateStreamPushJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createStreamPushJobWithOptions(request, runtime);
  }

  /**
   * Creates a cloud snapshot task.
   * 
   * @remarks
   * ## QPS limit
   * The maximum queries per second (QPS) for a single Alibaba Cloud account to invoke this operation is 50.
   * > All Resource Access Management (RAM) users under a single Alibaba Cloud account share the quota of the Alibaba Cloud account.
   * 
   * @param request - CreateStreamSnapshotJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateStreamSnapshotJobResponse
   */
  async createStreamSnapshotJobWithOptions(request: $_model.CreateStreamSnapshotJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateStreamSnapshotJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!$dara.isNull(request.iotId)) {
      query["IotId"] = request.iotId;
    }

    if (!$dara.isNull(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!$dara.isNull(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    if (!$dara.isNull(request.snapshotInterval)) {
      query["SnapshotInterval"] = request.snapshotInterval;
    }

    if (!$dara.isNull(request.streamType)) {
      query["StreamType"] = request.streamType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateStreamSnapshotJob",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateStreamSnapshotJobResponse>(await this.callApi(params, req, runtime), new $_model.CreateStreamSnapshotJobResponse({}));
  }

  /**
   * Creates a cloud snapshot task.
   * 
   * @remarks
   * ## QPS limit
   * The maximum queries per second (QPS) for a single Alibaba Cloud account to invoke this operation is 50.
   * > All Resource Access Management (RAM) users under a single Alibaba Cloud account share the quota of the Alibaba Cloud account.
   * 
   * @param request - CreateStreamSnapshotJobRequest
   * @returns CreateStreamSnapshotJobResponse
   */
  async createStreamSnapshotJob(request: $_model.CreateStreamSnapshotJobRequest): Promise<$_model.CreateStreamSnapshotJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createStreamSnapshotJobWithOptions(request, runtime);
  }

  /**
   * Creates a time template.
   * 
   * @param request - CreateTimeTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTimeTemplateResponse
   */
  async createTimeTemplateWithOptions(request: $_model.CreateTimeTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTimeTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.allDay)) {
      query["AllDay"] = request.allDay;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.timeSections)) {
      query["TimeSections"] = request.timeSections;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTimeTemplate",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateTimeTemplateResponse>(await this.callApi(params, req, runtime), new $_model.CreateTimeTemplateResponse({}));
  }

  /**
   * Creates a time template.
   * 
   * @param request - CreateTimeTemplateRequest
   * @returns CreateTimeTemplateResponse
   */
  async createTimeTemplate(request: $_model.CreateTimeTemplateRequest): Promise<$_model.CreateTimeTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createTimeTemplateWithOptions(request, runtime);
  }

  /**
   * Deletes an intelligent event recording plan.
   * 
   * @param request - DeleteEventRecordPlanRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteEventRecordPlanResponse
   */
  async deleteEventRecordPlanWithOptions(request: $_model.DeleteEventRecordPlanRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteEventRecordPlanResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.planId)) {
      query["PlanId"] = request.planId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteEventRecordPlan",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteEventRecordPlanResponse>(await this.callApi(params, req, runtime), new $_model.DeleteEventRecordPlanResponse({}));
  }

  /**
   * Deletes an intelligent event recording plan.
   * 
   * @param request - DeleteEventRecordPlanRequest
   * @returns DeleteEventRecordPlanResponse
   */
  async deleteEventRecordPlan(request: $_model.DeleteEventRecordPlanRequest): Promise<$_model.DeleteEventRecordPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteEventRecordPlanWithOptions(request, runtime);
  }

  /**
   * Deletes the IP cameras associated with an intelligent alert event recording plan.
   * 
   * @param request - DeleteEventRecordPlanDeviceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteEventRecordPlanDeviceResponse
   */
  async deleteEventRecordPlanDeviceWithOptions(request: $_model.DeleteEventRecordPlanDeviceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteEventRecordPlanDeviceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!$dara.isNull(request.iotId)) {
      query["IotId"] = request.iotId;
    }

    if (!$dara.isNull(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!$dara.isNull(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    if (!$dara.isNull(request.streamType)) {
      query["StreamType"] = request.streamType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteEventRecordPlanDevice",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteEventRecordPlanDeviceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteEventRecordPlanDeviceResponse({}));
  }

  /**
   * Deletes the IP cameras associated with an intelligent alert event recording plan.
   * 
   * @param request - DeleteEventRecordPlanDeviceRequest
   * @returns DeleteEventRecordPlanDeviceResponse
   */
  async deleteEventRecordPlanDevice(request: $_model.DeleteEventRecordPlanDeviceRequest): Promise<$_model.DeleteEventRecordPlanDeviceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteEventRecordPlanDeviceWithOptions(request, runtime);
  }

  /**
   * Deletes a device group.
   * 
   * @param request - DeleteFaceDeviceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteFaceDeviceGroupResponse
   */
  async deleteFaceDeviceGroupWithOptions(request: $_model.DeleteFaceDeviceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteFaceDeviceGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deviceGroupId)) {
      query["DeviceGroupId"] = request.deviceGroupId;
    }

    if (!$dara.isNull(request.isolationId)) {
      query["IsolationId"] = request.isolationId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteFaceDeviceGroup",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteFaceDeviceGroupResponse>(await this.callApi(params, req, runtime), new $_model.DeleteFaceDeviceGroupResponse({}));
  }

  /**
   * Deletes a device group.
   * 
   * @param request - DeleteFaceDeviceGroupRequest
   * @returns DeleteFaceDeviceGroupResponse
   */
  async deleteFaceDeviceGroup(request: $_model.DeleteFaceDeviceGroupRequest): Promise<$_model.DeleteFaceDeviceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteFaceDeviceGroupWithOptions(request, runtime);
  }

  /**
   * Deletes a user from the face management service.
   * 
   * @param request - DeleteFaceUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteFaceUserResponse
   */
  async deleteFaceUserWithOptions(request: $_model.DeleteFaceUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteFaceUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.isolationId)) {
      query["IsolationId"] = request.isolationId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteFaceUser",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteFaceUserResponse>(await this.callApi(params, req, runtime), new $_model.DeleteFaceUserResponse({}));
  }

  /**
   * Deletes a user from the face management service.
   * 
   * @param request - DeleteFaceUserRequest
   * @returns DeleteFaceUserResponse
   */
  async deleteFaceUser(request: $_model.DeleteFaceUserRequest): Promise<$_model.DeleteFaceUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteFaceUserWithOptions(request, runtime);
  }

  /**
   * Deletes a specified user group.
   * 
   * @remarks
   * ## Limits
   * The maximum queries per second (QPS) for a single Alibaba Cloud account to invoke this operation is 100.
   * > Resource Access Management (RAM) users share the quota of the Alibaba Cloud account.
   * 
   * @param request - DeleteFaceUserGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteFaceUserGroupResponse
   */
  async deleteFaceUserGroupWithOptions(request: $_model.DeleteFaceUserGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteFaceUserGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.isolationId)) {
      query["IsolationId"] = request.isolationId;
    }

    if (!$dara.isNull(request.userGroupId)) {
      query["UserGroupId"] = request.userGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteFaceUserGroup",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteFaceUserGroupResponse>(await this.callApi(params, req, runtime), new $_model.DeleteFaceUserGroupResponse({}));
  }

  /**
   * Deletes a specified user group.
   * 
   * @remarks
   * ## Limits
   * The maximum queries per second (QPS) for a single Alibaba Cloud account to invoke this operation is 100.
   * > Resource Access Management (RAM) users share the quota of the Alibaba Cloud account.
   * 
   * @param request - DeleteFaceUserGroupRequest
   * @returns DeleteFaceUserGroupResponse
   */
  async deleteFaceUserGroup(request: $_model.DeleteFaceUserGroupRequest): Promise<$_model.DeleteFaceUserGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteFaceUserGroupWithOptions(request, runtime);
  }

  /**
   * Deletes the face synchronization relationship between a user group and a device group.
   * 
   * @remarks
   * ## Before you begin
   * The maximum number of queries per second (QPS) per Alibaba Cloud account for invoking this operation is 100.
   *     > Resource Access Management (RAM) users share the quota of the Alibaba Cloud account.
   * 
   * @param request - DeleteFaceUserGroupAndDeviceGroupRelationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteFaceUserGroupAndDeviceGroupRelationResponse
   */
  async deleteFaceUserGroupAndDeviceGroupRelationWithOptions(request: $_model.DeleteFaceUserGroupAndDeviceGroupRelationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteFaceUserGroupAndDeviceGroupRelationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.controlId)) {
      query["ControlId"] = request.controlId;
    }

    if (!$dara.isNull(request.isolationId)) {
      query["IsolationId"] = request.isolationId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteFaceUserGroupAndDeviceGroupRelation",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteFaceUserGroupAndDeviceGroupRelationResponse>(await this.callApi(params, req, runtime), new $_model.DeleteFaceUserGroupAndDeviceGroupRelationResponse({}));
  }

  /**
   * Deletes the face synchronization relationship between a user group and a device group.
   * 
   * @remarks
   * ## Before you begin
   * The maximum number of queries per second (QPS) per Alibaba Cloud account for invoking this operation is 100.
   *     > Resource Access Management (RAM) users share the quota of the Alibaba Cloud account.
   * 
   * @param request - DeleteFaceUserGroupAndDeviceGroupRelationRequest
   * @returns DeleteFaceUserGroupAndDeviceGroupRelationResponse
   */
  async deleteFaceUserGroupAndDeviceGroupRelation(request: $_model.DeleteFaceUserGroupAndDeviceGroupRelationRequest): Promise<$_model.DeleteFaceUserGroupAndDeviceGroupRelationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteFaceUserGroupAndDeviceGroupRelationWithOptions(request, runtime);
  }

  /**
   * Deletes a specified face image from a user in the face library.
   * 
   * @remarks
   * ## Limits
   * The maximum queries per second (QPS) for a single Alibaba Cloud account to invoke this operation is 100.
   * > Resource Access Management (RAM) users share the quota of the Alibaba Cloud account.
   * 
   * @param request - DeleteFaceUserPictureRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteFaceUserPictureResponse
   */
  async deleteFaceUserPictureWithOptions(request: $_model.DeleteFaceUserPictureRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteFaceUserPictureResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.facePicMd5)) {
      query["FacePicMd5"] = request.facePicMd5;
    }

    if (!$dara.isNull(request.isolationId)) {
      query["IsolationId"] = request.isolationId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteFaceUserPicture",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteFaceUserPictureResponse>(await this.callApi(params, req, runtime), new $_model.DeleteFaceUserPictureResponse({}));
  }

  /**
   * Deletes a specified face image from a user in the face library.
   * 
   * @remarks
   * ## Limits
   * The maximum queries per second (QPS) for a single Alibaba Cloud account to invoke this operation is 100.
   * > Resource Access Management (RAM) users share the quota of the Alibaba Cloud account.
   * 
   * @param request - DeleteFaceUserPictureRequest
   * @returns DeleteFaceUserPictureResponse
   */
  async deleteFaceUserPicture(request: $_model.DeleteFaceUserPictureRequest): Promise<$_model.DeleteFaceUserPictureResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteFaceUserPictureWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteGbDeviceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteGbDeviceResponse
   */
  async deleteGbDeviceWithOptions(request: $_model.DeleteGbDeviceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteGbDeviceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!$dara.isNull(request.iotId)) {
      query["IotId"] = request.iotId;
    }

    if (!$dara.isNull(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!$dara.isNull(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteGbDevice",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteGbDeviceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteGbDeviceResponse({}));
  }

  /**
   * @param request - DeleteGbDeviceRequest
   * @returns DeleteGbDeviceResponse
   */
  async deleteGbDevice(request: $_model.DeleteGbDeviceRequest): Promise<$_model.DeleteGbDeviceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteGbDeviceWithOptions(request, runtime);
  }

  /**
   * Stops a local recording upload task.
   * 
   * @remarks
   * After you stop a local recording upload task, the recording files that have been created are not deleted.
   * 
   * @param request - DeleteLocalFileUploadJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteLocalFileUploadJobResponse
   */
  async deleteLocalFileUploadJobWithOptions(request: $_model.DeleteLocalFileUploadJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteLocalFileUploadJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteLocalFileUploadJob",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteLocalFileUploadJobResponse>(await this.callApi(params, req, runtime), new $_model.DeleteLocalFileUploadJobResponse({}));
  }

  /**
   * Stops a local recording upload task.
   * 
   * @remarks
   * After you stop a local recording upload task, the recording files that have been created are not deleted.
   * 
   * @param request - DeleteLocalFileUploadJobRequest
   * @returns DeleteLocalFileUploadJobResponse
   */
  async deleteLocalFileUploadJob(request: $_model.DeleteLocalFileUploadJobRequest): Promise<$_model.DeleteLocalFileUploadJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteLocalFileUploadJobWithOptions(request, runtime);
  }

  /**
   * Deletes multiple cloud pictures with specified picture IDs for a specified IPC device.
   * 
   * @param request - DeletePictureRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePictureResponse
   */
  async deletePictureWithOptions(request: $_model.DeletePictureRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeletePictureResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!$dara.isNull(request.iotId)) {
      query["IotId"] = request.iotId;
    }

    if (!$dara.isNull(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!$dara.isNull(request.pictureIdList)) {
      query["PictureIdList"] = request.pictureIdList;
    }

    if (!$dara.isNull(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeletePicture",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeletePictureResponse>(await this.callApi(params, req, runtime), new $_model.DeletePictureResponse({}));
  }

  /**
   * Deletes multiple cloud pictures with specified picture IDs for a specified IPC device.
   * 
   * @param request - DeletePictureRequest
   * @returns DeletePictureResponse
   */
  async deletePicture(request: $_model.DeletePictureRequest): Promise<$_model.DeletePictureResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deletePictureWithOptions(request, runtime);
  }

  /**
   * Deletes video files stored in the cloud.
   * 
   * @param request - DeleteRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRecordResponse
   */
  async deleteRecordWithOptions(request: $_model.DeleteRecordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRecordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!$dara.isNull(request.fileNameList)) {
      query["FileNameList"] = request.fileNameList;
    }

    if (!$dara.isNull(request.iotId)) {
      query["IotId"] = request.iotId;
    }

    if (!$dara.isNull(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!$dara.isNull(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRecord",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteRecordResponse>(await this.callApi(params, req, runtime), new $_model.DeleteRecordResponse({}));
  }

  /**
   * Deletes video files stored in the cloud.
   * 
   * @param request - DeleteRecordRequest
   * @returns DeleteRecordResponse
   */
  async deleteRecord(request: $_model.DeleteRecordRequest): Promise<$_model.DeleteRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteRecordWithOptions(request, runtime);
  }

  /**
   * Deletes a recording plan.
   * 
   * @param request - DeleteRecordPlanRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRecordPlanResponse
   */
  async deleteRecordPlanWithOptions(request: $_model.DeleteRecordPlanRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRecordPlanResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.planId)) {
      query["PlanId"] = request.planId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRecordPlan",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteRecordPlanResponse>(await this.callApi(params, req, runtime), new $_model.DeleteRecordPlanResponse({}));
  }

  /**
   * Deletes a recording plan.
   * 
   * @param request - DeleteRecordPlanRequest
   * @returns DeleteRecordPlanResponse
   */
  async deleteRecordPlan(request: $_model.DeleteRecordPlanRequest): Promise<$_model.DeleteRecordPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteRecordPlanWithOptions(request, runtime);
  }

  /**
   * Deletes the recording plan associated with an IPC device.
   * 
   * @param request - DeleteRecordPlanDeviceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRecordPlanDeviceResponse
   */
  async deleteRecordPlanDeviceWithOptions(request: $_model.DeleteRecordPlanDeviceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRecordPlanDeviceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!$dara.isNull(request.iotId)) {
      query["IotId"] = request.iotId;
    }

    if (!$dara.isNull(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!$dara.isNull(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    if (!$dara.isNull(request.streamType)) {
      query["StreamType"] = request.streamType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRecordPlanDevice",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteRecordPlanDeviceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteRecordPlanDeviceResponse({}));
  }

  /**
   * Deletes the recording plan associated with an IPC device.
   * 
   * @param request - DeleteRecordPlanDeviceRequest
   * @returns DeleteRecordPlanDeviceResponse
   */
  async deleteRecordPlanDevice(request: $_model.DeleteRecordPlanDeviceRequest): Promise<$_model.DeleteRecordPlanDeviceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteRecordPlanDeviceWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteRtmpDeviceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRtmpDeviceResponse
   */
  async deleteRtmpDeviceWithOptions(request: $_model.DeleteRtmpDeviceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRtmpDeviceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!$dara.isNull(request.iotId)) {
      query["IotId"] = request.iotId;
    }

    if (!$dara.isNull(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!$dara.isNull(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRtmpDevice",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteRtmpDeviceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteRtmpDeviceResponse({}));
  }

  /**
   * @param request - DeleteRtmpDeviceRequest
   * @returns DeleteRtmpDeviceResponse
   */
  async deleteRtmpDevice(request: $_model.DeleteRtmpDeviceRequest): Promise<$_model.DeleteRtmpDeviceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteRtmpDeviceWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteRtmpKeyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRtmpKeyResponse
   */
  async deleteRtmpKeyWithOptions(request: $_model.DeleteRtmpKeyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRtmpKeyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!$dara.isNull(request.iotId)) {
      query["IotId"] = request.iotId;
    }

    if (!$dara.isNull(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!$dara.isNull(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRtmpKey",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteRtmpKeyResponse>(await this.callApi(params, req, runtime), new $_model.DeleteRtmpKeyResponse({}));
  }

  /**
   * @param request - DeleteRtmpKeyRequest
   * @returns DeleteRtmpKeyResponse
   */
  async deleteRtmpKey(request: $_model.DeleteRtmpKeyRequest): Promise<$_model.DeleteRtmpKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteRtmpKeyWithOptions(request, runtime);
  }

  /**
   * Deletes a video stream pushing job.
   * 
   * @remarks
   * ## QPS limit
   * A single Alibaba Cloud account can invoke this operation up to 50 times per second (QPS).
   * > All Resource Access Management (RAM) users under a single Alibaba Cloud account share the quota of that account.
   * 
   * @param request - DeleteStreamPushJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteStreamPushJobResponse
   */
  async deleteStreamPushJobWithOptions(request: $_model.DeleteStreamPushJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteStreamPushJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!$dara.isNull(request.iotId)) {
      query["IotId"] = request.iotId;
    }

    if (!$dara.isNull(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteStreamPushJob",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteStreamPushJobResponse>(await this.callApi(params, req, runtime), new $_model.DeleteStreamPushJobResponse({}));
  }

  /**
   * Deletes a video stream pushing job.
   * 
   * @remarks
   * ## QPS limit
   * A single Alibaba Cloud account can invoke this operation up to 50 times per second (QPS).
   * > All Resource Access Management (RAM) users under a single Alibaba Cloud account share the quota of that account.
   * 
   * @param request - DeleteStreamPushJobRequest
   * @returns DeleteStreamPushJobResponse
   */
  async deleteStreamPushJob(request: $_model.DeleteStreamPushJobRequest): Promise<$_model.DeleteStreamPushJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteStreamPushJobWithOptions(request, runtime);
  }

  /**
   * Deletes a video snapshot task.
   * 
   * @remarks
   * ## QPS limits
   * The maximum queries per second (QPS) for a single Alibaba Cloud account to invoke this API operation is 50.
   * > All Resource Access Management (RAM) users under a single Alibaba Cloud account share the quota of the Alibaba Cloud account.
   * 
   * @param request - DeleteStreamSnapshotJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteStreamSnapshotJobResponse
   */
  async deleteStreamSnapshotJobWithOptions(request: $_model.DeleteStreamSnapshotJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteStreamSnapshotJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!$dara.isNull(request.iotId)) {
      query["IotId"] = request.iotId;
    }

    if (!$dara.isNull(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!$dara.isNull(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    if (!$dara.isNull(request.streamType)) {
      query["StreamType"] = request.streamType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteStreamSnapshotJob",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteStreamSnapshotJobResponse>(await this.callApi(params, req, runtime), new $_model.DeleteStreamSnapshotJobResponse({}));
  }

  /**
   * Deletes a video snapshot task.
   * 
   * @remarks
   * ## QPS limits
   * The maximum queries per second (QPS) for a single Alibaba Cloud account to invoke this API operation is 50.
   * > All Resource Access Management (RAM) users under a single Alibaba Cloud account share the quota of the Alibaba Cloud account.
   * 
   * @param request - DeleteStreamSnapshotJobRequest
   * @returns DeleteStreamSnapshotJobResponse
   */
  async deleteStreamSnapshotJob(request: $_model.DeleteStreamSnapshotJobRequest): Promise<$_model.DeleteStreamSnapshotJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteStreamSnapshotJobWithOptions(request, runtime);
  }

  /**
   * Deletes a time template.
   * 
   * @param request - DeleteTimeTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTimeTemplateResponse
   */
  async deleteTimeTemplateWithOptions(request: $_model.DeleteTimeTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteTimeTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteTimeTemplate",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteTimeTemplateResponse>(await this.callApi(params, req, runtime), new $_model.DeleteTimeTemplateResponse({}));
  }

  /**
   * Deletes a time template.
   * 
   * @param request - DeleteTimeTemplateRequest
   * @returns DeleteTimeTemplateResponse
   */
  async deleteTimeTemplate(request: $_model.DeleteTimeTemplateRequest): Promise<$_model.DeleteTimeTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteTimeTemplateWithOptions(request, runtime);
  }

  /**
   * @param request - EnableGbSubDeviceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableGbSubDeviceResponse
   */
  async enableGbSubDeviceWithOptions(request: $_model.EnableGbSubDeviceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableGbSubDeviceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!$dara.isNull(request.iotId)) {
      query["IotId"] = request.iotId;
    }

    if (!$dara.isNull(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!$dara.isNull(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    if (!$dara.isNull(request.subDeviceId)) {
      query["SubDeviceId"] = request.subDeviceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableGbSubDevice",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableGbSubDeviceResponse>(await this.callApi(params, req, runtime), new $_model.EnableGbSubDeviceResponse({}));
  }

  /**
   * @param request - EnableGbSubDeviceRequest
   * @returns EnableGbSubDeviceResponse
   */
  async enableGbSubDevice(request: $_model.EnableGbSubDeviceRequest): Promise<$_model.EnableGbSubDeviceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableGbSubDeviceWithOptions(request, runtime);
  }

  /**
   * Queries the status of an integrated image search task.
   * 
   * @remarks
   * Integrated image search retrieves both facial and body features during an image search.
   * > This feature requires the deployment of face and body detection algorithms on V-series edge all-in-one machines.
   * 
   * @param request - GetPictureSearchJobStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPictureSearchJobStatusResponse
   */
  async getPictureSearchJobStatusWithOptions(request: $_model.GetPictureSearchJobStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetPictureSearchJobStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appInstanceId)) {
      query["AppInstanceId"] = request.appInstanceId;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPictureSearchJobStatus",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPictureSearchJobStatusResponse>(await this.callApi(params, req, runtime), new $_model.GetPictureSearchJobStatusResponse({}));
  }

  /**
   * Queries the status of an integrated image search task.
   * 
   * @remarks
   * Integrated image search retrieves both facial and body features during an image search.
   * > This feature requires the deployment of face and body detection algorithms on V-series edge all-in-one machines.
   * 
   * @param request - GetPictureSearchJobStatusRequest
   * @returns GetPictureSearchJobStatusResponse
   */
  async getPictureSearchJobStatus(request: $_model.GetPictureSearchJobStatusRequest): Promise<$_model.GetPictureSearchJobStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPictureSearchJobStatusWithOptions(request, runtime);
  }

  /**
   * Starts an image search application instance to search for images.
   * 
   * @param request - PictureSearchPictureRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PictureSearchPictureResponse
   */
  async pictureSearchPictureWithOptions(request: $_model.PictureSearchPictureRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PictureSearchPictureResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appInstanceId)) {
      query["AppInstanceId"] = request.appInstanceId;
    }

    if (!$dara.isNull(request.containPicUrl)) {
      query["ContainPicUrl"] = request.containPicUrl;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.pictureSearchType)) {
      query["PictureSearchType"] = request.pictureSearchType;
    }

    if (!$dara.isNull(request.searchPicUrl)) {
      query["SearchPicUrl"] = request.searchPicUrl;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.threshold)) {
      query["Threshold"] = request.threshold;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PictureSearchPicture",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PictureSearchPictureResponse>(await this.callApi(params, req, runtime), new $_model.PictureSearchPictureResponse({}));
  }

  /**
   * Starts an image search application instance to search for images.
   * 
   * @param request - PictureSearchPictureRequest
   * @returns PictureSearchPictureResponse
   */
  async pictureSearchPicture(request: $_model.PictureSearchPictureRequest): Promise<$_model.PictureSearchPictureResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.pictureSearchPictureWithOptions(request, runtime);
  }

  /**
   * Queries the intelligent alert events for vehicle operations.
   * 
   * @remarks
   * ## Usage notes
   * The maximum queries per second (QPS) for a single Alibaba Cloud account to call this API operation is 10.  
   * > Resource Access Management (RAM) users share the quota of the Alibaba Cloud account.
   * 
   * @param request - QueryCarProcessEventsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryCarProcessEventsResponse
   */
  async queryCarProcessEventsWithOptions(request: $_model.QueryCarProcessEventsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryCarProcessEventsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.actionType)) {
      query["ActionType"] = request.actionType;
    }

    if (!$dara.isNull(request.areaIndex)) {
      query["AreaIndex"] = request.areaIndex;
    }

    if (!$dara.isNull(request.beginTime)) {
      query["BeginTime"] = request.beginTime;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.plateNo)) {
      query["PlateNo"] = request.plateNo;
    }

    if (!$dara.isNull(request.subDeviceName)) {
      query["SubDeviceName"] = request.subDeviceName;
    }

    if (!$dara.isNull(request.subIotId)) {
      query["SubIotId"] = request.subIotId;
    }

    if (!$dara.isNull(request.subProductKey)) {
      query["SubProductKey"] = request.subProductKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryCarProcessEvents",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryCarProcessEventsResponse>(await this.callApi(params, req, runtime), new $_model.QueryCarProcessEventsResponse({}));
  }

  /**
   * Queries the intelligent alert events for vehicle operations.
   * 
   * @remarks
   * ## Usage notes
   * The maximum queries per second (QPS) for a single Alibaba Cloud account to call this API operation is 10.  
   * > Resource Access Management (RAM) users share the quota of the Alibaba Cloud account.
   * 
   * @param request - QueryCarProcessEventsRequest
   * @returns QueryCarProcessEventsResponse
   */
  async queryCarProcessEvents(request: $_model.QueryCarProcessEventsRequest): Promise<$_model.QueryCarProcessEventsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryCarProcessEventsWithOptions(request, runtime);
  }

  /**
   * Queries a list of intelligent alert events for an IPC device.
   * 
   * @param request - QueryDeviceEventRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryDeviceEventResponse
   */
  async queryDeviceEventWithOptions(request: $_model.QueryDeviceEventRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryDeviceEventResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.beginTime)) {
      query["BeginTime"] = request.beginTime;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.eventType)) {
      query["EventType"] = request.eventType;
    }

    if (!$dara.isNull(request.iotId)) {
      query["IotId"] = request.iotId;
    }

    if (!$dara.isNull(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryDeviceEvent",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryDeviceEventResponse>(await this.callApi(params, req, runtime), new $_model.QueryDeviceEventResponse({}));
  }

  /**
   * Queries a list of intelligent alert events for an IPC device.
   * 
   * @param request - QueryDeviceEventRequest
   * @returns QueryDeviceEventResponse
   */
  async queryDeviceEvent(request: $_model.QueryDeviceEventRequest): Promise<$_model.QueryDeviceEventResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryDeviceEventWithOptions(request, runtime);
  }

  /**
   * Retrieves the image captured and uploaded by an IPC device when an intelligent alert event is triggered.
   * 
   * @param request - QueryDeviceEventPictureRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryDeviceEventPictureResponse
   */
  async queryDeviceEventPictureWithOptions(request: $_model.QueryDeviceEventPictureRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryDeviceEventPictureResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!$dara.isNull(request.eventId)) {
      query["EventId"] = request.eventId;
    }

    if (!$dara.isNull(request.iotId)) {
      query["IotId"] = request.iotId;
    }

    if (!$dara.isNull(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!$dara.isNull(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryDeviceEventPicture",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryDeviceEventPictureResponse>(await this.callApi(params, req, runtime), new $_model.QueryDeviceEventPictureResponse({}));
  }

  /**
   * Retrieves the image captured and uploaded by an IPC device when an intelligent alert event is triggered.
   * 
   * @param request - QueryDeviceEventPictureRequest
   * @returns QueryDeviceEventPictureResponse
   */
  async queryDeviceEventPicture(request: $_model.QueryDeviceEventPictureRequest): Promise<$_model.QueryDeviceEventPictureResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryDeviceEventPictureWithOptions(request, runtime);
  }

  /**
   * Retrieves the URL of the recording file for a specified intelligent alert event of an IP camera (IPC) device.
   * 
   * @param request - QueryDeviceEventRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryDeviceEventRecordResponse
   */
  async queryDeviceEventRecordWithOptions(request: $_model.QueryDeviceEventRecordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryDeviceEventRecordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!$dara.isNull(request.eventId)) {
      query["EventId"] = request.eventId;
    }

    if (!$dara.isNull(request.iotId)) {
      query["IotId"] = request.iotId;
    }

    if (!$dara.isNull(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!$dara.isNull(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryDeviceEventRecord",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryDeviceEventRecordResponse>(await this.callApi(params, req, runtime), new $_model.QueryDeviceEventRecordResponse({}));
  }

  /**
   * Retrieves the URL of the recording file for a specified intelligent alert event of an IP camera (IPC) device.
   * 
   * @param request - QueryDeviceEventRecordRequest
   * @returns QueryDeviceEventRecordResponse
   */
  async queryDeviceEventRecord(request: $_model.QueryDeviceEventRecordRequest): Promise<$_model.QueryDeviceEventRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryDeviceEventRecordWithOptions(request, runtime);
  }

  /**
   * Retrieves image URLs based on a list of image IDs.
   * 
   * @param request - QueryDevicePictureByListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryDevicePictureByListResponse
   */
  async queryDevicePictureByListWithOptions(request: $_model.QueryDevicePictureByListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryDevicePictureByListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!$dara.isNull(request.expireTime)) {
      query["ExpireTime"] = request.expireTime;
    }

    if (!$dara.isNull(request.iotId)) {
      query["IotId"] = request.iotId;
    }

    if (!$dara.isNull(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!$dara.isNull(request.pictureIdList)) {
      query["PictureIdList"] = request.pictureIdList;
    }

    if (!$dara.isNull(request.pictureType)) {
      query["PictureType"] = request.pictureType;
    }

    if (!$dara.isNull(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    if (!$dara.isNull(request.thumbWidth)) {
      query["ThumbWidth"] = request.thumbWidth;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryDevicePictureByList",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryDevicePictureByListResponse>(await this.callApi(params, req, runtime), new $_model.QueryDevicePictureByListResponse({}));
  }

  /**
   * Retrieves image URLs based on a list of image IDs.
   * 
   * @param request - QueryDevicePictureByListRequest
   * @returns QueryDevicePictureByListResponse
   */
  async queryDevicePictureByList(request: $_model.QueryDevicePictureByListRequest): Promise<$_model.QueryDevicePictureByListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryDevicePictureByListWithOptions(request, runtime);
  }

  /**
   * Queries the information about images captured by an IPC device.
   * 
   * @param request - QueryDevicePictureFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryDevicePictureFileResponse
   */
  async queryDevicePictureFileWithOptions(request: $_model.QueryDevicePictureFileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryDevicePictureFileResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.captureId)) {
      query["CaptureId"] = request.captureId;
    }

    if (!$dara.isNull(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!$dara.isNull(request.expireTime)) {
      query["ExpireTime"] = request.expireTime;
    }

    if (!$dara.isNull(request.iotId)) {
      query["IotId"] = request.iotId;
    }

    if (!$dara.isNull(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!$dara.isNull(request.pictureType)) {
      query["PictureType"] = request.pictureType;
    }

    if (!$dara.isNull(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    if (!$dara.isNull(request.thumbWidth)) {
      query["ThumbWidth"] = request.thumbWidth;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryDevicePictureFile",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryDevicePictureFileResponse>(await this.callApi(params, req, runtime), new $_model.QueryDevicePictureFileResponse({}));
  }

  /**
   * Queries the information about images captured by an IPC device.
   * 
   * @param request - QueryDevicePictureFileRequest
   * @returns QueryDevicePictureFileResponse
   */
  async queryDevicePictureFile(request: $_model.QueryDevicePictureFileRequest): Promise<$_model.QueryDevicePictureFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryDevicePictureFileWithOptions(request, runtime);
  }

  /**
   * Queries the cloud storage image lifecycle for an IPC device.
   * 
   * @param request - QueryDevicePictureLifeCycleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryDevicePictureLifeCycleResponse
   */
  async queryDevicePictureLifeCycleWithOptions(request: $_model.QueryDevicePictureLifeCycleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryDevicePictureLifeCycleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.iotId)) {
      query["IotId"] = request.iotId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryDevicePictureLifeCycle",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryDevicePictureLifeCycleResponse>(await this.callApi(params, req, runtime), new $_model.QueryDevicePictureLifeCycleResponse({}));
  }

  /**
   * Queries the cloud storage image lifecycle for an IPC device.
   * 
   * @param request - QueryDevicePictureLifeCycleRequest
   * @returns QueryDevicePictureLifeCycleResponse
   */
  async queryDevicePictureLifeCycle(request: $_model.QueryDevicePictureLifeCycleRequest): Promise<$_model.QueryDevicePictureLifeCycleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryDevicePictureLifeCycleWithOptions(request, runtime);
  }

  /**
   * Retrieves the cloud storage recording lifecycle of an IPC device.
   * 
   * @param request - QueryDeviceRecordLifeCycleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryDeviceRecordLifeCycleResponse
   */
  async queryDeviceRecordLifeCycleWithOptions(request: $_model.QueryDeviceRecordLifeCycleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryDeviceRecordLifeCycleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deviceList)) {
      query["DeviceList"] = request.deviceList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryDeviceRecordLifeCycle",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryDeviceRecordLifeCycleResponse>(await this.callApi(params, req, runtime), new $_model.QueryDeviceRecordLifeCycleResponse({}));
  }

  /**
   * Retrieves the cloud storage recording lifecycle of an IPC device.
   * 
   * @param request - QueryDeviceRecordLifeCycleRequest
   * @returns QueryDeviceRecordLifeCycleResponse
   */
  async queryDeviceRecordLifeCycle(request: $_model.QueryDeviceRecordLifeCycleRequest): Promise<$_model.QueryDeviceRecordLifeCycleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryDeviceRecordLifeCycleWithOptions(request, runtime);
  }

  /**
   * Retrieves the URL of a recording file with a specified file name from the storage card of a local network video recorder or IP camera.
   * 
   * @param request - QueryDeviceVodUrlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryDeviceVodUrlResponse
   */
  async queryDeviceVodUrlWithOptions(request: $_model.QueryDeviceVodUrlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryDeviceVodUrlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!$dara.isNull(request.enableStun)) {
      query["EnableStun"] = request.enableStun;
    }

    if (!$dara.isNull(request.encryptType)) {
      query["EncryptType"] = request.encryptType;
    }

    if (!$dara.isNull(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!$dara.isNull(request.iotId)) {
      query["IotId"] = request.iotId;
    }

    if (!$dara.isNull(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!$dara.isNull(request.playUnLimited)) {
      query["PlayUnLimited"] = request.playUnLimited;
    }

    if (!$dara.isNull(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    if (!$dara.isNull(request.scheme)) {
      query["Scheme"] = request.scheme;
    }

    if (!$dara.isNull(request.seekTime)) {
      query["SeekTime"] = request.seekTime;
    }

    if (!$dara.isNull(request.shouldEncrypt)) {
      query["ShouldEncrypt"] = request.shouldEncrypt;
    }

    if (!$dara.isNull(request.urlValidDuration)) {
      query["UrlValidDuration"] = request.urlValidDuration;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryDeviceVodUrl",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryDeviceVodUrlResponse>(await this.callApi(params, req, runtime), new $_model.QueryDeviceVodUrlResponse({}));
  }

  /**
   * Retrieves the URL of a recording file with a specified file name from the storage card of a local network video recorder or IP camera.
   * 
   * @param request - QueryDeviceVodUrlRequest
   * @returns QueryDeviceVodUrlResponse
   */
  async queryDeviceVodUrl(request: $_model.QueryDeviceVodUrlRequest): Promise<$_model.QueryDeviceVodUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryDeviceVodUrlWithOptions(request, runtime);
  }

  /**
   * Retrieves the playback URL of a recording file within a specified time range from the storage card of a local network video recorder (NVR) or IP camera (IPC) device.
   * 
   * @remarks
   * ## Limits
   * This operation is supported only in scenarios where IPC devices are directly connected to IoT Platform.
   * 
   * @param request - QueryDeviceVodUrlByTimeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryDeviceVodUrlByTimeResponse
   */
  async queryDeviceVodUrlByTimeWithOptions(request: $_model.QueryDeviceVodUrlByTimeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryDeviceVodUrlByTimeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.beginTime)) {
      query["BeginTime"] = request.beginTime;
    }

    if (!$dara.isNull(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!$dara.isNull(request.enableStun)) {
      query["EnableStun"] = request.enableStun;
    }

    if (!$dara.isNull(request.encryptType)) {
      query["EncryptType"] = request.encryptType;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.iotId)) {
      query["IotId"] = request.iotId;
    }

    if (!$dara.isNull(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!$dara.isNull(request.playUnLimited)) {
      query["PlayUnLimited"] = request.playUnLimited;
    }

    if (!$dara.isNull(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    if (!$dara.isNull(request.scheme)) {
      query["Scheme"] = request.scheme;
    }

    if (!$dara.isNull(request.seekTime)) {
      query["SeekTime"] = request.seekTime;
    }

    if (!$dara.isNull(request.shouldEncrypt)) {
      query["ShouldEncrypt"] = request.shouldEncrypt;
    }

    if (!$dara.isNull(request.urlValidDuration)) {
      query["UrlValidDuration"] = request.urlValidDuration;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryDeviceVodUrlByTime",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryDeviceVodUrlByTimeResponse>(await this.callApi(params, req, runtime), new $_model.QueryDeviceVodUrlByTimeResponse({}));
  }

  /**
   * Retrieves the playback URL of a recording file within a specified time range from the storage card of a local network video recorder (NVR) or IP camera (IPC) device.
   * 
   * @remarks
   * ## Limits
   * This operation is supported only in scenarios where IPC devices are directly connected to IoT Platform.
   * 
   * @param request - QueryDeviceVodUrlByTimeRequest
   * @returns QueryDeviceVodUrlByTimeResponse
   */
  async queryDeviceVodUrlByTime(request: $_model.QueryDeviceVodUrlByTimeRequest): Promise<$_model.QueryDeviceVodUrlByTimeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryDeviceVodUrlByTimeWithOptions(request, runtime);
  }

  /**
   * Queries the details of an intelligent alert event recording plan.
   * 
   * @param request - QueryEventRecordPlanDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryEventRecordPlanDetailResponse
   */
  async queryEventRecordPlanDetailWithOptions(request: $_model.QueryEventRecordPlanDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryEventRecordPlanDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.planId)) {
      query["PlanId"] = request.planId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryEventRecordPlanDetail",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryEventRecordPlanDetailResponse>(await this.callApi(params, req, runtime), new $_model.QueryEventRecordPlanDetailResponse({}));
  }

  /**
   * Queries the details of an intelligent alert event recording plan.
   * 
   * @param request - QueryEventRecordPlanDetailRequest
   * @returns QueryEventRecordPlanDetailResponse
   */
  async queryEventRecordPlanDetail(request: $_model.QueryEventRecordPlanDetailRequest): Promise<$_model.QueryEventRecordPlanDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryEventRecordPlanDetailWithOptions(request, runtime);
  }

  /**
   * Queries the intelligent alert event recording plan of an IPC device by device ID.
   * 
   * @param request - QueryEventRecordPlanDeviceByDeviceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryEventRecordPlanDeviceByDeviceResponse
   */
  async queryEventRecordPlanDeviceByDeviceWithOptions(request: $_model.QueryEventRecordPlanDeviceByDeviceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryEventRecordPlanDeviceByDeviceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!$dara.isNull(request.iotId)) {
      query["IotId"] = request.iotId;
    }

    if (!$dara.isNull(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!$dara.isNull(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    if (!$dara.isNull(request.streamType)) {
      query["StreamType"] = request.streamType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryEventRecordPlanDeviceByDevice",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryEventRecordPlanDeviceByDeviceResponse>(await this.callApi(params, req, runtime), new $_model.QueryEventRecordPlanDeviceByDeviceResponse({}));
  }

  /**
   * Queries the intelligent alert event recording plan of an IPC device by device ID.
   * 
   * @param request - QueryEventRecordPlanDeviceByDeviceRequest
   * @returns QueryEventRecordPlanDeviceByDeviceResponse
   */
  async queryEventRecordPlanDeviceByDevice(request: $_model.QueryEventRecordPlanDeviceByDeviceRequest): Promise<$_model.QueryEventRecordPlanDeviceByDeviceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryEventRecordPlanDeviceByDeviceWithOptions(request, runtime);
  }

  /**
   * Queries the list of cameras associated with an intelligent alert event recording plan.
   * 
   * @param request - QueryEventRecordPlanDeviceByPlanRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryEventRecordPlanDeviceByPlanResponse
   */
  async queryEventRecordPlanDeviceByPlanWithOptions(request: $_model.QueryEventRecordPlanDeviceByPlanRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryEventRecordPlanDeviceByPlanResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.planId)) {
      query["PlanId"] = request.planId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryEventRecordPlanDeviceByPlan",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryEventRecordPlanDeviceByPlanResponse>(await this.callApi(params, req, runtime), new $_model.QueryEventRecordPlanDeviceByPlanResponse({}));
  }

  /**
   * Queries the list of cameras associated with an intelligent alert event recording plan.
   * 
   * @param request - QueryEventRecordPlanDeviceByPlanRequest
   * @returns QueryEventRecordPlanDeviceByPlanResponse
   */
  async queryEventRecordPlanDeviceByPlan(request: $_model.QueryEventRecordPlanDeviceByPlanRequest): Promise<$_model.QueryEventRecordPlanDeviceByPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryEventRecordPlanDeviceByPlanWithOptions(request, runtime);
  }

  /**
   * Queries the list of intelligent alert event recording plans.
   * 
   * @param request - QueryEventRecordPlansRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryEventRecordPlansResponse
   */
  async queryEventRecordPlansWithOptions(request: $_model.QueryEventRecordPlansRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryEventRecordPlansResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryEventRecordPlans",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryEventRecordPlansResponse>(await this.callApi(params, req, runtime), new $_model.QueryEventRecordPlansResponse({}));
  }

  /**
   * Queries the list of intelligent alert event recording plans.
   * 
   * @param request - QueryEventRecordPlansRequest
   * @returns QueryEventRecordPlansResponse
   */
  async queryEventRecordPlans(request: $_model.QueryEventRecordPlansRequest): Promise<$_model.QueryEventRecordPlansResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryEventRecordPlansWithOptions(request, runtime);
  }

  /**
   * Queries all device groups.
   * 
   * @param request - QueryFaceAllDeviceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryFaceAllDeviceGroupResponse
   */
  async queryFaceAllDeviceGroupWithOptions(request: $_model.QueryFaceAllDeviceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryFaceAllDeviceGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!$dara.isNull(request.isolationId)) {
      query["IsolationId"] = request.isolationId;
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
      action: "QueryFaceAllDeviceGroup",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryFaceAllDeviceGroupResponse>(await this.callApi(params, req, runtime), new $_model.QueryFaceAllDeviceGroupResponse({}));
  }

  /**
   * Queries all device groups.
   * 
   * @param request - QueryFaceAllDeviceGroupRequest
   * @returns QueryFaceAllDeviceGroupResponse
   */
  async queryFaceAllDeviceGroup(request: $_model.QueryFaceAllDeviceGroupRequest): Promise<$_model.QueryFaceAllDeviceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryFaceAllDeviceGroupWithOptions(request, runtime);
  }

  /**
   * Queries all user groups.
   * 
   * @param request - QueryFaceAllUserGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryFaceAllUserGroupResponse
   */
  async queryFaceAllUserGroupWithOptions(request: $_model.QueryFaceAllUserGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryFaceAllUserGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.isolationId)) {
      query["IsolationId"] = request.isolationId;
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
      action: "QueryFaceAllUserGroup",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryFaceAllUserGroupResponse>(await this.callApi(params, req, runtime), new $_model.QueryFaceAllUserGroupResponse({}));
  }

  /**
   * Queries all user groups.
   * 
   * @param request - QueryFaceAllUserGroupRequest
   * @returns QueryFaceAllUserGroupResponse
   */
  async queryFaceAllUserGroup(request: $_model.QueryFaceAllUserGroupRequest): Promise<$_model.QueryFaceAllUserGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryFaceAllUserGroupWithOptions(request, runtime);
  }

  /**
   * Queries the user groups and device groups with face synchronization relationships.
   * 
   * @param request - QueryFaceAllUserGroupAndDeviceGroupRelationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryFaceAllUserGroupAndDeviceGroupRelationResponse
   */
  async queryFaceAllUserGroupAndDeviceGroupRelationWithOptions(request: $_model.QueryFaceAllUserGroupAndDeviceGroupRelationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryFaceAllUserGroupAndDeviceGroupRelationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.isolationId)) {
      query["IsolationId"] = request.isolationId;
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
      action: "QueryFaceAllUserGroupAndDeviceGroupRelation",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryFaceAllUserGroupAndDeviceGroupRelationResponse>(await this.callApi(params, req, runtime), new $_model.QueryFaceAllUserGroupAndDeviceGroupRelationResponse({}));
  }

  /**
   * Queries the user groups and device groups with face synchronization relationships.
   * 
   * @param request - QueryFaceAllUserGroupAndDeviceGroupRelationRequest
   * @returns QueryFaceAllUserGroupAndDeviceGroupRelationResponse
   */
  async queryFaceAllUserGroupAndDeviceGroupRelation(request: $_model.QueryFaceAllUserGroupAndDeviceGroupRelationRequest): Promise<$_model.QueryFaceAllUserGroupAndDeviceGroupRelationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryFaceAllUserGroupAndDeviceGroupRelationWithOptions(request, runtime);
  }

  /**
   * Queries all users in a user group.
   * 
   * @param request - QueryFaceAllUserIdsByGroupIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryFaceAllUserIdsByGroupIdResponse
   */
  async queryFaceAllUserIdsByGroupIdWithOptions(request: $_model.QueryFaceAllUserIdsByGroupIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryFaceAllUserIdsByGroupIdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.isolationId)) {
      query["IsolationId"] = request.isolationId;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.userGroupId)) {
      query["UserGroupId"] = request.userGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryFaceAllUserIdsByGroupId",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryFaceAllUserIdsByGroupIdResponse>(await this.callApi(params, req, runtime), new $_model.QueryFaceAllUserIdsByGroupIdResponse({}));
  }

  /**
   * Queries all users in a user group.
   * 
   * @param request - QueryFaceAllUserIdsByGroupIdRequest
   * @returns QueryFaceAllUserIdsByGroupIdResponse
   */
  async queryFaceAllUserIdsByGroupId(request: $_model.QueryFaceAllUserIdsByGroupIdRequest): Promise<$_model.QueryFaceAllUserIdsByGroupIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryFaceAllUserIdsByGroupIdWithOptions(request, runtime);
  }

  /**
   * Queries the user ID in the caller\\"s service based on the user ID from the face image library synchronization service.
   * 
   * @param request - QueryFaceCustomUserIdByUserIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryFaceCustomUserIdByUserIdResponse
   */
  async queryFaceCustomUserIdByUserIdWithOptions(request: $_model.QueryFaceCustomUserIdByUserIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryFaceCustomUserIdByUserIdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.isolationId)) {
      query["IsolationId"] = request.isolationId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryFaceCustomUserIdByUserId",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryFaceCustomUserIdByUserIdResponse>(await this.callApi(params, req, runtime), new $_model.QueryFaceCustomUserIdByUserIdResponse({}));
  }

  /**
   * Queries the user ID in the caller\\"s service based on the user ID from the face image library synchronization service.
   * 
   * @param request - QueryFaceCustomUserIdByUserIdRequest
   * @returns QueryFaceCustomUserIdByUserIdResponse
   */
  async queryFaceCustomUserIdByUserId(request: $_model.QueryFaceCustomUserIdByUserIdRequest): Promise<$_model.QueryFaceCustomUserIdByUserIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryFaceCustomUserIdByUserIdWithOptions(request, runtime);
  }

  /**
   * Queries the device groups to which a device belongs.
   * 
   * @param request - QueryFaceDeviceGroupsByDeviceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryFaceDeviceGroupsByDeviceResponse
   */
  async queryFaceDeviceGroupsByDeviceWithOptions(request: $_model.QueryFaceDeviceGroupsByDeviceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryFaceDeviceGroupsByDeviceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!$dara.isNull(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!$dara.isNull(request.isolationId)) {
      query["IsolationId"] = request.isolationId;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryFaceDeviceGroupsByDevice",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryFaceDeviceGroupsByDeviceResponse>(await this.callApi(params, req, runtime), new $_model.QueryFaceDeviceGroupsByDeviceResponse({}));
  }

  /**
   * Queries the device groups to which a device belongs.
   * 
   * @param request - QueryFaceDeviceGroupsByDeviceRequest
   * @returns QueryFaceDeviceGroupsByDeviceResponse
   */
  async queryFaceDeviceGroupsByDevice(request: $_model.QueryFaceDeviceGroupsByDeviceRequest): Promise<$_model.QueryFaceDeviceGroupsByDeviceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryFaceDeviceGroupsByDeviceWithOptions(request, runtime);
  }

  /**
   * Queries the details of a user.
   * 
   * @param request - QueryFaceUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryFaceUserResponse
   */
  async queryFaceUserWithOptions(request: $_model.QueryFaceUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryFaceUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.isolationId)) {
      query["IsolationId"] = request.isolationId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryFaceUser",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryFaceUserResponse>(await this.callApi(params, req, runtime), new $_model.QueryFaceUserResponse({}));
  }

  /**
   * Queries the details of a user.
   * 
   * @param request - QueryFaceUserRequest
   * @returns QueryFaceUserResponse
   */
  async queryFaceUser(request: $_model.QueryFaceUserRequest): Promise<$_model.QueryFaceUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryFaceUserWithOptions(request, runtime);
  }

  /**
   * Queries user information in batches based on a list of user IDs.
   * 
   * @remarks
   * ## Usage notes
   * - The maximum queries per second (QPS) for a single Alibaba Cloud account to invoke this API operation is 100.
   *     > Resource Access Management (RAM) users share the quota of the Alibaba Cloud account.
   * 
   * @param request - QueryFaceUserBatchRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryFaceUserBatchResponse
   */
  async queryFaceUserBatchWithOptions(request: $_model.QueryFaceUserBatchRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryFaceUserBatchResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.isolationId)) {
      query["IsolationId"] = request.isolationId;
    }

    if (!$dara.isNull(request.userIdList)) {
      query["UserIdList"] = request.userIdList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryFaceUserBatch",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryFaceUserBatchResponse>(await this.callApi(params, req, runtime), new $_model.QueryFaceUserBatchResponse({}));
  }

  /**
   * Queries user information in batches based on a list of user IDs.
   * 
   * @remarks
   * ## Usage notes
   * - The maximum queries per second (QPS) for a single Alibaba Cloud account to invoke this API operation is 100.
   *     > Resource Access Management (RAM) users share the quota of the Alibaba Cloud account.
   * 
   * @param request - QueryFaceUserBatchRequest
   * @returns QueryFaceUserBatchResponse
   */
  async queryFaceUserBatch(request: $_model.QueryFaceUserBatchRequest): Promise<$_model.QueryFaceUserBatchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryFaceUserBatchWithOptions(request, runtime);
  }

  /**
   * Queries face data by face name.
   * 
   * @remarks
   * ## Usage notes
   * - The maximum queries per second (QPS) for a single Alibaba Cloud account to invoke this API operation is 100.
   *     > Resource Access Management (RAM) users share the quota of the Alibaba Cloud account.
   * 
   * @param request - QueryFaceUserByNameRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryFaceUserByNameResponse
   */
  async queryFaceUserByNameWithOptions(request: $_model.QueryFaceUserByNameRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryFaceUserByNameResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.isolationId)) {
      query["IsolationId"] = request.isolationId;
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

    if (!$dara.isNull(request.params)) {
      query["Params"] = request.params;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryFaceUserByName",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryFaceUserByNameResponse>(await this.callApi(params, req, runtime), new $_model.QueryFaceUserByNameResponse({}));
  }

  /**
   * Queries face data by face name.
   * 
   * @remarks
   * ## Usage notes
   * - The maximum queries per second (QPS) for a single Alibaba Cloud account to invoke this API operation is 100.
   *     > Resource Access Management (RAM) users share the quota of the Alibaba Cloud account.
   * 
   * @param request - QueryFaceUserByNameRequest
   * @returns QueryFaceUserByNameResponse
   */
  async queryFaceUserByName(request: $_model.QueryFaceUserByNameRequest): Promise<$_model.QueryFaceUserByNameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryFaceUserByNameWithOptions(request, runtime);
  }

  /**
   * Queries the user groups to which a user belongs.
   * 
   * @param request - QueryFaceUserGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryFaceUserGroupResponse
   */
  async queryFaceUserGroupWithOptions(request: $_model.QueryFaceUserGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryFaceUserGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.isolationId)) {
      query["IsolationId"] = request.isolationId;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryFaceUserGroup",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryFaceUserGroupResponse>(await this.callApi(params, req, runtime), new $_model.QueryFaceUserGroupResponse({}));
  }

  /**
   * Queries the user groups to which a user belongs.
   * 
   * @param request - QueryFaceUserGroupRequest
   * @returns QueryFaceUserGroupResponse
   */
  async queryFaceUserGroup(request: $_model.QueryFaceUserGroupRequest): Promise<$_model.QueryFaceUserGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryFaceUserGroupWithOptions(request, runtime);
  }

  /**
   * Queries the face synchronization relationships between user groups and device groups.
   * 
   * @param request - QueryFaceUserGroupAndDeviceGroupRelationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryFaceUserGroupAndDeviceGroupRelationResponse
   */
  async queryFaceUserGroupAndDeviceGroupRelationWithOptions(request: $_model.QueryFaceUserGroupAndDeviceGroupRelationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryFaceUserGroupAndDeviceGroupRelationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.controlId)) {
      query["ControlId"] = request.controlId;
    }

    if (!$dara.isNull(request.isolationId)) {
      query["IsolationId"] = request.isolationId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryFaceUserGroupAndDeviceGroupRelation",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryFaceUserGroupAndDeviceGroupRelationResponse>(await this.callApi(params, req, runtime), new $_model.QueryFaceUserGroupAndDeviceGroupRelationResponse({}));
  }

  /**
   * Queries the face synchronization relationships between user groups and device groups.
   * 
   * @param request - QueryFaceUserGroupAndDeviceGroupRelationRequest
   * @returns QueryFaceUserGroupAndDeviceGroupRelationResponse
   */
  async queryFaceUserGroupAndDeviceGroupRelation(request: $_model.QueryFaceUserGroupAndDeviceGroupRelationRequest): Promise<$_model.QueryFaceUserGroupAndDeviceGroupRelationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryFaceUserGroupAndDeviceGroupRelationWithOptions(request, runtime);
  }

  /**
   * Queries the user ID in the face library synchronization service based on the user ID in the caller system.
   * 
   * @param request - QueryFaceUserIdByCustomUserIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryFaceUserIdByCustomUserIdResponse
   */
  async queryFaceUserIdByCustomUserIdWithOptions(request: $_model.QueryFaceUserIdByCustomUserIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryFaceUserIdByCustomUserIdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.customUserId)) {
      query["CustomUserId"] = request.customUserId;
    }

    if (!$dara.isNull(request.isolationId)) {
      query["IsolationId"] = request.isolationId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryFaceUserIdByCustomUserId",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryFaceUserIdByCustomUserIdResponse>(await this.callApi(params, req, runtime), new $_model.QueryFaceUserIdByCustomUserIdResponse({}));
  }

  /**
   * Queries the user ID in the face library synchronization service based on the user ID in the caller system.
   * 
   * @param request - QueryFaceUserIdByCustomUserIdRequest
   * @returns QueryFaceUserIdByCustomUserIdResponse
   */
  async queryFaceUserIdByCustomUserId(request: $_model.QueryFaceUserIdByCustomUserIdRequest): Promise<$_model.QueryFaceUserIdByCustomUserIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryFaceUserIdByCustomUserIdWithOptions(request, runtime);
  }

  /**
   * @param request - QueryGbSubDeviceListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryGbSubDeviceListResponse
   */
  async queryGbSubDeviceListWithOptions(request: $_model.QueryGbSubDeviceListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryGbSubDeviceListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!$dara.isNull(request.iotId)) {
      query["IotId"] = request.iotId;
    }

    if (!$dara.isNull(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.pageStart)) {
      query["PageStart"] = request.pageStart;
    }

    if (!$dara.isNull(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryGbSubDeviceList",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryGbSubDeviceListResponse>(await this.callApi(params, req, runtime), new $_model.QueryGbSubDeviceListResponse({}));
  }

  /**
   * @param request - QueryGbSubDeviceListRequest
   * @returns QueryGbSubDeviceListResponse
   */
  async queryGbSubDeviceList(request: $_model.QueryGbSubDeviceListRequest): Promise<$_model.QueryGbSubDeviceListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryGbSubDeviceListWithOptions(request, runtime);
  }

  /**
   * Retrieves the live streaming URL of an IPC device.
   * 
   * @param request - QueryLiveStreamingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryLiveStreamingResponse
   */
  async queryLiveStreamingWithOptions(request: $_model.QueryLiveStreamingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryLiveStreamingResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cacheDuration)) {
      query["CacheDuration"] = request.cacheDuration;
    }

    if (!$dara.isNull(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!$dara.isNull(request.enableStun)) {
      query["EnableStun"] = request.enableStun;
    }

    if (!$dara.isNull(request.encryptType)) {
      query["EncryptType"] = request.encryptType;
    }

    if (!$dara.isNull(request.forceIFrame)) {
      query["ForceIFrame"] = request.forceIFrame;
    }

    if (!$dara.isNull(request.iotId)) {
      query["IotId"] = request.iotId;
    }

    if (!$dara.isNull(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!$dara.isNull(request.playUnLimited)) {
      query["PlayUnLimited"] = request.playUnLimited;
    }

    if (!$dara.isNull(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    if (!$dara.isNull(request.scheme)) {
      query["Scheme"] = request.scheme;
    }

    if (!$dara.isNull(request.shouldEncrypt)) {
      query["ShouldEncrypt"] = request.shouldEncrypt;
    }

    if (!$dara.isNull(request.streamType)) {
      query["StreamType"] = request.streamType;
    }

    if (!$dara.isNull(request.urlValidDuration)) {
      query["UrlValidDuration"] = request.urlValidDuration;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryLiveStreaming",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryLiveStreamingResponse>(await this.callApi(params, req, runtime), new $_model.QueryLiveStreamingResponse({}));
  }

  /**
   * Retrieves the live streaming URL of an IPC device.
   * 
   * @param request - QueryLiveStreamingRequest
   * @returns QueryLiveStreamingResponse
   */
  async queryLiveStreaming(request: $_model.QueryLiveStreamingRequest): Promise<$_model.QueryLiveStreamingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryLiveStreamingWithOptions(request, runtime);
  }

  /**
   * Queries the task result of a local video recording upload node.
   * 
   * @param request - QueryLocalFileUploadJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryLocalFileUploadJobResponse
   */
  async queryLocalFileUploadJobWithOptions(request: $_model.QueryLocalFileUploadJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryLocalFileUploadJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryLocalFileUploadJob",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryLocalFileUploadJobResponse>(await this.callApi(params, req, runtime), new $_model.QueryLocalFileUploadJobResponse({}));
  }

  /**
   * Queries the task result of a local video recording upload node.
   * 
   * @param request - QueryLocalFileUploadJobRequest
   * @returns QueryLocalFileUploadJobResponse
   */
  async queryLocalFileUploadJob(request: $_model.QueryLocalFileUploadJobRequest): Promise<$_model.QueryLocalFileUploadJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryLocalFileUploadJobWithOptions(request, runtime);
  }

  /**
   * Queries whether an IP camera has video recordings for each day of a specified month.
   * 
   * @param request - QueryMonthRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryMonthRecordResponse
   */
  async queryMonthRecordWithOptions(request: $_model.QueryMonthRecordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryMonthRecordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!$dara.isNull(request.iotId)) {
      query["IotId"] = request.iotId;
    }

    if (!$dara.isNull(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!$dara.isNull(request.month)) {
      query["Month"] = request.month;
    }

    if (!$dara.isNull(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryMonthRecord",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryMonthRecordResponse>(await this.callApi(params, req, runtime), new $_model.QueryMonthRecordResponse({}));
  }

  /**
   * Queries whether an IP camera has video recordings for each day of a specified month.
   * 
   * @param request - QueryMonthRecordRequest
   * @returns QueryMonthRecordResponse
   */
  async queryMonthRecord(request: $_model.QueryMonthRecordRequest): Promise<$_model.QueryMonthRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryMonthRecordWithOptions(request, runtime);
  }

  /**
   * Retrieves a list of images.
   * 
   * @remarks
   * ## QPS limit
   * The maximum queries per second (QPS) for a single Alibaba Cloud account to invoke this API operation is 500.
   * > All Resource Access Management (RAM) users under a single Alibaba Cloud account share the quota of the Alibaba Cloud account.
   * 
   * @param request - QueryPictureFilesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryPictureFilesResponse
   */
  async queryPictureFilesWithOptions(request: $_model.QueryPictureFilesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryPictureFilesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.beginTime)) {
      query["BeginTime"] = request.beginTime;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.iotId)) {
      query["IotId"] = request.iotId;
    }

    if (!$dara.isNull(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.pictureSource)) {
      query["PictureSource"] = request.pictureSource;
    }

    if (!$dara.isNull(request.pictureType)) {
      query["PictureType"] = request.pictureType;
    }

    if (!$dara.isNull(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryPictureFiles",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryPictureFilesResponse>(await this.callApi(params, req, runtime), new $_model.QueryPictureFilesResponse({}));
  }

  /**
   * Retrieves a list of images.
   * 
   * @remarks
   * ## QPS limit
   * The maximum queries per second (QPS) for a single Alibaba Cloud account to invoke this API operation is 500.
   * > All Resource Access Management (RAM) users under a single Alibaba Cloud account share the quota of the Alibaba Cloud account.
   * 
   * @param request - QueryPictureFilesRequest
   * @returns QueryPictureFilesResponse
   */
  async queryPictureFiles(request: $_model.QueryPictureFilesRequest): Promise<$_model.QueryPictureFilesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryPictureFilesWithOptions(request, runtime);
  }

  /**
   * Queries the list of V-series edge all-in-one machines bound to an image search application instance.
   * 
   * @param request - QueryPictureSearchAiboxesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryPictureSearchAiboxesResponse
   */
  async queryPictureSearchAiboxesWithOptions(request: $_model.QueryPictureSearchAiboxesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryPictureSearchAiboxesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appInstanceId)) {
      query["AppInstanceId"] = request.appInstanceId;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryPictureSearchAiboxes",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryPictureSearchAiboxesResponse>(await this.callApi(params, req, runtime), new $_model.QueryPictureSearchAiboxesResponse({}));
  }

  /**
   * Queries the list of V-series edge all-in-one machines bound to an image search application instance.
   * 
   * @param request - QueryPictureSearchAiboxesRequest
   * @returns QueryPictureSearchAiboxesResponse
   */
  async queryPictureSearchAiboxes(request: $_model.QueryPictureSearchAiboxesRequest): Promise<$_model.QueryPictureSearchAiboxesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryPictureSearchAiboxesWithOptions(request, runtime);
  }

  /**
   * Queries the list of created image search application instances.
   * 
   * @remarks
   * ## Limits
   * The maximum queries per second (QPS) for a single Alibaba Cloud account to invoke this API operation is 100.
   * > Resource Access Management (RAM) users share the quota of the Alibaba Cloud account.
   * 
   * @param request - QueryPictureSearchAppsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryPictureSearchAppsResponse
   */
  async queryPictureSearchAppsWithOptions(request: $_model.QueryPictureSearchAppsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryPictureSearchAppsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryPictureSearchApps",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryPictureSearchAppsResponse>(await this.callApi(params, req, runtime), new $_model.QueryPictureSearchAppsResponse({}));
  }

  /**
   * Queries the list of created image search application instances.
   * 
   * @remarks
   * ## Limits
   * The maximum queries per second (QPS) for a single Alibaba Cloud account to invoke this API operation is 100.
   * > Resource Access Management (RAM) users share the quota of the Alibaba Cloud account.
   * 
   * @param request - QueryPictureSearchAppsRequest
   * @returns QueryPictureSearchAppsResponse
   */
  async queryPictureSearchApps(request: $_model.QueryPictureSearchAppsRequest): Promise<$_model.QueryPictureSearchAppsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryPictureSearchAppsWithOptions(request, runtime);
  }

  /**
   * Queries the list of devices bound to an image search application instance.
   * 
   * @param request - QueryPictureSearchDevicesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryPictureSearchDevicesResponse
   */
  async queryPictureSearchDevicesWithOptions(request: $_model.QueryPictureSearchDevicesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryPictureSearchDevicesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appInstanceId)) {
      query["AppInstanceId"] = request.appInstanceId;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryPictureSearchDevices",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryPictureSearchDevicesResponse>(await this.callApi(params, req, runtime), new $_model.QueryPictureSearchDevicesResponse({}));
  }

  /**
   * Queries the list of devices bound to an image search application instance.
   * 
   * @param request - QueryPictureSearchDevicesRequest
   * @returns QueryPictureSearchDevicesResponse
   */
  async queryPictureSearchDevices(request: $_model.QueryPictureSearchDevicesRequest): Promise<$_model.QueryPictureSearchDevicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryPictureSearchDevicesWithOptions(request, runtime);
  }

  /**
   * Queries the list of integrated image search jobs.
   * 
   * @remarks
   * Integrated image search means that both faces and human bodies are retrieved simultaneously during an image search.
   * > This feature requires the deployment of face and human body detection algorithms on V-series edge all-in-one machines.
   * 
   * @param request - QueryPictureSearchJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryPictureSearchJobResponse
   */
  async queryPictureSearchJobWithOptions(request: $_model.QueryPictureSearchJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryPictureSearchJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appInstanceId)) {
      query["AppInstanceId"] = request.appInstanceId;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.jobStatus)) {
      query["JobStatus"] = request.jobStatus;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryPictureSearchJob",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryPictureSearchJobResponse>(await this.callApi(params, req, runtime), new $_model.QueryPictureSearchJobResponse({}));
  }

  /**
   * Queries the list of integrated image search jobs.
   * 
   * @remarks
   * Integrated image search means that both faces and human bodies are retrieved simultaneously during an image search.
   * > This feature requires the deployment of face and human body detection algorithms on V-series edge all-in-one machines.
   * 
   * @param request - QueryPictureSearchJobRequest
   * @returns QueryPictureSearchJobResponse
   */
  async queryPictureSearchJob(request: $_model.QueryPictureSearchJobRequest): Promise<$_model.QueryPictureSearchJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryPictureSearchJobWithOptions(request, runtime);
  }

  /**
   * Queries the image retrieval results of an integrated image search job.
   * 
   * @param request - QueryPictureSearchJobResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryPictureSearchJobResultResponse
   */
  async queryPictureSearchJobResultWithOptions(request: $_model.QueryPictureSearchJobResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryPictureSearchJobResultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appInstanceId)) {
      query["AppInstanceId"] = request.appInstanceId;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryPictureSearchJobResult",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryPictureSearchJobResultResponse>(await this.callApi(params, req, runtime), new $_model.QueryPictureSearchJobResultResponse({}));
  }

  /**
   * Queries the image retrieval results of an integrated image search job.
   * 
   * @param request - QueryPictureSearchJobResultRequest
   * @returns QueryPictureSearchJobResultResponse
   */
  async queryPictureSearchJobResult(request: $_model.QueryPictureSearchJobResultRequest): Promise<$_model.QueryPictureSearchJobResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryPictureSearchJobResultWithOptions(request, runtime);
  }

  /**
   * Queries the list of cloud video recordings.
   * 
   * @remarks
   * ## QPS limit
   * The maximum queries per second (QPS) for a single Alibaba Cloud account to invoke this API operation is 250.
   * > All Resource Access Management (RAM) users within a single Alibaba Cloud account share the quota of the Alibaba Cloud account.
   * 
   * @param request - QueryRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryRecordResponse
   */
  async queryRecordWithOptions(request: $_model.QueryRecordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryRecordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.beginTime)) {
      query["BeginTime"] = request.beginTime;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.iotId)) {
      query["IotId"] = request.iotId;
    }

    if (!$dara.isNull(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!$dara.isNull(request.needSnapshot)) {
      query["NeedSnapshot"] = request.needSnapshot;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    if (!$dara.isNull(request.recordType)) {
      query["RecordType"] = request.recordType;
    }

    if (!$dara.isNull(request.streamType)) {
      query["StreamType"] = request.streamType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryRecord",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryRecordResponse>(await this.callApi(params, req, runtime), new $_model.QueryRecordResponse({}));
  }

  /**
   * Queries the list of cloud video recordings.
   * 
   * @remarks
   * ## QPS limit
   * The maximum queries per second (QPS) for a single Alibaba Cloud account to invoke this API operation is 250.
   * > All Resource Access Management (RAM) users within a single Alibaba Cloud account share the quota of the Alibaba Cloud account.
   * 
   * @param request - QueryRecordRequest
   * @returns QueryRecordResponse
   */
  async queryRecord(request: $_model.QueryRecordRequest): Promise<$_model.QueryRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryRecordWithOptions(request, runtime);
  }

  /**
   * Queries the URL of a recording file by recording file ID.
   * 
   * @param request - QueryRecordByRecordIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryRecordByRecordIdResponse
   */
  async queryRecordByRecordIdWithOptions(request: $_model.QueryRecordByRecordIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryRecordByRecordIdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!$dara.isNull(request.iotId)) {
      query["IotId"] = request.iotId;
    }

    if (!$dara.isNull(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!$dara.isNull(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    if (!$dara.isNull(request.recordId)) {
      query["RecordId"] = request.recordId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryRecordByRecordId",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryRecordByRecordIdResponse>(await this.callApi(params, req, runtime), new $_model.QueryRecordByRecordIdResponse({}));
  }

  /**
   * Queries the URL of a recording file by recording file ID.
   * 
   * @param request - QueryRecordByRecordIdRequest
   * @returns QueryRecordByRecordIdResponse
   */
  async queryRecordByRecordId(request: $_model.QueryRecordByRecordIdRequest): Promise<$_model.QueryRecordByRecordIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryRecordByRecordIdWithOptions(request, runtime);
  }

  /**
   * Queries the details of a cloud record download task by task ID, including the start time, recording progress, recording type, and download URL.
   * 
   * @remarks
   * ## Limits
   * The obtained recording download URL is valid for 1 hour.
   * ## QPS limits
   * The maximum queries per second (QPS) for a single Alibaba Cloud account to invoke this API operation is 50.
   * > All Resource Access Management (RAM) users under a single Alibaba Cloud account share the quota of the Alibaba Cloud account.
   * 
   * @param request - QueryRecordDownloadJobByIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryRecordDownloadJobByIdResponse
   */
  async queryRecordDownloadJobByIdWithOptions(request: $_model.QueryRecordDownloadJobByIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryRecordDownloadJobByIdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryRecordDownloadJobById",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryRecordDownloadJobByIdResponse>(await this.callApi(params, req, runtime), new $_model.QueryRecordDownloadJobByIdResponse({}));
  }

  /**
   * Queries the details of a cloud record download task by task ID, including the start time, recording progress, recording type, and download URL.
   * 
   * @remarks
   * ## Limits
   * The obtained recording download URL is valid for 1 hour.
   * ## QPS limits
   * The maximum queries per second (QPS) for a single Alibaba Cloud account to invoke this API operation is 50.
   * > All Resource Access Management (RAM) users under a single Alibaba Cloud account share the quota of the Alibaba Cloud account.
   * 
   * @param request - QueryRecordDownloadJobByIdRequest
   * @returns QueryRecordDownloadJobByIdResponse
   */
  async queryRecordDownloadJobById(request: $_model.QueryRecordDownloadJobByIdRequest): Promise<$_model.QueryRecordDownloadJobByIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryRecordDownloadJobByIdWithOptions(request, runtime);
  }

  /**
   * Queries the list of cloud recording download tasks.
   * 
   * @remarks
   * ## Limits
   * The obtained recording download URL is valid for 1 hour.
   * ## QPS limits
   * The maximum queries per second (QPS) for a single Alibaba Cloud account to invoke this API operation is 50.
   * > All Resource Access Management (RAM) users within a single Alibaba Cloud account share the quota of the Alibaba Cloud account.
   * 
   * @param request - QueryRecordDownloadJobListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryRecordDownloadJobListResponse
   */
  async queryRecordDownloadJobListWithOptions(request: $_model.QueryRecordDownloadJobListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryRecordDownloadJobListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!$dara.isNull(request.iotId)) {
      query["IotId"] = request.iotId;
    }

    if (!$dara.isNull(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryRecordDownloadJobList",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryRecordDownloadJobListResponse>(await this.callApi(params, req, runtime), new $_model.QueryRecordDownloadJobListResponse({}));
  }

  /**
   * Queries the list of cloud recording download tasks.
   * 
   * @remarks
   * ## Limits
   * The obtained recording download URL is valid for 1 hour.
   * ## QPS limits
   * The maximum queries per second (QPS) for a single Alibaba Cloud account to invoke this API operation is 50.
   * > All Resource Access Management (RAM) users within a single Alibaba Cloud account share the quota of the Alibaba Cloud account.
   * 
   * @param request - QueryRecordDownloadJobListRequest
   * @returns QueryRecordDownloadJobListResponse
   */
  async queryRecordDownloadJobList(request: $_model.QueryRecordDownloadJobListRequest): Promise<$_model.QueryRecordDownloadJobListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryRecordDownloadJobListWithOptions(request, runtime);
  }

  /**
   * Requests the download URL of a cloud recording file.
   * 
   * @remarks
   * ## Usage notes
   * Generating a cloud recording file takes a long time. You must poll this operation to obtain the progress. The download URL is generated only after the progress is complete.
   * 
   * @param request - QueryRecordDownloadUrlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryRecordDownloadUrlResponse
   */
  async queryRecordDownloadUrlWithOptions(request: $_model.QueryRecordDownloadUrlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryRecordDownloadUrlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!$dara.isNull(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!$dara.isNull(request.iotId)) {
      query["IotId"] = request.iotId;
    }

    if (!$dara.isNull(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!$dara.isNull(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryRecordDownloadUrl",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryRecordDownloadUrlResponse>(await this.callApi(params, req, runtime), new $_model.QueryRecordDownloadUrlResponse({}));
  }

  /**
   * Requests the download URL of a cloud recording file.
   * 
   * @remarks
   * ## Usage notes
   * Generating a cloud recording file takes a long time. You must poll this operation to obtain the progress. The download URL is generated only after the progress is complete.
   * 
   * @param request - QueryRecordDownloadUrlRequest
   * @returns QueryRecordDownloadUrlResponse
   */
  async queryRecordDownloadUrl(request: $_model.QueryRecordDownloadUrlRequest): Promise<$_model.QueryRecordDownloadUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryRecordDownloadUrlWithOptions(request, runtime);
  }

  /**
   * Queries the details of a recording plan.
   * 
   * @param request - QueryRecordPlanDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryRecordPlanDetailResponse
   */
  async queryRecordPlanDetailWithOptions(request: $_model.QueryRecordPlanDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryRecordPlanDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.planId)) {
      query["PlanId"] = request.planId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryRecordPlanDetail",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryRecordPlanDetailResponse>(await this.callApi(params, req, runtime), new $_model.QueryRecordPlanDetailResponse({}));
  }

  /**
   * Queries the details of a recording plan.
   * 
   * @param request - QueryRecordPlanDetailRequest
   * @returns QueryRecordPlanDetailResponse
   */
  async queryRecordPlanDetail(request: $_model.QueryRecordPlanDetailRequest): Promise<$_model.QueryRecordPlanDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryRecordPlanDetailWithOptions(request, runtime);
  }

  /**
   * Queries the recording plan of a video device based on the device ID of the IP camera (IPC).
   * 
   * @param request - QueryRecordPlanDeviceByDeviceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryRecordPlanDeviceByDeviceResponse
   */
  async queryRecordPlanDeviceByDeviceWithOptions(request: $_model.QueryRecordPlanDeviceByDeviceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryRecordPlanDeviceByDeviceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!$dara.isNull(request.iotId)) {
      query["IotId"] = request.iotId;
    }

    if (!$dara.isNull(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!$dara.isNull(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    if (!$dara.isNull(request.streamType)) {
      query["StreamType"] = request.streamType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryRecordPlanDeviceByDevice",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryRecordPlanDeviceByDeviceResponse>(await this.callApi(params, req, runtime), new $_model.QueryRecordPlanDeviceByDeviceResponse({}));
  }

  /**
   * Queries the recording plan of a video device based on the device ID of the IP camera (IPC).
   * 
   * @param request - QueryRecordPlanDeviceByDeviceRequest
   * @returns QueryRecordPlanDeviceByDeviceResponse
   */
  async queryRecordPlanDeviceByDevice(request: $_model.QueryRecordPlanDeviceByDeviceRequest): Promise<$_model.QueryRecordPlanDeviceByDeviceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryRecordPlanDeviceByDeviceWithOptions(request, runtime);
  }

  /**
   * Queries the devices associated with a recording plan.
   * 
   * @param request - QueryRecordPlanDeviceByPlanRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryRecordPlanDeviceByPlanResponse
   */
  async queryRecordPlanDeviceByPlanWithOptions(request: $_model.QueryRecordPlanDeviceByPlanRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryRecordPlanDeviceByPlanResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.planId)) {
      query["PlanId"] = request.planId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryRecordPlanDeviceByPlan",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryRecordPlanDeviceByPlanResponse>(await this.callApi(params, req, runtime), new $_model.QueryRecordPlanDeviceByPlanResponse({}));
  }

  /**
   * Queries the devices associated with a recording plan.
   * 
   * @param request - QueryRecordPlanDeviceByPlanRequest
   * @returns QueryRecordPlanDeviceByPlanResponse
   */
  async queryRecordPlanDeviceByPlan(request: $_model.QueryRecordPlanDeviceByPlanRequest): Promise<$_model.QueryRecordPlanDeviceByPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryRecordPlanDeviceByPlanWithOptions(request, runtime);
  }

  /**
   * Queries a list of recording plans.
   * 
   * @param request - QueryRecordPlansRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryRecordPlansResponse
   */
  async queryRecordPlansWithOptions(request: $_model.QueryRecordPlansRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryRecordPlansResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryRecordPlans",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryRecordPlansResponse>(await this.callApi(params, req, runtime), new $_model.QueryRecordPlansResponse({}));
  }

  /**
   * Queries a list of recording plans.
   * 
   * @param request - QueryRecordPlansRequest
   * @returns QueryRecordPlansResponse
   */
  async queryRecordPlans(request: $_model.QueryRecordPlansRequest): Promise<$_model.QueryRecordPlansResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryRecordPlansWithOptions(request, runtime);
  }

  /**
   * Queries the playback URL of a cloud recording file.
   * 
   * @param request - QueryRecordUrlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryRecordUrlResponse
   */
  async queryRecordUrlWithOptions(request: $_model.QueryRecordUrlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryRecordUrlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!$dara.isNull(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!$dara.isNull(request.iotId)) {
      query["IotId"] = request.iotId;
    }

    if (!$dara.isNull(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!$dara.isNull(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    if (!$dara.isNull(request.seekTime)) {
      query["SeekTime"] = request.seekTime;
    }

    if (!$dara.isNull(request.urlValidDuration)) {
      query["UrlValidDuration"] = request.urlValidDuration;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryRecordUrl",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryRecordUrlResponse>(await this.callApi(params, req, runtime), new $_model.QueryRecordUrlResponse({}));
  }

  /**
   * Queries the playback URL of a cloud recording file.
   * 
   * @param request - QueryRecordUrlRequest
   * @returns QueryRecordUrlResponse
   */
  async queryRecordUrl(request: $_model.QueryRecordUrlRequest): Promise<$_model.QueryRecordUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryRecordUrlWithOptions(request, runtime);
  }

  /**
   * Retrieves the playback URL for recording files within a specified time range.
   * 
   * @param request - QueryRecordUrlByTimeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryRecordUrlByTimeResponse
   */
  async queryRecordUrlByTimeWithOptions(request: $_model.QueryRecordUrlByTimeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryRecordUrlByTimeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.beginTime)) {
      query["BeginTime"] = request.beginTime;
    }

    if (!$dara.isNull(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.iotId)) {
      query["IotId"] = request.iotId;
    }

    if (!$dara.isNull(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!$dara.isNull(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    if (!$dara.isNull(request.streamType)) {
      query["StreamType"] = request.streamType;
    }

    if (!$dara.isNull(request.urlValidDuration)) {
      query["UrlValidDuration"] = request.urlValidDuration;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryRecordUrlByTime",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryRecordUrlByTimeResponse>(await this.callApi(params, req, runtime), new $_model.QueryRecordUrlByTimeResponse({}));
  }

  /**
   * Retrieves the playback URL for recording files within a specified time range.
   * 
   * @param request - QueryRecordUrlByTimeRequest
   * @returns QueryRecordUrlByTimeResponse
   */
  async queryRecordUrlByTime(request: $_model.QueryRecordUrlByTimeRequest): Promise<$_model.QueryRecordUrlByTimeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryRecordUrlByTimeWithOptions(request, runtime);
  }

  /**
   * @param request - QueryRtmpKeyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryRtmpKeyResponse
   */
  async queryRtmpKeyWithOptions(request: $_model.QueryRtmpKeyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryRtmpKeyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!$dara.isNull(request.iotId)) {
      query["IotId"] = request.iotId;
    }

    if (!$dara.isNull(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!$dara.isNull(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryRtmpKey",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryRtmpKeyResponse>(await this.callApi(params, req, runtime), new $_model.QueryRtmpKeyResponse({}));
  }

  /**
   * @param request - QueryRtmpKeyRequest
   * @returns QueryRtmpKeyResponse
   */
  async queryRtmpKey(request: $_model.QueryRtmpKeyRequest): Promise<$_model.QueryRtmpKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryRtmpKeyWithOptions(request, runtime);
  }

  /**
   * Queries the details of a video stream push job, such as the creation time, current push status, job type, and push URL.
   * 
   * @remarks
   * ## QPS limit
   * The maximum queries per second (QPS) for a single Alibaba Cloud account to call this API operation is 50.
   * > All Resource Access Management (RAM) users within a single Alibaba Cloud account share the quota of the Alibaba Cloud account.
   * 
   * @param request - QueryStreamPushJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryStreamPushJobResponse
   */
  async queryStreamPushJobWithOptions(request: $_model.QueryStreamPushJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryStreamPushJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!$dara.isNull(request.iotId)) {
      query["IotId"] = request.iotId;
    }

    if (!$dara.isNull(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryStreamPushJob",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryStreamPushJobResponse>(await this.callApi(params, req, runtime), new $_model.QueryStreamPushJobResponse({}));
  }

  /**
   * Queries the details of a video stream push job, such as the creation time, current push status, job type, and push URL.
   * 
   * @remarks
   * ## QPS limit
   * The maximum queries per second (QPS) for a single Alibaba Cloud account to call this API operation is 50.
   * > All Resource Access Management (RAM) users within a single Alibaba Cloud account share the quota of the Alibaba Cloud account.
   * 
   * @param request - QueryStreamPushJobRequest
   * @returns QueryStreamPushJobResponse
   */
  async queryStreamPushJob(request: $_model.QueryStreamPushJobRequest): Promise<$_model.QueryStreamPushJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryStreamPushJobWithOptions(request, runtime);
  }

  /**
   * Queries the list and details of video stream push jobs, including the creation time, current push status, job type, and push URL.
   * 
   * @remarks
   * ## QPS limit
   * The maximum queries per second (QPS) for a single Alibaba Cloud account to invoke this operation is 50.
   * > All Resource Access Management (RAM) users under a single Alibaba Cloud account share the quota of the Alibaba Cloud account.
   * 
   * @param request - QueryStreamPushJobListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryStreamPushJobListResponse
   */
  async queryStreamPushJobListWithOptions(request: $_model.QueryStreamPushJobListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryStreamPushJobListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!$dara.isNull(request.iotId)) {
      query["IotId"] = request.iotId;
    }

    if (!$dara.isNull(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!$dara.isNull(request.jobType)) {
      query["JobType"] = request.jobType;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryStreamPushJobList",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryStreamPushJobListResponse>(await this.callApi(params, req, runtime), new $_model.QueryStreamPushJobListResponse({}));
  }

  /**
   * Queries the list and details of video stream push jobs, including the creation time, current push status, job type, and push URL.
   * 
   * @remarks
   * ## QPS limit
   * The maximum queries per second (QPS) for a single Alibaba Cloud account to invoke this operation is 50.
   * > All Resource Access Management (RAM) users under a single Alibaba Cloud account share the quota of the Alibaba Cloud account.
   * 
   * @param request - QueryStreamPushJobListRequest
   * @returns QueryStreamPushJobListResponse
   */
  async queryStreamPushJobList(request: $_model.QueryStreamPushJobListRequest): Promise<$_model.QueryStreamPushJobListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryStreamPushJobListWithOptions(request, runtime);
  }

  /**
   * Queries the list and details of cloud snapshot tasks, including the snapshot interval and stream type.
   * 
   * @remarks
   * ## QPS limits
   * The maximum queries per second (QPS) for a single Alibaba Cloud account to invoke this API operation is 50.
   * > All Resource Access Management (RAM) users under a single Alibaba Cloud account share the quota of the Alibaba Cloud account.
   * 
   * @param request - QueryStreamSnapshotJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryStreamSnapshotJobResponse
   */
  async queryStreamSnapshotJobWithOptions(request: $_model.QueryStreamSnapshotJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryStreamSnapshotJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!$dara.isNull(request.iotId)) {
      query["IotId"] = request.iotId;
    }

    if (!$dara.isNull(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!$dara.isNull(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryStreamSnapshotJob",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryStreamSnapshotJobResponse>(await this.callApi(params, req, runtime), new $_model.QueryStreamSnapshotJobResponse({}));
  }

  /**
   * Queries the list and details of cloud snapshot tasks, including the snapshot interval and stream type.
   * 
   * @remarks
   * ## QPS limits
   * The maximum queries per second (QPS) for a single Alibaba Cloud account to invoke this API operation is 50.
   * > All Resource Access Management (RAM) users under a single Alibaba Cloud account share the quota of the Alibaba Cloud account.
   * 
   * @param request - QueryStreamSnapshotJobRequest
   * @returns QueryStreamSnapshotJobResponse
   */
  async queryStreamSnapshotJob(request: $_model.QueryStreamSnapshotJobRequest): Promise<$_model.QueryStreamSnapshotJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryStreamSnapshotJobWithOptions(request, runtime);
  }

  /**
   * Queries the time template information of a device.
   * 
   * @param request - QueryTimeTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryTimeTemplateResponse
   */
  async queryTimeTemplateWithOptions(request: $_model.QueryTimeTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryTimeTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryTimeTemplate",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryTimeTemplateResponse>(await this.callApi(params, req, runtime), new $_model.QueryTimeTemplateResponse({}));
  }

  /**
   * Queries the time template information of a device.
   * 
   * @param request - QueryTimeTemplateRequest
   * @returns QueryTimeTemplateResponse
   */
  async queryTimeTemplate(request: $_model.QueryTimeTemplateRequest): Promise<$_model.QueryTimeTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryTimeTemplateWithOptions(request, runtime);
  }

  /**
   * Queries the details of a specified time template.
   * 
   * @param request - QueryTimeTemplateDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryTimeTemplateDetailResponse
   */
  async queryTimeTemplateDetailWithOptions(request: $_model.QueryTimeTemplateDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryTimeTemplateDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryTimeTemplateDetail",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryTimeTemplateDetailResponse>(await this.callApi(params, req, runtime), new $_model.QueryTimeTemplateDetailResponse({}));
  }

  /**
   * Queries the details of a specified time template.
   * 
   * @param request - QueryTimeTemplateDetailRequest
   * @returns QueryTimeTemplateDetailResponse
   */
  async queryTimeTemplateDetail(request: $_model.QueryTimeTemplateDetailRequest): Promise<$_model.QueryTimeTemplateDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryTimeTemplateDetailWithOptions(request, runtime);
  }

  /**
   * @param request - QueryVisionDeviceInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryVisionDeviceInfoResponse
   */
  async queryVisionDeviceInfoWithOptions(request: $_model.QueryVisionDeviceInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryVisionDeviceInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!$dara.isNull(request.iotId)) {
      query["IotId"] = request.iotId;
    }

    if (!$dara.isNull(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!$dara.isNull(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryVisionDeviceInfo",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryVisionDeviceInfoResponse>(await this.callApi(params, req, runtime), new $_model.QueryVisionDeviceInfoResponse({}));
  }

  /**
   * @param request - QueryVisionDeviceInfoRequest
   * @returns QueryVisionDeviceInfoResponse
   */
  async queryVisionDeviceInfo(request: $_model.QueryVisionDeviceInfoRequest): Promise<$_model.QueryVisionDeviceInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryVisionDeviceInfoWithOptions(request, runtime);
  }

  /**
   * Retrieves the voice intercom address of an IPC device.
   * 
   * @param request - QueryVoiceIntercomRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryVoiceIntercomResponse
   */
  async queryVoiceIntercomWithOptions(request: $_model.QueryVoiceIntercomRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryVoiceIntercomResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!$dara.isNull(request.iotId)) {
      query["IotId"] = request.iotId;
    }

    if (!$dara.isNull(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!$dara.isNull(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    if (!$dara.isNull(request.scheme)) {
      query["Scheme"] = request.scheme;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryVoiceIntercom",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryVoiceIntercomResponse>(await this.callApi(params, req, runtime), new $_model.QueryVoiceIntercomResponse({}));
  }

  /**
   * Retrieves the voice intercom address of an IPC device.
   * 
   * @param request - QueryVoiceIntercomRequest
   * @returns QueryVoiceIntercomResponse
   */
  async queryVoiceIntercom(request: $_model.QueryVoiceIntercomRequest): Promise<$_model.QueryVoiceIntercomResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryVoiceIntercomWithOptions(request, runtime);
  }

  /**
   * @param request - RefreshGbSubDeviceListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RefreshGbSubDeviceListResponse
   */
  async refreshGbSubDeviceListWithOptions(request: $_model.RefreshGbSubDeviceListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RefreshGbSubDeviceListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!$dara.isNull(request.iotId)) {
      query["IotId"] = request.iotId;
    }

    if (!$dara.isNull(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!$dara.isNull(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RefreshGbSubDeviceList",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RefreshGbSubDeviceListResponse>(await this.callApi(params, req, runtime), new $_model.RefreshGbSubDeviceListResponse({}));
  }

  /**
   * @param request - RefreshGbSubDeviceListRequest
   * @returns RefreshGbSubDeviceListResponse
   */
  async refreshGbSubDeviceList(request: $_model.RefreshGbSubDeviceListRequest): Promise<$_model.RefreshGbSubDeviceListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.refreshGbSubDeviceListWithOptions(request, runtime);
  }

  /**
   * Removes a device from a device group.
   * 
   * @param request - RemoveFaceDeviceFromDeviceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveFaceDeviceFromDeviceGroupResponse
   */
  async removeFaceDeviceFromDeviceGroupWithOptions(request: $_model.RemoveFaceDeviceFromDeviceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveFaceDeviceFromDeviceGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deviceGroupId)) {
      query["DeviceGroupId"] = request.deviceGroupId;
    }

    if (!$dara.isNull(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!$dara.isNull(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!$dara.isNull(request.isolationId)) {
      query["IsolationId"] = request.isolationId;
    }

    if (!$dara.isNull(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveFaceDeviceFromDeviceGroup",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveFaceDeviceFromDeviceGroupResponse>(await this.callApi(params, req, runtime), new $_model.RemoveFaceDeviceFromDeviceGroupResponse({}));
  }

  /**
   * Removes a device from a device group.
   * 
   * @param request - RemoveFaceDeviceFromDeviceGroupRequest
   * @returns RemoveFaceDeviceFromDeviceGroupResponse
   */
  async removeFaceDeviceFromDeviceGroup(request: $_model.RemoveFaceDeviceFromDeviceGroupRequest): Promise<$_model.RemoveFaceDeviceFromDeviceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeFaceDeviceFromDeviceGroupWithOptions(request, runtime);
  }

  /**
   * Removes a user from a user group.
   * 
   * @param request - RemoveFaceUserFromUserGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveFaceUserFromUserGroupResponse
   */
  async removeFaceUserFromUserGroupWithOptions(request: $_model.RemoveFaceUserFromUserGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveFaceUserFromUserGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.isolationId)) {
      query["IsolationId"] = request.isolationId;
    }

    if (!$dara.isNull(request.userGroupId)) {
      query["UserGroupId"] = request.userGroupId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveFaceUserFromUserGroup",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveFaceUserFromUserGroupResponse>(await this.callApi(params, req, runtime), new $_model.RemoveFaceUserFromUserGroupResponse({}));
  }

  /**
   * Removes a user from a user group.
   * 
   * @param request - RemoveFaceUserFromUserGroupRequest
   * @returns RemoveFaceUserFromUserGroupResponse
   */
  async removeFaceUserFromUserGroup(request: $_model.RemoveFaceUserFromUserGroupRequest): Promise<$_model.RemoveFaceUserFromUserGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeFaceUserFromUserGroupWithOptions(request, runtime);
  }

  /**
   * Sets the cloud storage image lifecycle for an IPC device.
   * 
   * @remarks
   * > By default, images are permanently stored in the cloud before you configure the cloud storage image lifecycle.
   * 
   * @param request - SetDevicePictureLifeCycleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetDevicePictureLifeCycleResponse
   */
  async setDevicePictureLifeCycleWithOptions(request: $_model.SetDevicePictureLifeCycleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetDevicePictureLifeCycleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.day)) {
      query["Day"] = request.day;
    }

    if (!$dara.isNull(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!$dara.isNull(request.iotId)) {
      query["IotId"] = request.iotId;
    }

    if (!$dara.isNull(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!$dara.isNull(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetDevicePictureLifeCycle",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetDevicePictureLifeCycleResponse>(await this.callApi(params, req, runtime), new $_model.SetDevicePictureLifeCycleResponse({}));
  }

  /**
   * Sets the cloud storage image lifecycle for an IPC device.
   * 
   * @remarks
   * > By default, images are permanently stored in the cloud before you configure the cloud storage image lifecycle.
   * 
   * @param request - SetDevicePictureLifeCycleRequest
   * @returns SetDevicePictureLifeCycleResponse
   */
  async setDevicePictureLifeCycle(request: $_model.SetDevicePictureLifeCycleRequest): Promise<$_model.SetDevicePictureLifeCycleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setDevicePictureLifeCycleWithOptions(request, runtime);
  }

  /**
   * Sets the recording lifecycle of an IPC device, which specifies the number of days that recording files are stored in the cloud.
   * 
   * @param request - SetDeviceRecordLifeCycleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetDeviceRecordLifeCycleResponse
   */
  async setDeviceRecordLifeCycleWithOptions(request: $_model.SetDeviceRecordLifeCycleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetDeviceRecordLifeCycleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.day)) {
      query["Day"] = request.day;
    }

    if (!$dara.isNull(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!$dara.isNull(request.iotId)) {
      query["IotId"] = request.iotId;
    }

    if (!$dara.isNull(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!$dara.isNull(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetDeviceRecordLifeCycle",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetDeviceRecordLifeCycleResponse>(await this.callApi(params, req, runtime), new $_model.SetDeviceRecordLifeCycleResponse({}));
  }

  /**
   * Sets the recording lifecycle of an IPC device, which specifies the number of days that recording files are stored in the cloud.
   * 
   * @param request - SetDeviceRecordLifeCycleRequest
   * @returns SetDeviceRecordLifeCycleResponse
   */
  async setDeviceRecordLifeCycle(request: $_model.SetDeviceRecordLifeCycleRequest): Promise<$_model.SetDeviceRecordLifeCycleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setDeviceRecordLifeCycleWithOptions(request, runtime);
  }

  /**
   * Stops the live streaming of an IPC device.
   * 
   * @remarks
   * ## Usage notes
   * - Before you invoke this operation, you must implement the Thing Specification Language (TSL) model service for stopping live streaming with the identity **StopPushStreaming** on the IPC device. If this service is not implemented on the IPC device, or the IPC device does not return a normal response after receiving the service invocation, the IPC device will not stop pushing the stream. For more information about TSL models, see [What is a TSL model](https://help.aliyun.com/document_detail/73727.html).
   * - If no one is watching the stream on the IPC device, you do not need to invoke this operation. IoT Platform automatically triggers the device to stop pushing the stream.
   * - During the procedure of triggering a video recording event, invoking this operation causes interruptions to the video file. Use this operation with caution.
   * 
   * @param request - StopLiveStreamingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopLiveStreamingResponse
   */
  async stopLiveStreamingWithOptions(request: $_model.StopLiveStreamingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopLiveStreamingResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!$dara.isNull(request.iotId)) {
      query["IotId"] = request.iotId;
    }

    if (!$dara.isNull(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!$dara.isNull(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    if (!$dara.isNull(request.streamType)) {
      query["StreamType"] = request.streamType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopLiveStreaming",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopLiveStreamingResponse>(await this.callApi(params, req, runtime), new $_model.StopLiveStreamingResponse({}));
  }

  /**
   * Stops the live streaming of an IPC device.
   * 
   * @remarks
   * ## Usage notes
   * - Before you invoke this operation, you must implement the Thing Specification Language (TSL) model service for stopping live streaming with the identity **StopPushStreaming** on the IPC device. If this service is not implemented on the IPC device, or the IPC device does not return a normal response after receiving the service invocation, the IPC device will not stop pushing the stream. For more information about TSL models, see [What is a TSL model](https://help.aliyun.com/document_detail/73727.html).
   * - If no one is watching the stream on the IPC device, you do not need to invoke this operation. IoT Platform automatically triggers the device to stop pushing the stream.
   * - During the procedure of triggering a video recording event, invoking this operation causes interruptions to the video file. Use this operation with caution.
   * 
   * @param request - StopLiveStreamingRequest
   * @returns StopLiveStreamingResponse
   */
  async stopLiveStreaming(request: $_model.StopLiveStreamingRequest): Promise<$_model.StopLiveStreamingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopLiveStreamingWithOptions(request, runtime);
  }

  /**
   * Stops an IP camera from actively triggering video recording.
   * 
   * @param request - StopTriggeredRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopTriggeredRecordResponse
   */
  async stopTriggeredRecordWithOptions(request: $_model.StopTriggeredRecordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopTriggeredRecordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!$dara.isNull(request.iotId)) {
      query["IotId"] = request.iotId;
    }

    if (!$dara.isNull(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!$dara.isNull(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    if (!$dara.isNull(request.recordId)) {
      query["RecordId"] = request.recordId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopTriggeredRecord",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopTriggeredRecordResponse>(await this.callApi(params, req, runtime), new $_model.StopTriggeredRecordResponse({}));
  }

  /**
   * Stops an IP camera from actively triggering video recording.
   * 
   * @param request - StopTriggeredRecordRequest
   * @returns StopTriggeredRecordResponse
   */
  async stopTriggeredRecord(request: $_model.StopTriggeredRecordRequest): Promise<$_model.StopTriggeredRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopTriggeredRecordWithOptions(request, runtime);
  }

  /**
   * Transfers devices to another instance.
   * 
   * @remarks
   * Before you call this operation to transfer devices to another instance, contact technical support to evaluate the migration plan and prevent features from becoming unavailable after the migration.
   * **Before you begin**
   * - The devices to be transferred have the video service feature enabled.
   *     - Devices in the Enterprise instance: Log on to the IoT Platform console and click **Enterprise instance**. In the left-side navigation pane, choose **Video Service** > **Access Service**. On the **Access Service** page, click the **Product Management** tab. Check the product to which the device to be transferred belongs, and make sure that the **Enabled/Disabled Status** column displays **Enabled**.
   *     - Devices in an Enterprise Edition instance: The video service is enabled.
   * - The device distribution task is complete. For more information, see [CreateDeviceDistributeJob](https://help.aliyun.com/document_detail/199390.html) or [Device distribution](https://help.aliyun.com/document_detail/143450.html).
   * - Make sure that a picture lifecycle is configured for camera devices. If no picture lifecycle is configured for a camera device, calling this operation automatically sets the picture lifecycle to 180 days. For more information, see [SetDevicePictureLifeCycle](https://help.aliyun.com/document_detail/107880.html).
   * **Background information**
   * - If the source instance and target instance are of different types, review the Billable methods of the instances before the migration. For more information about Billable methods, see [Billing overview](https://help.aliyun.com/document_detail/124250.html).
   * - During the migration, devices go offline. The more devices you migrate, the longer the migration takes. Data generated by the devices during this period cannot be retained.
   * 
   * @param request - TransferDeviceInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TransferDeviceInstanceResponse
   */
  async transferDeviceInstanceWithOptions(request: $_model.TransferDeviceInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TransferDeviceInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deviceNameList)) {
      query["DeviceNameList"] = request.deviceNameList;
    }

    if (!$dara.isNull(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    if (!$dara.isNull(request.sourceInstanceId)) {
      query["SourceInstanceId"] = request.sourceInstanceId;
    }

    if (!$dara.isNull(request.targetInstanceId)) {
      query["TargetInstanceId"] = request.targetInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TransferDeviceInstance",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TransferDeviceInstanceResponse>(await this.callApi(params, req, runtime), new $_model.TransferDeviceInstanceResponse({}));
  }

  /**
   * Transfers devices to another instance.
   * 
   * @remarks
   * Before you call this operation to transfer devices to another instance, contact technical support to evaluate the migration plan and prevent features from becoming unavailable after the migration.
   * **Before you begin**
   * - The devices to be transferred have the video service feature enabled.
   *     - Devices in the Enterprise instance: Log on to the IoT Platform console and click **Enterprise instance**. In the left-side navigation pane, choose **Video Service** > **Access Service**. On the **Access Service** page, click the **Product Management** tab. Check the product to which the device to be transferred belongs, and make sure that the **Enabled/Disabled Status** column displays **Enabled**.
   *     - Devices in an Enterprise Edition instance: The video service is enabled.
   * - The device distribution task is complete. For more information, see [CreateDeviceDistributeJob](https://help.aliyun.com/document_detail/199390.html) or [Device distribution](https://help.aliyun.com/document_detail/143450.html).
   * - Make sure that a picture lifecycle is configured for camera devices. If no picture lifecycle is configured for a camera device, calling this operation automatically sets the picture lifecycle to 180 days. For more information, see [SetDevicePictureLifeCycle](https://help.aliyun.com/document_detail/107880.html).
   * **Background information**
   * - If the source instance and target instance are of different types, review the Billable methods of the instances before the migration. For more information about Billable methods, see [Billing overview](https://help.aliyun.com/document_detail/124250.html).
   * - During the migration, devices go offline. The more devices you migrate, the longer the migration takes. Data generated by the devices during this period cannot be retained.
   * 
   * @param request - TransferDeviceInstanceRequest
   * @returns TransferDeviceInstanceResponse
   */
  async transferDeviceInstance(request: $_model.TransferDeviceInstanceRequest): Promise<$_model.TransferDeviceInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.transferDeviceInstanceWithOptions(request, runtime);
  }

  /**
   * Triggers an IPC device to capture an image and upload it to the cloud.
   * 
   * @param request - TriggerCapturePictureRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TriggerCapturePictureResponse
   */
  async triggerCapturePictureWithOptions(request: $_model.TriggerCapturePictureRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TriggerCapturePictureResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!$dara.isNull(request.iotId)) {
      query["IotId"] = request.iotId;
    }

    if (!$dara.isNull(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!$dara.isNull(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TriggerCapturePicture",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TriggerCapturePictureResponse>(await this.callApi(params, req, runtime), new $_model.TriggerCapturePictureResponse({}));
  }

  /**
   * Triggers an IPC device to capture an image and upload it to the cloud.
   * 
   * @param request - TriggerCapturePictureRequest
   * @returns TriggerCapturePictureResponse
   */
  async triggerCapturePicture(request: $_model.TriggerCapturePictureRequest): Promise<$_model.TriggerCapturePictureResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.triggerCapturePictureWithOptions(request, runtime);
  }

  /**
   * Triggers the specified IPC device to start recording and uploads the recording file to the cloud.
   * 
   * @param request - TriggerRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TriggerRecordResponse
   */
  async triggerRecordWithOptions(request: $_model.TriggerRecordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TriggerRecordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!$dara.isNull(request.iotId)) {
      query["IotId"] = request.iotId;
    }

    if (!$dara.isNull(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!$dara.isNull(request.preRecordDuration)) {
      query["PreRecordDuration"] = request.preRecordDuration;
    }

    if (!$dara.isNull(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    if (!$dara.isNull(request.recordDuration)) {
      query["RecordDuration"] = request.recordDuration;
    }

    if (!$dara.isNull(request.streamType)) {
      query["StreamType"] = request.streamType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TriggerRecord",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TriggerRecordResponse>(await this.callApi(params, req, runtime), new $_model.TriggerRecordResponse({}));
  }

  /**
   * Triggers the specified IPC device to start recording and uploads the recording file to the cloud.
   * 
   * @param request - TriggerRecordRequest
   * @returns TriggerRecordResponse
   */
  async triggerRecord(request: $_model.TriggerRecordRequest): Promise<$_model.TriggerRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.triggerRecordWithOptions(request, runtime);
  }

  /**
   * Dissociates multiple devices from an image search application instance.
   * 
   * @remarks
   * ## Limits
   * If you invoke this operation on an Enterprise instance, you must specify the **IotInstanceId** request parameter. Otherwise, the call is failed.
   * 
   * @param request - UnbindPictureSearchAppWithDevicesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnbindPictureSearchAppWithDevicesResponse
   */
  async unbindPictureSearchAppWithDevicesWithOptions(request: $_model.UnbindPictureSearchAppWithDevicesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UnbindPictureSearchAppWithDevicesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appInstanceId)) {
      query["AppInstanceId"] = request.appInstanceId;
    }

    if (!$dara.isNull(request.deviceIotIds)) {
      query["DeviceIotIds"] = request.deviceIotIds;
    }

    if (!$dara.isNull(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UnbindPictureSearchAppWithDevices",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UnbindPictureSearchAppWithDevicesResponse>(await this.callApi(params, req, runtime), new $_model.UnbindPictureSearchAppWithDevicesResponse({}));
  }

  /**
   * Dissociates multiple devices from an image search application instance.
   * 
   * @remarks
   * ## Limits
   * If you invoke this operation on an Enterprise instance, you must specify the **IotInstanceId** request parameter. Otherwise, the call is failed.
   * 
   * @param request - UnbindPictureSearchAppWithDevicesRequest
   * @returns UnbindPictureSearchAppWithDevicesResponse
   */
  async unbindPictureSearchAppWithDevices(request: $_model.UnbindPictureSearchAppWithDevicesRequest): Promise<$_model.UnbindPictureSearchAppWithDevicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unbindPictureSearchAppWithDevicesWithOptions(request, runtime);
  }

  /**
   * Updates the video recording plan for intelligent alert events.
   * 
   * @param request - UpdateEventRecordPlanRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateEventRecordPlanResponse
   */
  async updateEventRecordPlanWithOptions(request: $_model.UpdateEventRecordPlanRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateEventRecordPlanResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.eventTypes)) {
      query["EventTypes"] = request.eventTypes;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.planId)) {
      query["PlanId"] = request.planId;
    }

    if (!$dara.isNull(request.preRecordDuration)) {
      query["PreRecordDuration"] = request.preRecordDuration;
    }

    if (!$dara.isNull(request.recordDuration)) {
      query["RecordDuration"] = request.recordDuration;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateEventRecordPlan",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateEventRecordPlanResponse>(await this.callApi(params, req, runtime), new $_model.UpdateEventRecordPlanResponse({}));
  }

  /**
   * Updates the video recording plan for intelligent alert events.
   * 
   * @param request - UpdateEventRecordPlanRequest
   * @returns UpdateEventRecordPlanResponse
   */
  async updateEventRecordPlan(request: $_model.UpdateEventRecordPlanRequest): Promise<$_model.UpdateEventRecordPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateEventRecordPlanWithOptions(request, runtime);
  }

  /**
   * Updates user information.
   * 
   * @param request - UpdateFaceUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateFaceUserResponse
   */
  async updateFaceUserWithOptions(request: $_model.UpdateFaceUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateFaceUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.customUserId)) {
      query["CustomUserId"] = request.customUserId;
    }

    if (!$dara.isNull(request.facePicUrl)) {
      query["FacePicUrl"] = request.facePicUrl;
    }

    if (!$dara.isNull(request.isolationId)) {
      query["IsolationId"] = request.isolationId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.params)) {
      query["Params"] = request.params;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateFaceUser",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateFaceUserResponse>(await this.callApi(params, req, runtime), new $_model.UpdateFaceUserResponse({}));
  }

  /**
   * Updates user information.
   * 
   * @param request - UpdateFaceUserRequest
   * @returns UpdateFaceUserResponse
   */
  async updateFaceUser(request: $_model.UpdateFaceUserRequest): Promise<$_model.UpdateFaceUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateFaceUserWithOptions(request, runtime);
  }

  /**
   * Updates the face synchronization relationship between a user group and a device group.
   * 
   * @remarks
   * ## Limits
   * The maximum queries per second (QPS) for a single Alibaba Cloud account to invoke this API operation is 100.
   *     > Resource Access Management (RAM) users share the quota of the Alibaba Cloud account.
   * 
   * @param request - UpdateFaceUserGroupAndDeviceGroupRelationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateFaceUserGroupAndDeviceGroupRelationResponse
   */
  async updateFaceUserGroupAndDeviceGroupRelationWithOptions(request: $_model.UpdateFaceUserGroupAndDeviceGroupRelationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateFaceUserGroupAndDeviceGroupRelationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.controlId)) {
      query["ControlId"] = request.controlId;
    }

    if (!$dara.isNull(request.isolationId)) {
      query["IsolationId"] = request.isolationId;
    }

    if (!$dara.isNull(request.relation)) {
      query["Relation"] = request.relation;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateFaceUserGroupAndDeviceGroupRelation",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateFaceUserGroupAndDeviceGroupRelationResponse>(await this.callApi(params, req, runtime), new $_model.UpdateFaceUserGroupAndDeviceGroupRelationResponse({}));
  }

  /**
   * Updates the face synchronization relationship between a user group and a device group.
   * 
   * @remarks
   * ## Limits
   * The maximum queries per second (QPS) for a single Alibaba Cloud account to invoke this API operation is 100.
   *     > Resource Access Management (RAM) users share the quota of the Alibaba Cloud account.
   * 
   * @param request - UpdateFaceUserGroupAndDeviceGroupRelationRequest
   * @returns UpdateFaceUserGroupAndDeviceGroupRelationResponse
   */
  async updateFaceUserGroupAndDeviceGroupRelation(request: $_model.UpdateFaceUserGroupAndDeviceGroupRelationRequest): Promise<$_model.UpdateFaceUserGroupAndDeviceGroupRelationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateFaceUserGroupAndDeviceGroupRelationWithOptions(request, runtime);
  }

  /**
   * @param request - UpdateGbDeviceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateGbDeviceResponse
   */
  async updateGbDeviceWithOptions(request: $_model.UpdateGbDeviceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateGbDeviceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!$dara.isNull(request.gbId)) {
      query["GbId"] = request.gbId;
    }

    if (!$dara.isNull(request.iotId)) {
      query["IotId"] = request.iotId;
    }

    if (!$dara.isNull(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateGbDevice",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateGbDeviceResponse>(await this.callApi(params, req, runtime), new $_model.UpdateGbDeviceResponse({}));
  }

  /**
   * @param request - UpdateGbDeviceRequest
   * @returns UpdateGbDeviceResponse
   */
  async updateGbDevice(request: $_model.UpdateGbDeviceRequest): Promise<$_model.UpdateGbDeviceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateGbDeviceWithOptions(request, runtime);
  }

  /**
   * Sets the IP protocol version supported by an instance.
   * 
   * @param request - UpdateInstanceInternetProtocolRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateInstanceInternetProtocolResponse
   */
  async updateInstanceInternetProtocolWithOptions(request: $_model.UpdateInstanceInternetProtocolRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateInstanceInternetProtocolResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!$dara.isNull(request.ipVersion)) {
      query["IpVersion"] = request.ipVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateInstanceInternetProtocol",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateInstanceInternetProtocolResponse>(await this.callApi(params, req, runtime), new $_model.UpdateInstanceInternetProtocolResponse({}));
  }

  /**
   * Sets the IP protocol version supported by an instance.
   * 
   * @param request - UpdateInstanceInternetProtocolRequest
   * @returns UpdateInstanceInternetProtocolResponse
   */
  async updateInstanceInternetProtocol(request: $_model.UpdateInstanceInternetProtocolRequest): Promise<$_model.UpdateInstanceInternetProtocolResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateInstanceInternetProtocolWithOptions(request, runtime);
  }

  /**
   * Modifies the information of an image search application instance.
   * 
   * @param request - UpdatePictureSearchAppRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdatePictureSearchAppResponse
   */
  async updatePictureSearchAppWithOptions(request: $_model.UpdatePictureSearchAppRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdatePictureSearchAppResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appInstanceId)) {
      query["AppInstanceId"] = request.appInstanceId;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdatePictureSearchApp",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdatePictureSearchAppResponse>(await this.callApi(params, req, runtime), new $_model.UpdatePictureSearchAppResponse({}));
  }

  /**
   * Modifies the information of an image search application instance.
   * 
   * @param request - UpdatePictureSearchAppRequest
   * @returns UpdatePictureSearchAppResponse
   */
  async updatePictureSearchApp(request: $_model.UpdatePictureSearchAppRequest): Promise<$_model.UpdatePictureSearchAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updatePictureSearchAppWithOptions(request, runtime);
  }

  /**
   * Updates a recording plan.
   * 
   * @param request - UpdateRecordPlanRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateRecordPlanResponse
   */
  async updateRecordPlanWithOptions(request: $_model.UpdateRecordPlanRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateRecordPlanResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.planId)) {
      query["PlanId"] = request.planId;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateRecordPlan",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateRecordPlanResponse>(await this.callApi(params, req, runtime), new $_model.UpdateRecordPlanResponse({}));
  }

  /**
   * Updates a recording plan.
   * 
   * @param request - UpdateRecordPlanRequest
   * @returns UpdateRecordPlanResponse
   */
  async updateRecordPlan(request: $_model.UpdateRecordPlanRequest): Promise<$_model.UpdateRecordPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateRecordPlanWithOptions(request, runtime);
  }

  /**
   * @param request - UpdateRtmpKeyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateRtmpKeyResponse
   */
  async updateRtmpKeyWithOptions(request: $_model.UpdateRtmpKeyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateRtmpKeyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!$dara.isNull(request.iotId)) {
      query["IotId"] = request.iotId;
    }

    if (!$dara.isNull(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!$dara.isNull(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    if (!$dara.isNull(request.pullAuthKey)) {
      query["PullAuthKey"] = request.pullAuthKey;
    }

    if (!$dara.isNull(request.pullKeyExpireTime)) {
      query["PullKeyExpireTime"] = request.pullKeyExpireTime;
    }

    if (!$dara.isNull(request.pushAuthKey)) {
      query["PushAuthKey"] = request.pushAuthKey;
    }

    if (!$dara.isNull(request.pushKeyExpireTime)) {
      query["PushKeyExpireTime"] = request.pushKeyExpireTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateRtmpKey",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateRtmpKeyResponse>(await this.callApi(params, req, runtime), new $_model.UpdateRtmpKeyResponse({}));
  }

  /**
   * @param request - UpdateRtmpKeyRequest
   * @returns UpdateRtmpKeyResponse
   */
  async updateRtmpKey(request: $_model.UpdateRtmpKeyRequest): Promise<$_model.UpdateRtmpKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateRtmpKeyWithOptions(request, runtime);
  }

  /**
   * Updates a time template.
   * 
   * @param request - UpdateTimeTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTimeTemplateResponse
   */
  async updateTimeTemplateWithOptions(request: $_model.UpdateTimeTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateTimeTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.allDay)) {
      query["AllDay"] = request.allDay;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.timeSections)) {
      query["TimeSections"] = request.timeSections;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateTimeTemplate",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateTimeTemplateResponse>(await this.callApi(params, req, runtime), new $_model.UpdateTimeTemplateResponse({}));
  }

  /**
   * Updates a time template.
   * 
   * @param request - UpdateTimeTemplateRequest
   * @returns UpdateTimeTemplateResponse
   */
  async updateTimeTemplate(request: $_model.UpdateTimeTemplateRequest): Promise<$_model.UpdateTimeTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateTimeTemplateWithOptions(request, runtime);
  }

}
