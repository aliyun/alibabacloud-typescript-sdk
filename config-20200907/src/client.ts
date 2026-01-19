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
   * Enables one or more rules in an account group. After a rule is enabled, the rule continues to automatically evaluate resources based on the trigger mechanism.
   * 
   * @remarks
   * Enables one or more rules in an account group. After a rule is enabled, the rule continues to automatically evaluate resources based on the trigger mechanism.
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
   * Enables one or more rules in an account group. After a rule is enabled, the rule continues to automatically evaluate resources based on the trigger mechanism.
   * 
   * @remarks
   * Enables one or more rules in an account group. After a rule is enabled, the rule continues to automatically evaluate resources based on the trigger mechanism.
   * 
   * @param request - ActiveAggregateConfigRulesRequest
   * @returns ActiveAggregateConfigRulesResponse
   */
  async activeAggregateConfigRules(request: $_model.ActiveAggregateConfigRulesRequest): Promise<$_model.ActiveAggregateConfigRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.activeAggregateConfigRulesWithOptions(request, runtime);
  }

  /**
   * Enables a rule in Cloud Config. After a rule is enabled, Cloud Config automatically evaluates the compliance of a resource based on the trigger mechanism of the rule.
   * 
   * @remarks
   * ### [](#)Prerequisites
   * The rule is in the `INACTIVE` state.
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
   * Enables a rule in Cloud Config. After a rule is enabled, Cloud Config automatically evaluates the compliance of a resource based on the trigger mechanism of the rule.
   * 
   * @remarks
   * ### [](#)Prerequisites
   * The rule is in the `INACTIVE` state.
   * 
   * @param request - ActiveConfigRulesRequest
   * @returns ActiveConfigRulesResponse
   */
  async activeConfigRules(request: $_model.ActiveConfigRulesRequest): Promise<$_model.ActiveConfigRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.activeConfigRulesWithOptions(request, runtime);
  }

  /**
   * Adds one or more rules in an account group to a compliance package.
   * 
   * @remarks
   * The sample request in this topic shows you how to add the `cr-6cc4626622af00e7****` rule in the `ca-75b4626622af00c3****` account group to the `cp-5bb1626622af00bd****` compliance package.
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
   * Adds one or more rules in an account group to a compliance package.
   * 
   * @remarks
   * The sample request in this topic shows you how to add the `cr-6cc4626622af00e7****` rule in the `ca-75b4626622af00c3****` account group to the `cp-5bb1626622af00bd****` compliance package.
   * 
   * @param request - AttachAggregateConfigRuleToCompliancePackRequest
   * @returns AttachAggregateConfigRuleToCompliancePackResponse
   */
  async attachAggregateConfigRuleToCompliancePack(request: $_model.AttachAggregateConfigRuleToCompliancePackRequest): Promise<$_model.AttachAggregateConfigRuleToCompliancePackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.attachAggregateConfigRuleToCompliancePackWithOptions(request, runtime);
  }

  /**
   * Adds one or more rules to a compliance package.
   * 
   * @remarks
   * This topic provides an example on how to add the `cr-6cc4626622af00e7****` rule to the `cp-5bb1626622af00bd****` compliance package.
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
   * Adds one or more rules to a compliance package.
   * 
   * @remarks
   * This topic provides an example on how to add the `cr-6cc4626622af00e7****` rule to the `cp-5bb1626622af00bd****` compliance package.
   * 
   * @param request - AttachConfigRuleToCompliancePackRequest
   * @returns AttachConfigRuleToCompliancePackResponse
   */
  async attachConfigRuleToCompliancePack(request: $_model.AttachConfigRuleToCompliancePackRequest): Promise<$_model.AttachConfigRuleToCompliancePackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.attachConfigRuleToCompliancePackWithOptions(request, runtime);
  }

  /**
   * Replicates compliance packages.
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
   * Replicates compliance packages.
   * 
   * @param request - CopyCompliancePacksRequest
   * @returns CopyCompliancePacksResponse
   */
  async copyCompliancePacks(request: $_model.CopyCompliancePacksRequest): Promise<$_model.CopyCompliancePacksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.copyCompliancePacksWithOptions(request, runtime);
  }

  /**
   * Replicates rules.
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
   * Replicates rules.
   * 
   * @param request - CopyConfigRulesRequest
   * @returns CopyConfigRulesResponse
   */
  async copyConfigRules(request: $_model.CopyConfigRulesRequest): Promise<$_model.CopyConfigRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.copyConfigRulesWithOptions(request, runtime);
  }

  /**
   * Creates a downloadable resource file for the current Alibaba Cloud account.
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
   * Creates a downloadable resource file for the current Alibaba Cloud account.
   * 
   * @param request - CreateAdvancedSearchFileRequest
   * @returns CreateAdvancedSearchFileResponse
   */
  async createAdvancedSearchFile(request: $_model.CreateAdvancedSearchFileRequest): Promise<$_model.CreateAdvancedSearchFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAdvancedSearchFileWithOptions(request, runtime);
  }

  /**
   * Creates a downloadable resource file for an account group.
   * 
   * @remarks
   * This topic provides an example on how to create a downloadable resource file for an account group whose ID is `ca-edd3626622af00b3****`. The resource file includes all the ECS instances in the account group.
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
   * Creates a downloadable resource file for an account group.
   * 
   * @remarks
   * This topic provides an example on how to create a downloadable resource file for an account group whose ID is `ca-edd3626622af00b3****`. The resource file includes all the ECS instances in the account group.
   * 
   * @param request - CreateAggregateAdvancedSearchFileRequest
   * @returns CreateAggregateAdvancedSearchFileResponse
   */
  async createAggregateAdvancedSearchFile(request: $_model.CreateAggregateAdvancedSearchFileRequest): Promise<$_model.CreateAggregateAdvancedSearchFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAggregateAdvancedSearchFileWithOptions(request, runtime);
  }

  /**
   * Creates a compliance package for an account group.
   * 
   * @remarks
   * This topic provides an example on how to create a compliance package for the account group `ca-f632626622af0079****` by using the compliance package template `ClassifiedProtectionPreCheck`.
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
   * Creates a compliance package for an account group.
   * 
   * @remarks
   * This topic provides an example on how to create a compliance package for the account group `ca-f632626622af0079****` by using the compliance package template `ClassifiedProtectionPreCheck`.
   * 
   * @param request - CreateAggregateCompliancePackRequest
   * @returns CreateAggregateCompliancePackResponse
   */
  async createAggregateCompliancePack(request: $_model.CreateAggregateCompliancePackRequest): Promise<$_model.CreateAggregateCompliancePackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAggregateCompliancePackWithOptions(request, runtime);
  }

  /**
   * Creates a delivery channel for an account group.
   * 
   * @remarks
   * In this example, a delivery channel is created for an account group. The ID of the account group is `ca-a4e5626622af0079****`. The type of the delivery channel is `OSS` and the Alibaba Cloud Resource Name (ARN) of the delivery destination is `acs:oss:cn-shanghai:100931896542****:new-bucket`. The result indicates that the delivery channel is created. The ID of the delivery channel is `cdc-8e45ff4e06a3a8****`.
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
   * Creates a delivery channel for an account group.
   * 
   * @remarks
   * In this example, a delivery channel is created for an account group. The ID of the account group is `ca-a4e5626622af0079****`. The type of the delivery channel is `OSS` and the Alibaba Cloud Resource Name (ARN) of the delivery destination is `acs:oss:cn-shanghai:100931896542****:new-bucket`. The result indicates that the delivery channel is created. The ID of the delivery channel is `cdc-8e45ff4e06a3a8****`.
   * 
   * @param request - CreateAggregateConfigDeliveryChannelRequest
   * @returns CreateAggregateConfigDeliveryChannelResponse
   */
  async createAggregateConfigDeliveryChannel(request: $_model.CreateAggregateConfigDeliveryChannelRequest): Promise<$_model.CreateAggregateConfigDeliveryChannelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAggregateConfigDeliveryChannelWithOptions(request, runtime);
  }

  /**
   * Creates a rule for an account group.
   * 
   * @remarks
   * ### Limits
   * You can create up to 200 rules for each management account.
   * ### Usage notes
   * This topic provides an example on how to create a rule based on the required-tags managed rule in the `ca-a4e5626622af0079****` account group. The returned result shows that the rule is created and its ID is `cr-4e3d626622af0080****`.
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
   * Creates a rule for an account group.
   * 
   * @remarks
   * ### Limits
   * You can create up to 200 rules for each management account.
   * ### Usage notes
   * This topic provides an example on how to create a rule based on the required-tags managed rule in the `ca-a4e5626622af0079****` account group. The returned result shows that the rule is created and its ID is `cr-4e3d626622af0080****`.
   * 
   * @param request - CreateAggregateConfigRuleRequest
   * @returns CreateAggregateConfigRuleResponse
   */
  async createAggregateConfigRule(request: $_model.CreateAggregateConfigRuleRequest): Promise<$_model.CreateAggregateConfigRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAggregateConfigRuleWithOptions(request, runtime);
  }

  /**
   * Creates a remediation template for a rule in an account group.
   * 
   * @remarks
   * This topic provides an example on how to create a remediation template for the rule whose ID is `cr-6b7c626622af00b4****` in the account group whose ID is `ca-6b4a626622af0012****`. The returned result shows that a remediation template is created and the ID of the remediation template is `crr-909ba2d4716700eb****`.
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
   * Creates a remediation template for a rule in an account group.
   * 
   * @remarks
   * This topic provides an example on how to create a remediation template for the rule whose ID is `cr-6b7c626622af00b4****` in the account group whose ID is `ca-6b4a626622af0012****`. The returned result shows that a remediation template is created and the ID of the remediation template is `crr-909ba2d4716700eb****`.
   * 
   * @param request - CreateAggregateRemediationRequest
   * @returns CreateAggregateRemediationResponse
   */
  async createAggregateRemediation(request: $_model.CreateAggregateRemediationRequest): Promise<$_model.CreateAggregateRemediationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAggregateRemediationWithOptions(request, runtime);
  }

  /**
   * Creates an account group.
   * 
   * @remarks
   * Each management account can create a maximum of five account groups. Each account group can contain a maximum of 200 member accounts.
   * Cloud Config supports the following types of account groups:
   * *   Global account group: The global account group contains all the member accounts that are added to the resource directory. A management account can create only one global account group.
   * *   Custom account group: If you create a custom account group, you must manually add all or specific member accounts from the resource directory to the custom account group.
   * This topic provides an example on how to create an account group of the `CUSTOM` type. The custom account group is named `Test_Group`, and its description is `Test account group`. The custom account group contains the following two member accounts:
   * *   Member account ID: `171322098523****`. Member account name: `Alice`.
   * *   Member account ID: `100532098349****`. Member account name: `Tom`.
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
   * Creates an account group.
   * 
   * @remarks
   * Each management account can create a maximum of five account groups. Each account group can contain a maximum of 200 member accounts.
   * Cloud Config supports the following types of account groups:
   * *   Global account group: The global account group contains all the member accounts that are added to the resource directory. A management account can create only one global account group.
   * *   Custom account group: If you create a custom account group, you must manually add all or specific member accounts from the resource directory to the custom account group.
   * This topic provides an example on how to create an account group of the `CUSTOM` type. The custom account group is named `Test_Group`, and its description is `Test account group`. The custom account group contains the following two member accounts:
   * *   Member account ID: `171322098523****`. Member account name: `Alice`.
   * *   Member account ID: `100532098349****`. Member account name: `Tom`.
   * 
   * @param request - CreateAggregatorRequest
   * @returns CreateAggregatorResponse
   */
  async createAggregator(request: $_model.CreateAggregatorRequest): Promise<$_model.CreateAggregatorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAggregatorWithOptions(request, runtime);
  }

  /**
   * Creates a compliance package for the current account.
   * 
   * @remarks
   * Each ordinary account can create up to five compliance packages.
   * This topic provides an example on how to create a compliance package named ClassifiedProtectionPreCheck. The compliance package contains a managed rule named `eip-bandwidth-limit`.
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
   * Creates a compliance package for the current account.
   * 
   * @remarks
   * Each ordinary account can create up to five compliance packages.
   * This topic provides an example on how to create a compliance package named ClassifiedProtectionPreCheck. The compliance package contains a managed rule named `eip-bandwidth-limit`.
   * 
   * @param request - CreateCompliancePackRequest
   * @returns CreateCompliancePackResponse
   */
  async createCompliancePack(request: $_model.CreateCompliancePackRequest): Promise<$_model.CreateCompliancePackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCompliancePackWithOptions(request, runtime);
  }

  /**
   * Creates a delivery channel.
   * 
   * @remarks
   * In this example, a delivery channel is created. The type of the delivery channel is `OSS` and the Alibaba Cloud Resource Name (ARN) of the delivery destination is `acs:oss:cn-shanghai:100931896542****:new-bucket`. The result indicates that the delivery channel is created, and the ID of the delivery channel is `cdc-8e45ff4e06a3a8****`.
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
   * Creates a delivery channel.
   * 
   * @remarks
   * In this example, a delivery channel is created. The type of the delivery channel is `OSS` and the Alibaba Cloud Resource Name (ARN) of the delivery destination is `acs:oss:cn-shanghai:100931896542****:new-bucket`. The result indicates that the delivery channel is created, and the ID of the delivery channel is `cdc-8e45ff4e06a3a8****`.
   * 
   * @param request - CreateConfigDeliveryChannelRequest
   * @returns CreateConfigDeliveryChannelResponse
   */
  async createConfigDeliveryChannel(request: $_model.CreateConfigDeliveryChannelRequest): Promise<$_model.CreateConfigDeliveryChannelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createConfigDeliveryChannelWithOptions(request, runtime);
  }

  /**
   * Creates a rule for the current account.
   * 
   * @remarks
   * ## Limits
   * You can use a common account to create up to 200 rules.
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
   * Creates a rule for the current account.
   * 
   * @remarks
   * ## Limits
   * You can use a common account to create up to 200 rules.
   * 
   * @param request - CreateConfigRuleRequest
   * @returns CreateConfigRuleResponse
   */
  async createConfigRule(request: $_model.CreateConfigRuleRequest): Promise<$_model.CreateConfigRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createConfigRuleWithOptions(request, runtime);
  }

  /**
   * Creates a remediation template for a rule.
   * 
   * @remarks
   * This topic provides an example on how to create a remediation template for the rule `cr-8a973ac2e2be00a2****`. The returned result shows that a remediation template is created and the ID of the remediation template is `crr-909ba2d4716700eb****`.
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
   * Creates a remediation template for a rule.
   * 
   * @remarks
   * This topic provides an example on how to create a remediation template for the rule `cr-8a973ac2e2be00a2****`. The returned result shows that a remediation template is created and the ID of the remediation template is `crr-909ba2d4716700eb****`.
   * 
   * @param request - CreateRemediationRequest
   * @returns CreateRemediationResponse
   */
  async createRemediation(request: $_model.CreateRemediationRequest): Promise<$_model.CreateRemediationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createRemediationWithOptions(request, runtime);
  }

  /**
   * Disables one or more rules in an account group. After a rule is disabled, the resource in the rule is no longer evaluated. The compliance evaluation results before the rule is disabled are still displayed.
   * 
   * @remarks
   * ### [](#)Prerequisites
   * The status of the rule is `ACTIVE`.
   * ### [](#)Description
   * This topic provides an example on how to disable the `cr-5772ba41209e007b****` rule in the `ca-04b3fd170e340007****` account group.
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
   * Disables one or more rules in an account group. After a rule is disabled, the resource in the rule is no longer evaluated. The compliance evaluation results before the rule is disabled are still displayed.
   * 
   * @remarks
   * ### [](#)Prerequisites
   * The status of the rule is `ACTIVE`.
   * ### [](#)Description
   * This topic provides an example on how to disable the `cr-5772ba41209e007b****` rule in the `ca-04b3fd170e340007****` account group.
   * 
   * @param request - DeactiveAggregateConfigRulesRequest
   * @returns DeactiveAggregateConfigRulesResponse
   */
  async deactiveAggregateConfigRules(request: $_model.DeactiveAggregateConfigRulesRequest): Promise<$_model.DeactiveAggregateConfigRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deactiveAggregateConfigRulesWithOptions(request, runtime);
  }

  /**
   * Disables a rule. After a rule is disabled, the resource in the rule is no longer evaluated. The compliance evaluation results before the rule is disabled are still displayed.
   * 
   * @remarks
   * ### [](#)Prerequisites
   * The status of the rule is `ACTIVE`.
   * ### [](#)Description
   * This topic provides an example on how to disable the `cr-19a56457e0d90058****` rule.
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
   * Disables a rule. After a rule is disabled, the resource in the rule is no longer evaluated. The compliance evaluation results before the rule is disabled are still displayed.
   * 
   * @remarks
   * ### [](#)Prerequisites
   * The status of the rule is `ACTIVE`.
   * ### [](#)Description
   * This topic provides an example on how to disable the `cr-19a56457e0d90058****` rule.
   * 
   * @param request - DeactiveConfigRulesRequest
   * @returns DeactiveConfigRulesResponse
   */
  async deactiveConfigRules(request: $_model.DeactiveConfigRulesRequest): Promise<$_model.DeactiveConfigRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deactiveConfigRulesWithOptions(request, runtime);
  }

  /**
   * Deletes the compliance packages of an account group.
   * 
   * @remarks
   * This topic provides an example on how to delete the `cp-541e626622af0087****` compliance package from the `ca-04b3fd170e340007****` account group.
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
   * Deletes the compliance packages of an account group.
   * 
   * @remarks
   * This topic provides an example on how to delete the `cp-541e626622af0087****` compliance package from the `ca-04b3fd170e340007****` account group.
   * 
   * @param request - DeleteAggregateCompliancePacksRequest
   * @returns DeleteAggregateCompliancePacksResponse
   */
  async deleteAggregateCompliancePacks(request: $_model.DeleteAggregateCompliancePacksRequest): Promise<$_model.DeleteAggregateCompliancePacksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAggregateCompliancePacksWithOptions(request, runtime);
  }

  /**
   * Deletes a delivery channel from an account group.
   * 
   * @remarks
   * This topic provides an example on how to delete the `cdc-38c3013b46c9002c****` delivery channel from the `ca-23c6626622af0041****` account group. The returned result shows that the `cdc-38c3013b46c9002c****` delivery channel is deleted.
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
   * Deletes a delivery channel from an account group.
   * 
   * @remarks
   * This topic provides an example on how to delete the `cdc-38c3013b46c9002c****` delivery channel from the `ca-23c6626622af0041****` account group. The returned result shows that the `cdc-38c3013b46c9002c****` delivery channel is deleted.
   * 
   * @param request - DeleteAggregateConfigDeliveryChannelRequest
   * @returns DeleteAggregateConfigDeliveryChannelResponse
   */
  async deleteAggregateConfigDeliveryChannel(request: $_model.DeleteAggregateConfigDeliveryChannelRequest): Promise<$_model.DeleteAggregateConfigDeliveryChannelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAggregateConfigDeliveryChannelWithOptions(request, runtime);
  }

  /**
   * Deletes one or more rules from an account group. You can delete a rule in the Cloud Config console. After you delete the rule, the configurations of the rule are deleted.
   * 
   * @remarks
   * This topic provides an example on how to delete the `cr-4e3d626622af0080****` rule from the `ca-a4e5626622af0079****` account group.
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
   * Deletes one or more rules from an account group. You can delete a rule in the Cloud Config console. After you delete the rule, the configurations of the rule are deleted.
   * 
   * @remarks
   * This topic provides an example on how to delete the `cr-4e3d626622af0080****` rule from the `ca-a4e5626622af0079****` account group.
   * 
   * @param request - DeleteAggregateConfigRulesRequest
   * @returns DeleteAggregateConfigRulesResponse
   */
  async deleteAggregateConfigRules(request: $_model.DeleteAggregateConfigRulesRequest): Promise<$_model.DeleteAggregateConfigRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAggregateConfigRulesWithOptions(request, runtime);
  }

  /**
   * Deletes one or more remediation templates from a rule in an account group.
   * 
   * @remarks
   * This topic provides an example on how to delete the remediation template whose ID is `crr-909ba2d4716700eb****` from the account group whose ID is `ca-6b4a626622af0012****`. The returned result shows that the remediation template whose ID is `crr-909ba2d4716700eb****` is deleted.
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
   * Deletes one or more remediation templates from a rule in an account group.
   * 
   * @remarks
   * This topic provides an example on how to delete the remediation template whose ID is `crr-909ba2d4716700eb****` from the account group whose ID is `ca-6b4a626622af0012****`. The returned result shows that the remediation template whose ID is `crr-909ba2d4716700eb****` is deleted.
   * 
   * @param request - DeleteAggregateRemediationsRequest
   * @returns DeleteAggregateRemediationsResponse
   */
  async deleteAggregateRemediations(request: $_model.DeleteAggregateRemediationsRequest): Promise<$_model.DeleteAggregateRemediationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAggregateRemediationsWithOptions(request, runtime);
  }

  /**
   * The management account or delegated administrator account of a resource directory can delete an account group.
   * 
   * @remarks
   * ### [](#)Background information
   * After you delete an account group, the following changes occur to Cloud Config:
   * *   The rules and compliance packages of the account group are deleted and cannot be recovered.
   * *   All compliance results generated in the account group are automatically deleted and cannot be recovered.
   * *   Service-linked roles for Cloud Config of member accounts in the account group are retained.
   * *   If the account groups to which a member belongs are all deleted, the member account uses Cloud Config as an independent Alibaba Cloud account.
   * ### [](#)Description
   * This topic provides an example on how to delete the account group whose ID is `ca-9190626622af00a9****`.
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
   * The management account or delegated administrator account of a resource directory can delete an account group.
   * 
   * @remarks
   * ### [](#)Background information
   * After you delete an account group, the following changes occur to Cloud Config:
   * *   The rules and compliance packages of the account group are deleted and cannot be recovered.
   * *   All compliance results generated in the account group are automatically deleted and cannot be recovered.
   * *   Service-linked roles for Cloud Config of member accounts in the account group are retained.
   * *   If the account groups to which a member belongs are all deleted, the member account uses Cloud Config as an independent Alibaba Cloud account.
   * ### [](#)Description
   * This topic provides an example on how to delete the account group whose ID is `ca-9190626622af00a9****`.
   * 
   * @param request - DeleteAggregatorsRequest
   * @returns DeleteAggregatorsResponse
   */
  async deleteAggregators(request: $_model.DeleteAggregatorsRequest): Promise<$_model.DeleteAggregatorsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAggregatorsWithOptions(request, runtime);
  }

  /**
   * Deletes one or more compliance packages.
   * 
   * @remarks
   * This topic provides an example on how to delete the `cp-541e626622af0087****` compliance package.
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
   * Deletes one or more compliance packages.
   * 
   * @remarks
   * This topic provides an example on how to delete the `cp-541e626622af0087****` compliance package.
   * 
   * @param request - DeleteCompliancePacksRequest
   * @returns DeleteCompliancePacksResponse
   */
  async deleteCompliancePacks(request: $_model.DeleteCompliancePacksRequest): Promise<$_model.DeleteCompliancePacksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCompliancePacksWithOptions(request, runtime);
  }

  /**
   * Deletes a delivery channel.
   * 
   * @remarks
   * This topic provides an example on how to delete the `cdc-38c3013b46c9002c****` delivery channel. The returned result shows that the `cdc-38c3013b46c9002c****` delivery channel is deleted.
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
   * Deletes a delivery channel.
   * 
   * @remarks
   * This topic provides an example on how to delete the `cdc-38c3013b46c9002c****` delivery channel. The returned result shows that the `cdc-38c3013b46c9002c****` delivery channel is deleted.
   * 
   * @param request - DeleteConfigDeliveryChannelRequest
   * @returns DeleteConfigDeliveryChannelResponse
   */
  async deleteConfigDeliveryChannel(request: $_model.DeleteConfigDeliveryChannelRequest): Promise<$_model.DeleteConfigDeliveryChannelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteConfigDeliveryChannelWithOptions(request, runtime);
  }

  /**
   * Deletes rules.
   * 
   * @remarks
   * In this example, the rule whose ID is cr-9908626622af0035\\*\\*\\*\\* is deleted.
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
   * Deletes rules.
   * 
   * @remarks
   * In this example, the rule whose ID is cr-9908626622af0035\\*\\*\\*\\* is deleted.
   * 
   * @param request - DeleteConfigRulesRequest
   * @returns DeleteConfigRulesResponse
   */
  async deleteConfigRules(request: $_model.DeleteConfigRulesRequest): Promise<$_model.DeleteConfigRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteConfigRulesWithOptions(request, runtime);
  }

  /**
   * Deletes one or more configured remediation templates that are associated with a rule.
   * 
   * @remarks
   * This topic provides an example on how to delete the remediation template `crr-909ba2d4716700eb****`. The returned result shows that the remediation template whose ID is `crr-909ba2d4716700eb****` is deleted.
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
   * Deletes one or more configured remediation templates that are associated with a rule.
   * 
   * @remarks
   * This topic provides an example on how to delete the remediation template `crr-909ba2d4716700eb****`. The returned result shows that the remediation template whose ID is `crr-909ba2d4716700eb****` is deleted.
   * 
   * @param request - DeleteRemediationsRequest
   * @returns DeleteRemediationsResponse
   */
  async deleteRemediations(request: $_model.DeleteRemediationsRequest): Promise<$_model.DeleteRemediationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteRemediationsWithOptions(request, runtime);
  }

  /**
   * 删除合规报告模版
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
   * 删除合规报告模版
   * 
   * @param request - DeleteReportTemplateRequest
   * @returns DeleteReportTemplateResponse
   */
  async deleteReportTemplate(request: $_model.DeleteReportTemplateRequest): Promise<$_model.DeleteReportTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteReportTemplateWithOptions(request, runtime);
  }

  /**
   * 批量获取资源详情
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
   * 批量获取资源详情
   * 
   * @param request - DescribeDiscoveredResourceBatchRequest
   * @returns DescribeDiscoveredResourceBatchResponse
   */
  async describeDiscoveredResourceBatch(request: $_model.DescribeDiscoveredResourceBatchRequest): Promise<$_model.DescribeDiscoveredResourceBatchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDiscoveredResourceBatchWithOptions(request, runtime);
  }

  /**
   * 查询用户集成云产品的授权状态
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
   * 查询用户集成云产品的授权状态
   * 
   * @param request - DescribeIntegratedServiceStatusRequest
   * @returns DescribeIntegratedServiceStatusResponse
   */
  async describeIntegratedServiceStatus(request: $_model.DescribeIntegratedServiceStatusRequest): Promise<$_model.DescribeIntegratedServiceStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeIntegratedServiceStatusWithOptions(request, runtime);
  }

  /**
   * This topic provides an example on how to query the details of a remediation configuration whose ID is crr-f381cf0c1c2f004e\\*\\*\\*\\*.
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
   * This topic provides an example on how to query the details of a remediation configuration whose ID is crr-f381cf0c1c2f004e\\*\\*\\*\\*.
   * 
   * @param request - DescribeRemediationRequest
   * @returns DescribeRemediationResponse
   */
  async describeRemediation(request: $_model.DescribeRemediationRequest): Promise<$_model.DescribeRemediationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRemediationWithOptions(request, runtime);
  }

  /**
   * Removes one or more rules in an account group from a compliance package.
   * 
   * @remarks
   * ### Prerequisites
   * One or more rules are added to a compliance package.
   * ### Usage notes
   * The sample request in this topic shows you how to remove the `cr-6cc4626622af00e7****` rule in the `ca-75b4626622af00c3****` account group from the `cp-5bb1626622af00bd****` compliance package.
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
   * Removes one or more rules in an account group from a compliance package.
   * 
   * @remarks
   * ### Prerequisites
   * One or more rules are added to a compliance package.
   * ### Usage notes
   * The sample request in this topic shows you how to remove the `cr-6cc4626622af00e7****` rule in the `ca-75b4626622af00c3****` account group from the `cp-5bb1626622af00bd****` compliance package.
   * 
   * @param request - DetachAggregateConfigRuleToCompliancePackRequest
   * @returns DetachAggregateConfigRuleToCompliancePackResponse
   */
  async detachAggregateConfigRuleToCompliancePack(request: $_model.DetachAggregateConfigRuleToCompliancePackRequest): Promise<$_model.DetachAggregateConfigRuleToCompliancePackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detachAggregateConfigRuleToCompliancePackWithOptions(request, runtime);
  }

  /**
   * Removes one or more rules from a compliance package.
   * 
   * @remarks
   * ### Prerequisites
   * One or more rules are added to a compliance package.
   * ### Usage notes
   * This topic provides an example on how to remove the `cr-6cc4626622af00e7****` rule from the `cp-5bb1626622af00bd****` compliance package.
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
   * Removes one or more rules from a compliance package.
   * 
   * @remarks
   * ### Prerequisites
   * One or more rules are added to a compliance package.
   * ### Usage notes
   * This topic provides an example on how to remove the `cr-6cc4626622af00e7****` rule from the `cp-5bb1626622af00bd****` compliance package.
   * 
   * @param request - DetachConfigRuleToCompliancePackRequest
   * @returns DetachConfigRuleToCompliancePackResponse
   */
  async detachConfigRuleToCompliancePack(request: $_model.DetachConfigRuleToCompliancePackRequest): Promise<$_model.DetachConfigRuleToCompliancePackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detachConfigRuleToCompliancePackWithOptions(request, runtime);
  }

  /**
   * 试运行事前合规预检的规则
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
   * 试运行事前合规预检的规则
   * 
   * @param request - DryRunConfigRuleRequest
   * @returns DryRunConfigRuleResponse
   */
  async dryRunConfigRule(request: $_model.DryRunConfigRuleRequest): Promise<$_model.DryRunConfigRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.dryRunConfigRuleWithOptions(request, runtime);
  }

  /**
   * Executes evaluation rules to evaluate resources.
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
   * Executes evaluation rules to evaluate resources.
   * 
   * @param request - EvaluatePreConfigRulesRequest
   * @returns EvaluatePreConfigRulesResponse
   */
  async evaluatePreConfigRules(request: $_model.EvaluatePreConfigRulesRequest): Promise<$_model.EvaluatePreConfigRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.evaluatePreConfigRulesWithOptions(request, runtime);
  }

  /**
   * Generates a compliance evaluation report based on a compliance package in an account group.
   * 
   * @remarks
   * > You can call this operation to generate the latest compliance evaluation report. To download the report, call the GetAggregateConfigRulesReport operation. For more information, see [GetAggregateCompliancePackReport](https://help.aliyun.com/document_detail/262699.html).
   * This topic provides an example on how to generate a compliance evaluation report based on the `cp-fdc8626622af00f9****` compliance package in the `ca-f632626622af0079****` account group.
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
   * Generates a compliance evaluation report based on a compliance package in an account group.
   * 
   * @remarks
   * > You can call this operation to generate the latest compliance evaluation report. To download the report, call the GetAggregateConfigRulesReport operation. For more information, see [GetAggregateCompliancePackReport](https://help.aliyun.com/document_detail/262699.html).
   * This topic provides an example on how to generate a compliance evaluation report based on the `cp-fdc8626622af00f9****` compliance package in the `ca-f632626622af0079****` account group.
   * 
   * @param request - GenerateAggregateCompliancePackReportRequest
   * @returns GenerateAggregateCompliancePackReportResponse
   */
  async generateAggregateCompliancePackReport(request: $_model.GenerateAggregateCompliancePackReportRequest): Promise<$_model.GenerateAggregateCompliancePackReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.generateAggregateCompliancePackReportWithOptions(request, runtime);
  }

  /**
   * Generates a compliance evaluation report for the rules in a specified account group.
   * 
   * @remarks
   * > You can call this operation to generate the latest compliance evaluation report. To download the report, call the GetAggregateConfigRulesReport operation. For more information, see [GetAggregateConfigRulesReport](https://help.aliyun.com/document_detail/262706.html).
   * The topic provides an example on how to generate a compliance evaluation report based on all rules in the `ca-f632626622af0079****` account group.
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
   * Generates a compliance evaluation report for the rules in a specified account group.
   * 
   * @remarks
   * > You can call this operation to generate the latest compliance evaluation report. To download the report, call the GetAggregateConfigRulesReport operation. For more information, see [GetAggregateConfigRulesReport](https://help.aliyun.com/document_detail/262706.html).
   * The topic provides an example on how to generate a compliance evaluation report based on all rules in the `ca-f632626622af0079****` account group.
   * 
   * @param request - GenerateAggregateConfigRulesReportRequest
   * @returns GenerateAggregateConfigRulesReportResponse
   */
  async generateAggregateConfigRulesReport(request: $_model.GenerateAggregateConfigRulesReportRequest): Promise<$_model.GenerateAggregateConfigRulesReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.generateAggregateConfigRulesReportWithOptions(request, runtime);
  }

  /**
   * Generates a downloadable inventory for global resources in an account group.
   * 
   * @remarks
   * This topic provides an example to show how to generate a downloadable inventory for global resources in the account group ca-a91d626622af0035\\*\\*\\*\\*.
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
   * Generates a downloadable inventory for global resources in an account group.
   * 
   * @remarks
   * This topic provides an example to show how to generate a downloadable inventory for global resources in the account group ca-a91d626622af0035\\*\\*\\*\\*.
   * 
   * @param request - GenerateAggregateResourceInventoryRequest
   * @returns GenerateAggregateResourceInventoryResponse
   */
  async generateAggregateResourceInventory(request: $_model.GenerateAggregateResourceInventoryRequest): Promise<$_model.GenerateAggregateResourceInventoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.generateAggregateResourceInventoryWithOptions(request, runtime);
  }

  /**
   * Generates a compliance evaluation report based on a compliance package.
   * 
   * @remarks
   * > You can call this operation to generate the latest compliance evaluation report. To download the report, call the GetCompliancePackReport operation. For more information, see [GetCompliancePackReport](https://help.aliyun.com/document_detail/263347.html).
   * This topic provides an example on how to generate a compliance evaluation report based on the `cp-a8a8626622af0082****` compliance package.
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
   * Generates a compliance evaluation report based on a compliance package.
   * 
   * @remarks
   * > You can call this operation to generate the latest compliance evaluation report. To download the report, call the GetCompliancePackReport operation. For more information, see [GetCompliancePackReport](https://help.aliyun.com/document_detail/263347.html).
   * This topic provides an example on how to generate a compliance evaluation report based on the `cp-a8a8626622af0082****` compliance package.
   * 
   * @param request - GenerateCompliancePackReportRequest
   * @returns GenerateCompliancePackReportResponse
   */
  async generateCompliancePackReport(request: $_model.GenerateCompliancePackReportRequest): Promise<$_model.GenerateCompliancePackReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.generateCompliancePackReportWithOptions(request, runtime);
  }

  /**
   * Generates a compliance evaluation report for a rule.
   * 
   * @remarks
   * >  You can call this operation to generate the latest compliance evaluation report. To download the report, call the GetConfigRulesReport operation. For more information, see [GetConfigRulesReport](https://help.aliyun.com/document_detail/263608.html).
   * This topic provides an example of how to generate a compliance evaluation report based on all existing rules.
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
   * Generates a compliance evaluation report for a rule.
   * 
   * @remarks
   * >  You can call this operation to generate the latest compliance evaluation report. To download the report, call the GetConfigRulesReport operation. For more information, see [GetConfigRulesReport](https://help.aliyun.com/document_detail/263608.html).
   * This topic provides an example of how to generate a compliance evaluation report based on all existing rules.
   * 
   * @param request - GenerateConfigRulesReportRequest
   * @returns GenerateConfigRulesReportResponse
   */
  async generateConfigRulesReport(request: $_model.GenerateConfigRulesReportRequest): Promise<$_model.GenerateConfigRulesReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.generateConfigRulesReportWithOptions(request, runtime);
  }

  /**
   * 基于报告模版生成报告Id
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
   * 基于报告模版生成报告Id
   * 
   * @param request - GenerateReportFromTemplateRequest
   * @returns GenerateReportFromTemplateResponse
   */
  async generateReportFromTemplate(request: $_model.GenerateReportFromTemplateRequest): Promise<$_model.GenerateReportFromTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.generateReportFromTemplateWithOptions(request, runtime);
  }

  /**
   * Generates a resource inventory for global resources.
   * 
   * @remarks
   * This topic provides an example on how to generate a resource inventory for global resources of the current account.
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
   * Generates a resource inventory for global resources.
   * 
   * @remarks
   * This topic provides an example on how to generate a resource inventory for global resources of the current account.
   * 
   * @param request - GenerateResourceInventoryRequest
   * @returns GenerateResourceInventoryResponse
   */
  async generateResourceInventory(request: $_model.GenerateResourceInventoryRequest): Promise<$_model.GenerateResourceInventoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.generateResourceInventoryWithOptions(request, runtime);
  }

  /**
   * Obtains the last resource advanced search file that is generated within the current account. You can call this operation to obtain the URL of the resource advanced search file.
   * 
   * @remarks
   * ### [](#)Prerequisites
   * You must call the [CreateAdvancedSearchFile](https://help.aliyun.com/document_detail/2511967.html) operation to create a resource advanced search file. Then, you can call this operation to obtain the URL of the resource advanced search file.
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
   * Obtains the last resource advanced search file that is generated within the current account. You can call this operation to obtain the URL of the resource advanced search file.
   * 
   * @remarks
   * ### [](#)Prerequisites
   * You must call the [CreateAdvancedSearchFile](https://help.aliyun.com/document_detail/2511967.html) operation to create a resource advanced search file. Then, you can call this operation to obtain the URL of the resource advanced search file.
   * @returns GetAdvancedSearchFileResponse
   */
  async getAdvancedSearchFile(): Promise<$_model.GetAdvancedSearchFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAdvancedSearchFileWithOptions(runtime);
  }

  /**
   * Queries the compliance evaluation results of member accounts for which a compliance package takes effect in an account group.
   * 
   * @remarks
   * This topic provides an example on how to query the compliance evaluation results of member accounts for which the `cp-541e626622af0087****` compliance package takes effect in the `ca-04b3fd170e340007****` account group. The returned result shows that two member accounts are monitored by the compliance package and they are both evaluated as compliant.
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
   * Queries the compliance evaluation results of member accounts for which a compliance package takes effect in an account group.
   * 
   * @remarks
   * This topic provides an example on how to query the compliance evaluation results of member accounts for which the `cp-541e626622af0087****` compliance package takes effect in the `ca-04b3fd170e340007****` account group. The returned result shows that two member accounts are monitored by the compliance package and they are both evaluated as compliant.
   * 
   * @param request - GetAggregateAccountComplianceByPackRequest
   * @returns GetAggregateAccountComplianceByPackResponse
   */
  async getAggregateAccountComplianceByPack(request: $_model.GetAggregateAccountComplianceByPackRequest): Promise<$_model.GetAggregateAccountComplianceByPackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAggregateAccountComplianceByPackWithOptions(request, runtime);
  }

  /**
   * Queries the most recently generated resource file of an account group.
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
   * Queries the most recently generated resource file of an account group.
   * 
   * @param request - GetAggregateAdvancedSearchFileRequest
   * @returns GetAggregateAdvancedSearchFileResponse
   */
  async getAggregateAdvancedSearchFile(request: $_model.GetAggregateAdvancedSearchFileRequest): Promise<$_model.GetAggregateAdvancedSearchFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAggregateAdvancedSearchFileWithOptions(request, runtime);
  }

  /**
   * Queries the details of a compliance package in an account group.
   * 
   * @remarks
   * The topic provides an example on how to query the details of a compliance package whose ID is `cp-fdc8626622af00f9****` in an account group whose ID is `ca-f632626622af0079****`.
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
   * Queries the details of a compliance package in an account group.
   * 
   * @remarks
   * The topic provides an example on how to query the details of a compliance package whose ID is `cp-fdc8626622af00f9****` in an account group whose ID is `ca-f632626622af0079****`.
   * 
   * @param request - GetAggregateCompliancePackRequest
   * @returns GetAggregateCompliancePackResponse
   */
  async getAggregateCompliancePack(request: $_model.GetAggregateCompliancePackRequest): Promise<$_model.GetAggregateCompliancePackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAggregateCompliancePackWithOptions(request, runtime);
  }

  /**
   * Queries the compliance evaluation report that is generated based on a compliance package of an account group.
   * 
   * @remarks
   * > Before you call this operation, you must call the GenerateAggregateCompliancePackReport operation to generate the latest compliance evaluation report based on a compliance package. For more information, see [GenerateAggregateCompliancePackReport](https://help.aliyun.com/document_detail/262687.html).
   * This topic provides an example on how to query the compliance evaluation report that is generated based on the `cp-fdc8626622af00f9****` compliance package in the `ca-f632626622af0079****` account group.
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
   * Queries the compliance evaluation report that is generated based on a compliance package of an account group.
   * 
   * @remarks
   * > Before you call this operation, you must call the GenerateAggregateCompliancePackReport operation to generate the latest compliance evaluation report based on a compliance package. For more information, see [GenerateAggregateCompliancePackReport](https://help.aliyun.com/document_detail/262687.html).
   * This topic provides an example on how to query the compliance evaluation report that is generated based on the `cp-fdc8626622af00f9****` compliance package in the `ca-f632626622af0079****` account group.
   * 
   * @param request - GetAggregateCompliancePackReportRequest
   * @returns GetAggregateCompliancePackReportResponse
   */
  async getAggregateCompliancePackReport(request: $_model.GetAggregateCompliancePackReportRequest): Promise<$_model.GetAggregateCompliancePackReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAggregateCompliancePackReportWithOptions(request, runtime);
  }

  /**
   * Queries the compliance statistics of an account group.
   * 
   * @remarks
   * This topic provides an example on how to query the compliance statistics of resources and rules in the account group ca-a91d626622af0035\\*\\*\\*\\*.
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
   * Queries the compliance statistics of an account group.
   * 
   * @remarks
   * This topic provides an example on how to query the compliance statistics of resources and rules in the account group ca-a91d626622af0035\\*\\*\\*\\*.
   * 
   * @param request - GetAggregateComplianceSummaryRequest
   * @returns GetAggregateComplianceSummaryResponse
   */
  async getAggregateComplianceSummary(request: $_model.GetAggregateComplianceSummaryRequest): Promise<$_model.GetAggregateComplianceSummaryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAggregateComplianceSummaryWithOptions(request, runtime);
  }

  /**
   * Queries the information about a delivery channel in an account group.
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
   * Queries the information about a delivery channel in an account group.
   * 
   * @param request - GetAggregateConfigDeliveryChannelRequest
   * @returns GetAggregateConfigDeliveryChannelResponse
   */
  async getAggregateConfigDeliveryChannel(request: $_model.GetAggregateConfigDeliveryChannelRequest): Promise<$_model.GetAggregateConfigDeliveryChannelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAggregateConfigDeliveryChannelWithOptions(request, runtime);
  }

  /**
   * Queries the details of a rule in an account group.
   * 
   * @remarks
   * This example shows how to query the details of the `cr-7f7d626622af0041****` rule in the `ca-7f00626622af0041****` account group.
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
   * Queries the details of a rule in an account group.
   * 
   * @remarks
   * This example shows how to query the details of the `cr-7f7d626622af0041****` rule in the `ca-7f00626622af0041****` account group.
   * 
   * @param request - GetAggregateConfigRuleRequest
   * @returns GetAggregateConfigRuleResponse
   */
  async getAggregateConfigRule(request: $_model.GetAggregateConfigRuleRequest): Promise<$_model.GetAggregateConfigRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAggregateConfigRuleWithOptions(request, runtime);
  }

  /**
   * Queries compliance evaluation results based on the rules in a compliance package in an account group.
   * 
   * @remarks
   * The sample request in this topic shows you how to query the compliance evaluation results based on rules in the `cp-541e626622af0087****` compliance package that is created for the `ca-04b3fd170e340007****` account group. The return result shows a total of `one` rule. `No resources` are evaluated as non-compliant based on the rule.
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
   * Queries compliance evaluation results based on the rules in a compliance package in an account group.
   * 
   * @remarks
   * The sample request in this topic shows you how to query the compliance evaluation results based on rules in the `cp-541e626622af0087****` compliance package that is created for the `ca-04b3fd170e340007****` account group. The return result shows a total of `one` rule. `No resources` are evaluated as non-compliant based on the rule.
   * 
   * @param request - GetAggregateConfigRuleComplianceByPackRequest
   * @returns GetAggregateConfigRuleComplianceByPackResponse
   */
  async getAggregateConfigRuleComplianceByPack(request: $_model.GetAggregateConfigRuleComplianceByPackRequest): Promise<$_model.GetAggregateConfigRuleComplianceByPackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAggregateConfigRuleComplianceByPackWithOptions(request, runtime);
  }

  /**
   * Queries the summary of compliance evaluation results by rule risk level in an account group.
   * 
   * @remarks
   * This topic provides an example on how to query the summary of compliance evaluation results by rule risk level in the `ca-3a58626622af0005****` account group. The returned result shows four rules that are specified with the high risk level. One of the rules detects non-compliant resources, and the resources evaluated by the remaining three are compliant.
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
   * Queries the summary of compliance evaluation results by rule risk level in an account group.
   * 
   * @remarks
   * This topic provides an example on how to query the summary of compliance evaluation results by rule risk level in the `ca-3a58626622af0005****` account group. The returned result shows four rules that are specified with the high risk level. One of the rules detects non-compliant resources, and the resources evaluated by the remaining three are compliant.
   * 
   * @param request - GetAggregateConfigRuleSummaryByRiskLevelRequest
   * @returns GetAggregateConfigRuleSummaryByRiskLevelResponse
   */
  async getAggregateConfigRuleSummaryByRiskLevel(request: $_model.GetAggregateConfigRuleSummaryByRiskLevelRequest): Promise<$_model.GetAggregateConfigRuleSummaryByRiskLevelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAggregateConfigRuleSummaryByRiskLevelWithOptions(request, runtime);
  }

  /**
   * Downloads the compliance evaluation report in the Excel format to your on-premises machine. This allows you to assign tasks and modify incompliant resource configurations.
   * 
   * @remarks
   * > Before you call this operation, you must call the GenerateAggregateConfigRulesReport operation to generate the latest compliance evaluation report based on all rules in an account group. For more information, see [GenerateAggregateConfigRulesReport](https://help.aliyun.com/document_detail/262701.html).
   * This topic provides an example on how to query the compliance evaluation report that is generated based on all rules in the `ca-f632626622af0079****` account group.
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
   * Downloads the compliance evaluation report in the Excel format to your on-premises machine. This allows you to assign tasks and modify incompliant resource configurations.
   * 
   * @remarks
   * > Before you call this operation, you must call the GenerateAggregateConfigRulesReport operation to generate the latest compliance evaluation report based on all rules in an account group. For more information, see [GenerateAggregateConfigRulesReport](https://help.aliyun.com/document_detail/262701.html).
   * This topic provides an example on how to query the compliance evaluation report that is generated based on all rules in the `ca-f632626622af0079****` account group.
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
   * This topic provides an example on how to query the details of an Elastic Compute Service (ECS) instance `i-bp12g4xbl4i0brkn****` that resides in the China (Hangzhou) region in the account group `ca-5885626622af0008****`.
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
   * This topic provides an example on how to query the details of an Elastic Compute Service (ECS) instance `i-bp12g4xbl4i0brkn****` that resides in the China (Hangzhou) region in the account group `ca-5885626622af0008****`.
   * 
   * @param request - GetAggregateDiscoveredResourceRequest
   * @returns GetAggregateDiscoveredResourceResponse
   */
  async getAggregateDiscoveredResource(request: $_model.GetAggregateDiscoveredResourceRequest): Promise<$_model.GetAggregateDiscoveredResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAggregateDiscoveredResourceWithOptions(request, runtime);
  }

  /**
   * Queries compliance evaluation results based on the rules in a compliance package in an account group.
   * 
   * @remarks
   * This topic provides an example on how to query the compliance evaluation results based on the `cr-d369626622af008e****` rule in the `ca-a4e5626622af0079****` account group. The returned result shows that a total of 10 resources are evaluated by the rule and five of them are evaluated as compliant.
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
   * Queries compliance evaluation results based on the rules in a compliance package in an account group.
   * 
   * @remarks
   * This topic provides an example on how to query the compliance evaluation results based on the `cr-d369626622af008e****` rule in the `ca-a4e5626622af0079****` account group. The returned result shows that a total of 10 resources are evaluated by the rule and five of them are evaluated as compliant.
   * 
   * @param request - GetAggregateResourceComplianceByConfigRuleRequest
   * @returns GetAggregateResourceComplianceByConfigRuleResponse
   */
  async getAggregateResourceComplianceByConfigRule(request: $_model.GetAggregateResourceComplianceByConfigRuleRequest): Promise<$_model.GetAggregateResourceComplianceByConfigRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAggregateResourceComplianceByConfigRuleWithOptions(request, runtime);
  }

  /**
   * Queries the compliance evaluation results of resources evaluated based on a compliance package of an account group.
   * 
   * @remarks
   * This topic provides an example on how to query the compliance evaluation results of resources monitored based on the `cp-fdc8626622af00f9****` compliance package in the `ca-f632626622af0079****`account group. The returned result shows that the total number of monitored resources is `10` and the number of non-compliant resources is `7`.
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
   * Queries the compliance evaluation results of resources evaluated based on a compliance package of an account group.
   * 
   * @remarks
   * This topic provides an example on how to query the compliance evaluation results of resources monitored based on the `cp-fdc8626622af00f9****` compliance package in the `ca-f632626622af0079****`account group. The returned result shows that the total number of monitored resources is `10` and the number of non-compliant resources is `7`.
   * 
   * @param request - GetAggregateResourceComplianceByPackRequest
   * @returns GetAggregateResourceComplianceByPackResponse
   */
  async getAggregateResourceComplianceByPack(request: $_model.GetAggregateResourceComplianceByPackRequest): Promise<$_model.GetAggregateResourceComplianceByPackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAggregateResourceComplianceByPackWithOptions(request, runtime);
  }

  /**
   * Queries the evaluation results grouped by resource type for an account group rule.
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
   * Queries the evaluation results grouped by resource type for an account group rule.
   * 
   * @param request - GetAggregateResourceComplianceGroupByRegionRequest
   * @returns GetAggregateResourceComplianceGroupByRegionResponse
   */
  async getAggregateResourceComplianceGroupByRegion(request: $_model.GetAggregateResourceComplianceGroupByRegionRequest): Promise<$_model.GetAggregateResourceComplianceGroupByRegionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAggregateResourceComplianceGroupByRegionWithOptions(request, runtime);
  }

  /**
   * Queries the evaluation results grouped by resource type for an account group rule.
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
   * Queries the evaluation results grouped by resource type for an account group rule.
   * 
   * @param request - GetAggregateResourceComplianceGroupByResourceTypeRequest
   * @returns GetAggregateResourceComplianceGroupByResourceTypeResponse
   */
  async getAggregateResourceComplianceGroupByResourceType(request: $_model.GetAggregateResourceComplianceGroupByResourceTypeRequest): Promise<$_model.GetAggregateResourceComplianceGroupByResourceTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAggregateResourceComplianceGroupByResourceTypeWithOptions(request, runtime);
  }

  /**
   * Queries the compliance timeline of a resource in an account group.
   * 
   * @remarks
   * The sample request in this topic shows you how to query the compliance timeline of the `new-bucket` resource that resides in the `cn-hangzhou` region within the `100931896542****` member account of the `ca-5885626622af0008****` account group. The new-bucket resource is an Object Storage Service (OSS) bucket. The return result shows the following two timestamps on the compliance timeline: `1625200295276` and `1625200228510`. The first timestamp indicates 12:31:35 on July 2, 2021 (UTC+8), and the second timestamp indicates 12:30:28 on July 2, 2021 (UTC+8).
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
   * Queries the compliance timeline of a resource in an account group.
   * 
   * @remarks
   * The sample request in this topic shows you how to query the compliance timeline of the `new-bucket` resource that resides in the `cn-hangzhou` region within the `100931896542****` member account of the `ca-5885626622af0008****` account group. The new-bucket resource is an Object Storage Service (OSS) bucket. The return result shows the following two timestamps on the compliance timeline: `1625200295276` and `1625200228510`. The first timestamp indicates 12:31:35 on July 2, 2021 (UTC+8), and the second timestamp indicates 12:30:28 on July 2, 2021 (UTC+8).
   * 
   * @param request - GetAggregateResourceComplianceTimelineRequest
   * @returns GetAggregateResourceComplianceTimelineResponse
   */
  async getAggregateResourceComplianceTimeline(request: $_model.GetAggregateResourceComplianceTimelineRequest): Promise<$_model.GetAggregateResourceComplianceTimelineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAggregateResourceComplianceTimelineWithOptions(request, runtime);
  }

  /**
   * Queries the configuration timeline of a resource in an account group.
   * 
   * @remarks
   * The sample request in this topic shows you how to query the configuration timeline of the `new-bucket` resource that resides in the `cn-hangzhou` region within the `100931896542****` member account of the `ca-5885626622af0008****` account group. The new-bucket resource is an Object Storage Service (OSS) bucket. The return result shows that the timestamp when the resource configuration changes is `1624961112000`. The timestamp indicates 18:05:12 on June 29, 2021 (UTC+8).
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
   * Queries the configuration timeline of a resource in an account group.
   * 
   * @remarks
   * The sample request in this topic shows you how to query the configuration timeline of the `new-bucket` resource that resides in the `cn-hangzhou` region within the `100931896542****` member account of the `ca-5885626622af0008****` account group. The new-bucket resource is an Object Storage Service (OSS) bucket. The return result shows that the timestamp when the resource configuration changes is `1624961112000`. The timestamp indicates 18:05:12 on June 29, 2021 (UTC+8).
   * 
   * @param request - GetAggregateResourceConfigurationTimelineRequest
   * @returns GetAggregateResourceConfigurationTimelineResponse
   */
  async getAggregateResourceConfigurationTimeline(request: $_model.GetAggregateResourceConfigurationTimelineRequest): Promise<$_model.GetAggregateResourceConfigurationTimelineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAggregateResourceConfigurationTimelineWithOptions(request, runtime);
  }

  /**
   * Queries the statistics on the resources in an account group by region.
   * 
   * @remarks
   * This topic provides an example on how to query the statistics on the resources in an account group named `ca-a260626622af0005****` by region. The returned result shows that a total of `10` resources exist in the `cn-hangzhou` region.
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
   * Queries the statistics on the resources in an account group by region.
   * 
   * @remarks
   * This topic provides an example on how to query the statistics on the resources in an account group named `ca-a260626622af0005****` by region. The returned result shows that a total of `10` resources exist in the `cn-hangzhou` region.
   * 
   * @param request - GetAggregateResourceCountsGroupByRegionRequest
   * @returns GetAggregateResourceCountsGroupByRegionResponse
   */
  async getAggregateResourceCountsGroupByRegion(request: $_model.GetAggregateResourceCountsGroupByRegionRequest): Promise<$_model.GetAggregateResourceCountsGroupByRegionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAggregateResourceCountsGroupByRegionWithOptions(request, runtime);
  }

  /**
   * Queries the statistics on the resources in an account group by resource type.
   * 
   * @remarks
   * This topic provides an example on how to query the statistics on the resources in an account group whose ID is `ca-a260626622af0005****` by resource type. The returned result shows that the account group has a total of `seven` resources of the `ACS::RAM::Role` resource type.
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
   * Queries the statistics on the resources in an account group by resource type.
   * 
   * @remarks
   * This topic provides an example on how to query the statistics on the resources in an account group whose ID is `ca-a260626622af0005****` by resource type. The returned result shows that the account group has a total of `seven` resources of the `ACS::RAM::Role` resource type.
   * 
   * @param request - GetAggregateResourceCountsGroupByResourceTypeRequest
   * @returns GetAggregateResourceCountsGroupByResourceTypeResponse
   */
  async getAggregateResourceCountsGroupByResourceType(request: $_model.GetAggregateResourceCountsGroupByResourceTypeRequest): Promise<$_model.GetAggregateResourceCountsGroupByResourceTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAggregateResourceCountsGroupByResourceTypeWithOptions(request, runtime);
  }

  /**
   * Obtains the last resource inventory that is generated on the Global Resources page within the current account group.
   * 
   * @remarks
   * ### [](#)Prerequisites
   * The [GenerateAggregateResourceInventory](https://help.aliyun.com/document_detail/2398353.html) operation is called to generate a resource inventory. Then, this operation is called to obtain the URL of the resource inventory.
   * ### [](#)Description
   * This topic provides an example on how to obtain the last resource inventory that is generated within the account group ca-a91d626622af0035\\*\\*\\*\\*.
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
   * Obtains the last resource inventory that is generated on the Global Resources page within the current account group.
   * 
   * @remarks
   * ### [](#)Prerequisites
   * The [GenerateAggregateResourceInventory](https://help.aliyun.com/document_detail/2398353.html) operation is called to generate a resource inventory. Then, this operation is called to obtain the URL of the resource inventory.
   * ### [](#)Description
   * This topic provides an example on how to obtain the last resource inventory that is generated within the account group ca-a91d626622af0035\\*\\*\\*\\*.
   * 
   * @param request - GetAggregateResourceInventoryRequest
   * @returns GetAggregateResourceInventoryResponse
   */
  async getAggregateResourceInventory(request: $_model.GetAggregateResourceInventoryRequest): Promise<$_model.GetAggregateResourceInventoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAggregateResourceInventoryWithOptions(request, runtime);
  }

  /**
   * Queries the details of an account group. You can query the name, creation time, member, and type of an account group.
   * 
   * @remarks
   * The sample request in this topic shows you how to query the details of the `ca-88ea626622af0055****` account group. The return result shows that the account group is named `Test_Group`, its description is `Test account group`, and it is of the `CUSTOM` type. The account group is in the `1` state, which indicates that it is created.
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
   * Queries the details of an account group. You can query the name, creation time, member, and type of an account group.
   * 
   * @remarks
   * The sample request in this topic shows you how to query the details of the `ca-88ea626622af0055****` account group. The return result shows that the account group is named `Test_Group`, its description is `Test account group`, and it is of the `CUSTOM` type. The account group is in the `1` state, which indicates that it is created.
   * 
   * @param request - GetAggregatorRequest
   * @returns GetAggregatorResponse
   */
  async getAggregator(request: $_model.GetAggregatorRequest): Promise<$_model.GetAggregatorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAggregatorWithOptions(request, runtime);
  }

  /**
   * Queries the details of a compliance package.
   * 
   * @remarks
   * This topic provides an example on how to query the details of a compliance package whose ID is `cp-fdc8626622af00f9****`. The returned result shows that the name of the compliance package is `ClassifiedProtectionPreCheck`, the compliance package is in the `ACTIVE` state, and the risk level of the rules in the compliance package is `1`, which indicates high risk level.
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
   * Queries the details of a compliance package.
   * 
   * @remarks
   * This topic provides an example on how to query the details of a compliance package whose ID is `cp-fdc8626622af00f9****`. The returned result shows that the name of the compliance package is `ClassifiedProtectionPreCheck`, the compliance package is in the `ACTIVE` state, and the risk level of the rules in the compliance package is `1`, which indicates high risk level.
   * 
   * @param request - GetCompliancePackRequest
   * @returns GetCompliancePackResponse
   */
  async getCompliancePack(request: $_model.GetCompliancePackRequest): Promise<$_model.GetCompliancePackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCompliancePackWithOptions(request, runtime);
  }

  /**
   * Queries the compliance evaluation report that is generated based on a compliance package.
   * 
   * @remarks
   * > Before you call this operation, you must call the GenerateCompliancePackReport operation to generate the latest compliance evaluation report based on a compliance package. For more information, see [GenerateCompliancePackReport](https://help.aliyun.com/document_detail/263525.html).
   * This topic provides an example on how to query the compliance evaluation report that is generated based on the `cp-fdc8626622af00f9****` compliance package.
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
   * Queries the compliance evaluation report that is generated based on a compliance package.
   * 
   * @remarks
   * > Before you call this operation, you must call the GenerateCompliancePackReport operation to generate the latest compliance evaluation report based on a compliance package. For more information, see [GenerateCompliancePackReport](https://help.aliyun.com/document_detail/263525.html).
   * This topic provides an example on how to query the compliance evaluation report that is generated based on the `cp-fdc8626622af00f9****` compliance package.
   * 
   * @param request - GetCompliancePackReportRequest
   * @returns GetCompliancePackReportResponse
   */
  async getCompliancePackReport(request: $_model.GetCompliancePackReportRequest): Promise<$_model.GetCompliancePackReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCompliancePackReportWithOptions(request, runtime);
  }

  /**
   * Queries the summary of compliance statistics within the current account.
   * 
   * @remarks
   * This topic provides an example on how to query the compliance statistics of resources and rules in the current account group.
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
   * Queries the summary of compliance statistics within the current account.
   * 
   * @remarks
   * This topic provides an example on how to query the compliance statistics of resources and rules in the current account group.
   * @returns GetComplianceSummaryResponse
   */
  async getComplianceSummary(): Promise<$_model.GetComplianceSummaryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getComplianceSummaryWithOptions(runtime);
  }

  /**
   * Queries the information about a delivery channel.
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
   * Queries the information about a delivery channel.
   * 
   * @param request - GetConfigDeliveryChannelRequest
   * @returns GetConfigDeliveryChannelResponse
   */
  async getConfigDeliveryChannel(request: $_model.GetConfigDeliveryChannelRequest): Promise<$_model.GetConfigDeliveryChannelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getConfigDeliveryChannelWithOptions(request, runtime);
  }

  /**
   * Queries the details of a rule.
   * 
   * @remarks
   * This topic provides an example on how to query the details of the `cr-7f7d626622af0041****` rule.
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
   * Queries the details of a rule.
   * 
   * @remarks
   * This topic provides an example on how to query the details of the `cr-7f7d626622af0041****` rule.
   * 
   * @param request - GetConfigRuleRequest
   * @returns GetConfigRuleResponse
   */
  async getConfigRule(request: $_model.GetConfigRuleRequest): Promise<$_model.GetConfigRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getConfigRuleWithOptions(request, runtime);
  }

  /**
   * Queries compliance evaluation results based on the rules in a compliance package.
   * 
   * @remarks
   * In this topic, the `cp-541e626622af0087****` compliance package is used as an example. The return result shows a total of one rule against which specific resources are evaluated as compliant.
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
   * Queries compliance evaluation results based on the rules in a compliance package.
   * 
   * @remarks
   * In this topic, the `cp-541e626622af0087****` compliance package is used as an example. The return result shows a total of one rule against which specific resources are evaluated as compliant.
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
   * Downloads the compliance evaluation report in the Excel format to your on-premises machine. This allows you to assign tasks and modify incompliant resource configurations.
   * 
   * @remarks
   * >  Before you call this operation, you must call the GenerateConfigRulesReport operation to generate the latest compliance evaluation report based on all existing rules. For more information, see [GenerateConfigRulesReport](https://help.aliyun.com/document_detail/263601.html).
   * This topic provides an example of how to query the compliance evaluation report that is generated based on all existing rules.
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
   * Downloads the compliance evaluation report in the Excel format to your on-premises machine. This allows you to assign tasks and modify incompliant resource configurations.
   * 
   * @remarks
   * >  Before you call this operation, you must call the GenerateConfigRulesReport operation to generate the latest compliance evaluation report based on all existing rules. For more information, see [GenerateConfigRulesReport](https://help.aliyun.com/document_detail/263601.html).
   * This topic provides an example of how to query the compliance evaluation report that is generated based on all existing rules.
   * 
   * @param request - GetConfigRulesReportRequest
   * @returns GetConfigRulesReportResponse
   */
  async getConfigRulesReport(request: $_model.GetConfigRulesReportRequest): Promise<$_model.GetConfigRulesReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getConfigRulesReportWithOptions(request, runtime);
  }

  /**
   * Queries the activation status and resource monitoring scope of Cloud Config for the current account.
   * 
   * @remarks
   * This topic provides an example on how to query the activation status and resource monitoring scope of Cloud Config for the current account.
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
   * Queries the activation status and resource monitoring scope of Cloud Config for the current account.
   * 
   * @remarks
   * This topic provides an example on how to query the activation status and resource monitoring scope of Cloud Config for the current account.
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
   * This topic provides an example on how to query the details of the Elastic Compute Service (ECS) instance `i-bp12g4xbl4i0brkn****` that resides in the China (Hangzhou) region.
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
   * This topic provides an example on how to query the details of the Elastic Compute Service (ECS) instance `i-bp12g4xbl4i0brkn****` that resides in the China (Hangzhou) region.
   * 
   * @param request - GetDiscoveredResourceRequest
   * @returns GetDiscoveredResourceResponse
   */
  async getDiscoveredResource(request: $_model.GetDiscoveredResourceRequest): Promise<$_model.GetDiscoveredResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDiscoveredResourceWithOptions(request, runtime);
  }

  /**
   * Queries the statistics on resources by region.
   * 
   * @remarks
   * This topic provides an example to demonstrate how to query the statistics on resources by region. The returned result shows that a total of 10 resources exist in the `cn-hangzhou` region.
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
   * Queries the statistics on resources by region.
   * 
   * @remarks
   * This topic provides an example to demonstrate how to query the statistics on resources by region. The returned result shows that a total of 10 resources exist in the `cn-hangzhou` region.
   * 
   * @param request - GetDiscoveredResourceCountsGroupByRegionRequest
   * @returns GetDiscoveredResourceCountsGroupByRegionResponse
   */
  async getDiscoveredResourceCountsGroupByRegion(request: $_model.GetDiscoveredResourceCountsGroupByRegionRequest): Promise<$_model.GetDiscoveredResourceCountsGroupByRegionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDiscoveredResourceCountsGroupByRegionWithOptions(request, runtime);
  }

  /**
   * Queries the statistics on resources by resource type.
   * 
   * @remarks
   * This topic describes how to query the statistics on resources by resource type. The returned result shows that a total of 10 resources of the `ACS::ECS::Instance` resource type exist.
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
   * Queries the statistics on resources by resource type.
   * 
   * @remarks
   * This topic describes how to query the statistics on resources by resource type. The returned result shows that a total of 10 resources of the `ACS::ECS::Instance` resource type exist.
   * 
   * @param request - GetDiscoveredResourceCountsGroupByResourceTypeRequest
   * @returns GetDiscoveredResourceCountsGroupByResourceTypeResponse
   */
  async getDiscoveredResourceCountsGroupByResourceType(request: $_model.GetDiscoveredResourceCountsGroupByResourceTypeRequest): Promise<$_model.GetDiscoveredResourceCountsGroupByResourceTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDiscoveredResourceCountsGroupByResourceTypeWithOptions(request, runtime);
  }

  /**
   * Queries the integration status of a specific cloud service.
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
   * Queries the integration status of a specific cloud service.
   * 
   * @param request - GetIntegratedServiceStatusRequest
   * @returns GetIntegratedServiceStatusResponse
   */
  async getIntegratedServiceStatus(request: $_model.GetIntegratedServiceStatusRequest): Promise<$_model.GetIntegratedServiceStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getIntegratedServiceStatusWithOptions(request, runtime);
  }

  /**
   * Queries the details of a specific managed rule.
   * 
   * @remarks
   * This topic provides an example on how to query the details of the managed rule `cdn-domain-https-enabled`.
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
   * Queries the details of a specific managed rule.
   * 
   * @remarks
   * This topic provides an example on how to query the details of the managed rule `cdn-domain-https-enabled`.
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
   * This topic provides an example on how to query the details of the automatic remediation template ACS-ALB-BulkyEnableDeletionProtection.
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
   * This topic provides an example on how to query the details of the automatic remediation template ACS-ALB-BulkyEnableDeletionProtection.
   * 
   * @param request - GetRemediationTemplateRequest
   * @returns GetRemediationTemplateResponse
   */
  async getRemediationTemplate(request: $_model.GetRemediationTemplateRequest): Promise<$_model.GetRemediationTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRemediationTemplateWithOptions(request, runtime);
  }

  /**
   * 获取基于报告模版生成的报告
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
   * 获取基于报告模版生成的报告
   * 
   * @param request - GetReportFromTemplateRequest
   * @returns GetReportFromTemplateResponse
   */
  async getReportFromTemplate(request: $_model.GetReportFromTemplateRequest): Promise<$_model.GetReportFromTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getReportFromTemplateWithOptions(request, runtime);
  }

  /**
   * Queries the compliance summary based on the compliance evaluation result of a rule.
   * 
   * @remarks
   * In this topic, the `cr-d369626622af008e****` rule is used as an example. The return result shows that a total of 10 resources are evaluated by the rule and `five` of them are evaluated as compliant.
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
   * Queries the compliance summary based on the compliance evaluation result of a rule.
   * 
   * @remarks
   * In this topic, the `cr-d369626622af008e****` rule is used as an example. The return result shows that a total of 10 resources are evaluated by the rule and `five` of them are evaluated as compliant.
   * 
   * @param request - GetResourceComplianceByConfigRuleRequest
   * @returns GetResourceComplianceByConfigRuleResponse
   */
  async getResourceComplianceByConfigRule(request: $_model.GetResourceComplianceByConfigRuleRequest): Promise<$_model.GetResourceComplianceByConfigRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getResourceComplianceByConfigRuleWithOptions(request, runtime);
  }

  /**
   * Queries the compliance evaluation results of resources evaluated based on a compliance package.
   * 
   * @remarks
   * This topic provides an example on how to query the compliance evaluation results of resources monitored by using the `cp-541e626622af0087****` compliance package. The returned result shows a total of 10 resources and seven of them are evaluated as non-compliant.
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
   * Queries the compliance evaluation results of resources evaluated based on a compliance package.
   * 
   * @remarks
   * This topic provides an example on how to query the compliance evaluation results of resources monitored by using the `cp-541e626622af0087****` compliance package. The returned result shows a total of 10 resources and seven of them are evaluated as non-compliant.
   * 
   * @param request - GetResourceComplianceByPackRequest
   * @returns GetResourceComplianceByPackResponse
   */
  async getResourceComplianceByPack(request: $_model.GetResourceComplianceByPackRequest): Promise<$_model.GetResourceComplianceByPackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getResourceComplianceByPackWithOptions(request, runtime);
  }

  /**
   * Queries the evaluation results grouped by region for a rule.
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
   * Queries the evaluation results grouped by region for a rule.
   * 
   * @param request - GetResourceComplianceGroupByRegionRequest
   * @returns GetResourceComplianceGroupByRegionResponse
   */
  async getResourceComplianceGroupByRegion(request: $_model.GetResourceComplianceGroupByRegionRequest): Promise<$_model.GetResourceComplianceGroupByRegionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getResourceComplianceGroupByRegionWithOptions(request, runtime);
  }

  /**
   * Queries the evaluation results grouped by resource type for a rule.
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
   * Queries the evaluation results grouped by resource type for a rule.
   * 
   * @param request - GetResourceComplianceGroupByResourceTypeRequest
   * @returns GetResourceComplianceGroupByResourceTypeResponse
   */
  async getResourceComplianceGroupByResourceType(request: $_model.GetResourceComplianceGroupByResourceTypeRequest): Promise<$_model.GetResourceComplianceGroupByResourceTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getResourceComplianceGroupByResourceTypeWithOptions(request, runtime);
  }

  /**
   * Queries the compliance timeline of a resource. The compliance timeline of a resource indicates the compliance evaluation record of the resource. A compliance timeline includes points and the content on the compliance timeline.
   * 
   * @remarks
   * In Cloud Config, each resource has a compliance timeline. Cloud Config generates a compliance evaluation record for a resource each time the resource is evaluated based on a rule. The compliance evaluation records of a resource are displayed in a compliance timeline. You can configure Cloud Config to execute a rule to evaluate a resource on a regular basis or each time you change the resource configuration. You can also manually execute a rule to evaluate a resource.
   * This topic provides an example on how to query the compliance timeline of the `new-bucket` resource that resides in the `cn-hangzhou` region. The resource is an Object Storage Service (OSS) bucket. The returned result shows the following two timestamps on the compliance timeline: `1625200295276` and `1625200228510`. The first timestamp indicates 12:31:35 on July 2, 2021 (UTC+8) and the second timestamp indicates 12:30:28 on July 2, 2021 (UTC+8).
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
   * Queries the compliance timeline of a resource. The compliance timeline of a resource indicates the compliance evaluation record of the resource. A compliance timeline includes points and the content on the compliance timeline.
   * 
   * @remarks
   * In Cloud Config, each resource has a compliance timeline. Cloud Config generates a compliance evaluation record for a resource each time the resource is evaluated based on a rule. The compliance evaluation records of a resource are displayed in a compliance timeline. You can configure Cloud Config to execute a rule to evaluate a resource on a regular basis or each time you change the resource configuration. You can also manually execute a rule to evaluate a resource.
   * This topic provides an example on how to query the compliance timeline of the `new-bucket` resource that resides in the `cn-hangzhou` region. The resource is an Object Storage Service (OSS) bucket. The returned result shows the following two timestamps on the compliance timeline: `1625200295276` and `1625200228510`. The first timestamp indicates 12:31:35 on July 2, 2021 (UTC+8) and the second timestamp indicates 12:30:28 on July 2, 2021 (UTC+8).
   * 
   * @param request - GetResourceComplianceTimelineRequest
   * @returns GetResourceComplianceTimelineResponse
   */
  async getResourceComplianceTimeline(request: $_model.GetResourceComplianceTimelineRequest): Promise<$_model.GetResourceComplianceTimelineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getResourceComplianceTimelineWithOptions(request, runtime);
  }

  /**
   * 获取资源配置样例
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
   * 获取资源配置样例
   * 
   * @param request - GetResourceConfigurationSampleRequest
   * @returns GetResourceConfigurationSampleResponse
   */
  async getResourceConfigurationSample(request: $_model.GetResourceConfigurationSampleRequest): Promise<$_model.GetResourceConfigurationSampleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getResourceConfigurationSampleWithOptions(request, runtime);
  }

  /**
   * Queries the configuration timeline of a resource.
   * 
   * @remarks
   * The sample request in this topic shows you how to query the configuration timeline of the `new-bucket` resource that resides in the `cn-hangzhou` region. The new-bucket resource is an Object Storage Service (OSS) bucket. The return result shows that the timestamp when the resource configuration changes is `1624961112000`. The timestamp indicates 18:05:12 on June 29, 2021 (UTC+8).
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
   * Queries the configuration timeline of a resource.
   * 
   * @remarks
   * The sample request in this topic shows you how to query the configuration timeline of the `new-bucket` resource that resides in the `cn-hangzhou` region. The new-bucket resource is an Object Storage Service (OSS) bucket. The return result shows that the timestamp when the resource configuration changes is `1624961112000`. The timestamp indicates 18:05:12 on June 29, 2021 (UTC+8).
   * 
   * @param request - GetResourceConfigurationTimelineRequest
   * @returns GetResourceConfigurationTimelineResponse
   */
  async getResourceConfigurationTimeline(request: $_model.GetResourceConfigurationTimelineRequest): Promise<$_model.GetResourceConfigurationTimelineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getResourceConfigurationTimelineWithOptions(request, runtime);
  }

  /**
   * Obtains the last resource inventory that is generated within the current Alibaba Cloud account.
   * 
   * @remarks
   * ### [](#)Prerequisites
   * You can call the [GenerateResourceInventory](https://help.aliyun.com/document_detail/2398354.html) operation to generate a resource inventory. Then, you can call the GetResourceInventory operation to obtain the URL of the resource inventory.
   * ### [](#)Description
   * This topic provides an example on how to obtain the last resource inventory that is generated within the current Alibaba Cloud account.
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
   * Obtains the last resource inventory that is generated within the current Alibaba Cloud account.
   * 
   * @remarks
   * ### [](#)Prerequisites
   * You can call the [GenerateResourceInventory](https://help.aliyun.com/document_detail/2398354.html) operation to generate a resource inventory. Then, you can call the GetResourceInventory operation to obtain the URL of the resource inventory.
   * ### [](#)Description
   * This topic provides an example on how to obtain the last resource inventory that is generated within the current Alibaba Cloud account.
   * @returns GetResourceInventoryResponse
   */
  async getResourceInventory(): Promise<$_model.GetResourceInventoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getResourceInventoryWithOptions(runtime);
  }

  /**
   * 获取资源类型的属性配置
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
   * 获取资源类型的属性配置
   * 
   * @param request - GetResourceTypePropertiesRequest
   * @returns GetResourceTypePropertiesResponse
   */
  async getResourceTypeProperties(request: $_model.GetResourceTypePropertiesRequest): Promise<$_model.GetResourceTypePropertiesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getResourceTypePropertiesWithOptions(request, runtime);
  }

  /**
   * Queries the resource relationships supported by a resource type.
   * 
   * @remarks
   * This topic provides an example to show how to query the resource relationships that are supported by the ACS::ECS::Instance resource type.
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
   * Queries the resource relationships supported by a resource type.
   * 
   * @remarks
   * This topic provides an example to show how to query the resource relationships that are supported by the ACS::ECS::Instance resource type.
   * 
   * @param request - GetSupportedResourceRelationConfigRequest
   * @returns GetSupportedResourceRelationConfigResponse
   */
  async getSupportedResourceRelationConfig(request: $_model.GetSupportedResourceRelationConfigRequest): Promise<$_model.GetSupportedResourceRelationConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSupportedResourceRelationConfigWithOptions(request, runtime);
  }

  /**
   * Ignores the evaluation results of some resources in an account group based on a specific rule. You can also specify a time period for ignoring the evaluation results. After the period elapses, the evaluation results of the resources based on the rule are automatically displayed.
   * 
   * @remarks
   * After you ignore a resource that is evaluated as incompliant by using a rule, the resource is still evaluated by using the rule, but the compliance result is Ignored.
   * This example shows how to ignore the `lb-hp3a3b4ztyfm2plgm****` incompliant resource that is evaluated by using the `cr-7e72626622af0051***` rule in the `120886317861****` member account of the `ca-5b6c626622af008f****` account group. The ID of the region where the resource resides is `cn-beijing`, and the type of the resource is `ACS::SLB::LoadBalancer`.
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
   * Ignores the evaluation results of some resources in an account group based on a specific rule. You can also specify a time period for ignoring the evaluation results. After the period elapses, the evaluation results of the resources based on the rule are automatically displayed.
   * 
   * @remarks
   * After you ignore a resource that is evaluated as incompliant by using a rule, the resource is still evaluated by using the rule, but the compliance result is Ignored.
   * This example shows how to ignore the `lb-hp3a3b4ztyfm2plgm****` incompliant resource that is evaluated by using the `cr-7e72626622af0051***` rule in the `120886317861****` member account of the `ca-5b6c626622af008f****` account group. The ID of the region where the resource resides is `cn-beijing`, and the type of the resource is `ACS::SLB::LoadBalancer`.
   * 
   * @param request - IgnoreAggregateEvaluationResultsRequest
   * @returns IgnoreAggregateEvaluationResultsResponse
   */
  async ignoreAggregateEvaluationResults(request: $_model.IgnoreAggregateEvaluationResultsRequest): Promise<$_model.IgnoreAggregateEvaluationResultsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.ignoreAggregateEvaluationResultsWithOptions(request, runtime);
  }

  /**
   * Ignores the evaluation results of some resources based on a specific rule. You can also specify a time period for ignoring the evaluation results. After the period elapses, the evaluation results of the resources based on the rule are automatically displayed.
   * 
   * @remarks
   * After you ignore a resource that is evaluated as incompliant by using a rule, the resource is still evaluated by using the rule, but the compliance result is Ignored.
   * This example shows how to ignore the `lb-hp3a3b4ztyfm2plgm****` resource that is evaluated as incompliant by using the `cr-7e72626622af0051****` rule in the `100931896542****` account. The ID of the region in which the resource resides is `cn-beijing`, and the type of the resource is `ACS::SLB::LoadBalancer`.
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
   * Ignores the evaluation results of some resources based on a specific rule. You can also specify a time period for ignoring the evaluation results. After the period elapses, the evaluation results of the resources based on the rule are automatically displayed.
   * 
   * @remarks
   * After you ignore a resource that is evaluated as incompliant by using a rule, the resource is still evaluated by using the rule, but the compliance result is Ignored.
   * This example shows how to ignore the `lb-hp3a3b4ztyfm2plgm****` resource that is evaluated as incompliant by using the `cr-7e72626622af0051****` rule in the `100931896542****` account. The ID of the region in which the resource resides is `cn-beijing`, and the type of the resource is `ACS::SLB::LoadBalancer`.
   * 
   * @param request - IgnoreEvaluationResultsRequest
   * @returns IgnoreEvaluationResultsResponse
   */
  async ignoreEvaluationResults(request: $_model.IgnoreEvaluationResultsRequest): Promise<$_model.IgnoreEvaluationResultsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.ignoreEvaluationResultsWithOptions(request, runtime);
  }

  /**
   * Queries a list of compliance packages in an account group.
   * 
   * @remarks
   * In this topic, the `ca-f632626622af0079****` account group is used as an example. The return result shows one compliance package whose ID is `cp-fdc8626622af00f9****`.
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
   * Queries a list of compliance packages in an account group.
   * 
   * @remarks
   * In this topic, the `ca-f632626622af0079****` account group is used as an example. The return result shows one compliance package whose ID is `cp-fdc8626622af00f9****`.
   * 
   * @param request - ListAggregateCompliancePacksRequest
   * @returns ListAggregateCompliancePacksResponse
   */
  async listAggregateCompliancePacks(request: $_model.ListAggregateCompliancePacksRequest): Promise<$_model.ListAggregateCompliancePacksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAggregateCompliancePacksWithOptions(request, runtime);
  }

  /**
   * Queries the information about all delivery channels in an account group.
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
   * Queries the information about all delivery channels in an account group.
   * 
   * @param request - ListAggregateConfigDeliveryChannelsRequest
   * @returns ListAggregateConfigDeliveryChannelsResponse
   */
  async listAggregateConfigDeliveryChannels(request: $_model.ListAggregateConfigDeliveryChannelsRequest): Promise<$_model.ListAggregateConfigDeliveryChannelsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAggregateConfigDeliveryChannelsWithOptions(request, runtime);
  }

  /**
   * Queries the compliance evaluation results of resources based on a rule in an account group.
   * 
   * @remarks
   * This topic provides an example on how to query the compliance evaluation results of resources based on the `cr-888f626622af00ae****` rule in the `ca-d1e3326622af00cb****` account group. The returned result indicates that the `Bucket-test` resource is evaluated as `NON_COMPLIANT` by using the rule. The resource is an Object Storage Service (OSS) bucket.
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
   * Queries the compliance evaluation results of resources based on a rule in an account group.
   * 
   * @remarks
   * This topic provides an example on how to query the compliance evaluation results of resources based on the `cr-888f626622af00ae****` rule in the `ca-d1e3326622af00cb****` account group. The returned result indicates that the `Bucket-test` resource is evaluated as `NON_COMPLIANT` by using the rule. The resource is an Object Storage Service (OSS) bucket.
   * 
   * @param request - ListAggregateConfigRuleEvaluationResultsRequest
   * @returns ListAggregateConfigRuleEvaluationResultsResponse
   */
  async listAggregateConfigRuleEvaluationResults(request: $_model.ListAggregateConfigRuleEvaluationResultsRequest): Promise<$_model.ListAggregateConfigRuleEvaluationResultsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAggregateConfigRuleEvaluationResultsWithOptions(request, runtime);
  }

  /**
   * Queries the statistics of compliance evaluation results of an account group.
   * 
   * @remarks
   * This topic provides an example on how to query the statistics of compliance evaluation results of an account group whose ID is ca-edd3626622af00b3\\*\\*\\*\\*.
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
   * Queries the statistics of compliance evaluation results of an account group.
   * 
   * @remarks
   * This topic provides an example on how to query the statistics of compliance evaluation results of an account group whose ID is ca-edd3626622af00b3\\*\\*\\*\\*.
   * 
   * @param request - ListAggregateConfigRuleEvaluationStatisticsRequest
   * @returns ListAggregateConfigRuleEvaluationStatisticsResponse
   */
  async listAggregateConfigRuleEvaluationStatistics(request: $_model.ListAggregateConfigRuleEvaluationStatisticsRequest): Promise<$_model.ListAggregateConfigRuleEvaluationStatisticsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAggregateConfigRuleEvaluationStatisticsWithOptions(request, runtime);
  }

  /**
   * Queries a list of rules in an account group.
   * 
   * @remarks
   * This topic provides an example on how to query the rules in an account group whose ID is `ca-f632626622af0079****`. The returned result shows a total of one rule and two evaluated resources. The resources are both evaluated as `COMPLIANT`.
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
   * Queries a list of rules in an account group.
   * 
   * @remarks
   * This topic provides an example on how to query the rules in an account group whose ID is `ca-f632626622af0079****`. The returned result shows a total of one rule and two evaluated resources. The resources are both evaluated as `COMPLIANT`.
   * 
   * @param request - ListAggregateConfigRulesRequest
   * @returns ListAggregateConfigRulesResponse
   */
  async listAggregateConfigRules(request: $_model.ListAggregateConfigRulesRequest): Promise<$_model.ListAggregateConfigRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAggregateConfigRulesWithOptions(request, runtime);
  }

  /**
   * Obtains a list of resources aggregated across regions within all member accounts of a specific account group.
   * 
   * @remarks
   * This topic provides an example on how to query the resources within the member account `100931896542****` of the account group `ca-c560626622af0005****`. The result indicates that eight resources are queried.
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
   * Obtains a list of resources aggregated across regions within all member accounts of a specific account group.
   * 
   * @remarks
   * This topic provides an example on how to query the resources within the member account `100931896542****` of the account group `ca-c560626622af0005****`. The result indicates that eight resources are queried.
   * 
   * @param request - ListAggregateDiscoveredResourcesRequest
   * @returns ListAggregateDiscoveredResourcesResponse
   */
  async listAggregateDiscoveredResources(request: $_model.ListAggregateDiscoveredResourcesRequest): Promise<$_model.ListAggregateDiscoveredResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAggregateDiscoveredResourcesWithOptions(request, runtime);
  }

  /**
   * 获取推荐的托管规则列表-多账号
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
   * 获取推荐的托管规则列表-多账号
   * 
   * @param request - ListAggregateRecommendManagedRulesRequest
   * @returns ListAggregateRecommendManagedRulesResponse
   */
  async listAggregateRecommendManagedRules(request: $_model.ListAggregateRecommendManagedRulesRequest): Promise<$_model.ListAggregateRecommendManagedRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAggregateRecommendManagedRulesWithOptions(request, runtime);
  }

  /**
   * Queries the remediation records of a rule in an account group.
   * 
   * @remarks
   * This topic provides an example on how to query the remediation records of the `cr-d04a626622af00af****` rule in the `ca-edd3626622af00b3****` account group.
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
   * Queries the remediation records of a rule in an account group.
   * 
   * @remarks
   * This topic provides an example on how to query the remediation records of the `cr-d04a626622af00af****` rule in the `ca-edd3626622af00b3****` account group.
   * 
   * @param request - ListAggregateRemediationExecutionsRequest
   * @returns ListAggregateRemediationExecutionsResponse
   */
  async listAggregateRemediationExecutions(request: $_model.ListAggregateRemediationExecutionsRequest): Promise<$_model.ListAggregateRemediationExecutionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAggregateRemediationExecutionsWithOptions(request, runtime);
  }

  /**
   * Queries a list of remediation templates for a rule in an account group.
   * 
   * @remarks
   * This topic provides an example on how to query the remediation templates of the rule whose ID is `cr-6b7c626622af00b4****` in the account group whose ID is `ca-6b4a626622af0012****`.
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
   * Queries a list of remediation templates for a rule in an account group.
   * 
   * @remarks
   * This topic provides an example on how to query the remediation templates of the rule whose ID is `cr-6b7c626622af00b4****` in the account group whose ID is `ca-6b4a626622af0012****`.
   * 
   * @param request - ListAggregateRemediationsRequest
   * @returns ListAggregateRemediationsResponse
   */
  async listAggregateRemediations(request: $_model.ListAggregateRemediationsRequest): Promise<$_model.ListAggregateRemediationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAggregateRemediationsWithOptions(request, runtime);
  }

  /**
   * Queries the compliance evaluation results of resources in an account group.
   * 
   * @remarks
   * This example shows how to query the compliance evaluation result of the `23642660635396****` resource in the `ca-7f00626622af0041****` account group. The resource is a RAM user. The returned result indicates that the resource is evaluated as `NON_COMPLIANT` by using the `cr-7f7d626622af0041****` rule.
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
   * Queries the compliance evaluation results of resources in an account group.
   * 
   * @remarks
   * This example shows how to query the compliance evaluation result of the `23642660635396****` resource in the `ca-7f00626622af0041****` account group. The resource is a RAM user. The returned result indicates that the resource is evaluated as `NON_COMPLIANT` by using the `cr-7f7d626622af0041****` rule.
   * 
   * @param request - ListAggregateResourceEvaluationResultsRequest
   * @returns ListAggregateResourceEvaluationResultsResponse
   */
  async listAggregateResourceEvaluationResults(request: $_model.ListAggregateResourceEvaluationResultsRequest): Promise<$_model.ListAggregateResourceEvaluationResultsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAggregateResourceEvaluationResultsWithOptions(request, runtime);
  }

  /**
   * Queries a list of the resources of a specific resource in an account group.
   * 
   * @remarks
   * This topic provides an example on how to query the disks that are associated with an Elastic Compute Service (ECS) instance in an account group.
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
   * Queries a list of the resources of a specific resource in an account group.
   * 
   * @remarks
   * This topic provides an example on how to query the disks that are associated with an Elastic Compute Service (ECS) instance in an account group.
   * 
   * @param request - ListAggregateResourceRelationsRequest
   * @returns ListAggregateResourceRelationsResponse
   */
  async listAggregateResourceRelations(request: $_model.ListAggregateResourceRelationsRequest): Promise<$_model.ListAggregateResourceRelationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAggregateResourceRelationsWithOptions(request, runtime);
  }

  /**
   * Obtains resources in a specific account group based on the fields in the resource properties by using a SELECT statement.
   * 
   * @remarks
   * When you write a `SELECT` statement, you must obtain the fields and the data types of the fields from the property file of the resource type. For more information about property files, see[ Alibaba Cloud Config Resource Schema](https://github.com/aliyun/alibabacloud-config-resource-schema)
   * > 
   * *   Each resource type supported by Cloud Config has a property file. Property files are named based on the related resource types. For example, the property file of the `ACS::ECS::Instance` resource type is named `ACS_ECS_Instance.properties.json`. Property files of different resource types are placed under the `config/properties/resource-types` path.
   * *   For more information about the examples and limits on SQL query statements, see [Examples of SQL query statements](https://help.aliyun.com/document_detail/398718.html) and [Limits on SQL query statements](https://help.aliyun.com/document_detail/398750.html).
   * This topic provides an example on how to obtain all resources whose tag key is `business` and whose tag value is `online` in the account group `ca-4b05626622af000c****` by using the advanced search feature.
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
   * Obtains resources in a specific account group based on the fields in the resource properties by using a SELECT statement.
   * 
   * @remarks
   * When you write a `SELECT` statement, you must obtain the fields and the data types of the fields from the property file of the resource type. For more information about property files, see[ Alibaba Cloud Config Resource Schema](https://github.com/aliyun/alibabacloud-config-resource-schema)
   * > 
   * *   Each resource type supported by Cloud Config has a property file. Property files are named based on the related resource types. For example, the property file of the `ACS::ECS::Instance` resource type is named `ACS_ECS_Instance.properties.json`. Property files of different resource types are placed under the `config/properties/resource-types` path.
   * *   For more information about the examples and limits on SQL query statements, see [Examples of SQL query statements](https://help.aliyun.com/document_detail/398718.html) and [Limits on SQL query statements](https://help.aliyun.com/document_detail/398750.html).
   * This topic provides an example on how to obtain all resources whose tag key is `business` and whose tag value is `online` in the account group `ca-4b05626622af000c****` by using the advanced search feature.
   * 
   * @param request - ListAggregateResourcesByAdvancedSearchRequest
   * @returns ListAggregateResourcesByAdvancedSearchResponse
   */
  async listAggregateResourcesByAdvancedSearch(request: $_model.ListAggregateResourcesByAdvancedSearchRequest): Promise<$_model.ListAggregateResourcesByAdvancedSearchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAggregateResourcesByAdvancedSearchWithOptions(request, runtime);
  }

  /**
   * Queries all account groups within the current management account or delegated administrator account.
   * 
   * @remarks
   * The sample request in this topic shows you how to query account groups. A maximum of 10 entries can be returned for the request. As shown in the responses, the account group returned is named as `Test_Group`, its description is `Test account group`, and it is of the `CUSTOM` type, which indicates a custom account group. The account group contains two member accounts.
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
   * Queries all account groups within the current management account or delegated administrator account.
   * 
   * @remarks
   * The sample request in this topic shows you how to query account groups. A maximum of 10 entries can be returned for the request. As shown in the responses, the account group returned is named as `Test_Group`, its description is `Test account group`, and it is of the `CUSTOM` type, which indicates a custom account group. The account group contains two member accounts.
   * 
   * @param request - ListAggregatorsRequest
   * @returns ListAggregatorsResponse
   */
  async listAggregators(request: $_model.ListAggregatorsRequest): Promise<$_model.ListAggregatorsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAggregatorsWithOptions(request, runtime);
  }

  /**
   * Queries all compliance package templates provided by Cloud Config and the details of the compliance package templates.
   * 
   * @remarks
   * A compliance package template is a collection of rules that Cloud Config can create based on compliance scenarios.
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
   * Queries all compliance package templates provided by Cloud Config and the details of the compliance package templates.
   * 
   * @remarks
   * A compliance package template is a collection of rules that Cloud Config can create based on compliance scenarios.
   * 
   * @param request - ListCompliancePackTemplatesRequest
   * @returns ListCompliancePackTemplatesResponse
   */
  async listCompliancePackTemplates(request: $_model.ListCompliancePackTemplatesRequest): Promise<$_model.ListCompliancePackTemplatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCompliancePackTemplatesWithOptions(request, runtime);
  }

  /**
   * Queries a list of compliance packages.
   * 
   * @remarks
   * This topic provides an example of how to query compliance packages. The return result shows the details of the `cp-fdc8626622af00f9****` compliance package.
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
   * Queries a list of compliance packages.
   * 
   * @remarks
   * This topic provides an example of how to query compliance packages. The return result shows the details of the `cp-fdc8626622af00f9****` compliance package.
   * 
   * @param request - ListCompliancePacksRequest
   * @returns ListCompliancePacksResponse
   */
  async listCompliancePacks(request: $_model.ListCompliancePacksRequest): Promise<$_model.ListCompliancePacksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCompliancePacksWithOptions(request, runtime);
  }

  /**
   * Queries a list of delivery channels.
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
   * Queries a list of delivery channels.
   * 
   * @param request - ListConfigDeliveryChannelsRequest
   * @returns ListConfigDeliveryChannelsResponse
   */
  async listConfigDeliveryChannels(request: $_model.ListConfigDeliveryChannelsRequest): Promise<$_model.ListConfigDeliveryChannelsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listConfigDeliveryChannelsWithOptions(request, runtime);
  }

  /**
   * Queries the compliance evaluation results of resources based on a rule.
   * 
   * @remarks
   * This topic provides an example on how to query the compliance evaluation result of resources based on a rule whose ID is `cr-cac56457e0d900d3****`. The returned result indicates that the `i-hp3e4kvhzqn2s11t****` resource is evaluated as `NON_COMPLIANT` by using the rule. The resource is an Elastic Compute Service (ECS) instance.
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
   * Queries the compliance evaluation results of resources based on a rule.
   * 
   * @remarks
   * This topic provides an example on how to query the compliance evaluation result of resources based on a rule whose ID is `cr-cac56457e0d900d3****`. The returned result indicates that the `i-hp3e4kvhzqn2s11t****` resource is evaluated as `NON_COMPLIANT` by using the rule. The resource is an Elastic Compute Service (ECS) instance.
   * 
   * @param request - ListConfigRuleEvaluationResultsRequest
   * @returns ListConfigRuleEvaluationResultsResponse
   */
  async listConfigRuleEvaluationResults(request: $_model.ListConfigRuleEvaluationResultsRequest): Promise<$_model.ListConfigRuleEvaluationResultsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listConfigRuleEvaluationResultsWithOptions(request, runtime);
  }

  /**
   * Queries the statistics of compliance evaluation results of the current Alibaba Cloud account.
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
   * Queries the statistics of compliance evaluation results of the current Alibaba Cloud account.
   * @returns ListConfigRuleEvaluationStatisticsResponse
   */
  async listConfigRuleEvaluationStatistics(): Promise<$_model.ListConfigRuleEvaluationStatisticsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listConfigRuleEvaluationStatisticsWithOptions(runtime);
  }

  /**
   * 规则支持的操作符列表
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
   * 规则支持的操作符列表
   * @returns ListConfigRuleOperatorsResponse
   */
  async listConfigRuleOperators(): Promise<$_model.ListConfigRuleOperatorsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listConfigRuleOperatorsWithOptions(runtime);
  }

  /**
   * Queries the rules of the current account.
   * 
   * @remarks
   * This topic provides an example on how to query the rules of the current account. The response shows that the current account has a total of one rule and three evaluated resources. The resources are evaluated as compliant.
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
   * Queries the rules of the current account.
   * 
   * @remarks
   * This topic provides an example on how to query the rules of the current account. The response shows that the current account has a total of one rule and three evaluated resources. The resources are evaluated as compliant.
   * 
   * @param request - ListConfigRulesRequest
   * @returns ListConfigRulesResponse
   */
  async listConfigRules(request: $_model.ListConfigRulesRequest): Promise<$_model.ListConfigRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listConfigRulesWithOptions(request, runtime);
  }

  /**
   * Obtains a list of resources aggregated across regions within an Alibaba Cloud account.
   * 
   * @remarks
   * This topic provides an example on how to call the ListDiscoveredResources operation to query the resources in the current Alibaba Cloud account. The returned result indicates that a total of eight resources exist in the account.
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
   * Obtains a list of resources aggregated across regions within an Alibaba Cloud account.
   * 
   * @remarks
   * This topic provides an example on how to call the ListDiscoveredResources operation to query the resources in the current Alibaba Cloud account. The returned result indicates that a total of eight resources exist in the account.
   * 
   * @param request - ListDiscoveredResourcesRequest
   * @returns ListDiscoveredResourcesResponse
   */
  async listDiscoveredResources(request: $_model.ListDiscoveredResourcesRequest): Promise<$_model.ListDiscoveredResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDiscoveredResourcesWithOptions(request, runtime);
  }

  /**
   * Queries a list of cloud services that are integrated with Cloud Config and the status of each cloud service.
   * 
   * @remarks
   * This topic provides an example on how to query the cloud services that can be integrated by the current Alibaba Cloud account.
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
   * Queries a list of cloud services that are integrated with Cloud Config and the status of each cloud service.
   * 
   * @remarks
   * This topic provides an example on how to query the cloud services that can be integrated by the current Alibaba Cloud account.
   * @returns ListIntegratedServiceResponse
   */
  async listIntegratedService(): Promise<$_model.ListIntegratedServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listIntegratedServiceWithOptions(runtime);
  }

  /**
   * Queries a list of managed rules supported by Cloud Config.
   * 
   * @remarks
   * ### [](#)Background information
   * For more information about how to define, execute, and integrate a managed rule, see [Definition and execution of rules](https://help.aliyun.com/document_detail/128273.html).
   * ### [](#)Description
   * This topic provides an example on how to query all managed rules whose keyword is `CDN`. The response shows that 21 managed rules exist.
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
   * Queries a list of managed rules supported by Cloud Config.
   * 
   * @remarks
   * ### [](#)Background information
   * For more information about how to define, execute, and integrate a managed rule, see [Definition and execution of rules](https://help.aliyun.com/document_detail/128273.html).
   * ### [](#)Description
   * This topic provides an example on how to query all managed rules whose keyword is `CDN`. The response shows that 21 managed rules exist.
   * 
   * @param request - ListManagedRulesRequest
   * @returns ListManagedRulesResponse
   */
  async listManagedRules(request: $_model.ListManagedRulesRequest): Promise<$_model.ListManagedRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listManagedRulesWithOptions(request, runtime);
  }

  /**
   * Queries a list of evaluation rules supported by Cloud Config.
   * 
   * @remarks
   * For more information about how to define, execute, and integrate an evaluation rule, see [Definition and execution of evaluation rules](https://help.aliyun.com/document_detail/470802.html).
   * After you create an evaluation rule, a managed rule that has the same settings as the evaluation rule is created. After you create a resource, the managed rule can be used to continuously check the compliance of the resource.
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
   * Queries a list of evaluation rules supported by Cloud Config.
   * 
   * @remarks
   * For more information about how to define, execute, and integrate an evaluation rule, see [Definition and execution of evaluation rules](https://help.aliyun.com/document_detail/470802.html).
   * After you create an evaluation rule, a managed rule that has the same settings as the evaluation rule is created. After you create a resource, the managed rule can be used to continuously check the compliance of the resource.
   * 
   * @param request - ListPreManagedRulesRequest
   * @returns ListPreManagedRulesResponse
   */
  async listPreManagedRules(request: $_model.ListPreManagedRulesRequest): Promise<$_model.ListPreManagedRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPreManagedRulesWithOptions(request, runtime);
  }

  /**
   * 获取推荐的托管规则列表
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
   * 获取推荐的托管规则列表
   * 
   * @param request - ListRecommendManagedRulesRequest
   * @returns ListRecommendManagedRulesResponse
   */
  async listRecommendManagedRules(request: $_model.ListRecommendManagedRulesRequest): Promise<$_model.ListRecommendManagedRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRecommendManagedRulesWithOptions(request, runtime);
  }

  /**
   * Queries the remediation records of a rule.
   * 
   * @remarks
   * This topic provides an example on how to query the remediation records of the rule cr-5392626622af0000\\*\\*\\*\\*.
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
   * Queries the remediation records of a rule.
   * 
   * @remarks
   * This topic provides an example on how to query the remediation records of the rule cr-5392626622af0000\\*\\*\\*\\*.
   * 
   * @param request - ListRemediationExecutionsRequest
   * @returns ListRemediationExecutionsResponse
   */
  async listRemediationExecutions(request: $_model.ListRemediationExecutionsRequest): Promise<$_model.ListRemediationExecutionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRemediationExecutionsWithOptions(request, runtime);
  }

  /**
   * Queries a list of remediation templates for a managed rule.
   * 
   * @remarks
   * In this topic, the `oss-bucket-public-write-prohibited` managed rule is used as an example. The return result shows the details of the remediation template of the `OOS` type for the managed rule. OOS represents Operation Orchestration Service.
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
   * Queries a list of remediation templates for a managed rule.
   * 
   * @remarks
   * In this topic, the `oss-bucket-public-write-prohibited` managed rule is used as an example. The return result shows the details of the remediation template of the `OOS` type for the managed rule. OOS represents Operation Orchestration Service.
   * 
   * @param request - ListRemediationTemplatesRequest
   * @returns ListRemediationTemplatesResponse
   */
  async listRemediationTemplates(request: $_model.ListRemediationTemplatesRequest): Promise<$_model.ListRemediationTemplatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRemediationTemplatesWithOptions(request, runtime);
  }

  /**
   * Queries the information about the execution of remediation templates.
   * 
   * @remarks
   * This topic provides an example on how to query the remediation templates for the rule whose ID is `cr-6b7c626622af00b4****`.
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
   * Queries the information about the execution of remediation templates.
   * 
   * @remarks
   * This topic provides an example on how to query the remediation templates for the rule whose ID is `cr-6b7c626622af00b4****`.
   * 
   * @param request - ListRemediationsRequest
   * @returns ListRemediationsResponse
   */
  async listRemediations(request: $_model.ListRemediationsRequest): Promise<$_model.ListRemediationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRemediationsWithOptions(request, runtime);
  }

  /**
   * Queries the compliance evaluation results of resources.
   * 
   * @remarks
   * In this example, the compliance evaluation result of the `23642660635396****` resource is queried and the resource is a RAM user. The returned result indicates that the resource is evaluated as `NON_COMPLIANT` by using the `cr-7f7d626622af0041****` rule.
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
   * Queries the compliance evaluation results of resources.
   * 
   * @remarks
   * In this example, the compliance evaluation result of the `23642660635396****` resource is queried and the resource is a RAM user. The returned result indicates that the resource is evaluated as `NON_COMPLIANT` by using the `cr-7f7d626622af0041****` rule.
   * 
   * @param request - ListResourceEvaluationResultsRequest
   * @returns ListResourceEvaluationResultsResponse
   */
  async listResourceEvaluationResults(request: $_model.ListResourceEvaluationResultsRequest): Promise<$_model.ListResourceEvaluationResultsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listResourceEvaluationResultsWithOptions(request, runtime);
  }

  /**
   * Queries a list of resources that associate with a specific resource.
   * 
   * @remarks
   * For information about the Alibaba Cloud services and resource types supported by Cloud Config, see [Alibaba Cloud services and resource types supported by Cloud Config](https://help.aliyun.com/document_detail/127411.html).
   * This topic provides an example on how to query the information about the disks that are attached to an Elastic Compute Service (ECS) instance named `i-j6cajg9yrfoh4sas****` that is created by the current Alibaba Cloud account in the China (Shanghai) region.
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
   * Queries a list of resources that associate with a specific resource.
   * 
   * @remarks
   * For information about the Alibaba Cloud services and resource types supported by Cloud Config, see [Alibaba Cloud services and resource types supported by Cloud Config](https://help.aliyun.com/document_detail/127411.html).
   * This topic provides an example on how to query the information about the disks that are attached to an Elastic Compute Service (ECS) instance named `i-j6cajg9yrfoh4sas****` that is created by the current Alibaba Cloud account in the China (Shanghai) region.
   * 
   * @param request - ListResourceRelationsRequest
   * @returns ListResourceRelationsResponse
   */
  async listResourceRelations(request: $_model.ListResourceRelationsRequest): Promise<$_model.ListResourceRelationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listResourceRelationsWithOptions(request, runtime);
  }

  /**
   * Obtains resources based on the fields in the resource properties by using a SELECT statement.
   * 
   * @remarks
   * When you write a `SELECT` statement, you must obtain the fields and the data types of the fields from the property file of the resource type. For more information about property files, see [Alibaba Cloud Config Resource Schema](https://github.com/aliyun/alibabacloud-config-resource-schema).
   * > 
   * *   Each resource type supported by Cloud Config has a property file. Property files are named based on the related resource types. For example, the property file of the `ACS::ECS::Instance` resource type is named `ACS_ECS_Instance.properties.json`. Property files of different resource types are placed under the `config/properties/resource-types` path.
   * *   For more information about the examples and limits on SQL query statements, see [Examples of SQL query statements](https://help.aliyun.com/document_detail/398718.html) and [Limits on SQL query statements](https://help.aliyun.com/document_detail/398750.html).
   * This topic provides an example on how to obtain all resources whose tag key is `business` and whose tag value is `online` within the current account by using the advanced search feature.
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
   * Obtains resources based on the fields in the resource properties by using a SELECT statement.
   * 
   * @remarks
   * When you write a `SELECT` statement, you must obtain the fields and the data types of the fields from the property file of the resource type. For more information about property files, see [Alibaba Cloud Config Resource Schema](https://github.com/aliyun/alibabacloud-config-resource-schema).
   * > 
   * *   Each resource type supported by Cloud Config has a property file. Property files are named based on the related resource types. For example, the property file of the `ACS::ECS::Instance` resource type is named `ACS_ECS_Instance.properties.json`. Property files of different resource types are placed under the `config/properties/resource-types` path.
   * *   For more information about the examples and limits on SQL query statements, see [Examples of SQL query statements](https://help.aliyun.com/document_detail/398718.html) and [Limits on SQL query statements](https://help.aliyun.com/document_detail/398750.html).
   * This topic provides an example on how to obtain all resources whose tag key is `business` and whose tag value is `online` within the current account by using the advanced search feature.
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
   * Queries tags that are added to specified resources.
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
   * Queries tags that are added to specified resources.
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: $_model.ListTagResourcesRequest): Promise<$_model.ListTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * Submits the evaluation results of a rule from Function Compute.
   * 
   * @remarks
   * For more information about the definition, use scenarios, and execution of custom function rules, see [Definition and execution of custom function rules](https://help.aliyun.com/document_detail/127405.html).
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
   * Submits the evaluation results of a rule from Function Compute.
   * 
   * @remarks
   * For more information about the definition, use scenarios, and execution of custom function rules, see [Definition and execution of custom function rules](https://help.aliyun.com/document_detail/127405.html).
   * 
   * @param request - PutEvaluationsRequest
   * @returns PutEvaluationsResponse
   */
  async putEvaluations(request: $_model.PutEvaluationsRequest): Promise<$_model.PutEvaluationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.putEvaluationsWithOptions(request, runtime);
  }

  /**
   * Re-evaluates resources that are evaluated based on a rule after the evaluation results on some resources of an ignored rule in an account group are resumed.
   * 
   * @remarks
   * ### [](#)Prerequisites
   * One or more non-compliant resources that are evaluated by a rule are ignored. For more information, see [IgnoreAggregateEvaluationResults](https://help.aliyun.com/document_detail/607054.html).
   * ### [](#)Description
   * This topic provides an example on how to re-evaluate the non-compliant resource that is evaluated by the `cr-7e72626622af0051****` rule of the `120886317861****` member in the `ca-5b6c626622af008f****` group account. The ID of the region in which the resource resides is `cn-beijing`, the type of the resource is `ACS::SLB::LoadBalancer`, and the ID of the resource is `lb-hp3a3b4ztyfm2plgm****`.
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
   * Re-evaluates resources that are evaluated based on a rule after the evaluation results on some resources of an ignored rule in an account group are resumed.
   * 
   * @remarks
   * ### [](#)Prerequisites
   * One or more non-compliant resources that are evaluated by a rule are ignored. For more information, see [IgnoreAggregateEvaluationResults](https://help.aliyun.com/document_detail/607054.html).
   * ### [](#)Description
   * This topic provides an example on how to re-evaluate the non-compliant resource that is evaluated by the `cr-7e72626622af0051****` rule of the `120886317861****` member in the `ca-5b6c626622af008f****` group account. The ID of the region in which the resource resides is `cn-beijing`, the type of the resource is `ACS::SLB::LoadBalancer`, and the ID of the resource is `lb-hp3a3b4ztyfm2plgm****`.
   * 
   * @param request - RevertAggregateEvaluationResultsRequest
   * @returns RevertAggregateEvaluationResultsResponse
   */
  async revertAggregateEvaluationResults(request: $_model.RevertAggregateEvaluationResultsRequest): Promise<$_model.RevertAggregateEvaluationResultsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.revertAggregateEvaluationResultsWithOptions(request, runtime);
  }

  /**
   * Re-evaluates resources that are evaluated based on a rule after the evaluation results on some resources of an ignored rule are resumed.
   * 
   * @remarks
   * ### [](#)Prerequisites
   * One or more non-compliant resources that are evaluated by a rule are ignored. For more information, see [IgnoreEvaluationResults](https://help.aliyun.com/document_detail/606990.html).
   * ### [](#)Description
   * This topic provides an example on how to re-evaluate the `lb-hp3a3b4ztyfm2plgm****` non-compliant resource that is evaluated by the `cr-7e72626622af0051****` rule. The ID of the region in which the resource resides is`cn-beijing`, the type of the resource is `ACS::SLB::LoadBalancer`, and the ID of the resource is `lb-hp3a3b4ztyfm2plgm****`.
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
   * Re-evaluates resources that are evaluated based on a rule after the evaluation results on some resources of an ignored rule are resumed.
   * 
   * @remarks
   * ### [](#)Prerequisites
   * One or more non-compliant resources that are evaluated by a rule are ignored. For more information, see [IgnoreEvaluationResults](https://help.aliyun.com/document_detail/606990.html).
   * ### [](#)Description
   * This topic provides an example on how to re-evaluate the `lb-hp3a3b4ztyfm2plgm****` non-compliant resource that is evaluated by the `cr-7e72626622af0051****` rule. The ID of the region in which the resource resides is`cn-beijing`, the type of the resource is `ACS::SLB::LoadBalancer`, and the ID of the resource is `lb-hp3a3b4ztyfm2plgm****`.
   * 
   * @param request - RevertEvaluationResultsRequest
   * @returns RevertEvaluationResultsResponse
   */
  async revertEvaluationResults(request: $_model.RevertEvaluationResultsRequest): Promise<$_model.RevertEvaluationResultsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.revertEvaluationResultsWithOptions(request, runtime);
  }

  /**
   * Re-evaluates the compliance of resources based on a rule or based on all rules in a compliance package in a specific account group.
   * 
   * @remarks
   * > After you call this operation, the compliance evaluation is performed only once. To query the compliance evaluation results returned by the rule, call the ListAggregateConfigRuleEvaluationResults operation. For more information, see [ListAggregateConfigRuleEvaluationResults](https://help.aliyun.com/document_detail/265979.html).
   * The sample request in this topic shows how to use the `cr-c169626622af009f****` rule in the `ca-3a58626622af0005****` account group to evaluate resources.
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
   * Re-evaluates the compliance of resources based on a rule or based on all rules in a compliance package in a specific account group.
   * 
   * @remarks
   * > After you call this operation, the compliance evaluation is performed only once. To query the compliance evaluation results returned by the rule, call the ListAggregateConfigRuleEvaluationResults operation. For more information, see [ListAggregateConfigRuleEvaluationResults](https://help.aliyun.com/document_detail/265979.html).
   * The sample request in this topic shows how to use the `cr-c169626622af009f****` rule in the `ca-3a58626622af0005****` account group to evaluate resources.
   * 
   * @param request - StartAggregateConfigRuleEvaluationRequest
   * @returns StartAggregateConfigRuleEvaluationResponse
   */
  async startAggregateConfigRuleEvaluation(request: $_model.StartAggregateConfigRuleEvaluationRequest): Promise<$_model.StartAggregateConfigRuleEvaluationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startAggregateConfigRuleEvaluationWithOptions(request, runtime);
  }

  /**
   * Performs a remediation operation by using a rule in an account group.
   * 
   * @remarks
   * This topic provides an example on how to manually perform a remediation operation by using the rule whose ID is `cr-6b7c626622af00b4****` in the account group whose ID is `ca-6b4a626622af0012****`. The return result shows that the manual execution is successful.
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
   * Performs a remediation operation by using a rule in an account group.
   * 
   * @remarks
   * This topic provides an example on how to manually perform a remediation operation by using the rule whose ID is `cr-6b7c626622af00b4****` in the account group whose ID is `ca-6b4a626622af0012****`. The return result shows that the manual execution is successful.
   * 
   * @param request - StartAggregateRemediationRequest
   * @returns StartAggregateRemediationResponse
   */
  async startAggregateRemediation(request: $_model.StartAggregateRemediationRequest): Promise<$_model.StartAggregateRemediationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startAggregateRemediationWithOptions(request, runtime);
  }

  /**
   * Re-evaluates the compliance of resources based on a rule or based on all rules in a compliance package.
   * 
   * @remarks
   * In this example, the cr-9920626622af0035\\*\\*\\*\\* rule is used to re-evaluate the compliance of resources.
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
   * Re-evaluates the compliance of resources based on a rule or based on all rules in a compliance package.
   * 
   * @remarks
   * In this example, the cr-9920626622af0035\\*\\*\\*\\* rule is used to re-evaluate the compliance of resources.
   * 
   * @param request - StartConfigRuleEvaluationRequest
   * @returns StartConfigRuleEvaluationResponse
   */
  async startConfigRuleEvaluation(request: $_model.StartConfigRuleEvaluationRequest): Promise<$_model.StartConfigRuleEvaluationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startConfigRuleEvaluationWithOptions(request, runtime);
  }

  /**
   * 触发单资源重新评估
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
   * 触发单资源重新评估
   * 
   * @param request - StartConfigRuleEvaluationByResourceRequest
   * @returns StartConfigRuleEvaluationByResourceResponse
   */
  async startConfigRuleEvaluationByResource(request: $_model.StartConfigRuleEvaluationByResourceRequest): Promise<$_model.StartConfigRuleEvaluationByResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startConfigRuleEvaluationByResourceWithOptions(request, runtime);
  }

  /**
   * Enables Cloud Config to monitor the resources of your Alibaba Cloud account.
   * 
   * @remarks
   * This topic provides an example on how to enable Cloud Config to monitor the resources of your Alibaba Cloud account.
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
   * Enables Cloud Config to monitor the resources of your Alibaba Cloud account.
   * 
   * @remarks
   * This topic provides an example on how to enable Cloud Config to monitor the resources of your Alibaba Cloud account.
   * @returns StartConfigurationRecorderResponse
   */
  async startConfigurationRecorder(): Promise<$_model.StartConfigurationRecorderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startConfigurationRecorderWithOptions(runtime);
  }

  /**
   * Performs a remediation operation by using a rule.
   * 
   * @remarks
   * This topic provides an example on how to perform a remediation operation by using the rule whose ID is `cr-8a973ac2e2be00a2****`. The returned result shows that the manual execution is successful.
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
   * Performs a remediation operation by using a rule.
   * 
   * @remarks
   * This topic provides an example on how to perform a remediation operation by using the rule whose ID is `cr-8a973ac2e2be00a2****`. The returned result shows that the manual execution is successful.
   * 
   * @param request - StartRemediationRequest
   * @returns StartRemediationResponse
   */
  async startRemediation(request: $_model.StartRemediationRequest): Promise<$_model.StartRemediationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startRemediationWithOptions(request, runtime);
  }

  /**
   * Deactivates Cloud Config.
   * 
   * @remarks
   * >  After you deactivate Cloud Config, the resource configurations, created rules, and compliance evaluation results that are stored in Cloud Config are automatically cleared and cannot be restored. Proceed with caution.
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
   * Deactivates Cloud Config.
   * 
   * @remarks
   * >  After you deactivate Cloud Config, the resource configurations, created rules, and compliance evaluation results that are stored in Cloud Config are automatically cleared and cannot be restored. Proceed with caution.
   * @returns StopConfigurationRecorderResponse
   */
  async stopConfigurationRecorder(): Promise<$_model.StopConfigurationRecorderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopConfigurationRecorderWithOptions(runtime);
  }

  /**
   * Adds tags to resources.
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
   * Adds tags to resources.
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: $_model.TagResourcesRequest): Promise<$_model.TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * 实时测试通知
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
   * 实时测试通知
   * 
   * @param request - TriggerReportSendRequest
   * @returns TriggerReportSendResponse
   */
  async triggerReportSend(request: $_model.TriggerReportSendRequest): Promise<$_model.TriggerReportSendResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.triggerReportSendWithOptions(request, runtime);
  }

  /**
   * Removes tags from specified resources.
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
   * Removes tags from specified resources.
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: $_model.UntagResourcesRequest): Promise<$_model.UntagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  /**
   * Modifies the configurations of a compliance package in an account group.
   * 
   * @remarks
   * This topic provides an example on how to change the value of the `eip-bandwidth-limit` parameter in the rule template of the compliance package `cp-fdc8626622af00f9****` in the account group `ca-f632626622af0079****` to `20`.
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
   * Modifies the configurations of a compliance package in an account group.
   * 
   * @remarks
   * This topic provides an example on how to change the value of the `eip-bandwidth-limit` parameter in the rule template of the compliance package `cp-fdc8626622af00f9****` in the account group `ca-f632626622af0079****` to `20`.
   * 
   * @param request - UpdateAggregateCompliancePackRequest
   * @returns UpdateAggregateCompliancePackResponse
   */
  async updateAggregateCompliancePack(request: $_model.UpdateAggregateCompliancePackRequest): Promise<$_model.UpdateAggregateCompliancePackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAggregateCompliancePackWithOptions(request, runtime);
  }

  /**
   * Modifies a delivery channel in an account group.
   * 
   * @remarks
   * This topic provides an example on how to disable a delivery channel in an account group. The ID of the account group is `ca-a4e5626622af0079****`, and the ID of the delivery channel is `cdc-8e45ff4e06a3a8****`. The Status parameter is set to `0`. After the delivery channel is disabled, Cloud Config retains the most recent delivery configuration and stops resource data delivery.
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
   * Modifies a delivery channel in an account group.
   * 
   * @remarks
   * This topic provides an example on how to disable a delivery channel in an account group. The ID of the account group is `ca-a4e5626622af0079****`, and the ID of the delivery channel is `cdc-8e45ff4e06a3a8****`. The Status parameter is set to `0`. After the delivery channel is disabled, Cloud Config retains the most recent delivery configuration and stops resource data delivery.
   * 
   * @param request - UpdateAggregateConfigDeliveryChannelRequest
   * @returns UpdateAggregateConfigDeliveryChannelResponse
   */
  async updateAggregateConfigDeliveryChannel(request: $_model.UpdateAggregateConfigDeliveryChannelRequest): Promise<$_model.UpdateAggregateConfigDeliveryChannelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAggregateConfigDeliveryChannelWithOptions(request, runtime);
  }

  /**
   * Modifies the description, input parameters, and risk level of a rule in a specific account group.
   * 
   * @remarks
   * This topic provides an example on how to change the risk level of the rule `cr-4e3d626622af0080****` in an account group `ca-a4e5626622af0079****` to `3`, which indicates low risk level.
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
   * Modifies the description, input parameters, and risk level of a rule in a specific account group.
   * 
   * @remarks
   * This topic provides an example on how to change the risk level of the rule `cr-4e3d626622af0080****` in an account group `ca-a4e5626622af0079****` to `3`, which indicates low risk level.
   * 
   * @param request - UpdateAggregateConfigRuleRequest
   * @returns UpdateAggregateConfigRuleResponse
   */
  async updateAggregateConfigRule(request: $_model.UpdateAggregateConfigRuleRequest): Promise<$_model.UpdateAggregateConfigRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAggregateConfigRuleWithOptions(request, runtime);
  }

  /**
   * Modifies a remediation template for a rule in an account group.
   * 
   * @remarks
   * This topic describes how to change the execution mode of the `crr-909ba2d4716700eb****` remediation setting for a rule in the `ca-6b4a626622af0012****` account group to `AUTO_EXECUTION`, which specifies automatic remediation. This topic also provides a sample request.
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
   * Modifies a remediation template for a rule in an account group.
   * 
   * @remarks
   * This topic describes how to change the execution mode of the `crr-909ba2d4716700eb****` remediation setting for a rule in the `ca-6b4a626622af0012****` account group to `AUTO_EXECUTION`, which specifies automatic remediation. This topic also provides a sample request.
   * 
   * @param request - UpdateAggregateRemediationRequest
   * @returns UpdateAggregateRemediationResponse
   */
  async updateAggregateRemediation(request: $_model.UpdateAggregateRemediationRequest): Promise<$_model.UpdateAggregateRemediationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAggregateRemediationWithOptions(request, runtime);
  }

  /**
   * The management account or delegated administrator account of a resource directory can be used to modify the name and description of an account group. The management account or delegated administrator account can also be used to add or remove members from the account group.
   * 
   * @remarks
   * This topic provides an example on how to add a member to the account group `ca-dacf86d8314e00eb****`. The member ID is `173808452267****`, the member name is `Tony`, and the member belongs to the resource directory `ResourceDirectory`.
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
   * The management account or delegated administrator account of a resource directory can be used to modify the name and description of an account group. The management account or delegated administrator account can also be used to add or remove members from the account group.
   * 
   * @remarks
   * This topic provides an example on how to add a member to the account group `ca-dacf86d8314e00eb****`. The member ID is `173808452267****`, the member name is `Tony`, and the member belongs to the resource directory `ResourceDirectory`.
   * 
   * @param request - UpdateAggregatorRequest
   * @returns UpdateAggregatorResponse
   */
  async updateAggregator(request: $_model.UpdateAggregatorRequest): Promise<$_model.UpdateAggregatorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAggregatorWithOptions(request, runtime);
  }

  /**
   * Modifies the configurations of a specific compliance package in the current account.
   * 
   * @remarks
   * This topic provides an example on how to change the value of the `eip-bandwidth-limit` parameter of a rule in the compliance package `cp-a8a8626622af0082****` to `20`.
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
   * Modifies the configurations of a specific compliance package in the current account.
   * 
   * @remarks
   * This topic provides an example on how to change the value of the `eip-bandwidth-limit` parameter of a rule in the compliance package `cp-a8a8626622af0082****` to `20`.
   * 
   * @param request - UpdateCompliancePackRequest
   * @returns UpdateCompliancePackResponse
   */
  async updateCompliancePack(request: $_model.UpdateCompliancePackRequest): Promise<$_model.UpdateCompliancePackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateCompliancePackWithOptions(request, runtime);
  }

  /**
   * Modifies a delivery channel by using the current account.
   * 
   * @remarks
   * In this example, a delivery channel is disabled. The ID of the delivery channel is `cdc-8e45ff4e06a3a8****```. The Status parameter is set to 0. After the delivery channel is disabled, Cloud Config retains the most recent delivery configuration and stops the delivery of resource data.
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
   * Modifies a delivery channel by using the current account.
   * 
   * @remarks
   * In this example, a delivery channel is disabled. The ID of the delivery channel is `cdc-8e45ff4e06a3a8****```. The Status parameter is set to 0. After the delivery channel is disabled, Cloud Config retains the most recent delivery configuration and stops the delivery of resource data.
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
   * This topic provides an example on how to change the risk level of the rule `cr-a260626622af0005****` to `3`, which indicates low risk level.
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
   * This topic provides an example on how to change the risk level of the rule `cr-a260626622af0005****` to `3`, which indicates low risk level.
   * 
   * @param request - UpdateConfigRuleRequest
   * @returns UpdateConfigRuleResponse
   */
  async updateConfigRule(request: $_model.UpdateConfigRuleRequest): Promise<$_model.UpdateConfigRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateConfigRuleWithOptions(request, runtime);
  }

  /**
   * Modifies the resource monitoring scope of the current account.
   * 
   * @remarks
   * This topic provides an example on how to change the resource monitoring scope of the current account to ACS::ECS::Instance.
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
   * Modifies the resource monitoring scope of the current account.
   * 
   * @remarks
   * This topic provides an example on how to change the resource monitoring scope of the current account to ACS::ECS::Instance.
   * 
   * @param request - UpdateConfigurationRecorderRequest
   * @returns UpdateConfigurationRecorderResponse
   */
  async updateConfigurationRecorder(request: $_model.UpdateConfigurationRecorderRequest): Promise<$_model.UpdateConfigurationRecorderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateConfigurationRecorderWithOptions(request, runtime);
  }

  /**
   * Enables or disables the integration of a cloud service.
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
   * Enables or disables the integration of a cloud service.
   * 
   * @param request - UpdateIntegratedServiceStatusRequest
   * @returns UpdateIntegratedServiceStatusResponse
   */
  async updateIntegratedServiceStatus(request: $_model.UpdateIntegratedServiceStatusRequest): Promise<$_model.UpdateIntegratedServiceStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateIntegratedServiceStatusWithOptions(request, runtime);
  }

  /**
   * Updates a remediation template for a rule.
   * 
   * @remarks
   * This topic describes how to change the execution mode of the `crr-909ba2d4716700eb****` remediation setting to `AUTO_EXECUTION`, which specifies automatic remediation. This topic also provides a sample request.
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
   * Updates a remediation template for a rule.
   * 
   * @remarks
   * This topic describes how to change the execution mode of the `crr-909ba2d4716700eb****` remediation setting to `AUTO_EXECUTION`, which specifies automatic remediation. This topic also provides a sample request.
   * 
   * @param request - UpdateRemediationRequest
   * @returns UpdateRemediationResponse
   */
  async updateRemediation(request: $_model.UpdateRemediationRequest): Promise<$_model.UpdateRemediationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateRemediationWithOptions(request, runtime);
  }

}
