// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import GatewayClient from '@alicloud/gateway-pop';
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil }from '@alicloud/openapi-core';


import * as $_model from './models/model';
export * from './models/model';

export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._productId = "ExpressConnectRouter";
    let gatewayClient = new GatewayClient();
    this._spi = gatewayClient;
    this._endpointRule = "regional";
    this._endpointMap = {
      'cn-hongkong': "expressconnectrouter.cn-shanghai.aliyuncs.com",
      'cn-zhangjiakou': "expressconnectrouter.cn-shanghai.aliyuncs.com",
      'cn-zhengzhou-jva': "expressconnectrouter.cn-shanghai.aliyuncs.com",
      'cn-shenzhen': "expressconnectrouter.cn-shanghai.aliyuncs.com",
      'cn-beijing': "expressconnectrouter.cn-shanghai.aliyuncs.com",
      'cn-wulanchabu': "expressconnectrouter.cn-shanghai.aliyuncs.com",
      'cn-nanjing': "expressconnectrouter.cn-shanghai.aliyuncs.com",
      'ap-northeast-2': "expressconnectrouter.cn-shanghai.aliyuncs.com",
      'ap-northeast-1': "expressconnectrouter.cn-shanghai.aliyuncs.com",
      'cn-fuzhou': "expressconnectrouter.cn-shanghai.aliyuncs.com",
      'cn-chengdu': "expressconnectrouter.cn-shanghai.aliyuncs.com",
      'cn-qingdao': "expressconnectrouter.cn-shanghai.aliyuncs.com",
      'cn-wuhan-lr': "expressconnectrouter.cn-shanghai.aliyuncs.com",
      'cn-guangzhou': "expressconnectrouter.cn-shanghai.aliyuncs.com",
      'cn-heyuan': "expressconnectrouter.cn-shanghai.aliyuncs.com",
      'ap-southeast-1': "expressconnectrouter.cn-shanghai.aliyuncs.com",
      'ap-southeast-3': "expressconnectrouter.cn-shanghai.aliyuncs.com",
      'cn-huhehaote': "expressconnectrouter.cn-shanghai.aliyuncs.com",
      'ap-southeast-5': "expressconnectrouter.cn-shanghai.aliyuncs.com",
      'ap-southeast-6': "expressconnectrouter.cn-shanghai.aliyuncs.com",
      'ap-southeast-7': "expressconnectrouter.cn-shanghai.aliyuncs.com",
      'cn-hangzhou': "expressconnectrouter.cn-shanghai.aliyuncs.com",
      'us-west-1': "expressconnectrouter.cn-shanghai.aliyuncs.com",
      'us-east-1': "expressconnectrouter.cn-shanghai.aliyuncs.com",
      'eu-central-1': "expressconnectrouter.cn-shanghai.aliyuncs.com",
      'eu-west-1': "expressconnectrouter.cn-shanghai.aliyuncs.com",
      'me-central-1': "expressconnectrouter.cn-shanghai.aliyuncs.com",
      'cn-shenzhen-finance-1': "expressconnectrouter.cn-shanghai.aliyuncs.com",
      'cn-shanghai-finance-1': "expressconnectrouter.cn-shanghai.aliyuncs.com",
      'cn-heyuan-acdr-1': "expressconnectrouter.cn-shanghai.aliyuncs.com",
      'cn-beijing-finance-1': "expressconnectrouter.cn-shanghai.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("expressconnectrouter", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Enables log delivery for a flow log.
   * 
   * @param request - ActivateFlowLogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ActivateFlowLogResponse
   */
  async activateFlowLogWithOptions(request: $_model.ActivateFlowLogRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ActivateFlowLogResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.version)) {
      query["Version"] = request.version;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.ecrId)) {
      body["EcrId"] = request.ecrId;
    }

    if (!$dara.isNull(request.flowLogId)) {
      body["FlowLogId"] = request.flowLogId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ActivateFlowLog",
      version: "2023-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ActivateFlowLogResponse>(await this.callApi(params, req, runtime), new $_model.ActivateFlowLogResponse({}));
  }

  /**
   * Enables log delivery for a flow log.
   * 
   * @param request - ActivateFlowLogRequest
   * @returns ActivateFlowLogResponse
   */
  async activateFlowLog(request: $_model.ActivateFlowLogRequest): Promise<$_model.ActivateFlowLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.activateFlowLogWithOptions(request, runtime);
  }

  /**
   * Attaches a child instance (VBR) to an Express Connect Router (ECR).
   * 
   * @remarks
   * Before you invoke the **AttachExpressConnectRouterChildInstance** operation to load a child instance (VBR) to an Express Connect Router (ECR), make sure that the Express Connect Router (ECR) is in the **Active** state.
   * 
   * @param request - AttachExpressConnectRouterChildInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AttachExpressConnectRouterChildInstanceResponse
   */
  async attachExpressConnectRouterChildInstanceWithOptions(request: $_model.AttachExpressConnectRouterChildInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AttachExpressConnectRouterChildInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.version)) {
      query["Version"] = request.version;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.childInstanceId)) {
      body["ChildInstanceId"] = request.childInstanceId;
    }

    if (!$dara.isNull(request.childInstanceOwnerId)) {
      body["ChildInstanceOwnerId"] = request.childInstanceOwnerId;
    }

    if (!$dara.isNull(request.childInstanceRegionId)) {
      body["ChildInstanceRegionId"] = request.childInstanceRegionId;
    }

    if (!$dara.isNull(request.childInstanceType)) {
      body["ChildInstanceType"] = request.childInstanceType;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.ecrId)) {
      body["EcrId"] = request.ecrId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AttachExpressConnectRouterChildInstance",
      version: "2023-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AttachExpressConnectRouterChildInstanceResponse>(await this.callApi(params, req, runtime), new $_model.AttachExpressConnectRouterChildInstanceResponse({}));
  }

  /**
   * Attaches a child instance (VBR) to an Express Connect Router (ECR).
   * 
   * @remarks
   * Before you invoke the **AttachExpressConnectRouterChildInstance** operation to load a child instance (VBR) to an Express Connect Router (ECR), make sure that the Express Connect Router (ECR) is in the **Active** state.
   * 
   * @param request - AttachExpressConnectRouterChildInstanceRequest
   * @returns AttachExpressConnectRouterChildInstanceResponse
   */
  async attachExpressConnectRouterChildInstance(request: $_model.AttachExpressConnectRouterChildInstanceRequest): Promise<$_model.AttachExpressConnectRouterChildInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.attachExpressConnectRouterChildInstanceWithOptions(request, runtime);
  }

  /**
   * Checks the Cloud Data Transfer (CDT) service required to add a specified region to an Express Connect Router (ECR).
   * 
   * @param request - CheckAddRegionToExpressConnectRouterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckAddRegionToExpressConnectRouterResponse
   */
  async checkAddRegionToExpressConnectRouterWithOptions(request: $_model.CheckAddRegionToExpressConnectRouterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckAddRegionToExpressConnectRouterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.version)) {
      query["Version"] = request.version;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.ecrId)) {
      body["EcrId"] = request.ecrId;
    }

    if (!$dara.isNull(request.freshRegionId)) {
      body["FreshRegionId"] = request.freshRegionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckAddRegionToExpressConnectRouter",
      version: "2023-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckAddRegionToExpressConnectRouterResponse>(await this.callApi(params, req, runtime), new $_model.CheckAddRegionToExpressConnectRouterResponse({}));
  }

  /**
   * Checks the Cloud Data Transfer (CDT) service required to add a specified region to an Express Connect Router (ECR).
   * 
   * @param request - CheckAddRegionToExpressConnectRouterRequest
   * @returns CheckAddRegionToExpressConnectRouterResponse
   */
  async checkAddRegionToExpressConnectRouter(request: $_model.CheckAddRegionToExpressConnectRouterRequest): Promise<$_model.CheckAddRegionToExpressConnectRouterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkAddRegionToExpressConnectRouterWithOptions(request, runtime);
  }

  /**
   * Creates an Express Connect Router (ECR).
   * 
   * @remarks
   * After you create an Express Connect Router (ECR) instance, the instance status is **Active**.
   * 
   * @param request - CreateExpressConnectRouterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateExpressConnectRouterResponse
   */
  async createExpressConnectRouterWithOptions(request: $_model.CreateExpressConnectRouterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateExpressConnectRouterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.version)) {
      query["Version"] = request.version;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.alibabaSideAsn)) {
      body["AlibabaSideAsn"] = request.alibabaSideAsn;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.tag)) {
      body["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateExpressConnectRouter",
      version: "2023-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateExpressConnectRouterResponse>(await this.callApi(params, req, runtime), new $_model.CreateExpressConnectRouterResponse({}));
  }

  /**
   * Creates an Express Connect Router (ECR).
   * 
   * @remarks
   * After you create an Express Connect Router (ECR) instance, the instance status is **Active**.
   * 
   * @param request - CreateExpressConnectRouterRequest
   * @returns CreateExpressConnectRouterResponse
   */
  async createExpressConnectRouter(request: $_model.CreateExpressConnectRouterRequest): Promise<$_model.CreateExpressConnectRouterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createExpressConnectRouterWithOptions(request, runtime);
  }

  /**
   * Associates an Express Connect Router (ECR) with a virtual private cloud (VPC) or a transit router (TR).
   * 
   * @param request - CreateExpressConnectRouterAssociationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateExpressConnectRouterAssociationResponse
   */
  async createExpressConnectRouterAssociationWithOptions(request: $_model.CreateExpressConnectRouterAssociationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateExpressConnectRouterAssociationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.version)) {
      query["Version"] = request.version;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.allowedPrefixes)) {
      body["AllowedPrefixes"] = request.allowedPrefixes;
    }

    if (!$dara.isNull(request.allowedPrefixesMode)) {
      body["AllowedPrefixesMode"] = request.allowedPrefixesMode;
    }

    if (!$dara.isNull(request.associationRegionId)) {
      body["AssociationRegionId"] = request.associationRegionId;
    }

    if (!$dara.isNull(request.cenId)) {
      body["CenId"] = request.cenId;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.createAttachment)) {
      body["CreateAttachment"] = request.createAttachment;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.ecrId)) {
      body["EcrId"] = request.ecrId;
    }

    if (!$dara.isNull(request.transitRouterId)) {
      body["TransitRouterId"] = request.transitRouterId;
    }

    if (!$dara.isNull(request.transitRouterOwnerId)) {
      body["TransitRouterOwnerId"] = request.transitRouterOwnerId;
    }

    if (!$dara.isNull(request.vpcId)) {
      body["VpcId"] = request.vpcId;
    }

    if (!$dara.isNull(request.vpcOwnerId)) {
      body["VpcOwnerId"] = request.vpcOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateExpressConnectRouterAssociation",
      version: "2023-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateExpressConnectRouterAssociationResponse>(await this.callApi(params, req, runtime), new $_model.CreateExpressConnectRouterAssociationResponse({}));
  }

  /**
   * Associates an Express Connect Router (ECR) with a virtual private cloud (VPC) or a transit router (TR).
   * 
   * @param request - CreateExpressConnectRouterAssociationRequest
   * @returns CreateExpressConnectRouterAssociationResponse
   */
  async createExpressConnectRouterAssociation(request: $_model.CreateExpressConnectRouterAssociationRequest): Promise<$_model.CreateExpressConnectRouterAssociationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createExpressConnectRouterAssociationWithOptions(request, runtime);
  }

  /**
   * Creates a flow log and enables log delivery by default.
   * 
   * @param request - CreateFlowLogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateFlowLogResponse
   */
  async createFlowLogWithOptions(request: $_model.CreateFlowLogRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateFlowLogResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.logStoreName)) {
      query["LogStoreName"] = request.logStoreName;
    }

    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.samplingRate)) {
      query["SamplingRate"] = request.samplingRate;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.targetSlsRegionId)) {
      query["TargetSlsRegionId"] = request.targetSlsRegionId;
    }

    if (!$dara.isNull(request.version)) {
      query["Version"] = request.version;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.ecrId)) {
      body["EcrId"] = request.ecrId;
    }

    if (!$dara.isNull(request.flowLogName)) {
      body["FlowLogName"] = request.flowLogName;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateFlowLog",
      version: "2023-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateFlowLogResponse>(await this.callApi(params, req, runtime), new $_model.CreateFlowLogResponse({}));
  }

  /**
   * Creates a flow log and enables log delivery by default.
   * 
   * @param request - CreateFlowLogRequest
   * @returns CreateFlowLogResponse
   */
  async createFlowLog(request: $_model.CreateFlowLogRequest): Promise<$_model.CreateFlowLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createFlowLogWithOptions(request, runtime);
  }

  /**
   * Creates an association between an Express Connect Router (ECR) and a route map.
   * 
   * @param request - CreateRouteMapAssociationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRouteMapAssociationResponse
   */
  async createRouteMapAssociationWithOptions(request: $_model.CreateRouteMapAssociationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateRouteMapAssociationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionIdList)) {
      query["RegionIdList"] = request.regionIdList;
    }

    if (!$dara.isNull(request.routeMapId)) {
      query["RouteMapId"] = request.routeMapId;
    }

    if (!$dara.isNull(request.version)) {
      query["Version"] = request.version;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.ecrId)) {
      body["EcrId"] = request.ecrId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRouteMapAssociation",
      version: "2023-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateRouteMapAssociationResponse>(await this.callApi(params, req, runtime), new $_model.CreateRouteMapAssociationResponse({}));
  }

  /**
   * Creates an association between an Express Connect Router (ECR) and a route map.
   * 
   * @param request - CreateRouteMapAssociationRequest
   * @returns CreateRouteMapAssociationResponse
   */
  async createRouteMapAssociation(request: $_model.CreateRouteMapAssociationRequest): Promise<$_model.CreateRouteMapAssociationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createRouteMapAssociationWithOptions(request, runtime);
  }

  /**
   * Stops log delivery for a flow log.
   * 
   * @param request - DeactivateFlowLogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeactivateFlowLogResponse
   */
  async deactivateFlowLogWithOptions(request: $_model.DeactivateFlowLogRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeactivateFlowLogResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.version)) {
      query["Version"] = request.version;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.ecrId)) {
      body["EcrId"] = request.ecrId;
    }

    if (!$dara.isNull(request.flowLogId)) {
      body["FlowLogId"] = request.flowLogId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeactivateFlowLog",
      version: "2023-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeactivateFlowLogResponse>(await this.callApi(params, req, runtime), new $_model.DeactivateFlowLogResponse({}));
  }

  /**
   * Stops log delivery for a flow log.
   * 
   * @param request - DeactivateFlowLogRequest
   * @returns DeactivateFlowLogResponse
   */
  async deactivateFlowLog(request: $_model.DeactivateFlowLogRequest): Promise<$_model.DeactivateFlowLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deactivateFlowLogWithOptions(request, runtime);
  }

  /**
   * Deletes an Express Connect Router (ECR).
   * 
   * @remarks
   * Before you invoke the DeleteExpressConnectRouter operation to delete an Express Connect Router (ECR) instance, note the following:
   * - Before you delete an Express Connect Router (ECR) instance, you must delete the resources associated with the Express Connect Router (ECR) instance.
   * - You can delete only Express Connect Router (ECR) instances that are in the **Active** state.
   * 
   * @param request - DeleteExpressConnectRouterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteExpressConnectRouterResponse
   */
  async deleteExpressConnectRouterWithOptions(request: $_model.DeleteExpressConnectRouterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteExpressConnectRouterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.version)) {
      query["Version"] = request.version;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.ecrId)) {
      body["EcrId"] = request.ecrId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteExpressConnectRouter",
      version: "2023-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteExpressConnectRouterResponse>(await this.callApi(params, req, runtime), new $_model.DeleteExpressConnectRouterResponse({}));
  }

  /**
   * Deletes an Express Connect Router (ECR).
   * 
   * @remarks
   * Before you invoke the DeleteExpressConnectRouter operation to delete an Express Connect Router (ECR) instance, note the following:
   * - Before you delete an Express Connect Router (ECR) instance, you must delete the resources associated with the Express Connect Router (ECR) instance.
   * - You can delete only Express Connect Router (ECR) instances that are in the **Active** state.
   * 
   * @param request - DeleteExpressConnectRouterRequest
   * @returns DeleteExpressConnectRouterResponse
   */
  async deleteExpressConnectRouter(request: $_model.DeleteExpressConnectRouterRequest): Promise<$_model.DeleteExpressConnectRouterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteExpressConnectRouterWithOptions(request, runtime);
  }

  /**
   * Disassociates an Express Connect Router (ECR) from a virtual private cloud (VPC) or a transit router.
   * 
   * @param request - DeleteExpressConnectRouterAssociationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteExpressConnectRouterAssociationResponse
   */
  async deleteExpressConnectRouterAssociationWithOptions(request: $_model.DeleteExpressConnectRouterAssociationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteExpressConnectRouterAssociationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.version)) {
      query["Version"] = request.version;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.associationId)) {
      body["AssociationId"] = request.associationId;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.deleteAttachment)) {
      body["DeleteAttachment"] = request.deleteAttachment;
    }

    if (!$dara.isNull(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.ecrId)) {
      body["EcrId"] = request.ecrId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteExpressConnectRouterAssociation",
      version: "2023-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteExpressConnectRouterAssociationResponse>(await this.callApi(params, req, runtime), new $_model.DeleteExpressConnectRouterAssociationResponse({}));
  }

  /**
   * Disassociates an Express Connect Router (ECR) from a virtual private cloud (VPC) or a transit router.
   * 
   * @param request - DeleteExpressConnectRouterAssociationRequest
   * @returns DeleteExpressConnectRouterAssociationResponse
   */
  async deleteExpressConnectRouterAssociation(request: $_model.DeleteExpressConnectRouterAssociationRequest): Promise<$_model.DeleteExpressConnectRouterAssociationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteExpressConnectRouterAssociationWithOptions(request, runtime);
  }

  /**
   * Deletes a flow log.
   * 
   * @param request - DeleteFlowlogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteFlowlogResponse
   */
  async deleteFlowlogWithOptions(request: $_model.DeleteFlowlogRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteFlowlogResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.flowLogId)) {
      query["FlowLogId"] = request.flowLogId;
    }

    if (!$dara.isNull(request.version)) {
      query["Version"] = request.version;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.ecrId)) {
      body["EcrId"] = request.ecrId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteFlowlog",
      version: "2023-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteFlowlogResponse>(await this.callApi(params, req, runtime), new $_model.DeleteFlowlogResponse({}));
  }

  /**
   * Deletes a flow log.
   * 
   * @param request - DeleteFlowlogRequest
   * @returns DeleteFlowlogResponse
   */
  async deleteFlowlog(request: $_model.DeleteFlowlogRequest): Promise<$_model.DeleteFlowlogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteFlowlogWithOptions(request, runtime);
  }

  /**
   * Deletes the association between an Express Connect Router (ECR) and a route policy.
   * 
   * @param request - DeleteRouteMapAssociationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRouteMapAssociationResponse
   */
  async deleteRouteMapAssociationWithOptions(request: $_model.DeleteRouteMapAssociationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRouteMapAssociationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.associationId)) {
      query["AssociationId"] = request.associationId;
    }

    if (!$dara.isNull(request.version)) {
      query["Version"] = request.version;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.ecrId)) {
      body["EcrId"] = request.ecrId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRouteMapAssociation",
      version: "2023-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteRouteMapAssociationResponse>(await this.callApi(params, req, runtime), new $_model.DeleteRouteMapAssociationResponse({}));
  }

  /**
   * Deletes the association between an Express Connect Router (ECR) and a route policy.
   * 
   * @param request - DeleteRouteMapAssociationRequest
   * @returns DeleteRouteMapAssociationResponse
   */
  async deleteRouteMapAssociation(request: $_model.DeleteRouteMapAssociationRequest): Promise<$_model.DeleteRouteMapAssociationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteRouteMapAssociationWithOptions(request, runtime);
  }

  /**
   * Queries the disabled route entry of an Express Connect Router (ECR).
   * 
   * @param request - DescribeDisabledExpressConnectRouterRouteEntriesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDisabledExpressConnectRouterRouteEntriesResponse
   */
  async describeDisabledExpressConnectRouterRouteEntriesWithOptions(request: $_model.DescribeDisabledExpressConnectRouterRouteEntriesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDisabledExpressConnectRouterRouteEntriesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.version)) {
      query["Version"] = request.version;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.ecrId)) {
      body["EcrId"] = request.ecrId;
    }

    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDisabledExpressConnectRouterRouteEntries",
      version: "2023-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDisabledExpressConnectRouterRouteEntriesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDisabledExpressConnectRouterRouteEntriesResponse({}));
  }

  /**
   * Queries the disabled route entry of an Express Connect Router (ECR).
   * 
   * @param request - DescribeDisabledExpressConnectRouterRouteEntriesRequest
   * @returns DescribeDisabledExpressConnectRouterRouteEntriesResponse
   */
  async describeDisabledExpressConnectRouterRouteEntries(request: $_model.DescribeDisabledExpressConnectRouterRouteEntriesRequest): Promise<$_model.DescribeDisabledExpressConnectRouterRouteEntriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDisabledExpressConnectRouterRouteEntriesWithOptions(request, runtime);
  }

  /**
   * Queries a list of Express Connect Router (ECR) instances.
   * 
   * @param request - DescribeExpressConnectRouterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeExpressConnectRouterResponse
   */
  async describeExpressConnectRouterWithOptions(request: $_model.DescribeExpressConnectRouterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeExpressConnectRouterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.version)) {
      query["Version"] = request.version;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.ecrId)) {
      body["EcrId"] = request.ecrId;
    }

    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.tag)) {
      body["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeExpressConnectRouter",
      version: "2023-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeExpressConnectRouterResponse>(await this.callApi(params, req, runtime), new $_model.DescribeExpressConnectRouterResponse({}));
  }

  /**
   * Queries a list of Express Connect Router (ECR) instances.
   * 
   * @param request - DescribeExpressConnectRouterRequest
   * @returns DescribeExpressConnectRouterResponse
   */
  async describeExpressConnectRouter(request: $_model.DescribeExpressConnectRouterRequest): Promise<$_model.DescribeExpressConnectRouterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeExpressConnectRouterWithOptions(request, runtime);
  }

  /**
   * Queries the history of prefix routes for an Express Connect Router (ECR).
   * 
   * @param request - DescribeExpressConnectRouterAllowedPrefixHistoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeExpressConnectRouterAllowedPrefixHistoryResponse
   */
  async describeExpressConnectRouterAllowedPrefixHistoryWithOptions(request: $_model.DescribeExpressConnectRouterAllowedPrefixHistoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeExpressConnectRouterAllowedPrefixHistoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.version)) {
      query["Version"] = request.version;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.associationId)) {
      body["AssociationId"] = request.associationId;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.ecrId)) {
      body["EcrId"] = request.ecrId;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceType)) {
      body["InstanceType"] = request.instanceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeExpressConnectRouterAllowedPrefixHistory",
      version: "2023-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeExpressConnectRouterAllowedPrefixHistoryResponse>(await this.callApi(params, req, runtime), new $_model.DescribeExpressConnectRouterAllowedPrefixHistoryResponse({}));
  }

  /**
   * Queries the history of prefix routes for an Express Connect Router (ECR).
   * 
   * @param request - DescribeExpressConnectRouterAllowedPrefixHistoryRequest
   * @returns DescribeExpressConnectRouterAllowedPrefixHistoryResponse
   */
  async describeExpressConnectRouterAllowedPrefixHistory(request: $_model.DescribeExpressConnectRouterAllowedPrefixHistoryRequest): Promise<$_model.DescribeExpressConnectRouterAllowedPrefixHistoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeExpressConnectRouterAllowedPrefixHistoryWithOptions(request, runtime);
  }

  /**
   * Queries the virtual private clouds (VPCs) and transit routers (TRs) associated with an Express Connect Router (ECR).
   * 
   * @param request - DescribeExpressConnectRouterAssociationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeExpressConnectRouterAssociationResponse
   */
  async describeExpressConnectRouterAssociationWithOptions(request: $_model.DescribeExpressConnectRouterAssociationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeExpressConnectRouterAssociationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.version)) {
      query["Version"] = request.version;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.associationId)) {
      body["AssociationId"] = request.associationId;
    }

    if (!$dara.isNull(request.associationNodeType)) {
      body["AssociationNodeType"] = request.associationNodeType;
    }

    if (!$dara.isNull(request.associationRegionId)) {
      body["AssociationRegionId"] = request.associationRegionId;
    }

    if (!$dara.isNull(request.cenId)) {
      body["CenId"] = request.cenId;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.ecrId)) {
      body["EcrId"] = request.ecrId;
    }

    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.transitRouterId)) {
      body["TransitRouterId"] = request.transitRouterId;
    }

    if (!$dara.isNull(request.vpcId)) {
      body["VpcId"] = request.vpcId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeExpressConnectRouterAssociation",
      version: "2023-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeExpressConnectRouterAssociationResponse>(await this.callApi(params, req, runtime), new $_model.DescribeExpressConnectRouterAssociationResponse({}));
  }

  /**
   * Queries the virtual private clouds (VPCs) and transit routers (TRs) associated with an Express Connect Router (ECR).
   * 
   * @param request - DescribeExpressConnectRouterAssociationRequest
   * @returns DescribeExpressConnectRouterAssociationResponse
   */
  async describeExpressConnectRouterAssociation(request: $_model.DescribeExpressConnectRouterAssociationRequest): Promise<$_model.DescribeExpressConnectRouterAssociationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeExpressConnectRouterAssociationWithOptions(request, runtime);
  }

  /**
   * Queries the virtual border routers (VBRs) associated with an Express Connect Router (ECR).
   * 
   * @param request - DescribeExpressConnectRouterChildInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeExpressConnectRouterChildInstanceResponse
   */
  async describeExpressConnectRouterChildInstanceWithOptions(request: $_model.DescribeExpressConnectRouterChildInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeExpressConnectRouterChildInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.version)) {
      query["Version"] = request.version;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.associationId)) {
      body["AssociationId"] = request.associationId;
    }

    if (!$dara.isNull(request.childInstanceId)) {
      body["ChildInstanceId"] = request.childInstanceId;
    }

    if (!$dara.isNull(request.childInstanceRegionId)) {
      body["ChildInstanceRegionId"] = request.childInstanceRegionId;
    }

    if (!$dara.isNull(request.childInstanceType)) {
      body["ChildInstanceType"] = request.childInstanceType;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.ecrId)) {
      body["EcrId"] = request.ecrId;
    }

    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeExpressConnectRouterChildInstance",
      version: "2023-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeExpressConnectRouterChildInstanceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeExpressConnectRouterChildInstanceResponse({}));
  }

  /**
   * Queries the virtual border routers (VBRs) associated with an Express Connect Router (ECR).
   * 
   * @param request - DescribeExpressConnectRouterChildInstanceRequest
   * @returns DescribeExpressConnectRouterChildInstanceResponse
   */
  async describeExpressConnectRouterChildInstance(request: $_model.DescribeExpressConnectRouterChildInstanceRequest): Promise<$_model.DescribeExpressConnectRouterChildInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeExpressConnectRouterChildInstanceWithOptions(request, runtime);
  }

  /**
   * Queries the cross-region forwarding mode of an Express Connect Router (ECR).
   * 
   * @param request - DescribeExpressConnectRouterInterRegionTransitModeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeExpressConnectRouterInterRegionTransitModeResponse
   */
  async describeExpressConnectRouterInterRegionTransitModeWithOptions(request: $_model.DescribeExpressConnectRouterInterRegionTransitModeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeExpressConnectRouterInterRegionTransitModeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.version)) {
      query["Version"] = request.version;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.ecrId)) {
      body["EcrId"] = request.ecrId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeExpressConnectRouterInterRegionTransitMode",
      version: "2023-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeExpressConnectRouterInterRegionTransitModeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeExpressConnectRouterInterRegionTransitModeResponse({}));
  }

  /**
   * Queries the cross-region forwarding mode of an Express Connect Router (ECR).
   * 
   * @param request - DescribeExpressConnectRouterInterRegionTransitModeRequest
   * @returns DescribeExpressConnectRouterInterRegionTransitModeResponse
   */
  async describeExpressConnectRouterInterRegionTransitMode(request: $_model.DescribeExpressConnectRouterInterRegionTransitModeRequest): Promise<$_model.DescribeExpressConnectRouterInterRegionTransitModeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeExpressConnectRouterInterRegionTransitModeWithOptions(request, runtime);
  }

  /**
   * Queries the regions where Express Connect Router (ECR) resources are located.
   * 
   * @param request - DescribeExpressConnectRouterRegionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeExpressConnectRouterRegionResponse
   */
  async describeExpressConnectRouterRegionWithOptions(request: $_model.DescribeExpressConnectRouterRegionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeExpressConnectRouterRegionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.version)) {
      query["Version"] = request.version;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.ecrId)) {
      body["EcrId"] = request.ecrId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeExpressConnectRouterRegion",
      version: "2023-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeExpressConnectRouterRegionResponse>(await this.callApi(params, req, runtime), new $_model.DescribeExpressConnectRouterRegionResponse({}));
  }

  /**
   * Queries the regions where Express Connect Router (ECR) resources are located.
   * 
   * @param request - DescribeExpressConnectRouterRegionRequest
   * @returns DescribeExpressConnectRouterRegionResponse
   */
  async describeExpressConnectRouterRegion(request: $_model.DescribeExpressConnectRouterRegionRequest): Promise<$_model.DescribeExpressConnectRouterRegionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeExpressConnectRouterRegionWithOptions(request, runtime);
  }

  /**
   * Queries the route entries of an Express Connect Router (ECR).
   * 
   * @param request - DescribeExpressConnectRouterRouteEntriesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeExpressConnectRouterRouteEntriesResponse
   */
  async describeExpressConnectRouterRouteEntriesWithOptions(request: $_model.DescribeExpressConnectRouterRouteEntriesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeExpressConnectRouterRouteEntriesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.version)) {
      query["Version"] = request.version;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.asPath)) {
      body["AsPath"] = request.asPath;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.community)) {
      body["Community"] = request.community;
    }

    if (!$dara.isNull(request.destinationCidrBlock)) {
      body["DestinationCidrBlock"] = request.destinationCidrBlock;
    }

    if (!$dara.isNull(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.ecrId)) {
      body["EcrId"] = request.ecrId;
    }

    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.nexthopInstanceId)) {
      body["NexthopInstanceId"] = request.nexthopInstanceId;
    }

    if (!$dara.isNull(request.queryRegionId)) {
      body["QueryRegionId"] = request.queryRegionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeExpressConnectRouterRouteEntries",
      version: "2023-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeExpressConnectRouterRouteEntriesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeExpressConnectRouterRouteEntriesResponse({}));
  }

  /**
   * Queries the route entries of an Express Connect Router (ECR).
   * 
   * @param request - DescribeExpressConnectRouterRouteEntriesRequest
   * @returns DescribeExpressConnectRouterRouteEntriesResponse
   */
  async describeExpressConnectRouterRouteEntries(request: $_model.DescribeExpressConnectRouterRouteEntriesRequest): Promise<$_model.DescribeExpressConnectRouterRouteEntriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeExpressConnectRouterRouteEntriesWithOptions(request, runtime);
  }

  /**
   * Queries flow logs.
   * 
   * @param request - DescribeFlowLogsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeFlowLogsResponse
   */
  async describeFlowLogsWithOptions(request: $_model.DescribeFlowLogsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeFlowLogsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.flowLogId)) {
      query["FlowLogId"] = request.flowLogId;
    }

    if (!$dara.isNull(request.flowLogName)) {
      query["FlowLogName"] = request.flowLogName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.logStoreName)) {
      query["LogStoreName"] = request.logStoreName;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.version)) {
      query["Version"] = request.version;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.ecrId)) {
      body["EcrId"] = request.ecrId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeFlowLogs",
      version: "2023-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeFlowLogsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeFlowLogsResponse({}));
  }

  /**
   * Queries flow logs.
   * 
   * @param request - DescribeFlowLogsRequest
   * @returns DescribeFlowLogsResponse
   */
  async describeFlowLogs(request: $_model.DescribeFlowLogsRequest): Promise<$_model.DescribeFlowLogsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeFlowLogsWithOptions(request, runtime);
  }

  /**
   * Queries the network instances authorized to an Express Connect Router (ECR).
   * 
   * @param request - DescribeInstanceGrantedToExpressConnectRouterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceGrantedToExpressConnectRouterResponse
   */
  async describeInstanceGrantedToExpressConnectRouterWithOptions(request: $_model.DescribeInstanceGrantedToExpressConnectRouterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceGrantedToExpressConnectRouterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.version)) {
      query["Version"] = request.version;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.callerType)) {
      body["CallerType"] = request.callerType;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.ecrId)) {
      body["EcrId"] = request.ecrId;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceOwnerId)) {
      body["InstanceOwnerId"] = request.instanceOwnerId;
    }

    if (!$dara.isNull(request.instanceRegionId)) {
      body["InstanceRegionId"] = request.instanceRegionId;
    }

    if (!$dara.isNull(request.instanceType)) {
      body["InstanceType"] = request.instanceType;
    }

    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.tagModels)) {
      body["TagModels"] = request.tagModels;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstanceGrantedToExpressConnectRouter",
      version: "2023-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstanceGrantedToExpressConnectRouterResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstanceGrantedToExpressConnectRouterResponse({}));
  }

  /**
   * Queries the network instances authorized to an Express Connect Router (ECR).
   * 
   * @param request - DescribeInstanceGrantedToExpressConnectRouterRequest
   * @returns DescribeInstanceGrantedToExpressConnectRouterResponse
   */
  async describeInstanceGrantedToExpressConnectRouter(request: $_model.DescribeInstanceGrantedToExpressConnectRouterRequest): Promise<$_model.DescribeInstanceGrantedToExpressConnectRouterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceGrantedToExpressConnectRouterWithOptions(request, runtime);
  }

  /**
   * Detaches a virtual border router (VBR) from an Express Connect Router (ECR).
   * 
   * @remarks
   * Before you call the **DetachExpressConnectRouterChildInstance** operation to detach a VBR instance from an Express Connect Router (ECR), ensure that the ECR is in the **Active** state.
   * 
   * @param request - DetachExpressConnectRouterChildInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetachExpressConnectRouterChildInstanceResponse
   */
  async detachExpressConnectRouterChildInstanceWithOptions(request: $_model.DetachExpressConnectRouterChildInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetachExpressConnectRouterChildInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.version)) {
      query["Version"] = request.version;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.childInstanceId)) {
      body["ChildInstanceId"] = request.childInstanceId;
    }

    if (!$dara.isNull(request.childInstanceType)) {
      body["ChildInstanceType"] = request.childInstanceType;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.ecrId)) {
      body["EcrId"] = request.ecrId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetachExpressConnectRouterChildInstance",
      version: "2023-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DetachExpressConnectRouterChildInstanceResponse>(await this.callApi(params, req, runtime), new $_model.DetachExpressConnectRouterChildInstanceResponse({}));
  }

  /**
   * Detaches a virtual border router (VBR) from an Express Connect Router (ECR).
   * 
   * @remarks
   * Before you call the **DetachExpressConnectRouterChildInstance** operation to detach a VBR instance from an Express Connect Router (ECR), ensure that the ECR is in the **Active** state.
   * 
   * @param request - DetachExpressConnectRouterChildInstanceRequest
   * @returns DetachExpressConnectRouterChildInstanceResponse
   */
  async detachExpressConnectRouterChildInstance(request: $_model.DetachExpressConnectRouterChildInstanceRequest): Promise<$_model.DetachExpressConnectRouterChildInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detachExpressConnectRouterChildInstanceWithOptions(request, runtime);
  }

  /**
   * Disables a route entry of an Express Connect Router (ECR).
   * 
   * @param request - DisableExpressConnectRouterRouteEntriesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableExpressConnectRouterRouteEntriesResponse
   */
  async disableExpressConnectRouterRouteEntriesWithOptions(request: $_model.DisableExpressConnectRouterRouteEntriesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableExpressConnectRouterRouteEntriesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.version)) {
      query["Version"] = request.version;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.destinationCidrBlock)) {
      body["DestinationCidrBlock"] = request.destinationCidrBlock;
    }

    if (!$dara.isNull(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.ecrId)) {
      body["EcrId"] = request.ecrId;
    }

    if (!$dara.isNull(request.nexthopInstanceId)) {
      body["NexthopInstanceId"] = request.nexthopInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableExpressConnectRouterRouteEntries",
      version: "2023-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableExpressConnectRouterRouteEntriesResponse>(await this.callApi(params, req, runtime), new $_model.DisableExpressConnectRouterRouteEntriesResponse({}));
  }

  /**
   * Disables a route entry of an Express Connect Router (ECR).
   * 
   * @param request - DisableExpressConnectRouterRouteEntriesRequest
   * @returns DisableExpressConnectRouterRouteEntriesResponse
   */
  async disableExpressConnectRouterRouteEntries(request: $_model.DisableExpressConnectRouterRouteEntriesRequest): Promise<$_model.DisableExpressConnectRouterRouteEntriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableExpressConnectRouterRouteEntriesWithOptions(request, runtime);
  }

  /**
   * Enables route entries for an Express Connect Router (ECR).
   * 
   * @param request - EnableExpressConnectRouterRouteEntriesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableExpressConnectRouterRouteEntriesResponse
   */
  async enableExpressConnectRouterRouteEntriesWithOptions(request: $_model.EnableExpressConnectRouterRouteEntriesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableExpressConnectRouterRouteEntriesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.version)) {
      query["Version"] = request.version;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.destinationCidrBlock)) {
      body["DestinationCidrBlock"] = request.destinationCidrBlock;
    }

    if (!$dara.isNull(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.ecrId)) {
      body["EcrId"] = request.ecrId;
    }

    if (!$dara.isNull(request.nexthopInstanceId)) {
      body["NexthopInstanceId"] = request.nexthopInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableExpressConnectRouterRouteEntries",
      version: "2023-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableExpressConnectRouterRouteEntriesResponse>(await this.callApi(params, req, runtime), new $_model.EnableExpressConnectRouterRouteEntriesResponse({}));
  }

  /**
   * Enables route entries for an Express Connect Router (ECR).
   * 
   * @param request - EnableExpressConnectRouterRouteEntriesRequest
   * @returns EnableExpressConnectRouterRouteEntriesResponse
   */
  async enableExpressConnectRouterRouteEntries(request: $_model.EnableExpressConnectRouterRouteEntriesRequest): Promise<$_model.EnableExpressConnectRouterRouteEntriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableExpressConnectRouterRouteEntriesWithOptions(request, runtime);
  }

  /**
   * Force deletes an Express Connect Router (ECR) and detaches its associated virtual private clouds (VPCs), Transit Routers (TRs), and virtual border routers (VBRs).
   * 
   * @remarks
   * - Force deleting an Express Connect Router (ECR) instance detaches all associated resources. Before you proceed, confirm that this operation does not disrupt your services.
   * - You can delete only ECR instances that are in the **Active** state.
   * 
   * @param request - ForceDeleteExpressConnectRouterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ForceDeleteExpressConnectRouterResponse
   */
  async forceDeleteExpressConnectRouterWithOptions(request: $_model.ForceDeleteExpressConnectRouterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ForceDeleteExpressConnectRouterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.version)) {
      query["Version"] = request.version;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.ecrId)) {
      body["EcrId"] = request.ecrId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ForceDeleteExpressConnectRouter",
      version: "2023-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ForceDeleteExpressConnectRouterResponse>(await this.callApi(params, req, runtime), new $_model.ForceDeleteExpressConnectRouterResponse({}));
  }

  /**
   * Force deletes an Express Connect Router (ECR) and detaches its associated virtual private clouds (VPCs), Transit Routers (TRs), and virtual border routers (VBRs).
   * 
   * @remarks
   * - Force deleting an Express Connect Router (ECR) instance detaches all associated resources. Before you proceed, confirm that this operation does not disrupt your services.
   * - You can delete only ECR instances that are in the **Active** state.
   * 
   * @param request - ForceDeleteExpressConnectRouterRequest
   * @returns ForceDeleteExpressConnectRouterResponse
   */
  async forceDeleteExpressConnectRouter(request: $_model.ForceDeleteExpressConnectRouterRequest): Promise<$_model.ForceDeleteExpressConnectRouterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.forceDeleteExpressConnectRouterWithOptions(request, runtime);
  }

  /**
   * Grants a virtual private cloud (VPC) or virtual border router (VBR) authorization to a cross-account Express Connect Router (ECR).
   * 
   * @remarks
   * To associate a cross-account network instance with an Express Connect Router (ECR) instance, you must grant the network instance authorization to the Express Connect Router (ECR) instance.
   * 
   * @param request - GrantInstanceToExpressConnectRouterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GrantInstanceToExpressConnectRouterResponse
   */
  async grantInstanceToExpressConnectRouterWithOptions(request: $_model.GrantInstanceToExpressConnectRouterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GrantInstanceToExpressConnectRouterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.version)) {
      query["Version"] = request.version;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.ecrId)) {
      body["EcrId"] = request.ecrId;
    }

    if (!$dara.isNull(request.ecrOwnerAliUid)) {
      body["EcrOwnerAliUid"] = request.ecrOwnerAliUid;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceRegionId)) {
      body["InstanceRegionId"] = request.instanceRegionId;
    }

    if (!$dara.isNull(request.instanceType)) {
      body["InstanceType"] = request.instanceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GrantInstanceToExpressConnectRouter",
      version: "2023-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GrantInstanceToExpressConnectRouterResponse>(await this.callApi(params, req, runtime), new $_model.GrantInstanceToExpressConnectRouterResponse({}));
  }

  /**
   * Grants a virtual private cloud (VPC) or virtual border router (VBR) authorization to a cross-account Express Connect Router (ECR).
   * 
   * @remarks
   * To associate a cross-account network instance with an Express Connect Router (ECR) instance, you must grant the network instance authorization to the Express Connect Router (ECR) instance.
   * 
   * @param request - GrantInstanceToExpressConnectRouterRequest
   * @returns GrantInstanceToExpressConnectRouterResponse
   */
  async grantInstanceToExpressConnectRouter(request: $_model.GrantInstanceToExpressConnectRouterRequest): Promise<$_model.GrantInstanceToExpressConnectRouterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.grantInstanceToExpressConnectRouterWithOptions(request, runtime);
  }

  /**
   * Queries the regions that support Express Connect Router (ECR).
   * 
   * @param request - ListExpressConnectRouterSupportedRegionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListExpressConnectRouterSupportedRegionResponse
   */
  async listExpressConnectRouterSupportedRegionWithOptions(request: $_model.ListExpressConnectRouterSupportedRegionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListExpressConnectRouterSupportedRegionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.version)) {
      query["Version"] = request.version;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.nodeType)) {
      body["NodeType"] = request.nodeType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListExpressConnectRouterSupportedRegion",
      version: "2023-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListExpressConnectRouterSupportedRegionResponse>(await this.callApi(params, req, runtime), new $_model.ListExpressConnectRouterSupportedRegionResponse({}));
  }

  /**
   * Queries the regions that support Express Connect Router (ECR).
   * 
   * @param request - ListExpressConnectRouterSupportedRegionRequest
   * @returns ListExpressConnectRouterSupportedRegionResponse
   */
  async listExpressConnectRouterSupportedRegion(request: $_model.ListExpressConnectRouterSupportedRegionRequest): Promise<$_model.ListExpressConnectRouterSupportedRegionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listExpressConnectRouterSupportedRegionWithOptions(request, runtime);
  }

  /**
   * Queries the association between an Express Connect Router (ECR) and a route map.
   * 
   * @param request - ListRouteMapAssociationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRouteMapAssociationsResponse
   */
  async listRouteMapAssociationsWithOptions(request: $_model.ListRouteMapAssociationsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListRouteMapAssociationsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.associationId)) {
      query["AssociationId"] = request.associationId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.routeMapId)) {
      query["RouteMapId"] = request.routeMapId;
    }

    if (!$dara.isNull(request.version)) {
      query["Version"] = request.version;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.ecrId)) {
      body["EcrId"] = request.ecrId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRouteMapAssociations",
      version: "2023-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRouteMapAssociationsResponse>(await this.callApi(params, req, runtime), new $_model.ListRouteMapAssociationsResponse({}));
  }

  /**
   * Queries the association between an Express Connect Router (ECR) and a route map.
   * 
   * @param request - ListRouteMapAssociationsRequest
   * @returns ListRouteMapAssociationsResponse
   */
  async listRouteMapAssociations(request: $_model.ListRouteMapAssociationsRequest): Promise<$_model.ListRouteMapAssociationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRouteMapAssociationsWithOptions(request, runtime);
  }

  /**
   * Queries the list of tags bound to an Express Connect Router (ECR).
   * 
   * @param request - ListTagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagResourcesResponse
   */
  async listTagResourcesWithOptions(request: $_model.ListTagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.version)) {
      query["Version"] = request.version;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.resourceId)) {
      body["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tag)) {
      body["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTagResources",
      version: "2023-09-01",
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
   * Queries the list of tags bound to an Express Connect Router (ECR).
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: $_model.ListTagResourcesRequest): Promise<$_model.ListTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * Modifies the properties of an Express Connect Router (ECR), such as its name.
   * 
   * @remarks
   * You can modify an Express Connect Router (ECR) instance only when it is in the **Active** state.
   * 
   * @param request - ModifyExpressConnectRouterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyExpressConnectRouterResponse
   */
  async modifyExpressConnectRouterWithOptions(request: $_model.ModifyExpressConnectRouterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyExpressConnectRouterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.version)) {
      query["Version"] = request.version;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.ecrId)) {
      body["EcrId"] = request.ecrId;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyExpressConnectRouter",
      version: "2023-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyExpressConnectRouterResponse>(await this.callApi(params, req, runtime), new $_model.ModifyExpressConnectRouterResponse({}));
  }

  /**
   * Modifies the properties of an Express Connect Router (ECR), such as its name.
   * 
   * @remarks
   * You can modify an Express Connect Router (ECR) instance only when it is in the **Active** state.
   * 
   * @param request - ModifyExpressConnectRouterRequest
   * @returns ModifyExpressConnectRouterResponse
   */
  async modifyExpressConnectRouter(request: $_model.ModifyExpressConnectRouterRequest): Promise<$_model.ModifyExpressConnectRouterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyExpressConnectRouterWithOptions(request, runtime);
  }

  /**
   * Modifies the attributes of a child instance associated with an Express Connect Router (ECR).
   * 
   * @param request - ModifyExpressConnectRouterAssociationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyExpressConnectRouterAssociationResponse
   */
  async modifyExpressConnectRouterAssociationWithOptions(request: $_model.ModifyExpressConnectRouterAssociationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyExpressConnectRouterAssociationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.version)) {
      query["Version"] = request.version;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.associationId)) {
      body["AssociationId"] = request.associationId;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.ecrId)) {
      body["EcrId"] = request.ecrId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyExpressConnectRouterAssociation",
      version: "2023-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyExpressConnectRouterAssociationResponse>(await this.callApi(params, req, runtime), new $_model.ModifyExpressConnectRouterAssociationResponse({}));
  }

  /**
   * Modifies the attributes of a child instance associated with an Express Connect Router (ECR).
   * 
   * @param request - ModifyExpressConnectRouterAssociationRequest
   * @returns ModifyExpressConnectRouterAssociationResponse
   */
  async modifyExpressConnectRouterAssociation(request: $_model.ModifyExpressConnectRouterAssociationRequest): Promise<$_model.ModifyExpressConnectRouterAssociationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyExpressConnectRouterAssociationWithOptions(request, runtime);
  }

  /**
   * Modifies the prefixes for a virtual private cloud (VPC) or a transit router that is attached to an Express Connect Router (ECR).
   * 
   * @param request - ModifyExpressConnectRouterAssociationAllowedPrefixRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyExpressConnectRouterAssociationAllowedPrefixResponse
   */
  async modifyExpressConnectRouterAssociationAllowedPrefixWithOptions(request: $_model.ModifyExpressConnectRouterAssociationAllowedPrefixRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyExpressConnectRouterAssociationAllowedPrefixResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.version)) {
      query["Version"] = request.version;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.allowedPrefixes)) {
      body["AllowedPrefixes"] = request.allowedPrefixes;
    }

    if (!$dara.isNull(request.allowedPrefixesMode)) {
      body["AllowedPrefixesMode"] = request.allowedPrefixesMode;
    }

    if (!$dara.isNull(request.associationId)) {
      body["AssociationId"] = request.associationId;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.ecrId)) {
      body["EcrId"] = request.ecrId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      body["OwnerAccount"] = request.ownerAccount;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyExpressConnectRouterAssociationAllowedPrefix",
      version: "2023-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyExpressConnectRouterAssociationAllowedPrefixResponse>(await this.callApi(params, req, runtime), new $_model.ModifyExpressConnectRouterAssociationAllowedPrefixResponse({}));
  }

  /**
   * Modifies the prefixes for a virtual private cloud (VPC) or a transit router that is attached to an Express Connect Router (ECR).
   * 
   * @param request - ModifyExpressConnectRouterAssociationAllowedPrefixRequest
   * @returns ModifyExpressConnectRouterAssociationAllowedPrefixResponse
   */
  async modifyExpressConnectRouterAssociationAllowedPrefix(request: $_model.ModifyExpressConnectRouterAssociationAllowedPrefixRequest): Promise<$_model.ModifyExpressConnectRouterAssociationAllowedPrefixResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyExpressConnectRouterAssociationAllowedPrefixWithOptions(request, runtime);
  }

  /**
   * Modifies the attributes of a child instance (VBR) associated with an Express Connect Router (ECR).
   * 
   * @param request - ModifyExpressConnectRouterChildInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyExpressConnectRouterChildInstanceResponse
   */
  async modifyExpressConnectRouterChildInstanceWithOptions(request: $_model.ModifyExpressConnectRouterChildInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyExpressConnectRouterChildInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.version)) {
      query["Version"] = request.version;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.childInstanceId)) {
      body["ChildInstanceId"] = request.childInstanceId;
    }

    if (!$dara.isNull(request.childInstanceType)) {
      body["ChildInstanceType"] = request.childInstanceType;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.ecrId)) {
      body["EcrId"] = request.ecrId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyExpressConnectRouterChildInstance",
      version: "2023-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyExpressConnectRouterChildInstanceResponse>(await this.callApi(params, req, runtime), new $_model.ModifyExpressConnectRouterChildInstanceResponse({}));
  }

  /**
   * Modifies the attributes of a child instance (VBR) associated with an Express Connect Router (ECR).
   * 
   * @param request - ModifyExpressConnectRouterChildInstanceRequest
   * @returns ModifyExpressConnectRouterChildInstanceResponse
   */
  async modifyExpressConnectRouterChildInstance(request: $_model.ModifyExpressConnectRouterChildInstanceRequest): Promise<$_model.ModifyExpressConnectRouterChildInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyExpressConnectRouterChildInstanceWithOptions(request, runtime);
  }

  /**
   * Modifies the inter-region forwarding mode of an Express Connect Router (ECR).
   * 
   * @param request - ModifyExpressConnectRouterInterRegionTransitModeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyExpressConnectRouterInterRegionTransitModeResponse
   */
  async modifyExpressConnectRouterInterRegionTransitModeWithOptions(request: $_model.ModifyExpressConnectRouterInterRegionTransitModeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyExpressConnectRouterInterRegionTransitModeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.version)) {
      query["Version"] = request.version;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.ecrId)) {
      body["EcrId"] = request.ecrId;
    }

    if (!$dara.isNull(request.transitModeList)) {
      body["TransitModeList"] = request.transitModeList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyExpressConnectRouterInterRegionTransitMode",
      version: "2023-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyExpressConnectRouterInterRegionTransitModeResponse>(await this.callApi(params, req, runtime), new $_model.ModifyExpressConnectRouterInterRegionTransitModeResponse({}));
  }

  /**
   * Modifies the inter-region forwarding mode of an Express Connect Router (ECR).
   * 
   * @param request - ModifyExpressConnectRouterInterRegionTransitModeRequest
   * @returns ModifyExpressConnectRouterInterRegionTransitModeResponse
   */
  async modifyExpressConnectRouterInterRegionTransitMode(request: $_model.ModifyExpressConnectRouterInterRegionTransitModeRequest): Promise<$_model.ModifyExpressConnectRouterInterRegionTransitModeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyExpressConnectRouterInterRegionTransitModeWithOptions(request, runtime);
  }

  /**
   * Modifies the name, description, sampling rate, and sampling interval of a flow log.
   * 
   * @param request - ModifyFlowLogAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyFlowLogAttributeResponse
   */
  async modifyFlowLogAttributeWithOptions(request: $_model.ModifyFlowLogAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyFlowLogAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.flowLogId)) {
      query["FlowLogId"] = request.flowLogId;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.samplingRate)) {
      query["SamplingRate"] = request.samplingRate;
    }

    if (!$dara.isNull(request.version)) {
      query["Version"] = request.version;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.ecrId)) {
      body["EcrId"] = request.ecrId;
    }

    if (!$dara.isNull(request.flowLogName)) {
      body["FlowLogName"] = request.flowLogName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyFlowLogAttribute",
      version: "2023-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyFlowLogAttributeResponse>(await this.callApi(params, req, runtime), new $_model.ModifyFlowLogAttributeResponse({}));
  }

  /**
   * Modifies the name, description, sampling rate, and sampling interval of a flow log.
   * 
   * @param request - ModifyFlowLogAttributeRequest
   * @returns ModifyFlowLogAttributeResponse
   */
  async modifyFlowLogAttribute(request: $_model.ModifyFlowLogAttributeRequest): Promise<$_model.ModifyFlowLogAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyFlowLogAttributeWithOptions(request, runtime);
  }

  /**
   * Modifies the resource group to which an Express Connect Router (ECR) belongs.
   * 
   * @param request - MoveResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MoveResourceGroupResponse
   */
  async moveResourceGroupWithOptions(request: $_model.MoveResourceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.MoveResourceGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.version)) {
      query["Version"] = request.version;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.newResourceGroupId)) {
      body["NewResourceGroupId"] = request.newResourceGroupId;
    }

    if (!$dara.isNull(request.resourceId)) {
      body["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "MoveResourceGroup",
      version: "2023-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.MoveResourceGroupResponse>(await this.callApi(params, req, runtime), new $_model.MoveResourceGroupResponse({}));
  }

  /**
   * Modifies the resource group to which an Express Connect Router (ECR) belongs.
   * 
   * @param request - MoveResourceGroupRequest
   * @returns MoveResourceGroupResponse
   */
  async moveResourceGroup(request: $_model.MoveResourceGroupRequest): Promise<$_model.MoveResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.moveResourceGroupWithOptions(request, runtime);
  }

  /**
   * Revokes the authorization of a virtual private cloud (VPC) or virtual border router (VBR) on a cross-account Express Connect Router (ECR).
   * 
   * @param request - RevokeInstanceFromExpressConnectRouterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RevokeInstanceFromExpressConnectRouterResponse
   */
  async revokeInstanceFromExpressConnectRouterWithOptions(request: $_model.RevokeInstanceFromExpressConnectRouterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RevokeInstanceFromExpressConnectRouterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.version)) {
      query["Version"] = request.version;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.ecrId)) {
      body["EcrId"] = request.ecrId;
    }

    if (!$dara.isNull(request.ecrOwnerAliUid)) {
      body["EcrOwnerAliUid"] = request.ecrOwnerAliUid;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceRegionId)) {
      body["InstanceRegionId"] = request.instanceRegionId;
    }

    if (!$dara.isNull(request.instanceType)) {
      body["InstanceType"] = request.instanceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RevokeInstanceFromExpressConnectRouter",
      version: "2023-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RevokeInstanceFromExpressConnectRouterResponse>(await this.callApi(params, req, runtime), new $_model.RevokeInstanceFromExpressConnectRouterResponse({}));
  }

  /**
   * Revokes the authorization of a virtual private cloud (VPC) or virtual border router (VBR) on a cross-account Express Connect Router (ECR).
   * 
   * @param request - RevokeInstanceFromExpressConnectRouterRequest
   * @returns RevokeInstanceFromExpressConnectRouterResponse
   */
  async revokeInstanceFromExpressConnectRouter(request: $_model.RevokeInstanceFromExpressConnectRouterRequest): Promise<$_model.RevokeInstanceFromExpressConnectRouterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.revokeInstanceFromExpressConnectRouterWithOptions(request, runtime);
  }

  /**
   * Synchronizes the inter-region bandwidth limits for an Express Connect Router (ECR).
   * 
   * @remarks
   * You can update an ECR instance only when it is in the **Active** state.
   * 
   * @param request - SynchronizeExpressConnectRouterInterRegionBandwidthRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SynchronizeExpressConnectRouterInterRegionBandwidthResponse
   */
  async synchronizeExpressConnectRouterInterRegionBandwidthWithOptions(request: $_model.SynchronizeExpressConnectRouterInterRegionBandwidthRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SynchronizeExpressConnectRouterInterRegionBandwidthResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.version)) {
      query["Version"] = request.version;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.ecrId)) {
      body["EcrId"] = request.ecrId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SynchronizeExpressConnectRouterInterRegionBandwidth",
      version: "2023-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SynchronizeExpressConnectRouterInterRegionBandwidthResponse>(await this.callApi(params, req, runtime), new $_model.SynchronizeExpressConnectRouterInterRegionBandwidthResponse({}));
  }

  /**
   * Synchronizes the inter-region bandwidth limits for an Express Connect Router (ECR).
   * 
   * @remarks
   * You can update an ECR instance only when it is in the **Active** state.
   * 
   * @param request - SynchronizeExpressConnectRouterInterRegionBandwidthRequest
   * @returns SynchronizeExpressConnectRouterInterRegionBandwidthResponse
   */
  async synchronizeExpressConnectRouterInterRegionBandwidth(request: $_model.SynchronizeExpressConnectRouterInterRegionBandwidthRequest): Promise<$_model.SynchronizeExpressConnectRouterInterRegionBandwidthResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.synchronizeExpressConnectRouterInterRegionBandwidthWithOptions(request, runtime);
  }

  /**
   * Binds tags to an Express Connect Router (ECR). Each call to this operation binds tags to a single ECR instance, but you can bind multiple tags at a time.
   * 
   * @param request - TagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagResourcesResponse
   */
  async tagResourcesWithOptions(request: $_model.TagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.version)) {
      query["Version"] = request.version;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.resourceId)) {
      body["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tag)) {
      body["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "TagResources",
      version: "2023-09-01",
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
   * Binds tags to an Express Connect Router (ECR). Each call to this operation binds tags to a single ECR instance, but you can bind multiple tags at a time.
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: $_model.TagResourcesRequest): Promise<$_model.TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * Unbinds tags from an Express Connect Router (ECR).
   * 
   * @param request - UntagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UntagResourcesResponse
   */
  async untagResourcesWithOptions(request: $_model.UntagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UntagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.version)) {
      query["Version"] = request.version;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.all)) {
      body["All"] = request.all;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      body["DryRun"] = request.dryRun;
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
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UntagResources",
      version: "2023-09-01",
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
   * Unbinds tags from an Express Connect Router (ECR).
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: $_model.UntagResourcesRequest): Promise<$_model.UntagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  /**
   * Updates the association between an Express Connect Router (ECR) and a routing policy.
   * 
   * @param request - UpdateRouteMapAssociationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateRouteMapAssociationResponse
   */
  async updateRouteMapAssociationWithOptions(request: $_model.UpdateRouteMapAssociationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateRouteMapAssociationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.associationId)) {
      query["AssociationId"] = request.associationId;
    }

    if (!$dara.isNull(request.regionIdList)) {
      query["RegionIdList"] = request.regionIdList;
    }

    if (!$dara.isNull(request.version)) {
      query["Version"] = request.version;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.ecrId)) {
      body["EcrId"] = request.ecrId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateRouteMapAssociation",
      version: "2023-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateRouteMapAssociationResponse>(await this.callApi(params, req, runtime), new $_model.UpdateRouteMapAssociationResponse({}));
  }

  /**
   * Updates the association between an Express Connect Router (ECR) and a routing policy.
   * 
   * @param request - UpdateRouteMapAssociationRequest
   * @returns UpdateRouteMapAssociationResponse
   */
  async updateRouteMapAssociation(request: $_model.UpdateRouteMapAssociationRequest): Promise<$_model.UpdateRouteMapAssociationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateRouteMapAssociationWithOptions(request, runtime);
  }

}
