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
   * Creates an alert rule for a quota item.
   * 
   * @remarks
   * The quota alerting feature has been upgraded and this API operation will be deprecated. Use the CloudMonitor API operations [PutResourceMetricRules](https://help.aliyun.com/document_detail/2513316.html) and [PutMetricRuleTargets](https://help.aliyun.com/document_detail/2513302.html) to create alert rules for the new version of quota alerting.
   * For more information about how to use API operations to manage the new version of quota alerting, see [Manage new quota alerts by using API operations](https://help.aliyun.com/document_detail/2863234.html).
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
   * Creates an alert rule for a quota item.
   * 
   * @remarks
   * The quota alerting feature has been upgraded and this API operation will be deprecated. Use the CloudMonitor API operations [PutResourceMetricRules](https://help.aliyun.com/document_detail/2513316.html) and [PutMetricRuleTargets](https://help.aliyun.com/document_detail/2513302.html) to create alert rules for the new version of quota alerting.
   * For more information about how to use API operations to manage the new version of quota alerting, see [Manage new quota alerts by using API operations](https://help.aliyun.com/document_detail/2863234.html).
   * 
   * @param request - CreateQuotaAlarmRequest
   * @returns CreateQuotaAlarmResponse
   */
  async createQuotaAlarm(request: $_model.CreateQuotaAlarmRequest): Promise<$_model.CreateQuotaAlarmResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createQuotaAlarmWithOptions(request, runtime);
  }

  /**
   * Creates a quota increase request.
   * 
   * @remarks
   * > After you create a quota increase request, you can call the [ListQuotaApplications](https://help.aliyun.com/document_detail/440568.html) operation to view the approval result. If the value of `Status` is `Agree`, the request is approved.
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
   * Creates a quota increase request.
   * 
   * @remarks
   * > After you create a quota increase request, you can call the [ListQuotaApplications](https://help.aliyun.com/document_detail/440568.html) operation to view the approval result. If the value of `Status` is `Agree`, the request is approved.
   * 
   * @param request - CreateQuotaApplicationRequest
   * @returns CreateQuotaApplicationResponse
   */
  async createQuotaApplication(request: $_model.CreateQuotaApplicationRequest): Promise<$_model.CreateQuotaApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createQuotaApplicationWithOptions(request, runtime);
  }

  /**
   * Creates batch quota increase applications for members in a resource folder. When you add a quota item to a quota template, only new members in the resource folder autocommit quota increase applications, and existing members remain unchanged. To increase quotas for existing members by using a quota template, you can select the quota template to commit batch quota increase applications for multiple members in the resource folder. Only the administrator account of the resource folder can create batch quota applications.
   * 
   * @remarks
   * ### Limits
   * A single application can include a maximum of 10 quota items.
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
   * Creates batch quota increase applications for members in a resource folder. When you add a quota item to a quota template, only new members in the resource folder autocommit quota increase applications, and existing members remain unchanged. To increase quotas for existing members by using a quota template, you can select the quota template to commit batch quota increase applications for multiple members in the resource folder. Only the administrator account of the resource folder can create batch quota applications.
   * 
   * @remarks
   * ### Limits
   * A single application can include a maximum of 10 quota items.
   * 
   * @param request - CreateQuotaApplicationsForTemplateRequest
   * @returns CreateQuotaApplicationsForTemplateResponse
   */
  async createQuotaApplicationsForTemplate(request: $_model.CreateQuotaApplicationsForTemplateRequest): Promise<$_model.CreateQuotaApplicationsForTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createQuotaApplicationsForTemplateWithOptions(request, runtime);
  }

  /**
   * Creates a quota template. After the management account creates a quota template, the template automatically submits quota increase applications for new members added to the resource directory. Existing members remain unaffected. You can use a quota template to apply for increases to multiple quota items at a time, improving the efficiency and automation of quota management across the organization. Only the management account of a resource directory can create a quota template.
   * 
   * @remarks
   * ### Before you begin
   * Make sure that the status of the quota template is enabled (that is, `ServiceStatus` is `1`).
   * Call the [GetQuotaTemplateServiceStatus](https://help.aliyun.com/document_detail/450407.html) operation to query the status of the quota template. If the `ServiceStatus` of the quota template is `0` (not configured) or `-1` (disabled), call the [ModifyQuotaTemplateServiceStatus](https://help.aliyun.com/document_detail/450406.html) operation to change the status to `1` (enabled).
   * ### Usage notes
   * After you create a quota template, you can call the [ListQuotaApplicationsForTemplate](https://help.aliyun.com/document_detail/2584864.html) operation to view the approval result. If `Status` is displayed as `Agree`, the application is approved.
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
   * Creates a quota template. After the management account creates a quota template, the template automatically submits quota increase applications for new members added to the resource directory. Existing members remain unaffected. You can use a quota template to apply for increases to multiple quota items at a time, improving the efficiency and automation of quota management across the organization. Only the management account of a resource directory can create a quota template.
   * 
   * @remarks
   * ### Before you begin
   * Make sure that the status of the quota template is enabled (that is, `ServiceStatus` is `1`).
   * Call the [GetQuotaTemplateServiceStatus](https://help.aliyun.com/document_detail/450407.html) operation to query the status of the quota template. If the `ServiceStatus` of the quota template is `0` (not configured) or `-1` (disabled), call the [ModifyQuotaTemplateServiceStatus](https://help.aliyun.com/document_detail/450406.html) operation to change the status to `1` (enabled).
   * ### Usage notes
   * After you create a quota template, you can call the [ListQuotaApplicationsForTemplate](https://help.aliyun.com/document_detail/2584864.html) operation to view the approval result. If `Status` is displayed as `Agree`, the application is approved.
   * 
   * @param request - CreateTemplateQuotaItemRequest
   * @returns CreateTemplateQuotaItemResponse
   */
  async createTemplateQuotaItem(request: $_model.CreateTemplateQuotaItemRequest): Promise<$_model.CreateTemplateQuotaItemResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createTemplateQuotaItemWithOptions(request, runtime);
  }

  /**
   * Deletes a quota usage alert.
   * 
   * @remarks
   * The quota alerting feature has been upgraded, and this API operation will be deprecated soon. This API operation can only delete legacy quota usage alerts. To delete new-version quota usage alerts, use the CloudMonitor API operations [DeleteMetricRules](https://help.aliyun.com/document_detail/2513295.html) and [DeleteMetricRuleTargets](https://help.aliyun.com/document_detail/2513294.html).
   * For more information about managing new-version quota alerts by using API operations, see [Manage new-version quota alerts by using API operations](https://help.aliyun.com/document_detail/2863234.html).
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
   * Deletes a quota usage alert.
   * 
   * @remarks
   * The quota alerting feature has been upgraded, and this API operation will be deprecated soon. This API operation can only delete legacy quota usage alerts. To delete new-version quota usage alerts, use the CloudMonitor API operations [DeleteMetricRules](https://help.aliyun.com/document_detail/2513295.html) and [DeleteMetricRuleTargets](https://help.aliyun.com/document_detail/2513294.html).
   * For more information about managing new-version quota alerts by using API operations, see [Manage new-version quota alerts by using API operations](https://help.aliyun.com/document_detail/2863234.html).
   * 
   * @param request - DeleteQuotaAlarmRequest
   * @returns DeleteQuotaAlarmResponse
   */
  async deleteQuotaAlarm(request: $_model.DeleteQuotaAlarmRequest): Promise<$_model.DeleteQuotaAlarmResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteQuotaAlarmWithOptions(request, runtime);
  }

  /**
   * Deletes a quota template. After the management account deletes a quota template, the template no longer automatically submits quota increase requests for new members added to the resource directory. Only the management account of the resource directory can delete quota templates.
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
   * Deletes a quota template. After the management account deletes a quota template, the template no longer automatically submits quota increase requests for new members added to the resource directory. Only the management account of the resource directory can delete quota templates.
   * 
   * @param request - DeleteTemplateQuotaItemRequest
   * @returns DeleteTemplateQuotaItemResponse
   */
  async deleteTemplateQuotaItem(request: $_model.DeleteTemplateQuotaItemRequest): Promise<$_model.DeleteTemplateQuotaItemResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteTemplateQuotaItemWithOptions(request, runtime);
  }

  /**
   * Queries the quota details of a specified cloud service.
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
   * Queries the quota details of a specified cloud service.
   * 
   * @param request - GetProductQuotaRequest
   * @returns GetProductQuotaResponse
   */
  async getProductQuota(request: $_model.GetProductQuotaRequest): Promise<$_model.GetProductQuotaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getProductQuotaWithOptions(request, runtime);
  }

  /**
   * Queries the details of the quota dimensions supported by the target cloud service.
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
   * Queries the details of the quota dimensions supported by the target cloud service.
   * 
   * @param request - GetProductQuotaDimensionRequest
   * @returns GetProductQuotaDimensionResponse
   */
  async getProductQuotaDimension(request: $_model.GetProductQuotaDimensionRequest): Promise<$_model.GetProductQuotaDimensionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getProductQuotaDimensionWithOptions(request, runtime);
  }

  /**
   * Queries the details of a specified quota alert.
   * 
   * @remarks
   * The quota alert feature has been upgraded. This API operation will be deprecated soon. This API operation can only query the details of legacy quota usage alerts. To query the details of new-version quota usage alerts, use the CloudMonitor API operation [DescribeMetricRuleList](https://help.aliyun.com/document_detail/2513291.html). For more information about how to use API operations to manage new-version quota alerts, see [Use API operations to manage new-version quota alerts](https://help.aliyun.com/document_detail/2863234.html).
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
   * Queries the details of a specified quota alert.
   * 
   * @remarks
   * The quota alert feature has been upgraded. This API operation will be deprecated soon. This API operation can only query the details of legacy quota usage alerts. To query the details of new-version quota usage alerts, use the CloudMonitor API operation [DescribeMetricRuleList](https://help.aliyun.com/document_detail/2513291.html). For more information about how to use API operations to manage new-version quota alerts, see [Use API operations to manage new-version quota alerts](https://help.aliyun.com/document_detail/2863234.html).
   * 
   * @param request - GetQuotaAlarmRequest
   * @returns GetQuotaAlarmResponse
   */
  async getQuotaAlarm(request: $_model.GetQuotaAlarmRequest): Promise<$_model.GetQuotaAlarmResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getQuotaAlarmWithOptions(request, runtime);
  }

  /**
   * Queries the details of a quota increase application.
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
   * Queries the details of a quota increase application.
   * 
   * @param request - GetQuotaApplicationRequest
   * @returns GetQuotaApplicationResponse
   */
  async getQuotaApplication(request: $_model.GetQuotaApplicationRequest): Promise<$_model.GetQuotaApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getQuotaApplicationWithOptions(request, runtime);
  }

  /**
   * Queries the approval information of a quota application, including the average approval time, whether approval reminders are supported, and the approval reminder interval.
   * 
   * @remarks
   * ### Before you begin
   * Make sure that you have created a quota increase application. For more information, see [CreateQuotaApplication](https://help.aliyun.com/document_detail/440566.html).
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
   * Queries the approval information of a quota application, including the average approval time, whether approval reminders are supported, and the approval reminder interval.
   * 
   * @remarks
   * ### Before you begin
   * Make sure that you have created a quota increase application. For more information, see [CreateQuotaApplication](https://help.aliyun.com/document_detail/440566.html).
   * 
   * @param request - GetQuotaApplicationApprovalRequest
   * @returns GetQuotaApplicationApprovalResponse
   */
  async getQuotaApplicationApproval(request: $_model.GetQuotaApplicationApprovalRequest): Promise<$_model.GetQuotaApplicationApprovalResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getQuotaApplicationApprovalWithOptions(request, runtime);
  }

  /**
   * Queries the status of the quota template.
   * 
   * @remarks
   * The default status of a quota template is unset (that is, `ServiceStatus` is `0`). You can use the features of the quota template only when its status is enabled (that is, `ServiceStatus` is `1`).
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
   * Queries the status of the quota template.
   * 
   * @remarks
   * The default status of a quota template is unset (that is, `ServiceStatus` is `0`). You can use the features of the quota template only when its status is enabled (that is, `ServiceStatus` is `1`).
   * 
   * @param request - GetQuotaTemplateServiceStatusRequest
   * @returns GetQuotaTemplateServiceStatusResponse
   */
  async getQuotaTemplateServiceStatus(request: $_model.GetQuotaTemplateServiceStatusRequest): Promise<$_model.GetQuotaTemplateServiceStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getQuotaTemplateServiceStatusWithOptions(request, runtime);
  }

  /**
   * 获取配额使用率概览
   * 
   * @param request - GetQuotaUtilizationOverviewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetQuotaUtilizationOverviewResponse
   */
  async getQuotaUtilizationOverviewWithOptions(request: $_model.GetQuotaUtilizationOverviewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetQuotaUtilizationOverviewResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.quotaCategory)) {
      body["QuotaCategory"] = request.quotaCategory;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetQuotaUtilizationOverview",
      version: "2020-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetQuotaUtilizationOverviewResponse>(await this.callApi(params, req, runtime), new $_model.GetQuotaUtilizationOverviewResponse({}));
  }

  /**
   * 获取配额使用率概览
   * 
   * @param request - GetQuotaUtilizationOverviewRequest
   * @returns GetQuotaUtilizationOverviewResponse
   */
  async getQuotaUtilizationOverview(request: $_model.GetQuotaUtilizationOverviewRequest): Promise<$_model.GetQuotaUtilizationOverviewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getQuotaUtilizationOverviewWithOptions(request, runtime);
  }

  /**
   * Queries the history of quota alerts.
   * 
   * @remarks
   * The quota alert feature has been upgraded and this API operation will be deprecated. This API operation can only query the history of legacy quota usage alerts. To query the history of new quota usage alerts, use the CloudMonitor API operations [DescribeAlertLogCount](https://help.aliyun.com/document_detail/2513275.html) and [DescribeAlertLogList](https://help.aliyun.com/document_detail/2513276.html). For more information about how to use API operations to manage new quota alerts, see [Use API operations to manage new quota alerts](https://help.aliyun.com/document_detail/2863234.html).
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
   * Queries the history of quota alerts.
   * 
   * @remarks
   * The quota alert feature has been upgraded and this API operation will be deprecated. This API operation can only query the history of legacy quota usage alerts. To query the history of new quota usage alerts, use the CloudMonitor API operations [DescribeAlertLogCount](https://help.aliyun.com/document_detail/2513275.html) and [DescribeAlertLogList](https://help.aliyun.com/document_detail/2513276.html). For more information about how to use API operations to manage new quota alerts, see [Use API operations to manage new quota alerts](https://help.aliyun.com/document_detail/2863234.html).
   * 
   * @param request - ListAlarmHistoriesRequest
   * @returns ListAlarmHistoriesResponse
   */
  async listAlarmHistories(request: $_model.ListAlarmHistoriesRequest): Promise<$_model.ListAlarmHistoriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAlarmHistoriesWithOptions(request, runtime);
  }

  /**
   * Queries the list of quotas associated with a specific quota. Some quotas are interdependent and should be increased simultaneously.
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
   * Queries the list of quotas associated with a specific quota. Some quotas are interdependent and should be increased simultaneously.
   * 
   * @param request - ListDependentQuotasRequest
   * @returns ListDependentQuotasResponse
   */
  async listDependentQuotas(request: $_model.ListDependentQuotasRequest): Promise<$_model.ListDependentQuotasResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDependentQuotasWithOptions(request, runtime);
  }

  /**
   * This operation queries the dimension groups of a specified Alibaba Cloud service.
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
   * This operation queries the dimension groups of a specified Alibaba Cloud service.
   * 
   * @param request - ListProductDimensionGroupsRequest
   * @returns ListProductDimensionGroupsResponse
   */
  async listProductDimensionGroups(request: $_model.ListProductDimensionGroupsRequest): Promise<$_model.ListProductDimensionGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listProductDimensionGroupsWithOptions(request, runtime);
  }

  /**
   * Queries the quota dimensions supported by the specified cloud service.
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
   * Queries the quota dimensions supported by the specified cloud service.
   * 
   * @param request - ListProductQuotaDimensionsRequest
   * @returns ListProductQuotaDimensionsResponse
   */
  async listProductQuotaDimensions(request: $_model.ListProductQuotaDimensionsRequest): Promise<$_model.ListProductQuotaDimensionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listProductQuotaDimensionsWithOptions(request, runtime);
  }

  /**
   * Queries the quotas of a specified cloud service.
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
   * Queries the quotas of a specified cloud service.
   * 
   * @param request - ListProductQuotasRequest
   * @returns ListProductQuotasResponse
   */
  async listProductQuotas(request: $_model.ListProductQuotasRequest): Promise<$_model.ListProductQuotasResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listProductQuotasWithOptions(request, runtime);
  }

  /**
   * Queries the list of Alibaba Cloud services supported by Quota Center.
   * 
   * @remarks
   * The query results are the same as those in [Alibaba Cloud services supported by Quota Center](https://help.aliyun.com/document_detail/182368.html).
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
   * Queries the list of Alibaba Cloud services supported by Quota Center.
   * 
   * @remarks
   * The query results are the same as those in [Alibaba Cloud services supported by Quota Center](https://help.aliyun.com/document_detail/182368.html).
   * 
   * @param request - ListProductsRequest
   * @returns ListProductsResponse
   */
  async listProducts(request: $_model.ListProductsRequest): Promise<$_model.ListProductsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listProductsWithOptions(request, runtime);
  }

  /**
   * Queries quota usage alerts.
   * 
   * @remarks
   * The quota alert feature has been upgraded. This API operation is scheduled for deprecation and queries only earlier-version quota usage alerts. To query new-version quota usage alerts, call the CloudMonitor API operation [DescribeMetricRuleList](https://help.aliyun.com/document_detail/2513291.html). For more information about how to manage new-version quota alerts using API operations, see [Use API operations to manage new-version quota alerts](https://help.aliyun.com/document_detail/2863234.html).
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
   * Queries quota usage alerts.
   * 
   * @remarks
   * The quota alert feature has been upgraded. This API operation is scheduled for deprecation and queries only earlier-version quota usage alerts. To query new-version quota usage alerts, call the CloudMonitor API operation [DescribeMetricRuleList](https://help.aliyun.com/document_detail/2513291.html). For more information about how to manage new-version quota alerts using API operations, see [Use API operations to manage new-version quota alerts](https://help.aliyun.com/document_detail/2863234.html).
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
   * Queries the list of quota increase applications.
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
   * Queries the list of quota increase applications.
   * 
   * @param request - ListQuotaApplicationsRequest
   * @returns ListQuotaApplicationsResponse
   */
  async listQuotaApplications(request: $_model.ListQuotaApplicationsRequest): Promise<$_model.ListQuotaApplicationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listQuotaApplicationsWithOptions(request, runtime);
  }

  /**
   * Queries the details of quota increase applications for a member in a resource directory.
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
   * Queries the details of quota increase applications for a member in a resource directory.
   * 
   * @param request - ListQuotaApplicationsDetailForTemplateRequest
   * @returns ListQuotaApplicationsDetailForTemplateResponse
   */
  async listQuotaApplicationsDetailForTemplate(request: $_model.ListQuotaApplicationsDetailForTemplateRequest): Promise<$_model.ListQuotaApplicationsDetailForTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listQuotaApplicationsDetailForTemplateWithOptions(request, runtime);
  }

  /**
   * Queries the history of batch requests for member quotas submitted using a quota template.
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
   * Queries the history of batch requests for member quotas submitted using a quota template.
   * 
   * @param request - ListQuotaApplicationsForTemplateRequest
   * @returns ListQuotaApplicationsForTemplateResponse
   */
  async listQuotaApplicationsForTemplate(request: $_model.ListQuotaApplicationsForTemplateRequest): Promise<$_model.ListQuotaApplicationsForTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listQuotaApplicationsForTemplateWithOptions(request, runtime);
  }

  /**
   * 列举配额使用率报告
   * 
   * @param request - ListQuotaUtilizationReportRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListQuotaUtilizationReportResponse
   */
  async listQuotaUtilizationReportWithOptions(request: $_model.ListQuotaUtilizationReportRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListQuotaUtilizationReportResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.adjustable)) {
      body["Adjustable"] = request.adjustable;
    }

    if (!$dara.isNull(request.keyWords)) {
      body["KeyWords"] = request.keyWords;
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

    if (!$dara.isNull(request.quotaCategory)) {
      body["QuotaCategory"] = request.quotaCategory;
    }

    if (!$dara.isNull(request.quotaRegionId)) {
      body["QuotaRegionId"] = request.quotaRegionId;
    }

    if (!$dara.isNull(request.utilizationStatuses)) {
      body["UtilizationStatuses"] = request.utilizationStatuses;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListQuotaUtilizationReport",
      version: "2020-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListQuotaUtilizationReportResponse>(await this.callApi(params, req, runtime), new $_model.ListQuotaUtilizationReportResponse({}));
  }

  /**
   * 列举配额使用率报告
   * 
   * @param request - ListQuotaUtilizationReportRequest
   * @returns ListQuotaUtilizationReportResponse
   */
  async listQuotaUtilizationReport(request: $_model.ListQuotaUtilizationReportRequest): Promise<$_model.ListQuotaUtilizationReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listQuotaUtilizationReportWithOptions(request, runtime);
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
   * Only the administrator account of a resource directory can modify a quota template. Modifications to a quota template apply only to new members that are added to the resource directory and do not affect existing members.
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
   * Only the administrator account of a resource directory can modify a quota template. Modifications to a quota template apply only to new members that are added to the resource directory and do not affect existing members.
   * 
   * @param request - ModifyTemplateQuotaItemRequest
   * @returns ModifyTemplateQuotaItemResponse
   */
  async modifyTemplateQuotaItem(request: $_model.ModifyTemplateQuotaItemRequest): Promise<$_model.ModifyTemplateQuotaItemResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyTemplateQuotaItemWithOptions(request, runtime);
  }

  /**
   * Sends a reminder for a quota application that is pending approval.
   * 
   * @remarks
   * > This operation applies only to quota applications that support reminders. In the GetQuotaApplicationApproval response, the `SupportReminder` parameter for these applications is `true`.
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
   * Sends a reminder for a quota application that is pending approval.
   * 
   * @remarks
   * > This operation applies only to quota applications that support reminders. In the GetQuotaApplicationApproval response, the `SupportReminder` parameter for these applications is `true`.
   * 
   * @param request - RemindQuotaApplicationApprovalRequest
   * @returns RemindQuotaApplicationApprovalResponse
   */
  async remindQuotaApplicationApproval(request: $_model.RemindQuotaApplicationApprovalRequest): Promise<$_model.RemindQuotaApplicationApprovalResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.remindQuotaApplicationApprovalWithOptions(request, runtime);
  }

  /**
   * 发起配额使用率报告查询
   * 
   * @param request - StartQuotaUtilizationReportRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartQuotaUtilizationReportResponse
   */
  async startQuotaUtilizationReportWithOptions(request: $_model.StartQuotaUtilizationReportRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartQuotaUtilizationReportResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "StartQuotaUtilizationReport",
      version: "2020-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartQuotaUtilizationReportResponse>(await this.callApi(params, req, runtime), new $_model.StartQuotaUtilizationReportResponse({}));
  }

  /**
   * 发起配额使用率报告查询
   * 
   * @param request - StartQuotaUtilizationReportRequest
   * @returns StartQuotaUtilizationReportResponse
   */
  async startQuotaUtilizationReport(request: $_model.StartQuotaUtilizationReportRequest): Promise<$_model.StartQuotaUtilizationReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startQuotaUtilizationReportWithOptions(request, runtime);
  }

  /**
   * Modifies quota alert information.
   * 
   * @remarks
   * This API operation is deprecated because the quota alert feature has been upgraded. To modify information about new quota usage alerts, use the CloudMonitor API operations [PutResourceMetricRules](https://help.aliyun.com/document_detail/2513316.html) and [PutMetricRuleTargets](https://help.aliyun.com/document_detail/2513302.html). For more information about using API operations to manage new quota alerts, see [Use API operations to manage new quota alerts](https://help.aliyun.com/document_detail/2863234.html).
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
   * Modifies quota alert information.
   * 
   * @remarks
   * This API operation is deprecated because the quota alert feature has been upgraded. To modify information about new quota usage alerts, use the CloudMonitor API operations [PutResourceMetricRules](https://help.aliyun.com/document_detail/2513316.html) and [PutMetricRuleTargets](https://help.aliyun.com/document_detail/2513302.html). For more information about using API operations to manage new quota alerts, see [Use API operations to manage new quota alerts](https://help.aliyun.com/document_detail/2863234.html).
   * 
   * @param request - UpdateQuotaAlarmRequest
   * @returns UpdateQuotaAlarmResponse
   */
  async updateQuotaAlarm(request: $_model.UpdateQuotaAlarmRequest): Promise<$_model.UpdateQuotaAlarmResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateQuotaAlarmWithOptions(request, runtime);
  }

}
