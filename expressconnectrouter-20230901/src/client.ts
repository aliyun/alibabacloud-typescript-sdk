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
   * Enables log delivery for flow logs.
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
   * Enables log delivery for flow logs.
   * 
   * @param request - ActivateFlowLogRequest
   * @returns ActivateFlowLogResponse
   */
  async activateFlowLog(request: $_model.ActivateFlowLogRequest): Promise<$_model.ActivateFlowLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.activateFlowLogWithOptions(request, runtime);
  }

  /**
   * Associates a virtual border router (VBR) with an Express Connect router (ECR).
   * 
   * @remarks
   * Before you call the **AttachExpressConnectRouterChildInstance** operation to associate a VBR with an ECR, make sure that the ECR is in the **Active** state.
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
   * Associates a virtual border router (VBR) with an Express Connect router (ECR).
   * 
   * @remarks
   * Before you call the **AttachExpressConnectRouterChildInstance** operation to associate a VBR with an ECR, make sure that the ECR is in the **Active** state.
   * 
   * @param request - AttachExpressConnectRouterChildInstanceRequest
   * @returns AttachExpressConnectRouterChildInstanceResponse
   */
  async attachExpressConnectRouterChildInstance(request: $_model.AttachExpressConnectRouterChildInstanceRequest): Promise<$_model.AttachExpressConnectRouterChildInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.attachExpressConnectRouterChildInstanceWithOptions(request, runtime);
  }

  /**
   * Checks the Cloud Data Transfer (CDT) service required to add a region to an Express Connect router (ECR).
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
   * Checks the Cloud Data Transfer (CDT) service required to add a region to an Express Connect router (ECR).
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
   * After you create an ECR, it enters the **Active** state.
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
   * After you create an ECR, it enters the **Active** state.
   * 
   * @param request - CreateExpressConnectRouterRequest
   * @returns CreateExpressConnectRouterResponse
   */
  async createExpressConnectRouter(request: $_model.CreateExpressConnectRouterRequest): Promise<$_model.CreateExpressConnectRouterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createExpressConnectRouterWithOptions(request, runtime);
  }

  /**
   * Associates a virtual private cloud (VPC) or a transit router (TR) with an Express Connect router (ECR).
   * 
   * @param request - CreateExpressConnectRouterAssociationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateExpressConnectRouterAssociationResponse
   */
  async createExpressConnectRouterAssociationWithOptions(request: $_model.CreateExpressConnectRouterAssociationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateExpressConnectRouterAssociationResponse> {
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
   * Associates a virtual private cloud (VPC) or a transit router (TR) with an Express Connect router (ECR).
   * 
   * @param request - CreateExpressConnectRouterAssociationRequest
   * @returns CreateExpressConnectRouterAssociationResponse
   */
  async createExpressConnectRouterAssociation(request: $_model.CreateExpressConnectRouterAssociationRequest): Promise<$_model.CreateExpressConnectRouterAssociationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createExpressConnectRouterAssociationWithOptions(request, runtime);
  }

  /**
   * Creates a flow log and enables log delivery.
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
   * Creates a flow log and enables log delivery.
   * 
   * @param request - CreateFlowLogRequest
   * @returns CreateFlowLogResponse
   */
  async createFlowLog(request: $_model.CreateFlowLogRequest): Promise<$_model.CreateFlowLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createFlowLogWithOptions(request, runtime);
  }

  /**
   * Disables log delivery.
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
   * Disables log delivery.
   * 
   * @param request - DeactivateFlowLogRequest
   * @returns DeactivateFlowLogResponse
   */
  async deactivateFlowLog(request: $_model.DeactivateFlowLogRequest): Promise<$_model.DeactivateFlowLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deactivateFlowLogWithOptions(request, runtime);
  }

  /**
   * Deletes an Express Connect router (ECR).
   * 
   * @remarks
   * Take note of the following items:
   * *   Before you call this operation, make sure that all resources are disassociated from the ECR.
   * *   You can delete only ECRs that are in the **Active** state.
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
   * Deletes an Express Connect router (ECR).
   * 
   * @remarks
   * Take note of the following items:
   * *   Before you call this operation, make sure that all resources are disassociated from the ECR.
   * *   You can delete only ECRs that are in the **Active** state.
   * 
   * @param request - DeleteExpressConnectRouterRequest
   * @returns DeleteExpressConnectRouterResponse
   */
  async deleteExpressConnectRouter(request: $_model.DeleteExpressConnectRouterRequest): Promise<$_model.DeleteExpressConnectRouterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteExpressConnectRouterWithOptions(request, runtime);
  }

  /**
   * Disassociates an Express Connect router (ECR) from a virtual private cloud (VPC) or a transit router (TR).
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
   * Disassociates an Express Connect router (ECR) from a virtual private cloud (VPC) or a transit router (TR).
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
   * Queries the route entries that are disabled on an Express Connect router (ECR).
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
   * Queries the route entries that are disabled on an Express Connect router (ECR).
   * 
   * @param request - DescribeDisabledExpressConnectRouterRouteEntriesRequest
   * @returns DescribeDisabledExpressConnectRouterRouteEntriesResponse
   */
  async describeDisabledExpressConnectRouterRouteEntries(request: $_model.DescribeDisabledExpressConnectRouterRouteEntriesRequest): Promise<$_model.DescribeDisabledExpressConnectRouterRouteEntriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDisabledExpressConnectRouterRouteEntriesWithOptions(request, runtime);
  }

  /**
   * Queries a list of Express Connect routers (ECRs).
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
   * Queries a list of Express Connect routers (ECRs).
   * 
   * @param request - DescribeExpressConnectRouterRequest
   * @returns DescribeExpressConnectRouterResponse
   */
  async describeExpressConnectRouter(request: $_model.DescribeExpressConnectRouterRequest): Promise<$_model.DescribeExpressConnectRouterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeExpressConnectRouterWithOptions(request, runtime);
  }

  /**
   * Queries the historical route prefixes of an Express Connect router (ECR).
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
   * Queries the historical route prefixes of an Express Connect router (ECR).
   * 
   * @param request - DescribeExpressConnectRouterAllowedPrefixHistoryRequest
   * @returns DescribeExpressConnectRouterAllowedPrefixHistoryResponse
   */
  async describeExpressConnectRouterAllowedPrefixHistory(request: $_model.DescribeExpressConnectRouterAllowedPrefixHistoryRequest): Promise<$_model.DescribeExpressConnectRouterAllowedPrefixHistoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeExpressConnectRouterAllowedPrefixHistoryWithOptions(request, runtime);
  }

  /**
   * Queries the virtual private clouds (VPCs) and transit routers (TRs) associated with an Express Connect router (ECR).
   * 
   * @param request - DescribeExpressConnectRouterAssociationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeExpressConnectRouterAssociationResponse
   */
  async describeExpressConnectRouterAssociationWithOptions(request: $_model.DescribeExpressConnectRouterAssociationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeExpressConnectRouterAssociationResponse> {
    request.validate();
    let query = { };
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
   * Queries the virtual private clouds (VPCs) and transit routers (TRs) associated with an Express Connect router (ECR).
   * 
   * @param request - DescribeExpressConnectRouterAssociationRequest
   * @returns DescribeExpressConnectRouterAssociationResponse
   */
  async describeExpressConnectRouterAssociation(request: $_model.DescribeExpressConnectRouterAssociationRequest): Promise<$_model.DescribeExpressConnectRouterAssociationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeExpressConnectRouterAssociationWithOptions(request, runtime);
  }

  /**
   * Queries the virtual border routers (VBRs) that are associated with an Express Connect router (ECR).
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
   * Queries the virtual border routers (VBRs) that are associated with an Express Connect router (ECR).
   * 
   * @param request - DescribeExpressConnectRouterChildInstanceRequest
   * @returns DescribeExpressConnectRouterChildInstanceResponse
   */
  async describeExpressConnectRouterChildInstance(request: $_model.DescribeExpressConnectRouterChildInstanceRequest): Promise<$_model.DescribeExpressConnectRouterChildInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeExpressConnectRouterChildInstanceWithOptions(request, runtime);
  }

  /**
   * Queries the cross-region forwarding modes of an Express Connect router (ECR).
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
   * Queries the cross-region forwarding modes of an Express Connect router (ECR).
   * 
   * @param request - DescribeExpressConnectRouterInterRegionTransitModeRequest
   * @returns DescribeExpressConnectRouterInterRegionTransitModeResponse
   */
  async describeExpressConnectRouterInterRegionTransitMode(request: $_model.DescribeExpressConnectRouterInterRegionTransitModeRequest): Promise<$_model.DescribeExpressConnectRouterInterRegionTransitModeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeExpressConnectRouterInterRegionTransitModeWithOptions(request, runtime);
  }

  /**
   * Queries a list of regions in which resources related to an Express Connect router (ECR) are deployed.
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
   * Queries a list of regions in which resources related to an Express Connect router (ECR) are deployed.
   * 
   * @param request - DescribeExpressConnectRouterRegionRequest
   * @returns DescribeExpressConnectRouterRegionResponse
   */
  async describeExpressConnectRouterRegion(request: $_model.DescribeExpressConnectRouterRegionRequest): Promise<$_model.DescribeExpressConnectRouterRegionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeExpressConnectRouterRegionWithOptions(request, runtime);
  }

  /**
   * Queries the route entries of an Express Connect router (ECR).
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
   * Queries the route entries of an Express Connect router (ECR).
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
   * Queries the network instances whose permissions are granted to an Express Connect router (ECR).
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
   * Queries the network instances whose permissions are granted to an Express Connect router (ECR).
   * 
   * @param request - DescribeInstanceGrantedToExpressConnectRouterRequest
   * @returns DescribeInstanceGrantedToExpressConnectRouterResponse
   */
  async describeInstanceGrantedToExpressConnectRouter(request: $_model.DescribeInstanceGrantedToExpressConnectRouterRequest): Promise<$_model.DescribeInstanceGrantedToExpressConnectRouterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceGrantedToExpressConnectRouterWithOptions(request, runtime);
  }

  /**
   * Disassociates a virtual border router (VBR) from an Express Connect router (ECR).
   * 
   * @remarks
   * Before you call the **DetachExpressConnectRouterChildInstance** operation to uninstall a VBR from an ECR, make sure that the ECR is in the **Active** state.
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
   * Disassociates a virtual border router (VBR) from an Express Connect router (ECR).
   * 
   * @remarks
   * Before you call the **DetachExpressConnectRouterChildInstance** operation to uninstall a VBR from an ECR, make sure that the ECR is in the **Active** state.
   * 
   * @param request - DetachExpressConnectRouterChildInstanceRequest
   * @returns DetachExpressConnectRouterChildInstanceResponse
   */
  async detachExpressConnectRouterChildInstance(request: $_model.DetachExpressConnectRouterChildInstanceRequest): Promise<$_model.DetachExpressConnectRouterChildInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detachExpressConnectRouterChildInstanceWithOptions(request, runtime);
  }

  /**
   * Disables route entries of an Express Connect router (ECR).
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
   * Disables route entries of an Express Connect router (ECR).
   * 
   * @param request - DisableExpressConnectRouterRouteEntriesRequest
   * @returns DisableExpressConnectRouterRouteEntriesResponse
   */
  async disableExpressConnectRouterRouteEntries(request: $_model.DisableExpressConnectRouterRouteEntriesRequest): Promise<$_model.DisableExpressConnectRouterRouteEntriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableExpressConnectRouterRouteEntriesWithOptions(request, runtime);
  }

  /**
   * Enables route entries of an Express Connect router (ECR).
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
   * Enables route entries of an Express Connect router (ECR).
   * 
   * @param request - EnableExpressConnectRouterRouteEntriesRequest
   * @returns EnableExpressConnectRouterRouteEntriesResponse
   */
  async enableExpressConnectRouterRouteEntries(request: $_model.EnableExpressConnectRouterRouteEntriesRequest): Promise<$_model.EnableExpressConnectRouterRouteEntriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableExpressConnectRouterRouteEntriesWithOptions(request, runtime);
  }

  /**
   * Deletes an Express Connect router (ECR) and disassociates the virtual private cloud (VPC), transit router (TR), and virtual border router (VBR) associated with the ECR.
   * 
   * @remarks
   *   If you forcefully delete an ECR, all the resources associated with the ECR are disassociated at a time. Make sure that the disassociation does not affect the stability of your business.
   * *   You can delete only ECRs that are in the **Active** state.
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
   * Deletes an Express Connect router (ECR) and disassociates the virtual private cloud (VPC), transit router (TR), and virtual border router (VBR) associated with the ECR.
   * 
   * @remarks
   *   If you forcefully delete an ECR, all the resources associated with the ECR are disassociated at a time. Make sure that the disassociation does not affect the stability of your business.
   * *   You can delete only ECRs that are in the **Active** state.
   * 
   * @param request - ForceDeleteExpressConnectRouterRequest
   * @returns ForceDeleteExpressConnectRouterResponse
   */
  async forceDeleteExpressConnectRouter(request: $_model.ForceDeleteExpressConnectRouterRequest): Promise<$_model.ForceDeleteExpressConnectRouterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.forceDeleteExpressConnectRouterWithOptions(request, runtime);
  }

  /**
   * Grants permissions on a virtual private cloud (VPC) or a virtual border router (VBR) to an Express Connect router (ECR) of another account.
   * 
   * @remarks
   * When you associate a network instance of another account with an ECR, you must grant permissions on the network instance to the ECR.
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
   * Grants permissions on a virtual private cloud (VPC) or a virtual border router (VBR) to an Express Connect router (ECR) of another account.
   * 
   * @remarks
   * When you associate a network instance of another account with an ECR, you must grant permissions on the network instance to the ECR.
   * 
   * @param request - GrantInstanceToExpressConnectRouterRequest
   * @returns GrantInstanceToExpressConnectRouterResponse
   */
  async grantInstanceToExpressConnectRouter(request: $_model.GrantInstanceToExpressConnectRouterRequest): Promise<$_model.GrantInstanceToExpressConnectRouterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.grantInstanceToExpressConnectRouterWithOptions(request, runtime);
  }

  /**
   * Queries a list of regions in which the Express Connect router (ECR) feature is activated.
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
   * Queries a list of regions in which the Express Connect router (ECR) feature is activated.
   * 
   * @param request - ListExpressConnectRouterSupportedRegionRequest
   * @returns ListExpressConnectRouterSupportedRegionResponse
   */
  async listExpressConnectRouterSupportedRegion(request: $_model.ListExpressConnectRouterSupportedRegionRequest): Promise<$_model.ListExpressConnectRouterSupportedRegionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listExpressConnectRouterSupportedRegionWithOptions(request, runtime);
  }

  /**
   * Queries a list of tags that are added to an Express Connect router (ECR).
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
   * Queries a list of tags that are added to an Express Connect router (ECR).
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: $_model.ListTagResourcesRequest): Promise<$_model.ListTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * Modifies the properties such as the name of an Express Connect router (ECR).
   * 
   * @remarks
   * You can modify only properties of ECRs in the **Active** state.
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
   * Modifies the properties such as the name of an Express Connect router (ECR).
   * 
   * @remarks
   * You can modify only properties of ECRs in the **Active** state.
   * 
   * @param request - ModifyExpressConnectRouterRequest
   * @returns ModifyExpressConnectRouterResponse
   */
  async modifyExpressConnectRouter(request: $_model.ModifyExpressConnectRouterRequest): Promise<$_model.ModifyExpressConnectRouterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyExpressConnectRouterWithOptions(request, runtime);
  }

  /**
   * 修改专线网关关联的属性
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
   * 修改专线网关关联的属性
   * 
   * @param request - ModifyExpressConnectRouterAssociationRequest
   * @returns ModifyExpressConnectRouterAssociationResponse
   */
  async modifyExpressConnectRouterAssociation(request: $_model.ModifyExpressConnectRouterAssociationRequest): Promise<$_model.ModifyExpressConnectRouterAssociationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyExpressConnectRouterAssociationWithOptions(request, runtime);
  }

  /**
   * Modifies the route prefixes of a virtual private cloud (VPC) or a transit router (TR) that is associated with an Express Connect router (ECR).
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
   * Modifies the route prefixes of a virtual private cloud (VPC) or a transit router (TR) that is associated with an Express Connect router (ECR).
   * 
   * @param request - ModifyExpressConnectRouterAssociationAllowedPrefixRequest
   * @returns ModifyExpressConnectRouterAssociationAllowedPrefixResponse
   */
  async modifyExpressConnectRouterAssociationAllowedPrefix(request: $_model.ModifyExpressConnectRouterAssociationAllowedPrefixRequest): Promise<$_model.ModifyExpressConnectRouterAssociationAllowedPrefixResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyExpressConnectRouterAssociationAllowedPrefixWithOptions(request, runtime);
  }

  /**
   * 修改专线网关子实例的属性
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
   * 修改专线网关子实例的属性
   * 
   * @param request - ModifyExpressConnectRouterChildInstanceRequest
   * @returns ModifyExpressConnectRouterChildInstanceResponse
   */
  async modifyExpressConnectRouterChildInstance(request: $_model.ModifyExpressConnectRouterChildInstanceRequest): Promise<$_model.ModifyExpressConnectRouterChildInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyExpressConnectRouterChildInstanceWithOptions(request, runtime);
  }

  /**
   * Modifies the cross-region forwarding mode of an Express Connect router (ECR).
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
   * Modifies the cross-region forwarding mode of an Express Connect router (ECR).
   * 
   * @param request - ModifyExpressConnectRouterInterRegionTransitModeRequest
   * @returns ModifyExpressConnectRouterInterRegionTransitModeResponse
   */
  async modifyExpressConnectRouterInterRegionTransitMode(request: $_model.ModifyExpressConnectRouterInterRegionTransitModeRequest): Promise<$_model.ModifyExpressConnectRouterInterRegionTransitModeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyExpressConnectRouterInterRegionTransitModeWithOptions(request, runtime);
  }

  /**
   * Modifies the name, description, sampling rate, and sampling interval.
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
   * Modifies the name, description, sampling rate, and sampling interval.
   * 
   * @param request - ModifyFlowLogAttributeRequest
   * @returns ModifyFlowLogAttributeResponse
   */
  async modifyFlowLogAttribute(request: $_model.ModifyFlowLogAttributeRequest): Promise<$_model.ModifyFlowLogAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyFlowLogAttributeWithOptions(request, runtime);
  }

  /**
   * Modifies the resource group to which an Express Connect router (ECR) belongs.
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
   * Modifies the resource group to which an Express Connect router (ECR) belongs.
   * 
   * @param request - MoveResourceGroupRequest
   * @returns MoveResourceGroupResponse
   */
  async moveResourceGroup(request: $_model.MoveResourceGroupRequest): Promise<$_model.MoveResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.moveResourceGroupWithOptions(request, runtime);
  }

  /**
   * Revokes permissions on a virtual private cloud (VPC) or a virtual border router (VBR) from an Express Connect router (ECR) owned by another account.
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
   * Revokes permissions on a virtual private cloud (VPC) or a virtual border router (VBR) from an Express Connect router (ECR) owned by another account.
   * 
   * @param request - RevokeInstanceFromExpressConnectRouterRequest
   * @returns RevokeInstanceFromExpressConnectRouterResponse
   */
  async revokeInstanceFromExpressConnectRouter(request: $_model.RevokeInstanceFromExpressConnectRouterRequest): Promise<$_model.RevokeInstanceFromExpressConnectRouterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.revokeInstanceFromExpressConnectRouterWithOptions(request, runtime);
  }

  /**
   * Synchronizes the forwarding bandwidth limit between regions for an Express Connect router (ECR).
   * 
   * @remarks
   * Updates are allowed only when the ECR is in the **Active** state.
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
   * Synchronizes the forwarding bandwidth limit between regions for an Express Connect router (ECR).
   * 
   * @remarks
   * Updates are allowed only when the ECR is in the **Active** state.
   * 
   * @param request - SynchronizeExpressConnectRouterInterRegionBandwidthRequest
   * @returns SynchronizeExpressConnectRouterInterRegionBandwidthResponse
   */
  async synchronizeExpressConnectRouterInterRegionBandwidth(request: $_model.SynchronizeExpressConnectRouterInterRegionBandwidthRequest): Promise<$_model.SynchronizeExpressConnectRouterInterRegionBandwidthResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.synchronizeExpressConnectRouterInterRegionBandwidthWithOptions(request, runtime);
  }

  /**
   * Adds tags to an Express Connect router (ECR). You can add tags to only one ECR each time you call this operation. You can add multiple tags at a time.
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
   * Adds tags to an Express Connect router (ECR). You can add tags to only one ECR each time you call this operation. You can add multiple tags at a time.
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: $_model.TagResourcesRequest): Promise<$_model.TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * Removes tags from an Express Connect router (ECR).
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
   * Removes tags from an Express Connect router (ECR).
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: $_model.UntagResourcesRequest): Promise<$_model.UntagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

}
