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
    this._endpointMap = {
      'cn-shanghai': "config.cn-shanghai.aliyuncs.com",
      'ap-southeast-1': "config.ap-southeast-1.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("config", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 启用账号组规则
   * 
   * @param request - ActiveAggregateConfigRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ActiveAggregateConfigRulesResponse
   */
  async activeAggregateConfigRulesWithOptions(request: $_model.ActiveAggregateConfigRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ActiveAggregateConfigRulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aggregatorId)) {
      query["AggregatorId"] = request.aggregatorId;
    }

    if (!$dara.isNull(request.compliancePackId)) {
      query["CompliancePackId"] = request.compliancePackId;
    }

    if (!$dara.isNull(request.configRuleIds)) {
      query["ConfigRuleIds"] = request.configRuleIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ActiveAggregateConfigRules",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ActiveAggregateConfigRulesResponse>(await this.callApi(params, req, runtime), new $_model.ActiveAggregateConfigRulesResponse({}));
  }

  /**
   * 启用账号组规则
   * 
   * @param request - ActiveAggregateConfigRulesRequest
   * @returns ActiveAggregateConfigRulesResponse
   */
  async activeAggregateConfigRules(request: $_model.ActiveAggregateConfigRulesRequest): Promise<$_model.ActiveAggregateConfigRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.activeAggregateConfigRulesWithOptions(request, runtime);
  }

  /**
   * 启用指定规则
   * 
   * @param request - ActiveConfigRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ActiveConfigRulesResponse
   */
  async activeConfigRulesWithOptions(request: $_model.ActiveConfigRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ActiveConfigRulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.compliancePackId)) {
      query["CompliancePackId"] = request.compliancePackId;
    }

    if (!$dara.isNull(request.configRuleIds)) {
      query["ConfigRuleIds"] = request.configRuleIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ActiveConfigRules",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ActiveConfigRulesResponse>(await this.callApi(params, req, runtime), new $_model.ActiveConfigRulesResponse({}));
  }

  /**
   * 启用指定规则
   * 
   * @param request - ActiveConfigRulesRequest
   * @returns ActiveConfigRulesResponse
   */
  async activeConfigRules(request: $_model.ActiveConfigRulesRequest): Promise<$_model.ActiveConfigRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.activeConfigRulesWithOptions(request, runtime);
  }

  /**
   * 将指定账号组规则加入指定账号组合规包
   * 
   * @param request - AttachAggregateConfigRuleToCompliancePackRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AttachAggregateConfigRuleToCompliancePackResponse
   */
  async attachAggregateConfigRuleToCompliancePackWithOptions(request: $_model.AttachAggregateConfigRuleToCompliancePackRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AttachAggregateConfigRuleToCompliancePackResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aggregatorId)) {
      query["AggregatorId"] = request.aggregatorId;
    }

    if (!$dara.isNull(request.compliancePackId)) {
      query["CompliancePackId"] = request.compliancePackId;
    }

    if (!$dara.isNull(request.configRuleIds)) {
      query["ConfigRuleIds"] = request.configRuleIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AttachAggregateConfigRuleToCompliancePack",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AttachAggregateConfigRuleToCompliancePackResponse>(await this.callApi(params, req, runtime), new $_model.AttachAggregateConfigRuleToCompliancePackResponse({}));
  }

  /**
   * 将指定账号组规则加入指定账号组合规包
   * 
   * @param request - AttachAggregateConfigRuleToCompliancePackRequest
   * @returns AttachAggregateConfigRuleToCompliancePackResponse
   */
  async attachAggregateConfigRuleToCompliancePack(request: $_model.AttachAggregateConfigRuleToCompliancePackRequest): Promise<$_model.AttachAggregateConfigRuleToCompliancePackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.attachAggregateConfigRuleToCompliancePackWithOptions(request, runtime);
  }

  /**
   * 将指定规则加入指定合规包
   * 
   * @param request - AttachConfigRuleToCompliancePackRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AttachConfigRuleToCompliancePackResponse
   */
  async attachConfigRuleToCompliancePackWithOptions(request: $_model.AttachConfigRuleToCompliancePackRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AttachConfigRuleToCompliancePackResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.compliancePackId)) {
      query["CompliancePackId"] = request.compliancePackId;
    }

    if (!$dara.isNull(request.configRuleIds)) {
      query["ConfigRuleIds"] = request.configRuleIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AttachConfigRuleToCompliancePack",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AttachConfigRuleToCompliancePackResponse>(await this.callApi(params, req, runtime), new $_model.AttachConfigRuleToCompliancePackResponse({}));
  }

  /**
   * 将指定规则加入指定合规包
   * 
   * @param request - AttachConfigRuleToCompliancePackRequest
   * @returns AttachConfigRuleToCompliancePackResponse
   */
  async attachConfigRuleToCompliancePack(request: $_model.AttachConfigRuleToCompliancePackRequest): Promise<$_model.AttachConfigRuleToCompliancePackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.attachConfigRuleToCompliancePackWithOptions(request, runtime);
  }

  /**
   * 合规包复制
   * 
   * @param request - CopyCompliancePacksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CopyCompliancePacksResponse
   */
  async copyCompliancePacksWithOptions(request: $_model.CopyCompliancePacksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CopyCompliancePacksResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.desAggregatorIds)) {
      query["DesAggregatorIds"] = request.desAggregatorIds;
    }

    if (!$dara.isNull(request.srcAggregatorId)) {
      query["SrcAggregatorId"] = request.srcAggregatorId;
    }

    if (!$dara.isNull(request.srcCompliancePackIds)) {
      query["SrcCompliancePackIds"] = request.srcCompliancePackIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CopyCompliancePacks",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CopyCompliancePacksResponse>(await this.callApi(params, req, runtime), new $_model.CopyCompliancePacksResponse({}));
  }

  /**
   * 合规包复制
   * 
   * @param request - CopyCompliancePacksRequest
   * @returns CopyCompliancePacksResponse
   */
  async copyCompliancePacks(request: $_model.CopyCompliancePacksRequest): Promise<$_model.CopyCompliancePacksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.copyCompliancePacksWithOptions(request, runtime);
  }

  /**
   * 规则复制
   * 
   * @param request - CopyConfigRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CopyConfigRulesResponse
   */
  async copyConfigRulesWithOptions(request: $_model.CopyConfigRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CopyConfigRulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.desAggregatorIds)) {
      query["DesAggregatorIds"] = request.desAggregatorIds;
    }

    if (!$dara.isNull(request.srcAggregatorId)) {
      query["SrcAggregatorId"] = request.srcAggregatorId;
    }

    if (!$dara.isNull(request.srcConfigRuleIds)) {
      query["SrcConfigRuleIds"] = request.srcConfigRuleIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CopyConfigRules",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CopyConfigRulesResponse>(await this.callApi(params, req, runtime), new $_model.CopyConfigRulesResponse({}));
  }

  /**
   * 规则复制
   * 
   * @param request - CopyConfigRulesRequest
   * @returns CopyConfigRulesResponse
   */
  async copyConfigRules(request: $_model.CopyConfigRulesRequest): Promise<$_model.CopyConfigRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.copyConfigRulesWithOptions(request, runtime);
  }

  /**
   * 生成当前账号搜索结果下载文件
   * 
   * @param request - CreateAdvancedSearchFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAdvancedSearchFileResponse
   */
  async createAdvancedSearchFileWithOptions(request: $_model.CreateAdvancedSearchFileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAdvancedSearchFileResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.sql)) {
      query["Sql"] = request.sql;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAdvancedSearchFile",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAdvancedSearchFileResponse>(await this.callApi(params, req, runtime), new $_model.CreateAdvancedSearchFileResponse({}));
  }

  /**
   * 生成当前账号搜索结果下载文件
   * 
   * @param request - CreateAdvancedSearchFileRequest
   * @returns CreateAdvancedSearchFileResponse
   */
  async createAdvancedSearchFile(request: $_model.CreateAdvancedSearchFileRequest): Promise<$_model.CreateAdvancedSearchFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAdvancedSearchFileWithOptions(request, runtime);
  }

  /**
   * Creates a downloadable file of advanced search results for resources in an account group.
   * 
   * @remarks
   * This topic provides an example of how to query for ECS instances in the account group `ca-edd3626622af00b3****` and create a downloadable file of the search results.
   * 
   * @param request - CreateAggregateAdvancedSearchFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAggregateAdvancedSearchFileResponse
   */
  async createAggregateAdvancedSearchFileWithOptions(request: $_model.CreateAggregateAdvancedSearchFileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAggregateAdvancedSearchFileResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aggregatorId)) {
      query["AggregatorId"] = request.aggregatorId;
    }

    if (!$dara.isNull(request.sql)) {
      query["Sql"] = request.sql;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAggregateAdvancedSearchFile",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAggregateAdvancedSearchFileResponse>(await this.callApi(params, req, runtime), new $_model.CreateAggregateAdvancedSearchFileResponse({}));
  }

  /**
   * Creates a downloadable file of advanced search results for resources in an account group.
   * 
   * @remarks
   * This topic provides an example of how to query for ECS instances in the account group `ca-edd3626622af00b3****` and create a downloadable file of the search results.
   * 
   * @param request - CreateAggregateAdvancedSearchFileRequest
   * @returns CreateAggregateAdvancedSearchFileResponse
   */
  async createAggregateAdvancedSearchFile(request: $_model.CreateAggregateAdvancedSearchFileRequest): Promise<$_model.CreateAggregateAdvancedSearchFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAggregateAdvancedSearchFileWithOptions(request, runtime);
  }

  /**
   * Creates a compliance pack for a specified account group.
   * 
   * @remarks
   * A compliance pack is a collection of rules. When you create a compliance pack, you can select default rules from a compliance pack template. You can also select rules from rule templates and the list of existing rules.
   * After a compliance pack is created, its rules are evaluated once by default. Subsequent evaluations are automatically triggered based on the trigger mechanism of the rules. You can also manually trigger an evaluation.
   * A compliance pack template is a collection of rules created by CloudConfig for a specific compliance scenario.
   * This topic provides an example of how to create a compliance pack for the account group `ca-f632626622af0079****` using the compliance pack template `ClassifiedProtectionPreCheck` (Classified Protection Level 3 Pre-check).
   * 
   * @param tmpReq - CreateAggregateCompliancePackRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAggregateCompliancePackResponse
   */
  async createAggregateCompliancePackWithOptions(tmpReq: $_model.CreateAggregateCompliancePackRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAggregateCompliancePackResponse> {
    tmpReq.validate();
    let request = new $_model.CreateAggregateCompliancePackShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.configRules)) {
      request.configRulesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.configRules, "ConfigRules", "json");
    }

    if (!$dara.isNull(tmpReq.tag)) {
      request.tagShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tag, "Tag", "json");
    }

    let query = { };
    if (!$dara.isNull(request.tagShrink)) {
      query["Tag"] = request.tagShrink;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.aggregatorId)) {
      body["AggregatorId"] = request.aggregatorId;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.compliancePackName)) {
      body["CompliancePackName"] = request.compliancePackName;
    }

    if (!$dara.isNull(request.compliancePackTemplateId)) {
      body["CompliancePackTemplateId"] = request.compliancePackTemplateId;
    }

    if (!$dara.isNull(request.configRulesShrink)) {
      body["ConfigRules"] = request.configRulesShrink;
    }

    if (!$dara.isNull(request.defaultEnable)) {
      body["DefaultEnable"] = request.defaultEnable;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.excludeRegionIdsScope)) {
      body["ExcludeRegionIdsScope"] = request.excludeRegionIdsScope;
    }

    if (!$dara.isNull(request.excludeResourceGroupIdsScope)) {
      body["ExcludeResourceGroupIdsScope"] = request.excludeResourceGroupIdsScope;
    }

    if (!$dara.isNull(request.excludeResourceIdsScope)) {
      body["ExcludeResourceIdsScope"] = request.excludeResourceIdsScope;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.excludeTagsScope)) {
      bodyFlat["ExcludeTagsScope"] = request.excludeTagsScope;
    }

    if (!$dara.isNull(request.regionIdsScope)) {
      body["RegionIdsScope"] = request.regionIdsScope;
    }

    if (!$dara.isNull(request.resourceGroupIdsScope)) {
      body["ResourceGroupIdsScope"] = request.resourceGroupIdsScope;
    }

    if (!$dara.isNull(request.resourceIdsScope)) {
      body["ResourceIdsScope"] = request.resourceIdsScope;
    }

    if (!$dara.isNull(request.riskLevel)) {
      body["RiskLevel"] = request.riskLevel;
    }

    if (!$dara.isNull(request.tagKeyScope)) {
      body["TagKeyScope"] = request.tagKeyScope;
    }

    if (!$dara.isNull(request.tagValueScope)) {
      body["TagValueScope"] = request.tagValueScope;
    }

    if (!$dara.isNull(request.tagsScope)) {
      bodyFlat["TagsScope"] = request.tagsScope;
    }

    if (!$dara.isNull(request.templateContent)) {
      body["TemplateContent"] = request.templateContent;
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
      action: "CreateAggregateCompliancePack",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAggregateCompliancePackResponse>(await this.callApi(params, req, runtime), new $_model.CreateAggregateCompliancePackResponse({}));
  }

  /**
   * Creates a compliance pack for a specified account group.
   * 
   * @remarks
   * A compliance pack is a collection of rules. When you create a compliance pack, you can select default rules from a compliance pack template. You can also select rules from rule templates and the list of existing rules.
   * After a compliance pack is created, its rules are evaluated once by default. Subsequent evaluations are automatically triggered based on the trigger mechanism of the rules. You can also manually trigger an evaluation.
   * A compliance pack template is a collection of rules created by CloudConfig for a specific compliance scenario.
   * This topic provides an example of how to create a compliance pack for the account group `ca-f632626622af0079****` using the compliance pack template `ClassifiedProtectionPreCheck` (Classified Protection Level 3 Pre-check).
   * 
   * @param request - CreateAggregateCompliancePackRequest
   * @returns CreateAggregateCompliancePackResponse
   */
  async createAggregateCompliancePack(request: $_model.CreateAggregateCompliancePackRequest): Promise<$_model.CreateAggregateCompliancePackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAggregateCompliancePackWithOptions(request, runtime);
  }

  /**
   * Creates a delivery channel for a specified account group to deliver resource data to Simple Log Service (SLS), Object Storage Service (OSS), or Simple Message Queue (formerly MNS).
   * 
   * @remarks
   * ### Background information
   * - Deliver to Simple Log Service (SLS)
   *   To deliver configuration history, non-compliance events, and scheduled resource snapshots to a Logstore in Simple Log Service (SLS), you must first create a log project and a Logstore. This lets you query and analyze logs. For examples of the content in JSON format, see [Example of resource configuration change history](https://help.aliyun.com/document_detail/308347.html), [Example of resource non-compliance event](https://help.aliyun.com/document_detail/307122.html), and [Example of scheduled resource snapshot](https://help.aliyun.com/document_detail/611894.html).
   * - Deliver to Object Storage Service (OSS)
   *   To deliver scheduled resource snapshots or configuration history to a specified location in Object Storage Service (OSS), you must first create a bucket. This lets you view or download files in JSON format. For examples of the content in JSON format, see [Example of scheduled resource snapshot](https://help.aliyun.com/document_detail/305669.html) and [Example of resource configuration change history](https://help.aliyun.com/document_detail/189738.html).
   * - Deliver to Simple Message Queue (MNS)
   *   To deliver resource configuration change history and resource non-compliance events to a specified topic in Simple Message Queue (formerly MNS), you must first create a topic. This lets you configure the push method and content for the topic. For examples of the content in JSON format, see [Example of resource configuration change history](https://help.aliyun.com/document_detail/309462.html) and [Example of resource non-compliance event](https://help.aliyun.com/document_detail/309463.html).
   * ### Limits
   * You can create a maximum of five delivery channels for each account group.
   * ### Usage notes
   * This example shows how to create a delivery channel of the `OSS` type for the account group `ca-a4e5626622af0079****`. The Amazon Resource Name (ARN) of the delivery destination is `acs:oss:cn-shanghai:100931896542****:new-bucket`. The response shows that the delivery channel is created and its ID is `cdc-8e45ff4e06a3a8****`.
   * 
   * @param request - CreateAggregateConfigDeliveryChannelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAggregateConfigDeliveryChannelResponse
   */
  async createAggregateConfigDeliveryChannelWithOptions(request: $_model.CreateAggregateConfigDeliveryChannelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAggregateConfigDeliveryChannelResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aggregatorId)) {
      query["AggregatorId"] = request.aggregatorId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.compliantSnapshot)) {
      query["CompliantSnapshot"] = request.compliantSnapshot;
    }

    if (!$dara.isNull(request.configurationItemChangeNotification)) {
      query["ConfigurationItemChangeNotification"] = request.configurationItemChangeNotification;
    }

    if (!$dara.isNull(request.configurationSnapshot)) {
      query["ConfigurationSnapshot"] = request.configurationSnapshot;
    }

    if (!$dara.isNull(request.deliveryChannelCondition)) {
      query["DeliveryChannelCondition"] = request.deliveryChannelCondition;
    }

    if (!$dara.isNull(request.deliveryChannelName)) {
      query["DeliveryChannelName"] = request.deliveryChannelName;
    }

    if (!$dara.isNull(request.deliveryChannelTargetArn)) {
      query["DeliveryChannelTargetArn"] = request.deliveryChannelTargetArn;
    }

    if (!$dara.isNull(request.deliveryChannelType)) {
      query["DeliveryChannelType"] = request.deliveryChannelType;
    }

    if (!$dara.isNull(request.deliverySnapshotTime)) {
      query["DeliverySnapshotTime"] = request.deliverySnapshotTime;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.nonCompliantNotification)) {
      query["NonCompliantNotification"] = request.nonCompliantNotification;
    }

    if (!$dara.isNull(request.oversizedDataOSSTargetArn)) {
      query["OversizedDataOSSTargetArn"] = request.oversizedDataOSSTargetArn;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAggregateConfigDeliveryChannel",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAggregateConfigDeliveryChannelResponse>(await this.callApi(params, req, runtime), new $_model.CreateAggregateConfigDeliveryChannelResponse({}));
  }

  /**
   * Creates a delivery channel for a specified account group to deliver resource data to Simple Log Service (SLS), Object Storage Service (OSS), or Simple Message Queue (formerly MNS).
   * 
   * @remarks
   * ### Background information
   * - Deliver to Simple Log Service (SLS)
   *   To deliver configuration history, non-compliance events, and scheduled resource snapshots to a Logstore in Simple Log Service (SLS), you must first create a log project and a Logstore. This lets you query and analyze logs. For examples of the content in JSON format, see [Example of resource configuration change history](https://help.aliyun.com/document_detail/308347.html), [Example of resource non-compliance event](https://help.aliyun.com/document_detail/307122.html), and [Example of scheduled resource snapshot](https://help.aliyun.com/document_detail/611894.html).
   * - Deliver to Object Storage Service (OSS)
   *   To deliver scheduled resource snapshots or configuration history to a specified location in Object Storage Service (OSS), you must first create a bucket. This lets you view or download files in JSON format. For examples of the content in JSON format, see [Example of scheduled resource snapshot](https://help.aliyun.com/document_detail/305669.html) and [Example of resource configuration change history](https://help.aliyun.com/document_detail/189738.html).
   * - Deliver to Simple Message Queue (MNS)
   *   To deliver resource configuration change history and resource non-compliance events to a specified topic in Simple Message Queue (formerly MNS), you must first create a topic. This lets you configure the push method and content for the topic. For examples of the content in JSON format, see [Example of resource configuration change history](https://help.aliyun.com/document_detail/309462.html) and [Example of resource non-compliance event](https://help.aliyun.com/document_detail/309463.html).
   * ### Limits
   * You can create a maximum of five delivery channels for each account group.
   * ### Usage notes
   * This example shows how to create a delivery channel of the `OSS` type for the account group `ca-a4e5626622af0079****`. The Amazon Resource Name (ARN) of the delivery destination is `acs:oss:cn-shanghai:100931896542****:new-bucket`. The response shows that the delivery channel is created and its ID is `cdc-8e45ff4e06a3a8****`.
   * 
   * @param request - CreateAggregateConfigDeliveryChannelRequest
   * @returns CreateAggregateConfigDeliveryChannelResponse
   */
  async createAggregateConfigDeliveryChannel(request: $_model.CreateAggregateConfigDeliveryChannelRequest): Promise<$_model.CreateAggregateConfigDeliveryChannelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAggregateConfigDeliveryChannelWithOptions(request, runtime);
  }

  /**
   * Creates a rule for a specified account group. You can create a rule from a template or create a custom rule using Function Compute. The rule checks your resources for compliance. After a rule is created, it automatically runs once. Cloud Config then runs evaluations based on the rule\\"s trigger. You can also run evaluations manually.
   * 
   * @remarks
   * ### Limits
   * Each management account and delegated administrator account can have a maximum of 200 rules.
   * ### Background information
   * Cloud Config supports the following methods for creating rules:
   * - Create rules from templates
   *   Rule templates are predefined rule functions that Cloud Config provides in Function Compute (FC). You can use rule templates to create rules quickly. For more information about rules, see [Definition and working principle of rules](https://help.aliyun.com/document_detail/128273.html).
   * - Create rules based on functions in Function Compute
   *   Custom function rules are rules whose code is hosted in FC functions. If the predefined rule templates in Cloud Config do not meet your compliance requirements, you can write function code to check compliance in complex scenarios. For more information about custom function rules, see [Definition and working principle of custom function rules](https://help.aliyun.com/document_detail/127405.html).
   * ### Usage notes
   * This example shows how to create a rule for the account group `ca-a4e5626622af0079****` using the \\`required-tags\\` template. The response shows that the rule is created with the ID `cr-4e3d626622af0080****`.
   * 
   * @param tmpReq - CreateAggregateConfigRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAggregateConfigRuleResponse
   */
  async createAggregateConfigRuleWithOptions(tmpReq: $_model.CreateAggregateConfigRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAggregateConfigRuleResponse> {
    tmpReq.validate();
    let request = new $_model.CreateAggregateConfigRuleShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.inputParameters)) {
      request.inputParametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.inputParameters, "InputParameters", "json");
    }

    if (!$dara.isNull(tmpReq.resourceTypesScope)) {
      request.resourceTypesScopeShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceTypesScope, "ResourceTypesScope", "simple");
    }

    if (!$dara.isNull(tmpReq.tag)) {
      request.tagShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tag, "Tag", "json");
    }

    let query = { };
    if (!$dara.isNull(request.resourceNameScope)) {
      query["ResourceNameScope"] = request.resourceNameScope;
    }

    if (!$dara.isNull(request.tagShrink)) {
      query["Tag"] = request.tagShrink;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountIdsScope)) {
      body["AccountIdsScope"] = request.accountIdsScope;
    }

    if (!$dara.isNull(request.aggregatorId)) {
      body["AggregatorId"] = request.aggregatorId;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.conditions)) {
      body["Conditions"] = request.conditions;
    }

    if (!$dara.isNull(request.configRuleName)) {
      body["ConfigRuleName"] = request.configRuleName;
    }

    if (!$dara.isNull(request.configRuleTriggerTypes)) {
      body["ConfigRuleTriggerTypes"] = request.configRuleTriggerTypes;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.excludeAccountIdsScope)) {
      body["ExcludeAccountIdsScope"] = request.excludeAccountIdsScope;
    }

    if (!$dara.isNull(request.excludeFolderIdsScope)) {
      body["ExcludeFolderIdsScope"] = request.excludeFolderIdsScope;
    }

    if (!$dara.isNull(request.excludeRegionIdsScope)) {
      body["ExcludeRegionIdsScope"] = request.excludeRegionIdsScope;
    }

    if (!$dara.isNull(request.excludeResourceGroupIdsScope)) {
      body["ExcludeResourceGroupIdsScope"] = request.excludeResourceGroupIdsScope;
    }

    if (!$dara.isNull(request.excludeResourceIdsScope)) {
      body["ExcludeResourceIdsScope"] = request.excludeResourceIdsScope;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.excludeTagsScope)) {
      bodyFlat["ExcludeTagsScope"] = request.excludeTagsScope;
    }

    if (!$dara.isNull(request.extendContent)) {
      body["ExtendContent"] = request.extendContent;
    }

    if (!$dara.isNull(request.folderIdsScope)) {
      body["FolderIdsScope"] = request.folderIdsScope;
    }

    if (!$dara.isNull(request.inputParametersShrink)) {
      body["InputParameters"] = request.inputParametersShrink;
    }

    if (!$dara.isNull(request.maximumExecutionFrequency)) {
      body["MaximumExecutionFrequency"] = request.maximumExecutionFrequency;
    }

    if (!$dara.isNull(request.regionIdsScope)) {
      body["RegionIdsScope"] = request.regionIdsScope;
    }

    if (!$dara.isNull(request.resourceGroupIdsScope)) {
      body["ResourceGroupIdsScope"] = request.resourceGroupIdsScope;
    }

    if (!$dara.isNull(request.resourceIdsScope)) {
      body["ResourceIdsScope"] = request.resourceIdsScope;
    }

    if (!$dara.isNull(request.resourceTypesScopeShrink)) {
      body["ResourceTypesScope"] = request.resourceTypesScopeShrink;
    }

    if (!$dara.isNull(request.riskLevel)) {
      body["RiskLevel"] = request.riskLevel;
    }

    if (!$dara.isNull(request.sourceIdentifier)) {
      body["SourceIdentifier"] = request.sourceIdentifier;
    }

    if (!$dara.isNull(request.sourceOwner)) {
      body["SourceOwner"] = request.sourceOwner;
    }

    if (!$dara.isNull(request.tagKeyLogicScope)) {
      body["TagKeyLogicScope"] = request.tagKeyLogicScope;
    }

    if (!$dara.isNull(request.tagKeyScope)) {
      body["TagKeyScope"] = request.tagKeyScope;
    }

    if (!$dara.isNull(request.tagValueScope)) {
      body["TagValueScope"] = request.tagValueScope;
    }

    if (!$dara.isNull(request.tagsScope)) {
      bodyFlat["TagsScope"] = request.tagsScope;
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
      action: "CreateAggregateConfigRule",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAggregateConfigRuleResponse>(await this.callApi(params, req, runtime), new $_model.CreateAggregateConfigRuleResponse({}));
  }

  /**
   * Creates a rule for a specified account group. You can create a rule from a template or create a custom rule using Function Compute. The rule checks your resources for compliance. After a rule is created, it automatically runs once. Cloud Config then runs evaluations based on the rule\\"s trigger. You can also run evaluations manually.
   * 
   * @remarks
   * ### Limits
   * Each management account and delegated administrator account can have a maximum of 200 rules.
   * ### Background information
   * Cloud Config supports the following methods for creating rules:
   * - Create rules from templates
   *   Rule templates are predefined rule functions that Cloud Config provides in Function Compute (FC). You can use rule templates to create rules quickly. For more information about rules, see [Definition and working principle of rules](https://help.aliyun.com/document_detail/128273.html).
   * - Create rules based on functions in Function Compute
   *   Custom function rules are rules whose code is hosted in FC functions. If the predefined rule templates in Cloud Config do not meet your compliance requirements, you can write function code to check compliance in complex scenarios. For more information about custom function rules, see [Definition and working principle of custom function rules](https://help.aliyun.com/document_detail/127405.html).
   * ### Usage notes
   * This example shows how to create a rule for the account group `ca-a4e5626622af0079****` using the \\`required-tags\\` template. The response shows that the rule is created with the ID `cr-4e3d626622af0080****`.
   * 
   * @param request - CreateAggregateConfigRuleRequest
   * @returns CreateAggregateConfigRuleResponse
   */
  async createAggregateConfigRule(request: $_model.CreateAggregateConfigRuleRequest): Promise<$_model.CreateAggregateConfigRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAggregateConfigRuleWithOptions(request, runtime);
  }

  /**
   * Creates a remediation for a rule in a specified account group.
   * 
   * @remarks
   * ### Background information
   * - Template-based remediation: Uses public templates provided by Operation Orchestration Service (OOS) to quickly remediate non-compliant resources.
   *   Only one remediation can be created for a rule. This type of remediation is supported only for rules that are created from specific templates.
   * - Custom remediation: Runs custom code in Function Compute (FC) to quickly remediate non-compliant resources.
   *   Only one remediation can be created for a rule. This type of remediation is supported for rules created from templates and for custom rules.
   * ### Usage notes
   * This topic provides an example of how to create a remediation for the rule `cr-6b7c626622af00b4****` in the account group `ca-6b4a626622af0012****`. The response shows that the remediation is created and its ID is `crr-909ba2d4716700eb****`.
   * 
   * @param request - CreateAggregateRemediationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAggregateRemediationResponse
   */
  async createAggregateRemediationWithOptions(request: $_model.CreateAggregateRemediationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAggregateRemediationResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.aggregatorId)) {
      body["AggregatorId"] = request.aggregatorId;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.configRuleId)) {
      body["ConfigRuleId"] = request.configRuleId;
    }

    if (!$dara.isNull(request.invokeType)) {
      body["InvokeType"] = request.invokeType;
    }

    if (!$dara.isNull(request.params)) {
      body["Params"] = request.params;
    }

    if (!$dara.isNull(request.remediationTemplateId)) {
      body["RemediationTemplateId"] = request.remediationTemplateId;
    }

    if (!$dara.isNull(request.remediationType)) {
      body["RemediationType"] = request.remediationType;
    }

    if (!$dara.isNull(request.sourceType)) {
      body["SourceType"] = request.sourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAggregateRemediation",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAggregateRemediationResponse>(await this.callApi(params, req, runtime), new $_model.CreateAggregateRemediationResponse({}));
  }

  /**
   * Creates a remediation for a rule in a specified account group.
   * 
   * @remarks
   * ### Background information
   * - Template-based remediation: Uses public templates provided by Operation Orchestration Service (OOS) to quickly remediate non-compliant resources.
   *   Only one remediation can be created for a rule. This type of remediation is supported only for rules that are created from specific templates.
   * - Custom remediation: Runs custom code in Function Compute (FC) to quickly remediate non-compliant resources.
   *   Only one remediation can be created for a rule. This type of remediation is supported for rules created from templates and for custom rules.
   * ### Usage notes
   * This topic provides an example of how to create a remediation for the rule `cr-6b7c626622af00b4****` in the account group `ca-6b4a626622af0012****`. The response shows that the remediation is created and its ID is `crr-909ba2d4716700eb****`.
   * 
   * @param request - CreateAggregateRemediationRequest
   * @returns CreateAggregateRemediationResponse
   */
  async createAggregateRemediation(request: $_model.CreateAggregateRemediationRequest): Promise<$_model.CreateAggregateRemediationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAggregateRemediationWithOptions(request, runtime);
  }

  /**
   * A management account or a delegated administrator account in a resource directory can create an account group to centrally manage resources, compliance packages, and rules across multiple member accounts.
   * 
   * @remarks
   * ### Limits
   * A management account or a delegated administrator account can create a maximum of 5 account groups. Each account group can contain a maximum of 200 member accounts.
   * ### Background information
   * For more information about account groups, including their concepts, use cases, and the impact of member account changes on Cloud Config, see [Overview](https://help.aliyun.com/document_detail/211534.html).
   * Cloud Config supports the following types of account groups:
   * - Global account group: A global account group contains all members in a resource directory and automatically synchronizes member changes. A management account or a delegated administrator account can create only one global account group.
   * - Custom account group: To create a custom account group, a management account or a delegated administrator account selects some or all member accounts from the resource directory.
   *   - If a new member is added to the resource directory, the change is not automatically synchronized. The management account or delegated administrator account must manually add the new member to the account group.
   *   - If a member is removed from the resource directory, the management account or delegated administrator account loses the permissions to manage that member\\"s compliance. The custom account group automatically detects this change and removes the member from the group.
   * - Folder account group: When an account group is created from a folder, it automatically detects and synchronizes changes to the members within that folder. The members in a folder account group are always consistent with the members in the selected folder.
   *   A management account or a delegated administrator account can select only one non-empty folder to create a folder account group.
   * ### Usage notes
   * This topic provides an example of how to use a management account to create a custom account group of the `CUSTOM` type. The account group is named `Test_Group` and has the description `Test Group`. The member accounts are as follows:
   * - The member account ID is `171322098523****` and the member account name is `Alice`.
   * - The member account ID is `100532098349****` and the member account name is `Tom`.
   * 
   * @param tmpReq - CreateAggregatorRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAggregatorResponse
   */
  async createAggregatorWithOptions(tmpReq: $_model.CreateAggregatorRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAggregatorResponse> {
    tmpReq.validate();
    let request = new $_model.CreateAggregatorShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.aggregatorAccounts)) {
      request.aggregatorAccountsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.aggregatorAccounts, "AggregatorAccounts", "json");
    }

    if (!$dara.isNull(tmpReq.tag)) {
      request.tagShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tag, "Tag", "json");
    }

    let query = { };
    if (!$dara.isNull(request.tagShrink)) {
      query["Tag"] = request.tagShrink;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.aggregatorAccountsShrink)) {
      body["AggregatorAccounts"] = request.aggregatorAccountsShrink;
    }

    if (!$dara.isNull(request.aggregatorName)) {
      body["AggregatorName"] = request.aggregatorName;
    }

    if (!$dara.isNull(request.aggregatorType)) {
      body["AggregatorType"] = request.aggregatorType;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.folderId)) {
      body["FolderId"] = request.folderId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAggregator",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAggregatorResponse>(await this.callApi(params, req, runtime), new $_model.CreateAggregatorResponse({}));
  }

  /**
   * A management account or a delegated administrator account in a resource directory can create an account group to centrally manage resources, compliance packages, and rules across multiple member accounts.
   * 
   * @remarks
   * ### Limits
   * A management account or a delegated administrator account can create a maximum of 5 account groups. Each account group can contain a maximum of 200 member accounts.
   * ### Background information
   * For more information about account groups, including their concepts, use cases, and the impact of member account changes on Cloud Config, see [Overview](https://help.aliyun.com/document_detail/211534.html).
   * Cloud Config supports the following types of account groups:
   * - Global account group: A global account group contains all members in a resource directory and automatically synchronizes member changes. A management account or a delegated administrator account can create only one global account group.
   * - Custom account group: To create a custom account group, a management account or a delegated administrator account selects some or all member accounts from the resource directory.
   *   - If a new member is added to the resource directory, the change is not automatically synchronized. The management account or delegated administrator account must manually add the new member to the account group.
   *   - If a member is removed from the resource directory, the management account or delegated administrator account loses the permissions to manage that member\\"s compliance. The custom account group automatically detects this change and removes the member from the group.
   * - Folder account group: When an account group is created from a folder, it automatically detects and synchronizes changes to the members within that folder. The members in a folder account group are always consistent with the members in the selected folder.
   *   A management account or a delegated administrator account can select only one non-empty folder to create a folder account group.
   * ### Usage notes
   * This topic provides an example of how to use a management account to create a custom account group of the `CUSTOM` type. The account group is named `Test_Group` and has the description `Test Group`. The member accounts are as follows:
   * - The member account ID is `171322098523****` and the member account name is `Alice`.
   * - The member account ID is `100532098349****` and the member account name is `Tom`.
   * 
   * @param request - CreateAggregatorRequest
   * @returns CreateAggregatorResponse
   */
  async createAggregator(request: $_model.CreateAggregatorRequest): Promise<$_model.CreateAggregatorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAggregatorWithOptions(request, runtime);
  }

  /**
   * 为当前账号创建合规包
   * 
   * @param tmpReq - CreateCompliancePackRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCompliancePackResponse
   */
  async createCompliancePackWithOptions(tmpReq: $_model.CreateCompliancePackRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCompliancePackResponse> {
    tmpReq.validate();
    let request = new $_model.CreateCompliancePackShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.configRules)) {
      request.configRulesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.configRules, "ConfigRules", "json");
    }

    if (!$dara.isNull(tmpReq.tag)) {
      request.tagShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tag, "Tag", "json");
    }

    let query = { };
    if (!$dara.isNull(request.tagShrink)) {
      query["Tag"] = request.tagShrink;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.compliancePackName)) {
      body["CompliancePackName"] = request.compliancePackName;
    }

    if (!$dara.isNull(request.compliancePackTemplateId)) {
      body["CompliancePackTemplateId"] = request.compliancePackTemplateId;
    }

    if (!$dara.isNull(request.configRulesShrink)) {
      body["ConfigRules"] = request.configRulesShrink;
    }

    if (!$dara.isNull(request.defaultEnable)) {
      body["DefaultEnable"] = request.defaultEnable;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.excludeRegionIdsScope)) {
      body["ExcludeRegionIdsScope"] = request.excludeRegionIdsScope;
    }

    if (!$dara.isNull(request.excludeResourceGroupIdsScope)) {
      body["ExcludeResourceGroupIdsScope"] = request.excludeResourceGroupIdsScope;
    }

    if (!$dara.isNull(request.excludeResourceIdsScope)) {
      body["ExcludeResourceIdsScope"] = request.excludeResourceIdsScope;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.excludeTagsScope)) {
      bodyFlat["ExcludeTagsScope"] = request.excludeTagsScope;
    }

    if (!$dara.isNull(request.regionIdsScope)) {
      body["RegionIdsScope"] = request.regionIdsScope;
    }

    if (!$dara.isNull(request.resourceGroupIdsScope)) {
      body["ResourceGroupIdsScope"] = request.resourceGroupIdsScope;
    }

    if (!$dara.isNull(request.resourceIdsScope)) {
      body["ResourceIdsScope"] = request.resourceIdsScope;
    }

    if (!$dara.isNull(request.riskLevel)) {
      body["RiskLevel"] = request.riskLevel;
    }

    if (!$dara.isNull(request.tagKeyScope)) {
      body["TagKeyScope"] = request.tagKeyScope;
    }

    if (!$dara.isNull(request.tagValueScope)) {
      body["TagValueScope"] = request.tagValueScope;
    }

    if (!$dara.isNull(request.tagsScope)) {
      bodyFlat["TagsScope"] = request.tagsScope;
    }

    if (!$dara.isNull(request.templateContent)) {
      body["TemplateContent"] = request.templateContent;
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
      action: "CreateCompliancePack",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCompliancePackResponse>(await this.callApi(params, req, runtime), new $_model.CreateCompliancePackResponse({}));
  }

  /**
   * 为当前账号创建合规包
   * 
   * @param request - CreateCompliancePackRequest
   * @returns CreateCompliancePackResponse
   */
  async createCompliancePack(request: $_model.CreateCompliancePackRequest): Promise<$_model.CreateCompliancePackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCompliancePackWithOptions(request, runtime);
  }

  /**
   * Creates a delivery channel to deliver resource data to Simple Log Service (SLS), Object Storage Service (OSS), or Simple Message Queue (formerly MNS).
   * 
   * @remarks
   * ### Background information
   * - Deliver to Simple Log Service (SLS)
   *   When you deliver resource configuration histories, non-compliant events, and scheduled snapshots to a Logstore in SLS, you must first create a project and a Logstore. This lets you query and analyze logs. For examples of the content of the JSON files, see [Resource configuration history examples](https://help.aliyun.com/document_detail/308347.html), [Non-compliant event examples](https://help.aliyun.com/document_detail/307122.html), and [Scheduled resource snapshot examples](https://help.aliyun.com/document_detail/611894.html).
   * - Deliver to Object Storage Service (OSS)
   *   When you deliver scheduled resource snapshots or configuration histories to a specified location in OSS, you must first create a bucket. This lets you view or download the JSON files. For examples of the content of the JSON files, see [Scheduled resource snapshot examples](https://help.aliyun.com/document_detail/305669.html) and [Resource configuration history examples](https://help.aliyun.com/document_detail/189738.html).
   * - Deliver to Simple Message Queue (formerly MNS)
   *   When you deliver resource configuration histories and non-compliant events to a specified topic in MNS, you must first create a topic. This lets you set the push method and content for the topic. For examples of the content of the JSON files, see [Resource configuration history examples](https://help.aliyun.com/document_detail/309462.html) and [Non-compliant event examples](https://help.aliyun.com/document_detail/309463.html).
   * ### Limits
   * You can create a maximum of 5 delivery channels.
   * ### Usage notes
   * This topic provides an example of how to create a delivery channel. In this example, the channel type is `OSS` and the destination ARN is `acs:oss:cn-shanghai:100931896542****:new-bucket`. The response shows that a delivery channel with the ID `cdc-8e45ff4e06a3a8****` is created.
   * 
   * @param request - CreateConfigDeliveryChannelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateConfigDeliveryChannelResponse
   */
  async createConfigDeliveryChannelWithOptions(request: $_model.CreateConfigDeliveryChannelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateConfigDeliveryChannelResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.compliantSnapshot)) {
      query["CompliantSnapshot"] = request.compliantSnapshot;
    }

    if (!$dara.isNull(request.configurationItemChangeNotification)) {
      query["ConfigurationItemChangeNotification"] = request.configurationItemChangeNotification;
    }

    if (!$dara.isNull(request.configurationSnapshot)) {
      query["ConfigurationSnapshot"] = request.configurationSnapshot;
    }

    if (!$dara.isNull(request.deliveryChannelCondition)) {
      query["DeliveryChannelCondition"] = request.deliveryChannelCondition;
    }

    if (!$dara.isNull(request.deliveryChannelName)) {
      query["DeliveryChannelName"] = request.deliveryChannelName;
    }

    if (!$dara.isNull(request.deliveryChannelTargetArn)) {
      query["DeliveryChannelTargetArn"] = request.deliveryChannelTargetArn;
    }

    if (!$dara.isNull(request.deliveryChannelType)) {
      query["DeliveryChannelType"] = request.deliveryChannelType;
    }

    if (!$dara.isNull(request.deliverySnapshotTime)) {
      query["DeliverySnapshotTime"] = request.deliverySnapshotTime;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.nonCompliantNotification)) {
      query["NonCompliantNotification"] = request.nonCompliantNotification;
    }

    if (!$dara.isNull(request.oversizedDataOSSTargetArn)) {
      query["OversizedDataOSSTargetArn"] = request.oversizedDataOSSTargetArn;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateConfigDeliveryChannel",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateConfigDeliveryChannelResponse>(await this.callApi(params, req, runtime), new $_model.CreateConfigDeliveryChannelResponse({}));
  }

  /**
   * Creates a delivery channel to deliver resource data to Simple Log Service (SLS), Object Storage Service (OSS), or Simple Message Queue (formerly MNS).
   * 
   * @remarks
   * ### Background information
   * - Deliver to Simple Log Service (SLS)
   *   When you deliver resource configuration histories, non-compliant events, and scheduled snapshots to a Logstore in SLS, you must first create a project and a Logstore. This lets you query and analyze logs. For examples of the content of the JSON files, see [Resource configuration history examples](https://help.aliyun.com/document_detail/308347.html), [Non-compliant event examples](https://help.aliyun.com/document_detail/307122.html), and [Scheduled resource snapshot examples](https://help.aliyun.com/document_detail/611894.html).
   * - Deliver to Object Storage Service (OSS)
   *   When you deliver scheduled resource snapshots or configuration histories to a specified location in OSS, you must first create a bucket. This lets you view or download the JSON files. For examples of the content of the JSON files, see [Scheduled resource snapshot examples](https://help.aliyun.com/document_detail/305669.html) and [Resource configuration history examples](https://help.aliyun.com/document_detail/189738.html).
   * - Deliver to Simple Message Queue (formerly MNS)
   *   When you deliver resource configuration histories and non-compliant events to a specified topic in MNS, you must first create a topic. This lets you set the push method and content for the topic. For examples of the content of the JSON files, see [Resource configuration history examples](https://help.aliyun.com/document_detail/309462.html) and [Non-compliant event examples](https://help.aliyun.com/document_detail/309463.html).
   * ### Limits
   * You can create a maximum of 5 delivery channels.
   * ### Usage notes
   * This topic provides an example of how to create a delivery channel. In this example, the channel type is `OSS` and the destination ARN is `acs:oss:cn-shanghai:100931896542****:new-bucket`. The response shows that a delivery channel with the ID `cdc-8e45ff4e06a3a8****` is created.
   * 
   * @param request - CreateConfigDeliveryChannelRequest
   * @returns CreateConfigDeliveryChannelResponse
   */
  async createConfigDeliveryChannel(request: $_model.CreateConfigDeliveryChannelRequest): Promise<$_model.CreateConfigDeliveryChannelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createConfigDeliveryChannelWithOptions(request, runtime);
  }

  /**
   * Creates a rule from a template or a custom rule using Function Compute to check resource compliance. After you create a rule, Cloud Config runs an initial evaluation and then automatically triggers subsequent evaluations based on the rule\\"s trigger. You can also run evaluations manually.
   * 
   * @remarks
   * ### Limits
   * You can create up to 200 rules for each account.
   * ### Background information
   * You can create rules in Cloud Config in the following ways:
   * - Create rules from templates
   *   Rule templates are predefined rule functions in Function Compute that are provided by Cloud Config. You can use rule templates to create rules quickly. For more information about rules, see [Definition and working principles of rules](https://help.aliyun.com/document_detail/128273.html).
   * - Create custom rules using Function Compute
   *   Custom rules are based on functions in Function Compute that host your rule code. If the predefined rule templates in Cloud Config do not meet your compliance requirements, you can write your own function code to check compliance in complex scenarios. For more information about custom rules, see [Definition and working principles of custom rules](https://help.aliyun.com/document_detail/127405.html).
   * ### Usage notes
   * This topic provides an example of how to create a rule from the \\`required-tags\\` template. In the response, a rule is created and its ID is `cr-5772ba41209e007b****`.
   * 
   * @param tmpReq - CreateConfigRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateConfigRuleResponse
   */
  async createConfigRuleWithOptions(tmpReq: $_model.CreateConfigRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateConfigRuleResponse> {
    tmpReq.validate();
    let request = new $_model.CreateConfigRuleShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.inputParameters)) {
      request.inputParametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.inputParameters, "InputParameters", "json");
    }

    if (!$dara.isNull(tmpReq.resourceTypesScope)) {
      request.resourceTypesScopeShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceTypesScope, "ResourceTypesScope", "simple");
    }

    if (!$dara.isNull(tmpReq.tag)) {
      request.tagShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tag, "Tag", "json");
    }

    let query = { };
    if (!$dara.isNull(request.tagShrink)) {
      query["Tag"] = request.tagShrink;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.conditions)) {
      body["Conditions"] = request.conditions;
    }

    if (!$dara.isNull(request.configRuleName)) {
      body["ConfigRuleName"] = request.configRuleName;
    }

    if (!$dara.isNull(request.configRuleTriggerTypes)) {
      body["ConfigRuleTriggerTypes"] = request.configRuleTriggerTypes;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.excludeRegionIdsScope)) {
      body["ExcludeRegionIdsScope"] = request.excludeRegionIdsScope;
    }

    if (!$dara.isNull(request.excludeResourceGroupIdsScope)) {
      body["ExcludeResourceGroupIdsScope"] = request.excludeResourceGroupIdsScope;
    }

    if (!$dara.isNull(request.excludeResourceIdsScope)) {
      body["ExcludeResourceIdsScope"] = request.excludeResourceIdsScope;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.excludeTagsScope)) {
      bodyFlat["ExcludeTagsScope"] = request.excludeTagsScope;
    }

    if (!$dara.isNull(request.extendContent)) {
      body["ExtendContent"] = request.extendContent;
    }

    if (!$dara.isNull(request.inputParametersShrink)) {
      body["InputParameters"] = request.inputParametersShrink;
    }

    if (!$dara.isNull(request.maximumExecutionFrequency)) {
      body["MaximumExecutionFrequency"] = request.maximumExecutionFrequency;
    }

    if (!$dara.isNull(request.regionIdsScope)) {
      body["RegionIdsScope"] = request.regionIdsScope;
    }

    if (!$dara.isNull(request.resourceGroupIdsScope)) {
      body["ResourceGroupIdsScope"] = request.resourceGroupIdsScope;
    }

    if (!$dara.isNull(request.resourceIdsScope)) {
      body["ResourceIdsScope"] = request.resourceIdsScope;
    }

    if (!$dara.isNull(request.resourceNameScope)) {
      body["ResourceNameScope"] = request.resourceNameScope;
    }

    if (!$dara.isNull(request.resourceTypesScopeShrink)) {
      body["ResourceTypesScope"] = request.resourceTypesScopeShrink;
    }

    if (!$dara.isNull(request.riskLevel)) {
      body["RiskLevel"] = request.riskLevel;
    }

    if (!$dara.isNull(request.sourceIdentifier)) {
      body["SourceIdentifier"] = request.sourceIdentifier;
    }

    if (!$dara.isNull(request.sourceOwner)) {
      body["SourceOwner"] = request.sourceOwner;
    }

    if (!$dara.isNull(request.tagKeyLogicScope)) {
      body["TagKeyLogicScope"] = request.tagKeyLogicScope;
    }

    if (!$dara.isNull(request.tagKeyScope)) {
      body["TagKeyScope"] = request.tagKeyScope;
    }

    if (!$dara.isNull(request.tagValueScope)) {
      body["TagValueScope"] = request.tagValueScope;
    }

    if (!$dara.isNull(request.tagsScope)) {
      bodyFlat["TagsScope"] = request.tagsScope;
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
      action: "CreateConfigRule",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateConfigRuleResponse>(await this.callApi(params, req, runtime), new $_model.CreateConfigRuleResponse({}));
  }

  /**
   * Creates a rule from a template or a custom rule using Function Compute to check resource compliance. After you create a rule, Cloud Config runs an initial evaluation and then automatically triggers subsequent evaluations based on the rule\\"s trigger. You can also run evaluations manually.
   * 
   * @remarks
   * ### Limits
   * You can create up to 200 rules for each account.
   * ### Background information
   * You can create rules in Cloud Config in the following ways:
   * - Create rules from templates
   *   Rule templates are predefined rule functions in Function Compute that are provided by Cloud Config. You can use rule templates to create rules quickly. For more information about rules, see [Definition and working principles of rules](https://help.aliyun.com/document_detail/128273.html).
   * - Create custom rules using Function Compute
   *   Custom rules are based on functions in Function Compute that host your rule code. If the predefined rule templates in Cloud Config do not meet your compliance requirements, you can write your own function code to check compliance in complex scenarios. For more information about custom rules, see [Definition and working principles of custom rules](https://help.aliyun.com/document_detail/127405.html).
   * ### Usage notes
   * This topic provides an example of how to create a rule from the \\`required-tags\\` template. In the response, a rule is created and its ID is `cr-5772ba41209e007b****`.
   * 
   * @param request - CreateConfigRuleRequest
   * @returns CreateConfigRuleResponse
   */
  async createConfigRule(request: $_model.CreateConfigRuleRequest): Promise<$_model.CreateConfigRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createConfigRuleWithOptions(request, runtime);
  }

  /**
   * Creates a remediation for an existing rule.
   * 
   * @remarks
   * ### Background information
   * - Template-based remediation: Uses public templates from Operation Orchestration Service (OOS) to remediate non-compliant resources.
   *   Each rule supports only one remediation. This remediation type is available only for rules created from specific templates.
   * - Custom remediation: Uses custom code in Function Compute (FC) to remediate non-compliant resources.
   *   Each rule supports only one remediation. This remediation type is available for rules created from templates and custom rules.
   * ### Usage notes
   * In this example, a remediation is created for the rule `cr-8a973ac2e2be00a2****`. The sample response shows that the remediation is created and has the ID `crr-909ba2d4716700eb****`.
   * 
   * @param request - CreateRemediationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRemediationResponse
   */
  async createRemediationWithOptions(request: $_model.CreateRemediationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateRemediationResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.configRuleId)) {
      body["ConfigRuleId"] = request.configRuleId;
    }

    if (!$dara.isNull(request.invokeType)) {
      body["InvokeType"] = request.invokeType;
    }

    if (!$dara.isNull(request.params)) {
      body["Params"] = request.params;
    }

    if (!$dara.isNull(request.remediationTemplateId)) {
      body["RemediationTemplateId"] = request.remediationTemplateId;
    }

    if (!$dara.isNull(request.remediationType)) {
      body["RemediationType"] = request.remediationType;
    }

    if (!$dara.isNull(request.sourceType)) {
      body["SourceType"] = request.sourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRemediation",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateRemediationResponse>(await this.callApi(params, req, runtime), new $_model.CreateRemediationResponse({}));
  }

  /**
   * Creates a remediation for an existing rule.
   * 
   * @remarks
   * ### Background information
   * - Template-based remediation: Uses public templates from Operation Orchestration Service (OOS) to remediate non-compliant resources.
   *   Each rule supports only one remediation. This remediation type is available only for rules created from specific templates.
   * - Custom remediation: Uses custom code in Function Compute (FC) to remediate non-compliant resources.
   *   Each rule supports only one remediation. This remediation type is available for rules created from templates and custom rules.
   * ### Usage notes
   * In this example, a remediation is created for the rule `cr-8a973ac2e2be00a2****`. The sample response shows that the remediation is created and has the ID `crr-909ba2d4716700eb****`.
   * 
   * @param request - CreateRemediationRequest
   * @returns CreateRemediationResponse
   */
  async createRemediation(request: $_model.CreateRemediationRequest): Promise<$_model.CreateRemediationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createRemediationWithOptions(request, runtime);
  }

  /**
   * Create a compliance report template for the current UID.
   * 
   * @param tmpReq - CreateReportTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateReportTemplateResponse
   */
  async createReportTemplateWithOptions(tmpReq: $_model.CreateReportTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateReportTemplateResponse> {
    tmpReq.validate();
    let request = new $_model.CreateReportTemplateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.reportScope)) {
      request.reportScopeShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.reportScope, "ReportScope", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.reportFileFormats)) {
      body["ReportFileFormats"] = request.reportFileFormats;
    }

    if (!$dara.isNull(request.reportGranularity)) {
      body["ReportGranularity"] = request.reportGranularity;
    }

    if (!$dara.isNull(request.reportLanguage)) {
      body["ReportLanguage"] = request.reportLanguage;
    }

    if (!$dara.isNull(request.reportScopeShrink)) {
      body["ReportScope"] = request.reportScopeShrink;
    }

    if (!$dara.isNull(request.reportTemplateDescription)) {
      body["ReportTemplateDescription"] = request.reportTemplateDescription;
    }

    if (!$dara.isNull(request.reportTemplateName)) {
      body["ReportTemplateName"] = request.reportTemplateName;
    }

    if (!$dara.isNull(request.subscriptionFrequency)) {
      body["SubscriptionFrequency"] = request.subscriptionFrequency;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateReportTemplate",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateReportTemplateResponse>(await this.callApi(params, req, runtime), new $_model.CreateReportTemplateResponse({}));
  }

  /**
   * Create a compliance report template for the current UID.
   * 
   * @param request - CreateReportTemplateRequest
   * @returns CreateReportTemplateResponse
   */
  async createReportTemplate(request: $_model.CreateReportTemplateRequest): Promise<$_model.CreateReportTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createReportTemplateWithOptions(request, runtime);
  }

  /**
   * 停用账号组规则
   * 
   * @param request - DeactiveAggregateConfigRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeactiveAggregateConfigRulesResponse
   */
  async deactiveAggregateConfigRulesWithOptions(request: $_model.DeactiveAggregateConfigRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeactiveAggregateConfigRulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aggregatorId)) {
      query["AggregatorId"] = request.aggregatorId;
    }

    if (!$dara.isNull(request.compliancePackId)) {
      query["CompliancePackId"] = request.compliancePackId;
    }

    if (!$dara.isNull(request.configRuleIds)) {
      query["ConfigRuleIds"] = request.configRuleIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeactiveAggregateConfigRules",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeactiveAggregateConfigRulesResponse>(await this.callApi(params, req, runtime), new $_model.DeactiveAggregateConfigRulesResponse({}));
  }

  /**
   * 停用账号组规则
   * 
   * @param request - DeactiveAggregateConfigRulesRequest
   * @returns DeactiveAggregateConfigRulesResponse
   */
  async deactiveAggregateConfigRules(request: $_model.DeactiveAggregateConfigRulesRequest): Promise<$_model.DeactiveAggregateConfigRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deactiveAggregateConfigRulesWithOptions(request, runtime);
  }

  /**
   * 停用指定规则
   * 
   * @param request - DeactiveConfigRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeactiveConfigRulesResponse
   */
  async deactiveConfigRulesWithOptions(request: $_model.DeactiveConfigRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeactiveConfigRulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.compliancePackId)) {
      query["CompliancePackId"] = request.compliancePackId;
    }

    if (!$dara.isNull(request.configRuleIds)) {
      query["ConfigRuleIds"] = request.configRuleIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeactiveConfigRules",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeactiveConfigRulesResponse>(await this.callApi(params, req, runtime), new $_model.DeactiveConfigRulesResponse({}));
  }

  /**
   * 停用指定规则
   * 
   * @param request - DeactiveConfigRulesRequest
   * @returns DeactiveConfigRulesResponse
   */
  async deactiveConfigRules(request: $_model.DeactiveConfigRulesRequest): Promise<$_model.DeactiveConfigRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deactiveConfigRulesWithOptions(request, runtime);
  }

  /**
   * 删除指定账号组内的合规包。删除合规包后，该合规包的检查结果和检查报告也自动被删除
   * 
   * @param request - DeleteAggregateCompliancePacksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAggregateCompliancePacksResponse
   */
  async deleteAggregateCompliancePacksWithOptions(request: $_model.DeleteAggregateCompliancePacksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAggregateCompliancePacksResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.aggregatorId)) {
      body["AggregatorId"] = request.aggregatorId;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.compliancePackIds)) {
      body["CompliancePackIds"] = request.compliancePackIds;
    }

    if (!$dara.isNull(request.deleteRule)) {
      body["DeleteRule"] = request.deleteRule;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAggregateCompliancePacks",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAggregateCompliancePacksResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAggregateCompliancePacksResponse({}));
  }

  /**
   * 删除指定账号组内的合规包。删除合规包后，该合规包的检查结果和检查报告也自动被删除
   * 
   * @param request - DeleteAggregateCompliancePacksRequest
   * @returns DeleteAggregateCompliancePacksResponse
   */
  async deleteAggregateCompliancePacks(request: $_model.DeleteAggregateCompliancePacksRequest): Promise<$_model.DeleteAggregateCompliancePacksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAggregateCompliancePacksWithOptions(request, runtime);
  }

  /**
   * 账号组删除投递渠道
   * 
   * @param request - DeleteAggregateConfigDeliveryChannelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAggregateConfigDeliveryChannelResponse
   */
  async deleteAggregateConfigDeliveryChannelWithOptions(request: $_model.DeleteAggregateConfigDeliveryChannelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAggregateConfigDeliveryChannelResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aggregatorId)) {
      query["AggregatorId"] = request.aggregatorId;
    }

    if (!$dara.isNull(request.deliveryChannelId)) {
      query["DeliveryChannelId"] = request.deliveryChannelId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAggregateConfigDeliveryChannel",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAggregateConfigDeliveryChannelResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAggregateConfigDeliveryChannelResponse({}));
  }

  /**
   * 账号组删除投递渠道
   * 
   * @param request - DeleteAggregateConfigDeliveryChannelRequest
   * @returns DeleteAggregateConfigDeliveryChannelResponse
   */
  async deleteAggregateConfigDeliveryChannel(request: $_model.DeleteAggregateConfigDeliveryChannelRequest): Promise<$_model.DeleteAggregateConfigDeliveryChannelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAggregateConfigDeliveryChannelWithOptions(request, runtime);
  }

  /**
   * 删除指定账号组内的规则。删除规则后，其配置信息不再保留
   * 
   * @param request - DeleteAggregateConfigRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAggregateConfigRulesResponse
   */
  async deleteAggregateConfigRulesWithOptions(request: $_model.DeleteAggregateConfigRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAggregateConfigRulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aggregatorId)) {
      query["AggregatorId"] = request.aggregatorId;
    }

    if (!$dara.isNull(request.configRuleIds)) {
      query["ConfigRuleIds"] = request.configRuleIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAggregateConfigRules",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAggregateConfigRulesResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAggregateConfigRulesResponse({}));
  }

  /**
   * 删除指定账号组内的规则。删除规则后，其配置信息不再保留
   * 
   * @param request - DeleteAggregateConfigRulesRequest
   * @returns DeleteAggregateConfigRulesResponse
   */
  async deleteAggregateConfigRules(request: $_model.DeleteAggregateConfigRulesRequest): Promise<$_model.DeleteAggregateConfigRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAggregateConfigRulesWithOptions(request, runtime);
  }

  /**
   * Deletes the remediation settings for a rule in a specified account group.
   * 
   * @remarks
   * This topic provides an example of how to delete the remediation setting `crr-909ba2d4716700eb****` for a rule in the account group `ca-6b4a626622af0012****`. The response shows that the remediation setting is deleted.
   * 
   * @param request - DeleteAggregateRemediationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAggregateRemediationsResponse
   */
  async deleteAggregateRemediationsWithOptions(request: $_model.DeleteAggregateRemediationsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAggregateRemediationsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.aggregatorId)) {
      body["AggregatorId"] = request.aggregatorId;
    }

    if (!$dara.isNull(request.remediationIds)) {
      body["RemediationIds"] = request.remediationIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAggregateRemediations",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAggregateRemediationsResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAggregateRemediationsResponse({}));
  }

  /**
   * Deletes the remediation settings for a rule in a specified account group.
   * 
   * @remarks
   * This topic provides an example of how to delete the remediation setting `crr-909ba2d4716700eb****` for a rule in the account group `ca-6b4a626622af0012****`. The response shows that the remediation setting is deleted.
   * 
   * @param request - DeleteAggregateRemediationsRequest
   * @returns DeleteAggregateRemediationsResponse
   */
  async deleteAggregateRemediations(request: $_model.DeleteAggregateRemediationsRequest): Promise<$_model.DeleteAggregateRemediationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAggregateRemediationsWithOptions(request, runtime);
  }

  /**
   * 删除账号组
   * 
   * @param request - DeleteAggregatorsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAggregatorsResponse
   */
  async deleteAggregatorsWithOptions(request: $_model.DeleteAggregatorsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAggregatorsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.aggregatorIds)) {
      body["AggregatorIds"] = request.aggregatorIds;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAggregators",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAggregatorsResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAggregatorsResponse({}));
  }

  /**
   * 删除账号组
   * 
   * @param request - DeleteAggregatorsRequest
   * @returns DeleteAggregatorsResponse
   */
  async deleteAggregators(request: $_model.DeleteAggregatorsRequest): Promise<$_model.DeleteAggregatorsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAggregatorsWithOptions(request, runtime);
  }

  /**
   * 批量删除合规包
   * 
   * @param request - DeleteCompliancePacksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCompliancePacksResponse
   */
  async deleteCompliancePacksWithOptions(request: $_model.DeleteCompliancePacksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCompliancePacksResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.compliancePackIds)) {
      body["CompliancePackIds"] = request.compliancePackIds;
    }

    if (!$dara.isNull(request.deleteRule)) {
      body["DeleteRule"] = request.deleteRule;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCompliancePacks",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteCompliancePacksResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCompliancePacksResponse({}));
  }

  /**
   * 批量删除合规包
   * 
   * @param request - DeleteCompliancePacksRequest
   * @returns DeleteCompliancePacksResponse
   */
  async deleteCompliancePacks(request: $_model.DeleteCompliancePacksRequest): Promise<$_model.DeleteCompliancePacksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCompliancePacksWithOptions(request, runtime);
  }

  /**
   * 当前账号删除投递渠道
   * 
   * @param request - DeleteConfigDeliveryChannelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteConfigDeliveryChannelResponse
   */
  async deleteConfigDeliveryChannelWithOptions(request: $_model.DeleteConfigDeliveryChannelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteConfigDeliveryChannelResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deliveryChannelId)) {
      query["DeliveryChannelId"] = request.deliveryChannelId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteConfigDeliveryChannel",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteConfigDeliveryChannelResponse>(await this.callApi(params, req, runtime), new $_model.DeleteConfigDeliveryChannelResponse({}));
  }

  /**
   * 当前账号删除投递渠道
   * 
   * @param request - DeleteConfigDeliveryChannelRequest
   * @returns DeleteConfigDeliveryChannelResponse
   */
  async deleteConfigDeliveryChannel(request: $_model.DeleteConfigDeliveryChannelRequest): Promise<$_model.DeleteConfigDeliveryChannelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteConfigDeliveryChannelWithOptions(request, runtime);
  }

  /**
   * 批量删除规则
   * 
   * @param request - DeleteConfigRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteConfigRulesResponse
   */
  async deleteConfigRulesWithOptions(request: $_model.DeleteConfigRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteConfigRulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.configRuleIds)) {
      query["ConfigRuleIds"] = request.configRuleIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteConfigRules",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteConfigRulesResponse>(await this.callApi(params, req, runtime), new $_model.DeleteConfigRulesResponse({}));
  }

  /**
   * 批量删除规则
   * 
   * @param request - DeleteConfigRulesRequest
   * @returns DeleteConfigRulesResponse
   */
  async deleteConfigRules(request: $_model.DeleteConfigRulesRequest): Promise<$_model.DeleteConfigRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteConfigRulesWithOptions(request, runtime);
  }

  /**
   * Deletes specified remediation settings.
   * 
   * @remarks
   * This topic provides an example of how to delete a remediation setting for a rule. In this example, the remediation setting with the ID `crr-909ba2d4716700eb****` is deleted. The response indicates that the operation is successful.
   * 
   * @param request - DeleteRemediationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRemediationsResponse
   */
  async deleteRemediationsWithOptions(request: $_model.DeleteRemediationsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRemediationsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.remediationIds)) {
      body["RemediationIds"] = request.remediationIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRemediations",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteRemediationsResponse>(await this.callApi(params, req, runtime), new $_model.DeleteRemediationsResponse({}));
  }

  /**
   * Deletes specified remediation settings.
   * 
   * @remarks
   * This topic provides an example of how to delete a remediation setting for a rule. In this example, the remediation setting with the ID `crr-909ba2d4716700eb****` is deleted. The response indicates that the operation is successful.
   * 
   * @param request - DeleteRemediationsRequest
   * @returns DeleteRemediationsResponse
   */
  async deleteRemediations(request: $_model.DeleteRemediationsRequest): Promise<$_model.DeleteRemediationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteRemediationsWithOptions(request, runtime);
  }

  /**
   * Deletes a compliance report template.
   * 
   * @param request - DeleteReportTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteReportTemplateResponse
   */
  async deleteReportTemplateWithOptions(request: $_model.DeleteReportTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteReportTemplateResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.reportTemplateId)) {
      body["ReportTemplateId"] = request.reportTemplateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteReportTemplate",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteReportTemplateResponse>(await this.callApi(params, req, runtime), new $_model.DeleteReportTemplateResponse({}));
  }

  /**
   * Deletes a compliance report template.
   * 
   * @param request - DeleteReportTemplateRequest
   * @returns DeleteReportTemplateResponse
   */
  async deleteReportTemplate(request: $_model.DeleteReportTemplateRequest): Promise<$_model.DeleteReportTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteReportTemplateWithOptions(request, runtime);
  }

  /**
   * This operation retrieves the details of multiple resources in a batch.
   * 
   * @param request - DescribeDiscoveredResourceBatchRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDiscoveredResourceBatchResponse
   */
  async describeDiscoveredResourceBatchWithOptions(request: $_model.DescribeDiscoveredResourceBatchRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDiscoveredResourceBatchResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regions)) {
      query["Regions"] = request.regions;
    }

    if (!$dara.isNull(request.resourceIds)) {
      query["ResourceIds"] = request.resourceIds;
    }

    if (!$dara.isNull(request.resourceTypes)) {
      query["ResourceTypes"] = request.resourceTypes;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDiscoveredResourceBatch",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDiscoveredResourceBatchResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDiscoveredResourceBatchResponse({}));
  }

  /**
   * This operation retrieves the details of multiple resources in a batch.
   * 
   * @param request - DescribeDiscoveredResourceBatchRequest
   * @returns DescribeDiscoveredResourceBatchResponse
   */
  async describeDiscoveredResourceBatch(request: $_model.DescribeDiscoveredResourceBatchRequest): Promise<$_model.DescribeDiscoveredResourceBatchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDiscoveredResourceBatchWithOptions(request, runtime);
  }

  /**
   * Queries the authorization status of an integrated cloud service.
   * 
   * @param request - DescribeIntegratedServiceStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeIntegratedServiceStatusResponse
   */
  async describeIntegratedServiceStatusWithOptions(request: $_model.DescribeIntegratedServiceStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeIntegratedServiceStatusResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.serviceCode)) {
      body["ServiceCode"] = request.serviceCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeIntegratedServiceStatus",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeIntegratedServiceStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribeIntegratedServiceStatusResponse({}));
  }

  /**
   * Queries the authorization status of an integrated cloud service.
   * 
   * @param request - DescribeIntegratedServiceStatusRequest
   * @returns DescribeIntegratedServiceStatusResponse
   */
  async describeIntegratedServiceStatus(request: $_model.DescribeIntegratedServiceStatusRequest): Promise<$_model.DescribeIntegratedServiceStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeIntegratedServiceStatusWithOptions(request, runtime);
  }

  /**
   * 获取修正详情
   * 
   * @param request - DescribeRemediationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRemediationResponse
   */
  async describeRemediationWithOptions(request: $_model.DescribeRemediationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRemediationResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRemediation",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRemediationResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRemediationResponse({}));
  }

  /**
   * 获取修正详情
   * 
   * @param request - DescribeRemediationRequest
   * @returns DescribeRemediationResponse
   */
  async describeRemediation(request: $_model.DescribeRemediationRequest): Promise<$_model.DescribeRemediationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRemediationWithOptions(request, runtime);
  }

  /**
   * 将指定账号组规则从指定账号组合规包中移出
   * 
   * @param request - DetachAggregateConfigRuleToCompliancePackRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetachAggregateConfigRuleToCompliancePackResponse
   */
  async detachAggregateConfigRuleToCompliancePackWithOptions(request: $_model.DetachAggregateConfigRuleToCompliancePackRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetachAggregateConfigRuleToCompliancePackResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aggregatorId)) {
      query["AggregatorId"] = request.aggregatorId;
    }

    if (!$dara.isNull(request.compliancePackId)) {
      query["CompliancePackId"] = request.compliancePackId;
    }

    if (!$dara.isNull(request.configRuleIds)) {
      query["ConfigRuleIds"] = request.configRuleIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetachAggregateConfigRuleToCompliancePack",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DetachAggregateConfigRuleToCompliancePackResponse>(await this.callApi(params, req, runtime), new $_model.DetachAggregateConfigRuleToCompliancePackResponse({}));
  }

  /**
   * 将指定账号组规则从指定账号组合规包中移出
   * 
   * @param request - DetachAggregateConfigRuleToCompliancePackRequest
   * @returns DetachAggregateConfigRuleToCompliancePackResponse
   */
  async detachAggregateConfigRuleToCompliancePack(request: $_model.DetachAggregateConfigRuleToCompliancePackRequest): Promise<$_model.DetachAggregateConfigRuleToCompliancePackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detachAggregateConfigRuleToCompliancePackWithOptions(request, runtime);
  }

  /**
   * This operation detaches one or more rules from a compliance package.
   * 
   * @remarks
   * ### Prerequisites
   * Make sure that the destination compliance package contains rules.
   * ### Usage notes
   * This topic provides an example of detaching the rule `cr-6cc4626622af00e7****` from the compliance package `cp-5bb1626622af00bd****`.
   * 
   * @param request - DetachConfigRuleToCompliancePackRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetachConfigRuleToCompliancePackResponse
   */
  async detachConfigRuleToCompliancePackWithOptions(request: $_model.DetachConfigRuleToCompliancePackRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetachConfigRuleToCompliancePackResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.compliancePackId)) {
      query["CompliancePackId"] = request.compliancePackId;
    }

    if (!$dara.isNull(request.configRuleIds)) {
      query["ConfigRuleIds"] = request.configRuleIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetachConfigRuleToCompliancePack",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DetachConfigRuleToCompliancePackResponse>(await this.callApi(params, req, runtime), new $_model.DetachConfigRuleToCompliancePackResponse({}));
  }

  /**
   * This operation detaches one or more rules from a compliance package.
   * 
   * @remarks
   * ### Prerequisites
   * Make sure that the destination compliance package contains rules.
   * ### Usage notes
   * This topic provides an example of detaching the rule `cr-6cc4626622af00e7****` from the compliance package `cp-5bb1626622af00bd****`.
   * 
   * @param request - DetachConfigRuleToCompliancePackRequest
   * @returns DetachConfigRuleToCompliancePackResponse
   */
  async detachConfigRuleToCompliancePack(request: $_model.DetachConfigRuleToCompliancePackRequest): Promise<$_model.DetachConfigRuleToCompliancePackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detachConfigRuleToCompliancePackWithOptions(request, runtime);
  }

  /**
   * This API performs a dry run on rules for proactive compliance pre-checks.
   * 
   * @param request - DryRunConfigRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DryRunConfigRuleResponse
   */
  async dryRunConfigRuleWithOptions(request: $_model.DryRunConfigRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DryRunConfigRuleResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.configurationItem)) {
      body["ConfigurationItem"] = request.configurationItem;
    }

    if (!$dara.isNull(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DryRunConfigRule",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DryRunConfigRuleResponse>(await this.callApi(params, req, runtime), new $_model.DryRunConfigRuleResponse({}));
  }

  /**
   * This API performs a dry run on rules for proactive compliance pre-checks.
   * 
   * @param request - DryRunConfigRuleRequest
   * @returns DryRunConfigRuleResponse
   */
  async dryRunConfigRule(request: $_model.DryRunConfigRuleRequest): Promise<$_model.DryRunConfigRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.dryRunConfigRuleWithOptions(request, runtime);
  }

  /**
   * Executes evaluation rules to perform compliance pre-checks on resources.
   * 
   * @remarks
   * For more information about the concepts, operating principles, and integration process of evaluation rules, see [Definition and operating principles of evaluation rules](https://help.aliyun.com/document_detail/470802.html).
   * After you create an evaluation rule, a managed rule with the same settings is created. This managed rule can continuously check the compliance of resources after they are created.
   * 
   * @param tmpReq - EvaluatePreConfigRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EvaluatePreConfigRulesResponse
   */
  async evaluatePreConfigRulesWithOptions(tmpReq: $_model.EvaluatePreConfigRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EvaluatePreConfigRulesResponse> {
    tmpReq.validate();
    let request = new $_model.EvaluatePreConfigRulesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.resourceEvaluateItems)) {
      request.resourceEvaluateItemsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceEvaluateItems, "ResourceEvaluateItems", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.enableManagedRules)) {
      body["EnableManagedRules"] = request.enableManagedRules;
    }

    if (!$dara.isNull(request.resourceEvaluateItemsShrink)) {
      body["ResourceEvaluateItems"] = request.resourceEvaluateItemsShrink;
    }

    if (!$dara.isNull(request.resourceTypeFormat)) {
      body["ResourceTypeFormat"] = request.resourceTypeFormat;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "EvaluatePreConfigRules",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EvaluatePreConfigRulesResponse>(await this.callApi(params, req, runtime), new $_model.EvaluatePreConfigRulesResponse({}));
  }

  /**
   * Executes evaluation rules to perform compliance pre-checks on resources.
   * 
   * @remarks
   * For more information about the concepts, operating principles, and integration process of evaluation rules, see [Definition and operating principles of evaluation rules](https://help.aliyun.com/document_detail/470802.html).
   * After you create an evaluation rule, a managed rule with the same settings is created. This managed rule can continuously check the compliance of resources after they are created.
   * 
   * @param request - EvaluatePreConfigRulesRequest
   * @returns EvaluatePreConfigRulesResponse
   */
  async evaluatePreConfigRules(request: $_model.EvaluatePreConfigRulesRequest): Promise<$_model.EvaluatePreConfigRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.evaluatePreConfigRulesWithOptions(request, runtime);
  }

  /**
   * Generates an assessment report for a specified compliance package in a specified account group.
   * 
   * @remarks
   * > This operation only generates the latest assessment report. You need to call the GetAggregateCompliancePackReport operation to download the assessment report. For more information, see [GetAggregateCompliancePackReport](https://help.aliyun.com/document_detail/262699.html).
   * This topic provides an example that shows how to generate an assessment report for the compliance package `cp-fdc8626622af00f9****` in the account group `ca-f632626622af0079****`.
   * 
   * @param request - GenerateAggregateCompliancePackReportRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateAggregateCompliancePackReportResponse
   */
  async generateAggregateCompliancePackReportWithOptions(request: $_model.GenerateAggregateCompliancePackReportRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GenerateAggregateCompliancePackReportResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.aggregatorId)) {
      body["AggregatorId"] = request.aggregatorId;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.compliancePackId)) {
      body["CompliancePackId"] = request.compliancePackId;
    }

    if (!$dara.isNull(request.multiFiles)) {
      body["MultiFiles"] = request.multiFiles;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GenerateAggregateCompliancePackReport",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GenerateAggregateCompliancePackReportResponse>(await this.callApi(params, req, runtime), new $_model.GenerateAggregateCompliancePackReportResponse({}));
  }

  /**
   * Generates an assessment report for a specified compliance package in a specified account group.
   * 
   * @remarks
   * > This operation only generates the latest assessment report. You need to call the GetAggregateCompliancePackReport operation to download the assessment report. For more information, see [GetAggregateCompliancePackReport](https://help.aliyun.com/document_detail/262699.html).
   * This topic provides an example that shows how to generate an assessment report for the compliance package `cp-fdc8626622af00f9****` in the account group `ca-f632626622af0079****`.
   * 
   * @param request - GenerateAggregateCompliancePackReportRequest
   * @returns GenerateAggregateCompliancePackReportResponse
   */
  async generateAggregateCompliancePackReport(request: $_model.GenerateAggregateCompliancePackReportRequest): Promise<$_model.GenerateAggregateCompliancePackReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.generateAggregateCompliancePackReportWithOptions(request, runtime);
  }

  /**
   * 生成指定账号组的合规报告
   * 
   * @param request - GenerateAggregateConfigRulesReportRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateAggregateConfigRulesReportResponse
   */
  async generateAggregateConfigRulesReportWithOptions(request: $_model.GenerateAggregateConfigRulesReportRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GenerateAggregateConfigRulesReportResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.aggregatorId)) {
      body["AggregatorId"] = request.aggregatorId;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.configRuleIds)) {
      body["ConfigRuleIds"] = request.configRuleIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GenerateAggregateConfigRulesReport",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GenerateAggregateConfigRulesReportResponse>(await this.callApi(params, req, runtime), new $_model.GenerateAggregateConfigRulesReportResponse({}));
  }

  /**
   * 生成指定账号组的合规报告
   * 
   * @param request - GenerateAggregateConfigRulesReportRequest
   * @returns GenerateAggregateConfigRulesReportResponse
   */
  async generateAggregateConfigRulesReport(request: $_model.GenerateAggregateConfigRulesReportRequest): Promise<$_model.GenerateAggregateConfigRulesReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.generateAggregateConfigRulesReportWithOptions(request, runtime);
  }

  /**
   * 账号组资源清单生成
   * 
   * @param request - GenerateAggregateResourceInventoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateAggregateResourceInventoryResponse
   */
  async generateAggregateResourceInventoryWithOptions(request: $_model.GenerateAggregateResourceInventoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GenerateAggregateResourceInventoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountIds)) {
      query["AccountIds"] = request.accountIds;
    }

    if (!$dara.isNull(request.aggregatorId)) {
      query["AggregatorId"] = request.aggregatorId;
    }

    if (!$dara.isNull(request.regions)) {
      query["Regions"] = request.regions;
    }

    if (!$dara.isNull(request.resourceDeleted)) {
      query["ResourceDeleted"] = request.resourceDeleted;
    }

    if (!$dara.isNull(request.resourceTypes)) {
      query["ResourceTypes"] = request.resourceTypes;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GenerateAggregateResourceInventory",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GenerateAggregateResourceInventoryResponse>(await this.callApi(params, req, runtime), new $_model.GenerateAggregateResourceInventoryResponse({}));
  }

  /**
   * 账号组资源清单生成
   * 
   * @param request - GenerateAggregateResourceInventoryRequest
   * @returns GenerateAggregateResourceInventoryResponse
   */
  async generateAggregateResourceInventory(request: $_model.GenerateAggregateResourceInventoryRequest): Promise<$_model.GenerateAggregateResourceInventoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.generateAggregateResourceInventoryWithOptions(request, runtime);
  }

  /**
   * 生成合规包的合规包报告
   * 
   * @param request - GenerateCompliancePackReportRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateCompliancePackReportResponse
   */
  async generateCompliancePackReportWithOptions(request: $_model.GenerateCompliancePackReportRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GenerateCompliancePackReportResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.compliancePackId)) {
      body["CompliancePackId"] = request.compliancePackId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GenerateCompliancePackReport",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GenerateCompliancePackReportResponse>(await this.callApi(params, req, runtime), new $_model.GenerateCompliancePackReportResponse({}));
  }

  /**
   * 生成合规包的合规包报告
   * 
   * @param request - GenerateCompliancePackReportRequest
   * @returns GenerateCompliancePackReportResponse
   */
  async generateCompliancePackReport(request: $_model.GenerateCompliancePackReportRequest): Promise<$_model.GenerateCompliancePackReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.generateCompliancePackReportWithOptions(request, runtime);
  }

  /**
   * 生成规则的合规评估报告
   * 
   * @param request - GenerateConfigRulesReportRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateConfigRulesReportResponse
   */
  async generateConfigRulesReportWithOptions(request: $_model.GenerateConfigRulesReportRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GenerateConfigRulesReportResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.configRuleIds)) {
      body["ConfigRuleIds"] = request.configRuleIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GenerateConfigRulesReport",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GenerateConfigRulesReportResponse>(await this.callApi(params, req, runtime), new $_model.GenerateConfigRulesReportResponse({}));
  }

  /**
   * 生成规则的合规评估报告
   * 
   * @param request - GenerateConfigRulesReportRequest
   * @returns GenerateConfigRulesReportResponse
   */
  async generateConfigRulesReport(request: $_model.GenerateConfigRulesReportRequest): Promise<$_model.GenerateConfigRulesReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.generateConfigRulesReportWithOptions(request, runtime);
  }

  /**
   * Generate a report ID from a report template.
   * 
   * @param request - GenerateReportFromTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateReportFromTemplateResponse
   */
  async generateReportFromTemplateWithOptions(request: $_model.GenerateReportFromTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GenerateReportFromTemplateResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.reportTemplateId)) {
      body["ReportTemplateId"] = request.reportTemplateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GenerateReportFromTemplate",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GenerateReportFromTemplateResponse>(await this.callApi(params, req, runtime), new $_model.GenerateReportFromTemplateResponse({}));
  }

  /**
   * Generate a report ID from a report template.
   * 
   * @param request - GenerateReportFromTemplateRequest
   * @returns GenerateReportFromTemplateResponse
   */
  async generateReportFromTemplate(request: $_model.GenerateReportFromTemplateRequest): Promise<$_model.GenerateReportFromTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.generateReportFromTemplateWithOptions(request, runtime);
  }

  /**
   * Generates a downloadable inventory of global resources.
   * 
   * @remarks
   * This topic provides an example of how to generate a downloadable inventory of global resources for the current account.
   * 
   * @param request - GenerateResourceInventoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateResourceInventoryResponse
   */
  async generateResourceInventoryWithOptions(request: $_model.GenerateResourceInventoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GenerateResourceInventoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regions)) {
      query["Regions"] = request.regions;
    }

    if (!$dara.isNull(request.resourceDeleted)) {
      query["ResourceDeleted"] = request.resourceDeleted;
    }

    if (!$dara.isNull(request.resourceTypes)) {
      query["ResourceTypes"] = request.resourceTypes;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GenerateResourceInventory",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GenerateResourceInventoryResponse>(await this.callApi(params, req, runtime), new $_model.GenerateResourceInventoryResponse({}));
  }

  /**
   * Generates a downloadable inventory of global resources.
   * 
   * @remarks
   * This topic provides an example of how to generate a downloadable inventory of global resources for the current account.
   * 
   * @param request - GenerateResourceInventoryRequest
   * @returns GenerateResourceInventoryResponse
   */
  async generateResourceInventory(request: $_model.GenerateResourceInventoryRequest): Promise<$_model.GenerateResourceInventoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.generateResourceInventoryWithOptions(request, runtime);
  }

  /**
   * 高级搜索 获取搜索结果下载文件地址
   * 
   * @param request - GetAdvancedSearchFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAdvancedSearchFileResponse
   */
  async getAdvancedSearchFileWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.GetAdvancedSearchFileResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "GetAdvancedSearchFile",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAdvancedSearchFileResponse>(await this.callApi(params, req, runtime), new $_model.GetAdvancedSearchFileResponse({}));
  }

  /**
   * 高级搜索 获取搜索结果下载文件地址
   * @returns GetAdvancedSearchFileResponse
   */
  async getAdvancedSearchFile(): Promise<$_model.GetAdvancedSearchFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAdvancedSearchFileWithOptions(runtime);
  }

  /**
   * 查询指定账号组内指定合规包中成员账号的合规结果
   * 
   * @param request - GetAggregateAccountComplianceByPackRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAggregateAccountComplianceByPackResponse
   */
  async getAggregateAccountComplianceByPackWithOptions(request: $_model.GetAggregateAccountComplianceByPackRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAggregateAccountComplianceByPackResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAggregateAccountComplianceByPack",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAggregateAccountComplianceByPackResponse>(await this.callApi(params, req, runtime), new $_model.GetAggregateAccountComplianceByPackResponse({}));
  }

  /**
   * 查询指定账号组内指定合规包中成员账号的合规结果
   * 
   * @param request - GetAggregateAccountComplianceByPackRequest
   * @returns GetAggregateAccountComplianceByPackResponse
   */
  async getAggregateAccountComplianceByPack(request: $_model.GetAggregateAccountComplianceByPackRequest): Promise<$_model.GetAggregateAccountComplianceByPackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAggregateAccountComplianceByPackWithOptions(request, runtime);
  }

  /**
   * 高级搜获取搜索结果下载文件地址
   * 
   * @param request - GetAggregateAdvancedSearchFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAggregateAdvancedSearchFileResponse
   */
  async getAggregateAdvancedSearchFileWithOptions(request: $_model.GetAggregateAdvancedSearchFileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAggregateAdvancedSearchFileResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aggregatorId)) {
      query["AggregatorId"] = request.aggregatorId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAggregateAdvancedSearchFile",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAggregateAdvancedSearchFileResponse>(await this.callApi(params, req, runtime), new $_model.GetAggregateAdvancedSearchFileResponse({}));
  }

  /**
   * 高级搜获取搜索结果下载文件地址
   * 
   * @param request - GetAggregateAdvancedSearchFileRequest
   * @returns GetAggregateAdvancedSearchFileResponse
   */
  async getAggregateAdvancedSearchFile(request: $_model.GetAggregateAdvancedSearchFileRequest): Promise<$_model.GetAggregateAdvancedSearchFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAggregateAdvancedSearchFileWithOptions(request, runtime);
  }

  /**
   * Queries the details of a compliance pack in a specified account group.
   * 
   * @remarks
   * This topic provides an example of how to retrieve the details of the compliance pack `cp-fdc8626622af00f9****` in the account group `ca-f632626622af0079****`.
   * 
   * @param tmpReq - GetAggregateCompliancePackRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAggregateCompliancePackResponse
   */
  async getAggregateCompliancePackWithOptions(tmpReq: $_model.GetAggregateCompliancePackRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAggregateCompliancePackResponse> {
    tmpReq.validate();
    let request = new $_model.GetAggregateCompliancePackShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tag)) {
      request.tagShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tag, "Tag", "json");
    }

    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAggregateCompliancePack",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAggregateCompliancePackResponse>(await this.callApi(params, req, runtime), new $_model.GetAggregateCompliancePackResponse({}));
  }

  /**
   * Queries the details of a compliance pack in a specified account group.
   * 
   * @remarks
   * This topic provides an example of how to retrieve the details of the compliance pack `cp-fdc8626622af00f9****` in the account group `ca-f632626622af0079****`.
   * 
   * @param request - GetAggregateCompliancePackRequest
   * @returns GetAggregateCompliancePackResponse
   */
  async getAggregateCompliancePack(request: $_model.GetAggregateCompliancePackRequest): Promise<$_model.GetAggregateCompliancePackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAggregateCompliancePackWithOptions(request, runtime);
  }

  /**
   * 获取指定账号组内指定合规包的评估报告
   * 
   * @param request - GetAggregateCompliancePackReportRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAggregateCompliancePackReportResponse
   */
  async getAggregateCompliancePackReportWithOptions(request: $_model.GetAggregateCompliancePackReportRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAggregateCompliancePackReportResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAggregateCompliancePackReport",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAggregateCompliancePackReportResponse>(await this.callApi(params, req, runtime), new $_model.GetAggregateCompliancePackReportResponse({}));
  }

  /**
   * 获取指定账号组内指定合规包的评估报告
   * 
   * @param request - GetAggregateCompliancePackReportRequest
   * @returns GetAggregateCompliancePackReportResponse
   */
  async getAggregateCompliancePackReport(request: $_model.GetAggregateCompliancePackReportRequest): Promise<$_model.GetAggregateCompliancePackReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAggregateCompliancePackReportWithOptions(request, runtime);
  }

  /**
   * Queries the compliance summary for a specified account group.
   * 
   * @remarks
   * This topic provides an example of how to query the compliance summary by resource and by rule for the account group ca-a91d626622af0035\\*\\*\\*\\*.
   * 
   * @param request - GetAggregateComplianceSummaryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAggregateComplianceSummaryResponse
   */
  async getAggregateComplianceSummaryWithOptions(request: $_model.GetAggregateComplianceSummaryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAggregateComplianceSummaryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aggregatorId)) {
      query["AggregatorId"] = request.aggregatorId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAggregateComplianceSummary",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAggregateComplianceSummaryResponse>(await this.callApi(params, req, runtime), new $_model.GetAggregateComplianceSummaryResponse({}));
  }

  /**
   * Queries the compliance summary for a specified account group.
   * 
   * @remarks
   * This topic provides an example of how to query the compliance summary by resource and by rule for the account group ca-a91d626622af0035\\*\\*\\*\\*.
   * 
   * @param request - GetAggregateComplianceSummaryRequest
   * @returns GetAggregateComplianceSummaryResponse
   */
  async getAggregateComplianceSummary(request: $_model.GetAggregateComplianceSummaryRequest): Promise<$_model.GetAggregateComplianceSummaryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAggregateComplianceSummaryWithOptions(request, runtime);
  }

  /**
   * 账号组查询单个投递渠道
   * 
   * @param request - GetAggregateConfigDeliveryChannelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAggregateConfigDeliveryChannelResponse
   */
  async getAggregateConfigDeliveryChannelWithOptions(request: $_model.GetAggregateConfigDeliveryChannelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAggregateConfigDeliveryChannelResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aggregatorId)) {
      query["AggregatorId"] = request.aggregatorId;
    }

    if (!$dara.isNull(request.deliveryChannelId)) {
      query["DeliveryChannelId"] = request.deliveryChannelId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAggregateConfigDeliveryChannel",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAggregateConfigDeliveryChannelResponse>(await this.callApi(params, req, runtime), new $_model.GetAggregateConfigDeliveryChannelResponse({}));
  }

  /**
   * 账号组查询单个投递渠道
   * 
   * @param request - GetAggregateConfigDeliveryChannelRequest
   * @returns GetAggregateConfigDeliveryChannelResponse
   */
  async getAggregateConfigDeliveryChannel(request: $_model.GetAggregateConfigDeliveryChannelRequest): Promise<$_model.GetAggregateConfigDeliveryChannelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAggregateConfigDeliveryChannelWithOptions(request, runtime);
  }

  /**
   * Queries the details of a specific rule in a specified account group.
   * 
   * @remarks
   * This topic provides an example of how to query the details of the rule `cr-7f7d626622af0041****` in the account group `ca-7f00626622af0041****`.
   * 
   * @param tmpReq - GetAggregateConfigRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAggregateConfigRuleResponse
   */
  async getAggregateConfigRuleWithOptions(tmpReq: $_model.GetAggregateConfigRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAggregateConfigRuleResponse> {
    tmpReq.validate();
    let request = new $_model.GetAggregateConfigRuleShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tag)) {
      request.tagShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tag, "Tag", "json");
    }

    let query = { };
    if (!$dara.isNull(request.aggregatorId)) {
      query["AggregatorId"] = request.aggregatorId;
    }

    if (!$dara.isNull(request.configRuleId)) {
      query["ConfigRuleId"] = request.configRuleId;
    }

    if (!$dara.isNull(request.tagShrink)) {
      query["Tag"] = request.tagShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAggregateConfigRule",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAggregateConfigRuleResponse>(await this.callApi(params, req, runtime), new $_model.GetAggregateConfigRuleResponse({}));
  }

  /**
   * Queries the details of a specific rule in a specified account group.
   * 
   * @remarks
   * This topic provides an example of how to query the details of the rule `cr-7f7d626622af0041****` in the account group `ca-7f00626622af0041****`.
   * 
   * @param request - GetAggregateConfigRuleRequest
   * @returns GetAggregateConfigRuleResponse
   */
  async getAggregateConfigRule(request: $_model.GetAggregateConfigRuleRequest): Promise<$_model.GetAggregateConfigRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAggregateConfigRuleWithOptions(request, runtime);
  }

  /**
   * Queries the compliance results of rules in a specified compliance pack within a specified account group.
   * 
   * @remarks
   * This topic provides an example of how to query the compliance results of rules in the compliance pack `cp-541e626622af0087****` for the account group `ca-04b3fd170e340007****`. The response returns a total of `1` rule and `0` non-compliant rules.
   * 
   * @param request - GetAggregateConfigRuleComplianceByPackRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAggregateConfigRuleComplianceByPackResponse
   */
  async getAggregateConfigRuleComplianceByPackWithOptions(request: $_model.GetAggregateConfigRuleComplianceByPackRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAggregateConfigRuleComplianceByPackResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAggregateConfigRuleComplianceByPack",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAggregateConfigRuleComplianceByPackResponse>(await this.callApi(params, req, runtime), new $_model.GetAggregateConfigRuleComplianceByPackResponse({}));
  }

  /**
   * Queries the compliance results of rules in a specified compliance pack within a specified account group.
   * 
   * @remarks
   * This topic provides an example of how to query the compliance results of rules in the compliance pack `cp-541e626622af0087****` for the account group `ca-04b3fd170e340007****`. The response returns a total of `1` rule and `0` non-compliant rules.
   * 
   * @param request - GetAggregateConfigRuleComplianceByPackRequest
   * @returns GetAggregateConfigRuleComplianceByPackResponse
   */
  async getAggregateConfigRuleComplianceByPack(request: $_model.GetAggregateConfigRuleComplianceByPackRequest): Promise<$_model.GetAggregateConfigRuleComplianceByPackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAggregateConfigRuleComplianceByPackWithOptions(request, runtime);
  }

  /**
   * 查询指定风险等级的账号组规则合规统计
   * 
   * @param request - GetAggregateConfigRuleSummaryByRiskLevelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAggregateConfigRuleSummaryByRiskLevelResponse
   */
  async getAggregateConfigRuleSummaryByRiskLevelWithOptions(request: $_model.GetAggregateConfigRuleSummaryByRiskLevelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAggregateConfigRuleSummaryByRiskLevelResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aggregatorId)) {
      query["AggregatorId"] = request.aggregatorId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAggregateConfigRuleSummaryByRiskLevel",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAggregateConfigRuleSummaryByRiskLevelResponse>(await this.callApi(params, req, runtime), new $_model.GetAggregateConfigRuleSummaryByRiskLevelResponse({}));
  }

  /**
   * 查询指定风险等级的账号组规则合规统计
   * 
   * @param request - GetAggregateConfigRuleSummaryByRiskLevelRequest
   * @returns GetAggregateConfigRuleSummaryByRiskLevelResponse
   */
  async getAggregateConfigRuleSummaryByRiskLevel(request: $_model.GetAggregateConfigRuleSummaryByRiskLevelRequest): Promise<$_model.GetAggregateConfigRuleSummaryByRiskLevelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAggregateConfigRuleSummaryByRiskLevelWithOptions(request, runtime);
  }

  /**
   * 下载Excel格式的规则合规评估报告到本地，便于您云下分配任务并跟进不合规资源配置的修改
   * 
   * @param request - GetAggregateConfigRulesReportRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAggregateConfigRulesReportResponse
   */
  async getAggregateConfigRulesReportWithOptions(request: $_model.GetAggregateConfigRulesReportRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAggregateConfigRulesReportResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aggregatorId)) {
      query["AggregatorId"] = request.aggregatorId;
    }

    if (!$dara.isNull(request.reportId)) {
      query["ReportId"] = request.reportId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAggregateConfigRulesReport",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAggregateConfigRulesReportResponse>(await this.callApi(params, req, runtime), new $_model.GetAggregateConfigRulesReportResponse({}));
  }

  /**
   * 下载Excel格式的规则合规评估报告到本地，便于您云下分配任务并跟进不合规资源配置的修改
   * 
   * @param request - GetAggregateConfigRulesReportRequest
   * @returns GetAggregateConfigRulesReportResponse
   */
  async getAggregateConfigRulesReport(request: $_model.GetAggregateConfigRulesReportRequest): Promise<$_model.GetAggregateConfigRulesReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAggregateConfigRulesReportWithOptions(request, runtime);
  }

  /**
   * Queries the details of a specific resource in an account group.
   * 
   * @remarks
   * This topic provides an example on how to query the details of an ECS instance `i-bp12g4xbl4i0brkn****` in the Hangzhou region within the account group `ca-5885626622af0008****`.
   * 
   * @param request - GetAggregateDiscoveredResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAggregateDiscoveredResourceResponse
   */
  async getAggregateDiscoveredResourceWithOptions(request: $_model.GetAggregateDiscoveredResourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAggregateDiscoveredResourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aggregatorId)) {
      query["AggregatorId"] = request.aggregatorId;
    }

    if (!$dara.isNull(request.complianceOption)) {
      query["ComplianceOption"] = request.complianceOption;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    if (!$dara.isNull(request.resourceAccountId)) {
      query["ResourceAccountId"] = request.resourceAccountId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAggregateDiscoveredResource",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAggregateDiscoveredResourceResponse>(await this.callApi(params, req, runtime), new $_model.GetAggregateDiscoveredResourceResponse({}));
  }

  /**
   * Queries the details of a specific resource in an account group.
   * 
   * @remarks
   * This topic provides an example on how to query the details of an ECS instance `i-bp12g4xbl4i0brkn****` in the Hangzhou region within the account group `ca-5885626622af0008****`.
   * 
   * @param request - GetAggregateDiscoveredResourceRequest
   * @returns GetAggregateDiscoveredResourceResponse
   */
  async getAggregateDiscoveredResource(request: $_model.GetAggregateDiscoveredResourceRequest): Promise<$_model.GetAggregateDiscoveredResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAggregateDiscoveredResourceWithOptions(request, runtime);
  }

  /**
   * 查询多账号规则合规情况
   * 
   * @param request - GetAggregateResourceComplianceByConfigRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAggregateResourceComplianceByConfigRuleResponse
   */
  async getAggregateResourceComplianceByConfigRuleWithOptions(request: $_model.GetAggregateResourceComplianceByConfigRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAggregateResourceComplianceByConfigRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aggregatorId)) {
      query["AggregatorId"] = request.aggregatorId;
    }

    if (!$dara.isNull(request.complianceType)) {
      query["ComplianceType"] = request.complianceType;
    }

    if (!$dara.isNull(request.configRuleId)) {
      query["ConfigRuleId"] = request.configRuleId;
    }

    if (!$dara.isNull(request.resourceAccountId)) {
      query["ResourceAccountId"] = request.resourceAccountId;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAggregateResourceComplianceByConfigRule",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAggregateResourceComplianceByConfigRuleResponse>(await this.callApi(params, req, runtime), new $_model.GetAggregateResourceComplianceByConfigRuleResponse({}));
  }

  /**
   * 查询多账号规则合规情况
   * 
   * @param request - GetAggregateResourceComplianceByConfigRuleRequest
   * @returns GetAggregateResourceComplianceByConfigRuleResponse
   */
  async getAggregateResourceComplianceByConfigRule(request: $_model.GetAggregateResourceComplianceByConfigRuleRequest): Promise<$_model.GetAggregateResourceComplianceByConfigRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAggregateResourceComplianceByConfigRuleWithOptions(request, runtime);
  }

  /**
   * Queries the compliance statistics for resources in a specified compliance package within a specified account group.
   * 
   * @remarks
   * This topic provides an example of how to query the compliance results for resources in the compliance package `cp-fdc8626622af00f9****` within the account group `ca-f632626622af0079****`. The response shows that of a total of `10` resources, `7` are non-compliant.
   * 
   * @param request - GetAggregateResourceComplianceByPackRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAggregateResourceComplianceByPackResponse
   */
  async getAggregateResourceComplianceByPackWithOptions(request: $_model.GetAggregateResourceComplianceByPackRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAggregateResourceComplianceByPackResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAggregateResourceComplianceByPack",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAggregateResourceComplianceByPackResponse>(await this.callApi(params, req, runtime), new $_model.GetAggregateResourceComplianceByPackResponse({}));
  }

  /**
   * Queries the compliance statistics for resources in a specified compliance package within a specified account group.
   * 
   * @remarks
   * This topic provides an example of how to query the compliance results for resources in the compliance package `cp-fdc8626622af00f9****` within the account group `ca-f632626622af0079****`. The response shows that of a total of `10` resources, `7` are non-compliant.
   * 
   * @param request - GetAggregateResourceComplianceByPackRequest
   * @returns GetAggregateResourceComplianceByPackResponse
   */
  async getAggregateResourceComplianceByPack(request: $_model.GetAggregateResourceComplianceByPackRequest): Promise<$_model.GetAggregateResourceComplianceByPackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAggregateResourceComplianceByPackWithOptions(request, runtime);
  }

  /**
   * 查询指定账号组内规则对资源的评估结果，评估结果按资源所属地域进行分组展示
   * 
   * @param request - GetAggregateResourceComplianceGroupByRegionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAggregateResourceComplianceGroupByRegionResponse
   */
  async getAggregateResourceComplianceGroupByRegionWithOptions(request: $_model.GetAggregateResourceComplianceGroupByRegionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAggregateResourceComplianceGroupByRegionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aggregatorId)) {
      query["AggregatorId"] = request.aggregatorId;
    }

    if (!$dara.isNull(request.configRuleIds)) {
      query["ConfigRuleIds"] = request.configRuleIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAggregateResourceComplianceGroupByRegion",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAggregateResourceComplianceGroupByRegionResponse>(await this.callApi(params, req, runtime), new $_model.GetAggregateResourceComplianceGroupByRegionResponse({}));
  }

  /**
   * 查询指定账号组内规则对资源的评估结果，评估结果按资源所属地域进行分组展示
   * 
   * @param request - GetAggregateResourceComplianceGroupByRegionRequest
   * @returns GetAggregateResourceComplianceGroupByRegionResponse
   */
  async getAggregateResourceComplianceGroupByRegion(request: $_model.GetAggregateResourceComplianceGroupByRegionRequest): Promise<$_model.GetAggregateResourceComplianceGroupByRegionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAggregateResourceComplianceGroupByRegionWithOptions(request, runtime);
  }

  /**
   * 查询指定账号组内规则对资源的评估结果，评估结果按资源类型进行分组展示
   * 
   * @param request - GetAggregateResourceComplianceGroupByResourceTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAggregateResourceComplianceGroupByResourceTypeResponse
   */
  async getAggregateResourceComplianceGroupByResourceTypeWithOptions(request: $_model.GetAggregateResourceComplianceGroupByResourceTypeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAggregateResourceComplianceGroupByResourceTypeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aggregatorId)) {
      query["AggregatorId"] = request.aggregatorId;
    }

    if (!$dara.isNull(request.configRuleIds)) {
      query["ConfigRuleIds"] = request.configRuleIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAggregateResourceComplianceGroupByResourceType",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAggregateResourceComplianceGroupByResourceTypeResponse>(await this.callApi(params, req, runtime), new $_model.GetAggregateResourceComplianceGroupByResourceTypeResponse({}));
  }

  /**
   * 查询指定账号组内规则对资源的评估结果，评估结果按资源类型进行分组展示
   * 
   * @param request - GetAggregateResourceComplianceGroupByResourceTypeRequest
   * @returns GetAggregateResourceComplianceGroupByResourceTypeResponse
   */
  async getAggregateResourceComplianceGroupByResourceType(request: $_model.GetAggregateResourceComplianceGroupByResourceTypeRequest): Promise<$_model.GetAggregateResourceComplianceGroupByResourceTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAggregateResourceComplianceGroupByResourceTypeWithOptions(request, runtime);
  }

  /**
   * Queries the compliance timeline of a specific resource in an account group. A compliance timeline is a set of compliance evaluation records for a resource. Each record includes the time and content of an evaluation.
   * 
   * @remarks
   * In Cloud Config, each resource has its own compliance timeline, which is composed of compliance evaluation records. A record is generated each time a rule is triggered to evaluate the resource. Rules can be triggered by configuration changes, periodic executions, or manual executions.
   * This topic provides an example of how to query the compliance timeline for the resource `new-bucket` (an OSS bucket). The resource is in the `cn-hangzhou` region and belongs to the member account `100931896542****` within the account group `ca-5885626622af0008****`. The response shows that the resource\\"s compliance timeline includes records with the timestamps `1625200295276` (UTC+8: 2021-07-02 12:31:35) and `1625200228510` (UTC+8: 2021-07-02 12:30:28).
   * 
   * @param request - GetAggregateResourceComplianceTimelineRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAggregateResourceComplianceTimelineResponse
   */
  async getAggregateResourceComplianceTimelineWithOptions(request: $_model.GetAggregateResourceComplianceTimelineRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAggregateResourceComplianceTimelineResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAggregateResourceComplianceTimeline",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAggregateResourceComplianceTimelineResponse>(await this.callApi(params, req, runtime), new $_model.GetAggregateResourceComplianceTimelineResponse({}));
  }

  /**
   * Queries the compliance timeline of a specific resource in an account group. A compliance timeline is a set of compliance evaluation records for a resource. Each record includes the time and content of an evaluation.
   * 
   * @remarks
   * In Cloud Config, each resource has its own compliance timeline, which is composed of compliance evaluation records. A record is generated each time a rule is triggered to evaluate the resource. Rules can be triggered by configuration changes, periodic executions, or manual executions.
   * This topic provides an example of how to query the compliance timeline for the resource `new-bucket` (an OSS bucket). The resource is in the `cn-hangzhou` region and belongs to the member account `100931896542****` within the account group `ca-5885626622af0008****`. The response shows that the resource\\"s compliance timeline includes records with the timestamps `1625200295276` (UTC+8: 2021-07-02 12:31:35) and `1625200228510` (UTC+8: 2021-07-02 12:30:28).
   * 
   * @param request - GetAggregateResourceComplianceTimelineRequest
   * @returns GetAggregateResourceComplianceTimelineResponse
   */
  async getAggregateResourceComplianceTimeline(request: $_model.GetAggregateResourceComplianceTimelineRequest): Promise<$_model.GetAggregateResourceComplianceTimelineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAggregateResourceComplianceTimelineWithOptions(request, runtime);
  }

  /**
   * Queries the configuration history of a specific resource in a specified account group. After you enable Cloud Config, the service records all configuration and relationship changes for your resources and organizes them into a configuration history. This history is saved for 10 years by default.
   * 
   * @remarks
   * Cloud Config provides a configuration history for each resource within the monitoring scope:
   * - For resources that already exist when you enable Cloud Config, the configuration history begins when the service is enabled.
   * - For resources that are created after you enable Cloud Config, the configuration history begins when the resources are created. Cloud Config records resource configuration changes every 10 minutes. When the configuration of a resource changes, a node appears in the configuration history. This node contains the resource configuration details, change details, and the related management event.
   * This topic provides an example of how to query the configuration history of an OSS bucket named `new-bucket`. The bucket is in the `cn-hangzhou` region, belongs to the member account `100931896542****`, and is part of the account group `ca-5885626622af0008****`. The returned result indicates that a configuration change for the resource was recorded at the UNIX timestamp `1624961112000` (UTC+8: 2021-06-29 18:05:12).
   * 
   * @param request - GetAggregateResourceConfigurationTimelineRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAggregateResourceConfigurationTimelineResponse
   */
  async getAggregateResourceConfigurationTimelineWithOptions(request: $_model.GetAggregateResourceConfigurationTimelineRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAggregateResourceConfigurationTimelineResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAggregateResourceConfigurationTimeline",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAggregateResourceConfigurationTimelineResponse>(await this.callApi(params, req, runtime), new $_model.GetAggregateResourceConfigurationTimelineResponse({}));
  }

  /**
   * Queries the configuration history of a specific resource in a specified account group. After you enable Cloud Config, the service records all configuration and relationship changes for your resources and organizes them into a configuration history. This history is saved for 10 years by default.
   * 
   * @remarks
   * Cloud Config provides a configuration history for each resource within the monitoring scope:
   * - For resources that already exist when you enable Cloud Config, the configuration history begins when the service is enabled.
   * - For resources that are created after you enable Cloud Config, the configuration history begins when the resources are created. Cloud Config records resource configuration changes every 10 minutes. When the configuration of a resource changes, a node appears in the configuration history. This node contains the resource configuration details, change details, and the related management event.
   * This topic provides an example of how to query the configuration history of an OSS bucket named `new-bucket`. The bucket is in the `cn-hangzhou` region, belongs to the member account `100931896542****`, and is part of the account group `ca-5885626622af0008****`. The returned result indicates that a configuration change for the resource was recorded at the UNIX timestamp `1624961112000` (UTC+8: 2021-06-29 18:05:12).
   * 
   * @param request - GetAggregateResourceConfigurationTimelineRequest
   * @returns GetAggregateResourceConfigurationTimelineResponse
   */
  async getAggregateResourceConfigurationTimeline(request: $_model.GetAggregateResourceConfigurationTimelineRequest): Promise<$_model.GetAggregateResourceConfigurationTimelineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAggregateResourceConfigurationTimelineWithOptions(request, runtime);
  }

  /**
   * 从地域维度查询指定账号组内资源的统计结果
   * 
   * @param request - GetAggregateResourceCountsGroupByRegionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAggregateResourceCountsGroupByRegionResponse
   */
  async getAggregateResourceCountsGroupByRegionWithOptions(request: $_model.GetAggregateResourceCountsGroupByRegionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAggregateResourceCountsGroupByRegionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aggregatorId)) {
      query["AggregatorId"] = request.aggregatorId;
    }

    if (!$dara.isNull(request.folderId)) {
      query["FolderId"] = request.folderId;
    }

    if (!$dara.isNull(request.resourceAccountId)) {
      query["ResourceAccountId"] = request.resourceAccountId;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAggregateResourceCountsGroupByRegion",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAggregateResourceCountsGroupByRegionResponse>(await this.callApi(params, req, runtime), new $_model.GetAggregateResourceCountsGroupByRegionResponse({}));
  }

  /**
   * 从地域维度查询指定账号组内资源的统计结果
   * 
   * @param request - GetAggregateResourceCountsGroupByRegionRequest
   * @returns GetAggregateResourceCountsGroupByRegionResponse
   */
  async getAggregateResourceCountsGroupByRegion(request: $_model.GetAggregateResourceCountsGroupByRegionRequest): Promise<$_model.GetAggregateResourceCountsGroupByRegionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAggregateResourceCountsGroupByRegionWithOptions(request, runtime);
  }

  /**
   * 从资源类型维度查询指定账号组内资源的统计结果
   * 
   * @param request - GetAggregateResourceCountsGroupByResourceTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAggregateResourceCountsGroupByResourceTypeResponse
   */
  async getAggregateResourceCountsGroupByResourceTypeWithOptions(request: $_model.GetAggregateResourceCountsGroupByResourceTypeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAggregateResourceCountsGroupByResourceTypeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aggregatorId)) {
      query["AggregatorId"] = request.aggregatorId;
    }

    if (!$dara.isNull(request.folderId)) {
      query["FolderId"] = request.folderId;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    if (!$dara.isNull(request.resourceAccountId)) {
      query["ResourceAccountId"] = request.resourceAccountId;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAggregateResourceCountsGroupByResourceType",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAggregateResourceCountsGroupByResourceTypeResponse>(await this.callApi(params, req, runtime), new $_model.GetAggregateResourceCountsGroupByResourceTypeResponse({}));
  }

  /**
   * 从资源类型维度查询指定账号组内资源的统计结果
   * 
   * @param request - GetAggregateResourceCountsGroupByResourceTypeRequest
   * @returns GetAggregateResourceCountsGroupByResourceTypeResponse
   */
  async getAggregateResourceCountsGroupByResourceType(request: $_model.GetAggregateResourceCountsGroupByResourceTypeRequest): Promise<$_model.GetAggregateResourceCountsGroupByResourceTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAggregateResourceCountsGroupByResourceTypeWithOptions(request, runtime);
  }

  /**
   * 查询账号组内全局资源下载清单信息。
   * 
   * @param request - GetAggregateResourceInventoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAggregateResourceInventoryResponse
   */
  async getAggregateResourceInventoryWithOptions(request: $_model.GetAggregateResourceInventoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAggregateResourceInventoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aggregatorId)) {
      query["AggregatorId"] = request.aggregatorId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAggregateResourceInventory",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAggregateResourceInventoryResponse>(await this.callApi(params, req, runtime), new $_model.GetAggregateResourceInventoryResponse({}));
  }

  /**
   * 查询账号组内全局资源下载清单信息。
   * 
   * @param request - GetAggregateResourceInventoryRequest
   * @returns GetAggregateResourceInventoryResponse
   */
  async getAggregateResourceInventory(request: $_model.GetAggregateResourceInventoryRequest): Promise<$_model.GetAggregateResourceInventoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAggregateResourceInventoryWithOptions(request, runtime);
  }

  /**
   * Queries the name, creation time, members, and type of an account group.
   * 
   * @remarks
   * This topic provides an example of how to query the details of the account group `ca-88ea626622af0055****`. The response shows that the account group name is `Test_Group`, the description is `Test Group`, the type is `CUSTOM` (custom account group), and the status is `1` (created).
   * 
   * @param tmpReq - GetAggregatorRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAggregatorResponse
   */
  async getAggregatorWithOptions(tmpReq: $_model.GetAggregatorRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAggregatorResponse> {
    tmpReq.validate();
    let request = new $_model.GetAggregatorShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tag)) {
      request.tagShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tag, "Tag", "json");
    }

    let query = { };
    if (!$dara.isNull(request.aggregatorId)) {
      query["AggregatorId"] = request.aggregatorId;
    }

    if (!$dara.isNull(request.tagShrink)) {
      query["Tag"] = request.tagShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAggregator",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAggregatorResponse>(await this.callApi(params, req, runtime), new $_model.GetAggregatorResponse({}));
  }

  /**
   * Queries the name, creation time, members, and type of an account group.
   * 
   * @remarks
   * This topic provides an example of how to query the details of the account group `ca-88ea626622af0055****`. The response shows that the account group name is `Test_Group`, the description is `Test Group`, the type is `CUSTOM` (custom account group), and the status is `1` (created).
   * 
   * @param request - GetAggregatorRequest
   * @returns GetAggregatorResponse
   */
  async getAggregator(request: $_model.GetAggregatorRequest): Promise<$_model.GetAggregatorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAggregatorWithOptions(request, runtime);
  }

  /**
   * Queries the details of a specific compliance package.
   * 
   * @remarks
   * This topic provides an example of how to query the details of the compliance package `cp-fdc8626622af00f9****`. The response indicates that the compliance package is named `MLPS 2.0 Level 3 Pre-check Compliance Package`, its status is `ACTIVE`, and the risk level of its rules is `1` (high risk).
   * 
   * @param tmpReq - GetCompliancePackRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCompliancePackResponse
   */
  async getCompliancePackWithOptions(tmpReq: $_model.GetCompliancePackRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetCompliancePackResponse> {
    tmpReq.validate();
    let request = new $_model.GetCompliancePackShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tag)) {
      request.tagShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tag, "Tag", "json");
    }

    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCompliancePack",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCompliancePackResponse>(await this.callApi(params, req, runtime), new $_model.GetCompliancePackResponse({}));
  }

  /**
   * Queries the details of a specific compliance package.
   * 
   * @remarks
   * This topic provides an example of how to query the details of the compliance package `cp-fdc8626622af00f9****`. The response indicates that the compliance package is named `MLPS 2.0 Level 3 Pre-check Compliance Package`, its status is `ACTIVE`, and the risk level of its rules is `1` (high risk).
   * 
   * @param request - GetCompliancePackRequest
   * @returns GetCompliancePackResponse
   */
  async getCompliancePack(request: $_model.GetCompliancePackRequest): Promise<$_model.GetCompliancePackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCompliancePackWithOptions(request, runtime);
  }

  /**
   * 获取合规包的评估报告
   * 
   * @param request - GetCompliancePackReportRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCompliancePackReportResponse
   */
  async getCompliancePackReportWithOptions(request: $_model.GetCompliancePackReportRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetCompliancePackReportResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCompliancePackReport",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCompliancePackReportResponse>(await this.callApi(params, req, runtime), new $_model.GetCompliancePackReportResponse({}));
  }

  /**
   * 获取合规包的评估报告
   * 
   * @param request - GetCompliancePackReportRequest
   * @returns GetCompliancePackReportResponse
   */
  async getCompliancePackReport(request: $_model.GetCompliancePackReportRequest): Promise<$_model.GetCompliancePackReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCompliancePackReportWithOptions(request, runtime);
  }

  /**
   * Queries the compliance summary for the current account.
   * 
   * @remarks
   * This topic provides an example of how to query the compliance summary by resource and rule for an account group.
   * 
   * @param request - GetComplianceSummaryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetComplianceSummaryResponse
   */
  async getComplianceSummaryWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.GetComplianceSummaryResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "GetComplianceSummary",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetComplianceSummaryResponse>(await this.callApi(params, req, runtime), new $_model.GetComplianceSummaryResponse({}));
  }

  /**
   * Queries the compliance summary for the current account.
   * 
   * @remarks
   * This topic provides an example of how to query the compliance summary by resource and rule for an account group.
   * @returns GetComplianceSummaryResponse
   */
  async getComplianceSummary(): Promise<$_model.GetComplianceSummaryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getComplianceSummaryWithOptions(runtime);
  }

  /**
   * Queries the details of a specified delivery channel.
   * 
   * @param request - GetConfigDeliveryChannelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetConfigDeliveryChannelResponse
   */
  async getConfigDeliveryChannelWithOptions(request: $_model.GetConfigDeliveryChannelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetConfigDeliveryChannelResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deliveryChannelId)) {
      query["DeliveryChannelId"] = request.deliveryChannelId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetConfigDeliveryChannel",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetConfigDeliveryChannelResponse>(await this.callApi(params, req, runtime), new $_model.GetConfigDeliveryChannelResponse({}));
  }

  /**
   * Queries the details of a specified delivery channel.
   * 
   * @param request - GetConfigDeliveryChannelRequest
   * @returns GetConfigDeliveryChannelResponse
   */
  async getConfigDeliveryChannel(request: $_model.GetConfigDeliveryChannelRequest): Promise<$_model.GetConfigDeliveryChannelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getConfigDeliveryChannelWithOptions(request, runtime);
  }

  /**
   * Queries the details of a specified rule.
   * 
   * @remarks
   * This topic provides an example of how to query the details of the rule `cr-7f7d626622af0041****`.
   * 
   * @param tmpReq - GetConfigRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetConfigRuleResponse
   */
  async getConfigRuleWithOptions(tmpReq: $_model.GetConfigRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetConfigRuleResponse> {
    tmpReq.validate();
    let request = new $_model.GetConfigRuleShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tag)) {
      request.tagShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tag, "Tag", "json");
    }

    let query = { };
    if (!$dara.isNull(request.configRuleId)) {
      query["ConfigRuleId"] = request.configRuleId;
    }

    if (!$dara.isNull(request.tagShrink)) {
      query["Tag"] = request.tagShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetConfigRule",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetConfigRuleResponse>(await this.callApi(params, req, runtime), new $_model.GetConfigRuleResponse({}));
  }

  /**
   * Queries the details of a specified rule.
   * 
   * @remarks
   * This topic provides an example of how to query the details of the rule `cr-7f7d626622af0041****`.
   * 
   * @param request - GetConfigRuleRequest
   * @returns GetConfigRuleResponse
   */
  async getConfigRule(request: $_model.GetConfigRuleRequest): Promise<$_model.GetConfigRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getConfigRuleWithOptions(request, runtime);
  }

  /**
   * Queries the compliance statistics for rules in a specified compliance package.
   * 
   * @remarks
   * This example shows how to query the compliance results for rules in the compliance package `cp-541e626622af0087****`. The response shows that the total number of rules is 1 and the number of non-compliant rules is 0.
   * 
   * @param request - GetConfigRuleComplianceByPackRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetConfigRuleComplianceByPackResponse
   */
  async getConfigRuleComplianceByPackWithOptions(request: $_model.GetConfigRuleComplianceByPackRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetConfigRuleComplianceByPackResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetConfigRuleComplianceByPack",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetConfigRuleComplianceByPackResponse>(await this.callApi(params, req, runtime), new $_model.GetConfigRuleComplianceByPackResponse({}));
  }

  /**
   * Queries the compliance statistics for rules in a specified compliance package.
   * 
   * @remarks
   * This example shows how to query the compliance results for rules in the compliance package `cp-541e626622af0087****`. The response shows that the total number of rules is 1 and the number of non-compliant rules is 0.
   * 
   * @param request - GetConfigRuleComplianceByPackRequest
   * @returns GetConfigRuleComplianceByPackResponse
   */
  async getConfigRuleComplianceByPack(request: $_model.GetConfigRuleComplianceByPackRequest): Promise<$_model.GetConfigRuleComplianceByPackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getConfigRuleComplianceByPackWithOptions(request, runtime);
  }

  /**
   * Queries the compliance summary based on the risk level of a rule.
   * 
   * @remarks
   * This topic provides an example of how to query the summary of compliance evaluation results by rule risk level. The return result shows four rules that are specified with the high risk level. One of them detects non-compliant resources, and the resources evaluated by the remaining three are all compliant.
   * 
   * @param request - GetConfigRuleSummaryByRiskLevelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetConfigRuleSummaryByRiskLevelResponse
   */
  async getConfigRuleSummaryByRiskLevelWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.GetConfigRuleSummaryByRiskLevelResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "GetConfigRuleSummaryByRiskLevel",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetConfigRuleSummaryByRiskLevelResponse>(await this.callApi(params, req, runtime), new $_model.GetConfigRuleSummaryByRiskLevelResponse({}));
  }

  /**
   * Queries the compliance summary based on the risk level of a rule.
   * 
   * @remarks
   * This topic provides an example of how to query the summary of compliance evaluation results by rule risk level. The return result shows four rules that are specified with the high risk level. One of them detects non-compliant resources, and the resources evaluated by the remaining three are all compliant.
   * @returns GetConfigRuleSummaryByRiskLevelResponse
   */
  async getConfigRuleSummaryByRiskLevel(): Promise<$_model.GetConfigRuleSummaryByRiskLevelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getConfigRuleSummaryByRiskLevelWithOptions(runtime);
  }

  /**
   * 下载Excel格式的规则合规评估报告到本地，便于您云下分配任务并跟进不合规资源配置的修改
   * 
   * @param request - GetConfigRulesReportRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetConfigRulesReportResponse
   */
  async getConfigRulesReportWithOptions(request: $_model.GetConfigRulesReportRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetConfigRulesReportResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.reportId)) {
      query["ReportId"] = request.reportId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetConfigRulesReport",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetConfigRulesReportResponse>(await this.callApi(params, req, runtime), new $_model.GetConfigRulesReportResponse({}));
  }

  /**
   * 下载Excel格式的规则合规评估报告到本地，便于您云下分配任务并跟进不合规资源配置的修改
   * 
   * @param request - GetConfigRulesReportRequest
   * @returns GetConfigRulesReportResponse
   */
  async getConfigRulesReport(request: $_model.GetConfigRulesReportRequest): Promise<$_model.GetConfigRulesReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getConfigRulesReportWithOptions(request, runtime);
  }

  /**
   * Queries the status of the Cloud Config service and the resource monitoring scope for the current account.
   * 
   * @remarks
   * This topic provides an example of how to query the status of the Cloud Config service and the resource monitoring scope for the current account.
   * 
   * @param request - GetConfigurationRecorderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetConfigurationRecorderResponse
   */
  async getConfigurationRecorderWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.GetConfigurationRecorderResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "GetConfigurationRecorder",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetConfigurationRecorderResponse>(await this.callApi(params, req, runtime), new $_model.GetConfigurationRecorderResponse({}));
  }

  /**
   * Queries the status of the Cloud Config service and the resource monitoring scope for the current account.
   * 
   * @remarks
   * This topic provides an example of how to query the status of the Cloud Config service and the resource monitoring scope for the current account.
   * @returns GetConfigurationRecorderResponse
   */
  async getConfigurationRecorder(): Promise<$_model.GetConfigurationRecorderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getConfigurationRecorderWithOptions(runtime);
  }

  /**
   * Queries the details of a specific resource.
   * 
   * @remarks
   * This topic provides an example of how to query the details of the ECS instance `i-bp12g4xbl4i0brkn****` in the China (Hangzhou) region.
   * 
   * @param request - GetDiscoveredResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDiscoveredResourceResponse
   */
  async getDiscoveredResourceWithOptions(request: $_model.GetDiscoveredResourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDiscoveredResourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.complianceOption)) {
      query["ComplianceOption"] = request.complianceOption;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
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
      action: "GetDiscoveredResource",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDiscoveredResourceResponse>(await this.callApi(params, req, runtime), new $_model.GetDiscoveredResourceResponse({}));
  }

  /**
   * Queries the details of a specific resource.
   * 
   * @remarks
   * This topic provides an example of how to query the details of the ECS instance `i-bp12g4xbl4i0brkn****` in the China (Hangzhou) region.
   * 
   * @param request - GetDiscoveredResourceRequest
   * @returns GetDiscoveredResourceResponse
   */
  async getDiscoveredResource(request: $_model.GetDiscoveredResourceRequest): Promise<$_model.GetDiscoveredResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDiscoveredResourceWithOptions(request, runtime);
  }

  /**
   * 从地域维度查询资源的统计结果
   * 
   * @param request - GetDiscoveredResourceCountsGroupByRegionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDiscoveredResourceCountsGroupByRegionResponse
   */
  async getDiscoveredResourceCountsGroupByRegionWithOptions(request: $_model.GetDiscoveredResourceCountsGroupByRegionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDiscoveredResourceCountsGroupByRegionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDiscoveredResourceCountsGroupByRegion",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDiscoveredResourceCountsGroupByRegionResponse>(await this.callApi(params, req, runtime), new $_model.GetDiscoveredResourceCountsGroupByRegionResponse({}));
  }

  /**
   * 从地域维度查询资源的统计结果
   * 
   * @param request - GetDiscoveredResourceCountsGroupByRegionRequest
   * @returns GetDiscoveredResourceCountsGroupByRegionResponse
   */
  async getDiscoveredResourceCountsGroupByRegion(request: $_model.GetDiscoveredResourceCountsGroupByRegionRequest): Promise<$_model.GetDiscoveredResourceCountsGroupByRegionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDiscoveredResourceCountsGroupByRegionWithOptions(request, runtime);
  }

  /**
   * 从资源类型维度查询资源的统计结果
   * 
   * @param request - GetDiscoveredResourceCountsGroupByResourceTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDiscoveredResourceCountsGroupByResourceTypeResponse
   */
  async getDiscoveredResourceCountsGroupByResourceTypeWithOptions(request: $_model.GetDiscoveredResourceCountsGroupByResourceTypeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDiscoveredResourceCountsGroupByResourceTypeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDiscoveredResourceCountsGroupByResourceType",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDiscoveredResourceCountsGroupByResourceTypeResponse>(await this.callApi(params, req, runtime), new $_model.GetDiscoveredResourceCountsGroupByResourceTypeResponse({}));
  }

  /**
   * 从资源类型维度查询资源的统计结果
   * 
   * @param request - GetDiscoveredResourceCountsGroupByResourceTypeRequest
   * @returns GetDiscoveredResourceCountsGroupByResourceTypeResponse
   */
  async getDiscoveredResourceCountsGroupByResourceType(request: $_model.GetDiscoveredResourceCountsGroupByResourceTypeRequest): Promise<$_model.GetDiscoveredResourceCountsGroupByResourceTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDiscoveredResourceCountsGroupByResourceTypeWithOptions(request, runtime);
  }

  /**
   * 查询用户集成云产品的授权状态
   * 
   * @param request - GetIntegratedServiceStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetIntegratedServiceStatusResponse
   */
  async getIntegratedServiceStatusWithOptions(request: $_model.GetIntegratedServiceStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetIntegratedServiceStatusResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.serviceCode)) {
      body["ServiceCode"] = request.serviceCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetIntegratedServiceStatus",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetIntegratedServiceStatusResponse>(await this.callApi(params, req, runtime), new $_model.GetIntegratedServiceStatusResponse({}));
  }

  /**
   * 查询用户集成云产品的授权状态
   * 
   * @param request - GetIntegratedServiceStatusRequest
   * @returns GetIntegratedServiceStatusResponse
   */
  async getIntegratedServiceStatus(request: $_model.GetIntegratedServiceStatusRequest): Promise<$_model.GetIntegratedServiceStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getIntegratedServiceStatusWithOptions(request, runtime);
  }

  /**
   * Queries the details of a specified rule template.
   * 
   * @remarks
   * This topic provides an example of how to query the details of the rule template `cdn-domain-https-enabled`.
   * 
   * @param request - GetManagedRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetManagedRuleResponse
   */
  async getManagedRuleWithOptions(request: $_model.GetManagedRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetManagedRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.identifier)) {
      query["Identifier"] = request.identifier;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetManagedRule",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetManagedRuleResponse>(await this.callApi(params, req, runtime), new $_model.GetManagedRuleResponse({}));
  }

  /**
   * Queries the details of a specified rule template.
   * 
   * @remarks
   * This topic provides an example of how to query the details of the rule template `cdn-domain-https-enabled`.
   * 
   * @param request - GetManagedRuleRequest
   * @returns GetManagedRuleResponse
   */
  async getManagedRule(request: $_model.GetManagedRuleRequest): Promise<$_model.GetManagedRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getManagedRuleWithOptions(request, runtime);
  }

  /**
   * Queries the details of an automatic remediation template.
   * 
   * @remarks
   * This topic describes how to query the details of the `ACS-ALB-BulkyEnableDeletionProtection` automatic remediation template.
   * 
   * @param request - GetRemediationTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRemediationTemplateResponse
   */
  async getRemediationTemplateWithOptions(request: $_model.GetRemediationTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetRemediationTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.templateIdentifier)) {
      query["TemplateIdentifier"] = request.templateIdentifier;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRemediationTemplate",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRemediationTemplateResponse>(await this.callApi(params, req, runtime), new $_model.GetRemediationTemplateResponse({}));
  }

  /**
   * Queries the details of an automatic remediation template.
   * 
   * @remarks
   * This topic describes how to query the details of the `ACS-ALB-BulkyEnableDeletionProtection` automatic remediation template.
   * 
   * @param request - GetRemediationTemplateRequest
   * @returns GetRemediationTemplateResponse
   */
  async getRemediationTemplate(request: $_model.GetRemediationTemplateRequest): Promise<$_model.GetRemediationTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRemediationTemplateWithOptions(request, runtime);
  }

  /**
   * Retrieves a report generated from a report template.
   * 
   * @param request - GetReportFromTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetReportFromTemplateResponse
   */
  async getReportFromTemplateWithOptions(request: $_model.GetReportFromTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetReportFromTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.reportTemplateId)) {
      query["ReportTemplateId"] = request.reportTemplateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetReportFromTemplate",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetReportFromTemplateResponse>(await this.callApi(params, req, runtime), new $_model.GetReportFromTemplateResponse({}));
  }

  /**
   * Retrieves a report generated from a report template.
   * 
   * @param request - GetReportFromTemplateRequest
   * @returns GetReportFromTemplateResponse
   */
  async getReportFromTemplate(request: $_model.GetReportFromTemplateRequest): Promise<$_model.GetReportFromTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getReportFromTemplateWithOptions(request, runtime);
  }

  /**
   * Retrieve details of a compliance report template.
   * 
   * @param request - GetReportTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetReportTemplateResponse
   */
  async getReportTemplateWithOptions(request: $_model.GetReportTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetReportTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.reportTemplateId)) {
      query["ReportTemplateId"] = request.reportTemplateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetReportTemplate",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetReportTemplateResponse>(await this.callApi(params, req, runtime), new $_model.GetReportTemplateResponse({}));
  }

  /**
   * Retrieve details of a compliance report template.
   * 
   * @param request - GetReportTemplateRequest
   * @returns GetReportTemplateResponse
   */
  async getReportTemplate(request: $_model.GetReportTemplateRequest): Promise<$_model.GetReportTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getReportTemplateWithOptions(request, runtime);
  }

  /**
   * 从规则的合规评估结果维度查询合规概要
   * 
   * @param request - GetResourceComplianceByConfigRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetResourceComplianceByConfigRuleResponse
   */
  async getResourceComplianceByConfigRuleWithOptions(request: $_model.GetResourceComplianceByConfigRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetResourceComplianceByConfigRuleResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetResourceComplianceByConfigRule",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetResourceComplianceByConfigRuleResponse>(await this.callApi(params, req, runtime), new $_model.GetResourceComplianceByConfigRuleResponse({}));
  }

  /**
   * 从规则的合规评估结果维度查询合规概要
   * 
   * @param request - GetResourceComplianceByConfigRuleRequest
   * @returns GetResourceComplianceByConfigRuleResponse
   */
  async getResourceComplianceByConfigRule(request: $_model.GetResourceComplianceByConfigRuleRequest): Promise<$_model.GetResourceComplianceByConfigRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getResourceComplianceByConfigRuleWithOptions(request, runtime);
  }

  /**
   * Queries the compliance results for resources in a compliance package.
   * 
   * @remarks
   * This topic provides an example of how to query the compliance results for resources in the compliance package `cp-541e626622af0087****`. The response shows that 7 of the 10 resources are non-compliant.
   * 
   * @param request - GetResourceComplianceByPackRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetResourceComplianceByPackResponse
   */
  async getResourceComplianceByPackWithOptions(request: $_model.GetResourceComplianceByPackRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetResourceComplianceByPackResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetResourceComplianceByPack",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetResourceComplianceByPackResponse>(await this.callApi(params, req, runtime), new $_model.GetResourceComplianceByPackResponse({}));
  }

  /**
   * Queries the compliance results for resources in a compliance package.
   * 
   * @remarks
   * This topic provides an example of how to query the compliance results for resources in the compliance package `cp-541e626622af0087****`. The response shows that 7 of the 10 resources are non-compliant.
   * 
   * @param request - GetResourceComplianceByPackRequest
   * @returns GetResourceComplianceByPackResponse
   */
  async getResourceComplianceByPack(request: $_model.GetResourceComplianceByPackRequest): Promise<$_model.GetResourceComplianceByPackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getResourceComplianceByPackWithOptions(request, runtime);
  }

  /**
   * 查询合规情况按照地域分组统计
   * 
   * @param request - GetResourceComplianceGroupByRegionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetResourceComplianceGroupByRegionResponse
   */
  async getResourceComplianceGroupByRegionWithOptions(request: $_model.GetResourceComplianceGroupByRegionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetResourceComplianceGroupByRegionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.configRuleIds)) {
      query["ConfigRuleIds"] = request.configRuleIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetResourceComplianceGroupByRegion",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetResourceComplianceGroupByRegionResponse>(await this.callApi(params, req, runtime), new $_model.GetResourceComplianceGroupByRegionResponse({}));
  }

  /**
   * 查询合规情况按照地域分组统计
   * 
   * @param request - GetResourceComplianceGroupByRegionRequest
   * @returns GetResourceComplianceGroupByRegionResponse
   */
  async getResourceComplianceGroupByRegion(request: $_model.GetResourceComplianceGroupByRegionRequest): Promise<$_model.GetResourceComplianceGroupByRegionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getResourceComplianceGroupByRegionWithOptions(request, runtime);
  }

  /**
   * 查询规则对资源的评估结果，评估结果按资源类型进行分组展示
   * 
   * @param request - GetResourceComplianceGroupByResourceTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetResourceComplianceGroupByResourceTypeResponse
   */
  async getResourceComplianceGroupByResourceTypeWithOptions(request: $_model.GetResourceComplianceGroupByResourceTypeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetResourceComplianceGroupByResourceTypeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.configRuleIds)) {
      query["ConfigRuleIds"] = request.configRuleIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetResourceComplianceGroupByResourceType",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetResourceComplianceGroupByResourceTypeResponse>(await this.callApi(params, req, runtime), new $_model.GetResourceComplianceGroupByResourceTypeResponse({}));
  }

  /**
   * 查询规则对资源的评估结果，评估结果按资源类型进行分组展示
   * 
   * @param request - GetResourceComplianceGroupByResourceTypeRequest
   * @returns GetResourceComplianceGroupByResourceTypeResponse
   */
  async getResourceComplianceGroupByResourceType(request: $_model.GetResourceComplianceGroupByResourceTypeRequest): Promise<$_model.GetResourceComplianceGroupByResourceTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getResourceComplianceGroupByResourceTypeWithOptions(request, runtime);
  }

  /**
   * Queries the compliance evaluation history of a specified resource. The history is a set of compliance evaluation records that contain the timestamp and details of each evaluation.
   * 
   * @remarks
   * In Cloud Config, each resource has its own compliance evaluation history. A compliance evaluation record is generated when a rule is triggered to evaluate a resource. The collection of these records forms the compliance evaluation history of the resource. Rules can be triggered by configuration changes, periodic execution, or manual execution.
   * This topic provides an example of how to query the compliance evaluation history of the resource `new-bucket`, which is an Object Storage Service (OSS) bucket in the `cn-hangzhou` region. The returned result shows that the compliance evaluation history of the resource includes records with the timestamps `1625200295276` (UTC+8: 2021-07-02 12:31:35) and `1625200228510` (UTC+8: 2021-07-02 12:30:28).
   * 
   * @param request - GetResourceComplianceTimelineRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetResourceComplianceTimelineResponse
   */
  async getResourceComplianceTimelineWithOptions(request: $_model.GetResourceComplianceTimelineRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetResourceComplianceTimelineResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetResourceComplianceTimeline",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetResourceComplianceTimelineResponse>(await this.callApi(params, req, runtime), new $_model.GetResourceComplianceTimelineResponse({}));
  }

  /**
   * Queries the compliance evaluation history of a specified resource. The history is a set of compliance evaluation records that contain the timestamp and details of each evaluation.
   * 
   * @remarks
   * In Cloud Config, each resource has its own compliance evaluation history. A compliance evaluation record is generated when a rule is triggered to evaluate a resource. The collection of these records forms the compliance evaluation history of the resource. Rules can be triggered by configuration changes, periodic execution, or manual execution.
   * This topic provides an example of how to query the compliance evaluation history of the resource `new-bucket`, which is an Object Storage Service (OSS) bucket in the `cn-hangzhou` region. The returned result shows that the compliance evaluation history of the resource includes records with the timestamps `1625200295276` (UTC+8: 2021-07-02 12:31:35) and `1625200228510` (UTC+8: 2021-07-02 12:30:28).
   * 
   * @param request - GetResourceComplianceTimelineRequest
   * @returns GetResourceComplianceTimelineResponse
   */
  async getResourceComplianceTimeline(request: $_model.GetResourceComplianceTimelineRequest): Promise<$_model.GetResourceComplianceTimelineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getResourceComplianceTimelineWithOptions(request, runtime);
  }

  /**
   * This operation obtains configuration samples for a specified resource type.
   * 
   * @param request - GetResourceConfigurationSampleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetResourceConfigurationSampleResponse
   */
  async getResourceConfigurationSampleWithOptions(request: $_model.GetResourceConfigurationSampleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetResourceConfigurationSampleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.mockOnly)) {
      query["MockOnly"] = request.mockOnly;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetResourceConfigurationSample",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetResourceConfigurationSampleResponse>(await this.callApi(params, req, runtime), new $_model.GetResourceConfigurationSampleResponse({}));
  }

  /**
   * This operation obtains configuration samples for a specified resource type.
   * 
   * @param request - GetResourceConfigurationSampleRequest
   * @returns GetResourceConfigurationSampleResponse
   */
  async getResourceConfigurationSample(request: $_model.GetResourceConfigurationSampleRequest): Promise<$_model.GetResourceConfigurationSampleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getResourceConfigurationSampleWithOptions(request, runtime);
  }

  /**
   * Queries the configuration history of a specified resource. Cloud Config records every configuration and relationship change for a resource in a configuration history. Recording starts after you enable the Cloud Config service. By default, the history is retained for 10 years.
   * 
   * @remarks
   * Cloud Config provides a configuration history for each resource that it monitors. The details are as follows:
   * - For existing resources, the configuration history starts when you enable the Cloud Config service.
   * - For new resources created after you enable the service, the configuration history starts when the resource is created. Cloud Config records configuration changes every 10 minutes. When a configuration changes, a new node appears in the history. This node contains the resource configuration details, change details, and the associated management event.
   * This topic provides an example of how to query the configuration history for a resource named `new-bucket`. The resource is a bucket in the `cn-hangzhou` region. The response shows that the creation time of the resource is `1624961112000` (18:05:12 on June 29, 2021, UTC+8).
   * 
   * @param request - GetResourceConfigurationTimelineRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetResourceConfigurationTimelineResponse
   */
  async getResourceConfigurationTimelineWithOptions(request: $_model.GetResourceConfigurationTimelineRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetResourceConfigurationTimelineResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetResourceConfigurationTimeline",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetResourceConfigurationTimelineResponse>(await this.callApi(params, req, runtime), new $_model.GetResourceConfigurationTimelineResponse({}));
  }

  /**
   * Queries the configuration history of a specified resource. Cloud Config records every configuration and relationship change for a resource in a configuration history. Recording starts after you enable the Cloud Config service. By default, the history is retained for 10 years.
   * 
   * @remarks
   * Cloud Config provides a configuration history for each resource that it monitors. The details are as follows:
   * - For existing resources, the configuration history starts when you enable the Cloud Config service.
   * - For new resources created after you enable the service, the configuration history starts when the resource is created. Cloud Config records configuration changes every 10 minutes. When a configuration changes, a new node appears in the history. This node contains the resource configuration details, change details, and the associated management event.
   * This topic provides an example of how to query the configuration history for a resource named `new-bucket`. The resource is a bucket in the `cn-hangzhou` region. The response shows that the creation time of the resource is `1624961112000` (18:05:12 on June 29, 2021, UTC+8).
   * 
   * @param request - GetResourceConfigurationTimelineRequest
   * @returns GetResourceConfigurationTimelineResponse
   */
  async getResourceConfigurationTimeline(request: $_model.GetResourceConfigurationTimelineRequest): Promise<$_model.GetResourceConfigurationTimelineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getResourceConfigurationTimelineWithOptions(request, runtime);
  }

  /**
   * Queries information about the most recently generated global resource inventory for the current account.
   * 
   * @remarks
   * ### Prerequisites
   * You can call the [GenerateResourceInventory](https://help.aliyun.com/document_detail/2398354.html) operation to generate a global resource inventory. You can then call this operation to obtain the URL of the global resource inventory.
   * ### Usage notes
   * This topic provides an example of how to query the most recently generated global resource inventory for the current account.
   * 
   * @param request - GetResourceInventoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetResourceInventoryResponse
   */
  async getResourceInventoryWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.GetResourceInventoryResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "GetResourceInventory",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetResourceInventoryResponse>(await this.callApi(params, req, runtime), new $_model.GetResourceInventoryResponse({}));
  }

  /**
   * Queries information about the most recently generated global resource inventory for the current account.
   * 
   * @remarks
   * ### Prerequisites
   * You can call the [GenerateResourceInventory](https://help.aliyun.com/document_detail/2398354.html) operation to generate a global resource inventory. You can then call this operation to obtain the URL of the global resource inventory.
   * ### Usage notes
   * This topic provides an example of how to query the most recently generated global resource inventory for the current account.
   * @returns GetResourceInventoryResponse
   */
  async getResourceInventory(): Promise<$_model.GetResourceInventoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getResourceInventoryWithOptions(runtime);
  }

  /**
   * This operation retrieves the property descriptions for a specified resource type.
   * 
   * @param request - GetResourceTypePropertiesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetResourceTypePropertiesResponse
   */
  async getResourceTypePropertiesWithOptions(request: $_model.GetResourceTypePropertiesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetResourceTypePropertiesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetResourceTypeProperties",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetResourceTypePropertiesResponse>(await this.callApi(params, req, runtime), new $_model.GetResourceTypePropertiesResponse({}));
  }

  /**
   * This operation retrieves the property descriptions for a specified resource type.
   * 
   * @param request - GetResourceTypePropertiesRequest
   * @returns GetResourceTypePropertiesResponse
   */
  async getResourceTypeProperties(request: $_model.GetResourceTypePropertiesRequest): Promise<$_model.GetResourceTypePropertiesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getResourceTypePropertiesWithOptions(request, runtime);
  }

  /**
   * Queries the supported resource relations for a specified resource type.
   * 
   * @remarks
   * This topic provides an example of how to query the resource relations supported by the ACS::ECS::Instance resource type.
   * 
   * @param request - GetSupportedResourceRelationConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSupportedResourceRelationConfigResponse
   */
  async getSupportedResourceRelationConfigWithOptions(request: $_model.GetSupportedResourceRelationConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSupportedResourceRelationConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSupportedResourceRelationConfig",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSupportedResourceRelationConfigResponse>(await this.callApi(params, req, runtime), new $_model.GetSupportedResourceRelationConfigResponse({}));
  }

  /**
   * Queries the supported resource relations for a specified resource type.
   * 
   * @remarks
   * This topic provides an example of how to query the resource relations supported by the ACS::ECS::Instance resource type.
   * 
   * @param request - GetSupportedResourceRelationConfigRequest
   * @returns GetSupportedResourceRelationConfigResponse
   */
  async getSupportedResourceRelationConfig(request: $_model.GetSupportedResourceRelationConfigRequest): Promise<$_model.GetSupportedResourceRelationConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSupportedResourceRelationConfigWithOptions(request, runtime);
  }

  /**
   * 忽略评估结果增加截止时间
   * 
   * @param tmpReq - IgnoreAggregateEvaluationResultsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns IgnoreAggregateEvaluationResultsResponse
   */
  async ignoreAggregateEvaluationResultsWithOptions(tmpReq: $_model.IgnoreAggregateEvaluationResultsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.IgnoreAggregateEvaluationResultsResponse> {
    tmpReq.validate();
    let request = new $_model.IgnoreAggregateEvaluationResultsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.resources)) {
      request.resourcesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resources, "Resources", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.aggregatorId)) {
      body["AggregatorId"] = request.aggregatorId;
    }

    if (!$dara.isNull(request.configRuleId)) {
      body["ConfigRuleId"] = request.configRuleId;
    }

    if (!$dara.isNull(request.ignoreDate)) {
      body["IgnoreDate"] = request.ignoreDate;
    }

    if (!$dara.isNull(request.reason)) {
      body["Reason"] = request.reason;
    }

    if (!$dara.isNull(request.resourcesShrink)) {
      body["Resources"] = request.resourcesShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "IgnoreAggregateEvaluationResults",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.IgnoreAggregateEvaluationResultsResponse>(await this.callApi(params, req, runtime), new $_model.IgnoreAggregateEvaluationResultsResponse({}));
  }

  /**
   * 忽略评估结果增加截止时间
   * 
   * @param request - IgnoreAggregateEvaluationResultsRequest
   * @returns IgnoreAggregateEvaluationResultsResponse
   */
  async ignoreAggregateEvaluationResults(request: $_model.IgnoreAggregateEvaluationResultsRequest): Promise<$_model.IgnoreAggregateEvaluationResultsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.ignoreAggregateEvaluationResultsWithOptions(request, runtime);
  }

  /**
   * Ignores the evaluation results of a rule for specific resources. You can also set a time period to ignore the rule. When the ignore period expires, the system automatically resumes displaying the evaluation results of the rule for the resources.
   * 
   * @remarks
   * After a non-compliant resource is ignored, the rule still evaluates the resource. The evaluation result is Ignored.
   * This topic provides an example of how to ignore the evaluation results of the rule `cr-7e72626622af0051****` for a specified non-compliant resource in the Alibaba Cloud account `100931896542****`. The region ID of the resource is `cn-beijing`, the resource type is `ACS::SLB::LoadBalancer`, and the resource ID is `lb-hp3a3b4ztyfm2plgm****`.
   * 
   * @param tmpReq - IgnoreEvaluationResultsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns IgnoreEvaluationResultsResponse
   */
  async ignoreEvaluationResultsWithOptions(tmpReq: $_model.IgnoreEvaluationResultsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.IgnoreEvaluationResultsResponse> {
    tmpReq.validate();
    let request = new $_model.IgnoreEvaluationResultsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.resources)) {
      request.resourcesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resources, "Resources", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.configRuleId)) {
      body["ConfigRuleId"] = request.configRuleId;
    }

    if (!$dara.isNull(request.ignoreDate)) {
      body["IgnoreDate"] = request.ignoreDate;
    }

    if (!$dara.isNull(request.reason)) {
      body["Reason"] = request.reason;
    }

    if (!$dara.isNull(request.resourcesShrink)) {
      body["Resources"] = request.resourcesShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "IgnoreEvaluationResults",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.IgnoreEvaluationResultsResponse>(await this.callApi(params, req, runtime), new $_model.IgnoreEvaluationResultsResponse({}));
  }

  /**
   * Ignores the evaluation results of a rule for specific resources. You can also set a time period to ignore the rule. When the ignore period expires, the system automatically resumes displaying the evaluation results of the rule for the resources.
   * 
   * @remarks
   * After a non-compliant resource is ignored, the rule still evaluates the resource. The evaluation result is Ignored.
   * This topic provides an example of how to ignore the evaluation results of the rule `cr-7e72626622af0051****` for a specified non-compliant resource in the Alibaba Cloud account `100931896542****`. The region ID of the resource is `cn-beijing`, the resource type is `ACS::SLB::LoadBalancer`, and the resource ID is `lb-hp3a3b4ztyfm2plgm****`.
   * 
   * @param request - IgnoreEvaluationResultsRequest
   * @returns IgnoreEvaluationResultsResponse
   */
  async ignoreEvaluationResults(request: $_model.IgnoreEvaluationResultsRequest): Promise<$_model.IgnoreEvaluationResultsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.ignoreEvaluationResultsWithOptions(request, runtime);
  }

  /**
   * Queries the compliance packs in a specified account group.
   * 
   * @remarks
   * This topic provides an example of how to query the compliance packs in the account group `ca-f632626622af0079****`. The response shows that the account group contains the compliance pack `cp-fdc8626622af00f9****`.
   * 
   * @param tmpReq - ListAggregateCompliancePacksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAggregateCompliancePacksResponse
   */
  async listAggregateCompliancePacksWithOptions(tmpReq: $_model.ListAggregateCompliancePacksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAggregateCompliancePacksResponse> {
    tmpReq.validate();
    let request = new $_model.ListAggregateCompliancePacksShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tag)) {
      request.tagShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tag, "Tag", "json");
    }

    let query = { };
    if (!$dara.isNull(request.aggregatorId)) {
      query["AggregatorId"] = request.aggregatorId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.riskLevel)) {
      query["RiskLevel"] = request.riskLevel;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.tagShrink)) {
      query["Tag"] = request.tagShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAggregateCompliancePacks",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAggregateCompliancePacksResponse>(await this.callApi(params, req, runtime), new $_model.ListAggregateCompliancePacksResponse({}));
  }

  /**
   * Queries the compliance packs in a specified account group.
   * 
   * @remarks
   * This topic provides an example of how to query the compliance packs in the account group `ca-f632626622af0079****`. The response shows that the account group contains the compliance pack `cp-fdc8626622af00f9****`.
   * 
   * @param request - ListAggregateCompliancePacksRequest
   * @returns ListAggregateCompliancePacksResponse
   */
  async listAggregateCompliancePacks(request: $_model.ListAggregateCompliancePacksRequest): Promise<$_model.ListAggregateCompliancePacksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAggregateCompliancePacksWithOptions(request, runtime);
  }

  /**
   * 账号组查询投递渠道列表
   * 
   * @param request - ListAggregateConfigDeliveryChannelsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAggregateConfigDeliveryChannelsResponse
   */
  async listAggregateConfigDeliveryChannelsWithOptions(request: $_model.ListAggregateConfigDeliveryChannelsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAggregateConfigDeliveryChannelsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aggregatorId)) {
      query["AggregatorId"] = request.aggregatorId;
    }

    if (!$dara.isNull(request.deliveryChannelIds)) {
      query["DeliveryChannelIds"] = request.deliveryChannelIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAggregateConfigDeliveryChannels",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAggregateConfigDeliveryChannelsResponse>(await this.callApi(params, req, runtime), new $_model.ListAggregateConfigDeliveryChannelsResponse({}));
  }

  /**
   * 账号组查询投递渠道列表
   * 
   * @param request - ListAggregateConfigDeliveryChannelsRequest
   * @returns ListAggregateConfigDeliveryChannelsResponse
   */
  async listAggregateConfigDeliveryChannels(request: $_model.ListAggregateConfigDeliveryChannelsRequest): Promise<$_model.ListAggregateConfigDeliveryChannelsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAggregateConfigDeliveryChannelsWithOptions(request, runtime);
  }

  /**
   * Queries the evaluation results of a rule for resources in a specified account group.
   * 
   * @param request - ListAggregateConfigRuleEvaluationResultsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAggregateConfigRuleEvaluationResultsResponse
   */
  async listAggregateConfigRuleEvaluationResultsWithOptions(request: $_model.ListAggregateConfigRuleEvaluationResultsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAggregateConfigRuleEvaluationResultsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aggregatorId)) {
      query["AggregatorId"] = request.aggregatorId;
    }

    if (!$dara.isNull(request.compliancePackId)) {
      query["CompliancePackId"] = request.compliancePackId;
    }

    if (!$dara.isNull(request.complianceType)) {
      query["ComplianceType"] = request.complianceType;
    }

    if (!$dara.isNull(request.configRuleId)) {
      query["ConfigRuleId"] = request.configRuleId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regions)) {
      query["Regions"] = request.regions;
    }

    if (!$dara.isNull(request.resourceAccountId)) {
      query["ResourceAccountId"] = request.resourceAccountId;
    }

    if (!$dara.isNull(request.resourceGroupIds)) {
      query["ResourceGroupIds"] = request.resourceGroupIds;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.resourceTypes)) {
      query["ResourceTypes"] = request.resourceTypes;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAggregateConfigRuleEvaluationResults",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAggregateConfigRuleEvaluationResultsResponse>(await this.callApi(params, req, runtime), new $_model.ListAggregateConfigRuleEvaluationResultsResponse({}));
  }

  /**
   * Queries the evaluation results of a rule for resources in a specified account group.
   * 
   * @param request - ListAggregateConfigRuleEvaluationResultsRequest
   * @returns ListAggregateConfigRuleEvaluationResultsResponse
   */
  async listAggregateConfigRuleEvaluationResults(request: $_model.ListAggregateConfigRuleEvaluationResultsRequest): Promise<$_model.ListAggregateConfigRuleEvaluationResultsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAggregateConfigRuleEvaluationResultsWithOptions(request, runtime);
  }

  /**
   * 透出用户账号组维度的评估结果统计
   * 
   * @param request - ListAggregateConfigRuleEvaluationStatisticsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAggregateConfigRuleEvaluationStatisticsResponse
   */
  async listAggregateConfigRuleEvaluationStatisticsWithOptions(request: $_model.ListAggregateConfigRuleEvaluationStatisticsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAggregateConfigRuleEvaluationStatisticsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aggregatorId)) {
      query["AggregatorId"] = request.aggregatorId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAggregateConfigRuleEvaluationStatistics",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAggregateConfigRuleEvaluationStatisticsResponse>(await this.callApi(params, req, runtime), new $_model.ListAggregateConfigRuleEvaluationStatisticsResponse({}));
  }

  /**
   * 透出用户账号组维度的评估结果统计
   * 
   * @param request - ListAggregateConfigRuleEvaluationStatisticsRequest
   * @returns ListAggregateConfigRuleEvaluationStatisticsResponse
   */
  async listAggregateConfigRuleEvaluationStatistics(request: $_model.ListAggregateConfigRuleEvaluationStatisticsRequest): Promise<$_model.ListAggregateConfigRuleEvaluationStatisticsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAggregateConfigRuleEvaluationStatisticsWithOptions(request, runtime);
  }

  /**
   * Queries the rules in a specified account group.
   * 
   * @remarks
   * This topic provides an example of how to query the rules in the account group `ca-f632626622af0079****`. The response shows that the account group contains one rule. This rule evaluates two resources, and the compliance result is `COMPLIANT`.
   * 
   * @param tmpReq - ListAggregateConfigRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAggregateConfigRulesResponse
   */
  async listAggregateConfigRulesWithOptions(tmpReq: $_model.ListAggregateConfigRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAggregateConfigRulesResponse> {
    tmpReq.validate();
    let request = new $_model.ListAggregateConfigRulesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tag)) {
      request.tagShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tag, "Tag", "json");
    }

    let query = { };
    if (!$dara.isNull(request.aggregatorId)) {
      query["AggregatorId"] = request.aggregatorId;
    }

    if (!$dara.isNull(request.compliancePackId)) {
      query["CompliancePackId"] = request.compliancePackId;
    }

    if (!$dara.isNull(request.complianceType)) {
      query["ComplianceType"] = request.complianceType;
    }

    if (!$dara.isNull(request.configRuleName)) {
      query["ConfigRuleName"] = request.configRuleName;
    }

    if (!$dara.isNull(request.configRuleState)) {
      query["ConfigRuleState"] = request.configRuleState;
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

    if (!$dara.isNull(request.resourceTypes)) {
      query["ResourceTypes"] = request.resourceTypes;
    }

    if (!$dara.isNull(request.riskLevel)) {
      query["RiskLevel"] = request.riskLevel;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.tagShrink)) {
      query["Tag"] = request.tagShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAggregateConfigRules",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAggregateConfigRulesResponse>(await this.callApi(params, req, runtime), new $_model.ListAggregateConfigRulesResponse({}));
  }

  /**
   * Queries the rules in a specified account group.
   * 
   * @remarks
   * This topic provides an example of how to query the rules in the account group `ca-f632626622af0079****`. The response shows that the account group contains one rule. This rule evaluates two resources, and the compliance result is `COMPLIANT`.
   * 
   * @param request - ListAggregateConfigRulesRequest
   * @returns ListAggregateConfigRulesResponse
   */
  async listAggregateConfigRules(request: $_model.ListAggregateConfigRulesRequest): Promise<$_model.ListAggregateConfigRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAggregateConfigRulesWithOptions(request, runtime);
  }

  /**
   * Queries the resources in a specified account group.
   * 
   * @remarks
   * ### Limits
   * The resource checklist displays only some of your resources because Cloud Config supports only specific Alibaba Cloud services and resource types. For more information about the supported services and resource types, see [Supported resource types and resource relationships](https://help.aliyun.com/document_detail/127411.html).
   * ### Usage notes
   * This topic provides an example of how to query the resources of a member with the ID `100931896542****` in the account group `ca-c560626622af0005****`. The response indicates that there are eight resources in total.
   * 
   * @param request - ListAggregateDiscoveredResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAggregateDiscoveredResourcesResponse
   */
  async listAggregateDiscoveredResourcesWithOptions(request: $_model.ListAggregateDiscoveredResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAggregateDiscoveredResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aggregatorId)) {
      query["AggregatorId"] = request.aggregatorId;
    }

    if (!$dara.isNull(request.endUpdateTimestamp)) {
      query["EndUpdateTimestamp"] = request.endUpdateTimestamp;
    }

    if (!$dara.isNull(request.excludeResourceTypes)) {
      query["ExcludeResourceTypes"] = request.excludeResourceTypes;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regions)) {
      query["Regions"] = request.regions;
    }

    if (!$dara.isNull(request.resourceAccountId)) {
      query["ResourceAccountId"] = request.resourceAccountId;
    }

    if (!$dara.isNull(request.resourceDeleted)) {
      query["ResourceDeleted"] = request.resourceDeleted;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceName)) {
      query["ResourceName"] = request.resourceName;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.resourceTypes)) {
      query["ResourceTypes"] = request.resourceTypes;
    }

    if (!$dara.isNull(request.startUpdateTimestamp)) {
      query["StartUpdateTimestamp"] = request.startUpdateTimestamp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAggregateDiscoveredResources",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAggregateDiscoveredResourcesResponse>(await this.callApi(params, req, runtime), new $_model.ListAggregateDiscoveredResourcesResponse({}));
  }

  /**
   * Queries the resources in a specified account group.
   * 
   * @remarks
   * ### Limits
   * The resource checklist displays only some of your resources because Cloud Config supports only specific Alibaba Cloud services and resource types. For more information about the supported services and resource types, see [Supported resource types and resource relationships](https://help.aliyun.com/document_detail/127411.html).
   * ### Usage notes
   * This topic provides an example of how to query the resources of a member with the ID `100931896542****` in the account group `ca-c560626622af0005****`. The response indicates that there are eight resources in total.
   * 
   * @param request - ListAggregateDiscoveredResourcesRequest
   * @returns ListAggregateDiscoveredResourcesResponse
   */
  async listAggregateDiscoveredResources(request: $_model.ListAggregateDiscoveredResourcesRequest): Promise<$_model.ListAggregateDiscoveredResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAggregateDiscoveredResourcesWithOptions(request, runtime);
  }

  /**
   * This operation retrieves the list of recommended managed rules for an account group.
   * 
   * @remarks
   * For more information about the concepts, working principles, and integration process of dry run rules, see [Definition and working principles of dry run rules](https://help.aliyun.com/document_detail/470802.html).
   * Dry run rules and rule templates are based on the same underlying rule definitions. After you create a resource, a dry run rule continuously checks the resource for compliance.
   * 
   * @param request - ListAggregateRecommendManagedRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAggregateRecommendManagedRulesResponse
   */
  async listAggregateRecommendManagedRulesWithOptions(request: $_model.ListAggregateRecommendManagedRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAggregateRecommendManagedRulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aggregatorId)) {
      query["AggregatorId"] = request.aggregatorId;
    }

    if (!$dara.isNull(request.excludeRegionIdsScope)) {
      query["ExcludeRegionIdsScope"] = request.excludeRegionIdsScope;
    }

    if (!$dara.isNull(request.excludeResourceGroupIdsScope)) {
      query["ExcludeResourceGroupIdsScope"] = request.excludeResourceGroupIdsScope;
    }

    if (!$dara.isNull(request.excludeResourceIdsScope)) {
      query["ExcludeResourceIdsScope"] = request.excludeResourceIdsScope;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionIdsScope)) {
      query["RegionIdsScope"] = request.regionIdsScope;
    }

    if (!$dara.isNull(request.resourceGroupIdsScope)) {
      query["ResourceGroupIdsScope"] = request.resourceGroupIdsScope;
    }

    if (!$dara.isNull(request.resourceIdsScope)) {
      query["ResourceIdsScope"] = request.resourceIdsScope;
    }

    if (!$dara.isNull(request.selectedManagedRuleIdentifiers)) {
      query["SelectedManagedRuleIdentifiers"] = request.selectedManagedRuleIdentifiers;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAggregateRecommendManagedRules",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAggregateRecommendManagedRulesResponse>(await this.callApi(params, req, runtime), new $_model.ListAggregateRecommendManagedRulesResponse({}));
  }

  /**
   * This operation retrieves the list of recommended managed rules for an account group.
   * 
   * @remarks
   * For more information about the concepts, working principles, and integration process of dry run rules, see [Definition and working principles of dry run rules](https://help.aliyun.com/document_detail/470802.html).
   * Dry run rules and rule templates are based on the same underlying rule definitions. After you create a resource, a dry run rule continuously checks the resource for compliance.
   * 
   * @param request - ListAggregateRecommendManagedRulesRequest
   * @returns ListAggregateRecommendManagedRulesResponse
   */
  async listAggregateRecommendManagedRules(request: $_model.ListAggregateRecommendManagedRulesRequest): Promise<$_model.ListAggregateRecommendManagedRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAggregateRecommendManagedRulesWithOptions(request, runtime);
  }

  /**
   * 账号组规则修正执行历史
   * 
   * @param request - ListAggregateRemediationExecutionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAggregateRemediationExecutionsResponse
   */
  async listAggregateRemediationExecutionsWithOptions(request: $_model.ListAggregateRemediationExecutionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAggregateRemediationExecutionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aggregatorId)) {
      query["AggregatorId"] = request.aggregatorId;
    }

    if (!$dara.isNull(request.configRuleId)) {
      query["ConfigRuleId"] = request.configRuleId;
    }

    if (!$dara.isNull(request.executionStatus)) {
      query["ExecutionStatus"] = request.executionStatus;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.resourceAccountId)) {
      query["ResourceAccountId"] = request.resourceAccountId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAggregateRemediationExecutions",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAggregateRemediationExecutionsResponse>(await this.callApi(params, req, runtime), new $_model.ListAggregateRemediationExecutionsResponse({}));
  }

  /**
   * 账号组规则修正执行历史
   * 
   * @param request - ListAggregateRemediationExecutionsRequest
   * @returns ListAggregateRemediationExecutionsResponse
   */
  async listAggregateRemediationExecutions(request: $_model.ListAggregateRemediationExecutionsRequest): Promise<$_model.ListAggregateRemediationExecutionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAggregateRemediationExecutionsWithOptions(request, runtime);
  }

  /**
   * Queries the remediations in a specified account group.
   * 
   * @remarks
   * This topic provides an example of how to query the remediation settings for the rule `cr-6b7c626622af00b4****` in the account group `ca-6b4a626622af0012****`.
   * 
   * @param request - ListAggregateRemediationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAggregateRemediationsResponse
   */
  async listAggregateRemediationsWithOptions(request: $_model.ListAggregateRemediationsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAggregateRemediationsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aggregatorId)) {
      query["AggregatorId"] = request.aggregatorId;
    }

    if (!$dara.isNull(request.configRuleIds)) {
      query["ConfigRuleIds"] = request.configRuleIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAggregateRemediations",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAggregateRemediationsResponse>(await this.callApi(params, req, runtime), new $_model.ListAggregateRemediationsResponse({}));
  }

  /**
   * Queries the remediations in a specified account group.
   * 
   * @remarks
   * This topic provides an example of how to query the remediation settings for the rule `cr-6b7c626622af00b4****` in the account group `ca-6b4a626622af0012****`.
   * 
   * @param request - ListAggregateRemediationsRequest
   * @returns ListAggregateRemediationsResponse
   */
  async listAggregateRemediations(request: $_model.ListAggregateRemediationsRequest): Promise<$_model.ListAggregateRemediationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAggregateRemediationsWithOptions(request, runtime);
  }

  /**
   * Queries the rule evaluation results for resources in a specified account group.
   * 
   * @param request - ListAggregateResourceEvaluationResultsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAggregateResourceEvaluationResultsResponse
   */
  async listAggregateResourceEvaluationResultsWithOptions(request: $_model.ListAggregateResourceEvaluationResultsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAggregateResourceEvaluationResultsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aggregatorId)) {
      query["AggregatorId"] = request.aggregatorId;
    }

    if (!$dara.isNull(request.complianceType)) {
      query["ComplianceType"] = request.complianceType;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.riskLevel)) {
      query["RiskLevel"] = request.riskLevel;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAggregateResourceEvaluationResults",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAggregateResourceEvaluationResultsResponse>(await this.callApi(params, req, runtime), new $_model.ListAggregateResourceEvaluationResultsResponse({}));
  }

  /**
   * Queries the rule evaluation results for resources in a specified account group.
   * 
   * @param request - ListAggregateResourceEvaluationResultsRequest
   * @returns ListAggregateResourceEvaluationResultsResponse
   */
  async listAggregateResourceEvaluationResults(request: $_model.ListAggregateResourceEvaluationResultsRequest): Promise<$_model.ListAggregateResourceEvaluationResultsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAggregateResourceEvaluationResultsWithOptions(request, runtime);
  }

  /**
   * 获取资源关系列表
   * 
   * @param request - ListAggregateResourceRelationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAggregateResourceRelationsResponse
   */
  async listAggregateResourceRelationsWithOptions(request: $_model.ListAggregateResourceRelationsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAggregateResourceRelationsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aggregatorId)) {
      query["AggregatorId"] = request.aggregatorId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    if (!$dara.isNull(request.relationType)) {
      query["RelationType"] = request.relationType;
    }

    if (!$dara.isNull(request.resourceAccountId)) {
      query["ResourceAccountId"] = request.resourceAccountId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.targetResourceId)) {
      query["TargetResourceId"] = request.targetResourceId;
    }

    if (!$dara.isNull(request.targetResourceType)) {
      query["TargetResourceType"] = request.targetResourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAggregateResourceRelations",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAggregateResourceRelationsResponse>(await this.callApi(params, req, runtime), new $_model.ListAggregateResourceRelationsResponse({}));
  }

  /**
   * 获取资源关系列表
   * 
   * @param request - ListAggregateResourceRelationsRequest
   * @returns ListAggregateResourceRelationsResponse
   */
  async listAggregateResourceRelations(request: $_model.ListAggregateResourceRelationsRequest): Promise<$_model.ListAggregateResourceRelationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAggregateResourceRelationsWithOptions(request, runtime);
  }

  /**
   * You can use SQL Select statements to search for resources in a specific account group based on fields in the resource properties.
   * 
   * @remarks
   * When you write an SQL `Select` statement, you can retrieve the search fields and their types from the property file of the target resource type. For more information about resource property files, see [alibabacloud-config-resource-schema](https://github.com/aliyun/alibabacloud-config-resource-schema).
   * > - The resource property files contain all resource types that are supported by Cloud Config. These files are named after their corresponding resource types. For example, the property file for the `ACS::ECS::Instance` resource type is `ACS_ECS_Instance.properties.json`. The path to the property files is `config/properties/resource-types`.
   * >
   * > - For more information about SQL search examples and limits, see [SQL search examples](https://help.aliyun.com/document_detail/398718.html) and [Limits of SQL search](https://help.aliyun.com/document_detail/398750.html).
   * This topic provides an example of an advanced search query. The query finds all resources in the account group `ca-4b05626622af000c****` that have a tag key of `business` and a tag value of `online`.
   * 
   * @param request - ListAggregateResourcesByAdvancedSearchRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAggregateResourcesByAdvancedSearchResponse
   */
  async listAggregateResourcesByAdvancedSearchWithOptions(request: $_model.ListAggregateResourcesByAdvancedSearchRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAggregateResourcesByAdvancedSearchResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aggregatorId)) {
      query["AggregatorId"] = request.aggregatorId;
    }

    if (!$dara.isNull(request.sql)) {
      query["Sql"] = request.sql;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAggregateResourcesByAdvancedSearch",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAggregateResourcesByAdvancedSearchResponse>(await this.callApi(params, req, runtime), new $_model.ListAggregateResourcesByAdvancedSearchResponse({}));
  }

  /**
   * You can use SQL Select statements to search for resources in a specific account group based on fields in the resource properties.
   * 
   * @remarks
   * When you write an SQL `Select` statement, you can retrieve the search fields and their types from the property file of the target resource type. For more information about resource property files, see [alibabacloud-config-resource-schema](https://github.com/aliyun/alibabacloud-config-resource-schema).
   * > - The resource property files contain all resource types that are supported by Cloud Config. These files are named after their corresponding resource types. For example, the property file for the `ACS::ECS::Instance` resource type is `ACS_ECS_Instance.properties.json`. The path to the property files is `config/properties/resource-types`.
   * >
   * > - For more information about SQL search examples and limits, see [SQL search examples](https://help.aliyun.com/document_detail/398718.html) and [Limits of SQL search](https://help.aliyun.com/document_detail/398750.html).
   * This topic provides an example of an advanced search query. The query finds all resources in the account group `ca-4b05626622af000c****` that have a tag key of `business` and a tag value of `online`.
   * 
   * @param request - ListAggregateResourcesByAdvancedSearchRequest
   * @returns ListAggregateResourcesByAdvancedSearchResponse
   */
  async listAggregateResourcesByAdvancedSearch(request: $_model.ListAggregateResourcesByAdvancedSearchRequest): Promise<$_model.ListAggregateResourcesByAdvancedSearchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAggregateResourcesByAdvancedSearchWithOptions(request, runtime);
  }

  /**
   * 获取账号组列表
   * 
   * @param tmpReq - ListAggregatorsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAggregatorsResponse
   */
  async listAggregatorsWithOptions(tmpReq: $_model.ListAggregatorsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAggregatorsResponse> {
    tmpReq.validate();
    let request = new $_model.ListAggregatorsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tag)) {
      request.tagShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tag, "Tag", "json");
    }

    let query = { };
    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.tagShrink)) {
      query["Tag"] = request.tagShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAggregators",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAggregatorsResponse>(await this.callApi(params, req, runtime), new $_model.ListAggregatorsResponse({}));
  }

  /**
   * 获取账号组列表
   * 
   * @param request - ListAggregatorsRequest
   * @returns ListAggregatorsResponse
   */
  async listAggregators(request: $_model.ListAggregatorsRequest): Promise<$_model.ListAggregatorsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAggregatorsWithOptions(request, runtime);
  }

  /**
   * Queries the details of all compliance pack templates provided by CloudConfig.
   * 
   * @remarks
   * A compliance pack template is a collection of rules customized by CloudConfig for compliance scenarios.
   * 
   * @param request - ListCompliancePackTemplatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCompliancePackTemplatesResponse
   */
  async listCompliancePackTemplatesWithOptions(request: $_model.ListCompliancePackTemplatesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListCompliancePackTemplatesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.compliancePackTemplateId)) {
      query["CompliancePackTemplateId"] = request.compliancePackTemplateId;
    }

    if (!$dara.isNull(request.filterType)) {
      query["FilterType"] = request.filterType;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceTypes)) {
      query["ResourceTypes"] = request.resourceTypes;
    }

    if (!$dara.isNull(request.ruleRiskLevel)) {
      query["RuleRiskLevel"] = request.ruleRiskLevel;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCompliancePackTemplates",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCompliancePackTemplatesResponse>(await this.callApi(params, req, runtime), new $_model.ListCompliancePackTemplatesResponse({}));
  }

  /**
   * Queries the details of all compliance pack templates provided by CloudConfig.
   * 
   * @remarks
   * A compliance pack template is a collection of rules customized by CloudConfig for compliance scenarios.
   * 
   * @param request - ListCompliancePackTemplatesRequest
   * @returns ListCompliancePackTemplatesResponse
   */
  async listCompliancePackTemplates(request: $_model.ListCompliancePackTemplatesRequest): Promise<$_model.ListCompliancePackTemplatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCompliancePackTemplatesWithOptions(request, runtime);
  }

  /**
   * Lists the compliance packs for the current account.
   * 
   * @remarks
   * This topic provides an example of how to list compliance packs. The response returns one compliance pack record: `cp-fdc8626622af00f9****`.
   * 
   * @param tmpReq - ListCompliancePacksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCompliancePacksResponse
   */
  async listCompliancePacksWithOptions(tmpReq: $_model.ListCompliancePacksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListCompliancePacksResponse> {
    tmpReq.validate();
    let request = new $_model.ListCompliancePacksShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tag)) {
      request.tagShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tag, "Tag", "json");
    }

    let query = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.riskLevel)) {
      query["RiskLevel"] = request.riskLevel;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.tagShrink)) {
      query["Tag"] = request.tagShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCompliancePacks",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCompliancePacksResponse>(await this.callApi(params, req, runtime), new $_model.ListCompliancePacksResponse({}));
  }

  /**
   * Lists the compliance packs for the current account.
   * 
   * @remarks
   * This topic provides an example of how to list compliance packs. The response returns one compliance pack record: `cp-fdc8626622af00f9****`.
   * 
   * @param request - ListCompliancePacksRequest
   * @returns ListCompliancePacksResponse
   */
  async listCompliancePacks(request: $_model.ListCompliancePacksRequest): Promise<$_model.ListCompliancePacksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCompliancePacksWithOptions(request, runtime);
  }

  /**
   * Returns a list of delivery channels.
   * 
   * @param request - ListConfigDeliveryChannelsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListConfigDeliveryChannelsResponse
   */
  async listConfigDeliveryChannelsWithOptions(request: $_model.ListConfigDeliveryChannelsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListConfigDeliveryChannelsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deliveryChannelIds)) {
      query["DeliveryChannelIds"] = request.deliveryChannelIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListConfigDeliveryChannels",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListConfigDeliveryChannelsResponse>(await this.callApi(params, req, runtime), new $_model.ListConfigDeliveryChannelsResponse({}));
  }

  /**
   * Returns a list of delivery channels.
   * 
   * @param request - ListConfigDeliveryChannelsRequest
   * @returns ListConfigDeliveryChannelsResponse
   */
  async listConfigDeliveryChannels(request: $_model.ListConfigDeliveryChannelsRequest): Promise<$_model.ListConfigDeliveryChannelsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listConfigDeliveryChannelsWithOptions(request, runtime);
  }

  /**
   * Queries the compliance evaluation results of a rule.
   * 
   * @param request - ListConfigRuleEvaluationResultsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListConfigRuleEvaluationResultsResponse
   */
  async listConfigRuleEvaluationResultsWithOptions(request: $_model.ListConfigRuleEvaluationResultsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListConfigRuleEvaluationResultsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.compliancePackId)) {
      query["CompliancePackId"] = request.compliancePackId;
    }

    if (!$dara.isNull(request.complianceType)) {
      query["ComplianceType"] = request.complianceType;
    }

    if (!$dara.isNull(request.configRuleId)) {
      query["ConfigRuleId"] = request.configRuleId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regions)) {
      query["Regions"] = request.regions;
    }

    if (!$dara.isNull(request.resourceGroupIds)) {
      query["ResourceGroupIds"] = request.resourceGroupIds;
    }

    if (!$dara.isNull(request.resourceTypes)) {
      query["ResourceTypes"] = request.resourceTypes;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListConfigRuleEvaluationResults",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListConfigRuleEvaluationResultsResponse>(await this.callApi(params, req, runtime), new $_model.ListConfigRuleEvaluationResultsResponse({}));
  }

  /**
   * Queries the compliance evaluation results of a rule.
   * 
   * @param request - ListConfigRuleEvaluationResultsRequest
   * @returns ListConfigRuleEvaluationResultsResponse
   */
  async listConfigRuleEvaluationResults(request: $_model.ListConfigRuleEvaluationResultsRequest): Promise<$_model.ListConfigRuleEvaluationResultsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listConfigRuleEvaluationResultsWithOptions(request, runtime);
  }

  /**
   * 透出用户维度的历史评估结果统计
   * 
   * @param request - ListConfigRuleEvaluationStatisticsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListConfigRuleEvaluationStatisticsResponse
   */
  async listConfigRuleEvaluationStatisticsWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.ListConfigRuleEvaluationStatisticsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "ListConfigRuleEvaluationStatistics",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListConfigRuleEvaluationStatisticsResponse>(await this.callApi(params, req, runtime), new $_model.ListConfigRuleEvaluationStatisticsResponse({}));
  }

  /**
   * 透出用户维度的历史评估结果统计
   * @returns ListConfigRuleEvaluationStatisticsResponse
   */
  async listConfigRuleEvaluationStatistics(): Promise<$_model.ListConfigRuleEvaluationStatisticsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listConfigRuleEvaluationStatisticsWithOptions(runtime);
  }

  /**
   * Lists the operators available for Cloud Config rules.
   * 
   * @param request - ListConfigRuleOperatorsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListConfigRuleOperatorsResponse
   */
  async listConfigRuleOperatorsWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.ListConfigRuleOperatorsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "ListConfigRuleOperators",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListConfigRuleOperatorsResponse>(await this.callApi(params, req, runtime), new $_model.ListConfigRuleOperatorsResponse({}));
  }

  /**
   * Lists the operators available for Cloud Config rules.
   * @returns ListConfigRuleOperatorsResponse
   */
  async listConfigRuleOperators(): Promise<$_model.ListConfigRuleOperatorsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listConfigRuleOperatorsWithOptions(runtime);
  }

  /**
   * Queries a list of rules.
   * 
   * @remarks
   * This topic provides an example of how to query the list of rules for the current account. The sample response indicates that the rule list contains one rule, three resources are evaluated, and the compliance result is COMPLIANT.
   * 
   * @param tmpReq - ListConfigRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListConfigRulesResponse
   */
  async listConfigRulesWithOptions(tmpReq: $_model.ListConfigRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListConfigRulesResponse> {
    tmpReq.validate();
    let request = new $_model.ListConfigRulesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tag)) {
      request.tagShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tag, "Tag", "json");
    }

    let query = { };
    if (!$dara.isNull(request.compliancePackId)) {
      query["CompliancePackId"] = request.compliancePackId;
    }

    if (!$dara.isNull(request.complianceType)) {
      query["ComplianceType"] = request.complianceType;
    }

    if (!$dara.isNull(request.configRuleName)) {
      query["ConfigRuleName"] = request.configRuleName;
    }

    if (!$dara.isNull(request.configRuleState)) {
      query["ConfigRuleState"] = request.configRuleState;
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

    if (!$dara.isNull(request.resourceTypes)) {
      query["ResourceTypes"] = request.resourceTypes;
    }

    if (!$dara.isNull(request.riskLevel)) {
      query["RiskLevel"] = request.riskLevel;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.tagShrink)) {
      query["Tag"] = request.tagShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListConfigRules",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListConfigRulesResponse>(await this.callApi(params, req, runtime), new $_model.ListConfigRulesResponse({}));
  }

  /**
   * Queries a list of rules.
   * 
   * @remarks
   * This topic provides an example of how to query the list of rules for the current account. The sample response indicates that the rule list contains one rule, three resources are evaluated, and the compliance result is COMPLIANT.
   * 
   * @param request - ListConfigRulesRequest
   * @returns ListConfigRulesResponse
   */
  async listConfigRules(request: $_model.ListConfigRulesRequest): Promise<$_model.ListConfigRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listConfigRulesWithOptions(request, runtime);
  }

  /**
   * Queries a list of resources that are aggregated across regions in the current Alibaba Cloud account.
   * 
   * @remarks
   * ### Limits
   * Cloud Config supports only specific Alibaba Cloud services and resource types. The returned resource list includes only these supported resources. For more information about supported services and resource types, see [Supported resource types and resource relationships](https://help.aliyun.com/document_detail/127411.html).
   * ### Usage notes
   * This topic provides an example of how to query the resources in your account. The sample response shows that eight resources are returned.
   * 
   * @param request - ListDiscoveredResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDiscoveredResourcesResponse
   */
  async listDiscoveredResourcesWithOptions(request: $_model.ListDiscoveredResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDiscoveredResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endUpdateTimestamp)) {
      query["EndUpdateTimestamp"] = request.endUpdateTimestamp;
    }

    if (!$dara.isNull(request.excludeResourceTypes)) {
      query["ExcludeResourceTypes"] = request.excludeResourceTypes;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regions)) {
      query["Regions"] = request.regions;
    }

    if (!$dara.isNull(request.resourceDeleted)) {
      query["ResourceDeleted"] = request.resourceDeleted;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceName)) {
      query["ResourceName"] = request.resourceName;
    }

    if (!$dara.isNull(request.resourceTypes)) {
      query["ResourceTypes"] = request.resourceTypes;
    }

    if (!$dara.isNull(request.startUpdateTimestamp)) {
      query["StartUpdateTimestamp"] = request.startUpdateTimestamp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDiscoveredResources",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDiscoveredResourcesResponse>(await this.callApi(params, req, runtime), new $_model.ListDiscoveredResourcesResponse({}));
  }

  /**
   * Queries a list of resources that are aggregated across regions in the current Alibaba Cloud account.
   * 
   * @remarks
   * ### Limits
   * Cloud Config supports only specific Alibaba Cloud services and resource types. The returned resource list includes only these supported resources. For more information about supported services and resource types, see [Supported resource types and resource relationships](https://help.aliyun.com/document_detail/127411.html).
   * ### Usage notes
   * This topic provides an example of how to query the resources in your account. The sample response shows that eight resources are returned.
   * 
   * @param request - ListDiscoveredResourcesRequest
   * @returns ListDiscoveredResourcesResponse
   */
  async listDiscoveredResources(request: $_model.ListDiscoveredResourcesRequest): Promise<$_model.ListDiscoveredResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDiscoveredResourcesWithOptions(request, runtime);
  }

  /**
   * Queries the services integrated with CloudConfig and their statuses.
   * 
   * @param request - ListIntegratedServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListIntegratedServiceResponse
   */
  async listIntegratedServiceWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.ListIntegratedServiceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "ListIntegratedService",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListIntegratedServiceResponse>(await this.callApi(params, req, runtime), new $_model.ListIntegratedServiceResponse({}));
  }

  /**
   * Queries the services integrated with CloudConfig and their statuses.
   * @returns ListIntegratedServiceResponse
   */
  async listIntegratedService(): Promise<$_model.ListIntegratedServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listIntegratedServiceWithOptions(runtime);
  }

  /**
   * Queries the rule templates that are supported by Cloud Config.
   * 
   * @remarks
   * ### Background information
   * For more information about rule definitions, working principles, and templates, see [Definition and working principles of rules](https://help.aliyun.com/document_detail/128273.html).
   * ### Usage notes
   * This topic provides an example of how to query all rule templates that contain the keyword `CDN`. The sample response shows that a total of 21 rule templates are returned.
   * 
   * @param request - ListManagedRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListManagedRulesResponse
   */
  async listManagedRulesWithOptions(request: $_model.ListManagedRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListManagedRulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.filterType)) {
      query["FilterType"] = request.filterType;
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

    if (!$dara.isNull(request.resourceTypes)) {
      query["ResourceTypes"] = request.resourceTypes;
    }

    if (!$dara.isNull(request.riskLevel)) {
      query["RiskLevel"] = request.riskLevel;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListManagedRules",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListManagedRulesResponse>(await this.callApi(params, req, runtime), new $_model.ListManagedRulesResponse({}));
  }

  /**
   * Queries the rule templates that are supported by Cloud Config.
   * 
   * @remarks
   * ### Background information
   * For more information about rule definitions, working principles, and templates, see [Definition and working principles of rules](https://help.aliyun.com/document_detail/128273.html).
   * ### Usage notes
   * This topic provides an example of how to query all rule templates that contain the keyword `CDN`. The sample response shows that a total of 21 rule templates are returned.
   * 
   * @param request - ListManagedRulesRequest
   * @returns ListManagedRulesResponse
   */
  async listManagedRules(request: $_model.ListManagedRulesRequest): Promise<$_model.ListManagedRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listManagedRulesWithOptions(request, runtime);
  }

  /**
   * Queries the proactive rules supported by Cloud Config.
   * 
   * @remarks
   * For more information about the concepts, working principles, and integration procedure of proactive rules, see [Definitions and working principles of proactive rules](https://help.aliyun.com/document_detail/470802.html).
   * Proactive rules and rule templates originate from the same source rules. After you create resources, proactive rules continuously check your resources for compliance.
   * 
   * @param tmpReq - ListPreManagedRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPreManagedRulesResponse
   */
  async listPreManagedRulesWithOptions(tmpReq: $_model.ListPreManagedRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListPreManagedRulesResponse> {
    tmpReq.validate();
    let request = new $_model.ListPreManagedRulesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.resourceTypes)) {
      request.resourceTypesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceTypes, "ResourceTypes", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceTypesShrink)) {
      body["ResourceTypes"] = request.resourceTypesShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPreManagedRules",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPreManagedRulesResponse>(await this.callApi(params, req, runtime), new $_model.ListPreManagedRulesResponse({}));
  }

  /**
   * Queries the proactive rules supported by Cloud Config.
   * 
   * @remarks
   * For more information about the concepts, working principles, and integration procedure of proactive rules, see [Definitions and working principles of proactive rules](https://help.aliyun.com/document_detail/470802.html).
   * Proactive rules and rule templates originate from the same source rules. After you create resources, proactive rules continuously check your resources for compliance.
   * 
   * @param request - ListPreManagedRulesRequest
   * @returns ListPreManagedRulesResponse
   */
  async listPreManagedRules(request: $_model.ListPreManagedRulesRequest): Promise<$_model.ListPreManagedRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPreManagedRulesWithOptions(request, runtime);
  }

  /**
   * This operation obtains a list of recommended managed rules.
   * 
   * @param request - ListRecommendManagedRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRecommendManagedRulesResponse
   */
  async listRecommendManagedRulesWithOptions(request: $_model.ListRecommendManagedRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListRecommendManagedRulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.excludeRegionIdsScope)) {
      query["ExcludeRegionIdsScope"] = request.excludeRegionIdsScope;
    }

    if (!$dara.isNull(request.excludeResourceGroupIdsScope)) {
      query["ExcludeResourceGroupIdsScope"] = request.excludeResourceGroupIdsScope;
    }

    if (!$dara.isNull(request.excludeResourceIdsScope)) {
      query["ExcludeResourceIdsScope"] = request.excludeResourceIdsScope;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionIdsScope)) {
      query["RegionIdsScope"] = request.regionIdsScope;
    }

    if (!$dara.isNull(request.resourceGroupIdsScope)) {
      query["ResourceGroupIdsScope"] = request.resourceGroupIdsScope;
    }

    if (!$dara.isNull(request.resourceIdsScope)) {
      query["ResourceIdsScope"] = request.resourceIdsScope;
    }

    if (!$dara.isNull(request.selectedManagedRuleIdentifiers)) {
      query["SelectedManagedRuleIdentifiers"] = request.selectedManagedRuleIdentifiers;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRecommendManagedRules",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRecommendManagedRulesResponse>(await this.callApi(params, req, runtime), new $_model.ListRecommendManagedRulesResponse({}));
  }

  /**
   * This operation obtains a list of recommended managed rules.
   * 
   * @param request - ListRecommendManagedRulesRequest
   * @returns ListRecommendManagedRulesResponse
   */
  async listRecommendManagedRules(request: $_model.ListRecommendManagedRulesRequest): Promise<$_model.ListRecommendManagedRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRecommendManagedRulesWithOptions(request, runtime);
  }

  /**
   * 修正执行历史
   * 
   * @param request - ListRemediationExecutionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRemediationExecutionsResponse
   */
  async listRemediationExecutionsWithOptions(request: $_model.ListRemediationExecutionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListRemediationExecutionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.configRuleId)) {
      query["ConfigRuleId"] = request.configRuleId;
    }

    if (!$dara.isNull(request.executionStatus)) {
      query["ExecutionStatus"] = request.executionStatus;
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
      action: "ListRemediationExecutions",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRemediationExecutionsResponse>(await this.callApi(params, req, runtime), new $_model.ListRemediationExecutionsResponse({}));
  }

  /**
   * 修正执行历史
   * 
   * @param request - ListRemediationExecutionsRequest
   * @returns ListRemediationExecutionsResponse
   */
  async listRemediationExecutions(request: $_model.ListRemediationExecutionsRequest): Promise<$_model.ListRemediationExecutionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRemediationExecutionsWithOptions(request, runtime);
  }

  /**
   * 修正模版列表
   * 
   * @param request - ListRemediationTemplatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRemediationTemplatesResponse
   */
  async listRemediationTemplatesWithOptions(request: $_model.ListRemediationTemplatesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListRemediationTemplatesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.managedRuleIdentifier)) {
      query["ManagedRuleIdentifier"] = request.managedRuleIdentifier;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.remediationType)) {
      query["RemediationType"] = request.remediationType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRemediationTemplates",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRemediationTemplatesResponse>(await this.callApi(params, req, runtime), new $_model.ListRemediationTemplatesResponse({}));
  }

  /**
   * 修正模版列表
   * 
   * @param request - ListRemediationTemplatesRequest
   * @returns ListRemediationTemplatesResponse
   */
  async listRemediationTemplates(request: $_model.ListRemediationTemplatesRequest): Promise<$_model.ListRemediationTemplatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRemediationTemplatesWithOptions(request, runtime);
  }

  /**
   * 查询规则的修正
   * 
   * @param request - ListRemediationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRemediationsResponse
   */
  async listRemediationsWithOptions(request: $_model.ListRemediationsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListRemediationsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.configRuleIds)) {
      query["ConfigRuleIds"] = request.configRuleIds;
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
      action: "ListRemediations",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRemediationsResponse>(await this.callApi(params, req, runtime), new $_model.ListRemediationsResponse({}));
  }

  /**
   * 查询规则的修正
   * 
   * @param request - ListRemediationsRequest
   * @returns ListRemediationsResponse
   */
  async listRemediations(request: $_model.ListRemediationsRequest): Promise<$_model.ListRemediationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRemediationsWithOptions(request, runtime);
  }

  /**
   * Queries the details of compliance report templates in batches.
   * 
   * @param request - ListReportTemplatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListReportTemplatesResponse
   */
  async listReportTemplatesWithOptions(request: $_model.ListReportTemplatesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListReportTemplatesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
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
      action: "ListReportTemplates",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListReportTemplatesResponse>(await this.callApi(params, req, runtime), new $_model.ListReportTemplatesResponse({}));
  }

  /**
   * Queries the details of compliance report templates in batches.
   * 
   * @param request - ListReportTemplatesRequest
   * @returns ListReportTemplatesResponse
   */
  async listReportTemplates(request: $_model.ListReportTemplatesRequest): Promise<$_model.ListReportTemplatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listReportTemplatesWithOptions(request, runtime);
  }

  /**
   * Queries the evaluation results for a resource based on a rule.
   * 
   * @param request - ListResourceEvaluationResultsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListResourceEvaluationResultsResponse
   */
  async listResourceEvaluationResultsWithOptions(request: $_model.ListResourceEvaluationResultsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListResourceEvaluationResultsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.complianceType)) {
      query["ComplianceType"] = request.complianceType;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.riskLevel)) {
      query["RiskLevel"] = request.riskLevel;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListResourceEvaluationResults",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListResourceEvaluationResultsResponse>(await this.callApi(params, req, runtime), new $_model.ListResourceEvaluationResultsResponse({}));
  }

  /**
   * Queries the evaluation results for a resource based on a rule.
   * 
   * @param request - ListResourceEvaluationResultsRequest
   * @returns ListResourceEvaluationResultsResponse
   */
  async listResourceEvaluationResults(request: $_model.ListResourceEvaluationResultsRequest): Promise<$_model.ListResourceEvaluationResultsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listResourceEvaluationResultsWithOptions(request, runtime);
  }

  /**
   * 获取资源关系列表
   * 
   * @param request - ListResourceRelationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListResourceRelationsResponse
   */
  async listResourceRelationsWithOptions(request: $_model.ListResourceRelationsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListResourceRelationsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    if (!$dara.isNull(request.relationType)) {
      query["RelationType"] = request.relationType;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.targetResourceId)) {
      query["TargetResourceId"] = request.targetResourceId;
    }

    if (!$dara.isNull(request.targetResourceType)) {
      query["TargetResourceType"] = request.targetResourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListResourceRelations",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListResourceRelationsResponse>(await this.callApi(params, req, runtime), new $_model.ListResourceRelationsResponse({}));
  }

  /**
   * 获取资源关系列表
   * 
   * @param request - ListResourceRelationsRequest
   * @returns ListResourceRelationsResponse
   */
  async listResourceRelations(request: $_model.ListResourceRelationsRequest): Promise<$_model.ListResourceRelationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listResourceRelationsWithOptions(request, runtime);
  }

  /**
   * 资源列表高级搜索接口
   * 
   * @param request - ListResourcesByAdvancedSearchRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListResourcesByAdvancedSearchResponse
   */
  async listResourcesByAdvancedSearchWithOptions(request: $_model.ListResourcesByAdvancedSearchRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListResourcesByAdvancedSearchResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.sql)) {
      query["Sql"] = request.sql;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListResourcesByAdvancedSearch",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListResourcesByAdvancedSearchResponse>(await this.callApi(params, req, runtime), new $_model.ListResourcesByAdvancedSearchResponse({}));
  }

  /**
   * 资源列表高级搜索接口
   * 
   * @param request - ListResourcesByAdvancedSearchRequest
   * @returns ListResourcesByAdvancedSearchResponse
   */
  async listResourcesByAdvancedSearch(request: $_model.ListResourcesByAdvancedSearchRequest): Promise<$_model.ListResourcesByAdvancedSearchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listResourcesByAdvancedSearchWithOptions(request, runtime);
  }

  /**
   * Queries the cloud services and resource types that are supported by Cloud Config.
   * 
   * @remarks
   * This topic provides an example on how to query the Alibaba Cloud services and resource types supported by a Cloud Config.
   * 
   * @param request - ListSupportedProductsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSupportedProductsResponse
   */
  async listSupportedProductsWithOptions(request: $_model.ListSupportedProductsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSupportedProductsResponse> {
    request.validate();
    let query = { };
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
      action: "ListSupportedProducts",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSupportedProductsResponse>(await this.callApi(params, req, runtime), new $_model.ListSupportedProductsResponse({}));
  }

  /**
   * Queries the cloud services and resource types that are supported by Cloud Config.
   * 
   * @remarks
   * This topic provides an example on how to query the Alibaba Cloud services and resource types supported by a Cloud Config.
   * 
   * @param request - ListSupportedProductsRequest
   * @returns ListSupportedProductsResponse
   */
  async listSupportedProducts(request: $_model.ListSupportedProductsRequest): Promise<$_model.ListSupportedProductsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSupportedProductsWithOptions(request, runtime);
  }

  /**
   * Queries the tags attached to resources in Cloud Config.
   * 
   * @param tmpReq - ListTagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagResourcesResponse
   */
  async listTagResourcesWithOptions(tmpReq: $_model.ListTagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTagResourcesResponse> {
    tmpReq.validate();
    let request = new $_model.ListTagResourcesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tag)) {
      request.tagShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tag, "Tag", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      body["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tagShrink)) {
      body["Tag"] = request.tagShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTagResources",
      version: "2020-09-07",
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
   * Queries the tags attached to resources in Cloud Config.
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: $_model.ListTagResourcesRequest): Promise<$_model.ListTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * 自定义规则评估结果回调
   * 
   * @param request - PutEvaluationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PutEvaluationsResponse
   */
  async putEvaluationsWithOptions(request: $_model.PutEvaluationsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PutEvaluationsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deleteMode)) {
      body["DeleteMode"] = request.deleteMode;
    }

    if (!$dara.isNull(request.evaluations)) {
      body["Evaluations"] = request.evaluations;
    }

    if (!$dara.isNull(request.resultToken)) {
      body["ResultToken"] = request.resultToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PutEvaluations",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PutEvaluationsResponse>(await this.callApi(params, req, runtime), new $_model.PutEvaluationsResponse({}));
  }

  /**
   * 自定义规则评估结果回调
   * 
   * @param request - PutEvaluationsRequest
   * @returns PutEvaluationsResponse
   */
  async putEvaluations(request: $_model.PutEvaluationsRequest): Promise<$_model.PutEvaluationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.putEvaluationsWithOptions(request, runtime);
  }

  /**
   * 取消评估结果的忽略状态
   * 
   * @param tmpReq - RevertAggregateEvaluationResultsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RevertAggregateEvaluationResultsResponse
   */
  async revertAggregateEvaluationResultsWithOptions(tmpReq: $_model.RevertAggregateEvaluationResultsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RevertAggregateEvaluationResultsResponse> {
    tmpReq.validate();
    let request = new $_model.RevertAggregateEvaluationResultsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.resources)) {
      request.resourcesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resources, "Resources", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.aggregatorId)) {
      body["AggregatorId"] = request.aggregatorId;
    }

    if (!$dara.isNull(request.configRuleId)) {
      body["ConfigRuleId"] = request.configRuleId;
    }

    if (!$dara.isNull(request.resourcesShrink)) {
      body["Resources"] = request.resourcesShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RevertAggregateEvaluationResults",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RevertAggregateEvaluationResultsResponse>(await this.callApi(params, req, runtime), new $_model.RevertAggregateEvaluationResultsResponse({}));
  }

  /**
   * 取消评估结果的忽略状态
   * 
   * @param request - RevertAggregateEvaluationResultsRequest
   * @returns RevertAggregateEvaluationResultsResponse
   */
  async revertAggregateEvaluationResults(request: $_model.RevertAggregateEvaluationResultsRequest): Promise<$_model.RevertAggregateEvaluationResultsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.revertAggregateEvaluationResultsWithOptions(request, runtime);
  }

  /**
   * 恢复已忽略的某条规则对某些资源的评估结果后，继续显示该规则对资源的评估结果
   * 
   * @param tmpReq - RevertEvaluationResultsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RevertEvaluationResultsResponse
   */
  async revertEvaluationResultsWithOptions(tmpReq: $_model.RevertEvaluationResultsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RevertEvaluationResultsResponse> {
    tmpReq.validate();
    let request = new $_model.RevertEvaluationResultsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.resources)) {
      request.resourcesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resources, "Resources", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.configRuleId)) {
      body["ConfigRuleId"] = request.configRuleId;
    }

    if (!$dara.isNull(request.resourcesShrink)) {
      body["Resources"] = request.resourcesShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RevertEvaluationResults",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RevertEvaluationResultsResponse>(await this.callApi(params, req, runtime), new $_model.RevertEvaluationResultsResponse({}));
  }

  /**
   * 恢复已忽略的某条规则对某些资源的评估结果后，继续显示该规则对资源的评估结果
   * 
   * @param request - RevertEvaluationResultsRequest
   * @returns RevertEvaluationResultsResponse
   */
  async revertEvaluationResults(request: $_model.RevertEvaluationResultsRequest): Promise<$_model.RevertEvaluationResultsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.revertEvaluationResultsWithOptions(request, runtime);
  }

  /**
   * 重新审计指定账号组内的某条规则或某个合规包中的所有规则
   * 
   * @param request - StartAggregateConfigRuleEvaluationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartAggregateConfigRuleEvaluationResponse
   */
  async startAggregateConfigRuleEvaluationWithOptions(request: $_model.StartAggregateConfigRuleEvaluationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartAggregateConfigRuleEvaluationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aggregatorId)) {
      query["AggregatorId"] = request.aggregatorId;
    }

    if (!$dara.isNull(request.compliancePackId)) {
      query["CompliancePackId"] = request.compliancePackId;
    }

    if (!$dara.isNull(request.configRuleId)) {
      query["ConfigRuleId"] = request.configRuleId;
    }

    if (!$dara.isNull(request.revertEvaluation)) {
      query["RevertEvaluation"] = request.revertEvaluation;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartAggregateConfigRuleEvaluation",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartAggregateConfigRuleEvaluationResponse>(await this.callApi(params, req, runtime), new $_model.StartAggregateConfigRuleEvaluationResponse({}));
  }

  /**
   * 重新审计指定账号组内的某条规则或某个合规包中的所有规则
   * 
   * @param request - StartAggregateConfigRuleEvaluationRequest
   * @returns StartAggregateConfigRuleEvaluationResponse
   */
  async startAggregateConfigRuleEvaluation(request: $_model.StartAggregateConfigRuleEvaluationRequest): Promise<$_model.StartAggregateConfigRuleEvaluationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startAggregateConfigRuleEvaluationWithOptions(request, runtime);
  }

  /**
   * 执行账号组规则修正
   * 
   * @param request - StartAggregateRemediationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartAggregateRemediationResponse
   */
  async startAggregateRemediationWithOptions(request: $_model.StartAggregateRemediationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartAggregateRemediationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aggregatorId)) {
      query["AggregatorId"] = request.aggregatorId;
    }

    if (!$dara.isNull(request.configRuleId)) {
      query["ConfigRuleId"] = request.configRuleId;
    }

    if (!$dara.isNull(request.resourceAccountId)) {
      query["ResourceAccountId"] = request.resourceAccountId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartAggregateRemediation",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartAggregateRemediationResponse>(await this.callApi(params, req, runtime), new $_model.StartAggregateRemediationResponse({}));
  }

  /**
   * 执行账号组规则修正
   * 
   * @param request - StartAggregateRemediationRequest
   * @returns StartAggregateRemediationResponse
   */
  async startAggregateRemediation(request: $_model.StartAggregateRemediationRequest): Promise<$_model.StartAggregateRemediationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startAggregateRemediationWithOptions(request, runtime);
  }

  /**
   * Re-evaluates a specific rule or all rules in a compliance package.
   * 
   * @remarks
   * This topic provides an example of how to re-evaluate the rule cr-9920626622af0035\\*\\*\\*\\*.
   * 
   * @param request - StartConfigRuleEvaluationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartConfigRuleEvaluationResponse
   */
  async startConfigRuleEvaluationWithOptions(request: $_model.StartConfigRuleEvaluationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartConfigRuleEvaluationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.compliancePackId)) {
      query["CompliancePackId"] = request.compliancePackId;
    }

    if (!$dara.isNull(request.configRuleId)) {
      query["ConfigRuleId"] = request.configRuleId;
    }

    if (!$dara.isNull(request.revertEvaluation)) {
      query["RevertEvaluation"] = request.revertEvaluation;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartConfigRuleEvaluation",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartConfigRuleEvaluationResponse>(await this.callApi(params, req, runtime), new $_model.StartConfigRuleEvaluationResponse({}));
  }

  /**
   * Re-evaluates a specific rule or all rules in a compliance package.
   * 
   * @remarks
   * This topic provides an example of how to re-evaluate the rule cr-9920626622af0035\\*\\*\\*\\*.
   * 
   * @param request - StartConfigRuleEvaluationRequest
   * @returns StartConfigRuleEvaluationResponse
   */
  async startConfigRuleEvaluation(request: $_model.StartConfigRuleEvaluationRequest): Promise<$_model.StartConfigRuleEvaluationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startConfigRuleEvaluationWithOptions(request, runtime);
  }

  /**
   * Starts a re-evaluation of a single resource.
   * 
   * @param request - StartConfigRuleEvaluationByResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartConfigRuleEvaluationByResourceResponse
   */
  async startConfigRuleEvaluationByResourceWithOptions(request: $_model.StartConfigRuleEvaluationByResourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartConfigRuleEvaluationByResourceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.resourceId)) {
      body["ResourceId"] = request.resourceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartConfigRuleEvaluationByResource",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartConfigRuleEvaluationByResourceResponse>(await this.callApi(params, req, runtime), new $_model.StartConfigRuleEvaluationByResourceResponse({}));
  }

  /**
   * Starts a re-evaluation of a single resource.
   * 
   * @param request - StartConfigRuleEvaluationByResourceRequest
   * @returns StartConfigRuleEvaluationByResourceResponse
   */
  async startConfigRuleEvaluationByResource(request: $_model.StartConfigRuleEvaluationByResourceRequest): Promise<$_model.StartConfigRuleEvaluationByResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startConfigRuleEvaluationByResourceWithOptions(request, runtime);
  }

  /**
   * 启用配置审计服务
   * 
   * @param request - StartConfigurationRecorderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartConfigurationRecorderResponse
   */
  async startConfigurationRecorderWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.StartConfigurationRecorderResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "StartConfigurationRecorder",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartConfigurationRecorderResponse>(await this.callApi(params, req, runtime), new $_model.StartConfigurationRecorderResponse({}));
  }

  /**
   * 启用配置审计服务
   * @returns StartConfigurationRecorderResponse
   */
  async startConfigurationRecorder(): Promise<$_model.StartConfigurationRecorderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startConfigurationRecorderWithOptions(runtime);
  }

  /**
   * 执行修正
   * 
   * @param request - StartRemediationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartRemediationResponse
   */
  async startRemediationWithOptions(request: $_model.StartRemediationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartRemediationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.configRuleId)) {
      query["ConfigRuleId"] = request.configRuleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartRemediation",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartRemediationResponse>(await this.callApi(params, req, runtime), new $_model.StartRemediationResponse({}));
  }

  /**
   * 执行修正
   * 
   * @param request - StartRemediationRequest
   * @returns StartRemediationResponse
   */
  async startRemediation(request: $_model.StartRemediationRequest): Promise<$_model.StartRemediationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startRemediationWithOptions(request, runtime);
  }

  /**
   * 停用配置审计服务
   * 
   * @param request - StopConfigurationRecorderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopConfigurationRecorderResponse
   */
  async stopConfigurationRecorderWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.StopConfigurationRecorderResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "StopConfigurationRecorder",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopConfigurationRecorderResponse>(await this.callApi(params, req, runtime), new $_model.StopConfigurationRecorderResponse({}));
  }

  /**
   * 停用配置审计服务
   * @returns StopConfigurationRecorderResponse
   */
  async stopConfigurationRecorder(): Promise<$_model.StopConfigurationRecorderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopConfigurationRecorderWithOptions(runtime);
  }

  /**
   * Attaches tags to CloudConfig rules, account groups, and compliance packages.
   * 
   * @param tmpReq - TagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagResourcesResponse
   */
  async tagResourcesWithOptions(tmpReq: $_model.TagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TagResourcesResponse> {
    tmpReq.validate();
    let request = new $_model.TagResourcesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tag)) {
      request.tagShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tag, "Tag", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      body["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tagShrink)) {
      body["Tag"] = request.tagShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "TagResources",
      version: "2020-09-07",
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
   * Attaches tags to CloudConfig rules, account groups, and compliance packages.
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: $_model.TagResourcesRequest): Promise<$_model.TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * Sends a real-time test notification.
   * 
   * @param request - TriggerReportSendRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TriggerReportSendResponse
   */
  async triggerReportSendWithOptions(request: $_model.TriggerReportSendRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TriggerReportSendResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.reportTemplateId)) {
      body["ReportTemplateId"] = request.reportTemplateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "TriggerReportSend",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TriggerReportSendResponse>(await this.callApi(params, req, runtime), new $_model.TriggerReportSendResponse({}));
  }

  /**
   * Sends a real-time test notification.
   * 
   * @param request - TriggerReportSendRequest
   * @returns TriggerReportSendResponse
   */
  async triggerReportSend(request: $_model.TriggerReportSendRequest): Promise<$_model.TriggerReportSendResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.triggerReportSendWithOptions(request, runtime);
  }

  /**
   * Detaches tags from resources in Cloud Config.
   * 
   * @param request - UntagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UntagResourcesResponse
   */
  async untagResourcesWithOptions(request: $_model.UntagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UntagResourcesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.all)) {
      body["All"] = request.all;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      body["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tagKey)) {
      body["TagKey"] = request.tagKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UntagResources",
      version: "2020-09-07",
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
   * Detaches tags from resources in Cloud Config.
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: $_model.UntagResourcesRequest): Promise<$_model.UntagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  /**
   * Updates a compliance pack in a specified account group.
   * 
   * @remarks
   * This topic provides an example of how to change the value of a parameter for the `eip-bandwidth-limit` rule template to `20` in the `cp-fdc8626622af00f9****` compliance pack that belongs to the `ca-f632626622af0079****` account group.
   * 
   * @param tmpReq - UpdateAggregateCompliancePackRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAggregateCompliancePackResponse
   */
  async updateAggregateCompliancePackWithOptions(tmpReq: $_model.UpdateAggregateCompliancePackRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAggregateCompliancePackResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateAggregateCompliancePackShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.configRules)) {
      request.configRulesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.configRules, "ConfigRules", "json");
    }

    if (!$dara.isNull(tmpReq.tag)) {
      request.tagShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tag, "Tag", "json");
    }

    let query = { };
    if (!$dara.isNull(request.tagShrink)) {
      query["Tag"] = request.tagShrink;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.aggregatorId)) {
      body["AggregatorId"] = request.aggregatorId;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.compliancePackId)) {
      body["CompliancePackId"] = request.compliancePackId;
    }

    if (!$dara.isNull(request.compliancePackName)) {
      body["CompliancePackName"] = request.compliancePackName;
    }

    if (!$dara.isNull(request.configRulesShrink)) {
      body["ConfigRules"] = request.configRulesShrink;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.excludeRegionIdsScope)) {
      body["ExcludeRegionIdsScope"] = request.excludeRegionIdsScope;
    }

    if (!$dara.isNull(request.excludeResourceGroupIdsScope)) {
      body["ExcludeResourceGroupIdsScope"] = request.excludeResourceGroupIdsScope;
    }

    if (!$dara.isNull(request.excludeResourceIdsScope)) {
      body["ExcludeResourceIdsScope"] = request.excludeResourceIdsScope;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.excludeTagsScope)) {
      bodyFlat["ExcludeTagsScope"] = request.excludeTagsScope;
    }

    if (!$dara.isNull(request.regionIdsScope)) {
      body["RegionIdsScope"] = request.regionIdsScope;
    }

    if (!$dara.isNull(request.resourceGroupIdsScope)) {
      body["ResourceGroupIdsScope"] = request.resourceGroupIdsScope;
    }

    if (!$dara.isNull(request.resourceIdsScope)) {
      body["ResourceIdsScope"] = request.resourceIdsScope;
    }

    if (!$dara.isNull(request.riskLevel)) {
      body["RiskLevel"] = request.riskLevel;
    }

    if (!$dara.isNull(request.tagKeyScope)) {
      body["TagKeyScope"] = request.tagKeyScope;
    }

    if (!$dara.isNull(request.tagValueScope)) {
      body["TagValueScope"] = request.tagValueScope;
    }

    if (!$dara.isNull(request.tagsScope)) {
      bodyFlat["TagsScope"] = request.tagsScope;
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
      action: "UpdateAggregateCompliancePack",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAggregateCompliancePackResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAggregateCompliancePackResponse({}));
  }

  /**
   * Updates a compliance pack in a specified account group.
   * 
   * @remarks
   * This topic provides an example of how to change the value of a parameter for the `eip-bandwidth-limit` rule template to `20` in the `cp-fdc8626622af00f9****` compliance pack that belongs to the `ca-f632626622af0079****` account group.
   * 
   * @param request - UpdateAggregateCompliancePackRequest
   * @returns UpdateAggregateCompliancePackResponse
   */
  async updateAggregateCompliancePack(request: $_model.UpdateAggregateCompliancePackRequest): Promise<$_model.UpdateAggregateCompliancePackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAggregateCompliancePackWithOptions(request, runtime);
  }

  /**
   * 账号组修改投递渠道
   * 
   * @param request - UpdateAggregateConfigDeliveryChannelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAggregateConfigDeliveryChannelResponse
   */
  async updateAggregateConfigDeliveryChannelWithOptions(request: $_model.UpdateAggregateConfigDeliveryChannelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAggregateConfigDeliveryChannelResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aggregatorId)) {
      query["AggregatorId"] = request.aggregatorId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.compliantSnapshot)) {
      query["CompliantSnapshot"] = request.compliantSnapshot;
    }

    if (!$dara.isNull(request.configurationItemChangeNotification)) {
      query["ConfigurationItemChangeNotification"] = request.configurationItemChangeNotification;
    }

    if (!$dara.isNull(request.configurationSnapshot)) {
      query["ConfigurationSnapshot"] = request.configurationSnapshot;
    }

    if (!$dara.isNull(request.deliveryChannelCondition)) {
      query["DeliveryChannelCondition"] = request.deliveryChannelCondition;
    }

    if (!$dara.isNull(request.deliveryChannelId)) {
      query["DeliveryChannelId"] = request.deliveryChannelId;
    }

    if (!$dara.isNull(request.deliveryChannelName)) {
      query["DeliveryChannelName"] = request.deliveryChannelName;
    }

    if (!$dara.isNull(request.deliveryChannelTargetArn)) {
      query["DeliveryChannelTargetArn"] = request.deliveryChannelTargetArn;
    }

    if (!$dara.isNull(request.deliverySnapshotTime)) {
      query["DeliverySnapshotTime"] = request.deliverySnapshotTime;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.nonCompliantNotification)) {
      query["NonCompliantNotification"] = request.nonCompliantNotification;
    }

    if (!$dara.isNull(request.oversizedDataOSSTargetArn)) {
      query["OversizedDataOSSTargetArn"] = request.oversizedDataOSSTargetArn;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAggregateConfigDeliveryChannel",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAggregateConfigDeliveryChannelResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAggregateConfigDeliveryChannelResponse({}));
  }

  /**
   * 账号组修改投递渠道
   * 
   * @param request - UpdateAggregateConfigDeliveryChannelRequest
   * @returns UpdateAggregateConfigDeliveryChannelResponse
   */
  async updateAggregateConfigDeliveryChannel(request: $_model.UpdateAggregateConfigDeliveryChannelRequest): Promise<$_model.UpdateAggregateConfigDeliveryChannelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAggregateConfigDeliveryChannelWithOptions(request, runtime);
  }

  /**
   * Modifies the description, input parameters, and risk level of a rule in a specified account group.
   * 
   * @remarks
   * This topic provides an example of how to change the risk level of the rule `cr-4e3d626622af0080****` in the account group `ca-a4e5626622af0079****` to `3` (low risk).
   * 
   * @param tmpReq - UpdateAggregateConfigRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAggregateConfigRuleResponse
   */
  async updateAggregateConfigRuleWithOptions(tmpReq: $_model.UpdateAggregateConfigRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAggregateConfigRuleResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateAggregateConfigRuleShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.inputParameters)) {
      request.inputParametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.inputParameters, "InputParameters", "json");
    }

    if (!$dara.isNull(tmpReq.resourceTypesScope)) {
      request.resourceTypesScopeShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceTypesScope, "ResourceTypesScope", "simple");
    }

    if (!$dara.isNull(tmpReq.tag)) {
      request.tagShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tag, "Tag", "json");
    }

    let query = { };
    if (!$dara.isNull(request.tagShrink)) {
      query["Tag"] = request.tagShrink;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountIdsScope)) {
      body["AccountIdsScope"] = request.accountIdsScope;
    }

    if (!$dara.isNull(request.aggregatorId)) {
      body["AggregatorId"] = request.aggregatorId;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.conditions)) {
      body["Conditions"] = request.conditions;
    }

    if (!$dara.isNull(request.configRuleId)) {
      body["ConfigRuleId"] = request.configRuleId;
    }

    if (!$dara.isNull(request.configRuleName)) {
      body["ConfigRuleName"] = request.configRuleName;
    }

    if (!$dara.isNull(request.configRuleTriggerTypes)) {
      body["ConfigRuleTriggerTypes"] = request.configRuleTriggerTypes;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.excludeAccountIdsScope)) {
      body["ExcludeAccountIdsScope"] = request.excludeAccountIdsScope;
    }

    if (!$dara.isNull(request.excludeFolderIdsScope)) {
      body["ExcludeFolderIdsScope"] = request.excludeFolderIdsScope;
    }

    if (!$dara.isNull(request.excludeRegionIdsScope)) {
      body["ExcludeRegionIdsScope"] = request.excludeRegionIdsScope;
    }

    if (!$dara.isNull(request.excludeResourceGroupIdsScope)) {
      body["ExcludeResourceGroupIdsScope"] = request.excludeResourceGroupIdsScope;
    }

    if (!$dara.isNull(request.excludeResourceIdsScope)) {
      body["ExcludeResourceIdsScope"] = request.excludeResourceIdsScope;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.excludeTagsScope)) {
      bodyFlat["ExcludeTagsScope"] = request.excludeTagsScope;
    }

    if (!$dara.isNull(request.folderIdsScope)) {
      body["FolderIdsScope"] = request.folderIdsScope;
    }

    if (!$dara.isNull(request.inputParametersShrink)) {
      body["InputParameters"] = request.inputParametersShrink;
    }

    if (!$dara.isNull(request.maximumExecutionFrequency)) {
      body["MaximumExecutionFrequency"] = request.maximumExecutionFrequency;
    }

    if (!$dara.isNull(request.regionIdsScope)) {
      body["RegionIdsScope"] = request.regionIdsScope;
    }

    if (!$dara.isNull(request.resourceGroupIdsScope)) {
      body["ResourceGroupIdsScope"] = request.resourceGroupIdsScope;
    }

    if (!$dara.isNull(request.resourceIdsScope)) {
      body["ResourceIdsScope"] = request.resourceIdsScope;
    }

    if (!$dara.isNull(request.resourceNameScope)) {
      body["ResourceNameScope"] = request.resourceNameScope;
    }

    if (!$dara.isNull(request.resourceTypesScopeShrink)) {
      body["ResourceTypesScope"] = request.resourceTypesScopeShrink;
    }

    if (!$dara.isNull(request.riskLevel)) {
      body["RiskLevel"] = request.riskLevel;
    }

    if (!$dara.isNull(request.tagKeyLogicScope)) {
      body["TagKeyLogicScope"] = request.tagKeyLogicScope;
    }

    if (!$dara.isNull(request.tagKeyScope)) {
      body["TagKeyScope"] = request.tagKeyScope;
    }

    if (!$dara.isNull(request.tagValueScope)) {
      body["TagValueScope"] = request.tagValueScope;
    }

    if (!$dara.isNull(request.tagsScope)) {
      bodyFlat["TagsScope"] = request.tagsScope;
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
      action: "UpdateAggregateConfigRule",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAggregateConfigRuleResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAggregateConfigRuleResponse({}));
  }

  /**
   * Modifies the description, input parameters, and risk level of a rule in a specified account group.
   * 
   * @remarks
   * This topic provides an example of how to change the risk level of the rule `cr-4e3d626622af0080****` in the account group `ca-a4e5626622af0079****` to `3` (low risk).
   * 
   * @param request - UpdateAggregateConfigRuleRequest
   * @returns UpdateAggregateConfigRuleResponse
   */
  async updateAggregateConfigRule(request: $_model.UpdateAggregateConfigRuleRequest): Promise<$_model.UpdateAggregateConfigRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAggregateConfigRuleWithOptions(request, runtime);
  }

  /**
   * Updates a specified rule remediation.
   * 
   * @remarks
   * This topic provides an example of how to change the execution mode of the remediation `crr-909ba2d4716700eb****` to `AUTO_EXECUTION` (automatic execution) for a rule in the account group `ca-6b4a626622af0012****`.
   * 
   * @param request - UpdateAggregateRemediationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAggregateRemediationResponse
   */
  async updateAggregateRemediationWithOptions(request: $_model.UpdateAggregateRemediationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAggregateRemediationResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.aggregatorId)) {
      body["AggregatorId"] = request.aggregatorId;
    }

    if (!$dara.isNull(request.invokeType)) {
      body["InvokeType"] = request.invokeType;
    }

    if (!$dara.isNull(request.params)) {
      body["Params"] = request.params;
    }

    if (!$dara.isNull(request.remediationId)) {
      body["RemediationId"] = request.remediationId;
    }

    if (!$dara.isNull(request.remediationTemplateId)) {
      body["RemediationTemplateId"] = request.remediationTemplateId;
    }

    if (!$dara.isNull(request.remediationType)) {
      body["RemediationType"] = request.remediationType;
    }

    if (!$dara.isNull(request.sourceType)) {
      body["SourceType"] = request.sourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAggregateRemediation",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAggregateRemediationResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAggregateRemediationResponse({}));
  }

  /**
   * Updates a specified rule remediation.
   * 
   * @remarks
   * This topic provides an example of how to change the execution mode of the remediation `crr-909ba2d4716700eb****` to `AUTO_EXECUTION` (automatic execution) for a rule in the account group `ca-6b4a626622af0012****`.
   * 
   * @param request - UpdateAggregateRemediationRequest
   * @returns UpdateAggregateRemediationResponse
   */
  async updateAggregateRemediation(request: $_model.UpdateAggregateRemediationRequest): Promise<$_model.UpdateAggregateRemediationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAggregateRemediationWithOptions(request, runtime);
  }

  /**
   * The management account or a delegated administrator account of a resource directory can modify the name and description of an account group, and add or remove members.
   * 
   * @remarks
   * This topic provides an example of how to add a member to the account group `ca-dacf86d8314e00eb****`. The member has an ID of `173808452267****`, a name of `Tony`, and an account type of `ResourceDirectory`.
   * 
   * @param tmpReq - UpdateAggregatorRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAggregatorResponse
   */
  async updateAggregatorWithOptions(tmpReq: $_model.UpdateAggregatorRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAggregatorResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateAggregatorShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.aggregatorAccounts)) {
      request.aggregatorAccountsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.aggregatorAccounts, "AggregatorAccounts", "json");
    }

    if (!$dara.isNull(tmpReq.tag)) {
      request.tagShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tag, "Tag", "json");
    }

    let query = { };
    if (!$dara.isNull(request.tagShrink)) {
      query["Tag"] = request.tagShrink;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.aggregatorAccountsShrink)) {
      body["AggregatorAccounts"] = request.aggregatorAccountsShrink;
    }

    if (!$dara.isNull(request.aggregatorId)) {
      body["AggregatorId"] = request.aggregatorId;
    }

    if (!$dara.isNull(request.aggregatorName)) {
      body["AggregatorName"] = request.aggregatorName;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.folderId)) {
      body["FolderId"] = request.folderId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAggregator",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAggregatorResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAggregatorResponse({}));
  }

  /**
   * The management account or a delegated administrator account of a resource directory can modify the name and description of an account group, and add or remove members.
   * 
   * @remarks
   * This topic provides an example of how to add a member to the account group `ca-dacf86d8314e00eb****`. The member has an ID of `173808452267****`, a name of `Tony`, and an account type of `ResourceDirectory`.
   * 
   * @param request - UpdateAggregatorRequest
   * @returns UpdateAggregatorResponse
   */
  async updateAggregator(request: $_model.UpdateAggregatorRequest): Promise<$_model.UpdateAggregatorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAggregatorWithOptions(request, runtime);
  }

  /**
   * Updates the configuration of a specified compliance pack in the current account.
   * 
   * @remarks
   * This topic provides an example of how to change the parameter value for the `eip-bandwidth-limit` rule to `20` in the compliance pack `cp-a8a8626622af0082****`.
   * 
   * @param tmpReq - UpdateCompliancePackRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateCompliancePackResponse
   */
  async updateCompliancePackWithOptions(tmpReq: $_model.UpdateCompliancePackRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateCompliancePackResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateCompliancePackShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.configRules)) {
      request.configRulesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.configRules, "ConfigRules", "json");
    }

    if (!$dara.isNull(tmpReq.tag)) {
      request.tagShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tag, "Tag", "json");
    }

    let query = { };
    if (!$dara.isNull(request.tagShrink)) {
      query["Tag"] = request.tagShrink;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.compliancePackId)) {
      body["CompliancePackId"] = request.compliancePackId;
    }

    if (!$dara.isNull(request.compliancePackName)) {
      body["CompliancePackName"] = request.compliancePackName;
    }

    if (!$dara.isNull(request.configRulesShrink)) {
      body["ConfigRules"] = request.configRulesShrink;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.excludeRegionIdsScope)) {
      body["ExcludeRegionIdsScope"] = request.excludeRegionIdsScope;
    }

    if (!$dara.isNull(request.excludeResourceGroupIdsScope)) {
      body["ExcludeResourceGroupIdsScope"] = request.excludeResourceGroupIdsScope;
    }

    if (!$dara.isNull(request.excludeResourceIdsScope)) {
      body["ExcludeResourceIdsScope"] = request.excludeResourceIdsScope;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.excludeTagsScope)) {
      bodyFlat["ExcludeTagsScope"] = request.excludeTagsScope;
    }

    if (!$dara.isNull(request.regionIdsScope)) {
      body["RegionIdsScope"] = request.regionIdsScope;
    }

    if (!$dara.isNull(request.resourceGroupIdsScope)) {
      body["ResourceGroupIdsScope"] = request.resourceGroupIdsScope;
    }

    if (!$dara.isNull(request.resourceIdsScope)) {
      body["ResourceIdsScope"] = request.resourceIdsScope;
    }

    if (!$dara.isNull(request.riskLevel)) {
      body["RiskLevel"] = request.riskLevel;
    }

    if (!$dara.isNull(request.tagKeyScope)) {
      body["TagKeyScope"] = request.tagKeyScope;
    }

    if (!$dara.isNull(request.tagValueScope)) {
      body["TagValueScope"] = request.tagValueScope;
    }

    if (!$dara.isNull(request.tagsScope)) {
      bodyFlat["TagsScope"] = request.tagsScope;
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
      action: "UpdateCompliancePack",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateCompliancePackResponse>(await this.callApi(params, req, runtime), new $_model.UpdateCompliancePackResponse({}));
  }

  /**
   * Updates the configuration of a specified compliance pack in the current account.
   * 
   * @remarks
   * This topic provides an example of how to change the parameter value for the `eip-bandwidth-limit` rule to `20` in the compliance pack `cp-a8a8626622af0082****`.
   * 
   * @param request - UpdateCompliancePackRequest
   * @returns UpdateCompliancePackResponse
   */
  async updateCompliancePack(request: $_model.UpdateCompliancePackRequest): Promise<$_model.UpdateCompliancePackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateCompliancePackWithOptions(request, runtime);
  }

  /**
   * This operation modifies a delivery channel for the current account.
   * 
   * @remarks
   * This topic provides an example of how to change the status of the delivery channel `cdc-8e45ff4e06a3a8****` to `0` (disabled). After you disable the delivery channel, Cloud Config retains the most recent delivery configuration and stops delivering resource data.
   * 
   * @param request - UpdateConfigDeliveryChannelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateConfigDeliveryChannelResponse
   */
  async updateConfigDeliveryChannelWithOptions(request: $_model.UpdateConfigDeliveryChannelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateConfigDeliveryChannelResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.compliantSnapshot)) {
      query["CompliantSnapshot"] = request.compliantSnapshot;
    }

    if (!$dara.isNull(request.configurationItemChangeNotification)) {
      query["ConfigurationItemChangeNotification"] = request.configurationItemChangeNotification;
    }

    if (!$dara.isNull(request.configurationSnapshot)) {
      query["ConfigurationSnapshot"] = request.configurationSnapshot;
    }

    if (!$dara.isNull(request.deliveryChannelCondition)) {
      query["DeliveryChannelCondition"] = request.deliveryChannelCondition;
    }

    if (!$dara.isNull(request.deliveryChannelId)) {
      query["DeliveryChannelId"] = request.deliveryChannelId;
    }

    if (!$dara.isNull(request.deliveryChannelName)) {
      query["DeliveryChannelName"] = request.deliveryChannelName;
    }

    if (!$dara.isNull(request.deliveryChannelTargetArn)) {
      query["DeliveryChannelTargetArn"] = request.deliveryChannelTargetArn;
    }

    if (!$dara.isNull(request.deliverySnapshotTime)) {
      query["DeliverySnapshotTime"] = request.deliverySnapshotTime;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.nonCompliantNotification)) {
      query["NonCompliantNotification"] = request.nonCompliantNotification;
    }

    if (!$dara.isNull(request.oversizedDataOSSTargetArn)) {
      query["OversizedDataOSSTargetArn"] = request.oversizedDataOSSTargetArn;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateConfigDeliveryChannel",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateConfigDeliveryChannelResponse>(await this.callApi(params, req, runtime), new $_model.UpdateConfigDeliveryChannelResponse({}));
  }

  /**
   * This operation modifies a delivery channel for the current account.
   * 
   * @remarks
   * This topic provides an example of how to change the status of the delivery channel `cdc-8e45ff4e06a3a8****` to `0` (disabled). After you disable the delivery channel, Cloud Config retains the most recent delivery configuration and stops delivering resource data.
   * 
   * @param request - UpdateConfigDeliveryChannelRequest
   * @returns UpdateConfigDeliveryChannelResponse
   */
  async updateConfigDeliveryChannel(request: $_model.UpdateConfigDeliveryChannelRequest): Promise<$_model.UpdateConfigDeliveryChannelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateConfigDeliveryChannelWithOptions(request, runtime);
  }

  /**
   * Modifies the description, input parameters, and risk level of a rule.
   * 
   * @remarks
   * This topic provides an example of how to change the risk level of the rule `cr-a260626622af0005****` to `3` (low risk).
   * 
   * @param tmpReq - UpdateConfigRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateConfigRuleResponse
   */
  async updateConfigRuleWithOptions(tmpReq: $_model.UpdateConfigRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateConfigRuleResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateConfigRuleShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.inputParameters)) {
      request.inputParametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.inputParameters, "InputParameters", "json");
    }

    if (!$dara.isNull(tmpReq.resourceTypesScope)) {
      request.resourceTypesScopeShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceTypesScope, "ResourceTypesScope", "simple");
    }

    if (!$dara.isNull(tmpReq.tag)) {
      request.tagShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tag, "Tag", "json");
    }

    let query = { };
    if (!$dara.isNull(request.tagShrink)) {
      query["Tag"] = request.tagShrink;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.conditions)) {
      body["Conditions"] = request.conditions;
    }

    if (!$dara.isNull(request.configRuleId)) {
      body["ConfigRuleId"] = request.configRuleId;
    }

    if (!$dara.isNull(request.configRuleName)) {
      body["ConfigRuleName"] = request.configRuleName;
    }

    if (!$dara.isNull(request.configRuleTriggerTypes)) {
      body["ConfigRuleTriggerTypes"] = request.configRuleTriggerTypes;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.excludeRegionIdsScope)) {
      body["ExcludeRegionIdsScope"] = request.excludeRegionIdsScope;
    }

    if (!$dara.isNull(request.excludeResourceGroupIdsScope)) {
      body["ExcludeResourceGroupIdsScope"] = request.excludeResourceGroupIdsScope;
    }

    if (!$dara.isNull(request.excludeResourceIdsScope)) {
      body["ExcludeResourceIdsScope"] = request.excludeResourceIdsScope;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.excludeTagsScope)) {
      bodyFlat["ExcludeTagsScope"] = request.excludeTagsScope;
    }

    if (!$dara.isNull(request.extendContent)) {
      body["ExtendContent"] = request.extendContent;
    }

    if (!$dara.isNull(request.inputParametersShrink)) {
      body["InputParameters"] = request.inputParametersShrink;
    }

    if (!$dara.isNull(request.maximumExecutionFrequency)) {
      body["MaximumExecutionFrequency"] = request.maximumExecutionFrequency;
    }

    if (!$dara.isNull(request.regionIdsScope)) {
      body["RegionIdsScope"] = request.regionIdsScope;
    }

    if (!$dara.isNull(request.resourceGroupIdsScope)) {
      body["ResourceGroupIdsScope"] = request.resourceGroupIdsScope;
    }

    if (!$dara.isNull(request.resourceIdsScope)) {
      body["ResourceIdsScope"] = request.resourceIdsScope;
    }

    if (!$dara.isNull(request.resourceNameScope)) {
      body["ResourceNameScope"] = request.resourceNameScope;
    }

    if (!$dara.isNull(request.resourceTypesScopeShrink)) {
      body["ResourceTypesScope"] = request.resourceTypesScopeShrink;
    }

    if (!$dara.isNull(request.riskLevel)) {
      body["RiskLevel"] = request.riskLevel;
    }

    if (!$dara.isNull(request.tagKeyLogicScope)) {
      body["TagKeyLogicScope"] = request.tagKeyLogicScope;
    }

    if (!$dara.isNull(request.tagKeyScope)) {
      body["TagKeyScope"] = request.tagKeyScope;
    }

    if (!$dara.isNull(request.tagValueScope)) {
      body["TagValueScope"] = request.tagValueScope;
    }

    if (!$dara.isNull(request.tagsScope)) {
      bodyFlat["TagsScope"] = request.tagsScope;
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
      action: "UpdateConfigRule",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateConfigRuleResponse>(await this.callApi(params, req, runtime), new $_model.UpdateConfigRuleResponse({}));
  }

  /**
   * Modifies the description, input parameters, and risk level of a rule.
   * 
   * @remarks
   * This topic provides an example of how to change the risk level of the rule `cr-a260626622af0005****` to `3` (low risk).
   * 
   * @param request - UpdateConfigRuleRequest
   * @returns UpdateConfigRuleResponse
   */
  async updateConfigRule(request: $_model.UpdateConfigRuleRequest): Promise<$_model.UpdateConfigRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateConfigRuleWithOptions(request, runtime);
  }

  /**
   * 修改配置审计监控资源范围
   * 
   * @param request - UpdateConfigurationRecorderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateConfigurationRecorderResponse
   */
  async updateConfigurationRecorderWithOptions(request: $_model.UpdateConfigurationRecorderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateConfigurationRecorderResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.resourceTypes)) {
      body["ResourceTypes"] = request.resourceTypes;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateConfigurationRecorder",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateConfigurationRecorderResponse>(await this.callApi(params, req, runtime), new $_model.UpdateConfigurationRecorderResponse({}));
  }

  /**
   * 修改配置审计监控资源范围
   * 
   * @param request - UpdateConfigurationRecorderRequest
   * @returns UpdateConfigurationRecorderResponse
   */
  async updateConfigurationRecorder(request: $_model.UpdateConfigurationRecorderRequest): Promise<$_model.UpdateConfigurationRecorderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateConfigurationRecorderWithOptions(request, runtime);
  }

  /**
   * 修改云产品集成用户状态
   * 
   * @param request - UpdateIntegratedServiceStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateIntegratedServiceStatusResponse
   */
  async updateIntegratedServiceStatusWithOptions(request: $_model.UpdateIntegratedServiceStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateIntegratedServiceStatusResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.aggregatorDeliveryDataType)) {
      body["AggregatorDeliveryDataType"] = request.aggregatorDeliveryDataType;
    }

    if (!$dara.isNull(request.integratedTypes)) {
      body["IntegratedTypes"] = request.integratedTypes;
    }

    if (!$dara.isNull(request.serviceCode)) {
      body["ServiceCode"] = request.serviceCode;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateIntegratedServiceStatus",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateIntegratedServiceStatusResponse>(await this.callApi(params, req, runtime), new $_model.UpdateIntegratedServiceStatusResponse({}));
  }

  /**
   * 修改云产品集成用户状态
   * 
   * @param request - UpdateIntegratedServiceStatusRequest
   * @returns UpdateIntegratedServiceStatusResponse
   */
  async updateIntegratedServiceStatus(request: $_model.UpdateIntegratedServiceStatusRequest): Promise<$_model.UpdateIntegratedServiceStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateIntegratedServiceStatusWithOptions(request, runtime);
  }

  /**
   * Updates the specified remediation setting.
   * 
   * @remarks
   * This topic provides an example of how to change the execution mode for the remediation setting `crr-909ba2d4716700eb****` to `AUTO_EXECUTION` (automatic execution).
   * 
   * @param request - UpdateRemediationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateRemediationResponse
   */
  async updateRemediationWithOptions(request: $_model.UpdateRemediationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateRemediationResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.invokeType)) {
      body["InvokeType"] = request.invokeType;
    }

    if (!$dara.isNull(request.params)) {
      body["Params"] = request.params;
    }

    if (!$dara.isNull(request.remediationId)) {
      body["RemediationId"] = request.remediationId;
    }

    if (!$dara.isNull(request.remediationTemplateId)) {
      body["RemediationTemplateId"] = request.remediationTemplateId;
    }

    if (!$dara.isNull(request.remediationType)) {
      body["RemediationType"] = request.remediationType;
    }

    if (!$dara.isNull(request.sourceType)) {
      body["SourceType"] = request.sourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateRemediation",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateRemediationResponse>(await this.callApi(params, req, runtime), new $_model.UpdateRemediationResponse({}));
  }

  /**
   * Updates the specified remediation setting.
   * 
   * @remarks
   * This topic provides an example of how to change the execution mode for the remediation setting `crr-909ba2d4716700eb****` to `AUTO_EXECUTION` (automatic execution).
   * 
   * @param request - UpdateRemediationRequest
   * @returns UpdateRemediationResponse
   */
  async updateRemediation(request: $_model.UpdateRemediationRequest): Promise<$_model.UpdateRemediationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateRemediationWithOptions(request, runtime);
  }

  /**
   * Updates a compliance report template.
   * 
   * @param tmpReq - UpdateReportTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateReportTemplateResponse
   */
  async updateReportTemplateWithOptions(tmpReq: $_model.UpdateReportTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateReportTemplateResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateReportTemplateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.reportScope)) {
      request.reportScopeShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.reportScope, "ReportScope", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.reportFileFormats)) {
      body["ReportFileFormats"] = request.reportFileFormats;
    }

    if (!$dara.isNull(request.reportGranularity)) {
      body["ReportGranularity"] = request.reportGranularity;
    }

    if (!$dara.isNull(request.reportLanguage)) {
      body["ReportLanguage"] = request.reportLanguage;
    }

    if (!$dara.isNull(request.reportScopeShrink)) {
      body["ReportScope"] = request.reportScopeShrink;
    }

    if (!$dara.isNull(request.reportTemplateDescription)) {
      body["ReportTemplateDescription"] = request.reportTemplateDescription;
    }

    if (!$dara.isNull(request.reportTemplateId)) {
      body["ReportTemplateId"] = request.reportTemplateId;
    }

    if (!$dara.isNull(request.reportTemplateName)) {
      body["ReportTemplateName"] = request.reportTemplateName;
    }

    if (!$dara.isNull(request.subscriptionFrequency)) {
      body["SubscriptionFrequency"] = request.subscriptionFrequency;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateReportTemplate",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateReportTemplateResponse>(await this.callApi(params, req, runtime), new $_model.UpdateReportTemplateResponse({}));
  }

  /**
   * Updates a compliance report template.
   * 
   * @param request - UpdateReportTemplateRequest
   * @returns UpdateReportTemplateResponse
   */
  async updateReportTemplate(request: $_model.UpdateReportTemplateRequest): Promise<$_model.UpdateReportTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateReportTemplateWithOptions(request, runtime);
  }

}
