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
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("quotas", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Creates a quota alert.
   * 
   * @remarks
   * The quota alerting feature has been upgraded and this API operation will be deprecated. If you want to create a quota alert of the new version, call CloudMonitor API operations. For more information, see [Use API operations to manage new quota alert rules](https://help.aliyun.com/document_detail/2863234.html).
   * 
   * @param request - CreateQuotaAlarmRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateQuotaAlarmResponse
   */
  async createQuotaAlarmWithOptions(request: $_model.CreateQuotaAlarmRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateQuotaAlarmResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.alarmName)) {
      body["AlarmName"] = request.alarmName;
    }

    if (!$dara.isNull(request.originalContext)) {
      body["OriginalContext"] = request.originalContext;
    }

    if (!$dara.isNull(request.productCode)) {
      body["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.quotaActionCode)) {
      body["QuotaActionCode"] = request.quotaActionCode;
    }

    if (!$dara.isNull(request.quotaDimensions)) {
      body["QuotaDimensions"] = request.quotaDimensions;
    }

    if (!$dara.isNull(request.threshold)) {
      body["Threshold"] = request.threshold;
    }

    if (!$dara.isNull(request.thresholdPercent)) {
      body["ThresholdPercent"] = request.thresholdPercent;
    }

    if (!$dara.isNull(request.thresholdType)) {
      body["ThresholdType"] = request.thresholdType;
    }

    if (!$dara.isNull(request.webHook)) {
      body["WebHook"] = request.webHook;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateQuotaAlarm",
      version: "2020-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateQuotaAlarmResponse>(await this.callApi(params, req, runtime), new $_model.CreateQuotaAlarmResponse({}));
  }

  /**
   * Creates a quota alert.
   * 
   * @remarks
   * The quota alerting feature has been upgraded and this API operation will be deprecated. If you want to create a quota alert of the new version, call CloudMonitor API operations. For more information, see [Use API operations to manage new quota alert rules](https://help.aliyun.com/document_detail/2863234.html).
   * 
   * @param request - CreateQuotaAlarmRequest
   * @returns CreateQuotaAlarmResponse
   */
  async createQuotaAlarm(request: $_model.CreateQuotaAlarmRequest): Promise<$_model.CreateQuotaAlarmResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createQuotaAlarmWithOptions(request, runtime);
  }

  /**
   * Submits an application to increase a quota.
   * 
   * @remarks
   * In this example, the operation is called to submit an application to increase the value of a quota whose ID is `q_security-groups` and whose name is Maximum Number of Security Groups. The quota belongs to Elastic Compute Service (ECS). The expected value of the quota is `804`, the application reason is `Scale Out`, and the ID of the region to which the quota belongs is `cn-hangzhou`.
   * 
   * @param request - CreateQuotaApplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateQuotaApplicationResponse
   */
  async createQuotaApplicationWithOptions(request: $_model.CreateQuotaApplicationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateQuotaApplicationResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.auditMode)) {
      body["AuditMode"] = request.auditMode;
    }

    if (!$dara.isNull(request.desireValue)) {
      body["DesireValue"] = request.desireValue;
    }

    if (!$dara.isNull(request.dimensions)) {
      body["Dimensions"] = request.dimensions;
    }

    if (!$dara.isNull(request.effectiveTime)) {
      body["EffectiveTime"] = request.effectiveTime;
    }

    if (!$dara.isNull(request.envLanguage)) {
      body["EnvLanguage"] = request.envLanguage;
    }

    if (!$dara.isNull(request.expireTime)) {
      body["ExpireTime"] = request.expireTime;
    }

    if (!$dara.isNull(request.noticeType)) {
      body["NoticeType"] = request.noticeType;
    }

    if (!$dara.isNull(request.productCode)) {
      body["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.quotaActionCode)) {
      body["QuotaActionCode"] = request.quotaActionCode;
    }

    if (!$dara.isNull(request.quotaCategory)) {
      body["QuotaCategory"] = request.quotaCategory;
    }

    if (!$dara.isNull(request.reason)) {
      body["Reason"] = request.reason;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateQuotaApplication",
      version: "2020-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateQuotaApplicationResponse>(await this.callApi(params, req, runtime), new $_model.CreateQuotaApplicationResponse({}));
  }

  /**
   * Submits an application to increase a quota.
   * 
   * @remarks
   * In this example, the operation is called to submit an application to increase the value of a quota whose ID is `q_security-groups` and whose name is Maximum Number of Security Groups. The quota belongs to Elastic Compute Service (ECS). The expected value of the quota is `804`, the application reason is `Scale Out`, and the ID of the region to which the quota belongs is `cn-hangzhou`.
   * 
   * @param request - CreateQuotaApplicationRequest
   * @returns CreateQuotaApplicationResponse
   */
  async createQuotaApplication(request: $_model.CreateQuotaApplicationRequest): Promise<$_model.CreateQuotaApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createQuotaApplicationWithOptions(request, runtime);
  }

  /**
   * Submits a quota increase application. After you add a quota item to a quota template, the system automatically submits quota applications only for new members of the resource directory. The quota values for existing members remain unchanged. If you want to increase the quota values of existing members, you can submit a quota application for the members by applying quota templates to the members. Only the management account of a resource directory can create multiple quota applications at a time.
   * 
   * @remarks
   * ### [](#)QPS limit
   * You can add a maximum of 10 quota items to a quota template at a time.
   * 
   * @param request - CreateQuotaApplicationsForTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateQuotaApplicationsForTemplateResponse
   */
  async createQuotaApplicationsForTemplateWithOptions(request: $_model.CreateQuotaApplicationsForTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateQuotaApplicationsForTemplateResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.aliyunUids)) {
      body["AliyunUids"] = request.aliyunUids;
    }

    if (!$dara.isNull(request.desireValue)) {
      body["DesireValue"] = request.desireValue;
    }

    if (!$dara.isNull(request.dimensions)) {
      body["Dimensions"] = request.dimensions;
    }

    if (!$dara.isNull(request.effectiveTime)) {
      body["EffectiveTime"] = request.effectiveTime;
    }

    if (!$dara.isNull(request.envLanguage)) {
      body["EnvLanguage"] = request.envLanguage;
    }

    if (!$dara.isNull(request.expireTime)) {
      body["ExpireTime"] = request.expireTime;
    }

    if (!$dara.isNull(request.noticeType)) {
      body["NoticeType"] = request.noticeType;
    }

    if (!$dara.isNull(request.productCode)) {
      body["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.quotaActionCode)) {
      body["QuotaActionCode"] = request.quotaActionCode;
    }

    if (!$dara.isNull(request.quotaCategory)) {
      body["QuotaCategory"] = request.quotaCategory;
    }

    if (!$dara.isNull(request.reason)) {
      body["Reason"] = request.reason;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateQuotaApplicationsForTemplate",
      version: "2020-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateQuotaApplicationsForTemplateResponse>(await this.callApi(params, req, runtime), new $_model.CreateQuotaApplicationsForTemplateResponse({}));
  }

  /**
   * Submits a quota increase application. After you add a quota item to a quota template, the system automatically submits quota applications only for new members of the resource directory. The quota values for existing members remain unchanged. If you want to increase the quota values of existing members, you can submit a quota application for the members by applying quota templates to the members. Only the management account of a resource directory can create multiple quota applications at a time.
   * 
   * @remarks
   * ### [](#)QPS limit
   * You can add a maximum of 10 quota items to a quota template at a time.
   * 
   * @param request - CreateQuotaApplicationsForTemplateRequest
   * @returns CreateQuotaApplicationsForTemplateResponse
   */
  async createQuotaApplicationsForTemplate(request: $_model.CreateQuotaApplicationsForTemplateRequest): Promise<$_model.CreateQuotaApplicationsForTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createQuotaApplicationsForTemplateWithOptions(request, runtime);
  }

  /**
   * Creates a quota template by using the management account of a resource directory. After you create a quota template, if a member is added to the resource directory, the quota template automatically submits a quota increase request for the member. The quota values for existing members remain unchanged. You can use a quota template to apply for increases on multiple quotas at the same time. This automated approach improves the efficiency of quota management across your organization. Only the management account of a resource directory can create quota templates.
   * 
   * @remarks
   * ### [](#)Usage notes
   * You must set the `ServiceStatus` parameter to `1`. This ensures that the quota template is enabled.
   * You can call the [GetQuotaTemplateServiceStatus](https://help.aliyun.com/document_detail/450407.html) operation to query the status of a quota template. If the value of the `ServiceStatus` parameter in the response is `0` or `-1`, you must call the [ModifyQuotaTemplateServiceStatus](https://help.aliyun.com/document_detail/450406.html) operation to modify the value to `1`. A value of 0 indicates that the quota template is not configured. A value of -1 indicates that the quota template is disabled. A value of 1 indicates that the quota template is enabled.
   * ### [](#)
   * After you create a quota template, you can call the [ListQuotaApplicationsForTemplate](https://help.aliyun.com/document_detail/2584864.html) operation to view the approval result. If the value of the `Status` parameter in the response is `Agree`, the quota template is approved.
   * 
   * @param request - CreateTemplateQuotaItemRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTemplateQuotaItemResponse
   */
  async createTemplateQuotaItemWithOptions(request: $_model.CreateTemplateQuotaItemRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTemplateQuotaItemResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.desireValue)) {
      body["DesireValue"] = request.desireValue;
    }

    if (!$dara.isNull(request.dimensions)) {
      body["Dimensions"] = request.dimensions;
    }

    if (!$dara.isNull(request.effectiveTime)) {
      body["EffectiveTime"] = request.effectiveTime;
    }

    if (!$dara.isNull(request.envLanguage)) {
      body["EnvLanguage"] = request.envLanguage;
    }

    if (!$dara.isNull(request.expireTime)) {
      body["ExpireTime"] = request.expireTime;
    }

    if (!$dara.isNull(request.noticeType)) {
      body["NoticeType"] = request.noticeType;
    }

    if (!$dara.isNull(request.productCode)) {
      body["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.quotaActionCode)) {
      body["QuotaActionCode"] = request.quotaActionCode;
    }

    if (!$dara.isNull(request.quotaCategory)) {
      body["QuotaCategory"] = request.quotaCategory;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTemplateQuotaItem",
      version: "2020-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateTemplateQuotaItemResponse>(await this.callApi(params, req, runtime), new $_model.CreateTemplateQuotaItemResponse({}));
  }

  /**
   * Creates a quota template by using the management account of a resource directory. After you create a quota template, if a member is added to the resource directory, the quota template automatically submits a quota increase request for the member. The quota values for existing members remain unchanged. You can use a quota template to apply for increases on multiple quotas at the same time. This automated approach improves the efficiency of quota management across your organization. Only the management account of a resource directory can create quota templates.
   * 
   * @remarks
   * ### [](#)Usage notes
   * You must set the `ServiceStatus` parameter to `1`. This ensures that the quota template is enabled.
   * You can call the [GetQuotaTemplateServiceStatus](https://help.aliyun.com/document_detail/450407.html) operation to query the status of a quota template. If the value of the `ServiceStatus` parameter in the response is `0` or `-1`, you must call the [ModifyQuotaTemplateServiceStatus](https://help.aliyun.com/document_detail/450406.html) operation to modify the value to `1`. A value of 0 indicates that the quota template is not configured. A value of -1 indicates that the quota template is disabled. A value of 1 indicates that the quota template is enabled.
   * ### [](#)
   * After you create a quota template, you can call the [ListQuotaApplicationsForTemplate](https://help.aliyun.com/document_detail/2584864.html) operation to view the approval result. If the value of the `Status` parameter in the response is `Agree`, the quota template is approved.
   * 
   * @param request - CreateTemplateQuotaItemRequest
   * @returns CreateTemplateQuotaItemResponse
   */
  async createTemplateQuotaItem(request: $_model.CreateTemplateQuotaItemRequest): Promise<$_model.CreateTemplateQuotaItemResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createTemplateQuotaItemWithOptions(request, runtime);
  }

  /**
   * Deletes a quota alert.
   * 
   * @remarks
   *   The quota alerting feature has been upgraded and this API operation will be deprecated. You can call this operation only to delete a quota alert rule of the old version. If you want to delete a quota alert rule of the new version, call the CloudMonitor API operation [DeleteMetricRules](https://help.aliyun.com/document_detail/2513295.html) or [DeleteMetricRuleTargets](https://help.aliyun.com/document_detail/2513294.html). For more information about how to call API operations to manage quota alert rules of the new version, see [Manage quota alerts of the new version by calling API operations](https://help.aliyun.com/document_detail/2863234.html).
   * *   In this example, the API operation is called to delete a quota alert rule whose ID is `6b512ab7-da3a-4142-b529-2b2a9294****`.
   * 
   * @param request - DeleteQuotaAlarmRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteQuotaAlarmResponse
   */
  async deleteQuotaAlarmWithOptions(request: $_model.DeleteQuotaAlarmRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteQuotaAlarmResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.alarmId)) {
      body["AlarmId"] = request.alarmId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteQuotaAlarm",
      version: "2020-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteQuotaAlarmResponse>(await this.callApi(params, req, runtime), new $_model.DeleteQuotaAlarmResponse({}));
  }

  /**
   * Deletes a quota alert.
   * 
   * @remarks
   *   The quota alerting feature has been upgraded and this API operation will be deprecated. You can call this operation only to delete a quota alert rule of the old version. If you want to delete a quota alert rule of the new version, call the CloudMonitor API operation [DeleteMetricRules](https://help.aliyun.com/document_detail/2513295.html) or [DeleteMetricRuleTargets](https://help.aliyun.com/document_detail/2513294.html). For more information about how to call API operations to manage quota alert rules of the new version, see [Manage quota alerts of the new version by calling API operations](https://help.aliyun.com/document_detail/2863234.html).
   * *   In this example, the API operation is called to delete a quota alert rule whose ID is `6b512ab7-da3a-4142-b529-2b2a9294****`.
   * 
   * @param request - DeleteQuotaAlarmRequest
   * @returns DeleteQuotaAlarmResponse
   */
  async deleteQuotaAlarm(request: $_model.DeleteQuotaAlarmRequest): Promise<$_model.DeleteQuotaAlarmResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteQuotaAlarmWithOptions(request, runtime);
  }

  /**
   * Deletes a quota template by using the management account of a resource directory. After you delete a quota template, if a member is added to the resource directory, the quota template no longer automatically submits a quota increase request for the member. Only the management account of a resource directory can delete quota templates.
   * 
   * @param request - DeleteTemplateQuotaItemRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTemplateQuotaItemResponse
   */
  async deleteTemplateQuotaItemWithOptions(request: $_model.DeleteTemplateQuotaItemRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteTemplateQuotaItemResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteTemplateQuotaItem",
      version: "2020-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteTemplateQuotaItemResponse>(await this.callApi(params, req, runtime), new $_model.DeleteTemplateQuotaItemResponse({}));
  }

  /**
   * Deletes a quota template by using the management account of a resource directory. After you delete a quota template, if a member is added to the resource directory, the quota template no longer automatically submits a quota increase request for the member. Only the management account of a resource directory can delete quota templates.
   * 
   * @param request - DeleteTemplateQuotaItemRequest
   * @returns DeleteTemplateQuotaItemResponse
   */
  async deleteTemplateQuotaItem(request: $_model.DeleteTemplateQuotaItemRequest): Promise<$_model.DeleteTemplateQuotaItemResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteTemplateQuotaItemWithOptions(request, runtime);
  }

  /**
   * Queries the details of a quota of a cloud service.
   * 
   * @remarks
   * In this example, the operation is called to query the details of a quota whose ID is `q_security-groups` and whose name is Maximum Number of Security Groups. This quota belongs to Elastic Compute Service (ECS). The query result shows the details of the quota. The details include the name, ID, description, quota value, used quota, unit, and dimension of the quota. In this example, the quota name is `Maximum Number of Security Groups`. The quota ID is `q_security-groups`. The description is `The maximum number of security groups that can be created for the current account`. The quota value is `801`. The used quota is `26`. The quota unit is `Number of security groups`. The quota dimension is `{"regionId":"cn-hangzhou"}`.
   * 
   * @param request - GetProductQuotaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetProductQuotaResponse
   */
  async getProductQuotaWithOptions(request: $_model.GetProductQuotaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetProductQuotaResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dimensions)) {
      body["Dimensions"] = request.dimensions;
    }

    if (!$dara.isNull(request.productCode)) {
      body["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.quotaActionCode)) {
      body["QuotaActionCode"] = request.quotaActionCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetProductQuota",
      version: "2020-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetProductQuotaResponse>(await this.callApi(params, req, runtime), new $_model.GetProductQuotaResponse({}));
  }

  /**
   * Queries the details of a quota of a cloud service.
   * 
   * @remarks
   * In this example, the operation is called to query the details of a quota whose ID is `q_security-groups` and whose name is Maximum Number of Security Groups. This quota belongs to Elastic Compute Service (ECS). The query result shows the details of the quota. The details include the name, ID, description, quota value, used quota, unit, and dimension of the quota. In this example, the quota name is `Maximum Number of Security Groups`. The quota ID is `q_security-groups`. The description is `The maximum number of security groups that can be created for the current account`. The quota value is `801`. The used quota is `26`. The quota unit is `Number of security groups`. The quota dimension is `{"regionId":"cn-hangzhou"}`.
   * 
   * @param request - GetProductQuotaRequest
   * @returns GetProductQuotaResponse
   */
  async getProductQuota(request: $_model.GetProductQuotaRequest): Promise<$_model.GetProductQuotaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getProductQuotaWithOptions(request, runtime);
  }

  /**
   * Queries the details of a quota dimension that is supported by an Alibaba Cloud service.
   * 
   * @remarks
   * In this example, the operation is called to query the details of a quota dimension whose key is `regionId`. The quota dimension belongs to Elastic Compute Service (ECS) Quotas by Instance Type whose service code is ecs-spec. The following query results are returned:
   * *   The values of the quota dimension include `cn-shenzhen`, `cn-beijing`, and `cn-hangzhou`.
   * *   The name of the quota dimension is `region`.
   * 
   * @param request - GetProductQuotaDimensionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetProductQuotaDimensionResponse
   */
  async getProductQuotaDimensionWithOptions(request: $_model.GetProductQuotaDimensionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetProductQuotaDimensionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dependentDimensions)) {
      body["DependentDimensions"] = request.dependentDimensions;
    }

    if (!$dara.isNull(request.dimensionKey)) {
      body["DimensionKey"] = request.dimensionKey;
    }

    if (!$dara.isNull(request.productCode)) {
      body["ProductCode"] = request.productCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetProductQuotaDimension",
      version: "2020-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetProductQuotaDimensionResponse>(await this.callApi(params, req, runtime), new $_model.GetProductQuotaDimensionResponse({}));
  }

  /**
   * Queries the details of a quota dimension that is supported by an Alibaba Cloud service.
   * 
   * @remarks
   * In this example, the operation is called to query the details of a quota dimension whose key is `regionId`. The quota dimension belongs to Elastic Compute Service (ECS) Quotas by Instance Type whose service code is ecs-spec. The following query results are returned:
   * *   The values of the quota dimension include `cn-shenzhen`, `cn-beijing`, and `cn-hangzhou`.
   * *   The name of the quota dimension is `region`.
   * 
   * @param request - GetProductQuotaDimensionRequest
   * @returns GetProductQuotaDimensionResponse
   */
  async getProductQuotaDimension(request: $_model.GetProductQuotaDimensionRequest): Promise<$_model.GetProductQuotaDimensionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getProductQuotaDimensionWithOptions(request, runtime);
  }

  /**
   * In this example, the operation is called to query the details of a quota alert. The details of the alert are returned. The query results include the alert ID, alert name, alert contact, and time when the quota alert was created.
   * 
   * @remarks
   *   The quota alerting feature has been upgraded and this API operation will be deprecated. You can call this operation only to query the details about the quota alert rules of the old version. If you want to query the details about the quota alert rules of the new version, call CloudMonitor API operations. For more information, see [Use API operations to manage new quota alert rules](https://help.aliyun.com/document_detail/2863234.html).
   * *   In this example, the operation is called to query the details of a quota alert rule whose ID is `78d7e436-4b25-4897-84b5-d7b656bb****`. The details of the alert rule are returned. The query result includes the alert ID, alert name, alert contact, and the time when the quota alert rule was created.
   * 
   * @param request - GetQuotaAlarmRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetQuotaAlarmResponse
   */
  async getQuotaAlarmWithOptions(request: $_model.GetQuotaAlarmRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetQuotaAlarmResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.alarmId)) {
      body["AlarmId"] = request.alarmId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetQuotaAlarm",
      version: "2020-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetQuotaAlarmResponse>(await this.callApi(params, req, runtime), new $_model.GetQuotaAlarmResponse({}));
  }

  /**
   * In this example, the operation is called to query the details of a quota alert. The details of the alert are returned. The query results include the alert ID, alert name, alert contact, and time when the quota alert was created.
   * 
   * @remarks
   *   The quota alerting feature has been upgraded and this API operation will be deprecated. You can call this operation only to query the details about the quota alert rules of the old version. If you want to query the details about the quota alert rules of the new version, call CloudMonitor API operations. For more information, see [Use API operations to manage new quota alert rules](https://help.aliyun.com/document_detail/2863234.html).
   * *   In this example, the operation is called to query the details of a quota alert rule whose ID is `78d7e436-4b25-4897-84b5-d7b656bb****`. The details of the alert rule are returned. The query result includes the alert ID, alert name, alert contact, and the time when the quota alert rule was created.
   * 
   * @param request - GetQuotaAlarmRequest
   * @returns GetQuotaAlarmResponse
   */
  async getQuotaAlarm(request: $_model.GetQuotaAlarmRequest): Promise<$_model.GetQuotaAlarmResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getQuotaAlarmWithOptions(request, runtime);
  }

  /**
   * Queries the details about a specified application that is submitted to increase a quota.
   * 
   * @remarks
   * In this example, the operation is called to query the details about an application whose ID is `d314d6ae-867d-484c-9009-3d421a80****`. The query result shows the details about the application. The details include the application ID, application time, expected quota value, and application result.
   * 
   * @param request - GetQuotaApplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetQuotaApplicationResponse
   */
  async getQuotaApplicationWithOptions(request: $_model.GetQuotaApplicationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetQuotaApplicationResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.applicationId)) {
      body["ApplicationId"] = request.applicationId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetQuotaApplication",
      version: "2020-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetQuotaApplicationResponse>(await this.callApi(params, req, runtime), new $_model.GetQuotaApplicationResponse({}));
  }

  /**
   * Queries the details about a specified application that is submitted to increase a quota.
   * 
   * @remarks
   * In this example, the operation is called to query the details about an application whose ID is `d314d6ae-867d-484c-9009-3d421a80****`. The query result shows the details about the application. The details include the application ID, application time, expected quota value, and application result.
   * 
   * @param request - GetQuotaApplicationRequest
   * @returns GetQuotaApplicationResponse
   */
  async getQuotaApplication(request: $_model.GetQuotaApplicationRequest): Promise<$_model.GetQuotaApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getQuotaApplicationWithOptions(request, runtime);
  }

  /**
   * Queries the information about quota application approval, such as the average amount of time required for approval, whether approval reminders are supported, and the interval between two consecutive approval reminders.
   * 
   * @remarks
   * ### [](#)Prerequisites
   * Make sure that you have created an application for quota increase. For more information, see [CreateQuotaApplication](https://help.aliyun.com/document_detail/440566.html).
   * 
   * @param request - GetQuotaApplicationApprovalRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetQuotaApplicationApprovalResponse
   */
  async getQuotaApplicationApprovalWithOptions(request: $_model.GetQuotaApplicationApprovalRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetQuotaApplicationApprovalResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.applicationId)) {
      body["ApplicationId"] = request.applicationId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetQuotaApplicationApproval",
      version: "2020-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetQuotaApplicationApprovalResponse>(await this.callApi(params, req, runtime), new $_model.GetQuotaApplicationApprovalResponse({}));
  }

  /**
   * Queries the information about quota application approval, such as the average amount of time required for approval, whether approval reminders are supported, and the interval between two consecutive approval reminders.
   * 
   * @remarks
   * ### [](#)Prerequisites
   * Make sure that you have created an application for quota increase. For more information, see [CreateQuotaApplication](https://help.aliyun.com/document_detail/440566.html).
   * 
   * @param request - GetQuotaApplicationApprovalRequest
   * @returns GetQuotaApplicationApprovalResponse
   */
  async getQuotaApplicationApproval(request: $_model.GetQuotaApplicationApprovalRequest): Promise<$_model.GetQuotaApplicationApprovalResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getQuotaApplicationApprovalWithOptions(request, runtime);
  }

  /**
   * Queries the status of a quota template.
   * 
   * @remarks
   * By default, the value of `ServiceStatus` is `0`, which indicates that no quota template is specified. If you want to use a quota template, make sure that the quota template is enabled. In this case, the value of `ServiceStatus` is `1`.
   * 
   * @param request - GetQuotaTemplateServiceStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetQuotaTemplateServiceStatusResponse
   */
  async getQuotaTemplateServiceStatusWithOptions(request: $_model.GetQuotaTemplateServiceStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetQuotaTemplateServiceStatusResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.resourceDirectoryId)) {
      body["ResourceDirectoryId"] = request.resourceDirectoryId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetQuotaTemplateServiceStatus",
      version: "2020-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetQuotaTemplateServiceStatusResponse>(await this.callApi(params, req, runtime), new $_model.GetQuotaTemplateServiceStatusResponse({}));
  }

  /**
   * Queries the status of a quota template.
   * 
   * @remarks
   * By default, the value of `ServiceStatus` is `0`, which indicates that no quota template is specified. If you want to use a quota template, make sure that the quota template is enabled. In this case, the value of `ServiceStatus` is `1`.
   * 
   * @param request - GetQuotaTemplateServiceStatusRequest
   * @returns GetQuotaTemplateServiceStatusResponse
   */
  async getQuotaTemplateServiceStatus(request: $_model.GetQuotaTemplateServiceStatusRequest): Promise<$_model.GetQuotaTemplateServiceStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getQuotaTemplateServiceStatusWithOptions(request, runtime);
  }

  /**
   * Queries the alert records.
   * 
   * @remarks
   * The quota alerting feature has been upgraded and this API operation will be deprecated. You can call this operation only to query the historical records of quota alert rules of the old version. If you want to query the historical records of quota alert rules of the new version, call the CloudMonitor API operation [DescribeAlertLogCount](https://help.aliyun.com/document_detail/2513275.html) or [DescribeAlertLogList](https://help.aliyun.com/document_detail/2513276.html). For more information about how to call API operations to manage quota alert rules of the new version, see [Manage quota alerts of the new version by calling API operations](https://help.aliyun.com/document_detail/2863234.html).
   * 
   * @param request - ListAlarmHistoriesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAlarmHistoriesResponse
   */
  async listAlarmHistoriesWithOptions(request: $_model.ListAlarmHistoriesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAlarmHistoriesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.alarmId)) {
      body["AlarmId"] = request.alarmId;
    }

    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.keyword)) {
      body["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.productCode)) {
      body["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAlarmHistories",
      version: "2020-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAlarmHistoriesResponse>(await this.callApi(params, req, runtime), new $_model.ListAlarmHistoriesResponse({}));
  }

  /**
   * Queries the alert records.
   * 
   * @remarks
   * The quota alerting feature has been upgraded and this API operation will be deprecated. You can call this operation only to query the historical records of quota alert rules of the old version. If you want to query the historical records of quota alert rules of the new version, call the CloudMonitor API operation [DescribeAlertLogCount](https://help.aliyun.com/document_detail/2513275.html) or [DescribeAlertLogList](https://help.aliyun.com/document_detail/2513276.html). For more information about how to call API operations to manage quota alert rules of the new version, see [Manage quota alerts of the new version by calling API operations](https://help.aliyun.com/document_detail/2863234.html).
   * 
   * @param request - ListAlarmHistoriesRequest
   * @returns ListAlarmHistoriesResponse
   */
  async listAlarmHistories(request: $_model.ListAlarmHistoriesRequest): Promise<$_model.ListAlarmHistoriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAlarmHistoriesWithOptions(request, runtime);
  }

  /**
   * Queries the quotas on which a specified quota depends.
   * 
   * @remarks
   * In this example, the operation is called to query the quotas on which a Container Service for Kubernetes (ACK) quota whose ID is `q_i5uzm3` depends. This quota is the maximum number of nodes that can be created in an ACK cluster. The query result indicates that the specified quota depends on the following three quotas:
   * *   An Elastic Compute Service (ECS) quota whose ID is `q_elastic-network-interfaces`. This quota is the maximum number of ENIs (Secondary ENIs) that can be owned by an Alibaba Cloud account. The quota is available in the following regions: `cn-shenzhen`, `cn-beijing`, and `cn-hangzhou`.
   * *   A Server Load Balancer (SLB) quota whose ID is `q_fh20b0`. This quota is the number of servers that can be attached to the backend of an SLB instance.
   * *   An SLB quota whose ID is `q_3mmbsp`. This quota is the number of SLB instances that can be owned by an Alibaba Cloud account.
   * 
   * @param request - ListDependentQuotasRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDependentQuotasResponse
   */
  async listDependentQuotasWithOptions(request: $_model.ListDependentQuotasRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDependentQuotasResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.productCode)) {
      body["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.quotaActionCode)) {
      body["QuotaActionCode"] = request.quotaActionCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDependentQuotas",
      version: "2020-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDependentQuotasResponse>(await this.callApi(params, req, runtime), new $_model.ListDependentQuotasResponse({}));
  }

  /**
   * Queries the quotas on which a specified quota depends.
   * 
   * @remarks
   * In this example, the operation is called to query the quotas on which a Container Service for Kubernetes (ACK) quota whose ID is `q_i5uzm3` depends. This quota is the maximum number of nodes that can be created in an ACK cluster. The query result indicates that the specified quota depends on the following three quotas:
   * *   An Elastic Compute Service (ECS) quota whose ID is `q_elastic-network-interfaces`. This quota is the maximum number of ENIs (Secondary ENIs) that can be owned by an Alibaba Cloud account. The quota is available in the following regions: `cn-shenzhen`, `cn-beijing`, and `cn-hangzhou`.
   * *   A Server Load Balancer (SLB) quota whose ID is `q_fh20b0`. This quota is the number of servers that can be attached to the backend of an SLB instance.
   * *   An SLB quota whose ID is `q_3mmbsp`. This quota is the number of SLB instances that can be owned by an Alibaba Cloud account.
   * 
   * @param request - ListDependentQuotasRequest
   * @returns ListDependentQuotasResponse
   */
  async listDependentQuotas(request: $_model.ListDependentQuotasRequest): Promise<$_model.ListDependentQuotasResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDependentQuotasWithOptions(request, runtime);
  }

  /**
   * Queries the dimension groups of an Alibaba Cloud service.
   * 
   * @remarks
   * This topic provides an example on how to call the ListProductDimensionGroups operation to query the dimension groups of Object Storage Service (OSS). In this example, a dimension group is returned. The group name is `OSS_Group`, the group code is `oss_wf1ngqmd7q`, and the group key is `chargeType`.
   * 
   * @param request - ListProductDimensionGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListProductDimensionGroupsResponse
   */
  async listProductDimensionGroupsWithOptions(request: $_model.ListProductDimensionGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListProductDimensionGroupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListProductDimensionGroups",
      version: "2020-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListProductDimensionGroupsResponse>(await this.callApi(params, req, runtime), new $_model.ListProductDimensionGroupsResponse({}));
  }

  /**
   * Queries the dimension groups of an Alibaba Cloud service.
   * 
   * @remarks
   * This topic provides an example on how to call the ListProductDimensionGroups operation to query the dimension groups of Object Storage Service (OSS). In this example, a dimension group is returned. The group name is `OSS_Group`, the group code is `oss_wf1ngqmd7q`, and the group key is `chargeType`.
   * 
   * @param request - ListProductDimensionGroupsRequest
   * @returns ListProductDimensionGroupsResponse
   */
  async listProductDimensionGroups(request: $_model.ListProductDimensionGroupsRequest): Promise<$_model.ListProductDimensionGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listProductDimensionGroupsWithOptions(request, runtime);
  }

  /**
   * Queries the quota dimensions that are supported by the specified Alibaba Cloud service.
   * 
   * @remarks
   * In this example, the operation is called to query the quota dimensions that are supported by Elastic Compute Service (ECS). The query results show all the quota dimensions that are supported by ECS.
   * 
   * @param request - ListProductQuotaDimensionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListProductQuotaDimensionsResponse
   */
  async listProductQuotaDimensionsWithOptions(request: $_model.ListProductQuotaDimensionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListProductQuotaDimensionsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.productCode)) {
      body["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.quotaCategory)) {
      body["QuotaCategory"] = request.quotaCategory;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListProductQuotaDimensions",
      version: "2020-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListProductQuotaDimensionsResponse>(await this.callApi(params, req, runtime), new $_model.ListProductQuotaDimensionsResponse({}));
  }

  /**
   * Queries the quota dimensions that are supported by the specified Alibaba Cloud service.
   * 
   * @remarks
   * In this example, the operation is called to query the quota dimensions that are supported by Elastic Compute Service (ECS). The query results show all the quota dimensions that are supported by ECS.
   * 
   * @param request - ListProductQuotaDimensionsRequest
   * @returns ListProductQuotaDimensionsResponse
   */
  async listProductQuotaDimensions(request: $_model.ListProductQuotaDimensionsRequest): Promise<$_model.ListProductQuotaDimensionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listProductQuotaDimensionsWithOptions(request, runtime);
  }

  /**
   * Queries the quotas of a specific Alibaba Cloud service.
   * 
   * @remarks
   * In this example, the operation is called to query the quotas whose instance type is `ecs.g5.2xlarge`. The quotas belong to Elastic Compute Service (ECS) Quotas by Instance Type. The query result includes the name, ID, unit, dimensions, and cycle of each quota.
   * 
   * @param request - ListProductQuotasRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListProductQuotasResponse
   */
  async listProductQuotasWithOptions(request: $_model.ListProductQuotasRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListProductQuotasResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dimensions)) {
      body["Dimensions"] = request.dimensions;
    }

    if (!$dara.isNull(request.groupCode)) {
      body["GroupCode"] = request.groupCode;
    }

    if (!$dara.isNull(request.keyWord)) {
      body["KeyWord"] = request.keyWord;
    }

    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.productCode)) {
      body["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.quotaActionCode)) {
      body["QuotaActionCode"] = request.quotaActionCode;
    }

    if (!$dara.isNull(request.quotaCategory)) {
      body["QuotaCategory"] = request.quotaCategory;
    }

    if (!$dara.isNull(request.sortField)) {
      body["SortField"] = request.sortField;
    }

    if (!$dara.isNull(request.sortOrder)) {
      body["SortOrder"] = request.sortOrder;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListProductQuotas",
      version: "2020-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListProductQuotasResponse>(await this.callApi(params, req, runtime), new $_model.ListProductQuotasResponse({}));
  }

  /**
   * Queries the quotas of a specific Alibaba Cloud service.
   * 
   * @remarks
   * In this example, the operation is called to query the quotas whose instance type is `ecs.g5.2xlarge`. The quotas belong to Elastic Compute Service (ECS) Quotas by Instance Type. The query result includes the name, ID, unit, dimensions, and cycle of each quota.
   * 
   * @param request - ListProductQuotasRequest
   * @returns ListProductQuotasResponse
   */
  async listProductQuotas(request: $_model.ListProductQuotasRequest): Promise<$_model.ListProductQuotasResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listProductQuotasWithOptions(request, runtime);
  }

  /**
   * Queries the Alibaba Cloud services that support Quota Center.
   * 
   * @remarks
   * The services in the query result are the same as the services listed in [Alibaba Cloud services that support Quota Center](https://help.aliyun.com/document_detail/182368.html).
   * 
   * @param request - ListProductsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListProductsResponse
   */
  async listProductsWithOptions(request: $_model.ListProductsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListProductsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListProducts",
      version: "2020-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListProductsResponse>(await this.callApi(params, req, runtime), new $_model.ListProductsResponse({}));
  }

  /**
   * Queries the Alibaba Cloud services that support Quota Center.
   * 
   * @remarks
   * The services in the query result are the same as the services listed in [Alibaba Cloud services that support Quota Center](https://help.aliyun.com/document_detail/182368.html).
   * 
   * @param request - ListProductsRequest
   * @returns ListProductsResponse
   */
  async listProducts(request: $_model.ListProductsRequest): Promise<$_model.ListProductsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listProductsWithOptions(request, runtime);
  }

  /**
   * Queries quota alerts.
   * 
   * @remarks
   * The quota alerting feature has been upgraded and this API operation will be deprecated. You can call this operation only to query quota alert rules of the old version. If you want to query quota alert rules of the new version, call the CloudMonitor API operation [DescribeMetricRuleList](https://help.aliyun.com/document_detail/2513291.html). For more information about how to call API operations to manage quota alert rules of the new version, see [Manage quota alerts of the new version by calling API operations](https://help.aliyun.com/document_detail/2863234.html).
   * 
   * @param request - ListQuotaAlarmsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListQuotaAlarmsResponse
   */
  async listQuotaAlarmsWithOptions(request: $_model.ListQuotaAlarmsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListQuotaAlarmsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.alarmName)) {
      body["AlarmName"] = request.alarmName;
    }

    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.productCode)) {
      body["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.quotaActionCode)) {
      body["QuotaActionCode"] = request.quotaActionCode;
    }

    if (!$dara.isNull(request.quotaDimensions)) {
      body["QuotaDimensions"] = request.quotaDimensions;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListQuotaAlarms",
      version: "2020-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListQuotaAlarmsResponse>(await this.callApi(params, req, runtime), new $_model.ListQuotaAlarmsResponse({}));
  }

  /**
   * Queries quota alerts.
   * 
   * @remarks
   * The quota alerting feature has been upgraded and this API operation will be deprecated. You can call this operation only to query quota alert rules of the old version. If you want to query quota alert rules of the new version, call the CloudMonitor API operation [DescribeMetricRuleList](https://help.aliyun.com/document_detail/2513291.html). For more information about how to call API operations to manage quota alert rules of the new version, see [Manage quota alerts of the new version by calling API operations](https://help.aliyun.com/document_detail/2863234.html).
   * 
   * @param request - ListQuotaAlarmsRequest
   * @returns ListQuotaAlarmsResponse
   */
  async listQuotaAlarms(request: $_model.ListQuotaAlarmsRequest): Promise<$_model.ListQuotaAlarmsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listQuotaAlarmsWithOptions(request, runtime);
  }

  /**
   * Queries quota templates by using the management account of a resource directory.
   * 
   * @param request - ListQuotaApplicationTemplatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListQuotaApplicationTemplatesResponse
   */
  async listQuotaApplicationTemplatesWithOptions(request: $_model.ListQuotaApplicationTemplatesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListQuotaApplicationTemplatesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dimensions)) {
      body["Dimensions"] = request.dimensions;
    }

    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.productCode)) {
      body["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.quotaActionCode)) {
      body["QuotaActionCode"] = request.quotaActionCode;
    }

    if (!$dara.isNull(request.quotaCategory)) {
      body["QuotaCategory"] = request.quotaCategory;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListQuotaApplicationTemplates",
      version: "2020-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListQuotaApplicationTemplatesResponse>(await this.callApi(params, req, runtime), new $_model.ListQuotaApplicationTemplatesResponse({}));
  }

  /**
   * Queries quota templates by using the management account of a resource directory.
   * 
   * @param request - ListQuotaApplicationTemplatesRequest
   * @returns ListQuotaApplicationTemplatesResponse
   */
  async listQuotaApplicationTemplates(request: $_model.ListQuotaApplicationTemplatesRequest): Promise<$_model.ListQuotaApplicationTemplatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listQuotaApplicationTemplatesWithOptions(request, runtime);
  }

  /**
   * Queries the details of an application that is submitted to increase a quota.
   * 
   * @remarks
   * In this example, the operation is called to query the details of an application that is submitted to increase a quota whose ID is `q_i5uzm3` and whose name is Maximum Number of Nodes. This quota belongs to Container Service for Kubernetes (ACK). The query result shows the details of the application. The details include the application ID, application time, requested quota, and application result. In this example, the application ID is `b926571d-cc09-4711-b547-58a615f0****`. The application time is `2021-01-15T09:13:53Z`. The expected quota value is `101`. The application result is `Agree`.
   * 
   * @param request - ListQuotaApplicationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListQuotaApplicationsResponse
   */
  async listQuotaApplicationsWithOptions(request: $_model.ListQuotaApplicationsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListQuotaApplicationsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dimensions)) {
      body["Dimensions"] = request.dimensions;
    }

    if (!$dara.isNull(request.keyWord)) {
      body["KeyWord"] = request.keyWord;
    }

    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.productCode)) {
      body["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.quotaActionCode)) {
      body["QuotaActionCode"] = request.quotaActionCode;
    }

    if (!$dara.isNull(request.quotaCategory)) {
      body["QuotaCategory"] = request.quotaCategory;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListQuotaApplications",
      version: "2020-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListQuotaApplicationsResponse>(await this.callApi(params, req, runtime), new $_model.ListQuotaApplicationsResponse({}));
  }

  /**
   * Queries the details of an application that is submitted to increase a quota.
   * 
   * @remarks
   * In this example, the operation is called to query the details of an application that is submitted to increase a quota whose ID is `q_i5uzm3` and whose name is Maximum Number of Nodes. This quota belongs to Container Service for Kubernetes (ACK). The query result shows the details of the application. The details include the application ID, application time, requested quota, and application result. In this example, the application ID is `b926571d-cc09-4711-b547-58a615f0****`. The application time is `2021-01-15T09:13:53Z`. The expected quota value is `101`. The application result is `Agree`.
   * 
   * @param request - ListQuotaApplicationsRequest
   * @returns ListQuotaApplicationsResponse
   */
  async listQuotaApplications(request: $_model.ListQuotaApplicationsRequest): Promise<$_model.ListQuotaApplicationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listQuotaApplicationsWithOptions(request, runtime);
  }

  /**
   * Queries the details of a quota increase application for member accounts in a resource directory.
   * 
   * @param request - ListQuotaApplicationsDetailForTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListQuotaApplicationsDetailForTemplateResponse
   */
  async listQuotaApplicationsDetailForTemplateWithOptions(request: $_model.ListQuotaApplicationsDetailForTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListQuotaApplicationsDetailForTemplateResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.aliyunUid)) {
      body["AliyunUid"] = request.aliyunUid;
    }

    if (!$dara.isNull(request.batchQuotaApplicationId)) {
      body["BatchQuotaApplicationId"] = request.batchQuotaApplicationId;
    }

    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.productCode)) {
      body["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.quotaActionCode)) {
      body["QuotaActionCode"] = request.quotaActionCode;
    }

    if (!$dara.isNull(request.quotaCategory)) {
      body["QuotaCategory"] = request.quotaCategory;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListQuotaApplicationsDetailForTemplate",
      version: "2020-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListQuotaApplicationsDetailForTemplateResponse>(await this.callApi(params, req, runtime), new $_model.ListQuotaApplicationsDetailForTemplateResponse({}));
  }

  /**
   * Queries the details of a quota increase application for member accounts in a resource directory.
   * 
   * @param request - ListQuotaApplicationsDetailForTemplateRequest
   * @returns ListQuotaApplicationsDetailForTemplateResponse
   */
  async listQuotaApplicationsDetailForTemplate(request: $_model.ListQuotaApplicationsDetailForTemplateRequest): Promise<$_model.ListQuotaApplicationsDetailForTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listQuotaApplicationsDetailForTemplateWithOptions(request, runtime);
  }

  /**
   * Queries the application records of a quota template that is used to apply for quotas for member accounts.
   * 
   * @param request - ListQuotaApplicationsForTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListQuotaApplicationsForTemplateResponse
   */
  async listQuotaApplicationsForTemplateWithOptions(request: $_model.ListQuotaApplicationsForTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListQuotaApplicationsForTemplateResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.applyEndTime)) {
      body["ApplyEndTime"] = request.applyEndTime;
    }

    if (!$dara.isNull(request.applyStartTime)) {
      body["ApplyStartTime"] = request.applyStartTime;
    }

    if (!$dara.isNull(request.batchQuotaApplicationId)) {
      body["BatchQuotaApplicationId"] = request.batchQuotaApplicationId;
    }

    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.productCode)) {
      body["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.quotaActionCode)) {
      body["QuotaActionCode"] = request.quotaActionCode;
    }

    if (!$dara.isNull(request.quotaCategory)) {
      body["QuotaCategory"] = request.quotaCategory;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListQuotaApplicationsForTemplate",
      version: "2020-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListQuotaApplicationsForTemplateResponse>(await this.callApi(params, req, runtime), new $_model.ListQuotaApplicationsForTemplateResponse({}));
  }

  /**
   * Queries the application records of a quota template that is used to apply for quotas for member accounts.
   * 
   * @param request - ListQuotaApplicationsForTemplateRequest
   * @returns ListQuotaApplicationsForTemplateResponse
   */
  async listQuotaApplicationsForTemplate(request: $_model.ListQuotaApplicationsForTemplateRequest): Promise<$_model.ListQuotaApplicationsForTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listQuotaApplicationsForTemplateWithOptions(request, runtime);
  }

  /**
   * Changes the status of a quota template. By default, the quota template is not configured. If the management account of a resource directory uses a quota template for the first time, you must enable the quota template. Only the management account of a resource directory can change the status of quota templates.
   * 
   * @remarks
   * ### [](#)Prerequisites
   * A resource directory is enabled. For more information, see [EnableResourceDirectory](https://help.aliyun.com/document_detail/604185.html).
   * ### [](#)Usage notes
   * If the `ServiceStatus` parameter is set to `0` or `-1`, you can call this operation to set the parameter to `1`. Then, you can call the [CreateTemplateQuotaItem](https://help.aliyun.com/document_detail/450615.html) operation to create a quota template.
   * 
   * @param request - ModifyQuotaTemplateServiceStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyQuotaTemplateServiceStatusResponse
   */
  async modifyQuotaTemplateServiceStatusWithOptions(request: $_model.ModifyQuotaTemplateServiceStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyQuotaTemplateServiceStatusResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.serviceStatus)) {
      body["ServiceStatus"] = request.serviceStatus;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyQuotaTemplateServiceStatus",
      version: "2020-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyQuotaTemplateServiceStatusResponse>(await this.callApi(params, req, runtime), new $_model.ModifyQuotaTemplateServiceStatusResponse({}));
  }

  /**
   * Changes the status of a quota template. By default, the quota template is not configured. If the management account of a resource directory uses a quota template for the first time, you must enable the quota template. Only the management account of a resource directory can change the status of quota templates.
   * 
   * @remarks
   * ### [](#)Prerequisites
   * A resource directory is enabled. For more information, see [EnableResourceDirectory](https://help.aliyun.com/document_detail/604185.html).
   * ### [](#)Usage notes
   * If the `ServiceStatus` parameter is set to `0` or `-1`, you can call this operation to set the parameter to `1`. Then, you can call the [CreateTemplateQuotaItem](https://help.aliyun.com/document_detail/450615.html) operation to create a quota template.
   * 
   * @param request - ModifyQuotaTemplateServiceStatusRequest
   * @returns ModifyQuotaTemplateServiceStatusResponse
   */
  async modifyQuotaTemplateServiceStatus(request: $_model.ModifyQuotaTemplateServiceStatusRequest): Promise<$_model.ModifyQuotaTemplateServiceStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyQuotaTemplateServiceStatusWithOptions(request, runtime);
  }

  /**
   * The ID of the quota template.
   * 
   * @param request - ModifyTemplateQuotaItemRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyTemplateQuotaItemResponse
   */
  async modifyTemplateQuotaItemWithOptions(request: $_model.ModifyTemplateQuotaItemRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyTemplateQuotaItemResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.quotaCategory)) {
      query["QuotaCategory"] = request.quotaCategory;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.desireValue)) {
      body["DesireValue"] = request.desireValue;
    }

    if (!$dara.isNull(request.dimensions)) {
      body["Dimensions"] = request.dimensions;
    }

    if (!$dara.isNull(request.effectiveTime)) {
      body["EffectiveTime"] = request.effectiveTime;
    }

    if (!$dara.isNull(request.envLanguage)) {
      body["EnvLanguage"] = request.envLanguage;
    }

    if (!$dara.isNull(request.expireTime)) {
      body["ExpireTime"] = request.expireTime;
    }

    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.noticeType)) {
      body["NoticeType"] = request.noticeType;
    }

    if (!$dara.isNull(request.productCode)) {
      body["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.quotaActionCode)) {
      body["QuotaActionCode"] = request.quotaActionCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyTemplateQuotaItem",
      version: "2020-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyTemplateQuotaItemResponse>(await this.callApi(params, req, runtime), new $_model.ModifyTemplateQuotaItemResponse({}));
  }

  /**
   * The ID of the quota template.
   * 
   * @param request - ModifyTemplateQuotaItemRequest
   * @returns ModifyTemplateQuotaItemResponse
   */
  async modifyTemplateQuotaItem(request: $_model.ModifyTemplateQuotaItemRequest): Promise<$_model.ModifyTemplateQuotaItemResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyTemplateQuotaItemWithOptions(request, runtime);
  }

  /**
   * Reminds the approver of a quota application to review the application. This operation is applicable to quota applications that support the approval reminding feature.
   * 
   * @remarks
   * >  You can call this operation to enable the approval reminder feature for quota applications that support this feature. To check whether this feature is supported, you can view the value of `SupportReminder` in the GetQuotaApplicationApproval operation. If the value of SupportReminder is `true`, this feature is supported.
   * 
   * @param request - RemindQuotaApplicationApprovalRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemindQuotaApplicationApprovalResponse
   */
  async remindQuotaApplicationApprovalWithOptions(request: $_model.RemindQuotaApplicationApprovalRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemindQuotaApplicationApprovalResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.applicationId)) {
      body["ApplicationId"] = request.applicationId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemindQuotaApplicationApproval",
      version: "2020-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemindQuotaApplicationApprovalResponse>(await this.callApi(params, req, runtime), new $_model.RemindQuotaApplicationApprovalResponse({}));
  }

  /**
   * Reminds the approver of a quota application to review the application. This operation is applicable to quota applications that support the approval reminding feature.
   * 
   * @remarks
   * >  You can call this operation to enable the approval reminder feature for quota applications that support this feature. To check whether this feature is supported, you can view the value of `SupportReminder` in the GetQuotaApplicationApproval operation. If the value of SupportReminder is `true`, this feature is supported.
   * 
   * @param request - RemindQuotaApplicationApprovalRequest
   * @returns RemindQuotaApplicationApprovalResponse
   */
  async remindQuotaApplicationApproval(request: $_model.RemindQuotaApplicationApprovalRequest): Promise<$_model.RemindQuotaApplicationApprovalResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.remindQuotaApplicationApprovalWithOptions(request, runtime);
  }

  /**
   * Modifies a quota alert rule.
   * 
   * @remarks
   *   The quota alerting feature has been upgraded and this API operation will be deprecated. If you want to modify the information about a specific quota alert rule of the new version, call the CloudMonitor API operation [PutResourceMetricRules](https://help.aliyun.com/document_detail/2513316.html) or [PutMetricRuleTargets](https://help.aliyun.com/document_detail/2513302.html). For more information about how to call API operations to manage quota alert rules of the new version, see [Manage quota alerts of the new version by calling API operations](https://help.aliyun.com/document_detail/2863234.html).
   * *   In this example, the API operation is called to modify the information about a quota alert rule whose ID is `a2efa7fc-832f-47bb-8054-39e28012****` and whose name is `rules`. The alert threshold is changed from `150` to `160`.
   * 
   * @param request - UpdateQuotaAlarmRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateQuotaAlarmResponse
   */
  async updateQuotaAlarmWithOptions(request: $_model.UpdateQuotaAlarmRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateQuotaAlarmResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.alarmId)) {
      body["AlarmId"] = request.alarmId;
    }

    if (!$dara.isNull(request.alarmName)) {
      body["AlarmName"] = request.alarmName;
    }

    if (!$dara.isNull(request.threshold)) {
      body["Threshold"] = request.threshold;
    }

    if (!$dara.isNull(request.thresholdPercent)) {
      body["ThresholdPercent"] = request.thresholdPercent;
    }

    if (!$dara.isNull(request.thresholdType)) {
      body["ThresholdType"] = request.thresholdType;
    }

    if (!$dara.isNull(request.webHook)) {
      body["WebHook"] = request.webHook;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateQuotaAlarm",
      version: "2020-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateQuotaAlarmResponse>(await this.callApi(params, req, runtime), new $_model.UpdateQuotaAlarmResponse({}));
  }

  /**
   * Modifies a quota alert rule.
   * 
   * @remarks
   *   The quota alerting feature has been upgraded and this API operation will be deprecated. If you want to modify the information about a specific quota alert rule of the new version, call the CloudMonitor API operation [PutResourceMetricRules](https://help.aliyun.com/document_detail/2513316.html) or [PutMetricRuleTargets](https://help.aliyun.com/document_detail/2513302.html). For more information about how to call API operations to manage quota alert rules of the new version, see [Manage quota alerts of the new version by calling API operations](https://help.aliyun.com/document_detail/2863234.html).
   * *   In this example, the API operation is called to modify the information about a quota alert rule whose ID is `a2efa7fc-832f-47bb-8054-39e28012****` and whose name is `rules`. The alert threshold is changed from `150` to `160`.
   * 
   * @param request - UpdateQuotaAlarmRequest
   * @returns UpdateQuotaAlarmResponse
   */
  async updateQuotaAlarm(request: $_model.UpdateQuotaAlarmRequest): Promise<$_model.UpdateQuotaAlarmResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateQuotaAlarmWithOptions(request, runtime);
  }

}
